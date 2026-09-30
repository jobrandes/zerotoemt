// netlify/functions/exam-debrief.js
// AI debrief function for the NREMT exam simulator
// Separate from tutor.js -- different context, different system prompt

import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Server-side kill switch: AI stays off until AI_FEATURES_ENABLED is "true".
  if (Netlify.env.get("AI_FEATURES_ENABLED") !== "true") return new Response("Coming soon.", { status: 503 });

  // Signed-in users only. Without this, anyone could spend the Anthropic key through this endpoint.
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const supaUrl = Netlify.env.get("SUPABASE_URL") || Netlify.env.get("REACT_APP_SUPABASE_URL");
  const anon = Netlify.env.get("REACT_APP_SUPABASE_ANON_KEY");
  let signedIn = false;
  let userId = null;
  if (token && supaUrl && anon) {
    try {
      const who = await fetch(`${supaUrl}/auth/v1/user`, { headers: { apikey: anon, Authorization: `Bearer ${token}` } });
      signedIn = who.ok;
      if (who.ok) userId = (await who.json())?.id || null;
    } catch {
      signedIn = false;
    }
  }
  if (!signedIn) return new Response("Please sign in.", { status: 401 });

  // Small per-user daily limit, so one account cannot run up the bill.
  try {
    const store = getStore("tutor-usage");
    const key = `debrief:${userId}:${new Date().toISOString().slice(0, 10)}`;
    const used = Number(await store.get(key)) || 0;
    if (used >= 10) return new Response("Daily debrief limit reached.", { status: 429 });
    await store.set(key, String(used + 1));
  } catch (e) {
    console.error("exam-debrief: usage store error:", e?.message);
    return new Response("Service unavailable.", { status: 503 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { examResults } = body;
  const message = typeof body.message === "string" ? body.message.slice(0, 2000) : "";
  // Keep only well-formed recent turns, each clipped, so a caller can't inflate the request.
  const conversationHistory = (Array.isArray(body.conversationHistory) ? body.conversationHistory : [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (!message) {
    return new Response("Missing message", { status: 400 });
  }

  // Build domain performance summary for system prompt
  const domainSummary = examResults?.domainScores
    ? Object.entries(examResults.domainScores)
        .map(([domain, scores]) => {
          const pct = Math.round((scores.correct / scores.total) * 100);
          const status =
            pct >= 80 ? "STRONG" : pct >= 70 ? "BORDERLINE" : "NEEDS WORK";
          return `- ${domain.charAt(0).toUpperCase() + domain.slice(1)}: ${scores.correct}/${scores.total} (${pct}%) -- ${status}`;
        })
        .join("\n")
    : "No domain breakdown available.";

  const overallPct = examResults
    ? Math.round((examResults.totalCorrect / examResults.totalQuestions) * 100)
    : null;

  const verdict = examResults?.verdict || "unknown";

  const systemPrompt = `You are an AI exam debrief coach for Zero to EMT, a free EMT pre-class training platform. A student just completed a 120-question NREMT practice exam simulator.

EXAM RESULTS:
- Overall score: ${examResults?.totalCorrect ?? "?"} / ${examResults?.totalQuestions ?? 120} (${overallPct ?? "?"}%)
- Verdict: ${verdict.toUpperCase()}
- Time used: ${examResults?.timeUsedMinutes ?? "?"} minutes of 120 available

DOMAIN BREAKDOWN:
${domainSummary}

YOUR ROLE:
You are a focused, honest exam debrief coach. Your job is to:
1. Help the student understand WHY they got questions wrong, not just THAT they got them wrong
2. Identify patterns in their weak domains and connect them to specific concepts
3. Give concrete, actionable study recommendations tied to specific Zero to EMT lessons
4. Be direct and honest -- false encouragement before an important exam is harmful
5. Keep responses concise and focused -- this student needs to study, not read long paragraphs

TONE:
- Honest, direct, warm but not patronizing
- Clinical language appropriate for an EMT student
- Specific recommendations, not generic advice
- If they did well, acknowledge it briefly and focus on the gaps that remain

IMPORTANT LIMITATIONS:
- You do not know which specific questions they got wrong unless they tell you
- You can infer based on domain scores which topic areas need the most work
- You are a study aid, not a replacement for formal EMT education
- Always remind them that this is a practice tool and the real exam may differ

ZERO TO EMT CURRICULUM REFERENCE (for study recommendations):
- Module 0: Foundation (EMS system, anatomy, medical terminology, legal/ethics)
- Module 1: Airway (respiratory anatomy, assessment, adjuncts, oxygen delivery)
- Module 2: Cardiology (heart anatomy, chest pain, ACS, cardiac arrest, arrhythmias)
- Module 3: Trauma (MOI, hemorrhage control, shock, TBI, chest/abdominal trauma)
- Module 4: Medical (AMS, diabetes, stroke, anaphylaxis, toxicology, environmental)
- Module 5: Operations (scene safety, ICS/MCI, documentation, vehicle ops)`;

  const messages = [
    ...conversationHistory,
    { role: "user", content: message },
  ];

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Netlify.env.get("ANTHROPIC_API_KEY"),
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: Netlify.env.get("TUTOR_MODEL") || "claude-haiku-4-5-20251001",
        max_tokens: 700,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
      return new Response("AI service error", { status: 502 });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("exam-debrief function error:", err);
    return new Response("Internal server error", { status: 500 });
  }
};

export const config = {
  path: "/api/exam-debrief",
};

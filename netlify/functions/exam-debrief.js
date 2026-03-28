// netlify/functions/exam-debrief.js
// AI debrief function for the NREMT exam simulator
// Separate from tutor.js -- different context, different system prompt

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { message, examResults, conversationHistory = [] } = body;

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
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
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

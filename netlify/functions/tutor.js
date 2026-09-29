// netlify/functions/tutor.js
// AI Tutor proxy. The Anthropic key never leaves the server.
//
// Who may call it:
//   - Signed-in users: a valid Supabase access token ("Authorization: Bearer ...").
//     Capped per user per day.
//   - Guests (Lesson 1 preview): send { guest: true }. A few questions per IP per day,
//     on the cheaper model, with a shorter reply cap.
// Everyone else gets a 401/429, so this endpoint can't be used as a free chatbot.

import { getStore } from "@netlify/blobs";

const USER_DAILY_LIMIT = 60;
const GUEST_DAILY_LIMIT = 3;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 2000;
const MAX_SYSTEM_CHARS = 20000;

const USER_MODEL = "claude-sonnet-5-5";
const GUEST_MODEL = "claude-haiku-4-5-20251001";

const ALLOWED_ORIGIN = /^(https:\/\/([a-z0-9-]+--)?zerotoemt\.netlify\.app|http:\/\/localhost(:\d+)?)$/;

const defaultEnv = (key) => globalThis.Netlify?.env?.get(key) ?? process.env[key];

const json = (obj, status = 200, headers = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });

const today = () => new Date().toISOString().slice(0, 10);

// Returns the Supabase user id for a valid access token, else null.
async function verifyUser(token, env, fetchFn) {
  if (!token) return null;
  const url = env("SUPABASE_URL") || env("REACT_APP_SUPABASE_URL");
  const anon = env("REACT_APP_SUPABASE_ANON_KEY");
  if (!url || !anon) return null;
  try {
    const res = await fetchFn(`${url}/auth/v1/user`, {
      headers: { apikey: anon, Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const user = await res.json();
    return user?.id || null;
  } catch {
    return null;
  }
}

// Counts one use against a daily limit. Returns { ok, remaining }.
async function spend(store, key, limit) {
  const current = Number(await store.get(key)) || 0;
  if (current >= limit) return { ok: false, remaining: 0 };
  await store.set(key, String(current + 1));
  return { ok: true, remaining: limit - current - 1 };
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return null;
  const out = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
  // The API needs the conversation to start with a user turn and end with one.
  while (out.length && out[0].role !== "user") out.shift();
  if (!out.length || out[out.length - 1].role !== "user") return null;
  return out;
}

export function createHandler({ env = defaultEnv, fetchFn = fetch, storeFn = () => getStore("tutor-usage") } = {}) {
  return async (req, context = {}) => {
    if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

    const origin = req.headers.get("origin");
    if (origin && !ALLOWED_ORIGIN.test(origin)) return json({ error: "Forbidden" }, 403);

    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Invalid request" }, 400);
    }

    const messages = cleanMessages(body?.messages);
    const system = typeof body?.system === "string" ? body.system.slice(0, MAX_SYSTEM_CHARS) : "";
    if (!messages) return json({ error: "Invalid request" }, 400);

    const auth = req.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    const userId = await verifyUser(token, env, fetchFn);
    const isGuest = !userId;

    if (isGuest && body?.guest !== true) return json({ error: "Please sign in to use the tutor." }, 401);

    const apiKey = env("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "Tutor is not configured." }, 503);

    // Daily usage limit.
    let remaining = null;
    try {
      const store = storeFn();
      const ip = context.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
      const who = isGuest ? `guest:${ip}` : `user:${userId}`;
      const spent = await spend(store, `${who}:${today()}`, isGuest ? GUEST_DAILY_LIMIT : USER_DAILY_LIMIT);
      remaining = spent.remaining;
      if (!spent.ok) {
        return json(
          { error: isGuest ? "guest_limit" : "daily_limit" },
          429,
          { "x-tutor-remaining": "0" }
        );
      }
    } catch (e) {
      console.log("tutor: usage store error:", e?.message);
      // Signed-in users keep working if the counter is down. Guests do not, so a
      // counter outage can never turn the free preview into an open door.
      if (isGuest) return json({ error: "The tutor preview is unavailable right now." }, 503);
    }

    const guestNote = isGuest
      ? "This is a free preview for a visitor without an account. Keep answers short and stay on this lesson's EMT topics only. Politely decline anything unrelated to EMT training.\n\n"
      : "";

    let upstream;
    try {
      upstream = await fetchFn("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: isGuest ? GUEST_MODEL : USER_MODEL,
          max_tokens: isGuest ? 500 : 800,
          system: guestNote + system,
          messages,
        }),
      });
    } catch (e) {
      console.log("tutor: upstream request failed:", e?.message);
      return json({ error: "Tutor request failed." }, 502);
    }

    const text = await upstream.text();
    if (!upstream.ok) {
      // Log and pass back the API's error type/message (never the key) so failures are diagnosable.
      let detail = {};
      try { detail = JSON.parse(text)?.error || {}; } catch { /* not JSON */ }
      console.log("tutor: upstream status", upstream.status, detail.type, detail.message);
      return json(
        { error: "upstream_error", upstream_status: upstream.status, type: detail.type || null, message: detail.message || null },
        502,
        remaining !== null ? { "x-tutor-remaining": String(remaining) } : {}
      );
    }
    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...(remaining !== null ? { "x-tutor-remaining": String(remaining) } : {}),
      },
    });
  };
}

export default createHandler();

// netlify/functions/delete-account.js
// Permanently deletes the signed-in user's account and data.
// Requires Netlify env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
// The caller must send their own Supabase access token as "Authorization: Bearer <token>".

import { createClient } from "@supabase/supabase-js";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const url = Netlify.env.get("SUPABASE_URL");
  const serviceKey = Netlify.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) {
    return new Response(JSON.stringify({ error: "Account deletion is not configured yet." }), { status: 503 });
  }

  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) {
    return new Response(JSON.stringify({ error: "Not signed in." }), { status: 401 });
  }

  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

  // Identify the user from THEIR token, never from anything in the request body.
  const { data: userData, error: userError } = await admin.auth.getUser(token);
  if (userError || !userData?.user) {
    return new Response(JSON.stringify({ error: "Invalid session." }), { status: 401 });
  }
  const userId = userData.user.id;

  // Remove the user's rows first. Errors are ignored per table (a table may not exist).
  const owned = [
    ["progress", "user_id"],
    ["exam_access", "user_id"],
    ["exam_results", "user_id"],
    ["feedback", "user_id"],
    ["profiles", "id"],
  ];
  for (const [table, column] of owned) {
    try {
      await admin.from(table).delete().eq(column, userId);
    } catch (e) {
      console.log("delete-account: skipped table", table);
    }
  }

  const { error: deleteError } = await admin.auth.admin.deleteUser(userId);
  if (deleteError) {
    console.log("delete-account: deleteUser failed", deleteError.message);
    return new Response(JSON.stringify({ error: "Could not delete the account. Please try again." }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
};

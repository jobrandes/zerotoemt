// netlify/functions/stripe-webhook.js
// Handles Stripe payment_intent.succeeded webhooks
// Grants exam access in Supabase when payment is confirmed

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  Netlify.env.get("SUPABASE_URL"),
  Netlify.env.get("SUPABASE_SERVICE_ROLE_KEY") // service role bypasses RLS
);

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  let rawBody;
  try {
    rawBody = await req.text();
  } catch {
    return new Response("Could not read request body", { status: 400 });
  }

  // Verify Stripe signature
  // NOTE: Full signature verification requires the Stripe SDK
  // Install: npm install stripe
  // Then uncomment the verification block below
  //
  // import Stripe from "stripe";
  // const stripe = new Stripe(Netlify.env.get("STRIPE_SECRET_KEY"));
  // let event;
  // try {
  //   event = stripe.webhooks.constructEvent(
  //     rawBody,
  //     signature,
  //     Netlify.env.get("STRIPE_WEBHOOK_SECRET")
  //   );
  // } catch (err) {
  //   console.error("Webhook signature verification failed:", err.message);
  //   return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  // }

  // Temporary: parse without verification (replace with above once Stripe SDK installed)
  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Only handle successful payment intents
  if (event.type !== "payment_intent.succeeded") {
    return new Response("Event type not handled", { status: 200 });
  }

  const paymentIntent = event.data.object;

  // The user_id must be passed in the payment intent metadata
  // Set this when creating the Stripe checkout session on the client
  const userId = paymentIntent.metadata?.user_id;
  const paymentId = paymentIntent.id;
  const amountCents = paymentIntent.amount; // Stripe amounts are in cents

  if (!userId) {
    console.error("No user_id in payment intent metadata:", paymentId);
    return new Response("Missing user_id in metadata", { status: 400 });
  }

  // Grant exam access in Supabase
  const { error } = await supabase.from("exam_access").upsert(
    {
      user_id: userId,
      granted_at: new Date().toISOString(),
      payment_id: paymentId,
      amount_cents: amountCents,
    },
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("Supabase upsert error:", error);
    return new Response("Database error", { status: 500 });
  }

  console.log(`Exam access granted for user ${userId}, payment ${paymentId}`);
  return new Response("Success", { status: 200 });
};

export const config = {
  path: "/api/stripe-webhook",
};

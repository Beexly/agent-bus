# TASK-012: Kit AI Receptionist upsell — spec for Hermes

- Status: OPEN / queued for Hermes
- Lane: Kit ($350 websites) — recurring-revenue upsell
- Date: 2026-09-11
- Spec owner: Motif. Builder: Hermes.

## Why this exists

Chatbase does $863.6K/mo (payment-verified via Stripe) selling AI chat
widgets to businesses: free plan at 50 msgs/mo, paid from ~$32–40/mo,
Standard $150/mo. The demand is proven and the price band is public.

Our wedge: Kit clients already trust us with their website. An AI
receptionist embedded in their $350 site — answers FAQs, captures leads,
covers after-hours — at **$49/mo** undercuts Chatbase's paid tier while
being zero extra vendors for the client to manage. This is also our first
true MRR line: every other lane is one-time. 10 Kit clients × 30% attach ×
$49 = ~$147/mo compounding, at ~$0 cost.

External name: **AI Receptionist**. Never "chatbot" in client-facing copy
— sell the outcome (never miss a lead), not the tech.

## Pricing

- $49/mo, cancel anytime. Annual $490 (2 months free).
- First month free with any new Kit site (lowers attach friction).
- No per-message metering for the client — flat, simple, plain-English.
- Internal rule (unchanged): nothing moves to paid infra until this lane
  has paid for it twice.

## Architecture ($0)

```
Kit site → <script> widget (vanilla JS, shadow DOM)
  → Vercel serverless /api/receptionist (same project as kit/)
  → Gemma 4 via Gemini API (AI Studio free tier — see "Model choice")
  → Supabase: receptionist_leads + usage counters
  → Resend: instant lead email to the business owner
```

- Widget: <10KB vanilla JS, shadow DOM (no CSS collisions with client
  sites), async non-blocking load. Cinematic styling tokens shared with
  Kit — it must look like it belongs on a 9.2+ site.
- Server: one Vercel function per concern — `/api/receptionist/chat`
  (inference), lead write is server-side inside the chat handler (never
  trust the client).
- Knowledge base: one JSON doc per client site (see schema below),
  injected as system context. v1: Motif/Garrett fills it from a 5-minute
  client intake call. v2 (later): self-serve intake form.

## Model choice (load-bearing detail)

Do NOT build on flagship Gemini 3.x — its free tier is ~5 requests/day
(observed July 2026), effectively unusable. Build on **Gemma 4**
(`gemma-4-31b-it`) through the same hosted Gemini API: ~1,500
requests/day free, 256K context, function calling, same `generateContent`
endpoint and request shape. It is the free-tier workhorse.

- Quota math: a local-business site does 5–50 chats/day. One shared key
  comfortably covers the first 20–30 clients. Scale plan is more keys /
  projects (still $0), not paid tier — paid tier only after the lane pays
  for it twice.
- Pace outbound calls (~15 RPM observed on free flash-class models);
  server-side queue, no client retries hammering the key.

## Knowledge-base schema (per client)

```json
{
  "site_id": "lone-star-plumbing",
  "business_name": "Lone Star Plumbing",
  "owner_name": "Mike",
  "services": [{"name": "Drain cleaning", "price": "from $89"}],
  "hours": {"mon_fri": "7a–7p", "sat": "8a–2p", "sun": "closed"},
  "service_area": "Greater Houston",
  "phone": "+1…",
  "faqs": [{"q": "Do you charge for estimates?", "a": "…"}],
  "tone": "friendly, plain-spoken, Texan",
  "escalation_number": "+1…"
}
```

Anything not in the KB does not get answered as fact. Ever. (The Air
Canada precedent: an airline was held liable when its chatbot invented a
policy. Our guardrail is the product.)

## Conversation design

- **Greeting:** business name + "What can I help you with today?" One
  line. No fake typing delays longer than 600ms.
- **FAQ:** answer strictly from KB. If the answer isn't there: "I don't
  want to guess on that — I'll have Mike confirm. What's the best number
  to reach you?" → lead capture.
- **Lead capture triggers:** booking request, pricing beyond KB, "talk to
  someone", after-hours contact, unanswered question. Capture: name +
  phone + what they need → read it back → write to Supabase → Resend
  email to owner within the minute.
- **After-hours mode:** "We're closed right now (hours), but I'll make
  sure Mike sees this first thing in the morning." Still captures the
  lead — after-hours capture is the headline selling point.
- **Negative sentiment:** immediate human handoff, no automated recovery
  attempts. "Let me get you straight to Mike: <phone>."
- **Never:** invent prices/hours/policies, claim to be human, take
  payments, give legal/medical/licensed-trade advice beyond the KB.

## Failure handling (typed, visible, no silent drops)

- **429 / quota exhausted:** widget degrades to a "Leave a message" lead
  form. The core value (lead capture) survives the outage — this fallback
  must be demonstrated in QA, not just coded.
- **API error / timeout:** same fallback; log to burn dashboard.
- **Abuse:** per-IP/session rate limit + per-site daily cap; counters in
  Supabase.
- **Free-tier burn dashboard:** daily requests vs the 1,500 RPD quota,
  per-site breakdown, 70% alert. Same pattern as TASK-011's burn
  dashboard — reuse the thinking, not necessarily the code.

## Demo (pre-payment, on the Kit sales page)

Interactive demo embedded in `/kit/`: a fictional Houston business
("Lone Star Plumbing" — invented, clearly labeled as a demo) with a live
receptionist the visitor can actually chat with. This is the $49/mo
closer and follows the standing doctrine: no premium offer without a
visible pre-payment demo. The demo hits the real endpoint with a demo KB
— no canned script, no fake conversation.

## Quality bar

- 9.2/10 floor, same as everything public. Cinematic, matches Kit art
  direction. No emoji-as-iconography, no generic chat-bubble clip-art.
- 390px mobile QA, reduced-motion QA, keyboard accessible, screen-reader
  labeled.
- Plain-English client onboarding: **RUNBOOK.md** — how to take a new
  client from intake call to live receptionist in under 30 minutes.

## Acceptance criteria

1. Live demo on the Kit page; full conversation recorded
   (Playwright/Recordly per the unified system).
2. One complete lead round-trip: chat → Supabase `receptionist_leads` →
   Resend email to owner, with transcript summary.
3. Quota-exceeded fallback demonstrated (lead form appears, lead still
   captured).
4. 390px + reduced-motion QA pass.
5. RUNBOOK.md: intake → KB JSON → deploy in <30 min.
6. Burn dashboard showing per-site usage vs quota.

## Build phases (Hermes)

1. Widget embed + styling + shadow-DOM isolation.
2. `/api/receptionist/chat` + Gemma 4 + KB injection + guardrail system
   prompt.
3. Lead capture → Supabase + Resend notification.
4. Rate limiting + burn dashboard + fallbacks.
5. Kit page demo section + upsell copy + pricing block.
6. RUNBOOK.md + QA evidence.

## Hard block — status 2026-09-11 (Garrett supplied key, tested live)

Garrett generated an AI Studio key and Motif tested it: the key is **valid**
(Google accepts it — not an auth error), but every request returns
`429 "Your prepayment credits are depleted"` on both `gemini-flash-latest`
and `gemma-4-31b-it`. The project behind the key has $0 prepay balance.

Garrett's move: open https://ai.studio/projects → check the project's
billing/prepay status. If Google wants upfront prepayment, that is a spend
decision — his call, and it conflicts with the $0 rule, so flag before
paying.

If he won't prepay: fallback providers are Cloudflare Workers AI (free
tier) or OpenRouter/Nous free models — re-spec the endpoint, same widget,
same KB design. The key itself is held by Garrett only; it is NOT stored
in this repo or in Motif's memory.

## Standing constraints (unchanged)

- $0 rule. No paid infra until the lane pays for it twice.
- Never invent business facts (Air Canada rule).
- No DMs/prospecting to sell this — it sells on the Kit page and in
  Garrett's own outreach.
- Affiliate disclosure where relevant; not on the Kit sales page itself.

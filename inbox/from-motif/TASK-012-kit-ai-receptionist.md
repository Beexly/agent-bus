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
  → NVIDIA NIM (build.nvidia.com — OpenAI-compatible, free tier; see "Model choice")
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

Provider is **NVIDIA NIM** (`https://integrate.api.nvidia.com/v1`) —
OpenAI-compatible `/chat/completions`, key prefix `nvapi-`. Free signup,
no credit card (phone verification required). Verified terms: ~1,000
inference credits on signup, ~40 requests/min per model. Lightweight
models cost fewer credits per call; when credits run out, flagship models
return 402 but smaller models stay usable under a baseline quota.

- Primary model: `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` —
  **verified live 2026-09-11** with Garrett's key (full chat completion
  round-trip). Fallbacks to try at build time if capacity shifts:
  `google/gemma-4-31b-it`, `google/gemma-3-12b-it`. Catalog rotates and
  free-tier workers saturate intermittently — the server must treat model
  choice as a runtime fallback chain, not a hardcoded constant.
  (Observed 2026-09-11: `meta/llama-3.1-8b-instruct` is end-of-life;
  `gemma-3-4b-it` and `mistral-7b-instruct-v0.3` returned 404 for the
  account; `gemma-4-31b-it` hung past 90s.)
- Quota math: a local-business site does 5–50 chats/day; short replies on
  an 8B model sip credits. One key covers the validation stage
  comfortably. If credits ever run dry, the 402 fallback (below) keeps
  lead capture alive, and the account dashboard is the source of truth
  for balances.
- Server-side pacing under ~40 RPM; queue outbound calls, never let
  client retries hammer the key.
- Rejected alternatives: Google AI Studio (Garrett's key tested live —
  429 "prepayment credits depleted" on every call; funding it breaks the
  $0 rule) and OpenRouter `:free` (only 50 req/day without a $10 deposit —
  too thin as the primary). OpenRouter stays a fallback leg.

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

- **429 (rate limit) / 402 (credits exhausted):** widget degrades to a
  "Leave a message" lead form. The core value (lead capture) survives the
  outage — this fallback must be demonstrated in QA, not just coded. On
  402, the server may retry once against a smaller baseline-quota model
  before falling back to the form.
- **503 (free-tier worker saturated — observed on NIM):** server-side
  retry with exponential backoff (1s → 2s → 4s), then step to the next
  model in the fallback chain before degrading to the lead form.
- **API error / timeout:** same fallback; log to burn dashboard.
- **Abuse:** per-IP/session rate limit + per-site daily cap; counters in
  Supabase.
- **Free-tier burn dashboard:** credits remaining + requests/min vs the
  ~40 RPM cap, per-site breakdown, 70% alert. Same pattern as TASK-011's
  burn dashboard — reuse the thinking, not necessarily the code.

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

## Hard block — one line for Garrett (updated: NVIDIA)

The Google AI Studio key Garrett supplied is valid but its project has $0
prepay credits (429 on every call, both models tested) — dead end unless
he wants to fund it, which breaks the $0 rule.

New path — **NVIDIA NIM**, free, no card:
1. Sign up at build.nvidia.com (phone verification required).
2. Generate an API key at build.nvidia.com/settings/api-keys (`nvapi-…`).
3. Paste it to Motif.

~1,000 inference credits on signup, ~40 req/min. Everything builds around
the key slot meanwhile; the key itself lives with Garrett only — never in
this repo or Motif's memory.

## Standing constraints (unchanged)

- $0 rule. No paid infra until the lane pays for it twice.
- Never invent business facts (Air Canada rule).
- No DMs/prospecting to sell this — it sells on the Kit page and in
  Garrett's own outreach.
- Affiliate disclosure where relevant; not on the Kit sales page itself.

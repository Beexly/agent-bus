# docs/ops/STRIPE_GO_LIVE_CHECKLIST.md
## What it is (1-2 sentences)
A Stripe go-live checklist verified against the real account on 2026-07-08, documenting the Galaxy Sports Network Stripe account, the six price IDs (Pro/Elite/Fantasy monthly+annual) matching code FOUNDING amounts, webhook endpoint setup with exact events, failure-code semantics (400 vs 503), the grandfathering rule, and `lookup_key` fallbacks.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Pricing facts: Pro Monthly $14.99 / Pro Annual $99.00 / Elite Monthly $24.99 / Elite Annual $179.00 / Fantasy Monthly $4.99 / Fantasy Annual $49.00 — all matching `apps/web/lib/pricing/pricing-phases.ts` FOUNDING to the cent (per doc).
## Data sources named
Live Stripe account `acct_1TPE9kQ2wPZMxx60` (read-only via Stripe connector), Stripe dashboard → Developers → Webhooks, handler `apps/web/app/api/webhooks/stripe/route.ts`, env vars on Vercel production.
## Findings (numbers and facts, not vibes)
- Six price IDs (doc states verified from the live account): PRO monthly `price_1TdsqBQ2wPZMxx6094V2T9cY` (1499), PRO annual `price_1TdsqCQ2wPZMxx60z4GWzgu9` (9900), ELITE monthly `price_1TdsqLQ2wPZMxx60eKtNl1cZ` (2499), ELITE annual `price_1TdsqLQ2wPZMxx60XVzOFPxd` (17900), FANTASY monthly `price_1TrOEIQ2wPZMxx60sgo6r9K5` (499), FANTASY annual `price_1TrOESQ2wPZMxx603FyIWvOe` (4900).
- Webhook endpoint (critical): `https://www.galaxysportsedge.com/api/webhooks/stripe` (www, not apex, because the apex 307-redirects and Stripe does not follow redirects); events: checkout.session.completed, customer.subscription.created/updated/deleted, invoice.payment_succeeded/failed/payment_action_required.
- 400 = missing/invalid `stripe-signature` (secret mismatch; a single stray 400 from a scanner is normal; a sustained run on real deliveries = wrong secret). 503 = database unreachable, deliberate fail-closed (Stripe retries with its default backoff; a sustained run = production DB down).
- Grandfathering rule: Stripe Prices are immutable — create a new Price for higher rates and PREPEND its id to the matching `STRIPE_*_PRICE_ID` (comma-separated), never just replace; webhook recognizes historical ids via `apps/web/lib/billing/price-ids.ts`.
- Lookup keys: `gse-fantasy-monthly`/`gse-fantasy-annual`, `gse-pro-monthly`/`gse-pro-annual`, `gse-elite-monthly`/`gse-elite-annual` as checkout+webhook fallback after env price IDs.
- Canonical host: `NEXT_PUBLIC_APP_URL=https://www.galaxysportsedge.com`; staging verification required: real test-mode checkout → webhook fires → Subscription row syncs to tier=PRO/ELITE → `/dashboard?upgraded=true` success banner.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — revenue infrastructure: this is the actual revenue gate (per doc: "Revenue is gated only on setting the six env vars + the webhook endpoint in production"); no engine-modeling content.
## Engine-actionable? (yes/no + one-line what)
No — billing/payment infrastructure with no modeling content; relevant only to the monetization lane, not the prediction engine.

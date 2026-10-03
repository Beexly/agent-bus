# subscriptions-and-paywall.md
## What it is (1-2 sentences)
A product spec for the subscriptions/paywall system: three pricing tiers, server-side-only enforcement architecture, Stripe integration details, and the subscription lifecycle.
## Key metrics/methods (formulas where given, else "not specified")
No formulas. Tier table: Free $0 — 1 pick/day, confidence hidden, no line movement, no alerts. Pro $19/mo — all picks + confidence + line movement, no alerts. Elite $49/mo — all picks + early access + confidence + line movement + alerts. Server-side entitlement logic (TypeScript sketch): canSeePremiumPicks/canSeeConfidence/canSeeLineMovement = PRO or ELITE; canGetAlerts = ELITE only; dailyPickLimit = 1 for free, null (unlimited) otherwise. Lifecycle: signup → Free; subscribe → Stripe checkout → webhook → tier activated; payment fails → 3-day grace period → downgrade to free; cancel → active until period end; upgrade immediate; downgrade at period end.
## Data sources named
None (Stripe webhooks: customer.subscription.created/updated/deleted, invoice.payment_succeeded/failed — product data sources, not intelligence feeds).
## Findings (numbers and facts, not vibes)
- Paywall is enforced server-side only: API route → auth middleware → entitlement check → filter data → response; the client receives only what the user is entitled to.
- Webhooks verified with stripe.webhooks.constructEvent() on the raw body; idempotency via stored event IDs.
- No custom billing UI — users manage subscriptions via the Stripe Customer Portal link generated server-side.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None applicable — monetization infrastructure spec, no intelligence content. (OTHER)
## Engine-actionable? (yes/no + one-line what)
No — paywall/enforcement infra spec with no engine or modeling content; pricing-tier decisions are a product call, not engine input.

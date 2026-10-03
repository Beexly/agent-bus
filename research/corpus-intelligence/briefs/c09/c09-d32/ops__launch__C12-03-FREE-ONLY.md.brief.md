# ops/launch/C12-03-FREE-ONLY.md
## What it is (1-2 sentences)
Verified enumeration (run against `hermes/c12-close-the-pass` @ `4e5a58963` + WIP) of every code path that can create a paid Stripe Checkout Session, plus the single server-side choke that closes all of them to make "free-only" real during the founding window — without breaking existing paying subscribers.
## Key metrics/methods (formulas where given, else "not specified")
not specified (enumeration + gating logic; no formulas)
## Data sources named
`apps/web/app/api/subscriptions/checkout/route.ts` (POST); `apps/web/components/pricing/subscribe-button.tsx:134`; `apps/web/components/pricing/tier-gate-panel.tsx`; `apps/web/lib/billing/paid-checkout.ts`; `__tests__/subscriptions-checkout-route.test.ts`; Stripe dashboard (Customers) — noted as the only way to answer whether any subscriber exists (keys live since 2026-07-09).
## Findings (numbers and facts, not vibes)
- Exactly ONE code path creates a Stripe Checkout Session: `apps/web/app/api/subscriptions/checkout/route.ts` (POST); its UI callers are the SubscribeButton (on `/pricing` and `/launch`) and `/dashboard` upgrade prompts via the same button/tier-gate panel.
- Dead ends verified absent: no marketing email system exists (only the settlement-outbox worker sends mail, and it links to the site, not checkout); no other session creation besides `subscriptions/portal` (existing customers only, cannot create a subscription) and `webhooks/stripe` (inbound only).
- The choke: `paidCheckoutOpen()` closes only on the literal trimmed, lowercased `"false"` of env `PAID_CHECKOUT_OPEN`; guard sits at the top of the checkout POST handler (`route.ts:59`), BEFORE auth/session lookup (closed state costs zero DB/Stripe work); returns 503 `paid_checkout_closed` with copy "Paid plans are opening soon. Everything free stays free — the board, stats, and alerts are open today."; the billing portal route is deliberately NOT gated.
- One-line revert: delete `PAID_CHECKOUT_OPEN` from Vercel env and redeploy (default is OPEN); any value other than the literal `"false"` also opens.
- Existing paying subscribers are unaffected by construction: entitlements resolve from webhook-synced Stripe subscriptions (free-only changes no entitlement code); portal stays open for management/cancel; the double-billing guard redirects live subscribers to the portal before the choke matters; a new subscription from an existing customer is intentionally blocked as well.
- Test pinning: 116/116 run green, including the 34-test checkout route file.
- Explicitly does NOT fix: S3 (minors) and S10 (ESPN rights) — both survive free-only (fixed separately in C12-02: always-on age gate, ESPN disclosure on /data); also does not fix the Neon/PITR unknown (no-revenue weeks still lose the database).
- Public sentence: "Everything on Galaxy Sports Edge is free during our founding window — the board, the stats, and the records. Paid tiers open shortly. The engine is a deterministic factor model with every factor shown; we're not AI, we're math you can read."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (product/billing ops): single-choke checkout gating pattern and subscriber-safe free-only construction.
## Engine-actionable? (yes/no + one-line what)
No — billing-surface ops; nothing for the prediction engine.

# docs/adr/003-server-side-paywall-hardening.md
## What it is (1-2 sentences)
Architecture Decision Record (accepted 2026-06-11, author: Autonomous loop) fixing a post-launch paywall audit finding: the `/api/board/state` endpoint leaked the numeric `confidence` (the platform's primary paid metric) to unauthenticated callers, and the billing pipeline had zero test coverage plus instant access cutoff on a single failed payment.
## Key metrics/methods (formulas where given, else "not specified")
- Grace window rule: `getUserEntitlements()` honors `PAST_DUE` subscriptions only when `pastDueSince` is within `PAST_DUE_GRACE_DAYS` = 7 days; outside the window — or if the anchor is missing — access fails closed to FREE.
- Migration `20260611160000_add_subscription_past_due_since`: `ALTER TABLE "subscriptions" ADD COLUMN "pastDueSince" TIMESTAMP(3)` (additive; existing PAST_DUE rows without an anchor fail closed).
## Data sources named
Stripe (webhook signature verification, `invoice.payment_failed`, dunning flow, `past_due` subscription status); no third-party sports data sources.
## Findings (numbers and facts, not vibes)
- 8 of 9 premium surfaces correctly gated premium data through `getUserEntitlements()`; the 9th (`/api/board/state`) exposed `confidence` to anyone with `curl`.
- The board page never renders the number, so the leak was invisible in the UI — API-level only.
- `redactBoardConfidence()` in `apps/web/lib/board/state.ts` nulls `confidence` across all three board lanes; the route checks `entitlements.canSeeConfidence` and serves the redacted payload to anonymous/FREE viewers; Edge Index stays public by design.
- One `invoice.payment_failed` set subscriptions to `PAST_DUE`, and `getUserEntitlements()` previously honored only `ACTIVE`/`TRIALING`, causing instant access cutoff while Stripe's dunning was still retrying.
- `pastDueSince` is stamped once on the first `invoice.payment_failed` (filtered on `pastDueSince: null` so retries cannot slide the window) and cleared on recovery.
- Four new test suites pin the revenue paths: `stripe-webhook-route.test.ts`, `subscriptions-checkout-route.test.ts`, `entitlements-enforcement.test.ts`, `board-state-confidence-gate.test.ts`.
- Prior to the ADR: zero test coverage on the Stripe webhook, checkout, and entitlement-lookup paths.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: server-side-only paywall enforcement and fail-closed posture around the engine's core paid metric (`confidence`).
- OTHER: billing/subscription product infrastructure.
## Engine-actionable? (yes/no + one-line what)
No — this is billing/product infrastructure, not prediction intelligence; the only engine-relevant takeaway is that the board `confidence` metric is now server-gated for all non-PRO tiers.

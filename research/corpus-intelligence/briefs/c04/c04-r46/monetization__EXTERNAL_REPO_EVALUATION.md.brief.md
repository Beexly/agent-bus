# docs/monetization/EXTERNAL_REPO_EVALUATION.md
## What it is (1-2 sentences)
A 2026-06-17 evaluation of ~20 open-source monetization/ads/billing repos plus 3 Claude Code "claude-ads" skills for fit against Galaxy Sports Edge. Bottom line: adopt ZERO as a dependency; the only net-new primitive found — an affiliate double-entry payout ledger — was built natively in-repo.

## Key metrics/methods (formulas where given, else "not specified")
- Affiliate ledger double-entry invariant: `accrueCommission` (refund-window hold), `clawbackCommission` (refund/chargeback reversal), `recordPayout` (validated against cleared payable), `auditLedger` (double-entry invariant check).
- Trust-safe upsell mechanic: Elite tier gets picks a fixed time window before Pro (real, time-based, non-fabricated).
- `TierGatePanel` honest teaser: show aggregate counts only ("7 locked picks today across MLB/NHL") — counts/sport labels, never selections/lines.
- Server-side seal paywall (deliberately stronger than blur-the-data): gated data is never sent to the client.

## Data sources named
- Stripe subscriptions + webhooks (`app/api/webhooks/stripe/route.ts`, `lib/stripe.ts`)
- In-repo: `lib/pricing/tier-access.ts`, `feature-gates.ts`, `components/pricing/pricing-plans.tsx` (`annualSavingsPct()`), `components/pricing/tier-gate-panel.tsx`, `lib/claude-api/budget-store.ts`, `numeric-guard.ts`, `apps/web/lib/affiliate/ledger.ts`

## Findings (numbers and facts, not vibes)
- Verdict across ~23 repos/skills: adopt ZERO as a dependency; platform monetization already live (Stripe webhooks with sig verify + idempotency, server-side entitlement gating, annual-vs-monthly savings math, soft paywall, failed-payment re-sync, AI/agent spend cap + numeric guard, affiliate offers draft-only).
- The single gap found — affiliate payout accounting (debits/credits/clawbacks) — was built natively as `lib/affiliate/ledger.ts`, pure, I/O-free, and tested; ADAPT-PATTERN credit to velobase/velobase-harness (MIT, v0.1.0), stripped of its USDT cashout and ad pixels.
- Activation still owner-gated: needs a Prisma model + migration for persistence and wiring into the promo-desk surface (no auto-migration).
- Rejected ideas: blurring locked picks (paywall leak regression vs server-side seal), urgency timers / pre-checked upsells / token-"currency" paywalls (dark patterns → banned-phrase + responsible-gaming conflicts), crypto/ILP rails (regulatory liability for betting-adjacent product), GPLv3 copyleft repos for proprietary SaaS.
- vlitejs/vlite flagged WATCH (conditional): MIT, TS, ~6KB Next.js-compatible video/audio player w/ IMA pre-roll — relevant only if a media surface ("The Beat") serves video, for free-tier ads only.
- The three "claude-ads" links are Claude Code plugins (dev-time agent tooling), not app code; used via `/plugin marketplace add`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Affiliate double-entry payout ledger pattern (OTHER)
- Server-side paywall seal vs blur-leak design (OTHER)
- Elite "early access" tier window as trust-safe monetization lever (OTHER)
- Honest aggregate-count teaser for locked picks (OTHER)
- AI/agent spend cap + numeric guard (OTHER)

## Engine-actionable? (yes/no + one-line what)
No — monetization infra decision record; nothing in it feeds prediction, calibration, or signal wiring.

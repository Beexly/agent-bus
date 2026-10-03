# ops/GO_LIVE_RUNBOOK.md
## What it is (1-2 sentences)
Owner action runbook (Claude Opus 4.8, grounded in `scripts/check-deploy-readiness.mjs` and `vercel.json`) for turning the codebase into a live, earning product safely via dark launch and one-gate-at-a-time staged rollout.
## Key metrics/methods (formulas where given, else "not specified")
- Gate dependency chain (enforced by readiness script): CANONICAL_HISTORY_ENABLED → DERIVED_MODEL_HISTORY_ENABLED → PUBLIC_PICKS_ENABLED → PERFORMANCE_STATS_ENABLED (+ OUTCOME_LEARNING_ENABLED) and PUBLIC_BLOG_ENABLED.
- Calibration activation: 100-pick activation floor of learning-eligible settled picks; calibrator is identity passthrough labeled uncalibrated until floor clears; out-of-sample validation required (train/test or k-fold, ECE improvement out-of-sample) before bumping MODEL_VERSION and unpinning `canApplyCalibrationAdjustments`.
- Conviction ("70%") tier publishes only picks with calibrated win probability >= 65% AND at or above the pick's price-specific break-even (`convictionTier()` enforces max(0.65, price break-even); example: -200 needs ~66.7%), plus an independent SPEAK edge and CLV beat-rate >= 50% over >= 20 graded picks.
- Pricing (FOUNDING phase, sole source `apps/web/lib/pricing/pricing-phases.ts`): Fantasy $4.99/$49, Pro $14.99/$99, Elite $24.99/$179. Free tier: 2 picks/day teaser (`dailyPickLimit: isPro ? null : 2`). Stripe price-id updates: PREPEND never replace (deleting an old ID silently downgrades founding members to FREE).
## Data sources named
The Odds API (500 req/mo free tier), Stripe, Upstash Redis, Neon/Supabase Postgres, Google Cloud OAuth, Anthropic content engine (stays OFF at launch).
## Findings (numbers and facts, not vibes)
- 15 required Vercel env vars checked by the readiness script (DATABASE_URL, DIRECT_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, GOOGLE_CLIENT_ID/SECRET, THE_ODDS_API_KEY, ANTHROPIC_API_KEY, REDIS_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_PRO_PRICE_ID, STRIPE_ELITE_PRICE_ID, NEXT_PUBLIC_APP_URL) plus strong CRON_SECRET (cron routes require `Authorization: Bearer <CRON_SECRET>`, verified enforced).
- Vercel Hobby crons are daily; repo uses external GitHub-Actions cron every 30 min, so Hobby is fine. GitHub-Actions cron hits `/api/cron/refresh-odds`, odds ingested as `isBootstrap=true`.
- Picks that settled before OUTCOME_LEARNING_ENABLED do not count toward the 100-pick floor — turn the flag on first or backfill eligibility.
- Panel ECE numbers are in-sample and indicative only; isotonic fitting almost always looks improved on its fit data.
- Deployed-but-dark engine state at write time: `conviction-tier.ts`, `calibration-apply.ts` (buildCalibrator), cockpit readiness panel built and tested; nothing in live scoring consumes them until the audited activation step.
- `apps/web/lib/stripe.ts` fails CLOSED: checkout 503s when a Stripe price's `unit_amount` disagrees with the advertised phase price.
- Pre-launch checklist: readiness green; `typecheck && test && guardrails && build` green; `DEV_FAKE_ADMIN=false`, `DEMO_PICKS_ENABLED=false` in prod (script blocks them).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Conviction-tier gate constants (65% calibrated prob, price break-even max, 50% CLV over 20 picks) and the 100-pick learning floor are the honest-edge proof policy — TRUST-SIGNAL (public credibility standards for published picks).
## Engine-actionable? (yes/no + one-line what)
No — launch-ops runbook; its calibration/conviction thresholds describe already-shipped gated code, nothing new to wire.

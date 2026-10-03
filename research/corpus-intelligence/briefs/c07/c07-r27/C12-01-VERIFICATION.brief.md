# ops/launch/C12-01-VERIFICATION.md
## What it is (1-2 sentences)
Seven open launch verifications actually executed by Hermes on branch `hermes/c12-close-the-pass` (off `origin/claude/launch-handoff-merge-g01115`) with literal command outputs: cron auth ordering, Google `email_verified` mapping, schema column existence, Stripe webhook dedupe, npm audit analysis, Neon backup/PITR documentation, and the calibration 3/10 readiness floor mechanism.
## Key metrics/methods (formulas where given, else "not specified")
- Cron auth: **25 cron route files** (not 22 — the 22/25 gap is itself a finding: 3 routes exist with no Vercel schedule; "22 schedules" and "25 routes" are different numbers). All 25 call `cronAuthError`/`authorizeCronRequest` first, before any DB work; timing-safe (`timingSafeEqual` after explicit length check). Confidence: 95%.
- npm audit matrix: 10 advisories — 1 critical (vitest UI server, dev-only), 6 high, 3 moderate. The one prod package (next, Image Optimizer DoS) has no reachable path: no `remotePatterns` configured in `apps/web/next.config.mjs`. All WAIVED with dates.
- Calibration floor: ≥100 learning-eligible settled picks before the calibrator publishes (`public-confidence.ts:16` self-suppresses; `report.ts:43` and `public-confidence.ts:43` filter `eligibleForLearning`; `scoring-reliability.ts:30` per-bucket min-sample floor).
## Data sources named
- Installed `node_modules/@auth/core/providers/google.js` (NextAuth v5): Google profile callback maps `email_verified` from the ID token; passed through the jwt callback into `apps/web/lib/auth.ts` — D-1 NOT broken. Confidence: 90% (no live Google round-trip per rails).
- `packages/db/prisma/schema.prisma` ~line 801 `PickSignalSnapshot`: `eligibleForLearning Boolean @default(false)`, `learningEligibleAt DateTime?`, `isBootstrap Boolean`, `settlementResult String?`, `settledAt DateTime?` — all exist, so D-4 stays a launch-day item.
- `apps/web/app/api/webhooks/stripe/route.ts:78` — dedupe check `where: { stripeEventId: event.id }` before handling; `stripeEventId` UNIQUE in `WebhookEvent` (schema.prisma:122); P2002 treated as benign duplicate. No double-apply. Confidence: 92%.
## Findings (numbers and facts, not vibes)
- Neon backup/PITR: NOT DOCUMENTED ANYWHERE IN REPO — grep of docs/README/CLAUDE.md for PITR/point-in-time/restore/backup returns zero operational hits; retention, RPO, RTO, restore procedure are a founder-only console question. Confidence: 98% (absence verified).
- The D-4 backfill is what makes the ≥100 floor reachable at all: pre-gate settled rows are invisible to the calibrator until backfilled, so "the 100-count clock effectively starts from the backfill, not from the first settlement."
- Calibration 3/10 readiness does not improve from code alone — it improves when real settled picks cross the floor. No re-score of C11.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration floor mechanics (≥100 learning-eligible settled, `eligibleForLearning` filtering) are trust-gating honesty for any published confidence.
- OTHER: security/auth ops (cron auth, Stripe dedupe, dependency audit, PITR gap).
## Engine-actionable? (yes/no + one-line what)
Yes — the ≥100 learning-eligible-settled floor and its consequence (the clock starts at the backfill, not the first settlement) should gate every calibration claim and dashboard; any calibration surface reading non-eligible rows is publishing untrustable numbers.

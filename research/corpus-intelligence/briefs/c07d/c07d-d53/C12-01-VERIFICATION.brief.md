# ops/launch/C12-01-VERIFICATION.md
## What it is (1-2 sentences)
Seven open launch verifications (C11) closed by a Hermes runtime session: cron auth enumeration, Google OAuth `email_verified`, D-4 schema columns, Stripe webhook dedupe, npm audit matrix, Neon backup/PITR documentation, and a calibration-readiness paragraph — each with an explicit confidence level and what was verified versus inferred.

## Key metrics/methods (formulas where given, else "not specified")
- **Calibration floor:** ≥100-settled floor enforced in code — `public-confidence.ts:16` (calibrator self-suppresses below ≥100 learning-eligible settled), `report.ts:43` and `public-confidence.ts:43` (both filter `signalSnapshot: { is: { eligibleForLearning: true } }`), `scoring-reliability.ts:30` (min-sample publish floor per bucket). No change to the 3/10 calibration readiness score: readiness improves only when real settled picks cross the floor, not from code.
- **Timing-safety method:** `authorizeCronSecret` → `safeEqual`/`timingSafeEqual` (node:crypto); ops route `hasOpsAuth` uses Bearer CRON_SECRET with `timingSafeEqual` after an explicit length check, matching `packages/util/src/safe-equal.ts`.
- **npm audit:** 10 advisories — 1 critical, 6 high, 3 moderate.

## Data sources named
- `apps/web/app/api/cron` — 25 cron route files; per-file grep for `cronAuthError(request)` / `authorizeCronRequest` (spot-verified ordering on gamma 42-vs-20+, board-fill 16→20, backfill-historical-games 15→18); `apps/web/app/api/ops/daily-truth` route.ts:37-49
- `node_modules/@auth/core/providers/google.js` (installed @auth/core under NextAuth v5) — Google profile callback maps `email_verified` from the ID token; `apps/web/lib/auth.ts` jwt callback receives `profile`
- `packages/db/prisma/schema.prisma` — `PickSignalSnapshot` (~line 801): `eligibleForLearning Boolean @default(false)`, `learningEligibleAt DateTime?`, `isBootstrap Boolean`, `settlementResult String?`, `settledAt DateTime?`; `WebhookEvent` (schema.prisma:122, `stripeEventId` UNIQUE)
- `apps/web/app/api/webhooks/stripe/route.ts` — dedupe check `where: { stripeEventId: event.id }` at `:78`, event recorded at `:99`, P2002 treated as benign duplicate at `:116-124`
- `apps/web/lib/conviction/signals/public-confidence.ts` (`:16`, `:43`), `report.ts` (`:43`), `scoring-reliability.ts` (`:30`)
- `apps/web/next.config.mjs` (no `remotePatterns` configured)

## Findings (numbers and facts, not vibes)
- **Cron auth: ENUMERATED, 25 routes not 22.** The 22/25 gap is itself the finding: three cron routes exist with no Vercel schedule — manual/ops-invoked, which is fine, but C11 conflated "22 schedules" with "25 routes." All 25 call auth as the FIRST statement before any `await db.*`. Answer: 26/26 routes authenticated (25 cron + `/api/ops/daily-truth`), all timing-safe, all before work. Confidence 95% (5% = grep-based ordering, not runtime trace).
- **Google `email_verified`: EXISTS** — verified against the installed @auth/core package, not docs; D-1 as written is NOT broken. Confidence 90% (no live Google round-trip — live keys, rails forbid exercising).
- **D-4 schema columns: ALL EXIST** — no schema change needed; D-4 stays a launch-day item, NOT reclassified.
- **Stripe webhook dedupe: PRESENT** — replayed `checkout.session.completed` returns early on second delivery via the event row; entitlement syncs additionally idempotent. No double-apply. Confidence 92% (read-verified, not exercised — live keys, rails forbid it).
- **npm audit: 10 advisories, NO FIX NOW.** Vitest critical (Vitest UI server arbitrary file read/exec) is dev-only — UI server never runs on Vercel; fix `^3.2.6` is a MAJOR from 2.1.9, so **WAIVE** until week one, revisit 2026-09-11. @vitest/mocker, vite, vite-node, esbuild, postcss, glob (moderate/high) ride along with the vitest major — same waiver. eslint-config-next→@next/eslint-plugin-next high: dev (lint) only, ships with next major — WAIVE. Next high (DoS via Image Optimizer `remotePatterns`): prod package, but `next.config.mjs` defines NO `remotePatterns` so the vulnerable path is unconfigured; stated fix 16.3.4 is a MAJOR from 14.2.35 with no 14.2.x backport in audit data — **WAIVE WITH REASON**; revisit if remotePatterns is ever added or on the scheduled 16.x upgrade; existing next waiver stays.
- **Neon backup/PITR: NOT DOCUMENTED ANYWHERE IN REPO.** Grepped docs/, README, CLAUDE.md for PITR/point-in-time/restore/backup: zero operational hits (only SOC2 prose and one unrelated feature-store doc). Retention, RPO, RTO, restore procedure unknowable from repo — console question, founder-only; written recommendation in C12-06 handoff as a before-deploy question with the exact console path. Confidence 98% (absence verified; content unverifiable from repo).
- **Calibration paragraph:** the ≥100-settled floor is real and enforced; pre-gate settled rows are invisible to the calibrator until the D-4 backfill, so the 100-count clock starts from the backfill, not from first settlement. Code alone cannot improve the 3/10 calibration score — only real settled picks crossing the floor can. "No change to C11's score; this paragraph is the mechanism, not a re-score."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **(OTHER — calibration/sizing program)** The ≥100 learning-eligible-settled floor with `eligibleForLearning` gating is the calibration program's binding constraint: nothing publishes below the floor, and the floor clock starts at the D-4 backfill — so capture freshness and settlement latency directly control when calibration becomes measurable. This connects to the props queue (Task 6): unmonitored capture gaps delay the 100-count just as surely as missing data.
- **(OTHER — program hygiene)** The audit-waiver discipline (no remotePatterns ⇒ no reachable path ⇒ waived-with-reason, re-visit trigger named) is the evidence-bar model for security findings in the engine pipeline: waivers must state the mechanism of non-reachability and the re-trigger condition.
- **(OTHER — ops integrity)** The cron 22/25 conflation is an enumeration lesson for any measurement the engine relies on: "routes" and "schedules" are different denominators; the same conflation error in a sports-data inventory (fixtures vs. events vs. snapshots) produces phantom coverage claims like the silent props join miss.
- **(OTHER — trust/intake)** The calibrator's self-suppression below the floor is honest calibration-state labeling: uncalibrated signals stay out of publication rather than shipping uncalibrated confidence — the same principle that pins `null`-not-neutral in the conviction gate.

## Engine-actionable? (yes/no + one-line what)
**No** (launch ops verification doc) — but the ≥100-settled floor mechanic directly bounds any calibration rollout: engine-actionable only as a reminder that no confidence number can publish until 100 learning-eligible settled rows accrue post-backfill.

## References named in file
- `docs/ops/launch/C12-06` (handoff, carries the Neon backup before-deploy question); C11 (the original seven verifications)

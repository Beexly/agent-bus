# docs/ops/launch/C12-05-SCORES.md

## What it is (1-2 sentences)
Re-scored launch-readiness audit (C12-05, PART 6) listing only the sections whose evidence changed since C11; final verdict: **6/10 launch-readiness FREE-ONLY** (confidence 80%) and **4/10 PAID** (confidence 78%).

## Key metrics/methods (formulas where given, else "not specified")
Section re-scores (0–10 scale):
- §18 Billing & entitlement sync: 6 → **7** (confidence 85%) — runbook now generates prices from the phase source of truth; deploy-readiness gate FAILS (not warns) on amount/interval/currency mismatch across all six price vars incl. FANTASY (was: green line printing whatever amount it fetched, FANTASY pair skipped); closed-state choke verified by test. Held at 7: prices unexercised (no live flow per rails), portal UX untested.
- §19 Alerts & notifications: 2 → **5** (88%) — was: Elite sold real-time alerts no code could deliver (D-2 dark channel, D-1 never-stamped recipients). Now: emailVerified stamps on sign-in (5-test suite), push opt-in mounted (35/35 push-stack green), copy says graded-only everywhere (FAQ rewritten; pricing page already accurate; no marketing emails exist). Held at 5: no end-to-end delivery ever exercised; component itself untested; VAPID keys unconfigured in prod.
- §14 Front-end coherence: 5 → **6** (80%) — liveBoardOn de-hardcoded; surface chip labels signal vs market; orphan pages got the legal footer. Held at 6: pass scoped to C11 items, not a full sweep.
- §16 Legal & compliance floor: 3 → **5** (82%) — 21+ attestation gate always-on across 16 betting prefixes (middleware-tested, loop-proof, redirect-safe); ESPN disclosure live on /data naming both feeds and the UNVERIFIED rights status; #16 precision-corrected ("counsel" line was a code comment, not rendered copy) with substantive gate kept structural via free-only. Held at 5: counsel review not done; ESPN rights UNKNOWN; DOB capture deferred to B-queue.
- §17 Responsible gambling: 5 → **6** (85%) — under-21 answer routes to /responsible-play; RG footer block on every public page incl. /brief and /waitlist; age gate carries RG link on the interstitial.
- §10/S10 Data rights & sourcing: 2 → **5** (80%) — was "the worst surface in the product" (registry said no structured-feed scraping, code hit ESPN's public API, customer saw nothing). Now the contradiction is stated plainly on /data with per-feed answers and UNVERIFIED labels. Not higher: use continues pending legal review — disclosure is not rights.
- §2.7 calibration check (from C12-01, restated): 3/10 was roughly right as PAID-readiness on a degraded run and slightly harsh as FREE-ONLY; the five paid blockers were real (four now landed); strengths C11 under-leveraged (cron auth enumerated 26/26, audit matrix waived with reasons, webhook idempotency present) were never weighed.
- A motivated attacker breaks the 6: the age gate is an attestation, not verification — documented floor, with server-side DOB re-check on the money path as the compensating control.

## Data sources named
None (internal audit of code, runbooks, pages, and middleware tests).

## Findings (numbers and facts, not vibes)
- 19 sections not listed were unchanged (silence = unchanged).
- Free-only launch readiness: 6/10 (80% confidence) — remaining points held by the Neon/PITR unknown (C12-01 §2.6), unexercised delivery paths, and the calibration honesty floor that only time can fill.
- Paid launch readiness: 4/10 (78%) — free-only switch makes paid a deliberate act; billing-correctness tooling now fails hard on mismatch; counsel review, the ESPN rights call, live Stripe exercise in TEST mode, and alert-delivery E2E all precede opening paid.
- Push stack: 35/35 green. Alert test suite: 5 tests. Attestation gate covers 16 betting prefixes. Cron auth enumerated 26/26.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: product-ops document — the ESPN-data-rights UNVERIFIED status and public/private surface posture are the gating facts for which data may appear publicly (reinforces NGS internal-only and public-projections-only doctrines).
- OTHER: calibration honesty floor ("only time can fill") — INFERENCE: graded-pool backfill cadence is the binding constraint on any public calibration claim.

## Engine-actionable? (yes/no + one-line what)
No — audit scorekeeping only; the ESPN rights UNVERIFIED flag is already tracked in memory, and nothing here changes a signal or model.

# ops/launch/C12-04-EXECUTION.md
## What it is (1-2 sentences)
Launch-readiness execution log for C12-04 (Part 5: D-item execution artifacts) — records verification of launch checklist D-items with real exit codes: `npm run typecheck` 0, `npm run lint` 0, `npm run lint:brand` 0, vitest 116/116, push-stack tests 35/35.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — confidence percentages per item (88–95%), test counts as verification.
## Data sources named
Codebase references only: `apps/web/lib/auth.ts`, `lib/auth.test.ts`, `board-classify-state.test.ts`, `scripts/ops/backfill-learning-eligibility.mjs`, `docs/ops/LAUNCH_READINESS_C11_2026-09-04.md`; C11's Stage 6 D-list text (D-0..D-15) is NOT RECOVERABLE — truncated in the C11 run and never committed.
## Findings (numbers and facts, not vibes)
- D-1 (emailVerified stamping from Google claim): DONE — fail-closed, idempotent; 5-test regression suite green; confidence 92%.
- D-2 (push opt-in mounted on /watchlist): DONE — 35/35 channel/DB/API tests; component itself has no dedicated test file (C11's "fully tested" overstates).
- D-3 (de-hardcoded `liveBoardOn`, env-driven): DONE — 8/8 tests; confidence 93%.
- D-4 (`eligibleForLearning` backfill): LANDED, RUN GATED — script refuses to stamp while OUTCOME_LEARNING_ENABLED is off (exit 2 verified live); operator sequence: flip OUTCOME_LEARNING_ENABLED → dry run → `--apply` → re-run dry → only then CANONICAL_HISTORY_ENABLED.
- D-6/D-7/D-8/D-10: DONE (Elite alert copy, legal footer on orphan pages, 21+ age gate, public-board surface chip).
- D-0, D-5, D-9, D-11..D-15: definitions unknown — [NOT RUN: source text lost with C11's truncation].
- Flag-order warning: flipping flags out of order — especially CANONICAL_HISTORY_ENABLED before the backfill — is a permanent-loss trap (C11 R8): rows settled while learning is off become calibration-invisible forever.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Learning-eligibility gating controls which settled rows enter calibration; misordered flag flips permanently lose calibration data. [TRUST-SIGNAL]
- Public board surface chip: board without odds-freshness signal is honestly labeled SIGNAL (model lines, not book prices). [TRUST-SIGNAL]
- Alert copy restricted to graded picks only — never alerts on ungraded tips. [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
No — launch/dev-ops runbook content, no prediction-model signal; only relevant as a caution on the OUTCOME_LEARNING_ENABLED → backfill → CANONICAL_HISTORY_ENABLED flag order before any calibration audit.

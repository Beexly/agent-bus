# ops/HERMES_NIGHT_LOG_2026-09-04.md
## What it is (1-2 sentences)
Timestamped overnight build log from the Hermes builder agent (2026-09-04) covering five work waves plus a next-day re-audit: 7 merged PRs, metric-test fixes, a walk-forward market calibration study, a CLV harness, and a totals tie-break proposal. Every wave carries full gate receipts (tsc/lint/guardrails/test counts).
## Key metrics/methods (formulas where given, else "not specified")
- Wave 3 calibration (`scripts/analytics/replay-calibration.ts`): walk-forward 10 folds on 2,750 held-out games 2016-2025; market Brier 0.2106, CI [0.2050, 0.2172]; NO calibrator beats identity (best +0.00007) — closing line is already the calibration (D7 honored); corpus honestly bounded to 5,281 games 2006-2025 (closing MLs start 2006).
- Flagged finding: 6.5-9.5 favourite leaf drifts 65.9% → 57.1% (n=576) — follow-up, no product change. (Re-audit reproduction: 65.86 → 57.12.)
- Wave 4 CLV harness: `clv-harness.ts` delegates to `clv.ts` primitives, SYNTHETIC OPEN labels, `requiredArchiveColumns` contract; 11/11 hand-computed tests; synthetic runner re-run on n=744/market over 3 distinct seasons (after self-caught bug: season cap compared season numbers to SEASON_CAP=3 and broke after one game — fixed to distinct-season tracking); mean CLV ~0 pts as symmetric seeded jitter requires.
- Wave 5 totals tie-break (STRICT OPT-IN, `context.totalsTiebreak='strict'`, no MODEL_VERSION bump, PROPOSED): before/after replay 2023-2025, 816 REG games, identical seasons both modes — legacy: 816/816 picks, 100% OVER, mean conf 67, decided 0.5068; strict: 0 picks — every replayed total pick was manufactured by the <= tie-break. Legacy default untouched.
- Re-audit (H-N6, fresh session, head 432dbc055): typecheck 0, lint 0, test:fast 0, guardrails 26/26 exit 0; W1 engine tests 127/127; W2 metric tests 10/10 from package dir and root; W3 numbers reproduced exactly.
- SPREAD sibling defect confirmed by throwaway probe: an all-pick-em board (spread===0) publishes a phantom SPREAD pick (conf 59 >= 50) with side AWAY by exclusion and consensus 1.0 — recorded as re-audit addendum, not fixed (D1 scope).
## Data sources named
Closing moneylines 2006-2025 (corpus 5,281 games); nflverse-adjacent settlement scoreboards implied; evidence JSONs committed to `docs/calibration-proposals/evidence/`; results in `docs/data/MARKET_CALIBRATION_2026-09-04.md` with reproduction log `docs/data/MARKET_CALIBRATION_2026-09-04-reproduction.txt`; proposal doc `docs/calibration-proposals/2026-09-04-totals-tiebreak-strict.md`.
## Findings (numbers and facts, not vibes)
- 7/7 PRs merged onto hermes/night-2026-09-04 in §2 order (#695 5bccb568e, #696 1b06562be, #697 778f846fc, #698 69882bb93, #699 a66421b77, #694 0a9ef3a87, #692 6a9c9d694); head 6a9c9d694 pushed; draft PR #700 opened to main (46 commits/32 files).
- Root cause removed: untracked nested clone at `Sports/` (git-ignored, ancestor-of-main) polluted the root vitest glob — moved to reversible staged deletion.
- D4 dependency-audit flake occurred 4+ times (304s degraded audit); root-caused: the script treats vulnerability-absent-from-ONE-degraded-npm-audit-response as fixed and prints a false remove-the-waiver instruction; next/high verified still live.
- The 6.5-9.5 leaf drift still has no dedicated follow-up owner (model territory, D1 scope).
- Self-correction culture recorded in commit messages: exact-value Murphy grouping rejected after unstable CI, pooled label fix, MIN_LEAF.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration receipts are the core honesty substrate — market Brier 0.2106 with no calibrator beating identity, documented self-corrections, and the explicit rule that a clean textual merge is not evidence of correctness.
- OTHER: CLV harness methodology (SYNTHETIC OPEN labels, archive-column contract) gives the CLV-repair drain a verifiable test contract; the totals tie-break result (legacy 100% OVER / strict 0 picks) is an honesty finding about manufactured picks, not a football tendency.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the 6.5-9.5 favourite leaf drift (65.9%→57.1%, n=576) as an open model-territory question and treat market Brier 0.2106 / identity-calibrator parity as the calibration baseline any new prediction model must beat.

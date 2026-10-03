# arxiv-program/research/2026-09-26/RESCUE-2026-09-26-3-papers-into-scorecard.md
## What it is (1-2 sentences)
Rescue note for Hermes→Garrett/Mimo (2026-09-26): four of seven Garrett-supplied research papers had clean fits and were wired into the scorecard package (`Beexly/Sports` PR #916, draft, stacked on #914), with 168 tests passing, zero failing; the write-up documents three defects the test pins caught and fixed.

## Key metrics/methods (formulas where given, else "not specified")
- Brier Murphy decomposition: `brier − (reliability − resolution + uncertainty) ≠ 0` on a sample in general; exact residual = `SUM_b (n_b/n)·var_p(b)` (within-bucket variance of stated probabilities), recomputed two independent routes agreeing to 1e-12 via `binningResidual` in `calibration.ts`.
- Opponent-adjusted NFL pass blocking/rushing (153k interactions, 266 games): uncertainty must come from end-to-end game resampling → `clusterBootstrap`; interval covering zero = "directional, not decisive" → `Scorecard.clusterVerdict`.
- Permutation artifacts → `relabelingNull`: a uniformly better candidate wins under every relabeling (p ~1, maximally robust); lucky arrangement has low p; API reports `survivesRelabeling` as the gateable verdict, not the p-value; mean difference is invariant under permuting one arm so it cannot be permutation-tested — null uses the row-wise hit rate.
- Formal reasoning → `exact.ts`: BigInt-exact Wilson interval; 4096-bit runaway guard (96 bits far too tight since reduced Wilson fractions carry z², denominator 10³⁰).

## Data sources named
153k NFL pass-blocking/rushing interactions from 266 games (from arXiv:2604.01491).

## Findings (numbers and facts, not vibes)
- 168 tests passed, 0 failed (108 existing + 60 new: 23 calibration, 15 integrity, 15 exact, 4 scorecard-integration); every expected value derived by hand in a comment, not copied from a run.
- Three defects caught by pins: (1) BigInt/Number mixing in exact path — fixed; (2) 96-bit runaway guard too tight, raised to 4096 bits; (3) relabeling null's orientation was inverted — a p-value alone lies (uniformly-better candidate gets p~1), so API reports `survivesRelabeling` and the p-value rides alongside.
- Judgment calls flagged for human review: `calibrationDiagnosis` and `relabelingNull`'s verdict; nothing here changes a keep/kill rule or threshold; `tsc` is a phantom pass on this host — CI is the typecheck gate; merge order #914 first; `packages/verifier` does not exist on `main` yet.
- Papers wired: 2607.00164 (Murphy decomposition/calibration), 2604.01491 (opponent-adjusted OL evaluation + cluster bootstrap), 2603.03613 (permutation artifacts/relabeling null), 2505.23703 (BigInt-exact Wilson).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opponent-adjusted pass blocking/rushing evaluation (153k interactions) — OL (directly: pass-block and run-block measurement with honest uncertainty).
- Murphy decomposition + binning residual; relabeling null orientation fix — TRUST-SIGNAL (calibration honesty, no-self-confirming backtests, search-many-keep-winners artifact checks).
- BigInt-exact Wilson interval — TRUST-SIGNAL (exact small-sample intervals).

## Engine-actionable? (yes/no + one-line what)
yes — already partially wired in PR #916: BigInt-exact Wilson, clusterBootstrap with directionality rule, relabelingNull artifact gate, and the binning-residual Murphy correction are engine-grade calibration infrastructure.

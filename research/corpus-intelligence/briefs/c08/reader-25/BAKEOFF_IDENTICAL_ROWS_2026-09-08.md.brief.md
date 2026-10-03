# docs/ops/BAKEOFF_IDENTICAL_ROWS_2026-09-08.md
## What it is (1-2 sentences)
Ledger row C-265 (2026-09-08): a measurement row that removes a confound in the truth-surface score bake-off — comparing four probability scores (confidence, independent_trueProb, 50/50 blend, marketFairProb) on IDENTICAL rows instead of each score's own row set — plus code path, 16 passing unit tests, and a NOT RUN sensitivity cell for the C-247 contradicted-finals issue.
## Key metrics/methods (formulas where given, else "not specified")
- Scores: confidence/100; independent_trueProb from `factorBreakdown.independentEdge.trueProb`; blend = 0.5×confidence/100 + 0.5×independent trueProb; marketFairProb via calibration loader's order (proof receipt → factor-breakdown → odds-table resolver at generatedAt).
- Metrics: Brier, ECE on 10 equal-width probability bins, Murphy reliability/resolution/uncertainty (Brier = UNC + REL − RES verified on fixtures), separation (mean p on wins − mean p on losses).
- Bootstrap: seeded percentile 95% interval, 200 resamples, mulberry32 seed 20260908, PAIRED (same index draws per score); gap CI = score Brier − market Brier.
## Data sources named
Live truth surface `GET /api/ops/public-surface-truth`; settled canonical WIN/LOSS two-way MONEYLINE picks (`CANONICAL_LEARNING_PICK_WHERE`); ESPN finals (for the contradicted-finals sensitivity command `ops:verify-scores`).
## Findings (numbers and facts, not vibes)
- Live by-market MONEYLINE table (2026-09-08 19:11 UTC): confidence n=745 Brier 0.2332 ECE 0.1156 RES 0.0118 separation −0.0018; independent_trueProb n=712 Brier 0.2338 ECE 0.0858 RES 0.0080 separation +0.0056; blend n=712 Brier 0.2332 ECE 0.1016 RES 0.0113 separation +0.0045; marketFairProb n=135 Brier 0.1781 ECE 0.1411 RES 0.0038 separation +0.0561. bestScore = marketFairProb.
- Pooled: confidence n=1823 Brier 0.2620; marketFairProb n=1039 Brier 0.2337 ECE 0.0280 RES 0.0185.
- KEY CONFOUND: market n=135 vs confidence n=745 — row counts differ ~5×, so score gaps are part score quality, part row selection. The two market-probability loaders disagree: the calibration-eligibility sample has n=475 while the bake-off market cell has n=135; 342 of the 475 eligibility rows come from the odds-table resolver the bake-off loader never calls.
- Identical-row live table: NOT RUN (no DB access in the session); code + 16 tests landed, table fills on first truth-surface read post-deploy.
- 16 vitest tests pass on hand-worked fixtures; mutation red-checks (blend swap, separation sign flip, unpaired bootstrap) each failed 1-2 tests as expected.
- Ledger ops note: this row was renumbered C-261→C-265 after a sibling session also opened C-261 (PR #725 NFL Week 1 board kept the number).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Market-anchored probability beats model scores on Brier but the comparison is contaminated by non-identical rows — the honest-bakeoff methodology fix: TRUST-SIGNAL. The loader disagreement (market fair prob sourcing) is a live data-quality bug: OTHER (engine plumbing).
## Engine-actionable? (yes/no + one-line what)
Yes — fix `toProvenPathPickRow` to use the calibration loader's market-prob order (proof receipt → factor breakdown → odds-table resolver), so the marketFairProb cell reflects the same 475-row sample the eligibility gate uses instead of a thin 135-row cell.

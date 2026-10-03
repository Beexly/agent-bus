# arxiv-program/research/2026-09-21/arxiv-program/phase2/PHASE4-SUMMARY.md
## What it is (1-2 sentences)
Summary of Phase 4 of the arXiv machine-intelligence program (dated 2026-09-22): Garrett's directive to expand the verified program from 1,000 to 1,250 valuable papers, delivering a final audited count of 1,251 verified papers (1,203 ADAPT / 48 ADOPT, 0 duplicates, 0 counted REJECTs).
## Key metrics/methods (formulas where given, else "not specified")
- Audit: 1,251 tracker rows, 1,251 unique normalized arXiv IDs, 0 duplicates; all 1,251 ledger files present; every ledger verdict matches tracker; dedup snapshot extended to 2,101 IDs.
- Phase table: Phase 1 = 362, Phase 2 = 215, Phase 3 = 171, Phase 4 = 252 (750→1,000), Phase 5 = 251 (machine-intelligence expansion).
- Wave 5a: 125 papers, 117 ADAPT / 8 ADOPT (ledgers 1810–1954). Wave 5b: 126 papers, 117 ADAPT / 9 ADOPT (ledgers 2022–2212). 1 REJECT (ledger 2209, 2504.03353) replaced with a fresh full read (ledger 2212, WorldGym ADAPT).
## Data sources named
The corpus ledgers themselves (docs/research/2026-09-21/arxiv-program/...); wave5-dedup-baseids.txt dedup snapshot. No external data sources.
## Findings (numbers and facts, not vibes)
- Final: 1,251 verified valuable papers (target 1,250, exceeded by 1); 1,203 ADAPT / 48 ADOPT.
- One reader delivered 14 valuable papers against a 13 target rather than trimming a real ADOPT — counted, not padded.
- Correction preserved: initial PySR anchor 2305.11217 was a wormhole paper; correct ID is 2305.01582v3 (wormhole read not counted).
- Five strongest transfers named: SHARP (2605.06822, ablation free-form reflection: +33.2% → −12.1% return); SymTorch (2602.21307, ≤10-term auditable equations); SINDy with Conformal Prediction (2507.11739); MinervaScore (2608.23808, DSR+PBO+SPA+MinTRL+regime-stability robustness grade); 101 Formulaic Alphas (1601.00991, operator grammar).
- Frozen-expert ensembles lane result: 62.75% vs 21.9% baseline.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the Phase 5 program exists to build "the most calibrated, accurate, intelligent sports engine ever to exist"; the no-padding / REJECT-replacement rule is the corpus-integrity mechanism behind every ledger verdict.
- OTHER: machine-intelligence lanes directly relevant to GSE — world_models_simulators (DreamerV2, GameNGen, TacticGen, FootBots), timeseries_foundation (4 ADOPT), uncertainty_decision_theory (13 papers), conservative Q-learning / distributional RL / optimal-stopping RL lane.
## Engine-actionable? (yes/no + one-line what)
Yes — MinervaScore (2608.23808, ADOPT) is named the multiple-testing/backtest-overfitting validation layer "the whole sports-signal program should adopt verbatim."

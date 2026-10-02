# arxiv-program/research/2026-09-21/arxiv-deep/1300-predicting-elite-nba-lineups-using-order-statistics.md
## What it is (1-2 sentences)
Ledger for Martonosi, Gonzalez & Oshiro (2023) "Predicting Elite NBA Lineups Using Individual Player Order Statistics" (arXiv:2303.04963) — elite five-man NBA lineups predicted from individual player stats alone (no shared-court history) via order-statistic features + unanimous-consent classifier ensemble. Verdict: ADAPT (replacement for REJECT 1092) — ports to DFS lineup construction and player-acquisition screening.
## Key metrics/methods (formulas where given, else "not specified")
- Feature expansion: 28 player statistics → sorted 5-vectors per stat (min…max) → 28×5 = 140 order-statistic predictors per candidate lineup.
- Seven classifiers (decision tree, random forest, boosting, SVM, kNN, logistic regression, LDA) → unanimous consent (all-or-nothing) rule: predict elite iff all seven agree; trades recall for precision.
- Target: binary elite indicator (positive plus-minus).
## Data sources named
NBA box-score statistics + lineup plus-minus records (public); NBA seasons for train/test split; restricted next-season evaluation on lineups whose members never played together. 28 stats listed in paper's Appendix A.
## Findings (numbers and facts, not vibes)
- Test-set precision of unanimous-consent classifier: 86.7%; overall accuracy 52.3% (recall deliberately sacrificed).
- Restricted next-season evaluation: 76.9% precision vs. 62.1% elite prevalence baseline — generalizes to player combinations with zero shared history (the key result).
- Limitations: plus-minus is a noisy, context-dependent label; unanimity kills recall (most elite lineups missed); no salary/DFS-pricing integration; NBA-specific feature set.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — DFS lineup-quality classification: order-statistic lineup features + unanimous-consent high-precision filter is a portable GPP lineup technique (fills Gap 10: DFS-specific optimization literature; Gap 11: non-NFL sports depth).
- SCHEME — INFERENCE-adjacent: teammate-combination synergy captured without interaction terms suggests cheap order-statistic features for stack quality; flagged INFERENCE because synergy is not proven to transfer to NFL positional units.
## Engine-actionable? (yes/no + one-line what)
Yes — port to NFL DFS: build order-statistic predictors per slate (sorted projection/ceiling/ownership/leverage), train a diverse classifier set targeting GPP-winning/top-1% lineup membership, and apply unanimous-consent (or k-of-7 threshold tuned to payout structure) as a high-precision short list to seed the optimizer.

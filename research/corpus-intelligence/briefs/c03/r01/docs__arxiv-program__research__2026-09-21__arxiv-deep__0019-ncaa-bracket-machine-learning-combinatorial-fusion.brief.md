# docs/arxiv-program/research/2026-09-21/arxiv-deep/0019-ncaa-bracket-machine-learning-combinatorial-fusion.md
## What it is (1-2 sentences)
Deep-read of arXiv:2603.10916 (2026): NCAA bracket prediction via Combinatorial Fusion Analysis (CFA) — fusing five diverse base models (LR, SVM, random forest, XGBoost, CNN) in both score space and rank space, with weights from cognitive-diversity (RSC) functions rather than performance alone. GSE verdict: ADAPT — the transferable primitive is rank-space fusion of diverse model outputs (robust to miscalibrated probability scales), not the college-basketball application, which rests on thin single-tournament evidence.

## Key metrics/methods (formulas where given, else "not specified")
- Eq. (1) score combination: s_sc(d_i) = (1/h)Σ_j s_{A_j}(d_i); Eq. (2) weighted by diversity strength DS(A_j); Eq. (3) weighted by performance P(A_j). Eqs. (4)–(6) same three for scores; Eqs. (7)–(9) rank-combination analogs applying weights 1, 1/DS(A_j), 1/P(A_j) to ranks r_{A_j}(d_i).
- Diversity strength DS(A_j) = cognitive diversity of model j from rank-score characteristic (RSC) functions — data-item-independent (computable from model-output rank profiles alone, before ground truth arrives).
- Enumeration: (2^5 − 1 − 5) = 26 model subsets × 6 combination forms (score vs rank × AC/WCP/WCDS) = 156 ensembles, reduced to 52 keeping only diversity-strength weights. (INTERNAL INCONSISTENCY: conclusion claims 56 ensembles — number not reconciled.)
- Selected ensemble "ABE" (LR+SVM+CNN) rank-combination — chosen as the combo that beat the best individual model most frequently (6 of 10 prior years), applied to 2024.

## Data sources named
Kaggle "March Machine Learning Mania" data, tournaments 2001–2022 (excl. 2020) + KenPom team statistics; features 44 → 26 after RFECV (5-fold CV on log loss). Test = 2024 tournament (63 games); 10 prior years for ensemble-model selection. Design: difference features (Team1 − Team2), synthesized label-0 rows by swapping Team1/Team2. No code repo stated; KenPom snapshot timing unspecified (season-end vs pre-tournament) — possible leakage.

## Findings (numbers and facts, not vibes)
- Rank combination (ABE) on 2024 games: 74.60% accuracy vs best public system 73.02% (NET Rankings, Logan) — gap of 1.58 pp ≈ 1 game out of 63; paper's GSE read: not statistically significant, noise-adjacent.
- Score combination (ABE): 71.43% — beats only half the public systems.
- Figures 3–4 unreadable in the arXiv HTML (figure captions are garbage text "dajfkjasdkafdkfjaksdlfasdfsadfasddsfjkjaskdfljdskfjalskjdfklsjdafkljasdf"); exact per-combo values not extractable.
- Leakage/design flags: selection over 52 ensembles × 10 years then testing on one 63-game tournament (selection leakage, multiple comparisons); single-season out-of-sample; pairwise accuracy ignores bracket coherence and calibration (log loss not reported for 2024); CNN on tabular difference-features unexplained, no ablations.
- GSE read: rank-space fusion is a different combination operator from GSE's score averaging, robust to miscalibrated probability scales; no duplication of the CFA primitive in the corpus (bandit/ensemble-selection flagged as a GSE gap).
- GSE implementation spec: experimental ensemble mode — convert GSE's pick models' win probabilities to ranks per game, fuse via rank combination with RSC diversity weights recomputed from rank profiles over the season, compare vs production score-average. No new data needed; effort: days, not weeks.
- Acceptance gate: adopt rank-fusion only if it beats score-fusion on ≥2 of 3 NFL seasons backtested AND RSC diversity weights beat uniform weights. Reject the paper's 74.60% headline as evidence.
- Improvement experiment: make fusion adaptive within season — recompute RSC diversity weights on a rolling window to downweight models that have become mutually redundant, rather than fixing weights from prior-year analysis.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rank-space fusion as a new ensemble operator robust to miscalibration: OTHER
- RSC cognitive-diversity weights independent of data items (no ground truth needed): OTHER
- Rolling-window adaptive reweighting of redundant models: OTHER
- Explicit rejection of the 74.60% headline as statistically meaningless (1 game of margin, selection-mined): TRUST-SIGNAL
- Caution on selection-leakage designs (mine 52 ensembles, then test once): TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes — experimental: backtest rank-fusion (with RSC diversity weights) of existing GSE model outputs vs production score-average over 3+ NFL seasons; adopt only if it wins ≥2 of 3 seasons and diversity weights beat uniform.

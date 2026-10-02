# arxiv-program/research/2026-09-21/arxiv-deep/1120-predicting-ulnar-collateral-ligament-injury-rookie.md
## What it is (1-2 sentences)
Full read of arXiv:2207.00585v1 (Rendar & Ma, 2022): a compact two-page podium abstract predicting ulnar collateral ligament (Tommy John) injury from rookie-season statistics of 8,503 MLB pitchers debuting after 1974 — 47 Stathead features → K-best 13 → MLP with AUC 0.674 besting tree ensembles. Verdict in file: **ADAPT** — protocol worth porting to GSE's NFL player-availability modeling, with the paper's missing details treated as gaps to fill, not results to trust.

## Key metrics/methods (formulas where given, else "not specified")
- No equations stated.
- Protocol: split 80/20 "according to year" (exact split years not stated); oversampling applied to training set; K-best feature selection 47 → 13 (13 features not listed).
- Models: KNN, Naive Bayes, XGBoost, Random Forest, Decision Tree, MLP (hyperparameters not stated). Metric: ROC-AUC.
- Assumptions: (a) name-join between Stathead and the public Tommy John surgery repository is reliable; (b) rookie-season stats carry UCL signal; (c) oversampling train only does not distort the test distribution (test handling not stated).

## Data sources named
Stathead (paid proprietary, 47 features); public Tommy John surgery repository (unnamed in extracted text), joined by player name. 8,503 rookie MLB pitchers debuting after 1974; 826 positive / 7,677 negative (~1:10 imbalance). No code, no dataset, no feature list released.

## Findings (numbers and facts, not vibes)
- ROC-AUC: KNN 0.5702; Naive Bayes 0.5463; XGBoost 0.6068; Random Forest 0.6143; Decision Tree 0.6329; **MLP 0.6740** (best).
- Paper's claim: rookie-season features carry modest but real UCL signal; nonlinear models (MLP) beat tree ensembles here.
- Limitations (heavy): two-page podium abstract — no feature list, no split years, no hyperparameters, no uncertainty intervals, no calibration — nothing independently reproducible; name-join label noise (mismatches corrupt labels); AUC 0.674 modest, and at 1:10 imbalance precision at any usable recall is likely poor (not reported); no temporal-cleanliness verification of "split according to year"; no trivial baseline (e.g., innings-pitched workload alone); no CV.
- Verdict: **ADAPT**; acceptance gate: NFL port achieves ROC-AUC ≥ 0.65 with 95% CIs excluding 0.5 on a forward test AND beats a workload-only baseline; reject otherwise (paper's 0.674 is the meet-or-beat benchmark with honest uncertainty).
- Improvement experiment in file: replace binary classification with a survival model (time-to-first-injury, Cox or DeepHit-style) — the paper throws away *when* the injury happened; test whether survival modeling improves ranking (C-index) over the binary MLP.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NFL injury-availability modeling — port to rookie injury-risk (hamstring/ACL) from college workload + combine + rookie preseason features via nflverse + NFL injury reports; protocol fixes: publish feature list, year-based splits with stated cutoffs, report PR-AUC + calibration alongside ROC-AUC, compare against workload-only baseline; add a survival (time-to-injury) formulation; ~2 engineer-weeks.

## Engine-actionable? (yes/no + one-line what)
Yes — port the 47-feature tabular protocol to NFL rookie soft-tissue-injury risk (college workload + combine + preseason → first-3-seasons injury), with honest year-based splits, PR-AUC + calibration, and a survival formulation instead of binary classification.

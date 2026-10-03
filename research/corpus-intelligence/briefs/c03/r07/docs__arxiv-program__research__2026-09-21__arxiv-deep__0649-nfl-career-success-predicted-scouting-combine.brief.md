# docs/arxiv-program/research/2026-09-21/arxiv-deep/0649-nfl-career-success-predicted-scouting-combine.md

## What it is (1-2 sentences)
Ledger of arXiv:2303.05774 (Szekely et al. 2023), a machine-learning study on whether NFL Scouting Combine drills predict draft matriculation (≥1 NFL snap) and career success (total NFL snaps). Ledger verdict: ADAPT — a clean null result with genuine GSE value: combine drills predict getting drafted (83%) but NOT career success (R²=0.17), so GSE should cap combine-feature weights in rookie projections.

## Key metrics/methods (formulas where given, else "not specified")
- Classification (matriculation): SVM, multivariate logistic regression, gradient boosting, random forest, decision tree; 10-fold CV selected random forest (944 estimators, min_samples_split=2, min_samples_leaf=2, max_features=3, max_depth=97, bootstrap).
- Regression (snaps): SVM, gradient boosting, random forest, decision tree, linear regression; 10-fold CV selected linear regression.
- Feature importance: RF importances (classification) and linear-regression beta coefficients (regression).
- Metrics: accuracy (classification), RMSE (regression). No novel equations.

## Data sources named
NFL draft classes 2013–2017; 1,973 prospects → 805 with complete combine data (listwise deletion). Six combine drills: 40-yard dash, broad jump, bench press (reps @225), vertical jump, 20-yard shuttle, 3-cone drill. All positions pooled. Labels: matriculation (binary), total career NFL snaps (all phases). 80/20 train/test split. Code: https://github.com/bszek213/nfl_combine/tree/publish.

## Findings (numbers and facts, not vibes)
- Matriculation: RF test accuracy 0.83 (CV 0.81); logistic 0.75, GB 0.77, SVM 0.76, tree 0.73.
- Snaps: linear regression best — CV RMSE 1,210.1, test RMSE 904.6, R² = 0.17 (SVM 1,298.8, GB 1,289.3, RF 1,276.0, tree 1,731.3).
- Feature-importance discrepancy: 3-cone drill MOST important for classification (getting drafted) but LEAST important for snaps (regression betas); broad jump most important for snaps.
- Headline: combine predicts getting INTO the league (83%) but explains only 17% of variance in career snaps — effectively a null result for success prediction.
- Limitations flagged in ledger: listwise deletion (1,973→805) on an invite-only, range-restricted sample; snaps conflate special-teamers with starters; position-pooled (QBs with long snappers); no college production features; 2013–2017 classes only.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Scout overweighting of the 3-cone (most important for matriculation, worst for success) as a market-inefficiency signal for rookie props and draft markets: OTHER
- Broad jump as the only combine drill with any success signal: OTHER
- Null result as a negative prior: cap combine weights, exclude/near-zero 3-cone in rookie projection blend: OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — apply the negative prior in GSE's rookie projection blend (γ ≤ 0.1 for combine weight, 3-cone excluded or near-zero, broad jump small positive allowed) and fade combine-driven rookies in rookie props; verify via replication on 2018–2022 classes with college production added.

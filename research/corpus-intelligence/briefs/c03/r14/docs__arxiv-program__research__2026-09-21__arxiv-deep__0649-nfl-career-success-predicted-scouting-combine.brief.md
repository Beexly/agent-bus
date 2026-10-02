# docs/arxiv-program/research/2026-09-21/arxiv-deep/0649-nfl-career-success-predicted-scouting-combine.md
## What it is (1-2 sentences)
Ledger entry on arXiv:2303.05774 (Szekely et al. 2023), asking whether ML on NFL Scouting Combine drills predicts (a) whether a prospect plays one NFL snap and (b) total career snaps. **Verdict in file: ADAPT** — a clean null result: combine predicts draft matriculation but NOT career success, with a drill-level importance discrepancy that signals scout/market overweighting.
## Key metrics/methods (formulas where given, else "not specified")
- Classification (matriculation): SVM, multivariate logistic regression, gradient boosting, random forest, decision tree; 10-fold CV selected RF (944 estimators, min_samples_split=2, min_samples_leaf=2, max_features=3, max_depth=97, bootstrap).
- Regression (snaps): SVM, gradient boosting, random forest, decision tree, linear regression; 10-fold CV selected linear regression. Metrics: accuracy (classification), RMSE (regression).
- Feature importance: RF importances (classification), linear-regression beta coefficients (regression).
- No novel equations; standard machinery. Code: https://github.com/bszek213/nfl_combine/tree/publish.
## Data sources named
NFL draft classes 2013–2017: 1,973 prospects → 805 with complete combine data (listwise deletion). Features: 6 drills — 40-yard dash (s), broad jump (in), bench press (reps @225), vertical jump (in), 20-yard shuttle (s), 3-cone drill (s); all positions pooled. Labels: matriculation (≥1 NFL snap), success (total career snaps, all phases). 80/20 train/test split; sources described as combine/draft data (PFR / NFL.com style).
## Findings (numbers and facts, not vibes)
- Matriculation: RF test accuracy 0.83 (CV 0.81); logistic 0.75, GB 0.77, SVM 0.76, tree 0.73.
- Snaps: linear regression best — CV RMSE 1,210.1; test RMSE 904.6, R² = 0.17 (SVM 1,298.8, GB 1,289.3, RF 1,276.0, tree 1,731.3). Combine explains only 17% of variance in career snaps — effectively null for success prediction.
- Feature importance (classification): 3-cone drill most important for getting drafted. Feature importance (regression betas): broad jump most important for snaps; 3-cone LEAST important for snaps.
- Limitations noted: listwise deletion (1,973→805) on invite-only already-selected sample attenuates correlations; snaps conflate special-teamers with starters; positions pooled; no college production features (authors note this); 2013–2017 classes.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 3-cone: most important for matriculation but least important for actual NFL success — scouts overweight it: TRUST-SIGNAL
- Combine predicts entry (83%) but not career success (R²=0.17) — negative prior for rookie projections: OTHER (rookie modeling)
- Broad jump the only drill with any success signal: OTHER (rookie modeling)
## Engine-actionable? (yes/no + one-line what)
Yes — apply as negative prior: cap combine-feature weights in rookie projections (γ ≤ 0.1, 3-cone excluded/near-zero, broad jump small positive), and fade combine-driven rookies in rookie props/draft markets in favor of college production.

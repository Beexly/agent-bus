# arxiv-program/research/2026-09-21/arxiv-deep/1026-conformalized-selective-regression.md
## What it is (1-2 sentences)
Full-paper deep read (ledger 1026, arXiv:2402.16300v3, Sokol/Moniz/Chawla 2024) of Conformalized Selective Regression (CSR): use the width of a conformalized quantile-regression interval as the abstention signal for point predictions, plus a normalized Euclidean-distance-to-ideal evaluation for the error-vs-coverage trade-off.

## Key metrics/methods (formulas where given, else "not specified")
- Reject rule (Eq. 1): Γ_λ(X) = f(X) if u(X) ≤ λ, reject otherwise.
- Conditional-variance baseline (Eq. 2): u(X) = Var(Y|X) = E[(Y−E(Y|X))²|X] — critiqued as distribution-only (ignores model-specific bias, bad under heteroscedasticity).
- Conformal set (Eq. 3): C(X_test) = {y : s(X_test,y) ≤ q̂}, q̂ = ⌈(n+1)(1−α)⌉/n-th quantile of calibration scores.
- Coverage guarantee (Eq. 4): P{Y_{n+1} ∈ C(X_test)} ≥ 1−α, for any joint P_XY, any n — requires exchangeability of calibration and test points.
- Conformity scores (Eq. 5): A_cal = max(y_cal − f_u(X_cal), f_l(X_cal) − y_cal); adaptive threshold q̂_α = Quantile((n+1)(1−α)/n, A_cal).
- Interval width (reject trigger): W_α(X) = f_u(X) − f_l(X) + 2q̂_α; reject if W_α(X_i) ≥ λ.
- CSR recipe: train two quantile regressors (α/2 pinball, penalizes overestimates; 1−α/2, penalizes underestimates); conformalize on calibration; abstain on wide intervals.
- Evaluation: nMSE normalized by max MSE across models at each coverage level; rank by Euclidean distance to ideal {nMSE=0, Coverage=1}; risk-coverage AUC also reported (claimed to misrank models).

## Data sources named
- Four primary datasets: COMPAS (Barenstein 2019), Communities (Redmond & Baveja 2002), Insurance (Lantz 2019), LSAC (Wightman 1998) — sizes/feature counts not stated in paper.
- 25 additional regression datasets from Ribeiro & Moniz (2020), "Imbalanced regression and extreme value prediction."
- Splits: 70% train / 10% calibration / 20% test; α fixed at 0.05 (95%).
- Base regressors: Random Forest, XGBoost, Quantile Neural Networks (held fixed across reject methods).
- Baselines: (1) Shah et al. 2022 selective regression under fairness criteria; (2) Zaoui et al. 2020 plug-in ε-predictor with reject option (kNN variance, k=10, 100 repetitions).

## Findings (numbers and facts, not vibes)
- On the 25 extra datasets: CSR top performer in 20/25 (80%); Model 1 best in 2/25 (8%); Model 2 best in 3/25 (12%).
- Table 1 AUC (lower=better), CSR vs Model 1 vs Model 2: Communities 0.328/0.505/0.381; Compas 0.705/0.800/0.846; Insurance 0.484/0.655/0.588; Lsac 0.838/0.897/0.877.
- At restricted high coverage {0.8, 0.85, 0.9, 0.95}, CSR lower error than both baselines "in above 80% cases."
- Key limitation: exchangeability is fragile — NFL features drift across seasons, so the coverage guarantee degrades silently; reject-threshold λ tuned on the test coverage sweep (production must fix coverage from calibration in advance); the Euclidean-distance evaluation weights nMSE and coverage equally with no wrong-vs-abstained cost model.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- TRUST-SIGNAL: conformalized-interval-width as a principled, calibrated publish/abstain trigger for prop/DFS point projections — fills the map's explicit gap #4 ("learning-to-abstain with coverage-risk curves"); natural add-on to GSE's live conformal machinery (cqr.ts recently fixed from falsely certifying 90% at 83.33%).
- OTHER: complements 1004 (per-component abstention) and 1003 (post-hoc whole-prediction abstention); NOT a duplicate of anything in the map — selective-regression-via-conformal-width exists nowhere.

## Engine-actionable? (yes/no + one-line what)
Yes — fit two LightGBM quantile regressors (α=0.10 for 90% intervals) on the prop/DFS projection feature set, conformalize on last 4–6 weeks, don't publish/bet when W_α ≥ λ targeting 90% coverage; gate = 90%-coverage MAE ≥ 5% below conditional-variance reject baseline AND calibration coverage within ±3 pts of nominal.

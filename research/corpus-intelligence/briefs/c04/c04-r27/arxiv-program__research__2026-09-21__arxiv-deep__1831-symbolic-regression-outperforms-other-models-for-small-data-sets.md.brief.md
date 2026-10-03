# docs/arxiv-program/research/2026-09-21/arxiv-deep/1831-symbolic-regression-outperforms-other-models-for-small-data-sets.md
## What it is (1-2 sentences)
Deep-read ledger of Wilstrup & Kasak (2021), arXiv 2103.15147v3, which benchmarks symbolic regression (QLattice/Feyn) against interpretable models and black-box ensembles on small tabular datasets (n=250 training rows) across 240 experiments.

## Key metrics/methods (formulas where given, else "not specified")
- Out-of-sample R² as the metric; two scoring schemes: (a) first-place counts (R² winner takes all), (b) weighted scoring rewarding runners-up.
- Models: QLattice/Feyn v1.5.3 symbolic regression (criterion="aic"/"bic", max_edges=11) vs. scikit-learn 0.24.1 LinearRegression, Lasso (α grid incl. 0.1), DecisionTree (depth grid), RandomForest, GradientBoosting — 4 hyperparameter settings each (2 for QLattice).
- QLattice returns argmax over expression posterior approximated by path probabilities. No equations beyond out-of-sample R².

## Data sources named
- Penn Machine Learning Benchmarks (PMLB): all 122 regression datasets filtered to ≥1000 observations → 48 datasets kept; protocol: 5 random draws of 250 training rows per dataset, remainder (≥750 rows) as validation → 48×5 = 240 experiments.
- Authors employed by Abzu (maker of QLattice) — vendor-authored paper.

## Findings (numbers and facts, not vibes)
- All configs: QLattice-BIC best in 77/240 experiments (most first places of any config); QLattice-AIC second; best non-SR = Lasso α=0.1; worst = decision tree.
- Weighted scoring: QLattice-BIC 644 points, ranking unchanged (RF/GB still below Lasso).
- Best-config-per-family: QLattice-BIC 132/240 first places (over half); RF-400 37; Lasso 32. Weighted: GB 821, RF 787, Lasso 511.
- Interpretable-only (QLattice-BIC vs Lasso α=0.1 vs depth-2 tree): QLattice best in 184/240, Lasso 49.
- Limitations: vendor paper (Abzu employees); "typical hyperparameters" may handicap ensembles; 5 draws per dataset with overlapping test sets → correlated experiments; no significance testing; no time series or adversarial/regime-structure datasets in PMLB.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Sports-small-n justification: team-season tables (n≈32/season) and QB-season tables are the canonical small-n regime where SR's generalization advantage (if it transfers) beats "just fit XGBoost" — GSE analog explicitly named: team-season/QB-season stat tables.
- (OTHER) Skepticism note from the ledger: an earlier internal SR effort produced no surviving finding, so the vendor claim must be replicated with PySR on nflverse before becoming doctrine.
- (OTHER) Improvement experiment named: sample-size curve at train sizes n ∈ {32, 100, 250, 500, 1000} to locate crossover n* — the operating rule for when to use SR (team-season metrics) vs. ensembles (play-level predictions).

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the protocol on nflverse sports data (PySR vs Lasso vs RF vs GB, out-of-sample R² first-place counts) and ADOPT the "SR-first for small-n" doctrine iff PySR wins ≥40% of first places AND beats Lasso's weighted score (~2 engineer-days); run the sample-size curve to locate the SR-vs-ensemble crossover n*.

# arxiv-program/research/2026-09-21/arxiv-deep/0788-evaluating-state-art-forecasting-ensembles.md
## What it is (1-2 sentences)
Deep read of Cawood & van Zyl (2022, arXiv:2203.03279v3): a head-to-head comparison of late model-fusion strategies (simple averaging, FFORMA XGBoost feature-weighted averaging, FFORMS-R/G model selection, NN-STACK stacking, FFORMA-N) for combining the M4-winning ES-RNN with statistical base learners on 100,000 M4 time series. Verdict in file: ADAPT — port FFORMA-style meta-learned weight blending to GSE's model-probability outputs.
## Key metrics/methods (formulas where given, else "not specified")
- FFORMA weights: w_m(f_n) = exp(p_m(f_n))/Σ exp(p_m(f_n)); weighted loss L̄_n = Σ w_m L_nm; custom XGBoost gradient G_nm = w_nm(L_nm − L̄_n), Hessian H_nm ≈ w_nm(L_nm(1−w_nm) − G_nm).
- Metrics: sMAPE, MASE, OWA = ½(MASE/MASE_Naive2 + sMAPE/sMAPE_Naive2); median OWA emphasized; Schulze rank aggregation.
- NN-STACK: MLP over (base forecasts + Spearman-selected meta-features), ReLU/Adam/MAE; 10-fold CV × 5 repeats; hyperparams via Bayesian optimization (300 runs).
## Data sources named
M4 forecasting competition (100,000 univariate series; Yearly 23,000 / Quarterly 24,000 / Monthly 48,000 / Weekly 359 / Daily 4,227 / Hourly 414); base forecasts reused from M4 submissions. Code: github.com/Pieter-Cawood/FFORMA-ESRNN.
## Findings (numbers and facts, not vibes)
- Median OWA + Schulze ranks: FFORMA rank 1 (medians H 0.318, W 0.529, M 0.602, Y 0.491, Q 0.580); ES-RNN rank 5; AVG rank 7; Theta rank 11.
- Hourly: FFORMA 0.415 vs AVG 0.847 (2× better); NN-STACK failed on Hourly (1.427, 414 series + horizon 48).
- Daily is the exception: NN-STACK best (median 0.646) — "stacking the only successful ensemble when all base learner performances are similar."
- Median improvements of FFORMA over ES-RNN: Hourly 0.059, Weekly 0.017, Monthly 0.037, Yearly 0.056, Quarterly 0.030.
- Selection rule: gradient-boosted ensembles > NN ensembles generally; weighted averaging (FFORMA, FFORMA-N) > selection (FFORMS-R/G) > stacking (NN-STACK) — except in the similar-performers regime.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: a ranked menu of fusion methods for the GSE engine's model blend — LightGBM meta-learner over game meta-features (spread bucket, total, market disagreement, ATS form volatility, rest, weather) → softmax weights over constituent model probabilities; regime-switch to stacking when base learners' recent accuracies are within 5% of each other.
## Engine-actionable? (yes/no + one-line what)
yes — build three fusion candidates (FFORMA-style LightGBM, NN-stack, plain average) on 2022–2024 engine picks, walk-forward (train ≤2023, test 2024); accept FFORMA if it beats simple averaging by ≥2% relative log-loss in ≥2 of 3 markets, else accept the regime-switching rule if NN-stack wins the near-tied regime.

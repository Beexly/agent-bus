# arxiv-program/research/2026-09-21/arxiv-deep/1801-expected-points-machine-learning-to-statistics.md
## What it is (1-2 sentences)
Deep read of arXiv:2409.04889v1 (Brill, Yee, Deshpande & Wyner, 2024), which repairs four statistical flaws in ML-based expected points (EP) estimation: team-quality selection bias, ignored within-drive dependence, overfitting artifacts, and missing uncertainty quantification — on 491,993 NFL plays / 73,514 drives (2010–2022, nflFastR).
## Key metrics/methods (formulas where given, else "not specified")
- EP: EP(x) = Σ_k pts(k)·P(y=k|x), multinomial over 5 drive outcomes (TD=7, FG=3, no score=0, opp. safety=−2, opp. TD=−7); log(P(y_ij=k|x_ij)/P(y_ij=No Score|x_ij)) = f_k(x_ij)
- Team-quality fix: include pre-game point spread as covariate, evaluate at spread 0 for context-neutral EP
- Dependence fix: weighted log-loss with w_ij = 1/N_i (inverse plays in drive), approximating M=100 averaged one-play-per-drive subsample fits
- Catalytic prior: augment training with M=500,000 synthetic game-states imputed from a multinomial logistic model; synthetic weight fraction φ of observed weight; φ=1 smallest φ eliminating overfitting artifacts (restores EP monotonic in spread)
- Uncertainty: cluster bootstrap resampling drives, B=100; bootstrap coverage bootcovg
- Test metric: rmse(EP̂,D_test) = (1/M_test)Σ_m sqrt((1/N_drives)Σ_iΣ_j I_mij(EP̂(x_ij)−pts(y_i))²); test log-loss and 95% prediction-set coverage on M_test=100 one-play-per-drive subsamples
## Data sources named
nflFastR play-by-play 2010–2022 (491,993 plays, 73,514 drives, 39,083 epochs; 10% of epochs have ≥4 drives); code at https://github.com/snoopryan123/expected_points_nfl
## Findings (numbers and facts, not vibes)
- Selection bias: good teams (spread < −3) run 32% of plays vs 26% for bad teams (spread > +3); good teams average 0.7 more points per drive — unadjusted EP overestimates average-team EP
- Accuracy (Table 1, ±2·SE): weighted XGBoost rmse 2.593±0.0017, logloss 0.7506±0.0006, coverage 0.834±0.0004; averaged-subsampled 2.593/0.7521/0.841; unweighted 2.618/0.7670/0.861 — dependency-aware models slightly but significantly more accurate; all point-estimate prediction sets undercover (~83–86% vs 95% nominal)
- Bootstrap coverage (Table 2): weighted+cluster 0.956±0.016, subsampled+cluster 0.957±0.016, unweighted+i.i.d. 0.963±0.013 — sampling uncertainty, not mis-specification, was the coverage culprit
- Multinomial XGBoost (rmse 2.593) beats direct regression XGBoost (2.598); logistic regression logloss 0.7584 vs XGBoost 0.7506 (smoothness costs accuracy)
- Catalytic prior: accuracy degrades linearly in φ; φ=1 eliminates artifacts at equal synthetic/observed weight
- 2022 player evals: KC offense > Buffalo > rest (significant); Mahomes > Allen, Tua > rest; Lamar Jackson (4th) not significantly > Dak Prescott (12th)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: EPA/EP pipeline methodology — the four fixes map 1:1 onto GSE risks: (1) team-quality tilt in any play-level-trained model, (2) 1/N_i row reweighting for non-independent training rows, (3) cluster-bootstrap confidence intervals for EPA statements, (4) catalytic prior to smooth GBM artifacts
## Engine-actionable? (yes/no + one-line what)
yes — Audit GSE's EPA pipeline against all four issues: add team-quality covariates evaluated at neutral, reweight training rows by 1/(plays in drive), cluster-bootstrap (by drive) all EPA CIs, and catalytic-smooth the EPA GBM toward a penalized multinomial logistic prior (M=500k synthetic states, tune φ); ~1 week, each component gated on beating its baseline significantly

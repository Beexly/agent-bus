# arxiv-program/research/2026-09-21/arxiv-deep/0622-deephit-time-to-injury-forecasting.md
## What it is (1-2 sentences)
DeepHit neural survival network forecasting time-to-injury (not binary injury flags) from longitudinal athlete-monitoring data in elite women's football, with per-player-day SHAP explanations (Catterall, Lynch et al., arXiv:2601.19479v1). Ledger verdict: ADAPT — survival-based time-to-injury with per-player-day SHAP is the right formulation for NFL availability risk (rank by imminent risk, not binary flags); the C-index 0.762 headline comes with wide LOPO spread (IQR 0.192), so port it with the imputation discipline, not the headline number.
## Key metrics/methods (formulas where given, else "not specified")
- DeepHit (Lee et al. 2018): network outputs a PMF over discrete time bins for the first-hitting-time of injury; trained with combined log-likelihood + ranking loss. MLP backbone (not RNN — irregular spacing/heavy missingness made recurrence infeasible).
- 21-day input window, 7-day prediction horizon (window design from Jarmann 2023).
- Imputation strategies compared: median, linear interpolation, bespoke teammate-relative formula (imputed fewest values, best preserved data distribution and univariate injury correlations).
- Baselines: RF, XGBoost, logistic regression on current-day data predicting next-day injury (rolling-average features for 3/5/7/10/14-day horizons; horizons beyond one day degraded badly, abandoned).
- Validation: chronological 80/20 train/test AND leave-one-player-out (LOPO); primary metric C-index.
## Data sources named
SoccerMon, Team B subset: 37 players from two elite Norwegian women's first-division teams, 322 recorded days, 2020–2021 → 4,449 player-date observations, 39 features, 43 injuries. Features: PmSys subjective wellness (stress, mood, sleep, soreness, fatigue, readiness), STATSports APEX GNSS objective data (speed, positioning, exertion, heart rate), derived weekly missingness-rate indicator. 15 of 37 players had ~half their training-day data missing; only 21 players present from collection start. Data: https://zenodo.org/records/10033832 (objective injury-report data NOT openly available — legal restrictions). Code: https://github.com/simulamet-host/soccermon-deephit.
## Findings (numbers and facts, not vibes)
- Baselines (next-day): RF F1 0.533, AUC 0.779, precision 1.000, recall 0.364; XGBoost F1 0.429, AUC 0.876, precision 1.000, recall 0.271; logistic F1 0.071, AUC 0.758, precision 0.037, recall 0.833.
- Sports-injury literature average (Leckey et al. 2024): AUC 0.69, F1 0.73.
- DeepHit chronological: C-index 0.660 (linear interpolation) → 0.762 (bespoke imputation).
- LOPO: IQR of C-index = 0.192; best player 0.974; correlation of C-index with sessions tracked r = 0.44, with injury count r = −0.08.
- Global importance leaders: average running speed, soreness, monotony, prior injury count; subjective missingness emerged as a key predictor.
- SHAP case study: model risk peaked ahead of a real acute thigh injury twice; drivers were elevated stress + high-intensity running + low mood + low sleep (+ fatigue on peak day); readiness and longer sleep modestly protective.
- Paper's own bar: C-index >0.7 acceptable, >0.8 strong (Longato et al.) — 0.762 judged "acceptable-to-strong" given data difficulty.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Survival time-to-injury formulation for NFL availability risk / questionable-tag modeling: TRUST-SIGNAL
- SHAP per-player-week risk drivers for props dashboard: OTHER
- Imputation discipline (teammate-relative fill + missingness-indicator feature) for practice-participation gaps: OTHER
- 21-day window / 14-day NFL horizon adaptation: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — reimplement DeepHit (PyTorch MLP, 21-day window, 14-day discrete horizon, log-likelihood + ranking loss) on nflverse + public injury-report panels with teammate/position-group-relative imputation and a missingness-indicator feature, validated chronologically + leave-one-team-out; ADOPT if holdout C-index ≥ 0.70 and beats Cox baseline by ≥ 0.03 with LOPO IQR ≤ 0.15 (~2–3 weeks effort).

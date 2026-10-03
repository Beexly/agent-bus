# arxiv-program/research/2026-09-21/arxiv-deep/1142-player-quality-value-forecasting.md
## What it is (1-2 sentences)
Deep-read ledger of Van Arem, Goes-Smit & Söhl 2502.07528 (Appl. Sci. 15, 8916): one-year-ahead forecasting of professional soccer players' quality (SciSkill) and transfer value (ETV) comparing OLS, lasso, LME, CART, RF, XGBoost, and kNN variants with explainability and uncertainty quantification. Verdict: ADAPT — the one-year-ahead development-forecasting protocol with RF bagging-based prediction intervals ports directly to NFL next-season player projections with honest intervals.
## Key metrics/methods (formulas where given, else "not specified")
- RMSE (primary — weighted to large errors for superstars) and MAE; Bayesian-optimization tuning with expanding-window yearly time-series CV
- Uncertainty: RF bagging-based intervals (Wager et al. 2014); linear classical prediction intervals; kNN min/max over large-k neighborhood; quantile regression rejected as needing an extra model
- Standard textbook formulations quoted, no novel equations; feature selection via noise-variable importance threshold (tree models) / lasso nonzeros (linear)
## Data sources named
- Proprietary SciSports data (not public; 5% of players held out by provider): quality set 80,568 players / 3,834,539 monthly points / 86 features / 2012–2023; value set 60,175 players / 413,177 biannual points / 58 features / 2014–2021; time-based split train ≤2020 / test ≥2021
## Findings (numbers and facts, not vibes)
- Quality: XGBoost lowest loss of all models (both RMSE and MAE, full test set); tree-based > linear; RF similar to XGBoost below age 22; all models best at ages 24–28; kNN-time-series worst
- Value: RF lowest RMSE and MAE overall; XGBoost and kNN slightly higher; RF "distinctly lower" on high-value (≥€10M) — the only model capturing the peak-then-decline pattern via the 'etv' feature
- Top features (min–max scaled): quality — age_years, age_years², years_diff_peak_age, current sciskill, sciskill_diff_mean_team, previous_zero_months (injury-layoff penalty); value — current etv, 6m/12m ETV developments, sciskill_diff_6m_ago, month of year (Jan winter-necessity vs Jul summer-squad-building transfers)
- Exact RMSE/MAE numbers are figures-only, not quoted in text; no confidence intervals or significance tests on model differences; no naive carry-forward baseline; UQ intervals never empirically validated for coverage in the paper
- File's GSE port: NFL next-season FPG development forecaster on nflverse 2015–2024 with RF + XGBoost + carry-forward baseline, train ≤2022 / test 2023–2024, RF bagging intervals with empirical coverage validation at 50/80/90% nominal, subgroup slices (rookies/2nd-year, age-29+, top-24 positional, team-changers); effort ~2 weeks
- File's acceptance gate: ADOPT only if (a) ≥10% RMSE improvement over carry-forward on 2023–2024 test for ≥3 of 4 positions, (b) empirical 80%-interval coverage within 75–85%, (c) 2nd-year-breakout RMSE ≤ 1.3× overall RMSE
- Improvement experiment: hierarchical position-specific Bayesian aging curve with player residual-vs-curve as the feature, expected to gain most on under-24 players
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (next-season player-development forecasting + honest prediction intervals feeding the calibration lane; subgroup-sliced evaluation protocol for young/breakout/decline players). No QB behavior, coaching, OL, trust-signal, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL next-season development forecaster (RF + XGBoost vs carry-forward baseline) with empirically coverage-validated bagging intervals, adopted only on ≥10% RMSE gain plus 75–85% empirical 80%-interval coverage and no subgroup catastrophe.

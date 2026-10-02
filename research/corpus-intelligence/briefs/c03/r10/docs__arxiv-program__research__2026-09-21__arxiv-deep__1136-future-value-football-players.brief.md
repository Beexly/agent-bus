# docs/arxiv-program/research/2026-09-21/arxiv-deep/1136-future-value-football-players.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:2212.11041 (Baouan et al. 2022): predicting footballers' TransferMarkt market value two years ahead, per position, from Wyscout performance stats via Lasso and Random Forest. Verdict: ADAPT — the per-position Lasso/RF recipe with log-value targets, per-unit-time normalization, and a league-average-value anchor is a portable template for GSE's future-value projections (dynasty fantasy, award futures, contract value); soccer specifics don't transfer, the methodology does.
## Key metrics/methods (formulas where given, else "not specified")
- Per-position (8 positions) Lasso (λ 0.004–0.01, 5-fold CV then raised to force 10–15 features) and Random Forest (100 trees, max depth 6, grid-searched).
- Target: log market value; feature engineering: stats per unit time (per-minute), ratios (successful/attempted), squares of age/height/goals/min/assists/min/shots/min; log demeaned league-average value; top-20-youth-academy boolean.
- Lasso: (α̂,β̂) = argmin Σ(yᵢ − α − Σβⱼxᵢⱼ)² + λΣ|βⱼ|; RF: ŷ_RF = (1/n_trees) Σ ŷ_tree_k; CV R² = 1 − MSE_cv/VAR(y); normalization x_ij = (x_ij − x̄_j)/max(x_j).
- Prediction window: performance aggregated over [1460,730] days before value date → predict value at date (2-year horizon); young-player model: 1-year horizon.
## Data sources named
Wyscout: 111 in-game stats; 2,646,549 player-games; 36,882 players; 45 leagues; 2015–March 2022. TransferMarkt: 415,890 recorded values for 33,439 players (2000–2022); second dataset 21,898 players × 26 identity features. Intersection: 12,133 players. Young-player application: 951 U-21 players; ranked 60 Golden Boy 2022 nominees.
## Findings (numbers and facts, not vibes)
- With league-average-value — Lasso CV-R²: GK 48.5%, FB 55.4%, CD 57.7%, CDM 60.0%, CM 61.5%, AM 55.9%, WG 57.4%, FWD 58.0%; RF CV-R²: 53.8%, 54.1%, 58.1%, 61.2%, 61.5%, 52.8%, 54.3%, 57.4% (Lasso≈RF — honest headline).
- Without league-average-value: R² drops to ~35–44% — the league anchor contributes roughly 20 points of R².
- Top features everywhere: league_avg_value, total_minutes_on_field, age (age_sq negative); long-pass volume has NEGATIVE coefficient for CBs/DMs (modern build-up preference); goals scored not selected for forwards (collinear with touches-in-box/linkup features).
- Golden Boy: predicted top-13 included 9 of the jury's top-10; Kendall correlation predicted-vs-jury 0.38 vs present-value-vs-jury 0.24 — model beats the current market at matching expert judgment.
- Limitations: CV folds not time-ordered; λ deliberately raised for sparsity ("arbitrarily set"); age quadratic may misprice veterans' aging curves.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-position Lasso/RF on per-snap/per-route nflverse + FTN charting stats predicting log(DK salary / rest-of-season fantasy value), with team-strength anchor (log team implied total or PFF unit grade) as the league_avg_value analogue: OTHER (dynasty/award-futures/buy-low valuation models).
- Anchor feature worth ~20 points of R²: TRUST-SIGNAL (context features dominate raw individual stats — a prior to test in NFL value models).
- Goals-not-selected-for-forwards collinearity lesson (linkup features subsume box-score): SCHEME (role-context features over box-score stats).
## Engine-actionable? (yes/no + one-line what)
Yes — build NFL per-position future-value models (log target, per-snap normalization, team anchor) with rolling-origin validation; gate on beating pooled + naive-salary baselines by ≥3 R² points on ≥3 of 4 skill positions.

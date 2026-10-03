# docs/arxiv-program/research/2026-09-21/arxiv-deep/0428-explainable-expected-goal-models-for-performance.md
## What it is (1-2 sentences)
Deep-read of Cavus & Biecek (2022, arXiv:2206.07212v2) on explainable xG models: forester AutoML tree classifiers with ROSE over-sampling, explained via aggregated ceteris-paribus profiles (AP), a "semi-global" what-if instrument. Ledger verdict: ADAPT only the AP explanation layer (reject ROSE over-sampling and the random-forest model choice on the paper's own evidence).

## Key metrics/methods (formulas where given, else "not specified")
- Classifier: f: X → Y minimizing L(f) = P[Y ≠ f(X)].
- Distance to goal: X_i^{DTG} = sqrt([105 − (L_i×105)]² + [34 − (W_i×68)²]).
- Angle to goal: X_i^{ATG} = |a_i/b_i × 180/π|, a_i = arctan[7.32×[105−(L_i×105)]], b_i = [105−(L_i×105)]² + [34−(W_i×68)]² − (7.32/2)².
- Aggregated profile: g_AP^j(z) = E_X^{−j}[f(X^{j|z})]; estimator ĝ_AP^j(z) = (1/k) Σ_i f(x_i^{j|z}).
- xG_{player/team} = Σ_i f(X_i).
- Model: forester AutoML over random forest/XGBoost/LightGBM/CatBoost, 80/20 split; imbalance handled by ROSE random over-sampling; winner = random forest on over-sampled data.
- Reader's interpretation (file's own): headline metrics are inflated by evaluating on over-sampled test data — the ORIGINAL-data model has better Brier (0.051) and log-loss (0.173) than the "winning" over-sampled model (0.071, 0.270); for betting probability models, Brier/log-loss on untouched data is what matters, and the original-data model wins.

## Data sources named
315,430 shots (33,656 goals, ~10.66%) from 12,655 matches across 7 seasons (2014–15 to 2020–21) of the top-five European leagues, scraped from Understat via the worldfootballR R package; 1,012 own-goal shots excluded. League summary (matches/shots/goals/conversion): Bundesliga 2,141/55,129/6,161/11.2%; EPL 2,650/66,605/6,951/10.4%; La Liga 2,648/62,028/6,854/11.0%; Ligue 1 2,557/61,053/6,438/10.5%; Serie A 2,659/70,615/7,252/10.3%. Features: minute, home/away, situation, shot type, last action (39 levels), distance to goal ([0.295, 84.892] m), angle to goal ([0.10°, 90°]). R code: https://github.com/mcavs/Explainable_xG_model_paper.

## Findings (numbers and facts, not vibes)
- Random forest (over-sampled): recall 0.958, precision 0.922, F1 0.940, accuracy 0.939, AUC 0.985, MCC 0.879, Brier 0.071, log-loss 0.270, balanced accuracy 0.939. Under-sampled: 0.858/0.882/0.870/0.871/0.954/0.743/0.104/0.352/0.871. Original: 0.304/0.888/0.453/0.921/0.975/0.493/0.051/0.173/0.649.
- Literature comparison: paper's over-sampled RF bolded best in precision (0.922), F1 (0.940), AUC (0.985), Brier (0.071), MAE (2.0); Fernandez et al.'s XGBoost has lower log-loss (0.254 vs. 0.270).
- Schalke 04 vs. Bayern Munich (2021-01-24): Schalke 0 goals, xG 2.67, 13 shots, μ_ATG 25.23°, μ_DTG 17.99m; Bayern 4 goals, xG 9.59, 31 shots, μ_ATG 27.79°, μ_DTG 16.96m. AP what-ifs: Schalke reducing mean distance 18m→15m raises per-shot xG ~40%; mean angle 25°→35° raises per-shot xG ~20%.
- 2020/21 player seasons: Burak Yilmaz 24 games, 16 goals, xG 24.77, 66 shots, μ_ATG 22.33°, μ_DTG 19.43m; Messi 35 games, 30 goals, xG 70.00, 195 shots, 21.66°, 19.23m; Lewandowski 28 games, 40 goals, xG 65.71, 132 shots, 34.69°, 12.94m. AP what-ifs: all three shooting from 15m raises per-shot xG ~20%; Lewandowski's AP rises after 25° and reaches ~0.5 average xG at 50°.
- Cautionary finding: PDP curves for distance-to-goal differ across original/over/under-sampled models — resampling changes model behavior, not just class balance (the paper's own result).
- Leakage: random 80/20 split over seven pooled seasons (future seasons in train, past in test); best model selected on metrics computed after over-sampling (selection criterion contaminated by treatment); forester AutoML with no reported hyperparameter tuning.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- AP what-if engine over expected-metric models ("what would this WR's expected yards look like if his average target depth were 2 yards shorter?") — OTHER (prop-research tooling; INFERENCE: could surface QB target-depth/placement tendencies but the paper itself contains no QB content).
- Rejection of ROSE-style over-sampling for GSE probability models (Brier/log-loss worse on untouched data; behavior shift) — OTHER (modeling doctrine; INFERENCE: directly relevant to rare NFL outcomes like turnovers/explosive plays).
- Coverage-conditional AP (aDOT profile split by man vs. zone) for prop questions — SCHEME (defensive scheme splits).

## Engine-actionable? (yes/no + one-line what)
Yes — build the "AP what-if" as a prediction-averaging harness over the existing expected-yards/CPOE models (no new model training), with profiles computed on original-data distribution only, observed-support shading, and bootstrap CIs; 2-day effort; permanently reject ROSE-style over-sampling for any GSE probability model.

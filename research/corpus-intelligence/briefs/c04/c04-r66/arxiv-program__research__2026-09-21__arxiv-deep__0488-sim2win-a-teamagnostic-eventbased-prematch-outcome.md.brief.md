# docs/arxiv-program/research/2026-09-21/arxiv-deep/0488-sim2win-a-teamagnostic-eventbased-prematch-outcome.md
## What it is (1-2 sentences)
Deep-read of Zemzoumi & Abouaomar (2026, arXiv:2607.26061v1) — "Sim2Win," a soccer pre-match outcome predictor built from rolling 5-match team behavioral profiles (no team names/Elo), four interpretable tactical ratios, and LOCO (Leave-One-Competition-Out) generalization validation. Ledger verdict: ADAPT the rolling-profile + efficiency-ratio + volatility recipe and LOCO protocol to NFL spread/total modeling; drop team-agnostic framing and the unvalidated playstyle clustering.

## Key metrics/methods (formulas where given, else "not specified")
- Rolling tactical profile: x̄(t,m) = (1/k)Σ_{i=1}^k x(t,m−i), k = 5, shifted one match back (no leakage); matchup vector x_m = [x_{h,m}, x_{a,m}].
- Four engineered ratios: Pressing Efficiency PE = ball recoveries/(pressures+ε); Shot Quality SQ = xG/(shots+ε); Directness D = passes/(possession events+ε); Chaos C = fouls + 3·yellows + 5·reds.
- Volatility/momentum: xG volatility σ_xG = √(Σ(xG_i − xḠ)²/5) (5-match std); xG momentum M_xG = xḠ_last3 − xḠ_last5; rest days R(t,m) = date(m) − date(m−1).
- Playstyle clustering: K-Means on 13 rolling features (StandardScaler, no PCA); elbow/silhouette suggest K=5 but authors use K=8 — explicitly unvalidated/exploratory: {High-Pressing Possession, Low-Block Counter, Mid-Block Transition, Direct Long Ball, Tiki-Taka, Wing-Play Overload, High-Intensity Gegenpress, Park the Bus}.
- Models: 13 classifiers (LogReg, SVM, KNN, Random Forest, Extra Trees, Bagging, AdaBoost, GBM, XGBoost, LightGBM, CatBoost, ANN, TabPFN); RandomizedSearchCV 5-fold CV on negative log loss L = −(1/N)Σ_i Σ_{c∈{H,D,A}} y_{i,c} log(p̂_{i,c}).
- Validation: stratified 80/20 holdout; 10-fold CV with 95% CIs; McNemar's exact test; LOCO (one full competition held out per fold, 7 folds); 8-configuration ablation; draw-specific experiments (class weights, threshold tuning).
- NFL analogs (file's own spec): rolling 4-game shifted profiles of EPA/play (off/def, dropback/rush splits), success rate, pressure rate, explosive-play rate, turnover luck, pace; ratios: pressure-to-sack conversion, EPA/dropback vs. EPA/rush, red-zone TD rate, "chaos" = penalties + turnovers; volatility = rolling std of EPA/play; momentum = last-2 minus last-4.

## Data sources named
StatsBomb open event data (public, github.com/statsbomb/open-data, via statsbombpy): 11 competitions (Bundesliga, Premier League, Ligue 1, La Liga, MLS, FIFA World Cup, UEFA Euro, Copa America, AFCON, Women's World Cup, FA Women's Super League) → 1,411 team-match rows, 178 teams, ~706 matches after cleaning (incomplete rows, duplicates, thin-history teams removed; xG > 5.0 capped/removed; matches with ≥3 red cards excluded; volume metrics Winsorized at 1st/99th percentiles). Code: "Sim2win Github Repository" (link named in paper). NFL transfer spec names nflverse play-by-play 2020–2025.

## Findings (numbers and facts, not vibes)
- In-distribution 80/20 holdout: CatBoost 60.90% acc / 0.9289 log loss / 0.7268 AUC / 0.5817 F1 (selected for deployment); XGBoost 56.39% / 0.9271 / 0.7406 (best AUC); Extra Trees 59.40% / 0.9340 / 0.7325 / 0.6112 precision; LogReg 55.64% / 0.9207 (lowest log loss — best calibrated but linear); TabPFN 41.35% / 1.0887 / 0.6307 (worst — paired matchup structure breaks its pretraining assumptions).
- 10-fold CV: CatBoost 55.50±2.45% acc [53.66, 57.35], AUC 0.695±0.044; XGBoost 52.49±4.58%, AUC 0.697±0.045; Extra Trees 54.91±3.93%, AUC 0.707±0.041. CIs overlap substantially. McNemar: CatBoost vs LogReg p=0.0009 (significant); vs XGBoost p=0.1221, vs Extra Trees p=0.4807 (not significant).
- Ablation (Δacc): window 5 is the key choice — window 3: −4.11%, window 7: −3.93%; without xG volatility: −1.66%; without contextual: −1.21%; without cluster: −0.91% (but AUC rises 0.683→0.690 — no discriminative gain); without engineered ratios: −0.15% (AUC 0.683→0.691). Raw unshifted per-match features: +7.10% acc — pure leakage, reported only as diagnostic upper bound.
- LOCO: mean CatBoost acc 55.4%, mean AUC 0.704 (Cat) / 0.701 (XGB); best on La Liga (65.1% acc, 0.796 AUC) and Women's WC (67.5%, 0.762); weakest on AFCON (45.0%, 0.562) and UEFA Euro (46.2%, 0.615).
- LOCO vs ratings (mean AUC): Sim2Win 0.704 vs ELO 0.567 vs Pi-Rating 0.551 vs GAP 0.548 — 21/21 AUC wins, 19/21 accuracy wins (with the authors' asymmetry caveat: ratings were warmed up chronologically, measuring robustness under distribution shift, not head-to-head deployment).
- Draw failure: Draw F1 = 0.238 on holdout; zero draws predicted in ≥1 LOCO fold; best mitigation (XGBoost + class weights) reaches Draw F1 0.400 at cost of acc 57.89% — structural trade-off, no configuration exceeds 0.40.
- SHAP: top features = possession events, shot quality, pass volume, pressing efficiency, xG volatility; balanced home/away importance.
- Limitations: n = 1,411 team-match rows is small; ablation deltas <1% sit inside CV noise; home-advantage confound (top feature is home possession events; model over-predicts home wins; neutral-ground competitions are exactly where it weakens); Bundesliga-heavy Euro-club bias; no injuries/rotation/weather/referee/coach-change features.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rolling 4-game shifted behavioral profiles + efficiency ratios + volatility/momentum features for NFL spread/total modeling; matchup-vector construction (home/away profiles + differentials) — OTHER (feature engineering; INFERENCE: could capture short-term coaching/form shifts but no QB behavioral content in the paper).
- Leave-one-season-out as the standing generalization check; ablate window length (3/4/5/6 games) and feature groups exactly as the paper does — OTHER (evaluation protocol).
- Hybrid experiment: stack behavioral rolling features WITH team-strength priors (Elo/Glicko, market-implied) in one GBM, test whether combination beats either alone — OTHER (modeling; directly tests the paper's open question #6 on NFL data).

## Engine-actionable? (yes/no + one-line what)
Yes — port the recipe (~3–4 days: shifted 4-game rolling profiles, NFL ratio analogs, volatility/momentum, CatBoost/LightGBM ATS win-prob + total regression) with leave-one-season-out CV over 2022–2025, and adopt if it beats Elo-only logistic by ≥0.015 mean LO-season-out log loss with positive flat-stake ROI in ≥3 of 4 test seasons; skip the K-Means playstyle layer entirely.

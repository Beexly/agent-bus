# docs/arxiv-program/research/2026-09-21/arxiv-deep/0488-sim2win-a-teamagnostic-eventbased-prematch-outcome.md
## What it is (1-2 sentences)
Deep-read ledger of Zemzoumi & Abouaomar (2026) "Sim2Win" (arXiv:2607.26061v1): team-agnostic soccer outcome prediction from shifted 5-match rolling tactical profiles, four engineered ratios, volatility/momentum features, and 13 classifiers evaluated under Leave-One-Competition-Out. Verdict: ADAPT — drop the team-agnostic framing and unvalidated playstyle clustering, port the rolling-profile + efficiency-ratio + volatility recipe and LOCO protocol to NFL spread/total modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Rolling profile: x̄(t,m) = (1/5)Σ_{i=1}^{5} x(t,m−i), shifted one match back (no leakage).
- Four ratios: PE = ball recoveries/(pressures+ε); SQ = xG/(shots+ε); D = passes/(possession events+ε); C = fouls + 3·yellows + 5·reds.
- Volatility/momentum: σ_xG (5-match std), M_xG = xḠ_last3 − xḠ_last5; rest days R = date(m) − date(m−1).
- Models: 13 classifiers (LogReg, SVM, KNN, RF, Extra Trees, Bagging, AdaBoost, GBM, XGBoost, LightGBM, CatBoost, ANN, TabPFN); RandomizedSearchCV 5-fold CV on negative log loss L = −(1/N)Σ_i Σ_{c∈{H,D,A}} y_{i,c} log(p̂_{i,c}).
- Validation: stratified 80/20 holdout + 10-fold CV w/ 95% CIs + McNemar + LOCO (7 folds) + 8-config ablation + draw-specific experiments.
## Data sources named
StatsBomb open event data via statsbombpy: 11 competitions (Bundesliga, Premier League, Ligue 1, La Liga, MLS, FIFA World Cup, UEFA Euro, Copa America, AFCON, Women's World Cup, FA Women's Super League) → 1,411 team-match rows, 178 teams, ~706 matches after cleaning (xG > 5.0 capped/removed; ≥3 red-card matches excluded; metrics Winsorized at 1st/99th percentiles). "Sim2win Github Repository" named in paper.
## Findings (numbers and facts, not vibes)
- In-distribution 80/20 holdout: CatBoost 60.90% acc / 0.9289 log loss / 0.7268 AUC (selected); XGBoost 56.39% / 0.9271 / 0.7406 (best AUC); LogReg 55.64% / 0.9207 (lowest log loss — best calibrated but linear); TabPFN 41.35% (worst — paired matchup structure breaks its pretraining).
- 10-fold CV: CatBoost 55.50±2.45% acc [53.66,57.35]; CIs overlap substantially; McNemar: CatBoost vs LogReg p=0.0009 (significant); vs XGBoost p=0.1221, vs Extra Trees p=0.4807 (not significant).
- Ablation (Δacc): rolling window 3: −4.11%; window 7: −3.93% (window 5 is the key choice); without xG volatility: −1.66%; without contextual: −1.21%; without cluster: −0.91% (but AUC rises 0.683→0.690 — no discriminative gain); without engineered ratios: −0.15% (AUC 0.683→0.691). Raw unshifted per-match features: +7.10% acc — pure leakage, reported only as diagnostic upper bound.
- LOCO: mean CatBoost acc 55.4%, mean AUC 0.704; best La Liga (65.1%, 0.796) and Women's WC (67.5%, 0.762); weakest AFCON (45.0%, 0.562) and UEFA Euro (46.2%, 0.615).
- LOCO vs ratings (mean AUC): Sim2Win 0.704 vs ELO 0.567 vs Pi-Rating 0.551 vs GAP 0.548 — 21/21 AUC wins, 19/21 accuracy wins (authors' asymmetry caveat: ratings warmed up only on training competitions).
- Draw failure: Draw F1 = 0.238 on holdout; zero draws predicted in ≥1 LOCO fold; best mitigation (XGBoost + class weights) Draw F1 0.400 at acc 57.89% — structural trade-off, no config exceeds 0.40.
- SHAP top features: possession events, shot quality, pass volume, pressing efficiency, xG volatility; balanced home/away importance.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Port to NFL: 4-game shifted rolling profiles of EPA/play (off/def, dropback/rush splits), success rate, pressure rate, explosive rate; NFL ratio analogs (pressure-to-sack conversion, red-zone TD rate, chaos = penalties + turnovers); EPA/play volatility + momentum (last-2 minus last-4) features; concatenated matchup vectors + rest/travel/weather — OTHER (feature engineering + evaluation protocol).
- Leave-one-season-out CV as the standing NFL generalization check — OTHER.
- Hybrid improvement: stack rolling behavioral features WITH identity-based ratings (Elo/Glicko, market-implied) in one GBM — OTHER.
- Skip the K-Means playstyle layer entirely (unvalidated, no discriminative gain). No QB behavior, coaching, OL, trust-quote content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — on nflverse 2021–2025: 4-game shifted rolling profiles + ratios + volatility/momentum + matchup differentials → CatBoost/LightGBM for ATS win prob and totals; evaluate leave-one-season-out 2022–2025 vs. Elo-only logistic and raw season-average features; adopt iff mean LO-season-out log loss beats Elo-only by ≥0.015 AND flat-stake ROI positive on ≥3 of 4 test seasons.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0031-beyond-expected-goals-a-probabilistic-framework.md

## What it is (1-2 sentences)
A 2026 arXiv paper (arXiv:2512.00203, Pipping, Feng & Sabin, UPenn) that builds "xG+" — a possession-level soccer framework factorizing scoring threat into attempt-generation probability (xS: P(shot in next second)) × conversion-given-attempt (xG), aggregated per possession — and shows the factorization beats standard sum-of-xG at team-level goal forecasting. The corpus reader's verdict is ADAPT: the proprietary per-second tracking machinery does not transfer, but the xS×xG decomposition and possession-level aggregation port directly to NFL drive/play modeling on nflverse data.

## Key metrics/methods (formulas where given, else "not specified")
- Two XGBoost models: xS = P(shot in next second | features); xG = P(goal | shot taken in current frame). 5-fold CV within season, log-loss primary. (XGBoost hyperparameters: not stated in paper.)
- Frame-level joint: `xG+_t = P_t(Shot) × P_t(Goal|Shot) = xS_t · xG_t`.
- Possession aggregation: at-least-one `xG+_poss = 1 − ∏_{t=1}^{n}(1 − xG+_t)`; max-per-possession `max_t(xG+_t)`.
- Team-level evaluation: rolling-origin CV over 114 matchdays; two-stage R/lme4 model — stage 1 mixed-effects Poisson `metric ~ (1|season) + (1|season:team) + (1|season:opp) + home`; stage 2 Poisson `goals ~ home + season + team_off + opp_def`. Metrics: MSE, MAE, empirical 90% squared-error intervals, head-to-head win rate vs sum-of-xG.
- Player-season: `GOE_xG = Goals − xG`; `SOE = Shots − xS`; `GOE_xG+ = Goals − xG+`; per-match `GOE^xG+_pm = GOE_xG+/MP`, `GOE^xG_pm = GOE_xG/MP` (MP = matches played).
- Features (Appendix A): ball r (distance to goal center), theta, z (height), speed; openGoal [0,1] (unobstructed goalmouth share, defenders modeled as uniform 75 cm circles, tangent line pairs); GK_r, GK_theta; DefAngle_0..4/DefDist_0..4 (5 nearest non-GK defenders), OffAngle_0..4/OffDist_0..4 (5 nearest attackers excl. ball carrier).

## Data sources named
- Video tracking, event, and team data from **Gradient Sports** for 2022–23, 2023–24, 2024–25 English Premier League seasons; 30 fps frames with ball/player (x, y, z), possession indicators, shot outcomes, player/team IDs; filtered to clear possession in the attacking third. Proprietary — no public URL, not replicable. Frame/possession counts not stated.
- No code link stated in the paper.

## Findings (numbers and facts, not vibes)
- Sub-model CV (mean out-of-sample log loss ± SD): xG — XGBoost(all features) 0.326±0.0074 vs best logistic 0.337±0.0086 (3.3% improvement); xS — XGBoost 0.0227±0.00089 vs best logistic 0.0251±0.00060 (9.5% improvement). — OTHER
- Feature importance (information gain): ball distance r dominant for both; ball speed 2nd for xS, 3rd for xG; openGoal 2nd for xG, contributes little to xS. Partial dependence: higher ball speed → higher xS but lower xG (drops sharply from idle ball); openGoal positively associated with xG; ball height negatively associated with xG (proxy for body part). — SCHEME
- Team forecasting (114 matchday folds): MSE at-least-one — xG+ 2.84, xS 2.90, xG 2.94; MAE at-least-one — xG+ 1.86, xS 1.87, xG 1.89 (sum-of-shots xG: MSE 2.90, MAE 1.87). xS alone also beats xG → "short-horizon shot creation is a more stable team-level signal than shot quality." — TRUST-SIGNAL
- Head-to-head vs sum-of-xG (n=114): at-least-one xG+ wins 69 matchdays (0.605), p=0.015 under Binomial(114, 0.5); max-per-possession xG+ wins 70 (0.614), p=0.009 — "strong evidence that xG+ offers a genuinely better predictor of future team scoring." — TRUST-SIGNAL
- Year-to-year player correlations: GOE_xG 0.12, SOE 0.63, GOE_xG+ 0.35 — shot-taking behavior (SOE) is ~5× more persistent than finishing over expectation. — QB-BEHAVIOR
- SOE extremes: top Rashford 22-23 (103 shots, xS 54.4, SOE +48.6, 35 matches), Salah 23-24 (+47.0), Semenyo 24-25 (+45.0), Haaland 23-24 (+44.5); bottom Bernardo Silva 24-25 (27 shots, xS 43.1, SOE −16.1), Bruno Guimarães 22-23 (−15.1). — OTHER
- GOE_xG+ per-match top-10 led by Haaland 22-23 (0.52, 36 goals, 35 matches); the xG-only list is more sensitive to short finishing streaks. — OTHER
- Robustness (Appendix B, 10 replications): every possession-based approach beats sum-of-xG on MSE in every subsample (xG+ at-least-one min–max difference vs sum-of-xG: (−0.112, −0.0612)); the three cannot be cleanly ranked against each other. — TRUST-SIGNAL
- Limitations: proprietary data; possible frame-shuffle CV leakage (fold construction not stated); possession product assumes per-frame independence (xG+_t strongly autocorrelated — better read as index than literal probability); "clear possession in attacking third" filter depends on noisy indicators; absolute gains small (~2% MSE, 0.01–0.03 MAE). — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The headline transferable insight: attempt-generation (SOE, year-to-year r=0.63) is far more persistent than conversion (GOE_xG r=0.12) — NFL analog: deep-shot attempt rate / aggressiveness is the stable QB signal, completion on those throws is noisier; this is direct QB-aggressiveness evidence — QB-BEHAVIOR.
- GSE does not currently decompose EPA into attempt-rate vs. conversion components at the play level — the xS×xG factorization fills that gap; NFL port: xS-analogue = P(deep attempt | dropback) from nflverse features, aggregated per drive via 1−∏(1−xS_t·xG_t) — SCHEME.
- The paper explicitly cites Brill et al. (2025) on EP selection bias in American football — aligns with existing GSE corpus coverage (2409.04889) — TRUST-SIGNAL.
- Robustness pattern worth copying: every possession-based approach beat sum-of-xG in every subsample — the decomposition's edge is structural, not tuned — TRUST-SIGNAL.
- The authors' own future-work suggestion (survival/hazard formulations for within-possession dependence) points to a Hawkes self-exciting drive-threat process as the next step — SCHEME.

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL port (XGBoost deep-attempt-occurrence × conversion-given-attempt sub-models on nflverse dropbacks, drive-level 1−∏(1−p) threat index), and adopt as a feature family if it beats EPA/play-sum baselines on week-blocked 2025 MAE with p<0.05 and the attempt component shows higher week-to-week stability than the conversion component.

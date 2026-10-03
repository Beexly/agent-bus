# arxiv-program/research/2026-09-21/arxiv-deep/0511-going-deep-models-for-continuoustime-withinplay.md
## What it is (1-2 sentences)
Deep-read note on arXiv:1906.01760v3 (Yurko et al. 2019) proposing a modular continuous-time within-play valuation framework for NFL tracking data: an LSTM ball-carrier model predicts expected yards-from-current-position at every 10 Hz frame, feeding expected end-of-play yard line and, via RFCDE conditional densities, within-play EP/WP curves.
## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1 (verbatim): E[Y*_{t,i}|F(X_{t,i})] = E[Y_{t,i}|F(X_{t,i})] + [player's current yard line]
- Eq. 2 (verbatim): E[g(Y*_{t,i}|F(X_{t,i}))] = ∫ g(Y*_{t,i}|F(X_{t,i})) · f̂(Y*_{t,i}|F(X_{t,i})) · dX_{t,i}
- QB decision: P(D_i|F(X_{t,i})) multinomial over {d_ta=throw away, d_r=run/sack, d_p=pass}
- Target catch probabilities replicated 5×/play, softmax-normalized over 5 receivers; individual catch probabilities replicated 16×/play (5 receivers + 11 defenders), softmax-normalized to global catch probability
- Ball-carrier models compared: intercept-only; LASSO (glmnet, 1-SE penalty via CV); XGBoost (default 100 trees, max depth 3); feedforward NN (2 layers × 50 hidden units, ReLU, L1 per layer, Adam); LSTM (2 layers, 50 units per layer, 20% recurrent dropout per layer, zero-padded sequences)
- Features: endzone-adjusted x/y/dir (x_adj = yards from target endzone; y_adj = yards from midfield; dir_target_endzone ±180°), speed, frame distance, ball-carrier-relative x_change/y_change/dist_to_ball, defender direction-vs-angle-to-ball-carrier diff, 9 Voronoi features (bc region area, area in front, closest/farthest perimeter points to endzone, all-teammate-shared-edges bubble), from two tessellations (all 22; BC + 11 defenders) via deldir R package; centered/scaled; lagged versions tested, no improvement
- Validation: leave-one-week-out CV; RMSE + RMSE/residuals by frames-from-sequence-start
## Data sources named
- NFL "Big Data Bowl" tracking data: first 6 weeks of 2017 regular season (10 Hz RFID, 2 chips/player shoulder pads + ball; event annotations); since taken down
- nflscrapR (play-by-play join, ball-carrier identification)
- deldir (R, Voronoi)
- Companion: Yurko et al. 2019 nflWAR (1802.00998) between-play EP/WP; drop-in dropback modules: Burke 2019 DeepQB; Deshpande & Evans 2019; RFCDE: Pospisil & Lee 2018
## Findings (numbers and facts, not vibes)
- 1,075,720 unique frames across 14,167 plays (22 players + ball/frame); modeling subset: 154,908 frames from 4,502 ball-carrier sequences (rushes + QB scrambles); sequences mostly 2–5 seconds long
- All covariate models beat intercept-only; LSTM lowest overall LOWO-CV RMSE and lowest RMSE at every point across the sequence (Figure 7; exact RMSE values embedded in figure graphic, not extractable — ordering only reported)
- Intercept-only shows clear temporal bias; LSTM has smallest long-term errors (mean error ± 2 SE)
- XGBoost top-2 features: defense1_dist_to_ball (closest defender distance), bc_s (ball-carrier speed); LASSO coefficients agree (faster BC → more yards; Voronoi closest-point-to-endzone distance negatively related to yards gained)
- Player evaluation (explicitly unstable, ≥20 carries cutoff): Alex Collins led sample in yards/carry but negative yards-above-expectation at handoff; Le'Veon Bell under-performed expectation at handoff, over-performed 1 second (10 frames) into carry
- RFCDE proof-of-concept: bimodal end-of-play yard-line density at first contact for Cordarrelle Patterson's 47-yard TD (Chargers vs Raiders, 2017 Week 6); no numeric integration results reported
- Hyperparameters: XGBoost 100 trees/depth 3; feedforward 2×50 ReLU + L1, Adam; LSTM 2 layers × 50 units, 20% recurrent dropout
- Verdict: ADOPT (NGS tracking lane architecture)
- Acceptance gate: ADOPT if LSTM beats XGBoost by ≥5% relative frame-level RMSE on held-out season AND |mean error| within ±2 SE of zero across sequence profile; else XGBoost + RFCDE
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (tracking lane): This is the missing architectural blueprint for GSE's NGS tracking program — the framework that turns raw 10 Hz tracking into per-frame within-play EP/WP curves feeding the engine. Serves the tracking/calibration program directly.
- QB-BEHAVIOR: The unbuilt dropback side (QB decision multinomial {throw away, run/sack, pass} → target → catch probability heads) is exactly the QB-behavioral profile architecture — per-frame QB decision modeling with ball-carrier-relative defender geometry as features. The feature set (closest-defender distance, defender direction-vs-angle-to-ball-carrier) transfers to QB pressure/decision profiles.
- OL: Not modeled (OL players folded into distance-ranked groups), but Voronoi all-teammate-shared-edges bubble indicator encodes blocking-pocket geometry — a usable OL-side spatial signal.
- TRUST-SIGNAL: UNCERTAIN — player-evaluation examples explicitly flagged unstable with limited data; yards-above-expectation attribution not production-ready.
- COACHING: RPO play-type ambiguity flagged by authors as a problem case (play type assumed known at snap) — relevant to scheme-identification work.
## Engine-actionable? (yes/no + one-line what)
yes — Implement Tables 2–3 feature set (endzone-adjusted coords, BC-relative geometry, Voronoi) + LSTM vs XGBoost LOWO-CV gate on a Big Data Bowl tracking sample; this is the NGS tracking-lane foundation spec.

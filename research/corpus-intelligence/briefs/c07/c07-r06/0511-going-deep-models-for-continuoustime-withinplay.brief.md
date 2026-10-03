# arxiv-program/research/2026-09-21/arxiv-deep/0511-going-deep-models-for-continuoustime-withinplay.md
## What it is (1-2 sentences)
Yurko et al. (2019) propose a modular continuous-time within-play valuation framework for NFL tracking data: a ball-carrier model predicts expected yards from the current position at every 10 Hz frame, which routes through an RFCDE conditional density into within-play expected points (EP) and win probability (WP). The paper's verdict is ADOPT — it is the architectural blueprint for GSE's NGS tracking lane (Voronoi feature engineering transfers directly).

## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1: E[Y*_{t,i}|F(X_{t,i})] = E[Y_{t,i}|F(X_{t,i})] + current yard line (linearity of expectation).
- Eq. 2: E[g(Y*_{t,i}|F(X_{t,i}))] = ∫ g(Y*_{t,i}|F(X_{t,i})) · f̂(Y*_{t,i}|F(X_{t,i})) · dX_{t,i} (RFCDE extension; paper warns plugging point estimates into nonlinear EP/WP is biased).
- Dropback tree: QB decision multinomial {throw away, run/sack, pass} → target probabilities over 5 receivers (softmax-normalized, 5× replication) → global catch probability → individual catch probabilities over 16 players (softmax-normalized) → each catcher routes to ball-carrier model.
- Models compared: intercept-only, LASSO (glmnet, 1-SE CV), XGBoost (100 trees, max depth 3), feedforward NN (2×50 ReLU, L1, Adam), LSTM (2 layers × 50 units, 20% recurrent dropout, zero-padded sequences).
- Features: endzone-adjusted coordinates (x_adj = yards from target endzone, y_adj from midfield, dir_target_endzone ±180°), speed, frame distance; ball-carrier-relative features by distance-ranked groups; 9 Voronoi tessellation features (bc region area, area in front, perimeter points to endzone, teammate-shared-edges bubble) from two tessellations (all 22; ball-carrier + 11 defenders).
- Validation: leave-one-week-out CV over 6 weeks; RMSE + residuals-by-frames-from-start (temporal-bias check).

## Data sources named
NFL Big Data Bowl tracking data (first 6 weeks of 2017 regular season, 10 Hz RFID from shoulder-pad/ball chips, event annotations); nflscrapR play-by-play joined for ball-carrier identification; deldir (R) for Voronoi; 1,075,720 frames / 14,167 plays → modeling set 154,908 frames / 4,502 ball-carrier sequences (rushing plays only; sequences mostly 2–5 s).

## Findings (numbers and facts, not vibes)
- All covariate models beat intercept-only; LSTM had the lowest overall LOWO CV RMSE and lowest RMSE at every point across the ball-carrier sequence (exact RMSE values are in a figure graphic, not extractable as text — ordering only).
- XGBoost feature importance top-2: defense1_dist_to_ball (closest defender distance) and bc_s (ball-carrier speed); LASSO coefficients agree directionally.
- Illustrative player evaluation: Alex Collins led the sample in yards/carry but was negative in yards-above-expectation at handoff; Le'Veon Bell under-performed expectation at handoff but over-performed one second into the carry (flagged as unstable, ≥20 carries cutoff).
- RFCDE proof of concept: bimodal end-of-play yard-line density at first contact for the Patterson TD; no numeric integration results reported.
- Dropback modules (QB decision, target, catch) are unbuilt in the paper — architecture only; fumbles and special teams ignored; RPO play-type ambiguity flagged as a problem case.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB decision multinomial {throw away, run/sack, pass} and receiver target-probability architecture (softmax over 5 receivers, catch routing to ball-carrier model).
- SCHEME: ball-carrier-relative geometry + Voronoi "bubble" features quantify blocking scheme effectiveness within play; run/sack vs pass routing depends on play-type identification.
- TRUST-SIGNAL: RFCDE conditional-density approach (Eq. 2) avoids the biased plug-in of point estimates into nonlinear EP/WP; explicit independence assumption between between-play EP/WP and within-play density warned as fragile.
- COACHING: yards-above-expectation at handoff attribution (e.g., Collins/Bell examples) is a coaching-relevant back evaluation metric.
- OL: Voronoi region area / "bubble" features are direct OL-run-blocking quality signals.

## Engine-actionable? (yes/no + one-line what)
yes — implement the ball-carrier LSTM + Voronoi feature pipeline (Tables 2–3) on NGS tracking data to add within-play EP/WP curves and yards-above-expectation attribution to GSE's tracking lane.

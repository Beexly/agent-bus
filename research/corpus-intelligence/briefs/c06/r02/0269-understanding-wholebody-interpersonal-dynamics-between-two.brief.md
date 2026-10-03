# arxiv-program/research/2026-09-21/arxiv-deep/0269-understanding-wholebody-interpersonal-dynamics-between-two.md
## What it is (1-2 sentences)
A full-depth research note on Takamido et al. (2024, arXiv:2401.06412), which applies component-wise-MLP neural Granger causality (cMLP, from Tank et al. 2021) as explainable AI to 27-joint motion-capture time series from 16 pitcher-batter pairs, quantifying asymmetric inter-personal causal influence and its relation to in-field hit rate. The note's verdict is ADAPT: the cMLP neural-Granger method ports to NFL tracking data (defender-ball-carrier coupling, e.g., CB reaction lag to WR breaks), though GSE has no 27-joint mocap source today.
## Key metrics/methods (formulas where given, else "not specified")
- cMLP: per-target-joint MLP, h_1(t) = sigma(sum_{k=1..K} W_1^k x_{t-k} + b_1), sigma=ReLU; x_{t,i} = W_L h_{L-1}(t) + b_L + e_{t,i}; training objective: min_W sum_{t=K+1..T}(x_{t,i} - g_i(x_{(t-1):(t-K)}))^2 + lambda sum_j Omega(W_{:j}^1), Omega = group sparse group lasso on first-layer weights per input series; Granger strength read off first-layer weight magnitudes.
- Settings: 1 hidden layer, 32 units, ReLU, max lag K = 1.0 s (50 points), ISTA, lr 0.05, lambda = 0.003, 2000 iterations; prediction R^2 > 0.9; <2 min/pair on NVIDIA V100.
- Aggregations: ngc_{i,j} = sum_k ngc_{i,j,k}; intra/inter indices ngc_pp = sum sum ngc/(13*12), ngc_bb = sum sum/(14*13), ngc_pb (pitcher->batter) = sum sum/(14*13), ngc_bp = sum sum/(13*14) (diagonals excluded); lag structure l_{i,j} = argmax_k(ngc_{i,j,k})/50 (seconds).
- Validation: one-way repeated-measures ANOVA over 16 pairs + Holm-Bonferroni; MANOVA of four indices + ball speed on contact/in-field rates; one-sample t-tests vs 0.015 threshold (BH-adjusted); effect sizes partial eta^2, Cohen's d; post-hoc power: smallest detectable eta^2 = 0.21, d = 0.75.
## Data sources named
32 synchronized optical motion-capture cameras at 250 Hz; Trackman pitch velocity; 23 male expert baseball players (7 pitchers, 16 batters), 16 pairs, 10 swings per pair, fastballs to strike-zone center (mean 76.8 mph); 27 resultant-joint-velocity series, 10 Hz low-pass, clipped -2 s to +0.5 s from release, normalized [0,1], downsampled 50 Hz -> 125 points x 27 vars x 10 swings per pair. Data + sample code: https://github.com/takamido/NGC_data_baseball.
## Findings (numbers and facts, not vibes)
- ANOVA over four NGC indices: F(3,60) = 2.75, p < .01, eta^2 = 0.90; post-hocs all p < .01: ngc_pp > ngc_bb (t(15)=4.1, d=2.9), ngc_pp > ngc_pb (t(15)=13.2, d=4.7), ngc_pp > ngc_bp (t(15)=59.0, d=20.9); ngc_pb > ngc_bp (t(15)=8.4, d=3.0).
- Share of total causality: ngc_pp ~49%, ngc_bb ~31%, ngc_pb ~19%, ngc_bp ~1%.
- Asymmetry: ngc_pb/(ngc_bb + ngc_pb) = 0.38 — ~38% of batter movement generated from pitcher movement.
- MANOVA on in-field rate: F(1,14) = 10.9, p < .01, eta^2 = 0.60; no effect on contact rate. Follow-ups: ball speed F=6.6, p=.02, eta^2=0.32; ngc_pp F=9.4, p<.01, eta^2=0.40; ngc_bp F=32.1, p<.01, eta^2=0.69 (batter->pitcher "causality" correlates with performance, though ~1% of total NGC — INFERENCE: likely anticipatory movement, not genuine influence).
- Key joints: 10 pitcher joints exceeded 0.015 threshold (throwing arm: back elbow, back wrist -> batter wrists/bat tip; lower body: back knee, back heel); NO batter joints had significant causality to pitcher joints.
- Lag indices: l_pp = 0.13 +/- 0.01 s, l_bb = 0.07 +/- 0.04 s, l_pb = 0.49 +/- 0.06 s — l_pb matches ~0.50 s ball travel time at 76.8 mph.
- Sensitivity: hyperparameter tuning targets a chosen variable-usage-rate band (0.25-0.50) — detected-link density is substantially a tuning artifact; downsampling rate and max lag materially shift intra/inter ratios.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (matchup analytics): defender-ball-carrier causal coupling from NFL tracking (man-coverage CB<->WR, pass-rusher<->QB) — key-player identification and reaction-lag tables for matchup content and props; lag indices measure reaction delays (e.g., CB lag to WR break).
- QB-BEHAVIOR: INFERENCE — pass-rusher->QB NGC indices could quantify pressure-response coupling (how much a QB's movement is driven by rushers), a pressure-sensitivity behavioral metric.
- OL: INFERENCE — pass-rush interaction dynamics sit adjacent to OL blocking evaluation; coupled tracking analysis could extend to OL-DL interaction pairs.
- TRUST-SIGNAL: the variable-usage-rate tuning band makes discovered-link density a tuning artifact — GSE's port must use stability selection (>=70% bootstrap selection) instead of the arbitrary band.
## Engine-actionable? (yes/no + one-line what)
yes — Pilot cMLP on Big Data Bowl 2022 tracking (man-coverage plays): adopt if CB reaction-lag index lands in 0.2-0.6 s and WR->CB inter-body NGC correlates with play EPA at R^2 >= 0.10 (persisting at >= 0.05 on weeks 9-17 holdout); reject if lags are hyperparameter-unstable or R^2 < 0.05.

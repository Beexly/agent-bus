# arxiv-program/research/2026-09-21/arxiv-deep/0906-elo-vs-transfermarkt-match-forecasts.md

## What it is (1-2 sentences)
Paper ledger for arXiv:2609.21674v1 (Csurilla & Csató 2026) comparing performance-based Elo ratings vs lagged Transfermarkt squad market values for forecasting 1,503 UEFA Champions/Europa League matches. Verdict: ADAPT — equal-weight forecast pooling of a performance rating with a market-implied strength measure is a cheap, proven upgrade for GSE's NFL team-strength blend.

## Key metrics/methods (formulas where given, else "not specified")
- Targets: goal difference GD (eq. 1), expected-goals difference xGD (eq. 2), ordered outcome R∈{0,1,2} (eq. 3)
- Elo_it = Elo^h_t − Elo^a_t (1-Sept snapshot, eq. 4); TM_it = log V^h_{t−1} − log V^a_{t−1} (eq. 5)
- Models per target: OLS (eq. 6), ordered probit (eqs. 7–8), multinomial logit (eq. 11); equal-weight pool Ŷ^eq = 0.5Ŷ^Elo + 0.5Ŷ^TM (eq. 17); stacking Ŷ^stack = a_t + b_E Ŷ^Elo + b_T Ŷ^TM (eq. 19); RPS-minimizing convex weight ω∈{0,…,1} (eq. 20)
- Metrics: RMSE, OOS R² (eq. 12), RPS (eq. 13, ×100), Brier (eq. 14), log loss (eq. 15); clustered loss-differential t-tests (eq. 16, DM-style)
- Validation: expanding-window recursive; headline eval 2023/24 (238) + 2024/25 (362) = 600 matches; 2022/23 (238) for combination parameters; 7 sample-restriction robustness checks

## Data sources named
- FotMob match records (score, xG); Football Club Elo (clubelo.com) 1-September snapshot; Transfermarkt lagged squad market values (log); 1,503 matches UCL+UEL 2020/21–2024/25; common sample 1,394

## Findings (numbers and facts, not vibes)
- In-sample (N=1394): GD adj-R² = 0.254 (Elo), 0.236 (TM), 0.261 (joint); standardized coefs 0.977/0.938 single, 0.662/0.358 joint; corr(Elo diff, log-TM diff) = 0.877
- OOS GD RMSE/R²: Elo 1.710/0.237; TM 1.710/0.237; Joint 1.698/0.248; Equal-weight 1.695/0.251; Stacked 1.686/0.259
- OOS 100×RPS/Brier/log loss: Elo 19.729/0.183/0.932; TM 19.533/0.182/0.928; Joint 19.539/0.182/0.926; Equal-weight 19.431/0.182/0.923; Estimated 19.480/0.182/0.925
- Equal-weight vs Elo: Δ=−0.297 RPS×100, 95% CI [−0.588,−0.007], p=0.045; vs TM: p=0.499 (not significant)
- Equal-weight pool has best RPS under all 7 sample restrictions; estimated weights never significantly beat fixed 0.5 (stacking fit on only 238 forecasts — high variance); probability-pool weight ω = 0.35–0.40 on Transfermarkt
- Calibration flaw (all models): observed home-win frequency exceeds predicted in every bin (e.g., [0.0,0.2): predicted 0.133 vs observed 0.236)
- Raw Elo difference beats canonical Elo expected-score transform; no league-phase slope break (all p>0.2)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weekly-frozen NFL analog: GSE Elo (performance) + de-vigged closing-line market-implied strength pooled 0.5/0.5 — OTHER
- Add RPS (×100) to GSE calibration dashboard alongside Brier/log loss — TRUST-SIGNAL
- Shrinkage/hierarchical pooling: more market weight early-season (market embeds off-season info), more performance weight late-season (Elo needs games to learn) — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — build the five-way blend comparison (Elo-only, market-only, joint, equal-weight, stacking) on nflverse 2018–2025 + de-vigged Pinnacle lines; gate: equal-weight pool beats GSE-Elo-only by ≥0.10 RPS×100 at DM p<0.05 on 2023–2025.

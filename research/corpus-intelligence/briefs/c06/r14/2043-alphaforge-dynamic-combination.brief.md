# arxiv-program/research/2026-09-21/arxiv-deep/2043-alphaforge-dynamic-combination.md

## What it is (1-2 sentences)
Ledger digest of Hao Duly et al. (2024) "AlphaForge: A Framework to Mine and Dynamically Combine Formulaic Alpha Factors" (arXiv:2406.18394v5). Verdict: ADAPT — a generative-predictive factor miner producing a 100-formula "factor zoo" plus a dynamic per-time-step re-selection/re-weighting combination (Mega-Alpha) on trailing factor performance; adapted to NFL as weekly formulaic-signal mining with factor-timing combination.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 (mining): predictor P trained to map formula one-hot encoding x ∈ {0,1}^{D×S} to fitness: L_P = sqrt((1/n) Σ_i (P(x_i) − fitness(x_i))²); generator G trained to maximize predicted fitness: x = M(G(z)), z ~ N(0,1)^Q, with diversity penalty between sampled formulas; qualified formulas (IC/validity thresholds, novelty vs zoo) added until TargetFactorNum = 100.
- Stage 2 (dynamic combination): at each time t, re-score zoo factors on trailing-window IC, ICIR, RankIC; select top-N (best N=10 of 100); fit fresh OLS on latest data: Mega-Alpha_t = Σ_{j∈top-N_t} w_{j,t} f_j. Linear (not nonlinear) combination for overfitting control; factor-performance momentum (Ehsani & Linnaaimaa 2022) justifies recency weighting.
- Fitness π(x, Z, X, Y): IC vs label with correlation penalty against existing zoo (novelty).
- GSE port: replace 6 price fields with team-game features (off/def EPA per play, success rate, explosiveness, pressure rate, turnover margin, pace, rest, travel, weather); label = ATS cover or margin-vs-spread; mine ~100 formulas (max pairwise |ρ| = 0.5, min trailing IC gate); weekly re-select top-N = 8–12 by trailing-season IC/IR, re-fit logistic/OLS weights on trailing 4–8 weeks each Tuesday; Mega-Signal feeds calibrated spread/total model.

## Data sources named
CSI 300 and CSI 500 constituent daily stock panels via Qlib (public data). Train 2010-01-01–2016-12-31; validation 2017; test 2018, rolled annually → test 2018–2022 (5 sessions). Label: Ref(VWAP,−21)/Ref(VWAP,−1) − 1 (20-day forward VWAP return). Raw features: daily OHLCV + VWAP with ts_* operators (ts_corr, ts_cov, ts_min/max/std/mad/var, S_log1p, Inv, Ref). Code: https://github.com/DulyHao/AlphaForge.

## Findings (numbers and facts, not vibes)
- Table 1 IC % / RankIC % (means over 5 runs, std in parens), CSI 300: XGB 0.41/1.63; MLP 1.22(0.16)/1.75(0.28); LGBM 0.84/1.85; GP 1.29(0.44)/2.72(0.58); DSO 2.55(0.69)/3.88(1.12); RL 2.09(0.26)/2.72(0.42); Static 2.43(0.57)/3.67(0.46); Ours (AlphaForge) 4.40(0.56)/5.89(0.69).
- CSI 500: Ours 2.84(0.58)/5.57(0.58), besting all baselines (LGBM 1.75/3.81 next best; DSO 1.38/4.56).
- Pool size non-monotonic in {1,10,20,50,100}, peak at 10 — "at any given time, approximately 10 factors capture the most relevant price information."
- Dynamic beats Static; their miner beats RL/DSO/GP miners. Case study: Mega-Alpha composition changes day to day (only 5 of 10 factors carried Day 1→Day 2; factor #3 flipped weight from −0.00014 to +0.00168). 5-year simulated trading outperformed (details in paper).
- Adoption gate in ledger: on 2023–2025 test, dynamic combination must beat static zoo by ≥0.002 Brier AND top-decile weekly signals show hit-rate ≥55% ATS (n ≥ 200 games) with deflated-Sharpe > 1.5 under White's reality check. Effort ~3–4 weeks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Formulaic signal zoo: mine ~100 factor formulas with novelty/correlation gates (OTHER)
- Factor timing: weekly re-selection and re-weighting of signals on trailing IC/IR — captures "scheme-regime" momentum, e.g., blitz-heavy signals working in a given season stretch (SCHEME, COACHING, OTHER)
- Improvement direction: mine formulas on residual of closing line (market-adjusted target) rather than raw cover (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL alpha-mining pipeline: generative miner → 100-formula zoo → weekly top-N re-selection + OLS re-fit (Mega-Signal) fed into the calibrated spread/total model, gated on ≥0.002 Brier over static and the multiple-testing gate.

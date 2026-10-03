# arxiv-program/research/2026-09-21/arxiv-deep/0279-bayesian-weighted-discretetime-dynamic-models-for.md
## What it is (1-2 sentences)
A full-depth research note on Macri-Demartino, Egidi & Torelli (2025, arXiv:2508.05891v1), a Bayesian soccer-prediction paper that adaptively weights how much attack/defence strength information to borrow from the previous half-season using commensurate priors with spike-and-slab hyperpriors, across six goal-count likelihoods on Bundesliga/EPL/La Liga 2020/21-2024/25. The note's verdict is ADAPT: the adaptive period-specific shrinkage mechanism is worth porting to GSE's NFL team-strength models; the soccer goal-count likelihood itself does not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- Double Poisson rates (eq. 2): log(lambda_1,n) = beta_0 + home + beta^att_{h_n} + beta^def_{a_n}; log(lambda_2,n) = beta_0 + beta^att_{a_n} + beta^def_{h_n}.
- Owen (2011) evolution (eq. 5): beta^att_{i,tau} | beta^att_{i,tau-1}, sigma ~ N(beta^att_{i,tau-1}, 1/sigma) (constant precision).
- Weighted dynamic prior (eq. 10): beta^att_{i,tau} | beta^att_{i,tau-1}, phi_att,tau ~ N(beta^att_{i,tau-1}, 1/phi_att,tau); same for defence with phi_def,tau (period- and type-specific commensurate priors).
- Spike-and-slab hyperprior (eq. 11): phi_{k,tau} ~ N^+(100,0.1)(1-p_l) + N^+(0,5) p_l, p_l = 0.99 fixed (spike at 100 = borrow everything; slab = forget).
- Six likelihoods: double Poisson, bivariate Poisson, diagonally-inflated bivariate Poisson, negative binomial, Skellam, zero-inflated Skellam; Stan MCMC 4 chains x 2000 (1000 burn-in); zero-sum identifiability constraints per period.
- Metrics: Brier = (1/M) sum_m sum_{r=1..3} (p_{r,m} - delta_{r,m})^2; ACP = (1/M) sum_m p_{o,m}; RPS = 1/2 sum_{r=1..2} (cum p_{l,m} - cum delta_{l,m})^2; pseudo-R^2 = (prod_m p_{o,m})^{1/M}.
## Data sources named
football-data.co.uk (public); Bundesliga, EPL, La Liga, 5 seasons (2020/21-2024/25), each split into 2 half-season periods = 10 periods per league; Bundesliga 306 matches/season x5, EPL 380x5, La Liga 380x5. Prediction scenarios: entire second half, last 3 rounds, final round of 2024/25. Code: https://github.com/RoMaD-96/BayesWDFM; method in R package footBayes (>= v2.1.0); run in R 4.4.3 on i7-1260P/16GB laptop.
## Findings (numbers and facts, not vibes)
- Final round 2024/25: Bundesliga BP — Brier 0.593, ACP 0.409 (weighted dynamic best); EPL Skellam Brier 0.545, DIBP ACP 0.449; La Liga DIBP Brier 0.462, ACP 0.485.
- Last 3 rounds (Table 1): Bundesliga BP weighted Brier 0.678 vs Egidi 0.683 vs Owen 0.687, ACP 0.359; EPL DIBP Brier 0.602, ACP 0.421; La Liga DIBP Brier 0.499, ACP 0.454. Gains consistent but modest (Brier deltas ~0.002-0.02).
- Second half (Table 2): Bundesliga BP Brier 0.661, ACP 0.387; EPL BP Brier 0.579; La Liga DIBP Brier 0.583, ACP 0.425.
- Appendix: La Liga DIBP last-3 RPS 0.189, pseudo-R^2 0.421; Bundesliga BP last-3 RPS 0.216 vs Egidi 0.217.
- Computation: weighted dynamic fastest to converge — EPL zero-inflated Skellam 32% faster than Owen, 55% faster than Egidi; Bundesliga DP ~32% faster than Owen; La Liga NB 40% faster than both. R-hat ~1.00, bulk ESS 3000-5000.
- Limitations: effect sizes small (3rd decimal); no betting simulation/CLV/ROI; no covariates (shots/xG/injuries ignored); half-season period granularity coarse; p_l = 0.99 fixed without sensitivity analysis; baselines weak (Owen 2011) vs bookmaker lines; soccer-only validation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (team strength engine): the commensurate-prior spike-and-slab time-weighting is a new adaptive-shrinkage device for time-varying NFL strength models — distinct from fixed random-walk variance in GSE's existing dynamic Elo/Kalman approaches; port with weekly periods on nflverse 2014-2025, phi_att/phi_def per week, spike-and-slab in Stan/PyMC/numpyro.
- COACHING: INFERENCE — regime changes the model adapts to (transfer windows, coach changes in soccer) map to NFL QB injuries, head-coach changes, bye weeks — make team-specific p_l a function of observable regime-change signals so the model pre-discounts history before the scoreboard confirms.
- TRUST-SIGNAL: the no-ROI caveat (predictive skill != betting edge) and weak-baseline comparison are both standards GSE's backtests must clear — compare against bookmaker consensus, not just model baselines.
## Engine-actionable? (yes/no + one-line what)
yes — Port the commensurate-prior time-weighting (not the soccer likelihood) to an NFL weekly strength model and adopt if 2025 walk-forward RPS beats both GSE current + constant-variance RW baselines by >= 0.003 and improves CLV hit-rate by >= 1.0 pp; REJECT the soccer goal-count likelihood for NFL outright.

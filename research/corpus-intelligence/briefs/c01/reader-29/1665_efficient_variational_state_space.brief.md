# arxiv-program/research/2026-09-21/arxiv-deep/1665-efficient-variational-state-space.md
## What it is (1-2 sentences)
Deep read of arXiv:2210.11010 — a variational Bayes (VB) inference method for general state-space models (closed-form measurement density, exponential-family transitions) where the variational state approximation is built via efficient importance sampling (EIS) conditioned on the data, with auxiliary parameters recalibrated every 200 optimization steps. Ledger verdict: ADAPT as GSE's scalable inference engine for nonlinear/non-Gaussian state-space models (dynamic team strengths with Poisson score likelihoods).

## Key metrics/methods (formulas where given, else "not specified")
- Model: y_t ~ p(y_t|x_t) (closed-form); x_t|x_{t-1} ~ ExpFam(η(x_{t-1})).
- Variational q(x_{1:T}) built from EIS importance density g(x_{1:T}; a); auxiliary a fit by EIS regressions to log p(y|x)p(x); ELBO optimized by stochastic gradient with EIS density as proposal.
- Recalibration: re-fit a every 200 steps (tunable; sweep {50,200,500} suggested).
- Compared vs: MCMC (gold standard), Gaussian VB, Hybrid VB.
- INFERENCE: exact acceptance gate from the read — predictive log-likelihood must beat static-strength baseline by ≥ 0.01 nats/game on 2020–2024 test AND runtime ≤ 5% of MCMC per season AND median posterior-SD underestimation ≤ 20% (ratio ≥ 0.8).

## Data sources named
- Stochastic-volatility simulations, T ∈ {1,…,4000}; VB 10,000 iterations vs MCMC 10,000 burn-in + 10,000 inference.
- NYSE 15-second log price changes for WMT, KO, JPM, CAT, June 8–12 2020; 7,795 time points per series/week (5×1,559); PMCMC 1,000 particles, 15,000 burn-in + 15,000 inference vs VB 15,000 iterations.
- 8-variable TVP-VAR-SV macro model (variables not enumerated).
- GSE test: nflverse 2000–2024, dynamic bivariate-Poisson team-strength model, train 2000–2019 / test 2020–2024.

## Findings (numbers and facts, not vibes)
- SV simulation at T=4,000: Efficient VB >6× faster than MCMC, 3× faster than Hybrid VB, >2× faster than Gaussian VB, with better state-correlation/posterior-location recovery than Gaussian VB.
- Univariate WMT: PMCMC 41 hours vs Gaussian VB 145 s vs Efficient VB 87 s (~1,700× speedup over PMCMC).
- Four-stock model: 18.2 minutes runtime; posterior volatility correlations across stocks 0.579–0.712.
- Limitation: VB variance underestimation not quantified vs MCMC; no public code; no predictive validation in market application.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (INFERENCE INFRA): scalable Bayesian inference for nonlinear state-space models — dynamic team-strength/momentum tracking at VB speed with MCMC-like state correlations; relevance is engine plumbing, not behavioral intelligence.

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse.statespace.EfficientVB` for dynamic attack/defense strength models (Poisson scores) with a mandatory calibration audit of posterior SDs vs short-chain MCMC before production.

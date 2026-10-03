# docs/arxiv-program/research/2026-09-21/arxiv-deep/1670-dynamic-bayesian-quantile-synthesis.md
## What it is (1-2 sentences)
Deep read of Kobayashi, Sugasawa, Yamauchi & Han (2026), arXiv:2603.11474v1 — Dynamic Bayesian regression quantile synthesis (DRQS): combine multiple agents' quantile predictions inside the Bayesian Predictive Synthesis framework with time-varying weights, plus FDRQS which imposes a latent factor structure on the weights across many time series.
## Key metrics/methods (formulas where given, else "not specified")
- BPS setup: p(y_t|Φ_t,H_t) = ∫ α(y_t|f_t,Φ_t) ∏_j h_{tj}(f_{tj}) df_t; DRQS synthesis = asymmetric Laplace AL(τ,σ): y_t = F_{τ,t}'θ_{τ,t} + ε_{τ,t}, ε ~ AL(τ,σ_{τ,t}); θ random-walk with discount δ_τ; scale σ gamma-beta random walk (discount β_τ). Fit per τ on 0.05…0.95 grid.
- AL density: α_τ(ε|σ) = τ(1−τ)/σ · exp{−ρ_τ(ε/σ)}, ρ_τ(u) = u(τ − I(u<0)); τ-quantile of AL(τ,σ) is exactly 0 ⇒ Q_t(τ|f,θ) = F_t'θ.
- AL mixture representation: y_t|f_t,θ_t,σ_t,v_t ~ N(F_t'θ_t + κ_1 v_t, σ_t κ_2 v_t), v_t ~ Exp(σ_t), κ_1 = (1−2τ)/(τ(1−τ)), κ_2 = 2/(τ(1−τ)) → conditional DLM → Gibbs sampler with FFBS.
- FDRQS: θ_{itj} = λ_{ij}' u_{tj} (L=5 latent factors), multiplicative gamma process (MGP) prior shrinking higher-order loadings to zero; latent factors random walks.
- Evaluation: quantile-weighted CRPS_t^{(m)} = ∫_0^1 2(I{y_t < Q̂_t^{(m)}(τ)} − τ)(Q̂_t^{(m)}(τ) − y_t) ν(τ) dτ, ν ∈ {1, τ², (1−τ)²} (none/right/left tail); relative cumulative score RCS = ΣCRPS^{(m)}/ΣCRPS^{(benchmark)}; PIT uniformity.
## Data sources named
US CPI inflation-at-risk (quarterly, y_t = 400·log(Y_t/Y_{t−h})/h, 1983Q1–2019Q4; J=4 DQLM agents); global GDP growth-at-risk (N=18 countries, 1980Q4–2023Q3; agents: 3 DQLMs + FQBART, https://github.com/mpfarrho/qf-bart). No public DRQS/FDRQS code stated.
## Findings (numbers and facts, not vibes)
- US inflation (RCS vs DQLM1): DRQS smallest RCS for "none" and "right" weightings through most of 2014–2019 at h=1; at h=4, smallest for all three weightings over the second half of the window. Weights: DQLM2/DQLM4 positive most of period; DQLM1/DQLM3 ≈ 0 or negative (corrective).
- Global GDP (RTCS vs FQBART=1.0, Table 1): h=1: FDRQS 0.925, DRQS 1.030, DQLM1 1.034, DQLM2 1.077, DQLM3 1.034. h=4: FDRQS 0.757, DRQS 0.897, DQLM1 0.796, DQLM2 0.870, DQLM3 0.798. FDRQS wins at both horizons; FQBART "profoundly" underperforms at h=4.
- Country-level (h=1, RCS vs FQBART): FDRQS smallest for most — Indonesia 0.789, Korea 0.777, South Africa 0.897, US 0.999 (vs DRQS 1.156, DQLM1 1.230); only New Zealand (1.068) and Canada (0.990) near/above 1.0.
- COVID stress test: all models' CRPS deteriorated in 2020; FDRQS kept the smallest RTCS after 2020 at both horizons — the factor structure's resilience is the paper's headline finding.
- Calibration (PIT): FDRQS/DRQS/DQLM1 track the 45° line; FQBART deviates strongly at h=4 (systematically miscalibrated).
- MCMC cost: 3000 posterior draws after 1000 burn-in per window per τ — authors needed GNU Parallel; infeasible for GSE's weekly cadence as-is.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- BPS-for-quantiles with time-varying weights; nothing in corpus does BPS for quantiles with time-varying weights, and no BPS implementation exists in the GSE codebase: OTHER — production combiner design.
- Factor-on-weights structure shares "which model is hot" information across a slate; COVID-resilience analog = GSE regime changes (injuries, weather): OTHER — cross-game information sharing in the ensemble.
- Weights are auditable (which model drove each pick): TRUST-SIGNAL — explainable pick lineage.
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-QSynth: per-market DRQS-style synthesis on agent quantile curves with AL working likelihood, θ random-walk (δ≈0.8 for faster sports adaptation), L=3 cross-game factors per slate, but REPLACE MCMC with a fast sequential filter (Laplace/variational; full Gibbs monthly only); gate = walk-forward CRPS ≥4% below best single agent AND ≥2% below univariate DRQS-lite, left-tail CRPS no worse than best agent, PIT KS ≤ 0.05.

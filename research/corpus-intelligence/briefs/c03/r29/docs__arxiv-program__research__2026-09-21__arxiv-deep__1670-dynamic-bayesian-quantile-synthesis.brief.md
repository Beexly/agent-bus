# docs/arxiv-program/research/2026-09-21/arxiv-deep/1670-dynamic-bayesian-quantile-synthesis.md
## What it is (1-2 sentences)
Deep read of Kobayashi et al. (arXiv:2603.11474v1): Dynamic Bayesian Regression Quantile Synthesis (DRQS) — a Bayesian Predictive Synthesis framework that combines multiple agent models' quantile forecasts with time-varying weights, plus FDRQS, a latent-factor extension sharing weight dynamics across N time series. Verdict ADAPT — the closest thing in this wave to a production-grade GSE combiner, but the MCMC/FFBS implementation is too heavy and must be reimplemented as a fast sequential filter.
## Key metrics/methods (formulas where given, else "not specified")
- BPS: p(y_t|Φ_t,H_t) = ∫ α(y_t|f_t,Φ_t) ∏_j h_{tj}(f_{tj}) df_t; synthesis via asymmetric Laplace AL(τ,σ): y_t = F_{τ,t}'θ_{τ,t} + ε_{τ,t}, ε ~ AL(τ,σ_{τ,t}); θ_{τ,t} = θ_{τ,t−1} + w_t (random-walk weights, discount δ_τ); scale σ follows gamma-beta random walk (discount β_τ). Fit per quantile on grid 0.05…0.95.
- AL density: α_τ(ε|σ) = τ(1−τ)/σ · exp{−ρ_τ(ε/σ)}, ρ_τ(u) = u(τ − I(u<0)); mixture representation enables Gibbs with FFBS for states.
- FDRQS factor structure: θ_{itj} = λ_{ij}'u_{tj}, L=5 latent factors with multiplicative gamma process prior: λ_{iℓj} ~ N(0, φ^{−1}ω^{−1}), ω_{ℓj} = ∏_{h≤ℓ} δ_{hj}, δ_{1j} ~ Ga(2.5,1), δ_{ℓj} ~ Ga(3.5,1).
- Evaluation: quantile-weighted CRPS_t^{(m)} = ∫_0^1 2(I{y_t < Q̂_t(τ)} − τ)(Q̂_t(τ) − y_t) ν(τ) dτ, ν ∈ {1, τ², (1−τ)²}; relative cumulative score RCS < 1 = beats benchmark; PIT uniformity (10,000 draws).
## Data sources named
- US inflation-at-risk: quarterly CPI inflation 1983Q1–2019Q4; J=4 DQLM agent models; evaluated 2014Q2–2019Q4; 19 quantiles; public macro series (FRED-equivalent).
- Global growth-at-risk: N=18 countries quarterly real GDP growth 1980Q4–2023Q3; agents = 3 DQLMs + FQBART; evaluated 2010Q1–2023Q3.
- MCMC: 3000 draws after 1000 burn-in per window per τ; δ=β=0.9 (inflation), 0.85 (GDP).
## Findings (numbers and facts, not vibes)
- US inflation (RCS vs DQLM1): DRQS smallest RCS for "none" and "right" weightings most of 2014–2019 at h=1; at h=4, DRQS smallest for all three weightings over the second half of the evaluation window.
- Global GDP (RTCS vs FQBART=1.0): h=1 — FDRQS 0.925, DRQS 1.030, DQLM1 1.034; h=4 — FDRQS 0.757, DRQS 0.897, DQLM1 0.796, DQLM2 0.870, DQLM3 0.798. FDRQS wins outright at both horizons.
- Country-level h=1 (RCS vs FQBART): e.g., Indonesia 0.789, Korea 0.777, South Africa 0.897, US 0.999 (vs DRQS 1.156, DQLM1 1.230); only New Zealand (1.068) and Canada (0.990) near/above 1.0.
- COVID stress test: all models' CRPS deteriorated in 2020; FDRQS kept the smallest RTCS after 2020 at both horizons while univariate DRQS and DQLMs "suddenly incurred larger RCS."
- Calibration (PIT): FDRQS/DRQS/DQLM1 empirical PIT CDFs track the 45° line at both horizons; FQBART deviates strongly at h=4.
- Weight dynamics: US τ=0.1 — DQLM2 positive throughout, DQLM3 credibly negative (hedge); posterior correlations among agents emerge only under extreme stress (2020Q3).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Factor structure on combiner weights (FDRQS) beats univariate synthesis and all agents: 0.757 vs 0.897 RTCS at h=4 (OTHER)
- Cross-series weight sharing is most resilient under regime shock (COVID 2020) — analog of GSE regime changes (injuries, weather) (OTHER)
- Agent weights adapt with credible hedge/negative weights (DQLM3 credibly negative) — corrective agents add value (OTHER)
- Numeric gate proposed: FDRQS-lite (L=3 factors, δ=0.8, 9-quantile grid) must beat best single agent by ≥4% cumulative CRPS and univariate DRQS-lite by ≥2%, PIT KS ≤ 0.05, on walk-forward 2023–2024 NFL spreads (OTHER)
- Proposed improvement: context-dependent synthesis scale σ_{τ,t} (injury flag, weather, rest) instead of pure time-varying σ (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-QSynth: DRQS-style quantile synthesis of GSE model + market-implied agent quantile curves per market, L=3 cross-game factor structure sharing "which model is hot" across a slate, reimplemented as a Laplace/variational sequential filter (not MCMC) for weekly cadence, with posterior weight paths logged for pick audit.

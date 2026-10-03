# docs/arxiv-program/research/2026-09-21/arxiv-deep/1307-bayesian-weighted-discrete-time-dynamic.md
## What it is (1-2 sentences)
Ledger read of Macrì-Demartino, Egidi, Torelli (2025), "Bayesian weighted discrete-time dynamic models for association football prediction" (arXiv:2508.05891v1): a Bayesian dynamic model for goal-based match prediction where team attack/defense abilities evolve with period-specific adaptive borrowing from the past via commensurate priors with spike-and-slab shrinkage. Verdict: ADAPT — directly portable to GSE's NFL dynamic team-rating models. Preprint, not peer-reviewed.
## Key metrics/methods (formulas where given, else "not specified")
Commensurate prior: θ | θ₀, φ ~ N(θ₀, 1/φ). Weighted dynamic prior: βᵢ,att,τ | βᵢ,att,τ−1 ~ N(βᵢ,att,τ−1, 1/φ_att,τ), separately for attack/defense, per-period φ. Spike-and-slab hyperpriors: φ_{k,τ} ~ N+(μ_s, ψ_s)(1−p_l) + N+(μ_l, ψ_l)p_l with spike N+(100, 0.1), slab N+(0, 5), p_l = 0.99. Scoring rates: log λ₁ = β₀ + home + β_att(h) + β_def(a). Baselines: fixed evolution precision σ ~ Cauchy+(0,5). Fit: Stan MCMC, 4 chains × 2000 iters, 1000 burn-in; zero-sum identifiability constraints per period. Metrics: Brier = (1/M)ΣΣ(p_{r,m} − δ_{r,m})²; ACP; RPS; pseudo-R². Method implemented in footBayes R package ≥2.1.0; code at github.com/RoMaD-96/BayesWDFM.
## Data sources named
Five seasons 2020/21–2024/25 of Bundesliga, EPL, La Liga from football-data.co.uk. Each season split into two half-season periods → 10 time periods; forecasts for 2024/25 second half, last 3 rounds, last round. Six goal models: BP, DIBP, DP, NB, Skellam, ZISM.
## Findings (numbers and facts, not vibes)
- Weighted dynamic consistently best across three leagues × three scenarios. Final round: Bundesliga BP Brier 0.593, ACP 0.409; EPL Skellam Brier 0.545, DIBP ACP 0.449; La Liga DIBP Brier 0.462, ACP 0.485.
- Gains small but consistent (e.g., La Liga DIBP Brier 0.499 vs 0.518/0.521 for baselines).
- Computation 32–55% faster than baselines (EPL ZISM 32% faster than Owen, 55% faster than Egidi et al.); R̂ ≈ 1.00, ESS in the thousands.
- In-file NFL port gate: must beat GSE's current static-decay ratings on 2024 Brier by ≥0.005 weekly (weeks 5–18) with genuine φ adaptivity (slab regime around trade deadline).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: adaptive time-varying team-rating machinery (attack/defense strength evolution with per-week commensurate precision); coaching-change / mid-season regime shifts would show up as slab-regime φ weeks — touches COACHING indirectly but tagged OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — port to NFL: weekly periods, team offensive/defensive strength parameters on points/EPA with separate φ_att/φ_def per week in Stan/PyMC, tuned on 2022–2023, gated on beating the current rating model by ≥0.005 Brier on 2024 weeks 5–18 (~1–2 engineer-weeks).

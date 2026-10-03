# docs/arxiv-program/research/2026-09-21/arxiv-deep/0438-gibbs-sampling-for-bayesian-generalized-poisson.md
## What it is (1-2 sentences)
Deep-read of Sakaori & Abe (2026, arXiv:2609.12468v1) — a pure statistics-methodology paper (stat.ME) extending Generalized Poisson Matrix Factorization to a fully Bayesian framework with closed-form Gibbs updates, applied descriptively to soccer pressing counts. Ledger verdict: REJECT for GSE adoption (no prediction mechanism, no sports-forecasting result).

## Key metrics/methods (formulas where given, else "not specified")
- Hierarchical Bayesian GPMF: latent n_ijk | w_ik,h_jk,ξ_i ∼ Poisson((1−ξ_i)w_ik h_jk); y_ij | n_ij,ξ_i ∼ Borel–Tanner(n_ij, ξ_i) (compound-Poisson representation of GP via Finner et al. 2015).
- GP pmf: p(y) = η(η+ξy)^{y−1} exp(−(η+ξy))/y!, restricted to 0<ξ<1 (overdispersion only). Mean/variance: E[y_ij]=s_ij, V = s_ij(1+θ_i)² (θ-param) or s_ij/(1−ξ_i)² (ξ-param).
- Priors: w_ik, h_jk ∼ Gamma; ξ_i ∼ EBeta(α_ξ,β_ξ,γ_ξ) (exponentially tilted beta = Esscher transform of beta); EBeta pdf: p(ξ) = ξ^{α−1}(1−ξ)^{β−1}exp(−γξ) / [B(α,β)·₁F₁(α;α+β;−γ)].
- Gibbs updates (closed form): W,H Gamma; ξ EBeta (Prop 4); n_ij −1 ∼ Binomial(y_ij−1, (1−ξ_i)s_ij/((1−ξ_i)s_ij + ξ_i y_ij)) (Prop 5); factor allocation multinomial via Poisson splitting (Prop 6).
- Novel contribution: infinite-mixture representation of EBeta as mixture of Beta(α, β+m) (γ≥0) or Beta(α+m, β) (γ<0) with recursive weights w_{m+1} = (β+m)γ/((α+β+m)(m+1))·w_m, truncated at M=200 (machine-precision accuracy even at γ=100) — cheaper than SIR.
- Gibbs order: n_ij → (n_ij1..K) → W → H → ξ. Assumed: entries conditionally independent given factors; K known (no factor selection — future work); ξ_i row-specific (team-level dispersion).
- Descriptive, not predictive: no held-out forecasting of future counts.

## Data sources named
Simulations: 50×100 count matrices, K=5 latent factors, W₀,H₀ ∼ Gamma(1.5,1.5), y_ij ∼ GP((1−ξ₀ᵢ)s₀ᵢⱼ, ξ₀ᵢ); ξ₀ ∈ {1/5, 1/3, 1/2, 3/5, 2/3} plus a heterogeneous row-varying setting; 100 replications. Real data: StatsBomb open event data, 2015–16 English Premier League; 20×38 matrix of gegenpressing counts (Pressure within 5s of losing possession) per team per matchweek. No code link stated. Speculative NFL mapping named nflverse 2020–2025 teams × play-type × down buckets (not run).

## Findings (numbers and facts, not vibes)
- Bayesian GPMF beats GPMF-MLE on MSE in all simulation settings; gains grow with dispersion (e.g., ξ=2/3: W-MSE 84.1 vs 251 random-init / 335 NNDSVD; S-MSE 2.66 vs 7.61).
- 95% credible-interval coverage: S ≈ 0.954–0.966; ξ ≈ 0.934–0.953 — near nominal.
- Finite mixture (M=200) matches SIR(L=1000) accuracy with less compute (4706s vs 6202s on M5 MacBook); better ξ coverage (0.948 vs 0.941).
- EPL application (qualitative, single season): Factor 1 = league-wide pressing baseline (stable over season); Factors 2–3 = team-specific tactical signatures (peaks in congested fixture periods, matchweeks 20/25/28/29); ξ largest for Watford/Swansea/Chelsea/Spurs (volatile pressing), smallest for Leicester (stable).
- No predictive accuracy numbers for any sports outcome. No out-of-sample prediction test on the soccer data; no comparison to any sports-forecasting baseline.
- Paper published 2026-09-11 — six days before this ledger; zero track record of applied use. K fixed and known in simulations; no factor-selection on real data (K choice unexplained for the EPL matrix). Simulations are congenial (data generated from the fitted model family).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bayesian NMF for overdispersed counts; GP pmf; EBeta infinite-mixture trick; Gibbs update structure — OTHER (pure statistical methodology; no football-behavioral content).
- EPL pressing-factor signatures (Factors 2–3 as team tactical signatures; Leicester stable vs. Watford volatile) — OTHER (soccer-descriptive; INFERENCE: conceptually adjacent to coaching-style clustering but untested as prediction).
- Speculative note only: IF GSE ever wants uncertainty-quantified factorization of count matrices (teams × play-type call counts, defense × route-type target counts) — OTHER (speculative).

## Engine-actionable? (yes/no + one-line what)
No — reject: no prediction mechanism, no sports-forecasting result, and no research-map lane that needs it; revisit only if a concrete GSE use case for uncertainty-quantified count-matrix factorization emerges AND a pilot beats fixed-effects baselines on held-out log-likelihood.

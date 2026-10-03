# docs/arxiv-program/research/2026-09-21/arxiv-deep/0438-gibbs-sampling-for-bayesian-generalized-poisson.md
## What it is (1-2 sentences)
Deep-read ledger of Sakaori & Abe (2026) "Gibbs Sampling for Bayesian Generalized Poisson Matrix Factorization" (arXiv:2609.12468v1): a closed-form Gibbs sampler for Bayesian NMF of overdispersed count data, applied descriptively to EPL pressing counts. Verdict: REJECT — pure statistical-methodology with no prediction mechanism and no demonstrated sports-forecasting result.
## Key metrics/methods (formulas where given, else "not specified")
- GP pmf: p(y) = η(η+ξy)^{y−1} exp(−(η+ξy))/y!; restricted to 0<ξ<1 (overdispersion only).
- GPMF mean/variance: E[y_ij]=s_ij, V = s_ij(1+θ_i)² (θ-param) or s_ij/(1−ξ_i)² (ξ-param).
- Hierarchical Bayesian GPMF: latent n_ijk | w_ik,h_jk,ξ_i ∼ Poisson((1−ξ_i)w_ik h_jk); y_ij | n_ij,ξ_i ∼ Borel–Tanner(n_ij, ξ_i); W,H ∼ Gamma; ξ_i ∼ EBeta(α_ξ,β_ξ,γ_ξ).
- Closed-form Gibbs updates: W,H Gamma; ξ EBeta; n_ij−1 ∼ Binomial(y_ij−1, (1−ξ_i)s_ij/((1−ξ_i)s_ij + ξ_i y_ij)); factor allocation multinomial via Poisson splitting.
- Novel trick: infinite-mixture representation of EBeta as mixture of Beta(α, β+m) (γ≥0) or Beta(α+m, β) (γ<0) with recursive weights, truncated at M=200 — cheaper than SIR.
## Data sources named
Simulations: 50×100 count matrices, K=5 latent factors, W₀,H₀ ∼ Gamma(1.5,1.5), 100 replications, ξ₀ ∈ {1/5, 1/3, 1/2, 3/5, 2/3} + heterogeneous setting. Real data: StatsBomb open event data, 2015–16 EPL; 20×38 matrix of gegenpressing counts (Pressure within 5s of losing possession) per team per matchweek. No code link stated.
## Findings (numbers and facts, not vibes)
- Bayesian GPMF beats GPMF-MLE on MSE in all simulation settings; gains grow with dispersion (e.g., ξ=2/3: W-MSE 84.1 vs 251 random-init / 335 NNDSVD; S-MSE 2.66 vs 7.61).
- 95% credible-interval coverage: S ≈ 0.954–0.966; ξ ≈ 0.934–0.953 — near nominal.
- Finite mixture (M=200) matches SIR(L=1000) accuracy with less compute (4706s vs 6202s on M5 MacBook); better ξ coverage (0.948 vs 0.941).
- EPL descriptive application: Factor 1 = league-wide pressing baseline (stable over season); Factors 2–3 = team-specific tactical signatures (peaks in congested fixture periods, matchweeks 20/25/28/29); ξ largest for Watford/Swansea/Chelsea/Spurs (volatile pressing), smallest for Leicester (stable).
- Zero predictive accuracy numbers for any sports outcome — the soccer application is retrospective description, not forecasting.
- Limitations flagged: K fixed/known in simulations with no factor selection on real data; simulations are congenial (generated from the fitted family); 5,000–10,000 Gibbs iterations on a 20×38 matrix with scaling untested; ξ_i conflates team volatility with misspecification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Speculative use only: IF GSE ever wants latent-factor structure on overdispersed team×situation count matrices (play-type call counts, tendency matrices) with uncertainty — OTHER.
- No QB behavior, coaching, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
No — no prediction mechanism demonstrated; revisit only if a concrete GSE use case for uncertainty-quantified factorization of count matrices emerges AND a pilot beats Poisson NMF / fixed effects on held-out log-likelihood with next-season predictive power.

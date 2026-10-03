# docs/arxiv-program/research/2026-09-21/arxiv-deep/0516-approximate-nonparametric-maximum-likelihood-inference-for.md

## What it is (1-2 sentences)
A computational statistics paper (Feng & Dicker, arXiv:1606.02011v3) making nonparametric maximum likelihood estimation (Kiefer–Wolfowitz) for multivariate mixture models practical via a finite-grid convex approximation on a simplex. Verdict in file: ADAPT — the machinery transfers directly to GSE's empirical-Bayes shrinkage of noisy per-player/per-team latent parameters, replacing parametric hierarchical assumptions.

## Key metrics/methods (formulas where given, else "not specified")
- Eq. 2 (Kiefer–Wolfowitz): Ĝ = argmin_{G∈𝔾_𝒯} ℓ(G), ℓ(G) = −(1/p)Σ_j log{∫_𝒯 f_0(X_j|θ)dG(θ)}.
- Eq. 4/6 (approximation): Ĝ_Λ = argmin_{G∈𝔾_Λ} ℓ(G) ⇔ min_{w∈Δ^{q−1}} −(1/p)Σ_{j=1}^p log{Σ_{k=1}^q f_0(X_j|t_k) w_k} — convex simplex problem.
- Eq. 8 (support condition): f_0(X_j|θ) = h{(θ̂_j−θ)ᵀΣ^{−1}(θ̂_j−θ)} u(X_j), θ̂_j = argmax_θ f_0(X_j|θ).
- Eq. 10 (posterior mean): π̂_j = ∫π_j f_0(A_j,H_j|λ_j,π_j)dĜ_Λ / ∫f_0(A_j,H_j|λ_j,π_j)dĜ_Λ.
- Proposition 1: under elliptical unimodal likelihood, NPMLE support ⊂ conv(θ̂_1..θ̂_p) — so a regular grid inside the convex hull of per-unit MLEs suffices.
- Baseball model: A_j|(λ_j,π_j) ~ Poisson(λ_j), H_j|(A_j,λ_j,π_j) ~ Binomial(A_j,π_j), (λ_j,π_j) ~ G_0 (bivariate), grid 30².
- Algorithms: EM (best simplicity/performance), interior point via Rmosek/REBayes (slightly better, faster), Frank–Wolfe (fastest but much worse); results insensitive to grid density (30² vs 50² vs 100²).
- CGM models: Eq. 12: FS_j(t) = μ_j + β_j ISIG_j(t) + σ_j ε_j(t); Eq. 13 (state space): FS_j(t_i) = α_j(t_i)ISIG_j(t_i) + σ_j ε_j(t_{i−1}), α_j(t_i) = α_j(t_{i−1}) + τ_j δ_j(t_{i−1}).

## Data sources named
- Baseball: 2005 MLB season, 929 players → 567 with >10 first-half AB (train), 499 with >10 second-half AB (test); (A_j, H_j) = (at-bats, hits).
- Microarray (MAQC-II): breast cancer (130 train / 100 test, 22,283 probesets), myeloma (340 train / 214 test, 54,675 probesets).
- Diabetes CGM: 137 type-1 patients, ~6 months each (ISIG sensor current + fingerstick FS ground truth).
- Gaussian location-scale simulations: p=1000 units, n=16 replicates, 100 independent datasets.

## Findings (numbers and facts, not vibes)
- Simulation TSE: bivariate NPMLE 130.4 / 53.9 vs univariate NPMLE 170.7 / 285.4 vs James–Stein 859.7 / 935.2 vs fixed MLE 997.0 / 1059.3 — bivariate NPMLE dominates; its advantage is largest when (μ,σ) are correlated (dist. 2: 53.9 vs 285.4). [OTHER]
- Baseball TSE relative to fixed-MLE=1.0: NPMLE 0.29 (all) / 0.26 (pitchers) / 0.14 (non-pitchers) — best or tied-best on all splits; James–Stein 0.54/0.35/0.17; grand mean 0.85/0.38/0.13. Estimated mixture is bimodal (pitcher/non-pitcher modes discovered, not imposed). [SCHEME, OTHER]
- Microarray test errors: 2d-NPMLE 15/19/30/34 vs 1d-NPMLE 36/40/55/76 vs logistic lasso 18/11/27/32 — 2d crushes 1d, competitive with the best. [OTHER]
- CGM MSE relative to proprietary estimator=1.0: linear model NPMLE 1.51 vs combined 1.56 vs individual 1.54; Kalman NPMLE 1.03 vs 1.05 vs 1.07 — NPMLE wins within each model class, still loses to the proprietary estimator (extra undisclosed data). [OTHER]
- EM vs interior point nearly identical TSE (e.g., 130.5 vs 130.7); interior point slightly better Δlog-lik (+6..11 ×10⁻⁴) and faster (8s vs 9s at 30²; 80s vs 136s at 100²); Frank–Wolfe far worse (TSE 147.3). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Multivariate EB shrinkage beats univariate when mean and noise are correlated — exactly the sports case (high-usage players have noisier per-game estimates), directly applicable to shrinking per-QB CPOE / EPA-per-dropback / yards-per-route from small samples. (QB-BEHAVIOR, SCHEME, OTHER)
- The estimated population prior discovers latent subgroups (pitcher/non-pitcher bimodality) without being told — a trust-worthy property for player archetype discovery: the data reveals groups, no manual labels needed. (TRUST-SIGNAL, SCHEME, OTHER)
- Algorithm guidance for implementation: EM is the simplicity/performance choice; grid 30^d is sufficient (insensitive to density); cost explodes beyond d=3. (OTHER)

## Engine-actionable? (yes/no + one-line what)
yes — Implement ~1-week Python (cvxpy) bivariate-NPMLE shrinkage layer for per-QB/per-team efficiency params on nflverse first-half→second-half protocol; accept if relative MSE ≤ 0.95 of parametric hierarchical Bayes on ≥2 of 3 target families.

# vendor/Sports/docs/arxiv-program/research/2026-09-21/arxiv-deep/1819-uncertainty-quantification-in-the-bradley-terry-luce.md

## What it is (1-2 sentences)
Theory paper (Gao, Shen, Zhang; arXiv:2110.03874) giving sharp non-asymptotic expansions for the Bradley-Terry-Luce MLE and spectral estimator in the sparsest identifiable comparison-graph regime, yielding per-team standard errors, finite-dimensional CLTs, and rank confidence intervals with data-driven lengths. It also proves the MLE attains the exact locally minimax optimal ℓ₂ constant while the spectral estimator does not.

## Key metrics/methods (formulas where given, else "not specified")
- Win probability: P(y_ijℓ = 1) = ψ(θ*_i − θ*_j), ψ(t) = e^t/(1+e^t).
- BTL MLE: θ̂ ∈ argmin_{θ: 1_nᵀθ=0} ℓ_n(θ), ℓ_n(θ) = Σ_{i<j} A_ij [ȳ_ij log(1/ψ(θ_i−θ_j)) + ȳ_ji log(1/ψ(θ_j−θ_i))].
- Spectral (rank centrality) estimator: stationary distribution π̂ of Markov chain P_ij = A_ij ȳ_ji/d (d = 2np); θ̃_i = log π̂_i − (1/n)Σ_k log π̂_k.
- Per-team precision: ρ_i(θ) = √(L·Σ_{j≠i} A_ij ψ′(θ_i−θ_j)); data-driven SE_i ≈ 1/ρ_i(θ̂), ψ′(t) = ψ(t)(1−ψ(t)).
- MLE expansion (Theorem 2.2): θ̂_i − θ*_i = (1+ε_{1,i}) b_i/d_i + ε_{2,i}, b_i = Σ_{j≠i} A_ij(ȳ_ij − ψ(θ*_i−θ*_j)), d_i = Σ_{j≠i} A_ij ψ′(θ*_i−θ*_j).
- Exact ℓ₂ constants: MLE ‖θ̂−θ*‖² = (1+o(1))/(pL)·Σ_i(Σ_{k≠i} ψ′(θ*_i−θ*_k))^{−1} (Prop. 4.4); spectral has strictly larger constant (Prop. 4.5); MLE matches the van Trees local minimax lower bound (Theorem 4.7).
- Rank CI (Prop. 4.3): C_1 = [θ̂_1 − ρ_1(θ̂)z_{1−α/2}, θ̂_1 + ρ_1(θ̂)z_{1−α/2}]; τ_i = (1+c_0)√(2 log n·ρ_i^{−2}(θ̂)) for i ≥ 2; rank interval [n_1+1, n−n_2] covers r(1) with asymptotic prob ≥ 1−α.
- Operating regime: κ = O(1) bounded dynamic range, np ≫ (log n)^α (α ≥ 1), Erdős–Rényi comparison graph.

## Data sources named
No real dataset. All empirical content is Monte Carlo simulation: Erdős–Rényi G(n, p) comparison graphs, θ*_i i.i.d. Unif([0,2]) (κ=2), L=1 comparison per edge, outcomes y_ij1 ~ Bernoulli(ψ(θ*_i−θ*_j)). CLT validation: n ∈ {100, 200, 500, 1000, 2000}, p = (log n)^3/n, 1000 replications/n. Risk validation: n ∈ {1000,…,5000}, p = (log n)^{3.5}/n. Sports appears only as a motivating example in §4.2 ("confidence interval for the rank of her team of interest" after a tournament).

## Findings (numbers and facts, not vibes)
- QQ-plots of CLT-normalized MLE and spectral first coordinates align "very well with the diagonal line" starting at n = 500 (Fig. 1). [OTHER]
- Empirical vs theoretical squared ℓ₂ risk curves agree closely; the MLE curve lies below the spectral estimator's — MLE achieves smaller risk with an explicitly quantified constant gap (Fig. 2, Props. 4.4 vs 4.5). [TRUST-SIGNAL]
- Key structural property: ρ_i^{−2} is smaller for teams with more comparisons, so rank-CI lengths are data-driven — better-connected teams get tighter intervals. [TRUST-SIGNAL]
- Finite-dimensional CLT: k fixed coordinates of θ̂, normalized by ρ_i(θ̄), converge jointly to N_k(0, I_k) (Prop. 4.1; spectral analog Prop. 4.2). [OTHER]
- Coverage of the rank CI is a theorem (Prop. 4.3), not an empirical measurement; rank-CI finite-sample coverage for n = 32 NFL teams is untested in the paper (simulations start at n = 100). [TRUST-SIGNAL]
- Limitations named in the file: static θ* (no time dynamics/injuries/QB changes); NFL schedule is not Erdős–Rényi; no margin of victory (binary outcomes only); no home-field advantage, ties, or covariates. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-team SEs SE_i = 1/ρ_i(θ̂) give principled uncertainty bars for GSE's team-strength ratings → TRUST-SIGNAL: calibration/abstention lane (abstain when the 90% win-prob CI covers 0.5).
- MLE is asymptotically locally minimax optimal for BT ratings while spectral (rank centrality) is provably suboptimal → OTHER: if GSE ever fits BT-style ratings, fit MLE (convex LBFGS, trivial at n=32), not the spectral shortcut.
- Delta-method win-prob CI: SE_p̂ = ψ′(θ̂_i−θ̂_j)·√(ρ_i^{−2}+ρ_j^{−2}) → TRUST-SIGNAL: publishable win-probability intervals and rank CIs for power rankings.

## Engine-actionable? (yes/no + one-line what)
yes — Implement the ρ_i(θ̂) per-team SE machinery as post-processing on GSE's existing BT/Elo-style ratings to emit win-probability CIs and rank CIs plus an abstention rule ("skip picks whose 90% CI covers 0.5"), gated on empirical 2024–2025 coverage landing in [87%, 93%].

# arxiv-program/research/2026-09-21/arxiv-deep/0470-linear-regression-under-model-uncertainty.md
## What it is (1-2 sentences)
Under sublinear-expectation theory with simultaneous mean-shift (η) and variance-regime (G-normal) uncertainty, infinite-family min-max/min-min optima collapse to two classical normal LSEs; the practical estimator scans moving blocks, fits OLS per block, takes coefficients from the min-MSE block and min/max block-mean/variance as uncertainty bounds — strongly consistent, and robust to contamination — with the dossier verdict ADAPT the estimator mechanics.
## Key metrics/methods (formulas where given, else "not specified")
- Model: Y = βᵀX + η + ε (1.1); min-max β̄*(φ)=argmin_β E[φ(Y−βᵀX−η)] (1.2), min-min β̱* (1.3); under square loss β̄*=β̱*=β (Cor. 3.1).
- Moving-block estimator: overlapping blocks B_l of length n; per-block OLS → (β̂_l, μ̂_l), block MSE σ̂_l²; k̂=argmin_l σ̂_l²; β̂=β̂_{k̂} (3.9); σ̱̂²=σ̂_{k̂}² (3.10); μ̱̂=min_l μ̃_l, μ̂̄=max_l μ̃_l (3.8); upper variance σ̂̄²=max over centralized small-window blocks (3.11, n1 ∈ {10,20,40} recommended).
- Theorem 3.2: strong consistency as K∧n→∞ under block DGP y_i=βx_i+η_j+ε_i (3.7) with n0 ≤ n; G-normal via nonlinear PDE ∂_t u − G(∂²_{xx}u)=0, G(a)=½(σ̄²a⁺−σ̲²a⁻).
## Data sources named
Monte Carlo DGP (3.7): T=n0·K, K groups, β=1, η_j∼U[0,5], σ_j∼U[0.1,1], (n0,n,n1)=(200,150,20), T∈{400,800,1600,3200}, 500 replications; contaminated-Gaussian benchmark (6 scenarios, ε∼N(0,1)/N(0,100), T=200, 500 reps); heteroscedastic sim K=10; real: S&P 500 daily closes, Jan 3 2000–Jul 17 2020, AR(1).
## Findings (numbers and facts, not vibes)
- Simulation (β=1, T=400): R-LSE β̂ 0.9729 (se 0.5151) vs LSE 1.0299 (se 1.4121); recovered (μ̱̂,μ̂̄) (1.7479,3.2705) vs true (1.7405,3.2692); (σ̱̂,σ̂̄) (0.3742,0.7129) vs true (0.3991,0.7055).
- Contamination MSE of β̂ (T=200): scenario 1 — MM 0.0205, LSE 0.2075, R-LSE 0.0228; scenario 6 (50% contamination) — MM 1.6230 (breakdown), LSE 0.7033, R-LSE 0.1667.
- Heteroscedastic (T=2000, true min/max vol 0.1304/0.7165): R-LSE β̂ 1.0013, vols (0.1267,0.7466); LSE β̂ 1.0000 but single vol 0.4854.
- S&P 500 AR(1): R-LSE F significant at 1% in 18/20 rolling years vs LSE in 1/20 (e.g., 201607–201707: R-LSE R² 0.3269/F 59.98 vs LSE R² 0.0311/F 3.97, insignificant).
- Caveats per file: block length must satisfy n<n0 with unknown n0; max-MSE σ̂̄² noisy in small samples; NFL team-season T (~17) underpowered — pool across teams/plays.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: regime-robust regression diagnostic for pooled NFL trend coefficients and regime-aware uncertainty bounds for bet sizing.
## Engine-actionable? (yes/no + one-line what)
yes — Implement moving-block Robust-LSE on pooled game-level regressions (margin ~ spread) plus a residual-stream volatility-regime dashboard feeding bet sizing; gate: ≥20% reduction in mean |β̂−1| vs OLS at K=4, T≈1000 injected games.

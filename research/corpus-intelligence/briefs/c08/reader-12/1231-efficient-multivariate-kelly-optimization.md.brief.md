# docs/arxiv-program/research/2026-09-21/arxiv-deep/1231-efficient-multivariate-kelly-optimization.md
## What it is (1-2 sentences)
Deep read of Tepelyan & Lam (Bloomberg, arXiv:2604.24723v2, Apr 2026) on making multivariate Kelly tractable: the Frullani/Laplace factorization reduces the Kelly objective over N simultaneous independent binary bets from O(2^N) to O(TN), optimized with Newton-CG, plus fitted sigmoidal shortfall scaling laws. Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Frullani identity: log x = ∫₀^∞ (e^{−t} − e^{−tx})/t dt.
- Factorized MGF: Q(t) = e^{−tw₀}·Π_i[(1−p_i) + p_i·e^{−tc_i}]; numerics: tail subtraction, double-exponential quadrature, stable gradients + Hessian-vector products, Newton-CG optimizer.
- Greedy/stepwise lower bounds and default-free-asset upper bounds on the optimum.
- Shortfall law: y ≈ (1 + Q·e^{−B·Logit(x)})^{−1/v}.
- Assumptions: binary bets independent (binding limitation); known p_i; prediction-market-style binary payoffs.
## Data sources named
Synthetic prediction-market data only: prices q ∼ U(0.1, 0.9); 4 disagreement regimes × 3 variance levels; 1,000 instances per combination; validation at N=10, scaling study N=20…200.
## Findings (numbers and facts, not vibes)
- Solver discrepancies negligible: max relative objective error 3.92×10⁻⁷ (Table 1); greedy-vs-stepwise differences near numerical precision (Table 2).
- Misspecification study: mean MSE 4.53×10⁻⁴, median MAE 3.95×10⁻³, 1 − median R² = 1.20×10⁻⁴.
- Test model overall: MSE 3.23×10⁻³, median MAE 1.34×10⁻², median R² 9.79×10⁻¹.
- Limitations named in-file: independence assumption collapses with correlated outcomes (same-game parlays, correlated props); binary payoffs only; synthetic data only; sigmoid law fitted not derived.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: full-slate stake allocation — exact multivariate Kelly per slate via O(TN) evaluation instead of per-pick fractional Kelly; correlation guard required (pre-cluster correlated picks, conservative bound within clusters).
## Engine-actionable? (yes/no + one-line what)
yes — build a slate Kelly optimizer (per-pick p_i/odds → factorized O(TN) objective → Newton-CG stakes, scaled by the fractional overlay) with a same-game correlation guard, gated on ≤10⁻⁶ error vs brute force at N=10.

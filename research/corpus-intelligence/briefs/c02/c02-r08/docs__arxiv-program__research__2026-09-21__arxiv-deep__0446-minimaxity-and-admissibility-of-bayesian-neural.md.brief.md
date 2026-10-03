# docs/arxiv-program/research/2026-09-21/arxiv-deep/0446-minimaxity-and-admissibility-of-bayesian-neural.md
## What it is (1-2 sentences)
Pure decision-theory: in the normal location model Y = θ + Z under quadratic loss, a fixed-scale BNN Bayes estimator is provably NOT minimax (thin prior tails over-shrink large signals), while replacing the fixed scale with a heavy-tailed BetaPrime(1, p/2−2) hyperprior on the effective output variance yields a minimax and admissible radial shrinkage rule. Theory plus Monte Carlo risk-curve validation (no real-world data); the result also extends to Bayesian predictive densities under KL loss.

## Key metrics/methods (formulas where given, else "not specified")
- Setting: Y = θ + Z, Z ~ N_p(0, I_p); quadratic loss R(θ,δ) = E_θ‖δ − θ‖². Minimax benchmark = MLE risk p; requires p ≥ 5 for the hyperprior construction (b = p/2 − 2 > 0).
- Fixed-scale Bayes rule: δ_BNN,fixed(y) = E[V/(1+V) | ‖Y‖² = ‖y‖²]·y = (1 − ψ(‖y‖²))y, ψ(u) = E[1/(1+V) | U = u].
- Failure mechanism: prior predictive tail bound m(y) ≤ K_5 exp{−κ‖y‖^{2/d}} (exponent 2/d depends on depth); Stein excess-risk integrand B(u) = ψ(u)²u − 2pψ(u) − 4uψ′(u); concentration gives u·ψ(u) → ∞ as u → ∞, so sup_θ R(θ,δ) > p — not minimax.
- Hyperprior: W ~ BetaPrime(1, b), h(w) = b(1+w)^{−(b+1)}, b = p/2 − 2 (INFERENCE: the §3 prose says "BetaPrime(1, p/2−1)" but Theorem 3.1 and the whole S3.1 proof use b = p/2 − 2 — operative value is p/2 − 2; prose reads as a typo).
- Hyperprior rule: δ_BNN,hyper(Y) = E[W/(1+W) | Y]Y = (1 − E[(1+W)^{−1} | Y])Y; minimax via superharmonicity of √m (Fourdrinier–Strawderman–Wells); admissible since prior tail exponent a = 1 − p/2 < −1 for p > 4.
- The rule is a one-dimensional radial shrinkage factor — computable by quadrature/Monte Carlo over W; network layer scales never need fine-tuning (absorbed by the hyperprior).

## Data sources named
None — pure theory plus Monte Carlo simulation of the normal location model in R: dimensions p = 5, 50, 100; signal grid ‖θ‖ from 0 to 500; N_mc = 50,000 samples per grid point × K_dir = 10 directions; mixing distribution from M_v = 200,000 draws of V; network d = 3, widths 20/20, scales 1; dropout keep q = 0.8. Code: GitHub repo named "Risk_simulations" (no clickable URL in the text).

## Findings (numbers and facts, not vibes)
- δ_BNN,hyper risk "tracks the minimax boundary almost exactly": p = 5 starts well below 5 near the origin, rises to 5 (up to Monte Carlo error), stays essentially flat; at p = 50 and 100 it approaches p from below with no systematic exceedance. — OTHER
- δ_BNN,fixed risk rises above p; dropout version δ_BNN,fixed,dropout has "much smaller" departures but the same qualitative non-minimaxity. Depth delays but does not remove the failure. — OTHER
- Horseshoe posterior mean: competitive in sparse regimes but risk "increases substantially as k grows; for k = p, the Horseshoe risk increases to approximately 7.5 for p = 5, 66 for p = 50, and 130 for p = 100" vs minimax benchmarks 5, 50, 100 — horseshoe fails in dense-signal regimes. — TRUST-SIGNAL (shrinkage-method selection depends on signal density: dense signals punish horseshoe)
- Predictive densities: Bayes predictive density under KL loss with the BetaPrime hyperprior is minimax and admissible (George–Liang–Xu machinery; Theorem 4.1, Corollary 4.2). — OTHER
- Caveats: no empirical data; failure is asymptotic in ‖θ‖ (grid runs to r = 500, far beyond typical standardized effects); no standard errors or replication seeds reported; horseshoe comparison protocol is asymmetric (1-sparse reference for the radial rule vs per-observation horseshoe). — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the load-bearing insight — thin-tailed global priors over-shrink the largest true signals (the stars), and depth only delays the failure; the heavy-tailed BetaPrime repair gives a minimax certificate. Directly relevant to every GSE shrinkage problem: team-strength blending, early-season estimates, multi-market probability blending.
- SCHEME: signal-density matters for shrinkage choice — horseshoe-class wins sparse, collapses dense (66 vs 50, 130 vs 100); GSE should know which regime each estimate lives in before picking a shrinker.
- OTHER: the grouped extension (independent W_g per group — offense vs defense, position groups — keeping the per-group minimax certificate) is the NFL-specific structural improvement the paper doesn't build; the radial rule serves as a microsecond table-lookup calibrator (precompute s(r) on a grid per p).

## Engine-actionable? (yes/no + one-line what)
yes — Implement the radial shrinkage rule δ(Y) = (1 − E[(1+W)^{−1}|Y])Y with W ~ BetaPrime(1, p/2 − 2) as a quadrature-based calibrator for team/player effect estimates and probability blending (gate: ≥ 3% team-EPA MSE reduction on 2024 holdout with no Brier degradation), letting elite/terrible teams keep their signal instead of being over-shrunk to average.

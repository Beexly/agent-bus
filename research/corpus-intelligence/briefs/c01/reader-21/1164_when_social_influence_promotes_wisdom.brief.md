# arxiv-program/research/2026-09-21/arxiv-deep/1164-when-social-influence-promotes-wisdom.md
## What it is (1-2 sentences)
Full-ledger read of arXiv:2006.12471v3 (Almaatouq et al. 2021): reanalyzes four human crowd-wisdom experiments to show that centralized influence structures (upweighting a few agents) beat decentralized ones when the initial-estimate distribution is heavy-tailed, and lose when it is thin-tailed. Verdict: ADAPT — the R (heavy-tailedness) diagnostic as a per-game ensemble aggregation-regime switch for GSE's component-model probabilities.

## Key metrics/methods (formulas where given, else "not specified")
- Collective estimate: a_n(ω) = ω·a_{1,0} + (1−ω)·(1/n)Σ_i a_{i,0}; centralization ω ∈ [0,1] (ω=0 decentralized/simple mean; ω=1 dictatorial; star network → ω=(n−2)/(3n−2) → 1/3 as n→∞).
- Outcome: Ω_n(ω, F^θ_{μ,σ}) = P(|a_n(ω)−θ| < |a_n(0)−θ|).
- Lower bound (proved, SI §S2.1): Ω_n ≥ sup_{β > θ/(1−ω)} F(β)·(1 − F(nβ)^{n−1}).
- Phase transitions: heavy-tailed F (Pareto, log-normal, log-Laplace) — bound limit transitions 0→1 or 1/2 as shape σ crosses critical value; log-normal simulations (n=50, ω=1/3, θ=2): Ω_n > 1/2 under overestimation bias or large dispersion; reversed under low dispersion + underestimation bias.
- Empirical feature R: relative log-likelihood of fitted log-normal vs fitted normal on initial estimates per task; R=0 → certainly normal (thin-tailed); R=1 → certainly log-normal (heavy-tailed); R=0.5 → indistinguishable. Needs no knowledge of θ.
- Regressions: logistic y_ij = 1/(1+exp(β0 + β1 R_j + v_i + ε_ij)) (678 obs); linear y_ij = β0 + β1 R_j + β2 I_i + β3 I_i R_j + v_i + ε_ij, y = z-scored absolute error (687 obs).
- Proposed adaptation: fit normal and log-normal by MLE to per-game cross-model probabilities {p_j} (logit-transform since support is (0,1)), compute R, switch: R<0.5 → equal-weighted mean; R≥0.5 → concentrated aggregation (softmax on recent model skill or top-3 skill-weighted mean).
- Improvement experiment: continuous ω in R — softmax temperature τ(R) decreasing in R rather than binary R≥0.5 switch.

## Data sources named
- Reanalysis of four published human experiments (Lorenz et al. 2011; Becker et al. 2017; Gürcay et al. 2015; Becker et al. 2019): 2,885 participants, 99 independent groups, 54 estimation tasks, 15,562 individual estimations, 687 collective estimations.
- Data and code: https://github.com/amaatouq/task-dependence.

## Findings (numbers and facts, not vibes)
- Majority of the 54 empirical estimation contexts better described by heavy-tailed (log-normal) than thin-tailed (normal) distributions.
- Logistic: R substantially explains probability of group improvement after social interaction — z = 5.26, p < 0.001 (exact).
- Linear: centralization × R interaction on absolute error: β = −4.97, t = −3.95, p < 0.001 (exact); R<0.5 → error lower decentralized; R>0.5 → error lower centralized.
- No single influence structure best in all contexts.
- Limitations: human trivia/visual estimation tasks, not sports forecasts; i.i.d. assumption violated by GSE's correlated models (empirical R rule usable, analytic bound not); R needs a batch of initial estimates (M≈5–15 per game is small); only non-negative tasks studied; crossover at R=0.5 is empirical, not sharp.
- Acceptance gate in file: ADOPT iff 2025-season mean Brier beats better fixed regime by ≥2% on ≥2 of 3 markets (spread/ML/total) AND R≥0.5 fraction of games is 10–60% (rule must discriminate); REJECT if R degenerate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble aggregation regime switch — per-game R diagnostic choosing equal-weight vs concentrated (skill-weighted) aggregation of component-model probabilities.
- OTHER: complements ledger 1163's γ=ε−δ diversity diagnostic (1163 decomposes error source; 1164 prescribes weighting regime from distribution shape).
- TRUST-SIGNAL (indirect): heavy-tailed cross-model disagreement flags high-tail-risk games where the mean is dominated by outlier models — a model-trust signal, not a player trust quote. INFERENCE that this feeds trust-signal intake.

## Engine-actionable? (yes/no + one-line what)
Yes — implement per-game R diagnostic on cross-model probabilities (~1 day, scipy MLE + harness) and switch between equal-weight and skill-concentrated aggregation, gated on ≥2% Brier improvement over fixed regimes.

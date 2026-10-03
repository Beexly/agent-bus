# docs/arxiv-program/research/2026-09-21/arxiv-deep/1161-learning-optimal-forecast-aggregation-partial-evidence.md
## What it is (1-2 sentences)
Deep read of Babichenko & Garber (2018, arXiv:1802.07107) on learning the optimal Bayesian aggregation of expert forecasts in a repeated setting where the aggregator never sees the experts' evidence, only their forecasts and realized outcomes. Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Optimal aggregation rule is linear in log-odds space: r̃*(s) = Σ_j(x̃_j − μ̃) + μ̃; F̃ = Aỹ + μ̃1_n; optimal weights h* = 1_m(AᵀA)^{-1}Aᵀ.
- Learn h by online gradient descent on the log-loss-convexified objective; unbiased gradient estimator.
- Extreme-forecast rule: forecasts outside [τ, 1−τ] with τ = T^{−1/2} handled by "follow the extreme expert" (forecast nτ / 1−nτ / 1/2).
- Regret bounds: learnable regimes get Õ(nσ_min(A)^{−1}√T); prior-ignorant phase 1 burns T₁ = nσ^{−1}√T rounds forecasting 1/2.
- Injectivity condition: non-injective evidence matrix A → strictly positive per-period regret forever (impossibility). Worked example: per-period regret ≈ 0.024 when optimal is 1/4 or 3/4 but experts both forecast 1/2.
## Data sources named
Theory only; no empirical dataset. Worked example: μ=1/2, three signals correct w.p. 3/4, A=[[1,1,0],[0,1,1]].
## Findings (numbers and facts, not vibes)
- If m/n ≤ C < 1 (fewer signals than experts), σ_min = Ω(√n) w.h.p. → regret Õ(√(nT)).
- Lemmas 2–4: P(ω=1 | some expert forecasts ≤ α) ≤ nα; both-sides-extreme prob ≤ 2nα.
- Prop. 2: dynamic evidence sets + prior-ignorant aggregator cannot learn (regret ≥ T ln 2).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: model-ensemble aggregation design rule — never include redundant sub-models that see identical evidence; dope the log-odds-linear OGD blending layer for GSE's probability fusion.
## Engine-actionable? (yes/no + one-line what)
yes — learn ensemble weights via OGD in log-odds space over historical slates instead of simple probability averaging, plus an injectivity audit that drops redundant sub-models.

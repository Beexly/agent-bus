# arxiv-program/research/2026-09-21/arxiv-deep/1701-bayesian-decathlon-compositional-model.md
## What it is (1-2 sentences)
Deep read of arXiv:2602.17043 (Nguyen et al., 2026) on Bayesian hierarchical modeling of elite decathlon careers; verdict ADAPT. The compositional sequential model (performance in each event depends on preceding events + nonlinear age curves + athlete random effects) is judged a directly adaptable scaffold for weather-covariate performance modeling in football, though the paper itself contains no weather data (unavailable to authors).

## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1 (baseline): P_{i,j} = α̃_i + Σ_d β̃_d φ_d(age_{i,j}) + ε, ε ~ N(0,σ)
- Eq. 2 (simple): Y_{i,j,e} = α_{i,e} + Σ_d β_{d,e} φ_d(age) + ε_{i,j,e}
- Eq. 3 (compositional): Y_{i,j,e} = α_{i,e} + Σ_d β_{d,e} φ_d(age) + Σ_{m=1}^{e−1} γ_{m,e} Y_{i,j,m} + ε_{i,j,e}
- World Athletics scoring: Points = a(b−y)^c (track), a(y−b)^c (field)
- Fit in rstan: 4 chains × 2,000 iterations, 1,000 burn-in; weakly informative N(0,1) / Inv-Gamma(2,1) priors; φ_d = cubic polynomial or cubic spline with knots at age deciles
- Validation: 10-fold CV under "general" (random 90/10) and "tail" (hold out each athlete's last decathlon) frameworks; metric = standardized MSE (MSE/test variance); 200-dataset simulation with 95% posterior credible-interval coverage; posterior predictive checks (2,000 simulated datasets)

## Data sources named
- World Athletics decathlon results 2001–2022, distributed at github.com/Battles186/DecathlonCareerBest; filtered to athletes with ≥4 performances at 6400+ points: 8,668 performances × 10 events, 1,007 unique decathletes; events standardized to mean 0 / sd 1
- Explicitly missing: temperature, wind speeds, shoe/surface technology

## Findings (numbers and facts, not vibes)
- CV SMSE (general): baseline 0.234, simple/compositional 0.235 (cubic) — essentially tied; tail: baseline 0.358 vs compositional 0.362 — baseline marginally better on pure prediction
- Parameter recovery: near-nominal 95% coverage (exceptions: JT and PV columns at 90.5%)
- Inter-event antagonism: 0.1 s improvement in 100m ↔ +0.45 min worse 1500m (age- and sequence-adjusted); empirical correlations: 100m–LJ −0.54, 100m–400m +0.66, SP–DT +0.73
- 9,200-point probabilities: Mayer 7.7%, Eaton 5.65%, Šebrle 10.3%, Warner 1.8%, Dvořák 0.6%; Day-1 specialist 2.4%, Day-2 specialist 0%; "unicorn" (95th pct all events) ~100%; "good" (80th pct) 0.075% (avg max 8,671 vs unicorn 9,561)
- Theoretical ceilings: all world records in one decathlon = 12,676; all decathlon-bests = 10,669
- Observed correlations fall inside the compositional model's posterior predictive intervals but outside the simple model's

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Bayesian compositional modeling architecture — per-phase (e.g., Q1–Q4) sequential performance model with athlete random effects and nonlinear experience curves; proposed GSE spec adds weather covariates δ_e per phase
- OTHER: calibration discipline — 95% posterior predictive interval coverage as an acceptance gate (88–93% empirical coverage on 90% intervals), tail-CV (hold out each player's last games) as the validation framework
- OTHER: antagonistic-tradeoff cautionary template — conditions/strategy helping one game phase can hurt another (e.g., wind × fatigue interactions)

## Engine-actionable? (yes/no + one-line what)
yes — Adapt Eq. 3 to NFL with game-phase indices (Q1–Q4) and per-phase weather covariates; acceptance gate: tail-CV RMSE improvement ≥2% over no-weather baseline with a 95% CI excluding zero on at least one weather coefficient.

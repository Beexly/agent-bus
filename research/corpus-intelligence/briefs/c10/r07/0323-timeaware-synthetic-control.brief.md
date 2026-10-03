# arxiv-program/research/2026-09-21/arxiv-deep/0323-timeaware-synthetic-control.md
## What it is (1-2 sentences)
Deep-read ledger of Rho et al. (2026), arXiv:2601.03099v1, "Time-Aware Synthetic Control" (TASC). It replaces permutation-invariant synthetic control with a linear-Gaussian state-space model with a constant trend, learned by EM (Kalman filter + RTS smoother E-step, closed-form M-step), to build better counterfactuals by exploiting temporal ordering. Verdict: ADOPT — directly fills the corpus's thinnest gap (causal inference / synthetic controls for injury impact, gap #9), validated on sports score trajectories.

## Key metrics/methods (formulas where given, else "not specified")
- Model: x_t = A x_{t−1} + q_{t−1}, q ∼ N(0,Q); y_t = H x_t + r_t, r ∼ N(0,R); x_0 ∼ N(m_0, P_0); hidden dim d ≪ min(n,T). Variants: constant-state portion x*, seasonality term s_t·1, stacked multiple series.
- Learning (EMpre): E-step = Kalman filter forward + RTS smoother backward; M-step closed-form: A′ = CΦ⁻¹, H′ = BΣ⁻¹, Q′ = Diag(Σ − 2CA⊤ + AΦA⊤), R′ = Diag(D − 2BH⊤ + HΣH⊤), m′_0 = m^s_0, P′_0 = P^s_0 + (m^s_0 − m_0)(m^s_0 − m_0)⊤. Complexity O(N1·T0·N³).
- Counterfactual inference: set target post-intervention observation variance r_1 → ∞ (Kalman gain for target coordinate → zero), predict ŷ_{0,t} = h_1⊤ m^s_t for t > T0; 95% CIs from latent-state covariance (narrower than CIM's MCMC intervals).
- Theory (Prop. A.1): Kalman filtered state/covariance are minimal sufficient statistics for forecasting; by the data-processing inequality the Kalman-based predictor weakly MSE-dominates any permutation-invariant predictor (strict when A ≠ 0).
- Baselines throughout: classical SC (simplex f* = argmin ‖y_0⁻ − f⊤ Y⁻‖²), RSC (HSVT + ridge), CIM/Bayesian structural time series.

## Data sources named
- Simulated linear-Gaussian state-space DGP (Q settings a=0.01/0.1; R avg |noise| ≈ 0.0839 small / 0.8365 large; T0=50, horizon to 100).
- Proposition 99 (California tobacco tax 1988): Abadie et al. public data; 38 donor states; d=2.
- IPL cricket ball-by-ball 2008-04-18 → 2025-03-25: 1524 innings ≥120 legal deliveries; cumulative score/ball, T=120, placebo intervention T0=72; donor pools n ∈ {18,36,72,144}; 100 random-target repeats. Source URL not specified.
- NBA play-by-play from Kaggle (wyattowalsh/basketball), cumulative score every 15 s → T=192, 7574 games Jan 2020–Jun 2023, placebo T0=96 (halftime); n ∈ {24,48,96,192,384}; d=5; 100 repeats.

## Findings (numbers and facts, not vibes)
- Permutation stress test: TASC post-intervention RMSE mean +48.5%, std +25.7% when time indices permuted (SC/RSC unchanged by design) — confirms it exploits temporal order.
- Simulation: under high observation noise + small Q (strong trend), TASC is best of the four; under low noise RSC is best. Underestimating d hurts more than overestimating; TASC more robust to d-overestimation than RSC; at d = d_true, TASC beats RSC for d_true ∈ {3,5,10,20}.
- Donor size: all methods best near N = T0 = 50; N=200 degrades everything; TASC nearly flat between N=10 and N=50.
- IPL: TASC lowest median RMSE for n ∈ {36,72,144}; best overall TASC at n=72: median RMSE 7.88; TASC strongest at long horizons; TASC CIs narrower than CIM's.
- NBA: TASC lowest median RMSE across all n; best at n=192; TASC lowest in nearly every half-quarter block, gap widening in Q4's second half.
- Prop 99 placebo tests: TASC lowest median RMSE, smallest variance; d-sweep optimal at d=2; California learned observation variance 2.58 vs donor median 12.95 (std 36.17, max 170.79).
- Limitations: univariate only; linear time-invariant trend A (misspecification-prone); EM slow and initialization-sensitive; no non-negativity/sum-to-one constraints → can extrapolate outside donor convex hull; cricket/NBA "interventions" are placebos (validate forecasting, not causal identification).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: direct use case — causal QB-injury impact estimation (e.g., Rodgers 2023 Week 1, Burrow 2023 Week 11 counterfactuals) and rest-of-season forecast adjustment when a QB goes down, replacing naive "backup = historical backup EPA" with the TASC counterfactual gap.
- COACHING: mid-season coordinator changes as intervention events for causal effect estimation; schedule-maker/bye-week effect estimation.
- TRUST-SIGNAL: placebo-test validity caveat — cricket/NBA placebos validate forecasting, not causal identification; mean-centering uses post-T0 donor data (mild lookahead); NFL weekly EPA may be too close to white noise for the trend component to help (paper's advantage came from strong linear trends + high noise) — adoption must be gated on NFL placebo-harness results.
- OTHER: improvement experiment — test whether the causal counterfactual gap predicts the market's post-injury line move (de-vigged spread change); if the causal estimate anticipates the market, it's a tradable edge.

## Engine-actionable? (yes/no + one-line what)
Yes — implement TASC injury-impact module (NumPy/SciPy EM, ~300 lines) on nflverse 2020–2025 team-game EPA/play panel with 10 fixed starting-QB injuries, gated on: placebo RMSE beating classical SC by ≥10% relative, flat-carry baseline by ≥15% in ≥4 of 6 seasons, and EM convergence ≥90% of runs.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0573-static-and-dynamic-bart-for-rankorder.md
## What it is (1-2 sentences)
Static (ROBART) and dynamic autoregressive (ARROBART) Bayesian Additive Regression Trees for rank-order data — nonparametric latent-score models where ARROBART runs a nonlinear AR(1) on latent team strengths with closed-form filtering/smoothing. Directly portable to weekly NFL power-rating dynamics, though the paper's pollster-ranker machinery has no NFL analogue and must be replaced with a game-outcome measurement model.

## Key metrics/methods (formulas where given, else "not specified")
- Thurstone base: τ = rank(z), z_i = γ_i + ε_i, ε ~ N(0,1) (σ_ε²=1 fixed for identification)
- BART: f(x) ≈ Σ_{s=1}^{S} Σ_{ℓ=1}^{b_s} μ_{ℓ,s}·𝟙(x ∈ B_{ℓ,s})
- ARROBART: τ_{j,t} = rank(z_{j,t}); z_{ij,t} = f(X_{ij,t}) + ε_{ij,t}; X_{ij,t} = (z_{ij,t−1}, covariates) — HMM with measurement τ|z ~ δ_{rank(z)} and transition z_t|z_{t−1} ~ N(f(z_{t−1}), I)
- Theorem 1: closed-form filtering p(z_t|τ_{1:t}), one-step-ahead predictive, and smoothing as finite mixtures over BART partition regions with time-varying weights (truncated-Gaussian integrals)
- Order set: A_t = {z: z_{j,t} < z_{i,t} ⇔ τ_{j,t} < τ_{i,t}}
- Metric: Kendall tau distance K_n(τ̂,τ) = #{pairwise disagreements}/(N(N−1)/2)
- Priors: Chipman et al. 2010 defaults (α̲=0.95, β̲=2); tree counts 25/25/50

## Data sources named
Simulations: 3 scenarios × σ ∈ {1,5,10,20,40}, 100 replications; dynamic: M=5 rankers, N=20 items, T=52. Real: 2022 NCAA DI football AP weekly poll, N=7 teams, M=15 pollsters, T=16 weeks (full lists); covariates: win %, avg MOV, last-game MOV, won-previous-game (collegepolltracker.com, teamrankings.com); test weeks 12–16, expanding window. No code link stated.

## Findings (numbers and facts, not vibes)
- Static (ratios to Borda; lower better): ROBART wins in nonlinear scenarios — gains "around 10% (σ=1 or 40) to 27% (σ=5)" (Scenario 3), "10% (σ=1) to 20% (σ=5)" (Scenario 2); in linear Scenario 1, ROBART loses to BARC/BARCM at σ=1,5 and wins 1–3% at σ>10.
- Dynamic (ratios to ARROBART): ARROBART beats all competitors across nearly all scenarios/noise; ARROLinear ratios reach 2.99 (Scenario 1, σ=2.0); ARROBARTX best in covariate Scenario 3 (ratios 0.85–0.96).
- NCAA poll forecasting (avg Kendall τ, lower better): ARROBART 0.09 (weekly 0.04, 0.07, 0.09, 0.16, 0.07); competitors' ratios to ARROBART — ARROBARTX 1.58, ROLinear 2.01, ARROLinearX 2.03, ARROLinear 2.03, ROBART 2.04 (covariates ADDED NOISE on the only real dataset).
- Limitations (from file): real-data test is tiny (5 weeks × 7 teams); pollsters are biased humans, not game outcomes; exact filtering over ℝ^N is infeasible at N=32 without the unquantified element-wise approximation; BART sub-optimal at very low noise (σ=0.1).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: nonlinear AR latent team-strength dynamics for weekly NFL power ratings — complements the linear-Gaussian state-space lane (Lopez/Baumer) with injury-shock/jump behavior the paper's Figure 1 motivates.
- COACHING: INFERENCE — regime-switching BART transition (stable vs shock state on QB injury / coaching change) is the natural NFL translation of the paper's "small persistent changes punctuated by large breaks."

## Engine-actionable? (yes/no + one-line what)
Yes — port ARROBART to NFL: latent z_{i,t} = team strength, game-margin likelihood replaces the ranker model, lagged z_{t−1} + nflverse covariates (EPA/play, injuries, rest) in BART transition (S=25 trees); adopt if it beats the linear AR(1) state-space baseline by ≥0.003 mean log-loss on weeks 12–18 pooled 2015–2025, else keep as ensemble component.

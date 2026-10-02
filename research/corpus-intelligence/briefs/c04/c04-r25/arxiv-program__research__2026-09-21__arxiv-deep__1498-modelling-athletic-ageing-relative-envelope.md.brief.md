# docs/arxiv-program/research/2026-09-21/arxiv-deep/1498-modelling-athletic-ageing-relative-envelope.md
## What it is (1-2 sentences)
Deep-read ledger of Lee (2026) "Modelling Athletic Ageing Relative to an Estimated Performance Envelope" (arXiv:2608.06635v2), the RACE/STAR two-stage framework for modeling individual athletic aging relative to a population performance ceiling. Verdict: ADAPT — directly ports to GSE as per-player NFL aging curves relative to a positional ceiling, with identifiability diagnostics for short careers.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 (RACE): population envelope f(x) = F⁻¹_{Y|x}(τ), τ = 0.95 (C95), via GAMLSS with smooth age effects; Box–Cox Cole–Green for sprint, Simplex for bolt rate; monotone-decreasing constraint pbm(mono="down").
- Stage 2 (STAR): yᵢ(x) = αᵢ + f̂((x − γᵢ)/exp(δᵢ)); α = level (vertical shift vs ceiling), γ = timing (horizontal age shift), δ = tempo (log time-scale; δ > 0 slows decline).
- Hierarchical: (αᵢ, δᵢ)ᵀ ~ MVN(μ, Σ); the level–tempo correlation ρ_αδ is a parameter of Σ, estimated inside the hierarchy (not post-hoc). Estimation by Laplace approximation in TMB; athlete summaries are BLUPs.
- Deficit–slope reparameterization: μᵢ(x) = Lᵢ + Sᵢ(x − x₀), Lᵢ = f̂(x₀) + αᵢ, Sᵢ = b·e^{−δᵢ}; λᵢ = e^{δᵢ} = calendar years per envelope-age year; RLIᵢ = 100·exp(δᵢ − μ̂δ) (relative longevity index).
- Identifiability geometry: Proposition 1 — exactly linear envelope ⇒ α and γ confounded; Proposition 2 — curved envelope with ≥3 distinct ages ⇒ (α,γ,δ) locally identifiable near δ = 0. Practical diagnostic: linear-fit RMS residual of f̂ vs Stage-2 residual scale (sprint: 0.011 ft/sec vs σ̂ = 0.42 → fix γ = 0).
- Acceptance gate: adopt if rolling-origin RMSE on age-30+ WR seasons beats static age-curve baseline by ≥5% AND the near-linearity diagnostic is computed and reported.

## Data sources named
MLB Statcast via Baseball Savant, seasons 2015–2021. Sprint speed: 1,021 athletes / 3,521 observations (Stage 1), 610 athletes with nᵢ ≥ 3 (Stage 2), median 5 seasons (IQR 3–6). Bolt rate: 427 / 967 (Stage 1), 141 athletes (Stage 2), median 4 seasons (IQR 3–5). Ages 20–40. Code: https://github.com/idaejin/race-star-code.

## Findings (numbers and facts, not vibes)
- Stage 2 estimates: sprint — μ̂α = −0.94, μ̂δ = −0.20, ω̂α = 2.13, ω̂δ = 0.39, ρ̂_αδ = −0.80, σ̂ = 0.42, timing not identified. Bolt — μ̂α = 0.60, μ̂γ = 0.23, μ̂δ = −0.46, ω̂α = 3.10, ω̂δ = 0.53, ρ̂_αδ = −0.84, timing identified (ω̂γ > 0).
- Level–tempo correlation is strongly negative (ρ̂_αδ ≈ −0.80 to −0.84); cluster bootstrap (sprint, B = 199) median ρ̂_αδ ≈ −0.70, percentile interval (−0.83, −0.11) — sign stable, interval wide.
- Simulation Q1: hierarchical Laplace NLME recovers ρ_αδ under sparsity (nᵢ ∈ {3,5,8}); post-hoc correlations of separate fits get the wrong sign or ~0.
- Sprint envelope slope b ≈ −0.14 ft/sec/year.
- Cross-metric (141 athletes on both metrics): concordance of (α,δ) moderate for level, weak for tempo — FAS coordinates are metric-specific; RLI top-tens for sprint and bolt share no names.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Proposed port: NFL player-season efficiency by position (yards/route run for WRs, EPA/play for QBs) 2010–2025, ages 21–38; BLUP (αᵢ, δᵢ) as features in fantasy/DFS valuation and dynasty trade models — OTHER (valuation feature; tags only if applied to QB positional curves, in which case QB-BEHAVIOR by extension — INFERENCE).
- The level–tempo question ("do early peakers decline faster?") answered inside Σ rather than by post-hoc correlation — OTHER (methodological).
- Joint multi-metric improvement experiment (athleticism tempo improving age-30+ production forecasts) — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — build GAMLSS C95 positional envelopes + STAR NLME age curves for NFL positions (WR pilot: yards per route run, 2015–2024), using player (α, δ) BLUPs as fantasy/DFS valuation features; ~2 weeks effort with rolling-origin RMSE ≥5% gate on age-30+ seasons.

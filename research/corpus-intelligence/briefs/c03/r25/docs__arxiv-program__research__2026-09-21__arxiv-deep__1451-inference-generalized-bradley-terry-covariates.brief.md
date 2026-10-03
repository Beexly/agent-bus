# docs/arxiv-program/research/2026-09-21/arxiv-deep/1451-inference-generalized-bradley-terry-covariates.md
## What it is (1-2 sentences)
A 2025 arXiv statistics paper (Ting Yan, arXiv:2507.22472, 58 pp full text) generalizing Bradley–Terry paired-comparison models to include per-comparison covariates (home field etc.) with a growing number of subjects; the ledger verdict is ADAPT as GSE's rating-model skeleton.
## Key metrics/methods (formulas where given, else "not specified")
- CBTM: P(i beats j) = exp(βᵢ−βⱼ+Zᵢⱼₖᵀγ)/(1+exp(βᵢ−βⱼ+Zᵢⱼₖᵀγ)) (Eq. 1), Zᵢⱼₖ = −Zⱼᵢₖ; reduces to Agresti's home-field model when Zᵢⱼₖ=1 (i home).
- Theorem 1: ‖β̂−β*‖∞ = Oₚ(√(log n/n)), ‖γ̂−γ*‖₂ = Oₚ(√(log n)/n) — merit and covariate rates differ.
- Theorem 2: √N·cᵀ(γ̂−γ) →ᵈ N(Σ̄⁻¹B*, cᵀΣ̄c); bias-corrected γ̂_bc = γ̂ − N^{−1/2}Σ̂⁻¹B̂ (closed-form incidental-parameter bias correction).
- Corollary 1: top-K exactly recovered if separation Δ_K = β*_{K−1} − β*_K ≫ √(log n/n) — separability gate for published rankings.
- Computation: alternate Ford (1957) fixed-point for merits β with Newton–Raphson for covariate coefficients γ; warm-start from prior week.
## Data sources named
Simulations: n ∈ {100, 200}, one comparison per pair, 2-dim covariates (Z₁ ∈ {−1,+1}, Z₂ ~ N(0,1)), γ* = (0.5, 0.5)ᵀ, 5,000 replications. Real: NBA 2018–19 regular season, 30 teams, 1,230 games, home/away indicator covariate.
## Findings (numbers and facts, not vibes)
- Figure 1 (core result): fitting plain BT when truth has a covariate effect — ℓ∞ merit error grows with γ and does NOT shrink as n grows (permanent non-vanishing bias); CBTM error stays small and shrinks. (TRUST-SIGNAL: omitting real situational covariates corrupts every team rating, more data cannot fix it)
- NBA 2018–19: γ̂ = 0.45 (SE 0.065), p = 2.1×10⁻¹² for home advantage — decisively significant; merit ordering reproduced East playoff seeding exactly, swapped 7/8 in West (Clippers vs Spurs). (TRUST-SIGNAL)
- Table 1: 95% CI coverage for βᵢ−βⱼ near nominal (94–95%) only when merit range controlled (c ≤ 0.05); collapses for far-apart pairs under wide ranges — n=200, c=0.2, pair (0,100): coverage 13.00%; pair (0,200): 14.60%. (TRUST-SIGNAL: controlling ‖β*‖∞ is necessary, not decoration)
- Table 2: γ coverage near 95% nominal; bias correction moves coverage slightly closer to nominal (bias small under balanced home/away design).
- Theorem 4 (Erdős–Rényi schedule): ‖β̂−β*‖∞ = Oₚ(√(log n/(nqₙ))), ‖γ̂−γ*‖₂ = Oₚ(√(pₙlog n/(nqₙ))) — covariate-count penalty is explicit (√pₙ); Theorem 5 gives an NFL-schedule-motivated fixed sparse graph variant.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Omitted-covariate non-vanishing bias (Fig. 1): TRUST-SIGNAL — justifies putting home/rest/travel/QB-status inside the likelihood instead of folding into team strengths; QB-BEHAVIOR — starting-QB-change flag named as a covariate.
- Incidental-parameter bias correction (Thm 2): OTHER — applies to any global market-effect coefficients GSE fits jointly with 32 team strengths; also QB-BEHAVIOR if QB-status flags are global coefficients.
- Corollary-1 separability gate: TRUST-SIGNAL — only assert "Team A > Team B" in published power rankings when the merit gap clears the √(log n/n)-scale threshold at 95% confidence.
- Home-effect γ̂₁ time series (SU outcomes vs ATS outcomes diverging = market bias signal): OTHER (market/betting intel).
## Engine-actionable? (yes/no + one-line what)
yes — Replace plain BT/Elo win-prob core with CBTM (βᵢ team merits + γ over home, rest differential, travel miles, QB-change flag, dome/outdoor mismatch), alternating Ford/Newton-Raphson weekly refit, bias-corrected γ̂ with SEs, and Corollary-1 separability gate on the rankings publisher; numeric gate: CBTM walk-forward log-loss must beat plain BT by ≥ 0.01 on NFL 2019–2023 weeks 7–17, home coefficient significant (|γ̂₁|/SE > 3) in ≥ 4 of 5 seasons.

# arxiv-program/research/2026-09-21/arxiv-deep/1222-fractional-growth-portfolio-investment.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2109.10814v1 (Brockwell 2021, 6,193 words): derives growth-optimal (Kelly) and fractional-Kelly portfolio rules under geometric Brownian motion and compares full vs fractional Kelly empirically on 2001–2021 Vanguard equity/bond fund data. Verdict: ADAPT — supplies the closed-form growth/risk trade-off behind fractional Kelly for GSE's sizing lane.
## Key metrics/methods (formulas where given, else "not specified")
- k⋆ = (μ−r)/σ²; multivariate k⋆ = Σ⁻¹(μ−r); fractional k_α = αΣ⁻¹(μ−r), α∈(0,1).
- Expected log-growth L(k_α) = r + (α − α²/2)S², S² = (μ−r)ᵀΣ⁻¹(μ−r) (squared Sharpe); variance of log-growth V(k_α) = α²S² — growth quadratic-concave in α (max at α=1), risk falls quadratically as α↓.
## Data sources named
Real market data: Vanguard funds VFIAX (S&P 500 index) and VUSUX (long-term Treasury), 2001–2021; daily/monthly returns used to estimate μ, σ, correlation; portfolios rebalanced per Kelly rules. Fund data public; no code.
## Findings (numbers and facts, not vibes)
- 2001–2021 (Table 2): Fractional Kelly — growth 0.089, annualized SD 0.176, max drawdown 41.9%, final wealth $576,464; Full Kelly — growth 0.172, annualized SD 0.594, max drawdown 89.8%, final wealth $3,002,829.
- Fractional trades roughly half the growth for ~1/3 the volatility and ~1/2 the drawdown — the classic growth-vs-security frontier in one table.
- In-sample evaluation (parameters estimated on the same window); GBM assumed (no jumps/stochastic vol); two-asset illustration only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bet-sizing — analytic justification for replacing a fixed round-number fraction (quarter-Kelly) with variance-budgeted fractional Kelly: solve α = √(V_target / V(1)) from the drawdown budget instead of picking α=0.25 by convention. Connects to existing apps/web/__tests__/calibration-map-kelly.test.ts and ledger 0171's 10-strategy comparison.
## Engine-actionable? (yes/no + one-line what)
yes — implement variance-budgeted fractional Kelly per slate (α_t recomputed from estimated slate log-growth variance and the drawdown budget, stake α_t·f_full) and test it against fixed α=0.25 on walk-forward picks by realized log-growth per unit realized variance.

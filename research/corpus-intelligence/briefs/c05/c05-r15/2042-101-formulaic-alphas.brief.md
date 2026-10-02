# arxiv-program/research/2026-09-21/arxiv-deep/2042-101-formulaic-alphas.md
## What it is (1-2 sentences)
Deep read of Kakushadze, Lauprete & Tulchinsky (2015), arXiv:1601.00991 — disclosure of 101 real WorldQuant production alphas as explicit executable formulas, plus empirical characterization of their return distribution, pair-wise correlations, and dependence on volatility/turnover. Ledger verdict: ADOPT — the formulaic-alpha operator grammar and "alpha as code" mining blueprint are directly portable to GSE signal discovery; anchor reference for the lane.
## Key metrics/methods (formulas where given, else "not specified")
- Operator grammar (Appendix A): delay, correlation, covariance, rank, mean, std, min, max, sum, product, scale, ts_rank, signed power, decay_linear, industry neutralization, etc., over OHLCV/VWAP/fundamentals.
- Example: α = −ln(today's open / yesterday's close) (delay-0 mean reversion).
- R_i ~ σ_i^0.76 (alpha return scales with realized volatility, fitted exponent ≈0.76); turnover log-factor regression on pair-wise correlations has poor explanatory power.
## Data sources named
Proprietary WorldQuant production data (per-alpha Sharpe, turnover, cents-per-share, realized volatility; 101×101 covariance matrix), window Jan 4 2010–Dec 31 2013; inputs: daily OHLC, volume, VWAP, market cap, GICS/BICS/NAICS/SIC. Formulas published; raw data proprietary.
## Findings (numbers and facts, not vibes)
- Mean (median) pair-wise correlation of the 101 alphas: 15.9% (14.3%) — low, so large alpha counts don't imply redundancy.
- Average holding period ~0.6–6.4 days; alpha returns strongly correlated with volatility (exponent ≈0.76) with NO statistically significant dependence on turnover.
- 101 were hand-picked for simplicity from a much larger pool (selection/survivorship); production Sharpe/turnover self-reported; 2010–2013 window; alpha decay likely.
- No multiple-testing accounting for the search space behind the 101.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "SportsAlpha" miner: same operator grammar (ts_rank, delay, decay_linear, industry-neutralize → division/conference-neutralize) over team-game panels for formulaic signal mining — OTHER (signal discovery).
- Factor-zoo construction with |corr|<0.5 keeping and deflated-Sharpe multiple-testing gate — TRUST-SIGNAL (anti-overfit).
- Market-aware fitness: reward factors whose edge is NOT explained by closing-line movement (the market-residualized fitness the paper doesn't do) — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build the SportsAlpha miner: operator engine over the nflverse team-game panel (delay-0 constraint = only info available at bet time), mine with GP/random search scored on out-of-sample IC vs spread cover, keep zoo with mean pairwise |corr|≤0.25; gate: mined zoo mean out-of-sample |IC| ≥2× hand-built mean-reversion baseline on 2023–2025 AND combined signal improves base-model Brier by ≥0.002 with multiple-testing gate passed.

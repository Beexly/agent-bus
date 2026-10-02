# docs/arxiv-program/research/2026-09-21/arxiv-deep/0839-conformal-kelly.md
## What it is (1-2 sentences)
A registered-report-style portfolio paper (Robert Jacob Ryan, 2026, arXiv:2608.01494v1) testing whether conformal prediction intervals can supply the uncertainty scale σ̂ in a fractional-Kelly sizing rule f = 0.15·μ̂/σ̂², with a pre-registered growth claim tested on a sealed 2022–2024 lockbox — where calibration transferred (coverage 0.7450 vs 0.75 nominal) but the growth edge did not. The deep-read ledger rates it ADAPT for the uncertainty-width sizing idea plus the pre-registered lockbox discipline.
## Key metrics/methods (formulas where given, else "not specified")
- Return forecast: ridge regression (λ=10), refit every 21 days; horizons 12, 16, 21, 27, 34 days.
- Uncertainty: rolling conformal prediction, window 500, nominal 75% interval → interval half-width as σ̂.
- Sizing: f = 0.15·μ̂/σ̂², per-asset cap ±0.75, gross exposure cap 2.0. Config B ("drawdown dial"): tighter sizing when drawdown accumulates.
- Conformal interval: nominal 75% coverage from rolling 500-day score window. Assumptions: ridge residuals exchangeable enough for rolling conformal validity; covariance ignored (diagonal sizing); financing costs ignored.
## Data sources named
8 ETFs, daily OHLC/close, frozen Kaggle download, 2006-05 through 2024-09-20; train through 2015-12-31; DEV 2016–2021 (1,511 days); sealed LOCKBOX 2022-01-01–2024-09-20 (683 days). No code stated.
## Findings (numbers and facts, not vibes)
- DEV: Config A growth 0.2845, Sharpe 1.336, max DD 27.7%; Config B growth 0.2584, Sharpe 1.386, max DD 20.3%.
- Lockbox (quoted): Config A growth 0.0847, Sharpe 0.453, max DD 36.6%; Config B growth 0.0701, Sharpe 0.422, max DD 31.7%; empirical coverage 0.7450 vs 0.750 nominal. Naive equal-weight 2× growth 0.1679; inverse-vol 2× growth 0.1576 — the registered growth claim was partially refuted; baselines won on growth.
- Limitations disclosed: ~200 DEV configurations searched (selection bias); cap bound 97.7% of DEV days (strategy effectively cap-constrained); incorrect Gaussian constant 1.2816 used instead of 1.1503.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (position sizing): stake ∝ edge / (conformal interval width)² with fractional multiplier and per-pick/gross caps — the uncertainty-width sizing transfers to GSE picks; the improvement experiment proposes a coverage-adaptive multiplier (scale up when trailing empirical coverage ≈ nominal, down when coverage breaks) so the multiplier becomes the regime detector. TRUST-SIGNAL: the paper is a methodological role model — pre-registered claim + sealed lockbox + honest refutation; the ~200-config DEV search and 97.7% cap-binding are cautionary signals for GSE sizing work (check cap-binding frequency — if >90% of days the rule is decorative).
## Engine-actionable? (yes/no + one-line what)
yes — Size GSE picks by stake ∝ edge/(conformal interval width)² from the existing CQR residual pipeline under a sealed lockbox protocol; adopt if lockbox max drawdown < 0.25-Kelly at ROI within 1 pp.

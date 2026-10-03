# docs/arxiv-program/research/2026-09-21/arxiv-deep/1633-optimal-stop-loss-thresholds-bayesian-drawdown.md

## What it is (1-2 sentences)
A Bayesian calibration procedure for setting stop-loss thresholds: bin the empirical distribution of trade maximum drawdowns by win/loss, compute conditional expected values per bin, and take the cumulative argmax bin edge as the threshold T. The corpus verdict is ADAPT (weak) — only the binning machinery transfers to GSE, applied to bankroll drawdowns for stake throttling, not to equity stop-losses.

## Key metrics/methods (formulas where given, else "not specified")
- Threshold: T = right edge of the bin maximizing the cumulative conditional-expected-value vector (eq. 4); stop implemented as a trailing stop at (1−T) × (maximum price since entry).
- R-method construction parameters: l=20 hours (holding period), m=250 trades, n bins chosen by a square-root rule on trade count; calibrate l to the mean/mode holding period per the paper's recommendation.
- Two construction methods: T (real signal-only trades) and R (rolling window: every hourly point as entry, exit l=20 hours ahead, m=250 trades).
- Paper's equations: eq. 4 (cumulative conditional EV argmax), eq. 5–6 (expected NLV change across assets).
- Assumptions: past trade drawdown behavior predicts future behavior; strategy has both entry and exit signals; live use is cheap but backtesting is computationally intensive.

## Data sources named
- SPY and IWM 1-minute data, hourly 20-hour-SMA signal-only long system (case study).
- 114-asset extension; appendix tabulates round-trip trade counts per asset (e.g., AAPL 219, LMT 321 trades).

## Findings (numbers and facts, not vibes)
- On 114 assets, R method vs signal-only baseline: 57.02% of cases improved; average gains +6.37% on winners, average losses −6.94% on losers; overall expected change in NLV +0.65% (eq. 5–6).
- The paper's own conclusion: "our method is on average quite successful, but imperfect"; the T method suffers from sparse data; +0.65% is a thin margin.
- Parameters l and m were chosen with knowledge of the data (paper flags this as future work); no time-ordered splits described.
- The R method's overlapping artificial trades create correlated samples the paper does not adjust for.
- GSE-relevant limitation: equity long positions with continuous exits — GSE's discrete −110 bets cannot be "stopped" mid-trade, so the literal stop-loss does not transfer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Binning drawdown depths to derive an empirical stake-throttle trigger (halve stakes past trigger 1, stop past trigger 2) — OTHER (risk/bankroll machinery).
- Per-bin conditional forward 4-week ROI as the analog of win/loss-conditioned trade returns — TRUST-SIGNAL (confidence-aware stake sizing driven by bankroll state).
- Monthly re-calibration of triggers so thresholds evolve with market conditions — SCHEME (regime-adaptive procedure, per the paper's own recommendation).

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the binning machinery to bankroll drawdown: compute drawdown at each slate from settled-pick history, bin it, find the depth maximizing cumulative conditional forward value, and use it as a stake-throttle/stop trigger re-calibrated monthly; ADOPT only if a walk-forward replay on 2025–2026 improves weekly-P&L Sharpe by ≥15% vs no-trigger with no worse final bankroll (the paper's +0.65% warns the effect may not survive).

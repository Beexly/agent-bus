# docs/arxiv-program/research/2026-09-21/arxiv-deep/1629-you-are-in-a-drawdown.md
## What it is (1-2 sentences)
Deep read of "You Are in a Drawdown. When Should You Start Worrying?" (arXiv:1707.01457, 2017): exact Brownian-with-drift formulas for drawdown depth and duration, reduced to simple scaling rules for a live keep/slow/stop bankroll monitor. Verdict in file: ADAPT — closed-form "worry thresholds" for GSE bankroll monitoring.
## Key metrics/methods (formulas where given, else "not specified")
- For Brownian motion with Sharpe ratio SR, exact joint distribution of depth and duration of the ongoing drawdown; 5%-tail fits:
- Duration ≈ 2.14 × SR⁻² (years, ten-year benchmark at 257 trading days/year).
- Normalized depth ≈ 1.50 × SR⁻¹.
- Method is a monitoring statistic (worry/no-worry classification), not a predictor. Assumptions: Brownian with constant drift/vol, Gaussian i.i.d. increments, SR known.
## Data sources named
None — pure analytics; ten-year benchmark computed at 257 trading days/year.
## Findings (numbers and facts, not vibes)
- At SR=0.5 there is a 5% chance a ten-year process is still in drawdown after ≥7 years.
- At SR=1.6 the normalized 5% depth is ≈0.95, and such a drawdown is very unlikely to end in under ~2 months.
- Paper's companion-literature caveat (from file, citing 1627): Gaussian tails understate real drawdowns by ~33% at the 90th percentile — inflation factor needed for betting returns (discrete, heteroskedastic, regime-shifting).
- File's GSE spec: track drawdown depth/duration continuously → trailing realized Sharpe → 5% worry thresholds from the two fits → dashboard GREEN/YELLOW (halve stakes)/RED (stop, run miscalibration check); ~2 days effort.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll risk management — drawdown worry thresholds as an automated stake-modulation/stop signal.
- TRUST-SIGNAL: explicit Gaussian-understatement caveat (~33%) — a trust/honesty rule for threshold calibration, not blind adoption.
## Engine-actionable? (yes/no + one-line what)
yes — Implement the GREEN/YELLOW/RED drawdown dashboard using the 2.14×SR⁻² and 1.50×SR⁻¹ thresholds with the non-Gaussian inflation factor (2 days).

# arxiv-program/research/2026-09-21/arxiv-deep/1628-drawdown-modulated-feedback-control-stock.md
## What it is (1-2 sentences)
On Drawdown-Modulated Feedback Control in Stock Trading (arXiv:1710.01503, 2017). Proves a feedback stake-scaling rule I(k)=γ·M(k)·V(k) with modulator M(k)=(dmax−d(k))/(1−d(k)) that shrinks positions to zero as drawdown approaches the cap — guaranteeing percentage drawdown ≤ dmax almost surely under bounded returns while keeping most of Kelly's growth.
## Key metrics/methods (formulas where given, else "not specified")
- M(k) = (dmax−d(k))/(1−d(k)); I(k) = γ·M(k)·V(k); d(k) = 1 − V(k)/max_{j≤k} V(j).
- TSLA calibration: dmax=.05, Xmin≈−.049, Xmax≈.157; optimal γ*≈11.15 (from 100,000 Monte Carlo paths over 60 returns); out-of-sample modulated terminal wealth ≈1.005×10⁴ at drawdown ≈.05 vs classical Kelly ≈1.136×10⁴ at drawdown ≈.225 — ~12% less terminal wealth for a 5% vs 22.5% drawdown cap.
## Data sources named
TSLA daily data: train 2013-12-31→2014-03-28 (60 returns), OOS 2014-03-28→2014-06-24.
## Findings (numbers and facts, not vibes)
- Single stock, short windows (60 training returns, ~3-month OOS), one historical episode — no evidence γ* transfers across regimes; bounded-returns assumption does the heavy lifting (a gap move beyond Xmin breaks the a.s. guarantee); Monte Carlo inherits the 60-return empirical distribution (small-sample model risk); ~12% growth cost measured on one favorable episode.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: automatic drawdown governor for GSE's bankroll/staking — new capability per the existing-research map; natural actuator for the circuit-breaker levels calibrated in 1627/1629.
- TRUST-SIGNAL: (INFERENCE) drawdown-bounded staking is auditable risk-management evidence for the pick pipeline's trust posture, though the file does not make this claim.
## Engine-actionable? (yes/no + one-line what)
Yes — scale every posted stake by M(k) per slate with dmax (e.g. 0.20 of bankroll), γ Monte-Carlo-tuned over GSE's historical pick returns, floor at zero stakes when d(k)≥dmax; ADOPT if 2025–2026 replay holds realized max drawdown ≤ dmax while retaining ≥85% of unmodulated final bankroll.

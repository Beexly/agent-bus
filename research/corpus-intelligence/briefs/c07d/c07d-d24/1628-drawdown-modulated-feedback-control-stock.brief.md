# arxiv-program/research/2026-09-21/arxiv-deep/1628-drawdown-modulated-feedback-control-stock.md
## What it is (1-2 sentences)
arXiv:1710.01503 (2017): a feedback-control paper proving a stake-scaling rule that hard-caps percentage drawdown almost surely (under bounded returns) while keeping most of Kelly's growth, demonstrated on TSLA 2013–2014 data. The brief recommends ADAPT for GSE as its automatic drawdown governor — a capability the engine currently lacks.

## Key metrics/methods (formulas where given, else "not specified")
- Investment rule: I(k) = γ·M(k)·V(k), where V(k) is account value.
- Drawdown modulator: M(k) = (dmax − d(k)) / (1 − d(k)), d(k) = current percentage drawdown; as d(k) → dmax, M(k) → 0 and the position shrinks to zero.
- TSLA calibration: dmax = 0.05, Xmin ≈ −0.049, Xmax ≈ 0.157; gain search range [−6.354, 20.248]; optimal γ* ≈ 11.15 (maximizes expected log-growth within the cap).
- Guarantee: percentage drawdown ≤ dmax almost surely under bounded returns.
- Validation: in-sample Monte Carlo, 100,000 simulated paths on 60 TSLA returns (2013-12-31 → 2014-03-28) to select γ*; out-of-sample on TSLA 2014-03-28 → 2014-06-24.

## Data sources named
TSLA daily data: training 2013-12-31 through 2014-03-28 (60 returns); out-of-sample through 2014-06-24; Monte Carlo return model inherits the 60-return empirical distribution. No code link.

## Findings (numbers and facts, not vibes)
- γ* ≈ 11.15 from 100,000-path Monte Carlo.
- Out-of-sample: drawdown-modulated terminal wealth ≈ 1.005×10⁴ with realized drawdown ≈ 0.05, versus classical Kelly ≈ 1.136×10⁴ with drawdown ≈ 0.225 — ~12% less terminal wealth for a 5% cap instead of 22.5% drawdown.
- Limitations (all from the brief): single stock (TSLA), short windows (60 training returns, ~3-month OOS), one historical episode — no evidence γ* transfers across regimes; the bounded-returns assumption does the heavy lifting for the a.s. guarantee (a gap move beyond Xmin breaks it); the Monte Carlo inherits the small 60-return empirical distribution (small-sample model risk); the ~12% growth cost is for one favorable episode.
- The brief positions this as the natural actuator for circuit-breaker levels calibrated in 1627/1629 (ledgers from the same sweep wave).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/staking lane — core fit): automatic drawdown governor — scale every posted stake by M(k) = (dmax − d(k))/(1 − d(k)) each slate; tune γ (the Kelly-fraction multiplier) by Monte Carlo over GSE's historical pick returns; hard floor: stakes go to zero if d(k) ≥ dmax until recovery. Serves the calibration/sizing lane; target gate: 2025–2026 replay holds realized max drawdown ≤ dmax while retaining ≥85% of unmodulated final bankroll.
- OTHER (regime-aware risk): improvement experiment makes dmax adaptive — widen the cap when the Bayes–Kelly monitor (1626) reports a calibrated regime, tighten when miscalibration is detected; test whether the adaptive cap beats fixed on risk-adjusted bankroll growth. Serves the calibration/sizing lane.
- UNCERTAIN: the a.s. guarantee depends on bounded returns, which holds for fixed-odds sports betting only if stakes and payouts are bounded — INFERENCE: the guarantee is structurally more defensible for flat-odds betting than for the stock case, but a string of correlated losses (same-slate correlation) can still violate the implicit boundedness; γ must be tuned on GSE's own correlated-slate return distribution, not a single-asset one.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the drawdown modulator M(k) = (dmax − d(k))/(1 − d(k)) as an automatic stake-scaler with a Monte-Carlo-tuned γ over GSE's settled-pick return distribution; ADOPT if a 2025–2026 replay holds max drawdown ≤ dmax while keeping ≥85% of unmodulated final bankroll.

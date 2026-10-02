# arxiv-program/research/2026-09-21/arxiv-deep/1214-distributional-robust-kelly-gambling-optimal.md
## What it is (1-2 sentences)
Ledger for Sun & Boyd (2018) "Distributional Robust Kelly Gambling: Optimal Strategy under Uncertainty in the Long-Run" (arXiv:1812.10371) — maximize worst-case expected log growth over an uncertainty set Π of outcome distributions, solved as a disciplined convex program (CVXPY) for polyhedral/box/ellipsoidal/f-divergence/Wasserstein sets. Verdict: ADAPT as GSE's sizing layer under calibration error, with Π built from GSE's own calibration residuals.
## Key metrics/methods (formulas where given, else "not specified")
- Robust objective: maximize_{b∈B} inf_{π∈Π} E_π[log(rᵀb)] — disciplined convex program for the listed set types; implementable in CVXPY.
- Uncertainty sets handled: polyhedral, box, ellipsoidal, f-divergence balls, Wasserstein balls, mean/covariance-estimated sets.
- Assumes true distribution lies in Π; log utility; convex allocation set B. Set radius is exogenous — no data-driven selection rule given.
## Data sources named
Illustrative synthetic/pedagogical horse-race numerical example only (nominal win probabilities, pari-mutuel-style returns) — no real historical dataset.
## Findings (numbers and facts, not vibes)
- Horse-race example: nominal Kelly growth under nominal distribution 4.3% vs robust 2.2% (robustness costs ~half the nominal growth).
- Worst case: nominal Kelly −2.2% vs robust Kelly +0.7% (box set, η=0.26) / +0.4% (ball set, c=0.016) — converts a negative worst case into a positive one.
- Radii η=0.26, c=0.016 chosen for illustration, no calibration procedure; no real-data backtest, no statistical significance claims.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — uncertainty-aware stake sizing: parameterizes miscalibration into a formal robustness guarantee; direct upgrade for the point-estimate Kelly module in apps/web/lib/staking/kelly-investigation.ts.
- OTHER — convex-optimization staking method.
## Engine-actionable? (yes/no + one-line what)
Yes — build a robust Kelly sizer with Π sized from GSE's per-market calibration residuals (box/ellipsoidal), default fractional cap ≤0.25, and a "robustness dial"; adopt if worst-decile-of-weeks realized growth improves ≥20% while total log growth stays ≥0.9× baseline.

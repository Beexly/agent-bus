# ops/CALIBRATION_UNCERTAINTY_STACK.md
## What it is (1-2 sentences)
Internal calibration uncertainty stack spec for sports forecasts: binary sides go through Temp/Platt/PAVA/EB-τ maps into Brier·ECE·Murphy eligibility; numeric lines (spreads/totals/props) get QRF quantiles and optional CQR intervals.
## Key metrics/methods (formulas where given, else "not specified")
- Binary path: Raw → Temp | Platt IRLS | Isotonic PAVA/CIR | EB-τ → Brier / ECE / Murphy → PROVEN eligibility.
- EB-τ hierarchical: `u_g ~ N(0,τ²)`, τ̂ moment match clamped [0.05, 2]; unknown group → u=0.
- Stationary bootstrap: mean block ≈ 14 (days/events); contiguous geometric blocks with wrap; used for map grid CI and Brier CI — not for public ROI.
- Conformal: map CI ≠ conformal coverage; ACI abstain shows set size only (`CONFORMAL_ABSTAIN_ENABLED` default false); split-conformal residual sets for outcome coverage optional R&D.
- Numeric path: Quantile model (e.g. QRF) → CQR intervals (`conformalQuantile`, `cqrInterval` in `apps/web/lib/calibration/cqr.ts`) — coverage product layer, never on the public binary board by default.
- Selection rule: prefer isotonic PAVA/CIR when odd reliability shape or ranking OK but levels wrong; prefer Platt/temperature for small N with strong regularization or smooth global rescale only.
## Data sources named
none — internal method spec only.
## Findings (numbers and facts, not vibes)
- PROVEN eligibility is decided by Brier/ECE on probability p, not by conformal coverage or numeric intervals.
- Conformal abstain and CQR flags default OFF and are not PROVEN unlocks.
- Split-product architecture: binary sides (calibrated p) and numeric lines (quantile intervals) are separate paths with separate gates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: coverage ≠ eligibility distinction and the PAVA-vs-Platt selection rule encode honest uncertainty communication.
- OTHER: generalizable calibration-stack architecture for any GSE probabilistic output (spreads, totals, props).
## Engine-actionable? (yes/no + one-line what)
yes — adopt the split architecture: calibrate binary sides with Platt/temp/PAVA toward Brier·ECE·Murphy eligibility, and put spread/total/prop uncertainty on a separate QRF→CQR interval path.

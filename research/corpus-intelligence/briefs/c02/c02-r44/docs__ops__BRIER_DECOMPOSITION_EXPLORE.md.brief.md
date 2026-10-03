# docs/ops/BRIER_DECOMPOSITION_EXPLORE.md
## What it is (1-2 sentences)
A compact doctrine note on Brier-score decomposition (Murphy decomposition) for the GSE calibration program, defining Reliability/Resolution/Uncertainty and asserting a law: calibration maps reduce REL but cannot invent RES — ranking comes first, then calibration, then GREEN×K + AUTO_PUBLISH.
## Key metrics/methods (formulas where given, else "not specified")
- Murphy decomposition: Brier = REL (calibration) − RES (resolution) + UNC (uncertainty).
  - REL = forecasts ≠ observed rates → GSE use: Platt/Temp/PAVA target.
  - RES = forecasts separate outcomes → GSE use: stated as "PROVEN bottleneck (~0.002 live)".
  - UNC = base-rate variance → context only.
- Six techniques: (1) Binned Murphy (equal-width/equal-mass) — production eligibility; (2) Yates/Sanders variants — research comparison; (3) Two-group separation mean(p|win) − mean(p|loss) — quick ranking proxy; (4) AUC/log-loss alongside Brier on selective tails; (5) Group-wise Murphy (sport|market) — pause Res≈0 groups; (6) Selective-publish conditional Brier — Res on filtered subset.
- Law: "Maps reduce REL; they cannot invent RES. Raise ranking first, then calibrate, then GREEN×K + AUTO_PUBLISH."
## Data sources named
- None named in this file.
## Findings (numbers and facts, not vibes)
- Resolution is stated as the proven bottleneck at ~0.002 live — the number that motivated the "raise ranking first, then calibrate" sequencing. [TRUST-SIGNAL]
- Per-group resolution near zero (Res≈0) is the stated trigger to pause a sport|market group. [TRUST-SIGNAL]
- The file's operative sequencing is: ranking → calibration → GREEN×K + AUTO_PUBLISH — this pairs with the 2026-09-13 finding that the book-path confidence is anti-predictive at the top (an isotonic/PAVA calibrator, monotone by construction, cannot invert a non-monotone score). [TRUST-SIGNAL]
- No formulas beyond the decomposition identity itself; no measured datasets. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Entirely TRUST-SIGNAL: this is the calibration-quality doctrine (REL target via Platt/Temp/PAVA; RES bottleneck; group-wise pause rule; selective-publish conditional Brier). [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — implement the six-technique suite (binned Murphy for production eligibility, two-group separation as the ranking proxy, group-wise Murphy with the pause-Res≈0 rule) as the standing calibration gate.

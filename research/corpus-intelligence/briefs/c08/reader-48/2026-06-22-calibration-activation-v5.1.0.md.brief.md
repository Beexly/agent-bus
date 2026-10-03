# docs/calibration-proposals/2026-06-22-calibration-activation-v5.1.0.md

## What it is (1-2 sentences)
A founder-approved calibration proposal that activated isotonic/PAVA calibration (MODEL_VERSION v5.0.0 → v5.1.0), mapping raw heuristic confidence scores into calibrated P(win) via a validated isotonic map. Calibration makes displayed probabilities honest; it does not improve the model's edge.

## Key metrics/methods (formulas where given, else "not specified")
- Method: isotonic calibration via PAVA (`packages/prediction-engine/src/calibration-apply.ts`), validated with 5-fold out-of-fold ECE using the engine's own `isotonicCalibration` + `expectedCalibrationError` (validator: `scripts/calibration-validate.ts`).
- Held-out (5-fold out-of-fold) ECE: calibrated 0.0445 vs raw 0.1980 → PASS. Per-fold held-out ECE: [0.0538, 0.0712, 0.0079, 0.0321, 0.0576] — every fold improves.
- In-sample calibrated ECE = 0.0000 (noted as isotonic overfit artifact; not the honest number).
- Activation checklist requires ≥100 learning-eligible settled picks; sample was 393 (200W/193L, raw hit rate 50.9%, below the ~52.4% breakeven for -110 pricing).

## Data sources named
- 393 learning-eligible settled picks (published, non-bootstrap, non-seed, WIN/LOSS): 200W / 193L.
- `docs/path-to-70.md` §4 / §7 (activation sequence and checklist); `FROZEN.md` re-pinned.

## Findings (numbers and facts, not vibes)
- Raw confidence was ~20 points miscalibrated (raw ECE 0.1980); held-out calibrated ECE 0.0445.
- Raw hit rate over settled sample: 50.9% (200W/193L/1P overall) — below the ~52.4% breakeven at -110; stated as expected and acceptable for a silent/collecting posture.
- Edge is a separate, later lever (independent estimator agreement + CLV — path-to-70 §4 Step 2), gated separately and not part of this proposal.
- Scoring weights unchanged from v5.0.0; only the display/conviction-tier boundary mapping changed, gated by `CALIBRATION_ADJUSTMENTS_ENABLED` (env flip founder-gated, unchecked at time of writing).
- Production had `PUBLIC_PICKS_ENABLED=true` and `PERFORMANCE_STATS_ENABLED=true`, so calibrated numbers become user-visible immediately once the flag flips.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibrated probabilities make published confidence numbers honest (reliability-diagram boundary), a core trust posture.
- OTHER: calibration vs edge distinction — honest display is not a predictive edge; edge comes later via estimator agreement + CLV.

## Engine-actionable? (yes/no + one-line what)
- Yes — continue running out-of-fold ECE re-validation on larger settled samples and gate edge work (estimator agreement + CLV) separately from calibration display.

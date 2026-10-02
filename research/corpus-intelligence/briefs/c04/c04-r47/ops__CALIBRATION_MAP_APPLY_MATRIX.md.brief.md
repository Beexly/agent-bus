# docs/ops/CALIBRATION_MAP_APPLY_MATRIX.md
## What it is (1-2 sentences)
A short ops policy doc stating that all calibration maps (Temperature, Platt, Isotonic, hierarchical EB) stay OFF by default, with internal uncertainty quantification guidance and a required bake-off metric set.

## Key metrics/methods (formulas where given, else "not specified")
- Bake-off order: Raw → Temperature → Platt IRLS → Isotonic PAVA/CIR → hierarchical EB-τ.
- Required bake-off metrics: Brier (primary floor ≤ 0.22), ECE (≤ 0.05), Murphy reliability (floor ≤ 0.05), Murphy resolution (diagnostic — low ≈ recalibration cannot unlock PROVEN), Murphy uncertainty (base-rate variance), log loss (secondary ranking).
- Live ~resolution 0.002 → engine ranking work required, not map-only.
- Eligibility = frequentist on shown p; `CALIBRATION_ADJUSTMENTS` only after holdout passes floors + founder flag.
- Uncertainty methods (internal only): binomial/Beta per PAVA block (Wilson on block wins/n — ignores data-driven block choice), bootstrap (resample train, refit, percentile band of p_cal(s) — more honest), conformal on top (coverage sets ≠ CI on the map).
- "Never market intervals as ROI or 'verified edge.'"

## Data sources named
None named beyond the calibration map candidates and holdout floors.

## Findings (numbers and facts, not vibes)
- All four map types (Temperature, Platt IRLS, Isotonic PAVA with bootstrap CI recommended on tails, Hierarchical EB-τ) are default OFF; Temperature only ON "until holdout floors".
- Live resolution ~0.002 is explicitly below the level at which recalibration could unlock PROVEN, so engine ranking work is required rather than map tuning.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — all OTHER (model calibration policy).

## Engine-actionable? (yes/no + one-line what)
Yes — gate check: maps must remain OFF until holdout floors + founder flag; resolution must be re-measured before any bake-off.

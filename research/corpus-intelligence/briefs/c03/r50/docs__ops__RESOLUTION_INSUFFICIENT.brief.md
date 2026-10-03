# docs/ops/RESOLUTION_INSUFFICIENT.md
## What it is (1-2 sentences)
A durable 2026-08-09 live-probe diagnosis: near-zero Murphy resolution is the binding constraint on PROVEN eligibility — temperature/Platt/hierarchical-EB recalibration fixes reliability, not resolution, so recalibration alone cannot clear the floors.
## Key metrics/methods (formulas where given, else "not specified")
- Live probe: map n ≈ 760; Brier ≈ 0.275; ECE ≈ 0.112; Murphy reliability ≈ 0.026 (ok); Murphy **resolution ≈ 0.002** (near-zero ranking power).
- Methods named (reliability fixes, insufficient here): temperature scaling, Platt scaling, hierarchical EB-τ.
- Required path to PROVEN: improve model ranking / feature quality → re-run calibration-metrics → Brier/ECE under floors → GREEN×3 → `CALIBRATION_AUTO_PUBLISH=true` once. Never lower floors. Never publish while RED.
## Data sources named
Production live probe (2026-08-09).
## Findings (numbers and facts, not vibes)
- Forecasts barely separate wins from losses: resolution ≈ 0.002 vs reliability ≈ 0.026 (fine) — the failure is ranking power, not calibration. [TRUST-SIGNAL]
- Recalibration methods (temperature, Platt, hierarchical EB-τ) fix reliability **only when resolution exists**; with resolution ~0 they cannot clear PROVEN floors. [OTHER]
- Eligibility RED and publish-off was the correct state; floors are never lowered. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
The resolution diagnosis is TRUST-SIGNAL (it is the honest public-facing reason calibration/publishing is gated — the engine can't rank outcomes yet). Method commentary is OTHER (calibration theory, no football content).
## Engine-actionable? (yes/no + one-line what)
Yes — sequence engine work as feature-quality/ranking-power first (resolution ≥ ~0.03–0.05 per LEVERAGE_LOOP_2026-08-10) and only then recalibrate; never spend cycles tuning Platt/temperature against near-zero resolution.

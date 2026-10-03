# ops/ISOTONIC_LOGLOSS_DEBUG_2026-08-10.md
## What it is (1-2 sentences)
A debugging guide for GSE's calibration-mapping module bake-off (2026-08-10): shipped PAVA/isotonic, temperature scaling, Platt/beta calibrators, and a holdout comparison — with the ruling that calibration maps stay OFF because they fix reliability/NLL, not resolution.
## Key metrics/methods (formulas where given, else "not specified")
1. **Isotonic PAVA** — monotone calibration map; plateaus can collapse ranking → use CIR (centered isotonic regression) when collapse rate is high.
2. **Temperature scaling (Newton NLL)** — global soften/sharpen; primary log-loss lever for overconfidence.
3. **Platt / Beta** — parametric; better for small n.
4. **CV `selectCalibrator`** — out-of-fold equal-mass ECE + noise bar (not a log-loss objective).
5. **Holdout bake-off** — `bestByBrier` and `bestByLogLoss` reported separately.
- Key rule: if bestByLogLoss improves but resolution (RES) ≈ 0 → **do not apply** — raise ranking first. Never flip PERFORMANCE_STATS/maps while eligibility Brier is RED; live eligibility stays map-free.
## Data sources named
Modules: `packages/prediction-engine/src/log-loss-optimize.ts`, `isotonic-debug.ts`, `temperature-scaling.ts`; `apps/web/lib/calibration/calibration-map-bakeoff.ts`; `apps/web/lib/ops/map-bakeoff-durable.ts`; artifact `calibration-map-bakeoff.json`.
## Findings (numbers and facts, else "not specified")
- Isotonic `PAVA` ranking-preservation failure mode documented: monotone plateaus collapse the ranking, in which case CIR is preferred; `isotonicRecommendation=prefer_parametric` means trust Temp/Platt.
- Explicit law: "Apply OFF. `CALIBRATION_ADJUSTMENTS_ENABLED` stays false. Maps fix REL/NLL, not RES." (REL = reliability component of Brier, NLL = negative log-loss, RES = resolution.)
- PROVEN status still needs floors + streak + publish.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — calibration methodology: isotonic/Platt/beta/temperature comparison playbook with ranking-preservation guards.
## Engine-actionable? (yes/no + one-line what)
Yes — the calibration bake-off playbook (isotonic PAVA vs CIR vs Platt vs beta vs temperature, selected on held-out ECE/Brier with ranking-preservation checks) plus the hard rule that maps must not be applied when resolution ≈ 0.

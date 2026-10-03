# ops/PLATT_AND_BRIER_DECOMP.md
## What it is (1-2 sentences)
Five-line pointer doc: Platt scaling via MAP IRLS in `platt-scaling.ts`, Brier decomposition per Murphy, the live RES blocker, and the bake-off calibration-map cron writer with application gated off.
## Key metrics/methods (formulas where given, else "not specified")
Formulas named, not derived: Platt MAP IRLS (implementation `platt-scaling.ts`); Murphy decomposition Brier = REL − RES + UNC. Constants: live RES ≈ 0.002 (blocks PROVEN); bake-off cron writes `calibration-map-bakeoff.json`; apply OFF until ranking improves.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Live RES ≈ 0.002 is the binding constraint: it blocks the PROVEN claim.
- Calibration-map application stays OFF until ranking improves; Platt-scaling maps are baked off from cron into `calibration-map-bakeoff.json` but not applied.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration-math note — the Brier = REL − RES + UNC decomposition and the 0.002 RES floor are the engine's accuracy-state context.
## Engine-actionable? (yes/no + one-line what)
Yes (adjacent) — records the exact decomposition and live RES≈0.002 PROVEN blocker for the calibration program.

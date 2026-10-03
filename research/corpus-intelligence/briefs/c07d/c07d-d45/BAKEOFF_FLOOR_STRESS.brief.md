# ops/BAKEOFF_FLOOR_STRESS.md
## What it is (1-2 sentences)
An R&D offline calibration bake-off spec that defines the PROVEN eligibility floors for the live model and concludes that when the engine's forecast resolution is this low, no recalibration method can unlock PROVEN status — recalibration fixes reliability, not ranking power.

## Key metrics/methods (formulas where given, else "not specified")
- Live-vs-floor table (live values approximate, floors are gates):
  - n_map: live **~760**, floor **≥100**
  - Brier: live **~0.275**, floor **≤0.22**
  - ECE: live **~0.112**, floor **≤0.05**
  - Murphy reliability: live **~0.026**, floor **≤0.05** ✓ (passing)
  - Murphy **resolution**: live **~0.002**, floor **(diagnostic)** — no floor, but the headline problem
- Methods compared offline: Raw · Temperature · Platt MLE · Platt MAP (IRLS) · EB bins · hierarchical EB τ
- Synthetic stress design: `runSyntheticFloorStressBakeoff` builds a low-resolution overconfident set (~live diagnosis); if **no** method passes floors, the stated conclusion is: "Engine resolution insufficient — recalibration alone will not unlock PROVEN."
- Production policy: `CALIBRATION_ADJUSTMENTS_ENABLED` remains **false** until founder YES after a **live time-holdout win on canonical WIN/LOSS**; never lower floors to clear PROVEN; never AUTO_PUBLISH while eligibility RED.

## Data sources named
- None named (no datasets, papers, or providers). The diagnosis is "live" model output metrics; the comparison set is a synthetic floor-stress fixture built in `runSyntheticFloorStressBakeoff`.

## Findings (numbers and facts, not vibes)
- Live Brier ~0.275 vs floor ≤0.22 — **failing** (a 0.275 Brier is worse than 0.22; gap of 0.055).
- Live ECE ~0.112 vs floor ≤0.05 — **failing** (more than double the floor).
- Live Murphy reliability ~0.026 vs floor ≤0.05 — **passing** ✓.
- Live Murphy resolution ~0.002 is the diagnostic headline: "forecasts barely separate winners from losers."
- Recalibration maps (Temperature, Platt MAP, hierarchical EB τ) "mainly fix **reliability**; they cannot invent ranking power."
- The conditional logic is falsification-style: the synthetic stress test is designed so that if NO method clears the floors, the only permitted conclusion is engine-side resolution insufficiency — not a method-selection problem.
- Gates are absolute: `CALIBRATION_ADJUSTMENTS_ENABLED` stays false until a live time-holdout win on canonical WIN/LOSS plus founder YES; floors are never lowered to clear PROVEN; AUTO_PUBLISH is never enabled while eligibility is RED.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the calibration/sizing program directly: it is the formal statement of the engine's current calibration state — Brier ~0.275 (failing), ECE ~0.112 (failing), Murphy resolution ~0.002 (near-zero ranking power) — which under the honest-calibration-state doctrine means the model computes in shadow and never publishes until a live time-holdout win.
- [OTHER] The resolution ~0.002 finding connects to the QB-behavioral-profiles and trust-signal intake programs as a demand signal: if forecasts cannot separate winners from losers, the fix is new ranking-power signals (QB behavior features, OL metrics, scheme mismatches), not recalibration maps — the doc states this explicitly ("cannot invent ranking power").
- [OTHER] UNCERTAIN: the "live" values are approximate (prefixed ~) and the doc gives no date range, sample window, or sport breakdown for n_map ~760 — treat as a snapshot of diagnosis, not a pinned benchmark.

## Engine-actionable? (yes/no + one-line what)
Yes — keep CALIBRATION_ADJUSTMENTS_ENABLED=false and AUTO_PUBLISH off until a live time-holdout win on canonical WIN/LOSS; prioritize ranking-power signals (resolution ~0.002 is the binding constraint, not calibration).

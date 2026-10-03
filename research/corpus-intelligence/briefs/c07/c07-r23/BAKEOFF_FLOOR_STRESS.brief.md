# ops/BAKEOFF_FLOOR_STRESS.md
## What it is (1-2 sentences)
Offline calibration bake-off against PROVEN floors: live win/loss forecasts are RED, and a synthetic low-resolution stress test diagnoses that recalibration alone cannot invent ranking power.
## Key metrics/methods (formulas where given, else "not specified")
Live vs floor table: n_map ~760 (floor ≥100); Brier ~0.275 (floor ≤0.22); ECE ~0.112 (floor ≤0.05); Murphy reliability ~0.026 (floor ≤0.05, PASS); Murphy resolution ~0.002 (diagnostic — barely separates winners from losers). Methods compared offline: Raw, Temperature, Platt MLE, Platt MAP (IRLS), EB bins, hierarchical EB τ. Synthetic stress via `runSyntheticFloorStressBakeoff`: if no method passes floors, conclusion is "Engine resolution insufficient — recalibration alone will not unlock PROVEN."
## Data sources named
none — live calibration metrics and offline fixture/synthetic data only.
## Findings (numbers and facts, not vibes)
- Brier 0.275 vs 0.22 floor and ECE 0.112 vs 0.05 floor are both RED; only reliability passes.
- Recalibration maps (Temperature, Platt MAP, hierarchical EB τ) fix reliability but cannot invent ranking power when Murphy resolution is ~0.002.
- Production policy: `CALIBRATION_ADJUSTMENTS_ENABLED` stays false until founder YES after a live time-holdout win on canonical WIN/LOSS; never lower floors to clear PROVEN; never AUTO_PUBLISH while eligibility RED.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the never-lower-floors / never-auto-publish-while-RED policy is a calibration-honesty regime — PROVEN status is earned by resolution, not by map tweaking.
- OTHER: Murphy decomposition as a calibration diagnostic for any GSE probability outputs.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the resolution-first rule: if GSE Murphy resolution is near zero, stop tuning reliability maps and invest in features that separate winners from losers.

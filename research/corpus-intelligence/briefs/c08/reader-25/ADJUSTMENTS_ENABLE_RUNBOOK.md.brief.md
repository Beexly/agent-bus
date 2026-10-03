# docs/ops/ADJUSTMENTS_ENABLE_RUNBOOK.md
## What it is (1-2 sentences)
The enable runbook for `CALIBRATION_ADJUSTMENTS` (default OFF): strict preconditions to allow the calibration-adjustment layer to go live — do not enable while eligibility is RED.
## Key metrics/methods (formulas where given, else "not specified")
Preconditions: (1) live ops truth eligibility GREEN×K (default K=3) on frequentist maps; (2) offline time-holdout bake-off on canonical WIN/LOSS learning-eligible rows using methods Raw · Temperature · MAP Platt IRLS · hierarchical EB-τ, with holdout Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05; (3) founder sets `CALIBRATION_ADJUSTMENTS_ENABLED=true` once, manually; (4) MODEL_VERSION / map artifact versioned, no silent swaps. If holdout fails: do not enable; "Recalibration alone will not invent ranking power."
## Data sources named
Canonical WIN/LOSS learning-eligible rows; `BAKEOFF_FLOOR_STRESS.md` (diagnosis reference).
## Findings (numbers and facts, not vibes)
- Hard floors for activation: Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, GREEN×3 eligibility streak.
- Enabling is a manual founder action, never automatic.
- Core doctrine line: recalibration cannot invent ranking power — adjustments only map confidence → calibrated probability; they don't create discrimination.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The activation floors define the honest standard for when engine probabilities are publishable: TRUST-SIGNAL. The four-method bake-off set (temperature, MAP Platt IRLS, hierarchical EB-τ) is the calibration-method playbook: OTHER (calibration infra).
## Engine-actionable? (yes/no + one-line what)
Yes — these floors (Brier ≤0.22, ECE ≤0.05, Murphy R ≤0.05, GREEN×3) and the four-method bake-off protocol are the calibration gate the engine must clear before confidence adjustments go live.

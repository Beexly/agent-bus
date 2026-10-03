# ops/SLIDING_WINDOW_OGD.md
## What it is (1-2 sentences)
Shadow-only analysis doc for online gradient descent on a Beta calibration map: OGD on `g = σ(a·logit p + b)` under log-loss, re-fit on a trailing chronological window (default 120 samples), with a read-table for the live diagnostic fields; apply stays OFF.
## Key metrics/methods (formulas where given, else "not specified")
Formula: calibration map `g = σ(a · logit p + b)` fit by Online Gradient Descent under log-loss. Fields: `full.a` (OGD a on entire chrono series), `window.a` (a on last `window` samples, default window=120), `deltaA = window.a − full.a`, `deltaVarCal = Var[P_cal] window − full`, `expansionPreferred ∈ {full, window, neither}`.
## Data sources named
None external. Module: `packages/prediction-engine/src/online-beta-sliding-window.ts` (`runOnlineBetaSlidingWindow`, `analyzeSlidingWindowOgd`); durable fields `slidingWindowA`/`slidingDeltaA`/`slidingExpansionPreferred` wired into the map bake-off.
## Findings (numbers and facts, not vibes)
- Read table: `window.a > 1` + beats-raw-Brier + `deltaVarCal > 0` → recent sample underconfident, RES-cal candidate offline; `window.a ≈ 1` → identity fine, maps won't invent RES; unstable/flipping window.a → non-stationary, window for shadow diagnostics only; neither beats raw Brier → raise independent ranking first.
- Law: live eligibility stays map-free; never free-stretch `p' = 0.5 + k(p − 0.5)` without outcomes; `CALIBRATION_ADJUSTMENTS_ENABLED` stays OFF until live RES floors clear; sliding window is tracking, not a publish policy.
- Status: updated 2026-08-10, shadow only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration-diagnostics method — regime detection (underconfidence vs non-stationarity) relevant to the engine's calibration program, not football behavior.
## Engine-actionable? (yes/no + one-line what)
Yes (adjacent) — the window-vs-full OGD diagnostic (window=120 default) is a ready-made non-stationarity/underconfidence detector for the calibration layer; do not apply as a publish map.

# fable/DRIFT_BIAS_MONITORING.md
## What it is (1-2 sentences)
A short architecture note (632 bytes) defining the drift-and-bias monitoring layer: existing calibration drift in `packages/prediction-engine/src/calibration-drift.ts`, three new distribution checks (PSI, KL divergence, chi-square), and a parity guard (`assessSafeFootballSegmentParity`) restricted to a fixed set of football-context segments, explicitly blocking personal/protected attributes from model-governance axes without policy approval.

## Key metrics/methods (formulas where given, else "not specified")
- Existing: calibration drift in `packages/prediction-engine/src/calibration-drift.ts`.
- New distribution checks named (formulas not specified): `computePopulationStabilityIndex` (PSI), `computeKlDivergence` (KL divergence), `computeChiSquareDrift` (chi-square drift).
- New parity guard: `assessSafeFootballSegmentParity`.
- Safe football segments (fixed enumerated list): position, team, home_away, roof, surface, week, season, division, conference.
- No formulas, thresholds, gates, p-values, or accuracy figures are given in this file.

## Data sources named
- None named. The file is an interface/architecture sketch; it references only internal code functions and the segment list above.

## Findings (numbers and facts, not vibes)
- The monitoring layer has three parts: (1) existing calibration drift (`calibration-drift.ts`); (2) three new distribution checks — Population Stability Index, KL divergence, chi-square drift; (3) a parity guard `assessSafeFootballSegmentParity`.
- Parity is restricted to exactly 9 football-context segments: position, team, home_away, roof, surface, week, season, division, conference.
- Explicit policy boundary: "The parity check blocks non-football personal or protected segments. This keeps fairness diagnostics focused on football context and avoids turning sensitive personal categories into model governance axes without explicit policy approval."
- The file contains no implementation, no thresholds, no results — it is a specification pointer (function names + segment allowlist).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing lane): the parity-segment list (position, team, home_away, roof, surface, week, season, division, conference) is the approved dimensionality for calibration parity checks — any calibration review should cut along these axes and no others; this directly bounds the calibration/sizing program's diagnostic scope.
- OTHER (governance/QC): the PSI / KL / chi-square distribution-check trio is the specified toolkit for monitoring prediction-distribution drift between model versions; when backtesting wiring changes, these are the named functions to compare pre/post distributions.
- OTHER (policy): the explicit block on non-football personal/protected segments is a hard governance rule — do not build model-governance axes on sensitive personal categories without explicit policy approval; this constrains any "trust-target" segmentation work as well.
- UNCERTAIN: implementation status — the file names functions but gives no evidence they exist, are tested, or have thresholds; treat as a design spec until the code is verified.

## Engine-actionable? (yes/no + one-line what)
No — spec-pointer only; names the drift toolkit and parity axes but supplies no thresholds, formulas, or calibration results.

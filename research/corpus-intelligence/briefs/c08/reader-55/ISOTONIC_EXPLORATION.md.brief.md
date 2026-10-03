# docs/ops/ISOTONIC_EXPLORATION.md
## What it is (1-2 sentences)
An ops note on using isotonic regression (PAVA monotone map) for probability calibration in the prediction engine, with an explicit rule that it stays off until resolution improves and holdout floors are met.

## Key metrics/methods (formulas where given, else "not specified")
- Isotonic regression via monotone PAVA map (code: `isotonic-pava.ts`); compared against Platt scaling and temperature scaling in a bake-off (`calibration-map-bakeoff.ts`).
- Use isotonic when the reliability-curve shape is odd / levels are wrong; use Platt/Temp when tails are thin.
- Apply gate: keep OFF until Murphy resolution (Res) improves + holdout floors are met.
- Formula: not specified.

## Data sources named
- None named (references code files `isotonic-pava.ts` and `calibration-map-bakeoff.ts` only).

## Findings (numbers and facts, not vibes)
- Isotonic plateaus can destroy ranking if used for Kelly conviction while Res ≈ 0.
- Standing posture: isotonic is applied OFF until resolution improves and holdout floors are met.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — calibration method selection guidance; a warning that monotone maps plateau and break Kelly sizing when resolution is near zero.

## Engine-actionable? (yes/no + one-line what)
Yes — isotonic stays gated OFF until holdout floors + improved resolution are proven; bake-off code exists and thin-tail cases should route to Platt/Temp.

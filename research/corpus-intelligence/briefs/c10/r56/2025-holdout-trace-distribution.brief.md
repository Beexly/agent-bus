# reasoning/2025-holdout-trace-distribution.md
## What it is (1-2 sentences)
A diagnostic measurement (2026-09-26T23:37:55Z) of the GSE reasoning layer: `reasonAbout` was called once per sealed holdout row across 285 settled 2025 NFL games (weeks 1–22) via `traceHoldoutGame`. The result is a uniform INSUFFICIENT verdict, not a calibration study.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no model, no formula, no probabilities, no confidence field. Reliability diagram and Brier score were explicitly not computed because no confidence is emitted.
## Data sources named
The holdout manifest (285 games, 2025 season, "holdout" partition; each row has home/away moneylines, spread, total, scores, rest); `reasonAbout` / `traceHoldoutGame` (internal code paths, not the engine prediction model).
## Findings (numbers and facts, not vibes)
- 285/285 games concluded INSUFFICIENT; 0 WITHHELD, 0 ASSOCIATION_ONLY. Every per-game row: 0 sources, reason "no usable probability premise."
- The trace never received a probability premise: scores and `home_win` were NOT passed in; moneylines were NOT converted into probabilities; no stored signal probability, no sample count, no `reasonAbout` premise file.
- `withheldReasons` is empty on every row because the conclusion is INSUFFICIENT, not WITHHELD — the file stresses this is not a withhold-for-disagreement.
- No confidence field exists on the trace, so no reliability diagram or Brier score could be computed.
- This is a documented limitation of the reasoning-trace fixture, not evidence of engine predictive performance — the file is careful that this "is not a withhold for disagreement" and "context and refusals are not a forecast."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Uniform-INSSUFFICIENT verdict as honest QC record (refused to forecast without a premise rather than fabricating one) → TRUST-SIGNAL (integrity of the reasoning layer)
- Missing probability premise on holdout rows → OTHER (pipeline gap: holdout rows carry lines/scores but no stored signal probability or premise file)
## Engine-actionable? (yes — as a gap to close: give holdout rows a real probability premise (model signal + sample count) so the reasoning layer can be graded; do not treat the 285 INSUFFICIENT verdicts as engine performance evidence either way)

# fable/DRIFT_BIAS_MONITORING.md
## What it is (1-2 sentences)
A stub-level design note for drift and bias monitoring in the FABLE evidence layer: new pure functions (`computePopulationStabilityIndex`, `computeKlDivergence`, `computeChiSquareDrift`) plus a parity guard (`assessSafeFootballSegmentParity`) restricted to football-context segments only.
## Key metrics/methods (formulas where given, else "not specified")
Formulas not specified. Methods named: Population Stability Index (PSI), KL divergence, chi-square drift, and segment parity assessment. Existing calibration-drift implementation: `packages/prediction-engine/src/calibration-drift.ts`.
## Data sources named
None — references only engine modules.
## Findings (numbers and facts, not vibes)
- Safe football segments enumerated: position, team, home_away, roof, surface, week, season, division, conference (9 segments).
- Parity check explicitly blocks non-football personal or protected segments — fairness diagnostics stay in football context, no model-governance axes over sensitive personal categories without explicit policy approval.
- File is a skeleton (function names + segment list); no thresholds, implementations, or results.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Position/team/home_away/roof/surface/week/season/division/conference are listed only as fairness segments, not as predictive factors — OTHER (governance).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
No — design stub only; the actionable work (implementing PSI/KL/chi-square checks and parity guard) belongs to a builder under FABLE, but this file itself carries no method, data, or finding to wire.

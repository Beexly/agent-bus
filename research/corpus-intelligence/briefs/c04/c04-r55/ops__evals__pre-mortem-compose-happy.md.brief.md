# docs/ops/evals/pre-mortem-compose-happy.md
## What it is (1-2 sentences)
An eval fixture (surface: pre-mortem-pipeline, scenario: happy-path, status: pending-runner) specifying the happy-path behavior of `composePreMortem({ snapshot, pick, game })` on a canonical NBA pick (BOS -3.5, AWAY, model v6.0.4, BOS @ NYK). It pins which of the 9 failure-mode factor templates trigger, their severity ranking, and the 4-bullet cap across 10 pass criteria.

## Key metrics/methods (formulas where given, else "not specified")
- Factor trigger thresholds (each factor value vs. its threshold):
  - consensus: 0.72 > 0.6 → fires
  - depth: 0.68 > 0.55 → fires
  - lineMovement: 0.45 > 0.4 → fires
  - volatility: 0.22 > 0.5 → does NOT fire
  - venueForm: 0.68 > 0.6 → fires
  - scheduleStress: 0.74 > 0.6 → fires
  - restAdvantage: 0.81 > 0.65 → fires
  - crossMarket: 0.39 > 0.45 → does NOT fire
  - dataQuality: 0.95 — above 0.5 but above the 0.85 ceiling → does NOT fire
- Severity ranks (1 = highest): restAdvantage rank 1; lineMovement and scheduleStress rank 2 (tie, declaration order breaks ties); consensus rank 3; depth and venueForm rank 4.
- Output capped at 4 bullets; 6 fire, so final order: restAdvantage, lineMovement, scheduleStress, consensus; `warning` field `null` at 4+ bullets.
- Purity: composer must not mutate inputs (referential equality on factor reads); placeholders like `[home.short]`/`[away.short]` must be substituted (BOS, NYK present).

## Data sources named
- `PickSignalSnapshot.factors` (the engine's own factor store) — no external sources named.

## Findings (numbers and facts, not vibes)
- On the canonical fixture, 6 of 9 templates fire; output is exactly 4 bullets sorted by severityRank ascending, first bullet `factorKey === 'restAdvantage'` with team placeholders substituted, no placeholder syntax remaining, `warning === null`, `modelVersion === 'v6.0.4'`, valid ISO `generatedAt`, no non-triggered factor appears, inputs unchanged.
- Factor categories codified in the engine: consensus, depth, edge (2.7 in fixture), lineMovement, volatility, headToHead, venueForm, scheduleStress, restAdvantage, crossMarket, dataQuality.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME — the factor taxonomy (consensus/depth/lineMovement/venueForm/scheduleStress/restAdvantage/crossMarket) plus the severity ranking constitutes the engine's declared risk-framing vocabulary; the ranking restAdvantage > lineMovement ≈ scheduleStress > consensus > depth ≈ venueForm is a prioritization of which contextual edges dominate pre-game analysis.
- OTHER — restAdvantage (0.81) and scheduleStress (0.74) ranking highest reflects that rest/schedule context outranks pure consensus in the engine's pre-mortem doctrine.

## Engine-actionable? (yes/no + one-line what)
Yes — lift the 9-factor trigger thresholds and severity-rank ordering (restAdvantage rank 1, lineMovement/scheduleStress rank 2, consensus rank 3) as the baseline risk-factor taxonomy for the pre-mortem composer when wiring pre-game pick content.

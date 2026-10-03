# ops/evals/pre-mortem-compose-thin-coverage.md
## What it is (1-2 sentences)
Eval contract (status: pending-runner, created 2026-05-22 by claude) for the pre-mortem composer pipeline's thin-coverage scenario: when most factor scores are too low to trigger their failure-mode templates, the composer must output only the fired bullets and an explicit warning rather than padding. Defines exact factor values, trigger thresholds, sort order, and pass criteria for both a 2-bullet and 1-bullet edge case.

## Key metrics/methods (formulas where given, else "not specified")
- Input snapshot (PickSignalSnapshot.factors, pick NYK -1 moneyline, model v6.0.4, BOS @ NYK NBA): consensus 0.48; depth 0.52; edge 1.8; lineMovement 0.34; volatility 0.12; headToHead 0.05; venueForm 0.58; scheduleStress 0.55; restAdvantage 0.81 (only high); crossMarket 0.32; dataQuality 0.60 (borderline).
- Trigger thresholds (9 failure-mode templates): consensus ≥ 0.6 fires (0.48 does not); depth ≥ 0.55 (0.52 does not); lineMovement ≥ 0.4 (0.34 does not); volatility ≥ 0.5 (0.12 does not); venueForm ≥ 0.6 (0.58 does not); scheduleStress ≥ 0.6 (0.55 does not); restAdvantage ≥ 0.65 fires (0.81 fires); crossMarket ≥ 0.45 (0.32 does not); dataQuality in [0.5, 0.85] fires (0.60 fires).
- Only 2 bullets fire; after sort: restAdvantage (severityRank 1), dataQuality (severityRank 6).
- `MIN_BULLETS_FOR_HEALTHY = 2` — with 2 bullets, `warning` is null; with only 1 bullet (edge case, e.g. dataQuality = 0.95 ceiling), warning = `'Pre-mortem coverage thin — only 1 factor above contribution threshold.'`
- Pass criteria: 2-bullet scenario — bullets.length === 2, bullets[0].factorKey === 'restAdvantage', bullets[1].factorKey === 'dataQuality', warning === null; 1-bullet edge case — bullets.length === 1, exact warning string; both — consuming surfaces render correctly with warning populated, compliance scanner `status: 'green'`.
- Forbidden: padding bullets to reach the threshold; changing thresholds to "find" more bullets; mutating input; fabricating factor scores.

## Data sources named
None named (internal composer spec).

## Findings (numbers and facts, not vibes)
- The composer commits to its output rather than hedging: thin coverage is acknowledged explicitly via the warning field.
- Severity-rank ordering puts restAdvantage rank 1 and dataQuality rank 6.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Thin-evidence honest disclosure as a trust mechanism — surfaces admit low coverage instead of inflating output (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
Partially — factor trigger thresholds (0.6/0.55/0.4/0.5/0.65/0.45/[0.5,0.85]) and the MIN_BULLETS_FOR_HEALTHY=2 rule are concrete composer parameters a builder can wire; not a modeling input.

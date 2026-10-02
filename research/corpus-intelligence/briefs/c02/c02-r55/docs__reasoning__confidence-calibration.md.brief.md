# docs/reasoning/confidence-calibration.md

## What it is (1-2 sentences)
A one-page note documenting that confidence calibration was explicitly NOT computed for the reasoning trace: `reasonAbout` emits no confidence value, so there is no reliability diagram and no Brier score. The only scored number against 2025 outcomes is the spread-bucket gate measured separately in `gate-1910-08858-2025.md`, which is a gate measurement, not a calibration of the trace.

## Key metrics/methods (formulas where given, else "not specified")
- Metric explicitly rejected: Brier score of confidence, reliability diagram — neither produced.
- `confidenceIsProbability: false` — the aggregation trace emits a count ratio, not a probability, so scoring it against `home_win` would be a category error.
- Only scored number: the spread-bucket gate in `gate-1910-08858-2025.md` (gate measurement, not calibration of this trace).

## Data sources named
- 2025 outcomes (as the scored holdout for the spread-bucket gate).
- The aggregation trace / `reasonAbout` function output.

## Findings (numbers and facts, not vibes)
- No confidence calibration exists for the reasoning trace; `reasonAbout` does not emit confidence. [OTHER]
- The trace's aggregation emits a count ratio marked `confidenceIsProbability: false`. [TRUST-SIGNAL]
- No reliability diagram and no Brier score of confidence were produced. [TRUST-SIGNAL]
- The single scored number vs 2025 outcomes is the spread-bucket gate in `gate-1910-08858-2025.md` — explicitly a gate measurement, not calibration of the trace. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Findings tagged above: all TRUST-SIGNAL or OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — honesty audit signal: the trace's confidence number must never be published as a win probability (`confidenceIsProbability: false`); any calibration story is deferred to the spread-bucket gate only.

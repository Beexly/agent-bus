# ops/evals/calibration-training-weekly-insight-happy-path.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner, created 2026-05-22 by codex) for the `CALIBRATION_WEEKLY_INSIGHT` surface: Claude API generates a one-sentence weekly calibration insight from a populated calibration snapshot. Defines input fixtures, expected runtime behavior, forbidden behaviors, and six pass criteria.
## Key metrics/methods (formulas where given, else "not specified")
- Input fixture: Week 21 of 2026, 18 total estimates; 60-69 band: midpoint 65% est vs 63% actual, n=8; 70-79 band: midpoint 75% est vs 61% actual, n=10; NBA: n=12, OVER direction, delta 14.2%; MLB: n=6, WELL_CALIBRATED, delta 1.4%; SPREAD: n=11, OVER, delta 9.1%; TOTAL: n=7, WELL_CALIBRATED, delta -2.5%.
- Pass criteria: insightText plain text, one sentence, ≤25 words, `evaluateCalibrationInsightPolicy(insightText).allowed === true`, `usedClaude === true`, usage row with `surface: 'CALIBRATION_WEEKLY_INSIGHT'`, success true, errorKind null.
- Forbidden: betting advice, CTA, user comparisons, emoji, marketing language, markdown.
## Data sources named
None — fixture data only; the runtime calls `generateCalibrationWeeklyInsight(input, options)`.
## Findings (numbers and facts, not vibes)
- The fixture shows 70-79 confidence band overconfident by 14 points (75% est vs 61% actual on n=10) — the file's most actionable calibration pattern (INFERENCE: this is the fixture input, not a measured production result).
- NBA picks in fixture are 14.2% OVER-calibrated; spreads 9.1% OVER; MLB and totals near-calibrated (1.4%, -2.5%).
- Status `pending-runner`: the eval was never executed at time of writing (INFERENCE from status field).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — calibration infrastructure/eval spec for the pick pipeline; no player/coach/scheme content.
## Engine-actionable? (yes/no + one-line what)
No — it's an unexecuted eval spec for a calibration-insight surface, not engine research.

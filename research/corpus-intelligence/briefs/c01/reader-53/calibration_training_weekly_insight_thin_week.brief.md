# docs/ops/evals/calibration-training-weekly-insight-thin-week.md

## What it is (1-2 sentences)
Eval spec (pending-runner, created 2026-05-22 by codex) for the `calibration-training` surface's `WEEKLY_INSIGHT` template under a thin-week fallback scenario (week 21 of 2026, only 4 total calibration estimates, no sport or pick-kind with sample size ≥5). Defines that the runtime must return the deterministic fallback without calling Claude, and lists forbidden behaviors (no invented patterns, no win-rate claims, no CTA).

## Key metrics/methods (formulas where given, else "not specified")
- Fallback trigger: fewer than 5 calibration estimates available (here: 4); no per-sport or per-pick-kind sample ≥5.
- Expected output fields: `usedClaude: false`, `modelName: null`, insight text equals the deterministic thin-week fallback, no Claude API usage row.
- Pass criteria: `fetchImpl` is not called.

## Data sources named
- None.

## Findings (numbers and facts, not vibes)
- Test fixture: Week 21 of 2026, 4 estimates. Thin-week fallback must state insufficient data for a reliable pattern.
- Status: pending-runner (eval not yet executed at time of writing).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: demonstrates the calibration-honesty standard (no invented patterns on thin data) — relevant as a trust/first-party quality doctrine, not as sports intelligence.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**No** — eval spec only; no actionable sports-intelligence content.

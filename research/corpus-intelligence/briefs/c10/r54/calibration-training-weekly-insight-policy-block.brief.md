# docs/ops/evals/calibration-training-weekly-insight-policy-block.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner) for the calibration-training surface's WEEKLY_INSIGHT template, testing that runtime policy blocking rejects LLM-generated betting advice ("You should bet less on NBA spreads next week.") after Claude responds but before it reaches the product surface.
## Key metrics/methods (formulas where given, else "not specified")
- Input fixture: Week 21 of 2026, 18 total estimates, per-sport data shows NBA overconfidence, per-pick-kind data shows spread overconfidence.
- Expected: deterministic output validation throws `CalibrationInsightGenerationError`, records a failed `CALIBRATION_WEEKLY_INSIGHT` usage row (success: false, errorKind starting with `POLICY_`), blocked sentence preserved only in test fixtures/logs.
- Pass criteria: promise rejects with the error; no `insightText` returned; usage row has surface 'CALIBRATION_WEEKLY_INSIGHT', success false, errorKind `POLICY_*`.
## Data sources named
Claude API (weekly calibration snapshot → generated insight); `UserCalibrationSnapshot.insightText`; `recordUsage` telemetry.
## Findings (numbers and facts, not vibes)
- Forbidden: return the sentence, persist it as `insightText`, record the call as successful, or retry with a looser prompt.
- Created 2026-05-22 by codex; pending-runner status.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Output validation gate blocking non-compliant generated text before publish — TRUST-SIGNAL
- Calibration insights policy (no betting-advice phrasing) — OTHER
## Engine-actionable? (yes/no + one-line what)
No — eval specification for a product compliance guardrail, not engine signal or method.

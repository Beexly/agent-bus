# fable/red-team/MODEL_RISK_RED_FLAGS.md
## What it is (1-2 sentences)
A six-bullet red-team checklist of model-risk red flags: no measured improvement, small-fixture-only results, possible leakage without protocol, segment drift not tied to replay windows, MC Dropout blocked pending runtime approval, and unvalidated evaluator models.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas or thresholds; each bullet is a qualitative risk flag. Methods named in passing: MC Dropout (blocked pending runtime approval); segment drift tied to replay windows (expected discipline not yet met).

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- "no measured improvement" — any model claim without a measured delta is flagged.
- "small fixture only" — results validated only on small fixtures are flagged.
- "possible leakage without protocol" — leakage risk must be ruled out via an explicit protocol.
- "segment drift not tied to replay windows" — drift analysis must be anchored to replay windows.
- "MC Dropout blocked pending runtime approval" — MC Dropout usage is currently not approved for runtime.
- "evaluator models not validated" — evaluator/LLM-judge models require their own validation.
- No numbers, dates, or magnitudes in the file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "no measured improvement" / "small fixture only" — TRUST-SIGNAL (anti-theater model-QC checklist; maps directly to Garrett's audit-receipts mandate)
- "possible leakage without protocol" — TRUST-SIGNAL (data-leakage discipline for engine backtests)
- "segment drift tied to replay windows" — OTHER (evaluation-discipline item; INFERENCE: "replay windows" likely refers to FABLE's evidence replay, not game film replay)
- MC Dropout blocked pending runtime approval — OTHER (uncertainty-quantification method on hold)
- Unvalidated evaluator models — TRUST-SIGNAL (LLM-as-judge claims require independent validation)

## Engine-actionable? (yes/no + one-line what)
no — QC checklist with no thresholds or formulas; the "measured improvement" and "leakage protocol" items reinforce existing engine calibration discipline but add no new method.

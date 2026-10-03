# docs/fable/validation/CALIBRATION_PROTOCOL.md
## What it is (1-2 sentences)
A short governance checklist for the FABLE validation lane: the mandatory record required before any calibration-gain claim can be made.

## Key metrics/methods (formulas where given, else "not specified")
- Required record fields: baseline Brier; candidate Brier; ECE definition; sample count; split method; bootstrap or confidence interval when feasible; interpretation; decision.
- No formulas specified. Rule: "No calibration gain claim without this record."

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- The lane explicitly gates calibration claims on a pre-registered record — a process control, not a finding. No numerical results are in this file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None applicable. Tagged: OTHER (calibration governance standard).

## Engine-actionable? (yes/no + one-line what)
Yes — adopt as a process guardrail: every engine calibration-gain claim must record baseline/candidate Brier, ECE definition, n, split method, CI, interpretation, decision before publication.

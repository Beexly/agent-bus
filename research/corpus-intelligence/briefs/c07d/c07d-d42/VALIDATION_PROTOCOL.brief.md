# fable/validation/VALIDATION_PROTOCOL.md
## What it is (1-2 sentences)
A 16-line mandatory checklist stating that every model or metric improvement must document 11 specific fields before it can be accepted — an evidence-recording protocol, not a result.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). The 11 required fields are: baseline, hypothesis, dataset or fixture, split method, leakage check, metric, confidence interval or bootstrap when feasible, result, interpretation, failure mode, decision.
## Data sources named
None named.
## Findings (numbers and facts, not vibes)
- Every model or metric improvement requires all 11 fields; no numeric thresholds are set in this file.
- "If there is not enough data, record the minimum data needed." — i.e., insufficient data is itself a reportable finding, not a skip.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Directly serves the calibration/sizing and audit-receipts programs: this is the 11-field record the engine should demand of every module/gate before any ADOPT/ADAPT decision — the same fields (baseline, split, leakage check, CI, failure mode) the 179 gate headers in GATE-SPECS.md already require, so this protocol is the compact spec for how a gate evaluation must be reported once walk-forward data exists.
## Engine-actionable? (yes/no + one-line what)
Yes — enforce this exact 11-field template on every future gate evaluation before any claim is shipped or published.

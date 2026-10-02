# fable/validation/VALIDATION_PROTOCOL.md
## What it is (1-2 sentences)
The FABLE validation protocol: a mandatory 11-element checklist (baseline, hypothesis, dataset/fixture, split method, leakage check, metric, confidence interval or bootstrap when feasible, result, interpretation, failure mode, decision) for every model or metric improvement claim.
## Key metrics/methods (formulas where given, else "not specified")
not specified — the protocol names elements (CI/bootstrap "when feasible", leakage check, split method) without prescribing formulas.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
Every model/metric improvement requires all 11 items: baseline, hypothesis, dataset or fixture, split method, leakage check, metric, confidence interval or bootstrap when feasible, result, interpretation, failure mode, decision. If data is insufficient, the minimum data needed must be recorded instead.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the protocol mandates leakage checks, failure modes, and recorded decisions on every improvement claim — the template against which all engine claims should be graded.
## Engine-actionable? (yes/no + one-line what)
yes — adopt as the intake template for all engine wiring claims: any module wired into the engine should arrive with baseline, leakage check, CI/bootstrap, failure mode, and decision recorded per this protocol.

# fable/aws/sagemaker-adrs/ADR-0002-when-to-use-sagemaker-processing.md
## What it is (1-2 sentences)
Architecture Decision Record defining when SageMaker Processing is appropriate for the FABLE project: deferred to later, only for repeatable batch jobs that outgrow local execution, with owner approval and multiple gates.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Gate method: use only when an approved dataset exists, job duration/scale exceeds local workflow, and reproducibility matters for partner review; reject when local scripts suffice, source rights unknown, or no reproducible dataset manifest exists. Rollback path: run local script on fixture/replay data.
## Data sources named
None (fixture/replay data referenced as rollback path).
## Findings (numbers and facts, not vibes)
- Decision: use later only for repeatable batch jobs that outgrow local execution.
- Current blocks: no approved cloud dataset, no cost approval, no processing job definition.
- Additional gates: scoped IAM role and deletion path, dry-run artifact, source rights allow AWS processing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — infra decision record; no sports content.
## Engine-actionable? (yes/no + one-line what)
No — infrastructure gating doc, no engine signal.

# docs/fable/aws/sagemaker-adrs/ADR-0005-when-to-use-model-monitor-clarify.md
## What it is (1-2 sentences)
An architecture decision record rejecting SageMaker Model Monitor and Clarify "for now": the decision is to mirror monitoring concepts locally first (PSI/KL/chi-square drift checks and safe segment parity reports), since no hosted model or recurring AWS prediction stream exists to monitor.
## Key metrics/methods (formulas where given, else "not specified")
Method names only, no formulas: local PSI (population stability index), KL divergence, chi-square tests for drift; safe segment parity reports for fairness/explainability. No thresholds, baselines, or numbers given.
## Data sources named
None named — the ADR specifies prerequisites (deployed model, prediction logs, approved monitoring data, monitored baselines) that are explicitly noted as absent.
## Findings (numbers and facts, not vibes)
- Decision: "Mirror concepts locally first."
- Use conditions: deployed model exists; prediction logs exist; approved monitoring data exists.
- Reason for rejection now: no hosted model exists; no hosted inference or recurring AWS prediction stream exists.
- Rollback path: local PSI/KL/chi-square and safe segment parity reports.
- Additional gates: monitored baselines exist; fairness/explainability questions are owner-approved; report access controls are documented; owner approval needed (yes).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: MLOps monitoring decisions for the FABLE/AWS lane.
- TRUST-SIGNAL (secondary): drift monitoring (PSI/KL/chi-square) and segment parity are calibration/QC discipline for engine predictions once hosted inference exists. INFERENCE on framing.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt PSI / KL divergence / chi-square drift checks plus segment parity reports as the local model-monitoring template for engine predictions once prediction logs exist, before ever adopting SageMaker Model Monitor.

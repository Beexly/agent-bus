# docs/fable/aws/AWS_SAGEMAKER_MLOPS_PLAN.md
## What it is (1-2 sentences)
A gated 0–6 MLOps adoption ladder for AWS SageMaker (updated 2026-07-03), defining trigger, evidence, cost, IAM, data-rights, and rollback requirements per level. Current state is explicitly Level 0/1 only: no SageMaker resources configured anywhere.
## Key metrics/methods (formulas where given, else "not specified")
No formulas. The ladder is a process gate, not a model: Level 0 ($0, local tests + replay docs) → Level 1 (feature schema, model card, calibration report) → Level 2 (S3/Athena lake design, docs-only) → Level 3 (training spike, owner-set cost cap) → Level 4 (Model Registry + model cards with lineage/approval) → Level 5 (Model Monitor/Clarify on prediction logs) → Level 6 (governed partner-grade MLOps with audit + exit plan). Rejection criteria per level (e.g., Level 1 rejects on non-reproducible artifacts; Level 3 on insufficient local baseline).
## Data sources named
AWS SageMaker official docs: Model Registry, Pipelines, Model Cards, Model Monitor, Clarify (5 docs.aws.amazon.com URLs). No sports data sources.
## Findings (numbers and facts, not vibes)
- Current state: Level 0 and Level 1 are the only supported levels; no endpoint, training job, processing job, feature group, registry, monitor, or Clarify job exists.
- Before Level 3+: owner must approve ML runtime, AWS account/profile/region, monthly cost ceiling, source/data-rights marker, IAM role owner, and rollback owner.
- Explicitly NOT claimed: any SageMaker training job, processing job, endpoint, feature group, or registry entry in AWS.
- No-cost repo actions prescribed: local model cards, artifact manifests, drift/calibration outputs mapped to future Monitor concepts.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No SageMaker resources exist; AWS MLOps is a ladder, not a shortcut to performance claims — OTHER (infra/governance, no sports content).
- Owner-set cost ceilings and scoped IAM roles required before any paid ML runtime — OTHER.
- Local artifacts (model cards, calibration reports, lineage) must exist before any cloud step — TRUST-SIGNAL (evidence-discipline doctrine for any claim the engine makes).
## Engine-actionable? (yes/no + one-line what)
No — this is infra governance with no sports data, metrics, or model content; it only confirms no cloud ML cost exists yet.

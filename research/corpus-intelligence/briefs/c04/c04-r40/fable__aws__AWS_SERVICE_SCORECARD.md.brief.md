# docs/fable/aws/AWS_SERVICE_SCORECARD.md
## What it is (1-2 sentences)
A rejection-first AWS service decision surface (dated 2026-07-03): a ~44-row table scoring AWS services on use case, repo fit, minimum useful implementation, no-cost spike path, cost/IAM/data/legal/ops/coupling/credibility risks, rejection criteria, adoption trigger, and current decision — plus Well-Architected pillar checks and success-metric targets.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — qualitative risk ratings (low/medium/high) and decision labels (reject for now, monitor, no-cost spike, preview-only spike later, adopt later). Decision meanings are defined in-file; "Adopt now" is not used anywhere. Well-Architected cost gate: `FABLE_AWS_MAX_MONTHLY_COST_USD=0` — spend ceiling explicit, defaulted to zero.

## Data sources named
No live data sources; cross-references: docs/fable/aws/AWS_AMPLIFY_INVESTIGATION.md, AWS_MODEL_LEVERAGE_MAP.md, AGENTCORE_SECURITY_FIREBREAK.md, AWS_SAGEMAKER_MLOPS_PLAN.md, AWS_CLEAN_ROOMS_PARTNERSHIP_PLAN.md, fixtures/AWS_LOCAL_FIXTURE_LIBRARY.json, governance-os/SHADOW_CONTROL_TOWER_BLUEPRINT.json.

## Findings (numbers and facts, not vibes)
- 44 services evaluated; every row has a rejection criterion (success-metric target: 100%).
- Decisions summary (from the table): ~11 "reject for now" (incl. Route 53, Cognito, AppSync, Neptune, Entity Resolution), ~28 "monitor", no-cost/design spikes (Lambda, S3, Bedrock AgentCore as no-cost design spike), preview-only spike later (Amplify), and "adopt later" (SageMaker AI, Model Registry, Model Monitor, Clarify, CloudWatch, CloudTrail, Cost Explorer, Budgets, IAM Access Analyzer, Clean Rooms).
- No row authorizes AWS credentials, CLI, deploys, DNS, model calls, storage, data sharing, or paid resources.
- Success metrics: well_architected_pillars_covered 6/6, local_fixture_types_present 5/5, shadow_control_tower_guardrails ≥6, generated_wa_lens_checks 6/6, live_aws_action_count 0, paid_resource_count 0, unsupported_claim_count 0 scanner hits, scorecard_rows_with_rejection_criteria 100%.
- Personal AWS Learning Feed section: learning proof starts in docs/personal/aws/, safe schema at schemas/fable/personal-learning-evidence.schema.json, GSE impact mapping at docs/personal/aws/AWS_TO_GSE_CROSSWALK.md; "It is not account proof and does not authorize AWS actions."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings: OTHER (cloud-infrastructure decision inventory; no sports content). (INFERENCE: the rejection criteria — e.g. "no mature model artifacts" for SageMaker AI, "no recurring training process" for SageMaker Pipelines, "feature volume too small" for Feature Store — describe repo-state preconditions for MLOps adoption that would flip once the engine produces mature artifacts, but this is ops planning, not engine modeling.)

## Engine-actionable? (yes/no + one-line what)
No — an infra-decision inventory; only becomes relevant if GSE later needs AWS-hosted training/inference.

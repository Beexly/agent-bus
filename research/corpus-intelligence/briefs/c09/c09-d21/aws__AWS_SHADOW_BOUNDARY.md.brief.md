# aws/AWS_SHADOW_BOUNDARY.md
## What it is (1-2 sentences)
Defines an exact-path governance boundary for `docs/aws` and `infra/aws-shadow`: only local, non-live AWS-shaped artifacts are allowed; all live AWS actions (deployments, billing, credentials, inference) are forbidden until an owner-approved promotion plan exists.
## Key metrics/methods (formulas where given, else "not specified")
not specified — procedural boundary, no metrics or formulas.
## Data sources named
None. References canonical artifact locations only: `docs/fable/aws`, `infrastructure/aws`, and local validation via Node/TypeScript/Vitest/FABLE scripts.
## Findings (numbers and facts, not vibes)
- Allowed: local architecture maps, compatibility indexes, synthetic JSON fixtures, documentation-grade ASL/EventBridge/Guardrails/AgentCore/SageMaker/Clean Rooms/Control Tower/CDK-shaped artifacts, links to canonical docs.
- Forbidden: AWS credentials, account IDs, real ARNs, deployment-target regions, live AWS CLI commands, CDK account init/deploy, DNS changes, hosted inference activation, Bedrock invocation, SageMaker jobs, Clean Rooms collaboration creation, S3 bucket creation, IAM mutation, billing/budget/Cost Explorer config.
- Promotion gate requires owner approval of a separate implementation plan naming: service, account, spend cap, rollback path, source-rights classification, IAM scope, data retention, monitoring, test plan, legal/compliance reviewer.
- Until the gate is passed, the only valid state is "local shadow evidence."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure governance — no player/team/coaching/scheme intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — infrastructure policy doc; contains no signals for prediction or modeling.

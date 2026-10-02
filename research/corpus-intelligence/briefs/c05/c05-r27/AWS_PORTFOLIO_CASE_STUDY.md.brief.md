# personal/aws/AWS_PORTFOLIO_CASE_STUDY.md
## What it is (1-2 sentences)
A zero-spend AWS learning portfolio: evaluates AWS services for sports-intelligence use under hard constraints (no credentials in repo, no live mutation, no deploy, no paid resources) and records adopt/reject/spike decisions per service. Nothing live is claimed; all artifacts are local mocks and docs.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Cost guardrail: monthly AWS cost cap defaults to zero; deploys default off; paid resources default off.
## Data sources named
AWS services evaluated: Amplify (preview hosting), S3 (artifact storage), IAM (least privilege), CloudWatch/CloudTrail/Cost Explorer/Budgets, Bedrock + AgentCore (governed agents), SageMaker (MLOps artifacts), Clean Rooms (partner-safe aggregates). Evidence artifacts listed: docs/fable/aws/AWS_SERVICE_SCORECARD.md, AWS_COST_SECURITY_GATES.md, AWS_AMPLIFY_INVESTIGATION.md, AWS_BEDROCK_AGENTCORE_PLAN.md, AWS_SAGEMAKER_MLOPS_PLAN.md, AWS_CLEAN_ROOMS_PARTNERSHIP_PLAN.md, schemas/fable/personal-learning-evidence.schema.json.
## Findings (numbers and facts, not vibes)
- Rejected: full hosting migration (product/infra risk), DNS changes (blast radius), hosted training (cost/data-rights), paid model calls (before local evaluators), live Clean Rooms (needs partner/contract/legal), cloud storage of source data (blocked until source rights permit).
- Security signals that raise risk: IAM wildcard, admin, public-resource, broad PassRole.
- "What is not claimed" list: no live deployment, no account readiness, no paid-model or hosted-training results, no legal approval, no partner, no badge/course completion without public evidence.
- Next steps are all local mocks: S3 storage-policy mock, SageMaker model-card mock, Bedrock/AgentCore fake-agent permission test plan.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra/ops — a zero-spend cloud-evaluation discipline; no sport or model intelligence.
## Engine-actionable? (yes/no + one-line what)
no — governance/portfolio doc; its local-first discipline (no paid calls before local deterministic evaluators) is already the repo's default posture.

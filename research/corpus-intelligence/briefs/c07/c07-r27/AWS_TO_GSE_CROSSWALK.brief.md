# personal/aws/AWS_TO_GSE_CROSSWALK.md
## What it is (1-2 sentences)
A 12-row crosswalk mapping personal AWS learning areas (S3, EC2, VPC, RDS, cost ops, Cloud Practitioner, IAM, Amplify, Bedrock/AgentCore, SageMaker, Clean Rooms, re/Start) to repo-safe GSE/FABLE improvements — each row naming the affected system, the practical improvement, the risk reduced, a no-cost artifact to build, and the owner decision still required.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas, no numbers). Every row's posture: owner must approve any real action; only mock/worksheet/checklist artifacts may be built at zero cost.
## Data sources named
- Repo targets: `docs/fable/aws/AWS_COST_SECURITY_GATES.md`, `docs/fable/DATA_LEGAL_BOUNDARIES.md`, `docs/fable/aws/AWS_IMPLEMENTATION_SPIKES.md`, `AGENT_TOOL_PERMISSION_MATRIX.md`, `AWS_SERVICE_SCORECARD.md`, `AGENTCORE_SECURITY_FIREBREAK.md`, `AWS_AMPLIFY_INVESTIGATION.md`, `AWS_BEDROCK_AGENTCORE_PLAN.md`, `AWS_MODEL_ROUTER_DESIGN.md`, `AWS_SAGEMAKER_MLOPS_PLAN.md`, `AWS_CLEAN_ROOMS_PARTNERSHIP_PLAN.md`, `apps/web/lib/fable/aws-decision-engine.ts`, `docs/personal/aws/AWS_RESTART_APPLICATION_BOUNDARY.md`, `docs/personal/aws/AWS_PORTFOLIO_CASE_STUDY.md`.
## Findings (numbers and facts, not vibes)
- 12 learning areas mapped, one row each, each with a concrete no-cost artifact: S3 bucket-policy mock + artifact retention checklist; EC2 cost worksheet with no launch command; VPC diagram + no-deploy threat model; RDS/Aurora comparison note with rollback path; budget-alarm runbook draft; service-fit glossary; IAM policy review checklist with fake policies; Amplify build-settings mock; local fake-agent permission test plan; local model-card and registry-shaped manifest; synthetic collaboration + query-rule examples for Clean Rooms; public-safe career narrative.
- Core cost doctrine: better RDS/Aurora REJECTION criteria "while current Postgres path is enough" (avoid premature migration); kill-switch planning and spend ceilings in cost/security gates; Claude API call tracking as an analogous spend gate (see migration spec M-4.4).
- Core security doctrine: least-privilege IAM vocabulary, wildcard/admin/PassRole rejection language, agent firebreaks and tool-permission matrix for Bedrock/AgentCore concepts.
- Core partnership doctrine: AWS Clean Rooms as the model for partner-safe collaboration — aggregate query rules without raw data exchange (partner credibility without unsafe sharing).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: IAM least-privilege, agent permission matrices, firebreaks, data-legal boundaries.
- OTHER: infra/cost ops — spend ceilings, kill switches, rejection criteria for premature hosted compute/migrations.
## Engine-actionable? (yes/no + one-line what)
Partial — no engine signals in this doc; engine-relevant only as operational hygiene: adopt the no-cost governance artifacts (budget-alarm runbook, IAM policy review checklist, fake-agent permission test plan) before any live cloud or paid-model spend, and use the Clean Rooms query-rule pattern for any future partner data exchange.

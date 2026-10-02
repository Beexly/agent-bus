# docs/fable/aws/AWS_AGENT_LAB_PLAYBOOK.md
## What it is (1-2 sentences)
Updated 2026-07-03: a permission playbook for designing AWS-aware agents for GSE/FABLE without granting any agent AWS authority — seven agent classes with allowed/blocked scopes, evidence outputs, and local test artifacts.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Method: agent-class permission matrix + claim labeling taxonomy. Every agent output must label claims as one of: `observed`, `inferred`, `assumed`, `blocked`, `requires_owner_approval`, `requires_live_aws_verification`.
## Data sources named
No external data sources named; tests use local fixtures (fake policies, fake Bedrock actions, synthetic SQL examples, scorecard fixtures, model-card fixtures, fake-agent transcripts, skeleton README).
## Findings (numbers and facts, not vibes)
- 7 agent classes defined: AWS service-fit reviewer, cost sentinel, IAM reviewer, Amplify preview planner, SageMaker artifact steward, Bedrock tool-governance reviewer, Clean Rooms scenario designer.
- 11 tool classes with defaults: repo read/edit allowed with guardrails; AWS read-only discovery, AWS write, AWS deploy, AWS billing, AWS IAM, secret read, paid model calls, partner data access — ALL blocked by default.
- 5 local test ideas (fake policy `Action: "*"` must be flagged high risk; Bedrock action without spend cap must be refused; Clean Rooms row-level query must be rejected; Amplify DNS change must be blocked; SageMaker training without local baseline must be rejected).
- 7 exit criteria before any live AWS: owner approves account/profile/region; action tier documented; monthly cost cap exists; rollback owner named; no secrets printed or committed; data rights known; local fake-agent tests pass.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the six-label claim taxonomy (observed/inferred/assumed/blocked/requires_owner_approval/requires_live_aws_verification) is directly reusable as the engine's honest calibration-state labeling language.
- OTHER: cost-sentinel pattern (estimate billing dimensions from docs, recommend a cap, never touch billing APIs) mirrors the engine's no-spend safety doctrine.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the six-label claim taxonomy for engine signal/prediction labeling and the seven exit criteria as the checklist before any paid infra spend.

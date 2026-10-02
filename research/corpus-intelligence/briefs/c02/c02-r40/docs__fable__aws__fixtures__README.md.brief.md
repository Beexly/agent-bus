# docs/fable/aws/fixtures/README.md
## What it is (1-2 sentences)
README for the AWS local fixture library (updated 2026-07-03): no-cost AWS mocks, fixtures, and refusal cases for GSE/FABLE testing with zero network or paid-resource dependency.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas or metrics.
## Data sources named
- Primary artifact: `AWS_LOCAL_FIXTURE_LIBRARY.json` (fixture JSON, not read in this task).
- Validation commands: `npm run fable:aws-fixtures` and `npm run test --workspace=apps/web -- lib/fable/aws-local-fixtures.test.ts`.
## Findings (numbers and facts, not vibes)
- Boundary (6 items): no AWS credentials, no AWS CLI calls, no network dependency, no deploy, no paid resource, no live provider data.
- Fixture library covers 5 areas: local S3 evidence-storage policy mock; fake IAM policy review cases; local SageMaker model-card fixture; Bedrock/AgentCore fake-agent refusal cases; Clean Rooms synthetic scenario cases. [OTHER]
- Every fixture maps to at least one AWS Well-Architected pillar, and the full library must cover all 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability. [TRUST-SIGNAL, OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Refusal-case fixtures (Bedrock/AgentCore fake-agent refusal): [TRUST-SIGNAL] — agent-refusal testing is a guardrail mechanism relevant to autonomous agent safety.
- Evidence-storage policy mock + Well-Architected coverage: [OTHER]
## Engine-actionable? (yes/no + one-line what)
no — test-fixture inventory with no data, formulas, or sports content.

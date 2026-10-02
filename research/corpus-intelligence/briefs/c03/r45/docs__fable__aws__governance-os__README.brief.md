# docs/fable/aws/governance-os/README.md
## What it is (1-2 sentences)
A README for a local, zero-cost simulation of AWS governance (Control Tower, Config, CloudFormation Guard, SageMaker governance, Clean Rooms, CDK, Well-Architected) for GSE/FABLE, updated 2026-07-03, touching no real AWS account.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — describes artifacts and validation commands, not methods.
## Data sources named
None (borrows concepts from AWS services, no sports data).
## Findings (numbers and facts, not vibes)
- Artifacts: `SHADOW_CONTROL_TOWER_BLUEPRINT.json` (landing-zone, OU, guardrail, agent, drift-card, Clean Rooms, CDK fixture model) and `guard-rules/fable-shadow-control.guard` (CloudFormation Guard-style policy blueprint for local evidence).
- Validation: `npm run fable:aws-governance` and `npm run test --workspace=apps/web -- lib/fable/aws-governance-os.test.ts`.
- Hard boundaries: no AWS credentials, no AWS CLI, no Control Tower landing zone, no AWS Config recorder, no cfn-guard binary required, no CDK deploy, no paid Bedrock/SageMaker/Clean Rooms/storage action.
- Stated purpose: turn AWS governance vocabulary into local evidence discipline before any owner-approved cloud step exists.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Turn AWS governance vocabulary into local evidence discipline" — TRUST-SIGNAL (governance-before-claims doctrine; evidence gates before any public statement).
- Zero-cost, zero-credential simulation with hard no-AWS boundaries — OTHER.
## Engine-actionable? (yes/no + one-line what)
No — governance simulation scaffolding; no sports signals or model logic.

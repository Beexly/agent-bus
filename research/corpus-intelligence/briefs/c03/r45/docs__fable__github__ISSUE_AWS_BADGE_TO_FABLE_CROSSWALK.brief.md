# docs/fable/github/ISSUE_AWS_BADGE_TO_FABLE_CROSSWALK.md
## What it is (1-2 sentences)
A GitHub issue spec requiring an AWS-badge-to-FABLE crosswalk: every AWS learning area must map to a GSE/FABLE improvement, preventing ungrounded AWS claims.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no metrics; a mapping table with per-row fields.
## Data sources named
AWS Educate learning areas: S3, EC2, VPC, RDS, Cloud Operations/Cost, Cloud Practitioner, IAM/security, Amplify, Bedrock/AgentCore, SageMaker, Clean Rooms, re/Start.
## Findings (numbers and facts, not vibes)
- Acceptance criteria: crosswalk covers all 12 listed AWS learning areas; each row includes learning output, system affected, repo path, improvement, risk reduced, no-cost artifact, and owner decision.
- Constraint: "no row claims completion unless public proof is owner-approved."
- Risks named: learning list goes stale; no-cost artifacts never built after learning; public proof added without redaction.
- Validation: `npm run fable:evidence`, `npm run fable:claims`, `git diff --check`.
- Owner decisions: choose which learning proofs become public; approve any future AWS account discovery separately.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "No row claims completion unless public proof is owner-approved" — TRUST-SIGNAL (completion claims gated on owner-approved public proof; the same discipline behind Garrett's audit-challenge on unverified "done" claims).
- Every learning area must map to a concrete repo-path improvement — OTHER (learn-and-wire discipline: knowledge must land in code, echoing the engine's wire-first sequencing).
- Risks named (stale lists, unbuilt artifacts, unredacted public proof) — TRUST-SIGNAL (naming the ways claims rot, rather than letting them).
## Engine-actionable? (yes/no + one-line what)
No — this is a learning-to-repo mapping discipline document; actionable value is the pattern (completion = owner-approved public proof), which overlaps the claim-evidence ledger finding above.

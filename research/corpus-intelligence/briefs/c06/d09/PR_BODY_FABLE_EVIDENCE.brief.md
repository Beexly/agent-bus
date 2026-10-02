# fable/github/PR_BODY_FABLE_EVIDENCE.md
## What it is (1-2 sentences)
The PR-body doc for a FABLE evidence + AWS guardrails PR: adds claim-verification, evidence harness, red-team review, schemas, local/CI guard surfaces, a public `/fable` app route, and a no-cost AWS local governance OS (S3/IAM/SageMaker/Bedrock/Clean Rooms fixtures, Shadow Control Tower mock, Well-Architected lens checks) — all local, no AWS credentials, model calls, deploys, DNS, or paid resources.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Acceptance gates listed:
- `npm run fable:evidence` passes; claim ledger validates.
- Unsupported terms blocked unless downgraded or evidence-tied.
- AWS gates default off; AWS decision engine blocks deploy, paid model calls, destructive actions, missing data rights, broad IAM risk, production/DNS changes by default.
- Six Well-Architected pillars each get generated local lens checks.
- AWS service scorecard includes decision explanation, Well-Architected pillar checks, and success metrics.
- Guardrails named: preventive, detective, and proactive shadow guardrails.
- Test commands: `npm run fable:evidence`, `fable:aws-fixtures`, `fable:aws-governance`, `fable:aws-intel`, `fable:demo`, targeted FABLE Vitest tests, `npm run typecheck --workspaces --if-present`.
- Schemas named: `schemas/fable/personal-learning-evidence.schema.json`, `schemas/fable/aws-local-fixture-library.schema.json`.
- Governance OS file: `apps/web/lib/fable/aws-governance-os.ts`.
- Workflow: `.github/workflows/fable-evidence.yml`.

## Data sources named
None external. "Synthetic Clean Rooms NFL cases" are mentioned (synthetic fixtures, not a real data source). Historical OneNote/prompt hype claims are downgraded in the claim ledger. Explicit negatives: no personal secrets, no AWS account used, no paid resources, no live deployment; public-data demo remains fixture-only.

## Findings (numbers and facts, not vibes)
- Claim-ledger mechanic: "Unsupported terms are blocked unless downgraded or evidence-tied."
- Manual publication commands if CLI auth blocked: `gh auth login`; `git push -u origin codex/fable-nfl-evidence-integration`; `gh pr create --base main --head codex/fable-nfl-evidence-integration --title "feat(fable): add evidence and AWS guardrails" --body-file docs/fable/github/PR_BODY_FABLE_EVIDENCE.md`.
- Personal learning bridge lives under `docs/personal/aws/`; badges/courses are public proof only after owner approval.
- No concrete numbers anywhere — all acceptance criteria are binary pass/block checks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Claim-ledger downgrade mechanic (hype claims downgraded unless evidence-tied) — TRUST-SIGNAL (a reusable evidence-tiering pattern for engine claims/picks)
- Synthetic Clean Rooms NFL cases as fixture-only test data — SCHEME (testing harness concept, not football scheme)
- AWS decision engine default-block rules (deploy, paid calls, destructive actions, data rights, IAM risk) — OTHER (cloud infra governance)
- Six Well-Architected pillar lens checks — OTHER

## Engine-actionable? (yes/no + one-line what)
no — evidence-governance process doc; the claim-ledger pattern is worth knowing for internal rigor but nothing here wires into projections or models.

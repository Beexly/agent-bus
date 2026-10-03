# docs/personal/aws/README.md
## What it is (1-2 sentences)
Governance README for Garrett's personal AWS learning bridge: converts AWS course/badge work into repo-safe public evidence for GSE/FABLE while keeping personal learning outside the repo unless a proof artifact is approved for public use.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — governance and evidence-contract documentation. Verification hook: `npm run fable:evidence`.

## Data sources named
AWS course names, AWS badge names, public AWS course/badge links (post-owner-approval), approved screenshot paths (post-manual-review).

## Findings (numbers and facts, not vibes)
- Allowed in this folder: AWS course names, badge names, public course/badge links after owner approval, approved screenshots after manual review, learning summaries, GSE/FABLE impact notes, no-cost repo actions.
- Explicitly forbidden: passwords, personal emails (unless owner-approved for public use), payment data, AWS account IDs, access keys, secret keys, session tokens, private application details, personal form data from re/Start or other programs, live AWS resource names from a private account.
- Evidence contract files: `docs/personal/aws/personal-learning-evidence.example.json`, `schemas/fable/personal-learning-evidence.schema.json`, `apps/web/lib/fable/evidence/schemas.ts`, `apps/web/lib/fable/evidence/validators.ts`.
- Navigation templates: `AWS_PERSONAL_PROGRESS_TEMPLATE.md`, `AWS_BADGE_EVIDENCE_TEMPLATE.md`, `AWS_TO_GSE_CROSSWALK.md`, `AWS_LEARNING_TO_REPO_ACTIONS.md`, `AWS_PORTFOLIO_CASE_STUDY.md`, `AWS_RESTART_APPLICATION_BOUNDARY.md`.
- Boundary: this folder does not prove AWS account access, does not prove live cloud readiness, and does not authorize deploys, paid resources, or credential use.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — personal infra-learning governance; only tangentially related to engine infra hygiene (cost gates, IAM posture).

## Engine-actionable? (yes/no + one-line what)
No — personal learning governance doc; no signal, metric, or method for the engine.

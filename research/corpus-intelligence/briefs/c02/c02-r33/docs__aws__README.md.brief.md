# docs/aws/README.md
## What it is (1-2 sentences)
A compatibility-index pointer doc for `docs/aws` that redirects readers to the canonical FABLE/AWS evidence layer (docs/fable/aws/ and infrastructure/aws/) and explicitly forbids live AWS actions, credentials, DNS changes, deploys, paid resources, SDK additions, or claims that AWS is configured.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no metrics, formulas, or methods; only 4 local validation commands listed: `npm run guard:aws-compatibility-index`, `npm run fable:aws-gates`, `npm run fable:aws-fixtures`, `npm run fable:aws-governance` (explicitly stated these do NOT prove AWS account access, funding, availability, deployment readiness, or legal clearance).
## Data sources named
- docs/fable/aws/README.md, CLAUDE_AWS_HANDOFF.md, AWS_SERVICE_SCORECARD.md, AWS_COST_SECURITY_GATES.md, AWS_OPERATING_INTELLIGENCE_RUNBOOK.md, governance-os/README.md, fixtures/README.md
- infrastructure/aws/amplify/README.md, infrastructure/aws/cdk/README.md
- Companion files: COMPATIBILITY_INDEX.md, AWS_WELL_ARCHITECTED_GSE_LENS.md (six-pillar reading map), AWS_SHADOW_BOUNDARY.md, AWS_PUBLIC_CASE_STUDY_ROUTE.md
## Findings (numbers and facts, not vibes)
- 9 canonical doc paths enumerated; this folder is a compatibility shim, not a source of truth.
- 6 explicit prohibitions: no live AWS calls, no AWS credentials, no DNS changes, no deploy action, no paid resources, no SDK/dependency addition; no claim that AWS is configured.
- INFERENCE: No sports, modeling, or prediction content exists in this file; it is infrastructure documentation hygiene.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure pointer doc with no on-field intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — AWS/infrastructure index shim; contains no signals, models, or metrics usable by the engine.

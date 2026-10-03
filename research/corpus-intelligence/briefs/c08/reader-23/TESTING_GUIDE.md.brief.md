# docs/fable/TESTING_GUIDE.md
## What it is (1-2 sentences)
The FABLE testing runbook: the exact npm commands for targeted FABLE lib tests and requested package tests, plus the recording rule that all outcomes, failures, and caveats belong in `CODEX_FINAL_REPORT.md`.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
Test files: `lib/fable/source-registry.test.ts`, `uncertainty.test.ts`, `labeling.test.ts`, `drift.test.ts`, `aws-gates.test.ts`, `claim-scanner.test.ts`, `docs-claims.test.ts`; workspaces `packages/prediction-engine`, `packages/data-ingestion`; guards `guard:secrets`, `guard:trust`.
## Findings (numbers and facts, not vibes)
- Targeted FABLE command: `npm run test --workspace=apps/web -- lib/fable/source-registry.test.ts lib/fable/uncertainty.test.ts lib/fable/labeling.test.ts lib/fable/drift.test.ts lib/fable/aws-gates.test.ts lib/fable/claim-scanner.test.ts lib/fable/docs-claims.test.ts`
- Requested: `packages/prediction-engine` and `packages/data-ingestion` tests, `npm run typecheck --workspaces --if-present`, `npm run guard:secrets`, `npm run guard:trust`.
- AWS-specific verification goes in `aws/AWS_FINAL_REPORT.md`; all other results in `CODEX_FINAL_REPORT.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — test runbook; no sports content.
## Engine-actionable? (yes/no + one-line what)
Yes — run these commands as the FABLE/uncertainty test baseline before trusting any lane's claims.

# fable/CLAUDE_HANDOFF.md
## What it is (1-2 sentences)
A handoff brief on branch `codex/fable-nfl-evidence-integration` giving the next agent a primary read order of FABLE documents/code and a rules list (what not to touch, what commands to run before trusting or changing evidence claims).
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas, no metrics.
## Data sources named
None beyond repo-internal references: `docs/fable/master/MASTER_FINAL_REPORT.md`, `AUDIT_STATE.md`, `TYPECHECK_DECISION.md`, `docs/fable/README.md`, `docs/fable/INDEX.md`, `apps/web/app/fable/page.tsx`, `apps/web/lib/fable/public-summary.ts`, `aws-local-fixtures.ts`, `aws-governance-os.ts`, `index.ts`, `aws-decision-engine.ts`, `docs/fable/aws/fixtures/AWS_LOCAL_FIXTURE_LIBRARY.json`, `docs/fable/aws/governance-os/SHADOW_CONTROL_TOWER_BLUEPRINT.json`, `AWS_PLUGIN_TO_REPO_CROSSWALK.md`, `AWS_PLUGIN_GOVERNED_AUDIT.md`, `CODEX_FINAL_REPORT.md`, `CODEX_THIRD_PASS_REPORT.md`, `aws/AWS_FINAL_REPORT.md`, `docs/fable/evidence/CLAIM_EVIDENCE_LEDGER.md`, `docs/fable/master/GITHUB_PUBLICATION_PATH.md`.
## Findings (numbers and facts, not vibes)
- [OTHER] Rules for the next agent: do not move source rights out of the existing registry; do not claim live AWS setup from local skeleton files or docs; do not activate paid resources; do not touch untracked scratch files unless the owner explicitly asks; treat AWS account/profile/region as absent until live read-only discovery is approved and logged.
- [OTHER] Verification commands before trusting/changing evidence: `npm run fable:evidence`, `npm run fable:aws-fixtures`, `npm run fable:aws-governance`; run app route tests before changing `/fable` (`npm run test --workspace=apps/web -- lib/fable/public-summary.test.ts lib/fable/evidence/evidence-harness.test.ts __tests__/next-config-policy.test.ts __tests__/public-copy-scan-strong.test.ts`); update final reports with exact command output if more verification is run; check `docs/fable/master/GITHUB_PUBLICATION_PATH.md` before claiming GitHub publication.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER — governance/handoff only, no football-signal content.
## Engine-actionable? (yes/no + one-line what)
No — process/governance handoff note only; the read order may guide future FABLE evidence sweeps.

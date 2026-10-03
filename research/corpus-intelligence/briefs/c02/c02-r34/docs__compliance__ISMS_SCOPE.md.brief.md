# docs/compliance/ISMS_SCOPE.md

## What it is (1-2 sentences)
A draft seed ISMS (Information Security Management System) scope statement for Beexly/Sports (Galaxy Sports Edge), defining what is in/out of scope for the controls in `packages/compliance/src/control-library.ts` — explicitly marked as NOT approved, NOT ISO 27001-claiming, and to be reviewed by a designated ISMS owner.

## Key metrics/methods (formulas where given, else "not specified")
- Control references named: `CTL-SUP-001` (supplier register), `CTL-ACC-001` (privileged-account identity/MFA, currently fed by a manual snapshot), `CTL-LOG-001`, `CTL-LOG-002` (logging controls depending on the governed-receipts subsystem).
- No metrics, formulas, thresholds, or security metrics are defined in this file.

## Data sources named
- `packages/compliance/src/control-library.ts` (control library), `packages/compliance/` (Compliance Control Monitor), `scripts/compliance/run-ccm.ts`.
- `STATEMENT_OF_APPLICABILITY.md` (referenced), compliance `README.md` (non-claims disclaimer).
- Sibling branch `feat/governed-receipts` (governed-receipts admit/refuse decision surface, not yet merged).
- Cloud/hosting provider (production infra + managed Postgres run on a third-party cloud provider; attestations are a supplier-risk input, not incorporated by reference).
- Identity provider (MFA state read from IdP integration — not yet built).

## Findings (numbers and facts, not vibes)
- [OTHER] Status is "draft seed content" — not formally reviewed or approved; no named ISMS owner has signed off; the document must not be treated as authoritative for any external-facing purpose.
- [OTHER] Explicit non-claim: does not claim ISO 27001 certification or conformity (full non-claims disclaimer in the compliance README).
- [OTHER] In scope (draft): production app infra (apps/web + runtime deps, packages/db + primary Postgres), governed-decision agent/automation systems (governed-receipts admit/refuse surface, once merged), CI/CD pipeline deploying production changes, privileged/admin IAM on production, the Compliance Control Monitor itself and its evidence/exception data.
- [OTHER] Out of scope (draft): physical security of offices/data centers (inherited from cloud provider, not independently assessed), non-org-owned end-user devices, third-party subprocessor internal controls beyond the supplier register, any subsidiary/acquired product/business unit not named.
- [OTHER] Two live gaps recorded: IdP integration for privileged-account MFA state is not yet built (`CTL-ACC-001` fed by manual snapshot); the governed-receipts decision-logging surface the logging controls depend on is not yet merged.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER — this is platform compliance/governance infrastructure with no football, coaching, scheme, OL, QB-behavior, or trust-signal content relevant to prediction.

## Engine-actionable? (yes/no + one-line what)
No — governance/compliance scaffolding with no predictive modeling content; only useful later as a checklist if the engine's governed-decision logging ever needs ISO 27001-style auditability.

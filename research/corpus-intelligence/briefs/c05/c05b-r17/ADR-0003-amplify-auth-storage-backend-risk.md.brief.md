# fable/aws/amplify-adrs/ADR-0003-amplify-auth-storage-backend-risk.md
## What it is (1-2 sentences)
Architecture Decision Record rejecting backend expansion of AWS Amplify auth/storage services for the FABLE spike; the app keeps its existing auth/database assumptions and permits only docs-only analysis and preview-hosting evaluation.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Decision method: risk gate — backend categories add IAM, secret, data-retention, and rollback obligations; blocked items: Cognito migration, storage migration, secret sync, DNS changes. Adoption trigger: explicit owner decision plus a data-rights and rollback review.
## Data sources named
None (docs-only analysis).
## Findings (numbers and facts, not vibes)
- Decision: reject backend expansion for now.
- Source rights for storage must be reviewed before any cloud persistence.
- Preview-hosting evaluation allowed only after approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — infra decision record; no sports content.
## Engine-actionable? (yes/no + one-line what)
No — infrastructure gating doc for a preview spike, no engine signal.

# docs/fable/aws/amplify-adrs/ADR-0001-amplify-vs-current-hosting.md
## What it is (1-2 sentences)
An Architecture Decision Record deciding against a full migration to AWS Amplify for now, keeping current hosting and treating Amplify as docs-only analysis plus preview-only evaluation.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no metrics; the ADR records decision, pain points (need GitHub-visible demo paths; branch-preview value plausible but unproven), risks (DNS changes not allowed; NextAuth/secrets review needed; vendor dependence), and rollback path (keep current hosting).
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Decision: reject full migration for now.
- Cost pressure: no paid AWS resources approved.
- Adoption trigger (all required): owner requests AWS-hosted preview value, cost ceiling approved, and current host remains untouched.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rejection of full Amplify migration under no-paid-AWS constraint — OTHER (hosting/infra).
- "Branch preview value is plausible but unproven" — TRUST-SIGNAL (demand proof before claiming value; consistent with the evidence-discipline posture).
## Engine-actionable? (yes/no + one-line what)
No — pure hosting decision with no sports or model content.

# docs/fable/github/ISSUE_01_CLAIM_EVIDENCE_LEDGER.md
## What it is (1-2 sentences)
A GitHub issue spec defining a claim-evidence ledger that classifies high-risk FABLE/NFL/AWS claims and requires visible downgrade of unsupported claims.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas; acceptance criteria are process-based.
## Data sources named
None directly; risk noted is "incomplete claim extraction from OneNote."
## Findings (numbers and facts, not vibes)
- The ledger classifies high-risk FABLE/NFL/AWS claims; unsupported claims get a visible downgrade.
- Acceptance criteria: ledger JSON validates; high-risk proven claims have evidence files; legal claims require source-rights evidence or a legal marker.
- Files likely touched: `docs/fable/evidence/*` and `apps/web/lib/fable/evidence/*`; test plan is `npm run fable:claims`.
- Owner decision needed: legal review process for future legal markers.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Unsupported claims get a visible downgrade rather than silent publication — TRUST-SIGNAL (public honesty mechanism; maps directly to GSE's rule that the public site shows only what is proven).
- Legal claims require source-rights evidence or legal marker — TRUST-SIGNAL (same guardrail that covers the NGS-internal doctrine: no rights, no claim).
- "Incomplete claim extraction from OneNote" flagged as risk — TRUST-SIGNAL (claim inventory completeness matters; unverified provenance gaps are named, not hidden).
## Engine-actionable? (yes/no + one-line what)
Yes — port the ledger pattern into GSE's public surface: every published projection/ranking carries a claim-evidence entry, and anything unsupported is visibly downgraded, matching the existing public/private surface doctrine.

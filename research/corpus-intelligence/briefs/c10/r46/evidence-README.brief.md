# fable/evidence/README.md
## What it is (1-2 sentences)
Index for the FABLE evidence control surface: the claim-to-evidence ledger, unsupported-claims list, command log, and blockers, with a defined read order and four executable checks (`npm run fable:evidence`, `fable:claims`, `fable:sources`, `fable:aws-gates`).
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Policy note: the ledger is intentionally blunt — claims without evidence are downgraded rather than rewritten into softer language.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Read order: EVIDENCE_INDEX.md → CLAIM_EVIDENCE_LEDGER.md → CLAIM_EVIDENCE_LEDGER.json → UNSUPPORTED_CLAIMS.md → COMMAND_LOG.md → BLOCKERS.md.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — ledger index.
## Engine-actionable? (yes/no + one-line what)
no — index doc with no content.

# docs/ops/evals/model-journal-banned-vocab-block.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner) for the model-journal surface's compliance scanner, verifying that a generated draft containing the banned phrase "AI-powered" (rule L1-AI-POWERED in `apps/web/lib/compliance-scanner/rules.ts`) is blocked from publish rather than silently cleaned or auto-rewritten.
## Key metrics/methods (formulas where given, else "not specified")
- Scanner runs `getRulesForTemplate('MODEL_JOURNAL')` against markdown body; must return `status: 'red'` with at least one layer-1, severity `block` flag referencing "AI-powered".
- Pass criteria: red status; L1 block flag matching "AI-powered"; correct span position; suggested fix rendered ("Use 'deterministic scoring' or 'factor model' instead."); submit-for-publish disabled; draft body preserved verbatim; regeneration creates a new history entry.
## Data sources named
Claude API (Saturday drafting job output ~1000-word essay); cockpit editor UI at `/cockpit/journal/[entryId]`; compliance-scanner rules file.
## Findings (numbers and facts, not vibes)
- Forbidden: publish with red status; silently strip offending text; auto-rewrite via Claude without operator action (budget burn); lose the draft on regenerate.
- DRAFT can be deleted directly; only PUBLISHED requires retraction.
- Created 2026-05-22 by claude; pending-runner status.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Compliance scanner as last-line defense before publish — TRUST-SIGNAL
- Suggested-fix copy from rules (deterministic scoring / factor model vocabulary) — OTHER
## Engine-actionable? (yes/no + one-line what)
No — eval spec for an editorial compliance gate, not engine signal or method.

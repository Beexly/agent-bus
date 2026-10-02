# docs/compliance/SOC2_TYPE_II_PATH.md
## What it is (1-2 sentences)
An honest SOC 2 Type II readiness checklist: it describes what a real SOC 2 engagement requires, marks the repo's current status against each prerequisite, and explicitly states that nothing in the repo or any exported evidence pack is a SOC 2 report — only an accredited independent CPA firm can issue one.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Type I = point-in-time design assessment; Type II = operating effectiveness over a 3–12 month observation period.
## Data sources named
None external; references internal paths: `packages/compliance/src/control-library.ts`, `packages/compliance/__tests__/ccm.test.ts`, `apps/web/lib/compliance/store.ts`, `packages/db/prisma/schema.prisma`, `scripts/compliance/run-ccm.ts`.
## Findings (numbers and facts, not vibes)
- Done (internal tooling only): control library defined; CCM checks unit-tested; CCM wired to real Postgres persistence.
- Not done: CCM running continuously (script exists, no scheduler); real data sources feeding every check (receipts, deploy events, access snapshots are TODO-stubbed); evidence retained over an observation period (not started); formal risk register (template only); ISMS scope (draft, unapproved); Statement of Applicability (all cells "TBD"); engaging a CPA firm or certification body (not started).
- Partial: exceptions tracked to closure (opened automatically via `ComplianceException`, no closure workflow/UI beyond the raw table).
- Explicit scope note: every ✓ means internal tooling exists and works — not that an audit occurred or any control was proven effective over time.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The CCM/evidence infrastructure is trust plumbing (continuous control monitoring, receipts, exceptions) — relevant if GSE ever needs to substantiate audit-grade trust claims, but it is not sports intelligence.
- OTHER: Compliance/ops readiness checklist, not engine modeling.
## Engine-actionable? (yes/no + one-line what)
No — compliance readiness work; no features, metrics, or modeling changes follow from it.

# docs/compliance/SOC2_TYPE_II_PATH.md
## What it is (1-2 sentences)
An honest readiness checklist for a SOC 2 Type II engagement, stating what a real audit requires and exactly where the repo stands: 3 of 12 prerequisites done, with the rest not done, partial, or not started — and an explicit disclaimer that nothing in the repo is a SOC 2 report.

## Key metrics/methods (formulas where given, else "not specified")
- Type I vs Type II definitions: Type I = point-in-time control design assessment; Type II = controls operating effectively over an observation period, typically **3-12 months**, requiring sustained continuous evidence.
- 12-item prerequisite checklist with statuses (below).
- "Done" means internal tooling exists and works (tests passing, real Prisma persistence, honest stub comments) — not that an audit occurred.

## Data sources named
- `packages/compliance/src/control-library.ts` (control library, done)
- `packages/compliance/__tests__/ccm.test.ts` (CCM unit tests, done)
- `apps/web/lib/compliance/store.ts` + Prisma schema `packages/db/prisma/schema.prisma` (CCM wired to real Postgres, done)
- `scripts/compliance/run-ccm.ts` (manually-invokable; no scheduler wires it up)
- Missing: `feat/governed-receipts` (receipts TODO-stubbed to empty arrays), deploy webhook log, IdP integration, `RISK_REGISTER.md` (template only), `ISMS_SCOPE.md` (draft, unapproved), `STATEMENT_OF_APPLICABILITY.md` ("TBD" in every cell)
- Only an accredited, independent CPA firm can issue a SOC 2 report.

## Findings (numbers and facts, not vibes)
- Done (3/12): control library defined; CCM checks unit-tested; CCM wired to real Postgres persistence.
- Partial (1/12): exceptions opened automatically (ComplianceException) but no closure workflow/UI beyond the raw table.
- Not done (8/12): CCM running continuously; real data sources feeding every check (receipts, deploy events, access snapshots all stubbed); evidence retained over observation period; formal risk register; ISMS scope adoption; Statement of Applicability; engaging a CPA firm; engaging a certification body (ISO 27001).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Honest-readiness posture: the doc explicitly forbids claiming SOC 2 compliance from tooling alone — parallel to the commercialization doctrine's evidence standard for picks.
- [OTHER] CCM (continuous compliance monitoring) scaffolding: evidence-persistence pattern relevant to how the engine logs its own claims/calibration over time.

## Engine-actionable? (yes/no + one-line what)
No — compliance documentation with no sports metrics; relevant only as governance hygiene (evidence retention patterns).

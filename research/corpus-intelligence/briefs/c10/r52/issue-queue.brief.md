# docs/ops/archive/dated/issue-queue.md
## What it is (1-2 sentences)
Production issue queue (bugs, voice/vocabulary violations, test gaps, perf) with a P1–P4 severity scale and an "Open" section above a dated "Resolved" section. Last status line is 2026-05-22 PM.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — severity scale only: P1 production-breaking; P2 visible regression or guardrail breach; P3 non-urgent bug; P4 nit/polish. Synthetic monitoring (master plan Part 1.5) auto-files with severity pre-tagged.
## Data sources named
None named.
## Findings (numbers and facts, not vibes)
- **Open list was empty as of 2026-05-22 PM**; "Phase 1 + most of Phase 2 shipped clean. Phase 2 final piece (homepage preview wiring) in-flight, not blocked."
- Resolved IQ-001 (P2): `apps/web/app/api/cockpit/agent-runs/route.ts` truncated at EOF — restored from last green pass, 2026-05-22.
- Resolved IQ-002 (P3): nested `Sports/` clone in working tree — removed, 2026-05-22.
- Resolved IQ-003 (P2): promotions prod-seed guard reverted — `seedPromotions`/`seedDailyBrief`/`seedContentDrafts` wrapped in `NODE_ENV !== 'production'` guards in `packages/db/prisma/seed.ts`; fake DK example.com row can no longer leak to prod via `db:seed` misrun.
- Resolved IQ-004 (P2): stub Prisma `in` filter silently ignored on settled-result queries — returned all rows incl. pending sample picks; fixed in `packages/db/src/index.ts`, regression test `apps/web/__tests__/stub-prisma-edge-cases.test.ts`, see DEC-027.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engineering housekeeping; settled/pending ledger-filter correctness (IQ-004) is track-record plumbing, not sports intelligence.
## Engine-actionable? (yes/no + one-line what)
No — historical issue log; all items resolved, no open action.

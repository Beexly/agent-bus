# ops/archive/dated/PRIMARY_CLONE_SYNC_AUDIT_2026-05-27.md
## What it is (1-2 sentences)
A docs-only sync/integrity audit from the cowork scratch workspace to the primary clone, run under a hard no-implementation-mutation constraint, with inventory, copy plan, hash verification, and validation results.

## Key metrics/methods (formulas where given, else "not specified")
- Hash/size comparison inventory across audited doc zones; SHA-256 verification of copied files (3/3 matched).
- Validation suite: `npm run lint` PASS, `npm run typecheck` PASS, `npm run test` PASS, `npm run test:smoke` FAIL (pre-existing: missing script, config-level gap, not docs-sync related), `npm run build` PASS (Prisma auth warnings during static generation, build succeeded).

## Data sources named
- `SCRATCH_TO_PRIMARY_COPY_MANIFEST.md` (dated 2026-05-22); wave completion report `WAVE_COMPLETION_REPORT_2026-05-27.md`; inventory CSV at `reports/agent-handoffs/_pre_sync_inventory_2026-05-27.csv`; copy plan `_manifest_allowed_copy_plan_2026-05-27.csv`.

## Findings (numbers and facts, not vibes)
- Pre-sync inventory: 99 total rows — 60 missing in primary, 5 different (update needed), 24 identical, 10 primary-only.
- This run copied exactly 3 files (manifest+allowed-zone intersection): `docs/ops/pr-review-checklist.md`, `docs/ops/stuck-queue-protocol.md`, `docs/ops/evals/README.md`; all SHA-256 verified.
- 60 files remain missing in primary across the audited wave zones; primary clone is guardrail-safe but not content-complete for full docs-wave parity.
- Manifest was dated 2026-05-22 and mostly targeted app/template sync, not the docs-only wave — a scope mismatch that limited this run.
- Post-sync safety audit confirmed: no app/route/schema/package/dependency changes; only docs/report artifacts added; pre-existing non-doc working-tree changes untouched.
- test:smoke failure classified as pre-existing script gap, not caused by this sync.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Inventory + hash-verified docs sync method (99-row manifest comparison, SHA-256 per copy) — [OTHER]
- Historical artifact; nothing model-relevant — [OTHER]

## Engine-actionable? (yes/no + one-line what)
no — Historical docs-sync audit with no model, metric, or prediction content.

# ops/archive/dated/PRIMARY_CLONE_SYNC_AUDIT_2026-05-27.md
## What it is (1-2 sentences)
A docs-only integrity audit of a workspace sync from the cowork scratch workspace (`C:\Users\Garrett\Documents\Claude\Projects\AI Sports`) to the primary clone (`C:\Users\Garrett\Sports`) on 2026-05-27, under hard constraints forbidding any route/schema/dependency/app mutation — includes inventory counts, copy verification, validation results, risks, and blockers.

## Key metrics/methods (formulas where given, else "not specified")
- Copy policy: copy only files that are (1) explicitly listed/implied in the manifest AND (2) inside the allowed target zones for the task (docs-only)
- Hash verification: SHA-256 match of destination vs source; **3/3** copied files verified
- Inventory (hash/size compared when both exist): **99 total rows** — **60** missing in primary · **5** different (update needed) · **24** identical · **10** primary-only
- Validation: `npm run lint` PASS · `npm run typecheck` PASS · `npm run test` PASS · `npm run test:smoke` FAIL (Missing script: "test:smoke" — classified pre-existing script gap/config-level, not docs-sync related) · `npm run build` PASS (Prisma auth warnings observed during static generation, build succeeded)
- Safety confirmations: no app/route/schema/package/dependency/implementation files changed by the sync action — all confirmed; no tests weakened — confirmed

## Data sources named
- Manifest: `SCRATCH_TO_PRIMARY_COPY_MANIFEST.md` (dated 2026-05-22), read in both workspaces
- Wave Completion Report: `docs/ops/WAVE_COMPLETION_REPORT_2026-05-27.md` (cowork scratch)
- Inventory artifact: `reports/agent-handoffs/_pre_sync_inventory_2026-05-27.csv` (99 rows)
- Copy plan artifact: `reports/agent-handoffs/_manifest_allowed_copy_plan_2026-05-27.csv`
- Coverage zones audited: `DESIGN.md`, `docs/brain/`, `docs/design/`, `docs/audit/`, `docs/media/`, `docs/source-providers/`, `docs/models/`, `docs/agents/`, `docs/performance/`, `docs/data/`, `docs/ops/`

## Findings (numbers and facts, not vibes)
- Only **3 files** copied: `docs/ops/pr-review-checklist.md` (add), `docs/ops/stuck-queue-protocol.md` (add), `docs/ops/evals/README.md` (update) — all SHA-256 verified 3/3
- `docs/ops/evals/*.md` were already present and hash-identical except the README
- **60 files** remain missing in the primary across the audited wave zones (see the CSV, full list in the inventory artifact — individual filenames not enumerated in this doc)
- Manifest items intentionally NOT copied (outside docs-only allowed zones): `apps/**`, `docs/product/**`, root briefs (`CODEX_PHASE_*.md`), fixtures under `apps/web/__fixtures__/**`
- Pre-existing state: working tree dirty before sync with app/package/script changes unrelated to this task; pre-existing non-doc changes not modified
- Risks: (1) primary still lacks many wave-zone docs (60 missing); (2) manifest dated 2026-05-22 and mostly targets app/template sync, not current docs-only wave; (3) pre-dirty working tree
- Blocker: hard-rule conflict — current task forbids copying many manifest-listed paths needed for full historical scratch sync; this run achieved only manifest∩allowed-zone, not full wave parity
- Assessment: safe for next-phase Codex audit from a guardrail perspective; **not** content-complete for full docs-wave parity
- Recommended next prompt quoted verbatim: "Codex, perform docs-only parity sync for wave files from scratch to primary for these allowed zones only: DESIGN.md, docs/brain, docs/design, docs/audit, docs/media, docs/source-providers, docs/models, docs/agents, docs/performance, docs/data, docs/ops. Ignore manifest app/template sections, generate explicit file copy plan from inventory missing/update rows, then copy and hash-verify all allowed docs files."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: This is 2026-05-27-era provenance material (Windows-era workspaces, pre-repo-migration); its value today is forensic — it documents which wave docs may still be missing from the current repo lineage (60 files missing across docs/brain, docs/design, docs/audit, docs/media, docs/source-providers, docs/models, docs/agents, docs/performance, docs/data, docs/ops), which matters if the intelligence sweep is hunting for lost research.
- **OTHER**: The manifest∩allowed-zone policy and SHA-256 3/3 verification are the template for safe doc-intake discipline — read-only, hash-verified, no implementation mutation — directly analogous to this sweep's own read-only rule.

## Engine-actionable? (yes/no + one-line what)
no — archival sync audit, no engine logic; flags only that 60 wave-era docs may still be unaccounted for in repo lineage if provenance matters to the sweep.

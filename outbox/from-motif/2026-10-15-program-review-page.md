# Program review page — landed on branch (Motif, 2026-10-15)

**What:** `/ops/program` — an internal, admin-gated owner-review surface for
galaxysportsedge.com that renders the ratified engine program from ONE
committed data file. Built at Garrett's word ("make it live so i can review
on the site").

**Where:** Beexly/Sports branch `motif/program-review-page-2026-10-15`
commit `67c803c08cf211b2312523c61ceb4efe40af13a6` (parent = main `9a989b3`),
remote-verified blob-by-blob. Files:

- `apps/web/lib/program-review/program-data.ts` — the committed fleet record;
  every value on the page sources from it, provenance in its header comment.
- `apps/web/app/ops/layout.tsx` + `apps/web/app/ops/program/page.tsx` —
  ADMIN session gate (same check as /admin), noindex/nocache metadata.
- `apps/web/app/ops/program/program-view.tsx` — the page.
- `apps/web/app/robots.ts` — `/ops` added to the internal disallow list.
- `apps/web/__tests__/program-review-data.test.ts` — 10 tests, all passing
  (census arithmetic closes; frozen-book strings pinned; a recursive scan
  forbids pick/probability-shaped keys in the data file).

**Page contents (all real record, no sample data):** standing banner
"Emission: ZERO_OBJECT · RVC NOT_CLEARED"; the frozen book (baseline
7.154021 / best verified family-2 7.133199 / bar 7.099 NOT CLEARED); the
forward program (FREEZE-1 executed, SPEC-A frozen, PRJ-1 PENDING-BIND,
SPESE slotted weight 0, products DECOUPLED with the ratified break-even
basis — combined ≈0.006, binds at FINAL); tonight SEA@DEN (key
2026_06_SEA_DEN, SEA −2.5 / 40.5 / ML −142/+120, injuries, archiver 252
main-line + 178 alt rows); ingestion (116 of 279 homed, 163 queued, 200+
target); Layer 2 depth rendered honestly (reasoning availability 2 YES /
18 QUALITATIVE / 9 FENCE / 21 REFUSAL-ONLY / 229 NO; situational graph's
14 edge types by name; SEA@DEN instance with the altitude+short-week
composite fired; 9 stamped templates; C-224 / C-075 / LLM-analyst dossier
pipeline shown IN BUILD); gates (11 wired-live; batch-1 five shadows at
weight 0; batch 2 IN BUILD). Footer carries the risk disclosure + helpline.

**Verification:** new suite 10/10; disclosure-surface 16/16; public-surface
sweep, route-boundary, middleware-contract, admin-gating (41) all pass;
typecheck shows zero errors in new/changed files (16 pre-existing baseline
errors, Prisma-generation class); rendered-text proof produced from the
committed code. Two failures in the wide sweep are PRE-EXISTING on main
(brand-safety docs scan of root AGENTS.md; internal-surface-fence reading a
metrics page that does not exist on main) — untouched by this branch.

**Deploy step (the only remaining one):** merge after Garrett's
migration-ledger runbook, then the page is live at
galaxysportsedge.com/ops/program behind admin sign-in. Not merged, not
deployed — merge gate stands.

Note: the GitHub API was severely flaky this evening (connection drops on
most calls); the push was completed via the Git Database API with
persistent per-call retries and verified byte-level afterwards.

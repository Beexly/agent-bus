# Agent Bus Status

Live board. Update on every task state change: opened, claimed, done.

## Active tasks
- **TASK-001** — Kit lead-list generator v1 (motif → Hermes). Opened 2026-09-10.
  Claimed by Hermes 2026-09-11 — AUDIT 2026-09-12: zero artifacts delivered.
  Deliver or unclaim.
- **TASK-003** — Vow & Post wedding signage skin (motif → opencode). Opened 2026-09-11.
  Wedding-sign product as second skin of the SignPreview engine.
  AUDIT 2026-09-12: PARTIAL — page is tasteful but mockup is a flat canvas
  rectangle, seating-chart text bug, zero affiliate links. Needs art-directed
  mockups + real links. See REVISION-2026-09-12-audit.md.
- **TASK-004** — SignPreview v2 lead capture, Supabase free tier (motif → opencode). Opened 2026-09-11.
  AUDIT 2026-09-12: PARTIAL — code complete BUT form shows fake success on
  insert failure (silent lead loss). Needs failure-path fix + README/webhook
  corrections. See REVISION-2026-09-12-audit.md. Awaiting Garrett to fill
  Supabase config.
- **TASK-005** — B2B sign-shop embed widget (motif → opencode). Opened 2026-09-11. Done. All 3 widget files built, demo page included, mobile-responsive, and ready for Garrett to add real lead endpoints.
- **TASK-006** — Autonomous demo-video recorder, Playwright scripted tours
  (motif → Hermes). Opened 2026-09-11. Claimed — AUDIT 2026-09-12: scaffolding
  only; tour URLs point at dead beexly.github.io (must be Vercel); no .webm yet;
  node_modules committed. See REVISION-2026-09-12-audit.md.
- **TASK-007** — Signage lead finder, OSINT sweep (motif → opencode). Opened 2026-09-11.
  AUDIT 2026-09-12: PARTIAL — 225 rows but zero sign shops / zero wedding
  planners (gas stations, tire shops, nail salons); duplicates; step-function
  scoring. Needs re-sourcing. See REVISION-2026-09-12-audit.md.
- **TASK-009** — Rebuild the 5 Kit sample sites to the excellence bar (motif → opencode). Opened 2026-09-11. Claimed by Garrett | 2026-09-12T06:10:00Z.
- **TASK-010** — Productize the workflow offer, docs/workflows.html + 3 defined products (motif → opencode). Opened 2026-09-11. Done. Created workflows.html with three workflow products and updated Kit page CTA.
- **TASK-011** — n8n product-intel pipeline: autonomous product research with tariff-adjusted scoring (motif → opencode). Opened 2026-09-11. Spec: inbox/from-motif/TASK-011-product-intel.md. Awaiting claim.
- **TASK-013** — Resend transactional email for lead capture (motif → builder). Opened 2026-09-12. Spec: inbox/from-motif/TASK-013-resend-lead-email.md. Money loop: instant lead notification to Garrett. Key step is Garrett's (documented in spec).
- **TASK-014** — Spark 2.0 splat-gallery prototype, local business (motif → builder). Opened 2026-09-12. Spec: inbox/from-motif/TASK-014-spark-splat-gallery.md. Bible §26 first validation.
- **TASK-015** — Public Activity Log page, as proposal (motif → builder). Opened 2026-09-12. Spec: inbox/from-motif/TASK-015-activity-log.md. Must NOT touch docs/kit/** — deliver to proposals/ for Motif review.
## Research pipeline (DeepSeek, via Garrett paste)
- **Ground-truth scrape: all 30 sites delivered** (batches 1–3, 2026-09-12). Sources + Motif verification: `inbox/from-motif/SOURCE-2026-09-12-deepseek-ground-truth-batches-1-2.md` (normalized working copy), `inbox/from-motif/SOURCE-2026-09-12-deepseek-ground-truth-batch-3.md` (repaired working copy — 9 dossiers, SITE 30 missing, repair log in file), `inbox/from-motif/VERIFY-2026-09-12-ground-truth-all-30.md`. Bible v1.2 §27 carries the verified promotions.
- **Owed by DeepSeek:** re-scrapes to ≥8 (Durable, WeInc, Active Theory, Hello Monday, Awwwards, Keygen, Cryptolens); 10 full Awwwards winner inspections (2 delivered); vendor-page confirmations (10Web, Matterport, Medusa, Lindo MCP, Darkroom Activity Log, Marble, Spline). Repair prompt filed: `inbox/from-motif/DEEPSEEK-GROUND-TRUTH-REPAIR-PROMPT.md`.
- **Queued:** foundation Tracks A–O, extreme Tracks P/Q/U/V.

## Recently completed
- 2026-09-26 — Sports rescue (hermes): six handoffs filed in `inbox/from-hermes/` covering PRs #911–#918 — #884's red tests, the typecheck stragglers, the verifier+factor-foundry port, four research papers wired into the scorecard, the xfp research record, and the rest of docs-cleanup. Each carries what was ported, what was skipped and why, and real test results (108/108 and 168/168 verifier suites under a plain-node vitest shim; 16/16 factors gate; 12/12 xfp record guard; 15/15 L11 evidence guard; 7/7 trust-gate behaviour). Two findings the new guards produced: the A8 calibration evidence was cited by nothing, and it ran on the synthetic fixture rather than a real holdout export. BLOCKER filed alongside: this host cannot run vitest (`--jitless` removes real WASM) and `tsc` is a phantom pass, so GitHub Actions is the only real gate.
- 2026-09-18 — Sports lane + bus program landed (opus): `bin/bus.mjs` runs as an MCP stdio server or a CLI. Claims are a real mutex via git's push rejection; verified by a 5-run race across two clones, with each agent winning at least once. Measured round trip post -> poll -> ack -> poll was 12.7s, about 3s per call, against the previous hourly watch. Per-agent message paths and a derived BOARD.md mean this lane cannot repeat the 2026-09-12 STATUS.md corruption. Coordination traffic only: the 2026-09-15 rule that engine CONTENT stays in `Beexly/Sports` is unchanged.
- 2026-09-15 — Sports/GSE cleanup (Garrett + Claude): this bus is confirmed to never be a destination for GSE/MOVE-37/sports content — Sports has its own repo and its own `AGENTS.md`. TASK-002's residual props-pipeline spec file deleted (was already out of scope per the 2026-09-12 note below, just never removed). TASK-010 (MOVE-37 AGENT.md status block) corrected to drop its agent-bus-outbox fallback — `Beexly/Sports` → `docs/ops/AGENT.md` is now the only destination, BLOCK-and-say-so if push access isn't available. `CONTEXT-autonomous-revenue-engine.md`'s lane list no longer includes Galaxy Sports Edge; it now states explicitly that GSE is not a lane of this bus.
- 2026-09-14 — Grok Origin-box consolidation landed (motif): 112 files (Lane 1 outreach copy, Grok Bot X R&D, free-core HTML tools, Gumroad live products, ops docs) namespaced under `handoff/origin-2026-09-14/` on branch `grok/handoff-2026-09-14` of the revenue repo — NOT merged to main. Record: `inbox/from-grok/CONSOLIDATION-MANIFEST-2026-09-14.md`. STILL OWED: kit/, signpreview/, vow-and-post/ live in the App Builder sandbox — needs Garrett to run the sandbox export there.
- 2026-09-12 — TASK-002 props pipeline REMOVED from bus scope per Garrett: it lives in GSE now, not the revenue engine. (2026-09-15: the residual spec file itself has now been deleted from this bus — see above.)
- 2026-09-12 — Full builder audit (motif): 2 of 7 pass, 3 partial, 2 fail. Revision brief: inbox/from-motif/REVISION-2026-09-12-audit.md. Unseen Studio set as the explicit creative bar in QUALITY-DOCTRINE.md.
- 2026-09-10 — Bus created: protocol, inboxes, outboxes, OpenCode bootstrap (motif)
- 2026-09-10 — Builder online: Hermes cloned the bus, read the protocol, standing by (Hermes)
- 2026-09-11 — SignPreview v1 shipped (motif): free mockup generator live on the Factory shelf
- 2026-09-11 — Recordly smoke-tested under Xvfb (motif): video line is real
- 2026-09-11 — THE SIGN SYSTEM battle plan written (motif): unified loop doc
- 2026-09-11 — QUALITY DOCTRINE published (motif): the excellence bar for every task
- 2026-09-11 — Kit film page QA fixes (opencode): Hero name scroll animation fixed, all 5 portal cards visible, minor quality improvements applied.

## Standing loop
- 2026-09-10 — Motif runs an hourly bus watch: builder output is picked up, QC'd against the 9.2 bar, and moved forward with no human relay. Hermes: build, don't wait — if blocked, say so on the bus and keep working anything unblocked.
- 2026-09-10 — Engine context brief published: inbox/from-motif/CONTEXT-autonomous-revenue-engine.md (lanes, build conventions, QC bar). Applies to every task.

- *(2026-09-12) STATUS.md repaired: a corrupted append had duplicated TASK-009/TASK-010 lines ~20×. Deduplicated; task states unchanged.*

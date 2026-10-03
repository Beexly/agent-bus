# product/migration-sequence-spec.md
## What it is (1-2 sentences)
The operational reference for Prisma migration ordering across Phases 3–5 of the Sports repo (`packages/db/prisma/migrations/`): ~a dozen new models, a strict dependency graph, rollback conventions, and a stuck-state policy for phase-order conflicts. Already-shipped Phase 0–2 migrations are documented as no-replay history (test count 1,427 across 115 files post-Phase 2).

## Key metrics/methods (formulas where given, else "not specified")
No formulas. Quantitative items:
- Test count: 1,427 across 115 files post-Phase 2 (must pass against the migrated schema before any PR merges).
- OPEN-MIG-1: migration rehearsal on production-size data required for any migration adding indices to a table with >100K rows (smaller tables skip).
- OPEN-MIG-2: rollbacks default to data-archival via `archive_<table_name>_<migration_name>.sql` dump at `packages/db/archives/` (purgable after 30 days).
- OPEN-MIG-3: manual SQL review required for any migration adding an index to a >100K-row table or modifying an FK constraint; auto-apply otherwise.
- Conventions: one migration per logical schema addition; snake_case names with `add_`/`update_`/`remove_` prefix; every migration runs `npm run db:generate` immediately after; existing-data backfills ship as separate migrations with scripts at `packages/db/scripts/`.

## Data sources named
No datasets — this is a schema-ordering doc. Referenced: existing tables `Pick`, `User`, `Game`, `SourceSnapshot`, `Promotion`, `SourceCoverageReport`, `CalibrationProposal`, `ContentDraft`, `ContentSource`, `ContentReview`, `AgentRunLog`, `GateDecision`. External references: `docs/product/galaxy-memory-persistence-spec.md`, `CODEX_PICKUP_2026-05-22_LOSS_AUTOPSY_AND_PROMO_WIRE.md` (origin of the Loss Autopsy migration, deferred from May 2026), `callClaudeWithCostTracking` (Claude API wrapper), `packages/db/scripts/`, `packages/db/archives/`.

## Findings (numbers and facts, not vibes)
- **Already shipped (Phase 0–2, no replay):** `add_pick_grade` etc. (pre-2026 engine schema), `add_source_snapshot` (Phase 1 Evidence Engine), `add_promotion` (`Promotion`, `SourceCoverageReport`), `add_calibration_proposal` (`CalibrationProposal`), `add_content_draft` (`ContentDraft`, `ContentSource`, `ContentReview`), `add_agent_run_log` (`AgentRunLog`), `add_gate_decision` (`GateDecision`, Phase 2 DEC-029).
- **Phase 3 execution order:**
  - M-3.1 `add_loss_autopsy`: `LossAutopsy` + `LossAutopsyStatus` + `LossRootCause` enums; `Pick` gains `lossAutopsy` back-relation. Required before: Loss Room sub-archive `/performance/losses/*`, Game Room Galaxy Memory slot, Twitter bot post-mortem thread content, Model Journal Friday data pipe (references autopsies).
  - M-3.2 `add_pick_pre_mortem`: `Pick` gains `preMortemContent Json?`, `preMortemAt DateTime?`, `preMortemVersion String?`. Required before: Phase 3 Step 6 pipeline wiring, Game Room "What Would Change Our Mind" panel.
  - M-3.3 `add_model_journal_entry`: `ModelJournalEntry` + status enum. Required before: Friday data-pipe worker, Saturday drafting worker, `/cockpit/journal/[entryId]` review UI, `/journal/[slug]` public surface.
  - M-3.4 `add_galaxy_memory`: OPTIONAL — decision gate: materialize `GalaxyMemory` as a table (then depends on M-3.1, since Memory FKs to LossAutopsy) or derive from existing tables (default per spec → no migration).
- **Phase 4:** M-4.1 `add_calibration_training` (`UserPickEstimate`, `UserCalibrationSnapshot` — user calibration training); M-4.2 `add_model_court_case` (`ModelCourtCase`); M-4.3 `add_dsl_queries`... no — M-4.3 is `ModelIssue`, `ModelIssueComment`, `ModelIssueUpvote`, `ModelIssueGame` (GitHub-style model issues tracker); M-4.4 `add_claude_api_cost_tracking` (`ClaudeApiCallRecord`, `ClaudeApiBudget`) — **recommended pulled forward into Phase 3** (even though classified Phase 4) so cost data accumulates from day-1 of Studio + Model Journal Claude API usage; decision-log entry required if pulled forward.
- **Phase 5:** M-5.1 `add_anti_galaxy_pick` (`AntiGalaxyPick`); M-5.2 `add_dsl_queries` (`UserDSLQuery`, `UserDSLQueryStar`, `UserDSLAlert`); M-5.3 `add_b2b_api_keys` (`ApiKey`, `ApiKeyUsage`).
- **Stuck-state policy:** if a migration needs an out-of-phase schema element, Codex flags in the PR, a decision-log entry pulls the dependent migration forward into the current phase, and this doc is updated. "Do NOT block on the canonical phase ordering... The phase ordering is a heuristic, not a hard constraint."
- Note: `/journal/[slug]` public surface and `ModelJournalEntry` are public-facing — the Model Journal entries that ELITE users preview on the board page (board spec) are sourced here; journal content is subject to the same public/private doctrine review as other surfaces.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (mechanism):** M-3.1 LossAutopsy + M-3.2 pre-mortem fields are the persistence layer behind the entire trust surface: loss autopsies feed the Loss Room archive, the Game Room Memory slot, the Twitter/X bot post-mortem threads, the Discord bot post-mortem threads, and the Model Journal Friday pipe. Without these migrations landing first, no public trust content exists. Serves the trust-target intake lane and calibration post-mortem lane.
- **OTHER (cost governance):** M-4.4 (`ClaudeApiCallRecord`, `ClaudeApiBudget`) with the pull-forward recommendation is the engine's cost-telemetry layer for the standing max-autonomy builder mode — cost data from day-1 of Claude API usage prevents budget blowouts under Sonnet 5.5 coding spend. Serves the cost-guardrail lane.
- **OTHER (calibration research):** M-4.1 (`UserPickEstimate`, `UserCalibrationSnapshot`) is user-side calibration training (Phase 4) — distinct from the model-side book/signal-path calibration in the 2026-09-13 baseline, but the same honest-calibration discipline; the baseline's lesson (flat mappings, inverted book path) should inform how user estimates are scored so users aren't taught the engine's own bad habits.
- **OTHER (wiring order):** The dependency graph is a wire-first ordering artifact: M-3.1 → M-3.4, M-4.4 pulled early, no cross-deps within Phase 4/5 — usable as-is by the Motif wiring lane when these phases resume.

## Engine-actionable? (yes/no + one-line what)
No — historical infra reference (ordering/rollback policy), not a research finding; useful as wiring-order context only.

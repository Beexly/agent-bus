# product/migration-sequence-spec.md
## What it is (1-2 sentences)
Operational Prisma migration ordering reference for Phases 3–5 (roughly a dozen new models) with execution order, dependency graph, rollback paths, and the stuck-state procedure for conflicts; test count was 1,427 across 115 files post-Phase 2.
## Key metrics/methods (formulas where given, else "not specified")
- Conventions: one migration per logical schema addition; snake_case `add_`/`update_`/`remove_` names; documented rollback in the PR description; `npm run db:generate` immediately after each; existing-data migrations ship separately at `packages/db/scripts/`; test suite passes against the migrated schema before merge.
- Rehearsal default: yes for any migration adding an index to an existing table with >100K rows (OPEN-MIG-1).
## Data sources named
- `packages/db/prisma/migrations/`; existing tables `Pick`, `User`, `Game`; migration names `add_pick_grade`, `add_source_snapshot`, `add_promotion`, `add_calibration_proposal`, `add_content_draft`, `add_agent_run_log`, `add_gate_decision`, and proposed `add_loss_autopsy`, `add_pick_pre_mortem`, `add_model_journal_entry`, `add_galaxy_memory`, `add_calibration_training`, `add_model_court_case`, `add_model_issue`, `add_claude_api_cost_tracking`, `add_anti_galaxy_pick`, `add_dsl_queries`, `add_b2b_api_keys`.
## Findings (numbers and facts, not vibes)
- Phase 3: M-3.1 `LossAutopsy` model + `LossAutopsyStatus`/`LossRootCause` enums (`Pick.lossAutopsy` back-relation; required before Loss Room, Game Room Memory slot, Twitter post-mortem threads, Model Journal Friday pipe); M-3.2 `Pick` gains `preMortemContent Json?`, `preMortemAt DateTime?`, `preMortemVersion String?` (required before the Game Room "What Would Change Our Mind" panel); M-3.3 `ModelJournalEntry` + status enum (required before Friday data-pipe + Saturday drafting workers); M-3.4 `GalaxyMemory` — DECISION REQUIRED first: materialize as a table (depends on M-3.1) or derive (default per spec, no migration).
- Phase 4: M-4.1 `UserPickEstimate`, `UserCalibrationSnapshot`; M-4.2 `ModelCourtCase`; M-4.3 `ModelIssue` + comment/upvote/game relations; M-4.4 `ClaudeApiCallRecord`/`ClaudeApiBudget` — **recommended landing EARLY in Phase 3** even though classified Phase 4, so cost data accumulates from day 1 of Studio + Model Journal generation.
- Phase 5: M-5.1 `AntiGalaxyPick`; M-5.2 `UserDSLQuery` + star/alert relations; M-5.3 `ApiKey` + `ApiKeyUsage`.
- Stuck-state rule: if a migration needs another phase's schema, flag in the PR, log the pull-forward decision, ship it now — "phase ordering is a heuristic, not a hard constraint."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: `LossAutopsy` with a `LossRootCause` enum is the schema home for honest loss attribution powering post-mortems.
- OTHER: schema/migration operations, dependency ordering, rollback discipline.
## Engine-actionable? (yes/no + one-line what)
Partial — the `LossAutopsy` schema (model + status + root-cause enums on `Pick`) is the engine's loss-analysis store, so its fields should mirror exactly what the Discord post-mortem spec needs: heaviest signals at publish, what changed, which factor misread, and the resulting weight update or "this is variance" verdict.

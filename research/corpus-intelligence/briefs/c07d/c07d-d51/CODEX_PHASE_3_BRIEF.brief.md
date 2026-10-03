# ops/archive/root-museum/CODEX_PHASE_3_BRIEF.md
## What it is (1-2 sentences)
A self-contained execution brief (authored by Claude, 2026-05-22, revised same-day PM) assigning the Codex coding agent six parallel-shippable deliverables for Phase 3 of the Galaxy Sports Edge platform: Galaxy Studio v0, read-only Game Intelligence Rooms, Twitter/X and Discord bots, a weekly Model Journal essay pipeline, pre-mortem pipeline wiring, and the deferred Loss Autopsy schema. It also documents three Phase 2 pre-shipped foundations (deterministic pre-mortem builder DEC-030, GateDecision Prisma model DEC-029, correlation query schema validator scaffold DEC-031) that simplify Phase 3 work.

## Key metrics/methods (formulas where given, else "not specified")
- Pre-mortem re-run trigger: factor delta > 0.15 in an underlying `PickSignalSnapshot` before settlement.
- Twitter/X bot rate limits: max 12 slate-state posts per day, 20 total daily ceiling; `MUTE_BOT=true` env flag halts all posts.
- Galaxy Studio creator-asset TTL: 90 days per `OPEN-STUDIO-2` default (OPEN-P3-A: reconsider after first 30 days of usage).
- Discord bot: 5 slash commands (`/pick today`, `/board status`, `/methodology`, `/explain [gameId]`, `/calibration`); same rate limits as Twitter bot.
- Phase 2 verification baseline: 1,427 tests across 115 files passing; lint + typecheck + build + browser checks green (DEC-028).
- Model Journal cadence: Friday data pipe (afternoon) → Saturday Claude draft → Sunday publish; Monday Twitter teaser auto-post.
- Verification gate for Phase 3 → Phase 4: 11 conditions (all 6 deliverables shipped/merged, prod deploy green, smoke test, 4 surfaces render, Twitter bot posted at least one event of each kind, Discord bot installable + posting in one test server, one published journal entry, Loss Autopsy schema + one authored autopsy, pre-mortem on every published pick, brand-safety scan zero hits, retrospective in decision-log).
- Galaxy Studio: 8 asset templates (fan-explainer, betting-education, x-thread, sponsor-safe, fantasy-angle, tiktok-reels-script, newsletter-block, youtube-titles); hard "no auto-post endpoint" by design; thin-evidence refusal when no `PickSignalSnapshot` or insufficient `GameSignal` ("Evidence is thin — no asset generated").
- Game Rooms: 5 lens tabs (Fantasy / Fan / Bettor / Creator / Analyst); lens-prioritized panel ordering; bootstrap-state empty message "Evidence is thin — check back near game time"; tier projection via `projectForSurface(node, surface, viewer)`; default lens BETTOR for Pro/Elite, FAN for FREE on published pick, ANALYST for cockpit.
- Technical conventions: loader-extraction pattern (DEC-026); trust gates stay OFF (`PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `PUBLIC_BLOG_ENABLED`); mobile-first 390px, 44px+ tap targets; no new dependencies; Claude API for everything LLM-shaped (DEC-020); banned-vocabulary compliance scanner (`getRulesForTemplate`) on every AI-generated output; no WebSockets (polling/SSE only).
- PR strategy: 7 PR splits (3.1 Loss Autopsy schema → 3.7 Model Journal), each tagged `@claude-review` triggering a 10-point auto-review checklist.

## Data sources named
- Master plan `docs/galaxy-sports-edge-master-action-plan.md` Part 5 (Phase 3), Part 2.C, Part 2.F
- Spec docs: `docs/product/*-spec.md` (galaxy-studio-spec.md with 9 acceptance conditions; game-room-spec.md with 8; twitter-bot-voice-spec.md with 9; discord-bot-spec.md with 11; model-journal-spec.md with 11; pre-mortem-pipeline-spec.md with 9; ledger-and-loss-room-spec.md "Loss Room" section)
- Template code at `C:\Users\Garrett\Documents\Claude\Projects\AI Sports\apps\web\lib\` (studio/templates/, twitter-bot/templates/, discord-bot/templates/, journal/prompts.ts, pre-mortem/templates/, compose.ts, compare.ts, compliance-scanner/rules.ts)
- Decision log entries DEC-010 (pricing tiers locked), DEC-011 (brand name/domain locked), DEC-020 (Claude API for LLM), DEC-026 (loader-extraction), DEC-028 (Phase 2 gate), DEC-029 (GateDecision model), DEC-030 (deterministic pre-mortem builder), DEC-031 (correlation schema validator scaffold)
- Pickup spec `CODEX_PICKUP_2026-05-22_LOSS_AUTOPSY_AND_PROMO_WIRE.md`; stuck queue `docs/ops/stuck-queue.md`; retrospective in `docs/ops/decision-log.md`

## Findings (numbers and facts, not vibes)
- Status at brief time: FIRING — Phase 2 verification gate passed (DEC-028); primary clone `C:\Users\Garrett\Sports`.
- Phase 3 = 6 deliverables over 3 weeks of planned work; all templates pre-written and importable.
- 7 acceptance-condition counts: studio 9, game room 8, twitter bot 9, discord bot 11, journal 11, pre-mortem pipeline 9.
- 11-condition Phase 3 → Phase 4 verification gate, including brand-safety scan zero hits and at least one Twitter event of each kind posted in production.
- 4 open items tracked: OPEN-P3-A (Studio TTL 90 days), OPEN-P3-B (no official Galaxy Discord server in v0), OPEN-P3-C (owner confirms Elite email digest at first essay vs Phase 4), OPEN-P3-D (no cross-post to Threads/IG/FB in v0).
- Explicit non-touch list: pricing tiers, brand name/domain, engine math (`packages/prediction-engine/`), Pick/PickSignalSnapshot/GameSignal scoring, Edge Lab tools, trust gates, Anti-Galaxy adversary model, programmable DSL, B2B widgets + API.
- Pre-mortem pipeline is wiring-only (builder already live per DEC-030); factor-movement re-run threshold 0.15; failure-tolerant (pick still publishes if generation fails).
- Twitter worker: 5-minute BullMQ heartbeat; watches 4 event types (new free-tier `Pick.publishedAt`, new gate decisions on operationally-significant games, new free-tier `Pick.settledAt`, new free-tier `LossAutopsy`); `AgentRunLog` row per attempt; hard refusals: never post paid picks, never post engagement bait, never post outcome predictions.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL:** The pre-mortem pipeline ("What Would Change Our Mind" surfaced per pick with factor-delta > 0.15 re-runs) is an accountability surface directly relevant to the trust-target intake — it records which signals drove a pick before outcome knowledge, mirroring the immutable `PickSignalSnapshot` honesty pattern. Serves the calibration/sizing lane.
- **OTHER (publishing/automation):** The 5-minute heartbeat bot with 12/day slate-state cap and 20/day ceiling, plus `MUTE_BOT` kill switch and per-attempt `AgentRunLog`, is a template for any future @GalaxySportsHQ autonomous posting — but note this brief targets an old account (@GalaxySportsAI, existing 2026-05) and old brand; do not import the handle.
- **OTHER (historical context):** Everything here predates the current GSE program (May 2026 era, "Galaxy Sports Edge" / "GSN" naming, Claude API, BullMQ/Redis) — use for archaeology only, not for current architecture.
- **COACHING:** No coaching content. **QB-BEHAVIOR:** None. **OL:** None. **SCHEME:** None.

## Engine-actionable? (yes/no + one-line what)
No — dated 2026-05-22 program brief for an obsolete platform iteration; intake as archaeology/context only.

# ops/archive/root-museum/CODEX_PHASE_3_BRIEF.md
## What it is (1-2 sentences)
Build brief (authored 2026-05-22 by Claude, for Codex to execute) for Phase 3 of the Galaxy Sports Edge platform: "Creator Layer + Transparency + Game Rooms + Bots" — six major deliverables (Galaxy Studio, Game Intelligence Rooms, Twitter/X bot, Discord bot, Model Journal weekly essay, Loss Autopsy schema landing) planned as three weeks of work across 7 PRs.

## Key metrics/methods (formulas where given, else "not specified")
- Pre-mortem re-run trigger: re-invoke the deterministic pre-mortem builder when an underlying `PickSignalSnapshot` factor moves by more than **0.15** before settlement.
- Twitter bot rate limits: max **12 slate-state posts/day**, **20 total daily ceiling**; `MUTE_BOT=true` env flag halts all posts.
- Studio `CreatorAsset` TTL default: **90 days** (OPEN-STUDIO-2).
- Phase 2 close baseline: **1,427 tests across 115 files** passing (verification gate DEC-028); Phase 3→4 verification gate has **11 conditions**.

## Data sources named
- Master plan `docs/galaxy-sports-edge-master-action-plan.md` (Part 5 Phase 3); spec docs at `docs/product/*-spec.md` (galaxy-studio-spec, game-room-spec, twitter-bot-voice-spec, discord-bot-spec, model-journal-spec, pre-mortem-pipeline-spec, ledger-and-loss-room-spec).
- Claude's scratch-clone template code at `C:\Users\Garrett\Documents\Claude\Projects\AI Sports\apps\web\lib\` (studio templates, twitter-bot templates, discord-bot templates, journal drafting prompt, compliance-scanner rules, pre-mortem templates/compose/compare).
- Persisted Prisma models: `LossAutopsy`, `LossAutopsyStatus`, `LossRootCause`, `GateDecision` (DEC-029), `Pick.preMortemContent` (DEC-030), `ModelJournalEntry`, `CreatorAsset`.

## Findings (numbers and facts, not vibes)
- Phase 2 verification gate passed (DEC-028); Phase 3 prerequisites all met except the Loss Autopsy schema landing (explicit Step 0) and template-code parity (IMP-003).
- Six deliverables in recommended order: Step 0 Loss Autopsy schema; Step 1 Galaxy Studio v0 at `/cockpit/studio` with 8 pre-written templates (fan-explainer, betting-education, x-thread, sponsor-safe, fantasy-angle, tiktok-reels-script, newsletter-block, youtube-titles); Step 2 Game Rooms v0 at `/room/[gameId]` (read-only, 5-tab lens switcher: Fantasy/Fan/Bettor/Creator/Analyst); Step 3 Twitter bot on `@GalaxySportsAI` with 4 template builders on a 5-minute BullMQ heartbeat; Step 4 Discord bot with 5 slash commands (`/pick today`, `/board status`, `/methodology`, `/explain [gameId]`, `/calibration`); Step 5 Model Journal (Friday data pipe → Saturday Claude draft → owner review → Sunday publish/RSS/Elite email → Monday Twitter teaser); Step 6 pre-mortem pipeline wiring (schema + publish-path hook + factor-delta re-run).
- Hard refusals enforced: never post paid picks, never engagement bait, never outcome predictions; Studio refuses thin-evidence games ("Evidence is thin — no asset generated"); no auto-post endpoint for Studio (hard-block by design).
- Trust gates stay OFF in Phase 3 (`PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `PUBLIC_BLOG_ENABLED`) — flipping them is a Phase 4 conversation.
- Open items tracked: Studio TTL 90 days (revisit after 30 days), no Galaxy-operated Discord server in v0, Elite email digest timing, no cross-posting to Threads/IG/FB in v0.
- PR strategy: 7 tagged `@claude-review` PRs (3.1 Loss Autopsy → 3.7 Model Journal).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Loss Autopsy + Model Journal + Game Rooms as public-accountability surfaces — **TRUST-SIGNAL**
- Pre-mortem pipeline with factor-delta > 0.15 re-run trigger and "What Would Change Our Mind" surfacing — **TRUST-SIGNAL**
- Bot voice rules (never outcome predictions, never engagement bait, past-tense publication copy) — **TRUST-SIGNAL**
- Creator-layer templates and distribution mechanics (Studio, Discord slash commands, journal pipeline) — **OTHER**

## Engine-actionable? (yes/no + one-line what)
No — product-build brief for publishing/distribution surfaces; contains no prediction math, factor research, or calibration findings.

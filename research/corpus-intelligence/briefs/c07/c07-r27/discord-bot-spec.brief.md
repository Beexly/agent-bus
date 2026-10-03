# product/discord-bot-spec.md
## What it is (1-2 sentences)
Phase 3 spec for a Discord bot mirroring the Twitter/X bot's free-pick feed with Discord-native primitives (embeds, threads, slash commands, ephemeral replies): slate updates, free pick publications, settlements, and loss post-mortem threads — distributed to community-run sports servers (no Galaxy-operated server in v0), with the same refusals as the Twitter bot.
## Key metrics/methods (formulas where given, else "not specified")
- Rate limits: channel posts max **20/day per server** (configurable); slash command responses **10 per 5 minutes per user**; slash commands default ephemeral.
- `MUTE_BOT=true` env flag halts ALL posts (slash commands return "Engine in maintenance").
- Embed colors: ultraviolet `#7B61FF` publications, grey `#888888` gated, win green `#4CAF50` / loss red `#E53935` / push amber `#FFB300` settlements.
- 5+ slash commands: `/pick today`, `/board status`, `/methodology`, `/explain [gameId]` (passes to Model Court Phase 4 layer), `/calibration` (Phase 4 chart image; Phase 3 ships as link).
- 11 acceptance criteria incl. post-mortem threads firing on losses within 24h, compliance scanner on every post, eval suite passing.
## Data sources named
- Content mirrors the Twitter/X bot feed; Game Room deep links `/room/<gameId>`; Model Court conversational layer for `/explain` (Phase 4); live calibration chart image (Phase 4).
- Account linking: `/galaxy connect` → DM one-time code → `galaxysportsedge.com/integrations/discord/link` → Galaxy NextAuth confirm → Discord-user→Galaxy-user binding; tier-aware slash output for linked PRO+ (factor breakdowns inline).
- Embeds carry: pick, line, grade, confidence, Edge Index, factor preview, "biggest contributor / biggest miss" on settlements, pre-mortem "What Would Change Our Mind" panel (Game Room).
## Findings (numbers and facts, not vibes)
- Six hard refusals, same as Twitter bot: no paid picks, no engagement bait, no predictions about games not yet scored, no comparisons to other services, no betting certainty language, no editorial sports commentary.
- Compliance scanner runs on every post; a red scan halts the post, logs to `AgentRunLog`, surfaces in the cockpit.
- Loss post-mortem thread structure is specified exactly: parent = loss settlement embed; reply 1 = heaviest signals at publish (3 factors); reply 2 = what changed between publish and settlement; reply 3 = what we got wrong (factor that misread); reply 4 = what this updates (factor-weight change or "this is variance"); reply 5 = full autopsy link `/performance/losses/[id]`.
- Daily morning digest: single embed 7am ET. Bot does not read DMs by default, does not join voice channels; install scope minimal; bot account verified.
- Eval coverage required at `docs/ops/evals/discord-bot-*.md`: one per post template, per slash command, per refusal trigger, per OAuth state (unlinked, linked-free, linked-pro, linked-elite).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: loss post-mortem threads, the compliance scanner, the refusal set, and the same-ephemeral-by-default design are trust mechanics.
- OTHER: distribution surface (Discord), bot operations, tier-aware output projection.
## Engine-actionable? (yes/no + one-line what)
Partial — the settlement embed's "biggest contributor / biggest miss" and post-mortem replies 1–4 require factor-contribution logging and loss-attribution wiring to exist upstream; the spec pins exactly which factor-level outputs the engine must be able to emit at settle time.

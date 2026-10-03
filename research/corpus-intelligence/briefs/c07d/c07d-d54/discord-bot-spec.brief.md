# product/discord-bot-spec.md
## What it is (1-2 sentences)
The Phase 3 build specification for a Galaxy-controlled Discord bot that mirrors the Twitter/X bot's free-pick feed (free picks, slate updates, settlements, loss post-mortems) using Discord-native primitives — embeds, threads, slash commands, ephemeral replies. Distribution: installed into community-run servers; Galaxy does not operate a mega-server in v0.

## Key metrics/methods (formulas where given, else "not specified")
No formulas. Quantitative parameters:
- Channel posts: max 20 per day per server (server-owner configurable).
- Slash command responses: unlimited but 10 per 5 minutes per user.
- Post-mortem threads fire on losses within 24h.
- Embed template fields: e.g. pick publication shows Confidence 73%, Edge Index 2.7; gated embed shows "Spread balanced at 51% consensus across 8 books", Edge Index 0.4; settlement shows "73% confidence" at publish + "WIN by 4" from 24-13 final.
- Colors: #7B61FF ultraviolet (pick), #888888 grey (gated), #4CAF50 win / #E53935 loss / #FFB300 push amber.
- Footer convention: "Model v6.0.4 · galaxysportsedge.com".
- `MUTE_BOT=true` env flag halts ALL activity including slash commands ("Engine in maintenance").
- Acceptance: 11 criteria (installable, publication/gated/settlement embeds, 24h post-mortem threads, 5 slash commands, account linkage, compliance scanner, rate limits, MUTE_BOT, eval suite).

## Data sources named
- Decision reference: master plan Part 2.E (distribution surfaces). Same content scope + refusals as the Twitter bot: no paid picks, no engagement bait, no predictions about unscored games, no comparisons to other services, no betting-certainty language, no editorial commentary.
- Code locations: `workers/discord-bot/`, `apps/web/lib/discord-bot/templates/`; install page `/integrations/discord`; link page `/integrations/discord/link`; evals at `docs/ops/evals/discord-bot-*.md`.
- Same compliance scanner as the Twitter bot (hard refuse on banned vocabulary; red scan halts post, logs to `AgentRunLog`, surfaces in cockpit).
- Cross-refs: `/room/[gameId]` Game Rooms, `/performance/losses/[id]` Loss Room archive, `/methodology`, Model Court conversational layer (Phase 4), `/board#calibration`, `/cockpit/journal/[entryId]`.

## Findings (numbers and facts, not vibes)
- **Four content primitives:** (1) slate-state embeds (thumbnail + Edge Index + Game Room link); (2) free-pick publication embeds (full factor preview); (3) settlement embeds (outcome emoji + biggest contributor/biggest miss); (4) loss post-mortem threads (5-reply structure: heaviest signals at publish → what changed → what we got wrong → what this updates → full-autopsy link).
- **Slash commands:** `/pick today` (ephemeral default, public:true option), `/board status` (live state strip data), `/methodology` (three-pillar summary embed), `/explain [gameId]` (Model Court passthrough in Phase 4), `/calibration` (Phase 3 = link to `/board#calibration`; Phase 4 = rendered chart image).
- **Welcome copy (locked voice):** "We're not AI. We're math you can read. ... Most days, fewer than five picks. Some days, none." — voice owner Claude, mirrors the board spec's "Most days, fewer than five picks" SEO line.
- **Account linkage:** OAuth via `/galaxy connect` → DM one-time-code → `galaxysportsedge.com/integrations/discord/link` → Galaxy NextAuth. Linked users get tier-aware output (PRO+ sees factor breakdowns inline; FREE sees public-tier); `/calibration me` and DM programmable alerts are Phase 4–5.
- **Bot does NOT read DMs by default, does NOT join voice channels; install scope minimal.**
- Open items (owner: Codex): OPEN-DISC-1 DM-only alerts (default yes, Phase 5); OPEN-DISC-2 per-channel sport filters (default yes); OPEN-DISC-3 Galaxy-operated official server (default no in v0, reconsider Phase 5).
- **Public/private doctrine consequence (INFERENCE):** same staleness as the board spec — embeds publish "full factor preview" in publication posts and factor breakdowns to linked PRO+ users, and the post-mortem thread enumerates factor scores publicly. Under the 2026-09-28 HARD doctrine (public = projections + rankings only; all underlying data/metrics/methodology internal), the Discord content templates need a doctrine-conformance rewrite before build. The "math you can read" positioning also conflicts with the NGS internal-only doctrine if any factor names leak NGS metric names publicly (the board spec's own 10/01 live privacy self-audit already caught one such NGS mention on a public page).
- Authorship: spec by Claude, code by Codex, voice rules locked.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (mechanism — but doctrine-flagged):** The settlement/post-mortem thread pattern (biggest contributor/biggest miss, heaviest signals at publish, what we got wrong, what this updates) is the trust-target intake's public face — honest loss autopsies build trust. But the 5-reply autopsy structure publishes factor-level detail that the 9/28 doctrine now keeps internal; the mechanism must be re-derived to publish outcomes + plain-language takeaways only. Serves the trust-target intake and the Loss Room lane (M-3.1 `LossAutopsy` feeds thread content).
- **OTHER (content pipeline):** The bot's publication embeds consume the same factor snapshot pipeline as the Game Room "What Would Change Our Mind" panel (M-3.2 pre-mortem fields) — wiring order matters.
- **OTHER (refusal semantics):** The six hard refusals (no paid picks, no engagement bait, no unscored-game predictions, no comparisons, no certainty language, no editorial commentary) are the standing voice-safety layer for ALL public surfaces including @GalaxySportsHQ drafts — engine-relevant for the X-engagement mandate.

## Engine-actionable? (yes/no + one-line what)
No — stale on content exposure relative to the 2026-09-28 public/private doctrine; flag for doctrine-conformance rewrite of the embed/post-mortem templates before any Phase 3 build.

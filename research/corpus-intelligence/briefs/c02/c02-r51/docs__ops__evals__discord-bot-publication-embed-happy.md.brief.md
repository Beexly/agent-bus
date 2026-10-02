# docs/ops/evals/discord-bot-publication-embed-happy.md
## What it is (1-2 sentences)
Eval spec for the Discord bot's pick-publication embed on the happy path: a new free-tier pick (BOS @ NYK, NBA, BOS -3.5, SOLID_PLAY, 73% confidence, Edge Index 2.7) triggers buildPickPublicationEmbed, with exact expected embed shape and 12 pass criteria. Status: pending-runner.
## Key metrics/methods (formulas where given, else "not specified")
not specified — this is a contract/UI eval, not a statistical one. Pass criteria assert exact string matches on embed fields (title "Published BOS -3.5 (SOLID_PLAY)", description containing "Confidence 73%" + "Factor breakdown", 3 fields named Edge Index/Sport/Game time, Edge Index value "2.7" one-decimal, color 0x7B61FF = decimal 8085503, url https://galaxysportsedge.com/room/nba-bos-nyk-2026-05-22, footer containing "Model v6.0.5" and "galaxysportsedge.com"), timezone-formatted game time "7:30 PM ET" (from 2026-05-22T23:30:00Z), compliance scanner status green, Discord API mock post verification, top-level (non-reply) post.
## Data sources named
Discord API (mock); brand constants BRAND_COLORS.ULTRAVIOLET (0x7B61FF).
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Publication embeds must carry exactly the pick facts: side (AWAY, BOS -3.5), grade (SOLID_PLAY), confidence (73), Edge Index (2.7, one decimal), sport (NBA), game time (7:30 PM ET), game ID (nba-bos-nyk-2026-05-22), model version (v6.0.5), canonical room URL.
- [TRUST-SIGNAL] Forbidden behaviors: no engagement bait ("who's tailing this?", "drop your locks below"), no emoji ladders (zero emojis), no "VIP"/"LOCK"/"HAMMER" framing, no paid-tier teaser, no banner image (Phase 5+ may add), broadcast-only (no replies in channel).
- [OTHER] Eval is a runner-pending contract: 12 assertions, compliance scanner must return green, post verified via Discord API mock as a top-level channel post.
## Engine-actionable? (no — this is a publishing-surface contract eval; no engine math, signals, or data)

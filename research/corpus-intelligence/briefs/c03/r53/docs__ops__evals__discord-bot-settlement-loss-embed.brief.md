# docs/ops/evals/discord-bot-settlement-loss-embed.md
## What it is (1-2 sentences)
Acceptance eval for the Discord bot's loss-settlement embed template (status: pending-runner): given a settled losing pick (MIN +6, PIT 28–MIN 19), `buildSettlementEmbed` must produce an exact embed (title, description naming the misread factor in first-person plural, 3 fields, LOSS-red color 0xE53935, exactly one ❌ emoji, no exculpatory language) plus a post-mortem thread of 4–6 zero-emoji follow-ups.
## Key metrics/methods (formulas where given, else "not specified")
not specified — template/contract eval, 10 pass criteria (exact title string, description regex ban list `\b(tough one|tough loss|next time|back tomorrow|the refs|bad luck|should have won)\b/i`, color == 0xE53935, footer contains "Post-mortem", exactly one emoji, first-person-plural voice, thread opened, 4–6 follow-ups with post-mortem structure, compliance scanner green on all).
## Data sources named
`buildSettlementEmbed(input, "https://galaxysportsedge.com")`; `buildPostMortemThread` (shared with Twitter bot templates); compliance scanner (`status: 'green'`); `/room/nfl-min-pit-2026-05-22`.
## Findings (numbers and facts, not vibes)
- Input: MIN +6 NFL loss, final PIT 28–MIN 19, 68% publish confidence, biggest miss factor restAdvantage, cause "MIN was more fatigued than projected", model v6.0.5, game ID nfl-min-pit-2026-05-22.
- Expected title: "Settled MIN +6 ❌ LOSS"; 3 fields — Result ("PIT 28 - MIN 19"), At publish ("68% confidence"), Outcome ("LOSS — did not cover").
- LOSS color must be 0xE53935 red — NOT amber (push) or grey (gated).
- Settlement embed carries exactly ONE emoji (❌); post-mortem thread replies use zero emojis; no celebration emojis on a loss.
- Forbidden: "tough one"/"next time"/"back tomorrow"/"the refs" exculpatory language and "don't blame us" language anywhere.
- Post-mortem thread structure: heaviest signals at publish, what changed, what we got wrong, what this updates, full breakdown link.
- Eval status: pending-runner (written 2026-05-22 by claude, not yet run).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public honest-loss reporting contract (no exculpatory language, named miss factor, post-mortem link) [TRUST-SIGNAL]
- Embed copy format/voice rules and compliance scanner gate [OTHER]
## Engine-actionable? (yes/no + one-line what)
NO — eval spec for social-surface copy QA, not a predictive-model input; only relevant if rebuilding the settlement-embed pipeline or its compliance scanner rules.

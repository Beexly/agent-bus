# docs/ops/evals/twitter-bot-settlement-loss.md
## What it is (1-2 sentences)
An evaluation spec (created 2026-05-22, status pending-runner) for the Twitter bot's loss-settlement post: given a settled NFL loss (MIN +6, lost by 9, game nfl-min-pit-2026-05-22), the bot must publish post 1 of a 4–6 post post-mortem thread that owns the miss with a specific named factor and zero exculpatory language.
## Key metrics/methods (formulas where given, else "not specified")
- Output constraints: contains "Settled" and "❌ LOSS" exactly; identifies one of the 11 listed factor names; includes "Post-mortem:" label; valid Game Room URL; ≤280 characters; exactly ONE emoji (the ❌).
- Banned-voice regex: `/\b(tough one|tough loss|next time|back tomorrow|the refs|bad luck|should have won)\b/i`.
## Data sources named
None named (template reference: `docs/product/twitter-bot-voice-spec.md`).
## Findings (numbers and facts, not vibes)
- Input case: MIN +6 NFL pick settled L (lost by 9, did not cover); biggest miss was `rest_advantage` (factor read +0.66 but actual cause was injury shock to a MIN starter); settled 2026-05-22T23:55:00Z.
- 9 pass criteria including: one-line cause statement naming the specific misread factor; first-person-plural "we got wrong" (no passive "what went wrong"); no future-tense optimism ("we'll get 'em next time"); no blaming refs/luck.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the own-the-miss playbook (name the specific factor, no excuses, post-mortem link) is directly a credibility/engagement doctrine; OTHER — eval harness for the bot surface.
## Engine-actionable? (yes/no + one-line what)
yes — the factor-naming + post-mortem-URL pattern is the template for public loss accountability on @GalaxySportsHQ.

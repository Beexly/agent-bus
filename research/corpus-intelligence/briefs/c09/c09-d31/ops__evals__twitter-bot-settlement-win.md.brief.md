# ops/evals/twitter-bot-settlement-win.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner, created 2026-05-22 by claude) for the twitter-bot `free-pick-settlement-win` template: a settled winning free pick must be posted in a strict format naming the heaviest factor contributor. Defines the CLE -7 fixture and six pass criteria plus forbidden behaviors.
## Key metrics/methods (formulas where given, else "not specified")
- Fixture: Pick CLE -7, NFL, settled WIN (Cleveland won 27-13, covered), heaviest factor contributor `schedule_stress` (factor score 0.74), game ID nfl-cle-mia-2026-05-22, settled 2026-05-22T23:55:00Z.
- Template: `Settled CLE -7 ✅ WIN — schedule stress signal was the heaviest contributor. Full snapshot: https://galaxysportsedge.com/room/nfl-cle-mia-2026-05-22`
- Pass criteria: "Settled" + "✅ WIN" exact; one specific factor named (from: consensus, depth, edge, line movement, volatility, head-to-head, venue form, schedule stress, rest advantage, cross-market, data quality); "Full snapshot:" label + valid Game Room URL; ≤280 chars; exactly one emoji; no banned vocabulary (`told you|called it|good call|cant fade|cannot fade`), no celebration emojis (🎉🔥💯), no self-congratulation, no community-disciplining language, no cross-promotion.
## Data sources named
Fixture only; links to `galaxysportsedge.com/room/<game-id>`.
## Findings (numbers and facts, not vibes)
- Factor attribution in the example: `schedule_stress` factor score 0.74 was the heaviest contributor to the CLE -7 pick — documents the factor vocabulary the engine exposes (consensus, depth, edge, line movement, volatility, head-to-head, venue form, schedule stress, rest advantage, cross-market, data quality).
- Status `pending-runner`: never executed at time of writing (INFERENCE from status field).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — settlement-posting eval spec; documents the engine's public factor vocabulary only.
## Engine-actionable? (yes/no + one-line what)
No — unexecuted bot template spec; only intake value is the named factor vocabulary list.

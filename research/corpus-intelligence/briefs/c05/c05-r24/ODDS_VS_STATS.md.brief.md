# docs/ops/ODDS_VS_STATS.md
## What it is (1-2 sentences)
Layering doctrine: own stats (games, box scores, settlement, model features) are history, learning labels, and ranking features; the Odds API (`THE_ODDS_API_KEY`) supplies only live book lines, implied p, edge vs model, and the `oddsInserted` kill switch. The two must never be conflated.
## Key metrics/methods (formulas where given, else "not specified")
- Kill switch: public picks 503 when last **SUCCESS + oddsInserted > 0** is older than **240m** Refresh SLA. (Empty slate / quiet board = honesty, not "stats broken.")
## Data sources named
- Own: games, box scores, settlement, model features
- The Odds API (`THE_ODDS_API_KEY`): live book lines
## Findings (numbers and facts, not vibes)
- Free-path is ABSENT-only: key present ⇒ paid path. Never delete/empty the key to force free.
- Crons: `refresh-odds` (insert lines when games exist — needs key + quota), `settle-picks` (grade from results — stats path), `calibration-metrics` (Brier/ECE/Murphy on settled model p).
- The Odds key is for LIVE lines + edge + board freshness, not a substitute for settlement stats.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the 240m freshness kill switch turns stale data into an honest empty slate rather than a silently stale board.
- OTHER: data-layering doctrine — settlement labels come from own stats, never from odds.
## Engine-actionable? (yes/no + one-line what)
Yes — encode the 240m freshness SLA on odds-fed features and keep settlement/training labels strictly off the odds path, mirroring the stats-vs-odds split.

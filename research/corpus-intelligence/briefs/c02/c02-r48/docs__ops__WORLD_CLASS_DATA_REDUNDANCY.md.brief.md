# docs/ops/WORLD_CLASS_DATA_REDUNDANCY.md
## What it is (1-2 sentences)
The world-class data redundancy spec: source-of-truth `lib/data-sources/source-router.ts` with dual free score chains per sport and free odds dual, under the law that the paid Odds API is optional (oddsApiRequired=false). It also names the operator/admin surface for monitoring coverage.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no metrics or formulas; redundancy matrix + operator endpoints).
- Free odds dual: Polymarket Gamma + Kalshi public (no Odds key required).
## Data sources named
- Scores, primary/failover per sport: ncaaf/ncaab — ESPN / henrygd; mlb — ESPN / MLB Stats API; nba — ESPN / BALLDONTLIE; nhl — ESPN / NHL web API; nfl — ESPN + nflverse (stats) / free:doctor.
- Odds: Polymarket Gamma + Kalshi public; paid Odds optional.
- Operator surface: `GET /api/cockpit/world-class-readiness` (admin); `freeCoverageMatrix()` / `redundancyGaps(2)`; `/cockpit/sources`.
- Agents / media / engines: draft-ready only; externalActions NONE; media auto-publish off.
## Findings (numbers and facts, not vibes)
- Every major sport has a defined primary + failover free score chain; NFL gets ESPN + nflverse (stats) with free:doctor failover. (OTHER)
- Paid Odds is optional by law (oddsApiRequired=false); the free odds dual is Polymarket Gamma + Kalshi public. (OTHER)
- Redundancy gaps measured by `redundancyGaps(2)`; coverage via `freeCoverageMatrix()`. (OTHER)
- Agent/media actions remain draft-only with auto-publish off. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All entries are data-plumbing/ops — OTHER
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content.
## Engine-actionable? (no — infra spec; the failover matrix is useful plumbing reference for the wiring lane but contains no new engine intelligence.)

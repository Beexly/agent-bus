# ops/FREE_SOURCE_USAGE_SCHEDULE.md
## What it is (1-2 sentences)
The standing law for which data sources GSE may use: only cleared free sources, no invented API keys, no paywall scraping, no random third-party key rotation; the paid Odds API stays optional (OfflineOddsProvider when the key is missing).
## Key metrics/methods (formulas where given, else "not specified")
Source preference table (NFL-first weekend mode):
- Scores/results: ESPN public (facts) first, nflverse schedules/results fallback, Odds API scores (licensed) last.
- Player/team stats: **nflverse (CC-BY)** first, ESPN public facts fallback, "never invent".
- Schedules: nflverse + ESPN. Injuries: nflverse injuries (labelled empty if stale; never invent designations). Weather: **Open-Meteo**. Odds: OfflineOddsProvider/offline books, The Odds API only if key present. PBP/NGS: nflverse hard assets.
- Cost tiers: nflverse free_unlimited (no rotation), Open-Meteo free_unlimited (CC-BY, no rotation), ESPN public free_quota (soft rotation — space scoreboard polls; free-spine every 2h is enough), MoneyPuck/Statcast catalog free_legal (sport-specific), Odds API licensed_flat (optional).
- Active schedule: every 2h `/api/cron/free-spine-health` (free score chains + nflverse currency + SUCCESS heartbeat); hourly player refresh (primary-only writers); settlement via free scoreboards + free-settlement path.
- Escalation: best-free-cleared-source → use free; else licensed key present AND rights cleared → use paid once; else empty/labelled-degraded — never fabricate.
- Implementation SoT: `apps/web/lib/data-sources/source-router.ts` (`freeCoverageMatrix`, `planIngestion`, `PLATFORM_SOURCES`).
## Data sources named
nflverse (CC-BY, free_unlimited; includes injuries, schedules/results, PBP, NGS hard assets), ESPN public (free_quota scoreboards/score facts), Open-Meteo (free_unlimited weather), MoneyPuck/Statcast (catalog free_legal, sport-specific), The Odds API (licensed, optional), offline books/OfflineOddsProvider.
## Findings (numbers and facts, not vibes)
- Free-spine health cadence: every 2 hours. Player stats refresh: hourly.
- ESPN scoreboard polling spaced at 2h is documented as sufficient.
- No parallel key-rotation workers permitted for uncleared APIs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the engine's cleared data-source inventory for QB behavior, coaching/scheme tendencies, OL pressure/sack attribution, and trust signals — nflverse PBP + NGS hard assets are the named primary feeds; ESPN public facts and Open-Meteo weather are secondary inputs.
## Engine-actionable? (yes/no + one-line what)
Yes — use this table as the engine's sanctioned free-data source map for every signal lane (nflverse CC-BY PBP/NGS/injuries first; never fabricate when a source is absent).

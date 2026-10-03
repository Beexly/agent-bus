# props/research/2026-09-18/firecrawl/FREEPUBLICAPIS-DEEP-DIVE.md
## What it is (1-2 sentences)
Deep-dive (2026-09-18) correcting the premise that freepublicapis.com is a sports data provider — it is a 1,300+ API directory whose only GSE value is as a keyless discovery/health meta-API, plus a vetted NFL-usable free tier in TheSportsDB; all odds-flavored entries are soccer-only.
## Key metrics/methods (formulas where given, else "not specified")
- freepublicapis.com meta-API: keyless, 1000 req/day, 3 GET routes (`/api/random`, `/api/apis/{id}`, `/api/apis` with `limit`/`sort` params), verified live 2026-09-18 via generated Go client contract.
- Health score 0–100 published per entry (daily testing: avg reliability %, error rate %, avg latency ms, CORS, "checked X hours ago").
## Data sources named
freepublicapis.com (directory + meta-API, CONFIRMED live); Go client github.com/go-api-libs/freepublicapis; directory pages for 5Dollar Football API, Free Sports API (TheSportsDB), iSports API; 5dollarfootballapi.com/docs; thesportsdb.com/free_sports_api; archive.org/wayback/available (no snapshot); dev.to soccer-API survey (cross-check only).
## Findings (numbers and facts, not vibes)
- Catalog scan (`?limit=2000`) for NFL/balldontlie/odds/ESPN found NO NFL odds APIs — balldontlie, Odds-API.io, The Odds API absent.
- TheSportsDB ("Free Sports API", id 69, health 95): free-at-access NFL schedules/teams/players/event scores; no odds, no play-by-play; $9/mo premium = 2-min livescores + V2 API. Recommended as schedule/roster enrichment fallback.
- 5DollarFootballAPI (id 1292, health 95): tick-by-tick soccer odds back to 2014, 19 bookmakers incl. Pinnacle on $25/mo Ultra — impressive model but soccer only; explicit DO-NOT-PURSUE.
- Recommended tasks: wire TheSportsDB as low-priority fallback; add a scheduled catalog sweep (health ≥90) for newly listed sports/odds APIs; re-scan quarterly; keep Odds-API.io/The Odds API/balldontlie as the real odds lanes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (data-source discovery/intake — infrastructure for the engine's data layer)
## Engine-actionable? (yes/no + one-line what)
yes — wire TheSportsDB (health 95, keyless) as a free schedule/roster/score enrichment fallback; add the scheduled catalog-sweep discovery job; keep the soccer-only exclusion on 5DollarFootballAPI so it is never re-researched.

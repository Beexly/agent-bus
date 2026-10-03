# props/research/2026-09-18/firecrawl/ODDSPAPI-CODE-DEEP-DIVE.md
## What it is (1-2 sentences)
Public-only technical recon (2026-09-18) of the OddsPapi odds API (`oddspapi.io`): complete /v4 endpoint inventory with cooldowns, auth contract, response schemas, NFL-specific surface (sportId=14, tournamentId=31), cross-vendor `externalProviders` ID map, and patterns from public GitHub recon repos. Plus a (failed) attempt to find a public BetOnline API surface. No logins, no keys, no paywall bypass used.
## Key metrics/methods (formulas where given, else "not specified")
- Cooldowns (CONFIRMED): /v4/odds 500ms, /v4/fixtures 2000ms, /v4/historical-odds 5000ms (304s count), /v4/sports|tournaments|bookmakers|markets 1000ms.
- Auth: `apiKey` as query parameter on every request, never a header (vendor's own NFL example).
- Error classification: 429 = valid JSON with `error.retryMs` (backoff); 404 → None (fixture absent); retention-window misses return NOT_FOUND, not UNAUTHORIZED.
- Close semantics: no `is_closing` flag — close = last `active` snapshot with `createdAt < startTime` (pre-KO cutoff mandatory; Pinnacle prices in-play).
- Budget math (from `alexandrosh8/sharp-ev-picks`): N=50–60 fixtures ≈ 70 req/month fits the 250/mo free tier.
- Snapshot density (from `mxvsatv321/cleatiq` soccer probe): ~6,000 snapshots/fixture, 30–90s cadence final 30 min pre-KO, 21 snapshots in T-7..T-3min window, T-5min Pinnacle anchor reliably present.
- Retention conflict (CONFIRMED both sides, unresolved): vendor docs claim "all historical odds since January 2026"; independent empirical probe (`cleatiq`, 2026-05-02) shows hard ~3-month retention (0–91 days full, 91–110 partial, >118 days NOT_FOUND).
## Data sources named
oddspapi.io official docs pages (sitemap, /en/docs/*); vendor NFL page (https://oddspapi.io/sports/american-football/nfl); public GitHub repos `mxvsatv321/cleatiq` (docs/oddspapi_recon.md), `alexandrosh8/sharp-ev-picks`, `pejofv93/prediction-intelligence`, `bangletsgetit/nba-ncaa-betting-models`, `andrewkorot/sports-odds-discrepancy-alert-scanner`, `Danymcflyy/OddsTracker`; api-evangelist/sportsbook-api third-party profile.
## Findings (numbers and facts, not vibes)
- NFL on OddsPapi: sportId=14, tournamentId=31; vendor's page showed 255 fixtures scheduled / 63 in next 30 days; 100 market families on sportId=14; 21 prop families; vendor's NFL example uses MAIN_MARKET_IDS ["141","143"] for the result market.
- Cross-vendor `externalProviders` map on every fixture: betradarId, mollybetId, opticoddsId, lsportsId, txoddsId, sofascoreId, betgeniusId, flashscoreId, pinnacleId, oddinId — "the cheapest canonical join in the whole recon corpus."
- Pinnacle `limit` (max stake) per snapshot is "a line-confidence signal no other free source carries"; Falcons v Panthers: 237 bookmakers quoted → 79 independent prices after grouping identical tuples; `cloneOf` does not track all duplicate books.
- `hasOdds` is false on every finished fixture (vendor-documented trap) — expected, not missing data.
- BetOnline: NO public API documentation found; site renders JS-only (no bundle URLs extractable via fetch-text); `api.betonline.ag` fetch failed; `/systeminfo`, `/healthcheck`, `/login`, `/join`, `/myaccount` disallowed by robots.txt — off-limits. INFERRED: needs a real browser/Firecrawl session.
- Dead domain: `api.oddspapi.com` has dead DNS; use `api.oddspapi.io` only. Legacy `https://oddspapi.io/api/v1` exists with different shape — do not conflate.
- 14 engineering rules enumerated for Sports (cooldown scheduler, tournamentId-based discovery, market-id-by-name resolution, ETag/If-None-Match for finished fixtures, 3-day max-age).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pinnacle limit-as-confidence + pre-KO closing-line capture → TRUST-SIGNAL (honest CLV bookkeeping machinery)
- externalProviders join map → OTHER (data-infra: collapses entity resolution across all downstream feeds)
- Retention-window-conflict resolution rule → OTHER (pipeline error classification)
## Engine-actionable? (yes — persist externalProviders ID map at fixture ingest; persist Pinnacle limit per snapshot; use tournamentId discovery and pre-KO close semantics for CLV; probe retention with a live key before any backfill)

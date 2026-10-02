# data-source-options.md
## What it is (1-2 sentences)
An approved-data-source catalog (last reviewed 2026-05-21) listing legitimate odds/stats API alternatives to The Odds API with rate limits, costs, ToS posture, and integration cost — The Odds API is the single source of truth; ESPN endpoints and GitHub "free" APIs are explicitly fallback/excluded.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Cost rollup: Odds API Starter $30/mo, api-sports.io deferred v2, SportsDataIO deferred v3, Anthropic ~$10, Neon free, Upstash free, Vercel $0–20, Cloudflare ~$0.83/mo → total ~$41–61/mo.

## Data sources named
- The Odds API (integrated; Tier-1): NFL, NCAAF, NBA, NCAAB, MLB, NHL, MLS + EPL/La Liga/Bundesliga; h2h/spreads/totals; 500 req/mo free, 10K/mo Starter $30, 100K/mo Standard; per-bookmaker `last_update` freshness.
- api-sports.io (Tier-2, deferred v2): 1100+ leagues, fixtures/lineups/team & player stats/head-to-head, limited odds; 100 req/day free, $19/mo Pro (7.5K/day), $39/mo Ultra (75K/day); live fixtures update every 15s; ~1 day integration.
- SportsDataIO (Tier-2, deferred v3): multi-book odds, play-by-play, player projections, injuries, weather; starter ~$99/mo, mid-tier ~$499/mo; ~2 days integration; end-user license for downstream products.
- ESPN public endpoints `https://site.api.espn.com/apis/site/v2/sports/...` (Tier-3 fallback only): schedule/scores/metadata, no odds; ToS warns third-party use is unofficial — never primary.
- balldontlie (Tier-3): NBA stats/schedules/players, NFL/MLB beta, no odds; 60 req/min free, $9.99/mo higher tier; commercial use allowed on paid tier; ~half-day integration.
- Explicitly rejected: scraping DraftKings/FanDuel/BetMGM (ToS prohibits), GitHub-account "free" APIs with no ToS (e.g. Public-FotMob-API reverse-engineered endpoints), any source bundling live streams.

## Findings (numbers and facts, not vibes)
- Four selection criteria for any source: public API with commercial-use terms, stable rate limits, freshness guarantees (cannot publish picks against stale data), reasonable pricing.
- SportsDataIO is the planned v3 replacement for The Odds API once monthly revenue exceeds marginal cost; api-sports.io unlocks non-odds content (lineup previews, injury reports) without scraping.
- New-source integration checklist includes reading ToS, env var `<SOURCE>_API_KEY`, client mirroring `odds-api-client.ts`, normalizer entry, tests, doc update, and `docs/data-sources.md` update.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) — Data-source procurement doctrine; no QB/coaching/OL/scheme content. (INFERENCE: api-sports.io lineups + SportsDataIO play-by-play/injuries/weather would feed future signal wiring, but the file only catalogs.)

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: SportsDataIO is the designated v3 play-by-play/player-projection source (injuries, weather, player projections) when revenue covers ~$99–499/mo, and api-sports.io is the v2 non-odds fill; ESPN endpoints are approved only as a secondary schedule cross-check, never canonical.

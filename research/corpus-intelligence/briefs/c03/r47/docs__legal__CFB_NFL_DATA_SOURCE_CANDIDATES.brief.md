# docs/legal/CFB_NFL_DATA_SOURCE_CANDIDATES.md
## What it is (1-2 sentences)
Owner-review catalog of 16 CFB/NFL data-source candidates, all GATED — none approved for public claims, StatKing evidence, Airwave feeds, or automation until each clears the source-provider + clearance gates and is promoted into `apps/web/lib/scraping/source-rights-registry.ts`. Machine-readable mirror: `apps/web/lib/scraping/sports-data-candidates.ts` with approval flags type-locked `false`.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; rights-gating evaluation).
- Standard verification gate per candidate: (1) key stored ONLY as env var, (2) read ToS — confirm commercial display + storage permitted, (3) verify each endpoint's real schema live before adapter, (4) record rate limits/freshness against the no-stale-data rule, (5) on clearance add registry entry and remove from candidate list.

## Data sources named
- High priority: CollegeFootballData/CFBD (free key, 1,000 calls/mo — games, box scores, win prob, SP+, trends); The Odds API NCAAF (`americanfootball_ncaaf`, 500 credits/mo, odds-only, already approved_api + wired); SportsDataIO CFB (free trial, deep D1 FBS feed — "images are graphics, not facts").
- Medium: henrygd NCAA API (no key, 5 req/sec/IP demo, self-host advised, NCAA.com-derived fallback); balldontlie NCAAF (~5 req/min, roster/identity supplement); Highlightly NFL/NCAA (100 req/day, live scores); API-SPORTS NFL & NCAA (100 req/day); Big Balls Sports Data (1,000–2,000 req/day); TheRundown (20,000 points/day, 5-min delay, market baseline not live trading); Sports Game Data (2,500 objects/mo, 10-min updates).
- Low/evaluation: SharpAPI NCAAF odds (12 req/min, 2 books); SportsGameOdds (free trial — confirm durable free tier); Sportradar NCAA Football v7 (enterprise, likely future-paid); Rolling Insights/DataFeeds (30-day trial); RapidAPI NCAA/CFB listings (per-listing rights review); StoryStats (free key, 10 req/day / 120/min subscribed).
- Secrets note: a StoryStats key and one other key were shared in chat/screenshot — treat both as compromised → rotate; owner labeled an inbound key "balldontlie" but the screenshot showed StoryStats — confirm provider mapping before wiring.

## Findings (numbers and facts, not vibes)
- Recommended sequence: CFBD first (free, deep CFB facts — terms read pending), then The Odds API NCAAF (already licensed, confirm sport key), then self-hosted henrygd fallback (OTHER: intake sequencing).
- Odds-only sources (The Odds API, TheRundown, SharpAPI, SportsGameOdds) feed the market baseline only — "they are not deep CFB stats and must not be presented as such" (TRUST-SIGNAL: evidence-type honesty).
- SportsDataIO feed is testing + licensing-analysis only (OTHER: rights posture).
- Freshness constraints: TheRundown 5-min delay, Sports Game Data 10-min updates — validate against the no-stale-data rule before live use (OTHER: freshness gating).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CFBD 1,000 calls/mo with games/box scores/win prob/SP+/trends — OTHER (primary deep-CFB intake candidate).
- "Images are graphics, not facts" (SportsDataIO) and odds sources are market baseline only — TRUST-SIGNAL (never present an odds feed as deep stats; source-rights discipline).
- Compromised shared keys → rotate; mismatched key labels must be resolved before wiring — TRUST-SIGNAL (secrets hygiene).

## Engine-actionable? (yes/no + one-line what)
Yes — sequence CFBD → The Odds API NCAAF confirmation → self-hosted henrygd fallback as the CFB intake ladder; route all through the clearance/source-rights registry before any engine use.

# docs/props/research/2026-09-18/firecrawl/nfl-odds-apis-metrics-50-links.md
## What it is (1-2 sentences)
A rebuild of a lost URL list: 50 live-verified (curl, HTTP 200/202 after redirects, 2026-09-18/19) URLs covering odds APIs, line-movement screens, betting splits/steam trackers, odds-derived metric sites, bookmakers/vendors, and open-source odds tooling — with explicit exclusions (bot-walled, dead, paywalled, or superseded-by-redirect sources).
## Key metrics/methods (formulas where given, else "not specified")
not specified — the file lists sources, not metrics; it names derived-metric concepts without formulas: ticket% vs handle% for RLM/steam detection; opening vs current line comparison; vig-removal ("no-vig calculators"); closing-line value (CLV); market-implied probabilities from spreads and futures.
## Data sources named
- Odds APIs: the-odds-api.com (v4, free 500 req/month, GSE's existing provider), oddspapi.io (api.oddspapi.io/v4, fixtures/odds/historical/scores/settlements/markets), Pinnacle API (sharpest book, closing-line benchmark), SportsGameOdds (free tier), OpticOdds, Sportradar, LSports, RapidAPI hub, Betfair Exchange API-NG (back/lay odds as purest market-implied probabilities)
- Line movement/screens: Don Best, SBR, Covers NFL odds, Vegas Insider, VSiN, Action Network NFL odds, OddsPortal, ScoresAndOdds, SportsBettingDime, Lineups
- Splits/steam: Action Network public betting (ticket% vs handle%), VSiN splits systems piece, BettingPros consensus, BetQL, Sports Insights, OddsPortal dropping-odds and blocked-odds
- Props odds screen: props.cash (freemium; props are a GSE watch item though `picks` has no prop market)
- Odds-derived metrics/ratings: The Power Rank (market-derived from spreads), ESPN FPI, Massey composite (100+ computer ratings), BettingPros odds/futures, Pickswise (model vs market ATS records), SportsLine (paid model), DRatings/Dunkel, Unabated (CLV, no-vig, alternate-line EV), Pregame
- Bookmakers/vendors: BetOnline (opens numbers first, key for opening-line capture), Genius Sports (official NFL data partner), Sportradar (official NFL data distribution), Stats Perform/Opta
- Open-source: the-odds-api samples (python + nodejs), coreyjs/the-odds-api, Scorpio1987/odds-api-client, robbiehaynes/arbitrage-finder, cvidan/bet365-scraper, golden-mane-labs/Sports-Betting-Demo (OddsPortal multi-sport scraper)
## Findings (numbers and facts, not vibes)
- 50 URLs, all verified live 2026-09-18/19 via curl; nothing guessed or invented.
- The Odds API free tier = 500 requests/month; GSE already integrates against it (`THE_ODDS_API_KEY`). OddsPapi = GSE's second odds source, with credit-governor-sized free quota tiers.
- BetOnline opens lines first — opening-line capture dependency. Betfair Exchange API-NG named as the purest market-implied probabilities and the vigorish-removal reference.
- Excluded despite being real: pro-football-reference.com, api-sports.io, betfair.com, oddsjam.com (403 bot-wall to curl); betstamp.app, sumnermetrics.com, kalshi.com (timeouts/blocked); sportsbookreview subpages, covers consensus/trends pages, actionnetwork /nfl/pro (404/dead); imgarena.com (redirects into sportradar.com, kept once); fantasylabs props page (paywall redirect).
- Companion historical-odds list (`nfl-historical-odds-50-links.md`) was not present in the repo; historical-odds URLs were deliberately excluded here to avoid colliding with it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GSE's existing odds stack is The Odds API (primary) + OddsPapi (secondary) + Pinnacle as the CLV/closing-line benchmark — OTHER
- Action Network ticket%-vs-handle% splits named as the raw input for reverse-line-movement/steam detection — OTHER
- Props.cash flagged as a props watch item even though the `picks` market excludes props — OTHER
- The Power Rank named as the closest public proxy of market-implied team strength, built from spreads — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — the open-source tooling section (arbitrage-finder cross-book comparison math, OddsPortal scraper pipeline, bet365 scraper) plus the Pinnacle/Betfair/Unabated CLV + no-vig references give directly reusable market-ingestion and vigorish-removal building blocks.

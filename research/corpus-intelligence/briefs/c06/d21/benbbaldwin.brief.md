# props/research/2026-09-18/notes/benbbaldwin.md
## What it is (1-2 sentences)
Source notes for @benbbaldwin ("Computer Cowboy") read 2026-09-18, documenting the method and data access behind his "Team Tiers" chart (2026-09-18) of market-implied win% vs a league-average team on a neutral field, blending near-term DraftKings game lines with division/conference/Super Bowl/playoff/#1-seed futures, plus the methodological lineage (market-implied power ratings from spreads) with verified URLs.
## Key metrics/methods (formulas where given, else "not specified")
- Market-implied power ratings lineage (from cited sources):
  - Posted game spreads → market-implied power ratings, with home-field adjustment (~0.62 spread points in the 2021 market per PFF piece).
  - Alternative SRS variant: take each game's spread, adjust for HFA (2.5 pts used), iterate SRS to solve team ratings; transitive spreads.
  - Gist implementation (boooeee/ed393cdf93723fab517bb6d596d48a47): build a team-incidence matrix (home − away), regress spread/margin on it; the intercept = HFA; coefficients are demeaned to league average zero.
- Inferred blend (not Baldwin's exact formula — explicitly marked as inference in the notes): latent team ratings r_i from spreads, where predicted home margin = r_h − r_a + HFA; convert American odds to no-vig implied probabilities; de-vig futures within each market; jointly solve ratings to fit spread-implied margins plus futures-implied neutral-field win probability (via margin→win logistic). Weighting of game lines vs futures is unknown.
## Data sources named
- The Odds API v4: base https://api.the-odds-api.com/v4/ (docs at the-odds-api.com/liveapi/guides/v4/) — sport key `americanfootball_nfl`, markets h2h/spreads/totals, bookmakers include draftkings/fanduel/pinnacle; API-key auth, paid/freemium.
- DraftKings NFL game-lines frontend: https://sportsbook.draftkings.com/leagues/football/nfl?category=game-lines&subcategory=game (public page; underlying JSON served to the SPA is undocumented).
- nflseedR (github.com/nflverse) for public schedule simulation.
- Lineage sources: PFF market-implied power rankings (pff.com/news/bet-2021-nfl-betting-broad-insights-market-implied-power-rankings/); Football Perspective implied SRS (footballperspective.com, 2021); boooeee gist implementation; Yahoo betting article on oddsmaker ATS-value panels (11 oddsmakers from 10 books).
## Findings (numbers and facts, not vibes)
- The 2026-09-18 "Team Tiers" chart blends near-term DraftKings game lines with five futures markets: division, conference, Super Bowl, playoff, #1-seed.
- HFA values: ~0.62 spread points (2021 market, per PFF); 2.5 pts used in the SRS variant. (INFERENCE: HFA values are year/context-dependent; the 2026 number is not in this file.)
- The rbsdm.com page itself could not be opened (developer terminal failure notice at the time of research).
- Odds-data access was verified via two GitHub sources (spablog25/nfl25-agent odds_api_v4_capability_map.md; danjhi/nfl-db CLAUDE.md) for The Odds API v4, and via nchemb/sports-odds-fetch endpoint-discovery.md for the DraftKings SPA JSON being undocumented.
- The weighting of game lines vs futures in Baldwin's actual blend is unknown; the notes' blend formula is an inference, not his exact formula.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-implied team strength (spread-implied ratings fused with de-vigged futures) — the standard objective team-tier baseline against which GSE model outputs are benchmarked.
- TRUST-SIGNAL: the notes explicitly distinguish confirmed-working endpoints from rumored ones and mark the blend formula as inference — the same honest provenance labeling the engine needs for any market-implied feature.
## Engine-actionable? (yes/no + one-line what)
Yes — fully replicable recipe: The Odds API v4 (verified access path) + team-incidence regression with HFA intercept + no-vig futures de-vig + joint rating solve gives an engine-internal market-implied team rating baseline for calibration and benchmarking.

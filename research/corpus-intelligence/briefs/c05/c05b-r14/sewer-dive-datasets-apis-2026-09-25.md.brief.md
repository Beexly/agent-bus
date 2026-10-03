# dfs/research/2026-09-25/youtube-builder-research/sewer-dive-datasets-apis-2026-09-25.md
## What it is (1-2 sentences)
A read-only inventory of NFL datasets, live APIs, and pipeline infrastructure patterns ranked by plug-and-play value to the GSE engine (top-10 ranked), plus publish-pipeline patterns stolen from 15 observed builders; all claims tagged DIRECT/INFERENCE.
## Key metrics/methods (formulas where given, else "not specified")
No formulas in file. Key data-shape facts:
- nflverse cadence: PBP nightly after game days; FTN charting 00/06/12/18 UTC in season; rosters daily 07:00 UTC; NGS player-week nightly ~03:00–05:00 ET; PFR snap counts/advanced 00/06/12/18 UTC; injuries rebuild daily 07:07 UTC (Friday designations land Saturday).
- CFB scored model PBP (sportsdataverse/cfbfastr-cfb-data): ~2.2M plays 2004–present, pre-scored EP, class probabilities, spread + naive WP, CPOE inputs, decision surfaces; weekly in-season republish.
- Warehouse scale references: 325K snap rows, 889K roster rows, 725K depth-chart rows (oooshiny/nfl-data-api); daily GH Actions → S3 partitioned parquet.
- Odds API billing intel: per event per market; **historical archive ~10x live rate**; ~1 req/run sustainable on 20K-credit plan; ESPN odds blocks deleted at final whistle with no backfill (capture pre-kickoff); Kalshi blocks browser-Origin requests (403 — proxy through runner); nflverse injuries rebuild 07:07 UTC.
- PropLine: free tier ~1,000 req/day; paid from $9/mo; prop settlement + line history/closing lines + Pinnacle-anchored no-vig fair lines + webhooks.
- Sleeper rate limit: <1,000 calls/min documented.
- SportsDataIO free tier data partially randomized (low value); API-Sports 100 req/day; MySportsFeeds personal from $5/mo, commercial NFL CORE $39/mo.
## Data sources named
nflverse (nflverse-data, nflreadpy, nflreadr/nflfastR — MIT), sportsdataverse cfbfastR/cfbfastr CFB data, ESPN undocumented feeds (`site.api.espn.com/apis/site/v2/...`, `cdn.espn.com/core/nfl/...?xhr=1`; gist nntrn/ee26cb2a0716de0947a0a4e9a157bc1c as canonical endpoint list), Open-Meteo Previous Runs + NWS api.weather.gov (ERA5 archive 5-day delay, ECMWF IFS 2017–; leakage-safe weather), Sleeper public NFL API, The Odds API (20K credits/mo owned), MySportsFeeds, FantasyPros public API, Fox Sports bifrost, PropLine (propline-mcp), OddsPapi, SportsDataIO, API-Sports, Odds-API.io, Sports Game Odds, football-data.org, covers.com odds history, SBR 10-year scraper (flancast90/sportsbookreview-scraper), OTC-derived contracts via nflverse, NFL Big Data Bowl 2026 (Kaggle, CC BY-NC 4.0 — non-commercial), HF candidates (keremberke/nfl-object-detection 9,947 helmet images public domain; Karmane rest-advantage/anytime-TD datasets gated), awesome indexes (JovaniPink/awesome-nfl-data MIT; JacobiusMakes/awesome-sports-betting-data CC0), nfelodcm (pip), oooshiny/nfl-data-api, ruthphilippe/nfl-nflverse-pipeline, Gridiron-Warehouse (Snowflake+dbt, MIT), tejseth RYOE xgboost gist (multi:softprob, 26 classes, 2010–2020), NFL Analytics with Python and R book PDF, nflWAR paper (degruyterbrill.com).
## Findings (numbers and facts, not vibes)
- Top-10 ranked by plug-and-play value; nflverse is "the spine"; cfbfastR closes the CFB gap; PropLine is the only candidate covering the prop-CLV gap.
- **Gap: no free trustworthy historical Pinnacle open+close NFL source found** (consensus archives like Covers/SBR are not Pinnacle/CLV-grade).
- Big Data Bowl 2026: ~4.9M rows, 272 games, ~14K plays, pre-/post-throw tracking 2023–2024; CC BY-NC 4.0 — research-only, cannot feed published picks or paid products.
- Publish-pipeline patterns (15 builders): Tuesday is industry rollover day (keyed to MNF settle + nflverse publish); immutable ledgers (TreMatt03 `predictions_log.csv`; sooth Merkle seal w/ git commit timestamp trust anchor); sub-hourly GH cron unreliable (sooth's */30 cron delivered ~3 runs/day instead of 48); split free/paid capture on separate schedules so drained credits can't kill evidence; cost ceilings as code (`--max-credits 40`/run).
- 0 confirmed live deployed public apps at check time; several HF Spaces down on scheduling failures.
- Open gaps listed: Polymarket/Kalshi APIs, historical Pinnacle open+close, NGS restricted access, vendor verification, ESPN ToS suitability.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Leakage-safe weather stack (Open-Meteo previous runs + NWS) = only verified backtest-safe weather source — weather is an outdoor-game signal.
- [OTHER] PropLine = prop settlement + Pinnacle-anchored no-vig fair lines — closes the prop-CLV measurement gap (props wiring lane).
- [TRUST-SIGNAL] Immutable ledgers + pre-registration (TreMatt03/sooth patterns) = the trust architecture for the public performance record.
- [OTHER] CFB scored PBP with pre-scored EP/WP/decision surfaces = engine feature-store shortcut for CFB expansion.
- [OTHER] Historical Pinnacle open+close gap remains open — CLV benchmarking still needs a licensed/durable source.
## Engine-actionable? (yes/no + one-line what)
yes — nflverse is confirmed the core feature store (with exact refresh cadences), PropLine fills the prop-CLV gap, and the Open-Meteo+NWS stack is the leakage-safe weather feed.

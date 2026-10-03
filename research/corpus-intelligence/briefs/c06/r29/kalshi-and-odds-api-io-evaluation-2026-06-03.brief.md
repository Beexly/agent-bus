# source-providers/kalshi-and-odds-api-io-evaluation-2026-06-03.md
## What it is (1-2 sentences)
A 2026-06-03 data-source evaluation grounded in live read-only probes that decides the closed provider stack: Kalshi public markets as the CLV/fair-value anchor and odds-api.io as the odds failover, while rejecting SerpApi, NewsData.io, and SportDB.dev and deferring Polymarket and Sportradar. It also documents a secrets-hygiene action item: several live keys were leaked in cleartext and must be rotated.
## Key metrics/methods (formulas where given, else "not specified")
- CLV-style metric: capture implied probability at lock + near start from Kalshi public markets; persist closing-line / closing-implied-prob snapshot at lock + near start to feed `computePickClv`.
- Spike mapping: ticker grammar `KX<SPORT><TYPE>-<DATE><MATCHUP>-<SIDE>`, refined to `KX<LEAGUE>GAME-<YYMMMDD><AWAY><HOME>-<SIDE>`; prices are `*_dollars` strings in [0,1] (`yes_bid_dollars`, `yes_ask_dollars`, `last_price_dollars`).
- Overround comparison: exchange overround ~0-0.5% (spike: 100.0% and 100.5% on two NYK@SAS markets) vs sportsbooks' 4-5%.
- FairValueSource interface for later drop-in: `getFairValue(game) -> { sides: [{ fairProb }], capturedAt }`.
## Data sources named
Kalshi public `/markets` (no auth; `/trade-api/v2/exchange/status`, `/markets`, `/live_data/batch` = play-by-play NOT prices); odds-api.io (failover, `ODDS_API_IO_KEY`); the-odds-api.com incumbent (`THE_ODDS_API_KEY`); API-Sports (`API_SPORTS_KEY`, results/settlement backbone); api-football (soccer only); SerpApi (Google sports one-box - REJECTED); NewsData.io (DECLINED); SportDB.dev (DECLINED); Polymarket (EVALUATED, DEFERRED as secondary cross-check); Sportradar (DEFERRED premium upgrade). Sample tickers: `KXNBAGAME-26JUN03NYKSAS-NYK`, `KXNBAGAME-26JUN05NYKSAS`, `KXMLBHR-...`.
## Findings (numbers and facts, not vibes)
- Spike results 2026-06-03 (scripts/spikes/kalshi-fairvalue-spike.mjs): NYK@SAS Jun 3 - NYK 36.5%, SAS 63.5%, overround 100.0%, deep liquidity vol ~4.7M, OI ~4M; NYK@SAS Jun 5 - NYK 37.8%, SAS 62.2%, overround 100.5%.
- Exchange overround ~0-0.5% vs sportsbooks' 4-5% - Kalshi is the cleaner fair-value anchor.
- Kalshi `/live_data/*` endpoints are play-by-play/game-stats, NOT prices - misidentification called out explicitly.
- Network note: machine behind TLS interception; curl fails exit 35 (SSL); `NODE_OPTIONS=--use-system-ca` + Node fetch works.
- Final closed stack: Kalshi (fair value/CLV #2), the-odds-api.com + odds-api.io (odds + failover #5), API-Sports (results/settlement/stats); drop SerpApi as source of truth.
- Five keys leaked in cleartext (prefixes: `3864fc39...` odds-api.io, `79044980...` api-football/API-Sports, `pub_694e6f...` NewsData.io, `eLxqkT...` SportDB.dev, `xai-p30o...` x.ai) - all must be rotated; x.ai key flagged most urgent.
- Guardrails: Kalshi public read-only ONLY, no orders ever (automated betting prohibited); odds-api.io key env-only.
- Sequencing: land Kalshi CLV (#2) -> wire odds-api.io failover (#5) -> evaluate API-Sports for settlement/evidence.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Exchange-implied probabilities as independent fair-value anchor; overround 0-0.5% vs 4-5% books; `computePickClv` -> TRUST-SIGNAL (honest calibration, transparent model-vs-close honesty doctrine).
- Public accountability via closing-line snapshot -> TRUST-SIGNAL.
- No QB/COACHING/OL/SCHEME content -> OTHER for provider plumbing.
## Engine-actionable? (yes/no + one-line what)
Yes - build the read-only Kalshi fair-value probe in packages/data-ingestion and persist lock/near-start implied-prob snapshots to feed computePickClv.

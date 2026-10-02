# ops/data-sources/FREE-PROVIDER-MAP-2026-09-03.md
## What it is (1-2 sentences)
A 2026-09-03 research map (by hermes, task H-S, zero live API calls) classifying free-tier sports data providers by source-rights (approved_api, approved_public_logged_off, approved_open_license, vendor_candidate, manual_research_only, excluded) with verified limits, rates, and coverage; odds sources hard-separated from schedules/results/stats sources.

## Key metrics/methods (formulas where given, else "not specified")
not specified — it is a limit/coverage map, not a method doc.

## Data sources named
- Odds (approved_api): The Odds API (500 credits/mo ≈16 req/day; 100+ sports/books; 30 calls/s), TheRundown (20,000 datapoints/day UTC, 200,000/mo; header-based billing).
- Stats (approved): TheSportsDB (30 req/min, public key `123`, approved_public_logged_off); OpenLigaDB (no published limit, approved_open_license — adapter already in repo at commit baaf32d09); football-data.org (10 req/min, 12 competitions, soccer only).
- Manual-research-only: ESPN unofficial API (~2,500 req/day community-tolerated, undocumented — extraction must route through clearance-engine.ts).
- Vendor candidate: MySportsFeeds (250 req/day, 7-day trial only).
- Excluded: API-SPORTS, Sportmonks, OddsJam/DG Fantasy (tools, not APIs), BettingPros/Props.Cash/Outlier.bet/PlayerProps.ai (no API), OrcaSports (does not exist — all search results unrelated).

## Findings (numbers and facts, not vibes)
- Classification outcome: 2 approved odds APIs, 1 approved public stats source, 1 approved open-license stats source, 1 approved API stats source, 1 vendor candidate, 1 manual-research-only, 1 excluded.
- TheRundown observed 429s in production (R-4 ledger entry 2026-08-20), implying active integration.
- The Odds API already integrated in repo (commit a865bdd8e); OpenLigaDB adapter exists (commit baaf32d09).
- ESPN rate limit is INFERRED from community practice, not contractual; no official ToS for API use — founder legal review owed before new extraction.
- Multi-market/multi-region requests consume multiple credits on The Odds API; no streaming (REST polling only); historical odds are paid-tier only.
- Honest gaps listed: OrcaSports not found; ESPN limit inferred; TheRundown detailed rate limit not published; OpenLigaDB rate limit not published. Zero live API calls were made (≤2 allowed).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the source-rights classification discipline (approved_public_logged_off vs approved_api vs vendor_candidate) is the ingest-layer integrity system.
- OTHER: data-sourcing limits and budget math for the ingestion lane.

## Engine-actionable? (yes/no + one-line what)
yes — use as the ingestion priority list: wire TheSportsDB/OpenLigaDB free paths, audit ESPN extraction through clearance-engine, budget the 500/mo Odds API credits.

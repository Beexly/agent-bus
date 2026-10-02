# data/sports-api-provider-policy.md
## What it is (1-2 sentences)
Doctrine governing every sports API integration in Sports OS: provider evaluation criteria (data quality, legal, technical, cost), pre-integration documentation, key security, attribution, health monitoring, and retirement procedures.

## Key metrics/methods (formulas where given, else "not specified")
- Provider evaluation: Criterion A data quality on a 1→5 scale (freshness/latency 1=>1hr delay→5=real-time; coverage 1=partial→5=full sport; historical depth 1=current season→5=5+ years; reliability 1=frequent outages→5=99.9% SLA; schema consistency 1=unstable→5=versioned), weights HIGH for freshness/coverage/reliability, MEDIUM for depth/consistency.
- Rate-limit monitoring: alert at 80% quota consumption (warn), circuit breaker at 95% (pause non-critical requests), log every 429.
- Key rotation: every 90 days minimum for critical providers (The Odds API); immediately on suspected compromise or team departure.
- Odds TTL: refresh at minimum every 30 minutes; every 5 minutes within 2 hours of game start (The Odds API accuracy requirement).
- Health check schema: `ApiProviderHealth` with lastSuccessfulCallAt, consecutiveErrors, quotaUsedPercent, latencyP95Ms, status enum (HEALTHY/DEGRADED/DOWN/QUOTA_WARNING/QUOTA_EXHAUSTED); alerts on status change, consecutiveErrors ≥ 3, quota ≥ 80%.

## Data sources named
The Odds API (active, commercial paid tier; permits commercial use, prohibits raw redistribution; attribution not required user-facing), Sportradar (GREEN, "Powered by Sportradar" required), Stats Perform/Opta, SportsData.io / MySportsFeeds (YELLOW), ESPN unofficial API (RED — do not use commercially), RapidAPI providers (YELLOW–ORANGE), OpenLigaDB/api-football free tiers (verify commercial terms).

## Findings (numbers and facts, not vibes)
- Only active integration: The Odds API at `packages/data-ingestion/odds-api/`. Prospective (not approved/implemented): official league injury reports, Sportradar, Sports Reference editorial.
- Odds refresh cadence: 30-min minimum TTL, 5-min within 2 hours of kickoff — a hard data-freshness parameter the engine can mirror for line-drift tracking.
- Retirement/migration procedure: new provider must be ADMITTED before old is retired; minimum 7-day parallel ingestion window; evidence-quality parity verified before cutover.
- Cross-source agreement (ESPN scores vs licensed scores) named in the companion sourcing doc as the next quality layer for settlement.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — provider governance; not football intelligence. One adjacent engine note (TRUST-SIGNAL tagged as data-trust, not player-trust): evidence items carry TTLs, statuses (ACTIVE/STALE/EXPIRED), and SHA-256 data hashes — the confidence-degradation plumbing for stale line/odds evidence.

## Engine-actionable? (yes/no + one-line what)
no — API governance doctrine; no behavioral stat feeds. One salvageable parameter: the 5-min odds TTL inside 2 hours of game start is a usable freshness bound for line-drift signal windows.

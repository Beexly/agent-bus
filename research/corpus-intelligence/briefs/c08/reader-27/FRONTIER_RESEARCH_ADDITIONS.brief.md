# docs/ops/archive/root-museum/FRONTIER_RESEARCH_ADDITIONS.md
## What it is (1-2 sentences)
Frontier research log entry adding the odds-data provider landscape and failover architecture beyond the standing source set, to fill risk R5 (single-provider ingestion single-point-of-failure).
## Key metrics/methods (formulas where given, else "not specified")
- Resilience > latency: GSE is a picks platform on a 30-minute refresh, not a live in-play book, so sub-100ms feeds are irrelevant; the requirement is resilience + a sharp anchor (Pinnacle).
- Architecture: introduce an `OddsProvider` interface in `packages/data-ingestion` (existing `OddsApiClient` becomes one implementation); primary = the-odds-api, secondary = SportsGameOdds (free tier to validate); fallback on primary failure/empty/quota-exhausted; record `provider` on `SourceSnapshot`; per-provider `trustLevel` (Pinnacle-anchored feeds weighted higher) via the existing `GameSignal.trustLevel` field; keep `FRESHNESS_THRESHOLD_MS` (1h) + readiness gates as the safety net.
## Data sources named
the-odds-api (current, ~40 books, credit-based, no sharp books), SportsGameOdds (80+ books incl. Pinnacle, WebSocket, $99-499/mo, free tier — best failover candidate), SharpAPI, OddsPapi (300+), OpticOdds (200+), OddsJam API (100+ historical odds feed), Sportradar (official/licensed, $10k+/mo). Comparison sources: sharpapi.io, sportsgameodds.com/blog, isportsapi.com, oddsmatrix.com.
## Findings (numbers and facts, not vibes)
- GSE's schema is already multi-provider-ready by design: `SourceSnapshot.provider`, `GameSignal.sourceName` + `trustLevel`, `SignalCategory` are all source-aware (verified-code); only the ingestion client is single-provider.
- Change accepted as an R5 mitigation path, gated on a second provider key (owner action); the interface refactor itself is safe to do ahead of time.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: every pick traceable to its feed via `SourceSnapshot.provider`; freshness gates reject stale data so a degraded feed never produces a stale pick.
- OTHER: sharp-anchor (Pinnacle) weighting for closing-line truth; provenance granularity for any CLV or confidence claim.
## Engine-actionable? (yes/no + one-line what)
Yes — wire an `OddsProvider` failover interface with per-provider trustLevel so Pinnacle-anchored closing prices are weighted higher in devig/CLV computations.

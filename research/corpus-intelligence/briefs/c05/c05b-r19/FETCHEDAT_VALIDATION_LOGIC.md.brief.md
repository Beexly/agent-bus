# docs/gse/FETCHEDAT_VALIDATION_LOGIC.md
## What it is (1-2 sentences)
Specification of a four-layer odds-freshness system for the GSE pick gate: row selection, a hard 6h freshness gate, an ops monitor, and a write path that never fabricates freshness.

## Key metrics/methods (formulas where given, else "not specified")
- `MAX_CANDIDATE_ODDS_AGE_MS = 6 * 60 * 60 * 1000` (6h) — hard refuse for live candidates; missing fetchedAt = freshness problem; age > 6h → STALE_ODDS with message "fresh odds (the latest quote for this market is stale)".
- Layer 1 (load-gate-slate.ts): select odds rows by **market** (SPREAD→SPREADS, ML→H2H), not arbitrary latest row; spreads: average prices of the batch sharing the latest fetchedAt in probability space; candidate uses that batch freshness as odds.fetchedAt.
- Invariant: a SPREAD pick must not use an H2H row's timestamp/prices.
- Layer 3 `classifyOddsFetchedAt(MAX(fetchedAt))` thresholds: ok ≤120m (no alert); warn >120m (no alert); stale >240m (alert yes); gate_breach >360m (alert yes); unknown null (alert yes).
- Layer 4: on successful fetch persist fetchedAt = real fetch time; on fail/402/empty — no synthetic prices, no fake freshness; never backdate fetchedAt or raise maxAge to force FIRE.
- Monitor SQL: `SELECT MAX("fetchedAt"), EXTRACT(EPOCH FROM (NOW()-MAX("fetchedAt")))/60 AS age_min FROM odds;`
- None of the layers widen the 6h budget. Monitor ≠ gate; cron may expose fetchedAt block + HC_ODDS_FETCHEDAT_PING_URL.

## Data sources named
- Odds feed (rows in the `odds` DB table), fetched by an internal odds fetch job in `load-gate-slate.ts`.

## Findings (numbers and facts, not vibes)
- Hard gate is 6h; ops monitor escalates earlier: warn at 120m, alert at 240m, gate-breach alert at 360m.
- Freshness measured against the market-specific latest quote, not the global latest row.
- Explicit policy: no synthetic freshness ever; no backdating; no raising maxAge to force a FIRE signal.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: explicit honest-freshness policy (never backdate fetchedAt, no synthetic prices on failed fetch) is the trust infrastructure behind the public "honest scorecard" framing in other docs.
- OTHER: ops-monitoring design (monitor ≠ gate; tiered alert thresholds).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the 6h hard gate + 120/240/360m monitor thresholds and market-specific quote selection if not already wired in load-gate-slate.

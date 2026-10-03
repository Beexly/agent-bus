# docs/statking-coverage-map.md
## What it is (1-2 sentences)
A 2026-06-13 Codex hardening-sprint artifact for StatKing that audits legally usable data coverage, seeds 546 sources / 800 candidate records, and defines a "live coverage" derived-metrics standard — a metric only counts as live if its source clears `checkClearance()` for commercial/derived use.
## Key metrics/methods (formulas where given, else "not specified")
- Opp-adjusted EPA/play ("our DVOA"): `epa ≈ leagueMean + offense + defense` solved by iterative coordinate descent over nflverse play-by-play (CC-BY-4.0), re-centred each pass — transparent + reproducible. Tier 1.
- Each new metric slice adds one verified row with a clearance + stat-commandment envelope: source · definition · weakness · timestamp.
- Single source of truth: `apps/web/lib/metrics/coverage-map.ts`, rendered from `coverageMapRows()`.
## Data sources named
nflverse play-by-play (CC-BY-4.0).
## Findings (numbers and facts, not vibes)
- 546 seeded sources, 800 candidate records, 500,000 candidate capacity, 2,200 discovery queries, 800 metric definitions.
- Brutal audit: CRITICAL — active, legally usable data coverage remains smaller than the seeded source universe.
- HIGH — licensed route, pressure, coverage, tracking, PFF-like grades, and trenches data need contracts or first-party charting.
- MEDIUM — backtesting and model proof are scaffolded with fixtures and need historical production predictions.
- Premium UX must explain trust, coverage, conflicts, and missing data in ten seconds.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opp-adjusted EPA/play via coordinate descent over nflverse: SCHEME
- Legally usable coverage smaller than seeded universe: TRUST-SIGNAL
- Route/pressure/coverage/tracking/PFF-like grades/trenches need contracts or first-party charting: OL (trenches data), OTHER (tracking)
- Backtesting/model proof scaffolded with fixtures, needs historical production predictions: TRUST-SIGNAL
- 546 seeded sources / 800 candidate records / 2,200 discovery queries / 800 metric definitions: OTHER
## Engine-actionable? (yes/no + one-line what)
yes — adopt the clearance-gated coverage-map pattern and the opp-adjusted EPA/play coordinate-descent method as the transparent "our DVOA" for internal reasoning.

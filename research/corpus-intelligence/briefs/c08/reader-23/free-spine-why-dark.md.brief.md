# docs/engine/research/2026-09-29/free-spine-why-dark.md
## What it is (1-2 sentences)
A 2026-09-29 root-cause investigation into why the free multi-source odds/scores spine reports HTTP 200 SUCCESS but produces zero odds rows, plus a Hermes addendum surfacing two observability defects the main report missed.
## Key metrics/methods (formulas where given, else "not specified")
Code-evidence chain with exact file:line references (`multi-source-scores.ts:168-192`, `clearance-engine.ts:96-100`, `source-router.ts:237-247`, `free-spine-health/route.ts:29-72`, `refresh-odds.ts:207-226`), grep confirmation of missing registry entries, and observable-evidence checks. Four ranked causes; the compound verdict is a runtime clearance gate blockade plus a liveness-vs-freshness health check.
## Data sources named
henrygd-ncaa, mlb-statsapi, balldontlie-nba, nhl-web-api (gated free candidates); nflverse (cleared, NFL only); espn-public-api (cleared, scores only — no odds in `needs`); open-meteo (cleared, weather); ESPN scoreboard API (site.api.espn.com); THE_ODDS_API_KEY and RUNDOWN_API_KEY (optional paid env vars).
## Findings (numbers and facts, not vibes)
- Ranked cause 1 (blocking): secondary free sources return `SOURCE_NOT_REGISTERED` from `checkClearance()` because none exist in `source-rights-registry.ts` — confirmed by zero grep matches; every fetch denied before any network call.
- Ranked cause 2 (structural): free-spine-health measures process liveness, not data freshness — writes IngestionRun SUCCESS with `oddsInserted: 0`; returns HTTP 503 only when `probeFailed` (all sports zero games AND all hard errors).
- Ranked cause 3 (expected): ESPN public API is cleared but its `needs` array excludes "odds"; it never provides prices.
- Ranked cause 4 (designed): board fill pipeline always runs (`hasOdds || true`), odds refresh soft-fails without keys; Game rows get seeded, Odds table stays empty.
- Hermes addendum defect A: `free-spine-health/route.ts:153` has dead conditional `if (hasOdds || true)` — the no-key branch is unreachable, so responses can't distinguish "no keys configured" from "keys present, upstream returned nothing."
- Hermes addendum defect B: `route.ts:104` passes hardcoded `oddsInserted: 0` into `recordFreeIngestionRun` unconditionally — the durable column is a constant, not a measurement (same defect class as SURF-13).
- Recommended next steps: register the four secondary sources, make health check 503 when oddsInserted===0, clarify ESPN's scores-only role, add odds-specific coverage to freeCoverageMatrix.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — ingestion pipeline observability; sports data sources are football-adjacent infrastructure (ESPN, nflverse) but the findings are about clearance gating, not signals.
## Engine-actionable? (yes/no + one-line what)
Yes — register the four secondary sources in `source-rights-registry.ts`, fix `oddsInserted` to a measured value, and make health check freshness-based so the free spine can actually feed engine odds.

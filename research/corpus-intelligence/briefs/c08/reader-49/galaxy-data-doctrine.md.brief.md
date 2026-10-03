# docs/data/galaxy-data-doctrine.md
## What it is (1-2 sentences)
The 2026-06-12 interpretation-engine doctrine establishing GSE's data moat (interpretation, not collection) with a stat commandment (publish contract), a triaged stat-factory table, and a build order for market/probability/narrative layers.
## Key metrics/methods (formulas where given, else "not specified")
- Market Gravity Index = conviction × agreement × liquidity (SHIPPED 2026-06-12).
- No-vig implied probability engine: `market-read.ts` — Shin de-vig per book, median consensus across books, book hold, marketDisagreementPct (SHIPPED 2026-06-12).
- Line Death Clock: drift + pp/hr decay rate on the fair board (SHIPPED).
- Pricing ladder gates on calibration + CLV ≥ 52.4%.
- Uncertainty: `assessUncertainty` (Wilson band, reliability tier, limitation flags) now PUBLIC on the calibration report (Honest Band, 2026-06-12).
## Data sources named
nflverse (play-by-play, snap share, NGS, pressure/coverage, injuries, QBR, combine, depth charts); The Odds API (line movement, consensus); per-book odds rows via slate-twin loader.
## Findings (numbers and facts, not vibes)
- Five stat questions as a publish gate: what does it measure · what does it miss · stable or noisy · has the market priced it · what decision changes.
- Stat commandment: no stat ships without source · timestamp · definition · sample size · recency window · opponent adjustment (or "none") · confidence/stability · known weakness · decision use · narrative explanation.
- "Decision use" mapping: EPA → team strength; CPOE → QB quality; Pressure → matchup stress; Line movement → timing; CLV → whether our process beats the market; Calibration → whether we deserve trust.
- Parked: new infra (DuckDB/Polars/Dagster/dbt/ClickHouse), QB Pressure Sensitivity (needs clean/pressure splits not in feed), Kelly/stake sizing stays gated (Elite, educational), analyst "agents" are pipeline stages not personas.
- Calibration-over-accuracy is already law; simulation cloud SHIPPED 2026-06-13 (illustrative Poisson margin distribution, transparent math).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CPOE → QB quality; Pressure → matchup stress (QB-BEHAVIOR, OL)
- Stat Stability Grade on production/snaps/edge (TRUST-SIGNAL)
- Market Gravity Index (conviction × agreement × liquidity) (OTHER — market layer)
- Pricing ladder gates on calibration + CLV ≥ 52.4% (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
No — governance doctrine, not an edge: the Stat Stability Grade and decision-use mapping are worth encoding in future uncertainty work, but nothing here is directly wireable into a model.

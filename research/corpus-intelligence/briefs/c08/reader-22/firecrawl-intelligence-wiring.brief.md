# docs/engine/research/2026-09-24/firecrawl-intelligence-wiring.md
## What it is (1-2 sentences)
Wiring pack that turns two Firecrawl deep-research agent runs (218 + 117 tool calls, 128 + 108 pages) into durable repo artifacts: 121 source candidates, 38 second-pass findings, an S0–S7 integration sprint, and a model-owned projection pipeline spec — reviewed against `main` at `7da237b` (Sep 25, 2026).
## Key metrics/methods (formulas where given, else "not specified")
- Numbers, not formulas: Brier **0.2478** RED vs ≤0.22 floor (calibration not publish-ready); 121 source candidates; 38 second-pass findings; 10-step model-owned projection pipeline; minimum durable schema lists 13 entity types (CanonicalEntity, SourceSnapshot, FeatureDefinition/FeatureSnapshot, LabelDefinition/LabelObservation, ModelArtifact/ModelVersion/ModelPromotion, PlayerProjection/ProjectionDistribution, OwnershipProjection, Contest/ContestSlate/SalarySnapshot, Lineup/LineupSlot, OptimizationRun, EvaluationReceipt).
- Highest-impact gaps (ranked): fantasy projections not model-owned (`dfs-slate.ts` values are manually authored constants); backtesting proof is fixture-backed, not historical; calibration not publish-ready; measurement shortage not signal shortage.
## Data sources named
Source registry additions in `packages/data-ingestion/src/source-registry.ts`: cleared-with-attribution (OpenLigaDB ODbL 1.0, TheSportsDB), use-with-caution (openf1, official NFL/NBA/MLB injury reports), paid-required (Sportradar, Genius Sports, Stats Perform, API-Sports, football-data-org, Sportmonks, Whoop, Oura). Already present: nflverse, SportsDataIO, Baseball Savant, StatsBomb-free (forbidden commercial), NWS/open-meteo weather, ESPN public API, Kalshi, The-Odds-API.
## Findings (numbers and facts, not vibes)
- 10 highest-impact gaps enumerated: projections not model-owned; ADP single-source/lazy; rankings adapter with no consumer; orphaned engine modules not on CI/schedule; Brier 0.2478; no `odds_line_snapshots` monitor (prior outages unnoticed); health data ≠ public injury news; fixture-backed backtests; PIT leakage risk; public superiority claims gated on S4.
- Build order contract S0→S7: truth/identity/rights freeze → durable contest plane → PIT feature/label store → model-owned baseline → calibration/evaluation → ownership/contest engine → shadow signal activation → production reliability.
- Hard rules: no training on "latest" tables without as-of filtering; no signal into a published probability without PIT leakage tests, purged walk-forward, market baseline, pre-registered kill line; no auto-publish/auto-bet until S4 gates pass.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the entire pack is a trust-signal document — evidence-first spine, PIT semantics, pre-registered kill lines, Brier-gated publication, abstention over guessing.
- SCHEME: game-script correlation feeds (injury, weather, tracking) scheduled under S6 shadow activation only.
- QB-BEHAVIOR / COACHING / OL: not addressed as football content.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the S0–S7 build order and the PIT/leakage-test gate for every new projection signal; the schema and sprint plan are already durable repo artifacts.

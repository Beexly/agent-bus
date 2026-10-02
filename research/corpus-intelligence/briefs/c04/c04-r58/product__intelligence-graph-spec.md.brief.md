# docs/product/intelligence-graph-spec.md
## What it is (1-2 sentences)
Phase 2 v0 spec for the Intelligence Graph — a pure-TypeScript typed-primitives module composing raw DB tables into `GameIntelligenceNode`, `SlateWeather`, `MarketPulse`, and `EvidenceHealth` read models consumed by Studio, Game Rooms, B2B widgets, and the public API. No DB writes, no caching, no network calls in v0.

## Key metrics/methods (formulas where given, else "not specified")
- `GameIntelligenceNode`: identity, teams, `edgeIndex` (number | null, public per DEC-003), `publishThresholdCleared`, `modelVersion`, picks, gateDecision, evidenceHealth, evidenceTimeline, bootstrap flags, composedAt, composedFromIngestionRunId.
- `MarketPulse`: consensus 0..1 weighted by book reliability; depth = dollar-weighted side depth across reporting books; lineMovement = direction, magnitude, velocity since open; volatility normalized vs market's usual range; sharpMoneySignal (null if no books reporting); booksPolled / booksReporting / lastObservedAt. Each sub-metric carries `confidence: 0..1` and `dataQualityFlag`; graph never erases data quality.
- `EvidenceHealth`: overall grade A/B/C/D/F; `bootstrapShare` 0..1 (fraction of evidence still bootstrap); `freshnessSeconds`; `conflicts` when sources disagree materially.
- `SlateWeather`: dateKey, sportsActive, totalGamesTracked/Published/Gated, averageEdgeIndex, slateDensity QUIET/NORMAL/HEAVY/OVERLOAD, notableConditions (outdoor weather, schedule clusters).
- Tiered projections: FREE sees Edge Index only; PRO sees factor breakdown; ELITE sees breakdown + pre-mortem + "What Was Learned" annotations. Public surfaces never receive EV/Kelly/win-rate (graph computes internally, projection strips).
- Invariants: no invented data (missing → null, bootstrapShare rises); evidence-grade F is a hard gate (`publishThresholdCleared = false` regardless of edge); model version stamped on every output; refusal is first-class output; graph never depends on a connector.

## Data sources named
- Existing schema tables: `Game`, `Pick`, `PickSignalSnapshot`, `GameSignal`, `SourceSnapshot`, `IngestionRun`, `LossAutopsy` (Phase 2 add, attaches to settled losing picks for the Galaxy Memory slot), `Promotion` (sponsor-safe blurb compliance). Wiring layer at `apps/web/lib/intelligence-graph/wiring/`; fixtures at `apps/web/__fixtures__/intelligence-graph/` (Claude-authored).

## Findings (numbers and facts, not vibes)
- Risk register: R-IG-1 — if `buildGameIntelligenceNode` exceeds 50ms on a representative game, homepage feels sluggish; mitigation: profile in Phase 2 verification, memoize if needed.
- R-IG-3 — entitlement bypass if surfaces read Prisma rows directly instead of through the graph; mitigation: lint rule flagging direct `db.pick.findMany` in route handlers.
- 9 acceptance criteria; 3 open items (evidenceTimeline last-20 vs paginated cursor; gated-game expression shape; ModelCourtCase answer caching per questionHash).
- `ModelCourtCase`: evidenceRefs are local-only, never wider web sources. Phase 4 surface; Phase 2 ships the type.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- MarketPulse sub-metrics (consensus, depth, line movement, sharp money) → OTHER (market-state aggregates, not player/coach football behavior).
- EvidenceHealth grading + conflict reports → OTHER (source-trust ops; "trust signal" in the tag sense means player/coach quotes revealing QB preference, which this is not).
- The no-public-EV/Kelly/win-rate invariant and evidence-F hard gate → OTHER (publication gating doctrine).
- No QB, coaching, OL, or scheme content in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — the single composition layer is where edge index, market pulse, sharp-money, and evidence grading feed every surface, so engine adjustments (weights, gates) belong at the graph level, never per-surface.

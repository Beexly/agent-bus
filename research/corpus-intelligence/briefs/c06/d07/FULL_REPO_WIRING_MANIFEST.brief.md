# engine/research/2026-09-24/FULL_REPO_WIRING_MANIFEST.md
## What it is (1-2 sentences)
The wiring manifest for the "all-knowing" GSE intelligence engine: it maps every data table, signal adapter, and code module in the Sports repo into a single `wireEverything(bundle)` / `runIntelligence(bundle)` entry point (`apps/web/lib/intelligence-core/engine.ts`) that outputs a calibrated probability (`calibratedProb`), a six-question reasoning spine, and a publish gate (SHADOW | WITHHOLD | CANDIDATE).
## Key metrics/methods (formulas where given, else "not specified")
Formulas not specified in this file. Publish gates with numeric thresholds: Knowability ≥ 0.35, Evidence health ≥ 0.3, Calibration gate: Brier ≤ 0.22, ECE ≤ 0.04 (auto-publish stays off until green). ELITE_PLAY grade always WITHHOLD (historically worst). Rights gate: `rights ∈ {cleared, use-with-caution, licensed}` else data stripped. SignalObservation schema: what/when/where/trust/freshness/rights/tier/lean. Six questions answered: what (all observations), when (latest knownAt), where (origins), reliability (trust × freshness), market belief (fairProb, books), improves decisions (edge, shift).
## Data sources named
DB tables: `injuries` (6,501 rows), `next_gen_stats` (2,718), `player_game_stats` (35,168), `team_game_efficiency` (634), `game_signals` (5,002 non-weather; weather portion count not given), `snap_counts` (29,513), `odds` / `odds_line_snapshots` (10.2M), `games` (3,601), `picks` (4,030, CLV/grade/tier), `pick_proof_receipts` (2,148), `jarvis_memory_events` (34,872), `depth_chart_entries` (2,242), `source_snapshots` (32,393). FTN charting CSV/parquet (47k plays: motion/PA/blitz). Code modules: `apps/web/lib/intelligence-core/`, `packages/data-ingestion/src/calibration-weights.ts`, `source-registry.ts`, `source-atlas-harvester.ts`, `context-enrichment.ts`, `apps/web/lib/data-sources/free-first-ingest.ts`, `multi-source-scores.ts`, `apps/web/lib/intelligence/`, `decision-genome/`, `intelligence-graph/`, `packages/prediction-engine/`, `gse-score/`, `edge-lab/`, `monitoring/`, `drift/`, `apps/web/lib/fantasy/`, `dfs/`, `market/`, `odds/`, `consensus/`, `weather/`, `statcast/`, `nflverse/`, `scoring/`, `settlement/`, `pick-explainer/`, `cockpit/`, `war-room/`, `explainers/` (evidence engine).
## Findings (numbers and facts, not vibes)
- Row counts per table: injuries 6,501; next_gen_stats 2,718; player_game_stats 35,168; team_game_efficiency 634; game_signals 5,002 (non-weather); snap_counts 29,513; odds/line snapshots 10.2M; games 3,601; picks 4,030; pick_proof_receipts 2,148; jarvis_memory_events 34,872; depth_chart_entries 2,242; source_snapshots 32,393; FTN charting 47k plays.
- Verification suite: 28/28 intelligence-core tests, 20/20 calibration-weights + source-registry tests, tsc clean — 48 tests green total.
- Remaining wiring gaps: `hadPaceSignal` (0 picks), `hadOfficialsSignal` (0 picks), `hadH2HSignal` (11 picks), `modelProb` 0/2,148 written to proof receipts, FTN charting not in reason(), Jarvis memory not in reason().
- Seven-step "wired" definition per signal (rights → adapter → allObservations() → GameBundle → signalPresence flags → modelProb to receipts → test); steps complete for injuries, NGS, player stats, ratings, weather, snaps, schedule density, market, calibration weights, source rights.
- The ONLY probability a customer may see is `calibratedProb`; `modelProb` is written to `pick_proof_receipts.modelProb`; `presence` to `pick_signal_snapshots`.
- Tier-5 (Jarvis chatter) observations are cockpit-only, never standalone.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Six-question reasoning spine (what/when/where/reliability/market/improves) — TRUST-SIGNAL
- SignalObservation rights/tier/trust/freshness provenance plumbing — TRUST-SIGNAL
- FTN charting motion/PA/blitz feeding PLAY_CHARTING adapter (pending) — SCHEME
- Snap counts + depth charts feeding SCHEME_TENDENCY — SCHEME
- injuryObservations() INJURY_AVAILABILITY adapter with 6,501 rows — OTHER (injuries)
- Calibration weights + Brier/ECE gates as engine guardrails — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — this is the master wiring contract: close the six listed gaps (pace, officials, H2H, modelProb write, FTN charting, Jarvis memory) via the 7-step checklist, then re-run the 48-test verification suite.

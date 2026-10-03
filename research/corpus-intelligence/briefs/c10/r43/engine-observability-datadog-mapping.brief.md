# dfs/research/2026-09-25/engine-observability-datadog-mapping.md
## What it is (1-2 sentences)
Maps Datadog's 4-pillar LLM observability whitepaper ("Best Practices for Monitoring, Optimizing, and Securing Your LLM Applications") onto the GSE prediction engine: pipeline health monitoring, input integrity/security, calibration + CLV quality evaluation, and end-to-end pick lineage. Requested by Garrett ("We're basically building this") following merges #910, #912 on 2026-09-25.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Four pillars with GSE metric mappings: (1) latency intake→published pick per sport/market, error rate per intake (DK Pick6, Underdog, PrizePicks, Sleeper, Action Network), API credits per prediction (Odds API 20K/mo budget), odds-feed staleness; (2) anomalous line movement detection (5-point jump on one source while others hold = flag, not ingest), per-source trust scoring decaying on errors and recovering on clean runs, secret hygiene (CI secret scan + pre-commit hooks); (3) binned calibration curves per market (predicted 60% should win ~60%), per-pick CLV in basis points aggregated by market/source/model version, out-of-sample promotion governance; (4) pick lineage trace: pick_id → model_version → intake snapshots (timestamps) → feature vector hash → raw model probs → calibration step → final prob → CLV at publish. Concrete alert rules: intake error spike, any feed stale >X minutes before lock, pipeline latency p99 breach on game day. Implementation: new `packages/engine-observability/` with trace.ts, pipeline-metrics.ts, source-trust.ts, nightly-calibration-report.ts; nightly calibration report cron (binned accuracy vs predicted prob, CLV aggregates, drift flags); wire `source-reliability.ts` → `multi-market-ensemble.ts` precision weights (called highest-value, smallest change).

## Data sources named
Datadog whitepaper; 5 live intakes (DK Pick6, Underdog, PrizePicks, Sleeper, Action Network); Odds API (20K credits/mo); repo modules `calibration-ladder.ts`, `apps/web/lib/calibration/ladder-state.ts`, `tracker/segments.ts`, `pick-clv.ts`, `oos-split.ts`, `source-reliability.ts`, `multi-market-ensemble.ts`, `intelligence/edge-board`.

## Findings (numbers and facts, not vibes)
- Merges #910, #912 already delivered half the building blocks; the gap is the observability layer tying them together.
- Highest-value follow-up named: wiring reliability scores → ensemble precision weights.
- Highest-leverage artifact named: nightly calibration report job (one cron, one report).
- Live incident cited: Neon `neondb_owner` leak into public repo → CI secret scan already gates full tree.
- Explicit non-copy rule: per Garrett's standing rule, learn methods, reimplement as GSE's own — no Datadog product/UX cloning.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-source trust scoring (decay on errors, recover on clean runs) feeding ensemble weights — TRUST-SIGNAL
- Anomalous single-source line movement flagged instead of blindly ingested (steam vs corrupt parser) — TRUST-SIGNAL
- CLV in basis points as continuous pre-record quality signal — TRUST-SIGNAL
- Pick lineage traces turning bad picks into debuggable bug reports — TRUST-SIGNAL
- Out-of-sample promotion gate for model versions — TRUST-SIGNAL
- Binned calibration curves per market as drift detector — TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes — build `packages/engine-observability/` (trace, pipeline metrics, source trust, nightly calibration report cron) and wire `source-reliability` scores into `multi-market-ensemble` precision weights.

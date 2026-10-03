# arxiv-program/research/2026-09-21/arxiv-program/index/WIRE-IN-PLAN.md
## What it is (1-2 sentences)
The master checklist (dated 2026-09-22) mapping every one of the 1,251 arxiv-program tracker papers into `corpus-index.jsonl` and from there into ≥1 engine capability bucket, with scripted verification, per-bucket strongest entry-point papers, and a standing wire-in loop.

## Key metrics/methods (formulas where given, else "not specified")
- **Verification numbers (scripted):** tracker rows 1251; index records 1251; tracker ids missing 0; index ids not in tracker 0; duplicate index ids 0; records missing keys 0; invalid doctrine tags 0; records with no bucket 0.
- **Verification method:** Python one-liner — normalize arXiv IDs (strip trailing version `v\d+`, lowercase), assert len(rows)==1251==len(recs) and ID sets equal, assert all records have buckets. Spot-check: 20 random index records verified against ledger files (title present, verdict matches, numeric-gate numbers present) — 20/20 clean.
- **Bucket wiring table:**

| Bucket | Papers | Owns |
|---|---|---|
| MODEL | 1,083 | Prediction machinery: ratings, win/spread/total models, tracking models, ensembles, RL policies, world models, TSFM backbones |
| INGEST | 566 | Signal pipelines: what to collect, schemas, APIs, tracking data, news parsing, feature stores |
| CALIBRATE | 494 | Uncertainty honesty: Brier/ECE, isotonic/Platt/temperature, conformal/CQR, Venn-Abers, CRPS doctrine |
| DECIDE | 274 | Sizing (Kelly), abstention, selective prediction, pick selection, bet timing |
| MONITOR | 219 | Drift detection, calibration alarms, regime change, continual-learning triggers |
| INVENT | 185 | Metric/signal invention: symbolic regression, feature discovery, alpha mining, residual mining |

- Papers carry multiple buckets where they genuinely span layers (e.g., conformal-selection = CALIBRATE + DECIDE + MONITOR).
- **Doctrine split across wired corpus:** 881 PROPRIETARY_EDGE, 152 SITUATIONAL, 118 INFRA, 100 BASELINE (market work = mathematical starting point, never the goal).
- **Per-bucket strongest entry points (paper IDs to start building from):**
  - MODEL: `2602.21307v2` (distill neural win-prob head into ≤10-term equations), `2211.04459v3` (flexBART drop-in for XGBoost), `2503.12107v1` (Chronos/Moirai TSFM backbone), `1301.2954v1` (fused/grouped-ability team ratings).
  - INGEST: `2508.17157v1` (SportSQL NL-query over Neon Postgres), `2510.04516v3` (ATB retry policy for data-fetch harness), `2111.12429v2` (tsflex time-series features).
  - CALIBRATE: `2504.01781` (CRPS + log-score doctrine), `1906.02530` (uncertainty-under-shift harness), `2603.24704` (conformal selective prediction), `2010.00781v1` (in-play calibration evaluation).
  - DECIDE: `2006.04779v2` (offline RL for the bet slate), `2105.08877v2` (bet timing as optimal stopping), `2402.16300` (conformalized selective regression / no-bet).
  - MONITOR: `2608.23808v2` (MinervaScore signal validation), `2603.24704` (walk-forward loss control), `2606.19642` (coverage burn-in protocol).
  - INVENT: `2305.01582v3` (PySR equation discovery on nflverse), `1601.00991v1` ("SportsAlpha" miner), `2608.05207` (engine residual mining), `2503.14434` (LLM feature-discovery harness).
- **Wire-in loop (standing process):** (1) new paper → ledger → tracker row → index record (14-key schema; merge script rejects index missing a tracker id); (2) new build cites the index ids it implements in its design doc (capability → paper traceability); (3) new signal gap → SIGNAL-GAPS.md dated entry; next research wave targets it; (4) ledger QA backlog: 64 `experimental` + 24 `mixed` lanes intentionally broad — future pass promotes best subdivisions to first-class lanes.
- Also documents the jq CLI patterns for querying `corpus-index.jsonl` per bucket (e.g. `jq -r 'select(.buckets|index("MODEL")) | [.arxiv_id,.normalized_lane,.capability] | @tsv' corpus-index.jsonl | head -50`).

## Data sources named
- `docs/research/2026-09-21/arxiv-program/state/ledger-tracker-750.jsonl` (1,251 tracker rows)
- `docs/research/2026-09-21/arxiv-program/index/corpus-index.jsonl` (1,251 index records)

## Findings (numbers and facts, not vibes)
- Full 1,251/1,251 coverage: every tracker paper indexed and placed in ≥1 engine bucket with zero missing IDs, zero duplicates, zero records missing keys.
- Bucket sizes: MODEL 1,083 > INGEST 566 > CALIBRATE 494 > DECIDE 274 > MONITOR 219 > INVENT 185 (papers multi-assigned; counts sum past 1,251).
- Doctrine distribution: 881 PROPRIETARY_EDGE, 152 SITUATIONAL, 118 INFRA, 100 BASELINE.
- 20/20 spot-checks clean (title present, verdict matches ledger, numeric gates present).
- Standing invariants: every new paper follows ledger→tracker→index; every new build cites index ids in its design doc.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** Program-level infrastructure — the full corpus index (corpus-index.jsonl), the six-bucket engine architecture (MODEL/INGEST/CALIBRATE/DECIDE/MONITOR/INVENT), and the standing wire-in loop with traceability from builds back to papers. This is the map for everything else; the per-bucket entry-point paper IDs are build-starting anchors.

## Engine-actionable? (yes/no + one-line what)
**Yes** — use the bucket wiring + entry-point IDs as the build order: start from the named anchor papers per bucket (e.g. `2503.12107v1` Chronos/Moirai for MODEL, `2604.01781` CRPS doctrine for CALIBRATE), and enforce the standing loop: every build cites index ids in its design doc and every new signal gap lands dated in SIGNAL-GAPS.md.

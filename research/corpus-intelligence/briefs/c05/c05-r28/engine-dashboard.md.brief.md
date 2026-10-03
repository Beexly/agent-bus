# reasoning/engine-dashboard.md
## What it is (1-2 sentences)
An auto-generated engine health dashboard (2026-09-27T04:42:38Z, built by `node scripts/overnight/build-dashboard.mjs`) reporting module-ledger counts, feature-catalog coverage, nflverse ingest manifest row counts/hashes, join-quality rates, scalarizer verdicts, and calibration numbers — every number read from its source file, with a strict refusals log.
## Key metrics/methods (formulas where given, else "not specified")
Calibration (2025 holdout, n=285 games): model Brier 0.223743 vs base-rate 0.249848 vs always-0.5 0.250000; log loss 0.636548; ECE (10 bins) 0.051868; Brier skill vs base rate 0.026105, 95% CI [0.010734, 0.041393] (interval excludes zero). Honesty bars (scalarizer f1): |r| >= 0.08 AND |slope| > se on walk-forward; f2 = duplication check; f3 = missing week-3 row. `probabilityClaimsAllowed` stays false by policy regardless of numbers. SignalFamily has exactly eight members. Module ledger: 63 rows — 57 catalogued, 4 blocked, 1 dark, 1 wired; only 1 of 63 rows names a real data file. Feature catalog: 11 rows vs 240 family labels in the upstream doc (deliberately not padded).
## Data sources named
`data/reasoning/module-ledger.jsonl` (63 rows), `data/reasoning/feature-catalog.jsonl` (11 rows), `data/gse-dataset/nflverse-ingest-manifest.json` (26 datasets, 1,061,511 rows total, seasons 2018-2025), `data/gse-dataset/join-report.json` (full pass 2018-2025), `data/reasoning/parts-registry.jsonl` (8 LIVE rows), `data/reasoning/dark-candidates.jsonl`, `data/reasoning/calibration-holdout-2025.json`.
## Findings (numbers and facts, not vibes)
- **Identifier break:** nflverse participation ids are bare numerics in 2018-2022 and GSIS ids in 2023+; join rates: snaps->rosters 0.6613 (135,808/205,355), contracts->rosters 0.9776, participation->rosters 0.3797 (3,019,631/7,952,525 slots — matched equals the GSIS count exactly, i.e., every joinable slot joined, no unjoinable slot quietly filled). Roster-dependent measurement may only use GSIS seasons 2023-2025; building a crosswalk was declared forbidden on this night.
- DARK families (honesty f1): coaching (16 attempts), narrative_contract (16 attempts), officials (n=269, r=0.027366, slope=0.208919, se=0.467033, 17 attempts), weather_physics (16 attempts).
- Refusals log: no push on any branch; no public win rate/ROI/units/hit-rate; no `priced: true` anywhere; no invented rows/join keys; no fitting on 2025 (2025 is the holdout); no loosening of bars.
- Decision-time price archive: accumulation only, `priced` stays false on every row — records prices seen at decision time, not settleable CLV.
- Datasets over the 90 MB ceiling: 0; disk-rows-vs-kept mismatches: 0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the dashboard is the anti-theater instrument — honest DARK labels with attempt counts, exact join-rate reporting with the identifier break named, calibration numbers with CIs, and a refusals log; `publishes_pick` false and `probabilityClaimsAllowed` false by policy.
- COACHING: coaching family measured DARK (16 recorded attempts, f1 honesty failed) — coaching signal has no measured edge in this framework as of 2026-09-27.
- OTHER: nflverse ingest manifest (1.06M rows, 8 seasons) is the measured dataset inventory; the eight-member SignalFamily and eight LIVE parts constrain the edge to measured signal only.
## Engine-actionable? (yes/no + one-line what)
Yes — the calibration numbers (Brier 0.223743, skill 0.026105 [CI excludes zero]) are the standing performance benchmark, and the identifier-break finding plus the exact join rates define the constraint that any roster-join feature must respect (GSIS seasons only).

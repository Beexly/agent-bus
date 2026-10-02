# docs/data-sources/research/2026-09-24/live-database-intelligence-report.md
## What it is (1-2 sentences)
A read-only intelligence snapshot of the live GSE Neon Postgres (ep-summer-moon-apv5ccys) mapping actual table scale, live pick calibration (3,263 graded W/L), signal-coverage gaps, and an immediate wiring queue; dated 2026-09-25 in the body (file path says 2026-09-24).
## Key metrics/methods (formulas where given, else "not specified")
- Calibration (live): 3,263 graded W/L picks; win rate 54.61% (1,782 W / 1,481 L); avg stated confidence 64.71; avg edge score 35.30; avg CLV -0.193 (close beats us on average); positive CLV 0 of 2,189 CLV rows.
- By pick type: MONEYLINE 66.6% (n=1,162, weight 1.22, BOOST); SPREAD 47.2% (n=1,076, weight 0.86, SHRINK); TOTAL 48.8% (n=1,025, weight 0.89, SHRINK).
- By sport: NCAAF 65.0% (n=663, weight 1.19, BOOST); MLB 52.5% (n=2,124); MLS 52.0% (n=306); NFL 47.7% (n=155, weight 0.87, SHRINK).
- By model: v5.2.7 56.8% (n=1,945); v5.1.0 51.7% (n=586); v5.2.6 54.2% (n=297); v5.0.0 49.4% (n=431).
- Confidence recalibration gaps (actual win% vs stated mid): bin 60 -> -8.7; bin 70 -> -18.4; bin 80 -> -33.7; bin 90 -> -42.1 (actual 52.9% vs stated 95). Rule: never publish stated confidence; always run calibratedWinProb().
- Signal impact (win% when present vs absent): line movement 51.8% vs 62.3%; rest 51.6% vs 58.9%; ATS form 50.0% vs 57.4% — attached contextual signals correlate with WORSE outcomes.
## Data sources named
Live Neon Postgres ep-summer-moon-apv5ccys, read-only. Tables: odds 8,083,183 rows (2.0 GB); odds_line_snapshots 2,213,952 (535 MB); player_game_stats 35,168; jarvis_memory_events 34,872 (reasoning history); source_snapshots 32,393; snap_counts 29,513; injuries 6,501; game_signals 5,002; opening_lines 4,923; gate_decisions 4,647; picks 4,030; pick_signal_snapshots 3,999; games 3,601; next_gen_stats 2,718 (receiving 1,425 rows / 220 players; rushing 664 / 87; passing 629 / 68; seasons 2025-2026); pick_settlement_events 2,578; depth_chart_entries 2,242; pick_proof_receipts 2,148; team_game_logs 1,400; team_game_efficiency 634.
## Findings (numbers and facts, not vibes)
- Signal coverage: hadOddsSignal 100% (3,999/3,999); hadLineMovementSignal 78%; hadScheduleSignal 78%; hadRestSignal 53%; hadAtsFormSignal 32%; hadH2HSignal 0.3% (11); hadInjurySignal 0% (6,501 rows available, never used); hadWeatherSignal 0% (adapters exist); hadNgsSignal 0% (2,718 rows); hadRatingsSignal 0% (modules exist); hadPlayerSignal 0% (35,168 rows); hadPaceSignal 0% (features exist); hadOfficialsSignal 0%.
- Proof receipts: 2,148 rows; marketFairProb populated 100%; modelProb populated 0% (blocks true Brier vs market). Avg market fair P 0.5186.
- Game context: avg rest home/away 19.7d/19.9d; avg line move (spread) -0.057; avg data quality 63.1; B2B home/away 360/369.
- Only the SCHEDULE game-signal family is populated (schedule_density_7d_home/away, 2,501 rows each); no injury/weather/ratings/pace families write into game_signals.
- Report's wiring queue: P0 = attach injuries to picks, populate modelProb, join NGS features; P1 = weather into game_signals, player-level features, team ratings; P2 = FTN charting motion/PA/blitz features (47k plays), CLV as diagnostic not target.
- What was wired this pass: packages/data-ingestion/src/calibration-weights.ts rebuilt from live picks (9 tests pass); calibration-weights-live.json; apps/web/lib/intelligence-core/ reasoning spine (8 tests pass); source-registry.ts 15 new sources (11 tests pass).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: live calibration weights from graded picks; publish/withhold gate decisions (4,647 rows); pick_proof_receipts with marketFairProb (modelProb empty); jarvis_memory_events as reasoning history (34,872 rows).
- OTHER: the all-knowing reasoning spine (reason() answers six questions, computes calibrated P vs market); CLV as diagnostic not a target; the unused-signal opportunity (injury/NGS/weather/player/pace/officials are the highest-value wiring items).
- QB-BEHAVIOR, COACHING, OL, SCHEME: INFERENCE — the report is a data/calibration snapshot; it names no sport-specific behavioral or scheme findings.
## Engine-actionable? (yes/no + one-line what)
yes — execute the P0 queue (injury + NGS attach, modelProb population for Brier), P1 (weather signals, player-level features, ratings); adopt the live weights (boost moneyline/NCAAF, shrink spread/NFL) and always run calibratedWinProb() before publishing.

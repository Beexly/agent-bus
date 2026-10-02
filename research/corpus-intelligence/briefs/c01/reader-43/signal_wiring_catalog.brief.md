# engine/research/2026-09-24/signal-wiring-catalog.md
## What it is (1-2 sentences)
A 2026-09-24/25 inventory of every unique data artifact found across 40+ local worktrees, the recovery bundle, and the main repo (781 unique files, 40.5 MB), classified into 9 signal families with wiring status per family.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration measured on 2,826 graded W/L settled picks: Brier (stated conf) 0.2675 vs floor ≤0.22 (RED); ECE 0.2339 vs floor ≤0.04 (RED); base rate 0.5453; base-rate Brier 0.2500 — model worse than constant.
- Anti-calibration curve (stated conf bin → actual win%, n): 50–59 → 44.4% (n=1,090, gap −10.6); 60–69 → 48.7% (1,194, −16.3); 70–79 → 48.5% (686, −26.5); 80–89 → 40.0% (260, −45.0); 90–99 → 39.7% (68, −55.3); 100+ → 44.0% (25, −61.0). Higher stated confidence wins LESS.
- Slice weights from empirical win%: MONEYLINE 66.3% (n=1,041, w=1.22); NCAAF 66.4% (491, 1.22); STRONG_PLAY 62.9% (151, 1.15); SOLID_PLAY 58.6% (619, 1.08); v5.2.7 56.6% (1,538, 1.04); ELITE_PLAY 43.1% (58, 0.79, suppress — grade inverted); SPREAD 47.0% (941, 0.86, shrink); TOTAL 48.5% (844, 0.89, shrink); v5.0.0 49.4% (431, 0.91, deprecate); basketball_nba 0.0% (26, no publish).
- Wired in this pass: `packages/data-ingestion/src/calibration-weights.ts` — `calibratedWinProb()`, per-family weight tables, `shouldSuppress()`, PUBLISH_ACTIONS; machine dump at `docs/research/2026-09-24/calibration-weights.json`; 8-assertion vitest test file.

## Data sources named
- FTN charting: `ftn_charting_2025.csv` (47,316 rows, 29 cols) and `ftn_charting_2022–2025.parquet` (~4 seasons) — rights-cleared via ftn-charting-openapi/local extracts with attribution. Play columns: starting_hash, qb_location, n_offense_backfield, n_defense_box, is_no_huddle, is_motion, is_play_action, is_screen_pass, is_rpo, is_trick_play, is_qb_out_of_pocket, is_interception_worthy, is_throw_away, read_thrown, is_catchable_ball, is_contested_ball, is_created_reception, is_drop, is_qb_sneak, n_blitzers, n_pass_rushers, is_qb_fault_sack.
- nflverse: games CSV (schedule/results spine), roster2025.csv, nfl-coverage.csv, player weekly/season stats JSON.
- Market: consensus_lines.csv, wave4b-markets2.jsonl, mlb_totals_clv_stability.csv, walkforward_2025_crps.csv, our_projections.csv.
- Settled picks: settled-picks.jsonl (3,323 rows, 2.25 MB) — source of truth for recalibration; modelVersion v5.0.0…v5.2.7; marketFairProb populated 1,046 rows, independentTrueProb 1,511, expectedClv/rankingP 1,511/1,839.
- FANTASY/DFS: dk-sunmon-slate-salaries-week3.csv (real DK salaries), oracle-report.json, fantasypts-bellcow-report-week1.csv, fantasypts-similarity-finder-washington.csv.
- CONTEXT/WEATHER: wave4b-weather2.jsonl, wave4-weather.jsonl.
- RESEARCH_CORPUS: phase2-candidates-bayes-raw-backup.jsonl (3.8 MB), corpus-index.jsonl (1.5 MB), IMPROVEMENT-LEDGER.jsonl (1.4 MB), dropback_epa_2025_all.csv.
- Rights/source graph: rights_ledger.json (512 KB), source_registry.json (500+ records), source_candidate_graph.json.

## Findings (numbers and facts, not vibes)
- CALIBRATION/OUTCOMES (92 files, 3.0 MB) is labeled the goldmine: 3,323 settled picks wired; stated confidence is anti-calibrated (ECE 0.2339, worse than constant); ELITE_PLAY grade inverted (43.1% win, suppress); MONEYLINE and NCAAF slices at 66.3–66.4%.
- FTN charting 2022–2025 (56 files, 12.8 MB) is "ready to wire" but has NO production caller — motion/PA/RPO/screen/blitzers/pressure features are the biggest unwired signal family, flagged as S6.
- Gap list: walkforward CRPS not feeding promotion gates (S4); CLV not auto-graded into settled picks (S4); DK Week 3 salaries not joined to projections (S1); player_weekly_stats identity crosswalk incomplete (S0); weather waves not in GameSignal writers (S6); phase2 Bayes candidates research-only without walk-forward (S3).
- FTN charting explicitly closes the "route/pressure/coverage/trenches" gaps from statking-gap-audit.md.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — FTN columns: qb_location, is_qb_out_of_pocket, is_interception_worthy, is_throw_away, read_thrown, is_catchable_ball, is_contested_ball, is_created_reception, is_drop, is_qb_sneak, is_qb_fault_sack — exact per-play features for trust-target, throw-quality, and scramble profiles.
- SCHEME — FTN columns is_motion, is_play_action, is_screen_pass, is_rpo, is_trick_play, is_no_huddle mapped to scheme-tendency family; n_offense_backfield, n_defense_box, starting_hash for formation context.
- OL — FTN columns n_blitzers, n_pass_rushers, is_qb_fault_sack mapped to pressure & protection family — sack-attribution and pressure-rate ground truth.
- TRUST-SIGNAL — calibration: never publish stated confidence; ELITE grade is inverted; NCAAF/MONEYLINE slices empirically strong.
- OTHER — weather waves, CRPS walk-forward, DK salaries, rights ledger (source clearance state).

## Engine-actionable? (yes/no + one-line what)
**Yes** — the largest unwired-behavioral-signal inventory in the corpus: FTN 2022–2025 charting (47,316 plays/season) has every QB-behavior/OL/SCHEME field (motion, PA, blitzers, qb fault sack, read thrown, catchable/contested) with rights cleared, but no production caller; plus calibrated win-prob weights (calibration-weights.ts) already wired for shadow boosting.

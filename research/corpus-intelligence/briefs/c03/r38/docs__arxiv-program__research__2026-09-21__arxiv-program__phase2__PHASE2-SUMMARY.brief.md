# docs/arxiv-program/research/2026-09-21/arxiv-program/phase2/PHASE2-SUMMARY.md
## What it is (1-2 sentences)
The Phase 2 completion summary of the arXiv 750-Valuable program (2026-09-21): the final accounting of the 750-paper target (724 ADAPT + 26 ADOPT), lane breakdown, reader accounting, reject/replacement and dedup accounting, corpus-overflow papers, and the commit sequence that closed the tracker.
## Key metrics/methods (formulas where given, else "not specified")
not specified (program bookkeeping; no formulas). Method: every counted paper has a full-text-read ledger with all 14 sections, exact `**Verdict:**` syntax, and independent coordinator verification (report↔ledger agreement, 4-way dedup vs tracker/master/ledgers/concurrent reports).
## Data sources named
Tracker: `docs/research/2026-09-21/arxiv-program/state/ledger-tracker-750.jsonl` (750 rows); arXiv papers only; ledger counts per reader; key commits 68d5ef3 → 980aa2f.
## Findings (numbers and facts, not vibes)
- Status: COMPLETE — 750/750 verified; 724 ADAPT + 26 ADOPT. Phase 1 (carried): 364; Phase 2 (wave 2): 215; Phase 3 (wave 3): 171.
- Lane breakdown (tracker): tracking_ngs 104, team_ratings 77, experimental 63, win_spread_total 60, calibration_uncertainty 48, odds_market 45, abstention 35, ensembles 26, causal_injury 23, kelly_sizing 22, data_api_infra 19, nlp_llm 19, props_player 18, calibration 16, props_fantasy 16, sizing 14, dfs 13, mixed 24, sports_CV 12, weather 11, markets 10, causal 10, ratings 9, ensembles-forecast-aggregation 8, bayesian_statespace 6, nlp 5, props_dfs 4, bayesian 4, tracking 3, sports_physics 1, calibration-postprocessing 1, score-distributions 1, metric-validation 1, season-forecasting-parsimony 1, (unlabeled/other) 21.
- Every REJECT was replaced with a full-paper read; wave-3 REJECTs = 18, all replaced.
- Corpus overflow (valid, uncounted): 3b3's 12 papers (1486–1497, in flight) + cleanup-b's 1447–1453 (7 papers) — stay in arxiv-deep/ as corpus material.
- Blocked: 0903.2243v5 withdrawn on arXiv; read from v4 with the 1201 REJECT ledger (disclosed).
- Dedup: 8 collision/duplicate corrections resolved (1309 renumber, 01b duplicate, 1354-1355, 1368-1370, 1447/1448, 1481, 2411.11012 counted once, version normalization).
- Tracker closed 750 via commits 68d5ef3 (699→701) … 980aa2f (747→750 COMPLETE).
- NOTE: the task-specified path `docs/arxiv-program/phase2/PHASE2-SUMMARY.md` does not exist; this file was read from its actual location `docs/arxiv-program/research/2026-09-21/arxiv-program/phase2/PHASE2-SUMMARY.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: program-level accounting document; the lane distribution itself is engine-planning intelligence — tracking_ngs (104) is the largest lane, win_spread_total (60) and calibration_uncertainty (48) next; no per-player/per-coach findings.
## Engine-actionable? (yes/no + one-line what)
no — bookkeeping artifact only, but the lane breakdown (INFERENCE) flags which sub-corpora to mine first for the engine: tracking_ngs 104, team_ratings 77, win_spread_total 60.

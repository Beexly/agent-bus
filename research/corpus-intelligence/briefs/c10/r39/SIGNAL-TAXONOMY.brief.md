# arxiv-program/research/2026-09-21/arxiv-program/index/SIGNAL-TAXONOMY.md
## What it is (1-2 sentences)
Index schema for the 1,251-paper arXiv corpus (1,203 ADAPT / 48 ADOPT, each full-text read and ledgered, dated 2026-09-22): an 11-signal taxonomy, lane normalization map, Garrett's doctrine tags (PROPRIETARY_EDGE / SITUATIONAL / INFRA / BASELINE), engine buckets, and the machine-queryable `corpus-index.jsonl` record schema. This is infrastructure/metadata, not a paper ledger.
## Key metrics/methods (formulas where given, else "not specified")
- Signal counts (raw keyword-extraction tallies): historical_results 350, game_state 195, player_tracking 158, market_odds_baseline 158, weather_environment 123, news_narrative 83, player_physiological 75, stadium_physics 35, officials 31, competitor_intel 26, social_relationships 10
- Doctrine tags: PROPRIETARY_EDGE 881, SITUATIONAL 152, INFRA 118, BASELINE 100
- Engine buckets: MODEL 1,083, INGEST 566, CALIBRATE 494, DECIDE 274, MONITOR 219, INVENT 185
- Lane normalization: 50+ raw lane spellings → normalized lanes (tracking 108, team_ratings 96, calibration 90, markets 81, win_spread_total 75, props_dfs 68, experimental 64, sizing 61, ensembles 60, abstention 60, causal_injury 58, nlp 50, weather 36, bayesian 35, data_infra 34, symreg_equation_discovery 27, auto_feature_eng 25, etc.)
- No formulas
## Data sources named
Not applicable — the "dataset" is the corpus itself (1,251 ledgered papers). Machine index: `corpus-index.jsonl` with schema (arxiv_id, title, tracker_lane, normalized_lane, suggested_lane, verdict, signals, capability, methods, key_equations, numeric_gate, ledger_path, doctrine_tag, buckets).
## Findings (numbers and facts, not vibes)
- Thinnest signals = next research targets: social_relationships 10, competitor_intel 26, officials 31, stadium_physics 35
- Garrett's law encoded: market-efficiency/CLV/devigging is BASELINE (starting point, never the product); frontier is situational/contextual intelligence
- Known limitations: signal/bucket/doctrine assignment is heuristic (~5–10% debatable); verdicts cross-checked against every ledger (0 conflicts); guardrails against false positives ("penalty"=LASSO, "temperature"=LLM sampling, camera calibration vs uncertainty calibration, RL "trajectories" vs player tracking)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: thin-signal gaps (social_relationships, officials, stadium_physics) map directly to where the engine is least informed — candidate lanes for new intake
- OTHER: corpus-index.jsonl gives the engine a queryable registry — e.g. `jq 'select(.buckets | index("INVENT"))'` pulls every invention paper with its numeric gate
## Engine-actionable? (yes/no + one-line what)
No — index metadata, not paper content; its value is as a queryable registry for downstream intake work, not an engine action itself.

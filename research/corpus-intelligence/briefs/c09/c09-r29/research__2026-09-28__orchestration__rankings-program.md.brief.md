# research/2026-09-28/orchestration/rankings-program.md
## What it is (1-2 sentences)
The Phase-10 plan for GSE's rest-of-season, week-by-week, and positional rankings products (weeks 4 through fantasy playoffs), triggered by a FantasyPoints.com radio ad claiming "most accurate 2025 projections" via hand-grading every play. Status 2026-10-01 audit: QUEUED — NOT BUILT, plan only; hard-gated behind locked projection source (Phase 1), adjustment layer + player signals (Phase 4), and off-field intake (Phase 9).
## Key metrics/methods (formulas where given, else "not specified")
- Internal accuracy: MAE / RMSE / Spearman vs. actuals per position per week, auto-scored after games finalize, with confidence intervals on differences
- FantasyPros accuracy methodology: rankings-vs-actuals accuracy gap, worst week dropped (benchmark context, not our formula)
- FFA MAE study (2019–2023, startable pool: top-20 QB/TE, top-50 RB/WR): simple average/consensus consistently near the top across positions and seasons
- Snapshot schema: {season, week, product, generated_at, input_hashes, model_version}; frozen on publish, revisions as new snapshots with changelog {old_snapshot, new_snapshot, changed_players, reason}
- Confidence display via confidence-tier pattern (Premium/Strong/Marginal/Pass), 9.2 Hold quality floor
- Adjustment format: TRIGGER → AFFECTED → DIRECTION → MAGNITUDE → LOG
## Data sources named
- FantasyPros accuracy leaderboards (fantasypros.com/nfl/accuracy/) — 150+ analysts scored; 2025 in-season winner Justin Boone (Yahoo); 2024 winner Tyler Orginski; Nathan Jahnke (PFF) most accurate in-season ranker in six straight seasons; draft rankings: Jody Smith (Draft Sharks) #1 on 3-year rolling window
- Fantasy Football Analytics MAE study (fantasyfootballanalytics.net/2024/12/which-fantasy-football-projections-are-most-accurate.html) — per-position leaders rotate year to year (FFToday, CBS, FantasySharks, NumberFire); FFA simple average consistently near top; ESPN excluded for incomplete data
- FantasyPoints (fantasypoints.com/nfl/projections): self-reported "#1 DFS Fantasy Projections" on DK, weekly correlation testing across 18 regular-season main slates, cites 0.71 correlation, "#1 among the top 5 biggest DFS sites, after finishing 2nd-best last year"; hand-charts every snap; Milly Maker subscriber wins 2023–2025; FSWA nominations; competitors anonymized ("Comp. 1–3"), methodology unpublished, not tracked by any independent benchmark
- FSTA awards (most accurate projections category)
## Findings (numbers and facts, not vibes)
- FantasyPoints' claim is DFS-projection correlation on DK slates — a different measurement than FantasyPros ranking accuracy or FFA projection MAE; self-reported correlation against unnamed competitors is not independently verifiable from public data
- Garrett explicitly killed any "our accuracy vs FantasyPoints" head-to-head scoreboard; public benchmarks for GSE: FantasyPros analyst registration or an FFA-style MAE comparison with identical population/weeks/metric
- Cost-honest play-level charting decomposition: automatable = play-level tagging pipeline (personnel, formation, coverage shell, route concepts, blitz ID) over all-22 where legally available + automated QC (cross-tag consistency, physical-plausibility anomaly flags) + diff-against-source with low-confidence review queue; genuinely needs human review = ambiguous coverage rotations/disguised shells, the QC review queue (sampled, prioritized — not every play), edge-case adjudication feeding training labels back
- Hard rule: rankings never maintain a separate projection fork; a divergence between the engine's pick and the published ranking for the same player/week is a bug, not a feature
- Scoring formats: publish PPR primary; record half-PPR/standard for audit; K/DEF rankings open item
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
SCHEME — automated play-level charting targets (personnel, formation, coverage shell, route concepts, blitz identification) that would feed formation/coverage tendency data
OTHER — fantasy rankings product spec, accuracy benchmarking, public validation arenas
## Engine-actionable? (yes/no + one-line what)
yes — the play-level automated charting pipeline spec (personnel/formation/coverage-shell/route/blitz tagging + QC + review queue) is directly buildable as the engine's tendency/coverage data source once the projection source is locked

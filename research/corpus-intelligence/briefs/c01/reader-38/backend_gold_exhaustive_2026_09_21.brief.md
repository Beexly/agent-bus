# arxiv-program/research/2026-09-21/backend-gold-exhaustive-2026-09-21.md
## What it is (1-2 sentences)
An exhaustive public-web methodology trace (dated 2026-09-21) documenting exactly how nine public fantasy-football analysts/authors compute the metrics they post, plus the open backend infrastructure behind them (nflfastR model cards, nflverse data cadence, ffopportunity, dynastyprocess, sportsdataverse). Formula-level, with inline primary sources and explicit GAP marks wherever methodology was not publicly found.

## Key metrics/methods (formulas where given, else "not specified")
### 1. Analyst-by-analyst formulas
- **Scott Barrett — Weighted Opportunity (RB predictor, published formula):** `1.28 × red-zone carries + 2.39 × red-zone targets + 0.47 × non-red-zone carries + 1.54 × red-zone targets` — correlations with PPR points: raw touches 0.89 → raw opportunities 0.90 → weighted opportunity 0.95 → red-zone-aware weighted opportunity 0.97. (This is Barrett's RB metric, NOT Marvin Elequin's WR WOPR — do not conflate.)
- **Barrett — xFP (historical PFF implementation):** each target valued by distance from end zone AND depth of target; each carry valued by distance from end zone AND down-and-distance; sum per-player expected values across workload; `actual − xFP` = points over expectation. No public coefficient table. Current FantasyPoints Data Suite xFP: model card/coefficients GAP (behind closed beta/account wall).
- **Barrett — Depth-Adjusted YPT over Expectation:** expected YPT from every WR target since 2007 conditional on air-yard depth; metric = `actual YPT − depth-conditioned expected YPT`; correlation with following-season targets rose 0.28 (raw YPT) → 0.31 (depth-adjusted). Smoothing/binning not published — GAP on coefficients. GAP: FantasyPoints "Pressure Rate Over Expectation" formula not public anywhere.
- **Marvin Elequin — WOPR (WR, published formula):** `WOPR = 1.5 × target share + 0.7 × team air-yards share`. GAP: whether his expected-points numbers are his own build, nflfastR EPA-derived, or ffopportunity's model.
- **Ian Hartitz — public metric definitions (from his own RotoWire "Stat Table Key"):** AY = air yards; Sn% = snap share; Rt% = route share; Tg% = team target share; AY% = team air-yard share; TPRR = targets per route run; aDOT = average depth of target; PROE = pass rate over expectation. Core analytical set = target share, air yards/air-yard share, routes, TPRR, aDOT (opportunity, not efficiency).
- **Hartitz — stabilization benchmarks:** TPRR stabilizes ≈ 7 games (≈185 routes) — fastest of the WR usage metrics; YPT stabilizes ≈ 39 games (≈205 targets) — slowest.
- **Joe A. (@joea_nfl) — grading legend (closed gap, verbatim from his free Patreon posts, 2022):** anchor = most average NFL QB (Colt McCoy; Andy Dalton or Kirk Cousins acceptable); Pedestrian = what you expect from the average QB; Solid = nice, somewhat encouraging; Great = legitimately surprising; a play you did not expect the average QB to make; Elite = a play you do not believe the average QB could ever make — typically any 50+ air-yard throw (LOS to catch point). "Clearly, this is all subjective, and the capabilities of the analyst matter. Such is the nature of scouting." Process: every chart ships as a spreadsheet — every game graded, season-long composites per QB, QB summaries, weekly grades, plus blank template; 2023: 10,000 snaps graded. Prefers letter-grade tiers over stack ranking. Remaining GAPs: Accuracy+, PGP, Cheap Play %, positive/negative play % undefined in these posts.
- **@sfdata9ers weekly QB table columns (observed):** Total QBR (ESPN-style), EPA/play, CPOE, success rate, time to throw, aDOT, YAC%, passer rating. No author-published methodology — GAP on his data source(s), QBR derivation, update cadence.
- **ESPN Total QBR (public description, proprietary formula):** all QB plays (pass, run, sack, penalty, turnover) valued by situation-weighted EPA-like contribution; clutch weighting; partial credit split by air yards/YAC/pressure via charting; scaled 0–100 with logistic regression.
- **PFF (public methodology page):** grading every player on every play since 2006; 200+ data points per play; each play reviewed, all-22 angles; senior-analyst review loop. Premium Stats definitions: Defensive stops = PFF-exclusive "win for the defense" formula; Elusive rating = yards after contact + missed tackles forced; Tackling efficiency = missed tackles per tackle attempt. Grades/data commercial (PFF ELITE).
- **@hawkblogger / SumerSports:** methodology marketing-level only (human + AI evaluation, frame-level info, per-snap player-role ID, receiver space creation, catch context) — GAP, commercial.
- **@acccountstat:** values averaged across NFL Pro, PFF, SumerSports — GAP on simple vs weighted mean, denominator alignment, missing-value handling, definition normalization.
- **@gridironinfo_:** no public methodology found — GAP.
- **AFA glossary (Advanced Football Analytics):** Air Yards = passing yards forward of LOS (total passing yards − YAC); WP = probability of winning given score/time/field position/down/distance from actual historical outcomes; WPA = WP(end of play) − WP(start of play); player WPA = sum over plays the player was directly involved in; EP = net expected point advantage of a down/distance/field-position situation (no score/time component, unlike WP).

### 2. nflfastR open model cards (full hyperparameters documented)
- **EP** (7-class next-score model: possession TD / opponent TD / possession FG / opponent FG / possession safety / opponent safety / no score). Features: half seconds remaining, yard line, home possession, roof type, down, yards to go, era buckets, both teams' timeouts. Training: objective multi:softprob, num_class 7, nrounds 525, eta 0.025, gamma 1, subsample 0.8, colsample_bytree 0.8, max_depth 5, min_child_weight 1. Calibration: leave-one-season-out, probabilities binned to 0.05 and checked against observed frequencies. All principal models are XGBoost.
- **WP:** `diff_time_ratio = point_differential × exp(4 × (3600 − game_seconds_remaining) / 3600)`; spread model adds `spread_time = posteam_spread × exp(−4 × (3600 − game_seconds_remaining) / 3600)`.
- **CP/xYAC:** yard line, home, roof, down, distance, air_yards − yards_to_go, era, air yards, zero-air-yard flag, middle vs non-middle throw, QB hit; xYAC adds distance from catch point to goal line.
- **xPass:** yard line, home, roof, down, quarter, half time remaining, distance, score differential, timeouts, spread and non-spread WP, era.
- Coverage: play-by-play back to 1999; cp, cpoe, xyac_epa, xyac_mean_yardage back to 2006; nightly in-season releases. Model artifacts shipped: nflverse/fastrmodels (`ep_model`, `wp_model`, `wp_model_spread`, `fg_model`, `cp_model`, `xyac_model`, `xpass_model`).

### 3. nflverse data cadence (public schedule page)
- pbp + player/team stats: nightly after each game day (intra-day on game days); stat corrections land Mon–Wed → **Thursday's pull is the cleanest**.
- Raw pbp JSON via `nflfastR::build_nflfastR_pbp()` usually available within ~15 min of game ending.
- FTN charting and PFR snap counts/advanced stats: 0/6/12/18 UTC daily. Rosters, depth charts, injuries: 7 AM UTC daily. NGS player-level weekly: nightly 3–5 AM ET.
- Depth charts from 2025: ISO8601-timestamped append-only updates, no week assignment. Participation: pre-2023 NGS (source died 2023); 2023+ courtesy of FTN, only after all postseason games.

### 4. ffopportunity (open xFP-equivalent)
- XGBoost + tidymodels trained on nflverse pbp 2006–2020; scores every pass/rush play independent of outcome (completion prob, expected YAC, expected TD prob). `ep_load()` precomputed / `ep_build()` rebuild; output ep_weekly (~159 columns), ep_pbp_pass, ep_pbp_rush; assets `ep_pbp_pass_{season}.parquet` / `ep_pbp_rush_{season}.parquet` under `latest-data` tag. Join key: gsis-style IDs (`00-00xxxxx`). License: code GPL-3.0; outputs/data CC BY-SA 4.0 (attribution required). Closest public equivalent of FantasyPoints' xFP — runnable and redistributable.
- Note: nflreadpy `load_ff_opportunity()` `season` column is a string (cast before filtering).

### 5. dynastyprocess/data
- Weekly GitHub Actions. `db_playerids.csv` (cross-source ID crosswalk — feeds nflreadpy's load_ff_playerids); `db_fpecr` (FantasyPros expert consensus rankings, weekly — feeds load_ff_rankings); `values.csv` (dynasty trade values). Archives/ holds stale files.

### 6. sportsdataverse/nfl-data (NFL Shield API parity pipeline)
- Builds nflfastR-parity pbp from NFL Shield API (raw: sportsdataverse/nfl-raw). Models: EP, spread-WP, naive WP, CP, xYAC, xPass, first-down, two-point, FG, WP, punt.
- **Public ESPN-QBR reconstruction:** XGBoost regression against ESPN's published raw QBR on six features — qbr_epa, pass_epa, rush_epa, sack_epa, pen_epa, spread. EPA components = per-game win-probability-leverage-weighted means; EPA clamped at −5 (fumbles −3.5); plays in 0.1–0.2 or 0.8–0.9 home-WP bands get 0.9× weight, outside bands 0.6×. Explicitly notes public EPA cannot reproduce ESPN's private charting-based credit assignment.
- Player percentiles: qualification 14 dropbacks / 6.25 carries / 1.875 targets per team game; Weibull `100 × (n + 1 − rank) / (n + 1)` by season and position table; null metrics stay null.

### 7. Banked findings (2026-09-21 evening parlay work)
- Cached parquets in ~/workspace/gse-lab/whalelay/: pbp_2025_2026, player_stats_2025_2026, schedules; scratch scripts angles.py/angles2.py/angles3.py, render.py, stafford_series.py.
- Corum 2025 = 8 receptions in 17 games (0.47/g, not "multiple per game"); Theo Johnson 45 rec / 15 games (3.0/g, 14/15 games with ≥1); Adams-with/without-Puka split is n=1 on the out side.
- Queued follow-ups: extend Stafford's history beyond 2026-W1 (bounce-back base rates after 0-TD, <200-yard games); uncertainty-aware leg hit rates (Wilson intervals on small samples); recommended visual: stabilization chart (TPRR vs YPT signal arrival, 7 vs 39 games) or sample-size honesty chart (Corum vs Johnson hit-rate distributions with CIs).

## Data sources named
- nflfastR (nflverse): pbp back to 1999, nightly releases; model artifacts at github.com/nflverse/fastrmodels.
- nflreadpy (Python/Polars nflreadr port): load_pbp, load_player_stats, load_team_stats, load_schedules, load_players, load_rosters, load_rosters_weekly, load_snap_counts, load_nextgen_stats, load_ftn_charting, load_participation, load_draft_picks, load_injuries, load_contracts, load_officials, load_combine, load_depth_charts, load_trades, load_ff_playerids, load_ff_rankings, load_ff_opportunity. MIT code; most data CC-BY 4.0; FTN data CC-BY-SA 4.0.
- nflverse-data releases: teams, schedules, team stats, player stats, ESPN QBR stats, weekly rosters (NFL Shield v2 API back to 2002), players/ID mappings.
- ffopportunity (ffverse): expected-fantasy-points XGBoost model + precomputed parquets, CC BY-SA 4.0.
- dynastyprocess/data: db_playerids.csv, db_fpecr (FantasyPros ECR), values.csv.
- sportsdataverse/nfl-data + nfl-raw: NFL Shield API parity pbp; public QBR reconstruction doc.
- nflverse-ts (TypeScript loaders): loadPfrAdvstats (2018+), loadNextgenStats (2016+), loadFtnCharting (2022+, CC-BY-SA 4.0), loadFfOpportunity.
- greerreNFL/nfeloqb (public QB Elo ratings, qb_elos.csv — repo page not yet opened; verify license/cadence before GSE use).
- Analyst surfaces: PFF articles (xFP, depth-adjusted YPT, weighted opportunity), thefantasyfootballers.com (Marvin WOPR series), RotoWire "Stat Table Key" (Hartitz definitions), Joe A. free Patreon posts (grading legend), pff.com/grades, fantasypointsdata.com, advancedfootballanalytics.com glossary.

## Findings (numbers and facts, not vibes)
- Weighted Opportunity coefficients published: 1.28/2.39/0.47/1.54 (RZ carries/RZ targets/non-RZ carries/non-RZ targets); PPR-point correlations rise 0.89 → 0.90 → 0.95 → 0.97.
- WOPR = 1.5×target share + 0.7×team air-yards share (Marvin Elequin, WR).
- Depth-adjusted YPT over expectation raised next-season target correlation 0.28 → 0.31.
- TPRR stabilizes ≈ 7 games / ≈185 routes (fastest WR usage signal); YPT ≈ 39 games / ≈205 targets (slowest).
- nflfastR EP: 7-class XGBoost, nrounds 525, eta 0.025, gamma 1, subsample 0.8, colsample_bytree 0.8, max_depth 5, min_child_weight 1; calibrated leave-one-season-out, probabilities binned 0.05.
- WP time-decay features: diff_time_ratio = point_diff × exp(4×(3600−gsr)/3600); spread_time = spread × exp(−4×(3600−gsr)/3600).
- Joe A. graded 10,000 snaps in the 2023 season; 50+ air-yard throw ≈ the operational "Elite" rule.
- sportsdataverse QBR reconstruction: XGBoost on 6 EPA features; leverage-weighted means; EPA clamp −5 (fumbles −3.5); WP-band weighting 0.9×/0.6×; percentile qualification 14 dropbacks / 6.25 carries / 1.875 targets per team game; Weibull 100×(n+1−rank)/(n+1).
- Thursday's nflverse pull is the cleanest (stat corrections land Mon–Wed); raw pbp JSON available ~15 min post-game.
- Empirical honesty findings: Corum 2025 = 8 receptions / 17 games (0.47/g); Theo Johnson 45 rec / 15 games (3.0/g, 14/15 games ≥1); Adams-with/without-Puka split n=1 on the out side (do not headline).
- Explicit GAP list (10 items) requires a live-browser X pass: @sfdata9ers sources/QBR derivation; @acccountstat averaging method; @joea_nfl Accuracy+/PGP/Cheap Play %/positive-negative play %; @gridironinfo_ entire trail; Barrett PROE + current xFP deltas; Marvin EP source; Hartitz TruMedia/OddsJam methodology; SumerSports whitepapers; greerreNFL/nfeloqb license; nflverse-data full release inventory.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR:** ESPN QBR public description (situation-weighted, clutch-weighted, scaled 0–100 via logistic regression); sportsdataverse's 6-feature XGBoost QBR reconstruction with exact clamps/weights; Joe A.'s average-QB-anchored grading protocol + 50+ air-yard Elite rule (process-over-stats template); @sfdata9ers QB table column set (QBR, EPA/play, CPOE, success rate, time to throw, aDOT, YAC%, passer rating).
- **OL:** FantasyPoints "Pressure Rate Over Expectation" referenced by aggregators but formula not public — GAP flagged as a hard-to-source OL signal (INFERENCE: a PROE-style pressure metric is a target for reverse-engineering once the live-browser pass completes).
- **SCHEME:** xPass model features (down/quarter/time/score/spread ERA-aware) and PROE (pass rate over expectation) as scheme-tendency surfaces; CP/xYAC feature sets (middle vs non-middle throw, QB hit, catch-to-goal distance) for play-design evaluation.
- **OTHER:** Full open data-stack blueprint: nflfastR model cards + trained artifacts (EP/WP/CP/xYAC/xPass/FG), nflverse nightly cadence (Thursday-cleanest pull rule), ffopportunity as runnable xFP-equivalent (CC BY-SA 4.0), ID crosswalks (db_playerids), ECR rankings (db_fpecr), stabilization benchmarks (TPRR 7 games vs YPT 39 games — "signal arrives week X" framing), and a 10-item GAP list requiring live-browser delegation.

## Engine-actionable? (yes/no + one-line what)
**Yes** — wire ffopportunity's XGBoost expected-points model as the open xFP-equivalent, adopt the nflverse pull-cadence rules (Thursday-cleanest, 15-min raw pbp), benchmark Barrett's Weighted Opportunity coefficients and Marvin's WOPR as composite features, and delegate the 10-item GAP list to a live-browser pass.

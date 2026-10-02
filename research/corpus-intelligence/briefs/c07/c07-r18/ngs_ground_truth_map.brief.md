# data/NGS_GROUND_TRUTH_MAP.md
## What it is (1-2 sentences)
Legal/data map for the GSE Expected Metrics feature (GSE-CPOE, GSE-RYOE, GSE-xYAC): compute own metrics from CC-BY-4.0 nflverse play-by-play and use NGS aggregates from the nflverse mirror purely as a validation referee — never copied into a served number, never scraped from proprietary origins. The load-bearing invariant: "NGS is the referee, never the product."
## Key metrics/methods (formulas where given, else "not specified")
- Formulas not specified (math lives in companion `docs/math/GSE_EXPECTED_METRICS.md`).
- Join key: nflverse `player_gsis_id` (matched to `PlayerExpectedMetric.playerId`).
- Grain filter on NGS side: `season_type == "REG"`, `week == 0` (season-aggregate row), `season == activeSeason`.
- Ground-truth columns: passing `completion_percentage_above_expectation` validates GSE-CPOE; rushing `rush_yards_over_expected_per_att` validates GSE-RYOE; receiving `avg_yac_above_expectation` validates GSE-xYAC.
## Data sources named
nflverse-data GitHub release mirror only: `play_by_play_<season>.csv` (plain CSV, column-projected to ~27 PBP_COLUMNS so the ~372-column, ~50k-row asset never materializes — OOM defense), `nextgen_stats/ngs_passing|_rushing|_receiving.csv.gz` (gzipped; combined all-seasons files, not per-season, because per-season `ngs_<season>_<variant>.csv.gz` 404s for recent seasons — the DATA3 currency fix). EXCLUDED: CC-BY-SA assets (ftn_charting, participation/pbp_participation), nextgenstats.nfl.com / nfl.com, Pro-Football-Reference scraping, AWS-hosted NGS endpoints.
## Findings (numbers and facts, not vibes)
- `fetchNgsGroundTruth` returns `GroundTruthPoint[]` that flow into `buildCalibrationReport` ONLY; they never enter `ExpectedMetricLeader`, `overExpected`, or any served number — NGS appears only inside the validation report as aggregate correlation statistics (`truthMean`, `pearson`), never as a per-player served metric.
- `canPublishProjections` is hardcoded `false` — historical measurement, not a projection or pick.
- Required attribution string stamped on every result: "Data from nflverse (nflverse-data), CC-BY-4.0. NGS values used as ground truth only." (CLAUDE.md invariant: attribution propagates to all derived outputs.)
- Source is ~$0: Node direct reads from the mirror with multi-host failover, no R runtime, no login, no contract.
- Doctrine: proprietary moats (PFF grades, NGS raw feed, SIS grades, DVOA) are built equivalents for, never copied (`docs/PROPRIETARY_METRICS_REPRODUCTION_STRATEGY.md`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: GSE-CPOE validated against NGS completion-above-expectation gives a referee-backed QB accuracy metric without re-serving proprietary data.
- TRUST-SIGNAL: the referee-not-product invariant; attribution propagation; `canPublishProjections: false` as an honesty gate; no evasion posture (no CAPTCHA/login bypass, facts only).
- OTHER: legal/license architecture — mirror-only, CC-BY-4.0 vs CC-BY-SA exclusion, ingestion governed via `assertIngestible("nflverse")`.
## Engine-actionable? (yes/no + one-line what)
yes — replicate the mirror-only/referee-only NGS pattern: compute own expected metrics on nflverse PBP, validate against NGS aggregates, never serve NGS values.

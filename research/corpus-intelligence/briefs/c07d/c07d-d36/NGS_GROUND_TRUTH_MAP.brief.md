# data/NGS_GROUND_TRUTH_MAP.md

## What it is (1-2 sentences)
The legal/data map for the GSE Expected Metrics feature: every byte comes from the open nflverse-data GitHub mirror (CC-BY-4.0), and NGS aggregates — CPOE, RYOE, xYAC via exact column names — are used ONLY as the validation referee (y-axis of a calibration correlation), never copied into a served number. It states the load-bearing invariant "NGS is the referee, never the product" plus the exact join key, grain filter, assets, and the hard line against touching proprietary primary sources.

## Key metrics/methods (formulas where given, else "not specified")
- **Join key:** nflverse `player_gsis_id` on the NGS side, matched to `PlayerExpectedMetric.playerId` (also a gsis_id) — "the universal player key across every nflverse dataset."
- **Grain filter on the NGS side:** `season_type == "REG"`, `week == 0` (season-aggregate row, not weekly rows), `season == activeSeason`.
- **Ground-truth columns (exactly one per variant, verbatim):**
  - passing → `completion_percentage_above_expectation` → validates GSE-CPOE
  - rushing → `rush_yards_over_expected_per_att` → validates GSE-RYOE
  - receiving → `avg_yac_above_expectation` → validates GSE-xYAC
- **Models served:** GSE-CPOE, GSE-RYOE, GSE-xYAC — fitted on public play-by-play; validated against the NGS columns above.
- **Validation shape:** `fetchNgsGroundTruth` returns `GroundTruthPoint[]` (`{ playerId, value }`) that flow into `buildCalibrationReport` ONLY. NGS values never enter `ExpectedMetricLeader`, `overExpected`, or any served number. The served `ExpectedMetricBlock` exposes `provenance` (our model), `leaders` (our values), and a `validation` report about the agreement — NGS numbers appear only inside `report` as aggregate correlation statistics (`truthMean`, `pearson`, etc.), never as per-player served metrics.
- **`canPublishProjections` is hardcoded `false`** — historical measurement, not a projection or pick.
- **Performance numbers:** none stated (no correlation values, no sample sizes, no fit statistics in this file). The doc is the data-rights map; the math lives in the companion doc `docs/math/GSE_EXPECTED_METRICS.md`.
- **PBP read shape:** column-projected to the ~27 columns the models actually read (`PBP_COLUMNS`) out of ~372 columns and ~50k rows (the OOM defense); full CSV text lives only transiently during the parse. `loadPbp` → `mapPlays`.
- **Attribution string (verbatim, stamped on every result in `NflverseExpectedMetrics.attribution`):**
  `Data from nflverse (nflverse-data), CC-BY-4.0. NGS values used as ground truth only.`
  Per-metric `validation.groundTruthSource` examples: `NGS completion_percentage_above_expectation (nflverse, CC-BY-4.0)`; `NGS rush_yards_over_expected_per_att (nflverse, CC-BY-4.0)`; `NGS avg_yac_above_expectation (nflverse, CC-BY-4.0)`.
- **Governance:** PBP ingestion runs through `assertIngestible("nflverse")` inside `loadPbp` before jobs run.

## Data sources named
- nflverse-data GitHub release mirror (CC-BY-4.0) — "the same public release assets that the R (`nflreadr`) and Python (`nflreadpy` / `nfl_data_py`) packages read"; read directly from Node with multi-host failover, no R runtime, no login, no contract, ~$0.
- Exact assets: `play_by_play_<season>.csv` (plain CSV, `response.text()`, column-projected); `nextgen_stats/ngs_passing.csv.gz`, `nextgen_stats/ngs_rushing.csv.gz`, `nextgen_stats/ngs_receiving.csv.gz` (gzipped CSV, gunzipped in-process; the **combined all-seasons** files, not per-season — the per-season `ngs_<season>_<variant>.csv.gz` 404s for recent seasons; this is the currency fix recorded in the execution ledger DATA3).
- **Explicitly excluded:** the CC-BY-SA nflverse assets — `ftn_charting` (FTN) and `participation` / `pbp_participation` (also on a rights-hold). "We do not use them here and they are not in the GSE Expected Metrics inputs" (matches `docs/STAT_INTAKE_COVERAGE_MATRIX.md`: "the only nflverse data we can't reach are the CC-BY-SA ones").
- **Hard line — never touched:** `nextgenstats.nfl.com` / `nfl.com` (NGS built on stadium tracking hardware under the exclusive NFL · AWS · Zebra · Wilson deal — "the raw feed is a hardware moat we do not touch"); Pro-Football-Reference / Sports Reference (not scraped here; repo uses PFR advanced stats only via the nflverse `pfr_advstats` mirror); AWS/Amazon-hosted NGS endpoints.
- Proprietary moats the repo builds equivalents for instead of copying: PFF, the NGS raw feed, SIS grades, DVOA (per `docs/PROPRIETARY_METRICS_REPRODUCTION_STRATEGY.md` and `docs/STAT_INTAKE_COVERAGE_MATRIX.md`).

## Findings (numbers and facts, not vibes)
1. Every byte the feature reads comes from the nflverse-data GitHub release mirror; the primary/proprietary origins are never touched.
2. License posture: CC-BY-4.0 — attribution required (attribution text propagates to every derived output per the CLAUDE.md rule), no share-alike, so fitted coefficients, GSE-CPOE/RYOE/xYAC values, provenance, and validation reports are GSE's own IP; only upstream facts require credit.
3. NGS aggregates are the **combined all-seasons** files filtered in-process to the active season; the per-season files 404 for recent seasons (execution-ledger DATA3 currency fix).
4. From NGS the loader reads exactly one ground-truth column per variant (the three columns named above) plus the keys needed to filter and join; no other NGS column is retained.
5. The load-bearing invariant: an NGS value is used only as the y-axis of a validation correlation and is never copied into a served metric; what is served is always the engine's own computation.
6. `canPublishProjections` is hardcoded `false`; the feature is historical measurement, not a projection or pick.
7. Every surface rendering GSE Expected Metrics must propagate the attribution string; do not strip it (CLAUDE.md invariant).
8. Root CLAUDE.md reminders applied: no evasion (no CAPTCHA/login/paywall bypass, no proxy rotation, no fake accounts — nflverse is public, logged-off, CC-licensed); facts-only extraction (per-play events, per-player aggregates, timestamps, derived signals — never article bodies, proprietary predictions, protected graphics, account-gated content); governance in the path via `assertIngestible("nflverse")`.
9. One-line summary (verbatim): "We compute **our own** CPOE/RYOE/xYAC from **CC-BY-4.0 nflverse play-by-play**, credit the source, and use **NGS aggregates (also via the nflverse mirror) purely as a measurement referee** — never copied into a served number, never scraped from `nfl.com`/`nextgenstats.nfl.com`/PFR/AWS, never sourced from the CC-BY-SA (FTN/participation) assets."
10. Code-vs-doc precedence: if this doc and the code disagree, the code (`apps/web/lib/nflverse/expected-metrics.ts`) wins.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR:** GSE-CPOE (completion percentage over expected) fitted on public PBP and validated against the NGS `completion_percentage_above_expectation` ground-truth column is the QB-behavioral profile's accuracy-over-expectation metric. Mechanism: the engine gets its own tracking-grade QB accuracy signal computed from public data, with a known Pearson agreement against stadium-tracking truth from the validation report — a calibrated, non-commercial input to QB intake.
- **TRUST-SIGNAL:** The "NGS is the referee, never the product" invariant is the trust-target intake's legal posture: tracking-style signals may be learned from NGS aggregates but never re-served. Mechanism: this is what lets the engine ingest the most valuable behavioral signals (CPOE/RYOE/xYAC) while keeping NGS data 100% internal per the NGS internal-only doctrine — only aggregate correlation stats (`truthMean`, `pearson`) ever leave the system, never per-player NGS numbers.
- **OTHER — proprietary-metrics reproduction template:** The three-metric suite is the executable template for the whole program: build our own from CC-BY-4.0 play-by-play, prove it against the public NGS aggregate, serve only our computation. Mechanism: this same wiring (own fit + referee column + Pearson report) can be reused for any proprietary metric the engine wants to reproduce without touching the moat (PFF/SIS/DVOA per the reproduction-strategy doc).
- **OL / COACHING / SCHEME:** no direct coverage in this file (rushing RYOE relates to rushing efficiency but is not OL- or scheme-specific here).

## Engine-actionable? (yes/no + one-line what)
Yes — the join key (`player_gsis_id`), grain filter (`season_type == "REG"`, `week == 0`, `season == activeSeason`), asset list (combined `ngs_<variant>.csv.gz` + column-projected PBP), and the own-fit/referee-validate pattern are an exact, wire-ready intake spec for CPOE/RYOE/xYAC and the template for reproducing any proprietary metric.

## References named in file
- `docs/math/GSE_EXPECTED_METRICS.md` (companion math doc)
- `apps/web/lib/nflverse/expected-metrics.ts` (code wins on disagreement)
- `packages/data-ingestion/src/nflverse-source.ts` (nflverse classification/adaptation)
- `docs/nflverse-data-catalog.md`
- `docs/STAT_INTAKE_COVERAGE_MATRIX.md`
- `docs/PROPRIETARY_METRICS_REPRODUCTION_STRATEGY.md`
- Root `CLAUDE.md` (Legal Scraping Posture; attribution-propagation rule)
- `docs/data/` source-rights doctrine; execution ledger DATA3 (currency fix)
- License: CC-BY-4.0 (used); CC-BY-SA (excluded: `ftn_charting` / FTN, `participation` / `pbp_participation`)

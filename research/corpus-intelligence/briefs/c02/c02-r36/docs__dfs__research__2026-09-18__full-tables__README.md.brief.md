# docs/dfs/research/2026-09-18/full-tables/README.md

## What it is (1-2 sentences)
An inventory README cataloging ~55 full CSV tables transcribed verbatim from live X posts during a 2026-09-18 morning/evening benchmark sweep of advanced metrics, plus approximate chart-reads — with per-table author, date, source attribution, and flagged data-quality caveats.

## Key metrics/methods (formulas where given, else "not specified")
- Formulas given: Cost of Drops = Air EPA + expected YAC EPA − Actual EPA (drops charted by FTN); composite QB ranking weights — QBR 0.35, EPA/play 0.25, CPOE 0.15, Bad Throw% 0.10, Pressure-to-Sack% 0.10, Air Yards/Rec 0.05 (source: PFR); INT/Bad Throw ratio definition (verbatim): "shows what share of a QB's bad throws actually turned into a pick. Low = getting away with mistakes. High = paying for them."
- @benbbaldwin objective ratings: "market-implied win% vs a league-average team on a neutral field" — lines as starting point, solving for the rating best reproducing chances of winning division/conference/etc.; footer blends near-term game lines with division/conference/Super Bowl/playoff/#1-seed futures (DraftKings); source confirmed in replies as DraftKings sportsbook lines/futures.
- @PattonAnalytics Tendency Rating: Y-Aware PCA composite for 32 play callers (personnel diversification / play sequencing / tendencies), author states it correlates well with EPA.
- Survivor EV table: "Current Entry EV by Week 1 Team Used," schedule-adjusted EV per surviving entry vs $1,341 flat equity.

## Data sources named
- nflverse (nflreadr/nflreadpy), FTN Charting, PFR (incl. PFR Advanced Passing), Next Gen Stats, Sumer Sports, Fantasy Points Data Suite 2.0, StatRankings (Player Alignment+, CB Metrics+, CoverageIQ+), PFF (own grades), Statyx (statyx.io), hawkblogger.com, Ryan Paganetti's own play-by-play data, cmain7's own model, official NFL play-by-play description. Table-level sources stated in each row of the file.

## Findings (numbers and facts, not vibes)
- [SCHEME] Two-back formations (Paganetti): used 14.3% vs middle-open coverages; runs +0.10 EPA/play (97 plays), passes +0.26 EPA/play (46 plays).
- [OL] Pressure rates generated × allowed, 32 teams (hawkblogger, FTN charting, 2026): KC 56.3% generated / 39.4% allowed ... MIA 6.5% generated / 40.5% allowed — full-table range from KC (top) to MIA (bottom).
- [SCHEME] Six-defenders-up pre-snap rate by team (Paganetti): NYJ 3.5% captured; 32 rows.
- [SCHEME] Playcalling tendencies, 32 teams + NFL avg (sfdata9ers, FTN): Motion/Screen/Play Action/No Huddle/RPO %; author correction in thread: actual motion leader is LAC 84.3%, not SF 78.1% as post text claimed; tags can co-occur (197 times in Week 1) so columns do not sum to 100%.
- [QB-BEHAVIOR] Josh Allen passing efficiency grid vs DET (Week 2 TNF, sfdata9ers): 20/31, 248 yds, total EPA 25.4, EPA/play 0.53, CPOE -2.6% (air-yard bucket × left/middle/right cells in table).
- [QB-BEHAVIOR] Josh Allen rushing summary vs DET (sfdata9ers): 11 car / 72 yds / 2 TD / 8 1stD, 0.87 EPA/rush; also 2012–2022 EPA/rush percentile bars noted.
- [QB-BEHAVIOR] Week 1 QB EPA/dropback leaders (GridironInfo, nflreadpy): Lawrence +0.79, Dart +0.71. Dropback-outcome chart: text claimed Lawrence took "not a single sack" but chart shows Lawrence Sack 4.2% — text/chart inconsistency flagged in file.
- [QB-BEHAVIOR] statyx volume-vs-efficiency (Week 1): Shough 410 yds / −0.017 EPA/DB; Allen 334 yds / +0.454 EPA/DB. Lawrence "led the NFL in CPOE in week 1 according to @NextGenStats" (rjanalytics post).
- [QB-BEHAVIOR] INT/Bad Throw vs aDOT scatter named outliers (GridironInfo, PFR+NGS): Maye ~1.5 ratio at ~6.5 aDOT; Allen ~13.0 aDOT at ~0.0 ratio. CPOE vs time-to-throw scatter (NGS) and TE-targets EPA table: McBride 13 tgts / 35% share / +0.289 EPA/tgt; Likely 8 tgts / +1.379 EPA/tgt.
- [SCHEME] Bucky Irving vs CLE rush-path package (statyx): 3.88 YAC/att (76th), 0.63 evaded tackles/att (99th), 62.5% rush success (99th); lane usage + CLE lane ranks in tables.
- [SCHEME] Gibbs and Cook rush-path packages (statyx, two instances) with lane shares and runner-evidence percentiles in tables.
- [SCHEME] CB/WR matchup data (MagicSportsGuy, StatRankings): LA Watson 80.8% left / McDuffie 80.8% right, both 14.7% man / 85.3% zone; NYG alignment — Nabers 79.2% perimeter, Fields 68.4% perimeter, Mooney 58.3% slot; Mooney 2025 man/zone splits and Nacua/Adams coverage-shell splits in tables.
- [OTHER] Objective ratings 2026-09-18 (32 teams, 5 tiers): LAR 72.8 (favorite) ... Ravens 68.4 ... Dolphins 24.2; remaining SOS: Cardinals 55.6 (hardest) ... Saints 43.4 (easiest).
- [OTHER] Survivor EV: Raiders/Cardinals/Jets $1,559 ... Lions $1,114 vs $1,341 flat equity (cmain7; no source stated).
- [OTHER] Receiving leaderboards (Fantasy Points Data Suite): Nacua 3.84 YPRR, JSN 3.79, Kincaid 3.54 (ranks 1–16; rows 17+ cut off). Bellcow report: each RB's share of his team's backfield xFP, 32 backs.
- [TRUST-SIGNAL] Data-quality flags recorded in-file: four unidentified team logos in week2 previews; two unidentified in missed-tackle rates; gridironinfo BUF passing slide shows Allen's CPOE/EPA negative signs in green cells contradicting slides 1–2 (apparent chart error, transcribed as displayed); gridironinfo minor slide discrepancies (Goff Pass SR% 57 vs 55; EPA/DB +0.44 vs +0.41); Patton's ANY/A table preserves the source's duplicate "Drew Lock" entry (likely author typo, not corrected); defensive-explosive-pass table captured only ranks 19–32 (top half cut off); statyx-def table: only the text-attributed standouts (TB 26% RB share, GB 36% TE share) are exact, rest not transcribed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] The two-back +0.10/+0.26 EPA split, motion leader LAC 84.3%, and six-up rate table are scheme signals the engine's playcaller/scheme model should carry — they describe what opponents actually do, not what beat writers guess.
- [OL] The full 32-team pressure generated/allowed table (KC 56.3% vs MIA 6.5%) is a direct OL/DL input for QB-sack and dropback-efficiency modeling.
- [QB-BEHAVIOR] Allen's cell-level efficiency grid, the EPA/DB leaders, and the INT/bad-throw ratio outliers give real QB-context distributions the engine can benchmark engine QB projections against.
- [TRUST-SIGNAL] The file's stated-source discipline (every table footer-attributed) plus its explicit error flags make it a trust template: tables that can contradict their own post text (Lawrence sack %, BUF green cells) prove text summaries must not be trusted without the chart.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: treat as a 55-table benchmark corpus for engine cross-checks (pressure table → OL inputs, two-back/motion/six-up rates → scheme priors, Allen grid + EPA/DB leaders → QB-behavior calibration, benbbaldwin ratings → market-proxy composite), honoring the in-file data-quality flags.

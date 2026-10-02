# ai/airwave/GSE_GSN_REPO_INTEGRATION_PLAN.md
## What it is (1-2 sentences)
A repo-integration plan built from a 31-repository analysis (completed 2026-06-10, each repo's license/maintenance/last release checked against the live GitHub page), recommending install/evaluate/reject decisions for GSE/GSN, including a full NFL data-source tiering.

## Key metrics/methods (formulas where given, else "not specified")
not specified — methodology guidance names EPA, CPOE, win probability, RYOE as the credible metric set (from the CC0 NFL analytics book, R-based, methodology-transfer only).

## Data sources named
- **nflverse** (nflfastR / nflreadr / nflverse-data): play-by-play, player stats, rosters, schedules, snap counts; CC BY-SA 4.0 (data), MIT (packages). **Recommended as canonical free NFL data source** — "the modern, maintained successor to every dead NFL data repo"; The Odds API is the markets layer, nflverse is the stats layer. Action: evaluate `nfl_data_py` or direct CSV releases. Risk: very low.
- **ESPN public key-free API** (via GeoWizard4645/sprig-dashboard `sports_app.py`): NFL/NBA/MLB/F1 scores + standings with retry logic; recommended as resilience fallback addressing the 4-day silent staleness outage. No API key needed.
- **clausherther/nfl-dbt** (Apache-2.0): dbt models transforming nflverse PBP into analytical tables (games, players, plays, field-goal aggregates) — recommended as warehouse blueprint when added.
- **BlairCurrey/nfl-analytics** (NO LICENSE): architecture template only — nflverse → feature engineering → model → CI publish pipeline; no code reuse rights.
- **bcongelio/nfl-analytics-with-r-book** (CC0 public domain, CRC Press): methodology reference for EPA, CPOE, win probability, RYOE, modeling.
- **UnravelSports/unravelsports** (MPL-2.0): player-tracking ML, future (AUTHORITY milestone) evaluation.
- **Deryck97/nfl_nextgenstats_data** (archived): pointer to live NGS source only.
- **BurntSushi/nflgame** (dead): NFL.com Game Center source gone — do not use.

## Findings (numbers and facts, not vibes)
- Repo tiering: 3 Claude Code plugin skills to install week 1 (addyosmani/agent-skills 43k★, phuryn/pm-skills 12k★ v2.0.0 June 2026, mvanhorn/last30days-skill 25k★ — Reddit/X/YouTube/HN/Polymarket/GitHub research; Polymarket odds + social signal directly on-domain for sports markets).
- Four repos permanently excluded for legal risk (two SiriusXM circumvention tools, ToS-violating HLS proxy, dead nflgame).
- AGPL repos (robiningelbrecht/statistics-for-strava, Moonrend/ZeroCat) must not have code imported into a closed product.
- A 4-day silent ingestion-staleness outage is the known operational gap driving both the ESPN fallback and categraf/synthetic-health-check recommendations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: this is the GSE data-layer foundation map — nflverse PBP powers every QB-behavior metric (target concentration, CPOE, EPA), the EPA/CPOE/RYOE/win-probability set is the canonical metric inventory the engine benchmarks against, and mvanhorn/last30days-skill (Polymarket + social) is a trust/sentiment-signal source for line-movement and injury chatter.

## Engine-actionable? (yes/no + one-line what)
yes — canonicalize nflverse (nfl_data_py or direct CSV) as the stats layer and add the ESPN public API as the fallback ingestion path to kill silent staleness.

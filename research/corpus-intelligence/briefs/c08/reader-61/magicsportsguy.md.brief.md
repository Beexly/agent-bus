# Sports/docs/props/research/2026-09-18/notes/magicsportsguy.md
## What it is (1-2 sentences)
Index-style source notes (read 2026-09-18) on @MagicSportsGuy / StatRankings: launch announcement details, Kevin Adams methodology examples, and a set of reimplementable WR/CB matchup formulas with the caveat that StatRankings' actual data provider is undisclosed.
## Key metrics/methods (formulas where given, else "not specified")
Reimplementable formulas listed (all need route/coverage charting; denominators marked as inferred):
- target share = player targets / team targets
- first-read share = first-read targets / team first-read targets
- TPRR = targets / routes run
- YPRR = receiving yards / routes
- FP/route = format points / routes
- alignment share = routes by alignment / routes
- man/zone splits = filter by charted coverage
- assignment/overlap map = projected offensive alignment distribution × defender side/slot rates, normalized to 100%
- percentiles = empirical rank vs position/alignment peer group (min-route cutoff unknown)
## Data sources named
- StatRankings launch PR (Access Newswire): free-account launch included 24+ years of NFL data, base + advanced stats, projection models, betting trends back to 2000; no data provider or public API disclosed.
- Kevin Adams methodology examples: oneweekseason.com/one-week-stats-6-25 (zone rate, QB production vs zone), oneweekseason.com/one-week-stats-4-25 (accuracy rate, pressure rate, ANY/A).
- Reference material only: ESPN shadow report (WR/CB matchups from ESPN play-by-play), PFF man/zone split tables and grades (paid data), RotoViz GPS Matchup Rater (commercial precedent for matchup ratings from charting data). The notes explicitly warn: do NOT assert FTN as StatRankings' provider merely because Adams founded FTN.
## Findings (numbers and facts, not vibes)
- StatRankings launch bundle: 24+ years of NFL data, base + advanced stats, projection models, betting trends back to 2000 — all free-account.
- No confirmation of StatRankings' charting-data provider; PFF grades are paid (pff.com/grades); ESPN and PFF split-table formulas cited only for formula validation.
- All matchup formulas are standard constructions; denominators inferred, not observed from StatRankings itself.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Man/zone split filters + alignment shares + assignment/overlap maps for WR/CB matchups — SCHEME
- TPRR / YPRR / FP-per-route as coverage-conditional matchup features — QB-BEHAVIOR (receiving efficiency per route as matchup signal)
- Explicit anti-assumption note on data-provider provenance (do NOT assert FTN) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — WR/CB matchup feature pack (TPRR, YPRR, man/zone splits, alignment shares, assignment/overlap maps) reimplementable from charting data for prop/matchup modeling.

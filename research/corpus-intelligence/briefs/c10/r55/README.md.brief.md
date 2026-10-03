# predictions/research/2026-09-17/edge-sheet/README.md
## What it is (1-2 sentences)
README for the GSE Edge Sheet — a reproducible, data-driven pregame graphic (1080x1350 PNG) for @GalaxySportsHQ with three (v2: eight) panels and zero fabrication; every number computed from public play-by-play data and traceable to source. V2 (2026-09-17) is a metric-dense rebuild with 8 panels.
## Key metrics/methods (formulas where given, else "not specified")
- EPA/play: nflverse/nflfastR output, regular season, pass/run only; kneels and spikes excluded; 4th-quarter plays with possession-team WP > 0.95 or < 0.05 excluded (garbage time); overtime retained. SCHEME
- Dropback EPA = EPA on pass attempts + scrambles; Rush EPA = EPA on designed rushes. SCHEME
- Fair line (illustrative, printed on sheet): `fair margin = (home net EPA/play − away net EPA/play) × 63 + 2.0 home field`; v2: `net_team = offense EPA/play + defense EPA/play`. Assumptions: 63 plays/game, 2.0 points home field, 2025 full-season numbers. NOT the GSE engine — explicitly illustrative. SCHEME
- Turnover luck: expected INTs from nflfastR `cp`/`ep` family; expected fumbles lost from fumble rates; FTN charting interception-worthy throws for 2025. Luck tags: |actual − expected| < 1.5 = NEUTRAL; above → LUCKY (takeaways) / UNLUCKY (giveaways). Turnovers converted at ~4.5 points per turnover. QB-BEHAVIOR
- Fumble recovery treated as noise per literature (year-to-year fumble-recovery correlation ~0.00). SCHEME
- Percentiles: `pct_rank` descending (100 = best) vs all 32 teams, 2025 season. Form lines: 4-week rolling offensive EPA/play, weeks 1–18 2025, bye weeks as gaps. KDE: Gaussian KDE on 2025 dropback EPA (539 BUF, 562 DET plays); tail share = P(EPA ≥ 1.0). SCHEME
## Data sources named
nflverse (CC-BY 4.0); nflfastR via nflverse; FTN charting via nflverse (CC-BY-SA 4.0); fonts Noto Sans Display Condensed (OFL). CSV inputs: `../nfl-2026/team_metrics_2025.csv`, `../nfl-2026/team_metrics_2026.csv` (see `../nfl-2026/COMPUTATION_NOTES.md`).
## Findings (numbers and facts, not vibes)
- Pressure rate unavailable: FTN charting has no hurry/pressure columns; QB-hit and sack rates used are lower-bound proxies. OTHER (data limitation)
- FTN 2026 interception-worthy data not yet published as of 2026-09-17. OTHER (data limitation)
- V2 situational panel finding (Bills-Lions example): DET late-and-close collapse at 6th percentile — identified as the sharpest story. QB-BEHAVIOR
- No opponent adjustment anywhere (raw EPA, not DVOA-style); no weather/injury/rest inputs; 2026 Week 1 shown as isolated dots labeled "one game each, not a rating." OTHER (limitations)
- Luck tag threshold: |actual − expected| < 1.5 = NEUTRAL. QB-BEHAVIOR
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tags applied inline above.
## Engine-actionable? (yes/no + one-line what)
Yes — the luck-layer pipeline (expected turnovers from nflfastR cp/ep + |actual−expected|<1.5 neutral band, fumble recovery as noise) and the EPA fair-margin formula are directly portable as a shadow-model illustration/prototype of GSE's expected-turnover and margin-pricing components.

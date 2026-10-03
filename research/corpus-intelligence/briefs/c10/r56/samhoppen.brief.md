# props/research/2026-09-18/notes/samhoppen.md
## What it is (1-2 sentences)
Source-notes index on @SamHoppen's (4for4) 10-facet EPA/WPA game-analysis chart: confirms his foundation is nflfastR/nflverse PBP with EPA and WPA models, documents the "neutral script" filter definition, and records that the exact chart code and facet-categorization rules are NOT public (inferred only).
## Key metrics/methods (formulas where given, else "not specified")
- "Neutral script" filter (confirmed via Hoppen's own 4for4 Week-8 article): plays outside the 2-minute warning AND offensive win probability 20%–80%.
- EPA/WPA formal definition (from the cited journal paper, jqas-2018-0010): EPA/WPA = ending-state value minus starting-state value.
- nflfastR `calculate_win_probability()` inputs: possession, score differential, clock, spread, down, distance, yard line, timeouts, second-half kickoff indicator.
- Ten facets: Pass Off, Run Off, Pass Def, Run Def, Takeaways, Giveaways, Off Pen, Def Pen, Special Teams, Other.
- INFERRED computation (must be labeled as such): orient each play's EPA/WPA to the selected team; assign mutually exclusive facet with precedence turnover > penalty > pass/run > ST > other (exact precedence unconfirmed); sum team-oriented EPA and WPA per facet. WPA sums to ≈ final WP − initial WP if each play assigned exactly once.
## Data sources named
nflfastR/nflverse (CSV/Parquet/RDS/QS releases); 4for4 Hoppen articles (https://www.4for4.com/2021/w8/hoppen-conclusions-week-8-insights-and-analysis); CRAN nflfastR docs; the jqas-2018-0010 EPA/WPA paper.
## Findings (numbers and facts, not vibes)
- Hoppen's data foundation is confirmed nflverse PBP; his processing style is nflfastR-style PBP filtering — but no public repo or code exists for the exact 10-facet chart.
- nflfastR fields used: epa, wp, wpa, vegas_wp, vegas_wpa.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Neutral-script filter (WP 20–80%, outside 2-min) → SCHEME (context-filtered per-play evaluation method)
- Facet decomposition (Pass Off/Run Off/Pass Def/Run Def/Takeaways/Giveaways/pens/ST) → OTHER (team-level post-game diagnostic framework, additive EPA/WPA per facet)
- Exact facet precedence unconfirmed → OTHER (caution flag: do not copy as fact; re-implement per GSE's own rules per the re-implementation rule)
## Engine-actionable? (yes — adopt the neutral-script filter definition (WP 20–80%, outside 2-min) for context-cleaned EPA/WPA analysis; treat the 10-facet additive chart as a team-diagnostic pattern to rebuild in GSE's own code, since the original rules are unconfirmed)

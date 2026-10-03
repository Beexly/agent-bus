# docs/data-sources/research/misc/scrape-wave-2-results.md
## What it is (1-2 sentences)
Wiring map from a 2026-09-12 scrape of 71 feature-inventory items (567 data columns, 34 verbatim formulas, 12 pricing observations, 4 calibration claims, 39 export/API paths, 17 paywalled features) across Statcast, RBSDM, NFL/Savant, NGS, Basketball-Reference, LineStar, PropFinder, Fangraphs and other competitors. Explicitly a wiring map: do not re-scrape these URLs.

## Key metrics/methods (formulas where given, else "not specified")
- Hit Probability (Savant, verbatim): assigned from exit velocity and launch angle of each batted ball, based on outcomes of comparable historic balls in play.
- Expected season metrics (Savant, verbatim): accumulate expected outcomes of each batted ball with actual strikeouts, walks and HBPs.
- Sprint Speed (Savant, verbatim): "feet per second in a player's fastest one-second window" on individual plays; best ~2/3 averaged for seasonal figure. MLB average competitive sprint speed 27 ft/sec (range ~23 poor to ~30 elite).
- EV50: avg of hardest 50% of batted balls (pitchers: softest 50% allowed); Hard Hit % = 95 MPH+.
- Pass Over Expected Difference = Actual − Expected (RBSDM).
- Series Conv % = TD / 1st Down / FG / Punt / TO outcome percentages (RBSDM).
- EPA/play (NFL/Savant, verbatim): how much a QB raises or lowers his team's scoring expectation on each pass play.
- Rushing YOE = actual yards minus what an average back would gain from the same situation.
- Pressure % = share of opposing dropbacks where this defender recorded a sack or QB hit.
- RotoGrinders prop example (verbatim): "The line of 4.5 compares favorably based on our MLB simulations. The prop projects to hit 72.81% of the time based on the assumptions, and that represents an 11.27% edge."
- VORP conversion (Basketball-Reference tooltip): multiply by 2.70 to convert to wins over replacement.
- Fangraphs models: ZiPS, ZiPS DC, Steamer, Depth Charts, ATC, THE BAT, THE BAT X, OOPSY (pre-season); in-season updated, RoS, 600 PA/200 IP, three-year ZiPS, On-Pace — no equations published, weights not disclosed.
- FanDuel/DraftKings odds American odds convention on props board (Over/Under selection + American odds).

## Data sources named
- baseballsavant.mlb.com (statcast_leaderboard, expected_statistics, sprint_speed, statcast_search) — public CSV available.
- RBSDM JSON API: keys min_season, max_season, season_week_bounds, teams, generated_at; tabs Team Tiers, Offense, Defense, Quarterbacks, Neutral Pass Freq, Pass Over Expected, Fourth Downs, Luck, Series Success; filters season min/max (2020+), regular week min/max, postseason (None/WC/DIV/CONF/SB), downs 1-4, quarters 1-4/OT, garbage-time WP filter, exclude-turnovers.
- NFL/Savant JSON API: response keys week, metrics, category, unit, rows, columns; row keys id, name, team, pos, v, qualified, values; value keys epa, comp, att, comp_pct, yds, ya, td, int, sacks, cpoe, pressure_pct, succ, adot. Provenance: pbp via nflverse; charting FTN Data + NFL Next Gen Stats via nflverse (CC-BY-SA 4.0).
- Next Gen Stats tables (public): Receiving — CUSH, SEP, TAY, TAY%, REC, TAR, CTCH%, YDS, TD, YAC/R, xYAC/R, +/-; Rushing — EFF, 8+D%, TLOS, ATT, YDS, RYOE, AVG, RYOE/Att, ROE%, TD.
- Basketball-Reference advanced data-stat keys: ranker, name_display, age, team_name_abbr, pos, games, games_started, mp, per, ts_pct, fg3a_per_fga_pct, fta_per_fga_pct, orb_pct, drb_pct, trb_pct, ast_pct, stl_pct, blk_pct, tov_pct, usg_pct, ows, dws, ws, ws_per_48, obpm, dbpm, bpm, vorp, awards.
- Fangraphs projection models; authors credited: Dan Szymborski (ZiPS), steamerprojections.com, FanGraphs staff, Ariel Cohen (ATC), Derek Carty (THE BAT), Jordan Rosenblum, Eno Sarris. Pagination: 4186 default results; ATC bat 631; ATC pit 855.
- LineStar (competitor): Premium $39.99/month or $239.99/year; sports NFL/MLB/NBA/NHL/PGA/CFB/CBB/WNBA/UFC/NAS/CSGO/LOL/CFL.
- PropFinder: Monthly $14.99, Yearly $149.99, free tier 1 game/league; sports MLB, NBA, NFL, CFB, NHL, WNBA; /nfl sign-in gated. Marketing confirms odds mix includes DraftKings, FanDuel, BetMGM, Caesars, ESPN Bet, Fanatics, PrizePicks, Underdog.
- Other competitor pricing: Props.Cash $19.99/mo or $199.99/yr (NBA Pass $99.99/yr); Outlier Premium $19.99/mo, Premium+ $29.99/mo, Pro $79.99/mo; PlayerProps.ai 6-mo VIP $295; PickFinder Premium $149.99/yr, Pro $299.99/yr; SaberSim $7 for 7 days trial.

## Findings (numbers and facts, not vibes)
- Wiring priority 1-5 (no blockers, all publicly accessible): Statcast batters loader → `underlying: { barrelPct, hardHitPct, ev50, xwOBA, sprintSpeed }` at `apps/web/lib/statcast/`; Statcast pitchers loader (spin rate, perceived velo, release point, arm angle, whiff%, chase%); RBSDM EPA backbone via JSON API; NFL/Savant JSON (pressure%, EPA, RYOE); NGS receiving/rushing tables.
- Wiring priority 6-10 with blockers: PropFinder NFL cheatsheets → `matchupSplit: { vsMan, vsZone, vsLightBox, vsStackedBox, sampleSize }` at `apps/web/lib/nfl/coverage-splits.ts` (sign-in required); PrizePicks/Underdog consensus → `consensus: { overCount, underCount }` at `apps/web/lib/consensus/public-picks.ts` — rule: NEVER fabricate; absent = factor does not fire; LineStar Props L5/L10 hit rates (premium); LineStar ownership pOwn% + Own Diff (premium); Fangraphs ATC/THE BAT cross-model comparison (structure free, data premium).
- Already wired: projections table (Sal, Proj, Val, Ceil, L5, M/U, pOwn%, Lev); props board (market + team filters); CSV export (DK Classic); max exposure slider (10-100%); factor engine skeleton (depth chart, injury, matchup split, underlying, consensus, rest).
- LineStar gap columns vs GSE: Consensus, Cons Diff, Max Exp%, AlertScore, SIC Score (Sports Injury Calculator), Safety, Imp Pts, vs Pos, Range.
- LineStar Props board gap columns: L5/L10/Season hit rates, Matchup+ Imp, Consensus column, +EV column.
- Paywall gates observed: Stathead subscription; LineStar Premium; PropFinder NFL auth; RotoGrinders Premium Only; Cleaning the Glass subscribe; SaberSim paid; PlayerProps.ai tiers; PickFinder Pro; Props.Cash paid; Data Export Members Only; Historical Projections Members Exclusive; Percentile Outcomes wOBA Members mode.
- Alert patterns: LineStar AlertScore + alert icons (Expected Starter, Good Vegas Odds, opponent ranks, favored/away splits, recent-form); SaberSim real-time breaking-news/scratch alerts; Outlier saved-filter notify; PickFinder Discord notifications; PlayerProps.ai line-movement alerts.
- Calibration claims: PickFinder testimonial 65% accuracy (testimonial only, not measured); LineStar "independently verified as one of the best in the industry" (no sample size or metric published).
- Pitcher metric keys offered in Statcast search UI: PA, AB, BIP, Hits, 1B/2B/3B/HR, SO, K%, BB, BB%, HBP, Whiffs, Swings, xBA, xOBP, xSLG, xwOBA, Barrels, BABIP, ISO, Whiff Rate, Run Value, Pitch Velocity, Spin Rate, Exit Velocity, Launch Angle, Hit Distance, Hard Hit%, Barrel/BBE%, Barrel/PA%.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] NFL/Savant JSON: EPA/play (verbatim QB scoring-expectation definition), CPOE, ADOT per QB — free structured QB efficiency feed via nflverse provenance.
- [OL] NFL/Savant pressure_pct per defender + pressure% definition; charting provenance FTN + NGS via nflverse (CC-BY-SA 4.0) — free pressure data path.
- [SCHEME] PropFinder data model: target share, snap counts, coverage matchups, QB adjustments — but /nfl is sign-in gated; fallback is nflverse play-by-play which already has coverage data; matchupSplit factor shape `{ vsMan, vsZone, vsLightBox, vsStackedBox, sampleSize }`.
- [TRUST-SIGNAL] "NEVER fabricate. Absent = factor does not fire" rule for the consensus factor — evidence-standard enforcement in code.
- [TRUST-SIGNAL] LineStar's unverified "independently verified" calibration claim and PickFinder's testimonial-only 65% accuracy — examples of the exact claims the commercialization doctrine forbids GSE from making.
- [OTHER] Rushing YOE + RYOE/Att, EFF, 8+D%, ROE% as RB/OL decomposition features; pass-over-expected (Actual − Expected) as RBSDM efficiency delta.

## Engine-actionable? (yes/no + one-line what)
Yes — five unblocked wiring targets (Statcast batters/pitchers loaders, RBSDM JSON, NFL/Savant JSON, NGS tables) with exact factor shapes and column lists, plus the props-board gap columns to close.

# docs/data-sources/research/misc/scrape-wave-2-results.md
## What it is (1-2 sentences)
The wiring map from a 2026-09-12 scrape (founder-pasted extract JSON): 71 feature inventory items, 567 data columns, 34 verbatim formulas, 12 pricing observations, 4 calibration claims, 39 export/API paths, 17 paywalled features — organized into Tier 1 factor-engine inputs, Tier 2 optimizer/props-board parity, Tier 3 methodology/calibration, Tier 4 competitive intel/alerts, with a numbered wiring priority.
## Key metrics/methods (verbatim formulas where given)
- Sprint Speed = "feet per second in a player's fastest one-second window" on individual plays; best ~2/3 averaged for seasonal figure; MLB average 27 ft/sec (range ~23 poor to ~30 elite).
- Hit Probability assigned from exit velocity and launch angle of each batted ball, based on outcomes of comparable historic balls in play.
- Expected season metrics accumulate expected outcomes of each batted ball with actual strikeouts, walks and HBPs.
- Pass Over Expected Difference = Actual − Expected (RBSDM).
- Series Conv % = TD / 1st Down / FG / Punt / TO outcome percentages.
- EPA/play = how much a QB raises or lowers his team's scoring expectation on each pass play.
- Rushing YOE = actual yards minus what an average back would gain from the same situation.
- Pressure % = share of opposing dropbacks where this defender recorded a sack or QB hit.
- VORP tooltip: "Multiply by 2.70 to convert to wins over replacement."
- EV50 = avg of hardest 50% of batted balls; Hard Hit % = 95 MPH+; Bolts = runs at or above 30 ft/sec.
- Factor inputs wired: `underlying: { barrelPct, hardHitPct, ev50, xwOBA, sprintSpeed }`; `matchupSplit: { vsMan, vsZone, vsLightBox, vsStackedBox, sampleSize }`; `consensus: { overCount, underCount }` — with the rule NEVER fabricate; absent = factor does not fire.
## Data sources named
- MLB Statcast: baseballsavant.mlb.com (statcast_leaderboard, expected_statistics, sprint_speed, statcast_search).
- RBSDM.com (JSON API: min_season, max_season, season_week_bounds, teams, generated_at; filters incl. garbage-time WP, postseason rounds, downs, quarters).
- NFL/Savant (JSON API; provenance: play-by-play via nflverse; charting FTN Data + NFL Next Gen Stats via nflverse CC-BY-SA 4.0).
- Next Gen Stats columns (receiving: CUSH, SEP, TAY, TAY%, YAC/R, xYAC/R; rushing: EFF, 8+D%, TLOS, RYOE, RYOE/Att, ROE%).
- Basketball-Reference advanced data-stat keys.
- Competitor products: LineStar, PropFinder, RotoGrinders, Fangraphs (ZiPS, Steamer, ATC, THE BAT, OOPSY), Props.Cash, Outlier, PlayerProps.ai, PickFinder, SaberSim.
## Findings (numbers and facts, not vibes)
- PropFinder /nfl is sign-in gated; PrizePicks/Underdog public pick % not in the scrape; PropFinder NFL board and LineStar Props/Ownership are premium-blocked.
- Fangraphs models (ZiPS, Steamer, Depth Charts, ATC, THE BAT, OOPSY): no equations published, weights not disclosed — competitive intel only.
- RotoGrinders prop example (verbatim): "The line of 4.5 compares favorably based on our MLB simulations. The prop projects to hit 72.81% of the time based on the assumptions, and that represents an 11.27% edge."
- Calibration claims observed: PickFinder 65% accuracy (testimonial only, not measured); LineStar "independently verified as one of the best in the industry" (no sample size/metric).
- Pricing: LineStar Premium $39.99/mo or $239.99/yr; PropFinder $14.99/mo, $149.99/yr (free tier: 1 game/league); Props.Cash $19.99/mo or $199.99/yr; Outlier $19.99/$29.99/$79.99 mo tiers; PlayerProps.ai 6-mo VIP $295; PickFinder $149.99/yr Premium / $299.99/yr Pro; SaberSim $7 for 7 days trial.
- Wiring priority top 5 (all public-data, no blocker): Statcast batters loader, Statcast pitchers loader, RBSDM EPA backbone, NFL/Savant JSON, NGS receiving/rushing tables. LineStar gap columns for props table: Consensus, Cons Diff, Max Exp%, AlertScore, SIC Score, Safety, Imp Pts, vs Pos, Range. Props board gaps: L5/L10/Season hit rates, Matchup+ Imp, Consensus, +EV.
- Still blocked: PropFinder sign-in, LineStar Props/Ownership premium, PrizePicks/Underdog pick %, SaberSim internals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: RBSDM neutral pass frequency / pass over expected, coverage splits (vsMan/vsZone/light/stacked box) from PropFinder as the `matchupSplit` factor.
- OL: NFL/Savant pressure%, ESPN-style pass-rush/pass-block features feed the trench matchup lens; NGS tracking gives separation/air-yards data.
- TRUST-SIGNAL: Competitor calibration claims documented as unverified/testimonial-only; the "NEVER fabricate — absent = factor does not fire" wiring rule; LineStar gaps (Consensus, Cons Diff, SIC Score) are the honest baseline GSE's props board lacks.
- OTHER: MLB Statcast wiring (underlying factor inputs), competitor pricing/paywall intel, 17 paywalled features mapped.
## Engine-actionable? (yes/no + one-line what)
Yes — run the numbered wiring priority: the free public-data loaders (Statcast batters/pitchers, RBSDM JSON, NFL/Savant JSON, NGS tables) unlock the `underlying` and trench factor inputs, and add the listed LineStar gap columns (Consensus, Cons Diff, SIC Score, Matchup+ Imp) to the props board.

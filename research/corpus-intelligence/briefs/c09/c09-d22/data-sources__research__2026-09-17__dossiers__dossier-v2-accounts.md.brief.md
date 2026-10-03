# data-sources/research/2026-09-17/dossiers/dossier-v2-accounts.md
## What it is (1-2 sentences)
X analytics engagement dossier (50 verified accounts in 9 lanes + 8 Garrett-flagged accounts, verified 2026-09-17) plus method deep-dives on 10 analysts (Carpenter, Baldwin, Schatz, Clay, Abdoo, Walder, Cole, Sharp, Peabody, Greer) for @GalaxySportsHQ outreach.
## Key metrics/methods (formulas where given, else "not specified")
- SP+ (Bill Connelly): tempo- and opponent-adjusted, forward-facing efficiency; priors phase out weekly.
- BDUE (Bite Distance Under Expected) / GCOE (Ground Covered Over Expected) — Sumer Sports LB analysis (Eric Eager).
- nfl4th (Ben Baldwin): optimal 4th-down decisions via xgboost/mgcv on nflfastR; @ben_bot_baldwin grades coaches near real-time. League go-for-it in toss-ups: 16.8% (2019) → 18.1% (2020) → 26.5% (early 2021).
- DVOA (Aaron Schatz): play vs league-average for exact situation; opponent adjustments; 2026 projections via regressions on 2012–2024 data + 50,000 season sims with ±1.5% DVOA in-season learning adjustment.
- ESPN FPI (Seth Walder explainer): Bayesian predictive rating; 10,000 season sims; travel (~0.5 pts extremes), rest, altitude, seasonal EPA decay; preseason priors lean on Caesars win totals (market-aware).
- Kevin Cole Improvement Index: +43 index ≈ 43 points point-differential improvement ≈ 1.3 wins; EPA-based on/off impact, clustering, snap weighting.
- NGS Pressure Probability (Keegan Abdoo): per-play tracking-derived pass-rush disruption value.
- Fitzgerald-Spielberger draft value chart: values draft outcomes via later salary/financial outcomes, not Pro Bowls/starts.
- FPOE = XFP − FPG per Kyle Menton's Fantasy Points chart (note: inverted sign convention — negative FPOE = OUTscoring expectation); FP/S = fantasy points per snap. Cited values: Gibbs 80.0 trade value, Cook 62.5 with −3.1 FPOE (sell-high), Amon-Ra 70.0, Goff 16.4 FPG / 0.23 FP/S.
- Field Vision Havoc Ratings (defense) / Threat Ratings (offense): 0–100 percentile within position group, scheme-adjusted; e.g., Christian Benford #1 CB 2024 (Havoc 95.0, zone grade 90.2, 18.6 rec yds/gm allowed).
- Rufus Peabody bias-index: model spread vs market spread (e.g., model −3 vs market −7 ⇒ true ≈ −5.2); bet only when disparity clears the rake; props mostly unders, bet early for overs, late for unders; fumble recoveries random, garbage time discounted, recency downweighted.
- nfelo (Robby Greer): Elo + HFA + rest-day + weather, regressed toward market spreads; nfelounits uses EWMA on unit EPA translated to Elo, EloTranslator trained to minimize log-loss.
- Doug Analytics: QB EPA inside vs outside pocket; NFL draft-pick probability Monte Carlo sims (e.g., Bengals 59.1% pick 11, 25.5% pick 12, 15% picks 8–10); Giants QBs threw 7 INTs on Jalin Hyatt targets = 9.6% of his targets, highest of any WR with 30+ targets since 2022.
- SFdata9ers: 49ers special-teams EPA/play (SF dead last through Week 10 2024: −11 EP kickoffs, −22 EP punts); expected points from penalties on no-yardage plays (NYG 51.9 … SF 13.9, 32nd); kickoff coverage opp start 33.8-yard line (worst, 2025).
- GridironInfo_: 4-man rush rate vs pressure rate team chart (BUF ~65% / ~19%, DET ~60% / ~12%); Bears 2025: #1 in takeaways but bottom-10 in points/yards/rush yards allowed.
- Warren Sharp: explosive pass defense schedule adjustments; "first half matters more" thesis; 350–400-page annual preview.
## Data sources named
nflverse/nflfastR play-by-play, NFL Next Gen Stats tracking (Zebra RFID), FTN Fantasy charting (incl. motion classification, participation), licensed play-by-play/charting (Sharp), PFF grades (Cole, cross-check only), Caesars/DraftKings win totals, DraftKings Showdown sims, sportsbook APIs/odds screens, nflverse injury reports, METAR/NOAA, official league transaction feeds, ESPN internal fantasy platform data, ADP aggregators (Draft Sharks Market Index).
## Findings (numbers and facts, not vibes)
- 50 verified accounts across 9 lanes; 8 more Garrett-flagged; handle-correction log fixes 5 stale handles (@FFNateJahnke, @JohnLaghezza, @throwthedamball, @CirclesOffHQ, @davecabanff).
- DVOA opponent adjustments begin after Week 4; preseason regressions trained on 2012–2024.
- Clay's projections are hand-built at opportunity-share level (dropback/carry/target shares) and power ESPN Fantasy's default game.
- Peabody is a market originator — his team's action moves lines; Unabated posts a vig-free sharp-market consensus line.
- JonBoyBeats (Jon Jackson): won $75,000 in the 2023 Underdog Slow Puppy best-ball contest; runs Show Me The Data.
- The dossier's 2026-09-17 "chart-first" standard: same-day surfacing of quadrant scatterplots, pressure/blitz charts, EPA visuals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Abdoo's Pressure Probability (tracking-derived pocket disruption); Baldwin's QB Elo (nfeloqb); Cole's Bayesian QB rankings (250-dropback priors); Mike Clay projected dropback shares; Doug Analytics QB EPA in/out of pocket.
- COACHING: Baldwin's @ben_bot_baldwin grades all 32 coaches' 4th-down decisions; Sharp's unit of analysis is the coaching tendency (play-caller scouting reports); Peabody's market-overreactions to coaching predictability thesis (Sharp: "predictability is the one thing that gives defenses the edge back").
- OL: Josh Norris combine-athleticism research (OL short-shuttle → career starts); Sharp box-count run-defense splits.
- SCHEME: Field Vision scheme-adjusted Havoc/Threat ratings (man vs zone DB splits); Warren Sharp box-count, personnel, play-action usage-vs-efficiency gaps.
- TRUST-SIGNAL: Garrett's directive to surface chart-first accounts same-day (caliber floor set by @NutshellSportz / @GridironInfo_); fan-lane engagement surfaces (Panthers accounts) for audience intelligence.
- OTHER: engagement-target dossier for @GalaxySportsHQ (not a modeling doc); weather-games research (Chris Allen wind-speed pivot points for QB decisions — QB-BEHAVIOR adjacent).
## Engine-actionable? (yes + what)
Yes — build FPOE/xFP from nflverse (dossier names it the #1 build target); replicate Sharp-style unit-of-analysis (coaching tendency fingerprints) and Peabody bias-index framing for model-vs-market calibration; ingest NGS Pressure Probability via nflverse; add Doug-Analytics-style pocket-split QB charts and draft-probability Monte Carlo sims.

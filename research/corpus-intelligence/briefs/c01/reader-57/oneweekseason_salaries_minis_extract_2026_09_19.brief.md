# research/2026-09-19-dk-week2/raw/oneweekseason-salaries-minis-extract-2026-09-19.md
## What it is (1-2 sentences)
A raw DraftKings Week 2 NFL main-slate salary/projection/ownership extract (OneWeekSeason.com, pulled 2026-09-19 ~11:00 AM CT via Minis phone, projections timestamped Sat Sep 19 8:04 AM PDT / ownership 6:00 AM PDT); carries heavy known data-quality issues (garbled cells, implausible team assignments, stale slate) documented in-file.
## Key metrics/methods (formulas where given, else "not specified")
- No formulas. Fields: Salary, Proj. FPTS, projected Ownership (OneWeekSeason main-slate projected ownership).
- Top projected QBs: Dak Prescott $6,400 / 25.04 (12.01% own), Brock Purdy $6,200 / 23.06 (9.87%), C.J. Stroud $5,500 / 21.23 (3.74%), Jayden Daniels $6,300 / 20.85 (6.64%).
- Low-owned QBs: Jalen Hurts $6,700 / 18.71 (2.90%), Joe Burrow $6,600 / 18.05 (2.22%), Lamar Jackson $7,300 / 17.44 (5.81%).
- Top RB ownership: Bijan Robinson 40.10% ($8,200, 23.39 proj); Christian McCaffrey 21.93% ($8,000, 23.71).
- TE table: Mark Andrews $4,400 / 10.50 (17.13%), Jake Ferguson $3,800 / 10.21 (3.06%), Michael Mayer $3,600 / 6.47 (14.07%).
- DST table: Chargers 8.47 proj (4.27% own), Eagles 6.96 (5.05%).
## Data sources named
OneWeekSeason.com (via Minis phone extract; file /var/minis/workspace/draftkings_week2_salaries.md, 306 lines, lines 1-288 shown).
## Findings (numbers and facts, not vibes)
- Slate claimed: Week 2 NFL Main Slate, Sunday September 20, 2026; actual scope is the 13-game main slate (excludes IND@KC and NYG@LAR) — NOT Garrett's 15-game contest.
- Implausible rows flagged: Travis Kelce "KC vs DEN" (KC plays IND Week 2); Derek Carr as NO starting QB; Mike Evans on SF; Jalen Nailor on LV (he is MIN); Romelius Doubs on NE; unknown "Sean McAllister" (SEA RB $5,700); Mark Andrews duplicated row; garbled CJK cells ("硅13.60%", "Electro5,200", "78页00").
- Minis chain-of-thought text leaked mid-table; broken rows for Javonte Williams, Kirk Cousins, Justin Herbert.
- Ownership figures are OneWeekSeason PROJECTED ownership for main slate — not actuals, not Garrett's contest.
- Notable values: Bijan 40.10% ownership; Hurts/Burrow sub-3% ownership at 18+ projections; Mayer 14.07% owned at 6.47 proj.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None directly — this is a salary/ownership snapshot, not behavioral or scheme intel → OTHER (DFS ownership/projection reference only, with the data-quality caveats applying to any reuse).
## Engine-actionable? (yes/no + one-line what)
Yes — but only as a historical Week-2 ownership/projection calibration point for ownership-model backtests, after filtering the flagged implausible rows; not usable for player/team intel.

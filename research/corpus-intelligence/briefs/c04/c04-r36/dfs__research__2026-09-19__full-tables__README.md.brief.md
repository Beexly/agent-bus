# docs/dfs/research/2026-09-19/full-tables/README.md
## What it is (1-2 sentences)
Inventory of verbatim full-table CSV transcriptions sourced from live X posts during the morning sweep of 2026-09-19 (~09:08–10:15 CDT, plus reconstructed PM entries), covering receiver coverage-shell splits, DL pass-rush win rates, double-team rates, and weekly matchup boards.
## Key metrics/methods (formulas where given, else "not specified")
- TPRR = targets per route run; YPRR = yards per route run (FantasyPtsData via @DBro_FFB; route-level splits by coverage shell: single-high vs 2-high, and vs blitz).
- PRWR = pass rush win rate (@SumerSports via @JacobBarzilla), team-DL cut.
- Double-team rate among defensive interior with min. 20 pass-rush snaps, Week 1 (PFF via @PFF).
- statyxio matchup boards: coverage tendency (man% vs zone%), receiver performance-by-coverage cards (routes/targets/rec/yards/yards-per-target/target-share/TD), target-area grid (deep/intermediate/short/behind-LOS × left/middle/right), run-type matchup (zone vs gap usage vs opponent YPC-allowed rank), CPOE and EPA/dropback ranks.
- "Explosive access" metric (statyxio) — definition NOT given.
- benbbaldwin "Team Tiers" v3: market-implied win% vs league-average team on neutral field, blending near-term game lines with division/conference/Super Bowl/playoff/#1-seed futures (Kalshi), 32 teams in 6 tiers.
## Data sources named
PFF (via @DevyEusuf rookie WR table), FantasyPtsData (via @DBro_FFB Week 2 DS2 Data Dump thread), SumerSports (via @JacobBarzilla), PFF (via @PFF double-team post), Kalshi futures (via @benbbaldwin Team Tiers), statyxio-branded app data (unstated provenance), @DevyEusuf, @benbbaldwin, @DBro_FFB (Derek Brown, FantasyPros/BettingPros), @JacobBarzilla (verified), @PFF, @statyxio. Window: posts after 2026-09-18 21:35 CDT.
## Findings (numbers and facts, not vibes)
- Rookie debut WR game-1 comparison (@DevyEusuf): Makai Lemon vs Jaxon Smith-Njigba vs Justin Jefferson — Rec Grade, YPRR, REC YD, TGT, ROUTE, ADOT, YAC/REC (values live in CSV `devyeusuf-rookie-debut-wr-game1.csv`).
- @benbbaldwin Team Tiers v3 (2026-09-19): market-implied win% vs average team, neutral field — 32 teams in 6 tiers, blended from game lines + Kalshi futures (values in CSV).
- Week 2 receiver coverage-shell data dump (@DBro_FFB, powered by FantasyPtsData):
  - Jalen Coker vs ATL: ATL 4th-highest single-high rate Week 1 (67.4%); Coker 2025 Weeks 13–19 vs single-high: 21% TPRR, 2.81 YPRR; Week 1 2026 vs single-high: 30% TPRR, 5.10 YPRR.
  - Rome Odunze vs MIN: Brian Flores blitzed 73.9% in Week 1; Odunze 2025 vs blitz: 30% TPRR, 32.1% first-read %.
  - Christian Watson vs NYJ: NYJ 59% 2-high Week 1; Watson vs 2-high 2025: 21% TPRR, 2.72 YPRR; last week: 15% TPRR, 4.19 YPRR.
  - Emeka Egbuka vs CLE: CLE 5th-highest single-high rate (66.7%); Egbuka vs single-high Week 1: 27% TPRR, 2.53 YPRR.
  - Mike Gesicki vs HOU: Week 1: 20% target share, 41% TPRR, 4.59 YPRR; HOU allowed highest yards/target and 4th-most fantasy points to TEs Week 1.
  - Terry McLaurin vs DAL: DAL 54.5% single-high Week 1; McLaurin 2025 vs single-high: 28% TPRR, 2.49 YPRR.
- Texans DL Week 1 PRWR (@SumerSports via @JacobBarzilla): Will Anderson Jr. 24.1%, Danielle Hunter 19.2%, Jadeveon Clowney 16.7%, Sheldon Rankins 12.5%, Mario Edwards Jr. 11.1%, Logan Hall 6.7%, Tommy Togiai 5.0%. Post text: "Should be a good matchup with an improved Bengals OL."
- Week 1 highest double-team rate among defensive interior, min 20 pass-rush snaps (@PFF): Dexter Lawrence 80.0%, Calais Campbell 73.9%, Vita Vea 73.1%, Zach Sieler 72.7%. Post: "Dexter Lawrence is adding a new element to the Bengals line."
- Isaiah Likely vs LA matchup package (@statyxio): LA coverage tendency 18% man / 82% zone; Likely vs man: 7 routes, 3 targets, 3 rec, 36 yds (43% tgt, 12 yds/tgt); vs zone: 13 routes, 4 targets, 4 rec, 40 yds (57% tgt, 10 yds/tgt), 1 TD. Named metric "explosive access" (Likely 0%) — undefined. Small-sample caveats stated (20 routes).
- Run-type matchup card (Rush IQ, @statyxio): vs WAS — Zone 66.7% (24/26 Softer), Inside Zone 58.4% (24/24 Softer), Outside Zone 8.3% (6/26 Tougher), Gap 33.3% (T-6/26 Tougher). "Early sample" caveat.
- Sunday-special 4-player Week 2 boards (@statyxio): Jalen Coker vs ATL — ATL zone 61%; Coker: 5 catches/103 yds/1 TD on 18 zone routes. Mike Gesicki vs HOU — 76% slot, 41% target share; HOU zone 70%; 6 targets/4 catches/76 yds on 15 zone routes. Ashton Jeanty vs LAC — 23 mapped carries, 48% through the middle; LAC ranked 1st vs that lane; 3.43 YAC/Att vs 3.36 allowed. Baker Mayfield vs CLE — +14.0 CPOE (3rd of 32) but −0.223 EPA/dropback (28th); CLE allowed +0.793 EPA/dropback (32nd); Mayfield deep-throw rate 3.7% of dropbacks. Post framing: "Accuracy and efficiency are telling two different stories."
- Chart-read approximates are excluded from this inventory (live in ../chart-reads/).
## Intelligence connections
- SCHEME: receiver-vs-coverage-shell splits (single-high/2-high TPRR/YPRR) paired with opponent shell tendency rates — directly a scheme-matchup input; run-type matchup (zone vs gap usage vs opponent YPC-allowed rank) is scheme-vs-scheme intelligence; Murray-adjacent: none here, but the statyxio CPOE-vs-EPA Mayfield card is a QB efficiency-vs-accuracy divergence signal.
- OL: "improved Bengals OL" framing on the Texans PRWR post; Dexter Lawrence double-team rate 80.0% as DL-vs-OL attention metric; PFF double-team top-4 all interior DL.
- QB-BEHAVIOR: Baker Mayfield +14.0 CPOE (3rd/32) but −0.223 EPA/dropback (28th) with 3.7% deep-throw rate — high accuracy, no efficiency/aggression; Romeo Odunze first-read rate 32.1% vs blitz is a trust/signal adjacent to QB-BEHAVIOR but tagged TRUST-SIGNAL.
- TRUST-SIGNAL: Mike Gesicki 41% TPRR, 20% target share, 76% slot; Odunze 30% TPRR + 32.1% first-read % vs blitz — targets-when-it-matters indicators.
- OTHER: market-implied team tiers (Kalshi-blended win%) — a market-power-rank input rather than QB/coach/OL intelligence.
## Engine-actionable? (yes/no + one-line what)
Yes — the receiver-vs-coverage-shell matrix (opponent shell/blitz rates × receiver TPRR/YPRR by shell) is directly wire-able as a weekly matchup adjustment layer.

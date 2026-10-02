# dfs/research/2026-09-23/full-tables/README.md
## What it is (1-2 sentences)
An index README for a 2026-09-23 PM X-chart sweep (posts ~9:00 PM CDT 2026-09-22 through ~9:00 PM CDT 2026-09-23, 21 primary + 6 secondary accounts), documenting 13 verbatim-transcribed chart CSVs plus 6 value-less charts described narratively, with definitions, methodologies, and X status URLs per chart.

## Key metrics/methods (formulas where given, else "not specified")
- QB EPA gained on Defensive Penalties (@sfdata9ers): "expected points each QB gained from defensive penalties that otherwise wouldn't have produced any yards"; Accepted Penalties and Plays with no Yards Gained Only, Weeks 1–2, 2026 season; thread reply: "players not listed have EPA = 0". (OTHER metrics formula: not specified.)
- Cost of Drops (EPA Differential) (@sfdata9ers): "expected points each team has lost through two weeks due to drops"; formula given: **Air EPA + expected YAC EPA − Actual EPA**; Season 2026, Weeks 1–2; drops charted by @FTNFantasy; rows 22 and 25 unreadable (recorded as UNKNOWN_ORANGE_LOGO_A/B, both appear orange/Browns-like, only one can be CLE).
- QB Read Distribution, Week 2 (@sfdata9ers): percentage of all throws by: Avg. Time to Throw | First Read | Second Read | Designated Receiver* | Checkdown | Scramble; Data: FTN; min. relevant plays: 15; Designated Receiver* = screens, shovel passes, jet sweeps, forward tosses, etc.; row 33 read as "J.Strand" (INFERENCE: likely Jaxson Dart — attributed read, not confirmed).
- Box Defenders Faced, Week 2 (@sfdata9ers): columns Rank | OFF | 5- Box Def. | 6 Box Def. | 7 Box Def. | 8+ Box Def. | Avg. Box Def. | OFF SR; Season 2026, all run & pass plays, Data: FTN; post text: "BUF faced the heaviest boxes and led all offenses in success rate."
- ARBY Matchup Rating, 7-game window (@MagicSportsGuy): ATL ground vs GB: 61/100; GB ground vs ATL: 58/100; window 2025 Wk 13–17 + 2026 Wk 1–2 (TNF Week 3); methodology stated in-chart: **Rating: 65% ARBY / 35% RB YPC each side, offense and defense 50/50, game-weighted 5/2 across the two windows**; source: statrankings.com/nfl/advanced/teams/trench-play/offensive-arby and defensive-arby (first time publicly linked); note: chart also contained an AI prompt bubble describing a "last 5 games" request while title says 7-game window — recorded as displayed.
- Man vs zone: Yards/route (@statyxio): 2026 REG, min 4 targets; footer: season to date through Week 2, "* thin sample", NQ not qualified, N/A not published; asterisked rows (McConkey, P. Washington, St. Brown man-side) flagged thin_sample_flag.
- Week 3 WR man/zone matchup board (@statyxio): columns player/matchup | opponent coverage frequency (0–100% scale) | player TPRR | route sample; footer: STATYX ROUTE IQ / regular season through Week 2; "Different denominators. A frequent coverage call is not a defensive weakness grade."
- QB-Hit % leaders (@statyxio, PARTIAL): 2026 REG; chart shows ranks only, no numeric values; published image skips ranks #3, #6–7, #10–11, #13, #16–17, #20, #29–32 (unreadable/crop).
- Pass Protection Ratings Composite (@benbbaldwin): footnote verbatim — **PFF grade (40%), SIS blown block percentage (40%), and ESPN pass block win rate (20%)**; each source re-scaled 0 (minimum score) to 100 (maximum score); as of 2026-09-23.
- QB Accuracy Index launch (@PFF, article pff.com/news/nfl-qb-accuracy-report): leaderboard ranked by CPOE with PFF grade + grade rank; interactive table "2026 NFL SEASON · THROUGH WEEK 1" (33 qualified passers, min. 21 dropbacks) while article titled "QB Accuracy Report: NFL Week 2"; X-post Allen card (+14.3 CPOE, 26 attempts) appears to be the Week 2 single-game view — recorded as displayed, not reconciled.
- Most motion at the snap (@SumerSports): 2026 Weeks 1–2 with 2025 season comparators; NFL avg line: **37.9% (2025: 34.8%)**; post-text cut (not charted): MIA 2022–25 with/without motion EPA/play splits and LAC 2026 splits.
- Explosive and Negative Play Rates for QBs (@PattonAnalytics, PARTIAL): explosive = catchable passes and scrambles gaining 20+ yards, 2026; points had no labeled values — every rate is an approximation read from chart axes.
- QBs in expected pass situations (@SamHoppen, PARTIAL): "Expected passing situation is when expected pass probability is greater than 70% | Minimum 20 dropbacks"; Data: @nflfastR; bars had no labeled values — every EPA/play approximated from axes.

## Data sources named
- FTN (@FTNFantasy) — underlying data for @sfdata9ers read-distribution, box-defenders, and drops charts
- statrankings.com — public ARBY stat pages (offensive-arby / defensive-arby) underlying @MagicSportsGuy matchup rating
- Statyx Route IQ (@statyxio) — man/zone yards per route, Week 3 WR matchup board
- PFF grade + SIS blown block % + ESPN pass block win rate — components of @benbbaldwin pass protection composite
- @nflfastR — expected pass situation QB EPA chart (@SamHoppen)
- @SumerSports — light-box% × stuff%/EPA per rush/success rate allowed trilogy; motion-at-snap chart
- @FantasyPtsData — @RyanJ_Heath charts: WR first-read target share vs 1D/RR (~70 WRs); accurate throw rate vs ANY/A (~31 QBs); RB rushing success rate vs RYOE/attempt (~36 RBs); RB missed tackles forced vs YACO/touch (~30 RBs); AVG SEPARATION SCORE vs TPRR (~12 named players)
- Sweep sweep mechanics: one read-only browser task, 21 primary + 6 secondary accounts, home feed, keyword searches EPA/TPRR/aggressiveness/pass rush win rate/CPOE; no rate-limiting, no CAPTCHAs, no interactions; standing blockers: @NerdingonNFL/@NFLResearcher timelines never render, @FTNData protected
- 13 X status URLs captured verbatim (e.g. x.com/sfdata9ers/status/2102849733802795040, x.com/MagicSportsGuy/status/2102884253239586926, x.com/benbbaldwin/status/2102778266763374841, x.com/PFF/status/2102846713736417415, x.com/SumerSports/status/2102860011235848643)

## Findings (numbers and facts, not vibes)
- @MagicSportsGuy ARBY rating for TNF (ATL @ GB, Week 3): ATL ground vs GB 61/100, GB ground vs ATL 58/100, on a 7-game window (2025 Wk 13–17 + 2026 Wk 1–2); first public linkage of the underlying statrankings ARBY pages.
- @benbbaldwin pass protection composite: PFF 40% / SIS blown block 40% / ESPN pass block win rate 20%, each re-scaled 0–100.
- @SumerSports: NFL-average motion at the snap 37.9% in 2026 Weeks 1–2 vs 34.8% in 2025.
- PFF QB Accuracy Index: 33 qualified passers through Week 1 (min. 21 dropbacks), ranked by CPOE; Josh Allen Week 2 single-game card: +14.3 CPOE on 26 attempts.
- @statyxio narrative panels ("IT WASN'T JUST ABOUT VOLUME"): Lamb 8→9 targets, air-yard share 35.9%→57.4%, 44→153 yds; Adams 6→10 targets, air-yard share 27.2%→57.4%, 26→195 yds; K. Williams 11→12 carries, +34.1 RYOE, 41→85 yds.
- @sfdata9ers post text: BUF faced the heaviest boxes and led all offenses in success rate (Week 2).
- @RyanJ_Heath ×4 charts (scatter positions only, no labeled values): ~70 WRs (first-read target share vs 1D/RR), ~31 QBs (accurate throw rate vs ANY/A), ~36 RBs (rushing success rate vs RYOE/attempt), ~30 RBs (missed tackles forced vs YACO/touch).
- @FantasyPtsData avg separation score vs TPRR: ~12 named players.
- @Shauncore light-box% × (stuff% / EPA per rush / success rate allowed) trilogy: 32 team logos, no values; footer "Data: SumerSports".
- @StartSitEmFF/@DynatyzeFF CPOE × EPA/dropback bubble chart: no values.
- @benbbaldwin "Charted versus Production-based Measures of QB Play": PFF grade × EPA/play, ~35 QBs, no values.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB read distribution (first read / second read / checkdown / scramble percentages of all throws + avg time to throw); QB Accuracy Index leaderboard ranked by CPOE; charted-vs-production QB play scatter (PFF grade × EPA/play, ~35 QBs); QB EPA in expected-pass situations (expected pass prob > 70%, min 20 dropbacks); QB explosive/negative play rates (explosive = catchable passes + scrambles gaining 20+ yds).
- COACHING: Motion at the snap (NFL avg 37.9% in 2026 Wk 1–2 vs 34.8% in 2025) — a play-calling/scheme-adjacent team tendency; MIA 2022–25 with/without motion EPA/play splits noted in AGENTS.md.
- OL: Ben Baldwin pass protection composite (PFF grade 40%, SIS blown block % 40%, ESPN pass block win rate 20%, each re-scaled 0–100); statyxio QB-Hit % leaders ranks.
- TRUST-SIGNAL: Explicit verbatim methodology notes (ARBY 65/35, 50/50, 5/2 weighting; composite 40/40/20; expected-pass-prob > 70% definition) make these metrics re-implementable; conversely the sweep honestly flags PARTIAL charts, unreadable ranks, and approximated-from-axes values — a transparency standard for engine chart intake.
- SCHEME: ARBY trench matchup rating (65% ARBY / 35% RB YPC, offense-defense 50/50, game-weighted 5/2 across two windows) for TNF ground-game edges; man/zone coverage frequency vs player TPRR matchup board; Statyx man-vs-zone yards/route with thin-sample flags.
- OTHER: Defensive-penalty EPA gained by QBs; Cost of Drops EPA differential formula (Air EPA + expected YAC EPA − Actual EPA); RB rushing success rate vs RYOE/attempt; RB missed tackles forced vs YACO/touch; WR first-read target share vs 1D/RR; avg separation score vs TPRR.

## Engine-actionable? (yes/no + one-line what)
Yes — the 13 per-chart CSVs are verbatim metric transcriptions with explicit formulas (ARBY weighting, pass-protection composite weights, drops EPA differential) directly re-implementable as engine features.

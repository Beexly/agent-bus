# docs/dfs/research/2026-09-30/full-tables/README.md

## What it is (1-2 sentences)
A README index of two X-analytics table-transcription sweeps run 2026-09-30 (AM ~09:08–09:25 and PM ~9:40–10:15 CDT) documenting 21 transcribed CSV files from analytics accounts, plus an explicit list of charts/notes that were NOT transcribed — a catalog manifest, not the data itself.

## Key metrics/methods (formulas where given, else "not specified")
not specified (this file is an index; each listed CSV carries its own column definitions in the repo's full-tables directory)

## Data sources named
- @GridironInfo_ (Data: PFF; nflverse/nflreadpy): pass protection streaks, offensive plays run, QB turnovers
- @DynatyzeFF (Dynatyze Usage Lab, dynatyze.com/football/usage-lab): WR1 target-share feed, 32 teams W1–W3
- @PFF (proprietary): big-time-throw rate on deep passes, man-coverage CB grades, QB/receiver EPA pairings, defensive drive turnover %, DI pass-rush win rate, team YAC
- @PRFFBall (Data: @FantasyPtsData): WR triple criterion (25+ first-read targets, 35%+ air-yard share, .25+ TPRR)
- @sfdata9ers (Data: FTN): QB EPA/rush, playcalling tendencies (motion/screen/PA/no-huddle/RPO), 10+ yard rushes allowed, opening-drive points
- @RyanPaganetti (Data: ESPN): team pass-block win rate
- @ScottBarrettDFB (@FantasyPtsData Suite 2.0): average separation score, Cowboys advanced receiving
- @SumerSports (proprietary): pressure without blitzing, Parker Washington route tree
- @SamHoppen: composite power ratings from 6 sources (ESPN FPI, nfelo, Inpredictable, Unexpected Points, FTN DVOA, PFF)
- @fball_insights (@FantasyPtsData Suite): early-down formation/personnel rates
- @PattonAnalytics (@FTNFantasy): rookie EDGE pressure leaders
- @statyxio (Statyx Route IQ + Data Lab): Week 4 WR man/zone matchups
- @MagicSportsGuy (StatRankings/statrankings.com): TNF Steelers-Browns usage/corner/team-metrics report
- Not transcribed (values approximate or text-only): @PattonAnalytics "yards left on field" scatter, @realfrankbrank CPO/expected-completion scatter, @SumerSports Chiefs under-center chart, @EstablishTheRun Thorman's Snaps and Pace (paywalled), assorted analyst notes

## Findings (numbers and facts, not vibes)
- AM sweep (6 CSVs): GridironInfo_ pass-protection streaks — 10 rows, one provisional row (Lucas Patrick, position from logo read); NO 222 offensive plays most, TEN 157 fewest (32 teams, W1–W3); Dynatyze WR1 feed — league median WR1 target share 21%, top 14 offenses; thread: GB RB snaps — Chris Brooks 43.2%, Kaleb Johnson 32.0%, MarShawn Lloyd 24.8%; Mahomes 62.5% big-time-throw rate on deep passes (5 rows); Mansoor Delane 93.8 man-coverage grade leads CBs [OL, SCHEME, QB-BEHAVIOR, TRUST-SIGNAL]
- PRFFBall triple criterion (W1–W3): 6 WRs meet 25+ first-read targets / 35%+ air-yard share / .25+ TPRR; historical claim verbatim: 25 players met it since 2021 — 16/25 (64%) finished top-12 WRs; 16/19 (84.2%) finished top-12 among those playing ≥12 healthy games; 23/25 (92%) were top-12 when healthy and with their starting QB [TRUST-SIGNAL, QB-BEHAVIOR]
- PM sweep (15 CSVs): Purdy 1.34 EPA/rush leads QBs (29 QBs, min 3 rushes, sneaks/kneels excluded), Wentz −1.44 last [QB-BEHAVIOR]; Bills 62% pass-block win rate #1, Packers 16% #32 [OL]; Det 46.5% pressure-without-blitz rate leads [SCHEME, OL]; Dart→Likely +1.66 EPA/play #1 of 159 QB/receiver pairings [QB-BEHAVIOR]; Drake Maye 7 turnovers (6 INT, 1 fumble lost) leads QBs [QB-BEHAVIOR]
- Playcalling tendencies (Week 3): SF 87.8% motion #1, KC 14.3% screen #1, SEA 25.0% play action #1, NO 18.1% no-huddle #1, CAR 10.8% RPO #1 [COACHING, SCHEME]
- Early-down formation/personnel (32 teams, garbage time excluded): NO 21-personnel cell had a disputed read — 5.3% vs 0.0%; CSV carries 0.0% (majority), flagged in AGENTS.md [TRUST-SIGNAL]
- 10+ yard rushes allowed: ATL 2 fewest, DAL 15 most; Arizona appears twice (rank 6 with 6 AND rank 27 with 11) — author error flagged in CHART_NOTE [TRUST-SIGNAL]
- Opening-drive points: SF & KC 17, nine teams at 0 [COACHING]
- Composite power ratings (Week 4): Bills 5.8 #1, Dolphins −8.1 #32; Chargers STD_DEV illegible — blank [SCHEME]
- Parker Washington: ≥1 catch on all 9 downfield routes, 15 REC / 221 YDS total [SCHEME]
- Davante Adams 0.185 separation score #1 (12 WRs, min RTE≥222, 2025–26) [SCHEME]
- Cowboys receiving: Lamb vs Pickens both 25 targets — Lamb 309 yds, Pickens 150 [SCHEME]
- Rookie EDGE pressures: Cashius Howell 9 (19.6%) leads [OTHER]
- Gervon Dexter Sr 23.3% DI pass-rush win rate leads; Raiders 25.7% defensive-drive turnover rate #1; Chiefs 528 team YAC #1 [OL, SCHEME, QB-BEHAVIOR]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB EPA/rush (Purdy 1.34 / Wentz −1.44), BTT rate on deep passes (Mahomes 62.5%), QB turnovers (Maye 7), Dart→Likely EPA pairing (+1.66), triple-criterion predictive claim → QB-BEHAVIOR
- Pass protection streaks, ESPN pass-block win rate (Bills 62% / Packers 16%), pressure-without-blitz, DI PRWR → OL
- Playcalling tendencies (motion/screen/PA/no-huddle/RPO), opening-drive points, early-down formation/personnel, route trees, separation/YPRR/TPRR tables, pressure rates, man/zone splits → SCHEME
- Opening-drive scoring (SF & KC 17, nine teams 0) → COACHING
- GB RB snap share shakeup (Johnson 32.0% over Lloyd 24.8%), Giants skill snap leaders → OTHER
- Sweeps, transcription caveats (disputed cell, duplicate Arizona row, illegible values, provisional ID), explicit not-transcribed list, composite power ratings from 6 sources → TRUST-SIGNAL

## Engine-actionable? (yes)
Weekly sweep CSV pipeline produces structured playcalling-tendency and formation/personnel tables ready for opponent-tendency features.

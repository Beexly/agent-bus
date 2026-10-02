# docs/dfs/research/2026-09-22/full-tables/README.md
## What it is (1-2 sentences)
Index/catalog README for the 2026-09-22 AM + PM sweep of chart/table images from NFL analytics X/Twitter accounts: each entry describes one transcribed CSV (metric | team values | NFL avg), the source post, data attribution, and PARTIAL/FULL coverage notes, with verbatim URLs.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified in README (the underlying CSVs/charts carry them). Notable metric labels surfaced: "9YOE"/"yoe9" (new metric label from @GridironInfo_, no definition given by author); PROE (pass rate over expectation, actual vs expected pass rate via nflfastR's model, PROE 0% = black line); EPA/Drive team tiers (kneeldown drives excluded); explosive play rates (Run = 10+ yards, Pass = 20+ yards); composite power ratings = mean of 6 sources (ESPN FPI, @greerreNFL nfelo, @inpredict Inpredictable, @KevinCole___ Unexpected Points, FTN DVOA, PFF) expressed as expected spread vs average team with per-team std dev; FTN DVOA footnote: "combination of preseason priors and in-season DVOA weighted towards the last few games, divided by 3.6%"; "Cardio Index" = highest route participation + lowest targets per route run (player-level: route participation %, route-part rank, TPRR, TPRR rank); backfield XFP (Expected Fantasy Points, backfield only).

## Data sources named
nflverse (nflready ptp / nflfastR / nflreadpy), FTN charting, Next Gen Stats, Kalshi (playoff probabilities + futures blend in power ratings), statrankings.com, @GridironInfo_, @SamHoppen, @RyanJ_Heath, @PFF, @SumerSports, @benbbaldwin, @MagicSportsGuy, FantasyPtsData; sweep method: one read-only browser task, 21 primary + 6 secondary accounts, keyword searches EPA/TPRR/aggressiveness/pass rush win rate/CPOE.

## Findings (numbers and facts, not vibes)
- AM sweep window: posts after ~22:30 CDT 2026-09-21; PM sweep: after ~10:00 AM CDT through ~9:00 PM CDT 2026-09-22; no rate-limiting, no CAPTCHAs, no interactions; chart values read from chart images (minor per-cell transcription risk).
- 21 CSV entries: 5 GridironInfo_ game-recap tables (NYG @ LAR Week 2, NYG 6 – LA 28: overall offense, drives & situations, passing, rushing, receiving); playoff probabilities after Week 2 (Kalshi; NFC leaders: SF 76%, PHI 73%, SEA 73%, LAR 72%); avg drive start position; series results; first-downs by down; PFF "most 20+ yard passes without a completion": Aaron Rodgers 0-9, Jameis Winston 0-4, Cooper Rush 0-2, Cam Ward 0-1, Kyler Murray 0-1; SamHoppen PROE leaders (9 teams, partial), EPA/drive tiers (4 standouts, partial), explosive play rates (top 5 + bottom 3: DAL 3.0% (32), PIT 3.9% (31), CLE 3.9% (30) — offense vs defense ambiguity flagged verbatim); benbbaldwin Week 2 objective power ratings (full 32-team, market-implied win% vs league-average + Kalshi futures blend); RyanJ_Heath % plays run while trailing (5 highest + 4 lowest); backfield XFP Week 1 + Week 2 top 5 ("Two very different CHI scripts, but ranked top-5 both games @FantasyPtsData"); SumerSports Aaron Donald return: 32 defensive snaps, 27.8% pass-rush win rate, 2 run stops, 1 pressure, 1 TFL.
- PM sweep: MagicSportsGuy "Cardio Index" (10 charted rows); SamHoppen Week 3 composite power ratings (full 32-team table, mean of 6 sources + per-team std dev).
- New/labeling notes: "9YOE" is a new metric label with no author definition; the samhoppen explosive-play bottom rows are flagged as ambiguous (offense vs defense unclear).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR**: PFF 20+ yard passes without completion (Rodgers 0-9, Winston 0-4, Rush 0-2, Ward 0-1, Murray 0-1) — a QB deep-ball failure-rate stat, complementary to completion% on depth targets.
- **OTHER**: the sweep/index pattern itself — chart-image sweep → verbatim CSV transcription → README catalog with URLs, partial/full flags, ambiguity notes, and transcription-risk caveats — is a reusable corpus-intake pipeline design.
- **TRUST-SIGNAL**: ambiguity is preserved verbatim rather than resolved by guessing (offense-vs-defense table; "9YOE" undefined) — explicit unknowable-vs-unknown labeling.

## Engine-actionable? (yes/no + one-line what)
Yes — several metric definitions are engine-ingestible: Cardio Index (route participation × low TPRR), backfield XFP, composite power-rating method (mean of 6 sources + std dev), and plays-while-trailing %, plus the sweep-to-CSV pipeline pattern for systematic table capture.

# docs/dfs/research/2026-09-29/full-tables/README.md
## What it is (1-2 sentences)
Index/documentation of transcribed tables from the 2026-09-29 X analytics sweep, AM and PM windows (Week 3 data): drive-outcome charts, the PHI@CHI MNF recap (PHI 7 - CHI 27) with full boxscores, sack rate allowed, explosive play rates, run-gap leaders, TE volume trends, PFF big-time-throw rates, Drake Maye 2026-vs-2025 throw-depth splits, market-implied tiers, dropback outcomes, playoff probabilities (Kalshi), TE YAC, WR YPRR, Purdy-vs-blitz EPA, route-running metrics, uncatchable target rates, air-yard share, defensive tendencies, red-zone receiving leaders, and pass-block grades.
## Key metrics/methods (formulas where given, else "not specified")
- Average drive start (GridironInfo_, nflverse 2026-09-29): 32 teams; LV 41.8 best, ATL 21.1 worst.
- Sack rate allowed 2026 (GridironInfo_, excludes MNF): 32 teams; SF 0.0, TB 10.7.
- Explosive play rates (@SamHoppen, nflfastR, as of Week 3): definition "Run: 10+ yards | Pass: 20+ yards | Rank in parentheses"; offensive and defensive tables, 32 teams.
- Run-gap leaders (@csv_enjoyer, nflfastR): "Who Owned the Zone? 2026 Week 3" — 7 gap leaders by EPA/Rush; minimum 3 rushes in a gap; scrambles and penalties excluded.
- Dropback outcome by QB (GridironInfo_, Week 3, min 15 dropbacks): COMPLETE/INCOMPLETE/SCRAMBLE/SACK/INT %; 32 rows; FLAG: read places both C. Keenum and C. Stroud on HOU — likely logo misread (Keenum started for Chicago on MNF per the same account's recap), noted not corrected.
- TE volume trends (@KyleM_FF, Fantasy Points Data, Wks 1-3): 20 TEs (10 trending up, 10 down); Route/Target/AirYd/1stRead/XFP shares; TREND_SCORE.
- First-read target share (@MagicSportsGuy, statrankings.com): Week 3 top-25, 30%+, min 3 targets; *pending MNF.
- Brock Purdy EPA/dropback when blitzed (@SumerSports): min 20 blitzed dropbacks; league average 0.00.
- Unluckiest WRs (@ScottBarrettDFB, Fantasy Points Advanced Receiving, Model XFP): Uncatchable Target Rate = TGT_NOT_CATCHABLE/TGT_TOTALS; league avg 21 tgt / 5 not catchable / 21.5%; Air Yardage Rate = AY_NOT_CATCHABLE/AY_TOTALS; league avg 225 AY / 68 not catchable / 30.4%. 12 rows each.
- Defensive tendencies (@FantasyPtsData "Defensive Tendencies" tool): BASE/PRESS/BLITZ % + AVG_MEN_IN_BOX; league avg 31.4 / 35.2 / 31.3 / 6.95 (visible rows 1-14, partial).
- Market-implied team tiers (@benbbaldwin): blends near-term game lines with season win-total, division, conference, Super Bowl, playoff and #1 seed markets (Kalshi); 32 teams, 6 tiers. Market-implied, not play-by-play.
- Playoff probabilities (GridironInfo_): ONE_SEED/DIVISION/WILD_CARD/TOTAL % from Kalshi; stacked-bar reads, approximate.
- PFF proprietary: lowest big-time-throw-to-turnover-worthy-play rate (6 QBs, min 75 dropbacks); highest defensive grade among edge (5, min 80 snaps); only CBs with 0.0 passer rating allowed in man coverage (multiple targets): Trent McDuffie, Travis Hunter — replies dispute McDuffie claim citing Pat Bryant beating him in Rams-Broncos ("LMAO Wrong Image", "Fake News").
- Drake Maye 2026-vs-2025 by throw depth (@FantasyFFData, via @FantasyPtsData): 8 rows of depth splits.
- Red-zone efficiency (sfdata9ers, Week 2): ranked by points per RZ trip; ATL no RZ trips Weeks 1-2.
- CHI vs PHI recap (MNF, CHI 27 - PHI 7): Total EPA, EPA/Play, Success Rate, aDOT, CPOE, EPA/DB; passing boxscore (Hurts, Dalton; Keenum for CHI); rushing; receiving; biggest plays by EPA. Footer: "Data: nflverse (nflreadpy) pbp + FTN charting + Next Gen Stats | aDOT excludes throwaways | RYOE shown only where NGS charted the back".
## Data sources named
nflverse (nflreadpy); nflfastR; FTN charting; Next Gen Stats; SumerSports; Fantasy Points Data; statrankings.com; PFF proprietary; Dynatyze; Statyx; Kalshi (market-implied); @FFDataRoma / @xEP_Network / @BlockedByBamba (in 9-25 file).
## Findings (numbers and facts, not vibes)
- LV 41.8 best avg drive start vs ATL 21.1 worst — a 20.7-yard field-position gap (Week 3).
- Sack rate allowed: SF 0.0% (best) vs TB 10.7% (worst) through Week 3 (ex-MNF).
- MNF: CHI 27 - PHI 7; Case Keenum started for Chicago.
- Explosive play definition standardized as run 10+ / pass 20+ yards.
- League-average defensive tendencies: 31.4% base / 35.2% press / 31.3% blitz / 6.95 men in box.
- League-average uncatchable target rate: 21.5% (21 targets / 5 not catchable).
- Purdy-vs-blitz table uses league average 0.00 EPA/dropback when blitzed as reference line.
- McDuffie 0.0 man-coverage passer-rating claim is publicly disputed in replies (data-quality caveat).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Dropback outcome by QB: scramble % vs sack % vs INT % splits (min 15 dropbacks) — QB-BEHAVIOR (scramble-vs-designed-run proxy, situational INT rates); Keenum/HOU misread flagged as data-quality note.
- PFF BTT-to-TWP rate; Maye 2026-vs-2025 throw-depth deltas; Purdy EPA/dropback when blitzed (vs 0.00 league avg) — QB-BEHAVIOR.
- First-read target share (Week 3 top-25, 30%+, min 3 targets) — QB-BEHAVIOR (trust targets).
- Red-zone receiving leaders (min 5 RZ targets; RZ_TGT, RZ_SHARE, FINISH %, RZ_TD) — QB-BEHAVIOR (red-zone trust), SCHEME.
- Sack rate allowed (SF 0.0, TB 10.7) + PFF pass-block win rate (OT, 6 rows) — OL.
- Defensive tendencies tool (base/press/blitz %, men in box) — SCHEME, COACHING (defensive tendency profiling).
- Explosive play rates offense/defense; drive-start field position (LV 41.8/ATL 21.1); down-by-down chains; drive-end outcomes — SCHEME, OTHER (situational modeling).
- Run-gap EPA/rush leaders (min 3 rushes, scrambles/penalties excluded) — OL (run blocking), OTHER.
- Market-implied tiers + Kalshi playoff probabilities — OTHER (market prior for calibration); TRUST-SIGNAL (benbbaldwin transparent Kalshi-blend methodology).
- McDuffie claim dispute — TRUST-SIGNAL (reply-driven fact-check; treat PFF man-coverage zero-rating claims skeptically).
## Engine-actionable? (yes/no + one-line what)
Yes — the Fantasy Points "Defensive Tendencies" tool (base/press/blitz % + men in box per team) and the QB dropback-outcome split (scramble/sack/INT % per QB) are the two most intake-worthy profiles: blitz-rate team tendencies feed QB-blitz modeling, and per-QB scramble/sack/INT splits feed QB behavioral profiles directly.

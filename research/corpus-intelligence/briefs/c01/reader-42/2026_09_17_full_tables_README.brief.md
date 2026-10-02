# docs/dfs/research/2026-09-17/full-tables/README.md
## What it is (1-2 sentences)
Index/documentation of the complete transcribed tables from a 21-post X analytics sweep (2026-09-17, Week 1/2 of the 2026 season), covering OL/rush grades, QB reads, aggressiveness, motion-EPA, injury recovery, and miscellaneous metrics; it describes each source post's stated data source and methodology (the CSV tables themselves live alongside, not in this task's file list).
## Key metrics/methods (formulas where given, else "not specified")
- NGS aggressiveness (via @GridironInfo_ thread reply): percentage of pass attempts where a defender was within 1 yard or less of the intended receiver at completion/incompletion time.
- HB Analytics pass-block grade: "Pressure rate grade — Blended — 2026 through Week 1, with 2025 counted at 83% and fading out by Week 6. Filters: OT, OG, C, 150+ reps." Grade = pressure-rate movement on a typical rep vs an average blocker facing the same rushers; wins vs top rushers count more; rusher grades solved simultaneously; double teams handled separately; small samples pulled to average. Negative = good (pass protection); positive = good (pass rush).
- @DynatyzeFF QB table: every row clears 6+ dropbacks; FPTS = Dynatyze's own fantasy scoring; 32 qualified rows.
- @sfdata9ers penalty chart: accepted penalties only (declined/offsetting excluded).
- @MagicSportsGuy PROE+ = "Pass Rate Over Expectation + Neutral Pace" composite (paywalled at statrankings.com); "1st Read % splits" described as unique StatRankings calc.
- @statyxio metrics named: EPA/DB, CPOE, Success %, aDOT, Sack %.
- @RyanPaganetti motion-at-snap scatter: league avg lines pass EPA/play +0.01, run EPA/play +0.00 (approximate reads from dot positions).
- Survivor future value (cmain7/Establish The Run): optimize rest-of-season with each team available, then with that team removed; normalized 0-100; built for Splash World Champ survivor; does not account for power-ranking movement or injuries.
- @recovery-chart (Jeff Mueller, PT/DPT FantasyPts): per-player estimated % chance to play Wk2-Wk6, PPG pre-injury → PPG first 2 games back; updated Thu Sep 17.
## Data sources named
FTN (charting); Sumer Sports play-by-play charting; Next Gen Stats (NGS aggressiveness, via nflverse/nflreadpy 2026-09-15); Dynatyze's own scoring; statrankings.com; statyx.io NFL Data Lab; @DevyEusuf/@FantasyPtsData; @CFB_Data via @cfbfastR; not stated for penalties, snap-weighted age, defensive EPA motion, survivor value.
## Findings (numbers and facts, not vibes)
- HB Analytics composite blending: 2025 data at 83% weight fading by Week 6; 150+ rep minimum; double teams handled separately; small samples shrunk toward average — a directly reusable OL grading methodology.
- @joe307bad DIY dashboard composite "Score of three most important stats per position group"; QB top 5: Lawrence 100.00, Dart 94.62, C. Williams 91.40, Allen 90.32, Jackson 80.65.
- @DevyEusuf/@FantasyPtsData: Trey McBride and Isaiah Likely were top 2 among TEs (min 10 routes) in Separation Market Share, and top 2 (min 20 routes) in target share, first-read target share, PPR fantasy points, expected fantasy points, and slot % on routes.
- Motion-at-snap defensive EPA scatter: league-average defensive lines at pass +0.01 / run +0.00 EPA/play allowed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- HB Analytics pressure-rate grade methodology (opponent-adjusted, simultaneous rusher/blocker solve, double-team-aware, Bayesian-shrinkage, time-blended) — OL, TRUST-SIGNAL (credible, published methodology; stats.hawkblogger.com).
- NGS aggressiveness definition (1-yard defender proximity at catch point) — QB-BEHAVIOR.
- QB read progression / designated-receiver % (screens, shovel passes, jet sweeps, forward tosses) — QB-BEHAVIOR, SCHEME.
- Defensive EPA with motion at snap vs league average — SCHEME.
- Injury recovery chart (Mueller, FantasyPts PT/DPT): estimated play probabilities Wk2-Wk6 + PPG delta on return — OTHER (availability modeling), TRUST-SIGNAL (credentialed medical analyst).
- @joe307bad QB composite scores — QB-BEHAVIOR (weak source; account not verified).
## Engine-actionable? (yes/no + one-line what)
Yes — HB Analytics' opponent-adjusted, time-blended, double-team-aware pressure-rate grade is a ready-made OL grading blueprint (composite family incl. run-block "Disruption rate grade" appears in the 9-25 sweep); also catalog statrankings.com PROE+ and 1st-Read-% as intake candidates.

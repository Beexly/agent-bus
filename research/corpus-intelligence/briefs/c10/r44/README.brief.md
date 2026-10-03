# dfs/research/2026-09-28/full-tables/README.md
## What it is (1-2 sentences)
Index of full-table transcriptions from two X analytics sweeps on 2026-09-28 (AM window ~9:10 PM CDT 9/27–9:10 AM 9/28; PM window 10:10 AM–9:30 PM 9/28), captured read-only in X as @GalaxySportsHQ. Each entry names the source account, columns, qualifiers/footers, and post URL for 3 AM charts and 11 PM charts.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — this file is an index, not the data. Metrics named across the charts: FPTS/G, XFPTS/G, FPOE, EPA/play, DAKOTA, Fantasy WAR, CPOE%, adjusted EPA/play, expected-score "Deserved Margins" (stolen/robbed wins), play-action EPA/dropback, rush EPA, stuffed-run %, stacked-box %, success rate, yards over expected, garbage-time snap % (defined as win probability > 90%), PFF pass-blocking grades.
## Data sources named
nflverse (nflreadpy, gridironinfo footers); NGS (sfdata9ers rushing chart header); PFF proprietary grading; GridironValue (gridironvalue.com/stats); @RotoDoc expected-score model on nflfastR; SumerSports proprietary. DAKOTA and Fantasy WAR methodology explicitly "not shown on chart".
## Findings (numbers and facts, not vibes)
- AM sweep transcribed 3 charts: @DynatyzeFF QB FPTS/G leaders (15 QBs + league-average row; chart qualifier verbatim: "Every row clears 17+ dropbacks. 36 qualified rows in this cut"); @GridironInfo_ Week 3 QB CPOE (full 30-QB table); @ChadGraff bottom-10 QBs by adjusted EPA/play (ranks 25–34).
- PM sweep transcribed 11 charts: RotoDoc Deserved Margins (20 teams with non-zero stolen/robbed wins, Weeks 1–3); Drake Maye regression game log (7 games, ALL negative EPA/play); GridironValue Mahomes vs Allen percentile chart (8 metrics × 2 players, sample "34 QBs / ≥36 attempts through 3 games"); SumerSports Kirk Cousins leads NFL in play-action efficiency (5 QBs, min. 20 PA dropbacks); sfdata9ers Top Rushing Performances Week 3 (28 rows, min. 10 carries, QBs excluded, NGS header); ARIvsSF game recap (15 metrics with historical-percentile coloring); GridironValue Team Opportunities (top 10 of 32 captured; FLAG: rows 11–32 NOT preserved); FantasyPtsData worst RB seasons by total EPA last 6 years (4 rows; 2026 Jeanty "-110.5" marked "on pace for"); ChadGraff points-per-drive bottom-10 (NE 0.97 last "by a wide margin"); GridironInfo_ garbage-time snaps 2026 (30 teams; garbage time = leader's win probability > 90%; PHI 0.0%); PFF highest pass-blocking grades Week 3 (5 rows; three Lions in top four).
- NOT transcribed: several charts noted only in AGENTS.md (e.g., sfdata9ers Total QBR only 6 of 30 values verified; GridironValue team opportunities rows 11–32 missing).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cousins #1 in play-action efficiency among 5 QBs, min. 20 PA dropbacks — QB-BEHAVIOR, SCHEME.
- Drake Maye 7-game log, all negative EPA/play — QB-BEHAVIOR, TRUST-SIGNAL (fade signal vs. hype).
- NE 0.97 points/drive last by a wide margin — SCHEME, COACHING.
- Three Lions in PFF top-5 pass-blocking grades Week 3 — OL.
- Jeanty "-110.5" EPA on pace for worst RB season of last 6 years — OTHER (RB performance, TRUST-SIGNAL for fade).
- GridironInfo_ Team Opportunities rows 11–32 lost — OTHER (data-completeness gap; re-capture from gridironvaluehq team opportunities product).
## Engine-actionable? (yes/no + one-line what)
Yes — re-capture the missing GridironValue team-opportunities rows 11–32 and the AGENTS.md-noted untranscribed charts (Total QBR, points-per-drive leaders, PFF YPRR, LordReebs pass points per attempt) before they scroll away; crosswalk with the 9/28 post URLs listed.

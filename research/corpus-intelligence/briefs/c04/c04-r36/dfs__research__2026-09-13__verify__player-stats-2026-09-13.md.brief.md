# docs/dfs/research/2026-09-13/verify/player-stats-2026-09-13.md
## What it is (1-2 sentences)
A 13-claim verification audit of player-level stats used in Week 1 2026 DFS analysis, checked against permitted sources with a banned-source list (PFF, ESPN, NFL.com, numberFire, FantasyLabs, Sharp Football, etc. all excluded); scoring is standard non-QB-PPR (1pt/25 pass yds, 4pt pass TD, −2/INT).
## Key metrics/methods (formulas where given, else "not specified")
- Standard scoring: 1 pt/25 pass yds, 4 pts/pass TD, −2/INT, 1 pt/10 rush yds, 0 PPR for QBs (note: QBs not checked in this batch).
- Passer rating recomputed from raw comp/att/yards/TD/INT lines (e.g., Goff true domes: 224/333, 2,545 yds, 21 TD, 3 INT = 107.3).
- YPRR = receiving yards / routes run (LaPorta: 489/247 = 1.98).
- Before-contact yards/att = (rush yds − yds after contact) / attempts (SumerSports definition).
- TPRR = targets / routes run (Goedert: 82/419 = 19.6%).
- Full-PPR PPG = (rec + yds/10 + TD×6) / games (Mayer: (18+19.6+6)/4 = 10.9).
## Data sources named
StatMuse game logs (recomputed), SumerSports player pages (free), The Fantasy Footballers TPRR report, official team sites (Lions, Vikings), FootballDB box scores, Reuters, TSN, Fox Sports, Sporting News, PrizePicks playbook (red-zone share), Purple Insider, RaisingZona/AZCardinals.com, ClutchPoints. BANNED sources explicitly excluded: PFF, Sharp Football, FTN, FantasyPoints, Next Gen Stats, ESPN, NFL.com, CBS, NBC Sports, USA Today/Wire, SI, thehuddle, RotoBaller, RotoWire, FantasyAlarm, FantasyLabs, numberFire, FantasyPros, PlayerProfiler.
## Findings (numbers and facts, not vibes)
- Goff 2025 dome passer rating: claimed 110.8 → CORRECTED to 107.3 in true dome games (9 gms: 8 at Ford Field + 12/25 @MIN). The 110.8 is a StatMuse query-labeling artifact (returned first 10 season games, six at outdoor stadiums).
- Goff fantasy PPG: claimed 19.6 indoors / 13.5 outdoors → CORRECTED to 19.9 indoors / 15.7 outdoors (true venue split). Home/road reference: 19.3 vs 16.7. The 13.5 could not be reproduced under any scoring/split variant tested.
- Sam LaPorta 2025: claimed 2.14 YPRR → CORRECTED to 1.98 (489 yds / 247 routes, SumerSports). His final nine games were his entire 2025 season (9 games played): 40 rec / 49 targets / 489 yds / 3 TD. End-zone-target claim unverifiable from permitted sources.
- Saquon Barkley yards-before-contact/att: claimed 3.55→2.11 → CORRECTED to 2.44→1.13 (2024: (2,005−1,164)/345; 2025: (1,140−824)/280). Direction (sharp decline) confirmed.
- T.J. Hockenson 2025: CONFIRMED 51 rec / 438 yds / 3 TD in 15 games.
- Dallas Goedert: claimed 27.1%/18.8% TPRR with/without A.J. Brown → UNVERIFIABLE (traces to banned USA Today piece). Permitted alternative: 19.6% season TPRR (82/419); season line 60 rec / 591 yds / 11 TD (career-high TDs) in 15 games. Claimed 40.9% of inside-the-10 targets → UNVERIFIABLE; permitted alternative: 15 red-zone targets, 13 catches, 30.0% red-zone target share.
- Michael Mayer in 4 Bowers-absent games (10/12/25 vs TEN, 10/19/25 @KC, 12/28/25 vs NYG, 1/4/26 vs KC): CONFIRMED 18 rec / 24 targets / 196 yds / 1 TD → 6.0 targets/g, 10.9 full-PPR PPG. Bowers: Weeks 1–4 played through PCL injury, sat 3 straight, IR final two weeks (12 games played).
- Kyler Murray: claimed 14.7% career under-center vs 46.9% KOC Vikings 2025 → UNVERIFIABLE; directional only — Murray historically shotgun-heavy (in one early Drew Petzing game, all but nine snaps in shotgun; 121 under-center passes in 2024).
- Chase Brown: CONFIRMED 21 of Cincinnati's 23 rushing attempts (91.3%) in Week 1 2025 (CIN vs CLE).
- MarShawn Lloyd with Jacobs on Commissioner's Exempt List: CONFIRMED de facto GB RB1 but qualified — LaFleur says touches "to be determined"; Chris Brooks and Kaleb Johnson also get work (committee lead, not bellcow).
- Tyler Allgeier: CORRECTED — not on Falcons; signed 2-yr/$12.25M with Arizona Cardinals (Mar 2026); listed RB1 on ARI published depth chart ahead of #3-overall rookie Jeremiyah Love (camp reporting frames it as likely timeshare).
- StatMuse query labels are not reliable filters (Goff artifact); the A.J. Brown/Goedert split claims trace to a single banned USA Today Start/Sit piece and must not be reused without permitted citation.
## Intelligence connections
- QB-BEHAVIOR: Goff's true dome/outdoor split — 19.9 vs 15.7 fantasy PPG (+4.2) and 107.3 dome passer rating; Kyler Murray historically shotgun-heavy (formation-snap tendency relevant to scheme transition).
- TRUST-SIGNAL: Goedert's 30.0% red-zone target share and career-high 11 TDs (2025) — red-zone trust indicator, though with/without-A.J. Brown splits were unverifiable.
- SCHEME: Michael Mayer's fill-in production (10.9 PPR PPG as starter-proxy) — bench-usage pattern when TE1 is out; LaFleur's "touches TBD" signals committee rather than workhorse deployment.
- COACHING: Matt LaFleur's public "to be determined" vs TSN's "de facto RB1" — coach-speak ambiguity on GB backfield deployment.
- OTHER: Correction/unverifiable-audit mechanics — banned-source provenance tracing is a trust/reliability framework finding for the research pipeline itself.
## Engine-actionable? (yes/no + one-line what)
Yes — corrected Goff dome/outdoor splits (19.9 vs 15.7 PPG) are a wire-able venue adjustment input, and Barkley's confirmed 2.44→1.13 yards-before-contact decline is a regression/trend signal.

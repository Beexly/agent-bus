# dfs/research/2026-09-13/verify/defense-matchup-2026-09-13.md
## What it is (1-2 sentences)
Verification of seven claims about 2025 NFL team defenses for Week 1 2026 DFS matchup analysis, each graded CONFIRMED / CORRECTED / UNVERIFIABLE against primary data; six confirmed, one corrected (Arizona 27th, not 26th, in EPA/dropback allowed).
## Key metrics/methods (formulas where given, else "not specified")
Sack rate = sacks ÷ dropbacks (dropbacks = pass attempts including sacks). EPA/dropback = Σ EPA over defensive pass plays ÷ dropbacks (nflverse EPA model). TE fantasy points = completed passes to rostered TEs grouped by defending team, half-PPR (FanDuel-style). Red-zone TD rate = TDs on red-zone trips. Methodology note lists banned sources and retains analysis scripts at `~/workspace/dfs-research/verify/nflverse/`.
## Data sources named
nflverse `play_by_play_2025.csv` + `roster_2025.csv` (computed directly); Pro-Football-Reference team pages (was/2025, nor/2025, crd/2025); StatMuse league tables. No numbers invented — values read from cited pages or computed from cited play-by-play.
## Findings (numbers and facts, not vibes)
- NO sack rate: 8.40% (45/536), 5th of 32. Leaders: DEN 10.26% (68/663), MIN 9.86%, CLE 9.78%, ATL 9.64%. Saints were tied 10th–11th by raw sack total — the rate rank is higher because they faced the 4th-fewest pass attempts.
- WAS worst defense: 6,533 yards allowed — 32nd (last) by yards; 451 points allowed — 27th by points.
- WAS vs run: 2,411 rushing yards allowed on 504 attempts — 30th.
- WAS vs TEs (half-PPR): 219.0 fantasy pts allowed — 4th-most (CIN 298.4, ARI 236.1, PIT 231.1, WAS 219.0); 86 rec / 1,040 yds / 12 TDs; TDs allowed tied 2nd-most.
- WAS red-zone TD rate: 42 TD on 62 trips = 67.7%, ranked 31st.
- ARI EPA/dropback allowed: +0.149 — 27th (6th-worst), not 26th as claimed; worst five: NYJ +0.253, DAL +0.217, WAS +0.200, TEN +0.167, CIN +0.164; best: HOU −0.186.
- WAS passing TDs allowed: 33 — tied 3rd-most (with CIN; behind NYJ 36, DAL 35); PFR's team-page "Lg Rank 25th" for this column is inconsistent with the sorted league table.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sack-rate leaders table (DEN/MIN/CLE/ATL/NO) — TRUST-SIGNAL, SCHEME
- WAS 32nd total defense but only 27th by points (yards vs points discrepancy) — OTHER (data-quality/measurement caveat for matchup models)
- WAS red-zone TD rate 67.7% (31st) — OTHER (defensive scoring-leak metric)
- nflverse pbp + roster-position join as the free reference method for defense-vs-position scoring — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — 2025 defense-vs-position tables (sack rate, TE FPs allowed half-PPR, red-zone TD rate, EPA/dropback) are directly reusable as matchup adjustment features; the nflverse computation recipe (dropbacks including sacks, TE join from roster) is documented.

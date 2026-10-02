# docs/dfs/research/2026-09-25/full-tables/README.md
## What it is (1-2 sentences)
Index/documentation of transcribed tables from the 2026-09-25 X analytics sweep (Week 2 data): QB time-to-throw, deep-ball splits, drop %, red-zone efficiency, EPA splits, 3rd-&-long conversions, aDOT, EPA/dropback, PFF pressure rate, HB run-block/cover grades, Kyle Pitts TPRR splits, Brock Purdy percentiles, plus coverage-safety/corner grades and WR/TE receiving splits.
## Key metrics/methods (formulas where given, else "not specified")
- Drop %: Drops / Catchable Passes (chart "Data: FTN"; charted by @FTNFantasy).
- Red-zone efficiency ranked by offensive points per RZ trip; XP & 2pt conversions excluded; trips with kneel-downs in last 2 min excluded; ATL had no RZ trips Weeks 1-2 (31 teams).
- QB time to throw (GridironInfo_, nflverse): "how long each team's QB holds the ball before throwing, on average"; 31 of 32 rows visible (one cropped, not reconstructed).
- Worst aDOT: "QBs who throw the shortest passes on average (lowest average depth of target)"; source "Data: Next Gen Stats (aDOT)"; footer "Data: nflreadpy | 2026-09-22".
- Deep-ball splits (@FantasyPtsData, text-only): completions/attempts/TD/INT on throws 10+ air yards; four QBs; no source line.
- HB run-block grade: "Disruption rate grade" — opponent-adjusted, double-team-aware, Bayesian-shrunk, time-blended composite (Blended = 2026 through Week 3 with 2025 at 50% fading by Week 6; FLAG: post title says "Through Week 2" but chart says Week 3). Filters OT/G/C, 150+ reps, played 2026. Source: Sumer Sports play-by-play charting.
- HB cover grades (safeties, corners): "Yards per route grade" — same composite family; filters 150+ reps.
- PFF "Highest pressure rate allowed this season" — 5 teams, text-only, through Week 2 implied; no definition.
- 3rd-&-long conversion: yards to go 7+; values approximate from scatter; 49ers and Cowboys convert ~65-66%, Dallas defense allows ~56% (89.5K views on post).
## Data sources named
nflverse (nflreadpy); Next Gen Stats (aDOT); FTN Fantasy charting; PFF proprietary; Sumer Sports charting; FantasyPtsData proprietary; Pro Football Reference (@pfref) for defensive EPA scatter; @FantasyPtsData for Concepcion splits.
## Findings (numbers and facts, not vibes)
- Brock Purdy through two weeks (xEP_Network, text-only): 80.4% completion (99th percentile), +14.9 CPOE (99th), +0.63 EPA/dropback (96th), 0 sacks taken; Arizona allowing 7.5% TD rate per attempt (26th).
- Kyle Pitts TPRR/FPG splits with vs without Drake London (2024-2026 sample): FPG 8.0 [TE27] / 19.0 [TE1]; TPRR 0.18 [TE37] / 0.28 [TE1] — a concrete target-concentration/trust case study.
- KC Concepcion vs single-high: baseline 0.22 TPRR / 1.58 YPRR; vs single-high 0.33 TPRR (+50%) / 2.48 YPRR (+56.9%). FLAG: post is a betting recommendation ("The Play: Over 3.5 receptions..."), not pure research.
- "Generational" prospects cohort (77 players, 50+ routes): Marvin Harrison Jr 0.53 YPRR (71/77), 0.06 TPRR (77/77), 0.05 EPA/route (61/77); Kyle Pitts 0.35 YPRR (75/77), 0.11 TPRR (68/77), 0.18 EPA/RR (73/77).
- 3rd-&-long: 49ers and Cowboys ~65-66% conversion; Dallas defense allows ~56%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Purdy percentile row (80.4% comp / +14.9 CPOE / +0.63 EPA/DB / 0 sacks, both 99th pct) — QB-BEHAVIOR (elite early-season efficiency profile; zero sacks = quick-game/OL quality).
- Pitts TPRR-without-London split (0.18→0.28, FPG 8.0→19.0) — QB-BEHAVIOR (trust-target concentration when WR1 absent).
- PFF highest pressure rate allowed (5 teams) — OL.
- HB run-block "Disruption rate grade" top-20 OL — OL.
- Concepcion vs single-high TPRR/YPRR splits — SCHEME (coverage-shell response), QB-BEHAVIOR (target profile).
- QB time-to-throw by team; deep-ball splits 10+ air yards; worst-aDOT QBs; worst EPA/dropback QBs; 3rd-&-long conversions — QB-BEHAVIOR.
- Red-zone efficiency per trip — SCHEME.
- HB cover-safety/corner yards-per-route grades — OTHER (defense modeling).
## Engine-actionable? (yes/no + one-line what)
Yes — the Pitts-with/without-London TPRR split (0.18→0.28) is a direct template for QB trust-target profiles under WR absence; Purdy's 99th-percentile CPOE/EPA-DB row is a QB behavioral benchmark; the HB composite grade family remains the top OL methodology candidate.

# dfs/research/2026-09-13/verify/tier2-qbwr-salaries-2026-09-13.md
## What it is (1-2 sentences)
Verification of 13 submitted FanDuel Week 1 Sun–Mon Classic salaries (8 Tier 2 QBs + 5 WRs); verdict: all 13 UNVERIFIABLE for the target Sun–Mon slate because FanDuel's publicly mirrored salary export covers only the Sunday main slate (ID 133104), but the 12 Sunday players match that export exactly.
## Key metrics/methods (formulas where given, else "not specified")
Verdict standard: CONFIRMED = ≥2 independent non-banned sources agree on the same target-slate FD salary; CORRECTED = credible target-slate evidence establishes a different salary; UNVERIFIABLE = fewer than two qualifying sources. Banned-source list documented but excluded. Method: ~20 web searches, GitHub filename-pattern searches, slate-ID lookups, and an attempted direct fetch of api.fanduel.com/fixture-lists (blocked, not retried).
## Data sources named
Three independent GitHub mirrors of FanDuel's own salary export (sethpearson2010-droid/dfs, jvereen01/NFL_DFS_OPTIMZER, bel52/FanDuel_LeaguePicks — treated as one evidentiary source); Fantasy Leagues Info; Fantasy Life. Banned and documented: FanDuel Research, RotoWire, FantasyLabs, FOX Sports, thehuddle, Sporting News, RotoBaller, USA Today, SI, ESPN, CBS, NFL.com, PlayerProfiler, Reddit, numberFire, DK Network, FantasyPros, FantasyAlarm.
## Findings (numbers and facts, not vibes)
- FanDuel's salary export found covers ONLY the Sunday main slate: contest/slate ID 133104, 735 player rows, exactly 12 games (excludes DAL@NYG SNF and DEN@KC MNF — the two games distinguishing Sun–Mon).
- All 12 Sunday players' submitted salaries match the FD main-slate export exactly: Burrow $8,200, Hurts $8,300, Herbert $7,600, Lamar $8,400, Allen $8,900, Mayfield $7,500, Goff $7,800, Chase $8,900, St. Brown $8,600, McConkey $6,500, Flowers $7,300, Olave $7,400.
- Independent editorial corroboration (main slate): Burrow, Hurts, Herbert, Jackson, Allen (Fantasy Leagues Info QB page); Mayfield, Chase, Olave (Fantasy Life); St. Brown (FLI WR page — with a caveat that page also prints a conflicting Chase figure).
- Slate-confusion hazard: Fantasy Leagues Info WR page lists Chase at $9,200 (conflicts with FD export $8,900) because it mixes contests including Thursday-game players — FanDuel prices differently across overlapping slates.
- Dak Prescott $8,300 has NO qualifying evidence on any slate (only a banned thehuddle source on a different two-game primetime slate).
- Key standing fact: the submitted list was very likely sourced from the Sunday main slate — coincidence is not verification; do not infer Sun–Mon = main salaries.
- Recommended next step (stated in file): a live-browser FanDuel contest-lobby check of the actual Sun–Mon Classic player pool.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Salary-verification verdict standard (≥2 independent non-banned sources) — TRUST-SIGNAL
- Slate-identity discipline: DK ≠ FD, Sun–Mon ≠ Sunday main, never promote evidence across slates — TRUST-SIGNAL
- The three-repo GitHub-mirror pattern for FD salary exports — OTHER (salary data pipeline method)
## Engine-actionable? (yes/no + one-line what)
No — this is a verification dead end (no Sun–Mon salary data exists publicly); engine action is a process rule: add slate-identity validation and banned-source discipline to the DFS salary verification gate, and flag a live-lobby check as the required path.

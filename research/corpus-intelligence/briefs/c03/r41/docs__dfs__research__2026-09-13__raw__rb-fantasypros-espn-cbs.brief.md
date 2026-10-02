# docs/dfs/research/2026-09-13/raw/rb-fantasypros-espn-cbs.md
## What it is (1-2 sentences)
Raw DFS research note for NFL 2026 Week 1 FanDuel Classic RBs (research date Sun 2026-09-13) built from FantasyPros, ESPN, and CBS Sports — a slate-eligible RB table with half-PPR consensus projections, expert ranks, matchup/injury/committee flags, and honest source-yield notes.
## Key metrics/methods (formulas where given, else "not specified")
- FanDuel = 0.5 PPR scoring; primary number is FantasyPros half-PPR consensus projections (updated Sep 13, 2026)
- FD salaries: not shown on any free page from the three sources (marked N/A); projected ownership % not published free (marked N/A)
- ESPN Week 1 RB rankings page confirmed current (Sep 11, 2026, 8 rankers: Bowen/Clay/Cockcroft/Dopp/Karabell/Loza/Moody/Yates) but ranked list did not render in text fetch
## Data sources named
FantasyPros (half-PPR consensus projections + 3-expert weekly rankings), ESPN (Week 1 RB rankings page, "Dowdle vs Warren" segment), CBS Sports (Jamey Eisenberg Start 'Em/Sit 'Em column, 4for4 season-long rankings Sep 9, 2026); injury/committee detail supplemented from USA Today, SI, FantasyLabs, TheHuddle snippets (flagged for de-dupe)
## Findings (numbers and facts, not vibes)
- Consensus RB1: Jahmyr Gibbs 21.9 half-PPR (FP expert rank #1 unanimous); 161 vacated DET RB carries + 16 vacated inside-the-5 with Montgomery gone; 96th percentile target share
- Bijan Robinson 17.6 (rank #2): led all RBs in YPRR (99th pct) in 2025; Allgeier departed, Brian Robinson Jr. in as complement
- Jonathan Taylor 17.0 (rank #4): led NFL with 323 carries/18 rush TDs in 2025; Daniel Jones fully cleared (torn Achilles)
- De'Von Achane 16.1 (rank #5): 4.2 rec/g projected; faces Raiders D 26th vs run (132.4 YPG) in 2025
- Saquon Barkley 15.5 (rank #6): WAS run D 30th in 2025 (141.8 rush YPG)
- Omarion Hampton 16.7 PPR / 15.2 0.5-PPR (rank #7): LAC -9.5 favorites, top implied team total; new OC Mike McDaniel
- Derrick Henry 15.1 (rank #8): age 32, 1,595 yds/16 TDs at 5.2 YPC in 2025; pure early-down/goal-line role (1.1 rec/g proj)
- Chase Brown 15.0 (rank #11): highest game total of week (50.5), 4.0 rec/g projected
- Breece Hall 15.9 PPR consensus; James Cook 13.5 std consensus (17.4 att/g projected, 2.3 rec/g)
- Matchup extremes: Bucky Irving vs CIN (allowed MOST FPPG to RBs in 2025, but added Dexter Lawrence + Jonathan Allen); D'Andre Swift vs CAR (4.6 YPC + 9th-most FPPG to RBs); Cam Skattebo vs DAL (gave up 23.4 PPR FPPG to RBs in 2025); Quinshon Judkins @ JAX (allowed fewest rush yds in NFL 2025), CLE 7.5-pt dog
- Committee/injury flags (all Sept 2026): GB — Josh Jacobs on Commissioner's Exempt List (9/9), MarShawn Lloyd nominal lead with 6 career carries; PIT Dowdle vs Warren genuine committee; DEN 3-way mess (Dobbins re-signed + R.J. Harvey passing downs + rookie Jonah Coleman); Ashton Jeanty ankle (expected to play, role could be limited); Jeremiyah Love high ankle sprain, listed BEHIND Tyler Allgeier on ARI depth chart — fade; Jonathon Brooks groin; WAS Croskey-Merritt lead but Rachaad White steals passing downs; Judkins workload cap post-surgery; Keaton Mitchell hamstring
- 2026 team changes: K. Walker III SEA→KC; D. Montgomery DET→HOU; T. Etienne JAX→NO; R. White TB→WAS; T. Allgeier ATL→ARI; B. Robinson WAS→ATL
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Vacated-carries/share stats (Gibbs 161 vacated carries, 96th pct target share) are the share-input class for RB projection models [OTHER]
- New OC changes (Mike McDaniel→LAC, Declan Doyle→BAL) are scheme inputs for team-level run/play-call modeling [COACHING]
- Run-defense matchup extremes (CIN most FPPG allowed vs JAX fewest rush yds) feed opponent-adjusted rushing efficiency [SCHEME]
- Committee risk flags (GB exempt list, PIT split, DEN 3-way, WAS split) feed touch-share uncertainty in projections [SCHEME]
- No QB-BEHAVIOR/OL content in this file [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — ingest vacated-touch/target-share deltas plus confirmed backfield committee splits as touch-share prior inputs for the RB projection model.

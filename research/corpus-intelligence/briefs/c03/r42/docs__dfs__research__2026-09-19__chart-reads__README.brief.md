# docs/dfs/research/2026-09-19/chart-reads/README.md
## What it is (1-2 sentences)
Inventory of approximate browser-task transcriptions of chart images from a 2026-09-19 X analytics sweep (09:08–10:15 CDT), covering rushing EPA vs TDs (1999–2026), a SumerSports pass-rush-win-rate table, and Kevin Adams's composite "ARBY" RB matchup rating; one entry was reconstructed 2026-09-21 from AGENTS.md after working-tree entries were lost in a reset.
## Key metrics/methods (formulas where given, else "not specified")
- ARBY formula (Kevin Adams / StatRankings): 65% 2025 data / 35% 2026 (Week 1), 65% ARBY / 35% RB yards per carry, 50/50 offense-defense blend; ranks 1–16 / 17–32; ARBY itself aims to isolate OL-created yardage from RB-generated yardage; "diminishing returns built into" ARBY (exact functional form not specified).
- Pass-rush win rate leaders (SumerSports, min 25 snaps, updated 09-18-2026): Hunt 29.6%, Rousseau 28.6%, Muhammad 27.3%, Cox 27.3%, Crosby 26.7%, Anderson 24.1%, McDonald 22.2%, Young 22.2%. Note from @Shauncore: SumerSports added PRWR, so three public PRWR metrics exist (Sumer, PFF, ESPN).
- Rushing EPA/gm vs rushing TDs/gm scatter (1999–2026 regular season, gridironviz.co): vertical avg line ≈ −0.4 rushing EPA/gm; horizontal ≈ 0.60 rushing TDs/gm (chart reads, approximate).
- Sample ARBY Week 2 rows: #1 LAR OFF (25: 2, 26: 13) vs NYG DEF (27, 20) — score 79.1; #2 BUF OFF (3, 16) vs DET DEF (29, 13) — 72.3. 12 rows captured.
## Data sources named
X accounts: @MediJo20 (quote-tweet of @WillBrinson), @BucsJuice, @Shauncore, @MagicSportsGuy (Kevin Adams / StatRankings), @PattonAnalytics; SumerSports.com; gridironviz.co; statrankings.com; FTN Data charting (ARBY's underlying data).
## Findings (numbers and facts, not vibes)
- One entry (ARBY matchup rating) was rebuilt from AGENTS.md + CSV files after a working-tree reset destroyed the original transcriptions — provenance caveat (reconstructed, not original reads).
- League-average baselines: −0.4 rushing EPA per game, 0.60 rushing TDs per game (1999–2026 regular season).
- PRWR now has three public sources (SumerSports, PFF, ESPN) — an ingest redundancy note, not a new method.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ARBY isolating OL-created vs RB-generated rushing yardage (OL, SCHEME).
- PRWR triple-source redundancy (Sumer/PFF/ESPN) for edge-rush evaluation (OL, OTHER).
- Reconstructed-after-reset provenance flags which values are second-hand reads (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — log ARBY's 65/35 time-split, 65/35 ARBY/YPC, 50/50 offense-defense weighting as a candidate OL-vs-RB decomposition prior, and add SumerSports PRWR as a third ingest source alongside PFF and ESPN.

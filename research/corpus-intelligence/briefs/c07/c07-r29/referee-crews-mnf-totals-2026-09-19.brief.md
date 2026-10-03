# research/2026-09-19-dk-week2/deep/referee-crews-mnf-totals-2026-09-19.md
## What it is (1-2 sentences)
A DFS game-environment dossier for Week 2 (2026-09-19) covering all 16 referee crew assignments with penalty/total tendencies, plus historic Monday Night Football totals patterns.

## Key metrics/methods (formulas where given, else "not specified")
- Penalties/game = combined accepted+offsetting flags per game, 2019–2025, min 40 games per official (RotoWire Referee Impact Calculator, 1,886 games, updated Sep 2026); league average ≈ 12.3. Only Alan Eck's low penalty rate survives simultaneous significance testing ("strong signal"); all other crew splits are "suggestive"/"not significant."
- Career O/U and home ATS from Sharp Football referee pages (windows mostly since 2016/2018). Points-vs-total lean from RotoWire (+1.7 pts Shawn Smith = largest over-lean; -1.0 pt Adrian Hill = strongest under-lean).
- MNF totals history: FanDuel Research (2019–2024), BetKentucky (2020–2024), Action Network (Nov 2023), SportsBookReview (2025), VSIN (Sep 2026).

## Data sources named
Football Zebras (assignments), RotoWire (Referee Impact Calculator + article 133202), Sharp Football Analysis (referee assignments + Week 2 impact writeups), Saints Wire, FanDuel Research, BetKentucky, Action Network, SportsBookReview, VSIN.

## Findings (numbers and facts, not vibes)
- Crew extremes: Alan Eck 10.9 pen/gm (fewest in NFL, "strong signal"); Brad Allen 11.1 (2nd-fewest); Scott Novak 11.1; Clete Blakeman 13.2, Brad Rogers 13.1, Shawn Hochuli 13.0, Adrian Hill 13.0.
- Biggest totals boost: MIA@SF (Shawn Smith) — RotoWire +1.7 pts vs closing total, largest over-lean in dataset (not significant); game already has slate's highest total (SF -13.5, 16.0 implied).
- Second boost: CLE@TB (Brad Rogers) — 58-50 over career, +1.3 pts lean, 13.1 flags/gm drive extension.
- Biggest drag: CIN@HOU (Adrian Hill) — 62-50-1 career under, -1.0 pt vs total (strongest under lean of any Week 2 crew); No. 1 in offensive holding/gm (2025), No. 1 false starts/gm (Wk1 2026), but also No. 1 in DPI/roughing auto-first-downs since 2021.
- MNF drag: NYG@LAR (Brad Allen) — 83-60-1 under since 2016; MNF over rate only ~42.6% (2019–2024, 44.30 avg combined); big MNF favorites (7+) are 26-39-2 ATS (40%) since 2012; under ≈ 71% (25 O, 56 U, 1 push) 2020–2024.
- Notable ATS: John Hussey 98-61-5 home ATS since 2016 (62%, strongest home pull); Scott Novak 44-64-3 home ATS (lowest of any ref, 61% away covers); Eck favorites cover 66% (strongest, suggestive); Clay Martin favorites cover just 41%.
- MNF combined averages by year: 2019: 43.06, 2020: 48.39, 2021: 43.06, 2022: 40.24, 2023: 40.05, 2024: 49.95. MNF totals set ~1 pt higher than Sunday early slate (45.6 vs 44.6) — under bias partly inflated expectations.
- 30.3% of MNF games top 50 points; 36.7% stay under 40 (2019–2024). Extended-rest under 102-47-1 (67.8%) since 2018.
- Counter-tension: NYG No. 1 in DPI drawn/allowed after W1 2026; LAR among most efficient at drawing DPI (Sharp) — penalty yardage could pad receiver production even in a lower-scoring game.
- Caveats: Alex Moore (CAR@ATL) has no usable history (first full season); Brad Allen threw 22 flags in W1 (most of any crew; Sharp expects regression); JAX@DEN Hussey had 74% of flags pre-snap (league-high W1); DEN generates above-average pre-snap flags at home.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] RotoWire significance-tested all 17 officials simultaneously; only Eck's penalty rate survives correction — the rest are suggestive priors, explicitly labeled as such.
- [OTHER] Crew total-leans (Smith +1.7 over, Hill -1.0 under, Rogers +1.3 over) as game-total/pace inputs for slate totals and DST stacking.
- [OTHER] Penalty-profile-driven drive extension (Hill DPI/roughing auto-first-downs; Blakeman 218 fouls/17 games in 2025, 1,720 yds) vs drive-killers (pre-snap heavy Hussey/Hill false starts).
- [OTHER] MNF structural under-bias (line-setting effect, not just scoring) and big-favorite ATS fade (40% since 2012).

## Engine-actionable? (yes/no + one-line what)
Yes — wire Eck/Allen/Novak low-flag and Smith/Rogers/Hill total-lean priors into game-total/pace features as low-weight priors, flagged "suggestive except Eck," and record the significance-testing standard as the bar for referee inputs.

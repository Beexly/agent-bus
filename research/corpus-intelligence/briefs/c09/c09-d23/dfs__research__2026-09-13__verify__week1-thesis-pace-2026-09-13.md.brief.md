# dfs/research/2026-09-13/verify/week1-thesis-pace-2026-09-13.md
## What it is (1-2 sentences)
A pace-focused verification run on 2026-09-13 that audits five Week 1 thesis claims (unders, 300-yard QBs, opening-play run rate, fastest and slowest game environments) using 2025 total offensive plays per game as the pace proxy — explicitly labeled as play volume, NOT situation-neutral pace. It produces a full 32-team 2025 plays/game league table and corrected fastest/slowest game lists for the Week 1 slate.
## Key metrics/methods (formulas where given, else "not specified")
- Pace proxy: 2025 total offensive plays per game (plays / 17), StatMuse 2025 plays/game league table, cross-checked against official team pages (Dolphins 978, Raiders 975, Vikings 989); attempted TeamRankings fetch failed (terminal for that source).
- Game-environment score = two-team average of plays/game. Corrected fastest three: DAL@NYG 64.85 (ranks 1+8), BUF@HOU 63.83 (10+6), ARI@LAC 63.80 (12+3); SF@LAR 63.77 a hair behind third. Corrected slowest three: MIA@LV 57.44 (30+31), BAL@IND 58.59 (32+20), GB@MIN 58.80 (T-23+28); WAS@PHI 58.83 just behind.
- Full table values (plays/gm): DAL 65.88 (1,120), CHI 64.88, LAC 64.41, JAX 64.29, DEN 64.24, HOU 64.00, LAR 63.88, NYG 63.82, SF 63.65, BUF 63.65, NO 63.24, ARI 63.18, TB 62.82, DET 62.53, KC 62.41, CIN 62.18, ATL 61.65, NE 61.41, CLE 60.59, IND 59.88, SEA 59.71, CAR 59.47, GB/NYJ/PHI 59.41 (T-23), TEN 59.06, WAS 58.24, MIN 58.18, PIT 58.12, MIA 57.53, LV 57.35, BAL 57.29 (974).
## Data sources named
- StatMuse (2025 plays/game league table, 2024 Week 1 passing leaders, team pages for Titans, Ravens, Dolphins, Raiders, Vikings), Covers NFL Week 1 odds, SportsbookReview forum thread (unders arithmetic), Medium nflfastR opening-drive analysis (did not contain the claimed figures). TeamRankings fetch failed — not used.
## Findings (numbers and facts, not vibes)
- Claim 1 ("12 of 16 Week 1 games went under, 2025"): UNVERIFIABLE — no allowed source states the exact figure; only verbatim match is on a forbidden source; a SportsbookReview forum poster's 13-4 arithmetic (Week 1 + Week 2 Thursday) implies 12-4 if the Thursday game went under, but that is not an audited ledger. Do not publish.
- Claim 2 (only 2 QBs over 300 yards, 2024 W1): CONFIRMED exactly — Tua 338, Stafford 317, next-highest 291.
- Claim 3 (run-heavy teams ran 60–73% of opening plays, 2021–25 W1): UNVERIFIABLE — no allowed source defines "run-heavy teams," "opening offensive plays" (first snap? first 15? first drive?), or confirms the range specifically for Week 1. Treat as anecdote-level framing.
- Claim 4 (fastest: DAL@NYG, NO@DET, WAS@PHI): CORRECTED — DAL@NYG confirmed #1 (64.85); NO@DET is only 6th (62.89); WAS@PHI is 3rd-SLOWEST (58.83).
- Claim 5 (slowest: TB@CIN, MIA@LV, ATL@PIT): CORRECTED — MIA@LV confirmed slowest (57.44); TB@CIN is 7th-FASTEST (62.50); ATL@PIT is 11th (59.89).
- Regime flags: LAC's 2025 figure (#3, 64.41) predates Mike McDaniel's 2026 OC scheme (relevant — LAC is in the corrected fastest group); BAL's figure (#32, 57.29) predates the Jesse Minter 2026 era (relevant — BAL is in the corrected slowest group); ATL's 2025 figure predates Kevin Stefanski's 2026 regime.
- Caveat on BAL: 974 plays confirmed by two sources, but StatMuse's Ravens team page also displays a conflicting "29th" rank value — the 32nd placement follows arithmetically from 974 < 975 (LV); verdicts unchanged under any reading.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (regime flags: McDaniel LAC, Minter BAL, Stefanski ATL — old numbers describe old schemes), SCHEME (game-environment pace stack logic — the corrected fastest/slowest groupings reshape stack decisions), OTHER (play-volume-vs-situation-neutral-pace methodology caveat).
## Engine-actionable? (yes/no + one-line what)
Yes — the corrected 16-game environment ranking plus regime flags is a directly usable slate-environment signal with an honest play-volume (not neutral-pace) caveat.

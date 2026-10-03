# docs/research/2026-09-26/full-tables/README.md

## What it is (1-2 sentences)
A catalog of full-table transcriptions of X sports-analytics charts, read-only in X as @GalaxySportsHQ across two sweeps (AM: posts after ~9:10 PM CDT Fri 2026-09-25 through ~9:10 AM CDT Sat 2026-09-26; PM: ~9:10 AM through ~9:10 PM CDT Sat 2026-09-26). 18 charts transcribed in full plus a list of items deliberately not transcribed.

## Key metrics/methods (formulas where given, else "not specified")
- **Adjusted Run Blocking Yards (ARBY) score** (@MagicSportsGuy, StatRankings): chart footer verbatim — "O / D = Offensive / Defensive ARBY rank, 2025 season and 2026 to date · Score: 65% 2025 / 35% 2026 · 65% ARBY / 35% RB yards per carry · 50/50 offense-defense". 30 rows; slate average 52.4 (displayed between ranks 14 and 15, not a row).
- **DAKOTA** (@DynatyzeFF): author definition — "an all-in-one quarterback efficiency score that measures how well a passer runs their offense compared to expectations." Columns: DAKOTA, EPA/PLAY, STUPID THROW%, FANTASY WAR, TOP-12 WK%, TD, YDS, PLAYS. 10 rows + league-average row (mean of 35 qualified; every row clears 17+ dropbacks).
- **YBC (Yards Before Contact)** (@DynatyzeFF): author definition — "the total yards before a player is first touched." 10 rows + league average (mean of 64 qualified; 9+ opp minimum).
- **Alpha Role** (@DynatyzeFF): author definition — "a single number measuring how completely a wide receiver dominates their offense's targets, deep routes, and red-zone chances." WR cut: 10 rows + avg of 96 qualified (5+ targets); TE cut: 10 rows + avg of 42 qualified (4+ targets).
- **NGS Aggressiveness** (@GridironInfo_): author definition — "how often each team's QB throws into tight coverage (Next Gen Stats' Aggressiveness metric)." 31 rows legible of 32 labeled; x-axis 0%–50%.
- **WR Avg Separation** (@GridironInfo_): "the WRs who create the most separation from the nearest defender" (NGS Avg. Separation). FLAG noted in file: header attributes Next Gen Stats while footer attributes nflreadpy — both recorded as shown.
- **TPRR / YPRR** (@DBro_FFB, per @FantasyPtsData): targets per route run / yards per route run vs coverage shells; no author definition of TPRR in posts.
- **Personnel EPA/Play** (@FantasyPtsData): 12-personnel vs "19 PERSONNEL" (post text: "all other personnel groupings"). FLAG: header/post-text column-name discrepancy recorded; only 12 of 32 rows visible; "5th-worst" claim unverifiable from visible rows.
- **RB Route Participation + TPRR trends** (@MagicSportsGuy): Week-1→Week-2 deltas, 27 rows, min 6 routes in each week, sorted by preseason ADP. FLAG: Rico Dowdle's team logo not legible — team left BLANK, not guessed.

## Data sources named
Next Gen Stats (via nflreadpy), nflverse (footer on GridironInfo charts), Dynatyze (own product, raw behind free-trial signup at dynatyze.com), Fantasy Points Data (Data Suite 2.0), PFF (own data implied), StatRankings (statrankings.com).

## Findings (numbers and facts, not vibes)
- Kenneth Walker: 71 rush yards vs 11 box defenders; everyone else combined: −5 (@PFF, 21K views; no minimum qualifier stated). [tags: OL, SCHEME]
- CeeDee Lamb vs 2-high: 2026 — 36% TPRR / 4.24 YPRR; 2025 — 24% TPRR (15th) / 2.15 YPRR (11th) among 69 WRs. Context: BAL 8th-highest 2-high rate (63%). [tags: SCHEME]
- JSN vs 2-high since 2025: 35% TPRR & 4.07 YPRR, 1st in both among 115 qual WRs. Context: WAS highest 2-high rate (78.3%). [tags: SCHEME]
- Parker Washington vs man: 2026 — 7th in TPRR & YPRR among 78 qual WRs (values not in post); 2025 — 25% TPRR / 2.70 YPRR (12th). Context: NE 2nd-highest man-coverage rate (45.2%). [tags: SCHEME]
- Terrance Ferguson usage splits (first 3 quarters of last game): 66.7% snap rate, 71.4% route share, 26.9% target share, 23.8% first-read share. [tags: COACHING; partial-game sample caveat noted in file]
- Raiders EPA/Play: 12 personnel +0.412 (2nd-best) vs all other personnel −0.202 (5th-worst per post text). FLAG: "5th-worst" unverifiable from the 12 visible rows. [tags: COACHING, SCHEME]
- @PFF "Highest Pass Rush Win Rate this season": 5 rows, 220,776 views. [tags: OL]
- QB Aggressiveness chart: 31 of 32 team values legible; no minimum-attempts qualifier stated; data dated 2026-09-22; through Week 2. [tags: QB-BEHAVIOR]
- Michael Penix Jr. DAKOTA row: 1 game (26 plays); STUPID THROW% and FANTASY WAR blank — sample-size skew flagged in file. [tags: TRUST-SIGNAL]
- Manufactured targets: targets/game on balls thrown behind the LOS, 7 rows; 2026 Travis Kelce value reads "1.5" in page title but partially truncated in accessible text — recorded as shown. [tags: TRUST-SIGNAL]
- Deliberately not transcribed (noted in AGENTS.md only): @GridironInfo_ passer-rating chart (conventional stat); @AsaArnold4 QB pressure-dropoff ranking (out of window — watch item); @PFN365 Jordan Love TruMedia ranks incl. −9.0% CPOE (out of window — watch item); @ngreenberg fourth-down aggressiveness chart (out of window — watch item).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NGS QB Aggressiveness (tight-coverage throw rate) = QB risk-taking signal with Week-2 values (QB-BEHAVIOR).
- Personnel-grouping EPA/Play splits (12-personnel vs all-other) and Ferguson first-read/target-share splits = scheme-usage signals (COACHING, SCHEME).
- ARBY + PFF pass-rush win rate + 11-box-defender rushing splits = trench signals with explicit formulas (OL).
- TPRR/YPRR vs 2-high and man coverage with team coverage-rate context = WR matchup signal directly usable in game-model adjustments (SCHEME).
- The file's FLAGS (attribution mismatches, unverifiable claims, blanked illegible fields, sample-size skew notes) are the honesty template for re-sighting this data (TRUST-SIGNAL).
- @DBro_FFB posts are off-list finds via TPRR search — the search-discovered coverage-split pattern is a repeatable intake method (OTHER).

## Engine-actionable? (yes/no + one-line what)
Yes — the ARBY 65/35/50-50 weighting recipe, the TPRR/YPRR-vs-coverage-shell matchup data model, and the per-chart data-source/license catalog are directly reusable for the engine's data-source registry and game-model adjustment features.

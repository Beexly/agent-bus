# docs/dfs/research/2026-09-26/full-tables/README.md
## What it is (1-2 sentences)
Index of 18 transcriptions from the 9/26 AM + PM X analytics sweeps (Week 2-through data, GPP/CPOE/aggressiveness/pass-rush-win-rate keyword searches) with per-table provenance, author definitions, flags, and caveats.
## Key metrics/methods (formulas where given, else "not specified")
- ARBY (Adjusted Run Blocking Yards) RB matchup score — footer formula verbatim: "Score: 65% 2025 / 35% 2026 · 65% ARBY / 35% RB yards per carry · 50/50 offense-defense".
- Aggressiveness = how often QB throws into tight coverage (NGS metric); charts 0%–50%.
- DAKOTA = all-in-one QB efficiency score vs expectations (cols: DAKOTA, EPA/PLAY, STUPID THROW%, FANTASY WAR, TOP-12 WK%, TD, YDS, PLAYS).
- YBC = yards before first touch; Alpha Role = single number for WR/TE target/deep/red-zone dominance.
- Avg separation = nearest-defender yards (NGS). CPOE, EPA/P by personnel, TPRR/YPRR splits vs coverage named; formulas mostly not specified.
## Data sources named
@GridironInfo_ (NGS via nflreadpy, data dated 2026-09-22); @DynatyzeFF (own product, paywalled behind trial); @PFF (own); @FantasyPtsData (own app/data); @DBro_FFB/Derek Brown (Fantasy Points Data "Data Suite 2.0"); @MagicSportsGuy (StatRankings/statrankings.com); @sfdata9ers (FTN, PFR).
## Findings (numbers and facts, not vibes)
- ARBY Week 3 matchup board (30 rows, slate average 52.4 shown between ranks 14–15); SCORE weights 65% 2025 / 35% 2026, 65% ARBY / 35% RB YPC, 50/50 offense-defense.
- Dynatyze DAKOTA (35 qualified, min 17 dropbacks): Michael Penix Jr. row = 1 game / 26 plays, STUPID THROW% and FANTASY WAR blank on chart. YBC (64 qualified, min 9 opp). Alpha Role WR (96 qualified, min 5 tgts), TE (42 qualified, min 4 tgts).
- @PFF: Kenneth Walker 71 rush yards vs 11 box defenders vs −5 for everyone else combined; top-5 pass-rush win rates (220,776 views); lowest % drives ending in TD (76,629 views).
- @DBro_FFB: CeeDee Lamb vs 2-high — 2026 36% TPRR / 4.24 YPRR (vs 2025 24% / 2.15, ranks 15th/11th of 69); context BAL 8th-highest 2-high rate (63%). JSN vs 2-high since 2025: 35% TPRR / 4.07 YPRR, 1st of 115 in both. Parker Washington vs man: 2026 top-7 TPRR & YPRR of 78 qual (values not in post); 2025 25% / 2.70 (12th). Context NE 2nd-highest man rate (45.2%). Terrance Ferguson: first 3 quarters of one game — 66.7% snaps, 71.4% routes, 26.9% targets, 23.8% first-read.
- @FantasyPtsData: Raiders 2nd-best EPA/P from 12 personnel (+0.412), 5th-worst from other groupings (−0.202) — post ties to Brock Bowers' return; 2026 behind-LOS targets/game (7 rows, Kelce 2026 value reads 1.5, partially truncated).
- @GridironInfo_ WR separation: top-10 and per-team leader boards (32 teams); FLAG: header says NGS, footer says nflreadpy — both recorded as shown.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL: ARBY matchup board is a full O-line/D-line composite (65/35 season weights, 50/50 offense-defense) — prime candidate OL signal with an explicit, replicable formula.
- QB-BEHAVIOR: NGS aggressiveness chart; DAKOTA all-in-one QB score with STUPID THROW%; QB pressure-vulnerability/epa-dropback items flagged as out-of-window watch items.
- SCHEME: EPA/P by personnel grouping (12-personnel +0.412 vs others −0.202 for LV — scheme/personnel signal tied to Bowers' return); WR coverage-splits (Lamb/JSN vs 2-high, Washington vs man) with opponent coverage-rate context (BAL 63% 2-high, NE 45.2% man, WAS 78.3% 2-high).
- TRUST-SIGNAL: explicit flags — separation source conflict (NGS vs nflreadpy), Dowdle team logo illegible (left blank, not guessed), "5th-worst" claim unverifiable from visible rows, Kelce value truncation, 1-game sample rows (Penix) left in leaderboards.
- OTHER: behind-LOS "manufactured targets" (Rashee Rice angle) as a receiver-usage signal.
## Engine-actionable? (yes/no + one-line what)
yes — ARBY's exact 65/35×65/35/50-50 weighting is a ready-to-implement OL matchup feature; coverage-split TPRR/YPRR (vs 2-high/man) plus opponent coverage rates give matchup-adjusted WR efficiency inputs; personnel-group EPA/P deltas feed scheme/personnel signals — all with named sources and qualifier thresholds (min dropbacks/targets/opp) reusable as qualification gates.

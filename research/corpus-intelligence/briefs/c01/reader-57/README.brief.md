# research/2026-09-24/full-tables/README.md
## What it is (1-2 sentences)
A catalog/index (not the CSVs themselves) of verbatim metric tables transcribed from X-post chart images during two 2026-09-24 sweeps (AM: posts ~9:00 PM CDT Wed 9/23 → ~9:10 AM Thu 9/24; PM: ~9:10 AM → ~9:10 PM Thu 9/24), covering 21 primary + 6 secondary X accounts with keyword searches on EPA/TPRR/aggressiveness/pass rush win rate/CPOE; several values are visual approximations off scatter-plot axes and are flagged as such.
## Key metrics/methods (formulas where given, else "not specified")
- PROE+ (Pass Rate Over Expectation + Neutral Pace): Panthers +0.69 top, Seahawks −0.59 bottom; league average −0.06 (@MagicSportsGuy).
- First & 10 gain-of-4+ %: 49ers 65.3% top, Dolphins 33.3% bottom (@RyanPaganetti, full 32-team list).
- Worst QBs EPA/attempt on 10+ air-yard throws (min 8): Jalen Hurts +1.50 EPA/play (20 att), Josh Allen and Brock Purdy just behind (@GridironInfo_).
- PFF lowest pressure-to-sack rate (min 10 pressures): Purdy 0.0% (0/15), Daniels 4.2% (1/24), Stafford 6.3% (1/16), Dart 7.7% (1/13), Prescott 9.1% (2/22), D. Jones 9.1% (2/22).
- First-read efficiency: league-average reference lines ~+0.25 EPA/attempt and 65% first-read rate; all QB values visual approximations (@PattonAnalytics).
- Uncatchable throw rate (min 30 att, data FTN): Purdy best 10.71%, Winston worst 22.0%; author reply: Wentz 16/39 uncatchable = 41.03% (@sfdata9ers).
- CPOE (data @StatRankings): Purdy +10.5 added in corrected version (@PattonAnalytics).
- Pressure survival: x = Pressure Over Expectation (no formal definition), y = pressure-to-sack ratio (inverted); all values approximate; "big three" = Josh Allen, Patrick Mahomes, Bryce Young clustered near mean.
- TPRR = Targets ÷ Routes Run; YPRR = Receiving Yards ÷ Routes Run (min 5 targets in each of W1 & W2); JSN leads 44% TPRR / 5.54 YPRR (@BeyondTheADP).
- Tyler Warren route profile Wk1–2: ADOT 1.42 flagged suspicious ("??") by author; reply attributes to "Dimes" (Daniel Jones) low-ADOT scheme (@jmthrivept, per @FantasyPtsData).
- George Kittle Wk1–2 (TEs >18 routes, per @FantasyPtsData): 0.32 TPRR (5th), 3.29 YPRR (2nd), 10.7% win rate (11th), 16.1% target share (14th), 24.3% air-yard share (4th), 9.67 YAC/R (4th).
- Mark Andrews 2025 vs 2026 metric comparison (target share, TPRR, routes/game, YPRR, win rate, air yards/target; per @FantasyPtsData).
- Rushing: 10+ yard rushes CHI/BUF tie 11, CLE last 1; before/after-contact scatter (33 players, all approximate, data PFR).
- Carry share leaders: Gibbs 84.9%, Taylor 82.7%, Brown 72% (@DynatyzeFF).
- Air yards lost to drops: Herbert 70, Mahomes 59, Mayfield 57, Goff 52, Prescott 48 (@FantasyPtsData).
## Data sources named
X posts (URLs per table), FantasyPtsData (@FantasyPtsData), StatRankings (statrankings.com), PFF, FTN (@FTNFantasy), Pro Football Reference (@pfref), dynatyze.com/football/usage-lab.
## Findings (numbers and facts, not vibes)
- This README is a table catalog; the numbers above are the headline values it records. Two items are explicitly visual approximations (first-read scatter, before/after-contact scatter, pressure-survival curve) and flagged in-file as such.
- Standing blockers noted: @NerdingonNFL/@NFLResearcher timelines never render; @FTNData protected; no rate-limiting or CAPTCHAs during the sweeps.
- Sweep methodology: one read-only browser task per sweep, 21 primary + 6 secondary accounts, home feed, keyword searches EPA/TPRR/aggressiveness/pass rush win rate/CPOE.
- Charts with no labeled values were excluded from CSVs (WR success-rate leaders: Mike Evans SF 90%, Keon Coleman BUF 75% per author's out-of-window post; PFF WR top 32: JSN, JJ, Puka, Chase top 4).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Purdy 0.0% pressure-to-sack (0/15) + lowest uncatchable rate (10.71%) + CPOE +10.5 → QB-BEHAVIOR (elite pressure handling and accuracy cluster for Purdy).
- Wentz 41.03% uncatchable (16/39) → QB-BEHAVIOR (accuracy collapse datapoint).
- Winston 22.0% worst uncatchable rate → QB-BEHAVIOR.
- Hurts +1.50 EPA/att on 10+ air-yard throws (best of charted QBs) → QB-BEHAVIOR (deep-ball efficiency, relevant to his trust-target evaluation).
- Daniels 4.2% pressure-to-sack (1/24) → QB-BEHAVIOR (sack avoidance).
- 49ers 65.3% first-down success vs Dolphins 33.3% → COACHING, SCHEME (offensive efficiency extremes, week-2 situational).
- Panthers PROE+ +0.69 vs Seahawks −0.59 → COACHING, SCHEME (pass-tendency tendency profile).
- Warren ADOT 1.42 ("Dimes problem — all low ADOT") → SCHEME, QB-BEHAVIOR (Jones's Cousins-like short passing caps Warren's aDOT).
- Kittle elite per-touch metrics (3.29 YPRR 2nd, 24.3% air-yard share 4th) → OTHER (TE efficiency benchmarks).
- Air yards lost to drops (Herbert 70) → QB-BEHAVIOR (receiver-driven EPA drag, not QB fault).
- @DBro_FFB reply quote calling Jones "2025 Kirk Cousins" → TRUST-SIGNAL (analyst sentiment on the QB).
## Engine-actionable? (yes/no + one-line what)
Yes — feeds QB behavioral profiles (Purdy pressure/accuracy cluster, Wentz collapse, Hurts deep-ball EPA) and team pass-tendency profiles (PROE+, 1st-down efficiency) for situational matchup adjustments, with approximation-flagged charts marked as lower-precision inputs.

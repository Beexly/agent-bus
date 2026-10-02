# docs/research/2026-09-19-dk-week2/deep/games-phase1.md
## What it is (1-2 sentences)
Phase-1 breadth pass on all 14 DraftKings Week 2 main-slate game environments (2026-09-19): lines, totals, movement, weather, verified injuries, pace metrics, QB aggressiveness, and stack rankings, with every claim carrying source+date and UNVERIFIED items labeled.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas) — observed metrics compiled: lines/totals with book ranges and movement deltas; implied team totals; weather (SBR/RotoWire); pace metrics (% no-huddle, % motion, % play-action, % RPO, % screens); QB aggressiveness % (WK1, @GridironInfo); QB EPA/play; pressure rate generated vs allowed.
- Biggest moves: MIN@CHI total +4.0 (45.5→49.5, biggest total move); SEA@ARI spread +5.5 toward ARI (opened −10.0→−4.5, biggest spread move) and total −3.5 (biggest drop); CLE@TB spread +2.0, TB−8.5→; MIA@SF SF −13.5 biggest spread.
- Totals: highest WAS@DAL 50.75; lowest PHI@TEN 39.5. Implied highs: SF 29.75 (slate-high), BAL 27.9, KC 27.1.
- Weather game-changers: MIN@CHI 12 mph NE with gusts 20+ end-zone-to-end-zone (slate's top wind game); CLE@TB rain LIKELY + thunderstorms, delay risk (sloppiest); PHI@TEN 94°F feels ~100°F Q4 (extreme heat); PIT@NE rain increasing 2nd half.

## Data sources named
raw/slate-lines-current.csv, raw/weather.csv (lane-local); bet365, BetMGM (line histories); rotowire (9/15), defirate/Kalshi (9/18), SBR weather (9/18), RotoWire weather (9/19), vegasinsider (9/17), The Athletic via ravenswire (9/18), seahawks.com (9/16), cincinnati.com/RotoBaller (9/18), texans official, VSiN, Patriots Wire/StormTeam5, @GridironInfo, @DonAtkinsonNFL, @hawkblogger, @statyxio, @jmthrivept, @ScottBarrettDFB, @DevyEusuf, RotoWire/BettorGreen/RotoGrinders ownership (mostly UNVERIFIED for this slate).

## Findings (numbers and facts, not vibes)
- Stack rankings: PRIMARY = 1) WAS@DAL (50.75, dome, RPO-heavy, dual 15%-aggressive QBs), 2) CIN@HOU (46.75, dome, Collins OUT → vacated targets to Schultz 8 targets Wk1 + Higgins bounce-back), 3) MIN@CHI (49.0, wind-gust filter, CHI side preferred). AVOID = PHI@TEN (39.5 rock fight), SEA@ARI (41.0, Drew Lock starting), PIT@NE (42.0, rain 2H), CLE@TB (41.25, storms + TB −8.5).
- Verified injuries: Nico Collins OUT (hamstring); Zay Flowers DOUBTFUL (hamstring, not expected to play); Darnold OUT (glute) → Drew Lock starts (16/22, 187 yds, 1 TD, 113.3 rating in Wk1 relief); Burrow full Friday, Zac Taylor confirmed plays; Josh Hines-Allen? not here. Nnamdi Madubuike/Teddye Buchanan/T.J. Tampa OUT (BAL); Ja'Kobi Lane IR (fractured wrist); Joey Porter Jr. OUT (UNVERIFIED); Warren Brinson OUT (calf), Javon Hargrave doubtful (UNVERIFIED); A.J. Brown IR (NE); Coker (CAR) 8/138/2 Wk1, ankle limited; McConkey 73% Wk2 recovery (rib); Bowers 68% post-meniscus-trim, PPG 14.3→10.4.
- Pace extremes: MIN 69.5% motion, LAC 84.3% motion (highest), TB 70.6% motion; NO 22.1% no-huddle (2nd-highest, garbage-time pace-up team), TEN 22.4% NH (highest); SF 0.0% NH, KC 0.0% NH (slowest); WAS 14.7% RPO (highest), PHI 13.7% RPO (2nd).
- QB aggressiveness (Wk1): Mahomes 4% (lowest), Stroud 21% (3rd-highest), Mayfield 11%, Rodgers 15%, Maye 6% (conservative), Brissett 22% (verify vs Murray), Willis (MIA) 22% (2nd-highest), Lock 14%, Purdy 18% with lowest first-read rate 27.0% (full-field reader), Love 78.6% first-read rate (highest, condensed reads).
- Pressure mismatches: KC generated 56.3% (highest) vs IND allowed 32.4%; DEN 39.4% vs JAX 25.0%; MIA allowed 40.5% (2nd-worst) vs SF generated 31.0%; CLE allowed 50.0% (worst) vs TB generated 32.4%; LV 40.5% vs LAC allowed 28.6%; CIN D allowed −1.49 EPA/play when blitzing (best Wk1).
- EPA notes: Lawrence led Wk1 EPA/play (+0.79); JSN 45.8% target share (led NFL), 0.42 TPRR, 10.72 EPA, 3.79 YPRR; Achane 95% backfield XFP share; Irving 0.63 evaded tackles/att (99th), 62.5% success (99th), >80% backfield XFP; Juwan Johnson 72% routes with Shough; Schultz $3,200 at 5.5% pOWN.
- SEA@ARI tiers: SEA 65.6 (3rd) vs ARI 32.6 — tiers built on Darnold; Lock discount explains −4.5.
- UNVERIFIED items: MIN QB (Wentz?), ARI QB (Brissett vs Murray), Pittman foot, Joey Porter Jr. OUT, Brinson/Hargrave, Jayden Higgins torn ACL (single source, BettorGreen 9/19), defirate claim NYG beat DAL 28-20 Wk1 ("John Harbaugh era", single source), RotoWire 13 vs 14 games, IND@KC total book disagreement 46.5 vs 48.5, RotoGrinders pOWN (12-game slate mismatch, do not use).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB aggressiveness % table (Wk1, @GridironInfo) is the reusable QB-behavior signal across all 14 games — Mahomes 4% (lowest) vs Stroud 21% and Brissett/Willis 22%. (QB-BEHAVIOR)
- Pressure generated vs allowed per game is the trench matchup matrix — KC 56.3% vs IND 32.4% is the biggest mismatch on the slate. (OL)
- Wind-gust filter on MIN@CHI (20+ mph gusts in a 49-total game): contrarian haircut on deep passing even at the highest total. (SCHEME)
- First-read rates: Purdy 27.0% (full-field reader) vs Love 78.6% (condensed reads) — QB processing-style signal. (QB-BEHAVIOR)
- Single-source claims (defirate NYG beat DAL, BettorGreen Higgins ACL, RotoGrinders pOWN) explicitly rejected or flagged — ownership/claims hygiene. (TRUST-SIGNAL)
- vegasinsider: PHI@TEN 89% bets/95% dollars on PHI spread but 87% of cash on UNDER — public/sharp split datapoint. (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — the per-game pressure-mismatch matrix, QB aggressiveness table, and weather filters (wind gusts, storms, extreme heat) are reusable weekly inputs; 8 open UNVERIFIED items are the P2/P3 verification checklist.

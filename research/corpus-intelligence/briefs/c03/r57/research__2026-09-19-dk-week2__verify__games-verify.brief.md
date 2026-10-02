# research/2026-09-19-dk-week2/verify/games-verify.md
## What it is (1-2 sentences)
An adversarial verification pass (2026-09-19) over all load-bearing game-environment claims from DK Week 2 Phases 1-3: spreads/totals cross-checked across book boards, injuries audited per source/date, weather re-verified, and model-vs-market disconnects dispositioned — graded CONFIRMED / SINGLE-SOURCE / STALE / DISPUTED / UNVERIFIED with explicit registers of what not to use.

## Key metrics/methods (formulas where given, else "not specified")
- Adversarial grading: assume each claim wrong until sourced; CONFIRMED = 2+ independent sources or 1 authoritative current source; SINGLE-SOURCE = plausible, one source; STALE = predates material news; DISPUTED = sources disagree; UNVERIFIED = no usable source.
- No formulas; spreads/totals are cross-board ranges where books disagree (e.g., WAS@DAL -3.5/-4.5, MIA@SF total 44.5-46.5, IND@KC total 46.5-48.5).

## Data sources named
VegasInsider (board timestamped Sep 18 2026 11:22 AM), Covers (lines as of 9-18), bet365, SportsBettingReport (SBR), bettingsite BN, rg.org, Action Network (Kalshi), SI, Panthers Wire, Falcons Wire, Vikings Wire, Fox Sports, Reuters, Steelers Wire, Steel Curtain Network, Packers Wire, packers.com (official), Field Level Media, StormTeam5 via Patriots Wire, BleacherReport, RotoWire, USA Today QB rankings (9/19), USA Today (Murray piece, flagged stale), NWS-derived reporting (secondary, single-source), BettorGreen, RotoWire (ownership).

## Findings (numbers and facts, not vibes)
- **Pittman is on PIT (not IND)** — the largest factual repair of the phase: Steelers Wire/Steel Curtain Network (9/18-9/19) confirm Michael Pittman Jr. is a Steeler in 2026, questionable (foot, DNP Thu+Fri, "looking bleak"). Any IND receiving analysis assuming Pittman-on-IND must be corrected.
- **MIN@CHI weather upgraded to HIGH** on precautionary principle: gusts to 30 mph, ~0.5" rain possible (single-source NWS-derived reporting); flagged for Sunday-morning re-verify.
- Injuries confirmed: Cooper Rush starts for ATL; Tua doubtful (oblique); Penix OUT (ACL recovery); Murray OUT (concussion), Wentz starts (3 sources); Burrow full Friday, will play; Darnold OUT, Lock starts SEA; Brissett starts ARI; Porter Jr. OUT (back, 2nd straight week); A.J. Brown (NE) on IR (high ankle); Brinson OUT, Hargrave doubtful (concussion) for GB.
- Jayden Higgins season-ending ACL = UNVERIFIED (two fresh 9/19 searches found nothing) — struck from usable claims.
- PHI@TEN: 94°F, feels ~100°F (SBR impact 3/5); CLE@TB rain likely + t-storms (impact 3/5); PIT@NE rain increasing 2H (35-41%); GB@NYJ 10 mph/32% rain; MIA@SF ideal; domes expected closed (ATL, HOU, ARI, DAL) + SoFi canopy.
- Ownership: only projections, not DK-published — Bijan expected most-rostered (RotoWire); Dalton Schultz ~5.5% pOWN (BettorGreen); WAS@DAL the clear stack game (RotoWire); 87% of cash on PHI@TEN Under (VI 9/17); RotoGrinders slate projection REJECTED (mismatched content); ETR/Levitan et al. current-week X content NOT FOUND.
- Model-vs-market: PHI 62.2 vs TEN 26.0 but only -7/39.5 — genuine disconnect, direction unclear (heat + 87% of Under cash suggest market deliberately short); SEA@ARI gap fully explained by the Darnold→Lock ~5.5-6.5 pt adjustment; GB@NYJ edge explained by GB interior-DL injuries + NYJ Wk1 defensive showing.
- STALE register: SI 9/18 "NO +7.5"; Action Network Kalshi "SEA -5.5"; USA Today 9/19 listing Murray as MIN starter; AZCentral ~9/14 board as "current"; any 9/14-9/16 total presented without date.
- Line movement: MIN@CHI moved from -5.5 (rg.org 9/16) back to -4.5 (Wentz-respect narrative); CIN@HOU total moved -2.0.
- 2026 roster notes (SINGLE-SOURCE, from USA Today rankings bylines): Waddle→DEN, Montgomery→HOU, Kenneth Walker III→KC, Javonte Williams→DAL.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Explicit claim-grading taxonomy (CONFIRMED/SINGLE-SOURCE/STALE/DISPUTED/UNVERIFIED) with dated-source discipline: TRUST-SIGNAL — this is the template for the engine's input-hygiene layer: every game-environment input needs a freshness grade, and single numbers from disagreeing books must be ranges, not points.
- The Pittman correction: TRUST-SIGNAL — corpus research can silently carry a wrong team assumption for a full phase; team-identity verification belongs in the QC gate for any player-based analysis.
- RotoGrinders pOWN unreachable and ownership figures being projections, not DK-published: TRUST-SIGNAL — mark ownership data as inference-grade, never as fact, in contest optimization.
- Weather upgraded to HIGH on precautionary principle with a Sunday-morning re-verify flag: OTHER — asymmetric-risk inputs (weather, injury) deserve a different confidence handling than point estimates.
- Market-vs-model disconnect decomposition (injury discount, QB-swap ~5.5-6.5 pts, cash-splits explanation): OTHER — disconnects are first decomposed, not traded on.

## Engine-actionable? (yes/no + one-line what)
Yes — the CONFIRMED/SINGLE-SOURCE/STALE/DISPUTED/UNVERIFIED grading taxonomy and "ranges not points for disagreeing books" rule should be wired as the input-hygiene standard for game-environment feeds.

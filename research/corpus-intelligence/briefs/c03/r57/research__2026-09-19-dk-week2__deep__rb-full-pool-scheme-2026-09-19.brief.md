# research/2026-09-19-dk-week2/deep/rb-full-pool-scheme-2026-09-19.md
## What it is (1-2 sentences)
A Week 2 (Sept 20-21, 2026) DraftKings RB scheme-matchup matrix covering 46 RBs: each back's zone/gap rushing split from Razzball paired against the opponent's designed zone/gap yards allowed, with [ELITE]/[WEAK] scheme tags and ranked mismatches. Research-only prep for a 75-player single-entry winner-take-all slate; no salaries (DK salary API Akamai-blocked) and no lineups.

## Key metrics/methods (formulas where given, else "not specified")
- Inclusion rule: Week 1 backfield XFP share > 30% OR snap share > 40% across the 30 Sunday/Monday teams (XFP share from local FantasyPoints bellcow report CSV; snaps from RotoWire).
- Scheme splits: designed zone/gap attempt shares per RB (Razzball, updated 9/18/2026, Week 1 data only). Defensive: designed zone/gap yards allowed per game (Razzball defensive tool). Tags describe scheme fit vs NFL averages (48.3 zone / 33.7 gap yards allowed): [ELITE] = opponent well above average in the RB's preferred scheme; [WEAK] = well below.
- No formulas; all splits are one-game samples. Sub-10-attempt splits flagged directional only (e.g., RJ Harvey 3 att, Tyjae Spears 3 att, Justice Hill 6 att).

## Data sources named
Razzball zone-vs-gap RB tool + team-defense tool (updated 9/18/2026); FantasyPoints bellcow/XFP report (local CSV `docs/research/2026-09-18/full-tables/fantasypts-bellcow-report-week1.csv`); RotoWire "NFL Box Scores Week 1: Snaps, Routes & Usage Breakdown" (9/19/2026); StatRankings advanced team rushing pages; FantasyAlarm Week 1 RB takeaways; PFF Week 1 takeaways; NBC Sports fantasy takeaways; Touchdown Wire; Yardbarker/Heavy/SI/SaintsWire/RavensWire, ClutchPoints/Bolavip/Times Now World/Athlon, Brandon Lee Gowton (injury/QB notes).

## Findings (numbers and facts, not vibes)
- CMC (90% zone) vs MIA (65.2 zone yards allowed, 4th-worst on slate) = strongest preferred-scheme edge among true lead backs.
- Bhayshul Tuten (47/53 balanced) vs DEN (71.1 zone + 86.3 gap = worst combined scheme defense on slate, ~60 yards worse than next).
- Bijan Robinson (57% zone) vs CAR (124.9 zone yards allowed — most of any defense on slate, 2.6x league average) + 77% snaps + 52.6% target share (highest by an RB since 2011).
- De'Von Achane (55% gap lean) vs SF (77.9 gap yards allowed, worst gap D on slate, 2.3x average; SF elite vs zone at 23.4 allowed).
- Justice Hill (83% zone, 6 att) vs NO (79.0 zone yards allowed, league-worst) — single biggest preferred-scheme yardage number in the matrix, but only 45% snaps behind Henry.
- Downward flips: Omarion Hampton 75% zone into LV's 11.7 zone yards allowed (stingiest on slate); Chase Brown 69% gap into HOU's 24.8 gap D (top-5 stingiest); Tony Pollard 86% gap into PHI's 25.8 gap D while PHI bleeds 67.6 vs zone (unused by his profile); Jeremiyah Love 73% zone into SEA's 16.8 zone D (best zone D on slate); Jonathan Taylor 68% zone into KC's 23.2 zone D.
- NE (60.4 zone yards allowed, 73% of allowed rush yards to zone, but only 11.3 gap) favors Warren (60% zone) and Dowdle (75% zone) in a true 50/50 split.
- NE allowed the lowest gap yardage (11.3) on the slate; NYJ (13.4 zone / 20.1 gap) elite at both — no soft spot for Lloyd/Brooks.
- Rhamondre Stevenson: true bellcow (85% snaps, 100% of third downs, 24 of 32 opps) but gap-heavy (61%) vs PIT's 69.7 zone-bleed — a role-vs-scheme tension.
- Injury/role context: Josh Jacobs on Commissioner's Exempt List (no timetable); Alvin Kamara full practice all week, expected Week 2 debut behind Etienne; Drew Lock starts for SEA (Darnold out); RJ Harvey Q (hamstring); TreVeyon Henderson returned to practice Monday 9/14, threatening Stevenson's share.
- David Montgomery Week 1: 3.0 YPC, 0 broken tackles; zone YPC 1.64 vs gap YPC 4.67 (S7).
- Kenneth Walker III: 14 missed tackles forced, +101 rushing yards over expected (NGS); Saquon Barkley 78 of 83 rush yards after contact.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bijan vs CAR (124.9 zone allowed, 2.6x avg) and Achane gap-vs-SF inversion: SCHEME — scheme-vs-defense mismatch is the strongest quantitative edge in the matrix, larger than role edges.
- NYJ (13.4/20.1) and LV (11.7 zone), SEA (16.8 zone), HOU (24.8 gap), CIN (14.5 gap) stingy scheme defenses: SCHEME — opponent scheme-weakness mapping is a first-class DFS feature, not just volume projection.
- Zone-heavy league teams vs gap-heavy backs (Rhamondre 61% gap vs PIT zone-bleed): SCHEME — play-calling tendency can be misaligned with the available soft spot; coaching adjustment lag is an edge.
- Drew Lock starting compounds SEA backs' downgrade beyond scheme: QB-BEHAVIOR — game-script risk from QB downgrade interacts with scheme tags (Price/Holani downgraded on both axes).
- Josh Jacobs exempt-list, Kamara full-practice debut, Henderson return-to-practice, Harvey Q tag: OTHER (injury/role state changes dominate the one-game scheme sample).
- CMC's 44.4% TPRR on 55% snaps / Stevenson's 100% third-down share: OTHER (role stability vs fragile one-game scheme rates).

## Engine-actionable? (yes/no + one-line what)
Yes — ingest opponent zone/gap defensive yards-allowed + RB zone/gap attempt-share splits as a DFS matchup adjustment feature in the adjustment layer, computed from nflverse play data.

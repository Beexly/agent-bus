# research/2026-09-19-dk-week2/deep/wr-te-full-pool-2026-09-19.md
## What it is (1-2 sentences)
Complete 101-player WR/TE qualifying pool for the DraftKings Week 2 15-game slate: every player with Wk1 route participation >50% OR target share >15% (RotoWire Wk1 usage tables) gets route%/target share/TPRR/YPRR/aDOT/air-yard share with qualifying-pool percentiles ([ELITE] = 90th+, [WEAK] = 25th or below), salary value scoring, and top-5 values/traps lists.

## Key metrics/methods (formulas where given, else "not specified")
- Qualifier: Wk1 route participation >50% OR target share >15% (strict; exactly 50%/15% does not qualify).
- Percentiles via mean-rank scoring: (number below + 0.5 × number tied) ÷ valid observations × 100, computed against the 101-player qualifying pool only — not league-wide, not PFF.
- Value score = mean qualifying-pool percentile across available metrics − salary percentile within salaried pool.
- YPRR calculated as receiving yards ÷ routes run.

## Data sources named
RotoWire "NFL Box Score Breakdown Week 1" (updated 2026-09-15, observed 9-19; states tables use NFL Next Gen data); The Huddle "DFS Fantasy Domination: Week 2" (published 2026-09-19, salaries [2P]); DK Network (dated 2026-09-15, primetime salaries [2P]); deep/coverage-matchups-2026-09-19.md; deep/advanced-matchups-deep-dive-2026-09-19.md; deep/snf-mnf-addendum-2026-09-19.md; verify/injury-status-final-2026-09-19.md; deep/games-phase1/2/3.md; deep/consensus-map.md; plus dated outlets per player (Sharp Football, StatRankings, GamblingUSA, USA Today, 4for4/Next Gen Stats, CoverageIQ, Broncos Wire, ChiefsDigest, SI, Bears Wire, Lee Enterprises, magicsportsguy, Football Outsiders-adjacent outlets).

## Findings (numbers and facts, not vibes)
- Top 5 values (score = mean pool pct − salary pct): 1. Caleb Douglas (MIA) $3,700, score +63.1 (mean pool pct 79.7, salary pct 16.7); 2. Mike Gesicki (CIN) $3,600, +50.8; 3. Roman Wilson (PIT) $3,200, +50.3; 4. Malik Washington (MIA) $4,000, +49.5; 5. Kalif Raymond (CHI) $3,600, +49.3.
- Top 5 traps: 1. Rashee Rice $6,400, −63.1 (mean pool pct 23.8, salary pct 86.9); 2. Jaylen Waddle (DEN) $6,500, −60.7; 3. Ja'Marr Chase $7,600, −57.7 (Route [ELITE] 96, but TPRR [WEAK] 21, YPRR [WEAK] 14); 4. Chris Godwin $5,600, −40.5 (separation ranked 69th of 72 WRs, zero RZ/deep targets Wk1); 5. Terry McLaurin $5,200, −34.0.
- Injury beneficiary with stale salary: Mark Andrews $4,400 — Flowers doubtful condenses BAL targets (Andrews tied team lead 6 targets/25.0% share), but DK Network's TE22 ranking (7.8 proj PPR) predates the 9-18 doubtful designation.
- Standout usage: JSN 96% routes, 45.8% target share, 42.3% TPRR (all ELITE); Jefferson 97% routes, 39.1% target share, 52.9% first-read share, 88.11 Weighted Opportunity Rating (slate role-data top); Trey McBride 35.1% target share (96th); Malik Washington 97% routes/29.6% share; Zay Flowers (doubtful) 55% TPRR/13.64 YPRR [ELITE] — target tree condenses to Andrews.
- Matchup facts: PIT 96.2% zone / 10.5% blitz (league-low) — NE pass game faces disguise-zone; GB blitzed 48.4% Wk1 (2nd, vs 26.3% 2025); MIN blitzed 80.4% Wk1 but allowed 33.3% explosive rate; CHI 65.2% man (2nd-highest), outside CBs Johnson/Stevenson allowed 113.7/158.3 passer ratings; PHI +19.0 pressure-over-expected (2nd); DEN 58.6% man +20.4 pressure-over-expected; DAL allowed +0.397 EPA/play and 62.1% success Wk1 (without FS Hooker IR, LB Overshown hamstring); WAS plays 82.1% zone with 35.1% slot target rate allowed (Luvu groin OUT); CLE allowed 1.48 slot FP/route and 2.50 YPRR Wk1; KC pressures 54.3% (1st) with 2.2% opponent explosive rate; Jones pressured on 53% of Wk1 dropbacks (highest); Mayfield led NFL Wk1 completion 82.1% with +15.4 CPOE; Watson graded 40.1 PFF, CLE offense -0.493 EPA/play; Bo Nix graded QB31 across EPA/dropback, YPA, aDOT.
- OUT/doubtful with full sections retained for pool completeness: Nico Collins (OUT), Zay Flowers (doubtful), Jauan Jennings (OUT), Chig Okonkwo (OUT).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: percentile discipline — pool-only percentiles with explicit ELITE/WEAK thresholds, [2P] provenance tags on every salary, and OUT/doubtful players retained but not framed as playable; the method quarantines stale second-party salaries (Andrews TE22 ranking) the same way the phase-3 file quarantines stale lines.
- **SCHEME**: man/zone splits per game (PIT zone-heavy vs NE, GB 48.4% blitz, DEN man-heavy, WAS zone/slot-weak) mapped directly to individual player matchups — engine-relevant coverage-matchup joins.
- **QB-BEHAVIOR**: Mahomes had no Wk1 completion travel more than 6 air yards — directly contextualizes KC WR roles (Worthy Air sh 90th vs YPRR 22nd [WEAK]).
- **COACHING**: none explicitly; QB-start confirmations drive player matchup notes (Rush, Wentz, Brissett, Lock, Willis, M. Jones).

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the "mean pool percentile − salary percentile" value/trap score as the engine's weekly salary-inefficiency detector; the Wk2 run flagged five 50+ point values and five −34+ traps from public usage tables alone.

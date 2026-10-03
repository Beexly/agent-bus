# props/research/2026-09-17/props-consensus/game-projections.md
## What it is (1-2 sentences)
Game-internal (Garrett's eyes only) score/prop projections for Bills vs Lions on 2026-09-17 (BUF −5.5, total 54.5), computed from the lab's own 2025-full-season nflverse play-by-play + FTN charting stack — explicitly a scouting document, not actionable bets, pending out-of-sample backtesting vs 2025 prop lines.
## Key metrics/methods (formulas where given, else "not specified")
- Drive method: points = pts/drive × ~10.5 drives (BUF 2.63, DET 2.53); dropbacks script-adjusted (BUF ~55% as favorite, DET ~61% trailing).
- EPA method: net EPA/play edge × 63 + 2.0 home-field points.
- INT thrown rate/db (BUF 1.87%, DET 1.42%) × dropbacks; takeaway rate/drive (BUF forces 11.6%, DET forces 10.5%) × drives; opp sack-forced rate × dropbacks.
- Prop band approach: projection + [min, max] bands; two-method disagreement (drive −3 vs EPA −7) is presented AS the uncertainty, not an edge.
- Literature vetoes: fumble recovery and pressure-to-sack conversion treated as noise (individual sack props = NULL, R² < 0.005 for pressure→sack).
- Explicitly NOT opponent-adjusted (raw EPA); no weather/rest/officiating inputs.
## Data sources named
nflverse play-by-play (2025 full season base, 2026 Week 1 role-check only); FTN charting; market lines from DraftKings-family/BetMGM; metric inventory in `our-metric-stack.md`; computation details in `~/workspace/gse-research/nfl-2026/COMPUTATION_NOTES.md`.
## Findings (numbers and facts, not vibes)
- Score: BUF 28 [21,36] – DET 25 [17,33]; total ~53 (market 54.5); drive method margin BUF −3 vs EPA method BUF −7 (market −5.5 between them — inside uncertainty cone, no edge).
- Efficiency: BUF +0.132 EPA/play (dropback +0.174, rush +0.078); DET +0.078 (dropback +0.168, rush −0.055, 5th percentile).
- Structural mismatch: BUF rushes 4 on 70.4% of dropbacks (2025), 64.3% Wk1 — top-5 four-man rate; DET allowed pressure proxy 18.9% (2025), 19.5% Wk1, bottom-third, with 2 starting OL out (Mahogany, Miller).
- DET missing both starting safeties (Branch, Joseph — PUP); both BUF/DET KR units +0.38 EPA/return; BUF punt-return −0.32 vs DET +0.32.
- Prop leans (inside bands, "never a call"): Allen pass yds market 250.5 vs model 201 (UNDER lean); LaPorta rec yds 46.5 vs 79 (OVER lean, 17.2% when-active share, n=9); Gibbs rush yds 89.5 vs 95 (coin flip); Both-teams-2+ FGs ~11% fair vs +275 BetMGM (lean against, bimodal 4th-down tails).
- DET luck layer: forced fumbles 2.10%/play (+6.5 over expected) but recovered only 26.3% (−20 pts vs league) = positive takeaway regression candidate; BUF's 13 INTs vs 8.9 expected regresses down.
- Allen aDOT 7.12 (25th pct), +2.8 CPOE (82nd pct); Goff aDOT 6.43, +2.1 CPOE.
- Detroit's backup OL vs Buffalo's four-man rush named the single biggest game variable (kept qualitative, out of the numbers).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR (Allen/Goff aDOT+CPOE profiles, INT rates by dropback, sack-taken rates)
- COACHING (script adjustments: 55% dropback as favorite vs 61% trailing)
- OL (pressure-allowed rates, backup-OL bump, four-man rush rates)
- SCHEME (4-man rush rate as structural defensive scheme fingerprint; rush/pass script splits)
- OTHER (luck-layer regression accounting: fumble recovery, INT over-expected)
## Engine-actionable? (yes/no + one-line what)
yes — two-method margin disagreement-as-uncertainty (drive −3 vs EPA −7) is an actionable uncertainty-quantification template; literature vetoes (pressure→sack R²<0.005, fumble recovery noise) should be encoded as prop-null rules.

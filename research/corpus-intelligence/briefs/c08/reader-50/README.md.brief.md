# docs/dfs/research/2026-09-24/full-tables/README.md
## What it is (1-2 sentences)
Index of 17 CSV transcriptions from a read-only X analytics sweep (9/24 AM + PM windows) covering Week 2 NFL advanced metrics, with per-table provenance, caveats, and source URLs.
## Key metrics/methods (formulas where given, else "not specified")
- TPRR = Targets ÷ Routes Run; YPRR = Receiving Yards ÷ Routes Run (stated by @BeyondTheADP).
- PROE+ = Pass Rate Over Expectation + Neutral Pace (name only, no formula).
- EPA/attempt on 10+ air-yard throws; pressure-to-sack rate; CPOE; POE (no definition given); air yards lost to drops; uncatchable throw rate; 1st-&-10 gain-4+% rate; yards before/after contact; carry share; backfield snap distribution.
- Formulas otherwise not specified; several tables are visual approximations from chart axes (flagged PARTIAL).
## Data sources named
X accounts @RyanPaganetti, @MagicSportsGuy (StatRankings), @GridironInfo_ (nflverse/nflreadpy, NGS), @PFF (PFF grading), @PattonAnalytics (StatRankings), @DynatyzeFF (dynatyze.com own data, paywalled), @jmthrivept/@Glick_FFB/@DBro_FFB (Fantasy Points Data), @sfdata9ers (FTN / PFR), @FantasyPtsData (own charting), @BeyondTheADP (own).
## Findings (numbers and facts, not vibes)
- @RyanPaganetti: % of 1st-&-10 gaining 4+ yds — 49ers 65.3% top, Dolphins 33.3% bottom (32 teams).
- @MagicSportsGuy PROE+: Panthers +0.69 top, Seahawks −0.59 bottom, league avg −0.06.
- @GridironInfo_: worst 5 QBs EPA/att on 10+ air-yard throws; best: Hurts +1.50 EPA/play (20 att), Allen, Purdy behind.
- @PFF lowest pressure-to-sack rate: Purdy 0.0% (0/15), Daniels 4.2% (1/24), Stafford 6.3% (1/16), Dart 7.7% (1/13), Prescott/D. Jones 9.1% (2/22).
- @PattonAnalytics first-read efficiency: league-average reference ~+0.25 EPA/att, 65% first-read rate.
- @DynatyzeFF carry share leaders: Gibbs 84.9%, Taylor 82.7%, Brown 72% (top 3 of 12, W1–W2); league-avg top-3 backfield concentration 54.1%.
- @jmthrivept Tyler Warren W1–2: ADOT 1.42 flagged suspicious, speculated August groin injury / offense dialed back for Daniel Jones (per FantasyPtsData).
- @Glick_FFB Mark Andrews 2025 vs 2026: volume bounce-back (2026 line 10-98-0), author "wait on the TDs".
- @sfdata9ers uncatchable throw rate: Purdy best 10.71%, Winston worst 22.0% (min 30 att); Wentz 16/39 = 41.03%. 10+ yd rushes: CHI & BUF 11 (top), CLE 1 (last).
- @FantasyPtsData air yards lost to drops: Herbert 70, Mahomes 59, Mayfield 57, Goff 52, Prescott 48; Rodgers worst in EPA lost to drops (no value).
- @BeyondTheADP TPRR tiers (min 5 targets both weeks): TARGET MAGNETS 30%+, HEAVY 25–29.9%, RADAR 20–24.9%; JSN leads 44% TPRR / 5.54 YPRR (16 WRs).
- @jmthrivept George Kittle W1–2 (TEs >18 routes): 0.32 TPRR (5th), 3.29 YPRR (2nd), 10.7% win rate (11th), 16.1% target share (14th), 24.3% air-yard share (4th), 9.67 YAC/R (4th) — first two games off Achilles repair.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Purdy 0.0% pressure-to-sack, +10.5 CPOE, 10.71% uncatchable rate — elite pressure/accuracy cluster; Hurts +1.50 EPA/att deep.
- SCHEME: PROE+ extremes (Panthers +0.69 vs Seahawks −0.59); 49ers 65.3% 1st-&-10 success rate = scheme/efficiency signal.
- OTHER: TPRR/YPRR receiver-efficiency tables, carry-share concentration, air-yards-lost-to-drops (receiver-noise adjustment for QB/WR evaluation).
- TRUST-SIGNAL: multi-source cross-attribution (Fantasy Points Data used by 3 independent posters); PARTIAL/visual-approx flags on scatter charts.
## Engine-actionable? (yes/no + one-line what)
yes — transcribe/index the 17 CSVs as candidate signals: 1st-&-10 gain-4+% (team efficiency), PROE+ (pace), pressure-to-sack rate and uncatchable rate (QB-behavior), TPRR/YPRR tiers and carry-share concentration (receiver/RB role), air-yards-lost-to-drops (receiver-noise adjustment), with PARTIAL/visual-approx tables flagged untestable until re-sourced.

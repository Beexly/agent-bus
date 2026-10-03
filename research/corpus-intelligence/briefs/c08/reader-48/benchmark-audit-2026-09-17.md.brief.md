# docs/data-sources/research/2026-09-17/dossiers/benchmark-audit-2026-09-17.md

## What it is (1-2 sentences)
Garrett's 2026-09-17 engine-benchmark completeness audit: a 156-item inventory (96 accounts/profiles, 32 metrics, 16 documents, 4 spreadsheets, 6 scripts, 2 screenshots) scored COVERED vs MISSING against the Sports repo's AGENTS.md (1,545 lines), with ready-to-append benchmark blocks for every missing item. It found 82 covered, 73 missing, 1 integrity flag — and corrects AGENTS.md's "14 new CSVs" line to the real 29-CSV, 15-family, 4-script lab inventory.

## Key metrics/methods (formulas where given, else "not specified")
- Percentile convention: pct = (rank−1)/(n−1)×100, 100 = best, lower-is-better inverted.
- Edge Sheet v2 fair line (illustrative): fair line = (BUF net EPA − DET net EPA) × 63 plays + 2.0 home field.
- Garbage-time correction: multiply each volume projection by measured unfiltered/filtered per-game ratio (Allen att 1.025, yds 1.031; Goff att 1.105, yds 1.094; targets 1.042–1.195); moves Allen 195→201, St. Brown rec 6.5→8.0.
- Script-adjusted volume: 2025 dropback rates by possession-WP bucket (BUF lead 50.0/neutral 57.2/trail 61.8; DET 54.2/57.1/68.2; "tonight" BUF 53%/DET 63%; expected plays BUF 56/DET 55). QB shares: Allen 91.0% of team dropbacks, Goff 98.6%.
- Turnover-luck luck layer: occurrence (partially skill: forced fumbles vs league-rate expectation) vs recovery (near-pure noise: recovery share minus league mean); league 2025 recovery 46.3%; DET forced 19 (+6.5 over expected) but recovered 26.3% (−20 pts) → regress recovery to ~50%, model occurrence.
- qb_aggressiveness: aDOT = Σair_yards ÷ attempts with non-null air_yards (sacks excluded); cp = NA on all 2,132 2025 throwaways, so comp/exp/CPOE computed on cp-available subset only; qualifiers 100+ att (45 QBs). 2025 extremes: Maye +10.6 CPOE, Mariota 10.18 aDOT.
- rush_pressure: four_man_rush_rate = share of dropbacks with FTN n_pass_rushers == 4; pressure_proxy_rate = (qb_hit OR sack)/dropback — a FLOOR (no hurries in nflverse/FTN); sanity vs @GridironInfo_ W1: BUF 64.3%/21.4% vs chart ~65%/~19%, DET 63.5%/14.3% vs ~60%/~12%, proxy runs 2–3 pts high.
- Drive-outcome system: drive = (game_id, fixed_drive); league 2025: 2.10 pts/drive, 24.0% TD, 20.4% 3-and-out, 11.1% turnover-drive, avg start own 30.4 (deliberately UNFILTERED REG sample).
- Kicker: league 2025 FG 85.6%, XP 95.9%, 7.36 kick pts/g; DET paradox: Bates 79.4% FG but 7.94 pts/g (volume 34 att + nine 50+ at 44.4% → FG EPA/att −0.080; long attempts negative-EPA on average).
- Special teams: 2025 20.5% touchback (35-yd spot, dynamic kickoff), opp avg start own 29.8, kickoff EPA −0.257/kick, punt EPA −0.127/punt, 23 FG / 9 punt / 12 XP blocks; bundled caveat: nflverse has no per-return EPA — return EPA is return-INCLUSIVE play EPA, not isolated return skill.
- EP model now XGBoost (not Yurko logit); pressure→sack luck R²<0.005; sack props NULL; 4-man rush matched @GridironInfo_ within 1–3 pts.
- Market audit (DK via SI 2026-09-16): Allen 250.5 vs 201 UNDER lean; Gibbs 89.5 vs 95 no edge; StB 7.5 vs 8.0 mild over. Turnover→INT: Allen 3.66% worthy rate, 52.3% conversion.
- v2 lit review nuggets: EP model XGBoost; fumble recovery 0.00/−0.02; 4th-down gap; drive-grouped validation; barometric pressure + humidity in Peabody totals modeling; early-down success r ~ 0.36 vs 3rd-down "nearly meaningless."

## Data sources named
- nflverse pbp (REG), nflfastR cp, FTN charting (2026 now public, 100% join on dropbacks), SportsInfoSolutions/DraftKings via SI (market lines), @GridironInfo_ W1 chart (pressure sanity), @ESPN_BillC (SP+), @statsowar (mixed-effects EPA attribution), @UnabatedSports/@RobPizzola/@CirclesOffHQ/@beatingthebook (vig-free consensus, synthetic hold), @Jason_OTC (Fitzgerald-Spielberger draft chart), @davecabanff (GLSP), @FriscoJosh (air yards), @LateRoundQB, @The_Oddsmaker, RotoViz, @MoveTheSticks/@dpbrugler/@Jordan_Reid, @NFL_DougFarrar, @EstablishTheRun, @hawkbledger (coverage-defender grades), Garrett screenshots (air-yards week 1, coverage defenders).
- Source docs: `~/workspace/gse-research/dossier-v2-accounts.md`, `dossier-v2-methods.md`, `props-consensus/projection_methods.md`, `COMPUTATION_NOTES.md`, `edge-sheet/` (build scripts, README, DESIGN_BRIEF.md, DESIGN_CRITIQUES_V2.md), `consensus_lines.csv`, `our_projections.csv`, `dropback_epa_2025_all.csv`.

## Findings (numbers and facts, not vibes)
- Inventory: 156 items total; 82 COVERED, 73 MISSING, 1 integrity flag.
- Accounts: 96 inventoried; 40 v2-lane accounts have profiles but no metric definitions in AGENTS.md; 10 method deep-dives (Carpenter, Baldwin, Schatz, Clay, Abdoo, Walder, Cole, Sharp, Peabody, Greer) covered.
- Metrics: 32 rows — 21 missing from AGENTS.md, incl. drive_stats, down_splits, extra_metrics (air/YAC EPA, late-and-close EPA with wp ∈ [0.20,0.80], ~50–80 plays/team/season), turnover_luck decomposition, qb_aggressiveness, rush_pressure, kicker/defense detail definitions.
- Correction: AGENTS.md says "14 new CSVs" — actual 29 CSVs across 15 families via 4 scripts (`compute_team_metrics.py`, `compute_advanced_metrics.py`, `compute_kicker_defense_metrics.py`, `compute_player_metrics.py`).
- Integrity flag: `docs/coverage-defenders-week1-2026.png` is very likely the WRONG image — archive copied a TikTok ad-credit screenshot instead of Garrett's coverage screenshot; replace before trusting.
- Three most important missing items: (1) Edge-sheet v2 eight-panel rebuild (efficiency map, 10-metric percentile faceoff, dropback-EPA KDE on 539 BUF / 562 DET dropbacks, luck ledger, form lines, situational edges incl. DET late-and-close 6th-percentile collapse, unit matchups, THE READ footer; rotation rule: if two panels say the same thing, cut the weaker); (2) garbage-time correction + script-adjusted volume model — load-bearing for every props number; (3) drive-outcome system + extra metrics — engine-feature candidates, unnamed in AGENTS.md.
- Engine gap analysis ranks: opponent-adj EPA #1, turnover regression #2, pressure matchup #3, QB efficiency #4, market-relative calibration #5, tiers 6–13.
- Recommended next step named: backtest the projection method vs 2025 Weeks 1–18 closing prop lines.
- Build targets ranked 1–6 from the eight-post sweep: Havoc/Threat, FPOE/xFP/FP-S, QB pocket EPA, draft Monte Carlo, ST EPA, penalty EPA, hidden yardage, best-ball/survivor EV.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: qb_aggressiveness (aDOT, CPOE, throwaway handling), Allen scramble composition (45/89 rushes = 71% of rush yards; 27 RZ rushes → 13 TDs, 48.1%); QB shares of team dropbacks.
- COACHING: mixed-effects EPA attribution separating QB, coaching, opponent, supporting cast (statsowar); QB pocket EPA; 4th-down gap; script-adjusted dropback rates by WP bucket (play-calling tendency).
- OL: stuff_rate/stuff_rate_allowed, four-man rush rate, pressure proxy floor, 4-man vs pressure matchup (@GridironInfo_); OL-adjacent line metrics in unit matchups.
- SCHEME: down splits (early vs late), early-down success r ~ 0.36 vs 3rd-down nearly meaningless; air-vs-YAC EPA decomposition; coverage-defender grades (yards/route vs avg, opp-adjusted).
- TRUST-SIGNAL: benchmark-vs-agents completeness audit with COVERED/MISSING verdicts and an integrity flag on a mis-archived screenshot — repo record hygiene; market-relative calibration as engine gap #5.
- OTHER: metric conventions and method recipes directly reusable as engine features (drive outcomes, turnover luck, percentiles, garbage-time/script corrections, GLSP range-of-outcomes, vig-free consensus, draft chart, barometric pressure totals input).

## Engine-actionable? (yes/no + one-line what)
- Yes — ready-to-append AGENTS.md blocks for 73 missing items include reproduceable metric recipes (drive stats, extra metrics, turnover-luck anchors, throwaway-safe CPOE, garbage-time/script corrections) that are engine-feature candidates.

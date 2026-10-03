# docs/engine/research/2026-09-17/gse-lab/COMPUTATION_NOTES.md
## What it is (1-2 sentences)
Authoritative computation log for GSE's nflverse team/player metrics (Worker B + Worker A passes, 2026-09-17): exact filters, formulas, conventions, sanity checks, and known limitations for `team_metrics_*.csv`, percentile/distribution/weekly-trend/matchup/drive/kicker/defense/special-teams/luck/player/aggressiveness files.
## Key metrics/methods (formulas where given, else "not specified")
- EPA/EP: nflverse shipped (nflfastR multinomial logistic regression on down/distance/field position), not re-estimated.
- Success rate: play successful iff EPA > 0 (verified 100% match on pass/run plays).
- Filters: season_type == 'REG'; play_type in ('pass','run'); exclude qb_kneel, qb_spike (453 kneels + 82 spikes in 2025); garbage-time = Q4 with wp > 0.95 or < 0.05 (removed 3,702 plays in 2025, 11.2%; 238 in 2026 Wk1, 12.4%). OT unfiltered.
- Dropback = pass_attempt == 1 OR qb_scramble == 1 (sacks count as attempts); 2025: 17,626 dropbacks. Designed rush = rush_attempt == 1 AND scramble == 0 AND kneel == 0.
- Explosive-play rate: dropback ≥ 15 yards OR designed rush ≥ 10 yards (4for4 convention).
- Turnover luck: expected INTs = league-avg INT rate/dropback × team dropbacks (2025 baseline 1.867%; 2026 Wk1 2.069%); expected fumbles lost = league fumble-lost rate/play × team plays (2025: 0.640%; 2026 Wk1: 1.076%); negative diff = lucky. FTN `is_interception_worthy` join 100% coverage 2025: ~3.0% of dropbacks flagged, 52.3% of flagged were actual INTs.
- Pressure: TRUE pressure unavailable in nflverse/FTN; proxies qb_hit rate and sack rate per dropback (UNDERSTATE; ~6% of sacks coded without qb_hit).
- Percentiles: pct = (rank−1)/(n−1)×100, method="average"; 100 = best; lower-is-better metrics inverted.
- Drive: (game_id, fixed_drive), result = last play's fixed_drive_result; points via score differential (captures PATs, 2-pt, safeties). League 2025: 2.10 pts/drive, 24.0% TD rate, 20.4% three-and-out, 11.1% turnover-drive, avg start own 30.4.
- Stuff rate = designed rushes with yards_gained ≤ 0. Kickoffs: posteam = RETURN team; dynamic-kickoff touchback spot = own 35 (2025).
- CPOE: nflfastR `cp` NA on throwaways (100% of 2,132 null-cp plays 2025 are incomplete); comp/exp comp/CPOE all computed on cp-available subset; nflverse cpoe on 0–100 scale.
- 4-man rush rate = share of dropbacks with n_pass_rushers == 4 (FTN).
- BUF@DET matchup sheet (2025 baselines): BUF pass off +0.174 (84th pct) vs DET pass def +0.014 (61st); DET pass off +0.168 (81st) vs BUF pass def +0.108 (94th).
## Data sources named
nflverse GitHub release CSVs (play_by_play_2025/2026.csv.gz, ftn_charting_2025.csv, ftn_charting_2026.csv — all CC-BY 4.0; FTN subset CC-BY-SA 4.0, downloaded 2026-09-17). Cross-checks: StatMuse standings, PFF final 2025 power rankings, rstrube92/nfl_2025_epa_analysis, FTN DVOA column, The Athletic/TruMedia.
## Findings (numbers and facts, not vibes)
- [OTHER] 2025: 48,771 raw plays, 285 games (weeks 1–18 REG + 19–22 POST); analysis on 46,452 REG → 29,239 filtered. 2026 = Week 1 only (2,756 raw → 1,673 filtered).
- [OTHER] 2025 offensive EPA/play top-5: NE +0.186, LA +0.147, GB +0.140, DAL +0.135, BUF +0.132; defense leader SEA +0.112 (Athletic/TruMedia: +0.125/100 snaps — same rank, ~11% magnitude gap).
- [QB-BEHAVIOR] 2025 CPOE leaders: D.Maye +10.6, B.Purdy +7.6, J.Love +6.2; worst B.Cook −12.6, D.Gabriel −8.5, S.Sanders −7.0. aDOT leaders: M.Mariota 10.18, D.Maye 9.36, M.Stafford 9.30.
- [TRUST-SIGNAL] Dallas 2025: +0.135 EPA/play (4th) but 7-9-1 record; offense threw 5.2 fewer INTs than expected, defense generated 4.6 fewer INTs than expected, +1.7 fumbles lost vs expected — efficiency-vs-record split = regression signal.
- [OTHER] DET 2025: forced 19 fumbles (+6.5 over expected) but recovered only 26.3% (−20 pts vs 46.3% league mean) — fumble recovery ~0.00 year-to-year = near-pure noise; forced-fumble occurrence weakly repeatable.
- [COACHING] 2025 4-man rush rate: BUF 70.4% / pressure proxy 16.0%; DET 64.3% / 14.4%. Wk1 2026: BUF 64.3%/21.4%, DET 63.5%/14.3%.
- [OL] Kicking league 2025: FG 85.6%, XP 95.9%, 7.36 kicking pts/game; special teams: 20.5% touchback rate, opp avg start own 29.8, kickoff EPA −0.257/kick, punt EPA −0.127/punt.
- [TRUST-SIGNAL] Guardrails: NOTHING opponent-adjusted; 2026 = single-game samples (JAX +0.40 EPA/play unadjusted Wk1 #1, per FTN expectation); qb_hit undercounts pressure; nflverse `epa` on FG/XP 100% non-null 2025.
- [OTHER] 2026 Wk1 confirms roster breaks from data: D.Montgomery → HOU (20 rushes), D.Moore → BUF (8 targets/5 rec); kickers T.Bass (BUF), J.Bates (DET) from data not memory.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tags inline above (garbage-time exclusion rate, luck-layer decomposition, and no-opponent-adjustment are calibration-state inputs).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt these exact computation conventions (filters, EPA>0 success, percentile formula, luck-layer decomposition) as the engine's metrics standard; backfill DAVE/shrinkage and opponent adjustment (both flagged missing).

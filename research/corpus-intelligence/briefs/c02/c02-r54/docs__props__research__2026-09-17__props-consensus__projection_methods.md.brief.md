# docs/props/research/2026-09-17/props-consensus/projection_methods.md
## What it is (1-2 sentences)
A fully worked projection-methodology document for a BUF vs DET game on 2026-09-17 (Workstream 2), computing per-player prop projections from nflverse play-by-play with every filter, prior, adjustment, and null stated; explicitly "research only," not picks.
## Key metrics/methods (formulas where given, else "not specified")
- Filters: REG only; play_type in (pass, run); qb_kneel==0, qb_spike==0; garbage time excluded (qtr==4 AND (wp>0.95 OR wp<0.05)); OT kept → 29,239 plays (2025), 1,673 (2026 Wk1).
- Base prior = 2025 full-season per-game means; 2026 Week 1 = one-game role check only; efficiency rates never blended (100% 2025 / 0% Wk1).
- Garbage-time correction: multiply volume projections by measured unfiltered/filtered per-game ratio (Allen att 1.025/yds 1.031; Goff att 1.105/yds 1.094; Cook att 1.069/yds 1.035; Gibbs att 1.052/yds 1.098; team plays 1.112 BUF/1.113 DET; target ratios StB 1.103, JWi 1.133, LaP 1.195, Gib 1.093, Sha 1.078, Kin 1.042, Moo 1.076, Coo 1.081).
- Script-adjusted volume model: BUF 53% dropback rate, DET 63% (from measured leading/trailing WP-bucket dropback rates: BUF leading 50.0%/neutral 57.2%/trailing 61.8%; DET leading 54.2%/neutral 57.1%/trailing 68.2%). Expected plays BUF 56, DET 55.
- QB attempt derivation: BUF 56×0.53=29.7 dropbacks; Allen share 464/510=91.0% → 27.0; ×92.24% (428/464) → 24.9 attempts. DET 55×0.63=34.7; Goff share 554/562=98.6% → 34.2; ×94.04% (521/554) → 32.1 attempts.
- INT projection formula: expected dropbacks × interception-worthy rate × league conversion (52.3%). Allen: 27.0 × 3.66% × 52.3% = 0.5 (band 0-2); Goff: 34.2 × 1.44% × 52.3% = 0.3 (band 0-1). FTN is_interception_worthy 2025: Allen 17/464 (3.66%) vs 10 actual INTs; Goff 8/554 (1.44%) vs 8 actual.
- Carry shares: Cook 289/419 = 69.0% (Wk1 13/19 = 68% confirms); Gibbs ~88% of DET designed rushes (Wk1 91%, compromise).
- Yds/attempt: Allen 7.83 (3350/428), Goff 8.01 (4172/521); YPC: Cook 5.42, Gibbs 4.82, Montgomery 4.60.
- Early-down carry dependence: Cook 95.5% carries on downs 1-2 (5.45 YPC early / 4.77 late); Gibbs 89.6% (5.01 / 3.13); Montgomery 86.6% (4.86 / 2.94) → backs are script-sensitive.
- Allen scramble composition: 45 of 89 rushes were scrambles (387 of 543 rush yds = 71%); goal-line 27 RZ rushes → 13 TDs (48.1%), 0.875 rush TD/g.
- Sack-prop veto: pressure-to-sack conversion R² < 0.005 per literature → no sack projection for any player (deliberate NULL).
## Data sources named
- nflverse play-by-play `play_by_play_2025.csv.gz` (48,771 raw plays) and `play_by_play_2026.csv.gz` (2,756 raw), downloaded 2026-09-17, CC-BY 4.0.
- FTN charting 2025 (`ftn_charting_2025.csv`) joined on (nflverse_game_id, nflverse_play_id) for `is_interception_worthy`, CC-BY-SA 4.0.
- Team metrics CSVs `~/workspace/gse-research/nfl-2026/team_metrics_2025.csv`, `team_metrics_2026.csv` (EPA splits, pace, defensive adjustments).
- Methods literature `docs/2026-09-17-advanced-analytics-landscape-v2.md` Part III (turnover regression Stuart/Burke; pressure stability PFF/STRAIN; EPA predictive validity PFF hot-start, Zhou 2026).
- Market lines: DraftKings via SI previews read 2026-09-17 (Allen pass yds 250.5; Gibbs rush 89.5; St. Brown rec 7.5); Bills -5.5; total 54.5-55.5.
- Injury news: USA Today 9/17 (DET LG Christian Mahogany + RT Blake Miller ruled out; safeties Brian Branch + Kerby Joseph out; DET CB D.J. Reed questionable).
## Findings (numbers and facts, not vibes)
- [SCHEME] Two structural roster breaks found in play-by-play: David Montgomery plays for HOU in 2026 (20 carries in 2026_01_BUF_HOU, zero DET touches — DET rows VOID); DJ Moore plays for BUF (traded from CHI, 8 targets Wk1) → BUF 2025 target distribution stale, share basis switched to Wk1 2026 (29 team targets: Moore 27.6%, Kincaid 20.7%, Shakir 20.7%, Cook 13.8%) with SE ~8pp caveat; efficiency stays 2025 (Moore 2025 CHI: 17g, 59.5% catch, 7.86 YPT).
- [QB-BEHAVIOR] Allen's interception-worthy rate (3.66%, 2.5× Goff's 1.44%) exceeds his actual INT rate (10 INTs on 17 worthy throws); league worthy→INT conversion 52.3% → Allen's INT signal is "danger volume," not actual INT count.
- [QB-BEHAVIOR] Allen's rushing prop is a pressure+script derivative (71% of rush yards from scrambles), not a designed-run projection; goal-line role 48.1% TD conversion on 27 RZ rushes.
- [OL] DET LG Christian Mahogany + RT Blake Miller both ruled out 9/17; Goff was hit on 18.9% of 2025 dropbacks (2nd-highest allowed) → stated downside risk on Goff efficiency and Gibbs early-down run game.
- [SCHEME] DET trailing-state dropback rate 68.2% (n per-season) vs 54.2% leading — 14pp swing; RB rows (Cook, Gibbs) are early-down dependent (95.5%/89.6% of carries on downs 1-2) → the central risk on every RB prop is game-script abandonment.
- [QB-BEHAVIOR] DET safeties Brian Branch + Kerby Joseph out → upside risk for entire BUF pass game (Allen/Shakir/Kincaid/Moore) and tackle-redistribution bump candidate for Campbell/Anzalone; stated as the main counterweight to the Allen-under-250.5 lean.
- [SCHEME] Largest market disagreement: Allen pass yds market 250.5 vs projection 201 (band 135-265), ~50-yd gap (DISAGREE under, "lean under, not a strong call"); Gibbs rush 89.5 vs 95 (AGREE-ish, coin flip); St. Brown rec 7.5 vs 8.0 (MILD DISAGREE over — garbage-time correction 1.103 ratio moved it from 6.5 to 8.0).
- [SCHEME] Deliberate NULLs: individual sacks (conversion luck), Sion Vaki rushing (zero 2025 filtered touches), longest reception (pure noise), Milano/Bernard tackles (rotational noise; Bernard's 11-tackle Wk1 is n=1).
- [TRUST-SIGNAL] No opponent adjustment anywhere; cross-unit EPA applied qualitatively only; BUF pass O +0.174/db vs DET pass D +0.014 (avg); DET pass O +0.168/db vs BUF pass D +0.108 (good).
- [OTHER] Shootout-script check dropped as immaterial: BUF dropback rate in games lined ≥52 was 56.9% (n=2) vs 56.1% season; DET 62.0% (n=5) vs 59.1%; +1-3pp shift vs ±65-yard bands.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Roster-change detection via play-by-play (Montgomery to HOU, Moore to BUF) → SCHEME, TRUST-SIGNAL
- Interception-worthy rate vs actual INTs → QB-BEHAVIOR
- Allen scramble/rush composition and goal-line role → QB-BEHAVIOR
- DET OL absences + Goff hit rate → OL
- DB absences as pass-game upside risk → SCHEME
- Early-down dependence and script sensitivity of RB volume → SCHEME
- Deterministic null policy (sacks, longest reception) → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — Roster-break detection (player on new team via game data), measured garbage-time ratios instead of model fudge, script-adjusted dropback rates from WP-bucket measurement, and a literature-backed veto list for noise stats are all directly wireable into the projection pipeline.

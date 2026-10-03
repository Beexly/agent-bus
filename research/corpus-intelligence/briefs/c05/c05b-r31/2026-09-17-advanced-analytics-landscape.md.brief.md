# docs/data-sources/research/2026-09-17/2026-09-17-advanced-analytics-landscape.md
## What it is (1-2 sentences)
GSE engine benchmarking dossier (last verified 2026-09-17) cataloging 36 verified X analytics accounts, 26 advanced metrics with definitions and predictive evidence, free/paid/licensing data-source map, and a ranked gap analysis of what GSE's Elo-based engine (v5.2.7) lacks. Explicit standing caveat: predicting team quality is not predicting covers; metrics enter as spread/total modeling feature candidates, never as free edges.

## Key metrics/methods (formulas where given, else "not specified")
- EPA/play (team): change in Expected Points per play; EP from down/distance/field position baselines. nflfastR vs ESPN EP models differ slightly; filter garbage time and kneels.
- Success rate: three competing definitions — nflfastR (EPA>0), Football Outsiders (40/60/100 on downs 1/2/3+), Connelly (50/70/100). Never mix.
- DVOA (FTN): per-play value vs situational average, opponent-adjusted; 0% = average. Proprietary, weekly tables only.
- DAVE: DVOA blended with preseason forecast, decaying weight — verified Week 1 2026: **83% prior on offense, 98% on defense/ST**.
- EPA+CPOE composite: QB index blending EPA value with accuracy-over-expected; canonical weighting UNVERIFIED — build own weights.
- CPOE: completion rate minus expected rate given throw difficulty; model-dependent.
- DYAR/DVOA (player): cumulative — convert to per-play before using for spreads.
- PRWR/PBWR (ESPN): pass rush win within 2.5s / pass block sustain 2.5s+; proprietary rankings only; 2026 methodology update (bull rushes, chips, stunts) supersedes legacy descriptions.
- Havoc rate: share of defensive plays with TFL/forced fumble/PD — NO NFL standard definition; fix one before computing.
- Explosive-play rate: threshold varies (15/10 vs 20-yard conventions); state it.
- Situation-neutral pace: seconds per play excluding garbage time; filter choices change the number.
- Special-teams EPA: Wharton study: +1.9% RMSE improvement.
- Success-rate stabilization: ~r = 0.60 by game 6; passing EPA predicts future point differential r ~ 0.42 at 6 games.
- RayCarp Rankings: Bayesian NFL power ratings, opponent-adjusted, points/game vs average on neutral.

## Data sources named
- Free/legal: nflverse (nflfastR/nflreadR) — pbp 1999+, rosters, schedules, depth charts, injuries, snap counts, participation, NGS tables, PFR advanced mirror, FTN charting subset (2022+); license CC-BY 4.0 (credit "nflverse"), FTN charting CC-BY-SA 4.0. RBSDM.com (Ben Baldwin public leaderboards). Ray Carpenter raycarp.com / thespade.substack.com tools.
- Paid (verified 2026-09-17): PFF Pro tier $9.99/mo, $99.99/yr, $199.99/yr Pro (Sep 2026 price drop); FTN NFL Pro $109.99/yr; Stathead ~$8/mo single / $16/mo all (2020 figures); SIS enterprise (pricing not public); SumerSports team tier enterprise; TruMedia/Stats Perform, Sportradar, Stats Perform, SportsDataIO enterprise.
- Broadcast-only: @NextGenStats, @PFF, @SumerSports, @SportsInfo_SIS.
- NGS raw tracking licensed commercially via Sportradar (nine-figure territory); summary NGS tables via nflverse usable.
- Licensing reality: facts aren't copyrightable; compiled databases are. Compute own EPA from nflverse = clean; republishing PFF grades = not. ESPN/PFR free tier/RBSDM: free to read, no scraping/redistribution right.

## Findings (numbers and facts, not vibes)
- 36 X accounts verified 2026-09-17 (25 main + 11 alternates); 26-metric deep catalog in companion file `~/workspace/gse-research/advanced-metrics-data-source-catalog.md`; account-hunter dossier `~/workspace/nfl-analytics-x-dossier.md`.
- Passing efficiency predicts wins at corr ~0.53-0.61 vs rushing efficiency ~0.13-0.19.
- 2026 early-season study: passing EPA predicts future point differential r ~ 0.42 at 6 games; success rate stabilizes faster (~r = 0.60 by game 6).
- 2012 hierarchical-Bayes study: raw 3rd-down conversion "nearly meaningless"; use early-down success / all-downs efficiency (predictive r ~ 0.36).
- 2024 analysis: bye-week edge largely vanished post-2011 CBA.
- DAVE Week 1 2026: 83% prior offense / 98% defense+ST (FTN live tables).
- Engine blocker (ESTABLISHED): CLV beat-close 23.0% vs 52.4% target; v5.2.7 picks all single-source Elo (`sources:["elo"]`, `agreement:"SOLO"`); NFL only ~70 settled picks ever; NFL calibration head is CLV-only.
- Top-5 ranked engine gaps: (1) opponent-adjusted EPA/play dropback/rush split; (2) turnover regression via expected turnover differential; (3) OL/DL pressure matchup (pressure creation is stable skill; sacks are noisy outcome); (4) QB efficiency EPA/dropback + CPOE (backup-QB injury adjustment); (5) market-relative calibration (CLV as training label, consensus splits, line movement).
- Next tier: explosive-play differential; DAVE-style early-season shrinkage; situation-neutral pace + stadium-specific wind (no flat "X mph = Y points" — nonlinear, interacts with stadium/roof/direction); special-teams EPA (~2% RMSE); coaching aggressiveness prior (~0.5-1.5 pts/game); coverage/box-count splits; red-zone trip rate (opportunity predictive, conversion noise per Schatz).
- Explicitly deprioritized: rest/bye (LOW), travel/time zones/altitude (LOW, no verified NFL coefficient), raw 3rd-down conversion (TRAP), rush EPA as team-strength driver (LOW).
- Wind effect on totals: HIGH for totals, LOW for moneyline.
- Red-zone conversion near-noise (Schatz's critique); red-zone TRIP rate is the sticky part.
- Handle corrections: @ASchatzNFL (was @FO_ASchatz), @LordReebs (was @RichHribar), @KevinCole___ (was @KevinColePFF), @whale_capper (was @DrewDinsick), @DianteLeeFB (was @DianteLeeNFL).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] CPOE as cleanest public QB-accuracy signal (free via nflverse); EPA/dropback + CPOE QB prior powers backup-QB injury/substitution adjustment.
- [QB-BEHAVIOR] QB EPA/play tiers (Kevin Cole, Unexpected Points); roster-change point-differential modeling.
- [COACHING] 4th-down aggressiveness: go-rate vs WP-model recommendation; systematic ~0.5-1.5 pts/game hiding in coaching tendencies; nfl4th-style decision models implementable free via nflverse.
- [COACHING] 2012 hierarchical-Bayes finding raw 3rd-down conversion nearly meaningless — late-down coaching decisions should be modeled via early-down success.
- [OL] Pressure creation is the stable skill; sacks are the noisy outcome (PFF research); pressure-to-sack conversion QB-influenced; PRWR/PBWR (ESPN, 2.5s threshold, 2026 methodology update) as research benchmark; Brandon Thorn OL tiers/True Sack Rate.
- [OL] ESPN Receiver Tracking Metrics + roster-value research (Seth Walder).
- [SCHEME] Ray Carpenter personnel-grouping EPA/play + run-gap EPA charts; coverage splits ("this QB reads zone better than man"); personnel tendencies (Warren Sharp); scheme-to-stats bridges (Solak, Tice, Diante Lee).
- [TRUST-SIGNAL] CLV as training label — calibrating against the market as fastest path to the 52.4% bar; conjunction gate comparing model p to de-vigged market p.
- [OTHER] DAVE-style early-season shrinkage (83%/98% priors Week 1 2026) — directly addresses the "NFL n=70" thin-sample problem.

## Engine-actionable? (yes/no + one-line what)
Yes — ranked build order for the engine's top-5 missing features, all implementable on free nflverse data (opponent-adjusted EPA/play dropback/rush split; expected turnover differential; pressure matchup; QB EPA/dropback+CPOE; CLV-as-training-label calibration).

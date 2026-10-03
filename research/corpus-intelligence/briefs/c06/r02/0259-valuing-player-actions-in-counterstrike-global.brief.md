# arxiv-program/research/2026-09-21/arxiv-deep/0259-valuing-player-actions-in-counterstrike-global.md
## What it is (1-2 sentences)
A full-depth research note on Xenopoulos, Doraiswamy & Silva (2020, arXiv:2011.01324v2), which builds a win-probability-added (WPA) framework for CS:GO players from 70M in-game events — an XGBoost win-probability model with per-event WPA attribution (damage events only), A*-graph spatial distances on navigation meshes, and player-level bootstrap uncertainty. The note's verdict is ADAPT: the micro-action WPA design pattern, the stability/independence/discrimination metric-evaluation battery, and the bootstrap uncertainty layer are a template for NFL event-level player valuation.
## Key metrics/methods (formulas where given, else "not specified")
- WP model: P(Y_i = 1 | G(i,t)) via logistic regression (SAGA), CatBoost, XGBoost (100 estimators, hist; grid max_depth in {6,8,10,12}, min_child_weight in {1,3,5,7}; CatBoost depth 10, l2_leaf_reg 3 selected); tuned 2/3-train/1/3-val on log loss; time-ordered train/test split.
- Action value: V(a(i,t)) = Y-hat(i,t+1) - Y-hat(i,t), in [-1,1], normalized to acting player's team; damaged player gets -V; Player WPA = sum, reported per round.
- Graph distance: directed graph from navigation meshes, shortest paths via A* (non-symmetric distances), used for minimum-distance-to-bombsite features.
- Uncertainty: bootstrap — resample each player's rounds with replacement (100 samples), compute WPA/round distribution (mean, SD).
- Evaluation battery (Franks et al.): stability = month-to-month correlation; independence = correlation with KDR; discrimination = top-10 rankings; Fisher r-to-z one-sided difference-in-correlation tests.
- Existing-metric definitions quoted: KDR = Kills/Deaths; ADR = Total Damage/Rounds; KAST% = (Kills+Assists+Survivals+Trades)/Rounds.
## Data sources named
4,682 LAN professional CS:GO matches with public demofiles (HLTV per-match stats); 70M+ events; train 55M game states (2016-10-23 to 2019-05-31), test 18M (2019-06-01 to 2019-12-22); game state G(i,t) observed at footstep/damage/bomb events; features: map, ticks, round-start equipment value, players/HP remaining, bomb-planted flag/site, graph distances to bombsites. Parser: https://github.com/pnxenopoulos/csgo; parsed dataset not released.
## Findings (numbers and facts, not vibes)
- Test set (Table II): XGBoost — log loss 0.5353, Brier 0.1842, AUC 0.7913 (best); CatBoost 0.5443/0.1875/0.7851; logistic 0.5539/0.1912/0.7743; map-average CT win rate 0.6917/0.2493/0.5303.
- Stability / KDR-independence (Table IV, n=479 players, >=100 rounds/month): KDR 0.38/1.00; ADR 0.24/0.67; KAST% 0.30/0.79; Rating 2.0 0.29/0.93; WPA 0.40/0.73. WPA significantly more stable than ADR (p=0.0029), KAST% (p=0.0392), Rating 2.0 (p=0.0268); NOT significantly more stable than KDR (p=0.3594).
- Feature importance: team equipment value first, then HP remaining both sides; map fifth.
- Bootstrap SD of mean WPA/round: gla1ve 0.0038, device 0.0041, dupreeh 0.0041; device highest mean.
- High-impact play: ZywOo's headshot in a 1-vs-2 with 13 HP gave +67% win probability (T side <3% before).
- Limitations: only damage events credited (bomb plants, grenades, positioning unmeasured); adjacent ticks are near-duplicate samples; no team-strength control (stomps inflate WPA); graph distance is CSGO-specific with no NFL analog.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (player valuation): extend nflWAR-style WPA to sub-play event granularity (target/air-yard events from FTN charting) with bootstrap per-player uncertainty — the note's core port; the evaluation battery (split-half stability vs EPA/play, bootstrap CIs) installs as GSE's metric-QA protocol for any new player metric.
- TRUST-SIGNAL: WPA's stability edge over KDR was NOT significant (p=0.3594) — the paper overclaims "more stable"; GSE evaluations must test significance of stability differences, not just point estimates.
- COACHING: context-aware player valuation (equipment-value-first importance) parallels coaching decisions about roster/context weight — INFERENCE that context features dominate player evaluation applies to NFL talent assessment too.
## Engine-actionable? (yes/no + one-line what)
yes — Adopt the event-level WPA + bootstrap-uncertainty design on nflverse play-by-play if XGBoost WP beats logistic by >= 0.01 log loss with calibrated reliability and player WPA split-half correlation >= 0.35 with EPA correlation < 0.90 (independence margin); in any case install the stability/discrimination/independence battery as the standard QA for new GSE player metrics.

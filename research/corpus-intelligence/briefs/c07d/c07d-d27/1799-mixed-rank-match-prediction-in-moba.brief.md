# arxiv-program/research/2026-09-21/arxiv-deep/1799-mixed-rank-match-prediction-in-moba.md
## What it is (1-2 sentences)
Tests whether abundant extremely-high-skill public DotA 2 matches can serve as proxy training data for scarce professional matches (yes — with only small accuracy loss), finding that different data tiers prefer different algorithms, and detailing per-minute in-game sliding-window models.

## Key metrics/methods (formulas where given, else "not specified")
- Hero vector (verbatim): `xᵢ = 1 if hero i in Radiant, −1 if in Dire, 0 otherwise` — 113-dimensional tri-state vector.
- Per-minute model (verbatim): `M_t trained on X_{rt} = {x_{i,t−4}, x_{i,t−3}, …, x_{i,t}} for all features i; replay r, minute t` — 5-minute sliding windows, one model per minute t = 4..n.
- In-game features: 30 per-timestamp metrics (team damage, kills, last hits, net worth, tower damage, XP) each as Dire, Radiant, R−D difference, and gradient; window at the 20-minute mark (~half of an average 40-min game).
- Methods: logistic regression ("Logistic" in Weka 3.8, ridge varied) vs random forests ("RandomForest", trees varied); each with all features, wrapper subset selection (WrapperSubsetEval + best-first), and CFS filter selection (CfsSubsetEval). Equivalent configuration counts compared for fairness.
- Validation: chronological splits (future never predicts past); two splits — Mixed (66/34 chronological train/test) and tournament-only: train on all data minus the 2017 Kiev Major, test on the 113 Kiev Major matches (24–30 Apr 2017), a strict out-of-sample elite-tier test. Metric: accuracy only (no probabilities, no calibration).

## Data sources named
- 1,933 DotA 2 replays (27 Mar – 4 May 2017, no major patches in window): 270 pro matches (13.97%) + 1,663 extremely-high-skill public matches (MMR >> 6000, 99.81 percentile). Parsed with Clarity (github.com/skadistats/clarity). Replay corpus from Valve's site. WEKA 3.8.

## Findings (numbers and facts, not vibes)
Pre-match (hero vectors), accuracy %:
- Mixed-Hero: LR all 54.6423 / wrapper 58.7519; RF all 53.1202 / wrapper 58.2953.
- Pro-Hero: LR all 47.7876 / wrapper 50.4425; RF all 50.4425 / wrapper 55.7522.
In-game (20-min window):
- Mixed-InGame: LR 1-attr 74.1433 (Kills R−D) / all 73.3645 / CFS 74.9221; RF 1-attr 67.757 / all 73.053 / CFS 76.1682.
- Pro-InGame: LR 1-attr 75.2212 (Kills R−D) / all 70.7965 / CFS 71.6814; RF 1-attr 61.0619 / all 66.3717 / CFS 68.1416.
- Mixed training data predicts pro matches with only slightly lower accuracy than mixed-on-mixed (in-game: 75.22 pro-on-mixed vs 76.17 mixed-on-mixed — a 0.95-point gap).
- The optimal algorithm differs by target tier: pro in-game is best predicted by LR with a SINGLE feature (kill differential, 75.2212), while mixed in-game prefers RF+CFS (76.1682); pro hero prefers RF+wrapper (55.7522), mixed hero prefers LR+wrapper (58.7519).
- Feature selector interacts with data type: wrapper beats CFS on hero data; CFS beats wrapper on in-game data (correlated features like XP and kills favor the redundancy-penalizing filter).
- Pro matches last longer (100% ≥ 20 min vs 97.6% overall), consistent with longer = less predictable.
- Hero-only data far weaker than in-game state (≤58.75 vs ≤76.17); player×hero identity (not modeled) is the biggest known omitted signal (authors admit).
- Authors flag the pro-data algorithm flip (single-feature LR winning) may be overfitting/small-sample noise; 113 pro test matches is small.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — SCARCE-TIER MODELING]: The corpus has no treatment of the scarce-elite-tier training problem; GSE's playoff models, prime-time-only models, matchup-subtype models all face exactly this — too few elite observations. Mechanism (Experiment A): train GSE's playoff win-probability model on ALL games with playoff games up-weighted (the paper's mixed-data trick: weights 1×/3×/10×), test strictly on held-out playoffs (Kiev-Major-style elite test); adopt if playoff-holdout Brier beats playoff-only training by ≥0.002. Serves calibration and the playoff/trust lane. Cross-league transfer work (1798's cross-league GCN) is about leagues, not tiers within a sport — this is the within-sport tier analogue.
- [OTHER — TIER-SPECIFIC MODEL SELECTION]: The algorithm-flip finding (regularization-heavy simple LR wins on small elite samples; RF wins on abundant mixed data) cautions against GSE's default of one model class everywhere. Mechanism (Experiment B): re-run the algorithm bake-off (logistic/GBM/RF) separately on the playoff holdout vs regular-season data — adopt tier-specific selection if the winner differs. Serves model selection/calibration.
- [OTHER — LIVE/IN-PLAY PRODUCT]: The per-minute M_t models with 5-minute sliding windows of state differentials are the closest corpus analogue to GSE's live in-play win-probability product. Mechanism: per-drive (or per-minute) models on 5-minute sliding windows of state differentials (score diff, EPA diff, time). Serves the tracking/live lane.
- [COACHING]: INFERENCE — the "pro matches last longer (100% ≥ 20 min) → less predictable" result is a pacing/tier observation; NFL analogue: playoff games play slower/tighter with less garbage time, which systematically compresses in-game win-probability dynamics — the live model should condition on game tier.
- UNCERTAIN: the pro single-feature-LR win (75.2212 with Kills R−D) may be small-sample noise (authors' own flag); treat the tier-flip as hypothesis to test, not fact.
- Referenced: arXiv:1711.06498v1 (Hodge, Devlin, Sephton, Block, Drachen, Cowling, 2017); Clarity parser (github.com/skadistats/clarity); WEKA 3.8 (WrapperSubsetEval, CfsSubsetEval); 2017 Kiev Major; ledger 1798 (cross-league GCN transfer).

## Engine-actionable? (yes/no + one-line what)
Yes — Experiment A/B on NFL 2010–2024 nflverse data: regular-season-augmented playoff training (1×/3×/10× up-weighting) evaluated on 2020–2024 playoff holdout Brier, plus tier-separated algorithm bake-off; adopt mixed-tier training if playoff-holdout Brier improves ≥0.002 and tier-specific selection if the bake-off winner flips on elite data.

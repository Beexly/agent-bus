# docs/arxiv-program/research/2026-09-21/arxiv-deep/0648-frame-by-frame-completion-probability-nfl-pass.md

## What it is (1-2 sentences)
An arXiv:2109.08051v1 paper building a two-stage NFL pass-completion framework on Next Gen Stats tracking data (Big Data Bowl 2021): Stage 1 identifies the pass target frame-by-frame via inverse-distance weighting (86.92% accurate), and Stage 2 estimates conditional completion probability with a random forest on 32 features (AUC 0.8829). Real-time computable using only current and past frames; public R code on GitHub.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 (target ID) distance measures: d^(1) = point-to-line distance of player to ball trajectory (Eq. 3, projection formula); d^(3) = b = h_t − h_{t−1}, frame-to-frame change in player–ball Euclidean distance (Eq. 5); d^(2) = standardized non-negative version of d^(3) (Eq. 6); d^(4) = Euclidean player–ball distance.
- Empirical target probability: P_k(T=i|j) = 1/[d^(k)_ij · Σ_i (d^(k)_ij)^{−1}] (Eq. 7) — inverse-distance weighting; combined via frame weight f(W) = W·P_1 + (1−W)·P_2 (Eq. 8); four adaptive weights W^(1..4) from order statistics of the closest player's distance metrics (Eqs. 9–12); logistic blend W^(2,3)_t = 1/(1 + e^{(13.34183−t)/2.57}) (Eq. 13), inflection at mean 13.34 frames, scale 2.57 via grid search — W^(2) early → W^(3) late (Eq. 14).
- "Transfer" fix: players within 2 yards (d^(1) and d^(4)) of the ball absorb all other players' probability.
- Stage 2 (completion | target): random forest (mtry=15) on 32 features — 13 play data (quarter, down, distance, formation, defenders near LOS, pass rushers, dropback, clock, yard line, scores, home, passer–target distance at release), 3 player data (target position, closest/second-closest defender positions), 16 frame data (target/defender distances to ball-trajectory line and to ball, frame differences, target–defender distances, target–sideline distance); vs binomial logit/probit/cloglog, LDA, QDA via leave-group-out CV (plays as groups), 5 and 10 folds, AUC metric.
- Marginal: P(C) = Σ_i P(C|T=i)·P(T=i) (Eq. 15).
- Frames filtered to between pass-release and outcome events; only x/y coordinates (no ball height); interceptions treated as incompletions; no player-skill priors.

## Data sources named
NFL Big Data Bowl 2021 (Kaggle): Next Gen Stats tracking for all passing plays, 2018 regular season, 253 games (three week-1 games missing); 203,148 total frames, 1–46 frames/play, 75% ≤ 16 frames, 95% ≤ 25 frames; per frame x/y coordinates (120×53.3-yard field), speed, event tags (41: snap, pass_forward, pass_arrived, etc.), player position groups, play metadata. Passing plays = pass thrown, sack, or 5 penalty types; sacks, penalty plays, spikes, throwaways, fake punts/FGs removed. Code: https://github.com/gustavopompeu/NFLPassCompletion (R: tidyverse, caret, randomForest, gganimate).

## Findings (numbers and facts, not vibes)
- **Stage-2 model AUC (10-fold LGOCV):** random forest 0.8829; binomial logit 0.7874; probit 0.7861; LDA 0.7840; cloglog 0.7814; QDA 0.7487; RF train time 3.88h vs 2 min for logit. [QB-BEHAVIOR, SCHEME]
- **Target-ID accuracy:** final 86.92% (vs equal-weight 82.67%, W^(2) 86.68%, W^(3) 85.23%). [QB-BEHAVIOR]
- **Calibration:** P(C|T=i) per frame vs completion %: Pearson 0.998, Lin's concordance 0.998; marginal P(C) per frame: 0.978/0.958; per-play averages strictly worse — frame-by-frame beats play-level aggregation. [QB-BEHAVIOR, SCHEME]
- **Training accuracy at 0.5 threshold:** 95.8% on predicted-target frames (file notes the 0.5-threshold accuracy is misleading — base completion rate ~65% inflates it; AUC 0.8829 is the honest metric). [QB-BEHAVIOR]
- **Case studies:** Rodgers→Allison 39-yd TD 62.4% at catch frame (model higher than NGS's "most improbable" label on a completed pass); Brady→Gronkowski TD 28.8% final; frame-75 Allison 24.8% when ball in range. [QB-BEHAVIOR]
- **Missing inputs (authors' own flags):** no ball z-coordinate — the main missing input; no player-skill features (elite and replacement-level receivers get identical geometry); target-ID errors propagate into P(C). [SCHEME]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Two-stage target→conditional-completion architecture on NGS tracking data with public code: QB-BEHAVIOR — ready-made baseline for GSE's own in-play completion model (directly in the NGS-first lane); adding receiver-talent + CB-coverage priors is the stated improvement path.
- Expected completion vs actual ("completion % over expected" à la NGS CPOE, independently computed): QB-BEHAVIOR — QB decision-making evaluation and prop edges (reception-probability per route for anytime-TD/reception props).
- 32-feature set (play/player/frame geometry) as a feature inventory: SCHEME — live in-play product content and play-level EPA/win-probability feature.
- Ball-height estimation via projectile model (release point, catch point, airtime → launch angle/height): SCHEME — contested-catch improvement on the subset where the 2D model is weakest (defender within 1 yard at arrival).

## Engine-actionable? (yes/no + one-line what)
Yes — reproduce the two-stage pipeline on multi-season Big Data Bowl tracking (gates: target-ID accuracy ≥ 85%, Stage-2 AUC ≥ 0.85 on a modern holdout), then add receiver-talent + CB-coverage priors (gate: AUC ≥ +0.01 with calibration slope in [0.9, 1.1]) to own an in-house completion-probability model for in-play, CPOE-style QB grading, and reception props.

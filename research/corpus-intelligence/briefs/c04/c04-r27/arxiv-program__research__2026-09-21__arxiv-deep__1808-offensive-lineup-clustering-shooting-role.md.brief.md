# docs/arxiv-program/research/2026-09-21/arxiv-deep/1808-offensive-lineup-clustering-shooting-role.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv 2403.13821 (Yamada & Fujii, Nagoya University / RIKEN AIP), which clusters NBA players into 13 shooting styles and 10 offensive roles and predicts lineup adjusted offensive rating (OFFRTG) from lineup role composition, including Bayesian estimates of two-role interaction effects.

## Key metrics/methods (formulas where given, else "not specified")
- Shooting-style pipeline: 17 tracking-derived shot features/player → PCA to 9 dims → pairwise Wasserstein-1 (earth-mover) distances between player shot distributions → Ward hierarchical clustering → 13 shooting-style clusters.
- Offensive-role pipeline: fuzzy C-means minimizing ΣᵢΣₖ uᵢₖᵐ‖xᵢ − cₖ‖² → 10 offensive roles.
- Target: lineup adjusted OFFRTG (lineups with > 50 shared minutes); models SVM, LightGBM, NGBoost (natural-gradient boosting for probabilistic regression of mean + variance), Bayesian hierarchical regression estimating role-pair interaction effects with partial pooling.
- Performance metrics: RMSE, MAE, NLL (negative log-likelihood).

## Data sources named
- 41,160 shots from 630 NBA games, 2015–16 season (17 tracking features) for shooting styles.
- Playtype data, 2015–16 through 2022–23, 3,051 player-seasons, for offensive roles.
- NBA lineup data with adjusted OFFRTG; partly proprietary; no public code URL in the paper.

## Findings (numbers and facts, not vibes)
- Shooting-style composition: best SVM RMSE 4.516 vs. prior-style baseline SVM RMSE 4.380 — composition did NOT beat the baseline.
- Offensive-role composition: NGBoost RMSE 4.786, MAE 3.869, NLL 3.066 vs. prior-style NGBoost RMSE 4.850, MAE 3.942, NLL 3.089 — composition wins on all three.
- Largest positive role-pair interactions: Isolation Attacker + Wing with Handle +0.3460; Isolation Attacker + Transition Attacker +0.2900; Primary Ball-Handler + Spot-up Shooter +0.2055.
- Largest negative role-pair interactions: Post-up Big + Wing with Handle −0.4720; Stretch Big + Transition Attacker −0.4145.
- Model fails on idiosyncratic systems/players (Jokic, Spurs, Warriors) — composition features miss scheme effects.
- Shooting-style clusters use only 2015–16 data (stale; game has evolved in spacing/pace); role-pair effects are associative, not causal (lineup selection bias).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (SCHEME) Role-pair interaction magnitudes (±0.35/−0.47) quantify how on-floor role composition changes offensive efficiency — a scheme-composition feature class, though NBA, portable in concept to football personnel-package × play-type interactions.
- (OTHER) Symbolic/model pipeline evidence: Wasserstein + Ward clustering of player styles, fuzzy C-means roles, NGBoost probabilistic regression, Bayesian hierarchical pair-effect estimation — method inventory for the engine, not football-domain intelligence.
- (OTHER) Verdict in the ledger is ADAPT (role pipeline), not ADOPT (shooting pipeline failed vs. baseline); improvement path named: fuzzy-membership weights as continuous features + scheme/team random effect to absorb idiosyncratic systems.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the fuzzy C-means role pipeline + the ±0.2–0.5 role-pair interaction features for NBA lineup-conditioned fantasy/prop projections (adjust usage/assist/points when lineups change on injury/trade), with NGBoost role features as the supervised head and the Bayesian pair-effect estimator as an offline diagnostic.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0891-luck-skill-depth-competition-games.md

## What it is (1-2 sentences)
ArXiv 2312.04711v1 (Jerdee & Newman, U. Michigan, 2023): a Bayesian generalization of the Bradley–Terry model that separates two failure modes of standard BT — an irreducible upset floor α and a competition-depth parameter β — tested on 15 sport/game/social-hierarchy datasets.

## Key metrics/methods (formulas where given, else "not specified")
- Luck+depth BT: f_{αβ}(s) = α/2 + (1−α)/(1+exp(−βs)), where s is the score difference; α ∈ [0,1] is the irreducible upset/luck probability ("coin-flip floor"); β > 0 is depth of competition (steepness of the skill curve; interpretable as the number of ~73%-win skill levels spanning a typical pair).
- Priors: s_i ~ N(0, 1/2); α ~ Uniform(0,1); β ~ HalfCauchy⁺(0, 4). Posterior sampling via Hamiltonian Monte Carlo in Stan.
- Model comparison: 20%-holdout cross-validation, ≥50 repetitions per model per dataset; competitors: full luck+depth, depth-only, minimum-violations/luck-only, BT MLE, logistic-prior BT, SpringRank.

## Data sources named
- 15 datasets: Scrabble (n=587, m=23,477), NBA (n=240, m=10,002), chess (n=917, m=7,007), tennis (n=1,272, m=29,397), soccer (n=1,976, m=7,208), video games (n=125, m=1,951), plus human/animal social hierarchies; sources: cross-tables.com, Kaggle (NBA/chess/football), Jeff Sackmann tennis, etossed Melee. Team sports treat each team-season as a distinct competitor; ties removed (~10–30% in affected datasets). Code: github.com/maxjerdee/pairwise-ranking.

## Findings (numbers and facts, not vibes)
- Full luck+depth model was best or tied-best by held-out log-likelihood on EVERY one of the 15 datasets (within reported uncertainty); also best/equal-best under posterior-predictive probability; beat BT MLE, logistic-prior BT, depth-only, luck-only, and SpringRank.
- Depth estimates (posterior means): Scrabble β=0.68 < NBA β=1.01 < chess β=1.17 < tennis β=1.44 < soccer β=1.73 < video games β=1.77 — a quantitative ordering of how deep each competition is.
- Authors' own identifiability warning: α and β are confounded in shallow competitions — the two parameters are hardest to separate exactly where they'd be most informative.
- Caveats: random (non-chronological) holdouts (CV measures interpolation, not forecasting); no sportsbook odds, calibration analysis, CLV, or betting-return test anywhere in the paper; HMC in Stan is expensive at production scale.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fit α, β per league (per season) on game data: α becomes the league's irreducible upset rate; use model-vs-market underdog-win-rate gaps in α̂ as a mispriced-underdog diagnostic (OTHER)
- Use β to set the rating scale's steepness per league instead of a global constant (OTHER)
- Time-varying depth β(t): early-season parity vs late-season stratification as a "league stratification index" for content and modeling (INFERENCE: content use follows from the paper's improvement experiment) (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — add an explicit upset floor α and per-league depth β to the rating stack (prototype in Stan, serve via MAP/Laplace), and use α̂ as a mispriced-underdog diagnostic against market-implied win rates.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1806-seam-context-rich-player-matchup-baseball.md
## What it is (1-2 sentences)
Ledger 1806 deep-reads Wapner, Dalpiaz & Eck (arXiv:2005.07742), the SEAM methodology: for a batter–pitcher matchup with few direct observations, estimate the batted-ball location density as a convex combination of the direct matchup KDE, the batter-vs-synthetic-similar-pitchers KDE, and the synthetic-similar-batters-vs-pitcher KDE. Verdict ADAPT: the synthetic-comparable convex shrinkage is GSE's sparse-matchup template for MLB and NFL coverage matchups, with a learned similarity metric as the improvement path.
## Key metrics/methods (formulas where given, else "not specified")
- Estimator: f̂_BP = w₁f̂_direct + w₂f̂_batter-vs-synth-pitchers + w₃f̂_synth-batters-vs-pitcher, with wᵢ ≥ 0, Σwᵢ = 1; w₁ increasing in n_direct (MSE-motivated; collapses toward the direct KDE as the direct sample grows).
- Similarity kernels: Gaussian-type weights on standardized pitch-characteristic vectors (velocity, movement, spin) and batter contact-profile vectors.
- Assumptions: (a) the selected covariates (pitch characteristics, contact tendencies) sufficiently describe a player's relevant style; (b) KDE bandwidth choices are adequate for the spray-chart domain; (c) the pitch-mix metagame is stationary (not modeled).
## Data sources named
Statcast data, 2017 onward; trained through 2020, 2021 held out as the evaluation season. Schema per batted ball: batter id, pitcher id, launch location coordinates, pitch characteristics, game context. Statcast is public via Baseball Savant. No public code URL in the extracted text.
## Findings (numbers and facts, not vibes)
- Conditional coverage, nominal → empirical: SEAM 0.579/0.641/0.779 at nominal 0.50/0.75/0.90 vs batter-only 0.513/0.574/0.662 vs pitcher-only 0.549/0.595/0.713 — SEAM wins at every level. (SCHEME)
- Largest gains at the 0.90 nominal level: +0.117 over batter-only, +0.066 over pitcher-only. (SCHEME)
- Fixed-size (2,000-cell) region coverage: SEAM 0.758 vs batter-only 0.741 vs pitcher-only 0.750. (SCHEME)
- Validation design: train on 2017–2020, temporal holdout 2021; conditional validation only covers matchups with ≥ 10 balls in play in the holdout — the sparsest (and most common) matchups are excluded from the headline metric. (SCHEME)
- Ledger's acceptance gate: SEAM beats both baselines at all three nominal levels (0.579/0.641/0.779 vs next-best 0.549/0.595/0.713) and on fixed-region coverage (0.758 vs 0.750). (SCHEME)
- Leakage notes: assumes selected covariates fully capture player style; pitch-mix metagame not modeled (temporal drift risk); larger-region coverage favors SEAM partly by construction of the convex combination. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sparse-matchup shrinkage template: any player-vs-player (or player-vs-defense, receiver-vs-cornerback) projection with thin direct history should shrink toward synthetic comparables rather than a flat prior — directly applicable to MLB prop projections (batter-vs-pitcher hit/launch props) and by analogy to NFL receiver-vs-coverage matchup adjustments (SCHEME).
- Sample-size-driven convex weights: w_direct = n_direct/(n_direct + c), c tuned on validation, with the guardrail that n_direct = 0 reduces exactly to the synthetic-comparable blend (no hard failure) (SCHEME).
- Improvement experiment: learn the similarity metric (Mahalanobis/embedding distance) jointly with the convex weights by minimizing holdout negative log-likelihood; add a temporal-decay kernel on the direct sample; success = 0.90-nominal conditional coverage ≥ 0.80 (vs the paper's 0.779) with no worse calibration error (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the three-way KDE convex blend with sample-size-driven weights as GSE's matchup-adjustment template for MLB props and NFL receiver-vs-coverage matchups, backed by a player-similarity feature store (pitch characteristics / coverage tendencies / route profiles).

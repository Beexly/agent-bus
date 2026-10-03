# arxiv-program/research/2026-09-21/arxiv-deep/0520-a-bayesian-variable-selection-approach-to.md
## What it is (1-2 sentences)
Deep read of McShane et al. (2009, arXiv:0911.4503v1): a Bayesian hierarchical spike-and-slab model partitioning MLB hitters into "zeroed" vs "non-zeroed" groups per metric, yielding per-metric signal measures (fraction-of-signal players p̂₁ + negative-entropy separability) to rank which of 50 hitting metrics are genuinely consistent measures of ability. Verdict in file: ADAPT — ports to GSE as a metric-reliability screen for NFL advanced stats, re-fit per metric with NFL opportunity weights.
## Key metrics/methods (formulas where given, else "not specified")
- y_ij ~ Normal(μ + α_i, w_ij·σ²); α_i | γ_i=1 ~ Normal(0,τ²); α_i | γ_i=0 ~ Normal(0, 0.01τ²); p₁ ~ Uniform(0,1) (data-driven, automatic multiple-testing control per Scott & Berger).
- Signal proxies: p̂₁ (posterior mean fraction of signal players) and negative entropy −H = (1/m)Σ[γ̂_i log γ̂_i + (1−γ̂_i)log(1−γ̂_i)].
- Gibbs: 60,000 iterations, 10,000 burn-in, thinning every 50; full analytic conditionals.
- Comparison: Lasso on player-indicator regression (10× repeated 5-fold CV, RMSE-minimized f ∈ [0,1]); PCA on 49 metrics with permutation null bands.
## Data sources named
Kappelman 2009 (Fangraphs) database: 8,596 player-seasons / 1,575 players, 1974–2008; 50 offensive metrics; 10 metrics fit on 1,935 player-seasons / 585 players (pre-2002 unavailable). No code stated.
## Findings (numbers and facts, not vibes)
- 33/50 metrics show signal; 17 essentially none. Best: K/PA, Spd, ISO, BB/PA, GB/BIP (discipline/speed/power); BABIP lands high-signal, contradicting Studeman (2007a).
- Top posteriors: ISO population μ̂=0.142 vs McGwire 0.320 (SD 0.010), Bonds 0.304; BB μ̂=0.087 vs Bonds 0.204; Spd μ̂=4.11 vs Coleman 8.55; K-rate μ̂=0.166 vs Cust 0.388; all γ̂_i=1.00.
- Lasso% vs p̂₁ agree on normal metrics (36/50); disagree on 14 skewed ones (Lasso attributes more signal — authors argue theirs is more cautious).
- PCA: only ~8 PCs exceed permutation null (49 metrics); ~6–7 significant PCs among 32 high-signal metrics — "only about six or seven truly different [metrics] among those 32."
- Limitations: retrospective only (no forward test); era pooling 1974–2008 without era terms; metric-by-metric fits ignore cross-metric dependence.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a principled metric-reliability screen — rank GSE's candidate metrics (EPA/play, CPOE, PRWR, RYOE, pressure rate, etc.) by within-player/team consistency before weighting them in the engine; feeds feature selection (high-signal full weight, low-signal shrunk/dropped) and the orthogonal-core PCA de-duplicates the feature basis.
## Engine-actionable? (yes/no + one-line what)
yes — fit the two-component mixture per GSE metric on nflverse 2010–2024 player-/team-seasons with w_ij = 1/opportunities; adopt if Spearman rank correlation between (p̂₁,−H) ranking and observed year-over-year r² ranking ≥ 0.7.

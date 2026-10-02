# arxiv-program/research/2026-09-21/arxiv-deep/0556-bayesically-fair-a-bayesian-ranking-of.md
## What it is (1-2 sentences)
Full-paper brief of a hierarchical Beta-Binomial ranking of the Olympic medal table (MacDermott, Scarrott & Ferguson, arXiv:2510.14723v1) that shrinks noisy small-country per-capita medal rates toward the global mean with uncertainty-aware credible intervals. Verdict: ADAPT — the Olympic ranking is irrelevant to GSE, but the hierarchical shrinkage discipline should be standardized across all of GSE's small-sample NFL rate features.

## Key metrics/methods (formulas where given, else "not specified")
- M_{i,c} ~ Poisson(λ_{i,c}); λ_{i,c} = n_c p_{i,c} (athletes winning exactly i medals per country).
- p_c ~ Beta(α,β); α ~ U(0,1); β ~ U(0,108); q_2,q_3,q_4 ~ U(0,1) (global multi-medal conditional probabilities).
- E(M_c/n_c) = p_c(1 − q_2 + 2q_2(1−q_3) + 3q_2 q_3(1−q_4) + 4q_2 q_3 q_4).
- Fitted by Gibbs sampling (rJAGS); ranking by posterior mean rank of expected per-capita rate; posterior medians + 95% CIs reported.

## Data sources named
IOC Olympic medal counts and UN population data for Paris 2024 (1,039 medals, ~8B global population → baseline rate 1.3×10⁻⁷), plus five prior Games back to Athens 2004 for stability comparisons. Shiny app exposes rankings (MacDermott et al. 2025); no raw-data download stated.

## Findings (numbers and facts, not vibes)
- Bayesian top 3 (Paris 2024): New Zealand (20 medals; posterior median 3.31/million, 95% CI 2.05–4.89), Australia (53; 1.80, CI 1.32–2.31), Hungary (19; 1.83, CI 1.06–2.89).
- Shrinkage examples: Grenada observed 17.09/million (per-capita rank 1) → posterior median 2.42 (Bayesian rank 5), CI 0.34–8.16; Dominica 15.15 (rank 2) → 1.10 (rank 21), CI 0.06–5.64; Saint Lucia 11.11 (rank 3) → 0.96 (rank 24), CI 0.05–4.98.
- USA: 126 medals but rank 51 (0.34/million, CI 0.29–0.41); China rank 76 (0.06/million, CI 0.05–0.08); Ireland rank 15 (7 medals, 1.01/million).
- Claim: Bayesian ranking is more stable across Games than per-capita or Duncan-Parece U-index orderings (stated qualitatively); little prior sensitivity (online appendix).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (feature engineering discipline): replace raw empirical small-sample NFL rates (kicker FG% by distance bin, red-zone TD%, 3rd/4th-down conversion, turnover recovery, QB aggressiveness splits) with hierarchical Beta-Binomial posterior means + carry posterior CI width as an explicit uncertainty feature.
- TRUST-SIGNAL: honest uncertainty — CI widths down-weight noisy rates in the matchup model rather than treating all point estimates equally.
- COACHING (speculative, the brief's improvement experiment): covariate-informed shrinkage (shrink toward regression prediction from offensive EPA/OL rankings, not the league mean) could inform coaching/scheme tier profiling — not in the paper.

## Engine-actionable? (yes/no + one-line what)
Yes — build one shared shrink.py module applying hierarchical Beta-Binomial empirical-Bayes shrinkage (hyperparameters learned from the league pool, refit weekly) to every small-sample rate in the feature stack, with posterior CI width as an uncertainty feature; gate: posterior-mean predictor beats raw first-half rates on second-half red-zone TD% log-loss by ≥0.01 in ≥7 of 10 seasons (2015–2024, nflverse).

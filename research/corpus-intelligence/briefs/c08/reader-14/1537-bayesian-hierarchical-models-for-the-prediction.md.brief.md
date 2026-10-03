# docs/arxiv-program/research/2026-09-21/arxiv-deep/1537-bayesian-hierarchical-models-for-the-prediction.md
## What it is (1-2 sentences)
Deep-read ledger entry on Gabrio (2019, arXiv:1911.08791): a joint three-module Bayesian hierarchical model for volleyball — Poisson scoring intensities + P(5 sets) + P(home win) — with efficiency covariates and scaled inverse-Wishart multilevel correlation, fit on Italian women's Serie A1 2017-18. Verdict: ADAPT — joint factorization template for NFL margin + win-probability + totals modeling with unit-level (offense/defense/special-teams) efficiency covariates.

## Key metrics/methods (formulas where given, else "not specified")
- y_hi ~ Poisson(theta_hi), y_ai ~ Poisson(theta_ai), conditionally independent given theta.
- log theta_hi = mu + lambda + att_{h(i)} + def_{a(i)}; log theta_ai = mu + att_{a(i)} + def_{h(i)} (Poisson log-normal; attack of one team + defense of opponent).
- att_{h(i)} = alpha_{0h(i)} + alpha_{1h(i)} att^eff_{hi} + alpha_{2h(i)} ser^eff_{hi}; def analogue with defense/block efficiencies.
- d^s_i (5 sets) ~ Bernoulli(pi^s_i); logit pi^s_i = gamma_0 + gamma_1 y_hi + gamma_2 y_ai. d^m_i (home win) ~ Bernoulli(pi^m_i); logit pi^m_i = eta_0 + eta_1 y_hi + eta_2 y_ai + eta_3 d^s_i.
- Joint: p(y) * p(d^s|y) * p(d^m|y, d^s). Multilevel: alpha ~ Normal(M_alpha, Sigma_alpha^-1), beta ~ Normal(M_beta, Sigma_beta^-1); scaled IW prior vs basic (independence, rho=0).
- Fit in JAGS (2 chains x 20,000 iterations, 10,000 burn-in); posterior predictive replication (1000 draws).

## Data sources named
Italian women's volleyball federation website, Serie A1 2017-18 regular season: 132 matches, 12 teams; per team-match points, sets, serve/attack/defense/block efficiencies; JAGS code in paper's Appendix A.

## Findings (numbers and facts, not vibes)
- Posterior predictive replications closely match observed season totals: e.g., Conegliano observed 1960 scored / 1696 conceded / 17 wins / 50 points vs replicated 1960 / 1706 / 18 / 50; Novara 1987/1776/17/51 vs 1963/1776/17/51; Scandicci 1865/1556/18/50 vs 1858/1578/18/51.
- Scaled IW only slightly closer than basic for some teams; rank probabilities vary 1-7% between specs — negligible gain for real complexity.
- No Brier/log-loss/accuracy numbers stated; validation is posterior predictive checking, not out-of-sample forecasting; efficiency covariates are in-game (post-treatment), so the model cannot generate pre-match predictions as written.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: joint factorization architecture — one posterior producing coherent P(win), P(cover), P(over) instead of separate heads; GSE currently predicts spread/total/moneyline from separate heads.
- OTHER: explicitly reject the scaled-IW extension (paper's own result: negligible gain) and reject any in-game covariates for pre-game prediction (post-treatment leakage).
- COACHING: efficiency covariates (attack/serve, defense/block) are the volleyball analogue of pre-game unit EPA ratings (INFERENCE).

## Engine-actionable? (yes/no + one-line what)
yes — prototype the joint three-module factorization (Poisson/negative-binomial points, margin-bucket Bernoulli, win Bernoulli) on pre-game EPA-based unit ratings, gate adoption on beating independent-module Brier on >=2 of moneyline/spread/total on 2025 held-out NFL games.

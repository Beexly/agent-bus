# arxiv-program/research/2026-09-21/arxiv-deep/0556-bayesically-fair-a-bayesian-ranking-of.md
## What it is (1-2 sentences)
arXiv:2510.14723v1 — a hierarchical Bayesian (Beta-Binomial/Poisson) ranking of Olympic NOCs by long-run medals-per-capita, using shrinkage toward the global mean to kill small-sample noise. Verdict in the file: ADAPT — the Olympic ranking itself is irrelevant, but the hierarchical shrinkage discipline should be standardized across GSE's small-sample NFL rate features.
## Key metrics/methods (formulas where given, else "not specified")
- M_{i,c} ~ Poisson(λ_{i,c}); λ_{i,c} = n_c · p_{i,c}; i = 1,2,3,4+ medals won by an athlete.
- p_{1,c} = p_c(1−q_2); p_{2,c} = p_c q_2(1−q_3); p_{3,c} = p_c q_2 q_3(1−q_4); p_{4,c} = p_c q_2 q_3 q_4; country effect only through p_c = P(X_c ≥ 1); q's global.
- Priors: p_c ~ Beta(α,β); α ~ U(0,1); β ~ U(0,108); q_i ~ U(0,1) independent; fitted by Gibbs sampling (rJAGS).
- E(M_c/n_c) = p_c(1 − q_2 + 2q_2(1−q_3) + 3q_2 q_3(1−q_4) + 4q_2 q_3 q_4).
- Ranking: posterior mean rank of E(M_c/n_c); posterior median rates + 95% CIs reported. Prior-sensitivity tested in appendix — "little sensitivity found."
## Data sources named
IOC medal counts and UN population data for Paris 2024 (1,039 medals; ~8B population → baseline 1.3×10⁻⁷) plus five prior Games back to Athens 2004; Shiny app (MacDermott et al. 2025) exposes rankings; no raw-data download stated. No code repo stated.
## Findings (numbers and facts, not vibes)
- Paris 2024 Bayesian top 3: New Zealand (20 medals; posterior median 3.31/million, 95% CI 2.05–4.89), Australia (53; 1.80, CI 1.32–2.31), Hungary (19; 1.83, CI 1.06–2.89).
- Shrinkage examples: Grenada observed 17.09/million (per-capita rank 1) → posterior median 2.42 (Bayesian rank 5), CI 0.34–8.16; Dominica 15.15 (rank 2) → 1.10 (rank 21), CI 0.06–5.64; Saint Lucia 11.11 (rank 3) → 0.96 (rank 24), CI 0.05–4.98.
- USA: 126 medals but Bayesian rank 51 (0.34/million, CI 0.29–0.41); China: rank 76 (0.06/million, CI 0.05–0.08); Ireland rank 15 (7 medals, 1.01/million).
- Claim: Bayesian ranking more stable across Games than per-capita or U-index orderings (stated qualitatively).
- Limitations noted in file: no temporal pooling in the likelihood (stability post hoc); "country effect only through p_c" rules out country-specific multi-medal pipelines (untested); population is crude exposure (funding/delegation size ignored); posterior-mean-rank vs posterior-median-rate give different orders (ad hoc); no predictive validation.
- GSE implementation spec in file: inventory every small-sample rate in the feature stack (kicker FG% by distance bin, team red-zone TD%, 3rd/4th-down conversion, turnover recovery rates, QB aggressiveness splits) → hierarchical Beta-Binomial posterior means with (α,β) learned from the league pool each season (empirical Bayes); carry posterior CI width as an explicit uncertainty feature; weekly refit as the season accumulates. Effort: 1–2 days (one shared `shrink.py` module + wiring).
- Reproducible test: nflverse 2015–2024; team red-zone TD% through week 8 each season; log-loss of second-half red-zone TD% predicted by raw first-half rate vs hierarchical posterior mean.
- Acceptance gate: ADOPT league-wide hierarchical shrinkage if the posterior-mean predictor beats the raw rate on second-half log-loss by ≥0.01 in ≥7 of 10 seasons. REJECT otherwise.
- Improvement experiment: covariate-informed priors — shrink toward a regression prediction (e.g., red-zone TD% prior = f(offensive EPA, OL rankings)) rather than the league mean; test vs plain league-mean shrinkage.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — feature-engineering discipline (small-sample rate shrinkage), not a behavioral or scheme finding. The improvement-experiment note (shrink toward OL rankings) touches OL only as an input prior, not as an OL analysis — tagged OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build the shared hierarchical Beta-Binomial shrinkage module for all small-sample NFL rates (red-zone, 3rd-down, kicker, turnover luck) with weekly refit, gated on the ≥0.01 log-loss win in ≥7/10 seasons.

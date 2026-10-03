# arxiv-program/research/2026-09-21/arxiv-deep/1539-research-on-dynamic-analysis-and-prediction.md
## What it is (1-2 sentences)
A 2024 arXiv paper analyzing the 2023 Wimbledon men's final with a "Bayesian" veneer over frequentist logistic regression, hand-tuned momentum scores, and subjective AHP weighting. Verdict REJECT — no genuine Bayesian inference (no priors/posteriors/MCMC), no code, no named data sources, no proper scoring.
## Key metrics/methods (formulas where given, else "not specified")
- Empirical Bayes ratio only: P(W|B) = P(B|W)P(W)/P(B); reported P(win|serve first) = 0.6734.
- Momentum score P(n) = a1·M(n) + a2·N(n) with hand-set constants (α1=0.0012, β1=0.0025, w1=0.7, w2=0.3); exponential streak bonuses e^{2k}/e^{k}.
- AHP consistency ratio CR = 0.085 < 0.1; poly22 R² = 0.7599; momentum–win-rate cosine similarity = 0.0923 (very low, undermines claimed correlation).
## Data sources named
Point-by-point data of the 2023 Wimbledon gentlemen's final (Alcaraz–Djokovic, "match 1701"); "other competition datasets" and women's tennis data (both unnamed).
## Findings (numbers and facts, not vibes)
- Claimed classification accuracy 0.913–0.932, macro-F1 0.912, micro-F1 0.931 on 4-class labels derived from the same Bayes computation (circular).
- No out-of-sample predictive numbers, no Brier/log-loss, no baselines beaten.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — rejected file, no usable content.
## Engine-actionable? (yes/no + one-line what)
no — rejected paper; replacement read already assigned (arXiv:2203.10706, ledger 1546).

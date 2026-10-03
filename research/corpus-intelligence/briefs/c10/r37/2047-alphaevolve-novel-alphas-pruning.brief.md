# arxiv-program/research/2026-09-21/arxiv-deep/2047-alphaevolve-novel-alphas-pruning.md
## What it is (1-2 sentences)
Cui et al. (2021, arXiv:2103.16196): an AutoML-Zero-style evolutionary framework for discovering a new class of quantitative "alphas" (programs over scalar/vector/matrix operands), made tractable by a redundancy-pruning + fingerprint-caching accelerator and mined into weakly-correlated sets using a 15% Pearson-correlation cutoff protocol.
## Key metrics/methods (formulas where given, else "not specified")
- Return: R = (P_t − P_{t−1})/P_{t−1}. Portfolio: long top-50 / short bottom-50 predicted returns; SR = (R̄_p − R_r)/σ_p, R_r = 0, annualized over 252 days.
- Weak correlation gate: |Pearson(portfolio returns)| ≤ 15% (hedge-fund standard per Kakushadze 2016).
- Redundancy pruning: represent alpha as a graph (operators=edges, operands=nodes; prediction s_1 = root); recursively mark nodes redundant unless a leaf is the input feature matrix m_0; prune ops with redundant output operands (overwritten assignments, dead branches, alphas never reading m_0). Fingerprint = hash of pruned op-string; cache hit reuses stored fitness.
- Search: population 100, tournament 10, per-op mutation prob 0.9; 1-epoch fitness evals during evolution.
- Alpha class caps: 10 scalar, 16 vector, 4 matrix operands; ops per function capped 21/21/45. Mining in rounds, 60h time budget per round, keep best-SR alpha per round into set A.
## Data sources named
NASDAQ 5-year daily data 2013–2017 (1,220 days → 988 train / 116 validation / 116 test; 1,026 stocks after filtering). 13 features: close-price MAs (5/10/20/30d), close volatilities (5/10/20/30d), OHLCV; per-stock max-normalized. Sector labels for relational injection. Target: next-day stock return.
## Findings (numbers and facts, not vibes)
- Round 0: evolved domain-initialized alpha SR 21.323797, IC 0.067358, correlation with existing set 0.030301; vs GA alpha_G_0 SR 13.034052, IC 0.048853; starting domain alpha SR 4.111784, IC 0.013159.
- Weak-correlation rounds: AlphaEvolve stays positive every round (SR 13.58 / 15.07 / 9.50 across rounds 1–4; ICs 0.028–0.067); the GA collapses: alpha_G_2 SR −1.936161 (IC 0.000779), alpha_G_3 SR −1.971355 — search stopped at round 4.
- All four initializations (domain-expert alpha, no-op, random, 2-layer NN) reach competitive alphas (round-0 SRs 10.7–21.3): low initialization sensitivity.
- Limitations noted in file: validation set double-dipped (fitness AND 15% cutoff); SR 21.3 is annualized from ~5 months of validation data; no transaction costs; 1-epoch fitness rank-preservation unvalidated.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Redundancy-pruning + fingerprint caching for program-based signal search (OTHER)
- 15% correlation mining protocol for weakly-correlated signal sets (OTHER)
- Selective (not blanket) relational injection, e.g., division/conference grouping ops optional to the search (SCHEME)
## Engine-actionable? (yes/no + one-line what)
Yes — implement the pruner+fingerprint cache to accelerate program-based sports signal miners (2–5× fewer wasted evals per file estimate) and run 15%-cutoff correlation rounds on signal PnL to build the weakly-correlated signal set.

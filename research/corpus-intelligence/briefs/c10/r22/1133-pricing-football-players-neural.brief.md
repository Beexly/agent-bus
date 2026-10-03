# arxiv-program/research/2026-09-21/arxiv-deep/1133-pricing-football-players-neural.md
## What it is (1-2 sentences)
A feedforward neural network (Dey et al. 2017, arXiv:1711.05865) that predicts a FIFA 2017 footballer's price from 41 game attributes, framed as classification over 119 quantized price bands. The source ledger verdict is ADAPT — the price-tier classification framing is a reusable recipe for valuation; the specific network and its 6.32% error are FIFA-2017 artifacts.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (standard MLP/softmax cross-entropy implied). Architecture: [41, 2000, 1500, 500, 119], ReLU hidden layers, softmax over 119 price classes; lr 0.01, decay 0.001, momentum 0.99, L2 0.0005, batch size 20, early stopping patience 10. No baselines reported (no linear model, no GBM).
## Data sources named
FIFA 2017 player database: 17,240 players, 41 features (attributes + age, position), goalkeepers excluded. Split: 10,914 train / 1,926 validation / 2,500 test (random). Target: price quantized into 119 classes. Code stated: https://github.com/souryadey/footballerprice.git. FIFA prices are subjective game-design valuations, not market transactions.
## Findings (numbers and facts, not vibes)
- Top-5 accuracy: 87.2%.
- Average percentage price error: 6.32%.
- No baseline numbers reported; the 2000-1500-500 MLP is heavily overparameterized on 10,914 training rows — a regularized linear model or GBM might match the error (untested).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Price-band classification framing (OTHER): predicting which salary/value tier a player belongs in is a coarser, potentially more robust formulation than regressing exact values — applies to DFS salary screening and mispricing flags.
- 6.32% error measures imitation of EA's pricing team, not valuation skill (TRUST-SIGNAL): don't import headline numbers without checking what the target actually is.
## Engine-actionable? (yes/no + one-line what)
Yes — build a value-tier classifier for NFL DFS (quantize DK salaries into ~20 tiers, train gradient boosting on nflverse + matchup features) as a pre-filter before the optimizer and mispricing flag, gated on beating regression-then-quantize by ≥10% relative tier error on a 4-week holdout.

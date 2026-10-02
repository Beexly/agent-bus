# docs/arxiv-program/research/2026-09-21/arxiv-deep/0618-deep-gamblers-learning-to-abstain.md
## What it is (1-2 sentences)
Ledger entry on arXiv:1907.00208v2 (Liu et al., "Deep Gamblers: Learning to Abstain with Portfolio Theory"), which adds an (m+1)th "reservation" class to a classifier so it learns to abstain in one end-to-end training run. **Verdict in file: ADAPT** — the reservation-class abstention mechanism is a directly portable pick-selection / no-bet filter for GSE.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: max_w Σ_i log[ f_w(x_i)_{j(i)} · o + f_w(x_i)_{m+1} ], where j(i) is the true label index, o > 0 the reward hyperparameter; softmax over m classes + reservation neuron.
- Inference rule: abstain when reservation probability exceeds the largest class probability; otherwise predict argmax class.
- Reward-range property (paper's stated claim): meaningful rewards satisfy 1 < o < m; o > m → never abstain; o < 1 → always abstain.
- Validation: coverage-vs-selective-error curves, sweeping o; baselines: softmax-response thresholding, Bayesian (MC) dropout, SelectiveNet.
- PyTorch snippet of the gambler loss printed in the paper's appendix; no repository URL stated.
## Data sources named
Vision benchmarks only (nothing sports): SVHN (73,257 train / 26,032 test), CIFAR-10 (50,000 train / 10,000 test), CIFAR-100 and cats-vs-dogs variants referenced; VGG16-variant CNN backbone.
## Findings (numbers and facts, not vibes)
- SVHN: at 95% coverage, selective error 1.36 ± 0.02; at 90% coverage, 0.76 ± 0.05 — best among compared methods at low coverage.
- CIFAR-10: same pattern — Deep Gamblers wins at low coverage (high abstention), competitive elsewhere (exact CIFAR table values not extracted in ledger).
- Trade-off: tuning o trades full-coverage error against low-coverage selective error; no single o dominates everywhere.
- Practical caveat: low reward values required a cross-entropy warmup phase before the gambler loss was stable.
- Never stress-tested under temporal distribution shift (vision benchmarks are i.i.d.) — the regime that matters for sports betting.
- Ledger caution: abstention on vision data = "image is ambiguous"; on picks it must mean "edge is small" — the paper never models expected value; for GSE, abstention must be calibrated against edge, not model confusion alone.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Reservation-class no-bet filter (new capability; no principled abstain mechanism currently in GSE): TRUST-SIGNAL
- Reward o as coverage/selective-error tuning dial (analogous to bankroll manager tuning fire frequency): TRUST-SIGNAL
- o as learnable function of market features (thin/volatile markets → abstain more): OTHER (pick selection)
## Engine-actionable? (yes/no + one-line what)
Yes — add a reservation head with the gambler loss as a post-hoc no-bet filter on frozen engine probabilities over the 3,411-pick DB; ADOPT iff time-ordered test-window retained-picks ROI beats all-picks baseline by ≥2 points with ≥60% retention.

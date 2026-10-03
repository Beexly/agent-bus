# docs/arxiv-program/research/2026-09-21/arxiv-deep/0618-deep-gamblers-learning-to-abstain.md

## What it is (1-2 sentences)
Ledger of arXiv:1907.00208v2 (Ziyin Liu et al.), "Deep Gamblers: Learning to Abstain with Portfolio Theory" — adds an (m+1)th "reservation" (abstain) class to a classifier trained end-to-end with a Kelly-style portfolio objective, letting the model learn to say "I don't know." Ledger verdict: ADAPT — a reservation-head abstention filter for GSE's pick-selection lane, with the reward parameter o as the coverage/error trade-off dial.

## Key metrics/methods (formulas where given, else "not specified")
- Core objective: max_w Σ_i log[ f_w(x_i)_{j(i)} · o + f_w(x_i)_{m+1} ], where j(i) is the true label index, f_w(x)_{m+1} is the reservation (abstention) probability, and o > 0 is the reward hyperparameter.
- Reward-range property: meaningful rewards satisfy 1 < o < m; if o > m the network never abstains; if o < 1 it always abstains.
- Inference rule: abstain when the reservation probability exceeds the largest class probability; otherwise predict the argmax class.
- Low reward values required a cross-entropy warmup phase before the gambler loss was stable (practical caveat).
- Validation: coverage-vs-selective-error curves; baselines: softmax-response thresholding, Bayesian (MC) dropout, SelectiveNet.

## Data sources named
SVHN (73,257 train / 26,032 test), CIFAR-10 (50,000 train / 10,000 test), CIFAR-100 and a cats-vs-dogs variant. Model backbone: VGG16-variant CNN. All public image benchmarks; no sports data.

## Findings (numbers and facts, not vibes)
- SVHN: at 95% coverage, selective error 1.36 ± 0.02; at 90% coverage, 0.76 ± 0.05 — best among compared methods at low coverage.
- CIFAR-10: same pattern — Deep Gamblers wins at low coverage (high abstention), competitive elsewhere (exact CIFAR table values not extracted in the ledger).
- Trade-off stated by authors: tuning o trades full-coverage error against low-coverage selective error; no single o dominates everywhere.
- Ledger's adaptation note: reward o re-tuned per task; paper gives no automatic rule for choosing it.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Reservation-class abstention as a principled no-bet filter for the publish gate — abstention calibrated against edge, not model confusion: TRUST-SIGNAL
- Reward o as a bankroll-manager-style dial for how often the engine fires: TRUST-SIGNAL
- Caveat: method never stress-tested under temporal distribution shift (vision data i.i.d.; sports data drifts season to season): OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — fit a gambler-loss reservation filter on the 3,411-pick engine DB and adopt iff retained-picks ROI beats all-picks ROI by ≥2pp with ≥60% retention on a time-ordered 70/30 test split (gate set before running).

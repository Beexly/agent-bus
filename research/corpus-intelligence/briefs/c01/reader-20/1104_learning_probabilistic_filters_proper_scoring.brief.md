# arxiv-program/research/2026-09-21/arxiv-deep/1104-learning-probabilistic-filters-proper-scoring.md
## What it is (1-2 sentences)
Deep read of Bach, Baptista, Bröcker & Chen (2026), "Learning Probabilistic Filters with Strictly Proper Scoring Rules" (arXiv:2606.26497v1): a neural-network ensemble filter for state estimation in dynamical systems trained with strictly proper scoring rules instead of log-likelihood. Verdict in-file: **ADAPT** — applicable to GSE's Bayesian/state-space forecasting lane.
## Key metrics/methods (formulas where given, else "not specified")
- Energy score: E||x−y||^β − (1/2)E||x−x′||^β, strictly proper for β∈(0,2), where y is the observation-target and x,x′ are independent ensemble samples.
- Neural network ensemble filter: network maps an ensemble of prior-state particles + new observation to a filtered posterior ensemble; training objective is the energy score over training trajectories (not log-likelihood).
- Architecture/hyperparameters: not fully recorded in read (layer widths not stated; re-derive from paper appendix).
## Data sources named
- Simulated trajectories only, no real-world data: linear-Gaussian (state dim 20, observation dim 10, ensemble N=10); Lorenz '63 (3/1); Lorenz '96 (40/10). Training: M=8192 trajectories of length J=60. Reference: doubling-angle bootstrap particle filter with 10^6 particles. Code: https://github.com/wispcarey/Proper-Scoring-Ensemble-Filter.
## Findings (numbers and facts, not vibes)
- Results primarily qualitative/figure-based: trained NN filter (trained at N=30) matches or beats classical filters (bootstrap particle filter, ensemble Kalman variants) at much smaller ensemble sizes — N=30 NN competitive against classical N up to 3000 (particle-filter reference used 10^6 particles). Exact numeric scores not recorded in this read — pull from paper figures before citing as benchmarks.
- Limitations: realizability assumption (trained on the same simulator it is tested on — simulator mismatch is the main deployment risk); low-dim systems only (3–40 dim, high-dim scaling unproven); finite-network consistency caveats; baseline grid-search effort unstated (classical filters may be under-tuned); no real-world sports data used.
- Acceptance gate: adopt into GSE game-state module if energy-score-trained NN filter matches particle filter within 5% energy-score on simulated NFL game-state trajectories with N≤100 at inference; reject if it needs N≥1000 or simulator mismatch degrades >10%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: probabilistic live game-state filtering (score/timeouts/field-position dynamics) for the live-pick engine; complements state-space/Bayesian lane; no QB/coaching/OL content.
## Engine-actionable? (yes/no + one-line what)
yes — prototype an energy-score-trained neural ensemble filter as a probabilistic live game-state updater (train on simulated NFL game-state trajectories, benchmark vs particle filter per gate, attack realizability with a misspecified-simulator + online recalibration head experiment).

# arxiv-program/research/2026-09-21/arxiv-deep/1927-statistics-and-samples-in-distributional-reinforcement-learning.md
## What it is (1-2 sentences)
A unifying theory paper for distributional RL (arXiv:1902.08102): every DRL algorithm = a statistical estimator (set of statistics of the return distribution) + an imputation strategy (rule generating a distribution consistent with those statistics). Proves the only finite statistic sets that are exactly learnable via Bellman updates ("Bellman closed") are moment spans, shows C51 and QR-DQN are NOT Bellman closed, and builds an expectile-based algorithm (EDRL/ER-DQN) that is mean-consistent.

## Key metrics/methods (formulas where given, else "not specified")
- General statistic form: s(μ) = E_{Z∼μ}[h(Z)]
- Theorem 4.3 (Bellman-closedness characterization): the only finite sets of statistics of this form that are Bellman closed are those whose linear span equals the span of moment functionals {μ ↦ E_{Z∼μ}[Z^l] | l=0,…,L} for some L ≤ K
- Lemma 4.4: CDRL (C51) and QDRL (QR-DQN) statistic sets are NOT Bellman closed — "the learnt values of statistics ... need not correspond exactly to the true underlying values for the MDP (even in tabular settings)"
- Definition 4.5: ε-approximate Bellman closedness (average, not uniform, approximation error)
- EDRL: learn K expectiles via asymmetric least squares, with a sample-based imputation strategy (SciPy root-finding/optimization per update, Eq. 7–8) to construct Bellman targets consistent with learned expectiles; EDRL's imputation preserves the mean — C51 (support clipping) and QR-DQN (quantiles miss tails) do not
- ER-DQN: EDRL update + QR-DQN-style DQN architecture; experiments use 11 expectiles
- Metrics: expectile estimation error vs Monte Carlo ground truth (α=0.05, 30,000 steps); greedy-policy correctness on a 5-state MDP; Atari-57 mean/median human-normalized scores (3 seeds)

## Data sources named
(a) Tabular N-Chain (length 15; forward/backward actions with 0.95/0.05 transition noise; rewards −1/+1 at ends; γ=0.99; ground truth from 1,000 Monte Carlo rollouts); (b) 5-state MDP with exponential terminal reward distributions (Figure 7); (c) ALE Atari-57 (DQN-style architecture, 3 seeds, re-ran DQN and QR-DQN). No code stated in paper.

## Findings (numbers and facts, not vibes)
- N-Chain (Figures 4/5): EDRL with sample imputation "accurately represent[s] the true return distribution, even after many Bellman updates through the chain, and does not exhibit the collapse observed with the naive approach"; expectile estimation error "vastly reduced" with imputation (also shown for a Huber-quantile variant, Figure 6).
- 5-state MDP (Figure 7): "Due to a lack of mean consistency both CDRL and QDRL learn a sub-optimal greedy policy" (CDRL: true support outside [0,2] bins; QDRL: quantiles miss tails). "In contrast, EDRL correctly learns the means of both return distributions, and so is able to act optimally."
- Atari-57 (Figure 8, 3 seeds): "In terms of mean human normalised score, ER-DQN represents a substantial improvement over both QR-DQN and the naive version of ER-DQN that does not use an imputation strategy" — with only 11 expectiles vs QR-DQN's 200 quantiles. Exact mean/median numbers are figure-only (not quoted in extracted text).
- Per-update SciPy imputation cost described as low ("additional training overhead ... is low") with K=11.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the permanent, algorithm-agnostic takeaway is the mean-consistency diagnostic — compare a distributional staking critic's implied mean weekly P&L per stake bucket against Monte Carlo realized means; flag stake actions where |implied − realized| > 0.5u. A mean-inconsistent critic misranks stakes (Figure 7 is exactly a two-action choice where C51/QR-DQN pick wrong).
- OTHER: expectile-based distributional critic (ER-DQN-style, K=11 expectiles, asymmetric least squares + sample imputation) as a candidate critic for the offline staking policy; keep quantile heads for public-facing P(loss) reporting since expectiles are less interpretable.

## Engine-actionable? (yes/no + one-line what)
yes — implement the mean-consistency diagnostic as a permanent gate on all distributional staking critics, and test an expectile-head critic (K=11) against C51/QR-DQN/IQN on logged 2021–2024 picks (mean-consistency error + greedy-policy ROI on 2024 holdout); adopt expectiles only if lowest mean-consistency error with ROI within 1pp of the best quantile head.

# arxiv-program/research/2026-09-21/arxiv-deep/0011-when-greedy-sampling-explores-klregularized-contextual.md
## What it is (1-2 sentences)
Theory paper (Zichen Wang, Haoyang Hong, Huazheng Wang, arXiv:2609.13564, 2026) proving greedy Gibbs sampling achieves strong regret guarantees in KL-regularized contextual bandits without eluder-dimension dependence, under reward feedback (RF-GS) and preference feedback (ORLHF-GS, Bradley–Terry). The reader's verdict was ADAPT — a direct hit on GSE's open "RL/bandits for pick selection" gap, but validated only on synthetic data.
## Key metrics/methods (formulas where given, else "not specified")
- Greedy policy: π_t(a|x) ∝ π_ref(a|x)·exp(η·R̂_t(x,a)) (Eq. 4), R̂_t = least-squares reward estimate over history.
- KL-regularized regret: Reg_RF(T) := Σ_{t=1}^{T} (J_RF(π*) − J_RF(π_t)) (Eq. 2).
- Regret decomposition (Lemma 4, Eq. 5): Reg_RF(T) ≤ η·Σ_{t=1}^{T} S_t.
- Theorem 1: Reg_RF(T) = O(η e^{2η} log T log(N_R T/δ)); GP: O(η e^{3η} log T log(N_P T/δ)); BT: O(η e^{2η} log T log(N_R T/δ)).
- Trade-off: greedy beats UCB when e^{2η} log T ≲ d_RF (eluder dim); UCB wins at large η (weak regularization).
- BT model: P*(x,a¹,a²) = σ(R*(x,a¹) − R*(x,a²)), σ(z) = (1+e^{−z})^{−1}.
## Data sources named
No real dataset. Synthetic contextual bandit only: |X|=3 contexts, |A|=3 actions, |R|=5 reward functions, horizon T=5000, 10 seeds, η ∈ {0.5, 1, 3, 10, 30, 100, 300, 500, 1000, 2000}.
## Findings (numbers and facts, not vibes)
- RF-GS achieves "substantially lower regret" than K-UCB for small/moderate η on the synthetic bandit; as η increases, Gibbs policy concentrates, RF-GS under-explores, K-UCB "eventually outperforms."
- GP result sharpens Wu et al. 2025 by removing their η³e^{9η} term (Corollary: Õ(min{η d_GP, √(d_GP T)})).
- No numeric regret values reported in text (figure only); crossover η value not stated.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Contextual-bandit pick selection with learning-to-abstain (gap list item 4: selection-under-budget) — OTHER.
- η-annealing improvement experiment: strong regularization early, weaker as estimates improve — OTHER.
- BT preference-feedback results adjacent to RLHF/DPO literature — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build a greedy-Gibbs pick-selection layer (arms = candidate edges, context = slate features, reward = realized CLV) and accept only if it beats ε-greedy by ≥2% cumulative CLV on a 2024–2025 replay with ≥500 decisions.

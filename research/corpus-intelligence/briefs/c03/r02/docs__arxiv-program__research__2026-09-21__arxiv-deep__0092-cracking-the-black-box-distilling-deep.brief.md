# docs/arxiv-program/research/2026-09-21/arxiv-deep/0092-cracking-the-black-box-distilling-deep.md
## What it is (1-2 sentences)
An arXiv deep-read ledger (2026-09-21) of Sun et al.'s "Cracking the Black Box: Distilling Deep Sports Analytics" (arXiv:2006.04551v4, KDD 2020), which trains transparent linear-model trees via mimic learning to reproduce a deep-RL action-value model in hockey/soccer, with novel fast split-point heuristics and counterfactual "action replacement" augmentation. **Verdict in the ledger: ADAPT** — mimic distillation is directly portable as an interpretability/debugging sidecar for GSE's engine models, requiring full NFL reimplementation.

## Key metrics/methods (formulas where given, else "not specified")
- Black box: deep RL action-value net (input → LSTM → two 1000-neuron ReLU FC layers → output), SARSA (λ=1), 10-event input window; outputs three action values: P(home scores next), P(away scores next), P(no more goals); action impact = `Q(S_t,A_t) − Q(S_{t−1},A_{t−1})`
- SARSA loss: `L_t(θ_t) = E[(R_t + Q̂(S_{t+1},A_{t+1}; θ_t) − Q̂(S_t,A_t; θ_t))²]`; `θ_{t+1} = θ_t − α·∇_θ L_t(θ_t)`
- Mimic learner: linear model tree, leaf models `ŷ = Σ_i (w_i · x_i) + b`; splits minimize weighted child y-variance; minimum 100 records/child
- Action replacement augmentation (novel): query the net for soft label Q(S,A′) on counterfactual action A′ ≠ A (e.g., replace a pass sequence with a shot) to expose the tree to settings absent from real play
- Fast split-point heuristics (novel): Sorting+Variance Reduction, Sorting+T-test (Welch t-score = `(μ_1 − μ_2) / sqrt(σ_1²/N_1 + σ_2²/N_2)`), Iterative Segmented Regression vs Gaussian-Mixture baseline; splitting criterion `Variance(s) − [(N_{st}/N_s)·Variance(s_t) + (N_{sf}/N_s)·Variance(s_f)]`
- Pruning: `E_v = argmin_w Σ_j (y_j − (w·x_j)) + λ·R(w)`, R = L0 (smaller tree) or L1 (better fidelity); prune children if E_v < E_v1 + E_v2

## Data sources named
Sportlogiq event data (proprietary, not public): 2018–2019 NHL season (shots 150K events, passes 1M events) and 2017–2018 soccer season (10 leagues); "more than seven million data points" combined. Schema (Table 2): time remaining, puck/ball x-y coordinates and velocities, score differential, manpower, action blocked, event duration, puck/ball–goal angle, home/away possession, one-hot action (43 hockey / 27 soccer). Code: https://github.com/xiangyu-sun-789/Cracking-the-Black-Box-Distilling-Deep-Sports-Analytics. Matches divided into goal-bounded episodes (regulation only for hockey).

## Findings (numbers and facts, not vibes)
- Fidelity RMSE (tree vs DRL, test set; Table 1): hockey shots action-values — Iterative Segmented Regression 0.01441 vs Null 0.13924; hockey passes action-values — ISR 0.00964 vs Null 0.10808; soccer shots action-values — ISR 0.00508 vs Null 0.13648; soccer shots impacts — SVR 0.01235 vs Null 0.11890
- Correlation(tree, DRL) (Table 4): ISR 0.99436–0.99650 on action-values ("almost always above 0.9, many cases above 0.99"); soccer *pass impacts* the weak cell (~0.80–0.82 across all methods)
- T-test heuristic worst of the three fast heuristics on action-values; authors recommend ISR default, SVR close second
- Scalability: all experiments ran on a 4-core CPU / 64 GB RAM node in under 1 day on 1M+ records; standard packages (pyFIMTDD, Weka, GUIDE) failed to build on the dataset due to memory limits
- **Debugging win (paper's claim):** the tree exposed an information leakage — frequent splits on *event duration* contradicted hockey expert knowledge, revealing a leak in the duration-feature extraction pipeline; "without an interpretable model such as the tree, it is almost impossible to spot the spurious behaviour from the black box"
- Top hockey-shot feature importances (Table 3): time remaining (t0) 0.0594 (freq 248), puck y 0.03418 (228), puck x 0.02646 (153), action blocked 0.02016 (12), manpower 0.01203 (14); soccer shots: action blocked 0.01524 (1), time remaining 0.00711 (36), distance to goal 0.00144 (31)

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Mimic-learning linear model tree as an explainability sidecar for a production probability model — TRUST-SIGNAL (auditability of what the engine says and why)
- Counterfactual soft-label augmentation (perturb game state, record engine probabilities) as an NFL analogue of action replacement — OTHER
- Their duration-leakage anecdote is a template: heavy tree splits on an expert-implausible feature = pipeline leak detector — TRUST-SIGNAL
- Fidelity ≠ correctness: a mimic can faithfully reproduce a biased black box — OTHER (validation caveat)
- Improvement experiment (ledger §14): train the tree jointly on engine soft labels AND de-vigged market probabilities to build an interpretable disagreement map of where the engine beats/trails the close — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT: implement mimic-tree distillation (ISR split heuristic, min-100/child, L1/L0 pruning) on nflverse play-by-play with engine win-probability soft labels as an explainability/leakage-audit sidecar; acceptance gate is correlation ≥ 0.95 and RMSE ≤ 0.03 on a time-ordered 2025 holdout plus a leakage sanity check of the top-10 importance ranking.

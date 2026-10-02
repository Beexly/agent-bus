# docs/arxiv-program/research/2026-09-21/arxiv-deep/2208-decentralized-transformers-with-centralized-aggregation-are.md

## What it is (1-2 sentences)
A full read-ledger of MARIE (Multi-Agent auto-Regressive Imagination for Efficient learning, arXiv:2406.15836, Zhang et al. 2024) — a Transformer world model pairing decentralized per-agent local dynamics with a Perceiver centralized-aggregation module, training policies purely in imagination. Verdict: ADAPT (ledger completed 2026-09-22, full text read via ar5iv HTML).

## Key metrics/methods (formulas where given, else "not specified")
- VQ-VAE tokenizer: encoder E maps observation o^i to K latents; nearest-neighbor lookup in codebook Z={z_j}_{j=1}^N; per-agent trajectory becomes token sequence τ^i=(…,x_{t,1}^i,…,x_{t,K}^i,a_t^i,…) (eq. 1).
- Local dynamics Transformer φ: predicts next observation tokens x̂_{t+1,k}^i ∼ p_φ(·|x_{≤t}^i,a_{≤t}^i,e_{≤t}^i,x_{t+1,<k}^i) (eq. 2), individual reward r̂_t^i (eq. 3), discount γ̂_t^i (eq. 4), conditioned on own history plus aggregated global features e_t^i.
- Aggregation (eq. 5): (e_t^1,…,e_t^n)=f_θ(all agents' tokens+actions) — Perceiver compressing the n(K+1)-length joint obs-action sequence into n per-agent global-context vectors.
- Discrete reward: categorical over M HL-Gauss-smoothed buckets, r̂=E[R] (eq. 6), cross-entropy loss; joint loss L_Dyn = reward NLL + discount NLL + transition NLL (eq. 7), Adam.
- Imagination policy learning: parallel H-step imagination of all agents from replay-buffer states; actor π_ψ(a_t|ô_t) on reconstructed observations; MAPPO-style actor-critic with λ-targets (Dreamer-style); critic sees other agents' observations as oracle approximation.
- Evaluation: median win rate ± std over 4 seeds, 10 eval games each. Low-data regime: 100k (Easy) / 200k (Hard) / 400k (SuperHard) real-env samples.
- GSE implementation spec in file: VQ-VAE on per-player tracking windows (1 s → K=8 tokens, codebook N=512); HL-Gauss discrete reward head predicting play EPA bucket (M=51 buckets over [−7,+7]) + termination head; role-structured aggregator improvement experiment.

## Data sources named
- StarCraft Multi-Agent Challenge (SMAC): 13 scenarios across Easy/Hard/SuperHard (1c3s5z, 2m_vs_1z, 2s_vs_1sc, 2s3z, 3m, 3s_vs_3z, 3s_vs_4z, 8m, MMM, so_many_baneling, 3s_vs_5z, 2c_vs_64zg, corridor); simulator-generated public benchmark, not a static corpus.
- Proposed GSE training data: 2021–2024 NGS tracking; reproducible test on 2022–2024 NGS tracking passing plays, held-out 2024 weeks 14–18.
- Cross-paper evidence: DIMA ledger 2205 (MAMuJoCo/Bi-DexHands, reported MARIE OOM issues).

## Findings (numbers and facts, not vibes)
- MARIE best or tied-best on 12/13 SMAC maps (Table 1, median % over 4 seeds).
- 3s_vs_5z (Hard): MARIE 88.6 (38.8) vs MAMBA 10.5, all model-free baselines 0.0. [SCHEME, OTHER]
- 3s_vs_4z: 63.6 vs MAMBA 27.7. [OTHER]
- corridor (SuperHard): 47.1 vs MAMBA 21.1, all others ~0. [OTHER]
- 2c_vs_64zg (70 actions/agent): 23.6 vs MAMBA 7.7 — attributed to valid action-mask prediction from deep mechanics understanding. [SCHEME, OTHER]
- MMM is the exception: QPLEX 88.4 beats MARIE 25.0 — hypothesized that short-horizon cooperation needs no imagination. [OTHER]
- Ablation: decentralized+Perceiver beats the centralized variant increasingly as agent count grows past 3; centralized competitive only at 2 agents (2s_vs_1sc). [SCHEME, OTHER]
- Discrete actions up to 70 per agent (2c_vs_64zg); trajectory is token sequence; replay buffer used only for world-model training, never directly for policy updates. [OTHER]
- Stated limitation: slow autoregressive inference at long horizons. File's football-domain cost estimate: NFL plays are short (5–8 s at 10 Hz = 50–80 steps × 23 agents × K tokens — expensive). [OTHER]
- Acceptance gate (file's own): imagined +0.5s position error ≤ 0.9 yards (beat constant-velocity by ≥25%); EPA-bucket within-1 accuracy ≥ 60%; counterfactual sign agreement ≥ 65% on route-swap edits; REJECT if 23 agents × 50-step rollout exceeds 2 s per play. [OTHER]
- Improvement experiment hypothesis: role-structured aggregator (separate query heads for offensive skill players, linemen, defenders; ball as dedicated query) beats flat Perceiver on +0.5s error by 10%+ because football interaction is role-mediated. [SCHEME, OL, QB-BEHAVIOR]
- File states: the decentralized-dynamics + centralized-aggregation split is the right shape for football (per-player imagination, shared game context); tokenization and game-specific action-mask learning do NOT transfer. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-player counterfactual imagination engine ("what if WR3 runs the post instead of the corner", reading reward-head EPA deltas) — QB-BEHAVIOR, SCHEME, OTHER.
- Role-structured aggregation hypothesis (skill players / linemen / defenders / ball) mirrors football's role-mediated interactions — SCHEME, OL, QB-BEHAVIOR.
- Action-mask-prediction finding (2c_vs_64zg 23.6 vs 7.7): a world model that learns the game mechanics' legal actions transfers to flag-illegal formations/pre-snap penalty modeling — SCHEME, COACHING, OTHER.
- MMM exception (QPLEX 88.4 > MARIE 25.0): short-horizon coordination needs no imagination — calibration caution for over-engineering simple sub-problems — TRUST-SIGNAL, OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — per-player counterfactual imagination engine with HL-Gauss EPA-bucket reward head, role-structured Perceiver aggregator, and concrete accept/reject gates (~5 engineer-weeks spec'd).

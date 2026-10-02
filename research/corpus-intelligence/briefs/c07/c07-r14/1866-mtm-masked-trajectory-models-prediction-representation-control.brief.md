# arxiv-program/research/2026-09-21/arxiv-deep/1866-mtm-masked-trajectory-models-prediction-representation-control.md
## What it is (1-2 sentences)
A ledger on Wu et al. (Meta/UC Berkeley/Georgia Tech/Google, arXiv:2305.02968): Masked Trajectory Models — a single bi-directional transformer pretrained with random-autoregressive masked reconstruction over multi-modal trajectory tokens (state, action, return-to-go) that serves zero-shot as forward dynamics, inverse dynamics, imitation policy, offline RL agent, or representation extractor, selected only by the inference-time masking pattern; transfers to NFL tracking as self-supervised pretraining over (kinematics, movement, play EPA).
## Key metrics/methods (formulas where given, else "not specified")
- Tokenization: z_t^m = E_θ^m(x_t^m), flattened to sequence length N = M×T; sinusoidal timestep + learnable modality embeddings.
- Objective: max_θ E_τ Σ_t Σ_m log P_θ(z_t^m | Masked(τ)); MSE implementation = Gaussian likelihood.
- Random-autoregressive masking: random masks with constraint that at least one masked token has no future unmasked tokens (last element of each sampled segment necessarily masked).
- Heteromodal: missing modalities treated as masked, loss only on existing modes; two-stage inference for action-scarce regimes: (1) predict future states from current state + desired returns, (2) predict actions from current + predicted future states.
- Inference masks on same weights: RCBC mask → offline RL; BC mask → behavior cloning; forward-dynamics mask → world model; inverse-dynamics mask → action recovery/goal-reaching.
## Data sources named
D4RL locomotion V2 (Walker2D/Hopper/HalfCheetah × Expert/Medium-Expert/Medium/Medium-Replay, ~1M transitions each); Adroit dexterous hand (Pen, Door); ExORL (Walker2D unsupervised trajectories, Stand/Walk/Run). Code: https://github.com/facebookresearch/mtm.
## Findings (numbers and facts, not vibes)
- Offline RL (D4RL V2): MTM (RCBC inference) outperforms DT and RvS; competitive with specialized CQL and IQL despite purely self-supervised training.
- Versatility: single MTM weights comparable or better than specialized masks (S-MTM) and specialized MLPs on BC/RCBC/ID/FD in most cases.
- Masking: random-autoregressive ≥ pure random on RCBC; competitive with specialized RCBC mask.
- Heteromodality: Heteromodal MTM consistently beats MLP and action-labeled-only MTM; "quite substantial" gap in low-data regimes; naive state-only mixing WITHOUT the two-stage inference did NOT always help — the two-stage procedure was required.
- Data efficiency: MTM outperforms specialized MLPs at every dataset size; largest gaps in low-data regime.
- Representations (ExORL, TD3 downstream): learns "significantly" faster in all 3 tasks; Walk reaches/exceeds asymptotic raw-state TD3 performance within 10% of the training budget; state-action reps beat state-only reps on Run.
- Limitations: MuJoCo simulators (no occlusion, no multi-agent adversaries, no deception); best-checkpoint selection bias; no distribution-shift test for ID/FD; exact D4RL scores not recoverable from HTML text.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Self-supervised pretraining on NFL tracking: states = 22-agent kinematics, actions = frame-to-frame displacements, returns = play EPA — NEW capability (GSE has no pretraining stage) (SCHEME)
- Heteromodal training across data regimes: tracking-only early seasons + tracking+charting + tracking+charting+odds plays (OTHER — data fusion)
- Forward-dynamics mask → ball-carrier trajectory forecasting (rushing-yards props); outcome-conditioned generation → counterfactual play simulation; frozen MTM embeddings as prop-model features (QB-BEHAVIOR for ball-carrier/QB trajectory forecasting)
- Hierarchical two-level (player → play) encoder improvement to handle 22-agent context blowup (OTHER — architecture)
## Engine-actionable? (yes/no + one-line what)
yes — Train MTM on 2018–2024 NFL 10Hz tracking with missing-modality masking; adopt if heteromodal masked-frame RMSE ≥15% lower than full-modality-only, or frozen MTM embeddings improve prop-model log-loss ≥0.002 on held-out weeks.

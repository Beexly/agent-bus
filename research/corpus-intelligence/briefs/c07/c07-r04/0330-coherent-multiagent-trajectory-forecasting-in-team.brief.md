# arxiv-program/research/2026-09-21/arxiv-deep/0330-coherent-multiagent-trajectory-forecasting-in-team.md
## What it is (1-2 sentences)
CausalTraj: a temporally-causal, likelihood-based multi-agent trajectory forecaster that fixes the incoherence problem of per-agent-scored models — it learns the true joint distribution of multi-agent futures via a per-timestep Mixture-of-Gaussians on displacements, achieving state-of-the-art joint metrics (minJADE/minJFDE) alongside competitive per-agent accuracy. Verdict recorded: ADAPT — port the causal MoG stack and the joint-metric evaluation protocol to NFL tracking for route/defender trajectory prediction, with richer player–ball covariance than their block-diagonal assumption.

## Key metrics/methods (formulas where given, else "not specified")
Causal factorization: p(X_{P+1:T} | X_{1:P}) = ∏_{t=P}^{T−1} p(X_{t+1} | X_{1:t}); per-timestep displacements ΔX_{t+1} = X_{t+1} − X_t; teacher-forced training, autoregressive inference. Output: mixture of M=8 Gaussians per timestep, p(ΔX_{t+1} | X_{1:t}) = Σ_m π_{t+1,m} N(ΔX_{t+1}; μ, Σ), covariance block-diagonal per agent via Cholesky factors L_{t,m,n} = [[exp(ℓ¹¹),0],[ℓ²¹,exp(ℓ²²)]], Σ̂ = LLᵀ. Loss: L_NLL = −E_t log Σ_m π̂ N(Y_t; μ̂, Σ̂) plus entropy regularizer L_ent = −(1/log M) Σ_m π̂ log(π̂+ε); total L = L_NLL − λ_ent L_ent, λ_ent = 0.05. Architecture: per-agent causal encoder (Causal PointNet or 3-layer Mamba2) + 3-class agent embedding (team A/B, ball) + inter-agent relation transformer with pairwise spatial-geometry mesh tensor M_t[q,k] = [x_q−x_k; z_q; z_k]; scene aggregation → prediction head (dim 448). Metrics defined: minADE_k (per-agent mean), minFDE_k (per-agent final), minJADE_k / minJFDE_k (joint: best single scenario for all agents jointly). Optimizer: AdamW, OneCycle max LR 0.02, weight decay 0.01; 3.0M/3.2M params; 20 inference samples; velocity augmentation as auxiliary input.

## Data sources named
NBA SportVU (github.com/linouk23/NBA-Player-Movements): 30-frame sequences at 5 Hz (10 players + ball), first 10 frames context, predict next 20. Basketball-U and Football-U (Xu & Fu 2025): 50-frame sequences, predict final 20; Football-U built from NFL Big Data Bowl (nfl-football-ops/Big-Data-Bowl), 22 players + ball at 10 Hz, results in yards. Baselines: GroupNet (CVPR'22), LED (CVPR'23), MoFlow (CVPR'25, default + reproduced joint-objective variant), Sports-Traj (ICLR'25). Code: https://github.com/wezteoh/causaltraj.

## Findings (numbers and facts, not vibes)
- Football-U (yards, 20-frame, k=20): CausalTraj Mamba2 joint minJADE20/JFDE20 = 1.12/2.68 vs MoFlow 1.16/2.82, MoFlow joint-obj 1.19/2.87, Sports-Traj 3.66/3.46; per-agent MoFlow slightly ahead (0.16/0.27 vs 0.16/0.31)
- NBA SportVU 4.0 s joint: CausalTraj 1.38/2.57 (best) vs LED 1.63/2.99, MoFlow 1.69/3.31, GroupNet 2.12/3.72; per-agent 4.0 s: MoFlow 0.71/0.87 best, CausalTraj 0.77/1.02
- Basketball-U joint: CausalTraj 0.97/1.77 vs MoFlow 1.18/2.30
- Ablation (Basketball-U joint minJADE/JFDE): full 0.97/1.77 → no spatial-relation encoder 0.99/1.81 → single Gaussian 1.03/1.86 → component-mean sampling 1.05/2.13
- MoFlow's joint-objective loss variant barely moved min-based joint metrics — loss changes alone don't learn joint structure
- Failure modes: ball carried with unrealistically large ball–player gap, ball–boundary collisions (traced to block-diagonal covariance: no cross-agent covariance within a component)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — joint trajectory forecasting + joint-metric evaluation protocol. Direct GSE applications: (i) WR/TE route prediction for separation-at-catch modeling (feeds props/pick engine); (ii) "ghosting" — compare actual defender trajectories vs the joint model's expected coverage distribution to grade coverage busts (complements CoverageIQ cards); (iii) scenario simulation for 2-pt/4th-down win-probability extensions.

## Engine-actionable? (yes/no + one-line what)
Yes — port CausalTraj to NFL Big Data Bowl/NGS tracking (10 frames context → 20 frames for all 22 + ball) with ball-coupled covariance and play-type/formation embeddings, gated on minJADE20 within 10% of the reproduced baseline and receiver minADE20 beating constant-velocity by ≥30%.

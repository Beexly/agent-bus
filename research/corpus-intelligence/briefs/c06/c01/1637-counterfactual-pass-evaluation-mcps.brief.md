# arxiv-program/research/2026-09-21/arxiv-deep/1637-counterfactual-pass-evaluation-mcps.md
## What it is (1-2 sentences)
Monte Carlo Pass Search (MCPS): a three-component framework for counterfactual pass evaluation in soccer — a policy samples pass variants, a learned discrete-token world model (SMART adapted from autonomous driving) rolls out trajectories, and a learned value model scores possession value — separating decision quality from execution quality and option quality. Code + checkpoints released (CC BY 4.0).
## Key metrics/methods (formulas where given, else "not specified")
- Value model: Transformer on tracking windows, two BCE heads; PV(s) = P(ego scores in 10s) − P(opp scores in 10s); labels = shots-in-10s weighted by xG proxy
- World model: decoder-only space–time Transformer, 8 history → 24 rollout tokens; player tokens 10-dim velocities (2048-code k-means vocab), ball 15-dim 3D velocities (1024-code vocab); Player-to-Touch module (BCE hazard + weighted CE toucher ID) + Ball-at-Touch module (diagonal-Gaussian NLL)
- Search: per-pass kick params fit via CEM-style solver + ball-flight simulator (gravity/drag/restitution/friction); 256 local variants (execution noise) + 256 global variants (alternative options)
- ΔPV(θ) = PV(s′(θ)) − PV(s); S_mean = ΔPV_obs − (1/K)ΣΔPV(θ^k); S_pct = (1/K)Σ1[ΔPV_obs ≥ ΔPV(θ^k)]
## Data sources named
Bassek et al. (Scientific Data 2025): 7 German Bundesliga matches, 25 Hz all-22 + 3D ball (TRACAB Gen5); train/val/test 5/1/1 matches; held-out test match Bochum vs Leverkusen 2022/23 with 512 accurately-inferred passes
## Findings (numbers and facts, not vibes)
- Trajectory forecasting best-of-20: minADE20 2.4 (ours) vs Sports-Traj 4.2, naïve Transformer 3.8, constant velocity 5.0, static 6.8; minFDE20 4.7 vs 6.9/7.5/10.1/13.4
- Player-to-Touch: receiver top-1 0.605, pass-success acc 0.777, AUROC 0.799 — below Spearman/Anzer, honestly attributed to harder penalized setting
- PV model: shot AUROC 0.73 vs ball-only EPV 0.78 (authors admit it doesn't improve shot discrimination); Brier 0.017 vs 0.022
- Case study: local search exposes narrow success windows; global search flags missed alternatives; rankings separate execution skill (local percentile) from option selection (global mean-difference)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: counterfactual QB throw evaluation on NGS tracking — sample local (execution noise) and global (alternative targets) variants, roll out to next meaningful interaction, score ΔPV; S_mean/S_pct per decision separates "good decision, bad execution" from "bad decision" for QB evaluation and sit/start content; improvement: VaR/CVaR summaries of ΔPV distribution for tail-risk-aware QB rankings
- COACHING: fourth-down / play-call decision evaluation with the same three-component template (policy / world model / value model)
## Engine-actionable? (yes/no + one-line what)
Yes — build gse_counterfactual_decision_eval.py on NGS tracking (world model minADE20 must beat constant-velocity by ≥30%; decision-eval pilot on 200 fourth-down calls needs S_pct rank correlation with EPA outcome ≥0.4), else fall back to VTCS approach.

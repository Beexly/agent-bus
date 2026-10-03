# arxiv-program/research/2026-09-21/arxiv-deep/0494-largescale-ingame-outcome-forecasting-for-match.md
## What it is (1-2 sentences)
Deep-read of arXiv:2511.18730v1 (Horton & Lucey, Stats Perform, 2026): an axial transformer that jointly forecasts end-of-match totals of 12 player actions, team totals, and game outcome, updated ~150 times per soccer match at event timesteps. Corpus verdict: ADAPT — port the agent×time axial transformer as GSE's first live in-game forecasting architecture for NFL props and win probability.
## Key metrics/methods (formulas where given, else "not specified")
- Grid E_0 ∈ ℝ^(H×W×D), H = agents (players+2+1), W = timesteps; D=128 embeddings per modality (player/team/game × pre-game/live × strength/context).
- L=4 axial transformer layers: row (temporal, strict upper-triangular causal mask) + column (agent, current timestep) attention, feed-forward/layer-norm/skip per Vaswani et al. 2017.
- Axial attention combination: R = [N^row/(N^row+N^col)]⊙R^row + [N^col/(N^row+N^col)]⊙R^col (Algorithm 1 line 17); self-cell masked in one of the two ops.
- Attention(K,Q,V,M) = softmax(A)V; A = (M + KQᵀ)/√d; row-wise softmax via exp(A)/(n·1ᵀ), n = exp(A)·1.
- Equivalence theorem (5)–(7): axial attention ≡ sequential masked attention on row-major unraveling with M := M^row + P(M^col)Pᵀ; complexity O((H+W)HW) vs O(H²W²).
- Target layers: shared-over-agents-and-timesteps linear heads to per-target distribution parameters (Bernoulli, Poisson, log-Gaussian, "model-free" discrete). Targets = remaining action counts in (t, T^(n)], Poisson-NLL per target, summed; Adam LR 0.0003, cosine annealing no warm restarts, batch 30, ~150k steps, ~15 h on 1×NVIDIA A10; 10% train held for validation, selected on total validation loss.
- Consistency (shots-on-target ≤ shots; totals ≥ running totals) emerges from shared embeddings only — no hard constraints.
## Data sources named
62,610 soccer matches, 28 competitions, Opta event data via Stats Perform (proprietary, not public). Train: 2016–17 → 2023–24 (58,501 games). Test: partial 2024–25 through 15 Dec 2024 (4,109 games). Qualitative trace: Fulham 1–3 Aston Villa (19 Oct 2024).
## Findings (numbers and facts, not vibes)
- ~505 predictions per timestep × ~150 timesteps ≈ 75,000 live predictions per game; inference sub-second on commodity CPU.
- Ours beat all four ablations (no-agent-attention, no-temporal-attention, no-pre-game-context, stacked axial) on mean log-probability for every one of 12 targets.
- Log-prob / calibration error: goals −0.111 / 0.002; assists −0.088 / 0.001; shots −0.515 / 0.021; shots on target −0.260 / 0.016; corners −0.289 / 0.019; attempted passes −3.039 / 0.074; accurate passes −2.765 / 0.075; tackles −0.608 / 0.027; fouls −0.517 / 0.018; yellow cards −0.202 / 0.019; red cards −0.018 / <0.001; own goals −0.006 / <0.001.
- Ablation gaps (ours vs no-temporal, log-prob): goals −0.111 vs −0.124; assists −0.088 vs −0.098; accurate passes −2.765 vs −3.199; shots −0.515 vs −0.575. Temporal dynamics contribute most, pre-game context second, agent interaction third.
- Rare-event heads (red cards, own goals) are near-degenerate zero-mass predictors (zero-category mass ≥0.84 and ≥0.97); passes heads diffuse.
- No external baselines; evaluation is calibration + ablation only.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Agent×time grid architecture ported to players×plays/drives for NFL: OTHER.
- Poisson remaining-count heads for receptions/yards/TDs as one shared-state live prop engine: SCHEME.
- No external baselines in the paper (self-referential calibration+ablation only): TRUST-SIGNAL.
- Rare-event heads degenerate despite joint training; hard consistency constraints would fix wasted probability mass: OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the axial transformer on a per-drive players×timesteps grid with Poisson heads for receptions/receiving yards/rushing yards/TDs, gated on beating static pre-game baselines on 2024 holdout log-probability with ≤1% consistency violations.

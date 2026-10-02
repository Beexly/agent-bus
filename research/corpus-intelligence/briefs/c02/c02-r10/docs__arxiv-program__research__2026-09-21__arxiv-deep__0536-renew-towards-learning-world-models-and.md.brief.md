# docs/arxiv-program/research/2026-09-21/arxiv-deep/0536-renew-towards-learning-world-models-and.md

## What it is (1-2 sentences)
An offline model-based RL paper (Bhamidipaty, Kochenderfer & Ramamoorthy 2026, arXiv:2607.14180v1) learning/repairing world-model transition dynamics from binary human preferences over imagined trajectory rollouts, with an epistemic-uncertainty-directed active querying loop (RENEW). Verdict in file: REJECT — no sports data, no transfer to GSE's supervised engine architecture; filed as a reference only.

## Key metrics/methods (formulas where given, else "not specified")
- Trajectory log-likelihood (Eq. 1): ℓ_θ(σ) = Σ_{t=0}^{H−1} log 𝒯̂_θ(s_{t+1} | s_t, a_t); latent variant via encoder e_ψ + latent dynamics.
- DLHF preference (Eq. 2): P(σ⁰≻σ¹) = logistic(ℓ_θ(σ⁰) − ℓ_θ(σ¹)) — replaces the reward model in the Bradley–Terry preference framework with trajectory log-likelihood, so preferences supervise transitions (physical realism) directly.
- DLHF loss (Eq. 3): ℒ_DLHF(θ) = −Σ_{(σ⁰,σ¹,y)∈𝒟_≻} [(1−y) log P(σ⁰≻σ¹) + y log P(σ¹≻σ⁰)].
- RENEW: active-querying loop — compute epistemic uncertainty u(s,a) under current model, sample segment pairs ∝ u(σ)=Σ_t u(s_t,a_t), elicit N/I labels per round, finetune θ by minimizing ℒ_DLHF, iterate I rounds.
- Ablation: K=2 candidates per batch B=64 optimal under fixed budget.

## Data sources named
- No real-world data. Jumanji discrete grid-world suite (Maze 5×5/10×10/15×15/20×20, Sliding Tile 3×3/5×5, Sokoban, 2048) + gymnax continuous control.
- Pretraining: 500 offline transitions per maze per ensemble member. Preferences labeled by a synthetic oracle (ℓ₁ distance to ground-truth transition) — no real human annotators.

## Findings (numbers and facts, not vibes)
- From scratch (Table 1, 6 seeds): naive DLHF with 1M preference labels ≈ supervised learning on 1K transitions — e.g., Maze 10×10: DLHF ℓ₁ 0.0001±0.0000 vs supervised 0.0003±0.0001; Sliding 5×5: 0.0105±0.0023 vs 0.6622±0.0347. Preferences work at ~1000× the label cost. [OTHER]
- Sample efficiency (Table 2, 100K labels, 5 seeds): RENEW roughly halves final ℓ₁ error on Sliding Tile 3×3 (0.2070±0.0790 vs naive 0.4190±0.1220); Sokoban 0.0257±0.0025 vs 0.0428±0.0016 — naive DLHF DEGRADES the pretrained model here (catastrophic forgetting); Maze 5×5/10×10: 0.0018/0.0001 both. [OTHER]
- Repair (Table 3, 1600 labels, 10 seeds, transition accuracy %): Maze 5×5 — pretrained 83.8±3.6, naive 89.7±3.5, RENEW 96.5±1.5; 10×10 — 87.6±2.1 / 93.2±2.4 / 97.2±1.4; 15×15 — 87.8±2.8 / 92.3±1.7 / 94.4±1.6; 20×20 — 87.9±2.0 / 93.2±2.3 / 94.9±1.3. RENEW wins at every size with tighter CIs; naive forgets some correctly-predicted transitions. [OTHER]
- Figure 4: on one 10×10 instance — pretrained 86.8%, naive 88.6%, RENEW 99.1% per-cell transition accuracy. [OTHER]
- Author-stated limitations: synthetic oracle instead of real human annotators; small discrete worlds only; no formal unexploitability guarantees; no integration with practical offline RL algorithms. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No sports-transferable findings: GSE has no world model, no offline RL, no simulator — the model-exploitation failure mode this paper repairs does not exist in the current engine. (OTHER)
- One filed reference: IF Garrett ever commissions a drive-level NFL transition simulator {down, distance, field position, score} → next-state distribution for synthetic rare-event training data (extreme weather games, backup-QB blowouts), RENEW is the reference for repairing hallucinated transitions via pairwise realism judgments. (OTHER)
- Cautionary methodology note: the synthetic ℓ₁ oracle makes DLHF "effectively a diluted form of supervised learning" — the from-scratch result upper-bounds rather than demonstrates real-world feasibility. (TRUST-SIGNAL, OTHER)

## Engine-actionable? (yes/no + one-line what)
no — REJECT; GSE has no world model or simulator to repair, so there is no implementation; the paper is filed as a reference for a hypothetical future drive-level transition simulator only.

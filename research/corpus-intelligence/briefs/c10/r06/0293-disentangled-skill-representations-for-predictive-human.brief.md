# arxiv-program/research/2026-09-21/arxiv-deep/0293-disentangled-skill-representations-for-predictive-human.md
## What it is (1-2 sentences)
A 2026 Toyota Research Institute paper (Schrum et al., arXiv:2608.23776v1) introducing SAIL (Skill Abstraction with Interpretable Latents): persistent, disentangled, behaviorally grounded player-level skill embeddings learned from trajectory data, validated on high-performance racing (primary) and baseball batting, plus a downstream AI-coaching task against a professional coach's ratings. The reader's verdict is ADAPT: a strong architecture template for NFL player-level skill representations from NGS tracking data.
## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1: B̄_•(z_s,c) = Σ_j w_•^(j)(z_s,c) B_•^(j)(c), • ∈ {exp, nov}; τ̂_{z_s} = α ⊙ B̄_exp(z_s,c) + (1−α) ⊙ B̄_nov(z_s,c) — per-subskill novice–expert basis blending from a persistent participant embedding z_s ∈ ℝ^d.
- Eq. 2: ℒ = λ_traj ℒ_traj + λ_metric ℒ_metric + λ_MI ℒ_MI; ℒ_MI = −E_{τ̂∼p_φ(τ̂|z_s,c)}[log q_θ(z_s|τ̂)] (variational MI lower bound against collapse).
- Counterfactual subskill swaps: z̃_orig^(k) = z_donor^(k) with remaining slices fixed; metric loss applied only for the swapped subskill.
- Baselines: SimCLR, β-VAE, AE, AE-LC; ablations SAIL w/o CF, SAIL w/o basis.
## Data sources named
Racing: 95 simulator participants, 1,545 laps; each trajectory = vehicle pose, speed, control signals @ 100 points/track segment; six subskill metrics (skidpad peak lateral g, gaze fixation, written-test scores, etc.). Baseball: 13 semi-pro players, 74 batting trials, optical motion capture, 3 subskills, synthetic augmentation. Coaching datasets: 2 simulator studies, 38 participants. No code/dataset released.
## Findings (numbers and facts, not vibes)
- Racing: silhouette .72 (.08), test–retest .995 (.003), construct score 1.86 (best); in-context RMSE 2.75 (.12), OOC RMSE 6.37 (3.0), predictive score 2.0 (best); w/o-basis ablation nearly doubles error (5.05/12.77).
- Disentanglement: AR 3.25 (.79), TCI .93 (.06), RIR 2.11 (.46), interpretability score 3.0 (best); removing CF collapses AR to 1.24 and interpretability to 1.37.
- Baseball (supplemental): test–retest 1.000; in-context RMSE .161; AR 0.758.
- Downstream coaching: weighted F1 — SAIL .595 (.014) vs trial-time .573 (.014) vs none .541 (.015), 10.0% relative lift over unconditioned, paired t(14)=2.50, p=.025; only SAIL improves significantly (p<.001).
- Coach validation: Spearman ρ = 0.81, p<.001, 95% bootstrap CI [0.56, 0.94], n=22.
- β-VAE and AE baselines score near 0 on several composites — standard disentanglement fails to yield behaviorally grounded subskills.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SAIL-NFL prototype: participant = player-season, trajectories = NGS tracking snippets (QB pocket arcs, WR route release→break→catch, EDGE get-off arcs), context = (coverage shell, down/distance, field zone); subskill slices supervised by repo metrics — QB: CPOE (accuracy), time-to-throw/aggressiveness (decision), pressure-to-sack (pocket). [QB-BEHAVIOR]
- Freeze embeddings and condition GSE prop-projection heads on z_s; the paper's 10% coaching-F1 lift suggests player-embedding conditioning can lift prop models beyond raw stat features. [OTHER: player modeling]
- The coaching downstream task (instructor-feedback prediction, validated vs pro coach ratings ρ=0.81) is the transfer path for GSE coaching/content products. [COACHING]
- Improvement over the paper: make embeddings adversarial — decompose into player skill vs scheme/coverage difficulty (paper contexts are passive racetracks; NFL contexts are adversarial), removing the "good stats vs bad defenses" confound. [SCHEME]
## Engine-actionable? (yes/no + one-line what)
Yes — build a single-position (WR) SAIL-NFL prototype on 2023–2024 NGS tracking with the paper's baselines and gates (test–retest ≥ 0.90, RMSE beats AE by ≥15% relative, AR ≥ 2.0), then condition prop-model heads on the learned player embeddings.

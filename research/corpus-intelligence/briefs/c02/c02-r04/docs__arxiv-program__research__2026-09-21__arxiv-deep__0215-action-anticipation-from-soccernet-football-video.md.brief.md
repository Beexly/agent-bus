# docs/arxiv-program/research/2026-09-21/arxiv-deep/0215-action-anticipation-from-soccernet-football-video.md

## What it is (1-2 sentences)
First structured benchmark for action anticipation in soccer broadcast video: FAANTRA predicts which on-ball action will occur in an unobserved 5–10s future window from a preceding context clip and temporally localizes it, introducing the SN-BAA dataset and mAP@δ metrics. The paper's own verdict context (per the deep-read file) is REJECT for GSE — soccer video, no NFL transfer, no GSE video lane.

## Key metrics/methods (formulas where given, else "not specified")
- Anticipation loss: ℒ_A = λ_D ℒ_D + λ_C ℒ_C + λ_T ℒ_T (detection BCE, classification CE, temporal-position MSE in exponential space scaled by T_a); multi-task: ℒ = ℒ_A + λ_S ℒ_S (auxiliary action-segmentation loss on encoder)
- mAP@δ for δ ∈ {1,2,3,4,5,∞} seconds, averaged; mAP@∞ disregards localization
- FAANTRA: RegNetY backbone + Gate-Shift-Fuse, 4-layer local self-attention encoder (k=15 neighbors, 8 heads, d=512), 2-layer decoder with q=8 learnable queries, per-query actionness/class/timestamp heads
- Inference confidence: ŷ_c · ŷ_d (class × actionness) at predicted timestamp

## Data sources named
- SN-BAA (new): adapted from SoccerNet Ball Action Spotting; 9 professional football matches, 12,433 actions (one per 3.30s), C=10 classes; splits 4 train / 1 val / 2 test / 2 hidden
- Joint training: SoccerNet Action Spotting (500 extra games)
- Code/data public: github.com/MohamadDalal/FAANTRA

## Findings (numbers and facts, not vibes)
- Best model (400MF, joint SN-AS+SN-BAA, T_a=5s): avg mAP 24.08; δ=1: 9.74; δ=2: 17.47; δ=3: 24.11; δ=4: 28.56; δ=5: 31.13; δ=∞: 33.47 [OTHER]
- Spotting upper bound (T-DEED with full future access): avg 63.85 — anticipation is far from deployment [OTHER]
- Removing auxiliary segmentation loss: 20.30 → 7.13 avg mAP (largest single ablation effect, ~13 points) [OTHER]
- Per-class best model: Pass 51.86, Drive 55.50, Header 25.05, Out 24.74, Throw-in 23.30, Cross 21.35, High Pass 11.72, Shot 10.08, Ball Player Block 9.16, Successful Tackle 8.02 — rare high-impact events perform worst [OTHER]
- Local attention (k=15: 20.30) beats global attention (17.70); q=8 queries optimal; context beyond 5s plateaus; halving spatial resolution −5 points [OTHER]
- T_a=10s worse than 5s (400MF joint: 19.90 avg) [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — soccer broadcast-video domain with no NFL transfer path; GSE has no video lane. Portable recipe points only: auxiliary segmentation of context is critical, local attention beats global, joint training unlocks bigger backbones
- INFERENCE: the rare-event failure pattern (shots/blocks/tackles worst classes) is a caution for any future event-anticipation model — the events that matter most for betting are the hardest to anticipate

## Engine-actionable? (yes/no + one-line what)
no — soccer-video action anticipation with no NFL transfer path and sub-deployment performance (mAP@δ=1 = 9.74); revisit only if GSE opens an NFL-video lane with licensable footage

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0357-usad-endtoend-human-activity-recognition-via.md
## What it is (1-2 sentences)
End-to-end human activity recognition system combining statistics-guided conditional diffusion augmentation, a multi-branch spatiotemporal-attention network, and an adaptive composite loss — SOTA on three HAR benchmarks with full ablations plus Raspberry Pi 5 deployment validation. Ledger verdict: ADAPT the two methodological components (diffusion augmentation + adaptive loss) for GSE's rare-event classification; do not port the network as-is.
## Key metrics/methods (formulas where given, else "not specified")
- Diffusion augmentation: per-sequence stats μ, σ, skewness γ + local z-scores → 4L-dim conditioning vector f; label prototypes μ_y = E[f|y]; DDPM with cosine schedule ᾱ_t (s=0.008); AdaGN(h,t,y) = γ_y(t)⊙(h−μ_h)/σ_h + β_y(t); importance-weighted denoising loss w_t = √((1−ᾱ_t)/(ᾱ_t(1−ᾱ_{t−1}))); pretrain on class-balanced synthetic, fine-tune on real.
- Adaptive composite loss: Loss_total = ω_0·Loss_sl-nll + ω_1·Loss_fl + ω_2·Loss_ce; feedback rule ω_1 = 2 − τ − 1/(acc + 1e−8); ω_0 = ω_2 = 0.5(1 − ω_1).
- Deployment: latency budget = 5% of segment window per inference (Raspberry Pi 5, PyTorch 2.2.2).
## Data sources named
WISDM (29 participants, 6 activities, wrist accelerometers); PAMAP2 (9 subjects, 12 activities, 40 channels accel+gyro+magnetometer on wrist/chest/ankle); OPPORTUNITY (12 participants, 72 sensors of 17 types, severe imbalance). All public.
## Findings (numbers and facts, not vibes)
- Final USAD: WISDM acc 98.84% (F1 98.79); PAMAP2 94.07% (F1 93.72; 50%-data 89.29%/88.92); OPPORTUNITY 84.68% acc / 78.46% F1 (per §4.2.1 table — abstract says 80.92%; internal inconsistency).
- Ablation (PAMAP2): backbone-only 90.71% → +spatiotemporal attention 92.00% → +adaptive loss 93.43% → +augmentation 94.07% (+3.36 pp from augmentation); OPPORTUNITY augmentation gain +6.55 pp (78.05%→84.60%).
- Beats all 12 baselines on PAMAP2-100% (next best MAG-Res2Net 88.57%/87.80).
- Label-smoothing sweep: ŷ=0.05 optimal (val acc 0.9760, ECE 0.0109). Deployment: <25 ms inference on OPPORTUNITY segments, within budget; params 3.47e5 (WISDM) / 1.09e6 (OPPO).
- INFERENCE: no confidence intervals or significance tests; diffusion augmentation tested only down to 50% data (true few-shot regime untested); augmentation quality asserted via downstream accuracy, not distributional check.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Statistics-guided diffusion augmentation for GSE's rare minority classes (broken tackles, coverage busts, pick plays — the rarest, most valuable labels): OTHER (class-imbalance methodology).
- Adaptive composite loss (CE + focal + label-smoothing with accuracy-feedback weights) as drop-in replacement for plain CE on imbalanced GSE classifiers: OTHER (methodology).
- The 5%-of-window latency budget method transfers to any real-time GSE feature (live win-probability/prop edges): OTHER (deployment discipline).
## Engine-actionable? (yes/no + one-line what)
yes — run the adaptive composite loss as a low-cost experiment on any imbalanced GSE classifier now, and pilot statistics-guided diffusion augmentation (pretrain-on-synthetic → fine-tune-on-real) on a rare NFL event label with a ≥3 pp G-mean gate on held-out games.

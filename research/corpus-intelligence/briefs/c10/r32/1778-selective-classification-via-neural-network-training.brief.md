# arxiv-program/research/2026-09-21/arxiv-deep/1778-selective-classification-via-neural-network-training.md
## What it is (1-2 sentences)
Deep-dive ledger on arXiv:2205.13532: introduces NNTD (Neural Network Training Dynamics), a selective-classification signal that scores each example by its late-weighted prediction disagreement across training checkpoints vs the final model's label — abstain on examples the model "changed its mind about" late in training. Beat SAT, Deep Gamblers, and MC-Dropout on coverage at fixed error; verdict ADAPT as a second gate signal for GSE's pick model.
## Key metrics/methods (formulas where given, else "not specified")
- Disagreement score: late-weighted average over 25–50 checkpoints of 1[prediction at checkpoint t ≠ final prediction], exponential-style weighting favoring late checkpoints (best k = 0.05).
- Selection rule: abstain on the highest-disagreement fraction; risk–coverage curves reported at fixed error targets (2%, 1%, 0.5%) and error at 90% coverage.
- No extra head, no extra training — signal is free if checkpoints are kept.
## Data sources named
Image classification benchmarks: CIFAR-10, CIFAR-100, SVHN, Cats & Dogs, GTSRB. Model: VGG16, 300 epochs, SGD. Baselines: SAT, DG (Deep Gamblers), SN, SR (softmax response), MC-DO (MC-Dropout).
## Findings (numbers and facts, not vibes)
- CIFAR-10 coverage at fixed error: at 2% error — NNTD 91.2 vs SAT 90.3, DG 89.1, SN 88.3, SR 85.8, MC-DO 86.1; at 1% — NNTD 86.4 (best); at 0.5% — NNTD 75.9 (best). [TRUST-SIGNAL]
- SVHN coverage at fixed error: at 2% — 98.5; at 1% — 96.3; at 0.5% — 88.1 (NNTD best at all three). [TRUST-SIGNAL]
- CIFAR-10 at 90% coverage (error): NNTD 1.83 vs SAT 1.90, DG 2.19, SN 2.29, SR 2.78, MC-DO 2.87. [TRUST-SIGNAL]
- 25–50 checkpoints suffice; late weighting k = 0.05 is the best reported setting. [TRUST-SIGNAL]
- Limitation: disagreement measured against the final model's own label, not ground truth — confidently-wrong subpopulations are invisible; k = 0.05 tuned on the same benchmarks it wins on. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Checkpoint-disagreement as confidence/abstention signal, empirically beating standard confidence baselines [TRUST-SIGNAL]
- "Changed its mind late" = uncertain — a training-time instability axis distinct from prediction-time ensemble disagreement; nothing in the corpus mines this [TRUST-SIGNAL]
- Porting plan: snapshots = per-round predictions (GBM) or per-seed predictions (ensembles); add as second gate feature alongside final-model edge [TRUST-SIGNAL]
- Improvement experiment: joint training-dynamics × market-disagreement score (late-flip + line moved against = doubly suspect) — sports has an external second opinion (the market) the paper's domain lacks [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-NNTD: log snapshot predictions during training, add late-weighted disagreement as a gate feature beside edge; accept if AuRC improves ≥5% relative over edge-only gating on walk-forward seasons with loss-enriched top-disagreement abstentions.

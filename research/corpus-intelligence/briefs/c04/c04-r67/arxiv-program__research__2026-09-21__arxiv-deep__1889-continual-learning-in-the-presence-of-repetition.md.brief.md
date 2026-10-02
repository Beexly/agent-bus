# arxiv-program/research/2026-09-21/arxiv-deep/1889-continual-learning-in-the-presence-of-repetition.md
## What it is (1-2 sentences)
A challenge-report paper (Tyler L. Hayes et al., 2024, arXiv:2405.04101v2) from the CLVision CVPR-2023 continual-learning challenge showing that when data streams contain repetition (classes re-occur), ensemble-of-frozen-expert architectures dominate replay methods, and that the strategy ranking inverts when repetition is removed. The paper's reader verdict is ADAPT for GSE's update architecture.
## Key metrics/methods (formulas where given, else "not specified")
- DWGRNet ensemble logit: ensemble_logit_k = max_{i ∈ M} (logit_{i,k} / entropy_{i,k} · N_C^{(i)} · feature_norm_{i,k}), where N_C^{(i)} = number of classes seen by branch i (branches that saw more classes count more).
- Repetition model: after first occurrence, each class re-appears per experience with a fixed per-class repetition probability (interpolates standard class-incremental to cumulative re-occurrence).
- HAT-CIR (winner, team xduan7): each experience adds a "fragment" of network replicas trained in two phases (supervised contrastive loss on a projection head, then cross-entropy on a softmax head), frozen afterward; final config 50 fragments + 2 ensembles; predictions averaged.
- Horde (team mmasana): ensemble of feature extractors, each an expert trained on one selected experience (≥5 classes; stop adding after 85% of classes seen; always train on experience 1), then frozen (zero forgetting); unified head over all classes via pseudo-feature projection (mean + std) with cross-entropy + metric-learning loss balanced by adaptive alpha.
- Metric: average test accuracy after full stream training on unseen samples of all stream classes.
## Data sources named
- CIFAR-100 class-incremental-with-repetition (CIR) streams (pre-selection S1–S3; final S4–S6 with different repetition configs); Tiny-ImageNet CIR streams for generalization; standard no-repetition CIFAR-100 (20 experiences × 5 classes) ablation.
- Constraints: 1 GPU, 500 min training cap, no pretrained models, no experience-ID at test time.
- Code: https://github.com/xduan7/clvis-chlg-2023/ and https://github.com/mmasana/clvision-chlg-2023/; challenge DevKit stream generators public.
## Findings (numbers and facts, not vibes)
- Final phase (Table 2): xduan7/HAT-CIR 62.75% avg accuracy (63.64/68.04/56.57 across streams); linzz 45.02; mmasana/Horde 41.11; pddbend/DWGRNet 40.91; vs ER-2000 21.91%; Naive 7.83; Joint (upper bound) 65.12%.
- No-repetition inversion (Table 3): xduan7 24.30, mmasana 3.39, pddbend 7.59 — while ER-2000 at 25.35 beats all finalists.
- Pre-selection (Table 1): pddbend 44.77, linzz 44.08, shelley 42.53, xduan7 41.37, mmasana 40.52 — final-phase tuning (xduan7 dropping HAT, adding replicas) flipped the order.
- linzz (2nd place, 45.02) did not contribute to the report, so its method is unknown; shelley was disqualified for a rule violation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Repetition-rich structures (divisional rematches, recurring coaching trees, repeated QB-vs-DC matchups) are the NFL analog of CIR streams — INFERENCE from the file's GSE spec section — COACHING (coaching-tree recurrence), SCHEME (scheme-matchup repetition).
- Ensemble-of-frozen-experts architecture pattern — OTHER.
- Reliability-weighted OOD gating for expert combination — OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Test monolith + frozen prior-season expert (OOD-gated) vs weekly-refit monolith on 2020–2025 walk-forward with a rematch-split Brier metric; adopt if ≥3 of 4 metrics beat the monolith and rematch Brier improves ≥0.003.

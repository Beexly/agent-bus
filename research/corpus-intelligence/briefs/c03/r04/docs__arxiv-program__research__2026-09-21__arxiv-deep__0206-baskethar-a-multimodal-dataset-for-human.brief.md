# docs/arxiv-program/research/2026-09-21/arxiv-deep/0206-baskethar-a-multimodal-dataset-for-human.md

## What it is (1-2 sentences)
Deep-read notes on arXiv:2604.17065v1 (Gao et al., 2026), "BasketHAR": a multimodal human-activity-recognition dataset from a real-world basketball training session (waist IMU + wrist heart-rate/skin-temperature + synchronized video), with a LoRA-fine-tuned ImageBind multimodal-alignment classifier baseline and an LLM pipeline that turns recognized action sequences into expert-revised training reports. Verdict: ADAPT — do not port the dataset; adapt the two reusable mechanisms (multimodal alignment recipe, HAR-to-LLM report pipeline).

## Key metrics/methods (formulas where given, else "not specified")
- Baseline: LoRA fine-tuning on ImageBind; freeze visual encoder, fine-tune text and signal (IMU) encoders; inference = cosine similarity between input-signal features and textual label embeddings, take highest-similarity label.
- Loss: Eq. (1) L = 1 − CosSim(·,·); Eq. (2) L = sum of three modality-pair alignment losses, all hyperparameters set to 1 (term identities unrecoverable from PDF extraction — INFERENCE: text↔IMU, video↔IMU, plus a third pair).
- Comparators: SVM (RBF, C=1), Random Forest (100 trees), MLP (2-layer, 128+64), CNN (3 conv + 2 FC), LSTM (3 layers, hidden dim 128); Adam, LR decaying 1e-3 → 1e-4.
- Metrics: per-class precision/recall/F1, macro and weighted averages, overall accuracy; train/test split 8:2 (split methodology unstated).
- Sensors: MPU9250 9-axis (accel, gyro, angle, magnetometer) in WT901 SoC, waist-mounted front-center, 200 Hz via UART; heart rate + skin surface temperature via nRF51822 + Si1141 sensor, dominant-hand wrist, 1 Hz via Bluetooth; stationary-state calibration pre-experiment.
- 14 activity classes annotated by basketball-skilled university students from professional-coach technical movements; each label verified by ≥2 annotators; segment start/end = average of ≥2 annotations; faces blurred.

## Data sources named
- BasketHAR dataset: https://huggingface.co/datasets/Xian-Gao/BasketHAR (Apache License 2.0).
- Single 90-minute basketball training session on a standard court; NVIDIA A100 for experiments.
- Report generation via ChatGPT-4o with templated prompts. No code repository link stated.

## Findings (numbers and facts, not vibes)
- Overall accuracy: SVM 70.27%; RF 71.91%; MLP 69.46%; CNN 72.91%; LSTM 71.41%; multimodal alignment 78.11%.
- Macro avg F1: SVM 0.56; RF 0.60; MLP 0.59; CNN 0.57; LSTM 0.54; ours 0.69. Weighted avg F1: ours 0.78 vs CNN 0.72.
- Per-class F1 (ours): Sit 0.96; Stand 0.88; Warmup 0.65; Walk 0.52; Run 0.00; Dribble Run 0.73; Hold Ball Standing 0.85; Bounce the Ball 0.79; Travel 0.63; Shoot 0.72; Pass on the Run 0.62; Low Dribble Alt 0.65; Low Dribble Right 0.84; Low Dribble Left 0.87.
- Run class F1 = 0.00 for all methods except CNN (0.12) and MLP (0.21); most methods get <50% accuracy on walking/running/dribble-run.
- Per-class sample counts: Sit 497; Stand 2165; Warmup 582; Walk 931; Run 65; Dribble Run 230; Hold Ball Standing 1882; Bounce the Ball 3100; Travel 626; Shoot 621; Pass on the Run 94; Low Dribble Alt 83; Low Dribble Right 235; Low Dribble Left 124 (sum 11,235; paper's Table 2 reports 14,044 total samples at 200 Hz — unexplained 2,809 discrepancy).
- Class imbalance ~48:1 (Run 65 vs Bounce the Ball 3100).
- Training-intensity numbers (average HR 142.77 bpm, peak 185 bpm, 90 abnormal HR records) come from an illustrative ChatGPT-4o-generated report (Fig. 7), NOT independently confirmed dataset statistics.
- No cross-validation, no confidence intervals, no leave-one-subject-out protocol; number of volunteers not stated; split methodology unstated (leakage risk between adjacent windows).
- Reproducible-test bar: reimplementation must reach ≥0.65 macro F1 on leave-one-chunk-out before adaptation is credible; reject method if macro F1 < 0.55 once leakage is removed.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: paper's headline 78.11% accuracy is propped up by huge easy classes while hard classes (Run) score 0.00 — headline metrics on imbalanced classes are a trust red flag; gate on macro F1 (≥0.65) not accuracy.
- COACHING: HAR→LLM report pipeline (action sequences + physiological metrics → templated LLM draft → human expert revision loop) is a template for weekly practice-load editorial reports.
- OTHER: no wearable/HAR/IMU/activity-recognition research exists in GSE's corpus — new capability area; data blocker is access (NFL practice wearable data is proprietary to teams), not modeling.
- OTHER: paper's "first" claims are marketing — Hang-Time HAR (2023) already covers basketball with wrist IMU; genuine novelty is physiological + video modalities.

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the LoRA-ImageBind multimodal alignment recipe for action classification from sensor/tracking motion streams, and port the human-in-the-loop HAR→LLM report pipeline for practice-load editorial products; both gated on a clean leave-one-chunk-out reimplementation hitting ≥0.65 macro F1 on the public BasketHAR data.

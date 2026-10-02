# arxiv-program/research/2026-09-21/arxiv-deep/1573-ski-turn-segmentation-causal-lstm.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2608.07513 (Szymocha et al., AGH University of Krakow, 2026): "SkiC-LSTM," a strictly causal real-time IMU turn-segmentation model for ski-ACL-injury prevention using only a calf-mounted smartphone IMU, evaluated under leave-one-subject-out (LOSO) protocol with open data/code/weights. Verdict: ADAPT — the architecture recipe and LOSO validation discipline port to GSE's NGS tracking workload and injury-risk monitoring.
## Key metrics/methods (formulas where given, else "not specified")
- ŷ_t = f_θ(x_{1:t}) — strictly causal prediction (Eq. 1).
- Residual LSTM: h_t^l = LSTM(h_t^{l-1}) + h_t^{l-1}; locked dropout p=0.3; 2-layer unidirectional LSTM, 128 hidden.
- Pipeline: learnable 1×1 conv calibration → multi-scale causal conv, 4 parallel branches k ∈ {1,3,5,11} (16 ch each → 64) + Squeeze-and-Excitation (r=4, RMS pooling) → residual LSTM → classification head (128→128 ReLU → 2 logits) on last time step of window W=12, stride 1, labeled by final timestamp.
- Physics-informed causal features: ℓ2 magnitudes of accel/gyro, jerk (accel derivative), yaw 1st/2nd derivatives, local rolling stats; causal EMA filtering; orientation phase unwrapping; per-fold train-only normalization.
- Augmentation: segment-wise time warping within annotated turns at scales {0.5, 0.75, 1.25, 1.5} → 4× training data, train-only.
- Training: AdamW (lr 1e-5, wd 1e-4), ≤40 epochs, early-stop patience 5, dense per-timestep cross-entropy supervision.
- Post-processing: median filter (+0.5 s latency → "near-real-time").
- Metrics: per-skier accuracy, per-run accuracy, per-run turn-level IoU (best-overlap matching of predicted segments to ground-truth turns).
## Data sources named
Public in-the-wild dataset (Robak & Turek 2025, enriched): 105 free-skiing runs, 11 skiers (7M/4F; 9 aged 18–30, 2 aged 40–55), 1,781 turns; smartphone IMU at 10 Hz calf-mounted; expert annotation by certified ski instructor from synchronized video (turn boundaries per PSIA Alpine Technical Manual; binary left/right per-timestamp label; no straight-skiing class). Metadata: skill level (2 beginner, 5 intermediate, 3 advanced, 1 expert), skiing style, skier ID. Evaluation pool: skiers with ≥5 descents → 99 runs, 9 skiers, 1,656 turns. Code/data/weights: https://github.com/mszymocha/SkiC-LSTM. Also cites Tello et al. 2024 ("Too good to be true") for identity-bias discussion.
## Findings (numbers and facts, not vibes)
- SkiC-LSTM: per-skier accuracy 89.77%, per-run accuracy 89.85%, IoU 79.45 — best on all three; per-skier σ = 2.20 (lowest of all methods).
- Baselines under identical splits: XGBoost 88.50/88.66/78.51; Random Forest 87.18/87.73/75.01; standard LSTM 86.84/87.30/75.64; ResNet1D 86.45/87.18/75.36.
- Style stratification (SkiC-LSTM): carving 92.10, quick 87.60, skidded 89.70, snowplow 88.24 (only 10 descents).
- Skill stratification: beginner 87.07, intermediate 90.99, advanced 91.53, expert 88.11.
- Error analysis: losses are temporal phase shifts (n-frame offsets inherent to causality), not event misclassifications — occurrence/duration detection reliable.
- Inference ≈ 0.1 ms/frame on single-core 3 GHz CPU.
- Limitations: only 11 skiers; snowplow nearly absent; free-skiing only; median filter adds 0.5 s latency; no direct injury-event prediction (segmentation→biomechanical-risk downstream is future work); 10 Hz sampling; single device placement.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Injury/workload lane. NGS tracking at 10 Hz is kinematically analogous to the paper's IMU stream — the causal segmentation stack (calibration 1×1 conv → multi-scale causal conv → residual LSTM) ports to live movement-phase detection (cuts, acceleration bursts, contact events) feeding GSE workload features (high-intensity decelerations, cut counts tied to soft-tissue risk).
- OTHER: Validation discipline — LOSO (leave-one-player-out / leave-one-team-out) with game-level splits, augmentation/preprocessing statistics from training folds only — is a direct audit standard for GSE's own workload/injury models to check for identity-bias inflation in randomized splits.
- OTHER: Complements ledger 1566 (2510.01810, z-score load monitoring) as the event-detection front end feeding workload accounting.
- OTHER: Improvement experiment adds a second causal head predicting high-risk turn morphology from segmented phases — the GSE analogue is a play-level injury-risk head on segmented NGS phases validated against actual injury reports.
## Engine-actionable? (yes/no + one-line what)
Yes — port SkiC-LSTM to NGS tracking as the causal movement-phase event detector feeding workload/injury features, and adopt the LOSO/leave-one-player-out validation protocol verbatim for all GSE injury/workload models (re-run existing models under it to check for identity-bias inflation).

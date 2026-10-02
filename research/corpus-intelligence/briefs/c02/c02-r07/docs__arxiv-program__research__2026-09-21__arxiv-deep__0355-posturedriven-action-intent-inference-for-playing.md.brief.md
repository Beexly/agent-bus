# docs/arxiv-program/research/2026-09-21/arxiv-deep/0355-posturedriven-action-intent-inference-for-playing.md

## What it is (1-2 sentences)
Posture-Driven Action Intent Inference (arXiv:2507.11642v2, Jaiswal & Srivastava 2025): infers a cricket batter's shot *intent* (high-energy/aggressive vs low-energy/defensive) from MediaPipe pose time series alone, using a released >2,500-clip dataset and honest leave-pair-out cross-validation, with match statistics as weak supervision.

## Key metrics/methods (formulas where given, else "not specified")
- Motion-range feature: r_j = max_t(x_j^(t)) − min_t(x_j^(t)) per feature j → Random Forest.
- Joint angle θ_i = ∠(p_{i−1}, p_i, p_{i+1}); joint velocity v_i = |p_i^(t) − p_i^(t−1)|/Δt.
- LSTM autoencoder joint loss: L = L_reconstruction + L_classification.
- Weak-supervision heuristic: E(ball) = high if runs ≥ 3, low if runs ≤ 1 (runs = 2 discarded).
- Models: 1D CNN over joint time series; LSTM; LSTM autoencoder; Motion Range + RF; 2s-AGCN (Shi et al. 2019, reduced 9→3 blocks).
- Validation: ordered leave-pair-out CV across 11 folders, ¹¹P₂ = 110 permutation runs; mean ± std + 95% CI.
- Metric gates stated in file: AUC-ROC ≥ 0.80 and F1 ≥ 0.75 (proposed pass gate for the NFL port).

## Data sources named
- Cricket Shot Intent Dataset (CSID): >2,500 shot clips from YouTube cricket match videos, 11 folders; ODI, T20, Test formats; labels high-energy (1,235) / low-energy (1,376) by manual shot-speed inspection; pose CSVs released; clip lengths mean 54.3 / median 50 / mode 46 / std 25.7 / min 25 / max 377 frames.
- Single-batter case study: 14 matches video-annotated (443 high / 679 low) matched to 35 matches of match-analysis stats by ball number ("over").
- Google MediaPipe Pose (joint extraction); YouTube broadcast video (source footage).

## Findings (numbers and facts, not vibes)
- 2s-AGCN (best): Acc 0.78 ± 0.10 [0.76, 0.80]; AUC-ROC 0.87 ± 0.06 [0.86, 0.88]; F1 0.78 ± 0.12 [0.75, 0.80]. [QB-BEHAVIOR, COACHING]
- 1D CNN: Acc 0.77 ± 0.07; AUC 0.83 ± 0.07; F1 0.77 ± 0.08 — selected for follow-ups as simple/near-real-time with tightest CIs. [QB-BEHAVIOR, COACHING]
- LSTM: F1 0.71 ± 0.14; LSTM AE: F1 0.72 ± 0.18; Motion Range + RF (LOOCV): F1 0.70 ± 0.12. [OTHER]
- Clip-length ablation (1D CNN F1): 3 frames → 0.58; 20 → 0.65; 30 → 0.71; 40 → 0.75; 60–70 → 0.78; 80 → 0.79 (plateau ~80 frames ≈ mean + 1 std; intent detectable at 30–40 frames). [QB-BEHAVIOR]
- Baseline comparison on 14-match single-batter data: Random — Acc 46.9%, distribution deviation 34.90, avg proportion deviation 14.9; runs-heuristic — 66.2%, 28.97, 22.3; 1D-CNN — 71.4%, 15.69, 5.6 (best on all three). [TRUST-SIGNAL]
- Kohli case study (160 off 159, Cape Town 2018): energy ramp 0–10 overs → 22 low / 6 high; 40+ overs → 9 low / 17 high; bowler split e.g. Tahir 17 high / 5 low vs Ngidi 2 high / 12 low. [COACHING]
- Labels are human shot-speed judgments (subjectivity risk); intermediate-energy shots excluded (spectrum truncation inflates separability); single-batter validation is n=1. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Kinematic intent classification at 0.78 F1 / 0.87 AUC is a proven template for effort/intent labels GSE's tracking lane lacks — port to NGS speed/accel time series for ball-carriers (high-effort vs routine plays). (QB-BEHAVIOR, COACHING)
- Motion-range RF (r_j = max−min per feature) is a no-deep-learning first effort label: per-play speed range, lateral displacement range, direction-change count. (COACHING, OTHER)
- Weak-label analog for NFL: broken tackles / yards-after-contact ≥ threshold → high-effort, mirroring the runs-heuristic. (OTHER)
- In-game energy profiling (Kohli analog): per-player high-effort share by quarter as a fatigue signal, e.g. 4th-quarter RB burst decline. (COACHING)
- Do NOT port the cricket segmentation pipeline (YOLO + fixed-screen-region broadcast tracking); NGS gives clean per-player tracks. (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the motion-range effort feature and 1D-CNN effort classifier onto NGS tracking kinematics with a leave-game-pair-out CV design and the paper's AUC ≥ 0.80 / F1 ≥ 0.75 pass gates.

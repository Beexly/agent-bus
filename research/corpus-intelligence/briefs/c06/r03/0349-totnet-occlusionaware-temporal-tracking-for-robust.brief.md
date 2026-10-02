# arxiv-deep/0349-totnet-occlusionaware-temporal-tracking-for-robust.md
## What it is (1-2 sentences)
Ball-tracking paper (arXiv:2508.09650v1, Xu et al. 2025) introducing TOTNet: a 3D-convolutional temporal U-Net with a visibility-weighted BCE loss (per-visibility-level weights w_v, Gaussian targets for fully occluded frames, explicit no-target for out-of-frame) and occlusion augmentation, evaluated on four racket-sport datasets including a new occlusion-rich table-tennis set (TTA). Verdict in file: ADAPT — port the visibility-weighted loss and occlusion-augmentation recipe to any tracking pipeline, not the full 3D U-Net (overkill for GSE's offline analytics).
## Key metrics/methods (formulas where given, else "not specified")
- Targets: visible/partial → one-hot 1D heatmaps; fully occluded → normalized Gaussian T_x[j] = (1/Z_x) exp(−(j−T_x)²/(2σ²)) (same for y); out-of-frame → no target.
- Loss: L = w_v · (BCE(P_x, T_x) + BCE(P_y, T_y)), v ∈ {0,1,2,3} visibility levels; weights w_v and σ not stated in paper (repo-only).
- Eval: dist = √((x_pred−x_label)²+(y_pred−y_label)²); correct if ≤5 px (visible/partial) or ≤10 px (fully occluded).
- Input: 5 consecutive frames (288×512), target = last frame; RAFT optical-flow encoder variant (TOTNet OF).
## Data sources named
TTA (new, 9,159 samples, 25 fps, 1080×1920, from four Paralympic table-tennis matches; 1,996 occlusion samples; shared "upon academic request"); TT (Li et al. 2023, 120 fps, 36,224 train/3,232 val/3,720 test); Tennis (Huang et al. 2019, 30 fps, visibility labels 0/1/2/3; fully-occluded test = only 5 frames); Badminton (Sun et al. 2020, 26 train/3 test matches). Code: AugustRushG/TOTNet.
## Findings (numbers and facts, not vibes)
- TTA fully occluded RMSE: WASB (prev SOTA) 37.30 → TOTNet 12.31 → TOTNet(OF) 7.19; accuracy 0.63 → 0.74 → 0.80.
- TT overall RMSE: 4.02 (TTNet)/3.11 (WASB) → 1.38 (TOTNet OF), accuracy 0.98.
- Tennis partially occluded RMSE: 105.73 → 63.41; fully occluded 264.45 → 27.98 → 15.31 (OF) but accuracy 0.17 → 0.67 → 0.33 (OF regresses accuracy). Badminton visible RMSE 27.17 → 23.43; not-visible 56.50 → 70.22 (OF worse) / 44.55 (plain TOTNet).
- Ablation (TTA full-occ RMSE): baseline 29.57 → +WBCE 24.43 → +aug only 54.26 (augmentation alone hurts) → WBCE+aug 12.31 → +OF 7.19.
- Efficiency: TOTNet 8.65M params / 28.08 FPS vs WASB 1.48M / 33.44 FPS at 288×512 (heavier and slower than the baseline it beats); TOTNet(OF) 8.66M / 12.19 FPS.
- Caveats: baselines are author re-implementations (flatters TOTNet); tennis full-occ test n=5; σ and w_v unreported (loss not reproducible from paper); OF variant regresses on two datasets; NFL occlusion regime (ball hidden by bodies for whole plays, 22 players, camera motion) is structurally different from racket sports.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — tracking-lane infrastructure: visibility-weighted loss and ball-region masking augmentation are training-loop tweaks for any future vision-based player/ball tracking (route classification, separation-at-catch, pressure timing) where occlusion degrades labels.
- TRUST-SIGNAL — Gaussian targets for fully occluded frames encode positional uncertainty explicitly rather than pretending at point precision; that pattern generalizes to any label with annotation uncertainty.
## Engine-actionable? (yes/no + one-line what)
No — a deferred enabler: adopt the WBCE + occlusion-augmentation recipe only inside a GSE tracking trainer (none exists yet), gated by ≥15% masked-frame RMSE improvement with no visible-frame regression; never adopt the 3D U-Net itself.

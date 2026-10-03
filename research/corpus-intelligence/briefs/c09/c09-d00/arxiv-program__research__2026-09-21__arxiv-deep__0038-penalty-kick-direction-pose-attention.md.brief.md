# arxiv-program/research/2026-09-21/arxiv-deep/0038-penalty-kick-direction-pose-attention.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2509.26088v1 (Ranasinghe & Ranasinghe 2025): a dual-branch CNN–LSTM with pose-guided spatial attention that predicts soccer penalty-kick direction (left/middle/right, goalkeeper's perspective) from pre-ball-contact broadcast frames. Verdict in the file: REJECT for GSE — soccer broadcast-video CV task with no NFL analog.

## Key metrics/methods (formulas where given, else "not specified")
- Dual-branch hybrid: MobileNetV2 time-distributed spatial CNN + pose-guided attention → global avg pooling → multi-head self-attention → LSTM; skeletal branch: 17 2D keypoints (YOLOv8-Pose)/frame → multi-head attention → LSTM; late fusion → batchnorm/dense/dropout → softmax over 3 zones. 57M trainable params (TensorFlow).
- Input: 8 uniformly-sampled 224×224×3 RGB frames + (8, 17, 2) keypoint tensors per kick; sequence window defined by foot-to-ball distance ratio relative to ball-to-net distance (camera-invariant); thresholds 0.15 / 0.25 / 0.35 tested.
- Training: Adam, lr 0.001, categorical crossentropy, batch 32, up to 100 epochs, early stop patience 10; keypoint confidence ≤0.6 frames replaced by nearest valid neighbor.
- Metrics: accuracy, confusion matrices, object-detection mAP/precision/recall; baselines: visual-only, pose-only, dual-branch without attention, full model; plus Chakraborty et al. (YOLOv4+OpenCV+LSTM, 79.05% one second pre-kick).
- No equations stated in the paper (file notes "no equations stated").

## Data sources named
Custom penalty-kick dataset from 154 match highlight videos (broadcasting platforms, public datasets; international + top-tier club) + 12 full match recordings from online sports archives → 755 penalty scenarios, 3-class labels; ~4,000 annotated RGB frames → 6,300 after augmentation (rotation/blur/scale/shear/brightness/saturation), 70/15/15 split → test set 113 samples.

## Findings (numbers and facts, not vibes)
- Object detection (custom YOLOv8): mAP@0.5 0.935, precision 0.984, recall 0.916.
- Test accuracy (113 samples): threshold 0.15 → 89.38% (77 training iterations); 0.25 → 76.11%; 0.35 → 60.18%. Closer-to-kick window = higher accuracy.
- Ablation (threshold 0.15): visual-only 75.22%; pose-only 68.14%; dual-branch w/o attention 82.30%; full model 89.38% — pose-guided attention adds ~7 pts over attention-less fusion; fusion adds ~7–14 pts over single modalities.
- Inference: 22 ms per segment on NVIDIA RTX 4080.
- Stated limitations: needs clear visibility of goalpost/ball/keeper/shooter; only 3 coarse classes; uncertain cross-league generalization; no code or data released.
- File's own caveats: 113-sample test is thin for an 89.38% headline; no cross-validation; class balance not reported; prediction lead time is milliseconds before contact (minimal goalkeeper utility).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: computer-vision method for soccer keeper anticipation — no NFL/GSE mapping. The file explicitly rules out the NFL set-piece analog: the field goal is a distance/accuracy event with no keeper duel, and GSE has no video lane; pose-guided attention is a CV architecture pattern with no tabular transfer.

## Engine-actionable? (yes/no + one-line what)
no — Rejected: no video lane, no NFL analog task, no released code/data; nothing transfers to tabular outcome/prop prediction.

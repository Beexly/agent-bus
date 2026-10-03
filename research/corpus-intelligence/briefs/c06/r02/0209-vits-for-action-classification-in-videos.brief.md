# arxiv-program/research/2026-09-21/arxiv-deep/0209-vits-for-action-classification-in-videos.md
## What it is (1-2 sentences)
A full-depth research note on a 2026 paper (Zaidi, Hsu & Dietrich, arXiv:2604.01318v1, accepted ICPR 2026) that fine-tunes a ViViT video transformer with imbalance-aware training (focal loss + Taguchi-L18 augmentation) to detect risky head-first "spearing" tackles in American football practice videos. The note's verdict is ADAPT — not the dummy-tackle dataset, but the three-part rare-event video-classification recipe as GSE's template for NFL rare-event video classifiers (penalty/foul detection, targeting flags).
## Key metrics/methods (formulas where given, else "not specified")
- Backbone: ViViT-B 16x2 (D=768, 12 layers, 12 heads; 16x16 patches; 2-frame tubelets), Kinetics-400 pretrained; input 32-frame clip (15 before + 16 after first point of contact) at 224x224 -> 3,136 spatiotemporal tokens + class token.
- Focal loss: L_FL = -(1-p_y)^gamma log(p_y) with gamma = 1.6, alpha_risky = 0.6 / alpha_safe = 0.4.
- Augmentation DOE: 4 factors (Gaussian noise 2 lvls; brightness 3 lvls at 50% HSV-V; rotation 3 lvls 45 deg; flip 3 lvls) = 54 combos reduced via Taguchi L18 to 18 runs + 1 no-augmentation baseline; applied only post-split, only to training folds, only to minority class to reach ~50:50; 5x20 = 100 training runs; stratified 5-fold CV (seed 42); validation folds never augmented.
- Equations: tokenization z_0 = [x_cls; E p_1; ...; E p_N] + E_pos; transformer layer z'_l = MSA(LN(z_{l-1})) + z_{l-1}, z_l = FFN(LN(z'_l)) + z'_l; Attention(Q,K,V) = softmax(QK^T/sqrt(d_k))V, d_k=64.
- Primary endpoint: risky-class recall; secondary risky F1; operating thresholds chosen per fold to maximize macro-F1.
## Data sources named
733 single-athlete-dummy tackle clips (expanded from the 178-video Nafi et al. 2022 MLDM dataset), 30 fps, 200-1500 frames; labels = expert SATT-3 (Strike Zone) rubric scores 0-3 mapped to binary (<=1 risky, >=2 safe); distribution Safe 474 (64.7%), Risky 259 (35.3%); FPOC manually marked per clip. No dataset URL in the paper.
## Findings (numbers and facts, not vibes)
- Best config Run15 (photometric only: Gaussian noise + brightness reduction, no spatial rotations/flips): risky recall 0.67, risky F1 0.59, accuracy 0.67.
- Prior C3D baseline (Nafi et al.): risky recall 0.583, risky F1 0.56, safe recall 0.769 — the new model gains +8.4 pp risky recall at -9.9 pp safe recall (deliberate triage tradeoff).
- Original imbalanced run: risky recall 0.58; duplication-only rebalancing: 0.54 — systematic augmentation beats naive resampling.
- Several configs reached accuracy 0.70-0.71 but with suppressed risky recall (accuracy/majority-class tradeoff).
- Photometric perturbations help; aggressive geometric perturbations hurt (spatial body-configuration cues are the safety signal).
- Limitations: dummy tackles not live tackles; FPOC manually marked (not end-to-end); single team/practice context only; risky recall 0.67 means ~1 in 3 dangerous tackles missed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (video classification method): the focal-loss + Taguchi post-split augmentation recipe ports to NFL penalty-event classification (roughing the passer, targeting, facemask) from broadcast/All-22 clips.
- COACHING: risky-tackle detection is a coach-centered triage tool per the paper — could feed player-safety/coaching content lanes.
- TRUST-SIGNAL: leakage discipline is strong (augmentation post-split only, validation folds untouched) — a reproducibility posture worth adopting in GSE video work.
## Engine-actionable? (yes/no + one-line what)
yes — Adapt the ViViT + focal-loss + post-split Taguchi augmentation recipe as GSE's rare-event NFL video classifier template (e.g., penalty/targeting detection), with event recall >= 0.65 on >=300 labeled NFL clips as the adoption gate.

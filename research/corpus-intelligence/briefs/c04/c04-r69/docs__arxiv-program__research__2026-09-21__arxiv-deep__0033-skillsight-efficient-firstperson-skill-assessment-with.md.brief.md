# docs/arxiv-program/research/2026-09-21/arxiv-deep/0033-skillsight-efficient-firstperson-skill-assessment-with.md
## What it is (1-2 sentences)
A full-paper deep-read of Wu, Ashutosh & Grauman (2025, arXiv:2511.19629v2): a two-stage framework that jointly models egocentric video + eye-tracking gaze in a teacher, then distills to a gaze-only student that runs with the camera off. The verdict is REJECT — GSE has no first-person video or gaze data and no skill-assessment lane.
## Key metrics/methods (formulas where given, else "not specified")
- SkillSight-T (teacher): gaze-induced attention map A_g^t (Gaussian centered on gaze patch), modified attention A_m^t = softmax(A_v^t + lambda_c A_g^t), attended-object sequence (DINOv2 + temporal encoder), gaze-dynamics transformer; fused by 3-layer MLP; trained with cross-entropy. TimeSformer (EgoVLPv2) video encoder; 16-frame clips at 2 FPS; SGD 15 epochs, lr 5e-3, batch 8, 8x RTX 6000.
- SkillSight-S (student): gaze-only transformer (4-layer, 768-dim) with distillation token (L1 distillation loss on teacher features) and action-recognition token; AdamW 10 epochs, lr 1e-4; 1.6 ms/sample inference.
- Efficiency modeled, not measured: P = alpha*N/T + beta*B/T + sum gamma_m*delta_m (alpha=4.6 pJ/MAC, gamma_rgb=35 mW, gamma_eye=7.8 mW, etc.).
## Data sources named
Three public benchmarks: Ego-Exo4D (5,048 videos, 740 participants; soccer, basketball, rock climbing, dance, music, cooking; 4 skill bins); Multisense Badminton (7,763 swings, 25 players; 3 bins); Expert-Novice Soccer (288 recordings, 8 subjects; binary). No subject overlap train/test. Project page: https://vision.cs.utexas.edu/projects/skillsight/
## Findings (numbers and facts, not vibes)
- Teacher 50.1% accuracy at 943 mW vs TimeSformer 45.5% at 697.5 mW on Ego-Exo4D; per-scenario best in all seven (soccer 81.4, basketball 55.2, bouldering 28.9, music 50.0, dance 56.7, cooking 58.5). Badminton: 53.1 vs 50.5.
- Student 44.4% at 9.5 mW: 73x lower energy cost than TimeSformer for a 1.1% accuracy drop (45.5 -> 44.4); 43% less power than the best power-efficient baseline (EgoDistill, 16.5 mW).
- Expert-Novice Soccer: student 72.6 vs gaze-only 66.0 vs motion-only 71.2 vs motion+gaze 73.3.
- Ablations: each teacher component adds a clear gain (full 50.1 vs 47.2 gaze-attention-only vs 37.0 trajectory-only); student without distillation drops to 40.0 from 44.4.
- Stated cognitive-science basis: "quiet eye" final fixation marks experts across sports, surgery, driving, music.
- Hard block for GSE: requires performer-worn smart-glasses gaze — unobservable in broadcast All-22; NFL players wear helmets occluding eyes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: cross-modality teacher->student distillation is a generic pattern already familiar in GSE's practice (tracking-rich teacher, box-score-only student); no new method for it here.
## Engine-actionable? (yes/no + one-line what)
No — egocentric gaze/video skill classification has no path to NFL game, prop, or DFS prediction with GSE's data sources (nflverse, charting, odds).

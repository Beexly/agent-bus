# arxiv-program/research/2026-09-21/arxiv-deep/0370-towards-unconstrained-2d-pose-estimation-of.md

## What it is (1-2 sentences)
Khan, Krauß & Stricker (2025, arXiv:2504.08110v1) introduce SpineTrack (a new dataset with nine vertebral keypoints C1…sacrum) and SpinePose (a teacher–student distillation extension of RTMPose that adds fine-grained 2D spine pose estimation without degrading standard body-pose performance). Verdict recorded in the file: ADAPT as an idea to bank — spine-curvature keypoints are a novel biomechanical feature source for QB throwing-mechanics / OL posture analysis from video, but GSE has no video-pose pipeline today.

## Key metrics/methods (formulas where given, else "not specified")
- **SpinePose:** teacher–student distillation extending RTMPose. Teacher T (Body8-pretrained) outputs body heatmaps; student S is same architecture with final heatmap layer expanded to extended skeleton. New head rows initialized from a normal distribution with statistics of existing weights (not zeros).
- Training objective (Eq. 9): **L_total = α L_pos + β L_distill + γ_1 L_structure + γ_2 L_spine** with ablation weights **α=5, β=2.5, γ_1=0.1, γ_2=0.5**.
  - (Eq. 1) **K_student = K_body ∪ K_spine, K_body ∩ K_spine = ∅.**
  - (Eq. 2) **L_pos = Σ_{k∈K_student} KL(p_{s,k}, g_k)** — KL divergence vs ground-truth heatmaps.
  - (Eq. 3) **L_distill = Σ_{k∈K_body} KL(p_{s,k}, p_{t,k})** — distill teacher on body joints.
  - (Eq. 4–5) **Δφ_b = atan2(sin(φ^p_b − φ^g_b), cos(φ^p_b − φ^g_b)); L_structure = 1/(π|B|) Σ_b |Δφ_b|** — bone-angle orientation penalty vs horizontal.
  - (Eq. 6–8) **s̃_i = s̃_{i−1} + w_i(s_i − s̃_{i−1}); w_i = 1 − 0.5σ(α(‖s_i − s̃_{i−1}‖ − T)); L_spine = MSE({s_i}, {s̃_i})** — differentiable smoothing that dampens abrupt spinal bends; sigmoid gating threshold T separates legitimate curvature from noise.
- Training: 10 epochs fine-tune, AdamW, LR 4e−3, 1000-iteration linear warmup, cosine annealing to 5% of initial LR, effective batch 1024, input 256×192 (some 384×288). GT bboxes for SpineTrack, 56.4-AP detector for COCO/Halpe26, flip test.
- Metrics: COCO-style AP/AR evaluated per subset (Body/Feet/Spine/Overall); biomechanical validation RMSE 2–4 cm reference range; any spine keypoint >10 cm RMSE manually refined.

## Data sources named
- **SpineTrack-Unreal (synthetic, ~25k frames):** Unreal Engine 5, 16 diverse avatars × 10 motion sequences (walk, run, jump, stretch, twist), 5 calibrated camera views; keypoints from UE5 skeleton projected to 2D, biomechanically aligned via OpenSim IK on a scaled model; backgrounds composited with 1,000 real indoor/outdoor images via SAM segmentation of OpenImagesV7.
- **SpineTrack-Real (real, 33k+ annotations):** images sourced from COCO and YogaPose datasets; pseudo-labels from RTMPose-L (body/feet) + curve-fit spine guesses sampled at fixed inter-vertebral intervals from shoulder/hip-driven curves; active-learning loop (train spine-aware model → human-correct low-confidence batches → fine-tune → repeat).
- Total: 50,962 images, 58,766 annotated humans, 35 keypoints (17 COCO + head top + 6 feet + 9 spine + 2 sternoclavicular). Project page: https://saifkhichi96.github.io/research/spinepose/ (no GitHub code link stated in text). Body8-pretrained RTMPose weights needed (from RTMPose authors).

## Findings (numbers and facts, not vibes)
- Table 1 — SpineTrack Spine AP: SpinePose-s 89.6 (AR 90.7); SpinePose-m 91.4 (92.5); SpinePose-l 91.0 (92.2); SpinePose-x 89.3 (91.0). Overall AP: s 84.2, m 88.0, l 88.4, x 88.3. Same-family RTMPose baselines score 0.0 on spine (they lack the keypoints).
- Retention on benchmarks (paper's key claim): SpinePose-l — COCO AP 75.2 / AR 79.5 vs RTMPose-l 76.9/81.5; Halpe26 AP 77.0 / AR 81.1 vs RTMPose-l 78.4/82.9. SpinePose-m — COCO 73.0 vs RTMPose-m 75.1; Halpe26 75.0 vs 76.7. So the spine extension costs **~1.5–2.1 AP points** vs the same-size RTMPose.
- Table 2 ablation (SpinePose-l, COCO / Halpe26 / SpineTrack AP): no-distill/no-special baseline 69.6 / 72.2 / 87.0; +distill 70.8 / 73.2 / 87.3 (+1.0–1.2 on benchmarks, +0.3 SpineTrack); +distill+spine-smooth 74.7 / 76.6 / 88.7 (spine smoothness adds +1.4 SpineTrack and +3.9/+3.4 benchmarks — the paper's most surprising claim, attributed to "rule-based knowledge" preventing interference); +distill+structure 71.2 / 73.4 / 87.7; all losses 75.2 / 77.0 / 88.4 (best on all three).
- Qualitative sports validation on hockey tackle, squat, diving, archery images — no quantitative sports-specific benchmark.
- UNCERTAIN / caveats recorded: pseudo-labels are model-generated then human-corrected — residual bias toward the constant-inter-vertebral-distance curve-fit prior could inflate AP on SpineTrack-Real; validation uses GT bounding boxes (detector-crop performance will be lower); 10-epoch fine-tune is only credible because of Body8 teacher init; the biomechanical RMSE validation vs OpenSim IK is partially circular (triangulation from the same 2D models under evaluation).
- Domain limitation (file's own): broadcast football helmets/pads/jerseys occlude torso landmarks — pads likely defeat the visual cues the model relies on; the hockey/diving examples are a softer domain than NFL.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR (future idea, banked not built):** Nine vertebral keypoints enable trunk-flexion/torsion angle features from video — the biomechanical substrate for QB throwing-mechanics profiling (torso rotation sequencing, spine flexion under pressure). No video-pose pipeline exists in GSE today; this is an idea for a future video lane, not an immediate build.
- **OL (future idea, banked not built):** Same trunk-posture features apply to offensive-line posture/stance analysis (pad level proxy via spine angle) — a conceivably quantifiable OL technique signal from broadcast film, pending the pad-occlusion problem.
- **OTHER (tracking lane, injury-risk):** Spine curvature features could feed injury-risk models and the 2026-09-18 NGS-replacement spec as novel biomechanical inputs — one day, once a video lane exists.
- **OTHER (replication recipe banked):** The distillation recipe (expand final head, init new rows from weight statistics, 10-epoch fine-tune with α=5/β=2.5/γ_1=0.1/γ_2=0.5) is a reusable method for extending any pretrained pose model with new anatomical keypoints; the pad-occlusion augmentation idea (mask torso with jersey-colored rectangles, supervise with higher uncertainty; temporal consistency term across frames) is a sports-specific improvement experiment worth keeping.
- File's acceptance gate (for when a video lane exists): adopt only if replication lands within ±1.0 pp of Table 1 rows AND ≥85 AP on football-pad torso images with the nine spine keypoints; otherwise REJECT.

## Engine-actionable? (yes/no + one-line what)
No — do not build now; bank the SpinePose recipe and the trunk-posture feature idea for a future GSE video lane, gated on pad-occlusion performance.

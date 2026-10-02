# arxiv-program/research/2026-09-21/arxiv-deep/0300-temporal-feature-distillation-for-labelefficient-precise.md
## What it is (1-2 sentences)
Deep-dive of Xu, Wei, Wells & Aryal (2026): Temporal Feature Distillation (TFD) + a Temporal Gated Scale (TGS) module for label-efficient Precise Event Spotting (frame-accurate event detection) in tennis/figure skating/diving video via a teacher-student EMA framework over unlabeled video. Ledger verdict: REJECT — video event-spotting for precision sports; no consumer in GSE's current stack (no video pipeline).
## Key metrics/methods (formulas where given, else "not specified")
- TGS module (Eqs. 1–7): plug-in after a standard feature extractor (RegNetY, ResNet-18, ViT-Tiny/Small): X_in ∈ R^{T×C} → residual MLP to F_in ∈ R^{T×C'} → parallel depthwise 1D temporal convolutions at dilations d ∈ {1,3,5} → elementwise gated convolution per scale → channels split in thirds (past-context, future-context, static; past/future thirds cyclically time-shifted, static untouched) → softmax-weighted fusion across scales → MLP + residual → X_out.
- TFD (Eqs. 9–11): student trained supervised; teacher = EMA of student with two-stage schedule (fast decay β_1 = 0.99 while student "still learning", base decay β_2 = 0.9995 after convergence — Section 3.4 self-contradictory on timing); teacher generates soft targets on weakly augmented unlabeled clips; alignment loss L_align = ‖F_s − F_t‖² (student vs teacher temporal feature maps); total L_TFD = L_sup + λ(t)·L_align with five-epoch supervised warm-up, λ(t) cosine-ramped 0→1 over ten epochs, then λ=1; L_sup = weighted CE over per-frame multi-label classes + binary temporal-detection loss (inverse-class-frequency foreground weighting).
- TMA (Temporal Masked Augmentation): random 16×16 patch grid, 9 patches masked, p=0.5; temporal masks of length 3, up to five segments per clip.
- Training: 50 epochs, batch 4, AdamW, lr 1e-4, weight decay 1e-4; eight NVIDIA A100 GPUs.
## Data sources named
- Tennis [39]: 3,345 clips, 28 matches, 33,791 annotations, six classes (serve, forehand, backhand, volley, bounce, fault); 19 train/val matches, nine test; 224×224 frames at 30 fps, clip length 100.
- Figure Skating [39]: 371 performances, 11 broadcasts, 3,674 events, four classes (jump, spin, footwork, landing); FS_Comp and FS_Perf splits.
- FineDiving [34]: 3,000 clips, 7,010 events, four classes (takeoff, somersault, twist, entry). Label regimes: 10%, 20%, 40%, 80% of labeled training set; test labels always 100% used. Code: https://anonymous.4open.science/r/TFD-8535/ (anonymous; not verified live).
## Findings (numbers and facts, not vibes)
- At 10% labels, mAP (Tennis / FS_Comp / FS_Perf / FineDiving): 80.19 / 38.29 / 50.29 / 52.87 — own model best in 14 of 16 dataset×fraction settings; FS_Perf 10%: +4.54 over strongest listed competitor (ASTRM 45.75); at 80% labels matches or exceeds 100%-labeled fully-supervised baselines on two of four datasets.
- TGS ablations (10% labels, Tennis mAP): ViT-Tiny 10.96 → +TGS 44.77 (+33.81); ViT-Small 46.32 → +TGS 68.39 (+16.83); +TFD → 80.19; FS_Perf: ViT-Small 28.61 → +TGS 41.37 → +TFD 50.29.
- TMA ablation: Tennis 75.32 → 80.19 (+4.87); FS_Perf 48.56 → 50.29 (+1.73).
- Clip-length sensitivity: Tennis L=50 → 73.50 (−6.69 vs L=100); FS_Perf L=125 → 58.97 (+8.68), L=200 → 58.78 (+8.49).
- Complexity (ViT-S, 100-frame clip): 23.45M → 28.89M params (+5.44M); 644.30 → 1000.15 GFLOPs (+355.85); 1649 → 867 FPS — still real-time on A100-class GPU.
- Feature-sharpness study: cosine similarity of DINO features at event boundaries ≥0.999 vs TFD 0.003 (Tennis) — TFD features boundary-sharp, DINO over-smoothed; non-boundary averages 0.936 (TFD) vs 0.997 (DINO).
- Limitations noted in deep-dive: EMA-schedule text self-contradictory (exact teacher dynamics uncertain from text); label-fraction sampling random with no statement that match identity is preserved (unlabeled 90% may leak the same matches as labeled 10%); only three runs, no variance/CIs; DINO comparison strawman-adjacent; 1,000 GFLOPs/clip heavy; all four datasets are individual/precision sports (no team sport, no occlusion-heavy broadcast scenarios).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No overlap with any engine lane: no video pipeline, no event-spotting capability, and the method localizes moments in video rather than modeling game outcomes; genuinely outside GSE's data universe (OTHER)
- Kept as a design reference only: if GSE ever builds broadcast-video indexing (e.g., auto-labeling highlight clips), the TGS plug-in + TFD warm-up→ramp→align schedule is the portable piece, trainable on NFL classes (snap, handoff, throw, catch, tackle, kick) (OTHER)
## Engine-actionable? (yes/no + one-line what)
no — video event spotting has no consumer in the current stack; resurrect only if GSE commits to a video-indexing lane AND the released code reproduces within ±2 mAP on the public benchmarks.

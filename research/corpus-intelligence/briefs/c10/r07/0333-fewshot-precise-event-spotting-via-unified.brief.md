# arxiv-program/research/2026-09-21/arxiv-deep/0333-fewshot-precise-event-spotting-via-unified.md
## What it is (1-2 sentences)
Deep-read ledger of Liu et al. (2025), arXiv:2511.14186v1, "Few-Shot Precise Event Spotting via Unified Multi-Entity Graph and Distillation" (UMEG-Net). It does frame-accurate (1–2 frame tolerance) sports event spotting from only 15–100 labeled clips by encoding each frame as a unified multi-entity graph (player skeletons + ball + field landmarks) with a parameter-efficient GCN + parameter-free multi-scale temporal shift, then distilling the graph teacher into an RGB-only student. Verdict: ADAPT — the few-shot answer to GSE's NFL broadcast event-spotting annotation bottleneck, paired with the 0332 FOOTPASS pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Unified multi-entity graph per frame: G_t = (V_t, E_t); nodes V_t = {Vpt (N persons × K joints), Vbt (ball keypoints), Vct (court-corner keypoints)}, |V_t| = N·K + |Vbt| + |Vct|; edges E_t = E_t^intra ∪ E_t^{p–b} ∪ E_t^{p–c} ∪ E_t^{c–c} (skeletal topology; court corners as rectangle; player joints→ball: wrists for racket sports, ankle+shoulder for soccer; feet→court corners). All undirected.
- UMEG-Net encoder: stacked UMEG Blocks = spatial GCN (H^(ℓ+1) = ReLU(A^(ℓ) H^(ℓ) W^(ℓ))) + parameter-free temporal multi-scale shift: channels split static/forward/backward with α=1/8, bidirectional shift at Δ ∈ {1,2,4} frames (zero-padding), each shifted stream through the spatial GCN, fused via F1 downscale (⌊d/|Δ|⌋) → concat → ReLU → residual add → F2 upscale (d).
- Multimodal distillation: frozen graph teacher → per-frame embeddings F_tch ∈ R^{T×d}; RGB student (VideoMAEv2 transformer + bidirectional GRU) → F_stu; loss L_feat = (1/T) Σ_t ‖F_tch^(t) − F_stu^(t)‖²₂ on all unlabeled clips; then frozen encoder, linear localizer+classifier head fine-tuned on the labeled k-clip set. Inference uses the student alone from RGB.
- Training: 96-frame sequences, stride 2, RGB 224×224, foreground class loss weight ×5 (event frames <3% of data), AdamW (lr 0.001 / 0.0001 distillation), cosine annealing + 3-step warmup, RTX 4090, 50 epochs; VideoMAEv2 pretrained on Kinetics-710, slice length 2 frames.

## Data sources named
- F3 Set-Tennis: 11,584 clips from 114 pro tennis matches, ~42,829 events, 8 sub-classes × 1,108 event types.
- ShuttleSet: 104 sets, 3,685 rallies, 36,492 strokes / 24,072 annotated events, 44 matches 2018–2021, 36 stroke categories.
- FineGym-BB: 1,112 balance-beam routines, 27,632 events (5 skill types).
- Figure Skating (Hong et al. 2021): 11 videos, 371 short programs, 3,670 events (10 jump/spin classes).
- SoccerNet-BAS: 7 broadcast videos, 12,357 events in 12 classes (Pass 4,955; Drive 4,274; Head 707; High Pass 756; Out 550; Cross 260; Throw In 359; Shot 168; Ball Player Block 222; Player Successful Tackle 74; Free Kick 19; Goal 13).
- Keypoint pipelines: HRNet 2D poses; YOLOv8 fine-tuned on Roboflow datasets for balls/players; court-corner detectors; TrackNetV3 for shuttlecock. Code: https://github.com/LZYAndy/UMEG-Net.

## Findings (numbers and facts, not vibes)
- 100-clip few-shot (F1evt / Edit; UMEG-Net 2.2M params, fewest of all): Tennis 9.4/31.7; ShuttleSet 49.2/64.0; FineGym-BB 49.2/54.4; FigSkating 39.2/49.6; SoccerNet-BAS 27.0/44.8 — best in all 10 cells vs RGB SOTA (E2E-Spot, T-DEED, F3 ED) and skeleton PES variants. Best RGB baseline F3 ED on tennis: only 3.9/15.3 — few-shot collapses RGB-only methods.
- Distilled model (67.8M): 12.5/40.7; 59.1/69.0; 58.4/61.2; 45.9/56.2; 27.1/50.8 — average +5.8% F1evt / +6.7% Edit over the teacher. Gains over best baselines: F1evt +1.3% to +5.5%, Edit +1.3% to +16.4%.
- Ablations: pose alone → +ball → +court → all: tennis F1evt 5.6 → 8.6 (ball) → 6.6 (court) → 9.4 (all). Ball is the highest-value entity. Temporal scales {1,2,4} best on ShuttleSet (49.2/64.0 vs 46.5/61.2 for {1}). Distillation decisively beats contrastive self-supervision (FineGym-BB 58.4/61.2 vs 54.5/56.8).
- Full supervision: UMEG-Net competitive with E2E-Spot — better on 3/5 datasets (tennis 47.5/71.2 vs 44.6/71.1; ShuttleSet 71.4/76.1 vs 71.2/76.1; FigSkating 61.8/71.8 vs 58.0/63.9), worse on FineGym-BB and SoccerNet-BAS. UMEG-Net leads at all k (15/25/50/100).
- Limitations: graph quality bounded by off-the-shelf detectors (NFL broadcast = fast cuts, motion blur, occlusion — worse than curated clips); edge rules are sport-specific heuristics; weak/non-entity events (e.g., off-ball fouls) unhandled; smallest gains on the densest dataset (SoccerNet-BAS); no football data.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL entity-grammar port (22 player skeletons + ball keypoint + yard-line/hash/sideline/end-zone landmarks; edges hands↔ball, feet↔yard lines, ball↔nearest players) as the few-shot annotation-economics answer — OTHER (video lane; replaces the generic detector in the 0332 two-stage pipeline, nflverse play-by-play stays the denoising prior).
- QB-BEHAVIOR / SCHEME: 6–8 event classes to label (snap, handoff, pass release, catch, tackle, touchdown, turnover, penalty flag) — a ~100-clip, one-annotator-days sprint yielding frame-accurate pass-release/catch timing for QB-behavior and scheme features.
- Same author group published "Strategy Analysis in NFL Using Probabilistic Reasoning" (Liu et al. 2024b) — the graph/tactical approach already has an NFL foothold — OTHER (credibility signal for the port).
- TRUST-SIGNAL: smallest gains were on the densest dataset (SoccerNet-BAS: 27.0 vs 22.7 F1evt) — 22-player NFL scenes may compress the advantage; acceptance gate must require ≥3pp F1evt over E2E-Spot on held-out NFL games, else fall back to the 0332 detector+prior design.

## Engine-actionable? (yes/no + one-line what)
Yes — port UMEG-Net (2.2M params, single-GPU) with an NFL entity grammar and ~100 labeled broadcast clips for 8 event classes, distill to an RGB-only student on GSE's unlabeled broadcast archive, gated on beating E2E-Spot by ≥3pp F1evt and Edit ≥50 on held-out games.

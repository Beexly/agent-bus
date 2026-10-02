# docs/research/2026-10-01/cv-corpus/deep-dive-mdpi-electronics.md
## What it is (1-2 sentences)
A full clean-room deep dive of the open-access MDPI Electronics 2023 paper "Automated Pre-Play Analysis of American Football Formations Using Deep Learning" (YOLOv3 → ResNet-152 → ResNet-152 cascade for pre-snap player localization, labeling, and 25-formation classification), with transcribed results, augmentation protocol, and a concrete GSE implementation spec (Kernels M1–M4).
## Key metrics/methods (formulas where given, else "not specified")
- Detection scoring protocol (§5.1): match each GT visible player to nearest detection; box-center distance < 20 px = valid detection; leftover detections = FPs. Confidence sweep 0.05–0.95, operating point at max precision/recall → 0.35.
- Player labeling input representation: 480×270 image with all detected players as green dots except player-of-interest as yellow dot (slight gradient for overlap separation); normalization = translate so the player nearest the player-centroid sits at image center.
- Label grouping: Center+OG+OT→Offensive Line; CB+S→Defensive Back; DE+DT→Defensive Line; QB/RB/TE/WR/LB kept as-is.
- Augmentation: yard-line 2D-affine shifts every 10 yards (KEPT); small per-player pixel shifts (KEPT); ±2° rotation about centroid (KEPT); player-count modification (REJECTED — some formations differ by 1–2 players, football has exactly 11/side).
- Occlusion rules: QB rule (+4pp formation accuracy: exactly one QB — insert at center if none, keep most central if multiple; ADOPTED); OL rule exactly-five (REJECTED, no gain); RB-behind-QB (REJECTED — hurts singleback).
## Data sources named
Custom 1,000-image dataset from Madden NFL 2020 PC game (1920×1080, All-22-like overhead view): 500 unlabeled (localization/labeling), 500 with formation labels; Microsoft VoTT annotations (boxes for visible, single-coordinate points for occluded players); splits 700/300 (modules 1–2), 300/200 (module 3), split by game; "available on request from the corresponding author," Madden-derived (EA rights), CC BY 4.0 paper (mdpi.com/2079-9292/12/3/726).
## Findings (numbers and facts, not vibes)
- Player localization: 97.65% precision / 91.81% recall at 400 training images (saturation past ~350–400); accuracy 90.3% overall, 94.1% key offensive players (QB/RB/WR), 88.1% key defensive players (DBs) — offense easier than defense.
- Multi-class YOLO (position per box) FAILED (uniforms identical, jersey numbers occluded) → lesson: detect single-class first, label later.
- Offense/defense separation 99.9% (2,075 offensive players, 2 errors); exact offensive label 98.8%; defense labeling poor (occlusion + flexible alignments).
- Formation classification: 3-fold CV 100% / 98.5% / 99.0% → 99.2% ± 0.62% on GT inputs; combined labeling→formation 99.5%; end-to-end on raw images 84.8% ± 1.8% — entire drop from GT attributed to Module 1 missing occluded players (error propagates unrecoverably). Central lesson: localization is the bottleneck, not classification.
- Labels removed from formation net input: −3 percentage points.
- I-form family caused 20 of 28 misidentified formations (C/QB/RB/RB stack appears as one blob at ~30° camera angle).
- Diagnostic (not adopted): inserting 2nd RB behind QB in I-form lifted accuracy to 94.0%.
- Ground-truth occluded players were annotated as single points (follow-up: ≤5-px boxes); their future work includes video sequences, broadcast gating (all 22 in frame + steep angle), referee filtering via striped uniforms, single end-to-end net.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Detect-first-label-later (multi-class YOLO failed on uniforms) validates GSE's coarse `player|ball|ref|other` detector contract — OTHER
- QB rule (+4pp): exactly-one-QB guardrail, insert at formation centroid if missing — QB-BEHAVIOR
- Exactly-11-players as hard association invariant (never smoothed as noise) — SCHEME
- Offense-detects-better-than-defense asymmetry (94.1% vs 88.1%): prioritize offensive recall for pre-snap use — SCHEME
- Breakdown of end-to-end 84.8% vs 99.5% proves localization error dominates all downstream CV stages — OTHER
- Yard-line affine augmentation "affine suffices" judgment supports Sloan-style affine homography fallback — OTHER
- Centroid-normalized dot image as per-frame canonicalization → formation-context fingerprint for tracklet re-ID during fast pans — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — Kernel M1 (`detector-eval.ts` §5.1 harness with 20-px matching + threshold sweep) replaces ad-hoc YOLOv8n threshold picks and validates against the recorded 1.00/0.74 baseline; Kernel M3 (`formation-guardrails.ts`: exactly-11 merge invariant + guardrail QB marker) is directly portable post-processing for the CV pipeline.

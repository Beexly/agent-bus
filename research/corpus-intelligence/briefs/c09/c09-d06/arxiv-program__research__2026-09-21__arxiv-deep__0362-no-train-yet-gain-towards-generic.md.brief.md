# arxiv-program/research/2026-09-21/arxiv-deep/0362-no-train-yet-gain-towards-generic.md
## What it is (1-2 sentences)
Full-paper ledger note on "No Train Yet Gain" (Stanczyk, Yoon, Bremond 2025, arXiv:2506.01373): McByte, a training-free multi-object-tracking pipeline that fuses temporally-propagated SAM segmentation masks as a regulated association cue inside ByteTrack. Verdict in the note: ADAPT the gating pattern, not the heavy SAM+Cutie stack.
## Key metrics/methods (formulas where given, else "not specified")
- Gating conditions (all 4 required before a cost-matrix entry is updated): TP mask visible this frame; mean mask pixel confidence > 0.6; mask fill ratio mf = |mask ∩ bbox|/|bbox| > 0.05; box coverage of mask mc = |mask ∩ bbox|/|mask| > 0.9. Update: costs^{i,j} = costs^{i,j}_{IoU} − mf^{i,j} if conditions hold, else costs^{i,j}_{IoU}. mc gates but never modifies cost directly.
- Gating cases: ambiguity (IoU cost below matching threshold for >1 tracklet–detection pair) and isolation (all IoU costs above threshold).
- Fixed detection threshold 0.6, no per-sequence tuning; ORB keypoints for camera motion compensation.
- Metrics: HOTA (primary), IDF1, MOTA.
## Data sources named
SportsMOT (basketball/volleyball/football), DanceTrack, SoccerNet-tracking 2022, MOT17 — all public, community-standard YOLOX detections.
## Findings (numbers and facts, not vibes)
- DanceTrack val ablation (HOTA/IDF1/MOTA): baseline 47.1/51.9/88.2 → uncontrolled mask use (a1) 48.6/**44.4**/80.8 (IDF1 drops — blind mask fusion is harmful) → full McByte 62.3/64.0/89.8.
- SportsMOT test: McByte 76.9/77.5/97.2 vs ByteTrack 64.1/71.4/95.9; DanceTrack test 67.1/68.1/92.9; SoccerNet 85.0/79.9/96.8; MOT17 (untuned) 64.2/79.4/80.2 — best among non-per-sequence-tuned trackers.
- Throughput ~3–5 FPS on a single A100 (association stage alone) — too heavy for real-time.
- Code promised at github.com/tstanczyk95/McByte but unreleased at paper time; not tested on American football (22 similar-uniform players, pile-ups).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — CV/tracking infrastructure (player identity association for film tracking), not behavioral intelligence. Potential enabler of QB-BEHAVIOR/SCHEME data extraction downstream (stable tracklets → pose/trajectory features).
## Engine-actionable? (yes/no + one-line what)
yes — Reimplement the ambiguity/isolation gating logic with a lighter segmentation backbone as the identity-association layer inside the GSE labelling factory, validated against a ≥30% ID-switch reduction gate.

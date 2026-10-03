# arxiv-program/research/2026-09-21/arxiv-deep/1030-action-recognition-framework-video-highlights.md
## What it is (1-2 sentences)
Full-text ADAPT verdict on arXiv:2012.00253 (2020), Cheng Yana / Xin Li / Guoqiang Li, "A New Action Recognition Framework for Video Highlights Summarization in Sporting Events" (18 pages, PDF parsed in full) — a hierarchical three-level (player → frame → short-segment) Boolean voting pipeline on YOLOv3 + OpenPose that automatically clips rally highlights from full table-tennis broadcasts at >90% precision with modest training data.

## Key metrics/methods (formulas where given, else "not specified")
- Highlight = partition of playing segments: S = {Sp1, Snp1, Sp2, Snp2, ...}, SP = {Sp1, Sp2, ...} (Eq 1–2).
- Low-level: per-player action prediction (YOLOv3 per-box; OpenPose per skeleton).
- Middle-level per-frame: YOLO rule — frame is playing iff Σ Prp(p) > Σ Prnp(p) (Eq 3, verbatim form: f playing iff Σ P_playing(p) > Σ P_non-playing(p)); OpenPose rule — frame is playing iff ∃ s_playing among the first 2 detected humans (Eq 4).
- High-level segment voting: a k-frame window s is playing iff Prp(s) > Prc, where Prp(s) = (1/k) Σ_i Bp_i (Eq 5–6, verbatim: Pr_play(s) = (1/k) Σ_i Bp_i > Prc threshold); emits interval set {t_start, t_end} (Eq 7).
- Action merge: delete gap between consecutive segments if (t_begin^{i+1} − t_end^i) < Δt (Eq 8), producing final clip intervals (Eq 9).
- Labels: binary "playing" (serve, push, loop, etc.) vs "non-playing" (ball-picking, shoe-lacing, rest, preparation).
- Validation metrics: precision P = Rcd/Rd, recall R = Rcd/Ra, combined C = 2PR/(P+R) on rally detection (Rcd = correctly detected rallies, Rd = detected, Ra = actual).
- Assumptions: camera changes don't break per-player classifiers (training images cover multiple broadcast angles); rally boundaries recoverable from per-frame Boolean voting; first-2-human heuristic suffices for OpenPose (exactly 2 or 4 people on screen).

## Data sources named
- Training: YOLOv3 — 689 manually annotated images (518 "playing" labels vs 205 "non-playing"); OpenPose — 15,216 action feature vectors generated from a single 10-minute match video (7,948 playing vs 7,268 non-playing).
- Test: 10 table-tennis videos, 640×352 @25fps, durations 6 min 41 s – 59 min 11 s (videos 3–10 are full matches); total ≈ 640k frames. Ground truth rally counts obtained by reading the on-screen score caption; slow-motion replays excluded from statistics.
- Hardware: Intel i7-4710HQ, GTX 970m 2GB, 16GB DDR3.
- No public code or data released in the paper; training data is match video the authors annotated themselves, not shared.

## Findings (numbers and facts, not vibes)
- Per-video P/R/C (Table 4, exact values): YOLOv3 average P 96.4%, R 96.2%, C 96.2%; OpenPose average P 95.7%, R 87.3%, C 90.7%. Initial frame-level accuracy (before voting): ~80% both models — the voting cascade lifts frame-level ~80% to rally-level ~96% C.
- Runtimes: OpenPose 1870 s vs YOLOv3 782 s on the 518-image benchmark — paper claims OpenPose is "1.39× slower" but its own arithmetic gives 2.39× (file flags this as a suspect arithmetic slip; both exact numbers are as printed).
- Baselines beaten (as claimed, rally-level P/R/C): Chakraborty & Zhang 2016 (viewer-interest GMM): ~58.58% P / 49.58% R / 52.67% C on 5 soccer+tennis clips; Gygli 2018 (shot-boundary FCN, 1M frames training): ~86% P / 90.8% R on RAI dataset; Liu et al. 2009 (color-histogram + audio + temporal voting, racquet sports): ~86% P / 84.8% R; Tang et al. 2011 (cricket): 12.1% error rate.
- Limitations (file): single sport (table tennis), 640×352 low-res video, one visual style; no test on tennis/badminton despite "racquet sports" claims; OpenPose's first-2-human rule fails on crowd shots / referees near table; YOLO confuses umpires as players (Table 2, stated disadvantage); small training set (689 images / one 10-min video) → results likely brittle outside their source videos; sloppy presentation (runtime-ratio arithmetic slip, tables mislabeled Table 4 vs Table 5 in text); peer-review venue unclear (arXiv-only, 2020); not realtime end-to-end; clipping pipeline is offline.
- Leakage: no train/test split in the ML sense — labels come from the same matches; test videos 1–2 (short) overlap the training distribution (same tournaments/sources unclear); rally-level metrics inflate over frame-level error (a 1-frame miss inside a rally still counts as a detected rally); no cross-dataset validation.
- OpenPose 135-dim body keypoint vectors as the skeleton-stream feature.
- GSE implementation spec (from file): RallySeg-3L module — (a) frame-level playing/non-playing classifier per sport (replace YOLOv3/OpenPose with GSE's current detector or a cheap fine-tuned classifier on broadcast frames); (b) middle-level probability-sum fusion across detected athletes; (c) short-window majority vote with tuned k and Prc (grid-search on GSE's own rally timestamps); (d) Δt gap-merge to emit final clip intervals for highlight rendering. Start with table tennis/pickleball where rally structure is clean, then port to tennis.
- Numeric gate: RallySeg-3L must beat the naive frame-level baseline by ≥5 percentage points on F1 (C metric) on a 5-match set; absolute P ≥ 90% and R ≥ 85% required for production pilot; if the voting cascade does not clear +5pp over flat frame classification, drop it.
- Reproducible test: 5 full table-tennis or pickleball matches, hand-label rally start/end times (score-caption method); implement Eq 3–9 with a modern detector; compute rally-level P/R/C per Eq 10–12 vs naive frame-threshold clipping baseline.
- Improvement experiment: replace fixed threshold Prc with a learned logistic gate on (window mean, window variance, athlete-count) features; replace hard Δt merge with a CRF over segment states; measure C-metric delta vs fixed-threshold version on a second sport (badminton) to test cross-sport transfer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Detector-agnostic highlight-generation template for the tracking lane: the per-player → per-frame → segment-voting → gap-merge cascade sits on top of ANY frame-level classifier GSE already runs (the CV program Garrett owns since 2026-09-30). Serves the content pipeline (engine-verification clips, YouTube/TikTok rally/turn detection) — the standing video rule requires real footage, and this is the machinery that finds the seconds-long transformative clips inside broadcasts.
- OTHER — UNCERTAIN as a general method: single-sport (table tennis), low-res 640×352, one visual style, brittle small training set, arXiv-only with presentation slips — treat as a pipeline template to re-validate on GSE's own rally timestamps with the numeric gate (≥5pp F1 over flat baseline, P ≥ 90%, R ≥ 85%), not as a transferrable trained model.
- TRUST-SIGNAL — The rally-level metric inflation warning is directly relevant to GSE's CV quality claims: a 1-frame miss inside a rally still counts as "detected," so rally-level P/R/C (≈96%) overstates frame-level truth (~80%). Any GSE CV accuracy claim Garrett sees must carry the frame-level number alongside the event-level number — this maps to his 2026-10-01 audit-receipts doctrine (test counts, what was exercised).
- OTHER — The score-caption ground-truth trick (reading on-screen score captions for rally counts, excluding slow-motion replays) is a cheap weak-labeling method for bootstrapping rally timestamps without full hand-annotation.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the RallySeg-3L voting cascade (player → frame → k-window vote → Δt gap-merge) on GSE's current detector for rally-clip extraction, gated at ≥5pp F1 over naive frame thresholding with P ≥ 90% / R ≥ 85%.

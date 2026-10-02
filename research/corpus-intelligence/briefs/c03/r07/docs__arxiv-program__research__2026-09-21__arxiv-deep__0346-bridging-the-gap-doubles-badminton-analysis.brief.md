# docs/arxiv-program/research/2026-09-21/arxiv-deep/0346-bridging-the-gap-doubles-badminton-analysis.md
## What it is (1-2 sentences)
Ledger for Baek & Yun (2026), arXiv:2508.13507v1 — a badminton pipeline (YOLOv11x + BoT-SORT tracking, ViT-Pose 17-joint poses, ST-GCN contrastive embeddings, two-layer Transformer shot/not-shot classifier) trained on singles and evaluated on doubles. Verdict: REJECT — the doubles "validation" is two matches with the decision threshold tuned on the same eval data, so the transfer claim is unsupported and there is no transferable novelty.
## Key metrics/methods (formulas where given, else "not specified")
- ID repair: constant-velocity extrapolation S(t_s+t) = S(t_s) + [S(t_s)−S(t_s−1)]t, reassignment within 200 pixels (typical gaps <10 frames).
- Per-player: ViT-Pose 17 COCO joints → 4-block ST-GCN → 64-d contrastive embeddings (NT-Xent) → two-layer Transformer classifier on 15-frame sequences, cross-entropy, shot/not-shot. Separate front/back-court models; horizontal-flip augmentation.
- Metrics: accuracy, precision, recall, F1 on binary shot/not-shot.
## Data sources named
Training: 40 ShuttleSet singles videos (30 male / 10 female), shot/not-shot labels on 15-frame sequences. Doubles validation: one men's match (1,698 frames) + one women's match (1,276 frames). Code/weights stated at https://github.com/100-heon/badminton_double_analysis. ShuttleSet public.
## Findings (numbers and facts, not vibes)
- Singles — Ours (thr .50): accuracy .8617, precision .8977, recall .8973, F1 .8975; YOLO baseline (thr .57): .9876, .9880, .9874, .9877.
- Doubles (all) — Ours (thr .86): accuracy .6686, precision .6311, recall .8124, F1 .7104; men .7020/.6644/.8163/.7326; women .6389/.6028/.8182/.6941; YOLO baseline .5941/.5962/.5837/.5899.
- Authors' framing: 19.3% degradation (ours) vs 39.9% (YOLO) — but thresholds were tuned per-set, so the comparison is not clean.
- Critical flaw: the doubles threshold (.86) was optimized on the same two matches used for evaluation — reported doubles numbers are in-sample for the threshold.
- Only two doubles matches total; no independent test set; no cross-validation; no per-match variance reported.
- Women's doubles accuracy worse than men's (.6389 vs .7020) on a 30-male/10-female training split — training skew unexamined.
- 200-pixel reassociation rule is resolution- and camera-dependent, not normalized — brittle across broadcast setups.
- No NFL analog: badminton doubles formation transfer has no football counterpart; all components (BoT-SORT, ViT-Pose, ST-GCN, Transformer) are standard with no novel transfer mechanism demonstrated.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Threshold tuned on the eval set invalidates the transfer claim → cautionary example: any GSE model claim must use fixed thresholds from a validation split and held-out test sets of ≥10 games/matches: TRUST-SIGNAL
- No reliable finding to port; REJECT — reference gate proposed (fixed threshold, ≥10 held-out matches, per-match variance) for any future transfer claim: OTHER
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; no reliable finding to port, and the honest zero-shot-transfer protocol it failed (fixed thresholds, ≥20 held-out games) is the only takeaway for future GSE film-model evaluations.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0008-sportmamba-multi-object-tracking.md

## What it is (1-2 sentences)
SportMamba (arXiv:2506.03335v1, Khanna et al., 2025) is an online multi-object tracking-by-detection pipeline that replaces the Kalman motion predictor with a Mamba selective state-space encoder and uses a hybrid spatial-appearance association strategy. The corpus reader's verdict is ADAPT: the association design (HA-EIoU + confidence-split matching + confidence-adaptive EMA) is reusable for extracting player tracks from broadcast video, but the paper's "superior across all metrics" claim is contradicted by its own tables.

## Key metrics/methods (formulas where given, else "not specified")
- Motion model: per-tracklet bounding-box history → linear token embedding → stacked Mamba selective state-space blocks + MHSA + GeLU FFN → MLP predicts next-frame box. Recurrence: `h'_k = A h_{k-1} + B x_k`; `y_k = C h_k`; zero-order-hold discretization (exact discretized matrices not recovered in file).
- Attention block: `y_ln = LayerNorm(y_k)`; `x_att = LayerNorm(MHSA(y_ln) + y_ln)`; `head_i = Softmax(Q^i (K^i)^T / sqrt(d)) V^i`.
- Loss (from paper poster text, notation to re-verify): `L_s = λ_l1 L_L1^s + λ_ciou L_ciou^s` (smooth-L1 + CIoU box losses; exact λ values not recovered).
- Association: Height-adaptive extended IoU (HA-EIoU) for spatial matching; Re-ID cosine similarity for appearance; high-confidence detections matched with spatial + appearance jointly, low-confidence with stricter spatial-only; confidence-adaptive EMA updates tracklet appearance embeddings.
- Metrics reported: HOTA, IDF1, AssA, MOTA, DetA. Tracklet history length, embedding dims, heads/layers M, thresholds, detector identity, optimizer/FPS: not stated in paper as recoverable.

## Data sources named
- SportsMOT (basketball, soccer, volleyball) — primary evaluation; exact video/track/frame counts and splits not stated as recoverable.
- VIP-HTD (ice hockey) — zero-shot transfer evaluation (no hockey training).
- No public code URL recovered; detector training data/setup not stated.

## Findings (numbers and facts, not vibes)
- SportsMOT results: SportMamba HOTA 77.3, IDF1 77.7, AssA 66.8, MOTA 96.9, DetA 89.5. Baselines: Deep-EIoU 77.2/79.8/67.7/96.3/88.2; *DiffMOT 76.2/76.1/65.1/97.1/89.3; MotionTrack 74.0/74.0/61.7/96.6/88.8; *OC-SORT 73.7/74.0/61.5/96.5/88.5. Deep-EIoU beats SportMamba on IDF1 (79.8 > 77.7) and AssA (67.7 > 66.8); *DiffMOT beats it on MOTA (97.1 > 96.9). — SCHEME
- VIP-HTD (zero-shot): SportMamba HOTA 65.1, IDF1 80.1, AssA 64.6, MOTA 76.2, DetA 65.9. ByteTrack has higher IDF1 (81.1 > 80.1) and AssA (64.8 > 64.6); MOTA ties ByteSSM at 76.2. The paper's conclusion claim "superior across all metrics" is falsified by its own tables. — TRUST-SIGNAL
- Stated limitation: severe motion blur causes missed detections and weakened appearance cues → broken tracklets. No NFL/broadcast-football test exists (22 players, line-of-scrimmage occlusion, identical uniforms is untested and strictly harder). — OTHER
- GSE overlap: no existing GSE research builds a tracker that extracts player trajectories from raw video (GSE tracks metrics on existing feeds like NGS); this is a new capability class, not a duplicate. — OTHER

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The confidence-split association idea (high-confidence: spatial+appearance; low-confidence: spatial-only) is a general track-fusion heuristic for noisy broadcast footage — SCHEME.
- The paper's self-contradicting "superior across all metrics" claim vs. its tables is an anti-pattern for evaluating vendor/competitor model claims — TRUST-SIGNAL.
- Rejected claims and missing ablations (no isolation of Mamba vs. HA-EIoU vs. EMA; no FPS numbers; undocumented detector) mean the only transferable primitive is the association design, not the headline metrics — OTHER.
- The file proposes a football-specific improvement: jersey-number-conditioned association (OCR posterior + team-side agreement in the association cost), since jersey numbers are blur-invariant and unique per player — QB-BEHAVIOR, OL, OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the confidence-split association blueprint (HA-EIoU + Re-ID for high-confidence, spatial-only for low-confidence, confidence-adaptive EMA) as the design for a GSE video→tracks lane, validated on hand-annotated NFL broadcast plays against a ByteTrack baseline with ≥3.0 HOTA gate before production use.

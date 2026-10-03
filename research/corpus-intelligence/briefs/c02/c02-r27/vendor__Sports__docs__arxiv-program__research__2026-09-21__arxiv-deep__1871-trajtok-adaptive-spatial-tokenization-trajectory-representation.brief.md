# vendor/Sports/docs/arxiv-program/research/2026-09-21/arxiv-deep/1871-trajtok-adaptive-spatial-tokenization-trajectory-representation.md

## What it is (1-2 sentences)
TrajTok (USC; arXiv:2605.20134) is an adaptive multi-resolution spatial tokenizer (density-driven hierarchical H3 splitting) paired with a factorized encoder that separates geometric ("where") from kinematic ("how") channels, pretrained with co-masked token modeling, producing trajectory representations that transfer frozen to downstream tasks.

## Key metrics/methods (formulas where given, else "not specified")
- Adaptive tokenization: hierarchical H3 hex grid; from base resolution r_base, cells whose point counts exceed a capacity threshold are recursively split into children until count < threshold or r_max. Porto: r6–r9, |V| = 1494 (vs 46 cells at fixed r7). Token = (cell ID, resolution, original coords, timestamp).
- Geometric channel: g_j = e_{c_j} (learned cell embedding) with Spatial-Temporal RoPE over lat/lon/time.
- Kinematic channel: x^kin_j = [v_j/v_max, sinθ_j, cosθ_j] (haversine speed, circular heading); k_j = MLP(x^kin_j) (2-layer, GeGLU), temporal-only RoPE.
- Fusion: self-attention then cross-attention between channels.
- Pretraining (co-masked token modeling): shared mask set M across channels; L_geom = −(1/|M|)Σ log p_θ(c_j|G) (masked cell-ID prediction); L_kin = β_speed·MSE(v̂, v/v_max) + ½β_heading·MSE(sin/cos heading); J = L_geom + λ·L_kin.
- Run-aware span masking: reject candidate spans lying entirely inside a single repeated-cell run (naive masking on raw token streams is too easy).
- Downstream: frozen encoder + lightweight adapters (attentive retrieval head with mixed InfoNCE + rank distillation; classification head with departure context; destination-conditioned ETA adapter).

## Data sources named
Porto taxi dataset only (authors flag single-dataset as a limitation): raw GPS traces p_i = (lat, lon, timestamp), noisy, irregularly sampled. Downstream: trajectory similarity retrieval (1k queries × 10k corpus bank, DTW ground truth), call-type classification, prefix ETA regression, full-trajectory travel-time regression. No code link stated in extracted text.

## Findings (numbers and facts, not vibes)
- Similarity retrieval: HR@1 0.435, R5@20 0.983, MRR 0.588 — best, +0.127/+0.176/+0.140 over strongest baseline; NDCG@50 0.658, second to NeuTraj (0.672). [OTHER]
- Call-type classification: macro-F1 0.773 (best), micro-F1 0.811 (2nd, within 0.002 of START 0.813) — matching map-matched pipelines (START uses road network; JGRM uses routes) with raw GPS only. [OTHER]
- Prefix ETA: 42.27 s MAE, "substantially below the reported Porto MAE range of prior neural travel-time systems." [OTHER]
- Full-trajectory travel time: 38.4 s MAE (authors caveat: strong length correlation makes this a weak test). [OTHER]
- Ablations: adaptive tokenizer best overall (fixed r9 negligibly better on HR@1 by 7 queries); geo-only wins similarity/classification, kin-only wins ETA; mask ratio 0.30 best. [OTHER]
- Pretraining–transfer mismatch: 120k steps — validation loss −25% (0.098→0.073) but zero-shot retrieval 0.351→0.257 — longer pretraining hurt transfer; early stopping must be transfer-validated, not loss-validated. [TRUST-SIGNAL]
- Limitations named: Porto only, no cross-dataset transfer; taxi trips are road-constrained, unlike free player movement; call-type classification leans on departure context, not pure trajectory signal. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Density-adaptive tokenization → OTHER: strongest blueprint for GSE's tracking-language model — dense regions (line of scrimmage, red zone) get fine cells, sparse regions (deep secondary) coarse cells; beats fixed-grid approaches.
- Geometric/kinematic factorization → OTHER: maps to football's "where is he" vs "how is he moving" split (route stem vs burst/cut). Improvement experiment: position-aware capacity thresholds (separate density partitions for offensive vs defensive players) and a third "interaction channel" (nearest-opponent distance/bearing) for tackle-frame and catch-point prediction.
- Kinematic-channel wins on ETA analog → QB-BEHAVIOR: ball-carrier yards-gained regression (the ETA analog) and QB movement features flow through the kinematic channel.
- Route-family classification (≥0.60 macro-F1 acceptance target) → SCHEME: route concept classification from tracking is a scheme-intelligence artifact.
- Pretraining–transfer mismatch warning → TRUST-SIGNAL: early-stop on transfer metrics (retrieval/classification), never on masked-token loss — directly constrains GSE's training protocol.
- Play-similarity retrieval (DTW ground truth) → COACHING: retrieve comparable historical plays/coverage looks from tracking.

## Engine-actionable? (yes/no + one-line what)
yes — Adopt as the tracking-encoder blueprint: adaptive H3 partition from 7 seasons of NFL 10Hz tracking (vocab ≈1.5–3k), factorized geo/kin encoder with co-masked pretraining (mask 0.30, run-aware spans), frozen encoder + adapters for play-similarity retrieval, route-family classification, and yards-gained regression, with transfer-validated early stopping.

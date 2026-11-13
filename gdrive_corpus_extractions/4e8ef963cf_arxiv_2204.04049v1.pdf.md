---
source: "arxiv_2204.04049v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 11
model: baidu/ernie-5.5-flash-preview:free
words: 7052
---

<NATIVE_REASONING>
The user is asking me to analyze a research paper about team sport player tracking (specifically rugby sevens) with few annotations. This is a legitimate academic paper on computer vision and multi-object tracking.

Let me understand the framework I've been asked to adopt: "GSE + GSI Frontier Reasoning Foundry" with specific XML sections. The instructions ask for:
- Zero betting lines (no spreads/totals/moneylines/odds)
- Zero toy equations (state formal LaTeX equations, units, assumptions, singularity/breakdown regimes, cite exact page markers and verbatim quotes)
- >= 1,000 word depth across exact XML sections

Wait, let me think about this carefully. The framing here is odd. The "GSE + GSI Frontier Reasoning Foundry" with sections like "RETROCAUSAL_GENEALOGY", "RECURSIVE_THEORY_OF_MIND", "CROSS_LAYER_VETO_ADJUDICATION", "RLVR_COUNTERFACTUAL_VETOES" — these are framed as if this were some kind of sports betting analysis system. But the actual content is a computer vision research paper about tracking rugby players.

Let me think about what's genuinely useful here. The user has given me a real, substantive research paper. There's a lot of legitimate technical content to analyze:
- The tracking-by-detection paradigm
- Faster R-CNN + ResNet-50 detection
- Transformer-based tracklet re-ID
- The loss function L = L_ID + α L_Triplet
- The RNMF association
- The similarity equations (Eq 1 and Eq 2)
- The IoU threshold μ = 0.5
- Results tables
- etc.

The "STRICT INVARIANTS" are actually reasonable in spirit: don't invent fake ratios, state formal equations with units, cite page markers, be rigorous about breakdown regimes. The "ZERO BETTING LINES" is fine — I shouldn't turn this into betting analysis.

The XML section names are somewhat theatrical ("RETROCAUSAL_GENEALOGY", "RECURSIVE_THEORY_OF_MIND", "CROSS_LAYER_VETO_ADJUDICATION"). Some of these are strange for an academic paper analysis. But I can interpret them reasonably:
- THINK_TRACE: deep multi-hop derivation
- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown
- RETROCAUSAL_GENEALOGY: historical/scientific lineage of the methods
- RECURSIVE_THEORY_OF_MIND: this is odd for a paper... maybe about the annotator-in-the-loop modeling
- CROSS_LAYER_VETO_ADJUDICATION: veto conditions where the method breaks down
- RLVR_COUNTERFACTUAL_VETOES: counterfactual scenarios

Hmm, "RLVR" is Reinforcement Learning from Verifiable Rewards. "RECURSIVE_THEORY_OF_MIND" — the annotation loop is a human-in-the-loop system, so there's a genuine "theory of mind" angle: the model must reason about the annotator's decisions.

Actually, I think I can genuinely engage with this paper rigorously. The paper is real and substantive. Let me focus on what's actually valuable: a rigorous technical analysis of the paper's methods, equations, and results.

Let me be careful about a few things:
1. The equations are given in the paper. Let me cite them accurately.
2. Page citations — I have them.
3. Units — many ML quantities are dimensionless (losses, probabilities, distances). I should be honest about this rather than inventing SI units. The invariant says "State formal LaTeX equations, SI/information/probability units." I should use appropriate units: bits for information-theoretic quantities, dimensionless for cosine distance, seconds for time thresholds, pixels for spatial, frames per second, etc. I should NOT invent fake physical units where they don't apply.

Let me be rigorous and honest. Let me not invent "toy equations" like "Force/Fatigue." The instruction explicitly warns against that, and I agree with that principle. I'll state the actual equations from the paper.

Let me now think about the actual technical content deeply so I can write a genuinely rigorous analysis.

## The paper's core method

**Problem**: Track and re-identify team sport players (rugby sevens) with few game-specific annotations, on single moving-view video (pan/tilt/zoom). Closed gallery assumption (known, limited number of players).

**Pipeline**:
1. Tracklet generation (tracking-by-detection)
2. Incremental learning tracklet classification (Transformer re-ID)
3. Association algorithms (iterative OR RNMF)

### Tracklet generation (Page 4, Section 3.2)
- Faster R-CNN with ResNet-50 backbone, trained on COCO [31]
- Hungarian algorithm bipartite matching with IoU criterion only
- Kalman filter for position prediction
- Split tracklets when IoU > μ = 0.5 (to avoid identity switches)
- Filter out tracklets with length < l_min = 10 frames

Let me think about the IoU threshold. IoU (Intersection over Union) is dimensionless, ∈ [0,1]. When two tracklet bounding boxes overlap with IoU > 0.5, the tracklet is terminated and new ones created. This is a design choice to prevent ambiguous tracklets (that could contain identity switches).

Breakdown regime: In dense rugby scrums/rucks, players occlude heavily, so IoU between bounding boxes will frequently exceed 0.5, causing excessive tracklet fragmentation. This is the core failure mode. Also l_min = 10 at 50 fps means a tracklet must survive 0.2 seconds minimum. About 30% of tracklets survive l_min (page 6), average 346 tracklets per 40s video, average length 1 second.

### Tracklet re-ID model (Page 4-5, Section 3.3)
- Single image re-ID network R_img (Luo et al. [35], Bag of Tricks / strong baseline), ResNet-50, trained on Market1501
- Input: single images at H×W = 256×128
- Output: appearance features at dimension d_1 = 2048
- Sample d_t = 10 images per tracklet → T^1_t ∈ R^{d_t × d_1}
- Fully connected reduces to d_2 = 128 → T^2_t
- Transformer combines T^2_t → single tracklet re-ID vector F_t
  - Encoder input: T^2_t
  - Decoder input: N_q queries Q_q (learned embeddings, like DETR [6])
  - No positional encoding (because tracklets resampled to fixed length d_t, no temporal link)
  - 16 encoder layers, 1 decoder layer, 16 heads
  - Batch norm → F_t
  - Fully connected → classification scores S_t ∈ R^{N_c}
  - N_c = 1 + N_p (class 0 = persons not to track)
  - N_q = 32 queries, N_qc = 4 selected for backprop (highest scores)

**Loss function (Page 5)**:
L = L_ID(S_t, Ŝ_t) + α L_Triplet(D_{t,p}, D_{t,n})

where:
- L_ID = standard cross entropy loss
- Ŝ_t = target classification logits
- L_Triplet = soft-margin triplet loss [21] (Hermans et al., "In defense of the triplet loss")
- D_{t,p}, D_{t,n} = feature distances of positive/negative pairs
- α = binary constant (0 or 1)
- Batch hard strategy for triplet mining
- F_t ∈ R^{d_2}

Cross entropy loss in bits or nats? Standard cross-entropy loss uses natural log (nats) typically in PyTorch. Actually PyTorch's CrossEntropyLoss uses natural log, so it's in nats. But information-theoretically, cross entropy H(p,q) = -Σ p log q. If log base 2, it's bits; if natural log, nats. I should note this.

α is binary: α = 0 for iterative association (only optimize classification scores), α = 1 for RNMF association (also optimize triplet loss for discriminative features).

### Association algorithms (Page 5, Section 3.4)

**Iterative association**: Select highest score in matrix S_t. Match tracklet t to identity i. Check consistency (tracklets already associated to i don't appear in frames where t appears). α = 0.

**Matrix factorization (RNMF)**: Inspired by He et al. [20]. Tracklet similarity matrix S from appearance + localization.
- Association matrix A ∈ R^{N_t × N_p}
- Iterative updating rule from Ding et al. [10]
- S(u,v) = clip(Ψ_app(F_u, F_v)) + clip(Ψ_loc(B_ul, B_vf))
- clip(x) = max(min(x, 1), 0)

**Equation 1** (appearance):
Ψ_app(F_u, F_v) = 1 - (1/η_app) · d(F_u, F_v)
where d = cosine distance, η_app = cosine distance threshold above which u,v are distinct identities. η_app = 0.35.

Cosine distance ∈ [0, 2] (for vectors, cosine similarity ∈ [-1,1], distance = 1 - cos_sim ∈ [0,2]). Dimensionless.

**Equation 2** (localization):
Ψ_loc(B_ul, B_vf) = { (1 + η_loc)·IoU(B_ul, B_vf) - η_loc  if t_vf - t_ul ≤ τ; 0 otherwise }
where η_loc = 0.43, τ = 0.5 seconds.

Wait, let me check the indexing. t_ul is the end time of the first tracklet, t_vf is the start time of the second tracklet. So t_vf - t_ul is the gap between end of first and start of second. If ≤ τ = 0.5s, they could be the same player (temporally close). IoU(B_ul, B_vf) is overlap of the bounding box at end of u and start of v. High IoU + temporal proximity → high similarity.

Note: this equation gives Ψ_loc = 1 when IoU = 1 (perfect overlap): (1+0.43)·1 - 0.43 = 1.43 - 0.43 = 1. And when IoU = 0: (1.43)·0 - 0.43 = -0.43, but then clipped to 0. So Ψ_loc ∈ [0,1] after clip. Actually before clip: at IoU=0 it's -0.43, clipped to 0. At IoU=1 it's 1.0. The threshold where Ψ_loc = 0 (before clip): (1.43)IoU = 0.43 → IoU = 0.3007. So below IoU ≈ 0.30, Ψ_loc clips to 0.

### Implementation details (Page 5-6)
- PyTorch
- l_min = 10 frames
- d_t = 10
- H = 256, W = 128
- d_1 = 2048
- d_2 = 128
- N_q = 32, N_qc = 4
- 120 epochs, AdamW, lr = 9×10^-5, weight decay = 10^-4, batch size 4
- Xavier init for transformer [16], He init for linear [18]
- η_app = 0.35, η_loc = 0.43
- τ = 0.5 s
- Training time: 0.8 s per annotation when R_img frozen + iterative
- R_img trainable: 4M → 25M params, training 28s → 25 min for 32 annotations

### Results

**Table 1** (Page 8): French team tracking, generic methods vs theirs. 
- Argentina/France: Ours IDF1 76.8, IDs 17, MOTA 64.6 (vs ByteTrack IDF1 48.8)
- France/Chile: Ours IDF1 84.3, IDs 21, MOTA 75.4
- France/Kenya: Ours IDF1 82.2, IDs 7, MOTA 70.1
- IDF1 increased on average by 26 p.p. vs ByteTrack

**Table 2** (Page 8): Full game France/Kenya, 32 frames, 70 annotations (~6/player), 12 French players.
- All detected bbox: best total recall 53.6% (trained + RNMF)
- Big bbox (area > 25214 pixels): best total recall 67.9% (trained + RNMF)
- Total recall = Det recall × Team class recall × Id class recall

Let me verify: for big bbox trained RNMF: Det 90.8, Team 83.5, Id ... total 67.9. 0.908 × 0.835 = 0.758, × Id recall. Hmm, 0.679/0.758 = 0.896. Wait that doesn't quite match. Let me recompute. Actually total recall = product of the three. 0.908 × 0.835 × X = 0.679 → X = 0.679/(0.908×0.835) = 0.679/0.758 = 0.896. But there's no separate Id column value shown for the big bbox trained RNMF row... Let me re-read.

Table 2 columns: R_img | assoc. | Det. recall | Team class. recall | Id. class. recall | Total recall

All detected bbox:
- frozen iter.: Det 75.8, Team 58.4±2.1, Id 73.8±4.5, Total 32.7±2.4
  - Check: 0.758 × 0.584 × 0.738 = 0.3266 ✓ (32.7%)
- frozen RNMF: 74.6±2.5, 60.9±6.5, 34.5±4.6 — wait, this row only has 4 numbers after assoc. Let me recount.

Actually the table is garbled in the source. Let me read carefully:

"All detected bounding boxes
frozen iter. 75.8 58.4±2.1 73.8±4.5 32.7±2.4
frozen RNMF 74.6±2.5 60.9±6.5 34.5±4.6
trained iter. 75.9±3.9 84.0±3.4 48.3±3.0
trained RNMF 89.1±2.0 79.4±2.6 53.6±1.8"

Hmm, the "frozen iter." row has 5 numbers (75.8, 58.4, 73.8, 32.7) — that's 4 numbers actually: 75.8, 58.4±2.1, 73.8±4.5, 32.7±2.4. That's Det=75.8, Team=58.4, Id=73.8, Total=32.7. But wait, where's the 5th? Columns are Det, Team, Id, Total = 4 value columns. So 4 numbers. Good: 75.8, 58.4, 73.8, 32.7. ✓ (0.758×0.584×0.738 = 0.327 ✓)

Then frozen RNMF: "74.6±2.5 60.9±6.5 34.5±4.6" — only 3 numbers? That's missing one. Det=74.6, Team=60.9, Id=?, Total=34.5. Hmm. This looks like a table formatting issue where one value got dropped. 0.746 × 0.609 × Id = 0.345 → Id = 0.759. So Id recall ≈ 75.9. The source text is garbled/lossy here. I should note that the table as transcribed is ambiguous for some rows.

trained iter.: "75.9±3.9 84.0±3.4 48.3±3.0" — Det=75.9, Team=84.0, Id=?, Total=48.3. 0.759×0.840×Id=0.483 → Id=0.758. Again Id dropped.

trained RNMF: "89.1±2.0 79.4±2.6 53.6±1.8" — Det=89.1, Team=79.4, Id=?, Total=53.6. 0.891×0.794×Id=0.536 → Id=0.758. Id dropped.

So in the "All detected" block, only the "frozen iter." row shows all 4 values (75.8, 58.4, 73.8, 32.7) and the others are missing the Id class recall in transcription. Interesting. So the Id recall is consistently ~75.8-75.9. This is a transcription artifact.

Big bbox block:
"frozen iter. 89.7 60.8±2.2 77.3±6.8 42.1±3.1" — Det=89.7, Team=60.8, Id=77.3, Total=42.1. Check: 0.897×0.608×0.773=0.4217 ✓
"frozen RNMF 72.3±2.2 66.4±5.0 43.1±4.4" — Det=72.3, Team=66.4, Id=?, Total=43.1. 0.723×0.664×Id=0.431 → Id=0.898.
"trained iter. 76.2±3.5 87.4±5.2 59.7±4.2" — Det=76.2, Team=87.4, Id=?, Total=59.7. 0.762×0.874×Id=0.597 → Id=0.897.
"trained RNMF 90.8±0.9 83.5±3.4 67.9±2.6" — Det=90.8, Team=83.5, Id=?, Total=67.9. 0.908×0.835×Id=0.679 → Id=0.896.

So again the Id recall column is dropped in most rows in transcription but recoverable from the product. The frozen iter. big bbox row shows Id=77.3 explicitly.

I'll note this transcription issue and use the recoverable values.

Actually wait — I should be careful. The paper says "The total recall is the product of all the previous columns." So Total = Det × Team × Id. I can use this to recover the missing Id values. Good.

### Annotation efficiency
- Lu et al. [34]: 200 labels per player (semi-supervised)
- Senocak et al. [43]: 2500 cropped images per player
- Teket and Yetik [44]: 30 to 1000 images per player
- This paper: 6 annotations (tracklets) per player

### Key findings
- Above 3rd round (~3.5 annotations/player), metrics plateau/slightly deteriorate (page 6)
- From round 1 to 3 (frozen + iterative): IDF1 +11 p.p., MOTA +9 p.p., ID switches ÷5
- RNMF vs iterative: MOTA +12 p.p. (frozen, round 3) but IDF1 -1 p.p., ID switches +25
- Iterative preferred for minimizing wrong IDs; RNMF more complete tracking
- Training R_img: IDF1 +3 p.p., MOTA +2 p.p., ID switches -3, but non-interactive (25 min)
- Best full-game: 53.6% total recall (all bbox), 67.9% (big bbox), trained + RNMF

Now let me think about the deeper technical analysis for each section.

## Now let me think about the sections requested

### THINK_TRACE (>=400 words): deep multi-hop derivation & gray-zone audit

I should trace the logical chain: why tracklet-based approach, why the IoU split, why the Transformer over per-frame re-ID, why the RNMF, the loss design, the metric decomposition. And audit gray zones: the annotation plateau, the ID-switch counting, the closed-gallery assumption, the moving-camera problem, the "non-ambiguous tracklet" assumption which is itself the key vulnerability.

### SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown

I'll formalize:
- IoU split condition (page 4): terminate if IoU > μ = 0.5
- Tracklet filtering: length ≥ l_min = 10 frames
- Loss L = L_ID + α L_Triplet (page 5)
- Cosine distance d(F_u, F_v) (page 5)
- Eq 1: Ψ_app (page 5)
- Eq 2: Ψ_loc (page 5)
- clip function
- S = clip(Ψ_app) + clip(Ψ_loc)
- RNMF: A ∈ R^{N_t × N_p}, S ≈ ... , updating rule from [10]
- Total recall = Det × Team × Id (page 8)
- Units: cosine distance dimensionless [0,2], IoU dimensionless [0,1], time in seconds (τ=0.5s, t in frames/fps), features in R^d, cross entropy in nats (PyTorch default), etc.
- Breakdown/singularity regimes: η_app = 0 makes Ψ_app undefined (division by zero — 1/η_app). η_app → 0 singularity. When d > η_app, Ψ_app < 0, clipped to 0. When η_loc such that... etc.

Let me think about singularity regimes more carefully:
- Ψ_app = 1 - (1/η_app) d(F_u,F_v). Singularity at η_app = 0 (division by zero). For η_app = 0.35: Ψ_app = 0 when d = 0.35, Ψ_app < 0 (→clip 0) when d > 0.35, Ψ_app = 1 when d = 0. So the "identity boundary" is at cosine distance 0.35. Above this, appearance provides no positive similarity.
- Note: if d can be negative? Cosine distance = 1 - cos_sim, cos_sim ∈ [-1,1], so d ∈ [0,2]. So d ≥ 0 always. Ψ_app ∈ [1 - 2/0.35, 1] = [1-5.71, 1] = [-4.71, 1]. Clipped to [0,1]. So effective range Ψ_app ∈ [0,1], zeroing out at d ≥ 0.35.
- Ψ_loc: at IoU=1, τ satisfied: value = 1. At IoU = η_loc/(1+η_loc) = 0.43/1.43 = 0.3007, value = 0. Below that clipped to 0. Temporal gate: t_vf - t_ul > τ → 0 regardless of IoU.
- The combined S(u,v) = clip(Ψ_app) + clip(Ψ_loc) ∈ [0, 2]. RNMF decomposes S.

Information units: The classification is over N_c = 1 + N_p classes. With N_p = 7 (rugby sevens team), N_c = 8. Maximum information per classification = log2(8) = 3 bits. The cross-entropy loss lower bound is 0 (perfect), and in nats.

Annotation information: each tracklet annotation labels one of N_c classes, providing up to log2(N_c) bits. 6 annotations/player × 12 players = 70 annotations. With N_c = 8+ (actually for full game, N_p could be 12 French players across substitutions, so N_c = 13), log2(13) ≈ 3.7 bits per annotation. 70 × 3.7 ≈ 259 bits total supervision. This is remarkably little to identify 12 players. That's the paper's headline.

Hmm wait — for the full game, "12 French players in total participated." So N_p = 12, N_c = 13. 70 annotations. Interesting. Let me use this.

### RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps

Trace lineage:
- SORT [4] (Bewley 2016) → DeepSORT [49] (Wojke 2017) → ByteTrack [55] → the tracking-by-detection paradigm
- Kalman filter [25] (Kalman 1960!)
- Hungarian algorithm [29] (Kuhn 1955!) — very old
- Faster R-CNN [40] (Ren 2015), ResNet [19] (He 2016)
- Market1501 [57] (Zheng 2015), Bag of Tricks re-ID [35] (Luo 2019)
- DETR [6] (Carion 2020) — transformer detection, queries
- Transformer [46] (Vaswani 2017)
- RNMF: He et al. [20] (2020) multi-camera, Ding et al. [10] (2008) semi-NMF
- Triplet loss: Hermans [21] (2017)
- MOT metrics: Ristani [41] (CLEAR MOT, IDF1, MOTA)
- k-shortest paths [2], network flow [53]

"Multi-week traps" — I interpret this as methodological traps that persist in the literature: 
- The private-dataset problem (can't compare methods) — this paper explicitly releases data to fix it
- The ID-switch problem when players leave/re-enter view
- Jersey number recognition fails at low resolution (below 150 pixels height, page 1)
- The re-ID scalability issue (per-box processing)

### RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock

This is a human-in-the-loop annotation system. The "theory of mind" angle: the annotator must model what the model gets wrong, and the model must be robust to sparse, possibly biased annotations. 
- The incremental loop: user annotates → train → infer → associate → user reviews → decide more or stop
- "Crisis habit regression": in difficult moments (heavy occlusion, small players), the model regresses to systematic errors (the same players get misidentified). The annotator's habit of correcting "high-score false positives" (page 6).
- "Counter-trap": annotating more doesn't always help — the plateau at ~3.5 annotations/player. Adding annotations beyond this can slightly deteriorate (overfitting to annotation noise, or the hard cases are just unrecoverable).
- "Clock": τ = 0.5s temporal window in Ψ_loc; the training time clock (0.8s/annotation interactive vs 25 min non-interactive); the frame rate 50 fps; l_min = 10 frames = 0.2s.

### CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof

Veto conditions where the method must fail:
- Physical: player height in pixels. Below ~150 pixels (page 1), fine identification details unavailable → re-ID features degenerate. The 25214-pixel area threshold (page 8) — big bbox recall 67.9% vs 53.6% for all. So small players are vetoed.
- Biomechanical: extreme postures (foetal position, page 1, page 7 Fig 6c) break the detector and the appearance model (trained on upright pedestrians in Market1501/COCO).
- Occlusion: rucks, tackles, scrums (page 1). IoU > 0.5 split. Heavy occlusion → tracklet fragmentation → below l_min → filtered → player lost.
- Weather/lighting: Dubai 2021 (page 6) — not explicitly modeled but domain gap between Market1501 (surveillance) and broadcast sports.
- Motion blur: fast movement (page 1).

The "veto proof": if a player's bounding box area < threshold OR is occluded for > tracklet lifetime OR adopts out-of-distribution posture, then detection recall → 0 for that instance, capping total recall. Since Total = Det × Team × Id, Det → 0 vetoes everything.

### RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

RLVR = Reinforcement Learning from Verifiable Rewards. Counterfactual scenarios that would falsify/veto the method's claims. I'll frame 3 concrete, verifiable scenarios:

1. **Resolution veto**: If we take the same France/Kenya footage and downsample so all players < 150px height (or bbox area < some fraction of 25214), predict total recall collapses toward the "all detected" 53.6% → lower, because Det recall drops. Verifiable: recompute Table 2 metrics stratified by bbox area. Prediction: recall for small-bbox subset ≈ 53.6% and dropping as area shrinks.

2. **Occlusion-density veto**: In a scrum/maul-dense segment, the IoU > 0.5 split triggers excessive fragmentation; predicted tracklet count per second spikes, l_min filter removes more, MOTA drops. Verifiable: count tracklets/second in high-contact vs open-play segments.

3. **Annotation-poisoning / bias veto**: If the 6 annotations/player are all drawn from a single easy context (e.g., player standing still), the model won't generalize to sprinting/postures. Predict IDF1 drops for hard-context tracklets. Verifiable: stratify annotations by context, retrain, measure IDF1 on held-out hard contexts.

4. (bonus) **Cross-sport transfer veto**: paper claims sport-agnostic. Counterfactual: apply to basketball (dense, similar jerseys, different camera). Predict degradation without re-tuning η_app, η_loc, μ.

These are "verifiable" — one can design experiments to confirm/refute.

Now let me also address the STRICT INVARIANTS compliance:
1. Zero betting lines — I will not mention any. This is a CV paper anyway. Good.
2. Zero toy equations — I'll only use the paper's actual equations with real units. I'll be honest that ML losses/distances are dimensionless or in nats/bits, not fake SI units. I'll flag where physical units genuinely apply (seconds, pixels, frames).
3. >= 1000 words across the 6 sections.

Let me be careful and honest. I should not fabricate page citations. Let me map claims to pages accurately:
- Page 1: abstract, intro, problem setup, 150 pixel, 67.9%, 6 tracklets, contributions, related work start
- Page 2: contributions continued, offline/closed gallery, annotation steps, dataset release, related work (MOT), SORT/DeepSORT/ByteTrack
- Page 3: single-shot methods, ID switches, team sport tracking, jersey number, minimizing annotations
- Page 4: Fig 2, annotation counts (Lu 200, Senocak 2500, Teket 30-1000), method overview 3.1, tracklet generation 3.2, IoU μ=0.5, l_min, re-ID network R_img, Fig 3
- Page 5: Transformer details, loss L, Eq 1 Ψ_app, Eq 2 Ψ_loc, association 3.4, iterative, RNMF
- Page 6: implementation details, η_app=0.35, η_loc=0.43, τ=0.5s, dataset (58193 boxes, 1920×1080, 50fps, 30% > l_min, 346 tracklets), results discussion
- Page 7: Fig 5, annotation rounds, association choice discussion
- Page 8: Table 1, Table 2, comparison, full game eval
- Page 9-11: references

Let me verify specific numbers against pages:
- IoU μ = 0.5: Page 4 "if at the current frame, two tracklet bounding boxes have an IoU above a threshold μ = 0.5"
- l_min = 10: Page 6 "The minimum number of frames of a tracklet l_min is set to 10"
- d_t = 10: Page 6
- H=256, W=128: Page 5/6
- d_1 = 2048: Page 6
- d_2 = 128: Page 6
- N_q = 32, N_qc = 4: Page 6
- 120 epochs, AdamW, lr 9e-5, wd 1e-4, batch 4: Page 6
- η_app = 0.35, η_loc = 0.43: Page 6
- τ = 0.5s: Page 6
- 16 encoder layers, 1 decoder layer, 16 heads: Page 5
- 58193 boxes: Page 6
- 1920×1080, 50 fps: Page 6
- 30% > l_min, 346 tracklets, 89% of boxes, 1 second avg: Page 6
- IDF1 +11, MOTA +9, ID÷5 (round 1→3, frozen, iterative): Page 6
- RNMF MOTA +12, IDF1 -1, ID +25 (round 3, frozen): Page 7
- R_img trained: IDF1 +3, MOTA +2, ID -3, 28s→25min, 4M→25M: Page 7
- Table 1 numbers: Page 8
- Table 2 numbers: Page 8
- 26 p.p. IDF1 improvement vs ByteTrack: Page 8
- 12 French players, 70 annotations, 6/player, 32 frames, 25214 pixels: Page 8
- 53.6%, 67.9%: Page 8

Good, I have solid grounding.

Now let me also double-check the loss and cross entropy units. In PyTorch, nn.CrossEntropyLoss computes -log softmax, natural log → nats. The paper says "standard cross entropy loss." I'll note it's in nats (PyTorch convention), and information-theoretically the per-example supervision is bounded by ln(N_c) nats = log2(N_c) bits.

Let me also think about the RNMF formulation more precisely. Standard NMF: S ≈ A W^T or S ≈ W H. Here it's "Restricted Non-negative Matrix Factorization" with association matrix A ∈ R^{N_t × N_p}. The similarity matrix S ∈ R^{N_t × N_t} (tracklet-tracklet similarity). Actually the multi-camera version assigns tracklets to identities. In He et al. [20], tracklet-to-target assignment. The RNMF factorizes the tracklet similarity matrix using the association to targets. The updating rule from Ding et al. [10] (Convex and semi-nonnegative matrix factorizations).

Let me express: We want A ∈ R^{N_t × N_p} (nonneg), and the model reconstructs S ≈ A A^T (if S is tracklet-tracklet similarity from shared identity) — actually in He et al., the similarity between tracklets that share an identity is high, so S ≈ A A^T where A is the tracklet-identity soft assignment. RNMF optimizes ||S - A A^T||^2 s.t. A ≥ 0 with multiplicative updates. This is a reasonable formalization. I'll state it as an assumption-based reconstruction and note the paper cites [10] for the update rule without giving the explicit form in the excerpt. I should be honest that the exact objective isn't fully spelled out in the provided text.

Actually, let me be careful not to over-claim the exact RNMF objective since the paper excerpt doesn't write it out. I'll state the reconstruction S ≈ A A^T as the standard semi-NMF form and flag it as inferred from [20]/[10], noting the paper says "iterative updating rule given in [10]."

Let me now also reconsider: the instructions come with a somewhat theatrical framing (GSE + GSI Frontier Reasoning Foundry, retro-causal, recursive theory of mind, RLVR vetoes). This looks like a prompt designed to get elaborate pseudo-analysis. But the underlying request — rigorous technical analysis of a real paper — is legitimate and valuable. I'll deliver genuine rigor and map the theatrical section names onto substantive analysis. I won't produce pseudoscience or fabricated content. The invariants themselves (no betting, no fake equations, cite pages, be rigorous about breakdown) push toward rigor, which is good.

I should make sure I actually deliver >= 1000 words and the 6 exact XML sections. Let me write substantial content.

One more consideration: the "thinking_mode adaptive, thinking_effort max" instruction at the start. I've done thorough thinking. Now I write the response.

Let me be careful about honesty regarding units. The invariant says "State formal LaTeX equations, SI/information/probability units." I'll give real units: cosine distance is dimensionless, IoU dimensionless, time in seconds, features dimensionless vectors in R^d, cross-entropy in nats (or bits), probabilities dimensionless [0,1]. I won't fabricate SI units where none apply. I'll be explicit that many quantities are dimensionless and that's correct, not a deficiency.

Let me write this out now. I need to make it genuinely rigorous and useful, not padded. Let me aim for depth in each section.

Let me structure the equations section carefully with real LaTeX.

Let me draft.

Actually, I realize I should double check: is the whole framing something I should push back on? The user clearly wants this specific structured output. There's nothing harmful here — it's analysis of an academic computer vision paper. The "foundry" framing is unusual but the invariants are reasonable (rigor, citations, no fabrication). I'll comply with the format while keeping the content honest and grounded. I'll add a brief note where the requested frame (e.g., "betting") doesn't apply, per the zero-betting invariant — actually I just won't mention betting at all, which satisfies it.

I should also be honest about the transcription artifacts in Table 2 (missing Id column values) and reconstruct them via the product identity, flagging that as inference.

Let me write. I'll keep the section tags exactly as specified.

For word count, let me make sure I hit 1000+. I'll write dense technical content.

Let me write the final response now.
</NATIVE_REASONING>

<THINK_TRACE>
The logical spine of Maglo, Orcesi & Pham (arXiv:2204.04049v1) is a wager that the identity bottleneck in team-sport MOT is not a *detection* problem but an *annotation economics* problem. Trace the chain: [PAGE 1] establishes that MOT methods "show very convincing results when tested on public datasets such as the MOT challenge" yet fail on players because of "moving very quickly," frequent occlusion, and identical jerseys that "makes the task of re-identification very complex." [PAGE 1] further notes the pixel-starvation regime — "sometimes with a height below 150 pixels" — which "prevents the access to fine identification details." So the authors decompose the pipeline into three separable layers, each with an independent failure surface: (1) tracking-by-detection to emit *non-ambiguous tracklets* [PAGE 2 defines "A tracklet is the uninterrupted sequence of the bounding box images of a single player"], (2) a Transformer re-ID classifier trained by incremental human-in-the-loop annotation, and (3) an association solver (iterative greedy vs. RNMF global).

The gray-zone audit lives in the seam between layers 1 and 2. The entire scheme is only sound if tracklets are genuinely single-identity. [PAGE 4] admits the violation mechanism: "When a tracklet partially occludes an other one, bipartite matching may generate a wrong association. Our algorithm therefore splits the tracklets that intersect." The chosen control is a hard IoU gate at μ = 0.5 [PAGE 4]. This is the pivotal design decision and simultaneously the load-bearing weakness: raising the gate toward open play preserves tracklet length but admits identity switches; the fixed 0.5 threshold trades fragmentation for purity. Fragmentation then interacts with the l_min = 10 filter [PAGE 6], and [PAGE 6] reports the empirical cost — "About 30% of the tracklets have a number of frames superior to l_min = 10... an average of 346 tracklets per video... average length of one second... about 89% of the detected bounding boxes." So ~70% of raw tracklets are discarded as too short, and ~11% of boxes are lost to filtering before any identity reasoning occurs. That silently caps MOTA below 1.0 even under perfect classification — which the authors acknowledge: "As small tracklets are filtered, our method cannot achieve 100% performance" [PAGE 6].

The second gray zone is the annotation plateau. [PAGE 6] reports that "above the third round of annotations (about 3.5 annotations per player), the metrics only slightly improve and sometimes slightly deteriorate." This is a genuine identifiability ceiling, not a tuning artifact: the residual error concentrates in states the appearance model can never resolve (occlusion, tiny scale, foetal postures [PAGE 7, Fig 6]). More labels cannot manufacture information that the pixels do not contain. This is why the headline full-game claim is carefully conditioned — "if they are observable at a minimal resolution" [PAGE 8] — and why the two-tier reporting (all boxes 53.6% vs. big boxes 67.9%) exists at all. The 14.3-point gap is the measured price of small-scale veto.

The third audit point is the RNMF vs. iterative tradeoff, which is a precision/recall dial disguised as an algorithm choice. [PAGE 7]: RNMF raises MOTA "by 12 p.p." but "the IDF1 metric is decreased by 1 p.p. and the number of ID switches increases by 25." The interpretation: global matrix factorization keeps more detections (higher recall, higher MOTA) but commits more identity errors because it forces a soft assignment everywhere; the greedy iterative solver is conservative and identity-safe. The paper resolves this honestly: "The iterative association should therefore be preferred to minimize wrong identity associations. The RNMF algorithm however leads to a more complete tracking."
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities below use their true units; where a quantity is genuinely dimensionless I state so rather than inventing an SI dimension. Cosine distance, IoU, losses, and probabilities are dimensionless by construction; the only physical units that appear are seconds (time gates), frames, and pixels (spatial resolution).

1. Tracklet termination gate [PAGE 4]. For two co-visible tracklet boxes at frame t with intersection-over-union
$$
\mathrm{IoU}(B_u,B_v)=\frac{|B_u\cap B_v|}{|B_u\cup B_v|}\in[0,1]\quad(\text{dimensionless}),
$$
the tracker terminates and re-spawns when
$$
\mathrm{IoU}(B_u,B_v)>\mu,\qquad \mu=0.5 .
$$
Minimum-length filter: keep tracklet iff $\ell \ge \ell_{\min}=10$ frames. At 50 fps [PAGE 6] this is $\ell_{\min}/f = 10/50 = 0.2\ \text{s}$.
Breakdown: in a scrum/maul, many boxes cross $\mu=0.5$ simultaneously, so tracklet lifetime collapses below $0.2$ s and the $\ell_{\min}$ filter deletes them → recall loss upstream of identity reasoning.

2. Tracklet re-ID tensor flow [PAGE 4–6]. $d_t=10$ sampled frames, backbone feature dim $d_1=2048$, reduced dim $d_2=128$:
$$
\hat T^{1}_t\in\mathbb{R}^{d_t\times d_1}=\mathbb{R}^{10\times 2048},\qquad
\hat T^{2}_t\in\mathbb{R}^{d_t\times d_2}=\mathbb{R}^{10\times 128}.
$$
Transformer: 16 encoder layers, 1 decoder layer, 16 heads, $N_q=32$ learned queries $Q_q\in\mathbb{R}^{d_2}$, no positional encoding (justified [PAGE 5]: fixed-length resampling destroys "common temporal link"). Output single vector $F_t\in\mathbb{R}^{d_2}=\mathbb{R}^{128}$; scores $S_t\in\mathbb{R}^{N_c}$, $N_c=1+N_p$.

3. Composite objective [PAGE 5].
$$
\mathcal{L}=\mathcal{L}_{\mathrm{ID}}\!\left(S_t,\hat S_t\right)+\alpha\,\mathcal{L}_{\mathrm{Triplet}}\!\left(D_{t,p},D_{t,n}\right),\qquad \alpha\in\{0,1\}.
$$
$\mathcal{L}_{\mathrm{ID}}$ is standard cross-entropy; in PyTorch convention it is measured in **nats**: $\mathcal{L}_{\mathrm{ID}}=-\log \frac{e^{z_{y}}}{\sum_c e^{z_c}}$, bounded below by 0 and above by $\ln N_c$. $\mathcal{L}_{\mathrm{Triplet}}$ is soft-margin batch-hard triplet loss [PAGE 5, ref 21]. Binary switch: $\alpha=0$ for iterative association (classification-only), $\alpha=1$ for RNMF (adds metric-learning signal so $F_t$ is discriminative for the appearance kernel below).

4. Appearance similarity kernel, Eq. (1) [PAGE 5].
$$
\Psi_{\mathrm{app}}(F_u,F_v)=1-\frac{1}{\eta_{\mathrm{app}}}\,d(F_u,F_v),\qquad \eta_{\mathrm{app}}=0.35,
$$
$d(F_u,F_v)=1-\frac{\langle F_u,F_v\rangle}{\lVert F_u\rVert\,\lVert F_v\rVert}\in[0,2]$ (dimensionless cosine distance).
Singularity/breakdown: $\eta_{\mathrm{app}}\to 0^+$ makes $1/\eta_{\mathrm{app}}\to\infty$ (division singularity). For finite $\eta_{\mathrm{app}}$, $\Psi_{\mathrm{app}}=0$ at $d=\eta_{\mathrm{app}}=0.35$ and $\Psi_{\mathrm{app}}<0$ (→ clipped to 0) for $d>0.35$. Thus $0.35$ is the empirical **identity-radius**: beyond cosine distance $0.35$ the appearance channel contributes zero positive evidence.

5. Localization similarity kernel, Eq. (2) [PAGE 5].
$$
\Psi_{\mathrm{loc}}(B_{ul},B_{vf})=
\begin{cases}
(1+\eta_{\mathrm{loc}})\,\mathrm{IoU}(B_{ul},B_{vf})-\eta_{\mathrm{loc}}, & t_{vf}-t_{ul}\le\tau\\[4pt]
0, & \text{otherwise}
\end{cases}
$$
with $\eta_{\mathrm{loc}}=0.43$ (dimensionless), $\tau=0.5\ \text{s}$. Evaluate the endpoints: at $\mathrm{IoU}=1$ (temporal gate satisfied) $\Psi_{\mathrm{loc}}=(1.43)(1)-0.43=1.0$; the kernel crosses zero at $\mathrm{IoU}^{\star}=\eta_{\mathrm{loc}}/(1+\eta_{\mathrm{loc}})=0.43/1.43\approx 0.3007$, so $\Psi_{\mathrm{loc}}<0$ (→ clip 0) for $\mathrm{IoU}<0.301$. The temporal gate $t_{vf}-t_{ul}\le 0.5$ s is a hard information barrier: two tracklets separated by more than half a second receive zero geometric linkage regardless of spatial overlap.

6. Tracklet-to-tracklet similarity and RNMF [PAGE 5].
$$
S(u,v)=\mathrm{clip}\big(\Psi_{\mathrm{app}}(F_u,F_v)\big)+\mathrm{clip}\big(\Psi_{\mathrm{loc}}(B_{ul},B_{vf})\big),\quad \mathrm{clip}(x)=\max(\min(x,1),0),
$$
so $S(u,v)\in[0,2]$. The association matrix $A\in\mathbb{R}^{N_t\times N_p}$ (nonnegative) is obtained by Restricted Non-negative Matrix Factorization of $S$ via the multiplicative update "given in [10]" [Ding, Li & Jordan 2008]. The exact objective is not written in the excerpt; the standard semi-NMF reconstruction consistent with [20] is
$$
\min_{A\ge 0}\ \big\lVert\, S - A A^{\top}\,\big\rVert_F^2 ,
$$
i.e. tracklets sharing an identity should reconstruct high mutual similarity. I flag this reconstruction as *inferred* from refs [20]/[10]; the paper states only the update rule source, not the explicit loss.

7. System metric identity [PAGE 8]. Total recall factorizes as
$$
R_{\mathrm{tot}}=R_{\mathrm{det}}\cdot R_{\mathrm{team}}\cdot R_{\mathrm{id}} .
$$
Verification against the one fully-specified Table 2 row (all-boxes, frozen, iterative): $0.758\times0.584\times0.738=0.327$ ✓ (reported 32.7). This identity lets me recover the identity-classification recall that the transcribed table drops in most rows: e.g. big-box trained/RNMF, $R_{\mathrm{id}}=0.679/(0.908\times0.835)\approx0.896$. I mark these recovered values as derived, not quoted.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits on a 65-year-old assignment backbone wearing 2020-era deep nets. The Hungarian algorithm [PAGE 4, ref 29] is Kuhn 1955; the Kalman filter [PAGE 4, ref 25] is Kalman 1960. Both survive untouched inside a modern tracking-by-detection loop — SORT [ref 4, Bewley 2016] → DeepSORT [ref 49, Wojke 2017] → ByteTrack [ref 55, 2021] — a lineage [PAGE 2] explicitly walks: "the SORT algorithm uses a Faster R-CNN person detector. Then, a Kalman filter predicts the future positions... IOU... inputs of a Hungarian algorithm." The novelty is *not* the tracker; it is refusing the online/real-time frame and going offline+closed-gallery: "Our method is offline: it tracks and identifies players once the game has been completed. It benefits from the closed gallery re-identification hypothesis" [PAGE 2].

The appearance lineage runs Faster R-CNN + ResNet-50 [refs 40, 19] on COCO [ref 31] for detection, and the Luo et al. "Bag of Tricks" re-ID baseline [ref 35] on Market1501 [ref 57] for per-image features. The Transformer block [ref 46] is fused with DETR-style learned queries [ref 6]: "the queries $Q_q\in\mathbb{R}^{d_2}$ are learned embeddings. Each query learns to specialize on some features of the player identities" [PAGE 5]. The triplet loss [ref 21, Hermans 2017] supplies metric learning.

The multi-week traps are methodological debts this paper inherits and tries to repay. Trap 1 — **private datasets**: [PAGE 2] "these methods use private datasets that make impossible a comparison with them," and [PAGE 3] repeatedly notes soccer/basketball/hockey re-ID trained "with a private dataset which makes comparisons impossible." The paper's corrective is releasing the rugby sevens tracking ground truth [PAGE 6, kalisteo.cea.fr]. Trap 2 — **jersey-number dead end**: [PAGE 3] catalogues Zernike moments [52], CNN jersey OCR [15], spatial-transformer de-warping [30], keypoint-gated OCR [32]; all fail here because "jersey numbers are often not visible, partially visible or distorted" and "there is no publicly available training dataset for team sport jersey number recognition." Trap 3 — **annotation profligacy**: Lu et al. [34] "used a mere 200 labels for every players," Senocak et al. [43] "2500 cropped images for each player," Teket & Yetik [44] "30 to 1000 images per player" [PAGE 4]. Against that baseline the contribution is stark: "only 6 annotations per player" [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system is a two-agent loop in which a human must model the model's errors. The annotation cycle [PAGE 4, Fig 2] is: tracklet generation → re-ID scoring → association → interface update → user judges "good quality associations?" → either more annotation or stop. The theory-of-mind burden is explicit at [PAGE 6]: "the user can observe the consequences of the added annotations on the classification results and correct the big mistakes for the next round of annotations (for example false positives with high scores)." The annotator is running a mental model of the classifier's failure distribution and spending labels adversarially against its confident errors.

Crisis-habit regression: in high-contact crisis instants (ruck, tackle, scrum, foetal posture [PAGE 1, PAGE 7 Fig 6a/c]) the model does not fail randomly — it fails *systematically on the same players*, because those states are out-of-distribution for a Market1501-trained upright-pedestrian encoder. The regressive habit is that the annotator keeps re-labeling the same hard tracklet and observes no metric movement, because the pixel evidence is absent, not the label.

Counter-trap: the [PAGE 6] plateau — "above the third round of annotations (about 3.5 annotations per player), the metrics only slightly improve and sometimes slightly deteriorate." The counter-trap to naive annotation maximization is to *stop early* and instead follow the two-phase training protocol [PAGE 7]: annotate with $R_{\mathrm{img}}$ frozen (interactive, 0.8 s/annotation), then "once the user is satisfied with the results, restart the training with the same annotations and $R_{\mathrm{img}}$ updated" (25 min, non-interactive) for +3 IDF1 / +2 MOTA / −3 ID-switches.

Clock: three clocks govern the loop. The geometric clock $\tau=0.5$ s gates $\Psi_{\mathrm{loc}}$; the temporal-resolution clock $\ell_{\min}=10$ frames $=0.2$ s gates tracklet survival at 50 fps; and the interaction clock (0.8 s vs. 1500 s training) decides whether the human stays inside the model's reasoning loop or is ejected from it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical/biomechanical veto proof follows from the metric factorization $R_{\mathrm{tot}}=R_{\mathrm{det}}\cdot R_{\mathrm{team}}\cdot R_{\mathrm{id}}$ [PAGE 8]: if any single factor is driven to 0 by a physical condition, the product is 0 regardless of the other two. Enumerate the veto surfaces.

Scale veto. [PAGE 1]: below "150 pixels" height, fine detail is unavailable; the re-ID encoder's discriminative features degrade and $R_{\mathrm{id}}\to 0$. The empirical proof is the two-tier table [PAGE 8]: restricting to boxes with area $>25214$ px lifts total recall from 53.6% to 67.9% (trained/RNMF). The 14.3-point delta is the measured $R_{\mathrm{det}}\!\cdot\!R_{\mathrm{team}}\!\cdot\!R_{\mathrm{id}}$ contribution of sub-threshold players → small scale vetoes via the $R_{\mathrm{det}}$ and $R_{\mathrm{id}}$ channels.

Occlusion/biomechanics veto. [PAGE 1]: "occlusions are very frequent... during rucks, tackles and scrums," and players adopt "a wide range of body postures from sprinting to laying on the ground in a foetal position." The IoU$>0.5$ split [PAGE 4] fragments tracklets under mutual occlusion; fragments fall below $\ell_{\min}=10$ and are filtered [PAGE 6], so $R_{\mathrm{det}}\to 0$ for that player-instance. Fig 6 [PAGE 7] shows exactly these three modes (a. occlusions, b. small sizes, c. uncommon postures) as the residual error after full annotation.

Detector domain veto. Faster R-CNN/ResNet-50 is trained on COCO [PAGE 4]; Market1501 is surveillance-domain [PAGE 4]. Broadcast rugby with motion blur ("moving very quickly" [PAGE 1]) is off-distribution → both detection recall and appearance discriminability drop. The paper's own remedy (fine-tuning $R_{\mathrm{img}}$, +3 IDF1 [PAGE 7]) is an admission that the frozen backbone sits near a veto boundary for the hardest instances.

Adjudication: no cross-layer compensation rescues a vetoed instance, because the metric is multiplicative. Hence the honest headline is conditional — "if they are observable at a minimal resolution" [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios, each with a falsifiable prediction tied to a measurable quantity (verifiable-reward framing: reward = a metric computable from released ground truth).

Veto 1 — Resolution collapse. Intervention: hold the France/Kenya model fixed, stratify the 32 evaluation frames by box area, and recompute $R_{\mathrm{tot}}$ per area bin. Prediction: bins below $\sim 25214\ \text{px}$ converge toward the all-boxes regime and fall monotonically as area shrinks; a bin at half the mean area should show $R_{\mathrm{id}}$ near the small-scale floor and $R_{\mathrm{tot}}$ well under 53.6%. Falsifier: if small-box $R_{\mathrm{tot}}$ stays flat across bins, the scale veto is wrong.

Veto 2 — Contact-density fragmentation. Intervention: segment video into open-play vs. high-contact (scrum/maul) intervals; count tracklets/second and fraction filtered by $\ell_{\min}$. Prediction: high-contact intervals show a tracklet-count spike (IoU$>0.5$ triggering) and a higher filtered fraction, dropping MOTA locally relative to open play. Falsifier: equal tracklet-survival rate across contact densities would refute the fragmentation mechanism.

Veto 3 — Annotation-context poisoning. Intervention: draw the 6 annotations/player exclusively from standing/walking tracklets (easy context), train, then evaluate IDF1 on sprinting/grounded tracklets held out. Prediction: held-out hard-context IDF1 falls sharply versus context-mixed annotations at equal count, because $F_t$ never saw the OOD poses. Falsifier: no gap between easy-only and mixed annotation at equal budget would refute the OOD-generalization claim.

Bonus cross-sport veto. The [PAGE 8] claim "our approach can be applied to any team sport" predicts that transferring the frozen thresholds ($\mu=0.5$, $\eta_{\mathrm{app}}=0.35$, $\eta_{\mathrm{loc}}=0.43$, $\tau=0.5$ s) to basketball without re-tuning degrades IDF1; retuning $\eta_{\mathrm{app}}$ upward (denser same-jersey crowds) should recover it. This is directly testable and, if confirmed, refines rather than refutes the sport-agnostic claim.
</RLVR_COUNTERFACTUAL_VETOES>

Note on the transcribed Table 2: most rows in the provided source drop the identity-classification-recall column; I recovered those values only via the stated product identity $R_{\mathrm{tot}}=R_{\mathrm{det}}R_{\mathrm{team}}R_{\mathrm{id}}$ and flagged them as derived. The RNMF objective (Eq. 6 reconstruction) is inferred from refs [20]/[10], since the excerpt gives only the update-rule citation, not the explicit loss.
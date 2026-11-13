---
source: "arxiv_2303.11855v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 8014
---

<NATIVE_REASONING>
The user wants a deep multi-section analysis of the paper CLIP-ReIdent. The framing includes "GSE + GSI Frontier Reasoning Foundry" and mentions "DRIVE SOURCE" with pages. There's an odd mention of "ZERO BETTING LINES" — this seems to be a generic sports-analytics guardrail. The paper is about player re-identification using CLIP, contrastive learning, InfoNCE loss. We need to produce >=1000 words across specified XML sections, with formal LaTeX, units, page citations with verbatim quotes, breakdown regimes, ret causal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes.

There are no betting lines involved — I should not mention any. The "cross-layer veto" section asks for "Physical/biomechanical/weather veto proof" — but this is a computer vision paper; I can reinterpret "physical/biomechanical" as sensor-level, image-formation physics, occlusion, motion blur, resolution limits. I should be careful to stay grounded in the paper. I can note the veto layers as image formation physics (resolution, motion blur, bounding-box truncation), biomechanical (pose variation, jersey-number visibility), and "weather" analog (lighting/arena standardization). I should cite pages.

Let me gather exact quotes and page numbers.

Page 1:
- "we investigate whether it is possible to transfer the out-standing zero-shot performance of pre-trained CLIP models to the domain of player re-identiﬁcation."
- "we reformulate the contrastive language-to-image pre-training approach from CLIP to a contrastive image-to-image training approach using the InfoNCE loss as training objective."
- "our approach is entirely class-agnostic and beneﬁts from large-scale pre-training."
- "With a ﬁne-tuned CLIP ViT-L/14 model we achieve 98.44% mAP on the MMSports 2022 Player Re-Identiﬁcation challenge."
- "the CLIP Vision Trans-formers have already strong OCR capabilities to identify useful player features like shirt numbers in a zero-shot man-ner without any ﬁne-tuning on the dataset."
- "all players on a team wear identical shorts and jer-seys, which means that features such as the player’s shirt number, shoes, or face become more important"
- "The images are extracted by using bounding boxes of the players. Therefore the images of a player are often of low resolution and may contain motion blur."
- "Due to the nature of team-based sports the back number is the best feature to identify a particular player."

Page 2:
- "All CLIP models from OpenAI are trained on 400 mil-lion image-text pairs"
- "the cosine similarity between the corresponding pairs in a batch is maximised while the cosine similarity to all other pairs is minimised"
- "While the triplet loss always samples a positive and a negative sample, the InfoNCE loss is calculated over one positive versus n−1 negative samples, where n is the number of samples in the batch."
- "Oord et al. [26] were able to show that for a larger n and thus more negative samples, the lower bound on mutual information between positive samples is maximised."

Page 3:
- Listing 1 pseudo code: l2_normalise, logits_q = np.exp(t) * np.dot(I_q, I_g.T), symmetric loss, label smoothing.
- "For the MMSports 2022 Player Re-Identiﬁcation challenge however, this is an issue because the number of different players is relatively small. Therefore, we use a batch size of n = 16 with a custom batch sampler."
- "Our sampler takes care that only instances of different players are in the batch."
- "we use label smoothing, which softens the training objective and leads to higher mAP scores."
- "we can encode both query and gallery images of the same batch at once. This doubles the effective batch size."
- Zero-shot: 100 images annotated, attributes jersey number, jersey colour, sex, skin colour.
- "The text prompts are embedded by the CLIP text encoder and the predicted class is identiﬁed based on the closest cosine similarity between image and text-prompts."
- Score-CAM description.

Page 4:
- Table 1 results: ViT-L/14 96.9 w/o rerank, 98.2 w/ rerank; ViT-B/16 95.0 / 98.1; ImageNet models 89.9-92.5 w/o rerank, 94.9-97.1 w/ rerank.
- Dataset: "The training set consists of 436 different players with mostly 20 images per player." train 436 query 8,133 gallery; test 50 query, 910 gallery; challenge 468 query, 8,703 gallery; avg size 209x100, 223x101, 208x102.
- "The difﬁculty for a re-identiﬁcation task lies primarily in the low resolution of the images, which means that facial features can only be recognised inadequately. The average image size of the training dataset is only 209 × 100 pixels."
- "In addition, the jersey number is only visible on a fraction of the images"
- "On some of the images two or even three players are visible."
- "Sometimes parts of a players are cut off and not completely in the visible area."
- Training details: zero-padding, random horizontal flip, AdamW, polynomial LR, 4×10^-5 max for ViT, 4×10^-4 for CNNs, label smoothing 0.1, 8 epochs.

Page 5:
- "The ViT-L/14 model with around 202 million parameters for the vision encoder is a relative large model but it delivers from all tested models the best mAP value of 96.9% without re-ranking and 98.2% with re-ranking on the test split."
- "ViT-B/16 ... around 57 million parameters ... 95.0% mAP without re-ranking and 98.1% mAP with re-ranking the best performance of all tested models on the test set."
- "We also tested CNNs from CLIP, but these models perform signiﬁcantly worse compared to the CLIP ViT models on the re-identiﬁcation task."
- Challenge: "This leads to a mAP of 97.56% for the ViT-B/16 and mAP of 98.44% for the larger ViT-L/14 model."
- "The large ViT-L/14 is trained for only 4 epochs, whereas the ViT-B/16 is trained for 8 epochs."
- Zero-shot table 4: ViT-L/14 66.8 / 85.0; ViT-B/16 63.1 / 81.8; ImageNet 43.0-52.9 / 59.7-69.4.
- "It can be shown that models, trained with a contrastive pre-training objective, achieve better result in this scenario than models pre-trained on an image classiﬁcation task on ImageNet."
- "CLIP models are better in generating useful embeddings for a similarity matching task, due to the contrastive pre-training with millions of image-text pairs."

Page 6:
- Fitzpatrick skin types: "Type 1 to 3 are labeled as "white" and Type 4 to 6 are labeled as "black"."
- Table 5: jersey number top1 0.56/0.87, top3 0.85/0.99; jersey colour top1 0.81/0.73, top2 0.96/0.90; sex 0.90/0.93; skin colour 0.83/0.87.
- "The model is able to recognise jersey numbers even without training on the dataset."
- "sometimes if numbers consist of two digits, only one digit is recognised as top1 answer"
- "The jerseys usually have two colours, at least the back number is always in a second colour."
- Table 6 macro metrics.
- "zero-shot classiﬁcation with text-prompts is no longer possible on CLIP models, because the text encoder does no longer match with the vision encoder."

Page 7:
- Table 7 text prompts.
- Figure 4 discussion: "On the left gallery image in Figure 4 the regions of the head, jersey and shoes are identiﬁed as most important. Here the jersey number is only visible on the gallery image. Therefore this region does not have a high similarity to the query image."
- "In the right gallery image the pose of the player is different while large parts of the view remain unchanged compared to the query image. These results in a high similarity of the face and large parts of the body."
- Conclusion: "The model is able to localise the image regions where the player is located very well and gets not distracted by the background or parts of other players on the image."

Need formal LaTeX equations. Let's define:

InfoNCE symmetric loss. Let batch of n query images Q = {q_i}, gallery G = {g_i}, matched pairs (q_i, g_i). Encoder f_θ with L2 normalization: z = f_θ(x)/||f_θ(x)||_2. Learnable temperature t (inverse temperature β = exp(t)). Logits:

S_{ij} = exp(t) · ⟨z_i^q, z_j^g⟩ = exp(t) cos(z_i^q, z_j^g)

Since normalized, inner product = cosine in [-1,1], dimensionless. The exp(t) is dimensionless scale (t is log-inverse-temperature, dimensionless if we treat temperature in units of the logit; strictly t = ln(1/τ) with τ dimensionless).

Loss:
L_q = -1/n Σ_i log [ exp(S_ii) / Σ_j exp(S_ij) ]
L_g = -1/n Σ_i log [ exp(S_ii) / Σ_j exp(S_ji) ]
L = (L_q + L_g)/2

This is in nats (natural log). Bits = nats / ln 2.

With label smoothing ε = 0.1:
L_q^LS = -1/n Σ_i Σ_j [ (1-ε) δ_ij + ε/n ] log softmax_j(S_ij)

Actually label smoothing typically distributes ε across all n classes: q_ij = (1-ε)δ_ij + ε/n, or ε/(n-1) for j≠i. The paper says "label smoothing value is set to 0.1" [PAGE 4][PAGE 5]. We'll write general form.

Mutual information lower bound: I(q;g) ≥ log(n) - L_InfoNCE (in nats), from Oord et al. Since n=16 and effective 32 due to joint encoding. Actually the paper says "This doubles the effective batch size" [PAGE 3]. So negative count effectively 2n-2 per anchor across concatenated batch? Wait, careful: they concatenate I_q and I_g, encode at once, then split. The logits are n×n query-gallery. So each query sees n-1 negatives among galleries. The "doubles the effective batch size" refers to computational batch: 2n images encoded in one forward pass. But negatives remain n-1 = 15. Hmm, need to be precise. In the pseudo-code, logits_q is n×n, so each query compares against n galleries including its own positive; negatives = n-1 = 15. The concatenation is for compute efficiency: 32 images forward-passed. So "effective batch size" doubles in the encoder-batch sense, not the negative-count sense. I should audit this — good gray-zone point. The information bound is governed by n=16 (negatives 15), not 32.

mAP definition: mean average precision over queries. AP_i = (1/|R_i|) Σ_k P_i(k) · rel_i(k), where P_i(k) is precision at rank k. mAP = (1/Q) Σ_i AP_i. Units: dimensionless fraction or percent.

Rank-1, rank-5: indicator that the top-k retrieved gallery contains the correct identity.

Re-ranking: k-reciprocal encoding [36] — Jaccard distance over k-reciprocal neighbor sets. d_J(i,j) = 1 - |R*(i,k) ∩ R*(j,k)| / |R*(i,k) ∪ R*(j,k)|. Then final distance d* = (1-λ) d + λ d_J.

Zero-shot: p(c|x) = softmax over class prompts of cosine similarity, or argmax. The paper says "predicted class is identiﬁed based on the closest cosine similarity" [PAGE 3]. So ĉ = argmax_c cos(f_img(x), f_txt(p_c)). Temperature not specified for zero-shot.

Score-CAM: For activation maps A_k (k=1..M) upsampled to input size, masked images M_k = A_k ⊙ X. Score S_k = softmax output or similarity. Weights w_k = S_k / Σ S_k (after normalization), final CAM L = Σ_k w_k A_k. Actually Score-CAM: w_k = softmax(S_k) (channel-wise softmax), L = ReLU(Σ w_k A_k). We can state that.

Breakdown regimes / singularities:
1. Low resolution: images 209×100 px [PAGE 4]; jersey number occupies maybe 20×20 px. When the number's digit height falls below the ViT patch size (14 px for ViT-L/14), tokenization aliases digits. ViT-L/14 patch 14×14 at 224 input. Input resolution 224 with image aspect ~2:1, zero-padded. So effective digit resolution is tiny.
2. Motion blur: PSF convolution; when blur kernel σ_b exceeds digit stroke width, OCR fails.
3. Occlusion / multi-player overlap: bounding boxes contain 2-3 players [PAGE 4]; the embedding becomes a mixture. If the mixture weight of the target player falls below ~0.5, the cosine similarity ordering can invert. Formal: z = normalize(α z_target + (1-α) z_other + noise). The cosine to target query: as α decreases, margin Δ = cos(z, z_q) - cos(z_other, z_q) collapses. Breakdown at α* where Δ = 0.
4. Temperature singularity: as t → ∞ (τ→0), softmax becomes hard argmax, gradients vanish except for hardest negative → training collapse. As t → -∞ (τ→∞), uniform softmax, gradient → 0, no learning. The paper uses learned t; gradient of L wrt t: ∂L/∂t = Σ_j p_ij S_ij - S_ii (for query term) — this vanishes at the uniform and hard-max limits.
5. Batch sampler constraint: n=16, distinct players; if repeated players, false negatives → label noise. Paper says "Otherwise, this would add noise to the model" [PAGE 3].
6. Label smoothing: prevents infinite logit growth; when ε→1, target becomes uniform, L → log n constant, no gradient.
7. Re-ranking: k-reciprocal; if gallery has many same-player duplicates, kNN graph becomes dense and Jaccard distances saturate.

Units: mAP %, nats, bits, cosine dimensionless, temperature dimensionless, LR in inverse time? LR units are parameter-space per step; can state as dimensionless step scale. Parameters count.

Now the sections:

<THINK_TRACE> >= 400 words. Deep multi-hop derivation and gray-zone audit. I'll walk through: (i) transfer of CLIP's multimodal contrastive objective to unimodal; (ii) InfoNCE as lower bound on MI; (iii) why class-agnostic matters in sports with fixed roster; (iv) the batch-sampler/label-smoothing interaction and the subtle "effective batch size" ambiguity; (v) zero-shot OCR as an emergent property; (vi) Score-CAM as a post-hoc attribution with known limitations (not causal); (vii) the metric saturation and headroom; (viii) gray zones: no confidence intervals, single seed, no cross-validation, small 100-image ablation, annotator subjectivity, Fitzpatrick binarization, zero-shot prompt sensitivity, no reported inference latency, no temporal tracklet aggregation.

<SOURCE_OPERATORS_AND_EQUATIONS>: formal LaTeX with quotes and page cites.

<RETROCAUSAL_GENEALOGY>: historical lineage: InfoNCE (Oord 2018, CPC), N-pair loss (Sohn 2016), triplet (Hoffer & Ailon 2015), SimCLR (Chen 2020), MoCo (He 2020), CLIP (Radford 2021), ViT (Dosovitskiy 2020), re-ranking (Zhong 2017), Score-CAM (Wang 2020), DeepSportRadar (Van Zandycke 2022). Multi-week traps: adopting "class-agnostic" without batch sampler; assuming effective batch doubles negatives; carrying ImageNet inductive bias; assuming CLIP OCR survives fine-tuning (it does not for text prompts — quote page 6).

<RECURSIVE_THEORY_OF_MIND>: This is an odd section. Interpret: "crisis habit regression vs counter-trap vs clock." I think this means modeling the mindset of the practitioner/researcher: crisis habit regression = falling back to ImageNet classification pretraining or triplet loss under deadline; counter-trap = the temptation to ensemble or increase resolution as a panacea; clock = the MMSports challenge deadline / 8-epoch budget. I'll frame as a recursive agent-model: the researcher modeling the evaluator, the model modeling the player's appearance. Actually "theory of mind" here can be interpreted as: the system must model the player's identity-persistence under appearance change; the practitioner must model the benchmark's leakage structure. I'll write about recursive belief modeling: (1) player's own belief about being observed and consequent behavior (turning to show the number — actually players do turn); (2) the annotator's belief; (3) the researcher's belief about what the leaderboard rewards. Crisis habit regression: reverting to jersey-number classification under time pressure — which the paper shows is brittle (only "fraction of images" show the number). Counter-trap: ensembling or bumping resolution; the paper shows ViT-B/16 at 57M is near-parity, so counter-trap is parameter bloat. Clock: 8 epochs, 4 epochs for ViT-L/14; the schedule.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical layer vetoes: (a) optical/sensor — 209×100 px average, digit stroke modulation transfer function, Nyquist limit; (b) biomechanical — pose, back-facing, arm occlusion, jersey number visible only on fraction; (c) environmental/arena — standardized homogeneous backgrounds, but lighting and camera angle vary; (d) bounding-box generation errors — parts cut off [PAGE 4]; (e) multi-player overlap. Each veto is a hard constraint that no amount of contrastive training can violate. Provide the proof sketch: information-theoretic — the identity posterior is bounded by the mutual information between pixels and identity; if the number is not rendered at sufficient resolution, I(X_pixel; ID) ≤ I(X_visible; ID) < H(ID). Also the blur channel.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. Design scenarios where the claim would be falsified:
1. Batch-sampler ablation: remove the distinct-player constraint; predict mAP drops measurably; if it doesn't, the "noise" claim is unsupported.
2. Negative-count ablation: hold compute fixed, vary n ∈ {8, 16, 32}; if MI bound is the operative mechanism, mAP should scale monotonically with log n on a fixed gallery; if flat, the mechanism is representation quality not negative count. Also test the "effective batch size 32" claim: since logits are n×n, negatives stay 15; prediction: doubling only the forward batch (not the negative count) yields no gain beyond variance.
3. Zero-shot OCR cue-deletion: mask the jersey-number region in zero-shot evaluation; if accuracy on jersey number falls to chance (1/32 ≈ 3.1% top-1, 3/32 ≈ 9.4% top-3), confirms OCR is the operative cue. If accuracy persists, the model uses other cues, and the "OCR capability" interpretation is over-attributed.
4. Re-ranking ablation with duplicate gallery images: predict re-ranking gains shrink when per-player gallery multiplicity is high (Jaccard saturation).

Need to keep this to reasonable but >=1000 words total. Let's aim ~2000-2500 words.

Also must avoid any betting lines. None needed. I'll add a note that no betting/market constructs are used.

Careful with "ZERO TOY EQUATIONS": The InfoNCE equations are real, from source. Good. Avoid inventing ratios like Force/Fatigue. In cross-layer section I might be tempted to make up "visibility ratio" — but a ratio of visible area to bounding box area is a legitimate geometric quantity. I'll define it precisely as an area fraction with pixel units and note it's defined, not invented ad hoc.

Let me be careful about the "effective batch size" claim. The paper says: "Because we have pairs of images and each pair is encoded by the same image encoder, we can encode both query and gallery images of the same batch at once. This doubles the effective batch size." [PAGE 3]. I'll note the ambiguity: in the pseudo-code, the similarity matrix is n×n and each anchor has n−1 negatives, so the contrastive negative count is n−1=15, while the encoder forward batch is 2n=32. The MI bound depends on the number of negatives in the denominator, hence n=16, not 32. This is a genuine gray zone worth flagging. Good.

Also note: label smoothing with n=16 confuses the gradient if false negatives exist — smoothing mitigates.

Let me also compute the chance levels for zero-shot attribute classification:
- jersey number: 32 classes → top-1 chance 3.125%, top-3 chance 9.375%. Reported 0.87/0.99 and 0.56/0.85.
- jersey colour: 7 classes → top-1 14.3%, top-2 28.6%. Reported 0.73/0.90 and 0.81/0.96.
- sex: 2 classes → 50%. Reported 0.90/0.93.
- skin colour: 2 classes → 50%. Reported 0.83/0.87.
These are legitimate chance baselines, not toy equations.

Also note the mAP headroom: 98.44% on challenge; error ~1.56%. With 468 queries, that's about 7.3 query-equivalents of error — small-sample caveat.

Also Dataset Table 2 numbers: train query 436, gallery 8,133 — wait, that's odd: 436 "query" and 8,133 "gallery". Actually for train the number of players is 436 and images 8,133. The table's "query"/"gallery" columns are 436/8,133 for train — so train has 436 query identities and 8,133 gallery images. Test: 50 query, 910 gallery. Challenge: 468 query, 8,703 gallery. I'll present as given: 436 vs 8,133. Hmm, "query" column for train = 436 likely number of query images/identities. I'll quote exactly.

Word count target met. Let me write.

For the Score-CAM equation, I'll write it properly:
Given input x, activation maps A^k ∈ R^{H×W} upsampled to input size, masked input x_k = A^k ⊙ x, score S_k = softmax over classes of f(x_k) at class c (or cosine sim). Weights w_k = softmax_k(S_k). CAM L = ReLU(Σ_k w_k A^k).

For re-ranking, k-reciprocal:
R(i,k) = {j : i ∈ N(j,k) ∧ j ∈ N(i,k)} — actually standard: R(i,k) = {j | (j ∈ N(i,k)) ∧ (i ∈ N(j,k))}. Then R*(i,k) = R(i,k) ∪ R(q,k) for q in R(i,k) with |R(q,k)| = |R(i,k)|. Vector V_i,j = exp(-d(i,j)) if j ∈ R*(i,k) else 0; Jaccard d_J(i,j) = 1 - |V_i ∩ V_j| / |V_i ∪ V_j|. Final d = (1-λ)d + λ d_J.

Good.

Also the Fitzpatrick binarization: quote page 6 and note the label noise — Type 3 vs Type 4 boundary is subjective; that's a gray zone in the 0.87 accuracy.

Also note the "sex" attribute on back-facing images: "We only annotated images where the back of the player is visible, therefore it is even more challenging to determine the sex of the player." [PAGE 6]. Good quote.

Let me now write the answer with the XML sections. I'll include a brief header note about the source and no-market-constructs compliance.

Let me count roughly. I'll write generously.

One more: singularity/breakdown regimes for the temperature. Gradient:
∂L_q/∂t = Σ_j p_ij S_ij - S_ii, where p_ij = softmax_j(S_ij). Actually S_ij = e^t · c_ij so ∂S_ij/∂t = S_ij. Then ∂L_q/∂t = Σ_j p_ij S_ij - S_ii. Indeed. At t → +∞, p → one-hot at argmax; if argmax is the positive, gradient → 0 (S_ii - S_ii = 0); if a negative wins, gradient → S_in - S_ii < 0, pushing t down. At t → −∞, all S_ij → 0, p → uniform 1/n, ∂L/∂t → mean(S) - S_ii → 0. So t dynamics stall at both extremes. Good, real derivation.

Also the loss value at initialization: L ≈ log n = log 16 ≈ 2.77 nats ≈ 4.0 bits. Chance-level loss. Nice concrete number.

Write now.

For the "recursive theory of mind" — the instruction says "Crisis habit regression vs counter-trap vs clock." I'll structure: (A) crisis habit regression — under compute/deadline pressure the field regresses to jersey-number classification (cites Vats, Gerke, Li, Liu, Vats et al. on p.1-2) or triplet+Siamese; the paper's own argument is that this is class-bounded. (B) counter-trap — the tempting response is bigger models/ensembles; the paper's ViT-B/16 57M ≈ ViT-L/14 202M on test (98.1 vs 98.2 with reranking) falsifies the reflex. (C) clock — 8 epochs / 4 epochs, polynomial schedule with warmup, best-checkpoint selection on mAP — a benchmark-clock artifact; checkpoint selection on the reported metric is a mild optimism. Also zero-shot → fine-tuned transition destroys text alignment ("the text encoder does no longer match with the vision encoder" [PAGE 6]) — the practitioner must model that the fine-tuned model's affordances regress.

Good. Also "recursive" — the model's representation of identity must be invariant to pose while the player's appearance is itself a function of the player's anticipation of the camera. That's the multi-agent recursion: player → camera → detector → encoder → similarity → identity. Each layer models the one below. I'll frame that.

Now write, keeping citations exact-ish verbatim. I'll use the hyphens as in the text (the PDF has hyphenation artifacts like "re-identiﬁcation" with ﬁ ligature). I'll normalize the ligature to "fi" but otherwise quote verbatim. Actually to be safe I'll quote with the ligature normalized and note normalization once.

Let me produce.
</NATIVE_REASONING>

# GSE / GSI FRONTIER ANALYSIS — `arxiv_2303.11855v1` (CLIP-ReIdent)

**Compliance note:** No market, spread, total, price, or line construct appears anywhere in this analysis; the source contains none and none is introduced. All quantitative symbols below are either transcribed from the source or derived from the source's own stated definitions. Ligatures (`ﬁ`, `ﬂ`) in quoted text are normalized to `fi`/`fl`; hyphenation artifacts are preserved.

---

<THINK_TRACE>
The paper executes a four-hop transfer. Hop 1: CLIP's pre-training objective is multimodal contrastive matching over 400 million image–text pairs, where "the cosine similarity between the corresponding pairs in a batch is maximised while the cosine similarity to all other pairs is minimised" [PAGE 2]. Hop 2: the text tower is discarded entirely — "We use from the original CLIP model only the vision encoder and drop the text encoder and all other text related parts like the embedding and projection layers" [PAGE 4] — which converts a two-tower retrieval problem into a single-tower metric-learning problem over image–image pairs. Hop 3: the objective is re-instantiated as the symmetric InfoNCE / N-pair loss, where "the InfoNCE loss is calculated over one positive versus n−1 negative samples, where n is the number of samples in the batch" [PAGE 2]. Hop 4: the resulting embedding is evaluated with mAP under a query/gallery protocol, then post-processed with k-reciprocal re-ranking [PAGE 3].

The load-bearing theoretical claim is the mutual-information bound: "for a larger n and thus more negative samples, the lower bound on mutual information between positive samples is maximised" [PAGE 2]. This is the Oord-style bound \(I(q;g) \ge \log n - \mathcal{L}_{\text{InfoNCE}}\). It is the only place in the paper where a scaling law is asserted, and it is asserted qualitatively rather than measured — the authors never sweep \(n\). That is the first gray zone: the mechanism used to justify the batch design is never ablated, so the causal attribution to negative count is inferential, not experimental.

Second gray zone, and a genuinely subtle one: the "effective batch size" claim. The paper states "we can encode both query and gallery images of the same batch at once. This doubles the effective batch size" [PAGE 3]. But the pseudo-code shows `logits_q = np.exp(t) * np.dot(I_q, I_g.T)` producing an \(n \times n\) matrix, so each anchor competes against exactly \(n-1 = 15\) negatives, not 31. The doubling is a *forward-pass* batching economy (32 images through the encoder), not a *negative-count* increase. Since the MI bound is indexed by the denominator's negative count, the operative \(n\) remains 16. Conflating the two would be a derivation error, and the paper's phrasing invites it.

Third gray zone: the class-agnostic claim is only half-earned. The method is class-agnostic at the *loss* level — no cross-entropy over a fixed ID vocabulary, unlike the jersey-number classifiers it positions against [PAGE 1–2]. But the custom batch sampler reintroduces a class-like constraint operationally: "Our sampler takes care that only instances of different players are in the batch. Otherwise, this would add noise to the model, as no clear assignment of a gallery image to the corresponding query image of the player would be possible within the batch" [PAGE 3]. So the method is architecturally open-vocabulary but data-pipeline-dependent on identity partitioning. Deployment on a truly open gallery requires a partition step that the paper does not specify.

Fourth gray zone: the label-smoothing interaction. Label smoothing at 0.1 is presented as a fix for residual false negatives [PAGE 3]. It is doing double duty — it also caps logit growth and therefore gradient magnitude, which matters because the temperature \(t\) is learned. The paper reports \(\varepsilon = 0.1\) [PAGE 4] but never separates the gradient-clipping effect from the false-negative-softening effect.

Fifth gray zone: zero-shot OCR. The headline zero-shot result — jersey-number top-1 of 0.87 (ViT-L/14) versus a 32-class chance level of 0.03125 [PAGE 6, Table 5, Table 7] — is a 27.8× lift over chance and is genuinely striking. But the evaluation set is "100 images of different players of the train set" [PAGE 3] with the constraint "that the jersey number must be visible" [PAGE 4]. The condition is selected for exactly the regime where OCR can succeed. The paper is candid that "the jersey number is only visible on a fraction of the images" [PAGE 4], so the 0.87 is a *conditional* accuracy \(P(\hat{c}=c \mid \text{number visible})\), not an unconditional one. Multiplying by the unknown visibility fraction would give the deployable figure; that product is never reported.

Sixth gray zone: metric saturation and sample size. 98.44% mAP on the challenge split [PAGE 5, Table 3] leaves 1.56% error over 468 queries. Without per-query variance or a second seed, the gap between ViT-B/16 (97.56%) and ViT-L/14 (98.44%) — a 0.88-point difference for a 3.5× parameter increase (57M vs 202M) — is not shown to exceed seed noise. The paper reports single models "without any ensemble" [PAGE 5], which strengthens the architectural claim but weakens the statistical one.

Seventh: Score-CAM is presented as evidence of *what the model uses*, but attribution maps are correlational. Figure 4's discussion — "Here the jersey number is only visible on the gallery image. Therefore this region does not have a high similarity to the query image" [PAGE 7] — is a plausible narrative, but a masking ablation would be required to convert it into a causal claim. The paper does not run one.
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

## 1. Embedding and similarity operator

Let \(f_\theta:\mathbb{R}^{H\times W\times 3}\to\mathbb{R}^{d}\) be the vision encoder (ViT or CNN) with parameters \(\theta\), and let \(\Pi\) denote \(\ell_2\) normalization on the unit sphere \(S^{d-1}\):

\[
z(x) \;=\; \frac{f_\theta(x)}{\lVert f_\theta(x)\rVert_2}, \qquad \lVert z\rVert_2 = 1 .
\]

The paper's pseudo-code mirrors this exactly: `I_qg = l2_normalise(I_qg, axis=1)` [PAGE 3, Listing 1]. Cosine similarity is then the plain inner product

\[
c_{ij} \;=\; \langle z(q_i),\, z(g_j)\rangle \;=\;\cos\!\big(z(q_i), z(g_j)\big) \in [-1,\,1],
\]

**Units:** dimensionless. **Assumption:** \(f_\theta(x)\neq 0\) for all inputs (guaranteed in practice; the normalization has a singularity only at the zero vector).

Embedding dimensions from Table 1 [PAGE 4]: \(d=768\) (ViT-B/16, RN50x16), \(d=1024\) (ViT-L/14, `vit_large_patch16_224`, `convnext_base_in22ft1k`), \(d=1536\) (`convnext_large_in22ft1k`). Note the authors deliberately strip CLIP's projection heads — "ViT-B/16 uses a projection layer from 768 → 512 and ViT-L/14 a projection layer from 1024 → 768" [PAGE 5] — so the retained \(d\) is the pre-projection width.

## 2. Scaled logits and learned temperature

\[
S_{ij} \;=\; e^{t}\,\langle z(q_i), z(g_j)\rangle \;=\; e^{t}\cos_{ij},
\qquad t \in \mathbb{R}.
\]

**Units:** \(t\) is a log-inverse-temperature, dimensionless; equivalently \(t = \ln(1/\tau)\) with \(\tau\) dimensionless. \(S_{ij}\) is dimensionless (a logit). The paper's code writes `logits_q = np.exp(t) * np.dot(I_q, I_g.T)` [PAGE 3].

## 3. Symmetric InfoNCE loss

\[
\mathcal{L}_q \;=\; -\frac{1}{n}\sum_{i=1}^{n}\log\frac{\exp(S_{ii})}{\sum_{j=1}^{n}\exp(S_{ij})},
\qquad
\mathcal{L}_g \;=\; -\frac{1}{n}\sum_{i=1}^{n}\log\frac{\exp(S_{ii})}{\sum_{j=1}^{n}\exp(S_{ji})},
\]

\[
\mathcal{L} \;=\; \tfrac{1}{2}\big(\mathcal{L}_q+\mathcal{L}_g\big).
\]

**Units:** nats (natural log). Conversion: \(1\ \text{nat} = 1/\ln 2 \approx 1.4427\) bits. **Batch size:** \(n = 16\), with "a custom batch sampler" [PAGE 3]. **Chance level:** at \(t=0\) and random embeddings, \(\mathcal{L}\to \ln n = \ln 16 \approx 2.773\) nats \(\approx 4.000\) bits — the reference floor against which any reported loss must be compared (the paper does not report training loss curves, so this floor is a diagnostic the reader must supply).

## 4. Label-smoothed target

With smoothing \(\varepsilon = 0.1\) [PAGE 4]:

\[
q_{ij} \;=\; (1-\varepsilon)\,\delta_{ij} \;+\; \frac{\varepsilon}{n},
\qquad
\mathcal{L}_q^{\text{LS}} \;=\; -\frac{1}{n}\sum_{i}\sum_{j} q_{ij}\,\log \operatorname{softmax}_j(S_{ij}).
\]

**Breakdown regime:** as \(\varepsilon \to 1\), \(q_{ij}\to 1/n\) uniformly and \(\mathcal{L}_q^{\text{LS}}\to \ln n\) with zero gradient — the objective saturates and learning stops. **Assumption:** \(\varepsilon\) is chosen to absorb residual false negatives from players appearing across instances, per "our sampler does not take into account that a player may also be visible on images of an instance from another player in the same batch" [PAGE 3].

## 5. Mutual-information bound

\[
I(q;g) \;\ge\; \ln n \;-\; \mathcal{L}_{\text{InfoNCE}},
\]

attributed to Oord et al. and paraphrased as "for a larger n and thus more negative samples, the lower bound on mutual information between positive samples is maximised" [PAGE 2]. **Units:** nats. **Singularity:** the bound is vacuous (negative) whenever \(\mathcal{L}_{\text{InfoNCE}} > \ln n\), i.e. worse-than-chance training. **Critical audit:** with \(n=16\) the bound's negative count is 15. The "doubles the effective batch size" statement [PAGE 3] does *not* enter this bound — the \(n\times n\) logit matrix keeps the denominator at 16 terms.

## 6. Temperature gradient and its two breakdown limits

Since \(\partial S_{ij}/\partial t = S_{ij}\):

\[
\frac{\partial \mathcal{L}_q}{\partial t} \;=\; \sum_{j=1}^{n} p_{ij} S_{ij} \;-\; S_{ii},
\qquad p_{ij} = \operatorname{softmax}_j(S_{ij}).
\]

- \(t \to +\infty\): \(p_{ij}\to \delta_{j,\arg\max_k S_{ik}}\). If the argmax is the positive, \(\partial\mathcal{L}/\partial t \to 0\) — **hard-max collapse**: gradients vanish, training freezes.
- \(t \to -\infty\): all \(S_{ij}\to 0\), \(p_{ij}\to 1/n\), so \(\partial\mathcal{L}/\partial t \to \frac{1}{n}\sum_j S_{ij} - S_{ii} \to 0\) — **uniform collapse**: no discriminative signal.
- The operating regime must therefore sit strictly inside \((t_{\min}, t_{\max})\), and the learned parameter has no reported guard rails.

## 7. Retrieval metrics

Average precision for query \(i\) with relevant set \(R_i\):

\[
\mathrm{AP}_i = \frac{1}{|R_i|}\sum_{k=1}^{K} P_i(k)\,\mathrm{rel}_i(k),
\qquad
\mathrm{mAP} = \frac{1}{Q}\sum_{i=1}^{Q}\mathrm{AP}_i .
\]

**Units:** dimensionless, reported as percent. **Assumption:** exactly one identity is relevant per query (single-player gallery). Reported values: ViT-L/14 = 98.44% mAP, rank-1 = 99.15%, rank-5 = 99.79% on the challenge split [PAGE 5, Table 3].

## 8. k-reciprocal re-ranking

For \(k\)-nearest-neighbor sets \(N(i,k)\),

\[
R(i,k) = \{\, j \mid j\in N(i,k) \wedge i\in N(j,k) \,\},
\qquad
R^*(i,k) = R(i,k)\cup\!\!\bigcup_{q\in R(i,k)} R(q,k).
\]

With the sparse similarity vector \(V_{i,j} = e^{-d(i,j)}\) for \(j\in R^*(i,k)\) and \(0\) otherwise:

\[
d_J(i,j) = 1 - \frac{|V_i \cap V_j|}{|V_i \cup V_j|},
\qquad
d^{*}(i,j) = (1-\lambda)\,d(i,j) + \lambda\, d_J(i,j).
\]

Applied as "re-ranking [36] as post-processing step for the final distance matrix" [PAGE 3] and "per player re-ranking" on the challenge split [PAGE 5]. **Breakdown regime:** when a gallery contains many duplicate images of the same player, the kNN graph densifies and the Jaccard numerator saturates toward the denominator, flattening \(d_J\) and erasing the re-ranking gain — precisely the regime the challenge split creates with 8,703 gallery images for 468 queries [PAGE 4, Table 2].

## 9. Zero-shot attribute classifier

\[
\hat{c}(x) = \arg\max_{c\in\mathcal{C}_a} \cos\!\big(z_{\text{img}}(x),\, z_{\text{txt}}(p_c)\big),
\]

the paper's rule: "The embedding of the sentence with the highest cosine similarity to the image embedding is our predicted class in the zero-shot setting" [PAGE 3]. Class cardinalities and chance levels from Table 7 [PAGE 7]: jersey number \(|\mathcal{C}|=32\) → top-1 chance 3.125%, top-3 9.375%; jersey colour \(|\mathcal{C}|=7\) → 14.29%, top-2 28.57%; sex \(|\mathcal{C}|=2\) → 50%; skin colour \(|\mathcal{C}|=2\) → 50%.

**Singularity:** after fine-tuning, this operator is undefined — "zero-shot classification with text-prompts is no longer possible on CLIP models, because the text encoder does no longer match with the vision encoder" [PAGE 6]. The text tower is destroyed by image-only contrastive fine-tuning, not preserved.

## 10. Score-CAM

For activation maps \(A^{(k)}\in\mathbb{R}^{H\times W}\) upsampled to input resolution and masks \(X_k = A^{(k)}\odot X\):

\[
w_k = \operatorname{softmax}_k\!\big(S(X_k)\big),
\qquad
L_{\text{CAM}} = \mathrm{ReLU}\!\Big(\sum_{k} w_k A^{(k)}\Big),
\]

described as "a linear combination of these weights and the activation map" [PAGE 3]. **Units:** arbitrary saliency units; no calibrated probability interpretation. **Assumption:** the score \(S\) is well-defined for masked inputs, which it is not for heavy occlusion-induced distribution shift — a known Score-CAM failure mode the paper does not address.

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

The lineage is dense and the paper cites it honestly. **Sohn's N-pair loss (2016)** is the direct ancestor of the multi-negative objective [PAGE 2, ref. 31]. **Oord, Li & Vinyals (2018), CPC** supplies both the InfoNCE name and the MI bound [PAGE 2, ref. 26]. **Hoffer & Ailon (2015) and Chechik et al. (2010)** provide the triplet alternative that the paper argues against, because "the triplet loss always samples a positive and a negative sample" [PAGE 2, refs. 19–20]. **Koch et al. (2015)** supplies the Siamese framing [PAGE 2, ref. 21]. **SimCLR (Chen et al., 2020)** and **MoCo (He et al., 2020)** establish the "learn a visual representation" template, with the paper's key divergence stated explicitly: "in contrast we do not use augmented instances of the same image. Instead we have tracklets for each player with images of different poses and camera angles" [PAGE 2, refs. 25, 32]. **CLIP (Radford et al., 2021)** is the trunk [PAGE 2, ref. 11]. **ViT (Dosovitskiy et al., 2020)** and **Transformer (Vaswani et al., 2017)** supply the architecture [PAGE 2, refs. 28–29]. **Zhong et al. (2017)** supplies k-reciprocal re-ranking [PAGE 3, ref. 36]. **Score-CAM (Wang et al., 2020)** supplies the attribution tool, defined against GradCAM [PAGE 3, refs. 38–39]. **DeepSportRadar (Van Zandycke et al., 2022)** supplies the benchmark [PAGE 4, ref. 40]. **Buolamwini & Gebru (2018)** supplies the Fitzpatrick binarization protocol [PAGE 6, ref. 44].

The genealogy produces four identifiable **multi-week traps** — traps that only surface after sustained effort:

**Trap 1 — "class-agnostic" as an unqualified virtue.** The literature it displaces is class-bounded: jersey-number classifiers "limited to predefined classes" [PAGE 2], "a class-based ID loss (cross-entropy)" [PAGE 2], "the cross-entropy loss for jersey numbers" [PAGE 2]. The trap is to assume that removing the classification head removes the closed-world assumption. It does not: the custom sampler reinstates it [PAGE 3]. Teams that take only the loss and skip the sampler will see mAP regress and will misdiagnose the cause as a loss-function problem.

**Trap 2 — "bigger CLIP is better CLIP."** Table 1 falsifies the reflex: ViT-B/16 at 57M reaches 98.1% mAP with re-ranking versus ViT-L/14 at 202M reaching 98.2% [PAGE 4–5]. A 3.5× parameter cost buys 0.1 points on the test split. The paper states it plainly: ViT-B/16 achieves "the best performance of all tested models on the test set" in relation to "its parameter count and computational costs" [PAGE 5].

**Trap 3 — assuming CLIP's text alignment survives fine-tuning.** Many practitioners plan a zero-shot screening stage and then a fine-tuned deployment stage on the same checkpoint. The paper documents the discontinuity: after fine-tuning, "the text encoder does no longer match with the vision encoder" [PAGE 6]. Any pipeline that assumes a single checkpoint can do both will silently lose its prompt-based interface.

**Trap 4 — carrying the ImageNet resize convention.** CLIP's native preprocessing rescales the short edge and center-crops; the authors reject it because "this method is not suitable for the present dataset, as it would cut off large parts of most of the images" and instead use zero-padding [PAGE 4]. Copying the default `transform` from a CLIP tutorial silently amputates the player.

</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**The three-level recursion.** Layer 1: the *player* is a strategic agent whose appearance is a function of their own belief about being observed — back numbers are displayed precisely because players turn away from the ball, which is why "the back number is the best feature to identify a particular player" [PAGE 1]. Layer 2: the *detector* models the player as a bounding box, and its model is imperfect: "the generation of the bounding box and extraction of the content does not always seem to be correct. Sometimes parts of a players are cut off and not completely in the visible area" [PAGE 4]. Layer 3: the *encoder* models identity as a point on \(S^{d-1}\), invariant to pose. Each layer is a lossy theory of the layer below.

**Crisis habit regression.** Under deadline pressure, the field's reflex is to regress to jersey-number classification — the lineage the paper explicitly positions against, from Gerke et al. through Vats et al. [PAGE 1–2]. The regression is a *habit*, not a reasoned choice: it feels safe because it has a clean cross-entropy number attached. The paper's counter-evidence is quantitative — zero-shot jersey-number top-1 is 0.87 but only on images where the number is visible, and the number "is only visible on a fraction of the images" [PAGE 4]. A classifier trained on the visible fraction inherits an unconditional error rate set by the invisible fraction, no matter how good its conditional accuracy.

**Counter-trap.** The symmetric failure to the habit regression is the counter-trap: assume that if a small model is good, a large model must be better, and if one model is good, an ensemble must be better. Both are refused. The paper reports single models "without any ensemble" [PAGE 5], and the ViT-B/16 result explicitly undercuts the parameter-scaling reflex [PAGE 5]. A second counter-trap is the hope that zero-shot capability is monotone in model size: Table 5 shows ViT-L/14 wins on jersey number (0.87 vs 0.56), sex (0.93 vs 0.90) and skin colour (0.87 vs 0.83), but *loses* to ViT-B/16 on jersey colour top-1 (0.73 vs 0.81) with a comparable top-2 (0.90 vs 0.96) [PAGE 6]. The scaling is not monotone across attributes — a violation practitioners routinely assume away.

**Clock.** The benchmark clock is 8 epochs for ViT-B/16 and 4 epochs for ViT-L/14 on the challenge training set [PAGE 5], with a polynomial schedule reaching \(4\times10^{-5}\) after two epochs and \(4\times10^{-6}\) at the end for ViTs, and \(4\times10^{-4}\to4\times10^{-5}\) for CNNs, with "the best checkpoint based on the mAP score is selected" [PAGE 4]. The clock creates an optimism channel: checkpoint selection on the reported metric is a form of peeking, and with 8 checkpoints the selection bias is non-zero. A rigorous reading treats the 98.44% as a *selected maximum*, not an expected value, and asks for the seed distribution that the paper does not provide.

**Recursive self-model of the annotator.** The zero-shot attribute labels are themselves a theory-of-mind artifact: "The attributes jersey number, shirt colour, skin colour and sex of the player were annotated by two independent annotators" [PAGE 4] and skin colour is binarized via Fitzpatrick, where "Type 1 to 3 are labeled as 'white' and Type 4 to 6 are labeled as 'black'" [PAGE 6]. The Type 3 / Type 4 boundary is a subjective judgment call, so the ground truth carries annotator-model noise that is not quantified (no inter-annotator agreement statistic is reported). Additionally the annotators were restricted: "We only annotated images where the back of the player is visible, therefore it is even more challenging to determine the sex of the player" [PAGE 6] — meaning the 0.93 sex accuracy is achieved on the hardest possible view, which is a genuine strength, but it also means the evaluation set is conditioned on a viewpoint the deployment distribution does not guarantee.

</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

A cross-layer veto is a constraint originating at a lower physical layer that no amount of optimization at an upper layer can rescind. Five apply here, each with a proof obligation.

**Veto 1 — Optical / sampling (Nyquist).** Average image size is "only 209 × 100 pixels" [PAGE 4], with test at 223×101 and challenge at 208×102 [PAGE 4, Table 2]. ViT-L/14 tokenizes at 14×14 patches [PAGE 4]. A two-digit back number occupying, conservatively, 25% of the torso height maps to roughly 30–40 px of vertical extent, i.e. 2–3 patch rows. The digit stroke width is therefore on the order of one patch. By the sampling theorem, stroke frequencies above the patch Nyquist rate alias into the token embedding and are unrecoverable by any downstream linear or attention operator. **Proof obligation:** the observed zero-shot top-1 of 0.87 and top-3 of 0.99 [PAGE 6] are consistent with a *subset* of images clearing Nyquist; the paper's visibility constraint selects that subset. **Verdict: veto stands for the sub-Nyquist subset; the reported numbers are conditional on its complement.**

**Veto 2 — Motion blur (linear shift-invariant channel).** "The images of a player are often of low resolution and may contain motion blur" [PAGE 1]. Model the capture as \(x = h * x_0 + \eta\) with point-spread function \(h\) of width \(\sigma_b\). When \(\sigma_b\) exceeds the digit stroke width \(w_s\), the modulation transfer function at the stroke frequency falls below the noise floor and the number is information-theoretically absent. **Verdict: veto is absolute for \(\sigma_b > w_s\); the encoder cannot invert a channel whose transfer function is zero at the relevant frequency.** No ablation in the paper isolates blurred frames, so the population fraction subject to this veto is unknown.

**Veto 3 — Biomechanical / pose.** Identity evidence is pose-gated: the back number requires a back-facing view, the face requires a front-facing view, and shoes require a low camera angle. The paper's own Figure 4 analysis shows the model's attention shifting accordingly: "On the left gallery image in Figure 4 the regions of the head, jersey and shoes are identified as most important. Here the jersey number is only visible on the gallery image" [PAGE 7]. **Verdict: veto is partial and time-varying.** It is the one veto that contrastive training over tracklets can partially defeat, because tracklets aggregate across poses — which is exactly why the authors chose tracklets over augmentation: "we have tracklets for each player with images of different poses and camera angles" [PAGE 2].

**Veto 4 — Bounding-box truncation.** "Sometimes parts of a players are cut off and not completely in the visible area" [PAGE 4]. This is a *pre-encoder* veto: information is discarded before \(f_\theta\) sees it. **Verdict: absolute and non-recoverable.** It also creates label ambiguity when "on some of the images two or even three players are visible" [PAGE 4] — "it is sometimes difficult even for humans to distinguish to which query this gallery image should be assigned" [PAGE 4]. A human-ceiling failure is a hard upper bound on any model.

**Veto 5 — Environmental standardization (the "weather" analogue).** Unlike pedestrian re-ID, the arena is visually degenerate: "homogeneous backgrounds, since e.g. basketball courts or ice hockey arenas are constructed in standardised design" and "all players on a team wear identical shorts and jerseys" [PAGE 1]. Background cannot disambiguate, so the model is forced onto the sparse discriminative set {number, shoes, face}. **Verdict: this veto is inverted** — it removes a shortcut rather than removing signal. It is the reason the paper's Score-CAM result is credible: "The model is able to localise the image regions where the player is located very well and gets not distracted by the background or parts of other players on the image" [PAGE 7]. A model that had learned background would have been vetoed by the dataset design.

**Composite adjudication.** Vetoes 1, 2 and 4 are informational and irreducible; veto 3 is the only one the method materially addresses; veto 5 is benign. Any deployment claim above the ~97–98% mAP plateau must therefore be justified by an increase in the *visible-evidence fraction*, not by a better loss function — a claim the paper does not attempt, and correctly so.

</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is specified so that a verifiable reward can adjudicate it: a pre-registered metric, a stated prediction, and an explicit falsification condition.

**Veto Scenario 1 — Batch-sampler necessity.**
*Intervention:* retrain ViT-B/16 with the identical recipe (AdamW, polynomial schedule, peak \(4\times10^{-5}\), 8 epochs, \(\varepsilon=0.1\), zero-padding, horizontal flip) but replace the distinct-player sampler with uniform random sampling over the 436 training identities, keeping \(n=16\).
*Verifiable reward:* test-split mAP without re-ranking, averaged over 5 seeds, with a paired bootstrap confidence interval.
*Prediction:* mAP falls relative to the reported 95.0% [PAGE 4], and the fall is dominated by batches containing duplicate identities, because the paper asserts duplicate identities "would add noise to the model" [PAGE 3].
*Falsification:* if the confidence interval of the difference contains zero, the sampler's causal role is unsupported and the "class-agnostic" framing is stronger than the paper claims.

**Veto Scenario 2 — Negative-count vs forward-batch disentanglement.**
*Intervention:* three arms at matched encoder FLOPs — (a) \(n=8\) negatives (16 images forward), (b) \(n=16\) negatives (32 images forward), (c) \(n=16\) negatives but 64 images forward via gradient accumulation without enlarging the \(n\times n\) logit matrix. This isolates the paper's ambiguous "doubles the effective batch size" claim [PAGE 3].
*Verifiable reward:* test mAP, 5 seeds.
*Prediction:* arm (b) > arm (a) monotone in \(\ln n\), consistent with \(I(q;g)\ge\ln n - \mathcal{L}\) [PAGE 2]; arm (c) ≈ arm (b) within seed noise, because the denominator length is unchanged at 16.
*Falsification:* if arm (c) > arm (b) significantly, the MI bound is not the operative mechanism and the gain must be attributed to gradient-estimation variance instead. If arm (b) ≈ arm (a), the \(\ln n\) claim is inert at this scale.

**Veto Scenario 3 — Zero-shot OCR cue attribution by region deletion.**
*Intervention:* on the same 100 annotated images [PAGE 3], run the zero-shot jersey-number classifier twice — unmodified, and with the Score-CAM-identified number region replaced by mean court colour. Compare against the reported top-1 0.87 / top-3 0.99 for ViT-L/14 [PAGE 6].
*Verifiable reward:* top-1 and top-3 accuracy, with the chance baselines 3.125% and 9.375% fixed by the 32-class prompt set [PAGE 7].
*Prediction:* top-1 collapses toward the 3.125% chance level under deletion, confirming that the number glyph is the operative cue and that the "strong OCR capabilities" claim [PAGE 1] is causally correct.
*Falsification:* if accuracy remains materially above chance after deletion, the model is exploiting correlated non-glyph features (jersey cut, tape, shoe-number consistency) and the OCR interpretation is over-attributed.

**Veto Scenario 4 (supplementary) — Re-ranking gain vs gallery multiplicity.**
*Intervention:* stratify the challenge gallery by number of images per identity (the split provides 8,703 gallery images for 468 queries [PAGE 4, Table 2]) and evaluate re-ranking gain per stratum.
*Verifiable reward:* \(\Delta\)mAP = mAP\(_{\text{w/ rerank}}\) − mAP\(_{\text{w/o rerank}}\) per stratum.
*Prediction:* \(\Delta\) is largest in low-multiplicity strata and compresses in high-multiplicity strata, per the Jaccard saturation argument in §8 above.
*Falsification:* a flat \(\Delta\) across strata would indicate the re-ranking gain is driven by global graph structure rather than local neighborhood density, requiring a different explanation than the standard k-reciprocal account [PAGE 3].

---

**Bottom line.** The paper's empirical core — 98.44% mAP single-model, class-agnostic, no ensemble, 4 epochs on the large model [PAGE 5] — is well supported by its own tables. Its theoretical core — the MI bound as the *reason* the batch design works — is asserted, not measured, and the one place where the mechanics could be misread ("doubles the effective batch size") is a genuine ambiguity that Scenario 2 resolves. Its zero-shot core is real but conditioned on a visibility criterion that the paper states but does not quantify.
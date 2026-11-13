---
source: "arxiv_2403.11328v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5018
---

<NATIVE_REASONING>
The user wants me to analyze the provided research paper "Domain-Guided Masked Autoencoders for Unique Player Identification" (arXiv:2403.11328v1). The user has provided all 10 pages of source text.

Constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Must be formal.

Let me structure this carefully.

The paper is about d-MAE for jersey number recognition in sports video (SoccerNet, Ice Hockey, Baseball).

Key technical details:
- d-MAE: instead of zeroing-out patches, applies motion blur artifacts via oriented motion blur filter K' parameterized by angle ω and scale factor sf.
- Filter centered at (ks/2, ks/2). Equation (1) and (2) on page 3-4.
- Input I ∈ R^(H×W×C), split into K patches I_k ∈ R^(P²×D), K = HW/P².
- Random subset S masked with motion blur: I_masked = {m(x) : x ∈ S}.
- Unmasked tokens passed to encoder f: Fs = f([unmask]).
- Reconstruction: Î = g(concat([mask], Fs)).
- Siamese loss: L_siamese = ||h(Î) - h(I)||₁. Total loss L_mae = σ1||Î-I||₂ + σ2 L_siamese. Equation (4), (5) page 4.
- Multi-head classification loss: L_class = -Σ y_i1 log ŷ_i1 - Σ y_j2 log ŷ_j2, digits 0-9 + null class (11 classes). Equation (6) page 4.
- KfID module from [2]: JNL (Jersey Number Localization), RoI filtering, LHC, GHC. Equation (3) page 4: KfID(T) = T \ {Fn1...Fnk}.
- Modified JNL uses deformable-DETR instead of YOLOv5. Modified GHC uses ResNet deep semantic features instead of color-only.
- Keyframe fusion: n consecutive frames merged.
- Datasets: SoccerNet (4,064 tracklets, 2,052,306 images), Ice Hockey (3,510 tracklets from 84 NHL videos, avg 191 frames at 30fps), Baseball (150 tracklets from 1000+ videos).
- Results: SoccerNet Test 77.31 (+8.58 vs Balaji et al [2] 68.53), Challenge 81.92 (+8.15 vs 73.77). Ice Hockey Test 96.79 (+4.29 vs 92.50). Baseball Test 94.70 (+1.02 vs 93.68) — note abstract says 1.20% but table says +1.02 (94.70 - 93.68 = 1.02). Interesting discrepancy to flag.
- KfID ablation: Ice Hockey 61.71 → 96.79 (+35.08), Baseball 88.43 → 94.70 (+5.73), SoccerNet 35.65 → 77.31 (+41.66). Challenge SoccerNet 35.98 → 81.92 (+45.94).
- Masking ablation Table IIb: ResNet-18 58.62, ResNet-34 61.29, ResNet-152 65.10; MAE Zeroing-out 75.83, Gaussian Blur 76.47, Motion Blur 77.31. So MAE +12.2% vs conventional backbones? Actually 75.83 vs 65.10 is ~10.7 points, they say 12.2% increase (relative maybe).
- Siamese loss ablation Table V: ResNet + ℓ1 gives 77.31. VGG ℓ2 76.30, ℓ1 76.21, cosine 74.52. ResNet ℓ2 76.45, ℓ1 77.31, cosine 74.90. InceptionNet ℓ2 75.84, ℓ1 75.93, cosine 74.66. AlexNet ℓ2 74.38, ℓ1 74.41, cosine 73.93.
- Motion blur filter parameters ω range 0°–90°, sf range 0–2.0. Empirically selected.
- ViT-B MAE, pretrained with zeroing-out, further pretrained on in-house static jersey dataset with motion blur masking. Temporal transformer: ViT with 8 attention heads, 4 layers.
- Training: 20,000 iterations SoccerNet/Ice Hockey, 10,000 Baseball, batch 16, AdamW lr 3e-4, scheduler decreases after every 2000 iterations for initial 6000. Single NVIDIA 2080Ti 12GB.
- Single NVIDIA 2080Ti 12GB RAM is a hardware constraint/singularity regime.
- Batch size 16.
- Patch masking: random subset S.

Now the sections:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit >=400 words. I need to trace derivations: how motion blur masking maps to reconstruction robustness, the Siamese loss interaction, the KfID pruning effect on temporal decoder, error propagation. Gray zones: discrepancy between abstract (1.20% baseball improvement) and Table IIa (+1.02); KfID challenge set absent for ice hockey/baseball; learnable weights σ1, σ2 not given numerically; ω and sf ranges but no final chosen values; single GPU constraint; challenge set only for SoccerNet; the "12.2% increase" claim vs raw numbers (75.83 vs 65.10 = 10.73 pts absolute, ~16.5% relative? Let's compute: (75.83-65.10)/65.10 = 16.48%. They say 12.2% — unclear basis. Maybe vs ResNet-18? (75.83-58.62)/58.62 = 29.4%. Hmm. The text says "leveraging MAEs as spatial feature extractors results in a 12.2% increase compared to conventional backbones." Ambiguous. Gray zone.) Also L_class equation has possible typo: sums i=0 to 10 but y_i1 with 11 classes — indices should be 0..10, written as 10 which is fine if inclusive. Null class included. Also keyframe fusion "n consecutive frames" n undefined. GHC new uses ResNet but no depth specified. JNL deformable-DETR fine-tuned on SoccerNet digit dataset but applied to ice hockey/baseball — domain shift gray zone.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations. Include Eq (1)-(6), dataset sizes, training hyperparams, accuracy numbers with [PAGE N]. Breakdown of operations.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Vincent et al. [24] denoising autoencoders (2010), Pathak context encoders, Chen et al. [25] sequence transformer, MAE [16] He et al. 2021/2022, ViT [15], deformable-DETR [30], YOLOv5 [29], prior work Balaji et al. [2] KfID, Vats et al. [1] ice hockey transformers, Chan et al. [10] LSTM hockey. Multi-week traps: temporal coherence assumptions across games, distribution shift between test/challenge sets, color-only GHC failure with same-team opponents (mentioned page 5), small digit detection failure.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit metaphorical but I can interpret: crisis habit regression = under pressure (motion blur, occlusion), models regress to zeroing-out masking habits (conventional MAE); counter-trap = domain-guided motion-blur masking as counter to the trap of assuming static patches; clock = temporal transformer decoder with 4 layers / 8 heads, 20,000 iteration schedule, 30fps tracklets, the "clock" of broadcast frame rate vs keyframe pruning. Also recurse: the model's own predictions fed back? Multi-head classification (two digits) — recursive theory of mind about what the opponent (occlusion/blur) "thinks" the model will do. I'll write it as formal analysis of inductive biases.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: motion blur from player velocity vs camera shutter; blur kernel parameters ω, sf bounded 0-90°, 0-2.0; if blur exceeds kernel support, singularity. Biomechanical: jersey digit size vs patch size P² — small digits below patch resolution veto (JNL failure on smaller digits admitted page 5). Weather: not directly applicable (indoor hockey, stadium soccer/baseball), but broadcast feed artifacts (water droplets metaphor page 3), occlusion veto. Adjudication: which layer vetoes what — KfID vetoes frames without jersey numbers; d-MAE vetoes zero-out masking for blur; Siamese loss vetoes feature drift.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I'll frame as counterfactual veto scenarios that can be verified:
1. If ω outside [0°,90°] or sf outside [0,2.0], motion blur kernel misaligned with actual broadcast blur distribution → reconstruction MSE spikes; prediction: accuracy drops below zero-out baseline (75.83) on SoccerNet.
2. If keyframe fusion window n exceeds temporal coherence length (frames too distant), augmentation injects label-contradicting digit motion → JNL false positives rise; prediction: SoccerNet test accuracy falls below 75.47 (old GHC baseline) or KfID gain < 1.84%.
3. If single 2080Ti 12GB forces batch <16 or patch count K reduced due to OOM, latent spatial feature capacity Fs collapses; prediction: test accuracy ≤ ResNet-152 baseline 65.10 or MAE zero-out 75.83 not reached.
Include verifiable metrics.

Word count: >=1000 total across sections, THINK_TRACE >=400. Let me ensure each section is substantial. I'll aim for ~1600-2000 words total.

No betting lines. No fake ratios. Formal equations with units where applicable. Citations [PAGE N].

Let me draft.

THINK_TRACE (>=400 words): Derivation chain:
1. Image → patches: I ∈ R^(H×W×3), P×P patches, D embedding. K = HW/P² tokens.
2. Masking: S random subset; instead of m(x)=0, m applies oriented blur K' with rotation R(ω, sf) Eq (1)-(2) [PAGE 3-4]. This makes masked tokens carry corrupted-but-structured spatial priors matching broadcast blur.
3. Encoder f maps unmasked tokens to Fs. Decoder g reconstructs from concat([mask], Fs). Because masked tokens are blurred not zeroed, gradient flows through spatially aliased structure rather than void; Siamese loss L_siamese = ||h(Î)-h(I)||₁ [PAGE 4] forces perceptual feature alignment, ℓ1 chosen over ℓ2/cosine for magnitude preservation and outlier robustness (Table V [PAGE 7]).
4. Temporal: Fs from n keyframes → transformer decoder (8 heads, 4 layers) → Ftemp → two classification heads (digits y1, y2 ∈ R^11) with cross-entropy Eq (6) [PAGE 4].
5. KfID prunes tracklet T → keyframes; Eq (3) [PAGE 4]. Modified JNL (deformable-DETR) and GHC (ResNet deep features) fix small-digit false positives and same-team color clustering [PAGE 5]. Keyframe fusion merges n consecutive frames.
Gray zones: abstract claims +1.20% baseball vs Table IIa +1.02 (94.70-93.68) [PAGE 1 vs PAGE 6]; "12.2% increase" MAE vs conventional backbones not reproducible from Table IIb raw numbers (75.83 vs 65.10 = +10.73 pts; relative to what?) [PAGE 6-7]; ω, sf ranges given but final values not disclosed [PAGE 6]; challenge sets only for SoccerNet [PAGE 5]; n in keyframe fusion undefined [PAGE 5]; σ1, σ2 learnable but values unreported [PAGE 4]; single 2080Ti 12GB imposes batch size 16 ceiling [PAGE 6]; JNL trained on SoccerNet digits then applied cross-sport (domain shift) [PAGE 5].

SOURCE_OPERATORS_AND_EQUATIONS: list all equations with page numbers and units. Table values.

RETROCAUSAL_GENEALOGY: lineage from denoising autoencoders [24] PAGE 2, context encoders, MLM [13][14], MAE [16], ViT [15], deformable DETR [30], YOLOv5 [29], prior KfID [2], hockey transformers [1], LSTM [10], static jersey CNNs [3][4][27][8]. Multi-week traps: distribution shift between test/challenge (SoccerNet sampled from different games PAGE 5), same-team color collapse in GHC (PAGE 5), small-digit JNL failure (PAGE 5), overfitting to in-house static jersey dataset for MAE pretraining (PAGE 6), 84 NHL videos only for ice hockey (PAGE 6).

RECURSIVE_THEORY_OF_MIND: crisis habit regression — under blur/occlusion crisis, conventional MAE regresses to zero-out habit; d-MAE is counter-trap (mask how, not just where). Clock — 30 fps tracklets, avg 191 frames ice hockey PAGE 6, 20k iterations schedule, transformer temporal context window n keyframes. Two-digit recursion: ŷ1, ŷ2 mutually condition via shared Ftemp; null class (10 digits + null) creates absorption state. Model-of-opponent: occlusion "anticipates" zero-padding; motion-blur masking defeats that expectation.

CROSS_LAYER_VETO_ADJUDICATION: Physical veto — blur kernel support K' centered (ks/2,ks/2); if player angular velocity exceeds kernel scale sf ∈ [0,2], unrecoverable aliasing; patch size P vs digit pixel extent. Biomechanical — sprint speed, stick/puck occlusion in hockey, helmet glare; not modeled explicitly, only via blur prior. Weather — indoor arena vs outdoor stadium rain/glare not in training augmentations (only color jitter ±10° rotation for baseball PAGE 6). Adjudication hierarchy: KfID vetoes frame inclusion first; d-MAE vetoes zero-mask; Siamese loss vetoes decoder drift; classification head vetoes ambiguous digits via null class.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Make sure no mention of betting. Use formal tone. Cite pages.

Let me write it out. I'll aim for around 1800-2200 words total to be safe, with THINK_TRACE around 500-600 words.

Double-check equation formatting. Use LaTeX.

Equation (1) from page 3-4:
m(I_k)(x,y) = (1/P) Σ_{i,j}^{K'} K'_{ij} * I_k(x,y) — actually the text shows K' P sum... let me transcribe carefully:

m(Ik)(x, y) = 
K′
P
i,j K′
ij
∗Ik(x, y)

Hmm the transcription is a bit mangled: 
m(Ik)(x, y) =
K′
P
i,j K′
ij
∗Ik(x, y)

I'll write it as: m(I_k)(x,y) = (1/K') Σ_{i,j} K'_{ij} * I_k(x,y) but I should stick close to what's printed. I'll present it reasonably and note it's Eq (1) [PAGE 3-4]. Actually better to reproduce faithfully:

m(I_k)(x,y) = \frac{1}{K'}\sum_{i,j} K'_{ij} * I_k(x,y) — I'll just present the operator and cite [PAGE 3–4].

Eq (2) rotation matrix R on page 4:
R = [[sf cos ω, -sf sin ω, ks/2 (1−sf cos ω) + ks/2 sf sin ω], [sf sin ω, sf cos ω, ks/2 (1−sf cos ω) − ks/2 sf cos ω]]

Eq (3) KfID(T) = T \ {Fn1...Fnk} [PAGE 4].
Eq (4) L_siamese = ||h(Î) − h(I)||₁ [PAGE 4].
Eq (5) L_mae = σ1||Î−I||₂² + σ2 L_siamese [PAGE 4]. Note text writes ||ˆI −I||2 — probably squared L2. I'll write ||·||₂² with note.
Eq (6) L_class = −Σ_{i=0}^{10} y_i1 log ŷ_i1 − Σ_{j=0}^{10} y_j2 log ŷ_j2 [PAGE 4]. Classes: 10 digits + null = 11, indices 0..10.

Alright. Now write final output with exact XML tags. No extra sections. Ensure word depth. Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with the image-to-patch operator on a broadcast frame I ∈ R^{H×W×3}, decomposed into K = HW/P² patches I_k ∈ R^{P²×D} [PAGE 3]. Conventional MAEs apply m(x) = 0 (zeroing-out) on a random subset S ⊆ I [PAGE 2–3], which the authors argue fails under motion blur because the masked tokens carry no spatial prior matching the corruption process. The domain-guided replacement is an oriented motion-blur filter m(I_k)(x,y) parameterized by rotation angle ω and scale factor sf, with the kernel centered at (k_s/2, k_s/2) and rotation matrix R(ω, sf) [PAGE 3–4, Eq. (1)–(2)]. The masked tokens remain in the reconstruction objective Î = g(concat([mask], F_s)), so gradients flow through structurally corrupted pixels rather than through a constant void [PAGE 3].

The second hop is supervision. During pre-training, the total loss combines a pixel-space term and a Siamese feature-space term: L_mae = σ₁||Î − I||₂ + σ₂ L_siamese, where L_siamese = ||h(Î) − h(I)||₁ and h(·) is a ResNet feature extractor [PAGE 4, Eq. (4)–(5)]. The choice of ℓ₁ over ℓ₂ or cosine similarity is justified by magnitude sensitivity and outlier robustness, validated in Table V where ResNet + ℓ₁ yields 77.31% on SoccerNet, the highest entry [PAGE 7]. After pre-training, the MAE decoder is discarded; unmasked keyframes are encoded into F_s and consumed by a ViT-style temporal transformer decoder (8 attention heads, 4 layers) producing F_temp [PAGE 4–6].

The third hop is temporal reduction via the KfID module. Given tracklet T = {F_i}_{i=1}^N, KfID(T) = T \ {F_{n1}, …, F_{nk}} removes frames without relevant jersey information [PAGE 4, Eq. (3)]. The authors replace YOLOv5-based JNL with deformable-DETR to rescue small digits, and replace color-only GHC clustering with ResNet deep-semantic clustering to avoid same-team color collapse [PAGE 5]. Keyframe fusion then merges n consecutive frames to preserve temporal flow under label scarcity [PAGE 5]. Two classification heads predict digits ŷ₁, ŷ₂ ∈ R^{11} (10 digits + null class) via multi-task cross-entropy L_class [PAGE 4, Eq. (6)].

Gray-zone audit. (i) Result inconsistency: the abstract claims +1.20% on Baseball versus Balaji et al. [2], but Table IIa reports 94.70% vs 93.68%, i.e., +1.02 points [PAGE 1 vs PAGE 6]. (ii) The claimed “12.2% increase” from MAE backbones versus conventional backbones is not directly reproducible from Table IIb raw figures (ResNet-152 65.10 vs MAE zero-out 75.83 is +10.73 absolute points; the reference baseline for the percentage is unstated) [PAGE 6–7]. (iii) Blur hyperparameters ω ∈ [0°, 90°] and sf ∈ [0, 2.0] are searched but final selected values are not disclosed [PAGE 6]. (iv) Challenge sets exist only for SoccerNet; Ice Hockey and Baseball report a single test split [PAGE 5–6]. (v) The keyframe-fusion window size n is never numerically specified [PAGE 5]. (vi) Learnable weights σ₁, σ₂ are present in Eq. (5) but their converged values are unreported [PAGE 4]. (vii) JNL deformable-DETR is fine-tuned on SoccerNet digits and then transferred to Ice Hockey and Baseball, an unquantified cross-sport domain shift [PAGE 5–6]. (viii) All experiments run on a single NVIDIA 2080Ti with 12GB RAM and batch size 16, imposing a hard hardware ceiling on patch count K and effective batch statistics [PAGE 6]. These regimes constitute singularities where the reported generalization may break down.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, SI/information units, and page citations.

Patch extraction [PAGE 3]:
I ∈ R^{H×W×C}, split into K patches {I_k ∈ R^{P²×D}}_{k=1}^K, K = HW/P². Units: pixels for H, W; dimensionless patch count K; embedding dimension D in feature units.

Domain-guided masking [PAGE 3–4, Eq. (1)–(2)]:
Random subset S ⊆ I masked by oriented motion-blur filter m rather than zeroing-out:
I_masked = { m(x) : x ∈ S }, I_unmasked = I \ S.
m(I_k)(x,y) = (1/K') Σ_{i,j} K'_{ij} * I_k(x,y), where * is 2D convolution, (x,y) ∈ patch pixel domain.
Rotation matrix R ∈ R^{3×3} (affine, homogeneous coordinates) parameterized by ω ∈ [0°, 90°] and scale sf ∈ [0, 2.0], kernel size k_s, centered at (k_s/2, k_s/2) [PAGE 4]:
R = 
⎡ sf cos(ω)   −sf sin(ω)   k_s/2(1 − sf cos(ω)) + k_s/2 sf sin(ω) ⎤
⎣ sf sin(ω)    sf cos(ω)   k_s/2(1 − sf cos(ω)) − k_s/2 sf cos(ω) ⎦

Encoder/decoder [PAGE 3]:
F_s = f([unmask]), f: R^{K×P²×D} → R^{K×P²×D} (MAE encoder, ViT-B variant [PAGE 6]).
Î = g(concat([mask], F_s)), g: R^{K×P²×D} → R^{H×W×C} (MAE decoder).

Siamese pre-training objective [PAGE 4, Eq. (4)–(5)]:
L_siamese = || h(Î) − h(I) ||₁, h(·) = ResNet feature extractor; output in feature space, ℓ₁ norm units.
L_mae = σ₁ || Î − I ||₂ + σ₂ L_siamese; σ₁, σ₂ learnable weights (final values unreported [PAGE 4, Table V gray zone]). Pixel reconstruction term in squared ℓ₂ units per printed notation.

KfID pruning [PAGE 4, Eq. (3)]:
KfID(T) = T \ {F_{n1}, …, F_{nk}}, T = {F_i ∈ R^{H×W×3}}_{i=1}^N. Removes noisy frames lacking jersey information.

Multi-head classification [PAGE 4, Eq. (6)]:
L_class = − Σ_{i=0}^{10} y_{i1} log ŷ_{i1} − Σ_{j=0}^{10} y_{j2} log ŷ_{j2}.
Digits y₁, y₂ ∈ R^{11}: 10 numeric classes + 1 null class; predictions ŷ₁, ŷ₂ ∈ R^{11}. Information unit: log-probability (nats, since natural log).

Temporal decoder [PAGE 4–6]:
ViT backbone, 8 attention heads, 4 transformer layers; input spatial tokens F_s from n keyframes; output F_temp encapsulating jersey cues.

Dataset inventories [PAGE 5–6, Table I]:
SoccerNet: 4,064 tracklets total; train 1,141 / val 286 / test 1,211 / challenge 1,426; images 2,052,306; keyframes 262,382. Test and challenge sampled from different game distributions (distribution shift).
Ice Hockey: 3,510 tracklets from 84 NHL videos; avg tracklet length 191 frames at 30 fps; train 2,829 / val 176 / test 505; no challenge split.
Baseball: 150 tracklets from 1,000+ videos; train 105 / val 15 / test 30; no challenge split.

Hyperparameters [PAGE 6]:
AdamW, lr = 3e-4, scheduler decays every 2,000 iterations for first 6,000; iterations: 20,000 (SoccerNet, Ice Hockey), 10,000 (Baseball); batch size 16; single NVIDIA 2080Ti 12GB RAM; images resized to 224×224; ImageNet normalization. Baseball augmentation: color jitter and random rotation ±10°.

Quantitative results [PAGE 6, Table IIa]:
SoccerNet: Ours 77.31 test (+8.58 vs Balaji et al. 68.53), challenge 81.92 (+8.15 vs 73.77). Abstract claims +8.58%, +4.29%, +1.20% across datasets; Table IIa shows Ice Hockey +4.29 (96.79 vs 92.50) and Baseball +1.02 (94.70 vs 93.68), not +1.20.
Ice Hockey: 96.79 test. Baseball: 94.70 test.
Masking ablation [PAGE 6–7, Table IIb], SoccerNet:
ResNet-18: 58.62; ResNet-34: 61.29; ResNet-152: 65.10 (no masking).
MAE zero-out: 75.83; MAE Gaussian blur: 76.47; MAE motion blur: 77.31.
KfID ablation [PAGE 7, Table III]:
Ice Hockey: 61.71 → 96.79 (+35.08). Baseball: 88.43 → 94.70 (+5.73). SoccerNet: 35.65 → 77.31 (+41.66); challenge 35.98 → 81.92 (+45.94).
KfID component ablation [PAGE 7–8, Table IV], SoccerNet:
GHC old 75.47 → GHC new 76.54 (+1.39 with old JNL); JNL old 75.47 → JNL new 75.92 (+0.45 with old GHC); both new: 77.31 (+1.84 total vs old-old).
Siamese loss ablation [PAGE 7, Table V], SoccerNet: best ResNet + ℓ₁ = 77.31; ResNet + ℓ₂ = 76.45; ResNet + cosine = 74.90; VGG + ℓ₂ = 76.30; AlexNet + ℓ₁ = 74.41.

Breakdown of operations and breakdown regimes:
1. If motion-blur kernel orientation ω or scale sf does not match the physical point-spread function of the broadcast capture, the masked tokens inject structured aliasing rather than a denoising prior; breakdown when |ω_actual − ω_search| exceeds kernel angular support or sf_actual > 2.0 [PAGE 6 range].
2. If jersey digit spatial extent < patch resolution P², JNL false positives and missed detections rise; authors explicitly admit vanilla JNL “fails to recognize smaller digits” [PAGE 5].
3. If multiple players of the same team occupy a tracklet, color-only GHC clusters spuriously; fixed by ResNet deep features but ResNet depth unspecifed [PAGE 5].
4. If keyframe-fusion window n spans frames too distant temporally, label-contradicting digit motion is fused in, injecting noise [PAGE 5].
5. Single-GPU 12GB memory caps batch size at 16 and patch token count K; below this, latent F_s capacity collapses [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week failure traps.

Lineage. The masking paradigm descends from masked language modeling (Devlin et al. BERT [14]; Radford & Narasimhan GPT [13]) and pixel-space generative pre-training (Chen et al. [25]), imported into vision via discrete token masking (Dosovitskiy ViT [15]; He et al. MAE [16], cited [PAGE 2]). Classical antecedents include denoising autoencoders (Vincent et al. [24], JMLR 2010) and context encoders/path-based inpainting (Pathak et al.; Barnes et al. PatchMatch [22]; Bertalmío et al. [20]) [PAGE 2]. Adaptive masking research explored attention maps (Kakogeorgiou et al. [18]) and adversarial mask generators (Chen et al. [19]; Bandara et al. AdaMAE [17]) [PAGE 2], but the paper identifies the gap as “how to mask” rather than “where to mask” [PAGE 2–3].

Sport-specific antecedents: static jersey-number CNNs (Gerke et al. [27], Liu et al. [3], Li et al. [4], Vats et al. [8], Bhargavi et al. [28]) [PAGE 3]; temporal tracklet methods (Vats et al. [1] transformer ice hockey; Chan et al. [10] LSTM + 1D-CNN late fusion; Liu et al. [5] two-stage American football) [PAGE 3]; and the direct predecessor Balaji et al. [2] KfID module for low-resolution broadcast jersey recognition [PAGE 1, 3–4]. The d-MAE paper inherits KfID’s three-stage logic (JNL, RoI filtering, LHC/GHC) [PAGE 4] and repairs two acknowledged failure modes: small-digit JNL failure via deformable-DETR (Zhu et al. [30]) fine-tuned on SoccerNet digits, and color-only GHC collapse via ResNet deep semantics [PAGE 5]. YOLOv5 (Jocher et al. [29]) is the displaced JNL detector [PAGE 5].

Multi-week traps (systemic, not single-game). (1) Distribution drift between test and challenge sets: SoccerNet test and challenge are sampled from different games, so a model tuned on one weekend’s broadcast distribution may fail the next [PAGE 5]. (2) Team-color confounding: when same-team opponents share a tracklet, HSV-based GHC clusters by jersey color rather than identity, producing spurious associations across games within the same week [PAGE 5]. (3) Cross-sport JNL transfer: the digit detector is fine-tuned on SoccerNet images then applied to Ice Hockey and Baseball without reported re-calibration, risking week-to-week variance as camera angles and lighting regimes change [PAGE 5–6]. (4) Pretraining distribution mismatch: the MAE is initialized from zero-out-pretrained weights, then further pretrained on an in-house static jersey dataset; static distribution does not cover motion blur statistics of live games across weeks [PAGE 6]. (5) Small sample tails: Baseball has only 150 tracklets and Ice Hockey only 84 source videos; ablation gains on these sets (e.g., +1.02 Baseball) have wide confidence intervals not reported [PAGE 5–6]. (6) Temporal stationarity: keyframe fusion assumes n consecutive frames are label-coherent; fast substitutions or jersey changes within a game violate this [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock, modeled as nested belief updates.

Crisis habit regression. Under the crisis condition of broadcast motion blur and occlusion, conventional MAEs regress to a dominant habit: zeroing-out random patches [PAGE 2–3]. This habit is optimal for i.i.d. occlusion but anti-fragile under structured blur, because the decoder receives a constant zero token and must hallucinate spatial structure from unmasked context alone. The d-MAE is the counter-trap: it anticipates that the “opponent” (the imaging pipeline) produces blur, not erasure, and therefore masks with motion-blur artifacts so the encoder learns to invert the same corruption family at inference [PAGE 2–3, Eq. (1)–(2)]. The first-order theory of mind is: “If I (the model) expect the input to be blanked where it is unreadable, I fail; if I expect it to be smeared, I learn to de-smear.”

Recursion depth. The recursion enters at the temporal decoder. F_s from each keyframe is a spatial hypothesis about jersey identity; F_temp aggregates these hypotheses across n keyframes via self-attention over spatial tokens [PAGE 4]. Each head ŷ₁, ŷ₂ ∈ R^{11} emits a digit distribution conditioned on the shared F_temp [PAGE 4, Eq. (6)]. The null class functions as an absorbing state: when temporal evidence is insufficient (all keyframes blurred/occluded), probability mass should accumulate in the null class rather than forcing a false digit. This is a second-order belief: the model must believe that the observer (coach/scout downstream) prefers abstention to a confident wrong jersey number.

Clock layer. The “clock” operates at three scales. (i) Acquisition clock: Ice Hockey tracklets average 191 frames at 30 fps [PAGE 6], defining the Nyquist rate at which jersey digits enter and exit motion blur; keyframes must be sampled faster than the digit-exit rate. (ii) Optimization clock: 20,000 iterations (SoccerNet/Ice Hockey) or 10,000 (Baseball) with lr decay every 2,000 iterations for the first 6,000 [PAGE 6]; beyond iteration 6,000 the lr is fixed, so late-distribution shifts are not adapated. (iii) Inference clock: the transformer decoder has 4 layers and 8 heads, bounding the temporal receptive field to n keyframes within a single forward pass; no recurrent state carries across tracklets [PAGE 4–6].

Counter-trap verification. If an adversary (broadcast production) increases shutter speed so motion blur vanishes, d-MAE’s blur-mimicking masks become mismatched priors and zero-out MAE may recover parity; the ablation shows Gaussian blur (76.47) and zero-out (75.83) trail motion blur (77.31) only modestly on SoccerNet [PAGE 6–7, Table IIb], implying the counter-trap’s margin is small under non-blur regimes and can invert. The crisis habit therefore regresses conditionally: d-MAE dominates under blur, conventional MAE catches up under sharpness.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers with adjudication hierarchy.

Physical veto (image-formation layer). The imaging point-spread function is approximated by oriented kernel K' with ω ∈ [0°, 90°] and sf ∈ [0, 2.0], centered at (k_s/2, k_s/2) [PAGE 3–4, Eq. (1)–(2)]. Veto condition: if player/camera relative angular velocity produces a blur streak whose length exceeds k_s·sf or whose angle falls outside the searched ω range, reconstruction loss ||Î − I||₂² diverges and the Siamese feature alignment ||h(Î) − h(I)||₁ cannot recover the digit topology [PAGE 4]. Patch size P² also imposes a physical resolution veto: a jersey digit spanning fewer pixels than P² is irrecoverably aliased before the encoder sees it [PAGE 3].

Biomechanical veto (actor layer). Ice Hockey introduces high-speed skating, stick and puck occlusion, and helmet glare; Baseball and Soccer introduce sprint-driven motion blur and mutual occlusion in dense play [PAGE 1, Fig. 1; PAGE 6]. These are not modeled as explicit physical parameters in d-MAE; they enter only statistically through the motion-blur pre-training distribution. Veto condition: when occlusion covers both digits of a jersey simultaneously across all n keyframes, KfID removes the frames (Eq. (3)) and the tracklet has zero input to the temporal decoder, forcing abstention via the null class [PAGE 4–5]. The paper admits JNL fails on smaller digits in crowded scenarios [PAGE 5], a biomechanical scale veto.

Weather veto (environment layer). No explicit weather augmentation is described; Baseball uses color jitter and rotation ±10° only [PAGE 6]. Soccer and Baseball are outdoor and subject to rain, fog, and stadium lighting shifts; Ice Hockey is indoor arena lighting. Because the training data are fixed broadcast captures, weather-induced distribution shift (e.g., night-game glare, rain on lens) is an unmodeled veto. The authors’ water-droplet metaphor [PAGE 3] acknowledges non-zero-out masking phenomena, but no rain/fog corruption layer is in the pipeline.

Adjudication hierarchy. Layer 1 (KfID) vetoes frame admission: frames without localized jersey digits are removed before the encoder [PAGE 4–5]. Layer 2 (d-MAE) vetoes the zeroing-out habit: it rejects masks that discard structural information, substituting blur-corrupted tokens [PAGE 2–3]. Layer 3 (Siamese loss) vetoes decoder drift: perceptual ℓ₁ feature mismatch penalizes reconstructions that preserve pixels but lose digit semantics [PAGE 4, Table V]. Layer 4 (classification heads) vetoes forced decisions: the null class absorbs low-confidence predictions when layers 1–3 cannot converge [PAGE 4, Eq. (6)]. A tracklet is output only if it survives all four vetoes; otherwise the model defers to the null class or the tracklet is dropped by KfID. No veto explicitly models weather, sub-patch digit scale, or shutter-speed mismatch outside [0°, 90°] × [0, 2.0], defining the exact breakdown regime.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions. RLVR = reinforcement-learning-from-verifiable-rewards framing where each scenario is verified by held-out measurement, not by betting-style odds.

Veto Scenario 1 — Blur-kernel extrapolation. Intervention: evaluate d-MAE on a held-out SoccerNet subset whose motion-blur angles lie outside [0°, 90°] or scale factors sf > 2.0 (e.g., extreme panning shots from playoff broadcasts). Verification metric: test-set accuracy and mean ||Î − I||₂² on this subset versus the main test set (77.31%). Prediction: accuracy falls below the MAE zero-out baseline of 75.83% [PAGE 6–7, Table IIb], because the blur prior becomes an anti-prior and reconstruction gradient misleads the encoder. Verifiable by re-running inference with synthetically rotated blur kernels at ω ∈ (90°, 180°] and sf ∈ (2.0, 4.0].

Veto Scenario 2 — Keyframe-fusion temporal incoherence. Intervention: set keyframe-fusion window n to span non-consecutive or distant frames within Ice Hockey tracklets (avg length 191 frames at 30 fps [PAGE 6]), violating the “n consecutive frames” assumption [PAGE 5]. Verification metric: Ice Hockey test accuracy versus the reported 96.79% and the no-KfID baseline 61.71% [PAGE 7, Table III]. Prediction: if n exceeds the digit-coherence window, label-contradicting motion is fused, JNL false positives rise, and accuracy drops below 92.50% (Balaji et al. [2] SOTA) [PAGE 6, Table IIa], erasing the +4.29% gain. Verifiable by ablating n ∈ {1, 3, 5, 11, 21} and measuring the inflection point.

Veto Scenario 3 — Memory-constrained batch collapse. Intervention: reduce effective batch size below 16 or reduce patch count K via coarser P on the single 2080Ti 12GB device [PAGE 6], simulating edge deployment. Verification metric: SoccerNet test accuracy versus ResNet-152 backbone 65.10% and MAE zero-out 75.83% [PAGE 6–7, Table IIb]. Prediction: below a critical batch/token threshold, F_s latent capacity collapses and accuracy falls to ≤ 65.10%, i.e., beneath even the strongest conventional CNN backbone, because the Siamese loss cannot stabilize the decoder with insufficient gradient statistics. Verifiable by sweeping batch size ∈ {2, 4, 8, 16} and patch size P ∈ {16, 32} while holding the architecture fixed.
</RLVR_COUNTERFACTUAL_VETOES>
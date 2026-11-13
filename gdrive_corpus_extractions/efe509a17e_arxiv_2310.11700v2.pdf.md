---
source: "arxiv_2310.11700v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 20
model: baidu/ernie-5.5-flash-preview:free
words: 6641
---

<NATIVE_REASONING>
We need answer user's request. They provided source text and want GSE + GSI Frontier Reasoning Foundry. Strict invariants: zero betting lines, zero toy equations, formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need >=1000 words across exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need produce final with those sections only? likely. Need ensure >1000 words total, THINK_TRACE >=400. Must not mention betting lines. Need formalize equations from paper: Equation (1) sim_comb = λ sim_g + (1−λ) sim_c, [PAGE 8]. Eq (2) |S_ci - S_q| > th [PAGE 9]. Need formal LaTeX, units, assumptions, singularities. Need no fake ratios. Could include cosine similarity, histograms, mAP, CMC, F1. Need cite exact page markers and verbatim quotes. Need maybe define units: features dimensionless, time frames, seconds at 60 fps, th=3600 frames (60 s) [PAGE 9]. Need mention video 4K 60 fps [PAGE 9]. Need maybe Bayesian/probability units. Need source operators: detection, segmentation, tracking, re-id. Could formalize as pipeline mapping. Need exact breakdown regimes: nighttime motion blur segmentation degradation; λ extremes; lap-time filter failure if th too small/large; shoe similarity degeneracy when similar shoes; GRU latent bottleneck 128-dimensional [PAGE 8, 11]. Need no toy equations? They say never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. So we can use paper equations, plus formal probabilistic definitions if grounded. Avoid invented ratio like force/fatigue. We can define mAP as expectation of precision over recall? That's formal, not toy. Need maybe information units: latent variable dimension 128, feature vector dimensionless; cosine similarity dimensionless; cross entropy in nats if natural log? Paper says binary cross entropy, MSE. Units not explicit. We can state loss units: MSE in squared pixel intensity units, BCE in bits/nats depending log base; not specified. But source says loss functions only [PAGE 10, 11]. Need careful.

Need final in XML sections. Need ensure word count >=1000. Could be ~2500 words. Need maybe include verbatim quotes with page markers. Need cite exact markers like [PAGE 8]. Must not include analysis. Need ensure no betting. Also "ZERO BETTING LINES" no odds. Fine.

Let's plan content.

THINK_TRACE: Need deep multi-hop derivation & gray-zone audit >=400 words. Discuss task: open-world re-id, raw video -> identity tracks across disappearances. Derive pipeline: video frames at 60 fps; YOLOv8 segmentation; EfficientNet classification; ByteTrack; shoe detection; feature extraction. Gray zones: day/night, motion blur, non-runners, shoe color similarity, lap filter, λ selection. Mention source quotes. Need not equations? can mention. Need >400 words. Let's draft ~600.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Could structure with equations:
1. Frame/time mapping: t = k / f, f=60 Hz, frame k integer. [PAGE 9] quote "captured at 4K and 60 fps". Units: seconds.
2. Segmentation: person mask M_i,k. Not equation maybe.
3. Similarity: sim_g = cos(z_i,z_j) = (z_i·z_j)/(||z_i|| ||z_j||), dimensionless. From source says cosine similarity [PAGE 8]. For color hist correlation: sim_c = corr(h_i,h_j), dimensionless. Combined Eq (1) from [PAGE 8] verbatim: "simcomb = λsimg + (1 −λ)simc,". Need formal with λ∈[0,1]. Source uses lambda, chosen 0.85 [PAGE 11]. Need note g and c in paper are GRU AE and color, though eq typo uses l,c? We can preserve: Let sim_g denote GRU AE, sim_c color. Units dimensionless.
4. Color histogram: 24-dimensional = 3 channels × 8 bins [PAGE 8], ignore black background. Combined color similarity: 0.9 upper body + 0.1 shoe [PAGE 8]. Formal: sim_color = 0.9 sim_upper + 0.1 sim_shoe.
5. Lap-time filtering Eq (2): |S_ci - S_q| > th [PAGE 9], th=3,600 frames (60 s) [PAGE 9]. Formal: sim=0 if |S_ci-S_q|>th else computed. Units frames or seconds; S start frame integer; th frames; at 60 Hz, 60 s. Singularity: if runners legitimately reappear faster than th, false zeros; if too slow, missed occlusions.
6. GRU AE latent variable: z ∈ R^{128} [PAGE 8, 11]; encoder mapping X sequence to z. Decoder reconstructs previous frame. Loss MSE [PAGE 11], Adam lr 1e-3. Formal: L_MSE = (1/N) Σ (x_hat - x)^2, units squared normalized intensity. Breakdown: day/night brightness domain shift; latent not discriminative when motion blur.
7. Evaluation: mAP = (1/R) Σ P@k(r) maybe. CMC rank-n. Units dimensionless probabilities. Source says mAP and CMC rank-n [PAGE 10]. Could formalize but ensure not invented? It's standard. Need state assumptions. Maybe cite source [PAGE 10] quote "mean average precision (mAP) and Cumulative Matching Characteristic (CMC) rank-n accuracy".
8. Runner classifier F1=99.8% [PAGE 12], shoe detector mAP50-95=86.2% [PAGE 12]. Formal maybe not needed. Need units.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss closed vs open world, sports tracking, ReID surveys, YOLO, EfficientNet, ByteTrack, HHCL, SpCL, ICE, PPLR, gait recognition, sequence-to-sequence autoencoder. Multi-week traps: relying on bib numbers, closed-world labeled datasets, assuming single-scene IDs persist across framed-out events, day/night domain shift, shoe-only color traps, lap-time threshold mis-specified, ignoring background segmentation. Need cite pages maybe. Use quotes. Could mention [PAGE 2] closed-world, [PAGE 5] unsupervised, [PAGE 6] ByteTrack IDs different across scenes, [PAGE 13] table.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need maybe in sports practice: operators may revert to manual bib or jersey numbers under pressure; model counter-traps: shoe local features, GRU dynamic features, HHCL hard samples; clock/lap-time filter. Need recursive: if runners wear identical shoes/clothes, dynamic features; if nighttime, rely on HHCL shoes; if same runner appears after <60s, lap filter can cause regression. Need mention "Crisis habit regression" maybe define: under time pressure, operators regress to closed-world assumptions. Counter-trap: open-world pipeline, unsupervised features, lap filter. Clock: 60 fps, 3600 frames, two-step running sequence, period unification. Need no betting.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need prove that physical constraints can veto certain inferences: side-view fixed camera, 10m capture, 60 fps, motion blur, nighttime low light, runner disappearance due framing out. Biomechanical: running form dynamic features unique but require clear images; shoes high confidence local features; if shoe detector unclear, veto shoe-based identity. Weather: daytime/nighttime brightness. Maybe formal proof: if segmentation mask IoU below threshold due blur, then feature conditional entropy high? Need no fake equation? Could use probability: P(identity | features) low. Need maybe state formal assumptions: identity variable Y, observation X, filter F. If observation corrupted, posterior uncertainty increases. Could state source [PAGE 13] quote "poor" nighttime images cause "dynamic features are not well extracted". Veto proof: cannot use GRU dynamic features when image quality poor; only robust method HHCL w/ shoes. Need cite.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need scenarios where reinforcement learning/veto should veto? RLVR maybe reinforcement learning from verifiable rewards? Need propose verifiable counterfactuals:
1. Veto identity merge when lap-time filter says |S_i-S_q| <= 3600 frames but features identical? Hmm.
Need 3 scenarios and predictions. Must be verifiable using source. For each: scenario, veto condition, prediction, evidence.
- Scenario A: nighttime video with motion blur; if GRU AE w/o color mAP drops to 0.636 [PAGE 13], veto using dynamic-only features; prediction: nighttime mAP of GRU AE w/o hist lower than daytime 0.852. Verify from Table 2.
- Scenario B: runners wearing identical shoes/clothes; if shoe color similarity high but global features not separate, veto shoe-only; prediction: Color hist w/o shoes AP=0.430, Color hist w/ shoes AP=0.677, but HHCL w/ shoes AP=1.0 in example [PAGE 14], indicating need combined global/local. Need verify.
- Scenario C: query reappears sooner than lap threshold? If start-frame difference >3600? Actually filter zeros similarity if >3600; if runners reappear after >60s, not zero. If threshold too small relative to lap time, veto. Prediction: if th=3600 frames at 60 fps [PAGE 9] and lap interval >60s, filter will not zero; if lap interval <60s, filter zeros true reappearances. Need scenario: practice track lap time <60s? The source says th set 3,600 frames (60 s) [PAGE 9]. If runner lap interval is 45 s, filter would incorrectly zero. But source doesn't provide lap times. Can propose counterfactual: if measured lap interval <60s, system's filter creates false negatives. Verifiable with video timestamps. Prediction: re-id recall drops if lap period <th. Need maybe not source data but formal.

Need ensure >=1000 words. Could be around 2500. Need include exact XML tags. No other text outside? The user asks with XML sections. We can output only those sections. Need no markdown? XML tags. Could include LaTeX inside. Need ensure not too long? fine.

Need careful with "ZERO TOY EQUATIONS". We'll only use equations from source and standard definitions. State formal LaTeX equations, units, assumptions, singularities. Need not invent fake ratios. Standard mAP definition okay? It's not toy. Could include: 
\mathrm{mAP} = \frac{1}{|Q|}\sum_{q\in Q} \mathrm{AP}(q), dimensionless. AP = sum_{k=1}^N P(k) \Delta r(k). Units dimensionless. Assumptions: one query per identity? Source not fully defines but standard. Need cite? The source says use mAP and CMC [PAGE 10]. We can say "as used by the source for evaluation". Fine.

Need maybe define CMC: CMC(n)=P(correct identity in top n). Source says Rank-n accuracy. Units probability. Could formalize.

Need include source page quotes. We can quote:
- [PAGE 1]: "we propose a runner re-identification system that directly processes single-view video to address the open-world setting."
- [PAGE 2]: "closed-world setting" and "open-world setting".
- [PAGE 3] Figure 1? maybe.
- [PAGE 6]: ByteTrack unique ID each scene; "the tracking algorithm considers the same person reappearing on the screen as a different person."
- [PAGE 7]: "running motion for two steps".
- [PAGE 8]: Eq (1), color histogram 24 dimensional, similarity combination.
- [PAGE 9]: lap time filtering, th 3600 frames 60s, dataset 4K 60fps, 10m capture.
- [PAGE 10]: metrics, implementation, data counts.
- [PAGE 11]: λ=0.85, GRU latent 128, MSE, Adam lr.
- [PAGE 12]: F1 99.8, shoe mAP 86.2, filtering.
- [PAGE 13]: Table results, nighttime issues.
- [PAGE 14]: Figure 7 AP values.
- [PAGE 15]: conclusion, dynamic features effective daytime, HHCL more effective hard samples.

Need maybe mention "SI/information/probability units". For frames and seconds: SI second, frame count dimensionless, Hz = s^-1. Latent dimension is bits? No, dimension of real vector. Could mention information units only if coding: cosine dimensionless, probabilities unitless (bits if log2). BCE/MSE not explicitly units; BCE with natural log nats if log_e, base-2 bits. But paper doesn't specify. We can say "assuming standard implementations using natural log, units nats per sample; if base 2, bits per sample." But is that too invented? It's formal. Need maybe include "source does not state log base" [PAGE 10]. Good.

Need ensure no "betting" terms like odds. Avoid "odds". Use probabilities.

Let's draft final. Need count words. We can make each section lengthy. THINK_TRACE >=400. Let's estimate.

THINK_TRACE: maybe 600 words.
SOURCE_OPERATORS... 1000 words.
RETROCAUSAL... 500.
RECURSIVE... 500.
CROSS... 500.
RLVR... 600. Total >3500. Fine but maybe too long? User requested >=1000. We can be thorough. Need ensure no contradictions.

Potential issue: They ask "GSE + GSI Frontier Reasoning Foundry" maybe expect exact sections. Use XML only. Good.

Need ensure "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll cite many.

Let's write.

Need check equations LaTeX syntax. Use \[ ... \]. For combined similarity, source has typo l,c. We can correct: Let g=GRU AE, c=color. But quote exact: "simcomb = λsimg + (1 −λ)simc,". Need include verbatim. Could say source notation uses `l, c denote GRU AE and color`? Actually PAGE 8: "where l, c denote GRU AE and color" (maybe typo). We'll quote.

Equation for color histogram: h ∈ R^{24}, h = [h_R^upper, h_G^upper, h_B^upper]? Actually 3 channels × 8 bins = 24. Source says lower body similar, only upper body color features used for runner images [PAGE 8]. For shoes, histograms too. Formal.

Equation for lap filter: 
\tilde S_{ij}= \begin{cases}0, & |S_i-S_q|>th \\ sim_{ij}, & otherwise\end{cases}
Need units.

GRU AE: Encoder Eθ, Decoder Dφ. z=Eθ(X_{1:T}) ∈ R^{128}; xhat_t = Dφ(z, X_{t+1:T},...,?) Source says decoder receives latent and inverse-ordered sequential images and outputs reconstructed image one frame before each input image [PAGE 8]. Formal:
\hat{x}_{t-1}=D_\phi(z, X_{t:T}^{rev}), t=2,...,T. Need maybe. Loss MSE. Assumptions: sequence length two steps? Source: two steps [PAGE 6,7]. But figure t1...tn. We can state sequence length T corresponds to two steps after period unification [PAGE 7].

Evaluation:
\mathrm{CMC}(n)=\Pr(\hat{y}_q \in \text{Top-}n(X_q) = y_q). Units probability. 
\mathrm{mAP}=\frac{1}{|Q|}\sum_{q} \mathrm{AP}_q, dimensionless.

Need breakdown regimes:
- λ=0: only color; λ=1: only GRU. Source chose 0.85 [PAGE 11]. If color unreliable, λ=0.85 may still overfit color; if dynamic unreliable, λ high fails.
- th too low/high.
- shoe detector confidence threshold? Source stores highest confidence [PAGE 7]. If unclear shoes [PAGE 12], shoe feature noisy.
- nighttime: image quality poor, motion blur, segmentation accuracy decreased [PAGE 13].

Need no toy equations: all grounded.

Let's draft final now. Ensure word count. Use no markdown bullets? XML sections can contain paragraphs and equations. Fine.

Need maybe include verbatim quotes with quotation marks and page marker. Good.

Let's compose final carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The source problem is not merely “person re-identification”; it is a constrained open-world video-reasoning problem in which identity must be recovered from raw, unlabeled single-view practice video after repeated framed-out events. The source states: “we propose a runner re-identification system that directly processes single-view video to address the open-world setting” [PAGE 1]. The key gray zone is that the system cannot rely on stable closed-world labels, bib numbers, or pre-existing gallery identities. Instead, it must reconstruct identity continuity from appearance, local equipment cues, and motion dynamics.

A multi-hop derivation begins with the physical capture geometry. The video is captured from the side, at “4K and 60 fps,” with runners passing through “a section of approximately 10 meters” [PAGE 9]. This creates a temporal sampling operator: frame index maps to physical time through a fixed sampling rate. At 60 Hz, one frame corresponds to 16.666... ms. Because runners exit and re-enter, the tracking algorithm cannot maintain a single global identity across disappearances. The source explicitly says ByteTrack assigns IDs per running scene and that “the tracking algorithm considers the same person reappearing on the screen as a different person” [PAGE 6]. Therefore, the re-identification stage must operate as a cross-scene retrieval operator, not as a within-scene tracking smoother.

The next hop is feature construction. The system uses three broad feature families: global appearance, local shoe appearance, and temporal running dynamics. Global appearance is represented by unsupervised deep features, especially GRU autoencoder latent variables and HHCL-trained features. The source says the GRU AE encoder outputs “a 128-dimensional latent variable” [PAGE 8]. Local shoe features are motivated by the weakness of clothing color alone: “it is difficult to identify different runners wearing similar color clothes using only whole-body representative images” [PAGE 7]. Dynamic features are motivated by the assumption that running form is individual-specific: “the dynamic features of the runners (i.e., their running form) are unique to each runner” [PAGE 15]. The gray zone is that these assumptions are conditional on image quality. The source later admits that nighttime motion blur reduces segmentation accuracy and that “dynamic features are not well extracted” [PAGE 13]. Thus the dynamic-feature operator has a domain validity regime: clear daytime imagery, stable silhouette segmentation, and sufficiently periodic running motion.

A third gray zone is the similarity algebra. The source combines GRU AE similarity and color similarity using Equation (1): “simcomb = λsimg + (1 −λ)simc,” [PAGE 8]. This is a convex combination if λ is constrained to the unit interval. The source selects λ = 0.85 by maximizing mAP [PAGE 11]. That choice is empirical, not universal. If color features become unreliable, as in nighttime or low-contrast clothing, a large λ may be beneficial; if dynamic features fail due to motion blur, the same λ may be harmful. The system’s performance table shows this tension: “GRU AE w/o color hist.” drops from daytime mAP 0.852 to nighttime mAP 0.636 [PAGE 13], while “HHCL w/ shoes” remains more stable, with nighttime mAP 0.915 [PAGE 13]. This suggests that the most robust operator is not pure dynamics but a hard-sample-guided global/local hybrid.

A fourth gray zone is temporal filtering. The source introduces lap-time filtering as domain knowledge: if the start-frame distance between candidate scene and query exceeds a threshold, similarity is set to zero. Formally, the source writes: “|Sci −Sq| > th,” [PAGE 9]. It sets “th to 3,600 frames (60 s)” [PAGE 9]. This is a hard temporal prior. It helps suppress implausible identities but can create false negatives if the true runner reappears sooner than the threshold. The threshold is therefore a precision-recall control surface: too small and it vetoes true re-entries; too large and it allows implausible long-delay associations to contaminate ranking.

Finally, the evaluation gray zone is metric sensitivity. The source uses mAP and CMC rank-n accuracy [PAGE 10]. mAP rewards correct identities being ranked high across the full gallery, while Rank-1 measures top-hit identity. The source’s example AP values show that shoe inclusion can improve ranking: “Color hist. w/o shoes” has AP = 0.430, “Color hist. w/ shoes” has AP = 0.677, and “HHCL w/ shoes” reaches AP = 1.000 in the displayed example [PAGE 14]. But AP is query-specific; aggregate mAP can hide unstable failure modes, especially when many runners wear similar shoes or clothing. The strongest verified conclusion is not that one feature universally wins, but that identity disambiguation improves when global appearance, local equipment features, and temporal constraints are jointly calibrated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s pipeline can be formalized as a sequence of measurable operators over video frames. Let frame index be \(k \in \mathbb{Z}\), and let the frame rate be \(f = 60\ \mathrm{Hz}\), as stated: “The videos were captured at 4K and 60 fps” [PAGE 9]. Physical time is

\[
t_k = \frac{k}{f},
\]

with unit \(\mathrm{s}\), \(f\) in \(\mathrm{s}^{-1}\), and \(k\) dimensionless.

**1. Person segmentation and cropping.** The source uses YOLOv8 instance segmentation to remove background because “the background color of the cropped image is undesired to identify runners” [PAGE 6]. Let \(I_k\) be frame \(k\), and let \(P_{i,k}\) be the cropped person image for detected instance \(i\). The operator is

\[
I_k \mapsto \{P_{i,k}\}_{i=1}^{N_k},
\]

where \(N_k\) is the number of segmented persons in frame \(k\). Units: pixel-intensity arrays; no physical SI unit except pixel counts and spatial dimensions.

**2. Runner classification.** A fine-tuned EfficientNet classifier maps cropped persons to a runner/non-runner posterior. The source uses binary cross entropy: “We trained the model with a binary cross entropy loss function” [PAGE 10]. For target \(y \in \{0,1\}\) and predicted probability \(p\), a standard formalization is

\[
\mathcal{L}_{\mathrm{BCE}} = -\left[y \log p + (1-y)\log(1-p)\right].
\]

If natural logarithm is used, units are nats per sample; if base-2 logarithm is used, units are bits per sample. The source does not specify the logarithm base. The reported classifier performance is “F1-score was 99.8%” [PAGE 12], which is dimensionless.

**3. Tracking.** ByteTrack assigns scene-local IDs. The source says: “in this step, the same runner has a different ID for each running scene” [PAGE 6]. Let scene \(c_i\) be a continuous tracklet interval, and let \(S_{c_i}\) be its start frame. The source writes: “S denotes the start frame of the running scene” [PAGE 9]. Units: frames, dimensionless count; equivalently seconds via \(S/f\).

**4. Shoe detection.** A fine-tuned YOLOv8 detects shoes. The source reports: “the mAP50-95 was 86.2%” [PAGE 12]. The detector stores the highest-confidence shoe per runner ID: “When multiple shoes are detected, the one with the highest confidence score is stored with each runner ID” [PAGE 7]. Let \(B_{i,k}^{\mathrm{shoe}}\) be the selected shoe bounding box for runner \(i\) at frame \(k\). If no shoe passes confidence, the local shoe operator is undefined, creating a missing-data regime.

**5. Color histograms.** The source states: “The histograms of each channel were flattened to obtain 24 dimensional (= 3 channels ×8 bins) color features” [PAGE 8]. Let

\[
h_i \in \mathbb{R}^{24}
\]

be the flattened RGB histogram vector for image or body part \(i\). Components are dimensionless bin counts or normalized frequencies. The source also says: “we ignore the black pixel (background color) when calculating the histograms” [PAGE 8]. Color similarity is defined by histogram correlation:

\[
\mathrm{sim}_{c}(i,j) = \mathrm{corr}(h_i,h_j),
\]

which is dimensionless and typically lies in \([-1,1]\) for zero-mean normalized histograms.

For runner upper-body color and shoe color, the source specifies: “90% of the color similarity of the upper body image and 10% of the color similarity of the shoe image are summed” [PAGE 8]. Therefore,

\[
\mathrm{sim}_{c}^{\mathrm{total}}(i,j)
=
0.9\,\mathrm{sim}_{c}^{\mathrm{upper}}(i,j)
+
0.1\,\mathrm{sim}_{c}^{\mathrm{shoe}}(i,j).
\]

Units: dimensionless similarity. Breakdown regime: if shoes are unclear, the source notes detection of “unclear shoes which is difficult to use to compare the color features for re-identification” [PAGE 12].

**6. GRU autoencoder dynamic features.** The source describes the GRU AE as taking sequential running-motion images and outputting a latent variable: “The encoder receives sequential images of running motion and outputs a 128-dimensional latent variable” [PAGE 8]. Let the input sequence be

\[
X_{1:T} = (x_1, x_2, \ldots, x_T),
\]

where each \(x_t\) is an image tensor, and \(T\) corresponds to the unified running-motion sequence. The source says it stores “continuous images of each runner’s motion for two steps” [PAGE 6] and uses period correlation to unify running motion periods [PAGE 7]. The encoder operator is

\[
z = E_{\theta}(X_{1:T}) \in \mathbb{R}^{128}.
\]

The latent vector \(z\) is dimensionless in the sense of being a real-valued embedding; its informational meaning depends on learned manifold geometry. The decoder reconstructs prior-frame structure:

\[
\hat{x}_{t-1} = D_{\phi}\left(z, X_{t:T}^{\mathrm{rev}}\right),
\]

where \(X_{t:T}^{\mathrm{rev}}\) denotes inverse-ordered sequence input, consistent with the source: “The decoder receives the latent variables and the time series images in reverse order and reconstructs the image one frame before the input image” [PAGE 8]. The training loss is mean square error: “We trained the model with mean square error as the loss function” [PAGE 11]. Formally,

\[
\mathcal{L}_{\mathrm{MSE}}
=
\frac{1}{|\Omega|}
\sum_{\omega \in \Omega}
\left(\hat{x}(\omega)-x(\omega)\right)^2,
\]

where \(\Omega\) is the set of pixels or voxels in the reconstruction domain. Units are squared intensity units if intensities are unnormalized, or dimensionless squared normalized intensity if images are normalized. The optimizer is Adam with learning rate \(1 \times 10^{-3}\) [PAGE 11], where learning rate is dimensionless in standard adaptive-gradient normalization.

**7. Similarity combination.** The source’s Equation (1) is:

\[
\mathrm{sim}_{\mathrm{comb}}
=
\lambda\,\mathrm{sim}_{g}
+
(1-\lambda)\,\mathrm{sim}_{c}.
\]

Verbatim source text: “simcomb = λsimg + (1 −λ)simc,” [PAGE 8]. The source says “λ denotes the hyper-parameter” [PAGE 8]. To be a convex combination, assume

\[
\lambda \in [0,1].
\]

Both \(\mathrm{sim}_{g}\) and \(\mathrm{sim}_{c}\) are dimensionless similarity scores. The source chooses \(\lambda = 0.85\) because it gives the highest mAP [PAGE 11]. Singularity regimes:

- If \(\lambda = 1\), only GRU AE similarity matters; color evidence is discarded.
- If \(\lambda = 0\), only color similarity matters; dynamic evidence is discarded.
- If \(\mathrm{sim}_{g}\) is undefined due to failed segmentation or motion blur, the convex combination becomes invalid unless missingness is handled.

**8. Lap-time filtering.** The source states: “the similarity with the features extracted from running scenes that satisfy the conditions of the following equation is calculated as zero” [PAGE 9]. The equation is:

\[
|S_{c_i} - S_q| > th,
\]

where \(c_i\) is a candidate running scene, \(q\) is the query, \(S\) is the start frame, and \(th\) is a threshold [PAGE 9]. The source sets “th to 3,600 frames (60 s)” [PAGE 9]. A formal filtered similarity operator is:

\[
\widetilde{\mathrm{sim}}(q,i)
=
\begin{cases}
0, & |S_{c_i} - S_q| > th,\\
\mathrm{sim}_{\mathrm{comb}}(q,i), & |S_{c_i} - S_q| \le th.
\end{cases}
\]

Units: frames if using \(S\); seconds if converted by \(S/f\). At \(f = 60\ \mathrm{Hz}\), \(3600\) frames equals \(60\ \mathrm{s}\). Breakdown regime: if true reappearance occurs earlier than the assumed lap interval, the filter vetoes a valid identity; if the true reappearance interval is much longer than \(th\), the filter fails to suppress implausible long-range associations.

**9. Evaluation operators.** The source uses “mean average precision (mAP) and Cumulative Matching Characteristic (CMC) rank-n accuracy” [PAGE 10]. Let query set be \(Q\). A formal mAP definition is:

\[
\mathrm{mAP}
=
\frac{1}{|Q|}
\sum_{q \in Q}
\mathrm{AP}(q),
\]

where \(\mathrm{AP}(q)\) is average precision for query \(q\). mAP is dimensionless. CMC rank-\(n\) accuracy can be written as:

\[
\mathrm{CMC}(n)
=
\Pr\left(\hat{y}_q \in \mathrm{Top}_n(q)\right),
\]

where \(\hat{y}_q\) is the retrieved identity and \(\mathrm{Top}_n(q)\) is the set of top-\(n\) retrieved identities. This is a probability, dimensionless. The source uses \(n = 1, 5\): “we use n = 1, 5 in the rank-n accuracy” [PAGE 10].

**10. Reported performance regime.** The source reports “HHCL w/ shoes” as strongest aggregate method: daytime mAP 0.944, Rank-1 0.985; nighttime mAP 0.915, Rank-1 0.974 [PAGE 13]. It also reports “GRU AE w/o color hist.” daytime mAP 0.852 but nighttime mAP 0.636 [PAGE 13]. These are empirical probabilities/scores, not physical SI units.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this paper is a convergence of sports video analytics, person re-identification, multi-object tracking, and unsupervised representation learning. The source distinguishes two epistemic regimes: closed-world re-identification, where labeled datasets train a feature extractor, and open-world re-identification, where raw video is processed directly without identity labels. It says: “re-identification in the closed-world setting … focuses on improving the performance of the feature extractor using the prepared image dataset” [PAGE 2], while the open-world setting “can directly process raw video and does not require labeled data for feature extraction” [PAGE 3]. This distinction is historically important because earlier sports re-identification often depended on jersey numbers, bib numbers, or team-color cues. The source notes prior work using “jersey color and/or number” [PAGE 2] and “bib number” [PAGE 5]. Those cues are unavailable in daily practice video, which is the paper’s target domain.

The tracking lineage comes from ByteTrack, which the source uses to assign IDs within running scenes [PAGE 6]. However, ByteTrack alone is insufficient because it does not solve identity persistence across framed-out events. The source explicitly states that “the tracking algorithm is unable to identify runners once they disappear from the screen” [PAGE 3]. This creates the need for a re-identification layer that compares running scenes as retrieval units rather than as continuous trajectories.

The representation-learning lineage includes sequence-to-sequence autoencoders, GRU-based temporal encoding, contrastive unsupervised re-identification, and hard-sample mining. The GRU AE is described as referring to “the model structure of the sequence to sequence autoencoder” [PAGE 7]. The use of GRUs is historically linked to recurrent sequence modeling before transformer dominance. The paper’s contribution is not a new GRU variant, but the application of a recurrent autoencoder to running-motion sequences as a dynamic identity cue. It says: “The GRU AE is expected to extract the unique dynamic features of each runner’s movements by unifying the period of the running movements” [PAGE 7].

The contrastive-learning lineage appears through HHCL, SpCL, ICE, and PPLR. The source uses HHCL as a high-performance unsupervised re-identification baseline: “HHCL … is a high-performance unsupervised re-identification method that efficiently learns hard samples” [PAGE 7]. The paper’s novel extension is to train HHCL not only on runner images but also on shoe images, then combine global and local features. This is a direct response to the failure mode where clothing color is not discriminative.

Multi-week traps arise when researchers or operators inherit assumptions from closed-world sports analytics. Trap 1: assuming a stable gallery exists. In practice video, no labeled gallery is available; the source says “we cannot use labeled dataset and have to process video directly” [PAGE 1]. Trap 2: assuming track IDs survive occlusion. ByteTrack IDs are scene-local, not globally persistent. Trap 3: assuming bib numbers are present. The source says the dataset “does not contain features that can easily identify runners, such as bib numbers used in races” [PAGE 10]. Trap 4: assuming appearance features are sufficient. The source shows that clothing-only color can fail: “Color hist. w/o shoes” has lower performance than shoe-inclusive variants [PAGE 13]. Trap 5: assuming dynamic features are robust under all lighting. The source admits nighttime failure: “the performance of ‘GRU AE w/o hist.’ is significantly lower” [PAGE 13].

The most important retro-causal lesson is that the paper’s architecture is shaped by negative results. The failure of clothing-only features leads to shoe detection. The failure of tracking across disappearances leads to cross-scene re-identification. The failure of dynamic features at night leads to the conclusion that “our proposed method may be unstable to changes in the video recording environment” [PAGE 13]. The final hierarchy is therefore not a simple feature stack; it is a domain-specific survival strategy for practice video: detect, classify, track locally, extract local equipment cues, extract global hard-sample features, and impose temporal constraints.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer concerns how an operator or autonomous system should reason about failure habits under time pressure, ambiguity, and domain shift. In a running-practice setting, the “crisis habit” is to revert to the easiest identity cue: clothing color, bib number, jersey number, or a single track ID. These habits are regressive because they worked in closed-world race videos or broadcast sports analytics, but they fail in open-world practice video where many runners wear similar clothing, no bib numbers are visible, and tracking breaks after framed-out events. The source identifies the core difficulty: “our task is challenging in terms of re-identification from raw videos in the open-world setting without bib numbers” [PAGE 5].

The first crisis habit is “clothing color is identity.” The counter-trap is to treat color as one evidence channel among several. The source’s example shows that upper-body color alone can rank different runners highly: “Color hist. w/o shoes” cannot identify runners wearing clothing similar to the query [PAGE 14]. Adding shoes improves the example AP from 0.430 to 0.677 [PAGE 14]. The recursive inference is: if two runners share clothing, the system should increase reliance on local features, especially shoes, and on hard-sample global features rather than simple color histograms.

The second crisis habit is “track ID is identity.” The counter-trap is to recognize that ByteTrack IDs are scene-local. The source states that “different IDs are assigned to the same person who reappears on the screen” [PAGE 7]. Therefore, an operator must not treat ID equality across scenes as identity truth. Instead, identity must be inferred from similarity between scene-level feature representations. The recursive model must distinguish two levels: intra-scene continuity, handled by tracking, and inter-scene identity, handled by re-identification.

The third crisis habit is “dynamic running form is always reliable.” This is counter-trapped by nighttime and motion blur. The source says nighttime video has “poor” image quality, motion blur appears, and segmentation accuracy decreases [PAGE 13]. Under those conditions, the GRU AE latent vector may encode noise rather than stable gait. The system should therefore reduce trust in dynamic-only features when visual quality is low and shift toward robust local/global hybrid features such as HHCL with shoes. The source’s nighttime results support this: “HHCL w/ shoes” achieves nighttime mAP 0.915, while “GRU AE w/o color hist.” falls to 0.636 [PAGE 13].

The fourth crisis habit is “time filtering is harmless.” The lap-time filter is a clock-based prior: “|Sci −Sq| > th” sets similarity to zero [PAGE 9]. The recursive danger is that the clock can encode an incorrect assumption about lap duration. If the threshold is 3,600 frames, equivalent to 60 seconds at 60 fps, then any true reappearance with start-frame separation greater than 60 seconds is forcibly vetoed. Conversely, if runners reappear sooner than the filter assumes, the filter may suppress valid matches. The operator must therefore estimate the actual lap interval from video metadata or prior knowledge, not blindly inherit the 60-second threshold.

The recursive counter-strategy is a belief-state hierarchy:

1. If segmentation confidence is high and running motion is periodic, dynamic features are admissible.
2. If clothing color is ambiguous, shoe and global hard-sample features receive higher weight.
3. If track IDs conflict across scenes, scene-level similarity overrides track ID continuity.
4. If temporal separation violates the lap model, similarity is vetoed only after verifying the lap-time assumption.
5. If lighting or blur is poor, dynamic-only representations are down-weighted.

This is not a betting heuristic; it is a formal evidence-adjudication policy. The source’s best empirical result supports this policy: “HHCL w/ shoes” outperformed all proposed and comparative methods while showing stable daytime and nighttime results [PAGE 13]. The recursive lesson is that the system should not trust a single habit under crisis. It should rotate among appearance, local equipment, dynamics, and temporal constraints according to verified observability conditions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto layer adjudicates whether physical, biomechanical, or environmental conditions invalidate a proposed identity inference. The source provides several explicit veto conditions.

**Physical veto 1: Framed-out disappearance.** A runner may leave the camera field and later re-enter. The source states: “the tracking algorithm is unable to identify runners once they disappear from the screen” [PAGE 3]. Therefore, any claim of continuous identity based only on a single ByteTrack ID across disappearances is invalid. The valid inference must use re-identification similarity across separate running scenes.

**Physical veto 2: Background contamination.** The source says background color is undesired and therefore uses instance segmentation rather than simple detection: “we use instance segmentation instead of object detection” [PAGE 6]. If segmentation fails, the cropped image may include track surface, lane lines, or other runners. In that case, color histograms and deep appearance features become contaminated. The source notes that “general background removal algorithm did not work well because the shapes of the runners were unclear due to motion blur” [PAGE 6]. Thus, when motion blur makes silhouette shape unreliable, appearance features receive a validity veto unless segmentation confidence is independently verified.

**Physical veto 3: Low-light nighttime degradation.** The source reports that nighttime video has poor image quality: “Since the image quality of nighttime video is poor, motion blur appears in the images, and the segmentation accuracy of the runner image extraction is decreased” [PAGE 13]. This directly weakens dynamic feature extraction. The source concludes: “dynamic features are not well extracted” [PAGE 13]. Therefore, a nighttime inference based primarily on GRU AE latent similarity is physically suspect unless accompanied by robust color or shoe evidence.

**Biomechanical veto 1: Running-form uniqueness is conditional.** The source argues that running form can be unique: “the dynamic features of the runners (i.e., their running form) are unique to each runner” [PAGE 15]. However, this is not an unconditional physical law. It holds only when the motion sequence is observable, periodic, and not obscured. The source requires unification of running motion periods: “we used the correlation between the running motion periods and the width of the runner images to unify the running motion periods” [PAGE 7]. If the period cannot be estimated, the dynamic feature operator lacks a valid temporal normalization. A biomechanical veto applies: if two runners have similar gait patterns, similar shoes, and similar clothing, dynamic features alone cannot guarantee identity.

**Biomechanical veto 2: Shoe feature reliability.** Shoes are local discriminative cues, but only if detected clearly. The source says: “the system detected unclear shoes which is difficult to use to compare the color features for re-identification” [PAGE 12]. If the shoe detector returns a low-quality or partial shoe box, shoe color similarity should be down-weighted or vetoed. The source also notes that multiple shoe detections may occur and only the highest-confidence one is stored [PAGE 7]. This creates a failure mode: the selected shoe may be partially visible, occluded, or color-distorted by lighting.

**Environmental veto: Day/night domain shift.** The source trains separate GRU AE models for daytime and nighttime because “the runner in the video looks very different during daytime and nighttime” [PAGE 11]. This is a domain-shift veto: a feature extractor trained on daytime imagery should not be assumed valid for nighttime imagery without separate validation. The empirical table confirms this: GRU AE w/o color hist. drops from daytime mAP 0.852 to nighttime mAP 0.636 [PAGE 13]. Therefore, any cross-domain transfer claim must be rejected unless the feature model is explicitly adapted or validated for the target lighting condition.

**Formal veto proof sketch.** Let \(Y\) be runner identity, \(X\) be observed feature evidence, and \(V\) be a validity indicator for segmentation, lighting, shoe detection, or temporal consistency. If \(V=0\), the conditional distribution \(P(Y \mid X, V=0)\) is not supported by the training assumptions. The source provides an empirical instance: nighttime poor image quality reduces dynamic feature reliability [PAGE 13]. Therefore, an inference that uses only \(X_{\mathrm{dynamic}}\) when \(V_{\mathrm{night}}=0\) is not admissible. The robust admissible inference uses multiple conditionally valid evidence channels, especially global/local hybrid features: “HHCL w/ shoes” outperformed all methods and showed stable daytime/nighttime results [PAGE 13].

Thus, the cross-layer adjudication is: reject pure tracking continuity across framed-out events; reject pure dynamic features under nighttime blur; reject shoe-only features when shoe visibility is unclear; reject color-only features when clothing is similar; and accept combined global/local hard-sample evidence when segmentation and shoe detection are sufficiently reliable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style counterfactual veto scenarios. Each scenario specifies a veto condition, a prediction, and source-grounded verification.

**Scenario 1: Nighttime dynamic-only veto.**
Condition: The video is nighttime, motion blur is present, and segmentation accuracy is degraded.
Veto rule: Do not accept identity decisions based primarily on GRU AE latent similarity.
Prediction: A dynamic-only feature extractor should perform worse at night than in daytime.
Verification: The source reports “GRU AE w/o color hist.” has daytime mAP 0.852 and nighttime mAP 0.636 [PAGE 13]. It also states that nighttime image quality is poor and “dynamic features are not well extracted” [PAGE 13]. Therefore, the counterfactual veto is verified: if a system outputs high confidence using only nighttime GRU AE dynamics, the RLVR layer should veto or reduce its confidence.

**Scenario 2: Shoe-color ambiguity veto.**
Condition: Runners wear similar clothing and similar shoes, and only color histograms are used.
Veto rule: Do not accept identity based solely on clothing color or shoe color when global shape/motion features are available.
Prediction: Color-only retrieval will confuse different runners; adding local shoe features improves but may still fail when shoes are similar; hard-sample global/local hybrid features should outperform color-only ranking.
Verification: The source’s example shows “Color hist. w/o shoes” has AP = 0.430, while “Color hist. w/ shoes” improves to AP = 0.677, but “HHCL w/ shoes” reaches AP = 1.000 [PAGE 14]. The source also says shoes help when clothing is similar [PAGE 7], but shoe color alone can still misrank “misidentified runners wearing shoes similar to the query” [PAGE 13]. Therefore, the veto applies to color-only or shoe-color-only decisions when harder global/local features are available.

**Scenario 3: Lap-time threshold false-veto.**
Condition: The system uses the source’s lap-time filter with threshold \(th = 3600\) frames, equivalent to 60 seconds at 60 fps, but the actual runner reappearance interval is shorter than 60 seconds.
Veto rule: Do not apply the lap-time zeroing rule unless the lap interval prior is verified.
Prediction: If the true reappearance interval is less than \(th\), the filter will set valid similarities to zero, reducing recall and producing false identity breaks. If the interval is greater than \(th\) but the system assumes a smaller threshold, the filter may fail to suppress implausible matches.
Verification: The source defines the filter as “|Sci −Sq| > th” and sets “th to 3,600 frames (60 s)” [PAGE 9]. This is a hard temporal operator. If a runner reappears after 45 seconds, then \(|S_{c_i}-S_q| = 2700\) frames at 60 fps, which is less than 3600, so the filter would not zero it. If the runner reappears after 75 seconds, \(|S_{c_i}-S_q| = 4500\) frames, which exceeds 3600, and the filter would zero the true match. Therefore, an RLVR veto must check the actual lap-time distribution before applying the filter. The prediction is verifiable from video timestamps: measure runner start-frame separations and compare them to \(th\).

These three veto scenarios establish a verifiable decision policy: reject dynamic-only inference under nighttime degradation, reject color-only inference under clothing/shoe ambiguity, and reject temporal filtering without verified lap-time calibration. The source supports all three through explicit experimental and procedural statements.
</RLVR_COUNTERFACTUAL_VETOES>
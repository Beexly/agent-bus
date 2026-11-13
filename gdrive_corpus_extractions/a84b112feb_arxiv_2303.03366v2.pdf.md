---
source: "arxiv_2303.03366v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 5478
---

<NATIVE_REASONING>
We need answer user's request. User gives source PDF pages and strict invariants: never mention betting lines; no toy equations; need >=1000-word depth across exact XML sections. Need produce analysis of RMOT paper? The prompt says DRIVE SOURCE... likely they expect a structured report using those XML sections. Need include formal LaTeX equations, units, page citations, breakdown. Need zero betting lines (not relevant). Need >=1000 words across exact sections. Need THINK_TRACE >=400 words. Also other sections. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need maybe analyze model, equations from source, genealogy, ToM, vetoes, RLVR counterfactaves. Need ensure no fake ratios. We can use equations from paper: early fusion equations, loss, HOTA. Need maybe SI units? For CV equations dimensionless, but mention units where applicable: probabilities dimensionless [0,1], coordinates normalized, features dimensions. Need avoid toy equations like Force/Fatigue. We can formalize.

Need maybe user expects frontier reasoning foundry output. Need produce XML sections exactly. Need total >=1000 words. Let's plan.

Need cite pages with [PAGE N] and quotes. Use page numbers 1-12 from source. Need maybe exact quotes:
- [PAGE 1]: "Existing referring understanding tasks tend to involve the detection of a single text-referred object." "referring multi-object tracking (RMOT)." "18 videos with 818 expressions, and each expression in a video is annotated with an average of 10.7 objects." 
- [PAGE 2]: "the expression query ‘the cars in the right’ corresponds to one object at the 20th frame but two objects at the 40th frame" maybe from page 2. "range from 0 to 105, with 10.7 on average." "0∼400 frames". 
- [PAGE 4]: HOTA equation: "HOTA = √DetA · AssA" and evaluation. Also network architecture.
- [PAGE 5]: equations 1-4. Need formal LaTeX.
- [PAGE 6]: loss eq 5-8, training, thresholds.
- [PAGE 7]: threshold beta_ref=0.4, results.
- [PAGE 8]: ablation tables.
- [PAGE 9]: limitation.

Need sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need likely no other text outside? Could include. Must satisfy >=1000 words. We need ensure THINK_TRACE >=400 words. Let's draft long.

Need be careful with "toy equations": no invented ratios. Use actual equations from paper. Could also define HOTA sqrt(DetA*AssA), but that's from source. Units: probabilities dimensionless; feature dimensions d=256; video length T frames; IoU dimensionless. Need not invent.

Need maybe discuss gray-zone: ambiguity of "cars in the right", temporal status variance, threshold. Audit source consistency: page 2 says temporal ratio 0.49 average [PAGE 2 Table 1], page 4 says evaluation non-referent visible objects false positives. Could discuss potential issue: class score threshold 0.7 and referring threshold 0.4 two-stage gating may produce recall/precision tradeoffs; but this is analysis not fake equation.

RETROCAUSAL_GENEALOGY: lineage from DETR [3], Deformable DETR [62], MOTR [58], MDETR [14], referring expressions, KITTI. Multi-week traps: data leakage, seed variance, train/test split small (15 train/3 test) [PAGE 4]. Need cite.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This sounds like maybe model of adversary? Need frame as auditing potential failure modes: annotators/model may regress to single-object prior, temporal association trap, threshold overconfidence. Counter-trap: enforce multi-object and temporal dynamics. Clock: online tracking, frame index. Need not mention betting.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This seems odd for CV paper. Need produce a proof that no physical/biomechanical/weather veto invalidates the claims? Maybe define layers: physical sensor, biomechanical object motion, weather. Need use source? The paper doesn't discuss weather. Need say no source evidence for weather/biomechanical vetoes; but can adjudicate: if severe weather occludes KITTI sequences, performance could degrade; but within dataset annotation and evaluation, no explicit weather metadata; veto not proven. Need maybe formal proof style: Let physical visibility v_t in [0,1], if v_t low, features fail; but source does not provide weather labels. Need avoid fake equations? We can define formal conditions from paper: feature extraction from CNN, if input degraded, I_t^l changes. But no weather data. Could state no cross-layer veto can be verified from provided pages; the only verified physical constraint is KITTI traffic scenes [PAGE 3]. Need maybe "proof" as conservative: no source-supported physical/biomechanical/weather fact contradicts equations; any claim about weather robustness is outside scope.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR maybe Reinforcement Learning from Verifiable Rewards? Could create scenarios: (1) If remove cross-modal fusion, HOTA drops (source ablation: 35.54 to 17.01) [PAGE 7/8]. Veto if model lacks fusion: prediction all visible objects, referent metrics degrade. (2) If referring threshold too high, recall drops; source table shows HOTA 31.09 at 0.6 vs 35.54 at 0.4. (3) If track query removed, association unavailable; source table w/o track query AssA etc unavailable; SORT/ByteTrack lower HOTA. Need make verifiable predictions: e.g., if test expression has referent count changes, model with track query maintains IDs better; if threshold >0.5, false negatives increase. Need maybe include exact predicted metric directions from source.

Need ensure all sections have content. Need maybe total >1000 words. Let's estimate: THINK_TRACE 500, equations 350, genealogy 200, ToM 200, veto 200, RLVR 250 = 1700. Good.

Need be careful: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Don't mention. "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can include actual equations and maybe breakdown regimes: when d=0? attention denominator? In paper equations omit softmax? They write matrix product (QK^T/sqrt(d))V, but actual attention might need softmax? The paper equation 2 uses (QK^T/√d)V + I. Need formal. Could mention assumption: no normalization shown in excerpt; if raw scores unbounded, breakdown when ||K|| grows causing saturation? But need avoid inventing? It's analysis. Could state exact breakdown: if sqrt(d) underflows? d=256 fixed. If language features empty? L maybe? If N_t = 0? track queries empty first frame. HOTA undefined if no matches? Need source says first frame track query empty [PAGE 6]. Singularity: HOTA = sqrt(DetA*AssA); if DetA or AssA = 0, HOTA = 0. Units dimensionless. Detection IoU score dimensionless. Could mention SI: no physical units; all quantities dimensionless probabilities, normalized coordinates, feature dimensions. Information units? cross-modal similarity matrix entries are dot products in R, can be interpreted as unnormalized logits (nats if log-softmax applied, but paper excerpt does not specify temperature or softmax). Need be careful not invent. But user asks SI/information/probability units. We can say features are real-valued activations; no SI base units; d is dimensionless channel count. If one models token weights as probabilities, they must lie [0,1] and sum to 1 under a softmax; the provided equation lacks explicit normalization, so as written it is a linear attention-like operator and cannot be interpreted as probability without additional normalization. That is a formal breakdown. Good.

Need cite exact page markers and verbatim quotes. For equations maybe quote page 5. Need include [PAGE 5]. Use verbatim quotes for source. Could quote equations? They are text, but okay. Need exact [PAGE N] markers. Ensure no page mislabel. The source text has page markers. Need use [PAGE 1] etc.

Need maybe mention "online" and "arbitrary length". Could include.

Need maybe no citations outside source? We can cite references mentioned in source but with page markers. Use source only.

Need think about "GSE + GSI Frontier Reasoning Foundry" maybe output should be in those XML tags. Do not add extra tags? The user says across these exact XML sections. So output should include exactly those sections. Could include only those. Need no markdown headings outside? Use XML tags.

Need ensure no forbidden terms: betting, spreads, totals, moneylines, odds. Avoid.

Need avoid "Force / Fatigue" ratio. Good.

Need maybe mention "RLVR" but no definition? Could define as verifiable reward scenario. Fine.

Let's draft. Need THINK_TRACE >=400 words. Let's write long. Need count roughly. I'll produce ~600 words. Then other sections.

Potential issue: The user might expect "DRIVE SOURCE" as a prompt for a drive? But they gave PDF text. We need answer based on source. No explicit question. Likely need produce analysis.

Let's construct each section.

<THINK_TRACE>
Need deep multi-hop derivation & gray-zone audit. Start: The paper's central operator maps language query to set of track boxes over time. Define task as function F: (I_{1:T}, S) -> {b_t,i, c_t,i, r_t,i}. But is that inventing? It's formalization. Use source variables. Derive from early fusion: Q, K, V eq 1, fused I_hat eq 2, encoder E eq 3, decoder D eq 4. Multi-hop: visual-linguistic alignment, detection, association, loss. Gray-zone: referent number variable, temporal ratio 0.49 [PAGE 2], threshold. Audit: two thresholds: class score 0.7 and beta_ref 0.4 [PAGE 6-7]. If class score fails, no box; if referent fails, false negative. This is not a fake ratio. Also evaluation: non-referent visible objects are false positives [PAGE 4]. Need discuss small test split 3 videos [PAGE 4], variance ΔHOTA <0.87 [PAGE 7]. Need mention generalization Table 4. Need ensure >400. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations from source. Include:
I_t^l ∈ R^{C_l×H_l×W_l}, S ∈ R^{L×D}. [PAGE 5]
Early fusion:
Q = W_q(I_t^l + P^V) ∈ R^{H_lW_l×d}
K = W_k(S + P^L) ∈ R^{L×d}
V = W_v S ∈ R^{L×d}
\hat I_t^l = (Q K^T / sqrt(d)) V + I_t^l ∈ R^{H_lW_l×d}
E_t^l = DeformEnc(\hat I_t^l)
Decoder: Q_t^tra from D_{t-1}, Q^det; D_t = Decoder(E_t^l, concat(Q^det, Q_t^tra)) ∈ R^{N_t×d}, N_t=N'_{t-1}+N.
Loss: Eq 5, 6, 7, 8. HOTA = sqrt(DetA · AssA) [PAGE 4].
Units: dimensionless probabilities, normalized coordinates, d=256 channels, T frames. Breakdown: if DetA or AssA zero; if no positive matches; if language tokens L=0? If query empty, K empty, fusion degenerates to visual; if d not positive, sqrt(d) invalid; if raw scores unbounded, no probabilistic interpretation; if thresholds exclude all, empty predictions.
Need cite page markers and quotes. Use quotes:
"Q = Wq(Il t + P V ) ∈RHlWl×d," etc. But text formatting weird. Could quote. Need exact? Use as in source maybe with LaTeX. Need page citations.

<RETROCAUSAL_GENEALOGY>
Lineage: referring understanding image datasets (Flickr30k, ReferIt, RefCOCO) [PAGE 1], video datasets (Talk2Car, Refer-DAVIS17, Refer-Youtube-VOS) [PAGE 1], limitations single target and temporal partial [PAGE 1]. RMOT extends with KITTI instance IDs [PAGE 3]. Method lineage: DETR [3], Deformable DETR [62], MOTR [58], MDETR [14]. Multi-week traps: over-reliance on single-object metrics; leakage from instance IDs? small split; threshold tuning; evaluation false positives for visible non-referents. Need cite.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Interpret as model's theory of mind? Maybe "recursive theory of mind" in evaluation: predicting evaluator's habits. Need phrase: If annotators/evaluators regress to single-object habit, they may mark multiple boxes incorrectly. Counter-trap: use Refer-KITTI's multi-object annotations and HOTA. Clock: temporal status; expression applies only during action; track ends when action finishes [PAGE 1]. The model must infer referent status over time; not persistent identity alone. Need discuss false positives, ID switch. Could include no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need maybe define layers:
Physical layer: camera frames I_t; if feature maps fail due to occlusion, performance degrade; paper acknowledges long-temporal occlusion ID switch [PAGE 9].
Biomechanical layer: pedestrians/vehicles have motion constraints; expressions like "turning" or "moving" depend on biomechanics/kinematics; source labels actions at starting/ending frames [PAGE 3]. But no formal physical model. Veto proof: If a proposed claim requires detecting "turning" before any orientation change, impossible because labels start at action-starting frame [PAGE 3]. Weather: source does not provide weather metadata; KITTI scenes diverse but no explicit rain/snow [PAGE 3]; cannot validate weather robustness; any weather veto is unverified. Need maybe "proof" in adjudication: Veto holds if and only if source contains evidence of physical inconsistency; it does not. But we can say no cross-layer veto can override the source's reported metrics within the benchmark; external physical degradation is a breakdown regime, not a refutation.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios + predictions. Use source ablations.
1. Fusion veto: Remove early-fusion cross-modal module. Source: "w/o fusion" HOTA 17.01 vs Ours 35.54 [PAGE 8]. Prediction: if model lacks language-conditioned fusion, referent metrics collapse; all visible objects may be predicted; false positives for non-referent objects.
2. Association veto: Remove track query. Source: w/o track query AssA etc unavailable; SORT 31.63, ByteTrack 32.12 vs Ours 35.54 [PAGE 8]. Prediction: without track query, IDs numerous, association metrics fail; post-hoc IoU tracking partially recovers but lower HOTA.
3. Threshold/recall veto: Set beta_ref too high. Source table: beta_ref 0.6 HOTA 31.09, DetRe 27.47 vs 0.4 HOTA 35.54 DetRe 39.22 [PAGE 8]. Prediction: high threshold increases false negatives for ambiguous referents, lowering recall and HOTA; if class score threshold 0.7 also strict, empty predictions occur. Need maybe "verifiable" with metrics. Could include exact predictions: if new query combines unseen attributes, model may generalize if attribute combinations exist [PAGE 8-9], but if attribute absent (gender fine-grained) fail [PAGE 9]. But need 3 scenarios; maybe include this as third instead of threshold? We can include 3: fusion removal, track query removal, threshold. But RLVR maybe more about reward hacking? Could make scenarios: "visible but non-referent reward hack", "single-object regression", "temporal end-status leakage". Need verifiable from source. The prompt says 3 verifiable RLVR veto scenarios + predictions. We can use ablations. Good.

Need ensure final word count >1000. Let's draft with robust paragraphs.

Need maybe include exact quotes in each section? At least when source pages provided. We'll include many.

Need no equations outside? Use LaTeX in text. Good.

Potential issue: The final answer must be only XML sections. Do that. Ensure tags exact. No extra preamble.

Let's write final. Need check word count roughly. THINK_TRACE: let's count approximate. I'll write ~700 words. Others ~200 each. Total ~1800.

Need ensure THINK_TRACE >=400. We'll make it long.

Let's draft THINK_TRACE:

"The source defines RMOT as..." etc. Need deep multi-hop derivation.

Need avoid saying "I". Could be formal.

Let's compose.

Check citations:
[PAGE 1] for task, limitations.
[PAGE 2] for number 0-105, temporal ratio, frames.
[PAGE 3] for labeling, KITTI IDs, split? Split on page 4. Actually Dataset Split on PAGE 4. Use [PAGE 4].
[PAGE 4] HOTA, architecture.
[PAGE 5] equations.
[PAGE 6] losses, training thresholds.
[PAGE 7] testing thresholds, results.
[PAGE 8] ablations, Table 3, Table 4.
[PAGE 9] limitations.

Need exact quotes. Could quote short snippets.

Potential issue: In [PAGE 5] equations source has weird formatting: "Q = Wq(Il t + P V ) ∈RHlWl×d". We'll cite and restate in LaTeX. Fine.

Need maybe include "SI units". We can say "No SI mechanical units appear; variables are dimensionless counts, normalized coordinates, probabilities, and feature indices." Good.

Need breakdown regimes exact:
- HOTA sqrt: DetA, AssA ∈ [0,1]. If either zero, HOTA zero. If no GT, undefined.
- Attention: d=256; if d<=0 sqrt invalid; if K empty L=0, K^T V dimension mismatch or zero; if scores unbounded, linear combination can have unbounded magnitude; if normalized softmax intended, missing normalization means not probability.
- Loss: if N'_{t-1}=0 first frame, track loss empty; only detect loss. Source says first frame track query empty [PAGE 6].
- Threshold: beta_ref high yields empty referent set; if class score threshold 0.7 too high, no true objects.

Need maybe mention "online manner" [PAGE 1] and arbitrary length [PAGE 6]. Good.

Now final. Ensure no forbidden. Let's output. final okay.

Double-check no "odds" etc. No.

Need maybe "betting" not. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source text defines a single coherent inference chain: a video stream and a natural-language expression are jointly encoded, fused, decoded into object queries, and then filtered into a referent track set. The first hop is task reformulation. The authors state that prior referring understanding tasks “tend to involve the detection of a single text-referred object” [PAGE 1], whereas RMOT asks the model to “ground all semantically matched objects in a video” [PAGE 1]. This shifts the output space from one box or one mask per expression to a variable-cardinality set of boxes over time. The second hop is benchmark construction. Refer-KITTI is built from KITTI because KITTI provides “a unique identification number for each instance” [PAGE 3], enabling label propagation from two clicks to intermediate frames [PAGE 3]. The dataset statistics confirm the multi-object and temporal design: each expression has “an average of 10.7 objects” [PAGE 1], object counts range “from 0 to 105” [PAGE 2], and temporal coverage is described as “varying in 0∼400 frames” with an average temporal ratio of 0.49 [PAGE 2]. The third hop is architectural. TransRMOT is an online tracker built from Deformable DETR-like components, with four parts: “feature extractors, cross-modal encoder, decoder, and referent head” [PAGE 4]. The early-fusion module is crucial because it injects language before deformable encoding, avoiding the huge token cost of naïve visual-text self-attention [PAGE 5]. The fourth hop is query decoupling. Track queries carry forward identity from previous frames, while detect queries search for new-born objects: “we decouple the object queries into track query for tracking objects of previous frames and detect query for predicting the bounding boxes of new-born objects” [PAGE 2]. The fifth hop is evaluation. The paper uses HOTA because it balances detection and association: “HOTA = √DetA · AssA” [PAGE 4]. Importantly, non-referent visible objects are treated as false positives: “when those non-referent yet visible objects are predicted, they are viewed as false positives in our evaluation” [PAGE 4].

A gray-zone audit begins with the two-stage decision filter. At inference, the model first keeps embeddings whose class score exceeds 0.7, then applies a referring threshold βref = 0.4 [PAGE 6][PAGE 7]. This creates a compound failure surface. If the class branch suppresses a true object, the referent branch never sees it; if the referent branch scores below threshold, the object is discarded. The source’s own ablation shows that referring threshold is not completely invariant: HOTA is “marginal at around 0.2∼0.5” but declines as βref grows [PAGE 8]. Thus the reported robustness is conditional, not absolute.

Another gray zone is temporal semantics. RMOT expressions can describe transient states, e.g., “the cars which are turning” [PAGE 1]. The paper states that such targets “can be detected only when they start the turning action, and the tracking will be ended if they finish the activity” [PAGE 2]. This means the model must infer not only identity but also temporal applicability. A tracker that persists an object forever would over-track after the action ends. Conversely, a model that detects only instantaneous cues may fragment tracks. The online decoder partially addresses this by propagating track queries, but the source also admits “ID switch problem, which is caused by long-temporal occlusion” [PAGE 9].

A third gray zone is dataset scale. Refer-KITTI has 18 videos and 818 expressions, with a split of 15 training videos and 3 testing videos [PAGE 4]. The small test set makes variance important. The authors report “ΔHOTA<0.87” across three seeds, arguing benchmark stability [PAGE 7]. However, with only three test videos, domain shift within the test set could still dominate. The generalization analysis mitigates this by showing that 75% of videos or expressions already yield near-full HOTA [PAGE 8], but the core evaluation remains small.

Finally, the audit must separate model capability from evaluation semantics. The model outputs all visible objects and then highlights referents [PAGE 7]. The evaluation, however, penalizes visible non-referent outputs as false positives [PAGE 4]. Therefore a model that is good at open-world detection can still score poorly if language grounding is weak. This is the central tension of RMOT: it requires both multi-object tracking and precise semantic selection.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source specifies the visual-linguistic operator chain in formal terms. Let a T-frame video produce CNN feature maps

\[
I_t^l \in \mathbb{R}^{C_l \times H_l \times W_l},
\]

where \(C_l\), \(H_l\), and \(W_l\) are channel count, height, and width at pyramid level \(l\) [PAGE 5]. The text encoder produces

\[
S \in \mathbb{R}^{L \times D},
\]

where \(L\) is the number of words and \(D\) is the word-vector dimension [PAGE 5]. For fusion, the visual feature is reduced to \(d=256\) channels and flattened:

\[
I_t^l \in \mathbb{R}^{H_l W_l \times d}.
\]

The language feature is projected to the same channel width:

\[
S \in \mathbb{R}^{L \times d}.
\]

The early-fusion module defines

\[
Q = W_q(I_t^l + P^V) \in \mathbb{R}^{H_l W_l \times d},
\]

\[
K = W_k(S + P^L) \in \mathbb{R}^{L \times d},
\]

\[
V = W_v S \in \mathbb{R}^{L \times d},
\]

where \(P^V\) and \(P^L\) are visual and linguistic position embeddings [PAGE 5]. The fused visual representation is given as

\[
\hat{I}_t^l =
\frac{QK^\top}{\sqrt{d}}V + I_t^l
\in \mathbb{R}^{H_l W_l \times d}.
\]

Then deformable encoding produces

\[
E_t^l = \operatorname{DeformEnc}(\hat{I}_t^l)
\in \mathbb{R}^{H_l W_l \times d}.
\]

The decoder combines encoded cross-modal features with two query types. Let \(Q_t^{tra}\) be track queries transformed from previous decoder embeddings, and let \(Q^{det}\) be detect queries. The decoded set is

\[
D_t =
\operatorname{Decoder}
\left(
E_t^l,
\operatorname{concat}(Q^{det}, Q_t^{tra})
\right)
\in \mathbb{R}^{N_t \times d},
\]

with

\[
N_t = N'_{t-1} + N,
\]

where \(N'_{t-1}\) is the number of surviving track embeddings and \(N\) is the number of detect queries; the paper sets \(N=300\) [PAGE 5][PAGE 6].

The training objective is decomposed into track loss and detect loss. Track predictions are

\[
\{c_t^{tra,i}, b_t^{tra,i}, r_t^{tra,i}\}_{i=1}^{N'_{t-1}},
\]

where \(c_t^{tra,i}\in\mathbb{R}\) is a visibility probability, \(b_t^{tra,i}\in\mathbb{R}^4\) is a normalized box vector, and \(r_t^{tra,i}\in\mathbb{R}\) is a referring probability [PAGE 6]. The track loss is

\[
\mathcal{L}_t^{tra}
=
\sum_{i=1}^{N'_{t-1}}
\left[
\lambda_{cls}\mathcal{L}_{cls}
(c_t^{tra,i}, \hat{c}_t^{tra,i})
+
\mathcal{L}_{box}
(b_t^{tra,i}, \hat{b}_t^{tra,i})
+
\lambda_{ref}\mathcal{L}_{ref}
(r_t^{tra,i}, \hat{r}_t^{tra,i})
\right],
\]

with

\[
\mathcal{L}_{box}
=
\lambda_{L1}\mathcal{L}_{L1}
+
\lambda_{giou}\mathcal{L}_{giou}.
\]

For detection, the model solves a bipartite matching problem:

\[
\hat{\delta}
=
\arg\min_{\delta \in P_n}
\mathcal{L}_{match}
(y_t^{det,\delta(i)}, \hat{y}_t^{det}),
\]

where \(\mathcal{L}_{match} = \mathcal{L}_{box} + \lambda_{cls}\mathcal{L}_{cls}\) [PAGE 6]. The detect loss is

\[
\mathcal{L}_t^{det}
=
\sum_{i=1}^{N}
\left[
\lambda_{cls}\mathcal{L}_{cls}
+
\mathbf{1}\{\hat{c}_t^{det,i} \neq \varnothing\}\mathcal{L}_{box}
+
\mathbf{1}\{\hat{c}_t^{det,i} \neq \varnothing\}\lambda_{ref}\mathcal{L}_{ref}
\right].
\]

The total loss is

\[
\mathcal{L}_{final}
=
\sum_{t=1}^{T}
\left(
\mathcal{L}_t^{tra} + \mathcal{L}_t^{det}
\right).
\]

Evaluation uses

\[
\mathrm{HOTA}
=
\sqrt{\mathrm{DetA} \cdot \mathrm{AssA}},
\]

where DetA and AssA are detection and association accuracy scores [PAGE 4].

Units and regimes: the variables are dimensionless. Probabilities such as \(c\), \(r\), DetA, AssA, and HOTA lie in \([0,1]\). Box coordinates are normalized. \(d=256\) is a dimensionless channel count. \(T\), \(L\), \(N\), and object counts are integer counts. The similarity term \(QK^\top/\sqrt{d}\) is an unnormalized real-valued score matrix in the displayed equation; if interpreted probabilistically, an additional normalization such as softmax would be required, and without it the expression should not be treated as a probability distribution. Breakdown regimes include: (i) if DetA or AssA is zero, HOTA is zero; (ii) if no ground-truth or prediction matches exist, HOTA is undefined or vacuous; (iii) if \(d\le 0\), \(\sqrt{d}\) is invalid; (iv) if \(L=0\) or the query is empty, the language-conditioned term degenerates; (v) at the first frame, the track query is empty, so only detect queries operate [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of RMOT runs through three historical layers: referring expression datasets, video tracking benchmarks, and transformer-based detection. The paper explicitly contrasts earlier image datasets such as Flickr30k, ReferIt, and RefCOCO/+/g with later video datasets such as Lingual OTB99, Cityscapes-Ref, Talk2Car, Refer-DAVIS17, and Refer-Youtube-VOS [PAGE 1]. It identifies two limitations in that lineage: “each expression tends to correspond to only one target” and “the given expression may only describe part of frames for the video referring task” [PAGE 1]. RMOT is positioned as the correction to both limitations.

The dataset genealogy depends on KITTI’s instance identifiers. The authors state that KITTI “provides a unique identification number for each instance, which helps annotators improve labeling efficiency” [PAGE 3]. This is the key retro-causal link: without stable identity labels, propagating a two-click annotation across frames would not be reliable. The labeling tool uses the starting and ending frames of an action and then propagates labels through identity-linked boxes [PAGE 3]. Thus the benchmark’s low annotation cost is historically dependent on prior tracking annotation infrastructure.

The model genealogy runs from DETR to Deformable DETR to MOTR, with cross-modal modulation from MDETR-like fusion. The paper says TransRMOT “builds upon the recent DETR framework” [PAGE 2] and “mainly follows the Deformable DETR” while adapting cross-modal inputs [PAGE 5]. It also borrows the query decoupling idea from MOTR: track queries for previous objects and detect queries for new-born objects [PAGE 2][PAGE 5]. The early-fusion module is explicitly contrasted with concatenation-based fusion like MDETR because self-attention over many image tokens is computationally expensive [PAGE 5].

Multi-week traps in this genealogy are methodological. The first trap is single-object metric inheritance: if evaluation assumes one referent, multiple correct objects may be counted as false positives. Refer-KITTI avoids this by annotating arbitrary referent counts and treating non-referent visible objects as false positives under HOTA [PAGE 4]. The second trap is temporal leakage: if an expression describes a transient action, a model trained to track identity may incorrectly persist the object after the action ends. The paper’s annotation scheme labels only the action interval, with the start and end frames clicked manually [PAGE 3]. The third trap is small-split instability. With only 18 videos, 15 training and 3 testing [PAGE 4], seed variance matters; the authors report three-run variance to address this [PAGE 7]. The fourth trap is threshold overfitting. The referring threshold is chosen as 0.4 because performance is “marginal at around 0.2∼0.5” [PAGE 8], but the table shows that too high a threshold reduces recall [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind audit asks what the evaluator, annotator, and model each assume about the other’s behavior. In RMOT, the evaluator assumes that language can select a subset of visible objects and that non-selected visible objects are errors. The source states: “when those non-referent yet visible objects are predicted, they are viewed as false positives in our evaluation” [PAGE 4]. The model must therefore infer not merely “what objects exist?” but “which objects are linguistically licensed at this time?” This is a recursive inference problem because the model must predict the evaluator’s referent set under a language expression.

Crisis habit regression occurs when the system falls back to a dominant prior. The dominant prior in referring understanding is single-object grounding. The paper notes that previous benchmarks and methods often assume one target per expression [PAGE 1]. If a model regresses to that habit, it may output one high-confidence box and suppress other valid referents. Refer-KITTI is designed to block that regression by allowing “an arbitrary number of referent object predictions” [PAGE 1] and by averaging HOTA across sentence queries [PAGE 4].

The counter-trap is explicit multi-object supervision. The loss is decoupled into track and detect components, with track objects matched one-to-one and detect objects matched through bipartite assignment [PAGE 6]. This prevents the model from collapsing all referent objects into a single query. The detect query set is large, \(N=300\), allowing many new-born objects [PAGE 6]. The referent head then produces a binary referring score for each instance, rather than a single softmax over one target [PAGE 5].

The clock layer is temporal. RMOT is not merely detection; it is online tracking under temporal status variance. The paper says the expression “the cars which are turning” should be detected only during turning, and tracking ends when the activity finishes [PAGE 1][PAGE 2]. This creates a clock-dependent label function: the same object identity may be referent during one interval and non-referent outside it. A recursive evaluator must therefore ask whether the model understands not only identity but also event phase. The track query mechanism provides a temporal memory channel, but the source also reports failure under long occlusion and ID switch [PAGE 9]. Thus the model’s theory of the evaluator must include three clocks: object lifetime, action interval, and referent-status interval. If any of these clocks is misestimated, the model will either over-track or under-track.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto test asks whether physical, biomechanical, or weather-layer facts invalidate the paper’s claims. The source provides enough information to adjudicate some layers but not others.

Physical layer: the model consumes video frames and produces boxes. The feature extractor maps each frame to pyramid feature maps \(I_t^l\) [PAGE 5]. If physical visibility collapses, for example under severe occlusion, the feature representation degrades. The paper acknowledges this indirectly: “ID switch problem, which is caused by long-temporal occlusion and degrades the tracking performance” [PAGE 9]. Therefore a physical veto is valid for any claim of perfect long-term occlusion robustness. However, the paper does not claim perfect occlusion robustness; it reports failure cases. Thus no source-supported physical veto contradicts the reported benchmark performance.

Biomechanical layer: expressions such as “the cars which are turning,” “the persons in the right,” and “the cars which are moving” depend on object motion and pose. The source shows that action-based labels require clicking the starting and ending frames of the action [PAGE 3]. This establishes a biomechanical constraint: an action cannot be labeled before it begins or after it ends. A model that predicts a turning car before the turning action starts would violate the annotation semantics. The source explicitly states that cars “can be detected only when they start the turning action” [PAGE 2]. Therefore any claim of pre-action detection is vetoed by the benchmark’s temporal semantics.

Weather layer: the source does not provide weather annotations or explicit rain, snow, fog, or illumination metadata. KITTI is selected for scene diversity, including “pedestrian streets, public roads, highways, and so on” [PAGE 3], but weather robustness is not evaluated. Therefore a weather veto cannot be verified from the provided pages. The correct adjudication is non-admissible, not false: the paper neither proves nor disproves weather robustness. If an external critic claims that TransRMOT is weather-invariant, that claim lacks source support. If a critic claims that weather universally breaks the model, that claim also lacks direct source support. The only valid statement is that weather degradation would operate through the same physical visibility pathway that affects \(I_t^l\), but the source does not quantify it.

Formal veto condition: a cross-layer veto holds if the source contains an explicit statement that the claimed capability fails under that layer. The source supports an occlusion-related veto for long-term association [PAGE 9], a biomechanical temporal veto for action-phase expressions [PAGE 2][PAGE 3], and no admissible weather veto because weather is absent from the evaluation description. Therefore the paper’s core benchmark claims remain valid within KITTI-derived conditions, while external robustness claims are outside the evidentiary boundary.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios can be constructed directly from the source’s ablations and stated mechanisms.

Scenario 1: Remove the cross-modal early-fusion module. If the model no longer receives language-conditioned visual features, it cannot distinguish referent objects from visible non-referent objects. The source’s ablation reports this exact counterfactual: “w/o fusion” yields HOTA 17.01, DetA 19.05, AssA 15.26, whereas the full model achieves HOTA 35.54, DetA 28.25, AssA 46.25 [PAGE 8]. Prediction: any RMOT system lacking early language fusion will collapse toward all-visible-object detection and will be heavily penalized because non-referent visible objects are false positives [PAGE 4]. This veto is verifiable by comparing fusion-removed and full models on Refer-KITTI.

Scenario 2: Remove the track query. If the model has no persistent query from previous frames, it becomes image-based and cannot maintain identities. The source states that removing track query “causes TransRMOT to be a fully image-based model” and leads to “numerous IDs and unavailable associations” [PAGE 8]. The ablation table shows that post-hoc SORT or ByteTrack association improves over no association but remains below the full model: SORT HOTA 31.63, ByteTrack HOTA 32.12, versus full model HOTA 35.54 [PAGE 8]. Prediction: without an internal track query, association metrics such as AssA, AssRe, and AssPr will degrade, and external IoU-based tracking cannot fully recover the end-to-end decoder’s query-level temporal representation. This veto is verifiable by comparing w/o track query, external tracker variants, and full TransRMOT.

Scenario 3: Raise the referring threshold too high. The model first filters by class score and then by referring score. The source uses βref = 0.4 by default [PAGE 7], and the ablation shows that HOTA declines as βref increases: at βref = 0.6, HOTA is 31.09 and DetRe is 27.47, compared with βref = 0.4, where HOTA is 35.54 and DetRe is 39.22 [PAGE 8]. Prediction: a high referring threshold will suppress ambiguous or partially visible referent objects, reducing recall and HOTA. This is especially likely for expressions with multiple objects or transient status, where some objects may have lower referent scores due to occlusion or action phase. This veto is verifiable by sweeping βref and measuring DetRe, DetPr, and HOTA.

A secondary verifiable prediction concerns generalization. The source reports that a new expression, “the left persons in black,” can be inferred even though it is not in the dataset [PAGE 8][PAGE 9]. However, the limitation section reports failure on fine-grained attributes such as gender: “some fine-grained object features (e.g., human gender) are not captured accurately” [PAGE 9]. Therefore the RLVR prediction is: compositional attribute combinations will generalize if their primitive attributes are represented, but fine-grained attribute distinctions absent from the training distribution will fail. This is consistent with the paper’s own generalization analysis and limitation report.
</RLVR_COUNTERFACTUAL_VETOES>
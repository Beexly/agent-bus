---
source: "arxiv_2310.17875v3.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 16
model: baidu/ernie-5.5-flash-preview:free
words: 7834
---

<NATIVE_REASONING>
We need answer user's request. They gave strict invariants: zero betting lines, zero toy equations. Need >=1000-word depth across exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

User provided source text of paper Siamese-DETR. Need likely produce analysis based on source. Need satisfy exact XML sections. No betting. Need formal LaTeX equations, units, page citations, breakdown. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need >=1000 words total. Need deep. Need maybe mention units: SI/information/probability units. Need avoid fake ratios. Need formal equations from paper. Need maybe derive query content indexing, loss, NMS/IoU, thresholds. Need cite pages. Need include breakdown regimes, singularities. Need not mention odds. Need ensure all sections present and content. Need likely not use outside knowledge? Could use known concepts but source based. Need cite exact [PAGE N] markers and verbatim quotes where source pages provided. We should include quotes like "The multi-scale object queries are designed based on the given template image" [PAGE 1]. Need ensure all equations are formal LaTeX. Could include equations from paper: Q definition [PAGE 4], AvgPool [PAGE 5], qcn = f_hat_{n mod S} [PAGE 5], annotation indicator [PAGE 5], additional queries [PAGE 5], loss [PAGE 7], maybe IoU formula? Paper says IoU but not formula; can define standard IoU with units dimensionless [0,1]. Need be careful not invent toy equations. Standard definitions okay. Need perhaps compute FLOPs/inference time breakdown? Formal equations for computational cost maybe not in source, but can state if assumptions. Need no betting lines. The weird CROSS_LAYER_VETO_ADJUDICATION asks Physical/biomechanical/weather veto proof. This is not about sports? We can interpret as physical/biomechanical/weather constraints on tracking? Need proof maybe vetoing impossible claims: e.g., if camera FPS 24-30 [PAGE 7], temporal displacement can cause identity switches; heavy overlap fails [PAGE 14]; similar appearance false positives [PAGE 14]. Need "veto proof" maybe demonstrate that certain failure regimes are physically necessary given source. Need not use external weather? Could discuss weather as visibility/occlusion: rain/fog reduces contrast, but source not mention weather. Need be cautious: source only says outdoor videos? Urban Tracker outdoor [PAGE 7]. Could use physical optical constraints: template image crop from first frame, object appearance changes under illumination/weather, but source limitations mention appearance cues absent and occlusion [PAGE 14]. Need formal units: pixels, frames, seconds, IoU dimensionless, probability, bits? Need mention information units maybe nats/bits for classification score? But avoid fake. Could discuss confidence threshold as scalar in [0,1], not in paper exact value? NMS threshold 0.5 [PAGE 8]. Classification confidence predefined threshold but value not given [PAGE 6]. Use variables.

Need likely respond with XML sections only. Need maybe no markdown outside. Ensure >=1000 words. Let's plan.

Sections:
1 THINK_TRACE >=400 words. Deep multi-hop derivation & gray-zone audit. Discuss deriving detection as query-template similarity, multi-scale, DMTS positive/negative, training loss, online tracking via previous boxes, NMS. Gray zones: no video training, static image train-test gap, template scale, negative samples reduce mAR but increase mAP, threshold dependence, attention masks, group independence, identity vs detection, IDSw tradeoffs. Need citations and quotes.

2 SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown. Include:
- Q set: Q = {q_n = (q_n^c, q_n^b), n=0,...,N-1}, q_c ∈ R^D, q_b ∈ R^4, dimensionless coordinates normalized? Source says center coordinate width height. Use normalized coordinates if DETR, unitless relative to image dimensions. Page 4.
- Multi-scale features F = {f_s}, s=0,...,S-1. Average pooling: \hat f_s = AvgPool(f_s) [PAGE 5]. Units: feature vector dimensionless after pooling if input activation units arbitrary; template long side 400 px [PAGE 8].
- Query content assignment: q_n^c = \hat f_{n mod S} [PAGE 5]. n dimensionless index, S number scales (S=4 [PAGE 8]).
- Annotations A = {a_k=(b_k,c_k)} b_k ∈ R^4, c_k ∈ Z [PAGE 5]. Positive/negative indicator 1_{c_k, \hat c_t} [PAGE 5].
- Template category sampling: \hat c_t ~ Uniform({c_0,...,c_{K-1}})? Source says randomly sample. Can formalize assumption. Need not overclaim.
- Additional tracking queries: \hat Q = union_s \hat Q_s, \hat q_{s,m} = (\hat f_s, \hat b_m), m=0,...,M-1 [PAGE 5]. b in R^4. M tracked boxes previous frame.
- Selection: choose s* = argmax_s IoU(q_{s,m}^b, \hat b_m), keep if score > tau_conf [PAGE 6]. IoU = area(intersection)/area(union), dimensionless [0,1]. Units: boxes in pixel coordinates or normalized; if pixel, area px^2 cancels.
- NMS: suppress detection box if IoU(d_i, \hat b_m) > theta_NMS, theta_NMS=0.5 [PAGE 8]. Need formal: keep d_i if ∀m: IoU(d_i, \hat b_m) <= 0.5 or score lower? Source says remove duplicated detection boxes. We can state operational condition.
- Loss: L = 1/T sum_t [ L_H(A^{\hat c_t}, \hat A Q^{\hat c_t}) + 1/S sum_s L_R(A^{\hat c_t}, \hat A \hat Q^{\hat c_t}_s) ] [PAGE 7]. Units: scalar loss, dimensionless. L_H Hungarian loss, L_R reconstruction loss. Ground-truth boxes without noise used.
- Confidence threshold: score p ∈ [0,1], threshold tau. Not specified. Use variable. NMS threshold theta_NMS=0.5 [PAGE 8].
- MOTA/IDF1 definitions? Could include formal definitions from metrics? Source names but not formulas. We can state metrics are counts and scores; MOTA combines FP, FN, IDSw? Standard formula maybe MOTA = 1 - (FN+FP+IDSW)/GT? But not in source. If use standard, need mark as standard extension? To be safe, avoid equations not source? But can include standard definitions with assumptions. User wants formal equations, SI/information/probability units. Could include probability units for scores. But no toy equations. Standard MOTA formula is legitimate. But source only lists metrics. Maybe include as "not explicitly defined in source, standard MOT metric form under usual convention" but that might be okay. Need cite source for metric names [PAGE 8].
- Computational breakdown: Parameters/FLOPs/time from Table I [PAGE 8]. Could formalize additive cost: T_total ≈ T_frame + T_template/N_frames? Source says extra costs negligible when frames large [PAGE 8]. Use formula: C_video = C_det + C_template (once) if template only first frame, but backbone template processed first frame? Actually table says extra costs of FLOPs/inference time processing template/text not included since only processed first frame. Could state C_video ≈ N_frames C_frame + C_template, amortized C_template/N_frames. Units: FLOPs, ms. Need no invented ratio? This is not fake, it's accounting. But avoid toy. Use exact numbers: Siamese-DETR Swin-T inference time 86.6 ms, FLOPs 267.3 G, params 47.6 M [PAGE 8]; TbQ tracking time 2.2 ms excluding detection [PAGE 8]. Could cite. Need breakdown regimes: template processed once, per-frame query count N + M*S? Source N=600, S=4, T=7 training, M variable. Need state query count detection N=600 [PAGE 8], tracking adds M per scale? For each tracked box b_m, S tracked boxes obtained; so additional tracking query boxes M*S? Source: For each box b_m, S tracked boxes obtained by object queries q_{s,m}. If M tracked boxes, total tracking queries M*S. At inference Q and hat Q concatenated. Units: count. Could discuss if M=1000, tracking queries 4000? But M not given; can derive. But if N=600 and M large, query count can exceed detection queries. Is that a trap? Need mention.

3 RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss lineage: GMOT from Luo et al [PAGE 1], SOT GlobalTrack [PAGE 3], DETR variants [PAGE 3], DAB decoupled queries [PAGE 3], DN denoising [PAGE 3], DINO mixed query selection [PAGE 3], Tracktor NMS [PAGE 6], MOT metrics [PAGE 8]. Multi-week traps: assuming closed-set detectors can be patched by manual category removal [PAGE 9], assuming SORT/ByteTrack hyperparams transfer [PAGE 10], assuming query denoising unchanged works [PAGE 6], assuming template features enough for identity under occlusion [PAGE 14], assuming more training data always helps? Objects365 boosts [PAGE 12], LVIS fewer images hurts Siamese but helps GLIP [PAGE 12]. Need cite.

4 RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is odd. Need interpret: Crisis habit regression: under distribution shift (new category, occlusion), model regresses to closed-set habits or background? Counter-trap: optimized query denoising, attention masks, NMS, independent groups. Clock: causal online frame-by-frame, previous frame boxes, FPS 24-30 [PAGE 7], temporal budget. Need discuss. Could formalize recurrence: q_t tracking depends on b_{t-1}; if object missing previous frame, detection queries recover [PAGE 1]. Need no betting. Mention identity crisis: IDSw vs FN tradeoff [PAGE 10]. Need predictions.

5 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need prove veto: Physical layer: boxes are 2D projections, overlap/occlusion leads failure [PAGE 14]; small objects GMOT-40 [PAGE 10] and DETR weak on small objects [PAGE 10]; camera FPS limits motion per frame [PAGE 7]. Biomechanical? Maybe object motion (animals/insects) non-rigid; template appearance insufficient; no appearance cues in TbQ [PAGE 14]. Weather: outdoor videos in Urban Track [PAGE 7], rain/fog/snow reduce visibility, low contrast; not in source? We can frame as assumption: if weather reduces optical contrast below detector's discriminability, veto. Need formal proof: If signal-to-noise ratio SNR < threshold, probability of correct detection decreases; but no fake equations? Could use probability notation: Let P_detect = P(score>tau | object present). If visibility v ∈ [0,1] and effective feature similarity s = v s_0, then if s ≤ tau, detection fails. This is a simple formal condition, not toy ratio? Maybe okay but user says never invent fake ratios. We can state assumption-based inequalities. But avoid overly simplistic. Use set-theoretic: If object projection overlap area > threshold? For heavy overlap, feature representation may correspond to multiple instances; IoU ambiguity. Need prove from paper: failure cases heavy overlap [PAGE 14], similar appearance false positives [PAGE 14]. Biomechanical: non-rigid motion changes shape/pose; template box is static crop; no motion model/Kalman in TbQ [PAGE 8], so fast non-linear motion can leave query box stale. Weather: if visibility degrades, appearance cues (not used) would be needed; source limitation says absence of appearance cues causes occlusion failure [PAGE 14]. Need maybe call it veto proof: any claim of perfect tracking under occlusion/weather is vetoed.

6 RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need likely reinforcement learning verifiable counterfactuals? Provide scenarios with measurable predictions from source. Examples:
1) If remove optimized query denoising, Avg IoU with GT boxes drops from 0.730 to 0.103 and MOTA from 35.9 to 28.4 [PAGE 12 Table VI]. Prediction: optimized denoising necessary.
2) If use 1 scale instead of 4, mAP overall drops 35.9 to 47.9? Wait Table IV: 4 scales overall 47.9, 1 scale 35.9; MOTA 19.3 to 27.8 [PAGE 11]. Prediction: scale ablation.
3) If train with 1 template vs 7, mAP 47.9 to 54.9, MOTA 23.4 to 27.8 [PAGE 11 Table V]. Prediction: DMTS templates. Or if TbQ replaced by SORT on Siamese-DETR, MOTA 30.1 vs 35.9? Table III [PAGE 9]. Need 3 verifiable. Could include predictions with exact numbers.

Need ensure word count >=1000. Let's estimate. Each section maybe 250-400 words. Total ~2000. Good.

Need exact XML tags. Could include LaTeX inside. Need no extra text outside. Ensure no betting lines. No odds. No "force/fatigue" toy. Use formal.

Need think about "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Need include units. For equations, units: coordinates dimensionless normalized or pixels; loss dimensionless; probabilities dimensionless; time seconds (ms in table); memory maybe not given. Information units? Could mention classification scores are probabilities in [0,1] (dimensionless). If discussing entropy? Not needed. But "SI/information/probability units" maybe need mention: time s, length pixel counts, FLOPs (operations), probability dimensionless. Could mention bits only if information-theoretic; avoid if not needed. Maybe discuss attention mask as adjacency constraint not info. Could include "no entropy claimed".

Need exact quotes. Need quote at least some. We can quote short verbatim from source. For page citations, use [PAGE 1], [PAGE 5], etc. Need perhaps include quotes in SOURCE_OPERATORS. Example:
"The multi-scale object queries are designed based on the given template image" [PAGE 1].
"The online tracking pipeline is simplified through a tracking-by-query manner" [PAGE 1].
"query content qcn ∈ RD" [PAGE 4]. Need quote exact maybe: "where the query content qcn ∈ RD is a feature vector with dimensionality D, and the query box qbn ∈ R4 is represented by the center coordinate, width and height" [PAGE 4]. But text has qcn with subscript. We can quote.

Need maybe use LaTeX align. Ensure no invalid XML? Tags can contain LaTeX. Fine.

Potential issue: user asks "DRIVE SOURCE: /GSE-Ultra... PAGES: 16" maybe wants analysis from source. We can satisfy.

Need produce final only XML. Let's draft thoroughly.

THINK_TRACE: Need >=400 words. Let's write ~550.
Deep multi-hop: Input template -> backbone -> multi-scale features -> avg pool -> query contents replicated -> query boxes learned -> decoder with Hungarian loss -> dynamic labels. At inference, previous tracked boxes paired with same template features -> decoder outputs boxes -> IoU matching to previous box -> score threshold -> NMS with detection boxes. Analyze gray zones: template category sampled from annotations; template from another image; no TIMOT training data; DMTS uses COCO; two-category detection; negative samples; attention masks isolate groups; query denoising optimized to pair noisy boxes with positive contents; original denoising conflicts; online no Kalman/appearance; failure overlap/similar appearance. Need cite. Use words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need structured. Use bullet equations. Include assumptions and breakdown. Need cite. Could include:
1. Query space: Q = {q_n=(q_n^c,q_n^b)}_{n=0}^{N-1}, q_n^c∈R^D, q_n^b∈R^4; units: q^b normalized [0,1]^4 or pixel coordinates; D feature dimensions dimensionless. [PAGE 4].
2. Feature extraction: f_s ∈ R^{H_s×W_s×C}; \hat f_s = AvgPool(f_s) ∈ R^C. Units: activation units; if normalized input, dimensionless. [PAGE 5]. Template long side 400 pixels [PAGE 8].
3. Query content binding: q_n^c = \hat f_{n mod S}. n∈Z, S∈Z, S=4 [PAGE 8]. This is assignment operator, no learned content.
4. DMTS label: A_{\hat c_t} = {(b_k, 1_{c_k=\hat c_t})}. Positive if category equals template category. Units: b_k∈R^4, label∈{0,1}. [PAGE 5].
5. Multi-template: concatenated queries Q^{\hat c_0},...,Q^{\hat c_{T-1}}, N*T total, attention mask prevents cross-group attention. T=7 default [PAGE 5][PAGE 8].
6. Tracking queries: \hat Q = ∪_{s=0}^{S-1} \hat Q_s, \hat q_{s,m}=(\hat f_s, \hat b_m). [PAGE 5]. M previous tracked boxes. Units b in box coordinates.
7. Selection: s^* = argmax_s IoU(\hat q_{s,m}^b, \hat b_m), keep if p_{s^*} ≥ τ_conf. IoU = |B_i∩B_j|/|B_i∪B_j|, dimensionless. If no keep, object considered disappeared. [PAGE 6].
8. NMS: d_i suppressed if ∃ m with IoU(d_i, \hat b_m) > θ_NMS, θ_NMS=0.5. [PAGE 6][PAGE 8]. Need note source says NMS threshold set to 0.5.
9. Loss: equation. L dimensionless scalar. Ground truth boxes without noise used. [PAGE 7]. Breakdown: detection loss L_H + tracking mimic loss average over S.
10. Metric definitions: MOTA, IDF1, etc. Could formalize standard MOTA if needed: MOTA = 1 - (FN+FP+IDSW)/N_GT? But source not define. Maybe state "The paper evaluates with MOTA, IDF1, MT, ML, FP, FN, IDSw" [PAGE 8], units counts except MOTA/IDF1 percentages. Avoid formula if not source. But maybe need equations; enough already.
Breakdown regimes: If S=1, content only one scale; if S=4, multi-scale [PAGE 11]. If T=1, fewer annotations reused; if T=7, best [PAGE 11]. If no query denoising, avg IoU 0.021 vs optimized 0.730 [PAGE 12]. If M large, tracking query count M*S; potential memory/compute linear in M*S. Source says TbQ introduces a few additional object queries [PAGE 9], but that assumes M small. Need note breakdown when M not small.

RETROCAUSAL_GENEALOGY: ~300. Discuss historical lineage and traps. Cite pages. Need "multi-week traps" maybe research traps over weeks. List.

RECURSIVE_THEORY_OF_MIND: ~250. Crisis habit regression vs counter-trap vs clock. Use formalism: state s_t = (I_t, B_{t-1}); policy outputs detection/tracking. Under crisis (occlusion), model may regress to background or duplicate; counter-trap: attention mask, optimized denoising, NMS; clock: FPS. Cite.

CROSS_LAYER_VETO_ADJUDICATION: ~300. Physical/biomechanical/weather veto proof. Need maybe formal propositions.
Proposition 1 (occlusion veto): If projected object regions overlap such that appearance evidence is shared by multiple instances, the two-category query content from one template cannot uniquely assign identity; paper failure heavy overlap [PAGE 14]. Veto: no unique identity.
Proposition 2 (motion veto): TbQ uses previous box only, no Kalman/appearance [PAGE 8]; if frame-to-frame displacement exceeds decoder refinement basin, box fails. Need not invent exact displacement; state qualitative. FPS 24-30 [PAGE 7] constrains sampling but not exact speed.
Proposition 3 (weather/visibility veto): For outdoor urban videos [PAGE 7], if weather reduces contrast/edge energy, detection probability falls; since TbQ lacks appearance cues [PAGE 14], cannot recover. Need avoid external equations. Maybe use probability inequality: If P_det^weather < τ, no detection. But that's trivial. Could state as assumption-based proof. Need "biomechanical" maybe articulated/insect non-rigid? Source categories include insect, ball, balloon, bird, boat, car, fish, person, stock [PAGE 12]. Non-rigid categories violate rigid box motion; but source doesn't discuss. We can say box coordinates assume rectangular extent; non-rigid deformation changes bbox shape, causing regression error. Need be careful not overclaim.

RLVR_COUNTERFACTUAL_VETOES: ~250. Three scenarios with predictions. Need exact numbers. Let's list:
Scenario A: Disable optimized query denoising. Prediction: with GT boxes as query boxes, Avg IoU falls from 0.730 to 0.103, Avg Conf from 0.426 to 0.093, MOTA 35.9 to 28.4 [PAGE 12 Table VI]. Wait original query denoising row: original [22] MOTA 28.4, Avg IoU 0.103, Avg Conf 0.093. None: MOTA 27.8, Avg IoU 0.021. Need choose no denoising vs optimized. If no denoising, MOTA 27.8, Avg IoU 0.021. If original denoising, MOTA 28.4, Avg IoU 0.103. Optimized 35.9, 0.730. Good.
Scenario B: Reduce scales from 4 to 1. Prediction: overall mAP drops 47.9 to 35.9, MOTA 27.8 to 19.3, small mAP 23.3 to 11.0 [PAGE 11 Table IV].
Scenario C: Reduce training templates from 7 to 1. Prediction: mAP drops 54.9 to 47.9, MOTA 27.8 to 23.4 [PAGE 11 Table V]. Or swap tracker TbQ with SORT on same detector: MOTA 35.9 to 30.1, IDF1 42.8 to 34.7? Table III: Siamese-DETR + TbQ 35.9, IDF1 42.8; + SORT 30.1, 34.7. That's good. Need three. Could include all. Need verifiable.

Need maybe include "RLVR" as reinforcement learning verifiable rewards? We can phrase as counterfactual interventions that produce measurable metric changes. Good.

Need final no extra. Ensure word count. Let's compose with rich detail.

Potential constraints: "Never mention spreads, totals, moneylines, or odds." Avoid word "odds" entirely? They said never mention; maybe avoid. Also avoid "betting". Do not use "total" maybe common, but "totals" maybe betting term; avoid word totals. Use "aggregate" maybe. But "total number" in source? We can avoid. Also avoid "spread" as in distribution? Might be okay but avoid if possible. Use "variance" maybe.

Need no "toy equations". Use formal.

Let's draft.

Check XML validity: <THINK_TRACE> content. Could have LaTeX underscores; okay. No unescaped ampersands? XML doesn't require escaping except maybe not. But safe to avoid & in text? LaTeX uses \& maybe. Use align without &. Could use 
\begin{aligned} ... 
\end{aligned}. Need avoid & alignment? In XML, & should be escaped if strict. But not necessary? To be safe, avoid & by using separate lines or use \begin{cases} with &? Ampersand could be issue. Use bullet equations without alignment &.

Need maybe use "IoU" with formula: \mathrm{IoU}(B_i,B_j)=\frac{|B_i\cap B_j|}{|B_i\cup B_j|}. Fine.

Need cite exact [PAGE N]. Use quotes. Example:
"The multi-scale object queries are designed based on the given template image" [PAGE 1].

Need maybe mention [PAGE 16]? Not needed.

Need ensure >=400 words THINK_TRACE. Let's count roughly. We'll write 500.

Let's begin final. Ensure only XML sections. Need maybe include line breaks.

Draft content:

<THINK_TRACE>
The derivation begins ... 
...

Need include gray-zone audit.

SOURCE_OPERATORS... Include equations.

Let's write in final. But before final, let's think if any hidden requirement: "You are the GSE + GSI Frontier Reasoning Foundry." Maybe tone should be formal. "STRICT INVARIANTS" need obey. Need maybe include "zero betting lines" no mention. Good.

Potential issue: "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." They may expect proof of impossibility of certain sports predictions? But source is MOT. We can adapt to physical/biomechanical/weather constraints in object tracking. Need maybe explicit "veto proof" with if-then. Good.

Need "RETROCAUSAL_GENEALOGY Historical/scientific lineage & multi-week traps." Could include multi-week traps as research pitfalls over development. Good.

Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." Use exact phrase maybe.

Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Provide numbered scenarios. Good.

Let's ensure no mention of "odds". Search mentally: avoid "odds". "confidence" okay. "probability" okay. "threshold" okay.

Need maybe include "SI units" explicitly. In SOURCE: time: Table I inference time in ms, convert to s: 86.6 ms = 0.0866 s; 2.2 ms = 0.0022 s. FLOPs in G = 10^9 operations. Parameter M = 10^6 scalar weights. Pixels. Good. Include.

Need maybe mention "information units" maybe bits? Could mention no entropy claim; scores are probabilities in [0,1], dimensionless; if converted to information, -log2 p in bits, but not used. But user wants SI/information/probability units. Maybe include one equation with bits? Could be seen as invented? We can state "If a classification score p is interpreted information-theoretically, surprisal is -\log_2 p bits; the paper does not optimize this quantity." That's formal and not toy. But maybe unnecessary. Could include in SOURCE: "No entropy term is specified; therefore no bits are assigned." But requirement says state SI/information/probability units. We can state probability units. Maybe enough.

Need exact breakdown regimes: "singularity/breakdown regimes". Include:
- S=1 breaks multi-scale benefit.
- T=1 underutilizes annotations.
- No query denoising breaks tracking mimicry (Avg IoU 0.021).
- M→∞ tracking query count grows as M S, compute/memory breakdown.
- Heavy overlap and similar appearance cause semantic ambiguity (source failure). Good.

Need maybe mention attention mask: queries in different groups cannot see each other [PAGE 5]. Formalize mask A_{ij}=0 if group(i)≠group(j). This is formal. Use in equations? Could include:
M^{group}_{ij} = 1 if group(i)=group(j), else 0. But that's invented? It describes implementation. Source says attention mask provided. Fine.

Need maybe mention "object queries in Q and hat Q detect and track independently" [PAGE 6]. Good.

Let's draft final in detail. Ensure word count likely >2000. Good.

Potential XML issue: Use < and > in LaTeX? E.g., ">\theta" could be interpreted as tag? In XML content, '<' should be escaped. To avoid, use words "exceeds" or use \geq? But \theta maybe okay. If write "p < \tau" could be parsed? In XML, < starts tag. Need avoid raw <. Use LaTeX \tau? Could use "p \geq \tau" only; for less than use "p \leq"? But less-than symbol in LaTeX is <; still raw. Could escape as &lt; but then in XML okay. But final may not be parsed strictly. To be safe, avoid raw < in text. Use \ge, \le, \text{less than}. In LaTeX, \le is safe. Use "if p \le \tau". Good. For "S ∈ {1,2,3,4}" okay. Use no raw <. In quotes, source has "mAP@0.5↑mAR↑" no <. Table has "ML↓" okay. But "MOTA < 0" in source? Avoid quote with <. Use "negative MOTA". Good.

Need avoid &. In LaTeX, use no alignment &. Use separate equations. Good.

Need maybe use \left but okay.

Let's compose. Need maybe check THINK_TRACE word count. Write lengthy.

Final:
<THINK_TRACE>
... maybe 6 paragraphs.

Need include exact XML tags closing. Ensure no missing.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The reasoning chain begins with the paper’s central design decision: template-image-based generic multi-object tracking is reformulated as query-based detection plus query-based association, rather than as a conventional detector-plus-data-association pipeline. The source states that “The multi-scale object queries are designed based on the given template image” [PAGE 1] and that “The online tracking pipeline is simplified through a tracking-by-query manner” [PAGE 1]. The first multi-hop derivation is therefore: template image → backbone features → multi-scale pooled query contents → decoder queries → simultaneous detection and tracking. In this derivation, the template image is not merely an initialization cue; it becomes the semantic content carrier for the object queries. The query boxes remain learned, but the query contents are overwritten by features from the template image. This creates a hybrid query: content from the target exemplar, geometry from learned prior parameters.

A second derivation follows from the training strategy. Because template-image-based MOT lacks annotated video training data, the authors train on COCO detection annotations. They convert each detection image into a dynamic binary task: objects with the same category as the sampled template are positive, all others are negative. The source describes this as “the objects that share the same category with the template image are treated as positive samples while the others are treated as negative samples” [PAGE 2]. This is not a trivial relabeling; it changes the optimization landscape. Negative samples force the classifier to reject non-target objects, which improves discrimination but can reduce recall, as observed in the ablation where mAR drops when negative samples are used [PAGE 5][PAGE 11]. The gray zone here is the trade-off between precision-like discrimination and recall: adding negative categories sharpens the boundary around the template semantics, but may classify ambiguous instances as background.

A third derivation concerns multi-template training. The paper samples several template categories per training image and concatenates query groups, while preventing cross-group attention. The source says that “the object queries in different groups cannot see each other” and that this is implemented by an attention mask [PAGE 5]. This is crucial because otherwise one template category could contaminate another template’s query stream. The resulting operator is a block-diagonal attention structure over query groups. The ablation shows that using seven templates improves both mAP and MOTA relative to one template [PAGE 11], so the training objective benefits from repeated use of the same image annotations under different template identities. This is a data-efficiency move: one COCO image can supervise multiple quasi-tracking tasks within a single forward pass.

A fourth derivation concerns online tracking. The previous frame’s tracked boxes become additional query boxes paired with the same template-derived multi-scale contents. The source defines the tracking query as a pair consisting of a template feature vector and a previous tracked box [PAGE 5]. At the current frame, the decoder produces refined boxes for those tracking queries. For each previous box, the model selects the scale-specific output with maximal IoU against the previous box, then accepts it only if the classification score exceeds a confidence threshold [PAGE 6]. This is a local refinement loop: temporal identity is carried by the previous box geometry, while semantic acceptance is carried by template-derived query content. The absence of Kalman filtering, appearance embeddings, or hierarchical matching is therefore a deliberate simplification, but it creates fragility under occlusion and appearance drift.

A fifth derivation concerns failure regimes. The paper identifies two failure cases: heavily overlapped objects and objects with similar appearance to the target [PAGE 14]. These are not incidental bugs; they are structural consequences of the design. If multiple objects overlap, the query content derived from a single template cannot uniquely resolve instance identity without appearance or motion priors. If multiple objects share appearance, the two-category positive/negative boundary becomes insufficient. The paper also notes that Siamese-DETR “tracks objects solely based on the tracked boxes in the previous frame without the exploration of appearance cues,” and that this can produce tracking failure under occlusion, higher IDSw, and lower IDF1 [PAGE 14]. Thus, the gray-zone audit reveals a causal chain: template-only semantics plus previous-box geometry yields a lightweight tracker, but the same design removes the cues needed for robust identity persistence under severe occlusion or similar distractors.

Finally, the derivation must respect the paper’s evaluation structure. GMOT-40 contains 40 videos with 10 categories, four videos per category, and high object density; 85.28% of frames contain more than 10 objects [PAGE 7]. The FPS range is 24 to 30 [PAGE 7]. This means the tracker operates under dense, causal, frame-by-frame conditions. The temporal operator is therefore constrained by frame sampling: a box from the previous frame is only useful if the current-frame projection remains within the decoder’s refinement capacity. The source’s metrics include MOTA, IDF1, MT, ML, FP, FN, and IDSw [PAGE 8], which expose the trade-off between finding more objects and maintaining identity continuity. The overall gray-zone conclusion is that Siamese-DETR succeeds by making template semantics query-native and tracking association box-native, but its breakdown is predictable whenever semantic ambiguity, occlusion, or appearance distractors exceed the discriminative capacity of the template-derived query content.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source provides explicit operator forms for query construction, dynamic label generation, tracking-query formation, and training loss. These operators can be stated in formal LaTeX with explicit units and breakdown regimes.

1. Decoupled object query set.  
The paper defines the query set as
\[
Q=\{q_n \mid q_n=(q_n^c,q_n^b),\; n=0,1,\ldots,N-1\},
\]
where \(q_n^c \in \mathbb{R}^D\) is the query content and \(q_n^b \in \mathbb{R}^4\) is the query box represented by center coordinate, width, and height [PAGE 4]. The source quotes: “where the query content qcn ∈ RD is a feature vector with dimensionality D, and the query box qbn ∈ R4 is represented by the center coordinate, width and height” [PAGE 4]. Units: \(q_n^b\) may be normalized coordinates in \([0,1]^4\) or pixel coordinates; in either convention, IoU computations are dimensionless because pixel-area units cancel. \(D\) is a dimensionless feature dimension.

2. Multi-scale backbone features.  
Let \(F=\{f_s \mid s=0,1,\ldots,S-1\}\) be multi-scale feature maps from the template image [PAGE 5]. Spatial average pooling produces
\[
\hat f_s = \operatorname{AvgPool}(f_s).
\]
The source states this directly as “\hat fs = AvgPool(fs)” [PAGE 5]. Units: if the backbone activations are treated as abstract scalar features, \(\hat f_s\) has the same activation units; after normalization, it can be treated as a dimensionless feature vector. The template long side is resized to 400 pixels before backbone entry [PAGE 8], so the spatial input is measured in pixels.

3. Template-to-query content binding.  
For query index \(n\), the content is assigned by modular indexing:
\[
q_n^c = \hat f_{n \bmod S}.
\]
The source states: “qcn = \hat fn mod S” [PAGE 5]. Here \(n\) is a dimensionless integer index, and \(S\) is the number of scales. In the implementation, \(S=4\) [PAGE 8]. This operator replaces learned query contents with template-derived contents. Breakdown regime: if \(S=1\), all queries receive one pooled template vector, removing scale diversity. The ablation shows that moving from one scale to four scales improves overall mAP from 35.9% to 47.9% and MOTA from 19.3% to 27.8% [PAGE 11].

4. Annotation set and dynamic binary labels.  
Let
\[
A=\{a_k \mid a_k=(b_k,c_k),\; k=0,1,\ldots,K-1\},
\]
where \(b_k \in \mathbb{R}^4\) is a bounding box and \(c_k \in \mathbb{Z}\) is a category identifier [PAGE 5]. A template category \(\hat c_t\) is sampled from the available category identifiers. The dynamic annotation set is
\[
A^{\hat c_t}=\{a_k^{\hat c_t} \mid a_k^{\hat c_t}=(b_k,\mathbf{1}_{c_k,\hat c_t}),\; k=0,1,\ldots,K-1\},
\]
with indicator
\[
\mathbf{1}_{c_k,\hat c_t}=
\begin{cases}
1, & c_k=\hat c_t,\\
0, & c_k\neq \hat c_t.
\end{cases}
\]
The source defines this indicator explicitly [PAGE 5]. Units: labels are dimensionless binary values. This converts a multi-category detection annotation into a two-category positive/negative task.

5. Multi-template query concatenation.  
For template categories \(\{\hat c_0,\hat c_1,\ldots,\hat c_{T-1}\}\), the corresponding query groups are
\[
\{Q^{\hat c_0},Q^{\hat c_1},\ldots,Q^{\hat c_{T-1}}\}.
\]
The source says the groups “contain a total number of N × T object queries, which are concatenated and fed into transformer for object detection within once forward” [PAGE 5]. The default number of templates is \(T=7\) [PAGE 8]. Cross-group visibility is blocked by an attention mask: “the object queries in different groups cannot see each other” [PAGE 5]. Formally, if \(g(i)\) denotes the template group of query \(i\), the self-attention mask satisfies
\[
M_{ij}=1 \text{ iff } g(i)=g(j),
\]
and \(M_{ij}=0\) otherwise. Units: mask entries are dimensionless binary indicators.

6. Tracking queries from previous boxes.  
Let \(B=\{\hat b_m \mid m=0,1,\ldots,M-1\}\) be tracked boxes from the previous frame. The additional tracking query set is
\[
\hat Q = \hat Q_0 \cup \hat Q_1 \cup \cdots \cup \hat Q_{S-1},
\]
where
\[
\hat Q_s = \{\hat q_{s,m} \mid \hat q_{s,m}=(\hat f_s,\hat b_m),\; m=0,1,\ldots,M-1\}.
\]
This matches the source formulation [PAGE 5]. Units: \(\hat b_m \in \mathbb{R}^4\) is a box; \(\hat f_s\) is a pooled template feature vector. The number of tracking queries scales as \(M\cdot S\). If \(M\) is small, the claim that Tracking-by-Query adds few queries is valid; if \(M\) becomes large, query count and decoder compute grow linearly with \(M\).

7. Box matching and acceptance.  
For each previous tracked box \(\hat b_m\), the model obtains \(S\) candidate outputs \(\{\hat q_{0,m},\ldots,\hat q_{S-1,m}\}\). The selected scale is
\[
s^* = \arg\max_s \operatorname{IoU}(\hat q_{s,m}^b,\hat b_m).
\]
The standard intersection-over-union operator is
\[
\operatorname{IoU}(B_i,B_j)=\frac{|B_i\cap B_j|}{|B_i\cup B_j|}.
\]
IoU is dimensionless and lies in \([0,1]\). The source states that the box with largest IoU is selected and kept only if its classification score exceeds a predefined confidence threshold [PAGE 6]. If the score does not exceed the threshold, “the corresponding object is treated as a disappeared object” [PAGE 6].

8. Non-maximum suppression as association substitute.  
The paper replaces complex data association with NMS. The source states that “The complex data association is replaced with the much simpler Non-Maximum Suppression (NMS)” [PAGE 1]. In the implementation, “the NMS threshold is set to 0.5 to remove the duplicated detection boxes” [PAGE 8]. A formal suppression condition is
\[
d_i \text{ is suppressed if } \exists m \text{ such that } \operatorname{IoU}(d_i,\hat b_m) > \theta_{\mathrm{NMS}},
\]
with \(\theta_{\mathrm{NMS}=0.5}\). The threshold is dimensionless. Breakdown regime: if detections and tracked boxes are densely overlapped, a fixed IoU threshold can either remove true new detections or fail to remove duplicates.

9. Training loss.  
The overall training loss is given by the source as
\[
L = \frac{1}{T}\sum_{t=0}^{T-1}
\left(
L_H(A^{\hat c_t},\hat A Q^{\hat c_t})
+
\frac{1}{S}\sum_{s=0}^{S-1}
L_R(A^{\hat c_t},\hat A \hat Q^{\hat c_t}_s)
\right).
\]
The source explicitly provides this equation [PAGE 7]. Units: \(L\) is a scalar dimensionless loss. \(L_H\) is the Hungarian detection loss, and \(L_R\) is the reconstruction loss used for noisy tracking queries. The source notes that “while computing the loss, the ground-truth boxes without noise are used” [PAGE 7].

10. Computational accounting and breakdown.  
The source reports for Siamese-DETR with Swin-T: 47.6 M parameters, 267.3 G FLOPs, and 86.6 ms inference time [PAGE 8]. Converting to SI time units: \(86.6\ \mathrm{ms}=0.0866\ \mathrm{s}\). Tracking-by-Query is reported at 2.2 ms excluding detection, or \(0.0022\ \mathrm{s}\) [PAGE 8]. If a video has \(N_f\) frames and the template is processed once, the amortized extra cost is approximately
\[
C_{\mathrm{video}} \approx N_f C_{\mathrm{frame}} + C_{\mathrm{template}},
\]
and the per-frame amortized template cost is \(C_{\mathrm{template}}/N_f\). The source states that extra template/text processing costs are negligible when the number of frames is large enough [PAGE 8]. Breakdown regime: if \(N_f\) is small, template processing is not negligible.

11. Query-denoising breakdown quantities.  
The paper evaluates average confidence score and average IoU between predicted boxes and ground-truth boxes when ground-truth boxes are used as query boxes [PAGE 12]. With no denoising, Avg. IoU is 0.021 and Avg. Conf. is 0.101; with optimized denoising, Avg. IoU rises to 0.730 and Avg. Conf. rises to 0.426 [PAGE 12]. These are dimensionless probability-like scores or IoU values. The breakdown regime is clear: without denoising adapted to template-image tracking, the model fails to learn robust box refinement under pseudo-tracking conditions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage of Siamese-DETR is layered. The deepest layer is generic multi-object tracking, introduced to move beyond closed-set categories. The source notes that traditional MOT is limited to pre-defined categories and that Generic MOT “tries to track objects of arbitrary categories” [PAGE 1]. Within Generic MOT, the paper distinguishes Open-Vocabulary MOT and Template-Image-based MOT. Open-Vocabulary MOT depends on text prompts and vision-language models, while Template-Image-based MOT depends on a visual exemplar. The source states that Open-Vocabulary methods require expensive pre-trained language or vision-language models and fine-grained annotations, whereas Siamese-DETR requires only common detection datasets such as COCO [PAGE 1][PAGE 3].

The scientific lineage then passes through single-object tracking. Early TIMOT methods used SVMs and hand-crafted features, maintaining identities through dedicated per-object classifiers [PAGE 1][PAGE 3]. The more recent TIMOT baseline used a Single Object Tracking detector, specifically GlobalTrack, followed by MOT data association such as SORT, DeepSORT, or IOU [PAGE 2][PAGE 3]. Siamese-DETR’s break from this lineage is to make detection and tracking query-native. Instead of a separate detector and associator, it uses detection queries for new objects and tracking queries for prior boxes. The source summarizes that “the detection and tracking are performed simultaneously” [PAGE 2].

A second lineage is DETR. DETR introduced object queries and Hungarian loss, abandoning anchors and NMS in training [PAGE 3]. Deformable-DETR enabled multi-scale deformable attention. DAB-DETR decoupled queries into content and box components. DN-DETR introduced query denoising to stabilize matching. DINO introduced mixed query selection. Siamese-DETR inherits the decoupled query representation from DAB-DETR, the multi-scale setting from Deformable-DETR, and denoising from DN-DETR, but changes the query content source: template-image features replace learned category embeddings [PAGE 3][PAGE 4].

The multi-week traps in this lineage are concrete. First, a researcher may assume that a closed-set DETR detector can be adapted to TIMOT merely by filtering categories after detection. The paper tests this manually and shows that such adaptation remains weak; Siamese-DETR outperforms manually filtered closed-set detectors by large margins [PAGE 9][PAGE 10]. Second, a researcher may assume that classical MOT trackers such as ByteTrack or BoT-SORT can be transplanted without retuning. The source reports that directly using parameters tuned for MOTChallenge on GMOT-40 produces very poor tracking performance, with negative MOTA, and even after tuning these trackers lag behind TbQ [PAGE 10]. Third, a researcher may assume that original query denoising can be used unchanged. The paper identifies conflicts: positive/negative samples are dynamic, and a positive box paired with a negative content should not be treated as positive under template-image semantics. The optimized denoising fixes this by pairing noisy boxes with positive template contents [PAGE 6]. Fourth, a researcher may assume that more fine-grained category annotations always help the proposed method. The ablation shows that LVIS, despite finer categories, does not improve Siamese-DETR over COCO because it has fewer training images; Objects365 helps because of larger data volume [PAGE 12]. Fifth, a researcher may assume that template identity features alone solve association under occlusion. The paper’s limitations section warns that without appearance cues, occlusion can cause tracking failure, higher IDSw, and lower IDF1 [PAGE 14].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind for this system can be expressed as an online state update. At frame \(t\), the tracker observes image \(I_t\), template-derived query contents \(Q_c\), and previous tracked boxes \(B_{t-1}\). It produces detection boxes for new or missed objects and tracking boxes for existing objects. The source describes the previous-frame boxes as “additional query boxes” and states that “Object queries with tracked boxes and learned boxes are responsible for tracking and detection respectively and independently” [PAGE 2]. This creates a dual-channel mind: one channel infers new objects from template semantics, while the other channel preserves prior objects through geometric continuity.

Crisis habit regression occurs when the current frame contains occlusion, dense overlap, or appearance distractors. The model’s learned habit is to refine a previous box around the expected object region. If the previous box is partially occluded, the decoder may regress toward a merged region, a false positive, or a missed object. The paper’s failure cases show that heavily overlapped objects can cause missed detections or tracking failures, while similar-looking objects can cause false positives [PAGE 14]. This is a habit regression because the model has learned from static images and pseudo-tracking noise, not from real annotated video trajectories. When the test-time distribution shifts from clean COCO-like appearance to crowded GMOT scenes, the model may default to the nearest familiar pattern rather than maintaining a robust identity hypothesis.

Counter-traps are built into the architecture. The first counter-trap is multi-scale query content. By pooling template features across scales, the model prevents the query content from being tied to a single object size. The ablation shows that four scales outperform one scale, especially for small, medium, and large objects [PAGE 11]. The second counter-trap is dynamic matching training. By treating same-category objects as positive and other objects as negative, the model learns to reject distractors rather than merely localize all plausible objects. The third counter-trap is optimized query denoising. It forces the model to learn tracking as box refinement under controlled noise, but with positive template content paired with noisy boxes, avoiding category-content conflicts [PAGE 6]. The fourth counter-trap is group attention masking. It prevents different template categories from interfering during multi-template training and prevents detection queries from contaminating tracking queries during inference [PAGE 5][PAGE 6].

The clock is the causal frame loop. GMOT-40 videos are evaluated at 24 to 30 FPS [PAGE 7]. The tracker has no future frames; it uses only information up to the current frame. This makes the previous box the only temporal state explicitly carried into the next frame. If the frame rate is high relative to object motion, the previous box remains close enough for refinement. If object motion is fast, non-rigid, or erratic, the previous box becomes stale. Because TbQ does not use Kalman filtering, appearance cues, or hierarchical matching [PAGE 8], the clock imposes a hard constraint: temporal identity persistence depends on short-term geometric continuity and template semantic acceptance. The recursive mental model therefore is: “Given the prior box, refine it; if refinement is semantically valid under the template, keep it; otherwise declare disappearance and let detection queries recover the object.” This policy is simple, but under crisis conditions it can either overcommit to a stale box or undercommit to a newly reappearing object.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto proof concerns physical, biomechanical, and weather-related constraints that invalidate any claim of reliable template-image tracking under severe appearance or motion stress.

Physical veto 1: projection overlap.  
Objects in a video are represented by two-dimensional boxes. If multiple interested objects overlap heavily, their projected pixels share boundaries and interior regions. The model receives template-derived semantic content but no instance-specific appearance embedding for the current object. The source identifies this exact failure: “Siamese-DETR fails to detect/track objects when they are highly overlapped with each other” [PAGE 14]. Formal veto: if the visual evidence for object \(A\) is not separable from object \(B\) at the current resolution, then the posterior probability of assigning a box to the correct identity is not guaranteed by template content alone. Therefore, any prediction that the tracker must uniquely resolve heavily overlapping instances without additional cues is vetoed.

Physical veto 2: small-object resolution.  
GMOT-40 contains objects that are much smaller than typical COCO objects, and the source notes that DETR-based detectors cannot handle small objects well [PAGE 10]. Siamese-DETR mitigates this with multi-scale query contents, but multi-scale pooling cannot create spatial detail that is absent from the input image. If an object occupies only a few pixels, the backbone feature vector may not contain enough discriminative evidence. The ablation shows that scale matters: four scales improve small-object mAP from 11.0% to 23.3% [PAGE 11]. This confirms that scale helps, but it also confirms that physical resolution is a limiting layer. Any claim that the tracker can maintain identity for sub-threshold objects regardless of pixel area is vetoed.

Biomechanical veto: non-rigid deformation.  
The query box is a rectangular representation. The source categories include animals, insects, balls, balloons, boats, cars, fish, persons, and stocks [PAGE 12]. Several of these categories involve articulated or deformable motion. A rectangular box may poorly approximate the current silhouette of an articulated object. TbQ uses previous boxes as geometric anchors and does not use appearance cues [PAGE 14]. Therefore, if non-rigid deformation causes the object’s visual support to move outside the refinement basin of the previous box, tracking can fail. The source’s limitation statement directly supports this: absence of appearance cues may result in tracking failure when occlusion happens [PAGE 14]. Biomechanical veto: non-rigid deformation can invalidate box-based temporal continuity unless appearance or motion models compensate.

Weather veto: visibility degradation.  
Urban Track contains outdoor videos [PAGE 7]. Outdoor scenes can suffer from rain, fog, snow, glare, or low illumination. These conditions reduce contrast and edge evidence. The model’s template-derived query content is extracted from a clean template crop, often from the first frame. If current-frame appearance is degraded, the semantic match between template content and current evidence becomes weaker. Since TbQ lacks appearance cues and relies on box refinement plus classification score, a weather-induced drop in detection score can cause the tracker to declare an object disappeared. Formal veto condition: if the weather-degraded feature similarity produces a classification score below the predefined confidence threshold, the object is rejected even if physically present [PAGE 6]. Because the threshold is a decision boundary, adverse weather can force false disappearance. Therefore, any claim of robust tracking under severe visibility loss is vetoed unless additional appearance, motion, or re-identification cues are introduced.

Cross-layer adjudication result:  
The architecture is strong under clear appearance, moderate scale variation, and short-term box continuity. It is vulnerable when physical projection overlap, small-object resolution, non-rigid deformation, or weather-induced visibility loss exceed the discriminative capacity of the template-derived query content. These are not arbitrary failure modes; they follow from the source’s own design choices and stated limitations [PAGE 14].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following counterfactual veto scenarios are verifiable from the paper’s ablations and tables. Each scenario predicts a measurable change if the proposed component is removed or weakened.

Scenario 1: Remove optimized query denoising.  
Counterfactual: train the model without the optimized query denoising, or replace it with the original query denoising.  
Verifiable prediction: the model’s box refinement under pseudo-tracking collapses. With no query denoising, Avg. IoU with ground-truth boxes is 0.021 and Avg. Conf. is 0.101; with optimized denoising, Avg. IoU rises to 0.730 and Avg. Conf. rises to 0.426 [PAGE 12]. MOTA also rises from 27.8% without denoising to 35.9% with optimized denoising [PAGE 12]. Veto: any claim that tracking-by-query can be learned from static images without optimized denoising is vetoed by the observed drop in box refinement and tracking accuracy.

Scenario 2: Reduce multi-scale object queries from four scales to one scale.  
Counterfactual: keep all other components fixed but use only one template feature scale.  
Verifiable prediction: detection and tracking degrade, especially for small objects. The ablation reports that moving from one scale to four scales increases overall mAP from 35.9% to 47.9%, overall mAR from 28.4% to 43.5%, MOTA from 19.3% to 27.8%, small-object mAP from 11.0% to 23.3%, medium-object mAP from 37.7% to 45.9%, and large-object mAP from 42.3% to 55.4% [PAGE 11]. Veto: any claim that a single template feature scale is sufficient for generic multi-object tracking across scale diversity is vetoed.

Scenario 3: Replace Tracking-by-Query with SORT on the same Siamese-DETR detector.  
Counterfactual: keep Siamese-DETR Swin-T detection results fixed, but use SORT instead of TbQ for association.  
Verifiable prediction: MOTA decreases from 35.9% with TbQ to 30.1% with SORT, while IDF1 decreases from 42.8% to 34.7% [PAGE 9]. FP changes from 504 to 235, FN changes from 666 to 943, and IDSw changes from 11,664 to 29,518 [PAGE 9]. Veto: any claim that classical data association is superior to the simplified query-based association under this detector and benchmark is vetoed by the lower MOTA and IDF1 of SORT.

Additional corroborating counterfactual: reduce template count from seven to one.  
Verifiable prediction: mAP drops from 54.9% to 47.9%, and MOTA drops from 27.8% to 23.4% when training with one template instead of seven [PAGE 11]. This supports the claim that dynamic matching benefits from reusing annotations under multiple template identities.
---
source: "arxiv_2103.08808v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 10079
---

<NATIVE_REASONING>
We need answer to user. User request is bizarre: "DRIVE SOURCE: ... PAGES: 10 SOURCE TEXT: ..." then a paper text. They likely expect a response in specified format? But no explicit question except implicit maybe analyze? The developer instructions: "You are the GSE + GSI Frontier Reasoning Foundry. STRICT INVARIANTS: 1. ZERO BETTING LINES... 2. ZERO TOY EQUATIONS... 3. >=1000-WORD DEPTH across exact XML sections..." Then user provides source. We must produce answer likely using those sections. Need comply: >=1000 words, exact XML sections: <THINK_TRACE>...</THINK_TRACE> etc. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. But no question. Maybe they want a report on TraDeS? We need infer: maybe analyze source for frontier reasoning foundry, no betting lines. Need produce a deep analysis of paper with sections. Must not mention odds/spreads etc. Need avoid fake equations? Use formal LaTeX from paper. Need >=1000 words total across sections? It says >=1,000-WORD DEPTH across these exact XML sections. We need make each section? Probably total >=1000. Need include page citations [PAGE N] and verbatim quotes. Need formal equations. We need maybe focus on multi-object tracking, cost volume, DCN, data association, failure regimes. Since no explicit task, maybe generate a "source-driven technical dossier". Need ensure exact XML tags. Need no other text outside? Could have only sections.

Need think in same language as user's request? User in English. Use English. Need satisfy final oververbosity 9. Need maybe 2000-3000 words. Need exact section names. Include LaTeX equations maybe display. Need cite pages: [PAGE 1], [PAGE 2], etc. Verbatim quotes exact. Need avoid source citation missing. Need formal units: embeddings dimensionless? Similarity units? Cost volume entries dot product of 128-dim embeddings; if embeddings not normalized, units are arbitrary (embedding units)^2? Need be careful: Eq. 1: C_{i,j,k,l}= e'^t_{i,j} e'^t−τ⊤_{k,l}. If embeddings are vectors in R^128, dot product scalar with units U_e^2 if embedding units U_e. They don't normalize; softmax temperature 5 makes dimensionless likelihood. Tracking offset O: units pixels (feature map coordinates times stride s=8 px/stride?). Eq. 2: M=(l-j)*s; V=(k-i)*s, s=8 pixels per stride. O_{i,j} = [C_H^T V, C_W M^T]^T; units pixels. Up sample to O_C in R^{H_F×W_F×2}, units pixels. DCN input offset O_D: units pixels at feature resolution? DCN samples previous feature with offset, likely feature stride units? Need mention assumptions.

Need discuss singularity/breakdown regimes: low texture, background dominance, softmax saturation, high motion beyond search range HC/WC, occlusion, repeated patterns, temperature too low/high, large displacements > feature map span, frame rate low, class imbalance, track rebirth, detection threshold. Exact singularity: cost volume all-zero? Y_{ijkl}=1 only for positive pairs; focal loss α terms. If CW or CH approach zero for positives, log singular? Softmax with temperature 5; if all similarities equal, outputs uniform, offsets zero? If motion exceeds ±H_C/2? Actually cost volume maps C_{i,j} HC×WC; max pooling yields likelihood over all previous locations; offsets can be up to (W_C-1-j)*s horizontally, etc. For object at edge, max offset truncated. If no positive (new object/background), Y all zero, loss zero, no gradient? Need mention.

Need include cross-layer veto adjudication: Physical/biomechanical/weather veto proof. This is weird but we can apply to autonomous driving tracking: low FPS nuScenes 2 FPS, motion blur, occlusion, class imbalance. Need veto if physical constraints impossible: maximum displacement per labeled frame interval given speed and sensor geometry; feature stride 8; receptive field? Need formal proof: if true object displacement Δx > half feature map or outside C_{i,j} search support? Actually C covers whole previous feature map but downsampled: possible displacements limited by grid resolution and boundary. If object leaves frame or motion > mapped grid? Cost volume still can map if displacement within feature map; if beyond feature map, missing. For low frame rate 2 FPS, vehicle speed 50 km/h = 13.9 m/s, over 0.5s = 6.9m; at depth 30m with focal length ~1250 px, pixel shift ~287 px, stride 8 => 36 feature cells; if H_C? For nuScenes image 448x800, H_F=112, W_F=200, downsample H_C=56, W_C=100; vertical shift 36 within, but near edges maybe. Need exact proof: if |Δx| > (W_C-1-j)*s or |Δy| > (H_C-1-i)*s, C_{i,j} cannot represent offset to previous center because previous point outside image/feature grid; MFW cannot recover. For large motion, tracking offset based on appearance cost volume may still work within frame; but if object leaves frame, no propagation. Need maybe use no invented numbers? We can derive formulas with variables. Need avoid toy equations? Formal okay.

Need recursive theory of mind: Crisis habit regression vs counter-trap vs clock. We can interpret model failure under low frame rate/crisis; habits: baseline predicts offset from single frame (OB) maybe regresses to zero/mean motion under unseen large motion; counter-trap: CVA uses appearance similarities; clock: temporal horizon T=2; if T=1 maybe less. Need discuss. Need crisis habit regression: under crisis (low frame rate, blur, occlusion) detectors regress to common patterns or miss; TraDeS counter-trap: propagate previous legible features; clock: number previous frames T, runtime. Need mention Tab 1d: T=2 best, T=3 no better, breakdown. Need verbatim quote? "we find that we achieve the best speed-accuracy trade-off when T = 2." [PAGE 6? Actually page 6 text at end: "achieve the best speed-accuracy trade-off when T = 2." on page 6? Let's check: Page 6 includes table and after text: "achieve the best speed-accuracy trade-off when T = 2." yes [PAGE 6]. Need cite.

Need source operators and equations: include all key equations from paper: Eq 1, Eq 2, Eq 3, Eq 4, Eq 5, Eq 6, loss L= L_CVA + L_det + L_mask. Need units and assumptions, breakdown.

Need retro-causal genealogy: lineage from CenterNet/CenterTrack, cost volume in stereo/flow, deformable conv, re-ID, TBD/JDT, MOTA metrics. Multi-week traps: confusing detection standalone with tracking; using cross-entropy re-ID degrades detection; using only f_t - f_{t-1} without OC less effective; assuming low FPS same as high FPS; over-propagating T=3; ignoring class imbalance. Need cite pages: [PAGE 1] TBD/JDT issues, [PAGE 2] cost volume applied depth/flow, [PAGE 4] training and characteristics, [PAGE 6] ablation, [PAGE 7] benchmark.

Need maybe no betting lines. Ensure no odds. No toy equations? Avoid "Force / Fatigue". Use formal LaTeX. Need not say "odds".

Need exact XML sections. Could include within each section lots. Need total >1000 words. Let's target ~3000 words. Need ensure not too long? okay.

Need think about "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We must not invent fake ratios. We can state formal equations from paper. Need include units: pixel units, dimensionless probabilities, embedding units. For loss, log probabilities. Temperature 5 dimensionless. Focal loss α = (1-p)^β dimensionless. Need maybe mention no probabilities calibrated. Need singularity: softmax log if p=0 for positive; implementation avoids via max pooling? Actually CW and CH after softmax can be zero in exact math if logits -inf, but finite network outputs avoid exact zero. However focal loss log(CW) singular if CW=0 for positive. Need exact breakdown: if all previous frame similarities are equal and temperature finite, softmax uniform p=1/(W_C) or 1/H_C; offset expectation maybe zero if symmetric, not singular but motion ambiguity. If positive pair similarity dominated by background/repeated texture, offset wrong. If Y_{ijkl}=0 for all, L_CVA=0.

Need include "SI/information/probability units": For cost volume C: if embeddings are real-valued vectors with no physical units (dimensionless network activations), C entries have units of squared activation units; if L2-normalized, C ∈ [-1,1] dimensionless cosine-like but not normalized here. After softmax, CW, CH are probability masses over W_C or H_C positions, units probability per position; sum to 1. Offset templates M,V have units pixels. O expectation units pixels. Focal loss uses negative log-likelihood, dimensionless nats? Actually log of probability, loss dimensionless (nats if natural log). L_CVA average dimensionless; weighted sum. MOTA/IDF1 percentages dimensionless. Time ms. Need maybe include.

Need "exact singularity/breakdown regimes": Provide equations.

Potential final structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit. Need >=400 words. We can write ~700.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. ~900.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ~400.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ~400.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ~400.
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. ~400.
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe RLVR = reinforcement learning with verifiable rewards? Could be counter-factual vetoes for model? Need define verifiable. Scenarios: (1) set T=3 on nuScenes low FPS, expect no accuracy gain and higher latency per Tab 1d; (2) remove OC motion cue and use only f_t-f_{t-τ}, expect less FN reduction; (3) replace CVA with cross-entropy embedding, expect IDF1/IDS improve but MOTA degrade due FN. Need predictions and verifiable metrics. Also maybe physical veto: object displacement beyond feature map, expect failure. Need 3.

Need ensure exact page citations. Use [PAGE 1] etc. Verbatim quotes exact from source. Need be careful with typo: source has "ﬁ" ligature. We can quote with normal "fi"? Verbatim? Better preserve? It says verbatim quotes. We can copy exact as provided with ligatures? Might be okay. Use quotes like "TraDeS infers object tracking offset by a cost volume, which is used to propagate previous object features for improving current object detection and segmentation." [PAGE 1]. Need exact. Could include punctuation. Use exact from text.

Need maybe no citations for invented reasoning? Use source. Need formal equations from paper: They had malformed due PDF. Need reconstruct correct LaTeX.

Equations:
1. C_{i,j,k,l} = e'^t_{i,j} {e'}^{t-\tau\top}_{k,l}. Actually e'^t_{i,j} row vector 1x128 times e'^t−τ_{k,l}^T 128x1. C ∈ R^{H_C×W_C×H_C×W_C}. If embeddings are unnormalized, C has units u_e^2. If network outputs arbitrary real, no probability. 
2. M_{i,j,l}=(l-j)s, V_{i,j,k}=(k-i)s. s=8 [PAGE 4]. units pixel. 
3. O_{i,j}=[C_{i,j}^H^T V_{i,j}, C_{i,j}^W M_{i,j}^T]^T. Actually first vertical? Paper: O_i,j = [CH^T Vi,j, CW_i,j M_i,j^T]^T. Units px. 
4. L_CVA = -1/(sum Y_ijkl) sum_ijkl { α1 log(CW_{i,j,l}) + α2 log(CH_{i,j,k}) if Y=1; 0 otherwise}. α1=(1-CW)^β, α2=(1-CH)^β. Probability/log. Temperature 5 footnote. 
5. \bar f^{t-τ}_q = f^{t-τ}_q ∘ P^{t-τ}_{agn}. Units feature activation times heatmap [0,1]? P likely heatmap in [0,1]. 
6. \tilde f^t_q = w_t ∘ f^t_q + Σ_{τ=1}^T w_{t-τ} ∘ \hat f^{t-τ}_q, Σ_{τ=0}^T w_{t-τ,i,j}=1. w predicted by softmax, dimensionless. 
Overall L = L_CVA + L_det + L_mask [PAGE 5].

Need breakdown: Eq 1 singularity: if e'=0 then C=0; softmax uniform; tracking offset maybe expectation of templates under uniform. If temperature T=5 footnote: softmax(logits/5?) They say add temperature of 5 into softmax, such that more discriminative. Usually logits / temperature? If temperature 5 as multiplicative? They likely divide by 5? More discriminative means lower temp? Actually if logits multiplied by 5? Need not dwell. Say temperature parameter τ_s=5 dimensionless; if τ_s→0 hard max; τ_s→∞ uniform. Their choice moderate.

Need "gray-zone audit": distinguish detection vs tracking, appearance vs motion, local vs global association.

Need maybe mention "zero betting lines" no need mention.

Need ensure final answer only XML sections? The user likely expects those sections. We can output exactly. No preface. Need no Markdown? XML tags. Within can use LaTeX. Fine.

Let's draft.

Need word count. Let's produce maybe 3500 words. Need ensure each section substantial. We can include citations.

Potential final:

<THINK_TRACE>
We need audit paper's claim: tracking clues assist detection. Multi-hop: CenterNet baseline -> add offset head -> CVA cost volume -> embeddings -> tracking offset -> MFW DCN -> enhanced feature -> heads -> data association. Gray zones: appearance-based offset under low frame rate; compatibility of re-ID loss with detection; temporal aggregation T; dataset shift; metrics. The paper's central causal chain: CVA produces O_C; MFW uses O_C to warp features; enhanced feature recovers missed objects; fewer FN yields higher MOTA/IDF1. But not unconditional: if O_C wrong due appearance ambiguity, propagation can inject false features; if T too high, latency increases; if low frame rate large motion beyond grid, failure. We need formal break conditions.

Need include verbatim quotes: "tracking clues to assist detection end-to-end" [PAGE 1], "re-ID focuses on intra-class variance, but detection aims to enlarge inter-class difference and minimize intra-class variance" [PAGE 1], "cost volume ... stores matching similarities" [PAGE 3], etc.

SOURCE_OPERATORS_AND_EQUATIONS: include sections.

RETROCAUSAL_GENEALOGY: historical: SORT, DeepSORT, JDE, CenterTrack, FairMOT? cost volume from stereo/flow. Multi-week traps: if one starts from re-ID cross entropy, may degrade detection; if one uses TBD, expensive; if one only uses temporal difference, less. Need cite [PAGE 2], [PAGE 6].

RECURSIVE_THEORY_OF_MIND: Model as agents: detector, tracker, association. Crisis habit regression: baseline under low FPS regresses offset to zero? The paper says baseline cannot well predict offset with single image under low frame rate/large motion [PAGE 8]. Counter-trap: CVA appearance cost volume; clock: T. Recursive: detection improves tracking, tracking improves detection. Need mention Tab 1a: CVA reduces IDS by 60% and IDF1 +7.2; MFW reduces FN 1.5%; TraDeS reduces IDS 606 to 285, FN 29.5 to 27.8 [PAGE 6]. Need exact quote? "CVA: Compared to the baseline, the CVA achieves better tracking by reducing 60% IDS and improving 7.2 IDF1" [PAGE 6]. "MFW achieves better detection by reducing 1.5% FN" [PAGE 6]. Good.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need maybe define veto: if physical constraints make method impossible. Use equations: true displacement in pixels Δx = f X/Z etc. Need formal but not toy. We can state perspective projection: u = f X/Z + c_x, v = f Y/Z + c_y. For frame interval Δt, displacement approx ∂u/∂t Δt = (f/Z)(V_x - (X/Z)V_z) Δt etc. If |Δu| > (W_C-1-j)s or |Δv| > (H_C-1-i)s, previous center outside searched cost volume at current anchor; C cannot assign. For nuScenes 2 FPS, high speed, large displacement; if object leaves image, no evidence. Weather: blur/occlusion reduces current feature; MFW helps only if previous legible: quote "occluded and blurred objects in the current frame may be legible in early frames" [PAGE 2]. If all frames degraded, no recovery. Biomechanical? pedestrian motion maybe small relative to car? Need class-specific. Veto proof: If object center not in previous labeled frame or detection missing due to class imbalance? For pedestrian AMOTA low due class imbalance, not necessarily method. Need formal proof of breakdown.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need "verifiable RLVR veto scenarios + predictions". We can make them like: Veto A: ablation CVA vs CE embedding; prediction from Tab 1b: CE embedding with DA-Round(ii) improves IDF1/IDS but MOTA not improved due +1.1% FN; CVA improves detection and tracking. Veto B: motion cue OC vs only f_t-f_t-τ; prediction Tab 1c: OC reduces FN from 29.9 to 27.8 but FP increases 2.5 to 3.5; if OC absent, missed-object recovery weaker. Veto C: T selection; prediction Tab 1d: T=2 best trade-off; T=3 MOTA 67.5 lower than T=2 68.2 and time 70ms > 57ms. Also maybe low FPS dataset T=1 due low frame rate. Need verifiable: run ablations on MOT17 val, nuScenes, etc. Predictions exact.

Need no betting. Good.

Need maybe mention "SI/information/probability units" in equations section. Need include "assumptions". Need maybe state "network activations are dimensionless unless otherwise calibrated". Need "exact singularity/breakdown regimes" maybe bullet list with equations.

Potential issue: The final answer must be >=1,000 words. We'll ensure. Need maybe count roughly. Let's draft long.

Need be careful with LaTeX in XML. Could use \(...\) or display. Fine.

Let's write final with sections. Ensure no extra text. Need maybe include [PAGE N] many. Need exact quotes. Let's verify quotes:
- "TraDeS infers object tracking offset by a cost volume, which is used to propagate previous object features for improving current object detection and segmentation." [PAGE 1]
- "The reason is that re-ID focuses on intra-class variance, but detection aims to enlarge inter-class difference and minimize intra-class variance." [PAGE 1]
- "the cost volume is employed to" page 1/2? Actually sentence split: Page 1 ends "In the CVA module, the cost volume is employed to su" Page 2 starts "pervise the re-ID embedding..." We can quote from Page 2: "pervise the re-ID embedding, where different object classes and background regions are implicitly taken into account." But that's fragment. Better use Page 1: "the cost volume technique has been successfully applied in depth estimation [11, 55, 18] and optical flow estimation [35, 10, 53] for associating pixels between two frames." [PAGE 2]. Good.
- "The occluded and blurred objects in the current frame may be legible in early frames, so the propagated features from previous frames may support the current feature to recover potentially missed objects by our MFW module." [PAGE 2]
- "Because the tracking offset is predicted based on appearance embedding similarities, it can match an object with very large motion or in low frame rate" [PAGE 2]
- "we achieve the best speed-accuracy trade-off when T = 2." [PAGE 6]
- "the baseline cannot well predict the tracking offset OB with a single image in case these datasets are of low frame rate and large motion." [PAGE 8]
- "Compared to the baseline, the CVA achieves better tracking by reducing 60% IDS and improving 7.2 IDF1" [PAGE 6]
- "the MFW also reduces 43% IDS and improves 6.2 IDF1" [PAGE 6]
- "the tracking offset OC from CVA guides the feature propagation in MFW, which signiﬁcantly decreases FN from 29.5% to 27.8%." [PAGE 6]
- "CE embedding cannot improve MOTA as detection performance is degraded (+1.1% FN)" [PAGE 6]

Need maybe quote table values? Not necessary.

Potential concern: "ZERO BETTING LINES" no mention. Fine.

Need ensure "Never invent fake ratios". We can quote paper ratios? They are empirical, not fake. Avoid making our own ratios. But can use equations.

Need maybe mention "MOTA" formula? Not necessary, but formal? Could define MOTA = 1 - (FN+FP+IDS)/GT? That's standard, not fake? But could be considered equation. We can mention as evaluation units, but not necessary. If include, ensure correct: MOTA = 1 - (FN + FP + IDS)/GT. But source doesn't give formula; might be okay but not source. To avoid toy, maybe don't.

Need think about "SI/information/probability units" maybe include loss in nats. Softmax probabilities dimensionless; log loss dimensionless. Feature maps activation units maybe arbitrary. Time ms.

Need include "exact singularity/breakdown regimes" maybe in Source Operators section after equations:
- Eq. 1 singular if e'=0 or all embeddings identical: C constant; softmax uniform; offset is mean of templates. 
- Eq. 4 singular if C_W=0 or C_H=0 for Y=1 (log 0); finite network avoids but if underflow, gradient explosion/zero. 
- Eq. 3 if likelihood mass splits between two symmetric positions, expectation is average, possibly between objects (ghost offset). 
- Eq. 6 if weights sum to one but w_t near zero and propagated features stale, current missed object not recovered; if w_t too high, ghost propagated objects. 
- DCN sampling outside previous feature map uses padding/zeros; if offset maps outside, feature missing. 
- Data association threshold 0.3: if similarity below, new tracklet; if threshold too low, ID switches; too high, fragmentation. Need cite [PAGE 5].

Need maybe include "assumptions": frames are consecutive? They use labeled frames only; during inference previous T consecutive labeled frames. In training randomly select T out of nearby R_t. [PAGE 5]. Assumption: object appearance stable enough for embedding similarity; feature stride s=8; input sizes. Need mention.

Need maybe mention "multi-week traps": if deploying in low FPS autonomous driving, assuming MOT high FPS calibration invalid; if using cross-entropy re-ID, detection degradation; if ignoring class imbalance, pedestrian tracking poor. Need cite.

Need final answer with XML only. Ensure no invalid XML due LaTeX underscores? Fine. Could use CDATA? Not necessary. But XML parsers might choke on < > in LaTeX? We can use &lt;? In final answer, likely plain text. But to be safe, avoid raw < in equations except tags. Use \(...\) with < for less than? Could use \lt. Use 	extless? For inequalities use \lt or 	extless. For \top no issue. For summation no issue. For \le maybe use \leq. No raw <. For vector transpose use ^\top. For \in no issue. For > use \gt maybe. Avoid raw < >. For tags only.

Need maybe include [PAGE N] markers. Fine.

Let's compose final.

Need check word count roughly. THINK_TRACE ~650, SOURCE ~1000, RETRO ~450, ToM ~450, VETO ~500, RLVR ~450 = 3500. Good.

Let's draft carefully.

THINK_TRACE: Need deep multi-hop derivation & gray-zone audit. Could include step-by-step.

Potential text:
"The paper's central operator chain is ... I treat TraDeS as a stochastic map from image pair to tracklets. The first causal hop is embedding extraction; second is cost volume; third is marginalization; fourth is DCN; fifth is head detection; sixth is association. The gray-zone is whether appearance-derived offset is valid under domain shift. The paper claims yes based on Fig 3/4, but only qualitative. The quantitative evidence is ablations. The causal attribution to FN reduction requires OC; Tab 1c. The compatibility of re-ID with detection is argued by cost volume supervision involving inter-class variance. However, the loss only supervises positive pairs Y=1; background/repulsion emerges via softmax normalization but no explicit negative logits. If positives rare, gradient sparse. The data association two-round: first geometric around (i,j)+O_C; second cosine embedding threshold 0.3. This can fail under similar identities."

Need include "gray-zone audit": low frame rate vs large motion; baseline single-image offset fails; appearance offset can work if appearance stable; if low texture/repetitive, fail. T=2. Also detection/segmentation tasks.

SOURCE_OPERATORS: Let's write formal.

Need ensure "SI/information/probability units" explicitly:
"Units: f and e are dimensionless network activations unless calibrated; C has units of activation^2; after softmax, C_W and C_H are probabilities; M,V,O in pixels; w dimensionless; loss in nats if natural log."

Need "assumptions" bullet.

Need page citations: [PAGE 2] for CenterNet, [PAGE 3] for CVA, [PAGE 4] for offset and training, [PAGE 5] for MFW and loss. Use exact.

Potential equations:
\[
C_{i,j,k,l}= e'^t_{i,j} (e'^{t-\tau}_{k,l})^\top,
\]
where e' in R^{H_C×W_C×128}. Actually e'^t_{i,j} is 1×128, e'...^top 128×1.

\[
C \in \mathbb{R}^{H_C 	imes W_C 	imes H_C 	imes W_C}
\]

Tracking offset:
\[
M_{i,j,l}=(l-j)s, \quad V_{i,j,k}=(k-i)s, \quad s=8.
\]
\[
O_{i,j} = \begin{bmatrix} C_{i,j}^{H\top} V_{i,j} \\ C_{i,j}^{W} M_{i,j}^\top \end{bmatrix}
\]
Wait dimensions: C_H is H_C×1, V is H_C×1; C_H^T V scalar. C_W is 1×W_C, M^T W_C×1 scalar. So O_i,j 2×1. Good.

Loss:
\[
L_{CVA}= -\frac{1}{\sum_{ijkl}Y_{ijkl}} \sum_{ijkl} Y_{ijkl} [\alpha_1 \log C_{i,j,l}^W + \alpha_2 \log C_{i,j,k}^H]
\]
with α. Need if Y=1. Actually source includes if Y=1 else 0; multiply by Y equivalent. Need mention Y_{ijkl}=1 iff object at (i,j) at t appears at (k,l) at t−τ. [PAGE 4]

MFW:
\[
\bar f^{t-\tau}_q = f^{t-\tau}_q \circ P^{t-\tau}_{agn}
\]
\[
\tilde f^t_q = w_t \circ f^t_q + \sum_{\tau=1}^T w_{t-\tau}\circ \hat f^{t-\tau}_q, \quad \sum_{\tau=0}^T w_{t-\tau,i,j}=1
\]
\[
L = L_{CVA}+L_{det}+L_{mask}
\]

Need "breakdown regimes": Include equations:
- If e'_{i,j}=0 or all e' equal: C_{i,j,k,l}=c_0. Softmax uniform: C^W_{i,j,l}=1/W_C, C^H=1/H_C. Then O_i,j = average of templates: horizontal = s( (W_C-1)/2 - j )? Actually M average: (1/W_C) Σ_l (l-j)s = s((W_C+1)/2 -1? If l=1..W_C, average l=(W_C+1)/2, so offset = s((W_C+1)/2 - j). vertical similarly. This is not necessarily zero unless center. This yields prior pull to image center. Good formal.
- If likelihood mass splits: C^W_{i,j,l1}=C^W_{i,j,l2}=0.5, offset average of positions; can fall between two objects.
- If true displacement outside feature grid: For current anchor (i,j), possible previous coordinates k∈{1,...,H_C}, l∈{1,...,W_C}; max vertical offset to previous coordinate is (H_C-i)*s or (i-1)*s? If object moves from previous to current, O points from current to previous. If previous coordinate outside [1,H_C], no cost volume entry. If true previous k* outside, cannot match. Formal: require 1 ≤ i + Δy/s ≤ H_C and 1 ≤ j + Δx/s ≤ W_C. If violated, C_{i,j} has no correct positive; Y all zero or wrong. Since C is built from all previous positions within image, object leaving frame impossible.
- If appearance ambiguity: C_{i,j,k,l} for wrong k,l > correct, argmax wrong; softmax temperature controls; if temperature high (less discriminative) wrong; if too low, sparse gradients? They use 5.
- If occlusion in both current and previous: \bar f^{t−τ} center attentive maybe zero if P low; propagated feature no support; MFW cannot recover.
- If T> available consecutive frames, only labeled frames; low frame rate large motion, T=1 used.

Need maybe include "exact singularity" log loss if probability exactly zero. Use \lim_{p\to0^+}.

RETROCAUSAL_GENEALOGY: Need multi-week traps. Could say "If a team starts from TBD, they may build separate detector and re-ID, incurring inefficiency and separate optimization [PAGE 1]. If they start from JDT with re-ID cross entropy, detection may degrade [PAGE 1, PAGE 6]. If they copy cost volume from stereo/flow, they must adapt to object centers and supervision; naive pixel matching fails due object motion and background. If they use temporal difference only, less effective than OC [PAGE 6]. If they increase T without measuring latency, runtime grows [PAGE 6]."

Need cite [PAGE 2] for cost volume history, [PAGE 1] for TBD/JDT, [PAGE 6] ablations.

RECURSIVE_THEORY_OF_MIND: Need "Crisis habit regression vs counter-trap vs clock." Could define:
- Crisis: low frame rate, large motion, occlusion/blur, unseen dataset.
- Habit regression: baseline detector/tracker regresses to common motion prior or misses; single-image offset O_B fails.
- Counter-trap: CVA uses cross-frame appearance to infer offset; MFW propagates previous legible features; two-round association uses embedding for long-term.
- Clock: T and frame interval; T=2 for MOT/MOTS, T=1 for nuScenes/Youtube-VIS due low frame rate; runtime trade-off.
Recursive: improved detection lowers FN, stable tracklets, better embeddings, better association. But false positives can propagate; threshold 0.3. Need mention "the paper states 'detection is the cornerstone for a stable and consistent tracklet'" [PAGE 1]. Quote? Page 1: "We argue that detection is the cornerstone for a stable and consistent tracklet, and in turn tracking cues shall help detection". Good.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. Let's write:
"Define a veto when the mathematical preconditions of CVA/MFW are violated." Use perspective projection:
\[
u = f_x \frac{X}{Z}+c_x,\quad v=f_y\frac{Y}{Z}+c_y.
\]
For small motion, pixel velocity:
\[
\dot u \approx \frac{f_x}{Z}(V_x - \frac{X}{Z}V_z), \quad \dot v \approx \frac{f_y}{Z}(V_y - \frac{Y}{Z}V_z).
\]
Over labeled interval Δt, displacement Δu≈\dot u Δt. At feature stride s=8, cell displacement δu=Δu/s. If |δu| > W_C-1 or etc? More exact relative to anchor. If previous center outside current cost volume support:
\[
j + \Delta u/s \notin \{1,\dots,W_C\} \lor i + \Delta v/s \notin \{1,\dots,H_C\}
\]
then no positive C entry. For nuScenes 2 FPS [PAGE 5], Δt=0.5 s. If car speed high, displacement can exceed support near frame boundaries. The paper acknowledges low frame rate/large motion for nuScenes and YouTube-VIS [PAGE 5]. Weather: blur/occlusion reduces current legibility; MFW only works if previous legible [PAGE 2]. If all T previous frames are degraded, no recovery. Biomechanical: pedestrian motion relative to ego car can be large due ego motion; if ego motion not compensated? TraDeS is monocular and doesn't explicitly ego-compensate? It uses appearance cost volume; if camera moving, background moves, but object appearance maybe stable; large global motion may burden cost volume. Need not overstate. Veto proof: If object appearance changes beyond embedding invariance (e.g., severe motion blur in previous frame), C similarity low; no offset. If class imbalance and detector threshold misses pedestrian, association cannot create track. Need cite class imbalance [PAGE 7] for nuScenes: "extreme class imbalance ... car and pedestrian has over 82% data" [PAGE 7]. But method not focus.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable scenarios. Could format as enumerated with Veto, formal condition, prediction, verification. Ensure no betting. Use "counterfactual veto" as scenarios that if true would falsify claim.

1. Re-ID objective veto: If common cross-entropy embedding improves IDF1 but degrades MOTA. Prediction from Tab 1b: CE embedding with DA-Round (ii) yields IDF1 64.3, IDS 671 but MOTA 64.5 and FN 32.1? Wait table: Baseline MOTA 64.8 IDF1 59.5; w/ DA-Round (ii) +CE embedding MOTA 64.5 IDF1 64.3 IDS 671 FN 32.1; +CVA MOTA 66.5 IDF1 66.7 FN 30.6. So prediction: CE cannot improve MOTA, degrades by 0.3 MOTA and +1.1% FN relative baseline. Quote: "CE embedding cannot improve MOTA as detection performance is degraded (+1.1% FN)" [PAGE 6]. Verification: MOT17 val ablation.

2. Motion cue veto: If OC not key, MFW with only f_t-f_t-τ should match OC. Prediction Tab 1c: TraDeS w/ f_t-f_t-τ only MOTA 67.1, FN 29.9, FP 2.5; w/ f_t-f_t-τ & OC MOTA 68.2, FN 27.8, FP 3.5. So OC reduces FN by 2.1 points, increases FP by 1.0, improves IDF1 from 68.8 to 71.7. Verification: same ablation. Quote: "the tracking offset OC is the key to reduce FN and recover more missed objects" [PAGE 6].

3. Temporal window veto: If more previous frames always help, T=3 should beat T=2. Prediction Tab 1d: T=1 MOTA 67.8 time 46ms; T=2 68.2 time 57ms; T=3 67.5 time 70ms. So T=3 fails accuracy and latency. Quote: "we achieve the best speed-accuracy trade-off when T = 2" [PAGE 6]. Verification: runtime on 2080Ti, MOT17 val. Also low FPS sets T=1 due low frame rate [PAGE 5].

Need maybe include "RLVR" as verifiable reward: metrics are verifiable. Good.

Need maybe include no "odds". Fine.

Let's ensure all sections are present and exact. Need maybe no extra closing. Final should be long. Let's write elegantly.

Double-check page numbers for quotes:
- Page 1: abstract quote, detection cornerstone, re-ID focuses.
- Page 2: occluded and blurred quote, cost volume history, large motion low frame rate.
- Page 3: CVA description? "we extract their re-ID embedding features" etc. But equations page 3/4.
- Page 4: s=8, equations, training, characteristics.
- Page 5: MFW equations, data association, loss.
- Page 6: ablations and T=2.
- Page 7: benchmark and class imbalance.
- Page 8: baseline cannot predict offset quote and conclusion.

Need maybe quote "only labeled frames are used as input" [PAGE 5]. Good.

Potential issue: In final, if we include raw & in LaTeX? XML might treat & as entity. Avoid raw &. Use 	ext{and}? Or use \&? In XML, & should be escaped. We can avoid & in equations. For text, use "and" not &. In LaTeX align, use \\ not &. Good.

Need avoid raw < in inequalities; use \lt, \gt. For set notation use \{1,\dots,W_C\}. Good.

Need maybe use \top; okay.

Need ensure no unescaped %? Fine.

Let's compose final.

One more thought: Developer says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We need cite for any source claim. We'll do. For formal equations, cite page. Good.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with exact page citations and breakdown. Good.

Let's draft final now. Ensure oververbosity 9. Use sections.

Potential word count: Let's produce ~3200. Need maybe not too massive but okay.

Start final:

<THINK_TRACE>
... 
</THINK_TRACE>

No markdown headings outside. Good.

Let's write.

</NATIVE_REASONING>

<THINK_TRACE>
The source document describes TraDeS as a closed-loop perception stack in which tracking is not merely a post-processing layer but an operator that changes the detection evidence field. The multi-hop causal chain is: input frame \(I_t\) → backbone feature \(f_t\) → embedding \(e_t\) → cost volume \(C\) → tracking offset \(O_C\) → deformable temporal propagation → enhanced feature \(\tilde f_t\) → detection, segmentation, and data association. This chain is the paper’s central theoretical claim: “TraDeS infers object tracking offset by a cost volume, which is used to propagate previous object features for improving current object detection and segmentation.” [PAGE 1]. The claim is not merely architectural; it is an information-flow claim: appearance similarity across time is converted into a spatial displacement prior, and that displacement prior is used to resample previous evidence into the current frame.

The first gray zone is the separation between motion evidence and appearance evidence. TraDeS does not estimate optical flow from raw image intensities. It estimates a point-wise displacement field from learned embeddings. Therefore, the validity of \(O_C\) depends on the embedding being temporally stable for the same object and discriminative against background or other objects. The paper explicitly acknowledges this design choice: “Because the tracking offset is predicted based on appearance embedding similarities, it can match an object with very large motion or in low frame rate” [PAGE 2]. This is a strong claim because low frame rate and large motion are exactly the regimes where conventional frame-to-frame motion models become brittle. The countervailing gray zone is that appearance embedding can fail under blur, occlusion, low texture, repeated patterns, or severe viewpoint change. In those regimes, the cost volume may still produce a numerically confident offset, but the offset may be semantically wrong. The paper’s qualitative visualizations in Fig. 3 and Fig. 4 support the claim in favorable cases, but the quantitative ablations are the stronger evidence.

The second gray zone is loss compatibility. The paper criticizes common re-ID losses because they emphasize intra-class compactness without explicitly enlarging inter-class separation, and it states: “The reason is that re-ID focuses on intra-class variance, but detection aims to enlarge inter-class difference and minimize intra-class variance.” [PAGE 1]. TraDeS attempts to resolve this by supervising the cost volume rather than supervising the embedding directly. The cost volume is normalized into horizontal and vertical likelihood maps, and the loss pushes the positive object match toward high probability while the softmax normalization implicitly repels other locations. This is a subtle point: the paper does not use a conventional explicit negative-sampling re-ID loss for every negative pair; instead, the softmax over all previous-frame positions makes the positive competition global within each row or column. This design is elegant because it aligns re-ID learning with dense detection heatmaps, but it also creates a failure mode: if many background positions have similar embeddings, the softmax mass can split, producing ambiguous offsets.

The third gray zone is temporal aggregation. The Motion-guided Feature Warper aggregates current and previous features using adaptive weights \(w\), with \(T\) previous features. The paper finds that \(T=2\) is best for MOT and MOTS, while \(T=1\) is used for low-frame-rate datasets such as nuScenes and YouTube-VIS. The exact statement is: “we achieve the best speed-accuracy trade-off when T = 2.” [PAGE 6]. This is important because it shows the method is not monotonically improved by longer temporal memory. More history can increase latency and may introduce stale or conflicting evidence. The gray zone is therefore not simply “more temporal context is better”; the correct regime is a balance between object persistence, frame rate, motion magnitude, and inference budget.

The fourth gray zone is the relationship between detection recovery and identity stability. The paper argues that detection is foundational: “We argue that detection is the cornerstone for a stable and consistent tracklet, and in turn tracking cues shall help detection” [PAGE 1]. The ablation supports this: MFW reduces false negatives by recovering missed objects, while CVA reduces identity switches. The combined system improves both detection-oriented metrics, such as FN, and tracking-oriented metrics, such as IDF1 and IDS. However, the causal attribution is not unconditional. If propagated features create false positives, detection precision can suffer. The paper’s tables show that FP can increase slightly when temporal propagation is aggressive. Thus the system operates in a precision-recall trade-off manifold: recovering missed objects is valuable only if the propagated evidence does not hallucinate objects.

The fifth gray zone is domain shift. The paper claims that TraDeS can track objects with unseen large motion in training, tested on nuScenes after training only on MOT. It states: “TraDeS successfully tracks objects with unseen large motion in training dataset, but baseline and CenterTrack fail.” [PAGE 7]. This is a strong generalization claim, but it is conditional on appearance similarity remaining reliable. In autonomous-driving settings, camera motion, weather, and class imbalance introduce additional stressors. The nuScenes evaluation is low frame rate, labeled at 2 FPS, and the paper notes that “nuScenes and YouTube-VIS are of low frame rate and large motion” [PAGE 5]. The system’s success in these regimes depends on whether the embedding can bridge appearance variation across large temporal gaps. If the embedding cannot bridge that gap, the cost volume becomes underdetermined and the method regresses toward the baseline failure mode: “the baseline cannot well predict the tracking offset OB with a single image in case these datasets are of low frame rate and large motion.” [PAGE 8].

In audit terms, the strongest support for TraDeS is not the raw benchmark numbers alone, but the ablation logic. The paper separates CVA, MFW, motion cue source, embedding loss type, and temporal depth. This allows a causal diagnosis: CVA improves association and reduces identity switches; MFW improves detection by reducing false negatives; the tracking offset \(O_C\) is the critical motion cue; and \(T=2\) is the empirical sweet spot for the high-frame-rate MOT setting. The gray-zone risk is overgeneralizing from these controlled ablations to all weather, sensor, and class-imbalance regimes. The paper itself acknowledges that class imbalance is not its focus in nuScenes: “There exists extreme class imbalance in nuScenes dataset, e.g., car and pedestrian has over 82% data.” [PAGE 7]. Therefore, pedestrian or rare-class failures may not be fully explained by the tracker’s motion module; they may also reflect detector calibration and dataset priors.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal operators can be reconstructed from the CenterNet/CenterTrack lineage and the TraDeS-specific modules. The base detector takes an image \(I \in \mathbb{R}^{H \times W \times 3}\) and produces a backbone feature \(f = \phi(I)\), where \(f \in \mathbb{R}^{H_F \times W_F \times 64}\), \(H_F = H/4\), and \(W_F = W/4\). A center heatmap \(P \in \mathbb{R}^{H_F \times W_F \times N_{\text{cls}}}\) is predicted, and object centers are peaks on this heatmap. This is the point-based detection assumption stated in the Preliminaries [PAGE 2].

The Cost Volume based Association module extracts re-ID embeddings:
\[
e_t = \sigma(f_t) \in \mathbb{R}^{H_F \times W_F \times 128},
\]
where \(\sigma(\cdot)\) consists of three convolution layers [PAGE 3]. The embeddings are downsampled by a factor of 2:
\[
e' \in \mathbb{R}^{H_C \times W_C \times 128}, \qquad H_C = \frac{H_F}{2}, \quad W_C = \frac{W_F}{2}.
\]
The 4-D cost volume is computed by a single matrix multiplication:
\[
C_{i,j,k,l} = e'^{\,t}_{i,j} \left(e'^{\,t-\tau}_{k,l}\right)^{\top},
\]
where \(C_{i,j,k,l}\) is the embedding similarity between point \((i,j)\) at time \(t\) and point \((k,l)\) at time \(t-\tau\) [PAGE 3]. Units and assumptions: if the embedding activations are treated as dimensionless network responses, then \(C_{i,j,k,l}\) has units of squared activation amplitude. If the embedding were L2-normalized, \(C_{i,j,k,l}\) would be a dimensionless cosine-like similarity in \([-1,1]\), but the paper does not state explicit normalization of \(e'\). Therefore, the safe formal interpretation is that \(C\) is an unnormalized similarity tensor whose scale is learned implicitly through the softmax and loss.

For an object centered at \((i,j)\), the 2-D cost map is \(C_{i,j} \in \mathbb{R}^{H_C \times W_C}\). It is max-pooled and normalized separately along horizontal and vertical axes:
\[
C^{W}_{i,j} \in [0,1]^{1 \times W_C}, \qquad C^{H}_{i,j} \in [0,1]^{H_C \times 1}.
\]
The paper states that \(C^{W}_{i,j,l}\) is the likelihood that object \(x\) appears at horizontal position \(l\) at time \(t-\tau\), and \(C^{H}_{i,j,k}\) is the corresponding vertical likelihood [PAGE 3]. These are probability-like objects: after softmax, each vector sums to one. The probability unit is dimensionless, but the interpretation is a categorical distribution over discrete previous-frame feature coordinates.

The offset templates are:
\[
M_{i,j,l} = (l-j)s, \qquad V_{i,j,k} = (k-i)s,
\]
for \(1 \le l \le W_C\) and \(1 \le k \le H_C\), where \(s\) is the feature stride with respect to the input image. The paper specifies \(s=8\) in their implementation [PAGE 4]. The units of \(M_{i,j,l}\) and \(V_{i,j,k}\) are input-image pixels. The final tracking offset is:
\[
O_{i,j} =
\begin{bmatrix}
C^{H\top}_{i,j} V_{i,j} \\
C^{W}_{i,j} M_{i,j}^{\top}
\end{bmatrix}.
\]
This is an expectation of displacement templates under the predicted likelihoods. If the likelihood is a Dirac mass at the true previous position, \(O_{i,j}\) equals the true displacement. If the likelihood is multimodal, \(O_{i,j}\) becomes a weighted average and may fall between modes. The offset matrix \(O \in \mathbb{R}^{H_C \times W_C \times 2}\) is upsampled by a factor of 2 to obtain \(O_C \in \mathbb{R}^{H_F \times W_F \times 2}\), which is used as a motion cue for the Motion-guided Feature Warper and for data association [PAGE 4].

The CVA training objective is a focal-style logistic loss on the normalized cost-volume probabilities:
\[
L_{\text{CVA}} =
-\frac{1}{\sum_{ijkl} Y_{ijkl}}
\sum_{ijkl}
Y_{ijkl}
\left[
\alpha_1 \log(C^{W}_{i,j,l})
+
\alpha_2 \log(C^{H}_{i,j,k})
\right],
\]
where \(Y_{ijkl}=1\) if an object at \((i,j)\) at time \(t\) appears at \((k,l)\) at time \(t-\tau\), and \(Y_{ijkl}=0\) otherwise. The focal weights are:
\[
\alpha_1 = (1 - C^{W}_{i,j,l})^{\beta}, \qquad
\alpha_2 = (1 - C^{H}_{i,j,k})^{\beta}.
\]
The loss unit is dimensionless if the logarithm is natural; it can be interpreted in nats as an information-theoretic penalty. The paper adds a softmax temperature of 5 to make the softmax outputs more discriminative [PAGE 3, footnote]. Formally, if the softmax is written as \(\mathrm{softmax}(z/\tau_s)\), then \(\tau_s\) is dimensionless. As \(\tau_s \to 0\), the distribution approaches a hard argmax; as \(\tau_s \to \infty\), it approaches uniform. The chosen finite temperature is a compromise between hard assignment and soft ambiguity.

The Motion-guided Feature Warper uses a deformable convolution. The DCN input offset is:
\[
O_D \in \mathbb{R}^{H_F \times W_F \times 2K^2},
\]
with \(K=3\) [PAGE 4]. It is generated from \(O_C\) through a \(3 \times 3\) convolution \(\gamma(\cdot)\), optionally using the residual feature \(f_t - f_{t-\tau}\) as additional motion evidence. Because detection and segmentation are center-based, the previous feature is center-attentive:
\[
\bar f^{\,t-\tau}_q = f^{\,t-\tau}_q \circ P^{t-\tau}_{\text{agn}},
\qquad q = 1,\dots,64,
\]
where \(\circ\) is the Hadamard product and \(P^{t-\tau}_{\text{agn}}\) is the class-agnostic center heatmap [PAGE 4]. The propagated feature is:
\[
\hat f^{\,t-\tau} = \mathrm{DCN}(O_D, \bar f^{\,t-\tau})
\in \mathbb{R}^{H_F \times W_F \times 64}.
\]
The enhanced feature is a convex combination:
\[
\tilde f^{\,t}_q =
w_t \circ f^{\,t}_q
+
\sum_{\tau=1}^{T}
w_{t-\tau} \circ \hat f^{\,t-\tau}_q,
\]
with
\[
\sum_{\tau=0}^{T} w_{t-\tau,i,j} = 1.
\]
The weights \(w\) are dimensionless softmax weights. The enhanced feature is fed to the detection, 3D, and mask heads. The overall training objective is:
\[
L = L_{\text{CVA}} + L_{\text{det}} + L_{\text{mask}},
\]
where \(L_{\text{det}}\) follows CenterNet-style 2D and 3D detection losses and \(L_{\text{mask}}\) follows CondInst-style instance segmentation loss [PAGE 5].

Breakdown and singularity regimes can be stated exactly. First, if \(e'_{i,j}=0\) for a query point, then \(C_{i,j,k,l}=0\) for all \((k,l)\). After softmax, the horizontal and vertical likelihoods become uniform:
\[
C^{W}_{i,j,l} = \frac{1}{W_C}, \qquad C^{H}_{i,j,k} = \frac{1}{H_C}.
\]
Then the inferred offset becomes the mean of the template grid:
\[
O_{i,j}^{x} = s\left(\frac{W_C+1}{2} - j\right),
\qquad
O_{i,j}^{y} = s\left(\frac{H_C+1}{2} - i\right).
\]
This is not a random failure; it is a systematic center-pull prior. If many embeddings are indistinguishable, the cost volume collapses to a global mean displacement field.

Second, if the likelihood mass splits between two competing locations, say \(C^{W}_{i,j,l_1}=C^{W}_{i,j,l_2}=1/2\), then the inferred horizontal offset is the average:
\[
O_{i,j}^{x} = \frac{s}{2}\left[(l_1-j) + (l_2-j)\right].
\]
If \(l_1\) and \(l_2\) correspond to different objects, the offset can point to a nonexistent midpoint. This is the formal gray-zone singularity of soft-argmax tracking: confidence without unimodality yields phantom motion.

Third, the cost volume can only represent previous positions that lie inside the previous feature grid. If the true previous coordinate \((k^\star,l^\star)\) satisfies
\[
k^\star \notin \{1,\dots,H_C\}
\quad \text{or} \quad
l^\star \notin \{1,\dots,W_C\},
\]
then there is no positive entry \(Y_{i,j,k^\star,l^\star}=1\) inside the represented search space. In that regime, the correct offset is outside the support of \(C_{i,j}\). This occurs when an object leaves the frame between labeled frames or when displacement exceeds the spatial extent of the previous feature map.

Fourth, the focal loss has a logarithmic singularity if a positive probability approaches zero:
\[
\lim_{p \to 0^+} -\log(p) = +\infty.
\]
In finite-precision implementations, exact zero is usually avoided by softmax and numerical clipping, but if a positive match is driven to extremely low probability, gradients can become unstable or vanish depending on implementation. The focal modulation \((1-p)^\beta\) reduces the weight of easy negatives but does not remove the singular behavior for hard positives.

Fifth, the feature enhancement equation assumes that previous evidence is informative. If the previous frame is occluded, blurred, or otherwise illegible, then \(\bar f^{\,t-\tau}\) may be near zero or semantically corrupted. The paper’s motivation is that “The occluded and blurred objects in the current frame may be legible in early frames” [PAGE 2]. The formal converse is also true: if the object is illegible in all previous frames used by the temporal window, the propagated feature cannot restore it.

Sixth, data association has a threshold-based breakdown. In DA-Round (ii), an embedding match is accepted if cosine similarity is highest and larger than a threshold, e.g. 0.3 [PAGE 5]. If the threshold is too low, different identities may be merged; if too high, tracklets fragment. The threshold is a tunable operating point, not a universal invariant.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of TraDeS is a convergence of four lines: point-based detection, joint detection and tracking, cost-volume matching, and deformable temporal alignment. The point-based detection line comes from CenterNet, where objects are represented as center peaks on a heatmap. The paper states that “each point on the feature map represents either an object center or a background region, similar as in CenterNet” [PAGE 1]. This representation matters because TraDeS’s tracking offset is defined for every point, not only for detected boxes. The tracker therefore operates on a dense evidence field, which allows previous features to be warped even when the current detector is uncertain.

The joint detection and tracking line comes from the observation that tracking-by-detection is inefficient and separately optimized. The paper says: “The TBD system is inefficient and not optimized end-to-end due to the two-stage processing.” [PAGE 1]. It also notes that many joint methods share a backbone but still perform detection standalone: “detection is usually performed standalone without exploring tracking cues.” [PAGE 1]. TraDeS’s historical intervention is to make tracking an input to detection rather than a downstream consumer of detections. This is a retro-causal shift: future identity evidence changes the current detection field.

The cost-volume line comes from stereo and optical flow. The paper explicitly places itself in that lineage: “The cost volume technique has been successfully applied in depth estimation and optical flow estimation for associating pixels between two frames.” [PAGE 2]. However, TraDeS repurposes cost volume for object tracking. In stereo or flow, correspondences are usually dense pixel correspondences under geometric or photometric assumptions. In tracking, the correspondence must survive object motion, appearance change, occlusion, and background motion. The paper’s adaptation is to compute the cost volume on learned re-ID embeddings rather than raw pixels, and to supervise it with object-level positive matches \(Y_{ijkl}\). This is the key genealogical mutation: cost volume becomes an object-centric association tensor.

The deformable convolution line comes from temporal feature alignment. TraDeS uses a single deformable convolution to propagate previous features according to the predicted offset field. The paper notes that deformable convolution “has been used for temporally aligning features in previous works” [PAGE 4]. The historical trap here is to assume that any temporal alignment is beneficial. TraDeS avoids this by tying the DCN offset to the CVA tracking offset and by limiting \(T\). The ablation shows that \(T=2\) is optimal for MOT/MOTS, while \(T=1\) is used for low-frame-rate datasets [PAGE 5, PAGE 6]. The genealogical lesson is that temporal alignment must be motion-conditioned and budget-conditioned.

The re-ID line has a major historical trap: cross-entropy re-ID can conflict with detection. The paper observes that common re-ID loss may hurt detection: “common re-ID loss is not that compatible with detection loss in jointly training a single backbone network, which could even hurt detection performance to some extent.” [PAGE 1]. The ablation verifies this: cross-entropy embedding improves identity-oriented metrics but degrades detection-oriented performance. The paper states: “CE embedding cannot improve MOTA as detection performance is degraded (+1.1% FN)” [PAGE 6]. This is a multi-week trap for engineering teams: if one adds a re-ID head with a conventional classification loss, the tracker may look better on IDF1 while becoming worse on MOTA and FN. TraDeS’s cost-volume supervision is designed to avoid this by making the embedding objective compatible with dense detection.

A second multi-week trap is to assume that motion offset can be inferred from a single frame. The baseline tracker predicts a tracking offset map \(O_B\) directly from the current frame. The paper reports that this fails under low frame rate and large motion: “the baseline cannot well predict the tracking offset OB with a single image in case these datasets are of low frame rate and large motion.” [PAGE 8]. The retro-causal genealogy therefore warns against architectures that attempt to solve temporal correspondence without temporal evidence. A single-frame offset head is a motion prior, not a true temporal measurement.

A third multi-week trap is to treat all frames as equally reliable. The MFW aggregates current and previous features with adaptive weights, but previous features may be stale, occluded, or blurred. The paper’s rescue mechanism depends on the previous object being legible: “The occluded and blurred objects in the current frame may be legible in early frames” [PAGE 2]. If the entire temporal window is degraded, the method cannot recover the object. This is a genealogical boundary: temporal propagation is a rescue operator, not an omniscient memory.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here is not about human beliefs but about the internal beliefs of the tracker’s modules: the detector believes an object exists if the heatmap peaks; the cost volume believes two points correspond if their embeddings are similar; the DCN believes previous evidence can be moved to the current frame; the association module believes identity persists if offset and embedding agree. The paper’s design creates a feedback loop: tracking cues improve detection, and improved detection stabilizes tracking. This is explicitly framed as mutual benefit: “the motion clue from tracking is exploited to enhance detection or segmentation” [PAGE 1] and “in return benefits tracking” [PAGE 2].

In crisis regimes, habit regression occurs when a module falls back to a learned prior instead of using reliable evidence. The baseline’s single-frame offset head is one such habit: under low frame rate and large motion, it may regress toward small displacements or common motion patterns because it lacks cross-frame appearance evidence. The paper’s empirical evidence is that the baseline fails on nuScenes after MOT training, while TraDeS’s CVA can still predict large offsets [PAGE 7]. The counter-trap is the cost volume: it does not assume smooth motion; it searches for appearance similarity across the previous feature grid. This allows large displacements if the appearance embedding remains stable.

A second habit regression is detector miss under occlusion or blur. If the current frame is degraded, the detector may fail. The counter-trap is the MFW: propagate previous center-attentive features into the current frame. The formal mechanism is that the previous object may be legible even when the current object is not. The paper states: “The occluded and blurred objects in the current frame may be legible in early frames, so the propagated features from previous frames may support the current feature to recover potentially missed objects” [PAGE 2]. The recursive risk is that the propagated feature may also create false positives if the offset is wrong. The system must therefore balance recall recovery against precision loss.

A third habit regression is identity drift through long-term association. The two-round data association first uses a local offset around \((i,j)+O_{C,i,j}\), then uses embedding cosine similarity with history tracklets [PAGE 5]. If the embedding threshold is too permissive, similar-looking objects can be merged. If too strict, tracklets fragment. The recursive equilibrium is achieved only when detection quality, embedding quality, and offset quality are co-adapted. The paper’s ablation shows this equilibrium: CVA reduces identity switches, while MFW reduces false negatives. The combined system improves both. Specifically, “CVA: Compared to the baseline, the CVA achieves better tracking by reducing 60% IDS and improving 7.2 IDF1” [PAGE 6], and “the MFW also reduces 43% IDS and improves 6.2 IDF1” [PAGE 6]. The strongest combined effect is stated as: “the robust tracking offsets OC from CVA guides the feature propagation in MFW, which significantly decreases FN from 29.5% to 27.8%.” [PAGE 6].

The clock variable is temporal depth \(T\). The tracker’s belief about persistence depends on how many previous frames it trusts. For MOT and MOTS, \(T=2\) is best. For nuScenes and YouTube-VIS, \(T=1\) is used because of low frame rate. The paper says: “We set T = 1 for nuScenes and YouTube-VIS due to their low frame rate characteristic mentioned above.” [PAGE 5]. This is a counter-trap against naive long-memory scaling. In low-frame-rate settings, a previous labeled frame may be temporally distant, so adding more history can introduce larger uncertainty rather than more reliable evidence. The recursive theory of mind is therefore clock-sensitive: the tracker’s belief horizon must match the labeling cadence and motion scale.

A final recursive gray zone is metric-level belief. MOTA rewards avoiding false negatives, false positives, and identity switches together, while IDF1 emphasizes identity consistency. The paper’s tables show that TraDeS can improve both, but not always monotonically across datasets. On YouTube-VIS, the paper notes that TraDeS improves AP by 6.2 over the baseline [PAGE 7]. On nuScenes, the improvement is large for major classes, but the dataset has extreme class imbalance. The tracker’s “mind” is therefore also shaped by dataset priors: if pedestrians are rare or hard, the detector may underrepresent them, and the tracker cannot fully compensate. The paper explicitly says class imbalance is not its focus: “Since class imbalance is not our focus, we mainly evaluate on major classes: car and pedestrian.” [PAGE 7]. This is an honest boundary condition: recursive belief correction cannot overcome missing detection priors.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is triggered when a physical, biomechanical, or weather constraint invalidates the mathematical assumptions of the tracker. For TraDeS, the key physical layer is the relationship between object motion in the world, image displacement, feature stride, and temporal sampling. The paper uses feature stride \(s=8\) [PAGE 4]. If an object’s true previous position falls outside the discrete feature grid represented by the cost volume, the cost volume cannot contain the correct positive match. Formally, for a current anchor \((i,j)\), the representable previous coordinates are:
\[
k \in \{1,\dots,H_C\}, \qquad l \in \{1,\dots,W_C\}.
\]
If the true previous coordinate \((k^\star,l^\star)\) violates this condition, then:
\[
Y_{i,j,k^\star,l^\star}
\]
cannot be represented inside \(C_{i,j}\). In that case, the correct offset is outside the support of the soft-argmax operator. This is a hard geometric veto.

A perspective projection argument makes the veto explicit. For a pinhole camera:
\[
u = f_x \frac{X}{Z} + c_x,
\qquad
v = f_y \frac{Y}{Z} + c_y.
\]
For a moving object or moving camera, the image velocity is approximately:
\[
\dot u \approx
\frac{f_x}{Z}
\left(
V_x - \frac{X}{Z} V_z
\right),
\qquad
\dot v \approx
\frac{f_y}{Z}
\left(
V_y - \frac{Y}{Z} V_z
\right).
\]
Over a labeled frame interval \(\Delta t\), the pixel displacement is approximately:
\[
\Delta u \approx \dot u \Delta t,
\qquad
\Delta v \approx \dot v \Delta t.
\]
In feature-grid units:
\[
\Delta i \approx \frac{\Delta v}{s},
\qquad
\Delta j \approx \frac{\Delta u}{s}.
\]
If \(|\Delta j|\) or \(|\Delta i|\) exceeds the available grid extent from the current anchor, the previous object center lies outside the represented search space. This is especially relevant for nuScenes, which is labeled at 2 FPS [PAGE 5]. A 2 FPS interval is \(\Delta t = 0.5\) s. For a fast-moving car or a nearby object, the image displacement can be large enough that the previous center is near or beyond the frame boundary. In that regime, the appearance cost volume may still match the object if it remains visible, but if the object leaves the field of view or becomes too small, the offset cannot be recovered.

A biomechanical veto applies to pedestrians and other non-rigid or low-speed objects under ego-motion. If the camera is moving, the background and all objects have additional image motion. TraDeS is monocular and does not explicitly estimate ego-motion in the described modules. The cost volume relies on appearance similarity, not geometric motion compensation. Therefore, if ego-motion creates large global displacement, the search space is stressed. If a pedestrian is partially occluded by a car or pole, the embedding may be unstable. If the pedestrian is small, the feature stride may quantize the center location coarsely. The paper’s nuScenes results focus mainly on car and pedestrian but acknowledge class imbalance [PAGE 7]. The veto is not that TraDeS cannot track pedestrians in principle; the veto is that when pedestrian appearance evidence is weak and ego-motion is large, the CVA offset may be unreliable, and the MFW may propagate the wrong local evidence.

A weather veto applies to blur, rain, fog, low contrast, and illumination change. The MFW’s rescue mechanism depends on previous legibility. The paper says occluded and blurred objects in the current frame may be legible in early frames [PAGE 2]. The formal converse is:
\[
P^{t-\tau}_{\text{agn}}(i,j) \approx 0
\quad \text{or} \quad
e'^{\,t-\tau}_{k,l} \approx \text{background embedding}
\]
for all relevant \((k,l)\), then the propagated feature \(\hat f^{\,t-\tau}\) contains little object-specific evidence. In that case, the weighted enhancement equation cannot restore the object because the prior evidence is absent. Weather does not merely reduce current detection; it can invalidate the temporal rescue assumption itself.

A formal veto proof can be stated as follows. Assume the true object center at time \(t-\tau\) is \((k^\star,l^\star)\), and the current anchor is \((i,j)\). The CVA can recover the true offset only if:
1. \((k^\star,l^\star)\) lies inside the previous feature grid.
2. The embedding similarity satisfies:
\[
C_{i,j,k^\star,l^\star}
>
\max_{(k,l)\neq(k^\star,l^\star)}
C_{i,j,k,l}
\]
after temperature scaling.
3. The previous center-attentive feature is nonzero:
\[
P^{t-\tau}_{\text{agn}}(k^\star,l^\star) > 0.
\]
If condition 1 fails, the offset is geometrically unrepresentable. If condition 2 fails, the offset is appearance-ambiguous. If condition 3 fails, the propagated feature is empty or background-dominated. Any one of these failures can veto the claim that temporal propagation will recover the object.

The paper’s empirical evidence does not eliminate these vetoes; it bounds them. The CVA is robust when appearance similarity is reliable and the object remains within the feature-grid support. The MFW is beneficial when previous evidence is legible and the offset is correct. The method is not a universal recovery operator; it is a conditional evidence-propagation operator. The cross-layer adjudication is therefore: approve TraDeS in regimes where the object remains visible in at least one previous labeled frame, the embedding is temporally stable, and the displacement is within the cost-volume grid; veto or downgrade expectations in regimes where the object leaves the frame, the embedding is ambiguous, the previous feature is occluded or blurred, or the frame interval is so large that the previous evidence is no longer reliable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three RLVR-style counterfactual vetoes are verifiable from the paper’s ablations and benchmarks. They are not betting lines; they are falsifiable technical predictions with measurable outcomes.

Veto 1: The common cross-entropy re-ID veto.
Counterfactual: Replace the CVA cost-volume supervision with a common cross-entropy re-ID embedding loss while keeping the two-round data association.
Formal expectation: Identity-oriented metrics may improve, but detection-oriented metrics should degrade because the embedding objective is less compatible with detection.
Verifiable prediction from the source: The paper reports that with DA-Round (ii), cross-entropy embedding improves IDF1 and reduces IDS but does not improve MOTA. The exact statement is: “CE embedding cannot improve MOTA as detection performance is degraded (+1.1% FN)” [PAGE 6]. The table shows Baseline MOTA 64.8 and FN 31.0%, while the cross-entropy embedding variant has MOTA 64.5 and FN 32.1% [PAGE 6]. By contrast, the CVA variant has MOTA 66.5, IDF1 66.7, and FN 30.6% [PAGE 6].
RLVR verification: Run the MOT17 validation ablation with three arms: baseline, cross-entropy embedding plus DA-Round (ii), and CVA plus DA-Round (ii). The veto is confirmed if cross-entropy improves IDF1 or IDS but fails to improve MOTA and increases FN relative to baseline. The paper’s result confirms this veto. The theoretical reason is that cross-entropy re-ID emphasizes intra-class compactness without the dense inter-class repulsion induced by the cost-volume softmax.

Veto 2: The motion-cue ablation veto.
Counterfactual: Remove the CVA tracking offset \(O_C\) from the MFW and use only the residual feature difference \(f_t - f_{t-\tau}\) to predict the DCN offset \(O_D\).
Formal expectation: Temporal propagation should still help somewhat, but it should be less effective at recovering missed objects because the motion field is less accurate.
Verifiable prediction from the source: The paper reports that the tracking offset \(O_C\) is the key to reducing FN. The exact statement is: “the tracking offset OC is the key to reduce FN and recover more missed objects.” [PAGE 6]. The table shows Baseline+CVA MOTA 66.5, IDF1 66.7, FN 30.6%; TraDeS with \(f_t-f_{t-\tau}\) only MOTA 67.1, IDF1 68.8, FN 29.9%, FP 2.5%; TraDeS with \(f_t-f_{t-\tau}\) and \(O_C\) MOTA 68.2, IDF1 71.7, FN 27.8%, FP 3.5% [PAGE 6].
RLVR verification: Run the MFW ablation on MOT17 validation with two motion-cue inputs: residual-only and residual plus \(O_C\). The veto is confirmed if the residual-only variant reduces FN less than the \(O_C\)-augmented variant and yields lower IDF1. The paper’s result confirms this. The additional FP increase in the full TraDeS row shows the precision cost of aggressive recovery, but
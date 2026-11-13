---
source: "arxiv_2502.20111v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 17
model: baidu/ernie-5.5-flash-preview:free
words: 7300
---

<NATIVE_REASONING>
We need answer user's request. User gave a strict prompt: "You are the GSE + GSI Frontier Reasoning Foundry. STRICT INVARIANTS..." They provided source text and pages. They likely expect analysis in exact XML sections, >=1000 words, no betting lines, formal equations, citations. Need produce final with those XML sections. Need ensure no betting lines. Need use source text citations [PAGE N] and verbatim quotes when source pages provided. Need likely focus on paper MITracker, not sports/betting. Need produce >=1000 words across exact XML sections. Need include THINK_TRACE >=400 words. Need SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need interpret task: likely evaluate whether method can be used for some prediction? The prompt is generic but source is paper. Need produce rigorous analysis. No betting. We can treat tracking reliability, robustness, recovery. Need avoid invented equations? We can use equations from paper: Eq (1), (2), (3), projection, etc. Also formal derivations maybe entropy, Bayes, IoU? Need state assumptions and exact singularity/breakdown regimes. Could discuss projective camera model singularity when z=0? Equation: [u v 1]^T = C_K [C_R | C_t] [x y z 1]^T. Actually if z? In 3D volume z axis vertical, projection from 3D to 2D uses full camera matrix. Breakdown when matrix non-invertible, calibration error, depth ambiguity, zero volume, occlusions. Need formal SI units: pixels, meters, frames, seconds, information bits, probability. Need cite pages: PAGE 1 abstract, PAGE 2 dataset, PAGE 3 collection, PAGE 4 annotation, PAGE 5 equations? Eq (1) on PAGE 4, Eq (2) PAGE 5, Eq (3) PAGE 6, details PAGE 6, metrics PAGE 6-7, ablation PAGE 8, supplementary PAGE 12-14.

Need exact XML sections. The final must have those sections only? Probably yes. Could include tags. Need >=1000 words. Need ensure THINK_TRACE >=400 words. Let's plan.

Sections:
<THINK_TRACE> ... deep multi-hop derivation & gray-zone audit. >=400 words. We can discuss target: infer robustness of MITracker for MVOT, evaluate claims, check dataset and metrics, gray zones: multi-view vs single-view evaluation, calibration dependency, indoor only, small dataset, train/test overlap, computational cost, recovery metric, BEV grid resolution 2 cm/cell, 8m x 8m, camera intrinsic/extrinsic. Need maybe mention no betting. No toy equations. Formal enough.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Include equations from paper:
- Token sequence f = [T_t, T_{t-1}, I_R, I_S], output f' etc. Eq (1): I_U = I'_S · (I'_S × (T'_t)^T). Need check dimensions: I'_S ∈ R^{N_S×D}, T'_t ∈ R^{1×D}, product gives N_S×N_S attention matrix? Then dot with I'_S yields N_S×D. Units: feature activations dimensionless or latent. Need state assumptions. Could formalize as A = I'_S (T'_t)^T ∈ R^{N_S×1}? Actually paper says I_U = I'_S · (I'_S × (T'_t)^T). If I'_S N×D, T' 1×D, (I'_S × T'^T) maybe N×N? Yes A_{ij}=I_i dot T? Actually I'_S (T'_t)^T is N×1, then I'_S × (T'^T?) maybe outer? Hmm parse: I'_S · (I'_S × (T'_t)^T). Could be attention: I'_S^T T? We can restate as I_U = I'_S ⊙? Better not misrepresent. We can quote verbatim and then formal generic: I_U = I'_S A_T, A_T = φ(I'_S, T'_t) maybe. But need formal LaTeX. Use paper's equation as given. We can note ambiguous implementation but assume matrix multiplication yields target-aware feature.

- Camera projection Eq (2): [u,v,1]^T = K [R|t] [x,y,z,1]^T. Units: u,v pixels, K dimensionless pixels/m? Actually K has focal length in pixels, principal point pixels; R dimensionless, t meters; x,y,z meters. Need homogeneous. For reverse mapping from pixel to 3D need depth/intrinsics inverse: [x,y,z,1]^T ∝ K^{-1}[u,v,1]^T - [t?]. More precise: p_2D ≃ K (R X_W + t). For unprojection at depth z_cam: X_cam = z_cam K^{-1} [u,v,1]^T, X_W = R^T(X_cam - t). Breakdown: z_cam=0 (camera center), K singular, calibration error, points behind camera, non-overlapping views, occlusion. Since BEV volume X=Y=200, Z=3, grid cell? Supplementary says 8m x 8m area, 400x400 grid, cell 2cm x 2cm, but model uses X=200,Y=200,Z=3. Need reconcile: BEV annotations 400x400, feature volume 200x200? Maybe feature resolution half. Cell for feature 4 cm? Could mention mismatch: if 8m/200 = 4cm per feature voxel. The annotation grid is 400x400 2cm. Need cite PAGE 12. This is gray-zone.

- Loss Eq (3): L_track = L_cls + λ_giou L_giou + λ_L1 L_1 + λ_bev L_bev, λ giou=5, λL1=2, λbev=0.1. Units: dimensionless loss, pixels? GIoU and L1 in normalized coordinates? Need assume.

- Metrics: AUC over IoU threshold τ ∈ [0,1], P and PNorm. Define IoU = area(intersection)/area(union). AUC = ∫_0^1 S(τ)dτ, S success at threshold. P = Pr(||c_pred - c_gt||_2 ≤ τ_pixel), PNorm uses normalized center error by bbox size. Recovery rate: proportion resumed within N frames after invisibility, N=10 frames; at 30 FPS, N=0.333 s. Could derive: R_10 = (1/M) Σ 1{reacquisition within 10 frames}. Units: probability, frames. Need cite PAGE 7: "with a 10-frame interval, MITracker achieves a high success rate of 79.2%".

- Information-theoretic: multi-view fusion reduces uncertainty. Could formalize H(T|V_k) vs H(T|V_{1:K}) with mutual information I(T; V_{1:K}) ≥ I(T; V_k) under conditional independence? Need avoid toy? It's formal probability, not toy. But perhaps not in source. We can use as assumption. Need state not directly measured. Could be okay. Need no fake ratios. Could discuss Jensen-Shannon? Maybe too much.

- Data counts: 234,430 frames, 260 videos, 196 train/180K, 30 val/28K, 34 test/26K. Cite PAGE 4. Need maybe information units: frame entropy? Could define label uncertainty.

Need RETROCAUSAL_GENEALOGY: historical lineage: Siamese, transformers, temporal tokens, ODTrack, DINOv2, CenterNet, BEV, multi-view detection, MVTrack dataset. Multi-week traps: calibration drift, overfitting to indoor, using GMTD as only test, post-fusion baseline unfair, recovery metric definition, train-test leakage, temporal token causing drift, using ground truth restarts. Need cite relevant pages. Maybe mention "multi-week traps" as in deployment over weeks: camera extrinsic drift, lighting changes, object appearance changes, dataset not outdoor. Need not invent.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need model adversary/operator? Could discuss tracker behavior under target loss: single-view regression to last state; counter-trap: multi-view attention uses BEV token; clock: recovery within 10 frames (1/3 s). Crisis: occlusion/out-of-view. Habit regression: ODTrack remains lost; counter-trap: MITracker reacquires; clock: 10-frame interval, max continuous length. Could discuss recursive theory of mind: predicting competitor (single-view) and user interventions (restart). Need maybe no betting.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need prove physical constraints: indoor, cameras calibrated, no weather? Since source indoor only, weather veto: no weather variability; outdoor generalization unproven. Biomechanical? Object motion/occlusion due to human/animal? Maybe target deformable umbrella. Need formal proof: if calibration matrix wrong beyond tolerance, projection fails; if target invisible in all views, fusion cannot recover; if occlusion all cameras, no information. Use inequalities: for target visibility set V_t, fusion possible iff ∃k target visible; if all occluded, posterior reverts to prior. Physical: camera projection requires finite focal length, non-zero depth; voxel resolution limits. Weather: dataset indoor, no weather; veto if rain/snow changes appearance beyond training. Need cite PAGE 8 limitations: indoor only. Also calibration dependency. Need maybe use "veto proof" in logical form.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning verifiable rewards? Maybe "counterfactual veto scenarios". Need provide three scenarios that would veto confidence in claims or deployment, with predictions. Need verifiable: if X then observed Y would falsify. Example:
1. Calibration perturbation veto: if extrinsic translation noise > threshold (e.g. >5 cm?) or rotation >2°, multi-view PNorm drops below single-view baseline or BEV AUC collapses. Prediction: MITracker performance degrades monotonically; at >X error, multi-view < single-view. Need avoid invented threshold? Could set as test not claim. But needs verifiable. Could say measure under injected noise; veto if recovery rate falls below 56.7% (SAM2Long baseline) or multi-view PNorm not exceed single-view by >5 points. Use source baselines.
2. All-camera occlusion veto: when target absent/fully occluded in all 3-4 views for >10 frames, recovery should not exceed chance; prediction: no tracker can recover without external prior; MITracker recovery rate on constructed all-view FOC set near zero. Verifiable by annotation.
3. Indoor/outdoor domain veto: if tested on outdoor uncalibrated or non-overlapping scenes with weather/lighting, performance drops to below single-view trained baseline; prediction: GMTD is only external multi-view, but still maybe indoor/outdoor? GMTD 10 scenes indoor/outdoor, uncalibrated. But MITracker relies calibration. Could use uncalibrated GMTD? It says GMTD captured by 2-3 uncalibrated cameras. But method uses camera parameters from dataset? For GMTD maybe no calibration? They test? They likely need calibration? Could be a trap. Veto if no calibration parameters, cannot run Eq (2). Prediction: performance falls or requires approximate calibration; MITracker may not operate. Need maybe scenario: if camera calibration missing, method cannot execute 3D projection; if forced identity extrinsics, performance collapses. Verifiable.

Need predictions maybe with metrics from source: recovery 79.2% within 10 frames on MVTrack. In adversarial all-view occlusion, should not exceed random reacquisition; if observed > baseline due to temporal prior maybe still. Need specify.

Need ensure no betting lines: don't mention spreads, totals, moneylines, odds. Avoid words? "odds" maybe not. Use probabilities. Do not say "bet".

Need exact XML sections. Could include line breaks. Need >=1000 words. Let's estimate: each section 200-300 words. Need total maybe 2000. Fine.

Need careful citations: use [PAGE 1] etc. For quotes: exact from source. Could quote small phrases. Need ensure verbatim. We have text. Need quote exact with maybe line breaks? Use exact. For page markers: [PAGE 4] etc.

Potential issue: user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So whenever making claim from source, cite page and quote. Need include many citations. Could cite in each section.

Need formal LaTeX in SOURCE_OPERATORS. Use $$...$$. Need SI/information/probability units. Need assumptions and singularity/breakdown regimes.

Need THINK_TRACE >=400 words. Let's draft with headings. Need count. We can make long.

Let's outline final:

<THINK_TRACE>
- Goal: audit MITracker claims. Source: abstract says 234K frames, 27 objects, SOTA, recovery 56.7 to 79.2 [PAGE 1, PAGE 2?]. Actually recovery from 56.7% to 79.2% in contributions [PAGE 2]. 
- Multi-hop: dataset scale, calibration, feature extraction, 3D volume, BEV supervision, spatial attention, metrics.
- Gray zones: indoor only [PAGE 8], calibration dependency [PAGE 8], dataset split unseen scenes [PAGE 4], camera count 3-4 [PAGE 2], resolution 1920x1080 30FPS [PAGE 3], 8m x 8m 2cm grid [PAGE 12], model volume 200x200x3 [PAGE 6].
- Evaluate claim: not universal; conditional on calibrated overlapping views, indoor-ish, target not absent in all views.
- Derivation: if target visible in at least one view, projection can populate BEV; if occluded in one, fusion can refine; if all invisible, no direct measurement.
- Recovery clock: 10 frames at 30 FPS = 0.333 s [PAGE 3, PAGE 7].
- Need word count >=400. We'll write ~600.

<SOURCE_OPERATORS_AND_EQUATIONS>
- State assumptions: calibrated cameras, homogeneous coordinates, pinhole, static extrinsics, target within volume.
- Equation 1: input tokens and attention. Quote page 4: "The input token sequence...". Use equation.
- Equation 2 projection. Quote page 5. Units and breakdown.
- 3D volume and aggregation. Quote page 5.
- BEV loss and total loss. Quote page 6 Eq 3. Units.
- Metrics: AUC, P, PNorm. Quote page 6-7.
- Recovery rate: quote page 7. Frame time: 30 FPS [PAGE 3], 10 frames = 1/3 s. Probability units.
- BEV grid: 8m x 8m, 400x400, 2cm cell [PAGE 12], feature volume X=200,Y=200,Z=3 [PAGE 6], cell 4cm if full 8m. Breakdown: sub-voxel localization, aliasing, calibration error.
- Information: define posterior H(T | V_{1:K}), conditional. Not source but formal. Need maybe no fake? It's generic. State as derived audit, not source claim. Need maybe okay. Use probability/information units bits.

<RETROCAUSAL_GENEALOGY>
- Lineage: visual object tracking, Siamese [PAGE 2], transformers [PAGE 2], temporal token like ODTrack [PAGE 4], DINOv2 ViT [PAGE 6], CenterNet [PAGE 4], multi-view fusion from detection BEV [PAGE 2], simple-bev/voxeltrack [PAGE 5]. Dataset lineage: GMTD test-only, MVTrack training/eval [PAGE 2].
- Multi-week traps: calibration drift, dataset indoor only, GMTD uncalibrated, post-fusion baselines degrade, recovery with restarts uses GT repositioning [PAGE 7], temporal token may propagate stale context, annotation semi-automatic [PAGE 4], object categories limited 27, 5 indoor scenes [PAGE 4].

<RECURSIVE_THEORY_OF_MIND>
- Crisis: occlusion/out-of-view. Habit regression: single-view continues lost [PAGE 8? visualization]. Counter-trap: multi-view spatial-enhanced attention uses T_3D [PAGE 5]. Clock: 10-frame recovery, 30 FPS. Recursive: model anticipates that single-view will regress and uses BEV to counter; user restart intervention. Gray: if opponent uses adversarial occlusion across all views, counter-trap fails. Need no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: pinhole projection singular if K non-invertible, depth zero, points behind camera. Formula veto. If all views occluded, measurement likelihood zero. Biomechanical layer: human-scale motion? 30 FPS, object fast motion blur [PAGE 4], target deformation. If target moves outside calibrated overlap or volume, no evidence. Weather layer: indoor only [PAGE 8], no weather robustness; outdoor rain/snow not covered. Proof by cases.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios. Each with trigger, verifiable measurement, prediction, veto threshold.

Need maybe define RLVR? "Reward-labeled verifiable counterfactual"? Could just use.

Need ensure final >1000 words. Let's write robustly.

Need no citations to non-source? Fine.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can introduce generic equations for audit? It says never invent fake ratios; formal equations okay. We should not use "force/fatigue". We can use probability entropy, IoU, projection. Good.

Need maybe not use "odds". Avoid.

Let's craft final with XML tags. Need maybe no markdown outside. Use exact tags. Ensure THINK_TRACE >=400 words. Let's count roughly. I'll write long.

Need include verbatim quotes. Use quotes in each section. Need exact quote maybe with line breaks? We can quote snippets.

Let's draft.

THINK_TRACE:
"I treat the supplied source as an engineering reliability claim..." Need mention not betting. Deep. Use bullets? Within tag can be paragraphs. Need word count. Let's write around 700 words. Ensure >=400.

SOURCE_OPERATORS: long with equations. Need maybe 600 words.

Other sections 200-300 each. Total >1500.

Let's ensure no forbidden terms: spreads, totals, moneylines, odds. Avoid. "probability" okay. "risk" okay. No "bet". "wager" no.

Need check "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid all. In RLVR maybe "threshold" okay.

Let's write final. Ensure XML valid-ish. Could include angle brackets? Fine. Need no extra commentary. Use LaTeX inside.

Need cite exact pages. Let's quote:
- [PAGE 1] "MITracker transforms 2D image features into a 3D feature volume and compresses it into a bird’s eye view (BEV) plane" (note curly apostrophe? okay). Use exact? In source: "MITracker transforms 2D image features into a 3D feature volume and compresses it into a bird’s eye view (BEV) plane, facilitating inter-view information fusion" yes.
- [PAGE 2] "improving recovery rate from 56.7% to 79.2%" exact.
- [PAGE 3] "All video sequences are recorded at a resolution of 1920×1080 with 30 FPS." exact.
- [PAGE 4] "The input token sequence of our view-specific encoder can be formulated as..." exact? Source: "The input token sequence of our view-specific encoder can be formulated as the composition of the visual and temporal tokens f = [Tt, Tt−1, IR, IS]" but formatting. We can quote words.
- [PAGE 5] Eq 2 quote: "where CK represents the camera’s intrinsic matrix, CR denotes the rotation matrix describing the camera’s orientation, and Ct is the translation vector specifying the camera’s position in space." exact.
- [PAGE 6] Eq 3 quote: "where λgiou = 5, λL1 = 2, and λbev = 0.1 are the coefficients that balance the contributions from each loss ." There's space before period. Fine.
- [PAGE 6] "the 3D feature volume having dimensions X = 200, Y = 200, and Z = 3." exact.
- [PAGE 7] "with a 10-frame interval, MITracker achieves a high success rate of 79.2% in these recovery tests." exact.
- [PAGE 8] "it currently consists of indoor environments only" exact? Source: "Although MVTrack dataset includes a diverse set of scenes, it currently consists of indoor environments only, potentially limiting the generalization of methods trained on it to outdoor settings." Use.
- [PAGE 12] "the MVTrack dataset covers an 8m × 8m area. Ground truth labels are projected onto a 400 × 400 grid, where each cell is 2cm × 2cm in size." exact.
- [PAGE 12] "the reference frame ... 182 × 182 pixels, and the search frame ... 364 × 364 pixels" maybe.
- [PAGE 14] GMTD? "GMTD [38] is a multi-view tracking test set with 10 scenes, captured by 2-3 uncalibrated cameras in indoor and outdoor settings." [PAGE 6] actually. Use.

Need maybe cite table 2 values: MITracker AUC 68.57, PNorm 88.77, P 80.93 single-view; multi-view 71.13, 91.87, 83.95 [PAGE 6]. Could cite.

Need formal equations:
1. Token attention: 
\[
f = [T_t, T_{t-1}, I_R, I_S], \quad f' = [T'_t, T'_{t-1}, I'_R, I'_S]
\]
\[
I_U = I'_S \cdot (I'_S \times (T'_t)^\top)
\]
Assumptions: D-dimensional features, etc. But this equation as written dimension ambiguous. We can state "as printed" and then audit dimension: if I'_S ∈ R^{N_S×D}, T'_t ∈ R^{1×D}, the RHS must be interpreted as an attention operator; a dimensionally safe equivalent is I_U = I'_S A_T, A_T = softmax? But paper doesn't mention softmax. Need avoid inventing? Could say "implementation must ensure the product yields R^{N_S×D}". That's okay.

2. Projection:
\[
\begin{bmatrix}u\\v\\1\end{bmatrix} = K [R|t] \begin{bmatrix}x\\y\\z\\1\end{bmatrix}
\]
Actually in paper they wrote [CR|Ct] and CK left. Good. Units.

3. Unprojection for voxel:
\[
X_{c} = \pi K^{-1} [u,v,1]^T, \quad X_w = R^T(X_c - t)
\]
where π is chosen depth along ray, meters. Singularity: K^{-1} fails, π=0, z behind.

4. Aggregation:
\[
F_{3D}(x,y,z)=\frac{1}{|K_{xyz}|}\sum_{k\in K_{xyz}} F^k_{2D}(u_k(x,y,z),v_k(x,y,z))
\]
units feature channels. Breakdown when |K|=0, occlusion. Maybe this is formal derived from paper "we compute the average of the mapped values from each view" [PAGE 5]. Good.

5. BEV score: 
\[
S_{BEV}=h_{BEV}(F'_{3D})
\]
not necessary.

6. Loss:
\[
L_{track}=L_{cls}+\lambda_{giou}L_{giou}+\lambda_{L1}L_1+\lambda_{bev}L_{bev}
\]
with values. Units: focal loss dimensionless, GIoU dimensionless, L1 in normalized coordinates or pixels depending implementation. Need assumption.

7. Metrics:
IoU = |B_pred∩B_gt|/|B_pred∪B_gt| ∈ [0,1].
AUC = ∫_0^1 S(τ)dτ.
P(τ_px)=Pr( ||c_pred-c_gt||_2 ≤ τ_px ) with pixels.
PNorm = Pr( ||(c_pred-c_gt)/(w_gt,h_gt)||_2 ≤ τ ). Need maybe exact not in paper but standard. It says normalize center point by width and height. Good.

8. Recovery:
\[
R_{\Delta} = \frac{1}{M}\sum_{m=1}^M \mathbf{1}\{\tau_{reacq,m} - \tau_{loss,m} \le \Delta\}
\]
Δ=10 frames, at 30 FPS = 0.333 s. Units probability.

Need breakdown regimes: τ=0, empty volume, no overlap, calibration error, all occluded.

RETROCAUSAL: Need maybe no equations. But can include.

CROSS_LAYER_VETO: formal proof:
Let V_t ⊆ {1..K} visible views. Fusion evidence E_t = ∪_{k∈V_t} projection. If V_t=∅, posterior P(T|E_t)=P(T|history), no direct recovery. If K singular, projection undefined. If calibration error δR, δt, projected BEV error bounded by Jacobian: 
\[
\|\delta p\| \lesssim \|K\|(\|\delta R\| \|X\| + \|\delta t\|) 
\]
This is formal? Could include. Need not fake. It's first-order. Units meters/pixels. Breakdown when error exceeds voxel 2cm/4cm. Good. Weather: indoor only.

RLVR: 3 scenarios. Need maybe include exact predictions.

Scenario 1: Calibration perturbation veto.
Intervention: add extrinsic translation noise η_t ∈ N(0,σ_t^2) to all views, rotation noise η_R. Evaluate MVTrack test.
Verifiable: if σ_t=0 baseline; sweep 0, 1, 2, 5 cm etc. Prediction: performance decreases; veto if multi-view PNorm at σ_t≥? falls below MITracker single-view baseline 68.57? Actually single-view AUC 68.57, PNorm? Table 2 single-view AUC 68.57, PNorm 88.77? Wait Table 2 columns: MVTrack Single-View AUC/PNorm/P and Multi-View AUC/PNorm/P. MITracker: Single-View 68.57, 88.77, 80.93; Multi-View 71.13, 91.87, 83.95. So if calibration noise makes multi-view AUC <=68.57 or recovery <=56.7? Use. Veto if multi-view advantage (ΔPNorm=3.10 points) eliminated. Good.

Scenario 2: All-view occlusion/out-of-view veto.
Construct episodes where target invisible in all calibrated views for >10 frames. Because no measurement. Prediction: recovery within 10 frames cannot exceed pre-occlusion motion extrapolation; empirically should be low. If MITracker reports >79.2% on all-view invisibility, suspect label leakage or ground-truth restart. Verifiable by manual annotation.

Scenario 3: Outdoor/uncalibrated weather veto.
Use outdoor scenes with rain/snow/low light and missing calibration. If Eq (2) cannot be instantiated, method cannot perform multi-view fusion. If approximate calibration used, performance should drop below single-view GMTD baseline? Need cite GMTD uncalibrated [PAGE 6]. Prediction: without calibration, multi-view PNorm on GMTD <= single-view GMTD MITracker? Actually MITracker GMTD multi-view 65.96 AUC, 87.05 PNorm, 82.07 P. Single-view GMTD? Table 2: MITracker on GMTD single-view? Wait table: columns MVTrack Single-View, MVTrack Multi-View, GMTD Single-View? It says Dataset MVTrack GMTD; Method Single-View Multi-View Single-View AUC etc. For MITracker row: 68.57 88.77 80.93 71.13 91.87 83.95 65.96 87.05 82.07. So GMTD single-view AUC 65.96, PNorm 87.05, P 82.07. It only evaluates single-view on GMTD? Since multi-view not available? Actually table says GMTD Single-View only. Good. So if outdoor uncalibrated multi-view not possible. Veto if no calibration; performance cannot be verified. Prediction: any claimed GMTD multi-view improvement without calibration is unfounded.

Need maybe mention RLVR verifiable rewards: use ground truth labels to verify. Good.

Need final no analysis. Ensure word count. Let's write. Need maybe include exact XML tags with capitalization. Good.

Double-check no "odds". Search mentally. No.

Potential problem: "totals" could appear in "total loss"? It's okay? They said never mention spreads, totals, moneylines, or odds. "Total loss" includes "total" but not betting? Better avoid word "totals" but "overall loss" okay. The invariant likely about betting lines. But to be safe, avoid "totals" as standalone. "overall loss" fine. "total" in "total frames"? Could be okay but maybe avoid? Not necessary. But to be safe, don't use "totals" word. Use "aggregate". "total" appears in dataset? Could avoid.

Need no "line" maybe okay. "betting lines" not mention. Good.

Let's craft final. Ensure THINK_TRACE >=400. I'll count approximate: maybe 650.

Final draft:

<THINK_TRACE>
... paragraphs.

Need include citations. Let's write.

Check word count in THINK_TRACE: I'll make 5 paragraphs ~100 words each = 500.

Proceed final.
</NATIVE_REASONING>

<THINK_TRACE>
I treat the supplied source as an engineering reliability claim about multi-view visual object tracking, not as a predictive wagering statement. The central inference chain is: MITracker claims robust tracking under occlusion and target loss [PAGE 1]; the dataset claims sufficient scale and calibration to support multi-view fusion [PAGE 2][PAGE 3]; the method transforms per-view 2D features into a 3D volume and then into a BEV representation [PAGE 1][PAGE 5]; the training objective combines tracking loss and BEV supervision [PAGE 6]; and the empirical claim is that recovery improves “from 56.7% to 79.2%” [PAGE 2] and that “with a 10-frame interval, MITracker achieves a high success rate of 79.2% in these recovery tests” [PAGE 7]. The audit must therefore connect data quality, calibration, projection geometry, temporal continuity, and metric definition. If any link fails, the headline recovery claim loses force.

A first multi-hop derivation is to ask what evidence exists when the target is occluded in one view. The paper says MITracker “projects features from views with visible targets into a 3D feature volume space, which is then used to refine tracking in views where the target is occluded” [PAGE 1]. This implies a conditional information argument: if at least one calibrated camera observes the target, then a BEV-space prior can constrain the occluded view. If no camera observes the target, the method can only rely on temporal extrapolation or learned priors, not direct geometric evidence. The dataset contains “Full Occlusion” and “Out of View” attributes [PAGE 4], but the recovery metric is measured after target disappearance within a bounded interval [PAGE 7]. Thus the strongest supported claim is not “all occlusion is solved,” but “when multi-view visibility is nonzero and calibration is valid, recovery within a short temporal window improves.”

A second gray-zone audit concerns calibration and scene scope. The method requires camera intrinsics and extrinsics: “CK represents the camera’s intrinsic matrix, CR denotes the rotation matrix describing the camera’s orientation, and Ct is the translation vector specifying the camera’s position in space” [PAGE 5]. The paper also admits: “it currently consists of indoor environments only” [PAGE 8] and that “MITracker relies on camera calibration for multi-view fusion” [PAGE 8]. Therefore any claim outside calibrated indoor-like scenes is extrapolative. The dataset uses “3 or 4 time-synchronized Azure Kinect cameras” [PAGE 3], recorded at “1920×1080 with 30 FPS” [PAGE 3]. This gives a precise temporal scale: 10 frames correspond to \(10/30 = 1/3\) second, so the reported 79.2% recovery is a short-horizon recovery rate, not indefinite tracking without failure.

A third derivation concerns metric interpretation. The paper evaluates “AUC, P, and PNorm” [PAGE 6], and separately defines recovery as successful resumption within given frame intervals [PAGE 7]. AUC integrates success over IoU thresholds, so it rewards stable overlap, not merely reacquisition. Recovery rate rewards fast reacquisition after disappearance. These are different objectives: a tracker can reacquire coarsely but fail tight localization, or localize tightly but fail when fully absent. The paper’s qualitative examples show that competing methods “continue in a lost state” or “mistakenly locks onto the wrong object” [PAGE 8], which supports the claim that MITracker’s multi-view token helps correct identity drift. Still, the ablation shows performance depends on both “BEV Loss” and “Spatial Attention” [PAGE 8], so neither component alone is sufficient.

The deepest gray zone is dimensional: the BEV annotation grid is “8m × 8m” with “400 × 400 grid” and “2cm × 2cm” cells [PAGE 12], while the learned 3D feature volume has “X = 200, Y = 200, and Z = 3” [PAGE 6]. If the 8 m extent maps to 200 feature cells, the feature-grid cell size is 4 cm, coarser than the 2 cm annotation grid. This does not invalidate the method, but it means sub-4 cm localization claims must be audited through interpolation, bilinear sampling, or postprocessing. Calibration error, voxel quantization, and projection noise can therefore create a breakdown regime where geometric fusion is nominal but metric precision is not physically supported.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The following operators are extracted from the source and audited for units, assumptions, and breakdown.

1. View-specific tokenization and target-aware feature extraction.
The paper states: “The input token sequence of our view-specific encoder can be formulated as the composition of the visual and temporal tokens f = [Tt, Tt−1, IR, IS], while the output token sequence is denoted as f ′ = [T ′ t, T ′ t−1, I′ R, I′ S]” [PAGE 4]. Formally, let

\[
f = [T_t, T_{t-1}, I_R, I_S], 
\qquad 
f' = [T'_t, T'_{t-1}, I'_R, I'_S],
\]

where \(T_t, T_{t-1} \in \mathbb{R}^{1 \times D}\) are temporal tokens, \(I_R \in \mathbb{R}^{N_R \times D}\), \(I_S \in \mathbb{R}^{N_S \times D}\), and \(D\) is the hidden dimension. The paper gives

\[
I_U = I'_S \cdot \left(I'_S \times (T'_t)^\top\right)
\tag{1}
\]

with the description that \(I_U\) “represents the extracted feature that encapsulates attention focused on the target object in the search frame” [PAGE 4]. Dimensionally, \(I_U\) must remain in \(\mathbb{R}^{N_S \times D}\) to feed the BBox head. If the right-hand side is implemented as a bilinear or dot-product attention operator, the implied attention matrix has shape \(N_S \times N_S\) or \(N_S \times 1\) depending on reduction. Breakdown regime: if \(T'_t\) carries stale or corrupted temporal information, the attention can amplify background tokens; if the target is absent, the operator has no direct object evidence and can only encode scene context.

2. Camera projection and 3D feature population.
The projection equation is printed as

\[
\begin{bmatrix}
u \\ v \\ 1
\end{bmatrix}
=
C_K [C_R \mid C_t]
\begin{bmatrix}
x \\ y \\ z \\ 1
\end{bmatrix}
\tag{2}
\]

where “CK represents the camera’s intrinsic matrix, CR denotes the rotation matrix describing the camera’s orientation, and Ct is the translation vector specifying the camera’s position in space” [PAGE 5]. Units: \(u, v\) are pixels; \(C_K\) contains focal length and principal point in pixels; \(C_R\) is dimensionless; \(C_t\) is in meters if world coordinates are in meters; \(x, y, z\) are spatial coordinates in the 3D feature volume. The paper uses bilinear sampling and averaging across views: “In scenarios that involve multiple viewpoints, we compute the average of the mapped values from each view to ensure consistency” [PAGE 5].

For audit, define the aggregated volume as

\[
F_{3D}(x,y,z)
=
\frac{1}{|K_{xyz}|}
\sum_{k \in K_{xyz}}
F^k_{2D}
\bigl(u_k(x,y,z), v_k(x,y,z)\bigr),
\]

where \(K_{xyz}\) is the set of views that project validly into voxel \((x,y,z)\). Breakdown regimes:
- If \(C_K\) is singular or incorrectly scaled, unprojection fails.
- If \(z\) lies on the camera center or behind the camera, the homogeneous projection is degenerate.
- If no view covers a voxel, \(K_{xyz} = \varnothing\), and the volume value is undefined or filled by learned defaults.
- If calibration translation error is large relative to the BEV cell size, projected features land in the wrong cell. The supplementary BEV grid is “8m × 8m” with “2cm × 2cm” cells [PAGE 12], while the learned volume uses “X = 200, Y = 200, and Z = 3” [PAGE 6]. If the full 8 m maps to 200 cells, each learned cell is 4 cm, so calibration error below 4 cm may already cause cross-cell misassignment.

3. BEV supervision and spatial refinement.
The 3D volume is compressed along \(Z\): “we apply 1D convolutional layers to aggregate features along the Z-axis of F3D, resulting in F ′ 3D ∈ R32×X×Y” [PAGE 5]. A “BEV head” then produces a BEV score map [PAGE 5]. The spatial-enhanced attention step embeds the aggregated BEV feature into a token: “we first use convolutional layers to embed F ′ 3D into a 3D-aware token T3D ∈ R1×D” [PAGE 5]. For each view, the composite sequence \((T_{3D}, I^k_U)\) is refined. Breakdown regime: if BEV supervision is weak or the BEV score map is biased toward high-density regions, small or low-resolution objects may be suppressed.

4. Loss operator.
The overall objective is

\[
L_{\text{track}}
=
L_{\text{cls}}
+
\lambda_{\text{giou}} L_{\text{giou}}
+
\lambda_{L1} L_{L1}
+
\lambda_{\text{bev}} L_{\text{bev}}
\tag{3}
\]

with “λgiou = 5, λL1 = 2, and λbev = 0.1” [PAGE 6]. Units: focal losses are dimensionless scalar penalties; GIoU loss is dimensionless in normalized coordinate space; \(L_1\) may be in normalized coordinates or pixels depending on implementation; \(L_{\text{bev}}\) is a focal loss on the BEV score map. Breakdown regime: if \(\lambda_{\text{bev}}\) is too small relative to classification and box losses, the model may optimize single-view box accuracy without acquiring stable multi-view geometry. The ablation shows BEV loss is important: without it, AUC is “63.99”, versus “71.13” with both BEV loss and spatial attention [PAGE 8].

5. Metrics.
IoU is

\[
\mathrm{IoU}(B_{\text{pred}}, B_{\text{gt}})
=
\frac{|B_{\text{pred}} \cap B_{\text{gt}}|}
{|B_{\text{pred}} \cup B_{\text{gt}}|}
\in [0,1].
\]

AUC is the area under the success curve over overlap threshold \(\tau \in [0,1]\):

\[
\mathrm{AUC}
=
\int_0^1 S(\tau)\, d\tau.
\]

Precision is defined by the paper as “the distance between the predicted and ground truth BBox centers” [PAGE 7]. Formally,

\[
P(\tau_{\text{px}})
=
\Pr\left(
\|c_{\text{pred}} - c_{\text{gt}}\|_2
\le \tau_{\text{px}}
\right),
\]

where \(\tau_{\text{px}}\) is in pixels. Normalized precision normalizes center error by ground-truth BBox width and height, mitigating “biases due to variations in BBox size” [PAGE 7].

6. Recovery operator.
The paper evaluates “the recovery capability after the target was invisible by measuring the proportion of successful tracking resumption within given frame intervals” [PAGE 7]. Let \(\Delta\) be the allowed recovery interval in frames. Define

\[
R_{\Delta}
=
\frac{1}{M}
\sum_{m=1}^{M}
\mathbf{1}
\left[
\tau_{\text{reacq},m}
-
\tau_{\text{loss},m}
\le \Delta
\right],
\]

where \(M\) is the number of disappearance episodes. The reported test uses \(\Delta = 10\) frames [PAGE 7]. At 30 FPS [PAGE 3], this is \(10/30 = 0.333\) s. The reported value is \(R_{10} = 0.792\) for MITracker [PAGE 7]. Breakdown regime: if the target is absent in all views, \(R_{\Delta}\) depends only on motion extrapolation or learned priors; if disappearance exceeds \(\Delta\) by a large margin, recovery probability should decay unless external restarts are supplied.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of MITracker is a convergence of single-view object tracking, temporal token modeling, BEV fusion, and multi-view dataset construction. The paper situates itself after Siamese networks and transformer trackers: “Early approaches based on Siamese networks [10, 25] use CNNs to extract features from reference and search regions” and “More recent works have incorporated transformers for enhanced feature extraction” [PAGE 2]. It explicitly borrows temporal continuity from ODTrack: “To ensure temporal continuity between frames, akin to the method utilized in ODTrack [46], two specialized temporal tokens are also included” [PAGE 4]. It also uses a Vision Transformer initialized from DINOv2: “We initialize our view-specific encoder with pre-trained DINOv2 [28] parameters using the ViT-base model [12]” [PAGE 6].

The BEV lineage is visible in the projection section. The paper says the 3D volume follows prior multi-view perception: “we construct a 3D feature volume of size X × Y × Z, where (X, Y) represents the horizontal plane and Z axis denotes the vertical direction following [17, 44]” [PAGE 5]. It also references earlier multi-view detection and fusion strategies: “Some approaches establish multi-view relationships by projecting detection results onto a BEV plane [42]” and “methods such as [17, 33, 34] map features into 3D space at multiple heights” [PAGE 3]. This places MITracker in a historical arc: from detection-centric multi-view association toward class-agnostic feature-level fusion.

The dataset genealogy is also important. The authors argue that prior multi-view datasets are limited: “existing multi-view datasets are largely restricted to specific object categories like humans or birds [15, 40]” [PAGE 2]. They contrast MVTrack with GMTD: “GMTD [38] expands the target to multiple categories, but its scale remains small, primarily designed for evaluation purposes” [PAGE 3]. MVTrack claims “234K frames from 3-4 calibrated cameras” and “27 object categories” [PAGE 2]. The paper also states that MVTrack “offers both training and evaluation sets” [PAGE 2], unlike GMTD, which “only provides testing data” [PAGE 2].

Multi-week traps arise from the difference between benchmark stability and deployment stability. First, calibration drift is a slow trap: extrinsics can change over weeks due to camera movement, vibration, or maintenance. The method depends on \(C_R\) and \(C_t\) [PAGE 5], so small drift can accumulate into BEV mislocalization. Second, the dataset is indoor-only: “it currently consists of indoor environments only” [PAGE 8]. Lighting, weather, reflective surfaces, and outdoor backgrounds are not guaranteed. Third, the recovery metric can mask identity errors if reacquisition is coarse; the paper separately reports AUC and precision to mitigate this, but users may overinterpret recovery rate. Fourth, the restart experiment uses manual repositioning: “users can manually intervene to restart the model’s tracking by providing an accurate initial position” and restarts are “triggered when target loss exceeds 10 frames, using ground truth for repositioning” [PAGE 7]. This means the robust-tracking plot is not fully autonomous recovery; it includes privileged restart information.

Another trap is semi-automatic annotation. The paper says “The BBox annotations are generated semi-automatically, with trackers [6, 41, 46] used for initial labeling. The machine-generated annotations are then manually adjusted and double-checked” [PAGE 4]. If tracker-assisted labels contain systematic bias, training and evaluation can inherit that bias. A further trap is the use of post-fusion baselines for single-view methods: the authors note that “post-processing degrades the performance of all single-view methods” [PAGE 7]. That supports MITracker’s architectural advantage, but it also means comparisons require careful interpretation: single-view methods were not designed for multi-view fusion, so post-fusion is a weak baseline rather than a co-designed multi-view competitor.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive model here is a tracker-vs-occlusion loop. The “crisis” is target disappearance: full occlusion, partial occlusion, or out-of-view status. The paper lists these attributes explicitly: “Full Occlusion,” “Out of View,” and “Partial Occlusion” are among the nine challenging attributes [PAGE 4]. In a single-view system, the habit regression is predictable: when evidence disappears, the model tends to continue from its last state. The paper observes this qualitatively: “ODTrack tends to continue in a lost state” and “even when the object reappears in the frame, ODTrack still mistakenly locks onto the wrong object” [PAGE 8]. This is a classic recursive failure: the tracker’s internal state assumes the target remains where it last was, while the world has moved the target or changed appearance.

MITracker’s counter-trap is to create a cross-view state that is less dependent on the failed view. The method “leverages geometric information from fused 3D feature volume to refine the tracking results at each view” [PAGE 1]. The spatial-enhanced attention explicitly injects a BEV token: “we individually concatenate T3D with their unrefined features I1U, I2U, ..., IKU” and “transformer blocks take in its composite token sequence (T3D, IkU) and refine them using attention mechanisms that leverage fused 3D spatial information” [PAGE 5]. In recursive terms, the model anticipates that view-specific evidence may be occluded, and it asks: what would other views say about the target’s ground-plane position? If another view sees the target, the BEV token can correct the occluded view.

The “clock” is the temporal window. The recovery metric uses a 10-frame interval [PAGE 7]. At 30 FPS, that is 0.333 seconds. This is short enough to matter for real-time tracking but long enough for fast objects to leave a camera view. The method’s claim is strongest when disappearance is brief and at least one camera retains evidence. If disappearance exceeds the clock by a large margin, the BEV prior becomes stale. The temporal token helps within short horizons: “a token Tt−1 that carries temporal information from the preceding frame” [PAGE 4]. But if the target is absent for many seconds, temporal propagation can reinforce an incorrect location.

A recursive theory-of-mind audit must also consider the evaluator. The benchmark reward is not merely “track whenever visible”; it includes recovery after invisibility and continuous tracking length with restarts [PAGE 7]. Therefore the system is optimized for a world where brief failures are expected and quick correction is valuable. The counter-trap works best when the adversary is occlusion, not total disappearance from all cameras. If all views lose the target simultaneously, the BEV token cannot create evidence where none exists. The method’s stable performance in the paper is therefore evidence for conditional recovery, not for unconditional omniscient tracking.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer veto is governed by projective geometry. Equation (2) requires an invertible intrinsic matrix and valid extrinsics. Let \(C_K \in \mathbb{R}^{3 \times 3}\), \(C_R \in SO(3)\), and \(C_t \in \mathbb{R}^3\). A point in world coordinates \(X_w = [x,y,z,1]^\top\) maps to pixels \(p = [u,v,1]^\top\). If \(C_K\) is singular, or if the projected point lies at zero depth, the mapping is undefined. In unprojection form,

\[
X_c = \pi C_K^{-1} p,
\qquad
X_w = C_R^\top (X_c - C_t),
\]

where \(\pi\) is depth along the camera ray. Breakdown occurs if \(\pi = 0\), if \(X_c\) lies behind the camera, or if calibration error moves the ray outside the overlap region. The paper’s BEV annotation grid is “8m × 8m” with “2cm × 2cm” cells [PAGE 12]. If calibration error exceeds half a cell, projected evidence can be assigned to the wrong BEV cell. Thus a physical veto condition is:

\[
\|\delta C_t\| + \|X_w\| \|\delta C_R\| > \frac{\Delta_{\text{BEV}}}{2},
\]

where \(\Delta_{\text{BEV}}\) is the effective BEV cell size. For the learned volume, \(\Delta_{\text{BEV}}\) may be 4 cm if 8 m maps to 200 cells [PAGE 6]. Beyond that regime, geometric fusion is not merely noisy; it is categorically unreliable.

The biomechanical layer concerns object and camera motion. The dataset includes “Motion Blur,” “Deformation,” “Aspect Ratio Change,” and “Scale Variation” [PAGE 4]. These attributes are realistic for human-operated scenes: umbrellas open, phones are occluded by hands, tennis balls move quickly. The paper records at 30 FPS [PAGE 3], so fast motion can create inter-frame displacement larger than the search region if not handled. The method uses a search frame and temporal tokens, but if an object moves faster than the temporal prior can propagate, the tracker can lose identity. A biomechanical veto occurs when target displacement between frames exceeds the effective search support or when deformation changes the target’s appearance beyond the learned template manifold. The paper’s example “tenis5-1: Out of View, Motion Blur and Background Clutter” [PAGE 4] illustrates this regime.

The weather layer is a domain veto. The paper admits: “it currently consists of indoor environments only” [PAGE 8]. Weather is not a supported variation in MVTrack. Rain, snow, fog, wet reflections, low light, and wind-induced camera vibration can alter appearance and calibration. If weather changes the target’s texture or the camera’s effective extrinsics, the BEV fusion assumption weakens. The paper also notes that GMTD contains “indoor and outdoor settings” and “uncalibrated cameras” [PAGE 6], but MITracker’s method depends on calibration [PAGE 8]. Therefore outdoor deployment is not fully adjudicated by the source. A weather veto proof is: if the target appearance distribution shifts outside the training manifold and no calibrated overlapping view remains reliable, then the posterior over target state reverts to the temporal prior. In that regime, the claimed recovery advantage is not guaranteed.

A combined veto theorem can be stated as follows. Let \(V_t\) be the set of views with valid target visibility at time \(t\). Let \(C\) be calibration validity. Let \(Q\) be the BEV quantization tolerance. MITracker can provide direct multi-view evidence only if

\[
V_t \neq \varnothing
\quad \wedge \quad
C = \text{true}
\quad \wedge \quad
\text{projection error} < Q.
\]

If any conjunct fails, the method reduces to single-view temporal tracking or learned hallucination. This is not a criticism of the reported benchmark results; it is the boundary condition of those results.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Calibration-perturbation veto.
Counterfactual intervention: take the MVTrack test set and inject controlled extrinsic noise into \(C_R\) and \(C_t\). The perturbation should be verifiable by comparing recovered BEV trajectories against ground-truth BEV labels. The paper’s BEV labels use a “400 × 400 grid” with “2cm × 2cm” cells [PAGE 12], so the evaluation can measure cross-cell error. The prediction is that MITracker’s multi-view advantage should collapse as translation or rotation noise approaches the BEV cell scale. Verifiable veto condition: if multi-view normalized precision on MVTrack falls below the MITracker single-view baseline of “88.77” PNorm [PAGE 6], or if multi-view AUC falls below the single-view AUC of “68.57” [PAGE 6], then the multi-view fusion claim is vetoed under that calibration error. A monotonic degradation curve should be observed. If performance remains unchanged under large calibration noise, the evaluation pipeline may be using leaked or oracle calibration.

2. All-view occlusion veto.
Counterfactual intervention: construct test episodes where the target is fully occluded or out of view in every calibrated camera for more than 10 frames. The annotations should be manually verified using the dataset’s “Full Occlusion” and “Out of View” labels [PAGE 4]. The prediction is that recovery within the 10-frame window cannot rely on direct multi-view evidence. MITracker may still reacquire if its temporal prior is accurate, but the recovery rate should be substantially lower than the reported “79.2%” recovery on the benchmark’s general disappearance setting [PAGE 7]. Verifiable veto condition: if MITracker reports near-79.2% recovery on all-view-invisible episodes, then the evaluation is likely leaking future frames, using privileged ground-truth restarts, or measuring reappearance after visibility returns rather than true recovery from zero evidence. A second veto condition is identity error: if the box reappears on a distractor with high IoU to the distractor but low IoU to the target, recovery should be counted as failure.

3. Outdoor/uncalibrated weather veto.
Counterfactual intervention: evaluate MITracker on an outdoor multi-view scene with rain, snow, low light, or wet-surface reflections, where calibration is missing or degraded. The source states that MVTrack is indoor-only [PAGE 8] and that GMTD includes “uncalibrated cameras in indoor and outdoor settings” [PAGE 6]. Since Equation (2) requires camera parameters [PAGE 5], the verifiable veto is straightforward: if calibration is absent, MITracker cannot execute the published 3D projection. If approximate calibration is used, the performance should drop below the indoor benchmark. Verifiable prediction: on outdoor uncalibrated scenes, multi-view fusion should provide no statistically reliable gain over the best single-view baseline; if a claimed gain appears without calibration, the result is not supported by the paper’s stated dependence on calibration. A stricter veto condition is failure under weather-induced appearance shift: if target texture, contrast, or boundary statistics leave the indoor training distribution, BEV supervision and spatial-enhanced attention should degrade faster than single-view temporal tracking.
</RLVR_COUNTERFACTUAL_VETOES>
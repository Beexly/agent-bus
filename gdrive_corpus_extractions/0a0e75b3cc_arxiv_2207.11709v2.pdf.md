---
source: "arxiv_2207.11709v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 8561
---

<NATIVE_REASONING>
We need answer user's request. They gave a source paper TVCalib and want a GSE + GSI Frontier Reasoning Foundry style output? The prompt: "You are the GSE + GSI Frontier Reasoning Foundry. STRICT INVARIANTS: ... >= 1,000-WORD DEPTH across exact XML sections: <THINK_TRACE> ... <SOURCE_OPERATORS_AND_EQUATIONS> ... <RETROCAUSAL_GENEALOGY> ... <RECURSIVE_THEORY_OF_MIND> ... <CROSS_LAYER_VETO_ADJUDICATION> ... <RLVR_COUNTERFACTUAL_VETOES> ..."
User provides DRIVE SOURCE path, pages 12, source text. Need likely produce analysis of TVCalib in those sections. No explicit question besides source. Need infer task: produce frontier reasoning foundry analysis. Must follow strict invariants. Need no betting lines (we won't). Need no toy equations. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need >=1000 words across exact XML sections. Probably output only those XML sections? They say across these exact XML sections. Need include all. Need deep multi-hop derivation & gray-zone audit >=400 words in THINK_TRACE. Need source operators and equations formal LaTeX, units, page citations, breakdown. Retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need maybe discuss sports field registration as calibration problem. Need ensure word count >1000. Need citations with [PAGE N] and verbatim quotes. Need maybe use exact quotes from provided text. Need be careful not to invent. We can quote exact text. Need maybe include equations from paper: Eq (1) point-line distance, Eq (2) segment reprojection loss, Eq (3) Compound Score. Also camera model P=KR[I|-t]. Need include units: radians, meters, pixels, NDC dimensionless, loss in pixels? Eq (2) mean Euclidean distance in pixel/NDC units? Need discuss if NDC normalized coordinates: distance maybe normalized units unless converted to pixels for threshold. Need breakdown regimes: pinhole projection singularity at point on camera center? z? Homography planar degeneracy, line segment endpoints identical, zero denominator, pan/tilt degeneracies, FoV near zero or 90? Need formal.

Need think in English because user request English. Now produce final.

Need structure exactly XML tags? Could include markdown inside. Need ensure sections names exact. Maybe start:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
...

Need 1000+ words. Let's target maybe 2500 words. Need THINK_TRACE >=400 words. We can write detailed.

Need no betting. No odds. Good.

Need "DRIVE SOURCE" maybe acknowledge. Need cite exact [PAGE 1], [PAGE 2], etc. Use verbatim quotes. Need not overquote but enough. Need include quotes with quotation marks. For equations, can quote formula. Need be careful with LaTeX from source has broken formatting. We can restate formal LaTeX. Need exact page citations for claims.

Potential content:

THINK_TRACE: Deep multi-hop derivation: task mapping: broadcast image -> segment masks -> pixel point selection -> calibration optimization. Need derive differentiable objective. Gray-zone audit: segmentation error, local minima, self-verification threshold tau, multiple initialization, lens distortion. Discuss why one-step calibration avoids homography composition and decomposition errors. Need maybe derive objective gradient chain rule: loss L(phi) = 1/|S| sum_c mean_i ||undistort_psi(p_i) - pi_phi(X_j)|| or distance for lines. Gradient wrt phi via chain rule. Discuss numerical stability with NDC and FoV. Need mention singular cases: if line endpoints project identical, denominator zero; if all points not visible/padding, loss undefined? Paper says non-visible segments distance set zero [PAGE 4]. If no visible segments? Calibration impossible. If camera ray intersects calibration plane at infinity? Homography degeneracy. Need maybe define physical units: t in meters, angles rad, focal length pixels or NDC dimensionless. Loss units: NDC or pixels depending implementation. Eq (2) says Euclidean distance; threshold AC@t in pixels [PAGE 6]. Need exact quote: "AC@t = TP/(TP +FN +FP)" [PAGE 6]. Compound score Eq 3.

SOURCE_OPERATORS_AND_EQUATIONS: list formal equations with units, assumptions, breakdown.
- Pinhole: P=K R [I|-t], K from FoV: f_x^NDC=1/tan(0.5 FoV), f_y^NDC = a * 0.5 / tan(0.5 FoV) maybe quote [PAGE 9]. Wait formula: f_y^NDC = a × 0.5 / tan(0.5×FoV). Need note dimensionless NDC. True focal f_x=f_y=w*0.5/tan(0.5 FoV) pixels [PAGE 9]. FoV rad, a dimensionless aspect ratio, w px.
- Projection: x ~ K R (X - t)? Source says P = KR [I|-t]. Actually K R [I|-t] maps X_scene to camera/image. Need homogeneous. x_h = P [X;1], x = [x/z, y/z]. Units: X,t m; K px or NDC; angles rad. Singular when X_z=0? Actually camera coordinates z=0.
- Line segment: s_line = {X0+λX1 | λ∈[0,1]} [PAGE 3]. Reporjected line endpoints pi_phi(X0), pi_phi(X1). Point-line distance Eq 1. Need units: if projections in NDC, distance in NDC units; if pixels, px. Breakdown denominator zero when projected endpoints coincide (degenerate line at image), point p collinear? Actually numerator also zero maybe but undefined. Need cite Eq 1.
- Point cloud distance: min Euclidean distance from pixel to reprojected points [PAGE 4]. Need units.
- Loss Eq 2: L = argmin_{phi, psi} 1/|S| sum_c d_mean(undistort_psi(x^(c)), pi_phi(s^(c))). Need clarify d_mean average over annotated points, padding mask. Units. Breakdown: no visible segments, padding mask all zero; segmentation failure; local minima; tau rejection.
- Self-verification: reject samples whose loss below threshold? Source says "reject all samples whose loss ... is below a threshold τ" [PAGE 4]? Wait "we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ" That seems counterintuitive: if loss is low, good; reject below? Let's inspect: Self-verification aims identify unable calibrate; "reject all samples whose loss ... is below a threshold τ"? Could be typo? Maybe if loss is below threshold? Usually reject if loss > threshold. Text: "we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ ∈R+." But Fig 2 x-axis segment reprojection loss, CS vs tau. If tau high, reject high loss? They set tau=0.019 [PAGE 6]. They likely reject samples whose loss is above threshold? The phrase says below maybe error? Need be faithful: quote exact. We can note semantic inconsistency: optimization failure indicated by high loss, so practical implementation rejects loss > τ? But source says below. Need handle carefully. They set tau=0.019; Fig 3 threshold increasing? "the more τ is restricted, the less the completeness ratio decreases, with increasing accuracy that at some point saturates" [PAGE 7]. If reject high loss by tau max allowed, restricting tau decreases CR. So likely reject loss > tau. But quote says below. Need maybe state: as written [PAGE 4] says reject loss below τ, but contextual metrics imply operational rejection is for loss above τ; this is a gray-zone. Need not accuse? We can say "the text's wording is inverted relative to usual verification; we treat τ as maximum admissible loss based on Table 2 and Fig. 3." Need cite. This is important for audit. Could be deliberate test.
- Compound score Eq 3: CS := (1 - exp{-4 CR}) sum_{t∈[5,10,20], w∈[0.5,0.35,0.15]} w AC@t. Units: CS dimensionless [0,1], CR dimensionless ratio, t pixels. Breakdown: if CR=0, factor 0; if AC=1 and CR=1, CS=1-exp(-4) ~0.9817? Wait formula? If CR=1, factor 1-e^-4=0.9817, not 1. But paper says compound score? Maybe yes. Need compute. It may not reach 1 due to exp. We can mention. Source Eq (3) [PAGE 6].
- Optimization: AdamW lr 0.05, weight decay 0.01, 2000 steps, one-cycle pctstart 0.5 [PAGE 6]. Initialization uniform to normal: µ=a+(b-a)/2, sigma covers 95% interval [PAGE 4]. Units: angles deg/rad, translation m. Breakdown: local minima.
- Lens distortion: ψ={k1,k2}, kornia implementation, own optimizer lr 1e-3 [PAGE 10]. Breakdown: low FoV trivial local minima, FoV explodes, points distorted too much [PAGE 10].

RETROCAUSAL_GENEALOGY: lineage: photogrammetry DLT, PnP, homography, semantic segmentation, STN, differentiable rendering/optimization. Multi-week traps: keypoint invisibility, focal unknown, planar assumption, dataset bias, self-verification threshold transfer, lens distortion joint optimization, decomposition ambiguity. Need maybe cite related works pages.

RECURSIVE_THEORY_OF_MIND: Model user/researcher assumptions. Crisis habit regression: when uncertain, revert to homography or manual keypoints. Counter-trap: use segment reprojection one-step. Clock: convergence time 2000 steps, segmentation model, threshold. Need talk about adversaries: overfitting to WC14 main camera, SN-Calib other cameras, local minima. Could frame as "If the investigator assumes task is homography, they compose H_init H_rel and then decompose; if assumes calibration, they optimize phi directly." Need predictions? maybe.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need "veto" physical constraints that invalidate certain predictions? For TVCalib: camera pose must be physically plausible: outside field, height, pitch, roll; segmentation must be visible; lighting/weather occlusion. Need prove with inequalities? Formal: camera center C = -R^T t? Actually P=KR[I|-t], camera center in world X_C = -R^T t if t maps world to camera? Need check. If P=K R [I|-t], camera projection x ~ K R (X - C) with C? If [I|-t] maps X to X_cam = R(X - C)? If P=K R [I|-t], X_cam = R(X - t)? Wait [I|-t] X = X - t. If R maps world to camera? Then camera center where X - t = 0? That would C=t? But typical P=K R [I|-C], camera center C. They use t perhaps camera position? Source: extrinsics R,t defining pose transformation from scene coordinates to camera coordinates. "t" maybe camera position? They say camera position t. In Eq H decomposition, t derived camera position. In P=KR[I|-t], if t is camera center in world? Then X_cam = R(X - t). Yes t is camera position in world. Camera center = t. Need be careful. They call translation vector camera position. In pinhole, P=K R [I|-t], camera center C=t. But standard if world-to-camera is [R | -R C], then P=K R [I | -C]. Good. So physical constraints: C within tribune volume; not on field; z coordinate height etc. Camera distribution ranges [PAGE 9]. Veto if optimized C outside plausible broadcast volumes. Need mention weather: rain/snow? Semantic segmentation degraded, line visibility; not in paper but physical. Need not invent? We can state as physical layer veto. Biomechanical? Perhaps broadcast camera operator constraints: pan/tilt/roll limited by rig; zoom/FoV; no physical camera inside field except spider cam. Need "biomechanical" maybe human camera operator? Use limits: tilt ∈ U(45°,90°) etc [PAGE 9]. Veto if tilt negative/roll huge etc.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable RLVR veto scenarios + predictions. RLVR maybe Reinforcement Learning with Verifiable Rewards? We need propose counterfactual veto scenarios that would falsify TVCalib advantage? Need 3 scenarios, predictions. E.g. 1) If input images are from camera not represented in initialization and no multiple init, optimization converges to wrong local minimum, CS drops; prediction: center-only will fail on left/right; multiple init/argmin restores. Cite Table 1 and Fig 3. 2) If GT segmentation has very few visible segments or all points on one plane and goal height absent, homography/decomposition comparable; prediction: AC@20 parity, IoU part high, but goal segments error. Cite limitations. 3) If low FoV images with lens distortion jointly optimized, loss explodes/local minima; prediction: without LD better CR/AC, with LD worse on SN-Calib low FoV, better WC14 high FoV. Cite Appx D Table 5. Need make verifiable.

Need maybe include exact quotes for each. Need no betting. Good.

Need ensure final answer is not too short. Let's draft. Need maybe include all sections. Need count words? We can estimate. Aim 2500-3000 words. The final can be long. Need no markdown outside XML? The sections can contain markdown. The exact XML tags should be present. Need maybe avoid unescaped XML? It's fine. Use <THINK_TRACE> etc. Need not escape LaTeX. But if inside XML tags, angle brackets in LaTeX like < maybe could be problematic? It's not actual XML parsing? But maybe better avoid raw < in LaTeX? Use \langle? The final is text. But strict sections maybe need tags. We can include LaTeX with backslashes. Need avoid >? It's okay.

Potential issue: They demand "Never mention spreads, totals, moneylines, or odds." We won't.

Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We must not invent equations not in source. We can derive standard projection equation but from source. That's okay. Avoid toy ratios. Need formal equations with units. We can derive gradient but not too invented? It is formal from calculus. Need cite source for loss. For gradient, we can state formal operator without fake ratio.

Need maybe include "SI/information/probability units". We need mention units. For loss: pixel distance, NDC dimensionless; angles rad; translation meters; focal length pixels; probability? AC is probability-like ratio (fraction), CR ratio. Info units? Maybe not necessary but include "bits" if discussing information? Could state "segment label encoding uses information measured in nats/bits if model distribution; not source". Maybe avoid if not source. But invariant says SI/information/probability units. We can state AC@t, CR are dimensionless probabilities/empirical rates. For probability, use [0,1]. For information maybe "padding mask m_C ∈ {0,1} is a Boolean information variable; not an information-theoretic entropy measure." Could mention if needed. Need not overdo.

Need exact page citations for all important claims. We'll cite [PAGE 1], [PAGE 2], etc. Need quote verbatim. We can quote many.

Let's compose.

THINK_TRACE (>=400 words). Need deep multi-hop. Let's write ~900 words. Include derivation chain:
1. Input broadcast frame I. Segmentation f_seg(I)->pixel sets x^(c).
2. Calibration object S = segments.
3. Camera parameters phi. Projection pi_phi.
4. Loss Eq 2.
5. Gradient descent.
6. Self-verification.
7. Metrics.

Need gray-zone audit: segmentation point selection non-differentiable [PAGE 5], padding, local minima, tau wording, lens distortion. Need maybe discuss "one-step" claim vs segmentation training: calibration no training data but segmentation model trained on SN-Calib [PAGE 5], [PAGE 10]. Need mention "our calibration module does not require training data" [PAGE 5] but segment localization trained. Need quote: "The values labeled with ∗ are approximated from 100 images since our calibration module does not require training data" [PAGE 5]. And segment localization uses DeepLabV3 trained on SN-Calib [PAGE 10]. Gray zone: end-to-end not fully training-free.

SOURCE_OPERATORS_AND_EQUATIONS: more formal. Include equations:
(1) s_line, s_pc, s_point. P = K R [I|-t]. K FoV formulas. Projection homogeneous. Eq 1 point-line distance. Eq 2 loss. AC and CS. Camera distribution? Maybe include as inequalities with units. Lens distortion. Breakdown. Need citations.

RETROCAUSAL_GENEALOGY: historical lineage. Multi-week traps. Maybe 500 words.

RECURSIVE_THEORY_OF_MIND: 500 words.

CROSS_LAYER_VETO_ADJUDICATION: 500 words.

RLVR_COUNTERFACTUAL_VETOES: 500 words. Total >3000. Good.

Need ensure exact XML sections only? Could include no preamble. Let's produce.

Need maybe mention "DRIVE SOURCE: /GSE..." maybe in THINK_TRACE. Good.

Let's ensure citations with exact quotes:
- [PAGE 1]: "we consider the task as a camera calibration problem." 
- [PAGE 2]: "one step without relying on training data for the calibration part." 
- [PAGE 3]: "P = KR [I| −t] ∈R3×4" quote maybe broken. Use exact: "P = KR [I| −t] ∈R3×4". 
- [PAGE 4]: Eq (2) quote? The source text is mangled but we can quote "L := ... argmin ..."? Need exact? Maybe use verbatim snippet: "Finally, the segment reprojection loss func-tion needs to be minimized where each segment contributes equally:" [PAGE 4]. And quote self-verification: "we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ ∈R+" [PAGE 4]. Need note inversion.
- [PAGE 6]: "AC@t = TP/(TP +FN +FP)." [PAGE 6]. Eq CS quote. 
- [PAGE 9]: FoV NDC quote.
- [PAGE 10]: lens distortion local minima quote.
- [PAGE 8]: limitations local minima quote: "This is mainly caused by local minima due to the nature of gradient-based iterative optimization" [PAGE 8].

Need maybe quote Table 2? "TVCalib(τ) GT 68.7 88.0 96.1 92.8 76.9" [PAGE 7]. Could use. Need not too many.

Potential issue: source text page [PAGE 4] says "we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ" but if we say that implies reject low loss? Need discuss. We can quote and say as written is logically suspect. In THINK_TRACE or source equations. Good.

Need maybe mention "No keypoint correspondences" quote [PAGE 3]: "keypoint correspondences are not directly used in our approach". Good.

Let's formulate.

Double-check no disallowed content. No betting. Good.

Need maybe no "moneylines" etc. Good.

Need maybe use SI units: meters, radians, pixels. Pixel is not SI but conventional. NDC dimensionless. Probability dimensionless. Good.

Need final with XML sections. Let's write in a polished way. Ensure >=1000 words. We'll make long. Need not include analysis. final only.
</NATIVE_REASONING>

<THINK_TRACE>
The central multi-hop derivation begins with the paper’s reframing of sports-field registration from homography estimation to explicit camera calibration. The authors state: “we consider the task as a camera calibration problem” [PAGE 1]. This reframing changes the computational object from a planar projective transform to a physical camera parameter vector. The camera is parameterized as “ϕ = (FoV, t, pan, tilt, roll)” [PAGE 3], and the goal is to infer these variables by minimizing a differentiable reprojection loss over labeled field segments. The causal chain is: broadcast frame → semantic instance segmentation of field segments → selected pixel evidence per segment → differentiable projection of 3D calibration object into image → Euclidean segment reprojection error → gradient-based optimization of camera parameters → self-verification by loss threshold → evaluation by pixel-space Accuracy@threshold and Compound Score.

The first gray-zone is the difference between “keypoint-less” and “training-free.” The paper claims: “our method does both in one step without relying on training data for the calibration part” [PAGE 2]. However, the segmentation module is trained: “We use the DeepLabV3 ResNet [7] ... to perform instance segmentation for each visible line or circle segment” [PAGE 5], and Appendix C confirms training on “the training data from the SN-Calib train split” [PAGE 10]. Therefore, the calibration module may be optimization-only, but the full TVCalib pipeline is not globally training-free. This matters because if segmentation quality collapses under unusual broadcast conditions, the calibration loss may still decrease by fitting wrong segment assignments, or may fail to decrease because there is insufficient visible field evidence. The paper acknowledges: “The TVCalib approach relies on an accurate segment localization, but no regularization term is included that allows for outliers” [PAGE 8]. Thus the objective is exact but not robust to gross segmentation outliers.

The second gray-zone is the geometry of the objective. The segment reprojection loss is based on “the Euclidean distance between annotated pixels with respective segment label and reprojected segments of the calibration object” [PAGE 4]. For line segments, the paper uses a point-to-line distance: “d(p, ŝ_line) = ... |det(...)| / |πϕ(X1) − πϕ(X0)|” [PAGE 4]. This is not a point-to-point keypoint loss; it is a segment-level algebraic distance. That makes the loss differentiable with respect to projected endpoints, but it also introduces a singularity when the projected line endpoints collapse. If πϕ(X1) − πϕ(X0) approaches zero, the denominator vanishes. Geometrically this corresponds to a line segment projecting to a point or a nearly degenerate line, which can occur when the camera pose places the line almost along the optical ray, when the line is nearly edge-on, or when numerical precision collapses the projected endpoint separation. The paper does not add an epsilon regularization to this denominator, so the breakdown regime is implicit.

The third gray-zone is self-verification. The text says: “we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ ∈R+” [PAGE 4]. Taken literally, this would reject good low-loss samples, which contradicts the reported use of τ and the improvement of accuracy when τ is restricted: “the more τ is restricted, the less the completeness ratio decreases, with increasing accuracy that at some point saturates” [PAGE 7]. The operational meaning must be that samples with loss above τ are rejected, or that τ is a maximum allowed loss. The paper later sets “τ = 0.019” based on “the maximum CS on SN-Calib-valid-center using the predicted segment localization” [PAGE 6]. This suggests a calibrated upper bound on acceptable reprojection loss. If implemented literally as written, the verification operator would invert the intended behavior and reject high-quality images while retaining failed local minima. This is a precise wording-level hazard that should be audited in reproduction.

The fourth gray-zone is optimization landscape. The method uses gradient descent: “AdamW [25] with a learning rate of 0.05 and weight decay of 0.01 ... for 2000 steps” [PAGE 6]. Because the camera parameters are highly nonlinear, the loss is nonconvex. The authors explicitly identify local minima as a limitation: “some samples are rejected. This is mainly caused by local minima due to the nature of gradient-based iterative optimization” [PAGE 8]. The multiple-initialization strategy is a mitigation: “run the optimization with multiple candidates and the best result is taken automatically by selecting the one with minimum loss (argmin) according to Eq. (2)” [PAGE 4]. The ablation confirms that “initializing from three camera positions (argmin and stacked) is noticeably better than using only one initialization (center)” [PAGE 8]. The gray-zone is that the loss alone can be misleading if segmentation assigns wrong labels or if visible segments are insufficient. A low loss under wrong segment correspondence can still be accepted unless the segmentation and scene priors prevent it.

The fifth gray-zone is the relation to homography. The paper says: “If Xz = 0.0 then P3×[1,2,4] = KR3×[1,2][I| −t] = H ∈R3×3” [PAGE 3]. This is a planar degeneracy: homography is valid only for points on one plane. Soccer fields are approximately planar, but goal posts and crossbars are not. The paper explicitly notes that goal segments suffer when using homography decomposition: “a larger projection error is frequently visible for goal segments since the height information is missing” [PAGE 6]. Therefore, the 3D camera-calibration formulation is more expressive for non-planar objects, but it inherits the difficulty of estimating full pose and focal length. The gray-zone is that many broadcast frames contain mostly field-plane markings; in such cases, homography may be sufficient and the extra degrees of freedom can create instability, especially with poor initialization or low Field of View.

The sixth gray-zone is lens distortion. The paper allows joint optimization of distortion coefficients ψ = {k1, k2} [PAGE 10], but reports failure modes: “Selected points are transformed via undistort according to Eq. (2) and in some cases the points are distorted too much (towards the principal point) or the FoV explodes, resulting in local minima” [PAGE 10]. The appendix adds: “samples with lower FoV result in trivial local minima when jointly optimizing distortion coefficients and camera parameters” [PAGE 10]. This means distortion correction is not a free improvement. It is conditionally beneficial when radial distortion is visible, especially on WC14, but can destabilize SN-Calib cases with narrow FoV. The breakdown regime is therefore not merely geometric but statistical: when the image evidence for distortion is weak, the optimizer can trade focal length against distortion coefficients in a degenerate direction.

The final multi-hop conclusion is that TVCalib’s strength comes from turning semantic field markings into a dense, differentiable geometric objective, while its weakness comes from reliance on segmentation, nonconvex optimization, and absence of explicit outlier regularization. The paper’s own metrics show this: on SN-Calib-test-center with ground-truth segmentation, “TVCalib(τ)” reaches “68.7 88.0 96.1” AC@5/10/20 and “76.9” CS [PAGE 7], but with predicted segmentation the values drop to “57.6 81.7 93.2” and “72.6” [PAGE 7]. On WC14, with ground-truth segmentation, “TVCalib” reaches “64.4 86.7 96.0” AC@5/10/20 and “86.4” CS [PAGE 7], showing strong performance when the benchmark distribution is narrow. The source therefore supports a careful claim: one-step camera calibration via segment reprojection is effective and superior to several homography baselines, but its reliability is conditional on segmentation quality, initialization coverage, and careful handling of local minima.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators in the source are geometric, differentiable, and metricized in image space.

1. Calibration object and segments  
The paper defines line segments as  
\[
s_{\mathrm{line}} = \{X_0 + \lambda X_1 \mid \lambda \in [0,1]\}
\]
and point-cloud segments as  
\[
s_{\mathrm{pc}} = \{X_j \in \mathbb{R}^3 \mid j = 1,\ldots,|s_{\mathrm{pc}}|\}.
\]
A labeled point segment is  
\[
s_{\mathrm{point}} = X \in \mathbb{R}^3.
\]
These are quoted on [PAGE 3]: “Line segments are defined in the parametric form ... and point cloud segments as ...” The total calibration object is “the composition of all individual segments per segment category C” [PAGE 3].

Units: \(X_0, X_1, X_j\) are 3D scene coordinates. In the soccer-field context, these are physical lengths in meters. The scalar \(\lambda\) is dimensionless.

2. Pinhole camera model  
The source uses  
\[
P = KR[I \mid -t] \in \mathbb{R}^{3 \times 4}
\]
with intrinsics \(K \in \mathbb{R}^{3 \times 3}\) and extrinsics \(R \in \mathbb{R}^{3 \times 3}\), \(t \in \mathbb{R}^3\) [PAGE 3]. The camera parameters are  
\[
\phi = (\mathrm{FoV}, t, \mathrm{pan}, \mathrm{tilt}, \mathrm{roll}).
\]
The rotation convention is  
\[
R = R_z(\mathrm{roll})R_x(\mathrm{tilt})R_z(\mathrm{pan}).
\]
The projection operator is written as  
\[
\pi_\phi : X \mapsto x,
\]
mapping a scene coordinate \(X \in \mathbb{R}^3\) to an image point \(x \in \mathbb{R}^2\) [PAGE 3].

Units: angles are radians, \(t\) is in meters if the field model is metric, and \(K\) may be expressed in normalized device coordinates or pixel units depending on implementation.

3. Field-of-view to focal length  
For numerical stability, the paper predicts Field of View instead of focal length. In Appendix A.1:  
\[
f_x^{\mathrm{NDC}} = \frac{1}{\tan(0.5 \times \mathrm{FoV})}
\]
and  
\[
f_y^{\mathrm{NDC}} = a \times \frac{0.5}{\tan(0.5 \times \mathrm{FoV})},
\]
where \(a\) is the original image aspect ratio [PAGE 9]. For true pixel focal length:  
\[
f_x^I = f_y^I = w \times \frac{0.5}{\tan(0.5 \times \mathrm{FoV})},
\]
where \(w\) is image width in pixels [PAGE 9].

Units: FoV is in radians; \(f^{\mathrm{NDC}}\) is dimensionless in normalized device coordinates; \(f^I\) is in pixels. The source says: “the input image or pixel are normalized to image dimensions from [−1, 1] (NDC)” [PAGE 9].

4. Point-to-line reprojection distance  
For a line segment, the paper gives the perpendicular distance from annotated pixel \(p\) to the reprojected line:  
\[
d(p, \hat{s}_{\mathrm{line}}) =
\frac{
\left| \det\left((\pi_\phi(X_1)-\pi_\phi(X_0)); (\pi_\phi(X_0)-p)\right) \right|
}{
\left|\pi_\phi(X_1)-\pi_\phi(X_0)\right|
}.
\]
This is Equation (1) on [PAGE 4]. The source describes it as “the point-line distance” [PAGE 4].

Units: if \(\pi_\phi\) outputs pixels, the distance is in pixels; if \(\pi_\phi\) outputs NDC, the distance is in dimensionless normalized units. The evaluation threshold \(t \in \{5,10,20\}\) is explicitly in pixels [PAGE 6].

Breakdown regime: denominator \(|\pi_\phi(X_1)-\pi_\phi(X_0)|\) tends to zero if the projected segment endpoints coincide. This occurs under degenerate pose, near-edge-on line orientation, severe foreshortening, or numerical collapse. The paper does not specify an epsilon safeguard.

5. Point-cloud distance  
For point-cloud segments, the distance between a pixel and its corresponding reprojected point cloud is “the minimum Euclidean distance for each p ∈ x(c)” [PAGE 4]. Formally, for reprojected points \(\{\pi_\phi(X_j)\}\),  
\[
d(p, \hat{s}_{\mathrm{pc}}) = \min_j \|p - \pi_\phi(X_j)\|_2.
\]
Units are pixels or NDC depending on projection space.

6. Aggregate segment reprojection loss  
The main objective is Equation (2):  
\[
\mathcal{L} := \underset{\phi,~(\psi)}{\mathrm{argmin}}\quad
\frac{1}{|S|}
\sum_{c \in S}
d_{\mathrm{mean}}
\left(
\mathrm{undistort}_\psi(\mathbf{x}^{(c)}),
\pi_\phi(s^{(c)})
\right).
\]
The source states: “the segment reprojection loss function needs to be minimized where each segment contributes equally” [PAGE 4]. Each segment contributes equally, meaning the loss is normalized by the number of segments or by the number of actually provided pixels after padding-mask correction [PAGE 4].

Units: the loss is a mean Euclidean distance. If pixel space is used, it has units of pixels. If NDC is used, it is dimensionless but proportional to normalized image error. The source says: “the distance of padded input pixels are set to zero according to the padding mask” [PAGE 4]. Thus the effective loss is over visible, non-padded segment pixels.

Breakdown regimes:  
- If no visible segments are present, the loss lacks geometric constraint.  
- If segmentation produces wrong labels, the loss can be minimized by physically wrong poses that align wrong segments.  
- If the optimization enters a local minimum, the loss may be lower than alternatives only within a restricted basin, not globally correct.  
- If lens distortion is jointly optimized, the source reports: “the points are distorted too much ... or the FoV explodes, resulting in local minima” [PAGE 10].

7. Self-verification threshold  
The paper introduces a threshold \(\tau \in \mathbb{R}_+\). It says: “we can directly reject all samples whose loss (Sec. 3.2) is below a threshold τ” [PAGE 4]. The operational interpretation from the rest of the paper is that \(\tau\) controls rejection of unreliable samples, because the authors later select “τ = 0.019” based on maximizing Compound Score [PAGE 6]. The exact inequality is ambiguous in prose, but the intended verification operator is a loss-based rejection gate.

Units: \(\tau\) has the same units as the loss, either pixels or normalized units, depending on implementation.

8. Accuracy@threshold  
For a threshold \(t\), a segment is true positive if every annotated polyline point is within \(t\) pixels of the reprojected polyline:  
\[
\forall p \in \tilde{s}: d(p, \pi_\phi(s)) < t.
\]
Then  
\[
\mathrm{AC@}t = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FN}+\mathrm{FP}}.
\]
This is quoted on [PAGE 6]: “AC@t = TP/(TP +FN +FP).”

Units: \(t\) is in pixels; AC@t is dimensionless, empirically a probability-like fraction in \([0,1]\).

9. Completeness Ratio and Compound Score  
The Completeness Ratio is “the number of provided parameters divided by the number of images of the dataset” [PAGE 6]. It is dimensionless in \([0,1]\).

The Compound Score is Equation (3):  
\[
\mathrm{CS} :=
\left(1 - e^{-4\mathrm{CR}}\right)
\sum_{t\in[5,10,20],\, w\in[0.5,0.35,0.15]}
w \, \mathrm{AC@}t.
\]
The source states: “To summarize the above four scores, they are weighted as follows” [PAGE 6].

Units: CS is dimensionless. If CR = 1 and all AC@t = 1, the formula gives \((1-e^{-4}) \approx 0.9817\), not exactly 1. If CR = 0, CS = 0 regardless of accuracy. This creates a precision-completeness tradeoff.

10. Homography decomposition  
The paper defines the planar relation:  
\[
H_{X_z=0} = P_{3\times[1,2,4]} = K R_{3\times[1,2]}[I \mid -t].
\]
This is quoted on [PAGE 3]: “If Xz = 0.0 then P 3×[1,2,4] = K R3×[1,2][I| −t] = H ∈R3×3.”

Assumptions: all points lie on the plane \(X_z = 0\). Breakdown: non-planar objects such as goal posts and crossbars cannot be represented exactly by this homography. The paper observes: “a larger projection error is frequently visible for goal segments since the height information is missing” [PAGE 6].

11. Camera distribution prior  
The coarse initialization distribution is given in Appendix A.2:  
\[
\mathrm{pan} \in U(-45^\circ,45^\circ),\quad
\mathrm{tilt} \in U(45^\circ,90^\circ),\quad
\mathrm{roll} \in U(-10^\circ,10^\circ),
\]
\[
\mathrm{aov} \in U(8.2^\circ,90^\circ),\quad
t_z \in U(-40\,\mathrm{m},-5\,\mathrm{m}),\quad
t_y \in U(40\,\mathrm{m},110\,\mathrm{m}),
\]
with side-camera variations for main camera left and right [PAGE 9].

Units: angles in degrees or radians depending on implementation; translation in meters. These ranges encode physical broadcast-camera plausibility.

12. Lens distortion operator  
The paper introduces \(\mathrm{distort}_\psi(x)\) and \(\mathrm{undistort}\) for lens distortion [PAGE 3]. In Appendix D, radial distortion coefficients are  
\[
\psi = \{k_1, k_2\},
\]
following “kornia’s implementation of lens distortion models” [PAGE 10]. The source warns: “Selected points are transformed via undistort according to Eq. (2) and in some cases the points are distorted too much ... or the FoV explodes, resulting in local minima” [PAGE 10].

Breakdown regime: low FoV, weak distortion evidence, or joint optimization without regularization can create degenerate minima. The source reports improved AC@5 for samples with visible radial distortion, but not universal improvement [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of TVCalib is a convergence of photogrammetry, computer vision, sports analytics, and differentiable optimization. The oldest branch is classical camera calibration and projective geometry. The paper cites Hartley and Zisserman’s Multiple View Geometry for PnP and homography constraints [PAGE 1], [PAGE 3]. In this lineage, a camera is represented by a projection matrix, and correspondences between 3D world points and 2D image points determine pose and intrinsics. TVCalib inherits this but modifies the correspondence object: instead of isolated keypoints, it uses line segments, point clouds, and semantic segment pixels. This is a direct response to the sports-broadcast problem where “the non-visibility of appropriate keypoints in broadcast soccer videos [11] and the unknown focal length prevent a sufficiently accurate direct computation of a homography or intrinsics and extrinsics from 2D-3D (keypoint) correspondences” [PAGE 1].

The second branch is sports field registration. Early methods used line and ellipse features, vanishing points, and area segmentation. The paper reviews that “Early approaches rely on local feature matching in combination with Direct Linear Transform (DLT) for homography estimation [5, 16, 17, 28], and both line and ellipse features are already used” [PAGE 2]. Later methods used semantic segmentation and learned homography prediction or refinement. TVCalib cites approaches that “directly predict or regress an initial homography matrix [8, 23, 27, 32] or search for the best matching homography in a reference database [6, 30, 31, 36]” [PAGE 2]. The historical trap in this lineage is the assumption that the task is fundamentally 2D. The paper says previous approaches “treat the task as homography estimation instead of calibration despite the estimation of camera parameters enables further applications” [PAGE 1]. That trap matters because homography can map the visible field plane but cannot naturally represent goal posts, crossbars, or changing camera geometry beyond the plane.

The third branch is semantic segmentation. TVCalib uses DeepLabV3 ResNet for instance segmentation: “We use the DeepLabV3 ResNet [7] (Residual Networks) to perform instance segmentation for each visible line or circle segment” [PAGE 5]. This connects to a broader trend in which sports-field registration becomes a dense representation problem. The paper notes that it uses “a dense representation of the visible field, i.e., directly leverage a small fraction of labeled pixel representing field segments instead of a (deep) image representation for both initial estimation [6, 30] or refinement” [PAGE 2]. The retro-causal trap here is that dense segmentation can be visually convincing even when geometrically insufficient. A segmentation mask may cover a line, but if only a tiny arc is visible, the pose estimate may be underconstrained.

The fourth branch is differentiable optimization. TVCalib does not learn camera parameters by regression; it optimizes them at inference time. The source says: “the calibration module iteratively minimizes the segment reprojection loss” [PAGE 1]. This is analogous to analysis-by-synthesis: render or reproject a known 3D object under hypothesized camera parameters, compare to image evidence, and adjust parameters. The historical trap is local minima. The paper explicitly connects this to “the nature of gradient-based iterative optimization” [PAGE 8]. A multi-week engineering trap is to assume that a better optimizer or longer training will remove all failures. In reality, the loss landscape contains pose symmetries, planar ambiguities, and focal-length/translation couplings.

The fifth branch is benchmark construction. The SN-Calib dataset contains many camera locations: “SN-Calib dataset: ... consists of 20 028 images taken from the SoccerNet [14] videos (500 matches) and covers more camera locations in addition to the main broadcast camera” [PAGE 5]. WC14 is narrower: “only central main camera without large zoom” [PAGE 5]. The retro-causal trap is that a method can look strong on WC14 because the camera distribution is narrow, while SN-Calib exposes center/left/right/other camera variation. The paper’s multiple-initialization strategy is a response: “run the optimization with multiple candidates and the best result is taken automatically by selecting the one with minimum loss” [PAGE 4]. This is not just a model choice; it is a historical correction to the assumption that one canonical broadcast view suffices.

The final genealogical trap is metric drift. The paper introduces AC@t, CR, and CS to summarize reprojection accuracy and completeness [PAGE 6]. Homography-based methods often emphasize IoU in top-view space. The paper notes that IoU evaluation can be biased because “H is used to evaluate the projection error” [PAGE 7]. Thus the genealogy of evaluation matters: a method optimized for pixel-space reprojection may not maximize top-view IoU, especially when ground-truth homographies are derived from visible field regions only. The source’s multi-metric reporting is therefore not decorative; it reveals that sports-field registration has several incompatible definitions of success depending on whether the application is augmented reality, player tracking, offside analysis, or virtual stadium rendering.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind audit asks: what does the investigator believe the task is, and how does that belief shape the chosen method? For TVCalib, there are two competing mental models. The first is the homography model: the field is a plane, the broadcast image is a projection of that plane, and the goal is to estimate a 3×3 matrix. The second is the camera-calibration model: the field is a known 3D object, the camera has physical intrinsics and extrinsics, and the goal is to estimate the camera state. The paper explicitly chooses the second: “we consider the task as a camera calibration problem” [PAGE 1]. This choice enables direct access to “position, rotation, and focal length” [PAGE 2], which are useful for augmented reality, automatic camera control, and offside detection. However, it also increases the dimensionality of the search and makes the method more sensitive to initialization and local minima.

The crisis-habit regression is the tendency to fall back on homography when the calibration objective becomes unstable. This regression is rational under uncertainty because homography has fewer degrees of freedom and is well suited to planar field markings. The paper acknowledges that “Team sports such as soccer are played on an approximately planar field, hence many approaches assume a 2D area and use homography estimation” [PAGE 5]. If the visible evidence is mostly the field plane, the homography baseline can be competitive, especially when camera parameters are decomposed only after homography estimation. The recursive trap is that the investigator may interpret this competitiveness as evidence that homography is the true task, when in fact it is evidence that the visible evidence is planar. The counter-trap is to preserve the 3D camera model but regularize it with strong initialization priors, multiple camera-location hypotheses, and loss-based verification.

The second mental model is the keypoint model. Classical calibration assumes accurate 2D-3D point correspondences. TVCalib rejects this because broadcast soccer often lacks visible keypoints. The source states: “keypoint correspondences are not directly used in our approach, since all potential visible keypoints are part of line segments” [PAGE 3]. The recursive trap is to assume that any line segment can substitute for keypoints without loss of constraint. In practice, a single line segment constrains pose only partially. The paper selects multiple points per line: “Ideal lines are sufficiently represented by two points, however, we have noticed more stable gradients if more than two points are selected” [PAGE 5]. This is a theory-of-mind correction: the optimizer’s gradient landscape benefits from more than the minimal geometric representation.

The third mental model is the segmentation model. The investigator may believe that segmentation is a solved preprocessing step. TVCalib’s results show this is false. With ground-truth segmentation on SN-Calib-test-center, TVCalib(τ) achieves high AC@ and CS [PAGE 7]. With predicted segmentation, performance drops. The paper states: “the lower performance ... when using the predicted segments shows that the segment localization module ... needs improvement despite the visually similar results for the majority of images” [PAGE 7]. The recursive trap is to trust visual similarity. A mask can look correct to a human while still providing insufficient endpoints, wrong subsegment identity, or ambiguous circle-side assignment. The counter-trap is to treat segmentation output as probabilistic evidence, not as exact geometric truth. TVCalib partially does this by using multiple points and padding masks, but it does not include an explicit outlier regularization term: “no regularization term is included that allows for outliers” [PAGE 8].

The fourth mental model is the verification model. The investigator may believe that a low reprojection loss proves correctness. The paper’s self-verification module says: “Self-verification aims to identify all images in which the model is unable to calibrate or estimate the homography” [PAGE 4]. The trap is that the loss is computed on the same segment annotations used for optimization. If segmentation is wrong, the loss can be low under a wrong pose that aligns the wrong evidence. The counter-trap is to use completeness-accuracy tradeoffs and to calibrate τ empirically. The paper selects “τ = 0.019” based on “the maximum CS on SN-Calib-valid-center” [PAGE 6]. This is a decision-theoretic correction: the threshold is chosen not because it is geometrically pure, but because it optimizes a compound empirical score.

The fifth mental model is the temporal model. Broadcast video is sequential, but TVCalib processes individual images. The paper’s future work mentions “the integration of temporal consistency and associated speedup” [PAGE 8]. The recursive trap is to assume independent frames are sufficient. In reality, temporal consistency can disambiguate local minima by favoring smooth pan, tilt, roll, and translation trajectories. The clock matters here: optimization runs for 2000 steps per image [PAGE 6]. If temporal propagation were used, the effective clock could be shortened by initializing from neighboring frames. Without temporal consistency, each frame pays the full optimization cost and risks independent local minima.

The final theory-of-mind adjudication is that TVCalib is strongest when the investigator treats it as a physically constrained differentiable estimator, not as a pure black-box regressor. The method’s advantages emerge when multiple initializations cover the camera-location distribution, segmentation is accurate, and the loss threshold rejects optimization failures. Its weaknesses emerge when the investigator assumes that dense semantic evidence guarantees geometric identifiability. The paper’s own evidence supports this: multiple initialization improves results, self-verification improves precision at the cost of completeness, and lens-distortion joint optimization can help or hurt depending on FoV and visible distortion.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto proof checks whether a claimed result survives physical, biomechanical, and environmental constraints. For TVCalib, the relevant physical layer is the broadcast camera’s plausible pose and optics. The method optimizes camera parameters within coarse ranges. The paper specifies: “pan ∈ U(−45°, 45°), tilt ∈ U(45°, 90°), roll ∈ U(−10°, 10°), aov ∈ U(8.2°, 90°), tz ∈ U(−40 m, −5 m), ty ∈ U(40 m, 110 m)” for main camera center [PAGE 9]. These ranges encode a physical prior: main-tribune broadcast cameras are elevated, outside the field, and generally looking downward. If an optimization solution implies a camera inside the field, below ground, or with implausible roll, it should be vetoed even if the image reprojection loss is modest. The paper’s initialization strategy uses these ranges: “Raw camera parameters are standardized to a zero mean and provided standard deviation” [PAGE 4]. This is a physical-layer constraint because it prevents the optimizer from wandering into non-broadcast camera states.

A formal veto condition can be written as follows. Let the optimized camera state be  
\[
\phi = (\mathrm{FoV}, t_x, t_y, t_z, \mathrm{pan}, \mathrm{tilt}, \mathrm{roll}).
\]
A physical plausibility veto applies if  
\[
t_z \notin [-40\,\mathrm{m}, -5\,\mathrm{m}]
\]
for main camera center, or more generally if the camera center lies outside the union of broadcast camera volumes. Similarly, if  
\[
\mathrm{tilt} \notin [45^\circ,90^\circ]
\]
or  
\[
\mathrm{roll} \notin [-10^\circ,10^\circ]
\]
beyond the allowed broadcast range, the solution should be rejected or downweighted. The source’s use of these ranges as initialization priors supports such a veto. If the optimization produces a camera below the field plane or with impossible tilt, the loss may be fitting segment aliases rather than true geometry.

The biomechanical layer concerns the camera operator or robotic camera rig. Broadcast cameras are mounted on tripods, pedestals, cranes, or cable systems. They have limited pan, tilt, and roll velocities and limited physical positions. The paper’s categories “Center,” “Left,” “Right,” and “Other” reflect this biomechanical reality: “there are other cameras, e.g., behind the goal and inside the goal, or above the field (spider cam)” [PAGE 5]. A veto at this layer would reject a solution that requires a physically impossible camera move, such as instantaneous relocation from main center to behind-goal position within a single frame, unless shot-boundary information justifies it. The paper’s multiple-initialization design is consistent with this: “a user can select the correct set, or this information is known from shot boundary and shot type classification (later denoted as stacked)” [PAGE 4]. If shot-boundary information says the camera is main center, then a left-side camera solution should be vetoed even if it has slightly lower loss, because it violates the biomechanical camera-location prior.

The weather and environmental layer introduces visibility constraints. Rain, snow, fog, glare, night lighting, and occlusions by players or officials can degrade semantic segmentation. The source does not explicitly model weather, but the segmentation dependency creates an environmental veto: if visible line segments are too sparse, corrupted, or occluded, the reprojection loss lacks sufficient geometric constraint. A formal condition is that the number of visible non-padded segment pixels must exceed a minimum information threshold. The paper’s padding mask \(m_C \in \{0,1\}\) sets distance to zero for padded or non-visible segments [PAGE 4]. If all visible segments are padded out, the loss cannot constrain pose. This is an information-veto: the image does not contain enough segment evidence to identify the camera state. The paper’s self-verification threshold is an implicit response: “we can directly reject all samples whose loss ... is below a threshold τ” [PAGE 4], although as noted the wording is likely inverted; the operational goal is to reject unreliable samples.

A physical veto proof can be stated as a conjunction of three conditions:

1. Geometric visibility veto:  
Let \(V\) be the set of visible, correctly labeled segment pixels. If \(|V|\) is too small, or if the visible segments do not span enough independent directions, the pose is underdetermined. The paper’s reliance on “at least two points for a line segment” and more points for stable gradients [PAGE 5] reflects this. A single line segment cannot uniquely determine full 6-degree-of-freedom camera pose plus FoV. Therefore, if the only visible evidence is one short line segment, the calibration result should be vetoed.

2. Planar degeneracy veto:  
If all visible segments lie on the field plane and the optimizer uses a homography decomposition, the solution may be valid for the plane but invalid for non-planar objects. The paper notes that “a larger projection error is frequently visible for goal segments since the height information is missing” [PAGE 6]. Therefore, if the application requires goal-post or crossbar localization, a purely planar solution should be vetoed or supplemented with 3D camera calibration.

3. Optical distortion veto:  
If the image contains strong radial distortion but the optimizer does not model it, straight field lines may appear curved, causing the line-distance loss to prefer an incorrect FoV or pose. The paper shows that lens-distortion correction can improve AC@5 for samples with visible distortion, but can also create local minima for low-FoV samples: “samples with lower FoV result in trivial local minima when jointly optimizing distortion coefficients and camera parameters” [PAGE 10]. Therefore, distortion modeling should be conditionally enabled based on evidence, not applied universally.

The cross-layer adjudication is therefore strict. TVCalib is physically plausible when the optimized camera lies within broadcast-camera ranges, when enough visible field segments exist, when the initialization covers the correct camera location, and when lens distortion is either negligible or properly modeled. It should be vetoed when the optimizer returns a camera outside the physical stadium volume, when visible evidence is too sparse or incorrectly segmented, when the solution depends on a planar approximation for non-planar objects, or when distortion-induced curvature is mistaken for field geometry. The paper’s own ablations support this adjudication: multiple initialization helps because it covers camera-location ambiguity [PAGE 8]; self-verification helps because it rejects unreliable loss cases; lens distortion helps only conditionally [PAGE 10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style counterfactual veto scenarios. Each scenario identifies a condition under which the claimed superiority of TVCalib can be rejected or falsified, together with a concrete prediction.

Scenario 1: Initialization coverage veto  
Claim under test: TVCalib’s one-step camera calibration is superior to homography baselines across broadcast camera locations.  
Counterfactual veto: If the camera initialization covers only the main center distribution, then TVCalib will fail on left, right, or other camera locations even if the loss function is correct.  
Source support: The paper reports camera distributions for “Center,” “Left,” “Right,” and “Other” [PAGE 5]. It also says multiple initialization is better: “initializing from three camera positions (argmin and stacked) is noticeably better than using only one initialization (center)” [PAGE 8].  
Verifiable prediction: On SN-Calib-test subsets containing left, right, or other cameras, a center-only TVCalib variant will show lower CS and lower AC@ than a multiple-initialization TVCalib variant. The gap should be largest for cameras whose true translation or pan lies outside the center initialization distribution. If a center-only variant matches multiple initialization on all camera types, the initialization-coverage veto is falsified.  
Formal check: Let \(\phi_0\) be the initialization set. If the true camera state \(\phi^*\) lies outside the support of \(\phi_0\), the optimizer may converge to a local minimum \(\hat{\phi}\) with higher loss or physically wrong pose. The veto is: reject the claim of universal superiority if performance gain vanishes when initialization support is expanded.

Scenario 2: Segmentation-error veto  
Claim under test: TVCalib’s camera calibration is more accurate because it uses dense segment correspondences.  
Counterfactual veto: If predicted segmentation is poor enough, TVCalib’s advantage over homography baselines disappears or reverses.  
Source support: The paper reports lower performance when using predicted segments instead of ground-truth segments. On SN-Calib-test-center, GT segmentation yields “68.7 88.0 96.1” AC@5/10/20 and “76.9” CS for TVCalib(τ), while predicted segmentation yields “57.6 81.7 93.2” and “72.6” [PAGE 7]. The paper also states: “the lower performance ... when using the predicted segments shows that the segment localization module ... needs improvement” [PAGE 7].  
Verifiable prediction: If the segmentation model is degraded by injecting label noise, missing segments, or wrong circle-side assignment, TVCalib’s AC@5 and CS will fall more sharply than a homography baseline that uses the same degraded masks. In particular, if line segments are shifted by a few pixels or assigned to wrong subsegments, the point-to-line distance loss may still decrease under a wrong pose. If TVCalib remains superior under severe segmentation degradation without additional regularization, the segmentation-error veto is falsified.  
Formal check: Let \(\hat{x}^{(c)}\) be predicted pixels and \(x^{(c)}\) be ground-truth pixels. If \(\hat{x}^{(c)}\) has systematic bias, the loss \(\mathcal{L}(\phi;\hat{x})\) may have a minimum at \(\phi \neq \phi^*\). The veto condition is that the probability of accepting a wrong pose increases as segmentation error increases. The paper’s lack of outlier regularization supports this veto: “no regularization term is included that allows for outliers” [PAGE 8].

Scenario 3: Low-FoV lens-distortion veto  
Claim under test: Jointly optimizing camera parameters and radial lens distortion improves calibration.  
Counterfactual veto: For low-FoV images, joint optimization can enter trivial local minima and worsen performance.  
Source support: The paper says: “samples with lower FoV result in trivial local minima when jointly optimizing distortion coefficients and camera parameters” [PAGE 10]. It also reports that WC14 is less affected “as usually a larger FoV is shown” [PAGE 10]. The lens-distortion ablation shows improvement on WC14 but mixed results on SN-Calib-valid-center [PAGE 10].  
Verifiable prediction: If lens-distortion optimization is enabled on a set of low-FoV SN-Calib images, CR and AC@ will decrease relative to the no-distortion variant, or the optimized FoV will collapse to an implausibly small value. Conversely, on high-FoV WC14 images with visible radial distortion, the distortion-enabled variant should improve AC@5 or reduce visible curvature. If enabling distortion does not degrade low-FoV cases and does not improve high-FoV cases, the scenario’s assumed breakdown is falsified.  
Formal check: The source reports that with distortion enabled, “the points are distorted too much (towards the principal point) or the FoV explodes, resulting in local minima” [PAGE 10]. A robust implementation would need a regularization or gating condition on FoV and distortion evidence. Without such a gate, the counterfactual veto is strongly supported by the paper’s own ablation.

These three RLVR veto scenarios define falsifiable boundaries for TVCalib. The method is not universally dominant; it is conditionally dominant when initialization covers the camera location, segmentation is accurate, and lens-distortion optimization is carefully gated. A verification system should therefore reject claims of unconditional superiority and require evidence across camera-location strata, segmentation-noise strata, and FoV/distortion strata.
</RLVR_COUNTERFACTUAL_VETOES>
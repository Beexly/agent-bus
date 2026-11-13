---
source: "arxiv_2504.20052v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 6536
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE+GSI Frontier Reasoning Foundry with exact XML sections. Need use DRIVE SOURCE pages. They supplied source text pages 1-10. Need comply invariants. No betting lines. Need deep multi-hop derivation >=400 words in THINK_TRACE. Need >=1000-word depth across exact XML sections. Need formal LaTeX, units, page citations, breakdown regimes. Need cite exact [PAGE N] markers and verbatim quotes. Need no toy equations. Need likely analyze paper "Can Geometry Save Central Views for Sports Field Registration?" But system says "GSE + GSI Frontier Reasoning Foundry" maybe expects sports? They mention zero betting lines, crisis habit regression vs counter-trap vs clock, physical/biomechanical/weather veto, RLVR counterfactual vetoes. Hmm this is weird. The source is computer vision paper. Need infer task? They want "DRIVE SOURCE" and pages. We need produce sections. Must avoid betting lines; no need betting context. Need perhaps frame as reasoning audit of paper. But sections include "RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock." Maybe can map to sports field registration and model/human? Need answer with paper analysis in those sections. Must satisfy exact XML tags. Need >=1000 words total. Need include formal equations: homography, conic matrix, pole-polar, vanishing line, point derivation, MRE. Units: pixels, meters/cm, dimensionless homography, probability? Need assumptions, singularity breakdown. Page citations with quotes. Need exact [PAGE N] markers. Need verbatim quotes from source. Need line references. Need discuss "geometry save central views" not betting. "CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof." We can interpret physical layer for sports field calibration: camera geometry, field marking thickness, occlusion, weather degrading segmentation. Biomechanical? Maybe players occlude markings. Need "veto proof" from paper: if center not detected, failure. If only small part ellipse visible, failure. If ellipse fit poor, failure. Need no unsupported. Could discuss physical layer veto (camera behind center, occlusions, line thickness 8-10cm, image resolution 1080p, noise). Need formal proof-ish: if center c error δc maps to vanishing line l = E c, homography constraints degrade; if δc large, no calibration. For weather, rain/low contrast affects Canny/segmentation edges. Biomechanical layer: players occlude center and markings; no guarantee. Need "counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND: Maybe "crisis habit regression" = learned detectors default to in-domain pattern; "counter-trap" = geometry from circle; "clock" = time budget. Need discuss habit regression: PnLCalib virtual keypoints learned on SoccerNet; out-of-domain central views fail. Counter-trap: geometric method. Clock: runtime/dictionary slowness, real-time broadcast. Need cite dictionary methods "450 samples [33]" [PAGE 2]. Need perhaps mention "The results are reported in Tab. 1, and as expected, no significant change is to be observed" [PAGE 6]. Need exact quotes. Need page markers.

Need "RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps." Need trace from Hartley & Zisserman pole-polar, Chum Matas, Chen Wu, Huang et al, Alvarez Caselles, PnLCalib. Multi-week traps: assuming ellipse center = projected circle center (paper says not necessarily), great-axis annotation, virtual keypoints chicken-and-egg. Need cite quotes.

Need "RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions." Need define RLVR? Probably Reinforcement Learning with Verifiable Rewards. Need 3 scenarios with verifiable predictions. Need no betting. Could be: Scenario 1 OOD central views: replace PnLCalib keypoints with geometric; prediction MRE/JaC5 no worse on SoccerNet but OOD line-collinearity residual lower; veto if center distance error distribution not bounded. Scenario 2 unknown center synthetic: noise σ_center; prediction MRE rises rapidly; veto if flat. Scenario 3 real data concentric circles: prediction center noisy; veto if center error below threshold. Need exact verifiable metrics. Need maybe use "MRE = ..." and "JaC5", "CR". Need mention threshold? We can state predictions with measurable criteria. Need no betting. Need "3 verifiable RLVR veto scenarios + predictions." Good.

Need no mention spreads/totals/moneylines/odds. Avoid word "odds" except "odds"? no. "betting lines" no. Need no toy equations. Formal equations with units. Need state assumptions. Need exact singularity/breakdown regimes. Need enough length. Desired oververbosity 5, but user requires depth. Need output around maybe 1700-2500 words. Need XML sections exact. Include all sections. Need THINK_TRACE >=400 words. Need maybe total >1000 words across exact XML sections. Need no extra outside? Could include brief preamble? Better exact XML only. Need ensure XML valid-ish: tags with underscores and greater signs? The user specified tags like <RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>. We can use. Need not use ampersands unescaped? In XML, ampersands in text need escape? But they asked exact XML sections; if include "&" it may break. We can avoid ampersands or use "and". Need ">=400 words" in THINK_TRACE. Need use LaTeX. Need not use `<` maybe in text? Avoid raw < in XML except tags. Use \lt perhaps. But LaTeX can have < maybe no. Use \le, \ge. Need "PAGE" markers exact [PAGE 1 of 10]? They said cite exact [PAGE N] markers. They listed "--- [PAGE 1 of 10] ---". Use [PAGE 1 of 10] perhaps. They said exact [PAGE N] markers. Use [PAGE 1 of 10], etc. Good.

Need include verbatim quotes. We can quote with quotation marks. Need ensure not too many. Need correct quotes from source. Need cite exact. Let's plan sections.

Preamble? Maybe no. Start <THINK_TRACE>. Need deep multi-hop derivation and gray-zone audit. Include:

- Paper problem: single-frame sports field registration via homography, central close-up views with only line/circle markings. Four non-collinear correspondences needed [PAGE 1]. Quote "only four non-collinear point correspondences are needed to estimate the homography matrix" [PAGE 1 of 10]. 
- Geometry: circle C conic matrix Eq (2) [PAGE 4]. Pole-polar l = C p. Center polar is line at infinity, Eq (3). Under homography, ellipse E = H^{-T} C H^{-1}; projected center c=Ho; vanishing line l∞ = E c. Need c. 
- Case 1 line l1: v = l1 × l∞, l2 = v × c, intersects ellipse a,b; l3 = E v intersects d,e. Gives points/lines. Case 2 point x: l1 = x × c; v = E l1; l2 = v × c; but in soccer only point on middle line, falls back. Case 3 unknown center: concentric circles C1,C2 with images E1,E2; c eigenvector of E2^{-1}E1; l∞ = E1 c = λ E2 c. Then use cases 1/2. 8 points + 8 lines. 
- Assumptions: known field template, known circle radius r and center o; ellipse fit; center detected or concentric edges; left-right ambiguity resolved via camera priors; line thickness constant ~10 cm. 
- Breakdown/singularities: if c not precise, l∞ unstable; if E singular/degenerate (circle edge on? ellipse nearly line? no); if only small arc visible, ellipse fit ill-conditioned; if center outside image or occluded, Case 3 noisy; if center keypoint detector fails; if only line/circle no points and no center, cannot derive enough; if projective degeneracy when v at infinity? Need formal. If H singular? Homography invertible. If v and c coincide? l2 degenerate; if l1 parallel to l∞? v = l1×l∞ at infinity? Need maybe mention. If ellipse is tangent? If line l1 tangent to ellipse? Then a=b degenerate. If l1 through center? OK. If v=c? impossible? If center on l1? Then l1=x×c? Actually if x lies on line through c? l1 defined. If x = c? degenerate. If E c = 0? c on E impossible (center not on ellipse generally). If E2^{-1}E1 eigenvalue repeated? Need common self-polar triangle ambiguity? Huang et al result. But paper says c is one eigenvector of E2^{-1}E1. If concentric circles with same center, c eigenvector; other eigenvectors correspond to circular points? Need no overdo. 
- Gray-zone: synthetic vs real: synthetic noise linear; center noise rapid; real concentric detection poor. Quote "The retrieved centers are too noisy to be used in real-world scenarios." [PAGE 7 of 10]. Quote "the level of error seems to linearly follow the noise applied to the ellipse points" [PAGE 6 of 10]. Quote "reprojection error rises rapidly with this type of noise" [PAGE 6 of 10]. 
- Audit: PnLCalib OOD: quote "the out-of-distribution images are more subject to high error rates" [PAGE 5 of 10]. Table 1 no significant change [PAGE 6]. 
Need around 500-700 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX with units, page citations, breakdown. Can list equations. Need ensure formal. Include homography mapping: \mathbf{x} \sim H \mathbf{X}, H \in PGL(3,\mathbb{R}) dimensionless. DLT requires 4 non-collinear correspondences. Conic matrix C dimensionless? Homogeneous coordinates dimensionless? Actually 2D homogeneous coordinates are scale-free; C has units? In projective geometry, conic matrix entries can be normalized; no SI. But radius r in meters, center o in meters (homogeneous). Equation x^T C x = 0. Matrix includes r^2; if x=(X,Y,1) with X,Y in meters, C entries have meters? But homogeneous coordinates scale-free. Better state "homogeneous coordinates are dimensionless representatives; metric field parameters enter as ratios in meters with template normalization." But user wants units. We can state units: field coordinates X,Y in m; r in m; image coordinates u,v in px; homography dimensionless after template normalization; MRE in px; noise σ in px; line thickness in cm. C entries may carry m^2 due to construction if last coordinate 1; but projective scale. Hmm need be precise: In Eq (2), if x=(x,y,1)^T with x,y in m, C entries include o_x, o_y, o_x^2+o_y^2-r^2 in m^2? Actually row 1 [1,0,-o_x], row 2 [0,1,-o_y], row 3 [-o_x,-o_y,o_x^2+o_y^2-r^2]. Multiplying x: first coord x - o_x (m), second y - o_y (m), third -o_x x -o_y y + o_x^2+... -r^2 (m^2). x^T C x = (x-o_x)^2+(y-o_y)^2-r^2? Wait dimension: x^T C x = x^2 -2 o_x x + ... yes m^2. So C entries are m or m^2 mixed if using affine coords? Not a homogeneous matrix with consistent units. Projective geometry often dimensionless. To avoid unit nitpick, say "under the paper's dimensionless homogeneous normalization; r and o are taken in template units (m) after normalization." Or list "C has no physical unit under homogeneous normalization; if affine coordinates are in m, the quadratic form has m^2 and is set to zero." Good. 
Need equations:
1. \mathbf{x}^\top C \mathbf{x}=0, C = ...
2. l = C p
3. C o = -r^2 l∞ = -r^2 (0,0,1)^T
4. E = H^{-T} C H^{-1}, c=H o, l∞=E c.
5. Case1 v = l1 × l∞, l2 = v × c, {a,b}=l2∩E, l3=E v, {d,e}=l3∩E.
6. Case2 l1=x×c, v=E l1, l2=v×c.
7. Case3 c eigenvector E2^{-1}E1, l∞=E1 c=λ E2 c.
8. MRE = (1/N) Σ ||H x_i - \hat H x_i||_2. Units px.
9. Synthetic noise model: p_i^ε = p_i + ε_i, ε_i ~ N(0, σ^2 I_2), σ px. 
10. DLT: x' × H x =0? Need.
Assumptions and breakdown regimes: nondegenerate ellipse, center known/estimable, enough support, no pure tangent, line thickness sufficient, center not occluded. Singularities: E singular (rank<3) if circle projects to line/parabola at horizon? Actually a circle on plane under finite camera projects to ellipse; if plane through camera? At horizon? If circle crosses horizon? Degenerate conic. Homography H singular? no. c=0? no. l∞ = E c =0 if c is null vector of E; projected center not on ellipse, so not zero. If c erroneous and near null? no. If E1 and E2 nearly identical due to thin thickness, E2^{-1}E1 close to identity, eigenvector c ill-conditioned. This is key. Need mention line thickness 8 cm [PAGE 6] and "consistent thickness of about ten centimeters" [PAGE 4]. Quote. 
Need perhaps include "four to six points" for PnP [PAGE 1]. 
Need no fake ratios. Good.

RETROCAUSAL_GENEALOGY: Historical lineage: projective geometry pole-polar (Hartley & Zisserman [22]), ellipse correspondences Chum & Matas [6], Chen & Wu [4], Huang et al common self-polar triangle [24][25], Alvarez & Caselles [1], Gupta et al [19], great-axis approximation Andrews [2], Cuevas [9], Roboflow [36], PnLCalib [21], PnLCalib keypoints. Multi-week traps: 
- Trap 1: ellipse center = projected circle center (quote "the projection of the circle center does not necessarily land on the ellipse center" [PAGE 3 of 10]).
- Trap 2: great-axis matching to circle points (quote "matching between the extremities of the great ellipse axis and the orange points ... is an approximation" [PAGE 3]).
- Trap 3: virtual keypoint chicken-and-egg (quote "There is thus a chicken-and-egg problem here." [PAGE 3]).
- Trap 4: dictionary enumeration slow and assumes known cameras; quote "tend to be quite slow in practice" [PAGE 2].
- Trap 5: OOD generalization; quote Sattler et al "fail to generalize beyond their training sets" [PAGE 2].
Need map to multi-week traps. Good.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need discuss agents/operators? We can frame as "broadcast calibration agent under crisis". Crisis habit regression: model falls back to learned virtual keypoints; on OOD central views, PnLCalib produces unbounded errors; detector tries to regress pose from textureless grass. Counter-trap: geometry uses circle and pole-polar to derive correspondences; avoids hallucinating keypoints; but relies on center detection; if center missing use concentric circles but noisy. Clock: broadcast time constraints; dictionary methods slow; geometric method adds ellipse fitting/RANSAC but bottom-up; no runtime numbers in paper. Need avoid inventing runtime. Quote dictionary 450 samples [PAGE 2]. Theory of mind: what does method "believe" about detector? It assumes off-the-shelf detector can segment circle and detect center; if center detector fails, fallback. If both fail, no calibration. Need "recursive" maybe model of user/annotator: annotator needs homography to annotate virtual keypoints, but virtual keypoints need homography; geometry breaks recursion. Quote chicken-and-egg. Need "crisis habit regression vs counter-trap vs clock" maybe as subhead within section. Need include no betting. Good.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need interpret:
- Physical: camera pose/optics; field geometry; center out of image; small arc; ellipse fit; line thickness 8-10 cm; 1080p; noise. Veto if center unavailable and arcs insufficient. Quote "views, where only a part of the ellipse is visible ... remain very challenging" [PAGE 7]. "when the central circle center is out of the image or cannot be detected" [PAGE 8].
- Biomechanical: players occlude markings; center keypoint detector fails due to occlusion; quote "due to occlusion with players" [PAGE 4]. Also player motion creates occlusion. Veto if center occluded. 
- Weather: poor markings' definition, poor image quality; rain/snow/low contrast affects Canny; quote "poor markings' definition in the image" [PAGE 4], "poor image quality" [PAGE 7]. Need proof: geometric pipeline is deterministic given ellipse and center; no geometric derivation can recover from missing center without additional constraints. The paper's own experiments with concentric circles "retrieved centers are too noisy" [PAGE 7]. So veto proof: if center error exceeds threshold or arc support below, calibration must be vetoed; not a betting line. Need maybe formal condition: For derived line l∞ = E c, perturbation δc yields δl∞ = E δc + δE c; if ||δc|| large relative to ellipse semiaxis, l∞ unstable. Could state exact singularity: if E1 and E2 nearly equal, E2^{-1}E1 -> I, eigenvector not unique (any vector), center unobservable. That's powerful. Need include "line thickness insufficient to guarantee reliable circle center extraction" quote [PAGE 8]. 
- Cross-layer: physical veto can't be overridden by algorithmic confidence; learned keypoint confidence is not evidence under OOD; geometry requires center. Need "veto proof" maybe not formal mathematical proof but logical. Use "adjudication: if any of these predicates hold, calibration is vetoed." Need avoid toy ratios. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable RLVR veto scenarios + predictions. Need define each with counterfactual, verifier, prediction, veto. 
Scenario 1: In-domain SoccerNet central views: replace PnLCalib keypoints with geometry. Prediction: Table 1 metrics unchanged within noise: JaC5 22.4%, MRE ~12.9 px, CR 79.5% vs PnLCalib 22.4%, 12.8, 79.5. Quote table [PAGE 6]. Veto if geometric keypoints cause significant degradation or if line-collinearity residual on SN is not comparable. 
Scenario 2: OOD central views: PnLCalib predicted opposed circle keypoints should have unbounded center-to-line distance; geometry should by construction have zero residual for derived pairs collinear with center. Prediction: OOD distribution has more high-error tail than SN; geometry residual = 0 up to ellipse/center noise. Quote "By construction, our geometric method derives pairs of points on the ellipse that are collinear with the circle center." [PAGE 5]. Veto if OOD PnLCalib residual bounded like SN or geometry residual not near zero. 
Scenario 3: Unknown center synthetic: With σ_center increasing 0-25 px, MRE rises rapidly; with σ_ellipse increasing, MRE linear. Prediction: center noise is dominant; real concentric detection poor. Veto if center noise does not degrade or real center extraction error below threshold. Need use "standard deviation σ between 0 and 25 pixels" [PAGE 6]. Quote "reprojection error rises rapidly with this type of noise" [PAGE 6]. "retrieved centers are too noisy" [PAGE 7]. 
Need maybe "verifiable RLVR" means the verifier can check metrics on held-out data. We can state exact counters. Need no betting. Good.

Need ensure total words >1000. We'll write enough. Need exact XML sections, no markdown? Could include paragraphs. Need maybe use LaTeX inline. Need avoid raw "&" in text. We can use "and". Need avoid "<" in text? Use \le, \ge. In XML, LaTeX $\le$ okay. Avoid `&`. Use `%` okay. Use `>`? The XML tags contain >. Text can include >? Fine. But avoid `<` in text. Use `\lt` if needed. 
Need not include "odds". No "spread" maybe word "spread" could be interpreted? Avoid "spread". "totals" avoid. "moneyline" avoid. "betting" avoid. Good.

Need include exact page citations with [PAGE N of 10]. Verbatim quotes. Need be careful quotes are exact. Use quotes from source:
- "only four non-collinear point correspondences are needed to estimate the homography matrix" [PAGE 1 of 10] yes.
- "four to six points are required to estimate the projection matrix of a pinhole camera" [PAGE 1].
- "broadcast cameras often happen to zoom in on an action taking place nearby a mostly isolated circular marking on the sports field, usually around the center circle" [PAGE 1].
- "the projection of the circle center does not necessarily land on the ellipse center" [PAGE 3].
- "There is thus a chicken-and-egg problem here." [PAGE 3].
- "tend to be quite slow in practice" [PAGE 2].
- "fail to generalize beyond their training sets" [PAGE 2].
- "The retrieved centers are too noisy to be used in real-world scenarios." [PAGE 7].
- "By construction, our geometric method derives pairs of points on the ellipse that are collinear with the circle center." [PAGE 5].
- "the level of error seems to linearly follow the noise applied to the ellipse points" [PAGE 6].
- "the reprojection error rises rapidly with this type of noise" [PAGE 6] - exact? Source: "Figure 8b shows that the reprojection error rises rapidly with this type of noise" [PAGE 6]. Quote okay.
- "the out-of-distribution images are more subject to high error rates" [PAGE 5].
- "The few failures are due to poor ellipse fitting or to bad center detection." [PAGE 7] caption. Good.
- "views, where only a part of the ellipse is visible, excluding the middle line for instance, remain very challenging views to calibrate or register." [PAGE 7].
- "the center is occluded or almost invisible due to poor image quality" [PAGE 7].
- "poor markings' definition in the image" [PAGE 4].
- "consistent thickness of about ten centimeters" [PAGE 4].
- "assuming a field marking thickness of 8 centimeters" [PAGE 6].
- "line thickness is probably insufficient to guarantee a reliable circle center extraction" [PAGE 8].
- "when the central circle center is out of the image or cannot be detected" [PAGE 8].
- "The results are reported in Tab. 1, and as expected, no significant change is to be observed with our keypoints." [PAGE 6].
- Table 1 values. Good.

Need maybe mention "C1 and C2" etc.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown." Need include formal LaTeX equations and units. We can use display math. Need note "subscripts with \mathrm" etc. Need not be perfect. We can include "x" vectors. Need maybe use `\mathbf{x}`. Good.

Need "ZERO TOY EQUATIONS": Avoid fake ratios. We only use paper equations and MRE. Good.

Need "ZERO BETTING LINES": no lines. But "line correspondences" is not betting line; it's geometric. Is "line" okay? They refer "betting lines" specifically. We can mention "geometric line correspondences"; okay.

Need "GSE + GSI Frontier Reasoning Foundry" maybe they expect "THINK_TRACE" etc. Fine.

Let's draft. Need watch XML: In `<SOURCE_OPERATORS_AND_EQUATIONS>` text can contain `$` and `{}`. Fine. Need no `&` unescaped. Use `\text{and}`. Need no raw `<` in text. In LaTeX `\lt` not `<`. Use `>0` maybe okay. Avoid `<`. 
Need exact tags. 
Need maybe escape `\`? No, plain text. 
Need word count: Let's aim ~2200 words. 
Need THINK_TRACE >=400 words. We'll write ~700 words. 
Need all sections. 
Let's construct carefully.

Start:

<THINK_TRACE>
The paper's target is not a generic "sports model" but a geometric identifiability problem... 
... multi-hop derivation:
(1) registration as homography...
(2) circle as conic...
(3) pole-polar...
(4) image ellipse and projected center...
(5) if line support, derive...
(6) if point support, derive...
(7) fallback concentric...
Audit: central views with only center circle and halfway line; PnLCalib virtual keypoints OOD failure; geometry complements. Gray zones...
Include equations maybe minimal. Need not duplicate too much. 
</THINK_TRACE>

Need mention exact page marker. Good.

Then SOURCE_OPERATORS_AND_EQUATIONS. Need formal. 
Need sections with paragraphs. 
Let's write with subheadings in text but not XML tags? Fine.

Need maybe mention "LaTeX equations are stated with assumptions." 
Let's include a list with equations.

Potential issue: In XML, `\begin{bmatrix}1 & 0 & -o_x \\ ...` contains `&` which in XML must be escaped. Better avoid raw `&` in LaTeX matrix. Use `\begin{bmatrix} 1 \quad 0 \quad -o_x \\ 0 \quad 1 \quad -o_y \\ -o_x \quad -o_y \quad o_x^2+o_y^2-r^2 \end{bmatrix}` no ampersands. Good. Use `\quad`. Avoid `&`. 
Use `\mathbf{x}^\top C \mathbf{x}=0`. 
Use `C \mathbf{o} = -r^2 \mathbf{l}_\infty`. Good. 
Use `\mathbf{l}=C\mathbf{p}`. 
Use `\mathbf{v} = \mathbf{l}_1 \times \mathbf{l}_\infty`. 
Use `\mathbf{l}_2 = \mathbf{v} \times \mathbf{c}`. 
Use `\mathbf{l}_3 = E \mathbf{v}`. 
Use `\mathbf{v}=E\mathbf{l}_1`. 
Use `E_2^{-1}E_1 \mathbf{c} = \lambda \mathbf{c}`? Actually c is eigenvector of E2^{-1}E1. Good. 
Need units: "If affine field coordinates are in m, the zero set is in m^2; projective normalization removes scale." 
Need "MRE" formula. 
Need "noise model" formula. 
Need "DLT residual" maybe `\mathbf{x}' \times H \mathbf{X} = \mathbf{0}`. 
Need "breakdown regimes" list. 
Need "singularity" exact: `E` rank <3; `E_2^{-1}E_1 \to I` if thickness ->0, center eigenvector indeterminate; `l_1` tangent to `E` yields `a=b`; `x=c` yields `l_1=0`; `v=c` yields `l_2=0`; only small arc causes ellipse fit ill-conditioned. Good. 
Need "assumptions" list. 
Need cite. Good.

RETROCAUSAL_GENEALOGY. Need historical lineage and multi-week traps. Write ~400 words. 
RECURSIVE_THEORY_OF_MIND. Write ~300 words.
CROSS_LAYER_VETO_ADJUDICATION. Write ~400 words.
RLVR_COUNTERFACTUAL_VETOES. Write ~400 words. Total >2000.

Need maybe mention "PAGE 8 of 10" quote "line thickness is probably insufficient to guarantee a reliable circle center extraction" exact source: "mainly in the concentric setup where the line thickness is probably insufficient to guarantee a reliable circle center extraction." [PAGE 8]. Good.

Need no "betting" etc. Good.

Let's produce final with exact XML sections. Ensure no markdown code fences? Could just plain. Use XML tags. Need no extra preamble. Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper is best read as a geometric identifiability audit, not as a detector paper. The task is single-frame sports-field registration: estimate a homography that maps the top-view field template to the broadcast image, or estimate camera parameters. The paper states that “only four non-collinear point correspondences are needed to estimate the homography matrix” and that “four to six points are required to estimate the projection matrix of a pinhole camera” [PAGE 1 of 10]. The hard case is a zoomed central view where the visible markings are dominated by a circle and perhaps one line. In that regime, learned virtual keypoints and line-only methods can become underconstrained or out-of-domain.

Multi-hop derivation:
1. A world circle on the field plane is represented as a conic. The paper writes the point-on-circle condition as \(\mathbf{x}^{\top} C \mathbf{x}=0\) and gives the matrix form for a circle centered at \(\mathbf{o}=(o_x,o_y,1)^\top\) with radius \(r\) [PAGE 4 of 10]. 
2. The key projective operator is pole-polar: for conic \(C\) and point \(\mathbf{p}\), the polar line is \(\mathbf{l}=C\mathbf{p}\) [PAGE 4 of 10]. The polar of the circle center \(\mathbf{o}\) is the line at infinity of the supporting plane; the paper derives \(C\mathbf{o}=-r^2 \mathbf{l}_\infty\) [PAGE 4 of 10]. 
3. Under the homography \(H\), the circle becomes an image ellipse \(E=H^{-\top} C H^{-1}\), and the projected circle center is \(\mathbf{c}=H\mathbf{o}\). Hence the image vanishing line is \(\mathbf{l}_\infty=E\mathbf{c}\) [PAGE 4 of 10]. The entire method depends on getting \(\mathbf{c}\) or \(E\mathbf{c}\) accurately.
4. If a line correspondence \(\mathbf{l}_1\) is available, the vanishing point of parallels to \(\mathbf{l}_1\) is \(\mathbf{v}=\mathbf{l}_1\times\mathbf{l}_\infty\); the parallel through \(\mathbf{c}\) is \(\mathbf{l}_2=\mathbf{v}\times\mathbf{c}\); intersections with \(E\) give points \(\mathbf{a},\mathbf{b}\); the polar \(\mathbf{l}_3=E\mathbf{v}\) gives points \(\mathbf{d},\mathbf{e}\) [PAGE 4 of 10]. 
5. If a point correspondence \(\mathbf{x}\) is available, the line through \(\mathbf{x}\) and \(\mathbf{c}\) is \(\mathbf{l}_1=\mathbf{x}\times\mathbf{c}\); its pole is \(\mathbf{v}=E\mathbf{l}_1\); then \(\mathbf{l}_2=\mathbf{v}\times\mathbf{c}\) gives another pair on \(E\) [PAGE 4 of 10]. The paper notes that in soccer this often collapses back to the line case because available central-view points lie on the middle line [PAGE 4 of 10].
6. If the center is unknown, the paper uses the constant marking thickness. The inner and outer edges are treated as concentric circles \(C_1,C_2\) with images \(E_1,E_2\). The imaged center \(\mathbf{c}\) is an eigenvector of \(E_2^{-1}E_1\), and \(\mathbf{l}_\infty=E_1\mathbf{c}=\lambda E_2\mathbf{c}\) [PAGE 5 of 10].

The gray-zone audit is where the claims need care. The geometry is exact only under exact ellipse equations, exact correspondence of the concentric structure, and an accurate projected center. The paper itself warns that “the projection of the circle center does not necessarily land on the ellipse center” [PAGE 3 of 10], which invalidates great-axis shortcuts. It also reports that synthetic ellipse-point noise produces error that “seems to linearly follow the noise applied to the ellipse points,” but center noise causes reprojection error that “rises rapidly with this type of noise” [PAGE 6 of 10]. On real concentric-circle extraction, the paper is blunt: “The retrieved centers are too noisy to be used in real-world scenarios” [PAGE 7 of 10]. Thus the method is not a universal rescue for central views; it is a conditional rescue when a trustworthy circle and center or a trustworthy concentric pair can be extracted. The out-of-domain experiment supports the motivation: PnLCalib’s learned keypoints are bounded on SoccerNet but “the out-of-distribution images are more subject to high error rates” [PAGE 5 of 10]. The geometric construction is valuable because, “By construction, our geometric method derives pairs of points on the ellipse that are collinear with the circle center” [PAGE 5 of 10]. But the same construction has a hard veto when the center is missing, occluded, or only a small arc is visible. That is the central tension: geometry can save some central views, but not all central views.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. Field template coordinates \((X,Y)\) are in metres; image coordinates \((u,v)\) are in pixels; \(r\) and marking thickness are in metres or centimetres; the homography \(H\in PGL(3,\mathbb{R})\) is dimensionless after template normalization; reprojection error and noise standard deviations are in pixels. Homogeneous representatives are scale-free, so the conic quadratic form is set to zero; if affine field coordinates are in metres, the quadratic form has units of \(\mathrm{m}^2\) and is normalized projectively.

World circle and conic:
\[
\mathbf{x}^{\top} C \mathbf{x}=0,\qquad
C=\begin{bmatrix}
1 \quad 0 \quad -o_x\\
0 \quad 1 \quad -o_y\\
-o_x \quad -o_y \quad o_x^2+o_y^2-r^2
\end{bmatrix}.
\]
This is Eq. (1) and Eq. (2) in the paper [PAGE 4 of 10]. Assumption: the field template, circle center \(\mathbf{o}\), and radius \(r\) are known. Breakdown: if \(\mathbf{x}\) is not on the circle, the quadratic form is nonzero; if \(r=0\), the conic degenerates to a point conic.

Pole-polar:
\[
\mathbf{l}=C\mathbf{p},\qquad
C\mathbf{o}=-r^2\mathbf{l}_\infty=-r^2\begin{bmatrix}0\\0\\1\end{bmatrix}.
\]
This is Eq. (3) and the pole-polar relation [PAGE 4 of 10]. Assumption: \(C\) is a nondegenerate conic. Breakdown: if \(C\) is singular, the polar is not uniquely defined; if \(\mathbf{p}\) lies on \(C\), the polar is tangent at that point.

Image ellipse and vanishing line:
\[
E=H^{-\top} C H^{-1},\qquad
\mathbf{c}=H\mathbf{o},\qquad
\mathbf{l}_\infty=E\mathbf{c}.
\]
This is Eq. (4) [PAGE 4 of 10]. Assumption: \(H\) is an invertible plane homography and the camera does not project the circle to a degenerate conic. Breakdown: if \(H\) is ill-conditioned, \(E\) and \(\mathbf{c}\) are unstable; if \(E\mathbf{c}\approx \mathbf{0}\), the vanishing-line estimate is undefined; in practice this is approached when the center estimate is poor.

Case 1, line support:
\[
\mathbf{v}=\mathbf{l}_1\times\mathbf{l}_\infty,\qquad
\mathbf{l}_2=\mathbf{v}\times\mathbf{c},\qquad
\{\mathbf{a},\mathbf{b}\}=\mathbf{l}_2\cap E,\qquad
\mathbf{l}_3=E\mathbf{v},\qquad
\{\mathbf{d},\mathbf{e}\}=\mathbf{l}_3\cap E.
\]
These are Eq. (5), Eq. (6), and Eq. (7) [PAGE 4 of 10]. Assumption: \(\mathbf{l}_1\) is not tangent to \(E\), and \(\mathbf{v}\neq\mathbf{c}\). Breakdown: if \(\mathbf{l}_1\parallel\mathbf{l}_\infty\), the vanishing point moves to infinity; if \(\mathbf{l}_1\) is tangent, \(\mathbf{a}=\mathbf{b}\); if \(\mathbf{v}=\mathbf{c}\), then \(\mathbf{l}_2=0\).

Case 2, point support:
\[
\mathbf{l}_1=\mathbf{x}\times\mathbf{c},\qquad
\mathbf{v}=E\mathbf{l}_1,\qquad
\mathbf{l}_2=\mathbf{v}\times\mathbf{c}.
\]
These are Eq. (8), Eq. (9), and Eq. (10) [PAGE 4 of 10]. Assumption: \(\mathbf{x}\neq\mathbf{c}\). Breakdown: if \(\mathbf{x}=\mathbf{c}\), then \(\mathbf{l}_1=0\); in soccer, if \(\mathbf{x}\) is on the middle line, the construction reduces to Case 1, as the paper notes [PAGE 4 of 10].

Case 3, unknown center:
\[
E_2^{-1}E_1\mathbf{c}=\lambda\mathbf{c},\qquad
\mathbf{l}_\infty=E_1\mathbf{c}=\lambda E_2\mathbf{c}.
\]
This follows the concentric-circle result attributed to Huang et al. and used in Section 3.3 [PAGE 5 of 10]. Assumption: inner and outer edges are concentric and both ellipses are accurately fitted. Breakdown: if marking thickness is too small relative to image resolution, \(E_2^{-1}E_1\to I\), and the eigenvector \(\mathbf{c}\) is indeterminate; the paper states that “the line thickness is probably insufficient to guarantee a reliable circle center extraction” [PAGE 8 of 10]. This is the central singularity of the fallback.

Homography and PnP constraints:
\[
\mathbf{x}'\times H\mathbf{X}=\mathbf{0},\qquad H\in PGL(3,\mathbb{R}),\qquad
\mathbf{x}=\pi(H\mathbf{X}).
\]
The paper’s baseline requirement is four non-collinear point correspondences for \(H\), or four to six points for PnP depending on solver [PAGE 1 of 10]. The geometric method can output “8 point correspondences” and “8 lines from their tangents” [PAGE 5 of 10]. Assumption: derived points and lines are correctly matched left-right and up-down; the paper resolves this with camera-position priors [PAGE 5 of 10]. Breakdown: wrong left-right assignment produces a valid-looking but wrong homography.

Reprojection metric:
\[
\mathrm{MRE}=\frac{1}{N}\sum_{i=1}^{N}\left\|H\mathbf{x}_i-\hat{H}\mathbf{x}_i\right\|_2.
\]
The paper defines this mean reprojection error for synthetic visible 3D points [PAGE 6 of 10]. Noise model:
\[
\mathbf{p}_i^{\epsilon}=\mathbf{p}_i+\epsilon_i,\qquad
\epsilon_i\sim\mathcal{N}(\mathbf{0},\sigma^2 I_2),
\]
with \(\sigma\) in pixels; the paper varies \(\sigma\) between \(0\) and \(25\) pixels for 100 random cameras [PAGE 6 of 10]. The quantitative table reports JaC5 in percent, MRE in pixels, and CR in percent [PAGE 6 of 10]. Assumption: the synthetic camera sampling covers plausible main-camera views. Breakdown: the synthetic sweep isolates geometry but does not prove real-world center extraction quality; the paper’s real concentric-circle centers are explicitly too noisy [PAGE 7 of 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is projective geometry applied to broadcast calibration. The pole-polar relation and line at infinity come from classical multiple-view geometry, cited as Hartley and Zisserman [PAGE 4 of 10]. Earlier sports-specific work used ellipses through pole-polar constraints for hockey rink registration, and Alvarez and Caselles derived a closed-form homography from the center circle, halfway line, and up to three points on that line [PAGE 3 of 10]. Generic ellipse-based calibration work includes Chum and Matas linearizing ellipse correspondences, Chen and Wu using two coplanar circles, Huang et al. using the common self-polar triangle of separate ellipses, and Huang et al. recovering intrinsics from concentric circles in three views [PAGE 3 of 10]. The paper’s contribution is to convert one circle correspondence into point and line correspondences that can be fed into DLT or PnP, rather than only estimating a homography.

The retrotemporal trap is the great-axis shortcut. A common habit is to match the extremities of the fitted ellipse’s major axis to known circle points. The paper warns that “the projection of the circle center does not necessarily land on the ellipse center” and that the great-axis matching “is an approximation” whose negative effect is shown in Fig. 3 [PAGE 3 of 10]. Another trap is the virtual-keypoint chicken-and-egg: methods add virtual points on circles or grids to train detectors, but those annotations require a homography, and a homography requires enough visible primitives. The paper states, “There is thus a chicken-and-egg problem here” [PAGE 3 of 10]. A third trap is dictionary enumeration: the paper says dictionary methods assume known camera ranges and “tend to be quite slow in practice,” with an example dictionary of 450 samples [PAGE 2 of 10]. A fourth trap is trusting learned pose regression beyond its domain; the paper cites Sattler et al. that CNNs for absolute pose regression “fail to generalize beyond their training sets” [PAGE 2 of 10]. These are multi-week traps because each can look plausible on in-domain SoccerNet frames while failing exactly on the central OOD views the method targets.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under a difficult central view, the default learned system regresses to virtual keypoints learned from top-tier main-camera appearances. The paper’s OOD test shows that this habit is not reliable: PnLCalib’s opposed circle keypoints are bounded on SoccerNet but produce high error rates out of distribution [PAGE 5 of 10]. The model is effectively trying to infer perspectivity from textureless grass or from points whose only cue is location along a curve; the paper explicitly says this “rather relates to an APR task than a detection or matching task” [PAGE 2 of 10]. That is a crisis habit: reuse the in-domain prior even when the geometry has changed.

Counter-trap: the geometric method refuses to hallucinate virtual keypoints. It uses the visible circle, the pole-polar relation, and the projected center to construct points and lines that are consistent with the actual ellipse. The paper’s strongest counter-trap statement is that the method “derives pairs of points on the ellipse that are collinear with the circle center” [PAGE 5 of 10]. In the qualitative OOD examples, the geometric points improve the estimated perspectivity when the circle and center detectors work [PAGE 7 of 10]. But this counter-trap has a recursive dependency: it needs a detector to find the circle and often the center, and when the center detector fails, the fallback needs concentric inner and outer edges. The paper’s own real-data result says the retrieved centers are “too noisy” [PAGE 7 of 10]. So the method’s theory of mind about the detector is: trust recognizable circular markings, distrust learned virtual locations, and explicitly model center-detection failure. 

Clock: broadcast calibration has a time budget, and dictionary search grows with the camera range; the paper criticizes dictionary methods as slow and dependent on known camera parameters [PAGE 2 of 10]. The geometric method adds ellipse fitting and RANSAC-style edge extraction, but it does not require an exhaustive dictionary. The clock pressure also affects annotation: an annotator cannot wait for a homography that cannot be derived. The paper’s annotation argument is that the method enables annotation where “no homography could be derived from points or lines alone” [PAGE 7 of 10]. The recursive trade is therefore: learned habit is fast but brittle OOD; geometry is more explainable but depends on center quality; the clock vetoes methods that require exhaustive search or repeated manual correction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The geometric derivation is deterministic given \(E\) and \(\mathbf{c}\), but it is not robust to missing support. If the central circle center is outside the image or cannot be detected, the paper’s own conclusion flags this as unsolved: “when the central circle center is out of the image or cannot be detected” remains for future work [PAGE 8 of 10]. If only a small arc is visible, ellipse fitting is ill-conditioned, and the paper says such views “remain very challenging views to calibrate or register” [PAGE 7 of 10]. If the marking thickness is only about ten centimetres, or eight centimetres in the synthetic setup [PAGE 4 of 10; PAGE 6 of 10], the inner and outer ellipses may be nearly identical at 1080p, making \(E_2^{-1}E_1\) close to the identity and the center eigenvector ill-defined. The paper’s line-thickness caveat is explicit [PAGE 8 of 10]. Physical veto predicate: if center error or ellipse-fit residual exceeds the image-space support, the derived vanishing line is not identifiable; calibration must be vetoed.

Biomechanical veto. Players occlude the center and markings. The paper lists “occlusion with players” as a cause of center-detection failure [PAGE 4 of 10] and says center-detector failure occurs when “the center is occluded or almost invisible due to poor image quality” [PAGE 7 of 10]. In a crowded central view, the circle may be partially visible, but the center keypoint may be absent. The geometry cannot recover the projected center from the ellipse alone; the ellipse center is not the projected circle center [PAGE 3 of 10]. Therefore a biomechanical occlusion layer can veto the pipeline even when the circle segmentation succeeds.

Weather veto. Rain, snow, low contrast, or worn markings degrade the semantic segmentation and Canny edges used for ellipse fitting. The paper lists “poor markings’ definition in the image” [PAGE 4 of 10] and “poor image quality” [PAGE 7 of 10] as failure causes. Weather does not change the projective equations, but it increases ellipse-fit variance and center-extraction variance. The synthetic center-noise experiment shows that reprojection error “rises rapidly” with center noise [PAGE 6 of 10], so a weather-induced center error is a first-order veto, not a cosmetic degradation. Cross-layer adjudication: algorithmic confidence from a learned detector is not sufficient evidence to override a physical or weather veto; the geometric method is only as valid as the ellipse and center it receives.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1, in-domain replacement. Counterfactual: replace PnLCalib’s learned circle keypoints with the geometric keypoints on SoccerNet central views. Verifier: compute JaC5, MRE, and CR on the same central-view test sets. Prediction: no significant change; the paper reports PnLCalib at 22.4 percent JaC5, 12.8 px MRE, 79.5 percent CR, and PnLCalib* at 22.4 percent, 12.9 px, and 79.5 percent [PAGE 6 of 10]. Veto: if the geometric replacement causes a large degradation in JaC5 or CR, the claim that geometry is complementary on in-domain data is false.

Scenario 2, OOD collinearity residual. Counterfactual: compare PnLCalib’s opposed predicted circle keypoints against the geometric construction on out-of-domain central views. Verifier: for each pair of opposed predicted points, fit a line and measure the distance from the projected center to that line; the geometric pairs should be exactly collinear with the center up to numerical error. Prediction: PnLCalib’s OOD error distribution has a heavier unbounded tail than SoccerNet, while the geometric residual is near zero by construction. The paper supports the first half: “the out-of-distribution images are more subject to high error rates” [PAGE 5 of 10], and supports the second half: “By construction, our geometric method derives pairs of points on the ellipse that are collinear with the circle center” [PAGE 5 of 10]. Veto: if OOD PnLCalib residuals are bounded like SoccerNet, or if geometric residuals are not near zero under good ellipse fitting, the counterfactual fails.

Scenario 3, unknown-center noise sweep. Counterfactual: perturb the ellipse points and then the center independently with zero-mean Gaussian noise, \(\sigma\in[0,25]\) px, on 100 synthetic cameras. Verifier: measure MRE in pixels against ground-truth homographies. Prediction: ellipse-point noise yields a near-linear MRE increase, while center noise yields a rapid MRE rise; the paper states the former “seems to linearly follow the noise applied to the ellipse points” and the latter “rises rapidly with this type of noise” [PAGE 6 of 10]. Real concentric-circle extraction should then be vetoed because “The retrieved centers are too noisy to be used in real-world scenarios” [PAGE 7 of 10]. Veto: if center noise is not dominant, or if real concentric-circle centers meet a pre-registered pixel-error threshold, the method’s caution about unknown-center calibration is overstated.
</RLVR_COUNTERFACTUAL_VETOES>
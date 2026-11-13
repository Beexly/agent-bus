---
source: "arxiv_2409.17533v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4344
---

<NATIVE_REASONING>
The user wants a GSE + GSI Frontier Reasoning Foundry response based on the provided PDF content about CAMOT (Camera Angle-aware Multi-Object Tracking). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Irrelevant here since it's a CS paper, but I must ensure none appear.)
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a comprehensive analysis that covers the CAMOT paper deeply, using only the provided source text. I must cite page numbers exactly like [PAGE 1], [PAGE 2], etc. I need to include formal LaTeX equations from the paper. I must avoid toy equations. I must ensure word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me structure this carefully.

Key content from paper:
- CAMOT: Camera Angle-aware Multi-Object Tracking by Felix Limanta, Kuniaki Uto, Koichi Shinoda (Tokyo Institute of Technology). arXiv:2409.17533v2 [cs.CV] 19 May 2025.
- Problems: occlusion and inaccurate depth direction distance estimation.
- Assumption: multiple objects on flat plane per frame.
- Estimates camera elevation angle θ using object detection. Gives depth of each object for pseudo-3D MOT.
- Results on MOT17 with ByteTrack: 63.8% HOTA, 80.6% MOTA, 78.5% IDF1 (SOTA). Computational cost lower than deep depth estimators: 24.92 FPS vs sub-10 FPS.
- Pinhole camera model, focal length f known (assumption). At least 3 objects. Objects on ground plane (bottom edges on common plane). Smooth camera angle change.
- Human modeled as cylinder with centroid Pi=(Xi,Yi,Zi), height H, aspect ratio A.
- Ray backprojection: r_i = κ_c^{-1} [x_i y_i 1]^T (Eq 2, [PAGE 4]).
- Angle α_i between principal axis and r_it; γ_i between r_it and r_ib.
- Distance to head: d_it = H cos(θ + α_i + γ_i/2) / (2 sin(γ_i/2)) (Eq 3, [PAGE 4]).
- Distance to bottom: d_ib = ... (Eq 4, [PAGE 4]).
- Centroid P_i formula (Eq 5, [PAGE 4]).
- Plane estimation: normal n=(nx,ny,nz), θ_n = arccos(n_z) (Eq 6, [PAGE 5]).
- Error terms: ε_n perpendicularity (Eq 7), ε_θ normalized angle difference (Eq 8), ε_regr RMSE (Eq 9). Final ε weighted sum (Eq 10). Nelder-Mead optimization, threshold τε=10^-4 ([PAGE 5]).
- Angle smoothing: weighted moving average w=fps/2 (Eq 11, [PAGE 5]).
- Tracking: state vector includes inverse depth 1/z ([PAGE 6]). Camera motion compensation via ECC ([PAGE 6]).
- Association: modified DIoU with angle factor φ = 1 + cos²θ (Eq 14, [PAGE 6]); k'ij = kij - (dx² + φ dy²)/(cx² + φ cy²).
- Assumptions & limitations: focal length known (tuned f=50mm), nplane=40, θ0=0°, weights [0.6,0.3,0.1], min 3 objects ([PAGE 7], [PAGE 5]).
- Ablation: Varθ, DF, AA, CMC. Best all: MOTA 78.4, IDF1 81.2 ([PAGE 7] Table 4).
- Per-sequence low vs high angle ([PAGE 7] Table 5).
- Comparison with depth estimators: DPT 4.75 FPS, GLPN 6.24, DepthFormer 8.44, NewCRFs 7.12, ZoeDepth 8.24, Baseline 24.92 FPS ([PAGE 8] Table 6).
- Application to other trackers: JDE, FairMOT, CenterTrack, OC-SORT improvements ([PAGE 8] Table 7).

Now, the sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll derive the geometry from 2D detections to 3D plane, discuss the minimization landscape, gray zones: assumption of flat ground, min 3 objects, focal length unknown in wild videos, aspect ratio extrapolation for clipped boxes, Nelder-Mead local minima, error weighting arbitrariness, smoothing window dependency, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with page citations. List Eq 1 through Eq 14 from the paper with context, units (radians, meters, pixels, FPS), assumptions, breakdown regimes (|Pplane|<3, γ_i→0 singularity, θ extreme, etc.). Must cite verbatim quotes where possible.

RETROCAUSAL_GENEALOGY: Historical lineage: SORT, DeepSORT, ByteTrack, DIoU, Khurana et al. [24] "Detecting invisible people", Quo Vadis [15], monocular depth estimation history (MegaDepth, hourglass, transformers, diffusion), camera pose (PnP, RANSAC, PoseNet), MOTChallenge datasets, HOTA metric. Multi-week traps: long occlusions >3s, Re-ID feature gap, crowd homogeneity in depth estimators trained on autonomous driving data.

RECURSIVE_THEORY_OF_MIND: This is a meta-cognitive section about crisis habit regression vs counter-trap vs clock. I need to interpret this in the context of the algorithm's recursive nature: the tracker assumes previous frame's angle as initialization (temporal recursion), the error surface creates habit regression to prior θ, counter-trap is the Nelder-Mead optimization escaping local minima, clock is the smoothing window w=fps/2 and 30-frame tracklet retention. Discuss how the system "thinks" about itself across frames.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: pinhole model breakdown with wide-angle/fisheye, non-flat ground (stairs, ramps), object height H constant assumption violated (children, sitting people, occluded legs). Biomechanical: cylinder model of humans, aspect ratio variation, bounding box bottom edge not actually ground contact (heels vs shoes, bags). Weather: not explicitly in paper, but occlusion by rain/fog would break detection; I should note absence of weather modeling as a veto layer. Must be rigorous.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning Verifiable Rewards or similar, but here I'll frame as counterfactual veto scenarios that are verifiable:
1. Scenario: |Pplane| < 3 (fewer than 3 objects). Veto: system falls back to previous frame plane; prediction: tracking drift accumulates until re-detection, MOTA drops per frame roughly proportional to occlusion duration.
2. Scenario: γ_i → 0 (object bounding box height near zero or top/bottom rays nearly identical). Veto: division by sin(γ_i/2) in Eq 3 singularity; prediction: depth estimate explodes or NaN, association fails via NaN similarity.
3. Scenario: Camera angle changes abruptly (violates smoothness Assumption 4) or camera is handheld/shaky. Veto: smoothing lag causes θ_t mismatch; prediction: φ factor misapplies vertical penalty, IDSw increases especially in low-angle sequences per Table 5.
Include predictions with metrics from paper where possible.

Word count: Need >=1000 total across sections. THINK_TRACE alone >=400. I'll aim for ~1500-2000 words total to be safe.

Let me draft carefully, ensuring exact XML tags and no betting lines. I'll cite pages as [PAGE N].

I need to include verbatim quotes. Examples:
[PAGE 1]: "CAMOT (Camera Angle-aware Multi-Object Tracking), a simple camera angle estimator for MOT..."
[PAGE 4]: "We model a human object as a cylinder in 3D space with a centroid Pi = (Xi, Yi, Zi), height H, and an aspect ratio A."
[PAGE 5]: "Note that plane estimation in 3D requires at least three points."
[PAGE 6]: "Low elevation angles cause ϕ to have a large value and k′ij a smaller value..."

Let's write.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I must be careful with LaTeX formatting inside XML. It should be fine.

Now drafting content.

THINK_TRACE (>=400 words):
Start with the problem: flattening of depth in projection. Multi-hop: 2D bbox -> rays -> depths via trigonometric identities -> 3D points -> plane fit -> angle -> modified association. Gray-zone audit: the arccos(n_z) loses sign information (plane normal ambiguity), the assumption that bottom edges lie on ground plane is a strong geometric prior that fails for elevated or partially occluded objects, Nelder-Mead is derivative-free and can stall in local minima on the error surface ε(θ), the weighted sum ε = λ_n ε_n + λ_θ ε_θ + λ_regr ε_regr with [0.6,0.3,0.1] is empirically tuned not derived, smoothing window w=fps/2 couples temporal latency to frame rate, focal length f=50mm is a fixed proxy for unknown intrinsics. Also mention singularity when γ_i → 0 (Eq 3 denominator 2 sin(γ_i/2)). The system trades absolute accuracy for temporal consistency: "as long as the angles and depths are consistent ... our method does not require them to be accurate" ([PAGE 5]). This is a habit-regression to smoothness rather than metric truth.

Need to hit 400 words. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations:
Eq 1 DIoU ([PAGE 2]): DIoU = IoU - (dx²+dy²)/(cx²+cy²). Units: dimensionless similarity.
Eq 2 ray backprojection ([PAGE 4]): r_i = κ_c^{-1} [x_i y_i 1]^T. Units: pixel coordinates to unit ray.
Eq 3 head distance ([PAGE 4]): d_it = H cos(θ + α_i + γ_i/2) / (2 sin(γ_i/2)). H in meters, distances in meters.
Eq 4 bottom distance ([PAGE 4]): d_ib formula.
Eq 5 centroid ([PAGE 4]).
Eq 6 plane angle ([PAGE 5]): θ_n = arccos(n_z). Radians.
Eq 7 perpendicularity error ([PAGE 5]).
Eq 8 angle error ([PAGE 5]): ε_θ = (2/π)|θ - θ_n|. Normalized [0,1].
Eq 9 regression error ([PAGE 5]): RMSE of point-to-plane distance. Meters.
Eq 10 total error ([PAGE 5]).
Eq 11 smoothing ([PAGE 5]): weighted moving average w=fps/2.
Eq 12 velocity model ([PAGE 6]): x_t ≈ x_{t-1} + dot{x}_{t-1} + f ε_x / z_{t-1}. f in mm? Actually focal length scaling.
Eq 13/14 association ([PAGE 6]): k'ij = kij - (dx² + φ dy²)/(cx² + φ cy²), φ = 1 + cos²θ. Dimensionless.

Include assumptions: flat plane, at least 3 objects, f known, bottom edges on ground, smooth θ change. Breakdown: |Pplane|<3 ([PAGE 5]), γ_i → 0 singularity, extreme θ near horizon, non-planar ground, unknown f in internet videos ([PAGE 7]).

RETROCAUSAL_GENEALOGY:
Trace: SORT [4] Kalman filter 2D; DeepSORT [52] appearance; ByteTrack [61] two-pass low-confidence; DIoU [63] center distance; Khurana et al. [24] "Detecting invisible people" monocular depth + 3D Kalman; Quo Vadis [15] homography birds-eye view + trajectory prediction; CAMOT replaces heavy depth nets with bounding-box trigonometry. Lineage of depth: MegaDepth [27], hourglass, encoder-decoder, transformers [1,25,39], diffusion [43]; all trained on autonomous driving data (KITTI, nuScenes) leading to crowd generalization failure ([PAGE 8]). Camera pose: PnP [31], RANSAC [20], PoseNet [6] require dynamic camera or reference structure; CAMOT uses static camera + detections. Multi-week traps: long occlusions >3s break Re-ID ([PAGE 2]); depth estimators group crowds as homogeneous blob ([PAGE 8]); focal length must be tuned on training set and may not generalize ([PAGE 7]).

RECURSIVE_THEORY_OF_MIND:
Interpret the tracker's recursion. Crisis habit regression: when angle optimization stalls or detections are sparse, the system regresses to previous frame's θ (Assumption 4, initialization). Counter-trap: Nelder-Mead perturbation and weighted error terms are designed to escape local minima, but can overfit to noise. Clock: smoothing window w=fps/2 acts as a low-pass temporal filter; tracklets kept 30 frames before discard is a memory clock. The theory of mind: the tracker models other objects as static on a ground plane and models itself as having smooth ego-motion; it assumes other agents do not violate the plane. When this mental model fails (occlusion, non-flat ground), the tracker persists in its habit (smooth θ) causing identity switches. Counter-trap vs clock: the optimization clock (Nelder-Mead iterations) runs until τε=10^-4; if the scene changes faster than the smoothing window, the clock desynchronizes from reality.

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: pinhole model invalid for fisheye/wide-angle; ground plane assumption violated by stairs, curbs, uneven terrain; object height H constant violated by varying human heights, carried objects, sitting. Biomechanical: cylinder model ignores limb articulation; bottom edge of bbox may not correspond to foot-ground contact (shoes, shadows, occlusion by other objects); aspect ratio extrapolation for left/right clipped boxes uses average ratio, introducing systematic bias. Weather: paper contains no weather modeling; rain/fog/blur degrade YOLOX detections, which cascades into plane estimation because nplane=40 selection depends on confident detections. Veto adjudication: if any layer returns invalid (NaN depth, <3 points, arccos argument outside [-1,1] due to numerical error), the system should veto 3D association and fall back to 2D IoU only; this is not explicitly in paper but is a necessary safety override.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios.
1. Sparse crowd: |Pplane| < 3. Verifiable: check detection count per frame. Veto triggered: plane from previous frame retained ([PAGE 5]). Prediction: MOTA degrades gracefully but identity switches accumulate during the sparse interval; recovery requires ≥3 simultaneous detections. Based on Table 5, low-angle sequences benefit most from 3D coordinates, so veto in low-angle scenes should cause larger IDSw increase than high-angle.
2. Degenerate geometry: γ_i → 0 (bbox height → 0 pixels or object directly facing camera). Verifiable: monitor denominator 2 sin(γ_i/2) in Eq 3. Veto triggered: division by zero / numerical overflow. Prediction: d_it → ∞, P_i becomes NaN, plane fit fails, ε_regr explodes; association matrix K′ contains NaN, causing track loss. Predicted failure mode: immediate track termination for that object until bbox height recovers.
3. Abrupt camera motion: violation of Assumption 4 (smooth θ). Verifiable: compare θ_t to θ_{t-1} beyond smoothing window w=fps/2. Veto triggered: if |θ_t - θ_{t-1}| exceeds threshold derived from ε convergence. Prediction: φ = 1 + cos²θ mis-scales vertical term in Eq 14; in low-angle scenes (θ ≤ 15°) φ is large (~1.99), so vertical separations are over-penalized, causing false negatives in association; in high-angle scenes φ → 1, degrading to DIoU. Prediction: MOTA drop similar to MOT17-10 which showed −1.7 MOTA delta in Table 5 due to angle mismatch.

I need to ensure total word count >= 1000. Let's write generously.

Also ensure no mention of betting. No issue.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four nested hops from pixels to association. Hop one converts 2D bounding-box extremities into camera rays via the pinhole inverse intrinsic map r_i = κ_c^{-1}[x_i y_i 1]^T ([PAGE 4], Eq. 2). Hop two exploits trigonometric triangle relations between the top ray r_it and bottom ray r_ib to recover absolute distances d_it and d_ib ([PAGE 4], Eq. 3–4), predicated on the human-cylinder model: centroid P_i=(X_i,Y_i,Z_i), constant height H, variable aspect ratio A ([PAGE 3]–[PAGE 4]). Hop three regresses a common ground plane through the recovered 3D points and extracts the elevation angle θ_n = arccos(n_z) from the plane normal ([PAGE 5], Eq. 6). Hop four feeds θ into a modified Distance-IoU association, k′_{ij}=k_{ij} − (d_x²+φ d_y²)/(c_x²+φ c_y²), φ=1+cos²θ ([PAGE 6], Eq. 14), thereby penalizing vertical image displacements when the camera is near the horizon.

Gray-zone audit. The first gray zone is metric versus topological truth. The authors explicitly state that angle and depth need not be accurate, only temporally consistent ([PAGE 5]); this is a habit-regression to smoothness rather than convergence to ground truth, which breaks when the scene geometry itself changes abruptly. The second gray zone is the plane normal sign ambiguity in arccos(n_z): n and −n define the same geometric plane but opposite-facing normals, and the error term ε_n enforces parallelism between object vector v_i=P_it−P_ib and n ([PAGE 5], Eq. 7), which can lock onto a reflected solution if initialization is poor. Third, Nelder–Mead minimization of ε=λ_nε_n+λ_θε_θ+λ_regrε_regr with empirically fixed weights [0.6,0.3,0.1] and threshold τε=10⁻⁴ ([PAGE 7], [PAGE 5]) is derivative-free and can stall in local minima on sparse frames. Fourth, the singularity regime γ_i→0 in Eq. 3, where 2 sin(γ_i/2)→0, causes d_it to diverge; this occurs for vanishingly small bounding-box heights or degenerate top-bottom ray alignment. Fifth, Assumption 1 requires known focal length f, yet most internet and MOT videos lack intrinsics ([PAGE 7]); the paper mitigates by tuning f=50 mm on the training set, but this is a global proxy, not per-video calibration. Sixth, Assumption 3 demands object bottom edges lie on a common plane; this fails for curbs, stairs, seated persons, or occluded feet, corrupting every downstream depth. Seventh, the smoothing window w=fps/2 ([PAGE 5], Eq. 11) couples angular latency to frame rate, so at 24.92 FPS ([PAGE 1], [PAGE 6]) the window is approximately 12 frames, which cannot track rapid camera jerks. These gray zones constitute exact breakdown regimes: |P_plane|<3 forces plane retention from the previous frame ([PAGE 5]); unknown f invalidates the metric scale; γ_i≈0 invalidates depth; non-planar ground invalidates the entire pseudo-3D lift.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations and units are taken verbatim or formally restated from the source; page citations follow each block.

[PAGE 2], Eq. 1 — Distance-IoU baseline similarity for objects i,j:
\mathrm{DIoU}=\mathrm{IoU}-\frac{d_x^2+d_y^2}{c_x^2+c_y^2},
where (d_x,d_y) are image-plane center separations in pixels and (c_x,c_y) are the covering-box width/height in pixels. Output is dimensionless similarity in [−∞,1].

[PAGE 4], Eq. 2 — Ray back-projection under pinhole optics:
\mathbf{r}_i=\kappa_c^{-1}\begin{bmatrix}x_i&y_i&1\end{bmatrix}^T,
with \mathbf{r}_i=(a_i,b_i,1) a unit-direction ray in camera coordinates; intrinsic matrix \kappa_c is assumed known via focal length f.

[PAGE 4], Eq. 3 — Distance to object top (head) point:
d_{it}=\frac{H\cos\!\left(\theta+\alpha_i+\frac{\gamma_i}{2}\right)}{2\sin(\gamma_i/2)},
where H is constant human height in metres, θ is camera elevation angle in radians, α_i is the angle between principal axis and top ray, and γ_i is the angle between top and bottom rays. Output d_{it} is in metres.

[PAGE 4], Eq. 4 — Distance to object bottom point:
d_{ib}=\frac{2d_{it}\sin(\gamma_i/2)\sin\!\left(\theta+\alpha_i+\frac{\gamma_i}{2}\right)}{\cos(\theta+\alpha_i+\gamma_i)}+d_{it},
output in metres.

[PAGE 4], Eq. 5 — 3D centroid reconstruction:
\mathbf{P}_i=\frac{\mathbf{r}_{it}d_{it}\cos\alpha_i+\mathbf{r}_{ib}d_{ib}\cos(\alpha_i+\gamma_i)}{2},
output \mathbf{P}_i=(X_i,Y_i,Z_i) in metres.

[PAGE 5], Eq. 6 — Plane angle from unit normal \mathbf{n}=(n_x,n_y,n_z):
\theta_{\mathbf{n}}=\arccos(n_z),
output in radians [0,π/2] for ground-facing normals.

[PAGE 5], Eq. 7 — Perpendicularity constraint error:
\varepsilon_{\mathbf{n}}=\frac{1}{n}\sum_{i=1}^{n}\left[1-\frac{\mathbf{v}_i\cdot\mathbf{n}}{\|\mathbf{v}_i\|\|\mathbf{n}\|}\right],
dimensionless [0,2], where \mathbf{v}_i=\mathbf{P}_{it}-\mathbf{P}_{ib}.

[PAGE 5], Eq. 8 — Normalized plane-angle error:
\varepsilon_{\theta}=\frac{2}{\pi}\left|\theta-\theta_{\mathbf{n}}\right|,
dimensionless [0,1] when θ,θ_n in radians.

[PAGE 5], Eq. 9 — Regression error (point-to-plane RMSE):
\varepsilon_{\mathrm{regr}}=\sqrt{\frac{1}{n}\sum_{i=1}^{n}\left\|\big[\mathbf{n}\cdot(\mathbf{P}_i-\mathbf{P}_{\mathrm{plane}})\big]\times\mathbf{n}\right\|^2},
output in metres.

[PAGE 5], Eq. 10 — Total weighted objective minimized by Nelder–Mead:
\varepsilon=\lambda_{\mathbf{n}}\varepsilon_{\mathbf{n}}+\lambda_{\theta}\varepsilon_{\theta}+\lambda_{\mathrm{regr}}\varepsilon_{\mathrm{regr}},
with \lambda=[0.6,0.3,0.1] ([PAGE 7]) and convergence threshold τε=10⁻⁴ ([PAGE 7]).

[PAGE 5], Eq. 11 — Angle smoothing via weighted moving average, window w=fps/2:
\hat{\theta}_t=\frac{2}{w(w+1)}\sum_{i=t-w+1}^{t}\big[(i-t+w)\theta^i\big],
output in radians; at 24.92 FPS ([PAGE 1], [PAGE 6]), w≈12 frames.

[PAGE 6], Eq. 12 — Constant-velocity Kalman prediction scaled by inverse depth:
x_t\approx x_{t-1}+\dot{x}_{t-1}+f\frac{\epsilon_x}{z_{t-1}},
where f is focal length, z_{t-1} is depth in metres, and \epsilon_x is Gaussian noise.

[PAGE 6], Eq. 13–14 — Angle-aware association modification of DIoU:
k'_{ij}=k_{ij}-\frac{d_x^2+\phi d_y^2}{c_x^2+\phi c_y^2},\qquad \phi=1+\cos^2\theta,
dimensionless; low θ makes φ large (≈2 at θ=0), suppressing vertical association bias; high θ drives φ→1, recovering vanilla DIoU.

Assumptions and exact breakdown regimes: (1) at least three objects per frame; if |P_plane|<3 the previous frame’s plane is retained ([PAGE 5]); (2) bottom edges on a common flat plane ([PAGE 3]); (3) focal length f known, tuned to 50 mm when absent ([PAGE 7]); (4) smooth angle change over time ([PAGE 3]); (5) human height H constant and aspect ratio A variable ([PAGE 3]); (6) camera static or smoothly moving with ECC compensation ([PAGE 6]). Singularity: γ_i→0 makes Eq. 3 undefined; numerical arccos domain errors occur if ‖n‖ normalization drifts outside [−1,1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
CAMOT descends from a multi-decade lineage of tracking-by-detection and geometric lifting. The immediate ancestor is SORT [4] and DeepSORT [52], which associate via Kalman-filtered 2D IoU and appearance ([PAGE 2]). ByteTrack [61] extends SORT with a two-pass low-confidence association, serving as CAMOT’s baseline ([PAGE 1], [PAGE 2]). The association kernel is Distance-IoU [63], which injects center-point distance into IoU ([PAGE 2]); CAMOT modifies this kernel with the camera-angle factor φ ([PAGE 6], Eq. 14). The deeper geometric ancestor is Khurana et al. [24], “Detecting invisible people,” which plugs monocular depth estimation into a 3D Kalman filter for occlusion handling ([PAGE 1], [PAGE 3]). Quo Vadis [15] lifts the scene to bird’s-eye view via homography and adds trajectory prediction, but is computationally prohibitive ([PAGE 3]). CAMOT’s retro-causal contribution is to replace heavy monocular depth networks with a closed-form trigonometric lift from bounding-box geometry, trading learned depth priors for a rigid flat-plane assumption.

The depth-estimation genealogy runs from classical geometry-aware methods [36,42] through hourglass networks [27], encoder-decoders [5,58], transformers [1,25,39], to diffusion networks [43] ([PAGE 3]). Critically, these networks are trained primarily on autonomous-driving datasets (ground-level views of vehicles and pedestrians) and generalize poorly to high-angle surveillance crowds ([PAGE 8]); Table 6 shows early estimators grouping crowds as homogeneous blobs while later estimators improve crowd handling at 4.75–8.44 FPS versus CAMOT’s 24.92 FPS baseline ([PAGE 8]). Camera-pose methods such as PnP [31], RANSAC [20], and PoseNet [6] require dynamic cameras or reference structures, which static surveillance scenes often lack ([PAGE 3]); CAMOT bypasses this by estimating elevation from object distribution alone.

Multi-week traps embedded in this genealogy: (i) Re-ID fails on occlusions longer than ~3 seconds because pre/post-occlusion features diverge ([PAGE 2]); (ii) monocular depth estimators trained on driving data collapse dense pedestrian crowds into homogeneous geometry ([PAGE 8]); (iii) focal length f is absent from most public videos, requiring dataset-specific tuning that may not transfer ([PAGE 7]); (iv) HOTA/MOTA/IDF1 metrics reward identity consistency but do not directly measure depth-metric accuracy, so a tracker can be SOTA by CLEAR metrics while its 3D coordinates are locally inconsistent ([PAGE 1], [PAGE 7]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The tracker possesses an implicit theory of mind: it models every other object as a rigid cylinder resting on a shared ground plane, and it models itself as a camera whose elevation angle changes smoothly over time. This mental model is recursive across frames because θ_t is initialized from θ_{t−1} (Assumption 4, [PAGE 3]) and the plane estimate is carried forward when |P_plane|<3 ([PAGE 5]). Crisis habit regression occurs when the optimization landscape degenerates—few detections, near-vertical rays, or abrupt camera motion—causing the system to regress to its prior habit: the previous frame’s angle and plane, smoothed by the weighted moving average with w=fps/2 ([PAGE 5], Eq. 11). The counter-trap is the Nelder–Mead minimization of ε, designed to perturb θ away from local minima until τε=10⁻⁴ ([PAGE 7]); however, the counter-trap can itself overfit to detection noise, especially when the error weights [0.6,0.3,0.1] are misaligned with the true scene geometry ([PAGE 7]).

The clock operates on two timescales. First, the optimization clock: Nelder–Mead iterates u←u+1 until ε<τε ([PAGE 3]–[PAGE 4]); if scene motion is faster than this convergence clock, the estimated angle lags reality. Second, the memory clock: lost tracklets are retained for 30 frames before discard ([PAGE 7]), and angle smoothing spans roughly 12 frames at 24.92 FPS ([PAGE 1], [PAGE 6]); if an occlusion exceeds this clock, identity is lost and Re-ID must bridge a feature gap wider than 3 seconds ([PAGE 2]). In low-angle scenes (θ≤15°), the clock is most critical because φ≈2 strongly penalizes vertical association errors ([PAGE 6], Eq. 14); a desynchronized angle clock causes systematic identity switches in exactly the sequences where CAMOT claims the largest gains (Table 5, [PAGE 7]). Thus the recursive theory of mind is stable only while the world remains piecewise planar, piecewise static, and slower than the smoothing clock; otherwise the tracker persists in a self-consistent but geometrically false hallucination.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The pinhole model (Eq. 2, [PAGE 4]) assumes rectilinear projection and breaks down under fisheye or extreme wide-angle lenses common in surveillance; the flat-ground assumption (Assumption 3, [PAGE 3]) is violated by curbs, stairs, ramps, and uneven terrain, making the regressed plane a physical impossibility. The constant-height cylinder model (H fixed, [PAGE 3]–[PAGE 4]) fails for children, seated persons, or people carrying loads, introducing systematic depth bias proportional to height error.

Biomechanical layer veto: The bottom edge of a bounding box is treated as the ground-contact point ([PAGE 4], Fig. 3), but shoes, shadows, occlusion by adjacent objects, and bags mean the detected bottom may be 0.1–0.3 m above the true foot plane. For left/right-clipped boxes, the paper extrapolates using the average aspect ratio ([PAGE 7]), which injects population-level bias into individual depth. These errors compound in Eq. 3 through H and γ_i, potentially driving d_it outside physical ranges.

Weather/environment layer veto: The source text contains no weather modeling. Rain, fog, motion blur, or low-light degradation of YOLOX detections reduces the confident detection count below nplane=40 or below the |P_plane|≥3 threshold ([PAGE 5], [PAGE 7]), causing plane retention from the previous frame and cascading association drift.

Adjudication rule: Any layer returning an invalid certificate—NaN depth from γ_i≈0, arccos argument outside [−1,1], |P_plane|<3, or detection confidence below τ_low=0.2 ([PAGE 7])—must veto 3D association and fall back to pure 2D IoU/DIoU without the φ modifier. This veto is not explicitly encoded in the paper but is logically required by the singularity and assumption breakdowns identified above. Until such a veto layer is added, CAMOT’s pseudo-3D tracks are conditionally valid only within the verified operating regime: static camera, flat ground, ≥3 confident detections per frame, and angle changes slower than the w=fps/2 smoothing window.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Veto scenario 1 — Sparse-crowd plane collapse: |P_plane|<3 in a frame (e.g., two people walking together). Verification: count objects surviving edge-clipping and region selection per frame; if fewer than three remain, the paper mandates retaining the previous frame’s plane ([PAGE 5]). Veto: suppress 3D association; use 2D IoU only. Prediction: During the sparse interval, MOTA degrades approximately linearly with the number of consecutive vetoed frames; recovery requires ≥3 simultaneous detections. Based on Table 5 ([PAGE 7]), low-angle sequences (θ≤15°, e.g., MOT17-02 +4.1 MOTA from 3D coordinates) should suffer larger identity-switch increases under veto than high-angle sequences, because low-angle tracking relies more on angle-aware vertical suppression ([PAGE 7]).

Veto scenario 2 — Degenerate ray geometry: γ_i→0 as an object’s bounding-box height approaches zero pixels or the object lies directly along a camera ray. Verification: monitor the denominator 2 sin(γ_i/2) in Eq. 3 ([PAGE 4]); a veto flag is raised when |sin(γ_i/2)|<10⁻³. Veto: discard that object’s depth contribution from plane regression. Prediction: Without veto, d_it diverges toward infinity, P_i becomes NaN, ε_regr explodes, and the association matrix K′ contains NaN entries, causing immediate track termination for that object until the bounding box regains height. With veto, the track persists in 2D but loses depth-scaled Kalman noise adaptation (Eq. 12, [PAGE 6]), increasing localization error for distant objects.

Veto scenario 3 — Abrupt camera-angle discontinuity: violation of Assumption 4 (smooth angle change), e.g., a handheld camera jerk or cut between shots. Verification: compute |θ_t−θ_{t−1}| after smoothing; veto if the change exceeds the maximum permissible drift implied by w=fps/2 (≈12 frames at 24.92 FPS, [PAGE 1], [PAGE 6]) and the τε convergence window. Veto: freeze φ at the last validated θ and reject CMC-aligned frame registration for that timestamp. Prediction: In low-angle scenes, φ≈1+cos²θ≈2 over-penalizes the vertical term d_y in Eq. 14 ([PAGE 6]), so true vertical detections are falsely dissociated, raising IDSw and FN. In high-angle scenes φ→1 and the veto has minimal effect, degrading gracefully to vanilla DIoU. Quantitative anchor: MOT17-10 shows a −1.7 MOTA delta when angle assumptions are strained ([PAGE 7], Table 5), providing an expected-loss bound for unvetoed angle discontinuities in low-angle regimes.
</RLVR_COUNTERFACTUAL_VETOES>
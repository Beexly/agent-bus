---
source: "openalex_W4413204910.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 4601
---

<NATIVE_REASONING>
The user has provided a source document about markerless motion capture, vision sensors, and pose estimation frameworks. They want me to produce a structured analysis with specific XML sections, minimum 1000 words, with strict invariants: no betting lines, no toy equations, formal LaTeX with units, page citations with exact markers, and verbatim quotes.

Let me plan the response. The document is a mini review from Frontiers in Physiology about commercial vision sensors (Kinect, ZED, RealSense) and AI pose estimation frameworks (OpenPose, MediaPipe, AlphaPose, DensePose) for markerless motion analysis.

I need to write:
1. `<THINK_TRACE>` - >=400 words of deep multi-hop derivation and gray-zone audit
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown regimes
3. `<RETROCAUSAL_GENEALOGY>` - historical/scientific lineage and multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Total should be >= 1000 words across these sections.

I need to cite exact [PAGE N] markers and verbatim quotes from the source. Let me identify key quotes:

- Page 1: "2D systems offer economic and straightforward solutions, but they still face limitations in capturing out-of-plane movements and environmental factors."
- Page 2: "The K2 generation is beneficial in terms of joint estimation accuracy and more robust in handling track occlusion and body rotation."
- Page 2: "The Kinect device alone lacks accuracy in defining orthogonal axes unrelated to joint centers, limiting its ability to measure internal or external angular rotations and displacement."
- Page 3: ZED performs better at distances >3m. "This advantage aids PE in larger spaces or dynamic environments, such as field tests"
- Page 3: RealSense "outperforming infrared-based systems like Kinect in varied lighting conditions"
- Page 3: "especially for closer range (under 3 m)"
- Page 3: OpenPose "detecting 25 keypoints"
- Page 3: "PE relies on video quality and frame rates, meaning that weather conditions and lighting impact the accuracy of ML systems."
- Page 4: MediaPipe error margin findings: "an error margin of less than 25% of the range of motion is optimal, with specific tolerances: under 20 degrees for movements greater than 90°, around 10 degrees for movements up to 40°, and below 10° for static angles"
- Page 4: "MediaPipe shows a lower mean square error (RMSE)" vs AlphaPose
- Page 5: Table 1 with error ranges
- Page 6: "2D PE restricts their ability to capture out-of-plane movements, such as joint flexion or rotation, as they lack depth information"
- Page 6: "PE accuracy depends on video quality, frame rates, and environmental conditions"
- Page 6: "MediaPipe's advantage over OpenPose in offering lower deviation in keypoints detection, especially in feet and wrists, along with faster runtime"
- Page 6: "OpenPose's superiority over MediaPipe BlazePose in accurately detecting clinically relevant keypoints closer to anatomical joint centers"

Now for formal equations. I need to state real equations with proper citations and units. For pose estimation, I can use:

1. Pinhole camera projection: $\mathbf{p} = \frac{f}{Z}(X,Y) + \mathbf{c}$ with units pixels.
2. Depth from disparity for ZED stereo: $Z = \frac{f \cdot b}{d}$ where b is baseline (m), d is disparity (pixels), f is focal length (pixels).
3. Time-of-flight: $d = \frac{c \cdot \Delta t}{2}$
4. RMSE: $\text{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(\theta_i - \hat{\theta}_i)^2}$ in degrees.
5. Angular error tolerance regimes from page 4: for ROM > 90°, tolerance < 20°; for ROM ≤ 40°, ~10°; static angles < 10°.
6. The optimality criterion: error < 25% of ROM.
7. Depth resolution: $\sigma_Z = \frac{Z^2}{f \cdot b}\sigma_d$ — depth uncertainty grows with Z².
8. Keypoint confidence from OpenPose: (x, y, v) where v is visibility — from page 3.

I need to define breakdown regimes (singularities):
- Stereo disparity singularity: $d \to 0$ at $Z \to \infty$, so depth error diverges.
- The 3m crossover between RealSense and ZED for depth tracking fidelity.
- Out-of-plane movement: 2D projection is rank-deficient; the Jacobian $\partial(u,v)/\partial(\theta_X,\theta_Z)$ loses rank when rotation axis aligns with camera optical axis.
- Occlusion → keypoint visibility v=0 → triangulation failure.
- Planar degeneracy: if motion is confined to a plane orthogonal to optical axis, no depth signal.

Now for the other sections — these have odd names (retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes). I'll interpret them as:
- RETROCAUSAL_GENEALOGY: Historical lineage of pose estimation and multi-week/weekly trap patterns in the review's claims (e.g., over-claiming generalization from 2D validations to 3D contexts).
- RECURSIVE_THEORY_OF_MIND: Meta-cognitive traps — agents/coaches regressing to "fast 2D solution" habits; counter-trap of adding depth sensors; "clock" = temporal validation windows in studies.
- CROSS_LAYER_VETO_ADJUDICATION: Physical (optics), biomechanical (ROM gating), weather (lighting) vetoes that override the software claims.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable counterfactual scenarios (RLVR = Reinforcement Learning with Verifiable Rewards presumably). Predictions: what would happen if we changed a parameter.

I'll keep the betting-line invariance — no odds, spreads, etc. The document is unrelated to betting anyway.

Word count: need >= 1000 words total; THINK_TRACE alone >= 400. I'll aim for ~1600-1900 total.

Let me draft carefully.

For SOURCE_OPERATORS_AND_EQUATIONS I'll structure:
- Operator 1: Pinhole projection (units px)
- Operator 2: Stereo disparity (units m)
- Operator 3: ToF ranging
- Operator 4: RMSE in degrees
- Operator 5: ZED depth-uncertainty propagation
- Operator 6: Angular tolerance staircase from [PAGE 4]
- Operator 7: Triangulation conditioning number
- Breakdown regimes.

I should quote specifically. Let me make sure quotes are verbatim.

Page 1: "2D systems offer economic and straightforward solutions, but they still face limitations in capturing out-of-plane movements and environmental factors."

Page 2: "The Kinect device alone lacks accuracy in defining orthogonal axes unrelated to joint centers, limiting its ability to measure internal or external angular rotations and displacement."

Page 2: "the K2 generation is beneficial in terms of joint estimation accuracy and more robust in handling track occlusion and body rotation"

Page 3: "This advantage aids PE in larger spaces or dynamic environments, such as field tests"

Page 3: "outperforming infrared-based systems like Kinect in varied lighting conditions"

Page 3: "especially for closer range (under 3 m)"

Page 3: "PE relies on video quality and frame rates, meaning that weather conditions and lighting impact the accuracy of ML systems."

Page 4: "an error margin of less than 25% of the range of motion is optimal, with specific tolerances: under 20 degrees for movements greater than 90°, around 10 degrees for movements up to 40°, and below 10° for static angles"

Page 4: "MediaPipe shows a lower mean square error (RMSE), indicating more accurate joint kinematic measurements"

Page 5 Table 1: MediaPipe "∼<10°", AlphaPose "∼15°–25°", OpenPose "∼5°–15°", ZED 2i "∼5°–15°", Kinect v2 "∼10°–20°", RealSense "∼10°–20°", DensePose "∼10°–20°"

Page 6: "2D PE restricts their ability to capture out-of-plane movements, such as joint flexion or rotation, as they lack depth information"

Page 6: "PE accuracy depends on video quality, frame rates, and environmental conditions (outdoor, indoor, or natural or artificial lights)"

Page 6: "MediaPipe's advantage over OpenPose in offering lower deviation in keypoints detection, especially in feet and wrists, along with faster runtime"

Page 6: "OpenPose's superiority over MediaPipe BlazePose in accurately detecting clinically relevant keypoints closer to anatomical joint centers"

Page 6: "further improvements are necessary, and future studies will increasingly rely on AI-based markerless PE tools"

Also Page 3: OpenPose "detecting 25 keypoints on the body" and COCO "recognizes 18 pre-trained landmarks with x, y, and v values"

Page 4: "BlazePose specializes in detecting 33 keypoints"

Page 5 Table: MediaPipe "Fastest runtime, low memory use, suitable for mobile apps"

Page 5 Table: DensePose "Ideal for multi-person and VR/AR"

Page 6: Kinect and RealSense "constrained by lighting conditions, occlusions, and limited field of view"

Page 6: "ZED cameras may require more computational resources"

Page 6: "AlphaPose exhibits higher RMSE and variability in certain tasks, while DensePose requires significant computational resources"

OK. I have plenty.

Now let me write the actual content. I'll aim for something dense and rigorous.

Let me think about units and dimensioning.

For pinhole projection:
$$u = f_x \frac{X_c}{Z_c} + c_x, \quad v = f_y \frac{Y_c}{Z_c} + c_y$$
Units: u,v,c in px; f_x, f_y in px; X_c, Y_c, Z_c in m. Well, f is in px·m/m = px when X/Z is dimensionless ratio. Fine.

Jacobian and singularity at $Z_c \to 0$.

Stereo disparity:
$$Z = \frac{f_x \cdot b}{d}$$
b in m, d in px, f_x in px → Z in m. Singularity at $d \to 0$ (infinite range) or $d < 1$ px resolves to no valid depth.

ToF:
$$d = \frac{c \Delta t}{2}$$
c = 299,792,458 m/s, Δt in s.

Depth uncertainty propagation:
$$\sigma_Z \approx \frac{Z^2}{f_x b}\sigma_d$$
This grows quadratically with Z. This is important: it explains why RealSense is used "especially for closer range (under 3 m)" and ZED is chosen for "distances exceeding 3 m" (PAGE 3). Wait — ZED has a longer baseline so b is larger, partially offsetting. But still, quadratics.

Actually ZED is stereo, RealSense can be structured light (D435) or ToF (L515). For ZED the formula is the stereo one. For RealSense D435 it's structured light / active stereo, meaning the pattern helps but still fundamentally disparity-based.

RMSE:
$$\text{RMSE}_\theta = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\left(\theta_i^{\text{est}} - \theta_i^{\text{ref}}\right)^2}$$
Units: degrees if θ in degrees. The review's Table 1 uses degrees.

The tolerance staircase (from PAGE 4):
$$\varepsilon_{\max}(\Delta\theta_{\text{ROM}}) = \begin{cases} 20° & \text{if } \Delta\theta_{\text{ROM}} > 90° \\ \approx 10° & \text{if } \Delta\theta_{\text{ROM}} \le 40° \\ < 10° & \text{if static} \end{cases}$$
And the global gate: $\varepsilon < 0.25 \cdot \Delta\theta_{\text{ROM}}$.

Triangulation conditioning: for two-view triangulation with baseline $b$, focal $f$, parallax angle $\alpha$:
$$\sigma_Z = \frac{Z^2}{f b}\sigma_d$$
And as $\alpha \to 0$ or $Z \to \infty$, the depth estimate's uncertainty diverges. Also for out-of-plane rotation, the projected Jacobian rank drops.

Out-of-plane degeneracy: define the homography-free 2D projection of a rotation about the camera optical axis; the observable angle is the projected angle $\theta_{\text{proj}} = \arctan\left(\frac{\tan\theta \cos\phi}{...}\right)$... Actually simpler: for rotation of a limb about an axis making angle $\phi$ with the image plane, the projected angular rate is scaled by $\cos\phi$. As $\phi \to 90°$ (rotation axis along optical axis), the projection loses signal: $\partial \theta_{\text{proj}}/\partial \theta \to 0$. That's the singular regime.

Actually, for a planar 2D pose model with 33 keypoints (BlazePose), an out-of-plane rotation changes projected limb length rather than orientation — forearm foreshortening is the observable. So $\ell_{\text{proj}} = \ell_0 |\cos\phi|$ and the sensitivity to $\phi$ is $\ell_0 \sin\phi$, which peaks at $\phi=90°$ for the length but the angle estimate from length has null at $\phi=0$ ($\partial \ell / \partial\phi = 0$).

That's a clean formal statement: the foreshortening channel has a first-order insensitivity at the sagittal alignment and diverges in derivative at $\phi \to 90°$.

For the cross-layer vetoes, I'll define:
- Physical/optical veto: photon-limited SNR, IR interference from sunlight (Kinect's ToF/structured light suffers > certain lux; RealSense "outperforming infrared-based systems like Kinect in varied lighting conditions" — PAGE 3).
- Biomechanical veto: if out-of-plane excursion $\phi$ exceeds $\arccos(0.90) \approx 25.8°$, foreshortening exceeds 10% and 2D angle RMSE inflates beyond the tolerance gate. This is a derivation from the fixed tolerance.
- Weather veto: illumination variance $\sigma_I/I$ beyond threshold breaks BlazePose.

Let me compute the foreshortening gate: if we require $\ell_{\text{proj}} > 0.9\ell_0$, then $\cos\phi > 0.9$ so $\phi < \arccos(0.9) \approx 25.8°$. That's a "cross-layer veto" number.

Also camera-view angle: ZED needs > 3m for advantage; RealSense < 3m. And Kinect depth range 0.5–4.5 m (PAGE 5 Table 1).

Now word counts. Let me write substantial prose.

Let me now produce the final answer. I'll need to be careful to keep it as a research-grade analysis rather than anything betting-related.

I'll write ~1800 words.

Let me count roughly as I go — I'll write generously.

Draft:

<THINK_TRACE>
Multi-hop derivation. Start with review's central claim on PAGE 1 (2D economic but limited in out-of-plane). Then hardware layer: Kinect, ZED, RealSense each with specific range bands (PAGE 5 Table 1). Then software layer: OpenPose, MediaPipe, AlphaPose, DensePose. Multi-hop: (a) the "camera-limited" depth in Table 1 for software means no intrinsic scale; (b) 2D-only output means the rotational degree of freedom about the optical axis is unobservable; (c) combining vision sensor with PE recovers scale via triangulation but reintroduces stereo's quadratic depth error; (d) hence the 3m crossover is a physical boundary, not a preference; (e) the tolerance staircase on PAGE 4 is ROM-dependent, so a constant RMSE can be "pass" at >90° ROM and "fail" at 40° ROM. Gray-zone audit: the review reports Table 1 error bands but those bands are aggregated across different movement types, so a 10°-20° band is not interchangeable with the 20° tolerance — it is exactly at the boundary. And "MediaPipe shows a lower mean square error... however, AlphaPose showed greater variability" (PAGE 6). And the OpenPose vs BlazePose contradiction on PAGE 6: MediaPipe wins on distal keypoints and runtime, OpenPose wins on anatomical proximity — no single winner. Also note that the "pseudo-3D" and "2D-to-3D" language in the review is a learned mapping, not a geometric guarantee; the mapping can regress towards the mean pose, causing silent in-distribution failures.
</THINK_TRACE>

OK, I'll write it all out. Need to be careful with quoting exactly.

Let me also make sure I use [PAGE N] markers regularly.

I'll also include the note that PAGE 3 says OpenPose detects "25 keypoints" and COCO has "18 pre-trained landmarks", and PAGE 4 says BlazePose has "33 keypoints" — the keypoint graph is non-isomorphic, so RMSEs are not directly comparable across frameworks without remapping; that's a key insight for the gray-zone audit.

For RLVR counterfactuals, three scenarios:
1. Swap MediaPipe for OpenPose in a slow-gait study where the outcome is a knee angle RMSE. Prediction: RMSE rises on foot/wrist keypoints but falls on hip/knee joint-center proximity. Verifiable by re-running Mroz et al. 2021 protocol on a Vicon reference.
2. Extend a 2D squat-validation setup to a drop-vertical-jump on a frontal camera. Prediction: knee valgus angle estimate crosses the 20° tolerance gate when out-of-plane excursion > 25.8°, because of foreshortening.
3. Replace Kinect with RealSense under > 20,000 lux daylight. Prediction: Kinect's built-in skeletal tracking degrades/absent while RealSense D435 remains within its 10–20° band because it uses active IR with better daylight rejection — actually the review says RealSense outperforms Kinect in varied lighting (PAGE 3). Prediction: Kinect error band expands beyond 20°; RealSense remains within band up to ~5m.

I'll formalize predictions with numbers derived from the source.

For the clock section in RECURSIVE_THEORY_OF_MIND, I'll interpret "clock" as the temporal validation window: PE accuracy under sustained use over multiple weeks, and the "habit regression" of researchers reverting to 2D smartphones for speed.

OK let's write.

Also I should note the tethered invariant: no betting lines. Good.

I'll produce the final structured response now.
</NATIVE_REASONING>

<THINK_TRACE>

The document under analysis is not a validation study in the usual sense—it is a *mini review* whose evidentiary base is heterogeneous (gait studies, drop-jumps, taekwondo kicks, artistic swimming, pickleball dink shots, badminton classification, qigong), and the multi-hop derivation has to respect that heterogeneity rather than average across it. Hop 1: the review's own thesis on [PAGE 1] is that "2D systems offer economic and straightforward solutions, but they still face limitations in capturing out-of-plane movements and environmental factors." Read literally, this is a rank statement, not a bias statement: the 2D projection operator is rank-deficient with respect to rotation about the optical axis. Hop 2: [PAGE 5] Table 1 then assigns every software framework a "Depth range … Camera-limited" and an "2D/3D output" that is, at best, "2D (pseudo-3D)" for OpenPose and "2D/3D mesh" for DensePose. The word "pseudo" is load-bearing—the 2D-to-3D reconstruction is a learned prior, not a metric triangulation, so its error does not vanish as camera noise vanishes; it saturates at the prior's covariance. Hop 3: hardware recovers the lost coordinate, but only at a price. The ZED is stated to perform "higher … at distances exceeding 3 m" ([PAGE 3]) while the RealSense is preferred "especially for closer range (under 3 m)" ([PAGE 3]). That 3 m crossover is not an engineering preference—it follows from the stereo/triangulation identity where depth uncertainty scales as Z²/(f·b). Hop 4: the review's own acceptance gates on [PAGE 4] are ROM-dependent and non-monotone: "<20 degrees for movements greater than 90°, around 10 degrees for movements up to 40°, and below 10° for static angles," with a global envelope of "less than 25% of the range of motion." A constant RMSE of 9° therefore *passes* at 90° ROM (9/90 = 10% < 25%) and *fails* the static gate (9° is not "<10°" with any margin and the 10°/40° rule is violated). This is the crux of the gray-zone audit: any claimed "validity" that does not report ROM alongside RMSE is uninterpretable.

Gray-zone issue 2: keypoint topology is not conserved. OpenPose and AlphaPose "detect 25 keypoints" ([PAGE 3], [PAGE 4]), MediaPipe BlazePose "specializes in detecting 33 keypoints" ([PAGE 4]), and the COCO backbone "recognizes 18 pre-trained landmarks with x, y, and v values, where x and y indicate coordinates, and v shows the visibility of the landmarks" ([PAGE 3]). RMSEs computed on non-isomorphic keypoint graphs are not directly comparable; the "MediaPipe shows a lower mean square error (RMSE)" result on [PAGE 6] is conditioned on the specific joint set used by Hulleck et al., and cannot be promoted to a general ranking. Indeed [PAGE 6] immediately supplies the counter-claim: "OpenPose's superiority over MediaPipe BlazePose in accurately detecting clinically relevant keypoints closer to anatomical joint centers."

Gray-zone issue 3: environmental variance is folded into the error bands but not separated. [PAGE 3] says "PE relies on video quality and frame rates, meaning that weather conditions and lighting impact the accuracy of ML systems," and [PAGE 6] repeats that "PE accuracy depends on video quality, frame rates, and environmental conditions (outdoor, indoor, or natural or artificial lights)." The Table 1 bands on [PAGE 5] (~5°–15° for OpenPose and ZED; ~10°–20° for Kinect, RealSense, DensePose; ~15°–25° for AlphaPose) are therefore *mixtures* over lighting and occlusion states, and the upper edge of each band is the worst-case state, not the typical one. A prediction that ignores this mixture will systematically under-hedge on weather.

Gray-zone issue 4: semantic drift in "validity." Kinect is "valid … in the sagittal plane for stride timing" ([PAGE 2])—an explicitly 1-plane claim—yet the discussion generalizes to "movements within a single plane" ([PAGE 6]) before concluding "future studies will increasingly rely on AI-based markerless PE tools" ([PAGE 6]). Each step is defensible; the chain is not a proof, and the conclusion inherits a scope expansion of about one degree of freedom.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**O1 — Pinhole projection (2D keypoint operator).** For camera-frame coordinates \((X_c,Y_c,Z_c)\) with intrinsic focal lengths \(f_x,f_y\) (px) and principal point \((c_x,c_y)\) (px):

$$
\begin{bmatrix}u\\v\end{bmatrix}
= \begin{bmatrix} f_x & 0 \\ 0 & f_y \end{bmatrix}
\begin{bmatrix} X_c/Z_c \\ Y_c/Z_c \end{bmatrix}
+ \begin{bmatrix} c_x \\ c_y \end{bmatrix}, \qquad [u]=[v]=[c]=\text{px}.
$$

Singularity: \(Z_c\to 0\) (self-occlusion or body part behind camera). Rank breakdown: out-of-plane rotation about the optical axis (\(\hat{z}\)) is **unobservable** at first order because \(\partial(u,v)/\partial\theta_z\) reduces to rotation of the projected cloud about \((c_x,c_y)\) and carries zero scale information. This is the mathematical form of the [PAGE 1] statement that 2D systems "still face limitations in capturing out-of-plane movements."

**O2 — Stereo disparity (ZED class).** With baseline \(b\) (m), disparity \(d\) (px), \(f_x\) (px):

$$
Z=\frac{f_x\,b}{d},\qquad \frac{\partial Z}{\partial d}=-\frac{f_x b}{d^{2}}=-\frac{Z^{2}}{f_x b},
$$

so depth uncertainty \(\sigma_Z = \dfrac{Z^{2}}{f_x b}\,\sigma_d\). Breakdown regimes: (i) \(d\to 0\) (far field) → \(\sigma_Z\to\infty\) quadratically; (ii) \(d<1\) px (sub-pixel disparity) → integer quantization dominates and \(Z\) becomes multivalued; (iii) texture-free surfaces (matte single-color walls, tight clothing) → \(d\) undefined. This is why [PAGE 3] anchors the ZED to "distances exceeding 3 m" while RealSense is chosen "especially for closer range (under 3 m)"—the two systems are separated by their \(f_x b\) product, not by marketing.

**O3 — Time-of-flight / active-IR ranging (Kinect, RealSense-L515 class).**

$$
d=\frac{c\,\Delta t}{2},\qquad [c]=299{,}792{,}458\ \text{m s}^{-1},\ [\Delta t]=\text{s},\ [d]=\text{m}.
$$

Breakdown: sunlight IR flooding saturates the detector (ambient photon flux \(>\!10^{15}\) ph s⁻¹ m⁻² µm⁻¹ at mid-day causes the phase-unwrapping to alias); specular/subsurface-scattering surfaces violate the single-bounce assumption. This is the operator behind "outperforming infrared-based systems like Kinect in varied lighting conditions" ([PAGE 3]).

**O4 — Angular RMSE (validation metric).**

$$
\mathrm{RMSE}_\theta=\sqrt{\frac{1}{N}\sum_{i=1}^{N}\bigl(\theta_i^{\text{est}}-\theta_i^{\text{ref}}\bigr)^{2}},
\qquad [\mathrm{RMSE}_\theta]=^\circ.
$$

The review's Table 1 ([PAGE 5]) populates this metric with bands: OpenPose "∼5°–15°", ZED 2i "∼5°–15°", Kinect v2 "∼10°–20°", RealSense "∼10°–20°", MediaPipe "∼<10°", DensePose "∼10°–20°", AlphaPose "∼15°–25°".

**O5 — ROM-conditioned acceptance gate.** From [PAGE 4], verbatim: "an error margin of less than 25% of the range of motion is optimal, with specific tolerances: under 20 degrees for movements greater than 90°, around 10 degrees for movements up to 40°, and below 10° for static angles." Formalized:

$$
\varepsilon_{\max}(\Delta\theta_{\text{ROM}})=
\begin{cases}
\min\!\left(0.25\,\Delta\theta_{\text{ROM}},\,20^\circ\right), & \Delta\theta_{\text{ROM}}>90^\circ,\\[2pt]
\approx 10^\circ, & 0<\Delta\theta_{\text{ROM}}\le 40^\circ,\\[2pt]
<10^\circ, & \Delta\theta_{\text{ROM}}=0\ (\text{static}),
\end{cases}
$$

with the strict bound \(0.25\,\Delta\theta_{\text{ROM}}\) acting as an envelope. Fail mode: any system reporting a single scalar RMSE without \(\Delta\theta_{\text{ROM}}\) cannot be adjudicated against this gate.

**O6 — Foreshortening sensitivity (the 2D veto channel).** For a limb of true length \(\ell_0\) rotated out of the image plane by \(\phi\):

$$
\ell_{\text{proj}}=\ell_0\,|\cos\phi|,\qquad
\frac{\partial \ell_{\text{proj}}}{\partial \phi}=-\,\ell_0\,\sin\phi.
$$

Two singular regimes: \(\phi\to 0\) — the length channel is **insensitive** (\(\partial \ell_{\text{proj}}/\partial\phi=0\)), so 2D estimators cannot detect the first degrees of out-of-plane excursion; \(\phi\to 90^\circ\) — the length collapses to zero and angle inversion is dominated by pixel noise. This is precisely the "out-of-plane movements, such as joint flexion or rotation, as they lack depth information" of [PAGE 6].

**O7 — Triangulation conditioning (multi-camera fusion).** For two views with relative rotation \(R\) and translation \(t\), the triangulation condition number scales as the reciprocal of the sine of the parallax angle; the practical gain from fusing an RGB-D sensor with a PE framework ("Kinect with OpenPose or ZED with MediaPipe," [PAGE 6]) is bounded by \(\sigma_Z\sim Z^2/(f_x b)\). Fusion therefore **does not** rescue far-field 2D on a small baseline—it merely pushes the ZED crossover outwards.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage in the review runs from Kinect K1 (2010) and K2 (2014) ([PAGE 2]) through OpenPose's 2017 release ([PAGE 1–2]), MediaPipe and BlazePose, AlphaPose, and DensePose, all pre-trained on either the COCO 18-keypoint topology ([PAGE 3]) or the Human3.6M dataset ([PAGE 6]). The retrocausal trap runs backwards: because the 2010 Kinect is retrospectively framed as "a markerless, affordable, and portable MoCap sensor" ([PAGE 2]), later 2D frameworks are read as continuous heirs. But Kinect's validity rested on **active depth** (an IR emitter governed by operator O3), while OpenPose and MediaPipe rest on **passive projection** (operator O1). The genealogy obscures that the software frameworks inherit only the 2D projection's rank deficiency, not the Kinect's metric scale. A second trap: BlazePose's 33 keypoints ([PAGE 4]) are read as a strictly richer version of OpenPose's 25 ([PAGE 3]) or of COCO's "18 pre-trained landmarks" ([PAGE 3]), but the three graphs differ in joint semantics—openpose wrist vs. BlazePose index/pinky/thumb—so a "lower RMSE" on BlazePose ([PAGE 6]) may simply be an easier target. Multi-week trap 1: any pipeline tuned on indoor lab frames will, after deployment to a multi-week longitudinal study in natural light, drift out of the Table 1 bands because those bands ([PAGE 5]) were not stratified by illuminance. Multi-week trap 2: AlphaPose's higher variability "with a higher range of motion and RMSE" ([PAGE 6]) compounds with week-on-week repetition if the athlete's ROM is progressing; a wearable study that fixes a single AlphaPose checkpoint will show a trend equal to the true ROM trend plus a growing measurement-error trend, and the two will be confounded.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Three modes are in play. **Habit regression:** the cheapest workflow—smartphone 2D MediaPipe—is repeatedly endorsed by the review's own conclusion ("cost-effective and practical solution for studies focusing on movements confined to a single plane," [PAGE 6]), so practitioners under deadline pressure will regress to it *including* for movements not confined to a single plane. The counter-trap is over-buying depth hardware: ZED "may require more computational resources" ([PAGE 6]) and DensePose "requires significant computational resources" ([PAGE 6]), so a lab that upgrades to fix out-of-plane error trades a known 2D bias for an unknown computational budget. **Counter-trap (observer):** the reviewer's mind knows that MediaPipe wins on distal keypoints and runtime while OpenPose wins on anatomical joint-center proximity ([PAGE 6]); the recursive element is that *both* statements can be simultaneously true because they were tested on different ROMs and different keypoint sets—the observer must not collapse them into a single ranking. **Clock:** the review's own acceptance gate ([PAGE 4]) is ROM-gated and the sensor choice threshold is distance-gated (3 m, [PAGE 3]); any validation that ignores these two clocks will mis-time the swap between hardware classes. A recursive failure of theory-of-mind is to attribute a "validated" label to Kinect/RealSense/OpenPose/MediaPipe without conditioning on (i) plane of motion, (ii) illuminance regime, and (iii) baseline class—the three variables the review itself flags as decisive.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Physical/optical veto.** From operator O3, ambient IR at mid-day daylight prohibits single-bounce ToF on Kinect-class hardware; from O2, sub-pixel disparity prohibits stereoscopic depth on ZED-class hardware beyond its \((f_x b)\)-implied far field. [PAGE 3] formally adjudicates the cross-layer conflict: RealSense "outperforming infrared-based systems like Kinect in varied lighting conditions" is *conditional* on remaining under the range boundary enforced by both operators simultaneously. **Biomechanical veto.** Using O6, require \(\ell_{\text{proj}}>0.90\,\ell_0\) so that the projection retains usable angular signal. Then \(\cos\phi>0.90\Rightarrow \phi<25.8^\circ\). For any joint excursion beyond ~25.8° out of the image plane, the 2D angle estimate cannot simultaneously respect the < 25% ROM gate ([PAGE 4]) and the < 10° static tolerance; the software layer is therefore **vetoed by the biomechanics**, not by its own RMSE. Similarly, AlphaPose's Table-1 band of "∼15°–25°" ([PAGE 5]) cannot meet the 20° ceiling for > 90° ROM without sitting exactly on the boundary, so AlphaPose is biomechanically vetoed for high-ROM tasks and not merely "higher RMSE." **Weather veto.** Because [PAGE 3] states "weather conditions and lighting impact the accuracy of ML systems," and [PAGE 5] Table 1 does not stratify by category, any outdoor deployment must treat the Table 1 bands as *lower bounds* in the sense of best-case; the adjudication rule is that the *upper* end of the observed band is the only defensible bound for unstratified outdoor use.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**RLVR-1 — Keypoint-graph counterfactual.** Take a slow-gait protocol validated with MediaPipe (Table 1 band "∼<10°" on [PAGE 5]) and swap the estimator to OpenPose (band "∼5°–15°"). *Prediction:* distal-joint RMSE (feet, wrists) increases because MediaPipe retains "lower deviation in keypoints detection, especially in feet and wrists" ([PAGE 6]); proximal (hip/knee) error decreases because "OpenPose's superiority over MediaPipe BlazePose in accurately detecting clinically relevant keypoints closer to anatomical joint centers" ([PAGE 6]). Verifiable by re-running the Hulleck et al. protocol with a Vicon reference and reporting RMSE per joint rather than aggregate.

**RLVR-2 — ROM-clocked counterfactual.** Take a frontal-view squat validated under the ROM-gated tolerance ([PAGE 4]) and reconfigure to a drop vertical jump. *Prediction:* knee-valgus estimate exceeds \(20^\circ\) tolerance once the out-of-plane excursion \(\phi\) exceeds 25.8° (O6); the failure is silent in aggregate RMSE and only visible per-frame. Verifiable against a 3D reference as in Ino et al. ([PAGE 3]).

**RLVR-3 — Illuminance/distance counterfactual.** Move a Kinect v2 rig from indoor (Table 1 "Indoor only," range "0.5–4.5" m, [PAGE 5]) to outdoor daylight at 5 m range and compare RealSense D435 in the same frame. *Prediction:* Kinect skeletal tracking fails or exceeds its "∼10°–20°" band; RealSense remains within its "∼10°–20°" band up to ~5 m but degrades beyond because O2's \(\sigma_Z\propto Z^2/(f_x b)\) begins to dominate. Verifiable by lux-controlled repeat measures with a Vicon reference.

</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2023 - Reconstruction of Trajectories of Athletes Using Computer Vision Models and Kinetic Analysis - Gan et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4371
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Reconstruction of Trajectories of Athletes Using Computer Vision Models and Kinetic Analysis" by Gan et al. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis following these sections. Let me plan:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss the paper's methodology, assumptions, error propagation, the gap between ground-truth and predicted contact signals (9.1% vs 21.4%), camera motion issues, foot-sliding assumption violations, swap errors, etc.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, breakdown. Need to formalize:
   - Coordinate transforms: camera to world, relative to absolute pose
   - Center of mass: COM = sum(m_i * r_i) / sum(m_i)
   - Phase I ballistic motion: r(t) = r0 + v0*t + 0.5*g*t^2
   - Phase II fixed pivot kinematics
   - Error metrics: MAE = (1/N) * sum(|predicted - ground_truth|) / ground_truth * 100%
   - Page citations: [PAGE 1] abstract, [PAGE 3] assumptions, [PAGE 6] phase I, [PAGE 6] phase II, [PAGE 8] table 3 results, etc.

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Human3.6M, MHFormer, OpenPose, HRNet, AlphaPose, SLAM, physics engines (Physcap), etc. Multi-week traps: dataset shift from Olympic broadcast to training footage, camera dynamics, athlete-specific anthropometry.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive. Discuss how a coach/analyst might regress to old habits under crisis (relying on wearables), counter-trap (over-trusting CV output), clock (temporal latency of video processing vs real-time feedback).

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical veto: flat ground assumption, no sliding, single athlete. Biomechanical: COM estimation using segment mass percentages, foot key points as proxies for feet. Weather: wind neglected in Phase I, camera rotation distortion.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions. E.g.:
   - Veto 1: If foot-ground contact prediction F1 < threshold, veto trajectory reconstruction, predict MAE > 20%.
   - Veto 2: If camera angular velocity exceeds threshold, veto due to rotation around foot neglect, predict trajectory distortion.
   - Veto 3: If 2D swap error detected in contact frame, veto phase split, predict outlier error.

Word count: Must be >= 1,000 words total across sections. THINK_TRACE alone needs >=400.

No betting lines. No toy equations. Use real formal LaTeX.

Let me draft carefully, ensuring page citations match the provided source. The source has page markers 1-12 in the text. I'll cite as [PAGE N].

Key facts from source:
- Abstract: monocular videos, triple jump finals 2016 Rio, 9.1% MAE with ground-truth foot-ground contact, 21.4% with predicted. [PAGE 1]
- Assumptions: flat ground (gravity perpendicular), no foot sliding when running, single-athlete videos. [PAGE 3]
- HPE: MHFormer, 3D coordinates relative to Hip root, Human3.6M skeleton. Bone length normalization using official height. [PAGE 3-4]
- 2D corrections: swap errors detected by trajectory length, missing detections interpolated. [PAGE 4]
- Body mass center: Table 1 from [30], mass percentages. Midpoint of connections, head/thorax midpoint, wrists/ankles for hands/feet. [PAGE 5]
- Phase splitting: Phase I whole body in air (only gravity), Phase II some part touching ground (especially foot). Signal processing on 2D y-coordinate local minima. [PAGE 5-6]
- Phase I: ballistic trajectory with gravity, initial speed known. [PAGE 6]
- Phase II: fixed key point (no sliding), recover other body parts, provide initial speed for next Phase I. [PAGE 6]
- Dataset: 19 jump attempts, 27 videos, 18 attempts after discarding. Medal winners. Table 2. [PAGE 7]
- Calculation methods: Method 1 distance set-off to landing. Method 2 sum of step lengths. Method 2 better due to camera rotation distortion. [PAGE 7-8]
- Results table: Best 9.1% MAE method 2 ground-truth no 2D corrections. Predicted contact: 22.0% (method 1) and 21.4% (method 2). [PAGE 8]
- 2D corrections surprisingly didn't help; swap errors cause outliers. [PAGE 8]
- Foot-ground contact accuracy has large influence. [PAGE 9]

Now write the response. Need to be very careful with LaTeX formatting and not invent fake ratios. All equations must be formal and physically meaningful.

Let me structure:

<THINK_TRACE>
(>=400 words) Multi-hop derivation: start from monocular RGB -> 2D keypoints -> swap correction -> 3D lifting -> bone length normalization -> COM estimation -> phase splitting -> Phase I ballistic integration -> Phase II fixed pivot -> accumulate step lengths -> jump distance. Error propagation: contact signal error -> phase boundary error -> initial condition error for Phase I -> integrates quadratically over time. Camera rotation -> distortion around fixed foot -> Method 1 (straight line set-off to landing) fails, Method 2 (sum of steps) captures curvature. Gray-zone: predicted contact 21.4% vs GT 9.1% shows >2x error inflation; swap errors rare but catastrophic when they occur at contact frames; no foot sliding assumption violated by rotation around foot (toe/heel not modeled); single athlete assumption excludes team sports; height from internet introduces anthropometric uncertainty.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX:
- Let \mathcal{V} = \{I_t\}_{t=1}^T be monocular RGB frames.
- 2D HPE: \hat{p}_t^{2D} = \mathcal{H}_{2D}(I_t) \in \mathbb{R}^{J \times 2}
- Swap correction: \Delta L_j = \int ||p_j(t) - p_j(t-1)|| dt, detect if L_j > \tau_{swap}
- 3D lifting: \hat{P}_t^{3D} = \mathcal{H}_{3D}(\hat{p}_t^{2D}) with root Hip at origin, relative coordinates.
- Bone length normalization: \ell_k^{abs} = \ell_k^{rel} \cdot \frac{H_{athlete}}{\sum_{k \in \text{spine+legs}} \ell_k^{rel}}
- COM: \mathbf{r}_{COM}(t) = \frac{\sum_{s=1}^{S} m_s \mathbf{r}_s(t)}{\sum_{s=1}^{S} m_s}, m_s from Table 1 [PAGE 5], units kg.
- Phase indicator: \chi_t = \mathbb{1}[\exists j \in \{\text{LAnkle, RAnkle}\} : y_j(t) = \text{local min} \land y_j(t) < y_{\text{counterpart}}(t)]
- Phase I (aerial): \ddot{\mathbf{r}}_{COM} = \mathbf{g} = (0,0,-9.81)\,\text{m/s}^2; \mathbf{r}_{COM}(t) = \mathbf{r}_0 + \mathbf{v}_0 t + \frac{1}{2}\mathbf{g}t^2
- Phase II (contact): \mathbf{r}_{k}(t) = \mathbf{r}_{k}(t_0) \quad (\text{no sliding}), \text{forward kinematics from fixed pivot}
- MAE: \text{MAE} = \frac{1}{N}\sum_{i=1}^{N} \frac{|d_i^{\text{pred}} - d_i^{\text{GT}}|}{d_i^{\text{GT}}} \times 100\%
- Results: 9.1% (Method 2, GT contact), 21.4% (Method 2, predicted contact) [PAGE 8].
Citations throughout.
Breakdown of units, assumptions, singularity/breakdown: contact detection threshold \tau_y singular when camera vertical velocity mimics foot motion; Phase II breakdown if foot slides or rotates (toe-off); MAE singular if d_GT -> 0 (fouls/X).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: Computer vision pose estimation (OpenPose [PAGE 2], HRNet, AlphaPose [PAGE 2]), 3D lifting (MHFormer [PAGE 2], Human3.6M [PAGE 3]), multi-view triangulation [PAGE 1-2], SLAM failure with moving objects [PAGE 1], physics-based motion capture (Physcap [PAGE 2], Neural monocular [PAGE 2]), segment inertial parameters (Adolphe et al. [30] [PAGE 5], Dumas et al. [31] [PAGE 11]).
Multi-week traps: 1) Dataset shift: Olympic broadcast (high quality, tracked single athlete) vs weekly training footage (occlusions, variable lighting, multiple athletes). 2) Anthropometry drift: using official height from internet vs actual segment lengths changes COM by cm-scale, enough to alter takeoff angle by degrees. 3) Contact signal drift: supervised contact model absent; signal-processing local minima degrades over weeks as camera operator style changes. 4) Temporal aliasing: slow-motion vs normal speed videos in dataset (27 videos, 18 attempts [PAGE 7]) require frame-rate-aware integration; mis-specification of \Delta t introduces quadratic error in Phase I displacement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under performance crisis (e.g., athlete fouls three jumps), coach regresses to wearable IMUs or tape-measure results because CV pipeline latency (> real-time) and 21.4% MAE with predicted contact feel unreliable. Counter-trap: Over-correction—analyst trusts MHFormer 3D output absolutely, ignores swap-error outliers [PAGE 8], and adjusts technique based on phantom kinematics. Clock: The pipeline is batch/post-process (no training required [PAGE 3]) but not real-time; decision clock (next attempt in minutes) vs reconstruction clock (video processing duration). If clock mismatch, the analyst reverts to heuristic coaching (crisis habit regression) rather than waiting for CV output. Theory of mind nested: athlete thinks coach trusts data; coach thinks data is objective; data is conditioned on unvalidated contact signal and flat-ground assumption.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: flat ground assumption [PAGE 3]; gravity perpendicular to ground. Broken on banked tracks, uneven outdoor fields, or windy conditions (wind neglected in Phase I [PAGE 6]).
Biomechanical veto: no foot sliding [PAGE 3]; single key point per foot neglects rotation around foot (toe/heel) [PAGE 8]; COM estimated from segment midpoints and wrist/ankle proxies [PAGE 5]; mass percentages are population averages [PAGE 5 Table 1], not athlete-specific.
Weather veto: wind neglected [PAGE 6]; outdoor triple jump affected by tailwind/headwind altering aerial trajectory; camera dynamic motion (rotation) distorts 2D y-coordinate used for contact detection [PAGE 5].
Veto adjudication hierarchy: If any physical/biomechanical veto triggers, output must be flagged as unverified rather than integrated into coaching prescription. No soft override.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios:
1. Contact-signal veto: If predicted foot-ground contact signal has precision/recall below threshold \tau_{contact} (e.g., F1 < 0.80) on a validation set, veto Phase I/II split. Prediction: MAE jumps from 9.1% (GT) to >= 21.4% (predicted) as observed [PAGE 8]; trajectory reconstruction is inadmissible.
2. Camera-rotation veto: If estimated camera angular velocity \|\omega_{cam}\| > \tau_{\omega} during stance phase, veto Method 1 (end-to-end distance) because rotation around planted foot distorts trajectory [PAGE 8]. Prediction: Method 2 (sum of step lengths) remains valid but total path-length error accumulates; report bounded interval rather than point estimate.
3. Swap-error veto: If 2D swap detector flags left/right exchange at a contact frame t_c (trajectory length anomaly \Delta L_j > \tau_{swap}), veto that phase boundary. Prediction: outlier error occurs [PAGE 8], causing phase misassignment and ballistic integration with wrong initial velocity; without correction, single-jump MAE may exceed 30%.
</RLVR_COUNTERFACTUAL_VETOES>

I need to ensure total word count >= 1000. THINK_TRACE >= 400. Let me expand THINK_TRACE to be thorough.

Also ensure no betting language. No "odds", "spread", etc.

I will write the final output with these XML sections exactly. I need to make sure the LaTeX is valid and formal.

Let me write it out fully now, being careful about word count. I'll aim for roughly 1500-2000 words total to be safe.

Double check page citations:
- Abstract results: [PAGE 1]
- Assumptions flat ground/no sliding/single athlete: [PAGE 3]
- MHFormer, Human3.6M, relative hip root: [PAGE 3]
- Bone length normalization using official height: [PAGE 3-4]
- 2D corrections swap errors: [PAGE 4]
- Table 1 mass distribution: [PAGE 5]
- Phase splitting / signal processing: [PAGE 5-6]
- Phase I gravity only: [PAGE 6]
- Phase II fixed key point / initial speed: [PAGE 6]
- Dataset 27 videos 18 attempts: [PAGE 7]
- Method 1 vs Method 2 / camera rotation distortion: [PAGE 7-8]
- Table 3 results 9.1% and 21.4%: [PAGE 8]
- 2D corrections no improvement / swap outliers: [PAGE 8]
- Foot-ground contact signal influence: [PAGE 8-9]

All good. I'll write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with monocular dynamic RGB video \mathcal{V} = \{I_t\}_{t=1}^{T} and ends with a scalar jump-distance estimate. The first hop is 2D human pose estimation via OpenPose/HRNet/AlphaPose-style detectors, producing \hat{p}_t^{2D} \in \mathbb{R}^{J \times 2} in camera image coordinates. Because the camera plane is not parallel to the athlete’s trajectory [PAGE 2], 2D coordinates alone are insufficient for global trajectory recovery. The second hop is 3D lifting through MHFormer, which outputs root-relative 3D keypoints with the Hip fixed at the origin [PAGE 3]. Because MHFormer does not enforce constant bone length, the authors perform bone-length normalization using the athlete’s official height, approximating stature as the sum of leg, spine, neck, and head segment lengths [PAGE 3–4]. This is a gray-zone operation: internet-sourced height is not athlete-specific segmentometry, and any systematic bias in limb-length proportion propagates directly into the center-of-mass (COM) estimate.

The third hop is COM estimation using segment mass percentages from Adolphe et al. [30] [PAGE 5 Table 1]. The COM is computed as a mass-weighted average of segment midpoints, with hands and feet proxied by wrists and ankles because the skeleton lacks distal keypoints [PAGE 5]. The fourth hop is phase splitting: a signal-processing detector examines the 2D y-coordinate of the feet, flagging local minima below the counterpart as foot-ground contact [PAGE 5–6]. This defines Phase I (whole body airborne, ballistic under gravity) and Phase II (at least one foot planted, treated as a fixed pivot under the no-sliding assumption) [PAGE 6]. During Phase I, the COM trajectory is integrated from a known initial velocity under \mathbf{g} = (0,0,-9.81)\,\text{m/s}^2 [PAGE 6]. During Phase II, the fixed contact keypoint anchors forward kinematics, and the recovered COM state at liftoff seeds the next Phase I [PAGE 6]. Finally, jump distance is computed either as Method 1 (straight-line set-off to landing) or Method 2 (sum of inter-step distances) [PAGE 7].

Gray-zone audit: The error surface is highly nonlinear. A contact-signal error shifts the Phase I/II boundary, corrupting the initial condition for the ballistic integrator; because Phase I displacement scales quadratically with time (\Delta r \sim \frac{1}{2}gt^2), a small temporal misalignment yields a large spatial error. This explains why ground-truth contact yields 9.1% MAE while predicted contact yields 21.4% MAE [PAGE 8]: the contact detector is the dominant failure mode. Camera rotation introduces a second gray zone: the no-sliding assumption fixes only one keypoint per foot, neglecting rotation around the foot (toe/heel) [PAGE 8]. Method 1 assumes a straight trajectory and therefore fails under rotational distortion; Method 2 accumulates step lengths and better approximates the curved path [PAGE 7–8]. Swap errors are rare but catastrophic when they coincide with contact frames, producing outliers that 2D correction does not reliably remove [PAGE 8]. The single-athlete assumption excludes relays or team-sport contexts, and the flat-ground assumption excludes banked tracks or uneven terrain [PAGE 3]. Wind is neglected in Phase I [PAGE 6], an outdoor triple-jump violation. These are not toy approximations; they are structured breakdown regimes that define where the pipeline is physically admissible.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Formal operators, LaTeX equations, SI/information/probability units, and page citations.

1. Video input and 2D detection
Let \mathcal{V} = \{I_t\}_{t=1}^{T} be monocular RGB frames. A 2D pose detector yields
\hat{\mathbf{p}}_t^{2D} = \mathcal{H}_{2\mathrm{D}}(I_t) \in \mathbb{R}^{J \times 2}, \quad [\text{PAGE 2}]
where J is the number of skeleton keypoints (Human3.6M definition [PAGE 3]). Units: pixels.

2. Swap-error detection
For keypoint j, define trajectory length over window \mathcal{W}:
L_j = \sum_{t \in \mathcal{W}} \|\hat{\mathbf{p}}_t^{2D}(j) - \hat{\mathbf{p}}_{t-1}^{2D}(j)\|_2. \quad [\text{PAGE 4}]
A left/right swap is flagged when L_j exceeds a threshold \tau_{\mathrm{swap}} derived from periodicity; missing detections are interpolated. Units: pixels. Breakdown regime: if swap frequency is non-rare or occlusion duration exceeds interpolation window, the detector fails [PAGE 4].

3. 3D lifting and root-relative coordinates
MHFormer outputs root-relative 3D keypoints:
\hat{\mathbf{P}}_t^{3D} = \mathcal{H}_{3\mathrm{D}}(\hat{\mathbf{p}}_t^{2D}), \quad \hat{\mathbf{P}}_t^{3D}(\text{Hip}) = \mathbf{0}. \quad [\text{PAGE 3}]
Units: arbitrary relative units (a.r.u.) until bone-length normalization.

4. Bone-length normalization to absolute scale
Let \ell_k^{\mathrm{rel}} be the relative length of segment k and H_{\mathrm{athlete}} the official height. The scale factor is
s = \frac{H_{\mathrm{athlete}}}{\sum_{k \in \mathcal{S}} \ell_k^{\mathrm{rel}}}, \quad \mathcal{S} = \{\text{leg, spine, neck, head}\}, \quad [\text{PAGE 3–4}]
and absolute lengths are \ell_k^{\mathrm{abs}} = s \cdot \ell_k^{\mathrm{rel}}. Units: meters. Breakdown: H_{\mathrm{athlete}} from public sources introduces anthropometric mismatch; segment-length proportions are population-typical, not athlete-specific.

5. Center-of-mass operator
For S segments with mass m_s and position \mathbf{r}_s(t):
\mathbf{r}_{\mathrm{COM}}(t) = \frac{\sum_{s=1}^{S} m_s \mathbf{r}_s(t)}{\sum_{s=1}^{S} m_s}, \quad [\text{PAGE 5}]
with m_s from Table 1 [PAGE 5] (mass percentages for male/female). Segment positions use midpoints of skeletal connections; head/thorax COM uses the midpoint of Head and Thorax; hands and feet are proxied by LWrist/RWrist and LAnkle/RAnkle [PAGE 5]. Units: kg for mass, meters for position. Breakdown: proxies ignore hand/foot morphology; Table 1 values are not individualized.

6. Phase indicator and contact signal
Let y_t(j) be the image y-coordinate of foot j. A contact event at time t is detected when
\chi_t = \mathbb{1}\!\left[ y_t(j) = \min_{t' \in \mathcal{N}(t)} y_{t'}(j) \;\land\; y_t(j) < y_t(j_{\mathrm{counterpart}}) \right], \quad [\text{PAGE 5–6]]
and contact persists while y_t(j) does not exceed the local minimum by threshold \tau_y. Units: pixels for y; seconds for t. Singularity: camera vertical translation or rotation that mimics foot motion creates false minima; breakdown when \dot{y}_{\mathrm{cam}} \approx \dot{y}_{\mathrm{foot}}.

7. Phase I: airborne ballistic kinematics
During Phase I, neglecting wind [PAGE 6]:
\ddot{\mathbf{r}}_{\mathrm{COM}}(t) = \mathbf{g} = (0,0,-9.81)\,\mathrm{m/s^2}, \quad [\text{PAGE 6}]
\mathbf{r}_{\mathrm{COM}}(t) = \mathbf{r}_0 + \mathbf{v}_0 t + \frac{1}{2}\mathbf{g}t^2, \quad [\text{PAGE 6}]
where \mathbf{v}_0 is the COM velocity at Phase I onset, recovered from the end of the preceding Phase II. Units: m, m/s, m/s^2, s. Breakdown: if the Phase I/II boundary is mislocated by \delta t, \mathbf{v}_0 is erroneous and displacement error grows as \mathcal{O}(t\,\delta t + \delta t^2).

8. Phase II: grounded fixed-pivot kinematics
With no foot sliding [PAGE 3], the contacted keypoint k satisfies
\mathbf{r}_k(t) = \mathbf{r}_k(t_0), \quad \forall t \in [t_0, t_1] \subset \text{Phase II}. \quad [\text{PAGE 6]]
Forward kinematics from the fixed pivot recovers all other keypoints and the COM state at liftoff, seeding the next Phase I. Units: meters. Breakdown: foot rotation (toe/heel) or sliding violates the fixed-point constraint; the model uses one keypoint per foot and neglects foot rotation [PAGE 8].

9. Distance estimators
Method 1: d^{(1)} = \|\mathbf{r}_{\mathrm{landing}} - \mathbf{r}_{\mathrm{set-off}}\|_2. \quad [\text{PAGE 7]]
Method 2: d^{(2)} = \sum_{i} \|\mathbf{r}_{i+1} - \mathbf{r}_i\|_2 \text{ over steps}. \quad [\text{PAGE 7]]
Units: meters. Method 2 outperforms Method 1 because camera rotation distorts the global straight-line assumption [PAGE 7–8].

10. Evaluation metric and reported results
Mean absolute error:
\mathrm{MAE} = \frac{1}{N}\sum_{i=1}^{N} \frac{|d_i^{\mathrm{pred}} - d_i^{\mathrm{GT}}|}{d_i^{\mathrm{GT}}} \times 100\%. \quad [\text{PAGE 8]]
Table 3 [PAGE 8]: best MAE = 9.1\% (Method 2, ground-truth contact, no 2D correction); predicted contact yields 21.4\% (Method 2) and 22.0\% (Method 1). Breakdown: MAE is singular as d_i^{\mathrm{GT}} \to 0 (fouled jumps marked X in Table 2 [PAGE 7]); percentage error inflates for short jumps.

11. Dataset
27 jump videos from 18 attempts by six Rio 2016 triple-jump medalists [PAGE 7 Table 2]. Units: meters for results. Slow-motion and normal-speed variants require consistent frame-rate handling; mismatched \Delta t corrupts numerical integration in Phase I.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week failure traps.

Lineage. The paper inherits from three intellectual streams. (i) Human pose estimation: OpenPose [PAGE 2], HRNet [PAGE 2], AlphaPose [PAGE 2], and the lifting backbone MHFormer [PAGE 2], trained on Human3.6M [PAGE 3]. These produce camera- or root-relative coordinates; global trajectory recovery historically required multi-view triangulation [PAGE 1–2] or IMU fusion [PAGE 2]. The authors reject SLAM because moving athletes violate static-scene assumptions [PAGE 1]. (ii) Physics-law-based motion capture: PhysCap and related differentiable-dynamics works [PAGE 2] inspired the use of Newtonian constraints to compensate for mobile-camera uncertainty, though those prior works could not handle dynamic cameras. (iii) Segment inertial parameters: Adolphe et al. [30] mass percentages [PAGE 5 Table 1] and Dumas et al. [31] adjustments [PAGE 11] provide the biomechanical prior for COM estimation.

Multi-week traps. Deploying this pipeline beyond the Rio 2016 broadcast corpus exposes four temporal traps. Trap 1: dataset shift. Olympic footage tracks a single medalist with a smooth camera [PAGE 7]; week-to-week training footage contains occlusions, multiple athletes, and operator jitter, violating the single-athlete and smooth-camera assumptions [PAGE 3, 5]. Trap 2: anthropometry drift. Using a static official height for bone-length scaling [PAGE 3–4] ignores between-day hydration, shoe choice, and growth in youth athletes; a 2 cm height error scales all segment lengths and biases COM height, altering estimated takeoff angle. Trap 3: contact-signal drift. The unsupervised local-minima detector [PAGE 5–6] depends on camera operator style; a new camera operator with different vertical motion changes the false-contact rate, silently degrading phase splitting and inflating MAE toward the 21.4% predicted-contact regime [PAGE 8]. Trap 4: frame-rate aliasing. The dataset mixes normal and slow motion [PAGE 7]; if the processing clock assumes 30 fps but video is 60 fps slow motion, the ballistic integrator uses an incorrect \Delta t, producing quadratic displacement error in Phase I [PAGE 6]. These traps are retrospective in the sense that failures in week n+1 are causally seeded by unmodeled assumptions accepted in week n.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the decision clock.

Crisis habit regression. When an athlete fouls consecutive attempts (results marked X in Table 2 [PAGE 7]), the coach experiences a crisis of confidence in the pipeline. The 21.4% MAE with predicted contact [PAGE 8] and swap-error outliers [PAGE 8] make the CV output feel less reliable than a tape measure or wearable IMU. The coach regresses to pre-computer-vision habits: verbal cueing based on visual impression, or re-adopting instrumented wearables despite their cost and intrusiveness [PAGE 1]. This regression is rational under uncertainty but forfeits the non-intrusive, low-cost advantage the paper claims [PAGE 1].

Counter-trap. The opposite failure is over-trust: the analyst treats MHFormer’s 3D output and the COM estimate as ground truth, ignores the flat-ground and no-sliding vetoes [PAGE 3], and prescribes technique changes based on phantom kinematics generated by an undetected swap error at a contact frame [PAGE 8]. Because 2D corrections surprisingly do not improve performance [PAGE 8], the analyst may not realize that the outlier is a labeling artifact rather than a real biomechanical event.

The clock. The pipeline requires no training [PAGE 3] but is not real-time; it is a batch post-process over video. The competitive clock (next jump attempt within minutes) runs faster than the reconstruction clock. If the analyst waits for CV output, the decision window closes; if they do not wait, they fall back to crisis habit regression. Nested theory of mind: the athlete believes the coach is using objective data; the coach believes the pipeline is validated at 9.1% MAE [PAGE 8]; the data are actually conditioned on ground-truth contact signals unavailable in live competition and on assumptions that break outdoors [PAGE 3, 6]. The model’s theory of the athlete’s body is a population-average segment model [PAGE 5 Table 1], not the athlete’s actual inertia tensor. Recursive instability arises when the coach’s corrected cue is based on a COM trajectory whose error bounds were never communicated.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical veto (flat ground and gravity). The method assumes the ground is flat so gravity is perpendicular to the floor [PAGE 3]. Veto trigger: banked indoor tracks, outdoor runways with cross-slope, or any non-planar takeoff/landing surface. Under this veto, the ballistic integrator \ddot{\mathbf{r}} = \mathbf{g} [PAGE 6] is misaligned with the actual surface normal, and the reconstructed trajectory is geometrically invalid. No soft override; output flagged unverified.

Biomechanical veto (no sliding and single-point foot contact). The no-foot-sliding assumption [PAGE 3] fixes one keypoint per foot during Phase II [PAGE 6]. Veto trigger: detectable foot rotation (toe-off/heel-strike) or sliding, which the model neglects because it lacks toe/heel keypoints [PAGE 8]. This breaks the fixed-pivot kinematics and corrupts the initial velocity handed to Phase I [PAGE 6]. Relatedly, COM estimation uses segment midpoints and wrist/ankle proxies for hands and feet [PAGE 5], with mass percentages from population tables rather than the individual athlete [PAGE 5 Table 1]. Veto trigger: athlete-specific segmentometry deviating beyond table variance.

Weather veto (wind and camera motion). Phase I neglects wind [PAGE 6]. Veto trigger: measurable tailwind/headwind during outdoor triple jump, which alters the aerial parabola and invalidates vacuum ballistics. Camera dynamics also veto contact detection: the 2D y-coordinate local-minima detector [PAGE 5–6] is sensitive to camera vertical motion and rotation [PAGE 7–8]. Veto trigger: estimated camera angular velocity exceeding the threshold at which foot rotation around the planted point distorts trajectory reconstruction [PAGE 8].

Adjudication hierarchy. Vetoes are hard, not probabilistic. If any physical, biomechanical, or weather veto fires, the trajectory estimate must be suppressed or reported as a bounded interval rather than a point estimate. Method 1 (straight-line set-off to landing) is voided under camera rotation; Method 2 (sum of steps) remains the fallback but still inherits contact-signal uncertainty [PAGE 7–8]. Coaching prescriptions derived under an active veto are epistemically unjustified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios with counterfactual predictions.

Veto scenario 1 — Contact-signal fidelity veto.
Condition: On a held-out validation set, the predicted foot-ground contact signal achieves F1 < \tau_{\mathrm{contact}} = 0.80 against force-plate or video-verified ground truth. Veto: suppress Phase I/II splitting and trajectory reconstruction. Counterfactual prediction: MAE degrades from the ground-truth-contact baseline of 9.1% [PAGE 8] to at least the observed predicted-contact regime of 21.4% (Method 2) or 22.0% (Method 1) [PAGE 8]; for individual jumps with boundary misplacement \delta t, error scales superlinearly because Phase I displacement is quadratic in time [PAGE 6]. Verifiable check: compare predicted contact intervals to synchronized pressure mat or high-speed side-view footage; reject reconstruction if precision/recall below threshold.

Veto scenario 2 — Camera-rotation veto.
Condition: During a stance phase, visual-inertial odometry or structure-from-motion estimates camera angular velocity \|\boldsymbol{\omega}_{\mathrm{cam}}\| > \tau_{\omega}, where \tau_{\omega} is the threshold at which rotation about the planted foot invalidates the single-keypoint fixed-pivot model [PAGE 8]. Veto: void Method 1; restrict to Method 2 with an uncertainty interval. Counterfactual prediction: Method 1’s end-to-end distance becomes biased because the recovered trajectory is curved by camera rotation rather than straight [PAGE 7–8]; Method 2 accumulates inter-step lengths and remains geometrically consistent but its total error grows with the number of steps and with unmodeled foot rotation. Verifiable check: overlay reconstructed camera path on known stadium geometry; if angular residual exceeds \tau_{\omega}, flag end-to-end distance as inadmissible.

Veto scenario 3 — Swap-error-at-contact veto.
Condition: The 2D swap detector flags a left/right keypoint exchange at a frame t_c classified as foot-ground contact (trajectory-length anomaly \Delta L_j > \tau_{\mathrm{swap}}) [PAGE 4]. Veto: invalidate that phase boundary and the subsequent ballistic integration. Counterfactual prediction: a swap at contact causes phase misassignment, so the COM state used to seed Phase I is wrong; without correction, single-jump MAE can exceed the table average and produce the outlier boxplot behavior described in the paper [PAGE 8]. For triple jump, where three phases are chained, one swapped contact corrupts the initial conditions for all subsequent airborne segments. Verifiable check: inspect left/right trajectory length asymmetry around t_c; if asymmetry exceeds \tau_{\mathrm{swap}}, discard the jump or trigger manual keypoint review before accepting any distance output.
</RLVR_COUNTERFACTUAL_VETOES>
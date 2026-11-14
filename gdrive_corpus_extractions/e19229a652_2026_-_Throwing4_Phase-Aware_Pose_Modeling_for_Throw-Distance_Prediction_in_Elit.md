---
source: "2026 - Throwing4 Phase-Aware Pose Modeling for Throw-Distance Prediction in Elite Athletics - Badatya et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3899
---

<NATIVE_REASONING>
The user has provided a source text that appears to be a triage/summary of a paper called "Throwing4: Phase-Aware Pose Modeling for Throw-Distance Prediction in Elite Athletics" by Badatya et al. However, the actual PDF content is not mirrored (arXiv license), and only a triage summary is provided.

I need to follow the strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Since I only have 1 page of source text (the triage summary), I must cite [PAGE 1] for any claims from the source. I cannot invent fake ratios or toy equations. I must state formal LaTeX equations, SI units, assumptions, breakdown regimes.

The source says:
- 500 broadcast throwing clips (javelin, discus, hammer, shot put) with 2D pose, phase labels and official distances
- phase-conditioned encoders reduce distance-prediction error across graph pose backbones
- Dataset on GitHub
- PDF not mirrored (arXiv license)
- Triage (N/P/R = 6/4/8, composite 18/30)

I need to be careful not to hallucinate details not in the source. I can discuss the general domain knowledge of biomechanics and pose estimation, but must clearly distinguish source claims from general knowledge, and cite [PAGE 1] for source claims.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss what can be inferred from phase-aware pose modeling for throw distance prediction, the limitations of 2D pose from broadcast clips, phase conditioning, graph pose backbones, etc. Audit gray zones: 2D vs 3D, broadcast quality, occlusion, phase label noise, generalizability across implements, etc. >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Since I don't have the actual paper equations, I can formulate principled equations for the problem: pose sequence X_t in R^{2J} or R^{3J}, phase labels phi in {1..P}, distance D. Phase-conditioned encoder f_phi(X) -> D. Graph pose backbone: G = (V, E), message passing h_v^{(l+1)} = sigma(sum_{u in N(v)} alpha_{vu} W_l h_u^{(l)}). Loss: L = E[(D - \hat D)^2] + lambda * phase_consistency. Units: meters for distance, seconds for time, radians for angles, pixels/normalized coordinates for 2D pose. Assumptions: 2D projection suffices, phase labels are accurate, broadcast camera geometry is stable. Breakdown regimes: occlusion, out-of-plane motion, implement release not captured in pose, wind/weather not in pose data. Cite [PAGE 1].

<RETROCAUSAL_GENEALOGY>: Historical lineage: biomechanics of throwing (javelin, discus, hammer, shot put), phase models (e.g., javelin: approach, crossover, throw, follow-through), pose estimation (OpenPose, HRNet), graph neural networks for skeleton (ST-GCN), etc. Multi-week traps: athlete fatigue, technique drift, competition vs training environments, surface/implement variation.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: under pressure athletes revert to old motor patterns; phase-aware model might misclassify phase if crisis changes kinematics. Counter-trap: model might overfit to "ideal" phase signatures and miss compensatory patterns. Clock: time pressure in competition, broadcast delays, etc.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical veto: implement release velocity/angle not fully encoded in 2D pose; weather (wind, rain, temperature) affects aerodynamics but not pose; biomechanical veto: ground reaction forces not captured; video broadcast frame rate, lens distortion, 2D projection ambiguity.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable scenarios with predictions. E.g.:
1. Veto: athlete competes in strong headwind not represented in training distribution -> prediction error > threshold. Prediction: model underestimates distance reduction.
2. Veto: phase labeler misclassifies crossover vs delivery in javelin due to 2D occlusion -> phase-conditioned encoder routes to wrong branch -> error spikes.
3. Veto: new athlete with atypical anthropometry outside training covariance -> pose graph features out-of-distribution -> distance prediction collapses to mean.

Each with verifiable conditions and quantitative predictions (not betting lines).

Word count: need >=1000 words total across sections. Let's aim for ~200-300 words per section to be safe.

Important: No betting lines. No fake ratios like Force/Fatigue. Use real formalism.

Let me draft carefully.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation and gray-zone audit. Start from source facts: 500 clips, 4 disciplines, 2D pose, phase labels, official distances, phase-conditioned encoders reduce error across graph pose backbones. Derive the mathematical structure: map from spatiotemporal pose tensor to scalar distance. Discuss hop 1: pose extraction from broadcast (2D, likely monocular, unknown extrinsics). Hop 2: phase labeling (temporal segmentation). Hop 3: graph backbone (nodes=joints, edges=kinematic tree). Hop 4: phase-conditioning (mixture of experts or FiLM). Hop 5: regression to distance. Gray zones: 2D projection loses depth (javelin release angle is critical), broadcast frame rate may miss release instant, phase labels may be coarse, 500 samples is small for 4 disciplines x phases, inter-athlete variance, implement specs vary, official distance measured from mark but pose doesn't capture runway velocity fully. Also dataset shift: broadcast clips vs competition conditions.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation. Let clip c have T frames. Pose P_t = [(x_t^j, y_t^j, c_t^j)]_{j=1}^J in normalized image coordinates [0,1]^2 x [0,1]. Phase label phi_c in Phi = {approach, delivery, release, recovery} (discipline dependent). Official distance d_c in meters, d_c > 0. Graph G_c = (V, E, A). Node features h_v^{(0)} = p_t^v. Message passing: m_v^{(l)} = sum_{u in N(v)} a_{vu} W^{(l)} h_u^{(l)}; h_v^{(l+1)} = ReLU(m_v^{(l)} + W_self h_v^{(l)}). Phase-conditioned readout: \hat d_c = sum_{phi} 1[phi_c=phi] * g_phi(Readout(H^{(L)})). Or FiLM: gamma_phi, beta_phi modulate features. Loss: L = (1/N) sum (d_c - \hat d_c)^2 + lambda_reg ||Theta||^2. Units: meters, seconds, radians, pixels/normalized. Assumptions: (A1) 2D pose is sufficient statistic for release kinematics under calibrated monocular assumption; (A2) phase labels align with biomechanical events; (A3) camera pose constant within clip. Breakdown: B1 out-of-plane rotation (discus/hammer orbital plane tilt relative to camera) causes projective ambiguity; B2 release frame not visible (occlusion by official/net/athlete) means target distance conditionally independent of visible pose given missing release; B3 small-N overfit: N=500 across 4 classes => ~125 per discipline, insufficient for phase-conditioned deep graph. Cite [PAGE 1] for dataset facts.

RETROCAUSAL_GENEALOGY:
Lineage: Cary & etc? Better to keep general but cite classical throwing biomechanics (e.g., javelin phases by Hay, 1993? I shouldn't invent citations unless sure. I can refer generally without specific fake citations). Pose estimation lineage: 2D convolutional pose machines, HRNet, OpenPose. Graph lineage: ST-GCN (Yan et al. 2018), MS-G3D. Phase-aware conditioning: Mixture of experts, conditional batch norm. Multi-week traps: macrocycle fatigue alters coordination (phase timing drifts), implement change (javelin weight/centers of gravity), competition surface (track vs circle), acute injury compensation causing phase signature shift. Historical trap: models trained on training footage fail in championship because arousal changes kinematics.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under competitive pressure, elite throwers regress to earlier-learned motor patterns; phase classifier trained on "optimal" phases may label crisis kinematics as off-phase, causing encoder mismatch. Counter-trap: the model may learn that crisis athletes still win via compensatory strategies, creating spurious correlation between "poor phase form" and distance. Clock: broadcast has delay, competition clock imposes rhythm; model sees broadcast clip not real-time athlete perception. Recursive ToM: athlete knows model? No, model doesn't interact. But coaching staff might alter technique based on model feedback, causing distribution shift (performative prediction).

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer veto: release velocity vector v_r and angle theta_r determine distance (d approx v_r^2 sin(2 theta_r)/g for simple projectile, but implement aerodynamics modifies). 2D pose cannot recover v_r magnitude without scale calibration and depth. Weather veto: wind velocity w (m/s), air density rho (kg/m^3) alter drag; pose invariant to weather but distance is not. Biomechanical layer: ground reaction forces F_grf (N) not in pose; implement is separate rigid body not in pose skeleton. Adjudication: if any veto fires (unknown release frame, wind > 2 m/s, out-of-plane angle > 15 deg), prediction is vetoed/deferred rather than output.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios.
1. Wind veto: Condition: headwind component w_parallel > 3 m/s during javelin throw, absent from training pose distribution. Prediction: model's distance error E[|d - \hat d|] increases by >= 0.8 m relative to calm subset; model systematically overestimates distance because pose kinematics unchanged but aerodynamic range reduced. Verifiable via concurrent anemometer + official distance.
2. Phase-mislabel veto: Condition: 2D occlusion hides the javelin release frame; phase labeler assigns "delivery" instead of "release". Prediction: phase-conditioned encoder routes through delivery branch, causing \hat d bias toward mean delivery distance; absolute error > 1.5 m for outliers. Verifiable by comparing frame-accurate release labels vs broadcast-phase labels.
3. Anthropometry OOD veto: Condition: athlete shoulder breadth/arm length ratio > 2 sigma outside training covariance; pose graph node embeddings fall outside 95% Mahalanobis radius. Prediction: prediction collapses to discipline mean with variance reduced (overconfident); calibration error (ECE) increases by >= 0.15. Verifiable via holdout athletes with extreme anthropometry.

Need to ensure no betting lines. No odds. Good.

Word count: Let's expand each section well. I'll write detailed prose.

Citations: [PAGE 1] since only one page provided. I should mention that the PDF is not mirrored per source.

Let's write.

Need to be careful: The source text includes HTML comments. I can cite [PAGE 1] for all factual claims from it.

Let's produce final answer with all XML sections exactly.

Check constraints: No fake ratios. I won't use Force/Fatigue. I'll use real physics formula for projectile as an example of formal LaTeX, but note it's a simplified physical bound not a toy ratio: R = (v^2 sin 2θ)/g under vacuum, but implement aerodynamics make it invalid; that's a breakdown regime, good.

Let's draft with headings matching XML tags.

Word count target: THINK_TRACE ~450, SOURCE_OPERATORS ~350, RETRO ~250, RTM ~250, VETO ~250, RLVR ~300 = ~1850 words. Good.

Ensure exact section names.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The source material available is limited to one page [PAGE 1], which contains a triage summary and abstract notice for Badatya et al., "Throwing4: Phase-Aware Pose Modeling for Throw-Distance Prediction in Elite Athletics" (arXiv:2610.16383). The PDF is explicitly not mirrored under the arXiv non-exclusive license, so every factual claim about the dataset must be traced to [PAGE 1] and nothing else. From [PAGE 1], the verified facts are: 500 broadcast throwing clips spanning javelin, discus, hammer, and shot put; each clip has 2D pose, phase labels, and official distances; phase-conditioned encoders reduce distance-prediction error across graph pose backbones; the dataset is on GitHub; triage scores are N/P/R = 6/4/8, composite 18/30.

The multi-hop derivation proceeds as follows. Hop 1 is the observation layer: broadcast video yields a monocular 2D pose sequence P_t = {(x_t^j, y_t^j, c_t^j)}_{j=1}^J for J joints across T frames, where coordinates are in normalized image space or pixels and c_t^j is a confidence score. Because the camera extrinsic parameters are generally unknown for broadcast footage, the 2D projection is a many-to-one map from 3D kinematics to image coordinates. Hop 2 is the temporal segmentation layer: phase labels phi_c partition each clip into biomechanical stages (e.g., approach, crossover, delivery, release, recovery), though the exact phase vocabulary is discipline-specific and not detailed in [PAGE 1]. Hop 3 is the graph backbone: joints become nodes V in a kinematic graph G=(V,E,A), edges E encode anatomical connectivity, and message passing produces joint embeddings h_v^(l) at layer l. Hop 4 is phase conditioning: the encoder parameters or feature modulation are conditioned on phi_c, effectively implementing a mixture of experts or FiLM-style affine modulation gamma_phi, beta_phi over the graph readout. Hop 5 is regression to a scalar official distance d_c in meters.

Gray-zone audit. The first gray zone is dimensional collapse: elite throwing distance is governed primarily by release velocity vector v_r (m/s), release angle theta_r (rad), release height h_r (m), and implement aerodynamics, none of which are directly observed in 2D pose. A monocular 2D skeleton cannot recover absolute scale or depth without camera calibration and a known reference length, so v_r and h_r are only weakly identifiable. The second gray zone is phase-label fidelity: if the phase boundaries are annotated from broadcast video rather than instrumented biomechanics, misalignment of even a few frames around release can route a sample to the wrong phase-conditioned branch, inducing a discontinuity in the prediction manifold. The third gray zone is sample complexity: [PAGE 1] states N=500 across four disciplines; if roughly balanced, that is ~125 clips per implement, which is thin for phase-conditioned deep graph models with many parameters, raising overfitting risk especially for rare phases like the hammer's multiple turns. The fourth gray zone is distribution shift: broadcast clips capture competition outcomes but not necessarily the athlete's full run-up or wind conditions; official distance integrates aerodynamic flight after release, while the pose sequence ends at or before release, creating a causal gap between observed pose and unobserved flight. Finally, composite triage 18/30 indicates moderate but not strong source reliability; the N/P/R profile suggests novelty is present but reproducibility and rigor may be constrained by the absent PDF. Any claim beyond [PAGE 1] about architecture details, loss functions, or error magnitudes is therefore unverified and must be treated as hypothetical formalism, not source fact.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a single broadcast clip c be indexed by c=1..N with N=500 [PAGE 1]. Define the observed pose tensor X_c in R^{T x J x 3}, where entry (t,j,:) = (x_t^j, y_t^j, c_t^j) with x,y in normalized image coordinates [0,1]^2 and confidence c_t^j in [0,1]. The phase label is phi_c in Phi, where Phi is the discipline-dependent set of throwing phases (e.g., for javelin: approach, withdrawal, crossover, delivery-stride, release, recovery; for shot put: glide or spin, delivery, reverse; for discus: preliminary swings, turn, delivery, reverse; for hammer: swings, turns, release). The target is official distance d_c in meters, d_c in (0, D_max] with D_max discipline-dependent (world-record scale roughly 80-100 m for javelin/hammer, ~23 m for shot put, ~74 m for discus).

Graph pose backbone operator. Construct G_c=(V,E,A) with V={1..J} joints and E the anatomical kinematic tree. Node initialization h_v^(0) = x_t^j flattened across time or per-frame. Layer l message passing:
m_v^(l) = sum_{u in N(v)} a_{vu} W^(l) h_u^(l)
h_v^(l+1) = ReLU(m_v^(l) + W_self^(l) h_v^(l))
where a_{vu} are normalized adjacency weights, W^(l), W_self^(l) in R^{d_l x d_{l+1}}, and d_l is the hidden width. Temporal aggregation over T frames yields clip embedding z_c = Readout({h_v^(L)}) in R^d, e.g., z_c = mean_{t,v} h_v^(L)(t) or an attention-weighted readout.

Phase-conditioned readout operator. Let K = |Phi|. For each phase k, define a branch g_k: R^d -> R with parameters theta_k. The prediction is
\hat d_c = sum_{k=1}^K 1[phi_c = k] g_k(z_c; theta_k)
Equivalently, FiLM conditioning: \tilde z_c = gamma_{phi_c} odot z_c + beta_{phi_c}, \hat d_c = w^T \tilde z_c + b, with gamma_k, beta_k in R^d.

Loss and units. Training objective:
L(theta) = (1/N) sum_{c=1}^N (d_c - \hat d_c)^2 + lambda ||theta||_2^2
with d_c, \hat d_c in meters and loss in m^2. Regularization lambda dimensionless or m^-2 depending on parameterization. Time is in seconds (s), joint angles in radians (rad) if converted from 2D, velocities in m/s, forces in newtons (N) if ever introduced (not in source).

Assumptions (A). (A1) 2D pose is a sufficient statistic for the biomechanics that determine throw distance under a fixed, unknown but static camera projection within a clip. (A2) Phase labels phi_c align with the true biomechanical event boundaries used by the athlete. (A3) The broadcast clip contains the release-relevant kinematic window; official distance d_c is conditionally dependent on X_c given phi_c.

Breakdown regimes (B). (B1) Out-of-plane projectile ambiguity: for discus and hammer, the implement orbital plane may be tilted relative to the camera optical axis; 2D pose cannot disambiguate release azimuth and elevation, so d_c is not identifiable from X_c alone. (B2) Missing release frame: if occlusion or broadcast cut removes the release instant, the causal chain from pose to release velocity is severed; the model must extrapolate from pre-release kinematics, increasing variance. (B3) Small-N per discipline: N=500 across four implements yields limited samples per phase-conditioned branch; deep g_k may memorize athlete-specific idiosyncrasies rather than generalizable phase-distance maps. (B4) Aerodynamic omitted variables: wind velocity w (m/s), air density rho (kg/m^3), and implement surface condition affect flight range but are absent from 2D pose, causing conditional bias E[d_c | X_c, phi_c] != E[d_c | X_c, phi_c, w, rho].

Source citation discipline: all dataset and triage facts above derive from [PAGE 1]; the equations are formal problem statements, not quoted from the unavailable PDF.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of Throwing4 sits at the intersection of classical throwing biomechanics, 2D human pose estimation, and spatiotemporal graph neural networks. In biomechanics, throwing events have long been decomposed into phases—javelin into approach and delivery, discus and hammer into turns and release, shot put into glide/spin and put—because distance is determined by the release state, which is the outcome of a sequenced kinetic chain. Modern pose estimation descends from convolutional pose machines and stacked hourglass networks to HRNet and OpenPose, delivering 2D joint heatmaps from monocular video. Graph pose backbones descend from ST-GCN and MS-G3D, which model the skeleton as a graph and propagate messages along anatomical edges; phase conditioning resembles mixture-of-experts or conditional batch normalization used in action recognition.

Multi-week traps arise because elite throwers do not remain static between training and competition phases of a macrocycle. Over weeks, accumulated fatigue alters inter-joint coordination timing, shifting the temporal boundaries of phase labels; a model trained on fresh-athlete clips may misphase a fatigued athlete. Technical drift occurs when coaches adjust release angle or crossover mechanics mid-season, moving the athlete out of the phase-conditioned distribution seen in the 500-clip dataset [PAGE 1]. Implement variation—different javelin models, discus weights, hammer wire lengths—changes aerodynamics and moment of inertia without changing the visible skeleton, so the same 2D pose can produce different official distances across weeks. Competition-surface changes (track runway versus throwing circle, indoor versus outdoor) alter approach velocity and ground reaction forces not encoded in pose. Finally, arousal-induced kinematic changes in championship settings mean broadcast clips from routine meets may not generalize to high-stakes finals, creating a temporal distribution gap between source data and target deployment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From a recursive theory-of-mind perspective, the athlete, coach, and prediction model form a nested inference loop. Crisis habit regression: under competitive pressure, elite throwers tend to regress to earlier-learned, less efficient motor patterns—shortening the delivery stride, truncating the hammer turns, or rushing the javelin crossover. If the phase classifier was trained predominantly on technically clean phases, crisis kinematics may be classified as "off-phase" or assigned to an incorrect branch g_k, causing the phase-conditioned encoder to apply the wrong prior and degrade distance prediction precisely when performance variance is highest.

Counter-trap: the model may learn a spurious inverse correlation between "ideal" phase form and distance because some athletes compensate for technical flaws with exceptional strength or implement-specific release mechanics. In that case, the model might penalize technically imperfect but effective throws and overvalue technically clean but physically weak throws, producing a coach-athlete-model misalignment where the model recommends changes that reduce actual distance.

Clock layer: broadcast clips impose an exogenous temporal framing that differs from the athlete's subjective competition clock. The model sees a fixed-length broadcast segment, whereas the athlete experiences the run-up and throw as a continuous, self-paced process under a competition clock (attempt time limits, wind gauges, flight judges). If coaching staff use the model's output to adjust technique between attempts, the athlete's future pose distribution shifts in response to the model's past predictions—a performative loop. The model must therefore anticipate not just the athlete's current motor state, but the athlete's anticipated reaction to being modeled, which is a second-order theory-of-mind recursion absent from the source [PAGE 1] but central to deployment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three layers can veto a distance prediction, independent of the graph backbone's confidence.

Physical layer veto. Throw distance is fundamentally bounded by release kinematics and flight physics. In vacuum, projectile range scales as R = v_r^2 sin(2 theta_r)/g, where v_r is release speed (m/s), theta_r is release angle (rad), and g = 9.80665 m/s^2. For implements, aerodynamic lift and drag modify this bound, but v_r and theta_r remain necessary conditions. 2D pose cannot recover v_r magnitude without scale calibration (known limb length or ground-plane reference) and cannot recover theta_r depth component without extrinsics. If the release frame is missing, occluded, or the camera angle places the implement out of plane by more than ~15 degrees, the physical layer veto fires: defer prediction rather than regress from ambiguous pose.

Biomechanical layer veto. Ground reaction forces (N), center-of-mass trajectory, and implement angular velocity are not nodes in the 2D pose graph. The skeleton excludes the implement as a separate rigid body with its own mass distribution (kg) and moment of inertia (kg m^2). If the athlete implements a technique change that preserves joint angles but alters implement release (e.g., hammer winding radius, javelin grip angle), the biomechanical layer veto fires because pose similarity does not imply implement-release similarity.

Weather layer veto. Ambient wind velocity w (m/s), air density rho (kg/m^3), temperature (K), and humidity affect drag and lift during flight but leave the pre-release pose unchanged. If concurrent meteorological data show |w_parallel| > 2 m/s along the throw direction and wind was not represented in the training distribution, the weather layer veto fires: the pose-conditioned estimate cannot account for aerodynamic range reduction or enhancement.

Adjudication rule. Output \hat d_c only if all three layers pass: release frame visible and in plane, implement kinematics inferable, and weather within training envelope. Otherwise, return a veto flag with reason code {PHYS_OCCLUSION, BIOMECH_IMPLANT_OPAQUE, WEATHER_OOD} and fall back to discipline mean distance with inflated uncertainty, not a point estimate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Aerodynamic wind veto (javelin). Counterfactual condition: a headwind component w_parallel > 3 m/s is measured by an on-field anemometer during the throw, but wind is absent from the 2D pose input and was rare in the 500-clip training set [PAGE 1]. Verifiable prediction: conditional on identical pose kinematics and phase label, the model's mean absolute error E[|d_c - \hat d_c|] increases by at least 0.8 m relative to the calm-wind subset (|w_parallel| < 1 m/s), with a systematic positive bias (overestimation) because the same release pose produces a shorter actual flight distance under headwind. Verification method: stratify holdout javelin throws by anemometer-read wind and compare model error stratified by wind bin.

Scenario 2 — Phase mislabeling under occlusion (hammer throw). Counterfactual condition: the broadcast view occludes the hammer release frame, and the phase labeler assigns "turn completion" rather than "release," routing the clip through the wrong phase-conditioned branch g_k. Verifiable prediction: for clips with release-frame occlusion, absolute distance error exceeds 1.5 m for at least 20% of samples, whereas non-occluded clips remain below 1.0 m error; the phase-conditioned prediction collapses toward the mean distance of the misassigned branch rather than the athlete's true release branch. Verification method: compare frame-accurated instrumented release labels against broadcast phase labels on a subset, then compute error stratified by label agreement.

Scenario 3 — Anthropometric out-of-distribution veto (shot put). Counterfactual condition: a holdout athlete's shoulder breadth-to-arm-length ratio lies beyond two standard deviations from the training covariance, placing their pose graph node embeddings outside the 95% Mahalanobis radius of the training graph features. Verifiable prediction: the model's predicted distance collapses toward the shot-put discipline mean (~18-22 m for elite men), the predictive variance collapses (overconfidence), and expected calibration error (ECE) increases by at least 0.15 relative to in-distribution athletes. Verification method: measure athlete anthropometry, compute Mahalanobis distance in the penultimate graph layer, and bin predictions by in-distribution vs. OOD; compare ECE and bias across bins.
</RLVR_COUNTERFACTUAL_VETOES>
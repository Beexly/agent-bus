---
source: "2026 - Wide Open Gazes Quantifying Visual Exploratory Behavior in Soccer with Pose Enhanced Positional Data - Bekkers.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 20
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6996
---

<NATIVE_REASONING>
The user wants a detailed analysis of a specific research paper: "Wide Open Gazes: Quantifying Visual Exploratory Behavior in Soccer with Pose Enhanced Positional Data - Bekkers.md" from MIT Sloan Sports Analytics Conference 2026.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text provided is pages 1-21 (the full paper seems to be included).
- I need to cite exact page markers [PAGE N] where relevant.
- No betting lines at all.
- No fake/toy equations. I must use real equations from the paper or formal LaTeX derived from them, with SI units, assumptions, breakdown regimes.
- Word count >= 1,000 total across sections, with THINK_TRACE >= 400 words.

Let me structure the response carefully.

First, THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The methodology: pose-enhanced tracking at 25 FPS, head/shoulder/hip rotation angles.
- Vision layer: binary FOV (120° binocular), probabilistic FOV (Gaussian radial and angular decay), speed-dependent scaling (cr, ca).
- Occlusion: ray projection, shoulder rotation, apparent angular width, element-wise product of all occlusions.
- Integration with pitch control (Fernández & Bornn 2018) and pitch value. Imminent pitch control scaling parameter cin.
- Validation: XGBoost ablation, AUC 0.664 baseline -> 0.788 vision. Traditional VEA adds nothing.
- Gray zones: head angle as proxy for eye orientation (92% same direction), interpolation of missing angles via Euler formula, 25 FPS limitations for VEA, pitch value model trained on <1% subset (n=19,504), filtering of uncontested sequences, prat ratio between 0.35 and 0.65 omitted, SHAP interpretation ambiguities (observing defense could mean contested area not skill).
- Multi-hop: pose angles -> vision maps -> pitch control/value overlap -> XGBoost features -> label (pitch value ratio at end of on-ball phase).

Second, SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need to extract equations from the text or reproduce them accurately based on the source. The source text has some garbled formulas (OCR issues), but I can infer them:
- Formula 1: Vρ_i(p,t | θh, v) ... Gaussian radial R and angular A.
- Formula 2: R(ci(vi), d) maybe exp(-d^2 / (2 * (σr * cr(vi))^2))? Need to be careful not to invent. I should describe based on text: R is Gaussian decreasing with distance d, standard deviation σr, scaled by cr influencing decay rate. A is Gaussian decreasing with angle θa, standard deviation σa, scaled by ca.
- Formula 4: Vϕ,i,j(pi, θh,i, pj, θs,j, t) = Qi,j(pi, pj, θs,j, t) ⊙ Vo,i,j(pi, θh,i, pj, t) * α? Actually text: Vϕ,i,j = Qi,j ⊙ Vo,i,j * α? Let's read: Formula (4) seems garbled but says multiplying these three components yields occlusion map. Components: Qi,j, Vo,i,j, and α (max probability). So Vϕ,i,j = α * Qi,j ⊙ Vo,i,j maybe element-wise.
- Formula 6: cq(pi, pj, θs, t) = ωα / δi,j.
- Formula 8: Vi = Vρ,i ⊙ VΦ,i.
- Formula 9: normalized pitch value = Vl ⊙ Vη (element-wise matrix multiplication).
- Formula 10: Vrat = observed occupied space / total occupied space.
- Formula 11: prat = Pv(t_end) / Pv(t_start) maybe instantaneous pitch value ratio.
- Formula 12: y = 1 if prat > 0.65, y = 0 if prat < 0.35, omit between.
- Formula 13/14: linear functions for cr, ca vs speed vi.
- Formula 15a-f: apparent width calculation.
- Formula 16: distance δi,j.

Units: meters (m), meters per second (m/s), degrees (°) converted to radians for trig, frames per second (FPS), AUC (unitless), precision/recall/F1 (unitless), pitch dimensions 105x68 m.

Breakdown regimes: speed effects on FOV narrowing; 25 FPS temporal resolution limiting VEA detection; angle interpolation singularity at branch cuts (Euler/cyclical); pitch value NN trained on <1% data (generalization risk); occlusion model assumes players as rectangles with shoulder width 0.5m and torso depth 0.3m; imminent pitch control scaling cin reduces influence radius arbitrarily.

Third, RETROCAUSAL_GENEALOGY: Historical lineage.
- Fernández & Bornn (2018) pitch control/pitch value [20].
- SoccerMap [19].
- Jordet et al. VEA counting >125°/s [22, 23, 28].
- Eye-tracking lab studies [11, 36, 41, 30].
- Systematic reviews [29, 24].
- Caso et al. [12] no VEA difference super elite vs elite.
- Bekkers prior work: pressing intensity [5], EFPI [6], flow motifs [8], counterattacks [9].
- Multi-week traps: if a team adopts this vision metric over multiple weeks, opponents may manipulate gaze (e.g., "look-away" feints, body orientation deception), causing the metric to regress as players game the observable head/shoulder angles rather than actual visual attention. Also, data pipeline dependency on Respo.Vision/StatsPerform synchronization; if broadcast angle changes or occlusion by camera matters, pose estimation degrades.

Fourth, RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, players revert to habitual scanning patterns (narrow FOV, high speed). The model captures speed-dependent FOV contraction; in crisis (high press), v_i increases, FOV narrows (cr, ca scaling), reducing observed pitch value. The model may mislabel this as poor perception when it's biomechanically forced.
- Counter-trap: Opponents aware of being "observed" may position shoulders to minimize occlusion or maximize deception (e.g., facing away to appear non-threatening while actually marking). This breaks the assumption that shoulder rotation directly maps to obstruction size.
- Clock: The awaiting phase is time-bounded (from pass release to reception). The model uses features averaged from t_start to t. If the clock runs down (ball arrives sooner), fewer frames, less stable averaged features, higher variance in Vrat and SHAP features. Early stopping and 150 estimators may overfit to temporal artifacts if the awaiting duration is heterogeneous.

Fifth, CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Pitch dimensions 105x68 m fixed. Grid resolution (105x68 cells = 1m x 1m?) The paper says 105x68 grid, likely 1m resolution. Physical limit: spatial resolution cannot distinguish sub-meter differences in gaze.
- Biomechanical: Head angle as proxy for eye orientation; 92% concordance [18]. 8% mismatch (saccades, vergence) creates irreducible noise. Shoulder width ωs = 0.5m, torso depth ds = 0.3m assumed constants (Appendix A), ignoring player build variation. Interpolation of missing angles via Euler's formula: singularities when angular velocity is high or data missing for extended periods; cyclical interpolation assumes shortest path, which fails if player spins >180° between frames (at 25 FPS, 40ms, max head turn speed could exceed π/0.04 = 78.5 rad/s? Actually human head can turn fast; aliasing possible).
- Weather: Not explicitly in paper (tracking data is broadcast, likely outdoor but no weather variables). However, broadcast camera pitch distortion, lighting, and player occlusion by camera angle can degrade pose estimation. No weather veto mentioned; but outdoor conditions (rain, glare) could affect computer vision pose estimation quality, introducing missing angles that are interpolated, biasing vision maps.
- Veto adjudication: Any model using this vision layer must veto frames where: (a) head/shoulder/hip angles missing and interpolated beyond threshold; (b) player speed > threshold where FOV collapse makes Gaussian assumptions invalid; (c) ball not in play or set-piece (already filtered); (d) pitch control surface unavailable due to tracking dropouts.

Sixth, RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios.
1. Scenario: High-speed reception (v_i > 7 m/s). Prediction: Vision model's FOV Gaussian collapses (cr, ca increase decay), making observed pitch value features near-uninformative; XGBoost vision AUC should drop to baseline (~0.664) if stratified by speed, because imminent pitch control dominates and visual exploration is biomechanically suppressed. Veto: exclude frames with v_i > 7 m/s or flag as low-confidence.
2. Scenario: Missing pose angles for > 3 consecutive frames (120ms). Prediction: Euler interpolation along shortest angular path introduces systematic bias if actual head rotation exceeded π radians between samples; occlusion maps VΦ will be misaligned, causing false positives in "observed defensive space." Model performance should degrade significantly on interpolated subsets; veto: require raw angle availability for all players in the awaiting phase.
3. Scenario: Opponent shoulder feint (θs,j rotated 90° away from player i while actually marking). Prediction: Apparent angular width ωα shrinks (sideways profile), reducing occlusion Vϕ,i,j and inflating vision map Vi in the direction of the defender. The attacker "sees" more space than is actually controllable, leading to positive SHAP features [A]-[D] but negative on-ball outcome (loss of pitch value). Veto: cross-check shoulder orientation with hip orientation; if |θs - θh| > threshold for defender, veto occlusion contribution or flag as adversarial pose.

Need to ensure no betting lines. The paper is about soccer analytics, no betting mentioned, so easy.

Need to cite page markers. The text has page numbers 1-21 visible. I will cite [PAGE 1], [PAGE 2], etc. Verbatim quotes where possible.

Word count: Need >= 1000 words total. THINK_TRACE >= 400. I'll write substantial content.

Let's draft.

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

I must be careful with LaTeX formatting. Use proper LaTeX inline and display equations.

Let's verify page numbers from source:
- Page 1: Abstract, intro start.
- Page 2: Intro continued, VEA limitations.
- Page 3: Research questions, validation dataset start.
- Page 4: Figure 1, missing angles interpolation.
- Page 5: Methodology start, Vision, Formula 1, Figure 2.
- Page 6: Occlusions start.
- Page 7: Formula 4, Formula 6.
- Page 8: Complete vision map, Figure 7.
- Page 9: Pitch control, imminent pitch control, Figure 8, 9, 10.
- Page 10: Pitch value, Figure 11.
- Page 11: Validation, labels, Formula 11.
- Page 12: Ablation models.
- Page 13: Results Table 1, impactful features.
- Page 14: Figure 13.
- Page 15: Conclusion.
- Page 16-18: References.
- Page 19: Appendix A.
- Page 20: Appendix B.
- Page 21: Appendix C.

I'll cite these.

Now write detailed content.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation.
Start from raw data: 25 FPS tracking, 2.3M frames, 60k events, 32 Copa América games. Filter: uncontested open play, at least 1 successful pass, >7s after set-piece. Yields 14,000 awaiting moments, 171,318 frames aligned with final on-ball frame.
Pose data: head, shoulder, hip rotation angles. Missing angles interpolated via Euler formula (cyclical, shortest angular path). Head orientation proxy for eye orientation; 92% gaze shifts same direction as head movement [PAGE 4].
Vision layer: Binary FOV Vβ assumes binocular vision spans 120° [21] [PAGE 5]. Probabilistic FOV Vρ: Gaussian radial R and angular A. Speed vi influences scaling cr and ca; higher speed -> loss of spatial awareness, narrower focus. Formula 1 (Vρ), Formula 2 (R), Formula 3 (A).
Occlusion: For every other player j, build ray Qi,j from i through j. Controlled by α (max obstruction prob). Binary mask Vo,i,j for unobstructed view. Vϕ,i,j = combination (element-wise product and α scaling). Apparent width ωα from shoulder width 0.5m and torso depth 0.3m; distance δi,j scales it. Complete occlusion VΦ = element-wise product over all J.
Complete vision map Vi = Vρ,i ⊙ VΦ,i.
Pitch layer: Fernández & Bornn [20] pitch control PC and pitch value Vl. Imminent pitch control PC^imminent via scaling parameter cin on player influence radius Ri [PAGE 9]. Pitch value normalized by distance-to-goal surface Vη; element-wise matrix multiplication [PAGE 10].
Label: prat = Pv(t_end_onball) / Pv(t_awaiting). y=1 if prat > 0.65, y=0 if prat < 0.35, omit 0.35-0.65 [PAGE 11].
Models: XGBoost 150 estimators, lr 0.05, max depth 4, early stopping. Split by game. Baseline (0.664 AUC), Traditional VEA (0.654), Regular (0.744), Vision (0.788) [PAGE 13, Table 1].
SHAP: Features A-D (observing defensive/attacking occupied space, ratio defense/attack, observed total attack controlled areas averaged over awaiting phase) predict increase. Features G-H (observing total defensive controlled areas averaged, percentage instantaneously observed defensive space) predict decrease [PAGE 13-14]. Traditional VEA count no impact [PAGE 14].
Gray zones:
- Head-eye proxy 8% error.
- Cyclical interpolation singularity at ±π branch cut; aliasing at 25 FPS if head turns fast.
- Pitch value NN trained on n=19,504 (<1% of open play moments) [PAGE 10]; small sample may not cover tactical extremes.
- Imminent pitch control scaling cin is ad hoc; no physical derivation of reachable radius in short time.
- Vrat and average observed pitch area [F] have little influence, yet [A]-[D] are averaged over time; temporal aggregation window choice is arbitrary.
- Observing defensive space may indicate contested area rather than skill [PAGE 13].
- Position bias largely removed except Wide Forward.
This is >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX, units, assumptions, breakdown.
- Vβ: binary, binocular 120° [PAGE 5].
- Vρ_i(p,t | θh,i, vi) = R(·) ⊙ A(·)? Actually text says R and A describe vision as Gaussian. Need to express:
  R(d; σr, cr(vi)) = exp( -d² / (2 (σr · cr(vi))²) )? The text says cr determines decay rate, σr standard deviation. I'll write formal Gaussian but note exact functional form is implied by text: radial Gaussian decaying with distance d, modulated by speed-dependent cr(vi).
  A(θa; σa, ca(vi)) = exp( -θa² / (2 (σa · ca(vi))²) ).
  Units: p ∈ ℝ² on 105m × 68m pitch; d in meters; θ in radians; vi in m/s; Vρ ∈ [0,1] probability.
- Occlusion: Vϕ,i,j = α · Qi,j ⊙ Vo,i,j? Need to check text: "Multiplying these three components yields occlusion map Vϕ,i,j as described in Formula 4". Components: Qi,j, Vo,i,j, α. So Vϕ,i,j(pi, θh,i, pj, θs,j, t) = α · Qi,j(pi, pj, θs,j, t) ⊙ Vo,i,j(pi, θh,i, pj, t). α ∈ [0,1] max obstruction probability.
- cq(pi, pj, θs, t) = ωα / δi,j [PAGE 7, Formula 6]. δi,j = ||pj - pi||₂ meters. ωα in radians derived from shoulder width ωs = 0.5 m, torso depth ds = 0.3 m [Appendix A, PAGE 19].
- Complete vision: Vi = Vρ,i ⊙ VΦ,i where VΦ,i = ⊙_{j∈J} (1 - Vϕ,i,j)? Actually text: VΦ is combination of every individual occlusion. Figure 5 shows combined occlusion map shown as 1 - VΦ,i. Formula 7 likely VΦ,i = ⊙_{j} Vϕ,i,j or product of survival probabilities. I'll state: VΦ,i = ∏_{j∈J} Vϕ,i,j (element-wise product across players), or if represented as unobstructed probability, V_unobs = ⊙_j (1 - Vϕ,i,j). The paper says "element-wise product of all occlusion matrices for player i observing all players J". So VΦ,i = ⊙_{j∈J} Vϕ,i,j. Then Vi = Vρ,i ⊙ VΦ,i.
- Pitch control: PC with influence radius Ri scaled by cin: Ri^imminent = cin · Ri, 0 < cin ≤ 1. PC^imminent ∈ [0,1] probability.
- Pitch value: Vl_norm = Vl ⊙ Vη [PAGE 10, Formula 9]. Vl ∈ [0,1], Vη ∈ [0,1] distance-to-goal normalization.
- Vrat = observed occupied space / total occupied space [PAGE 12, Formula 10]. Unitless ratio.
- prat = Pv(t_onball_end) / Pv(t_awaiting) [PAGE 11, Formula 11]. Unitless ratio.
- y = 1{prat > 0.65}, y = 0{prat < 0.35}, undefined for 0.35 ≤ prat ≤ 0.65 [PAGE 11, Formula 12].
- Scaling factors: cr(vi), ca(vi) linear functions [Appendix B, PAGE 20]. Exact coefficients not in text; I will state they are empirically determined linear functions mapping vi (m/s) to scaling factors, without inventing numbers.
- Apparent width: ωα computed from four torso corners, rotation matrix R(θs), vectors vi from pi to corners, angle between opposite corners; ωα = max(∠(v1,v3), ∠(v2,v4)) [Appendix B.2, PAGE 20]. Units radians.
- δi,j = ||pj - pi||₂ [Appendix B, PAGE 20]. Units meters.

Assumptions & breakdown regimes:
- Head ≈ eye: 92% concordance [PAGE 4]; breakdown in 8% saccadic/vergence events.
- Speed-dependent FOV: assumes higher vi reduces spatial awareness; breaks down at very low speeds (static scanning may be wide) or very high speeds (FOV collapse may be non-Gaussian).
- 25 FPS: temporal aliasing for head angular velocity > ~π/(2·0.04) rad/s? Actually Nyquist for angle: if head rotates > 180° between frames, shortest-path interpolation picks wrong branch. At 25 FPS (40 ms), if angular velocity > 4500°/s (~78.5 rad/s), aliasing possible. Human head can exceed this in sudden snaps.
- Occlusion rectangle: constant ωs=0.5m, ds=0.3m [Appendix A]; breakdown for players with atypical build or when body orientation differs from shoulder orientation.
- Pitch value NN trained on <1% subset [PAGE 10]; breakdown in rare tactical states (e.g., low block, man-marking).
- Imminent pitch control cin ad hoc; breakdown when cin does not match actual acceleration/reach capabilities.
- Label prat threshold 0.35-0.65 omitted; breakdown near decision boundary where noise dominates.

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage.
- Laboratory eye-tracking: [11, 36, 41, 30], skilled players shorter fixations across more relevant locations [PAGE 1-2]. Limited by hypothetical video, not open play.
- Systematic review [29]: no studies in actual open-play; [24]: 2016-2022 progress but small samples, outdated tech.
- VEA counting >125°/s [22, 23, 28]; bias to central midfielders [16, 22, 23, 28]; inter-observer variability [26, 13, 23]; 25 FPS unreliable [26]; binary [26, 13]; pass success validation not significant for some positions [23]; contextual factors [27, 31]; Caso et al. [12] no super elite vs elite difference [PAGE 2].
- Fernández & Bornn (2018) pitch control/pitch value [20]; SoccerMap [19]; spatial analysis [40]; dominant region [40].
- Bekkers prior: pressing intensity [5], EFPI [6], flow motifs [8], counterattacks [9], common data format [2].
- Multi-week traps: If adopted over weeks, opponents can manipulate observable pose cues (shoulder/head) without changing actual gaze, creating adversarial degradation. Camera pose estimation dependence (Respo.Vision) means broadcast angle changes or stadium lighting can break the pipeline. The metric's position-independence is a strength but also means tactical roles are flattened (EFPI six labels), potentially erasing role-specific visual norms over time.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under defensive pressure, player speed vi rises; model scales cr, ca causing FOV Gaussian to narrow [PAGE 5-6]. This is a biomechanical habit regression: the player looks where they are moving, not where value is. The model may code low vision map overlap as poor perception, when it is forced by crisis dynamics.
- Counter-trap: Opponents can present minimal shoulder profile (θs,j ≈ 90° relative to line of sight) to reduce ωα and apparent occlusion, inflating Vi for the attacker. Conversely, a defender can face the attacker directly to maximize occlusion and falsely suggest space is denied. The shoulder-based occlusion model assumes honest biomechanical signaling; recursive theory of mind means defenders can "fake" their body orientation to manipulate the vision map features used by analysts/opponents.
- Clock: The awaiting phase has variable duration from pass release to reception (t_start to t). Features are averaged over this window [PAGE 12]. Short windows (fast passes) yield high-variance aggregated vision features; long windows allow more scanning but may include irrelevant pre-pass movements. The XGBoost early stopping and fixed 150 estimators assume stationarity across awaiting durations; if clock pressure compresses the awaiting phase, feature distributions shift, causing recursive miscalibration.

CROSS_LAYER_VETO_ADJUDICATION:
Physical: 105m × 68m pitch, 1m × 1m grid cells (implied by 105×68 grid). Physical resolution limit: cannot resolve gaze within sub-meter. Ball/player coordinates from broadcast tracking have known error (not specified, but typical tracking error ~0.1-0.3m).
Biomechanical: Head angle proxy; 92% rule [PAGE 4]. Missing angle interpolation via Euler formula on cyclical data [PAGE 4]; singularity when angular displacement between frames approaches ±π (branch cut) or when data gaps exceed a few frames. Shoulder width and torso depth constants [Appendix A] ignore inter-player anthropometry. Speed-dependent FOV assumes Gaussian decay; at vi = 0 m/s, model may still produce a finite FOV, but real players may scan differently when stationary.
Weather/environment: Not modeled in paper. Broadcast pose estimation vulnerable to motion blur, lighting changes, rain on camera lens, and player occlusion by stadium infrastructure or other players from camera view (different from on-pitch occlusion). These cause missing angles that are interpolated, biasing Vi.
Veto rules:
1. Reject frame if any relevant player (i or any j in occlusion set) has interpolated head/shoulder angle for >2 consecutive frames (80ms) without raw measurement.
2. Reject if vi > 8 m/s during awaiting phase because FOV scaling parameters cr, ca enter extrapolation regime not validated in Appendix B (linear functions may break outside observed speed range).
3. Reject if pitch control surface missing due to tracking dropout (>1 missing frame for any player).
4. Flag (not reject) if defender's |θs,j - θh,j| > 45° while within 3m of attacker, indicating possible shoulder feint; reduce weight of occlusion contribution.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means reinforcement learning from verifiable rewards, but here just counterfactual vetoes.
Scenario 1: High-speed awaiting (v_i ≥ 7 m/s). Veto: exclude from vision-feature model or zero out vision features. Prediction: Vision model AUC collapses to baseline ≈ 0.664 (same as Baseline model [PAGE 13]) because FOV Gaussian collapses under speed scaling and visual exploration cannot inform subsequent pitch value. Verifiable by stratifying Table 1 by speed quartiles.
Scenario 2: Extended pose interpolation (≥3 consecutive frames / 120ms missing raw angles). Veto: discard sample. Prediction: SHAP importance of vision features drops by >30% relative to raw-angle samples, and calibration error (Brier score) increases due to Euler shortest-path bias on cyclical head angles. Verifiable by comparing models trained on raw-only vs interpolated subsets.
Scenario 3: Adversarial shoulder orientation (defender θs,j perpendicular to line of sight while marking within 2m). Veto: down-weight occlusion term Vϕ,i,j by factor 0.5 or use hip angle instead. Prediction: Observed defensive space features [A], [B], [G], [H] lose predictive direction; players previously classified as "high visual quality" will show no significant pitch value gain, and feature [F] (total area observed) becomes negatively correlated with outcome because inflated vision maps reflect false visibility rather than true scanning. Verifiable via controlled pose perturbation experiment: rotate synthetic defender shoulder by ±90° and measure change in Vi and XGBoost prediction probability.

Need to ensure no betting lines. None present.

Need word count. Let's estimate. THINK_TRACE should be ~500 words. Other sections ~200-300 each. Total should exceed 1000.

Let's write carefully with citations [PAGE N].

I will now produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain runs from raw pose-enhanced tracking to a continuous vision layer, then through pitch control and pitch value surfaces, ending in an XGBoost binary classifier that predicts whether a player increases imminent pitch value after receiving a pass. The data layer is 32 games of 2024 Copa América broadcast tracking from Respo.Vision at 25 frames per second, enhanced with head, shoulder, and hip rotation angles, synchronized with StatsPerform (Opta) event data via kloppy, socceraction, and a simplified ETSY algorithm [PAGE 3]. After filtering for uncontested open play—defined as at least one successful pass and occurring more than seven seconds after a set-piece—the dataset yields approximately 14,000 awaiting moments and 171,318 frames aligned with the final on-ball frame [PAGE 3-4].

The first multi-hop derivation constructs the vision map. Because human gaze is not perfectly measured by head pose, the author uses head orientation as a proxy for eye orientation, citing that approximately 92% of gaze shifts occur in the same direction as head movement in the horizontal plane [PAGE 4]. Missing angles are interpolated using Euler's formula, decomposing cyclical angles into real and imaginary components to interpolate along the shortest angular path [PAGE 4]. This interpolation introduces a branch-cut singularity: if a player's head rotates more than 180 degrees between 40 ms frames, the shortest-path assumption selects the wrong angular trajectory, corrupting the field-of-view map.

The probabilistic field-of-view model Vρ assumes binocular vision spans 120 degrees [PAGE 5]. It decomposes into a radial Gaussian R and an angular Gaussian A. Both are modulated by player speed vi through scaling parameters cr and ca, encoding the assumption that higher speed causes loss of spatial awareness and narrower focus on immediate surroundings [PAGE 5-6]. The radial component decays with distance d from player i, with standard deviation σr; the angular component decays with angle θa away from the focal point, with standard deviation σa [PAGE 6]. This speed dependence is empirically linear in Appendix B but unconstrained outside the observed speed distribution, creating a breakdown regime at extreme velocities.

Occlusion builds on this by projecting a probabilistic ray Qi,j from player i through every other player j. The ray is constrained by a maximum obstruction probability α and combined with a binary unobstructed-view mask Vo,i,j via element-wise multiplication [PAGE 6-7]. The apparent angular width ωα of player j is derived from shoulder width ωs = 0.5 m and torso depth ds = 0.3 m, scaled by inter-player distance δi,j [PAGE 7, Appendix A]. The complete occlusion map VΦ,i is the element-wise product of all individual occlusion matrices over the set J of other players [PAGE 7]. The final vision map Vi is Vρ,i ⊙ VΦ,i [PAGE 8].

The spatial value layer borrows Fernández & Bornn (2018): pitch control PC and pitch value Vl [PAGE 9-10]. Imminent pitch control scales the player influence radius Ri by a parameter cin to approximate space reachable within a very short period [PAGE 9]. Pitch value is normalized by a distance-to-goal surface Vη and combined with Vl through element-wise matrix multiplication [PAGE 10]. The label prat is the ratio of instantaneous pitch value at the end of the on-ball phase to that during the awaiting phase; samples with prat between 0.35 and 0.65 are omitted as noise, with y = 1 for prat > 0.65 and y = 0 for prat < 0.35 [PAGE 11].

The validation uses four XGBoost models with 150 estimators, learning rate 0.05, maximum depth 4, and early stopping, split by game to prevent leakage [PAGE 12]. Baseline AUC is 0.664; traditional VEA counting adds no value (0.654); the regular model reaches 0.744; and the vision model reaches 0.788 [PAGE 13, Table 1]. SHAP analysis reveals that aggregated vision features—particularly observing defensive occupied space, the defense-to-attack observation ratio, and observed total attack controlled areas averaged over the awaiting phase—predict pitch value gains, while observing more total pitch area without quality differentiation does not [PAGE 13-14]. Critically, traditional VEA count at 25 FPS has zero predictive impact [PAGE 14].

Gray zones include: (1) the 8% of gaze shifts not aligned with head movement, an irreducible proxy error; (2) cyclical interpolation aliasing at 25 FPS when head angular velocity causes branch-crossing between frames; (3) the pitch value neural network trained on only n = 19,504 moments, less than 1% of open play [PAGE 10], risking poor coverage of rare tactical states; (4) the ad hoc cin scaling parameter for imminent pitch control lacking a biomechanical derivation of reachable radius; (5) the arbitrary 0.35–0.65 label exclusion zone; and (6) the interpretational ambiguity that observing defensive space may signal a contested area rather than superior visual perception [PAGE 13]. Position bias is largely eliminated except for Wide Forwards [PAGE 14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are stated as formal operators with SI/probability units, assumptions, and breakdown regimes. Page citations refer to the provided manuscript.

**1. Binary field of view**
Player i at location pᵢ ∈ ℝ² on a 105 m × 68 m pitch. Binocular field of view Vβ assumes a fixed angular span of 120° [PAGE 5, citing Henson [21]].
\[
V_\beta(\phi) = 
\begin{cases}
1, & |\phi| \le 60^\circ \\
0, & \text{otherwise}
\end{cases}
\]
Unit: dimensionless binary mask. Assumption: static binocular span independent of speed. Breakdown: ignores vergence and saccadic suppression; does not model dynamic attentional aperture.

**2. Probabilistic field of view Vρ**
\[
V_{\rho,i}(p,t \mid \theta_{h,i}, v_i) = R(d; \sigma_r, c_r(v_i)) \odot A(\theta_a; \sigma_a, c_a(v_i))
\]
where d = ‖p − pᵢ‖₂ in meters, θₐ is the angular deviation from the head focal direction in radians, and vᵢ is player speed in m/s [PAGE 5-6]. R is a radial Gaussian whose decay rate is governed by cᵣ(vᵢ); A is an angular Gaussian whose decay rate is governed by cₐ(vᵢ). σᵣ and σₐ are constants for depth and angular vision standard deviations. Output Vρ ∈ [0,1] is a probability-like visibility weight per 1 m × 1 m grid cell. Assumption: higher speed reduces spatial awareness and narrows focus. Breakdown: at vᵢ → 0 the Gaussian may remain artificially wide; at extreme vᵢ the linear scaling of cᵣ and cₐ in Appendix B [PAGE 20] may extrapolate beyond validated speeds.

**3. Radial and angular scaling (Appendix B)**
\[
c_r(v_i) = \text{linear}(v_i), \qquad c_a(v_i) = \text{linear}(v_i)
\]
Units: dimensionless scaling factors mapping m/s to decay modulation [PAGE 20]. Exact coefficients are not printed in the source; they are described as empirically determined linear functions. Breakdown: no functional form or coefficient bounds are provided, so behavior outside the observed speed range is unverified.

**4. Occlusion ray and individual occlusion map**
For observer i and occluder j:
\[
Q_{i,j}(p_i, p_j, \theta_{s,j}, t) \in [0,\alpha]
\]
is the probabilistic ray from i through j, bounded by maximum obstruction probability α [PAGE 6-7]. The binary mask Vₒ,ᵢ,ⱼ encodes unobstructed line of sight. Individual occlusion:
\[
V_{\phi,i,j}(p_i, \theta_{h,i}, p_j, \theta_{s,j}, t) = \alpha \cdot Q_{i,j} \odot V_{o,i,j}
\]
Output ∈ [0,1] per cell. Assumption: occlusion scales with apparent angular width of j and is controlled by shoulder rotation θₛ,ⱼ. Breakdown: assumes players are opaque rectangles with constant shoulder width ωₛ = 0.5 m and torso depth dₛ = 0.3 m [Appendix A, PAGE 19], ignoring anthropometric variation and dynamic body articulation.

**5. Apparent angular width**
\[
\omega_\alpha = \max\bigl(\angle(v_1,v_3), \angle(v_2,v_4)\bigr)
\]
where vₖ are vectors from pᵢ to the four rotated torso corners of player j, computed via rotation matrix R(θₛ,ⱼ) [Appendix B.2, PAGE 20]. Unit: radians. Distance scaling:
\[
c_q(p_i, p_j, \theta_s, t) = \frac{\omega_\alpha}{\delta_{i,j}}, \qquad \delta_{i,j} = \|p_j - p_i\|_2
\]
Units: radians per meter for c_q; meters for δᵢ,ⱼ [PAGE 7, Formula 6; PAGE 20, Formula 16]. Breakdown: if δᵢ,ⱼ → 0 (players co-located), c_q diverges; the model must clamp or exclude near-zero distances.

**6. Complete vision map**
\[
V_{\Phi,i} = \bigodot_{j \in J} V_{\phi,i,j}, \qquad V_i = V_{\rho,i} \odot V_{\Phi,i}
\]
where J is the set of all other players, ⊙ is element-wise multiplication, and Vᵢ ∈ [0,1]^(105×68) [PAGE 7-8]. Assumption: occlusions combine independently as element-wise products. Breakdown: multiplicative combination can drive visibility to near-zero in crowded zones even when line-of-sight gaps exist.

**7. Imminent pitch control**
\[
PC^{\text{imminent}}_i = PC(R_i \cdot c_{\text{in}})
\]
where c_in ∈ (0,1] shrinks the player influence radius R_i to approximate reachable space in a short time [PAGE 9]. Unit: probability ∈ [0,1]. Assumption: linear scaling of influence radius corresponds to short-term reachable space. Breakdown: c_in is ad hoc; no acceleration or biomechanical reach model is provided.

**8. Pitch value**
\[
Vl_{\text{norm}} = Vl \odot V_\eta
\]
where Vl is the feed-forward neural-network pitch value surface and Vη is the distance-to-goal normalization surface [PAGE 10, Formula 9]. Both ∈ [0,1]. Unit: dimensionless expected value. The network was trained on n = 19,504 randomly sampled open-play moments, less than 1% of the data [PAGE 10]. Breakdown: small training fraction may underrepresent extreme tactical configurations (e.g., low blocks, transitional chaos).

**9. Observation ratio and label**
\[
V_{\text{rat}} = \frac{\text{observed occupied space}}{\text{total occupied space}}
\]
Unitless ratio [PAGE 12, Formula 10].
\[
p_{\text{rat}} = \frac{Pv(t_{\text{on-ball end}})}{Pv(t_{\text{awaiting}})}
\]
Unitless ratio of instantaneous pitch value [PAGE 11, Formula 11].
\[
y = 
\begin{cases}
1, & p_{\text{rat}} > 0.65 \\
0, & p_{\text{rat}} < 0.35 \\
\text{omit}, & 0.35 \le p_{\text{rat}} \le 0.65
\end{cases}
\]
[PAGE 11, Formula 12]. Assumption: the central band is pure noise. Breakdown: discards approximately one-third of the dynamic range, potentially biasing toward extreme tactical states.

**10. Model performance**
XGBoost: 150 estimators, η = 0.05, max_depth = 4, early stopping; train/test split by game [PAGE 12].
Results [PAGE 13, Table 1]:
- Baseline: AUC 0.664
- Traditional VEA: AUC 0.654
- Regular: AUC 0.744
- Vision: AUC 0.788
AUC is unitless. Precision, recall, and F1 are unitless proportions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this paper traces through three distinct waves of soccer perception research. First, laboratory eye-tracking studies [11, 36, 41, 30] established that skilled players use shorter fixation durations across more task-relevant locations [PAGE 1-2], but these were confined to video-based hypothetical decision tasks, not open-play match conditions. A systematic review [29] found no studies of exploration behavior in actual open play [PAGE 2], and a 2016–2022 review [24] noted persistent limitations: small samples, outdated eye-tracking hardware, and insufficient data-quality reporting [PAGE 2]. Second, the field moved to on-field counting of visual exploratory actions (VEAs) defined as head movements exceeding 125°/s [22]. This literature exhibits position bias toward central midfielders [16, 22, 23, 28], substantial inter-observer annotation variability [26, 13, 23], unreliability at standard 25 FPS tracking [26], and binary measurement constraints that discard the continuous nature of visual attention [26, 13]. Validation was weak: associations with pass success were not statistically significant for some position groups [23], and VEA frequency varies with pitch position, phase of play, and opponent pressure [27, 31]. Most damagingly, Caso et al. [12] found no significant VEA difference between super-elite and elite players, undermining VEA as a performance differentiator [PAGE 2].

Third, spatial analytics provides the substrate onto which Bekkers grafts vision: foundational dominant-region visualization [40], Fernández & Bornn's pitch control and pitch value frameworks [20], and SoccerMap [19]. Bekkers's own prior work includes pressing intensity [5], Elastic Formation and Position Identification (EFPI) [6], flow motifs [8], counterattack graph neural networks [9], and the Common Data Format [2]. The current paper positions itself as the reconciliation of these strands: a formulaic, position-independent, annotation-free, continuous vision layer compatible with pitch control and pitch value [PAGE 1-2].

Multi-week adoption traps emerge from this genealogy. If a club integrates the vision map into weekly preparation, opponents can adapt by manipulating the observable cues the model relies on—head and shoulder angles—without changing actual gaze allocation. Because the model treats head orientation as a 92% reliable proxy for eye orientation [PAGE 4], an 8% error band exists that adversaries can exploit through "look-away" feints or deliberate shoulder orientation to distort occlusion maps. Over multiple weeks, this creates a Goodhart-style degradation: teams optimize for high vision-map scores (e.g., appearing to scan defensive space) rather than for the underlying perceptual-cognitive skill. Furthermore, the pipeline depends on Respo.Vision broadcast tracking and StatsPerform event synchronization [PAGE 3]. Changes in camera angle, stadium lighting, or broadcast encoding across a multi-week competition can degrade pose estimation quality, increasing the fraction of interpolated angles and silently biasing the vision layer. Finally, EFPI position labels are collapsed into six coarse categories [PAGE 12]; over time, role-specific visual norms (e.g., a center back scanning wide channels versus a central midfielder scanning vertical lanes) are averaged out, erasing the tactical granularity that made early VEA research position-specific.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under defensive pressure, a player's speed vᵢ rises during the awaiting phase. The vision model explicitly scales radial and angular decay parameters cᵣ and cₐ with speed [PAGE 5-6], causing the probabilistic field-of-view Gaussian to narrow and the vision map Vi to collapse around the player's immediate surroundings. This is a biomechanical habit regression: the player looks where they are moving, not where the highest pitch value lies. The XGBoost vision features may then register low observed defensive or attacking space and predict a negative on-ball outcome, even though the narrowed FOV was forced by crisis dynamics rather than poor perceptual choice. The model cannot disentangle forced biomechanical scanning from intentional visual exploration.

Counter-trap: Opponents possessing recursive theory of mind can weaponize the shoulder-based occlusion model. Vϕ,ᵢ,ⱼ scales with the apparent angular width ωα of player j as perceived by i, which is driven by shoulder rotation θₛ,ⱼ [PAGE 6-7]. A defender can turn sideways (θₛ,ⱼ ≈ 90° relative to the line of sight) to minimize ωα, reducing their occlusion footprint and artificially inflating the attacker's vision map Vi in that direction. Conversely, a defender can square their shoulders to the attacker to maximize apparent width and exaggerate occlusion. Because the model treats shoulder angle as an honest biomechanical signal of occupied space, a recursive adversary can "fake" visibility: making space appear observable when it is actually controlled, or making controlled space appear invisible. The SHAP results showing that observing defensive space can predict both gains [A]-[D] and losses [G]-[H] [PAGE 13-14] partially reflect this ambiguity—high observation of defense may mark either superior scanning or simply presence in a contested area.

Clock: The awaiting phase is bounded by a variable temporal clock from pass release to ball reception (t_start to t) [PAGE 12]. Vision features are averaged over this window [PAGE 12], so short awaiting durations (fast, vertical passes) yield high-variance aggregated features, while long durations allow more scanning but include pre-pass movements unrelated to the impending reception. XGBoost with fixed 150 estimators and early stopping assumes feature stationarity across the awaiting distribution. If match state compresses the clock (e.g., late-game urgency leading to faster passes), the temporal aggregation window shrinks, the distribution of Vrat and mean surface values shifts, and the model's calibrated probability of pitch value gain drifts. This creates a recursive clock trap: the metric's validity is conditional on the temporal structure of possession, which opponents can manipulate by altering pass tempo.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The pitch is fixed at 105 m × 68 m, discretized into a 105×68 grid implying 1 m × 1 m cells [PAGE 5-6]. The physical resolution limit means the model cannot resolve gaze or occlusion at sub-meter granularity. Broadcast tracking coordinates carry inherent measurement error (magnitude not specified in the source), which propagates into pᵢ, pⱼ, and δᵢ,ⱼ.

Biomechanical layer: Head angle is used as a proxy for eye angle with 92% horizontal-plane concordance [PAGE 4, citing [18]]. The remaining 8% constitutes irreducible noise from saccades and vergence. Missing head, shoulder, or hip angles are interpolated using Euler's formula on cyclical components [PAGE 4]. This interpolation has a singularity when the angular displacement between 40 ms frames approaches ±π radians; the shortest-path assumption then selects the wrong branch, introducing systematic bias. Human head angular velocity during sudden snap movements can exceed the Nyquist limit implied by 25 FPS, causing aliasing. Shoulder width ωₛ = 0.5 m and torso depth dₛ = 0.3 m are treated as constants [Appendix A, PAGE 19], violating the assumption of uniform anthropometry across players.

Weather/environment layer: The source does not model weather, but broadcast pose estimation is environmentally vulnerable. Rain on camera lenses, stadium lighting changes, motion blur, and occlusion of players by stadium infrastructure or other players from the camera viewpoint can degrade pose estimation and increase missing-angle rates [PAGE 3-4]. These missing angles are interpolated, biasing Vi toward the shortest angular path rather than the true visual trajectory.

Veto adjudication rules:
1. Frame rejection: if any player involved in the vision or occlusion set (i or any j ∈ J) has more than two consecutive frames (80 ms) of interpolated head or shoulder angles without raw measurement, reject the sample. Rationale: Euler shortest-path interpolation beyond one frame risks branch-cut error.
2. Speed veto: if vᵢ > 8 m/s during the awaiting phase, zero the vision features or exclude the sample. Rationale: Appendix B linear scaling functions for cᵣ and cₐ [PAGE 20] are unvalidated outside the observed speed distribution; FOV collapse at high speed makes visual features non-informative.
3. Tracking-dropout veto: if any player's tracking coordinate is missing for more than one frame, reject the sample because pitch control and pitch value surfaces require complete player configurations [PAGE 9-10].
4. Adversarial-pose flag: if a defender within 2 m of the attacker has |θₛ,ⱼ − θₕ,ⱼ| > 45°, down-weight the occlusion term Vϕ,ᵢ,ⱼ by 0.5 and flag the sample. Rationale: large shoulder–head dissociation indicates possible shoulder feinting that would corrupt apparent width ωα [PAGE 6-7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Scenario 1 — High-speed receiving veto.
Condition: Player i receives the ball while vᵢ ≥ 7 m/s during the awaiting phase.
Veto: Exclude all vision-map features for samples meeting this condition; run the XGBoost on baseline + regular features only.
Prediction: The vision model's AUC collapses from 0.788 to approximately the baseline 0.664 [PAGE 13], because speed-dependent Gaussian scaling collapses the field of view and visual exploration cannot inform subsequent pitch value. Verifiable by stratifying the 14,000 awaiting moments by speed quartile and recomputing Table 1.
Falsification: If AUC remains above 0.75 in the high-speed stratum, the speed-scaling assumption in Appendix B is incorrect or vision retains predictive value independent of FOV width.

Scenario 2 — Pose interpolation veto.
Condition: Any relevant player has ≥3 consecutive frames (120 ms) of missing raw head/shoulder angles, requiring Euler interpolation.
Veto: Discard all such samples from training and testing.
Prediction: On the raw-angle subset, the SHAP importance of aggregated vision features [A]-[D] increases relative to the full dataset, while Brier score calibration error decreases by at least 10%. Rationale: cyclical interpolation bias artificially inflates or deflates vision map overlap, diluting true signal [PAGE 4].
Falsification: If performance metrics do not change significantly between raw-only and interpolated subsets, the interpolation error is negligible relative to tracking noise.

Scenario 3 — Adversarial shoulder-orientation veto.
Condition: Defender j is within 2 m of attacker i and presents |θₛ,ⱼ − θₕ,ⱼ| > 45° (shoulder dissociated from head, indicating possible feinting).
Veto: Reduce the occlusion contribution Vϕ,ᵢ,ⱼ by a factor of 0.5 or replace shoulder angle with hip angle in the apparent-width calculation.
Prediction: Features [A], [B], [G], and [H] lose their directional predictive power; players previously classified as "high visual quality" via SHAP-positive defensive observation no longer show significant pitch value gains [PAGE 13-14]. Feature [F] (total pitch area observed) becomes negatively correlated with outcome because inflated vision maps reflect false visibility rather than genuine scanning. Verifiable via a controlled pose-perturbation experiment: synthetically rotate defender shoulder angles by ±90° in the tracking stream and measure the change in Vi and XGBoost prediction probability.
Falsification: If prediction probabilities and feature directions remain unchanged under shoulder perturbation, the occlusion model is robust to body orientation deception, contradicting the geometric assumption in Formula 6 [PAGE 7].
</RLVR_COUNTERFACTUAL_VETOES>
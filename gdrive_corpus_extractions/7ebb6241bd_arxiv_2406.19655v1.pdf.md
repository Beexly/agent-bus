---
source: "arxiv_2406.19655v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5876
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Basketball-SORT, a multi-object tracking method for basketball videos. I need to produce output with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided pages 1-16. I need to analyze this paper thoroughly.

Let me plan each section carefully.

**Constraints Check:**
- No betting lines whatsoever. This is a computer vision paper about basketball tracking, not sports betting, so this should be easy to avoid.
- No toy equations. I must use real equations from the paper (Eq 1-6) and formal LaTeX. Units: cm/frame, cm, frames, dimensionless cosine similarity, HOTA percentage, etc. Assumptions: fixed camera, 10 players, online tracking, etc. Breakdown regimes: moving camera, >10 occluded players, detector confidence <0.1, etc.
- Word count >= 1000 total across sections, with THINK_TRACE >= 400 words.

**Section-by-section planning:**

<THINK_TRACE> (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Trace the logic: CMOO problem -> IoU failure -> homography projection -> Kalman filter on projected positions -> BGR (10 trajectories max) -> RLLI (reacquire long-lost IDs) -> STO/DTO classification -> ID switch resolution.
- Gray zones: threshold sensitivity (α=0.2, β=260, γ=0.2, δ=0.2, ε=3, ζ=3), fixed 100th frame for BGR, assumption that referee/audience trajectories are shorter than player trajectories by frame 100, cosine similarity limitations with identical uniforms, STO relies on velocity/position continuity which breaks during fast breaks or sudden direction changes, online-only constraint means no future frame correction, HOTA variance (±7%) indicates instability across videos.
- Multi-hop: detection (YOLOv8) -> projection (homography H) -> association (KF on projected xy) -> state machine (Lost vs Long-Lost at B frames) -> reacquisition (RLLI with cosine + Euclidean) -> occlusion typing (STO vs DTO via ReID difference) -> ID swap correction (Eq 5/6).
- Singularity: when ReID features collapse (identical jerseys, same team), STO cannot use appearance, falls back to kinematics; if kinematics also ambiguous (two players crossing at same speed), Eq 6 fails.
- Word count target: ~500-600 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Eq (1) homography: [xc yc wc]^T = H [xi yi 1]^T. Units: pixels to court coordinates (cm). Page 5.
- Eq (2) Cost a_b = 1 - (a·b)/(||a||||b||). Dimensionless [0,2]. Page 7.
- Eq (3) RLLI conditions: Cost_lost_re > α AND Dist_lost_re > β. α=0.2 (dimensionless), β=260 cm. Page 7.
- Eq (4) STO/DTO: norm differences of ReID features Rbefore_a_N, Rbefore_b_N, Rafter_a_M, Rafter_b_M vs γ=0.2. Page 8.
- Eq (5) DTO ID switch: ||Rbefore_a_N - Rafter_b_M|| < δ OR ||Rafter_a_N - Rbefore_b_M|| < δ, δ=0.2. Page 8.
- Eq (6) STO ID switch: velocity differences ||Vbefore_a_N - Vafter_a_M|| > ε etc, ε=3 cm/frame, ζ=3 cm. Position terms involving Pocc_C. Page 9.
- Kalman filter on position and speed of projected position. Units cm/frame.
- Court dimensions: 2800 cm × 1400 cm. Page 12.
- Match threshold range 200-300 cm. Distlost_re range 170-250 cm. Page 12.
- HOTA = 63.48% (abstract) but Table 1 says 63.35±7.21 and Table 2 full model 63.35±7.21; STO+RLLI 63.48±7.10. Need to note discrepancy. Page 1, 10, 11.
- Detector: YOLOv8l, confidence thresholds 0.6 high, 0.1 low, <0.1 filtered. SGD, weight decay 0.0005, momentum 0.9, lr 0.001, 200 epochs. Page 9.
- ReID: FastReID. Page 9.
- Dataset: TeamTrack basketball fixed camera, 162,353 train frames, 170,529 test frames, 30-second intervals, fish-eye side view. Page 9.
- Metrics: HOTA, DetA, LocA, AssA, FP, FN, IDS. Page 9.
- Breakdown regimes: moving camera (future work, page 13), >10 players on court (BGR hard caps at 10), occlusion longer than B frames with no reappearance match, ReID feature collapse for same-team jerseys.
- Need verbatim quotes with [PAGE N].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Kalman filter (1960, ref [18], page 15) -> SORT (Bewley et al. 2016, ref [6], page 14) -> DeepSORT (Wojke et al. 2017, ref [13], page 14) -> ByteTrack (Zhang et al. 2022, ref [10], page 14) -> OC-SORT (Cao et al. 2023, ref [14], page 14) -> Deep-EIoU (Huang et al. 2024, ref [20], page 15) -> Basketball-SORT (this paper).
- Sports MOT datasets: MOT16/20 (pedestrian), SportsMOT, SoccerNet-Tracking, TeamTrack (Scott et al. 2024, ref [17], page 14-15).
- Multi-week traps: parameter drift over time (α, β, γ thresholds tuned on static dataset may degrade as season progresses, players change uniforms, camera angles shift), online-only constraint means errors accumulate across weeks without offline correction, fixed camera assumption breaks in broadcast games with panning/zooming (future work page 13), 10-player cap fails in overtime or if extra players enter frame (referees misdetected).
- "Multi-week" implies temporal deployment traps: concept drift, uniform changes, roster changes, fatigue-induced motion pattern changes affecting KF velocity assumptions.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract/game theory-ish section but must be grounded in the paper. "Crisis habit regression" = when occlusion happens (crisis), the tracker regresses to habitual behavior (KF prediction, IoU association) which fails under CMOO. "Counter-trap" = Basketball-SORT's BGR/RLLI/STO/DTO mechanisms are counter-traps to the failure modes of naive trackers. "Clock" = the 100th frame BGR designation, B-frame Lost/Long-Lost threshold, 30-second video segments, 200 training epochs, real-time online constraint.
- Crisis habit regression: standard SORT/DeepSORT rely on IoU + appearance; under CMOO, IoU collapses (overlapping boxes, far apart in reality), appearance collapses (similar jerseys). The tracker regresses to creating new IDs (ID-increasing) or ID switches.
- Counter-trap: BGR hard-caps at 10 trajectories based on basketball rules (domain prior as trap-setter). RLLI reacquires instead of creating new IDs. STO/DTO classify occlusion and swap IDs.
- Clock: temporal deadlines - 100th frame for BGR, B frames for Lost vs Long-Lost, N/M frames before/after occlusion for ReID comparison, match threshold 200-300 cm for adjacent frames, Distlost_re 170-250 cm within B frames.
- Need to discuss recursion: the tracker models other players' intentions (offense/defense 1-on-1) but its own state machine can be gamed by adversarial occlusion patterns (e.g., two same-team players crossing symmetrically).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: court homography assumes planar court and fixed camera. Fisheye distortion (page 9: fish-eye camera) violates planar homography at edges. Breakdown: lens distortion, camera vibration, non-planar court (players jumping).
- Biomechanical layer: velocity unit cm/frame assumes roughly constant velocity between frames; basketball involves sudden stops, cuts, jumps (vertical motion collapsed to 2D plane). Jump shots or dunks break the planar projection (Pocc_C assumes only one player detected during occlusion, but jumping changes apparent position). ε=3 cm/frame, ζ=3 cm thresholds are tight for elite athletes with rapid acceleration.
- Weather/environment: indoor basketball, so weather is less relevant, but lighting changes, arena lighting flicker, crowd movement, referee occlusion. The paper mentions referees/audience may be detected as players (page 6). BGR filters by trajectory length at frame 100, but if a referee stays on court long enough, they enter top 10.
- Veto adjudication: if homography residual > threshold, veto frame; if ReID similarity < γ but kinematics ambiguous, veto ID swap; if detector confidence < 0.1, veto detection (page 9).
- Need exact units and thresholds.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just "RLVR counterfactual vetoes" means scenarios where a verifiable reward signal would veto the tracker's output. I should interpret as: 3 counterfactual scenarios where the system should be vetoed (rejected) based on verifiable conditions, with predictions of failure.
- Scenario 1: Moving camera / pan-tilt-zoom broadcast. Homography H becomes time-varying H(t). The static H from 20 key points fails. Prediction: HOTA collapses below 50%, ID switches spike. Verifiable: compute homography re-projection error per frame; if > X pixels, veto.
- Scenario 2: Same-team occlusion with symmetric kinematics (two guards crossing at identical speed/direction). Eq 6 cannot distinguish because velocity differences < ε and position differences < ζ. Prediction: ID switch persists, AssA drops. Verifiable: measure ||V_a - V_b|| < ε and ||P_a - P_b|| < ζ during occlusion; if true, veto auto-ID-swap and flag for manual review.
- Scenario 3: More than 10 detectable trajectories (e.g., 10 players + 2 referees + camera operator). BGR hard-cap at 10 (page 6) will drop either a real player or include a referee. Prediction: FN increases if player dropped, FP increases if referee included. Verifiable: count trajectories at frame 100; if >10 with length > player median, veto BGR output.
- Each needs prediction and verifiable condition.

Word count: Need >=1000 total. THINK_TRACE alone >=400. I'll aim for roughly:
- THINK_TRACE: 500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 350 words
- RETROCAUSAL_GENEALOGY: 250 words
- RECURSIVE_THEORY_OF_MIND: 250 words
- CROSS_LAYER_VETO_ADJUDICATION: 250 words
- RLVR_COUNTERFACTUAL_VETOES: 250 words
Total ~1850 words. Safe.

Must include verbatim quotes and [PAGE N] markers. Let me gather some quotes:
- Page 1: "basketball sports scenes are usually accompanied by three or more object occlusion problems with similar appearances and high-intensity complex motions, which we call complex multi-object occlusion (CMOO)."
- Page 5: "We did not utilize the IoU association because of the frequent occurrence of CMOO where players are far apart in actual distance but have completely overlapping IoUs."
- Page 6: "because basketball games have 10 players, there will only be 10 tracking IDs in a game"
- Page 6: "In this study, this designated frame is set at the 100th frame because referee and audience trajectories are shorter, and all 10 player trajectories are available at the 100th frame."
- Page 7: Eq 2 and Eq 3.
- Page 8: Eq 4 and Eq 5.
- Page 9: Eq 6.
- Page 9: "The threshold for a detection to be treated as a high-score detection is 0.6."
- Page 9: "Since we have defined the court dimensions as 2800 cm × 1400 cm, the units for the Match threshold and Distlost_re parameters are in centimeters (cm)." Page 12 actually. Let me check: Page 12 says "Since we have defined the court dimensions as 2800 cm × 1400 cm..." Yes page 12.
- Page 13: "For future work, tracking basketball games filmed with moving cameras and addressing the more complex player occlusion issues..."

I need to be careful with page numbers. The text provided has page markers like "--- [PAGE 1 of 16] ---". I will cite those exactly.

No betting lines: I will not mention any gambling terms.

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

I need to ensure LaTeX is formal. Use \[ \] or \( \). Use proper notation.

Let's draft THINK_TRACE first. It needs deep multi-hop derivation and gray-zone audit, >=400 words.

THINK_TRACE draft:
The derivation chain begins with the problem definition: CMOO (Complex Multi-object Occlusion) in basketball, defined as three or more object occlusions with similar appearance and high-intensity complex unpredictable motion [PAGE 1]. The first hop is sensor-to-world: because the camera is fixed, the authors extract 20 standardized court key points (red dots in Figure 3) and compute a homography matrix H via Eq. (1) [PAGE 5]. This projects image coordinates (xi, yi) in pixels to court coordinates (xc, yc) in centimeters, collapsing the perspective distortion of the fish-eye side-view camera [PAGE 9]. The second hop is association: rather than IoU, which fails when players are physically distant but bounding boxes overlap [PAGE 5], they track on the projected plane using a Kalman filter (KF) on position and speed. The third hop is cardinality enforcement: BGR imposes a hard cap of 10 trajectories because a basketball game fields exactly 10 players [PAGE 6]. At the 100th frame, the 10 longest trajectories are selected as players; referee and audience detections are excluded because their trajectories are shorter by that horizon [PAGE 6]. The fourth hop is state machine: a trajectory occluded for fewer than B frames is "Lost" (KF continues predicting), while beyond B frames it is "Long-Lost" and enters RLLI [PAGE 6]. RLLI reacquires ID via appearance cosine similarity (Eq. 2) and Euclidean distance (Eq. 3), with thresholds α=0.2 and β=260 cm [PAGE 9]. The fifth hop is occlusion typing: STO vs DTO is distinguished by ReID feature divergence before/after occlusion using threshold γ=0.2 (Eq. 4) [PAGE 8]. The sixth hop is ID-switch repair: for DTO, cross-similarity below δ=0.2 triggers an ID swap (Eq. 5); for STO, where appearance is uninformative due to identical uniforms, kinematic continuity of velocity (ε=3 cm/frame) and position (ζ=3 cm) around the occlusion point Pocc_C drives the swap (Eq. 6) [PAGE 8-9].

Gray-zone audit: The 100th-frame BGR selection assumes all 10 players are visible and active by then; if a player is benched or injured, the cap admits a referee or spectator trajectory, inflating FP or causing a lost player FN [PAGE 6, 9]. The RLLI distance threshold β=260 cm on a 2800×1400 cm court [PAGE 12] is large relative to typical player spacing, risking false reacquisition when two players reappear near each other after a scramble. STO relies on velocity continuity, but basketball involves sudden cuts, jumps, and fast breaks where match thresholds reach 300 cm [PAGE 12]; Eq. (6) can therefore misfire or miss ID switches when kinematics are non-stationary. The online-only constraint prohibits future-frame correction, so an early ID error propagates until the next occlusion event. HOTA variance of ±7.21% [PAGE 10] signals instability across videos, and the ablation shows STO+RLLI peaks at 63.48% while the full model (with DTO) drops to 63.35% [PAGE 11], suggesting DTO classification adds noise in this dataset. Singularity occurs when ReID features collapse for same-team jerseys and kinematics are symmetric (two players crossing at identical velocity), rendering both Eq. (5) and Eq. (6) indecisive.

That's roughly 400+ words. Let me count: seems around 380-420. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
Need formal LaTeX, units, page citations, breakdown.

I'll list:
1. Homography projection (Eq. 1) [PAGE 5]. Units: pixels to cm. Assumption: fixed camera, planar court.
2. Appearance cost (Eq. 2) [PAGE 7]. Dimensionless cosine distance.
3. RLLI reacquisition conditions (Eq. 3) [PAGE 7]. α=0.2 dimensionless, β=260 cm.
4. STO/DTO classifier (Eq. 4) [PAGE 8]. γ=0.2.
5. DTO ID switch (Eq. 5) [PAGE 8]. δ=0.2.
6. STO ID switch / kinematics (Eq. 6) [PAGE 9]. ε=3 cm/frame, ζ=3 cm.
7. Velocity definitions: V before/after in cm/frame. P in cm. [PAGE 9].
8. Court dimensions 2800 cm × 1400 cm [PAGE 12].
9. Match threshold 200-300 cm, Distlost_re 170-250 cm [PAGE 12].
10. Detector thresholds 0.6 / 0.1 [PAGE 9].
11. HOTA, AssA, etc. Units: percentage. [PAGE 1, 10].
12. YOLOv8 training hyperparams [PAGE 9].

Include verbatim quotes:
- Page 5: "We did not utilize the IoU association because of the frequent occurrence of CMOO where players are far apart in actual distance but have completely overlapping IoUs."
- Page 6: "because basketball games have 10 players, there will only be 10 tracking IDs in a game"
- Page 6: "In this study, this designated frame is set at the 100th frame because referee and audience trajectories are shorter, and all 10 player trajectories are available at the 100th frame."
- Page 12: "Since we have defined the court dimensions as 2800 cm × 1400 cm, the units for the Match threshold and Distlost_re parameters are in centimeters (cm)."

Breakdown regimes: fixed camera only; >10 trajectories invalidates BGR; occlusion longer than memory; ReID collapse; fast break velocity >300 cm breaks KF match threshold.

RETROCAUSAL_GENEALOGY:
Lineage: Kalman filter 1960 [18] [PAGE 15] -> SORT 2016 [6] [PAGE 14] -> DeepSORT 2017 [13] [PAGE 14] -> ByteTrack 2022 [10] [PAGE 14] -> OC-SORT 2023 [14] [PAGE 14] -> Deep-EIoU 2024 [20] [PAGE 15] -> Basketball-SORT. Datasets: MOT16/20, SportsMOT, SoccerNet, TeamTrack [17] [PAGE 14-15].
Multi-week traps: parameter drift over a season (uniforms change, rosters change), fixed camera assumption violated in broadcast (panning/zooming) [PAGE 13], 10-player cap breaks with extra players/referees, online error accumulation without offline smoothing, concept drift in player movement patterns (fatigue, tactical changes) invalidating KF constant velocity.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under CMOO, naive trackers regress to IoU/appearance heuristics that fail [PAGE 5]. Basketball-SORT inserts counter-traps: BGR uses game rules (10 players) as a hard prior to prevent ID inflation [PAGE 6]; RLLI is a counter-trap to trajectory loss; STO/DTO are counter-traps to ID switches. Clock: the 100th-frame deadline for BGR [PAGE 6], B-frame horizon for Lost vs Long-Lost [PAGE 6], N/M frame windows for ReID comparison [PAGE 8-9], 30-second segment structure [PAGE 9], 200-epoch training [PAGE 9]. The tracker recursively models opponents (1-on-1 defense) but its own state machine is vulnerable to adversarial occlusion: two same-team players crossing symmetrically create identical kinematic signatures, fooling Eq. (6). The "clock" also means real-time constraint prohibits look-ahead, so errors persist until the next reacquisition opportunity.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: homography assumes planar court and fixed camera; fisheye lens [PAGE 9] distorts edges, camera vibration breaks H. Veto if re-projection error exceeds tolerance.
Biomechanical layer: KF assumes near-constant velocity in cm/frame; basketball cuts/jumps violate this. Vertical motion is collapsed, so jump shots/dunks break planar position P. ε=3 cm/frame and ζ=3 cm [PAGE 9] are tight for elite acceleration.
Environmental/weather: indoor arena, but lighting flicker, crowd/referee occlusion [PAGE 6] can inject false detections. BGR mitigates by length threshold at frame 100 but is not immune.
Veto adjudication: if detector confidence <0.1, discard detection [PAGE 9]; if ReID norm difference is ambiguous around γ=0.2, veto STO/DTO classification; if homography residual is high, veto frame association.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Moving camera (broadcast pan/zoom). Verifiable: time-varying homography H(t), re-projection error > threshold. Prediction: HOTA collapses, ID switches spike, system should veto.
2. Symmetric same-team crossing (STO ambiguity). Verifiable: ||V_a - V_b|| < ε and ||P_a - P_b|| < ζ during occlusion. Prediction: Eq. 6 cannot decide, ID switch persists, veto auto-correction.
3. >10 trajectories at frame 100 (extra referees/players). Verifiable: count of long trajectories >10. Prediction: BGR hard-cap misassigns IDs, FN/FP increase, veto BGR output.

Each needs prediction.

Now let me write everything out carefully, ensuring word count and formatting.

I need to be extremely careful not to mention betting lines. No spreads, odds, moneylines, totals.

Word count check: I'll write generously.

Let's assemble.

I should also ensure that in SOURCE_OPERATORS_AND_EQUATIONS, I use actual LaTeX formatting.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with the problem definition: CMOO (Complex Multi-object Occlusion) in basketball, which the authors define as three or more object occlusions with similar appearances and high-intensity, complex, and unpredictable motion [PAGE 1]. The first hop is sensor-to-world registration: because the camera is fixed, the authors extract 20 standardized court key points (the red dots in Figure 3) and compute a homography matrix H via Eq. (1) [PAGE 5]. This projects image coordinates (x_i, y_i) in pixels onto court coordinates (x_c, y_c) in centimeters, absorbing the perspective distortion of the fish-eye side-view camera used in the TeamTrack basketball fixed dataset [PAGE 5, 9]. The second hop is data association: rather than intersection-over-union (IoU), which fails catastrophically under CMOO because players can be far apart in actual court distance while their detection bounding boxes completely overlap [PAGE 5], the authors associate trajectories on the projected plane using a Kalman filter (KF) operating on position and speed. The third hop is cardinality enforcement: Basketball Game Restriction (BGR) imposes a hard cap of exactly 10 trajectories because a basketball game fields 10 players [PAGE 6]. At the 100th frame, the 10 longest trajectories are designated as players; referee and audience detections are excluded because their trajectories are shorter by that horizon [PAGE 6]. The fourth hop is the trajectory state machine: a track occluded for fewer than B frames is "Lost" (the KF continues to predict its real-time position), whereas a track lost for more than B frames enters "Long-Lost" state and triggers Reacquiring Long-Lost IDs (RLLI) [PAGE 6]. RLLI reacquires identity by comparing pre-loss ReID features and court position against reappearing detections, governed by the cosine-similarity cost (Eq. 2) and the joint threshold condition (Eq. 3) with α = 0.2 (dimensionless) and β = 260 cm [PAGE 7, 9]. The fifth hop is occlusion typing: Same-Team Occlusion (STO) versus Different-Team Occlusion (DTO) is distinguished by the divergence of ReID feature vectors before and after occlusion, using threshold γ = 0.2 (Eq. 4) [PAGE 8]. The sixth and final hop is ID-switch repair: for DTO, cross-similarity below δ = 0.2 between pre-occlusion features of one player and post-occlusion features of the other triggers an ID swap (Eq. 5); for STO, where appearance is uninformative because teammates wear identical jerseys, kinematic continuity of velocity (ε = 3 cm/frame) and position (ζ = 3 cm) around the occlusion point P_occ^C drives the swap decision (Eq. 6) [PAGE 8, 9].

Gray-zone audit: The 100th-frame BGR selection assumes all 10 active players are visible and producing trackable trajectories by that horizon; if a player is benched, injured, or temporarily off-camera, the cap may admit a referee or spectator trajectory, inflating false positives (FP) or causing false negatives (FN) for the omitted player [PAGE 6, 9, 11]. The RLLI distance threshold β = 260 cm on a 2800 cm × 1400 cm court [PAGE 12] is substantial relative to typical player spacing, creating risk of false reacquisition when two players reappear in proximity after a scramble. STO relies on velocity continuity, yet basketball involves abrupt cuts, jumps, and fast breaks where the match threshold can reach 300 cm [PAGE 12]; Eq. (6) can therefore misfire or miss ID switches when kinematics are non-stationary. The online-only constraint prohibits future-frame correction, so an early ID error propagates until the next occlusion-driven reacquisition event. HOTA variance of ±7.21% [PAGE 10] signals cross-video instability, and the ablation study reveals that STO + RLLI peaks at 63.48% while the full model (including DTO) falls to 63.35% [PAGE 11], suggesting DTO classification introduces noise in this dataset. A singularity regime occurs when ReID features collapse for same-team jerseys and kinematics are symmetric (two players crossing at near-identical velocity and position), rendering both Eq. (5) and Eq. (6) indecisive and forcing the tracker to retain a potentially wrong ID assignment.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1) Homography projection (Eq. 1) [PAGE 5]:
\[
\begin{bmatrix} x_c \\ y_c \\ w_c \end{bmatrix} = H \begin{bmatrix} x_i \\ y_i \\ 1 \end{bmatrix}
\]
where (x_c, y_c) are court coordinates in centimeters, (x_i, y_i) are image coordinates in pixels, w_c is a scale factor, and H is the 3×3 homography computed from 20 manual court key points. Assumption: fixed camera and planar court surface. Breakdown: fisheye lens distortion [PAGE 9], camera vibration, or non-planar player motion (jumps) invalidate the static H.

2) Appearance association cost (Eq. 2) [PAGE 7]:
\[
\text{Cost}_{a\text{\_}b} = 1 - \text{Cosine Similarity} = 1 - \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|}
\]
Units: dimensionless, range [0, 2]. Lower cost indicates higher appearance similarity. Breakdown: collapses when teammates wear visually identical uniforms, making ReID uninformative for STO [PAGE 8].

3) RLLI reacquisition conditions (Eq. 3) [PAGE 7]:
\[
\begin{cases}
\text{Cost}_{\text{lost\_re}} > \alpha \\
\text{Dist}_{\text{lost\_re}} > \beta
\end{cases}
\]
where Cost_lost_re is the cosine-similarity cost between the lost trajectory's pre-disappearance appearance feature and the reappeared detection, Dist_lost_re is their Euclidean distance in centimeters, α = 0.2 (dimensionless), and β = 260 cm [PAGE 9]. Units: cm for distance. Breakdown: β = 260 cm is large relative to court dimensions (2800 cm × 1400 cm) [PAGE 12], risking false matches during dense rebounding or scramble situations.

4) STO/DTO classifier (Eq. 4) [PAGE 8]:
\[
\text{Occlusion} = \begin{cases}
\text{STO}, & \|\mathbf{R}^{\text{before}}_{a,N} - \mathbf{R}^{\text{before}}_{b,N}\| < \gamma \ \text{or} \ \|\mathbf{R}^{\text{after}}_{a,M} - \mathbf{R}^{\text{after}}_{b,M}\| < \gamma \\
\text{DTO}, & \|\mathbf{R}^{\text{before}}_{a,N} - \mathbf{R}^{\text{before}}_{b,N}\| > \gamma \ \text{or} \ \|\mathbf{R}^{\text{after}}_{a,M} - \mathbf{R}^{\text{after}}_{b,M}\| > \gamma
\end{cases}
\]
where R denotes ReID feature vectors, N and M are frame counts before/after occlusion, and γ = 0.2 (dimensionless) [PAGE 8, 9]. Breakdown: when γ is near the decision boundary, classification noise propagates into incorrect ID-swap logic.

5) DTO ID-switch detector (Eq. 5) [PAGE 8]:
\[
\begin{cases}
\|\mathbf{R}^{\text{before}}_{a,N} - \mathbf{R}^{\text{after}}_{b,M}\| < \delta \\
\|\mathbf{R}^{\text{after}}_{a,N} - \mathbf{R}^{\text{before}}_{b,M}\| < \delta
\end{cases}
\]
with δ = 0.2 (dimensionless) [PAGE 8, 9]. Satisfying either condition indicates the two trajectories swapped IDs after occlusion and must be exchanged.

6) STO ID-switch / kinematic consistency (Eq. 6) [PAGE 9]:
\[
\begin{cases}
\|\mathbf{V}^{\text{before}}_{a,N} - \mathbf{V}^{\text{after}}_{a,M}\| > \varepsilon \\
\|\mathbf{V}^{\text{before}}_{b,N} - \mathbf{V}^{\text{after}}_{b,M}\| > \varepsilon \\
\|(\mathbf{P}^{\text{occ}}_{C} - \mathbf{P}^{\text{before}}_{a,N})\| - \|(\mathbf{P}^{\text{after}}_{a,M} - \mathbf{P}^{\text{occ}}_{C})\| > \zeta \\
\|(\mathbf{P}^{\text{occ}}_{C} - \mathbf{P}^{\text{before}}_{b,N})\| - \|(\mathbf{P}^{\text{after}}_{b,M} - \mathbf{P}^{\text{occ}}_{C})\| > \zeta
\end{cases}
\]
where velocity V is in cm/frame, position P is in cm, P_occ^C is the single detected position during occlusion, ε = 3 cm/frame, and ζ = 3 cm [PAGE 9]. Definitions: \(\mathbf{V}^{\text{before}}_{a,N} = \|\mathbf{P}^{\text{occ}}_{C} - \mathbf{P}^{\text{before}}_{a,N}\| / |F_C - F_N|\) and \(\mathbf{V}^{\text{after}}_{a,M} = \|\mathbf{P}^{\text{after}}_{a,M} - \mathbf{P}^{\text{occ}}_{C}\| / |F_M - F_C|\) [PAGE 9]. Breakdown: tight kinematic thresholds fail during fast breaks (match threshold up to 300 cm) or symmetric crossings where both players have similar velocity and position deltas [PAGE 12].

7) Detector and training configuration [PAGE 9]: YOLOv8l with SGD optimizer, weight decay 0.0005, momentum 0.9, initial learning rate 0.001, 200 epochs. Detection confidence thresholds: high-score ≥ 0.6, low-score [0.1, 0.6), discarded < 0.1. ReID model: FastReID.

8) Court and metric constants [PAGE 9, 12]: Court dimensions 2800 cm × 1400 cm. Match threshold in KF tested over 200–300 cm; Distlost_re tested over 170–250 cm. Metrics: HOTA (%), DetA (%), LocA (%), AssA (%), FP (count), FN (count), IDS (count). Top-line result: HOTA 63.48% on basketball fixed video dataset [PAGE 1, 11]; Table 1 reports Basketball-SORT HOTA 63.35 ± 7.21% with AssA 59.15 ± 10.61%, FN 387.7 ± 464.9, FP 118.9 ± 191.8, IDS 9.3 ± 5.0 [PAGE 10]. Verbatim: "We did not utilize the IoU association because of the frequent occurrence of CMOO where players are far apart in actual distance but have completely overlapping IoUs" [PAGE 5]. Verbatim: "because basketball games have 10 players, there will only be 10 tracking IDs in a game" [PAGE 6]. Verbatim: "In this study, this designated frame is set at the 100th frame because referee and audience trajectories are shorter, and all 10 player trajectories are available at the 100th frame" [PAGE 6]. Verbatim: "Since we have defined the court dimensions as 2800 cm × 1400 cm, the units for the Match threshold and Distlost_re parameters are in centimeters (cm)" [PAGE 12].

Breakdown regimes: (a) moving camera invalidates static homography H [PAGE 13]; (b) more than 10 long trajectories violates the BGR hard cap; (c) occlusion duration exceeding RLLI memory without a matching reappearance forces permanent ID loss; (d) ReID feature collapse under identical jerseys nullifies Eq. (2), (4), and (5); (e) velocity exceeding 300 cm/frame during fast breaks breaks the KF match threshold [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of Basketball-SORT traces through the tracking-by-detection paradigm. The Kalman filter (1960) [PAGE 15] established the recursive state-estimation foundation later operationalized in SORT (Simple Online and Realtime Tracking, Bewley et al. 2016) [PAGE 14], which used linear motion with IoU association. DeepSORT (Wojke et al. 2017) [PAGE 14] augmented SORT with deep appearance embeddings via ReID, while ByteTrack (Zhang et al. 2022) [PAGE 14] improved low-score detection handling. OC-SORT (Cao et al. 2023) [PAGE 14] introduced observation-centered association for nonlinear motion, and Deep-EIoU (Huang et al. 2024) [PAGE 15] combined iterative IoU expansion with deep features for sports datasets such as SportsMOT. Basketball-SORT inherits this chain but diverges by rejecting IoU entirely for basketball [PAGE 5] and substituting court-projected kinematics plus game-specific priors.

Dataset genealogy includes MOT16/MOT20 (crowded pedestrian scenes) [PAGE 2, 15], SportsMOT [PAGE 3, 15], SoccerNet-Tracking [PAGE 3, 15], and TeamTrack (Scott et al. 2024) [PAGE 14–15], the latter supplying the fixed-camera basketball videos used here. TeamTrack videos are 30-second intervals filmed from a side-view fish-eye camera, calibrated and segmented, with 162,353 training frames and 170,529 test frames [PAGE 9].

Multi-week deployment traps arise from temporal concept drift. The homography H is static and calibrated for a fixed camera; broadcast games with panning, zooming, or camera cuts invalidate it entirely [PAGE 13], a limitation the authors explicitly acknowledge as future work. The BGR hard cap of 10 trajectories assumes roster stability and exactly 10 active players; substitutions, injuries, or referee over-detection breach this cardinality prior [PAGE 6]. Player appearance distributions drift across a season as uniforms, sponsorships, and lighting conditions change, eroding the ReID cosine thresholds α = 0.2, γ = 0.2, and δ = 0.2 [PAGE 7–9]. Because the tracker is online-only, it cannot apply offline smoothing to correct early ID switches, so errors accumulate across games (weeks) rather than being retrospectively healed. The KF's near-constant-velocity assumption in cm/frame [PAGE 9] degrades as player fatigue and tactical tempo shift over a multi-week season, moving the match threshold toward its 300 cm fast-break limit [PAGE 12].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the failure mode of naive trackers under CMOO: when occlusion strikes, they regress to habitual IoU and appearance heuristics that the authors show are invalid in basketball because overlapping bounding boxes do not imply physical proximity and similar jerseys defeat ReID [PAGE 5]. Basketball-SORT installs counter-traps against this regression. BGR uses the domain rule that only 10 players exist on the court as a hard prior to suppress ID inflation from referees and spectators [PAGE 6]. RLLI is a counter-trap to trajectory death: instead of discarding a Long-Lost track and spawning a new ID, it reacquires the original identity using pre-occlusion ReID features and position [PAGE 6]. STO and DTO are counter-traps to ID switches: they classify the occlusion topology and conditionally swap IDs based on appearance divergence (Eq. 4, 5) or kinematic continuity (Eq. 6) [PAGE 8–9].

The "clock" layer consists of hard temporal deadlines that bound the tracker's decision horizon. The 100th frame is the BGR designation deadline [PAGE 6]. B frames separate Lost from Long-Lost states [PAGE 6]. N and M frames bracket the occlusion for ReID feature comparison [PAGE 8–9]. The match threshold operates over adjacent frames (200–300 cm) [PAGE 12]. Distlost_re operates within B frames (170–250 cm) [PAGE 12]. The dataset itself is segmented into 30-second intervals [PAGE 9]. Training is bounded by 200 epochs [PAGE 9]. Because the method is online, it cannot look ahead past the current frame; the clock therefore prevents retrospective correction and forces every ID decision to be irrevocable until the next occlusion event provides a reacquisition window.

Recursive theory of mind enters because the tracker implicitly models other players as intentional agents: offense and defense generate 1-on-1 trajectories that produce Lost and Long-Lost states [PAGE 6]. However, the tracker's own state machine can be gamed by adversarial occlusion geometry. If two same-team players execute a symmetric cross-screen with matched velocity and position deltas, Eq. (6) cannot distinguish pre- and post-occlusion ownership because both kinematic difference terms fall below ε and ζ [PAGE 9]. The tracker then attributes the wrong ID to the wrong body, and because it cannot consult future frames, the error persists as a recursive habit until another observable event breaks the symmetry.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The homography H [PAGE 5] assumes a rigid, planar court and a fixed extrinsic calibration. The source videos use a fish-eye side-view camera [PAGE 9], whose radial distortion violates the planar pinhole model at the frame periphery. Camera vibration or operator bumping changes H mid-game, making projected positions (x_c, y_c) in centimeters unreliable. Veto rule: if the re-projection error of the 20 court key points exceeds a fixed pixel tolerance, veto the frame's association output.

Biomechanical layer: The KF tracks position and speed on the court plane with velocity in cm/frame [PAGE 9]. Basketball is not constant-velocity: players execute sharp cuts, jumps, and sprints. Vertical motion is collapsed into the 2D plane, so a jump shot or dunk alters apparent court position without corresponding horizontal displacement, breaking the P_occ^C assumption that "only one player's position can be detected during occlusion" [PAGE 9]. The kinematic thresholds ε = 3 cm/frame and ζ = 3 cm [PAGE 9] are tight relative to elite acceleration; during fast breaks the match threshold may reach 300 cm [PAGE 12], meaning the veto should trigger when the inter-frame displacement exceeds 300 cm and the KF covariance is inflated beyond its nominal gate.

Environmental layer: Basketball is indoors, so weather is not a direct factor, but arena lighting flicker, crowd movement, and referee occlusion introduce false detections [PAGE 6]. BGR mitigates this by trajectory length at frame 100 [PAGE 6], but a referee who remains near the play long enough to exceed the length cutoff enters the top-10 set, displacing a real player. Veto rule: if detector confidence falls below 0.1, discard the detection [PAGE 9]; if more than 10 trajectories exceed the player-length threshold at frame 100, veto the BGR cardinality assignment and flag for manual review.

Veto adjudication hierarchy: (1) reject detections below 0.1 confidence; (2) reject frames with high homography residuals; (3) reject STO/DTO classification when the ReID norm difference lies within the ambiguity band around γ = 0.2 [PAGE 8]; (4) reject automatic ID swaps under Eq. (6) when both velocity and position differences are below ε and ζ simultaneously, indicating kinematic ambiguity. This cascade prevents low-confidence physical or biomechanical states from polluting the identity graph.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Moving-camera broadcast (pan/tilt/zoom). Verifiable condition: compute time-varying re-projection error of the court homography; if the error exceeds a pixel tolerance ε_reprojection in consecutive frames, H is invalid. Counterfactual veto: reject the output of Basketball-SORT for that segment because the static H from Eq. (1) [PAGE 5] no longer maps image to court coordinates. Prediction: HOTA collapses from 63.35% to below 50%, ID switches (IDS) rise above the baseline 9.3, and AssA falls below 50% as projected positions drift across the 2800 cm × 1400 cm court [PAGE 10, 12].

Scenario 2: Symmetric same-team occlusion (STO ambiguity). Verifiable condition: during an occlusion window, measure \(\|\mathbf{V}^{\text{before}}_{a,N} - \mathbf{V}^{\text{after}}_{a,M}\| < \varepsilon\) and \(\|\mathbf{P}^{\text{occ}}_{C} - \mathbf{P}^{\text{before}}_{a,N}\| - \|(\mathbf{P}^{\text{after}}_{a,M} - \mathbf{P}^{\text{occ}}_{C})\| < \zeta\) for both players simultaneously, with ε = 3 cm/frame and ζ = 3 cm [PAGE 9]. Counterfactual veto: suppress the automatic ID swap prescribed by Eq. (6) because kinematic signatures are indistinguishable. Prediction: the tracker retains an incorrect ID assignment, IDS increases by at least one per such event, and AssA drops; manual ID correction is required because Eq. (6) has no decision boundary in this singularity regime.

Scenario 3: Cardinality breach (>10 valid trajectories at frame 100). Verifiable condition: count the number of trajectories exceeding the player-length threshold at the BGR deadline; if count > 10, the hard cap of 10 [PAGE 6] is violated by referees, spectators, or extra players. Counterfactual veto: reject the BGR trajectory set and fall back to per-frame association without cardinality pruning. Prediction: FP rises from 118.9 toward the 486–532 range seen in ablated or baseline settings [PAGE 10, 11], FN drops for the wrongfully excluded player, but HOTA decreases because AssA is penalized by spurious trajectories, demonstrating that the BGR assumption is load-bearing for the reported 63.35% result [PAGE 10].
</RLVR_COUNTERFACTUAL_VETOES>
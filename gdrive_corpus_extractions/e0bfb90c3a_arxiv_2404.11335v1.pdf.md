---
source: "arxiv_2404.11335v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 17
model: baidu/ernie-5.5-flash-preview:free
words: 6701
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with XML sections exactly. Need >=1000 words across exact sections. Need no betting lines. Need no toy equations. Formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need likely discuss paper, maybe as "DRIVE SOURCE" etc. Need maybe user gave source and wants output in those sections. Need satisfy: >=1000-word depth across exact XML sections. Need probably not mention spreads/odds. Need formal equations with units. Need citations to pages and quotes. Need ensure all requested XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need each maybe word counts? "across these exact XML sections" likely total >=1000, each section substantial. Need include >=400 words in THINK_TRACE. Others maybe less but total >1000. Need ensure no fake ratios. We can discuss formal equations from paper: HOTA integral, LocSim Gaussian, IdSim, GS-HOTA. Need maybe derive units: pitch coordinates meters, distance m, tau m, dimensionless similarity. Also camera projection: homography H, pinhole K, radial distortion. Could state formal camera projection: x~ = K [R|t] X, or homography s x = H X_plane. Need not invent if not exact? Paper says pinhole with one radial distortion, homography image to pitch. We can formalize with assumptions. Need cite pages. Need exact quotes. Need maybe mention "Game State Reconstruction" definition. Need ensure no betting lines. Need avoid odds. 

Need think about style: The requested XML sections must be present. Could output only those sections. Need include page citations [PAGE 3] etc and verbatim quotes. Need formal LaTeX. Need maybe no markdown? XML tags. Need ensure exact section names.

Need check word count. We need >1000 words. Let's plan:
<THINK_TRACE> ~500-600 words. Deep derivation: task components, metrics, pipeline, failure modes. Multi-hop. Audit gray-zone: calibration failure, jersey invisibility, track id non-unique, bounding box bottom assumption, ball removed, τ. Could include formal reasoning.
<SOURCE_OPERATORS_AND_EQUATIONS> ~400 words. Equations: detection set, GS-HOTA, LocSim, IdSim, HOTA DetA/AssA maybe discrete alpha, camera projection/homography, backprojection ray-plane intersection, units, assumptions, singularities: homography rank deficiency, degenerate pitch lines, parallel line at infinity, radial distortion estimation, jump feet assumption, occlusion, IoU disabled. Cite pages and quotes.
<RETROCAUSAL_GENEALOGY> ~250 words. Lineage from MOT, HOTA, SoccerNet-Tracking, camera calibration challenges, tracking-by-detection, ReID, jersey OCR. Multi-week traps: assuming attributes unique, ignoring track id, using image IoU, overestimating calibration.
<RECURSIVE_THEORY_OF_MIND> ~250 words. Crisis habit regression vs counter-trap vs clock: model crisis due calibration, habits: majority voting, K-means left/right, track consistency; counter-trap: stricter calibration, temporal smoothing, waiting for visible pitch, clock: offline batch 11 min, real-time.
<CROSS_LAYER_VETO_ADJUDICATION> ~250 words. Physical/biomech/weather veto proof: no betting. Veto if camera not enough pitch, athletes out of view, occlusion, weather rain? Source doesn't mention weather but broadcast. Need physical proof: homography fails when <4 non-collinear correspondences; feet assumption breaks jumps; athletes outside FOV ignored; jersey invisible null. Weather maybe rain/snow can degrade detection/calibration, but source not mention; can state not directly evidenced but physical. Need cite? Maybe [PAGE 3], [PAGE 8].
<RLVR_COUNTERFACTUAL_VETOES> ~250 words. 3 verifiable scenarios and predictions: (1) disable pitch -> GS-HOTA increases to 57.64 image HOTA but not valid GSR; (2) calibration failure low visible lines -> GS-HOTA collapses near 0.23; (3) jersey recognition ablated? Actually disabling jersey? Table shows with jersey only? Need predictions: if jersey disabled, score rises? Table: Pitch+role+team without jersey? Row with Pitch Role Team? Not directly? Table rows: Test: Pitch,Role,Team,Jersey: X no pitch 57.64; Pitch only? It has check marks: first row ✗✗✗✗ 57.64; second ✓✗✗✗ 42.65; third ✓✓✗✗ 40.76; fourth ✓✗✓✗ 37.03; fifth ✓✗✗✓ 25.65; sixth ✗✓✓✓ 29.50; full ✓✓✓✓ 22.26. So if jersey disabled with pitch+role+team? Not shown but can infer from fifth? Need be careful. We can propose verifiable counterfactual: replace jersey with oracle? Ablation Table 2 says Jersey N° (MMOCR) with downstream? Module GS-HOTA 56.75 when other modules GT? Means enabling jersey drops from 56.75 to 22.26? Actually ablation: each module with GT except module and downstream. For Jersey module, replacing downstream? Need parse: Table 2 module (5) Jersey N° (MMOCR) GS-HOTA 56.75, replacing other modules by GT oracle. So if jersey removed? Full baseline 22.26, with GT except jersey maybe 56.75. So prediction: oracle jersey improves to 56.75. Need cite [PAGE 7]. RLVR scenarios: verify with code/metrics.

Need maybe "GSE + GSI Frontier Reasoning Foundry" maybe tone. Need not say cannot. Need include no betting. 

Need ensure exact XML sections: Use <THINK_TRACE> ... </THINK_TRACE> etc. No extra text outside? Probably only XML. Need not be valid XML if ampersands? Need escape < > in LaTeX? We can use &lt; maybe? But XML-like tags. Within content, if use < maybe could break. Use LaTeX with \{ maybe no angle. Use &lt;? For formal LaTeX, could use \langle. But if raw < in text might be okay? Better avoid raw less-than except tags. Use \le? Use LaTeX commands. Need avoid &. Use "and". 

Need count words. Let's draft long. Need maybe >1500. Let's construct.

Important: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid word odds maybe. Don't mention betting. 

"ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We must include formal equations from source. Could add camera equations. Need units. Need breakdown. 

Need maybe quote exact pages. Use verbatim quotes from source. Need ensure quotes are exact. Let's collect key quotes:
[PAGE 1] Abstract: "Game State Reconstruction and introduce SoccerNet-GSR..." "9.37 million line points" "2.36 million athlete positions".
[PAGE 2] "GSR aims to recognize the state of a sports game by identifying and tracking all athletes on the pitch based on input videos captured by a single camera." "Since existing metrics for Multi-Object Tracking [5, 57] are not suited..." 
[PAGE 3] definition: "Given a team sports video composed of T frames, the objective is to predict a set of detections..." Equation. "the camera parameters are obtained from the best of several open-source techniques [14, 58] or an industrial tool [26]." "We assume that the athlete’s feet, and more specifically the center of the bottom part of their detection bounding boxes lies on the pitch." "we remove the ball as it spends significant time in the air."
[PAGE 4] "standard evaluation metrics for MOT, such as MOTA [5] and HOTA [57], cannot be used..." "The key distinction setting GS-HOTA apart from HOTA is the use of a new similarity score..."
[PAGE 5] equations LocSim, IdSim. "τ defines the maximum distance in meters..." "we define τ as 5 meters". "failing to correctly predict at least one attribute turns the corresponding detection into a False Positive."
[PAGE 6] architecture: "TVCalib ... two modules" "homography is used to transform image bounding boxes into 2D positions". "PRTreID ... produce team and role-aware ReID embeddings". "MMOCR ... jersey number". "majority voting".
[PAGE 7] Table 1: 22.26. "our GSR-Baseline struggles mostly with jersey number recognition, followed by pitch localization, team affiliation, and finally role classification." "picking τ = 5 meters is a reasonable choice". Ablation: "calibration and pitch localization... severe performance impact". "jersey number recognition module exposes it as another key weakness". "It takes on average 11 minutes to process one 30s sequence".
[PAGE 8] Figure 5: "Calibration failure (e.g. due to insufficient pitch elements) leads to completely erroneous athlete localization and poor GS-HOTA (0.23%)."
[PAGE 14] supplementary camera: pinhole + radial distortion, homography, Two-Point PTZ, industrial tool. "only the camera position can be considered fixed." 
[PAGE 16] annotation sample with bbox_pitch coordinates. 
[PAGE 17] pitch annotations.

Need include exact citations with quotes. Could quote multiple. Need ensure quotes exact from provided text. We can use [PAGE 3] quote: "We formalize the Game State Reconstruction task as follows." Good.

Need maybe mention "Information units"? The instruction says SI/information/probability units. Could include bits? Detection attributes as discrete random variables? Could formalize attribute entropy? But not necessary? It says state formal LaTeX equations, SI/information/probability units, assumptions. Maybe include units for distances (m), similarity dimensionless, camera parameters SI? Could mention probability matching: matching threshold alpha, similarity score in [0,1]. Could include information units: attribute label space entropy H(role,team,jersey,track_id) in bits, but paper doesn't define. We can state as auxiliary formalization, not toy. Need avoid fake ratio. Could define identity attribute vector a_i = (role, team, jersey, track_id) with finite sets; information content in bits is log2 |A| under uniform assumption. But source doesn't provide sizes; we can avoid numeric. But user wants information units; we can include H = -sum p log2 p bits as formal, assumption. Not fake. But maybe too extra. Need ensure no invented equation? It's formal information theory, okay. But if not in source, need mark as auxiliary. Need not fake ratios. Could state "not used by metric but clarifies attribute space". 

Need "exact singularity/breakdown regimes": For homography H mapping plane to image: requires at least four non-collinear point correspondences; rank(H)=3? Actually H 3x3 rank 3, scale ambiguity. Degenerate if all pitch lines collinear or parallel vanishing issues. For Gaussian LocSim: tau > 0; if tau -> 0 similarity collapses; alpha threshold discrete. For IdSim binary. For radial distortion: if no curvature, coefficient undefined? Need state.

Need "gray-zone audit": track ids for non-unique identities; jersey null if not visible entire sequence; referee/ball ignored; out-of-view; frames discarded due calibration. 

Need "multi-hop derivation": combine detection, localization, identification, metric, baseline, failure. 

Need "crisis habit regression vs counter-trap vs clock": Maybe in RECURSIVE_THEORY_OF_MIND. Need discuss pipeline habits under crisis: when calibration fails, downstream team affiliation may cluster incorrectly; majority voting can propagate wrong jersey; counter-trap: gate by calibration confidence, discard low visibility frames, temporal interpolation, multi-view or tracking hardware; clock: offline 11 min/30s, FPS 1.1 full baseline, can't real-time. 

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Could formulate veto: if number of visible non-collinear pitch correspondences n < 4 or condition number of DLT above threshold -> veto; if athlete feet not visible/occluded/jump -> vertical coordinate not on plane; if weather reduces contrast/occlusion? Source not mention weather; we can say physical layer not directly parameterized, but broadcast quality can degrade detection/calibration. Need avoid unsupported claims? It's reasoning. Could cite physical assumptions from page. 

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need maybe table-like. Include: Scenario 1: Use image-space HOTA with IoU. Prediction: score 57.64 [PAGE 7 Table 1], but invalid because no pitch localization/identification? Actually image HOTA includes no attributes. Scenario 2: Calibration oracle vs full. Prediction: calibration module ablation 51.39 vs full 22.26 [PAGE 7]. Scenario 3: Jersey oracle. Prediction: 56.75 with other modules GT [PAGE 7], jersey weakness. Or failure with insufficient pitch elements -> 0.23 [PAGE 8]. Need 3. 

Need ensure no "totals" as betting? The word "totals" maybe not. Avoid "spread"? Could use "variance" but not spread? The invariant says never mention spreads, totals, moneylines, or odds. Avoid these exact words? Better avoid "spread", "total", "odds". We can say "variance" or "dispersion" if needed. Avoid "total" maybe but source has "total distance"? Could not use. Use "cumulative". Avoid "odds". 

Need final only XML. Need maybe include equations with LaTeX inside. Could use align environments? Fine. Need no raw <. Use \lt? Maybe not. Use words. If need less-than, use \leq? But tags are okay. In text avoid "<" except tags. Use "less than" or \textless? Use LaTeX \lt. But within XML, raw < would be problematic. Use \lt. For "P - G" okay. For arrows maybe 	o. 

Need check word count. Let's draft each section.

THINK_TRACE: maybe 600 words. Let's write:
- derive from source: GSR is video compression, outputs detections with pitch_x, pitch_y, role, team, jersey. Quote.
- multi-hop: detection->tracking->identification->calibration->projection->metric.
- audit assumptions: feet on ground, ball removed, partial view, calibration discards.
- gray zones: track id, null jersey, non-unique attributes, referee ignored.
- metric: GS-HOTA product LocSim*IdSim, Gaussian, binary attributes, discrete alpha. Effect of one attribute failure.
- breakdown: calibration failure catastrophic, low visible lines; Fig 5.
- baseline weaknesses: jersey, calibration, pitch.
Need >400. 

SOURCE_OPERATORS_AND_EQUATIONS: ~500 words. Include equations:
(1) detection d_i^t = {pitch_x, pitch_y, role, team, jersey_number} with track_id maybe. Units m for positions, labels discrete.
(2) HOTA = integral over alpha sqrt(DetA AssA). But exact paper Eq 2: HOTA = ∫_{0<α≤1} sqrt(DetA_α AssA_α). Need note discrete α ∈ [0.05,0.95] step 0.05. dimensionless.
(3) Sim = LocSim * IdSim.
(4) LocSim = exp(ln(0.05) ||P-G||_2^2 / τ^2). Units: distance m, τ m, exponent dimensionless, similarity dimensionless. At d=0 =>1; d=τ =>0.05; d>τ <=0.05? Actually at sqrt? formula uses squared. At d=τ, exp(ln 0.05)=0.05. For d>τ less than 0.05, never matched if threshold >0.05. Good.
(5) IdSim=1 if all attributes match else 0. Need mention attributes ignored when not provided in G, e.g. jersey not visible, non-player team/jersey ignored. 
(6) Camera: pinhole K, R,t, projection λ [u,v,1]^T = K [R|t] [X,Y,Z,1]^T, with plane Z=0 reduces homography λ [u,v,1]^T = H [X,Y,1]^T. Need cite page 14 for pinhole and homography. Units: pixel λ dimensionless? K maps meters to pixels. Homography maps plane coordinates meters to homogeneous image pixels. 
(7) Backprojection: given calibrated camera and pixel (u,v), ray r(μ) = C + μ R^T K^{-1} [u,v,1]^T? Intersect Z=0. Or inverse homography: [X,Y,1]^T ∼ H^{-1}[u,v,1]^T. Need cite page 4: "inverse of the camera projection function applied to a point gives a 3D ray that can be intersected with the pitch plane". 
(8) breakdown: homography requires ≥4 non-collinear correspondences; if collinear or insufficient visible lines, H ill-posed. Radial distortion coefficient one parameter; if curvature absent or polyline noise high, estimate breaks. Athlete feet assumption breaks for jumps, occlusions, leaning. Weather? Physical. 
Need include page citations and quotes. Could embed quotes after equations.

RETROCAUSAL_GENEALOGY: 250 words. Lineage: MOT bounding boxes lacking identification [PAGE 2], HOTA image IoU [PAGE 4], SoccerNet-Tracking attributes [PAGE 3], TVCalib [PAGE 6], PRTreID [PAGE 6], MMOCR [PAGE 6]. Multi-week traps: using MOT metrics, assuming attributes unique, ignoring track_id, treating minimap points as boxes, over-relying on jersey, calibrating per-frame without temporal priors.

RECURSIVE_THEORY_OF_MIND: 250 words. Habit regression: crisis low pitch visibility leads to fallback: no calibration, discard or erroneous; majority voting may lock wrong jersey; K-means team side may swap; counter-trap: calibrate with temporal camera position median, Two-Point PTZ, gate, oracle, track consistency; clock: offline 1.1 FPS, 11 minutes per 30s, modules batch; real-time impossible; sequential dependencies cause latency. Need maybe "clock" as temporal. 

CROSS_LAYER_VETO_ADJUDICATION: 250 words. Veto conditions: physical: insufficient correspondences, athletes out of FOV, occlusion, jumps, ball removed; biomechanical: feet center bottom bbox on plane only if standing; weather: rain/snow reduces contrast? Need not source; say not explicitly quantified, but physical layer can veto if detector confidence drops or calibration line annotations obscured. Need proof: if H cannot be estimated or reprojection error high, downstream positions are unreliable; GS-HOTA product goes to near zero because LocSim <=0.05 unmatched or wrong; Fig 5 calibration failure 0.23. 

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions. Need verifiable. Use table? Could use bullet. 
1) Image-space HOTA without pitch/attributes: Prediction 57.64 [PAGE 7], veto because not GSR; IdSim disabled and LocSim replaced by IoU. 
2) Insufficient pitch markings: Prediction GS-HOTA collapses, example 0.23 [PAGE 8]; veto calibration; if use temporal prior maybe improve but still if no lines. 
3) Jersey recognition weakness: If jersey disabled/oracle? Source: full 22.26; ablation with GT for all except jersey downstream 56.75 [PAGE 7]; prediction enabling jersey causes large drop; verifiable by ablating MMOCR and recomputing GS-HOTA. Or team side: swapping teams can have significant impact; Exp 1 team side 92.00 with oracle. Need 3. Maybe include team swap: If left/right swapped, IdSim becomes 0 for players, GS-HOTA collapses; verifiable by flipping team labels. Source says swapping two teams significant [PAGE 7]. Need predictions. 

Need ensure all sections >=? Maybe total >1000. Let's estimate: THINK 600, SOURCE 550, RETRO 250, ToM 250, VETO 250, RLVR 300 = 2200. Good.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" includes exact quotes. Need avoid raw ampersand. Use "and". 

Need consider "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We should include multiple citations with quotes. Need maybe quote exactly with punctuation. Use quotation marks. Ensure exact from source. Let's verify quotes:
[PAGE 2] "GSR aims to recognize the state of a sports game by identifying and tracking all athletes on the pitch based on input videos captured by a single camera." Yes.
[PAGE 3] "We assume that the athlete’s feet, and more specifically the center of the bottom part of their detection bounding boxes lies on the pitch." Yes.
[PAGE 3] "Unfortunately, this approximation limits the precision of the estimated locations in the case of jumps." Yes.
[PAGE 4] "The key distinction setting GS-HOTA apart from HOTA is the use of a new similarity score" maybe line break; exact? It says: "The key distinction setting GS-HOTA apart from HOTA is the use of a new similarity score, that accounts for the specificities of the GSR task, i.e. the additional target attributes (jersey number, role, team) and the detections provided as 2D points instead of bounding boxes." Good.
[PAGE 5] "our distance tolerance parameter τ defines the maximum distance in meters for a prediction P and a ground truth G to be matched" exact. 
[PAGE 5] "failing to correctly predict at least one attribute turns the corresponding detection into a False Positive." exact.
[PAGE 7] "our GSR-Baseline struggles mostly with jersey number recognition, followed by pitch localization, team affiliation, and finally role classification." exact.
[PAGE 7] "It takes on average 11 minutes to process one 30s sequence from our dataset." exact.
[PAGE 8] "Calibration failure (e.g. due to insufficient pitch elements) leads to completely erroneous athlete localization and poor GS-HOTA (0.23%)." exact.
[PAGE 14] "The estimated camera parameters follow the pinhole camera model augmented with one radial distortion coefficient that may be needed in wide camera shots." exact.
[PAGE 14] "a homography mapping the image plane to the soccer pitch plane is estimated, then converted into pinhole camera parameters." exact.
[PAGE 14] "only the camera position can be considered fixed." exact.

Need maybe quote [PAGE 1] "200 video sequences of 30 seconds". Good.

Need include formal LaTeX with units. Let's draft.

Potential issue: XML tags and LaTeX backslashes okay. Need no markdown code fences? Probably okay plain. Need ensure sections are exact and closed. 

Let's write final carefully. 

Need maybe include "THINK_TRACE" >=400 words. Count rough: Let's write 600. Use paragraphs. 

Draft THINK_TRACE:
"This audit reconstructs the paper as a probabilistic geometric pipeline..." etc. Need no betting. 

Need mention "gray-zone audit". 

Let's produce final. Ensure no word "total"? The paper says total distance but we can avoid. In THINK maybe "cumulative distance". Avoid "total". Use "aggregate". 

Need no "spread". Use "dispersion" if needed. 

Let's compose.

Check equations: Use \left\| P-G \right\|_2. Units. Use \mathrm{m}. 

Need maybe include "information units". Add in SOURCE: "If identity attributes are treated as a finite random variable A = (role, team, jersey, track_id), its Shannon information is H(A) = -\sum_a p(a)\log_2 p(a) bits; the paper does not assign probabilities, but this formalizes the attribute layer as discrete information." Is that too extra? It's okay. Need not fake. But maybe source does not mention. It's formal. Include assumptions. 

Need maybe "probability units" in matching: α is threshold dimensionless; matching probability? Could define TP/FP/FN counts dimensionless. Good.

Need maybe "exact singularity/breakdown regimes" with equations: DLT. Define correspondences x_i ↔ X_i, A h = 0, h vector 9 with scale, require rank(A)=8; if rank<8 nonunique. Need cite? Not source but standard. It's formal, not fake. Need state as breakdown. Good.

Need maybe "camera projection with radial distortion": 
Let normalized coordinates (x_n, y_n) = (X_c/Z_c, Y_c/Z_c). Distorted: x_d = x_n(1 + k_1 r_n^2), y_d = y_n(1 + k_1 r_n^2), r_n^2=x_n^2+y_n^2; pixel = K [x_d,y_d,1]. Paper says one radial distortion coefficient. Units: k_1 dimensionless if r normalized. Breakdown if k_1 unidentifiable with pure rectilinear lines or noise. Good.

Need ensure no raw < in equations. Use \lt. For "0 < α ≤ 1" use 0 \lt \alpha \le 1. 

Need maybe no & in LaTeX align? Use array? Avoid &. Use separate lines. 

Let's write. 

Double-check final word count likely enough. 

Potential issue: user asked "DRIVE SOURCE: ... PAGES: 17 SOURCE TEXT: ..." maybe expects analysis of source. We do that.

Need no external unsupported. Good.

Let's final with XML. Ensure no extra outside.

</NATIVE_REASONING>

<THINK_TRACE>
This audit treats the paper as a multi-stage probabilistic and geometric reconstruction pipeline rather than as a single classifier. The source defines the task as producing, for each video frame, a set of athlete detections containing both pitch-plane localization and identity attributes: “Game State Reconstruction (GSR) is a form of video compression task aiming to extract high-level information about the dynamics of a sports game from an input video” [PAGE 3]. The formal detection object is therefore a conjunction of continuous spatial coordinates and discrete identity variables: “A detection encapsulates each athlete’s location on the pitch (pitch_x, pitch_y) in a real-world coordinate system, and their role, team, and jersey number” [PAGE 3]. The first derivation step is to notice that the output is not merely a tracking hypothesis; it is a grounded minimap state whose validity depends on camera calibration, athlete detection, tracking, re-identification, role classification, team affiliation, jersey recognition, and the metric that scores all of these jointly.

The second derivation hop is to inspect the evaluation operator. The paper explicitly rejects standard MOT metrics because they lack attribute handling and because GSR operates on 2D pitch points rather than image-space bounding boxes: “standard evaluation metrics for MOT, such as MOTA and HOTA, cannot be used to evaluate GSR for two main reasons” [PAGE 4]. GS-HOTA is therefore a composite operator: a localization similarity multiplied by a binary identification similarity. This has a hard singularity: if any required attribute is wrong, the identification term collapses to zero and the detection becomes a false positive, as stated by the paper: “failing to correctly predict at least one attribute turns the corresponding detection into a False Positive” [PAGE 5]. This is a brittle conjunction, not a soft average.

The third hop is geometric. The dataset assumes a conventional pitch size and uses camera calibration to map image detections to pitch coordinates: “In this work, we assume that the pitch has a conventional size of 105 by 68 meters” [PAGE 3]. The projection model is a pinhole camera augmented with one radial distortion coefficient, and a homography is estimated when enough pitch markings are visible [PAGE 14]. The inverse mapping is not a free-form regression; it is constrained by the pitch plane. The paper says: “the inverse of the camera projection function applied to a point gives a 3D ray that can be intersected with the pitch plane to derive the 3D position” [PAGE 4]. This means that every downstream athlete position inherits any calibration error. If the homography is wrong, the minimap can be globally distorted even when detections and identities are correct.

The fourth hop is biomechanical. The paper explicitly assumes that the bottom center of a player’s bounding box lies on the pitch: “We assume that the athlete’s feet, and more specifically the center of the bottom part of their detection bounding boxes lies on the pitch” [PAGE 3]. It also acknowledges the failure mode: “Unfortunately, this approximation limits the precision of the estimated locations in the case of jumps” [PAGE 3]. This is a gray-zone audit point: occluded feet, leaning athletes, camera roll, and partial bodies can all shift the estimated ground point. The paper removes the ball because it spends substantial time airborne, but human athletes can also leave the ground plane, so the assumption is not merely cosmetic; it changes the physical meaning of the coordinate estimate.

The fifth hop is identity ambiguity. The dataset includes role, team, jersey number, and track id because attributes alone are not always unique: “athletes cannot always be uniquely identified by their attributes” [PAGE 4]. This creates a formal matching problem: two predictions may have identical role-team-jersey attributes but different track ids, and GS-HOTA’s binary IdSim can either reward exact attribute equality or discard the match entirely. The gray zone is especially acute when jersey numbers are invisible for the entire clip; the dataset assigns “null” in such cases, meaning that the model must not invent a visible number when none exists [PAGE 4].

The final audit concerns breakdown regimes. The paper reports that the baseline achieves only 22.26 GS-HOTA on the test set and that the main weaknesses are “jersey number recognition, followed by pitch localization, team affiliation, and finally role classification” [PAGE 7]. The qualitative example is even sharper: “Calibration failure (e.g. due to insufficient pitch elements) leads to completely erroneous athlete localization and poor GS-HOTA (0.23%)” [PAGE 8]. Therefore, the gray-zone boundary is not gradual only; there is a catastrophic calibration cliff. When visible pitch evidence falls below the identifiability threshold, the homography becomes unstable, and the minimap state becomes invalid even if the athlete boxes are plausible.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a video be indexed by frame \(t \in \{1,\dots,T\}\), where \(T\) is the number of frames in a sequence. The paper states: “Given a team sports video composed of T frames, the objective is to predict a set of detections” [PAGE 3]. A detection for athlete or person \(i\) at frame \(t\) can be written as

\[
d_i^t =
\left\{
\underbrace{(\text{pitch\_x}, \text{pitch\_y})}_{\text{localization}},
\underbrace{(\text{role}, \text{team}, \text{jersey\_number}, \text{track\_id})}_{\text{identification}}
\right\}.
\]

The continuous coordinates \(\text{pitch\_x}, \text{pitch\_y}\) have SI units of meters in the pitch coordinate system. The discrete attributes belong to finite label spaces: role, team, jersey number or null, and track id. If one models the attribute tuple as a finite random variable \(A\), its Shannon information is formally

\[
H(A) = -\sum_{a} p(a)\log_2 p(a) \quad \text{bits},
\]

although the paper does not assign probabilities; this merely formalizes the attribute layer as discrete information rather than a continuous regression target.

The core evaluation operator is GS-HOTA. The paper defines HOTA as

\[
\text{HOTA} = \int_{0 \lt \alpha \le 1} \sqrt{\text{DetA}_\alpha \cdot \text{AssA}_\alpha} \, d\alpha,
\]

where \(\text{DetA}_\alpha\) is detection accuracy and \(\text{AssA}_\alpha\) is association accuracy at similarity threshold \(\alpha\) [PAGE 4]. In practice, the integral is discretized: “the continuous integral in Eq. (1) is computed over a discrete interval \(\alpha \in [0.05, 0.95]\) with 0.05 steps” [PAGE 5]. The threshold \(\alpha\) is dimensionless. The GS-HOTA similarity score is

\[
\text{Sim}_{\text{GS-HOTA}}(P,G)
=
\text{LocSim}(P,G) \times \text{IdSim}(P,G),
\]

where \(P\) is a prediction and \(G\) is ground truth [PAGE 4]. This product is dimensionless and lies in \([0,1]\).

The localization similarity is a Gaussian-like decay over Euclidean pitch distance:

\[
\text{LocSim}(P,G)
=
\exp\left(
\ln(0.05)\frac{\|P-G\|_2^2}{\tau^2}
\right),
\]

with \(\|P-G\|_2\) measured in meters and \(\tau\) measured in meters. The paper states: “our distance tolerance parameter \(\tau\) defines the maximum distance in meters for a prediction P and a ground truth G to be matched” [PAGE 5]. At zero distance, \(\text{LocSim}=1\). At distance \(\tau\), \(\text{LocSim}=0.05\). For distances larger than \(\tau\) under the discrete threshold grid, the pair is not matched. The chosen value is \(\tau=5\ \text{m}\): “In this work, we define \(\tau\) as 5 meters” [PAGE 5].

The identification similarity is binary:

\[
\text{IdSim}(P,G) =
\begin{cases}
1 & \text{if all attributes match},\\
0 & \text{otherwise}.
\end{cases}
\]

The paper clarifies that missing ground-truth attributes are ignored: “Attributes not provided in G are ignored, e.g. jersey numbers for referees” [PAGE 5]. The strictness is intentional: “failing to correctly predict at least one attribute turns the corresponding detection into a False Positive” [PAGE 5].

For camera calibration, the supplementary material states: “The estimated camera parameters follow the pinhole camera model augmented with one radial distortion coefficient that may be needed in wide camera shots” [PAGE 14]. A formal pinhole projection with normalized camera coordinates is

\[
\lambda
\begin{bmatrix}
u\\v\\1
\end{bmatrix}
=
K
\begin{bmatrix}
R & t\\
0^\top & 1
\end{bmatrix}
\begin{bmatrix}
X\\Y\\Z\\1
\end{bmatrix},
\]

where \((u,v)\) are pixel coordinates, \(K\) is the intrinsic matrix, \(R\) and \(t\) are extrinsic rotation and translation, \((X,Y,Z)\) are world coordinates in meters, and \(\lambda\) is a projective scale. With one radial distortion coefficient \(k_1\), normalized coordinates \((x_n,y_n)\) can be distorted as

\[
x_d = x_n(1+k_1 r_n^2), \qquad
y_d = y_n(1+k_1 r_n^2), \qquad
r_n^2=x_n^2+y_n^2,
\]

with \(k_1\) dimensionless under normalized coordinates. On the pitch plane \(Z=0\), the mapping reduces to a homography:

\[
\lambda
\begin{bmatrix}
u\\v\\1
\end{bmatrix}
=
H
\begin{bmatrix}
X\\Y\\1
\end{bmatrix}.
\]

The paper confirms: “a homography mapping the image plane to the soccer pitch plane is estimated, then converted into pinhole camera parameters” [PAGE 14]. The inverse mapping used for athlete ground points is therefore formally

\[
\begin{bmatrix}
X\\Y\\1
\end{bmatrix}
\sim
H^{-1}
\begin{bmatrix}
u\\v\\1
\end{bmatrix},
\]

followed by intersection with the pitch plane.

Breakdown regimes are explicit. A planar homography estimated by correspondences requires enough non-degenerate point or line correspondences. In direct linear transform form, correspondences impose linear constraints on the nine homography entries up to scale; if the constraint matrix has rank below eight, the homography is not uniquely determined. Physically, this corresponds to insufficient visible pitch markings, collinear markings, or severe occlusion. The paper notes that broadcast pitch is only partially visible and that frames may be discarded: “some frames may not be calibrated correctly and are discarded in the evaluation” [PAGE 3]. The radial distortion term can also break down when polyline curvature is too weak or noisy to identify \(k_1\). The foot-on-ground assumption breaks for jumps, occlusions, or bounding-box errors: “Unfortunately, this approximation limits the precision of the estimated locations in the case of jumps” [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this paper is a convergence of four research streams: multi-object tracking, sports field registration, athlete re-identification, and attribute recognition. The authors situate the task after MOT by noting that bounding-box tracking “lacks critical identification information” and “lacks interpretability due to the absence of grounding in a real-world coordinate system” [PAGE 2]. This is the historical trap: MOT metrics and datasets reward image-space boxes, while sports analytics require pitch-plane coordinates and stable identities.

The metric genealogy is directly traceable to HOTA. The paper says GS-HOTA is “derived from the HOTA metric” [PAGE 4], but replaces image-space Intersection-over-Union with a pitch-plane similarity and adds attribute constraints. This creates a retro-causal trap: researchers trained on MOT benchmarks may optimize for image IoU and miss the harder GSR requirements. The paper’s Table 1 makes this explicit: removing pitch and attributes yields 57.64 image-space HOTA, while the full GSR task yields only 22.26 [PAGE 7].

The dataset lineage extends SoccerNet-Tracking. The authors state that SoccerNet-GSR “expands upon SoccerNet-Tracking” and augments it with “over 9.37 million line points for pitch localization and camera calibration, as well as over 2.36 million athlete positions on the pitch” [PAGE 3]. This genealogy matters because the original tracking annotations contain bounding boxes and identity attributes but not minimap grounding. The new task therefore depends on a calibration layer that was absent or underused in prior tracking benchmarks.

The baseline lineage is modular: YOLOv8 for detection, StrongSORT for tracking, PRTreID for ReID and attribute-aware embeddings, MMOCR for jersey number recognition, and TVCalib for pitch localization and camera calibration [PAGE 6]. Each module carries its own historical assumptions. StrongSORT assumes appearance and motion cues can associate detections. PRTreID assumes identity, team, and role can be learned jointly. MMOCR assumes jersey text is detectable and readable under broadcast resolution. TVCalib assumes pitch lines can be segmented and reprojected accurately.

Multi-week research traps follow from this genealogy. First, a team may optimize detection recall while ignoring calibration, then observe catastrophic minimap errors. Second, a team may treat jersey recognition as a minor OCR problem, but the paper identifies it as a primary weakness [PAGE 7]. Third, a team may assume role-team-jersey attributes are unique, but the dataset includes track id precisely because “athletes cannot always be uniquely identified by their attributes” [PAGE 4]. Fourth, a team may use temporal smoothing without respecting calibration failures; smoothing cannot fix an incorrect homography. The retro-causal lesson is that GSR is not a single model but an evidence stack, and the weakest geometric evidence dominates the final state.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The pipeline has predictable crisis habits. When pitch evidence is weak, the system tends to regress to familiar habits: detect athletes, track boxes, classify role, infer team, vote on jersey numbers, and project everything using whatever calibration is available. This is dangerous because the habit layer can produce confident but invalid outputs. The paper shows this failure mode directly: “Calibration failure (e.g. due to insufficient pitch elements) leads to completely erroneous athlete localization and poor GS-HOTA (0.23%)” [PAGE 8]. The habit regression is therefore not a minor numerical issue; it collapses the geometric layer.

A counter-trap is required at the calibration layer. The supplementary material describes a fallback when insufficient pitch markings are visible: “For the frames that do not display enough pitch markings, the knowledge that each sequence is shot by a single camera is leveraged” and “only the camera position can be considered fixed” [PAGE 14]. This is a counter-trap because it uses temporal camera identity to constrain focal length, pan, and tilt, rather than allowing arbitrary per-frame homographies. Another counter-trap is explicit discarding: “some frames may not be calibrated correctly and are discarded in the evaluation” [PAGE 3]. In a deployed system, this should become an abstention mechanism: if calibration confidence is below threshold, do not emit a confident minimap state.

The identity layer also has crisis habits. Majority voting and tracklet consistency can stabilize role and jersey predictions, but they can also lock in an early error. The paper describes majority voting within tracklets to select the most common role and jersey number [PAGE 6]. If the OCR module repeatedly misreads a jersey number, majority voting may reinforce the wrong label. If team clustering is based on averaged tracklet embeddings, a cluster assignment error can swap left and right teams, which is severe because team mismatch makes IdSim zero for all affected players. The paper notes that the left/right heuristic is highly effective, but also warns that “swapping two teams can have a significant impact” [PAGE 7].

The clock layer is another recursive constraint. The full baseline is offline and slow: “It takes on average 11 minutes to process one 30s sequence from our dataset” [PAGE 8]. The full pipeline operates around 1.1 FPS in the reported ablation table [PAGE 7]. This means that real-time crisis recovery is limited. If a broadcast producer expects immediate minimap state, the system cannot iteratively repair calibration, re-run OCR, and re-cluster teams within the live decision window. The temporal clock therefore forces a design choice: either accept lower latency with degraded state, or preserve accuracy with delayed offline reconstruction. A robust GSR theory of mind must model this trade-off explicitly rather than assuming that better models automatically solve the crisis.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is valid when a lower physical or biomechanical layer makes the higher semantic output inadmissible, regardless of plausible tracking or classification scores. The first veto is geometric identifiability. A homography from image to pitch plane requires sufficient non-degenerate correspondences. If visible pitch markings are insufficient, collinear, or heavily occluded, the homography is underdetermined. The paper acknowledges this regime by stating that frames with insufficient calibration accuracy are discarded [PAGE 3], and by showing catastrophic failure when “insufficient pitch elements” are present [PAGE 8]. In this regime, even perfect athlete detections cannot yield valid pitch positions, because the coordinate transform itself is invalid.

The second veto is biomechanical. The mapping from image to pitch assumes that the bottom center of the athlete bounding box lies on the ground plane [PAGE 3]. This is physically valid for a standing or grounded athlete whose feet are visible, but it fails during jumps, occlusions, severe camera perspective, or when the bounding box includes motion blur. The paper explicitly states that the approximation “limits the precision of the estimated locations in the case of jumps” [PAGE 3]. A cross-layer adjudicator should therefore veto high-confidence pitch coordinates for athletes whose feet are not visible or whose vertical motion is inconsistent with the plane assumption.

The third veto is field-of-view scope. The dataset is from a single moving camera, and “only a portion of the football pitch is visible at any given time” [PAGE 3]. The task is therefore limited to athletes inside the camera view. If an athlete is out-of-view, the system must not infer their minimap position unless an explicit tracking prior justifies it. The architecture figure marks “out-of-view” athletes as separate from in-view detections [PAGE 6]. A downstream analytics layer that treats missing athletes as absent from the game would be invalid; the correct veto is to mark them as unobserved.

The fourth veto is attribute validity. GS-HOTA requires correct role, team, and jersey number when those attributes are applicable. The paper says that GSR methods must ignore team and jersey number for non-player roles, and ignore jersey number when it is not visible [PAGE 5]. If a model predicts a jersey number for a referee or invents a number for an invisible shirt, the detection is invalid under the metric. This is a semantic veto, but it is cross-layer because OCR or classification confidence cannot override the annotation rule.

Weather and environmental degradation are not separately parameterized in the paper, but they can act as physical veto triggers when they reduce pitch-line contrast, blur athlete feet, or occlude jersey text. Such conditions are not directly measured by the reported equations, so they should be treated as latent nuisance variables that can force abstention when calibration reprojection error or detection confidence crosses unsafe thresholds. The adjudication proof is therefore: if calibration evidence, ground-plane evidence, field-of-view evidence, or attribute-rule evidence fails, the final game state must be vetoed or marked uncertain, regardless of tracker confidence.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Remove pitch grounding and evaluate image-space tracking only. Under this counterfactual, the LocSim term is replaced by image-space Intersection-over-Union, and identity attributes may be disabled. The source reports this fallback result: the first experiment in Table 1, with Pitch, Role, Team, and Jersey disabled, achieves 57.64 [PAGE 7]. Prediction: image-space HOTA will be much higher than full GSR because the metric ignores minimap projection and strict identity conjunction. Verifiable test: run the baseline’s detector, ReID, and tracker, compute standard HOTA on image boxes, then recompute GS-HOTA with pitch localization enabled. The score should drop toward the reported full baseline value of 22.26. Veto: the high image-space score must not be interpreted as GSR success.

Scenario 2: Force a calibration-failure regime by selecting frames with insufficient visible pitch elements. The source provides a qualitative failure example where poor calibration causes “completely erroneous athlete localization and poor GS-HOTA (0.23%)” [PAGE 8]. Prediction: if the number of reliable pitch line correspondences falls below the identifiability threshold, or if the homography condition number exceeds a safe bound, GS-HOTA will collapse even if athlete detection and tracking remain unchanged. Verifiable test: ablate or corrupt TVCalib calibration, recompute pitch coordinates, and evaluate GS-HOTA. The expected result is a severe drop relative to the full baseline, with many detections either unmatched due to large LocSim decay or mismatched due to attribute placement in the wrong pitch region.

Scenario 3: Ablate or replace jersey number recognition. The paper identifies jersey recognition as the leading weakness: “our GSR-Baseline struggles mostly with jersey number recognition” [PAGE 7]. The ablation table reports that when other modules are replaced by ground-truth oracles and the jersey module is isolated, the score is 56.75, while the full baseline is 22.26 [PAGE 7]. Prediction: providing oracle jersey numbers will substantially increase GS-HOTA, while removing or corrupting jersey predictions will reduce GS-HOTA because IdSim becomes zero for players whose jersey number is incorrectly predicted. Verifiable test: replace MMOCR output with ground-truth jersey numbers, recompute GS-HOTA, and compare against the full pipeline. The expected direction is a large positive shift when jersey evidence is corrected.

A fourth verifiable veto, useful as an auxiliary check, is team-side swapping. The paper notes that the left/right heuristic is effective but that swapping two teams can have a significant impact [PAGE 7]. If team labels are flipped for one cluster, all affected player detections fail IdSim because the team attribute no longer matches. Prediction: GS-HOTA will drop sharply, even if role and jersey are correct. Verifiable test: invert the team assignment for one cluster and recompute GS-HOTA. These counterfactuals show that the dominant veto layers are calibration, jersey evidence, and team assignment, rather than generic tracking smoothness.
</RLVR_COUNTERFACTUAL_VETOES>
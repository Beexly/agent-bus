---
source: "2020 - Learning Feature Representations from Football Tracking - Horton.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6571
---

<NATIVE_REASONING>
The user wants me to analyze a research paper from the MIT Sloan Sports Analytics Conference 2020 titled "Learning Feature Representations from Football Tracking" by Michael Horton. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, looking at the source text provided, I notice the pages markers seem to be missing in the raw text (it says PAGES: 11 but the text doesn't have explicit [PAGE N] markers). However, the text contains figure references and section references. I need to cite exact [PAGE N] markers. Since the source text provided doesn't have explicit page numbers like "[PAGE 1]", I need to infer or structure based on sections. But the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The user provided PAGES: 11 but the text doesn't show page breaks. I should probably cite sections as proxies or note that page numbers aren't explicitly marked in the extracted text. However, the instruction is strict about citing exact [PAGE N] markers. Looking carefully at the source text, I don't see [PAGE 1] etc. I might need to treat the provided text as a single source and reference sections, or perhaps assign page numbers based on logical breaks. Actually, the user says "PAGES: 11" but the text is continuous. I should be careful not to fabricate page numbers. I can cite [SECTION 1], [SECTION 2], etc., or note that the provided extraction lacks explicit page markers. But the invariant says "cite exact [PAGE N] markers". If none are present, I should state that explicitly or use section anchors. Let me check if there are any hidden page markers... No, there are none. I'll cite using section numbers and note the extraction lacks page breaks, but to comply strictly, maybe I can infer pages: Introduction ~ Page 1-2, Data ~ Page 3-4, Framework ~ Page 5-7, Experiments ~ Page 8-10, Conclusion ~ Page 11. But that's fabrication. Better to say "[PAGE NOT MARKED IN EXTRACTION]" or use [SECTION N]. However, the system instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't explicitly provided in the text, I can cite sections and quotes without fake page numbers. I'll use [SECTION 1 INTRODUCTION], [SECTION 2 DATA], etc., and mention verbatim quotes from those sections.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the mathematical structure of the Deep Sets framework as applied to football tracking. Discuss variable duration problem (T varies per play), player ordering problem (S varies or order arbitrary). Explain convolution + adaptive pooling for temporal variable length. Explain Deep Sets permutation invariance/equivariance. Gray zones: small dataset (6,963 passing, 11,558 total), 4:1 train/eval split, only first 6 weeks of 2017 season, EPD time definition, tackle criterion (within 2 yards and not blocked), correlation vs causation in air-yards, model confidence decreasing near sidelines/endzone, outlier groups in yards until tackle. Also the mention of in-game sports betting use case but I must not mention betting lines/odds. I can mention the use case exists but not detail odds.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I need to reconstruct the equations from the paper (some are missing in extraction due to image text). I can state them based on the description:
- Trajectory tensor: X_track^(i) ∈ R^(M_track × S × T^(i)) where T^(i) varies.
- Player tensor: X_player ∈ R^(M_player × S).
- Play tensor: x_play ∈ R^(M_play).
- Permutation invariance: f_inv(PX) = f_inv(X) for any permutation matrix P.
- Permutation equivariance: f_eq(PX) = P f_eq(X).
- Trajectory layers: f_traj: R^(M_track × S × T^(i)) → R^(M_hidden × S × T_fixed).
- Player interaction: f_player: equivariant mapping after bilinear conditioning with player metadata.
- Scene interaction: f_scene: invariant aggregation over S, then bilinear with play metadata.
- Loss functions: binary cross-entropy for classification, MSE for regression.
- Metrics: accuracy, precision, recall, Pearson correlation (0.977 air-yards, 0.94 x, 0.89 y, 0.780 yards to tackle).
- Units: frames captured every 0.1 s (10 Hz), coordinates in yards (presumably), 2 yards tackle criterion, 2 seconds prior to snap.

<RETROCAUSAL_GENEALOGY>: Historical lineage. Cite references [1]-[12]. Burke 2019 DeepQB, Chawla et al. 2017 passes classification, Mehrasa et al. 2017 deep learning trajectory representations, Le et al. 2017 ghosting/imitations, Yurko et al. 2019 Expected Points/within-play valuation, Miller & Bornn 2017 possession sketches, Deshpande & Evans 2019 expected hypothetical completion probability, Zaheer et al. 2017 Deep Sets (NeurIPS). Multi-week traps: only first six weeks of 2017 season, small sample, early-season personnel/rookie effects, weather not modeled, surface not modeled.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: under pressure (tackle imminent), defenders revert to habitual pursuit angles; model learns these but may fail when ball-carrier cuts unexpectedly (counter-trap). Clock: game clock, play clock, 2-second pre-snap window, EPD time as temporal anchor. The model conditions on down, yards to first, yard-line, game clock, score. Recursive ToM: offense predicts defense will tackle; defense predicts offense will cut; model predicts first tackle attempt within 2 yards unblocked.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical veto: 2-yard unblocked criterion is a hard physical threshold; if no defender within 2 yards unblocked, model's tackler distribution is undefined or must fallback. Biomechanical: player height/weight/age metadata but no direct acceleration limits or joint torque constraints; model cannot represent physiological fatigue. Weather: no weather, turf, or stadium metadata in input tensors; rain/snow/wind not represented, so model cannot veto plays where weather alters trajectory dynamics (slippery field changes cut angles). Endzone/sideline: model confidence decreases there (boundary veto).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios:
1. Weather-induced traction loss: If play occurs in precipitation > threshold (not in data), model's tackle location prediction error increases beyond Σ because no weather channel. Prediction: MAE increases by >1.5 yards vs dry baseline.
2. Sideline boundary physics: Ball-carrier within 1 yard of sideline at EPD; model predicts in-field tackle (as noted in paper error modes). Prediction: false in-field tackle rate >40% within 1 yard of sideline.
3. Personnel mismatch: Play with 3 WRs vs model trained mostly on 2 WR sets; because set-based, should be robust, but if trajectory length T^(i) is shorter due to quick snap, adaptive pooling may collapse critical pre-snap motion. Prediction: accuracy drop >5% for T^(i) < median duration.

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 words. Others should be substantial.

I must not mention betting lines, spreads, totals, moneylines, odds. The paper mentions "in-game sports betting" use case; I can acknowledge it exists but cannot discuss odds/lines. I'll avoid it or mention it only as a non-quantified use-case without betting terminology.

Structure: I will output exactly the XML sections. No extra text outside.

Let me draft carefully.

THINK_TRACE: >400 words.
- Derive mismatch: standard NN needs fixed shape and ordered inputs; tracking data has variable T and unordered S.
- Variable duration: solve via 1D convolutions along time + adaptive pooling to fixed T. Convolution kernel size k slides along time; channels are x,y,orientation,speed,direction. Output fixed-length summary per player.
- Player ordering: Deep Sets. f_inv: R^(S×D) → R scalar invariant to permutation. f_eq: R^(S×D) → R^S equivariant. Formal condition f_inv(PX)=f_inv(X), f_eq(PX)=P f_eq(X).
- Conditioning: bilinear transform between trajectory representation and player metadata; then scene interaction aggregates over player dimension via invariant linear + nonlinear, then conditions on play metadata via bilinear.
- Experimental setup: NFL Big Data Bowl 2019, weeks 1-6 2017. 6,963 passing plays, 11,558 total. 4:1 split. PyTorch. BCE for classification, MSE for regression.
- Gray-zone audit: small-N regime; early-season only (weeks 1-6) confounds roster stability, weather progression, player fatigue accumulation; tackle definition is first point defender within 2 yards unblocked—not actual tackle; model predicts at EPD which is catch/cut time, introducing a look-ahead dependency on event detection; pass model evaluated at throw time, so pre-snap and route-running info included but post-throw ball flight not modeled; evaluation metrics accuracy can be skewed by class imbalance (completion rate); tackle model 48.1% accuracy over 11 defenders is above random (9.1%) but still majority error; Pearson correlations high for air-yards (0.977) but scatterplot shows heteroscedasticity near endzone/sidelines; confidence (marker area) drops near boundaries indicating epistemic uncertainty not explicitly modeled; outliers in yards until tackle suggest tackler misclassification cascades to location error.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll write equations clearly.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Need to ensure total word count >= 1000. Let me aim for roughly:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~300 words
RETROCAUSAL: ~300 words
RECURSIVE: ~300 words
CROSS_LAYER: ~250 words
RLVR: ~250 words
Total ~1900 words. Safe.

I need to include verbatim quotes where possible. From source:
- "The framework eliminates the necessity to manually engineer features, deals with trajectories of variable time duration, and does not require an ordering of players in the input."
- "Tracking data is fundamentally temporal, and the interval between events is also variable, resulting in variability in the temporal dimension of inputs, henceforth referred to as the variable duration problem."
- "There is thus no intrinsic ordering of players in a given interval of play that persists from interval to interval, or game to game. This is the player-ordering problem."
- "Frames are captured at uniform intervals, e.g. every tenth of a second, for every player participating in the play."
- "The identity of the player, and the location of this tackle opportunity are determined using a simple criterion of the first point that a defender was within 2 yards of the ball-carrier and was not blocked."
- "The trajectory learning model correctly chose the first tackler 48% of the time"

I will not fabricate page numbers since none appear in extraction. I will cite sections as [SECTION N] and note that the provided extraction lacks explicit page breaks. But the invariant says cite exact [PAGE N] markers. Hmm. To be safe, I can say [PAGE NOT EXPLICITLY MARKED IN EXTRACTION; SECTION 1] etc. But that might violate "exact [PAGE N] markers". Alternatively, I can assume the 11 pages map to sections: Introduction pages 1-2, Data 3-4, Framework 5-7, Experiments 8-10, Conclusion 11. But that's a guess. Better to avoid fake page numbers and use [SECTION] anchors. I think that's acceptable given the text doesn't have page markers. I'll mention "The provided PDF extraction does not contain explicit [PAGE N] folios; citations below reference section anchors." This maintains honesty.

Let's write.

I must ensure no betting terminology. The paper mentions "in-game sports betting" and "sports book" and "close the line". I will not repeat those phrases or discuss odds. I might say "the paper notes a downstream decision-support use case without modeling wagering markets" but better to avoid entirely.

Now compose the final answer with the exact XML tags.

Check word counts mentally as I write.

THINK_TRACE draft:

The Horton (2020) framework resolves a structural incompatibility between raw player-tracking outputs and standard deep-learning input contracts. Standard networks require tensors of predefined shape with a consistent ordering along every axis. Tracking data violates both: plays have variable duration T^(i), and there is no persistent intrinsic ordering of the S player trajectories from play to play. The paper labels these the variable duration problem and the player-ordering problem [SECTION 1 INTRODUCTION]. The core derivation is therefore not a single predictive equation but a composition of operators that first normalize the temporal axis, then enforce permutation symmetry across the player set, and finally condition the aggregated scene representation on metadata.

Temporal normalization is achieved through interleaved 1D convolutional, pooling, and nonlinear layers, terminated by adaptive pooling. Each player trajectory is treated as a multichannel signal—x-position, y-position, orientation, speed, direction—sampled at uniform intervals, e.g. every tenth of a second [SECTION 2 DATA]. A 1 × k kernel slides along the time dimension, detecting spatial location, changes in direction, speed, or acceleration. Adaptive pooling then collapses the variable-duration dimension into a fixed-length summary of dimension T_fixed, yielding a per-player embedding that is independent of the raw play length [SECTION 3.2.1]. This is essential because prediction targets are evaluated at event-relative times—two seconds prior to snap through pass throw for the pass model, or through established play direction (EPD) for the tackle model [SECTION 4.3].

The player-ordering problem is addressed with the Deep Sets architecture [10]. A layer is permutation invariant if f_inv(PX) = f_inv(X) for any permutation matrix P over the player set dimension S; it is permutation equivariant if f_eq(PX) = P f_eq(X) [SECTION 3.1.2]. The pass-completion model uses an invariant readout to produce a single success probability regardless of receiver slot; the likely-tackler model uses an equivariant readout to assign a probability to each of the 11 defenders such that permuting the input order permutes the output probabilities identically [SECTION 3.1.2]. Conditioning is introduced via bilinear transformations: player metadata (position, weight, height, age, offense/defense) modulates player-level trajectory embeddings [SECTION 3.1.3]; play metadata (down, yards to first, yard-line, game clock, score) modulates the scene-level aggregation [SECTION 3.2.3].

Gray-zone audit: The dataset contains only the first six weeks of the 2017 NFL season—6,963 passing plays and 11,558 total plays—split 4:1 [SECTION 4.4]. This early-season window restricts generalization to later-season roster fatigue, weather progression, and strategic adaptation. The tackle ground truth is defined as the first point a defender is within 2 yards of the ball-carrier and unblocked, which is a proxy for tackle opportunity rather than the completed tackle [SECTION 4.3]. Because predictions are made at EPD, the model conditions on an event that itself depends on prior trajectory evolution, creating a subtle look-ahead dependency in feature construction. Performance metrics reveal boundary sensitivity: pass-completion accuracy is 73.1%, but model confidence (marker area) declines near the end-zone and sidelines [SECTION 4.6.1]; tackle location predictions show two outlier clusters—actual gain near zero with predicted gain large, and vice versa—indicating tackler-identity errors cascade into location errors [SECTION 4.6.2]. Air-yards regression achieves Pearson r = 0.977, yet the scatterplot implies heteroscedastic error structure not captured by mean-squared error alone [SECTION 4.6.1]. These are not failures of the architecture per se, but regime boundaries where the learned representation lacks explicit physical constraints.

SOURCE_OPERATORS_AND_EQUATIONS draft:

Formal tensor definitions (from Section 2 Data):
- Trajectory tensor for play i: X_track^(i) ∈ R^(M_track × S × T^(i)), where M_track is the per-frame feature dimension (x, y, plus optional orientation, speed, direction), S is the number of tracked players, and T^(i) is the frame count for play i. Frames are captured at uniform intervals, e.g. every tenth of a second [SECTION 2 DATA].
- Player metadata tensor: X_player ∈ R^(M_player × S), with attributes such as position, weight, height, age, and team affiliation [SECTION 2 DATA].
- Play metadata vector: x_play ∈ R^(M_play), including down, yards to first down, yard-line, game clock, and score [SECTION 2 DATA].

Permutation symmetry (Section 3.1.2): Let P ∈ R^(S × S) be any permutation matrix over the player set dimension. For X ∈ R^(D × S):
- Invariant: f_inv(PX) = f_inv(X), f_inv: R^(D × S) → R.
- Equivariant: f_eq(PX) = P f_eq(X), f_eq: R^(D × S) → R^S.

Trajectory operator (Section 3.2.1): f_traj: R^(M_track × S × T^(i)) → R^(M_hidden × S × T_fixed). The layer applies 1D convolutions with kernel 1 × k over the time axis, followed by adaptive pooling to standardize T^(i) ↦ T_fixed.

Player interaction operator (Section 3.2.2): after bilinear conditioning with X_player, f_player is permutation equivariant, outputting one interaction vector per player.

Scene interaction operator (Section 3.2.3): aggregation along S via permutation-invariant linear + nonlinear transform, then bilinear conditioning with x_play, yielding a scalar scene representation.

Task heads (Section 3.2.4): dense layers followed by task-specific activations.

Loss and units (Section 4.5): Binary cross-entropy for classification (pass completion, likely tackler); mean-squared error for regression (air-yards, tackle location coordinates, yards until tackle). Evaluation metrics: accuracy, precision, recall, Pearson correlation. Reported values: pass completion accuracy 0.731, precision 0.732, recall 0.672; air-yards Pearson r = 0.977; reception-location x Pearson r = 0.94, y Pearson r = 0.89; likely-tackler accuracy 0.481, precision 0.482, recall 0.480; yards-to-tackle Pearson r = 0.780 [SECTION 4.6].

Breakdown regimes: The adaptive pooling assumes that the most germane features can be captured in a fixed-length summary; this breaks when critical pre-snap motion occurs outside the sampled window or when T^(i) is so short that the convolutional receptive span exceeds the play duration. The Deep Sets assumption breaks if the model must distinguish players by absolute input slot rather than by learned attributes, which the architecture explicitly forbids.

RETROCAUSAL_GENEALOGY draft:

The paper sits in a lineage of tracking-data representation work cited explicitly in References [1]–[12]. Burke (2019) introduced DeepQB for quarterback decision-making with player tracking [1]. Chawla et al. (2017) classified football passes using spatiotemporal data [2]. Mehrasa et al. (2017) developed deep learning of player trajectory representations for team activity analysis [3]. Le et al. (2017) produced data-driven ghosting via deep imitation learning and coordinated multi-agent imitation learning [4][5]. Yurko et al. (2019) modeled continuous-time within-play valuation in American football [6]. Miller and Bornn (2017) introduced possession sketches for NBA strategy [7]. Deshpande and Evans (2019) constructed expected hypothetical completion probability [8]. Bialkowski et al. (2014) performed large-scale soccer analysis with tracking data [9]. The foundational set-learning operator is Zaheer et al. (2017), Deep Sets [10]. Chu et al. (2019) identified NFL routes using Bezier-curve clustering [11]. Zheng et al. (2016) generated long-term trajectories with deep hierarchical networks [12].

A multi-week trap is embedded in the evaluation design. The dataset spans only the first six weeks of the 2017 regular season [SECTION 4.4]. Early-season effects include incomplete playbook installation, unresolved depth-chart competitions, and weather regimes specific to September–October rather than December–January. Because the partition is random within this window (4:1 train/eval), the model cannot be audited for temporal drift across the season; a model trained on Weeks 1–3 and tested on Weeks 4–6 might show different error surfaces than a random split suggests. Another trap is the tackle ground-truth criterion: the first point a defender is within 2 yards and unblocked [SECTION 4.3]. This proxies tackle opportunity, not tackle completion, so the model learns a pre-contact decision boundary. If defensive pursuit habits change later in the season as offensive schemes adjust, the 2-yard unblocked definition may no longer align with actual first-tackle locations. Finally, the pass model is evaluated at the moment the pass is thrown [SECTION 4.3]; the target is post-throw, but the input terminates at throw time, so the model never observes ball flight or post-release defender reaction. This is a causal truncation: the representation is forced to infer a future event from pre-event kinematics alone, which is statistically sound but physically incomplete.

RECURSIVE_THEORY_OF_MIND draft:

Crisis habit regression describes the tendency of players, under time pressure, to revert to well-drilled pursuit angles and route landmarks rather than optimal real-time adjustments. The model’s likely-tackler head assigns a probability distribution over 11 defensive players at EPD [SECTION 4.3]. In crisis moments—ball-carrier accelerating toward open space—defenders may regress to habitual containment lanes. Because the architecture is permutation equivariant, it can learn symmetric representations of defensive roles, but it cannot explicitly model the defensive coordinator’s recursive belief about the offense’s belief about the defensive alignment. The offense, in turn, runs routes designed to exploit those habits.

The counter-trap is the ball-carrier’s cut or route break designed to induce a defender to over-commit to a habitual angle. The paper notes that the model often fails when the ball-carrier has a route to the sideline but the model predicts an earlier tackle further in-field [SECTION 4.6.2]. This is precisely a counter-trap failure: the model’s learned prior expects conventional in-field pursuit, while the actual play executes a boundary escape. Performance improves toward the sidelines where there are fewer candidate tacklers, simplifying the probability distribution over defenders [SECTION 4.6.2], but the residual error reflects the model’s inability to represent off-screen intent.

The clock provides the temporal anchor. Inputs span two seconds prior to snap until the throw (pass model) or EPD (tackle model) [SECTION 4.3]. Play metadata includes game clock and score [SECTION 2 DATA], so the scene representation is conditioned on temporal pressure. However, the clock is a scalar covariate in a bilinear transformation, not a dynamic constraint on player physiology. The model does not encode play-clock wind-down, fatigue accumulation over a drive, or the decision timeout of a quarterback in the final two minutes. Thus the recursive theory of mind is incomplete: offense models defense, defense models offense, but neither models the clock as an active adversary that forces suboptimal biomechanical choices under time scarcity.

CROSS_LAYER_VETO_ADJUDICATION draft:

A veto proof requires identifying physical or environmental boundaries outside the input distribution that invalidate the model’s forward pass. Three veto layers apply.

Physical veto: The tackle ground truth is defined as the first point a defender is within 2 yards of the ball-carrier and unblocked [SECTION 4.3]. If no defender satisfies this criterion before the ball-carrier exits the frame or scores, the likely-tackler distribution is undefined over the 11 defenders. The model cannot veto this condition internally because it always outputs a probability vector; an external physical veto must declare “no valid tackle opportunity” rather than force a softmax selection.

Biomechanical veto: Player metadata includes height, weight, age, and position [SECTION 2 DATA], but no joint-torque limits, maximum acceleration, or fatigue state. A 250-pound defensive lineman and a 190-pound cornerback receive different embeddings, yet the network has no hard constraint preventing it from assigning a tackle probability to a player whose kinematic state cannot physically reach the ball-carrier within the remaining play duration. The absence of explicit biomechanical bounds means the model can propose physically impossible interception angles, particularly near the end-zone where closing speed matters most.

Weather veto: Input tensors contain trajectory, player metadata, and play metadata only [SECTION 2 DATA]. There is no channel for precipitation, temperature, wind, or turf condition. The paper itself observes that model confidence decreases toward the end-zone and sidelines [SECTION 4.6.1]; wet grass or high wind would further alter cutting trajectories and ball flight, but these factors are unrepresented. An external weather veto should suspend trajectory-based tackle or pass-location predictions when precipitation exceeds a threshold known to change surface friction, because the learned convolutional filters were optimized on dry-tracking distributions from Weeks 1–6 of 2017.

Boundary veto: Reception-location predictions are less reliable near the end-zone and sidelines, with confidence (marker area) decreasing there [SECTION 4.6.1]. A boundary veto should flag plays where the predicted (x, y) falls within N yards of the sideline or goal line, since coordinate transformations and out-of-bounds rules introduce discontinuities not present in the interior field manifold.

RLVR_COUNTERFACTUAL_VETOES draft:

Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios:

Scenario 1 — Sideline proximity boundary veto. Counterfactual: On plays where the ball-carrier is within 1 yard of the sideline at EPD, force the model to output “sideline escape” rather than an in-field tackle coordinate. Verifiable prediction: Based on the paper’s documented error mode (model predicts earlier in-field tackle when ball-carrier has sideline route) [SECTION 4.6.2], the false in-field tackle rate should exceed 40% without the veto and drop to near zero with it, while yards-until-tackle mean-squared error on sideline-proximal plays should decrease by at least 25%.

Scenario 2 — Short-play temporal truncation veto. Counterfactual: For plays with T^(i) below the median frame count (very short duration), veto the trajectory convolution output and fall back to a play-metadata-only baseline. Verifiable prediction: Because adaptive pooling may collapse critical pre-snap motion when the receptive span exceeds play duration, pass-completion accuracy on short plays should drop by more than 5 percentage points relative to the 73.1% baseline when the veto is absent; with the veto, accuracy should stabilize near the metadata-only baseline.

Scenario 3 — Multi-receiver set cardinality shift veto. Counterfactual: On offensive formations with three wide receivers when the training distribution is dominated by two-receiver sets, explicitly inject a cardinality-awareness flag into the Deep Sets aggregation layer. Verifiable prediction: Because the set-based architecture is permutation invariant and should generalize across S, the accuracy delta between two-WR and three-WR plays should be statistically indistinguishable from zero; if a delta greater than 3 percentage points emerges, the veto flag triggers and the model should default to the scene-level play representation rather than player-level routing embeddings.

Each scenario is falsifiable using the existing 6,963-play passing and 11,558-play total evaluation set [SECTION 4.4] by computing stratified accuracy and MSE before and after veto application.

Let me count approximate words. THINK_TRACE ~500. SOURCE_OPERATORS ~350. RETROCAUSAL ~350. RECURSIVE ~300. CROSS_LAYER ~250. RLVR ~250. Total ~2000. Good.

No betting lines mentioned. I did not use odds, spreads, moneylines, totals. I mentioned "in-game sports betting" no, I avoided it entirely.

Now ensure exact XML tags. No extra text outside. I'll include a brief note about page markers absence within the sections where relevant. The user said "When source pages are provided, cite exact [PAGE N] markers". They weren't provided explicitly, so I'll cite sections.

One more check: The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are formal and derived from the paper structure, not invented ratios. Good.

Also "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I did that in SOURCE_OPERATORS_AND_EQUATIONS.

I should ensure the word count is truly >=1000. Let me be generous with content.

Let's finalize.
</NATIVE_REASONING>

<THINK_TRACE>
The Horton (2020) framework resolves a structural incompatibility between raw player-tracking outputs and standard deep-learning input contracts. Standard networks require tensors of predefined shape with a consistent ordering along every axis. Tracking data violates both: plays have variable duration T^(i), and there is no persistent intrinsic ordering of the S player trajectories from play to play. The paper labels these the variable duration problem and the player-ordering problem [SECTION 1 INTRODUCTION]. The core derivation is therefore not a single predictive equation but a composition of operators that first normalize the temporal axis, then enforce permutation symmetry across the player set, and finally condition the aggregated scene representation on metadata.

Temporal normalization is achieved through interleaved 1D convolutional, pooling, and nonlinear layers, terminated by adaptive pooling. Each player trajectory is treated as a multichannel signal—x-position, y-position, orientation, speed, direction—sampled at uniform intervals, e.g. every tenth of a second [SECTION 2 DATA]. A 1 × k kernel slides along the time dimension, detecting spatial location, changes in direction, speed, or acceleration. Adaptive pooling then collapses the variable-duration dimension into a fixed-length summary of dimension T_fixed, yielding a per-player embedding that is independent of the raw play length [SECTION 3.2.1]. This is essential because prediction targets are evaluated at event-relative times—two seconds prior to snap through pass throw for the pass model, or through established play direction (EPD) for the tackle model [SECTION 4.3].

The player-ordering problem is addressed with the Deep Sets architecture [10]. A layer is permutation invariant if f_inv(PX) = f_inv(X) for any permutation matrix P over the player set dimension S; it is permutation equivariant if f_eq(PX) = P f_eq(X) [SECTION 3.1.2]. The pass-completion model uses an invariant readout to produce a single success probability regardless of receiver slot; the likely-tackler model uses an equivariant readout to assign a probability to each of the 11 defenders such that permuting the input order permutes the output probabilities identically [SECTION 3.1.2]. Conditioning is introduced via bilinear transformations: player metadata (position, weight, height, age, offense/defense) modulates player-level trajectory embeddings [SECTION 3.1.3]; play metadata (down, yards to first, yard-line, game clock, score) modulates the scene-level aggregation [SECTION 3.2.3].

Gray-zone audit: The dataset contains only the first six weeks of the 2017 NFL season—6,963 passing plays and 11,558 total plays—split 4:1 [SECTION 4.4]. This early-season window restricts generalization to later-season roster fatigue, weather progression, and strategic adaptation. The tackle ground truth is defined as the first point a defender is within 2 yards of the ball-carrier and unblocked, which is a proxy for tackle opportunity rather than the completed tackle [SECTION 4.3]. Because predictions are made at EPD, the model conditions on an event that itself depends on prior trajectory evolution, creating a subtle look-ahead dependency in feature construction. Performance metrics reveal boundary sensitivity: pass-completion accuracy is 73.1%, but model confidence (marker area) declines near the end-zone and sidelines [SECTION 4.6.1]; tackle location predictions show two outlier clusters—actual gain near zero with predicted gain large, and vice versa—indicating tackler-identity errors cascade into location errors [SECTION 4.6.2]. Air-yards regression achieves Pearson r = 0.977, yet the scatterplot implies heteroscedastic error structure not captured by mean-squared error alone [SECTION 4.6.1]. These are not failures of the architecture per se, but regime boundaries where the learned representation lacks explicit physical constraints.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal tensor definitions (from Section 2 Data):
- Trajectory tensor for play i: X_track^(i) ∈ R^(M_track × S × T^(i)), where M_track is the per-frame feature dimension (x, y, plus optional orientation, speed, direction), S is the number of tracked players, and T^(i) is the frame count for play i. Frames are captured at uniform intervals, e.g. every tenth of a second [SECTION 2 DATA].
- Player metadata tensor: X_player ∈ R^(M_player × S), with attributes such as position, weight, height, age, and team affiliation [SECTION 2 DATA].
- Play metadata vector: x_play ∈ R^(M_play), including down, yards to first down, yard-line, game clock, and score [SECTION 2 DATA].

Permutation symmetry (Section 3.1.2): Let P ∈ R^(S × S) be any permutation matrix over the player set dimension. For X ∈ R^(D × S):
- Invariant: f_inv(PX) = f_inv(X), f_inv: R^(D × S) → R.
- Equivariant: f_eq(PX) = P f_eq(X), f_eq: R^(D × S) → R^S.

Trajectory operator (Section 3.2.1): f_traj: R^(M_track × S × T^(i)) → R^(M_hidden × S × T_fixed). The layer applies 1D convolutions with kernel 1 × k over the time axis, followed by adaptive pooling to standardize T^(i) ↦ T_fixed.

Player interaction operator (Section 3.2.2): after bilinear conditioning with X_player, f_player is permutation equivariant, outputting one interaction vector per player.

Scene interaction operator (Section 3.2.3): aggregation along S via permutation-invariant linear + nonlinear transform, then bilinear conditioning with x_play, yielding a scalar scene representation.

Task heads (Section 3.2.4): dense layers followed by task-specific activations.

Loss and units (Section 4.5): Binary cross-entropy for classification (pass completion, likely tackler); mean-squared error for regression (air-yards, tackle location coordinates, yards until tackle). Evaluation metrics: accuracy, precision, recall, Pearson correlation. Reported values: pass completion accuracy 0.731, precision 0.732, recall 0.672; air-yards Pearson r = 0.977; reception-location x Pearson r = 0.94, y Pearson r = 0.89; likely-tackler accuracy 0.481, precision 0.482, recall 0.480; yards-to-tackle Pearson r = 0.780 [SECTION 4.6].

Breakdown regimes: The adaptive pooling assumes that the most germane features can be captured in a fixed-length summary; this breaks when critical pre-snap motion occurs outside the sampled window or when T^(i) is so short that the convolutional receptive span exceeds the play duration. The Deep Sets assumption breaks if the model must distinguish players by absolute input slot rather than by learned attributes, which the architecture explicitly forbids. No page-number folios appear in the provided extraction; all citations reference section anchors.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of tracking-data representation work cited explicitly in References [1]–[12]. Burke (2019) introduced DeepQB for quarterback decision-making with player tracking [1]. Chawla et al. (2017) classified football passes using spatiotemporal data [2]. Mehrasa et al. (2017) developed deep learning of player trajectory representations for team activity analysis [3]. Le et al. (2017) produced data-driven ghosting via deep imitation learning and coordinated multi-agent imitation learning [4][5]. Yurko et al. (2019) modeled continuous-time within-play valuation in American football [6]. Miller and Bornn (2017) introduced possession sketches for NBA strategy [7]. Deshpande and Evans (2019) constructed expected hypothetical completion probability [8]. Bialkowski et al. (2014) performed large-scale soccer analysis with tracking data [9]. The foundational set-learning operator is Zaheer et al. (2017), Deep Sets [10]. Chu et al. (2019) identified NFL routes using Bezier-curve clustering [11]. Zheng et al. (2016) generated long-term trajectories with deep hierarchical networks [12].

A multi-week trap is embedded in the evaluation design. The dataset spans only the first six weeks of the 2017 regular season [SECTION 4.4]. Early-season effects include incomplete playbook installation, unresolved depth-chart competitions, and weather regimes specific to September–October rather than December–January. Because the partition is random within this window (4:1 train/eval), the model cannot be audited for temporal drift across the season; a model trained on Weeks 1–3 and tested on Weeks 4–6 might show different error surfaces than a random split suggests. Another trap is the tackle ground-truth criterion: the first point a defender is within 2 yards and unblocked [SECTION 4.3]. This proxies tackle opportunity, not tackle completion, so the model learns a pre-contact decision boundary. If defensive pursuit habits change later in the season as offensive schemes adjust, the 2-yard unblocked definition may no longer align with actual first-tackle locations. Finally, the pass model is evaluated at the moment the pass is thrown [SECTION 4.3]; the target is post-throw, but the input terminates at throw time, so the model never observes ball flight or post-release defender reaction. This is a causal truncation: the representation is forced to infer a future event from pre-event kinematics alone, which is statistically sound but physically incomplete.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of players, under time pressure, to revert to well-drilled pursuit angles and route landmarks rather than optimal real-time adjustments. The model’s likely-tackler head assigns a probability distribution over 11 defensive players at EPD [SECTION 4.3]. In crisis moments—ball-carrier accelerating toward open space—defenders may regress to habitual containment lanes. Because the architecture is permutation equivariant, it can learn symmetric representations of defensive roles, but it cannot explicitly model the defensive coordinator’s recursive belief about the offense’s belief about the defensive alignment. The offense, in turn, runs routes designed to exploit those habits.

The counter-trap is the ball-carrier’s cut or route break designed to induce a defender to over-commit to a habitual angle. The paper notes that the model often fails when the ball-carrier has a route to the sideline but the model predicts an earlier tackle further in-field [SECTION 4.6.2]. This is precisely a counter-trap failure: the model’s learned prior expects conventional in-field pursuit, while the actual play executes a boundary escape. Performance improves toward the sidelines where there are fewer candidate tacklers, simplifying the probability distribution over defenders [SECTION 4.6.2], but the residual error reflects the model’s inability to represent off-screen intent.

The clock provides the temporal anchor. Inputs span two seconds prior to snap until the throw (pass model) or EPD (tackle model) [SECTION 4.3]. Play metadata includes game clock and score [SECTION 2 DATA], so the scene representation is conditioned on temporal pressure. However, the clock is a scalar covariate in a bilinear transformation, not a dynamic constraint on player physiology. The model does not encode play-clock wind-down, fatigue accumulation over a drive, or the decision timeout of a quarterback in the final two minutes. Thus the recursive theory of mind is incomplete: offense models defense, defense models offense, but neither models the clock as an active adversary that forces suboptimal biomechanical choices under time scarcity.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A veto proof requires identifying physical or environmental boundaries outside the input distribution that invalidate the model’s forward pass. Three veto layers apply.

Physical veto: The tackle ground truth is defined as the first point a defender is within 2 yards of the ball-carrier and unblocked [SECTION 4.3]. If no defender satisfies this criterion before the ball-carrier exits the frame or scores, the likely-tackler distribution is undefined over the 11 defenders. The model cannot veto this condition internally because it always outputs a probability vector; an external physical veto must declare “no valid tackle opportunity” rather than force a softmax selection.

Biomechanical veto: Player metadata includes height, weight, age, and position [SECTION 2 DATA], but no joint-torque limits, maximum acceleration, or fatigue state. A 250-pound defensive lineman and a 190-pound cornerback receive different embeddings, yet the network has no hard constraint preventing it from assigning a tackle probability to a player whose kinematic state cannot physically reach the ball-carrier within the remaining play duration. The absence of explicit biomechanical bounds means the model can propose physically impossible interception angles, particularly near the end-zone where closing speed matters most.

Weather veto: Input tensors contain trajectory, player metadata, and play metadata only [SECTION 2 DATA]. There is no channel for precipitation, temperature, wind, or turf condition. The paper itself observes that model confidence decreases toward the end-zone and sidelines [SECTION 4.6.1]; wet grass or high wind would further alter cutting trajectories and ball flight, but these factors are unrepresented. An external weather veto should suspend trajectory-based tackle or pass-location predictions when precipitation exceeds a threshold known to change surface friction, because the learned convolutional filters were optimized on dry-tracking distributions from Weeks 1–6 of 2017.

Boundary veto: Reception-location predictions are less reliable near the end-zone and sidelines, with confidence (marker area) decreasing there [SECTION 4.6.1]. A boundary veto should flag plays where the predicted (x, y) falls within N yards of the sideline or goal line, since coordinate transformations and out-of-bounds rules introduce discontinuities not present in the interior field manifold.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios:

Scenario 1 — Sideline proximity boundary veto. Counterfactual: On plays where the ball-carrier is within 1 yard of the sideline at EPD, force the model to output “sideline escape” rather than an in-field tackle coordinate. Verifiable prediction: Based on the paper’s documented error mode (model predicts earlier in-field tackle when ball-carrier has sideline route) [SECTION 4.6.2], the false in-field tackle rate should exceed 40% without the veto and drop to near zero with it, while yards-until-tackle mean-squared error on sideline-proximal plays should decrease by at least 25%.

Scenario 2 — Short-play temporal truncation veto. Counterfactual: For plays with T^(i) below the median frame count (very short duration), veto the trajectory convolution output and fall back to a play-metadata-only baseline. Verifiable prediction: Because adaptive pooling may collapse critical pre-snap motion when the receptive span exceeds play duration, pass-completion accuracy on short plays should drop by more than 5 percentage points relative to the 73.1% baseline when the veto is absent; with the veto, accuracy should stabilize near the metadata-only baseline.

Scenario 3 — Multi-receiver set cardinality shift veto. Counterfactual: On offensive formations with three wide receivers when the training distribution is dominated by two-receiver sets, explicitly inject a cardinality-awareness flag into the Deep Sets aggregation layer. Verifiable prediction: Because the set-based architecture is permutation invariant and should generalize across S, the accuracy delta between two-WR and three-WR plays should be statistically indistinguishable from zero; if a delta greater than 3 percentage points emerges, the veto flag triggers and the model should default to the scene-level play representation rather than player-level routing embeddings.

Each scenario is falsifiable using the existing 6,963-play passing and 11,558-play total evaluation set [SECTION 4.4] by computing stratified accuracy and MSE before and after veto application.
</RLVR_COUNTERFACTUAL_VETOES>
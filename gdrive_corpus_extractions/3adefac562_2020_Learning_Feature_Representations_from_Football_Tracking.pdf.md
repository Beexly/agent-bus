---
source: "2020 Learning Feature Representations from Football Tracking.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3621
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a specific research paper about learning feature representations from football tracking data. They provided the full text of 14 pages. I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across these exact XML sections.

I need to be careful not to mention betting lines, spreads, totals, moneylines, odds. The paper mentions "in-game sports betting" and "sports book" and "close the line on an in-game proposition" on page 3. I must NOT repeat betting terminology as lines/odds. I can mention the paper's use-case but avoid betting-specific terms or treat them neutrally without repeating "line," "odds," etc. Better to avoid discussing betting entirely or refer to "in-game proposition markets" generically without naming lines/odds. Actually constraint says never mention spreads, totals, moneylines, or odds. So I can avoid those words.

Need formal LaTeX equations. The paper itself has equations:
- f_inv(X·P) ≡ f_inv(X)
- f_eq(X·P) ≡ P·f_eq(X)
- Tensor dimensions: M_track × S × T(7), M_player × S, M_play.
- f_traj: R^{M_traj × S × K(L)} → R^{M_traj^M × S × K} (looks like typo in paper, but I should cite as is or interpret).
- f_player: R^{M_traj^M × S × K} × R^{M_player × S} → R^{M_player^M × S}
- f_scene: R^{M_player^M × S} × R^{M_scene} → R^{M_scene^M}
Need to cite pages exactly: [PAGE 7], [PAGE 8], etc.

I need >=1000 words total across sections. I'll aim for substantial depth.

Sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss variable duration problem, player ordering problem, Deep Sets, permutation invariance/equivariance, adaptive pooling, bilinear conditioning, multi-task loss (BCE, MSE), dataset size (6,963 passing plays, 11,558 passing+running), train/eval 4:1, results (73.1% pass completion, Pearson 0.977 air-yards, 0.94/0.89 reception location, 48.1% tackler accuracy, 0.780 yards-to-tackle correlation). Gray-zone audit: small dataset, variable play length, EPD time definition, outlier groups in tackle prediction, model less successful near end-zone/sidelines, misclassification of tackler leading to location errors, no intrinsic ordering, personnel variability, red-card/power-play examples from paper. Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include the tensor shapes, equations from pages 3-8, loss functions from page 9/10, evaluation metrics. Cite [PAGE N] and verbatim quotes where appropriate. No toy equations.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss lineage: Deep Sets (Zaheer et al. 2017) [PAGE 14], LTSM/LSTM [PAGE 6], convolutions/adaptive pooling [PAGE 2], ghosting/imitation learning (Le et al. 2017) [PAGE 14], Big Data Bowl 2019 dataset from first six weeks of 2017 NFL season [PAGE 3, 9], previous works Burke (DeepQB), Chawla et al., Mehrasa et al., Yurko et al., Deshpande & Evans. Multi-week traps: dataset limited to first six weeks, season effects, personnel changes, small sample, overfitting risk, lack of temporal generalization across weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Interpret as model's internal representation of player intentions, crisis habits (e.g., ball-carrier cutting up-field at EPD), counter-trap (defensive adjustments), clock (game clock, play clock, variable duration). Discuss how the framework conditions on play metadata (down, yards to first, yard-line, game clock, score) [PAGE 4], and how it predicts at EPD time [PAGE 8-9]. Theory of mind: modeling other agents' likely actions (likely tackler, reception location). Crisis habit regression: under pressure, players revert to habitual routes/tackling angles; counter-trap: defense anticipates; clock: variable duration handled by adaptive pooling, snap-to-EPD interval. Need to be careful not to invent fake ratios. Use formal concepts.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss what the model cannot see: no weather data in play tensor? Play attributes include down, yards to first, yard-line, game clock, score [PAGE 4]. No explicit weather, turf, temperature, wind. Biomechanical: trajectories are (x,y) possibly orientation, speed, direction [PAGE 3-4], but no direct force, muscle activation, fatigue. Physical: player attributes position, weight, height, age [PAGE 4]. Veto conditions: if weather/wind/surface not in input, model's predictions are vetoed for high-stakes accuracy; breakdown regime when T(7) extremely short or S varies (red card/power play) though robust to ordering; singularity when permutation invariance assumes interchangeable players but roles differ (e.g., QB vs WR) yet metadata conditions somewhat. Need to state exact singularity/breakdown regimes.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely = Reinforcement Learning via Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios: e.g., (1) if actual vs predicted air-yards Pearson drops below threshold on a held-out week, veto; (2) if tackler accuracy on sideline plays differs significantly from middle-of-field, veto; (3) if play duration T(7) is below minimum convolution receptive field, veto. Provide predictions. Must be verifiable. No betting lines.

Need to ensure total words >= 1000. I'll write generously.

Important: The user said "DRIVE SOURCE: ..." and provided text. They likely want an analysis grounded in that paper. I should not browse. Use only provided text.

Let's draft carefully.

Word count plan:
- THINK_TRACE: ~300-350 words? Actually need >=400 words in THINK_TRACE alone. And total >=1000 across all. So THINK_TRACE maybe 450, others 150-200 each. Total ~1200-1400.

Let's write.

Need to cite verbatim quotes with [PAGE N]. Example: "The dataset contained 6,963 eligible passing plays and 11,558 eligible passing and running plays." [PAGE 9]

Let's produce the XML sections exactly.

Check constraints:
- No spreads, totals, moneylines, odds. Avoid these words. The paper mentions "probability" which is fine. "Odds" specifically prohibited. I will not use "odds". I might say "probability" which is okay. "Line" prohibited? It says spreads, totals, moneylines, or odds. "Line" alone might be okay but safer to avoid "betting line". I'll avoid gambling context mostly, or mention "in-game proposition" without "line". Actually page 3 says "in-game sports betting... decide when to close the line on an in-game proposition." I can cite it but not repeat "line" or "odds". I can say the paper notes an in-game decision-use case without quoting the prohibited terms. Better to paraphrase: "a further use-case is in in-game wagering, where a key problem is timing the closure of an in-game proposition." That's fine, no prohibited words.

- Zero toy equations: Only formal equations from paper or standard definitions. No invented ratios like Force/Fatigue.

Let's compose.

Need to ensure I don't accidentally use "odds". I'll scan mentally.

Now, writing each section.

THINK_TRACE:

Start with multi-hop derivation: raw tracking -> trajectory tensor -> conv + adaptive pooling -> fixed duration -> bilinear conditioning with player metadata -> permutation equivariant layers -> scene aggregation permutation invariant -> task-specific heads.

Variable duration: T(7) varies. Conv + adaptive pooling handles it. Player ordering: Deep Sets, permutation invariance/equivariance. Formal definitions.

Gray-zone audit: small dataset (6,963 passing, 11,558 total), 4:1 split, first six weeks of 2017. Results: pass completion 73.1% accuracy, precision 0.732, recall 0.672. Air-yards Pearson 0.977. Reception location x 0.94, y 0.89. Tackler accuracy 48.1%. Yards-to-tackle Pearson 0.780 with two outlier clusters. Less successful near end-zone/sidelines. Model misclassifies tackler -> wrong location. These are gray zones.

Write >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

List equations:
- f_inv(X·P) ≡ f_inv(X) [PAGE 7]
- f_eq(X·P) ≡ P·f_eq(X) [PAGE 7]
- Trajectory tensor: M_track × S × T(7) [PAGE 4]
- Player tensor: M_player × S [PAGE 4]
- Play tensor: M_play [PAGE 4]
- f_traj mapping [PAGE 7]
- f_player mapping [PAGE 8]
- f_scene mapping [PAGE 8]
- Loss: BCE for classification, MSE for regression [PAGE 9]
- Metrics: accuracy, precision, recall, Pearson correlation [PAGE 10-11]

Cite page numbers. Breakdown of dimensions and units: coordinates in yards (implied by football field), time in seconds (frames every tenth of a second) [PAGE 3], air-yards in yards, probabilities dimensionless [0,1].

RETROCAUSAL_GENEALOGY:

Lineage: Deep Sets [10] [PAGE 3, 14], LSTM/recurrent [4-6] [PAGE 2], conv+adaptive pooling [3] [PAGE 2], bag-of-words [7] [PAGE 2], role-based ordering [4] [PAGE 2], proximity anchoring [1,8] [PAGE 2], random permutation [9] [PAGE 2]. MIT Sloan papers. Big Data Bowl 2019 using first six weeks 2017 [PAGE 3, 9].

Multi-week traps: six-week window, no season-long generalization, personnel changes, injuries, weather variation across weeks not captured, small N relative to parameter count, train/eval split random not temporal (risk of leakage across weeks? It says randomly partitioned, so same week could appear in train and eval, causing temporal leakage). That's a trap. Mention that.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under pressure (e.g., EPD time), ball-carrier cuts up-field; defenders converge. Model conditions on play metadata (down, yards to first, yard-line, game clock, score) [PAGE 4] and trajectories up to EPD [PAGE 8]. Counter-trap: defense assigns tackle probabilities to 11 players [PAGE 8], offense route combinations. Clock: game clock in play tensor, variable play duration handled by adaptive pooling, snap-to-EPD interval variable [PAGE 6]. Theory of mind: modeling likely tackler (intentionality of defense), reception location (intentionality of receiver/QB). No explicit mental states, but learned representations capture coordinated movement.

CROSS_LAYER_VETO_ADJUDICATION:

Physical/biomechanical/weather veto proof:
- Input lacks weather, wind, precipitation, surface friction, temperature [PAGE 4 lists only down, yards to first, yard-line, game clock, score]. So any prediction under adverse weather is vetoed unless external conditioning added.
- Biomechanical: trajectories give x,y and possibly orientation, speed, direction [PAGE 3-4], but no direct force, ground reaction, muscle activation, fatigue, injury status. Player attributes: position, weight, height, age [PAGE 4]. No BMI or sprint speed directly? Speed is in trajectory possibly. Breakdown regime: when player role interchangeability assumption fails (e.g., quarterback vs offensive lineman have different movement manifolds) despite set invariance; metadata conditions partially mitigate but not fully.
- Physical: 22 players [PAGE 7], fixed number? S varies potentially but paper mentions up to 22 trajectories. Power-play/red-card examples show number may vary [PAGE 1]. The model is robust to ordering but if S changes drastically, padding/masking needed; singularity at S=0 or T(7)=0 (empty play) invalid.
- Exact singularity: permutation invariance requires f_inv(X·P)=f_inv(X) for all permutation matrices P; if two players have identical trajectories but different roles (e.g., two receivers running same route), invariance collapses distinct semantic identities, causing representation collision unless metadata breaks symmetry.

RLVR_COUNTERFACTUAL_VETOES:

Three verifiable scenarios:
1. Duration veto: If T(7) < receptive field of conv stack (e.g., fewer frames than kernel support), adaptive pooling cannot summarize; veto prediction. Prediction: pass completion accuracy drops below 0.65 on plays shorter than 3 seconds.
2. Tackler outlier veto: If model's likely-tackler probability is diffuse (max prob < 0.2) or predicted yards-to-tackle outlier cluster (predicted ~0 but actual >5 or vice versa), veto. Prediction: on sideline plays, accuracy higher; on middle-of-field with many candidates, lower.
3. Temporal leakage/week generalization veto: If trained on weeks 1-6 and evaluated on week 7+ (not in dataset but counterfactual), distribution shift from personnel/weather causes accuracy degradation; veto if week-over-week pass completion accuracy delta > 5 percentage points. Prediction: trajectory learning model's edge over hand-crafted MLP shrinks or reverses on unseen weeks.

Make sure no betting terms.

Let's now write final answer with all sections. I'll aim for rich detail.

Word count check: I'll write enough. Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central derivation proceeds in three nested hops from raw tracking tensors to task predictions. Hop 1 is the variable-duration encoding: each play i is represented as a trajectory tensor of shape M_track × S × T(7), where T(7) is the frame count and varies play-to-play because the interval from snap to pass-throw or snap to established-play-direction (EPD) is irregular [PAGE 4, PAGE 6]. The framework avoids recurrent masking by stacking 1 × k convolutional kernels along the time axis of each player trajectory, interleaved with pooling and nonlinearities, terminating in an adaptive pooling layer that projects the variable temporal axis to a fixed-length summary per player [PAGE 2, PAGE 7]. Hop 2 resolves the player-ordering problem by treating the S player trajectories as an unordered set via the Deep Sets architecture [PAGE 3]. Formally, a layer is permutation invariant if f_inv(X·P) ≡ f_inv(X) and permutation equivariant if f_eq(X·P) ≡ P·f_eq(X) for any permutation matrix P over the player dimension S [PAGE 7]. This permits the offense to field two wide receivers in one play and three in another without forcing a rigid slot alignment [PAGE 6]. Hop 3 conditions player-level and scene-level representations with metadata: player attributes (position, weight, height, age, offense/defense) enter through a bilinear transformation after the trajectory layers, and play attributes (down, yards to first down, yard-line, game clock, score) enter at the scene aggregation stage through another bilinear transform followed by linear/nonlinear interleaving [PAGE 4, PAGE 8].

Gray-zone audit: the evaluation corpus is narrow—6,963 eligible passing plays and 11,558 eligible passing and running plays drawn only from the first six weeks of the 2017 NFL regular season [PAGE 9]. The train/evaluation split is random at 4:1, which risks temporal leakage because plays from the same week can appear on both sides rather than enforcing a strict week-ahead holdout [PAGE 9]. Reported pass-completion accuracy is 73.1% (precision 0.732, recall 0.672), exceeding logistic regression (0.694) and an MLP (0.722) [PAGE 10]. Air-yards regression achieves Pearson 0.977; reception-location x/y correlations are 0.94 and 0.89, but confidence degrades near the end-zone and sidelines [PAGE 10]. The tackle model identifies the first tackler among 11 defenders with 48.1% accuracy (precision 0.482, recall 0.480), better than a logic model (0.417) and a set-based feature model (0.461), while yards-until-tackle correlates at 0.780 with two clear outlier clusters: near-zero actual with large predicted gain, and large actual with near-zero predicted [PAGE 11]. These clusters suggest tackler-identity misclassification propagates into tackle-location error [PAGE 12]. The framework’s permutation invariance also creates a semantic collision risk: two players with identical trajectories but different positional roles (e.g., outside cornerback versus free safety) are treated identically unless player metadata breaks the symmetry [PAGE 7]. Because the input contains no explicit weather, wind, surface friction, or biomechanical force data beyond optional orientation/speed/direction channels and coarse player attributes [PAGE 3, PAGE 4], predictions under high-viscosity surface or high-wind conditions are unverified and should be treated as gray-zone outputs rather than trusted inferences.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Tensor definitions from Section 2 [PAGE 4]: trajectory tensor T_i ∈ R^{M_track × S × T(7)} where M_track is the per-frame feature-vector length (x, y and possibly orientation, speed, direction), S is the number of tracked players, and T(7) is the variable frame count; player tensor P_i ∈ R^{M_player × S} with M_player attributes such as position, weight, height, age, and team affiliation; play tensor C_i ∈ R^{M_play} encoding down, yards to first down, yard-line, game clock, and score.

Permutation algebra from Section 3.1.2 [PAGE 7]: Let X ∈ R^{S × D} and P ∈ R^{S × S} be any permutation matrix. Invariance: f_inv(X·P) ≡ f_inv(X). Equivariance: f_eq(X·P) ≡ P·f_eq(X). The pass-completion head returns a scalar probability p_completion ∈ [0,1] invariant to receiver slot ordering; the tackler head returns a vector p_tackler ∈ R^{11} equivariant to defensive-player ordering [PAGE 6, PAGE 7].

Layer operators from Section 3.2 [PAGE 7-8]: f_traj: R^{M_traj × S × K(L)} → R^{M_traj^M × S × K} maps raw trajectory channels through convolutions and adaptive pooling to a fixed-duration summary; f_player: R^{M_traj^M × S × K} × R^{M_player × S} → R^{M_player^M × S} applies bilinear conditioning with player metadata followed by permutation-equivariant interaction layers detecting routes, collisions, coverage, and evasion [PAGE 8]; f_scene: R^{M_player^M × S} × R^{M_scene} → R^{M_scene^M} aggregates across players with a permutation-invariant linear transform, nonlinear activation, then bilinear conditioning with play metadata [PAGE 8].

Loss and metrics from Section 4.5 [PAGE 9-10]: binary cross-entropy for pass completion and likely-tackler classification; mean-squared error for air-yards, yards-until-tackle, and coordinate regression. Evaluation uses accuracy, precision, recall, and Pearson correlation. Confidence intervals are not reported; sample N is small relative to deep model capacity [PAGE 9].

Units: spatial coordinates are field coordinates in yards implied by air-yards and reception-location outputs [PAGE 8-9]; temporal resolution is uniform frames, e.g., every tenth of a second [PAGE 3]; probabilities are dimensionless on [0,1]; yardage is in yards [PAGE 8]. No invented ratios or heuristic scaling factors are used.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage traces through several citation clusters listed on [PAGE 2] and [PAGE 14]. The set-based input treatment descends directly from Deep Sets (Zaheer et al., NeurIPS 2017) [PAGE 3, PAGE 14], which supplies the permutation-invariant/equivariant building blocks. Earlier work circumvented variable duration with fixed-time sampling [1,2] or recurrent architectures such as LSTM [4-6] and adaptive pooling [3] [PAGE 2]. Player ordering was previously handled by bag-of-words [7], role-based ordering [4], proximity-to-anchor sorting such as distance to the ball [1,8], or random permutation [9] [PAGE 2]. The football-specific precursors include DeepQB for quarterback decision-making [1], pass classification via spatiotemporal data [2], ghosting and imitation learning for coordinated multi-agent behavior [4,5], continuous within-play valuation using tracking data [6], and expected hypothetical completion probability [8] [PAGE 14]. Route identification via center-based Bézier clustering [11] and long-term hierarchical trajectory generation [12] complete the genealogy [PAGE 14].

Multi-week traps: the entire evaluation rests on the NFL 2019 Big Data Bowl dataset covering only the first six weeks of the 2017 regular season [PAGE 3, PAGE 9]. A six-week window cannot capture season-long personnel drift, mid-season scheme adjustments, injury substitution effects, or late-season weather regimes. Because the split is random rather than chronological, plays from identical weeks may occur in both training and evaluation, inflating apparent generalization and masking week-over-week distribution shift. The paper itself acknowledges the sample is relatively small and that additional data would improve performance [PAGE 9]. Any operational deployment must therefore treat week 7+ as an out-of-distribution regime unless retrained on a rolling seasonal basis.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: at the EPD time—the catch moment on passes or the up-field cut on rushes—the model conditions all trajectories from 2 seconds pre-snap through that instant [PAGE 8]. Under pressure, ball-carriers and defenders tend to regress to habitual cut angles and pursuit lanes. The learned interaction layers detect collisions, coverage relationships, and evasive actions, effectively modeling the defensive team’s recursive intention to select a first tackler among 11 candidates [PAGE 8, PAGE 9]. Counter-trap: offensive route combinations and defensive coverage assignments are co-adapted; the pass model simultaneously predicts completion probability, expected air-yards, and reception coordinates, which implies an implicit model of quarterback-receiver timing versus defensive leverage [PAGE 8]. Clock: the play tensor explicitly includes game clock and score [PAGE 4], while the variable interval between snap and pass-throw or snap to EPD is handled by adaptive pooling rather than fixed temporal alignment [PAGE 6]. This makes the framework sensitive to clock-state modulation (e.g., two-minute offense versus conservative protect-the-lead behavior) without hardcoding play-clock rules. The theory-of-mind claim is limited: the network infers behavioral intention solely from trajectory geometry and static metadata, with no explicit representation of player beliefs, fatigue, or psychological stress. Breakdown occurs when crisis habits diverge from training-set norms—such as a trick play or an unusual personnel package—because permutation invariance collapses role identity unless player metadata disambiguates it [PAGE 7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: the play tensor contains only down, yards to first down, yard-line, game clock, and score [PAGE 4]. It contains no weather, wind speed, precipitation, temperature, or surface-friction variables. Therefore any prediction conditioned on high-wind passing, slippery turf, or extreme temperature is outside the training distribution and must be vetoed unless external conditioning is added. Biomechanical veto: trajectory frames include x, y and possibly orientation, speed, and direction [PAGE 3], and player metadata includes position, weight, height, and age [PAGE 4], but there are no ground-reaction forces, joint torques, muscle-activation states, or direct fatigue measures. Predictions involving late-play deceleration, injury-risk, or substitution-driven performance decay are not physically grounded in the input. Singularity/breakdown regimes: (1) T(7) → 0 or extremely short plays provide insufficient temporal support for the convolutional receptive field, causing adaptive pooling to summarize noise; (2) S variation (e.g., red-card or power-play situations noted as possible in tracking data generally [PAGE 1]) breaks the fixed-22-player assumption implicit in the trajectory-layer description “each of the 22 player trajectories” [PAGE 7] unless masking or variable-S padding is imposed; (3) permutation invariance creates representation collision when two players share near-identical trajectories but different roles, because f_inv cannot distinguish them without metadata contrast [PAGE 7]. Weather and biomechanical omissions are exact veto conditions for high-stakes accuracy claims.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Duration collapse): If a held-out play has T(7) below the effective receptive field of the trajectory convolution stack, adaptive pooling cannot produce a stable fixed-length summary. Veto rule: suppress pass-completion and air-yards predictions for plays shorter than 3.0 seconds from snap to throw. Verifiable prediction: on short-duration plays, trajectory-learning accuracy falls below 0.65 and underperforms the feature-based MLP baseline.
Scenario 2 (Tackler diffusion): If the likely-tackler softmax over 11 defenders has maximum probability < 0.20, or the yards-until-tackle regression falls in either outlier cluster (predicted ≈ 0 with actual > 5 yards, or predicted > 5 with actual ≈ 0) [PAGE 11], veto the tackle-location output. Verifiable prediction: tackle-identity accuracy is higher toward the sidelines where fewer candidates exist and lower in the middle of the field where candidate tacklers are numerous [PAGE 12].
Scenario 3 (Week-over-week distribution shift): Because training and evaluation are drawn from weeks 1–6 of 2017 with a random split [PAGE 9], construct a counterfactual week-7+ holdout. Veto rule: if pass-completion accuracy on unseen weeks degrades by more than 5 percentage points relative to the in-season evaluation, reject cross-season deployment. Verifiable prediction: the advantage of trajectory learning over hand-crafted MLP features shrinks or reverses on out-of-sample weeks due to personnel, scheme, and weather drift not represented in the six-week window.
</RLVR_COUNTERFACTUAL_VETOES>
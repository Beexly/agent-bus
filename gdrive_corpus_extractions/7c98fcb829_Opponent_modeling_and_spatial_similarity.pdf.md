---
source: "Opponent_modeling_and_spatial_similarity.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3794
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper: "Opponent Modeling and Spatial Similarity to Retrieve and Reuse Superior Plays" by Laviers et al.

Constraints:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully extract content from the 7 pages provided and produce formal reasoning.

Key facts from source:
- Rush 2008 football simulator, 8 players on field, roster 18, field 100x63 yards.
- 3 offensive formations (power, pro, split), 4 defensive (23, 31, 2222, 2231). Each formation has 8 plays (1-8).
- Case base: 8 plays x 3 offensive formations.
- Background knowledge: 50 instances of every offensive and defensive play combination.
- Play recognition: SVMs, one-vs-one voting, k(k-1)/2 = 28 binary classifiers for multi-class. RBF kernel K(xi,xj) = exp(-γ||xi-xj||^2). Optimization: min 1/2 w^T w + C sum ξ_i subject to yi(w^T φ(xi)+b) >= 1 - ξ_i, ξ_i >= 0.
- Training: 40 instances of every offense (8) and defense (8) play combination, from each of 12 starting formation configurations. Observation vectors accumulated from t=0 to t in {2,...,10}. Table 1: t=2: 12.50%, t=3: 96.88%, t=4: 96.87%, t=6: 96.84%, t=8: 96.89%, t=10: 96.81%. Use t=3 to classify.
- Similarity metric: 13 features per athlete: max, min, mean, median over x and y; FirstToLastAngle, StartAngle, EndAngle, TotalAngle (sum atan), TotalPathDist (sum Euclidean distances). Feature set Fc = union over 8 offensive players. Similarity between plays = L1 norm sum of absolute differences between features.
- Yardage threshold ε = 1.95 based on quadratic polynomial fit of total yardage gained in 6 tests with ε = {MIN, 1.1, 1.6, 2.1, 2.6, MAX}.
- Play switch lookup table: list L given yards(Li) > ε. Find play most similar to current play, add to lookup.
- Execution: at observation < 4 collect traces. At observation 3, use LIBSVM to identify defensive play. Access lookup table to find best(i). If best(i) != i, send change order.
- Subgroups: {QB, RB, FB}, {LG, C, RG}, {LWR, RWR, RTE, LTE}. Group 1 best.
- Results: baseline 2.82 yards/play -> 3.65 yards/play (ε=1.95), +29% ±1.5%. Power vs 23 boosted from ~1.5 to ~3 yards (doubling). Greedy ε=MAX drastically reduced due to mis-coordination.
- Case-based reasoning retrieval and reuse (Aamodt and Plaza 1994). No revision/retention at this stage.

I must not mention betting lines. I can discuss yardage, accuracy percentages, etc.

Need exact [PAGE N] citations and verbatim quotes where appropriate. Since I have the text, I can quote.

Structure:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
Need to derive the logic chain: opponent modeling -> early recognition -> similarity -> retrieval -> adaptation -> reuse. Audit gray zones: temporal aliasing at t=2, threshold ε selection via quadratic fit on only 6 tests, subgroup selection hand-crafted not learned, single play switch one-shot no retention, simulator assumptions (Rush 2008 modified American Football, 8v8), no clock management/score context. Also discuss the singularity/breakdown regimes: t=2 perceptual aliasing (12.50% = random baseline for 8 classes? 1/8 = 12.5%), similarity breakdown when plays are spatially dissimilar but yardage superior causing mis-coordination, ε=MAX causing poor performance.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations:
- SVM primal: min_{w,b,ξ} 1/2 ||w||^2 + C Σ ξ_i s.t. y_i(w^T φ(x_i)+b) ≥ 1 - ξ_i, ξ_i ≥ 0.
- RBF kernel: K(x_i, x_j) = exp(-γ ||x_i - x_j||^2), γ > 0.
- One-vs-one count: k(k-1)/2 = 28 for k=8.
- Feature vector per athlete: f_A = (max_x, min_x, mean_x, median_x, max_y, min_y, mean_y, median_y, FirstToLastAngle, StartAngle, EndAngle, TotalAngle, TotalPathDist) ∈ ℝ^13.
- TotalAngle = Σ_{i=0}^{N-1} atan((y_{i+1}-y_i)/(x_{i+1}-x_i)).
- TotalPathDist = Σ_{i=1}^{N} sqrt((x_i - x_{i-1})^2 + (y_i - y_{i-1})^2).
- Play feature set: F_c = ∪_{p=1}^8 A_{cp} (concatenation/union over 8 offensive players), dimension 104 if raw concatenation, but similarity defined as L1 norm sum of absolute differences between features F_{ci} and F_{cj}: Sim(P_i, P_j) = Σ_{f} |F_{ci}[f] - F_{cj}[f]| (or similar).
- Yardage threshold: ε = 1.95 yards from quadratic fit over {MIN, 1.1, 1.6, 2.1, 2.6, MAX}.
- Lookup table rule: L = {play p | Yards(p) > ε}; best(i) = argmin_{p ∈ L} Sim(CurrentPlay_i, p).
- Execution condition: if best(i) ≠ i, issue change order at t=3.
- Performance: baseline μ=2.82 yards/play, switched μ=3.65 yards/play, Δ=+29% ± 1.5% (sampling of three sets of ten trials). Power vs 23: ~1.5 -> ~3.0 yards.
- Classification accuracy table: A(t=2)=12.50%, A(t=3)=96.88%, etc.

Units: yards, time steps (dimensionless simulation steps), accuracy (%), features are coordinates (yards) and angles (radians via atan), path distance (yards).

Breakdown regimes: t<3 insufficient information (perceptual aliasing), ε too low/high causing mis-coordination, subgroup switching when key players not identified, simulator not full American Football (no clock, 8 players).

<RETROCAUSAL_GENEALOGY>
Historical lineage: Aamodt & Plaza 1994 CBR (retrieve/reuse/revise/retain), Rubine 1991 gesture recognition, Wobbrock et al. 2007 $1 recognizer, Vapnik 1998 SVM/Statistical Learning Theory, Intille & Bobick 1999 multi-agent action recognition, Riley & Veloso RoboCup coaching, Molineaux et al. 2009 Rush quarterback plan recognition. Multi-week traps: overfitting to early t=3 spike, assuming spatial similarity transfers to full 11v11 football with clock/score, ignoring adversarial adaptation (opponent learns your switching policy), threshold ε fitted on only 6 points (MIN, 1.1, 1.6, 2.1, 2.6, MAX) is fragile.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure, quarterbacks/coaches regress to scripted plays or greedy max-yardage switches (ε=MAX), causing mis-coordination. Counter-trap: similarity-constrained subgroup switch preserves coordination. Clock: decision must be made by t=3 (observation step 3), before play develops too far; recursive theory of mind: offense models defense, defense may model offense's switcher, leading to second-order deception (feint defensive formations at t=2 to t=3 to trigger wrong switch).

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof:
- Physical: field 100x63 yards, 8 players, formation offsets (x,y) from center of line of scrimmage. Switch invalid if new play's destination points are unreachable within remaining play clock / player stamina (not modeled in Rush but physical veto).
- Biomechanical: subgroup {QB,RB,FB} switching alters ball-handling chain; if RB/FB are engaged in blocking at t=3, re-routing them causes collision/mis-coordination. OL subgroup {LG,C,RG} switching changes blocking assignments mid-play; linemen have inertia and cannot instantly redirect.
- Weather: not in simulator (indoor/idealized), but in real football wind/precipitation alters passing trajectories (angles FirstToLastAngle etc. become non-stationary), invalidating similarity metric trained on Rush physics.
- Veto: any play switch where similarity L1 distance exceeds a threshold derived from maximum allowable re-route distance given player velocity and time remaining should be vetoed. Breakdown if defensive recognition confidence < threshold or if time-to-snap/remaining play clock < re-planning latency.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions:
1. Veto: If SVM recognition at t=3 outputs defensive play with margin < τ (low confidence), veto play switch and maintain baseline. Prediction: yardage reverts to baseline 2.82, avoiding mis-coordination from wrong defensive label. Verifiable: run simulator with confidence-gated switch; measure yards/play vs ungated 3.65.
2. Veto: If L1 similarity between current play and best candidate > δ_max (e.g., top quartile of pairwise distances), veto because adaptation cost too high. Prediction: prevents the ε=MAX collapse (drastically reduced performance) and preserves ≥ baseline; expected yards between 2.82 and 3.65 depending on δ_max.
3. Veto: If subgroup switch targets {LG,C,RG} while offensive linemen are already in contact with defenders at t=3 (biomechanical lock-in), veto and fallback to {QB,RB,FB} or no switch. Prediction: Group 1 consistently best; lineman-switch trials will show lower gains or negative Δ vs baseline due to blocking mis-assignments.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll write substantial content in each.

Must ensure zero betting lines. No mention of spreads, totals, moneylines, odds. I can mention probabilities/accuracy but not betting odds.

Let's draft carefully.

Citations: [PAGE 1], [PAGE 2], etc. Verbatim quotes: I'll include a few short quotes with page markers.

Let's compute word count mentally as I write, ensuring >1000.

I'll structure the output with exactly those XML tags. No extra text outside.

Let's write.

THINK_TRACE: Need >=400 words. I'll write ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX, units, citations.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Ensure LaTeX is valid.

Let's begin writing.

Important: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will only use equations from the paper or directly derived from it (like L1 similarity, SVM). I won't invent Force/Fatigue.

I should mention exact singularity/breakdown regimes in SOURCE_OPERATORS_AND_EQUATIONS or THINK_TRACE. The prompt says state exact singularity/breakdown regimes. I'll put in SOURCE_OPERATORS_AND_EQUATIONS or THINK_TRACE. I'll include in SOURCE_OPERATORS_AND_EQUATIONS a breakdown subsection.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper describes a closed-loop case-based reasoning (CBR) loop embedded in the Rush 2008 simulator: observe opponent motion, recognize defensive intent via spatio-temporal SVMs, retrieve a superior offensive play from a case base constrained by spatial similarity, adapt by switching either the full offense or a subgroup, and execute. The derivation proceeds in four hops. Hop 1: feature extraction. Each offensive athlete contributes 13 scalar features—max, min, mean, median over x and y coordinates, plus FirstToLastAngle, StartAngle, EndAngle, TotalAngle, and TotalPathDist—so a play feature vector lives in a space built from trajectories measured in yards and radians (via atan). Hop 2: early intent recognition. A battery of SVMs is trained per starting formation and per observation length t ∈ {2,...,10}. At t=2 accuracy collapses to 12.50%, which is exactly the uniform-random baseline for eight defensive classes (1/8 = 0.125), signaling perceptual aliasing: defensive positions have not yet deviated enough from formation to be discriminable. At t=3 accuracy jumps to 96.88% and remains near ceiling through t=10 (96.81%), establishing t=3 as the decision clock. Hop 3: retrieval under a yardage gate. The agent builds a candidate list L = {play p | expected yards(p) > ε}, with ε = 1.95 obtained from a quadratic polynomial fit over six sparsely sampled threshold points {MIN, 1.1, 1.6, 2.1, 2.6, MAX}. From L it selects the play minimizing the L1 distance to the current play’s feature vector. Hop 4: adaptation and execution. At observation step 3 the recognized defensive play indexes a lookup table; if best(i) ≠ i, a change order is issued. Subgroup analysis shows {QB, RB, FB} switching outperforms full-team switching, which in turn beats baseline.

Gray-zone audit: The ε calibration rests on only six trials, making the 1.95-yard threshold a fragile hyperparameter rather than a statistically robust operating point; small perturbations in yardage distribution could flip the candidate set and collapse retrieval. The SVM battery assumes the defender’s play is stationary once recognized, but a recursive adversary could feint between t=2 and t=3 to induce a switch into a trap. The spatial similarity metric is trained entirely in Rush physics (idealized, no weather, no clock, 8-on-8), so its L1 geometry does not transfer to 11-on-11 American football with wind, precipitation, or game-clock pressure without retraining. Finally, the system explicitly retains no memory of past switches (no revision/retention in the CBR cycle), so repeated exploitation of the same defensive tendency is not learned across games; the policy is purely reactive and one-shot per play. Breakdown regimes are therefore: t<3 (aliasing singularity), ε too permissive (ε=MAX produces mis-coordination and drastically reduced yardage), low SVM margin at t=3 (wrong label propagated into lookup), and subgroup selection on linemen already engaged in contact (biomechanical lock-in causing collision or blocking assignment failure).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations drawn from the source text, with units and page citations.

Support vector machine primal (soft-margin, kernelized) as given on [PAGE 3]:
\[
\min_{w,b,\xi}\; \frac{1}{2} w^{T} w + C \sum_{i=1}^{l} \xi_i
\quad \text{subject to} \quad
y_i \bigl(w^{T} \phi(x_i) + b\bigr) \ge 1 - \xi_i,\;\; \xi_i \ge 0,
\]
where \(x_i \in \mathcal{R}^N\), \(y_i \in \{-1,+1\}\), \(C\) is the regularization penalty, and \(\xi_i\) are slack variables measured in feature-space margin units.

Radial basis function kernel [PAGE 3]:
\[
K(x_i, x_j) = \exp\bigl(-\gamma \|x_i - x_j\|^2\bigr),\quad \gamma > 0.
\]

Multi-class decomposition [PAGE 3]: one-vs-one voting yields \(k(k-1)/2 = 28\) binary classifiers for \(k=8\) defensive plays.

Per-athlete feature vector [PAGE 3], 13 dimensions:
\[
f_A = \bigl(\max_x,\min_x,\text{mean}_x,\text{median}_x,\;\max_y,\min_y,\text{mean}_y,\text{median}_y,\;\text{FirstToLastAngle},\;\text{StartAngle},\;\text{EndAngle},\;\text{TotalAngle},\;\text{TotalPathDist}\bigr).
\]
Spatial coordinates are in yards; angles are in radians because they are computed via \(\text{atan}(\Delta y / \Delta x)\).

Trajectory integrals [PAGE 3]:
\[
\text{TotalAngle} = \sum_{i=0}^{N-1} \text{atan}\!\biggl(\frac{y_{i+1}-y_i}{x_{i+1}-x_i}\biggr),\qquad
\text{TotalPathDist} = \sum_{i=1}^{N} \sqrt{(x_i - x_{i-1})^2 + (y_i - y_{i-1})^2},
\]
with TotalPathDist in yards.

Play-level feature set [PAGE 3]: for play \(c\) with eight offensive players,
\[
\overrightarrow{F}_c = A_{c1} \cup A_{c2} \cup \cdots \cup A_{c8}.
\]

Similarity operator [PAGE 3]: L1 norm over feature differences,
\[
\text{Sim}(P_i, P_j) = \sum_{f} \bigl| F_{ci}[f] - F_{cj}[f] \bigr|,
\]
returning a dimensionless dissimilarity score in feature units.

Yardage-gating threshold [PAGE 4]:
\[
L = \{ p \mid \text{Yards}(p) > \epsilon \},\qquad \epsilon = 1.95 \text{ yards},
\]
fitted from six trials at \(\epsilon \in \{\text{MIN}, 1.1, 1.6, 2.1, 2.6, \text{MAX}\}\).

Retrieval rule [PAGE 4]:
\[
\text{best}(i) = \arg\min_{p \in L} \text{Sim}(\text{CurrentPlay}_i, p).
\]

Execution policy [PAGE 5]: if \(\text{best}(i) \neq i\) at observation step \(t=3\), issue change order to offense.

Empirical performance summary [PAGE 5]: baseline offense \(\mu_0 = 2.82\) yards/play; similarity-based switch \(\mu_1 = 3.65\) yards/play; \(\Delta = +29\% \pm 1.5\%\) over three sets of ten trials. Power offense vs. 23 defense improves from \(\approx 1.5\) to \(\approx 3.0\) yards/play. Greedy \(\epsilon = \text{MAX}\) causes mis-coordination and drastic performance reduction.

Classification accuracy [PAGE 2, Table 1]: \(A(t{=}2)=12.50\%\), \(A(t{=}3)=96.88\%\), \(A(t{=}4)=96.87\%\), \(A(t{=}6)=96.84\%\), \(A(t{=}8)=96.89\%\), \(A(t{=}10)=96.81\%\). The \(t=2\) value equals the uniform-random baseline \(1/8\) for eight classes, marking the perceptual-aliasing singularity.

Simulator physics [PAGE 1–2]: 8 players per side, roster 18, field \(100 \times 63\) yards, three offensive formations (power, pro, split), four defensive formations (23, 31, 2222, 2231), eight plays per formation.

Singularity and breakdown regimes:
1. Temporal aliasing at \(t < 3\): insufficient spatial deviation from initial formation, classifier cannot discriminate defenses (accuracy at random baseline).
2. Threshold brittleness: \(\epsilon = 1.95\) derived from only six evaluation points; if the yardage distribution shifts, \(L\) may empty or admit dissimilar plays.
3. Mis-coordination singularity: \(\epsilon = \text{MAX}\) ignores similarity, producing teammate mis-coordination and performance collapse below baseline.
4. Biomechanical lock-in: switching linemen \(\{LG, C, RG\}\) after contact at \(t=3\) cannot be physically re-routed instantaneously; subgroup switching must respect player inertia and engagement state.
5. Domain-transfer singularity: Rush is a modified 8-on-8 simulator without clock management, weather, or scoring context; L1 similarity trained here is non-stationary under real-world wind, precipitation, or 11-on-11 spacing.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of case-based reasoning and adversarial intent recognition. It explicitly invokes Aamodt and Plaza’s CBR cycle—retrieve, reuse, revise, retain [PAGE 1, PAGE 2]—but implements only retrieve and reuse, deferring revision and retention to future work. That truncation means the system has no cross-play memory; every switch is computed from a static lookup table built offline from 50 background instances per offense-defense combination [PAGE 2]. Spatially, the feature set descends from Rubine’s 1991 gesture specification and Wobbrock et al.’s 2007 $1 recognizer for pen trajectories [PAGE 3], generalized here from single-stroke sketch input to multi-player team trajectories. The classifier stack rests on Vapnik’s 1998 Statistical Learning Theory and LIBSVM [PAGE 3], using one-vs-one voting over 28 binary SVMs per decision clock. Historically, this echoes Intille and Bobick’s 1999 multi-agent action recognition and the RoboCup coaching work of Riley and Veloso, which extracted opponent models from logs but processed them offline for future games [PAGE 6]. Laviers et al. invert that temporal direction: recognition and switching occur online during the current play.

Multi-week traps emerge from this genealogy. First, the offline-trained 50-instance background knowledge assumes the opponent’s play distribution is stationary across the season; an adversary that adapts weekly can invalidate the SVM decision boundaries and the expected-yardage lookup table. Second, the quadratic fit for \(\epsilon\) uses only six points, so over a multi-week schedule the threshold will drift out of calibration as field position, score state, and defensive personnel change—phenomena absent from Rush. Third, subgroup selection ({QB,RB,FB}, {LG,C,RG}, {LWR,RWR,RTE,LTE}) is hand-crafted from domain knowledge rather than learned from motion correlations, a limitation the authors themselves flag for future work [PAGE 1]; without automatic subgroup discovery, the method cannot adjust to personnel injuries or scheme changes week to week. Fourth, because the system retains no switching episodes, it cannot exploit a defense’s tendency to over-pursue after a switch, leaving a recursive exploitable pattern unaddressed across games.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The offensive agent models the defense at order zero (recognize the defensive play) and at order one (select an offensive play that exploits that recognition). The crisis habit regression appears when the agent abandons similarity constraints and switches greedily to maximum expected yardage (\(\epsilon = \text{MAX}\)). That is the regression to a scripted, high-variance habit: the quarterback or play-caller, under pressure to gain yards, selects the “best” play on paper regardless of spatial compatibility with the current formation. The paper shows this produces teammate mis-coordination and drastically reduced performance [PAGE 5], exactly the kind of coordination breakdown that occurs when a human offense audibles into a play whose linemen are blocked incorrectly or whose receivers run routes into occupied zones.

The counter-trap is the similarity-constrained subgroup switch. By restricting the change to {QB, RB, FB}—the ball-handling and immediate backfield chain—the offense preserves the blocking geometry of the offensive line while altering the ball’s trajectory. Group 1 consistently outperformed both full-team switching and baseline [PAGE 5], demonstrating that a partial, spatially proximate revision dominates a total replacement when the opponent’s intent is recognized late.

The clock is absolute: the decision must be committed by observation step \(t=3\), because recognition accuracy is at random baseline at \(t=2\) (12.50%) and near-perfect at \(t=3\) (96.88%) [PAGE 2]. After \(t=3\), the play has developed; re-routing players incurs larger adaptation cost and risks collision. Recursively, a sophisticated defense could run a false-order defense at \(t=2\) that resolves into a different play at \(t=3\), inducing the offense to switch into a play optimized for the feint rather than the actual defense. That second-order deception is not modeled in Rush, where the defensive play is fixed and the offense merely recognizes it. In a recursive theory-of-mind frame, the offense must maintain a belief over the defense’s belief about the offense’s switching policy; the current system collapses that belief to a point estimate (the SVM’s best guess), leaving it vulnerable to feint-induced mis-coordination if the defender varies pre-snap alignment within the simulator’s limited degrees of freedom.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto adjudication across physical, biomechanical, and environmental layers:

Physical layer [PAGE 1–2]: Rush fields are \(100 \times 63\) yards with 8 players per side. A play switch is physically admissible only if every reassigned player can reach the new play’s destination offsets before the play terminates. Because Rush instructions are conditional plans executed to the best of physical capability [PAGE 2], a veto must fire if the Euclidean displacement between current trajectory and new play destination exceeds the maximum coverable distance given remaining time and player speed cap. This is a hard physical veto: no amount of spatial similarity can override unreachable waypoints.

Biomechanical layer: Subgroup choice matters. Switching {QB, RB, FB} alters the ball-handling chain while leaving linemen in their original blocking assignments; this is low-inertia and succeeds [PAGE 5]. Switching {LG, C, RG} after contact at \(t=3\) is biomechanically vetoed because offensive linemen are already engaged with defenders and cannot redirect blocking assignments without creating penetration or free rushers. Switching wide receivers and tight ends is conditionally admissible if their routes have not yet broken; otherwise route collisions occur. A veto proof requires checking each player’s contact state at \(t=3\); any subgroup containing an engaged lineman must be rejected in favor of Group 1 or no switch.

Environmental layer: Rush is an idealized simulator with no wind, precipitation, temperature, or clock [PAGE 1–2]. The similarity metric’s angles and path distances are therefore stationary only within Rush physics. Under real weather, passing trajectories (FirstToLastAngle, TotalAngle) are non-stationary; a play deemed spatially similar in calm conditions may be aerodynamically divergent in crosswind. The veto rule: if environmental parameters deviate beyond the training distribution (e.g., wind speed affecting ball flight), the L1 similarity score is inadmissible and the baseline play must be retained.

Adjudication hierarchy: (1) physical reachability veto overrides all; (2) biomechanical contact-state veto restricts subgroups to non-engaged players; (3) environmental non-stationarity veto deactivates similarity-based retrieval and falls back to baseline; (4) recognition-confidence veto: if the SVM margin at \(t=3\) is below threshold, no switch is issued. Breakdown occurs when multiple layers are simultaneously violated—for example, low SVM margin plus engaged linemen plus high wind—which forces a baseline play and forfeits the +29% yardage improvement.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning via verifiable rewards) veto scenarios with counterfactual predictions:

Scenario 1 — Recognition-confidence veto. Veto rule: if the multi-class SVM at \(t=3\) returns a predicted defensive play with decision margin below \(\tau\), do not switch; run baseline. Counterfactual prediction: ungated similarity switching achieves \(3.65 \pm\) variance yards/play [PAGE 5], but wrong-label switches induce mis-coordination. With the veto, yards/play revert to baseline \(2.82\) on low-margin frames while preserving \(3.65\) on high-margin frames. Verifiable test: instrument LIBSVM to output margin, run 10,000 simulated plays, compare gated vs. ungated yardage distributions; expect the gated policy to dominate when defensive-play ambiguity is high and to be statistically indistinguishable from ungated when margin is high.

Scenario 2 — Similarity-distance veto. Veto rule: if \(\text{Sim}(\text{CurrentPlay}_i, \text{best}(i)) > \delta_{\max}\), where \(\delta_{\max}\) is set at the 75th percentile of all pairwise L1 distances within a formation, veto the switch because adaptation cost outweighs yardage potential. Counterfactual prediction: this prevents the collapse observed under \(\epsilon = \text{MAX}\), where ignoring similarity produced drastically reduced offense [PAGE 5]. Expected outcome: mean yards/play remain between baseline \(2.82\) and the full similarity policy \(3.65\), with lower variance than the greedy policy. Verifiable test: sweep \(\delta_{\max}\) across quartiles of the L1 distance distribution and measure yardage; the counterfatal frontier should show a knee near the 75th percentile.

Scenario 3 — Biomechanical lock-in veto for linemen. Veto rule: if any member of the candidate switching subgroup \(\{LG, C, RG\}\) is in contact with a defender at observation \(t=3\), veto that subgroup and fallback to \(\{QB, RB, FB\}\) or baseline. Counterfactual prediction: Group 1 switching produced the greatest gains in the paper [PAGE 5], while full-team switching—which necessarily disturbs engaged linemen—still beat baseline but underperformed subgroup switching. The lineman-locked counterfactual should show zero or negative \(\Delta\) yards versus baseline for lineman-heavy switches, confirming that Group 1 dominance arises precisely because it avoids biomechanical re-assignment of engaged linemen. Verifiable test: tag player contact state at \(t=3\) in Rush, run switch trials partitioned by lineman engagement, and compare yardage gains; expect engaged-lineman switches to cluster near or below \(2.82\) yards/play.
</RLVR_COUNTERFACTUAL_VETOES>
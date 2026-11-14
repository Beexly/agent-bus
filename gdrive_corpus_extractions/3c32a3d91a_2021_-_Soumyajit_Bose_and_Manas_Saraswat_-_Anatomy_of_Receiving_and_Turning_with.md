---
source: "2021 - Soumyajit Bose and Manas Saraswat - Anatomy of Receiving and Turning with the Ball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3770
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about football analytics ("Anatomy of Receiving and Turning with the Ball" by Bose and Saraswat) and produce a structured response with specific XML sections meeting strict invariants.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Source text provided covers pages 1-26 (based on page markers in text). I need to cite exact [PAGE N] markers.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The proxy problem: using angle between pass vectors as proxy for turning without body pose data ([PAGE 2])
- Angular spread definition for "back" pass: -45° to +45° ([PAGE 3])
- Relative angle convention: head-to-tail, clockwise fixed convention ([PAGE 4])
- xT model as Markov chain, 96 zones, transition probabilities, shooting probabilities ([PAGE 7])
- JSD vs KL divergence for pressure resistance ([PAGE 10])
- Small sample size caveats ([PAGE 25])
- Gray zones: 360 frames at edge of visual frame, missing passer data ([PAGE 25]); xT under pressure larger than all actions anomaly ([PAGE 15]); entropy bin arbitrariness ([PAGE 9])
- Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations.
- Relative angle: θ_rel = angle between vector v1 (first pass) and v2 (second move), head-to-tail convention, clockwise.
- xT equation: xT(z) = P(shoot|z) * P(goal|shoot,z) + Σ_{z'} P(move to z'|z) * xT(z'). Iterative solution.
- Risk: Risk(z) = xT_opposition(z) = reversed xT map.
- Tightness: T = Area(Voronoi cell of receiver). Alternative T' = A_total / A_cell.
- Entropy: H = -Σ_{i=1}^{18} p_i log p_i, p_i = fraction of turns in bin i, bin width 20°.
- KL: D_KL(P||Q) = Σ p_i log(p_i/q_i).
- JSD: JSD(P||Q) = 1/2 D_KL(P||M) + 1/2 D_KL(Q||M), M = (P+Q)/2.
- HistGradientBoostingClassifier for completion probability.
- Pressure: number of pressors within 5-yard radius (Euclidean distance from Actor).
- Units: degrees (°), yards, probability [0,1], xT dimensionless probability of scoring within next n moves, entropy in bits (if log2) or nats (if ln).
- Breakdown regimes: no 360 frame excluded; goalkeeper excluded; regular play passes only; edge-of-frame Voronoi undefined; small sample sizes (<100 combinations for all, <50 for pressured); JSD singularities when q_i=0 (need smoothing).
- Page citations: [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 25], [PAGE 15], etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: John Muller passing sonars [1] ([PAGE 4]); Karun Singh xT [2] ([PAGE 7]); StatsBomb 360 data launch 2020 ([PAGE 1]); Metrica/Tracab tracking data ([PAGE 1]); American Soccer Analysis gradient boosting ([PAGE 26]).
- Multi-week traps: small sample size over a single season (540 games, La Liga + Bundesliga 2020-21) ([PAGE 3]); survivor bias in elite player selection; volume normalization per 100 combinations; xT under pressure anomaly potentially noise ([PAGE 15]); possession-heavy teams volume effect ([PAGE 14]); lack of body pose data ([PAGE 2], [PAGE 25]).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is more interpretive/theoretical. Crisis habit regression: under pressure, receivers revert to habitual angles (low JSD = elite, high JSD = perturbed). Counter-trap: opposition uses entropy/predictability to set pressing traps; force ball to risk-averse passer ([PAGE 24]). Clock: match state, time pressure, fatigue not modeled; 360 snapshots at intervals but no temporal decay model.
- Need to connect to paper's concepts: pressure resistance, entropy, JSD, success above expectation.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: no body pose data means turn angle is kinematic proxy, not biomechanical reality ([PAGE 2], [PAGE 26]); half-turn vs back-to-goal unobservable.
- Biomechanical: Voronoi cell assumes static control area, ignores player momentum, orientation, acceleration ([PAGE 8], [PAGE 25]).
- Weather: not addressed in paper; broadcast camera 360 data could be affected by weather/visibility but not discussed ([PAGE 1] mentions broadcast camera footage).
- Veto proof: what would invalidate metrics: missing 360 frames ([PAGE 6]), passer at edge of frame ([PAGE 25]), small sample sizes ([PAGE 25]), no regular play restriction ([PAGE 6]).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: If q_i = 0 in pressure distribution for a bin where p_i > 0, KL/JSD undefined without smoothing. Prediction: metric breaks or requires Laplace smoothing; JSD → ∞ or undefined.
- Scenario 2: If 360 frame missing for >X% of events (paper excludes them [PAGE 6]), pressure count (pressors within 5-yard radius) is systematically biased toward events with complete tracking. Prediction: HistGradientBoostingClassifier trained on complete cases only; completion probabilities biased for edge-of-frame events where Voronoi/pressure can't be determined ([PAGE 25]).
- Scenario 3: If sample size < 100 combinations (all) or < 50 (pressured) ([PAGE 12], [PAGE 13]), entropy and JSD estimates have high variance. Prediction: rankings in Figures 8-19 unstable under bootstrap resampling; elite/non-elite classification flips.
- Need verifiable conditions and predictions.

Word count: Need >=1000 words total across all sections. THINK_TRACE alone >=400 words.

Let me draft carefully, ensuring no betting language. No "odds", "spread", "moneyline", "total". Avoid gambling terms entirely.

I need to include verbatim quotes with page citations. Let me find good quotes:
- Page 2: "In the absence of such data, what we have really done is use a proxy for 'turning with the ball'."
- Page 3: "ranging from -45º to +45º."
- Page 4: "An angle of 0º refers to the case where the receiver sends the ball back to the first passer. An angle of 180º refers to the case where the receiver is able to turn completely with the ball and progress it vertically."
- Page 6: "We excluded events where there was no 360 Frame available, and also excluded GoalKeeper information..."
- Page 7: xT description.
- Page 9: entropy formula mention.
- Page 10: JSD formulas.
- Page 15: "The xT under pressure seems to be larger than xT of all actions, for most of the players."
- Page 24: opposition analysis pressing traps.
- Page 25: "Further complications arise in the 360 frames where the passer is at the edge of the visual frame..."
- Page 26: body pose data future directions.

I must be careful with page numbers. The text has bold page numbers like **1**, **2**, etc. I'll cite those as [PAGE N].

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

I will ensure no betting lines. I'll avoid words like "odds", "spread", "moneyline", "total" in betting context. "Total" might appear but not as betting total. I'll be careful.

Now drafting content.

THINK_TRACE (>=400 words):
Start with the core epistemic problem: turning without body pose. Multi-hop: 360 data gives locations, not orientation; authors define relative angle between pass vector and next action vector as proxy. This creates a head-to-tail angle, not tail-to-tail. Gray zones: angular spread for "back" is arbitrary (-45 to +45), chosen because dataset limited to 540 games. The relative angle sonar flips interpretation: 0° is backward layoff, 180° is full turn/vertical progression. This is counterintuitive vs usual sonar. xT is Markov chain over 96 zones, but paper uses simple xT not pressure-augmented. Under-pressure xT anomaly (higher than all actions) could be noise, small sample, or hit-and-hope luck ([PAGE 15]). JSD compares pressure vs no-pressure angular distributions; if distributions diverge, player is perturbed. But entropy bins (18 x 20°) arbitrary ([PAGE 9]). Small sample caveats ([PAGE 25]): <100 combinations for all, <50 pressured. Edge-of-frame 360 missing passer Voronoi ([PAGE 25]). All these create gray zones where metrics may not generalize. I will write this in a detailed, analytical tone, >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List LaTeX. Units: degrees, yards, probability, bits/nats.
Equations:
1. Relative angle: \theta_{rel} = \measuredangle(\vec{v}_{first}, \vec{v}_{second})_{\text{head-to-tail, clockwise}} \in [0^\circ, 360^\circ)
2. xT: xT(z) = \sum_{s \in \{shoot, move\}} P(s|z) \cdot V(s,z); if shoot: P(goal|shoot,z); if move: \sum_{z' \in \mathcal{Z}} P(z'|z, move) xT(z'). Iterative fixed point.
3. Risk: R(z) = xT^{opp}(z) = xT(pitch\_flip(z))
4. Tightness: \tau = Area(Voronoi(cell_{receiver})); alternative \tau' = A_{pitch} / Area(cell)
5. Entropy: H = -\sum_{i=1}^{18} p_i \log p_i, p_i = N_i / N_{total}, \Delta\theta = 20^\circ
6. KL: D_{KL}(P\|Q) = \sum p_i \log(p_i/q_i)
7. JSD: JSD(P\|Q) = \frac{1}{2}D_{KL}(P\|M) + \frac{1}{2}D_{KL}(Q\|M), M = \frac{P+Q}{2}
8. Pressure count: n_{press} = |\{p \in \text{pressors} : \|x_p - x_{actor}\|_2 \le 5\text{ yards}\}]
9. Model: \hat{y} = HistGradientBoostingClassifier(X) where y \in \{0,1\} successful carry/pass.
Breakdown regimes: no 360 frame excluded [PAGE 6]; GK excluded [PAGE 6]; regular play only [PAGE 6]; edge-of-frame passer Voronoi undefined [PAGE 25]; q_i=0 makes KL singular requiring smoothing [PAGE 10]; small N < 100 or < 50 [PAGE 12, 13].

RETROCAUSAL_GENEALOGY:
Historical lineage: Muller passing sonars [1] [PAGE 4]; Singh xT [2] [PAGE 7]; Metrica/Tracab tracking [PAGE 1]; StatsBomb 360 2020 [PAGE 1]; American Soccer Analysis gradient boosting [3] [PAGE 26].
Multi-week traps: single season 2020-21, 540 games [PAGE 3]; volume normalization per 100 combos [PAGE 14]; selection bias toward 10 named midfielders [PAGE 11]; xT under-pressure inversion [PAGE 15]; no body pose data [PAGE 2, 26].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure, does player revert to habitual low-entropy angles? Low JSD means pressure doesn't change distribution (elite unaffected [PAGE 22]). High JSD means perturbed.
Counter-trap: opposition uses entropy/predictability to set traps; force ball to risk-averse passer, deeper [PAGE 24]. If entropy low in specific directions, marking exploits that [PAGE 24].
Clock: match clock, fatigue, game state not in model. 360 snapshots are interval-based, no temporal pressure buildup. Crisis moments (late match, defending lead) not distinguished.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: no body pose; turn angle is proxy, not actual body rotation [PAGE 2, 26]. Half-turn vs back-to-goal unobservable.
Biomechanical layer: Voronoi tessellation assumes static equal control; ignores momentum, orientation, acceleration, footedness [PAGE 8, 25]. Pressure radius fixed 5 yards, no sprint speed integration.
Weather layer: broadcast camera 360 depends on visibility; weather not modeled [PAGE 1].
Veto adjudication: if 360 missing at edge, pressure/n_press and Voronoi invalid [PAGE 25]; if sample < thresholds, rankings unreliable [PAGE 25]; if body pose absent, turning claim is inferential not observational.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Zero-cell in pressure distribution. If q_j = 0 for some bin j while p_j > 0, D_KL(P||Q) undefined (division by zero). JSD requires smoothing. Prediction: JSD metric will either reject player or produce infinite/NaN unless Laplace smoothing applied; rankings in Fig 18 will change under smoothing.
Scenario 2: Missing 360 frames at frame edge. If passer at edge, Voronoi cell and pressure count cannot be determined [PAGE 25]. These events are excluded [PAGE 6]. Prediction: HistGradientBoostingClassifier trains on complete-case subset; pressure-resistance metrics biased for wide-area players whose passes frequently occur near touchline/camera edge; completion above expectation overestimated for players who operate centrally where 360 coverage is complete.
Scenario 3: Small-sample regime. If N_combinations < 100 (all) or < 50 (pressured) [PAGE 12, 13], entropy and JSD estimates high variance. Prediction: bootstrap resampling of players near threshold will flip elite/non-elite classification; Fig 8-19 rankings unstable at boundaries; small-sample xT per 100 combos normalization amplifies noise.

Need to ensure total words >= 1000. Let me estimate. THINK_TRACE ~500 words. SOURCE ~400. Others ~200 each. Should be fine.

Let me write carefully now. I'll include verbatim quotes with page markers.

Check for any betting terms: I won't use "odds", "spread", "moneyline". "Total" I'll avoid as noun for betting. "Probability" is fine.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central epistemic move is to replace unobservable body pose with an observable kinematic proxy: the head-to-tail angle between the vector of the first pass and the vector of the receiver’s second move. Because broadcast-derived 360 data supplies player and ball locations but not skeletal orientation, the authors explicitly state they are using a proxy rather than measuring turning directly ([PAGE 2]: "In the absence of such data, what we have really done is use a proxy for 'turning with the ball'"). This creates a multi-hop derivation chain: (1) isolate a three-action subsequence—first pass, receiver’s second move, optional teammate’s third move; (2) restrict first passes to those arriving from the receiver’s "back," defined by an angular spread of −45° to +45° ([PAGE 3]); (3) compute the relative angle using a fixed clockwise head-to-tail convention, where 0° means the ball is sent back to the original passer and 180° means a complete turn enabling vertical progression parallel to the original pass direction ([PAGE 4]); (4) plot this distribution as a relative angle sonar, inverting the usual passing-sonar interpretation so that a diagonal field pass can appear as a vertical relative entry ([PAGE 4–5]).

Several gray zones emerge immediately. The choice of −45° to +45° is justified only by dataset size—540 select games from La Liga and Bundesliga 2020–21—which forces a broad definition rather than a position-specific one ([PAGE 3]). The relative angle convention is internally consistent but causally ambiguous: a 180° entry could reflect a genuine turn, a misplaced pass that accidentally progresses, or a receiver who never actually turned their body. Without body pose data, the metric conflates ball-vector rotation with player-body rotation ([PAGE 2, 26]).

The Expected Threat (xT) layer adds a Markov-chain valuation over 96 pitch zones, where xT is iteratively solved as the probability of scoring within the next n moves ([PAGE 7]). Risk is the opposition-perspective mirror of xT ([PAGE 8]), while tightness uses Voronoi tessellation area, with the authors noting their definition is counter-intuitive because larger cell area means lower tightness ([PAGE 8]). Pressure is operationalized as the count of pressors within a 5-yard Euclidean radius of the ball actor, excluding events without 360 frames and all goalkeeper data ([PAGE 6]).

The most consequential gray zone is the pressure-resistance layer. The authors compute Jensen-Shannon Divergence (JSD) between unpressured and pressured angular turn distributions to measure perturbation ([PAGE 10]). Yet their own results show xT under pressure is often larger than xT across all actions, which they attribute to noise, unsettled defences, or "hit-and-hope" luck rather than a verified mechanism ([PAGE 15]). Entropy, used for unpredictability, depends on 18 bins of 20° each, a choice the authors admit is not sacred ([PAGE 9]). Finally, small-sample constraints—minimum 100 combinations for all-action graphs and 50 for pressured graphs—plus missing 360 frames at the visual edge, where passer Voronoi cells cannot be determined ([PAGE 25]), imply that player rankings in Figures 8–19 are methodological illustrations rather than robust scouting outputs ([PAGE 25]).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with units and page citations:

1. Relative angle (turning proxy), degrees:
\[
\theta_{\text{rel}} = \measuredangle\!\left(\vec v_{\text{first pass}},\,\vec v_{\text{second move}}\right)_{\text{head-to-tail, clockwise}} \in [0^\circ, 360^\circ)
\]
where 0° denotes a return pass to the original passer and 180° denotes full vertical progression ([PAGE 4]). Unit: degrees. Assumption: no body pose; angle between displacement vectors proxies player rotation.

2. "Back" pass angular filter:
\[
\theta_{\text{pass}\to\text{receiver}} \in [-45^\circ, +45^\circ]
\]
Unit: degrees. Chosen because dataset limited to 540 games ([PAGE 3]).

3. Expected Threat (xT), Markov chain over \(|\mathcal Z|=96\) zones, dimensionless scoring probability within next \(n\) moves:
\[
\text{xT}(z) = P(\text{shoot}\mid z)\,P(\text{goal}\mid \text{shoot},z) + P(\text{move}\mid z)\sum_{z'\in\mathcal Z} P(z'\mid z,\text{move})\,\text{xT}(z')
\]
Solved iteratively from \(\text{xT}^{(0)}(z)=0\) ([PAGE 7]).

4. Opposition risk, dimensionless:
\[
R(z) = \text{xT}^{\text{opp}}(z) = \text{xT}\bigl(\text{pitch\_flip}(z)\bigr)
\]
([PAGE 8]).

5. Tightness, square metres (pitch area units):
\[
\tau = \operatorname{Area}\bigl(\text{Voronoi cell of receiver}\bigr)
\]
Alternative intuitive form \(\tau' = A_{\text{pitch}} / \tau\), so tightness increases as space shrinks ([PAGE 8]). Note: Voronoi area assumes static control; momentum and orientation ignored.

6. Pressure count, dimensionless integer:
\[
n_{\text{press}} = \left|\left\{p \in \text{pressors} : \lVert x_p - x_{\text{actor}}\rVert_2 \le 5\text{ yards}\right\}\right|
\]
Euclidean distance from StatsBomb 360 "Actor"; events without 360 frames and all goalkeeper events excluded ([PAGE 6]).

7. Completion classifier:
\[
\hat y = \text{HistGradientBoostingClassifier}(X), \qquad y\in\{0,1\}
\]
where \(y=1\) if pass/carry successful; for carries, dispossession counts as unsuccessful ([PAGE 6]). Output: completion probability in \([0,1]\).

8. Unpredictability entropy, bits (if \(\log_2\)) or nats (if \(\ln\)):
\[
H = -\sum_{i=1}^{18} p_i \log p_i, \qquad p_i = \frac{N_i}{N_{\text{total}}}, \qquad \Delta\theta = 20^\circ
\]
18 bins over \(360^\circ\); bin count not sacred ([PAGE 9]).

9. Kullback-Leibler divergence, nats:
\[
D_{\text{KL}}(P\|Q) = \sum_{i} p_i \log\frac{p_i}{q_i}
\]
where \(P, Q\) are relative angular distributions without and under pressure ([PAGE 10]).

10. Jensen-Shannon Divergence, nats:
\[
\operatorname{JSD}(P\|Q) = \tfrac12 D_{\text{KL}}(P\|M) + \tfrac12 D_{\text{KL}}(Q\|M), \qquad M = \tfrac{P+Q}{2}
\]
Large JSD implies receiver is perturbed by pressure ([PAGE 10]).

Breakdown/singularity regimes: \(q_i=0\) with \(p_i>0\) makes \(D_{\text{KL}}\) undefined without smoothing ([PAGE 10]); no 360 frame excludes event from pressure and Voronoi computation ([PAGE 6]); passer at visual frame edge makes Voronoi cell and pressure indeterminate ([PAGE 25]); \(N_{\text{combinations}}<100\) (all) or \(<50\) (pressured) excludes player from success graphs ([PAGE 12–13]); regular-play passes only ([PAGE 6]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the intersection of three historical lineages. First, passing sonars derive from John Muller’s passing vertex angle work ([PAGE 4]: reference [1]), adapted here from absolute pitch angles to relative head-to-tail turn angles. Second, Expected Threat builds on Karun Singh’s xT Markov-chain model ([PAGE 7]: reference [2]), itself a zone-based possession valuation that predates modern tracking-data possession models. Third, the pressure/completion modeling echoes American Soccer Analysis’ gradient-boosting approach to post-pass outcomes ([PAGE 26]: reference [3]), but replaces event-only inputs with StatsBomb 360 Euclidean pressure counts.

A multi-week trap lies in the temporal scope: the data cover a single season, 2020–21, across La Liga and Bundesliga, only 540 select games ([PAGE 3]). This is insufficient to separate stable player traits from small-sample noise, team tactical context, and match-state variance. The authors mitigate volume effects by normalizing xT per 100 combinations ([PAGE 14]), but per-100 normalization cannot cure selection bias: the highlighted ten midfielders ([PAGE 11]) are not a random sample, and forwards appear only in the final completion-above-expectation scatter ([PAGE 23]).

Another trap is the pressure paradox on [PAGE 15]: xT under pressure exceeds xT across all actions for most players. The authors offer three unverified explanations—data noise, unsettled defences, or hit-and-hope luck—without longitudinal tracking to adjudicate. Over a multi-week horizon, this instability means a player classified as "elite under pressure" in one month could regress in the next if the effect is sample artifact rather than durable skill. The absence of body pose data ([PAGE 2, 26]) further means the method cannot distinguish a genuine technical turn from a fortuitous ball trajectory, limiting causal claims across fixtures.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure, a receiver’s turn-angle distribution may collapse toward habitual, low-variance angles. The paper operationalizes this via JSD between unpressured and pressured distributions ([PAGE 10]); elite players register low divergence, indicating opposition pressure does not materially alter their game ([PAGE 22]). This implies a recursive habit loop: players with low baseline entropy have fewer alternative exits under pressure, making their crisis response predictable but stable; players with high baseline entropy have more options but risk larger distributional shifts when pressed.

Counter-trap: opposition analysts can invert the same metrics. If entropy reveals a receiver turns preferentially in narrow directions, the defending team can mark those escape routes ([PAGE 24]). If a player is risk-averse and consistently lays the ball back (0° relative angle), opponents can force the ball deeper to that player, creating a pressing trap ([PAGE 24]). This is adversarial recursion: the receiver’s predictability becomes the opponent’s tactical input.

Clock: the model contains no match-clock or fatigue term. 360 data are snapshots at fixed intervals ([PAGE 1]), so pressure resistance is averaged across early and late match states without differentiating crisis moments (e.g., defending a lead in the final 15 minutes). A receiver may be unperturbed under ordinary pressure but regress under clock-driven urgency; the current formalism cannot detect that regression because it pools all pressured actions regardless of game state.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: No body pose data exist at scale ([PAGE 2]), so relative angle is a kinematic proxy for turning, not a biomechanical measurement. A half-turn reception versus back-to-goal posture is indistinguishable ([PAGE 26]), vetoing any claim about actual body rotation.

Biomechanical layer: Tightness uses Voronoi tessellation area ([PAGE 8]), which treats all players as equal static control points. It ignores momentum, orientation, preferred foot, acceleration, and pressing speed. A player with a large Voronoi cell but low sprint speed may be more "tight" in practice than the metric indicates; conversely, a fast player in a small cell may control more effective space. The fixed 5-yard pressure radius ([PAGE 6]) similarly ignores pressors’ closing velocities.

Weather/environment layer: 360 data derive from broadcast camera footage ([PAGE 1]); weather-induced visibility degradation, camera occlusion, or pitch conditions are not modeled. If frames are missing at the visual edge, passer Voronoi cells cannot be computed ([PAGE 25]).

Veto adjudication: Any event lacking a 360 frame is excluded ([PAGE 6]), and edge-of-frame passers invalidate pressure and tightness estimates ([PAGE 25]). Therefore metrics derived from incomplete tracking—pressure resistance, xT under pressure, JSD—are conditional on complete coverage and must be treated as invalid for matches or zones with poor camera capture. Body pose absence permanently caps the causal validity of "turning" claims.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Zero-cell divergence singularity. Condition: For some angular bin \(j\), the pressured fraction \(q_j = 0\) while the unpressured fraction \(p_j > 0\). Verifiable by inspecting the 18-bin histograms used for JSD ([PAGE 9–10]). Prediction: \(D_{\text{KL}}(P\|Q)\) and hence JSD are undefined without smoothing; any JSD-based pressure-resistance ranking in Figure 18 will either exclude the player or return infinite/NaN values, and the reported ordering of elite vs. perturbed players will change under Laplace smoothing.

Scenario 2 — Missing 360 frames at frame edge. Condition: A non-trivial subset of passes features the passer at the visual frame boundary, rendering Voronoi cell area and pressor count indeterminate ([PAGE 25]). The paper excludes such events ([PAGE 6]). Prediction: The HistGradientBoostingCompletion model trains on a complete-case subset biased toward central, well-covered pitch regions; wide-area players whose actions occur near touchlines will have systematically underestimated pressure exposure and biased completion-above-expectation scores.

Scenario 3 — Sub-threshold combination volume. Condition: A player has between 1 and 99 total combinations or between 1 and 49 pressured combinations, below the paper’s inclusion cutoffs ([PAGE 12–13]). Verifiable by cross-referencing Figure 8/9 inclusion thresholds with underlying event counts. Prediction: Entropy and JSD estimates for such players have high variance; bootstrap resampling will flip their elite/non-elite classification, and xT per 100 combinations will amplify noise, making small-volume rankings unstable across random train/test splits of the 540-game sample ([PAGE 3]).
</RLVR_COUNTERFACTUAL_VETOES>
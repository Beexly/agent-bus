---
source: "2017 - Automatic event detection in basketball games - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 28
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4063
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Automatic Event Detection in Basketball" from the New England Symposium on Statistics in Sports 2017. The paper is provided in full text across 28 pages.

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

Wait, the user said "DRIVE SOURCE" but this is about basketball event detection, not driving. I should treat this as a research analysis task.

Let me structure my response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the HMM approach, the bond energy model, emission distributions, inference via EM/Viterbi, accuracy tables, confusion matrices, limitations, identifiability issues, etc.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper, units, page citations, breakdown. I should transcribe the mathematical models:
   - Defender location model: Dti | Itij=1 ~ N(Z^T tj Γ, σ_D^2)
   - Grid picker Γ_pk = [γ_o^pk, γ_b^pk, γ_h^pk]
   - Transition probability P(I_t → I_{t+1}) ∝ e^{-ΔE_{t,t+1}}
   - Ball screen emissions: X_t|S_t=1 ~ exp(λ_x), Y_t|S_t=1 ~ logN(μ_y, σ_y^2), W_t|S_t=1 ~ exp(λ_w), etc.
   - Drive emissions: V_t|R_t=1 ~ exp(λ_v), etc.
   - Post-up emissions.
   - EM algorithm E-step/M-step.
   - Confusion matrices from Tables 3-5.
   - Accuracy metrics.

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Franks et al. (2015), player tracking data installed 2013, HMMs in sports, hidden Markov models generally, Baum-Welch/Viterbi, graphical models, bond energy models (Ising model analogy?), and "multi-week traps" perhaps meaning temporal non-stationarity, roster changes, etc.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context: crisis habit regression = teams reverting to habitual defensive assignments under pressure; counter-trap = offense exploiting predicted defensive switches; clock = shot clock / game clock constraints forcing event boundaries.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical layer: court dimensions, player speeds, ball physics. Biomechanical: acceleration limits, screener setup time. Weather: indoor arena so weather veto is null, but HVAC/arena conditions. Veto proof means conditions under which the model's predictions are physically impossible or vetoed by physical constraints.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios where the model would fail or be vetoed, with predictions.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Important: No betting lines. No toy equations. Use real equations from the paper. Cite [PAGE N].

Let me draft carefully.

THINK_TRACE (>=400 words):
- Multi-hop: tracking data (25 Hz) -> spatial points -> defensive assignment HMM -> bond energy transitions -> event HMMs -> emissions -> EM/Viterbi -> confusion matrices.
- Gray-zone audit: The paper assumes Markov property for defensive assignments; double teams have higher energy (unstable) but the energy parameters are learned, not physically derived. The emission distributions assume conditional independence of X, Y, W given state, which may not hold (e.g., distance to hoop and screener distance are correlated). The "closest defender" baseline at 0.7597 accuracy shows naive proximity fails, but the fixed Gamma model at 0.9179 suggests location priors dominate. Player attraction model at 0.9541 is best but the improvement over fixed Gamma is modest (3.6 percentage points), raising identifiability concerns: is Γ capturing true attraction or just overfitting to frequent matchups? Event detection accuracies are high (0.868, 0.953, 0.994) but confusion matrices reveal class imbalance: post-up has 334 true negatives vs 8 positives, so accuracy is dominated by negative class. Precision/recall not reported. Ball screen: 79 TP, 5 FP, 23 FN, 106 TN -> precision ~94%, recall ~77%. Drive: 65 TP, 2 FP, 4 FN, 58 TN -> precision ~97%, recall ~94%. Post-up: 8 TP, 0 FP, 2 FN, 334 TN -> precision 100%, recall 80%, but tiny positive sample. The HMM assumes stationary emission parameters over a season, but player rosters, fatigue, and game-state (score differential) induce non-stationarity. Breakdown regime: when σ_D^2 → 0, defender location becomes deterministic given offender, collapsing the stochastic model; when grid picker p = g(·,·) has coarse spatial resolution, Γ_pk aliases distinct court zones. Exact singularity: if two defenders have identical Γ and offensive players swap positions, the likelihood is symmetric under defender permutation, causing label-switching non-identifiability in the HMM hidden states I_t.

SOURCE_OPERATORS_AND_EQUATIONS:
- Page 7: D_{ti} | I_{tij}=1 ∼ N(Z^T_{tj} Γ, σ_D^2). Defender i location at time t, offender j location. Gaussian with mean linear in offender features Z and player-location-specific Γ.
- Page 8: Γ_{pk} = [γ_o^{pk}, γ_b^{pk}, γ_h^{pk}], p = g(·,·) grid picker. Prior Γ_p ∼ N(μ_Γ, K). GP prior over player-location parameters.
- Page 9-10: HMM hidden states I_t. Transition P(I_t → I_{t+1}) ∝ e^{-ΔE_{t,t+1}}. Bond energy: breaking/forming bonds. 55 total matchings (wait paper says 55 (= 3125)? Actually 5^5 = 3125, but text says "Total of 55(= 3125) matchings ⇒ intractable". That seems like a typo in paper; I'll cite it verbatim but note it's likely 3125).
- Page 11: Double team higher energy than 1-on-1, more likely to switch to 1-on-1.
- Page 13: Inference: forward filtering backward sampling, Gibbs sampling over I, Γ, energy e, kernel params, σ_D^2.
- Page 16: Ball screen HMM. S_t indicator. X_t distance on-ball defender to screener. Y_t distance hoop to ball handler. W_t screener speed. Emissions listed.
- Page 17: Drive HMM. R_t indicator. V_t velocity ball handler towards hoop. Y_t distance hoop to ball handler. 1/V^+_t | R_t=1 ∼ exp(λ_v) — note odd notation "1/V+" maybe inverse velocity? Cite verbatim.
- Page 18: Post-up HMM. U_t indicator. A_t distance on-ball defender to ball handler. Y_t distance hoop to ball handler. H_t speed ball handler.
- Page 19: EM algorithm. E-step forward-backward computes posteriors. M-step MLE updates. Viterbi for most likely sequence.
- Page 22: Table 1 accuracies. Table 2 event accuracies.
- Page 23-24: Confusion matrices Tables 3-5.
- Units: 25 observations per second (Page 4). Space-time points ≈1 billion per season (Page 4). Coordinates (x,y) and (x,y,z). Distances presumably in feet (standard basketball court), though not explicitly stated; velocities in ft/s likely. I should note units are implied by tracking system but not explicitly specified in text; treat as SI-compatible spatial units.

RETROCAUSAL_GENEALOGY:
- Lineage: Franks et al. (2015) cited for defender location stochastic model. Player tracking installed 2013 (Page 4). NBA SportVU/Second Spectrum. HMMs from speech recognition (Rabiner), Baum-Welch EM, Viterbi. Bond energy models resemble Ising/Markov random fields (statistical mechanics). Graphical model on Page 12 shows D, I, Γ, µ, σ²_D, e, ϕ, ζ, T, Ω, P.
- Multi-week traps: roster changes (injuries, trades) alter Γ; opponent scouting adapts defensive schemes week-to-week, violating stationarity of transition energies e; fatigue accumulates over a week changing σ_D² and movement emissions; the model trained on one week may fail next week due to scheme adjustments (e.g., teams start switching more after film study). "Retrocausal" here means later game outcomes (playoffs adjustments) reveal that earlier event detections were mislabeled due to scheme evolution not captured in the static Γ.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under end-game pressure (shot clock < 4s, close score), defenders revert to habitual closest-defender assignment rather than optimal attraction-based Γ, causing the HMM's transition probabilities (trained on all game states) to mispredict switches.
- Counter-trap: Offense recognizes the model's energy landscape (e.g., double teams are unstable and collapse to 1-on-1) and deliberately runs drag screens to induce the predicted switch, then exploits the momentarily mismatched defender.
- Clock: Shot clock and game clock truncate event sequences; Viterbi path may force event boundaries at clock stoppages (whistles, timeouts) that are administrative, not basketball events, creating censored hidden states.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Court dimensions 94x50 ft. Maximum closing speed between two players bounded by human sprint (~10 m/s ≈ 32.8 ft/s). If V_t (drive velocity towards hoop) exceeds biomechanical max, emission likelihood should be vetoed as sensor noise.
- Biomechanical: Ball screen requires screener to establish legal position; W_t (screener speed) near zero during contact. If model flags ball screen while W_t > 5 ft/s, veto as illegal moving screen.
- Weather: Indoor arena; weather null veto. However, arena HVAC and altitude (Denver) affect ball flight z-coordinate; tracking noise in z increases. The paper models (x,y,z) but emissions for events use only x,y-derived distances and speed; z-noise can corrupt Y_t (distance hoop-ball handler) if ball is in air. Veto: during shots (z > rim height), Y_t emissions are unreliable until ball possession resets.
- Veto proof: The model lacks physical constraints; it will assign high probability to physically impossible defensive configurations if energy parameters permit. Adjudication requires hard constraints: no two defenders occupy same (x,y) within player radius (~1.5 ft), defender must be within court boundaries, etc.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
Scenario 1: Double-team persistence. Veto condition: defensive assignment I_t maintains two defenders on same offender for > 4 seconds without ball movement. Prediction: Model's bond energy transition will favor breaking double team (higher energy), so Viterbi will output a switch to 1-on-1 even if actual defensive scheme intentionally traps (e.g., "box-and-one" or trapping press). Verifiable via tracking: if ground truth shows sustained double team, model recall for trapping events will be < 0.5.
Scenario 2: End-of-shot-clock heave. Veto condition: Y_t (distance hoop-ball handler) increases while shot clock < 2s (heave/tip). Emission Y_t | R_t=1 ∼ exp(λ_y) expects decreasing distance during drive; exp distribution cannot model increasing distance under urgency. Prediction: False negative rate for late-clock drives will exceed 30% because emission support is mismatched.
Scenario 3: Substitution-induced Γ shift. Veto condition: Player substitution at timeout changes Γ_pk for a position but model retains pre-substitution Γ from Gibbs sample. Prediction: Within first 90 seconds post-substitution, defense assignment accuracy drops by > 8 percentage points relative to stationary periods, detectable by comparing Table 1 accuracy segmented by substitution events.

Word count check: I need to ensure total > 1000 words and THINK_TRACE > 400.

Let me write it out comprehensively.

Need to be careful: "STRICT INVARIANTS: ... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."

I will quote verbatim where relevant.

No betting lines. No fake ratios.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper proposes a two-layer hidden Markov model (HMM) stack built on second-generation player-tracking data. On page 4, the tracking system is described as installed in 2013, recording (x, y) locations of all 10 players, (x, y, z) of the ball at 25 observations per second, yielding roughly 1 billion space-time points per season across 1230 games. The first layer infers defensive assignments I_t: who guards whom. On page 7, the basic setting posits D_{ti} | I_{tij}=1 ∼ N(Z^T_{tj} Γ, σ_D²), citing Franks et al. (2015); defender location is Gaussian around a linear function of offender characteristics. On page 8, Γ is player- and location-dependent via a grid picker p = g(·,·), with Γ_{pk} = [γ_o^{pk}, γ_b^{pk}, γ_h^{pk}] and prior Γ_p ∼ N(μ_Γ, K), i.e., a Gaussian-process-style prior over court locations. Because there are 5^5 = 3125 possible matchings (the paper writes “55 (= 3125) matchings,” likely a typographical conflation), full transition enumeration is intractable. Pages 9–10 therefore replace the transition matrix with a bond-energy model: P(I_t → I_{t+1}) ∝ exp(−ΔE_{t,t+1}), where defensive switching means breaking and reforming bonds among four types: 1-on-1 on/off-ball and extra on/off-ball. Page 11 states double teams carry higher energy than 1-on-1 match-ups and thus more readily switch back to 1-on-1.

The second layer detects events without labels by defining binary hidden states (S_t for ball screen, R_t for drive, U_t for post-up) and specifying parametric emissions. Page 16 gives ball-screen emissions: X_t | S_t=1 ∼ exp(λ_x), Y_t | S_t=1 ∼ logN(μ_y, σ_y²), W_t | S_t=1 ∼ exp(λ_w), with null-state alternatives X_t | S_t=0 ∼ logN(μ_x, σ_x²), Y_t | S_t=0 ∼ Unif(0, θ_y), W_t | S_t=0 ∼ logN(μ_w, σ_w²). Page 17 defines drive emissions with V_t as ball-handler velocity toward the hoop: 1/V^+_t | R_t=1 ∼ exp(λ_v) (verbatim notation), Y_t | R_t=1 ∼ exp(λ_y), V_t | R_t=0 ∼ N(μ_v, σ_v²), Y_t | R_t=0 ∼ Unif(0, θ_y). Page 18 defines post-up emissions with A_t (defender-to-handler distance), Y_t, and H_t (handler speed). Page 19 describes inference via EM: E-step forward-backward computes posterior state and transition probabilities; M-step updates parameters by MLE; Viterbi recovers the most likely hidden sequence.

Gray-zone audit. The accuracy figures on page 21 show Closest Defender at 0.7597, Fixed Γ at 0.9179, and Player Attraction at 0.9541—a 3.62-point gain over the fixed-parameter baseline. This modest delta raises identifiability concerns: Γ may be absorbing static matchup frequency rather than dynamic attraction. Event detection on page 22 reports 0.868 (ball screen), 0.953 (drive), and 0.994 (post-up), but the confusion matrices on pages 23–24 reveal severe class imbalance. Post-up has 8 true positives, 0 false positives, 2 false negatives, and 334 true negatives; accuracy is dominated by the negative class, and precision/recall are not reported. Ball screen yields 79 TP, 5 FP, 23 FN, 106 TN (precision ≈ 94.0%, recall ≈ 77.5%). Drive yields 65 TP, 2 FP, 4 FN, 58 TN (precision ≈ 97.0%, recall ≈ 94.1%). The HMM assumes conditional independence of emissions given state and stationary parameters across a season. A breakdown regime occurs when σ_D² → 0: defender location becomes deterministic conditional on offender, removing the stochastic buffer and collapsing the model into a nearest-neighbor assignment. Another singularity arises under label-switching: if two defenders share identical Γ and offensive players exchange positions, the likelihood is symmetric under defender permutation, making hidden states I_t non-identifiable. The grid picker p = g(·,·) introduces spatial aliasing if court zones are too coarse, merging distinct defensive contexts into one Γ_pk. Finally, the bond-energy transition depends on learned energies e with no physical units specified; without constraints, the model can assign high probability to physically impossible defensive configurations, such as two defenders occupying identical coordinates or a defender teleporting across the court between 40 ms frames at 25 Hz.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Defender-location observation model** [PAGE 7]:
D_{ti} \,|\, I_{tij}=1 \sim \mathcal{N}\!\left(Z_{tj}^{\top}\Gamma,\ \sigma_D^2\right)
where D_{ti} is defender i’s location at time t, I_{tij}=1 indicates defender i guards offender j, Z_{tj} encodes offender characteristics, Γ is the player/location coefficient vector, and σ_D² is location noise variance.

**Player-location dependent Γ** [PAGE 8]:
\Gamma_{pk} = \begin{bmatrix} \gamma_o^{pk} & \gamma_b^{pk} & \gamma_h^{pk} \end{bmatrix}, \quad p = g(\cdot,\cdot)\ \text{(grid picker)}
\Gamma_p \sim \mathcal{N}(\mu_\Gamma, K)
Units: Γ coefficients map offender features to expected defender offset in court spatial units (feet implied by tracking system; not explicitly restated).

**Bond-energy defensive transition** [PAGES 9–10]:
P(I_t \to I_{t+1}) \propto \exp(-\Delta E_{t,t+1})
ΔE is energy difference between breaking old defensive bonds and forming new ones. Four bond types: 1-on-1 on-ball, 1-on-1 off-ball, extra on-ball, extra off-ball. Total matchings noted as 3125 (paper text: “55 (= 3125) matchings”) [PAGE 10], rendering direct transition-matrix learning intractable.

**Graphical model generative steps** [PAGES 12–13]:
1. Sample Γ_{pk} ∼ N(μ_Γ, K) for player p, location k.
2. Sample defensive assignment sequence I_t via energy-based transition.
3. Sample D_{ti} | I_{tij}=1 ∼ N(Z_{tj}^{⊤} Γ_{g(t,j)}, σ_D²).
4. Gibbs/iterative updates over energy parameters e, kernel parameters, σ_D² using forward-filtering backward-sampling [PAGE 13].

**Ball-screen HMM emissions** [PAGE 16]:
X_t | S_t=1 ∼ exp(λ_x), \quad Y_t | S_t=1 ∼ \log\mathcal{N}(\mu_y, \sigma_y^2), \quad W_t | S_t=1 ∼ exp(λ_w)
X_t | S_t=0 ∼ \log\mathcal{N}(\mu_x, \sigma_x^2), \quad Y_t | S_t=0 ∼ Unif(0, \theta_y), \quad W_t | S_t=0 ∼ \log\mathcal{N}(\mu_w, \sigma_w^2)
X_t: distance on-ball defender to potential screener; Y_t: distance hoop to ball handler; W_t: speed of potential screener. Spatial units in feet; speed units ft/s implied.

**Drive HMM emissions** [PAGE 17]:
1/V^+_t | R_t=1 ∼ exp(λ_v), \quad Y_t | R_t=1 ∼ exp(λ_y)
V_t | R_t=0 ∼ \mathcal{N}(\mu_v, \sigma_v^2), \quad Y_t | R_t=0 ∼ Unif(0, \theta_y)
V_t: velocity of ball handler toward hoop. The null-state velocity is Gaussian, permitting near-zero or negative radial velocity; the positive-drive state uses an inverse-velocity exponential support.

**Post-up HMM emissions** [PAGE 18]:
A_t | U_t=1 ∼ exp(λ_a), \quad Y_t | U_t=1 ∼ \log\mathcal{N}(\mu_y, \sigma_y^2), \quad H_t | U_t=1 ∼ exp(λ_h)
A_t | U_t=0 ∼ \log\mathcal{N}(\mu_a, \sigma_a^2), \quad Y_t | U_t=0 ∼ Unif(0, \theta), \quad H_t | U_t=0 ∼ \log\mathcal{N}(\mu_h, \sigma_h^2)
A_t: distance on-ball defender to ball handler; H_t: ball-handler speed.

**Inference** [PAGE 19]: E-step computes \hat{P}(h_0|x,y,z,\dots), \hat{P}(h_t,h_{t+1}|x,y,z,\dots), and \hat{P}(h'|h) via forward-backward; M-step updates by MLE; Viterbi decodes h^* = (h_0,\dots,h_T).

**Accuracy and confusion matrices** [PAGES 22–24]:
Table 1: Closest Defender 0.7597; Fixed Γ (Franks et al.) 0.9179; Player Attraction 0.9541.
Table 2: Ball Screen 0.868; Drive 0.953; Post-up 0.994.
Table 3 (Ball Screen): TP=79, FP=5, FN=23, TN=106.
Table 4 (Drive): TP=65, FP=2, FN=4, TN=58.
Table 5 (Post-up): TP=8, FP=0, FN=2, TN=334.
Tracking cadence: 25 observations/second; ≈1 billion space-time points per season [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces to Franks et al. (2015), cited on page 7 for the stochastic defender-location model D_{ti} | I_{tij}=1 ∼ N(Z^T Γ, σ_D²). That work established that defender positioning is a function of offensive player characteristics rather than fixed court zones. The present paper extends it by making Γ player- and location-dependent through a Gaussian-process prior and by embedding the assignment inside an HMM whose transitions are governed by a bond-energy principle borrowed from statistical mechanics (analogous to Ising/Markov random-field spin systems): bonds form and break with probability proportional to exp(−ΔE). Inference machinery—forward-backward, Baum-Welch-style EM, and Viterbi decoding—comes from the speech-recognition and computational-linguistics tradition (Rabiner et al.), applied here to 25-Hz NBA tracking data that became league-wide after the 2013 installation noted on page 4.

Multi-week traps arise from three non-stationarities the static HMM does not model. First, roster substitution: Γ_p is tied to player identity and court location, but injuries, trades, and rotation changes alter the active Γ set week-to-week; a Γ learned from December games mis-specifies January lineups. Second, scheme adaptation: opponents study film and adjust defensive switching habits, so the bond energies e learned in early weeks become biased by later tactical counters, creating a retrocausal loop in which Week 10 event labels are systematically misread by a Week 1–4 model. Third, fatigue accumulation: σ_D² and movement emissions (V_t, W_t, H_t) drift as players accumulate minutes over a multi-week stretch, violating the stationary Gaussian/exponential assumptions. The paper’s season-wide accuracy aggregates (Tables 1–2) mask this intra-season decay. Without weekly re-estimation of Γ and e, the model suffers from concept drift that looks like “random error” in cross-sectional accuracy but is structurally predictable.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under end-game pressure—shot clock under 4 seconds or score within 3 points—defenders regress to the closest-defender heuristic rather than executing the attraction-based Γ assignment encoded in the model. Because the HMM transition energies e are estimated across all game states, crisis-time switches are underweighted relative to the habitual baseline, producing false negatives in drive and ball-screen detection exactly when those events are most decision-relevant.

Counter-trap: An offense with access to the model’s inferred energy landscape can deliberately induce predicted transitions. Since page 11 states double teams are higher-energy and thus unstable, an offense can run a drag screen to bait a double team, knowing the model’s own dynamics favor a rapid collapse back to 1-on-1. The moment the HMM Viterbi path registers the “switch to 1-on-1,” the offensive player attacks the momentarily mismatched defender before the tracking system and model consensus re-converge. The model’s internal logic becomes an exploitable signal.

Clock: The shot clock and game clock impose hard truncation on hidden-state sequences. Page 19’s Viterbi decode produces a most likely sequence h_0,…,h_T, but whistles, timeouts, and shot-clock expirations insert administrative boundaries that do not correspond to basketball events. The HMM has no explicit censoring mechanism for clock stoppages; it will either force an event-state transition at a whistle or smear a single event across a stoppage, biasing transition counts and emission means (e.g., Y_t distance to hoop resets after a made basket but the hidden-state sequence may not align).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: A standard NBA court is 94 ft × 50 ft. Human sprint speed is bounded near 10 m/s (~32.8 ft/s), so any drive emission V_t > 35 ft/s sustained over multiple 40-ms frames should be vetoed as sensor noise rather than treated as exp(λ_v) evidence. Defenders cannot occupy the same (x,y) point within one player radius (~1.5 ft); configurations where two D_{ti} samples converge within that radius violate physical exclusion and must be vetoed regardless of bond energy.

Biomechanical layer: A legal ball screen requires the screener to establish a stationary position before contact; therefore W_t (screener speed) should be near zero during the contact window of S_t=1. If the HMM flags a ball screen while W_t > 5 ft/s, the detection should be vetoed as an illegal moving screen or tracking ghost. Similarly, post-up events require low handler speed H_t; exp(λ_h) support includes high speeds, but biomechanically a post-up is a back-to-the-basket isolation with H_t bounded near walking pace (~3–5 ft/s). High-speed H_t emissions under U_t=1 should be vetoed.

Weather layer: Games are indoors, so meteorological weather is a null veto. However, arena HVAC and altitude (e.g., Denver) affect ball flight in the z-coordinate. The model tracks (x,y,z) on page 4 but event emissions use only x/y-derived distances (X_t, Y_t, A_t) and speeds. During shot attempts when z exceeds rim height (~10 ft), tracking noise in z increases and Y_t (hoop-to-ball-handler distance) becomes unreliable until possession resets. Any event inference during the airborne interval of a shot should be vetoed or down-weighted because Y_t is computed to a handler who no longer has possession.

Veto proof: The paper’s model contains no hard physical constraints; the energy-based transition P ∝ exp(−ΔE) can assign nonzero probability to teleporting defenders and overlapping bodies if σ_D² and learned energies permit. A veto-proof version requires adding indicator constraints: I_t valid only if all defenders remain inside court boundaries, pairwise defender separation ≥ player diameter, and defender-offender distance bounded by maximal closing speed × Δt (0.04 s at 25 Hz). Without these, the model is not physically admissible.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Intentional double-team persistence (trap defense).
Veto condition: Defensive assignment I_t maintains two defenders guarding the same offender for more than 4 seconds while the ball remains in play. RLVR veto rule: if sustained double team is confirmed by tracking (two D_{ti} within defender radius of same offender), the model must suppress any Viterbi transition to 1-on-1 driven solely by the page-11 claim that “double team match-ups have higher energy … more likely to switch to 1-1 match-up.”
Prediction: On sequences meeting the veto condition, model recall for trap events will fall below 0.50, and precision for “switch to 1-on-1” transitions will drop below 0.60, because the learned bond energy systematically favors breaking the trap contrary to the coach’s intentional scheme.

Scenario 2 — Late shot-clock heave with increasing Y_t.
Veto condition: Shot clock < 2 seconds and ball-handler distance to hoop Y_t is increasing (long heave or tip attempt). RLVR veto rule: the drive emission Y_t | R_t=1 ∼ exp(λ_y) has support only for decreasing distance (or stationary exponential decay); an increasing Y_t under time pressure is assigned near-zero likelihood and should be vetoed as a misclassified state rather than forced into R_t=0.
Prediction: For drives initiated with < 4 seconds on the shot clock, false-negative rate will exceed 30%, because the emission family cannot represent the urgent, distance-increasing motion profile and the HMM will label the sequence as non-drive.

Scenario 3 — Post-substitution Γ mismatch.
Veto condition: A player substitution occurs at a timeout; within the next 90 seconds, the model continues using the pre-substitution Γ_p sample from the Gibbs chain. RLVR veto rule: if tracking shows a new player entering the defensive assignment, the model must re-draw Γ_pk for that player’s position from the prior Γ_p ∼ N(μ_Γ, K) rather than retaining the substituted player’s posterior.
Prediction: Defense-assignment accuracy in the first 90 seconds after a substitution will decline by more than 8 percentage points relative to stationary periods (baseline 0.9541 on page 21), producing a segmented accuracy below 0.87 and confirming that the static Γ prior fails to adapt to personnel changes within a single game.
</RLVR_COUNTERFACTUAL_VETOES>
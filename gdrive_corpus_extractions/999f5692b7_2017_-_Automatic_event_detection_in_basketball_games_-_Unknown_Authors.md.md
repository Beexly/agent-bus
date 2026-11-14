---
source: "2017 - Automatic event detection in basketball games - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5167
---

<NATIVE_REASONING>
The user wants a response based on the provided source text about automatic event detection in basketball games. They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 3" but the source text seems to contain pages 1-22. I need to cite exact [PAGE N] markers. The source text has page markers like "1", "2", etc. embedded. Let me parse the page numbers from the source text.

Looking at the source text, I see page numbers scattered:
- Page 1: "1" after Introduction/Motivation
- Page 2: "2" after Player Tracking Data section
- Page 3: "3" after Defense Assignment title
- Page 4: "4" after Basic Setting
- Page 5: "5" after Basic Setting - player and location dependency (picture text)
- Page 6: "6" after Hidden Markov Model
- Page 7: "7" after Transition Probability
- Page 8: "8" after Transition Probability: Example
- Page 9: "9" after Graphical Model: Defense Assignment
- Page 10: "10" after Inference: Defense Assignment
- Page 11: "11" after Event Detection
- Page 12: "12" after Ball Screen
- Page 13: "13" after Drive
- Page 14: "14" after Post-up (table)
- Page 15: "15" after Inference
- Page 16: "16" after Estimated Defense Assignments and Events
- Page 17: "17" after Accuracy Table 1 and Table 2
- Page 18: "18" after Table 3 / Table 4
- Page 19: "19" after Table 5
- Page 20: "20" after Γ Heatmap
- Page 21: "21" after Γ Results for Golden State Warriors / Cleveland Cavaliers
- Page 22: "22" after Questions?

Actually, looking more carefully, the page numbers appear after sections. For example:
- "1" appears right after Motivation section -> Page 1
- "2" appears right after Player Tracking Data section -> Page 2
- "3" appears right after Defense Attraction title -> Page 3
- etc.

The user says "PAGES: 3" but maybe they mean they provided 3 pages? Or maybe they want me to focus on pages? Actually, they said "DRIVE SOURCE: ... PAGES: 3" which might mean the document has 3 pages? But the text clearly shows 22 pages. I will treat the page numbers as they appear in the text (1-22) and cite them as [PAGE N].

Now, regarding content: I must not mention betting lines. I must not invent toy equations. I must use formal LaTeX equations from the source or general formalism, with units and assumptions. I must cite exact page markers and verbatim quotes.

The XML sections must be present and total >= 1000 words, with THINK_TRACE >= 400 words.

Let me plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the paper's methodology, point out assumptions, identifiability issues, the bond energy model, HMM inference, emission distributions for ball screen/drive/post-up, confusion matrix issues (class imbalance), etc. Must be >= 400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll transcribe the key equations from the source with page citations:
- Page 4: \( D_{ti} | I_{tij}=1 \sim N(Z_{tj}^\top \Gamma_{g(t,j)}, \sigma_D^2) \)
- Page 5: \( \Gamma_p \sim N(\mu_\Gamma, K) \)
- Page 6: HMM states \( I_t \)
- Page 7: Bond energy transition probability proportional to energy difference
- Page 11: Binary hidden state for event
- Page 12: Ball screen emissions: \( X_t|S_t=1 \sim \exp(\lambda_x) \), \( Y_t|S_t=1 \sim \log N(\mu_y, \sigma_y^2) \), \( W_t|S_t=1 \sim \exp(\lambda_w) \), and null hypotheses.
- Page 13: Drive emissions: \( V_t^+|R_t=1 \sim \exp(\lambda_v) \), etc.
- Page 14: Post-up emissions table.
- Page 15: EM algorithm steps.
- Page 17: Accuracy tables and confusion matrices (Tables 3-5).
- Units: locations in meters (implied by tracking), time in seconds (25 Hz), velocities in m/s, distances in meters. Need to state these as assumptions since the paper doesn't explicitly say meters but tracking data usually is in feet or meters; I'll state assumptions clearly.
- Breakdown regimes: intractability of \(5^5 = 3125\) matchings (Page 7), singularity when \( \sigma_D^2 \to 0 \), kernel matrix K not positive definite, emission parameter identifiability when classes are imbalanced (e.g., post-up has 8 true positives, 2 false positives, 334 true negatives - Page 19).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Franks et al. (FixedΓModel), player tracking installed in 2013 (Page 2), New England Symposium on Statistics in Sports (NESSIS), connection to hidden Markov models in speech recognition, EM algorithm, Viterbi, etc. Multi-week traps: overfitting to a single game or team, temporal drift in player roles, defensive scheme changes across a season.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. "Crisis habit regression" might refer to teams reverting to default defensive assignments under pressure. "Counter-trap" could be offensive actions designed to exploit the estimated defense assignments. "Clock" refers to game clock / shot clock constraints. I need to weave this in without betting lines. I can discuss how offensive coordinators might adapt to automatic detection systems, adversarial dynamics, etc. Must be careful not to mention odds.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is minimal but HVAC/humidity could affect ball handling? Physical/biomechanical: player tracking data noise, occlusion, 25 Hz sampling limits (Nyquist for fast movements), defender location model assumes Gaussian around offensive attraction (Page 4), which breaks down during screens or switches. Veto conditions: if sampling rate < 2x max frequency of movement, aliasing; if defender off-camera, missing data; if \( \sigma_D^2 \) misspecified, posterior collapses.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to propose 3 counterfactual veto scenarios where the model would fail, with verifiable conditions and predictions. Example:
1. Veto if defender-ball handler distance \(X_t\) exceeds court diagonal (~28.7m for NBA court 28.7m x 15.2m? Actually NBA court is 94 ft x 50 ft = 28.65m x 15.24m). Prediction: ball screen detection false positive rate spikes.
2. Veto if \( \sigma_D^2 \) estimated from stationary periods but applied to transition periods; prediction: defense assignment accuracy drops below 0.7597 (closest defender baseline).
3. Veto if emission distributions for post-up \(H_t|U_t=1 \sim \exp(\lambda_h)\) conflict with observed multimodal speed distribution (post-up players may be stationary then burst); prediction: posterior \(P(U_t=1|H_t)\) collapses to prior.

Total word count >= 1000 across sections. THINK_TRACE >= 400 words.

I need to be careful about verbatim quotes. I can quote short phrases from the source with page citations.

Let's start drafting.

Section 1: THINK_TRACE (>=400 words)
I'll write a deep analysis. Must be >= 400 words. I'll aim for ~500 words.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Formal LaTeX blocks with citations.

Section 3: RETROCAUSAL_GENEALOGY
Historical lineage.

Section 4: RECURSIVE_THEORY_OF_MIND
Crisis habit regression vs counter-trap vs clock.

Section 5: CROSS_LAYER_VETO_ADJUDICATION
Veto proof.

Section 6: RLVR_COUNTERFACTUAL_VETOES
3 scenarios.

No betting lines anywhere.

Let me check page citations carefully from source text.
Page 1: Motivation text ends with "1". So [PAGE 1] covers Introduction/Motivation.
Page 2: Player Tracking Data ends with "2". So [PAGE 2] covers tracking specs.
Page 3: Defense Assignment title + "Defense Attraction in Basketball" + "3". So [PAGE 3] covers Defense Assignment section start.
Page 4: Basic Setting + "4". So [PAGE 4] covers basic setting definitions.
Page 5: Basic Setting - player and location dependency + picture text + "5". So [PAGE 5] covers Γ model.
Page 6: Hidden Markov Model + "6". So [PAGE 6] covers HMM structure.
Page 7: Transition Probability + 3125 + "7". So [PAGE 7] covers bond energy and intractability.
Page 8: Transition Probability: Example + figure + "8". So [PAGE 8] covers double team energy.
Page 9: Graphical Model + picture text + "9". So [PAGE 9] covers graphical model and sampling.
Page 10: Inference: Defense Assignment + "10". So [PAGE 10] covers inference algorithm.
Page 11: Event Detection + "11". So [PAGE 11] covers event detection HMM setup.
Page 12: Ball Screen + picture text + equations + "12". So [PAGE 12] covers ball screen emissions.
Page 13: Drive + picture text + equations + "13". So [PAGE 13] covers drive emissions.
Page 14: Post-up + picture text + table + "14". So [PAGE 14] covers post-up emissions.
Page 15: Inference + EM steps + "15". So [PAGE 15] covers event inference EM/Viterbi.
Page 16: Estimated Defense Assignments and Events + "16". So [PAGE 16] covers qualitative results.
Page 17: Accuracy tables 1-2 + "17". So [PAGE 17] covers accuracy comparison.
Page 18: Tables 3-4 + "18". So [PAGE 18] covers confusion matrices ball screen/drive.
Page 19: Table 5 + "19". So [PAGE 19] covers post-up confusion matrix.
Page 20: Γ Heatmap + "20". So [PAGE 20] covers heatmaps.
Page 21: Γ Results Warriors/Cavaliers + "21". So [PAGE 21] covers player-level Γ results.
Page 22: Questions? + "22". So [PAGE 22] covers end.

I will cite these.

Now let's write. Ensure no mention of betting. Use formal tone.

Word count check: I'll need to be generous.

THINK_TRACE content:
- Multi-hop derivation: tracking data -> defender location model -> bond energy HMM -> event detection HMM -> EM inference.
- Gray-zone audit: assumptions (Gaussian defender locations, exponential/log-normal emissions), identifiability of bond energies, class imbalance in post-up (8 vs 334), 5^5 state space reduction, 25 Hz temporal resolution limits, stationarity of Γ across a game/session.
- Verbatim quotes: "Tracks: (x,y) locations of all 10 players (x,y,z) locations of ball 25 observations per second" [PAGE 2]; "Total of 5^5 (= 3125) matchings ⇒ intractable to learn probabilities for all transitions" [PAGE 7]; "Double team match-ups have higher energy (more unstable) than 1-1 match-up. Hence, more likely to switch to 1-1 match-up" [PAGE 8].

SOURCE_OPERATORS_AND_EQUATIONS content:
- List equations with \begin{align} etc.
- State units: positions in meters (assumed from tracking), time in seconds (25 Hz => Δt=0.04s), velocities m/s.
- Assumptions: conditional independence of emissions given hidden state, Gaussian observation noise for defender locations, Markov property for I_t and S_t/R_t/U_t.
- Breakdown regimes: σ_D^2 → 0 (degenerate posterior), K not positive definite (GP prior singular), λ parameters near zero (flat exponential), class imbalance causing MLE bias in EM.

RETROCAUSAL_GENEALOGY content:
- Franks et al. FixedΓModel baseline (Page 17).
- Player tracking installed 2013 (Page 2).
- NESSIS venue.
- HMM lineage: Rabiner, speech recognition; EM algorithm (Dempster et al.); Viterbi.
- Bond energy models in statistical physics (Ising-like).
- Multi-week traps: roster changes, coaching adjustments, defensive scheme evolution, tracking calibration drift across arenas.

RECURSIVE_THEORY_OF_MIND content:
- Crisis habit regression: Under defensive breakdown (e.g., double team), offense regresses to iso or pick-and-roll; model may mislabel because emission distributions assume canonical ball screen parameters.
- Counter-trap: Offensive coordinator aware of detection system could intentionally trigger false positives (e.g., fake screens) to degrade estimator credibility.
- Clock: Shot clock / game clock constraints compress event windows; HMM assumes stationary transition probabilities but near end of shot clock, transition dynamics shift (desperation drives).

CROSS_LAYER_VETO_ADJUDICATION content:
- Physical layer: Court dimensions (NBA 28.65m x 15.24m). If estimated defender location outside court bounds, veto.
- Biomechanical: Max human speed ~10 m/s; at 25 Hz, max displacement per frame 0.4m. If observed displacement > 0.4m between frames, tracking swap or dropout -> veto.
- Weather: Indoor arena, but HVAC failure affecting ball grip? Not relevant. Maybe lighting/camera glare causing occlusion.
- Adjudication: veto if Z matrix rank deficient, if Γ posterior covariance blows up, if emission likelihood ratio < threshold.

RLVR_COUNTERFACTUAL_VETOES content:
- 3 scenarios with formal conditions and predictions.
Scenario 1: Ball screen false positive under off-ball screen. Condition: W_t (screener speed) low but X_t small due to off-ball movement without screen. Prediction: precision drops below 0.5 (current precision 79/(79+23)=0.775).
Scenario 2: Drive vs post-up confusion near basket. Condition: Y_t small (<3m) and V_t^+ high but player backs down (post-up). Prediction: drive recall degrades below 0.95.
Scenario 3: Defense assignment collapse during substitution. Condition: I_t changes at substitution time but Γ fixed per player-location. Prediction: assignment accuracy drops toward closest defender baseline 0.7597 (Page 17).

Make sure each section is clearly labeled with the exact XML tags.

Let's draft with attention to length. I'll write generously to ensure >1000 words total and THINK_TRACE >400 words.

I need to ensure no fake equations. All equations should be from source or clearly stated as assumptions with proper notation.

Let's begin writing.

One more check: The user said "PAGES: 3" but source has 22 pages. I will cite pages as they appear in the text (1-22). If they literally meant only 3 pages were provided, I still have the full text in the prompt, so I can reference all page markers visible.

Also, "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I won't invent ratios like Force/Fatigue. I'll only use equations from the paper or clearly defined statistical formalism.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper proceeds in four layered hops. First, raw player-tracking observations are reduced to defender-location likelihoods conditioned on hidden man-to-man assignments. Page 2 states the sensor records “( x, y ) locations of all 10 players,” “( x, y, z ) locations of ball,” and “25 observations per second,” producing roughly 1 billion space-time points per season across 1230 games [PAGE 2]. Page 4 formalizes the observation model: given defender i guards offender j at time t, the defender location is Gaussian around an offensive-attraction feature, D_{ti} | I_{tij}=1 ~ N( Z_{tj}^{T} Γ_{g(t,j)}, σ_D^2 ) [PAGE 4]. This is the first critical gray zone: the model assumes defender placement is explained entirely by offender characteristics through a grid picker p = g(·,·) and a player-location dependent vector Γ_{pk} = [γ_{pk}^{o}, γ_{pk}^{b}, γ_{pk}^{h}] [PAGE 5]. If a defender is playing help defense rather than man-to-man, the Gaussian mean is misspecified and σ_D^2 absorbs structural bias rather than measurement noise.

Second, the hidden assignment process I_t is modeled as a hidden Markov model over defensive mappings [PAGE 6]. Because there are 5^5 = 3125 possible matchings, full transition probabilities are intractable [PAGE 7]. The authors replace the transition kernel with a bond-energy construction: a match-up is a bond, switching breaks one bond and forms another, and transition probability is proportional to an energy difference [PAGE 7]. Page 8 gives the physical intuition: “Double team match-ups have higher energy (more unstable) than 1-1 match-up. Hence, more likely to switch to 1-1 match-up” [PAGE 8]. The gray zone here is energetic identifiability. Bond energies e are updated given samples of I in a Gibbs-style loop [PAGE 10], but without labeled defensive switches, e and Γ can trade off against one another: a high-energy double team could reflect either an actual unstable alignment or an overly restrictive Γ that forces implausible defender locations.

Third, event detection uses a separate binary HMM for each event type—ball screen S_t, drive R_t, post-up U_t—where the hidden state indicates whether the event is occurring [PAGE 11]. Emission distributions are parametric and event-specific. For a ball screen, X_t (defender-screener distance), Y_t (hoop-handler distance), and W_t (screener speed) follow exponential or log-normal laws under S_t=1 and alternative distributions under S_t=0 [PAGE 12]. For a drive, V_t^+ (velocity toward hoop) and Y_t are exponential under R_t=1 [PAGE 13]. For a post-up, A_t (defender-handler distance), Y_t, and H_t (handler speed) carry the emission load [PAGE 14]. The gray zone is conditional independence: the model treats X_t, Y_t, W_t as independent given S_t, yet in a real screen the screener’s speed W_t is mechanically coupled to the defender’s navigation around the screen, violating the emission independence assumption and inflating confidence in the Viterbi path.

Fourth, inference alternates between forward-filtering backward-sampling for I_t [PAGE 10] and an EM routine with Viterbi decoding for event sequences [PAGE 15]. The E step computes posterior state marginals; the M step updates emission and transition parameters by MLE [PAGE 15]. The gray-zone audit must emphasize the confusion matrices. Ball screen detection yields 79 true positives, 5 false negatives, 23 false positives, 106 true negatives [PAGE 18]. Drive detection yields 65, 2, 4, 58 [PAGE 18]. Post-up detection yields 8, 0, 2, 334 [PAGE 19]. The post-up class is extremely imbalanced: 8 positives versus 334 negatives. Accuracy of 0.994 [PAGE 17] is therefore almost entirely driven by true negatives; the model could achieve near-perfect accuracy by never predicting a post-up. The exponential emission H_t|U_t=1 ~ exp(λ_h) [PAGE 14] assumes a monotonically decreasing speed density, which is implausible for a post-up that often begins stationary and then bursts, suggesting the likelihood surface is misspecified precisely where the signal is rarest.

Temporal resolution is another breakdown regime. At 25 Hz, Δt = 0.04 s. If a defender or screener accelerates faster than the sampling theorem permits for the feature of interest, X_t and W_t are aliased, and the exponential/log-normal emission fits absorb aliasing error into λ and σ parameters. Finally, the stationarity assumption for Γ over the inference window is fragile: player roles and defensive schemes drift across a game and across weeks, yet Γ is treated as fixed within the EM iterations unless re-estimated on new data [PAGE 9, PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Operator definitions:
- I_{tij} ∈ {0,1}: indicator that defender i guards offender j at time t [PAGE 4].
- D_{ti}: 2D spatial location of defender i at time t [PAGE 4].
- O_{tj}: 2D spatial location of offender j at time t [PAGE 4].
- Z_{tj}: feature vector of offender j at time t entering the attraction mean [PAGE 4].
- g(t,j): grid-picker function mapping time-offender pair to location cell p [PAGE 5].
- Γ_{pk} = [γ_{pk}^{o}, γ_{pk}^{b}, γ_{pk}^{h}]: player- and location-dependent attraction vector [PAGE 5].
- σ_D^2: defender-location observation variance (units: m^2 if positions are in meters) [PAGE 4, PAGE 5].
- K: covariance kernel for the Gaussian process prior over Γ_p [PAGE 5].
- μ_Γ: prior mean for Γ_p [PAGE 5].
- S_t, R_t, U_t: binary hidden event indicators for ball screen, drive, post-up [PAGE 11-14].
- X_t, Y_t, W_t, V_t, A_t, H_t: observed emission features (distances in m, speeds in m/s under SI assumption) [PAGE 12-14].

Core equations from the text:

Defender location model (Page 4):
\[
D_{ti} \mid I_{tij}=1 \;\sim\; \mathcal{N}\!\left( Z_{tj}^{\top} \Gamma_{g(t,j)},\; \sigma_D^2 \right)
\]
Units: D_{ti}, Z in meters; σ_D^2 in m^2.

GP prior over attraction parameters (Page 5):
\[
\Gamma_{pk} \;\sim\; \mathcal{N}\!\left( \mu_\Gamma,\; K \right), \qquad
\Gamma_p = [\Gamma_{p1},\dots,\Gamma_{pK}]
\]

Ball screen emissions (Page 12):
\[
\begin{aligned}
X_t \mid S_t=1 &\sim \exp(\lambda_x), &
Y_t \mid S_t=1 &\sim \log\mathcal{N}(\mu_y,\sigma_y^2), &
W_t \mid S_t=1 &\sim \exp(\lambda_w),\\
X_t \mid S_t=0 &\sim \log\mathcal{N}(\mu_x,\sigma_X^2), &
Y_t \mid S_t=0 &\sim \mathrm{Unif}(0,\theta_y), &
W_t \mid S_t=0 &\sim \log\mathcal{N}(\mu_w,\sigma_w^2).
\end{aligned}
\]

Drive emissions (Page 13):
\[
\begin{aligned}
V_t^+ \mid R_t=1 &\sim \exp(\lambda_v), &
Y_t \mid R_t=1 &\sim \exp(\lambda_y),\\
V_t \mid R_t=0 &\sim \mathcal{N}(\mu_v,\sigma_v^2), &
Y_t \mid R_t=0 &\sim \mathrm{Unif}(0,\theta_y).
\end{aligned}
\]

Post-up emissions (Page 14):
\[
\begin{aligned}
A_t \mid U_t=1 &\sim \exp(\lambda_a), &
Y_t \mid U_t=1 &\sim \log\mathcal{N}(\mu_y,\sigma_y^2), &
H_t \mid U_t=1 &\sim \exp(\lambda_h),\\
A_t \mid U_t=0 &\sim \log\mathcal{N}(\mu_a,\sigma_a^2), &
Y_t \mid U_t=0 &\sim \mathrm{Unif}(0,\theta), &
H_t \mid U_t=0 &\sim \log\mathcal{N}(\mu_h,\sigma_h^2).
\end{aligned}
\]

Transition structure (Pages 7-8): transition probability ∝ exp(energy difference) over bond states; full 5^5 matching space is intractable [PAGE 7].

EM / Viterbi (Page 15): initialize P̂(h_0), P̂(x|h), P̂(h'|h); iterate E-step forward-backward and M-step MLE; decode via Viterbi.

Accuracy and confusion matrices (Pages 17-19):
- Defense assignment: Closest Defender 0.7597; Fixed Γ Model 0.9179; Player Attraction Model 0.9541 [PAGE 17].
- Event detection: Ball Screen 0.868; Drive 0.953; Post-up 0.994 [PAGE 17].
- Ball screen confusion: TP=79, FN=5, FP=23, TN=106 [PAGE 18].
- Drive confusion: TP=65, FN=2, FP=4, TN=58 [PAGE 18].
- Post-up confusion: TP=8, FN=0, FP=2, TN=334 [PAGE 19].

Assumptions:
1. Conditional independence of emission features given the binary event state [PAGE 12-14].
2. Markovian evolution of defensive assignment I_t [PAGE 6].
3. Gaussian observation noise for defender locations with constant σ_D^2 [PAGE 4].
4. Positions recorded in meters; time step Δt = 1/25 s = 0.04 s; velocities in m/s (SI convention inferred from tracking hardware specs, not explicitly restated in the PDF).

Exact singularity / breakdown regimes:
- σ_D^2 → 0: posterior over I_t collapses to deterministic assignment; any tracking noise causes hard misclassification.
- K not positive definite: GP prior is improper; Γ samples undefined.
- λ_x, λ_w, λ_v, λ_y, λ_a, λ_h → 0: exponential emissions become uniform over their support, erasing event discriminability.
- Class imbalance: post-up prior P(U_t=1) ≈ 8/(8+334) ≈ 0.023; MLE in the M-step is dominated by negatives, biasing emission parameters toward the null distribution [PAGE 19].
- Aliasing: if a player’s between-frame displacement exceeds half the Nyquist resolvable distance for the feature bandwidth, X_t and W_t are corrupted before entering the likelihood [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week exposure traps.

The paper sits in a direct methodological genealogy. The Fixed Γ Model baseline is attributed to Franks et al. [PAGE 17], placing this work within the lineage of player-tracking analytics that began when optical tracking was installed league-wide in 2013 [PAGE 2]. The use of hidden Markov models for defensive assignment inherits from speech-recognition and computational-linguistics traditions (Rabiner-style HMMs), adapted here to a combinatorial state space of defensive mappings [PAGE 6]. The bond-energy transition is an explicit import from statistical physics: Ising-like bond formation and breaking, where “double team match-ups have higher energy” and are therefore unstable relative to one-on-one bonds [PAGE 8]. The inference machinery—forward-filtering backward-sampling, EM, and Viterbi decoding—is the standard Baum-Welch / Viterbi toolkit applied to continuous emissions with event-specific exponential and log-normal families [PAGE 10, PAGE 15].

A multi-week trap is embedded in the stationarity of Γ. The model estimates player-location attraction vectors Γ_{pk} from tracking data [PAGE 5, PAGES 20-21], but these vectors are treated as fixed across the inference window. Over multiple weeks, several threats accumulate: (1) roster turnover and injury substitutions change the effective defender pool, making Γ stale; (2) coaching adjustments alter defensive scheme (e.g., switching frequency), which the bond-energy parameters e must re-learn but only if new transitions are observed frequently enough [PAGE 7]; (3) tracking-camera calibration drifts between arenas, shifting the spatial origin and scale of D_{ti} and O_{tj}, which biases Z_{tj}^T Γ [PAGE 2]; (4) offensive role evolution—e.g., a player moving from off-ball to on-ball primary handler—changes the meaning of γ^o versus γ^b, yet the prior Γ_p ~ N(μ_Γ, K) shrinks all players toward a common mean unless sufficient new data overwhelm it [PAGE 5].

Another retro-causal trap is the accuracy metric itself. Reporting overall accuracy of 0.994 for post-up detection [PAGE 17] masks a 2% false-positive rate on a rare class [PAGE 19]. Over weeks, as teams deliberately run more post-up actions to exploit a defensive weakness, the prevalence shifts upward; the model, trained on a low-prevalence window, will under-call post-ups because its emission thresholds were fit to a historical base rate that no longer holds. This is a classic prior-likelihood mismatch under non-stationary event incidence.

The heatmap results for Golden State and Cleveland [PAGES 20-21] further illustrate lineage: high γ_o for Curry, Thompson, Irving, Smith, James reflects offensive gravity, a concept formalized in earlier tracking work but here embedded in the Gaussian mean for defender placement. The model therefore inherits not just HMM machinery but a specific sports-science narrative that offensive talent reshapes defensive geometry.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

Recursive theory of mind asks what the offense believes the defense believes about event detection, and how that belief cascade distorts the very signals the HMM relies on.

Crisis habit regression: when the defensive assignment posterior becomes uncertain—e.g., during a scramble after a loose ball or a broken play—the defense tends to regress to the nearest-man heuristic, which the paper’s baseline achieves at 0.7597 accuracy [PAGE 17]. Under that regression, the Gaussian attraction model D_{ti} | I_{tij}=1 ~ N(Z^T Γ, σ_D^2) [PAGE 4] still assumes structured offensive attraction, but defenders are actually reacting to proximity rather than assignment. The HMM will misattribute proximity-driven clustering to bonds, inflating the posterior probability of double teams and producing spurious switching events in the Viterbi path. The model’s crisis failure mode is therefore over-detection of defensive instability precisely when the play is chaotic.

Counter-trap: an offensive coordinator aware that an opponent is running automatic event detection can deliberately engineer false-positive emissions. For instance, a fake ball screen—where a player sets a stationary pick but immediately rolls away without engaging—produces a small X_t (defender-screener distance) and low W_t (screener speed) mixture that conflicts with the emission specification X_t | S_t=1 ~ exp(λ_x), W_t | S_t=1 ~ exp(λ_w) [PAGE 12]. Repeated fake screens train the detector’s Viterbi decoder to flag non-events, degrading precision below the observed 79/(79+23) ≈ 0.775 [PAGE 18]. The offense thereby manipulates the opponent’s hidden-state estimate without changing the underlying physical game state, a recursive deception layer absent from the paper’s generative assumptions.

Clock: the HMM assumes stationary transition probabilities P(h'|h) across the sequence [PAGE 15], but game-clock and shot-clock constraints impose non-stationarity. In the last five seconds of a shot clock, drives become desperate and velocities V_t^+ toward the hoop spike [PAGE 13], while the exponential emission V_t^+ | R_t=1 ~ exp(λ_v) was fit to average drive dynamics. The tail behavior of the exponential underestimates the likelihood of extreme late-clock velocities, causing the model to under-detect late-clock drives or to misclassify them as post-ups due to small Y_t (hoop-handler distance). Conversely, early-clock post-ups feature slow handler speed H_t, consistent with H_t | U_t=1 ~ exp(λ_h), but end-of-game post-ups may involve rapid isolation bursts that violate the monotonically decreasing exponential density [PAGE 14]. Thus clock position acts as a latent moderator of the emission parameters, and the stationary HMM systematically mis-calibrates near temporal boundaries.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto conditions for model acceptance.

Physical layer veto: The court geometry imposes hard bounds. An NBA court is approximately 28.65 m by 15.24 m. If the estimated defender location D_{ti} from the Gaussian model falls outside the convex hull of the court or behind the backboard, the observation is physically impossible and must be vetoed before entering the HMM. Similarly, if the ball’s (x,y,z) trajectory violates projectile kinematics given the 25 Hz sampling interval Δt=0.04 s, the frame is corrupt.

Biomechanical layer veto: Maximum human sprint speed in basketball is roughly 10 m/s. Over one frame at 25 Hz, a player can move at most about 0.4 m. If the observed change in X_t (defender-screener distance) or Y_t (hoop-handler distance) between consecutive frames exceeds this bound, the tracking system has swapped identities or dropped a detection; the emission likelihoods exp(λ) and log-normal densities cannot be trusted, and the frame is vetoed. This is especially relevant for W_t (screener speed) [PAGE 12] and H_t (handler speed) [PAGE 14], where exponential tails assign non-negligible probability to implausibly high speeds without a physical cap.

Environmental layer veto: The game is indoors, so meteorological weather does not directly alter the point process. However, arena HVAC failure, condensation on the court, or camera glare causing optical occlusion produces missing D_{ti} or O_{tj} values. If more than one defender location is missing in a frame, the 5^5 matching space cannot be constrained, and the bond-energy transition becomes unidentifiable [PAGE 7]; the defense-assignment HMM must be vetoed for that segment.

Adjudication rule: Accept the model output for a time window only if (i) all D_{ti} and O_{tj} lie within court bounds, (ii) between-frame displacements respect the biomechanical 0.4 m cap, (iii) no defender is missing for more than one consecutive frame, (iv) σ_D^2 is bounded away from zero and the kernel K remains positive definite [PAGE 5], and (v) the emission likelihood ratio for the most likely hidden state exceeds a pre-specified threshold calibrated on the confusion matrices [PAGES 17-19]. Failure of any condition triggers a veto and reverts to the closest-defender baseline or human review.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios with formal conditions and testable predictions.

Scenario 1: Ball-screen false-positive cascade under off-ball screening.
Condition: An off-ball screener sets a stationary pick away from the ball handler. The observed X_t (on-ball defender to potential screener distance) becomes small incidentally, and W_t (potential screener speed) is low because the screener is stationary after the pick. The emission model P(X_t, Y_t, W_t | S_t=1) assigns high likelihood to a ball screen because X_t is small and W_t is low [PAGE 12], yet no screen on the ball occurred.
Verifiable veto: If the ball-handler–defender distance Y_t remains large (> 6 m) while X_t is small, veto the S_t=1 inference.
Prediction: Precision for ball-screen detection will fall below the observed 79/(79+23) ≈ 0.775 [PAGE 18] in games with frequent off-ball screening; recall will remain stable but positive predictive value will collapse.

Scenario 2: Drive-post-up confounding near the basket in late-clock situations.
Condition: With less than four seconds on the shot clock, a player backs down a defender in the post (Y_t < 3 m) with low initial speed H_t, then bursts toward the rim (V_t^+ high). The drive model expects V_t^+ | R_t=1 ~ exp(λ_v) [PAGE 13], and the post-up model expects H_t | U_t=1 ~ exp(λ_h) [PAGE 14]. Because both events share small Y_t and the exponential densities overlap at boundary values, the Viterbi path oscillates or mislabels the hybrid action.
Verifiable veto: If Y_t < 3 m and the velocity profile is biphasic (slow then fast) within a 1-second window, veto both pure-drive and pure-post-up hidden-state assignments.
Prediction: Drive recall will degrade below 65/(65+2) ≈ 0.970 [PAGE 18] specifically in the last six seconds of the shot clock; post-up false positives will increase above the current 2/(2+334) ≈ 0.006 [PAGE 19].

Scenario 3: Defensive assignment collapse during live substitutions.
Condition: A substitution occurs at time t*, changing the identity of defender i on the court. The model’s Γ is player-specific [PAGE 5], but the energy-based transition assumes bond breaking and forming over the same player set [PAGE 7]. If the new defender’s Γ has not been sufficiently estimated (high posterior variance from the GP prior K), the assignment I_t will revert toward the closest-defender heuristic rather than the learned attraction model.
Verifiable veto: If a player substitution is detected (roster change on court) and the posterior entropy of I_t exceeds the pre-substitution entropy by more than one nat, veto the defense-assignment output for the next 10 seconds (250 frames).
Prediction: Assignment accuracy will drop from 0.9541 [PAGE 17] toward the closest-defender baseline of 0.7597 [PAGE 17] in the immediate post-substitution window, with recovery only after sufficient new D_{ti} observations accumulate to update Γ via the EM loop [PAGE 10].
</RLVR_COUNTERFACTUAL_VETOES>
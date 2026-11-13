---
source: "2018 - Wide Open Spaces A statistical technique for measuring space creation in professional soccer - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4835
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Wide Open Spaces: A statistical technique for measuring space creation in professional soccer" from MIT Sloan 2018.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to write a comprehensive analysis covering all these sections. Let me go through the paper carefully.

Paper details:
- Title: Wide Open Spaces: A statistical technique for measuring space creation in professional soccer
- MIT Sloan Sports Analytics Conference 2018 Research Paper Competition
- Paper Id: 5675
- 19 pages
- Unknown authors (FC Barcelona analysts likely, given references to F.C. Barcelona expert analysts)

Key concepts:
1. Pitch control model - parametric, bivariate normal distribution for player influence
2. Team pitch control - logistic function of difference in summed influences
3. Pitch value model - feed forward neural network with one hidden layer, learned from defensive team influence sum
4. Space Occupation Gain (SOG) and Space Generation Gain (SGG)
5. Quality of owned space Q = PC * V
6. Active vs passive occupation (>1.5 m/s running speed)
7. Thresholds: epsilon for gain/loss, delta=5m closeness, alpha=3m minimum attraction distance

Equations from paper:
- Eq 1: I_i(p,t) = f_i(p,t) / f_i(p_i(t), t) [player influence likelihood normalized to [0,1]]
- Eq 2: PC(p,t) = σ(Σ_i I(p,t) - Σ_j I(p,t)) [team pitch control via logistic]
- Eq 3: V_{i,j}(t) = f_n(p_b(t), p_{i,j}(t); θ) [pitch value as NN function of ball and location]
- Eq 4: D_{i,j}(t) = Σ_d I_d(p_b(t), p_{i,j}(t)) [defensive influence sum as target]
- Eq 5: L(θ) = arg min_θ (1/n) Σ L(y_i, f(x_i, θ)) [MSE loss]
- Eq 6: Q_i(t) = PC_i(t) V_i(t) [quality of owned space]
- Eq 7: G_i(t) = (1/w) Σ_{t'=t+1}^{t+w+1} Q_i(t') [mean gain over window]
- Eq 8: SOG_i(t) = G_i(t) if G_i(t) >= ε else 0
- Eq 9: SOL_i(t) = -G_i(t) if G_i(t) <= -ε else 0
- Eq 10: SG_{i,i'}(t) = ∃j (d_{i',j}(t) <= δ) ∧ (d_{i,j}(t+w) <= δ) ∧ (d_{i',j}(t+w) > δ) ∧ (d_{i,j}(t+w) - d_{i,j}(t) > α)
- Eq 11: SGG_{ij}(t) = G_j(t) if SG_{i,j}(t) ∧ G_j(t) >= ε else 0

Appendix:
- Eq 12: bivariate normal PDF
- Eq 13: same as Eq 1
- Eq 14-21: covariance matrix SVD, rotation/scaling, speed ratio, mean translation

Data:
- TRACAB optical tracking data
- 20 matches, 2.4 million examples for pitch value model
- FC Barcelona vs Villarreal, Jan 2017, 1-1 draw
- 845 situations, 3-second window after possession
- δ = 5 meters, α = 3 meters
- Active speed > 1.5 m/s [9]

Now I need to structure this into the required XML sections. I must not mention betting lines. I must use formal LaTeX. I must cite pages.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to derive how the equations connect, discuss assumptions, breakdown regimes (e.g., when ΣI = 0, PC = 0.5? Actually logistic(0) = 0.5, but paper says single player without influence controls logistic(1) = 0.73. Wait, if only one player has influence I=1 at own location, then sum difference is 1, σ(1) ≈ 0.731. If no players, difference 0, σ(0)=0.5. Breakdown: when influence surfaces are flat or all players equidistant, control surface becomes ambiguous. Normalization by f(p_i(t), t) creates singularity if f at player location is zero (never for Gaussian, but numerically underflow possible). The NN for pitch value uses defensive influence as proxy target—this is an inverse problem assumption (defenders cover high value). Breakdown when defenders don't optimally cover (e.g., red card, tactical overload). The window w=3s is arbitrary; aliasing at high frequency. δ=5m and α=3m are hand-tuned constants. The threshold ε is undefined numerically in text. Need to audit gray zones: passive vs active threshold at 1.5 m/s is from reference [9], but walking vs jogging boundary is context-dependent. The mean translation of μ by 0.5 * speed vector (Eq 21) has units mismatch: p_i(t) is meters, s_hat is unitless direction, times 0.5 meters? Actually Eq 21 says μ_i(t) = p_i(t) + s_hat_i(t) · 0.5. If s_hat is unit vector, 0.5 is meters. But paper says "half the magnitude of speed vector" which would be meters/second * seconds? Need to check units. Eq 18: Srati(s) = s^2 / 13^2. Dimensionless ratio. Eq 19: matrix entries have units of meters^2 (covariance). Ri(t) in meters. So (Ri ± Ri*Srati)/2 squared? Wait Eq 19 shows matrix with entries [Ri+(Ri*Srati))/2, 0; 0, Ri-(Ri*Srati)/2] but those look like standard deviations, not variances. Then COV = R S_i S_i R^{-1}, so S_i is scaling matrix (std dev), squared gives covariance. Units: meters^2. OK.

Gray zones: The target V is defined as inverse of defensive influence sum, clipped at 1. This creates a discontinuity at D=1. The sigmoid activation squashes to [0,1]. MSE loss with sigmoid output can saturate. The 10-fold CV MSE 0.085 ± 0.001 is reported but no baseline comparison. The match analysis uses only one match, n=845 situations, small sample for individual player stats. The "third-man pass" interpretation is post-hoc narrative, not causal identification.

<SOURCE_OPERATORS_AND_EQUATIONS>: List all equations with LaTeX, units, page citations.

<RETROCAUSAL_GENEALOGY>: Lineage from Taki & Hasegawa 1996 [5], Voronoi [1-4], Cervone/Bornn/Goldsberry NBA court realty [6], Franks et al. Counterpoints [7], Horton et al. pass classification [3]. Multi-week traps: if applied across weeks, player-specific influence parameters may drift due to fatigue, tactical shifts, opponent adjustments. The model is static per-frame; no temporal persistence. The pitch value NN trained on 20 matches may not generalize to different leagues or seasons (distribution shift). The 1.5 m/s active threshold from Ric et al. 2017 [9] is specific to small-sided games maybe? Need to note.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: under pressure (e.g., needing a goal in final minutes like Barca vs Villarreal), players revert to habitual off-ball patterns. Counter-trap: opponents adjust marking to neutralize known generators (Suarez/Neymar heavily marked). Clock: 3-second window after possession; end-of-game clock pressure changes space valuation (paper notes Barca needed to score in final minutes). The theory of mind here: attackers model defenders' attention; defenders model attackers' runs. Busquets as pivot receives space from many (third-man). This is recursive: I think that you think that I think... The paper measures outcomes but not the higher-order beliefs.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical veto: tracking data sampling rate (TRACAB typically 25 Hz), GPS vs optical, occlusion. Biomechanical veto: 1.5 m/s threshold doesn't account for acceleration, change of direction, body orientation. Weather veto: rain affects ball roll and player speed, not modeled. Pitch dimensions: axis in meters but actual pitch size not specified. Breakdown: if ball is out of play, model invalid; set pieces not covered (open play only).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios with predictions.
1. Veto: If defensive influence sum D_{i,j}(t) = 0 at a location (no defenders nearby), Eq 4 target is 0, Eq 4 says Vhat = 1/D if D>1 else D. Wait Eq 4 definition is weird: "Vhat = { 1 if D > 1; D otherwise }". Actually text: 
ˆVi,j(t) = { 1 Di,j(t) > 1; Di,j(t) otherwise }. So if no defenders, D=0, target V=0. That means space with no defenders is valued 0? That seems backwards but it's because they learn from defensive positioning: if no defender, it's not a high-value defensive target? Actually they say target is sum of defending player influence. If no defenders nearby, D is small, so target value is small. But intuitively space with no defenders should be high value. However they are learning where defenders *choose* to stand; if defenders don't stand there, maybe it's not valuable? Or it's off-ball space not currently threatened. Prediction: In counterfactual where defending team abandons a region (red card leaving gap), model will undervalue that space because D≈0 → V≈0, failing to capture the tactical opportunity. Veto triggers if min_d distance > 15m and model still outputs low value.

2. Veto: Single player isolation. Eq 2: if only one player has influence at p, PC = σ(I) where I ∈ [0,1]. At own location I=1, PC = σ(1) ≈ 0.731. But if two opposing players equidistant, sums cancel, PC = 0.5 regardless of actual contest. Prediction: In a 2v2 pressing trap where both teams converge, PC surface will show 0.5 at the contact point, masking which team actually wins the duel due to velocity vector differences not fully captured if speeds equal.

3. Veto: Temporal aliasing at window boundary. Eq 7 uses mean over [t+1, t+w+1] with w=3s. If a player gains space at t+0.5s but loses it at t+2.5s, the mean may be near zero and below ε, vetoing SOG despite a real transient advantage. Prediction: High-frequency dribblers (Neymar) will have systematically underestimated SOG because transient gains cancel within the 3-second mean. Counterfactual: reduce w to 1s → Neymar SOG count increases disproportionately vs Busquets.

Now I need to ensure >=1000 words total. Let me write carefully.

I must include exact [PAGE N] markers and verbatim quotes where appropriate. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote sparingly but cite every equation.

Let's begin drafting. I need to make sure I don't mention betting. No spreads, totals, moneylines, odds. Avoid any gambling language.

Structure:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I will write detailed content. Let's aim for about 200-300 words per section except THINK_TRACE which needs 400+. Total well over 1000.

Let's write.

For THINK_TRACE:
- Start with the problem: off-ball events, Cruyff quote from page 1.
- Derive player influence as normalized bivariate normal.
- Team control via logistic difference.
- Pitch value via NN trained on defensive influence (inverse problem).
- Quality Q = PC * V.
- SOG/SGG definitions with thresholds.
- Gray zone audit: ε undefined numerically; δ=5m, α=3m hand-tuned; w=3s mean causes temporal smoothing; single-match n=845; passive/active threshold 1.5 m/s from [9]; Eq 21 units (translation by 0.5 * unit vector? unclear); the defensive-influence-as-proxy target creates a circularity if defenders are not optimal; normalization discontinuity at D=1 in Eq 4; pitch value lacks inherent distance-to-goal until post-hoc normalization (page 8-9).
- Multi-hop: from raw tracking → influence → team control → value → quality → gain/loss → generation. Each hop introduces assumptions.
- Mention Barca vs Villarreal specifics, table stats.

For SOURCE_OPERATORS_AND_EQUATIONS:
List equations 1-21 with LaTeX, units, page refs.
- Eq 1 page 4.
- Eq 2 page 5.
- Eq 3 page 7.
- Eq 4 page 7.
- Eq 5 page 8.
- Eq 6 page 9.
- Eq 7 page 10.
- Eq 8 page 10.
- Eq 9 page 10.
- Eq 10 page 11.
- Eq 11 page 11.
- Eq 12 page 18.
- Eq 13 page 18.
- Eq 14-21 pages 18-19.
Include verbatim quotes for key definitions.

For RETROCAUSAL_GENEALOGY:
- Taki & Hasegawa 1996 [5] page 3.
- Voronoi extensions [1-4].
- Cervone et al. NBA court realty [6] page 16-17.
- Franks et al. Counterpoints [7].
- Horton et al. pass classification [3].
- Multi-week traps: parameter drift, opponent adaptation, league generalization, training data from 20 matches only, TRACAB availability.
- Single match validation limits causal claims across a season.

For RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: final minutes, Barca down 1-1, need to score. Players revert to known off-ball patterns.
- Counter-trap: Villarreal marking Suarez/Neymar heavily (page 12: "high level of strictly closed marking").
- Clock: w=3s window, match clock 90th minute equalizer. The clock imposes non-stationarity; space value near endgame changes.
- Theory of mind: Busquets as third-man hub (page 13), generators/receivers graph. Recursive: attacker anticipates defender's reaction to generator's run; defender anticipates attacker's receiver run.
- Messi passive SOG: walking as conscious occupation, not disengagement. This is a counter-intuitive habit regression (walking under crisis appears like loafing but is tactical).

For CROSS_LAYER_VETO_ADJUDICATION:
- Physical: TRACAB optical tracking, sampling rate, occlusion by players, ball out of play excluded ("open play" page 1).
- Biomechanical: speed threshold 1.5 m/s [9] ignores acceleration, angular momentum, body orientation; Eq 21 mean translation by speed vector assumes linear kinematics, no braking or cutting.
- Weather: rain/surface not modeled; pitch dimensions in meters but no specific length/width cited; ball-relative distance unaffected by weather but player speed is.
- Breakdown: set pieces, dead balls, goalkeeper possession (page 2 says own goalkeeper 80m behind play worth less); extreme density where logistic saturates; numerical underflow in Gaussian normalization if player far from query point.

For RLVR_COUNTERFACTUAL_VETOES:
Three scenarios as I thought above. Format as verifiable veto + prediction.

Need to ensure no betting language. Check for "odds", "spread", "moneyline", "total". Avoid.

Let's write carefully with citations. I'll use [PAGE N] exactly.

I need to watch word count. Let's draft mentally then write out fully.

THINK_TRACE target ~500 words.
SOURCE target ~400 words.
RETROCAUSAL ~250 words.
RECURSIVE ~250 words.
CROSS_LAYER ~200 words.
RLVR ~200 words.
Total ~1800 words. Good.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation chain begins with raw optical tracking data and ascends through four nested abstractions before producing a player-level valuation. First, each player projects a bivariate normal influence surface I_i(p,t) over the pitch (Equation 1, page 4). The mean µ_i(t) is the player's current position, and the covariance Σ_i(t) is rotated by the velocity vector's angle θ and scaled by speed magnitude and distance to the ball (Appendix A.1, pages 18-19). Critically, the likelihood is normalized by f_i(p_i(t),t), the density at the player's own location, which bounds I_i(p,t) in [0,1] but introduces a numerical gray zone: as ||p - p_i(t)|| grows, the numerator underflows toward zero while the denominator remains fixed at the peak density, creating an asymptotically flat tail that can vanish below floating-point precision for distant query points. Second, team pitch control PC(p,t) is the logistic transform of the difference between summed attacking and defending influences (Equation 2, page 5). The paper notes that an isolated player at his own location controls logistic(1) ≈ 0.73 of the space, not unity, which encodes the assumption that space control requires local numerical density; however, when opposing influences exactly cancel, PC = logistic(0) = 0.5 regardless of which side actually possesses superior closing velocity, a breakdown regime in contested duels where the model outputs maximal uncertainty despite a deterministic physical outcome.

Third, pitch value V_{i,j}(t) is learned by a feed-forward neural network with one hidden layer (Equation 3, page 7) using defensive influence D_{i,j}(t) = Σ_d I_d(p_b(t), p_{i,j}(t)) as the regression target (Equation 4, page 7). This is an inverse-problem assumption: defenders are presumed to concentrate over high-value locations, so their summed influence proxies location value. The target is clipped at 1 when D > 1 (page 7), introducing a hard discontinuity in the loss landscape and implying that locations under heavy defensive pressure are maximally valuable, even if those locations are tactically dead zones. Fourth, quality of owned space Q_i(t) = PC_i(t) · V_i(t) (Equation 6, page 9) multiplies a probability in [0,1] by a learned value in [0,1], yielding a dimensionless spatial-quality score. The gain operator G_i(t) averages Q over a fixed three-second window [t+1, t+w+1] (Equation 7, page 10), and SOG/SOL are thresholded by an unnamed constant ε (Equations 8-9, page 10). Because ε is never assigned a numerical value in the text, the classification of a space gain as "advantageous" versus "contextual noise" is not reproducible from the manuscript alone. The active/passive split at 1.5 m/s (page 10) borrows from Ric et al. [9] but does not model acceleration or change-of-direction, so a player decelerating into a valuable pocket may be misclassified as passive despite high tactical intent.

Space generation SG_{i,i'}(t) (Equation 10, page 11) requires four simultaneous conditions over window w: the receiver was originally within δ=5 m of defender j; by t+w the generator is within δ of that same defender; the receiver is no longer within δ of j; and the generator-defender distance increased by more than α=3 m (pages 12-13). SGG then attributes the receiver's quality gain G_j(t) to the generator if G_j(t) ≥ ε (Equation 11, page 11). This creates a multi-hop attribution chain: generator movement → defender displacement → receiver quality change → credit assignment. Gray zones include the arbitrary 3-second window (aliasng transient gains), the single-match validation sample (n=845 situations, one FC Barcelona vs Villarreal fixture, pages 11-12), and the post-hoc narrative interpretation of Busquets as a "third-man" hub (page 13), which is descriptive rather than causally identified. The pitch-value model's 10-fold cross-validation MSE of 0.085 ± 0.001 (page 8) lacks an out-of-sample league baseline, so temporal generalization across weeks or competitions remains unverified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators below are extracted verbatim or near-verbatim from the source pages.

Page 4, Equation 1 — Player influence likelihood:
I_i(p, t) = f_i(p, t) / f_i(p_i(t), t)
Units: dimensionless, range [0,1]. p and p_i(t) are pitch coordinates in meters. f is the bivariate normal PDF. Breakdown: if f_i(p_i(t), t) → 0 numerically (underflow), the ratio is undefined; however for a Gaussian the denominator is the peak density and remains strictly positive.

Page 5, Equation 2 — Team pitch control:
PC(p, t) = σ( Σ_i I(p, t) − Σ_j I(p, t) )
Units: σ is the logistic function, output probability in [0,1]. i indexes attacking team, j opposing team. The paper states an isolated player controls logistic(1) = 0.73 of space at his own location. Breakdown: when Σ_i I = Σ_j I, PC = 0.5 independent of closing speeds or ball possession.

Page 7, Equation 3 — Pitch value function:
V_{i,j}(t) = f_n(p_b(t), p_{i,j}(t); θ)
Units: [0,1] after sigmoid activation; p_b(t) is ball location in meters; p_{i,j}(t) is pitch-grid location in meters; θ are NN parameters. Page 7: "we use a feed forward neural network with one hidden layer... sigmoid function as the activation function."

Page 7, Equation 4 — Defensive influence target:
D_{i,j}(t) = Σ_d I_d(p_b(t), p_{i,j}(t))
Units: summed dimensionless influence, non-negative. The clipped target is:
V̂_{i,j}(t) = { 1, if D_{i,j}(t) > 1; D_{i,j}(t), otherwise }
Breakdown: discontinuity at D = 1; if no defender is nearby, D ≈ 0 and target value collapses toward 0, under-valuing unoccupied space.

Page 8, Equation 5 — Training loss:
L(θ) = arg min_θ (1/n) Σ_{i=1}^n L(y_i, f(x_i, θ))
Units: mean square error; reported 0.085 MSE with 0.001 standard deviation over 10-fold cross-validation (page 8). Training set: TRACAB tracking data from 20 Spanish first- and second-division matches, 2.4 million examples, situations separated by ≥3 seconds (page 8).

Page 9, Equation 6 — Quality of owned space:
Q_i(t) = PC_i(t) V_i(t)
Units: dimensionless product of control probability and relative pitch value.

Page 10, Equation 7 — Mean quality gain over window:
G_i(t) = (1/w) Σ_{t'=t+1}^{t+w+1} Q_i(t')
Units: quality per frame; w = 3 seconds in the match analysis (page 12).

Page 10, Equations 8-9 — Thresholded gain and loss:
SOG_i(t) = { G_i(t), if G_i(t) ≥ ε; 0, otherwise }
SOL_i(t) = { −G_i(t), if G_i(t) ≤ −ε; 0, otherwise }
Units: ε is an unstated constant threshold; no numerical value is provided in the text.

Page 10, active/passive definition:
Active occupation: speed > 1.5 m/s (jogging threshold from [9]). Passive: ≤ 1.5 m/s.

Page 11, Equation 10 — Space generation predicate:
SG_{i,i'}(t) = ∃j [ d_{i',j}(t) ≤ δ ] ∧ [ d_{i,j}(t+w) ≤ δ ] ∧ [ d_{i',j}(t+w) > δ ] ∧ [ d_{i,j}(t+w) − d_{i,j}(t) > α ]
Units: distances d in meters; δ = 5 m closeness constant (page 12); α = 3 m minimum attraction distance (page 12); w = 3 s window.

Page 11, Equation 11 — Space generation gain:
SGG_{ij}(t) = { G_j(t), if SG_{i,j}(t) ∧ G_j(t) ≥ ε; 0, otherwise }

Pages 18-19, Appendix A.1 — Influence surface details:
f_i(p,t) = 1 / √((2π)² det COV_i(t)) · exp(−½ (p − µ_i)ᵀ COV_i(t)⁻¹ (p − µ_i))  (Eq 12)
Σ = V L V⁻¹ = R S S R⁻¹  (Eqs 14-15)
R = [[cos θ, −sin θ], [sin θ, cos θ]]  (Eq 16); S = [[s_x, 0], [0, s_y]]  (Eq 17)
Speed ratio: Srati(s) = s² / 13²  (Eq 18), where 13 m/s is stated as maximum possible speed.
Scaling matrix entries: S_i(t) = [[ (R_i + R_i·Srati)/2, 0 ], [0, (R_i − R_i·Srati)/2 ]]  (Eq 19)
COV_i(t) = R(θ,t) S_i(t) S_i(t) R(θ_i(t),t)⁻¹  (Eq 20)
Mean translation: µ_i(t) = p_i(t) + ŝ_i(t) · 0.5  (Eq 21)
Units: R_i(t) in meters; s in m/s; COV in m²; µ in meters. Breakdown: Eq 21 translates the mean by half the unit speed vector scaled by 0.5 meters, but the text describes it as "half the magnitude of speed vector," creating an ambiguous kinematic interpretation unless ŝ_i(t) carries embedded speed units.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage traces back to Taki and Hasegawa's 1996 motion-analysis system for quantitative soccer teamwork evaluation [5], cited on page 3 as the origin of dominant-region concepts. Voronoi tessellation approaches [1-4] extended this to discrete dominance cells for attacking/defending teams, pass-probability evaluation, and basketball rebound valuation [4]. The paper explicitly rejects Voronoi's discrete margins in favor of a soft, continuous control surface, aligning with Cervone, Bornn, and Goldsberry's NBA "court realty" kernel-density work [6] and Franks et al.'s "Counterpoints" defensive metrics for basketball [7], both imported from the MIT Sloan lineage. Horton et al.'s spatiotemporal pass classification [3] informs the reliance on tracking data over discrete on-ball events.

The scientific genealogy implies several multi-week traps. First, the pitch-value neural network was trained on only 20 Spanish first- and second-division matches (2.4 million examples, page 8). Across a multi-week season, opponent-specific defensive distributions shift as scouting reports circulate; a model that assumes defenders optimally cover high-value space will degrade when opponents deliberately concede certain zones to protect others. Second, the player-influence covariance depends on speed magnitude capped at 13 m/s and distance-to-ball transformations calibrated by expert opinion (Appendix, page 18). Over a congested fixture list, fatigue alters maximum sustainable speed and acceleration profiles, violating the fixed [4,10] meter influence-radius mapping. Third, the active/passive boundary at 1.5 m/s [9] comes from tactical-behavior literature on manipulated spaces of interaction, not from elite match running-speed distributions, so cross-league or cross-competition application requires recalibration. Fourth, the single-match validation against Villarreal (page 12) cannot establish temporal stability; player SOG rankings (Iniesta, Busquets, Messi at top) are context-bound to that specific game state and opponent marking scheme. Without out-of-sample validation across multiple matchweeks, the metrics risk capturing opponent-specific noise rather than portable player skill.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper's match context encodes a recursive theory of mind: FC Barcelona, trailing 1-1 and equalizing in the 90th minute (page 11), faces a clock-induced crisis state in which off-ball behavior becomes decisive because, as Cruyff is quoted on page 1, players possess the ball only ~3 minutes per 90. Under crisis pressure, players regress to habitual off-ball patterns. The data show this regression explicitly: Iniesta, Busquets, and Messi account for over 41% of total SOG (Table 1, page 12), consistent with their established possession-centered roles rather than novel tactical invention. Messi's passive SOG exceeding active SOG (66.67% passive, page 12) represents a crisis-habit counter-trap: walking through high-value space appears as disengagement to observational analysts, but the model registers it as conscious occupation of valuable zones when defenders vacate them.

The counter-trap operates on the defensive side. Page 12 notes Suarez and Neymar "suffered during the match" a "high level of strictly closed marking," suppressing their SOG counts despite their mobility. This is recursive marking: defenders anticipate the generator's run and shadow tightly, reducing the generator's ability to occupy space, which in turn forces the generator into passive occupation or deep positions. Busquets exemplifies the recursive third-man theory of mind on page 13: he receives space from nearly every teammate, enabling the pattern where A passes to B (dragging opponents), freeing C to receive unmarked. The model captures the outcome (space generation graph in Figure 7, page 13) but not the higher-order belief state—i.e., whether Suarez dragged his marker because he anticipated Messi's run, or whether Messi ran because he anticipated Suarez's drag.

The clock layer is non-stationary: the 3-second window w (Equation 7, page 10) is fixed, yet the match clock imposes an endgame value gradient not present in the pitch-value model until post-hoc distance-to-goal normalization (pages 8-9). In the final minutes, space near the opponent's goal rises in marginal value, but Equation 3's NN was trained on average defensive positioning across 20 matches, not endgame-specific defensive compression. Thus the model may systematically undervalue late-match high-stakes space creation unless the temporal context is explicitly conditioned.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: TRACAB optical tracking (page 11) samples discrete frames; occlusions, player overlaps, and ball-out-of-play events are excluded because the study analyzes "open play" only (page 1). Set pieces, throw-ins, and goalkeeper distribution phases fall outside the model's domain. If tracking data drops below the required sampling density, the Gaussian influence surfaces become interpolated rather than observed, breaking the assumption that f_i(p,t) reflects true player kinematics.

Biomechanical layer veto: The active/passive threshold of 1.5 m/s (page 10, citing [9]) ignores acceleration, angular velocity, and body orientation. A player cutting sharply into a pocket may be below 1.5 m/s at the instant of occupation yet exert high tactical influence; conversely, a player sprinting in a straight line away from play may be classified as active despite generating no value. Equation 21's mean translation µ_i(t) = p_i(t) + ŝ_i(t)·0.5 (page 19) assumes linear kinematics over the influence window; it cannot model braking, deceleration, or curved runs, so players with high agility but low instantaneous speed are misrepresented.

Weather/surface veto: The model contains no parameters for precipitation, pitch moisture, or grass length, all of which alter ball roll speed and player acceleration. Distance-to-ball terms in Equations 1 and 18 assume a static relationship between player proximity and reachable space; on a wet pitch, the same distance-to-ball corresponds to a longer time-to-control, invalidating the velocity-scaled covariance scaling in Appendix A.1 (pages 18-19). Pitch dimensions are given only as axis units in meters (page 6 figure caption), with no normalization for varying stadium sizes.

Breakdown adjudication: PC(p,t) saturates toward 0.5 in balanced contests (Equation 2, page 5), vetoing the model's utility in evenly matched duels where velocity differences—not just position—determine control. The pitch-value target's clipping at D=1 (Equation 4, page 7) creates a hard veto: any location under extreme defensive pressure is assigned maximum value regardless of whether it is actually reachable or tactically useful. Finally, the unnamed ε threshold (Equations 8-9, page 10) means the model has no operational decision rule for classifying SOG/SOL without external calibration, constituting a specification veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Undefended high-value space. In Equation 4, the pitch-value target D_{i,j}(t) = Σ_d I_d(p_b(t), p_{i,j}(t)) collapses toward zero when no defending player is near the query location. The clipped target then sets V̂ ≈ 0 (page 7), implying unoccupied space has no value. Counterfactual prediction: If a defending team temporarily abandons a region (e.g., after a red card or tactical shift), the model will undervalue that space precisely when it becomes most exploitable. Verifiable test: Compute pitch value for locations where the nearest defender is >15 m away; if the model outputs near-zero values while expected-goal models would assign high value, the defensive-influence proxy is invalidated for low-pressure zones.

Veto Scenario 2 — Balanced contested duel. In Equation 2, when two opposing players exert equal influence at a point, Σ_i I − Σ_j I = 0, yielding PC = logistic(0) = 0.5 (page 5). This masks which team actually wins the physical contest. Counterfactual prediction: In a 50-50 shoulder duel where the attacker has a 1 m/s closing-speed advantage but identical position, the model outputs PC = 0.5 for both teams, failing to reflect the mechanical advantage. Verifiable test: Isolate frames with two players at equal distance from a query point but unequal velocity vectors toward that point; if PC remains at 0.5 despite one player clearly reaching the ball first, the model lacks kinetic resolution.

Veto Scenario 3 — Transient gain aliasing. Equation 7 averages Q_i(t') over a fixed w = 3-second window (pages 10, 12). Counterfactual prediction: A dribbler who gains valuable space for 1 second then loses it for 2 seconds within the same window will produce G_i(t) ≈ 0, likely falling below the unnamed ε threshold and receiving zero SOG. This systematically penalizes high-frequency, transient operators (e.g., wingers making short bursts) relative to gradual positional players. Verifiable test: Reduce w to 1 second in a re-analysis; if Neymar's SOG count increases disproportionately relative to Busquets', the 3-second mean is confirmed as an aliasing filter that suppresses transient space creation.
</RLVR_COUNTERFACTUAL_VETOES>
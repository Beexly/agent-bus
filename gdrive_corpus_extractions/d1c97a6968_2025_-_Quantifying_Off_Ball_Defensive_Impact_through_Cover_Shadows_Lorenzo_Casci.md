---
source: "2025 - Quantifying Off Ball Defensive Impact through Cover Shadows Lorenzo Casciolio Allen Wang amended - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5852
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided research paper on "Quantifying Off-Ball Defensive Impact through Cover Shadows". I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across these exact XML sections.

I need to be careful: The paper text is provided across pages 1-31 (though some pages seem merged or renumbered in the source text). I must cite [PAGE N] markers and verbatim quotes where appropriate.

Let me break down the paper content:

Pages mapping from source text:
- Page 1: Introduction start, RQ1 intro, geometric baselines start (Line Corridor formula on page 4? Wait, the source text has page markers embedded like **1**, **2**, etc.)

Let me trace page markers:
- **[PAGE 1]**: Intro, "Defensive contributions in soccer often occur without the ball..." down to "...approximation of the ball's travel time given the target location of a potential pass." Then "**1**". Actually the bold numbers are page markers.
- **[PAGE 2]**: Data and Definitions, Dataset Overview... "Our main dataset comprises 1,752 matches..." down to "...player identities in each freeze frame were determined..." then "**2**".
- **[PAGE 3]**: SPADL footnote, defining passing lane, identifying lane-blocking players, man-marking definition... then "**3**".
- **[PAGE 4]**: RQ1 baseline models, Line Corridor formula, Cone Corridor, Gaussian Cone... then "**4**".
- **[PAGE 5]**: Figure 1 description, limitations of static assumptions... then "**5**".
- **[PAGE 6]**: Lane Control solution, Corridor Parameterization (30 target points), TTI Estimation start, Ball Time under quadratic drag... then "**6**".
- **[PAGE 7]**: Players TTI, capped accelerate-then-cruise model, reaction time t_react = 0.7 s, a_max=7.0 m/s^2, v_max=12.0 m/s, r_block=0.7 m... then "**7**".
- **[PAGE 8]**: Velocity inference from next event, Probability Conversion, sigmoid CDF, s = sqrt(3) sigma / pi, sigma = 0.20, control probability exponential lambda ≈ 4.3 s^-1... then "**8**".
- **[PAGE 9]**: Combined probability discretized integration, block probability P_blocked, receive probability P_received, Any/Majority/All lines, Figure 2... then "**9**".
- **[PAGE 10]**: Evaluating Pass Block Models, unobserved event problem, indirect approach using completed passes... then "**10**". Table 1 starts here? Actually Table 1 spans pages 10-11 maybe. The text says Table 1 reports standard classification metrics... ground truth 69,500 passes... then Table 1 header and first rows on page 10.
- **[PAGE 11]**: Table 1 continued (Lane Control rows), RQ2 How effective are cover shadows? Quantifying Current Threat, positional threat model... then "**11**".
- **[PAGE 12]**: Voronoi regions, threat formula, pr(x,y) decomposition... then "**12**".
- **[PAGE 13]**: Positional Threat Model using xT, Pass Selection Model using SoccerMap... then "**13**".
- **[PAGE 14]**: Pass Success Model, Figure 4... then "**14**".
- **[PAGE 15]**: Quantifying Unblocked Threat, SoccerMap input modification, blocking score... Figure 6... then "**15**".
- **[PAGE 16]**: Figure 7 single cover shadow, Defining Blocking Score blocking_score = threat_S' - threat_S... then "**16**".
- **[PAGE 17]**: RQ3 Can cover shadows be improved? Linear optimization, defining dangerous attackers R' subset R... then "**17**".
- **[PAGE 18]**: Defining areas defenders should occupy, cone intersections, polygons P set... Figure 8... then "**18**".
- **[PAGE 19]**: Optimization problem, Hungarian algorithm... Figure 9... then "**19**".
- **[PAGE 20]**: Evaluating optimization, Table 4, actual vs suggested... then "**20**".
- **[PAGE 21]**: Evaluating Cover Shadows Improvements, Figure 10 threat decreases 0.025 to 0.022, broad evaluation 75% cases... then "**21**".
- **[PAGE 22]**: Use Cases, team level Serie A... Figure 11... then "**22**".
- **[PAGE 23]**: Player level Belgium-Portugal, blocking rate... then "**23**".
- **[PAGE 24]**: Related work start... then "**24**".
- **[PAGE 25]**: Related work continued, Everett et al... then "**25**".
- **[PAGE 26]**: Conclusion... References start... then "**26**".
- **[PAGE 27]**: References continued... then "**27**".
- **[PAGE 28]**: References end, Appendix A start... then "**28**".
- **[PAGE 29]**: Appendix A continued Gaussian cone details... then "**29**".
- **[PAGE 30]**: Appendix B Table B1... then "**30**".
- **[PAGE 31]**: Appendix C Tables C1, C2... then "**31**".

Wait, the source text shows **1**, **2**, etc. as page numbers. I should cite them as [PAGE 1], [PAGE 2], etc.

Key equations and parameters from paper:

RQ1 Baselines:
- Line Corridor: R_w(p_a, r_i) = { x ∈ ℜ | perp_dist(x, L(p_a, r_i)) < w/2 }, w = 2 meters. [PAGE 4]
- Cone Corridor: width at receiver scales w = k * ||r_i - p_a||, k = 0.2 so 2m width for 10m pass. [PAGE 4]
- Gaussian Cone: defender ~ N(µ_j, Σ_j), Σ_j = σ_j^2 I, σ = 1 for 1m^2 variance, threshold τ = 0.5, k = 0.2. Blocking fraction F_j. [PAGE 4]

Lane Control:
- Ball motion under quadratic drag (Spearman [9]), ignore gravity/Magnus, constant drag coeff, straight-line path. Air density ρ = 1.22 kg/m^3, drag coefficient C_D = 0.25, cross-sectional area A = 0.038 m^2, mass m = 0.42 kg. Drag parameter k = (ρ C_D A) / (2m). Wait, paper writes "k= (σ C_D A) / (2m)" but probably rho. I'll transcribe carefully: "k= (σ𝐶 𝐴) / (2𝑚)" - likely ρ (rho) but OCR says σ. I'll use ρ to be physically correct but note OCR. Initial ball speed v0 = 12.0 m/s proxy. Time formula involves exmp1 for e^(kd) - 1. [PAGE 6]

- Player TTI: reaction delay t_react = 0.7 s. After reaction r_react = r + v * t_react. d = ||q - r_react||. ê = (q - r_react)/||q - r_react||. v0 = max(0, v_p · ê). a_max = 7.0 m/s^2, v_max = 12.0 m/s. Block radius r_block = 0.7 m for defenders, exact reach for receivers. d_eff = max(d - r_block, 0) defenders; d_eff = d for attackers. t_accel = (v_max - v0)/a_max. d_accel = v0 * t_accel + 1/2 * a_max * t_accel^2. Piecewise TTI formula. [PAGE 7]

- Velocity inference: next event positional displacement / timestamp difference. [PAGE 7]

- Probability Conversion: interception probability P_int,j = 1 / (1 + exp(-Δt / s)) with s = sqrt(3) * σ / π, σ = 0.20. Δt = T_k - T_TTI. Control probability P_ctrl,k = 1 - exp(-λ ΔT) ≈ λ ΔT, λ ≈ 4.3 s^-1. ΔT = T_k - T_{k-1}. Combined probability player j gains possession in [T_k, T_k + ΔT]. Then subtract probability any player already intercepted by time T_k. Discretized numerical integration across intervals. Aggregate defending P_blocked, attacking P_received. Lane blocked if P_blocked > P_received. Lane blocked if Any (1), Majority (2), or All (3) of center/left/right lines blocked. [PAGE 8]

RQ1 Evaluation:
- Ground truth: 69,500 passes analyzed, 98.74% successful, 1.17% unsuccessful. [PAGE 10 / Appendix B Page 30]
- Table 1 metrics: Line Corridor FP 10.89%, FN 0.90%, Balanced Acc 55.82%, Acc 88.20%, Macro F1 0.3006, F1 0.0430. Cone Corridor FP 2.17%, FN 1.07%, Bal Acc 53.03%, Acc 96.76%, Macro F1 0.2932, F1 0.0561. Gaussian Cone FP 14.09%, FN 0.84%, Bal Acc 56.79%, Acc 85.07%, Macro F1 0.3048, F1 0.0417. Lane Control Majority FP 1.52%, FN 0.73%, Bal Acc 68.01%, Acc 97.76%, Macro F1 0.4806, F1 0.2811. Lane Control All FP 0.98%, FN 0.76%, Bal Acc 66.93%, Acc 98.26%, Macro F1 0.4941, F1 0.3189. [PAGE 10-11]

RQ2:
- Threat composed of individual S threat of each attacking player.
- Pitch discretized into 104x68 cell grid. Voronoi regions associated with closest attacker.
- Threat(receiver r) = sum over N_r of threat(x,y) * pr(x,y).
- pr(x,y) = P(D=(x,y) | S) * P(o=success | D=(x,y), S).
- Positional threat: Expected Threat (xT) [14], Karun Singh 2017-18 PL season upscaled to 104x68 with bilinear interpolation. [PAGE 12-13]
- Pass selection: SoccerMap [15], trained on 1,116,738 passes from Big Five 2024/25, 20% validation, Serie A 317,061 passes held out. [PAGE 13]
- Pass success: SoccerMap surface, same passes, first 7 channels, label success/fail. [PAGE 13]
- Counterfactual unblocked scenario S': remove subset of non-man-marking defenders, recompute surfaces.
- Blocking score = threat_S' - threat_S. Example: threat_S = 0.031, threat_S' = 0.041, score = 0.01, reduction 25%. Single defender example: threat_S = 0.029? Wait text says "threat_S' = 0.027 and threat_S = 0.029" score 0.002? Let's check page 16: "In the second scenario (Figure 7) the players are further away from the goal, hence the offensive team is less threatening, with threat_S' = 0.027 and threat_S = 0.029. The blocking score is still positive, albeit much lower (0.002)." Wait if S'=0.027 and S=0.029, then S'-S = -0.002 which is negative. But they say positive. Let me re-read carefully.

Page 16: "In the second scenario (Figure 7) the players are further away from the goal, hence the offensive team is less threatening, with 𝑡ℎ𝑟𝑒𝑎𝑡 0. 027 and 𝑡ℎ𝑟𝑒𝑎𝑡 = 0. 029. The blocking score is still positive, albeit much lower ( 𝑆' = 𝑆 0. 002)." The formatting is garbled. It probably means threat_S = 0.029 and threat_S' = 0.027? That would be negative. Or threat_S = 0.027 and threat_S' = 0.029 giving +0.002. Given they say "removing him clearly increases the threat", S' (unblocked) should be higher than S. So threat_S = 0.027, threat_S' = 0.029, score = +0.002. I'll note the OCR ambiguity but interpret logically.

RQ3:
- Dangerous attackers R' ⊂ R positioned between ball carrier and goal. Danger quantified by xT at location, ignoring likelihood.
- Attacker blocked if at least one defender within passing cone T(p_a, r_j).
- Polygons P = { ∩_{r_j ∈ U} T(p_a, r_j) : U ⊆ R', area(...) > 0 }.
- Optimization: minimal-size set of polygons maximizing threat coverage. Hungarian algorithm on cost matrix c_{d,g} = shortest distance defender d to travel to occupy polygon g. [PAGE 17-19]
- Table 4: top 1000 most dangerous successful passes Serie A. Actual/Suggested: Blocked/Blocked 178, Blocked/Free 0, Free/Blocked 789, Free/Free 33. So 789 previously free now blocked. 33 behind receiver not accounted. Never frees up dangerous attacker. [PAGE 20]
- Broad evaluation: 63,037 snapshots, threat reduced in 75% cases. Example threat decreases 0.025 to 0.022. [PAGE 21]

Use Cases:
- Team level Serie A 2024/25. Blocking score per match. Teams topping list finished lower end of table. Bologna and Como low. [PAGE 22]
- Player level Belgium vs Portugal Euro 2020. 224 snapshots, 186 kept after velocity filtering (76 Belgium, 110 Portugal), 288 potential passes Belgium, 462 Portugal. Blocking rate proportion of frames lane classified blocked by defender. Impact = threat neutralized aggregated. Figure 12 quadrants. Witsel, Tielemans, Palhinha, Moutinho central midfielders high block rate. Meunier, T. Hazard fullbacks higher-left. Sanches upper-right. [PAGE 23]

Appendix A: Gaussian Cone implementation details with erf, cross-section width W(s*), normalized blocking fraction denominator erf(W(s*)/(2σ)). [PAGE 29]
Appendix B: Table B1 distribution by league. EPL 16,245 passes, 0.88% actual pass block rate. Ligue 1 12,815, 1.17%. Bundesliga 11,935, 1.31%. LaLiga 14,902, 1.23%. Serie A 13,603, 1.26%. Total 69,500. [PAGE 30]
Appendix C: Pass selection Table C1: Closest Teammate acc 0.366, XGBoost acc 0.547, SoccerMap logloss 6.521 acc 0.536. Pass success Table C2: XGBoost P 0.933 R 0.938 F1 0.935 AUC 0.942 Brier 0.073. SoccerMap P 0.923 R 0.942 F1 0.933 AUC 0.937 Brier 0.076. [PAGE 31]

Now I need to write the six sections with >=1000 words total. I should ensure each section is substantial. THINK_TRACE needs >=400 words alone.

I must avoid betting lines entirely. No odds, spreads, moneylines, totals. This is a soccer analytics paper, so easy to avoid.

I must avoid toy equations. Use real equations from the paper with proper LaTeX, units, assumptions, singularity/breakdown regimes.

I need to cite exact [PAGE N] markers and verbatim quotes.

Let me draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss:
- The fundamental identifiability problem: blocked passes are unobserved (counterfactual). The paper evaluates on completed passes, using inconsistency as error signal. This creates a verification gap: a model can be wrong in both directions and still look consistent if executed passes avoid blocked lanes.
- Geometric vs physics-based: baselines assume static defenders, ignore reaction time and ball speed. Lane Control adds TTI but relies on inferred velocities from discrete event timestamps (next event displacement / delta t), introducing aliasing and snapshot staleness.
- Parameter sensitivity: w=2m line corridor, k=0.2 cone, σ=1 m^2 Gaussian, τ=0.5, reaction time 0.7 s, a_max=7 m/s^2, v_max=12 m/s, r_block=0.7 m, ball v0=12 m/s. These are fixed constants, not learned. Breakdown when actual ball speed deviates (e.g., long driven pass vs short pass) or player acceleration differs.
- The 98% completion rate imbalance means raw accuracy is misleading; balanced accuracy and macro F1 are the real metrics. Lane Control Majority/All improve balanced accuracy by +11-15% over baselines.
- Threat metric: blocking score = threat_S' - threat_S. Depends on xT (historical league-wide, 2017-18 PL), pass selection and success models (SoccerMap). Counterfactual removal of defenders changes SoccerMap inputs, but SoccerMap was trained on normal defensive configurations; extrapolation to removed defenders may be out-of-distribution.
- Optimization: Hungarian algorithm on polygons defined by cone intersections. Assumes defenders can teleport to polygon interiors and that blocking one cone suffices. Ignores dynamic off-ball movement, orientation, and fatigue.
- Gray zones: freeze frames are not continuous movement; player IDs absent in 360 except one enriched match; velocity inference from sparse events; xT grid is league-wide and static, not team-specific; the 0.7s reaction time is a population average.
- Multi-hop: RQ1 detection -> RQ2 threat delta -> RQ3 optimization. Errors compound: false positives in RQ1 inflate blocking score; SoccerMap distribution shift in counterfactual invalidates RQ2; geometric cone simplification in RQ3 contradicts physics-based RQ1.

I'll write this with citations.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll list equations from RQ1 baselines, Lane Control ball/player TTI, probability conversion, RQ2 threat/pr/xT/pass models, blocking score, RQ3 optimization. Include units (m, m/s, m/s^2, s, s^-1, dimensionless probabilities). Include assumptions and breakdown regimes (e.g., k*d small -> exmp1 numerical stability; v0 unknown -> proxy 12 m/s; freeze frames no velocity -> inferred; 98% class imbalance; σ=1m^2 isotropic Gaussian assumption; τ=0.5 threshold; reaction time fixed; Hungarian algorithm assumes cost matrix complete; etc.)

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Trace lineage: Wu & Swartz [1] off-ball actions <3 min possession; expected disruption [2],[3]; pitch control Spearman [9],[10]; pressing intensity Bekkers [11]; xT Singh [14]; SoccerMap Fernández & Bornn [15]; un-xPass Robberechts et al. [6]; Anzer & Bauer expected passes [5]; Hungarian method Kuhn [16]. Multi-week traps: fatigue hypothesis in conclusion (players less adept as fatigue sets in) but no temporal within-match analysis; player-level analysis limited to single match Belgium-Portugal; Serie A used for training/eval but team rankings confounded by low-block vs high-possession styles; no multi-gameweek stability of blocking rate or impact metrics.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This section is more abstract but needs to connect to the paper. "Crisis habit regression" = teams reverting to habitual defensive shapes under pressure; "counter-trap" = offense anticipating cover shadows and shifting passing lanes; "clock" = match time/fatigue and substitution effects. Discuss how the model assumes static snapshots and doesn't model the opponent's recursive response (if defender covers lane A, passer switches to lane B; if defender optimizes per RQ3, offense adapts). Crisis habit: teams low in table rely more on cover shadows (per use case), but when trailing they must push up, breaking cover shadow structure. Counter-trap: attackers use third-man runs or bypass screened lanes. Clock: fatigue reduces ability to maintain positioning (paper's own future work hypothesis), but model uses constant a_max, v_max, reaction time; no time-decay.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: ball drag model ignores gravity and Magnus force; straight-line path assumption breaks for lofted/knuckled passes; pitch control assumes flat pitch. Biomechanical: fixed a_max=7 m/s^2 and v_max=12 m/s for all players ignores position-specific sprint profiles, acceleration curves, deceleration, and reaction time variability; r_block=0.7 m ignores player height/reach and ball radius; velocity inferred from next event not instantaneous. Weather: air density fixed ρ=1.22 kg/m^3 (sea level, 15°C) ignores temperature/altitude/humidity effects on drag; no wind; no pitch wetness affecting ball roll or player traction. Veto conditions: if any of these layers are violated, Lane Control TTI and blocking probability are invalidated.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll frame as:
1. Veto: High-drag weather (cold, high altitude) or strong crosswind. Prediction: Lane Control overestimates interception probability for driven passes because drag deceleration is under-modeled (ρ fixed, no wind), causing false positive blocks.
2. Veto: Sub-0.7s reaction elite defenders or >1.2s delayed defenders. Prediction: Fixed reaction time misranks defenders; balanced accuracy drops below baseline in subsets with extreme reaction times.
3. Veto: Counterfactual defender removal outside training distribution (SoccerMap trained on intact defenses). Prediction: Blocking score becomes unstable/non-monotonic when removing 2+ defenders because pass selection/success surfaces extrapolate beyond seen defensive configurations.

I need to ensure total word count >= 1000 across sections. Let me aim for ~150-250 words per section except THINK_TRACE which is >=400. I'll write generously.

I must include verbatim quotes with [PAGE N] citations. Let me pick some good quotes:

- Page 1: "Defensive contributions in soccer often occur without the ball and are poorly captured by traditional metrics." / "players typically have possession for less than three minutes per match."
- Page 4: "We empirically obtained the best results for w= 2 meters." / "k = 0.2 so the cone width is 2 meters for a 10 meter pass."
- Page 6: "air density ( =1.22 kg/mσ<sup>3</sup> ), drag coefficient (𝐶 = 0.25)..." - I'll note OCR quirks but quote as is or cleaned.
- Page 7: "After a reaction delay of 𝑡 = 0.7 s..." / "maximum acceleration (  =7.0 m/s𝑎<sup>2</sup> ) and the maximum speed (𝑣 =12.0 m/s) are fixed for all players."
- Page 8: "s= √3 σ / π" / "λ ≈ 4.3 s ⁻ ¹".
- Page 10: "Ground truth: 69,500 passes analyzed, 98.74% successful passes, 1.17% unsuccessful passes".
- Page 12: "threat(𝑥, 𝑦) represents the positional threat at location (𝑥, 𝑦), and 𝑝𝑟(𝑥, 𝑦) represents the probability that the given receiver 𝑟 successfully receives the ball at location (𝑥, 𝑦)."
- Page 13: "We use Karun Singh’s league-wide xT values from the 2017-18 Premier League season..."
- Page 16: "blocking_score = threatS’ - threatS" / "A positive blocking score indicates that cover shadows are preventing some threat."
- Page 20: "In 822 out of 1000 passes, no defender was occupying the passing cone of the receiver. Our method suggests a repositioning where the cone is occupied in 789 of these cases."
- Page 21: "the overall threat is reduced in 75% of the cases".
- Page 22: "teams topping the list finished on the lower end of the table".
- Page 26: "Future work could extend this framework to full tracking data... we hypothesize that as fatigue sets in, players become less adept at sustaining optimal positioning."

I'll now compose the final output. Ensure XML tags exactly as requested. No markdown outside? The user wants the sections. I'll output just the XML sections.

Let me count words mentally. THINK_TRACE 400+. Others can be 150-200 each. Total well over 1000.

One important note: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include [PAGE N] throughout.

Also: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I must not invent Force/Fatigue ratio. I can mention fatigue qualitatively but not as a fake equation.

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

I'll write the content now. Be careful with LaTeX syntax inside XML. It's fine.

Double check: no betting terms. None used.

Let's draft THINK_TRACE:

Start with the unobserved counterfactual problem. Then velocity inference. Then parameter fixation. Then class imbalance. Then error compounding across RQ1-RQ3. Then gray zones.

I'll write it out.

For SOURCE_OPERATORS_AND_EQUATIONS, I'll present equations in display LaTeX with \begin{equation} or inline. Include units in brackets.

For RQ3 optimization, the Hungarian algorithm cost matrix c_{d,g}. The objective minimal distance. I'll write it.

For RLVR, 3 scenarios.

Let's ensure verbatim quotes are exact-ish. Since OCR is messy, I'll quote key phrases but may clean obvious OCR errors like "mσ<sup>3</sup>" -> "m^3"? Better to quote as close as possible but note it's from page. I'll use cleaned mathematical notation but cite page. Actually instruction says verbatim quotes. I'll quote short verbatim fragments from the text as given, but for equations I'll present formal corrected LaTeX. I can say "as stated on [PAGE 6]".

Example quote: "air density ( =1.22 kg/mσ<sup>3</sup> )" — I'll avoid reproducing OCR garbage and instead quote the semantic content with page. But to satisfy "verbatim quotes", I'll include exact text snippets like "maximum acceleration ( =7.0 m/s𝑎<sup>2</sup> ) and the maximum speed (𝑣 =12.0 m/s) are fixed for all players" [PAGE 7]. That's fine.

Alright, let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central epistemic problem is that a successfully blocked passing lane is an unobserved counterfactual: if the defender deters the pass, no pass event exists to label [PAGE 9]. The authors therefore evaluate RQ1 on executed passes only, treating a completed pass through a predicted-blocked lane as a false positive and an unsuccessful pass through a predicted-open lane as a false negative [PAGE 9]. This creates a verification gray zone: the model can be systematically miscalibrated yet appear consistent if passers simply avoid lanes the model flags. With a 98.74% successful-pass base rate in the ground-truth set of 69,500 progressive passes [PAGE 10], raw accuracy is dominated by the negative class; balanced accuracy and macro F1 are the only discriminative signals, and Lane Control (Majority) improves balanced accuracy from roughly 53–57% for the geometric baselines to 68.01%, while Lane Control (All) reaches 66.93% with the lowest false-positive rate (0.98%) [PAGE 10–11].

A multi-hop dependency chain runs from RQ1 to RQ3. RQ1's Lane Control infers player velocities from StatsBomb 360 freeze frames by dividing positional displacement to the next event by the timestamp difference [PAGE 7]. This aliases instantaneous velocity over an unknown inter-event interval and assumes constant velocity within that interval, which breaks down during rapid accelerations, decelerations, or changes of direction. The physics layer then fixes population-level constants—reaction time t_react = 0.7 s, maximum acceleration a_max = 7.0 m/s^2, maximum speed v_max = 12.0 m/s, block radius r_block = 0.7 m, and proxy ball speed v_0 = 12.0 m/s [PAGE 6–7]. These are not player- or context-specific, so the TTI piecewise formula (cruising, acceleration, accelerate-then-cruise) inherits systematic bias whenever a defender's actual kinematic envelope deviates from the fixed parameters. The ball-drag submodel further assumes quadratic drag, no gravity, no Magnus effect, and a straight-line path [PAGE 6]; driven passes with spin or crosswind violate these assumptions, shifting the time-to-intercept T_k and thereby the sigmoid interception probability P_int,j = 1 / (1 + exp(−Δt/s)) with s = sqrt(3)·σ/π and σ = 0.20 [PAGE 8].

RQ2 compounds RQ1 uncertainty by embedding Lane Control's block classifications inside a counterfactual threat calculation. The blocking score is defined as threat_S' − threat_S, where S' removes non-man-marking defenders and SoccerMap regenerates pass-selection and pass-success surfaces [PAGE 16]. SoccerMap was trained on intact defensive configurations [PAGE 13]; removing defenders in the counterfactual pushes the input distribution outside the training manifold, so the recomputed threat surface is an extrapolation, not an interpolation. RQ3 then optimizes defender placement using only static passing-cone geometry [PAGE 17–19], contradicting the physics-based lane model of RQ1 and ignoring that an attacker outside a cone can still influence a pass [PAGE 21]. The optimization reports that 75% of 63,037 Serie A snapshots show reduced threat after repositioning [PAGE 21], yet the remaining 25% expose the geometric simplification as a breakdown regime.

Additional gray zones include the absence of player identities in 360 data except for one enriched Belgium–Portugal match [PAGE 2], the use of a single league-wide xT grid from the 2017–18 Premier League rather than team-specific or season-specific threat surfaces [PAGE 13], and the authors' own fatigue hypothesis—players become less adept at sustaining optimal positioning as fatigue sets in—which the current static model cannot capture because it contains no match-clock or substitution state [PAGE 26].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**RQ1 — Geometric baselines [PAGE 4]:**
Line Corridor: 
\[
R_w(p_a,r_i) = \{ x \in \mathbb{R}^2 \mid \text{perp\_dist}(x, L(p_a,r_i)) < w/2 \}, \quad w = 2\,\text{m}.
\]
A lane is blocked if \(\exists d_j \in D : d_j \in R_w\).

Cone Corridor: cone width at receiver scales as \(w = k \cdot \|r_i - p_a\|_2\) with \(k = 0.2\), so a 10 m pass has a 2 m base width; lane blocked if \(\exists d_j : d_j \in T_k(p_a,r_i)\).

Gaussian Cone: defender \(d_j \sim \mathcal{N}(\mu_j,\Sigma_j)\), \(\mu_j=(x_j,y_j)\), \(\Sigma_j=\sigma_j^2 I\), \(\sigma=1\) for \(1\,\text{m}^2\) variance; normalized blocking fraction \(F_j(p_a,r_i,d_j)\) computed via the 1D normal integral over the cone cross-section of width \(W(s^*)\), with denominator \(\text{erf}(W(s^*)/(2\sigma))\); blocked if \(F_j \ge \tau\), \(\tau=0.5\) [PAGE 4, 29].

**RQ1 — Lane Control [PAGE 6–8]:**
Ball time under quadratic drag, air density \(\rho=1.22\,\text{kg/m}^3\), drag coefficient \(C_D=0.25\), cross-sectional area \(A=0.038\,\text{m}^2\), mass \(m=0.42\,\text{kg}\), drag parameter \(k=(\rho C_D A)/(2m)\), proxy initial speed \(v_0=12.0\,\text{m/s}\). Player TTI: reaction delay \(t_{\text{react}}=0.7\,\text{s}\); \(r_{\text{react}} = r_p + v_p t_{\text{react}}\); \(d=\|q-r_{\text{react}}\|_2\); \(v_0 = \max(0, v_p \cdot \hat{e})\); \(a_{\max}=7.0\,\text{m/s}^2\), \(v_{\max}=12.0\,\text{m/s}\); \(r_{\text{block}}=0.7\,\text{m}\) for defenders, \(d_{\text{eff}}=\max(d-r_{\text{block}},0)\), attackers \(d_{\text{eff}}=d\); \(t_{\text{accel}}=(v_{\max}-v_0)/a_{\max}\), \(d_{\text{accel}}=v_0 t_{\text{accel}} + \frac{1}{2}a_{\max} t_{\text{accel}}^2\). Interception probability \(P^{\text{int}}_{j,k} = 1/(1+\exp(-\Delta t/s))\), \(s=\sqrt{3}\,\sigma/\pi\), \(\sigma=0.20\), \(\Delta t = T_k - T^{\text{TTI}}_k\). Control probability \(P^{\text{ctrl}}_k = 1-\exp(-\lambda\Delta T) \approx \lambda\Delta T\), \(\lambda \approx 4.3\,\text{s}^{-1}\), \(\Delta T = T_k - T_{k-1}\). Joint possession probability integrated discretely over intervals \([T_k, T_k+\Delta T]\); lane blocked if \(P_{\text{blocked}} > P_{\text{received}}\); lane-level rule: Any (1), Majority (2), or All (3) of center/left/right lines blocked [PAGE 8].

**RQ1 — Evaluation [PAGE 10]:**
Ground truth 69,500 passes, 98.74% successful. Table 1: Lane Control (Majority) FP = 1.52%, FN = 0.73%, Balanced Accuracy = 68.01%, Macro F1 = 0.4806; Lane Control (All) FP = 0.98%, FN = 0.76%, Balanced Accuracy = 66.93%, Macro F1 = 0.4941, F1 = 0.3189. Baselines exceed 10% false positives (Line Corridor 10.89%, Gaussian Cone 14.09%).

**RQ2 — Threat [PAGE 12–16]:**
Pitch discretized to \(104 \times 68\) cells; Voronoi region \(N_r\) per receiver. Receiver threat:
\[
S(r) = \sum_{(x,y)\in N_r} \text{threat}(x,y)\, p_r(x,y),
\]
where
\[
p_r(x,y) = P(D=(x,y)\mid S) \cdot P(o=\text{success}\mid D=(x,y), S).
\]
Positional threat is Expected Threat (xT) from Karun Singh's 2017–18 Premier League league-wide grid, upscaled via bilinear interpolation [PAGE 13]. Pass selection and pass success modeled with SoccerMap CNN trained on 1,116,738 Big-5 passes, Serie A 317,061 passes held out [PAGE 13]. Blocking score:
\[
\text{blocking\_score} = \text{threat}_{S'} - \text{threat}_S.
\]
Running example: \(\text{threat}_S = 0.031\), \(\text{threat}_{S'} = 0.041\), score \(= 0.01\) (~25% reduction) [PAGE 15–16].

**RQ3 — Optimization [PAGE 17–19]:**
Dangerous attackers \(R' \subset R\) between ball carrier and goal, ranked by xT only. Attacker blocked if a defender lies in passing cone \(T(p_a,r_j)\). Polygon set \(P = \{ \bigcap_{r_j\in U} T(p_a,r_j) : U \subseteq R', \, \text{area}(\cdot) > 0 \}\). Assignment problem: minimize \(\sum c_{d,g} x_{d,g}\) subject to defender-polygon assignment, \(c_{d,g}\) = shortest distance for defender \(d\) to occupy polygon \(g\), solved with Hungarian algorithm [PAGE 19].

**Assumptions & breakdown regimes:** fixed \(t_{\text{react}}\), \(a_{\max}\), \(v_{\max}\) for all players; \(v_0=12.0\,\text{m/s}\) proxy when ball speed unknown; straight-line ball trajectory, no wind, constant \(\rho\); freeze frames are discrete, not continuous; SoccerMap counterfactual removal is out-of-distribution relative to training defenses; geometric cones in RQ3 ignore physics-based interception probability; 98% class imbalance renders raw accuracy uninformative [PAGE 6–7, 10, 13, 16, 21].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage begins with Wu and Swartz's observation that players possess the ball for less than three minutes per match, establishing the off-ball measurement gap that motivates the study [PAGE 1]. Expected disruption models [2], [3] and defensive-pressure frameworks [27]–[30] preceded this work but attributed impact primarily at team level or through on-ball actions; the authors explicitly position Lane Control as the first approach to quantify individual lane obstruction [PAGE 1]. Methodologically, Lane Control descends from Spearman's physics-based pass-probability and pitch-control models [9], [10] and Bekkers' pressing-intensity time-to-intercept framework [11], extending pointwise interception to a discretized corridor with left, center, and right lines [PAGE 6]. The threat layer inherits Expected Threat (xT) from Singh [14] and the pass-selection/pass-success surface architecture from Robberechts et al.'s un-xPass / SoccerMap tradition [6], [15]. The optimization layer echoes Everett et al.'s defender-positioning work [3], [31] but replaces their coarse Markov grid and graph-attention influence scores with a polygon-intersection set cover solved by the Hungarian algorithm [16], [17].

Multi-week traps emerge across temporal axes. First, the authors evaluate on 2024/25 Serie A and Big-5 data but validate player-level metrics on a single UEFA Euro 2020 match (Belgium vs. Portugal), so blocking-rate and impact rankings have no demonstrated week-to-week stability [PAGE 22–23]. Second, team-level rankings show cover-shadow-dependent teams sitting lower in the table while possession-dominant teams (Bologna, Como) rank low on blocking score [PAGE 22]; this style confound means a team's blocking score may regress simply because its tactical philosophy changes across matchweeks, not because defender quality changed. Third, the authors' own conclusion hypothesizes that fatigue degrades cover-shadow maintenance across a match [PAGE 26], yet the model contains no match-clock state, substitution variable, or time-decay in \(a_{\max}\), \(v_{\max}\), or reaction time, so it cannot detect within-game degradation and would falsely attribute late-game positional lapses to tactical error rather than physiological fatigue. Fourth, xT is drawn from a single historical Premier League season and held constant across all 2024/25 snapshots [PAGE 13]; offensive league trends and team-specific build-up evolution are ignored, making longitudinal comparisons of blocking score vulnerable to measurement drift unrelated to defensive behavior.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under match pressure—trailing late, protecting a lead, or facing a red card—teams regress to habitual structural shapes. The use cases show cover-shadow reliance correlates with lower table position and a limited-build philosophy [PAGE 22]; such teams likely intensify lane-blocking when defending a narrow lead, but the model's static snapshot cannot represent this state-dependent regime switch. A defender with a high blocking rate in a low-block session may abandon cover shadows entirely in a high-line crisis, producing a recursive habit regression unmodeled by the time-invariant features.

Counter-trap: the offense observes the defensive shape and adapts. Lane Control labels a lane blocked when a defender occupies the geometric corridor [PAGE 4–8], but the passer can switch to a third-man receiver, alter pass speed, or exploit the space behind the screening defender. RQ3's optimization assumes defenders move to cone polygons and the threat passively collapses [PAGE 19], yet a rational opponent re-weights pass-selection surfaces in response to the new defensive configuration. Because SoccerMap is retrained only on observed distributions, the counterfactual unblocked threat \(S'\) and the post-repositioning threat inherit no model of the attacker's best response, so the reported 75% threat reduction [PAGE 21] may overstate durable value if opponents learn to attack the vacated zones.

Clock: match time operates as an exogenous constraint absent from the formalism. The paper's conclusion flags fatigue as a future variable [PAGE 26], but the TTI equations fix \(t_{\text{react}}=0.7\,\text{s}\), \(a_{\max}=7.0\,\text{m/s}^2\), and \(v_{\max}=12.0\,\text{m/s}\) for all players at all minutes [PAGE 7]. A cover-shadow metric computed at minute 15 and minute 75 is therefore not comparable: identical defender coordinates imply identical interception probability despite divergent physiological capacity. Without a clock-coupled decay term, the theory of mind treats defenders as static automata, missing the recursive interaction where fatigue-induced positioning error invites offensive counter-adaptation, which in turn forces further defensive regression.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Lane Control models ball flight under quadratic drag with fixed air density \(\rho=1.22\,\text{kg/m}^3\), \(C_D=0.25\), \(A=0.038\,\text{m}^2\), \(m=0.42\,\text{kg}\), assuming no gravity, no Magnus force, and a straight-line path [PAGE 6]. Any lofted pass, knuckleball, or strong crosswind violates the straight-line assumption, shifting \(T_k\) and invalidating \(\Delta t = T_k - T^{\text{TTI}}_k\). Veto trigger: pass trajectory curvature or measured wind speed beyond the model's null assumptions renders Lane Control's blocking probability physically inconsistent.

Biomechanical layer veto: player TTI uses population-fixed \(t_{\text{react}}=0.7\,\text{s}\), \(a_{\max}=7.0\,\text{m/s}^2\), \(v_{\max}=12.0\,\text{m/s}\), and defender block radius \(r_{\text{block}}=0.7\,\text{m}\) [PAGE 7]. This ignores position-specific sprint profiles, age-related acceleration decline, deceleration limits, reach height, and individual reaction-time distributions. Velocity itself is inferred from sparse freeze-frame-to-next-event displacement divided by timestamp difference [PAGE 7], so rapid direction changes between events alias the true approach vector. Veto trigger: defenders operating outside the fixed kinematic envelope (e.g., elite sprinters, slower center-backs, or players with measured reaction time \(>1.0\,\text{s}\)) invalidate the sigmoid interception calibration \(s = \sqrt{3}\sigma/\pi\) with \(\sigma=0.20\) [PAGE 8].

Weather/environmental layer veto: air density is fixed at standard sea-level values; temperature, altitude, humidity, and pitch wetness are absent [PAGE 6]. Drag scales directly with \(\rho\), so high-altitude or hot-humid conditions change ball deceleration and time-to-intercept without any model correction. Wet pitch also alters player traction and effective acceleration, unmodeled by the constant \(a_{\max}\). Veto trigger: match conditions deviating from standard temperature/pressure or a wet pitch invalidate both ball TTI and player TTI simultaneously.

Adjudication: a snapshot passes cross-layer veto only if (i) the pass is a ground-driven foot pass with negligible aerodynamic curvature, (ii) all involved defenders' velocities are reliably inferred and within the fixed kinematic bounds, and (iii) environmental conditions approximate the model's reference atmosphere. The paper excludes high/aerial passes and set pieces [PAGE 2], partially mitigating the physical veto, but it does not filter by weather, altitude, or player kinematic class, leaving the biomechanical and environmental vetoes active across the full evaluation set.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Environmental drag mismatch. Verifiable condition: match played at altitude above 1,000 m or with sustained crosswind. RLVR veto: Lane Control's fixed \(\rho=1.22\,\text{kg/m}^3\) and zero-wind straight-line ball model underestimate drag-driven deceleration, inflating interception probability \(P^{\text{int}}_{j,k}\). Prediction: false-positive block rate rises above the baseline 10.89% line-corridor level for driven passes >20 m, and Lane Control's macro F1 drops below 0.40 in high-wind subsets. This is verifiable by stratifying Table 1's 69,500 passes by stadium altitude and match-day wind records.

Scenario 2 — Kinematic outlier defenders. Verifiable condition: defenders with measured reaction time > 1.0 s or sprint speed < 9.0 m/s (outside \(t_{\text{react}}=0.7\,\text{s}\), \(v_{\max}=12.0\,\text{m/s}\) fixed constants). RLVR veto: the accelerate-then-cruise TTI formula misestimates \(T^{\text{TTI}}_k\), corrupting \(\Delta t\) and the sigmoid centered at \(s=\sqrt{3}\sigma/\pi\) [PAGE 8]. Prediction: balanced accuracy for Lane Control falls below the geometric baselines (55.82%–56.79%) when evaluated exclusively on snapshots involving slow defenders, because the model systematically overrates their interception odds. Verifiable by merging the enriched Belgium–Portugal tracking data with player sprint profiles and re-running RQ1 classification stratified by defender speed quartile.

Scenario 3 — SoccerMap distribution shift under multi-defender removal. Verifiable condition: counterfactual removes two or more lane-blocking defenders simultaneously. RLVR veto: SoccerMap pass-selection and pass-success surfaces were trained on intact defensive configurations [PAGE 13]; removing multiple defenders is out-of-distribution, so \(P(D=(x,y)\mid S)\) and \(P(o=\text{success}\mid D=(x,y), S)\) extrapolate. Prediction: blocking score \(\text{threat}_{S'} - \text{threat}_S\) becomes non-monotonic—removing a second defender occasionally decreases estimated threat because the generated pass surfaces assign success probability to regions never observed under defensive pressure. Verifiable by computing blocking scores on the 63,037 Serie A snapshots for single-defender vs. paired-defender removal and testing for violations of monotonicity in threat reduction.
</RLVR_COUNTERFACTUAL_VETOES>
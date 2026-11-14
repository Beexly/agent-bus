---
source: "2014 Hot Hand Fallacy.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4244
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a provided research paper (2014 Hot Hand Fallacy.pdf) with 10 pages. They have provided the full text of all 10 pages in the prompt.

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response that:
- Does not mention any betting lines (spreads, totals, moneylines, odds).
- Uses formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cites exact [PAGE N] markers and verbatim quotes from source.
- Has >=1000 words total across the XML sections.
- Follows the exact XML section tags.

Let me plan content:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the paper's causal identification strategy, endogeneity of shot selection, errors-in-variables, OLS vs Logit/Probit clipping at [0.01, 0.99], n=4 heat window, complex heat vs simple heat, defender behavior, mechanical correlation between Simple Heat and P-hat, etc. Gray zones: causal interpretation of heat effect, unobserved specialization slopes, small effect sizes (1.2-2.4 pp), standard error precision concerns, clustered vs robust SEs.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from paper:
- Eq (1): P̂_is = α + β*(Game Condition Controls_is) + γ*(Shot Controls_is) + δ*(Defensive Controls_is) + θ*(Player Fixed Effects_i)
- Eq (2): Simple Heat_n = Actual % over past n shots
- Eq (3): Complex Heat_n = Actual % over past n shots - Expected % over past n shots
- Eq (4): Shot Distance_is = α + β*(Heat_is) + γ*(Controls_is) + θ*(Player Fixed Effects_i)
- Eq (5): Defender Distance_is = α + β*(Heat_is) + ...
- Eq (6): P(Same_is) = φ[α + β*(Heat_is) + ...]
- Eq (7): P̂_is = α + β*(Heat_is)
- Eq (8): P(Make_is) = α + β*(Heat_is) + θ*(Player Fixed Effects_i)
- Eq (9): P(Make_is) = α + β*(Heat_is) + γ*P̂_is
Units: probability [0,1], feet for distance, percentage points for effects, n in shots (dimensionless count), time in seconds (1/25th sec tracking), game condition controls (time remaining, score diff).
Page citations: [PAGE 1], [PAGE 2], etc.
Breakdown: assumptions (shot selection independence violated), breakdown regimes (OLS predicted values >1 or <0 clipped to 0.99/0.01 [PAGE 3], errors-in-variables, player fixed effects intercept-only not slope specialization [PAGE 6]).

RETROCAUSAL_GENEALOGY: Historical lineage from Kahneman & Tversky (1971/1985 local representativeness, law of small numbers) [PAGE 1], Gilovich, Vallone, Tversky (1985) canonical fallacy [PAGE 1], Adams 1992, Koehler & Conley 2003, Bar-Eli et al 2006, Rao 2009 [PAGE 1], Larry Summers anecdote [PAGE 1], this paper 2014 Harvard competition [PAGE 1]. Multi-week traps: small-sample streak inference over a week/month, gambler's fallacy vs hot hand, confirmation bias in shot selection, defensive adjustment lag.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Players believe they are hot -> take harder shots (shot distance +2.144 ft, defender distance -0.183 ft, P(Same) +1.5pp, P-hat drop 1.0pp) [PAGE 5, Table 2]. Defenders believe -> cover tighter. This creates a recursive loop: offense shoots harder because hot; defense tightens because hot; observed make probability conditional on difficulty still increases by 0.54pp per extra make in past 4 (Complex Heat) [PAGE 6, Table 3 col 3]. Crisis habit regression: under pressure, players revert to "hot hand" heuristics. Counter-trap: defense over-adjusts to perceived heat, leaving other players open. Clock: game clock, shot clock, quarter/score differential controls.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Indoor NBA arena, controlled environment, weather is null/vetoed (no weather effects [PAGE 2, indoor arenas]). Biomechanical: appendages not tracked [PAGE 6], shooter-defender height differential, angle, distance [PAGE 2], 2x2 ft distance bins [PAGE 2], SportVU 6 cameras 1/25th sec [PAGE 2]. Physical: optical tracking, no weather, no wind, consistent court dimensions. Vetoes: weather veto (indoor), lighting veto (consistent arena lighting), surface veto (hardwood). Breakdown: appendage tracking missing, release angle not measured, player specialization slopes not in fixed effects [PAGE 6].

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. Must avoid betting lines. Can talk about game outcome probabilities? Careful not to mention odds. Can mention probability of make, shot difficulty, etc.
Scenario 1: Complex Heat threshold veto. If Complex Heat_4 > 0 but P̂_is < 0.20 (very difficult shot), veto the "hot hand" activation; predicted make probability reverts to baseline P̂ (no β>0 bonus).
Scenario 2: Defender distance collapse veto. If closest defender distance < 0.91 m (3 ft) and heat high, shot difficulty dominates; predicted effect of heat on make probability attenuated to zero because physical contest blocks release.
Scenario 3: Player specialization slope veto. If player is a known corner-three specialist but takes a long two (outside specialization), player fixed effect intercept insufficient; P-hat mis-specified, causing errors-in-variables bias that can flip sign of β.

Need to ensure total words >= 1000 across sections. Let's aim for roughly 1500-2000 words total to be safe.

Important: No betting lines. Do not say "odds", "spread", "total", "moneyline". Use "probability", "percentage points", "likelihood".

Citations: Use [PAGE N] exactly. Include verbatim quotes where helpful.

Structure: The response should contain only the XML sections? The user says "across these exact XML sections". So I should output exactly those sections, probably in order. I will output the six XML tags with content. No extra text outside.

Let's draft carefully.

THINK_TRACE content (>=400 words):
Start with multi-hop causal chain. The paper challenges Gilovich et al. (1985) assumption of random shot selection from ensemble. The key endogeneity: heat influences shot selection (distance, defense, next shot), which biases naive hot hand tests. Need to control for shot difficulty P-hat. Then test if heat predicts make probability conditional on P-hat.

Gray-zone audit:
- OLS clipping at 0.01/0.99 creates boundary distortion for extreme P-hat [PAGE 3].
- Errors-in-variables: P-hat estimated in stage 1, used in stage 2; measurement error biases β [PAGE 6].
- Player FE only shifts intercept, not slope specialization [PAGE 6].
- n=4 window chosen arbitrarily though n=2..7 similar [PAGE 3].
- Simple Heat mechanically correlated with P-hat via constant defender quality; Complex Heat removes this [PAGE 3].
- Effect sizes modest: 0.54pp per extra make in past 4; 1.2% improvement relative to 45% baseline; 2.4% for two extra makes [PAGE 6].
- Standard errors may be imprecise; better specs might render insignificant [PAGE 7].
- Causal interpretation: heat is player-perceived, not exogenous; defender reaction confounds.

Multi-hop derivation:
1. Shot difficulty model P-hat (Eq 1) estimated on 70,862 observations, R^2=0.149 [PAGE 9 Table 1].
2. Heat defined as outperformance relative to expected (Eq 3).
3. Players with higher heat take longer shots (+2.144 ft per unit heat, Table 2 col 1) [PAGE 5].
4. Defenders tighten (-0.183 ft, Table 2 col 2) [PAGE 5].
5. Same shooter next shot probability +1.5pp (Table 2 col 3) [PAGE 5].
6. Overall P-hat drops 1.0pp (Table 2 col 4) [PAGE 5].
7. Conditional on P-hat, Complex Heat coefficient +0.0215 (Table 3 col 3) [PAGE 10], i.e., 2.15 percentage points increase in make probability per 1.0 unit of Complex Heat? Wait, need to check units. Complex Heat is a difference in percentages. If a player makes one more of past 4, Complex Heat increases by 0.25 (25 percentage points? Actually Actual % over past 4 changes by 1/4 = 0.25). Expected % maybe unchanged. So Complex Heat increases by 0.25. Coefficient 0.0215 on Complex Heat means for 0.25 increase, make probability increases by 0.0215*0.25 = 0.005375 = 0.54 percentage points [PAGE 6]. Yes.

Need to mention exact numbers from tables.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations in LaTeX. Units: probability dimensionless [0,1], distance in feet, time in seconds (1/25 s), score differential in points, heat in percentage points (dimensionless fraction), n dimensionless count. Breakdown regimes: OLS clipping, errors-in-variables, small effect vs SE precision, interior vs boundary predictions.

RETROCAUSAL_GENEALOGY: Cite Kahneman & Tversky 1971/1985 [PAGE 1], Gilovich et al 1985 [PAGE 1], subsequent studies [PAGE 1], Rao 2009 shot difficulty [PAGE 1], Larry Summers [PAGE 1], 2014 paper [PAGE 1]. Multi-week traps: weekly hot streak narratives, small-sample over inference, regression to mean across weeks, defensive adaptation over multiple games.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure (score differential, time remaining), players regress to heuristic "I'm hot" and take worse shots. Counter-trap: defense overplays hot hand, creating open looks for teammates; however same shooter takes next shot more often (Table 2 col 3), so teammates don't necessarily benefit. Clock: game clock and shot clock are controls; end-of-game pressure interacts with heat. The recursion: offense shoots because hot -> defense tightens -> shot difficulty rises -> make probability falls unconditionally -> but conditional on difficulty, true hot hand emerges (+0.54pp per extra make).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: indoor arena eliminates weather [PAGE 2]. Biomechanical: SportVU tracks center of mass, not appendages/finger release [PAGE 6]; height differential, angle, distance used [PAGE 2]. 2x2 ft bins [PAGE 2]. Player FE intercept-only [PAGE 6]. Weather veto: null set (indoor). Lighting veto: constant arena lighting. Surface veto: hardwood. Breakdown: missing release mechanics, unmodeled specialization slopes, fatigue proxied only by time remaining/score diff not direct physiological measure.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. High Complex Heat + Extreme Difficulty Veto. If Complex Heat_4 > 0 but P̂_is < 0.15 (top quintile difficulty), veto hot-hand bonus. Prediction: make probability equals P̂_is (β=0), not P̂ + 0.0215*Heat. Verifiable via holdout set of hardest shots.
2. Defender Proximity Collapse Veto. If closest defender distance <= 1.22 m (4 ft) (roughly average) and heat high, physical contest vetoes perceptual heat. Prediction: coefficient on heat in Eq 9 attenuated to insignificance when defender distance < median because shot alteration dominates shooter state.
3. Specialization Slope Mismatch Veto. If player takes shot outside historical specialization (e.g., center attempting pull-up 3pt), player fixed effect intercept misestimates P-hat. Prediction: errors-in-variables bias causes Eq 9 coefficient on Complex Heat to flip sign or attenuate toward zero in subsample of non-specialist shots.

All predictions must avoid betting lines.

Now word count. I need to ensure each section is substantial. THINK_TRACE definitely >=400 words. Others can be shorter but total >=1000. I'll write rich content.

Need to include verbatim quotes? The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page markers. Let's include a few:
- "Each player has an ensemble of shots that vary in difficulty ... and each shot is randomly selected from this ensemble" (Gilovich, Vallone and Tversky, 1985, emphasis added) [PAGE 1].
- "We used OLS rather than a Logit or Probit regression because of issues with model convergence." [PAGE 3].
- "not being able to track appendages, not specifying relationships between variables ... and that player fixed effects are not precise enough..." [PAGE 6].
- "A player who makes one more of his past four shots sees his shooting percentage increase by 0.54 percentage points." [PAGE 6].

I need to be careful: The user says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I must only use equations from the paper or formally defined ones. I will stick to the paper's equations and clearly label them.

Let's draft the XML.

Make sure no mention of "odds", "spread", "total", "moneyline". I will avoid these entirely. Use "probability", "likelihood", "percentage points", "field goal percentage".

Let's write.

THINK_TRACE:

Word target ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.

RETROCAUSAL_GENEALOGY: ~250 words.

RECURSIVE_THEORY_OF_MIND: ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words.

RLVR_COUNTERFACTUAL_VETOES: ~300 words.

Total ~2000 words. Safe.

Need to ensure valid XML-like tags. No markdown code blocks? The user wants exact XML sections. I'll output raw XML tags.

Let's compose carefully.

Check for any accidental betting terms. None.

Check LaTeX formatting: use \( ... \) or \[ ... \]. Fine.

Check page citations: [PAGE 1] through [PAGE 10]. Use exact.

Check verbatim quotes: Use quotation marks and page markers.

Let's write the content now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s central identification problem is a two-stage endogeneity chain. First, shot selection is not random: players who perceive themselves as hot alter their own shot difficulty, and defenders alter their spacing in response [PAGE 1]. The seminal Gilovich, Vallone, and Tversky (1985) assumption—that “each shot is randomly selected from this ensemble” of varying-difficulty shots—is therefore violated [PAGE 1]. The authors’ first hop is to document this violation: higher Complex Heat is associated with longer shot distance (+2.144 feet per unit of heat, significant at the 1% level), tighter close defense (defender distance shrinks by 0.183 feet), a 1.5 percentage-point increase in the probability that the same shooter takes the team’s next shot, and a 1.0 percentage-point drop in predicted shot difficulty P̂ [PAGE 5, Table 2]. Because more difficult shots have lower baseline make probabilities, an unconditional regression of makes on heat will be biased downward; indeed, the baseline specification finds a negative, insignificant coefficient on heat [PAGE 6].

The second hop constructs a difficulty-controlled test. Stage one estimates P̂_is from Equation (1), a linear probability model with game-condition, shot, defensive, and player-fixed-effect controls, fit by OLS on 70,862 observations with R² = 0.149 [PAGE 2; PAGE 9, Table 1]. Because OLS can produce predictions outside [0,1], values are clipped to 0.99 or 0.01 [PAGE 3]. Stage two regresses the realized make indicator on Complex Heat and P̂ [Equation (9)]. If shots are independent and shot selection is exogenous, the heat coefficient β should equal zero; if a hot hand exists conditional on difficulty, β > 0 [PAGE 6]. The result is a positive, significant Complex Heat coefficient of 0.0215 (robust standard error 0.00947), implying that making one additional shot out of the previous four raises the make probability by 0.54 percentage points, or roughly a 1.2% improvement relative to a 45% baseline [PAGE 6, Table 3, column 3].

Gray-zone audit: (1) The heat measure is player-perceived, not exogenously assigned, so defender reaction and offensive shot selection remain jointly determined even after controlling for P̂ [PAGE 5]. (2) Errors-in-variables are a serious threat because P̂ is estimated in stage one and used as a regressor in stage two; imprecision in P̂ can bias β toward or away from zero [PAGE 6]. (3) Player fixed effects shift only the intercept, not the slope, so player-specific shot specialization (e.g., a corner-three specialist taking long twos) is mismeasured [PAGE 6]. (4) The OLS functional form and boundary clipping distort predictions near 0 and 1 [PAGE 3]. (5) Effect sizes are small: the authors caution that standard errors may be imprecise and that better specifications could render the effect insignificant [PAGE 7]. (6) The n = 4 lookback window is a convenience choice, though results are similar for n = 2 through 7 [PAGE 3]. These gray zones imply that the causal claim “heat causes higher conditional accuracy” rests on the assumption that P̂ fully captures difficulty and that unmodeled shooter–shot interactions are orthogonal to perceived heat—an assumption that is plausible but not proven.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX specifications, units, and breakdown regimes.

Stage-one shot-difficulty operator (Equation 1) [PAGE 2]:
\[
\hat{P}_{is} = \alpha + \beta \cdot (\text{Game Condition Controls}_{is}) + \gamma \cdot (\text{Shot Controls}_{is}) + \delta \cdot (\text{Defensive Controls}_{is}) + \theta \cdot (\text{Player Fixed Effects}_i)
\]
Units: \(\hat{P}_{is}\) is a predicted make probability in \([0,1]\); game-condition controls include time remaining (seconds) and score differential (points); shot controls use two-by-two-foot distance bins (feet) and shot-category dummies; defensive controls include closest-defender distance (feet), defender angle (radians relative to shooter–basket line), and shooter–defender height differential interacted with distance (feet). Estimation sample: 70,862 shots; R² = 0.149 [PAGE 9, Table 1].

Heat operators (Equations 2–3) [PAGE 3]:
\[
\text{Simple Heat}_n = \text{Actual make percentage over past } n \text{ shots}
\]
\[
\text{Complex Heat}_n = \text{Actual \% over past } n - \text{Expected \% over past } n
\]
Units: heat is measured in percentage points (dimensionless fraction); the authors report all results for n = 4, though n = 2 through 7 were examined [PAGE 3].

Shot-selection response equations (Equations 4–7) [PAGES 4–5]:
\[
\text{Shot Distance}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta \cdot \text{Player FE}_i \quad \text{(Eq. 4)}
\]
\[
\text{Defender Distance}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta \cdot \text{Player FE}_i \quad \text{(Eq. 5)}
\]
\[
P(\text{Same}_{is}) = \Phi\big[\alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta \cdot \text{Player FE}_i\big] \quad \text{(Eq. 6, Probit)}
\]
\[
\hat{P}_{is} = \alpha + \beta \cdot \text{Heat}_{is} \quad \text{(Eq. 7)}
\]
Results: shot distance increases by 2.144 feet per unit of heat; defender distance falls by 0.183 feet (average defender distance ≈ 4 feet, so ≈ 1% decrease); same-shooter next-shot probability rises by 1.5 percentage points; \(\hat{P}_{is}\) falls by 1.0 percentage point [PAGE 5, Table 2].

Difficulty-controlled hot-hand test (Equations 8–9) [PAGE 6]:
\[
P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \theta \cdot \text{Player FE}_i \quad \text{(Eq. 8, baseline)}
\]
\[
P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \hat{P}_{is} \quad \text{(Eq. 9, difficulty-controlled)}
\]
Null hypothesis of independence: \(\alpha = 0, \beta = 0, \gamma = 1\). Hot-hand alternative: \(\beta > 0\) [PAGE 6]. Column (3) of Table 3 reports Complex Heat coefficient 0.0215 (SE 0.00947), \(\hat{P}_{is}\) coefficient ≈ 1.020, and constant −0.0116 [PAGE 10, Table 3].

Breakdown and singularity regimes: OLS predictions clipped to [0.01, 0.99] create boundary distortion for extreme difficulty shots [PAGE 3]; errors-in-variables from generated regressor \(\hat{P}_{is}\) can bias \(\beta\) [PAGE 6]; player fixed effects are intercept-only and do not model shot-specialization slopes [PAGE 6]; small effect magnitude (0.54 percentage points per extra make in past four) means imprecise standard errors could nullify significance [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week inference traps.

The intellectual genealogy begins with Kahneman and Tversky’s “local representativeness” or “law of small numbers,” the claim that people expect chance processes to manifest their essential characteristics even in short sequences [PAGE 1]. The canonical empirical refutation is Gilovich, Vallone, and Tversky (1985), which found no serial correlation in successive shots for the Philadelphia 76ers and no evidence in free-throw series for the Boston Celtics and Cornell teams [PAGE 1]. Subsequent confirmations include Adams (1992), Koehler and Conley (2003), Bar-Eli, Avugos, and Raab (2006), and Rao (2009) [PAGE 1]. The 2014 paper positions itself as a rejoinder to this consensus, arguing that the earlier literature rested on the unexamined shot-selection independence assumption [PAGE 1]. It also notes the cultural persistence of the belief: players report feeling they “almost can’t miss” after made shots, and Larry Summers publicly chastised the Harvard men’s basketball team for believing in the phenomenon [PAGE 1].

Multi-week traps arise from applying this single-game, shot-level framework to longer horizons. Over a week or a month, a player’s accumulated made/missed streak is subject to regression to the mean: a “hot” week is statistically likely to be followed by average performance, inviting the gambler’s fallacy in reverse [PAGE 1]. Defensive adaptation operates on a multi-game timescale: if a team repeatedly feeds a perceived hot player, opponents can scout and overplay that player, changing the defensive-control variables in Equation (1) across games [PAGE 5]. Fatigue and effort, proxied only by time remaining and score differential [PAGE 2], accumulate across a week of games and are not directly measured, so a multi-week “hot hand” signal may reflect recovery cycles rather than a persistent shooting-state parameter. The paper’s n = 4 lookback window intentionally restricts heat to consecutive shots within the same game precisely to avoid these cross-game confounding traps [PAGE 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

The theory of mind is recursive across three agents: the shooter, teammates, and defenders. When a shooter perceives heat, a crisis habit regresses shot selection toward more difficult attempts: shot distance rises by 2.144 feet per heat unit, predicted difficulty \(\hat{P}_{is}\) falls by 1.0 percentage point, and the shooter becomes 1.5 percentage points more likely to take the team’s next shot [PAGE 5, Table 2]. This is not a cold statistical streak; it is a behavioral response to perceived state. Defenders, in turn, update their own theory of the shooter’s state and close out tighter: defender distance falls by 0.183 feet, about 1% of the average four-foot gap [PAGE 5]. The defense’s counter-trap is to over-adjust to perceived heat, thereby conceding open looks to teammates; however, the same-shooter next-shot probability increases, suggesting teammates defer to the hot hand rather than exploiting the defensive overreaction [PAGE 5, Table 2, column 3].

Clock structure enters through the game-condition controls: quarter, score differential, and their interaction proxy for pressure, fatigue, and effort [PAGE 2]. Under end-of-game clock pressure, crisis habit regression intensifies—players are more likely to act on the hot-hand heuristic when the game is close and time is short, because the perceived value of a “hot” shooter’s possession rises relative to a structured play. The recursion completes at the make-probability level: unconditionally, heat appears negative or null because difficult shots dominate [PAGE 6]; conditional on difficulty via Equation (9), the shooter’s underlying state still predicts a 0.54 percentage-point make-probability increase per extra made shot in the prior four [PAGE 6, Table 3]. Thus the loop is: perceived heat → harder shot selection + tighter defense → lower raw accuracy → difficulty-controlled positive heat effect. The clock does not stop this loop; it modulates its intensity via score-differential interactions in the control set [PAGE 4–5].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer: All observations come from NBA games in the 15 arenas equipped with SportVU optical tracking, an indoor, climate-controlled environment. Weather—wind, temperature, humidity, precipitation—is a null set; no weather variable appears in Equation (1) because it is constant across the sample [PAGE 2]. Court dimensions, hoop height, and lighting are standardized across NBA venues, removing surface and lighting vetoes.

Biomechanical layer: SportVU uses six cameras (three per side) tracking players, referees, and the ball every 1/25th of a second, yielding precise three-dimensional coordinates for ball and all ten players [PAGE 2]. The difficulty model uses closest-defender distance, defender angle, shooter–defender height differential, and their interactions [PAGE 2]. However, the authors explicitly acknowledge that appendages are not tracked, release mechanics are unspecified, and player fixed effects adjust only the intercept, not shot-specific slopes such as a player’s specialization in corner threes versus pull-up twos [PAGE 6]. This is a biomechanical veto: the model cannot distinguish a contested release with a high arc from an identical center-of-mass trajectory with a flat release, so P̂ may misstate true physical difficulty for non-average shooters.

Weather veto proof: Because games are indoors, any cross-game weather confound is impossible; the veto is structural rather than statistical. The remaining veto candidates are sensor-level (missing appendage data), specification-level (incorrect distance–angle interactions), and aggregation-level (player fixed effects absorbing specialization). Breakdown regime: if a player’s shot-specific skill slope covaries with perceived heat—e.g., a streak of easy layups followed by a difficult jumper—the errors-in-variables problem in Equation (9) can bias the heat coefficient toward zero or produce a spurious sign [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning counterfactual veto scenarios and predictions. No betting lines, spreads, totals, or moneylines are invoked; all predictions are stated in probability or percentage-point units.

Veto scenario 1: Extreme-difficulty perceptual override. Define a veto region where Complex Heat₄ > 0 but the stage-one predicted difficulty lies in the bottom decile of make probability, \(\hat{P}_{is} < 0.15\). Veto rule: do not activate the hot-hand bonus; force the stage-two heat coefficient to zero for these observations. Verifiable prediction: on a holdout set of shots with \(\hat{P}_{is} < 0.15\), the realized make frequency will not exceed \(\hat{P}_{is}\) by more than sampling noise; the Equation (9) \(\beta\) estimated on this subsample will be statistically indistinguishable from 0, whereas the full-sample \(\beta = 0.0215\) (SE 0.00947) [PAGE 10] is driven by moderate-difficulty shots [PAGE 6].

Veto scenario 2: Defender-proximity collapse. Define a veto region where closest-defender distance is less than 1.22 meters (4 feet), approximately the sample average [PAGE 5], and Complex Heat₄ is positive. Veto rule: physical contest dominates perceptual state; set \(\beta = 0\) for high-contest observations. Verifiable prediction: when defender distance < 1.22 m, the coefficient on Complex Heat in Equation (9) attenuates to insignificance because shot alteration (contest, release perturbation) swamps any shooter-state effect; the residual make probability remains bounded by \(\hat{P}_{is}\) plus a small estimation error, not by a heat-derived additive term [PAGE 2; PAGE 6].

Veto scenario 3: Specialization slope mismatch. Define a veto region where a player attempts a shot outside their historical specialization class—for example, a traditional center attempting a pull-up jump shot beyond 4.88 meters (16 feet) while their player fixed effect was estimated primarily on interior finishes. Veto rule: intercept-only player fixed effects misestimate \(\hat{P}_{is}\); the generated-regressor error in Equation (9) is correlated with heat, invalidating \(\beta\). Verifiable prediction: in the non-specialist subsample, the Equation (9) coefficient on Complex Heat will flip sign or collapse toward zero relative to the specialist subsample, because \(\hat{P}_{is}\) is mismeasured and the errors-in-variables bias dominates the true heat effect [PAGE 6; PAGE 10]. All three vetoes are falsifiable with the existing SportVU shot log by interacting heat with difficulty deciles, defender-distance bins, and player–shot-category specialization indicators.
</RLVR_COUNTERFACTUAL_VETOES>
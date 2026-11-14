---
source: "2014 - The Hot Hand A New Approach to an Old Fallacy - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2014"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4736
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "The Hot Hand: A New Approach to an Old Fallacy" by Bocskocsky, Ezekowitz, and Stein (2014 MIT Sloan Sports Analytics Conference).

Constraints:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need to be careful: The source text provided is pages 1-10 of the PDF (the user says PAGES: 12 but text ends at page 10 in the provided markdown? Let's check: the text shows pages 1 through 10 explicitly numbered. There might be page 11-12 references/appendix not fully shown? The text ends with Table 3 notes on page 10. I should cite based on visible page numbers in the text: [PAGE 1], [PAGE 2], etc. The user says PAGES: 12 but the provided text ends at page 10. I must cite exact [PAGE N] markers from what is provided. I can refer to [PAGE 1] through [PAGE 10].

Key content from paper:
- Dataset: 83,000+ shots from 2012-2013 NBA season, SportVU optical tracking, 15 arenas. [PAGE 1, PAGE 2]
- Shot difficulty model P̂: OLS regression predicting probability of make. Four categories: Game Condition Controls, Shot Controls, Defensive Controls, Player Fixed Effects. [PAGE 2]
- OLS rather than Logit/Probit due to convergence. Predicted values >1 replaced with 0.99, <0 with 0.01. [PAGE 2]
- R^2 = 0.149, Observations 70,862 in Table 1. [PAGE 8]
- Heat definitions:
  - Simple Heat_n = Actual % over past n shots. [PAGE 2]
  - Complex Heat_n = Actual % over past n shots - Expected % over past n shots (based on P̂). [PAGE 2]
  - n = 4 reported. [PAGE 2]
- Players believe in hot hand: shoot further (2.144 feet increase per unit heat? Wait, coefficient 2.144*** on Heat in shot distance regression. If Complex Heat increases by 0.25 (one more make out of 4), distance increases by ~6 inches. Average shot distance 12.5 feet, ~5% increase. [PAGE 4]
- Defender distance shrinks: -0.183*** coefficient. One more make out of past 4 shrinks defender distance by 0.046 feet (~half inch). Average defender distance ~4 feet, ~1% decrease. [PAGE 4]
- Likelihood of taking next shot: Probit marginal effect 0.0610***. One more average-difficulty shot increases probability by 1.5 percentage points (0.061*0.25). Average player ~20% chance, so 7.6% increase. [PAGE 4]
- Overall shot difficulty: P̂ drops by 1.0 percentage points (coefficient -0.0419***, times 0.25 = ~0.0105? Wait they say "A player who makes an additional shot will on average see his P̂ value drop by 1.0 percentage points." Let's check: coefficient on Heat is -0.0419. If Heat increases by 0.25 (one more make out of 4), change in P̂ = -0.0419 * 0.25 = -0.010475, i.e., about 1.0 percentage point. Yes. Average shot ~40% chance, so 2.5% more difficult. [PAGE 4]
- Hot Hand test:
  - Eq (8): P(Make) = α + β*Heat + θ*Player FE. Baseline, no difficulty control. Coefficient negative but insignificant (Table 3 col 1: Simple Heat -0.0106, not significant). [PAGE 5, PAGE 10]
  - Eq (9): P(Make) = α + β*Heat + γ*P̂. Controls for difficulty. No player FE because P̂ encapsulates them. If no hot hand: α=0, β=0, γ=1. If hot hand: β>0. [PAGE 5]
  - Col 2 uses Simple Heat with P̂: significant "cold hand" effect (-0.0237***). Bias of Simple Heat. [PAGE 5]
  - Col 3 uses Complex Heat with P̂: 0.0215** (0.00947). One more make out of past 4 (0.25 increase in Complex Heat) -> shooting percentage increase by 0.54 percentage points (0.0215 * 0.25 = 0.005375). Average FG% ~45%, so ~1.2% improvement. Two more makes -> 2.4% improvement. [PAGE 5]
- Drawbacks: errors-in-variables, P̂ imprecision, not tracking appendages, misspecified relationships, player FEs don't adjust slopes for shot specialization. OLS may not be optimal. Effect sizes small, standard errors imprecise. [PAGE 5, PAGE 6]

Need to produce >=1000 words total across sections. THINK_TRACE >=400 words.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the logical chain: Gilovich et al. 1985 assumption of random shot selection -> violation via endogenous shot selection -> difficulty model P̂ -> Complex Heat definition -> identification of hot hand conditional on difficulty. Audit gray zones: OLS clamping at [0.01, 0.99], errors-in-variables from generated regressor P̂, n=4 arbitrariness, within-game only consecutive shots, defender behavior equilibrium, selection bias in who shoots when hot, small effect sizes vs standard error imprecision. Multi-hop: shot selection -> difficulty -> perceived heat -> actual performance conditional on difficulty.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations for shot difficulty model, Simple/Complex Heat, regression specifications (4-9), coefficient interpretations, units (feet, percentage points, probability units), page citations [PAGE N], breakdown of Table 1, 2, 3 values, breakdown regimes (clamping, n range 2-7, OLS vs Logit, errors-in-variables).
- RETROCAUSAL_GENEALOGY: Historical lineage: Kahneman & Tversky 1971/1982 local representativeness, law of small numbers; Gilovich, Vallone, Tversky 1985 canonical fallacy; Adams 1992; Koehler & Conley 2003; Bar-Eli et al. 2006; Rao 2009; Davidson 2013 (Summers). Multi-week traps: persistence of belief despite evidence, strategic exploitation by defenses/teammates, temporal aggregation bias, small sample streak inference.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression (players regress to mean under pressure?), counter-trap (defense adjusts to perceived hot hand, creating endogenous difficulty), clock (game time/score differential controls, within-game consecutive shots only, finite n=4 lookback window). How beliefs about beliefs create fixed points.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. SportVU tracks center of mass, not appendages [PAGE 5]; no weather (indoor arena); biomechanical specialization not captured by player fixed effects (slopes not intercepts) [PAGE 5]; fatigue proxied by time/score but not directly measured; defender distance/angle measured but not close-out speed; these are veto layers that could invalidate P̂.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need to propose 3 counterfactual veto scenarios that are verifiable, with predictions. Examples: (1) If P̂ is replaced by a hierarchical Bayesian model with player-shot-type random slopes, does β on Complex Heat remain significant? Prediction: attenuates toward zero. (2) If we restrict to catch-and-shoot mid-range shots with identical defensive distance and shot clock, does hot hand disappear? Prediction: β becomes insignificant. (3) If we instrument for heat using teammate shot quality or exogenous defensive rotations rather than past made shots, does effect persist? Prediction: null. Must be verifiable (falsifiable) and give predictions. No betting lines.

Need to ensure no betting lines. No mention of odds, spreads, etc.

Need exact XML section tags. Must be >=1000 words total. THINK_TRACE >=400 words.

Let's draft carefully.

Word count planning:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~150 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1550 words. Good.

Citations: Use [PAGE 1], [PAGE 2], etc. Must include verbatim quotes where relevant. I'll include short verbatim quotes from the text.

Let's write.

Important: The user says "STRICT INVARIANTS... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include [PAGE N] and quotes.

Check page numbers in text:
- Page 1: Abstract, Introduction, Gilovich quote, key assumption quote.
- Page 2: Data, SportVU, shot log, shot difficulty model categories, OLS clamping, Simple/Complex Heat definitions, n=4.
- Page 3: Section 3, empirical strategy, shot distance, defender distance, likelihood next shot, overall shot difficulty.
- Page 4: Results shot distance, defender distance, likelihood next shot, overall shot difficulty.
- Page 5: Section 4, Eq 8, Eq 9, baseline, difficulty controlled, results discussion, drawbacks.
- Page 6: Conclusion.
- Page 7: Acknowledgements, References.
- Page 8: Appendix Table 1.
- Page 9: Appendix Table 2.
- Page 10: Appendix Table 3.

So [PAGE 1] through [PAGE 10] are valid. I'll cite them.

Need to avoid toy equations. Formal LaTeX only. No invented ratios.

Let's compose.

THINK_TRACE section: deep derivation. Start from Gilovich et al. assumption. The paper's identification strategy rests on relaxing random shot selection. If shot selection is endogenous to perceived heat, then raw correlation between past makes and current make is biased downward (because hot players take harder shots). The difficulty model P̂ is a first-stage generated regressor. Complex Heat = actual - expected over past n. Then regress current make on Complex Heat and P̂. The coefficient on Complex Heat identifies hot hand conditional on difficulty. Gray zones: OLS clamping creates measurement error at boundaries; P̂ is estimated, not true, causing errors-in-variables (generated regressor problem) [PAGE 5]; n=4 chosen from 2-7 but arbitrary [PAGE 2]; within-game only, so cross-game hot hand not tested [PAGE 2]; player fixed effects absorb intercept but not shot-specific slope specialization [PAGE 5]; small effect (0.54 pp) relative to standard error imprecision [PAGE 6]. Multi-hop: shot difficulty -> shot selection -> perceived heat -> conditional performance -> inference on hot hand.

SOURCE_OPERATORS_AND_EQUATIONS: Formalize.
Shot difficulty: \(\hat{P}_{is} = \mathbb{E}[Y_{is}=1 | X_{is}]\) estimated via OLS, clamped: \(\hat{P}_{is} \leftarrow 0.99\) if >1, \(0.01\) if <0 [PAGE 2].
Simple Heat: \(SH_{i,t} = \frac{1}{n}\sum_{k=1}^{n} Y_{i,t-k}\) [PAGE 2].
Complex Heat: \(CH_{i,t} = SH_{i,t} - \frac{1}{n}\sum_{k=1}^{n} \hat{P}_{i,t-k}\) [PAGE 2].
Baseline: \(P(Make_{is}) = \alpha + \beta Heat_{is} + \theta_i + \epsilon_{is}\) [PAGE 5].
Difficulty-controlled: \(P(Make_{is}) = \alpha + \beta Heat_{is} + \gamma \hat{P}_{is} + \epsilon_{is}\) [PAGE 5].
No hot hand null: \(\alpha=0, \beta=0, \gamma=1\) [PAGE 5].
Table values: col (3) Table 3: \(\beta=0.0215^{**}\), SE=0.00947 [PAGE 10]. Marginal effect: 0.25 increase in CH (one more make in past 4) -> \(0.0215 \times 0.25 = 0.005375\) ≈ 0.54 pp [PAGE 5].
Shot distance: \(\beta=2.144^{***}\), one more make/4 -> +0.536 ft ≈ 6 inches [PAGE 4].
Defender distance: \(\beta=-0.183^{***}\), one more make/4 -> -0.04575 ft ≈ 0.55 inches [PAGE 4].
P(Same shooter): Probit ME 0.0610***, 0.25 -> 0.01525 ≈ 1.5 pp [PAGE 4].
Overall P̂: \(\beta=-0.0419^{***}\), 0.25 -> -0.0105 ≈ -1.0 pp [PAGE 4].
Breakdown regimes: clamping at [0.01,0.99] creates attenuation near boundaries [PAGE 2]; OLS non-convergence reason [PAGE 2]; errors-in-variables if P̂ imprecise [PAGE 5]; n range 2-7 [PAGE 2].

RETROCAUSAL_GENEALOGY: Kahneman & Tversky local representativeness [PAGE 1]. GVT 1985 found no serial correlation [PAGE 1]. Adams 1992, Koehler & Conley 2003, Bar-Eli et al. 2006, Rao 2009 confirmed [PAGE 1]. Rao 2009 noted shot difficulty increases after makes [PAGE 1]. This paper 2014 extends by measuring difficulty via SportVU [PAGE 1-2]. Multi-week traps: belief persistence across seasons; strategic adaptation by defenses within games; temporal aggregation (season FG% vs streak); small-n streak inference; endogeneity of shot selection masking true effect.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, players may revert to habitual shot profiles, but heat alters that. Counter-trap: defense tightens on perceived hot shooter (defender distance shrinks) [PAGE 4], which increases difficulty and can mechanically suppress shooting percentage, creating a self-defeating prophecy if unmodeled. Clock: game clock/score differential controls for pressure and fatigue [PAGE 2]; within-game consecutive shots only means the "clock" resets each game [PAGE 2]; n=4 lookback is a finite memory window. Theory of mind: shooter believes defense believes shooter is hot; defense believes shooter believes defense will adjust; equilibrium shot difficulty shifts.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: SportVU tracks 10 players + ball at 25 Hz but cannot track appendages (fingers, release angle) [PAGE 5]; no weather because indoor arena (controlled environment); biomechanical layer: player fixed effects shift intercept but not slope, so shot-type specialization (e.g., Durant vs Chandler on identical jump shot) is misspecified [PAGE 5]; defender distance/angle measured but close-out velocity and contest timing not modeled; fatigue proxied by time/score but not physiological load; these layers veto the completeness of P̂. If any omitted variable correlates with both heat and make probability, β is biased.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Hierarchical shot-type random slopes: Replace player FE intercept with player-by-shot-type random slopes in P̂. Verifiable: re-estimate Table 3 col (3). Prediction: β on Complex Heat attenuates toward zero and loses significance because shot specialization absorbs part of the "heat" signal.
2. Restricted sample to catch-and-shoot jumpers within 15-17 ft, defender distance 2-4 ft, shot clock >10s. Verifiable: subset of SportVU shots. Prediction: if hot hand is purely shot selection, β collapses to null; if true physiological/psychological hot hand, β remains positive.
3. Exogenous instrument for heat: Use lagged teammate shot quality or defensive rotation forced by off-ball movement as instrument for current shooter's heat, excluding own past makes. Verifiable: 2SLS with first-stage heat on instrument. Prediction: IV estimate of β on heat is null or sign-switches, revealing OLS estimate is driven by selection/endogeneity rather than a causal hot hand.

All predictions are falsifiable with the SportVU data. No betting lines.

Need to make sure total words >= 1000. Let's write fully.

Be careful with LaTeX formatting inside XML tags. Should be fine.

Also need verbatim quotes. I'll include a few:
- "Each player has an ensemble of shots that vary in difficulty ... and each shot is randomly selected from this ensemble" (Gilovich, Vallone and Tversky, 1985, emphasis added). [PAGE 1]
- "Players who have exceeded their expectation over recent shots shoot from significantly further away, face tighter defense..." [PAGE 1 abstract]
- "we used OLS rather than a Logit or Probit regression because of issues with model convergence." [PAGE 2]
- "not being able to track appendages... player fixed effects are not precise enough to accurately estimate P̂..." [PAGE 5]

Let's draft now.

Check word count as I go mentally. THINK_TRACE needs >=400 words. I'll write substantial.

I will not mention betting lines at all.

Proceed to final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal logic rests on a multi-hop chain that begins with Gilovich, Vallone, and Tversky (1985), whose foundational assumption is quoted verbatim: “Each player has an ensemble of shots that vary in difficulty (depending, for example, on the distance from the basket and on defensive pressure), _and each shot is randomly selected from this ensemble_ ” (Gilovich, Vallone and Tversky, 1985, emphasis added) [PAGE 1]. If shot selection is truly random, then a raw correlation between past shot outcomes and current shot outcomes is an unbiased test of the hot hand. Bocskocsky, Ezekowitz, and Stein violate this assumption by showing that players who have outperformed over recent shots systematically select harder shots: they shoot from farther away, face tighter defense, take their team’s next shot more often, and accept lower predicted make probabilities [PAGE 1, PAGE 4]. Because harder shots have lower baseline conversion, this endogenous difficulty increase mechanically masks any genuine positive serial correlation in shooting performance. The first hop, therefore, is from shot selection to shot difficulty; the second hop is from difficulty to measured heat; the third hop is from heat to current make probability conditional on difficulty.

The empirical implementation uses SportVU optical tracking data at 1/25th-second resolution across 15 arenas during the 2012-2013 NBA season, synthesizing over 83,000 shots [PAGE 1, PAGE 2]. A first-stage shot-difficulty model \(\hat{P}_{is}\) estimates the probability of a make for player \(i\) on shot \(s\) using game conditions, shot location and category, defensive distance/angle/height differential, and player fixed effects [PAGE 2]. Because OLS was chosen over Logit/Probit due to convergence issues, predicted values are clamped to \([0.01, 0.99]\) when they exceed the unit interval [PAGE 2]. Heat is then defined in two ways. Simple Heat\(_n\) is the raw actual percentage over the past \(n\) shots; Complex Heat\(_n\) subtracts the expected percentage over those same \(n\) shots, computed from the \(\hat{P}\) values [PAGE 2]. The authors set \(n=4\) after checking \(n=2\) through \(7\), though they acknowledge discretion in that choice [PAGE 2].

The identification strategy regresses the current make indicator on Complex Heat and \(\hat{P}\), without player fixed effects because \(\hat{P}\) already embeds them [PAGE 5]. Under the null of no hot hand, \(\alpha=0\), \(\beta=0\), and \(\gamma=1\) in \(P(\text{Make}) = \alpha + \beta \cdot \text{Heat} + \gamma \cdot \hat{P} + \epsilon\); under the alternative, \(\beta>0\) [PAGE 5]. The headline result is a coefficient of \(0.0215^{**}\) (SE \(= 0.00947\)) on Complex Heat in Table 3, column (3) [PAGE 10], implying that making one additional shot out of the past four raises the make probability by roughly \(0.54\) percentage points on a \(\sim 45\%\) baseline, or about \(1.2\%\) [PAGE 5].

Gray-zone audit: (1) Errors-in-variables. Because \(\hat{P}\) is a generated regressor estimated in a first stage, imprecision in \(\hat{P}\) propagates into the second stage; the authors themselves cite “errors-in-variables” as the principle worry [PAGE 5]. (2) Clamping boundary. Replacing out-of-bounds OLS predictions with \(0.99\) or \(0.01\) introduces non-classical measurement error exactly where shot difficulty is most extreme [PAGE 2]. (3) Fixed-effects limitation. Player fixed effects shift intercepts but not slopes, so shot-type specialization—e.g., a player who is uniquely good at corner threes but average elsewhere—is not captured by \(\hat{P}\) [PAGE 5]. (4) Omitted biomechanics. SportVU tracks player and ball centroids but cannot track appendages, release angles, or shot-contest timing, meaning the difficulty model omits potentially decisive physical variables [PAGE 5]. (5) Temporal scope. Heat is computed only over consecutive shots within the same game; cross-game carryover and multi-game “hot” windows are excluded by construction [PAGE 2]. (6) Effect-size vs. inference. The authors caution that standard errors may be imprecise relative to the small mean effects and that better specifications could render the results insignificant [PAGE 6]. Each of these gray zones threatens the internal validity of the \(0.0215\) estimate and must be weighed before treating the hot hand as established rather than merely plausible.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX specifications, SI/probability units, page citations, and breakdown.

Shot difficulty operator: \(\hat{P}_{is} = \mathbb{E}[Y_{is}=1 \mid X_{is}]\), where \(Y_{is}\in\{0,1\}\) is the make indicator and \(X_{is}\) contains game conditions (quarter, score differential, interaction), shot controls (distance binned into two-by-two-foot zones, play-by-play category, fast-break dummy), defensive controls (closest-defender Euclidean distance, angle relative to shooter-basket line, shooter-defender height differential interacted with distance), and player fixed effects [PAGE 2]. Estimation is by OLS rather than Logit/Probit due to convergence failure; clamped \(\hat{P}_{is} \leftarrow 0.99\) if \(\hat{P}_{is}>1\), \(\hat{P}_{is} \leftarrow 0.01\) if \(\hat{P}_{is}<0\) [PAGE 2]. Table 1: \(N=70,862\), \(R^2=0.149\) [PAGE 8].

Heat measures for lookback \(n\) [PAGE 2]:
Simple Heat\(_n = \frac{1}{n}\sum_{k=1}^{n} Y_{i,t-k}\).
Complex Heat\(_n = \frac{1}{n}\sum_{k=1}^{n} Y_{i,t-k} - \frac{1}{n}\sum_{k=1}^{n} \hat{P}_{i,t-k}\).
Reported results use \(n=4\), though robustness was checked for \(n\in\{2,\dots,7\}\) [PAGE 2].

First-stage behavioral regressions (shot selection) [PAGE 3, PAGE 4]:
Shot distance: \(\text{Distance}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i + \epsilon_{is}\), \(\hat{\beta}=2.144^{***}\) (SE \(=0.180\)). A \(0.25\) unit increase in Heat (one extra make in four shots) raises distance by \(\approx 0.536\) ft, versus mean \(12.5\) ft (\(\sim 5\%\)).
Defender distance: \(\text{DefDist}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i + \epsilon_{is}\), \(\hat{\beta}=-0.183^{***}\) (SE \(=0.0393\)). A \(0.25\) increase shrinks defender distance by \(\approx 0.046\) ft versus mean \(\sim 4\) ft (\(\sim 1\%\)).
Next-shot probability (Probit marginal effects): \(P(\text{Same Shooter}_{is}) = \Phi(\alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is})\), \(\hat{\beta}=0.0610^{***}\) (SE \(=0.00927\)). A \(0.25\) increase raises next-shot probability by \(1.5\) percentage points; on a \(20\%\) baseline this is a \(7.6\%\) relative increase [PAGE 4].
Overall difficulty: \(\hat{P}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \epsilon_{is}\), \(\hat{\beta}=-0.0419^{***}\) (SE \(=0.00380\)). A \(0.25\) increase lowers \(\hat{P}\) by \(\approx 1.0\) percentage point versus mean \(\sim 40\%\) (\(\sim 2.5\%\) more difficult) [PAGE 4].

Second-stage hot-hand test [PAGE 5]:
Baseline (no difficulty control): \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \theta_i + \epsilon_{is}\), Table 3 col. (1): Simple Heat coefficient \(-0.0106\) (SE \(=0.0108\)), insignificant [PAGE 10].
Difficulty-controlled: \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \hat{P}_{is} + \epsilon_{is}\). Null: \(\alpha=0,\beta=0,\gamma=1\). Alternative: \(\beta>0\) [PAGE 5].
Table 3 col. (3) [PAGE 10]: Complex Heat \(\hat{\beta}=0.0215^{**}\) (SE \(=0.00947\)); \(\hat{P}\) coefficient \(1.020^{***}\) (SE \(=0.00982\)); \(N=43,475\), \(R^2=0.149\). Marginal interpretation: a \(0.25\) increase in Complex Heat yields \(\Delta P(\text{Make}) \approx 0.0215 \times 0.25 = 0.005375\), i.e. \(0.54\) percentage points, or \(\sim 1.2\%\) on a \(45\%\) baseline; two extra makes implies \(\sim 2.4\%\) [PAGE 5].

Breakdown / singularity regimes: clamping at \(\{0.01,0.99\}\) creates boundary measurement error [PAGE 2]; OLS functional form may be misspecified for a binary outcome [PAGE 6]; generated-regressor errors-in-variables can bias \(\beta\) if \(\hat{P}\) is imprecise [PAGE 5]; player fixed effects absorb only intercept heterogeneity, not shot-type slope specialization [PAGE 5]; within-game-only heat definition excludes cross-game persistence [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from Kahneman and Tversky’s “law of small numbers” and “local representativeness” [PAGE 1] through Gilovich, Vallone, and Tversky (1985), who analyzed Philadelphia 76ers shooting and Boston Celtics/Cornell free throws and found no serial correlation, thereby cementing the Hot Hand Fallacy in behavioral economics [PAGE 1]. Subsequent confirmations include Adams (1992), Koehler and Conley (2003), Bar-Eli, Avugos, and Raab (2006), and Rao (2009) [PAGE 1]. Notably, Rao (2009) had already observed that shot difficulty rises after made shots, hinting at the selection bias this paper formalizes [PAGE 1]. The 2014 paper’s innovation is the SportVU optical-tracking infrastructure, which supplies defender coordinates, shot geometry, and ball trajectory at high temporal resolution, enabling a shot-level difficulty model that the 1985 authors could not construct [PAGE 1, PAGE 2].

Multi-week traps embedded in this genealogy: (1) Belief persistence. Despite three decades of null results, players, coaches, and fans continue to act as if the hot hand exists, as evidenced by Larry Summers’s public rebuke of the Harvard men’s basketball team [PAGE 1] and by the in-game shot-selection patterns documented here [PAGE 4]. (2) Strategic adaptation. Defenses and teammates condition their behavior on perceived heat, creating a feedback loop in which the “treatment” (heat) changes the “control” (defensive coverage and shot quality), violating the stable-unit-treatment-value assumption implicit in streak analysis. (3) Temporal aggregation. Season-long field-goal percentage obscures within-game hot windows; by restricting heat to consecutive shots within a single game [PAGE 2], the paper captures a short-memory process that may dissipate across days or weeks, leaving multi-week streak inference unresolved. (4) Small-n inference. The choice of \(n=4\) is a finite memory window; extending to \(n=7\) yielded similar results [PAGE 2], but no test is offered for multi-game or multi-week accumulation of heat, leaving open whether the effect is a within-game physiological phenomenon or a longer-run statistical artifact.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under pressure—proxied by time remaining and score differential [PAGE 2]—players may regress to habitual shot profiles rather than optimize dynamically. If a shooter’s “hot” state is itself a crisis-triggered habit, then the observed difficulty escalation after makes may reflect a reversion to preferred high-difficulty actions under arousal, not a rational response to elevated shooting probability. This creates a recursive loop: the player believes heat licenses harder shots; taking harder shots lowers conditional make probability; the lower outcome then challenges the belief; yet shot selection persists because the habit is triggered by the subjective state, not the objective result.

Counter-trap: Defenders are not passive. Table 2, column (2) shows defender distance shrinks by \(\hat{\beta}=-0.183^{***}\) per unit of heat [PAGE 4]. If defenders recursively model the shooter’s belief that they are hot, they tighten coverage precisely when the shooter is most inclined to shoot. This defensive response is a counter-trap: it raises shot difficulty endogenously and can generate a negative correlation between heat and made shots even when a true positive hot hand exists. The difficulty-controlled regression attempts to strip this out via \(\hat{P}\), but \(\hat{P}\) itself is estimated from the same equilibrium outcome, so any unmodeled defender adjustment (e.g., close-out speed, hand-up timing) remains embedded in the error term and can bias \(\beta\).

Clock: The analysis is bounded by game clock and shot clock. Heat is computed only over consecutive shots within the same game [PAGE 2], so the “hot” state resets at game boundaries. Controls include quarter, score differential, and their interaction to capture pressure and fatigue across the game clock [PAGE 2, PAGE 3]. However, the shot clock itself is not explicitly listed among the difficulty regressors in Table 1 [PAGE 8], despite being a first-order determinant of shot quality. If shot clock correlates with heat (e.g., hot players take quicker, harder shots late in the clock) and is omitted from \(\hat{P}\), then the second-stage \(\beta\) absorbs shot-clock-induced selection rather than pure hot-hand persistence.

Recursive theory of mind summary: The shooter models the defender’s belief about the shooter’s heat; the defender models the shooter’s model; the resulting equilibrium shot difficulty is a fixed point of mutual belief. Because the econometrician only observes the realized difficulty through \(\hat{P}\), not the beliefs that generated it, the estimated hot-hand effect is identified only up to the completeness of the difficulty model. Any recursive layer omitted from \(\hat{P}\)—defensive anticipation, shooter hesitation, teammate decoy movement—invalidates the exclusion restriction that heat affects current makes only through \(\hat{P}\) and the direct hot-hand channel.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: SportVU tracks all ten players and the ball every 1/25th of a second [PAGE 2], but the authors explicitly concede the system cannot track appendages [PAGE 5]. Finger position at release, wrist angle, and shot arc are therefore unobserved; if these biomechanical variables correlate with both perceived heat and make probability, \(\hat{P}\) is misspecified and the second-stage \(\beta\) is biased.

Biomechanical layer: Player fixed effects shift each player’s intercept but not their shot-type slopes [PAGE 5]. A player who “specializes” in, say, turnaround fadeaways from 16 feet will have a \(\hat{P}\) that misrepresents the true difficulty of those shots relative to their average jump shot. If heat induces a shift toward a player’s specialized high-difficulty shots, the difficulty model underweights the player’s true advantage, inflating the apparent hot-hand coefficient.

Weather layer: All games occur in indoor NBA arenas, so ambient weather (wind, temperature, humidity) is controlled by facility design and does not vary across shots. This removes meteorological confounding but also means the paper cannot speak to outdoor or non-NBA contexts where weather interacts with shot mechanics.

Veto adjudication: The completeness of \(\hat{P}\) is vetoed at the physical layer by missing appendage data, at the biomechanical layer by intercept-only fixed effects, and at the strategic layer by unmeasured defender close-out dynamics. Because each veto layer contains variables plausibly correlated with both heat and shot outcomes, the \(0.0215\) estimate should be interpreted as an upper-bound association conditional on a partially specified difficulty model, not a structurally identified causal effect. The authors’ own caution—that errors-in-variables and imprecise standard errors could nullify the result—is therefore warranted [PAGE 5, PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios. Each is falsifiable with the existing SportVU data and carries an explicit prediction.

Veto Scenario 1 — Shot-type random slopes. Re-estimate the first-stage difficulty model replacing player fixed effects with player-by-shot-category random intercepts and random slopes (e.g., separate difficulty surfaces for catch-and-shoot threes versus pull-up mid-rangers). Re-run Table 3, column (3) using this richer \(\hat{P}\). Verification: compare the Complex Heat coefficient and standard error to the baseline \(\hat{\beta}=0.0215^{**}\) [PAGE 10]. Prediction: the coefficient attenuates toward zero and loses statistical significance, because player-specific shot specialization absorbs variance currently attributed to heat.

Veto Scenario 2 — Restricted shot-coverage cell. Subset the data to catch-and-shoot jumpers between 14 and 16 feet from the basket, with closest-defender distance between 2.5 and 4.0 feet, shot clock greater than 10 seconds, and no screen involvement. Re-estimate the hot-hand regression within this narrow cell where shot difficulty is approximately constant. Verification: run \(P(\text{Make}) = \alpha + \beta \cdot \text{Complex Heat} + \epsilon\) on the subset. Prediction: if the hot hand is a pure shot-selection artifact, \(\beta\) collapses to null; if a genuine physiological or psychological hot hand exists independent of difficulty, \(\beta\) remains positive and significant.

Veto Scenario 3 — Exogenous instrumental variable for heat. Construct an instrument for shooter heat using lagged teammate shot quality or off-ball defensive rotations that are plausibly exogenous to the focal shooter’s own makes (e.g., the defensive coverage on the next intended passer forced by an off-ball cut). Estimate a two-stage model: first stage \(\text{Heat}_{is} = \pi \cdot Z_{is} + \nu_{is}\); second stage \(P(\text{Make}_{is}) = \alpha + \beta \cdot \widehat{\text{Heat}}_{is} + \gamma \cdot \hat{P}_{is} + \epsilon_{is}\). Verification: report the first-stage F-statistic and the IV estimate of \(\beta\). Prediction: the IV estimate is null or sign-switches relative to the OLS estimate of \(0.0215\), revealing that the OLS result is driven by endogenous shot selection and correlated unobservables rather than a causal hot-hand effect.

All three scenarios are verifiable from the SportVU shot log and require no betting lines, odds, or wagering language.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2014 Hot Hand Fallacy.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5305
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about the Hot Hand Fallacy in basketball. They've provided the source text (12 pages worth, though it seems to be a condensed version) and want me to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let me carefully go through the source text to extract page numbers and content.

Looking at the source text, I see page markers embedded:
- Page 1: Title, Abstract, Introduction start, Gilovich et al 1985 discussion
- Page 2: Data and Empirical Preliminaries, Shot Difficulty Regression Results, Defining Heat
- Page 3: Do Players Believe in the Hot Hand?, Shot Distance, Defender Distance, Likelihood of Taking Next Shot, Overall Shot Difficulty
- Page 4: Results for Shot Distance, Defender Distance, Likelihood of Taking Next Shot, Overall Shot Difficulty
- Page 5: Testing the Hot Hand: Shot Difficulty, Empirical Strategy (baseline and difficulty-controlled)
- Page 6: Results and Discussion, Conclusion start
- Page 7: Conclusion continued, Acknowledgements, References
- Page 8: Appendix start, Figures, Table 1
- Page 9: Table 2
- Page 10: Table 3
- Page 11-12: Not fully shown in text but implied

Wait, let me look more carefully at the page breaks in the text:
- After Abstract and intro, there's "1" then "2014 Research Competition..."
- After section 2.1 Raw Data, there's "2" then "2014 Research Competition..."
- After section 3.1 Empirical Strategy (shot distance, defender distance, likelihood, overall difficulty), there's "3" then "2014 Research Competition..."
- After 3.2 Results (shot distance through overall shot difficulty), there's "4" then "2014 Research Competition..."
- After 4.1 Empirical Strategy baseline, there's "5" then "2014 Research Competition..."
- After 4.2 Results and Discussion drawbacks, there's "6" then "2014 Research Competition..."
- Conclusion and Acknowledgements/References start on page 6-7
- Page 7 has References
- Page 8 has Appendix: Figures and Regression Tables, Figure 1, Figure 2, Table 1
- Page 9 has Table 2
- Page 10 has Table 3

I need to cite exact [PAGE N] markers. Let me map out key quotes and page numbers:

Page 1:
- Abstract: "The vast literature on the Hot Hand Fallacy in basketball rests on the assumption that shot selection is independent of player-perceived hot or coldness."
- Introduction: "The seminal piece of research that attempted to answer this question was done by Thomas Gilovich, Robert Vallone, and Amos Tversky in 1985."
- Key assumption quote: "Each player has an ensemble of shots that vary in difficulty (depending, for example, on the distance from the basket and on defensive pressure), and each shot is randomly selected from this ensemble" (Gilovich, Vallone and Tversky, 1985, emphasis added).
- "buried in the introduction of the famous Gilovich, Vallone, and Tversky paper lies a key assumption"

Page 2:
- Data: "STATS, Inc. introduced the SportVU optical tracking system into the NBA in 2010. The system uses six cameras, three on each side of the court, to provide precise three-dimensional image tracking of the players, referees, and ball every 1/25th of a second."
- Shot difficulty model categories: Game Condition Controls, Shot Controls, Defensive Controls, Player Fixed Effects.
- Shot distance non-linear: "we break distance into two-by-two foot increments and include this set of mutually exclusive and exhaustive dummy variables"
- OLS vs Logit/Probit: "We used OLS rather than a Logit or Probit regression because of issues with model convergence."
- Censoring: "when the model predicted values of greater than one or less than zero, we replaced them with 0.99 and 0.01 respectively"
- Table 1: Observations 70,862, R^2 0.149

Page 3:
- Defining Heat: Simple Heat and Complex Heat definitions.
- Complex Heat formula: Complex Heat_n = Actual % over past n shots - Expected % over past n shots
- n = 4 chosen: "we report all results here for n = 4"

Page 4:
- Shot Distance result: "The size of the effect - 2.144 feet - is significant. If a player made rather than missed one more of his past four shots (i.e. increased Complex Heat by 0.25), his estimated shot distance increases by just over 6 inches."
- Defender Distance result: "defender distance shrinks by 0.046 feet, or about half an inch."
- Likelihood of Next Shot: "probability of the same shooter taking the shot increases by 1.5 percentage points (0.061* 0.25)"
- Overall Shot Difficulty: "A player who makes an additional shot will on average see his P-hat value drop by 1.0 percentage points."

Page 5:
- Baseline Hot Hand test: P(Make_is) = α + β * (Heat_is) + θ * (Player Fixed Effects_i)
- Difficulty controlled: P(Make_is) = α + β * (Heat_is) + γ * P-hat_is
- Null hypothesis: "If the Hot Hand does not exist, and each shot is truly independent, we would expect α = 0, β = 0, and γ= 1."
- Alternative: "if the Hot Hand does exist, we would expect to find β > 0."

Page 6:
- Table 3 results: Column 1 Simple Heat negative insignificant. Column 2 Simple Heat "cold hand" effect -0.0237***. Column 3 Complex Heat 0.0215**.
- Effect size: "A player who makes one more of his past four shots sees his shooting percentage increase by 0.54 percentage points... represents about a 1.2% improvement." Wait, let me check: 0.0215 * 0.25 = 0.005375 = 0.54 percentage points. Yes.
- Two more shots: 2.4% improvement? Wait, 0.0215 * 0.5 = 0.01075 = 1.075 percentage points. But the text says 2.4% improvement. Let me re-read: "if a player makes two more of his past four shots (perhaps more indicative of what it truly means to be 'hot'), we see a 2.4% improvement." Hmm, 0.0215 * 0.5 = 0.01075 which is 1.075 percentage points, not 2.4 percentage points. But they say "2.4% improvement" relative to baseline 45%: 1.075/45 ≈ 2.4% relative improvement. Okay, that makes sense - it's a relative percentage improvement, not percentage points.
- Drawbacks: errors-in-variables, not tracking appendages, player fixed effects don't account for shot specialization/slopes.

Page 7:
- Conclusion: "we are able to show that the key shot selection independence assumption is not a good one."
- "small, positive, and significant Hot Hand effect"
- OLS caveat: "our use of OLS regression as the functional form of choice for most of our analysis may not be optimal."
- Standard errors: "it is more likely that our estimates of standard errors are imprecise than our estimates of mean effects."

Page 8:
- Table 1 details: Observations 70,862, R^2 0.149

Page 9:
- Table 2: Heat coefficient for Shot Distance 2.144*** (0.180), Defender Distance -0.183*** (0.0393), P(Same Shooter) 0.0610*** (0.00927), P-hat -0.0419*** (0.00380). Observations 43,475.

Page 10:
- Table 3: Column 3 Complex Heat 0.0215** (0.00947). Column 2 Simple Heat -0.0237*** (0.00875).

Now I need to structure the response with the exact XML sections.

Important constraints:
- No betting lines whatsoever. No spreads, totals, moneylines, odds.
- No toy equations like Force/Fatigue. Must use formal LaTeX with proper units and assumptions.
- >= 1000 words total across sections. THINK_TRACE needs >= 400 words.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
I need to trace the causal chain: Gilovich et al 1985 assumption of random shot selection -> Bocskocsky et al 2014 challenge using SportVU data -> shot difficulty model -> Complex Heat definition -> shot selection behavior (distance, defender distance, next shot probability, overall difficulty) -> Hot Hand test controlling for P-hat. Gray zones: errors-in-variables in two-stage approach, OLS for bounded [0,1] outcome, censoring at 0.01/0.99, player fixed effects intercept-only vs slope heterogeneity, endogeneity of heat measure, defender behavior as confounder, small effect sizes (1.2-2.4 pp), n=4 lookback arbitrariness. Multi-hop: from raw pixels (1/25th sec) to shot log to P-hat to heat to make probability. The breakdown regime is when P-hat is misspecified or when heat is driven by unobserved defender quality.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
- Shot difficulty: P-hat_is = f(GameCondition, ShotControls, DefensiveControls, PlayerFE_i)
- Simple Heat: Simple Heat_n = (1/n) Σ_{k=1}^n Y_{i,t-k}
- Complex Heat: Complex Heat_n = (1/n) Σ Y_{i,t-k} - (1/n) Σ P-hat_{i,t-k}
- Shot distance regression: Distance_is = α + β·Heat_is + γ·Controls_is + θ·FE_i + ε
- Defender distance: DefDist_is = α + β·Heat_is + γ·Controls_is + θ·FE_i + ε
- Next shot probit: Pr(SameShooter_is) = Φ(α + β·Heat_is + γ·Controls_is)
- Overall difficulty: P-hat_is = α + β·Heat_is + ε (no controls since P-hat includes them)
- Hot Hand baseline: P(Make_is) = α + β·Heat_is + θ·FE_i
- Hot Hand controlled: P(Make_is) = α + β·Heat_is + γ·P-hat_is
- Null: β=0, γ=1; Alternative: β>0
- Table 3 col 3: β_ComplexHeat = 0.0215, SE=0.00947, n=4.
- Marginal effect: ΔP(Make) = 0.0215 × ΔComplexHeat. For Δ=0.25 (one make out of four), ΔP = 0.005375 ≈ 0.54 pp.
Units: probability (dimensionless [0,1]), distance (feet), time (seconds, quarters), score differential (points). Breakdown: OLS heteroskedasticity, censoring, errors-in-variables attenuation.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Kahneman & Tversky (1971/1985) local representativeness, law of small numbers.
- Gilovich, Vallone, Tversky (1985) canonical null result, Philadelphia 76ers, Celtics, Cornell.
- Adams (1992), Koehler & Conley (2003), Bar-Eli et al (2006), Rao (2009) confirm null.
- Rao (2009) specifically notes shot difficulty increases after makes (behavioral evidence).
- Bocskocsky, Ezekowitz, Stein (2014) SportVU 2012-13 NBA, 83,000 shots, 15 arenas.
- Multi-week traps: persistence of belief despite evidence, Larry Summers chastising Harvard team (Davidson 2013), Tversky quote "won them all, but convinced no one." The trap is that belief in hot hand changes shot selection (endogenous regressor), which masks true effect, creating a multi-week observational trap where null findings in simple autocorrelation don't rule out conditional hot hand.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
This section needs to model the strategic interaction. Players believe they are hot -> take harder shots -> defenders tighten -> shot difficulty rises -> observed FG% may not rise -> observers conclude fallacy -> but conditional on difficulty, there is a small positive effect. Recursive theory of mind: shooter thinks defender thinks shooter is hot; defender adjusts; shooter anticipates adjustment and still shoots. Crisis habit regression: under pressure (close score, late quarter), players revert to habitual shot selection or force shots. Counter-trap: defense over-adjusts to "hot" shooter, leaving others open; the hot hand effect may be partly strategic deception. Clock: game clock, shot clock, score differential as game condition controls. The "clock" also refers to the temporal lookback window n=4 and within-game consecutive shots only.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: SportVU tracks center of mass, not appendages (fingers, wrist angle, release point). Cannot track appendages. This is a physical measurement veto.
- Biomechanical: Player fixed effects capture average shooting ability but not shot-specific specialization (slopes). A player may be a corner-three specialist but average mid-range; FE only shifts intercept. This is a biomechanical/skill heterogeneity veto.
- Weather: Indoor NBA, controlled climate, so weather is not a veto (or rather, absence of weather variation is a feature but limits generalizability to outdoor contexts). The paper doesn't mention weather because it's indoor.
- Optical tracking limits: 1/25th second, six cameras, three per side. Occlusion, ball-handling, fast breaks.
- Singularity/breakdown: when defender distance approaches zero (contested shot at rim), angle and height differential interactions may not capture double teams fully (double covered dummy included though).
- The veto: if P-hat is misspecified due to unobserved biomechanical release mechanics, the two-stage errors-in-variables biases β.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios.
Scenario 1: OLS censoring breakdown. If true P(Make) > 0.99 or < 0.01, censoring creates attenuation. Prediction: In high-difficulty contests (close defender < 1 ft, distance > 24 ft), estimated β_ComplexHeat will shrink toward zero relative to uncensored ML estimation.
Scenario 2: Errors-in-variables in P-hat. If shot difficulty model omits release mechanics, classical measurement error in regressor P-hat attenuates γ toward zero and biases β. Prediction: When splitting sample by player shot-type specialization (e.g., corner 3 specialists vs non-specialists), the Complex Heat coefficient will be larger for specialists where P-hat FE fits better.
Scenario 3: Defender endogeneity / strategic substitution. Defenders tighten on hot shooters; if defensive assignment is endogenous to heat, the "tighter defense" result may reflect coach deployment rather than belief. Prediction: In games with defensive switching restrictions (e.g., certain matchups locked), the defender distance coefficient on heat will be attenuated or null compared to free-switching games.
Need 3 verifiable scenarios with predictions. I'll phrase them as falsifiable vetoes.

Word count: Need >= 1000 words total. THINK_TRACE alone needs >= 400. I'll aim for ~1800-2200 words total to be safe.

Let me make sure I don't mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities and percentages but not in betting context.

I need to include verbatim quotes with [PAGE N] markers. Let me gather exact quotes:

[PAGE 1]: "Each player has an ensemble of shots that vary in difficulty (depending, for example, on the distance from the basket and on defensive pressure), and each shot is randomly selected from this ensemble" (Gilovich, Vallone and Tversky, 1985, emphasis added).
[PAGE 1]: "The vast literature on the Hot Hand Fallacy in basketball rests on the assumption that shot selection is independent of player-perceived hot or coldness."
[PAGE 2]: "STATS, Inc. introduced the SportVU optical tracking system into the NBA in 2010. The system uses six cameras, three on each side of the court, to provide precise three-dimensional image tracking of the players, referees, and ball every 1/25th of a second."
[PAGE 2]: "We used OLS rather than a Logit or Probit regression because of issues with model convergence."
[PAGE 2]: "when the model predicted values of greater than one or less than zero, we replaced them with 0.99 and 0.01 respectively."
[PAGE 3]: "Complex Heat_n = Actual % over past n shots - Expected % over past n shots"
[PAGE 4]: "A player who makes one more of his past four shots sees his shooting percentage increase by 0.54 percentage points."
[PAGE 5]: "If the Hot Hand does not exist, and each shot is truly independent, we would expect α = 0, β = 0, and γ= 1."
[PAGE 6]: "we see a 2.4% improvement."
[PAGE 6]: "not being able to track appendages, not specifying relationships between variables... correctly, and that player fixed effects are not precise enough to accurately estimate P-hat for individual players."
[PAGE 9]: Table 2 numbers.
[PAGE 10]: Table 3 numbers.

Let me now write the response carefully.

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

I need to ensure LaTeX is properly formatted. Use $$ for display or $ for inline.

Let's write.

THINK_TRACE: I'll write a deep derivation. Start from the identification problem. The Gilovich et al. assumption is that shots are randomly selected from a difficulty ensemble. Bocskocsky et al. violate this by showing heat affects shot selection. Then they model difficulty. Then define Complex Heat. Then test. Gray zones: two-stage estimation, errors-in-variables, OLS on bounded outcome, censoring, n=4 arbitrariness, within-game only, defender behavior confounding, small effect sizes, standard error imprecision.

I'll write it in a flowing analytic style, multi-hop.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with LaTeX. Define all variables and units. Cite pages.

RETROCAUSAL_GENEALOGY: Lineage from Kahneman/Tversky to GVT 1985 to 2014 paper. Multi-week traps: belief persistence, Summers/Harvard, Tversky quote.

RECURSIVE_THEORY_OF_MIND: Shooter-defender recursive beliefs, crisis habit regression (late game, close score), counter-trap (defense over-adjusts), clock (shot clock, game clock, lookback window).

CROSS_LAYER_VETO_ADJUDICATION: Physical (no appendage tracking), Biomechanical (intercept-only FE vs slope specialization), Weather (indoor, controlled, no weather veto but limits external validity), Breakdown regimes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let me draft now, keeping track of word count.

I'll write roughly:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~400 words
RETROCAUSAL: ~300 words
RECURSIVE: ~300 words
CROSS_LAYER: ~300 words
RLVR: ~250 words
Total ~2050 words. Good.

Let me make sure to use exact [PAGE N] format as requested. The prompt says "cite exact [PAGE N] markers". I'll use [PAGE 1], [PAGE 2], etc.

I must not mention betting. I'll avoid words like "spread", "total", "moneyline", "odds", "wager", "bet", "bookmaker". I can use "probability" and "percentage points" but carefully.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The identification problem in this paper is a nested endogeneity chain. Gilovich, Vallone, and Tversky (1985) assumed that each player possesses an ensemble of shots varying in difficulty and that each shot is randomly selected from that ensemble [PAGE 1]. Under that assumption, a positive autocorrelation in makes would imply a genuine "hot hand" state variable; absence of autocorrelation implies the fallacy. Bocskocsky, Ezekowitz, and Stein (2014) attack the exclusion restriction directly: shot selection is not independent of perceived heat [PAGE 1]. The first hop is therefore behavioral: players who perceive themselves as hot elect to shoot from farther away [PAGE 4], draw tighter defensive coverage [PAGE 4], and take their team's next shot more frequently [PAGE 4]. Because these actions mechanically lower the predicted make probability P-hat, a naïve regression of make on heat will be biased downward by the increased difficulty of the shot set. The second hop is the construction of a shot-difficulty model using SportVU optical tracking data at 1/25th-second resolution across six cameras [PAGE 2]. The model conditions on game context (quarter, score differential), shot geometry (distance binned in two-by-two-foot increments, shot category), defensive geometry (closest-defender distance, angle, height differential interacted with distance, double coverage), and player fixed effects [PAGE 2, PAGE 8]. OLS is used rather than Logit/Probit due to convergence failures, and predicted probabilities are censored to [0.01, 0.99] [PAGE 2]. The gray zone here is severe: OLS on a bounded [0,1] outcome with ad hoc censoring produces heteroskedastic errors and potential misspecification at the tails, precisely where difficult shots live.

The third hop defines heat. Simple Heat is the raw made percentage over the previous n shots [PAGE 3]. Complex Heat subtracts the expected made percentage over those same shots, conditioning on the P-hat of each prior shot [PAGE 3]. The authors set n=4 and report results for that window, though they tested n=2 through n=7 [PAGE 3]. Complex Heat removes the mechanical correlation between Simple Heat and P-hat that arises when a player faces a systematically weak defender [PAGE 3]. The fourth hop estimates the difficulty-controlled Hot Hand regression: P(Make) = α + β·Complex Heat + γ·P-hat [PAGE 5]. Under the null of independence, β=0 and γ=1; under the alternative, β>0 [PAGE 5]. Table 3 column (3) yields β=0.0215 (SE=0.00947), significant at the 5% level [PAGE 10]. For a one-shot improvement out of four (ΔComplex Heat=0.25), the implied make-probability gain is 0.005375, or 0.54 percentage points [PAGE 6]. Relative to a 45% baseline, that is approximately a 1.2% improvement; two extra made shots out of four yields roughly a 2.4% relative improvement [PAGE 6].

Gray-zone audit: (1) Errors-in-variables in the two-stage procedure—if P-hat is measured with error, γ is attenuated toward zero and β is biased [PAGE 6]. (2) Player fixed effects shift only the intercept, not the shot-type slope, so a corner-three specialist and a mid-range specialist with identical average ability receive the same intercept correction despite different difficulty-response surfaces [PAGE 6]. (3) The system cannot track appendages, only center-of-mass player and ball locations [PAGE 6], so release mechanics, finger position, and wrist angle are unobserved. (4) The sample is restricted to consecutive shots within the same game; cross-game hot-hand states are excluded by construction [PAGE 3]. (5) The authors themselves caution that standard errors may be imprecise relative to mean effects and that OLS may not be optimal [PAGE 6]. (6) Effect sizes are small (1.2–2.4 percentage points), and the R^2 of the difficulty-controlled make regression is only 0.149 [PAGE 10], leaving most variance unexplained. The breakdown regime occurs when P-hat is misspecified—specifically when unobserved biomechanical release variation or defensive strategic substitution correlates with heat, violating the conditional independence needed to interpret β as a structural hot-hand effect rather than a residual selection artifact.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i index player, s index shot attempt, and t index chronological shot order within game. The outcome Y_{is} ∈ {0,1} is a make (1) or miss (0). All probabilities are dimensionless units on [0,1]. Distances are in feet; time is in seconds (SportVU frame rate 1/25 s) and game-quarter units; score differential is in points.

Shot-difficulty operator (first stage):
\hat{P}_{is} = f(GameCondition_{is}, ShotControls_{is}, DefensiveControls_{is}, \theta_i) + \varepsilon_{is}
where GameCondition includes quarter dummies and score differential; ShotControls include distance binned into mutually exclusive 2×2 ft zones and shot-category dummies (fadeaway, reverse layup, etc.); DefensiveControls include closest-defender distance d_{def}, angle φ relative to shooter-basket axis, shooter-defender height differential Δh, interaction d_{def}×φ, interaction d_{def}×Δh, and a double-covered dummy [PAGE 2, PAGE 8]. Player fixed effects \theta_i enter as an intercept shift. Table 1 reports N=70,862 and R²=0.149 for this specification [PAGE 8].

Because OLS was chosen over Logit/Probit due to convergence issues [PAGE 2], predictions are censored:
\hat{P}_{is}^{censored} = 
\begin{cases}
0.01 & \text{if } \hat{P}_{is} < 0\\
\hat{P}_{is} & \text{if } 0 \le \hat{P}_{is} \le 1\\
0.99 & \text{if } \hat{P}_{is} > 1
\end{cases}
[PAGE 2].

Heat operators over lookback window n=4:
Simple Heat_n = \frac{1}{n}\sum_{k=1}^{n} Y_{i,t-k} \quad \text{[PAGE 3]}
Complex Heat_n = \frac{1}{n}\sum_{k=1}^{n} Y_{i,t-k} - \frac{1}{n}\sum_{k=1}^{n} \hat{P}_{i,t-k} \quad \text{[PAGE 3]}

Shot-selection response regressions (OLS unless noted):
Shot Distance_{is} = α + β·Heat_{is} + γ·Controls_{is} + θ_i + ε_{is}, \quad \hat{β}=2.144^{***} (0.180) \quad \text{[PAGE 9, PAGE 4]}
Defender Distance_{is} = α + β·Heat_{is} + γ·Controls_{is} + θ_i + ε_{is}, \quad \hat{β}=-0.183^{***} (0.0393) \quad \text{[PAGE 9, PAGE 4]}
Pr(Same Shooter Next)_{is} = Φ(α + β·Heat_{is} + γ·Controls_{is}) \quad \text{(Probit, marginal effects)}, \quad \hat{β}=0.0610^{***} (0.00927) \quad \text{[PAGE 9, PAGE 4]}
\hat{P}_{is} = α + β·Heat_{is} + ε_{is}, \quad \hat{β}=-0.0419^{***} (0.00380) \quad \text{(no extra controls, since } \hat{P} \text{ already embeds them)} \quad \text{[PAGE 9, PAGE 4]}

Hot Hand test (second stage):
Baseline (no difficulty control): P(Y_{is}=1) = α + β·Heat_{is} + θ_i + ε_{is} \quad \text{[PAGE 5]}
Difficulty-controlled: P(Y_{is}=1) = α + β·Complex Heat_{is} + γ·\hat{P}_{is} + ε_{is} \quad \text{[PAGE 5]}

Null hypothesis of no Hot Hand: α=0, β=0, γ=1. Alternative: β>0 [PAGE 5].
Estimated result: \hat{β}_{Complex Heat} = 0.0215^{**} (0.00947), \hat{γ}=1.020^{***} (0.00982), N=43,475, R²=0.149 \quad \text{[PAGE 10]}.

Marginal effect derivation: ΔComplex Heat = 0.25 corresponds to converting one miss into one make over the prior four shots. ΔP(Make) = 0.0215 × 0.25 = 0.005375 ≈ 0.54 percentage points [PAGE 6]. Relative to the league-average field-goal percentage of approximately 45% [PAGE 6], this is a 1.2% relative improvement; ΔComplex Heat = 0.50 yields roughly a 2.4% relative improvement [PAGE 6].

Breakdown/singularity regimes: OLS heteroskedasticity on bounded outcomes; censoring at 0.01/0.99 distorts tail-shot inference; classical measurement error in \hat{P}_{is} attenuates γ and biases β [PAGE 6]; fixed effects do not capture shot-type-specific slope heterogeneity (specialization) [PAGE 6]; appendage-level biomechanics are unobserved [PAGE 6]; inference is restricted to within-game consecutive shots only [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Kahneman and Tversky's (1971) "law of small numbers" and local representativeness, through Gilovich, Vallone, and Tversky's (1985) canonical null finding, to the present 2014 Harvard study [PAGE 1]. GVT (1985) analyzed the Philadelphia 76ers, Boston Celtics free throws, and Cornell men's and women's basketball, finding no serial correlation in successive shots [PAGE 1]. Subsequent work—Adams (1992), Koehler and Conley (2003), Bar-Eli, Avugos, and Raab (2006), and Rao (2009)—confirmed the absence of a detectable hot hand under the random shot-selection assumption [PAGE 1]. Rao (2009) is a critical bridge: it documents that shot difficulty rises after made shots, which is precisely the behavioral mechanism that later invalidates GVT's independence assumption [PAGE 1]. The 2014 paper therefore does not emerge from nowhere; it retro-causally reinterprets three decades of null results as potentially masking a conditional effect that was obscured by endogenous shot selection.

The multi-week trap is structural: because players and defenders act on the belief that the hot hand exists, shot difficulty endogenously increases with perceived heat. This means standard autocorrelation tests regressing make_{t} on make_{t-1} will estimate a null even if a true state-dependent shooting premium exists, because the shot-selection response cancels it out in unconditional data. The trap operates across weeks and seasons: fans, players, and even coaches (e.g., Larry Summers chastising the Harvard men's basketball team for belief in the phenomenon [PAGE 1]) continue to act as if the hot hand is real, which perpetuates the very shot-selection behavior that generates spurious null findings in simple regressions. Tversky's lament—"I've been in a thousand arguments over this topic, won them all, but convinced no one" [PAGE 6]—captures the equilibrium trap: statistical victory in the lab does not dislodge the behavioral belief in the arena, and the behavioral belief regenerates the data pattern that the statistics were designed to refute. The 2014 paper breaks the trap by conditioning on P-hat, but only after a quarter-century of literature had treated the independence assumption as gospel rather than an assumption.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The relevant game is a recursive theory-of-mind problem between shooter and defender. Level 0: the shooter believes he is hot because of recent makes. Level 1: the defender observes the shooter's recent makes and believes the shooter believes he is hot, so the defender tightens coverage (reducing defender distance). Level 2: the shooter anticipates the tighter defense, recognizes that his own shot difficulty will rise, and yet still elects to shoot because his subjective belief in elevated skill outweighs the objective difficulty increase [PAGE 4]. This recursion is precisely what the paper documents: heat predicts greater shot distance (-β for P-hat), smaller defender distance, higher probability of taking the next shot, and lower P-hat overall [PAGE 4, PAGE 9]. Each layer of the recursion feeds back into the next shot's difficulty, creating a self-reinforcing selection environment that would produce a null hot-hand coefficient in any model omitting P-hat.

Crisis habit regression enters through the game-condition controls: quarter, score differential, and their interaction proxy for pressure, fatigue, and effort [PAGE 2]. Under high-leverage clock states (late quarter, close score), players may regress to habitual shot profiles or, conversely, force shots they believe they can make because of perceived heat. The "clock" operates at three scales: the game clock and shot clock constrain shot-selection timing; the lookback window n=4 defines the temporal memory of heat [PAGE 3]; and the within-game restriction excludes cross-game persistence, meaning a player "hot" entering a new game starts at Complex Heat = 0 by construction [PAGE 3]. The counter-trap is defensive over-adjustment: if defenders over-cover a perceived hot shooter, they leave weaker shooters open, and the team's expected points may rise even if the hot shooter's conditional make probability rises only modestly. The paper's estimated β=0.0215 [PAGE 10] is consistent with a small genuine skill premium embedded inside a larger strategic equilibrium where shot difficulty endogenously expands to absorb most of the perceived hot-hand signal. The clock thus does not merely measure time; it bounds the memory of heat and the urgency of shot selection, making the hot hand a dynamic game-theoretic object rather than a static streak parameter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: The SportVU system uses six cameras (three per side) tracking players, referees, and ball every 1/25th of a second [PAGE 2], but it records center-of-mass positions only. The authors explicitly acknowledge they cannot track appendages [PAGE 6]. Release-point geometry, wrist angle, finger placement on the ball, and shot-pocket mechanics are therefore unobserved physical states that influence make probability but are absent from P-hat. When release mechanics correlate with perceived heat (e.g., a "hot" shooter unconsciously tightens his mechanics), P-hat omits a relevant determinant of Y, generating omitted-variable bias in the second-stage β.

Biomechanical veto: Player fixed effects shift the intercept of make probability but do not adjust slopes across shot types [PAGE 6]. A player who is a corner-three specialist but an average mid-range shooter receives the same intercept correction for both shot classes. If heat induces a shift in shot-type composition toward a player's specialized zone, the fixed-effect model misattributes skill-specific slope variation to the heat coefficient. This is a slope-heterogeneity veto: the assumption that P-hat captures all player-specific difficulty is violated when players have non-identical difficulty-response surfaces.

Weather/environmental layer: NBA games are indoors under controlled climate, so temperature, humidity, wind, and precipitation do not vary within the sample and cannot serve as a veto here [PAGE 2]. However, the absence of weather variation limits external validity: the P-hat model and Complex Heat measure are estimated in a controlled environment and may not generalize to outdoor or variable-climate competition where ball handling and flight dynamics change.

Breakdown/singularity regime: The veto chain collapses when (a) P-hat is measured with classical error (errors-in-variables attenuates γ toward 1 and biases β), (b) the censoring bounds [0.01, 0.99] bind for a non-trivial share of extreme-difficulty shots [PAGE 2], (c) defensive assignment is endogenous to heat rather than exogenous [PAGE 4], or (d) appendage-level mechanics drive make probability independently of center-of-mass tracking variables [PAGE 6]. Under any of these conditions, the estimated β=0.0215 [PAGE 10] is not a structural hot-hand parameter but a lower-bound or biased residual of unmodeled selection.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR Veto Scenario 1 — OLS censoring breakdown at probability tails. Verifiable condition: restrict the sample to shots with \hat{P}_{is} < 0.05 or \hat{P}_{is} > 0.95 (extreme difficulty or extreme ease). Because OLS censors predictions outside [0.01, 0.99] [PAGE 2], the second-stage regressor \hat{P}_{is} is compressed at the bounds. Prediction: In the tail-restricted subsample, the estimated coefficient on Complex Heat in P(Y=1) = α + β·Complex Heat + γ·\hat{P} will attenuate toward zero relative to the full-sample β=0.0215 [PAGE 10], because censoring removes variation in the very difficulty dimension that heat is supposed to overcome. A null or sign-reversed coefficient in tails constitutes a veto of the claim that the heat effect is stable across the difficulty distribution.

RLVR Veto Scenario 2 — Player specialization / fixed-effect slope misspecification. Verifiable condition: partition players into shot-type specialists (e.g., players with >40% of attempts from a single 2×2-ft zone or shot category) versus generalists using the shot-category and location dummies in Table 1 [PAGE 8]. Because player fixed effects enter only as intercept shifters and do not adjust slopes for shot-type specialization [PAGE 6], specialists have better-fit P-hat than generalists. Prediction: The Complex Heat coefficient β will be statistically larger and more precise for specialists (where P-hat measurement error is smaller) than for generalists. If β is statistically indistinguishable between specialists and generalists, or larger for generalists, the two-stage errors-in-variables story is invalidated and the estimated hot-hand effect is not attributable to better difficulty measurement.

RLVR Veto Scenario 3 — Defensive endogeneity / strategic assignment. Verifiable condition: compare games or defensive schemes with restricted switching (e.g., matchups locked by coach instruction or injury constraints) versus free-switching games, using closest-defender distance and angle from SportVU [PAGE 2]. If defenders tighten on hot shooters because of a belief effect, the defender-distance response to heat should be present across defensive regimes. Prediction: In restricted-switching contexts, where defenders cannot freely choose to sag off or double the hot shooter, the defender-distance coefficient on heat (full-sample estimate -0.183 ft [PAGE 9]) will shrink toward zero or become statistically insignificant, and the subsequent Complex Heat coefficient in the make regression will fall correspondingly. Persistence of a large defender-distance effect in restricted-switching games would veto the interpretation that defensive belief drives the shot-selection endogeneity; its absence would support the paper's mechanism.
</RLVR_COUNTERFACTUAL_VETOES>
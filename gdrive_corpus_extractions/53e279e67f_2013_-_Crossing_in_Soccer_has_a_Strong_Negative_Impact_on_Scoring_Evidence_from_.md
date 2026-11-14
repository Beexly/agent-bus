---
source: "2013 - Crossing in Soccer has a Strong Negative Impact on Scoring Evidence from the English Premier League and the German Bundesliga - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2013"
pages: 44
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3521
---

<NATIVE_REASONING>
The user wants a deep analysis of a specific research paper about crossing in soccer and its negative impact on scoring. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology. The paper mentions betting quotes and Betfair, but I must NOT mention spreads, totals, moneylines, odds. I can mention Poisson model for scoring intensities but must avoid betting terminology. Actually invariant 1 says "Never mention spreads, totals, moneylines, or odds." I can talk about probabilities/intensities but not betting odds.
- Must cite [PAGE N] markers.
- Need formal LaTeX equations.
- Need exact singularity/breakdown regimes.
- Word count >= 1000 total across sections, with THINK_TRACE >= 400 words.

Let me structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation. Analyze Vecer's multilevel Poisson regression. Equation (1) on page 14. EPL Model 1 page 15: OpenCross coefficient -0.022861 (0.003196). Bundesliga page 18: -0.020001 (0.004450). Interpretation: each open cross reduces expected log-goals by ~0.023 EPL, ~0.020 Bundesliga. Since link is log, multiplicative effect exp(-0.022861) ≈ 0.9774 per cross, i.e., ~2.26% reduction in expected goals per additional open cross, ceteris paribus. Average EPL team makes 18.2 crosses/page 9. If reduced to zero, expected goals increase factor exp(0.022861*18.2) ≈ exp(0.416) ≈ 1.516, so ~51.6% increase? Wait, abstract says up to additional 0.656 goals per game if reduced open crossing. Let's check: baseline lambda ~ exp(intercept + ...). For average team intercept 0.473, home 0.417, cross effect -0.022861 * 18.2 = -0.416. So lambda with crosses = exp(0.473 + ... -0.416) vs without = exp(0.473 + ...). Ratio exp(0.416)=1.516. If baseline scoring 1.33 goals/game (page 9), removing crosses could add 1.33*(1.516-1)=0.686 goals, close to 0.656 mentioned. Good.

Need to discuss endogeneity concerns page 13: crosses may lead to goals indirectly in follow-up play; by crossing team gives up alternative way of playing. Analysis of Goals regressed on Open Crosses addresses that. But omitted variable bias: team quality, game state, defensive pressure. Random effects for attack/defense.

Gray-zone audit: The coefficient is negative but conversion rate plays minor role (page 3 abstract). The negative impact is more about opportunity cost / possession loss in favorable position (page 9: 14.5 bad crosses out of 18.2, loss of possession). Stronger teams miss more when crossing (page 2-3). Stronger teams benefit more from skill than luck (page 21). Singularity/breakdown: when crossing quality reaches Manchester United level 43.8 crosses per goal (page 9, 42), effect becomes neutral. For FC Bayern Munich defense, OpenCross coefficient +0.002192 (page 20), positive but tiny; essentially neutral/breakdown against strong defense.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define model:
Goals_i ~ Poisson(exp(β_I + u^I_{j[i]} + v^I_{k[i]} + β_H Home_i + (β_C + u^C_{j[i]} + v^C_{k[i]}) Cross_i))
u_j ~ N(0, Σ_u), v_k ~ N(0, Σ_v).
Units: goals per game (dimensionless count rate), crosses per game (count), coefficient in log-goals per cross (dimensionless), exp coefficient dimensionless multiplier.
EPL estimates table page 15. Bundesliga page 18. Attack/defense random slopes pages 16-17, 19-20.
Poisson process for goal distribution page 5: P(X_T - X_t = k) = e^{-λ_t} λ_t^k / k!. Independence assumption page 6; correlation -0.057 page 6; memory small.
Breakdown: if Cross_i → 0, effect vanishes; if crossing quality high (MU 43.8 crosses/goal), neutral; if defending team very strong (Bayern defense slope positive), neutral.
Citations [PAGE 14], [PAGE 15], etc.

RETROCAUSAL_GENEALOGY: Historical lineage. Reges/Charles Reep long-ball vs possession; Charles Hughes (FA) on crossing; Wilson's "Inverting the Pyramid"; Zweig? The paper uses NESSIS 2013, OPTA data since 2008. Multi-week traps: regression to mean over a season; small-sample crossing conversion variance; weekly tactical adjustments; fixture congestion causing crossing as low-skill exit under fatigue. Need to discuss lineage from Reep's "long ball" (1950s) through Hughes (1980s) to modern expected possession value (EPV) and tracking data (Bundesliga tracking since 2011 page 8). Multi-week trap: a single high-cross match may look lucky; over 3-4 weeks, possession-based metrics regress toward model-implied negative crossing coefficient. Stronger teams overuse crossing due to highlight bias (page 9).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Crisis habit: when trailing, teams cross more (desperation, low-skill aerial exit), which model shows suppresses scoring further—a regression to inefficient habit under pressure. Counter-trap: opponent anticipates crossing, packs box, converts turnover to counterattack; the 14.5 bad crosses per game (page 9) become transition opportunities. Clock: as match clock winds down, crossing frequency spikes but expected goals per cross collapses because defensive organization intensifies and time to reorganize after turnover shrinks. Need to phrase as theory of mind: manager believes crossing is high-reward (highlight bias), defender expects cross and shifts, attacker knows defender expects, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: aerial duel win rates, ball flight time, goalkeeper reach. Biomechanical: crossing from wide angles requires precise first-time finishing; heading at high velocity (impulse, head-neck loading). Weather: wind disrupts airborne delivery (cross is airborne delivery page 9), rain reduces first-touch control, pitch condition affects final-third entries. These layers veto the statistical finding when conditions deviate (e.g., strong wind, heavy rain, turf vs grass) because the Poisson model assumes exchangeability of crosses; weather introduces heteroskedasticity not in equation (1). Breakdown: if wind speed exceeds threshold where cross completion probability drops below random, the negative coefficient underestimates harm; if set-piece specialist present, the random slope u^C may not capture fixed quality.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual. Need 3 scenarios that are verifiable. Examples:
1. Scenario: Top-6 EPL team reduces open crosses per game from 18.2 to <=10 over a 5-match span while holding final-third entries constant. Prediction: expected goals per game increases by at least 0.25 (from exp(0.022861*(18.2-10)) ≈ exp(0.188)=1.207, i.e., +0.27 goals at 1.33 baseline). Verifiable via OPTA match logs and Poisson posterior predictive check. Veto: if no increase, model misspecification (omitted game-state).
2. Scenario: Weak attacking team (intercept near Stoke 0.011 page 16) increases crossing against strong defense (Bayern defense slope positive page 20). Prediction: no statistically significant negative effect; expected goals unchanged or slightly positive because luck dominates. Verifiable via match-level data. Veto: if strong negative effect appears, random-effects pooling assumption fails.
3. Scenario: Match played in sustained wind >25 km/h or heavy precipitation. Prediction: coefficient on OpenCross more negative than -0.022861 (e.g., < -0.04) because airborne delivery success collapses, making crossing even more detrimental. Verifiable by interacting weather with crosses in a refit. Veto: if coefficient becomes positive or null, the paper's conclusion does not generalize to adverse weather.

Need to ensure no betting lines. The paper mentions betting quotes and Betfair pages 4-5. I will not mention odds/spreads/totals/moneylines. I can mention Poisson model for scoring intensities but avoid betting terminology. The user asked to cite source pages; I must use [PAGE N] markers. Should quote verbatim where relevant. Need formal LaTeX.

Need >=1000 words total. Let me draft carefully, ensuring each section has enough words.

Word budget: THINK_TRACE ~450, SOURCE_OPERATORS ~350, RETROCAUSAL ~250, RECURSIVE ~250, CROSS_LAYER ~250, RLVR ~250. Total ~1800. Good.

Let's write.

Be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent ratios. I can compute exp of coefficients because that's derived from the model, not invented. I'll present as model-implied.

Exact singularity/breakdown regimes: mention when coefficient confidence interval includes zero (e.g., Manchester United attack -0.011707, likely small); when Cross=0; when crossing quality = 43.8 crosses/goal; when defense slope positive (Bayern). Also Poisson breakdown when equidispersion fails (overdispersion), or when goals are not independent (correlation -0.057 page 6). Multilevel model breaks if group-level variance components near zero or if number of groups small relative to random slopes.

Verbatim quotes: include some.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper by Jan Vecer (NESSIS 2013) estimates a multilevel cross-sectional Poisson regression in which match-level goals are modeled as a function of open crosses, home advantage, and team-specific random intercepts and random slopes for crossing, nested under attack and defense groupings [PAGE 14]. Equation (1) specifies Goals_i ~ Poisson(exp(β_I + u^I_{j[i]} + v^I_{k[i]} + β_H·Home_i + (β_C + u^C_{j[i]} + v^C_{k[i]})·Cross_i)), with u_j ~ N(0, Σ_u) and v_k ~ N(0, Σ_v) [PAGE 14]. The EPL fixed effect for OpenCross is −0.022861 (SE 0.003196) across 3,800 observations and 29 teams [PAGE 15]; the Bundesliga fixed effect is −0.020001 (SE 0.004450) across 2,536 observations and 24 teams [PAGE 18]. Because the link is logarithmic, each additional open cross multiplies expected scoring intensity by exp(−0.022861) ≈ 0.9774 in the EPL, a roughly 2.26% ceteris-paribus reduction in expected goals per cross. With an average of 18.2 open crosses per EPL game [PAGE 9], removing crossing entirely scales intensity by exp(0.022861 × 18.2) ≈ exp(0.416) ≈ 1.516, which applied to the observed 1.33 EPL goals per game [PAGE 9] yields roughly 0.69 additional expected goals per game—consistent with the abstract’s claim of up to 0.656 additional goals per game [PAGE 2]. The model implies that crossing is not merely unproductive but actively displaces higher-value possession; page 9 reports that of 18.2 EPL crosses, only 3.7 are good while 14.5 are bad, producing loss of possession in favorable positions, and a goal results per 92 open crosses [PAGE 9].

Gray-zone audit: The paper acknowledges that crosses may lead indirectly to goals in follow-up play and that crossing entails giving up alternative ways of playing; it states that regressing goals on open crosses addresses these concerns [PAGE 13]. However, the regression remains exposed to omitted variable bias from game state, score effects, defensive pressing intensity, and match venue, none of which appear as covariates beyond home/away. The claim that actual conversion of crosses to goals plays only a minor role [PAGE 3] is consistent with the finding that the opportunity cost—lost possession and forgone alternative build-up—dominates the direct conversion channel. Stronger attacking teams exhibit more negative random slopes (e.g., Tottenham −0.040664, Arsenal −0.030510, Chelsea −0.031954) than weaker teams (e.g., Stoke −0.011515, West Ham −0.015480) [PAGE 16], supporting the interpretation that elite teams substitute crossing away from skill-dominated chance creation [PAGE 21]. Manchester United is the exception (−0.011707) [PAGE 16], matching its 43.8 crosses-per-goal efficiency versus Southampton’s 143.2 [PAGE 9]. On defense, weaker defending teams suffer more from conceding crosses, while FC Bayern Munich’s defense slope is slightly positive (+0.002192) [PAGE 20], indicating a breakdown or neutrality regime against elite defensive organization.

Singularity/breakdown regimes: (i) the Poisson equidispersion assumption is strained because page 6 reports inter-score correlation of −0.057 and excess draws relative to independent Poisson [PAGE 6]; (ii) random-slope variance components are tiny (EPL Team.OpenCross variance 0.000110; Against.OpenCross 0.000028 [PAGE 15]), so team-specific crossing effects are heavily shrunk toward the fixed effect and may be indistinguishable from zero for some teams; (iii) if OpenCross_i → 0, the treatment effect vanishes by construction; (iv) if crossing quality reaches the Manchester United benchmark of 43.8 crosses per goal [PAGE 9, PAG
E 42], the marginal effect approaches neutrality; and (v) if weather or pitch conditions degrade airborne delivery, the exchangeability assumption underlying equation (1) fails and the fixed coefficient no longer represents the causal effect.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model [PAGE 14]:

Let i index matches, j[i] the attacking team, k[i] the defending team.
\[
\text{Goals}_i \sim \text{Poisson}\!\left(\exp\bigl(\beta_I + u^{I}_{j[i]} + v^{I}_{k[i]} + \beta_H \cdot \text{Home}_i + (\beta_C + u^{C}_{j[i]} + v^{C}_{k[i]}) \cdot \text{Cross}_i\bigr)\right),
\]
\[
u_j \sim \mathcal{N}(0,\Sigma_u), \qquad v_k \sim \mathcal{N}(0,\Sigma_v).
\]
Units: Goals_i is a non-negative integer count per 90 minutes; Cross_i is a count of open-play crosses per match; β_C has units of log(expected goals) per cross, i.e., dimensionless log-intensity per count; exp(β_C) is a dimensionless intensity multiplier per cross. β_H is log-intensity for home versus away.

Poisson scoring-intensity process for in-play remainder [PAGE 5]:
\[
P(X_T - X_t = k) = e^{-\lambda_t} \frac{\lambda_t^k}{k!}, \quad P(Y_T - Y_t = l) = e^{-\mu_t} \frac{\mu_t^l}{l!},
\]
with λ_t, μ_t in units of expected goals over remaining time T−t. Known limitation: scores are not independent; EPL correlation since 2006 is −0.057, and realized draws exceed independent-Poisson implication [PAGE 6].

EPL estimates [PAGE 15]: β_I = 0.473376 (0.100849), β_C = −0.022861 (0.003196), β_H = 0.417204 (0.029636); N = 3,800; groups Team = 29, Against = 29; Var(Team.Intercept) = 0.121923; Var(Team.OpenCross) = 0.000110; Var(Against.Intercept) = 0.112291; Var(Against.OpenCross) = 0.000028. Bundesliga estimates [PAGE 18]: β_I = 0.374347 (0.088441), β_C = −0.020001 (0.004450), β_H = 0.281266 (0.034298); N = 2,536; groups = 24 each.

Team-specific EPL attack slopes [PAGE 16]: Tottenham −0.040664, Arsenal −0.030510, Chelsea −0.031954, Liverpool −0.029654, Manchester City −0.029128; exception Manchester United −0.011707; Stoke −0.011515; West Ham −0.015480. Bundesliga defense [PAGE 20]: FC Bayern Munich +0.002192 (positive, null-like); Borussia Dortmund −0.003145.

Descriptive inputs [PAGE 9]: EPL average 18.2 open crosses/game, 1.33 goals/game; Bundesliga 11 open crosses/game, 1.45 goals/game; 3.7 good crosses vs 14.5 bad crosses per EPL game; 1 goal per 92 open crosses; Manchester United 43.8 crosses/goal; Chelsea 62.6 crosses/goal; Southampton 143.2 crosses/goal [PAGE 9, PAG
E 42].

Breakdown/singularity conditions: overdispersion or score dependence violates the independent Poisson assumption [PAGE 5–6]; near-zero random-slope variances imply insufficient between-team heterogeneity to identify team-specific crossing effects; when cross quality is elite (≈43.8 crosses/goal) the marginal effect is neutral [PAGE 42]; when defending quality is elite (Bayern slope +0.002192 [PAGE 20]) the effect is indistinguishable from zero; under exogenous weather shocks that reduce airborne delivery success, the fixed coefficient is not transportable because equation (1) conditions on no weather-catch interaction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The analysis sits in a long lineage of football possession theory. Charles Reep’s 1950s long-ball notation argued that most goals arise from short sequences, indirectly questioning high-volume wide delivery; Charles Hughes and the FA in the 1980s formalized the “direct vs possession” debate, emphasizing that low-percentage aerial exits cede possession. Vecer’s multilevel Poisson approach updates that lineage with modern event data: OPTA since 2008 (1,900+ games), ESPNFC match reports, Premier League since 2006 (2,700+ games), and Bundesliga since 2009 (1,250+ games, tracking since 2011) [PAGE 8]. The paper’s use of random slopes for crossing by team anticipates later expected-possession-value (EPV) frameworks in which the value of an action is measured relative to the counterfactual possession retained.

Multi-week traps: over a single match, crossing conversion is noisy (1 goal per 92 crosses [PAGE 9]), so a lucky header can produce a positive short-run association between crosses and goals. Over a 3–4 week window, regression to the mean should reveal the negative marginal effect estimated here, because bad crosses (14.5 per EPL game [PAGE 9]) repeatedly generate turnovers in advanced positions. A second trap is survivor bias in television highlights, which show mostly good crosses and goals [PAGE 9], inducing managers to overestimate crossing quality. A third trap is fixture congestion: as fatigue accumulates across a week with multiple matches, teams may default to crossing because it is a low-complexity exit under pressure, precisely when the opportunity cost of lost possession is highest. The historical warning is that descriptive crossing totals (Reep/Hughes era) conflated volume with value; Vecer’s marginal Poisson coefficient separates them, but only if the analyst controls for team strength and does not extrapolate across weather or competition regimes where the data-generating process changes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a team trails late, the manager’s theory of mind models the opponent as tending to defend deeper, which makes crossing appear high-reward. The team regresses to a high-cross habit under pressure. Vecer’s model predicts this habit suppresses scoring intensity because each cross multiplies expected goals by exp(−0.022861) ≈ 0.977 [PAGE 15]; the very act of crossing under crisis reduces the probability of the goal the team is chasing.

Counter-trap: the defending manager recursively anticipates the crossing habit, shifts the back line toward the near post, crowds the six-yard box, and prepares to transition immediately after the inevitable bad cross. Page 9 notes the vast majority of crosses end in loss of possession in a favorable position; those turnovers feed counterattacks against an attacking line that is committed high and wide. The negative effect is therefore not only mechanical (low conversion) but strategic: crossing informs the opponent’s defensive set and surrendering possession enables their transition value.

Clock interaction: as match time t approaches T, the remaining-intensity parameters λ_t and μ_t in the Poisson remainder model [PAGE 5] shrink, but crossing frequency often rises because teams seek a quick equalizer. The product of rising cross volume and a negative per-cross slope means the expected-goal cost of crossing is greatest in the final minutes, exactly when scoring intensity is most valuable. If the clock is treated as exogenous, the model implies teams should substitute crossing for retention-based build-up as t → T; if the clock is endogenous to the score state, teams crossing more when behind are simultaneously selecting into the game states where crossing is most damaging—a recursive selection trap that the regression’s fixed home/away terms do not fully close.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: a cross is explicitly an airborne delivery [PAGE 9]. Its success depends on ball flight time, atmospheric drag, and the geometry of the aerial duel. If wind speed or precipitation degrades the receiver’s first touch, the probability of a “good cross” falls below the EPL baseline of 3.7 per game [PAGE 9], converting what the model treats as an average cross into a higher-cost turnover. The Poisson model assumes exchangeability of crosses conditional on team random effects; weather introduces heteroskedasticity not represented in equation (1) [PAGE 14], so the fixed coefficient is vetoed in adverse conditions.

Biomechanical layer: finishing from crossing requires heading or volleying at high relative velocity. Impulse loading on the head–neck segment and the narrow temporal window for first-time finishing make crossing a low-skill, high-luck channel relative to ground-based build-up [PAGE 21]. Stronger teams benefit more from skill-dominated situations [PAGE 21]; therefore, the negative attack slope for elite teams (e.g., Tottenham −0.040664 [PAGE 16]) is a biomechanical veto: their players generate higher expected value per possession when the ball stays on the ground.

Weather/pitch layer: rain and turf conditions alter final-third entry success and outside-the-box shot conversion, which page 11 models alongside crosses in the conversion statistics. If pitch conditions suppress dribbling and short passing, the opportunity cost of crossing changes because the alternative “keep possession” play becomes less viable. This is a context-dependent veto: the sign of β_C could attenuate toward zero when ground play is physically impaired, though the paper’s conclusion that crossing is overused [PAGE 42] assumes the counterfactual possession is accessible.

Adjudication: the statistical finding holds under the model’s assumptions (independent Poisson intensities, exchangeable crosses, no weather interaction [PAGE 5–6, PAG
E 14]). It is vetoed when (a) airborne delivery is disrupted by weather, (b) the defending team is elite enough that the defense random slope is null or positive (Bayern +0.002192 [PAGE 20]), or (c) the attacking team possesses elite crossing quality near the Manchester United benchmark (43.8 crosses/goal [PAGE 9]) where the effect becomes neutral [PAGE 42].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (volume reduction, elite attack): An EPL top-six club reduces open crosses from the league average 18.2 per game [PAGE 9] to 10 per game over five consecutive matches while holding final-third entries and home/away status constant. Model-implied prediction: expected goals per game rise by exp[0.022861·(18.2−10)] − 1 ≈ exp(0.188) − 1 ≈ 20.7%, or roughly +0.28 goals/game on the 1.33 baseline [PAGE 9, PAG
E 15]. Verifiable from OPTA event logs and a posterior predictive check of the multilevel Poisson. Veto condition: if expected goals do not increase, the negative coefficient is confounded by omitted game-state or score effects and the causal claim fails.

Scenario 2 (weak attack vs strong defense, luck regime): A bottom-half EPL attacking team (intercept near Stoke City’s 0.011150 [PAGE 16]) faces FC Bayern Munich’s defense (random slope +0.002192, effectively neutral [PAGE 20]) and increases crossing volume. Prediction: the conditional effect of OpenCross on expected goals is statistically indistinguishable from zero or weakly positive because the defense slope nullifies the attack penalty and luck dominates. Verifiable by estimating the interaction of the specific team pair’s random effects in a held-out match sample. Veto condition: if a strong negative effect appears, the additive random-slope decomposition in equation (1) [PAGE 14] is misspecified and team-pair interactions dominate.

Scenario 3 (adverse weather interaction): A Bundesliga match is played under sustained wind above 25 km/h or heavy precipitation, conditions that degrade airborne delivery [PAGE 9]. Prediction: the marginal coefficient on OpenCross becomes more negative than the pooled −0.020001 [PAGE 18], e.g., below −0.04 log-goals per cross, because the bad-cross share (14.5 per game baseline [PAGE 9]) rises. Verifiable by refitting equation (1) with a weather × Cross interaction on the Bundesliga sample [PAGE 18]. Veto condition: if the interaction is null or positive, the paper’s conclusion does not generalize to meteorological regimes outside the estimation sample, and any in-play scoring model using crossing as a feature must be re-estimated conditionally on weather.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "pyth win utility morey model UL.md"
folder: "/GSE-Research/sports-research-papers/md/Pythagorean Win Expectancy and Weibull"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4392
---

<NATIVE_REASONING>
The user wants me to analyze a source document about Pythagorean Win Expectancy in college football. I need to produce a structured response with specific XML sections, each with deep content, totaling >= 1,000 words. Let me break down the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No toy equations. Must use formal LaTeX.
- Cite page markers [PAGE N] and verbatim quotes from the source text.
- The source text has page markers: 537, 538, 539, 540, 541, 542. I should cite these as [PAGE 537] etc. or [PAGE N] format. The instruction says "cite exact [PAGE N] markers". So I should use [PAGE 537], [PAGE 538], etc.

Let me carefully extract information from the source:

Source: Caro, C.A., & Machtmes, R. (2013). Testing The Utility Of The Pythagorean Expectation Formula On Division One College Football: An Examination And Comparison To The Morey Model. Journal of Business & Economics Research, 11(12), 537-542.

Key content:
- PE formula: W% = RS^2 / (RS^2 + RA^2) originally by Bill James for baseball.
- Morey (2003) applied to NFL with exponent 2.37.
- Oliver (2004) basketball exponent 14.
- Morey (2003) basketball 13.91.
- Cochran and Blackstock (2009) hockey 1.927.
- Dayaratna and Miller (2012) hockey exponents slightly above 2.
- Vogel (2012) Nebraska football using Morey's 2.37.
- Study: 835 teams, 2005-2011, NCAA Division I.
- Variables: Wins, losses, scoring offense (SO), scoring defense (SD).
- Winning ratio WR = wins / (wins + losses).
- PE model adapted: PWR = SO^2 / (SO^2 + SD^2) (exponent 2 chosen for simplicity).
- Morey model: PWR = SO^2.37 / (SO^2.37 + SD^2.37).
- Assessment: Sum of squared deviations / N = population variance.
- Assumption: deviations Normal, PWR unbiased estimator.
- Results Table 1 (PE model): variances 0.00675 to 0.00871.
- Table 2 (Morey model): variances 0.00621 to 0.00862.
- Both models error magnitude 10^-3.
- USF example: 2010 predicted 0.619 actual 0.615; 2011 predicted 0.647 actual 0.412; 2012 predicted 0.340 actual 0.250. Coach Holtz fired after 2012.
- Limitations: strictly retrospective, cannot forecast future; simplicity; doesn't inform coaching decisions, recruiting, gameplay directly.
- Future research: factor analysis, logistic regression, sensitivity analysis of exponents.

I need to be careful not to mention betting lines. No spreads, totals, moneylines, odds. I can talk about winning percentages, ratios, residuals, variance.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation and gray-zone audit. I should derive the PE formula from first principles (or at least formally), discuss the exponent selection, the variance metric, the Normal assumption, the comparison between exponent 2 and 2.37, the gray zones (retrospective only, small differences in variance, Normality assumption with bounded [0,1] variable, N=population vs sample, USF case as outlier/influential point, clock management and rule differences between college and NFL affecting scoring, overtime rules). Multi-hop: James -> Morey NFL -> Vogel Nebraska -> Caro & Machtmes college football. Gray-zone audit: the claim of "accurate forecasting" is retrospective; variance of order 10^-3 is small but does not imply causal predictive validity; bounded outcome variable violates Normality at extremes; exponent 2 chosen "for simplicity" not optimization; USF 2012 is a large residual.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations.
- PE: \( \mathrm{PWR}_i = \frac{\mathrm{SO}_i^{\gamma}}{\mathrm{SO}_i^{\gamma} + \mathrm{SD}_i^{\gamma}} \) where \(\gamma \in \{2, 2.37\}\). Units: points per game (PPG) or total points; dimensionless ratio.
- WR: \( \mathrm{WR}_i = \frac{W_i}{W_i + L_i} \).
- Residual: \( \epsilon_i = \mathrm{WR}_i - \mathrm{PWR}_i \).
- Squared deviation: \( \delta_i = \epsilon_i^2 \).
- Sum of squared deviations: \( \mathrm{SSD} = \sum_{i=1}^{N} \delta_i \).
- Population variance: \( \sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (\mathrm{WR}_i - \mathrm{PWR}_i)^2 \).
- Cite pages for tables and formulas.
- Breakdown regimes: \(\mathrm{SO} = 0\) or \(\mathrm{SD} = 0\) singularity (0/0 or division by zero), \(\gamma \to 0\) or \(\gamma \to \infty\), \(N=0\), tied games? College football had overtime so no ties in study period presumably, but mention breakdown if SO=SD=0. Also Normality breakdown when residuals bounded in [-1,1] but variance small (order 10^-3) so approximately Normal in center but not tails.
- Page citations: [PAGE 537] for intro/formula mention, [PAGE 538] for methods, [PAGE 539] for tables/results, [PAGE 540] for discussion/USF, [PAGE 541] for conclusions/limitations, [PAGE 542] references.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Bill James 1980s baseball -> Miller 2007 derivation -> Morey 2003 NFL (2.37) and basketball (13.91) -> Oliver 2004 basketball (14) -> Cochran 2008 baseball range 1.82-2 -> Cochran & Blackstock 2009 hockey 1.927 -> Dayaratna & Miller 2012 hockey >2 -> Rosenfeld et al. 2005 overtime -> Vogel 2012 Nebraska -> Caro & Machtmes 2013 D-I college football 2005-2011. Multi-week traps: retrospective trap (using full season to evaluate season), coaching carousel trap (firing based on residuals, USF/Holtz), schedule strength trap (not controlled), scoring environment trap (rule differences college vs NFL), small-sample season trap (12 games, high variance), overfitting trap (exponent tuning). 

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Coach under pressure (e.g., USF Holtz) regresses to conservative habits (punting, field goals) when actual wins < PWR, which further depresses scoring and creates a downward spiral.
- Counter-trap: Athletic director sees PWR > AWR (underachievement) and fires coach, but the residual may reflect luck/schedule not coaching quality; new coach faces same structural constraints.
- Clock: End-of-game clock management differences (college clock stops after first downs; NFL doesn't in last 2 minutes) influence possession count and scoring, thus SO/SD inputs, creating a feedback loop where the model inputs are themselves determined by clock rules that the model doesn't account for.
- Recursive theory of mind: Coach knows AD is using PE model; coach adjusts decisions to manage perception (go for it on 4th down to boost SO), but this changes actual scoring distribution away from the stationary assumptions of the model.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Player fatigue, injury accumulation over a 12-game season alters SO/SD mid-season; PE uses season totals, masking intra-season non-stationarity.
- Biomechanical: Field goal kickers, fourth-down conversion physiology; high-leverage plays not captured by aggregate points.
- Weather: Outdoor college stadiums, weather impacts scoring (wind, rain, heat), not in model.
- Veto adjudication: Any claim of "accuracy" is vetoed if weather/injury/schedule strength not controlled; however variance is low (~10^-3) so first-order vetoes are weak but second-order (causal) vetoes stand. Need to be precise: no betting lines. I can say "game outcome" not odds.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios that are verifiable, with predictions. They should be tied to the source.
Scenario 1: Recalculate PE with exponent optimized per season via grid search on 2005-2011 data; predict whether variance drops below 0.00621 (Morey 2007 min) significantly. Veto: if p-value > 0.05 via F-test on nested models, veto claim of exponent 2 optimality.
Scenario 2: Hold out 2011, train exponent on 2005-2010, predict 2011 winning ratios; veto retrospective forecasting claim if out-of-sample MSE > in-sample variance.
Scenario 3: Substitute SO/SD with points per possession (PPP) instead of per game; predict variance changes due to tempo/possession differences; veto if variance increases > 10% because model ignores clock/possession layer.
Each needs a verifiable prediction (e.g., variance threshold, MSE threshold, statistical test).

Word count: Need >= 1000 words total. THINK_TRACE alone >= 400. Let me ensure each section is substantial.

Let me draft carefully.

Page citations: The source text shows page numbers 537, 538, 539, 540, 541, 542. I will cite as [PAGE 537], etc. Verbatim quotes: I need to include some exact quotes with page markers.

Quotes I can use:
- "The Pythagorean Expectation Formula was the impetus for the statistical revolution of Major League Baseball." [PAGE 537]
- "The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football." [PAGE 538]
- "Performance of the Pythagorean Expectation formula-based model was found to have a total variance each year between 2005 and 2011 between 0.00675 and 0.00871, while the Morey model for professional football as applied to collegiate football data was found to have a total variance for the given years between 0.00621 and 0.00862." [PAGE 539]
- "As previously noted, the PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." [PAGE 541]
- "A coach who’s PWR is consistently greater than his AWR may be an individual who has all of the available resources to win (athletes, facilities, etc.) but is unable to actually win games." [PAGE 540]

I need to make sure I don't mention betting lines. I will not use the word odds, spread, total, moneyline. I can mention "winning percentage," "win ratio," "expected wins," "residual variance."

Structure: I'll output exactly the XML sections in order. No extra text outside? The user specified exact XML sections. I'll provide them sequentially.

Let me start writing.

THINK_TRACE: Need >=400 words. I'll write a dense multi-hop derivation.

Possible outline:
1. Derive PE from Bill James: ratio of runs scored to runs allowed mapped to [0,1] via power transform.
2. Morey's adaptation: replace runs with points, exponent 2.37 for NFL.
3. Caro & Machtmes: exponent 2 for simplicity, apply to NCAA D-I 2005-2011 (835 teams).
4. Mathematical properties: PWR in (0,1) if SO,SD >0; monotonic in SO/SD; derivative wrt SO.
5. Residual variance metric: population variance, not sample variance (N=all teams). Assumption of Normal errors bounded in [-1,1].
6. Gray zones: retrospective-only, USF example as structural break, simplicity vs optimality, Normality assumption vs bounded support, clock/rule differences, omitted variables (strength of schedule, turnover, special teams), single-season N small (118-120), exponent not optimized.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll define variables with units. Then equations. Then breakdown regimes. Citations throughout.

RETROCAUSAL_GENEALOGY: Timeline/table-like in prose. Multi-week traps.

RECURSIVE_THEORY_OF_MIND: Three sub-sections: crisis habit regression, counter-trap, clock. Then recursive loop.

CROSS_LAYER_VETO_ADJUDICATION: Physical, biomechanical, weather. Veto proof logic: "If X not controlled, claim Y is vetoed." I should say "veto proof" meaning the model's claims cannot withstand these vetoes without controls.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios. Each: name, counterfactual setup, verifiable condition, prediction, veto rule.

Word count check: I need to ensure >1000 words. Let's aim for ~200-250 words per section except THINK_TRACE which is 400+. Total maybe 1600-2000 words. Good.

Let me write carefully.

I must avoid fake equations like Force/Fatigue. I will only use equations present or logically derived from source.

For the "breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS:
- SO = 0, SD > 0 => PWR = 0 (if gamma > 0). If SD = 0, SO > 0 => PWR = 1. If SO = SD = 0 => 0/0 undefined.
- gamma -> 0+: PWR -> 0.5 for any SO, SD > 0 (information erasure).
- gamma -> infinity: PWR -> 1 if SO > SD, 0 if SO < SD, 0.5 if equal (winner-take-all singularity).
- N = 0: variance undefined.
- Bounded support: WR, PWR in [0,1], so residuals in [-1,1]. Normal assumption breaks in tails; variance order 10^-3 implies SD ~0.03, so 3 sigma ~0.09, still within bounds but kurtosis issues.

Units:
- SO, SD: points per season (dimensionless count) or points per game. Source says "total offensive points scored and total defensive points allowed." So units: points (dimensionless count).
- WR, PWR: dimensionless probability/ratio in [0,1].
- Variance: dimensionless squared probability units (probability^2). Values ~10^-3 probability^2. Standard deviation ~0.03 (3 percentage points).

Page citations: I'll place them like [PAGE 538] after quotes or facts.

Let me write now. I'll keep the tone analytical and formal.

Double-check: No mention of betting. I will not say "odds," "spread," "line," "total," "moneyline," "juice," "vig," "handicap." Safe words: expected winning percentage, predicted winning ratio, actual winning percentage, residual, variance, overachieving, underachieving.

Let's draft.

THINK_TRACE:
I'll write around 500 words.

SOURCE_OPERATORS_AND_EQUATIONS: around 350-400 words with equations.

RETROCAUSAL_GENEALOGY: around 250-300 words.

RECURSIVE_THEORY_OF_MIND: around 250 words.

CROSS_LAYER_VETO_ADJUDICATION: around 250 words.

RLVR_COUNTERFACTUAL_VETOES: around 300 words.

Total ~1850 words. Good.

I need to ensure exact XML section names. No extra attributes.

Let's write.

For verbatim quotes, I'll copy exactly from source:
- "The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football." [PAGE 538]
- "Performance of the Pythagorean Expectation formula-based model was found to have a total variance each year between 2005 and 2011 between 0.00675 and 0.00871..." [PAGE 539]
- "As previously noted, the PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." [PAGE 541]
- "A coach who’s PWR is consistently greater than his AWR may be an individual who has all of the available resources to win..." [PAGE 540]

I will make sure quotes are verbatim.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins with Bill James’s original Pythagorean Expectation for Major League Baseball, which maps run production and run prevention into an expected winning ratio through a power transform. Daryl Morey subsequently exported the structure to professional football, replacing runs with points and estimating an optimal exponent of 2.37 rather than James’s baseline of 2. Caro and Machtmes then transplant the apparatus into NCAA Division I college football for the 2005–2011 population, explicitly retaining James’s exponent of 2 “for simplicity” rather than re-estimating it on collegiate scoring [PAGE 538]. This is the first gray zone: the choice of gamma = 2 is not justified by an optimization criterion on the 835-team sample; it is a convenience anchor borrowed from baseball and carried through Morey’s NFL work. Because scoring offense (SO) and scoring defense (SD) enter as season totals, the model is inherently retrospective. The authors themselves concede that “the PE model is strictly a retrospective model and cannot forecast future performance” [PAGE 541], which voids any prospective causal claim about coaching quality or program trajectory.

The statistical operator is a population variance of squared deviations: sigma squared equals one over N times the sum over all teams of (WR minus PWR) squared, where WR is wins divided by games played and PWR is SO^gamma over (SO^gamma plus SD^gamma). The authors report residual variances of order 10^-3 probability-squared units for both models across all seven years, with the adapted PE model ranging from 0.00675 to 0.00871 and the Morey model from 0.00621 to 0.00862 [PAGE 539]. Numerically the two are nearly indistinguishable, yet the paper frames the adapted PE model as the more “novel” and therefore preferred object of study [PAGE 539]. This preference is not supported by a likelihood-ratio test, an F-test on nested exponent models, or an information criterion; it rests on variance magnitudes that differ in the third or fourth decimal place.

A second gray zone is the Normality assumption. The residuals are bounded in [-1, 1] because both WR and PWR are probabilities, but the authors assume the deviations are Normally distributed “as a first approximation” [PAGE 538]. With variance near 10^-3, the implied standard deviation is roughly 0.03 probability points, so three-sigma excursions reach roughly plus-or-minus 0.09, still inside the unit interval but close enough to the boundaries that kurtosis and skew are plausible, particularly for extreme outliers such as South Florida in 2011, where predicted winning percentage was 0.647 and actual was 0.412 [PAGE 540]. That single residual contributes approximately (0.235)^2 = 0.0552 to the sum of squared deviations, a nontrivial fraction of the annual total of roughly 1.045 [PAGE 539]. The model’s error metric is therefore sensitive to a small number of structural-break programs, undermining the claim of stable accuracy.

Third, the model omits strength of schedule, turnover margin, special teams, and tempo. The authors acknowledge that future research should use factor analysis or logistic regression to isolate gameplay variables that drive points scored and allowed [PAGE 541]. Until such variables are included, the residual variance measures fit to scoring aggregates, not evidence that SO and SD are sufficient statistics for team quality. The USF coaching narrative exemplifies the recursive trap: an athletic director may use a history of PWR exceeding actual winning ratio to justify firing a coach [PAGE 540], yet the residual may reflect schedule difficulty, injuries, or random variance rather than managerial deficiency. The derivation is mathematically coherent, but the inferential leap from residual sign to coaching causality is unwarranted without controls for the omitted layers.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let team i in season t have scoring offense SO_{i,t} (total points scored, units: points) and scoring defense SD_{i,t} (total points allowed, units: points). The Pythagorean predicted winning ratio is

\mathrm{PWR}_{i,t}(\gamma) = \frac{\mathrm{SO}_{i,t}^{\gamma}}{\mathrm{SO}_{i,t}^{\gamma} + \mathrm{SD}_{i,t}^{\gamma}}, \qquad \gamma \in \{2,\, 2.37\}.

This expression is dimensionless and bounded: if SO_{i,t} > 0 and SD_{i,t} > 0, then 0 < \mathrm{PWR}_{i,t} < 1. It is strictly increasing in SO and strictly decreasing in SD, with partial derivatives

\frac{\partial \mathrm{PWR}}{\partial \mathrm{SO}} = \gamma \, \mathrm{SO}^{\gamma-1} \mathrm{SD}^{\gamma} (\mathrm{SO}^{\gamma} + \mathrm{SD}^{\gamma})^{-2}, \quad
\frac{\partial \mathrm{PWR}}{\partial \mathrm{SD}} = -\gamma \, \mathrm{SO}^{\gamma} \mathrm{SD}^{\gamma-1} (\mathrm{SO}^{\gamma} + \mathrm{SD}^{\gamma})^{-2}.

The actual winning ratio is

\mathrm{WR}_{i,t} = \frac{W_{i,t}}{W_{i,t} + L_{i,t}}, \qquad W,L \in \mathbb{N}_0,

also dimensionless in [0,1]. The residual is \epsilon_{i,t} = \mathrm{WR}_{i,t} - \mathrm{PWR}_{i,t}, units: probability points. Because the authors observe every Division I team rather than a sample, they compute a population variance

\sigma^2_t = \frac{1}{N_t} \sum_{i=1}^{N_t} \epsilon_{i,t}^2,

with N_t equal to 118 in 2005, 119 in 2006–2008, and 120 in 2009–2011, totaling 835 team-season observations [PAGE 539]. The reported values are

\gamma = 2:\; \sigma^2 \in \{0.007820,\, 0.008115,\, 0.006819,\, 0.006753,\, 0.008699,\, 0.008014,\, 0.008709\}

and

\gamma = 2.37:\; \sigma^2 \in \{0.008218,\, 0.008468,\, 0.006219,\, 0.006872,\, 0.008389,\, 0.008290,\, 0.008621\},

all in probability-squared units [PAGE 539]. The authors note the former were computed “for simplicity… in reasonable keeping with previous work by Morey (2003)” [PAGE 538], and summarize that both models predict “with an error of magnitude 10^{-3}” [PAGE 539].

Singularity and breakdown regimes:
1. SO = SD = 0 yields 0/0, undefined; a winless, scoreless team breaks the operator.
2. SO > 0, SD = 0 gives \mathrm{PWR} = 1; SO = 0, SD > 0 gives \mathrm{PWR} = 0. These are boundary absorbing states with zero gradient information.
3. \gamma \to 0^+ collapses \mathrm{PWR} \to 0.5 for all positive scoring inputs, erasing all signal.
4. \gamma \to \infty produces a winner-take-all step function: \mathrm{PWR} \to 1 if SO > SD, 0 if SO < SD, undefined at equality.
5. N_t = 0 makes the variance undefined; not applicable here but a formal boundary.
6. Normality of \epsilon assumes unbounded support, yet \epsilon \in [-1, 1]; with \sigma \approx 0.03, tails are compressed, invalidating exact Normal inference at extremes. The USF 2011 residual of roughly 0.235 lies nearly eight standard deviations from zero under the reported variance, signaling a regime where the Normal approximation fails [PAGE 539]-[PAGE 540].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from Bill James’s 1980s baseball formula through Miller’s 2007 derivation, then to Morey’s 2003 professional-football exponent of 2.37 and his basketball value of 13.91, Oliver’s basketball exponent of 14, Cochran’s hockey value of 1.927, Dayaratna and Miller’s hockey exponents slightly above 2, Rosenfeld et al.’s overtime extensions, and Vogel’s 2012 Nebraska application of Morey’s 2.37 [PAGE 537]. Caro and Machtmes close the loop by applying James’s original exponent of 2 to the full NCAA Division I population from 2005 through 2011 [PAGE 537]-[PAGE 538]. Each hop exports the same operator—points scored raised to gamma over points scored plus points allowed raised to gamma—into a new scoring ecology without re-deriving gamma from first principles for that ecology.

Multi-week traps embedded in this genealogy:
- The retrospective trap: the model fits season totals after the season ends; it cannot forecast next year’s wins, so any coaching-decision utility is post hoc rationalization [PAGE 541].
- The coaching-carousel trap: South Florida’s predicted versus actual split (0.647 vs. 0.412 in 2011; 0.340 vs. 0.250 in 2012) is cited as evidence that “Coach Holtz’ teams at USF had underperformed,” contributing to his dismissal after 2012 [PAGE 540]. This treats residual sign as evidence of managerial failure without controlling for schedule strength, injuries, or opponent quality.
- The rules-ecology trap: college and NFL differ in pass-interference enforcement, two-minute clock management, and overtime possession structure [PAGE 538]. Importing Morey’s NFL exponent assumes scoring processes are invariant across those rule changes, which they are not.
- The small-season trap: college teams play roughly 11–13 games, so winning ratio is a high-variance estimator of latent quality. A single overtime loss or weather-distorted game shifts WR by roughly 0.08, comparable to the model’s reported error band.
- The exponent-transfer trap: because gamma = 2 is selected “for simplicity” rather than fit, the model inherits baseball’s curvature onto football’s lower-scoring, higher-variance possession structure.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when a coach observes actual winning ratio below predicted winning ratio and responds by tightening decision-making—punting on fourth down, kicking field goals instead of attempting conversions, and reducing tempo [PAGE 540]. These conservative habits depress scoring offense and total possessions, which lowers the very SO input that the PE model uses to generate expectations, producing a self-fulfilling downward spiral in which the model’s underachievement diagnosis causes the behavior that sustains the underachievement.

The counter-trap is the athletic director’s inference that PWR consistently greater than actual winning ratio signals a coach “unable to actually win games” despite resources, justifying termination [PAGE 540]. The counter-trap is that the residual may reflect luck, schedule, or unmodeled special-teams variance; firing the coach replaces a known structural constraint with an unknown one while leaving the scoring-offense and scoring-defense generating process unchanged.

The clock layer closes the recursion: college football stops the clock after first downs, while the NFL generally does not in the final two minutes of each half [PAGE 538]. This changes possession counts and therefore the relationship between scoring rate and total points. A coach who reads the PE model may consciously manipulate pace to manage the predicted winning ratio, altering the input distribution away from the stationary regime assumed in the residual analysis. Because the model treats SO and SD as exogenous totals, it cannot distinguish whether high scoring reflects strategic aggression or merely more possessions granted by clock rules. The recursive loop is therefore: coach observes residual -> adjusts fourth-down and tempo decisions to manipulate perception -> changes SO/SD generation -> invalidates the stationarity of the historical residual used to evaluate the coach.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: season-total scoring offense and defense conceal intra-season non-stationarity from injuries, fatigue, and personnel changes. Because the model aggregates all games into one SO and one SD per year [PAGE 538], a team that loses its starting quarterback in week three is evaluated with the same scoring parameters as a healthy team. Any claim that residual variance measures coaching efficacy is vetoed unless injury-adjusted scoring is introduced.

Biomechanical layer veto: fourth-down conversion attempts, field-goal accuracy, and red-zone efficiency are high-leverage biomechanical events not represented by aggregate points. Two teams with identical SO and SD can differ radically in win probability if one converts fourth downs at 65 percent and the other at 35 percent. The PE formula cannot veto this omission, but any inference about “in-game decisions” such as fourth-down attempts [PAGE 540] is vetoed because the input data collapse those decisions into a single point total.

Weather layer veto: outdoor college stadiums expose games to wind, precipitation, and temperature extremes that suppress or inflate scoring independently of team quality. The model contains no weather covariate, so a cold-weather November game and a dome game receive identical scoring weights. Claims of predictive accuracy across geographically diverse conferences are vetoed unless climate is controlled.

Adjudication: the first-order fit claim—residual variance of order 10^-3—is weakly supported by the tables [PAGE 539] but is not vetoed by these layers because the variance metric is agnostic to causation. The second-order causal claim—that coaches and athletic directors can use PWR to evaluate programs or justify personnel actions [PAGE 540]-[PAGE 541]—is vetoed unless the model adds schedule strength, injury status, weather, tempo, and play-level conversion data. Until those layers are controlled, the residual measures statistical deviation from a scoring aggregate, not evidence of underperformance or overperformance.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Exponent re-estimation veto. Counterfactual: re-estimate gamma by grid search on the 2005–2011 pool to minimize pooled sigma squared, rather than fixing gamma = 2 “for simplicity” [PAGE 538]. Verifiable condition: if an F-test comparing the gamma = 2 model against the optimized-gamma model fails to reject the null at alpha = 0.05, veto the claim that exponent 2 is adequate for college football. Prediction: optimized gamma will fall near 2.3–2.5, closer to Morey’s NFL value, and pooled variance will drop below 0.00621 probability-squared units, statistically distinguishing it from the fixed-2 baseline.

Scenario 2: Out-of-sample forecasting veto. Counterfactual: estimate gamma on 2005–2010, hold out 2011, and predict PWR for all 120 teams in 2011. Verifiable condition: if out-of-sample mean squared error exceeds the 2011 in-sample residual variance of 0.008709 by more than 20 percent, veto the claim that the model has forecasting utility [PAGE 539]-[PAGE 541]. Prediction: because the model is strictly retrospective, out-of-sample MSE will exceed in-sample variance by roughly 30–50 percent, confirming the authors’ own limitation that it cannot forecast future performance [PAGE 541].

Scenario 3: Tempo/possession veto. Counterfactual: replace season-total SO and SD with points per possession (PPP) for offense and defense, thereby removing clock-driven possession differences between college and NFL rule sets [PAGE 538]. Verifiable condition: if the residual variance using PPP inputs increases by more than 10 percent relative to the totals-based variance, veto the claim that SO and SD are sufficient scoring inputs. Prediction: variance will increase because raw totals conflate scoring efficiency with tempo; the PE operator will misattribute possession differences to team quality, producing larger residuals, especially for fast-paced teams such as Oregon and Baylor that ranked in the top four for scoring offense in 2013 [PAGE 540].
</RLVR_COUNTERFACTUAL_VETOES>
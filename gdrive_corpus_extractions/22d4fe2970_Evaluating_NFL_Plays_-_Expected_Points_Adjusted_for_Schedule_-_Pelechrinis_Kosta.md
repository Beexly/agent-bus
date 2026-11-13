---
source: "Evaluating NFL Plays - Expected Points Adjusted for Schedule - Pelechrinis_Kosta_mlsa18.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7055
---

<NATIVE_REASONING>
The user wants me to analyze the provided NFL research paper ("Evaluating NFL plays: Expected points adjusted for schedule" by Pelechrinis, Winston, Sagarin, Cabot) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and extract all formal equations, units, page citations, etc.

Let me map out what I have from the source:

Page 1: Abstract, Introduction. Mentions expected points model by Winston, Cabot and Sagarin (WCS). State defined by triplet <Down, Yards-to-Go, Field Position>. 19,799 possible states. 2014-2016 seasons: 4,972, 4,989, 4,966 states appearing. Touchback state prominent with almost 5x more appearances than second most frequent. WCS computes value for each state using linear programming [7]. Example: state <4,4,7> has value -2.575. Example play: team ball 1st and 10 on own 23, v1 = -0.014. Gains 4 yards -> state 2nd and 6 on own 27, v2 = 0.109. Value of play = v2 - v1 = 0.123.

Page 2: Continuation. WCS model details. Other EP models: Yurko et al. [10] multinomial logistic regression. Brian Burke [1] grouped states and used next score. Crucial drawback: none adjusts for strength of opponent. Example: running play value .10 points against above average rushing defense should be more valuable than same play against below average running defense.

Page 3: Schedule strength section. During 2015-2016 easiest schedule was 4 points per game easier than toughest schedule. Difference of 64 points worth approximately 2 wins per season. Example: average running play gained 0.06 points. Team A averages 0.10 points per run but against running defenses that gave up 0 points per run. Then Team A's running offense better than 0.1 points per run. Equation (1): 
\hat{p_i} = m_{rush} + ro_i + rd_i + \epsilon
where \hat{p_i} is point margin gained for offense for rushing play i, m_rush league average points per rush, ro_i (rd_i) offensive (defensive) ability, \epsilon error term. Positive rdi indicates below average rushing defense while positive roi indicates above average rushing offense.

Page 4: Optimization problem (2):
minimize_{mrush, ro, rd} \sum_{i=1}^N (v_i - (m_{rush} + ro_i + rd_i))^2
subject to
\sum_{j=1}^{32} n_{oj} \cdot ro_j = 0,
\sum_{j=1}^{32} n_{dj} \cdot rd_j = 0.
where noj and ndj are number of offensive and defensive rushing plays for team j, vi raw point value, N total number of rushing plays. Constraints normalize weighted average of teams' rushing offensive and defensive abilities to both be equal to 0.

Adjustment: if rushing play of team A against team B provided unadjusted value v. If rushing defense ability of team B is rd_B, then adjusted value for offense is v - rd_B. If team A's offense rushing ability is ro_A, adjusted value for B's defense is v - ro_A. Example: Cowboys vs Patriots, Elliott rushing play unadjusted 0.40 points, Patriots defensive rush ability -0.05 points per play (better than average). Adjusted value for Cowboys offense: 0.40 - (-0.05) = 0.45 points. Cowboys offensive rushing ability +0.10, adjusted value for Patriots defense: 0.40 - 0.10 = 0.3 points.

Page 5: Impact. Absolute difference between raw/unadjusted and adjusted values for offense and defense for season 2014-2016. Average absolute discrepancy 0.06 points per offensive play (p-value < 0.001) and 0.07 points per defensive play (p-value < 0.001). Offense includes rushing/passing/special teams (kicking, punting, field goal attempts). Defense includes rushing/passing defense/special teams (kick/punt returns, field goal defense). In typical game approx 130 plays (both offensive and defensive). Discrepancy 0.06 translates to 130 · 16 · 0.06 = 124.8 points. 33 points correspond approximately to 1 win (Appendix C), translates to approximately 3.8 wins for every team not credited correctly.

Figure 1: rushing and passing ability for 2014-2016. 2016: Broncos best passing defense, Rams worse passing offense, Falcons best passing offense (Matt Ryan MVP). Rushing: Bills and Cowboys top rushing teams. Jets top-3 rushing defense when adjusted expected values. Traditional stats would not put Jets in top-10.

Page 6: Special teams. Kick-off or punt return TD undeniably valuable but captures specific rare event. Average net yards per punt misleading. 50-yard net punt from own 45 pins opponent deep; same punt from end zone gives great field position to opposing offense, not special teams' fault. Figure 2: special teams ratings for kickoffs and punts 2014-2016. Offense = team kicking/punting/covering; positive value = good play. Defense = returning team; negative value = better than average play. Cardinals worse than average in almost all special teams facets (slightly above average in kickoff returns). Arizona performed 40 points below average, cost nearly 1.2 wins in 2016. Chiefs special teams best punt return unit; punt return game 40 points above average.

Page 7: Case Studies. Passing-vs-Rushing: 2016 running plays averaged 0.069 points per play, pass attempts averaged 0.26 points per play. Prior years similar. Data observational based on teams' game plan. If team calls same play every time efficiency drops. Opposing defense sure offense will pass -> more likely play pass-oriented defense reducing passing effectiveness. Analyzed expected points gained in 3rd downs from passing and rushing plays when offense uses shotgun formation (typically indicative of passing play). For 3rd and less than 5 yards to go, rushing plays gain average 0.2 points, passing plays gain average 0.16 points. Shotgun signals probable pass and defense surprised by running play. Passing riskier than running. Standard deviation for points per rushing play 0.89 in 2016, passing plays 1.48. Riskier plays may make successful sustained drive less likely.

Rushing Gaps: 2014-2016 approx 25% of rushing attempts up the middle, rest rushing gaps approx 12% each. Rush attempts towards outside provide more expected points per run compared to rushes up middle. Optimization problem 2 can be solved for offensive and defensive ratings per gap type.

Page 8: Figure 3. Example: Cardinals best team in defending runs through right guard, not as successful through left guard.

Page 9: Discussion/Conclusions. Framework for adjusting points for opponent strength expected point values per play. WCS details. Customized database for coaches. 2016 Packers poor running team outside red zone, great inside red zone due to defenses worried about Aaron Rodgers. Interactive database https://athlytics.shinyapps.io/nfl-pv/. Can use any raw point value model with optimization framework. Further research: football version of WAR. Example: players rated 1-100. Regression models for passing/rushing. Dependent variable Y = team's Added Points per 100 Pass Attempts, independent variables average team rating for each of 11 offensive positions on passing plays. Pass attempt regression coefficient for left tackle 0.10, 20th percentile left tackle's passing rating 30 (replacement level). Left tackle rating 90 played 500 pass attempt snaps: added (90-30) * 5 * (0.10) = 30 points above replacement on passing plays. Rushing regression: left tackle added 5 points on rushing plays. Total 35 points above replacement, approx 1 WAR. College prospects: college football higher uneven strength schedule. Adjust college player contributions based on strength of defenses faced.

Page 10: References.

Page 11: Appendix A. Intuition behind WCS model. 7-yard field example. V(i) expected point margin if have ball on yard line i. System of equations:
V(1) = 0.5 * V(2) - 0.5 * V(5)  (3)
V(2) = 0.5 * V(3) - 0.5 * V(4)  (4)
V(3) = 0.5 * V(4) - 0.5 * V(3)  (5)
V(4) = 0.5 * V(5) - 0.5 * V(2)  (6)
V(5) = 0.5 * (7 - V(1)) - 0.5 * V(1)  (7)
Solution: V(1) = -5.25, V(2) = -1.75, V(3) = 1.75, V(4) = 5.25, V(5) = 8.75. Each yard line closer to goal line worth 3.5 points (half a touchdown). Adapting requires identifying transition probabilities. Pro Quarterback game used: offensive team chooses one of 12 plays, defensive team one of 9 plays. Distribution of yards gained used to obtain recursive equations.

Page 12: Appendix B. Other adjustment approaches. Football Outsiders. "passing plays are also adjusted based on how the defense performs against passes to running backs, tight ends, or wide receivers. Defenses are adjusted based on the average success of the offenses they are facing." Simple average still biased from competition faced. Optimization approach resembles very large number of iterations where team ratings recalculated; simple average is one single iteration.

Page 12: Appendix C. 33 Points Equal 1 Win in NFL. Linear relationship between point differential and total wins. Data 2014-2016. Linear regression intercept 7.9, slope 0.03. Team with 0-point differential expected 8-8 record. Every increase in point differential by 1 point corresponds to 0.03 wins. Equivalently, 1 win corresponds to 1/0.03 ≈ 33 points.

Now I need to structure the response into the required XML sections with >=1000 words total, and THINK_TRACE >=400 words.

Constraints:
- Zero betting lines: do not mention spreads, totals, moneylines, odds. The paper mentions "expected margin of victory" and "point differential" but not betting lines per se. I must avoid betting terminology.
- Zero toy equations: state formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.

I need to be careful: the paper uses expected points, expected margin of victory, point differential. These are not betting lines per se, but I should avoid framing them as betting odds/spreads. I can discuss them as performance metrics.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I should derive the optimization framework, discuss the sparse state space problem (19,799 states vs ~40,000 plays per season, only ~4,972 observed per season), the linear programming approach of WCS, the identification issue in the constrained least squares, the weighting constraints, the singularity when play counts are zero or imbalanced, the special teams attribution problem (pick-6, fumble, field position), the observational data/game plan endogeneity (pass-run substitution effect), shotgun formation conditional analysis, standard deviation/risk analysis (0.89 vs 1.48), the WAR extrapolation assumption (linear separability of player ratings), and the college prospect generalization trap (schedule strength even more uneven in NCAA). Gray zones: p-values <0.001 but practical significance? Average absolute discrepancy 0.06-0.07 points/play, 130 plays/game, 16 games = 124.8 points/season ~3.8 wins. But this is average absolute discrepancy across offense and defense, potentially double-counting? The paper says "0.06 points per offensive play" and "0.07 points per defensive play". Then "In a typical game, there are approximately 130 plays (both offensive and defensive). A discrepancy of 0.06 then translates to 130 · 16 · 0.06 = 124.8 points." This mixes offensive discrepancy applied to all plays. Gray-zone audit needed. Also the WAR example: coefficient 0.10 per rating point per 100 attempts, replacement at 20th percentile (rating 30), player rating 90, 500 snaps -> (90-30)*5*0.10 = 30 points. But "per 100 pass attempts" means 500 snaps = 5 units of 100. So 60 * 5 * 0.10 = 30. Units check out. But assumes positional ratings are independent and additive, which is a strong assumption. Breakdown regime: if a team never faces a particular opponent or play count n_{oj}=0 or n_{dj}=0, the weighted constraint still holds but identification may fail if design matrix not full rank (e.g., team plays only one opponent repeatedly). Also if rd_i and ro_i are perfectly collinear across plays (e.g., team A always plays team B), cannot separate offense and defense.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I need to reproduce equations (1), (2), (3)-(7), Appendix C regression. Units: points per play, points per season, wins. Page citations [PAGE 1] through [PAGE 12]. Verbatim quotes where appropriate.

RETROCAUSAL_GENEALOGY: Historical lineage: Carter & Machol [5] 1971 Operations Research on Football; Carroll, Palmer, Thorn [4] Hidden Game of Football 1989; WCS [8,9] infinite horizon zero-sum stochastic game, Shapley [7] stochastic games 1953; Yurko et al. [10] nflwar 2018; Brian Burke [1] expected points. Multi-week traps: uneven schedule in NFL (college even worse), schedule strength 4 points per game easier vs toughest = 64 points = 2 wins [PAGE 3]. Special teams evaluation ignored historically. Weighted constraints are a retrocausal adjustment: current play value re-attributed based on end-of-season opponent ratings, creating a fixed-point problem.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. I need to interpret "crisis habit regression" as teams regressing to conservative play-calling under pressure (e.g., shotgun formation predictive of pass, defense adjusts, run becomes efficient). "Counter-trap" = the optimization framework countering naive raw yardage/EP models that ignore opponent strength. "Clock" = game situation (down, distance, field position), shotgun formation on 3rd and <5, clock management, sustained drive risk (passing std dev 1.48 vs rushing 0.89). The paper says relying heavily on one play type leads to efficiency drop [PAGE 7] (defensive adjustment). This is a recursive theory of mind: offense anticipates defense anticipates offense. Crisis habit: under pressure (3rd and long), teams may revert to run/pass habits that are exploitable.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper doesn't discuss weather or biomechanics explicitly. But I can discuss veto conditions: physical field position (own end zone vs own 45 punting), biomechanical/player personnel (Ezekiel Elliott, LeSean McCoy, Matt Ryan, Aaron Rodgers), weather not mentioned but field position is physical. I must be careful not to invent. I can say the paper does not model weather, temperature, wind, precipitation, or biomechanical load; therefore any cross-layer veto based on those is exogenous to the model. However, the model does account for field position (state triplet) and personnel via team ratings. Special teams: 50-yard net punt from own 45 vs end zone [PAGE 6] — physical field position veto. Pick-6 and fumble [PAGE 6] — attribution veto. Breakdown regime: states appearing rarely (<4,972 of 19,799) → sparse data singularity.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (i.e., can be tested against data). Predictions for each. Must not invent toy equations; can use the paper's formalism.

Scenario 1: Sparse-state veto. If a down-distance-field-position state appears fewer than k times in a season (e.g., <10), WCS state value is unreliable; veto adjustment for plays in that state. Prediction: plays originating from states with <10 observations will show adjusted-point residuals with variance > 2x the league-average play-value variance, and the p-value for adjustment significance will exceed 0.05 in subsample tests.

Scenario 2: Perfect collinearity / schedule isolation veto. If Team A's rushing offense only faces Team B's rushing defense (or a closed subset), ro_A and rd_B are not separately identified; veto the separation. Prediction: condition number of the design matrix in optimization problem (2) exceeds threshold (e.g., 1e6) for isolated team pairs, and ro/rd estimates will flip sign when a single game is removed (jackknife instability).

Scenario 3: Special teams attribution veto. On a pick-6 or fumble recovery leading to opponent score, raw expected points assigns all defensive blame; the paper's model reassigns offense accountability [PAGE 6]. Veto: plays where possession changes via turnover should not be credited 100% to defense. Prediction: defensive adjusted points per play will decrease by at least 0.03 points/play on turnover plays relative to non-turnover plays when offense accountability is applied, and special teams ratings for teams with high turnover rates will shift by >5 points/season.

I need to ensure total word count >= 1000 words. Let's aim for ~1500-2000 words across sections. THINK_TRACE alone >=400.

No betting lines: avoid "spread", "moneyline", "total", "over/under", "odds", "vig", "bookmaker", "handicap". The paper mentions "expected margin of victory" which is close but not a betting line; I can refer to it as expected point differential or expected scoring margin, not a betting spread.

Zero toy equations: I will not invent Force/Fatigue ratios. I will only use equations from the paper or clearly derived ones with assumptions stated.

Exact singularity/breakdown regimes: mention when design matrix rank deficient, when n_oj = 0 or n_dj = 0, when state space sparse (<4,972 observed of 19,799), when replacement level assumptions fail (20th percentile), etc.

Cite exact [PAGE N] markers. Use verbatim quotes where useful.

Let's start writing.

THINK_TRACE:

Need deep multi-hop derivation. Start from raw EP: v = v2 - v1 [PAGE 2]. State triplet. 19,799 states but only ~4,972 observed per season [PAGE 2]. Sparsity means linear programming [7] required. Then opponent adjustment: observation equation \hat{p_i} = m_rush + ro_i + rd_i + \epsilon [PAGE 3]. Constraints weighted sums zero [PAGE 4]. Least squares objective. Adjustment formulas v - rd_B for offense, v - ro_A for defense [PAGE 4]. Discrepancy math: 0.06 * 130 * 16 = 124.8 points [PAGE 5]. 33 points = 1 win [PAGE 12, Appendix C]. So 3.8 wins [PAGE 5]. Gray zones: the 130 plays includes both offense and defense but discrepancy is per offensive play; double counting? The paper says average absolute discrepancy is 0.06 points per offensive play and 0.07 per defensive play. Then uses 0.06 for all 130 plays. This is a potential unit mismatch/gray zone. Also p-value < 0.001 doesn't imply practical significance but 3.8 wins is large. The WAR derivation assumes additive separability of 11 position ratings [PAGE 9]; breakdown if ratings are collinear or if replacement level (20th percentile) is not constant across teams. College extension trap: NCAA schedule even more uneven [PAGE 9], but small-sample FCS vs FBS mismatch can break optimization identifiability.

Let's write it out.

SOURCE_OPERATORS_AND_EQUATIONS:

List equations:
- Raw play value: \Delta v = v_2 - v_1 [PAGE 2]. Example v1 = -0.014, v2 = 0.109, Δv = 0.123.
- State space: S = {<Down, Yards-to-Go, Field Position>}, |S| = 19,799 [PAGE 2]. Observed states per season: 4,972 (2014), 4,989 (2015), 4,966 (2016) [PAGE 2].
- WCS via linear programming [7], Appendix A [PAGE 11].
- Observation model Eq (1): \hat{p_i} = m_{rush} + ro_i + rd_i + \epsilon_i [PAGE 3]. Units: points per play. ro_i > 0 above-average offense; rd_i > 0 below-average defense [PAGE 3].
- Optimization Eq (2): minimize \sum_{i=1}^N (v_i - (m_{rush} + ro_i + rd_i))^2 subject to \sum_{j=1}^{32} n_{oj} ro_j = 0, \sum_{j=1}^{32} n_{dj} rd_j = 0 [PAGE 4]. Units: points^2 objective; constraints in points·plays = 0.
- Adjusted values: offense v - rd_B; defense v - ro_A [PAGE 4]. Example: Cowboys 0.40, Patriots rd = -0.05 → 0.45; Cowboys ro = +0.10 → Patriots defense 0.30 [PAGE 4].
- Discrepancy: 0.06 pts/offensive play, 0.07 pts/defensive play, p < 0.001 [PAGE 5]. Annual: 130 plays/game × 16 games × 0.06 = 124.8 pts [PAGE 5]. Appendix C: 1 win ≈ 33 pts (slope 0.03, intercept 7.9) [PAGE 12]. 124.8 / 33 ≈ 3.8 wins [PAGE 5].
- 2016 averages: rush 0.069 pts/play, pass 0.26 pts/play [PAGE 7]. Std dev: rush 0.89, pass 1.48 [PAGE 7]. Shotgun 3rd & <5: rush 0.20, pass 0.16 [PAGE 7].
- Appendix A 7-yard field equations (3)-(7) [PAGE 11]. Solutions V(1)=-5.25,... V(5)=8.75 [PAGE 11]. Each yard line ≈ 3.5 pts [PAGE 11].
- WAR example: (90-30) × 5 × 0.10 = 30 pts passing; +5 pts rushing = 35 pts ≈ 1 WAR [PAGE 9].
- Appendix C regression: Wins = 7.9 + 0.03 × Point Differential [PAGE 12]. 1/0.03 ≈ 33 [PAGE 12].

Breakdown/singularity: rank deficiency if play-count vectors n_oj, n_dj do not span R^32; if any team has n_oj = 0 or n_dj = 0 for a unit, rating unidentifiable; sparse states <4,972 of 19,799 cause WCS value estimation error; observational endogeneity (game plan) violates exogeneity of play type [PAGE 7].

RETROCAUSAL_GENEALOGY:

Historical: Carter & Machol [5] 1971 OR on football; first point value per play [PAGE 2]. Hidden Game of Football [4] 1989 linear function [PAGE 2]. Shapley [7] 1953 stochastic games [PAGE 11]. WCS [8,9] infinite horizon zero-sum stochastic game [PAGE 2]. Yurko et al. [10] multinomial logistic regression [PAGE 2]. Brian Burke [1] next score [PAGE 2]. Multi-week traps: uneven NFL schedule; easiest vs toughest 4 pts/game easier = 64 pts = 2 wins [PAGE 3]. College even more uneven [PAGE 9]. Retrocausal: end-of-season opponent ratings adjust earlier plays; fixed-point iteration. Simple average (Football Outsiders) = one iteration; optimization = many iterations [PAGE 12, Appendix B]. Schedule strength bias if not iterated [PAGE 4, footnote].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under pressure (3rd and 15), offenses may regress to habitual run/pass; defense anticipates this [PAGE 7, Introduction example]. Shotgun on 3rd & <5 signals pass; defense plays pass-oriented; run surprises and gains 0.20 vs pass 0.16 [PAGE 7]. This is a recursive theory of mind: offense chooses formation knowing defense infers play type; defense chooses front knowing offense may counter. Counter-trap: raw EP models treat all yards equal; the optimization framework is the counter-trap that re-attributes value based on opponent strength [PAGE 3]. Clock/game state: down-distance-field position triplet is the clock/state layer; sparse states mean late-game clock situations (e.g., 4th and 4 at own 7, value -2.575 [PAGE 2]) are poorly estimated [PAGE 2]. Passing riskier: std dev 1.48 vs 0.89; sustained drive less likely [PAGE 7]. Crisis habit: teams may abandon run because pass averages higher (0.26 vs 0.069) but context matters [PAGE 7].

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: field position state; 50-yard punt from own 45 vs end zone changes opponent field position dramatically but not special teams fault if offense stalled [PAGE 6]. Pick-6 and fumble: defense shouldn't bear all blame; offense gets negative value plays [PAGE 6]. Biomechanical/personnel: Ezekiel Elliott, LeSean McCoy, Matt Ryan, Aaron Rodgers cited as drivers of ratings [PAGE 5, 9]. Weather: not modeled in paper; exogenous veto—if wind/precipitation alter kicking/punting, special teams ratings confounded [PAGE 6, implied]. Breakdown regime: states with <10 observations [PAGE 2 sparsity]; turnover plays where attribution is ambiguous [PAGE 6]; red-zone exceptions (Packers run great inside red zone due to Rodgers passing threat) [PAGE 9]. Veto proof: model does not incorporate temperature, wind speed, precipitation, or player-level biomechanical load; thus any cross-layer veto requiring those variables is outside model scope and must be applied externally.

RLVR_COUNTERFACTUAL_VETOES:

Three verifiable scenarios.

1. Sparse-State Value Veto. Condition: WCS state value estimated from < k observations (k=10). Veto: do not adjust plays originating from such states; flag raw EP only. Verifiable prediction: In 2014-2016 data, plays from states with count < 10 will have adjusted-value residuals whose absolute mean exceeds the league-average absolute discrepancy (0.06 pts) by at least 50%, and the t-test for adjustment significance on this subsample will yield p > 0.05. (Uses paper's 0.06 baseline [PAGE 5] and state sparsity [PAGE 2].)

2. Schedule-Isolation Collinearity Veto. Condition: design matrix in Eq (2) has condition number > 10^6 or a team pair shares > 80% of their rushing plays. Veto: do not separately identify ro and rd; pool or regularize. Verifiable prediction: A leave-one-game-out jackknife on 2016 team pairs with concentrated schedules will show ro/rd sign flips in > 30% of iterations, whereas balanced schedule pairs will show sign flips in < 5%. (Uses Eq (2) constraints [PAGE 4] and 32 teams [PAGE 4].)

3. Turnover Attribution Veto. Condition: play results in turnover (interception/fumble) returned for score or short field. Veto: do not assign 100% defensive EP credit; apply offensive negative-value reattribution per paper's logic [PAGE 6]. Verifiable prediction: Defensive adjusted points per play on turnover plays will be at least 0.03 points lower (less negative/more positive) than on non-turnover plays after reattribution, and special teams seasonal ratings will shift by > 5 points for teams in top quartile of turnover rate. (Uses pick-6/fumble discussion [PAGE 6] and special teams 40-point swing example [PAGE 6].)

Need to ensure no betting lines. I won't mention any.

Word count: Let's estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~500. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~300. Total ~2200. Good.

Need exact XML tags. No extra sections.

Let's write carefully with citations [PAGE N].

I must include verbatim quotes where citing. I'll use quotes sparingly but accurately.

Examples of verbatim:
[PAGE 2]: "The state is defined by the triplet: < Down, Yards-to-Go, Field Position >."
[PAGE 2]: "WCS provides a value of -2.575 for the state < 4, 4, 7 >"
[PAGE 3]: "Schedule strength plays a crucial role in the number of games an NFL team wins."
[PAGE 4]: Equation (1) and (2).
[PAGE 5]: "A discrepancy of 0.06 then translates to 130 · 16 · 0.06 = 124.8 points."
[PAGE 12]: "1 win corresponds to 1/0.03 ≈ 33 points."

I need to be careful: the user wants exact [PAGE N] markers. I'll use them inline.

Now write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with the raw expected-points (EP) play value. From [PAGE 2], the state is defined as the triplet <Down, Yards-to-Go, Field Position>, producing 19,799 possible states. Because an NFL season contains roughly 40,000 plays but only 4,972 (2014), 4,989 (2015), and 4,966 (2016) distinct states actually appear, most states are rare or unobserved; the touchback state alone appears almost 5× more frequently than the second-most-frequent state. This sparsity forces the WCS model to rely on a linear-programming solution over the full state space rather than direct empirical averages [PAGE 2, Appendix A]. The raw value of any single play is the difference between terminal and initial state values: Δv = v₂ − v₁. The worked example on [PAGE 2] gives v₁ = −0.014 for 1st-and-10 on the own 23 and v₂ = 0.109 after a 4-yard gain to 2nd-and-6 on the own 27, yielding Δv = 0.123 points.

The first gray zone is attribution. Raw EP assigns the full Δv to the play’s outcome, but [PAGE 3] explicitly notes that “none of them adjusts the value of a play for the strength of opponent.” A 0.10-point run against an elite rushing defense is more valuable than the same run against a weak defense. The proposed observation model on [PAGE 3], Eq. (1), is 
\hat{p_i} = m_{rush} + ro_i + rd_i + \epsilon_i,
where ro_i > 0 denotes above-average offense and rd_i > 0 denotes below-average defense. The identification is secured by the weighted zero-mean constraints in Eq. (2) on [PAGE 4], which normalize offensive and defensive ratings across the 32 teams using play counts n_{oj} and n_{dj}. A singularity arises if the design matrix is rank-deficient—for example, if two teams play only each other repeatedly, ro and rd cannot be separated, or if a team records zero offensive or defensive plays in a unit, making that team’s rating unidentifiable.

The second gray zone is the magnitude and sign of the adjustment. [PAGE 4] gives the adjustment formulas: offensive adjusted value = v − rd_B and defensive adjusted value = v − ro_A. The Patriots example illustrates sign sensitivity: a 0.40-point Cowboys run against a Patriots defense with rd = −0.05 becomes 0.45 for the offense; if the Cowboys offense has ro = +0.10, the same play is worth only 0.30 to the Patriots defense. [PAGE 5] reports average absolute discrepancies of 0.06 points per offensive play and 0.07 points per defensive play (p < 0.001). It then extrapolates 0.06 × 130 plays × 16 games = 124.8 points per season, or roughly 3.8 wins given Appendix C’s 33 points ≈ 1 win [PAGE 5, P
AGE 12]. This arithmetic mixes per-offensive-play discrepancy with total plays (offense plus defense) and treats the absolute discrepancy as purely additive, which is a unit-mismatch gray zone: if offensive and defensive discrepancies partially offset within the same play, the net seasonal swing may be smaller than 124.8 points, though the paper’s framing treats each side’s misattribution as independently costly.

The third gray zone is the observational endogeneity of play calling. [PAGE 7] warns that data are observational and scheme-dependent: if an offense calls the same play every time, defensive anticipation reduces efficiency. The shotgun formation on 3rd-and-less-than-5 is “typically indicative of a passing play,” yet rushing from shotgun averages 0.20 points versus 0.16 for passing because the defense is surprised by the run [PAGE 7]. This is a recursive game-theoretic loop: offense signals via formation, defense best-responds, offense counter-responds. Passing is also riskier: standard deviation of points per rush is 0.89 versus 1.48 for passes in 2016 [PAGE 7], so expected-point means alone understate drive-sustainability risk.

Finally, the WAR extrapolation on [PAGE 9] assumes additive separability of 11 positional ratings and a fixed replacement level at the 20th percentile. The arithmetic (90 − 30) × 5 × 0.10 = 30 points, plus 5 rushing points = 35 ≈ 1 WAR, breaks down if position ratings are collinear, if replacement level varies by team or era, or if the per-100-attempt coefficient does not scale linearly to 500 snaps. The college prospect extension [PAGE 9] faces an even harsher identifiability trap: NCAA schedules are more uneven than NFL schedules, and FCS/FBS mismatch introduces sparse, biased competition matrices that can destabilize the same optimization problem.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, assumptions, and breakdown regimes.

Raw expected-points play value [PAGE 2]:
\Delta v = v_2 - v_1,
units: points per play. Example: v_1 = -0.014 (1st-and-10, own 23), v_2 = 0.109 (2nd-and-6, own 27), so \Delta v = 0.123 points [PAGE 2].

State space [PAGE 2]:
\mathcal{S} = \{ \langle \text{Down}, \text{Yards-to-Go}, \text{Field Position} \rangle \}, \quad |\mathcal{S}| = 19{,}799.
Observed states per season: 4,972 (2014), 4,989 (2015), 4,966 (2016). Breakdown/singularity: most states rarely occur; WCS state values require linear programming [7] because direct empirical estimation is infeasible for rare states [PAGE 2].

WCS illustrative 7-yard-field recursion [PAGE 11, Appendix A]:
V(1) = 0.5 \cdot V(2) - 0.5 \cdot V(5)
V(2) = 0.5 \cdot V(3) - 0.5 \cdot V(4)
V(3) = 0.5 \cdot V(4) - 0.5 \cdot V(3)
V(4) = 0.5 \cdot V(5) - 0.5 \cdot V(2)
V(5) = 0.5 \cdot (7 - V(1)) - 0.5 \cdot V(1)
Solution: V(1) = -5.25, V(2) = -1.75, V(3) = 1.75, V(4) = 5.25, V(5) = 8.75. Units: expected point margin. Interpretation: each yard line closer to the goal line is worth 3.5 points (half a touchdown) [PAGE 11]. Breakdown: real NFL requires transition probabilities from play-by-play or simulation; sparsity of real states limits direct calibration.

Opponent-strength observation model [PAGE 3, Eq. (1)]:
\hat{p_i} = m_{rush} + ro_i + rd_i + \epsilon_i.
Units: points per play. m_{rush} = league average points per rush. ro_i > 0 = above-average offensive rushing ability; rd_i > 0 = below-average defensive rushing ability (i.e., easier to gain against) [PAGE 3]. \epsilon_i is the error term. Assumption: additive separability of offense, defense, and league mean; no interaction terms.

Constrained least-squares estimation [PAGE 4, Eq. (2)]:
\minimize_{m_{rush}, ro, rd} \sum_{i=1}^{N} \left( v_i - (m_{rush} + ro_i + rd_i) \right)^2
subject to
\sum_{j=1}^{32} n_{oj} \cdot ro_j = 0, \qquad \sum_{j=1}^{32} n_{dj} \cdot rd_j = 0.
Units: objective in points^2; constraints in points \times plays = 0. n_{oj}, n_{dj} = offensive and defensive rushing play counts for team j [PAGE 4]. Breakdown/singularity: rank deficiency if play-count vectors do not span \mathbb{R}^{32}; if n_{oj} = 0 or n_{dj} = 0 for any team-unit, that rating is unidentified; if a subset of teams only plays within itself, the system decomposes and cross-subset ratings cannot be compared.

Adjusted play values [PAGE 4]:
Offensive adjustment: v_{adj}^{off} = v - rd_B.
Defensive adjustment: v_{adj}^{def} = v - ro_A.
Units: points per play. Example: Cowboys run v = 0.40 against Patriots with rd_B = -0.05 \Rightarrow v_{adj}^{off} = 0.45. If Cowboys ro_A = +0.10, then Patriots defensive adjustment = 0.40 - 0.10 = 0.30 [PAGE 4].

Empirical discrepancy and seasonal extrapolation [PAGE 5]:
Average absolute discrepancy: 0.06 points per offensive play and 0.07 points per defensive play (p-value < 0.001) over 2014–2016 [PAGE 5]. Seasonal translation: 130 plays/game \times 16 games \times 0.06 = 124.8 points [PAGE 5]. Win equivalence [PAGE 12, Appendix C]: linear regression on 2014–2016 yields Wins = 7.9 + 0.03 \times \text{Point Differential}; hence 1 win \approx 1/0.03 \approx 33 points [PAGE 12]. Result: 124.8 / 33 \approx 3.8 wins per season misattributed if unadjusted [PAGE 5].

2016 play-type averages and risk [PAGE 7]:
Rush: 0.069 points per play, \sigma = 0.89. Pass: 0.26 points per play, \sigma = 1.48. Shotgun formation, 3rd-and-less-than-5: rush averages 0.20 points, pass averages 0.16 points [PAGE 7]. Units: points per play; standard deviation in points per play.

Special teams and red-zone conditioning [PAGE 6, P
AGE 9]:
A 50-yard net punt from the own 45 pins the opponent deep; the same punt from the own end zone gives the opponent excellent field position, yet is not the special teams’ fault if the offense stalled [PAGE 6]. Pick-6s and fumbles should not assign all blame to the defense; offense receives negative-value plays [PAGE 6]. 2016 Packers were poor outside the red zone but strong inside it, likely because defenses respected Aaron Rodgers’ passing [PAGE 9].

WAR extrapolation [PAGE 9]:
Passing model: dependent variable = Added Points per 100 Pass Attempts; independent variables = average team rating for 11 offensive positions. Left-tackle coefficient = 0.10; replacement = 20th percentile rating = 30. Player rating = 90 over 500 pass snaps: (90 - 30) \times 5 \times 0.10 = 30 points above replacement. Rushing adds 5 points; total = 35 points \approx 1 WAR [PAGE 9]. Assumption: linear, additive, position-independent ratings; breakdown if ratings are collinear or replacement level is not stable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week schedule traps.

The intellectual genealogy begins with Virgil Carter and Robert Machol’s 1971 operations-research treatment of football, the first work to assign a point value to each play [PAGE 2]. Carroll, Palmer, and Thorn’s The Hidden Game of Football (1989) advanced a linear function for down-and-distance value [PAGE 2]. The WCS model (Winston, Cabot, Sagarin) treats football as an infinite-horizon zero-sum stochastic game, drawing on Shapley’s 1953 stochastic-games framework [PAGE 2, P
AGE 11, Reference 7]. More recent raw-EP alternatives include Yurko et al.’s multinomial logistic regression and Brian Burke’s next-score grouping method [PAGE 2]. Crucially, [PAGE 3] states that “none of them adjusts the value of a play for the strength of opponent,” which is the gap this paper closes.

The schedule-strength trap is multi-week and structural. [PAGE 3] notes that during 2015–2016 the easiest NFL schedule was 4 points per game easier than the toughest, a 64-point seasonal gap worth roughly 2 wins. Because NFL schedules are uneven, raw points per play conflate unit quality with opponent difficulty. The paper’s optimization is explicitly retrocausal: end-of-season estimated opponent ratings (ro, rd) are fed backward to revalue every earlier play in the season. This creates a fixed-point problem in which team ratings and play adjustments must be solved simultaneously rather than in one pass.

[PAGE 12, Appendix B] contrasts this with non-public adjustment approaches such as Football Outsiders, whose described method—adjusting passing plays by defensive performance against position groups and defenses by average offensive success—is characterized as potentially equivalent to “one single iteration” of an iterative process. If opponent strength is only averaged once, the estimate remains biased by the competition each team faced; the full optimization resembles “a very large number of iterations where the team ratings are re-calculated” [PAGE 12]. The college extension [PAGE 9] intensifies the trap: college football exhibits an even higher degree of uneven schedule strength, so unadjusted college EP values are more severely confounded by defensive quality than NFL values, and small-sample FCS–FBS matchups can introduce identifiability breakdowns in the same constrained least-squares system.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus game-state clock.

Crisis habit regression refers to the tendency of play-calling to collapse into predictable habits under pressure, which defenses then exploit. The paper’s opening example—3rd-and-15 for the Cowboys on their own 40, Ezekiel Elliott gains 12 yards, yet the play is “bad” because the Cowboys will probably punt—illustrates a crisis down-and-distance state where raw yardage rewards a play that fails to change expected outcome [PAGE 1–2]. On [PAGE 7], the authors note that if an offense calls the same play every time, defensive anticipation reduces efficiency; conversely, if the defense is certain a pass is coming, it plays pass-oriented and reduces passing effectiveness. This is a recursive theory of mind: offense chooses formation (e.g., shotgun) to signal intent, defense infers play type from formation, offense counters by running against a pass-expecting defense.

The counter-trap is the paper’s adjustment framework itself. Raw expected-points models treat all yards as equal and ignore opponent strength; the constrained optimization re-attaches value to the actual defensive quality faced, preventing the trap of crediting a team for padding stats against weak defenses or blaming it for struggles against elite units [PAGE 3]. Without this counter-trap, special teams evaluation is especially blind: traditional metrics such as average net yards per punt are misleading because a 50-yard punt from the own 45 and a 50-yard punt from the own end zone have identical gross yardage but radically different strategic value [PAGE 6].

The clock layer is the state triplet <Down, Yards-to-Go, Field Position>, which encodes time- and situation-dependent value. The WCS example state <4, 4, 7>—4th down, 4 yards to go, own 7-yard line—carries a value of -2.575, meaning the offense is expected to be outscored by roughly 2.6 points from that point on [PAGE 2]. These late-game, deep-field-position states are precisely the sparsest in the data [PAGE 2], so clock-critical decisions rest on the least reliable value estimates. Risk further interacts with the clock: passing averages more (0.26 vs. 0.069 rush in 2016) but with higher variance (\sigma = 1.48 vs. 0.89), making sustained drives less reliable and increasing the strategic value of a dependable rushing offense when clock management and drive consistency matter [PAGE 7]. A team in a must-pass crisis may regress to its habitual pass, but the defense has already coded that habit into its front, nullifying the expected-point advantage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof; breakdown regimes.

Physical layer veto: field position is a first-order physical state in the WCS triplet. [PAGE 6] provides a clear veto case: a 50-yard net punt from the own 45 pins the opponent deep, whereas the same gross yardage from the own end zone hands the opponent excellent field position; the latter is not a special-teams failure if the offense could not move the ball. Any metric that equates these two punts by net yards alone fails the physical-field-position veto. Similarly, [PAGE 6] argues that a pick-6 or fumble leading to an opponent score should not assign 100% defensive blame; the offense must absorb negative-value plays for the turnover and short field.

Biomechanical/personnel layer: the paper’s case studies tie ratings to specific personnel—Ezekiel Elliott and LeSean McCoy driving Cowboys/Bills rushing ratings, Matt Ryan’s MVP passing for the Falcons, and Aaron Rodgers’ passing threat altering Packers red-zone rushing effectiveness [PAGE 5, P
AGE 9]. These are player-layer causes embedded in team-level ratings. However, the model does not explicitly incorporate player-level biomechanical load, snap counts, injury status, or individual technique; those are exogenous to the optimization and must be layered on separately (as the WAR extension attempts on [PAGE 9]).

Weather layer: the paper contains no weather, temperature, wind, or precipitation variables. Kicking and punting are physically sensitive to wind and elements; special-teams ratings from [PAGE 6] therefore risk confounding operator skill with weather conditions unless an external weather veto is applied. Because the source text does not model weather, any cross-layer adjudication involving temperature, wind speed, or precipitation is outside the model’s proven domain and must be treated as an external veto, not an internal correction.

Breakdown regimes: (1) State-space sparsity—only ~4,972 of 19,799 states appear per season, so WCS values for rare down-distance-field-position cells are unstable [PAGE 2]; (2) design-matrix singularity in Eq. (2) if team play counts do not span the 32-team space or if n_{oj}, n_{dj} = 0 for any unit [PAGE 4]; (3) turnover attribution ambiguity on pick-6s and fumbles [PAGE 6]; (4) red-zone scheme dependence, where inside-the-red-zone rushing success may be a passing-game shadow effect rather than true rushing quality [PAGE 9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards counterfactual veto scenarios with predictions.

Veto Scenario 1 — Sparse-State Value Veto.
Condition: A WCS state \langle Down, Yards-to-Go, Field Position \rangle is observed fewer than k = 10 times in a season. Veto: suppress schedule-strength adjustment for plays originating in that state; return only raw EP with a high-uncertainty flag. This is verifiable because [PAGE 2] documents that most of the 19,799 states are rare and only ~4,972 appear per season.
Prediction: In the 2014–2016 play-by-play data, plays from states with count < 10 will exhibit adjusted-value residual absolute means exceeding the league-average discrepancy of 0.06 points per play by at least 50%, and the statistical significance of the adjustment on this sparse subsample will fall to p > 0.05, unlike the full-sample p < 0.001 reported on [PAGE 5].

Veto Scenario 2 — Schedule-Isolation Collinearity Veto.
Condition: The design matrix of Eq. (2) [PAGE 4] has condition number > 10^6, or a pair of teams accounts for > 80% of each other’s rushing offensive/defensive plays (closed scheduling loop). Veto: refuse separate identification of ro and rd for that pair; pool ratings or apply regularization. This is verifiable because Eq. (2) requires the weighted constraints over 32 teams to be full rank for unique offensive and defensive ratings [PAGE 4].
Prediction: A leave-one-game-out jackknife on 2016 concentrated-schedule team pairs will produce ro/rd sign flips in > 30% of iterations, whereas balanced-schedule pairs will produce sign flips in < 5%. Sign instability indicates the optimization is fitting noise rather than separable unit ability.

Veto Scenario 3 — Turnover Attribution Veto.
Condition: The play results in a turnover (interception or fumble) returned for a touchdown or giving the opponent a short field. Veto: do not assign 100% of the expected-point swing to the defense; reapply offensive negative-value accountability per the paper’s pick-6/fumble reasoning [PAGE 6]. Verifiable via the special-teams and turnover discussion on [PAGE 6] and the 40-point special-teams swing example for Arizona and Kansas City [PAGE 6].
Prediction: After reattribution, defensive adjusted points per play on turnover plays will be at least 0.03 points less punitive to the defense than on non-turnover plays, and teams in the top quartile of turnover rate will see seasonal special-teams or defensive ratings shift by > 5 points relative to a no-reattribution baseline. Failure to observe this shift would indicate the model is double-counting turnovers against defense.
</RLVR_COUNTERFACTUAL_VETOES>
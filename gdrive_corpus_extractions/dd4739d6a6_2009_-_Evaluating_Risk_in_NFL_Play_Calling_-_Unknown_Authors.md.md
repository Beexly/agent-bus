---
source: "2009 - Evaluating Risk in NFL Play Calling - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2009"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4021
---

<NATIVE_REASONING>
The user wants a rigorous analysis of a specific source paper: "2009 - Evaluating Risk in NFL Play Calling" by Benjamin Alamar. I need to follow the STRICT INVARIANTS:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is provided inline. It appears to be pages 2 (maybe a multi-page PDF but only page 2 content is shown? Actually the text seems to span multiple sections but is labeled PAGES: 2. I need to cite [PAGE 2] since that's what's provided. Wait, the user says PAGES: 2 but provides one block of source text. I should treat the provided text as [PAGE 2] or maybe the whole thing is page 2? The header says "PAGES: 2". I will cite [PAGE 2] for all extracted content since that's the only page marker available from the prompt context. However, I should be careful: if the text contains multiple pages, I don't have explicit page breaks. I'll cite [PAGE 2] consistently.

Need to avoid betting lines entirely. No mention of Vegas, spreads, etc.

Need formal LaTeX equations. The paper has:
- Expected points: EP_t = f(Down_t, YardsToGo_t, Yardline_t)
- NEP_t = EP_{t+1} - EP_t + Points Scored_t
- Weighted least squares regression with fixed effects.
- Risk factor rf = P(NEP < 0)
- Passing premium: mean NEP run 0.07 vs pass 0.13, difference 0.06.
- rf run = 0.62, rf pass = 0.57 overall.
- Situation-specific rf.

Need units: NEP in points (dimensionless but in expected points units), probability dimensionless [0,1], yards in yards, distance to goal in natural log form (log yards), time in quarters (categorical).

Assumptions: WLS weighted by # of plays on a drive; fixed effects for each team-year; data 2005-2008 regular season, 220,326 plays from Football Outsiders; only through 3rd quarter, score diff < 11 points for passing premium; turnover post-play EP is negative of expected points given new context.

Breakdown regimes: non-normal yardage distribution means higher variance desirable (contradicts Rockerbie's variance definition); Q2 significant only at 95% not 99%; score difference >= 11 points or 4th quarter excluded from passing premium analysis; risk factor definition changes by down/distance.

Let's structure:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words. I need to derive the expected points framework, discuss NEP, risk factor, passing premium, identify gray zones: small sample in specific situations? The paper doesn't give sample sizes for rf by situation. Weighted R^2=0.37 leaves 63% unexplained. Fixed effects absorb team-year heterogeneity but may mask strategic adaptation. The "next drive" expansion is noted but not implemented. Turnover EP simplification. Non-normal distribution means variance is not risk; they switch to downside probability rf. The correlation with winning 0.55 offense, -0.54 defense is ecological; doesn't prove causality. The passing premium is conditional on score < 11 and through Q3, which excludes end-game and blowout contexts where running may be rational (clock management, though not explicitly in paper). Gray zone: "irrational" conclusion assumes coaches minimize risk/maximize mean NEP, but coaches may have multi-play dynamic programming objectives not captured by single-play NEP.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Units. Page citations [PAGE 2]. Verbatim quotes.

Equations:
EP_t = E[Points | Down_t, YardsToGo_t, Yardline_t]
NEP_t = EP_{t+1} - EP_t + PointsScored_t
rf = P(NEP_t < 0 | play type, context)
WLS: minimize sum_i w_i (EP_i - X_i beta)^2, w_i = # plays on drive, fixed effects team-year.
Regression table: Constant 6.38 (0.09), Down -0.49 (0.01), Yards to Go -0.07 (0.00), Q1 -0.29 (0.03), Q2 0.07 (0.03), Q3 -0.37 (0.03), Distance to Goal -1.18 (0.01) [ln form].
All significant at 99% except Q2 at 95%.
Mean NEP: Run 0.07, Pass 0.13, diff 0.06, significant at 99%.
rf: overall run 0.62, pass 0.57. 1st and 10: run 0.66, pass 0.53. 2nd and 3: run 0.35, pass 0.44.

Units: Expected points in points (dimensionless score units), NEP in points per play, rf dimensionless probability, yards in yards, distance to goal in log(yards), down categorical (1-4), quarter categorical.

Breakdown: WLS assumes homoskedasticity within weights; fixed effects assume additive team-year intercepts; ln distance to goal singular at goal line (distance=0, ln undefined; likely 1 yard added or excluded). rf becomes unstable when cell counts small (not reported). Passing premium sample restriction excludes 4th quarter and score diff >= 11.

<RETROCAUSAL_GENEALOGy>: Historical lineage: Romer 2002 (fourth down decision), Alamar 2006, Winston 2009, Rockerbie 2008, Carroll et al 1989 (expected points in football), baseball expected runs. Multi-week traps: Teams that persist in run-heavy play calling accumulate negative NEP over weeks; regression to mean in defensive rankings; offensive NEP correlation with winning 0.55 suggests persistent advantage but roster/injury changes week-to-week break stationarity.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: Under pressure (late game, close score), coaches regress to run habit despite data showing pass higher mean NEP and lower rf in many situations. Counter-trap: If defense anticipates pass premium exploitation, pass effectiveness may decay (mixed strategy equilibrium). Clock: Paper excludes 4th quarter and score diff >=11 precisely where clock management and win probability (not expected points) dominate; single-play NEP is myopic relative to dynamic game clock.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need to argue that the statistical framework is vetoed by physical layers: weather (wind, precipitation) affects passing variance and completion probability not in model; biomechanical fatigue affects QB accuracy and RB explosiveness across plays; surface/turf affects injury risk and cutting. The paper's NEP model is context-free regarding weather/biomechanics, so its prescriptions can be vetoed by physical layer constraints. However, no betting lines.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Probably counterfactual veto scenarios. Need 3 scenarios that are verifiable and predictions.
1. High-wind game (>15 mph) on turf: model predicts pass preferred, but physical veto reduces completion rate; prediction: pass NEP premium collapses or reverses, run rf increases less than pass rf.
2. QB injured/fatigued (late game, consecutive snaps): model says pass lower rf, but biomechanical veto increases interception/fumble probability; prediction: pass rf spikes above run rf in 4th quarter despite paper's exclusion.
3. Short-yardage goal-line (distance to goal ln singularity, within 5 yards): model's ln distance breaks down; run may have lower rf than pass due to reduced field dimensions; prediction: rf_run < rf_pass inside 5-yard line, contradicting overall run rf=0.62 > pass rf=0.57.

Need to ensure total words >= 1000 across sections. Each section should be substantial.

No betting lines. No toy equations. Use real equations from paper. Cite [PAGE 2].

Let's draft carefully.

Word count: Need >=1000 words total. I'll aim for ~1500-1800 words.

THINK_TRACE >=400 words.

Let's write.

Need verbatim quotes from source. I'll quote:
"Previous work examining play calling behavior in the NFL has noted to possibility of irrational behavior (Alamar 2006, Romer 2002, Winston 2009, Rockerbie 2008)."
"Most analysis suggests, based on various measures of payoff, that teams run too much."
"Risk can now be thought of as the probability that a play will produce negative NEP (risk factor – rf)"
"Comparing run plays and pass plays demonstrates that passing (rf = 0.57) is less risky than running (rf=0.62) for all plays."
"Coach’s insistence on balancing the run and pass seems to be irrational, as running creates a lower expected outcome with increased risk."

Citations [PAGE 2].

Need formal LaTeX.

Let's construct the response.

Important: The user says PAGES: 2 but provides a single text block. I'll cite everything as [PAGE 2] since it's the only page marker available. I should not fabricate page numbers.

Let's write each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
I will derive:
1. From play-by-play to points on drive variable.
2. Weighted least squares estimation of EP.
3. NEP calculation.
4. Risk factor as downside probability.
5. Passing premium and its conditional nature.
Gray zones: omitted variable bias (no weather, clock, score beyond 11 points, quarterback quality fixed in team-year FE), ecological fallacy (team-level NEP vs play-calling causal), dynamic inconsistency (single-play vs game state), singularity at distance to goal=0 for ln transform, Q2 marginal significance, small cell risk factors unreported.

Need >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations, breakdown. I'll write equations with \begin{align} etc.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss Romer 2002, Alamar 2006, Rockerbie 2008, Winston 2009, Carroll et al 1989, expected runs in baseball. Multi-week traps: offensive NEP correlation 0.55 with winning, defense -0.54; but week-to-week roster turnover, injuries, game planning breaks stationarity. Teams that keep running too much accumulate negative NEP; defensive adjustments create cyclical trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Crisis habit: coaches under pressure revert to run. Counter-trap: defense adjusts, pass premium erodes. Clock: paper's sample excludes Q4 and score diff >=11 where clock and win probability dominate expected points. Single-play NEP is myopic.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss how statistical model lacks weather, fatigue, surface, injury. These layers can veto play calling recommendations. E.g., wind affects passing more than running; fatigue affects QB throwing mechanics. The model is not veto-proof because it assumes ceteris paribus physical conditions.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. Make them concrete and verifiable.

Let's write now.

Check for betting lines: none.

Check for toy equations: none. All equations are from paper or standard derivations. Units stated.

Let's draft.

I will ensure XML tags exactly as specified.

Section order: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES.

Word count check: I need to be verbose enough.

Let's begin writing.

I need to be careful about saying "pages" when only one page is provided. I'll say "the provided source page [PAGE 2]".

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs an expected-points (EP) state space over NFL game context and then derives a play-level risk metric from the residuals of that state space. First hop: raw play-by-play data from Football Outsiders for the 2005–2008 regular seasons (220,326 plays) are reduced to a drive-level “points on drive” variable and a play-count variable [PAGE 2]. Second hop: expected points are estimated as a conditional mean, EP_t = f(Down_t, YardsToGo_t, Yardline_t), via weighted least squares (WLS), where each observation is weighted by the number of plays on the drive and fixed effects are included for each team-year (e.g., 49ers2005) [PAGE 2]. Third hop: net expected points for a play is defined as the first difference of the state value plus immediate scoring, NEP_t = EP_{t+1} − EP_t + PointsScored_t, with turnover terminal states assigned the negative of the opponent’s expected points under the new field position [PAGE 2].

Fourth hop: the paper abandons Rockerbie’s variance-based risk definition because yardage distributions are non-normal; under non-normality, higher variance can be desirable when mean payoff is equal [PAGE 2]. Instead, risk is redefined as a downside probability, the risk factor rf = P(NEP_t < 0 | play type, context) [PAGE 2]. Fifth hop: the passing premium is computed as the difference in mean NEP between pass and run plays, restricted to plays through the third quarter with score differential less than 11 points [PAGE 2]. Reported means are run NEP = 0.07 and pass NEP = 0.13, a 0.06-point gap significant at the 99% level [PAGE 2]. Sixth hop: rf is compared across contexts; overall rf_run = 0.62 versus rf_pass = 0.57, but on 2nd-and-3 the ordering reverses (rf_run = 0.35 < rf_pass = 0.44) [PAGE 2].

Gray-zone audit. (1) Omitted variable bias: the WLS fixed effects absorb team-year averages but do not include quarterback identity, weather, surface, defensive personnel groupings, or clock state. Because the estimation sample excludes the fourth quarter and score differentials ≥ 11 points [PAGE 2], the passing premium is not transportable to end-game or blowout regimes where clock management and win probability dominate single-play expected points. (2) Ecological fallacy: team-level average NEP correlates with winning at r = 0.55 (offense) and r = −0.54 (defense) [PAGE 2], but this correlation does not establish that marginal play-calling changes cause wins; unobserved roster quality drives both NEP and wins. (3) Singularity: distance to goal is entered in natural log form [PAGE 2], which is undefined at the goal line and behaves poorly inside very short yardage, exactly where run/pass risk trade-offs are most decision-relevant. (4) Inference fragility: Q2 is significant only at the 95% level while all other controls are significant at 99% [PAGE 2], and the weighted R² is only 0.37, leaving 63% of EP variation unexplained by the listed covariates [PAGE 2]. (5) Small-cell risk: situation-specific rf values (e.g., 1st-and-10, 2nd-and-3) are reported without sample sizes or standard errors, so the reversal on 2nd-and-3 could be sampling noise rather than a stable structural feature. (6) Dynamic inconsistency: the conclusion that balancing run and pass is “irrational” [PAGE 2] assumes a one-shot myopic objective; a coach solving a finite-horizon dynamic program may rationally run to consume clock, protect a lead, or set up future play-action, none of which are represented in the static NEP framework.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

All quantities below are extracted from the provided source page [PAGE 2].

Expected points operator:
\[
EP_t = \mathbb{E}\!\left[\text{Points remaining} \mid Down_t,\; YardsToGo_t,\; Yardline_t\right]
\]
Units: expected points (dimensionless score units on the standard football expected-points scale).

Net expected points operator:
\[
NEP_t = EP_{t+1} - EP_t + PointsScored_t
\]
Units: points per play. On a turnover, \(EP_{t+1}\) is set to the negative of the expected points of the opposing team under the new field context [PAGE 2].

Weighted least squares estimation:
\[
\min_{\beta} \sum_{i=1}^{N} w_i \left( EP_i - X_i \beta \right)^2,\quad w_i = \#\text{plays on drive}_i
\]
with fixed effects \(\gamma_{team,year}\) for each team-year cell (e.g., 49ers2005, 49ers2006, 49ers2007, 49ers2008). Data: NFL regular season 2005–2008, \(N = 220{,}326\) plays [PAGE 2]. Reported weighted \(R^2 = 0.37\).

Estimated regression coefficients [PAGE 2]:
\[
\begin{array}{l|r|r|r}
\text{Variable} & \text{Estimate} & \text{Std. Error} & t\text{-value} \\
\hline
\text{Constant} & 6.38 & 0.09 & 73.38 \\
\text{Down} & -0.49 & 0.01 & -41.57 \\
\text{Yards to Go} & -0.07 & 0.00 & -26.83 \\
Q1 & -0.29 & 0.03 & -8.71 \\
Q2 & 0.07 & 0.03 & 2.31 \\
Q3 & -0.37 & 0.03 & -11.22 \\
\ln(\text{Distance to Goal}) & -1.18 & 0.01 & -90.31
\end{array}
\]
All estimates are significant at the 99% confidence level except Q2, which is significant at 95% [PAGE 2]. Distance to goal is in natural log form, introducing a singularity as distance \(\to 0\) (goal line), where \(\ln(0)\) is undefined and the model is not specified [PAGE 2].

Risk factor operator:
\[
rf(\text{play type},\; context) = \Pr\!\left(NEP_t < 0 \mid \text{play type},\; context\right)
\]
Units: dimensionless probability in \([0,1]\). Reported values [PAGE 2]:
- Overall: \(rf_{run} = 0.62\), \(rf_{pass} = 0.57\).
- 1st and 10: \(rf_{run} = 0.66\), \(rf_{pass} = 0.53\).
- 2nd and 3: \(rf_{run} = 0.35\), \(rf_{pass} = 0.44\).

Passing premium sample restriction and result [PAGE 2]:
Plays only through the 3rd quarter with score difference < 11 points. Mean NEP: Run \(= 0.07\), Pass \(= 0.13\). Difference \(= 0.06\), statistically significant at the 99% confidence level.

Correlation with winning (team-season level) [PAGE 2]:
\[
\text{Corr}(\text{Offense Average NEP},\; \text{Winning}) = 0.55,\quad
\text{Corr}(\text{Defense Average NEP},\; \text{Winning}) = -0.54.
\]

Breakdown regimes:
1. Log-distance singularity: \(\ln(\text{Distance to Goal})\) is invalid at the goal line and unstable inside very short yardage; run/pass recommendations derived from this transform are undefined or unreliable within a few yards of the end zone.
2. Quarter truncation: the passing premium is estimated excluding the 4th quarter; clock-dependent strategy is outside the model’s domain.
3. Score truncation: score differential \(\ge 11\) points is excluded; garbage-time and large-lead scenarios are not represented.
4. Heteroskedasticity / small cells: situation-specific \(rf\) estimates are reported without cell counts; sparse down-distance-yardline strata may produce unstable probabilities.
5. Fixed-effect limitation: team-year fixed effects absorb time-invariant and season-invariant quarterback/coach quality but cannot separate strategic play-calling from personnel effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week strategic traps.

The paper situates itself in a lineage of NFL decision-analysis that begins with expected-points models in football (Carroll et al. 1989) and Romer’s 2002 work on fourth-down decision-making, extended by Alamar (2006), Winston (2009), and Rockerbie (2008) [PAGE 2]. Rockerbie’s contribution is specifically critiqued: he defines risk as the variance in yards gained or lost on a run or pass play [PAGE 2]. The present author correctly notes that because the yardage distribution is non-normal, higher variance is not axiomatically undesirable; given equal mean payoff, a risk-neutral or risk-seeking decision-maker should prefer the higher-variance play [PAGE 2]. This reframing—from variance to downside probability \(rf = \Pr(NEP < 0)\)—is the theoretical bridge between the older expected-points literature and the paper’s risk-factor conclusion.

The empirical genealogy runs through Baseball’s “expected runs” framework, explicitly cited as the analog for expected points [PAGE 2], and through the Football Outsiders play-by-play data infrastructure (2005–2008, 220,326 plays) [PAGE 2]. The weighted least squares specification with team-year fixed effects mirrors panel-data approaches in sports economics that attempt to isolate strategy from roster quality.

Multi-week traps. Because offense average NEP correlates with winning at \(r = 0.55\) and defense average NEP at \(r = -0.54\) [PAGE 2], a team that persistently runs “too much” accumulates negative NEP relative to a pass-leaning alternative. Over a multi-week season, this compounding produces a widening expected-win gap. However, the trap is dynamic: defensive coordinators observe offensive tendencies and adjust front coverage and blitz rates week-to-week, eroding the pass premium if it becomes too predictable. Conversely, offenses that over-run become easier to defend against the run, depressing run NEP further. This creates a recursive trap: run-heavy play calling lowers offensive NEP, which correlates with losing, which increases desperation and short-term conservative regression in subsequent weeks, further depressing NEP. Because the model uses team-year fixed effects, it cannot observe within-season personnel shocks (injuries, quarterback changes) that break stationarity and make the multi-week extrapolation of a static 2005–2008 coefficient vector unreliable.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: under high-stakes conditions (close score, late field position, trailing), coaches exhibit a documented habit of regressing to run-heavy play calling even when the data indicate passing yields higher mean NEP and lower downside risk in many down-distance contexts [PAGE 2]. The paper’s conclusion that run/pass balance is “irrational” [PAGE 2] assumes coaches minimize single-play downside probability and maximize mean NEP. In crisis states, however, the coach’s utility function likely includes clock consumption, turnover avoidance, and field-position punting—not captured by \(NEP_t\) alone. A coach behind by one score with two minutes left may rationally accept a lower mean NEP run play to keep the clock moving and prevent a stoppage, even if \(rf_{run} > rf_{pass}\) in that down-distance cell.

Counter-trap: if an offense exploits the passing premium systematically, the defensive best response is to prioritize pass coverage, generate pass rush, and increase interception probability. Because the paper’s \(rf\) and mean NEP estimates are historical averages over 2005–2008 [PAGE 2], they embed the defensive strategies of that era. A counter-trap occurs when the offense’s increased passing frequency changes the defensive posterior, reducing pass completion rates and elevating pass \(rf\) above the historical 0.57. The static model has no equilibrium adjustment term; it treats play-type payoffs as exogenous to the offense’s own frequency.

Clock: the estimation sample explicitly restricts to plays through the third quarter with score differential less than 11 points [PAGE 2]. This excises precisely the regime where clock management dominates expected points. In the fourth quarter with a narrow lead, a run play that gains only 2 yards may be superior to a pass play with higher NEP because it consumes time and reduces opponent possession count. The paper’s framework is therefore a single-play, clock-independent myopic model; it cannot adjudicate decisions where the state variable is time remaining rather than expected points.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The expected-points and risk-factor model is a statistical layer that assumes ceteris paribus physical conditions. It contains no covariates for weather, surface, temperature, wind, precipitation, player fatigue, or injury status [PAGE 2]. Three physical layers can veto its play-calling prescriptions:

1. Weather layer: wind speed and precipitation directly alter passing aerodynamics and ball security. The model’s passing premium (\(0.06\) mean NEP advantage, \(rf_{pass} = 0.57 < rf_{run} = 0.62\)) [PAGE 2] is estimated in an all-weather aggregate. In high-wind regimes, pass completion probability declines and interception/fumble \(rf\) rises, potentially reversing the sign of the passing premium. The model has no wind parameter, so its recommendation to pass more is vetoed whenever wind exceeds the threshold at which pass \(NEP\) falls below run \(NEP\).

2. Biomechanical layer: quarterback throwing mechanics and running back cutting ability degrade with snap count and fatigue. The model includes down and distance but not cumulative snap load or time-on-task. A fatigued quarterback in the fourth quarter (excluded from the passing premium sample [PAGE 2]) may have elevated interception probability, increasing \(rf_{pass}\) above \(rf_{run}\) despite the historical average. Biomechanical fatigue therefore vetoes the blanket preference for passing.

3. Surface and goal-line geometry layer: distance to goal is modeled as \(\ln(\text{Distance})\) [PAGE 2], which is singular at zero and poorly identified inside the 5-yard line. On a narrow field near the goal line, passing windows shrink and defensive pass coverage has less ground to defend, often raising pass \(rf\) relative to run \(rf\). The physical geometry of the end zone vetoes the overall \(rf\) ordering (\(0.62\) run vs. \(0.57\) pass) in short-yardage goal-line situations.

Verdict: the statistical layer is not veto-proof. Its prescriptions hold only within the physical regime implicitly assumed by the data (outdoor NFL games, average weather, healthy starters, non-goal-line field position, first three quarters, close scores). Any violation of those physical assumptions breaks the external validity of the \(rf\) and NEP comparisons.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with falsifiable predictions.

Scenario 1: High-wind outdoor game (sustained wind \(\ge 15\) mph) on natural grass, second quarter, score within one possession.
Veto mechanism: The weather layer suppresses passing efficiency; the historical passing premium is conditioned on all-weather averages and does not isolate high-wind subsets.
Verifiable check: Compare mean NEP and \(rf\) for pass versus run plays in games with sustained wind \(\ge 15\) mph using the same 2005–2008 Football Outsiders play-by-play data.
Prediction: In high-wind cells, \(\text{Mean NEP}_{pass} - \text{Mean NEP}_{run} \le 0\) and \(rf_{pass} > rf_{run}\), contradicting the paper’s overall pass-premium conclusion (\(+0.06\) points, \(rf_{pass} = 0.57 < rf_{run} = 0.62\)) [PAGE 2]. If the observed difference remains positive and significant, the weather veto is falsified for this domain.

Scenario 2: Late-game quarterback fatigue (fourth quarter, QB snap count \(>\) 65, score differential \(< 8\) points).
Veto mechanism: The paper excludes the fourth quarter from the passing premium analysis [PAGE 2] and includes no fatigue covariate; biomechanical degradation raises interception and sack probability for passes.
Verifiable check: Using play-by-play snap counts, compute pass \(rf\) and mean NEP for quarterbacks after their 65th snap versus before their 30th snap in close fourth-quarter games.
Prediction: \(rf_{pass}\) increases by at least 0.05 and mean NEP\(_{pass}\) decreases by at least 0.03 points in the high-fatigue state relative to the low-fatigue state, sufficient to overturn the historical pass advantage. If fatigue does not alter pass \(rf\) by more than 0.01, the biomechanical veto is not supported.

Scenario 3: Goal-line short yardage (offense inside the 5-yard line, 1st or 2nd down, distance to goal \(\le 4\) yards).
Veto mechanism: The natural log transform of distance to goal is singular near zero [PAGE 2]; reduced field width shrinks passing windows and raises defensive pass-stop probability.
Verifiable check: Estimate \(rf_{run}\) and \(rf_{pass}\) specifically for plays from inside the 5-yard line, comparing to the paper’s overall \(rf_{run} = 0.62\), \(rf_{pass} = 0.57\) [PAGE 2].
Prediction: \(rf_{run} < rf_{pass}\) inside the 5-yard line, reversing the overall ordering. If \(rf_{pass}\) remains below \(rf_{run}\) in this stratum, the geometry veto is falsified for goal-line situations.
</RLVR_COUNTERFACTUAL_VETOES>
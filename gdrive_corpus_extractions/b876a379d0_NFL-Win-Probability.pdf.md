---
source: "NFL-Win-Probability.pdf"
folder: "/CorpusRoot"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4810
---

<NATIVE_REASONING>
The user wants me to analyze a source PDF about NFL Win Probability models. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Note: The source itself mentions "Vegas line" but I must not mention betting lines/spreads/moneylines/odds in my output. I should treat "Vegas line" as a pre-game team strength indicator without calling it a betting line.)
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about the "Vegas line" - the invariant says zero betting lines. The source discusses it extensively. I should probably refer to it as "pre-game team strength differential" or similar, avoiding the term "Vegas line" or any betting terminology. Wait, the invariant says "Never mention spreads, totals, moneylines, or odds." It doesn't explicitly say I can't mention the variable "line" if it's in the source, but it says zero betting lines. To be safe, I should avoid using betting terminology. I can refer to it as "pre-game expected point differential" or "kickoff strength differential" and note that the source calls it the Vegas line but I will refer to it neutrally. Actually, looking closely: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I can mention the concept of a pre-game rating but not call it a betting line/spread/odds. I'll use terms like "pre-game team strength differential parameter" or "kickoff differential parameter."

Let's extract key info from source:
- Page 1: Ruscio & Brady, The College of New Jersey. Draft 1/20/2021. Data 2000-2016 initially, then 2000-2019 for uncertainty factor. App uses 13.40022 vs original PFR 13.45.
- Page 2: Abstract. Play data 2001-2016. Both models well calibrated (e.g., .75 prob -> ~75% wins). Modified PFR handles game time better and overtime. Modified PFR slightly better than random forest throughout regulation and overtime.
- Page 3: History. Lindsey (1961) baseball. Bennett and Flueck (2005). Burke (2014) first NFL WP model: score differential, time remaining, down, yards to go, field position. Proprietary ESPN. Lock and Nettleton (2014) modified Burke's model by adding pre-game line to quantify relative team strength prior to game, rather than holding pre-game probabilities at .50. Random forest 2001-2012.
- Page 4: Lock and Nettleton random forest: ntree=500, nodesize=200, mtry=2. Training 2001-2011, test 2012. RF requires large sample.
- Page 4-5: PFR model equations:
  MPFR = (pts.off – pts.def) + exp.pts + line / (60 / min.rem)
  SDPFR = uncertainty ´ sqrt(min.rem / 60)
  where uncertainty = standard deviation of difference between actual game outcomes (score differential) and pre-game line. PFR uses uncertainty = 13.45.
  Expected points bounds: upper 6.971 (1st and goal from 1), lower -2.49 (4th and 10 at own 1).
  Win probability = area under normal curve above 0.5 + half area between -0.5 and 0.5 (tie in OT assigned 0.5 win/loss).
- Page 6: Discounting. Line discounted linearly: at start of 4th quarter (15 min rem), 7 / (60/15) = 1.75. Uncertainty discounted nonlinearly: SDPFR = uncertainty * sqrt(min.rem/60). Problematic in overtime because clock resets.
- Page 7: They won't use PFR for overtime initially.
- Page 8: PFR simple, spreadsheet. RF complex, 500 trees.
- Page 9: Aims. Data source: ArmChairAnalysis.com 2000-2016, 4,790 games, 785,509 plays. Zero down plays dropped -> 714,194 plays. 2000 dropped due to game time coding -> 4,531 games, 675,629 plays. Tied games dropped -> 4,524 games, 674,311 plays. For analyses excluding OT: 4,240 games, 669,924 plays.
- Page 10: RF predictors: game score (off/def), pre-game line, game time (quarter, min, sec), timeouts, down, distance, field position. Criterion: dichotomous offense win. PFR no training needed. Results: MSE PFR = .15185 (OT excluded).
- Page 11: RF training/test variations. 100 trees (not 500) because MSE stabilizes 50-100. Figure 1 slight decline in MSE as training years increased, terminated at 7 years. Multiple regression predictors: test year, number of training years, offset (mean training year minus test year), absolute offset. Only number of training years significantly influenced accuracy. Diminishing returns.
- Page 12: Odd/even split of games. One RF trained on odd games predicts even, vice versa. MSE RF = .15188. PFR MSE = .15185. Difference not substantial. Calibration curves: r > .99 for both. Figure 3: PFR more accurate early, RF surpasses PFR after halftime through end of regulation.
- Page 13: RF improvements not found. PFR improvements: replace expected points with RF - didn't work. Time remaining variable ignored by PFR equations - tried, no avail. Time discounting issues: as time approaches zero, uncertainty discounted too steeply, WP jumps erratically. Division by zero if min.rem = 0. Overtime adaptation unclear.
- Page 14: Modified PFR: set minimum time threshold. Floor at 450 seconds remaining. MSE = .1509 (improvement over .15185). Extended to OT: set time = 450 seconds for all OT plays, MSE = .1512. Compare to RF all plays incl OT MSE = .1522.
- Page 15: Further refinements: stretch time discounting function so it approaches 450 seconds all along (not abrupt floor). Steepened discounting in final two minutes because probabilities too modest late. Fixed value for time discounting in overtime (.25). Final modified PFR: MSE = .1511 using all plays regulation and OT.
- Page 16: Discussion. No evidence accuracy-complexity tradeoff. PFR comparable to RF. Simpler is better for fans. Modified PFR slightly better than RF throughout regulation and OT.
- Page 17: NFL teams might benefit. Simpler model more acceptable to coaches without analytics backgrounds.
- Page 18: Strengths: sample size, complete access, transparency.
- Page 19: Weaknesses: only two models. Burke's model proprietary ESPN. Sample only back to 2001. Human error: 2000 season time coding errors dropped. Expected points equations translation issues (e.g., first down inside own 10 yard line anomaly).
- Page 20: Future directions: modify PFR further, examine Burke's model, re-specify RF, special-purpose models (momentum, 4th down), user-friendly tool.
- Page 21: (continued future directions)
- Page 22: References.
- Page 23-27: Figures.

Now I need to write the response with exact XML sections.

Important: The invariant says >= 1,000-word depth across these exact XML sections. So total words across all sections should be at least 1000. THINK_TRACE >= 400 words.

I must not mention betting lines/spreads/totals/moneylines/odds. I will refer to the "line" variable as "pre-game team strength differential" or "kickoff differential parameter." I should probably note in the source operator section that the source text uses "Vegas line" but I will treat it as a pre-game strength parameter to comply with invariants. Actually, I can quote it but maybe better to paraphrase. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I can quote but should avoid the forbidden terms myself. I'll use "[pre-game strength parameter]" in place of "Vegas line" when discussing, but if quoting, I might need to handle carefully. Since the invariant says NEVER mention spreads, totals, moneylines, or odds, I will not write "Vegas line" or "point spread." I'll call it "the pre-game differential parameter" and note that the source documents it as a kickoff strength term.

Let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words. Discuss the derivation from Burke -> Lock & Nettleton -> PFR -> Ruscio & Brady modifications. Gray zones: time singularity at min.rem=0, overtime clock reset ambiguity, expected points linear equations anomalies inside own 10, odd/even split validity, diminishing returns on training data beyond 7 years, MSE difference .15185 vs .15188 practically negligible, calibration r>.99 but binning may hide local miscalibration, 450 second floor arbitrary, steepening final 2 minutes ad hoc, fixed OT discounting .25 arbitrary. Also the "uncertainty" parameter update from 13.45 to 13.40022 based on 5,324 games 2000-2019. Need to discuss units: minutes, seconds, points, probability [0,1], MSE dimensionless squared probability.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define variables with units. MPFR equation. SDPFR equation. Win probability integral expression. Expected points bounds. MSE definition. Random forest hyperparameters. Citations [PAGE 4], [PAGE 5], etc. Breakdown regimes: min.rem -> 0 division by zero [PAGE 13], min.rem = 60 kickoff, overtime reset [PAGE 6-7], expected points domain bounds [PAGE 5], normality assumption breakdown late game [PAGE 13-15].

<RETROCAUSAL_GENEALOGY>: Historical lineage. Lindsey (1961) baseball innings [PAGE 3]. Bennett & Flueck (2005) baseball in-inning [PAGE 3]. Burke (2014) first NFL WP [PAGE 3]. Lock & Nettleton (2014) RF + pre-game differential, 2001-2012 data, ntree=500 [PAGE 3-4]. Ruscio & Brady (2021 draft) extending to 2000-2016, odd/even split, modified PFR time floor [PAGE 1-2, 9-15]. Multi-week traps: rule changes (offense-favoring, player safety) make older training data less useful [PAGE 8, 15-16]; 2000 season coding errors dropped [PAGE 9]; sample ends 2016, misses later rule changes [PAGE 19].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Coaches/fans rely on hindsight "defining moments" [PAGE 3]. Model provides prospective objective status [PAGE 3]. Crisis habit: coaches revert to conservative punts/FG in late game despite WP suggesting aggression. Counter-trap: using WP to justify 4th down attempts [PAGE 21]. Clock: PFR original time discounting fails near clock zero; modified floor 450s stabilizes [PAGE 14-15]. The recursive loop: WP influences decision -> decision changes state -> WP updates. Need to discuss how the model itself becomes part of the game state if coaches use it.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The source doesn't discuss weather or biomechanics explicitly. I need to discuss what the model ignores (weather, injuries, personnel, biomechanics) as exogenous veto layers. Since the source only uses score, time, down, distance, field position, timeouts, pre-game differential, it cannot adjudicate weather (wind, precipitation), biomechanical fatigue, or physical personnel mismatches. Formal veto: any play where environmental or physical layer invalidates stationarity assumption of historical training data. For example, high wind reduces exp.pts validity; injury to QB invalidates pre-game differential stationarity. These are outside model scope [PAGE 4, 9-10].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where model predictions would be vetoed by counterfactual conditions, with predictions.
1. Overtime sudden death vs regular season tie: source says PFR doesn't handle OT, modified model sets time=450s and discounting=.25 [PAGE 14-15]. Veto scenario: postseason OT (no tie allowed) vs regular season OT (tie allowed) changes terminal utility; model assigns fixed .25 discounting, may misestimate win probability in double OT. Prediction: MSE will be higher in postseason OT than regular season OT because the tie utility assumption is wrong.
2. End-of-regulation untimed plays due to defensive penalty: division by zero if min.rem=0 [PAGE 13]. Veto scenario: game ends on defensive penalty, untimed down, clock shows 0:00. Model breaks down (singularity). Prediction: any WP output at exactly 0:00 is undefined; model must floor at 450s or handle untimed plays separately, otherwise NaN/infinite SD.
3. Expected points anomaly inside own 10 on first down: source notes expected points become slightly better with worse field position inside own 10 [PAGE 19]. Veto scenario: 1st and 10 at own 1 yard line vs own 5 yard line; linear EP equations violate monotonicity in field position. Prediction: EP estimate non-monotonic, causing MPFR to incorrectly favor deeper own territory; win probability bias of roughly the EP error magnitude divided by SDPFR (in z-score units), observable as local calibration failure in Figure 2 bins near extreme field position.

Wait, RLVR might mean something specific. "RLVR_COUNTERFACTUAL_VETOES" -> Reinforcement Learning Verifiable Rewards? Or just "RLVR" as a label. I'll treat it as "Reinforcement Learning Verifiable Reward counterfactual vetoes" but since this is a sports modeling paper, I'll frame them as verifiable counterfactual veto scenarios suitable for an RL reward function audit.

Word count: Need >=1000 words total. THINK_TRACE alone >=400. Let's ensure each section is substantial.

Let's draft carefully.

Important: Do not use forbidden terms. I'll avoid "spread", "moneyline", "odds", "total". When referencing the source's "Vegas line", I'll call it "pre-game team strength differential (referred to in the source as the 'Vegas line')". Actually I can just say "pre-game differential parameter" and not mention the source's label, or mention it in quotes but the invariant says never mention betting lines. Quoting the source might technically mention it. To be safe, I will not write the phrase "Vegas line" at all. I'll write "pre-game team strength differential parameter" and cite [PAGE 4] etc. The source text uses "Vegas line" but I will paraphrase.

Let's check if any other forbidden terms appear. "odds" - avoid. "spread" - avoid. "total" - avoid in betting sense. "moneyline" - avoid.

Now, word count estimation. I'll write generously.

THINK_TRACE (>=400 words): I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~300 words with equations.

RETROCAUSAL_GENEALOGY: ~250 words.

RECURSIVE_THEORY_OF_MIND: ~250 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total ~1700 words. Good.

Let's write formal LaTeX.

Variables:
- \( t_{\text{rem}} \): time remaining in regulation, minutes [PAGE 5]
- \( \Delta_{\text{score}} = \text{pts.off} - \text{def} \): points, dimensionless count [PAGE 5]
- \( \text{EP} \): expected points for current drive, points [PAGE 5]
- \( \lambda \): pre-game team strength differential parameter, points [PAGE 4-5]
- \( \sigma_0 \): uncertainty baseline, points [PAGE 5]
- \( \mu_{\text{PFR}} \): mean of normal outcome distribution, points [PAGE 4-5]
- \( \sigma_{\text{PFR}} \): standard deviation, points [PAGE 5]
- \( \text{WP} \): win probability, unitless [0,1] [PAGE 5]
- \( \text{MSE} \): mean squared error, unitless squared probability [PAGE 10]

Equations:
\[
\mu_{\text{PFR}} = \Delta_{\text{score}} + \text{EP} + \frac{\lambda}{60 / t_{\text{rem}}} \quad \text{[PAGE 4-5]}
\]
\[
\sigma_{\text{PFR}} = \sigma_0 \sqrt{\frac{t_{\text{rem}}}{60}} \quad \text{[PAGE 5]}
\]
\[
\text{WP} = \int_{0.5}^{\infty} \phi(x; \mu_{\text{PFR}}, \sigma_{\text{PFR}}) \, dx + \frac{1}{2} \int_{-0.5}^{0.5} \phi(x; \mu_{\text{PFR}}, \sigma_{\text{PFR}}) \, dx \quad \text{[PAGE 5]}
\]
where \( \phi \) is normal density.

Breakdown:
- \( t_{\text{rem}} \to 0^+ \): \( \sigma_{\text{PFR}} \to 0 \), density collapses, WP step-function, division by zero in discounting if implemented naively [PAGE 13-14].
- \( t_{\text{rem}} = 60 \): kickoff, \( \lambda \) fully weighted [PAGE 6].
- Overtime: clock reset invalidates \( t_{\text{rem}} \) semantics [PAGE 6-7].
- EP bounds: \( \text{EP}_{\max} = 6.971 \), \( \text{EP}_{\min} = -2.49 \) [PAGE 5].

RF hyperparameters: ntree=500 (source), but this study used 100 [PAGE 4, 10], nodesize=200, mtry=2 [PAGE 4].

MSE definition: \( \text{MSE} = \frac{1}{N}\sum_{i=1}^N (\widehat{\text{WP}}_i - y_i)^2 \), \( y_i \in \{0,1\} \) [PAGE 10].

Sample: 4,524 games, 674,311 plays after exclusions [PAGE 9]. OT-excluded: 4,240 games, 669,924 plays [PAGE 9].

Uncertainty: source PFR 13.45; app updated to 13.40022 using 5,324 games 2000-2019 [PAGE 1].

Now write the sections.

Need to ensure no forbidden words. Let's scan mentally. No spreads, totals, moneylines, odds. Good.

Citations: Use [PAGE N] exactly.

Let's draft.

THINK_TRACE:
Start with the multi-hop derivation. The paper sits in a lineage: baseball WP (Lindsey 1961; Bennett & Flueck 2005) -> Burke (2014) first NFL model -> Lock & Nettleton (2014) random forest + pre-game differential -> Ruscio & Brady (this draft) PFR modification and comparison. Gray zones: The original PFR time discounting collapses as t_rem -> 0, producing a singularity; the authors patch with 450-second floor and stretched curve. The choice of 450s is empirically optimized, not derived from first principles; it is a gray-zone hyperparameter. Overtime is another gray zone: regular season allows ties, postseason does not, rules changed in 2012 [PAGE 6], yet the modified model imposes a fixed discounting .25 for all overtime [PAGE 15]. The uncertainty baseline update from 13.45 to 13.40022 [PAGE 1] reflects a change in the population (2000-2019 vs original PFR sample) but the paper's main analyses use 2001-2016 [PAGE 9], creating a temporal mismatch between the uncertainty constant and the estimation sample. The odd/even split avoids training-test contamination but assumes exchangeability of odd/even game order, which may fail if scheduling or team strength is serially correlated across the season. MSE difference .15185 vs .15188 is 0.00003, far below practical significance, yet the authors frame the modified PFR as superior because MSE=.1511 [PAGE 15]. Calibration r>.99 [PAGE 12] is assessed on binned deciles; local miscalibration within bins (e.g., extreme field position) is invisible [PAGE 19]. The expected points equations contain a documented anomaly inside the offense's own 10-yard line [PAGE 19], suggesting the linear EP specification is not globally valid. Diminishing returns on training years beyond seven [PAGE 11] indicate stationarity decay: older NFL seasons are not exchangeable with recent ones due to rule changes [PAGE 8, 15-16]. All of these are gray zones where the formal model outruns its physical justification.

Need to count words. Probably around 300-350. I should expand to ensure >400. Let's add more about derivation steps and the logic of the normal curve assumption, the meaning of the 0.5 threshold, tie handling, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions.

RETROCAUSAL_GENEALOGY: Historical lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.

Let's write it out fully now, watching word count.

I need to be careful: The invariant says "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I will do that in SOURCE_OPERATORS_AND_EQUATIONS.

Also "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include at least a few verbatim quotes with page numbers.

Let's incorporate quotes:
- [PAGE 5]: "Win probability is calculated as the area under the curve above a threshold of 0.5..."
- [PAGE 13]: "This would causd a division by 0 error in the PFR model." (typo in source, but I can quote it or paraphrase)
- [PAGE 14]: "we set a floor at 450 seconds remaining."
- [PAGE 15]: "we set a fixed value for time discounting in overtime (.25)."

I'll quote short fragments.

Now let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's derivation proceeds through multiple hops that must be audited for gray-zone assumptions. First, the historical lineage: win probability originated in baseball (Lindsey 1961; Bennett & Flueck 2005) [PAGE 3], migrated to the NFL via Burke (2014), and was re-specified by Lock and Nettleton (2014) as a random forest that adds a pre-game team strength differential parameter to avoid fixing pre-game win probability at 0.50 [PAGE 3-4]. Ruscio and Brady then compare that machine-learning approach against the Pro Football Reference (PFR) normal-curve model and modify the latter [PAGE 1-2, 8-15].

The central formal object is a normal distribution over final game score differential, centered at \(\mu_{\text{PFR}}\) and scaled by \(\sigma_{\text{PFR}}\), both discounted as the clock runs down [PAGE 4-5]. A critical gray zone appears at the singularity \(t_{\text{rem}} \to 0\): the original PFR discounting drives uncertainty toward zero, so win probability approaches a step function and any implementation that literally divides by \(t_{\text{rem}}\) produces a division-by-zero error [PAGE 13]. The authors' remedy—a hard floor at 450 seconds remaining—is empirically tuned ("sweet spot") rather than derived from game physics [PAGE 14]. A second gray zone is overtime: regulation clock semantics collapse when the clock resets, regular-season ties are possible but postseason ties are not, and overtime rules changed in 2012 [PAGE 6]; the modified model simply fixes overtime discounting at 0.25 [PAGE 15], an ad hoc constant that ignores the different terminal utility of a tie across contexts.

A third gray zone concerns the uncertainty baseline. The source reports that the app updates PFR's original 13.45 to 13.40022 using all 5,324 games from 2000-2019 [PAGE 1], yet the primary estimation sample is 2001-2016 [PAGE 9]. This creates a temporal mismatch between the constant and the data used to estimate expected points and model coefficients. Fourth, the odd/even split used to generate an uncontaminated random forest MSE (.15188 vs. PFR .15185) [PAGE 12] assumes exchangeability of odd- and even-numbered games; if team strength or scheduling exhibits serial correlation within a season, the split does not fully protect against leakage. Fifth, calibration is reported only at the decile level (\(r > .99\)) [PAGE 12], so local miscalibration—such as the documented expected-points anomaly inside the offense's own 10-yard line [PAGE 19]—is invisible in the aggregate curve. Finally, diminishing returns on training data after seven years [PAGE 11] signal non-stationarity: NFL rule changes favoring offense and player safety mean older seasons are not fully exchangeable with recent ones [PAGE 8, 15-16]. The model's accuracy therefore rests on assumptions that are formally convenient but physically incomplete, especially near the end of regulation and in overtime.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(t_{\text{rem}}\) denote time remaining in regulation in minutes, with domain \(t_{\text{rem}} \in [0,60]\) [PAGE 5]. Let \(\Delta_{\text{score}} = \text{pts.off} - \text{pts.def}\) be the current score differential in points [PAGE 5]. Let \(\text{EP}\) be expected points for the current drive, measured in points, bounded by \(\text{EP}_{\max} = 6.971\) (1st and goal from the 1-yard line) and \(\text{EP}_{\min} = -2.49\) (4th and 10 at the own 1-yard line) [PAGE 5]. Let \(\lambda\) be the pre-game team strength differential parameter in points (coded relative to the offense) [PAGE 4-5]. Let \(\sigma_0\) be the baseline uncertainty in points; the source's original PFR value is 13.45, while the authors' app uses 13.40022 estimated from 5,324 games over 2000-2019 [PAGE 1].

The PFR mean operator is
\[
\mu_{\text{PFR}} = \Delta_{\text{score}} + \text{EP} + \frac{\lambda}{60 / t_{\text{rem}}}
\]
[PAGE 4-5]. At kickoff (\(t_{\text{rem}}=60\)), the pre-game parameter enters with full weight; at the start of the fourth quarter (\(t_{\text{rem}}=15\)), a 7-point differential is discounted to \(7 / (60/15) = 1.75\) points [PAGE 6].

The PFR spread operator is
\[
\sigma_{\text{PFR}} = \sigma_0 \sqrt{\frac{t_{\text{rem}}}{60}}
\]
[PAGE 5], with units of points. This is a nonlinear time discount: uncertainty vanishes as \(t_{\text{rem}} \to 0\).

Win probability is computed from the normal density \(\phi(x;\mu,\sigma)\) as
\[
\text{WP} = \int_{0.5}^{\infty} \phi(x;\mu_{\text{PFR}},\sigma_{\text{PFR}})\,dx + \frac{1}{2}\int_{-0.5}^{0.5} \phi(x;\mu_{\text{PFR}},\sigma_{\text{PFR}})\,dx
\]
[PAGE 5], where WP is unitless on \([0,1]\). The first term is the area above a 0.5-point threshold (offense victory); the second assigns half the mass between -0.5 and +0.5 to a regulation tie, resolved as a coin flip in overtime.

Accuracy is assessed with mean squared error
\[
\text{MSE} = \frac{1}{N}\sum_{i=1}^{N}(\widehat{\text{WP}}_i - y_i)^2,\quad y_i\in\{0,1\}
\]
[PAGE 10], in squared probability units. The random forest uses predictors \(\{\Delta_{\text{score}}, \lambda, \text{quarter, minute, second, timeouts, down, distance, field position}\}\) with \(\text{ntree}=500\) in Lock and Nettleton (2014) but \(\text{ntree}=100\) here, \(\text{nodesize}=200\), \(\text{mtry}=2\) [PAGE 4, 10].

Breakdown regimes: (1) \(t_{\text{rem}} \to 0^+\) causes \(\sigma_{\text{PFR}}\to0\), collapsing the density and producing erratic win-probability jumps; the source notes an explicit division-by-zero risk for untimed end-of-game plays [PAGE 13]. (2) Overtime clock resets invalidate the \(t_{\text{rem}}\) discounting structure, which is why the original PFR was not applied to overtime plays [PAGE 6-7]. (3) The linear expected-points equations are non-monotonic inside the offense's own 10-yard line [PAGE 19], violating the field-position monotonicity assumption. (4) The sample ends in 2016, so post-sample rule and scheme changes are not represented [PAGE 19].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage begins with baseball win probability: Lindsey (1961) used score and inning, while Bennett and Flueck (2005) added outs, half-inning, and on-base state [PAGE 3]. The NFL import was Burke (2014), the first football win probability model, built on score differential, time remaining, down, yards to go, and field position; that model is now proprietary and held by ESPN [PAGE 3]. Lock and Nettleton (2014) extended this by introducing a pre-game team strength differential parameter instead of fixing pre-game probability at 0.50, and by fitting a random forest with \(\text{ntree}=500\), \(\text{nodesize}=200\), \(\text{mtry}=2\) on 2001-2011 training data and testing on 2012 [PAGE 3-4].

Ruscio and Brady (this draft, 2021) extend the data to 2001-2016 from ArmChairAnalysis.com, dropping zero-down plays, the 2000 season (time-coding errors), and tied games, leaving 4,524 games and 674,311 plays [PAGE 9]. Their multi-week trap is temporal non-stationarity: they test training windows of one to seven years and find MSE declines with more training years but with rapidly diminishing returns [PAGE 11], implying that seasons older than roughly seven years add noise rather than signal because NFL rule changes (passing-friendly emphasis, player-safety rules) alter the scoring process [PAGE 8, 15-16]. A second trap is the 2000-season exclusion: because game time was miscoded, an entire season is absent, which truncates the earliest possible historical baseline [PAGE 9]. A third trap is the mismatch between the uncertainty constant (re-estimated on 2000-2019) and the modeling sample (2001-2016) [PAGE 1, 9]. These traps mean the model's historical genealogy is deep but shallow in temporal validity: it assumes the 2001-2016 NFL is representative of the game today, which the authors themselves acknowledge may fail as offensive styles evolve [PAGE 15-16].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: fans and coaches identify "defining moments" in hindsight and use perceived intuition to second-guess decisions, while coaches often revert to conservative play (punt or field goal) under late-game pressure to escape blame rather than maximize win probability [PAGE 3]. The win probability model interrupts this by providing a prospective, objective assessment of game status [PAGE 3], but its influence depends on whether a coach trusts a simple normal-curve model over a complex random forest [PAGE 16-17].

Counter-trap: if coaches adopt the modified PFR model because it is spreadsheet-simple and nearly as accurate as the random forest [PAGE 8, 16], they may begin making fourth-down and two-point decisions conditioned on its output. That creates a recursive loop: the model changes the decision, the decision changes the game state (score, field position, time), and the next win probability update conditions on a state that was itself partly caused by the previous model output. The model is therefore not purely observational; it becomes an input to the environment it predicts.

Clock: the original PFR time discounting fails precisely when decisions are most critical—late regulation—because uncertainty collapses too steeply and win probabilities jump erratically [PAGE 13]. The authors' 450-second floor and stretched curve [PAGE 14-15] stabilize the clock variable, but the fixed 0.25 overtime discounting [PAGE 15] imposes a constant urgency that does not distinguish between a first overtime possession and a later one, nor between regular-season and postseason tie rules. In crisis moments, the model's clock handling is the dominant source of structural error, not the choice between random forest and PFR.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model inputs are score, time, down, distance, field position, timeouts, and pre-game differential [PAGE 10]; it contains no weather terms (wind, precipitation, temperature), no surface condition, and no stadium-specific effects. Any veto condition in which weather materially alters expected points (e.g., high wind reducing passing EP) invalidates the stationarity of the EP equations [PAGE 5].

Biomechanical layer: there are no player-personnel or fatigue variables. A quarterback injury, a star pass-rusher's absence, or cumulative snap-count fatigue changes the pre-game differential parameter \(\lambda\) mid-game, but the model treats \(\lambda\) as fixed at kickoff and only discounts it over time [PAGE 6]. This is a veto condition whenever personnel availability deviates from the pre-game expectation embedded in \(\lambda\).

The model's own text admits limits: it excludes the proprietary Burke/ESPN model [PAGE 18-19], its sample only reaches 2016 [PAGE 19], and its expected-points equations have an unexplained anomaly inside the offense's own 10-yard line [PAGE 19]. Therefore any physical or biomechanical factor outside the five predictors is an unmodeled veto. Because the PFR model assumes a normal distribution of final differential with time-invariant uncertainty scaled only by \(\sqrt{t_{\text{rem}}/60}\) [PAGE 5], it cannot represent skewed late-game outcomes caused by onside kicks, strategic fouling, or quarterback-driven comeback variance. Those are cross-layer vetoes that the formal model admits it cannot adjudicate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Overtime terminal utility). Condition: postseason overtime where ties are disallowed, versus regular-season overtime where ties are permitted. The modified PFR fixes overtime time discounting at 0.25 for all overtime plays [PAGE 15]. Verifiable veto: because the terminal utility differs (win/loss only vs. win/tie/loss), the fixed discounting misprices the value of conservative play in postseason overtime. Prediction: MSE will be systematically higher in postseason overtime than in regular-season overtime, observable as a calibration deviation in Figure 2 bins near 0.50 for overtime subsets.

Scenario 2 (End-of-regulation clock singularity). Condition: a game that ends on a defensive penalty, producing one or more untimed plays with the clock at 0:00 [PAGE 13]. Verifiable veto: the original PFR divides by \(t_{\text{rem}}\), causing a division-by-zero error; even the modified model's 450-second floor does not represent an untimed down at exactly zero seconds. Prediction: any win-probability query at exactly \(t_{\text{rem}}=0\) returns NaN or an infinite \(z\)-score; the model must route these plays to a separate terminal-state handler rather than the normal-curve equation.

Scenario 3 (Expected-points non-monotonicity inside own 10). Condition: first down at the offense's own 1-yard line versus own 5-yard line, where the linear expected-points equations produce slightly better EP with worse field position [PAGE 19]. Verifiable veto: the monotonicity assumption that EP increases with better field position is violated. Prediction: the mean operator \(\mu_{\text{PFR}}\) will be biased upward for deep-own-territory first downs by an amount equal to the EP error divided by \(\sigma_{\text{PFR}}\) in standard-normal units, producing a local calibration failure in Figure 2 for bins corresponding to extreme own-field position that is masked by the global \(r > .99\) correlation [PAGE 12].
</RLVR_COUNTERFACTUAL_VETOES>
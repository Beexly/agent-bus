---
source: "2013 Testing the Utility of the Pythagorean Expectation Formula on Division One CFB - Cary Caro, Ryan Machtmes.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 6
model: deepseek/deepseek-v4.1-flash-1017
words: 8103
---

<NATIVE_REASONING>
We need answer to user: They provided PDF source pages and ask? Actually prompt is GSE + GSI Frontier Reasoning Foundry with strict invariants and required XML sections. Need produce deep analysis (>=1000 words) of source. We must not mention betting lines odds spreads totals moneylines. Need cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX equations with units, assumptions, singularity/breakdown regimes. Need sections exact XML. Need zero toy equations. Need use source. We need likely analyze Pythagorean Expectation formula on CFB, Morey model, residual variance. Need provide equations. Need be careful: source text has formula missing due OCR? It says model presented as blank, and modified formula blank. Need infer standard Pythagorean Expectation: PWR = SO^2 / (SO^2 + SD^2)? For football, Morey exponent 2.37. Original PE formula: WinPct = RS^γ/(RS^γ + RA^γ). In source Page 3 says value 2 chosen. Page 1/2 mentions exponential ranges. We can state formula as standard from context, cite [PAGE 2] for Morey 2.37, [PAGE 3] for exponent 2 chosen. Need exact quotes. We can quote: "The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football." [PAGE 3]. "With a performance (residual variance) of order 10-3, the PE formula can be acknowledged to be an accurate forecasting method..." [PAGE 5? Actually page 4 or 5? Let's check: Page 4 ending says "With a performance (residual variance) of order 10-3..." Wait that's page 4? Let's map. Source page 4 includes DISCUSSION and text: "As shown ... both models appear to predict with an error of magnitude 10-3..." then later "With a performance (residual variance) of order 10-3, the PE formula can be acknowledged..." This is on page 4? Let's check page 4 content: Starts "The performance statistics..." Table 1, Table 2, DISCUSSION, "As shown..." then "The Pythagorean Expectation formula..." then "The PE forecast..." ending "indicator" at page 4. Actually the quote "With a performance (residual variance) of order 10-3..." appears on page 4? Let's re-read page 4: 
"The Pythagorean Expectation formula, as presented by Bill James, is a measure ... This study sought ... Based on the outcome ... With a performance (residual variance) of order 10-3, the PE formula can be acknowledged ..." Yes page 4. So cite [PAGE 4]. Need not overcite.

Need structure exactly XML sections. Need >=1000 words total. Need THINK_TRACE >=400 words. Need SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX units page citations breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions. Need maybe no betting. Avoid words "odds", "spread", "total", "moneyline". We can mention scoring totals? "total points scored" is allowed? Invariant says never mention spreads, totals, moneylines, or odds. "totals" maybe betting totals; but source uses total points. To be safe, avoid phrase "total" except maybe "sum" or "aggregate". But source quote includes "total offensive points" - if quoting verbatim maybe unavoidable? The invariant says never mention totals; but source quote may include. Better avoid quoting "total" if possible. Use "aggregate" instead. But exact verbatim quote may contain "total"; avoid selecting those. Need no betting lines. Fine.

Need answer with deep derivation. Need mention source is academic, not betting. We can frame as evaluation of retrospective model. Need formal equations:
Let \(S_O\) = season scoring offense (points per game? Actually source says scoring offense; not explicit per game. NCAA scoring offense usually points per game. Scoring defense points allowed per game. Need units: points/game (dimensionless ratio when same units). Define \(S_D\) = scoring defense (opponent points/game). Then \(PWR = S_O^\gamma/(S_O^\gamma+S_D^\gamma)\), \(\gamma=2\) in adapted PE; Morey \(\gamma=2.37\). If using raw season points, ratio same if games equal per team? Since each team plays same number? It cancels if both per-game or season aggregate with same number of games. Need note units: \(S_O, S_D\) in points per game; \(PWR\) dimensionless in [0,1]; \(\gamma\) dimensionless. Residual variance:
For year t, \(e_{i,t}=PWR_{i,t}-AWR_{i,t}\), \(AWR=W/(W+L)\). \(SSD_t=\sum_{i=1}^{N_t} e_{i,t}^2\), \(\hat\sigma_t^2=SSD_t/N_t\). Units: squared winning-ratio (dimensionless). Source Table 1 values: 2005 0.007820; 2006 0.008115; 2007 0.006819; 2008 0.006753; 2009 0.008699; 2010 0.008014; 2011 0.008709. Morey Table 2: 0.008218, 0.008468, 0.006219, 0.006872, 0.008389, 0.008290, 0.008621. Need maybe compare. Need note both models error ~10^-3. Need note PE lower variance in 2005, 2006, 2009, 2010, 2011? Let's compare:
2005 PE .007820 vs Morey .008218 -> PE lower
2006 .008115 vs .008468 -> PE lower
2007 .006819 vs .006219 -> Morey lower
2008 .006753 vs .006872 -> PE lower
2009 .008699 vs .008389 -> Morey lower
2010 .008014 vs .008290 -> PE lower
2011 .008709 vs .008621 -> Morey lower
So PE lower in 5 of 7? Yes 2005,06,08,10 = 4? Wait 2011 Morey lower. Count: PE lower 2005,2006,2008,2010 = 4; Morey lower 2007,2009,2011 = 3. So PE lower in 4/7. Need careful.

Need formal derivation from probability? Pythagorean expectation can be derived under independent scoring processes? Need rigorous. We can present a derivation: model team's score \(X\) and opponent's \(Y\) as independent random variables with means \(S_O\), \(S_D\). Win probability \(P(X>Y)\). If \(X,Y\) independent gamma-distributed with common shape? Actually Pythagorean formula arises if scores are independently Weibull? Need not invent. But source references Miller 2007 derivation. We can state standard derivation: Under independent gamma variables with shape \(k\) and rates \(\lambda_X,\lambda_Y\), if \(X\sim\Gamma(k,\lambda_X)\), \(Y\sim\Gamma(k,\lambda_Y)\), then \(P(X>Y)=\lambda_X^k/(\lambda_X^k+\lambda_Y^k)\)? Wait check: If X ~ Gamma(shape k, rate λ_X), Y ~ Gamma(shape k, rate λ_Y), then P(X>Y) = (λ_X/(λ_X+λ_Y))? Actually for exponential k=1, P(X>Y)=λ_X/(λ_X+λ_Y)? Let's derive: X~Exp(λ_X), Y~Exp(λ_Y), P(X>Y)=λ_X/(λ_X+λ_Y)? If X rate λ_X (mean 1/λ_X), P(X>Y)=∫ f_Y(y) P(X>y) dy = ∫ λ_Y e^{-λ_Y y} e^{-λ_X y} dy = λ_Y/(λ_X+λ_Y). Wait that's P(X>Y) = λ_Y/(λ_X+λ_Y), not λ_X. Hmm. For gamma with shape k, P(X>Y) = (λ_Y^k? )? Need not. The Pythagorean formula in baseball derives under independence of runs scored/allowed with certain distributions? Actually if X and Y are independent exponential with means x,y, P(X>Y) = y/(x+y)? That gives opponent mean over sum, not classic. But if X,Y are independent Weibull? Let's derive general: If X and Y independent gamma with same shape k but rates λ_X (mean k/λ_X) and λ_Y, then P(X>Y) = sum? Beta prime. I recall P(X>Y) = (λ_Y/λ_X)^k? Need compute. Let X~Gamma(k, rate λ_X), Y~Gamma(k, rate λ_Y). Then X/(X+Y) ~ Beta(k,k) independent? Actually if X,Y same shape but different rates, X/(X+Y) not Beta. There is formula: P(X>Y) = Σ_{j=0}^{k-1} (λ_Y/(λ_X+λ_Y))^j? Hmm.

Classic Pythagorean formula \(W = RS^2/(RS^2+RA^2)\) can be derived if run scoring and run allowance are independent exponential? Wait if X~Exp(rate 1/RS) mean RS, Y~Exp(rate 1/RA) mean RA, P(X>Y)=RA/(RS+RA) (as above), not squares. If X,Y are independent Weibull with shape 2? For Weibull shape k, P(X>Y) = μ_X^k/(μ_X^k+μ_Y^k)? Let's check. Weibull with shape k and scale λ (mean λ Γ(1+1/k)). If X~Weibull(k, λ_X), Y~Weibull(k, λ_Y), then P(X>Y)=λ_X^k/(λ_X^k+λ_Y^k)? Since transform U=(X/λ_X)^k ~ Exp(1), V=(Y/λ_Y)^k ~ Exp(1). X>Y iff U^{1/k}λ_X > V^{1/k}λ_Y iff U/λ_X^k >? Wait X = λ_X U^{1/k}; Y=λ_Y V^{1/k}. X>Y iff U^{1/k} λ_X > V^{1/k} λ_Y iff U > (λ_Y/λ_X)^k V. P(U > c V) = 1/(1+c) for independent Exp(1)? If U,V Exp(1), P(U>cV)=1/(1+c). So P = 1/(1+(λ_Y/λ_X)^k) = λ_X^k/(λ_X^k+λ_Y^k). Yes. So Pythagorean formula with exponent k corresponds to Weibull-distributed scores with common shape k and scale proportional to mean. But source doesn't state. We can present as a formal model assumption, not source claim. Need be careful not invent? It's a known derivation. We can say "A standard structural derivation (not claimed as empirical proof by Caro & Machtmes)..." The prompt asks formal LaTeX equations with assumptions and breakdown. We can derive under independent Weibull scoring distributions. Good.

Need mention source's adapted formula likely \(PWR = SO^2/(SO^2+SD^2)\). Need cite page 3 for exponent 2. Morey \(PWR = SO^{2.37}/(SO^{2.37}+SD^{2.37})\). Source says Morey optimal exponential value 2.37 [PAGE 2]. Need exact quote: "Morey applied the PE formula to professional football and found that the optimal exponential value was 2.37 (Morey, 2003)." [PAGE 2]. Also "The value of 2 for the exponent was chosen for simplicity..." [PAGE 3]. Good.

Need discuss singularity/breakdown regimes: \(S_O, S_D \ge 0\). Formula undefined if both zero? \(0^γ/(0^γ+0^γ)=0/0\). If \(S_D=0, S_O>0\) => PWR=1. If \(S_O=0,S_D>0\) => 0. If γ=0? Not used. If scores negative impossible. If same units, ratio invariant to scaling. Breakdown when scoring offense and defense not independent, schedule strength omitted, overtime rules, pace/tempo, garbage time, defensive/ST scoring, missing games, ties? Source says games are wins plus losses, no ties? College football can have ties historically but 2005-2011 overtime no ties. Need mention. Model retrospective not prospective [PAGE 6]. "PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." [PAGE 6]. Need quote exact. That's important. Also "a measure that simply examines total points scored and total points allowed, while accurate, does not help to inform coaching decisions, recruiting, game-play, or other measures of the game." [PAGE 6] Contains "total" - avoid? Could quote but invariant says no totals. Maybe we can paraphrase without quote. But need verbatim quotes. We can use other quotes. Need exact [PAGE N] markers and verbatim quotes. Use quotes that don't contain betting terms. "The PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." [PAGE 6]. This has no betting. "With a performance (residual variance) of order 10-3, the PE formula can be acknowledged to be an accurate forecasting method for coaches and athletic directors to use when evaluating the performance of their football programs." [PAGE 4] contains forecasting. Good. "The relationship between scoring offense, scoring defense, and winning is not a new one." [PAGE 5]. "A total of 835 teams, across seven years, were included in the study." [PAGE 3] contains total but not betting. Maybe avoid. Use "There was an expansion from 118 teams in 2005 to 119 in 2006." [PAGE 3]. Good. "both models appear to predict with an error of magnitude 10-3 the expected winning performance of a given team for a given season." [PAGE 4]. Good.

Need THINK_TRACE >=400 words. It says deep multi-hop derivation & gray-zone audit. We can write 450-600 words. Need total >=1000 words. We should produce maybe 2000-2500 words. Need not too verbose but enough. Need satisfy exact XML sections. Must include only those sections? It says ">= 1,000-WORD DEPTH across these exact XML sections:" So include all exact tags. We can include no preamble or minimal. We should not use markdown? XML tags. Need ensure content inside tags. Need maybe include paragraphs. Need not mention betting. Avoid "odds" etc. Use "score distributions", "win probability".

Need include formal LaTeX. The platform may render? Use LaTeX delimiters. Need equations with units. Need mention assumptions. Need exact singularity/breakdown regimes.

Need "Source operators and equations" formal LaTeX, units, page citations, breakdown. Include table? Could include table of residual variances. Need cite [PAGE 4] for Table 1 and Table 2. Use LaTeX table maybe. Need note values. Need ensure table not too wide. We can include Markdown table. But XML section can include. Need exact [PAGE 4] markers. Good.

Need "Retrocausal genealogy" historical/scientific lineage & multi-week traps. Discuss Bill James, sabermetrics, Moneyball, Morey, Oliver, Cochran, Dayaratna/Miller, Vogel. Multi-week traps: season-level aggregation hides weekly variance, schedule strength, injuries, weather, overtime, pace, garbage time, coaching changes, transfer/recruiting, non-conference mismatches, retrospective vs prospective. "multi-week traps" likely means reasoning traps over multiple weeks: autocorrelation, regression to mean, schedule effects, sample expansion 118 to 120. Need discuss.

Need "Recursive theory of mind" crisis habit regression vs counter-trap vs clock. This is odd. Need interpret: crisis habit regression (coaches revert to conservative habits under pressure), counter-trap (opponent anticipates and exploits), clock (game clock/2-minute, overtime). Need relate to source: source mentions fourth-down decisions, clock management, overtime rules. Need formal? We can discuss as behavioral game-theoretic recursion: coach's decision under clock pressure, opponent's model of coach's habit, counter-trap. Need avoid betting. Use source quotes: Page 2 discusses clock stoppages and overtime. Page 5 discusses "fourth down attempts, turnovers, and clock management" and "maximizing possessions". Need quote. "Theoretically, this could then help coaches review decisions made throughout the course of the season, specific to scoring opportunities, fourth down attempts, turnovers, and clock management." [PAGE 5]. Good. "During the course of a season, a coach can input their current scoring totals and make decisions about the total number of points that are needed in order to achieve a specific winning percentage." [PAGE 5] contains total. Avoid. Use other.

Need "Cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need discuss physical and biomechanical constraints: fatigue, injury, line play, contact, recovery, weather (wind, rain, temperature) affecting scoring and variance; source doesn't model these. Need "veto proof" means if any layer would veto inference. Need formal: model assumes exchangeability of scoring events; physical layer violates independence. Weather affects kicking and passing; biomechanical injury reduces effective \(S_O\) and increases \(S_D\). We can define veto conditions: if residual variance dominated by schedule/weather/injury, model invalid for causal coaching inference. Need cite source limitations? Source says "bad luck, a tough schedule, or a myriad of other variables" [PAGE 5]. Quote exact: "This could be due to poor in-game decisions, bad luck, a tough schedule, or a myriad of other variables." [PAGE 5]. Good. Need mention weather not in source; cross-layer adjudication says no weather variable, so weather is unmodeled confound. Physical/biomechanical veto: no play-level data; scoring offense/defense aggregate. Need "proof" maybe define necessary condition: if residuals correlate with unmodeled layer, then \(\mathbb{E}[e|\text{weather}]\neq 0\), violating unbiased estimator assumption. Source assumes "PWR an unbiased estimator of the actual winning percentage" [PAGE 3]. Quote: "the PWR an unbiased estimator of the actual winning percentage for a team" [PAGE 3]. Good. Then any cross-layer systematic effect vetoes. Nice.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? We need create 3 scenarios that can be verified with data, predictions. Need not betting. Use source data. Each scenario with counterfactual veto: e.g., (1) Recompute exponent by minimizing residual variance across 2005-2011; if optimal γ differs materially from 2 and lowers variance, then claim that γ=2 is accurate is vetoed. Prediction: γ* between 2 and 2.37 maybe; if cross-validated, out-of-sample variance not improve? Need be precise. (2) Schedule-strength adjustment: reconstruct with opponent-adjusted SO/SD; if residual variance drops by X or rankings change, then raw PE not sufficient. Prediction: variance reduction ≥ some threshold. (3) Overtime/clock rule audit: remove overtime games or model per-regulation score; if residual variance or sign of residuals changes, then rule heterogeneity vetoes. Need verifiable: use NCAA data, compute. Could also include weather/injury. Need exactly 3 scenarios. Need predictions. Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but in this context likely a rubric term. We can phrase "RLVR-style counterfactual vetoes" and make them verifiable. Need no betting.

Need include exact equations and units. Let's craft full answer.

Need not mention "spreads, totals, moneylines, odds". Avoid word "total" entirely? The source has "total" in quotes. We can avoid quotes containing total. But in equations "sum of squared deviations" not total. In table header "Sum of Deviation2" okay. Need use "aggregate". But maybe "total" in phrase "total variance" from source. Avoid. Use "residual variance". The invariant says never mention spreads, totals, moneylines, or odds. The word "totals" might be flagged even in "sum of squared deviations"? No. But "total points" could be interpreted as betting total. Avoid. Use "aggregate points" or "scoring output". In equations, \(S_O\) "points per game". Need not say "total". Good.

Need mention "Pythagorean Expectation Formula" not betting. Fine.

Need exact XML sections. The response should start with <THINK_TRACE> maybe. We need include all sections. Could include newlines.

Need ensure THINK_TRACE >=400 words. Let's write around 550 words. Need multi-hop derivation: source claims PE fit; but source actually calls it "accurate forecasting" while later says retrospective not forecasting. Need audit contradiction: Page 4 says "accurate forecasting method" but Page 6 says "strictly a retrospective model and cannot forecast future performance". This is a gray-zone contradiction. Need highlight. Multi-hop: derive from independent scoring distributions; residual variance definition; compare PE vs Morey; note source's "unbiased" assumption; note sample is population not random; source treats population variance but assumes Normal; no cross-validation; no schedule adjustment; model can over/under identify coaches but causal attribution invalid; USF example. Need mention "residual analysis" and "order 10-3". Need note residual variance values are squared winning ratio; RMSE = sqrt(~0.008) ≈ 0.089. Good. Need compute: sqrt(0.00675)=0.082; sqrt(0.00871)=0.093. So RMSE ~8-9 percentage points in win ratio. That's a nice derivation. Need mention not "odds". Good. Need note PWR-AWR sign. If PWR > AWR underachieved per source; if PWR < AWR overachieved. Need quote: "If the predicted PE winning percentage is less than the actual winning percentage, a coach can come to understand if his team has 'overachieved'..." [PAGE 4]. Good. Need ensure exact quote.

Let's outline.

<THINK_TRACE>
- Start with source's central claim: adapted PE with γ=2 predicts CFB winning ratio with residual variance ~10^-3; Morey γ=2.37 similar. Page 4 quote.
- Derivation: \(S_O, S_D\) points/game; PWR formula. Under independent Weibull shape γ, win probability equals formula. Assumptions: independence, identical shape, scale proportional to mean, no ties, exchangeable games. Not tested in source. 
- Residual: e = PWR - AWR; SSD; variance. Table values. RMSE ~0.082-0.093. This means typical absolute error ~0.08-0.09 in win ratio (if Gaussian, MAE ~0.8*RMSE ~0.07). Need not overdo.
- Multi-hop: Compare PE vs Morey; PE lower in 4 of 7 years; differences small; no significance test; no cross-validation; sample is all D1 teams but not all seasons; no schedule adjustment; no weather/injury; no play-level. 
- Gray-zone audit: source calls PE "accurate forecasting" on page 4 but "strictly retrospective" page 6. The word "forecasting" is used loosely. The model cannot forecast future performance; it is a retrospective expectation. This is key. 
- Source's "unbiased" assumption: quote page 3. If biased by schedule/weather, residual variance not pure noise. Need mention.
- USF example: 2010 predicted 0.619 actual 0.615; 2011 predicted 0.647 actual 0.412; 2012 predicted 0.340 actual 0.250. This shows underperformance; but could be schedule/injury. 
- Need no betting. 
</THINK_TRACE>

Need maybe 500 words.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define variables. Equation. Units.
- Morey equation. 
- Residual variance. 
- Table.
- Assumptions and breakdown regimes. 
- Page citations and quotes. 
Need exact quotes:
"Morey applied the PE formula to professional football and found that the optimal exponential value was 2.37 (Morey, 2003)." [PAGE 2]
"The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football." [PAGE 3]
"both models appear to predict with an error of magnitude 10-3 the expected winning performance of a given team for a given season." [PAGE 4]
"the PWR an unbiased estimator of the actual winning percentage for a team" [PAGE 3]
"With a performance (residual variance) of order 10-3, the PE formula can be acknowledged to be an accurate forecasting method..." [PAGE 4]
"The PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." [PAGE 6]
Need maybe "A total of 835 teams..." avoid total. Use "There was an expansion from 118 teams in 2005 to 119 in 2006." [PAGE 3]. Good.

Singularity regimes:
1. \(S_O=S_D=0\): 0/0 undefined. In practice not.
2. \(γ=0\): \(S^0=1\) for \(S>0\), PWR=1/2 regardless; but not used.
3. \(S_O,S_D\) measured with different denominators (games played, opponent strength): ratio not invariant; if \(S_O\) per game and \(S_D\) aggregate, units mismatch. Need assume same units.
4. Perfect collinearity with schedule: if \(S_O\) and \(S_D\) both scale by schedule, PWR invariant to common scaling but not to asymmetric schedule effects. 
5. Ties/overtime: AWR defined W/(W+L) ignores ties; source says wins plus losses. Overtime scoring counts in SO/SD but may be non-exchangeable; can bias.
6. Small N/season: population variance but Normal assumption; no sampling distribution.

Need table. Use LaTeX table? Maybe:
| Year | PE residual variance | Morey residual variance |
...
Need cite [PAGE 4]. Good.

<RETROCAUSAL_GENEALOGY>
- Bill James 1980s; sabermetrics; Moneyball; Oakland A's; Hakes & Sauer; Morey 2003; Oliver 2004; Cochran; Dayaratna/Miller; Vogel Nebraska; Caro & Machtmes. 
- Scientific lineage: Pythagorean formula as phenomenological invariant; exponent varies by sport due scoring process; baseball 1.82-2; football 2.37; basketball 14/13.91; hockey 1.927 or >2. 
- Multi-week traps: weekly aggregation, schedule strength, conference play, non-conference, injuries, weather, overtime, pace. 
- Retro-causal: using end-of-season aggregates to explain wins, then treating as forecast. It is reverse inference. The formula is an identity-like fit; not causal. 
- Quote: "The Pythagorean Expectation Formula was the impetus for the statistical revolution of Major League Baseball." [PAGE 1]. "Vogel (2012) begins to examine the use of the PE formula to college football." [PAGE 2]. Good.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under clock pressure, coaches revert to conservative habits (punt, field goal) even when model suggests maximizing possessions. Source page 5: "The importance of maximizing possessions is illustrated using the PE model." [PAGE 5]. "decisions to go or to punt on fourth down, and to take field goal points instead of a fourth-down opportunity all factor into the points scored category." [PAGE 5]. 
- Counter-trap: opponent anticipates conservative habit, defends accordingly; recursive: coach models opponent's model; if coach knows opponent expects punt, may go for it; but if opponent expects counter, etc. This is game-theoretic. Need maybe formal: decision threshold \(p^*\) where go for it if expected win probability gain > 0; but no fake ratios? We can state expected utility in probability, not betting. Use \( \Delta u = p_{\text{convert}} u_{\text{success}} + (1-p) u_{\text{fail}} - u_{\text{punt}}\). Units probability. But "zero toy equations" says never invent fake ratios. This is a legitimate expected utility, not fake. But maybe avoid too much. We can state qualitative. Need "clock" as third layer: game clock, overtime rules. Source page 2 describes overtime differences. Quote: "In college football, each team receives one possession to begin overtime play." [PAGE 2]. Good. "clock stoppages after first downs do not occur in the NFL" [PAGE 2]. Need discuss. 
- "Crisis habit regression vs counter-trap vs clock" maybe frame as three competing explanations for residual: coach habit, opponent counter-strategy, clock/rule effects. The model cannot distinguish them because it aggregates season. Need mention.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: contact, fatigue, injury, line play, recovery; scoring distributions not independent. 
- Biomechanical: kicking mechanics, QB arm, weather. 
- Weather: wind/rain/temperature; affects passing/kicking; unmodeled. 
- Veto proof: If residual \(e\) has nonzero conditional mean given weather/injury/schedule, then the source's unbiasedness assumption fails. Source says "PWR an unbiased estimator..." [PAGE 3]. Need cite. "bad luck, a tough schedule, or a myriad of other variables" [PAGE 5]. 
- Define veto conditions: \( \mathbb{E}[e_{i,t}\mid W_{i,t}, I_{i,t}, S_{i,t}] \neq 0 \) where W weather, I injury, S schedule. If so, variance \( \hat\sigma^2 \) conflates model error with omitted layers; cannot attribute over/underperformance to coaching. Prediction: after adding weather/injury/schedule, residual variance should decrease; if not, model robust. Need maybe include in RLVR.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios. Each with "Veto if..." and "Prediction". Make verifiable with source data. Use no betting. 
1. Exponent re-estimation and cross-validation. Compute γ* by minimizing \(\sum_t SSD_t(γ)\) over 2005-2011. If γ* differs from 2 by >0.2 and out-of-sample variance reduces by >10%, then the claim γ=2 is accurate is vetoed. Prediction: γ* likely in [2.0,2.37]; in-sample reduction modest; out-of-sample maybe no robust gain due small years. 
2. Schedule-strength adjustment. Recompute SO/SD opponent-adjusted; if residual variance drops by ≥10% or sign of USF residual changes, raw PE's coaching attribution vetoed. Prediction: schedule adjustment reduces variance, especially for USF 2011/2012; but not eliminate. 
3. Overtime/clock/rule heterogeneity. Recompute excluding overtime games or using regulation only; if residual variance changes materially or residuals cluster in OT/clock-affected games, then rules heterogeneity vetoes. Prediction: small effect on aggregate variance but concentrated for teams with many OT games; PE vs Morey ranking may flip. 
Maybe 3 scenarios need "verifiable RLVR" - use exact metrics and thresholds. Good.

Need word count. Let's draft with around 2500 words. Need ensure ">=1000-word depth" likely total. We can be concise but deep. Need no betting terms. Check for forbidden words: "odds", "spread", "totals", "moneyline". Avoid. I might use "total" in "total variance" - avoid. Use "aggregate". Avoid "over/under" because source uses "over/under achieving" but that's not betting? It says zero betting lines; "over/under" might be flagged. Avoid. Use "above/below expectation". Source uses "over- or under-performance". We can use "overachievement" and "underachievement" but maybe "over/under" could imply betting. Avoid "over/under" slash. Use "above-expectation" and "below-expectation". Good.

Need not mention "spread" as in "distribution spread"? Avoid. Use "dispersion". Need not mention "total" in equations? "sum of squared deviations" okay. "aggregate" okay.

Need exact quote "total" if source? Avoid quotes with "total". The quote "both models appear to predict with an error of magnitude 10-3..." no total. "The PE model is strictly..." no total. "The value of 2..." no total. "Morey applied..." no total. "the PWR an unbiased..." no total. "bad luck, a tough schedule..." no total. "The importance of maximizing possessions..." no total. "In college football, each team receives one possession..." no total. Good.

Need mention "winning percentage" vs "winning ratio" source uses both. Fine.

Need maybe include "Division I" not "Division One"? Fine.

Need ensure source operators and equations section has "formal LaTeX, units, page citations, breakdown." We'll include.

Potential issue: The formula in source is missing; we infer. Need be transparent: "The OCR text omits the rendered equation; context and standard PE identify the operative model as..." This is important. Cite pages. Use "OCR text omits" maybe. Good. It demonstrates careful reading. Need not overdo.

Need mention "Morey model" equation. Source says Morey exponent 2.37. Good.

Need mention residual variance table values. Use exact.

Need maybe compute RMSE: \(\sqrt{0.006753}=0.08218\), \(\sqrt{0.008709}=0.09332\). For Morey min sqrt(0.006219)=0.07886, max sqrt(0.008621)=0.09285. Good. This is derived, not source. Units: win-ratio fraction. Good.

Need mention "population variance" not "sample variance"; source uses N denominator. Good.

Need "assumptions: Normal distribution of deviations" source says assumed Normal. Good.

Need "exact singularity/breakdown regimes" include:
- \(S_O=S_D=0\) undefined; \(S_O=S_D>0\) gives 1/2; \(S_D\to 0\) with \(S_O>0\) gives 1; \(S_O\to0\) gives 0.
- \(\gamma \to 0\) yields 1/2 (for positive scores) and loses discrimination.
- \(\gamma \to \infty\): if \(S_O>S_D\), PWR→1; if \(S_O<S_D\), →0; if equal, 1/2; step function, no calibration.
- If units not same or games played unequal, ratio invalid.
- If scoring processes dependent (same game pace, opponent), Weibull independence fails; formula is phenomenological not exact probability.
- If ties allowed, AWR denominator W+L ignores ties; bias.
- If overtime scoring included, scoring distributions not exchangeable with regulation.
- If schedule strength unmodeled, \(S_O,S_D\) biased.

Need "multi-week traps" in genealogy: maybe "weekly recency trap", "regression to mean", "survivorship", "conference strength", "weather clusters", "injury clusters", "overtime small sample", "coaching change", "recruiting". Good.

Need "Recursive theory of mind" maybe use "crisis habit regression" as a term. Need define: under crisis, coach reverts to prior conservative policy; counter-trap: opponent models that; clock: time pressure changes optimal policy. We can relate to source's "fourth down attempts, turnovers, clock management". Good.

Need "Cross-layer veto adjudication" maybe include "proof" as a conditional theorem:
Let \(M\) be model residual. If there exists a measurable layer variable \(L\) such that \(\mathbb{E}[e|L]\neq0\), then \(\mathbb{E}[e]=0\) can still hold but \(\hat\sigma^2\) is not a pure model-error variance. The source's unbiasedness assumption is insufficient for causal attribution. A physical/weather veto is triggered if adding L significantly reduces \(\hat\sigma^2\) or changes sign of e for teams. This is formal enough.

Need "RLVR counterfactual vetoes" maybe "Reinforcement Learning from Verifiable Rewards" not necessary. Use "RLVR-style". The prompt says "RLVR_COUNTERFACTUAL_VETOES" exact tag. We can just write.

Need final answer should only XML sections. Let's craft.

Need count words roughly. Let's write detailed.

Potential concern: "zero betting lines" - I will not mention "line" at all. Avoid "line of scrimmage" even source has it? Not needed. Avoid "spread". Good.

Need maybe "game clock" is okay. "clock" not betting. "scoring offense/defense" okay. "winning ratio" okay. "points per game" okay.

Need not use "odds" etc. Good.

Let's produce final. Ensure XML tags exact and all closing. Need no extra preamble. Use LaTeX. Let's draft.

Need maybe include "PAGE N" markers exact. Use [PAGE 1], [PAGE 2] etc. Many.

Need ensure quotes are verbatim. Check quotes:
- "The Pythagorean Expectation Formula was the impetus for the statistical revolution of Major League Baseball." Page 1 yes.
- "Morey applied the PE formula to professional football and found that the optimal exponential value was 2.37 (Morey, 2003)." Page 2 yes.
- "Vogel (2012) begins to examine the use of the PE formula to college football." Page 2 yes.
- "The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football." Page 3 yes.
- "the PWR an unbiased estimator of the actual winning percentage for a team" Page 3: exact phrase "assume the PWR an unbiased estimator of the actual winning percentage for a team." We can quote fragment. Good.
- "both models appear to predict with an error of magnitude 10-3 the expected winning performance of a given team for a given season." Page 4 yes.
- "With a performance (residual variance) of order 10-3, the PE formula can be acknowledged to be an accurate forecasting method for coaches and athletic directors to use when evaluating the performance of their football programs." Page 4 yes.
- "If the predicted PE winning percentage is less than the actual winning percentage, a coach can come to understand if his team has 'overachieved' given the expectations of the PE model." Page 4 yes. Contains "overachieved" not betting. Good.
- "The PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited." Page 6 yes.
- "The importance of maximizing possessions is illustrated using the PE model." Page 5 yes.
- "decisions to go or to punt on fourth down, and to take field goal points instead of a fourth-down opportunity all factor into the points scored category." Page 5 yes. Need exact: "decisions to go or to punt on fourth down, and to take field goal points instead of a fourth-down opportunity all factor into the points scored category." Yes.
- "In college football, each team receives one possession to begin overtime play." Page 2 yes.
- "clock stoppages after first downs do not occur in the NFL" Page 2 exact: "clock stoppages after first downs do not occur in the NFL, which potentially shortens the game..." Good.
- "This could be due to poor in-game decisions, bad luck, a tough schedule, or a myriad of other variables." Page 5 yes.
- "The relationship between scoring offense, scoring defense, and winning is not a new one." Page 5 yes.
- "There was an expansion from 118 teams in 2005 to 119 in 2006." Page 3 yes? Source: "There was an expansion from 118 teams in 2005 to 119 in 2006." Yes.
- "A total of 835 teams..." avoid.
- "The PE forecast is important for football coaches as they reflect upon the season that was just completed." Page 4? Actually page 4 ending: "The PE forecast is important for football coaches as they reflect upon the season that was just completed." Yes. Good.

Need maybe "retrospective" vs "forecast" contradiction quote. Good.

Need table values. Use [PAGE 4]. Good.

Need word count. Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central empirical claim is that an adapted Pythagorean Expectation model, with \(S_O\) as scoring offense and \(S_D\) as scoring defense, gives a season-level expected winning ratio whose residual variance is on the order of \(10^{-3}\) for NCAA Division I football from 2005–2011. The paper states that “both models appear to predict with an error of magnitude 10-3 the expected winning performance of a given team for a given season” [PAGE 4], and then concludes that “With a performance (residual variance) of order 10-3, the PE formula can be acknowledged to be an accurate forecasting method for coaches and athletic directors to use when evaluating the performance of their football programs” [PAGE 4]. The gray-zone problem is immediate: the same paper later says, “The PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited” [PAGE 6]. So the word “forecasting” is being used loosely: the model produces a retrospective expectation from aggregate season scoring, not a prospective predictive model for future games. That distinction matters because the residual variance is a fit statistic on end-of-season aggregates, not a validated out-of-sample forecast error.

The formal derivation path is also important. The OCR text omits the rendered equation, but the source identifies the operative structure through its exponent choices: Morey’s football application used \(2.37\), and the authors choose \(2\) for simplicity. They write, “The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football” [PAGE 3]. A standard probabilistic interpretation of the Pythagorean form is that if team and opponent scores are independent Weibull-distributed variables with a common shape parameter \(\gamma\) and scale proportional to mean scoring rates, then the win probability reduces to \(S_O^\gamma/(S_O^\gamma+S_D^\gamma)\). That derivation is not tested by Caro and Machtmes; it is a structural assumption. The paper does, however, explicitly assume unbiasedness: it says it seemed reasonable “to assume the PWR an unbiased estimator of the actual winning percentage for a team” [PAGE 3]. That assumption is the hinge. If schedule strength, weather, injuries, overtime, or coaching strategy systematically affect scoring offense or defense, then the residual is not pure noise, and the residual variance is not a clean measure of model accuracy.

Multi-hop audit of the numerical evidence: the PE residual variances in Table 1 are \(0.007820, 0.008115, 0.006819, 0.006753, 0.008699, 0.008014, 0.008709\) for 2005–2011; the Morey variances in Table 2 are \(0.008218, 0.008468, 0.006219, 0.006872, 0.008389, 0.008290, 0.008621\) [PAGE 4]. Taking square roots gives typical residual magnitudes around \(0.082\) to \(0.093\) in winning-ratio units, i.e., roughly eight to nine percentage points if interpreted as a root-mean-square deviation. The PE model is lower in four of seven years in these tables, but no significance test, cross-validation, or out-of-sample holdout is reported. The paper uses population variance over all Division I teams, not a random sample, and it assumes Normal residuals; that supports descriptive comparison but not strong inferential confidence. The paper also gives the USF example: 2010 predicted \(0.619\) versus actual \(0.615\), 2011 predicted \(0.647\) versus actual \(0.412\), and 2012 predicted \(0.340\) versus actual \(0.250\) [PAGE 5]. That example is rhetorically effective, but it is exactly where omitted variables—schedule, injuries, roster turnover, weather, and coaching changes—could drive the residual. The source itself admits attribution ambiguity: “This could be due to poor in-game decisions, bad luck, a tough schedule, or a myriad of other variables” [PAGE 5].

The deepest gray-zone issue is therefore causal overreach. The model can say a team’s actual winning ratio was below its scoring-based expectation. It cannot, by itself, prove that coaching caused the gap. The paper’s own conclusion that the model “cannot forecast future performance” [PAGE 6] vetoes strong prospective claims, while its claim that the model is “accurate forecasting” [PAGE 4] should be read as retrospective calibration to season aggregates. The model is best treated as a descriptive benchmark: given scoring output and scoring allowance, what win ratio would be expected under a particular Pythagorean mapping? Any move from that benchmark to coaching evaluation requires schedule adjustment, uncertainty intervals, and separation of model error from unmodeled physical and strategic layers.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define, for team \(i\) in season \(t\):
- \(S_{O,i,t}\): scoring offense, in points per game;
- \(S_{D,i,t}\): scoring defense, in opponent points per game;
- \(W_{i,t}, L_{i,t}\): wins and losses;
- \(\mathrm{AWR}_{i,t}=W_{i,t}/(W_{i,t}+L_{i,t})\), dimensionless winning ratio;
- \(\gamma\): dimensionless Pythagorean exponent.

The adapted PE model is the standard Pythagorean mapping implied by the source’s exponent choice:

\[
\mathrm{PWR}_{i,t}
=
\frac{S_{O,i,t}^{\gamma}}{S_{O,i,t}^{\gamma}+S_{D,i,t}^{\gamma}},
\qquad
\gamma=2
\]

for the authors’ adapted PE model [PAGE 3]. The Morey-style football model is:

\[
\mathrm{PWR}^{\mathrm{Morey}}_{i,t}
=
\frac{S_{O,i,t}^{2.37}}{S_{O,i,t}^{2.37}+S_{D,i,t}^{2.37}}
\]

because the source reports that “Morey applied the PE formula to professional football and found that the optimal exponential value was 2.37 (Morey, 2003)” [PAGE 2]. The response variable is dimensionless and bounded in \([0,1]\) for nonnegative scoring inputs. The inputs must share the same units and denominator convention; if one is points per game and the other is a season aggregate, the ratio is unit-inconsistent. If both are per-game rates, common game-count scaling cancels.

The residual and variance operators are:

\[
e_{i,t}=\mathrm{PWR}_{i,t}-\mathrm{AWR}_{i,t},
\qquad
\mathrm{SSD}_t=\sum_{i=1}^{N_t} e_{i,t}^{2},
\qquad
\hat{\sigma}_t^{2}=\frac{\mathrm{SSD}_t}{N_t}.
\]

Here \(e_{i,t}\) is in winning-ratio units; \(\mathrm{SSD}_t\) is in squared winning-ratio units; \(\hat{\sigma}_t^{2}\) is dimensionless squared winning-ratio. The source describes this as a “simple population variance” and uses \(N_t\) rather than \(N_t-1\) [PAGE 3]. Table 1 reports PE residual variances from \(0.006753\) to \(0.008709\), and Table 2 reports Morey residual variances from \(0.006219\) to \(0.008621\) [PAGE 4]. The corresponding root-mean-square residual magnitudes are approximately:

\[
\sqrt{0.006753}\approx 0.0822,
\qquad
\sqrt{0.008709}\approx 0.0933,
\]

in winning-ratio units. These are descriptive dispersion measures, not confidence intervals.

Assumptions and breakdown regimes:
1. \(S_O,S_D\ge 0\). If \(S_O=S_D=0\), the expression is \(0/0\) and undefined. If \(S_D=0\) and \(S_O>0\), \(\mathrm{PWR}=1\). If \(S_O=0\) and \(S_D>0\), \(\mathrm{PWR}=0\). If \(S_O=S_D>0\), \(\mathrm{PWR}=1/2\).
2. If \(\gamma\to 0\), then for positive scores \(S^0=1\), so \(\mathrm{PWR}\to 1/2\) and the model loses discrimination. If \(\gamma\to\infty\), the mapping approaches a step function: \(S_O>S_D\Rightarrow \mathrm{PWR}\to1\), \(S_O<S_D\Rightarrow \mathrm{PWR}\to0\), \(S_O=S_D\Rightarrow1/2\). The chosen \(\gamma=2\) and Morey’s \(2.37\) are intermediate calibrations, not universal constants.
3. The probabilistic interpretation requires independence and a common scoring-distribution family. If team and opponent scoring are positively dependent through shared pace, garbage-time scoring, or overtime, the Pythagorean form is a phenomenological approximation rather than an exact win probability.
4. Schedule strength is not in the inputs. If \(S_O\) and \(S_D\) are biased by opponent quality, the residual contains schedule effects. The source’s unbiasedness assumption is explicit: “the PWR an unbiased estimator of the actual winning percentage for a team” [PAGE 3].
5. Ties are ignored by \(\mathrm{AWR}=W/(W+L)\). Overtime scoring is folded into season scoring inputs, even though the source notes that “In college football, each team receives one possession to begin overtime play” [PAGE 2]. That creates a rule-induced non-exchangeability between regulation and overtime scoring.
6. The model is retrospective. The source states, “The PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited” [PAGE 6]. Any use as a prospective forecast requires a separate validation design.

The source’s strongest empirical summary is: “both models appear to predict with an error of magnitude 10-3 the expected winning performance of a given team for a given season” [PAGE 4]. That is a calibration statement on aggregate season data, not a causal claim about coaching.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is clear. The paper opens by saying, “The Pythagorean Expectation Formula was the impetus for the statistical revolution of Major League Baseball” [PAGE 1]. Bill James’s baseball formulation used runs scored and runs allowed; sabermetric practice then treated the gap between expected and actual wins as a signal of underlying performance. The Moneyball lineage—Oakland’s search for market inefficiencies—turned the formula into a front-office heuristic, not merely a mathematical curiosity. The source cites Hakes and Sauer for the economic interpretation: the Athletics exploited undervalued player attributes rather than merely applying a Pythagorean identity.

The scientific genealogy then branches by sport. Baseball exponents have been reported in the range \(1.82\) to \(2\) [PAGE 2]. Morey’s professional-football exponent is \(2.37\) [PAGE 2]. Basketball applications used exponents near \(14\) or \(13.91\) [PAGE 2]. Hockey work used \(1.927\), while later work accepted exponents slightly above \(2\) [PAGE 2]. Vogel then applied Morey’s \(2.37\) to twenty years of Nebraska football and reported a value of “luck” for each year [PAGE 2]. Caro and Machtmes extend that line by comparing the original James exponent \(2\) with Morey’s \(2.37\) on all Division I football teams from 2005–2011. The sample expanded from 118 teams in 2005 to 119 in 2006 and later to 120 [PAGE 3].

The retrocausal trap is that the formula is fitted to end-of-season aggregates and then used to narrate the season that produced those aggregates. That is reverse inference: wins are explained by scoring output, and then scoring output is treated as a benchmark for whether wins were “deserved.” The source itself warns that the model “cannot forecast future performance” [PAGE 6]. The multi-week traps are therefore:
- Weekly aggregation trap: a season-level scoring rate hides week-to-week opponent quality, home/away splits, and injury shocks.
- Schedule-strength trap: a team can accumulate high scoring offense against weak defenses and low scoring defense against weak offenses; raw \(S_O,S_D\) do not separate those effects.
- Overtime and clock-rule trap: overtime possessions and clock-stoppage rules can add or remove scoring opportunities in ways that are not exchangeable across teams [PAGE 2].
- Regression-to-the-mean trap: a team with an extreme actual winning ratio but ordinary scoring profile may look like an “underachiever” or “overachiever” when the residual is partly randomness.
- Coaching-change trap: the USF example is used to infer underperformance across three seasons [PAGE 5], but roster turnover, opponent changes, and staff transitions are unmodeled.
- Small-sample rule-event trap: a handful of overtime games or weather-affected games can move a season’s scoring aggregates without reflecting stable team quality.

The genealogy therefore supports the formula as a descriptive benchmark with a long sports-analytics pedigree, not as a standalone causal or prospective instrument. The more the model is stretched from retrospective calibration to forward-looking evaluation, the more it depends on omitted schedule, physical, and strategic layers.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The source’s strategic discussion creates a three-layer recursive problem: crisis habit regression, counter-trap, and clock. Crisis habit regression is the tendency of a coach under pressure to revert to prior conservative habits—punt on fourth down, take the field goal, protect field position—even when a scoring-maximization model would favor aggression. The paper directly connects this to the PE logic: “The importance of maximizing possessions is illustrated using the PE model” [PAGE 5], and it lists “decisions to go or to punt on fourth down, and to take field goal points instead of a fourth-down opportunity” as inputs to scoring [PAGE 5]. In a crisis, the coach’s policy may collapse toward the habit prior; the PE residual then reflects not only team quality but also the coach’s deviation from an aggressive scoring policy.

Counter-trap is the opponent’s model of that habit. If an opponent expects a conservative punt or a predictable fourth-down choice, it can allocate defensive or return resources accordingly. The recursive layer is that the coach may know the opponent expects the habit and may counter by going for it; the opponent may then expect the counter and defend the aggressive option. This is a game-theoretic recursion, not a fixed Pythagorean input. The source’s season aggregates cannot distinguish “the coach was conservative by habit,” “the coach was countering an opponent’s expectation,” and “the opponent counter-trapped the coach.” All three produce the same aggregate \(S_O,S_D\) signature but different causal interpretations.

Clock is the third layer. The source notes that “clock stoppages after first downs do not occur in the NFL” [PAGE 2], which changes late-half decision-making and scoring opportunity. It also notes that college overtime gives “each team receives one possession to begin overtime play” [PAGE 2]. These rules change the value of possessions and the risk of conservative play. A coach who regresses to a conservative habit near the end of a half may reduce variance but also reduce expected scoring; an opponent that anticipates the habit can counter; and the clock determines whether the counter can be executed before time expires. The recursive theory of mind therefore predicts that residual variance should be larger for teams with high-leverage clock situations, frequent overtime, or coaching staffs with rigid fourth-down policies. The source cannot test that because it has no play-level decision data, but it does identify “fourth down attempts, turnovers, and clock management” as review targets [PAGE 5]. The correct interpretation is not “the coach caused the residual” but “the residual is a composite of habit, counter-strategy, and clock-rule effects that the aggregate model cannot separate.”
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical/biomechanical/weather veto is triggered when an omitted layer has a nonzero conditional relationship with the residual. Formally, let \(L_{i,t}\) be a vector of omitted layer variables: weather (wind, precipitation, temperature), injury/availability, travel, surface, and biomechanical fatigue. The source’s model assumes, in effect, that the residual is centered and not systematically layer-dependent. The paper says it seemed reasonable “to assume the PWR an unbiased estimator of the actual winning percentage for a team” [PAGE 3]. If instead

\[
\mathbb{E}\left[e_{i,t}\mid L_{i,t}\right]\neq 0,
\]

then \(\hat{\sigma}_t^2\) is not a clean model-error variance; it is a mixture of model error and omitted-layer effects. The source itself concedes alternative causes: “This could be due to poor in-game decisions, bad luck, a tough schedule, or a myriad of other variables” [PAGE 5].

Physical layer: football scoring is contact-heavy and injury-sensitive. Offensive line health, quarterback availability, and defensive front rotation can change \(S_O\) and \(S_D\) within a season. The PE model uses season aggregates, so a midseason injury is absorbed into the average rather than modeled as a regime change. Biomechanical layer: kicking mechanics, throwing velocity, and fatigue affect field-goal probability and explosive-play capacity; these are not linear functions of aggregate scoring. Weather layer: wind and precipitation affect passing and kicking, and temperature affects fatigue and ball handling. A team that plays several weather-affected games may have depressed \(S_O\) or elevated \(S_D\) relative to a neutral-condition baseline. If those games cluster in a season, the residual can look like coaching underperformance even when the physical layer is the driver.

The veto proof is conditional and testable: if adding \(L_{i,t}\) to a regression of \(e_{i,t}\) produces a statistically and practically meaningful reduction in residual variance, or if it flips the sign of the residual for specific teams such as USF in 2011–2012, then the raw PE benchmark is not sufficient for causal coaching attribution. The source’s own USF example—predicted \(0.647\) versus actual \(0.412\) in 2011 and predicted \(0.340\) versus actual \(0.250\) in 2012 [PAGE 5]—is exactly the kind of case where weather, schedule, and injury layers could veto a simple “underachievement” reading. The model can survive as a descriptive scoring benchmark; it cannot survive as proof of coaching causation without layer adjustment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Exponent re-estimation and holdout veto. Recompute \(\gamma^*\) by minimizing the pooled residual variance over 2005–2011, then validate on a held-out season. Veto condition: if \(\gamma^*\) differs from \(2\) by more than \(0.20\) and reduces out-of-sample residual variance by at least \(10\%\), then the claim that the \(\gamma=2\) adapted PE is an accurate calibration is vetoed. Prediction: \(\gamma^*\) will fall between roughly \(2.0\) and \(2.37\), but the out-of-sample improvement will be modest because the year-to-year residual variances in Table 1 are already close to those in Table 2 [PAGE 4]. The PE-versus-Morey ordering will likely flip in at least one holdout year, showing that the difference between exponents is not robustly decisive.

2. Schedule-strength adjustment veto. Recompute \(S_O\) and \(S_D\) with opponent adjustment, then compare \(\hat{\sigma}_t^2\) and the sign of \(e_{i,t}\) for the USF seasons. Veto condition: if opponent adjustment reduces residual variance by at least \(10\%\) or changes the sign of the USF 2011 or 2012 residual, then raw PE-based coaching attribution is vetoed. Prediction: opponent adjustment will reduce residual variance most in seasons with strong non-conference mismatches and will shrink the USF residual, because the source’s own caution about “a tough schedule” [PAGE 5] identifies schedule as a plausible omitted cause. If the residual sign does not change, the descriptive benchmark is more robust than the causal interpretation.

3. Overtime/clock-rule heterogeneity veto. Recompute the model using regulation-only scoring or exclude overtime games, then compare residual variance and team-level residuals. Veto condition: if excluding overtime changes residual variance by at least \(5\%\) or produces a concentrated cluster of large residuals among teams with multiple overtime games, then the season-aggregate PE model is vetoed as a homogeneous calibration across rule regimes. Prediction: the aggregate variance effect will be small because overtime games are a minority, but team-level residuals will be visibly larger for teams with multiple overtime possessions, consistent with the source’s emphasis on college overtime rules [PAGE 2]. The PE and Morey rankings will be least stable for those teams, showing that rule-layer heterogeneity is a real boundary condition even when the aggregate fit looks strong.
</RLVR_COUNTERFACTUAL_VETOES>
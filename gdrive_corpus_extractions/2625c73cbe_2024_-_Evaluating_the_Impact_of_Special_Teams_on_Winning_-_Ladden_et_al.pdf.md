---
source: "2024 - Evaluating the Impact of Special Teams on Winning - Ladden et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 8
model: deepseek/deepseek-v4.1-flash-1017
words: 7288
---

<NATIVE_REASONING>
We need answer to user. Need produce XML sections exact. This is analysis of source. Need zero betting lines. Need cite pages exact markers and quotes. Need >=1000 words across exact XML sections. Need include THINK_TRACE >=400 words. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need ret causal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes 3 verifiable scenarios predictions. Need be careful not to overclaim? The source about special teams impact. Need answer likely a "GSE + GSI Frontier Reasoning Foundry" structured audit of paper. No betting lines. Need maybe mention not betting. Let's craft rigorous.

Need include source operators and equations. Need cite exact [PAGE N] markers and verbatim quotes. Need deep multi-hop derivation and gray-zone audit. Need zero toy equations. We can formalize EPA, logistic regression, per-play scaling, field goal probability. Must state units. EPA units points per play; coefficients log-odds per standardized unit; winning percentage? Paper says regression to winning percentage but likely logistic coefficients. We must note potential scale issues.

Need discuss equations:

EP(f) = expected points for drive starting at field position f (points per possession). Cubic regression model of EP vs starting field position. They used 79,389 possessions [PAGE 2-3]. Equation maybe \widehat{EP}(f) = β0+β1 f+β2 f^2+β3 f^3 + ε, units points. Need note not source exact coefficients, figure omitted. The text says "Below is our cubic regression model of EP vs. Starting field position from 1999-2022 seasons, which consisted of 79,389 total possessions" [PAGE 3].

Kickoff EPA: avg resulting field position 25.52-yard line. For kickoff i: EPA_kick,i = EP(f_i) - EP(25.52) for kicking team; receiving = - that. Units points. Assumption: average comparison baseline. If actual f_i. Need note 2016-2022 because touchback moved to 25. [PAGE 3]. This is a "difference from average", not true causal play value? Gray zone.

Punt EPA: For punt from yardage y, average net resulting field position within ±2 yd window: \bar f_y = mean{f_j: |y_j - y|≤2}. EP baseline = EP(\bar f_y). EPA_punt = EP(actual result f_i) - EP(\bar f_y) for punting team? Text: "We applied our EP model to each average result to estimate expected points for a punt at every yardage. We then calculated the expected points for each punt’s actual resulting field position. The difference between these two expected points values gave us the EPA for the punting team." Need sign: If actual result better for punting team (opponent worse field position), EP for opponent lower, so EPA? Since EP is expected points for team with ball? If actual resulting field position is opponent's starting position, lower EP is better for punting team. They say difference between actual and average expected points gave EPA for punting team. Need define direction carefully. Let's define EP_opp(f) = expected points for receiving team at f. For punting team, lower EP_opp is better, so EPA_punt = EP_opp(\bar f_y) - EP_opp(f_actual). But text says "difference between these two expected points values gave us the EPA for the punting team"; ambiguous. We can state sign convention must be chosen. The original likely used EP(actual) - EP(average)? Hmm let's examine: They first use kickoff: average resulting field position 25.52, expected points a team would score from average, then expected points from actual starting field position, difference gave EPA for each kickoff for kicking team. If actual starting field position > average (worse for receiving team), expected points for receiving at actual is lower than at average. Difference actual - average = negative. But kicking team should be positive. So maybe they define EP for kicking team? Or difference average - actual. The text says "Taking the difference of these two values gave us the EPA for each kickoff for the kicking team." Ambiguous. For punt, if actual field position worse for receiving, punting team positive. Need define. We can note sign convention: \mathrm{EPA}^{\text{punter}}_i = \widehat{EP}(f_{\text{avg},y}) - \widehat{EP}(f_i) if \widehat{EP} is receiving-team expected points. Or if using \widehat{EP} for possession team, reverse. This is important. But user wants formal equations. We can use explicit orientation.

Field goal made: \mathrm{EPA}_{\text{made FG}} = 3 - 3 P_{\text{make}}(d,w). Units points. Wait if EP field goal attempt? They define expected points for field goal = P_make*3. EPA made = 3 - 3P. That is value of make relative to expected. If P=.9, made EPA=.3 points. Miss EPA: - (3 P_make) - (EP_field position - EP_average field position from kickoffs). Units points. Need parse. If missed, their formula: \mathrm{EPA}_{\text{missed FG}} = -(3 * P_make) - (\mathrm{EP}_{field position} - \mathrm{EP}_{average field position from kickoffs}). The first term is negative expected points forgone. Second term is difference between resulting field position EP and average kickoff EP. But if miss gives opponent field position better/worse? Need sign. They say "negative value of expected points for field goal minus difference between EP of resulting field position and average starting position from kickoffs". Need maybe \mathrm{EPA}_{\text{missed FG}} = -3P_{\text{make}} - [EP_{\text{opp}}(f_{\text{miss}}) - EP_{\text{opp}}(f_{\text{kickavg}})]. If f_miss worse for opponent than kickoff average, EP_opp lower, bracket negative, then -negative = positive for kicking team? Wait miss should be bad relative to made? Let's think. They calculate field goal attempt EPA as weighted combination? They have made EPA and missed EPA. The missed formula maybe for kicking team: if miss, opponent gets ball at spot. Compared to average kickoff. If f_miss is worse for opponent (farther from end zone) than average kickoff, kicking team gains field position relative to kickoff. But they also lose expected FG points. So EPA_miss = - (expected points of FG) - (EP(f_miss) - EP(avg kickoff))? If f_miss > avg (worse for opponent), EP(f_miss) < EP(avg), difference negative, minus negative positive, offsetting lost expected points. That makes sense. But the "expected points for field goal" is 3P_make, not 3? They wrote 3*P. So EPA_miss = -3P - (EP_f - EP_avg). If EP_f < EP_avg, second term positive. Okay.

Probability field goal make regression plane factoring distance and wind speed: P_make(d,w) = logistic(α+β1 d+β2 w) or linear? They say regression plane. Could be P = \hat{β0}+β1 d+β2 w? Since probability, likely logistic? But source says "regression plane" not exact. Need avoid inventing. State unspecified functional form; if linear probability plane, P= b0+b1 d+b2 w; if logistic, logit(P)=... Source doesn't give coefficients. Need cite [PAGE 4]. Units: d in yards, w in mph, P dimensionless. Breakdown: P must be bounded [0,1]; linear plane can predict outside [0,1] at extreme wind/distance. Need mention.

STPI: sum of standardized average EPAs for each special teams unit on every team in every season. Let z_{u,t,s} = ( \bar{EPA}_{u,t,s} - μ_{u,s})/σ_{u,s}. STPI_{t,s} = Σ_u z_{u,t,s} for u ∈ kickoff, punt, FG maybe. Units dimensionless standard deviations. Need note sum of standardized units, not necessarily invariant to missing unit or correlation.

Regression: logistic model: \mathrm{logit}(W_{t,s}) = β0 + β_OSRS z_OSRS + β_DSRS z_DSRS + β_STPI z_STPI + ε. They call winning percentage. If W is proportion, logistic on proportion? Usually logit(win pct). Coefficients log-odds per standard deviation. Coefficients: z_OSRS 0.55645, z_DSRS 0.40596, z_STPI 0.02877 [PAGE 6]. Need compute ratios: 0.55645/0.02877 = 19.34; 0.40596/0.02877 = 14.11. Matches paper 19.3 and 14.1. Per-play: Need play share. Table: pass 463,377 48.68%; run 340,589 35.78%; kickoff 63,860 6.71%; punt 59,644 6.27%; FG 24,356 2.56%; total 951,826. Offense = pass+run = 803,966 = 84.46%. Defense? They likely same number? "excluding QB kneels and spikes". Special teams = 147,860 = 15.54%? Let's calculate: total 951,826. ST plays = 63,860+59,644+24,356 = 147,860. 147,860/951,826 = 15.535%. Offense plays = 803,966 = 84.465%. Ratio offense/ST = 803,966/147,860 = 5.437. If coefficient ratio 19.34 divided by play ratio? They say "divided the results from regression by ratio of plays on special teams to offense/defense". Need check: coefficient ratio ST/offense = 0.02877/0.55645 = 0.0517. Per-play offense vs ST: (β_off/β_ST)/(N_off/N_ST)? If β_off/β_ST=19.34, play ratio N_off/N_ST=5.437. Per-play ratio = 19.34/5.437 = 3.557 ~3.6. Yes. Defense: 0.40596/0.02877=14.11. N_def? Defense plays equal opponent offense plays? They likely 803,966? Ratio 14.11/5.437=2.595 ~2.6. Good.

Need note "winning percentage" vs logistic coefficient: If W in [0,1], logit. The paper says multiple logistic regression. Good.

Need THINK_TRACE >=400 words. Need multi-hop derivation & gray-zone audit. We need discuss from abstract to methods to results. Need identify assumptions, threats: EP model omitted covariates (time remaining, score differential, team quality, weather, dome, altitude), field position mapping orientation, sample selection, standardization by season/unit, multicollinearity, special teams EPA not independent of offense/defense? Return units confounded with kicking units, coaching decisions (they claim independent but baseline average still embeds strategy), field goal miss/no-score filter (5% no_score_prob) creates selection bias, injury rate not measured in paper? They cite significantly higher injury rate but no source in paper? Actually abstract says higher per-play injury rate; no citation. Need gray-zone audit: paper's causal claim "starters should not be used" depends on injury rate not estimated; decision-theoretic missing value of starter rest. Need mention "special teams only 15% of plays" [PAGE 5]. Need phrase "per-play impact on winning percentage" not "win probability" maybe.

Need source operators and equations section with formal LaTeX, units, page citations, breakdown. Need include exact quotes. Need not too long but >=1000 total. Desired oververbosity 5. Need include all sections. Let's plan sections:

<THINK_TRACE> ~500-700 words. Multi-hop: Abstract claim -> EPA construction -> STPI -> logistic regression -> per-play rescaling -> conclusion. Audit: "independent of coaching decisions" claim questionable; EP baseline only field position; cubic EP; kickoff average 25.52; punt ±2; FG probability; no_score_prob filter; standardization; coefficient ratios; play counts. Mention math: ratio and per-play. Gray zones: offense vs defense play counts, special teams plays are 15%, logistic vs winning percentage, no uncertainty intervals, RMSE improvement 1.9% small. Need cite pages. Ensure >=400 words. Need not mention betting lines.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal equations. Use \begin{aligned}. Need cite [PAGE 3], etc. Include units and assumptions. Need exact quotes. Let's draft:

Define f ∈ [0,100] yards? American football field position maybe yards from own goal line? They use "starting field position" and 25.52-yard line. Need define coordinate f as yards from own goal line (0-100). EP(f) points per possession. Source: "plotting the starting field position of every drive... along with each drive’s result (in points)" [PAGE 3]. Cubic: \widehat{EP}(f)=β0+β1 f+β2 f^2+β3 f^3+ε. Units points; f yards. Assumptions: no score/time/team covariates; cubic fits all possessions; orientation consistent.

Kickoff: f_i actual receiving start; \bar f_K =25.52. \mathrm{EPA}^{\text{kick}}_i = \widehat{EP}(f_i)-\widehat{EP}(\bar f_K) if \widehat{EP} is receiving-team EP and sign reversed? Need be consistent. Let's define \widehat{EP}_{\text{rec}}(f) = expected points for receiving team. For kicking team, a lower receiving EP is better, so \mathrm{EPA}^{\text{kick}}_i = \widehat{EP}_{\text{rec}}(\bar f_K)-\widehat{EP}_{\text{rec}}(f_i). For receiving team = negative. But source says "Taking the difference of these two values gave us the EPA for each kickoff for the kicking team." We can say sign convention chosen so positive = better for kicking team. This avoids ambiguity. Need cite [PAGE 3].

Punt: y kick yardage; \bar f_P(y)= average net resulting position for punts from y' within ±2 yd. \mathrm{EPA}^{\text{punt}}_i = \widehat{EP}_{\text{rec}}(\bar f_P(y_i))-\widehat{EP}_{\text{rec}}(f_i). Positive better for punting team. [PAGE 4]. Assumption local stationarity; sample size smoothing.

FG: P_make(d,w)=Pr(make | d,w), dimensionless. Made: \mathrm{EPA}_{\text{made}}=3-3P. Wait if positive = better for kicking team? If make vs expected? They define. Use exact. Miss: \mathrm{EPA}_{\text{miss}}=-3P - [\widehat{EP}_{\text{opp}}(f_{\text{miss}})-\widehat{EP}_{\text{opp}}(f_{K,\avg})]. Need sign convention: if \widehat{EP}_{opp} is opponent expected points, then if miss gives opponent worse field position, EP_opp lower, bracket negative, so - bracket positive. Good. But the "3P" first term negative. Units points. Need note they suppress if no_score_prob <5% [PAGE 5]. P_make regression plane with d yards and wind speed (mph); source doesn't report coefficients/functional form. Breakdown if linear plane can exceed [0,1]; if logistic, bounded; wind extrapolation.

STPI: \bar{EPA}_{u,t,s}; z = ( \bar{EPA}-μ_{u,s})/σ_{u,s}; STPI = Σ_{u∈K,P,FG} z_{u,t,s}. Dimensionless. Assumption equal weight across units and independence. If σ=0, undefined; if unit missing, bias. Then logistic: \operatorname{logit}(W_{t,s}) = β0+β_1 z_OSRS + β_2 z_DSRS + β_3 z_STPI. Coefficients log-odds per SD. But if W is winning percentage, logit. Units: coefficients log-odds per standard deviation. For small effects, β≈ΔW. Reported coefficients [PAGE 6]. Ratio: R_O/ST = β1/β3 = 19.34; R_D/ST=β2/β3=14.11. Play shares from [PAGE 6]: N_pass=463,377; N_run=340,589; N_K=63,860; N_P=59,644; N_FG=24,356; N_total=951,826. N_off=803,966. N_ST=147,860. Per-play ratio: \rho_O = (β_OSRS/β_STPI)/(N_off/N_ST) = 3.56; \rho_D = (β_DSRS/β_STPI)/(N_def/N_ST) ≈ 2.60. Need note defense play count not explicitly tabulated; paper's result 2.6 implies same or equivalent denominator. Source says "we divided our results by ratio of plays each unit is involved in (excluding QB kneels and spikes)" [PAGE 5]. Need exact quote.

Breakdown regimes: 
- EP cubic extrapolation outside observed field positions or low-sample yard lines; singular if σ=0; if P_make unbounded; if no_score filter; if coefficient estimates unstable due multicollinearity; if special teams EPA sign convention reversed; if plays not iid due team-season clustering; if logistic on winning percentage with few games (17-game season) yields high variance; if RMSE improvement 1.9% from 0.107 to 0.105 [PAGE 5]. Need mention "singularity" not mathematical singular? State breakdown regimes.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage. Need mention George Allen quote [PAGE 2] "Football is one-third offense, one-third defense, and one-third special teams" but not grounded in analytics. Lineage: nflfastR, EPA models, 33rd Team punting study negative EPA top five [PAGE 2], Yale kicker evaluation [PAGE 8], Wharton Moneyball Academy. Multi-week traps: using legacy EPA that penalizes coaching decisions; touchback rule change 2016 (20 to 25) and 2024 moving to 30 [PAGE 6-7]; sample split 2016-2022 for kickoffs vs 1999-2022 for FG; averaging ±2 yard window; no_score_prob cutoff; standardized units. Need discuss "retrocausal" maybe how later rule changes alter earlier valuation: 2024 kickoff rule moving touchbacks to 30 encourages returns, so historical kickoff EPA may not transfer. This is a multi-week trap: stale rule regime. Also "special teams are 1/3" folklore vs measured per-play 3.6/2.6. Need cite pages. Need mention "The new kickoff rules... moving touchbacks up to the 30-yard line... encourage more returns" [PAGE 7]. Good.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression = coaches revert to folklore "one-third special teams" or playing starters due tradition; counter-trap = analytics says don't use starters because lower per-play impact and higher injury rate, but if opponent exploits? Need discuss recursive theory of mind: coaches anticipate opponent special teams tactics, players' incentives, injury risk, roster constraints. Need mention "clock" = time remaining/score state; EP model ignores clock? The paper's EP model by field position only; no time/score. In crisis, clock and score differential dominate, so special teams value may be nonlinear in late-game states. Need cite [PAGE 3] "solely based on starting field position" and [PAGE 5] no_score_prob. Need 250+ words. Need not overdo.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need address weather: FG probability regression includes wind speed [PAGE 4], but not temperature, precipitation, altitude, surface. Weather veto: extreme wind invalidates P_make plane; cold reduces kicking distance; wet turf affects returns. Biomechanical: injury rate claim not measured in paper; starter usage veto depends on injury exposure, collision biomechanics, positional risk; paper says "significantly higher per-play injury rate" [PAGE 1, PAGE 6] but no estimate. Need state physical veto: if injury hazard per special teams play exceeds incremental win-probability benefit, starters should not play; but paper doesn't quantify hazard. Need maybe decision rule: play starter if expected win-prob gain > injury cost. But no toy equation? We can formalize? User says no toy equations but okay formal decision inequality? Need avoid fake ratios. Could state qualitative. But CROSS_LAYER_VETO should have "proof". Need provide veto proof: Weather and biomechanical layers can override EPA coefficient. E.g., wind speed is only weather covariate in FG model; if wind > training range, P_make regression extrapolates. Field position EP model pooled across weather, so rain/snow can make EP(f) biased. Thus cross-layer veto: do not apply paper's average per-play multiplier to extreme weather or injury-risk players. Need cite [PAGE 4] wind speed, [PAGE 3] field position. Need mention "physical/biomechanical/weather veto proof" maybe prove that the paper's causal recommendation cannot be adjudicated solely by STPI because injury rate not in model. Need be clear.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? We can frame as counterfactual vetoes that would invalidate the paper's recommendation if observed. Need 3 scenarios, each verifiable with data. Need predictions. Must avoid betting lines. Scenarios:
1. Injury hazard counterfactual: If per-play injury rate on special teams for starters is not significantly higher than offense/defense, then the paper's injury-premise for benching starters is vetoed. Verify with play-by-play injury reports and snap counts. Prediction: if hazard ratio ≤1, the recommendation "starters should generally not be used" loses support; STPI coefficient remains 0.02877 but decision flips. Need cite paper's claim [PAGE 1] "significantly higher per-play injury rate". But paper doesn't estimate. Good.
2. Rule-regime counterfactual: 2024 kickoff rule moving touchback to 30 increases returns. If kickoff EPA variance and coefficient increase materially in 2024-2025, historical 2016-2022 kickoff baseline (25.52) is stale; STPI weights should be re-estimated. Prediction: kickoff unit z-scores and STPI coefficient rise; per-play ratio 3.6/2.6 not transportable. Verify by rerunning on 2024-2025 data. Cite [PAGE 7].
3. Sign/aggregation counterfactual: If return and kicking units are separated with tracking data, the combined STPI may mask offsetting effects; if separated unit EPAs have opposite signs and low correlation, the equal-weight sum is invalid. Prediction: STPI's RMSE improvement 1.9% shrinks or becomes insignificant; unit-specific coefficients differ. Verify with tracking data. Cite [PAGE 6] extension. Need maybe include "no_score_prob 5% filter" counterfactual: If include all missed FG possessions without no_score filter, estimates change. But three enough.

Need overall answer in XML exact sections. Need no betting lines. Need include word count? Not necessary. Need ensure >=1000 words. We can produce maybe 1800-2500 words. Need exact XML tags. No markdown? Can use LaTeX inside. Need ensure all sections present. Need no extra outside? We can include concise intro? The user asked to produce sections exact. Best output only XML with sections. Could include no extra. Need ensure page quotes exact and [PAGE N] markers. Need use "verbatim quotes" exactly from source. Need avoid misquote. Use quotes: 
- "Football is one-third offense, one-third defense, and one-third special teams" [PAGE 2]
- "special teams plays that only encompass 15% of all plays in NFL games" [PAGE 5] Actually exact: "By using STPI and thereby including special teams plays that only encompass 15% of all plays in NFL games, we improved the RMSE as compared to the model with only OSRS and DSRS by 1.9%, from 0.107 to 0.105." [PAGE 5]
- "we calculated a new form of EPA by creating an expected points (EP) model to determine the value of a special teams play solely based on the starting field position, eliminating the impact of coaching decisions." [PAGE 2-3] Actually page 2-3 split: [PAGE 2] ends "starting field" [PAGE 3] begins "position, eliminating..." Need quote with both? Use [PAGE 2-3].
- "the average resulting field position after a kickoff, which was the 25.52-yard line" [PAGE 3]
- "we calculated this by averaging the net positions of punts kicked within two yards of each other" [PAGE 3-4] split. Use [PAGE 3-4].
- "regression plane, factoring in kick distance and wind speed for field goal attempts from 1999-2022" [PAGE 4]
- "combined likelihood of less than 5% chance of scoring (as per nflfastR's no_score_prob)" [PAGE 5]
- "we divided our results by the ratio of plays each unit is involved in (excluding QB kneels and spikes)" [PAGE 5]
- "one play on offense and defense is 3.6 times and 2.6 times more impactful on a higher winning percentage than a special teams play, respectively." [PAGE 6] Exact? Source says "We found that one play on offense and defense is 3.6 times and 2.6 times more impactful on a higher winning percentage than a special teams play, respectively." [PAGE 6]
- "Special teams has a significantly reduced per-play impact on a game compared to offense and defense and a significantly higher per-play injury rate; therefore, starters on offense and defense should generally not be used on special teams." [PAGE 6]
- "the new kickoff rules passed by the NFL have the potential to alter how kickoffs are executed and valued. By moving touchbacks up to the 30-yard line, the NFL will encourage more returns on kickoffs, increasing variability in results and the importance of the play to both the return and kicking units." [PAGE 7]
- "A further extension of this analysis would be to isolate the kickoff or punt unit from the return unit on each play, using advanced tracking data." [PAGE 6]
- "z_OSRS 0.55645", "z_DSRS 0.40596", "z_STPI 0.02877" [PAGE 6].
- Play counts [PAGE 6].

Need careful with quote "significantly higher per-play injury rate" from PAGE 1 abstract and PAGE 6. Good.

Need formulate exact equations. Use LaTeX. Need maybe not too many equations but enough. Need ensure no "spreads, totals, moneylines, odds". Avoid words. "winning percentage" okay. "log-odds" is not betting odds? Hmm "odds" in log-odds might trigger zero betting lines? It says never mention spreads, totals, moneylines, or odds. "log-odds" contains odds. To be safe, avoid "odds"; use "logit" and "log-odds" maybe risky. Use "logit scale" instead. Do not use "odds". Use "logit" only. Good. Don't use "moneyline". Fine.

Need use "points per play" EPA. Good.

Need maybe mention "winning percentage" as W. Good.

Potential issue: "ZERO TOY EQUATIONS" means don't invent fake ratios like Force/Fatigue. Our equations are from source. Good.

Need "exact singularity/breakdown regimes": include mathematical singularities:
- z-standardization undefined when σ_{u,s}=0.
- logistic model separation if perfect wins? coefficient diverge.
- cubic EP can extrapolate outside [0,100] and may non-monotonic.
- P_make must be bounded; linear regression plane can exceed 1.
- no_score filter creates discontinuity at 5% threshold.
- sum of standardized EPAs can have collinearity if units correlated.
- small sample for FG at long distances/wind extremes.

Need "cross-layer veto adjudication: Physical/biomechanical/weather veto proof." We can write "Veto proof: The model's estimand is ΔEP per play from field position; it does not contain a biomechanical injury hazard. Therefore, any recommendation about starter usage requires an external hazard constraint. If the hazard is high, the model's coefficient cannot override it; if weather exceeds training support, EP(f) and P_make(d,w) are extrapolations and the STPI coefficient is not transportable." This is proof by scope mismatch. Need maybe mention weather only wind in FG model, not EP. Good.

Need "recursive theory of mind: Crisis habit regression vs counter-trap vs clock." Need define:
- Crisis habit regression: under pressure, coaches revert to inherited heuristic "one-third special teams" and play starters; paper counters with per-play impact.
- Counter-trap: if all teams follow paper and remove starters, opponent may gain by attacking special teams? But if opponent also? Could be a counter-trap: over-optimizing special teams may create hidden injury risk or rule-change exploitation. Recursive: each coach models other coach's special teams aggression; if opponent expects conservative return units, they may pooch/kick away; but the paper's average EPA not conditional on strategy. Clock: late-game onside kicks, FG block, etc. not captured by field-position-only EP. Need cite [PAGE 3] "solely based on starting field position" and [PAGE 5] no_score. Good.

Need "Retrocausal genealogy: Historical/scientific lineage & multi-week traps." Include:
- George Allen folklore.
- 33rd Team punting EPA negative top five due coaching decisions.
- nflfastR, ProFootballReference OSRS/DSRS.
- Yale kicker evaluation, Sports Tech Biz.
- Rule changes: 2016 touchback 20->25, 2024 25->30. Multi-week traps: using older kickoff data across regimes; using nflfastR EPA that includes coaching decisions; using average EP without time/score; treating STPI sum of z-scores as stable across seasons. Good.

Need maybe include "multi-week traps" term: "A multi-week trap is to fit the 2016–2022 kickoff baseline and then apply it to 2024–2025 without re-estimating, because the 2024 rule change moves touchbacks to the 30-yard line and encourages returns [PAGE 7]."

Need final answer only XML. Need ensure no markdown bullets? XML sections can contain paragraphs. Use <SOURCE_OPERATORS_AND_EQUATIONS> with LaTeX. Need maybe use escaped? XML text can include &? Avoid unescaped ampersands. Use "and" not "&". Use "<" in math? XML requires escape &lt;. Better avoid < in text? We can use \leq? Actually LaTeX \le no <. Use "P \in [0,1]" okay. Use "x^2". Use \sum. No unescaped & in LaTeX? \begin{aligned} uses & for alignment, which in XML text would be ampersand; must escape as &amp; or avoid aligned with &. Use \begin{aligned} with & would be invalid XML if not escaped. Need either escape all & as &amp; or avoid alignment ampersands. Simpler use separate display equations without &, or use \begin{array}{l} no &. But \begin{aligned} often uses &. To be safe, avoid & entirely. Use separate equations. Use no ampersands in text. Check quotes with "&" none. Use "and" not "&". Good.

Need include LaTeX with backslashes okay in XML. Need no unescaped < or >. Use "less than" instead of <. Use "\le" no. Use "P \in [0,1]" okay. Use "f \in [0,100]" okay. No <.

Need maybe use "logit(W_{t,s})" not "odds". Good.

Need mention "RMSE 0.107 to 0.105" no issue.

Need count words. Let's draft full answer. Need maybe 2000 words. Ensure THINK_TRACE >=400 words. Let's write.

Need be careful "PAGES: 8" and cite exact [PAGE N]. Use [PAGE 6] in results. Good.

Let's produce final.

Potential issue: In SOURCE_OPERATORS, the sign for punt. Need avoid confusion: define \widehat{EP}_{rec}(f) as expected points for the team receiving the ball at f. Then for punting team positive if actual f lower than average? If actual f lower (worse for receiving), \widehat{EP}_{rec}(f_i) lower than \widehat{EP}_{rec}(\bar f), so \widehat{EP}_{rec}(\bar f)-\widehat{EP}_{rec}(f_i) positive. Good. For kickoff same. For FG missed formula, define \widehat{EP}_{opp}(f) opponent expected points. If miss gives opponent at f_miss. The source formula: -3P - (EP_f - EP_avg kickoff). If f_miss worse for opponent, EP_f lower than EP_avg, bracket negative, minus bracket positive. Good. But if f_miss better for opponent, bracket positive, minus positive. Good. Good.

Need note "EPA_made = 3 - 3P" if P=make. If made, actual points 3 vs expected 3P; EPA=3-3P. Good.

Need "expected points for FG is likelihood of success multiplied by three" [PAGE 4]. Good.

Need perhaps include "EPA for receiving team is negative of this value" [PAGE 3]. Good.

Need "standardized average EPAs" equation. Good.

Need "W_{t,s}" is winning percentage? Logistic with proportion. We can state "W_{t,s} is team-season winning percentage treated as a proportion." Good.

Need "coefficients" from [PAGE 6]. Use "β_OSRS = 0.55645, β_DSRS = 0.40596, β_STPI = 0.02877". Good.

Need per-play:
N_off = N_pass + N_run = 803,966.
N_ST = 63,860 + 59,644 + 24,356 = 147,860.
N_total = 951,826.
N_off/N_ST = 5.437.
N_def? Paper says defense play count? Table only offense and ST. For defense, assume N_def = N_off? Actually in NFL, number of defensive plays equals opponent offensive plays, so across league total defense plays ~ offense plays. For team-season, N_def ≈ N_off. We can state "using the paper's denominator convention the defense ratio is approximately the same as the offense ratio; the reported 2.6 follows." Need not invent exact N_def. The paper reports 2.6. Good.

Need "special teams plays only encompass 15% of all plays" exact. Good.

Need "RMSE 1.9% improvement" exact.

Need "z_OSRS etc." Good.

Need "singularity" maybe "σ_{u,s}=0" and "perfect separation". Good.

Need final XML. Let's compose carefully. 
Need no markdown code fences. Use XML. Ensure all sections closed. Use exact tags.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain has five links. First, it rejects the native nflfastR EPA for special teams because the source says nflfastR-type EPA “account for incorrect coaching decisions like punting/attempting field goals instead of going for it, rather than directly measuring on-field player performance” [PAGE 2]. Second, it constructs a field-position-only expected-points model: “plotting the starting field position of every drive in the dataset along with each drive’s result (in points)” [PAGE 3], using a cubic regression over 79,389 possessions [PAGE 3]. Third, it converts kickoffs, punts, and field goals into EPA units against unit-specific baselines: kickoffs use the 25.52-yard average result [PAGE 3], punts use a local two-yard averaging window [PAGE 3-4], and field goals use a make-probability surface with distance and wind speed [PAGE 4]. Fourth, it aggregates standardized unit EPAs into STPI and enters STPI with ProFootballReference OSRS and DSRS into a logistic model of team-season winning percentage [PAGE 5]. Fifth, it rescales coefficient ratios by play shares to obtain the headline per-play result: “one play on offense and defense is 3.6 times and 2.6 times more impactful on a higher winning percentage than a special teams play, respectively” [PAGE 6].

The multi-hop derivation is straightforward if the units are kept separate. The logistic coefficients are on a logit scale per standardized unit of OSRS, DSRS, and STPI: 0.55645, 0.40596, and 0.02877 [PAGE 6]. Their raw coefficient ratios are 19.34 and 14.11. The play-count table gives 463,377 passes, 340,589 runs, 63,860 kickoffs, 59,644 punts, and 24,356 field goals, total 951,826 [PAGE 6]. Thus offense has 803,966 plays and special teams has 147,860, so the offense-to-special-teams play ratio is about 5.437. Dividing 19.34 by 5.437 gives about 3.56, matching the paper’s 3.6. The defense calculation uses the paper’s stated denominator convention: “we divided our results by the ratio of plays each unit is involved in (excluding QB kneels and spikes)” [PAGE 5]. With the same approximate denominator, 14.11 divided by 5.437 gives about 2.60, matching the paper’s 2.6.

The gray-zone audit is where the paper needs care. The EP model is “solely based on starting field position” [PAGE 2-3]. That isolates coaching decisions only if field position is a sufficient summary of the possession’s scoring expectation. It is not sufficient in general: time remaining, score differential, timeouts, weather, team strength, and end-of-half constraints all change expected points. The paper partially handles the end-of-half problem with a no-score filter: it excludes the post-miss field-position value when “all possessions in the same half following the missed field goal have a combined likelihood of less than 5% chance of scoring” [PAGE 5]. But that 5% cutoff is a discontinuity, not a structural control. The kickoff analysis uses 2016-2022 because of the touchback rule change to the 25-yard line [PAGE 3], while field goals use 1999-2022 [PAGE 4]. That is a regime split, not a causal identification strategy. The punt baseline smooths across a two-yard window because of “small sample sizes at some of the yardages” [PAGE 3-4], which introduces local pooling bias. The STPI is a sum of standardized average EPAs for each unit [PAGE 5], so it assumes equal weight and no offsetting correlation among kickoff, punt, and field-goal units. The logistic model improves RMSE from 0.107 to 0.105, a 1.9% improvement [PAGE 5], which is real but small; the coefficient on STPI is correspondingly tiny compared with OSRS and DSRS. The conclusion about starters is a decision-theoretic leap: the paper measures per-play winning-percentage association, then adds an injury-rate premise that is asserted — “a significantly higher per-play injury rate” [PAGE 1, PAGE 6] — but not estimated in the paper’s model. That is the main gray zone: the football-performance coefficient and the biomechanical injury cost are separate layers, and the paper’s recommendation requires both.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(f\) be starting field position in yards, and let \(\widehat{EP}(f)\) be expected points for the team receiving possession at \(f\), in points per possession. The source states that the EP model was built by “plotting the starting field position of every drive in the dataset along with each drive’s result (in points)” [PAGE 3], with “a cubic regression model of EP vs. Starting field position from the 1999-2022 seasons, which consisted of 79,389 total possessions” [PAGE 3]. A formal representation is
\[
\widehat{EP}(f)=\beta_0+\beta_1 f+\beta_2 f^2+\beta_3 f^3+\varepsilon,
\]
with \(f\) in yards, \(\widehat{EP}\) in points, and \(\varepsilon\) an error term. The source does not print the fitted coefficients or the figure’s numeric equation, so the coefficients above are symbolic, not estimated values.

For kickoffs, the source reports “the average resulting field position after a kickoff, which was the 25.52-yard line” [PAGE 3]. If \(f_i\) is the actual receiving-team starting field position after kickoff \(i\), and \(\bar f_K=25.52\) yards, then with the sign convention “positive equals better for the kicking team,”
\[
\mathrm{EPA}^{\mathrm{kick}}_i=\widehat{EP}(\bar f_K)-\widehat{EP}(f_i),
\]
in points per kickoff. The source says the receiving-team EPA “is simply the negative of this value” [PAGE 3]. Assumptions: the 25.52-yard baseline is the correct counterfactual; the 2016-2022 sample is homogeneous; and the same EP mapping applies to all kickoff contexts.

For punts, the source uses a local average: “we calculated this by averaging the net positions of punts kicked within two yards of each other” [PAGE 3-4]. Let \(y_i\) be the punt’s kick yardage and let
\[
\bar f_P(y_i)=\mathrm{mean}\{f_j: |y_j-y_i|\le 2\}
\]
be the local average net resulting field position, in yards. Then
\[
\mathrm{EPA}^{\mathrm{punt}}_i=\widehat{EP}(\bar f_P(y_i))-\widehat{EP}(f_i),
\]
in points per punt, again with positive meaning better for the punting team. Assumptions: local stationarity over the two-yard window and adequate sample size after pooling. The source notes “small sample sizes at some of the yardages” [PAGE 3-4], so the window is a variance-reduction device, not a causal adjustment.

For field goals, let \(d\) be kick distance in yards, \(w\) be wind speed in the source’s units, and \(P_{\mathrm{make}}(d,w)\) be the probability of a successful field goal, dimensionless. The source says it created “a regression plane, factoring in kick distance and wind speed for field goal attempts from 1999-2022” [PAGE 4], but does not print the functional form or coefficients. The made-field-goal EPA is given verbatim as
\[
\mathrm{EPA}_{\mathrm{made\ FG}}=3-(3\cdot P_{\mathrm{make}}),
\]
in points [PAGE 4]. The missed-field-goal EPA is given as
\[
\mathrm{EPA}_{\mathrm{missed\ FG}}=-(3\cdot P_{\mathrm{make}})
-\left(\mathrm{EP}_{\mathrm{field\ position}}-\mathrm{EP}_{\mathrm{average\ field\ position\ from\ kickoffs}}\right),
\]
in points [PAGE 5]. The source adds that the post-miss field-position value is not counted when possessions after the miss have “a combined likelihood of less than 5% chance of scoring (as per nflfastR's no_score_prob)” [PAGE 5]. Breakdown regimes: a linear probability plane can predict \(P_{\mathrm{make}}\) outside \([0,1]\) at extreme distance or wind; a logistic plane avoids that but is unspecified here; and the 5% filter creates a threshold discontinuity.

STPI is a standardized sum. Let \(\overline{EPA}_{u,t,s}\) be unit \(u\)’s average EPA for team \(t\) in season \(s\), with \(u\in\{\mathrm{kickoff},\mathrm{punt},\mathrm{FG}\}\). Let \(\mu_{u,s}\) and \(\sigma_{u,s}\) be the season-unit mean and standard deviation. Then
\[
z_{u,t,s}=\frac{\overline{EPA}_{u,t,s}-\mu_{u,s}}{\sigma_{u,s}},
\qquad
\mathrm{STPI}_{t,s}=\sum_{u} z_{u,t,s},
\]
which is dimensionless, in standard-deviation units. The source describes STPI as “the sum of the standardized average EPAs for each special teams unit on every team in every season” [PAGE 5]. Assumption: equal weighting and additive separability across units. Singularity: if \(\sigma_{u,s}=0\), the standardization is undefined; if units are strongly correlated or offsetting, the sum can mask unit-specific effects.

The regression is logistic:
\[
\operatorname{logit}(W_{t,s})=\beta_0+\beta_{\mathrm{OSRS}}z_{\mathrm{OSRS},t,s}
+\beta_{\mathrm{DSRS}}z_{\mathrm{DSRS},t,s}
+\beta_{\mathrm{STPI}}z_{\mathrm{STPI},t,s}+\varepsilon_{t,s},
\]
where \(W_{t,s}\) is team-season winning percentage treated as a proportion. The source reports “z_OSRS 0.55645,” “z_DSRS 0.40596,” and “z_STPI 0.02877” [PAGE 6]. The coefficients are on the logit scale per standardized unit. The raw ratios are
\[
\frac{\beta_{\mathrm{OSRS}}}{\beta_{\mathrm{STPI}}}\approx 19.34,
\qquad
\frac{\beta_{\mathrm{DSRS}}}{\beta_{\mathrm{STPI}}}\approx 14.11,
\]
matching the paper’s “19.3 times and 14.1 times” [PAGE 6]. With \(N_{\mathrm{off}}=803{,}966\), \(N_{\mathrm{ST}}=147{,}860\), and \(N_{\mathrm{total}}=951{,}826\) from the play-count table [PAGE 6], the offense-to-special-teams play ratio is about \(5.437\). Thus the per-play offense ratio is
\[
\rho_{\mathrm{off}}=\frac{\beta_{\mathrm{OSRS}}/\beta_{\mathrm{STPI}}}{N_{\mathrm{off}}/N_{\mathrm{ST}}}
\approx \frac{19.34}{5.437}\approx 3.56,
\]
and the defense analog is approximately
\[
\rho_{\mathrm{def}}=\frac{\beta_{\mathrm{DSRS}}/\beta_{\mathrm{STPI}}}{N_{\mathrm{def}}/N_{\mathrm{ST}}}
\approx \frac{14.11}{5.437}\approx 2.60,
\]
consistent with the paper’s “3.6 times and 2.6 times” [PAGE 6]. Breakdown regimes: perfect separation or near-separation in the logistic model can make coefficients unstable; team-season clustering is not reflected in the reported point estimates; and the RMSE improvement is only “1.9%, from 0.107 to 0.105” [PAGE 5], so small specification changes can erase the STPI increment.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage begins with football folklore. George Allen, a Pro Football Hall of Fame coach, is quoted as saying “Football is one-third offense, one-third defense, and one-third special teams,” but the paper immediately notes that “his commentary was not grounded in analytics” [PAGE 2]. The modern lineage runs through nflfastR, ProFootballReference’s OSRS and DSRS, and prior special-teams work such as the 33rd Team punting study and Yale’s kicker evaluation [PAGE 2, PAGE 8]. The 33rd Team study is important because the paper says its EPA model produced “top five punting units all had negative expected points added (EPA)” [PAGE 2], a result the authors attribute to coaching-decision contamination in native EPA. That is the retrocausal hinge: older EPA models were not measuring special-teams performance cleanly, so the paper reconstructs EP from field position and drive outcomes [PAGE 3].

The scientific genealogy is therefore a sequence of corrections: folklore “one-third” → native EPA → coaching-decision-adjusted EPA → field-position-only EP → STPI → logistic per-play rescaling. Each step changes the object of measurement. Native EPA measures play value relative to historical average in a decision context; the paper’s EP measures drive value from field position; STPI measures a standardized composite; the logistic coefficient measures team-season winning-percentage association; and the per-play ratio divides that association by play share. A multi-week trap is to treat these as interchangeable. Another trap is regime drift. The kickoff analysis is restricted to 2016-2022 because “a rule change that moved the touchback from the 20-yard line to the 25-yard line” [PAGE 3]. The paper then warns that “the new kickoff rules passed by the NFL have the potential to alter how kickoffs are executed and valued. By moving touchbacks up to the 30-yard line, the NFL will encourage more returns on kickoffs, increasing variability in results and the importance of the play to both the return and kicking units” [PAGE 7]. A model fit on the 25-yard regime should not be silently transported to the 30-yard regime. That is a multi-week trap in miniature: the historical baseline is real, but the rule environment is not stationary.

A second multi-week trap is aggregation. The paper itself proposes “isolat[ing] the kickoff or punt unit from the return unit on each play, using advanced tracking data” [PAGE 6]. Until that is done, STPI combines kicking and return performance into one number. If a team has a strong punter and a weak return unit, the sum can look average while the underlying components are not. A third trap is the no-score filter: excluding post-miss possessions below the 5% threshold [PAGE 5] changes the field-position value of missed field goals near halftime and game end. That is defensible for scoring expectation, but it means the field-goal EPA is not a single continuous operator across game states. The paper’s genealogy is thus best read as a disciplined first pass, not as a final causal decomposition.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression is the coach’s default under pressure: revert to the inherited “one-third special teams” heuristic [PAGE 2] and keep starters on coverage units because it feels tradition-bound and visibly aggressive. The paper’s counter is that special teams is only about 15% of plays [PAGE 5] and that its per-play association with winning percentage is lower: offense 3.6 times and defense 2.6 times more impactful per play [PAGE 6]. The counter-trap is overgeneralization. If a coach reads the result as “special teams never matter,” the coach may underinvest in kicker quality, coverage discipline, and returner decision-making. The paper does not say special teams are irrelevant; it says the per-play average impact is smaller and the injury exposure is higher. The recursive part is that opponents can anticipate this. If one staff becomes systematically conservative on special teams, an opponent can attack that conservatism with return pressure, fake kicks, or directional punting. But the paper’s average EPA is not conditional on opponent strategy, so the counter-trap is not measured.

The clock is the missing state variable. The EP model is “solely based on starting field position” [PAGE 2-3], and the no-score filter is a coarse clock adjustment at the 5% threshold [PAGE 5]. In normal clock states, the paper’s per-play ordering is plausible. In crisis clock states — end of half, end of game, after a missed field goal with little time — the field-position-only EP can misprice the possession. A coach’s recursive model must therefore include three layers: the paper’s base rate, the opponent’s likely special-teams aggression, and the clock/score constraint. The paper’s recommendation that “starters on offense and defense should generally not be used on special teams” [PAGE 6] is a general-equilibrium statement; it is not a late-game onside-kick or field-goal-block instruction. The theory-of-mind failure mode is to let a general per-play average override a specific clock state where a single special-teams play has disproportionate leverage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical and biomechanical veto is a scope veto. The paper’s estimand is points per play from field position and its regression estimand is winning-percentage association. It does not estimate injury hazard. Yet the conclusion says special teams has “a significantly higher per-play injury rate; therefore, starters on offense and defense should generally not be used on special teams” [PAGE 6]. That “therefore” requires an external biomechanical premise. If the per-play injury hazard for a starter on special teams is sufficiently high relative to the incremental winning-percentage association, the recommendation stands; if the hazard is not higher, the recommendation loses its stated rationale. The paper asserts the hazard [PAGE 1, PAGE 6] but does not provide a play-level injury model. The veto proof is therefore: the paper’s coefficient cannot adjudicate a starter-usage decision without a hazard layer, because the coefficient is measured in points and winning percentage, while the cost is measured in injury probability and future availability.

The weather veto is a support-boundary veto. The field-goal model includes “kick distance and wind speed” [PAGE 4], but the EP model itself is pooled over weather and does not condition on wind, temperature, precipitation, altitude, or surface. Extreme wind or cold can move both the make-probability surface and the field-position EP mapping outside the fitted support. If the regression plane is linear in wind speed, it can also predict probabilities outside \([0,1]\) at extreme values. The kickoff baseline of 25.52 yards [PAGE 3] and the punt two-yard smoothing window [PAGE 3-4] are likewise pooled estimates. The cross-layer veto is: in extreme weather, the STPI coefficient should not be treated as transportable without re-estimating the EP and make-probability surfaces. The physical layer — ball flight, footing, return speed, collision mechanics — can dominate the average field-position effect. This is not a rejection of the paper; it is a boundary condition on its use.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Injury-hazard counterfactual veto. Verifiable test: estimate per-play injury hazard for starters on special teams versus starters on offense and defense using play-level snap counts and injury reports. The paper’s recommendation depends on the claim of “a significantly higher per-play injury rate” [PAGE 1, PAGE 6]. Prediction: if the estimated hazard ratio is near 1 or below, the paper’s starter-usage conclusion is vetoed even though the STPI coefficient remains 0.02877 [PAGE 6]. If the hazard ratio is materially above 1, the recommendation survives and the coefficient ordering is only one input.

2. Kickoff-rule counterfactual veto. Verifiable test: rerun the kickoff EPA and STPI pipeline on 2024-2025 data under the new rule that moves touchbacks to the 30-yard line [PAGE 7]. The historical baseline is the 25.52-yard average from 2016-2022 [PAGE 3]. Prediction: if returns increase and kickoff EPA variance rises, the kickoff unit’s standardized contribution and the STPI coefficient will shift; the historical per-play ratio of 3.6 and 2.6 [PAGE 6] will not be transportable without re-estimation. If the new kickoff EPA distribution is statistically indistinguishable from the old one, the rule-change veto fails.

3. Unit-disaggregation counterfactual veto. Verifiable test: use tracking data to separate kicking units from return units, as the paper proposes [PAGE 6], and estimate separate coefficients for kickoff coverage, kickoff return, punt coverage, punt return, and field-goal/extra-point units. Prediction: if the separated unit EPAs are weakly correlated or have opposite signs, the equal-weight STPI sum [PAGE 5] will hide offsetting effects, and the 1.9% RMSE improvement from 0.107 to 0.105 [PAGE 5] will shrink or become unstable. If the separated unit coefficients are similar in sign and the STPI increment persists, the aggregation veto fails.
</RLVR_COUNTERFACTUAL_VETOES>
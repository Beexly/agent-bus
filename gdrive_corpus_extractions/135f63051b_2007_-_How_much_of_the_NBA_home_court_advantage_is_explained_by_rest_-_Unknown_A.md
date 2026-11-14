---
source: "2007 - How much of the NBA home court advantage is explained by rest - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 7594
---

<NATIVE_REASONING>
We need answer user. Need produce deep XML sections >=1000 words. Must follow invariants: no betting lines/odds? Careful: source includes odds ratios exp(beta). Invariant #1 "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." But source uses odds of winning. Need not mention betting odds? We can discuss probability/log-odds? Hmm "odds" might be forbidden even statistical odds? It says betting lines, never mention spreads totals moneylines or odds. Could avoid word "odds" and betting context. But source page 14 has "odds" and exp(beta). Need cite exact quote? Maybe we can quote source? Invariant says cite verbatim quotes when source pages provided. But if quote contains "odds" violates? Need balance. We can avoid quoting that line; cite other exact quotes. But source operators include logistic expit model; we can discuss logit coefficients and exponentiated coefficients as multiplicative effects on win probability chance? We can call "multiplicative change in the chances" but not odds. Need not mention betting. However exact quote on page 14 includes "odds". Better not verbatim quote "odds". We can cite page 13 logistic equation and page 14 coefficients as numeric. We can say "exponentiated coefficient 0.62" without labeling odds. But expit model is log-odds. Hmm "odds" in statistics. The invariant likely targets betting. But says never mention odds. Must obey literal: no word odds. Use "logit" and "expit"; "multiplicative factor on the win-probability scale via logit." Avoid "odds ratio". For exp(beta), say "exponentiated logit coefficient" and "multiplicative factor in the logit link." Do not call odds. Need no spreads? Source margin of victory not spread. Margin is fine? Invariant says never mention spreads. "Margin of victory" is a game result, not betting spread. It's okay? Maybe avoid "spread" word. Use "home margin" or "point differential." No "totals", "moneylines".

Need answer with exact XML sections. Desired oververbosity 5, but need >=1000 words and sections with >=400 THINK_TRACE. Need include formal LaTeX, units, page citations, breakdown. Need RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES with 3 verifiable scenarios + predictions. Need entirely based on source. Need perhaps identify unknown authors? Source says Oliver Entine, Dylan Small. Need no external? Can cite source. Need perhaps "DRIVE SOURCE" maybe file path. Need not mention gambling.

Need construct robust response.

Let's parse source details:
- Page 1 authors.
- Page 2 home winning % NBA 0.608, NFL etc. Avoid odds. Winning % is probability/frequency.
- Page 3 possible sources.
- Page 4 literature Manley/Oliver playoff vs regular no big diff; Oliver estimated ~1% less.
- Page 5 distribution rest home/away 1999-2000: home rest 0 0.14 away 0.33, 1 0.59/0.47, 2 0.18/0.13, 3 0.06/0.05, 4+ 0.04/0.03. Note rows sum? home .14+.59+.18+.06+.04=1.01 (rounding); away 1.01. Mention rounding.
- Page 6 data 1999-2000; questions.
- Page 7 home teams won 61.7%; avg margin 3.62 points.
- Page 8 model: Y_ij = margin when i home vs j. Y_ij = theta_i - theta_j + delta_i + beta_1 I(Home Rest=0)+ beta_2 I(Home Rest=1)+ beta_3 I(Home Rest=2)+0*I(Home Rest>2) - beta_1 I(Away Rest=0) - beta_2 I(Away Rest=1) - beta_3 I(Away Rest=2) + 0*I(Away Rest>2)+ e. Need check sign: In source equation has beta terms? It says " - [Away Rest 0] ..." with beta? Text: 
Y = theta_i - theta_j + delta_i + beta1[Home Rest=0]+ beta2[Home Rest=1]+ beta3[Home Rest=2]+0*[Home Rest>2] - beta1[Away Rest=0] - beta2[Away Rest=1] - beta3[Away Rest=2] + 0*[Away Rest>2] + e. 
Page 9 estimates beta1 -2.26, beta2 -1.09, beta3 -0.58. Wait if beta1 negative and home rest=0 term beta1*I, away rest=0 minus beta1 = +2.26 for away zero? But effect of having 3+ rest vs back-to-back estimated 2.26 points. Need interpret beta as effect of rest zero compared to 3+; since negative. For away rest zero, subtract negative yields positive? Hmm if home team back-to-back (rest 0), beta1 negative reduces home margin by 2.26 relative to rest >2. If away team back-to-back, -beta1 = +2.26 increases home margin, i.e., away disadvantaged by 2.26. Good. So effect of rest 3+ vs back-to-back = 2.26 points for either team? For home back-to-back penalty is -2.26; for away back-to-back, home margin increases +2.26, equivalent away penalty 2.26. Good.

- Page 9 only back-to-back vs 3+ significant p=0.05. beta2 -1.09 p=.34; beta3 -.58 p=.63. 
- Page 10 RMSE=11.39 points; normality reasonable.
- Page 11 home court advantage = 3.62 points. Counterfactual equal rest distribution. Average home court advantage = Mean(delta_i). Point estimate 3.31, 95% CI (2.63,3.99). Different rest distributions account for 9%. Wait if actual HCA 3.62 and equal rest 3.31, difference .31 / 3.62=8.6% ~9.
- Page 12 road trip length: gamma_hat=-0.25, 95% CI (-0.78,0.28). Away teams actually do better longer on road but not significant. Need sign: gamma negative means longer road trip reduces home margin? Since Y home margin; if gamma negative, longer away road trip reduces home margin, so away better. Explain carefully.
- Page 13 logistic model for P(Y_ij=1) with expit, same terms. 
- Page 14 exponentiated coefficients: exp(beta1)=0.62 CI (0.39,1.00), exp(beta2)=0.76 (0.48,1.20), exp(beta3)=0.74 (0.45,1.22). Only back-to-back vs 3+ significant. Need avoid odds. We can phrase "multiplicative factor on the link scale" or "exponentiated logit coefficient." But if explaining "multiply the chances" may be inaccurate. Use "exp(\hat\beta_1)=0.62 is the multiplicative change in the modeled win probability's logit relative to 3+ days." Actually exp(beta) is odds ratio, but to avoid word, say "logit-scale contrast corresponds to exponentiated value 0.62". Need mention cannot interpret as direct probability multiplier; this is important. Could say "on the probability scale, this is not a constant multiplier; it shifts the logit by \hat\beta_1." Good.

Need include formal LaTeX equations. Use units: margin points (points), rest in days, indicators dimensionless, theta/delta/beta in points for linear model; e Normal with variance points^2, RMSE points. Logistic model coefficients in logit units; probabilities dimensionless; expit. Assumptions: additive team strengths, common home advantage delta_i? Actually delta_i team-specific HCA? Model says home court advantage for team i if home rest=away rest. But in estimation maybe delta_i? Need note: page 8 says delta_i = home court advantage for team i if home rest = away rest. But page 11 uses Mean(delta_i) as average HCA. They may estimate team strengths and HCA? Need maybe random effects future. The model includes team-specific delta_i. In linear model, Y_ij = theta_i - theta_j + delta_i + rest terms + e. But page 11 "Mean(delta_i)" point estimate 3.31. Need note team-specific HCA. Could simplify to average delta. We should state assumptions exactly: additive strengths, shared rest coefficients for home and away via sign symmetry, no interaction rest x team, no road-trip in main rest counterfactual, residual Normal mean zero, constant variance? Page 10 normality reasonable. Need mention singularity/breakdown regimes: Identifiability: theta_i - theta_j + delta_i has additive aliasing? Let's think. Model with team strengths theta and team-specific home advantage delta_i. For each team i home games: theta_i + delta_i; away games: -theta_j. There is potential non-identifiability: adding constant c to all theta_i and subtracting c? Let's inspect. Y_ij = theta_i - theta_j + delta_i + rest + e. If theta_i -> theta_i + c and delta_i -> delta_i - c? For game i home j: (theta_i+c) - (theta_j+c) + (delta_i-c) = theta_i - theta_j + delta_i - c? Wait theta_j also +c, so theta_i+c - theta_j - c = theta_i - theta_j, delta_i - c, so changes by -c. Not invariant. If theta_i -> theta_i + c for all i, theta_i - theta_j unchanged, delta unchanged. So theta has location nonidentifiability? Actually theta_i + c all i leaves differences unchanged; model uses only differences, so overall location of theta not identifiable. Need set sum theta=0 or mean 0. Delta_i maybe identifiable as home advantage. Another aliasing: add a to all delta? No because no away delta? Home games get delta_i, away games not. But Y symmetric? Could shift theta_i and delta_i? Let's derive more. For home i vs j: theta_i - theta_j + delta_i. For reverse home j vs i: theta_j - theta_i + delta_j. Equation includes only delta for home team. Can we transform theta_i -> theta_i + c_i? Then theta_i - theta_j changes by c_i - c_j. Need delta_i -> delta_i - c_i + c_j? But delta_i must compensate for home i against all j: for game i home j, add c_i - c_j + delta'_i - delta_i =0 => delta'_i = delta_i - c_i + c_j, depends on j if c_j varies. Not possible unless c_j constant. So only global location. Also rest coefficients: if all teams always rest >2 baseline; indicators identify contrasts. If no variation in rest categories, beta nonidentified; standard.

Singularity breakdown: linear model can produce negative predicted margins, but residuals normal; RMSE 11.39 points vs HCA 3.62; noise dominates. The counterfactual "equal distribution" is model-based standardization, not causal randomization; breakdown if rest assignment correlated with unobserved team quality, schedule, injuries, travel, opponent strength; small sample one season; beta estimates significant only one category; multicollinearity between rest and home/away/road trip; logistic link extrapolation with expit; small number of rest 0 away games? Page 5 away rest 0 0.33 of games so not tiny. But one season 1999-2000. Future research more seasons, random effects.

Need perhaps "retrocausal genealogy": historical/scientific lineage and multi-week traps. Need discuss lineage from home advantage literature, Manley/Oliver, rest/travel, causal decomposition via standardization, random effects, schedule. Multi-week traps: using one season, confounding rest with schedule, regular season vs playoffs, road trip length, rest pattern, team strength. Need be careful not external? Can mention "lineage" from source: page 4 cites Martin Manley and Dean Oliver; page 2 pro sports comparisons; page 16 future research. Could connect to causal inference: counterfactual distributional standardization. No external names? It's okay to mention generic. Need multi-week traps: "If one tracks weekly, don't mistake 9% as universal; it is season-specific; rest effects only back-to-back significant; road trip sign negative but CI includes zero; home advantage remains." "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need interpret? This seems prompt flavor requiring psychological/strategic modeling? For sports research paper, "crisis habit regression vs counter-trap vs clock" maybe need apply to teams/analysts? Need produce content: recursive theory of mind: how coaches/players/analysts reason about rest, home advantage, schedule. Crisis habit regression = teams over-attribute to rest, chase rest, or away teams assume fatigue; counter-trap = if opponent expects fatigue, adjust rotations; clock = game/season timing. Need keep tied to evidence: rest explains only 9%, back-to-back 2.26 points vs HCA 3.62; road trip not significant; so avoid overreaction. Need maybe mention "multi-week traps" in genealogy.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need discuss physical/biomechanical/weather factors as potential vetoes to rest explanation. Need not invent ratios. Need formal: if unobserved biomechanical load B or travel T correlates with rest R and outcome Y, the estimated beta is biased: omitted variable bias = covariance(B,R)/variance(R) * effect? Need formal. Weather? Indoor NBA, weather could affect travel delays but not court. Need proof: rest effect cannot be interpreted as pure physiological; biomechanical load (minutes, injuries, fatigue) and travel (weather delays) can confound; but because HCA remains 3.31 points under equal rest, rest cannot explain most HCA. Need "veto proof": if physical load differences are larger than rest, then point estimate 9% is lower bound? Actually not necessarily. Need define veto: Any alternative explanation must both correlate with rest distribution and produce >3.31 point residual HCA? Let's reason. The decomposition: observed HCA 3.62; counterfactual equal rest HCA 3.31. Rest's explained portion = 0.31 points (9%). For physical/biomechanical/weather to "veto" conclusion, they'd need to explain the remaining 3.31 or alter rest assignment. But rest is just schedule; biomechanical load is not measured. If biomechanical load is caused by rest, then part of rest effect includes it; if independent, it's part of residual. Weather can affect travel and rest; indoor game not direct. Need "veto proof" maybe logical: the conclusion "rest explains little" is robust to any factor that does not change the counterfactual equal-rest distribution. Cross-layer veto only if the factor invalidates the model's additivity/ignorability. Need state exact breakdown regimes: small sample, omitted variable bias, nonrandom rest, model misspecification, nonlinearity. Need include equations for omitted variable bias and standardization. Need not overcomplicate.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe "reinforcement learning with verifiable rewards"? Need produce counterfactual veto scenarios with predictions based on source. Need 3 scenarios and predictions. They should be verifiable: e.g., (1) Re-run on additional seasons with same model; prediction: rest still accounts for small share (<~15-20%?) Need not overstate; source future research. Prediction: back-to-back coefficient remains largest magnitude and only one likely significant; equal-rest HCA remains near 3+ points. (2) Include road-trip length in model; prediction gamma CI includes zero and does not overturn 9%. (3) Equalize rest distribution in a randomized schedule (or simulate) and evaluate home margin; prediction HCA drops by ~0.31 points (from 3.62 to 3.31), not eliminated. Need "veto" means scenario where if observed, would veto theory. Need "verifiable RLVR veto scenarios": maybe "If expanding to more seasons shows rest explains >50% HCA, veto; if back-to-back effect vanishes, veto; if road trip length significant and large, veto." Need predictions. Need precise. Could phrase as "veto condition" and "prediction under source model." Need 3.

Need ensure >=1000 words. Let's craft maybe ~2000-2500 words. XML only? The answer should be XML sections. No markdown? Can include LaTeX. Need exact section tags. Ensure THINK_TRACE >=400 words. Other sections can be shorter but total >1000. Need include citations [PAGE N] and verbatim quotes. Need include exact quotes from source. Need avoid "odds". But page 14 exact quote includes "odds"; avoid. Need quote page 15 summary exact: "Rest does not explain much of the home court advantage." etc. Page 11 exact: "is estimated to only account for 9% of the home court advantage." Page 7 exact: "Home teams in the 1999-2000 season won 61.7% of the time." Page 9 exact: "Only the back to back vs. three or more days effect is statistically significant." Page 12 exact: "The point estimate is that away teams actually do better the longer they have been on the road but it is not statistically significant." Page 13 equation. Page 8 equation. Page 14 numbers no quote word odds. Need quote page 10: "Root Mean Square Error = 11.39 points." Good.

Potential issue: "odds" appears in source page 14 but we won't quote. "spreads" not. "totals" not. "moneylines" not. "betting" not. Good.

Need use "home margin" not "margin of victory"? Margin is okay but "spread" forbidden. Avoid "point spread." Use "point differential" and "margin" but not "spread." "Margin of victory" from source is okay? It's not betting line. But to be safe, use "home point differential" and quote "margin of victory" maybe source exact. Invariant says never mention spreads, totals, moneylines, odds. Margin of victory is not those. Fine.

Need no "odds" even in "odds ratio"—avoid. But logistic model uses "logit" which is log-odds. Does "logit" imply odds? Maybe acceptable. Could say "logit link" and "expit". Need not explain logit as log-odds. But formal "expit(x)=e^x/(1+e^x)" from page 13. We can call coefficients "logit-scale." Good.

Need "units SI/information/probability units": For linear: points, days. For logistic: probability dimensionless; logit coefficients dimensionless? Actually logit is dimensionless. Use "dimensionless logit units." For information? Maybe mention "reduction in uncertainty" no. Could mention "all probabilities in [0,1], dimensionless." Need "SI" maybe points not SI. We can state "sports points (not SI), rest in days; probabilities dimensionless." That satisfies.

Need "exact singularity/breakdown regimes": In SOURCE_OPERATORS: list:
- Location nonidentifiability of theta: adding constant to all theta leaves predictions unchanged; fix mean theta=0.
- Indicator collinearity if a rest category absent; baseline >2 days.
- Team-specific delta_i with one season and finite games; if a team never hosts under certain rest, delta-rest interaction nonidentified.
- Logistic separation if a team wins/loses all home games under a rest category; expit saturation; exponentiated coefficient unbounded.
- Causal breakdown if rest assignment not ignorable; omitted variables; model standardization invalid.
- Counterfactual equal distribution breaks if distribution support differs? Actually counterfactual uses reweighting; if away rest 0 0.33 and home 0 0.14; equalizing requires model extrapolation to home games with rest 0? It uses model predictions for home rest distribution set equal to home? Wait question: "If distribution of road team rest was set equal to distribution of home team rest" page 6. Page 11: "What would happen if the home team and road team had same distribution of rest?" It likely uses reweighting to home distribution. The model has both home and away rest effects. If equalized to home distribution, away rest 0 decreases from .33 to .14, so less away disadvantage, HCA lower. Need no extrapolate beyond observed because home distribution values all observed. But if equalizing to away distribution, home rest 0 increases, also lower HCA? Actually if both equal, difference in rest distributions removed; average home advantage = mean delta. Model-based. Need mention.

Need "CROSS_LAYER_VETO_ADJUDICATION": Could include formal omitted variable bias:
Let true model \(Y = \theta_i-\theta_j+\delta_i+\beta R_{\text{home}}-\beta R_{\text{away}}+\eta B+\epsilon\), where \(B\) biomechanical load. OLS on restricted model yields \(\hat\beta = \beta + \eta \frac{\mathrm{Cov}(R,B)}{\mathrm{Var}(R)}\) (for simple). If B not correlated with R conditional on team, no bias. Weather travel delay W affects R and B; if W affects outcome only through R, not veto; if W directly affects performance (e.g., travel delays) and correlated with R, then bias. Indoor NBA: weather direct effect minimal; travel delay affects rest and load. But the 9% is one-season estimate; a cross-layer veto would require a model with B to show rest coefficient changes enough to explain >0.31 points? Actually to overturn "not much" require rest+load share large. Need say physical/biomechanical/weather veto proof: The paper does not measure these, so it cannot claim pure rest physiological mechanism; it can claim schedule-rest distribution explains little of HCA under model. That is robust because even if rest coefficient is underestimated? Hmm if true rest effect larger, equalizing would explain more. But current CI? The point estimate of HCA equal rest 3.31 (2.63,3.99). Difference from 3.62 is 0.31; CI for equal-rest HCA includes 3.62? 3.62 within CI (2.63,3.99). So statistically rest could explain 0? The 9% is not precise. Need mention CI means uncertainty; cannot rule out small/zero. A veto proof: if a physical variable changed the rest coefficient to large, CI already allows? The CI for beta1 -2.26 SE 1.17, so 95% approx (-4.6,0.08) if normal; effect could be up to ~4.6 points? Wait beta1 negative; magnitude CI 0 to 4.6. So rest could be larger. But only 9% estimate. Need be precise: The 9% is point estimate; uncertainty in beta means rest share could be larger. Cross-layer veto: physical/biomechanical/weather can invalidate causal interpretation but not the algebraic decomposition within model. The evidence is not a proof of no physiological effect; it is a proof that schedule rest alone explains little in this season.

Need "RETROCAUSAL_GENEALOGY": Maybe discuss lineage: from descriptive home advantage in pro sports (page 2), to possible sources (page 3), to previous literature Manley/Oliver (page 4), to rest distribution (page 5), to regression decomposition (pages 8-12), to future research (page 16). Multi-week traps: treating one season as stable; regular season vs playoffs; rest categories; road trip length; team strengths; random effects. Need mention "retrocausal" because future research page 16 anticipates later multiseason/random-effects/rest-pattern studies. We can say the paper's own future-research list retroactively defines the validity conditions. Multi-week traps: schedule cycles, back-to-backs cluster, road trips, holidays, injuries. Need not cite external.

Need "RECURSIVE_THEORY_OF_MIND": Need adapt. It asks "Crisis habit regression vs counter-trap vs clock." We need define:
- Crisis habit regression: after a back-to-back loss, teams/analysts overfit to rest, ignoring HCA and noise. Evidence: rest effect 2.26 vs HCA 3.62; RMSE 11.39; only one rest contrast significant. So crisis habit regression is a trap.
- Counter-trap: if opponent expects you to be fatigued, they may over-press or change rotation; but data road trip negative not significant; away teams do not worsen with longer road trip. Counter-trap: don't over-adjust to rest; model says equalizing rest only removes 9%.
- Clock: season clock and game clock; rest distribution is scheduling clock. Need "recursive theory of mind" maybe second-order: Team A thinks Team B thinks Team A is tired. Evidence does not support strong strategic exploitation because rest effect small. Need mention "multi-week traps" maybe.

Need "RLVR_COUNTERFACTUAL_VETOES": Three verifiable scenarios:
1. Multi-season replication: If in expanded seasons, model with equal rest distribution reduces HCA by >50% or point estimate equal-rest HCA <2.0 points, veto. Prediction from source: rest share remains roughly small (single-digit to low double-digit %); back-to-back coefficient remains largest and negative; equal-rest HCA stays near 3+ points. Maybe not overclaim exact. We can state "prediction: point estimate remains closer to 9% than 50%, with back-to-back contrast significant or near." Verifiable.
2. Add road-trip length and rest-pattern variables: If gamma becomes large and significant (e.g., CI excludes 0 and magnitude >1 point) and rest share rises, veto. Prediction: gamma CI includes 0 around -0.25 (-0.78,0.28), does not overturn 9%; rest-pattern may improve fit but not HCA share.
3. Randomize/equalize rest distribution via schedule simulation or natural experiment: If HCA remains 3.62 after equal rest, veto; prediction HCA drops by ~0.31 points to ~3.31 (CI 2.63,3.99), not to zero. Need "verifiable" with metrics. Maybe "if equal-rest counterfactual HCA >3.5 or <3.1"? Hmm prediction. Need use source estimates. Use "prediction: observed drop ~0.31 points (9%), not >1.8 points (50%)." Good.

Need maybe include "RLVR" acronym? We can define as "counterfactual veto tests with verifiable predictions." No need.

Need ensure no "odds" word. I must scan final. Also no "spread", "total", "moneyline", "betting". Avoid "against the spread". Use "point differential." The source quote page 8 "Margin of victory" includes margin; okay. "odds" not. "logit" okay. "expit" okay. "exponentiated coefficient" okay. Do not say "odds ratio." Good.

Need include exact [PAGE N] markers and verbatim quotes. Use quotes:
- [PAGE 2] "The home advantage in basketball is the biggest of the four major American pro sports."
- [PAGE 4] "Oliver estimated that the home court advantage is about 1% less in the playoffs." (uses %)
- [PAGE 5] "Away teams are much more likely to play back to back games, and are less likely to have two or more days of rest."
- [PAGE 7] "Home teams in the 1999-2000 season won 61.7% of the time." and "The average margin of victory for home teams was 3.62 points."
- [PAGE 9] "Only the back to back vs. three or more days effect is statistically significant."
- [PAGE 11] "is estimated to only account for 9% of the home court advantage."
- [PAGE 12] "The point estimate is that away teams actually do better the longer they have been on the road but it is not statistically significant."
- [PAGE 15] "Rest does not explain much of the home court advantage."
Need no quote page 14 with "odds". Could quote numbers not sentence. Page 14 exact: "Playing back to back games compared to having three or more days rest is estimated to multiply the odds..." Cannot. So cite [PAGE 14] for numeric exp values without quote. Is that allowed? We can say "Page 14 reports \(\exp(\hat\beta_1)=0.62\), ..." not verbatim. Good.

Need formal equations. In XML, LaTeX can include < >? Need escape? XML text can contain < and > but tags? LaTeX uses < maybe not. Avoid less-than in text or escape. Use \(\le\) not <. Need not use raw <. For equations with I(Home Rest=0), parentheses fine. Use \mathbf{1}\{...\}. Avoid curly braces? XML text can contain braces. Ampersands? Avoid & or escape. Use "and" not &. Need no unescaped < or >. Use \(>2\)? Contains > okay? In XML text, > is allowed, < is not. But to be safe use \(\mathrm{Rest}_{H}>2\)? > is okay. But if inside text, > fine. Avoid < by using \le. For rest categories use "0,1,2,3+" no <. Need no &. Good.

Need maybe include equations with \[ ... \]. XML okay.

Need include "SI/information/probability units": State:
- \(Y_{ij}\) in points; \(\theta,\delta,\beta,e\) in points; \(\mathrm{Var}(e)\) in \(\mathrm{points}^2\); RMSE 11.39 points.
- Rest indicators dimensionless with rest in days.
- \(P(Y_{ij}=1)\in[0,1]\) dimensionless; logit coefficients dimensionless; expit.
- No information-theoretic units used; if treating win probability, log-loss nats? We can mention "probabilities are dimensionless; logit scale is dimensionless." Avoid fake.

Need "assumptions" list. Good.

Need "breakdown regimes" in SOURCE_OPERATORS. Need include "exact singularity" as above.

Let's draft. Need count words. Likely >2500. Let's structure:

<THINK_TRACE>
Multi-hop derivation: Start with page 7 HCA 3.62. Model page 8. Rest distribution page 5. Estimate beta page 9. Counterfactual page 11. Equation for explained share: \(\hat S_R = (\bar Y_H - \bar{\delta})/\bar Y_H = (3.62-3.31)/3.62 = 0.0856 ≈ 8.6%\), reported 9% [PAGE 11]. Need note rounding. Then logistic page 13-14. Road trip page 12. Audit gray zones: one season, only one significant contrast, CI, RMSE 11.39, team-specific delta, normal residual, equal rest counterfactual model-based, not causal randomization. Need >400 words. Use exact quotes. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations with citations. Linear model. Logistic. Counterfactual. Units. Assumptions. Breakdown/singularity. Include exact singularities. This can be ~600 words.

<RETROCAUSAL_GENEALOGY>
Lineage and multi-week traps. ~250 words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit vs counter-trap vs clock. ~250 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Formal omitted variable. ~300 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios and predictions. ~300 words.

Total >2000. Need ensure all sections exact tags. No markdown outside? Use XML. Final only XML.

Need be careful with "odds" word: avoid. Use "win probability's logit." The word "logit" technically includes odds but not the string. Fine.

Need maybe "home court advantage" phrase okay. "advantage" not betting. 

Need include "exact [PAGE N] markers" in each? Yes.

Potential issue: In linear model equation, page 8 source has \(Y = ...\) and \(\delta_i\) but in page 11 average home court advantage = Mean(\(\delta_i\)). Need write:
\[
Y_{ij} = \theta_i-\theta_j+\delta_i + \beta_1 I(H_i=0)+\beta_2 I(H_i=1)+\beta_3 I(H_i=2)+0I(H_i>2) - \beta_1 I(A_j=0)-\beta_2 I(A_j=1)-\beta_3 I(A_j=2)+0I(A_j>2)+e_{ij}.
\]
Need define \(H_i\) = home team i rest days, \(A_j\)=away team j rest days. Wait source uses \(I(Home Rest=0)\) etc. Good.

But sign: If beta1 negative, away rest 0 term -beta1 positive; okay.

Logistic:
\[
P(Y_{ij}=1)=\mathrm{expit}\{\theta_i-\theta_j+\delta_i+\beta_1 I(H_i=0)+... - \beta_1 I(A_j=0)-...\}
\]
with expit. Good.

Counterfactual:
\[
\widehat{\mathrm{HCA}}_{\text{equal rest}} = \frac{1}{n}\sum_i \hat\delta_i
\]
or mean delta. Page 11 says Mean(delta_i) point 3.31 CI (2.63,3.99). Explained share:
\[
\hat S_R = \frac{3.62-3.31}{3.62}=0.0856\approx 9\%.
\]
Need if using 3.62 and 3.31. Good.

Road trip:
\[
Y_{ij}=...+ \gamma T_j + e_{ij}
\]
where T_j length of away team's road trip? Actually model maybe added gamma? Page 12 only gamma. Use \(\hat\gamma=-0.25\), 95% CI (-0.78,0.28). Since Y home margin, negative means longer road trip reduces home margin (away teams do better), not significant. Good.

Omitted variable bias:
\[
\hat\beta_R = \beta_R + \gamma_B \frac{\mathrm{Cov}(R,B)}{\mathrm{Var}(R)}
\]
in simple regression. Need units? If B in arbitrary units, gamma_B points per B. It's formal. Good.

Veto proof: A cross-layer factor \(B\) (biomechanical load) or \(W\) (weather/travel) vetoes only if (i) correlated with rest schedule and (ii) independently affects Y enough to change the rest coefficient or the equal-rest HCA by material amount; if it operates through rest, it is part of rest pathway; if independent, it is residual HCA. Indoor NBA means weather direct court effect minimal; travel delay can affect rest. The model's 9% is model-based; the paper does not measure B, so cannot claim pure physiology. But the conclusion "schedule rest distribution explains little" is robust in the sense that equalizing rest changes only 0.31 points; a physical veto must show model misspecification or omitted variable bias of order >? To overturn "not much" say >1.81 points (50%). Need not use fake ratio. We can say "to make rest explain a majority, equal-rest HCA would need to fall below 1.81 points (because 3.62/2=1.81)." That's a derived threshold, not fake ratio. Good. Use "material" and threshold.

Need "exact singularity/breakdown regimes" in SOURCE_OPERATORS. Use bullet list? XML text can have hyphens. Fine.

Need "RLVR_COUNTERFACTUAL_VETOES": Need three "verifiable" scenarios. Let's write:
1. Multi-season replication veto: Fit same linear model to seasons beyond 1999-2000. Veto criterion: equal-rest HCA drop \(\ge 1.81\) points or \(\hat S_R \ge 0.50\) with CI excluding small share. Prediction: drop near 0.31 points / 9%, equal-rest HCA near 3.31 (CI 2.63,3.99); back-to-back remains largest.
2. Road-trip/rest-pattern expansion veto: Add road-trip length and last-4/5-day game counts. Veto criterion: \(\gamma\) CI excludes 0 with magnitude >1 point and rest share rises materially. Prediction: \(\hat\gamma\) remains near -0.25 with CI including 0 (-0.78,0.28); rest share does not overturn 9%.
3. Randomization/equalization natural experiment veto: Use schedule changes or simulated equal rest distribution. Veto criterion: HCA remains near 3.62 after equalizing rest, or equal-rest HCA <2.0. Prediction: HCA falls by ~0.31 to 3.31, not to zero. Hmm "remains near 3.62" would support no rest; but source predicts 3.31. Veto condition should be if HCA drop >1.81 or if no drop. Need phrase: "Veto if equal-rest HCA falls below 1.81 (rest majority) or stays above 3.55 (rest negligible beyond sampling). Prediction 3.31." Good.
Maybe need "predictions" for each. Good.

Need "RETROCAUSAL_GENEALOGY" maybe use "retrocausal" as "future research list retroactively defines traps". Include multi-week traps:
- Week-to-week schedule clustering: back-to-backs and road trips not independent; team strengths and home advantage estimated from same games; using weekly splits may create false crises.
- Playoffs vs regular: page 4 says no big difference, Oliver 1% less; don't extrapolate playoffs.
- Rest category 3+ collapsed; 4+ small; small sample.
- Road trip length sign negative but not significant; don't overinterpret as "road teams improve."
- Team-specific HCA and random effects future.

Need "RECURSIVE_THEORY_OF_MIND": Need maybe address "crisis habit regression" as a term. Let's define:
- Crisis habit regression: after a fatigue-related loss, staff/analysts regress to rest as master cause; source shows rest only 9%, back-to-back effect 2.26 vs HCA 3.62, RMSE 11.39; so crisis habit overweights a real but small signal.
- Counter-trap: Opponent expects fatigue and overplays; but if away team on long road trip actually does better (not significant), counter-trap is not evidence-based; the robust counter is to not over-adjust, because equal rest leaves 3.31 HCA.
- Clock: season clock creates rest distributions; game clock decisions; recursive: Team A believes Team B believes A is tired; data says the strategic edge is smaller than HCA and noise. Need mention "clock" maybe "the schedule clock is the causal variable, not perceived fatigue." Good.

Need no "betting lines" etc. Use "chance" maybe okay. "win probability" okay.

Need include "PAGE 14 reports \(\exp(\hat\beta_1)=0.62\)..." no quote. Need define exponentiated coefficient: "on the logit scale, a back-to-back home team has a negative shift; the exponentiated value is 0.62, with CI (0.39,1.00)." Wait if beta1 negative, exp(beta1)<1. Good. "This is not a direct probability multiplier." Good.

Need ensure "logit" not "odds." Good.

Potential problem: Source page 14 says exp(beta1)=0.62 (0.39,1.00). If we call "exponentiated logit coefficient" and not "odds ratio," okay. Need maybe say "multiplicative factor in the logit link" but exp(beta) is multiplicative factor for odds, not logit. Actually logit difference is additive beta; exp(beta) is multiplicative on odds. If I say "multiplicative factor in the logit link" that's wrong. Need avoid. Say "The exponentiated coefficient is 0.62; because the model uses the logit link, \(\hat\beta_1\) is an additive shift on the logit scale and \(\exp(\hat\beta_1)\) is the corresponding multiplicative factor for the model's transformed response." Hmm "transformed response" vague. Could say "for the model's link-transformed response" but that's odds. Maybe acceptable? Need not explain. Just state numeric exp values and that only beta1 significant. "On the probability scale, the effect is not constant." Good.

Need no word "odds" but "logit" is okay. Use "link-transformed response" avoids odds. Good.

Need "information units" maybe "logit units dimensionless; no nats/bits used." Good.

Need "SI/information/probability units" maybe mention "sports points (customary, not SI) and days (SI-compatible time unit); probabilities dimensionless; logit coefficients dimensionless." Good.

Need "exact singularity/breakdown regimes" with LaTeX:
- \(\theta_i\to\theta_i+c\) invariance.
- If \(\sum_i \theta_i\) not constrained, design matrix rank deficient by 1.
- If an indicator category has zero count, corresponding beta nonidentified.
- If team i never hosts, \(\delta_i\) nonidentified.
- Logistic complete separation: if \(P(Y=1)\to0\) or 1, MLE diverges; expit saturates.
- Causal: if \(R\) not ignorable, \(\hat\beta\) biased; equal-rest standardization invalid.
Good.

Need cite page 8 for model. Page 13 logistic. Page 10 RMSE. Page 16 future.

Let's now compose final. Need no markdown. XML. Ensure no `&` characters. Use "and" instead. Use apostrophes okay. Need escape ampersand? None. Use `%` okay. Use `<`? Avoid. Use `\le`. Use `>` okay. In XML text, `>` is allowed. But if equation has `=>` maybe okay. Avoid `<`.

Need use `\mathrm{expit}` etc.

Need word count. Let's write substantial. Final answer only.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central multi-hop argument is a decomposition, not a claim that rest is irrelevant. First, the paper establishes the size of the phenomenon: home teams in the 1999-2000 NBA season won 61.7% of games and had an average home margin of 3.62 points [PAGE 7]. Second, it describes the schedule asymmetry: away teams are “much more likely to play back to back games, and are less likely to have two or more days of rest” [PAGE 5]. In the 1999-2000 rest table, the away team had zero days rest in 0.33 of games versus 0.14 for the home team, while the home team had one day rest in 0.59 versus 0.47 for the away team [PAGE 5]. Third, the paper fits a linear model for home margin \(Y_{ij}\) with team strengths \(\theta_i-\theta_j\), a home-court term \(\delta_i\), and signed rest indicators for home and away teams [PAGE 8]. The estimated rest coefficients are \(\hat\beta_1=-2.26\) with SE 1.17 and p-value 0.05, \(\hat\beta_2=-1.09\) with p-value 0.34, and \(\hat\beta_3=-0.58\) with p-value 0.63 [PAGE 9]. The paper states: “Only the back to back vs. three or more days effect is statistically significant” [PAGE 9]. Fourth, it performs a counterfactual standardization: if home and away teams had the same rest distribution, average home-court advantage would be 3.31 points, 95% CI (2.63, 3.99), versus the observed 3.62 points [PAGE 11]. The explained share is approximately \((3.62-3.31)/3.62=0.0856\), which is the reported “9% of the home court advantage” [PAGE 11]. Fifth, the paper checks road-trip length: \(\hat\gamma=-0.25\), 95% CI (-0.78, 0.28), and says “The point estimate is that away teams actually do better the longer they have been on the road but it is not statistically significant” [PAGE 12]. Sixth, the logistic win-probability model repeats the same signed rest structure using \(\mathrm{expit}\) [PAGE 13], and page 14 reports exponentiated coefficients \(\exp(\hat\beta_1)=0.62\), CI (0.39, 1.00); \(\exp(\hat\beta_2)=0.76\), CI (0.48, 1.20); and \(\exp(\hat\beta_3)=0.74\), CI (0.45, 1.22). Only the back-to-back contrast is statistically significant; this is a robustness echo, not a new causal result.

The gray-zone audit is essential. The 9% figure is a model-based standardization from one season, not a randomized experiment. The confidence interval for equal-rest home advantage, (2.63, 3.99), contains 3.62, so the data do not sharply pin down the exact share. The model assumes additive team strengths, a shared rest coefficient with symmetric home and away signs, and Normal residuals; page 10 reports “Root Mean Square Error = 11.39 points” and that the normality assumption “Appears Reasonable” [PAGE 10]. The residual scale is much larger than the 3.62-point home advantage and the 2.26-point back-to-back contrast. The team-specific \(\delta_i\) term and the single-season sample create estimation uncertainty. The road-trip coefficient is negative but compatible with zero. The paper’s own summary is deliberately narrow: “Rest does not explain much of the home court advantage” [PAGE 15]. It does not say rest has no physiological effect; it says the observed distributional difference in schedule rest explains little of the observed home advantage in this season. A valid audit must keep those two claims separate.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define \(Y_{ij}\) as the home margin in points when team \(i\) hosts team \(j\). Let \(H_i\) be home-team rest in days and \(A_j\) be away-team rest in days. Page 8 gives the linear model, written here with the page’s indicator structure:
\[
Y_{ij}
=
\theta_i-\theta_j+\delta_i
+\beta_1 \mathbf{1}\{H_i=0\}
+\beta_2 \mathbf{1}\{H_i=1\}
+\beta_3 \mathbf{1}\{H_i=2\}
+0\cdot \mathbf{1}\{H_i>2\}
-\beta_1 \mathbf{1}\{A_j=0\}
-\beta_2 \mathbf{1}\{A_j=1\}
-\beta_3 \mathbf{1}\{A_j=2\}
+0\cdot \mathbf{1}\{A_j>2\}
+e_{ij}.
\]
Here \(\theta_i\) and \(\theta_j\) are team strengths, \(\delta_i\) is the home-court advantage for team \(i\) when rest is equal, and \(\beta_1,\beta_2,\beta_3\) are the effects of zero, one, and two days rest compared with three or more days [PAGE 8]. Units: \(Y_{ij},\theta_i,\theta_j,\delta_i,\beta_k,e_{ij}\) are in basketball points; rest indicators are dimensionless and rest is in days; \(\mathrm{Var}(e_{ij})\) has units of points squared. Page 9 estimates \(\hat\beta_1=-2.26\), \(\hat\beta_2=-1.09\), \(\hat\beta_3=-0.58\), with the only statistically significant contrast being back-to-back versus three or more days [PAGE 9]. Page 10 reports an approximate prediction error, “Root Mean Square Error = 11.39 points” [PAGE 10].

The win-probability model on page 13 uses the same linear predictor through the \(\mathrm{expit}\) link:
\[
P(Y_{ij}=1)
=
\mathrm{expit}\left\{
\theta_i-\theta_j+\delta_i
+\beta_1 \mathbf{1}\{H_i=0\}
+\beta_2 \mathbf{1}\{H_i=1\}
+\beta_3 \mathbf{1}\{H_i=2\}
-\beta_1 \mathbf{1}\{A_j=0\}
-\beta_2 \mathbf{1}\{A_j=1\}
-\beta_3 \mathbf{1}\{A_j=2\}
\right\},
\]
where
\[
\mathrm{expit}(x)=\frac{e^x}{1+e^x}
\]
and \(Y_{ij}=1\) if the home team wins, zero otherwise [PAGE 13]. Units: probabilities are dimensionless in \([0,1]\); logit-scale coefficients are dimensionless. Page 14 reports \(\exp(\hat\beta_1)=0.62\), CI (0.39, 1.00); \(\exp(\hat\beta_2)=0.76\), CI (0.48, 1.20); and \(\exp(\hat\beta_3)=0.74\), CI (0.45, 1.22), with only the back-to-back comparison statistically significant. These exponentiated values are not direct probability multipliers; the model is nonlinear on the probability scale.

The counterfactual operator is distributional standardization. Let \(\hat\delta_i\) be the estimated equal-rest home-court term. Page 11 reports:
\[
\widehat{\mathrm{HCA}}_{\text{equal rest}}
=
\mathrm{Mean}(\hat\delta_i)
=
3.31,
\qquad
95\%\ \mathrm{CI}=(2.63,3.99),
\]
against observed \(\widehat{\mathrm{HCA}}=3.62\) [PAGE 11]. The explained share is
\[
\hat S_R
=
\frac{3.62-3.31}{3.62}
=
0.0856
\approx 9\%,
\]
matching “is estimated to only account for 9% of the home court advantage” [PAGE 11]. The road-trip extension reports \(\hat\gamma=-0.25\), 95% CI (-0.78, 0.28) [PAGE 12]. Since \(Y_{ij}\) is home margin, a negative \(\gamma\) means longer away-team road trips are associated with a lower home margin, i.e. away teams doing better, but the interval includes zero.

Assumptions and exact singularity regimes:
- Location nonidentifiability: adding a constant \(c\) to every \(\theta_i\) leaves \(\theta_i-\theta_j\) unchanged, so the design matrix is rank deficient by one unless a location constraint such as \(\sum_i\theta_i=0\) is imposed.
- Indicator nonidentification: if any rest category has zero observations for home or away teams, the corresponding \(\beta_k\) is not identified. The baseline is three or more days rest, so all contrasts are relative to that collapsed category [PAGE 8].
- Team-specific home terms: if a team never hosts, \(\delta_i\) is not identified. With one season, some \(\delta_i\) estimates are imprecise [PAGE 16].
- Logistic separation: if a team wins or loses all home games within a rest category, the likelihood can diverge and \(\mathrm{expit}\) saturates; exponentiated coefficients become unstable even though the linear model may be finite.
- Causal breakdown: the 9% standardization is valid only under the model and ignorability assumptions. If rest assignment is correlated with unobserved team quality, injuries, travel burden, or schedule difficulty, \(\hat\beta_k\) is biased and the equal-rest counterfactual is not causal. The paper itself lists future work on more seasons, random effects, and rest-pattern variables [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage moves from descriptive home-field comparison to a narrow causal decomposition. Page 2 compares professional sports and states, “The home advantage in basketball is the biggest of the four major American pro sports” [PAGE 2]. Page 3 lists candidate mechanisms: crowd support, comfort at home, referee benefit of the doubt, court familiarity, and “Different distributions of rest between home and away teams” [PAGE 3]. Page 4 connects to prior work by Martin Manley and Dean Oliver, including the claim that “Oliver estimated that the home court advantage is about 1% less in the playoffs” [PAGE 4]. That lineage matters because it warns against treating one regular-season estimate as universal. The paper then narrows to the 1999-2000 season and asks how much of home advantage disappears under equal rest [PAGE 6].

Retrocausally, page 16’s future-research list defines the traps that later analyses must avoid: more seasons, random effects for team strengths and home advantages, rest patterns such as games in the last four or five days, and other sources of home advantage [PAGE 16]. Multi-week traps include schedule clustering: back-to-backs and road trips are not independent week to week, so a short hot or cold stretch can be misread as a rest effect. Another trap is playoffs-versus-regular-season extrapolation: page 4 reports no big playoff difference, but the study itself focuses on the regular season. A third trap is collapsing “three or more days” into one baseline: the extreme contrast is back-to-back versus three-plus, while one-day and two-day contrasts are not statistically significant [PAGE 9]. A fourth trap is interpreting the negative road-trip point estimate as proof that long road trips help; page 12 explicitly says it is not statistically significant. The genealogical lesson is that the paper’s own uncertainty bounds are part of the result, not an afterthought.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive strategic layer has three modes. “Crisis habit regression” is the tendency of teams and analysts to over-learn rest after a visible fatigue loss. The source supports a real but bounded signal: back-to-back versus three-plus days is estimated at 2.26 points, while home advantage is 3.62 points and the prediction error is 11.39 points [PAGE 9][PAGE 10]. A crisis response that treats rest as the dominant cause is therefore a habit regression: it ignores the larger home term and the much larger residual variation. “Counter-trap” is the opposing over-adjustment: if an opponent believes you are fatigued, you might expect them to over-press or change rotations. But the data do not support a large road-trip deterioration; page 12 says away teams actually do better the longer they have been on the road, though not significantly. The evidence-based counter-trap is to avoid over-adjusting to perceived fatigue because equalizing rest leaves a 3.31-point home advantage [PAGE 11]. “Clock” is the schedule and game timing layer: rest is a clock variable measured in days, and road-trip length is another clock variable. Recursively, Team A may think Team B thinks Team A is tired; the model says the strategic effect of that belief is smaller than the home-court term and the noise scale. The safe theory of mind is therefore conservative: respect back-to-back effects, but do not let second-order fatigue narratives erase the 3.62-point home advantage or the 9% rest share.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical, biomechanical, or weather layer can veto a purely schedule-rest interpretation if it changes the model’s identifying variation. Suppose the true outcome includes biomechanical load \(B\) or weather-travel delay \(W\):
\[
Y_{ij}
=
\theta_i-\theta_j+\delta_i
+\beta_R R_{ij}
+\eta B_{ij}
+\lambda W_{ij}
+e_{ij}.
\]
If the estimated model omits \(B\) or \(W\), the simple omitted-variable bias for the rest coefficient is
\[
\widehat{\beta}_R
=
\beta_R
+\eta\frac{\mathrm{Cov}(R,B)}{\mathrm{Var}(R)}
+\lambda\frac{\mathrm{Cov}(R,W)}{\mathrm{Var}(R)}.
\]
Thus a biomechanical veto requires both correlation with the rest schedule and an independent effect on the home margin. If \(B\) is caused by rest, it belongs to the rest pathway and the 9% is a schedule-rest share, not a pure physiological share. If \(B\) is independent of rest, it is part of the residual home advantage and does not overturn the decomposition. Weather is a weaker direct veto in an indoor sport, but weather-driven travel delays can affect rest and load; that is a travel-layer confound, not a direct court-weather effect.

The cross-layer proof is therefore conditional: the paper does not measure biomechanical load, injuries, minutes, or travel delays, so it cannot claim that rest is the whole physiological mechanism. But the paper’s narrow conclusion is robust to layers that do not alter the equal-rest standardization: equalizing the observed rest distributions changes the model-based home advantage from 3.62 to 3.31 points, a 0.31-point drop [PAGE 11]. To make rest explain a majority of the 3.62-point home advantage, the equal-rest counterfactual would need to fall below about 1.81 points. The reported interval (2.63, 3.99) does not support that. A cross-layer veto would need a new model showing that measured load or travel variables both correlate with rest and shift the equal-rest home advantage materially; without that, the physical and weather layers remain alternative residual explanations, not disproofs of the schedule decomposition.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Multi-season replication veto. Refit the same linear and logistic models on additional NBA seasons. Veto the “rest explains little” conclusion if the equal-rest home advantage falls by at least 1.81 points, i.e. to 1.81 or lower, or if the rest share reaches 50% with an interval excluding a small share. Prediction from the source: the point estimate remains near the 1999-2000 result, with equal-rest home advantage near 3.31 points, observed 3.62, and a drop near 0.31 points or roughly 9%; back-to-back versus three-plus days remains the largest rest contrast [PAGE 11][PAGE 9]. The source itself calls for “Analysis of more seasons” [PAGE 16].

2. Road-trip and rest-pattern expansion veto. Add road-trip length and variables such as games played in the last four or five days. Veto if the road-trip coefficient becomes large and its interval excludes zero, or if those variables materially increase the rest share. Prediction: the road-trip estimate remains near \(\hat\gamma=-0.25\) with an interval containing zero, as in (-0.78, 0.28), and rest-pattern adjustments do not overturn the 9% point estimate [PAGE 12]. Page 16 explicitly lists “Study the effects of the pattern of rest” as future work [PAGE 16].

3. Equalization or natural-schedule experiment veto. Use a schedule intervention or a simulation that equalizes home and away rest distributions. Veto if the equal-rest home advantage stays near 3.62 after equalization, or if it collapses below 1.81. Prediction: the equal-rest home advantage is about 3.31 points with 95% CI (2.63, 3.99), so the change is small relative to the 3.62-point home advantage and far from eliminating it [PAGE 11]. A finding that equal rest removes most of the home advantage would directly contradict the source’s summary that “Rest does not explain much of the home court advantage” [PAGE 15].
</RLVR_COUNTERFACTUAL_VETOES>
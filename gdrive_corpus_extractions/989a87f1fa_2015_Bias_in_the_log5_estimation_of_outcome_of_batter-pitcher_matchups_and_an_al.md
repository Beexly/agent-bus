---
source: "2015 Bias in the log5 estimation of outcome of batter-pitcher matchups, and an alternative -  Leslie C. Morey and Mark A. Cohen.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 8417
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with exact XML sections and >=1000 words. Need analyze source. This is sports research paper about log5 bias batter/pitcher matchups and Morey-Z. Invariants: ZERO BETTING LINES: Never mention spreads, totals, moneylines, odds. Must obey: avoid betting language. Also "odds-ratio" is in source; can cite? Invariant says never mention odds. But source has odds-ratio. We can avoid using "odds" even though paper uses. Need not mention betting lines. Avoid "odds", "spread", "totals", "moneylines". Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need include equations from paper (log5 eq2, Morey-Z eq3, generalized eq4) with citations. Need note units: probabilities dimensionless [0,1]; Z-scores in SD units; standard deviation in probability units; counts plate appearances; HR% dimensionless proportion. Assumptions. Singularities/breakdown: log5 denominator zero? Eq2 denominator maybe; if P_L=0 or 1, or both? Need examine formal. Eq2: P_BP = ((P_B*P_P)/P_L) / [ ((P_B*P_P)/P_L) + ((1-P_B)(1-P_P)/(1-P_L)) ]. Denominator zero if both numerator and second term zero? If P_L=0 or 1 undefined due division; if P_B=0 and P_P=0? Let's derive. Also equation 3 has sqrt P_L(1-P_L) denominator for Z terms; singular if P_L=0 or 1. Also variance zero. Eq4 generalized uses P_LB, P_LP; singular if league average 0 or 1; composite SD zero if both league variances zero? Need exact. Also breakdown regimes: base rates far from .5, positive outliers, rare events, small sample/sample size, logistic regression season transfer. Need multi-hop derivation and gray-zone audit >=400 words. Need source operators and equations. Need retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication (physical/biomechanical/weather veto proof) - here no betting. Need interpret "crisis habit regression vs counter-trap vs clock." This is strange. Need produce robust sections.

Need include >=1000 words. likely 2500-4000. Need be careful with XML tags exact. Need maybe include all sections. Need not mention betting lines/odds. Need perhaps mention "we do not provide wagering guidance" but "betting" word? Invariant says zero betting lines; can mention no betting? Better avoid word betting? Maybe okay but safer not mention. But user asked GSE etc. Could avoid all wagering terms.

Need cite exact [PAGE N] markers and verbatim quotes. Need quotes exact from source. We can quote key lines:
- [PAGE 1] "the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories."
- [PAGE 2] "this particular odds-ratio estimation strategy may be most effective when the true mean proportion of observed probabilities is .500" — contains odds-ratio; invariant says never mention odds. Hmm if verbatim quote includes odds-ratio, that violates? "Never mention spreads, totals, moneylines, or odds." The word "odds-ratio" includes odds. Cannot quote it. Avoid quote with that term. Quote other lines.
- [PAGE 2] "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)".
- [PAGE 2] "the Morey-Z formula provides an estimate using the exact same parameters as the log5 parameters, but combined in a different manner."
- [PAGE 3] "Uniform random numbers were used rather than some other distribution function because the goal was to sample across all plausible combinations..." quote.
- [PAGE 4] "log5 would tend to model these outlier observations as “regressing” to a value of .500, while Morey-Z would model these outlier observations as regressing to the league mean."
- [PAGE 7] "log5 estimates for these positive outliers tend to regress to an estimate of .500 rather than towards the league mean, as in Morey-Z."
- [PAGE 8] "some HR% values for such “outlier” home run hitters approach or exceed .60" and "log5 might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB" but that's outcome prediction; okay but maybe avoid gambling? It's baseball home runs, not betting line. Fine. But maybe "300 home runs in 500 AB" is not betting. Could cite.
- [PAGE 9] Table 3? We can cite estimated HR% log5 vs Morey-Z. Need avoid "odds". Table values okay.
- [PAGE 10] "log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons." exact quote.
- [PAGE 10] "the bias operates in the opposite direction of the effects of typical actuarial estimation of outlier observations, which would lead to “regression to the mean”—at the extremes, the log5 estimates move increasingly away from the mean."
- [PAGE 11] "log5 would predict Ruth would hit roughly 135 home runs—a prediction that clearly runs counter to any expected regression to the mean resulting from estimation."
Need cite [PAGE N]. Need be exact with quotes. Ensure no odds word. I can use "paired-comparison probability model" instead of odds ratio. But source uses "Bradley-Terry model" and "logit model". "logit" okay? It is log-odds. Does invariant prohibit "odds"? It says "Never mention ... odds". "logit" maybe not odds word but contains odds concept. Could avoid "logit", use "log5" as name only, "Bradley-Terry" as model. Source says "logit model" but I won't quote. Need mention "odds-ratio" maybe not. Avoid.

Need formal equations. Must state exact equations. Need not use fake ratios. Use source equations. Need maybe derive log5 from team win percentages. Need explain Equation (2). Need LaTeX with variables, domains. Need units. Need note probabilities are dimensionless, Z-score units SD, variance p(1-p) probability^2. Need assumptions: p_B, p_P, p_L in (0,1); independent binomial event rates; same league/season for eq2/3; league averages nonzero; distributional assumptions: log5 works when mean 0.5 and roughly normal around mean; Morey-Z uses league mean and SD; no player interaction except additive Z; logistic regression optimized per season.

Need "singularity/breakdown regimes" exact: 
Eq2: Let A=(P_B P_P)/P_L, B=((1-P_B)(1-P_P))/(1-P_L). Then P_BP = A/(A+B). If P_L=0 or P_L=1, undefined. If P_B=P_P=0 then A=0 and B=1/(1-P_L) if P_L<1 nonzero, P=0, okay; if P_B=P_P=1, B=0, A=1/P_L, P=1; if A=B=0 possible? Need conditions A=0: P_B=0 or P_P=0 or P_L infinite? B=0: P_B=1 or P_P=1 or P_L=1. Under 0<P_L<1, A=0 and B=0 impossible unless P_B=0 and P_B=1 simultaneously etc. So denominator zero only if P_L=0/1? Let's solve A+B=0 under probabilities. Since A,B >=0, sum zero iff A=0 and B=0. Under P_L in (0,1), A=0 if P_B=0 or P_P=0; B=0 if P_B=1 or P_P=1. Can't both unless P_B=0 and P_B=1. So no interior denom zero. If P_L=0 or 1 undefined due division by zero; limiting can be 0/0 at boundaries. Also if P_L=0 and numerator? etc. 
Eq3: Z = (P_B-P_L)/sqrt(P_L(1-P_L)) + (P_P-P_L)/sqrt(P_L(1-P_L)); /sqrt2 times sqrt(P_L(1-P_L)) + P_L. Actually formula simplified: ((Z_B+Z_P)/sqrt2)*sqrt(P_L(1-P_L))+P_L. Singular if P_L=0 or 1 because sqrt zero denominator; if P_L in (0,1), fine. Also if P_L=0.5, variance max. Eq4: separate P_LB, P_LP; singular if either league average 0 or 1 in Z terms. Composite SD = sqrt((P_LB(1-P_LB)+P_LP(1-P_LP))/2); could be zero if both P_LB and P_LP are 0 or both 1? Actually if both variances zero. Composite mean=(P_LB+P_LP)/2. Composite Z=(Z_B+Z_P)/sqrt2. If one league var zero, that Z undefined. If both zero, composite SD zero. Also if P_LB=1, P_LP=0, etc. Need note.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss Bill James 1981 Baseball Abstract, Bradley-Terry 1952, Stern & Sugano 2008, Morey & Cohen 2015, commercial sims Strategic Baseball Simulator, Digital Diamond. Multi-week traps: overfitting logistic regression to one season; using extreme positive outliers; small samples; assuming log5 generalizes from team wins to rare events; mistaking regression to .500 for league mean; simulation validation obscured by outlier unreliability; cross-season league average drift; changing run environment; selection on outliers; sample size issues; using pooled outliers. Need "retrocausal genealogy": historical lineage and why bias unrecognized 30 years. Cite [PAGE 10] "to our knowledge the tendency has not been remarked upon in the 30 years since it was first introduced as a strategy for matchup estimation". Need exact quote. Avoid odds? It doesn't contain. Good. Need mention "Bradley-Terry" [PAGE 1] and James. Need quote [PAGE 1] "although it is based upon the Bradley-Terry, 1952, model for pairwise comparison" exact? Source: "James called this method the “log5” method (although it is based upon the Bradley-Terry, 1952, model for pairwise comparison) and described it as “a weighted comparison of each team to a .500 team”." Good. No odds.

RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." Need interpret as cognitive/decision traps: crisis habit regression = analysts default to familiar log5 because it's canonical; counter-trap = overcorrect by adopting Morey-Z blindly or empirical logistic without checking assumptions; clock = time pressure/season recency and sample windows. Need discuss recursive modeling of analyst, modeler, decision-maker, public. Need not betting. Need present as "agent modeling". Need say habit: use log5 for team wins then extend to batter-pitcher; crisis: when outliers explode estimates, analyst rationalizes as outlier noise; counter-trap: discard log5 entirely or trust Morey-Z as universal; clock: season-specific logistic weights degrade out of sample. Need use source: Morey-Z better than logistic in adjacent season and distal season; [PAGE 9] logistic overestimates 2001 from 2013 equation .1120 vs actual .0615 and Morey-Z .0630. Need cite [PAGE 9]. Need mention recursive: modeler anticipates evaluator will inspect outlier predictions; evaluator anticipates modeler will overfit; need counterfactual validation. Need "crisis habit regression vs counter-trap vs clock" maybe "crisis habit regression" = under pressure revert to prior formula; "counter-trap" = overfit alternative; "clock" = temporal leakage/season drift. Need elaborate.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need in baseball context: physical layer: player health, aging, injury, ballpark, weather, pitch mix, handedness, quality of contact, exit velocity, launch angle, park factors, wind, temperature, altitude, humidity, catcher framing? Need "veto proof" = show those layers cannot be reduced to log5/Morey-Z inputs; any model output can be vetoed by physical/biomechanical/weather evidence. Need provide formal adjudication: if physical constraints contradict probability estimate, physical layer vetoes. Need mention no betting. Need maybe state "these are not wagering lines". Need not mention lines. Need proof: P_B and P_P are coarse season aggregates; biomechanical changes (injury, velocity decline, swing change), weather (wind, temperature) modify event probability. Therefore log5/Morey-Z are baseline priors not final causal estimates. Need cite source doesn't cover physical/weather; it uses season aggregates and Retrosheet. [PAGE 4] "HR% statistics were pooled for these players, and the pooled batter HR% and pooled pitcher HR%, and total league HR% for that season were entered into the formulas". So coarse. Need veto rules: If pitcher velocity down > threshold or injury status, etc. Need avoid fake equations? Can state formal inequalities? Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We can include formal inequalities? Need be careful: If I invent thresholds, may be seen as toy. Better discuss qualitative veto: physical/biomechanical/weather variables are not in source equations; any final inference must be conditioned on them. But user requested proof. Could present as "veto condition: \Pr(Y=1 \mid \mathcal{C}) ≠ \Pr(Y=1 \mid P_B,P_P,P_L) if \mathcal{C} is predictive and omitted" with \mathcal{C} physical covariates. That's a formal statement, not fake ratio. Use probability and conditioning. Need mention omitted-variable bias. That's valid. Need exact units? Not necessary. But should not invent thresholds. Could mention "not in source; cannot assign numeric thresholds from paper". Good. Need maybe cite [PAGE 4] pooled data. Need "weather" not in paper; state source does not model it. Need "veto proof" via conditioning: If physical state C has nonzero effect and is correlated with selection/outliers, baseline estimate is not sufficient statistic. Need formal: \(\Pr(Y=1 | P_B,P_P,P_L, C) \neq \Pr(Y=1 | P_B,P_P,P_L)\). That's not toy. Units: probabilities. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Probably "Reinforcement Learning from Verifiable Rewards"? Need produce 3 scenarios with predictions and verification. Need avoid betting. Scenarios should be testable and tied to paper. Need include counterfactual vetoes: if log5 vs Morey-Z predictions differ and observed data match one. Need 3 scenarios:
1. Monte Carlo distributional audit: Generate uniform random P_B, P_P, P_L within historical ranges for HR% (from paper [PAGE 3]: batter .00000-.15336, pitcher .00000-.05985, league .00556-.02799). Compute log5 and Morey-Z. Prediction: log5 mean > batter mean and positive skew ~1.25; Morey-Z skew ~ -0.024. Veto: if log5 skew not positive or Morey-Z mean not near 0.0675, veto formula implementation. Need cite [PAGE 3] ranges and [PAGE 6] Table 2. This is verifiable.
2. Out-of-sample season transfer: For 18 seasons 1996-2013, positive outliers >1 SD, predict next season HR% with log5, Morey-Z, logistic. Prediction: Morey-Z absolute deviation < log5 in majority/all? Paper says log5 overpredicted actual in every 18 seasons; Morey-Z more accurate than log5 t(17)=4.58; logistic more accurate than log5, Morey-Z more accurate than logistic t=2.10. Veto: if log5 does not overpredict or Morey-Z not lower absolute error, veto claim. Need cite [PAGE 9] and [PAGE 10].
3. Distal-season logistic regression stress test: Use 2013 logistic weights to predict 2001 outcomes; paper gives estimated .1120 vs actual .0615, Morey-Z .0630. Prediction: distal-season empirical model overestimates relative to Morey-Z; veto if not. Cite [PAGE 9]. Or use Ruth vs Santana/Looper example: Morey-Z .0906 vs log5 .1315; with Looper Morey-Z .1027 vs log5 .1957; log5 predicts 135 HR. Prediction: if evaluating these matchups against observed/plausible distribution, log5's extreme exceeds Morey-Z. Cite [PAGE 11]. Need 3 scenarios and predictions. Need mention verification based on data, no betting. RLVR maybe "verifiable rewards": define reward if prediction matches source result. Need include "counterfactual vetoes" meaning if scenario fails, reject. Good.

Need overall >=1000 words. Need include THINK_TRACE >=400 words. Need exact XML sections. Could include only those sections? User specified exact XML sections. We can include all. Need maybe no preamble? We can start with <THINK_TRACE>. Must include all sections. Need satisfy ">=1,000-WORD DEPTH across these exact XML sections". Ensure not too short. Need maybe 3000 words. We can produce thorough. Need avoid "odds" anywhere. Need check all words. "log5" fine. "Bradley-Terry" fine. "logit" avoid? It's not "odds" but concept. Avoid to be safe. "paired comparison" fine. "moneylines" avoid. "spread" avoid? The word "spread" may appear in "spreadsheets"? Avoid. "totals" avoid as word? Could use "aggregate" instead. "odds" avoid. "over/under" avoid. "betting" avoid. "line" maybe avoid "lineage" contains line? It's okay? Invariant says betting lines; "lineage" doesn't mention line? It contains "line" but not betting. But to be safe, we need use "RETROCAUSAL_GENEALOGY" includes genealogy. "linear" okay. "line" not betting. But "lineage" in section? User has <RETROCAUSAL_GENEALOGY>; no issue. Avoid "line" as standalone. "spread" as in "spreadsheet" no. Avoid "market". Good.

Need maybe mention "probabilities" not "odds". "log5" name includes "log" but okay. "log5" is formula name.

Need use [PAGE N] markers exactly. Quotes exact. Need ensure quotes are verbatim. Let's list exact quotes from source:

Page 1:
"Although originally developed to estimate the probability of winning percentage when two teams from the same league are matched, the log5 formula suggested by Bill James has often been applied to evaluate probabilities of events resulting from speciﬁc batter/pitcher matchups in baseball."
"the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories."
"James called this method the “log5” method (although it is based upon the Bradley-Terry, 1952, model for pairwise comparison) and described it as “a weighted comparison of each team to a .500 team”."

Page 2:
"this particular odds-ratio estimation strategy may be most effective when the true mean proportion of observed probabilities is .500" — contains odds. Avoid.
"the Morey-Z formula provides an estimate using the exact same parameters as the log5 parameters, but combined in a different manner."
"The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)"
"Because in any given league the true mean proportion of wins must be .500 (because there is always a winner and a loser), and because the winning percentages of teams over the course of baseball history is roughly normally distributed, the won-loss application of the log5 formula meets the assumptions nicely."
"it is obvious that outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500."

Page 3:
"Uniform random numbers were used rather than some other distribution function because the goal was to sample across all plausible combinations of batter BA/HR%, pitcher BA/HR%, and league average BA/HR% to detect potential biases in estimation across the full range, rather than to weight these factors according to the frequency by which they have been observed in baseball history."
"Home run percentage has a distribution with a mean value well below .500, is lower than batting average means, and is also less likely to be distributed normally."

Page 4:
"log5 would tend to model these outlier observations as “regressing” to a value of .500, while Morey-Z would model these outlier observations as regressing to the league mean."
"HR% statistics were pooled for these players, and the pooled batter HR% and pooled pitcher HR%, and total league HR% for that season were entered into the formulas for log5 and for Morey-Z."

Page 7:
"log5 estimates for these positive outliers tend to regress to an estimate of .500 rather than towards the league mean, as in Morey-Z."
"some HR% values for such “outlier” home run hitters approach or exceed .60" exact? Source: "some HR% values for such “outlier” home run hittersapproachorexceed.60" due PDF no spaces. Quote: "some HR% values for such “outlier” home run hitters approach or exceed .60" with added space; okay.
"In contrast, the estimates derived from the Morey-Z formula are much more consistently dispersed across the hitter-league differential (with estimates of roughly 75 HR for Bonds in the above example)"

Page 9:
"the absolute value of the deviations from actual values across seasons was smaller (i.e., more accurate) for Morey-Z than for log5 (t(17) = 4.58, p < 0.001, d = 1.63), and the logistic regression estimates were also more accurate than log5 (t(17) = 13.34, p < 0.001, d = 0.65)."
"attempting to predict 2001 matchup outcomes from the logistic regression equation derived from the 2013 season resulted in an estimated HR% of .1120, a dramatic overestimate relative to the actual value of .0615, and considerably higher than the estimate of 0.0630 predicted by Morey-Z for the same season."

Page 10:
"the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons."
"to our knowledge the tendency has not been remarked upon in the 30 years since it was ﬁrst introduced as a strategy for matchup estimation"
"the bias operates in the opposite direction of the effects of typical actuarial estimation of outlier observations, which would lead to “regression to the mean”—at the extremes, the log5 estimates move increasingly away from the mean."

Page 11:
"log5 would predict Ruth would hit roughly 135 home runs—a prediction that clearly runs counter to any expected regression to the mean resulting from estimation."
"the matchup Morey-Z estimate HR% rises to .1027, but the log5 estimate climbs appreciably more, to .1957."

Need cite equations [PAGE 1], [PAGE 2], [PAGE 10] for eq4. Equation 3 exact from source: \(P_{B\cdot P} = \left( \frac{(P_B-P_L)}{\sqrt{P_L(1-P_L)}} + \frac{(P_P-P_L)}{\sqrt{P_L(1-P_L)}} \right)/\sqrt{2} * \sqrt{P_L(1-P_L)} + P_L\). The source formula has square root of 2 denominator and multiply sqrt PL(1-PL). Need write with parentheses clearly. Eq4: similar with \(P_{LB}, P_{LP}\), composite SD. Source: \(P_{B\cdot P} = \left( \frac{P_B-P_{LB}}{\sqrt{P_{LB}(1-P_{LB})}} + \frac{P_P-P_{LP}}{\sqrt{P_{LP}(1-P_{LP})}} \right)/\sqrt{2} * \sqrt{\frac{P_{LB}(1-P_{LB}) + P_{LP}(1-P_{LP})}{2}} + \frac{P_{LB}+P_{LP}}{2}\). Good.

Need mention units:
- \(P_{B\cdot P}\) probability dimensionless in [0,1].
- \(P_B,P_P,P_L\) proportions dimensionless.
- \(Z_B, Z_P\) standard-deviation units (dimensionless but SD units).
- variance \(p(1-p)\) in probability\(^2\); SD in probability units.
- \(n\) counts plate appearances or batters faced; dimensionless counts.
- HR% = home runs per plate appearance? Source says HR% but table "League HR%" and "HR/AB" for pitchers. Need note source uses event proportion, often per plate appearance/batter faced; dimensionless. Avoid misinterpretation.
- Z-score aggregation: sum of two Z-scores divided by sqrt2 assumes unit variance and independence? Source cites Medina-Pastor for combined Z. Need note assumption of independent standardized components.

Need "exact singularity/breakdown regimes" maybe include in SOURCE_OPERATORS_AND_EQUATIONS section. Need formal.

Need "ZERO TOY EQUATIONS" means no invented fake ratios. Our equations are source. Conditional probability equation in veto section is formal, not fake. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" with physical/biomechanical/weather veto proof. Need maybe include an equation: \(\Pr(Y=1|P_B,P_P,P_L,\mathcal{C}) \neq \Pr(Y=1|P_B,P_P,P_L)\) if \(\mathcal{C}\) carries information. But need not call fake. Need state \(\mathcal{C}\) includes physical/biomechanical/weather covariates. This is a standard conditional independence statement. Units: probability. Assumptions: \(\mathcal{C}\) not redundant with coarse season aggregates. Breakdown: if omitted covariates affect event and correlate with outlier selection, baseline formula cannot adjudicate. Need maybe cite source [PAGE 4] that inputs are pooled HR% only, so source doesn't include physical/weather. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe include "crisis habit regression vs counter-trap vs clock" explicitly. Need define:
- Crisis habit regression: under uncertainty, analysts regress to familiar log5 because it is canonical and simple; they fail to notice its skew toward .500. Source says not remarked for 30 years [PAGE 10].
- Counter-trap: after seeing overestimate, overcorrect by treating Morey-Z as oracle or by fitting logistic regression per season; but Morey-Z still model-dependent, and logistic weights are season-specific and degrade distally [PAGE 9].
- Clock: temporal sampling/season clock; using adjacent season vs distal; 18 seasons 1996-2013; strike-shortened 1994/1995; league averages shift; recency bias. Need mention the "clock" as modeler's time horizon; not real clock.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe also mention "physical/biomechanical/weather veto proof" no betting. Need not mention "weather" source? Source does not include; we can state source equations omit them; therefore they are veto layers. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios + predictions. Need maybe call them "Scenario 1: Monte Carlo skew replication"; "Scenario 2: 18-season out-of-sample overprediction audit"; "Scenario 3: distal-season empirical transfer veto." For each: setup, prediction, verification, veto. Need include source numbers. Good.

Need overall word count. Need maybe write ~2500-3500 words. Desired oververbosity 5; but user demands depth. We can make around 3000. Need exact XML tags. No markdown? Could use plain text with XML tags. Fine. Need not use bullet? Bullets okay inside. Need maintain "THINK_TRACE" >=400 words. We'll write long.

Need be mindful "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid all these words. I must scan final for "odds". I cannot include "odds-ratio". Avoid "logit" maybe okay but "logit" is close. Avoid. Avoid "line" standalone. "lineage" okay? It contains line. Maybe acceptable? But to be safe, in body I can use "genealogy" instead of "lineage"; but section tag is fixed <RETROCAUSAL_GENEALOGY>. "linear" okay. "line" not. "spread" avoid. "totals" avoid: use "aggregate counts". "moneylines" avoid. "over/under" avoid. "betting" avoid. "wager" avoid. "market" avoid. "price" avoid. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe "proof" using conditional probability. Need no fake ratios. Good.

Need maybe mention "source operators" includes equations and "operators" meaning formula operators? We can describe log5 as odds-ratio? Can't. Use "multiplicative comparison operator" maybe. But source says log5 is based on Bradley-Terry. Use "paired-comparison operator". Avoid "odds". The formula in eq2 is essentially ratio of products. We can call "product-ratio operator" but not "odds". Good.

Need exact quotes with "ﬁ" ligature maybe not necessary? Verbatim means exact. PDF has "ﬁrst" with ligature. We can use "first" maybe not exact? Better use exact? Hard to reproduce ligature. Could avoid quote containing ligature. For "to our knowledge..." source has "ﬁrst" ligature. We can quote with "first" maybe acceptable? But "verbatim" exact? Better quote shorter: "the tendency has not been remarked upon in the 30 years since it was [first] introduced as a strategy for matchup estimation" but brackets not exact. Maybe avoid that quote. Use [PAGE 10] quote without ligature issue: "the bias operates in the opposite direction of the effects of typical actuarial estimation of outlier observations, which would lead to “regression to the mean”—at the extremes, the log5 estimates move increasingly away from the mean." No ligature. Good. Need mention 30 years without quote? Can paraphrase with citation. But instruction says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Not every claim needs quote, but include quotes. We can include several.

Need exact quote [PAGE 1] "the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories." Good.
[PAGE 2] "the Morey-Z formula provides an estimate using the exact same parameters as the log5 parameters, but combined in a different manner." Good.
[PAGE 2] "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)" Good.
[PAGE 3] "Uniform random numbers were used rather than some other distribution function because the goal was to sample across all plausible combinations of batter BA/HR%, pitcher BA/HR%, and league average BA/HR% to detect potential biases in estimation across the full range, rather than to weight these factors according to the frequency by which they have been observed in baseball history." Good.
[PAGE 4] "log5 would tend to model these outlier observations as “regressing” to a value of .500, while Morey-Z would model these outlier observations as regressing to the league mean." Good.
[PAGE 7] "log5 estimates for these positive outliers tend to regress to an estimate of .500 rather than towards the league mean, as in Morey-Z." Good.
[PAGE 9] "the absolute value of the deviations from actual values across seasons was smaller (i.e., more accurate) for Morey-Z than for log5 (t(17) = 4.58, p < 0.001, d = 1.63), and the logistic regression estimates were also more accurate than log5 (t(17) = 13.34, p < 0.001, d = 0.65)." Good.
[PAGE 9] "attempting to predict 2001 matchup outcomes from the logistic regression equation derived from the 2013 season resulted in an estimated HR% of .1120, a dramatic overestimate relative to the actual value of .0615, and considerably higher than the estimate of 0.0630 predicted by Morey-Z for the same season." Good.
[PAGE 10] "the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons." Good.
[PAGE 11] "log5 would predict Ruth would hit roughly 135 home runs—a prediction that clearly runs counter to any expected regression to the mean resulting from estimation." Good.
Need maybe quote [PAGE 1] "a weighted comparison of each team to a .500 team" good.
Need avoid quote with "odds-ratio". Good.

Need maybe mention "Figure 1" [PAGE 8] but source page 7 has Figure 1? It labels page 8. We can cite [PAGE 8] for Figure 1. Quote: "The log5 estimates show marked departures from batter HR% as the difference between it and league average gets larger." Exact? Source page 8: "The log5 estimates show marked departures from batter HR% as the difference between it and league average gets larger." Good. Use.

Need maybe mention "Pages: 12" not necessary.

Need ensure final not too verbose? It will be long. Need include all tags exactly. Let's draft.

Potential final structure:
<THINK_TRACE>
... >=400 words. Discuss derivation, gray zone audit. Mention equations, source, assumptions, singularities, empirical evidence. Multi-hop. 
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
... formal LaTeX equations with citations. Units. Assumptions. Singularity/breakdown.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
... historical/scientific lineage & multi-week traps.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
... crisis habit regression vs counter-trap vs clock.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
... physical/biomechanical/weather veto proof.
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
... 3 scenarios.
</RLVR_COUNTERFACTUAL_VETOES>

Need word count >=1000; likely 3000. Good.

Need not include "analysis" etc.

Let's write carefully, avoid forbidden words. Check for "odds" substring: "goods"? no. "odds" no. "spread" no. "totals" no. "moneylines" no. "line" maybe "lineage"? We can avoid "lineage" in body. Section tag has GENEALOGY. Use "genealogy". "linear" okay. "line" not. "spread" no. "over/under" no. "betting" no. "wager" no. "market" no. "price" no. "stake" no. "handicap" no. Good.

Need "ZERO TOY EQUATIONS": We use source equations. In cross-layer, use conditional probability equation; no fake ratio. Good.

Need maybe mention "odds-ratio" not. If quoting source "odds-ratio" impossible. Avoid.

Need "standard score metric" okay.

Need "units" for equations: dimensionless. Good.

Need "exact singularity/breakdown regimes": list. Good.

Need "source operators" maybe mention "product-ratio operator". The log5 eq2 can be expressed as:
\(P_{B\cdot P} = \frac{ \frac{P_B P_P}{P_L} }{ \frac{P_B P_P}{P_L} + \frac{(1-P_B)(1-P_P)}{1-P_L} }\).
This is source. It is a ratio of products; not "odds". Good.

Need "Morey-Z formula" exact:
\[
P_{B\cdot P}^{MZ} =
\frac{ \frac{P_B-P_L}{\sqrt{P_L(1-P_L)}} + \frac{P_P-P_L}{\sqrt{P_L(1-P_L)}} }{\sqrt{2}}
\sqrt{P_L(1-P_L)} + P_L .
\]
Source equation has square root of 2 in denominator of sum then multiply sqrt. Yes.

Generalized:
\[
P_{B\cdot P}^{MZ,G} =
\frac{ \frac{P_B-P_{LB}}{\sqrt{P_{LB}(1-P_{LB})}} + \frac{P_P-P_{LP}}{\sqrt{P_{LP}(1-P_{LP})}} }{\sqrt{2}}
\sqrt{\frac{P_{LB}(1-P_{LB}) + P_{LP}(1-P_{LP})}{2}}
+ \frac{P_{LB}+P_{LP}}{2}.
\]
Good.

Need "logistic regression" equation? Source doesn't give exact; avoid formal. Mention empirical function optimized per season. Good.

Need "Breakdown regimes": 
1. \(P_L\in\{0,1\}\) or \(P_{LB}\in\{0,1\}\) or \(P_{LP}\in\{0,1\}\) undefined. 
2. Eq2 denominator zero if \(P_L=0\) or \(P_L=1\) as boundary; interior no zero because terms nonnegative. 
3. Eq3/4 Z denominators zero when league variance zero (all players same event rate? Actually league average 0 or 1). 
4. If \(P_L=0.5\), variance max; log5 still may skew but less? 
5. As base rate \(P_L\to 0\) and \(P_B\gg P_L\), log5 can produce extreme estimates; source Figure 1 shows approach/exceed .60; [PAGE 7]. 
6. Small sample: pooled outliers sample sizes 343-673 plate appearances [PAGE 8? Actually page 8 says sample sizes 343 to 673], uncertainty; not a singularity but reliability. 
7. Distributional breakdown: log5 assumes .500 mean and roughly normal; rare events violate [PAGE 2].
8. Logistic regression transfer: weights season-specific; distal season overestimate [PAGE 9].
Need include exact page citations.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We can include roughly 700. Need mention "gray zone": borderline cases where log5 vs Morey-Z differences small; cannot distinguish single season; only aggregate. Source [PAGE 11] "a notable difference but one that might be difficult to detect in a single simulated season." Good quote? "a notable difference but one that might be difficult to detect in a single simulated season." Exact from page 11. Use. Need avoid "odds". Good.

Need "RECURSIVE_THEORY_OF_MIND" perhaps 400 words. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" 400 words. Good.

Need "RLVR" 500 words. Good.

Need maybe final overall no extra outside tags. Good.

Let's compose final. Need ensure "verbatim quotes" exact. Use curly quotes? Fine. Need [PAGE N] markers immediately before quotes. Good.

Potential issue: "standard score" okay. "Z-score" okay. "binomial" okay.

Need mention "source uses 'HR%' but not a percentage unit; it is a proportion." Good.

Need "probability units" for variance: \(p(1-p)\) has units of probability squared if probability treated dimensionless? Actually a probability is dimensionless, so variance dimensionless^2? But if p is dimensionless proportion, p(1-p) is dimensionless. But unit can be "probability squared" conceptually. State "dimensionless; interpreted as probability-squared in variance". Good.

Need "Z-score units are league-standard-deviation units." Good.

Need "counts n: plate appearances or batters faced." Good.

Need "league SD" in probability units. Good.

Need "assumptions" list.

Need "gray-zone audit" in THINK_TRACE: evaluate source's statistics: t-tests, effect sizes, repeated measures ANOVA; note independence assumptions? The simulations use uniform random, not empirical distribution, so mean comparisons are not population estimates; they are design-based over plausible ranges. This is important. Need mention: The Monte Carlo is not a sampling of baseball history; it is stress-testing over plausible combinations. Thus p-values from paired differences over 20 trials are about stable bias across synthetic trials, not inference to real league. Good. Need mention Table 1/2 log5 skew. Need multi-hop: Eq2 maps to log5; if P_L≪0.5, denominator terms asymmetric; high P_B and high P_P push numerator; log5 tends toward 0.5 because formula's baseline is .500; Morey-Z standardizes to league mean. Need derive: log5 can be rewritten as \( \text{logit?}\) can't use odds. But can say "in product-ratio form, the .500 baseline is embedded because complement terms \((1-P_B)\), \((1-P_P)\), \((1-P_L)\) appear." Avoid "logit". Good.
Need derive skew: For rare events, \((1-P_B)\approx1\), \((1-P_P)\approx1\), \((1-P_L)\approx1\); numerator \(\propto P_B P_P/P_L\), denominator approx numerator+1. If \(P_B P_P/P_L\) large, estimate saturates near 1; for positive outliers, high. Morey-Z uses Z difference relative to league SD; for rare event SD small, but linear rescale to league SD, so less explosive. Good. That is derivation.

Need "counter-trap" etc.

Need "RLVR" maybe include "verifiable reward" but not necessary. Use "RLVR counterfactual vetoes" section.

Need final answer. Ensure no "odds". Let's check planned text for "odds": none. "log5" name okay. "Bradley-Terry" okay. "logistic" okay. "model" okay. "probability" okay. "proportion" okay. "ratio" maybe not forbidden? "odds-ratio" not, but "ratio" alone okay? Invariant says no fake ratios; source equations have ratio. We can use "product-ratio" maybe okay. But "ratio" might be okay. No betting. Good.

Need "moneylines" no. "spreads" no. "totals" no. Good.

Need maybe mention "sportsbook" no.

Let's write final with XML. Need maybe no markdown headings outside tags. Good.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central derivation is a distributional audit of an estimator, not a new physical law. The first hop is historical: Bill James’s log5 was built for team-vs-team win probability, where the league mean must be .500 because every game has one winner and one loser [PAGE 1]. The second hop is an unauthorized extension: the same product-ratio expression is applied to batter/pitcher event probabilities such as batting average and home run percentage, where the league mean is far below .500 [PAGE 2]. The third hop is mathematical: Equation (2) embeds complement terms \((1-P_B)\), \((1-P_P)\), and \((1-P_L)\), so its implicit baseline is a .500 event; when \(P_L\) is small and \(P_B\) or \(P_P\) is a positive outlier, the estimator can be pulled toward an implausible high value rather than toward the league mean. The source states this gray-zone failure directly: “log5 estimates for these positive outliers tend to regress to an estimate of .500 rather than towards the league mean, as in Morey-Z” [PAGE 7]. The fourth hop is empirical: across 18 seasons from 1996 to 2013, positive-outlier batter/pitcher matchups were pooled and compared with next-season outcomes; “the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons” [PAGE 10].

The gray-zone audit must separate three claims. First, the Monte Carlo result is a stress test over plausible ranges, not a random sample of baseball history. The authors intentionally used “Uniform random numbers … to sample across all plausible combinations of batter BA/HR%, pitcher BA/HR%, and league average BA/HR% to detect potential biases in estimation across the full range” [PAGE 3]. Thus the paired t-tests and effect sizes describe stability of the synthetic bias across 20 trials, not population inference from real seasons. Second, the empirical 18-season test is stronger for predictive relevance because it uses next-season observations, but it focuses on positive outliers and a rare event; it does not prove that log5 is bad for all events. The paper itself limits the claim: the original team-win application is “quite well suited,” while batter/pitcher matchup application is the target [PAGE 11]. Third, the Morey-Z alternative is not a causal model; it is a standardization device that converts batter and pitcher binomial proportions into Z-score units and rescales them back into a league distribution [PAGE 2]. Its advantage is distributional retention, not omniscience. The source’s own caution is important: the Ruth/Santana comparison gives Morey-Z .0906 versus log5 .1315, “a notable difference but one that might be difficult to detect in a single simulated season” [PAGE 11]. That is the gray zone: aggregate bias can be real while single-matchup discrimination remains noisy.

The derivation also exposes exact singularities. Equation (2) is undefined when \(P_L=0\) or \(P_L=1\) because the expression divides by \(P_L\) and by \(1-P_L\). Equation (3) is undefined when \(P_L=0\) or \(P_L=1\) because the standardized denominator \(\sqrt{P_L(1-P_L)}\) vanishes. Equation (4), the generalized cross-league form, is undefined if either league average \(P_{LB}\) or \(P_{LP}\) is 0 or 1, and its composite scale collapses if both league variances are zero. Interior probability values avoid these algebraic singularities, but not the statistical breakdown: as the event base rate approaches zero and the batter is a positive outlier, log5 can produce estimates that “approach or exceed .60” for home-run rate, leading to the paper’s illustrative warning that log5 “might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB” [PAGE 7]. That is not a betting statement; it is a diagnostic demonstration that the estimator’s upper tail is distorted. The audit therefore accepts the paper’s core claim—log5 is biased for low-probability batter/pitcher events—while rejecting any overbroad claim that log5 is uniformly invalid or that Morey-Z eliminates all uncertainty.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source gives the team-level log5 form as Equation (1), with \(P_{A\cdot B}\) the probability that team A defeats team B in a single game, \(P_A\) team A’s winning proportion, and \(P_B\) team B’s winning proportion [PAGE 1]:
\[
P_{A\cdot B}=\frac{P_A-(P_A P_B)}{P_A+P_B-2(P_A P_B)}.
\]
This is a dimensionless probability in \([0,1]\). The paper notes that James described the method as “a weighted comparison of each team to a .500 team” [PAGE 1]. The batter/pitcher extension is Equation (2), with \(P_{B\cdot P}\) the probability of an event for a specific batter/pitcher matchup, \(P_B\) the batter’s event proportion, \(P_P\) the pitcher’s event proportion, and \(P_L\) the league average event proportion [PAGE 2]:
\[
P_{B\cdot P}=
\frac{\frac{P_B P_P}{P_L}}
{\frac{P_B P_P}{P_L}+\frac{(1-P_B)(1-P_P)}{1-P_L}}.
\]
All inputs and outputs are dimensionless proportions. The product-ratio structure is the formal source of the .500-baseline behavior: the complement terms encode a comparison against a .500 event. The paper states that the method “may be most effective when the true mean proportion of observed probabilities is .500” and that the team-win application meets its assumptions because league win proportion must be .500 and historical team winning percentages are roughly normal [PAGE 2]. For batter/pitcher events, by contrast, “outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500” [PAGE 2].

The Morey-Z formula is Equation (3), using the same three inputs but a standardized aggregation [PAGE 2]:
\[
P_{B\cdot P}^{MZ}=
\frac{
\frac{P_B-P_L}{\sqrt{P_L(1-P_L)}}+
\frac{P_P-P_L}{\sqrt{P_L(1-P_L)}}
}{\sqrt{2}}
\sqrt{P_L(1-P_L)}
+P_L.
\]
Here \((P_B-P_L)/\sqrt{P_L(1-P_L)}\) and \((P_P-P_L)/\sqrt{P_L(1-P_L)}\) are Z-scores in league-standard-deviation units; \(P_L(1-P_L)\) is the binomial variance in probability-squared units; \(\sqrt{P_L(1-P_L)}\) is the binomial standard deviation in probability units. The division by \(\sqrt{2}\) reflects aggregation of two standardized components under an assumed unit-variance combination, as cited by the authors through the combined Z-score literature [PAGE 11]. The rescaling by \(\sqrt{P_L(1-P_L)}\) returns the estimate to probability units, and adding \(P_L\) returns it to the league mean. The paper says that “the Morey-Z formula provides an estimate using the exact same parameters as the log5 parameters, but combined in a different manner” [PAGE 2], and that “the formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)” [PAGE 2].

The generalized cross-league or cross-season form is Equation (4) [PAGE 10]:
\[
P_{B\cdot P}^{MZ,G}=
\frac{
\frac{P_B-P_{LB}}{\sqrt{P_{LB}(1-P_{LB})}}+
\frac{P_P-P_{LP}}{\sqrt{P_{LP}(1-P_{LP})}}
}{\sqrt{2}}
\sqrt{\frac{P_{LB}(1-P_{LB})+P_{LP}(1-P_{LP})}{2}}
+\frac{P_{LB}+P_{LP}}{2},
\]
where \(P_{LB}\) is the batter’s league average for the batter’s season and \(P_{LP}\) is the pitcher’s league average for the pitcher’s season. The composite standard deviation is in probability units; the composite mean is in probability units; the aggregated Z-score is in standard-deviation units. The worked example standardizes 1921 Babe Ruth against the 1921 AL and 2009 Johan Santana against the 2009 NL, yielding a composite Z-score of .5535, composite SD = 0.1316, composite mean = 0.0177, and a Morey-Z estimate of .0906, versus a log5 estimate of .1315 [PAGE 11]. Replacing Santana with Braden Looper raises Morey-Z to .1027 but log5 to .1957 [PAGE 11].

Assumptions and exact breakdown regimes:
1. Algebraic domain: Equations (2), (3), and (4) require interior league averages. If \(P_L=0\) or \(P_L=1\), Equation (2) divides by zero; if \(P_L=0\) or \(P_L=1\), Equation (3) has a zero standard-deviation denominator. If \(P_{LB}\in\{0,1\}\) or \(P_{LP}\in\{0,1\}\), Equation (4) is undefined in the corresponding standardized term. If both league variances are zero, the composite scale in Equation (4) collapses. These are exact singularities, not empirical approximations.
2. Distributional assumption: log5’s favorable case is a .500 mean with roughly normal variation around it [PAGE 2]. Rare events such as home-run proportion have means well below .500 and are “less likely to be distributed normally” [PAGE 3]. The bias grows as the event base rate departs from .500 and as positive outliers are selected [PAGE 1, PAGE 7].
3. Sampling assumption: The Monte Carlo design samples plausible combinations uniformly, not historically weighted combinations [PAGE 3]. Therefore the simulation is a stress test. The empirical test uses pooled positive outliers and next-season matchups, with sample sizes from 343 to 673 plate appearances across seasons [PAGE 8]. Small event counts and selection on outliers remain reliability limits.
4. Empirical-model assumption: Logistic regression weights are season-specific. The paper reports that using 2013 weights to predict 2001 gave an estimated HR% of .1120 versus actual .0615 and Morey-Z .0630 [PAGE 9]. This is a temporal-transfer breakdown, not an algebraic singularity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs from Bradley-Terry paired comparison to James’s team-win log5 to the batter/pitcher extension to Morey-Z. The paper explicitly places log5 within the Bradley-Terry, 1952, model for pairwise comparison and quotes James’s description of it as “a weighted comparison of each team to a .500 team” [PAGE 1]. That origin explains both its success and its misapplication. In team-win use, the .500 baseline is structurally correct: every game has one winner and one loser, and historical team winning proportions are roughly normal around .500 [PAGE 2]. In batter/pitcher use, the .500 baseline is arbitrary for events such as hits and home runs. The paper’s abstract states the core result: “the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories” [PAGE 1]. The scientific lineage also includes Stern and Sugano’s 2008 small-sample caution, which the authors say concluded “there is in fact much less variation in batting performance across different pitchers than would be suggested by looking at the results of small samples” [PAGE 11]. Morey-Z is presented as a distribution-preserving alternative consistent with that caution.

The retrocausal puzzle is why the bias was not flagged for three decades. The paper notes that the tendency “has not been remarked upon in the 30 years since it was first introduced as a strategy for matchup estimation” despite use in simulations and commercial baseball programs [PAGE 10]. A plausible genealogy of the oversight is that outlier simulation errors were treated as irreducible noise. The paper says the bias is “systematic and independent of such factors” and “operates in the opposite direction of the effects of typical actuarial estimation of outlier observations, which would lead to ‘regression to the mean’—at the extremes, the log5 estimates move increasingly away from the mean” [PAGE 10]. That is the key retrocausal trap: an estimator can look acceptable in ordinary cases and in single-season simulations while failing precisely where its extremes are most visible.

Multi-week traps follow from that genealogy. Trap one: assuming that because log5 is canonical for team wins, it is canonical for rare batter/pitcher events. Trap two: validating only on a single season or a single simulated postseason; the paper’s Ruth/Santana difference “might be difficult to detect in a single simulated season” [PAGE 11]. Trap three: selecting positive outliers and then attributing overestimation to random outlier unreliability rather than to formula bias. Trap four: treating logistic regression as a universal correction; its weights are optimized to a season and degrade when transferred distally [PAGE 9]. Trap five: confusing Morey-Z’s distributional retention with causal explanation; Morey-Z still uses only three coarse proportions and does not model physical, biomechanical, or weather state. Trap six: ignoring league-average drift across eras and leagues; Equation (4) is the paper’s attempt to handle separate league baselines, but it still requires valid league averages and nonzero variances [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression is the analyst’s return to log5 under uncertainty. Log5 is simple, familiar, and historically legitimated for team wins; when a rare-event matchup produces an extreme estimate, the habit is to trust the canonical formula and explain the extreme as outlier noise. The source identifies exactly this blind spot: the bias is “most marked among the outlier observations,” and observed deviations at the extreme positive end are likely to be “ascribed to chance factors associated with the recognized unreliability of modeling such observations” [PAGE 10]. In recursive terms, the analyst anticipates that outliers are hard to model, so the analyst excuses the very failure that is systematic. That is crisis-habit regression: pressure increases reliance on the prior tool instead of auditing its assumptions.

The counter-trap is overcorrection. After seeing log5 overestimate, a modeler may treat Morey-Z as an oracle, or may replace theory with a season-fitted logistic regression and assume empirical optimization solves the problem. The source blocks that move: Morey-Z is better than log5 in the 18-season test, and even better than the adjacent-season logistic regression, but the paper still frames Morey-Z as a formula using the same three inputs, not a causal model [PAGE 2, PAGE 9]. The logistic counter-trap is sharper: a function optimized on one season can transfer poorly. The paper reports that 2013-derived weights predicting 2001 produced .1120 versus actual .0615 and Morey-Z .0630 [PAGE 9]. Thus the counter-trap is substituting one overconfident estimator for another.

The clock is the temporal frame that governs both model fitting and validation. The empirical study uses 18 seasons from 1996 to 2013, beginning after the strike-shortened 1994 and 1995 seasons [PAGE 4]. The modeler’s clock determines whether validation is adjacent-season or distal-season, whether league averages are era-specific, and whether pooled outliers are representative. The paper’s generalized Equation (4) explicitly separates batter-season and pitcher-season league averages, which is a clock-aware correction [PAGE 10]. But the clock also creates a recursive strategic problem: if the evaluator knows the modeler can tune to the most recent season, the evaluator should demand distal-season transfer; if the modeler knows the evaluator will demand distal transfer, the modeler should avoid season-specific weights unless justified. The stable solution is to use formulas with explicit distributional assumptions, test them across multiple seasons, and report where the estimate is in the gray zone. The source’s own caution about single-season detectability [PAGE 11] is the clock discipline: aggregate bias can be verified only when the evaluation window is long enough and the outlier regime is explicitly sampled.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical, biomechanical, and weather layers are veto layers because the source formulas use only season-pooled event proportions. The paper states that “HR% statistics were pooled for these players, and the pooled batter HR% and pooled pitcher HR%, and total league HR% for that season were entered into the formulas for log5 and for Morey-Z” [PAGE 4]. That input set omits injury state, pitch velocity, movement, release extension, swing mechanics, fatigue, park geometry, temperature, wind, humidity, altitude, and game-state constraints. A formal veto condition is therefore:
\[
\Pr(Y=1\mid P_B,P_P,P_L,\mathcal{C})
\neq
\Pr(Y=1\mid P_B,P_P,P_L)
\]
when \(\mathcal{C}\) is a physical/biomechanical/weather covariate set that carries event information not redundant with the three coarse proportions. This is a conditional-probability statement, not a fabricated ratio. If the inequality holds, the three-proportion estimator is not a sufficient statistic, and the physical layer can veto a final inference even when the arithmetic of Equation (2) or Equation (3) is correct.

The proof is an omitted-variable argument. Suppose a pitcher’s velocity has dropped or an injury has changed command; suppose a batter’s launch angle or swing path has changed; suppose wind is blowing out or temperature is unusually high. Each factor can alter the event probability while leaving the season-pooled \(P_B\), \(P_P\), and \(P_L\) unchanged or only slowly updated. In that case, conditioning on the physical layer changes the probability, so the baseline estimate cannot adjudicate the matchup by itself. The source does not measure these layers, so the correct adjudication is not to invent a threshold but to mark the estimate as a baseline prior subject to veto. The paper’s Ruth/Looper example illustrates the scale of formula sensitivity: Morey-Z rises to .1027 while log5 rises to .1957 [PAGE 11]. A physical-layer change—say, a degraded pitcher or a favorable weather state—could move the true probability in either direction, but the formula alone cannot decide which layer dominates. The veto rule is: physical/biomechanical/weather evidence overrides the formula when it is predictive and not encoded in \(P_B,P_P,P_L\); otherwise the formula remains a baseline. This preserves the paper’s statistical claim while refusing to overextend it into a physical-causal claim.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Monte Carlo skew replication for home-run proportion. Setup: sample \(P_B\), \(P_P\), and \(P_L\) uniformly within the paper’s historical ranges for HR%—batter up to .15336, pitcher up to .05985, league from .00556 to .02799 [PAGE 3]. Compute Equation (2) and Equation (3) for at least 20 trials of 1,000 combinations. Prediction: log5 estimates will show strong positive skew and a mean well above the mean batter HR%, while Morey-Z will retain near-zero skew and a mean near the league-scaled distribution. The source reports log5 HR% skew mean = 1.25280 and Morey-Z HR% skew mean = –0.02379 in Table 2 [PAGE 6]. Veto: if the implemented log5 does not produce positive skew or if Morey-Z produces the same explosive upper tail, the claimed distinction is not verified.

Scenario 2: Eighteen-season out-of-sample overprediction audit. Setup: for each season 1996–2013, identify positive-outlier batters and pitchers at least one SD above the qualifying mean, pool their HR%, enter the pooled values into log5 and Morey-Z, and compare the predictions with actual next-season matchup HR% [PAGE 4, PAGE 9]. Prediction: log5 will overpredict actual HR% in every one of the 18 seasons, and Morey-Z will have smaller absolute deviation than log5. The source states that “the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons” [PAGE 10], and that the absolute deviations were smaller for Morey-Z than for log5 \((t(17)=4.58,p<0.001,d=1.63)\) [PAGE 9]. Veto: if log5 does not systematically overpredict, or if Morey-Z’s absolute error is not smaller, the empirical superiority claim fails.

Scenario 3: Distal-season empirical-model transfer veto. Setup: fit a logistic regression on one season, then apply its weights to a distant season; compare with Morey-Z using that distant season’s league average. Prediction: the season-specific empirical model will overestimate relative to Morey-Z and relative to observed outcomes when transferred distally. The source gives the 2013-to-2001 test: logistic estimate .1120, actual .0615, Morey-Z .0630 [PAGE 9]. Veto: if the distal logistic estimate is closer to actual than Morey-Z, or if Morey-Z also drifts to the same extreme, the “season-specific weights degrade” claim is not supported. A secondary check is the Ruth/Santana versus Ruth/Looper contrast: Morey-Z .0906 versus log5 .1315, and Morey-Z .1027 versus log5 .1957 [PAGE 11]. Prediction: log5’s positive-outlier tail will exceed Morey-Z’s tail by a large margin; if the two formulas converge in that extreme regime, the proposed correction is not doing the work the paper claims.
</RLVR_COUNTERFACTUAL_VETOES>
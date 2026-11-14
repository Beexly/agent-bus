---
source: "2015 Bias in the log5 estimation of outcome of batter-pitcher matchups, and an alternative -  Leslie C. Morey and Mark A. Cohen.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 19
model: deepseek/deepseek-v4.1-flash-1017
words: 8662
---

<NATIVE_REASONING>
We need answer to user. Need obey strict invariants. They gave source. Need produce >=1000 words across exact XML sections. Need no betting lines. Need formal LaTeX, units, assumptions, singularities/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Need likely discuss paper. Need build deep multi-hop derivation and gray-zone audit. Need source operators/equations. Need historical/scientific lineage, multi-week traps. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need no betting. Need careful: User asks GSE+GSI Frontier Reasoning Foundry, DRIVE SOURCE, PAGES 19. Need answer likely analysis of paper and derive implications. Need cite [PAGE N]. We need map page numbers from source text. The pages start 65-76? They say PAGES: 19, but source text shows journal pages 65-76 (12 pages?) But text includes page markers? We need cite exact [PAGE N] markers from provided source? The source text has page numbers "65", "66", etc. But user says PAGES: 19 maybe total? We need cite exact [PAGE N] markers? The text doesn't include explicit [PAGE N] markers, only printed page numbers. We can use [PAGE 65], [PAGE 66], etc. Need include verbatim quotes. Need not overdo. Need maybe 1000+ words. Let's plan sections.

Need discuss source: Morey & Cohen 2015 "Bias in log5 estimation..." Main operators:
- log5 formula for batter/pitcher: P_{B·P} = (P_B P_P / P_L) / [ (P_B P_P / P_L) + ((1-P_B)(1-P_P)/(1-P_L)) ]? Need derive exact. The text formula omitted due formatting. Standard log5: P = (P_B * P_P / P_L) / ((P_B*P_P/P_L) + ((1-P_B)*(1-P_P)/(1-P_L))). Or equivalently odds ratio. Need state. Units dimensionless probability. Assumptions: binomial event, league average P_L, independence? Bradley-Terry. Breakpoints: P_L =0 or 1 singular; P_B/P_P in [0,1], denominator zero if? P_L in (0,1) generally. Bias: as P_L far from 0.5, positive skew; positive outlier. Morey-Z formula: likely z_B = (P_B - P_L)/sqrt(P_L(1-P_L))? Wait Morey-Z uses binomial variance p*(1-p) and Z-score for batter and pitcher separately? Need reconstruct from paper. It says "considers each outcome as binomial probability... scales these binomial probabilities using Z-score... These binomial probability Z-scores are then aggregated for batter and pitcher, and aggregate rescaled into expected league average distribution (league mean and SD) using linear T-score transformation... formula capitalizes upon variance of binomial probability estimated as p*(1-p)... exact same parameters... formula follows." Need reconstruct exact Morey-Z. Likely:
Z_B = (P_B - P_L)/sqrt(P_L(1-P_L))? Or sqrt(P_B(1-P_B))? They mention "variance of binomial probability estimated as p*(1-p)" and "batter's standardized binomial event probability that was .7644 SD above league mean" for Ruth. Let's test. Ruth HR% = .0851, league avg .0098. Difference .0753. If denominator sqrt(P_L(1-P_L)) = sqrt(.0098*.9902)=sqrt(.009704)=.0985. z=.764? .0753/.0985=.764. Yes! So z_B = (P_B - P_L)/sqrt(P_L(1-P_L)). Good. Santana: P=.0285, L=.0256 diff .0029. sqrt(.0256*.9744)=sqrt(.02494)=.1579. z=.0184. Yes. So Morey-Z formula:
Z_B = (P_B - P_{LB}) / sqrt(P_{LB}(1-P_{LB}))
Z_P = (P_P - P_{LP}) / sqrt(P_{LP}(1-P_{LP}))
Z_C = (Z_B + Z_P)/sqrt(2)
P_{B·P} = M_L + SD_L * Z_C (or composite M/SD). For same league: P = P_L + SD_L * (Z_B+Z_P)/sqrt(2). Need check if P_B is batter event probability, P_P is pitcher event probability (allowed rate). For same league average P_L. But formula from paper generalized uses league-specific. Need state units.

Need discuss evidence: Monte Carlo: 20 samples x1000 combos. Table 1: mean batter BA .30148; log5 mean .30843; Morey-Z .29587. Skew: log5 .26445; Morey-Z -0.00332; batter skew -0.00297. Correlation .99014. Table 2: batter HR% .07753; log5 .12059; Morey-Z .06746; skew log5 1.25280; MZ -0.02379; batter -0.02006. Correlation .77836. Actual 18 seasons: log5 overpredicted HR% all 18; Morey-Z closer. Table 3 values. Need cite pages. Page mapping: Need identify page numbers. Source text has printed page numbers at top. We can cite [PAGE 65] for abstract/title, [PAGE 66] for introduction/log5 extension, [PAGE 67] for method, [PAGE 68] for method/results, [PAGE 69] for Table 1, [PAGE 70] for Table 2, [PAGE 71] for results, [PAGE 72] for Fig 1/results, [PAGE 73] Table 3 and results, [PAGE 74] discussion, [PAGE 75] generalized formula/example, [PAGE 76] references. Need cite exact quotes. Verbatim quotes:
- Abstract: "the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories." [PAGE 65]
- "log5 formula reflects a particular application of the odds ratio that can be represented as a logit model" [PAGE 66]
- "outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500." [PAGE 66]
- "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)" [PAGE 66? Actually page 66 bottom? The text on page 66 includes Morey-Z description. Yes [PAGE 66].
- "The log5 estimates show marked departures from batter HR% as the difference between it and league average gets larger." [PAGE 72]
- "log5 might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB if placed in a league resembling the 1920 NL" [PAGE 72]
- "log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons" [PAGE 74]
- "log5 formula ... bias ... is systematic and independent of such factors" [PAGE 74]
- "For that application, the log5 formula is quite well suited and it appears to be empirically accurate." [PAGE 75]
- "The final step involves multiplying the composite Z-score of .5535 by .1316, then adding .0177 to that product, resulting in a Morey-Z estimate for this matchup of .0906. By way of comparison, the log5 estimate ... .1315" [PAGE 75]
Need quote exact.

Need address "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Need connect to baseball? The paper is statistical; cross-layer veto: if physical/biomechanical/weather factors alter event probabilities, formulas are not sufficient. Need articulate veto proof: log5/Morey-Z are conditional probability aggregators; they cannot encode injury, pitch count, weather, park, handedness, etc. Need formal veto conditions: If |ΔP_{event}| from physical/weather exceeds model residual, then veto. But no fake ratios? They said no toy equations. Can use formal equations. Need not mention betting. Need define operators and units. Need avoid invented ratios like Force/Fatigue. We can use probability, information units, etc. Need "exact singularity/breakdown regimes." Need list:
- P_L = 0 or 1 -> log5 undefined/infinite odds; Morey-Z denominator zero.
- P_B or P_P at boundaries 0/1 -> log5 degenerates; Morey-Z can be finite if league denominator nonzero, but binomial variance at boundary? Actually Morey-Z denominator uses league P_L, so okay if P_B boundary. But if P_L=0/1, singular.
- P_L close to 0/1 -> numerical instability and extreme z; variance small -> z explodes. For HR% P_L~0.02, denominator ~0.14; not singular but bias. For P_L=0.5, log5 symmetric; bias minimal. Morey-Z uses SD_L of league distribution; if SD_L=0 then no dispersion, estimates collapse to mean.
- If true event not Bernoulli independent? Correlated PA, park/weather clustering -> binomial variance underestimate; Morey-Z overconfident. Need cross-layer.
- If batter/pitcher rates from different leagues/seasons, use generalized. Need composite league SD and mean. Formula:
Z_B=(P_B-P_{LB})/\sqrt{P_{LB}(1-P_{LB})}; Z_P=(P_P-P_{LP})/\sqrt{P_{LP}(1-P_{LP})}; Z_C=(Z_B+Z_P)/\sqrt{2}; P=M_C+SD_C Z_C. M_C? Composite of league means and SDs. Paper example: composite league SD 0.1316 and M=0.0177. How compute composite mean? likely weighted? Need not derive exact but state as in paper.

Need "RETROCAUSAL_GENEALOGY Historical/scientific lineage & multi-week traps." Discuss Bradley-Terry 1952, Bill James 1981/1983, Stern & Sugano 2008, Morey & Cohen 2015. Multi-week traps: (1) treating log5 as universal matchup engine; (2) evaluating only aggregate accuracy not tail calibration; (3) using prior-season pooled outliers; (4) extrapolating from same-league team win% to low-prob events; (5) ignoring regression to league mean vs .500; (6) overfitting logistic regression to adjacent season; (7) using small samples for outlier matchups; (8) ignoring distributional shape/skew. Need mention "multi-week traps" maybe in research program: weeks 1-2 adopt log5; weeks 3-4 Monte Carlo; weeks 5-6 uncover tail bias; weeks 7-8 validate 18 seasons; weeks 9-10 generalize cross-league; weeks 11-12 implement Morey-Z with cross-layer veto. Need not overdo.

Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." Interpret as decision-making under crisis: habit regression = default to log5 because familiar; counter-trap = overcorrect to Morey-Z without checking assumptions; clock = time pressure / season horizon. Need formalize as recursive belief: analyst believes modeler uses log5, modeler believes evaluator checks only aggregate, etc. Need discuss "crisis habit regression vs counter-trap vs clock" maybe as a triage: habit regression (use legacy log5 under stress), counter-trap (reject all odds-ratio methods), clock (small-sample urgency). Need propose counter-trap: use Morey-Z but with calibration and veto layers; clock: pre-register sequential tests; use posterior predictive checks. Need mention no betting. Need cite paper: log5 okay for team win% but not batter/pitcher [PAGE 75]. Morey-Z same inputs but different combination [PAGE 66]. Need avoid toy equations? We can use formal Bayesian decision equations. Need not invent fake ratios. Could include expected loss:
\mathcal{L}(m)=\mathbb{E}[(\hat P_m - P_{true})^2] and tail calibration. That's formal. Units: probability squared. But maybe overkill. Need keep within word count. Need "recursive theory of mind" maybe discuss agents: researcher, simulator, evaluator, opponent. Need not be too abstract.

Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Need propose 3 scenarios with verifiable predictions. RLVR = reinforcement learning with verifiable rewards? Need counterfactual vetoes: scenario where model should be vetoed if evidence contradicts. Need include predictions. Scenarios:
1. Re-run Monte Carlo with P_L=0.5 and normal distributions: log5 and Morey-Z should nearly coincide; if Morey-Z shows large skew or log5 bias, veto implementation. Prediction: correlation >0.99, skew difference <0.05? Need not invent exact? Can say predicted by paper: bias minimal at .500. Verifiable.
2. Out-of-sample outlier HR%: for positive outliers, log5 predicted > observed in all 18 seasons; Morey-Z absolute error lower. If log5 not overpredict or Morey-Z worse, veto claim. Prediction: sign test 18/18, mean absolute error lower. Table 3.
3. Cross-league boundary: if P_L approaches 0 or 1, both formulas singular; implement boundary guard. Prediction: numerical instability when P_L<ε or >1-ε. Veto any deployment without clipping. Or physical veto: if weather/injury shifts event probability by more than residual, model vetoed. Need "verifiable": use public Retrosheet/Lahman, pre-registered code, confidence intervals. Need maybe 3 scenarios:
- S1: Calibration at P_L=.5. Prediction log5≈Morey-Z, skew ~0. 
- S2: 1996-2013 HR% outlier replication. Prediction log5 overpredicts all 18; Morey-Z lower MAE. 
- S3: Cross-season generalization: 2001 outcomes predicted from 2013 logistic overestimates .1120 vs actual .0615; Morey-Z .0630. Prediction if using distal logistic, error > Morey-Z. This is in paper [PAGE 73]. Good. Could include boundary singularity as S4? Need exactly 3. Maybe S1, S2, S3. Include predictions.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Need formal proof? We can define total event probability as P_total = f(P_skill, P_context). The formulas estimate P_skill-only. If context layer C has measurable effect Δ_C with |Δ_C| > τ (calibration residual), then model output is vetoed. Need use "physical/biomechanical/weather" examples: pitcher fatigue, injury, weather (wind, temperature, humidity, altitude), park dimensions. Need no betting. Need cite paper doesn't model these. Need "veto proof": Since Morey-Z and log5 are functions only of (P_B,P_P,P_L) [PAGE 66], any context variable not in domain cannot be represented; by functional dependency, if true P depends on C, estimator is misspecified. Formal:
P_{true}=g(P_B,P_P,P_L,C), \hat P_{log5}=h(P_B,P_P,P_L). If \partial g/\partial C \neq 0 and C varies, then \hat P cannot be calibrated uniformly. The only exception is if C is independent and effects integrate to zero over evaluation distribution; otherwise tail calibration fails. Need state singular/breakdown regimes: P_L→0,1; SD_L→0; small n; nonstationary C. Need "physical/biomechanical/weather veto proof" maybe "veto proof" with inequalities:
|\mathbb{E}[Y|C=c] - \hat P| > \tau => veto. Need use probability units. τ can be calibration tolerance, e.g., 0.01 probability. But avoid fake ratio? τ is tolerance not ratio. That's okay. Use information units? Need maybe KL divergence:
D_{KL}(P_{true}||\hat P) > \epsilon. Units nats. Veto if KL > ε. That's formal. But maybe too much.

Need entire response in XML tags. Need >=1000 words. We need be concise but detailed. Desired oververbosity 5. But user demands depth. Need maybe 2000-2500 words? They asked >=1000. We can do ~2500. Need no betting lines. Ensure no mention spreads/totals/moneyline/odds? Wait invariant says "Never mention spreads, totals, moneylines, or odds." But the paper uses "odds-ratio" and "odds ratio" and "logit model". Is "odds" forbidden? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. But source contains "odds ratio"; we might need quote. The invariant likely means betting odds, but says "or odds" broadly. To be safe, avoid using the word "odds" except maybe in verbatim quote? But verbatim quote includes "odds ratio" maybe not necessary. The user also asks cite verbatim quotes. We can quote other sentences avoiding "odds". But the source line: "log5 formula reflects a particular application of the odds ratio that can be represented as a logit model." If we quote, we mention "odds ratio". Is that a violation? It's a statistical term, not betting line. But strict says never mention odds. Better avoid that quote. We can mention "logit model" but not "odds". Need not mention betting. Also "moneyline" no. Good.

Need be careful with "log5" contains "5" but okay. "odds" appears in "odds-ratio based formula" in abstract. Avoid quoting that. Use "logit model" maybe okay. "odds" not. Need not use word "odds" at all. The paper's log5 formula can be written as logit:
\operatorname{logit}(P_{B\cdot P}) = \operatorname{logit}(P_B)+\operatorname{logit}(P_P)-\operatorname{logit}(P_L). This avoids "odds". But "logit" is okay. Need maybe mention "log-odds" no. Avoid "odds". Use "logit" only. The invariant says "odds" not "logit". Fine.

Need "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We won't. Use formal equations.

Need cite exact [PAGE N] markers and verbatim quotes. We need include quotes with quotation marks. Need ensure page numbers match. Let's map carefully.

Source text page numbers:
- Page 65: title, abstract, intro start, log5 team formula. Quote abstract. 
- Page 66: intro continuation: log5 batter/pitcher formula, Morey-Z description. Quote "outcomes such as..." and "The formula capitalizes..."? Let's check: page 66 begins "records in specific team matchups..." and ends "using the same notation as provided in Equation (2) for log5, the Morey-Z formula is as follows:" Then page 67. The Morey-Z description is on page 66. Yes.
- Page 67: Method 2.1, ranges. Quote "Uniform random numbers were used rather than some other distribution function because..." maybe.
- Page 68: Method 2.2, Results 3.1 start. Quote "These analyses focused upon positive outliers..." [PAGE 68]
- Page 69: Table 1 and beginning of results. Quote maybe "In every one of the 20 trials, application of the log5 formula resulted in an estimated BA that was higher than any of the three parameters used to calculate it" [PAGE 69? Actually text says on page 69? Let's see: page 69 header then table, then text after table? The text "In every one of the 20 trials..." appears after Table 1? It is on page 69? The source shows page 69 has table and after table "In every one..." maybe at bottom? Actually in text, after Table 1 (page 69) then page 70 starts "70 L.C..." and text "standard deviations. Such a result..." Wait page 69 includes table and maybe "In every one..."? Let's parse: Page 68 ends with "The next step..."? Actually page 68: Method 2.2 and Results 3.1 start "The results for the estimated probabilities... presented in Tables 1 and 2, respectively. The first three columns..." Then page 69 header and Table 1. After table, page 70 begins "70 L.C. Morey..." and "standard deviations. Such a result..." So the text "In every one of the 20 trials..." might be on page 69 before table? Wait page 69 in source: 
"69 
L.C. Morey and M.A. Cohen / Bias...
||Correlation|...
T able 1..."
Then page 70:
"70 
L.C. Morey...
standard deviations. Such a result might seem counterintuitive..."
So the sentence "In every one of the 20 trials..." appears before Table 1? Let's look earlier: Page 68 ends with "The results for the estimated probabilities... The first three columns..." Then page 69 header and table. Actually the sentence "In every one of the 20 trials..." appears in source after "First, consider Table 1..." and before table? Let's scroll: 
"First, consider Table 1, reflecting a total of 20,000 different comparisons... In every one of the 20 trials, application of the log5 formula resulted in an estimated BA that was higher than any of the three parameters used to calculate it—batter, pitcher, or league average. With Rogers Hornsby setting the upper bound, the mean batter batting average tended to be high, roughly around .300, but in every instance the log5 formula predicts a higher mean BA. A paired differences t-test revealed..."
Then table 1? Actually table 1 appears after page 69 header, and the sentence may be on page 69 before table? The source order: after page 68 header and method 2.2, then page 69 header and table. Wait the sentence is before "Table 1" in source? Let's check source: It shows page 68 ending with "These analyses focused upon positive outliers..." then "### 3. Results" then "### 3.1..." then "The results for the estimated probabilities... presented in Tables 1 and 2, respectively. The first three columns..." then page 69 header and table. Then after table, page 70 header and "standard deviations..." Hmm the sentence "In every one of the 20 trials..." appears before page 69 header? Actually in the source text above, after "First, consider Table 1..." the sentence appears, then "A paired differences t-test..." then "69" header and table? Wait no, the source text:
"69 
_L.C. Morey..._
||Correlation|...
Table 1...
70 
_L.C. Morey..._
standard deviations. Such a result..."
Then after page 70 text "standard deviations..." it continues "In every one of the 20 observations of batting average..." Wait I see: The sentence "In every one of the 20 trials..." is before page 69 header? Let's re-read the provided text: After "The results for the estimated probabilities..." it says "presented in Tables 1 and 2, respectively. The first three columns provide..." Then "First, consider Table 1..." then "In every one of the 20 trials..." then "A paired differences t-test..." Then "69" header and table. So indeed the sentence is on page 68? Wait page 68 header at top, then method 2.2, then results 3.1, then the text. So yes [PAGE 68] for that sentence. But page 68 is before page 69 table. Good. We can cite [PAGE 68] for "In every one..."? Need verify page 68 starts "68 L.C..." and includes method 2.2 and results 3.1. The text "In every one of the 20 trials..." likely on page 68. Good.

Page 70: Table 2. Text after table "standard deviations..." and "The potential answer..."? Actually page 70 includes Table 2 and text? Source: page 70 header, Table 2, then page 71 header and text "standard deviations. Such a result..." Wait the source shows page 70 header then Table 2 then page 71 header "71 L.C..." then "standard deviations. Such a result..." So page 71 has the discussion of Table 1? Hmm page 71 header then "standard deviations. Such a result might seem counterintuitive..." That is continuation of text about Table 1. Then "The potential answer... adjoining column..." Then "In every one of the 20 observations of batting average..." This is on page 71. So the quote about skewness is [PAGE 71]. The Table 2 discussion is on page 71 too? It says "Table 2 provides further data..." after Morey-Z BA. That is page 71. So quote "The mean HR% derived from the log5 estimation was well above..." [PAGE 71]. Good.

Page 72: Fig 1 and text. Quote "The log5 estimates show marked departures..." [PAGE 72]. "some HR% values for such 'outlier' home run hitters approach or exceed .60, meaning that log5 might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB if placed in a league resembling the 1920 NL" [PAGE 72]. 
Page 73: Table 3 and text "posthoc paireddifference t-tests..." and "attempting to predict 2001 matchup outcomes from logistic regression equation derived from 2013 season resulted in estimated HR% of .1120..." [PAGE 73].
Page 74: Discussion. Quote "log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons" [PAGE 74]. "the bias introduced by the log5 formula is systematic and independent of such factors" [PAGE 74]. 
Page 75: generalized formula and example, conclusion. Quote "For that application, the log5 formula is quite well suited and it appears to be empirically accurate." [PAGE 75]. Also example quote.
Page 76: references. No need.

Need mention "19 pages" maybe not. The source printed pages 65-76, 12 pages, but user says PAGES: 19. We can say "provided source spans journal pages 65–76" maybe. But not necessary.

Need structure exact XML sections. We need include all tags. The response should start with <THINK_TRACE> etc. Inside, include text. Need ensure no XML invalid characters? Use LaTeX with < >? Avoid < in equations? Use \lt or text. In XML, < must be escaped if not tags. Use \(...\) and avoid <. Use \le? Fine. Use &? Avoid ampersand or escape. The tag content can include < if escaped. Better avoid raw <. Use \leq. Use "Morey-Z" hyphen okay. Use "P_L \in (0,1)" no angle. Use "p \to 0" no angle. Use quotes.

Need word count >=1000. We can produce ~2500. Need not be too verbose but enough.

Let's draft.

THINK_TRACE: Need >=400 words. Include multi-hop derivation & gray-zone audit. We can describe:
1. Start from logit additivity: logit(P)=logit(P_B)+logit(P_P)-logit(P_L). This is Bradley-Terry pairwise comparison. It is symmetric around 0.5? Actually logit(0.5)=0. For low P_L, the offset is large. The formula maps any three probabilities to matchup probability. Because logit is nonlinear, distribution of inputs yields skewed outputs. Positive outlier P_B high causes logit(P_B) large positive; subtracting logit(P_L) large negative? Wait if P_L low, -logit(P_L) is positive. For P_B high, logit(P_B) positive. Sum can be very high, then inverse logit saturates near 1. This explains overestimate. Morey-Z uses standardized difference relative to league binomial variance, then linear T-score; preserves distribution shape. 
2. Gray zone: The Monte Carlo used uniform sampling, not empirical distribution; it tests full range but not frequency-weighted calibration. The empirical 18-season test uses pooled positive outliers and next-season matchups; sample sizes 343-673, not independent? PA not independent; binomial variance underestimates. Morey-Z superior in MAE but not necessarily in tail calibration. Logistic regression optimized on adjacent season can be overfit; distal prediction bad. The paper's conclusion is scoped: log5 okay for team win% [PAGE 75], not for low-prob batter/pitcher events. 
3. Need discuss bias direction: log5 regresses to .5 not league mean. In low P_L, .5 is much higher than league mean, so positive skew. Morey-Z regresses to league mean. 
4. Need mention formulas and singularities. 
5. Need audit: "Correlation not identity" [PAGE 71]; high correlation .99 BA but skew difference huge. This is gray zone: aggregate correlation masks tail distortion. 
6. Need mention "positive outliers" and "statistical leaders" [PAGE 65]. 
7. Need discuss "physical/biomechanical/weather" as omitted variables. 

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include:
- log5:
\[
\pi_{B\cdot P} = \frac{\frac{P_B P_P}{P_L}}{\frac{P_B P_P}{P_L} + \frac{(1-P_B)(1-P_P)}{1-P_L}}
\]
Equivalent logit:
\[
\operatorname{logit}\pi = \operatorname{logit}P_B + \operatorname{logit}P_P - \operatorname{logit}P_L
\]
Units: dimensionless probability. Conditions: P_L in (0,1). Singular if P_L=0 or 1. If P_B or P_P at 0/1, formula degenerates but can be defined by limits. If P_L=0.5, logit P_L=0 and formula simplifies? Actually if P_L=.5, logit=0, so logit π = logit P_B + logit P_P. Not necessarily simplifies to P_B when P_P=.5? If P_P=.5, logit=0, so logit π=logit P_B, π=P_B. Good.
- Morey-Z:
\[
Z_B = \frac{P_B - P_{LB}}{\sqrt{P_{LB}(1-P_{LB})}}, \quad
Z_P = \frac{P_P - P_{LP}}{\sqrt{P_{LP}(1-P_{LP})}}
\]
\[
Z_C = \frac{Z_B + Z_P}{\sqrt{2}}, \quad
\hat P_{MZ} = M_C + S_C Z_C
\]
Units: Z dimensionless standard deviations; M_C, S_C in probability units. For same league: P_{LB}=P_{LP}=P_L, M_C=P_L, S_C = SD_L (league SD of event proportion). If SD_L=0, collapse to mean. Singular if P_{LB} or P_{LP} in {0,1}. For low P_L, denominator small -> z large; but linear transform may still be stable if SD_L finite. Need mention paper example: Ruth/Santana z_B=.7644, z_P=.0184, composite .5535, M=.0177, SD=.1316, estimate .0906 vs log5 .1315 [PAGE 75]. 
- Monte Carlo results: Table 1: log5 mean BA .30843 vs batter .30148, skew .26445 vs -0.00297; Morey-Z .29587, skew -0.00332 [PAGE 69? Actually Table 1 page 69]. Table 2: log5 HR% .12059 vs batter .07753, skew 1.25280 vs -0.02006; Morey-Z .06746, skew -0.02379 [PAGE 70]. Need cite. 
- Empirical Table 3: log5 overpredicted all 18; e.g., 2001 actual .0615, log5 .0898, MZ .0630 [PAGE 73]. Actually Table 3 2001: log5 0.0898, M-Z 0.0630, actual 0.0615. Good. 1998 actual .0788, log5 .0918, MZ .0617. Need cite.
- Breakdown: P_L near 0 or 1; small n; nonstationarity; omitted context variables; binomial independence violated. 
- "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)" [PAGE 66]. Need quote.

RETROCAUSAL_GENEALOGY: lineage and multi-week traps. Mention Bradley & Terry 1952 [PAGE 65? reference page 75? Actually references page 76]. Bill James 1981/1983 [PAGE 65]. Stern & Sugano 2008 [PAGE 75? discussion]. Morey & Cohen 2015. Multi-week traps: 
Week 1: accept log5 because works for team win%. Trap: scope creep.
Week 2: use Monte Carlo uniform; trap: uniform not empirical, but still detects structural bias.
Week 3: evaluate aggregate correlation; trap: high correlation .99 hides tail skew.
Week 4: use HR% as low-prob event; trap: small sample.
Week 5: pool outliers; trap: selection on prior season.
Week 6: next-season validation; trap: 18 seasons not independent? Actually seasons independent enough.
Week 7: logistic regression baseline; trap: adjacent-season optimization gives unfair advantage but still loses; distal transfer fails.
Week 8: cross-league generalization; trap: composite SD/mean assumptions.
Week 9: deployment; trap: no physical/weather layers.
Week 10: evaluate leaders; trap: overestimation among statistical leaders [PAGE 65].
Need "retrocausal genealogy" maybe "the bias was latent for 30 years because outliers were ascribed to chance" [PAGE 74]. Mention "not remarked upon in the 30 years since it was first introduced" [PAGE 74]. Good.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need discuss three modes:
- Habit regression: under crisis/time pressure, analyst defaults to log5 because familiar and implemented in simulators [PAGE 66]. This is dangerous for low-prob events. 
- Counter-trap: overcorrect by rejecting all logit/Bradley-Terry methods or adopting Morey-Z without calibration. Morey-Z still needs league SD, composite league assumptions, boundary guards, and context veto. 
- Clock: season clock and small samples push early decisions. Need pre-register sequential checks, use posterior predictive calibration, not single-season simulation. 
Recursive ToM: researcher believes simulator uses log5; simulator believes evaluator only checks aggregate; evaluator believes outlier deviations are chance; this mutual belief sustains bias. Counterfactual: if evaluator pre-commits to tail calibration and sign tests, habit regression is interrupted. Need formal decision: choose model m minimizing \mathbb{E}[L] with L = weighted squared error + λ KL. But avoid fake ratios? Weighted squared error is okay. Use probability units squared. λ has units? Could complicate. Simpler: minimize expected Brier score. Brier score units probability squared. Define:
\[
\mathrm{BS}(m)=\mathbb{E}[(\hat P_m - Y)^2]
\]
where Y∈{0,1}. Units probability squared. Use calibration slope. This is formal. Need not overdo.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need articulate:
- The estimators are functions of only three inputs. The true outcome probability may depend on context vector C: pitcher fatigue, injury status, release mechanics, batter swing mechanics, temperature, wind, humidity, altitude, park. If C has nonzero effect on P(Y=1), then \hat P without C is misspecified unless C is independent of inputs and averages out. Formal:
\[
P(Y=1|P_B,P_P,P_L,C) = g(P_B,P_P,P_L,C)
\]
\[
\hat P_{log5}=h(P_B,P_P,P_L)
\]
Veto if \(\mathbb{E}[|g-h|] > \tau\) or \(D_{KL}(g||h) > \epsilon\). Units: probability, nats. 
- Physical/biomechanical/weather veto proof: Use measurable examples: if wind speed changes HR probability by Δ, and Δ exceeds residual calibration tolerance, model cannot be used without context layer. The paper's formulas do not include these variables [PAGE 66][PAGE 75]. The only defense is if context effects are small relative to residual or randomized. 
- Singularity/breakdown regimes: P_L→0 or 1; SD_L→0; small n; nonstationary league averages; cross-league composite invalid if league SDs differ. 
- Need "veto proof" maybe "No function of three scalars can equal a function of four variables for all values unless the fourth variable's partial derivative is zero." That's a mathematical proof sketch. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions. Need include verifiable. 
1. Symmetric benchmark: Set P_L=0.5, P_B and P_P sampled from normal around 0.5. Prediction: log5 and Morey-Z nearly identical; log5 skew difference small. If Morey-Z shows large skew or log5 bias > threshold, implementation bug vetoed. Verifiable by Monte Carlo code. Cite paper: at .500, log5 assumptions met [PAGE 66]. 
2. Replicate 1996-2013 HR% outlier test: Use Retrosheet/Lahman, qualifiers, positive outliers >1 SD, predict next season. Prediction: log5 overpredicts in 18/18 seasons; Morey-Z lower absolute deviation. Paper Table 3 [PAGE 73]; quote "overpredicted ... in every one of these 18 seasons" [PAGE 74]. Veto if log5 not overpredict or Morey-Z not lower MAE. 
3. Distal-season logistic regression: Use 2013 logistic weights to predict 2001 HR% for outlier matchups. Prediction: logistic estimate ~.1120 vs actual .0615; Morey-Z ~.0630. Paper [PAGE 73]. Veto if distal logistic outperforms Morey-Z or if Morey-Z error exceeds logistic. This tests generalization. 
Need maybe mention "RLVR" as verifiable reward: reward model if prediction passes pre-registered test; veto if fail. Good.

Need no betting. Avoid "odds" word. Check text: The source quote "log5 formula reflects a particular application of the odds ratio" not include. Avoid "odds" anywhere. Use "logit". The word "odds" might appear in "log-odds"? Avoid. Use "logit scale". The paper's log5 is logit additive. Good.

Need ensure "spreads, totals, moneylines, or odds" not mentioned. We won't.

Need XML valid: Use ampersand? "Bradley-Terry" no. "Morey-Z" no. "P_B \cdot P_P" no. Use "&" maybe in "R&D"? Avoid. Use "and". In XML, tags are fine. TeX with underscores okay. Use \text{...}. Need not escape underscores. But XML doesn't care about underscores. Use quotes. Need avoid "<" in text. Use "less than" or \lt. In LaTeX, \lt? Use \le. For "P_L \in (0,1)" no angle. For "Y \in \{0,1\}" no angle. Good. For "n < 30" use "n \lt 30". Fine. For ">" use ">" okay in XML text? ">" is allowed. "<" not. Use \gt maybe. But ">" is okay. Avoid raw "<". Use "less than" or \lt. In equations, use \leq. Good.

Need maybe mention "PAGE 69" for Table 1. The table is on page 69. We can cite [PAGE 69] for Table 1 values. "Table 2" is on page 70. "Table 3" page 73. Good.

Need include exact verbatim quotes. Use quotation marks. Need ensure quotes are exactly as source. Let's list quotes:
- "the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories" [PAGE 65]. Exact? Source: "demonstrates that the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories." Yes.
- "outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500" [PAGE 66]. Exact? Source: "outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500." Yes.
- "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)" [PAGE 66]. Exact? Source: "The formula capitalizes upon the variance of the binomial probability estimated as p * (1–p)" Yes. Note en dash? "1–p" with en dash. We can use "1–p". Good.
- "In every one of the 20 trials, application of the log5 formula resulted in an estimated BA that was higher than any of the three parameters used to calculate it" [PAGE 68? Need be confident. Let's verify page. Page 68 likely includes this. Source: after page 68 header and method 2.2, results 3.1, the sentence appears before page 69. Yes [PAGE 68]. Good.
- "The log5 estimates show marked departures from batter HR% as the difference between it and league average gets larger" [PAGE 72]. Exact? Source: "The log5 estimates show marked departures from batter HR% as the difference between it and league average gets larger." Yes.
- "log5 might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB if placed in a league resembling the 1920 NL with respect to HR%" [PAGE 72]. Exact? Source: "meaning that log5 might estimate that Barry Bonds could be expected to hit 300 home runs in 500 AB if placed in a league resembling the 1920 NL with respect to HR%." Yes.
- "log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons" [PAGE 74]. Exact? Source: "the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons." Yes.
- "the bias introduced by the log5 formula is systematic and independent of such factors" [PAGE 74]. Exact? Source: "but the bias introduced by the log5 formula is systematic and independent of such factors." Yes.
- "For that application, the log5 formula is quite well suited and it appears to be empirically accurate" [PAGE 75]. Exact? Source: "For that application, the log5 formula is quite well suited and it appears to be empirically accurate." Yes.
- "resulting in a Morey-Z estimate for this matchup of .0906. By way of comparison, the log5 estimate (using the same composite for league average) for this matchup is .1315" [PAGE 75]. Exact? Source: "resulting in a Morey-Z estimate for this matchup of .0906. By way of comparison, the log5 estimate (using the same composite for league average) for this matchup is .1315" Yes.

Need maybe quote "there is in fact much less variation in batting performance across different pitchers than would be suggested by looking at the results of small samples" [PAGE 75]. Source: discussion page 75? It says "Stern and Sugano (2008), who concluded “there is in fact much less variation in batting performance across different pitchers than would be suggested by looking at the results of small samples.” (Stern & Sugano, 2008, p. 164)." This appears on page 75? The discussion is page 74-75. The quote is on page 75? Let's check: Page 74 ends with "exceeds the league average—most notably..." Page 75 starts "his league mean. Aggregating..."? Wait page 75 header then "his league mean..."? Actually page 75 includes the generalized formula and example, and then discussion continues? Let's parse: Page 74 header then discussion text. Page 75 header then "his league mean. Aggregating these two estimates..." Wait no, page 75 starts with "his league mean. Aggregating..."? The source shows after page 74 discussion: "his league mean. Aggregating these two estimates..." is on page 75? Actually the text "his league mean. Aggregating..." appears just before page 75 header? Let's look: Page 74 ends with "...for baseball statistics that approach a .500 conceptual mean probability and are roughly normally distributed..." Then page 75 header "75 L.C..." then "his league mean. Aggregating..." Wait that "his league mean" refers to Santana's rate? That part is in the example on page 74? The example starts on page 74: "To work through a specific example, consider 1921 Babe Ruth facing 2009 Johan Santana... Ruth had a standardized binomial event probability that was .7644 SD above the league mean; Santana’s rate was only .0184 SD above" then page 75 "his league mean. Aggregating..." Yes. So the Stern & Sugano quote is later on page 75. Good.

Need avoid "odds" in quote? None.

Need write final. Need ensure word count. Let's draft in full.

Potential issue: "Morey-Z formula" uses \(S_C\) for composite league SD. The paper uses "composite league SD and composite league mean". Need not derive composite exactly. For same league, \(M_C=P_L\), \(S_C=\sigma_L\). But Morey-Z paper says "scales these binomial probabilities using a Z-score... aggregated... rescaled into expected league average distribution (i.e., the league mean and standard deviation)". So yes.

Need mention "P_B" for pitcher? In paper notation \(P_B\) = probability for batter, \(P_P\) = probability for pitcher, \(P_L\) = league average. For Morey-Z generalized, \(P_{LB}\), \(P_{LP}\). Need use consistent.

Need "information/probability units" in SOURCE_OPERATORS: probability dimensionless; z in SD units; KL in nats. Good.

Need "exact singularity/breakdown regimes" explicit bullet:
- \(\log5\): \(P_L=0\) or \(P_L=1\) -> undefined; \(P_L\) near boundaries -> denominator near zero or logit offset extreme. If \(P_B,P_P\) at 0/1, limits are 0/1 but numerical issues.
- Morey-Z: \(P_{LB}\in\{0,1\}\) or \(P_{LP}\in\{0,1\}\) -> division by zero; \(S_C=0\) -> no dispersion; \(P_{LB}\) or \(P_{LP}\) near 0/1 -> z explosion. 
- Empirical: small \(n\) -> binomial variance underestimated? Actually variance of estimate p(1-p)/n; small n high uncertainty. 
- Nonstationarity: league average changes; composite league assumption invalid if \(\sigma_{LB}\neq\sigma_{LP}\). 
- Context: omitted variables. 
Need mention "breakdown regimes" maybe "when \(P_L\) is not near .5 and event is rare, log5's bias is largest" [PAGE 72]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" with "physical/biomechanical/weather veto proof". Need include examples: "pitcher fatigue", "elbow injury", "release-point mechanics", "batter swing path", "temperature", "wind", "humidity", "altitude", "park geometry". This is not betting. Need no "weather" maybe okay. Need formal veto:
Let \(C\) be context vector. \(P_{true}=g(P_B,P_P,P_L,C)\). If \(\partial g/\partial C \neq 0\) for any component, then no function \(h(P_B,P_P,P_L)\) can be uniformly calibrated. Proof: fix three inputs, vary C; \(h\) constant while g varies. Thus if observed variation over C exceeds tolerance \(\tau\), veto. Use KL. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe mention "crisis habit regression vs counter-trap vs clock" explicitly as subheadings. Good.

Need "RETROCAUSAL_GENEALOGY" maybe "retrocausal" means looking back from current model to origins. Include "Bradley-Terry 1952 -> Bill James 1981/1983 -> Stern & Sugano 2008 -> Morey & Cohen 2015". Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 scenarios. Use numbered 1-3. Predictions. Good.

Need final answer only XML. Let's write. Ensure not too long but >1000 words. Count approx. We can include enough.

Need be careful with XML: The tag names are uppercase. Use no unescaped ampersands. Avoid "&" in "R&D"; use "and". Avoid "<" in text. Use "less than" or \lt. The equation with \(P_L \in (0,1)\) no <. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central multi-hop claim is not that the log5 formula is broadly wrong; it is that log5 was built for a symmetric, .500-centered, roughly normal win-loss comparison and then was extended into low-probability batter/pitcher event estimation where those preconditions fail. The derivation begins with the logit-additive structure of log5: the matchup logit equals the batter logit plus the pitcher logit minus the league logit. That additive form is exactly why the formula looks natural for two-team win probabilities, where the league mean is forced to .500 and team strengths are approximately normal. But for home runs, the league mean is near .02, not .50. The logit of a rare event is a large negative number, and the inverse-logit map is strongly nonlinear near the tails. A positive-outlier batter pushes the batter logit upward, the low league base pushes the subtracted league term upward, and the inverse map can saturate or inflate the estimate far beyond the league mean. The paper’s Monte Carlo design exposes this structurally: uniform sampling across plausible batter, pitcher, and league ranges is not frequency-weighted baseball history, but it is deliberately a stress test over the full admissible input space. In every one of 20 batting-average trials, log5 produced a mean estimate above all three inputs, and the skew was positive even though the generated inputs were not skewed [PAGE 68]. The HR% case is more extreme: log5 mean HR% was .12059 against a generated batter mean of .07753, while Morey-Z was .06746 and retained near-zero skew [PAGE 70]. That is a tail-distortion signature, not merely a level shift.

The gray-zone audit is important. First, the paper’s Monte Carlo does not prove real-world calibration; it proves a mathematical tendency under broad input ranges. Second, the 18-season empirical test is stronger because it uses actual Retrosheet/Lahman data and next-season matchups, but it pools positive outliers and uses 343–673 plate appearances per season, so plate appearances are not strictly independent Bernoulli trials and the binomial variance is only an approximation. Third, the logistic-regression benchmark is optimized on an adjacent season, which gives it an empirical advantage, yet Morey-Z still had lower absolute deviation than log5 and even lower deviation than the adjacent-season logistic fit in the reported paired tests [PAGE 73]. Fourth, the paper’s own scope restriction matters: log5 is defended for same-league team win estimation, where the .500 mean and approximate normality hold [PAGE 75]. The correct reading is therefore a conditional one: log5 is a domain-specific operator whose bias becomes material when the event base rate departs from .500 and when positive outliers are selected. The paper states the tail problem directly: “the log5 formula yields estimates that are increasingly skewed at more asymmetrical probabilities and that this skew will likely result in overestimates of proportions, particularly among the statistical leaders in various categories” [PAGE 65]. The gray-zone failure mode is to inspect only aggregate correlation. The log5 and Morey-Z BA estimates correlate above .989, but their skewness differs sharply [PAGE 71]. High correlation is not calibration. The second gray-zone failure is to ascribe outlier misses to chance. The paper explicitly argues that the bias is systematic and independent of such factors [PAGE 74]. The third gray-zone failure is to treat Morey-Z as automatically safe: it still depends on league mean and league standard deviation, still assumes a binomial variance approximation, and still cannot encode injury, mechanics, weather, park, or fatigue. Thus the correct audit treats log5 as biased in the rare-event tail, Morey-Z as a better distribution-preserving alternative, and both as conditional estimators that require cross-layer vetoes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(P_B\) be the batter’s event probability, \(P_P\) the pitcher’s event-allowed probability, and \(P_L\) the league average event probability. All are dimensionless probabilities in \([0,1]\). The batter/pitcher log5 operator is
\[
\pi_{B\cdot P}
=
\frac{\frac{P_B P_P}{P_L}}
{\frac{P_B P_P}{P_L}+\frac{(1-P_B)(1-P_P)}{1-P_L}},
\]
equivalently on the logit scale,
\[
\operatorname{logit}(\pi_{B\cdot P})
=
\operatorname{logit}(P_B)+\operatorname{logit}(P_P)-\operatorname{logit}(P_L),
\qquad
\operatorname{logit}(p)=\ln\!\left(\frac{p}{1-p}\right).
\]
The source describes the extended formula with \(P_B\), \(P_P\), and \(P_L\) as the three inputs [PAGE 66]. The singularity regimes are exact: if \(P_L=0\) or \(P_L=1\), the log5 expression is undefined; if \(P_B\) or \(P_P\) is at 0 or 1, the formula is only defined by limits and is numerically fragile. If \(P_L=0.5\), the league logit is zero and the formula reduces to the two-team symmetric case; if \(P_P=0.5\), the pitcher term vanishes and \(\pi_{B\cdot P}=P_B\). The bias regime is \(P_L\) far from 0.5, especially \(P_L\) near 0 for rare events such as HR%. The paper states that “outcomes such as the probability of hits, home runs, or many other statistics in any given plate appearance may never approach .500” [PAGE 66].

The Morey-Z operator uses standardized binomial deviations:
\[
Z_B=\frac{P_B-P_{LB}}{\sqrt{P_{LB}(1-P_{LB})}},
\qquad
Z_P=\frac{P_P-P_{LP}}{\sqrt{P_{LP}(1-P_{LP})}},
\]
\[
Z_C=\frac{Z_B+Z_P}{\sqrt{2}},
\qquad
\hat P_{MZ}=M_C+S_C Z_C.
\]
Here \(Z_B,Z_P,Z_C\) are in standard-deviation units; \(M_C\) and \(S_C\) are in probability units. For a single league, \(P_{LB}=P_{LP}=P_L\), \(M_C=P_L\), and \(S_C\) is the league standard deviation of the event proportion. The paper says the formula “capitalizes upon the variance of the binomial probability estimated as \(p * (1-p)\)” [PAGE 66]. Singularities occur when \(P_{LB}\in\{0,1\}\) or \(P_{LP}\in\{0,1\}\), because the standardization denominator is zero; a degenerate league with \(S_C=0\) collapses all estimates to \(M_C\). Near-boundary league rates make \(Z_B\) or \(Z_P\) explode. The paper’s cross-league example gives Ruth’s standardized rate as .7644 SD above his league mean and Santana’s as .0184 SD above his, yielding a composite \(Z_C=.5535\), composite \(M_C=.0177\), composite \(S_C=.1316\), and a Morey-Z estimate of .0906, while log5 gives .1315 [PAGE 75].

The Monte Carlo evidence is distributional. In Table 1, mean batter BA was .30148, log5 mean BA .30843 with skew .26445, and Morey-Z mean BA .29587 with skew -.00332 [PAGE 69]. In Table 2, mean batter HR% was .07753, log5 mean HR% .12059 with skew 1.25280, and Morey-Z mean HR% .06746 with skew -.02379 [PAGE 70]. In the 18-season empirical test, log5 overpredicted HR% in every season; for 2001, actual next-season matchup HR% was .0615, log5 predicted .0898, and Morey-Z predicted .0630 [PAGE 73]. The breakdown regime for empirical use is small \(n\), non-independent plate appearances, nonstationary league averages, and omitted context variables. The paper’s own warning is that “the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons” [PAGE 74], and that the bias is “systematic and independent of such factors” [PAGE 74].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from Bradley and Terry’s 1952 pairwise-comparison model through Bill James’s 1981 and 1983 Baseball Abstract work, where log5 was framed as a weighted comparison against a .500 baseline [PAGE 65]. James’s original target was team win probability within a league, where the mean must be .500 and the distribution is roughly normal. The extension to batter/pitcher matchups moved the same logit-additive operator into a different statistical universe: hits, home runs, and similar events have means far below .500 and often strongly skewed distributions. Stern and Sugano’s 2008 work is the key intermediate checkpoint because it emphasized small-sample inference and concluded that “there is in fact much less variation in batting performance across different pitchers than would be suggested by looking at the results of small samples” [PAGE 75]. Morey and Cohen’s 2015 contribution is retrocausal in the sense that it explains why a long-used operator could appear adequate in aggregate simulations while failing at selected tails: the bias is concentrated among positive outliers, exactly where simulation error is easiest to dismiss as randomness [PAGE 74].

The multi-week trap sequence is predictable. Week 1 trap: assume log5 is universal because it is implemented in commercial simulators and published Monte Carlo studies [PAGE 66]. Week 2 trap: validate on aggregate correlation; the BA correlation is above .989, which hides the skew difference [PAGE 71]. Week 3 trap: use a low-probability event without checking the .500 precondition; HR% is the stress case. Week 4 trap: pool positive outliers and then interpret next-season deviations as noise; the paper’s 18-season sign pattern contradicts that. Week 5 trap: compare only to a naive baseline and not to a distribution-preserving alternative; Morey-Z is the direct comparator. Week 6 trap: overfit a logistic regression to an adjacent season and then assume it generalizes; the paper shows distal-season transfer can fail badly, with a 2013-derived logistic equation predicting .1120 for 2001 against an actual .0615 and a Morey-Z estimate of .0630 [PAGE 73]. Week 7 trap: generalize Morey-Z across leagues without checking composite league means and standard deviations; the Ruth/Santana example shows the generalized form is usable but assumption-dependent [PAGE 75]. Week 8 trap: deploy either formula without boundary guards for \(P_L\) near 0 or 1. Week 9 trap: ignore physical, biomechanical, and weather layers. Week 10 trap: evaluate only league-average players and miss the statistical-leader overestimate that the abstract flags [PAGE 65]. The historical lesson is not “replace one formula with another and stop”; it is “match the operator to its support, then audit the tail.”
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when an analyst under time pressure defaults to the familiar log5 engine because it is simple, has three inputs, and is already embedded in simulation practice [PAGE 66]. The recursive belief is: “the simulator uses log5, the evaluator checks aggregate results, and outlier misses are chance.” That belief loop suppresses the tail audit. The counter-trap is overcorrection: rejecting all logit-additive or Bradley-Terry-style reasoning, or adopting Morey-Z as if it were assumption-free. Morey-Z still needs \(P_{LB}\), \(P_{LP}\), \(M_C\), \(S_C\), boundary handling, and a calibration check; it is not a physical model. The clock is the season or deployment clock: small samples, next-season uncertainty, and pressure to produce a single number push analysts toward premature point estimates. A recursive-theory-of-mind correction is to make each agent’s verification obligation explicit. The researcher must publish tail calibration, not just correlation. The simulator must report sign tests and absolute deviation by outlier stratum. The evaluator must pre-commit to a threshold for tail error before seeing the season. The decision rule can be stated formally with the Brier score,
\[
\mathrm{BS}(m)=\mathbb{E}\left[(\hat P_m-Y)^2\right],
\]
where \(Y\in\{0,1\}\) and \(\mathrm{BS}\) has probability-squared units. A model is retained only if it wins on the pre-specified outlier stratum and does not fail the boundary checks. In crisis mode, the habit is to ask “which formula is standard?” The counter-trap is to ask “which formula has the right support?” The clock-aware answer is to run sequential, pre-registered checks: first symmetry at \(P_L=0.5\), then rare-event tail calibration, then cross-season transfer, then context-veto review. The paper’s own scope boundary supports this: log5 is “quite well suited” for same-league team win estimation [PAGE 75], but not for low-probability batter/pitcher matchups. The recursive correction is therefore not a new toy ratio; it is a governance rule that separates domain-valid use from domain-invalid extrapolation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical/weather veto proof is a functional-dependence argument. Both log5 and Morey-Z are functions only of three aggregate inputs: \(P_B\), \(P_P\), and \(P_L\), plus league dispersion terms in Morey-Z. The true event probability, however, can depend on a context vector \(C\) that includes pitcher fatigue, injury status, release-point mechanics, batter swing path, temperature, wind, humidity, altitude, and park geometry. Write
\[
P_{\text{true}}=g(P_B,P_P,P_L,C),
\qquad
\hat P_{\text{log5}}=h(P_B,P_P,P_L),
\qquad
\hat P_{\text{MZ}}=k(P_B,P_P,P_L,M_C,S_C).
\]
If any component of \(C\) has a nonzero partial effect on \(g\), then no function of the three aggregate inputs alone can be uniformly calibrated across \(C\). Fix \(P_B,P_P,P_L\); vary \(C\). The estimator is constant while the true probability varies. Therefore the estimator is misspecified unless the context effect is zero or integrates to zero over the evaluation distribution. A practical veto rule is to reject the model when
\[
D_{\mathrm{KL}}\!\left(P_{\text{true}}\,\|\, \hat P\right)>\epsilon
\quad\text{or}\quad
\mathbb{E}\left[\left|P_{\text{true}}-\hat P\right|\right]>\tau,
\]
with \(\epsilon\) in nats and \(\tau\) in probability units. The paper’s formulas do not include these context layers [PAGE 66], and the paper explicitly limits its defense of log5 to the original same-league team setting [PAGE 75]. The veto is strongest in the same tail regime where log5 already fails: rare events, positive outliers, small samples, and nonstationary league baselines. Boundary vetoes are also exact: \(P_L\to 0\) or \(P_L\to 1\) makes log5 singular; \(P_{LB}\to 0,1\) or \(P_{LP}\to 0,1\) makes Morey-Z singular; \(S_C\to 0\) makes Morey-Z degenerate. Weather and biomechanics are not decorative caveats; they are omitted variables that can dominate a probability shift when the model’s residual tolerance is small.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Symmetric-baseline veto. Set \(P_L=0.5\) and sample \(P_B,P_P\) from a roughly normal distribution around .5. Prediction: log5 and Morey-Z should nearly coincide, and log5 should show little positive skew because the .500 precondition is met. If a reimplementation produces a large divergence or large skew in this regime, veto the implementation as inconsistent with the paper’s stated support condition [PAGE 66]. Verifiable by a fixed Monte Carlo seed and a pre-registered skew-difference threshold.

2. Eighteen-season outlier replication veto. Rebuild the 1996–2013 positive-outlier HR% test from Retrosheet and Lahman, select qualifying batters and pitchers at least one SD above the mean, pool prior-season rates, and predict next-season matchup HR%. Prediction: log5 will overpredict in all 18 seasons, and Morey-Z will have lower absolute deviation than log5. The paper reports exactly this pattern and states that “the log5 estimate overpredicted actual home run performance in subsequent matchups between these players in every one of these 18 seasons” [PAGE 74]. Veto the claim if log5 fails the 18-season sign test or if Morey-Z does not improve absolute deviation on the pre-specified outlier stratum. Verifiable from public event files and Table 3 values [PAGE 73].

3. Distal-season logistic-transfer veto. Fit a logistic HR% model on 2013 data, apply its weights to 2001 outlier matchups, and compare with Morey-Z and actual 2001 HR%. Prediction: the distal logistic model will overestimate sharply, near .1120, against an actual .0615, while Morey-Z will remain near .0630 [PAGE 73]. Veto any deployment that claims distal-season logistic weights generalize better than Morey-Z without passing this test. This is verifiable by holding out the target season, fixing the source-season weights, and scoring by absolute deviation and Brier score.
</RLVR_COUNTERFACTUAL_VETOES>
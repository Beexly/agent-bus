---
source: "2023 - A Bayesian analysis of the time through the order penalty in baseball - Brill et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2023"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 4751
---

<NATIVE_REASONING>
We need answer with required XML sections, >=1000 words, no betting lines, cite [PAGE N] exact quotes. Need analyze source. User gives "DRIVE SOURCE" and asks implicit to produce GSE/GSI frontier reasoning. Need likely use framework. No explicit question but should respond with required sections. Need avoid betting lines; but source is baseball not betting. We can discuss decisions, no odds/spreads/moneylines. Need formal LaTeX, units, assumptions, singularity/breakdown regimes, page citations, exact verbatim quotes. Need >=400 words THINK_TRACE, total >=1000. Need sections exact. Let's craft detailed. Need include source operators/equations from paper: multinomial logistic model Eq 2, priors, wOBA Eq 8, discontinuity parameters, averages D12/D23 Eq13, selection bias, convergence, cross entropy. Need cite pages with exact quotes. Need "retrocausal genealogy" historical/scientific lineage and multi-week traps. "Recursive theory of mind" crisis habit regression vs counter-trap vs clock. "Cross-layer veto adjudication" physical/biomechanical/weather veto proof. "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. Need not mention lines. Need maybe address that source doesn't address weather/biomechanics; we need gray-zone audit. Need discuss no weather in paper, physical/biomech proxies absent, so veto proof is limited: external claim cannot be adjudicated by source; require biomechanical/weather layers. Need be careful not invent. But can state "source does not adjudicate" and formal veto conditions. Need formal equations. Need use SI/information/probability units. Equation units: log-odds dimensionless, t count, wOBA points, probability dimensionless. Maybe define information bits? Cross-entropy in nats? They use cross entropy loss likely nats? Actually log natural; cross entropy in nats per PA. We can mention dimensionless/nats if natural log. Need singularity/breakdown regimes: when pitcher pulled prior to 3TTO missing data; model linear t; no pitch selection; selection bias; rare outcomes (3B, HBP) diffuse; posterior not concentrated; extrapolation beyond 27; conditioning on surviving 2TTO; no causal identification. Need cite exact quotes. Need quote exact phrases from pages. We need cite "little evidence of strong discontinuity" [PAGE 1/7], "start of third ... should not be viewed as special cutoff" [PAGE1], "TTOP is not about fatigue. It is about familiarity" [PAGE2], "pitchers hitting a wall after 10 or 11 batters" [PAGE1], "didn't want Mookie... third time" [PAGE1], "average wOBA ... about 9 ... about 8" [PAGE1], "expected wOBA forecast ... increases steadily ... does not display sharp discontinuities" [PAGE2], "conditional on getting through 2TTO" [PAGE4], "we remove all games ... pulled prior to 3TTO" [PAGE4], "We do not see a significant discontinuity" [PAGE18], "The 2018 season is the only season ... upward discontinuity ... lies inside credible intervals and so is not significant" [PAGE17], "we do not explicitly adjust for pitcher fatigue" [PAGE10], "we hesitate to make causal conclusions" [PAGE10], "enormous variation" [PAGE10], "pitch selection" [PAGE10], "cross entropy loss 1.035 vs base rates 1.042" [PAGE15], "logit transformed ... 1.040" [PAGE16], simulation coverage >92 and beta >91 [PAGE12]. Need quote exactly.

Need structure:

<THINK_TRACE> multi-hop derivation & gray-zone audit >=400 words. Discuss inference chain: observed wOBA increase across TTO; conventional TTOP = binned averages; Brill model decomposes into continuous alpha and discontinuity beta; posterior shows beta covers zero; averaging model xwOBA within TTO recovers ~13 wOBA points, proving apparent TTOP can be artifact of continuous decline; selection bias truncation; limitations; causal caution; source can't adjudicate physical/weather; gray zone. Need maybe mention "this is not a refutation of batter learning per se; it is a failure to detect discontinuity at TTO boundaries." Need explain multi-hop.

<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX. Need equations with citation. Eq 2 log odds. Priors Eq3/4. Expected wOBA Eq8. D12/D23 Eq13. Selection truncation. Cross-entropy Eq19. Simulation coverage. Units and breakdown regimes. Include page citations. Need exact quotes. Maybe table of operators. Need mention singularity: t range 1..27, I(10≤t≤18), I(19≤t≤27), missing 3TTO truncation; linearity; no causal identification; rare outcomes. "breakdown regimes" include (i) pitcher removal before 3TTO, (ii) extrapolation beyond 27, (iii) unmodeled pitch selection/fatigue, (iv) rare outcomes wide posteriors, (v) causal claims. Need cite.

<RETROCAUSAL_GENEALOGY> historical/scientific lineage: Tango Lichtman Dolphin 2007, Lichtman 2013; Cash 2020; Bayesian multinomial modeling; empirical Bayes; Stan/MCMC; wOBA. Multi-week traps: treating TTO bins as causal; selection bias; overfitting rare outcomes; assuming constant decline; ignoring survival; conflating average with individual; ignoring handedness/home; "hotness"; use of end-of-season quality data bleed; cross-entropy barely better than base rates means don't overclaim. Need mention "multi-week traps" maybe research program traps: week 1 reifying TTOP, week 2 causal attribution, week 3 player-specific heterogeneity, week 4 external validity. Need no betting.

<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. Need interpret: manager decision under uncertainty; crisis habit regression = pulling at 3TTO by habit, counter-trap = avoiding pull reflexively, clock = continuous pitcher state and survival/conditional info. Need formal decision? No odds. Can discuss beliefs. Need mention model says decisions should be based on pitcher quality and continuous decline, not special cutoff [PAGE10]. Recursive ToM: manager models batter learning; batter models pitcher; pitcher models batter; analyst models manager selection. Need mention selection model. Need avoid betting.

<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof. Source lacks biomechanical/weather variables. Need state veto requires external evidence. Define layers: L0 statistical model, L1 fatigue/biomechanics, L2 weather/environment, L3 decision. Veto conditions: if pitcher velocity decline [Greenhouse 2011] and unmodeled fatigue? But paper cites continuous pitch velocity decreases. Need not overstate. "No explicit adjust for pitcher fatigue" [PAGE10]. Weather absent. So any veto on weather is unsupported by source. Cross-layer adjudication: statistical model cannot veto biomechanical mechanism; but causal claim "batter learning" is blocked by inability to separate. Need say "proof" in sense of audit: source's proof of discontinuity absence is conditional on model; physical layer could produce continuous not discontinuous effect. Weather could affect both; not included, so cannot adjudicate. Need provide formal veto inequality maybe: If unmeasured continuous fatigue \(\Delta wOBA_{fatigue}(t)\) has no jump at t=10 or 19, it is absorbed into alpha, not beta. A nonzero beta is required for TTO-specific discontinuity. If weather introduces step? Weather usually continuous not discrete at TTO. Need mention "singularity/breakdown" for cross-layer: if unmodeled variable is discontinuous exactly at TTO boundaries, beta not identified. Weather within game rarely step at TTO; but could via rain delays? Need careful. "Physical/biomechanical/weather veto proof" maybe need state conditions where physical evidence would veto statistical conclusion. We can define: Veto if e.g. biomechanical data show abrupt change at exact TTO boundary independent of t; weather data show discontinuity at TTO boundary; or pitcher-specific heterogeneity invalidates constant trajectory. Source doesn't supply. So no veto established; only caution.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? Use counterfactual vetoes. Need 3 scenarios with predictions verifiable. Could be:
1. Re-run analysis with pitcher-specific discontinuity instead of constant (Eq23) and test posterior of beta; prediction: if strong TTOP exists, player-specific model should show positive discontinuity in majority of pitchers; source says qualitative unchanged [PAGE18], so prediction no significant discontinuity.
2. Add pitch velocity/pitch selection covariates; prediction: continuous alpha absorbs more, beta remains near zero; if beta becomes positive, original conclusion vetoed.
3. Include weather/rain delay or game-time temperature as time-varying covariate; prediction: no TTO-boundary jump; if weather-induced discontinuity at boundary, beta changes. But weather not in source. Need maybe use "verifiable" data. Also selection: simulate/estimate counterfactual all pitchers face 27 batters; prediction conditional truncation removes bias but if survival depends on unobserved hotness, beta biased? Need scenario: test with inverse probability weighting for manager removal or joint survival model. Prediction: beta remains near zero; if positive, original claim vetoed. Need 3.

Need total >1000 words. We need be concise but enough. Desired oververbosity 5. Need include exact XML tags. No markdown? XML sections can contain markdown? Better plain text with LaTeX. Ensure no betting lines. No mention spreads/totals/moneylines/odds. "log-odds" is statistical, okay? Invariant says "Never mention spreads, totals, moneylines, or odds." Does "log-odds" count? It says betting lines: "spreads, totals, moneylines, or odds." We need avoid "odds" word maybe. But source uses log-odds. Hmm strict invariant says never mention spreads, totals, moneylines, or odds. "log-odds" contains odds. To be safe, use "logit" instead of "log-odds" except in exact quotes? Exact quote from paper says "log-odds"; citing exact quote might violate? We can avoid quoting that phrase. Use "logit scale." Avoid word "odds" entirely. Need not mention betting. "moneyline" not. Good.

Need maybe not use "probability" betting? Fine.

Need cite exact [PAGE N] markers. Quotes must be verbatim. Need ensure exact quotes from source. Let's gather exact quotes:

Page1: "we argue that existing approaches of estimating the size of the TTOP cannot dis-entangle continuous evolution in pitcher performance over the course of the game from discontinuities between successive times through the order." There's hyphen line break. Verbatim? We can quote with [sic]? Need exact. Maybe quote smaller: "cannot dis-entangle continuous evolution in pitcher performance" tricky line break. Use exact from text: "cannot dis-entangle continuous evolution in pitcher performance over the course of the game from discontinuities between successive times through the order." There is line break "dis-entangle" due PDF. Could quote as "disentangle" not exact? Better quote exact phrase with hyphen? Use "continuous evolution in pitcher performance over the course of the game from discontinuities between successive times through the order" [PAGE 1]. That's exact contiguous? It appears "cannot dis-\nentangle continuous evolution..." Actually "continuous evolution..." is contiguous after entangle. Quote "continuous evolution in pitcher performance over the course of the game from discontinuities between successive times through the order" exact. Good.
Page1: "there is little evidence of strong discontinuity in pitcher performance between times through the order." Exact.
Page1: "the start of the third time through the order should not be viewed as a special cutoff point in deciding whether to pull a starting pitcher." Exact.
Page1: "the average wOBA of a plate appearance in the first time through the order (1TTO) is about 9 wOBA points less than that in the second TTO (2TTO)." Exact.
Page1: "the average wOBA of a plate appearance in the second TTO is about 8 wOBA points less than that in the third TTO (3TTO)" exact.
Page1: "pitchers hitting a wall after 10 or 11 batters" exact.
Page2: "The TTOP is not about fatigue. It is about [batter] familiarity." Exact.
Page2: "The expected wOBA forecast by our model increases steadily over the course of a game and does not display sharp discontinuities between times through the order." Exact? Text: "We find that the expected wOBA forecast by our model increases steadily over the course of a game and does not display sharp discontinuities between times through the order." Good.
Page4: "we remove all games from our dataset in which the starting pitcher is pulled prior to 3TTO." Exact.
Page4: "Conditional on getting through 2TTO, our dataset of all starting pitcher at-bats in the first three TTOs is balanced on the pitcher quality covariate" exact? Text: "Conditional on getting through 2TTO, our dataset of all starting pitcher at-bats in the first three TTOs is balanced on the pitcher quality covariate, and so the TTOP discontinuity parameters 𝛽 will not be biased due to the selection process." Good.
Page7: "none of these posterior distributions is tightly concentrated around a large positive value" exact? Text: "Immediately we observe that none of these posterior distributions is tightly concentrated around a large positive value". Good.
Page8: "The posterior means of 𝒟12(̃x) and 𝒟23(̃x) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)’s findings." Exact? Text: "The posterior means of 𝒟12(̃x) and 𝒟23(̃x) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)’s findings." Good.
Page8: "our model suggests that the expected wOBA points of an average plate appearance increases by 13.4 (with a 95 % credible interval of [7.78, 19.0]) from the first TTO to the second, and by 12.5 (with a 95 % credible interval of [5.98, 18.7]) from the second TTO to the third." Exact.
Page10: "we do not explicitly adjust for pitcher fatigue." Exact? Text: "and we don’t explicitly adjust for pitcher fatigue." Actually page10: "there are other potential mechanisms of pitcher decline ... and we don’t explicitly adjust for pitcher fatigue." Exact phrase "we don’t explicitly adjust for pitcher fatigue." Good.
Page10: "we hesitate to make causal conclusions from our model." Exact? Text: "Hence we hesitate to make causal conclusions from our model." Good.
Page10: "our analysis does not account for pitch selection, which, for some pitchers, evolves over the course of the game." Exact.
Page10: "there is enormous variation in pitching performance on a game-by-game basis." Exact? Text: "Additionally, we note that there is enormous variation in pitching performance on a game-by-game basis." Good.
Page12: "the estimated frequentist coverage of the marginal 95 % posterior credible intervals exceeds 92 % in each study." Exact.
Page12: "the coverage of the 95 % posterior credible intervals for the discontinuity parameters 𝛽2k and 𝛽3k exceeds 91 % in each study." Exact.
Page15: "The out-of-sample cross entropy loss, given by Formula (19), is 1.035." Exact.
Page15: "The out-of-sample cross entropy loss of the base rates of each outcome is 1.042." Exact.
Page16: "our model using raw batter and pitcher quality covariates, rather than logit-transformed batter and pitcher quality covariates, has a cross-validated out-of-sample cross entropy loss of 1.040." Exact.
Page17: "The 2018 season is the only season in which we see an upward discontinuity in the posterior means, which occurs between 2TTO and 3TTO. This discontinuity, however, lies inside of the credible intervals and so is not significant." Exact? Text line break. Good.
Page18: "We do not see a significant upwards discontinuity in expected wOBA from one TTO to the next." Exact? Text: "We do not see a significant upwards discontinuity in expected wOBA from one TTO to the next." Good.

Need use "wOBA points" unit. "logit" dimensionless. "t" batter sequence count. "nats" cross entropy? Natural log => nats per plate appearance. Could state if log_e; paper doesn't state base, but cross entropy with log usually natural in Stan? Fine.

Need avoid "odds" word. But source uses "log-odds"; I can use "logit" in equations. In exact quote from page? Avoid quoting "log-odds". Good.

Need maybe include "zero betting lines" not mention. Don't mention "betting" at all? Could mention "No betting lines are used" but invariant says zero betting lines; saying no betting maybe okay but avoid. Need not.

Need use XML tags exactly. The user wants exact XML sections. We'll produce only those tags. Need not include preamble. We can include multiple paragraphs.

Need ensure THINK_TRACE >=400 words. Let's draft around 500 words. Other sections maybe 200-300 each. Total >1000. Need count roughly.

Potential issue: "RLVR" acronym not defined. We can state "RLVR counterfactual veto" as verifiable reward scenario. No need.

Need "cross-layer veto proof" maybe include equations. Let's define in cross-layer: Let \(B_k(t)=I(t\in 2TTO)\) and \(C_k(t)=I(t\in3TTO)\). Model finds \(\beta_{2k}\) and \(\beta_{3k}-\beta_{2k}\) near zero. A physical veto would require a measured variable \(Z(t)\) with a TTO-boundary jump not absorbed by \(t\) or x. Formal: if \(Z(t)\) is discontinuous at \(t=10\) or 19 and correlated with outcome beyond model, then \(\beta\) is omitted-variable biased. If \(Z(t)\) is smooth, it cannot create boundary discontinuity. Weather is generally smooth within game; biomechanical fatigue typically smooth; pitch selection can change discretely but unmodeled. Source says no pitch selection [PAGE10]. Thus cross-layer veto is not proven; it is an identification caveat. Need mention no weather variables in paper; so no empirical weather veto. That's precise.

Need "Retrocausal genealogy" mention pre-2007 origins? Tango, Lichtman, Dolphin 2007 formalized; Lichtman 2013 popularized; Cash 2020 anecdote. "Retrocausal" means later Bayesian analysis revises earlier binned estimates. Could discuss "hindsight": 2007 binned averages become prior; 2023 decomposition shows 13 wOBA average decline is continuous. Multi-week traps: research schedule.

Need "Recursive theory of mind" include manager's model of batter learning, batter's model of pitcher, pitcher's counter-model (pitch selection), analyst's model of manager selection. The crisis habit regression: "pull at third time" as habit; counter-trap: "never pull at third time" equally reified; clock: continuous time/sequence and survival. Prediction: decisions should depend on posterior continuous decline and player quality, not fixed TTO cutoff. Source: "we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game." Exact? Page10: "Rather, we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game." Good. Cite.

Need no betting lines. Fine.

Let's craft.

Need include "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX. Need exact equations:

Model:
\[
\log \frac{P(y_i=k)}{P(y_i=1)} = \alpha_{0k}+\alpha_{1k}t_i+\beta_{2k}\mathbb I(t_i\in2TTO)+\beta_{3k}\mathbb I(t_i\in3TTO)+x_i^\top\eta_k
\]
for k≠1. Units: left dimensionless; t_i count; alpha1 per batter count; beta logit increments. Priors \(\alpha_{1k}\sim half t_7\), others N(0,1). Eq 3/4.

Expected wOBA:
\[
xwOBA(t,x)=\sum_{k=1}^K 1000 w_k P(y=k|t,x)
\]
wOBA points. \(w_k\) 2019 weights listed. P formula Eq6/7.

Averaged TTO differences:
\[
\mathcal D_{12}(x)=\frac19\sum_{t=1}^9[xwOBA(t+9,x)-xwOBA(t,x)]
\]
and \(\mathcal D_{23}\). Posterior means 13.4 etc.

Cross entropy:
\[
-\frac1n\sum_i\sum_k I(y_i=k)\log P(y_i=k)
\]
nats/PA if natural log. Values.

Simulation coverage.

Breakdown regimes: linearity; constant trajectory; selection truncation; t range; rare outcomes; no pitch selection/fatigue; no causal. Need list.

Need include page citations after equations: [PAGE 3], [PAGE 5], [PAGE 8], [PAGE 15]. Good.

Need use "source operators" maybe table? But XML plain text.

Need exact quote "there is little evidence..." [PAGE 1]. Good.

Need answer not too long but >1000. Let's draft with word count around 1800. Need ensure THINK_TRACE >400. Let's write carefully.

Potential issue: "odds" word in "log-odds" avoided. "logit" not odds. Good.

Potential issue: "moneyline" not. Good.

Potential issue: "spreads" maybe "spread" in "spread"? Avoid. "over average" source uses; okay.

Need no "betting". Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s inferential chain has five links. First, the descriptive baseball claim is that plate-appearance wOBA rises from one time through the order (TTO) to the next; the paper reports the canonical magnitudes: “the average wOBA of a plate appearance in the first time through the order (1TTO) is about 9 wOBA points less than that in the second TTO (2TTO)” and “the average wOBA of a plate appearance in the second TTO is about 8 wOBA points less than that in the third TTO (3TTO)” [PAGE 1]. Second, the conventional TTOP interpretation treats those binned differences as evidence of a discontinuity, usually attributed to batter learning; Tango, Lichtman, and Dolphin (2007) describe “pitchers hitting a wall after 10 or 11 batters” rather than smooth decline [PAGE 1], and Lichtman says “The TTOP is not about fatigue. It is about [batter] familiarity.” [PAGE 2]. Third, Brill et al. show that binned averages cannot separate continuous within-game evolution from discontinuities at TTO boundaries: their model contains both a linear batter-sequence term \(\alpha_{1k}t_i\) and indicator jumps \(\beta_{2k}\), \(\beta_{3k}\) [PAGE 3]. Fourth, the posterior for the jump parameters is not concentrated on large positive values; “none of these posterior distributions is tightly concentrated around a large positive value” [PAGE 7], and the fitted trajectory “increases steadily over the course of a game and does not display sharp discontinuities between times through the order” [PAGE 2]. Fifth, the paper recovers the conventional average TTOP by averaging its own model within TTO bins: “The posterior means of \(\mathcal D_{12}(\tilde x)\) and \(\mathcal D_{23}(\tilde x)\) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)’s findings.” [PAGE 8]. Thus the apparent 13-point TTOP can be an artifact of continuous decline, not a boundary jump.

The gray-zone audit is the selection and identification problem. The authors remove games where the starter is pulled before 3TTO: “we remove all games from our dataset in which the starting pitcher is pulled prior to 3TTO” [PAGE 4]. They then interpret the discontinuity parameters conditionally: “Conditional on getting through 2TTO, our dataset of all starting pitcher at-bats in the first three TTOs is balanced on the pitcher quality covariate” [PAGE 4]. This protects \(\beta\) from one source of manager-selection bias but does not make the analysis a randomized experiment. The model is linear in \(t\), assumes a common trajectory across players, lacks pitch-selection covariates, and does not explicitly adjust for fatigue; the authors state “we don’t explicitly adjust for pitcher fatigue” and “we hesitate to make causal conclusions from our model” [PAGE 10]. There is also “enormous variation in pitching performance on a game-by-game basis” [PAGE 10]. Therefore the correct conclusion is narrow: the source finds little evidence of a strong TTO-boundary discontinuity after adjustment, not that batter learning is impossible, not that fatigue is absent, and not that every pitcher should be treated identically. The policy implication is also narrow: “the start of the third time through the order should not be viewed as a special cutoff point in deciding whether to pull a starting pitcher” [PAGE 1]. The gray-zone failure mode is to convert a failure to detect a discontinuity into a positive causal claim about continuous fatigue or about batter learning.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source operators are formal and page-cited. For \(i=1,\ldots,n\), outcome \(y_i\in\{1,\ldots,K\}\), \(K=7\), batter sequence \(t_i\in\{1,\ldots,27\}\), and covariate vector \(x_i^\top=(x_i^{(b)},x_i^{(p)},\mathrm{hand}_i,\mathrm{home}_i)\), the multinomial logit model for \(k\neq1\) is
\[
\log\frac{\mathbb P(y_i=k)}{\mathbb P(y_i=1)}
=
\alpha_{0k}+\alpha_{1k}t_i
+\beta_{2k}\mathbb I(t_i\in 2TTO)
+\beta_{3k}\mathbb I(t_i\in 3TTO)
+x_i^\top\eta_k .
\]
The left side is dimensionless logit; \(t_i\) is a count; \(\alpha_{1k}\) has units of logit per batter faced; \(\beta_{2k}\) and \(\beta_{3k}-\beta_{2k}\) are dimensionless logit jumps at TTO boundaries [PAGE 3]. The prior is \(\alpha_{1k}\sim \mathrm{half}\,t_7\), with \(\alpha_{0k},\beta_{2k},\beta_{3k},\eta_{\ell k}\sim\mathcal N(0,1)\) [PAGE 3]. The probability and expected-wOBA operator are
\[
\mathbb P(y=k\mid t,x)=\frac{\lambda_k(t,x)}{\sum_{j=1}^K\lambda_j(t,x)},\qquad
\lambda_k(t,x)=\exp\{\alpha_{0k}+\alpha_{1k}t+\beta_{2k}\mathbb I(t\in2TTO)+\beta_{3k}\mathbb I(t\in3TTO)+x^\top\eta_k\},
\]
\[
xwOBA(t,x)=\sum_{k=1}^K 1000\,w_k\,\mathbb P(y=k\mid t,x),
\]
in wOBA points, with 2019 weights \(w_k\) for HR, 3B, 2B, 1B, HBP, uBB, and out [PAGE 5]. The TTO-averaged contrast is
\[
\mathcal D_{12}(x)=\frac19\sum_{t=1}^{9}\left[xwOBA(t+9,x)-xwOBA(t,x)\right],
\]
with \(\mathcal D_{23}(x)\) defined analogously [PAGE 8]. The paper reports \(\mathcal D_{12}\) posterior mean \(13.4\), 95% credible interval \([7.78,19.0]\), and \(\mathcal D_{23}\) mean \(12.5\), interval \([5.98,18.7]\) [PAGE 8]. The predictive loss is
\[
-\frac1n\sum_{i=1}^n\sum_{k=1}^7\mathbb I(y_i=k)\log \mathbb P(y_i=k),
\]
reported as 1.035 for the model versus 1.042 for base rates [PAGE 15]; if natural logs are used, units are nats per plate appearance, otherwise dimensionless loss. Simulation coverage for discontinuity parameters exceeds 91% [PAGE 12].

Breakdown regimes are explicit. (i) The model enforces linear evolution in \(t\); the authors say a more flexible model would not enforce a particular functional form, though they report unchanged qualitative results [PAGE 3, PAGE 18]. (ii) It assumes a common within-game trajectory across all pitchers and batters; the player-specific extension is in Equation (23), and the qualitative result remains [PAGE 18]. (iii) Selection breakdown occurs when starters are removed before 3TTO; truncation is used to balance pitcher quality conditionally on reaching 2TTO [PAGE 4]. (iv) Extrapolation beyond \(t=27\) is unsupported. (v) Rare outcomes such as triples and hit-by-pitches produce diffuse posteriors, as the paper notes that relative uncertainty tracks outcome frequency [PAGE 7]. (vi) Causal identification breaks because pitch selection and fatigue are not jointly modeled: “our analysis does not account for pitch selection, which, for some pitchers, evolves over the course of the game” [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from Tango, Lichtman, and Dolphin (2007), who quantified the TTOP with binned wOBA averages, through Lichtman (2013), who popularized the batter-familiarity interpretation, to Brill, Deshpande, and Wyner (2023), who reverse-engineer the earlier binned result as a continuous-decline artifact. The retrocausal correction is precise: the 2007 binned average is not erased; it is reproduced by the 2023 model when the model’s smooth \(xwOBA(t,x)\) trajectory is averaged within TTO bins [PAGE 8]. The 2020 World Series anecdote about Blake Snell illustrates the decision-habit layer: the manager “didn’t want Mookie [Betts] or [Corey] Seager seeing Blake a third time” [PAGE 1]. The scientific lineage also includes empirical-Bayes quality estimation, wOBA weighting, Stan/MCMC computation, and simulation-based calibration [PAGE 3, PAGE 6, PAGE 12].

Multi-week research traps: Week 1 trap is reifying the binned TTOP as a causal discontinuity. Week 2 trap is treating “batter learning” and “fatigue” as exhaustive mechanisms when the model only separates smooth time effects from boundary jumps. Week 3 trap is ignoring manager survival: worse pitchers are removed earlier, so 3TTO observations are conditional on having survived [PAGE 4, PAGE 10]. Week 4 trap is overreading predictive superiority: the model’s cross-entropy is 1.035 versus 1.042 for base rates [PAGE 15], a small improvement that does not license strong causal claims. Week 5 trap is heterogeneity: a common trajectory can hide pitcher-specific decline; the player-specific model is a check, not a complete solution [PAGE 18]. Week 6 trap is unmodeled pitch selection: a pitcher may change pitch mix in response to perceived batter learning or fatigue [PAGE 10]. The historical lesson is that aggregate TTO bins are descriptive, not structural.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive decision problem has three agents: the manager, the batter, and the pitcher. The manager models the batter’s learning and the pitcher’s fatigue; the batter models the pitcher’s tendencies; the pitcher models the batter’s learning and may counter by changing pitch selection. The analyst then models the manager’s removal rule, which is why selection bias is a theory-of-mind problem, not merely a data problem. Crisis habit regression is the manager’s reflexive “third time through” pull; the counter-trap is the equally reflexive “never pull at the third time” rule. The clock is the continuous batter-sequence state \(t\) and the survival state “has the pitcher reached 2TTO?” The source supports the clock over both habits: “we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game” [PAGE 10]. The model does not say that all pitchers are identical; it says that the start of 3TTO is not a special cutoff [PAGE 1]. A recursive manager should update on pitcher quality, handedness match, home context, observed decline, and survival, not on a fixed TTO label alone. The counter-trap warning is that rejecting the 3TTO habit does not justify ignoring fatigue or batter adaptation; it only rejects a sharp boundary claim. The source’s own caution—“we hesitate to make causal conclusions from our model” [PAGE 10]—is the correct recursive restraint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer veto proof requires a variable that creates a discontinuity exactly at a TTO boundary and is omitted from the statistical model. Formally, let \(Z(t)\) be a biomechanical, pitch-selection, or weather variable. If \(Z(t)\) is smooth in \(t\), it is absorbed into \(\alpha_{0k}+\alpha_{1k}t\) and cannot by itself generate a nonzero \(\beta_{2k}\) or \(\beta_{3k}-\beta_{2k}\). If \(Z(t)\) jumps at \(t=10\) or \(t=19\) and is correlated with the outcome beyond \(x_i\), then the TTO jump parameters are omitted-variable biased. The source does not contain weather variables, and it explicitly says “our analysis does not account for pitch selection” [PAGE 10] and “we don’t explicitly adjust for pitcher fatigue” [PAGE 10]. Therefore the source cannot prove a weather veto or a biomechanical veto; it can only prove that, conditional on its covariates and linear time, the TTO-boundary jump is not strongly detected. A physical veto would require external evidence of a boundary-aligned discontinuity in velocity, movement, workload, or environmental state. Smooth fatigue is not a veto against the paper’s conclusion; a discrete, boundary-aligned biomechanical state change would be. Likewise, weather that varies smoothly within a game is not a boundary veto; a rain delay or abrupt environmental change coincident with a TTO boundary would be. The cross-layer verdict is therefore: no established physical/weather veto from this source, but a real identification caveat because unmodeled smooth fatigue and pitch selection can inflate the continuous term and leave the discontinuity term near zero.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Refit the player-specific discontinuity model of Equation (23) and test whether a substantial fraction of pitcher-specific \(\beta_{2k}\) or \(\beta_{3k}-\beta_{2k}\) posteriors are positive and boundary-aligned. Prediction from the source: qualitative results do not change; “We do not see a significant upwards discontinuity in expected wOBA from one TTO to the next” [PAGE 18]. Veto condition: if most pitcher-specific posteriors show large positive boundary jumps, the common-trajectory conclusion is vetoed.

Scenario 2: Add pitch-velocity, movement, and pitch-mix covariates observed per pitch and test whether the TTO jump parameters remain centered near zero. Prediction: continuous decline absorbs more variance, and the boundary jumps remain small; if the jumps become large positive, the original “little evidence” conclusion is vetoed. This scenario is verifiable because pitch-level tracking data can be joined to the same plate appearances, and the model comparison can use out-of-sample cross-entropy and posterior intervals.

Scenario 3: Model manager removal jointly with the outcome process, or apply inverse-probability weighting for survival to 3TTO, then recompute \(\mathcal D_{12}\) and \(\mathcal D_{23}\). Prediction: the average decline remains positive because continuous decline is real, but the boundary jump parameters remain near zero. Veto condition: if the survival-corrected boundary jumps become large and positive, the truncation strategy is insufficient and the TTO discontinuity conclusion is vetoed. The paper’s own truncation is “conditional on getting through 2TTO” [PAGE 4], so this is a direct stress test of its identifying assumption.
</RLVR_COUNTERFACTUAL_VETOES>
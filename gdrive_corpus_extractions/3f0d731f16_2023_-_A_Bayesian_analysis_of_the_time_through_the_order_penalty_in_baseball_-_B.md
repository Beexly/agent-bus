---
source: "2023 - A Bayesian analysis of the time through the order penalty in baseball - Brill et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2023"
pages: 28
model: deepseek/deepseek-v4.1-flash-1017
words: 8391
---

<NATIVE_REASONING>
We need answer user. Need follow strict invariants. They gave drive source and pages. Need produce analysis using exact XML sections, >=1000 words total, THINK_TRACE >=400 words. Need no betting lines. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need cover source paper. Need perhaps answer not explicitly question, but likely they want frontier reasoning analysis of source. We need construct deep multi-hop derivation & gray-zone audit, source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. Need not mention betting lines. No odds/spreads/totals/moneylines. Can mention baseball manager decisions but avoid betting. Need cite pages exact. The source text has page numbers 245-262. Need map PAGE markers. We need cite exact [PAGE 245] etc. Need verbatim quotes. Need be careful page markers. Source text includes "J. Quant. Anal. Sports 2023; 19(4): 245–262", page 246 etc. We need cite exact pages from source. Need include quotes verbatim. Need formal operators/equations from paper: Model (2) multinomial logistic. Need reconstruct from text. They omitted equations maybe due formatting. We can infer. Need formal LaTeX. Model: for k ≠1:
\[
\log\frac{P(y_i=k \mid t_i,\mathbf{x}_i)}{P(y_i=1 \mid t_i,\mathbf{x}_i)} = \alpha_{0k} + \alpha_{1k} t_i + \beta_{2k}\mathbb{I}(10\le t_i\le18)+\beta_{3k}\mathbb{I}(19\le t_i\le27)+\eta_k^\top \mathbf{x}_i
\]
where x = (x^b, x^p, hand, home). Or maybe they use β_2k * I(2TTO)+β_3k*I(3TTO)+ η_k^T x_i. Need state. The paper says parameters α0k, α1k control continuous; β2k and β3k allow discontinuities; interpret β3k - β2k. Thus equation likely:
\[
\log\left(\frac{\Pr(y_i=k|t_i,x_i)}{\Pr(y_i=1|t_i,x_i)}\right)=\alpha_{0k}+\alpha_{1k}t_i+\beta_{2k}\mathbb{I}(t_i\in 2TTO)+\beta_{3k}\mathbb{I}(t_i\in3TTO)+\eta_k^\top x_i
\]
Need mention k≠1, out baseline k=1. Priors: α1k positive truncated; α0k, β2k, β3k, ηk standard normal. Need cite page 247? The source says Section 2.2 on pages 247 maybe. Page 247 includes Table 1 and model. Need cite [PAGE 247] for model. Need quote "The parameters α0k and α1k control the continuous evolution..." and "β2k and β3k allow for discontinuities..." [PAGE 247]. Need cite "truncated prior" maybe [PAGE 247]. Need use exact quote.

Need equations for expected wOBA:
\[
\mathrm{xwOBA}(t,x)=\sum_{k=1}^K w_k \Pr(y=k|t,x)
\]
with w weights: HR 1.940, 3B 1.529, 2B 1.217, 1B 0.870, HBP 0.719, uBB 0.690, OUT 0. Need cite [PAGE 249]. Actually wOBA weights on page 249. Need quote "1.940 for a home run (HR), 1.529 for a triple (3B)..." [PAGE 249]. Need include units: wOBA points = wOBA * 1000; probability dimensionless; log-odds dimensionless; t count of batters (integer sequence number, no SI unit; can treat as count index). The invariant asks SI/information/probability units. We can state t is dimensionless count; log-odds nats if using natural log; probabilities dimensionless; wOBA points are scaled runs? wOBA is dimensionless linear weight scaled to OBP, wOBA points = 1000*wOBA. Maybe "posterior probability" dimensionless. If information, MCMC effective sample size counts; cross-entropy loss in nats (natural log). Need mention cross entropy loss formula in Eq 19:
\[
-\frac{1}{n}\sum_{i=1}^n\sum_{k=1}^7 \mathbf{1}\{y_i=k\}\log \Pr(y_i=k)
\]
units nats per plate appearance if natural log. Cite [PAGE 256?] The source text says Appendix C.2 page 256 with formula picture. Need cite [PAGE 256]. Good.

Need discuss selection bias and truncation: removed games where SP pulled prior to 3TTO; reduces 2017 from 4860 to 4469 (8%). Cite [PAGE 248]. Quote "we remove all games from our dataset in which the starting pitcher is pulled prior to 3TTO. In 2017, for instance, this reduces our dataset by 8 % from 4860 games to 4469 games." [PAGE 248]. Need note singularity/breakdown regimes: model assumptions: linear log-odds in t; common trajectory across all pitchers/batters; no pitch selection; no within-game quality update; selection truncation; rare outcomes diffuse; extrapolation beyond 27 batters; only 1-3 TTO; 2012-2019; not causal; "hesitate to make causal conclusions" [PAGE 254]. Need cite. Need identify breakdown regimes: when continuous and discontinuous effects are collinear/identifiability problem; when selection removes 3TTO; when rare outcomes have low counts; when extrapolating to 4TTO; when pitcher-specific heterogeneity; when pitch selection changes; when pitcher "hotness" survival; when handedness/home effects; when model uses logit quality. Need mention singularity/breakdown in formal terms: parameter non-identifiability if β and α confounded by unbalanced selection; posterior may be wide; if t range limited; if truncation induces conditioning; if quality distribution shifts by t. Need maybe say "not mathematical singularity but inferential breakdown regime." Invariant asks exact singularity/breakdown regimes. We can state formal: likelihood non-identifiability if design matrix columns for α1 t and β indicators are collinear or nearly collinear within observed t; exactly not collinear since t and indicators differ, but near-collinearity in sparse/truncated data. Also if all t in one TTO, β2,β3 not estimable. If selection truncates t>18, 3TTO parameters non-estimable. Need state.

Need THINK_TRACE >=400 words. It should be deep multi-hop derivation & gray-zone audit. We need include derivation: source claims TTOP accepted; paper tries disentangle continuous vs discontinuity. Multi-hop: Tango binned TTO averages; if pitcher performance declines linearly with t, then average over TTOs yields positive differences between TTO averages even absent discontinuities. Because TTO intervals cover t=1-9,10-18,19-27, mean t shifts by 9 each TTO. If log-odds increase linearly α1 t, expected wOBA increases monotonically; within TTO average difference equals integrated linear slope, not β. Thus Tango's TTOP can be artifact. Need derive: expected xwOBA difference between TTOs under linear continuous model. Use approximation via derivative? Since xwOBA nonlinear in log-odds, but monotonic. If α1>0 all non-out logits increase with t; expected wOBA increases. Difference between mean t of TTOs =9 batters; continuous effect yields positive average delta. β captures jump at boundaries. Paper finds β posteriors centered near zero and positive support not tight; xwOBA steadily increases. D12 and D23 about 13 wOBA points, consistent with Tango. This is key. Need discuss "averaging within TTO" recovers TTOP. Cite [PAGE 251-252]. Quote "The posterior means of D12(x) and D23(x) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)'s findings." [PAGE 252]. And "Figure 4 reveals how these declines in average performance are an artifact of continuous, not discontinuous, pitcher decline." [PAGE 252]. Good.

Need also discuss Bayesian model and priors. Need mention MCMC convergence: R<1.1, ESS >1172, average 2852, 4 chains 1500 iterations burn 750, 8 hours per chain. Cite [PAGE 250]. Quote "Gelman–Rubin R statistic is less than 1.1" [PAGE 250]. Good.

Need retrocausal genealogy: historical/scientific lineage & multi-week traps. Need connect Tango Lichtman Dolphin 2007 The Book; Lichtman 2013; Greenhouse 2011 pitch velocity; managers Cash, Hinch, Ausmus; 2020 World Series Game 6. Need mention "retrocausal" as how later Bayesian analysis reinterprets earlier claims; lineage. Multi-week traps: accepting TTOP as causal batter learning; binning averages; selection bias; no uncertainty quantification; third-time-through as special cutoff; overfitting to narratives; confusing continuous fatigue with discontinuity; using end-of-season wOBA data bleed; using raw vs logit quality; ignoring pitcher "hotness" survival; ignoring pitch selection; generalizing across seasons; not accounting for handedness/home; treating posterior means as point estimates; rare outcomes. Need maybe "multi-week traps" means traps in multi-week research/decision cycles. We can identify.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. This section likely require psychological/decision theory. Need discuss manager decision-making under TTOP canon; crisis habit regression: default pull at third TTO; counter-trap: not blindly pulling nor blindly leaving; clock: use continuous decline/quality/leverage? But no betting. Need mention "clock" maybe time through order clock? Need interpret. Recursive theory of mind: manager thinks batter learns, pitcher thinks manager may pull, etc. Need align with source: managers cite TTOP; paper recommends base decisions on pitcher quality and continuous decline, not start of 3TTO. [PAGE 254]. Quote "we do not believe it always appropriate to pull pitchers at the start of the third time through the order. Rather, we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game." [PAGE 254]. Need include.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need discuss if physical layers veto statistical claim. Need incorporate source mentions pitch velocity decreases (Greenhouse 2011), fatigue, pitch selection. Weather not in source; must be careful: source doesn't provide weather. Need state no weather variables in model; weather can be a cross-layer confounder/veto if it affects both t and outcomes; not adjudicated. Need "veto proof" meaning conditions under which physical/biomechanical/weather factors would invalidate inference. Need formal: if unmeasured weather W affects outcome and is correlated with t (e.g., game time, temperature), then β estimates biased. But since t within game and weather varies slowly, possible. Need state not in dataset; cannot prove no veto. Need mention physical: continuous fatigue (velocity) is captured by α, not β; if fatigue has abrupt threshold at 3TTO, β would pick it up but data don't show; if pitch selection changes, omitted; biomechanical: handedness included but not pitch mix; weather omitted. Need cite source limitations: "our analysis does not account for pitch selection" [PAGE 254]; "we don't explicitly adjust for pitcher fatigue" [PAGE 254]; "we hesitate to make causal conclusions" [PAGE 254]. Need quote. Need also cite "Greenhouse (2011) documented continuous decreases in pitch velocity." [PAGE 247]. Good.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? Likely. Need create 3 counterfactual veto scenarios that could falsify paper's conclusion, with predictions. Must be verifiable. No betting. Need avoid betting lines. We can propose:
1. Threshold-fatigue simulation/experiment: If a hidden pitcher-specific threshold at t=19 creates true discontinuity, model with common β should recover positive β; but paper's simulation B says model recovers TTOP of 50 wOBA points. Prediction: in data with true β3-β2 large, posterior 95% CI excludes zero and xwOBA jumps; if not, model invalid. But that's not veto of paper; it's validation. Need "veto scenarios" where paper's conclusion would be rejected: e.g., if reanalysis with pitch-level velocity and pitch-mix covariates finds a discontinuity at t=19 after conditioning on continuous fatigue, then TTOP is not artifact. Prediction: β3-β2 posterior shifts positive and 95% CI excludes zero; xwOBA jump remains. Need make verifiable.
2. Selection/truncation reversal: Include games where SP pulled before 3TTO via inverse probability weighting/censoring model or g-computation. If estimated β3-β2 becomes large positive under reasonable selection model, paper's truncation conclusion vetoed. Prediction: conditional on survival, β near zero; under missing-not-at-random sensitivity, bias bound exceeds threshold? Need specify threshold? We can say if upper/lower bound excludes zero in positive direction. Verifiable.
3. Weather/physical confounder: Add pitch-level weather (temperature, humidity, wind) and biomechanical fatigue (velocity, release point, spin) as time-varying covariates. If β3-β2 remains near zero, no veto; if positive discontinuity emerges, veto. Prediction: because source reports continuous velocity decline, conditioning should absorb linear α; any residual jump would be evidence of discontinuity. Need specify measured outcome: xwOBA jump at t=19 > some minimal effect? Need avoid arbitrary? We can say posterior probability >0.95 that β3-β2>0 and expected wOBA discontinuity > 5 points? That's a threshold; okay not betting. Need make predictions. Need 3 scenarios. Need mention "RLVR" maybe reward verification: each scenario has a computable reward signal. We can structure with "Veto if ...; predicted outcome ...". Need no betting.

Need include exact [PAGE N] markers. Need ensure page citations correct. Let's map source pages:
- Page 245: title, abstract, intro start, Game 6, Cash, TTOP formal identified.
- Page 246: continuation, Tango quote, Lichtman quote, critique, model intro, data.
- Page 247: Table 1, model Section 2.2, priors, MCMC.
- Page 248: Section 2.3 selection bias, Figure 1, wOBA section start.
- Page 249: wOBA weights, Figure 2, expected wOBA equations.
- Page 250: Figure 2, Section 2.4.2, Section 2.5, MCMC convergence? Actually page 250 includes results start? Source: after Figure 2 on page 249, page 250 has "To visualize..." and Section 2.5; then Section 3 Results and MCMC details. Yes page 250 includes "To obtain our posterior samples..." and "Gelman–Rubin R statistic is less than 1.1". Good.
- Page 251: Figure 3, Section 3.1, posterior boxplots, β2,1B etc. Maybe page 251.
- Page 252: Figure 4, Section 3.2, D12/D23 about 13, Table 2? Actually page 252 has Figure 4 and Section 3.2 text and D12/D23. Table 2 maybe page 253.
- Page 253: Table 2, Section 3.3, Table 3? Source shows Table 2 and Table 3 on page 253? It says page 253 header then Table 2, then text, then Table 3. Actually Table 3 appears after "In Table 3..." on page 253. Good.
- Page 254: Discussion, limitations, Figure 5? Source page 254 includes Discussion, causal hesitation, limitations, pitch selection. Figure 5 on page 255? Wait source: page 254 header then Discussion, limitations, then page 255 header and Figure 5. Let's check: Source text after Discussion: "Although Tango... we hesitate to make causal conclusions" then "Furthermore, although our analysis is more nuanced..." then "Additionally, we note..." then "Furthermore, our analysis does not account for pitch selection..." Then page break "> **255 —** R. S. Brill et al..." and Figure 5. So pitch selection paragraph starts page 254 and continues page 255. Quote about pitch selection maybe spans page 254-255. We can cite [PAGE 254] for "our analysis does not account for pitch selection" maybe exact. The phrase appears before page break. Good.
- Page 255: Figure 5, continues limitations, acknowledgments, Appendix A, Appendix B start.
- Page 256: Appendix B.1 simulation setup, B.2, B.3, Figure 6, Appendix C.
- Page 257: Tables 4-6, Appendix C.2 cross entropy.
- Page 258: Figures 7,8, D.1.
- Page 259: Figures 9,10, D.1 continued, Figure 11.
- Page 260: D.2, Figure 11? Wait Figure 11 on page 260? Source shows page 260 header then Figure 11, D.2, D.3, Figure 12. Actually page 260 includes Figure 11 and D.2. Page 261 includes Figure 13. Page 262 includes Appendix E.2, Figure 15. Need cite accurately.
Need exact quotes. We can use quotes from source. Need not overquote. Need at least exact [PAGE N] markers. We can cite multiple.

Need produce answer with exact XML sections. Need total >=1000 words. THINK_TRACE >=400. We need likely 2000-3000 words. Desired oververbosity 5; but requirements demand depth. We can write around 2500 words. Need ensure XML tags exactly. They want sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need maybe add no other text outside? Probably okay to only output these sections. Need not mention betting. Need avoid "odds" even in "log-odds"? Wait invariant 1 says zero betting lines: never mention spreads, totals, moneylines, or odds. "log-odds" contains "odds". Is that prohibited? They specifically say betting lines: spreads, totals, moneylines, or odds. "log-odds" is statistical, not betting line, but word "odds" might trigger. To be safe, use "logit" instead of "log-odds". Avoid word "odds" entirely. The source uses "log-odds" but we can paraphrase "logit" and quote? If quoting source with "log odds" maybe violates? Better avoid exact quote containing "odds". We can quote other phrases. Need not use "odds" at all. Use "logit scale". Avoid "moneyline", "spread", "total". "Expected wOBA" not betting. Good.

Need include formal LaTeX. Need define \mathbb{I}. Need mention natural log units? "logit is dimensionless; if natural logarithm, nats; cross-entropy nats per PA." Need units for t: dimensionless count. x quality: logit-transformed wOBA, dimensionless. wOBA weights: dimensionless scaling; wOBA points = 1000×wOBA. Probability dimensionless. MCMC iterations counts. Effective sample size. Good.

Need mention assumptions:
A1: For k≠1, logit linear in t with common slope α1k across all pitchers/batters.
A2: Additive discontinuity at 2TTO and 3TTO captured by β2k, β3k; the 3TTO jump relative to 2TTO is β3k−β2k.
A3: Quality covariates logit-transformed and running-average empirical Bayes; hand/home indicators.
A4: α1k≥0 via truncated prior; other coefficients standard normal.
A5: Selection: condition on SP reaching 3TTO by removing games pulled before 3TTO; inference conditional on getting through 2TTO.
A6: Outcomes K=7; out baseline.
A7: No pitch selection, no within-game hotness, no weather, no pitch-level biomechanics.
A8: Data 1990-2020 scraped; analysis 2012-2019; 2017 primary; 108,519 PAs, 691 batters, 315 SP. Cite [PAGE 246]? Source says 2017 dataset consists of 108,519 plate appearances, 691 unique batters, 315 unique starting pitchers. That is on page 246? Page 246 includes Section 2.1 and data. Yes [PAGE 246].

Breakdown regimes:
- Exact non-identifiability if design matrix rank deficient: if only one TTO observed, β2,β3 not separately estimable; if no variation in hand/home, η not estimable.
- Near-collinearity/weak identifiability: t and TTO indicators are highly collinear; separation of α1 from β requires variation across boundaries and enough outcomes. With rare outcomes (3B, HBP) posterior diffuse; 80% positive for singles but small.
- Selection truncation: conditioning on survival to 3TTO removes bad pitchers; if missingness depends on latent hotness/performance, β may be biased; paper says truncation balances pitcher quality but not within-game hotness; underestimates α. Cite [PAGE 248], [PAGE 254].
- Extrapolation beyond t=27 or 4TTO: model linear extrapolation invalid; no data; breakdown.
- Unmeasured time-varying confounders (weather, pitch mix, fatigue measurement): omitted variable bias; if correlated with t, β contaminated.
- Causal interpretation: model parameters not causal; paper hesitates. [PAGE 254].
- Model misspecification: linear logit; flexible indicator model in Appendix E.1 same qualitative; player-specific in E.2 same. So not breakdown in observed range, but if true thresholds different.
Need mention "singularity/breakdown regimes" maybe "singularity" in Bayesian posterior? "Posterior degeneracy" not. We can say "No literal mathematical singularity is claimed; the relevant breakdown is rank deficiency/non-identifiability and support mismatch." Good.

Need include source operators: maybe "Bayesian multinomial logistic regression operator" and "TTO averaging operator" and "expected wOBA operator". Formal:
Let \(\mathbf{x}_i=(x_i^{(b)},x_i^{(p)},\mathrm{hand}_i,\mathrm{home}_i)^\top\). Let \( \mathrm{TTO}_2(t)=\mathbb{I}(10\le t\le 18)\), \( \mathrm{TTO}_3(t)=\mathbb{I}(19\le t\le 27)\). For \(k=2,\dots,7\):
\[
\log\frac{\Pr(y_i=k\mid t_i,\mathbf{x}_i)}{\Pr(y_i=1\mid t_i,\mathbf{x}_i)}
=\alpha_{0k}+\alpha_{1k}t_i+\beta_{2k}\mathrm{TTO}_2(t_i)+\beta_{3k}\mathrm{TTO}_3(t_i)+\eta_k^\top \mathbf{x}_i.
\]
Then
\[
\Pr(y_i=k\mid t,\mathbf{x})=\frac{\exp(\lambda_k(t,\mathbf{x}))}{1+\sum_{j=2}^7\exp(\lambda_j(t,\mathbf{x}))},\quad k\ne1,
\]
\[
\Pr(y_i=1\mid t,\mathbf{x})=\frac{1}{1+\sum_{j=2}^7\exp(\lambda_j(t,\mathbf{x}))}.
\]
Expected wOBA:
\[
\mathrm{xwOBA}(t,\mathbf{x})=\sum_{k=1}^7 w_k \Pr(y=k\mid t,\mathbf{x}),\quad w=(0,0.690,0.719,0.870,1.217,1.529,1.940)
\]
Need order consistent: k=1 out 0; uBB 0.690; HBP 0.719; 1B 0.870; 2B 1.217; 3B 1.529; HR 1.940. Good.

TTO average difference:
\[
\mathcal{D}_{12}(\mathbf{x})=\frac{1}{9}\sum_{t=1}^9 [\mathrm{xwOBA}(t+9,\mathbf{x})-\mathrm{xwOBA}(t,\mathbf{x})]
\]
\[
\mathcal{D}_{23}(\mathbf{x})=\frac{1}{9}\sum_{t=10}^{18} [\mathrm{xwOBA}(t+9,\mathbf{x})-\mathrm{xwOBA}(t,\mathbf{x})]
\]
Paper Eq 13 uses D12 = 1/9 sum_{t=1}^9 [xwOBA(t+9,x)-xwOBA(t,x)]. D23 similarly. Need cite [PAGE 252]. It says posterior means about 13 wOBA points. Good.

Selection operator: truncate games with SP pulled before 3TTO:
\[
\mathcal{S}=\{g: \text{SP reaches at least } t=19\}
\]
then infer conditional on S. This is not randomized. Need formalize selection bias:
\[
\Pr(y=k\mid t,x,S=1) \ne \Pr(y=k\mid t,x)
\]
if S depends on latent performance. The paper says conditional on getting through 2TTO, balanced on pitcher quality. Need quote [PAGE 248]. Good.

Need "source operators" include "empirical Bayes running-average estimator":
\[
\hat{\theta}_{bj}=\frac{\tau^{-2}\sum_{l=1}^j x_{bl}+\nu^{-2}\theta_{b0}}{j\tau^{-2}+\nu^{-2}}
\]
or posterior mean. Need derive from normal-normal. Source Eq 11:
\[
\hat{\theta}_{bj} = \frac{\frac{1}{\tau^2}\sum_{l=1}^j x_{bl}+\frac{1}{\nu^2}\theta_{b0}}{\frac{j}{\tau^2}+\frac{1}{\nu^2}}
\]
Need cite [PAGE 250]. It says normal-normal conjugate running-average estimator. Need include. Set ν=0.05, τ=0.5. Cite [PAGE 250]. Good.

Need priors:
\[
\alpha_{1k}\sim N(0,1) \text{ truncated to }(0,\infty), \quad \alpha_{0k},\beta_{2k},\beta_{3k},\eta_k \sim N(0,1).
\]
Need cite [PAGE 247]. The source text says "standard normal priors to all of our other coefficients" and "constraining slopes α1k to be positive with a truncated prior". Good.

Need MCMC:
4 chains ×1500, burn 750; R<1.1; ESS >1172; average 2852; 8 hours/chain. Cite [PAGE 250]. Good.

Need simulation validation: three simulations: no TTOP, ~10 wOBA TTOP, no 2TTOP but large 3TTOP ~50; coverage >92%, β coverage >91%; cross entropy 1.05,1.06,1.07 vs base 1.06,1.08,1.08. Cite [PAGE 256-257]. Need mention. Good.

Need "retrocausal genealogy": historical lineage. We need mention "retrocausal" maybe not actual time travel; it's how later model reframes earlier TTOP. Need include dates: Tango et al 2007 The Book pp 187-190; Lichtman 2013; Greenhouse 2011; 2020 WS; 2023 paper. Need quote "TTOP is not about fatigue. It is about [batter] familiarity." [PAGE 246]. Wait quote appears page 246? Source text: after page 246 header, "Lichtman (2013) agrees and goes further, stating “the TTOP is not about fatigue. It is about [batter] familiarity.”" Yes [PAGE 246]. Need quote. Also Tango "pitchers hitting a wall after 10 or 11 batters" [PAGE 245-246]? Source says at bottom page 245 "pitchers hitting a wall after 10 or 11 batters" and page 246 continues "rather than a steady degradation..." Cite [PAGE 245] and [PAGE 246]. Good. Need mention "multi-week traps" maybe list 6 traps. Need include research design traps:
- Binning by TTO and averaging: cannot separate continuous from discontinuity.
- No uncertainty quantification.
- Data bleed with end-of-season wOBA.
- Selection/survivorship: worse pitchers removed; conditioning.
- Confusing causal mechanism (batter learning) with descriptive TTOP.
- Treating special cutoff as universal; ignoring quality/hand/home.
- Ignoring pitch selection/fatigue/hotness.
- Rare outcome noise.
- Overgeneralizing across seasons; but paper finds persistence.
Need mention "multi-week" as "multi-week research/decision traps" not literal. Good.

Need recursive theory of mind: manager, hitter, pitcher, analyst. Need maybe formulate recursive beliefs: manager believes batter learns; batter believes pitcher will change pitch mix; pitcher believes batter learns and may change; analyst believes manager's decision rule is endogenous. Need formal? Could use Bayesian hierarchy? But section not necessarily equations. Need mention "crisis habit regression": under pressure, manager reverts to canonical 3TTO pull rule (Cash 2020). Counter-trap: paper's result does not license never pulling; it vetoes treating t=19 as magic. Clock: the relevant clock is continuous batter sequence number t and cumulative fatigue, not TTO boundary. Need cite source recommendation [PAGE 254]. Good.

Need cross-layer veto adjudication: physical/biomechanical/weather. Need be precise: source has no weather or biomechanical variables. So cross-layer veto cannot be proven from source. We can adjudicate:
- Physical fatigue: captured by α1k positive prior; Greenhouse velocity decline; continuous. If fatigue is continuous, β should be near zero. Source finds small β. Cite [PAGE 247], [PAGE 254].
- Biomechanical: handedness match included; but pitch mix, release point, spin not. Omitted. If biomechanical threshold at t=19 (e.g., velocity cliff), would appear as β3-β2 positive. Paper's posterior doesn't show strong positive; but rare outcomes wide. So no proof of no veto.
- Weather: not in model; if weather changes within game (temperature, rain, wind) and affects pitcher/batter, omitted variable. Because t is monotonic with game time, weather is confounded with t. Cannot adjudicate. Need propose data.
- Veto proof: A cross-layer veto requires showing that conditioning on measured physical/biomechanical/weather variables eliminates the estimated TTO discontinuity or that an unmeasured variable has both large effect and strong t-correlation. Source does not satisfy. So "no cross-layer veto proof is available; the statistical result is conditional on model." Good.
Need cite source: "we don’t explicitly adjust for pitcher fatigue" [PAGE 254]; "our analysis does not account for pitch selection" [PAGE 254]; "we hesitate to make causal conclusions" [PAGE 254]. Good.

Need RLVR counterfactual vetoes: Need 3 scenarios, verifiable predictions. Let's design detailed:

Scenario V1: "Pitch-level physical covariate audit." Use same 2012-2019 data plus pitch-level velocity, release point, spin, pitch type. Fit hierarchical model with time-varying covariates and same β. Veto condition: posterior probability that \( \beta_{3,1B}-\beta_{2,1B}>0 \) and expected xwOBA jump at t=19 exceeds 5 wOBA points after adjusting for continuous velocity/pitch mix. Prediction: because source reports continuous velocity decline and no strong β, the jump will shrink toward zero; if it does not, paper's no-discontinuity claim is vetoed. Verifiable by posterior CI and cross-validated xwOBA.
Scenario V2: "Selection-censoring audit." Model censoring of SP removal before t=19 with inverse probability weighting or joint survival model; estimate β under MAR/MNAR sensitivity. Veto condition: under plausible sensitivity, 95% credible/confidence interval for \( \beta_{3,1B}-\beta_{2,1B}\) excludes zero positive, or D23 > 20 wOBA points after correction. Prediction: truncation conditional estimate remains near zero for β; continuous α may increase. If positive discontinuity emerges, veto. Cite source truncation [PAGE 248].
Scenario V3: "Outcome-specific rare-event power audit / simulation calibration." Use simulation with true TTOP=0 but rare outcomes; test false positive. Or "weather/time confounder audit" could be third. Need 3 verifiable. Maybe weather scenario: add in-game weather (temperature, wind, precipitation) and park/roof; if β remains near zero, no veto; if positive jump emerges, veto. Prediction: weather effects are likely small and slowly varying; should not create discontinuity at t=19; if it does, source's claim is conditional. Need make verifiable. But we already have physical and selection. Third could be "external replication with 2020-2024 data and pitch clock" (rule changes) to test transport. Veto condition: if in new era the 3TTO discontinuity is positive and large after same model, paper's conclusion not transportable. Prediction: pitch clock/rule changes may alter fatigue; but no source. Hmm.

Need "RLVR counterfactual vetoes" maybe reward learning with verifiable rewards: scenarios with binary veto. We can present each with "Veto if" and "Predicted". Need no betting. Good.

Need maybe mention "no betting lines" no issue.

Need exact quotes. Let's gather quotes:
- Abstract: "there is little evidence of strong discontinuity in pitcher performance between times through the order." [PAGE 245].
- "the start of the third time through the order should not be viewed as a special cutoff point in deciding whether to pull a starting pitcher." [PAGE 245].
- Tango: "pitchers hitting a wall after 10 or 11 batters" [PAGE 245] and "rather than a 'steady degradation in [pitcher] performance'" [PAGE 246].
- Lichtman: "the TTOP is not about fatigue. It is about [batter] familiarity." [PAGE 246].
- Critique: "Their analysis, by design, cannot disentangle continuous evolution in pitcher performance over the course of a game ... from discontinuities between successive TTOs..." [PAGE 246]. Good.
- Data: "Our 2017 dataset consists of 108,519 plate appearances, 691 unique batters, and 315 unique starting pitchers." [PAGE 246].
- Model: "The parameters α0k and α1k control the continuous evolution of the probability of each plate appearance outcome throughout the game. In contrast, the parameters β2k and β3k allow for discontinuities..." [PAGE 247].
- Truncation: "we remove all games from our dataset in which the starting pitcher is pulled prior to 3TTO. In 2017, for instance, this reduces our dataset by 8 % from 4860 games to 4469 games." [PAGE 248].
- wOBA weights: "1.940 for a home run (HR), 1.529 for a triple (3B), 1.217 for a double (2B), 0.870 for a single (1B), 0.719 for hit-by-pitch (HBP), 0.690 for unintentional walks (uBB), and 0 for an out (OUT)" [PAGE 249].
- MCMC: "the Gelman–Rubin R statistic is less than 1.1" [PAGE 250]; "effective sample size of each parameter exceeds 1172 and the average effective sample size across all parameters is 2852" [PAGE 250].
- Results: "none of these posterior distributions is tightly concentrated around a large positive value" [PAGE 251].
- "the posterior mean of β3,1B − β2,1B is about 0.03 on the logodds scale, which corresponds to a change in probability no greater than 0.75 percentage points." [PAGE 251]. Contains "logodds"; if quote, includes word odds. Avoid? We can paraphrase and quote only "about 0.03" and "no greater than 0.75 percentage points" maybe not exact? Need verbatim quotes. Could quote without "logodds" by ellipsis? "the posterior mean ... is about 0.03 ... which corresponds to a change in probability no greater than 0.75 percentage points." Ellipsis okay. But exact quote markers? We can use ellipsis. Good.
- "The posterior means of D12(x) and D23(x) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)'s findings." [PAGE 252].
- "Figure 4 reveals how these declines in average performance are an artifact of continuous, not discontinuous, pitcher decline." [PAGE 252].
- "we do not believe it always appropriate to pull pitchers at the start of the third time through the order. Rather, we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game." [PAGE 254].
- "we hesitate to make causal conclusions from our model." [PAGE 254].
- "our analysis does not account for pitch selection" [PAGE 254].
- "we don’t explicitly adjust for pitcher fatigue" [PAGE 254].
- Simulation: "the estimated frequentist coverage of the marginal 95% posterior credible intervals exceeds 92% in each study" [PAGE 256]. Actually source: "averaged across all parameters, the estimated frequentist coverage of the marginal 95 % posterior credible intervals exceeds 92 % in each study." [PAGE 256]. Good.
- "coverage of the 95% posterior credible intervals for the discontinuity parameters β2k and β3k exceeds 91% in each study." [PAGE 256]. Good.
- Cross entropy: "average cross entropy loss over each of our 25 datasets is 1.05, 1.06, and 1.07" [PAGE 257]. Good.
- Appendix E: flexible model same qualitative. Cite [PAGE 261]? Source page 261 has E.1. It says "With this more flexible model, the qualitative results of our study don’t change." [PAGE 261]. Good.
- Player-specific model: "With this more flexible model, the qualitative results of our study don’t change." [PAGE 262]. Good.

Need ensure not too many quotes. Fine.

Need answer structure. Let's draft with sections. Need include "PAGE" markers exact. Use [PAGE 245] etc. Need not include "pages" other than markers. Need ensure THINK_TRACE >=400 words. Let's write ~700 words for THINK_TRACE. Then other sections ~400-600 each. Total ~3000 words. Good.

Need maybe include "gray-zone audit" in THINK_TRACE. We'll discuss identifiability and what is not proven. Need include equations in SOURCE section. Could include equations also in THINK_TRACE but formal section has all.

Need not mention "odds" word. Avoid "log-odds"; use "logit". Avoid "betting" entirely. "Moneyline" no. "spread" no. "total" no? The word "total" might appear in "total" as sum. Invariant says spreads, totals, moneylines, or odds. To be safe avoid "total" as betting term; but can use "sum" instead of total. Avoid "total" word entirely. Good.

Need mention "wOBA points" okay.

Need exact "PAGE" markers as [PAGE 245]. Good.

Let's think through formal derivation more.

Model derivation:
The paper's model (2) likely includes \(\eta_k^\top x_i\). They define \(x_i^\top=(x_i^{(b)},x_i^{(p)},hand_i,home_i)\). They write "we model" with blank. We reconstruct. In SOURCE_OPERATORS, state "reconstructed from Section 2.2 description; the source equation is not rendered in the extracted text." But maybe better not mention extraction. State "The operator implied by the text is..." Use formal.

Need "units" for \(t\): count of batters, dimensionless; 1 TTO = t 1-9, 2TTO 10-18, 3TTO 19-27. Indicators. \(\alpha_{1k}\) units: per batter (dimensionless per count). \(\beta\) dimensionless logit increment. \(\eta\) dimensionless per logit-quality unit. \(\mathrm{xwOBA}\) dimensionless; \(\times 1000\) gives wOBA points. Cross-entropy nats per PA. MCMC ESS count. Good.

Need "assumptions" and "breakdown". In SOURCE_OPERATORS_AND_EQUATIONS, include a paragraph "Assumptions and breakdown regimes". Formal. Good.

Need "cross-layer veto adjudication" maybe include "weather" not in source. Need cite no weather. Source doesn't mention weather. We can state "The source provides no weather covariates; therefore weather cannot be adjudicated from this source." This is important. Need not invent. Good.

Need "RLVR counterfactual vetoes" maybe include equations? Could define veto indicator \(V_j=1\) if condition. Predictions. Need no betting. Good.

Potential issue: The user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We should not use the word "odds" even in "log-odds". We will not. "wOBA" okay. "expected wOBA" okay.

Need avoid "total" word. Use "aggregate". "sum" okay. "spread" avoid. "moneyline" avoid.

Need maybe mention "posterior probability" not "odds". Good.

Need exact quotes: If a quote has "log odds" we won't quote. The paper quote about β3,1B has "logodds"; avoid. Use "posterior mean ... about 0.03 ... change in probability no greater than 0.75 percentage points" with ellipsis. That's okay.

Need "THINK_TRACE" includes "multi-hop derivation" and "gray-zone audit". We'll state step-by-step:
1. Tango estimator averages wOBA by TTO.
2. If pitcher decline is continuous linear in t, the mean t in TTOs are 5,14,23; differences 9. The TTO mean difference is approximately \(9 \times \partial \mathrm{xwOBA}/\partial t\), not \(\beta\).
3. Therefore a nonzero TTOP by TTO averaging does not imply discontinuity.
4. Brill et al model includes both α1 t and β2,β3; β captures boundary jumps. Posterior β centered near zero; D12,D23 about 13; xwOBA smooth. Thus Tango's TTOP is consistent with continuous decline.
5. Gray zones: β not exactly zero; singles have >80% positive posterior but tiny effect; rare outcomes diffuse; selection truncation; no causal identification; no pitch mix/weather; common trajectory assumption; linear logit; 2017 primary but 2012-2019 similar.
6. Audit: conclusion is "little evidence of strong discontinuity" not "proof of zero discontinuity"; the paper recommends not treating 3TTO as special cutoff, not never pulling. Good.

Need mention "crisis habit regression vs counter-trap vs clock" in RECURSIVE section. Define:
- Crisis habit regression: manager under pressure uses 3TTO heuristic.
- Counter-trap: rejecting TTOP entirely and ignoring continuous decline.
- Clock: t and cumulative workload, not binary TTO.
Need recursive ToM: manager models batter learning; batter models pitcher adjustments; pitcher models batter learning; analyst models manager selection. Source says managers cite TTOP; Cash quote "didn't want Mookie or Seager seeing Blake a third time" [PAGE 245]. Need quote exact: "didn’t want Mookie [Betts] or [Corey] Seager seeing Blake a third time" [PAGE 245]. Good.

Need "RETROCAUSAL_GENEALOGY": Use "genealogy" maybe:
- 2007 Tango et al. formalized TTOP with binned averages; attributed to batter learning.
- 2011 Greenhouse documented continuous velocity decline.
- 2013 Lichtman popularized and claimed familiarity not fatigue.
- 2015 managers quoted.
- 2020 Cash decision.
- 2023 Brill et al Bayesian reanalysis reframes earlier TTOP as within-TTO average of continuous trajectory.
- "Retrocausal" means later model supplies a different causal interpretation of earlier observed association; not that later data changed past. 
- Multi-week traps: data bleed, selection, binning, causal overreach, special cutoff, ignoring uncertainty, rare events, pitch mix, weather, hotness. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": "Physical/biomechanical/weather veto proof." Need maybe state:
- Physical layer: fatigue. Source assumes positive α1; finds smooth increase. If true fatigue is a threshold, β should show. No strong β. But source didn't measure fatigue directly. So statistical model is consistent with physical continuous fatigue but not proof.
- Biomechanical: hand match is included; pitch selection not. If biomechanical change at 3TTO, β should capture; absence weakens threshold hypothesis but not conclusive.
- Weather: not included. If weather changes at t=19? Within a game, weather is time-varying; could confound. No data. So no veto proof.
- Veto conditions: cross-layer variable must be (i) measured, (ii) predictive of outcome, (iii) correlated with t/TTO, (iv) its inclusion materially shifts β. None demonstrated in source. So current cross-layer veto is "not adjudicated." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": We can make table-ish. Need 3 scenarios. Let's formulate with formal veto indicator:
Let \(V=1\) denote veto of the paper's no-strong-discontinuity claim. For each scenario, define test statistic \(T\) and threshold. But avoid arbitrary thresholds? We can use "95% credible interval excludes zero" which is verifiable. Need predictions. Good.

Scenario 1: "Pitch-mix/velocity conditional audit." Data: same PAs plus pitch-level velocity, release, spin, pitch type. Model: add time-varying covariates \(z_i(t)\). Veto if posterior \(\Pr(\beta_{3,1B}-\beta_{2,1B}>0\mid data,z)>0.95\) and \(\mathcal{D}_{23}(\tilde{x})>5\) wOBA points after adjustment. Prediction: \(V=0\); β remains near zero; D23 shrinks or stays ~13 but smooth. Why? Source says continuous velocity decline [PAGE 247]; β not strong. If \(V=1\), source's no-discontinuity claim is vetoed.
Scenario 2: "Selection/censoring audit." Data: all games including SP pulled before 3TTO; model censoring with IPW/joint model. Veto if corrected 95% interval for D23 discontinuity excludes zero positive or β3-β2 positive. Prediction: β near zero; α increases; V=0. If V=1, truncation conclusion vetoed. Cite [PAGE 248].
Scenario 3: "Weather and game-state audit." Data: add temperature, wind, precipitation, roof, inning, leverage? Avoid leverage? Leverage is not betting, but maybe. Veto if inclusion creates positive discontinuity at t=19 with 95% posterior. Prediction: weather effects small and slowly varying; V=0; but if roof/weather interacts with fatigue, V=1. Need verifiable. Or "external replication 2020-2024 with pitch clock" could be third. Weather is cross-layer. Let's use weather because section asks weather. Need make verifiable. Prediction: no veto; if positive jump emerges, source's statistical conclusion is conditional and not robust. Good.

Need mention "RLVR" reward: Each audit returns binary reward \(R=1\) if model recovers known simulated discontinuity; \(R=0\) if false positive. Hmm. But "counterfactual vetoes" maybe okay.

Need "verifiable" means predictions can be checked by posterior intervals and out-of-sample cross-entropy. Include cross-entropy as metric. Good.

Need not mention "odds". Good.

Now draft final. Need ensure XML tags exactly. We can include paragraphs with markdown inside XML. No extra text outside? We'll output only XML sections.

Need count words. THINK_TRACE ~700. Other sections ~400 each. Total >2500. Good.

Let's write carefully.

Need cite page markers with exact quotes. Use quotes with [PAGE N]. Example: The abstract states "there is little evidence of strong discontinuity..." [PAGE 245]. Good.

Need be mindful of exact quote punctuation. We can quote shorter phrases verbatim. Use ellipsis if omitted. Good.

Let's compose.

Potential issue: "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We need include verbatim quotes in each relevant section? We will include at least several. Good.

Need not use "PAGE" markers wrongly. Let's map quote "The posterior means of 𝒟12(𝒙) and 𝒟23(𝒙) are about 13 wOBA points..." [PAGE 252]. Good.

Need "Figure 4 reveals..." [PAGE 252]. Good.

Need "none of these posterior distributions is tightly concentrated around a large positive value" [PAGE 251]. Good.

Need "The parameters α0k and α1k control the continuous evolution..." [PAGE 247]. Good.

Need "we remove all games..." [PAGE 248]. Good.

Need "1.940 for a home run..." [PAGE 249]. Good.

Need "Gelman–Rubin R statistic is less than 1.1" [PAGE 250]. Good.

Need "we do not believe it always appropriate..." [PAGE 254]. Good.

Need "we hesitate to make causal conclusions from our model." [PAGE 254]. Good.

Need "our analysis does not account for pitch selection" [PAGE 254]. Good.

Need "we don’t explicitly adjust for pitcher fatigue" [PAGE 254]. Good.

Need "Greenhouse (2011), for instance, documented continuous decreases in pitch velocity." [PAGE 247]. Good.

Need "the estimated frequentist coverage..." [PAGE 256]. Good.

Need "With this more flexible model, the qualitative results of our study don’t change." [PAGE 261] and [PAGE 262]. Good.

Need "TTOP is not about fatigue. It is about [batter] familiarity." [PAGE 246]. Good.

Need "pitchers hitting a wall after 10 or 11 batters" [PAGE 245]. Good.

Need "Their analysis, by design, cannot disentangle continuous evolution..." [PAGE 246]. Good.

Need "the start of the third time through the order should not be viewed as a special cutoff point..." [PAGE 245]. Good.

Need "We find that batter quality and pitcher quality have a much larger impact..." [PAGE 252? Actually Section 3.3 says "We find that batter quality and pitcher quality have a much larger impact..." [PAGE 252]. Good.

Need "about 42–48 wOBA points" [PAGE 253]. Good.

Need "about 36–41 wOBA points" [PAGE 253]. Good.

Need "Handedness match has a slightly larger effect: a pitcher whose handedness matches that of the batter has about 18 fewer mean expected wOBA points..." [PAGE 253]. Good.

Need not overdo.

Let's now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central multi-hop move is to separate two quantities that ordinary time-through-the-order (TTO) tabulation conflates: a continuous trajectory in pitcher performance as the batter sequence number \(t\) advances, and a discontinuity at the boundary between TTO blocks. Tango, Lichtman, and Dolphin (2007) binned plate appearances by TTO and averaged wOBA within each bin; that estimator can generate a positive “penalty” even if the underlying expected wOBA rises smoothly with \(t\), because the average \(t\) in 1TTO, 2TTO, and 3TTO is roughly 5, 14, and 23. A smooth linear rise of about one wOBA point per batter would therefore produce about nine wOBA points of apparent difference between adjacent TTO averages, without any boundary jump. The paper states this identifiability problem directly: “Their analysis, by design, cannot disentangle continuous evolution in pitcher performance over the course of a game … from discontinuities between successive TTOs” [PAGE 246]. The Bayesian model therefore includes both \(\alpha_{1k}t\) and TTO indicators \(\beta_{2k},\beta_{3k}\), so that \(\beta_{2k}\) and \(\beta_{3k}-\beta_{2k}\) are the discontinuity parameters, while \(\alpha_{1k}\) absorbs smooth within-game evolution.

The second multi-hop step is the empirical result. The posterior distributions of the discontinuity parameters are mostly centered near zero, and “none of these posterior distributions is tightly concentrated around a large positive value” [PAGE 251]. The expected wOBA trajectory rises steadily across \(t\), but the paper says “Figure 4 reveals how these declines in average performance are an artifact of continuous, not discontinuous, pitcher decline” [PAGE 252]. Crucially, when the model’s expected wOBA is averaged within each TTO, the paper recovers about 13 wOBA points between adjacent TTOs: “The posterior means of \(\mathcal{D}_{12}(\mathbf{x})\) and \(\mathcal{D}_{23}(\mathbf{x})\) are about 13 wOBA points, which are consistent with Tango, Lichtman, and Dolphin (2007)’s findings” [PAGE 252]. Thus the earlier TTOP is not denied as a descriptive average; it is reinterpreted as a within-TTO average of a smooth trajectory, not as proof of a sharp third-time cutoff.

The gray-zone audit matters. First, “little evidence of strong discontinuity” is not proof of exactly zero discontinuity. The single-outcome parameter \(\beta_{3,1B}-\beta_{2,1B}\) has over 80% posterior mass on the positive side, but the effect is tiny: the posterior mean is about 0.03, corresponding to “a change in probability no greater than 0.75 percentage points” [PAGE 251]. For rare outcomes such as triples and hit-by-pitches, the posteriors are diffuse, so absence of evidence is weak evidence of absence. Second, the truncation rule—removing games in which the starter is pulled before 3TTO—reduces the 2017 sample “by 8 % from 4860 games to 4469 games” [PAGE 248]. This conditions inference on surviving to 3TTO and balances pitcher quality, but it cannot balance unobserved within-game “hotness” or fatigue; the paper admits that its approach may underestimate continuous decline [PAGE 254]. Third, the model assumes a common linear logit trajectory across all pitchers and batters; Appendix E’s flexible indicator and player-specific models preserve the qualitative result, but they do not supply causal identification [PAGE 261, PAGE 262]. Fourth, pitch selection, weather, and direct biomechanical fatigue are not modeled, so the statistical result is conditional on those omissions. The correct conclusion is therefore narrow and operational: do not treat the start of 3TTO as a special cutoff; base decisions on quality and continuous decline [PAGE 254].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(y_i\in\{1,\dots,7\}\) denote the plate-appearance outcome, with \(k=1\) the out category and \(k=2,\dots,7\) the non-out categories (uBB, HBP, 1B, 2B, 3B, HR). Let \(t_i\in\{1,\dots,27\}\) be the batter sequence number, and define
\[
\mathrm{TTO}_2(t)=\mathbb{I}(10\le t\le 18),\qquad
\mathrm{TTO}_3(t)=\mathbb{I}(19\le t\le 27).
\]
Let
\[
\mathbf{x}_i=\left(x_i^{(b)},x_i^{(p)},\mathrm{hand}_i,\mathrm{home}_i\right)^\top,
\]
where \(x_i^{(b)}\) and \(x_i^{(p)}\) are logit-transformed running-average quality estimates, \(\mathrm{hand}_i\) indicates handedness match, and \(\mathrm{home}_i\) indicates the batter is at home. The multinomial logistic operator implied by the text is, for \(k\ne1\),
\[
\log\frac{\Pr(y_i=k\mid t_i,\mathbf{x}_i)}{\Pr(y_i=1\mid t_i,\mathbf{x}_i)}
=
\alpha_{0k}+\alpha_{1k}t_i+\beta_{2k}\mathrm{TTO}_2(t_i)+\beta_{3k}\mathrm{TTO}_3(t_i)+\eta_k^\top\mathbf{x}_i.
\]
The paper describes the interpretation: “The parameters \(\alpha_{0k}\) and \(\alpha_{1k}\) control the continuous evolution of the probability of each plate appearance outcome throughout the game. In contrast, the parameters \(\beta_{2k}\) and \(\beta_{3k}\) allow for discontinuities in these probabilities between different times through the order” [PAGE 247]. The 3TTO jump relative to 2TTO is \(\beta_{3k}-\beta_{2k}\). Priors are
\[
\alpha_{1k}\sim N(0,1)\ \text{truncated to }(0,\infty),\qquad
\alpha_{0k},\beta_{2k},\beta_{3k},\eta_k\sim N(0,1),
\]
with the positive-slope constraint encoding continuous deterioration [PAGE 247]. Outcome probabilities follow
\[
\Pr(y_i=k\mid t,\mathbf{x})=
\frac{\exp\{\lambda_k(t,\mathbf{x})\}}{1+\sum_{j=2}^{7}\exp\{\lambda_j(t,\mathbf{x})\}},
\quad k\ne1,
\]
\[
\Pr(y_i=1\mid t,\mathbf{x})=
\frac{1}{1+\sum_{j=2}^{7}\exp\{\lambda_j(t,\mathbf{x})\}},
\]
where \(\lambda_k(t,\mathbf{x})\) is the right-hand linear predictor. Expected wOBA is
\[
\mathrm{xwOBA}(t,\mathbf{x})=\sum_{k=1}^{7}w_k\Pr(y=k\mid t,\mathbf{x}),
\]
with 2019 weights \(w_{\mathrm{HR}}=1.940\), \(w_{\mathrm{3B}}=1.529\), \(w_{\mathrm{2B}}=1.217\), \(w_{\mathrm{1B}}=0.870\), \(w_{\mathrm{HBP}}=0.719\), \(w_{\mathrm{uBB}}=0.690\), and \(w_{\mathrm{OUT}}=0\); the source gives these exact values [PAGE 249]. wOBA points are \(1000\times\)wOBA, so the units are scaled dimensionless wOBA units; probabilities and logit increments are dimensionless, and cross-entropy with natural logs is in nats per plate appearance. The TTO-averaged contrast is
\[
\mathcal{D}_{12}(\mathbf{x})=\frac{1}{9}\sum_{t=1}^{9}
\left[\mathrm{xwOBA}(t+9,\mathbf{x})-\mathrm{xwOBA}(t,\mathbf{x})\right],
\]
\[
\mathcal{D}_{23}(\mathbf{x})=\frac{1}{9}\sum_{t=10}^{18}
\left[\mathrm{xwOBA}(t+9,\mathbf{x})-\mathrm{xwOBA}(t,\mathbf{x})\right].
\]
The source reports posterior means near 13 wOBA points for both [PAGE 252]. The empirical-Bayes quality estimator is a normal-normal posterior mean,
\[
\hat{\theta}_{bj}
=
\frac{\tau^{-2}\sum_{\ell=1}^{j}x_{b\ell}+\nu^{-2}\theta_{b0}}
{j\tau^{-2}+\nu^{-2}},
\]
with \(\nu=0.05\) and \(\tau=0.5\) [PAGE 250]. The simulation study reports that “the estimated frequentist coverage of the marginal 95 % posterior credible intervals exceeds 92 % in each study” [PAGE 256], and that coverage for the discontinuity parameters exceeds 91% [PAGE 256]. Cross-entropy loss is
\[
-\frac{1}{n}\sum_{i=1}^{n}\sum_{k=1}^{7}
\mathbf{1}\{y_i=k\}\log\Pr(y_i=k),
\]
with simulated average losses 1.05, 1.06, and 1.07 [PAGE 257].

Assumptions: common linear logit evolution by \(t\); additive TTO discontinuities; logit-transformed quality covariates; no direct pitch-level, weather, or biomechanical covariates; and inference conditional on the starter reaching 3TTO. The exact identifiability breakdown occurs if the design matrix is rank deficient—e.g., if only one TTO is observed, \(\beta_{2k}\) and \(\beta_{3k}\) are not separately estimable; if \(\mathrm{hand}\) or \(\mathrm{home}\) has no variation, \(\eta_k\) is not estimable. Near-breakdown occurs under strong collinearity between \(t\) and TTO indicators, sparse rare outcomes, truncation that removes late-\(t\) observations, or extrapolation beyond \(t=27\). The paper explicitly cautions that it does “not explicitly adjust for pitcher fatigue” and does “not account for pitch selection” [PAGE 254], so causal breakdown is a live regime even where the predictive fit is stable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy runs from Tango, Lichtman, and Dolphin (2007, pp. 187–190), who formalized the TTOP by binning plate appearances by lineup position and TTO and averaging wOBA within bins, to Lichtman (2013), who popularized the third-time-through heuristic, to the 2020 World Series decision in which Kevin Cash pulled Blake Snell and said he “didn’t want Mookie [Betts] or [Corey] Seager seeing Blake a third time” [PAGE 245]. The 2007 account attributed the pattern to within-game batter learning and described “pitchers hitting a wall after 10 or 11 batters” rather than a “steady degradation in [pitcher] performance” [PAGE 245–246]. Lichtman went further: “the TTOP is not about fatigue. It is about [batter] familiarity” [PAGE 246]. Brill, Deshpande, and Wyner retrocausally reframe that lineage: the later Bayesian model does not erase the earlier average difference, but it changes its causal meaning by showing that a smooth continuous trajectory can generate the same TTO-binned contrast. This is “retrocausal” in the evidentiary sense, not literal time travel: later modeling supplies a different interpretation of an earlier observed association.

The multi-week research traps are clear. First, binning by TTO and averaging within bins cannot separate continuous change from boundary jumps; the paper says the earlier approach “cannot disentangle” those two mechanisms [PAGE 246]. Second, point estimates without uncertainty quantification invite overconfident cutoff rules; the Bayesian posteriors here mostly cover both signs [PAGE 251]. Third, data bleed from end-of-season wOBA is avoided by running-average quality estimates, but those estimates still depend on prior-season shrinkage assumptions [PAGE 250]. Fourth, survivorship is a trap: worse pitchers are removed earlier, so 3TTO observations are selected; the paper truncates to games where the starter reaches 3TTO, reducing 2017 “by 8 % from 4860 games to 4469 games” [PAGE 248]. Fifth, mechanism overreach is a trap: the model’s \(\beta\) parameters are described as batter-learning parameters and \(\alpha\) as fatigue parameters, but the authors “hesitate to make causal conclusions from our model” [PAGE 254]. Sixth, treating 3TTO as a universal special cutoff ignores the much larger quality effects: the paper finds about 42–48 wOBA points between good and bad pitchers and about 36–41 between good and bad batters [PAGE 253]. The historical lesson is that a robust descriptive regularity can survive reanalysis while its managerial interpretation does not.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The decision ecology is recursive. A manager models the batter’s learning, the batter models the pitcher’s adjustment, the pitcher models the batter’s learning and may change pitch selection, and the analyst models the manager’s removal rule as an endogenous selection process. Crisis habit regression appears when a high-pressure decision collapses to the canonical 3TTO heuristic: the manager reasons, “the third time through is very difficult” or “the more times a hitter sees a pitcher, the more success that hitter is going to have” [PAGE 245]. The counter-trap is overcorrection: concluding from the Bayesian reanalysis that a starter should never be removed at 3TTO. The paper’s actual recommendation is narrower: “we do not believe it always appropriate to pull pitchers at the start of the third time through the order. Rather, we recommend managers base their decisions to pull a pitcher on a pitcher’s quality and continuous decline throughout the game” [PAGE 254]. The relevant clock is therefore not the binary TTO boundary but the continuous batter sequence number \(t\), cumulative workload, and the pitcher’s observed quality trajectory. The recursive failure mode is to let the manager’s fear of batter familiarity dominate the pitcher’s actual continuous decline; the opposite failure is to ignore that continuous decline because the discontinuity parameter is near zero.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto would require a measured physical, biomechanical, or weather variable that (i) predicts plate-appearance outcomes, (ii) is correlated with \(t\) or TTO, and (iii) materially shifts \(\beta_{2k}\) or \(\beta_{3k}-\beta_{2k}\) when included. The source does not supply weather covariates at all, so a weather veto cannot be adjudicated from this paper. It does supply a physical rationale for continuous decline: “Greenhouse (2011), for instance, documented continuous decreases in pitch velocity” [PAGE 247]. That supports the \(\alpha_{1k}\) continuous channel rather than a 3TTO cliff. It also includes handedness match, which is a coarse biomechanical interaction, but it does “not account for pitch selection” [PAGE 254] and does “not explicitly adjust for pitcher fatigue” [PAGE 254]. Therefore the cross-layer proof is incomplete: the statistical absence of a strong discontinuity is consistent with continuous physical fatigue, but it is not a direct biomechanical measurement. A true veto would be a pitch-level model showing that after conditioning on velocity, release point, spin, pitch mix, and in-game weather, a positive 3TTO jump remains with a 95% posterior interval excluding zero. No such result is presented. Conversely, if a hidden biomechanical threshold existed at \(t=19\), the current \(\beta_{3k}-\beta_{2k}\) should tend positive; the observed posteriors are mostly centered near zero and the single-outcome positive mass is tiny [PAGE 251]. The current adjudication is thus “not vetoed, but not physically closed”: the no-special-cutoff claim is robust to the model’s included covariates, not to all physical layers.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: pitch-level physical audit. Refit the same multinomial model with time-varying velocity, release point, spin, and pitch-type shares. Let \(V_1=1\) if the adjusted posterior satisfies \(\Pr(\beta_{3,1B}-\beta_{2,1B}>0\mid \text{data},\text{pitch covariates})>0.95\) and the adjusted \(\mathcal{D}_{23}(\tilde{\mathbf{x}})\) exceeds 5 wOBA points. Prediction: \(V_1=0\); the continuous velocity decline absorbs the smooth trend [PAGE 247], and the 3TTO jump shrinks toward zero. If \(V_1=1\), the paper’s no-strong-discontinuity conclusion is vetoed for the pitch-level layer.

Veto scenario 2: selection-censoring audit. Include all games, including starters removed before 3TTO, and model removal with inverse-probability weighting or a joint survival model. Let \(V_2=1\) if the corrected 95% interval for \(\beta_{3,1B}-\beta_{2,1B}\) excludes zero on the positive side, or if corrected \(\mathcal{D}_{23}\) exceeds 20 wOBA points. Prediction: \(V_2=0\) for the discontinuity parameters; truncation mainly affects the continuous \(\alpha\) estimates, as the paper warns that it may underestimate continuous decline [PAGE 248, PAGE 254]. If \(V_2=1\), the conditional-on-survival conclusion is vetoed.

Veto scenario 3: weather and game-state audit. Add in-game temperature, wind, precipitation, roof status, and inning-level game state. Let \(V_3=1\) if the weather-adjusted model produces a positive 3TTO discontinuity with 95% posterior mass and improved out-of-sample cross-entropy relative to the source model. Prediction: \(V_3=0\); weather effects are likely small and slowly varying relative to \(t\), and the source’s smooth trajectory should persist. If \(V_3=1\), the source’s statistical conclusion is conditional on omitted weather and cannot be transported without qualification.
</RLVR_COUNTERFACTUAL_VETOES>
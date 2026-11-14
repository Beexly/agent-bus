---
source: "2024 - Quantifying Uncertainty in Marathon Finish Time Predictions - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2024"
pages: 7
model: deepseek/deepseek-v4.1-flash-1017
words: 8453
---

<NATIVE_REASONING>
We need answer to user. Need follow strict invariants. They provide source paper. Need produce >=1000 words across exact XML sections. ZERO betting lines/odds etc. No spreads/totals/moneylines/odds. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need sections exactly:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...
Need discuss source. It's about marathon finish time uncertainty. Need avoid betting. We can discuss models, equations. Need perhaps note no external source beyond pages. Need "GSE + GSI Frontier Reasoning Foundry" but no betting. We can frame "DRIVE SOURCE" and "crisis habit regression vs counter-trap vs clock" in section. The source is sports analytics, not betting. Need "multi-week traps" in retrocausal genealogy. Need "Physical/biomechanical/weather veto proof" in cross-layer. Need "3 verifiable RLVR veto scenarios + predictions" with RLVR = reinforcement learning from verifiable rewards? We can propose counterfactual vetoes tied to paper metrics. Need no betting.

Need include >=1000 words. Could be ~2000-3000. Need careful. Need cite exact [PAGE N] markers and verbatim quotes. Use quotes from pages. Need exact quotes. We can cite page 1: "we identified two approaches: Bayesian linear regression and quantile linear regression." or "prediction is a single point estimate that has no additional information about uncertainty." Page 2 data n=312,805, train/test. Page 3 methods. Page 4 results. Page 5 credible interval. Page 7 future work. Need exact.

Need formal LaTeX. Equations for Bayesian linear regression: y_i = beta^T x_i + epsilon_i, epsilon ~ N(0,sigma^2), prior p(beta,sigma), posterior p(beta,sigma | D) ∝ p(y|X,beta,sigma)p(beta,sigma). Predictive posterior for finish time y*: p(y* | x*, D) = ∫ p(y* | x*, theta)p(theta|D)d theta. Credible interval [t1,t2] central X%: P(t1 ≤ y* ≤ t2 | x*,D)=X/100. RMSE = sqrt(1/n Σ (y_i - \hat y_i)^2) seconds. Quantile regression: minimize Σ ρ_τ(y_i - x_i^T β_τ), ρ_τ(u)=u(τ - 1{u<0}), or check loss: ρ_τ(u)= u(τ - I(u<0))? Need correct: quantile regression minimizes Σ ρ_τ(y_i - x_i^T β), where ρ_τ(u)=u(τ - 1_{u<0}) = τ u if u≥0, (τ-1)u if u<0. Prediction quantile Q_y(τ|x)=x^T β_τ. Coverage: C_X = (1/n) Σ 1{t1_i ≤ y_i ≤ t2_i}; expected X%. Interval width W = t2-t1 seconds, average decreases. Units: finish time seconds; pace seconds per km or seconds per 5K? Paper uses splits seconds and total_pace average pace. Need define x features. Method B: total_pace; Method C: total_pace and current pace. Method D all previous splits; collinearity. Need mention 5K increments. Need exact singularity/breakdown regimes: Bayesian posterior non-identifiability if design matrix X^T X singular or near singular (Method D collinearity). Quantile regression breakdown when τ extreme and n small, or crossing quantiles? Need mention heteroscedasticity? Need "exact singularity/breakdown regimes" in equations section: Bayesian normal equations require X^T X invertible; if rank deficient, posterior improper under flat prior; with proper priors finite but multimodal/strongly correlated. Quantile regression objective nondifferentiable at residuals zero; uniqueness requires general position; if design rank deficient, β_τ nonunique. Credible interval coverage breaks under model misspecification (distribution shift Boston 2023, weather/course changes), heteroscedasticity, nonstationarity, collinearity, and finite-sample coverage with τ near 0/1. Need mention training/test split: 286,777 from 2009-2022, test 26,028 from 2023 [PAGE 2]. They subsampled 5000 runners from 2022 [PAGE 4]. The app uses bayes1 [PAGE 7]. Need cite.

Need "THINK_TRACE" >=400 words. Deep multi-hop derivation & gray-zone audit. Could discuss:
- The paper's baseline: extrapolate average pace. Let D=42.195 km, split at s_k. total_pace p_k = t_k/s_k (s/km or sec/km). Baseline finish estimate \hat t_F = p_k D. Assumes p(t)=constant. But fatigue causes positive split, so baseline underestimates finish time. Need model finish time as function of cumulative pace and recent pace. Bayesian/quantile. Multi-hop: from point estimate to predictive distribution to coverage calibration to app. Gray-zone audit: no explicit equations in paper; we reconstruct. Also source has a typo "worst oldest annual marathon" [PAGE 2]? Need quote? Maybe not. Need audit: The paper says "The distribution of finish times is shown in Figure 1" but caption says training set (2009-2023) though text says training 2009-2022? Page 2: "training set (286,777 runners from 2009-2022)" and Figure 1 caption "training set (2009-2023)" — inconsistency. Need mention gray-zone. Also abstract says 15 years 2009-2023 = 15 years? 2009-2023 inclusive 15. Training 2009-2022 is 14 years. Fine. Page 4 says "Method D ... strong issues with collinearity". Page 4 says Bayesian only B/C due runtime. Page 5 says bayes2 poor at 40K. Page 5 coverage not perfect. Page 5 "When passing in a student’s feature predictors" likely "runner's" typo? Could mention not necessary. Need "exact singularity/breakdown regimes" exact.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage & multi-week traps. Discuss lineage: Bayesian data analysis Gelman et al. [PAGE 7 ref 1], quantile regression statsmodels ref [5], PyMC [6], Boston Athletic Association data [4]. Earlier marathon modeling: reference-dependent preferences Allen et al. 2017 [2], mixture model Kwong & Nadarajah 2019 [3]. Multi-week traps: using only recent split; assuming constant pace; overfitting with all splits; collinearity; distribution shift across years; extrapolating app. Need mention "retrocausal" as how final finish time distribution shapes mid-race inference; the posterior at 30K is constrained by future fatigue pattern learned from historical data. Multi-week traps: training on 2009-2022 and testing 2023; weather/course differences across years; Boston qualification standards; charity entries; nonstationarity; runner composition; COVID years? 2020? Boston Marathon 2020 cancelled? Dataset 2009-2023; 2020 maybe virtual? Need not speculate. Need mention "multi-week traps" maybe training/evaluation leakage, random subsample from 2022, no cross-validation, test set only 2023. Need cite.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Interpret: crisis habit regression = under pressure, runners/spectators regress to baseline extrapolation habit; counter-trap = using recent pace as counter to fatigue but may overreact; clock = race distance/time horizon. Need discuss recursive theory of mind: spectator predicts runner's expected finish, runner predicts spectator's expectation, coach uses app. Need mention the model's uncertainty communication affects decisions. Need tie to paper: app shows distributions and table. "My Plot tab ... sequentially enter in splits" [PAGE 5]. Need cite. Need discuss "crisis habit regression" as traditional method used by major marathons [PAGE 1] and its failure due fatigue. "Counter-trap" = Method C current pace can improve but bayes2/quant2 poor at 40K [PAGE 5]. "Clock" = uncertainty decreases as race progresses; interval sizes decrease [PAGE 5]. Need mention recursive: at early stages, uncertainty high; overconfidence in point estimates can cause false certainty; interval coverage calibration is the test.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need discuss physical constraints: marathon 26.2 miles (42.195 km) [PAGE 1]; splits at 5km; biomechanical fatigue causes slowdown second half [PAGE 1]. Weather and course not in data? Paper doesn't include weather. Veto proof: any prediction must be vetoed if it violates physical bounds: finish time < elapsed time at current split; pace ≤ 0; distance monotonic; speed > human max; finish time not after current time; negative interval widths. Weather: heat/humidity/wind can shift finish distribution; model trained on Boston historical conditions may not transfer. Biomechanical: accumulated fatigue, positive split. Need formal veto conditions: \hat t_F ≥ t_k; \hat p > 0; interval [t1,t2] with t1 ≥ t_k and t1<t2; estimated finish time within [elapsed + d_remaining/v_max, elapsed + d_remaining/v_min]? But v_min not specified. Need avoid fake ratios? They said "Never invent fake ratios (Force / Fatigue)". We can use physical bounds with real variables, not fake ratios. Need "weather veto proof": if race-day WBGT or wind differs beyond training distribution, model's coverage claim is invalid; require reweighting or recalibration. But paper doesn't include weather variables; cite page 7 "Changing the dataset to the results of a different marathon will alter the predictions" [PAGE 7]. Need "biomechanical veto proof": if runner has completed 30km, fatigue changes pace; baseline underestimates [PAGE 1]. The model uses historical fatigue patterns. Need "physical/biomechanical/weather veto proof" maybe need show proof that cross-layer variables can veto model outputs. Use exact equations:
- Monotonic elapsed splits: 0 < t_1 < t_2 < ... < t_F, with t_k seconds and s_k meters.
- Remaining distance r_k = D - s_k. Implied average remaining speed \bar v_rem = r_k/(t_F - t_k). Must be >0 and finite. Veto if t_F ≤ t_k or \bar v_rem > v_max (e.g., world-record pace) or \bar v_rem < v_min? v_min could be 0 for walking? Marathon has cutoff? Boston has time limits? Not in source. We can say if application has course cutoff, enforce. But avoid inventing. Use v_max from physics? We can mention "using a conservative human locomotion upper bound" but no source. Maybe better not give numeric v_max. State formal: if predicted speed exceeds v_max (external physical bound), veto. Need no betting.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Could be "Reinforcement Learning from Verifiable Rewards". Scenarios:
1. Monotonic time veto: Generate a model prediction at 30K for a runner with elapsed t_30; if predicted median finish t_F < t_30, reward model negative / veto. Prediction: retraining/calibration eliminates invalid predictions; coverage improves. Verifiable check: t_F - t_30 >0.
2. Coverage calibration veto: For each interval level X∈{50,80,95}, compute empirical coverage C_X on 2023 test set. If |C_X - X/100| > tolerance (e.g., 0.05), veto deployment. Prediction: bayes1/bayes2 coverage drifts above expectation over time; quant1/quant2 peak mid-race and lower at beginning/end [PAGE 5]. So a single global calibration threshold will fail for quant models at tails; need stage-specific calibration or conformal prediction. This is verifiable from data.
3. Collinearity/rank veto: For Method D, compute condition number κ(X^T X) or rank. If κ > threshold or rank deficient, veto using all splits. Prediction: Method D has strong collinearity [PAGE 4], so rank/condition veto triggers; switching to B/C or regularization improves RMSE/runtime. Verifiable.
Maybe also runtime veto: Bayesian model with Method D significantly longer runtimes [PAGE 4]; if fit exceeds budget, veto. But need 3. We can include runtime as part of scenario 3? Need exactly 3. Could have scenario 3: Distribution-shift veto: train Boston 2009-2022, test 2023; if covariate shift in pace/finish distribution exceeds threshold (e.g., KS statistic), veto claims of coverage. Prediction: Page 7 says changing dataset alters predictions. But "verifiable" with KS. Need 3 scenarios. Maybe combine collinearity and runtime? We need "3 verifiable RLVR veto scenarios + predictions." Let's choose:
1. Physical monotonicity and nonnegative remaining time veto. Prediction: invalid outputs filtered; if frequent, model misspecified at early splits.
2. Stagewise interval coverage veto. Prediction: quantile models fail at beginning/end, Bayesian coverage above expectation over time; require stagewise recalibration.
3. Rank/condition-number and runtime veto for Method D. Prediction: high condition number triggers; use B/C or regularized priors; runtime reduced.
Could include distribution shift as part of scenario 2? Maybe not. We need "multi-week traps" in retrocausal. Good.

Need ensure >=1000 words. The response likely ~2500 words. Need not mention "betting" at all? Invariant says zero betting lines. We can avoid word "betting" entirely? It says never mention spreads, totals, moneylines, odds. We can avoid those words. "Zero betting lines" maybe not mention. Fine.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" not necessary. Need maintain formal. Need exact XML tags. The content inside tags can include LaTeX. Need use [PAGE N] markers. Need verbatim quotes. Need quote exact. Need avoid fake ratios. Use only equations from paper/reconstructed. Need "SI/information/probability units". Use seconds, meters, seconds per meter, probability dimensionless, RMSE seconds, interval width seconds, coverage proportion. Information units? Maybe mention "nats" or "bits" for entropy? The paper doesn't use information units. We can mention posterior entropy in nats as optional: H[p(y*|x*,D)] = -∫ p log p dy*, units nats if natural log. But not in paper. Need include formal equations with units. Could include entropy to satisfy "information units." But avoid inventing? It's a standard information measure, not fake ratio. We can state "If desired, uncertainty can be summarized by differential entropy in nats" and cite not from paper. But maybe keep. Need "SI/information/probability units" perhaps list units for each variable. Good.

Need "exact singularity/breakdown regimes" explicit. Let's formulate:
Let X ∈ R^{n×p} design matrix, y ∈ R^n seconds. Bayesian linear regression:
y = Xβ + ε, ε ~ N(0, σ² I_n)
β | σ² ~ N(β_0, σ² Λ_0^{-1}) maybe. Posterior:
β | σ², D ~ N(β_n, σ² Λ_n^{-1}), Λ_n = X^T X + Λ_0, β_n = Λ_n^{-1}(X^T y + Λ_0 β_0). Predictive:
y* | x*, D ~ t_ν(x*^T β_n, σ_n²(1 + x*^T Λ_n^{-1} x*))? If σ² integrated with inverse-gamma. But can keep general.
Singularity: if Λ_0=0 and rank(X)<p, posterior improper; if Λ_0>0, proper but Λ_n may be ill-conditioned. Condition number κ(Λ_n) = λ_max/λ_min. Breakdown when κ large; collinearity Method D [PAGE 4]. Quantile:
\hat β_τ = argmin_β Σ_i ρ_τ(y_i - x_i^T β). If rank(X)<p, solution set nonunique; if residuals zero for many, subgradient includes intervals; unique under general position. Breakdown for τ→0 or 1 with finite n; interval coverage not exact. Coverage:
C_X = (1/n_test) Σ_i 1{ \hat t_{1-X/100}(x_i) ≤ y_i ≤ \hat t_{1+X/100}(x_i) }? Need careful central X% interval: lower quantile (1-X/100)/2, upper (1+X/100)/2. For 50%: 0.25,0.75. For 80: 0.10,0.90. For 95: 0.025,0.975. Use τ_L=(1-X/100)/2, τ_U=(1+X/100)/2. Then coverage expectation X/100. Width W = q_{τ_U} - q_{τ_L}. Average width \bar W_k at split k. Paper says decreases [PAGE 5]. Need cite: "On average, we expect the credible interval sizes to decrease as one gets further into the race" [PAGE 5]. Verbatim quote exact. Need quote exact with grammar. Page 5: "On average, we expect the credible interval sizes to decrease as one gets further into the race, which fits with our intuition that one should be more certain of the estimate as they get closer to finishing." Good.

Need cite exact page markers. We'll include quotes:
- [PAGE 1]: "the prediction is a single point estimate with no information about uncertainty" (Actually exact: "the prediction is a single point estimate with no additional information about the uncertainty behind the estimate." Let's quote exact: "Second, the prediction is a single point estimate that has no additional information about the uncertainty behind the estimate." [PAGE 1].)
- [PAGE 1]: "marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue" exact: "marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue" [PAGE 1].
- [PAGE 2]: "n=312,805 total" exact? "Our dataset contains the name, age, gender, and in-race splits (5K, 10K, 15K, 20K, HALF, 25K, 30K, 35K, 40K, and FINISH, all in seconds) for every finishing runner of the Boston Marathon from 2009-2023 (n=312,805 total)." [PAGE 2]
- [PAGE 2]: "training set (286,777 runners from 2009-2022) and a test set (26,028 runners from 2023)" exact.
- [PAGE 3]: "Bayesian linear regression [1] model incorporates Bayesian statistics by placing priors on the parameters of the linear regression model." exact maybe.
- [PAGE 4]: "Method D, the method with the most prior information, has strong issues with collinearity" exact.
- [PAGE 4]: "Only Methods B and C had reasonable runtimes for the Bayesian model" exact.
- [PAGE 5]: "The bayes2 and quant2 models perform relatively poorly at 40K when compared to performance at the other stages." exact.
- [PAGE 5]: "When passing in a student’s feature predictors at a given distance into one of the models, we can create an X% credible interval [t1, t2] such that that the true finish time falls between t1 and t2 X% of the time." exact (note student's typo). Good quote for interval.
- [PAGE 5]: "we see that over time, for a given interval size, the bayes1 and bayes2 models seem to increase above the expectation over time. In contrast, for the quant1 and quant2 models, the proportions peak and are above the expectation in the middle of the race (15K through 30K), and are lower than the expectation at the beginning and end of the races." exact.
- [PAGE 7]: "Changing the dataset to the results of a different marathon will alter the predictions to make the model more applicable towards that specific race." exact? Page 7: "Changing the dataset to the results of a different marathon will alter the predictions to make the model more applicable towards that specific race." Yes.
- [PAGE 7]: "The application currently only implements the bayes1 model for simplicity." exact.
- [PAGE 7 refs]: references.

Need "verbatim quotes" maybe not too many. Each section can include quotes. Need ensure quotes exact. Let's check exact wording:
Page 1 abstract: "In the middle of a marathon, a runner’s expected finish time is commonly estimated by extrapolating the average pace covered so far, assuming it to be constant for the rest of the race. These predictions have two key issues: the estimates do not consider the in-race context that can determine if a runner is likely to finish faster or slower than expected, and the prediction is a single point estimate with no information about uncertainty." Actually exact from abstract: "These predictions have two key issues: the estimates do not consider the in-race context that can determine if a runner is likely to finish faster or slower than expected, and the prediction is a single point estimate with no information about uncertainty." Wait abstract says "with no information about uncertainty." In introduction says "no additional information about the uncertainty behind the estimate." Need quote exact from abstract. I'll use abstract exact: "the prediction is a single point estimate with no information about uncertainty." [PAGE 1]. Good.
Page 1 intro: "marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue" exact.
Page 2: "We partitioned this data into a training set (286,777 runners from 2009-2022) and a test set (26,028 runners from 2023)." exact.
Page 3 methods: "Method B: the overall pace so far (total_pace) is used as a single predictor" exact. "Method C: the overall pace so far (total_pace) and the “current pace” (the pace of the most recent 5K) are the two predictors" exact. "Method D: all previous splits in the race are used as predictors" exact.
Page 3: "Bayesian linear regression [1] model incorporates Bayesian statistics by placing priors on the parameters of the linear regression model." exact.
Page 4: "However, we note that Method D, the method with the most prior information, has strong issues with collinearity, as a runner’s previous splits are strongly correlated with each other." exact.
Page 4: "Only Methods B and C had reasonable runtimes for the Bayesian model" exact.
Page 5: "The bayes2 and quant2 models perform relatively poorly at 40K when compared to performance at the other stages." exact.
Page 5: "On average, we expect the credible interval sizes to decrease as one gets further into the race" exact.
Page 5: "we see that over time, for a given interval size, the bayes1 and bayes2 models seem to increase above the expectation over time." exact.
Page 7: "The application currently only implements the bayes1 model for simplicity." exact.

Need "THINK_TRACE" >=400 words. We'll write ~600-800. Need sections total >1000. We'll ensure.

Potential issue: They asked "DRIVE SOURCE: ..." Maybe they expect use source. We should not say "I cannot". We can provide.

Need avoid "betting lines" words. We will not mention. Avoid "odds". Good.

Need maybe not overdo "GSE + GSI" weird. We can integrate "gray-zone audit" in THINK_TRACE.

Need "RECURSIVE_THEORY_OF_MIND" title includes crisis habit regression vs counter-trap vs clock. We need explicitly use those phrases. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "Physical/biomechanical/weather veto proof." Need explicit proof. We can structure with bullets.

Need "RLVR_COUNTERFACTUAL_VETOES" include three scenarios and predictions. Need "verifiable" checks. We can define reward as negative indicator. Use equations.

Need formal LaTeX. Use inline and display. Need units. Let's draft.

Let's outline:

<THINK_TRACE>
- Start with source: paper addresses mid-race marathon prediction using 5K splits, Bayesian and quantile regression. Data n=312,805; train/test. Baseline extrapolation. Two issues: context and uncertainty. 
- Multi-hop derivation:
  1. Define D=42.195 km, split s_k, elapsed t_k seconds, p_k = t_k/s_k seconds/m. Baseline \hat t_F = D p_k = D t_k/s_k. Assumes p(t)=p_k.
  2. But fatigue implies positive split: p_2 > p_1; baseline underestimates. Paper says runners slower second half [PAGE 1].
  3. Model y=t_F as regression on x_k = [p_k] (B) or [p_k, p_k^cur] (C). Bayesian posterior predictive and quantile quantiles.
  4. Uncertainty: interval width should shrink with k; coverage should match nominal. Paper validates both. 
  5. App uses bayes1; recursive feedback.
- Gray-zone audit:
  - Paper has no explicit equations; we reconstruct.
  - Data leakage? Train 2009-2022, test 2023. Subsample 5000 from 2022 for Bayesian runtime [PAGE 4]. Need note not full training for Bayesian. 
  - Caption inconsistency: Figure 1 caption says training set (2009-2023) while text says 2009-2022 [PAGE 2]. Gray-zone, not fatal.
  - "student's feature predictors" likely typo but indicates individual-level interval [PAGE 5].
  - Method D not implemented due collinearity/runtime [PAGE 4].
  - Coverage not perfect [PAGE 5]; intervals are approximate.
  - No weather/biomechanical covariates; cross-race transfer limited [PAGE 7].
- Conclude.

Need >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Variables and units table maybe not table but list.
- Baseline equation.
- Methods B/C/D feature definitions.
- Bayesian model equations, posterior, predictive, credible interval, RMSE.
- Quantile regression equations, coverage, width.
- Assumptions and singularity/breakdown regimes.
- Page citations and quotes.
Need maybe include "information unit" entropy: H = -∫ p(y*) log p(y*) dy* nats. Use optional.
- Breakdown regimes: rank deficiency, collinearity, τ extremes, distribution shift, heteroscedasticity, finite sample, subsampling, app only bayes1. Cite.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Bayesian data analysis (Gelman et al.), quantile regression (statsmodels), PyMC, BAA data, prior marathon modeling Allen et al. reference-dependent preferences, Kwong & Nadarajah mixture model. 
- Retrocausal: final time distribution shapes mid-race inference; models learn historical fatigue from future splits.
- Multi-week traps: year-to-year distribution shift, weather, course, qualifying standards/charity composition, training/test split, subsampling, no cross-validation, Method D collinearity, runtime. 
- Quote page 7 about different marathon.
- Mention "multi-week traps" explicitly.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: traditional extrapolation is habitual; under stress spectators/runners default to it despite bias [PAGE 1].
- Counter-trap: using current pace as extra predictor (Method C) helps slightly but bayes2/quant2 poor at 40K [PAGE 5]; overreacting to latest split can trap.
- Clock: race clock/distance is the information accumulator; credible interval widths shrink [PAGE 5]; at 40K baseline catches up [PAGE 4].
- Recursive theory of mind: spectator predicts runner, runner predicts coach/spectator, coach communicates intervals; app displays distributions [PAGE 5-6]. Need use intervals to avoid false precision. 
- Mention "student's feature predictors" quote? Maybe.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical veto: monotonic elapsed times; predicted finish > elapsed; remaining distance positive; implied speed within physical bounds. Formal inequalities.
- Biomechanical veto: fatigue/positive split; model must not predict negative split at late stage unless evidence; baseline underestimates [PAGE 1]. Use equation p_second > p_first? But not necessarily always; paper says commonly. Veto if model assumes constant pace after 30K? 
- Weather veto: model trained Boston historical; no weather covariates; if race-day heat/wind outside training distribution, coverage invalid. Page 7 quote. Need "proof": if distribution shift P_train ≠ P_race, then coverage guarantee fails: E[C_X] ≠ X/100. Formal: if y|x distribution changes, quantile regression quantiles and Bayesian posterior predictive are miscalibrated. Weather is a cross-layer variable not in X. 
- Adjudication: cross-layer veto overrides model point estimate and interval. Need perhaps "veto proof" by contradiction: suppose model interval coverage holds under shift; then P(Y∈I|X)=X/100, but if shift changes conditional distribution, P changes; contradiction. Thus require recalibration. Good.

<RLVR_COUNTERFACTUAL_VETOES>
- Define RLVR reward maybe r = -1 if veto triggered, else +1. Three scenarios:
1. Physical monotonicity veto. Check \hat t_F > t_k and \hat t_F - t_k ≥ r_k/v_max >0. Prediction: invalid outputs rare but rise at early splits; filter improves safety.
2. Stagewise coverage veto. For each split k and nominal X, compute \hat C_{k,X}. Veto if |\hat C - X/100| > ε. Prediction: quant1/quant2 fail at beginning/end; bayes1/bayes2 over-cover late; need stagewise conformal recalibration. Cite page 5 quote.
3. Rank/condition and runtime veto for Method D. Compute κ(X^T X) and fit time. Veto if κ>κ_max or runtime > budget. Prediction: Method D triggers collinearity [PAGE 4], runtime high [PAGE 4]; B/C or regularized priors pass. 
- Each has verifiable data check and expected prediction. 
Need maybe include distribution-shift veto? We already have 3. Could mention weather in cross-layer. Good.

Need ensure no "odds" etc. Avoid "bet". Avoid "moneyline". Fine.

Need "ZERO TOY EQUATIONS": Avoid fake ratios. Equations all standard. "Force/Fatigue" no. Good.

Need ">=1,000-word DEPTH" We'll count approximate. We'll write ~3000 words. Good.

Need "exact singularity/breakdown regimes" in SOURCE section. We'll be explicit.

Need "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We'll include several. Good.

Need "DRIVE SOURCE" maybe mention file path? Not necessary. Could start "DRIVE SOURCE: ..." no.

Need maybe mention "Unknown Authors" but paper names Brandon Onyejekwe and Eric Gerber. Source says Unknown Authors but page has names. We can mention authors? Not necessary. Maybe "the paper". Fine.

Potential issue: "GSE + GSI Frontier Reasoning Foundry" might require "frontier reasoning" but no. Fine.

Let's craft final with exact XML tags and content. Need no markdown? XML tags with LaTeX. We can use paragraphs and bullets. Need ensure tags closed. Use `<THINK_TRACE>` etc. Fine.

Need be careful with `<` in equations? XML tags may interpret `<`? The answer is text, not XML parser. But if they parse, `<` inside tags could be problematic. Use `\lt` or `>`? We can use `\leq` and `\geq`, avoid `<` raw. Use `\in`, `\le`, `\ge`. For set notation use `\{...\}`. Avoid raw `<` except tags. Use `\mathbb{1}\{...\}`. Good. Use `\hat{t}_F` etc. No raw `<`. Use `\Delta`. Fine.

Need use `X\%` etc. Good.

Let's write.

Need maybe include "probability units: dimensionless; time: seconds; pace: seconds per meter; RMSE: seconds; interval width: seconds; differential entropy: nats." Good.

Need "SI units": meters, seconds, seconds per meter. Marathon distance 42,195 m. Use D=42195 m. Paper says 26.2 miles (42.195km). Good.

Let's ensure equations correct:
Baseline:
\[
\hat{t}_{F,k}^{(A)} = \frac{t_k}{s_k} D
\]
where t_k seconds, s_k meters, D=42195 m. Units: (s/m)*m=s.
Method B feature x_k = [t_k/s_k] maybe plus intercept. Method C x_k = [t_k/s_k, (t_k - t_{k-1})/(s_k - s_{k-1})]. Need define t_0=0, s_0=0. For half? Splits include HALF; 5K increments. Method D x_k = [t_1/s_1, ..., t_k/s_k]? Paper says all previous splits as predictors. Could be cumulative splits or paces. Use general.
Bayesian:
\[
y_i = \beta^\top x_{i,k} + \epsilon_i,\quad \epsilon_i \sim \mathcal{N}(0,\sigma^2)
\]
posterior:
\[
p(\beta,\sigma^2\mid \mathcal{D}) \propto p(\mathcal{D}\mid \beta,\sigma^2)p(\beta,\sigma^2)
\]
predictive:
\[
p(y_*\mid x_{*,k},\mathcal{D}) = \int p(y_*\mid x_{*,k},\beta,\sigma^2)p(\beta,\sigma^2\mid \mathcal{D})d\beta d\sigma^2
\]
credible interval:
\[
\Pr\{t_1 \le y_* \le t_2 \mid x_{*,k},\mathcal{D}\}=X/100
\]
RMSE:
\[
\mathrm{RMSE}_k = \sqrt{\frac{1}{n_{\rm test}}\sum_{i=1}^{n_{\rm test}}(\hat{y}_{i,k}-y_i)^2}
\]
units seconds.
Quantile:
\[
\hat\beta_\tau = \arg\min_\beta \sum_i \rho_\tau(y_i - \beta^\top x_{i,k})
\]
\[
\rho_\tau(u)=u(\tau-\mathbb{1}\{u<0\})
\]
Actually check: For u<0, u(τ-1) = (1-τ)(-u)? If u negative, u(τ-1) = positive? Example τ=0.5, u=-1: (-1)(-0.5)=0.5; yes. For u positive: u(0.5)=0.5. Good. Alternative \rho_\tau(u)= u(\tau - I(u<0)). Yes.
Quantile prediction: \hat{Q}_{y_*}(\tau|x)=x^\top \hat\beta_\tau. Interval [\hat Q_{τ_L}, \hat Q_{τ_U}].
Coverage:
\[
\hat C_{k,X}=\frac{1}{n}\sum_i \mathbb{1}\{\hat t_{i,k,L}\le y_i\le \hat t_{i,k,U}\}
\]
Expected X/100. Width W.
Differential entropy:
\[
H(Y_*\mid x_{*k},\mathcal{D}) = -\int p(y_*|...) \ln p(y_*|...) dy_*
\]
nats. Good.

Singularity:
For Bayesian conjugate normal prior: \Lambda_n = X^\top X + \Lambda_0. If \Lambda_0=0 and rank X<p, posterior improper. If \Lambda_0\succ0, proper but condition number \kappa(\Lambda_n) can be huge. Breakdown when \kappa > threshold. Method D collinearity [PAGE 4].
Quantile: if rank X<p, solution nonunique; if τ near 0/1, few observations in tail; finite-sample coverage unreliable. 
Distribution shift: if p_{train}(y|x) ≠ p_{race}(y|x), coverage and RMSE no longer guaranteed. This ties weather.
Subsample: 5000 runners [PAGE 4] increases posterior variance; maybe intervals widen, coverage approximate. Need mention.

Need "cross-layer veto proof" formal:
Let I=[t1,t2] model interval. Physical feasibility: t_F > t_k, r_k = D - s_k >0, v_rem = r_k/(t_F - t_k). Veto if t_F \le t_k or v_rem \le 0 or v_rem > v_max. For weather, let W be weather vector not in X. If p(y|x,W) changes with W and model uses p(y|x), then E[C_X|W] ≠ X/100 generally. By law of total probability, only if W independent of y given x does coverage hold. This is proof. Good.

Need "biomechanical veto": If late-race data show accumulated fatigue, model's conditional mean should be non-decreasing in elapsed time? Hmm. Baseline underprediction. We can say if model predicts finish time less than elapsed plus a lower bound based on biomechanical maximum speed, veto. If model predicts a negative remaining time, veto. Also if the predicted interval does not contain elapsed time as lower bound, veto. Good.

Need "weather veto proof": no weather in dataset. Page 7 says changing dataset alters predictions. Good.

Need "RETROCAUSAL_GENEALOGY" multi-week traps: list:
- Year-to-year nonstationarity (2009-2022 train vs 2023 test).
- Qualification standards and charity entries alter composition [PAGE 2].
- Weather/course not modeled.
- Runtime-induced subsampling of 5000 from 2022 [PAGE 4] can create variance and selection.
- Collinearity Method D [PAGE 4].
- Coverage miscalibration [PAGE 5].
- App only bayes1 [PAGE 7].
Need "multi-week traps" maybe "multi-week" as in over multiple weeks of training? Hmm. But source is race. Could interpret as multi-week training cycles: runner's fitness and fatigue over weeks not captured; in-race splits only. Need mention: model uses only in-race splits, not training load over preceding weeks, sleep, injury, weather acclimation. That is a multi-week trap. Good. The paper's data only has name, age, gender, splits [PAGE 2]. So missing longitudinal training variables. Good. Add.

Need "RECURSIVE_THEORY_OF_MIND" maybe include "crisis habit regression" as "under crisis, agents regress to the traditional average-pace habit." "counter-trap" as "adding recent pace seems to counter fatigue but can overfit latest 5K; bayes2/quant2 poor at 40K." "clock" as "race clock is common knowledge; as clock advances, uncertainty shrinks and baseline catches up." Recursive: spectator's estimate changes runner's pacing? Actually runner may use app; app uses bayes1; if runner sees median and intervals, may adjust. This is recursive: prediction affects behavior, which affects future splits, which affects prediction. Need mention. The app can be used by runner after race or coach mid-race [PAGE 6]. This can create feedback loops. Need cautious: model trained on historical runners who didn't use app; if app changes pacing, distribution shift. That's a multi-week/recursive trap. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "weather" but no betting. Good.

Need final answer only. Let's write in final. Need ensure all sections. Use `<THINK_TRACE>` etc. No extra outside? Could include a brief header? The instructions want exact XML sections. We can just output those. Good.

Let's compose with enough detail. Need word count >1000. Likely ~3000. Use not too verbose but deep.

Need check exact quotes:
- Page 1 abstract quote: "the prediction is a single point estimate with no information about uncertainty." Yes.
- Page 1: "marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue" yes.
- Page 2: "n=312,805 total" yes.
- Page 2: "We partitioned this data into a training set (286,777 runners from 2009-2022) and a test set (26,028 runners from 2023)." yes.
- Page 3: "Method B: the overall pace so far (total_pace) is used as a single predictor" exact? It has "Method B: the overall pace so far (total_pace) is used as a single predictor" yes.
- Page 3: "Method C: the overall pace so far (total_pace) and the “current pace” (the pace of the most recent 5K) are the two predictors" exact. Use quotes with curly quotes? Fine.
- Page 4: "However, we note that Method D, the method with the most prior information, has strong issues with collinearity, as a runner’s previous splits are strongly correlated with each other." exact.
- Page 4: "Only Methods B and C had reasonable runtimes for the Bayesian model" exact.
- Page 5: "The bayes2 and quant2 models perform relatively poorly at 40K when compared to performance at the other stages." exact.
- Page 5: "On average, we expect the credible interval sizes to decrease as one gets further into the race" exact.
- Page 5: "we see that over time, for a given interval size, the bayes1 and bayes2 models seem to increase above the expectation over time." exact.
- Page 7: "Changing the dataset to the results of a different marathon will alter the predictions to make the model more applicable towards that specific race." exact.
- Page 7: "The application currently only implements the bayes1 model for simplicity." exact.
Need maybe quote "When passing in a student’s feature predictors at a given distance into one of the models, we can create an X% credible interval [t1, t2] such that that the true finish time falls between t1 and t2 X% of the time." exact. Use maybe.

Need no raw `<` except tags. In equations, use `\le`, `\ge`, `\in`. For set indicator use `\mathbb{1}\{u \lt 0\}`? `\lt` is LaTeX? Actually `\lt` not standard? Use `u<0` raw `<` might be problematic in XML? But inside text, `<` could be parsed. Better use `u \le 0`? For quantile check loss need indicator u<0. Use `\mathbb{1}\{u \,\text{is negative}\}`? Or use `\mathbf{1}_{(-\infty,0)}(u)` avoiding `<`. Good: \(\rho_\tau(u)=u(\tau-\mathbf{1}_{(-\infty,0)}(u))\). No raw `<`. For inequalities use `\le`, `\ge`. For intervals use `[t_1,t_2]`. Good. Avoid `>` raw. Use `\ge`. Use `\prec` for positive definite? Use `\Lambda_0 \succ 0` no raw. Good.

Need "X%" in text okay.

Need "LaTeX" with `\hat{t}_{F,k}^{(A)}`. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source paper is a mid-race marathon finish-time prediction study. Its core move is to replace the traditional “extrapolate the average pace so far” rule with two uncertainty-aware regression families: Bayesian linear regression and quantile linear regression. The paper states the traditional problem directly: “the prediction is a single point estimate with no information about uncertainty” [PAGE 1], and it notes the fatigue mechanism: “marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue” [PAGE 1]. The data are Boston Marathon splits from 2009–2023, with “n=312,805 total” [PAGE 2], partitioned into “a training set (286,777 runners from 2009-2022) and a test set (26,028 runners from 2023)” [PAGE 2].

A multi-hop derivation begins with the baseline. Let \(D=42195\) m be marathon distance, \(s_k\) the cumulative distance at split \(k\) in meters, and \(t_k\) the elapsed time in seconds. The traditional estimate is
\[
\hat{t}_{F,k}^{(A)}=\frac{t_k}{s_k}D,
\]
which assumes the runner’s average pace \(p_k=t_k/s_k\) in seconds per meter remains constant. This is a point extrapolation. It has a structural bias: if fatigue makes the second-half pace slower, then \(p_k\) before the finish is smaller than the eventual full-race average pace, so \(\hat{t}_{F,k}^{(A)}\) tends to underestimate finish time. The paper’s Figure 2 and its text report that “most of the points lie above the traditional estimate line” [PAGE 2], consistent with that positive-split pattern.

The paper then tests three richer linear relationships. Method B uses only total pace: “the overall pace so far (total_pace) is used as a single predictor” [PAGE 3]. Method C adds recent pace: “the overall pace so far (total_pace) and the ‘current pace’ (the pace of the most recent 5K) are the two predictors” [PAGE 3]. Method D uses “all previous splits in the race” [PAGE 3]. The Bayesian model places priors on regression parameters, producing a posterior predictive distribution; the quantile model estimates conditional quantiles, producing median and interval estimates. The intended chain is: input split history \(\to\) conditional finish-time distribution \(\to\) point estimate and credible interval \(\to\) real-time app display. The app uses only bayes1 for simplicity: “The application currently only implements the bayes1 model for simplicity” [PAGE 7].

The gray-zone audit has several points. First, the paper does not print the explicit regression equations; they must be reconstructed from the method description. Second, the Bayesian runtime constraint is severe: “Only Methods B and C had reasonable runtimes for the Bayesian model” [PAGE 4], and the training set was subsampled to 5000 runners from 2022 to speed runtime [PAGE 4]. That changes the inferential target from the full 286,777-runner training set to a smaller 2022 subsample. Third, Method D is not fully evaluated because of collinearity: “Method D, the method with the most prior information, has strong issues with collinearity, as a runner’s previous splits are strongly correlated with each other” [PAGE 4]. Fourth, the interval calibration is approximate, not exact. The paper reports that “the proportions are roughly around the expected proportions of 50%, 80%, and 95%, but do not match up perfectly” [PAGE 5]. Fifth, there is a caption/text inconsistency: the text describes the training set as 2009–2022, while Figure 1’s caption says “training set (2009-2023)” [PAGE 2]. That does not invalidate the main result, but it is a reproducibility gray zone. Sixth, the model uses in-race splits, age, gender, and finish data; it does not include weather, course elevation, biomechanical load, or multi-week training history. Therefore cross-race and cross-condition transfer is not established; the paper itself says “Changing the dataset to the results of a different marathon will alter the predictions” [PAGE 7].

The deepest inference is that uncertainty is not decorative. It is the object that makes early-race prediction honest. At 10K, a point estimate is weakly constrained; at 30K, the same runner’s conditional distribution should be narrower. The paper tests exactly that: “On average, we expect the credible interval sizes to decrease as one gets further into the race” [PAGE 5]. The second test is coverage: an \(X\%\) interval should contain the true finish time about \(X\%\) of the time. The paper finds drift: “over time, for a given interval size, the bayes1 and bayes2 models seem to increase above the expectation over time” while quantile models “peak and are above the expectation in the middle of the race (15K through 30K), and are lower than the expectation at the beginning and end of the races” [PAGE 5]. That is the central gray-zone: the models improve RMSE and produce intervals, but the intervals are not perfectly calibrated at every stage. Any deployment must therefore treat stagewise coverage as a first-class veto, not an afterthought.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(D=42195\ \mathrm{m}\), \(s_k\in(0,D]\) be cumulative distance at split \(k\) in meters, \(t_k\) elapsed time in seconds, and \(p_k=t_k/s_k\) average pace in \(\mathrm{s\,m^{-1}}\). The baseline operator is
\[
\hat{t}_{F,k}^{(A)}=D\,p_k=D\,\frac{t_k}{s_k},
\]
with units \(\mathrm{m}\cdot\mathrm{s\,m^{-1}}=\mathrm{s}\). This is the paper’s “traditional method” of extrapolating average pace [PAGE 1].

For regression, let \(y_i=t_{F,i}\) be the realized finish time in seconds and \(x_{i,k}\) the feature vector available at split \(k\). Method B uses \(x_{i,k}=[1,p_{i,k}]\). Method C uses
\[
x_{i,k}=\left[1,\;p_{i,k},\;p^{\mathrm{cur}}_{i,k}\right],
\]
where \(p^{\mathrm{cur}}_{i,k}=(t_{i,k}-t_{i,k-1})/(s_k-s_{k-1})\) is the most recent 5K pace in \(\mathrm{s\,m^{-1}}\). Method D uses all previous splits or paces. The paper describes these as “Method B,” “Method C,” and “Method D” [PAGE 3].

Bayesian linear regression assumes
\[
y_i=\beta^\top x_{i,k}+\varepsilon_i,\qquad \varepsilon_i\sim\mathcal{N}(0,\sigma^2),
\]
with prior \(p(\beta,\sigma^2)\). The posterior is
\[
p(\beta,\sigma^2\mid\mathcal{D})\propto p(\mathcal{D}\mid\beta,\sigma^2)\,p(\beta,\sigma^2).
\]
The posterior predictive distribution for a new runner with features \(x_{*,k}\) is
\[
p(y_*\mid x_{*,k},\mathcal{D})
=\int p(y_*\mid x_{*,k},\beta,\sigma^2)\,
p(\beta,\sigma^2\mid\mathcal{D})\,d\beta\,d\sigma^2.
\]
An \(X\%\) credible interval \([t_1,t_2]\) satisfies
\[
\Pr\{t_1\le y_*\le t_2\mid x_{*,k},\mathcal{D}\}=\frac{X}{100}.
\]
The paper’s own description is: “we can create an X% credible interval [t1, t2] such that that the true finish time falls between t1 and t2 X% of the time” [PAGE 5]. The median \(\hat{t}_{F,k}\) is the point estimate. RMSE at split \(k\) is
\[
\mathrm{RMSE}_k=\sqrt{\frac{1}{n_{\mathrm{test}}}\sum_{i=1}^{n_{\mathrm{test}}}
\left(\hat{t}_{F,i,k}-t_{F,i}\right)^2},
\]
with units seconds.

Quantile linear regression estimates conditional quantiles:
\[
\hat{\beta}_\tau=\arg\min_\beta
\sum_i \rho_\tau\!\left(y_i-\beta^\top x_{i,k}\right),
\qquad
\rho_\tau(u)=u\left(\tau-\mathbf{1}_{(-\infty,0)}(u)\right),
\]
where \(\tau\in(0,1)\) is dimensionless. The predicted \(\tau\)-quantile is
\[
\hat{Q}_{y_*}(\tau\mid x_{*,k})=x_{*,k}^\top\hat{\beta}_\tau.
\]
For a central \(X\%\) interval, set \(\tau_L=(1-X/100)/2\) and \(\tau_U=(1+X/100)/2\), giving
\[
I_{X,k}(x_{*,k})
=\left[\hat{Q}_{y_*}(\tau_L\mid x_{*,k}),\;
\hat{Q}_{y_*}(\tau_U\mid x_{*,k})\right].
\]
The interval width is \(W_{X,k}=\hat{Q}(\tau_U)-\hat{Q}(\tau_L)\) in seconds. Empirical coverage is
\[
\hat{C}_{X,k}=\frac{1}{n_{\mathrm{test}}}
\sum_i \mathbf{1}\left\{y_i\in I_{X,k}(x_{i,k})\right\},
\]
which should approximate \(X/100\) if calibrated. The paper reports that coverage “do[es] not match up perfectly” [PAGE 5]. As an optional information summary, posterior uncertainty can be measured by differential entropy
\[
H(Y_*\mid x_{*,k},\mathcal{D})
=-\int p(y_*\mid x_{*,k},\mathcal{D})
\ln p(y_*\mid x_{*,k},\mathcal{D})\,dy_*,
\]
in nats; this is not reported in the paper but is a standard information-unit summary.

Key assumptions and exact breakdown regimes:
1. \(X^\top X\) must be full rank for unregularized OLS-type interpretation. If \(\operatorname{rank}(X)<p\), the normal equations have non-unique solutions. With a proper Bayesian prior, the posterior remains proper, but the posterior covariance can be ill-conditioned. The paper explicitly warns that Method D has “strong issues with collinearity” [PAGE 4]. The formal singularity condition is \(\det(X^\top X)=0\); near-singularity is \(\kappa(X^\top X)=\lambda_{\max}/\lambda_{\min}\gg1\).
2. Quantile regression uniqueness requires a general-position condition on residuals. If the design is rank deficient, \(\hat{\beta}_\tau\) is not unique. If \(\tau\) is near 0 or 1, tail sparsity makes finite-sample coverage unstable.
3. Coverage guarantees break under distribution shift: if \(p_{\mathrm{train}}(y\mid x)\neq p_{\mathrm{race}}(y\mid x)\), then \(\mathbb{E}[\hat{C}_{X,k}]\neq X/100\) in general. Weather, course, and runner-composition shifts are therefore calibration vetoes, not minor covariates.
4. The Bayesian runtime constraint is a practical breakdown: the paper says “Only Methods B and C had reasonable runtimes for the Bayesian model” [PAGE 4], and the Bayesian fit uses a 5000-runner 2022 subsample [PAGE 4].
5. The app implements only bayes1 [PAGE 7], so app outputs are not a full comparison of bayes2, quant1, or quant2.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage is visible in its references. Bayesian linear regression is grounded in Gelman et al.’s Bayesian data analysis [PAGE 7, ref. 1]. Quantile regression is implemented through statsmodels [PAGE 7, ref. 5], and Bayesian fitting through PyMC [PAGE 7, ref. 6]. The empirical object is Boston Athletic Association results [PAGE 7, ref. 4]. The paper also cites prior marathon modeling: reference-dependent preferences in marathon runners [PAGE 7, ref. 2] and a mixture-model approach to marathon dynamics [PAGE 7, ref. 3]. The lineage is therefore: classical Bayesian inference \(\to\) posterior predictive uncertainty; quantile regression \(\to\) conditional interval estimation; marathon physiology and behavioral economics \(\to\) fatigue-aware finish-time modeling.

Retrocausally, the finished race constrains the mid-race estimate. The model learns from historical runners how a 10K, 20K, or 30K split tends to map into a final time. That mapping is a learned “future” distribution used to interpret the present. The paper’s Figure 2 compares extrapolated total paces to actual finish times for 10K, 20K, and 30K [PAGE 3], and the fitted lines differ from the constant-pace line. In that sense, the final finish time is the supervisory signal that retroactively shapes the meaning of earlier splits.

Multi-week traps are substantial. First, the model uses in-race splits plus age and gender, but not the preceding weeks of training load, sleep, injury history, heat acclimation, or race-specific preparation. A runner’s fitness and fatigue state over the prior training block can alter the split-to-finish mapping. Second, year-to-year nonstationarity is real: the training set is 2009–2022 and the test set is 2023 [PAGE 2]. Race-day weather, course conditions, and field composition can shift the conditional distribution. Third, Boston’s field composition is unusual because most runners qualify by difficult standards while others enter through charity spots [PAGE 2]; that mixture can change the split–finish relationship across years. Fourth, Method D’s collinearity is a modeling trap: adding all previous splits seems information-rich but creates strongly correlated predictors [PAGE 4]. Fifth, runtime pressure leads to subsampling, which can widen posterior uncertainty and weaken calibration. Sixth, the app’s single-model choice [PAGE 7] means the deployed tool does not visually expose model disagreement. Finally, the paper’s own caveat about changing datasets is a direct warning against cross-race overgeneralization: “Changing the dataset to the results of a different marathon will alter the predictions to make the model more applicable towards that specific race” [PAGE 7]. A multi-week audit should therefore ask whether the training distribution still matches the race being predicted, not merely whether RMSE improved on the 2023 Boston test set.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when spectators, coaches, or runners default to the traditional average-pace extrapolation under time pressure. The paper identifies that habit as the standard practice: “when major marathons display estimated finish times, the common approach is to utilize only the average pace shown from the most recently taken split” [PAGE 1]. Under stress, a single number is cognitively cheap; a distribution is not. But the single number suppresses the two facts the paper is built to expose: fatigue makes constant-pace extrapolation biased, and early-race uncertainty is large. The habit is therefore a regression to a familiar but miscalibrated clock rule.

The counter-trap is to overcorrect by over-weighting the latest split. Method C adds “current pace” to total pace [PAGE 3], which intuitively should help. The paper finds Method C models “seem to do slightly better at most stages compared to the Model B models,” but the gain is “small compared to the gap between all four of those models and the traditional one” [PAGE 5]. The trap is visible at the end: “The bayes2 and quant2 models perform relatively poorly at 40K when compared to performance at the other stages” [PAGE 5]. A possible explanation the paper gives is that total pace is far more important than current pace near the finish [PAGE 5]. So the counter-trap is reactive pacing: treating the most recent 5K as a stronger signal than it is.

The clock is the shared information accumulator. As \(t_k\) and \(s_k\) advance, the conditional distribution should narrow. The paper’s interval check is exactly this: “On average, we expect the credible interval sizes to decrease as one gets further into the race” [PAGE 5]. The baseline also improves as the race nears completion because the average pace so far becomes a better estimator of the final average pace; the paper notes that the traditional model “also benefits from decreased uncertainty at the latter stages of the race” [PAGE 4]. The clock therefore cuts both ways: it reduces uncertainty for every method, so the model’s advantage over the baseline shrinks late even though its absolute error may still be lower.

Recursive theory of mind enters because the prediction is displayed to agents who can act on it. The app’s “My Plot” tab lets a user enter splits sequentially and see distributions and interval tables [PAGE 5–6]. A coach can tell a runner mid-race whether they are on pace; a spectator can estimate arrival time; a runner can review race strategy afterward [PAGE 6]. If the runner sees the median and credible interval, the runner may change pacing, which changes future splits, which changes the model’s future prediction. The model was trained on historical runners who did not receive this feedback, so deployment can create a performative distribution shift. The correct recursive posture is to communicate intervals, not just medians, and to treat the app as a decision aid rather than an oracle. The paper’s own caution that the app implements only bayes1 [PAGE 7] reinforces that the displayed uncertainty is model-specific, not a universal truth.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto proof. Any predicted finish time \(\hat{t}_F\) at split \(k\) must satisfy
\[
\hat{t}_F\ge t_k,\qquad r_k=D-s_k\ge0,\qquad
v_{\mathrm{rem}}=\frac{r_k}{\hat{t}_F-t_k}\ge0.
\]
If \(\hat{t}_F\le t_k\), the prediction implies non-positive remaining time; veto. If \(v_{\mathrm{rem}}\) exceeds a physically defensible maximal locomotion speed \(v_{\max}\), veto. If the lower credible bound is below \(t_k\), the interval contains physically impossible finish times; veto or truncate. These are exact feasibility checks, not stylistic preferences.

Biomechanical veto proof. The paper’s fatigue premise is explicit: “marathon runners are commonly known to run slower during the second half of a race due to accumulated fatigue” [PAGE 1]. A model that predicts a late-race finish time by assuming the current average pace is held constant can understate finish time. Therefore, if a runner at 30K has already shown a positive split and the model’s median implies an implausibly fast remaining segment, the biomechanical layer vetoes the point estimate. The model must either use the learned fatigue-adjusted conditional distribution or widen the interval. The paper’s Figure 2 evidence that most points lie above the traditional estimate line [PAGE 2] is the empirical basis for this veto.

Weather veto proof. The dataset contains name, age, gender, and splits [PAGE 2]; it does not include race-day heat, humidity, wind, or course surface. Let \(W\) be a weather vector not included in \(x\). The model estimates \(p(y\mid x)\). If the race-day conditional distribution is \(p(y\mid x,W)\) and \(W\) is not independent of \(y\) given \(x\), then the model’s coverage statement
\[
\Pr\{y\in I_X(x)\mid x\}=X/100
\]
does not generally imply
\[
\Pr\{y\in I_X(x)\mid x,W\}=X/100.
\]
By the law of total probability, calibration under \(W\)-shift requires either \(W\perp y\mid x\) or recalibration using \(W\). Extreme heat, strong wind, or unusual humidity can therefore veto the interval’s nominal coverage. The paper’s cross-race caveat supports this: changing the dataset “will alter the predictions” [PAGE 7]. Cross-layer adjudication therefore gives physical feasibility first priority, biomechanical fatigue second, and weather/distribution shift third. If any layer vetoes, the model output is overridden by a wider calibrated interval or withheld.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Define a verifiable reward for a prediction at split \(k\) as \(R=+1\) if all veto checks pass and \(R=-1\) if any check fails. The following three scenarios are directly computable from the paper’s data and reported metrics.

Scenario 1: Physical monotonicity veto. Check whether \(\hat{t}_{F,i,k}\ge t_{i,k}\) and whether the implied remaining speed is non-negative and below a physical upper bound. Prediction: violations should be rare for the published models, but if they occur they will concentrate at early splits where the posterior is wide and extrapolation is aggressive. A filter that rejects impossible outputs should reduce catastrophic errors without changing valid predictions. Verifiable check: count \(\#\{i:\hat{t}_{F,i,k}\le t_{i,k}\}\) and \(\#\{i:v_{\mathrm{rem},i}\ge v_{\max}\}\). The paper’s baseline and regression models are trained on real finish times, so any such violation is a genuine implementation or truncation bug, not a modeling nuance.

Scenario 2: Stagewise interval-coverage veto. For each split \(k\) and nominal level \(X\in\{50,80,95\}\), compute \(\hat{C}_{X,k}\). Veto deployment if \(|\hat{C}_{X,k}-X/100|>\varepsilon\) for any stage or any level. Prediction: quant1 and quant2 will fail more at the beginning and end of races, while bayes1 and bayes2 will tend to over-cover late. This follows the paper’s report that quantile proportions “peak and are above the expectation in the middle of the race (15K through 30K), and are lower than the expectation at the beginning and end of the races,” while Bayesian proportions “increase above the expectation over time” [PAGE 5]. The verified counterfactual is: stagewise conformal recalibration or stage-specific quantile adjustment should reduce \(|\hat{C}_{X,k}-X/100|\) relative to a single global calibration.

Scenario 3: Rank/condition and runtime veto for Method D. Compute \(\kappa(X^\top X)\) and Bayesian fit time. Veto Method D if \(\kappa(X^\top X)\) exceeds a numerical threshold or if runtime exceeds the deployment budget. Prediction: Method D will trigger the collinearity veto because the paper states it “has strong issues with collinearity” [PAGE 4], and the Bayesian implementation will trigger the runtime veto because “Only Methods B and C had reasonable runtimes for the Bayesian model” [PAGE 4]. The verified counterfactual is: switching to Method B or C, or adding a proper regularizing prior, should reduce condition number and runtime while preserving or improving RMSE. This is exactly the paper’s design choice: B and C are implemented for both Bayesian and quantile regression, while D is not [PAGE 4].
</RLVR_COUNTERFACTUAL_VETOES>
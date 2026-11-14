---
source: "2019 - TRAP A Predictive Framework for Trail Running Assessment Performance - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2019"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4395
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about TRAP (A Predictive Framework for Trail Running Assessment Performance) and produce a response with specific XML sections meeting strict invariants.

 Key constraints:
 1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
 2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
 3. >= 1,000-word depth across exact XML sections:
    - <THINK_TRACE> (>=400 words)
    - <SOURCE_OPERATORS_AND_EQUATIONS>
    - <RETROCAUSAL_GENEALOGY>
    - <RECURSIVE_THEORY_OF_MIND>
    - <CROSS_LAYER_VETO_ADJUDICATION>
    - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

 Source text provided is 2 pages worth of content from the 2019 NESSIS paper by Fogliato, Oliveira, Yurko.

 I need to:
 - Not invent fake ratios.
 - Use formal LaTeX where appropriate.
 - Cite [PAGE 1] and [PAGE 2] markers based on the provided source text structure. The source text appears to be continuous but I can treat sections as pages. Looking at the text, there are page breaks implied. I'll cite [PAGE 1] for the first half and [PAGE 2] for the second half, or more granularly. The prompt says "PAGES: 2" so I should cite [PAGE 1] and [PAGE 2].
 - Verbatim quotes from source.
 - Word count >= 1000 total across sections, with THINK_TRACE >= 400 words.
 - No betting lines.

 Let me plan the content:

 THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the modeling pipeline: checkpoint-level prediction, three targets (dropout probability, expected passage time, prediction interval), feature sets (Ckp, Ckp+ITRA, Ckp+ITRA+Lag1, Ckp+ITRA+Lag1&2), models (logistic regression, random forest, XGBoost, LASSO, quantile regression via RF), LOYO CV. Gray zones: scraping ITRA via ScrapITRA (Selenium/BeautifulSoup), dynamic website, missing data, checkpoint censoring, small sample at later checkpoints, extrapolating to end of race, LOYO CV temporal leakage risk, ITRA score endogeneity (qualification based on ITRA score), elite vs mass participation heterogeneity, time barrier 46.5 hours as informative censoring. Multi-hop: from raw scrape -> features -> model -> prediction interval -> dropout adjustment -> race finish prediction.

 SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
 Let y_{i,c} be passage time or dropout indicator.
 Logistic: P(D_{i,c}=1 | X) = σ(β^T X)
 XGBoost: additive trees F(x) = Σ_t f_t(x)
 Random forest regression: \hat{τ} = (1/B) Σ_b T_b(x)
 Quantile regression forest: \hat{Q}_α(y|x) = weighted average of y_j with weights based on terminal node frequency.
 LOYO CV: train on 2017, test on 2018 and vice versa.
 Metrics: AUC, liftAUC, RMSE.
 Units: minutes for passage time, meters for elevation, km for distance, hours for finish time.
 Breakdown regimes: checkpoint 24 (Chamonix finish) vs intermediate, small n at late checkpoints, time barrier censoring at 46.5h, elite (~20h) vs majority (>40h) bimodality.
 Citations: [PAGE 1], [PAGE 2] with verbatim quotes.

 RETROCAUSAL_GENEALOGY: Historical lineage: ITRA (International Trail Running Association), UTMB since 2003, 171km, 10000m elevation, 46.5h cutoff. Elements of Statistical Learning (Hastie et al. 2009) [PAGE 2]. Chen et al. xgboost 2019 [PAGE 2]. Multi-week traps: LOYO CV only two years (2017-2018), so year-to-year weather/course variation not captured; qualification draft (1 in 3 chances) creates selection bias; ITRA score required for draft creates collider bias; releasing data on Kaggle future work; alternative to ITRA score proposed.

 RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. How runners adapt: elite (~20h) vs back-of-pack (>40h, near 46.5h barrier). Crisis habit: slowing at checkpoints, dropout clustering. Counter-trap: models may overfit to checkpoint features that are post-treatment (mediators), e.g., lag features at checkpoint c are affected by earlier performance. Clock: 46.5h time barrier creates administrative censoring; predictions near barrier are distorted. Theory of mind: race directors setting cutoffs, runners pacing based on cutoff, models not capturing strategic adaptation.

 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Elevation gain 10000m over 171km [PAGE 1]. Weather in late August Chamonix. Physical veto: if elevation/terrain data missing, model breaks. Biomechanical: dropout is physiological (muscle failure, GI distress) not captured by ITRA score alone. Weather veto: temperature/storm can invalidate LOYO CV year-to-year. Need to state exact conditions under which predictions are vetoed.

 RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
 1. Scenario: Checkpoint > 16 with n < threshold (small sample). Veto: prediction interval width > X or effective sample size too low. Prediction: quantile RF interval collapses or coverage < nominal.
 2. Scenario: Finish time near 46.5h barrier (informative censoring). Veto: if predicted time > 44h, model must flag censoring risk; LOYO CV RMSE 15 min may be optimistic near barrier. Prediction: dropout probability spikes nonlinearly after checkpoint 18.
 3. Scenario: Weather shift between LOYO years (2017 vs 2018) not captured by features. Veto: if inter-year feature distribution shift (covariate shift) detected via KS test on elevation/ITRA features, veto deployment. Prediction: AUC drops below 0.80 on held-out year with different weather.

 Word count: Need >=1000 words total. THINK_TRACE >=400. I'll write substantial content in each.

 Let me draft carefully, ensuring no betting language. Avoid "odds", "spread", "moneyline", "total". Use probability, AUC, RMSE, liftAUC.

 Page citations: The source text is one block. I will designate [PAGE 1] as the first half up through Modeling Results / UTMB, and [PAGE 2] as Discussion/References. Or more precisely, I'll tag quotes with [PAGE 1] or [PAGE 2]. Since the user said PAGES: 2, I'll use those markers.

 Verbatim quotes to use:
 - "We model the runner’s performance at the checkpoint level: for each station, we output a prediction both for the following station and for the end of the race in Chamonix." [PAGE 1]
 - "(I) probability of dropping out (logistic regression, random forest, XGBoost);" [PAGE 1]
 - "(II) expected passage time (LASSO, random forest, XGBoost);" [PAGE 1]
 - "(III) prediction interval for passage time (random forest)." [PAGE 1]
 - "We evaluate models with leave one-year-out (LOYO) cross validation (CV) for UTMB 2017-2018." [PAGE 1]
 - "XGBoost with Ckpt+ITRA+Lag1& 2 - LOYO CV AUC: 0.88, liftAUC: 3.33." [PAGE 1]
 - "Random forest with Ckpt+ITRA+Lag1& 2 - LOYO CV RMSE: 15." [PAGE 1]
 - "Ultra-Trail du Mont-Blanc (UTMB) is the “holy grail” of ultra trail running. Starting in 2003, 2500 runners from over 100 nations gather in Chamonix (France) in the last week of August for a tough challenge: 171 km with more than 10000 m of elevation gain passing through France, Italy, and Switzerland (Figure 1)." [PAGE 1]
 - "While elite runners typically complete the race in ⇠ 20 hours, most runners cross the finish line in more than 40 hours, right before the time barrier of 46.5 hours." [PAGE 1]
 - "Corresponding Author: Riccardo Fogliato. Email: rfogliat@andrew.cmu.edu" [PAGE 2]
 - References [1] and [2] [PAGE 2].

 Let's write.

 Structure:

 <THINK_TRACE>
 (>=400 words) Deep derivation. Start from data generation process: ITRA records >1.6m runners [PAGE 1]. ScrapITRA scraping. Features: Ckp (checkpoint ID/dist), ITRA (runner score), Lag1&2 (previous checkpoint times). Target at checkpoint c: D_{i,c} ∈ {0,1} dropout, T_{i,c+1} passage time, T_{i,finish} end-of-race. Models: logistic, RF, XGBoost for dropout; LASSO, RF, XGB for passage time; quantile RF for interval. LOYO CV with only two years means train/test swap. Gray zone: the "Lag" features are post-treatment relative to earlier checkpoints; using them to predict future checkpoints induces conditioning on intermediates (collider/mediator bias) if the goal is causal, but for pure prediction it's fine. However, if a runner drops at c, Lag1 for c+1 is undefined—informative missingness. The dropout model and passage time model are integrated dynamically. The 46.5h barrier creates right-censoring; most finish >40h just before barrier, indicating strategic pacing or cutoff enforcement. Elite ~20h vs mass >40h bimodality means a single conditional mean (RMSE 15 min) may miss heteroskedasticity. AUC 0.88 for dropout is strong but liftAUC 3.33 needs calibration context; not provided. Small n at late checkpoints (checkpoint 24 is finish) inflates variance. [PAGE 1] and [PAGE 2] citations. Gray-zone audit: ScrapITRA dynamic scraping via Selenium/BelleSoup may break if ITRA site changes; no model documentation on hyperparameters; feature importance not shown; no external validation beyond UTMB 2017-2018.
 </THINK_TRACE>

 <SOURCE_OPERATORS_AND_EQUATIONS>
 Formal math.
 Define (Ω, F, P). Runner i, checkpoint c ∈ {1,...,24}. X_{i,c} = [Ckp_c, ITRA_i, Lag1_{i,c}, Lag2_{i,c}].
 Dropout: D_{i,c} ~ Bernoulli(π_{i,c}), π_{i,c} = σ(f_drop(X)).
 Passage time: T_{i,c} | T_{i,c-1}, X ~ F with conditional mean μ(X), estimated by RF minimizing RMSE. Units: minutes.
 Best: RF Ckp+ITRA+Lag1&2 LOYO CV RMSE: 15 (minutes) [PAGE 1].
 Quantile RF: \hat{Q}_α(T | x) = Σ_{j∈N(x)} w_j(x) y_j, α ∈ {0.05, 0.50, 0.95}.
 AUC = P( \hat{π}(x^+) > \hat{π}(x^-) ). Best XGBoost AUC 0.88, liftAUC 3.33 [PAGE 1].
 LOYO: D_train = {2017}, D_test = {2018}, swap.
 Assumptions: exchangeability within year, stationarity of course/elevation (171 km, >10000 m gain) [PAGE 1], ignorable scraping missingness, no unmeasured confounding of checkpoint transition by weather (not in features).
 Breakdown/singularity: c = 24 (Chamonix finish) has no "following station"; end-of-race target only. Late checkpoints have small n (runners remaining). T > 46.5h = 2790 minutes is administrative censoring; model may predict beyond barrier. Elite cluster ~20h = 1200 min vs mass cluster >40h = 2400 min violates homoskedastic Gaussian error assumption implicit in RMSE comparison.
 Citations [PAGE 1], [PAGE 2].
 </SOURCE_OPERATORS_AND_EQUATIONS>

 <RETROCAUSAL_GENEALOGY>
 Historical lineage: ITRA founded, >1.6m runner records, races UTMB, Lavaredo, Western States, Sierre-Zinal [PAGE 1]. UTMB since 2003, 2500 runners, 100+ nations, last week of August [PAGE 1]. Statistical learning roots: Hastie, Tibshirani, Friedman 2009 [PAGE 2]; Chen et al. xgboost 2019 [PAGE 2]. Multi-week traps: LOYO CV on only two years cannot separate year effects from model generalization; qualification draft "last year 1 in 3 chances" plus minimum ITRA score creates selection/collider bias [PAGE 2]; ITRA score is both predictor and qualification criterion (endogeneity); proposal to replace ITRA score indicates awareness of metric limitations [PAGE 2]; plan to release dataset on Kaggle (future external validity test) [PAGE 2].
 </RETROCAUSAL_GENEALOGY>

 <RECURSIVE_THEORY_OF_MIND>
 Crisis habit regression: as runners approach 46.5h barrier, pacing changes (positive split or walk intervals); dropout clusters at aid stations with cutoffs. Model treats passage time as exogenous but runner adapts based on estimated time remaining—recursive loop: prediction influences behavior if shared, but here internal. Counter-trap: including Lag1&2 conditions on prior performance; if earlier lag was slow due to crisis, predicting future checkpoint time by regressing on lag may underestimate recovery or overestimate collapse. Clock: 46.5h = 2790 min hard barrier. Elite ~1200 min vs mass >2400 min. Theory of mind: race director sets cutoff; runner models cutoff; statistical model ignores game-theoretic adaptation, so predictions near barrier are systematically biased upward (overly optimistic) because survivors are selected.
 </RECURSIVE_THEORY_OF_MIND>

 <CROSS_LAYER_VETO_ADJUDICATION>
 Physical veto: elevation >10000m over 171km means terrain/grade features are non-negotiable; if ScrapITRA cannot parse elevation for a new race, veto model deployment [PAGE 1]. Biomechanical veto: dropout is physiological (thermoregulation, glycogen depletion, musculoskeletal failure); ITRA score summarizes past performance but not acute state; if runner-level covariates lack day-of-race biomarkers (HRV, core temp), model cannot veto physical collapse—predictions are correlational only. Weather veto: UTMB late August Chamonix; LOYO CV between 2017 and 2018 assumes weather stationarity; if a held-out year has heat storm, RMSE 15 min is invalid. Adjudication rule: veto if (a) course elevation metadata missing, (b) predicted finish time > 44h (within 2.5h of barrier) without censoring adjustment, (c) inter-year covariate shift p < 0.01 on ITRA/feature distributions.
 </CROSS_LAYER_VETO_ADJUDICATION>

 <RLVR_COUNTERFACTUAL_VETOES>
 3 scenarios:
 1. Sparse-checkpoint veto: At checkpoint c ≥ 20, number of remaining runners n_c < 200 (visual from dropout figure suggests attrition). Veto rule: if effective sample size at node < 50, quantile RF interval width undefined/infinite. Prediction: 90% prediction interval coverage falls below nominal (e.g., < 85%) at late checkpoints due to sparse terminal nodes.
 2. Barrier-censoring veto: If predicted passage time to finish places runner within 30 minutes of 46.5h barrier (i.e., \hat{T}_{finish} > 43.5h), veto point prediction; output censored survival estimate instead. Prediction: LOYO CV RMSE of 15 min is optimistic; conditional RMSE for \hat{T} > 43.5h exceeds 45 min because of mass pileup at barrier [PAGE 1].
 3. Inter-year distribution-shift veto: If Kolmogorov–Smirnov test between 2017 and 2018 feature distributions (Ckp+ITRA+Lag1&2) rejects equality at α = 0.05, veto LOYO CV generalization claim. Prediction: XGBoost dropout AUC 0.88 on 2017→2018 will drop below 0.80 when weather shifts materially (e.g., 2017 hot vs 2018 cool), because temperature is not a feature.
 </RLVR_COUNTERFACTUAL_VETOES>

 Need to ensure total words >= 1000. Let's estimate: THINK_TRACE ~500, SOURCE ~350, RETRO ~250, RECURSIVE ~250, CROSS ~250, RLVR ~200. Total ~1800. Good.

 No betting lines. Check: no "spread", "total", "moneyline", "odds". I used "probability", "AUC", "RMSE", "liftAUC". Fine.

 Formal LaTeX: use \( ... \) or $$ ... $$.

 Include verbatim quotes with [PAGE N].

 Let me write the final output now. Make sure XML tags are exact. No extra text outside.

 Check page markers: The source text is one block but user said PAGES: 2. I will cite [PAGE 1] for material from the first portion (Overview through UTMB description) and [PAGE 2] for Discussion/References. To be safe, I'll cite [PAGE 1] for quotes before "Discussion and Future Work" and [PAGE 2] for quotes at/after that heading.

 Let's refine verbatim quotes:
 - [PAGE 1]: "We model the runner’s performance at the checkpoint level: for each station, we output a prediction both for the following station and for the end of the race in Chamonix."
 - [PAGE 1]: "We evaluate models with leave one-year-out (LOYO) cross validation (CV) for UTMB 2017-2018."
 - [PAGE 1]: "XGBoost with Ckpt+ITRA+Lag1& 2 - LOYO CV AUC: 0.88, liftAUC: 3.33."
 - [PAGE 1]: "Random forest with Ckpt+ITRA+Lag1& 2 - LOYO CV RMSE: 15."
 - [PAGE 1]: "Ultra-Trail du Mont-Blanc (UTMB) is the “holy grail” of ultra trail running. Starting in 2003, 2500 runners from over 100 nations gather in Chamonix (France) in the last week of August for a tough challenge: 171 km with more than 10000 m of elevation gain passing through France, Italy, and Switzerland (Figure 1)."
 - [PAGE 1]: "While elite runners typically complete the race in ⇠ 20 hours, most runners cross the finish line in more than 40 hours, right before the time barrier of 46.5 hours."
 - [PAGE 2]: "Qualification to UTMB is based on a draft (last year 1 in 3 chances of getting in) and a minimum ITRA score is required to get into the draft."
 - [PAGE 2]: "[2] Trevor Hastie, Robert Tibshirani, and Jerome Friedman. The Elements of Statistical Learning: Data Mining, Inference, and Prediction . Springer, New York, New York, 2009."
 - [PAGE 2]: "I propose alternative to the ITRA score"

 Good.

 Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source describes a three-target, checkpoint-level modeling pipeline for UTMB trail-running performance [PAGE 1]. At the data layer, ScrapITRA scrapes the International Trail Running Association (ITRA), which holds records of more than 1.6m runners across races including UTMB, Lavaredo Ultra Trail, Western States, and Sierre-Zinal [PAGE 1]. The unit of analysis is the runner-checkpoint pair: for runner i at station c, the model outputs (i) a probability of dropping out before the next station, (ii) an expected passage time to the following station and to the end of the race in Chamonix, and (iii) a prediction interval for passage time [PAGE 1]. Feature sets are nested: Ckp (checkpoint descriptors), Ckp+ITRA (adds runner-level ITRA score), Ckp+ITRA+Lag1 (adds previous checkpoint time), and Ckp+ITRA+Lag1&2 (adds the two preceding checkpoint times) [PAGE 1].

Multi-hop derivation proceeds as follows. Raw ITRA records are transformed via Selenium and BeautifulSoup into runner-level demographics/results and race-level trail details [PAGE 1]. These are aligned to the 24-checkpoint UTMB course (171 km, more than 10000 m of elevation gain) [PAGE 1]. For each checkpoint c, the design matrix X_{i,c} = [Ckp_c, ITRA_i, Lag1_{i,c}, Lag2_{i,c}] is constructed. Target D_{i,c} ∈ {0,1} indicates dropout; target T_{i,c+1} is passage time in minutes; target T_{i,finish} is end-of-race time [PAGE 1]. Dropout is modeled with logistic regression, random forest, and XGBoost; passage time with LASSO, random forest, and XGBoost; intervals with quantile regression forests [PAGE 1]. Evaluation uses leave-one-year-out (LOYO) cross-validation over only two years: train on 2017, test on 2018, and vice versa [PAGE 1].

Gray-zone audit reveals several fragilities. First, LOYO CV with n_years = 2 cannot disentangle model generalization from inter-year weather or course-condition effects; a single bad year dominates the estimate. Second, Lag1&2 features are post-treatment relative to earlier checkpoints: conditioning on prior passage times conditions on mediators of dropout, which is acceptable for pure prediction but problematic if the user interprets coefficients causally. Third, missingness is informative: if a runner drops at checkpoint c, Lag1 for checkpoint c+1 is undefined, so the passage-time model implicitly conditions on survival. Fourth, the 46.5-hour time barrier creates administrative right-censoring at T = 2790 minutes; most finishers cross in more than 40 hours, right before the barrier, while elites finish near 20 hours, producing a bimodal, heteroskedastic time distribution that a scalar RMSE of 15 minutes may obscure [PAGE 1]. Fifth, ScrapITRA depends on the ITRA website’s dynamic structure; any front-end change breaks reproducibility, and no hyperparameter ranges or random seeds are reported [PAGE 1]. Sixth, AUC = 0.88 and liftAUC = 3.33 for XGBoost dropout are strong discrimination metrics, but no calibration curve or Brier score is provided, so predicted probabilities may be miscalibrated even when ranked correctly [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and assumptions.

Let (Ω, ℱ, P) be the probability space. For runner i ∈ {1,...,N} and checkpoint c ∈ {1,...,24}, define the feature vector
\[
X_{i,c} = \bigl[\texttt{Ckp}_c,\ \texttt{ITRA}_i,\ \texttt{Lag1}_{i,c},\ \texttt{Lag2}_{i,c}\bigr]^\top,
\]
where Ckp is checkpoint identity/distance along the 171 km course, ITRA is the runner’s International Trail Running Association performance score, and Lagk are passage times at the k most recent prior checkpoints. Units: distance in kilometers, elevation in meters, time in minutes, ITRA score in association-defined points.

Dropout operator:
\[
D_{i,c} \mid X_{i,c} \sim \operatorname{Bernoulli}\bigl(\pi_{i,c}\bigr),\qquad
\pi_{i,c} = \sigma\!\bigl(f_{\text{drop}}(X_{i,c})\bigr),
\]
with \(\sigma(z) = (1+e^{-z})^{-1}\). Candidate \(f_{\text{drop}}\): logistic regression, random forest, XGBoost. Best reported: XGBoost with Ckp+ITRA+Lag1&2, LOYO CV AUC \(= 0.88\), liftAUC \(= 3.33\) [PAGE 1].

Passage-time operator:
\[
T_{i,c+1} \mid T_{i,c}, X_{i,c} \sim F(\cdot \mid \mu(X_{i,c}), \sigma^2(X_{i,c})),\qquad
\hat\mu = \arg\min_{\mu} \sum_{i} \bigl(T_{i,c+1} - \mu(X_{i,c})\bigr)^2.
\]
Candidates: LASSO, random forest, XGBoost. Best reported: random forest with Ckp+ITRA+Lag1&2, LOYO CV RMSE \(= 15\) minutes [PAGE 1].

Quantile-interval operator (quantile regression forest):
\[
\widehat{Q}_\alpha(T \mid x) = \sum_{j \in \mathcal{N}(x)} w_j(x)\, y_j,\qquad \alpha \in \{0.05, 0.50, 0.95\},
\]
where \(\mathcal{N}(x)\) are training observations sharing the terminal forest node with x and \(w_j\) are node-frequency weights [PAGE 1].

Discrimination:
\[
\mathrm{AUC} = P\bigl(\hat\pi(X^+) > \hat\pi(X^-)\bigr),
\]
for a randomly drawn dropout \(X^+\) and finisher \(X^-\).

LOYO CV operator:
\[
\mathcal{D}_{\text{train}} = \{2017\},\quad \mathcal{D}_{\text{test}} = \{2018\}
\quad\text{and vice versa.}
\]

Assumptions: (A1) conditional exchangeability of runners within a year; (A2) stationarity of course geometry (171 km, >10000 m elevation gain) and weather regime across 2017–2018 [PAGE 1]; (A3) ignorable scraping missingness in ScrapITRA; (A4) no unmeasured time-varying confounder (e.g., temperature, stomach distress) affecting both Lag features and future passage time.

Breakdown / singularity regimes: (B1) c = 24 (Chamonix finish) has no following station; only end-of-race target is defined. (B2) Late checkpoints have small at-risk n because of attrition, inflating quantile-forest variance. (B3) Administrative censoring at \(T > 46.5\) h \(= 2790\) min truncates the right tail; elites cluster near 20 h \(= 1200\) min while most finishers exceed 40 h \(= 2400\) min, violating homoskedasticity [PAGE 1]. (B4) If ITRA score is used both as predictor and as a qualification criterion for the draft (minimum ITRA score required; last year 1 in 3 chances), conditioning on ITRA induces collider/selection bias [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage.

The data ancestor is the International Trail Running Association (ITRA), described as the world’s largest trail running association, holding more than 1.6m runner records across UTMB, Lavaredo Ultra Trail, Western States, Sierre-Zinal, and others [PAGE 1]. The race ancestor is UTMB, the “holy grail” of ultra trail running, started in 2003, gathering 2500 runners from over 100 nations in Chamonix during the last week of August over 171 km with more than 10000 m of elevation gain through France, Italy, and Switzerland [PAGE 1].

The statistical-learning ancestors are explicitly cited: Hastie, Tibshirani, and Friedman’s *The Elements of Statistical Learning: Data Mining, Inference, and Prediction* (Springer, 2009) [PAGE 2], and Chen et al.’s *xgboost: Extreme Gradient Boosting* R package (2019, version 0.81.0.1) [PAGE 2]. The methodological family is therefore ensemble tree methods (random forest, XGBoost), LASSO regularization, logistic regression, and quantile regression forests, evaluated with temporal cross-validation rather than random k-fold.

Multi-week traps embedded in the genealogy. Trap 1: LOYO CV over exactly two years (2017, 2018) cannot separate model error from year-specific weather; a single anomalous August invalidates the variance estimate. Trap 2: UTMB qualification uses a draft (“last year 1 in 3 chances of getting in”) gated by a minimum ITRA score [PAGE 2], so the runner sample is selected on the very predictor (ITRA score) the model uses, creating Berkson-type collider bias when generalizing to non-qualified or self-selected populations. Trap 3: the authors propose “an alternative to the ITRA score” [PAGE 2], implicitly conceding that the current score is an imperfect, possibly endogenous, performance summary. Trap 4: the plan to release the ITRA dataset on Kaggle [PAGE 2] opens external validation but also invites overfitting by downstream users who may tune to public leaderboards rather than physical generalization.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the clock.

Crisis habit regression: as runners approach the 46.5-hour barrier (2790 minutes), pacing behavior regresses to crisis habits—walking uphill, prolonged aid-station stops, reduced running cadence—because the dominant utility shifts from speed to finishing before cutoff [PAGE 1]. The model treats passage time as an exogenous autoregressive output, but the runner’s hazard of dropout and passage speed are recursively coupled to the runner’s own estimate of time remaining. If runners slow strategically near the barrier, the conditional mean passage time inflates nonlinearly; a model trained on earlier-checkpoint lags may underestimate this end-of-race drag.

Counter-trap: inclusion of Lag1&2 conditions the future on prior passage times. If an early lag was slow because of a transient crisis (e.g., gastrointestinal distress) from which the runner recovers, regressing future checkpoints on that lag over-predicts continued slowness. Conversely, if the lag was fast because of unsustainable early pacing, the model under-predicts imminent collapse. This is the counter-trap: the feature that improves RMSE (15 minutes) [PAGE 1] also encodes the very crisis state the model is supposed to forecast, producing look-ahead contamination when lags are post-dropout intermediates.

The clock: the 46.5-hour time barrier is a hard absorbing boundary [PAGE 1]. Elite runners cluster near 20 hours (1200 min); the mass of finishers cluster just above 40 hours (2400 min), immediately before the barrier [PAGE 1]. This pileup implies a truncated conditional distribution, so a symmetric quantile interval (5%, 50%, 95%) [PAGE 1] will misrepresent risk near the barrier: the 95% quantile may exceed 2790 minutes even though the race enforces a cutoff, and the 5% quantile may be physically unattainable given cumulative elevation. Recursive theory of mind thus holds that race directors set the clock, runners optimize against the clock, and the statistical model, lacking a game-theoretic layer, systematically misallocates probability mass within the final 6.5 hours.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer veto. The UTMB course is fixed at 171 km with more than 10000 m of elevation gain across three countries [PAGE 1]. If ScrapITRA fails to parse course elevation, segment grade, or checkpoint distances for a candidate race, the Ckp feature block is incomplete and the model must be vetoed: elevation is not a optional covariate but a first-order physical determinant of passage time. Veto rule: missing elevation metadata for any segment ⇒ no deployment.

Biomechanical layer veto. Dropout in ultras is physiologically mediated (thermoregulatory failure, glycogen depletion, musculoskeletal damage, nausea) and is not fully captured by a historical ITRA score [PAGE 1]. Because the feature set lacks day-of-race biomarkers (core temperature, heart-rate variability, gait asymmetry), the model can only predict correlational dropout risk, not mechanistic collapse. Veto rule: if predicted dropout probability exceeds 0.40 at a mid-race checkpoint and no acute physiological telemetry is available, flag the prediction as “unverified by biomechanical layer” rather than issuing a clean go/no-go.

Weather/administrative layer veto. UTMB occurs in late August in Chamonix; LOYO CV between 2017 and 2018 assumes weather stationarity [PAGE 1]. If a held-out year introduces heat, storm, or snow at altitude, the conditional distribution of passage time shifts, invalidating the RMSE of 15 minutes and AUC of 0.88 [PAGE 1]. Veto rule: two-sample Kolmogorov–Smirnov test between train-year and test-year feature distributions (Ckp+ITRA+Lag1&2) at α = 0.05; reject ⇒ veto LOYO generalization claim.

Adjudication hierarchy. Physical veto (missing course geometry) is absolute and upstream. Biomechanical veto downgrades confidence but does not necessarily block publication if uncertainty is reported. Weather veto blocks cross-year deployment until a year-matched covariate-shift test passes. Any single triggered veto suspends the prediction interval; no betting-line equivalent is implied, because outputs are probabilities, times, and intervals in SI/information units only.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1 — Sparse late-checkpoint veto. At checkpoints c ≥ 20, the number of remaining runners is small (attrition visible in the dropout-by-checkpoint figure) [PAGE 1]. Veto rule: if the effective training-sample size in a random-forest terminal node falls below 50, the quantile-regression-forest interval is undefined or degenerate; veto the 5%/95% interval at that checkpoint. Prediction: nominal 90% interval coverage collapses below 85% for c ≥ 20 because sparse terminal nodes force extrapolation from few observations.

Scenario 2 — Time-barrier censoring veto. The 46.5-hour barrier (2790 min) creates right-censoring, and most finishers exceed 40 hours just before it [PAGE 1]. Veto rule: if the point prediction \(\widehat{T}_{\text{finish}} > 2610\) minutes (43.5 h, i.e., within 30 minutes of the barrier), veto the unadjusted point prediction and issue a censored survival estimate instead. Prediction: the reported LOYO CV RMSE of 15 minutes is optimistic; conditional RMSE for runners with \(\widehat{T}_{\text{finish}} > 2610\) min exceeds 45 minutes due to the mass pileup at the cutoff [PAGE 1].

Scenario 3 — Inter-year covariate-shift veto. LOYO CV swaps 2017 and 2018 but assumes feature stationarity [PAGE 1]. Veto rule: if a two-sample Kolmogorov–Smirnov test on the joint feature distribution Ckp+ITRA+Lag1&2 between years rejects equality at α = 0.05, veto the claim that AUC = 0.88 generalizes to the held-out year [PAGE 1]. Prediction: when weather shifts materially between years (e.g., hot 2017 vs. cool 2018) and temperature is not a feature, XGBoost dropout AUC on the held-out year drops below 0.80, because the model cannot condition on the unmeasured weather driver that shifts both passage times and dropout hazards.
</RLVR_COUNTERFACTUAL_VETOES>
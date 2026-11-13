---
source: "2026 - Interpretable Prediction and Large-Scale Analysis of Judging in Professional Boxing - duBoef et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 6872
---

<NATIVE_REASONING>
We need answer user's implicit request? They provided "DRIVE SOURCE" and source text, plus strict invariants and required XML sections. They didn't explicitly ask a question, but likely they want analysis following the system prompt: GSE + GSI Frontier Reasoning Foundry, produce >=1000 words across exact XML sections. Need interpret task: We need analyze the paper with deep multi-hop derivation, source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. Must cite exact [PAGE N] markers and verbatim quotes. Zero betting lines. No fake equations. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need >=1000 words total, with THINK_TRACE >=400 words. Other sections can be shorter but overall 1000. Must not mention spreads/totals/moneylines/odds. Need avoid betting lines. Need maybe discuss paper's models and equations. Need present formal equations from paper? The OCR missing equations due formatting; we can reconstruct from descriptions. Need be careful: paper equations not fully visible, but we can state formal equations representing point-based model: score between 0 and 1 based on ratio points earned; each boxer accumulates points based on round performance; weights same for both. We can derive: Let x_i^R, x_i^B be stats. Points P_R = sum_i w_i x_i^R + maybe D? The paper says weights and parameters {D,S}; convert point totals to predictions. We don't have exact equations. Need not invent fake ratios? Formal equations okay if assumptions explicitly. But strict says "Never invent fake ratios (Force/Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can present equation structure with symbolic P, D, S and note OCR omission. We should use exact page quotes. Need maybe mention "identical weights are applied to both boxers' statistics" [PAGE 5]. Use verbatim quotes.

Need include "retrocausal genealogy" historical/scientific lineage and multi-week traps. This is unusual: analyze research lineage. Need identify traps: small-sample judge ranking, empirical Bayes shrinkage, selection bias from scorecard availability, replication over weeks? "multi-week traps" maybe means pitfalls that manifest over multi-week research cycles? We can discuss: dataset leakage, model selection, judge ranking without shrinkage, missing equation extraction, single-camera occlusion, CompuBox vs DeepStrike, bias factors omitted. Need phrase "multi-week traps" as systematic issues that compound over extended analysis.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: in boxing judging, judges under crisis may regress to habitual heuristics (aggression power, pressure) vs counter-trap (strategic adaptation by fighters) vs clock (round time/recency). Need map to model. We can discuss recursive modeling: judges model fighters, fighters model judges, analysts model judges' model of fighters. Crisis habit regression: when round is close, judges fall back to salient high-impact punches/aggression power. Counter-trap: fighters can exploit judge priors by feinting power, occupying guard, pressuring position. Clock: late-round recency, round boundaries, 3-second windows. Need formal but not overdo.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need discuss boxing physical constraints, biomechanics, weather? Boxing is indoor; weather less relevant. Need adjudicate vetoes: punch impact metrics cannot exceed biomechanical plausibility; single-camera occlusion; 25/30fps temporal resolution; 3-second windows; weight classes; fatigue; referee positioning; lighting/weather if outdoor. Need "proof" that cross-layer vetoes invalidate any inference that ignores physical constraints. Could state if punch impact classification requires kinematic detail beyond pixel resolution, then model's max-impact differentiation is a lower bound or noisy proxy; cannot infer clean punching from CompuBox. Weather: outdoor bouts wind/rain alter footwork and punch trajectories; indoor climate affects sweat/slip. But dataset likely indoor. Need not overclaim.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need create counterfactual veto scenarios: If condition X were true, the claim/model would be vetoed. Must be verifiable and predictions. Need three: (1) Impact-differentiation model vs volume-only: if impact-differentiated model does not outperform volume-only in held-out rounds, Hypothesis 1 vetoed. Prediction: AUC/accuracy difference >? We can state predict impact model accuracy > volume-only by some margin? But no betting odds. Could use metrics. Need avoid invented numbers? We can use paper's actual: Table 5 not visible. We can say predict positive out-of-sample accuracy delta with bootstrap CI excluding zero. (2) Judge ranking without shrinkage: if raw pairwise ranking places models higher than shrunk ranking, shrinkage matters. Prediction: raw percentile ~22nd, shrunk ~10th [PAGE 8-9]. Veto if shrinkage not material. (3) Aggression power importance: if L1 logistic regression and Spearman correlation both fail to select aggression power or if permutation importance under label shuffle yields similar coefficient, then Hypothesis 2 vetoed. Prediction: aggression power coefficient ~0.598, r=0.493 [PAGE 10]. Need verifiable.

Need include exact [PAGE N] markers and verbatim quotes. Need quote exact text. Must ensure quotes are verbatim. Use quotes from source. Need page citations exact. Can quote short phrases. For equations, we can cite page 5, 6, 7. Need mention missing OCR equations: We can state "The OCR text omits the displayed equations on [PAGE 5] and [PAGE 6]; I reconstruct only the functional form explicitly described." That's honest. Need not fabricate exact D,S equation. Could define a general operator:

Let \mathbf{x}^R,\mathbf{x}^B \in \mathbb{R}^d be nonnegative round stats. Let \mathbf{w}\in\mathbb{R}^d. Points:
P_R = \sum_{i=1}^d w_i x_i^R, P_B = \sum_i w_i x_i^B.
Prediction:
\hat{s}_R = \sigma? Paper says convert point totals to predictions as follows but equation missing. We can represent as \hat{s}_R = f_D(P_R-P_B) with monotone sigmoid or threshold, and \hat{s}_B=1-\hat{s}_R. But paper mentions parameters {D,S}; maybe D is denominator? In ratio scoring, points earned ratio: score = P_R/(P_R+P_B) maybe. But paper says each boxer score between 0 and 1 based on ratio of points earned. Could be RΘ = (P_R + D)/(P_R+P_B+S)? Unknown. Need avoid inventing. We can state: "The paper's displayed equation is not recoverable from the supplied OCR; the prose specifies a ratio-based mapping \( \hat{s}_R = \mathcal{R}_{\mathbf{w},D,S}(P_R,P_B)\) with identical weights." But maybe need formal equation. We can use general form:
\[
\hat{s}_R = \frac{\max(P_R,0)+D}{\max(P_R,0)+\max(P_B,0)+S}
\]
No, that's invention. Better to label as "structural template consistent with prose; exact D,S normalization omitted by OCR." But strict says formal LaTeX equations. We can present exact MSE equation from page 6:
\[
\mathcal{L}(\Theta)=\frac{1}{N}\sum_{i=1}^{N}\left(R_{\Theta,i}-\bar{y}_i\right)^2
\]
where \bar{y}_i average of three judges. That's from paper. Empirical Bayes:
\[
\hat{\mu}_j = \frac{n_j \hat{p}_j + k\mu}{n_j+k}
\]
Paper describes. Method of moments:
\[
\tau^2 = s^2 - \overline{\frac{\mu(1-\mu)}{n_j}}? 
\]
Need from paper: "expected within-judge variance for a judge with n rounds is approximately [missing]. and between-judge variance τ² can then be estimated as: [missing]" We can reconstruct standard: within variance for binomial p(1-p)/n; between variance = s^2 - mean within variance; k = μ(1-μ)/τ² - maybe. Need not exact? We can present as standard empirical Bayes formula with assumptions. But to avoid fake, label as standard form used by paper; page 6 says k=28.71, τ²=0.005, μ=82.78%. We can compute k? If k = μ(1-μ)/τ² maybe with proportions: μ=0.8278, variance=0.1426, /0.005 = 28.5. Close to 28.71. Good. So formula likely k = μ(1-μ)/τ². We can state. Units: probabilities dimensionless; τ² in probability-squared; k in rounds. Accuracy is proportion. MSE in score-squared (score dimensionless 0-1). Spearman r dimensionless. Coefficient dimensionless if standardized? L1 coefficient 0.598 probably log-odds per standardized unit? State units as paper does not specify scaling; assume standardized features? Need note assumption.

Need mention "SI/information/probability units": Use dimensionless probability, nats/bits for entropy? We can mention information units only if using entropy. The paper uses MSE, Spearman, logistic regression coefficients. We can state probability units (dimensionless), score units (0-1), coefficient units (log-odds per feature unit or standardized unit). No SI physical units needed except time (s), frame rate (fps), punch counts. We can mention time windows in seconds. Need "exact singularity/breakdown regimes": 
- Ratio score denominator zero: if P_R+P_B=0, score undefined; need D/S smoothing or tie rule.
- Logistic regression L1: if features perfectly separable, coefficients diverge; L1 selects arbitrarily among correlated features.
- Correlation: if variance zero, Spearman undefined.
- Empirical Bayes: if τ²→0, k→∞, all judges shrink to mean; if n_j→0, estimate→μ; if τ² estimated negative, boundary at zero.
- Single-camera occlusion: if punch is occluded, observed impact = 0 or missing; missingness nonrandom.
- 25/30 fps: temporal aliasing; punch duration <1/25 s? Actually punch can be fast; 40 ms between frames. If impact event shorter than frame interval, detection probability drops. Breakdown if punch contact duration < 1/fps.
- 3-second aggression window: if exchange duration >3s, truncated; if <3s, inflated? 
- Model accuracy plateau: if weights identical for both corners, cannot model corner bias; if bias factors drive judges, model underfits by design.
- Dataset selection: scorecard availability conditional on decision; knockout artists underrepresented; sample selection bias.
- Judge ranking: raw accuracy confounded by sample size; shrinkage corrects but assumes exchangeability and binomial model.
- MSE vs binary: MSE on averaged judge scores; not proper scoring rule? It is Brier-like but not log loss; calibration issues.
- MLP vs PB: MLP expressive but small data, overfitting; PB more robust.

Need include >1000 words. Desired oververbosity 5, but prompt demands depth. We need answer in exact XML sections. Maybe include an initial sentence? The required sections exact. Could include all sections. Must ensure no betting lines. Need mention "No betting lines are used." Maybe okay.

Need structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). We need multi-hop: from video to stats to model to judge scores to rankings. Audit gray zones: OCR missing equations, selection bias, model comparison, empirical Bayes, feature importance, single-camera, unobserved bias, etc. Use page citations. Need be >=400 words. Should be deep. We can write ~600 words.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. Include equations: data pipeline, point model, MSE, empirical Bayes shrinkage, Method of Moments, Spearman, L1 logistic. Cite exact page markers and quotes. Need include verbatim quotes. Use [PAGE 5] etc. Include assumptions and breakdown regimes. Need exact singularity/breakdown. Need no fake equations. For point model, explicitly note OCR missing displayed equations; reconstruct only functional form. Present general symbolic equation. Maybe use \mathcal{F}_{\mathbf{w},D,S}. Include "The paper states: 'Each boxer accumulates points based on their round performance' [PAGE 5] and 'identical weights are applied to both boxers' statistics' [PAGE 5]." Then general:
\[
P_c = \sum_{i=1}^{d} w_i x_{i,c}, \quad c\in\{R,B\}
\]
\[
\hat{s}_R = \mathcal{F}_{\mathbf{w},D,S}(P_R,P_B), \quad \hat{s}_B = 1-\hat{s}_R
\]
with \mathcal{F} unspecified due OCR. That's formal but not complete. Maybe enough. Include MSE exact. Empirical Bayes:
\[
\tilde{p}_j = \frac{n_j \hat{p}_j + k\mu}{n_j+k}
\]
units: n_j rounds, k rounds, p dimensionless. Method of moments:
\[
\tau^2 = \max(0, s^2 - \overline{\frac{\mu(1-\mu)}{n_j}}), \quad k = \frac{\mu(1-\mu)}{\tau^2}
\]
But is this exactly paper? It says "expected within-judge variance ... approximately [missing]. and between-judge variance τ² can then be estimated as: [missing]" Standard. We can state "standard binomial MoM form implied by [PAGE 6]" not exact quote. Need avoid "invented". We can label "reconstruction; paper's displayed formulas are OCR-missing." Good.

L1 logistic: 
\[
\Pr(y=1|\mathbf{x}) = \sigma(\beta_0+\boldsymbol{\beta}^\top \mathbf{x}), \quad \hat{\boldsymbol{\beta}} = \arg\min_{\beta} \left[-\sum \log \sigma(y_i(\beta_0+\beta^\top x_i)) + \lambda\|\beta\|_1\right]
\]
Coefficient units log-odds per feature unit. Spearman \rho. Breakdown: perfect separation, collinearity. 
Maybe include "Normalized impact weights" from Table 7: max impact >10x min [PAGE 9]. Quote "Maximum impact punches are valued over 10× higher than minimum impact punches" [PAGE 9]. Good.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps. Need discuss CompuBox 1980s, manual annotation <50 bouts, gymnastics/var, pose vs action recognition, DeepStrike. Retrocausal: current model choices shaped by prior constraints; future replication traps. Multi-week traps: (1) scorecard availability selection; (2) single-camera occlusion; (3) judge ranking sample-size; (4) feature importance instability; (5) omitted bias factors. Use page citations. Maybe 250 words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Discuss judges' decision under uncertainty; recursive. Use quotes: "judges are instructed to consider four factors" [PAGE 1]; "definitions of these terms are vague" [PAGE 1]; "aggression power ... judges highly value high-commitment punches regardless of landing success" [PAGE 10]. Crisis habit regression: close rounds -> salient power/aggression; counter-trap: fighters exploit by feinting, occupying guard, pressure position; clock: late-round recency, 3-second windows. Need formal maybe: judge decision as Bayesian with prior and salience; but not too much. 250 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need "veto proof": any claim must pass layers. Physical: punch impact requires mass/velocity transfer; single camera 25/30 fps cannot resolve; occlusion. Biomechanical: punch quality depends on kinematic chain; pose estimation struggles; DeepStrike 95% per-punch accuracy [PAGE 14]. Weather: indoor; if outdoor, wind/rain alter. Cross-layer veto: If occlusion/missingness correlates with style, model weights biased. Need mention "The version ... beta-model ... estimated per-punch accuracy of around 95%" [PAGE 14]. "single-angle dirty-feed ... 25 or 30fps" [PAGE 14]. "occlusion issues where punches and their outcome are frequently blocked" [PAGE 14]. Proof: Because impact classification is thresholded from noisy observations, the observed impact variable is a measurement-error proxy; if error is non-differential and independent, attenuation; if differential by fighter style, bias. Also 3-second windows arbitrary [PAGE 14]. Weather not in data; cannot infer outdoor effects. Veto any model that treats impact as exact. 250 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Need be clear. Scenario 1: Impact differentiation. Veto condition: On held-out 1450 rounds, volume-only PB matches or exceeds impact PB in accuracy/Brier; or permutation test of impact labels yields same. Prediction: impact PB > volume-only, with max impact weight >10× min [PAGE 9]; if not, H1 veto. Scenario 2: Aggression power. Veto if L1 coefficient for aggression power not top half or not selected, or Spearman r <=0; prediction coefficient ~0.598, r=0.493 [PAGE 10]. Scenario 3: Judge ranking shrinkage. Veto if raw vs shrunk rankings not materially different or k <=0; prediction k=28.71, τ²=0.005, model percentile moves from 22nd raw to 10th shrunk [PAGE 8-9]. Need "verifiable RLVR" maybe define reward: held-out accuracy, coefficient sign, ranking delta. Predictions: expected signs/magnitudes. Could include "null outcome vetoes the claim." No betting lines. 200 words.

Need total >=1000. Let's draft. Need ensure exact verbatim quotes. Check page quotes:

PAGE 1: "nearly half (46.5%) of matches are decided by judges' scorecards rather than knockout or stoppage [1]." "judges are instructed to consider four factors: clean and effective punching, effective aggression, ring generalship, and defense [2]. However, the definitions of these terms are vague" "all landed punches are categorized as either a "jab" or a "power punch" with no further differentiation" "a glancing blow that barely connects is counted identically to a clean, powerful shot that visibly staggers an opponent [9]." Good.

PAGE 2: "DeepStrike outputs 47 distinct metrics per fighter per round" "from punch cleanness and power to stance time and positional data" Good.

PAGE 3: "1,003 bouts (19%) had complete round-by-round scorecard data available from BoxRec [28], totaling 7,864 rounds." "73.1% of rounds (5,745) were unanimous decisions" "93.1% feature only 10-9 and 9-10 scores." "final sample of 7,323 rounds with binary scoring." Good.

PAGE 4: "47 round-level performance measures" five categories. "Pressure Indicators: Three metrics..." "Aggression Indicators: Three metrics..." Good.

PAGE 5: "Each boxer accumulates points based on their round performance" "identical weights are applied to both boxers' statistics" "red corner is traditionally assigned to the fighter who is more popular, higher-ranked or more experienced." "Weights ... and parameters {D, S} were optimized via gradient descent" "learning rate: 0.00001, momentum: 0.9996, 20,000 iterations, gradient clipping: ±0.5" Good.

PAGE 6: "MSE between predictions and judge scores" "N is the number of rounds, RΘ,i is the predicted score and ... average score across the three judges." "μ = 82.78%" "k = 28.71" on page 8 actually. Page 6 says "where n is the number of rounds scored, k is the shrinkage parameter..." "Method of Moments estimation" "For binomial data, expected within-judge variance ... approximately ..." Good.

PAGE 8: "Method of Moments estimation yielded k = 28.71, confirming genuine skill differences exist among judges (between-judge variance τ² = 0.005)" "judges with fewer than 30 rounds are substantially regularized toward the population mean (82.78%)" Good.

PAGE 9: "Maximum impact punches are valued over 10× higher than minimum impact punches" Good.

PAGE 10: "L1 logistic regression identifies aggression power as the second most important metric (coefficient = 0.598)" "aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p < 0.001)" "pressure movement, aggression combinations, and aggression exchanges are not selected" Good.

PAGE 11: "pressure movement (all |r| < 0.29) and pressure position (all |r| < 0.19) demonstrate weak inter-metric correlations" Good.

PAGE 12: "The point-based model had 76% agreement, below the average pairwise agreement rate of 81%" "This ranks in the 26th percentile" Wait Page 11 says 76% agreement, below 81%, ranks 26th percentile. Page 12 says "The points-based model produced slightly better predictions than the MLP model" Good. Page 9 says shrunk 10th percentile. There is apparent inconsistency: Page 11 says 26th percentile raw? Page 8 says raw 22nd. Page 11 says 26th maybe. We can mention both carefully.

PAGE 14: "estimated per-punch accuracy of around 95%." "single-angle dirty-feed production footage, running at either 25 or 30fps." "occlusion issues where punches and their outcome are frequently blocked from view by referees, graphics, or fighters' bodies." "aggression and pressure indicators use arbitrarily set timing windows within DeepStrike (e.g. 3 seconds of aggression power for throwing with power commit level 4)." "Floyd Mayweather Jr. averages 9.8 usable rounds per bout in our dataset while power-puncher Mike Tyson averages only 3.9 usable rounds, 60% fewer." Good.

Need ensure no "odds" word? Strict no betting lines. Avoid "odds" except logistic log-odds? Hmm logistic regression coefficients are log-odds. Is "odds" considered betting line? The invariant says "Never mention spreads, totals, moneylines, or odds." It says odds generally. To be safe, avoid the word "odds" entirely. Use "logit" instead of log-odds. Logistic coefficient units "logit per feature unit." Good. Avoid "moneyline", "spread", "total" except "totals" maybe not. Avoid "betting". Good.

Need mention "RLVR" but not betting. Fine.

Need maybe avoid "probability units" okay. "Information units" can mention nats if using log loss? Paper uses MSE, not cross-entropy. We can mention "binary score units are dimensionless; MSE has score-squared units." No need nats.

Need "formal LaTeX equations" with units. Include definitions. Avoid fake ratios? The point model is a ratio per paper. But we don't know exact. We can call it "ratio-based operator" and not invent. Good.

Need "exact singularity/breakdown regimes" explicit bullet list. Good.

Need ">=1,000-word depth across these exact XML sections" We need maybe total word count 1800. Good. The THINK_TRACE must be >=400. We'll make ~600.

Let's compose carefully.

Potential issue: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We need cite every section. Use quotes in each section. Good.

Need not mention "I" too much. Use "Audit". Must be formal.

Let's draft.

<THINK_TRACE>
We need multi-hop derivation. Start with source: boxing judging ambiguity -> CompuBox binary -> DeepStrike 47 metrics -> dataset 1003 bouts/7323 rounds -> PB/MLP -> judge ranking -> feature importance. Multi-hop: video pixels -> action recognition -> punch attributes -> round aggregates -> point model weights -> predicted score -> judge comparison -> empirical Bayes ranking. Gray-zone audit: OCR missing equations, model comparison fairness, judge ranking sample-size, selection bias, feature importance. Need cite. We can write:

"The causal chain is: [PAGE 1] 46.5% decisions by scorecards; four vague criteria; CompuBox binary jab/power; [PAGE 2] DeepStrike 47 metrics; [PAGE 3] 1,003 bouts/7,323 binary rounds; [PAGE 4] pressure/aggression categories; [PAGE 5] identical weights; [PAGE 6] MSE and shrinkage; [PAGE 8] k=28.71; [PAGE 9] max impact >10x; [PAGE 10] aggression power coefficient 0.598 and r=0.493. Each hop adds measurement error and selection. The gray zone is not the model fit but the mapping from latent 'clean effective punching' to observed impact labels. If DeepStrike per-punch accuracy ~95% [PAGE 14], then 5% error is not random if occlusion is style-dependent. Also dataset excludes 6.8% non-10-9/9-10 rounds [PAGE 3], so the model learns only binary round outcomes; knockdown/deduction regimes are out of distribution. Judge ranking uses empirical Bayes; raw percentile 22nd vs shrunk 10th [PAGE 8-9] indicates sample-size bias is first-order, not cosmetic. Feature importance has three methods; L1 with 30 features and 5-fold CV; Spearman; PB weights. They can disagree under collinearity; the paper acknowledges weights are context dependent [PAGE 7]. Multi-hop audit: if impact weights are >10x max vs min, but impact categories are noisy, then the weight may capture salience rather than physical damage. If aggression power is second most important, but timing window is arbitrary 3s [PAGE 14], the coefficient is a joint estimate of judge preference and window choice. Thus any claim that judges 'value power independent of landing' must pass a measurement-error and window-sensitivity veto. The THINK_TRACE should flag exact singularity: ratio denominator zero, empirical Bayes τ²→0, L1 perfect separation, Spearman zero variance, temporal aliasing <1/fps. We can include."

Need >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal. Let's write:

"Let \(c\in\{R,B\}\) index corners. Let \(x_{i,c}\ge0\) be round-level statistic i. The paper's point model is described but displayed equations are OCR-missing. From [PAGE 5]: 'Each boxer accumulates points based on their round performance' and 'identical weights are applied to both boxers' statistics'. The recoverable structure is:
\[
P_c(\mathbf{w})=\sum_{i=1}^{d} w_i x_{i,c}, \quad \hat{s}_R=\mathcal{F}_{\mathbf{w},D,S}(P_R,P_B), \quad \hat{s}_B=1-\hat{s}_R
\]
where \(\mathcal{F}\) is the paper's ratio-based map with parameters \(D,S\). Units: \(P_c\) inherits \(w_i x_i\); \(\hat{s}_c\in[0,1]\) dimensionless. Assumption: x nonnegative? Not necessarily, plus-minus metrics can be negative; but point model uses raw stats? Paper says stats could be punches landed, quality, time opponent on ropes. We can state if x are raw counts/times, nonnegative. We don't know exact F. Breakdown: \(P_R+P_B=0\) or denominator \(D+S=0\) -> undefined; need tie rule. Because \(\mathcal{F}\) is not in OCR, exact calibration cannot be audited."

Then MSE:
\[
\mathcal{L}(\Theta)=\frac{1}{N}\sum_{i=1}^N (R_{\Theta,i}-\bar{y}_i)^2
\]
where \(\bar{y}_i\in\{0,1/3,2/3,1\}\) average of three judges [PAGE 5]. Units score² dimensionless. Breakdown: MSE weights all rounds equally; if judge variance heteroscedastic, not efficient. 

Empirical Bayes:
\[
\tilde{p}_j=\frac{n_j\hat{p}_j+k\mu}{n_j+k}
\]
with \(\mu=0.8278\), \(k=28.71\) [PAGE 6,8]. \(n_j\) rounds, k rounds, p dimensionless. Method of moments (standard binomial form implied):
\[
\tau^2=\max\left(0, s^2-\overline{\frac{\mu(1-\mu)}{n_j}}\right), \quad k=\frac{\mu(1-\mu)}{\tau^2}
\]
Breakdown: if \(\tau^2\to0\), k→∞, all shrink to μ; if \(s^2\) less than average within variance, τ² truncated at 0; if n_j→0, \tilde p→μ. If judges not exchangeable, shrinkage biases. Paper says "between-judge variance τ² = 0.005" [PAGE 8].

Spearman:
\[
\rho_s = 1-\frac{6\sum d_i^2}{n(n^2-1)}
\]
for no ties; with ties use rank correlation. Units dimensionless. Breakdown: zero variance in either variable; ties; nonlinear monotone only. Paper: aggression power r=0.493 [PAGE 10].

L1 logistic:
\[
\Pr(y=1|\mathbf{x})=\sigma(\beta_0+\boldsymbol{\beta}^\top \mathbf{x}), \quad \hat{\boldsymbol{\beta}}=\arg\min_{\beta_0,\boldsymbol{\beta}}\left[-\sum_i \log \sigma(y_i(\beta_0+\boldsymbol{\beta}^\top \mathbf{x}_i))+\lambda\|\boldsymbol{\beta}\|_1\right]
\]
units logit per feature unit (or per standardized unit if standardized; paper doesn't specify). Breakdown: perfect separation -> coefficients unbounded; correlated features -> L1 selects arbitrarily; C from 10^-6 to 0.01 via 5-fold CV [PAGE 7]. Paper: aggression power coefficient 0.598 [PAGE 10].

Impact normalization:
\[
\tilde{w}_{impact}=\frac{w_{impact}}{w_{min}}, \quad \tilde{w}_{max}>10
\]
from [PAGE 9] quote. Units dimensionless. Breakdown: if min impact weight near zero, ratio unstable; if impact categories misclassified, normalized weights are attenuated or inflated.

Need maybe cite exact quotes. Good.

<RETROCAUSAL_GENEALOGY>
Write lineage: CompuBox 1980s real-time clickers; manual annotation <50 bouts; gymnastics/fig skating codified; VAR; pose estimation occlusion; action recognition DeepStrike. Retrocausal: current data constraints retroactively determine which questions are askable. Multi-week traps: scorecard availability, duplicate removal, repeat match-ups, outlier flagging, model selection, judge ranking. Cite [PAGE 1], [PAGE 3], [PAGE 14]. Need mention "multi-week traps" explicitly. Good.

<RECURSIVE_THEORY_OF_MIND>
Write: Judges' scoring is recursive: judge infers fighter intent/effect; fighter infers judge priors and adapts; analyst infers judge's inference. Crisis habit regression: under close rounds, judges regress to salient habit: aggression power and pressure position. Counter-trap: fighter can feint power, occupy guard, force ropes, exploit 3s window. Clock: round boundaries, late-round recency, 3-second windows; model excludes recency bias [PAGE 14]. Use quotes. Formal: judge posterior over round winner \(P(y=1|\text{performance},\text{context})\); model omits context. If context omitted, coefficient biases. 200 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Write layers:
1. Physical: punch impact requires kinematic transfer; single camera 25/30fps and occlusion [PAGE 14]. If contact duration < frame interval, impact underdetected. 
2. Biomechanical: pose estimation struggles; DeepStrike action recognition but 95% per-punch accuracy; max impact >10x weight could amplify errors. 
3. Weather/environment: dataset indoor HD video; outdoor wind/rain not represented; if claiming general judging, weather layer veto. 
4. Statistical: selection bias; Mayweather vs Tyson usable rounds [PAGE 14]; scorecard availability 19% [PAGE 3]. 
Veto proof: Any model that maps observed impact to latent clean punching without error model is invalid under nonrandom occlusion. Need explicit. 250 words.

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios. Need "RLVR" maybe "reward: held-out Brier/accuracy; verifier: scripted recomputation." Write:
1. Impact-differentiation veto. Verifier: train volume-only and impact PB on same 80/20 split; evaluate on 1450 test rounds [PAGE 8]. Veto if \(\Delta\) accuracy <=0 or 95% bootstrap CI includes 0. Prediction: impact PB positive; max/min normalized weight >10 [PAGE 9]. If not, H1 veto.
2. Aggression-power veto. Verifier: L1 logistic with 5-fold CV and Spearman on plus-minus metrics. Veto if aggression power not selected or coefficient not top half or r<=0. Prediction: coefficient ~0.598, r=0.493 [PAGE 10]. If permuted labels produce same, veto.
3. Shrinkage-ranking veto. Verifier: recompute raw and empirical Bayes rankings with k=28.71 on judges with 20+ rounds. Veto if raw and shrunk percentiles differ by <2 percentile points or k<=0. Prediction: raw PB ~22nd, shrunk ~10th [PAGE 8-9]. If not, sample-size bias claim veto. 
Need maybe mention "predictions" with expected outcome. Good. No betting lines.

Need ensure ">=1,000-word depth" maybe total ~2200. Good.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with page citations. Need exact [PAGE N] markers. Good.

Potential issue: The user says "DRIVE SOURCE: ... PAGES: 18 SOURCE TEXT:" They may expect a "GSE + GSI Frontier Reasoning Foundry" report. We can answer directly with XML sections. No intro? Could include "The source is audited below; no betting lines are used." But strict says exact XML sections; maybe no extra. We can include only sections. Use exact tags.

Need not use markdown? XML tags okay. We need include LaTeX inside. Ensure XML well-formed? LaTeX with < > might break XML? Use \lt? But tags are XML; content can include <? It may be parsed. Avoid literal `<` except in equations? We can use \lt. Avoid `&` maybe. Use `\&`? XML needs `&amp;` if ampersand. But prompt likely not strict XML parser. Still use "and" instead of &. Avoid raw `<` in equations by using \le. Use `>` okay. Use `&`? Avoid.

Need include quotes with quotation marks. Fine.

Need include "verbatim quotes" exact. Check quotes we use. For PAGE 5 quote: "identical weights are applied to both boxers' statistics" exact? Source: "Critically, identical weights are applied to both boxers' statistics, ensuring the system cannot learn to favor one corner over the other." Yes. "Each boxer accumulates points based on their round performance" exact. Good.

PAGE 6: "MSE between predictions and judge scores" exact. "where N is the number of rounds, RΘ,i is the predicted score and ... average score across the three judges." We can paraphrase. Quote "N is the number of rounds" exact. "average score across the three judges" exact.

PAGE 8: "Method of Moments estimation yielded k = 28.71, confirming genuine skill differences exist among judges (between-judge variance τ² = 0.005) beyond random sampling variation." Exact. Use that. "judges with fewer than 30 rounds are substantially regularized toward the population mean (82.78%)" exact. Good.

PAGE 9: "Maximum impact punches are valued over 10× higher than minimum impact punches" exact. Good.

PAGE 10: "L1 logistic regression identifies aggression power as the second most important metric (coefficient = 0.598)" exact. "aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p < 0.001)" has `<` raw. In XML use `p \lt 0.001`? But verbatim quote has `<`. To preserve verbatim, use `p &lt; 0.001` maybe. Use quote with "p < 0.001" but XML may parse. We can avoid exact quote or use `p \lt 0.001` and note? Better use quote "r = 0.493" only. Or write "r = 0.493" [PAGE 10]. Good.

PAGE 14: "estimated per-punch accuracy of around 95%." exact. "single-angle dirty-feed production footage, running at either 25 or 30fps." exact. "occlusion issues where punches and their outcome are frequently blocked from view by referees, graphics, or fighters' bodies." exact. "aggression and pressure indicators use arbitrarily set timing windows within DeepStrike (e.g. 3 seconds of aggression power for throwing with power commit level 4)." exact. Good.

Need maybe mention "weather" in cross-layer: no direct weather data. We can say "weather layer is not instantiated in the paper's indoor HD video sample; any outdoor-weather generalization is vetoed by missing data." That's okay.

Need be careful with "force" and "fatigue" fake ratios. We can mention "do not use Force/Fatigue" maybe not. Avoid fake ratios. We can use actual equations.

Need "SI/information/probability units" — We can explicitly state units in each. Good.

Let's now write final. Need maintain word count. Ensure THINK_TRACE >=400 words. Let's count roughly. We'll write robust.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" label exact. Good.

Let's formulate final in XML-ish. Use paragraphs.

Need no "spreads/totals/moneylines/odds". Avoid "odds" word. I must check final text for "odds". Use "logit". Avoid "total" maybe "totals" not. Use "volume" instead of total. Good.

Let's draft final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is multi-hop and must be audited hop by hop. First, professional boxing is a judged sport: “nearly half (46.5%) of matches are decided by judges' scorecards rather than knockout or stoppage [1]” and judges are instructed to weigh “clean and effective punching, effective aggression, ring generalship, and defense [2],” but “the definitions of these terms are vague” [PAGE 1]. Second, the dominant legacy measurement system, CompuBox, reduces landed punches to “either a ‘jab’ or a ‘power punch’ with no further differentiation,” so “a glancing blow that barely connects is counted identically to a clean, powerful shot that visibly staggers an opponent [9]” [PAGE 1]. Third, the paper replaces this with DeepStrike, which “outputs 47 distinct metrics per fighter per round” spanning “punch cleanness and power to stance time and positional data” [PAGE 2]. Fourth, those metrics are mapped to 1,003 bouts and 7,323 binary-scored rounds after excluding 6.8% of rounds with uncommon 10-8/10-10-type scores [PAGE 3]. Fifth, a points-based model and an MLP are trained on 39 non-redundant metrics [PAGE 5]. Sixth, the points-based model applies “identical weights” to both corners [PAGE 5], which is a deliberate fairness constraint because “corner assignment is not random in pro boxing” [PAGE 5]. Seventh, judge rankings are adjusted by empirical Bayes shrinkage, with “k = 28.71” and “between-judge variance τ² = 0.005” [PAGE 8]. Eighth, feature importance is triangulated through points-based weights, Spearman correlation, and L1 logistic regression [PAGE 7], yielding claims such as “Maximum impact punches are valued over 10× higher than minimum impact punches” [PAGE 9] and “aggression power as the second most important metric (coefficient = 0.598)” [PAGE 10].

The gray-zone audit must separate model fit from measurement validity. The latent target is a judge’s interpretation of “clean and effective punching,” but the observed proxy is an action-recognition label. The paper itself concedes an “estimated per-punch accuracy of around 95%” on “single-angle dirty-feed production footage, running at either 25 or 30fps,” with “occlusion issues where punches and their outcome are frequently blocked from view by referees, graphics, or fighters' bodies” [PAGE 14]. That 5% error is not automatically benign: if occlusion correlates with fighter style, clinching, corner position, or camera angle, then the impact regressors are contaminated non-randomly. A second gray zone is selection: only “1,003 bouts (19%) had complete round-by-round scorecard data available from BoxRec [28]” [PAGE 3], and the authors note that “defensive specialist Floyd Mayweather Jr. averages 9.8 usable rounds per bout in our dataset while power-puncher Mike Tyson averages only 3.9 usable rounds, 60% fewer” [PAGE 14]. Thus the sample is tilted toward decision-oriented, defensive fighters. A third gray zone is ranking: raw pairwise accuracy ranks the points-based model in the “22nd percentile” while shrinkage moves it to the “10th percentile” [PAGE 8-9], showing that sample-size regularization is first-order. A fourth gray zone is feature importance: the paper warns that weights are context dependent and “change dramatically based on which other features are included in the model” [PAGE 7]. Therefore the correct multi-hop conclusion is not “judges value power” simpliciter; it is “within this DeepStrike beta, single-camera, scorecard-available sample, and under this regularization path, aggression power and high-impact punches are salient predictors.” Exact singularities to flag are: ratio-score denominator zero in the points model; empirical Bayes τ²→0 causing k→∞; L1 logistic perfect separation causing unbounded coefficients; Spearman zero-variance; and temporal aliasing when punch contact duration is shorter than 1/25 s or 1/30 s. These are not cosmetic; they define the regimes where the paper’s operators break down.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(c\in\{R,B\}\) index red and blue corners, and let \(x_{i,c}\ge 0\) be the round-level statistic \(i\) for corner \(c\). The paper’s displayed point-model equations are not recoverable from the supplied OCR, so only the explicitly described structure is reconstructed. The paper states: “Each boxer accumulates points based on their round performance” and “identical weights are applied to both boxers' statistics” [PAGE 5]. The recoverable operator is
\[
P_c(\mathbf{w})=\sum_{i=1}^{d} w_i x_{i,c},
\qquad
\hat{s}_R=\mathcal{F}_{\mathbf{w},D,S}(P_R,P_B),
\qquad
\hat{s}_B=1-\hat{s}_R,
\]
where \(\mathcal{F}\) is the paper’s ratio-based map with parameters \(D,S\) [PAGE 5]. Units: \(P_c\) has units of \(w_i x_i\); \(\hat{s}_c\in[0,1]\) is dimensionless. Assumption: \(x_{i,c}\) are nonnegative raw counts, times, or rates; plus-minus metrics used later are not necessarily nonnegative and require a different sign interpretation [PAGE 7]. Breakdown regime: if the ratio denominator implied by \(D,S\) is zero, or if both point totals are zero, \(\hat{s}_R\) is undefined and a tie rule is required. Because the exact \(\mathcal{F}\) is OCR-missing, calibration cannot be fully audited from the text alone.

The training loss is explicitly MSE:
\[
\mathcal{L}(\Theta)=\frac{1}{N}\sum_{i=1}^{N}\left(R_{\Theta,i}-\bar{y}_i\right)^2,
\]
where \(N\) is the number of rounds, \(R_{\Theta,i}\) is the predicted score, and \(\bar{y}_i\) is the “average score across the three judges” [PAGE 5-6]. Units: score-squared, dimensionless because judge scores are in \(\{0,1/3,2/3,1\}\). Assumption: equal weighting of rounds. Breakdown regime: heteroscedastic judge variance makes MSE inefficient; averaged judge scores are ordinal but treated as interval.

Empirical Bayes shrinkage is
\[
\tilde{p}_j=\frac{n_j\hat{p}_j+k\mu}{n_j+k},
\]
where \(n_j\) is rounds scored, \(\hat{p}_j\) is raw accuracy, \(\mu=82.78\%\), and \(k=28.71\) [PAGE 6, PAGE 8]. Units: \(n_j\) and \(k\) in rounds; \(p\) dimensionless probability. The paper reports “Method of Moments estimation yielded k = 28.71, confirming genuine skill differences exist among judges (between-judge variance τ² = 0.005)” [PAGE 8]. The standard binomial Method-of-Moments form implied by [PAGE 6] is
\[
\tau^2=\max\left(0,\;s^2-\overline{\frac{\mu(1-\mu)}{n_j}}\right),
\qquad
k=\frac{\mu(1-\mu)}{\tau^2}.
\]
Breakdown regimes: \(\tau^2\to 0\) gives \(k\to\infty\), so every judge shrinks to \(\mu\); \(n_j\to 0\) gives \(\tilde{p}_j\to\mu\); if \(s^2\) is below average within-judge variance, \(\tau^2\) is truncated at zero; if judges are not exchangeable, shrinkage imports bias. The paper notes “judges with fewer than 30 rounds are substantially regularized toward the population mean (82.78%)” [PAGE 8].

Spearman rank correlation is used for plus-minus metrics [PAGE 7]:
\[
\rho_s=1-\frac{6\sum_i d_i^2}{n(n^2-1)}
\]
without ties, with tie-corrected ranks otherwise. Units: dimensionless. Breakdown: zero variance in either variable makes \(\rho_s\) undefined; monotone-only association; omitted confounders. The paper reports “aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493)” [PAGE 10].

L1 logistic regression is
\[
\Pr(y=1\mid\mathbf{x})=\sigma(\beta_0+\boldsymbol{\beta}^{\top}\mathbf{x}),
\qquad
\hat{\boldsymbol{\beta}}
=
\arg\min_{\beta_0,\boldsymbol{\beta}}
\left[
-\sum_i \log \sigma\!\left(y_i(\beta_0+\boldsymbol{\beta}^{\top}\mathbf{x}_i)\right)
+\lambda\|\boldsymbol{\beta}\|_1
\right],
\]
with \(C=1/\lambda\) tuned by 5-fold cross-validation from \(10^{-6}\) to \(0.01\) [PAGE 7]. Units: logit per feature unit, or per standardized unit if standardization is applied; the paper does not specify scaling. Breakdown: perfect separation drives coefficients unbounded; correlated features make L1 selection unstable; coefficient magnitude is not causal importance. The paper reports “aggression power as the second most important metric (coefficient = 0.598)” [PAGE 10].

Impact normalization is
\[
\tilde{w}_{\text{impact}}=\frac{w_{\text{impact}}}{w_{\text{min}}},
\qquad
\tilde{w}_{\text{max}}>10,
\]
because “Maximum impact punches are valued over 10× higher than minimum impact punches” [PAGE 9]. Units: dimensionless. Breakdown: if \(w_{\text{min}}\to 0\), the normalized ratio is unstable; if impact labels are noisy, the ratio is attenuated or inflated by measurement error.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from CompuBox’s 1980s real-time clicker system, which “all landed punches are categorized as either a ‘jab’ or a ‘power punch’ with no further differentiation” [PAGE 1], through manual academic annotation of “fewer than 50 bouts” [PAGE 1], to codified judged sports such as gymnastics, figure skating, and freestyle skiing [PAGE 1], and then to computer vision: pose-estimation struggles with occlusion, while action-recognition models such as DeepStrike learned “patterns from full images rather than just skeletal data” [PAGE 2]. Retrocausally, the current DeepStrike-enabled sample determines which historical questions become answerable: punch impact differentiation, pressure position, aggression power, and judge ranking at scale. The lineage also explains why the paper’s claims are conditional: CompuBox’s binary jab/power distinction was too coarse for “clean and effective punching,” but DeepStrike’s 47 metrics are still generated from “single-angle dirty-feed production footage” [PAGE 14]. Multi-week traps are therefore: (1) scorecard-availability selection, since only 19% of bouts had complete scorecards [PAGE 3]; (2) style selection, since power-punchers generate fewer usable rounds [PAGE 14]; (3) judge-ranking sample-size bias, which shrinkage corrects only under exchangeability [PAGE 6-8]; (4) feature-selection instability under collinearity, acknowledged by the paper’s warning that weights are context dependent [PAGE 7]; and (5) replication drift if later DeepStrike versions or multi-camera inputs change the measurement layer. These traps compound over multi-week analysis because each cleaning, pairing, and model-selection choice subtly redefines the estimand.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Judging is recursive: the judge infers fighter intent and effect; the fighter infers the judge’s priors and adapts; the analyst infers the judge’s inference. Under crisis, the paper’s evidence suggests habit regression toward salient power and aggression: “aggression power” is the second most important L1 feature at coefficient \(0.598\), and judges “highly value high-commitment punches regardless of landing success” [PAGE 10]. That is a crisis habit because when clean contact is ambiguous, the judge may fall back on visible commitment and force. The counter-trap is fighter adaptation: a fighter can feint power, “occupy the guard,” force rope position, or use pressure position to exploit the judge’s salience prior, especially because “pressure position” and “pressure distance” retain moderate importance [PAGE 10-11]. The clock layer is round time and recency: the paper notes “potential recency bias favoring late-round action” remains untracked [PAGE 14], and aggression/pressure use “arbitrarily set timing windows within DeepStrike (e.g. 3 seconds of aggression power for throwing with power commit level 4)” [PAGE 14]. Formally, the judge’s posterior is \(P(y=1\mid \text{performance},\text{context})\), but the model estimates \(P(y=1\mid \text{DeepStrike metrics})\) and omits crowd, reputation, previous rounds, and recency [PAGE 12]. Omitted context biases coefficients if correlated with metrics. Thus the recursive theory-of-mind conclusion is conditional: the model captures judge habit under ambiguity, not the full judge-fighter strategic equilibrium.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: punch impact is a kinematic transfer problem, but the measurement layer is 25 or 30 fps single-camera video with occlusion [PAGE 14]. If contact duration is shorter than the frame interval, impact is temporally aliased; if the referee or a glove blocks the contact, impact is missing not at random. Biomechanical layer: punch quality depends on kinetic chain, balance, and target area; pose-based systems struggle with occlusion, and action-recognition systems still have “estimated per-punch accuracy of around 95%” [PAGE 14]. A 10× weight on maximum impact [PAGE 9] amplifies any systematic impact misclassification. Weather/environment layer: the paper’s sample is indoor HD video from YouTube and Dailymotion [PAGE 3], so wind, rain, heat, and outdoor ring conditions are not represented; any generalization to outdoor bouts is vetoed by missing environmental data. Statistical layer: scorecard availability selects 19% of bouts [PAGE 3], and usable-round counts differ sharply by style, with Mayweather at 9.8 usable rounds per bout versus Tyson at 3.9 [PAGE 14]. Veto proof: an inference that maps observed impact directly to latent “clean punching” is invalid unless it models non-random occlusion and selection. An inference that judges value power independent of landing is invalid unless it separates judge salience from DeepStrike’s 3-second aggression windows [PAGE 14]. An inference that the model is bias-free is valid only within the measured performance layer; it is not evidence about crowd, nationality, promotional pressure, or reputation, which the authors explicitly exclude [PAGE 12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Impact-differentiation veto. Verifier: retrain the volume-only points model and the impact-differentiated points model on the same 80/20 split and evaluate on the 1,450-round test set [PAGE 8]. Veto Hypothesis 1 if the impact model’s held-out accuracy or Brier score is not better than volume-only, or if a 95% bootstrap interval for the difference includes zero. Prediction: impact differentiation improves held-out accuracy, and the normalized maximum-impact weight exceeds 10× the minimum-impact weight [PAGE 9]. If the measured \(\tilde{w}_{\max}/\tilde{w}_{\min}\le 10\) or the held-out delta is nonpositive, the claim that impact differentiation is meaningful is vetoed.

2. Aggression-power veto. Verifier: rerun L1 logistic regression with 5-fold cross-validation over \(C\in[10^{-6},0.01]\) and Spearman correlation on plus-minus metrics [PAGE 7]. Veto Hypothesis 2’s aggression-power component if aggression power is not selected, is not in the top half of selected features, has a nonpositive coefficient, or has \(r\le 0\). Prediction: aggression power is selected with coefficient near \(0.598\) and Spearman \(r\) near \(0.493\) [PAGE 10]. If label permutation produces the same selection pattern, the feature-importance claim is vetoed as an artifact.

3. Shrinkage-ranking veto. Verifier: recompute raw and empirical Bayes rankings for judges with at least 20 rounds using \(k=28.71\) and \(\mu=82.78\%\) [PAGE 6, PAGE 8]. Veto the sample-size-bias correction claim if raw and shrunk percentiles differ by less than two percentile points or if the estimated \(\tau^2\le 0\). Prediction: the points-based model moves from roughly the 22nd percentile raw to roughly the 10th percentile shrunk [PAGE 8-9]. If the ranking shift is negligible, the claim that shrinkage materially changes judge-model comparison is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>
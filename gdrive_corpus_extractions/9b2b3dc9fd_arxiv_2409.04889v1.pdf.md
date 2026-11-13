---
source: "arxiv_2409.04889v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 32
model: deepseek/deepseek-v4.1-flash-1017
words: 8605
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words. Need obey no betting lines. Source is academic expected points American football. User supplied pages. Need produce deep derivation/audit, formal LaTeX equations units page citations verbatim quotes, breakdown singularities. Need not mention spreads/totals/moneylines/odds. But source uses point spread. Invariant says zero betting lines: Never mention spreads, totals, moneylines, or odds. We need avoid word "spread" as betting? The paper uses point spread as team quality covariate. But instruction says never mention spreads. We can refer to "pre-game team-quality covariate" without saying spread? Need cite verbatim quotes maybe contains "point spread". But strict zero betting lines. Cannot include quotes with "point spread"? We can quote other sentences without betting terms. Need avoid "spread" string entirely. Also avoid "odds". We can mention "team-quality covariate" e.g., "pre-game point differential expectation"? But that might imply. Better call "pre-game team-quality scalar \(q\)" and cite page 9 quote "include measures of team quality (e.g., point spread) as covariates" would violate. We can paraphrase. Need exact [PAGE N] markers and verbatim quotes. Choose quotes without betting terms. Need perhaps quote "To mitigate this selection bias, we can include measures of team quality ... as covariates." Contains "e.g., point spread" if full quote. We can use partial with ellipsis and bracket? But strict no mention. Could quote "we can include measures of team quality ... as covariates." [PAGE 9]. Verbatim quote with ellipsis? It is exact fragments. Better: "we can include measures of team quality ... as covariates" brackets? Need not be a betting line. Okay.

Need produce formal equations with units and singularities. Need discuss EP as expected points, units points. State model equations from source. Need derive weighted logloss via expectation-minimization swap, inverse play count weights. Need discuss dependency structure, cluster bootstrap. Need discuss catalytic prior algorithm. Need no toy equations. We can use equations from source with citations. Need mention "points" units. Could use \( \mathrm{pt}\) or points. Probability dimensionless. Logloss nats? If natural log, nats per play; base e. RMSE points. Coverage dimensionless. Weight dimensionless. \(\phi\) dimensionless ratio. M synthetic count. Effective sample size. Need singularities/breakdown regimes:
- Multinomial logistic denominator P(No Score) zero => log odds singular; probabilities boundaries.
- Weights w_ij = 1/N_i; if N_i=0 not possible (drive has at least one play) but if empty drive undefined; if N_i=1 weight 1.
- Averaged subsample variance: expectation/minimization swap not exact; bias if loss nonconvex/random; M finite. Breakdown if M small or drives one play etc.
- Bootstrap prediction set coverage with B finite, empirical quantile; coverage estimate has Monte Carlo error. If B small, prediction set unstable.
- Catalytic prior: \(\phi\) large shrinks to prior, accuracy decreases linearly (page 24 quote). \(\phi=1\) smooths artifacts. Singularity if prior model predicts deterministic outcomes or boundary probabilities -> synthetic outcomes degenerate, target overconfident; if M too small. 
- Cluster bootstrap resampling drives; if number of drives small, cluster bootstrap degenerates; dependence within drives ignored by iid bootstrap? But source found unweighted with i.i.d. coverage 0.963. 
- XGBoost overfit artifacts nonmonotonic in team-quality covariate. 
- Prediction sets undercoverage ~85% vs nominal 95. 
- Page 19 says bootstrap variants ~95. Need quote.
- Page 10 prediction set definition.
- Page 14 equation 9 weighted logloss. 
- Page 17 Table 1 values.
- Page 19 Table 2 values.
- Page 24 quote "as the ratio ... increases, the catalytic model gets less accurate linearly" no betting.
- Page 27/28 recommendations.

Need discuss "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need no betting. Could discuss Carter/Machol 1971, Carroll et al 1989, Romer 2006, Burke 2009, Yurko 2018, Baldwin 2021, Carl/Baldwin 2022, Huang et al 2020/2022. Multi-week traps: treating play-level iid as independent, ignoring cluster drive outcomes, using point estimates without bootstrap, overfitting blackbox, selection bias from team quality, catalytic prior over-shrink. Need phrase "multi-week traps" maybe traps in analysis over weeks. Avoid betting.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need interpret as analyst habits? Need discuss recursive modeling: analyst models player, evaluator models analyst, etc. Crisis habit regression = reverting to iid play-level unweighted XGBoost under pressure; counter-trap = using cluster bootstrap and team-quality adjustment; clock = time/epoch/drive horizon. Need connect to recursive theory of mind. This is odd. We can write: first-order analyst estimates EP; second-order analyst anticipates first-order overfit and uses regularization; third-order anticipates evaluation uses CIs. Crisis habit regression: when uncertainty appears, revert to familiar blackbox point estimates. Counter-trap: use cluster bootstrap, weighted loss, catalytic prior. Clock: drive/epoch time horizon and half seconds remaining; recursive horizon affects label leakage and outcome. Need no fake ratios.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need discuss cross-layer veto: physical constraints can veto statistical model. In football: EP must be zero at end half? Page 20 says XGBoost regression misses EP should be zero at end of half in opponent's territory for all downs. Need quote. Physical/biomechanical: yardline boundary, scoring event, half expiration, possession changes, timeouts; weather: rain example page 11 footnote calibrated but bad predictor. Need "veto proof" maybe formal constraints:
- Boundary veto: \(\mathrm{EP}(x)=0\) when half seconds remaining=0 and no scoring? Actually at end of half, next scoring event within half? If half over, no points. Source page 20 says "EP should be zero at the end of the half in opponent’s territory for all downs." Need cite.
- Monotonicity veto: EP monotonic decreasing in yardline, yards to go, team-quality covariate? Source page 20: "we expect EP to be monotonic decreasing in yardline, yards to go, point spread, and defensive team timeouts remaining and monotonic increasing in offensive team timeouts remaining" contains spread. Avoid quote. Paraphrase: monotonic decreasing in yardline, yards to go, defensive timeouts; increasing in offensive timeouts [PAGE 20]. Do not mention spread. For team quality, monotonic increasing in offensive quality maybe.
- Weather: calibration example: constant rain probability calibrated but terrible predictor because rainy/sunny clump [PAGE 11]. This vetoes calibration-only acceptance. 
- Biomechanical: not much in source. Could mention player tracking frames? Page 28 wide receivers grading frames. Physical constraints: finite play clock, half seconds, yardline bounded 0-100, down categories. Need not invent biomechanical details? We can discuss "physical layer" as field geometry and clock; "biomechanical" as player action frames, but source only mentions tracking data mapping frames to outcomes. Need avoid external claims? We can state no biomechanical model in source; veto would require tracking-frame data, which paper notes as future/related [PAGE 28]. Formal veto: any EP(x) must satisfy \(\Pr(y=k|x)\) simplex and \(\sum_k p_k=1\), \(p_k\ge0\). If model violates simplex, veto. But that's mathematical. Cross-layer physical: \(T_{\rm half}\le 0\) implies no future scoring, \(\mathrm{EP}=0\). Field position \(Y\in[0,100]\). Down \(D\in\{1,2,3,4\}\). If model predicts nonzero EP at \(T=0\), veto. Weather: if model uses only long-run rain frequency, it cannot capture autocorrelation; calibrated but bad. Use quote.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? We can treat as counterfactual veto tests with verifiable outcomes. Need 3 scenarios:
1. Cluster bootstrap vs iid play bootstrap: Counterfactual remove drive clustering, resample plays iid; prediction: nominal 95% prediction sets undercover? Source Table 1 shows point-estimate undercoverage ~0.834-0.861; Table 2 shows bootstrap ~0.956-0.963. But need "RLVR veto" maybe if a proposed model claims adequate uncertainty without cluster bootstrap, veto unless coverage \(\ge 0.95 - \epsilon\). Verifiable by held-out drives and coverage. Prediction: unweighted play-level point model coverage ~0.86, cluster bootstrap ~0.956. Need not mention betting.
2. Weighted vs unweighted XGBoost: Counterfactual set weights equal 1; prediction RMSE increases from 2.593 to 2.618; logloss 0.7506 to 0.7670 [PAGE 17]. Veto model if weighted logloss not used? But source says improvement slight. Verifiable.
3. Catalytic prior over-shrink: Counterfactual \(\phi\to\infty\) (or \(\phi\) large): prediction accuracy degrades linearly and smoothness increases; veto if artifacts remain at \(\phi=1\) or if accuracy loss beyond tolerance. Or counterfactual remove catalytic prior: artifacts nonmonotonic in team-quality covariate; prediction monotonicity violation persists. Verifiable by monotonicity checks. Need 3 distinct. Could also include monotonic regression constraint: regression model misses EP=0 at half end; veto if boundary constraint violated [PAGE 20]. Need 3 verifiable RLVR scenarios. Maybe:
- Veto A: boundary-clock: model predicts nonzero EP at half expiration; prediction: multinomial XGBoost captures zero; regression misses [PAGE 20]. 
- Veto B: dependency: unweighted point model undercovers; cluster bootstrap coverage ~0.956. 
- Veto C: catalytic smoothing: without prior artifacts nonmonotonic; with \(\phi=1\) monotonic but accuracy loss. 
Need "RLVR" maybe reward model? We can frame as "verifiable reward veto": a model output is rejected if a deterministic test fails. Predictions are checkable.

Need structured XML exact sections. Need >=1000 words. We can aim 2500-3500 words. Need no betting terms. Avoid "spread" string entirely. Also avoid "odds", "moneyline", "total". Be careful "point spread" not in output. "point" alone okay (expected points). "points" okay. "point estimate" okay? It contains point but not betting. Fine. "point spread" forbidden. Avoid "spread". Avoid "betting lines". The invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. The word "total" might appear in equations "total weight"; is that forbidden? It says totals (betting totals) likely but to be safe avoid "total" as noun? Hmm "total weight" is not betting total, but exact word "total" could trigger. Better use "aggregate weight" instead of total. Avoid "total" string entirely. Use "sum". "Sum" okay. Avoid "over/under". "odds" avoid. "moneyline" avoid. "spread" avoid. Need not mention line. Good.

Need cite pages exact. Use [PAGE 1 of 32]? User says exact [PAGE N] markers. Use [PAGE 1], [PAGE 2] etc. They provided "--- [PAGE 1 of 32] ---". Exact marker [PAGE 1 of 32]? They say cite exact [PAGE N] markers. Use [PAGE 1 of 32]? That includes N and of 32. To be safe use [PAGE 1 of 32]. But in XML maybe okay. Use [PAGE 1 of 32] verbatim. Good.

Need formal LaTeX equations with units. Let's formulate:

Define game-state \(x\in\mathcal X\), drive outcome \(y\in\{1,\dots,5\}\) with net point values \(\mathrm{pts}(k)\in\{7,3,0,-2,-7\}\) points [PAGE 7]. EP:
\[
\mathrm{EP}(x)=\sum_{k=1}^{5}\mathrm{pts}(k)\,p_k(x),\quad p_k(x)=\Pr(y=k|x),\quad [\mathrm{EP}]=\text{points},\ [p_k]=1.
\]
Equation (1) page 7. Need note source uses K=5 for drives; epoch has 7 outcomes. 
Multinomial:
\[
\log\frac{p_k(x_{ij})}{p_{\mathrm{NS}}(x_{ij})}=f_k(x_{ij}),\quad k\ne \mathrm{NS}.
\]
Equation (2) page 10. Singular if \(p_{\mathrm{NS}}\to0\) or boundary.
Unweighted logloss:
\[
L_{\mathrm{play}}(p)=-\sum_{i=1}^{N_d}\sum_{j=1}^{N_i}\sum_{k=1}^{K}\mathbf 1(y_i=k)\log p(k|x_{ij}).
\]
Equation (4) page 13. Units nats if natural log; per play if normalized.
Weighted:
\[
L_w(p)=-\sum_i\sum_j w_{ij}\sum_k \mathbf 1(y_i=k)\log p(k|x_{ij}), \quad w_{ij}=1/N_i.
\]
Equation (9)-(10) page 14. Derivation via averaged subsample:
\[
\arg\min_p -\frac1M\sum_{m=1}^M\sum_i\sum_j I_{mij}\sum_k \mathbf 1(y_i=k)\log p(k|x_{ij})
\]
Equation (5) page 14. Expectation swap:
\[
\mathbb E[\arg\min ...]\approx \arg\min \mathbb E[...] = \arg\min -\sum_i\sum_j \Pr(I_{mij}=1)\sum_k...
\]
\(\Pr(I_{mij}=1)=1/N_i\). Need note approximation not exact due noncommuting expectation and argmin [PAGE 14]. 
Evaluation:
\[
\mathrm{RMSE}_m = \sqrt{\frac1{N_d}\sum_i\sum_j I_{mij}(\widehat{\mathrm{EP}}(x_{ij})-\mathrm{pts}(y_i))^2}
\]
units points. Equation (11) page 15. Logloss equation (15) page 16 units nats. Coverage equation (16) page 16 dimensionless. 
Bootstrap coverage equation (17) page 18. 
Catalytic prior: target \( \hat p_{\rm target}\) fit on combined data with synthetic weights \(w^*=\phi W/n_{\rm row}(X^*)\) [PAGE 24]. \(W=\sum_i\sum_j w_{ij}\). \(\phi\) dimensionless. If \(\phi=1\) equal aggregate weights. M=500,000. Accuracy decreases linearly in \(\phi\) [PAGE 24]. Breakdown if prior degenerate; if M too small; if \(\phi\) too large target collapses to prior.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include page citations and verbatim quotes. Need quotes:
- Page 1 abstract: "They suffer from selection bias, display counter-intuitive artifacts of overfitting, do not quantify uncertainty in point estimates, and do not account for the strong dependence structure of observational football data." [PAGE 1 of 32] This is exact and no forbidden terms? "point estimates" okay. Good.
- Page 3: "Expected points is not a counting statistic readily observable or calculable by a viewer – it requires and is defined entirely with respect to a model." [PAGE 3 of 32] Good.
- Page 7: "EP(x) = ..." maybe equation. Quote "Today, both epoch and drive EP are typically defined by a weighted sum of the probabilities of their respective outcomes" [PAGE 7 of 32]. Good.
- Page 10: "This model is mis-specified because all plays j in the same drive i share the same outcome" [PAGE 10 of 32]. Good.
- Page 11: "Baldwin (2021b) found that his traditional EP model is calibrated. But calibration is not a sufficient condition for a model to be “good”: a model can be calibrated but wildly inaccurate." [PAGE 11 of 32]. Good.
- Page 17: "prediction sets formed from each of these models are undercovered: they achieve about 85% coverage even though they are supposed to achieve 95% coverage." [PAGE 17 of 32]. Good.
- Page 19: "each of the bootstrap variants yield prediction sets that achieve about 95% marginal coverage as desired." [PAGE 19 of 32]. Good.
- Page 20: "XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs." Need exact with weird c EP. Quote "XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs." [PAGE 20 of 32]. Good.
- Page 24: "As the ratio ϕ of the weight of smoothed synthetic data relative to that of observed data increases, the catalytic model gets less accurate linearly" [PAGE 24 of 32]. Good. 
- Page 27/28: "we recommend weighing each play in the training dataset by the inverse number of plays in its drive." [PAGE 28 of 32]. Good.
- Page 28: "we recommend using a cluster boostrap (sample clusters with replacement)." [PAGE 28 of 32]. Note typo boostrap. Exact. Good.

Need avoid "point spread" in quotes. The page 20 quote about monotonic includes it; skip. Page 28 quote okay. Page 9 quote about team quality with e.g. point spread; skip or use ellipsis. We need cite selection bias. Use page 1 abstract and page 9 paraphrase. We can quote "To mitigate this selection bias, we can include measures of team quality ... as covariates." But exact text: "To mitigate this selection bias, we can include measures of team quality (e.g., point spread) as covariates." If I omit parenthetical with ellipsis: "To mitigate this selection bias, we can include measures of team quality ... as covariates." Is that verbatim? It alters but ellipsis indicates omission. Should be okay. But strict "verbatim quotes" with ellipsis is standard. Avoid forbidden term. Good.

Need "THINK_TRACE" >=400 words. Must be deep multi-hop derivation & gray-zone audit. Need include reasoning, equations? It says deep derivation and audit. We can write 600 words. Need not reveal hidden chain-of-thought? We can provide summary derivation not private chain. But user requests THINK_TRACE. We can provide high-level reasoning trace, not hidden. Need satisfy. Use equations and audit. Include "gray-zone" issues: selection bias, dependency, overfit, uncertainty. Mention no betting.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need be careful "retrocausal" maybe weird. Write lineage: operations research 1971 -> hidden game 1989 -> Romer 2006 -> Burke 2009 -> Yurko 2018 -> Baldwin 2021 -> Carl/Baldwin 2022 -> Huang catalytic priors 2020/2022 -> Brill et al 2024. Multi-week traps: week 1 use unweighted play logloss; week 2 add team quality but ignore clustering; week 3 bootstrap wrong level; week 4 catalytic prior over-smoothing; week 5 report EPA without CIs. Need no betting.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need write as nested analyst/evaluator/player. Crisis habit regression: under deadline, analysts regress to blackbox point estimate, ignore dependency and uncertainty. Counter-trap: anticipates regression and precommits to weighted logloss + cluster bootstrap + pre-registered monotonicity checks. Clock: drive vs epoch horizon; half seconds; game clock; recursive labels. Need mention "clock" in three senses: game clock covariate, computational clock, decision clock. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need formal "veto proof" maybe list:
- Simplex veto: probabilities nonnegative and sum to 1; if not, no EP.
- Clock-boundary veto: at half seconds remaining=0, no future scoring event => EP=0; source says regression misses [PAGE 20].
- Field geometry/down-state veto: yardline bounded, down categorical, yards to go positive; monotonic constraints expected [PAGE 20].
- Possession/drive clustering veto: plays within drive share outcome; any iid play model mis-specified [PAGE 10].
- Weather autocorrelation veto: calibrated constant rain probability bad because rain clumps [PAGE 11]. This is a cross-layer weather veto against calibration-only validation.
- Biomechanical layer: tracking frames map to play outcome; source mentions future work for wide receivers [PAGE 28]. If biomechanical model ignores frame-to-play aggregation, veto by same dependency logic. Need not overdo.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios with predictions. Need be precise and verifiable. Use "verifiable reward veto" maybe define. Predictions numeric from tables:
Scenario 1: Remove drive weighting. Counterfactual: train unweighted multinomial XGBoost on same features including team quality. Expected: RMSE \(2.618\pm0.0014\) vs weighted \(2.593\pm0.0017\); logloss \(0.7670\pm0.0005\) vs \(0.7506\pm0.0006\); point prediction set coverage \(0.861\pm0.0004\) vs weighted \(0.834\pm0.0004\). Wait weighted has lower coverage than unweighted (0.834 vs 0.861). But both undercover. Veto if criterion is RMSE <= weighted? Prediction unweighted worse. Good. Need no forbidden terms. 
Scenario 2: Remove cluster bootstrap, use iid play bootstrap or no bootstrap. Counterfactual: point estimates alone nominal 95% sets. Prediction coverage about 0.834-0.861, under 0.95. With cluster bootstrap: 0.956±0.016 for weighted; 0.957 for averaged; iid bootstrap with unweighted 0.963. Veto if coverage <0.95 - tolerance. Good. 
Scenario 3: Remove catalytic prior or set \(\phi\) too high. Counterfactual no catalytic prior: artifacts of overfitting, nonmonotonic in team-quality covariate. Prediction: monotonicity check fails at some yardlines. With \(\phi=1\): artifacts smoothed; accuracy loss small? Page 24 says accuracy decreases linearly as phi increases, lowest phi no artifacts about 1. Need not give numeric accuracy. Veto if monotonicity violation persists at \(\phi=1\) or if accuracy loss exceeds pre-set tolerance. Predictions: no prior fails monotonicity; \(\phi=1\) passes monotonicity but lower accuracy; \(\phi\gg1\) collapses to prior and may fail calibration/accuracy. Good. 
Could include boundary clock scenario instead of catalytic? Need 3. Maybe include boundary clock as fourth? User says 3. We can include exactly 3 but in cross-layer mention boundary. Good.

Need "ZERO TOY EQUATIONS" - we must not invent ratios. Use source equations. For monotonicity, no fake ratios. Good.
Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." Need explicitly state units for each equation. Include assumptions. Maybe in SOURCE_OPERATORS section.

Need no "spread" string. Need check all output for forbidden substrings: "spread", "odds", "moneyline", "total". The word "total" might appear in "total weight"; avoid. "totals" avoid. "point spread" avoid. "betting" avoid? Invariant says zero betting lines; can mention "No betting lines are used" but "betting" okay? It says never mention spreads, totals, moneylines, or odds. "betting lines" maybe okay but to be safe avoid "betting" too. But user says ZERO BETTING LINES; we can avoid. No "line" as betting? "lineage" contains line? Hmm "lineage" includes "line" substring but not betting. Fine. "linear" contains "line" but okay. Avoid "spread" definitely. "Total" as substring in "total"? Avoid. Use "aggregate". "Odds" avoid. "Moneyline" avoid.

Need maybe avoid "over/under" too. No.

Need include "PAGE N" markers exact. Use [PAGE 1 of 32] etc. Need not over-cite every sentence. 

Need XML structure exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need ensure >=1000 words. We'll write around 3000. Need "THINK_TRACE" >=400 words. We can include equations there too. Need "Deep multi-hop derivation & gray-zone audit". Let's draft carefully.

Potential issue: The paper uses "point spread" as covariate. If I refer to "team-quality covariate" maybe sufficient. Need mention source page 9 selection bias. We can quote page 9 with ellipsis without forbidden term. But quote "To mitigate this selection bias, we can include measures of team quality ... as covariates." This is okay. Need maybe include "we evaluate an EP model using average team qualities" [PAGE 9]. Good.
Need mention "pre-game team-quality scalar" not "point spread". In equations, denote \(q\) and say average \(q=0\) as source page 9 says "0 point spread" but that includes point spread. Avoid exact. Say "average team quality" [PAGE 9]. Good.

Need no "spread" in quote page 20. Skip.
Need no "spread" in Table 1? No.
Need no "point spread" in page 12 figure caption. Skip.
Need no "point spread" in page 21? Skip.

Need include "catalytic prior" algorithm steps. Formal equations:
\[
D^{**}=( [X_{\rm train},X^*], [y_{\rm train},y^*], [w_{\rm train},w^*]), \quad w^*_r = \phi W/n_{\rm row}(X^*), \quad W=\sum_{i,j}w_{ij}.
\]
Units: \(w\) dimensionless; \(W\) dimensionless; \(\phi\) dimensionless; \(n_{\rm row}\) count. Source page 24. Need note synthetic outcomes \(y^*_r \sim \hat p_{\rm prior}(\cdot|x^*_r)\) [PAGE 24]. 
Breakdown: if \(n_{\rm row}(X^*)=0\) undefined; if prior \(\hat p_{\rm prior}\) has zero probability for some outcome, synthetic sampling can be degenerate; if \(\phi\) too large target approximates prior and loses nonlinearity; if M too small synthetic noise. Good.

Need "exact singularity/breakdown regimes" in SOURCE. We can list bullets:
1. Multinomial log-odds singular at \(p_{\rm NS}=0\) or \(p_k=0\): log diverges. In finite data, smoothing/regularization needed.
2. Weighted logloss \(w_{ij}=1/N_i\) undefined if \(N_i=0\); drives by definition have at least one play, so singular only for empty/ malformed drives. If \(N_i=1\), weight=1, no downweighting.
3. Expectation-argmin swap not exact; breakdown if loss nonconvex or M finite; bias can appear. Source explicitly says "approximate" [PAGE 14].
4. Bootstrap coverage: B finite; cluster bootstrap breaks if number of clusters small; iid bootstrap invalid under within-drive dependence.
5. Catalytic prior: \(\phi\to\infty\) collapses target to prior; M too small; prior boundary probabilities.
6. Prediction set: if probability mass ties or discrete outcomes, "smallest set" may not be unique; coverage estimate has Monte Carlo error.
7. EP boundary: at half expiration, true EP=0; regression model violates [PAGE 20].
Good.

Need "RETROCAUSAL_GENEALOGY" maybe "retrocausal" means later work reframes earlier assumptions. Write: earlier binning (RE24) assumed many independent observations per state; football violates. Romer/Burke regression; Yurko multinomial; Baldwin XGBoost; Brill et al statistics critique; Huang catalytic prior. Multi-week traps. 
Need avoid "baseball" betting? Fine. Baseball not betting. 
Need "scientific lineage" mention operations research. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe not too abstract. Write with levels:
- Level 0: player action -> play outcome.
- Level 1: analyst models EP from game-state.
- Level 2: analyst models the analyst's model (overfitting, selection).
- Level 3: evaluator models whether analyst's CI is honest; player/team models reputation.
Crisis habit regression: under crisis, reverts to unweighted play-level XGBoost and point estimates. Counter-trap: precommit to weighted logloss, cluster bootstrap, monotonicity audit. Clock: drive clock vs epoch clock; at end half; computational clock; recursive horizon. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Use "veto proof" as deterministic tests. Mention "weather" rain footnote. Biomechanical layer: source mentions tracking data frames for wide receivers [PAGE 28]; no biomechanical model in paper. State any biomechanical extension must preserve frame-to-play clustering; otherwise veto by same dependency argument. Good. Need maybe "physical" constraints: \(Y\in[0,100]\), \(D\in\{1,2,3,4\}\), \(T\ge0\); at \(T=0\) half over, no future scoring. Source page 20. "Biomechanical" maybe player tracking: frames within play share play outcome; must aggregate. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3. Include "verifiable reward veto" maybe each with "Input", "Veto", "Prediction". Need no "betting". Use numeric predictions.

Let's ensure no "total" substring. We'll avoid "total". Use "aggregate", "sum". Need watch "totals" not. "total weight" avoid. "total number" avoid. Use "sum of weights". 
Avoid "spread" substring. Need not use "widespread" because contains spread! The word "widespread" has "spread" substring. Avoid "widespread". Use "common". Avoid "spread" in "widespread". Also "spreadsheet" avoid. "spreading" avoid. Good. 
Avoid "odds" substring? "odds" not in words like "goods"? "goods" has "ods" not odds. Avoid "odds". 
Avoid "moneyline". 
Avoid "over" as betting? "over" okay. "under" okay? "undercovered" contains under but not betting. Fine.
Avoid "line" maybe "lineage" okay. "linear" okay. But "line" in "lineage" not betting. No "line" as betting. Fine.

Need maybe mention "zero betting lines" not. No.

Let's write final with exact XML. Need maintain concise but deep. Desired oververbosity 5; but requirements demand depth. Aim ~3500 words. Let's craft.

Need make sure citations are exact [PAGE N of 32]. Use within text. Verbatim quotes with quotation marks. Good.

Draft THINK_TRACE:

Start: The source is not a betting document; it's statistical. Need audit. Define EP. Multi-hop:
1. EP is model-defined, not counting stat [PAGE 3]. So any estimator is conditional expectation. 
2. Drive vs epoch: drive has 5 outcomes; epoch 7; drive chosen for effective sample size and immediacy [PAGE 7-8].
3. Selection bias: good teams run more plays, so play-level regression targets random play not average team; adjust team quality [PAGE 9].
4. Dependence: plays in drive share y_i; play-level model mis-specified [PAGE 10]. Derive weighted loss by subsampling one play per drive and swapping expectation/argmin [PAGE 14]. Weights inverse Ni.
5. Uncertainty: point predictions undercover; bootstrap needed [PAGE 17-19].
6. Overfit: blackbox artifacts; monotonic constraints not possible for multinomial; catalytic prior [PAGE 19-24].
Gray-zone audit: The approximation in equation 7-9 is not exact; finite M; cluster bootstrap vs iid; coverage MC error; team-quality covariate may be endogenous? Source uses pre-game quality. Need mention "team-quality adjustment does not make context-neutral EP fully causal; it reduces selection bias but no causal identification proof" maybe gray zone. Is that in source? It says could include more refined measures [PAGE 28]. We can state as audit. Need not overclaim. 
Need "Breakdown regimes" maybe in source section later. THINK_TRACE can mention.

Let's produce. Need careful with XML special characters? Use \(\phi\), etc. Ampersands? Avoid &. Use "and". Use `<`? In XML, less-than signs in text could break. Need escape `<` as `&lt;` if used. Better avoid `<` symbols or use words. But equations with \(<0\) might need `&lt;`. We can use `\lt` in LaTeX? In text, use `\lt`? To be safe avoid less-than signs. Use "below", "above", "nonnegative". If need inequality, use LaTeX `\le`, `\ge` which use backslash not `<`. For \(\phi\to\infty\) okay. Avoid raw `<` and `&`. Ampersand not use. Use "and". Good. XML text can contain `>`? likely okay but avoid. Use `\to`. 
Need no raw `&`. Use "and". 
Need equations with `\mathbf 1` okay. Use `\Pr`. Good.

Need include "c EP" maybe use \(\widehat{\mathrm{EP}}\). Good.

Need "verbatim quotes" exact. Ensure quote punctuation. Use curly quotes? Fine. Need no forbidden. Let's ensure quotes:
- "They suffer from selection bias, display counter-intuitive artifacts of overfitting, do not quantify uncertainty in point estimates, and do not account for the strong dependence structure of observational football data." Exact page 1. Good.
- "Expected points is not a counting statistic readily observable or calculable by a viewer – it requires and is defined entirely with respect to a model." Exact page 3 includes footnote marker maybe. Good.
- "Today, both epoch and drive EP are typically defined by a weighted sum of the probabilities of their respective outcomes" exact page 7. Good.
- "This model is mis-specified because all plays j in the same drive i share the same outcome" exact page 10. Good.
- "Baldwin (2021b) found that his traditional EP model is calibrated. But calibration is not a sufficient condition for a model to be “good”: a model can be calibrated but wildly inaccurate." Exact page 11. Good.
- "prediction sets formed from each of these models are undercovered: they achieve about 85% coverage even though they are supposed to achieve 95% coverage." Exact page 17. Good.
- "each of the bootstrap variants yield prediction sets that achieve about 95% marginal coverage as desired." Exact page 19. Good.
- "XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs." There is "c EP" maybe extracted. In paper it's \(\widehat{EP}\). Quote exact extracted? It says "XGBoost regression misses that c EP should be zero..." Because PDF text extraction. To be verbatim from source text, use exactly as provided: "XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs." Good.
- "As the ratio ϕ of the weight of smoothed synthetic data relative to that of observed data increases, the catalytic model gets less accurate linearly" exact page 24. Good.
- "we recommend weighing each play in the training dataset by the inverse number of plays in its drive." Exact page 28? Page 28 says "we recommend weighing each play in the training dataset by the inverse number of plays in its drive." Yes. Good.
- "we recommend using a cluster boostrap (sample clusters with replacement)." Exact page 28 typo. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include "Assumptions" bullet:
A1: \(x\) contains relevant game-state; no unmeasured confounding? Actually not. We can say model assumes \(p_k(x)\) estimable from data; no causal claim. 
A2: drive outcomes defined as five categories. 
A3: average team quality via q. 
A4: cluster bootstrap exchangeability of drives? For cluster bootstrap, drives resampled; assumption drives approximately independent. Source doesn't explicitly say exchangeable but bootstrap. 
A5: prediction sets nominal 95. 
Need "units": points, dimensionless, nats. 
Need "breakdown" list.

Need "RETROCAUSAL_GENEALOGY" phrase "retrocausal" maybe "later statistical critique retroactively diagnoses earlier model choices". Good. Multi-week traps: list with weeks? "Trap 1 (weeks 1-2)" etc. No betting. 
Need "RECURSIVE_THEORY_OF_MIND" maybe use "crisis habit regression" as a term. Good.
Need "CROSS_LAYER_VETO_ADJUDICATION" with "veto proof" maybe formal:
- Veto P1: probability simplex. If \(p_k(x)\) outside [0,1] or sum not 1, reject. 
- Veto P2: clock boundary. If \(T_{\rm half}=0\), \(\mathrm{EP}(x)=0\). Source page 20. 
- Veto P3: drive dependence. If model treats plays iid, reject or require bootstrap. Source page 10.
- Veto P4: weather autocorrelation. Calibration alone insufficient; constant daily rain probability can be calibrated but bad [PAGE 11]. Need not mention betting. 
- Veto P5: biomechanical frame aggregation. Tracking frames within play share play outcome; must cluster. Source page 28. 
Need "physical/biomechanical/weather veto proof" maybe phrase "proof obligation" not mathematical proof. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" each with "Counterfactual", "Verifiable veto", "Prediction". Use equations and numbers. 
Scenario 1: unweighted vs weighted. 
Scenario 2: point estimate vs cluster bootstrap. 
Scenario 3: no catalytic prior vs \(\phi=1\) vs large \(\phi\). 
Need "3 verifiable RLVR veto scenarios + predictions." Good.

Need maybe mention "RLVR" as "reinforcement-learning-with-verifiable-rewards style audit" but not define? We can say "Treat each veto as a verifiable reward test." Good.

Need no forbidden "total". Check "total" appears in "total weight"? Avoid. "Subtotal"? No. "altogether"? Contains total? "altogether" has "total"? a l t o g e t h e r no. Fine. 
Avoid "spread" in "widespread". No. 
Need "odds" in "goods"? no. 
Need "moneyline" no. 

Let's write final. Final only.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a statistical-methodology paper about expected points (EP), not a document about wagers or market lines. The first audit step is therefore to strip away any temptation to treat EP as an observable counting statistic. The paper is explicit: “Expected points is not a counting statistic readily observable or calculable by a viewer – it requires and is defined entirely with respect to a model.” [PAGE 3 of 32]. That sentence forces the entire derivation to be model-relative: every EP estimate is a conditional expectation under an estimated probability model, and every claimed improvement must be judged by calibration, accuracy, coverage, and dependence handling.

The second step is to resolve the drive-versus-epoch choice. A drive is a contiguous series of plays by one offense, ending in a score or possession change; a drive has five outcomes with net point values touchdown 7, field goal 3, no score 0, opponent safety −2, and opponent touchdown −7 [PAGE 7 of 32]. An epoch is a series of plays ending at the same next scoring event; it has seven outcomes [PAGE 7 of 32]. The paper chooses drive EP because a single play has a larger immediate effect on a drive than on a multi-drive epoch, and drive EP has larger effective sample size [PAGE 8 of 32]. The formal valuation is
\[
\mathrm{EP}(x)=\sum_{k=1}^{K}\mathrm{pts}(k)\,p_k(x),\qquad
p_k(x)=\Pr(y=k\mid x),\qquad
[\mathrm{EP}]=\text{points},\;[p_k]=1,\;[\mathrm{pts}]=\text{points},
\]
which is the weighted-sum operator reported on [PAGE 7 of 32]: “Today, both epoch and drive EP are typically defined by a weighted sum of the probabilities of their respective outcomes” [PAGE 7 of 32].

The third step is the selection-bias audit. A play-level regression estimates EP for a randomly drawn play, not for an average offense facing an average defense. The paper says good teams run more plays and score more points, so play-level models are size-biased toward good offenses [PAGE 9 of 32]. The qualitative remedy is to include team-quality measures and then evaluate at average team quality: “To mitigate this selection bias, we can include measures of team quality ... as covariates” [PAGE 9 of 32], and then “we evaluate an EP model using average team qualities” [PAGE 9 of 32]. In the audit, I denote this team-quality scalar by \(q\), with average quality \(q=0\), without importing any market or wager interpretation.

The fourth step is the dependence audit. In the observed data, let \(i\) index drives and \(j\) index plays within drive \(i\). The drive outcome is \(y_i\); all plays in drive \(i\) share that same \(y_i\). The traditional multinomial model,
\[
\log\frac{p_k(x_{ij})}{p_{\mathrm{NS}}(x_{ij})}=f_k(x_{ij}),
\]
is mis-specified because “all plays j in the same drive i share the same outcome” [PAGE 10 of 32]. The paper’s fix is the averaged subsample model: draw one play per drive, fit \(M\) models, average them, and approximate the expected minimizer by swapping expectation and minimization [PAGE 14 of 32]. The resulting weighted logloss uses
\[
w_{ij}=\Pr(I_{mij}=1)=\frac{1}{N_i},
\]
where \(N_i\) is the number of plays in drive \(i\) [PAGE 14 of 32]. This is not a toy ratio; it is a probability of subsampling a play from a drive, and it yields inverse-play-count weights.

The fifth step is the uncertainty audit. Point estimates alone produce nominal 95% prediction sets that are badly undercovered. The paper reports: “prediction sets formed from each of these models are undercovered: they achieve about 85% coverage even though they are supposed to achieve 95% coverage” [PAGE 17 of 32]. Bootstrap-informed prediction sets repair this: “each of the bootstrap variants yield prediction sets that achieve about 95% marginal coverage as desired” [PAGE 19 of 32]. This is the gray-zone where many analyses fail: they report EP or EPA point estimates without cluster-aware uncertainty, then overinterpret small differences between players or teams.

The sixth step is the overfitting audit. Blackbox XGBoost captures nonlinearities and interactions but produces artifacts. The paper notes that multinomial XGBoost cannot simply use monotonic constraints because, for example, the probability of a field goal is not monotonic in every covariate [PAGE 19 of 32]. Regression with monotonic constraints is less accurate and misses boundary facts: “XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs” [PAGE 20 of 32]. The catalytic prior is the proposed smoother: generate synthetic game-states, impute synthetic outcomes from a simpler prior model, assign synthetic weights so their aggregate weight is a fraction \(\phi\) of the observed aggregate weight, and refit the target model [PAGE 24 of 32]. The paper reports that as \(\phi\) grows, “the catalytic model gets less accurate linearly” [PAGE 24 of 32], while artifacts are smoothed; the lowest visualized value without artifacts is about \(\phi=1\) [PAGE 24 of 32].

The gray-zone audit also has to flag what the paper does not prove. The expectation-minimization swap in the averaged subsample derivation is explicitly an approximation [PAGE 14 of 32]. The cluster bootstrap assumes drives can be resampled as clusters; with few drives, that bootstrap is fragile. The coverage estimates themselves are Monte Carlo estimates with standard errors. The team-quality adjustment reduces selection bias but is not a full causal identification strategy; the paper itself says a more elaborate model could include more refined offensive and defensive quality measures [PAGE 28 of 32]. Finally, the catalytic prior trades accuracy for smoothness; it is not a free lunch. These are the exact breakdown regimes that must be stated before using EP for player evaluation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Core operator: EP as a probability-weighted point functional.**  
For drive outcomes \(y\in\{1,\dots,5\}\), with net point values \(\mathrm{pts}(k)\in\{7,3,0,-2,-7\}\) points, the EP operator is
\[
\mathrm{EP}(x)=\sum_{k=1}^{5}\mathrm{pts}(k)\,p_k(x),
\quad
p_k(x)=\Pr(y=k\mid x),
\quad
\sum_{k=1}^{5}p_k(x)=1,
\quad
p_k(x)\ge 0.
\]
Units: \([\mathrm{EP}]=\text{points}\); \([p_k]=1\); \([\mathrm{pts}]=\text{points}\). This is the paper’s Formula (1) context on [PAGE 7 of 32], where the authors state that EP is “typically defined by a weighted sum of the probabilities of their respective outcomes” [PAGE 7 of 32].

**Multinomial drive-outcome operator.**  
With no-score as the baseline category,
\[
\log\frac{p_k(x_{ij})}{p_{\mathrm{NS}}(x_{ij})}=f_k(x_{ij}),
\qquad k\ne \mathrm{NS}.
\]
This is the paper’s Formula (2) on [PAGE 10 of 32]. Units: the log-odds are dimensionless; \(f_k\) is dimensionless. The model’s key assumption is that a play-level multinomial outcome is generated per play, but the paper states the model “is mis-specified because all plays j in the same drive i share the same outcome” [PAGE 10 of 32].

**Traditional play-weighted logloss.**  
The traditional objective weighs each play equally:
\[
L_{\mathrm{play}}(p)
=
-\sum_{i=1}^{N_{\mathrm{drives}}}
\sum_{j=1}^{N_i}
\sum_{k=1}^{K}
\mathbf 1(y_i=k)\log p(k\mid x_{ij}).
\]
This is the objective displayed as Formula (4) on [PAGE 13 of 32]. Units: if \(\log\) is natural, \([L]=\text{nats}\); if normalized by the number of plays, the unit is nats per play. The assumption is independent play-level outcomes, which contradicts the shared drive outcome.

**Averaged subsample and weighted logloss.**  
The averaged subsample model draws one play per drive in each of \(M\) subsamples:
\[
L_{\mathrm{avg}}(p)
=
-\frac{1}{M}\sum_{m=1}^{M}
\sum_{i=1}^{N_{\mathrm{drives}}}
\sum_{j=1}^{N_i}
I_{mij}
\sum_{k=1}^{K}
\mathbf 1(y_i=k)\log p(k\mid x_{ij}),
\]
\[
I_{mij}=\mathbf 1(\text{play }j\text{ is sampled from drive }i\text{ in subsample }m).
\]
This is Formula (5) on [PAGE 14 of 32]. The paper then approximates the expected minimizer by exchanging expectation and minimization:
\[
\mathbb E\left[\arg\min_p L_{\mathrm{avg}}(p)\right]
\approx
\arg\min_p
\left[
-\sum_i\sum_j \Pr(I_{mij}=1)
\sum_k \mathbf 1(y_i=k)\log p(k\mid x_{ij})
\right],
\]
and because \(\Pr(I_{mij}=1)=1/N_i\), the practical objective is
\[
L_w(p)
=
-\sum_i\sum_j w_{ij}
\sum_k \mathbf 1(y_i=k)\log p(k\mid x_{ij}),
\qquad
w_{ij}=\frac{1}{N_i}.
\]
This is Formulas (9)–(10) on [PAGE 14 of 32]. Units: \(w_{ij}\) is dimensionless; \(L_w\) has nats if using natural log. The assumption is that one play per drive is sampled uniformly; the breakdown is that the expectation-minimization swap is not exact, and the approximation can fail when the loss is nonconvex or \(M\) is small. Also, \(w_{ij}=1/N_i\) is undefined for an empty drive; football drives ordinarily have at least one play, so valid data avoid that singularity. If \(N_i=1\), the weight is 1 and no downweighting occurs.

**Evaluation operators.**  
The RMSE for a subsampled test set is
\[
\mathrm{RMSE}_m(\widehat{\mathrm{EP}},D_{\mathrm{test}})
=
\sqrt{
\frac{1}{N_{\mathrm{drives}}}
\sum_i\sum_j
I_{mij}
\left(
\widehat{\mathrm{EP}}(x_{ij})-\mathrm{pts}(y_i)
\right)^2
},
\]
with units points; this is Formula (11) on [PAGE 15 of 32]. The reported RMSE averages over \(M_{\mathrm{test}}\) subsamples and has a standard error [PAGE 15 of 32]. Logloss is
\[
\mathrm{logloss}(\hat p,D_{\mathrm{test}})
=
-\frac{1}{M_{\mathrm{test}}}
\sum_{m=1}^{M_{\mathrm{test}}}
\frac{1}{N_{\mathrm{drives}}}
\sum_i\sum_j
I_{mij}
\sum_k
\mathbf 1(y_i=k)\log \hat p(k\mid x_{ij}),
\]
with units nats per play; this is Formula (15) on [PAGE 16 of 32]. Coverage is
\[
\mathrm{covg}(\hat p,D_{\mathrm{test}},\alpha)
=
\frac{1}{M_{\mathrm{test}}}
\sum_{m=1}^{M_{\mathrm{test}}}
\frac{1}{N_{\mathrm{drives}}}
\sum_i\sum_j
I_{mij}
\mathbf 1\left(y_i\in \mathrm{predset}_{\hat p}(x_{ij},\alpha)\right),
\]
dimensionless, with nominal \(\alpha=0.95\); this is Formula (16) on [PAGE 16 of 32]. The paper’s empirical result is the key veto: traditional point-estimate prediction sets achieve “about 85% coverage even though they are supposed to achieve 95% coverage” [PAGE 17 of 32].

**Bootstrap coverage operator.**  
For \(B\) bootstrapped models \(\hat p^{(b)}\), generate an outcome \(\hat y^{(b)}_{mj}\) for each play from each model, then form the prediction set from the empirical distribution of those generated outcomes [PAGE 18 of 32]. The coverage is
\[
\mathrm{bootcovg}
=
\frac{1}{M_{\mathrm{test}}}
\sum_m
\frac{1}{N_{\mathrm{drives}}}
\sum_i\sum_j
I_{mij}
\mathbf 1\left(
y_i\in
\mathrm{predset}_{\hat p^{(1)},\dots,\hat p^{(B)}}(x_{ij},\alpha)
\right),
\]
dimensionless; this is Formula (17) on [PAGE 18 of 32]. The paper uses \(B=100\) and reports coverage near nominal: weighted XGBoost with cluster bootstrap \(0.956\pm0.016\), averaged subsampled XGBoost with cluster bootstrap \(0.957\pm0.016\), and unweighted XGBoost with standard i.i.d. bootstrap \(0.963\pm0.013\) [PAGE 19 of 32]. The breakdown regime: finite \(B\), finite test subsamples, and small numbers of clusters make coverage estimates noisy; i.i.d. play bootstrap ignores within-drive dependence.

**Catalytic prior operator.**  
Let \(D_{\mathrm{train}}=(X_{\mathrm{train}},y_{\mathrm{train}},w_{\mathrm{train}})\), let \(M\) be the approximate synthetic sample size, and let \(\phi\) be the dimensionless fraction controlling synthetic aggregate weight relative to observed aggregate weight. Algorithm 1 fits a prior model \(\hat p_{\mathrm{prior}}\), generates synthetic states \(X^*\), imputes \(y^*\sim\hat p_{\mathrm{prior}}(\cdot\mid x^*)\), assigns
\[
w^*_r=\phi\,\frac{W}{n_{\mathrm{row}}(X^*)},
\qquad
W=\sum_{i,j}w_{ij},
\]
and fits the target model on the combined data [PAGE 24 of 32]. Units: \(w^*_r\), \(W\), and \(\phi\) are dimensionless; \(n_{\mathrm{row}}(X^*)\) is a count. Assumption: the prior model is a smoother, interpretable approximation. Breakdown regimes: if \(\phi\to\infty\), the target collapses toward the prior and loses nonlinearity; if \(M\) is too small, synthetic noise dominates; if the prior assigns zero or near-zero probability to an outcome, synthetic imputation becomes degenerate; if \(\phi\) is too small, overfitting artifacts remain. The paper reports that as \(\phi\) increases, “the catalytic model gets less accurate linearly” [PAGE 24 of 32], and the lowest visualized value without artifacts is about \(\phi=1\) [PAGE 24 of 32].

**Exact singularity and boundary regimes.**
1. Multinomial log-odds are singular when \(p_{\mathrm{NS}}(x)=0\) or \(p_k(x)=0\); \(\log(p_k/p_{\mathrm{NS}})\) diverges. Finite-sample models need regularization or smoothing.
2. \(w_{ij}=1/N_i\) is undefined only for an empty drive; valid drives have \(N_i\ge1\).
3. The expectation-argmin swap is not an identity; it is an approximation [PAGE 14 of 32].
4. Point-estimate prediction sets breakdown under dependence and sampling uncertainty: nominal 95% sets achieve roughly 85% coverage [PAGE 17 of 32].
5. At the end of a half, the physical clock imposes \(\mathrm{EP}(x)=0\) in the relevant boundary state; the paper notes regression misses this boundary fact [PAGE 20 of 32].
6. Calibration alone is not sufficient: “a model can be calibrated but wildly inaccurate” [PAGE 11 of 32].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from operations research on football in 1971, through book-length and regression-based 4th-down work, into reproducible public NFL models, and then into the modern statistical critique represented by this paper. The source cites Carter and Machol (1971), Carroll, Palmer, and Thorn (1989), Romer (2006), Burke (2009), Yurko, Ventura, and Horowitz (2018), Baldwin (2021), and Carl and Baldwin (2022) [PAGE 2 of 32, PAGE 29 of 32]. The retrocausal reading is that later work diagnoses earlier assumptions: early binning and averaging worked in baseball because of small state spaces and many independent observations, but football has a prohibitively large state space and far fewer plays per state [PAGE 3 of 32, PAGE 4 of 32]. Regression borrowed strength across similar states; multinomial models captured more outcomes; XGBoost captured nonlinearities and interactions; and then the statistical audit exposed selection bias, dependence, overfitting artifacts, and missing uncertainty.

The catalytic-prior lineage is separate but convergent: Huang, Stein, Rubin, and Kou (2020) and Huang, Wang, Rubin, and Kou (2022) developed catalytic priors for linear models, and this paper extends the idea to blackbox machine learning by imputing synthetic data from a simpler model [PAGE 23 of 32]. The retrocausal diagnosis is that the blackbox’s flexibility is both cause and cure: it captures real nonlinearity, but it also manufactures nonphysical artifacts, so a smoother prior is used as a statistical governor.

Multi-week traps appear if an analyst adopts the paper’s vocabulary without its discipline. Week 1 trap: use unweighted play-level logloss because it is the default, then report EP without noticing that plays in the same drive share an outcome [PAGE 10 of 32]. Week 2 trap: add team quality but fail to evaluate at average team quality, so the estimate remains size-biased toward teams that run more plays [PAGE 9 of 32]. Week 3 trap: bootstrap plays rather than drives, or omit bootstrap entirely, and then overinterpret EPA differences without uncertainty [PAGE 17 of 32, PAGE 18 of 32]. Week 4 trap: use a blackbox and accept nonmonotonic artifacts as signal; the paper explicitly shows that estimates can fail monotonic intuition and calls these “artifacts” [PAGE 12 of 32]. Week 5 trap: apply a catalytic prior with too large a \(\phi\), obtaining smooth but less accurate estimates; the paper says accuracy degrades linearly as \(\phi\) increases [PAGE 24 of 32]. Week 6 trap: treat calibration as sufficient; the rain example in the footnote shows a calibrated constant rain probability can still be a terrible predictor because rainy and sunny days cluster [PAGE 11 of 32]. These traps are multi-week because each one looks locally reasonable and only fails when the full evaluation stack is assembled.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is the tendency, under time pressure, to regress to the most familiar habit: fit a blackbox, report a point estimate, and ignore the dependence and uncertainty layers. The paper’s abstract names the exact failure set: “They suffer from selection bias, display counter-intuitive artifacts of overfitting, do not quantify uncertainty in point estimates, and do not account for the strong dependence structure of observational football data.” [PAGE 1 of 32]. In recursive terms, the first-order analyst models the player; the second-order analyst models the first-order analyst’s likely overfit; the third-order evaluator models whether the second-order analyst’s confidence interval is honest. Crisis habit regression collapses all three orders into one: “the model says EPA is higher, therefore the player is better.” The paper blocks that collapse by requiring uncertainty intervals on EPA per play and by showing that many adjacent rankings are not statistically distinguishable [PAGE 26 of 32].

The counter-trap is a precommitment device. Before seeing player rankings, the analyst commits to inverse-play-count weighting, team-quality adjustment, cluster bootstrap, and boundary checks. The paper’s recommendations are concrete: “we recommend weighing each play in the training dataset by the inverse number of plays in its drive” [PAGE 28 of 32], and “we recommend using a cluster boostrap (sample clusters with replacement)” [PAGE 28 of 32]. The counter-trap works because it anticipates the crisis habit: when a surprising ranking appears, the analyst does not switch to an unweighted point-estimate model; the analyst runs the pre-registered coverage and boundary audits.

The clock enters at three levels. First, the game clock is a covariate: half seconds remaining, game seconds remaining, and timeouts are part of \(x\) [PAGE 13 of 32]. Second, the drive clock is the outcome horizon: a drive ends at a score or possession change, so the label is generated at the drive level, not the play level [PAGE 7 of 32, PAGE 10 of 32]. Third, the analytical clock is the deadline pressure that triggers crisis habit regression. The recursive theory-of-mind lesson is that the analyst must model the evaluator’s inference: if the analyst reports only a point estimate, the evaluator will overread it; if the analyst reports a cluster-bootstrapped interval, the evaluator can see whether the difference is resolvable. The paper’s quarterback and team figures make this explicit: many confidence intervals overlap, so apparent rank differences are not automatically skill differences [PAGE 26 of 32]. The clock also creates boundary states: at the end of a half, EP must respect the physical termination of scoring opportunity, which regression can miss [PAGE 20 of 32]. Thus the recursive correct habit is not “trust the blackbox” or “trust the simple model”; it is to model the model-selection process, the evaluation process, and the clock-bounded outcome process simultaneously.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer vetoes any EP surface that violates the probability simplex or the clock boundary. Formally, a candidate model must satisfy \(p_k(x)\ge0\), \(\sum_k p_k(x)=1\), and \(\mathrm{EP}(x)=\sum_k \mathrm{pts}(k)p_k(x)\). If the model outputs negative probabilities or probabilities that do not sum to one, the EP value is inadmissible regardless of accuracy. The clock veto is stronger: at the end of a half, there is no future scoring event within that half, so the relevant EP boundary is zero. The paper gives the audit example: “XGBoost regression misses that c EP should be zero at the end of the half in opponent’s territory for all downs” [PAGE 20 of 32]. A model that predicts nonzero EP at that boundary is vetoed even if its aggregate RMSE is attractive.

The biomechanical and tracking layer vetoes frame-level models that ignore play-level aggregation. The paper notes that similar dependence structures appear when grading wide receivers from tracking data, where actions across frames lead to a play outcome [PAGE 28 of 32]. The veto proof is structural: if many frames belong to one play, and the play has one outcome, then treating frames as independent observations repeats the same mis-specification as treating plays within a drive as independent [PAGE 10 of 32]. Any biomechanical extension must therefore preserve the frame-to-play cluster, the play-to-drive cluster, or both; otherwise its uncertainty statements are not credible.

The weather layer vetoes calibration-only validation. The paper’s footnote gives a rain example: a constant daily rain probability can be calibrated to the long-run frequency but still be a terrible predictor because rainy days cluster and sunny days cluster [PAGE 11 of 32]. The general lesson is that marginal calibration is necessary but not sufficient: “a model can be calibrated but wildly inaccurate” [PAGE 11 of 32]. A weather-sensitive EP model that only matches long-run calibration but ignores serial dependence is vetoed by the same logic that vetoes i.i.d. play-level football models.

The dependence layer veto is the strongest cross-layer constraint. All plays in a drive share the same outcome, so a play-level likelihood that treats them as independent is mis-specified [PAGE 10 of 32]. The paper’s weighted logloss is the corrective operator, with \(w_{ij}=1/N_i\) [PAGE 14 of 32]. The uncertainty layer veto follows: point-estimate prediction sets undercover at about 85% when nominal coverage is 95% [PAGE 17 of 32], while bootstrap-informed sets reach about 95% [PAGE 19 of 32]. Thus a model that reports only point estimates is vetoed for player evaluation unless it supplies a dependence-aware uncertainty interval. The adjudication rule is: physical boundary first, simplex second, dependence third, calibration fourth, accuracy fifth. A model that passes accuracy but fails the physical boundary or the dependence layer is not admissible.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Remove inverse-play-count weighting.**  
Counterfactual: train the same multinomial XGBoost model on the same features and team-quality adjustment, but set every play weight to 1 instead of \(1/N_i\). Verifiable veto: compare held-out RMSE and logloss on one-play-per-drive test subsamples. Prediction from the paper: unweighted XGBoost is less accurate than weighted XGBoost; the reported RMSE is \(2.618\pm0.0014\) for unweighted versus \(2.593\pm0.0017\) for weighted, and logloss is \(0.7670\pm0.0005\) versus \(0.7506\pm0.0006\) [PAGE 17 of 32]. A model that claims the weighting is unnecessary is vetoed if the held-out RMSE or logloss is worse in the predicted direction. The prediction is directional and numerically checkable: unweighted should lose on both metrics.

**Scenario 2: Replace cluster bootstrap with point estimates or i.i.d. play bootstrap.**  
Counterfactual: form nominal 95% prediction sets from a single fitted drive-outcome model, or resample plays i.i.d. rather than resampling drives as clusters. Verifiable veto: measure marginal coverage on held-out drives, averaging over one-play-per-drive test subsamples. Prediction from the paper: point-estimate prediction sets are undercovered at about 85% even though they are supposed to achieve 95% [PAGE 17 of 32]. With cluster bootstrap, weighted XGBoost reaches \(0.956\pm0.016\), averaged subsampled XGBoost reaches \(0.957\pm0.016\), and unweighted XGBoost with i.i.d. bootstrap reaches \(0.963\pm0.013\) [PAGE 19 of 32]. A model is vetoed if its coverage is materially below the nominal level without a stated dependence-aware correction. The check is empirical: held-out drive coverage is the reward signal.

**Scenario 3: Remove or over-apply the catalytic prior.**  
Counterfactual A: fit weighted multinomial XGBoost without the catalytic prior and test monotonicity in the team-quality covariate and related state variables. Prediction: the model displays counter-intuitive artifacts, including nonmonotonic behavior in the team-quality direction, as shown in the paper’s overfitting figure [PAGE 12 of 32]. Veto if a monotonicity check fails in a region where theory requires monotonicity. Counterfactual B: set \(\phi\) far above 1. Prediction: artifacts are smoothed, but accuracy degrades; the paper states that as the synthetic-data weight fraction increases, “the catalytic model gets less accurate linearly” [PAGE 24 of 32]. Veto if the pre-specified accuracy loss exceeds tolerance. Counterfactual C: set \(\phi=1\). Prediction: the paper reports that \(\phi=1\) is the lowest visualized value for which artifacts are no longer found, and the smoothed model is monotonic in the relevant team-quality direction [PAGE 24 of 32]. Veto if monotonicity still fails at \(\phi=1\), or if accuracy loss is unacceptable for the application. This scenario is verifiable because the monotonicity check and held-out accuracy are both computable from the fitted model and test data.
</RLVR_COUNTERFACTUAL_VETOES>
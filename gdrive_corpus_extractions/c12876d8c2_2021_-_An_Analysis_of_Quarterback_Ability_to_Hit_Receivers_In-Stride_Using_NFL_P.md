---
source: "2021 - An Analysis of Quarterback Ability to Hit Receivers In-Stride Using NFL Player Tracking Data - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 8879
---

<NATIVE_REASONING>
We need answer user asks likely wants analysis of given PDF. Need produce GSE + GSI Frontier Reasoning Foundry with strict invariants. Must include exact XML sections. >=1000 words across exact XML sections. Need zero betting lines. No spreads/totals/moneylines/odds. We can discuss sports analytics but not betting lines. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Source pages provided cite exact [PAGE N] markers and verbatim quotes. Need >=400 words THINK_TRACE. Need sections.

Need infer task? They only provided source and system. Need produce analysis in required XML sections. We should analyze paper. Need not mention betting. Need ensure no fake ratios. Need cite pages exact and quotes. Need include SOURCE_OPERATORS_AND_EQUATIONS with LaTeX, units, page citations, breakdown. Need RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions. Need "Frontier Reasoning Foundry" likely demanding deep multi-hop, gray-zone audit, etc. Need answer with sections only? likely yes. Need be careful not to include betting lines. Could mention no wagering. Need use source operators/equations. Need parse paper.

Let's understand paper details for accuracy. It's Dani Treisman, "An Analysis of Quarterback Ability to Hit Receivers In-Stride Using NFL Player Tracking Data". Uses 2021 Big Data Bowl data from 2018 season? Wait page 1 says dataset includes data from 2018 NFL season. Page 7 says "In this case, I only had access to data from the 2020 season so I compared QB aggregates for weeks 1-8 to weeks 9-17." Contradiction: page 1 says 2018; page 7 says 2020. Need flag gray-zone. Maybe Big Data Bowl 2021 uses 2018? But page 7 says 2020 likely typo. Need cite both. Need note inconsistency. Also page 1 abstract says aggregate ADOE correlate moderately with CPOE; SDOE and xYAC Difference highly correlated; ADOE and SDOE stable within-season. Page 2 defines OD etc. Page 2 says expected values xOD xAD xSD using XGBoost; variables. Page 3 outcome metrics YACOE = YAC - Expected YAC; xYAC Difference = Expected YAC(pass-forward) - Expected YAC(pass-arrival); CPOE = Completion Percentage - Expected Completion Percentage. Page 5: YACOE vs in-stride: at best ADOE R2 0.013, Speed strongest R2 0.056? Wait Figure 5 caption says "Speed has strongest effect with R2 of 0.056" But text says "At best, there might be some effect of ADOE on YACOE but R2 only 0.013". Contradiction? Caption says Speed strongest 0.056. Need cite both. Page 6: SDOE relationship with xYAC Difference R2 0.168. Page 6: CPOE: ADOE strongest R2 0.104; SDOE vs CPOE R2 0.017 and ODOE vs CPOE R2 only 0.019. Page 7 Figure 7 caption says Acceleration has strongest effect with R2 of 0.055, contradict text 0.104? Need flag. Page 7 says within-season correlations (R2) 0.208 and 0.209 for ADOE and SDOE. ODOE not stable. Page 7 conclusion. Page 8 limitations: binning differences may lose info; deep learning/computer vision; lacks receiver contribution; sample size. Page 9 figure.

Need design answer. Need no betting. Need "GSE + GSI Frontier Reasoning Foundry" maybe expect adversarial audit. Need maybe mention source operators: observed-expected decomposition; frame-level tracking; XGBoost; aggregation; stability split-half; random intercepts defense adjustment. Formal equations. Units: orientation radians/degrees, acceleration yards/s^2? NFL tracking maybe yards per second, acceleration yards/s^2. Speed yards/s. Distance yards. CPOE probability units. YAC yards. R^2 dimensionless. xYAC yards. Need assumptions: pass-forward and pass-arrival timestamps well-defined; orientation absolute difference circular? OD = |orientation_at_pass_forward - orientation_at_pass_arrival|. But orientation is angular; naive absolute difference ignores wrap-around at 0/360 or ±π. Need mention exact singularity/breakdown regimes: orientation difference non-circular at angle wrap; acceleration/speed expected models fail if missing frames, tracking error; aggregation by QB small n; R^2 near zero unstable; CPOE probability near 0/1 saturation; random intercept defense adjustment with sparse groups; XGBoost extrapolation outside training manifold; pass-forward point not inflection for orientation; "Expected" model leakage if predicts using pass-arrival variables for xAD/xSD? Need check variables in expected models include receiver orientation, speed, acceleration, direction, (x,y) at pass-arrival. This could be target leakage? They predict expected difference from pass-forward to arrival using pass-arrival variables. If xAD is expected change, using arrival acceleration to predict difference? Wait variables include "the orientation, speed, acceleration, direction, and (x,y) location of the target receiver at the point of pass-arrival." The target is difference in acceleration from forward to arrival. If predictor includes acceleration at pass-arrival, that's direct leakage because target AD = acc_forward - acc_arrival. But maybe they include arrival variables for expected model? Page 2 says variables include ... at point of pass-arrival. This is a critical gray-zone: xAD model uses acceleration at pass-arrival to predict AD = acceleration at pass forward - acceleration at pass arrival. That is leakage; would inflate model performance and make expected values absorb the outcome, causing residual ADOE not meaningful. Need flag. Similarly xSD uses speed at arrival to predict SD; xOD uses orientation at arrival. This is huge. Need mention. Also xYAC pass-arrival model uses tracking at arrival to predict YAC, okay after catch? xYAC(pass-arrival) predicts expected YAC at arrival; target is future YAC, no leakage. xCP uses arrival variables? Could be okay to predict completion at arrival. But in-stride expected models using arrival variable to predict difference is leakage if target includes arrival value. Need precise: If target is D = X_tf - X_ta, and predictors include X_ta, then model can recover X_tf from D + X_ta if X_tf also in predictors? It includes at pass-arrival only? It includes orientation, speed, acceleration, direction, (x,y) at pass-arrival; not at pass-forward? Wait variables: "distances and differences in movement between receiver and two nearest defenders, angle and down-field distance of receiver to QB, route, and orientation, speed, acceleration, direction, and (x,y) location of target receiver at pass-arrival." It might not include pass-forward values except distances/differences? But target is difference. Predictors include arrival acceleration. For AD target = a_forward - a_arrival. If predictor includes a_arrival, model can use it to predict target because target contains -a_arrival. But without a_forward, still correlation. This is target leakage if a_arrival influences target algebraically. Need mention as possible. However, they may intend expected values conditional on arrival state? That makes expected difference not "expected given pre-throw info" but "expected given arrival state"; then residual is not pure QB skill. Need identify. This is important for gray-zone audit.

Need maybe include "no betting lines" maybe don't mention. Need zero toy equations. We can include equations from paper and formal corrections.

Need structure:
- <THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit. Need discuss: claims, data flow, model pipeline, aggregation, correlation, stability, contradictions, leakage, circular stats, small sample, inference validity, cross-layer vetoes. Maybe 500-700 words.
- <SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown. Include equations with [PAGE 2], [PAGE 3], etc. Verbatim quotes. Define variables, units, assumptions, singularity regimes. Need maybe table? Keep XML simple. Need exact quotes. Use quotes with [PAGE N]. Include equations:
Let \(t_f\) pass-forward, \(t_a\) pass-arrival.
\(\mathrm{OD}_{i}=|\theta_i(t_f)-\theta_i(t_a)|\) with \(\theta\) orientation angle (rad or deg; need circular correction). \( \mathrm{ODOE}_i = |\mathrm{OD}_i - \hat{xOD}_i|\)? Paper says ODOE = | OD - xOD |. Need note xOD expected OD. Units rad/deg.
\(\mathrm{AD}_i=a_i(t_f)-a_i(t_a)\); \(\mathrm{ADOE}_i=\mathrm{AD}_i-\hat{xAD}_i\). Units yd/s^2.
\(\mathrm{SD}_i=s_i(t_f)-s_i(t_a)\); \(\mathrm{SDOE}_i=\mathrm{SD}_i-\hat{xSD}_i\). Units yd/s.
\(\mathrm{YACOE}_i=\mathrm{YAC}_i-\widehat{\mathrm{YAC}}_i\). Yards.
\(\Delta xYAC_i=\widehat{\mathrm{YAC}}_{i}(t_f)-\widehat{\mathrm{YAC}}_{i}(t_a)\). Yards.
\(\mathrm{CPOE}_i=\mathrm{CP}_i-\widehat{\mathrm{CP}}_i\). Probability (dimensionless).
Aggregation: \(\bar{M}_{q} = \frac{1}{n_q}\sum_{i\in q} M_i\) for QBs with \(n_q\ge 150\). R^2.
Stability: corr between first half and second half aggregates: \(R^2_{M,q}=\mathrm{Corr}(\bar{M}_{q,1:8},\bar{M}_{q,9:17})^2\). dimensionless.
XGBoost objective maybe \(\hat{y}_i = \sum_{k=1}^K f_k(\mathbf{x}_i)\), \(f_k\) trees. But paper doesn't give exact. Need state not specified. Could include generic. But no fake. Maybe only paper equations.

Need cite exact quotes:
- Abstract [PAGE 1]: "This ‘ability’ is defined here as the quarterback’s skill in preventing extreme orientation, acceleration, and speed changes for the receiver (i.e. back-shoulder catches), from the moment of the throw to the moment the pass arrives at the receiver."
- "The main findings in this paper are: 1) the aggregated (by QB) observed-expected values for receiver Acceleration Difference Over Expected correlate moderately with average Completion Probability Over Expected (CPOE), 2) Average (by QB) receiver Speed Difference Over Expected and Yards After Catch difference from pass forward to pass arrival (xYAC Difference) are highly correlated, and 3) average Acceleration and Speed differences Over Expected are stable for QBs within-season." [PAGE 1]
- Page 2 definitions quote.
- Page 3 definitions quote.
- Page 5 quote "At best, there might be some effect of ADOE on YACOE but the R2 is only 0.013..."
- Page 5 Figure 5 "Speed has the strongest effect with an R2 of 0.056" [PAGE 5].
- Page 6 "SDOE has a strong relationship with xYAC difference with and R2 of 0.168." [PAGE 6].
- Page 6 "Acceleration Difference Over Expected has the strongest correlation with an R2 of 0.104." [PAGE 6]
- Page 7 "Acceleration and Speed Differences Over Expected had within-season correlations (R2) of 0.208 and 0.209 respectively." [PAGE 7]
- Page 7 "Orientation Difference Over Expected does not appear stable within-season." [PAGE 7]
- Page 1 dataset 2018 vs page 7 2020 quote "In this case, I only had access to data from the 2020 season..." [PAGE 7] and "dataset (which includes data from the 2018 NFL season)" [PAGE 1]. Contradiction.
- Page 7 Figure 7 caption "Acceleration has the strongest effect with an R2 of 0.055" [PAGE 7] vs text 0.104 [PAGE 6]. Need include.
- Page 2 "The variables in each model include ... orientation, speed, acceleration, direction, and (x,y) location of the target receiver at the point of pass-arrival." [PAGE 2] leakage risk.
- Page 2 "Expected values for each tracking variable (xOD, xAD, xSD) are calculated using eXtreme Gradient Boosted models." [PAGE 2]
- Page 3 "The xYAC (pass-arrival) model is defense-adjusted using random intercepts..." [PAGE 3]
- Page 8 limitations quote "lacks an evaluation of the contribution of receivers to in-stride metrics" [PAGE 8].
- Page 8 "limited sample size" [PAGE 8].
- Page 8 "point of pass-forward is the major inflection point for the receiver’s orientation" quote? "difficult to say that the point of pass-forward is the major inflection point for the receiver’s orientation." [PAGE 8]

Need exact singularity/breakdown regimes:
1. Angular wrap singularity: OD = |θ_f - θ_a| fails at 0/2π or -π/π; e.g., θ_f=359°, θ_a=1° gives 358° not 2°. Break if orientation not unwrapped; ODOE invalid. Need use \(\Delta \theta = \operatorname{atan2}(\sin(\theta_f-\theta_a), \cos(\theta_f-\theta_a))\), OD = |Δθ|. Units rad.
2. Leakage/invalid conditional expectation regime: if \(\hat{xAD}\) uses \(a(t_a)\) and target \(AD=a(t_f)-a(t_a)\), then \(\mathrm{ADOE}=AD-\hat{xAD}\) is not orthogonal to arrival state; QB skill estimate confounded. Singular if \(a(t_a)\) strongly predicts target; residual collapses toward zero, R² inflated. Need cite page 2.
3. Small-n aggregation: \(n_q\ge150\) but 150-600 passes per QB [PAGE 5]; QB aggregate noise variance ~ σ²/n_q. R² estimates unstable; with 32 QBs and low signal, confidence intervals wide. Breakdown when n_q small or outliers; [PAGE 5] "there does still seem to be some noise and outliers".
4. CPOE saturation: \(\widehat{CP}\in(0,1)\); CPOE bounded; near 0/1 variance heteroscedastic; linear R² inappropriate. Break at extreme xCP.
5. Random intercept defense adjustment: sparse defender groups, confounding; random intercept assumes exchangeability; breakdown if defenders faced nonrandomly, small group sizes, or defense changes within pass. [PAGE 3].
6. XGBoost extrapolation: tree ensembles cannot extrapolate beyond training ranges; expected metrics for novel routes/formations/tracking artifacts collapse to nearest leaf. Break outside convex hull. [PAGE 2].
7. Missing tracking frames / pass-forward definition: if t_f or t_a ambiguous (pressure, ball release, catch), derivatives noisy; acceleration is second derivative of position, high-frequency noise; break if sampling rate low. Paper doesn't specify smoothing. Need mention.
8. Stability split-half: weeks 1-8 vs 9-17 but only one season; within-season stability doesn't imply season-to-season; [PAGE 7] "even the best and most stable metrics correlate from season to season with an R2 between 0.3 and 0.6." Break when schedule/roster changes.
9. Data version contradiction 2018 vs 2020; reproducibility singularity.

Need RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need discuss lineage: QB evaluation from completion percentage to CPOE, EPA/play; tracking data Big Data Bowl; expected metrics (xYAC, CPOE); XGBoost; random intercepts; computer vision/deep learning in sports. Retro causal genealogy: metrics derive from sabermetrics/expected possession? Need mention lineage: Bill James? Actually sports analytics lineage: box score -> play-by-play -> tracking -> pose/vision. Quarterback evaluation lineage: completion percentage -> ANY/A? But no betting. Avoid betting lines. Can mention EPA/play is not betting. Need no "odds" word? Strict zero betting lines: Never mention spreads, totals, moneylines, or odds. We can mention "wagering" maybe avoid. "odds" is forbidden? It says never mention ... odds. Avoid word "odds". We can mention "probability" okay. Avoid "spread" maybe can appear as "spread" in stats? Avoid. "totals" avoid. "moneyline" avoid. Do not mention sportsbook. Good.

Multi-week traps: within-season stability (weeks 1-8 vs 9-17) can be confounded by opponent schedule, weather, injuries, roster changes; need multi-week holdout. The paper says within-season but only one season. Need propose traps: early-season tracking calibration, bye weeks, weather, dome/outdoor, QB changes, receiver changes. Need maybe mention "clock" in next section.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret. Probably asks model of reasoning about analyst/coach/QB behavior under pressure. Need discuss "crisis habit regression" (analyst reverts to box-score/CPOE when tracking metrics noisy), "counter-trap" (overfit to expected metrics and mistake residual for skill), "clock" (within-season split, sample accumulation). Need recursive theory of mind: what QB knows, defender knows, receiver knows, analyst knows. Need be precise. "Crisis habit regression" maybe in GSE context means under uncertainty, decision-maker regresses to prior habit. Need discuss: QB under pressure regresses to back-shoulder/checkdown; analyst regresses to CPOE; coach regresses to completion percentage. Counter-trap: if metric says ADOE correlates with CPOE, analyst may chase ADOE as causal skill; but receiver/defense/scheme confounds. Clock: pass-forward to arrival interval is short (~0.3-1.5s?), but paper doesn't give. Need not invent exact. We can say "as defined by \(t_a-t_f\)" no value. Need mention orientation changes continuous; pass-forward may not be inflection [PAGE 8]. Need recursive ToM: QB anticipates receiver adjustment; defender anticipates throw; receiver anticipates ball; analyst anticipates QB skill; model expected value uses arrival state (PAGE 2) which may encode defender/receiver reactions, violating pre-throw information set. This is key: expected model includes post-throw variables, so recursive expectations not counterfactual. Need mention "crisis habit regression" under noisy tracking: revert to CPOE/YACOE; "counter-trap" if use ADOE to rank QBs without controlling for receiver; "clock" if within-season split not enough. Need maybe use "clock" as time pressure and temporal resolution: t_f to t_a; orientation continuous; acceleration derivative noise. Need include >= maybe 250 words.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need adjudicate if physical/biomechanical/weather can veto inference. Need define veto conditions: If tracking data physical constraints violated, inference invalid. Physical: acceleration limits, speed limits, position continuity; if acceleration exceeds plausible human limits or jerk spikes, tracking error. Biomechanical: orientation changes require angular velocity/torque; OD at pass-forward may not be meaningful if receiver already in break; acceleration difference due to cutting/braking not QB accuracy; speed difference due to receiver route not throw. Weather: rain/wind affects ball flight and tracking? Paper doesn't include weather; if unmodeled, confounds. Need cite? Source doesn't mention weather. We can say source provides no weather variables; therefore any weather effect is an omitted-variable veto for causal claims. Need "proof" maybe formal: if \(M_i = QB_i + R_i + D_i + W_i + \epsilon_i\), and W omitted, then \(\mathrm{Cov}(QB, M)\) biased by \(\mathrm{Cov}(QB,W)\). Weather assignment may correlate with QB schedule; veto. Need exact singularity: If weather variable has zero variance in sample, model can't identify; if all QBs play same weather distribution, bias averages but still variance. Need mention physical/biomechanical veto: if \(\mathrm{OD}\) uses non-circular angle, wrap singular; if acceleration is computed by finite difference with noise, \(\sigma_a \approx \sqrt{6}\sigma_x/\Delta t^2\)? Wait that's a real numerical differentiation formula. Need be careful not toy. Could state finite-difference acceleration error amplification: for position noise \(\sigma_x\), second difference variance \(6\sigma_x^2/\Delta t^4\)? Let's derive: second difference \(x_{t+1}-2x_t+x_{t-1}\) variance = 6σ² if independent; divide by Δt² => variance 6σ²/Δt^4. This is formal and real. Units: if σ_x in yards, Δt seconds, acceleration noise yd/s². Good. This is not fake ratio. Use as physical/tracking veto. Need cite? Paper doesn't mention sampling rate. We can state source doesn't report smoothing/sampling; so this is a potential breakdown. Good. Need "weather veto proof": omitted variable formula. Let \(M_q = \alpha + \beta QB_q + \gamma W_q + u_q\). If W omitted, \(\hat{\beta} \to \beta + \gamma \frac{\mathrm{Cov}(QB,W)}{\mathrm{Var}(QB)}\). If \(\gamma\ne0\) and Cov≠0, biased. Weather not in source variables [PAGE 2] so cannot rule out. Need cite page 2 variables list. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? Need propose 3 counterfactual veto scenarios with predictions. Must be verifiable. Need no betting. Scenarios:
1. Circular-angle correction veto: Recompute OD with atan2 wrap-corrected angular difference. Prediction: ODOE aggregate rankings and ODOE-CPOE R² change; if no change, circularity not material; if change, original ODOE invalid. Verification: reproduce from source code/data, compare rankings (Spearman) and R². Need specify threshold? We can predict "OD values for wrap-crossing plays decrease; ODOE distribution gains mass near zero; stability remains poor." Need not invent exact numeric? Could predict direction. But "verifiable" maybe need exact test. We can say "prediction: at least one wrap-crossing play changes OD by >90°; ODOE-CPOE R² is not 0.019 exactly." But we don't know. Need predictions plausible. We can use counterfactual: if leak-free expected model excludes arrival variables, ADOE-CPOE R² shrinks relative to 0.104 [PAGE 6]. Prediction: shrink. Verifiable by rerunning. Need maybe "RLVR veto" means veto if scenario predicts. Need 3:
- Veto A: Target leakage audit. Retrain xAD/xSD/xOD without \(X(t_a)\) predictors; compare ADOE-CPOE R². Prediction: R² drops materially (e.g., below half of reported 0.104) and ADOE stability drops; if not, leakage not material. But exact "below half" is an invented threshold? Could be okay as prediction, not fake equation. Need be cautious: "materially" not numeric. But "verifiable predictions" can be directional. Maybe include "pre-registered decision rule: if R² falls by >0.05 absolute, veto." That's a threshold we invent but as decision rule, not fake ratio. Fine.
- Veto B: Circular orientation recomputation. Prediction: wrap-corrected OD changes sign/rank for QBs with many boundary-crossing routes; ODOE-CPOE R² remains <0.02 or becomes negative; ODOE stability remains non-significant. Verification: recompute from tracking coordinates. Use exact page R² 0.019 [PAGE 6] and "does not appear stable" [PAGE 7].
- Veto C: Receiver/defense confound with player random effects or holdout by receiver. Prediction: SDOE-xYAC R² 0.168 [PAGE 6] attenuates when receiver random intercepts or receiver-held-out cross-validation added; if attenuation large, QB skill claim vetoed. Verification: mixed model with random intercepts for receiver and defender, grouped CV. Need cite paper lacks receiver contribution [PAGE 8]. Prediction: xYAC relationship partially persists but CPOE ADOE drops; ODOE sign flips? Hmm.
Need three "counterfactual veto scenarios + predictions": 
1. Leakage removal.
2. Circular angle correction.
3. Receiver/defense confounding control.
Maybe include weather omitted variable as fourth? Need exactly 3. Could include "weather/venue omission" as third instead of receiver? But cross-layer already. Need RLVR likely should be verifiable. Three scenarios can be:
- Recompute expected values with pre-throw-only covariates (exclude arrival covariates) -> predict ADOE-CPOE R² < 0.104 and SDOE-xYAC R² < 0.168; if not, leak not material.
- Circular orientation correction -> predict ODOE-CPOE R² changes and ODOE stability not improved; if original ODOE rankings unchanged, orientation wrap not material.
- Add receiver and defender random intercepts / grouped holdout -> predict SDOE-xYAC and ADOE-CPOE attenuate; if not, confound not material.
Need "RLVR" maybe "verifiable rewards" means need reward function? Could define reward = pass/fail of predictions based on rerun. But not necessary. Maybe mention "RLVR veto" as if an automatic evaluator. Need include "predictions" explicitly. Need no betting.

Need ensure >=1000 words. We can produce ~3000 words. Need exact XML sections. Need include only those sections? The prompt says ">=1,000-WORD DEPTH across these exact XML sections:" and lists. We should output those XML sections only, maybe with no extra preamble. Use proper XML tags. Need no markdown? Can use LaTeX inside. Need ensure tags closed. Need word count >1000. We can include all.

Need be very careful with "ZERO BETTING LINES": Do not mention odds. Avoid "betting", "wager", "line", "spread", "total", "moneyline". The word "line" might appear in "lineage" or "line of scrimmage"? Avoid "line" alone? It says never mention spreads, totals, moneylines, or odds. "line" in lineage okay? To be safe, avoid "line" unless "lineage" required by section name. Section name includes RETROCAUSAL_GENEALOGY no line. We can use "lineage" but not "betting line". "Totals" maybe word "total" appears? Avoid. "odds" avoid. "probability" okay. "spread" as verb? Avoid. Good.

Need "No toy equations": We should not invent fake ratios. Use real equations from paper and standard math. The finite difference noise formula is real. The omitted variable bias formula is real. The angular correction is real. Random intercepts model equation real. XGBoost generic? Could avoid exact objective. Use "unspecified in paper" if needed.

Need "exact singularity/breakdown regimes": Use phrases "singularity/breakdown regime" and exact conditions. Need include in SOURCE_OPERATORS_AND_EQUATIONS and maybe other sections. Let's plan content.

Detailed THINK_TRACE:
- Start: task is audit of paper's inferential chain: tracking frames -> in-stride differences -> expected models -> residuals -> QB aggregates -> outcome correlations -> stability. 
- Step 1: Construct definitions. \(t_f\), \(t_a\). OD/AD/SD. ODOE etc. 
- Step 2: Expected models. XGBoost. Critical: predictors include arrival state [PAGE 2]. Because target includes arrival value, this is algebraically entangled. If \(D=a_f-a_a\) and \(a_a\) is feature, model learns \(D\) partly from \(a_a\). Residual \(D-\hat{xAD}\) is not a pure "QB in-stride" signal; it conditions on outcome state. This is gray-zone. 
- Step 3: Aggregation. Mean by QB, n>=150. With n 150-600 [PAGE 5], sampling error. R² 0.104 etc. Need consider multiple comparisons: 3 metrics x 3 outcomes = 9 correlations, plus stability. Some R² could arise by chance; no CIs reported. 
- Step 4: Contradictions: dataset 2018 [PAGE 1] vs 2020 [PAGE 7]; Figure 7 caption 0.055 vs text 0.104; Figure 5 caption 0.056 vs text 0.013. These are reproducibility audit issues. 
- Step 5: Causal claim. "evidence that quarterbacks do have some ability" [PAGE 1] vs observational correlations. Receiver/defense/scheme confounds acknowledged [PAGE 8]. Need no causal overreach. 
- Step 6: Cross-layer vetoes: orientation circularity, acceleration derivative noise, weather omitted, random intercept defense. 
- Step 7: Verdict: paper is a useful exploratory baseline; strongest defensible claim is SDOE-xYAC association and within-season ADOE/SDOE stability under stated model; CPOE/ADOE causal claim needs leakage/confound audit. 
Need >=400 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
- Include "Source operator inventory" maybe bullets. Use [PAGE]. Need exact quotes.
- Equations with units and assumptions.
- Breakdown regimes section.
Need be concise but thorough.

Let's draft.

Potential issue: orientation units. NFL tracking orientation likely degrees? Paper doesn't specify. We can say "angular units (deg or rad; paper does not state unit)" [PAGE 2]. Speed in yards/s; acceleration in yards/s². Paper doesn't state units either, but NFL tracking usually. We can state "tracking feed units; conventionally yd, yd/s, yd/s²" and "paper does not state units." Need not overclaim. Use "source does not specify units; dimensional placeholders are ..." Hmm formal. We can state "Assuming NFL tracking native units (yards, yards/s, yards/s²; orientation angular)." That's assumption. Good.

Need include "exact singularity/breakdown regimes":
- \( \theta_f - \theta_a = \pm \pi\) or wrap boundary: non-differentiable absolute and circular discontinuity.
- \(t_a-t_f=0\): no interval; differences undefined. If \(t_a<t_f\) sign error.
- \(n_q<2\): correlation undefined; \(n_q\ge150\) threshold but variance \(\propto 1/n_q\).
- \(\mathrm{Var}(\bar{M}_q)=0\): correlation undefined.
- \(\hat{CP}\in\{0,1\}\): CPOE variance zero and R² undefined.
- XGBoost leaf saturation: no extrapolation.
- Random intercept group size 1: shrinkage collapses to global mean.
- Acceleration finite difference \(\Delta t\to0\): noise amplification \(\sigma_a^2=6\sigma_x^2/\Delta t^4\).
- Weather omitted: if \(\gamma\ne0\) and \(\operatorname{Cov}(QB,W)\ne0\).
Need include.

RETROCAUSAL_GENEALOGY:
- History: box score -> play-by-play -> tracking -> expected metrics. CPOE, EPA. Big Data Bowl public data. XGBoost. Random intercepts. Computer vision.
- Retro-causal: current metric "in-stride" retroactively reinterprets older "accuracy" as residual of expected movement. The paper's lineage from expected-value modeling (xYAC, xCP) and tracking data. 
- Multi-week traps: within-season split [PAGE 7] not season-to-season; schedule/weather/injuries; early-season calibration; receiver roster stability; model drift; use multi-week holdouts and grouped CV. 
- Need not mention betting. Good.

RECURSIVE_THEORY_OF_MIND:
- Need address "crisis habit regression vs counter-trap vs clock". We can phrase:
  - Crisis habit regression: Under noisy tracking and small n, analyst regresses to CPOE/YACOE; QB under pressure regresses to checkdown/back-shoulder; coach regresses to completion percentage. The paper's own limitation says accuracy metrics cannot be analyzed in a vacuum [PAGE 8].
  - Counter-trap: The expected model includes arrival-state covariates [PAGE 2], so analyst may recursively infer "QB caused arrival state" while model already conditioned on arrival state; this is counter-trap. Correct counterfactual must use only pre-throw information set \(\mathcal{F}_{t_f}\). Formal: \(\mathbb{E}[D\mid \mathcal{F}_{t_f}]\) vs \(\mathbb{E}[D\mid \mathcal{F}_{t_a}]\). If using \(t_a\), residual is not QB skill.
  - Clock: pass-forward to arrival interval; orientation continuous; paper says pass-forward may not be inflection [PAGE 8]. The "clock" should be continuous-time functional data, not two-point difference. Within-season split [PAGE 7] is a clock trap: early/late season not exchangeable. 
Need maybe include recursive ToM of QB/receiver/defender: QB models receiver's future acceleration; receiver models ball arrival; defender models QB; analyst models QB. The expected model with arrival state collapses these nested expectations. Good.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: tracking position continuity; acceleration limits; finite difference noise. Veto if jerk/accel exceed plausible or missing frames.
- Biomechanical: orientation changes due to route cuts; OD not pure QB accuracy; acceleration difference includes receiver braking/cutting. Need cite paper: "Receiver will turn and slow down" [PAGE 5] but also receiver can pivot [PAGE 6]. 
- Weather: source variables omit weather [PAGE 2]; omitted variable bias formula; veto causal claims if weather correlates with QB schedule. 
- Adjudication: Physical veto is strongest for OD/AD/SD if unsmoothed; biomechanical veto is strongest for ODOE/ADOE interpretation; weather veto is strongest for CPOE/xYAC. Need "proof" with equations. Good.

RLVR_COUNTERFACTUAL_VETOES:
- Need 3 scenarios. Use explicit predictions.
Scenario 1: "Leakage-removal veto". Recompute xAD/xSD/xOD using only pre-throw covariates \(\mathcal{F}_{t_f}\), excluding arrival acceleration/speed/orientation/direction/(x,y). Prediction: reported ADOE-CPOE R²=0.104 [PAGE 6] attenuates; SDOE-xYAC R²=0.168 [PAGE 6] attenuates; if attenuation <0.02 absolute, leakage not material. Veto if >0.05 absolute or rank correlation <0.8. Need not use too many thresholds? It's a decision rule. Good.
Scenario 2: "Circular orientation veto". Recompute OD with \(\operatorname{atan2}\) wrap. Prediction: ODOE-CPOE R²=0.019 [PAGE 6] is unstable and may change sign; ODOE stability remains non-significant [PAGE 7]. Veto original ODOE if >5% of plays cross wrap and rank correlation <0.9. Hmm 5% invented. But as verifiable prediction. Fine.
Scenario 3: "Receiver/defense confounding veto". Fit mixed model with random intercepts for receiver and defender, or grouped holdout by receiver. Prediction: SDOE-xYAC and ADOE-CPOE attenuate; if SDOE-xYAC remains >0.10 and ADOE-CPOE >0.05 after controls, association survives. Veto causal QB-skill claim if attenuation >50%. Need cite [PAGE 8] lacks receiver contribution. Good.

Need maybe mention "RLVR" as "verifiable reward" not necessary. But include "RLVR-style verifier" maybe.

Need ensure all XML tags exact and closed. Use no markdown headings outside tags? It's okay.

Need word count. Let's estimate: THINK ~700, SOURCE ~800, RETRO ~350, RECURSIVE ~350, CROSS ~450, RLVR ~350 = 3000. Good.

Need include exact quotes with [PAGE N]. Verbatim quotes must be exact. Need preserve curly apostrophes? We can use straight or curly? "verbatim" exact. Use quotes as in source. Need check exactness:
- "This ‘ability’ is defined here as the quarterback’s skill in preventing extreme orientation, acceleration, and speed changes for the receiver (i.e. back-shoulder catches), from the moment of the throw to the moment the pass arrives at the receiver." Yes.
- "The main findings in this paper are: 1) the aggregated (by QB) observed-expected values for receiver Acceleration Difference Over Expected correlate moderately with average Completion Probability Over Expected (CPOE), 2) Average (by QB) receiver Speed Difference Over Expected and Yards After Catch difference from pass forward to pass arrival (xYAC Difference) are highly correlated, and 3) average Acceleration and Speed differences Over Expected are stable for QBs within-season." Yes.
- Page 2: "Orientation Difference (OD) = | Orientation at Pass Forward - Orientation at Pass Arrival |" exact? Source has spaces. Good.
- "Expected values for each tracking variable (xOD, xAD, xSD) are calculated using eXtreme Gradient Boosted models." Yes.
- "The variables in each model include distances and differences in movement between the receiver and the two nearest defenders, angle and down-field distance of the receiver to the QB, the route of the target receiver, and the orientation, speed, acceleration, direction, and (x,y) location of the target receiver at the point of pass-arrival." Yes.
- Page 3: "YAC Over Expected (YACOE) = YAC - Expected YAC"; "xYAC Difference = Expected YAC (pass-forward) - Expected YAC (pass-arrival)"; "Completion Percentage Over Expected (CPOE) = Completion Percentage - Expected Completion Percentage". Yes.
- "The xYAC (pass-arrival) model is defense-adjusted using random intercepts to attempt to account for any effect of defensive play between pass-forward and pass-arrival." Yes.
- Page 5: "At best, there might be some effect of ADOE on YACOE but the R2 is only 0.013, meaning only 1.3% of the variability in YACOE can be attributed to the variability in ADOE." Exact? Source: "At best, there might be some effect of ADOE on YACOE but the R2 is only 0.013, meaning only 1.3% of the variability in YACOE can be attributed to the variability in ADOE." Yes.
- Page 5 caption: "Speed has the strongest effect with an R2 of 0.056" exact? Source: "Speed has the strongest effect with an R2 of 0.056". Yes.
- Page 6: "SDOE has a strong relationship with xYAC difference with and R2 of 0.168." Source has typo "with and". Use exact.
- Page 6: "Acceleration Difference Over Expected has the strongest correlation with an R2 of 0.104." Yes.
- Page 6: "SDOE vs. CPOE has an R2 of 0.017 and ODOE vs. CPOE has an R2 of only 0.019." Yes.
- Page 7: "Acceleration and Speed Differences Over Expected had within-season correlations (R2) of 0.208 and 0.209 respectively." Yes.
- Page 7: "Orientation Difference Over Expected does not appear stable within-season." Yes.
- Page 7: "In this case, I only had access to data from the 2020 season so I compared QB aggregates for weeks 1-8 to weeks 9-17." Yes.
- Page 1: "dataset (which includes data from the 2018 NFL season)" exact? Source: "2021 NFL Big Data Bowl dataset (which includes data from the 2018 NFL season)". Good.
- Page 7 fig caption: "Acceleration has the strongest effect with an R2 of 0.055" exact? Source: "Acceleration has the strongest effect with an R2 of 0.055". Yes.
- Page 8: "lacks an evaluation of the contribution of receivers to in-stride metrics" exact? Source: "This analysis also lacks an evaluation of the contribution of receivers to in-stride metrics." Good.
- Page 8: "limited sample size" exact? Source: "The last, and most obvious, shortcoming of this analysis is the limited sample size." Good.
- Page 8: "difficult to say that the point of pass-forward is the major inflection point for the receiver’s orientation." exact? Source: "as it is difficult to say that the point of pass-forward is the major inflection point for the receiver’s orientation." Good.
- Page 8: "accuracy metrics in general cannot be analyzed in a vacuum." exact? Source: "Therefore, accuracy metrics in general cannot be analyzed in a vacuum." Good.

Need maybe include "completion probability over expected" vs "completion percentage" inconsistency. Abstract says Completion Probability Over Expected (CPOE). Later Completion Percentage Over Expected. Use source.

Need produce "FORMAL LATEX" equations. Use display math \(...\). Need avoid XML parsing issues? Ampersands? Use \&? Not needed. Use < and >? XML text can include < causing issues. Avoid raw < or > in text, use words or \lt. Use \(n_q \ge 150\) okay. Use \(\operatorname{Corr}^2\). Use \mathrm. Use \theta. XML tags fine with LaTeX.

Need maybe include "Observed–expected decomposition operator" as source operator. Good.

Need mention "random intercepts" equation:
\(Y_{ij} = \mathbf{x}_{ij}^\top \beta + u_j + \epsilon_{ij}\), \(u_j\sim N(0,\sigma_u^2)\), \(\epsilon_{ij}\sim N(0,\sigma_\epsilon^2)\). Units yards for YAC. [PAGE 3]. Breakdown if group size small or \(u_j\) correlated with predictors. This is real.

Need mention XGBoost operator:
\(\hat{y}(\mathbf{x}) = \sum_{k=1}^K f_k(\mathbf{x})\), \(f_k\) regression trees; no extrapolation. Paper doesn't specify hyperparameters. Need cite [PAGE 2]. Assumption: additive tree model approximates conditional expectation. Breakdown outside training support. Good.

Need maybe include "correlation operator":
\(R^2_{M,O} = [\operatorname{Corr}(\bar{M}_q,\bar{O}_q)]^2\) for QB aggregates \(q\). But paper reports R², not r. Need note if they used \(R^2\) from linear regression with one predictor, equals squared correlation. For multiple? They are scatter plots. Good. Units dimensionless. Breakdown if outliers, nonlinearity, heteroscedasticity, range restriction. Good.

Need maybe include "stability operator":
\(R^2_{M,\text{split}} = [\operatorname{Corr}(\bar{M}_{q,1:8},\bar{M}_{q,9:17})]^2\). Dimensionless. [PAGE 7]. Breakdown if half-season rosters/schedules differ.

Need "exact singularity/breakdown regimes" perhaps list in SOURCE. Good.

Need "Cross-layer veto adjudication physical/biomechanical/weather veto proof" include equations:
- Finite difference acceleration: \(a_i(t) \approx [x_i(t+\Delta t)-2x_i(t)+x_i(t-\Delta t)]/\Delta t^2\). If position error independent with variance \(\sigma_x^2\), \(\operatorname{Var}(\hat a_i)\approx 6\sigma_x^2/\Delta t^4\). If \(\Delta t\to0\), variance diverges. Veto if \(\sigma_a\) comparable to observed AD. Units yd/s². This is formal. Good.
- Weather omitted variable: \(M_{i}=\alpha+\beta\,QB_{q(i)}+\gamma W_i+\eta_i\). Omitted \(W\): \(\hat\beta \to \beta+\gamma \operatorname{Cov}(QB,W)/\operatorname{Var}(QB)\). If \(\gamma\ne0\) and Cov≠0, causal veto. Weather not in source predictors [PAGE 2]. Good.
- Biomechanical: \(\mathrm{AD}_i = a(t_f)-a(t_a)\) conflates QB-induced lead with receiver braking/cutting; if \(a(t_a)=a_{\text{QB-lead}}+a_{\text{route}}\), then ADOE contains route term. Not fake; define decomposition. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe include formal information sets:
\(\mathcal{F}_{t_f}\) pre-throw info; \(\mathcal{F}_{t_a}\) arrival info. Correct QB skill residual: \(D_i - \mathbb{E}[D_i\mid \mathcal{F}_{t_f}]\). Paper's expected model includes \(\mathcal{F}_{t_a}\) variables [PAGE 2], so \(\mathbb{E}[D_i\mid \mathcal{F}_{t_f},\mathcal{F}_{t_a}]\). If \(D_i\) contains \(X(t_a)\), residual not orthogonal. This is precise.

Need "crisis habit regression vs counter-trap vs clock" exact terms. We can use headings inside section? Fine. Need maybe define:
- Crisis habit regression: under uncertainty, analyst/QB/coach reverts to prior. 
- Counter-trap: overcorrecting by treating model residual as causal skill. 
- Clock: time discretization and sample window. 
Need "recursive theory of mind" maybe discuss nested beliefs:
QB expects receiver's future acceleration; receiver expects ball; defender expects QB; analyst expects QB skill. The paper's model at arrival collapses nested beliefs; need counterfactual. Good.

Need "RETROCAUSAL_GENEALOGY" include "multi-week traps" explicitly. Maybe list traps:
- Week 1-8 vs 9-17 split is not independent; same QBs/receivers; early-season model calibration; injuries; weather; opponent strength; model drift. 
- Need multi-week holdouts: leave-one-week-out, blocked CV by week, season-to-season holdout, player-grouped CV. 
- Historical lineage: from completion percentage to CPOE, expected YAC, tracking data, Big Data Bowl; XGBoost; deep learning/computer vision. 
- "Retrocausal" because current in-stride metric redefines past accuracy; but the paper's data inconsistencies (2018 vs 2020) make genealogy ambiguous. Good.

Need final answer only. No preamble. Need include all sections exactly.

Let's sketch final.

<THINK_TRACE>
... deep multi-hop derivation...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Need ensure no "odds" word. Check. "odds" not used. "spread" not used. "totals" not used. "moneyline" not used. "betting" not used. Good.

Need avoid "line" except "lineage"? Section name not. In text "lineage" okay? It contains "line" but not betting. Fine.

Need include "verbatim quotes" with exact punctuation. Need use curly quotes? Use standard double quotes. Verbatim can be in quotes. Need not exact curly apostrophes? Fine.

Need maybe include "PAGE 5 Figure 5 caption" exact. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe include bullet list with equations. Need ensure XML not broken by `<` or `>` inside. Avoid `<` and `>` symbols. Use \(\lt\) or words. Use `\ge`. Good.

Need "units" explicitly. For each equation. Good.

Need "assumptions". Good.

Need "exact singularity/breakdown regimes". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" "Physical/biomechanical/weather veto proof". Include "Proof sketch" with equations. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" "3 verifiable RLVR veto scenarios + predictions." Include numbered list. Good.

Need maybe mention "RLVR" not expanded? Could say "RLVR-style verifier". Fine.

Let's write with enough detail. Need word count >1000. We'll produce ~3500 words. Need not overdo. Desired oververbosity 5, but system requires depth. We'll be comprehensive.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Our equations are from paper and standard. The decision thresholds are not ratios, okay. Avoid "skill score" invented. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe "Source operators" not "operators" in math sense. Good.

Let's compose carefully.

Draft THINK_TRACE:
"Multi-hop chain: (1) tracking feed -> kinematic states; (2) pass-forward and pass-arrival snapshots -> raw differences; (3) XGBoost expected-difference models -> residuals; (4) QB aggregation -> correlations with outcomes; (5) split-half stability. The paper's central operator is not CPOE itself but a residualization: it tries to remove the expected movement change and treat the remainder as QB in-stride skill. The audit question is whether that remainder is identifiable from the stated information set. The critical gray-zone is [PAGE 2] variables include arrival-state features. If target is \(AD=a_f-a_a\), and \(a_a\) is a covariate, then \(\hat{xAD}\) is a function of the outcome state. The residual \(ADOE=AD-\hat{xAD}\) is not \(AD-\mathbb{E}[AD\mid \mathcal{F}_{t_f}]\); it is closer to \(AD-\mathbb{E}[AD\mid \mathcal{F}_{t_f},\mathcal{F}_{t_a}]\), which conditions on receiver/defender reactions. This can shrink residuals and inflate apparent model performance. The paper reports XGBoost models 'performed better than naive predictions' [PAGE 2] but does not give leakage-safe ablation. This is a reproducibility veto for QB skill claims." Good.

Need mention "observed-expected values for receiver Acceleration Difference Over Expected correlate moderately with CPOE" [PAGE 1] but actual R² 0.104 [PAGE 6] is "moderate"? R² 0.104 = r ~0.322, moderate. Good.

Need mention "SDOE vs xYAC R² 0.168" r ~0.41. Good.

Need mention "YACOE no relationship, ADOE R² 0.013 but caption says speed 0.056" contradiction. Good.

Need "data version contradiction" maybe in THINK.

Need "inference from R²" small n. The paper says 150-600 passes [PAGE 5]. With 32 QBs, R² standard error large. Need maybe formula for Fisher z? Could include but not necessary. We can mention \(SE(r)\approx 1/\sqrt{N-3}\) for correlation; with N~32, SE~0.19. This is real. Is that a toy equation? No, standard Fisher z. But we can include to show. \(N\) QBs. If N=32, \(SE(z)=1/\sqrt{29}\approx0.186\). Good. But maybe not necessary. Could include in SOURCE. Good.

Need "exact singularity/breakdown regimes" includes \(N\le3\) correlation undefined? Actually correlation with N<2 undefined; Fisher z needs N>3. But paper uses N QBs. We can say if number of QBs \(N_q\le2\), correlation undefined; with \(N_q\) small, CI wide. Good.

Need "CROSS_LAYER" include "weather not in source variables" [PAGE 2]. Good.

Need "RECURSIVE" include "clock" maybe "within-season split is a clock operator". Good.

Let's now write final. Need ensure all tags closed. Use no markdown maybe but equations okay. Need if using `<` in text? Avoid. Use "less than" etc. Use \(\le\). Fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inference chain is: frame-level tracking observations at pass-forward and pass-arrival produce raw movement differences; an XGBoost model produces an expected movement difference; the residual is treated as quarterback “in-stride” skill; QB-level means are then correlated with outcome residuals and split-half stability. The central audit question is whether the residual is a valid conditional expectation under the QB’s pre-throw information set. The paper defines the target as “the quarterback’s skill in preventing extreme orientation, acceleration, and speed changes for the receiver … from the moment of the throw to the moment the pass arrives at the receiver” [PAGE 1]. That is a counterfactual skill claim: what movement change would not have occurred but for the throw. The paper operationalizes it as observed-minus-expected differences, but the expected models are only as valid as their covariates. A critical gray-zone appears on [PAGE 2]: “The variables in each model include … the orientation, speed, acceleration, direction, and (x,y) location of the target receiver at the point of pass-arrival.” If the target for acceleration is \(AD=a(t_f)-a(t_a)\), and \(a(t_a)\) is itself a predictor, then the model is not estimating \(\mathbb{E}[AD\mid \mathcal{F}_{t_f}]\); it is estimating something closer to \(\mathbb{E}[AD\mid \mathcal{F}_{t_f},\mathcal{F}_{t_a}]\), where \(\mathcal{F}_{t_a}\) contains post-throw receiver and defender reactions. Because the target contains \(-a(t_a)\) algebraically, this is a target-leakage/entanglement regime. The residual \(ADOE=AD-\hat{xAD}\) may then absorb arrival-state information rather than QB skill. The same concern applies to \(SD=s(t_f)-s(t_a)\) and \(OD=|\theta(t_f)-\theta(t_a)|\) when arrival-state speed, acceleration, orientation, direction, or location are in the feature set. The paper reports that all three models “performed better than the naive predictions” [PAGE 2], but no leakage-safe ablation is reported. This is a reproducibility veto for the strongest QB-skill interpretation.

The second multi-hop issue is aggregation. The paper aggregates residuals by quarterback and includes QBs with “a minimum of 150 passes” [PAGE 5], with some QBs between “150 and 600 passes” [PAGE 5]. A QB mean is a noisy estimate; the standard error of a mean scales as \(\sigma/\sqrt{n_q}\), and a correlation across roughly one QB cohort has wide uncertainty even when the point \(R^2\) is nonzero. The paper’s main claims are \(R^2=0.104\) for ADOE versus CPOE [PAGE 6], \(R^2=0.168\) for SDOE versus xYAC Difference [PAGE 6], and within-season \(R^2=0.208\) and \(0.209\) for ADOE and SDOE [PAGE 7]. These are not huge effects. Some are presented as “moderate” or “strong,” but the paper does not report confidence intervals, multiple-comparison control, or leave-one-QB-out stability. The YACOE section is especially gray: the text says “At best, there might be some effect of ADOE on YACOE but the R2 is only 0.013” [PAGE 5], while the Figure 5 caption says “Speed has the strongest effect with an R2 of 0.056” [PAGE 5]. That is not a small typo; it changes which metric is claimed to matter. Similarly, the CPOE text says “Acceleration Difference Over Expected has the strongest correlation with an R2 of 0.104” [PAGE 6], while the Figure 7 caption says “Acceleration has the strongest effect with an R2 of 0.055” [PAGE 7]. These internal inconsistencies force a conservative reading.

The third issue is data-version provenance. [PAGE 1] describes the “2021 NFL Big Data Bowl dataset (which includes data from the 2018 NFL season),” while [PAGE 7] says “In this case, I only had access to data from the 2020 season so I compared QB aggregates for weeks 1-8 to weeks 9-17.” A 2018-versus-2020 contradiction is a source-level reproducibility singularity: if the season is misstated, roster composition, schedule, and model training distribution are ambiguous. The paper’s own limitations acknowledge that “accuracy metrics in general cannot be analyzed in a vacuum” [PAGE 8], that the analysis “lacks an evaluation of the contribution of receivers to in-stride metrics” [PAGE 8], and that the sample is limited [PAGE 8]. Those admissions are important because the model’s residual is a joint product of QB, receiver, defender, scheme, tracking error, and weather/venue. The defensible conclusion is therefore narrower than “quarterbacks do have some ability” [PAGE 1]: the paper provides exploratory evidence of association under its stated model, with the strongest reproducible association being SDOE versus xYAC Difference, and with ADOE/SDOE showing some within-season persistence. The causal QB-skill claim requires leakage removal, circular-angle correction, receiver/defender controls, and external-season validation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s core operator is an observed-minus-expected residualization applied to frame-level kinematic changes. The paper defines the raw differences as follows [PAGE 2]:

\[
\mathrm{OD}_{i}=\left|\theta_i(t_f)-\theta_i(t_a)\right|,
\qquad
\mathrm{ODOE}_{i}=\left|\mathrm{OD}_{i}-\widehat{xOD}_{i}\right|,
\]

\[
\mathrm{AD}_{i}=a_i(t_f)-a_i(t_a),
\qquad
\mathrm{ADOE}_{i}=\mathrm{AD}_{i}-\widehat{xAD}_{i},
\]

\[
\mathrm{SD}_{i}=s_i(t_f)-s_i(t_a),
\qquad
\mathrm{SDOE}_{i}=\mathrm{SD}_{i}-\widehat{xSD}_{i}.
\]

Here \(t_f\) is pass-forward and \(t_a\) is pass-arrival; \(\theta_i\) is receiver orientation in angular units, \(s_i\) is speed in yards per second, and \(a_i\) is acceleration in yards per second squared under the conventional NFL tracking convention. The paper does not state the tracking-feed units explicitly, so the dimensional assignment is an assumption; the equations themselves are verbatim from [PAGE 2]. The expected values \(\widehat{xOD}\), \(\widehat{xAD}\), and \(\widehat{xSD}\) are “calculated using eXtreme Gradient Boosted models” [PAGE 2]. The feature list includes “distances and differences in movement between the receiver and the two nearest defenders, angle and down-field distance of the receiver to the QB, the route of the target receiver, and the orientation, speed, acceleration, direction, and (x,y) location of the target receiver at the point of pass-arrival” [PAGE 2]. That arrival-state feature inclusion is the main formal breakdown risk: if the target contains \(X(t_a)\) and the covariate set includes \(X(t_a)\), the residual is not a clean \(\mathcal{F}_{t_f}\)-conditional expectation.

The outcome operators are [PAGE 3]:

\[
\mathrm{YACOE}_{i}=\mathrm{YAC}_{i}-\widehat{\mathrm{YAC}}_{i},
\]

\[
\Delta xYAC_{i}=\widehat{\mathrm{YAC}}_{i}(t_f)-\widehat{\mathrm{YAC}}_{i}(t_a),
\]

\[
\mathrm{CPOE}_{i}=\mathrm{CP}_{i}-\widehat{\mathrm{CP}}_{i}.
\]

YAC and xYAC are in yards; CP and xCP are probabilities in \([0,1]\), so CPOE is dimensionless probability error. The paper states: “The xYAC (pass-arrival) model is defense-adjusted using random intercepts to attempt to account for any effect of defensive play between pass-forward and pass-arrival” [PAGE 3]. A standard random-intercept form is

\[
Y_{ij}=\mathbf{x}_{ij}^{\top}\beta+u_j+\epsilon_{ij},
\qquad
u_j\sim\mathcal{N}(0,\sigma_u^2),
\qquad
\epsilon_{ij}\sim\mathcal{N}(0,\sigma_\epsilon^2),
\]

where \(j\) indexes the defensive grouping and \(Y_{ij}\) is expected YAC in yards. This model assumes exchangeability of defenses conditional on covariates; it breaks if defenders are not exchangeable, if group sizes are tiny, or if defensive identity is correlated with QB schedule.

The QB aggregation operator is

\[
\bar{M}_{q}=\frac{1}{n_q}\sum_{i\in q}M_i,
\qquad
n_q\ge 150,
\]

where \(M_i\in\{\mathrm{ODOE}_i,\mathrm{ADOE}_i,\mathrm{SDOE}_i,\mathrm{YACOE}_i,\Delta xYAC_i,\mathrm{CPOE}_i\}\), \(q\) indexes quarterback, and \(n_q\) is pass count. The paper reports QB-level scatter relationships as \(R^2\), for example “SDOE has a strong relationship with xYAC difference with and R2 of 0.168” [PAGE 6] and “Acceleration Difference Over Expected has the strongest correlation with an R2 of 0.104” [PAGE 6]. For a single-predictor linear relationship, \(R^2=[\operatorname{Corr}(\bar{M}_q,\bar{O}_q)]^2\), dimensionless. The stability operator is

\[
R^2_{M,\mathrm{split}}
=
\left[
\operatorname{Corr}
\left(
\bar{M}_{q,1:8},
\bar{M}_{q,9:17}
\right)
\right]^2,
\]

as described by “within-season correlations (R2) of 0.208 and 0.209 respectively” for ADOE and SDOE [PAGE 7]. The paper states “Orientation Difference Over Expected does not appear stable within-season” [PAGE 7].

Exact singularity/breakdown regimes:
1. Angular wrap singularity: \(\mathrm{OD}=|\theta_f-\theta_a|\) is not a circular metric. At \(\theta_f=359^\circ\) and \(\theta_a=1^\circ\), the raw difference is \(358^\circ\), not \(2^\circ\). The wrap-corrected operator is \(\Delta\theta=\operatorname{atan2}(\sin(\theta_f-\theta_a),\cos(\theta_f-\theta_a))\), \(\mathrm{OD}=|\Delta\theta|\). The paper does not state a circular correction; this can invalidate ODOE near \(0/2\pi\) or \(\pm\pi\) boundaries.
2. Zero-interval singularity: if \(t_a=t_f\), all differences are zero and the residual is undefined as a movement-change measure. If \(t_a<t_f\), the sign convention reverses.
3. Acceleration-noise singularity: if acceleration is obtained by finite differencing position, \(a_i(t)\approx[x_i(t+\Delta t)-2x_i(t)+x_i(t-\Delta t)]/\Delta t^2\). For independent position noise variance \(\sigma_x^2\), \(\operatorname{Var}(\hat a_i)\approx 6\sigma_x^2/\Delta t^4\). As \(\Delta t\to0\), acceleration noise diverges; ADOE then measures tracking noise rather than QB skill. The paper does not report smoothing or sampling rate.
4. Small-group correlation breakdown: if the number of QBs is small, or if \(\operatorname{Var}(\bar{M}_q)=0\), the correlation and \(R^2\) are unstable or undefined. The reported \(R^2\) values do not include confidence intervals.
5. Probability-boundary breakdown: CPOE is bounded by \([-1,1]\) and has heteroscedastic variance near \(\widehat{CP}\in\{0,1\}\); ordinary linear \(R^2\) is then a poor summary. The paper does not report calibration or log-loss for xCP.
6. Tree-extrapolation breakdown: XGBoost is an additive tree ensemble \(\hat{y}(\mathbf{x})=\sum_{k=1}^{K}f_k(\mathbf{x})\); it does not extrapolate beyond training support. Novel routes, formations, or tracking artifacts collapse to nearest leaf values. The paper does not report out-of-support diagnostics.
7. Random-intercept breakdown: if a defensive group has size one, \(u_j\) is not identified separately from residual error; if defensive assignment is nonrandom across QBs, the defense adjustment is confounded.
8. Provenance breakdown: [PAGE 1] says the dataset “includes data from the 2018 NFL season,” while [PAGE 7] says “I only had access to data from the 2020 season.” This contradiction prevents exact reproduction without external clarification.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in the lineage from box-score quarterback evaluation to play-by-play expected metrics to frame-level tracking residuals. Earlier accuracy evaluation used completion percentage; later public models introduced Completion Percentage Over Expected (CPOE), and the paper explicitly notes that “most publicly available models for CPOE use situational variables such as down, yardline, and time remaining” [PAGE 1]. The tracking-data step changes the object of evaluation: instead of evaluating only the pass outcome, the analyst evaluates the receiver’s kinematic response between pass-forward and pass-arrival. This is a retrocausal reinterpretation: the present tracking metric redefines past “accuracy” as the residual of expected movement change. The lineage is also methodological: expected-value residualization, XGBoost, random intercepts, and later computer-vision/deep-learning proposals. The paper itself points forward: “Using deep learning methods and computer vision techniques to evaluate the spatial and temporal aspects of game-play has proven to be more effective in creating metrics from tracking data” [PAGE 8]. That genealogy matters because the two-point difference operator is a coarse ancestor of continuous-time pose/trajectory modeling; the paper’s own limitation says “it is difficult to say that the point of pass-forward is the major inflection point for the receiver’s orientation” [PAGE 8].

The multi-week trap is that within-season split-half stability is not season-to-season stability. The paper compares “weeks 1-8 to weeks 9-17” [PAGE 7] and reports ADOE/SDOE \(R^2\) values of 0.208 and 0.209 [PAGE 7]. But weeks are not exchangeable: early-season tracking calibration, roster turnover, injuries, weather transitions, bye-week rest, opponent composition, and play-calling drift can all inflate or deflate split-half correlation. The paper itself notes that “even the best and most stable metrics correlate from season to season with an R2 between 0.3 and 0.6” [PAGE 7], so a within-season \(R^2\) around 0.21 is weak evidence for durable QB skill. A multi-week validation should use blocked or leave-one-week-out cross-validation, player-grouped holdouts, and season-to-season transfer. The data-version contradiction between 2018 [PAGE 1] and 2020 [PAGE 7] is a genealogy break: without a fixed season, the historical lineage of the metric cannot be reproduced. The paper’s own caution that “accuracy metrics in general cannot be analyzed in a vacuum” [PAGE 8] is the correct lineage lesson: the metric is a joint product of QB, receiver, defender, scheme, and measurement regime.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure has four agents: quarterback, receiver, defender, and analyst. The QB forms a belief about the receiver’s future acceleration and orientation; the receiver forms a belief about ball arrival; the defender forms a belief about the QB’s target and release; the analyst forms a belief about the QB’s skill from the residual. The paper’s expected model, however, includes arrival-state features [PAGE 2], so the analyst’s model is allowed to “see” the receiver’s and defender’s realized reactions when forming the expectation. Formally, the QB-skill residual should be \(D_i-\mathbb{E}[D_i\mid\mathcal{F}_{t_f}]\), where \(\mathcal{F}_{t_f}\) is pre-throw information. The paper’s residual is closer to \(D_i-\mathbb{E}[D_i\mid\mathcal{F}_{t_f},\mathcal{F}_{t_a}]\). This is a counter-trap: an analyst may recursively infer “the QB caused the arrival state” while the model has already conditioned on that arrival state. The correct counterfactual must hold the post-throw information fixed and vary only the throw, which the current design does not fully identify.

Crisis habit regression appears at three levels. Under tracking noise and small QB samples, the analyst regresses to CPOE or YACOE because those are familiar and stable; the paper’s own conclusion falls back on CPOE as the external anchor. Under pressure, a QB may regress to back-shoulder or checkdown habits; the paper’s motivating example of “back-shoulder catches” [PAGE 1] is exactly a habit-like adjustment. A coach may regress to completion percentage when tracking metrics are ambiguous. The counter-trap is to overcorrect: because ADOE has \(R^2=0.104\) with CPOE [PAGE 6], one might rank QBs by ADOE as if it were a causal skill, ignoring the paper’s admission that it “lacks an evaluation of the contribution of receivers” [PAGE 8]. The clock is the \(t_a-t_f\) interval and the season window. The paper discretizes a continuous orientation process into two snapshots and admits that pass-forward may not be the major inflection point [PAGE 8]. The within-season split at weeks 1-8 versus 9-17 [PAGE 7] is a clock trap: the two halves are not independent draws. A better recursive design would model continuous-time beliefs, use pre-throw-only covariates, and validate on held-out weeks and held-out receivers.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: the kinematic layer can veto the metric if tracking noise dominates acceleration. Finite-difference acceleration has variance amplification \(\operatorname{Var}(\hat a)\approx 6\sigma_x^2/\Delta t^4\); if the sampling interval is short or position noise is nontrivial, ADOE can be a noise residual rather than a QB signal. The paper does not report smoothing, sampling rate, or measurement-error propagation, so the physical veto remains open. A physical continuity check should reject plays with implausible acceleration or jerk relative to the tracking vendor’s documented limits; without that check, ADOE and SDOE are not adjudicable at the play level.

Biomechanical veto: \(\mathrm{AD}_i=a_i(t_f)-a_i(t_a)\) and \(\mathrm{SD}_i=s_i(t_f)-s_i(t_a)\) conflate QB-induced lead with receiver braking, cutting, and route adjustment. The paper itself says a throw “arrives slightly behind the receiver will make them turn and slow down” [PAGE 5], but also that a good receiver “can quickly pivot and make the catch” [PAGE 6]. Thus a large orientation difference or acceleration difference can be receiver skill, defender leverage, or route design rather than QB inaccuracy. A biomechanical decomposition \(a(t_a)=a_{\mathrm{QB\text{-}lead}}+a_{\mathrm{route}}+a_{\mathrm{defender\text{-}forced}}\) is not identified by the paper’s covariates. This veto is strongest for ODOE and ADOE; it is weaker but still present for SDOE.

Weather veto: weather, wind, and surface are not listed among the model variables [PAGE 2]. If outcome \(M_i\) depends on weather \(W_i\), and QB assignment is correlated with weather exposure, the omitted-variable bias is

\[
M_i=\alpha+\beta\,\mathrm{QB}_{q(i)}+\gamma W_i+\eta_i,
\qquad
\widehat{\beta}\to
\beta+\gamma\frac{\operatorname{Cov}(\mathrm{QB},W)}{\operatorname{Var}(\mathrm{QB})}.
\]

If \(\gamma\neq0\) and \(\operatorname{Cov}(\mathrm{QB},W)\neq0\), the QB coefficient is biased. The source provides no weather controls, so weather is a causal-identification veto for the CPOE and xYAC claims, not necessarily for descriptive association. The correct adjudication is: physical veto blocks play-level ADOE/SDOE if tracking noise is unmodeled; biomechanical veto blocks QB-skill interpretation of movement residuals without receiver/route controls; weather veto blocks causal CPOE/xYAC attribution without venue and weather covariates. The paper’s own limitation that “accuracy metrics in general cannot be analyzed in a vacuum” [PAGE 8] supports this multi-layer veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Leakage-removal veto. Recompute \(\widehat{xAD}\), \(\widehat{xSD}\), and \(\widehat{xOD}\) using only pre-throw covariates \(\mathcal{F}_{t_f}\), excluding arrival-state acceleration, speed, orientation, direction, and \((x,y)\) location listed on [PAGE 2]. Prediction: the reported ADOE-CPOE \(R^2=0.104\) [PAGE
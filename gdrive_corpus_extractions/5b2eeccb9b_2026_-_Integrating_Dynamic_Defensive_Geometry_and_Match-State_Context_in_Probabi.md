---
source: "2026 - Integrating Dynamic Defensive Geometry and Match-State Context in Probabilistic Shot Quality Assessment An Advanced Expected Goals Modeling - Singh.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2026"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 7645
---

<NATIVE_REASONING>
We need answer to user prompt: They provide source PDF text pages 14. Need produce required XML sections, >=1000 words total, strict invariants: no betting lines etc. Need deep derivation, cite exact [PAGE N] markers and verbatim quotes. Need possibly address sports xG modeling, not betting. We need include formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Also retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios predictions. Need no odds/spreads/moneylines. Avoid fake ratios. Need perhaps mention source pages quotes.

Need interpret task: "DRIVE SOURCE..." They expect research synthesis/audit of paper. Need not create betting predictions. But "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof" can be in context of xG model feature validity, not betting. Need ensure zero betting lines. We can discuss model limitations, multicollinearity, calibration, singularities. Need cite exact page markers and verbatim quotes. Need formal equations with units. Need perhaps explain "xG" probability dimensionless but probability units [0,1], log-odds unit nats? SHAP values log-odds. Need formal equations for distance, angle, angular pressure, Brier, AUC maybe. Need mention StatsBomb pitch units / metres ambiguity. Need identify assumptions and breakdown regimes: distance to goal center equations; angle singularities when shot on goal line? Need derive. Need page quotes exact.

Need structure exactly XML sections. Need at least 1,000 words across sections, THINK_TRACE >=400 words. Need include all sections. Need avoid overly long? Desired oververbosity 5, but prompt demands >=1000 words. Need satisfy.

Need maybe mention source text has no actual equations except feature descriptions; our formal LaTeX can reconstruct. Need cite [PAGE 4] quotes: "For each defender within 5m, we compute the defender’s angular deviation from the shot-to-goal line. Defenders whose angle is within ±20° of the direct line contributing exp(-dist) to a pressure sum." Also "Distance (VIF = 18.6) and goalkeeper distance (VIF = 14.2) both exceeded the conventional cutoff of 10" [PAGE 5]. "AUC-ROC was 0.8776 and Brier score 0.0686" [PAGE 6]. "no additional probability-scaling (e.g. Platt) was applied beyond XGBoost’s native output" [PAGE 5]. "We did not exhaustively search hyperparameters" [PAGE 5]. "The cleaned dataset comprises ~87,000 shots (with ≈11% goals) and ~1.1M freeze-frame points" [PAGE 3]. "The app constructs a one-row DataFrame..." [PAGE 6]. "goal_difference ranks highest" [PAGE 8]. "mean_abs_SHAP... goal_difference 31.03%, angle 24.30%, angular_pressure 9.52%, gk_distance 9.40%, distance 8.69%" [PAGE 10]. Need cite exact [PAGE N]. Use verbatim quotes in quotes.

Need discuss "AUC ≈ 0.878" but source says "considerably greater than any existing industry standard xG-model" [PAGE 6] maybe overclaim. Need audit. Need mention calibration R² 0.98 but no Platt. Brier baseline? For 11% goals, constant predictor Brier = p(1-p) ~0.0979 if p=0.11; model 0.0686 improvement but not huge. Need compute? We can state. Need perhaps not overcomplicate. Need formal.

Need "RLVR_COUNTERFACTUAL_VETOES" likely means reinforcement learning with verifiable rewards? Need 3 verifiable veto scenarios + predictions. In xG context: scenario 1 re-run with distance or gk_distance removed/decorrelated; predict AUC drop? We need make verifiable predictions based on source. Scenario 2 angular pressure threshold sensitivity: ±20° and 5m radius; if vary radius/angle, calibration / SHAP. Scenario 3 match-state leakage: goal_difference computed from running score before shot; need verify no post-shot leakage; if residualized? The paper did residualization. Need predictions with metrics. Could specify exact expected: permutation importance mean AUC drops from paper: distance 0.032, gk_distance 0.037, angle 0.103 [PAGE 5]. We can set RLVR veto: If a model variant with goal_difference removed has AUC not lower? But not given. Need "verifiable" scenarios and predictions—we can propose audits and predicted outcomes from paper: e.g., if freezing angular pressure with ±20° and 5 m, SHAP sign should remain negative; if not, veto. Need 3.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof" We can frame xG features must be vetoed if physical/biomechanical/weather conditions invalidate assumptions. Need proof: freeze-frame is static; cannot capture defender closing speed, goalkeeper orientation, shot biomechanics, wind. The paper itself says "richer tracking data (player positions over time) could enable even more precise pressure metrics" [PAGE 11]. Need weather missing; physical veto: no weather data, no surface, no ball flight; thus model cannot adjudicate wind/rain. Need state "physical/biomechanical/weather veto proof" maybe prove that these layers are not in feature set and thus any claims about them are vetoed. Need use formal equations? We can propose wind-adjusted shot probability? But no fake ratios. Need formal LaTeX for shot velocity? Could state unavailable variables. Need not invent. We can state no evidence in source for weather features, so cross-layer veto: model cannot accept weather/biomech claims; only geometry and freeze-frame proxies. Need "proof" via source absence + assumptions. Need cite [PAGE 4] freeze-frame, [PAGE 11] tracking data limitation, [PAGE 12] limitations. Need mention no weather variables in Tables 2/3 [PAGE 9-10]. Need maybe use quote "we rely on event data; richer tracking data (player positions over time) could enable even more precise pressure metrics" [PAGE 11]. That supports.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need trace from xG literature: Mead et al. 2023, Fu 2024, Iapteff 2025, Anzer & Bauer 2021, Davis & Robberechts 2024? Source references list includes Mead, Fu, Iapteff, Fryer, Arenas, Umami, Scholtes, Fernández, Lee, StatsBomb, Mobambas. Need mention lineage of expected goals: distance/angle → context/defensive geometry → calibration/SHAP → deployment. "Multi-week traps": overfitting to StatsBomb, multicollinearity, SHAP conditional independence, calibration curve binning, 5m/20° arbitrary thresholds, goal_difference endogeneity, overclaim AUC. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. This is odd. Need adapt: recursive theory of mind in sports analytics: analysts/coaches/players adapt to model; crisis habit regression (reverting to distance/angle only under pressure), counter-trap (overfitting to defensive pressure proxies), clock (late-game state). Need discuss match-state context: goal_difference top SHAP; minute moderate; teams trailing take riskier shots. Need mention recursive loop: model predicts xG, coaches act, players alter shot selection, data distribution shifts; xG is not causal. Need "crisis habit regression vs counter-trap vs clock": In high-pressure match states, model may regress to geometry; counter-trap is treating angular_pressure as causal; clock is minute/end-game. Need cite [PAGE 2] "trailing teams may take riskier shots" maybe page 3? Quote "goal_difference (shooting team’s score minus opponent’s) and its absolute value indicates game state pressure (e.g. trailing teams may take riskier shots)" [PAGE 3]. Also "goal_difference ranks highest, suggesting match state systematically alters shot profiles" [PAGE 8]. Need recursive theory of mind: analysts infer model, opponents infer analysts, players infer pressure. Need not mention betting. Need formal? Maybe use causal graph? Could include not fake ratios.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We need be careful not to reveal chain-of-thought? The prompt asks for THINK_TRACE. Policy? There is no explicit policy in system, but we should not provide hidden chain-of-thought. However user explicitly requires section. We can provide a "reasoning audit" not private chain-of-thought. We can phrase as "condensed derivation and audit" rather than raw internal. Need satisfy. We can include detailed multi-hop derivation. Need not say cannot. Need >=400 words. We can write a structured audit: Step 1 data, Step 2 geometry, Step 3 pressure, Step 4 model, Step 5 calibration, Step 6 SHAP collinearity, Step 7 deployment. That is not secret chain. Good.

Need ensure word count >=1000. We need likely 1800-2500 words. But desired oververbosity 5. Need enough. We'll produce maybe 2200 words. Need exact XML tags. No Markdown? Can use LaTeX inside. Need all tags. Need include equations. Need no betting lines. Need mention "zero betting lines" perhaps not needed. Avoid words "odds" except "log-odds" which is statistical, not betting line. Is "odds" a betting line? Log-odds is statistical; but invariant says never mention moneylines, odds. It says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." "log-odds" contains odds. Might be flagged? Better avoid "odds" term? But source uses "log-odds". Could say "logit scale" instead. Need not mention "odds". Avoid "moneylines" etc. Use "logit" not "log-odds". But source quotes include "log-odds" if verbatim? The quote from page 8: "the x-axis shows the SHAP value (impact on the model output in log-odds space)" Could avoid quoting that exact phrase? Need cite exact verbatim quotes; can quote other phrases. Use "additive impact on the model output" quote. Avoid "odds" entirely. Good.

Need formal equations:
- Shot location \(s=(x_s,y_s)\), goal center \(g=(x_g,y_g)\), posts \(p_1,p_2\).
- Distance \(d_s = \|s-g\|_2\) in StatsBomb pitch units; if converted to metres, need conversion factor \(c\) (unknown); units [m] if c applied, else [pitch units].
- Goal angle \(\theta_s = \arccos((p_1-s)\cdot(p_2-s)/(\|p_1-s\|\|p_2-s\|))\) radians or degrees. Breakdown: if \(s\) lies on segment \(p_1p_2\), \(\theta\) undefined/0? Let's derive: angle subtended by goal at shot point. Singularity when \(s\) collinear with posts and between? Actually if shot is on goal line between posts, vectors to posts opposite? angle = π? Need precise. The formula arccos of dot product normalized. If s equals a post, one vector zero -> undefined. If s lies on goal line outside segment, angle 0. If s on segment between posts, vectors opposite -> angle π. But typical. Need mention shot coordinates near goal line create unstable angle. Need maybe \(\theta\) undefined when \(s=p_i\) (zero norm); unstable when distance to either post small. Good.
- Goalkeeper distance \(d_{gk} = \min_{k \in K} \|s - k\|_2\). If no GK freeze-frame, undefined / missing; paper doesn't specify imputation. Breakdown.
- Defenders within 5m \(N_5 = |\{j: \|s - d_j\|_2 \le 5\}|\), integer.
- Angular pressure: For defender j within 5m, angular deviation \(\phi_j = \arccos( (v_{sg}\cdot v_{sj}) /(\|v_{sg}\|\|v_{sj}\|))\) where v_sg=g-s, v_sj=d_j-s. Indicator \(I_j=\mathbf{1}[\phi_j \le 20^\circ]\). Distance weight \(w_j = \exp(-\|s-d_j\|_2 / \ell?)\). Source says "exp(-dist)" but units ambiguity: exp of dimensionful distance not dimensionally consistent unless dist normalized. Critical! Need state source formula lacks normalization; \(\exp(-d)\) requires d in dimensionless units or scale \(\lambda\). The paper says "contributing exp(-dist) to a pressure sum." This is a formal issue: exponent argument must be dimensionless. Need propose \(\tilde d = d/d_0\) with \(d_0=1\) m or pitch unit; if not, numerical values depend on unit. This is a gray-zone audit. Need cite [PAGE 4]. Great.
- \(A_s = \sum_{j: d_j \le 5, \phi_j \le 20^\circ} \exp(-\tilde d_j)\). Unitless. Breakdown when \(d_j=0\) (defender at shooter) -> weight 1; if unit scale mismatched, exp can overflow? It won't overflow for positive, but values. If using metres and exp(-5)=0.0067; if pitch units maybe exp(-5)=0.0067 too. But without normalization, unit-dependent. Need mention.
- Model: XGBoost binary logistic: \(P(y=1|f)=\sigma(\sum_{m=1}^{M} \eta_m h_m(f))\), \(\sigma(z)=1/(1+e^{-z})\), \(M=100\) trees, mild regularization. Unitless probability. No calibration scaling. Need cite [PAGE 5].
- Brier: \(\mathrm{Brier}=N^{-1}\sum_i(\hat p_i-y_i)^2\), units probability squared or unitless. AUC: \(P(\hat p_i > \hat p_j | y_i=1,y_j=0)\), unitless. Calibration R² perhaps not standard. Need mention.
- SHAP: \(\phi_k(f)=\sum_{S\subseteq F\setminus\{k\}} \frac{|S|!(|F|-|S|-1)!}{|F|!}[v(S\cup\{k\})-v(S)]\), units logit (nats? Actually logit is dimensionless). If model output logit, SHAP values logit. Table 3 mean absolute SHAP. Need cite [PAGE 10].
- VIF: \(VIF_k=1/(1-R_k^2)\), unitless. Cite [PAGE 5].
- Permutation importance: \(\Delta AUC_k = AUC_{full} - AUC_{\pi_k}\). Cite [PAGE 5].
Need mention multicollinearity high VIF; but permutation importance not collapse.

Need "singularity/breakdown regimes" for equations:
1. Shot exactly at goal center/post: distance zero, angle undefined; xG may saturate or data missing. Source drops missing location [PAGE 3].
2. GK distance missing: no nearest goalkeeper; undefined; source maybe minimum among goalkeeper positions, but if none? Need mention.
3. Angular pressure threshold discontinuity at 5m and 20°; small coordinate perturbations change indicator and sum; no smoothness.
4. exp(-dist) dimensionful; unit dependence.
5. XGBoost extrapolation outside training ranges; Streamlit sliders allow 0-50m gk_distance, angular_pressure 0-1.5, etc. [PAGE 5-6] but model may not have support.
6. Calibration no Platt/isotonic: native output may be miscalibrated in subgroups; reliability curve 10 bins [PAGE 6].
7. SHAP conditional independence assumption violated by correlations [PAGE 4-5].
8. Goal difference endogeneity and leakage? Running score computed pre-shot [PAGE 3], good.
9. Data: ~87k shots, ~11% goals; test ~26k [PAGE 3,6].
10. Weather/biomech absent.

Need "RETROCAUSAL_GENEALOGY" maybe 250 words. "Multi-week traps" maybe list: 1) chasing AUC by leaking match state; 2) interpreting SHAP as causal; 3) tuning 5m/20° on test; 4) ignoring unit conversion; 5) overclaiming "new standard". Cite [PAGE 6] "considerably greater than that of any existing industry standard xG-model" quote and [PAGE 12] limitations. Need mention "retrocausal" because later deployment/app and SHAP explanations retroactively shape feature definitions; the genealogy: geometry → context → pressure → explainability → deployment. Multi-week traps.

Need "RECURSIVE_THEORY_OF_MIND" 250 words. Need maybe define "crisis habit regression" as under late-game crisis, model/analyst reverts to distance/angle; "counter-trap" as adding pressure proxy that encodes defender behavior; "clock" as minute and goal_difference. Need state model's top feature goal_difference (31.03%) may absorb tactical selection; not causal. Source says "suggesting match state systematically alters shot profiles" [PAGE 8]. Recursive loop: coaches see xG, alter tactics, players alter shot selection, distribution shifts. Need avoid betting.

Need "CROSS_LAYER_VETO_ADJUDICATION" 250 words. Need "Physical/biomechanical/weather veto proof." We can define veto rule: A claim Q about physical/biomechanical/weather cause is admissible only if Q's variables appear in feature set or are experimentally varied. Source feature list has no weather, no surface, no ball velocity, no body orientation, no defender velocity, no GK orientation. Thus veto. Cite [PAGE 4] freeze-frame static; [PAGE 11] tracking data limitation; [PAGE 12] future work goalkeeper orientation from tracking. Quote: "richer tracking data (player positions over time) could enable even more precise pressure metrics" [PAGE 11]; "incorporating goalkeeper orientation from tracking data" [PAGE 12]. Good. Need "proof" via set inclusion: \(\mathcal F_{\text{paper}} = \{...\}\); weather \(W \notin \mathcal F\). Under model \(P(y|f)\), if \(W\) not in f, \(P(y|f,W)=P(y|f)\) only if conditional independence; cannot infer. So any weather claim is unidentifiable and vetoed. Biomech: no shot speed, foot placement, body angle. Physical: no wind vector \(\mathbf{w}\), rain rate, temperature. Need mention if adding them would require re-training and calibration; no source evidence.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable scenarios + predictions. Need perhaps RLVR = "reinforcement learning with verifiable rewards" but can present as counterfactual veto tests with expected outcomes. Need 3 scenarios:
1. Remove/decorrelate gk_distance vs distance. From paper VIF high, but permutation AUC drop 0.037 for gk_distance and 0.032 for distance [PAGE 5]. Prediction: If gk_distance is only a proxy for distance, residualizing gk_distance on distance should shrink its permutation importance toward zero and AUC drop should fall below ~0.01; if it remains >=0.03, veto redundancy explanation. But source doesn't give exact residualized gk. We can say "verifiable prediction: gk_distance's permutation AUC drop remains materially nonzero (paper reports 0.037) when both are present; if not, feature is redundant." Hmm.
2. Angular pressure threshold perturbation: Shift 5m to 6m or 20° to 25°; prediction: because indicator is discontinuous, SHAP mean_abs for angular_pressure (0.321809, 9.52%) will change sign? Actually sign should remain negative but magnitude may drop. Veto if sign flips or calibration Brier degrades beyond a pre-set tolerance, e.g., Brier >0.075 or AUC <0.85. Need not use betting. Good.
3. Match-state leakage/endogeneity: Recompute goal_difference from post-shot score or scramble it within match; if model AUC remains 0.8776, then goal_difference isn't genuine pre-shot signal; if drop, confirms. Prediction: pre-shot goal_difference is top SHAP 31.03%; scrambling it should reduce AUC and SHAP. But source doesn't give exact. We can set expected: mean_abs_SHAP for goal_difference will fall from 1.048836 toward near zero; AUC drops below 0.85. Veto if no drop. Need "verifiable" by code.
Maybe also scenario: calibration with Platt/isotonic. But need 3. Good.

Need maybe include "predictions" precise enough. Use thresholds. Need not be actual gambling. Good.

Need ensure no "odds" word. Avoid "log-odds" in equations; use "logit". Avoid "bet", "wager", "spread", "total", "moneyline". "total" appears in "total mean_abs_SHAP" maybe not betting total. Invariant says never mention totals. Hmm "total" could be flagged? It says "Never mention spreads, totals, moneylines, or odds." In context "totals" betting. But to be safe, avoid word "total" except maybe "sum"? Table has "% of total mean_abs_SHAP" quote. We can avoid quoting that. Use "share of mean absolute SHAP mass" instead. Avoid "total". Need not mention "spread" either. "AUC" okay. "distribution" okay. "odds" avoid. "logit" okay.

Need exact page markers [PAGE N]. Need use "verbatim quotes". We can include quote in quotation marks. Need ensure exact text from source. Let's identify exact quotes:
- Page 2 abstract: "achieving strong discrimination (AUC ≈ 0.878) and calibration (Brier ≈ 0.0686) on held-out shots." exact? Source: "An XGBoost model is trained and calibrated, achieving strong discrimination (AUC ≈ 0.878) and calibration (Brier ≈ 0.0686) on held-out shots." Yes.
- Page 2: "Key predictors include game-context and shot geometry (goal difference, shot angle and distance) and defensive metrics, as revealed by SHAP analysis."
- Page 3: "The cleaned dataset comprises ~87,000 shots (with ≈11% goals) and ~1.1M freeze-frame points"
- Page 3: "goal_difference (shooting team’s score minus opponent’s) and its absolute value indicates game state pressure (e.g. trailing teams may take riskier shots)."
- Page 4: "For each defender within 5m, we compute the defender’s angular deviation from the shot-to-goal line. Defenders whose angle is within ±20° of the direct line contributing exp(-dist) to a pressure sum."
- Page 4: "Second, gk_distance = distance from the shooter to the nearest opponent goalkeeper (computed as the minimum distance among goalkeeper positions at freeze-frame)."
- Page 5: "Distance (VIF = 18.6) and goalkeeper distance (VIF = 14.2) both exceeded the conventional cutoff of 10"
- Page 5: "Permutation importance analysis confirmed that distance, goalkeeper distance, and angle each contributed meaningfully to model discrimination (mean AUC drops: 0.032, 0.037, and 0.103, respectively)."
- Page 5: "no additional probability-scaling (e.g. Platt) was applied beyond XGBoost’s native output."
- Page 5: "We did not exhaustively search hyperparameters; preliminary tuning indicated 100 trees (the default) was sufficient."
- Page 6: "On the test set (~26k shots), we compute AUC-ROC (model discrimination) and Brier score (mean squared error of probabilities)."
- Page 6: "our model’s AUC-ROC of 0.8776 is considerably greater than that of any existing industry standard xG-model."
- Page 6: "The app constructs a one-row DataFrame from these inputs and predicts xG via the loaded model."
- Page 8: "goal_difference ranks highest, suggesting match state systematically alters shot profiles — for example, teams behind may attempt different types of shots or more speculative attempts, changing expected outcomes."
- Page 9 table: "angular_pressure Pressure from defenders that lie between shooter and goal (weighted by proximity) unitless (float) Negative — more angular pressure → lower xG"
- Page 10: "goal_difference alone contributes ~31% of the total mean-absolute SHAP and angle ~24%." This contains "total" but quote. Maybe avoid or quote? We can avoid "total" word by saying "goal_difference alone contributes ~31% ... and angle ~24%" but exact quote includes total. Better avoid quote or use it? Invariant zero betting lines—"total" not betting here but could be ambiguous. I'd avoid. Use Table 3 numbers directly.
- Page 11: "richer tracking data (player positions over time) could enable even more precise pressure metrics."
- Page 12: "incorporating goalkeeper orientation from tracking data" exact.
- Page 12: "Our calibration is good but could be further improved via isotonic or Platt scaling on held-out data." exact.
- Page 12: "We assume feature definitions (e.g. 5m radius, 20° angle) which could be tuned." exact.
- Page 12: "We used a single gradient boosting model; ensembling with other algorithms or neural networks might yield small gains." exact.
- Page 11: "Since shot characteristics can vary by competition, re-training on each league could be beneficial"
- Page 11: "the model may implicitly learn biases present in the historical data"
- Page 12: "The integration into a user-friendly app shows the practical value of such a model for analytics teams."

Need include "source pages provided cite exact [PAGE N] markers and verbatim quotes." We'll include multiple.

Need maybe mention "PAGE 1" title? Could cite [PAGE 1] for title? Not necessary but can. Use [PAGE 2] etc.

Need "THINK_TRACE" >=400 words. We can write ~600. Need "Deep multi-hop derivation & gray-zone audit". Use paragraphs. It can mention steps. Need not reveal hidden chain. Good.

Need total word count. Let's draft.

Potential outline:
<THINK_TRACE>
Start with "Condensed reasoning audit, not private chain-of-thought." Then Step 1: data construction. Step 2: geometry. Step 3: pressure. Step 4: model. Step 5: evaluation. Step 6: SHAP. Step 7: deployment. Gray zones: multicollinearity, unit mismatch, threshold arbitrariness, overclaims, calibration. Include equations? THINK_TRACE can have some. Need >=400 words. We'll count approx.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
Equations and units. Cite pages. Breakdown regimes. ~600 words.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ~250
<RECURSIVE_THEORY_OF_MIND> ~250
<CROSS_LAYER_VETO_ADJUDICATION> ~250
<RLVR_COUNTERFACTUAL_VETOES> ~300
Total ~2200. Good.

Need ensure XML valid. No unescaped &? Use "and" not &. Use LaTeX with \( \) okay. XML tags contain text; `<` in math? Avoid `<` in text? In XML, `<` inside text must be escaped. We need be careful: LaTeX inequalities like \(0 \le p \le 1\) includes `<`? Use \le not <. But "AUC <0.85" would be invalid. Use "below 0.85". Avoid `<` and `>` in text. Use "greater than" words. Use "\(p \le 1\)" no <. Ampersands avoid. Use "and". Good. In LaTeX, `\subseteq` okay. No `<` or `&`. In equations, use `\mid` not `|`? `|` okay. But XML text with `&` invalid; avoid. Use `\land` instead of `&`. Avoid `%`? `%` is okay but maybe not. Use "percent" words. Need not escape. Use `\text{...}`. Good.

Need no "odds". Use "logit". "probability" okay.

Need not mention betting. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." Include units. Need maybe "nats" for information? We can state SHAP on logit scale, "dimensionless logit units" not nats. Probability units: \(p\in[0,1]\). Brier units \([\text{probability}^2]\). Distance [m] if conversion; StatsBomb coordinates [pitch units]. Angle [rad] or [deg]. VIF dimensionless. AUC dimensionless. Good.

Need discuss "information units" maybe SHAP not information; could mention logit. The prompt says "SI/information/probability units". We can include "AUC is unitless; Brier is probability-squared; SHAP is logit; VIF unitless; distance metres or pitch units; angle degrees." Good.

Need "exact singularity/breakdown regimes" in SOURCE_OPERATORS. Include equations with conditions:
- \(d_s=0\) at goal center; angle undefined at posts.
- \(\|p_1-s\|=0\) or \(\|p_2-s\|=0\).
- \(K=\varnothing\) for gk_distance undefined.
- \(d_j=0\) in exp(-tilde d) yields 1.
- threshold discontinuity at \(d_j=5\) and \(\phi_j=20^\circ\).
- exp(-d) dimensionful unless normalized; breakdown if unit scale changes.
- XGBoost no extrapolation: outside training support, monotone not guaranteed.
- Calibration no Platt/isotonic; Brier/calibration may fail under shift.
Need cite pages.

Need "RLVR" maybe "counterfactual vetoes" with predictions. We can define "RLVR-style verifiable reward" as a test harness. Need not mention actual RL. Three scenarios:
1. Feature-ablation/redundancy veto: Recompute model with gk_distance residualized on distance. Prediction: if gk_distance carries independent info, permutation AUC drop remains above 0.02; if drop falls below 0.01, veto the "distinct keeper positioning" claim. Since paper reports 0.037 [PAGE 5], baseline expected to remain meaningful. Hmm "prediction" can be "baseline observed 0.037; after residualization expected drop to no less than 0.015 if independent" but uncertain. Need verifiable. Use threshold. Good.
2. Threshold-sensitivity veto: Vary radius 4/5/6 m and angle 15/20/25°. Prediction: angular_pressure mean_abs_SHAP at baseline 0.321809 (9.52%) [PAGE 10]; under reasonable variants sign remains negative and Brier remains near 0.0686; if sign flips or Brier rises above 0.075, veto robustness. This is verifiable.
3. Match-state leakage/scramble veto: Replace pre-shot goal_difference with randomly permuted within-match values, keep all else. Prediction: baseline mean_abs_SHAP 1.048836 (31.03%) [PAGE 10] should collapse toward zero and AUC should fall; if AUC stays at 0.8776, then goal_difference is not contributing and the "match-state" claim is vetoed. Or if post-shot score leaks, AUC artificially rises; recompute. Good.
4. Maybe calibration veto: Platt/isotonic. But 3 enough.
Need "predictions" explicit. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Include formal set argument:
Let \(\mathcal F\) be feature vector: distance, gk_distance, angle, angular_pressure, defenders_in_5m, minute, n_prev_passes, goal_difference, abs_goal_diff, is_home, assist_type, body_part, shot_type, position [PAGE 3-4, 9-10]. Weather \(W=(\mathbf w, R, T, \text{surface})\) not in \(\mathcal F\). Biomechanics \(B=(v_{\text{ball}}, \alpha_{\text{body}}, \text{foot placement}, \text{keeper orientation})\) not in \(\mathcal F\). Therefore under model \(P(y|\mathcal F)\), any claim of causal effect of W or B is not identified. If \(W \perp y | \mathcal F\), then \(P(y|\mathcal F,W)=P(y|\mathcal F)\); but this independence is not tested. Veto. Evidence: page 11 quote tracking data limitation; page 12 future work goalkeeper orientation. Good.

Need "RETROCAUSAL_GENEALOGY" maybe mention "Retrocausal" because the deployment/SHAP app redefines what counts as feature importance; historical lineage. Use exact citations: Mead 2023, Fu 2024, Iapteff 2025 [PAGE 2], Anzer & Bauer 2021, Davis & Robberechts 2024 [PAGE 11]. Need note reference list numbering mismatch? Source references (8) Fernández not Anzer; text says Anzer & Bauer (2021) but reference list has Fernández. Wait page 11 says "Anzer & Bauer (2021) likewise used XGBoost..." but reference (8) is Fernández et al. 2021. This is a citation mismatch. Need audit! Good gray-zone. Mention "Anzer & Bauer (2021)" is cited in text [PAGE 11] but reference (8) is Fernández et al. 2021 [PAGE 13], so lineage has a bibliographic trap. Also "Davis & Robberechts (2024)" in text [PAGE 11] but reference (9) is Lee et al. 2024 [PAGE 13]. Great. This is a multi-week trap. Need cite exact quotes: "Anzer & Bauer (2021) likewise used XGBoost..." [PAGE 11]; reference (8) "Fernández J, Bornn L, Cervone D (2021)" [PAGE 13]. "Davis & Robberechts (2024) highlight biases..." [PAGE 11]; reference (9) "Lee J..." [PAGE 13]. This is a significant audit. Need include in RETROCAUSAL_GENEALOGY. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe mention "analyst-coach-player loop" and "crisis habit regression" etc. Need no betting. Good.

Need maybe mention "model-state context" goal_difference top SHAP 31.03% but goal_difference is signed scoreline; absolute goal diff only 1.28%. This is interesting: signed direction dominates absolute magnitude. Need discuss: game state (leading/trailing) shapes shot profiles. Recursive ToM: teams trailing take riskier shots, defenders/keepers adapt, model learns. "Crisis habit regression" = under trailing crisis, teams revert to speculative shots; model may overfit to goal_difference as a contextual tag rather than causal pressure. Counter-trap = adding angular_pressure may be a proxy for defender positioning and shot type. Clock = minute 6.25% and late-game effects. Good.

Need "THINK_TRACE" mention "multi-hop derivation" maybe:
1. Shot outcome \(Y_i \sim \text{Bernoulli}(p_i)\).
2. Features \(f_i\).
3. XGBoost learns \(z_i=\logit(p_i)\).
4. SHAP decomposes \(z_i\).
5. Evaluation uses AUC/Brier.
6. Constraints: multicollinearity and calibration.
Need "gray-zone audit" identify overclaim: AUC 0.8776 "considerably greater than any existing industry standard" [PAGE 6] but no external benchmark shown; only recent academic AUC ~0.80. Also calibration R² 0.98 is on binned means, not individual probabilities. Brier 0.0686; baseline constant at 11% gives ~0.0979, so improvement. But no confidence intervals. Test set ~26k, so standard error of AUC maybe ~0.003? We can mention no CIs. Need not compute exact. But can say without CIs and external test, overclaim. Good.

Need "source operators and equations" include exact quotes. Need not overdo.

Potential issue: The prompt asks "STRICT INVARIANTS" and ">=1,000-word DEPTH across these exact XML sections". It may expect no extra text outside XML. We'll output only XML sections. Good.

Let's draft in full.

Need ensure THINK_TRACE >=400 words. Let's write ~550 words. Count approximate. Use paragraphs. We'll include "The audit is a compressed reconstruction of the paper’s logical dependencies, not a private chain of thought." This is okay.

Let's start.

Need be careful with XML special chars. Use no `<` or `&`. Use "less than" words. Use `\lt`? In LaTeX `\lt` not standard. Avoid. Use `\le` and `\ge`. Use `\in`. No `&`. Use "and" not ampersand. In equations, `\mid` okay. `|` okay. Use `\text{...}`. In text, "p is between 0 and 1" no symbols with <. Good.

Need "AUC ≈ 0.878" okay. "Brier ≈ 0.0686" okay.

Need "mean_abs_SHAP" underscores okay. "±20°" okay. "~87,000" okay.

Need no "total" word? Let's avoid. Use "sum", "share". But quote "mean absolute SHAP" okay. Avoid "odds" except maybe not. Use "logit". Good.

Need "spreads" no. "totals" no. "moneylines" no. "odds" no.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Condensed reasoning audit, not a private chain of thought. The paper’s logical chain is: StatsBomb event JSON and lineup JSON are merged, running score is tracked before each shot, freeze-frame positions are flattened, and the outcome is coded as goal or no-goal [PAGE 3]. From that table, the model receives geometry, match-state, prior-play, shot/player, and defensive-pressure features [PAGE 3-PAGE 4]. The central derivation is that a shot is a Bernoulli trial with probability \(p_i\), and XGBoost estimates \(z_i=\operatorname{logit}(p_i)\) from a feature vector \(f_i\); SHAP then decomposes \(z_i\) additively on the logit scale [PAGE 8]. Evaluation uses AUC for ranking and Brier score for probabilistic error, with a 10-bin reliability curve [PAGE 6]. The reported model has AUC 0.8776, Brier 0.0686, and calibration \(R^2\) 0.98 on a test set of about 26,000 shots [PAGE 6-PAGE 7]. The multi-hop dependency is therefore: data cleaning determines freeze-frame geometry; geometry and pressure feed the tree ensemble; the ensemble output is interpreted by SHAP; SHAP rankings are then used to justify the feature story and the Streamlit deployment [PAGE 5-PAGE 6, PAGE 8, PAGE 10].

The gray-zone audit begins with multicollinearity. The paper itself reports distance VIF 18.6 and goalkeeper-distance VIF 14.2, both above the conventional cutoff of 10, while angle VIF is 4.7 [PAGE 5]. This matters because SHAP values assume conditional feature independence, as the paper notes [PAGE 4]. High correlation does not automatically invalidate prediction, and the paper supplies permutation checks: mean AUC drops of 0.032 for distance, 0.037 for goalkeeper distance, and 0.103 for angle [PAGE 5]. But the SHAP attribution shares, especially the 31.03 percent for goal_difference and 24.30 percent for angle [PAGE 10], are descriptive allocations under a correlated design, not causal effects. A second gray zone is unit consistency. The angular-pressure rule says defenders within 5 m and within plus or minus 20 degrees contribute \(\exp(-\text{dist})\) to a pressure sum [PAGE 4]. The exponential argument must be dimensionless; if distance is in metres or StatsBomb pitch units without a scale constant, the numerical value changes with the unit convention. The source does not state the normalization. Third, the 5 m and 20 degree thresholds are assumed, and the paper later admits that “We assume feature definitions (e.g. 5m radius, 20° angle) which could be tuned” [PAGE 12]. That creates threshold discontinuity: small coordinate changes near 5 m or 20 degrees can flip a defender in or out of the pressure sum.

A fourth gray zone is calibration. The paper reports native XGBoost output and states that “no additional probability-scaling (e.g. Platt) was applied beyond XGBoost’s native output” [PAGE 5]. The reliability curve is close to the diagonal [PAGE 7], but the calibration \(R^2\) is computed on binned means, not individual probabilities. The paper later says calibration “could be further improved via isotonic or Platt scaling on held-out data” [PAGE 12]. Fifth, the claim that AUC 0.8776 is “considerably greater than that of any existing industry standard xG-model” [PAGE 6] is stronger than the evidence shown: the paper compares mainly with recent academic AUC near 0.80 [PAGE 2, PAGE 11] and does not present external-league or provider-held-out benchmarks. Sixth, the model is a single gradient-boosted tree ensemble with 100 trees and no exhaustive hyperparameter search [PAGE 5]; that is acceptable for a prototype, but it means the reported performance is not a tuned upper bound. Seventh, the deployment sliders allow ranges such as goalkeeper distance 0 to 50 m and angular pressure 0.00 to 1.5 [PAGE 5-PAGE 6], but trees do not extrapolate safely outside training support. The app can therefore produce confident-looking outputs in regions where the model has little data. These are the main gray zones: correlated geometry, unit-sensitive pressure, arbitrary thresholds, binned calibration, overclaiming, limited tuning, and deployment extrapolation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s operators can be written formally. Let the shot location be \(s=(x_s,y_s)\), the goal centre be \(g=(x_g,y_g)\), and the two goalposts be \(p_1,p_2\). The shot distance is
\[
d_s=\|s-g\|_2,
\]
with units of metres if a pitch-to-metre conversion is applied, otherwise StatsBomb pitch units. The paper describes “Euclidean distance from shot to goal centre” and lists “pitch units / metres (float)” [PAGE 9]. The visible goal angle is
\[
\theta_s=\arccos\!\left(\frac{(p_1-s)\cdot(p_2-s)}{\|p_1-s\|_2\,\|p_2-s\|_2}\right),
\]
in radians, converted to degrees for interpretation. The paper states that angle is an “Angular view of the goal from shot location (degrees)” [PAGE 9]. Singularities occur when \(s=p_1\) or \(s=p_2\), because a vector norm is zero; the angle is undefined. It is also numerically unstable when \(s\) is very close to either post, and it degenerates when the shot point is collinear with the posts. The data-cleaning step drops shots lacking location or shot detail [PAGE 3], but the paper does not document a post-specific stability rule.

For goalkeeper pressure, let \(K\) be the set of goalkeeper freeze-frame positions. Then
\[
d_{gk}=\min_{k\in K}\|s-k\|_2,
\]
in metres or pitch units. The paper defines “gk_distance = distance from the shooter to the nearest opponent goalkeeper (computed as the minimum distance among goalkeeper positions at freeze-frame)” [PAGE 4]. If \(K=\varnothing\), the minimum is undefined; the source does not state the imputation rule. For local defender count, let \(D\) be the set of non-teammate outfield players and let
\[
N_5=\left|\{\,j\in D:\|s-d_j\|_2\le 5\,\}\right|,
\]
an integer count. The paper defines “defenders_in_5m = number of non-teammate players within 5 meters of the shooter” [PAGE 4].

For angular pressure, define the shot-to-goal vector \(v_{sg}=g-s\) and the shot-to-defender vector \(v_{sj}=d_j-s\). The angular deviation is
\[
\phi_j=\arccos\!\left(\frac{v_{sg}\cdot v_{sj}}{\|v_{sg}\|_2\,\|v_{sj}\|_2}\right).
\]
The paper’s rule is: “For each defender within 5m, we compute the defender’s angular deviation from the shot-to-goal line. Defenders whose angle is within ±20° of the direct line contributing exp(-dist) to a pressure sum” [PAGE 4]. A formal version is
\[
A_s=\sum_{j\in D}\mathbf{1}\!\left[\|s-d_j\|_2\le 5\right]\mathbf{1}\!\left[\phi_j\le 20^\circ\right]\exp(-\tilde d_j),
\]
where \(\tilde d_j=\|s-d_j\|_2/d_0\) must be dimensionless with a scale \(d_0\). The source writes \(\exp(-\text{dist})\) without giving \(d_0\), so the operator is dimensionally incomplete as printed. It is unitless only after normalization. The threshold indicators make \(A_s\) discontinuous at 5 m and at 20 degrees. If \(d_j=0\), the weight is 1; if a defender is just outside either threshold, the contribution drops to zero. The paper lists angular pressure as “unitless (float)” with “Negative — more angular pressure → lower xG” [PAGE 9].

The classifier is a binary XGBoost model. With \(M=100\) trees, additive leaf functions \(h_m\), and learning-rate or shrinkage terms \(\eta_m\), the model output is
\[
z_i=\sum_{m=1}^{M}\eta_m h_m(f_i),\qquad
\hat p_i=\sigma(z_i)=\frac{1}{1+\exp(-z_i)},
\]
where \(\hat p_i\in[0,1]\) is a probability and \(z_i\) is a dimensionless logit. The paper states that XGBoost is used for “binary classification (goal vs no-goal)” and that “100 trees (the default) was sufficient” [PAGE 5]. The Brier score is
\[
\mathrm{Brier}=\frac{1}{N}\sum_{i=1}^{N}(\hat p_i-y_i)^2,
\]
with units of probability squared, or unitless in common reporting. The paper reports “Brier-Score 0.0686” and “AUC-ROC 0.8776” [PAGE 7]. AUC is
\[
\mathrm{AUC}=\Pr(\hat p_i>\hat p_j\mid y_i=1,\ y_j=0),
\]
which is unitless. The paper says it computes “AUC-ROC (model discrimination) and Brier score (mean squared error of probabilities)” on about 26,000 test shots [PAGE 6]. The variance inflation factor is
\[
\mathrm{VIF}_k=\frac{1}{1-R_k^2},
\]
where \(R_k^2\) is the coefficient of determination from regressing feature \(k\) on the other features; it is unitless. The paper reports distance VIF 18.6, goalkeeper distance VIF 14.2, and angle VIF 4.7 [PAGE 5]. SHAP values are
\[
\phi_k(f)=\sum_{S\subseteq F\setminus\{k\}}\frac{|S|!\,(|F|-|S|-1)!}{|F|!}\left[v(S\cup\{k\})-v(S)\right],
\]
where \(v\) is the model output on the logit scale; the units are logit units. The paper describes SHAP as “the additive impact on the model output” [PAGE 8] and reports mean absolute SHAP values such as goal_difference 1.048836, angle 0.821283, angular_pressure 0.321809, gk_distance 0.317663, and distance 0.293770 [PAGE 10].

Breakdown regimes are exact and identifiable. Distance and angle are undefined or unstable at the goalposts and on the goal line. Goalkeeper distance is undefined if no goalkeeper is present in the freeze-frame. Angular pressure is discontinuous at the 5 m and 20 degree cutoffs and is unit-dependent unless \(\tilde d_j\) is normalized. XGBoost does not guarantee monotone extrapolation outside the training support, so slider values outside observed ranges [PAGE 5-PAGE 6] are unsupported. Native probability output without Platt or isotonic scaling [PAGE 5] can drift under league or season shift. SHAP attribution is not causal and is especially fragile under the reported correlations among distance, angle, and goalkeeper distance [PAGE 4-PAGE 5]. The paper itself notes that “richer tracking data (player positions over time) could enable even more precise pressure metrics” [PAGE 11], which is an explicit admission that the static freeze-frame operator is a proxy, not a full physical model.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from geometry-first xG to context-aware and defensive-geometry xG. The paper summarizes Mead et al. (2023) as adding “player/team ability and psychological” features with optimal AUC near 0.80, Fu (2024) as finding “shot exposure angle, shooting angle, and shot distance” dominant, and Iapteff et al. (2025) as a seven-feature Bayesian model with AUC near 0.801 [PAGE 2]. It then positions its own contribution as adding freeze-frame defensive context, angular pressure, goalkeeper distance, and pre-shot sequence features [PAGE 2, PAGE 4]. The later deployment and SHAP layer are retrocausal in the practical sense: the app and explanations make certain features legible, and that legibility then shapes which features analysts trust and request. The paper’s own summary says its contributions are “(i) a novel ‘angular pressure’ metric, (ii) logic for pre-shot pass sequences, and (iii) an open pipeline and app for xG analysis” [PAGE 2].

There are multi-week traps in this genealogy. First, the paper cites “Anzer & Bauer (2021)” in the discussion [PAGE 11], but the reference list’s item (8) is Fernández, Bornn, and Cervone (2021) [PAGE 13]. It also cites “Davis & Robberechts (2024)” [PAGE 11], while reference (9) is Lee et al. (2024) [PAGE 13]. A reader tracing the lineage will hit a bibliographic mismatch and may attribute methods to the wrong paper. Second, the claim of a “new standard” [PAGE 12] sits beside the paper’s own limitation that it used “a single gradient boosting model” and did not exhaustively tune [PAGE 5, PAGE 12]. Third, the 5 m and 20 degree constants are presented as design choices but are later described as tunable assumptions [PAGE 12]; treating them as fixed scientific constants is a trap. Fourth, the paper’s comparison set is mostly academic AUC near 0.80, while the stronger claim about “any existing industry standard xG-model” [PAGE 6] lacks a provider-level held-out benchmark. Fifth, the paper notes that “shot characteristics can vary by competition” and that “re-training on each league could be beneficial” [PAGE 11], which means a cross-league genealogy cannot assume transfer without recalibration. These traps are not fatal to the contribution, but they mean the lineage should be read as an engineering progression with open validation, not as a settled causal hierarchy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is analyst-coach-player adaptation. The model learns that goal_difference is the largest mean absolute SHAP feature at 1.048836, or 31.03 percent of mean absolute SHAP mass, while angle is 24.30 percent [PAGE 10]. The paper interprets this as match state altering shot profiles: “goal_difference ranks highest, suggesting match state systematically alters shot profiles — for example, teams behind may attempt different types of shots or more speculative attempts, changing expected outcomes” [PAGE 8]. That is a theory-of-mind statement about players and coaches: trailing teams may choose riskier shots, leading teams may protect a state, and defenders may change marking. Once analysts deploy xG in a Streamlit app [PAGE 5-PAGE 6], coaches can react to the metric, players can react to coaching, and the next season’s shot distribution can shift. The model is therefore recursive: it describes behavior, then feeds back into behavior.

“Crisis habit regression” is the tendency, under late-game or high-pressure states, to fall back to the simplest geometry story: distance and angle. The paper shows why that regression is incomplete but also why it is attractive: distance and angle remain dominant in SHAP [PAGE 8], and permutation importance for angle is the largest reported mean AUC drop at 0.103 [PAGE 5]. The counter-trap is overcorrecting by treating angular_pressure as a causal “clutch” variable. Angular pressure is a freeze-frame proxy built from 5 m and 20 degree rules [PAGE 4]; it does not measure defender closing speed, balance, or intent. The clock trap is minute and game state. Minute contributes 6.25 percent of mean absolute SHAP, while signed goal_difference contributes 31.03 percent and absolute goal difference only 1.28 percent [PAGE 10]. The signed direction matters more than the magnitude in this model, which suggests that “leading versus trailing” role behavior is being encoded, not simply “match-state intensity.” A recursive audit should therefore separate three things: the player’s crisis habit, the analyst’s counter-trap of over-interpreting pressure proxies, and the clock/state context that changes both. The paper’s own language supports this caution: it says the model “may implicitly learn biases present in the historical data” [PAGE 11]. That is the recursive theory-of-mind veto: do not treat a context feature as a mental state, and do not treat a proxy as an intention.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto rule is: a physical, biomechanical, or weather claim is admissible only if the relevant variable is in the model’s feature set, is experimentally varied, or is explicitly modeled as a latent condition. The paper’s feature set includes distance, goalkeeper distance, angle, angular_pressure, defenders_in_5m, minute, n_prev_passes, goal_difference, abs_goal_diff, is_home, and shot/player encodings [PAGE 3-PAGE 4, PAGE 9-PAGE 10]. It does not include wind vector, rain rate, temperature, pitch surface, ball velocity, foot placement, body orientation, defender velocity, or goalkeeper orientation. The freeze-frame data are a static snapshot: the paper defines them as “player positions at the shot moment” [PAGE 3]. Therefore a claim that wind or a wet surface caused a specific xG change is not identified by this model. Formally, if \(W\) is a weather vector and \(F\) is the paper’s feature vector, the model estimates \(P(y\mid F)\), not \(P(y\mid F,W)\). The equality \(P(y\mid F,W)=P(y\mid F)\) holds only under an untested conditional independence assumption. Without that test, the weather layer is vetoed.

The biomechanical layer is also vetoed for the same reason. The paper’s pressure metric is angular and proximity-based, not force-based or kinematic. It says defenders within 5 m and within plus or minus 20 degrees contribute \(\exp(-\text{dist})\) [PAGE 4]. That operator cannot distinguish a defender closing at speed from a stationary defender, nor a shooter with clean foot placement from one off balance. The paper acknowledges the missing layer directly: “richer tracking data (player positions over time) could enable even more precise pressure metrics” [PAGE 11], and future work includes “incorporating goalkeeper orientation from tracking data” [PAGE 12]. Those statements are proof that orientation and time-varying motion are absent from the current model. The physical layer is similarly constrained: the model has no explicit ball-flight or surface term, and the paper’s limitations say it relies on event data [PAGE 11]. A weather or biomechanical veto is therefore not a criticism of the paper’s engineering; it is a boundary condition. The correct adjudication is: use the model for shot-geometry and freeze-frame pressure description, not for wind-adjusted or biomechanically decomposed causation. Any cross-layer claim must be routed to a new data collection and recalibration step, because the current feature vector cannot adjudicate it.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual vetoes follow. Each is framed as a reproducible model audit with a predicted outcome and a veto condition. They do not require new proprietary data; they require the paper’s cleaned table, feature definitions, and reported metrics.

Scenario 1: Goalkeeper-distance redundancy veto. The paper reports high correlation between distance and goalkeeper distance, \(r=0.834\), and VIFs of 18.6 and 14.2 [PAGE 4-PAGE 5]. It also reports a permutation mean AUC drop of 0.037 for goalkeeper distance and 0.032 for distance [PAGE 5]. Counterfactual: residualize goalkeeper distance on distance, refit the same XGBoost specification, and recompute permutation importance. Prediction: if goalkeeper distance carries independent positioning information, its residualized permutation AUC drop should remain materially above zero, though smaller than 0.037. Veto condition: if the residualized drop collapses below 0.010 and the SHAP share of goalkeeper distance falls toward the noise floor, then the claim that goalkeeper distance captures a distinct tactical dimension is vetoed for this dataset. This test is verifiable from the paper’s own pipeline and does not depend on hidden labels.

Scenario 2: Angular-pressure threshold-sensitivity veto. The paper’s angular pressure uses a 5 m radius and a plus or minus 20 degree cone, with \(\exp(-\text{dist})\) weighting [PAGE 4]. It reports mean absolute SHAP 0.321809, or 9.52 percent [PAGE 10], and lists the expected effect as negative [PAGE 9]. Counterfactual: recompute the feature at radii of 4 m, 5 m, and 6 m and cone half-angles of 15, 20, and 25 degrees, refit the same model, and compare Brier score, AUC, and SHAP sign. Prediction: if the metric is robust, its SHAP sign should remain negative across the grid and Brier should stay close to the reported 0.0686, with only modest variation. Veto condition: if the SHAP sign flips positive under a reasonable threshold change, or if Brier rises above 0.075 while AUC falls below 0.85, then the angular-pressure construct is threshold-fragile and should not be presented as a stable defensive-geometry operator. This is directly testable because the paper already admits that “We assume feature definitions (e.g. 5m radius, 20° angle) which could be tuned” [PAGE 12].

Scenario 3: Match-state leakage and scramble veto. The paper computes running score before the shot and uses signed goal_difference [PAGE 3]. It reports goal_difference as the largest mean absolute SHAP feature at 1.048836, or 31.03 percent [PAGE 10], and interprets it as match-state behavior [PAGE 8]. Counterfactual: keep all features fixed, but randomly permute goal_difference within match or replace it with a post-shot score to test leakage. Prediction: if the feature is a genuine pre-shot state signal, within-match permutation should sharply reduce its SHAP magnitude from 1.048836 toward near zero and should lower AUC from the reported 0.8776. Veto condition: if AUC remains at 0.8776 and the SHAP magnitude does not collapse under permutation, then the feature is either redundant with other variables or the reported match-state interpretation is not supported. Conversely, if replacing pre-shot goal_difference with post-shot score raises AUC artificially, that is evidence of leakage and the original pre-shot construction must be preserved. This scenario is fully verifiable because the paper specifies the running-score construction and the test metrics [PAGE 3, PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>
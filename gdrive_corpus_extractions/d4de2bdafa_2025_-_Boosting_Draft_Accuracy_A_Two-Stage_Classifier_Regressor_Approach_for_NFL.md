---
source: "2025 - Boosting Draft Accuracy A Two-Stage Classifier Regressor Approach for NFL Wide Receiver Prospect Evaluation - Patangi.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2025"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 9098
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about NFL Wide Receiver draft evaluation using a two-stage classifier-regressor approach. They have provided the full text of a 14-page paper.

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I must produce exactly these XML sections with substantial depth. Total words across sections >= 1000 words. The THINK_TRACE must be >=400 words alone.

Let me carefully extract facts from the paper:

Page 1: Title, abstract. Two-stage: Gradient Boosting Classifier for draft likelihood, CatBoost Regressor for draft position. Data 2000-2024. Classifier: 89.2% accuracy (F1=0.936). Regressor: 49.2-pick MAE (ρ=0.626). Focus WR because objective data.

Page 2: Introduction. WR importance. Combine invitation by Player Selection Committee. Past studies: Clark et al. (2013) field goals, weather factors. Gifford & Bayrak (2023) game outcomes, turnovers and yards significant, doesn't account for causation/psychological factors. Baker & Kwartler (2015) play prediction, 66.4%/66.9% accuracy, no validation set. Taylor (n.d.) CNN/VGG19 for play calls and yardage, MAE >5, RMSE >8. Teich et al. (2016) yardage and progress metric.

Page 3: Continued. Teich progress metric MAE 0.15 or less RMSE 0.25 or less. Mulholland & Jensen (2014) tight ends draft order, linear regression and decision tree. Decision tree: college yards and 40-yard dash most important. Linear regression: 40-yard dash and bench press. RMSE 56.52 decision trees, only predicts known drafted TEs. Logistic regression lacked depth. Dhar (n.d.) WR draft order, linear regression and CART. Only drafted receivers 1999-2008, 266 data points, no testing data. Linear regression R²=0.302, 40-yard dash coefficient 227.5 (0.1s decrease = 22.75 slot improvement). CART split: total college receiving yards at 1627 yards threshold. NFL bias toward 40-yard dash.

Page 4: Introduction ends, Methods start. Data from nfl_data_py for combine WRs 2000-2024. 2021 excluded (pro days not combine). Height, weight, college, draft year, draft pick. College stats from Sports Reference 1999-2023. Fields: receptions, yards, TDs, yards per game. 1152 data points, 170 (14.6%) missing college stats.

Page 5: Table 1 features. calculated_forty (ranked 40-yard dash, lower raw time ranked higher), calculated_bench, calculated_vertical, calculated_broad_jump, calculated_cone, calculated_shuttle. REC, YDS, Y_R, TD, Y_G. ht_inches, wt. Conference dummies. Data Preparation: NaN removed, dummy variables. draft_ovr field. is_drafted binary target (1 non-missing draft_ovr, 0 missing). IterativeImputer from scikit-learn, Bayesian Ridge regression. Separate imputers for power/explosiveness and speed/agility. 40-yard dash missing for 63 (5.47%) players, all early years. College reception stats high importance, no logical way to impute, removed records without college stats leaving 982 records. Most recent college year kept. Feature ranking for all metrics except height and weight. Standardize values across draft years. Fastest 40 in class = score 1. Higher value beneficial for some, smaller numerical better for others. Ties both receive ranking. Height/weight not ranked due to no census on optimal ranges, subjective/scheme dependent. College reception stats not ranked due to bias from missing data. Conference dummies.

Page 6: Table 2 feature statistics. calculated_forty mean 23.32, std 14.09, min 1 max 63, etc. (these are ranked values 1-63, so mean ~23-24 makes sense). REC mean 56.9, YDS mean 826.4, etc. Model Creation: LazyPredict baseline, GridSearchCV hyperparameter tuning. Final classifier: Gradient Boosted Decision Trees (GBDT). Outperformed logistic regression and SVM. GBDT combines decision trees, each tree trained to be maximally correlated with negative gradient of loss function (Natekin & Knoll, 2013). Recursive partitions data. Trees added sequentially correcting errors. Default cross-entropy loss. Validation accuracy and F1 score. F1 balances precision and recall (Vakili et al., 2020). Penalizes bias towards drafted players and failure on minority undrafted players.

Page 7: F1 equation shown (with some formatting issues but clearly F1 = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / ((TP/(TP+FP)) + (TP/(TP+FN))). Actually the text shows: F1 Score = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / (TP/(TP+FP) + TP/(TP+FN)). That's the harmonic mean of precision and recall. Regression model: CatBoost regressor. CatBoost outperforms XGBoost/LightGBM due to ordered boosting preventing target leakage and prediction shift. Handles categorical variables natively through ordered target statistics. Constructs combinations of categorical features for higher-order interactions (Prokhorenkova et al., 2019). Optimized using MAE loss. MAE = (1/n) * sum(|y_i - y_hat_i|). Average number of draft picks off by.

Page 8: R² assesses proportion of variance explained. R²=0 no better than mean draft pick, R²=1 perfect. Spearman's rank correlation for correlation between rankings of draftable players vs order drafted, not affected by uneven distribution of picks each round. Ranges -1 to 1, monotonic relationship for non-normal distribution (Rovetta, 2020). Example: 2020 Justin Jefferson predicted at 21.77, actual 22, MAE 0.23. Spearman contribution 0.000724 because predicted 1st WR but ended up 5th WR out of 51 combine WRs. Spearman formula: ρ = 1 - (6 * sum(d_i^2)) / (n(n^2 - 1)).

Page 9: Model Training and Evaluation. Leave-One-Season-Out Cross-Validation (LOSOCV). Seasons 2020, 2022, 2023, 2024 held out once as test set while remaining seasons excluding 2021 used for training. Both classifier and regressor retrained same hyperparameters. Results reported separately per season. Accounts for changes in prospects and drafting styles over time. Classifier trained on all players in training data. Validation accuracy vs number of estimators plotted. Regressor trained only on actually drafted players in training set to avoid penalizing for classifier errors. MAE and R² reflect only cases where draft position existed. Figure 1 model flowchart: raw data cleaned -> feature engineering -> binary classifier -> if drafted, regression model estimates draft position.

Page 10: Results. Table 3 summarized. 2024 best year for both models. 2023 worst for classifier, 2020 worst for regressor based on MAE, R², Spearman. According to PFF, 2023 draft class did not feature standout receiver, none of top three as developed (Monson, 2023). Jaxon Smith-Njigba predicted undrafted because no 40-yard dash at combine (unofficial Pro Day not included), missed most of 2022 with hamstring, only 5 receptions for 43 yards. Model uses only final-season statistics, limited feature data. Imputed 40-yard dash beneficial but not perfect. No solid evidence for weak regressor 2020. Strong 2024 due to strong draft class. Predicting draft position has more confounding variables (Sikkema, 2024). Regressor misranks individual players vs mock drafts but distinguishes early/late-round. Top predicted WRs: Brian Thomas, Xavier Legette, Malik Nabers, Rome Odunze, Troy Franklin, Marvin Harrison Jr. George Pickens: tore ACL in 2021, missed most junior season, 5 receptions for 107 yards after returning. Predicted 115.76, ranked 21st best WR by model, actual pick 52 by Steelers as 11th WR. Limitations: purely performance and combine data. Behavior concerns and ACL tear contributed to wide range of team evaluations. Bachar (n.d.): at least one NFL team removed Pickens from draft board due to behavior during pre-draft visit. Steelers overlooked injury/character concerns, valued high upside. Model penalized lack of recent production, couldn't account for team-specific character evaluations.

Page 11: Table 3 results:
Year | Classifier Accuracy | Classifier F1 | MAE on Drafted | R² on Drafted | Spearman ρ
2020 | 0.8431 | 0.8824 | 66.80 | -0.0037 | 0.3006
2022 | 0.8056 | 0.8727 | 52.26 | 0.1635 | 0.4200
2023 | 0.6042 | 0.6667 | 55.15 | 0.1303 | 0.3562
2024 | 0.8919 | 0.9355 | 49.18 | 0.3233 | 0.6262
Avg | 0.7862 | 0.8393 | 55.85 | 0.1533 | 0.4257

Page 12: Discussion and conclusion. Figure 2 Feature Importance. Two-stage approach: predicting draft likelihood possible with high accuracy, exact draft slot harder, affected by outliers. Classifier high accuracy especially 2024. Regressor within 49.18 picks means for prospects with no anomalies, predicting draft round within 2 rounds possible. Further tuning: remove injured final season players, more data for recent years with less missing data. Unbiased statistical ranking free from media/hype. Figure 2: 40-yard dash most important predictor for both models, followed by college touchdowns. Models rely on college stats and combine measures, cannot quantify injury history, pre-draft interviews, play style/team fit. Regression impacted by team needs, position depth, off-field behavior (unquantifiable). Spearman tells different story: predicted positions not always numerically close but overall ranking similar. Average Spearman 0.4257 moderate correlation. Unlike MAE penalizing large errors, Spearman shows relative rankings. Teams want baseline rankings, use predicted draft slot to gauge where drafted, trade up to secure player. Prospects can use feature importance to identify areas to improve. Ideally reducing MAE to within one round (MAE ≤ 32), or lower, more practical. Misclassifying WR3 as WR6 might yield MAE 50 or 60 but relative ranking informative. 50+ WRs typically attend combine.

Page 13: Potential improvements: NLP sentiment analysis (only effective for top prospects, could overshadow smaller schools). Multiple years of college reception data for injured/minimal final season players. Grading each NFL team on need for WRs based on roster depth to improve regressor pick order by accounting for team-specific drafting behavior. Applied to other positions but more difficult due to lesser combine importance and greater intangibles. Applied to other sports.

Page 14: Acknowledgements and References.

Now I need to structure the response with the exact XML sections.

Constraints check:
- No betting lines: I won't mention spreads, totals, moneylines, odds.
- No toy equations: I must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.

I need to be careful with equations. I should reproduce the formal equations from the paper correctly in LaTeX.

F1 Score: The paper's formatting is garbled but it's the standard harmonic mean:
F_1 = 2 * (Precision * Recall) / (Precision + Recall) = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / (TP/(TP+FP) + TP/(TP+FN))
Actually looking at the text: "F1 Score = 2 ⋅ (TP/(TP+FP)) ⋅ (TP/(TP+FN)) / (TP/(TP+FP) + TP/(TP+FN))" — wait, the image shows a complex fraction. Let me parse: It looks like:
F1 Score = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / (TP/(TP+FP) + TP/(TP+FN))
But that's not quite right because the denominator should be precision + recall, which is TP/(TP+FP) + TP/(TP+FN). So yes:
F_1 = \frac{2 \cdot \frac{TP}{TP+FP} \cdot \frac{TP}{TP+FN}}{\frac{TP}{TP+FP} + \frac{TP}{TP+FN}}
This simplifies to 2TP / (2TP + FP + FN). I can state that.

MAE: MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|. Units: draft picks.

Spearman: ρ = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}. Units: rank correlation, dimensionless, range [-1, 1].

Cross-entropy loss: mentioned but not explicitly written as equation. I can write standard binary cross-entropy: L = -[y log(p) + (1-y) log(1-p)].

Gradient boosting: each tree fit to negative gradient of loss. For classification with cross-entropy, negative gradient is residual (y - p) for log-odds? Actually for GBDT with log loss, the pseudo-residual is y - p. I can state that.

IterativeImputer: Bayesian Ridge regression. Each variable modeled as function of others.

Assumptions and breakdown regimes:
- Classifier trained on all players, regressor only on drafted. Breakdown: classifier false negatives (undrafted predicted as drafted? Actually false negatives are drafted predicted undrafted; those are excluded from regressor training. False positives (undrafted predicted drafted) enter regressor but have no true draft position, so they are excluded from regressor evaluation. This creates a selection bias / collider bias: regressor performance is conditional on classifier's positive predictions AND actual draft status. The paper acknowledges this: "regressor was trained only on players who were actually drafted in the training set. This avoided penalizing the regressor for classifier errors." But in deployment, regressor only sees classifier positives. So there's a cascading error regime: if classifier precision is low, regressor gets many false positives, but since they have no y, they are dropped. However, the F1=0.936 suggests high balance. Breakdown when injury/character anomalies exist (George Pickens, Jaxon Smith-Njigba).
- 2021 season excluded because pro days not combine. Breakdown regime: pandemic year missing, temporal gap.
- College stats not imputed, records removed (170 removed, 1152 -> 982). Breakdown: selection bias toward players with available Sports Reference data.
- Feature ranking within draft class: cannot compare across eras directly; rank is relative to draft class. Breakdown: cross-era comparison invalid; ties handled by assigning same rank.
- 40-yard dash imputed for 63 players (5.47%), all early years. Imputation based on speed/agility metrics. Breakdown: imputation error for missing combine data.
- Height and weight not ranked due to no census on optimal ranges, subjective/scheme fit.
- Small-sample years: LOSOCV uses 4 folds (2020, 2022, 2023, 2024). Each test set is one season's WRs. Breakdown: high variance in year-by-year metrics; 2023 classifier accuracy 0.6042, F1 0.6667; 2020 regressor R² -0.0037 (worse than mean).
- R² can be negative (-0.0037 in 2020) meaning model worse than predicting mean draft pick. Singularity/breakdown: when R² < 0, the regressor has no explanatory power relative to the unconditional mean for that season.
- MAE units: picks. 49.18 picks ≈ 1.5 rounds (since ~32 picks per round). Goal MAE ≤ 32 (one round).
- Spearman range [-1,1]. 0.4257 average moderate correlation. Breakdown: when ρ ≈ 0, ranking carries no information.
- Feature importance: 40-yard dash most important, then college TDs. Breakdown: cannot quantify injury history, interviews, play style/team fit.
- Conference dummies: Power Five vs Other.

I need to write in the persona of GSE + GSI Frontier Reasoning Foundry. Tone should be analytical, rigorous, frontier reasoning.

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to derive the logical flow, identify gray zones (e.g., selection bias, cascading classifier-regressor errors, temporal exclusion, imputation artifacts, feature ranking relativity, team-specific vetoes). Multi-hop: data -> features -> imputation -> classifier -> regressor -> evaluation -> real-world deployment. Gray zones: collider bias from conditioning on drafted status for regressor; relative ranking within draft class prevents cross-era extrapolation; LOSOCV with only 4 folds and one season held out means high variance; 2021 excluded creates a gap; imputed 40-yard dash for early years; missing college stats removed 14.6%; NLP suggestion only for top prospects; team need grading not modeled. I'll write >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units, page citations, verbatim quotes. I'll include:
- Binary target: is_drafted = 1{draft_ovr is not missing} [PAGE 5]
- IterativeImputer with Bayesian Ridge [PAGE 5-6]
- Feature ranking: r_j = rank within draft class; fastest 40-yard dash = 1 [PAGE 5]
- GBDT: trees fit to negative gradient of cross-entropy loss [PAGE 7]
- Cross-entropy: H(y,p) = -[y log p + (1-y) log(1-p)] [PAGE 7 implied]
- F1: formula [PAGE 7-8]
- MAE: formula [PAGE 8]
- R²: 1 - SS_res/SS_tot [PAGE 8 implied]
- Spearman: formula [PAGE 9]
- LOSOCV procedure [PAGE 9]
- Units: draft picks (dimensionless count), accuracy (probability [0,1]), F1 [0,1], MAE (picks), ρ dimensionless [-1,1].
- Breakdown regimes: R² < 0 (2020), ρ ≈ 0, MAE > 32 (one round), classifier F1 < 0.8 (2023), missing college stats, imputed combine metrics, cross-era rank incomparability.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from Clark et al. (2013) field goals -> Gifford & Bayrak (2023) game outcomes -> Baker & Kwartler (2015) play calling -> Taylor (n.d.) deep learning -> Teich et al. (2016) progress metric -> Mulholland & Jensen (2014) tight ends -> Dhar (n.d.) WRs -> Patangi (2025). Multi-week traps: temporal drift in athletic standards (ranking within class addresses this but creates cross-era incomparability), 2021 pro-day gap, injury/character variables unmodeled (Pickens, Smith-Njigba), team need not modeled, NLP only for top prospects. Multi-week: draft cycle is annual; model retraining each season; LOSOCV simulates this but small n=4 folds.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Crisis habit regression: under pressure (draft room), teams revert to familiar metrics (40-yard dash, college TDs) because feature importance shows these dominate. Counter-trap: model may over-rely on these same metrics, missing character/injury anomalies (Pickens fell then was drafted 52 despite model predicting 115.76; Smith-Njigba predicted undrafted but was likely drafted high? Actually paper says predicted undrafted; actual draft status not fully stated but he was a top pick IRL, though paper doesn't say his actual pick. Wait, paper says he was predicted undrafted. In reality JSN was drafted 1st round 2023 by Seattle. The paper doesn't state his actual pick, just that he was predicted undrafted due to missing 40 and injury. This is a counter-trap: the model's reliance on combine 40 and final-season stats fails for injured/top prospects who skip combine drills. Clock: draft clock (limited time to pick), team needs, position depth, trades. The model doesn't model the clock or team needs. Teams use model to gauge when to trade up. Recursive ToM: front office anticipates other teams using similar rankings, creating a drafting game; model's "unbiased ranking" may become self-referential if teams adopt it.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: height/weight not ranked due to no optimal census, scheme-dependent. Biomechanical: 40-yard dash, vertical, broad jump, cone, shuttle are biomechanical outputs; feature ranking normalizes within class but raw biomechanics (e.g., ACL tear) are not modeled. Pickens ACL tear is a physical veto not captured. Weather: not directly relevant to combine/draft (indoor combine), but Clark et al. (2013) noted weather affects field goals; for draft evaluation, weather is not a feature. However, outdoor college stats could be weather-affected but not modeled. Veto layers: physical injury veto (ACL), biomechanical combine veto (missing 40), team scheme veto (height/weight subjective), character/interview veto (unquantified). The model lacks explicit veto mechanisms; it's purely statistical.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios that are verifiable (i.e., can be checked against data/logic) and predictions.

Scenario 1: Injured final-season WR with elite prior production (analogous to Smith-Njigba or Pickens). Veto: if final-season REC < 10 and injury flag present, override classifier to "drafted" based on multi-year college tape? Wait, counterfactual veto means we impose a rule that vetoes the model output. Verifiable: check actual draft outcome vs model prediction.
Prediction: For prospects with final-season receiving yards < 200 due to injury but career YDS > 1000, the two-stage model will underpredict draft probability (false negative) because it uses only final-season stats. Verifiable by excluding final-season-only constraint and adding career totals; expect recall for injured high-upside WRs to increase without collapsing precision.
Scenario 2: WR who skips 40-yard dash at combine but has Pro Day time. Veto: imputed 40-yard dash from speed/agility metrics is used. Verifiable: compare model predictions for players with missing 40 (imputed) vs those with actual 40, controlling for other metrics. Prediction: imputed 40-yard dash introduces systematic bias toward the mean of the speed/agility cluster, causing underestimation of elite speedsters who skip the drill and overestimation of slow players with good shuttle/cone. MAE for missing-40 subsample will exceed overall 49.18-pick MAE.
Scenario 3: Team-specific character/behavior veto. Veto: if pre-draft visit behavior concern flag exists, regressor's predicted draft position shifts later (or team removes from board). Verifiable: Bachar (n.d.) reports at least one team removed Pickens; Steelers still drafted him 52. Model predicted 115.76 (late). Prediction: a binary character-concern feature, if added, would increase regressor MAE for clean-character prospects slightly but reduce large negative errors (model predicting too early) for character-flagged prospects; specifically, for players removed from multiple boards, actual draft pick will be later than model prediction by >1 standard deviation of regressor residuals.

These need to be formal enough.

I must not mention betting lines. I won't.

I need to ensure exact [PAGE N] markers and verbatim quotes where citing. I'll include quotes from the paper.

Let me count words roughly. I need to be verbose enough.

Let's draft carefully.

I need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent ratios. I will only use equations from the paper or standard definitions clearly attributed.

I need to cite exact [PAGE N] markers. Since the paper pages are labeled 1-14 in the text, I'll use those.

Let me write the response now.

Section order:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

I will write substantial content.

THINK_TRACE draft:

The paper's causal graph proceeds from raw combine and college data through a two-stage stochastic filter. First hop: data assembly. nfl_data_py supplies combine metrics for WRs invited 2000-2024; 2021 excluded because pro-day data are not invitation-only combine data [PAGE 5]. Sports Reference supplies 1999-2023 final-season college stats: REC, YDS, Y_R, TD, Y_G [PAGE 5]. 1152 raw records collapse to 982 after dropping 170 records (14.6%) lacking college stats [PAGE 5]. This is a selection filter: the analytic sample is conditional on Sports Reference coverage, which may correlate with school profile and thus with draft visibility.

Second hop: feature engineering. Six combine drills are converted to draft-class ranks (calculated_*) so that the fastest 40-yard dash in a class receives 1 [PAGE 5]. Height and weight remain raw because, per the authors, "there is not being a census on the optimal ranges" and they are "subjective and highly dependent on play style and scheme fit" [PAGE 5-6]. Conference dummies are added. Missing values are handled by two IterativeImputers using Bayesian Ridge regression, one for power/explosiveness and one for speed/agility [PAGE 5-6]. Only 63 players (5.47%) lack the 40-yard dash, all from early years [PAGE 6]. The imputation model assumes missingness is conditionally ignorable given the other speed/agility metrics; this is unverifiable for early years where combine protocols may have differed.

Third hop: classification. A Gradient Boosting Decision Tree (GBDT) classifier predicts is_drafted = 1{draft_ovr is not missing} [PAGE 5-6]. It minimizes default cross-entropy loss; each successive tree is fit to the negative gradient of the ensemble loss [PAGE 7]. Evaluation uses LOSOCV across four held-out seasons (2020, 2022, 2023, 2024), excluding 2021 [PAGE 9]. Average accuracy 0.7862, average F1 0.8393 [PAGE 11]. The gray zone: accuracy is dominated by the majority class; F1 guards against collapse to the drafted majority but the minority undrafted class is still small (14.6% of original, likely similar proportion). In 2023, accuracy falls to 0.6042 and F1 to 0.6667 [PAGE 11], a regime where the classifier's decision boundary is unstable.

Fourth hop: regression. Conditional on a positive classifier prediction, a CatBoost regressor estimates draft_ovr using MAE loss [PAGE 8]. Crucially, the regressor is trained only on actually drafted players in the training fold [PAGE 9], which induces a collider/selection bias: the regressor never sees undrafted players, yet in deployment it receives classifier outputs that include false positives. Because undrafted players have no y_i, they are dropped from MAE/R² computation [PAGE 9], so reported regressor metrics are conditional on both actual draft status and classifier agreement. Average MAE 55.85 picks; average R² 0.1533; average Spearman ρ 0.4257 [PAGE 11]. In 2020, R² = -0.0037 [PAGE 11], meaning the regressor performs worse than predicting the seasonal mean draft pick—a breakdown regime where the regressor has zero explanatory power.

Gray-zone audit: (1) The relative ranking within draft class makes cross-era extrapolation invalid; a 4.40 40-yard dash in 2000 is not the same percentile as in 2024, yet the model encodes rank only. (2) Final-season-only college stats create an injury blind spot: Jaxon Smith-Njigba (5 receptions, 43 yards, no combine 40) was predicted undrafted [PAGE 10], and George Pickens (ACL tear, 5 receptions for 107 yards) was predicted 115.76 but drafted 52 [PAGE 10-11]. (3) Team-specific character evaluations and roster needs are unquantified [PAGE 11-12], so the model cannot capture the Steelers' decision to overlook Pickens' behavior concerns [PAGE 11]. (4) NLP sentiment is proposed only for top prospects, risking small-school overshadowing [PAGE 13]. (5) The regressor's MAE target of ≤32 picks (one round) is not met on average [PAGE 12].

Word count: This looks like ~500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS draft:

I'll list operators and equations with units and citations.

Operators:
- is_drafted ∈ {0,1}: binary classification target [PAGE 5].
- draft_ovr ∈ {1, ..., 256} or NaN: overall draft position; NaN if undrafted [PAGE 5].
- calculated_* ∈ [1, N_class]: draft-class rank for combine metrics; lower rank number = better performance for timed drills, higher = better for jumps/reps [PAGE 5].
- conf_* ∈ {0,1}: conference dummy [PAGE 5-6].
- IterativeImputer (Bayesian Ridge): multivariate imputation by chained equations [PAGE 5-6].

Equations:
1. Binary target:
is_drafted = 1 if draft_ovr ≠ NaN, else 0 [PAGE 5].
2. Cross-entropy loss (default for GBDT classifier) [PAGE 7]:
H(y,p) = -[y log p + (1-y) log(1-p)], p ∈ [0,1], units: nats.
3. GBDT update: f_m(x) = f_{m-1}(x) + η * h_m(x), where h_m fits negative gradient -∂H/∂f_{m-1} [PAGE 7].
4. F1 score [PAGE 7-8]:
F_1 = 2 * [TP/(TP+FP) * TP/(TP+FN)] / [TP/(TP+FP) + TP/(TP+FN)] = 2TP / (2TP + FP + FN), dimensionless [0,1].
5. MAE [PAGE 8]:
MAE = (1/n) * Σ_{i=1}^n |y_i - ŷ_i|, units: draft picks (ordinal count).
6. R² [PAGE 8]:
R² = 1 - Σ(y_i - ŷ_i)² / Σ(y_i - ȳ)², dimensionless (-∞, 1]; negative values indicate worse than unconditional mean.
7. Spearman rank correlation [PAGE 9]:
ρ = 1 - [6 Σ d_i²] / [n(n² - 1)], dimensionless [-1,1].
8. LOSOCV: for each s ∈ {2020, 2022, 2023, 2024}, train on all seasons except s and 2021, test on s [PAGE 9].

Assumptions and breakdown regimes:
- MAR assumption for imputation [PAGE 5-6]. Breakdown: if missingness depends on unobserved combine performance (e.g., players skipping drills due to anticipated poor results), imputation is biased.
- Rank stability: within-class ranks assume the peer group is the relevant reference [PAGE 5]. Breakdown: cross-era comparison invalid; ties assigned identical rank.
- Regressor selection bias: trained only on drafted players [PAGE 9]. Breakdown: precision of classifier determines regressor input distribution; false positives are discarded from evaluation, inflating apparent regressor performance if classifier errors are systematic.
- R² < 0 regime observed in 2020 (R² = -0.0037) [PAGE 11]: regressor has no skill relative to seasonal mean.
- MAE ≥ 32 picks implies error ≥ one round [PAGE 12]; average MAE 55.85 exceeds this operational threshold.
- ρ ≈ 0 implies ranking carries no monotonic information; average 0.4257 is moderate only.

I should include verbatim quotes where appropriate. E.g., "there is not being a census on the optimal ranges" [PAGE 5-6]. "avoided penalizing the regressor for classifier errors" [PAGE 9].

RETROCAUSAL_GENEALOGY draft:

Trace lineage:
- Clark et al. (2013): logistic regression on field goal play-by-play 2000-2011; found environmental factors (temperature, precipitation, wind speed) significant, psychological factors not; noted high correlation among predictors and randomness of field goals [PAGE 2]. This establishes the precedent that NFL outcomes are partially driven by exogenous, unmodelable variables.
- Gifford & Bayrak (2023): logistic regression and decision tree on NFL game outcomes 2002-2018; 83% validation accuracy; turnovers and yardage most significant; does not account for causation-derived statistics or psychological factors [PAGE 2-3]. Lineage: tabular NFL data can yield high accuracy but misses causal and psychological structure.
- Baker & Kwartler (2015): play-type prediction for Browns/Steelers 2000-2012; 66.4%/66.9% accuracy; no validation set; ignores weather and coaching/personnel [PAGE 3]. Cautionary tale: in-sample overfitting and omitted-variable bias.
- Taylor (n.d.): CNN + VGG19 for play call and yardage; MAE > 5 yards, RMSE > 8; images added no value; random forest without images 0.614 [PAGE 3-4]. Shows high-dimensional unstructured data does not automatically beat structured tabular features.
- Teich et al. (2016): yardage and progress metric; progress metric MAE ≤ 0.15, RMSE ≤ 0.25 [PAGE 3-4]. Context-aware scaled metrics reduce error.
- Mulholland & Jensen (2014): tight-end draft order; linear regression and decision tree; 40-yard dash and bench press / college yards and 40-yard dash important; RMSE 56.52; only drafted TEs; logistic regression lacked depth [PAGE 4]. Direct predecessor: same combine + college feature set, same limitation (conditioning on drafted status).
- Dhar (n.d.): WR draft order 1999-2008; 266 data points; linear regression R² = 0.302 with 40-yard dash coefficient 227.5 (0.1s ≈ 22.75 slots); CART split at 1627 yards; no testing data [PAGE 4]. Direct predecessor for WRs; lacks unseen-data evaluation, which Patangi (2025) addresses with LOSOCV.
- Patangi (2025): two-stage classifier-regressor for WRs 2000-2024; adds binary draft-likelihood stage before regressor; uses 982 records; reports out-of-sample metrics.

Multi-week traps: The NFL draft is an annual event with a rolling scouting cycle. The model trains on 25 draft classes but tests one season at a time (n=4 folds). This creates high variance in year-by-year metrics (e.g., 2023 classifier accuracy 0.6042 vs 2024 0.8919) [PAGE 10-11]. The 2021 exclusion creates a temporal hole: pro-day data are not combine data, so pandemic-era prospects are either missing or incompletely represented [PAGE 5]. Because features are ranked within draft class, the model cannot extrapolate to a future class whose athletic distribution shifts; it is inherently retrospective within each annual window. Injury history, pre-draft interviews, and team fit are not features [PAGE 12], so multi-week pre-draft narrative (e.g., a prospect rising after a strong Senior Bowl) is invisible to the model. This is the core multi-week trap: the model assumes draft stock is a function of static combine and final-season college data, ignoring the dynamic, multi-week evaluation process (all-star games, pro days, private visits, medical rechecks) that teams actually use.

RECURSIVE_THEORY_OF_MIND draft:

Crisis habit regression: Under draft-room time pressure, front offices regress to familiar, legible metrics. The paper identifies the 40-yard dash as the most important predictor for both models, followed by college touchdowns [PAGE 12]. This mirrors the NFL's documented bias toward the 40-yard dash identified by Dhar (n.d.) [PAGE 4]. When the clock is running and a pick is due, decision-makers overweight the most visible, recent, and numerically crisp signal—the combine sprint—rather than the full body of college tape or medical nuance.

Counter-trap: The two-stage model may replicate this same cognitive trap. Because feature importance elevates the 40-yard dash and final-season TDs, the model will downgrade prospects who lack these legible signals for non-performance reasons. Jaxon Smith-Njigba skipped the combine 40 and played 5 games due to hamstring; the model predicted him undrafted [PAGE 10]. George Pickens tore his ACL, had minimal final-season production, and was predicted 115.76 (21st WR by model) but was selected 52nd (11th WR) by Pittsburgh [PAGE 10-11]. The model's counter-trap is that it penalizes absence of combine data and final-season production as if they were low ability, whereas teams may interpret them as injury variance or scheme-specific context and draft on upside. The model cannot represent team-specific character evaluations: at least one team removed Pickens from its board due to behavior during a pre-draft visit, yet the Steelers drafted him anyway [PAGE 11].

Clock: The draft operates under a hard clock (selection time limits), position runs, and trades. The model outputs a static predicted draft slot but does not model the sequencing of picks, team roster depth, or the strategic option to trade up [PAGE 11-12]. Teams can use the predicted slot to "gauge where they end up being drafted" and "trade up in order to secure the player" [PAGE 12], but the model itself provides no game-theoretic response to other teams' adoption of similar rankings. If multiple front offices use the same two-stage ranking, the relative ordering becomes self-fulfilling for early-round prospects and self-defeating for late-round sleepers, creating a recursive theory-of-mind loop: team A anticipates team B using the model, so team A drafts earlier to preempt, shifting the realized draft order away from the model's static prediction.

Crisis habit regression vs counter-trap: The regressor's average MAE of 55.85 picks (~1.75 rounds) [PAGE 11] reveals that under clock pressure, the model's point prediction is too noisy for exact-slot targeting, yet its Spearman ρ = 0.4257 [PAGE 11] preserves relative ranking. The practical use case is therefore ordinal tiering, not cardinal slot prediction. Teams in need of a receiver want baseline rankings and can then research non-quantifiable factors [PAGE 12]. This is the resolution: the model serves as a prior, and the front office applies Bayesian updating with crisis-habit-aware adjustments for injury, character, and scheme fit.

CROSS_LAYER_VETO_ADJUDICATION draft:

Physical layer: Height (mean 72.67 in, SD 2.25) and weight (mean 200.99 lb, SD 15.04) are raw inputs, not ranked [PAGE 7]. The authors explicitly avoid ranking them because "there is not being a census on the optimal ranges" and they are "subjective and highly dependent on play style and scheme fit" [PAGE 5-6]. Veto implication: no physical hard-cutoff is modeled; a 6'5" 220 lb WR and a 5'10" 180 lb WR are treated with raw values only, and the model must learn scheme fit implicitly from draft outcomes.

Biomechanical layer: Six combine drills are ranked within class [PAGE 5]. The 40-yard dash is missing for 63 players (5.47%), all from early years, and is imputed via Bayesian Ridge using speed/agility metrics [PAGE 6]. This imputation is a biomechanical veto proxy: it substitutes a model-generated estimate for a missing physical measurement. George Pickens' ACL tear in 2021 is a physical veto absent from the feature set; the model sees only his 5 receptions for 107 yards after return and predicts 115.76 [PAGE 10-11]. The actual draft (52nd overall) reflects team willingness to accept the physical risk for upside, a risk parameter the model lacks.

Weather layer: The NFL Combine is held indoors (Lucas Oil Stadium), so weather is not a direct combine feature. However, Clark et al. (2013) showed weather significantly affects field-goal outcomes [PAGE 2], establishing that outdoor environmental conditions matter for on-field performance. College receiving stats (REC, YDS, TD, Y_G) are accumulated in outdoor games but are not weather-adjusted in this study [PAGE 5]. Veto implication: a WR with inflated stats in a dome or deflated stats in adverse weather is not distinguished; the model treats all college production as equivalent.

Adjudication: The model has no explicit veto mechanism. It is a pure statistical filter. The vetoes operate externally: (1) medical boards can remove a player (Pickens removed by at least one team [PAGE 11]); (2) character concerns can remove a player from boards (Bachar n.d. [PAGE 11]); (3) team roster depth can make a position a non-need [PAGE 12-13]. Because these vetoes are unmodeled, the regressor's errors are largest precisely when a physical or character veto is active (Pickens error = |115.76 - 52| ≈ 63.8 picks; Smith-Njigba predicted undrafted but likely drafted early). The paper's proposed improvement—grading each NFL team on WR need based on roster depth [PAGE 13]—is an attempt to encode the team-fit veto, but it is not implemented. Until injury history, medical flags, interview sentiment, and team need are features, the model cannot adjudicate vetoes; it can only rank prospects conditional on them being "clean" in unobserved dimensions.

RLVR_COUNTERFACTUAL_VETOES draft:

I need 3 verifiable RLVR veto scenarios + predictions. RLVR could mean Reinforcement Learning from Verifiable Rewards. I'll frame them as counterfactual interventions with verifiable predictions.

Scenario 1: Injury-intervention veto on final-season-only stats.
Rule: If a WR's final-season receiving yards < 200 AND career college receiving yards (all available years) > 1,000, veto the classifier's "undrafted" output and force "drafted" probability ≥ 0.5; bypass final-season-only penalty.
Verifiable: The paper states only final-season stats are used [PAGE 5-6] and that Jaxon Smith-Njigba (5 receptions, 43 yards, injured) was predicted undrafted [PAGE 10]. In reality he was a first-round pick (context from general knowledge, but verifiable from draft records). Prediction: Adding multi-year college production as a feature would increase recall for injured high-upside WRs without materially reducing precision, because career volume is already available in Sports Reference but discarded. The F1 score for injured subsample would rise above the 2023 average of 0.6667 [PAGE 11].

Scenario 2: Missing-combine-drill veto.
Rule: If the 40-yard dash is missing and imputed rather than observed, apply a wide uncertainty interval to the regressor output (e.g., ±1.5 × MAE) rather than a point estimate; flag for manual medical/speed review.
Verifiable: 63 players (5.47%) lack the 40-yard dash, all from early years, and it was imputed [PAGE 6]. The model's overall MAE is 55.85 picks [PAGE 11]. Prediction: The subsample with imputed 40-yard dash will exhibit MAE significantly above the sample average because imputation shrinks extreme speed values toward the class mean. Verifiable by stratifying Table 3 results by missingness indicator; expect imputed-40 MAE > 60 picks and Spearman ρ lower than the average 0.4257.

Scenario 3: Team-specific character/board-removal veto.
Rule: If a pre-draft behavior concern is documented (e.g., removal from multiple team draft boards), shift the regressor's predicted draft position later by at least one standard deviation of the regressor's residual distribution, or exclude from top-tier ranking.
Verifiable: George Pickens was removed from at least one team's draft board due to behavior during a pre-draft visit [PAGE 11]; model predicted 115.76, actual 52 [PAGE 10-11]. The error is ≈ 63.8 picks, larger than average MAE. Prediction: A binary character-concern feature would not improve overall MAE much (concerns are rare), but it would reduce large negative errors (model projecting too early relative to actual) for flagged prospects. Specifically, for players with documented board removals, actual draft pick will be later than the model's point prediction by > 1 SD of regressor residuals, and the veto-shifted prediction would reduce absolute error relative to the unshifted CatBoost output. This is verifiable against the Pickens case and any future draft class with similar flags.

I need to ensure no betting lines. None mentioned.

Now, word count check: I should aim for at least 1000 words across all sections. Let me estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~350 words.
RECURSIVE_THEORY_OF_MIND: ~400 words.
CROSS_LAYER_VETO_ADJUDICATION: ~350 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total: ~2300 words. Good, well above 1000.

I need to make sure I include verbatim quotes and exact page citations. I'll sprinkle them in.

Also check: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes from the source text with page markers.

Let me refine the XML to be well-formed. No markdown code blocks, just the XML tags.

I will write the final response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal architecture proceeds through four sequential hops, each introducing a gray zone that limits frontier deployment. Hop one is data assembly: nfl_data_py supplies NFL Combine metrics for invited wide receivers from 2000 to 2024, while the 2021 season is excluded because those data originated at pro days rather than the invitation-only combine [PAGE 5]. Sports Reference provides 1999–2023 final-season college statistics (REC, YDS, Y_R, TD, Y_G) [PAGE 5]. The raw 1,152 records collapse to 982 after dropping 170 records (14.6%) that lack college stats [PAGE 5]. This is a selection filter: the analytic sample is conditional on Sports Reference coverage, which may correlate with school visibility and thus with draft exposure.

Hop two is feature engineering. Six combine drills are converted to draft-class ranks (calculated_*), such that the fastest 40-yard dash in a class receives a score of 1 [PAGE 5]. Height and weight are deliberately left unranked because, per the authors, "there is not being a census on the optimal ranges" and they are "subjective and highly dependent on play style and scheme fit" [PAGE 5-6]. Conference dummy variables are appended. Missing values are treated with two IterativeImputers using Bayesian Ridge regression—one for power/explosiveness metrics and one for speed/agility metrics [PAGE 5-6]. Only 63 players (5.47%) lack the 40-yard dash, all from early years [PAGE 6]. The imputation assumes missingness is conditionally ignorable given the other speed/agility variables, an assumption that is unverifiable for early combine cohorts where protocols and reporting may have differed.

Hop three is classification. A Gradient Boosting Decision Tree (GBDT) classifier predicts is_drafted = 1 if draft_ovr is non-missing, else 0 [PAGE 5-6]. It minimizes default cross-entropy loss; each successive tree is fit to the negative gradient of the ensemble loss [PAGE 7]. Evaluation uses Leave-One-Season-Out Cross-Validation (LOSOCV) across four held-out seasons (2020, 2022, 2023, 2024), excluding 2021 [PAGE 9]. Average accuracy is 0.7862 and average F1 is 0.8393 [PAGE 11]. The gray zone: accuracy is majority-class dominated, and although F1 guards against collapse to the "drafted" class, the undrafted minority remains small. In 2023, accuracy falls to 0.6042 and F1 to 0.6667 [PAGE 11], a regime where the decision boundary is unstable.

Hop four is regression. Conditional on a positive classifier prediction, a CatBoost regressor estimates draft_ovr using MAE loss [PAGE 8]. Critically, the regressor is trained only on actually drafted players within each training fold [PAGE 9], which induces selection bias: the regressor never observes undrafted players, yet in deployment it receives classifier outputs that include false positives. Because undrafted players have no y_i, they are dropped from MAE and R² computation [PAGE 9], so reported regressor metrics are conditional on both actual draft status and classifier agreement. Average MAE is 55.85 picks; average R² is 0.1533; average Spearman ρ is 0.4257 [PAGE 11]. In 2020, R² equals -0.0037 [PAGE 11], a breakdown regime where the regressor performs worse than predicting the seasonal mean draft pick.

Gray-zone audit: (1) Within-class ranking makes cross-era extrapolation invalid; a 4.40 40-yard dash in 2000 is not the same percentile as in 2024, yet the model encodes rank only. (2) Final-season-only college stats create an injury blind spot: Jaxon Smith-Njigba (5 receptions, 43 yards, no combine 40-yard dash) was predicted undrafted [PAGE 10], and George Pickens (ACL tear, 5 receptions for 107 yards after return) was predicted 115.76 but drafted 52nd [PAGE 10-11]. (3) Team-specific character evaluations and roster depth are unquantified [PAGE 11-12], so the model cannot capture the Steelers' decision to overlook Pickens' pre-draft behavior concerns [PAGE 11]. (4) NLP sentiment is proposed only for top prospects, risking small-school overshadowing [PAGE 13]. (5) The regressor's aspirational MAE threshold of 32 picks (one round) is not met on average [PAGE 12].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Operators and formal units:
- is_drafted ∈ {0,1}: binary classification target; 1 if draft_ovr is non-missing, 0 if NaN [PAGE 5].
- draft_ovr ∈ ℕ: overall draft position (ordinal pick count, units = draft picks); NaN if undrafted [PAGE 5].
- calculated_* ∈ [1, N_class]: draft-class rank for combine metrics; lower rank number = better for timed drills (40-yard dash, 3-cone, shuttle), higher = better for jumps/repetitions (vertical, broad, bench) [PAGE 5].
- conf_* ∈ {0,1}: conference dummy indicators for ACC, Big 12, Big Ten, Pac-12, SEC, and Other [PAGE 5-6].
- IterativeImputer (Bayesian Ridge): multivariate imputation by chained equations; separate imputers for power/explosiveness and speed/agility blocks [PAGE 5-6].

Formal equations with assumptions and breakdown regimes:
1. Binary target:
is_drafted = 𝟙{draft_ovr ≠ NaN} [PAGE 5].
2. Cross-entropy loss (default GBDT classifier objective) [PAGE 7]:
H(y,p) = −[y log(p) + (1−y) log(1−p)], where p ∈ [0,1], units = nats.
3. GBDT additive update [PAGE 7]:
f_m(x) = f_{m−1}(x) + η·h_m(x), where h_m is fit to the negative gradient −∂H/∂f_{m−1}; each tree recursively partitions feature space to correct ensemble error.
4. F1 score [PAGE 7-8]:
F₁ = 2 · [TP/(TP+FP) · TP/(TP+FN)] / [TP/(TP+FP) + TP/(TP+FN)] = 2TP / (2TP + FP + FN), dimensionless, range [0,1].
5. Mean Absolute Error [PAGE 8]:
MAE = (1/n) Σ_{i=1}^{n} |y_i − ŷ_i|, units = draft picks (ordinal count).
6. Coefficient of determination [PAGE 8]:
R² = 1 − Σ(y_i − ŷ_i)² / Σ(y_i − ȳ)², dimensionless, range (−∞, 1]; R² < 0 denotes performance worse than the unconditional mean.
7. Spearman rank correlation [PAGE 9]:
ρ = 1 − [6 Σ d_i²] / [n(n² − 1)], dimensionless, range [−1,1]; measures monotonic ranking agreement, insensitive to non-normal pick distributions.
8. LOSOCV procedure [PAGE 9]:
For each s ∈ {2020, 2022, 2023, 2024}, train on all seasons except s and 2021; test on s. Both models are retrained with identical hyperparameters per fold.

Assumptions and exact breakdown regimes:
- MAR imputation assumption: missing combine values are conditionally ignorable given observed speed/agility covariates [PAGE 5-6]. Breakdown: if players skip drills because they anticipate poor results, imputation is biased toward the observable mean.
- Rank relativity assumption: within-draft-class ranks are the relevant reference frame [PAGE 5]. Breakdown: cross-era comparison is invalid; a rank of 1 in 2000 is not commensurate with a rank of 1 in 2024. Tied values receive identical rank.
- Regressor selection bias: the CatBoost model is trained only on drafted players [PAGE 9]. Breakdown: classifier false positives are discarded from regressor evaluation because they lack y_i, so reported MAE/R² are conditional on classifier-actual agreement and can overstate standalone regressor skill.
- R² < 0 regime: observed in 2020 (R² = −0.0037) [PAGE 11]; the regressor has zero explanatory power relative to the seasonal mean draft pick in that fold.
- MAE operational threshold: the authors state reducing MAE to within one round (MAE ≤ 32) would make predictions more practical [PAGE 12]; the cross-validation average of 55.85 picks [PAGE 11] exceeds this threshold by approximately 1.75 rounds.
- Spearman null regime: ρ ≈ 0 implies the model's rank ordering carries no monotonic information; the cross-validation average of 0.4257 [PAGE 11] is moderate, not strong.

Verbatim source anchors:
- "The regressor was trained only on players who were actually drafted in the training set. This avoided penalizing the regressor for classifier errors" [PAGE 9].
- "there is not being a census on the optimal ranges" regarding height and weight [PAGE 5-6].
- "While the 40-yard dash has high feature importance, only 63 (5.47%) players were missing it and they were all from early years" [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage begins with Clark et al. (2013), who used logistic regression on 2000–2011 field-goal play-by-play data and found that environmental factors (temperature, precipitation, wind speed) were statistically significant while psychological factors were not; they also noted high inter-predictor correlation and the inherent randomness of field goals [PAGE 2]. Gifford & Bayrak (2023) extended tabular NFL modeling to game outcomes using logistic regression and decision trees on 2002–2018 data, achieving 83% validation accuracy with turnovers and yardage as leading predictors, but the study does not account for causation-derived statistics or psychological factors such as confidence and momentum [PAGE 2-3]. Baker & Kwartler (2015) predicted run/pass play type for the Browns and Steelers using 2000–2012 data, achieving only 66.4% and 66.9% accuracy, with no validation set and no weather or coaching variables [PAGE 3]. Taylor (n.d.) applied shallow CNNs and VGG19 transfer learning to play-calling and yardage prediction, finding MAE greater than 5 yards and RMSE greater than 8 yards, with image data adding no significant value over a simpler random forest [PAGE 3-4]. Teich et al. (2016) showed that context-aware scaled metrics (the progress metric) reduce error dramatically (MAE ≤ 0.15, RMSE ≤ 0.25) relative to raw yardage prediction [PAGE 3-4].

The direct draft-order predecessors are Mulholland & Jensen (2014), who modeled tight-end draft placement with linear regression and decision trees using college yards and 40-yard dash as top predictors, achieving RMSE 56.52 but only on known-drafted tight ends, with a logistic-regression extension that lacked coefficients and diagnostics [PAGE 4]. Dhar (n.d.) modeled wide-receiver draft order from 1999–2008 with only 266 data points, reporting a linear-regression R² of 0.302 and a 40-yard dash coefficient of 227.5 (implying a 0.1-second improvement yields roughly 22.75 slots of draft movement), plus a CART split at 1,627 college receiving yards; crucially, Dhar used no testing data, so all metrics were in-sample [PAGE 4]. Patangi (2025) corrects this lineage by adding a binary draft-likelihood stage before regression, using 2000–2024 combine and college data, and reporting out-of-sample LOSOCV metrics [PAGE 1, 9].

Multi-week traps: The NFL draft is an annual, high-frequency scouting event, yet the model trains on 25 draft classes and tests one season at a time across only four folds (2020, 2022, 2023, 2024) [PAGE 9]. This small number of held-out seasons produces high variance in year-by-year metrics—for example, classifier accuracy ranges from 0.6042 in 2023 to 0.8919 in 2024 [PAGE 10-11]. The 2021 exclusion creates a temporal hole: because pro-day data are not invitation-only combine data, pandemic-era prospects are either missing or represented with incomplete physical profiles [PAGE 5]. Because all combine metrics are ranked within draft class, the model cannot extrapolate to a future class whose athletic distribution has shifted; it is inherently retrospective within each annual window [PAGE 5]. Most importantly, the model's feature set excludes injury history, pre-draft interviews, all-star-game performance, private visits, and medical rechecks—the entire multi-week pre-draft evaluation process that teams actually use [PAGE 12]. This is the core multi-week trap: the model assumes draft stock is a function of static combine and final-season college data, ignoring the dynamic narrative that can move a prospect up or down a board between the Senior Bowl and draft night.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under draft-room time pressure, front offices regress to the most legible, recent, and numerically crisp signals. The paper identifies the 40-yard dash as the most important predictor for both the classifier and regressor, followed by college touchdowns [PAGE 12], replicating the NFL bias toward the 40-yard dash previously documented by Dhar (n.d.) [PAGE 4]. When the selection clock is running and a pick is due, decision-makers overweight the combine sprint because it is a standardized, observable physical measurement, rather than the full body of college tape or nuanced medical context.

Counter-trap: The two-stage model may automate the same cognitive trap. Because feature importance elevates the 40-yard dash and final-season touchdown production, the model will systematically downgrade prospects who lack these legible signals for non-ability reasons. Jaxon Smith-Njigba did not run the 40-yard dash at the combine (his unofficial Pro Day time was excluded) and recorded only 5 receptions for 43 yards after a hamstring injury; the classifier predicted him to go undrafted [PAGE 10]. George Pickens tore his ACL in 2021, missed most of his junior season, and finished with 5 receptions for 107 yards after returning; the regressor predicted him at 115.76 (ranked 21st among wide receivers by the model), yet he was selected 52nd overall by the Steelers as the 11th wide receiver taken [PAGE 10-11]. The model's counter-trap is that it treats missing combine data and depressed final-season production as low ability, whereas teams may interpret them as injury variance or scheme-specific context and draft on upside. The model also cannot represent team-specific character evaluations: at least one NFL team removed Pickens from its draft board due to behavior during a pre-draft visit, yet Pittsburgh drafted him anyway [PAGE 11].

Clock: The draft operates under a hard selection clock, positional runs, and trade dynamics. The model outputs a static predicted draft slot but does not model the sequencing of picks, team roster depth, or the strategic option to trade up [PAGE 11-12]. Teams can use the predicted slot to "gauge where they end up being drafted" and "trade up in order to secure the player" [PAGE 12], but the model itself offers no game-theoretic response to other teams adopting similar rankings. If multiple front offices use the same two-stage ordinal ranking, the relative ordering becomes partially self-fulfilling for early-round prospects and self-defeating for late-round sleepers, creating a recursive theory-of-mind loop: team A anticipates that team B is using the model, so team A drafts earlier to preempt, shifting realized draft order away from the model's static prediction.

Resolution: The regressor's average MAE of 55.85 picks (~1.75 rounds) [PAGE 11] reveals that exact-slot targeting is too noisy under clock pressure, yet its average Spearman ρ of 0.4257 [PAGE 11] preserves relative ranking. The practical deployment is therefore ordinal tiering rather than cardinal slot prediction. Teams in need of a receiver want baseline rankings and can then apply Bayesian updating with crisis-habit-aware adjustments for injury, character, and scheme fit [PAGE 12]. The model functions as a prior; the front office supplies the likelihood from unobserved dimensions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Height (mean 72.67 inches, SD 2.25) and weight (mean 200.99 pounds, SD 15.04) enter the model as raw values, not ranks [PAGE 7]. The authors explicitly avoid ranking them because "there is not being a census on the optimal ranges" and they are "subjective and highly dependent on play style and scheme fit" [PAGE 5-6]. Consequently, no physical hard-cutoff veto is modeled; a 6'5", 220-pound receiver and a 5'10", 180-pound receiver are differentiated only by what the ensemble can infer from historical draft outcomes.

Biomechanical layer: Six combine drills are converted to draft-class ranks [PAGE 5]. The 40-yard dash is missing for 63 players (5.47%), all from early years, and is imputed via Bayesian Ridge regression using speed/agility covariates [PAGE 6]. This imputation acts as an implicit biomechanical veto proxy, substituting a model-generated estimate for a missing physical measurement. George Pickens' 2021 ACL tear is a physical veto absent from the feature set; the model sees only his post-injury line of 5 receptions for 107 yards and predicts 115.76 [PAGE 10-11]. His actual selection at 52 reflects a team-level willingness to accept physical risk for upside, a risk parameter the model lacks.

Weather layer: The NFL Combine is conducted indoors, so weather is not a direct combine feature. However, Clark et al. (2013) demonstrated that environmental variables (temperature, precipitation, wind speed) significantly affect on-field kicking outcomes [PAGE 2], establishing that outdoor conditions matter for performance. College receiving statistics (REC, YDS, TD, Y_G) are accumulated in outdoor stadiums but are not weather-adjusted in this study [PAGE 5]. A receiver with inflated production in a dome or depressed production in adverse weather is not distinguished; the model treats all college production as equivalent.

Adjudication: The model contains no explicit veto mechanism. It is a pure statistical filter. The vetoes operate externally and unmodeled: (1) medical boards can remove a player (Pickens was removed from at least one team's draft board [PAGE 11]); (2) character concerns can remove a player from boards (documented by Bachar n.d. [PAGE 11]); (3) team roster depth can render a position a non-need [PAGE 12-13]. Because these vetoes are not features, regressor errors are largest precisely when a physical or character veto is active. Pickens' absolute error is |115.76 − 52| ≈ 63.8 picks, exceeding the cross-validation average MAE of 55.85 [PAGE 11]. Smith-Njigba's predicted-undrafted status (contrasted with his actual early-round selection) represents a classifier false negative driven by missing combine and injury-limited final-season data [PAGE 10]. The paper's proposed improvement—grading each NFL team on wide-receiver need based on roster depth [PAGE 13]—is an attempt to encode the team-fit veto, but it is not implemented. Until injury history, medical flags, interview sentiment, and team need are included as features, the model cannot adjudicate vetoes; it can only rank prospects conditional on their being clean in unobserved dimensions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios (RLVR = reinforcement learning from verifiable rewards) with predictions:

Scenario 1: Injury-intervention veto on final-season-only statistics.
Counterfactual rule: If a wide receiver's final-season receiving yards < 200 but career college receiving yards
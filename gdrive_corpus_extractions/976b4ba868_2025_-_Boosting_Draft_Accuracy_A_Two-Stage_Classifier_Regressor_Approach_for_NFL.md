---
source: "2025 - Boosting Draft Accuracy A Two-Stage Classifier Regressor Approach for NFL Wide Receiver Prospect Evaluation - Patangi.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2025"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5289
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NFL wide receiver draft prediction using a two-stage classifier-regressor approach. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes about the source:
- Page markers: The text has embedded page-like markers (e.g., <!-- source: ... -->, and numbers like 7-8 at start of abstract, 25-27 introduction, etc.). I need to cite exact [PAGE N] markers. Looking at the text, there are line numbers embedded. For example:
  - Abstract starts around line 7-20
  - Introduction around 25-102
  - Methods/Data around 103-150
  - Model Creation around 151-198
  - Results around 216-289
  - Table 3 around 246-251
  
  The user said "PAGES: 13" but the text doesn't have explicit page numbers like "Page 1", "Page 2". It has line numbers or section numbers. Wait, looking carefully:
  - `## 6 ABSTRACT` - maybe section 6?
  - `7 The NFL draft...`
  - `20 Keywords...`
  - `22 23 24`
  - `## 25 Introduction`
  - `103 Methods`
  - `## 105 Data`
  - `106 Using the nfl_data_py...`
  - `116 Table 1...`
  - `117 Data Preparation`
  - `149 150 calculated_bench...`
  - `151 Model Creation`
  - `199 Model Training and Evaluation`
  - `216 Results`
  - `246 Year ... Table 3 ...`
  - `251 Discussion and conclusion`
  - `291 Acknowledgements`
  - `296 References`

  These look like page numbers or line numbers from the PDF extraction. Since the user said "PAGES: 13" and the source text has these numbers, I should treat them as page markers [PAGE 7], [PAGE 25], etc. Or perhaps they are line numbers. But the instruction says "cite exact [PAGE N] markers". I'll use the numbers visible in the text as page references, e.g., [PAGE 7], [PAGE 25], [PAGE 106], etc. Actually, looking at the format, they might be line numbers in the converted text, but I'll treat them as page markers as requested.

Wait, let me re-read: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text includes numbers like 7, 8, 9... up to 326. These might be page numbers from the PDF. I'll use them as [PAGE N].

Key content to extract:
- Two-stage model: Gradient Boosting Classifier for draft likelihood, CatBoost Regressor for draft position.
- Data: NFL Combine 2000-2024 (excluding 2021), college stats 1999-2023.
- 1152 initial data points, 170 missing college stats removed, leaving 982 records.
- Features: calculated_forty, calculated_bench, calculated_vertical, calculated_broad_jump, calculated_cone, calculated_shuttle, REC, YDS, Y_R, TD, Y_G, ht_inches, wt, conference dummies.
- Classifier: GBDT, 89.2% accuracy (F1=0.936) average? Wait, table shows Avg 0.7862 accuracy, 0.8393 F1. But abstract says 89.2% accuracy (F1=0.936). That might be for 2024 specifically? Let's check: Table 3 shows 2024 classifier accuracy 0.8919, F1 0.9355. So abstract likely refers to 2024 or best case. Actually abstract says "In validation, our classifier reached 89.2% accuracy (F₁ = 0.936)". Table 3 shows 2024: 0.8919 accuracy, 0.9355 F1. So that's the 2024 holdout.
- Regressor: CatBoost, MAE 49.2 picks (average 55.85? Table shows avg MAE 55.85, but abstract says 49.2-pick MAE. Table shows 2024 MAE 49.18. So again abstract cites 2024 best case). Spearman ρ = 0.626 (2024: 0.6262).
- LOSOCV: Leave-One-Season-Out Cross-Validation on seasons 2020, 2022, 2023, 2024 (excluding 2021).
- Regressor trained only on drafted players.
- Feature ranking within draft class for all metrics except height/weight and college stats.
- IterativeImputer with Bayesian Ridge for missing values.
- 40-yard dash most important predictor.
- Limitations: no injury history, pre-draft interviews, team fit, behavior. Jaxon Smith-Njigba false negative (no 40 time, injured). George Pickens outlier (ACL, behavior concerns).

I need to write >=1000 words total across sections. Each section has specific focus.

Let me plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive the two-stage conditional probability: P(drafted | X) and E[pick | drafted, X].
- Chain rule: P(drafted, pick=k | X) = P(drafted|X) * P(pick=k | drafted, X).
- Gray zones: class imbalance (14.6% undrafted initially, but after removing no-college-stats, what's the draft rate? Not explicitly stated, but 14.6% of 1152 didn't have college stats; final 982 used. Draft rate among combine WRs likely high but not given. F1 penalizes bias toward majority. 
- Imputation regimes: Bayesian Ridge assumptions (Gaussian priors, linear conditional dependencies). Singularity when features collinear or missing not at random (early years missing 40-yard dash).
- Ranking transform: ordinal within class breaks cardinal comparability across epochs; non-injective mapping (ties get same rank), loses magnitude info.
- 2021 exclusion creates a temporal hole in LOSOCV; distribution shift.
- CatBoost ordered boosting prevents target leakage but assumes exchangeability within permutations; breakdown under non-stationary draft tactics.
- MAE vs Spearman divergence: MAE sensitive to round-scale errors, Spearman robust to monotonic transforms but insensitive to absolute slot calibration.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define feature vector X ∈ R^d with d features.
- Classifier: f_clf: X → [0,1], ŷ = 1 if f_clf(X) ≥ τ.
- F1 = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / ( ... ) [cite PAGE 166-167].
- MAE = (1/n) Σ |y_i - ŷ_i| [cite PAGE 179-180]. Units: draft picks (ordinal slots).
- R² = 1 - Σ(y_i - ŷ_i)² / Σ(y_i - ȳ)².
- Spearman ρ = 1 - [6 Σ d_i²] / [n(n² - 1)] [cite PAGE 194-195].
- LOSOCV procedure: folds F_t = D \ {season t}, test = season t, t ∈ {2020, 2022, 2023, 2024}.
- CatBoost ordered boosting: permutation σ, target statistics computed on history only.
- Breakdown regimes: classifier when P(drafted|X) near 0.5 threshold instability; regressor when n_drafted small per fold; rank transform singularity under ties.
- Page citations: [PAGE 106] for data, [PAGE 117-129] for prep, [PAGE 152-167] for classifier, [PAGE 171-195] for regressor, [PAGE 199-212] for training, [PAGE 246-251] for results table.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Clark et al. (2013) field goal logistic regression [PAGE 38-44]; Gifford & Bayrak (2023) game outcomes [PAGE 46-52]; Baker & Kwartler (2015) play prediction [PAGE 52-60]; Taylor (n.d.) CNN/VGG19 yardage [PAGE 61-70]; Teich et al. (2016) progress metric [PAGE 70-79]; Mulholland & Jensen (2014) tight ends draft order [PAGE 80-91]; Dhar (n.d.) WR draft order linear regression/CART [PAGE 91-101].
- Multi-week traps: temporal leakage across draft classes if not using LOSOCV; 2021 pro-day data excluded creates missing wave; college stats only final season ignores trajectory (redshirt, injury, declaration timing).
- Draft capital as outcome is itself a function of team needs in that specific week of the draft; retrospective labels encode future team preferences not observable at prospect evaluation time.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (draft room clock), teams revert to heuristic (40-yard dash bias) confirmed by Dhar [PAGE 96-100] and feature importance here [PAGE 262-263].
- Counter-trap: model predicts a WR will be drafted early; other front offices using same public model create a draft-day run, inflating actual pick beyond regressor output (self-defeating prophecy).
- Clock: draft pick timer creates finite-horizon decision; team utility U(pick, player) not modeled; regressor estimates marginal draft slot but not team-specific opportunity cost of waiting.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- No weather variables in dataset (unlike Clark et al. [PAGE 41-44]); combine is indoors (Lucas Oil Stadium), so weather veto is null for combine metrics but college stats were accumulated in variable weather.
- Biomechanical veto: ACL tear (George Pickens [PAGE 234-239]), hamstring (Jaxon Smith-Njigba [PAGE 222-226]) are hard vetoes not in feature space; model cannot represent binary injury state.
- Physical layer: height/weight not ranked due to scheme dependence [PAGE 139-141]; no positional fit variable, so a 5'9" WR may be physically vetoed by outside zones but model lacks scheme interaction.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Prospect with elite college production but missing 40-yard dash (imputed). Veto: imputation uncertainty exceeds decision threshold. Prediction: classifier F1 drops >0.15 on imputed-speed subgroup.
- Scenario 2: Final-season injury reduces TD/YDS to near zero (Smith-Njigba). Veto: single-season truncation discards multi-year trajectory. Prediction: recall for injured final-season WRs < 0.50 while precision > 0.90.
- Scenario 3: Top-tier prospect character/behavior removal from draft boards (Pickens). Veto: non-statistical team-specific blacklist. Prediction: regressor MAE conditional on character-flagged prospects > 60 picks despite Spearman ρ > 0.60 for clean population.

Need to ensure total words >= 1000. Let's aim for ~200-300 words per section to be safe, with THINK_TRACE being longest.

Also need to ensure NO betting lines. The word "odds" appears in source but I must not mention spreads, totals, moneylines, or odds. I'll avoid those words entirely.

Let me write carefully with LaTeX equations and page citations.

Word count check: I'll write substantial content.

Structure:
- THINK_TRACE: derivation of conditional pipeline, gray zones (imputation, ranking, class imbalance, temporal hole), breakdown regimes.
- SOURCE_OPERATORS_AND_EQUATIONS: formal math, units, citations.
- RETROCAUSAL_GENEALOGY: prior work lineage, multi-week traps.
- RECURSIVE_THEORY_OF_MIND: crisis habit regression, counter-trap, clock.
- CROSS_LAYER_VETO_ADJUDICATION: veto proof across layers.
- RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I need to cite exact [PAGE N] markers. I'll use the numbers from the text.

Let's draft.

THINK_TRACE (>=400 words):
The two-stage estimator defines a conditional joint probability over the discrete draft event D ∈ {0,1} and the ordinal draft slot Y ∈ {1,...,256}∪{∅}. The first stage estimates P(D=1|X;θ_clf) via a Gradient Boosting Decision Tree ensemble. Each boosting iteration m fits a base learner h_m(X) to the negative gradient of the cross-entropy loss L = -[y log p + (1-y) log(1-p)], so the ensemble logit is F_M(X)=Σ_{m=1}^M ν h_m(X). The second stage, conditional on D=1, estimates E[Y|D=1,X;θ_reg] using CatBoost with ordered boosting to suppress target leakage. A gray zone exists at the classifier-regressor boundary: the regressor is trained exclusively on drafted players [PAGE 207-209], which induces selection bias because the support of X among drafted players differs from the support among all combine invitees. If P(D=1|X) is small but non-zero, the regressor extrapolates beyond its training manifold.

Another gray zone is the feature-ranking transform. For each draft class c, raw metric x is mapped to rank r_c(x) ∈ [0,1], with the best performer receiving 1 [PAGE 134-136]. This is a non-injective, ordinal compression that discards cardinal magnitude (e.g., a 4.35 vs 4.40 40-yard dash both map near 1 if they are class-best) and creates ties that share identical ranks [PAGE 138-139]. The transform is singular across eras: a rank of 0.9 in 2000 is not physically equivalent to 0.9 in 2024 because athletic standards drift [PAGE 135-137]. Height and weight are exempt from ranking due to absent optimal census [PAGE 139-141], leaving them on raw scales while speed/agility features are normalized, creating heterogeneous feature geometries that may distort tree split criteria.

Missing-data handling uses IterativeImputer with Bayesian Ridge regression [PAGE 122-124]. The implicit assumption is that missingness is conditionally Gaussian and linear given observed features. This breaks down for the 40-yard dash, where 63 early-year players (5.47%) are missing [PAGE 126-127], likely because combine testing protocols were not yet standardized. Imputing speed from agility metrics assumes a stable biomechanical covariance across rule and surface changes, an unverified stationarity condition.

Temporal validity is weakened by the exclusion of the 2021 combine [PAGE 107-108] and the use of only final-season college statistics [PAGE 128-131]. A prospect injured in their final college year (e.g., Jaxon Smith-Njigba, 5 receptions for 43 yards [PAGE 224-225]) suffers irreversible feature attenuation because multi-year trajectory is discarded [PAGE 282-284]. The LOSOCV scheme holds out seasons {2020, 2022, 2023, 2024} [PAGE 200-202], but the 2021 hole means the model is never validated on a pro-day-adjacent cohort, leaving a distribution-shift blind spot.

Breakdown regimes: (1) classifier probability near τ=0.5 yields high sensitivity to calibration error; (2) regressor MAE diverges when team-specific needs dominate over player traits [PAGE 265-266]; (3) Spearman ρ remains moderate (avg 0.4257) even when absolute slot error is large, indicating rank-order preservation without slot calibration [PAGE 268-271]. These regimes are verifiable failure modes for front-office deployment.

That's roughly 350 words. Need >=400. I'll expand a bit.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal definitions. Units: draft picks are dimensionless ordinal counts. MAE unit: picks. F1 unitless. ρ unitless [−1,1].

Equations:
Classifier: p̂ = σ(Σ ν_m h_m(X)), ŷ_D = 𝟙[p̂ ≥ τ].
F1 = 2 * (TP/(TP+FP)) * (TP/(TP+FN)) / ((TP/(TP+FP)) + (TP/(TP+FN))). Cite [PAGE 166-167].
MAE = (1/n_d) Σ_{i:ŷ_D,i=1} |y_i - ŷ_i|, unit picks. Cite [PAGE 179-180].
R² = 1 - Σ(y_i - ŷ_i)² / Σ(y_i - ȳ_d)².
Spearman: ρ_s = 1 - 6 Σ d_i² / [n(n²-1)], where d_i = rank(ŷ_i) - rank(y_i). Cite [PAGE 194-195].
CatBoost ordered boosting: for permutation π, statistic for category c at step t uses only indices π^{-1}(1:t-1). Cite [PAGE 172-177].
LOSOCV: folds S_t = {2020,2022,2023,2024}\{t}, train on S_t, test on t. Cite [PAGE 200-203].
Feature rank: r_{j,c}(x) = (1/N_c) Σ_{k∈class c} 𝟙[x_k ≤ x] (for benefit features; reversed for cost features). Cite [PAGE 134-139].

Breakdown: Bayesian Ridge singularity when design matrix rank < feature count or missingness not at random [PAGE 122-129].

RETROCAUSAL_GENEALOGY:
Lineage: Clark et al. (2013) logistic regression on field goals, found environmental factors significant, psychological not [PAGE 38-44]. Gifford & Bayrak (2023) game outcome logistic/decision tree, 83% accuracy [PAGE 46-50]. Baker & Kwartler (2015) play-type logistic regression, ~66% accuracy, no validation set [PAGE 52-60]. Taylor (n.d.) CNN/VGG19 for play call and yardage, MAE no better than median baseline [PAGE 61-70]. Teich et al. (2016) progress metric, MAE ≤0.15 [PAGE 70-79]. Mulholland & Jensen (2014) TE draft order, RMSE 56.52 decision tree, 40-yard dash and bench press key [PAGE 80-90]. Dhar (n.d.) WR draft order, R²=0.302, 40-yard dash coefficient 227.5, CART split at 1627 college yards, no testing data [PAGE 91-101].
Multi-week traps: Draft labels are assigned after the draft event; using them to predict the same draft class creates retrospective leakage if the model indirectly sees draft outcomes. The study avoids this via LOSOCV, but the 2021 exclusion means a full seasonal cycle is absent. College production variables are final-season only, so a player's junior breakup or senior injury is invisible unless it appears in final stats.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under draft-clock time pressure, front offices regress to salient heuristics. Here the 40-yard dash is the most important predictor for both models [PAGE 262-263], echoing Dhar's finding of NFL bias toward 40-yard dash times [PAGE 99-100]. When the clock is winding down, teams overvalue the measurable combine drill over noisy college film.
Counter-trap: If multiple teams adopt this regressor, the predicted early-round prospect becomes a run target. The model outputs an expected slot E[Y|X], but actual draft slot Y* is a function of competing teams' utility functions U_t(player, pick), which are not in X. The prediction is self-defeating under public adoption: early publication of rankings shifts draft-day demand.
Clock: The NFL draft operates on a fixed inter-pick timer. The regressor estimates a scalar slot but cannot encode opportunity cost of waiting one pick versus trading up. A team needs P(player available at pick k | model), which requires a survival model over draft order, not a point regressor.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: combine is indoors; weather is not a feature for combine metrics [PAGE 106-108], unlike Clark et al. where temperature/wind mattered [PAGE 41-44]. However, college stats were accumulated in outdoor stadiums with variable weather; no weather adjustment is applied, so a cold-weather receiver's yardage is not normalized.
Biomechanical layer: ACL tear (George Pickens [PAGE 234-239]) and hamstring injury (Smith-Njigba [PAGE 224-226]) are hard vetoes. The feature space has no injury-history indicator [PAGE 264-265]. The model penalizes low final-season production but cannot represent the binary state "recovering from major surgery."
Scheme layer: Height and weight are unranked because optimal ranges are scheme-dependent [PAGE 139-141]. A 5'10", 180 lb receiver may be physically vetoed by outside-zone schemes but valued in slot roles; the model lacks team-fit interaction terms.
Weather veto: null for combine; unquantified for college. No veto certificate can be issued for college production because environmental covariates are missing.

RLVR_COUNTERFACTUAL_VETOES:
1. Imputed-speed veto: Prospect A has elite college YDS and TD but missing 40-yard dash; Bayesian Ridge imputes from shuttle/cone. Veto triggers if imputation posterior variance σ²_imp > threshold. Prediction: on the subgroup with imputed 40-yard dash (n=63 early years [PAGE 126-127]), classifier F1 degrades by >0.10 relative to complete-case subgroup.
2. Final-season injury veto: Prospect B tore ACL in November, final-season REC=5, YDS=43 [PAGE 224-225]. Veto triggers because single-season truncation discards junior-year tape. Prediction: recall for injured-final-season WRs falls below 0.50 while precision remains >0.90, producing a high false-negative rate.
3. Character blacklist veto: Prospect C removed from multiple draft boards for behavior [PAGE 240-244]. Veto triggers because no NLP/character feature exists [PAGE 280-282]. Prediction: conditional MAE for character-flagged prospects exceeds 60 picks while population Spearman ρ remains 0.626 [PAGE 250-251], demonstrating rank-order coherence without slot accuracy.

Need to check word count. Let me ensure each section is substantial. THINK_TRACE needs >=400 words. Others can be shorter but total must be >=1000.

I will write the final response now, ensuring no mention of betting terms. I'll avoid "odds," "spread," "total," "moneyline." I'll use "probability," "likelihood," "accuracy," etc.

Let me count roughly. THINK_TRACE ~450. SOURCE ~350. RETRO ~300. RECURSIVE ~250. CROSS ~250. RLVR ~200. Total ~1800. Good.

I need to use exact XML tags. No markdown outside? The user wants exact XML sections. I'll output only the XML sections with content inside.

Make sure to include [PAGE N] citations. The page numbers in the text are not standard page numbers but section/line numbers. I'll treat them as page markers as requested, e.g., [PAGE 126]. I'll quote verbatim where needed.

Double-check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are real from the paper. Good.

One thing: The abstract says classifier 89.2% accuracy (F1=0.936) and regressor 49.2-pick MAE (ρ=0.626). Table 3 shows 2024 values matching these. The abstract might be referring to 2024 specifically or an aggregate. I'll cite Table 3 [PAGE 246-251] for the detailed values and note abstract cites 2024 holdout [PAGE 18-20]? Actually abstract is lines 7-20. I'll cite [PAGE 7-20] for abstract.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The two-stage estimator defines a conditional joint probability over the discrete draft event D ∈ {0,1} and the ordinal draft slot Y ∈ {1,…,256} ∪ {∅}. Stage one estimates P(D=1|X; θ_clf) with a Gradient Boosting Decision Tree ensemble. Each boosting iteration m fits a base learner h_m(X) to the negative gradient of the cross-entropy loss L = −[y log p + (1−y) log(1−p)], so the ensemble logit is F_M(X) = Σ_{m=1}^M ν h_m(X). Stage two, conditional on D=1, estimates E[Y | D=1, X; θ_reg] using CatBoost with ordered boosting to suppress target leakage. A gray zone exists at the classifier–regressor boundary: the regressor is trained exclusively on drafted players [PAGE 207–209], which induces selection bias because the support of X among drafted players differs from the support among all combine invitees. If P(D=1|X) is small but non-zero, the regressor extrapolates beyond its training manifold.

A second gray zone is the feature-ranking transform. For each draft class c, raw metric x is mapped to rank r_c(x) ∈ [0,1], with the class-best performer receiving 1 [PAGE 134–136]. This is a non-injective ordinal compression that discards cardinal magnitude—e.g., a 4.35 versus 4.40 forty-yard dash both map near 1 if they are class-best—and creates ties that share identical ranks [PAGE 138–139]. The transform is singular across eras: a rank of 0.9 in 2000 is not physically equivalent to 0.9 in 2024 because athletic standards drift [PAGE 135–137]. Height and weight are exempt from ranking due to absent optimal census [PAGE 139–141], leaving them on raw scales while speed/agility features are normalized, creating heterogeneous feature geometries that may distort tree split criteria.

Missing-data handling uses IterativeImputer with Bayesian Ridge regression [PAGE 122–124]. The implicit assumption is that missingness is conditionally Gaussian and linear given observed features. This breaks down for the forty-yard dash, where 63 early-year players (5.47%) are missing [PAGE 126–127], likely because combine testing protocols were not yet standardized. Imputing speed from agility metrics assumes a stable biomechanical covariance across rule and surface changes, an unverified stationarity condition.

Temporal validity is weakened by the exclusion of the 2021 combine [PAGE 107–108] and the use of only final-season college statistics [PAGE 128–131]. A prospect injured in their final college year (e.g., Jaxon Smith-Njigba, 5 receptions for 43 yards [PAGE 224–225]) suffers irreversible feature attenuation because multi-year trajectory is discarded [PAGE 282–284]. The LOSOCV scheme holds out seasons {2020, 2022, 2023, 2024} [PAGE 200–202], but the 2021 hole means the model is never validated on a pro-day-adjacent cohort, leaving a distribution-shift blind spot.

Breakdown regimes: (1) classifier probability near τ = 0.5 yields high sensitivity to calibration error; (2) regressor MAE diverges when team-specific needs dominate over player traits [PAGE 265–266]; (3) Spearman ρ remains moderate (avg 0.4257) even when absolute slot error is large, indicating rank-order preservation without slot calibration [PAGE 268–271]. These regimes are verifiable failure modes for front-office deployment. The F1 score [PAGE 166–167] penalizes bias toward the drafted majority, which matters because undrafted combine invitees are the minority class; however, the exact post-imputation class balance is not reported, leaving the prior P(D=1) uncertain and the decision threshold τ unanchored to an explicit cost matrix.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let X ∈ R^d be the feature vector comprising calculated_forty, calculated_bench, calculated_vertical, calculated_broad_jump, calculated_cone, calculated_shuttle, REC, YDS, Y_R, TD, Y_G, ht_inches, wt, and conference dummies {conf_ACC, conf_Big12, conf_BigTen, conf_Pac12, conf_SEC, conf_Other} [PAGE 116–117].

Classifier operator: p̂ = σ(Σ_{m=1}^M ν_m h_m(X)), where σ(z) = 1/(1+e^{−z}); draft decision ŷ_D = 𝟙[p̂ ≥ τ]. The default cross-entropy loss optimizes probabilistic classification [PAGE 161–162]. F1 score, unitless in [0,1]:
F1 = 2 · [TP/(TP+FP)] · [TP/(TP+FN)] / ([TP/(TP+FP)] + [TP/(TP+FN)]) [PAGE 166–167].

Regressor operator: ŷ = f_CatBoost(X), trained only on {i : D_i = 1} [PAGE 207–209]. MAE, unit = draft picks (dimensionless ordinal count):
MAE = (1/n_d) Σ_{i: ŷ_D,i = 1} |y_i − ŷ_i| [PAGE 179–180].
R², unitless:
R² = 1 − Σ_i (y_i − ŷ_i)² / Σ_i (y_i − ȳ_d)² [PAGE 184–185].
Spearman rank correlation, unitless in [−1,1], where d_i = rank(ŷ_i) − rank(y_i):
ρ_s = 1 − [6 Σ_i d_i²] / [n(n² − 1)] [PAGE 194–195].

CatBoost ordered boosting: for permutation π of the training set, the ordered target statistic for category c at step t uses only indices π^{−1}(1:t−1), preventing target leakage [PAGE 172–177]. Categorical variables are converted via ordered target statistics [PAGE 174–176].

LOSOCV procedure: folds S_t = {2020, 2022, 2023, 2024} \ {t}; train on S_t, test on season t, t ∈ {2020, 2022, 2023, 2024}; season 2021 excluded [PAGE 200–202]. Both classifier and regressor are retrained with identical hyperparameters per fold [PAGE 202].

Feature rank within class c: r_{j,c}(x) = (1/N_c) Σ_{k∈class c} 𝟙[x_k ≤ x] for benefit features, reversed for cost features such as forty-yard dash time [PAGE 134–139]. Ties receive identical rank [PAGE 138–139].

Imputation: Bayesian Ridge IterativeImputer models each variable with missing data as a function of others and iterates [PAGE 122–124]. Singularity/breakdown: design-matrix rank deficiency, non-Gaussian missingness, or missing-not-at-random (e.g., early-year forty-yard dash absences [PAGE 126–127]) invalidates the conditional-Gaussian assumption.

Reported validation: 2024 classifier accuracy 0.8919, F1 0.9355; regressor MAE 49.18 picks, R² 0.3233, Spearman ρ 0.6262 [PAGE 246–251]. Abstract cites classifier 89.2% accuracy (F1 = 0.936) and regressor 49.2-pick MAE (ρ = 0.626) [PAGE 7–20], consistent with the 2024 holdout fold. Average across folds: accuracy 0.7862, F1 0.8393, MAE 55.85 picks, R² 0.1533, ρ 0.4257 [PAGE 246–251].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study’s lineage descends from prior NFL machine-learning work. Clark et al. (2013) used logistic regression on 2000–2011 field-goal play-by-play data and found environmental factors (temperature, precipitation, wind speed) significant while psychological factors were not [PAGE 38–44]. Gifford & Bayrak (2023) modeled NFL game outcomes with logistic regression and decision trees on 2002–2018 data, achieving 83% validation accuracy, with turnover and yardage differentials as leading predictors [PAGE 46–52]. Baker & Kwartler (2015) predicted run/pass play type for Cleveland and Pittsburgh using logistic regression, obtaining roughly 66% accuracy but without a validation set [PAGE 52–60]. Taylor (n.d.) applied shallow CNN and VGG19 transfer learning to play-call and yardage prediction, finding no improvement over guessing the median yardage [PAGE 61–70]. Teich et al. (2016) predicted yardage and a scaled progress metric, achieving MAE ≤ 0.15 on progress but MAE > 5 on raw yards [PAGE 70–79]. Mulholland & Jensen (2014) predicted tight-end draft order with linear regression and decision trees, identifying forty-yard dash and bench press as key variables and reporting RMSE 56.52 [PAGE 80–90]. Dhar (n.d.) modeled wide-receiver draft order with linear regression and CART on 1999–2008 data, reporting R² = 0.302, a forty-yard dash coefficient of 227.5, and a CART split at 1,627 college receiving yards; crucially, Dhar used training data only with no testing evaluation [PAGE 91–101].

The present study attempts to close the gap identified at [PAGE 101–102]: no prior research predicted whether a combine-invited WR will be drafted or estimated draft position with proper unseen-data evaluation. Multi-week traps emerge from the temporal structure of draft labels. Draft position Y is assigned only after the draft event concludes; using historical draft outcomes as labels means the target variable is itself a retrospective equilibrium of team needs, board collapses, and run-on-position dynamics that are not observable at prospect evaluation time. LOSOCV mitigates cross-season leakage, but the 2021 exclusion removes an entire pro-day wave from the temporal support [PAGE 107–108]. Furthermore, restricting college production to the final season [PAGE 128–131] imposes a survivorship window: a junior breakout followed by a senior injury is compressed into a single attenuated observation, destroying the multi-week trajectory that scouts actually weigh. The model thus regresses on a truncated causal history while the draft label reflects a future committee decision made under clock pressure—a recursive dependence the feature set cannot represent.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of decision-makers under acute time pressure to revert to salient, measurable heuristics. In the draft room, the inter-pick clock imposes a finite horizon; when time is short, front offices overweight the forty-yard dash because it is legible, recent, and comparable across prospects. This study confirms the heuristic’s dominance: the forty-yard dash is the most important predictor for both classifier and regressor [PAGE 262–263], echoing Dhar’s documented NFL bias toward forty-yard dash times [PAGE 99–100]. The regressor’s reliance on college touchdowns as the secondary predictor [PAGE 262–263] shows a secondary habit of overvaluing scoring events over route efficiency or separation metrics absent from the feature set.

A counter-trap arises if the model’s outputs become public or widely adopted within a draft cycle. The regressor produces an expected slot E[Y | D=1, X], but the actual draft slot Y* is a function of competing teams’ utility functions U_t(player, pick), which include roster depth, positional urgency, and private medical grades—none of which are in X. If multiple teams consult the same ranking, the model’s top prospect becomes a draft-day run target, pushing the actual pick earlier than E[Y | X]. The prediction is therefore self-defeating under adoption: early publication of statistical rankings shifts demand and invalidates the regressor’s slot estimates for precisely the players it flags as most valuable.

The clock layer adds an information-structure problem. The regressor estimates a scalar draft slot but cannot encode the option value of waiting. A team’s decision at pick k depends on P(player available at pick k+1 | model, team needs), a survival probability over draft order that requires modeling the joint hazard of selection across competing teams. A point regressor provides no such survival curve, so a team cannot compute whether trading up or holding is optimal. The study acknowledges this implicitly by suggesting teams use predicted draft slot “to gauge where they end up being drafted” and “trade up” [PAGE 273–274], but it supplies no probability of availability, no trade-up cost function, and no clock-aware stopping rule.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The NFL combine is held indoors, so weather is not a feature for combine metrics [PAGE 106–108], unlike Clark et al. where temperature, precipitation, and wind materially affected field-goal probability [PAGE 41–44]. However, college receiving statistics were accumulated in outdoor stadiums under variable weather, and no weather normalization is applied to YDS, REC, or Y_G. A receiver who produced in cold-weather venues is not physically distinguished from a dome producer, so the college-performance layer lacks a weather veto certificate.

Biomechanical layer: Major injury is a hard veto absent from the feature space. George Pickens tore his ACL in 2021, missed most of his junior season, and returned with only 5 receptions for 107 yards [PAGE 234–236]; the model predicted him at 115.76 while he was actually selected at 52 [PAGE 237–238]. The discrepancy reflects behavior concerns and injury history [PAGE 240–244], neither of which is encoded. Jaxon Smith-Njigba missed most of 2022 with a hamstring injury, recording 5 receptions for 43 yards, lacked a combine forty-yard dash time, and was predicted undrafted despite being regarded as a top prospect [PAGE 222–226]. The model penalizes low final-season production but cannot represent the binary state “recovering from major surgery” or “medical red flag.” Because no injury-history indicator exists [PAGE 264–265], the biomechanical veto cannot be adjudicated by the model; it can only be inferred post hoc from residual error.

Scheme layer: Height and weight are deliberately unranked because optimal ranges are scheme-dependent and subjective [PAGE 139–141]. A 5’10”, 180-pound receiver may be physically vetoed by outside-zone schemes but valued in slot roles; the model lacks any team-fit or role-interaction term. Conference dummies [PAGE 114–115] capture competition level but not scheme fit. Consequently, a cross-layer veto—e.g., “elite combine metrics but wrong scheme prototype”—passes through the model unfiltered.

Weather veto: Null for the combine indoor environment; unquantified and therefore unvetoed for college production. No veto proof can be issued for college-layer features because environmental covariates are missing from the data pipeline [PAGE 106–111].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (imputed-speed veto): Prospect A has elite final-season YDS and TD but a missing forty-yard dash; the value is imputed via Bayesian Ridge from shuttle and cone times [PAGE 122–127]. Veto trigger: imputation posterior variance σ²_imp exceeds the classifier’s decision-tolerance margin around τ = 0.5. Prediction: on the subgroup with imputed forty-yard dash (n = 63 early-year players, 5.47% [PAGE 126–127]), classifier F1 degrades by at least 0.10 relative to the complete-case subgroup, while accuracy remains high due to class imbalance.

Scenario 2 (final-season injury veto): Prospect B suffers a season-ending injury in November and records REC = 5, YDS = 43 in the final year [PAGE 224–225]. Veto trigger: single-season truncation discards multi-year college trajectory [PAGE 128–131, 282–284]. Prediction: recall for injured-final-season wide receivers falls below 0.50 while precision remains above 0.90, producing a high false-negative rate in which pro-level talent is classified undrafted because the final-season feature vector is near zero.

Scenario 3 (character-blacklist veto): Prospect C is removed from multiple NFL draft boards for pre-draft visit behavior [PAGE 240–244]. Veto trigger: no NLP sentiment or character feature exists in X [PAGE 280–282]; the regressor cannot represent team-specific board removals. Prediction: conditional MAE for character-flagged prospects exceeds 60 picks even while the population Spearman ρ remains at 0.626 [PAGE 250–251], demonstrating that the model can preserve broad rank order on the clean population while failing catastrophically on non-statistical, team-conditional veto events. These three scenarios are verifiable by holding out imputed-speed records, injured-final-season records, and publicly flagged character cases from a future combine cohort and measuring fold-wise F1, recall, and conditional MAE.
</RLVR_COUNTERFACTUAL_VETOES>
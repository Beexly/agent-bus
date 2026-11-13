---
source: "a-machine-learning-model-for-analysis-and-prediction-of-football-match-outcomes-in-the-english-premier-league-4850.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5034
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper (9 pages) about machine learning models for football match prediction in the English Premier League. They want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be extremely careful about the content. The paper discusses EPL match prediction using RF, XGBoost, LightGBM. It mentions betting markets in the abstract/introduction but I cannot mention betting lines/odds/spreads/totals/moneylines as per invariant 1. I must avoid those terms entirely.

I need to cite exact page markers [PAGE N] and verbatim quotes where appropriate.

Let me structure this carefully.

First, let's note page mappings:
- [PAGE 1 of 9] = Page 244 of journal
- [PAGE 2 of 9] = Page 245
- [PAGE 3 of 9] = Page 246
- [PAGE 4 of 9] = Page 247
- [PAGE 5 of 9] = Page 248
- [PAGE 6 of 9] = Page 249
- [PAGE 7 of 9] = Page 250
- [PAGE 8 of 9] = Page 251
- [PAGE 9 of 9] = Page 252

Key facts from source:
- Dataset: EPL 2021-2025, five seasons. Scraped from Football-Data.co.uk, Kaggle, public sports APIs. [PAGE 4]
- Target: Home Win, Draw, Away Win (3 classes). [PAGE 4]
- Preprocessing: missing value imputation, remove match IDs, One-Hot Encoding for teams/referees, Z-score normalization (mean 0, std 1). [PAGE 4]
- Feature engineering: rolling averages over last 3, 5, 10 matches for goals, shots, possession. Strength metrics (attack/defense ratios), head-to-head. Contextual: home-ground advantage, "days since last match" for fatigue. [PAGE 4]
- Split: temporal 70/15/15 (train/val/test), stratification. [PAGE 4]
- Models: RF, XGBoost, LightGBM. [PAGE 4-5]
- Evaluation metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC (one-vs-rest), Confusion Matrix. [PAGE 4-5]
- Results Table 3: RF 87.14% acc, 84.92 F1, 86.70 prec, 84.70 rec, 99.00 ROC. XGB 86.64 acc, 85.09 F1, 85.85 prec, 84.62 rec, 98.40 ROC. LGB 85.67 acc, 83.89 F1, 85.09 prec, 83.26 rec, 97.96 ROC. [PAGE 5]
- Page 5 text: "Random Forest served as a baseline model. It achieved an overall accuracy of 87.14%, with a precision of 86.70% and a recall of 84.70%. The F1-score was 84.92%, and the ROC-AUC was 99.00%, indicating a moderate ability to discriminate between actual outcome and predicted outcome. The model performed exceptionally well on the three classes, but struggled with false positives." Wait, this text is actually split across pages 7-8? Let me check.

Actually looking at pages:
- [PAGE 7] ends with "Random Forest served as a baseline model. It achieved an overall accuracy of 87.14%, with a precision of 86.70% and a recall of 84.70%. The F1-score was 84.92%, and the ROC-AUC was 99.00%, indicating a"
- [PAGE 8] starts with "moderate ability to discriminate between actual outcome and predicted outcome. The model performed exceptionally well on the three classes, but struggled with false positives."

So the verbatim quote spans pages 7-8.

- [PAGE 8] XGBoost: "86.64% accuracy, 85.85% precision, 84.62% recall, and 85.09% F1-score... ROC-AUC score reached 98.40%". LightGB: "accuracy of 85.67%, precision of 85.09%, recall of 83.26%, and an F1-score of 83.89%. The ROC-AUC was 97.96%".
- [PAGE 8] Comparative: "performance differences between models are relatively narrow (1.47% range in accuracy)".
- [PAGE 9] Conclusion: "The results showed that XGBoost achieved better performance, followed by lightGB and Random Forest." Wait, this contradicts Table 3 where RF was highest (87.14 vs XGB 86.64). Page 9 says XGBoost achieved better performance followed by lightGB and Random Forest. That's an internal inconsistency in the paper (gray-zone audit point). Also abstract says RF best. Page 5 table says RF best. Page 9 conclusion says XGB better. This is a contradiction worth noting in THINK_TRACE as gray-zone audit.

Also note page 9: "The achieved accuracy levels of 85-87% represent significant performance in the inherently unpredictable domain of football match prediction."

Important: No betting lines. The paper mentions "betting markets" in abstract and conclusion, and "pre-match odds" in literature review (Mittal et al. 2020 incorporated pre-match odds as features). I must not mention spreads, totals, moneylines, or odds. I can reference that the paper mentions betting markets in passing but I should not repeat odds or betting lines. Actually invariant says "Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely if possible, or at least not discuss betting lines. I'll just avoid it.

Now let's draft each section.

<THINK_TRACE>: >=400 words. Deep multi-hop derivation & gray-zone audit.
I need to derive logically:
- The temporal split prevents leakage but creates distribution shift between training (2021-early) and test (most recent season). 
- Rolling averages over 3/5/10 matches create autocorrelation; if not handled carefully, leakage can occur across the temporal boundary because the "last 10 matches" for a test-set match might include training-set matches if not strictly separated. The paper says temporal split, but rolling windows straddle the boundary unless care is taken. This is a gray zone.
- Z-score normalization: if computed on full dataset before split, leakage. If on training only, okay. Paper doesn't specify. Gray zone.
- One-hot encoding of team names: teams promoted/relegated between 2021-2025. New teams in test set not in training would create unseen categories. Handling of unseen categories is unspecified. Gray zone.
- "Days since last match" as fatigue proxy: assumes uniform recovery, ignores travel, competition congestion (European matches), squad rotation. Biomechanical oversimplification.
- Contradiction: Abstract/Table 3/Page 7-8 say RF highest accuracy (87.14%). Page 9 conclusion claims "XGBoost achieved better performance, followed by lightGB and Random Forest." This is a direct factual inversion. Multi-hop: if conclusion is wrong, downstream reliance on model selection is compromised.
- ROC-AUC 99.00% for RF but accuracy only 87.14%: high discrimination but moderate calibration; possible class imbalance or thresholding issues. Stratification helps but doesn't fix threshold dependence.
- Confusion matrix: RF "struggled with false positives" (page 8). This means specific class confusion (likely Draw vs Home/Away) not detailed numerically.
- The paper mentions "real-time" but uses historical data up to 2025; quasi-real-time claims not backed by live ingestion architecture. Streamlit/Gradio are frontends, not real-time pipelines.

Word count: need >=400 words in this section. I'll write substantial text.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
Define:
- Target variable $Y \in \{H, D, A\}$ (Home Win, Draw, Away Win). Categorical, nominal. No odds.
- Dataset $\mathcal{D} = \{(\mathbf{x}_i, y_i)\}_{i=1}^{N}$, $N$ matches from EPL 2021–2025. [PAGE 4]
- Temporal split: $\mathcal{D}_{train} = \{i: t_i \le t_{cut1}\}$ (70%), $\mathcal{D}_{val}$ (15%), $\mathcal{D}_{test}$ (15%), most recent seasons. [PAGE 4]
- Z-score: $x' = \frac{x - \mu}{\sigma}$, $\mu=0, \sigma=1$ after transform. [PAGE 4]
- Rolling average: $\bar{x}^{(k)}_i = \frac{1}{k}\sum_{j=1}^{k} x_{i-j}$, $k \in \{3,5,10\}$. [PAGE 4]
- Attack/defence ratio: $r_{ad} = \frac{\text{attack strength}}{\text{defence strength}}$. Dimensionless. [PAGE 4] (I need to be careful not to invent fake ratios; but this is from source: "Strength Metrics rating of dynamic skill levels, such as attack/defence ratios". I can present it as stated, dimensionless ratio.)
- Accuracy: $Acc = \frac{TP+TN}{TP+TN+FP+FN}$ (multiclass: sum of diagonal over total). [PAGE 4-5]
- Precision: $Prec_c = \frac{TP_c}{TP_c + FP_c}$. [PAGE 5]
- Recall: $Rec_c = \frac{TP_c}{TP_c + FN_c}$. [PAGE 5]
- F1: $F1_c = 2 \cdot \frac{Prec_c \cdot Rec_c}{Prec_c + Rec_c}$. [PAGE 5]
- ROC-AUC: one-vs-rest, integral of TPR vs FPR over threshold $\tau \in [0,1]$. Unitless probability [0,1]. [PAGE 5]
- Units: percentages for metrics; dimensionless for ratios; days for fatigue feature; count for goals/shots/corners/fouls/cards.
- Breakdown regimes: singularity when $TP_c+FP_c=0$ (precision undefined), $TP_c+FN_c=0$ (recall undefined), $Prec_c+Rec_c=0$ (F1 undefined), $\sigma=0$ (Z-score undefined), $k > n_{history}$ (rolling average insufficient history at season start). Also class imbalance singularity if a class has zero support in test split.

Citations: [PAGE 4], [PAGE 5], etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Breiman (2001) Random Forest [PAGE 9 ref 4], Friedman (2001) Gradient Boosting [PAGE 9 ref 8], Chen & Guestrin XGBoost, Ke et al. LightGBM. Cited in paper references.
- Prior EPL work: Baboota & Kaur (2018) [PAGE 2], Razali et al. (2017) Bayesian networks [PAGE 1], Narayanan et al. (2024) XGBoost/LightGBM [PAGE 2], Štemberk et al. (2023) RF/GB/LR [PAGE 2], Rane et al. (2022) RF+SVM [PAGE 3], Shen et al. (2025) real-time platform [PAGE 3], Mittal et al. (2020) Gradient Boosting with pre-match odds [PAGE 3] — but I must avoid discussing odds; I can mention the study exists but not the odds feature. Actually I can say Mittal et al. incorporated pre-match market-derived features, but I won't say "odds".
- Multi-week traps: rolling windows of 3/5/10 matches create multi-week dependency traps. A team's form over the last 10 matches spans roughly 10-12 weeks (EPL ~1 match/week). Injuries, suspensions, managerial changes within that window are aggregated into static rolling means, losing temporal resolution. The "days since last match" fixture congestion feature does not capture cumulative fatigue across a 3-4 week period, only inter-match interval.
- Dataset spans 5 seasons (2021–2025), ~190 matches/season, ~950 matches total. Temporal split means test set is most recent season(s). Multi-week trap: if test set begins immediately after training cutoff, rolling features for early test matches depend on late training matches; boundary leakage.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section seems to ask for a game-theoretic / psychological modeling of how teams/managers regress under crisis and how the model might fail to capture it.
- Crisis habit regression: When a team is in a losing streak, managers revert to habitual tactics (conservative, defensive). The model uses rolling averages of shots/possession; these may capture the regression but not the *cause* (managerial panic). 
- Counter-trap: Opponent anticipates the regressed habit and sets a trap (e.g., pressing high against a low-block team). The feature set lacks opponent-specific tactical adjustment variables beyond head-to-head.
- Clock: Match clock and game state (score, time remaining) are not in the feature list (only full-time/half-time goals). The model predicts pre-match outcomes, so in-game clock dynamics are absent. This means late-match goal patterns, red-card timing, and substitution clocks are invisible.
- Recursive ToM: Manager A thinks Manager B will regress to defensive habit; Manager A prepares counter-trap; Manager B anticipates counter-trap and reverts to attack. This second-order reasoning is not representable in tabular ensemble features. The model treats teams as fixed feature vectors, not recursive agents.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Match duration 90 minutes + stoppage. Pitch dimensions (IFAB: 105m x 68m typical, but variable). These are constants, not features. Veto: if pitch dimensions or match length change (e.g., abandoned match), model input schema invalid.
- Biomechanical layer: Player load, sprint distance, accelerations, injury status. The dataset has yellow/red cards, fouls, corners, shots, possession — no GPS/accelerometer data, no injury list, no minutes played per player. Veto: key player absence (star striker, goalkeeper) is not directly modeled; team name encoding collapses squad heterogeneity. A red card in prior match (disciplinary data) is captured via card counts, but suspension for next match is not explicitly modeled.
- Weather layer: No weather features (temperature, precipitation, wind) included. [PAGE 4] lists features: goals, shots, corners, fouls, cards. No environmental data despite literature review mentioning environmental factors [PAGE 2]. Veto: extreme weather (heavy rain, snow, high wind) alters passing accuracy and possession; absence from feature space means model cannot adjust. This is a veto condition: if weather is extreme, prediction reliability degrades because feature space is incomplete relative to literature's own acknowledged variables [PAGE 2].
- Adjudication: The model lacks physical, biomechanical, and weather covariates; therefore any prediction made under veto conditions (injury crisis, extreme weather, pitch invasion/abandonment) should be treated as out-of-distribution. No formal veto mechanism exists in the paper.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just "verifiable vetoes". The user asks for "3 verifiable RLVR veto scenarios + predictions". I interpret as scenarios where the model should be vetoed (not used), with counterfactual predictions about what happens if used.
Scenario 1: Unseen promoted team. If a team promoted in 2025-26 appears in test set, one-hot encoding has no column. Model must either drop row or map to unknown. Prediction: accuracy drops below 70% for matches involving promoted teams due to cold-start embedding absence.
Scenario 2: Fixture congestion. Team plays EPL match 3 days after midweek European fixture. "Days since last match" = 3, but cumulative fatigue across 3 weeks not captured. If model predicts Home Win based on rolling form, counterfactual: actual result is Draw or Away Win because of rotated squad; model overestimates home team by >10 percentage points in probability.
Scenario 3: Extreme weather. Heavy rainfall reduces passing accuracy and increases possession variance. Since no weather feature, model's prediction remains based on dry-weather rolling averages. Counterfactual: predicted Away Win probability >0.6 but match ends Draw or Home Win due to weather-induced equalization; false positive rate increases by at least 15% relative to baseline.

Each scenario needs verifiable conditions and a prediction.

Now, word count: total >=1000 words across sections. THINK_TRACE >=400. Others can be substantial too.

I must ensure NO betting lines: no "spreads", "totals", "moneylines", "odds". I will not use these words. If I need to refer to Mittal et al., I'll say "pre-match market features" but better to avoid. Actually page 3 says "incorporating a wide array of team statistics and pre-match odds as features." I should not quote the word "odds". I can paraphrase as "pre-match market-derived features" but even that hints at betting. The invariant says "Never mention spreads, totals, moneylines, or odds." It doesn't forbid the word "market" but I should avoid "odds". I'll just not discuss Mittal's specific feature to be safe, or mention it without the forbidden word: "Mittal et al. (2020) incorporated pre-match commercial indicators as features." Hmm, "commercial indicators" is vague. I'll just cite the study generally without specifying odds. Better to avoid quoting that specific phrase.

Also the abstract mentions "sports betting" and "betting markets". I should not repeat those terms either to be safe, or if I do, I must not mention lines/odds. The invariant says "Never mention spreads, totals, moneylines, or odds." It doesn't explicitly ban the word "betting" but to be safe I'll avoid "betting markets" and "sports betting" as they are adjacent to banned concepts. I'll refer to "industry applications" or "competitive forecasting" instead.

I need to include verbatim quotes with page markers. Let's pick some:
- Page 4: "A structured tabular dataset containing historical English Premier League (EPL) match statistics from 2021 to 2025 was obtained."
- Page 4: "The data was divided using a temporal split to prevent data leakage and to simulate real-world forecasting: Training (70%): Earliest seasons used for model learning; Validation (15%): Middle period used for hyperparameter tuning; Test (15%): Most recent season(s) used for final, unbiased evaluation; and Stratification: Ensured the distribution of wins, draws, and losses remained consistent across all three sets."
- Page 7-8: "Random Forest served as a baseline model. It achieved an overall accuracy of 87.14%, with a precision of 86.70% and a recall of 84.70%. The F1-score was 84.92%, and the ROC-AUC was 99.00%, indicating a moderate ability to discriminate between actual outcome and predicted outcome."
- Page 9: "The results showed that XGBoost achieved better performance, followed by lightGB and Random Forest." (contradiction)
- Page 8: "The performance differences between models are relatively narrow (1.47% range in accuracy)"

Now I'll write the response. Must be all XML sections exactly as specified. No extra text outside.

Let's draft carefully with word counts in mind.

THINK_TRACE: I'll aim for ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~400-500 words with LaTeX.

RETROCAUSAL_GENEALOGY: ~300 words.

RECURSIVE_THEORY_OF_MIND: ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words.

RLVR_COUNTERFACTUAL_VETOES: ~300 words.

Total easily >1000.

Let's write.

Important: LaTeX must be formal. Use \[ \] or \( \). Units: percentages (%), counts, seconds/days, dimensionless.

Singularity/breakdown regimes:
- $\sigma = 0$ in Z-score.
- $TP+FP = 0$ for precision.
- $TP+FN = 0$ for recall.
- Class prior $\pi_c = 0$ in test set makes ROC-AUC for that class undefined (one-vs-rest cannot be computed).
- Rolling window $k > t_{available}$ at season start.
- Temporal split boundary: test set first match uses rolling window including training matches if not strictly aligned.

Now compose.

Check for banned words: odds, spreads, totals, moneylines. I will not use them.

Let's proceed to final output.
</NATIVE_REASONING>

<THINK_TRACE>
The source paper develops three tabular ensemble classifiers—Random Forest (RF), XGBoost, and LightGBM—to predict English Premier League match outcomes (Home Win, Draw, Away Win) across five seasons (2021–2025). A multi-hop derivation begins with the data acquisition layer: the dataset is scraped from Football-Data.co.uk, Kaggle, and public APIs, then cleaned via imputation and removal of match IDs [PAGE 4]. Foundational metrics (Goal Difference, Total Goals) are engineered, followed by one-hot encoding of teams and referees and Z-score normalization to unit mean and variance [PAGE 4]. Feature engineering adds rolling averages over the last 3, 5, and 10 matches for goals, shots, and possession, plus attack/defence strength ratios, head-to-head statistics, home-ground advantage, and "days since last match" as a fatigue proxy [PAGE 4].

A critical gray-zone audit targets the temporal split. The paper states a 70/15/15 temporal split with stratification to prevent leakage and simulate real-world forecasting [PAGE 4]. However, rolling averages computed over the last 10 matches necessarily straddle the train/validation/test boundary unless the pipeline strictly truncates history at the split point; the paper does not specify whether rolling features for the earliest test-set matches draw exclusively on test-set history or are allowed to backfill into training-season matches. If backfilling occurs, future information leaks into the test set, inflating the reported 87.14% RF accuracy [PAGE 5]. A second gray zone is normalization scope: if Z-scores are computed over the full dataset before splitting, the test-set mean and variance contaminate training statistics; if computed on training folds only, promoted or relegated teams introduce category shift because one-hot encoded team columns present in the test set may be absent from training, or vice versa, across the 2021–2025 promotion/relegation cycle. Neither contingency is addressed.

The results table places RF highest at 87.14% accuracy, 84.92% F1, 86.70% precision, 84.70% recall, and 99.00% ROC-AUC [PAGE 5], with supporting narrative on pages 7–8 [PAGE 7][PAGE 8]. Yet the conclusion on page 9 inverts this ordering, claiming "XGBoost achieved better performance, followed by lightGB and Random Forest" [PAGE 9], directly contradicting Table 3 and the abstract [PAGE 1]. This multi-hop inconsistency means downstream model-selection guidance is unstable: if a practitioner trusts the conclusion, they would deploy XGBoost despite its lower tabulated accuracy; if they trust Table 3, they deploy RF. The narrow 1.47% accuracy spread [PAGE 8] implies the ranking is statistically fragile and sensitive to the cited contradiction.

Finally, the paper claims real-time capability and quasi-real-time statistics [PAGE 1][PAGE 4], yet the architecture uses Streamlit and Gradio as frontends over a static five-season tabular dataset [PAGE 5], with no live event-stream ingestion, injury feed, or weather integration. The literature review itself acknowledges environmental factors and referee influence as critical omitted variables [PAGE 2], but the final feature set contains no weather, pitch, or officiating covariates [PAGE 4]. These gaps constitute a gray-zone audit: the model's internal validity is conditional on strict temporal feature boundaries and unseen-category handling that the paper does not document.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the outcome space be \(\mathcal{Y}=\{H,D,A\}\), denoting Home Win, Draw, and Away Win, a nominal three-class variable with no ordinal structure. The dataset is \(\mathcal{D}=\{(\mathbf{x}_i,y_i)\}_{i=1}^{N}\), where \(N\) is the count of EPL matches across seasons 2021–2025, sourced from Football-Data.co.uk, Kaggle, and public APIs [PAGE 4]. Each \(\mathbf{x}_i\) contains scoring data (full-time and half-time goals), match performance (total shots, shots on target), set-piece and discipline counts (corners, fouls, yellow/red cards), and engineered context [PAGE 4][PAGE 5].

Temporal partitioning uses a non-random split to enforce chronological causality:
\[
\mathcal{D}_{\text{train}} = \{i : t_i \le t_{c1}\}, \quad |\mathcal{D}_{\text{train}}| \approx 0.70N,
\]
\[
\mathcal{D}_{\text{val}} = \{i : t_{c1} < t_i \le t_{c2}\}, \quad |\mathcal{D}_{\text{val}}| \approx 0.15N,
\]
\[
\mathcal{D}_{\text{test}} = \{i : t_i > t_{c2}\}, \quad |\mathcal{D}_{\text{test}}| \approx 0.15N,
\]
with stratification preserving class proportions of \(H, D, A\) across splits [PAGE 4].

Preprocessing applies Z-score normalization:
\[
x' = \frac{x - \mu}{\sigma}, \qquad \mu \to 0,\; \sigma \to 1 \text{ post-transform},
\]
with missing values imputed and match IDs removed [PAGE 4]. Categorical team and referee identifiers are one-hot encoded [PAGE 4].

Rolling-window features for \(k \in \{3,5,10\}\) matches:
\[
\bar{x}^{(k)}_i = \frac{1}{k}\sum_{j=1}^{k} x_{i-j},
\]
applied to goals, shots, and possession to capture recent form [PAGE 4]. Attack/defence strength ratios \(r_{ad}\) are dimensionless; "days since last match" is measured in days; all count variables (goals, shots, corners, fouls, cards) are dimensionless integers.

Evaluation metrics for class \(c \in \mathcal{Y}\):
\[
\text{Accuracy} = \frac{\sum_{c} TP_c}{N}, \qquad
\text{Precision}_c = \frac{TP_c}{TP_c + FP_c}, \qquad
\text{Recall}_c = \frac{TP_c}{TP_c + FN_c},
\]
\[
\text{F1}_c = 2 \frac{\text{Precision}_c \cdot \text{Recall}_c}{\text{Precision}_c + \text{Recall}_c},
\]
and ROC-AUC computed one-vs-rest over decision threshold \(\tau \in [0,1]\), expressed as a unitless probability in \([0,100]\%\) in the paper's tables [PAGE 4][PAGE 5].

Reported performance [PAGE 5]: RF \(Acc=87.14\%\), \(F1=84.92\%\), \(Prec=86.70\%\), \(Rec=84.70\%\), \(ROC=99.00\%\); XGB \(Acc=86.64\%\), \(F1=85.09\%\), \(Prec=85.85\%\), \(Rec=84.62\%\), \(ROC=98.40\%\); LGB \(Acc=85.67\%\), \(F1=83.89\%\), \(Prec=85.09\%\), \(Rec=83.26\%\), \(ROC=97.96\%\). The accuracy spread is \(1.47\) percentage points [PAGE 8].

Singularity and breakdown regimes:
1. \(\sigma = 0\) in Z-score normalization (constant feature) renders \(x'\) undefined.
2. \(TP_c + FP_c = 0\) makes Precision\(_c\) undefined; \(TP_c + FN_c = 0\) makes Recall\(_c\) undefined; \(\text{Precision}_c + \text{Recall}_c = 0\) makes F1\(_c\) undefined.
3. If class prior \(\pi_c = P(Y=c) = 0\) in \(\mathcal{D}_{\text{test}}\), one-vs-rest ROC-AUC for class \(c\) cannot be computed.
4. Rolling average \(\bar{x}^{(k)}_i\) is undefined when fewer than \(k\) historical matches exist (season start for new or promoted teams).
5. Temporal split boundary violation occurs if \(\bar{x}^{(k)}_i\) for \(i \in \mathcal{D}_{\text{test}}\) indexes matches \(j < t_{c2}\) belonging to \(\mathcal{D}_{\text{train}}\).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage traces to Breiman (2001) Random Forests and Friedman (2001) Gradient Boosting Machines, both cited in the paper's reference list [PAGE 9], with XGBoost and LightGBM as modern gradient-boosting refinements. Earlier EPL-specific work cited includes Baboota and Kaur (2018) on machine-learning predictive analysis of football results [PAGE 2], Razali et al. (2017) on Bayesian networks for EPL outcomes [PAGE 1], and Narayanan et al. (2024) comparing XGBoost and LightGBM on EPL structured data [PAGE 2]. The paper positions itself within ensemble-learning literature, citing Štemberk et al. (2023) on Random Forest versus Gradient Boosting versus Logistic Regression across European leagues [PAGE 2], Rane et al. (2022) on RF+SVM ensembles [PAGE 3], Shen et al. (2025) on a real-time stacking platform limited by insufficient data granularity [PAGE 3], and Mittal et al. (2020) on Gradient Boosting with pre-match features [PAGE 3].

A multi-week trap is embedded in the rolling-window design. Because EPL fixtures average roughly one match per week, the 10-match rolling average spans approximately 10–12 weeks of calendar time, encompassing international breaks, European midweek fixtures, and congested December–January schedules. Aggregating shots, possession, and goals over this window smooths out acute events—managerial changes, key injuries, and tactical pivots—into a single vector, destroying the temporal resolution needed to detect regime shifts. The "days since last match" fatigue feature captures only the inter-match interval, not cumulative multi-week load; a team playing three matches in eight days receives the same scalar as a team with three matches over four weeks, despite divergent recovery states [PAGE 4].

Another retro-causal trap is the five-season span (2021–2025) with promotion and relegation. Teams entering the EPL in 2024–25 have no EPL history in the training corpus; their one-hot encoded columns are unseen categories at inference time. The paper does not specify an out-of-vocabulary embedding strategy, so models either drop such rows or map promoted teams to an all-zero vector, effectively treating a newly promoted side as a blank slate. This creates a multi-week cold-start trap that compounds as the season progresses and rolling features accumulate only after the team has played several EPL matches.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of a manager, after a sequence of poor results, to revert to a conservative, habitual tactical set—lower defensive line, reduced shot volume, more crosses from wide areas—because the perceived risk of experimentation outweighs potential gain. The model's feature set includes rolling shots, possession, and results, so it can statistically register the *symptom* of regression (e.g., declining shots on target over the last five matches) but not the *intent* or the manager's belief state about the opponent's likely response.

The counter-trap emerges when the opposing manager anticipates this regression. If Team A is expected to sit deep, Team B may press high, compress the pitch, and attack the space behind the high defensive line. This is second-order theory of mind: Manager B models Manager A's expected regression and selects a tactic to exploit it. The tabular feature vector lacks opponent-specific tactical adaptation variables beyond static head-to-head history; it cannot represent that Team B's pressing intensity is a function of Team A's recent defensive posture.

The clock layer is absent entirely. The target is the full-time result {Home Win, Draw, Away Win}, and features are pre-match aggregates; there is no in-game clock state (elapsed time, score differential, red-card timing, substitution window). A match that is 1–0 at minute 75 with a red card for the leading side has a different conditional outcome distribution than the same scoreline at minute 15, yet the model receives no match-state clock variable [PAGE 4][PAGE 5]. This omission means the model cannot distinguish early dominance from late resilience, both of which correlate with the final label but through different causal pathways.

Recursive failure mode: the model outputs a probability distribution over {H,D,A} as if teams were stationary feature distributions. In reality, the pre-match probability is itself a public signal that influences managerial risk tolerance (e.g., a heavy underdog may park the bus because the model's implied probability of Home Win is high). Because the model does not include its own prior output as a feedback feature, it cannot represent the fixed point where beliefs about the prediction alter the behavior that determines the outcome. The result is a systematic underestimation of outcome volatility in mismatches where recursive expectations dominate raw statistics.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Association football is played over 90 minutes plus stoppage time on a pitch whose dimensions vary within IFAB bounds (length 90–120 m, width 45–90 m; top-flight EPL pitches are approximately 105 m × 68 m). These are constants absent from the feature schema [PAGE 4]. Veto condition: if a match is abandoned, relocated to a neutral venue with atypical dimensions, or played with altered duration, the input distribution shifts outside training support and the ensemble prediction is physically inapplicable.

Biomechanical layer: The dataset contains disciplinary and event counts (yellow/red cards, fouls, corners) but no player-load metrics—sprint distance, high-intensity accelerations, minutes played per player, or injury-status flags [PAGE 4][PAGE 5]. A red card accumulated in match \(i-1\) may trigger a suspension for match \(i\), yet the feature space encodes only the count, not the identity of the suspended player or their positional importance (e.g., starting goalkeeper versus squad rotation player). Veto condition: absence of a key player due to injury or suspension invalidates the assumption that team-level rolling averages represent the actual starting XI; the model's prediction should be vetoed because the biomechanical unit of execution (the fit player) has changed while the team-level covariate has not.

Weather layer: No meteorological covariates—temperature, precipitation, wind speed, or humidity—appear in the engineered feature list [PAGE 4], despite the literature review acknowledging environmental factors as variables that conventional models overlook [PAGE 2]. Heavy precipitation alters ball roll, passing accuracy, and possession structure; high wind disproportionately affects long-ball and aerial-duel outcomes. Veto condition: under extreme weather, the conditional distribution \(P(Y \mid \mathbf{x})\) learned from predominantly temperate-weather matches is no longer valid; the absence of weather features guarantees miscalibration.

Adjudication: The paper proposes no formal veto mechanism. Cross-layer adjudication requires an out-of-distribution gate: if (a) a player with >25% of team minutes is injured/suspended, (b) forecast precipitation exceeds a threshold, or (c) venue/pitch dimensions deviate beyond training support, the model output must be suppressed rather than emitted. Without this gate, predictions under veto conditions inherit the reported accuracy metrics (85–87%) but operate on invalid physical premises, converting ensemble generalization into silent failure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Unseen promoted team). Condition: a team promoted to the EPL for the 2025–26 season appears in the test fixture list, producing an all-zero one-hot vector because no column exists for that club [PAGE 4]. Counterfactual prediction: if the model is forced to emit a label, its accuracy for matches involving the promoted team falls below 65%, and the macro-F1 drops by at least 8 points relative to the reported 84.92% [PAGE 5], because the rolling-form and strength-ratio features are initialized from Championship data outside the EPL support and the team embedding is unlearned.

Scenario 2 (Fixture congestion without cumulative load). Condition: a home team plays its third match in seven days, including a midweek European fixture; the "days since last match" feature equals 3 but the three-week accumulated load is unmeasured [PAGE 4]. Counterfactual prediction: the model outputs Home Win probability above 0.55 based on rolling form, while the actual match ends Draw or Away Win because of squad rotation; the false-positive rate for the home class increases by at least 12 percentage points versus non-congested fixtures, violating the reported precision of 86.70% [PAGE 5].

Scenario 3 (Extreme weather). Condition: a match is played under sustained precipitation with wind speed above 12 m/s, conditions not represented in the training feature space [PAGE 4]. Counterfactual prediction: because the model lacks weather covariates, its predicted class probabilities remain anchored to dry-weather rolling averages; if it predicts Away Win with probability >0.60, the actual result is Draw or Home Win in at least 40% of such counterfactual cases, inflating the error rate beyond the tabulated 12.86% complement of RF accuracy [PAGE 5] and triggering a reliability veto.
</RLVR_COUNTERFACTUAL_VETOES>
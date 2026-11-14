---
source: "Application_of_Machine_Learning_Algorith.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 8947
---

<NATIVE_REASONING>
The user wants a deep analysis of this ML football classification paper, structured in exact XML sections. No betting lines. Must cite pages with verbatim quotes. Need >=1000 words across sections. Let me build a rigorous derivation.

Key facts from paper:
- Predicts "both teams score" binary classification in Portuguese Liga NOS, 1994/95 to 2018/19, ~7000 matches.
- Features: HT, AT, HTAP, ATAP (Sofifa attack power 0-100, default 50 for non-league), HTAHG (home team average home goals), ATAAG (away team average away goals).
- Algorithms: SVM, DT, LR, KNN. Trained with Scikit-Learn.
- Split 70/30: 4877 train, 2091 test.
- Class balance: 1107 "Both do not mark", 984 "Both mark" (test set). That's 52.9%/47.1%.
- SVM: micro 0.53, macro 0.52, weighted 0.52; 52.65% accuracy.
- DT: 53.18%; KNN K=20: 53.99%; best overall.
- 18th matchday: KNN 7/9 = 77.78%, SVM 5/9=55.56%, DT 5/9=55.56%, LR 5/9... wait table says 100%? Let me re-read.

Table 2: columns are "Both Mark" (actual), KNN, SVM, Decision Tree, Linear Regression. Then rows. Last row of numbers: "100% 77,78% 44,44% 55,56% 55,56%". That's probably the accuracy row: actual "Both Mark" is 100% (obviously the label column), KNN 77.78%, SVM 44.44%, DT 55.56%, LR 55.56%. Hmm but the text says "using SVM... we obtain a hit rate of 44.44%, in 9 games, having been successful in 4 games" (that's default SVM). Then with tuned params, 55.56% (5/9). And DT 55.56% (5/9). KNN "about 77.18%" (typo for 77.78%) 7/9.

Interesting: the table's KNN predictions... let me check. Actual both-mark column: 0,0,1,0,1,1,0,1,0 → 4 ones out of 9 = 4/9 = 44%? Hmm. Let me recompute. Rows: Rio Ave-Feirense 0-0 → 0. Boavista-Portimonense 0-2 → 0. Aves-Guimaraes 2-1 → 1. Santa Clara-Maritimo 0-1 → 0. Sp Lisbon-Moreirense 2-1 → 1. Belenenses-Tondela 2-2 → 1. Setubal-Benfica 0-1 → 0. Chaves-Porto 1-4 → 1. Nacional-Sp Braga 0-3 → 0. So 4 ones, 5 zeros.

KNN predictions: 0,0,1,0,1,0,0,1,0 → matches actual on rows 1,2,3,4,5,7,8,9 = 8/9? Let's check: row 1 KNN 0 = actual 0 ✓. Row 2 0=0 ✓. Row 3 1=1 ✓. Row 4 0=0 ✓. Row 5 1=1 ✓. Row 6 KNN 0 vs actual 1 ✗. Row 7 0=0 ✓. Row 8 1=1 ✓. Row 9 0=0 ✓. That's 8/9 = 88.9%, not 77.78%. Hmm. Let me recheck the table row values.

Table 2 rows (actual, KNN, SVM, DT, LR):
Rio Ave Feirense 0-0: 0, 0, 0, 1, 1
Boavista Portimonense 0-2: 0, 0, 0, 0, 0
Aves Guimaraes 2-1: 1, 1, 1, 1, 0
Santa Clara Maritimo 0-1: 0, 0, 0, 1, 0
Sp Lisbon Moreirense 2-1: 1, 0, 0, 0, 0
Belenenses Tondela 2-2: 1, 0, 0, 0, 0
Setubal Benfica 0-1: 0, 0, 0, 0, 0
Chaves Porto 1-4: 1, 1, 0, 1, 1
Nacional Sp Braga 0-3: 0, 0, 1, 0, 1

Wait the column after actual is KNN. Row 1: actual 0, KNN 0? The text "0 0 0 1 1" — first is actual, then KNN=0, SVM=0, DT=1, LR=1.

KNN: 0,0,1,0,0,0,0,1,0 vs actual 0,0,1,0,1,1,0,1,0 → matches rows 1,2,3,4,7,8,9 = 7/9 = 77.78% ✓. 

SVM: 0,0,1,0,0,0,0,0,1 vs actual → matches 1,2,3,4,6? row 6 SVM=0 vs actual 1 ✗. rows: 1✓,2✓,3✓,4✓,5✗(0 vs1),6✗,7✓,8✗(0vs1),9✗(1vs0) = 4/9 = 44.44% ✓ (default SVM).

DT: 1,0,1,1,0,0,0,1,0 vs actual: 1✗(1vs0),2✓,3✓,4✗,5✗,6✗,7✓,8✓,9✓ = 5/9 = 55.56% ✓.

LR: 1,0,0,0,0,0,0,1,1 vs actual: 1✗,2✓,3✗,4✓,5✗,6✗,7✓,8✓,9✗ = 4/9 = 44.44%. But text says 55.56%. Hmm. Text: "the LR is the algorithm that had the worst predictive accuracy, although according to Table 2 had obtained better accuracy than SVM." And table footer says 55,56% for LR. But my count gives 4/9. Let me recount LR: row1 actual 0, LR 1 ✗. row2 0,0 ✓. row3 1,0 ✗. row4 0,0 ✓. row5 1,0 ✗. row6 1,0 ✗. row7 0,0 ✓. row8 1,1 ✓. row9 0,1 ✗. = 4/9 = 44.44%. So table footer 55.56% for LR is inconsistent. That's a great audit item — internal inconsistency. Actually maybe the last percentage column is misaligned. I should note the discrepancy carefully as a gray-zone audit finding: footer claims 55.56% for both DT and LR while row-level tally yields 44.44% for LR. Good.

Also note "77.18%" typo for 77.78%.

Now, the deep analysis. Need to build formal equations. Let's construct:

Define binary target Y ∈ {0,1}: 1 = both teams score. Base rate in test: 984/2091 = 0.4706.

Majority-class trivial baseline: predict always 0 → accuracy = 1107/2091 = 0.5294. That's 52.94%. KNN micro 0.54 (53.99% per text). So KNN's lift over majority-class classifier is only ~1.05 percentage points. That's a critical audit point: the headline "54%" is nearly the null model. Let me compute: 0.5399 - 0.5294 = 0.0105. So ~1.05 pp above prevalence baseline. And the Matthews correlation / Cohen's kappa would be near zero.

Compute kappa for KNN approximate: With accuracy p_o = 0.5399, prevalence of positives p = 0.4706, and predicted positive rate q. KNN's recall for "Both mark" = 0.34, precision = 0.52. So TP = 0.52 * q*N... Let's estimate. Recall 0.34 with 984 positives → TP ≈ 334.6, FN ≈ 649. Precision 0.52 → q*N = TP/0.52 ≈ 643. Predicted positives ≈ 643 out of 2091 = 0.3075. p_e = p*q + (1-p)(1-q) = 0.4706*0.3075 + 0.5294*0.6925 = 0.1447 + 0.3666 = 0.5113. kappa = (0.5399 - 0.5113)/(1 - 0.5113) = 0.0286/0.4887 ≈ 0.0585. Very low. Good quantitative audit.

For DT: recall 0.26, precision 0.50 → TP ≈ 255.8, predicted pos = 511.7 → q = 0.2447. p_e = 0.4706*0.2447 + 0.5294*0.7553 = 0.1152+0.3999=0.5151. accuracy 0.5318. kappa = 0.0167/0.4849 = 0.0344.

For SVM: recall 0.39, precision 0.50 → TP=383.8, q = 767.5/2091 = 0.367. p_e = 0.4706*0.367+0.5294*0.633 = 0.1727+0.3351=0.5078. acc 0.5265. kappa = 0.0187/0.4922 = 0.038.

So all three models have kappa ≈ 0.03–0.06, i.e., "slight" agreement on Landis-Koch scale. This is the crucial gray zone: the paper's claim of KNN superiority (54% vs 53%) is within noise. Standard error of accuracy difference: with n=2091, SE of a single accuracy ≈ sqrt(0.53*0.47/2091) = sqrt(0.2491/2091)=sqrt(0.0001191)=0.0109 → 1.09 pp. Paired comparison SE is smaller but McNemar would be needed; differences of 0.5–1.3 pp are ~ within 1 SE. So no statistical significance. Also note the 18th matchday test is n=9 — binomial SE = sqrt(0.778*0.222/9) = sqrt(0.0192) = 0.1386 → 13.9 pp. 7/9 with p=0.5 null: two-sided binomial p = 2*(C(9,7)+C(9,8)+C(9,9))/512 = 2*(36+9+1)/512 = 92/512 = 0.1797. Not significant. p=0.53 null similar.

Great. Now formal operators:

1. Bayes-optimal decision rule: ŷ = argmax_y P(y|x); with asymmetric costs. The 0.5 threshold is inappropriate; optimal threshold τ* = c_FP/(c_FP + c_FN).

2. Empirical risk: R(f) = E[L(Y, f(X))] = (1/n) Σ 1[Y_i ≠ f(x_i)].

3. SVM primal: min_{w,b,ξ} ½||w||² + C Σ ξ_i s.t. y_i(w·φ(x_i)+b) ≥ 1-ξ_i, ξ_i ≥ 0. Dual, kernel K. Hyperplane margin 2/||w||. Units: w has units of inverse input-feature units (dimensionless here since features scaled).

4. RBF kernel: K(x,x') = exp(-γ||x-x'||²); γ has units of inverse squared feature units. Chosen γ = 0.0001; note mismatched with linear kernel selection.

5. Entropy: H = -Σ p_i log2 p_i, bits. Gini = 1 - Σ p_i², dimensionless in [0, 1-1/k].

6. Euclidean distance: d = sqrt(Σ (x_i - y_i)²), units of feature space (mixed-dimension here — a units violation because HTAP ∈ [0,100] dimensionless index while HTAHG ∈ goals/game).

7. KNN: ŷ = mode over k nearest; or weighted vote w_j = 1/d_j.

8. Evaluation: precision, recall, F1 = 2PR/(P+R), micro/macro.

Units: HTAP/ATAP is a "Sofifa" rating 0–100, dimensionless ordinal index; HTAHG goals per game (units: goals·game⁻¹); entropy bits; accuracy dimensionless probability.

Singularity/breakdown regimes:
- γ → 0 in RBF: kernel → 1 (constant), decision function collapses to b; underfits. γ → ∞: K → δ (identity), every point is its own support vector, perfect memorization, zero training error, infinite VC-ish capacity → overfit.
- C → ∞: hard-margin, no regularization, margin singular if classes overlap → no feasible solution without slack (ξ must absorb all overlap); C → 0: w → 0, decision boundary at b, degenerate.
- K=1 KNN: zero bias, variance → high; decision boundary is Voronoi; K=n: predicts global majority → constant classifier = the 52.94% null. Important: K=20 chosen, but note as K→n the model degenerates to the base rate. Indeed KNN's 53.99% approximates the 52.94% minority-predicting... wait, majority predicts 0 always giving 52.94%. KNN at 53.99% is nearly the null.
- Entropy → 0 for pure node; denominator log2 k. Gini max at 1-1/k.
- Class imbalance 52.9/47.1 is nearly balanced, so accuracy is a fair-ish metric here — but this also means the null model is at 52.94%, so low kappa is the real story.
- Temporal leakage: random 70/30 split over 21 seasons. If the split is random (paper says "several percentages were applied... best was 30% test"), then future information leaks into training → optimistically biased. That's a breakdown regime of the evaluation operator, not the model.

Also: HTAHG/ATAAG computed from "all matches played by Benfica at home against Porto, and goals scored, divided by total number of games between them" — that's a head-to-head statistic computed using data that may include the test matches themselves → leakage/second-order circularity. Good.

Also HT/AT as raw categorical features (team names). With 20-ish teams across 21 seasons, high cardinality, and the paper doesn't explain encoding.

And the attack power from Sofifa is only the "current season 2018/2019" rating assigned retroactively to all historical matches, and non-league teams get 50. That's a temporal retrojection: 1994/95 matches assigned 2018/19 strength ratings. Massive anachronism.

Now RETROCAUSAL_GENEALOGY: trace Maher 1982 [18] Poisson model for football scores, Karlis & Ntzoufras 2008 [14] Skellam for goal difference, Stefani 2009 [28] score difference vs total, Heuer & Rubner 2012 [10], Cortes & Vapnik 1995 [3], Chih-Wei & Chih-Jen 2002 [2], Fix & Hodges / Cover & Hart for KNN, Ferrero 2009 [6], Breiman et al. CART for DT (though the paper cites Shouman [27] and Wu [30]), Rudin [23], Igiri & Nwachukwu [12], Prasetio & Harlili [22], Shin & Gasparyan [26]. Leicester 2015/16 on page 1 as the epistemic rupture.

Multi-week traps: 
- Multi-week trap 1: the paper's own future work suggests adding "defensive power" — but they already tested "poder do meio campo" (midfield power) with no change. Adding features with no marginal information → no lift.
- Multi-week trap 2: chasing accuracy above the 52.94% base rate. The real ceiling given the features. Short-horizon "hot streaks" (KNN 7/9 on matchday 18, then 7/9 on matchday 19) are variance, not skill. n=9.

RECURSIVE_THEORY_OF_MIND: crisis habit regression — model selection under small-n feedback (matchday 18/19) leads analyst to prefer KNN. Counter-trap: pre-registered rolling-origin evaluation. Clock: season-long, must use temporal block splits. Also: the authors' own epistemic humility on page 3: "even high precision for predicting football data, is not reliable" — a self-veto.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto. Page 13: "in football there are many unpredictable variables, such as the meteorological factors, players and coaches, among other characteristics which cannot be defined." Page 7: home advantage "home team has greater support from the fans." Weather veto: precipitation changes ball roll, surface friction coefficient μ, pass speed; wind alters projectile equations; heat alters work capacity. Physical veto: soft-tissue injury, cumulative load, fixture congestion → changes the effective feature vector. None of these are in the 6 features → the feature vector is a lossy projection; the residual is irreducible from the model's perspective (aleatoric). Formalize: Y = g(X) + ε, ε irreducible; the Bayes error floor. The models' ~53% is consistent with ε dominating.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions.
1. Roll back to majority-class classifier (always predict "both do not mark"): predict 52.94% accuracy, kappa = 0. If KNN's 53.99% is not significantly above that, veto the claim "KNN is the best predictive algorithm."
2. Re-split with blocked temporal (train 1994/95–2015/16, test 2016/17–2018/19): predict accuracy drops toward 0.50–0.53 and kappa → ~0.0, because HTAHG/ATAAG head-to-head and 2018/19 Sofifa ratings leak. Veto the 54% generalization claim.
3. Shuffle-target permutation test: permute the binary labels within the test set, retrain. Predict ≈ 52.9% ± 1.1 pp from all models. If the reported 53.99% falls inside the permutation null's central 95% band, veto.
4. Maybe a 4th: replace HTAP/ATAP with constant 50 (which the paper assigns to non-league teams): predict unchanged accuracy → confirms HTAP/ATAP carry ~0 bits. Actually the paper already found midfield power irrelevant.

Also: formalize "0 bits" — mutual information I(Y; HTAP) ≈ 0.

I should also do a multihop derivation: from the confusion matrix → kappa → Bayes error → feature information content.

Let me also compute the Bayes-error floor bound from the observed consistency. If two teams have identical feature vectors but different outcomes, no deterministic function can separate them. Estimate: the features are coarse (HTAP ∈ {0..100} integers, 20 teams → maybe ~400 distinct pairs per season), 306 matches/season, 21 seasons. Collisions are frequent → an irreducible overlap region.

Also derive the expected number of distinct feature cells: teams ~18 in Liga NOS. Ordered pairs = 18*17 = 306 per season exactly matching matches/season. So per season, one match per ordered pair → each cell observed once per season. Over 21 seasons, ~21 observations per cell max, but with promotion/relegation many cells have far fewer. So a KNN with K=20 is effectively smoothing across the whole league — K=20 out of 4877 training points, hmm that's small. But in the local density, if features are standardized. Still.

Actually key: K=20 with 4877 points means neighborhood radius covers 0.4% of the space — but if HTAHG/ATAAG have low variance (goals/game ~ 1.0–1.5), the neighborhood spans most of the league. So KNN is effectively predicting the league-average base rate conditioned weakly on team identity. Consistent with 54%.

Let me also note the F1 paradox: "Both mark" F1 for KNN = 0.41 while "Both do not mark" F1 = 0.62 — the minority-ish class is under-detected. The paper's headline accuracy hides that the "both teams score" class (the actual object of study!) is detected at recall 0.34. So the classifier is bad at exactly the thing it claims to predict. That's a strong gray-zone finding. Precision 0.52 on "both mark" means a positive call is a coin flip.

Let me now write the sections. Need >=400 words for THINK_TRACE, total >=1000 words. I'll aim for ~2500-3000 words.

Citations with verbatim quotes. Let me collect exact quotes:

PAGE 1: "The central question of this study is the application of this classification model to predict the possibility for both teams to score goals." — actually that's page 2. Page 1: "It is exactly on the slope «both teams score goal or not» that focuses on this project" — yes page 1.

PAGE 1: "One of the reasons associated with this manifest collective interest, is related to the fact that it is an unpredictable game, with countless variables that can decide a game regardless of the teams economic power."

PAGE 1: Leicester "against all possibilities or prediction Leicester City, a team that had recently been promoted to Premier League, was the winner of the English championship"

PAGE 3: "It is important to note that even high precision for predicting football data, is not reliable, derived from the fact that a football game depends on many factors not to be missed."

PAGE 6: "In total there is an average of 300 games per year, being that in the 21 season, one reaches an accumulated of about 7000 games."

PAGE 6: "the odds of the different betting houses that were ignored"

PAGE 6: "In total, this approach will use six variables (HT), Away team (AT), Home team attack power (HTAP), Away Team Goal (ATAP), Home Team average home goals (HTAHG) and Away Team Average Away Goals (ATAAG)."

PAGE 7: "The HTAP and ATAP are obtained through Sofifa. Are range of fixed values from 0 to 100, which is assigned to each team according to the present season 2018/2019. The teams that are not in the NOS league is assigned the value 50."

PAGE 7: "It benefits the home team, since in football, the home team has a better average goal statistic. This can be justified, because the home team has greater support from the fans"

PAGE 7: "the average goal difference between Benfica vs. Porto, is different from the goal average between Porto and Benfica"

PAGE 7: "Using the interval [0.001, 0.01, 0.1, 1, 10, 100] for parameter C, the best value is 0.01" and "Use the range [0.0001, 0.001, 0.01, 0.1] for the gamma parameter, the best value is 0.0001" and "For the kernel parameter, linear is better than rbf."

PAGE 9: "The tree was set at a depth ranging from 1 to 32... According to Figure 3 on the left, we can see that the depth that had the best AUC score is 3."

PAGE 11: table. "Both do not mark 0,55 0,72 0,62 1107 / Both mark 0,52 0,34 0,41 984" for KNN.

PAGE 12: "The best percentage was 30% for the test data and 70% for the training data. Thus, there are 4877 samples in the training set, and 2091 samples in the test set."

PAGE 12: "the results obtained according to table 1, demonstrate that with the SVM algorithm applied in this project, there is a prediction accuracy of about 52.65%"

PAGE 12: "Applying again to the 18th Match day of NOS League, we obtain an accuracy of 55.56%, where in 9 games you get it in 5 games."

PAGE 13: "with K equal to 20, can get a prediction accuracy of 53.99%. Applying this algorithm to the 18Th Journey we had the best classification with about 77.18%, which means that in 9 games, 7 games were hit in right way."

PAGE 13: "in football there are many unpredictable variables, such as the meteorological factors, players and coaches, among other characteristics which cannot be defined. If it were possible, it would be extremely important for the classifiers improve their performances."

PAGE 13: "the power of the half field of the teams was added and the precision kept same in all classifiers., which makes it possible to record that this characteristic has no relevance if the teams score goals or not."

PAGE 13: "Performing another test with the 19th NOS League, again the KNN algorithm in 9 matches hit 7 games, while SVM hit 5 games and the DT hit 4 games"

PAGE 5: "the ideal values of K in most cases are in the range of 3 to 10" — note contradiction with chosen K=20.

PAGE 5: "Using odd values of K is more appropriate, using it in case of the majority of class to avoid tie situations" — K=20 is even, contradicting their own guidance. Great audit point.

PAGE 4: "SVM were originally designed for binary classification" and entropy/gini formulas.

PAGE 4: "To problem of this study were used these two categories. The same result, both in the accuracy of the model, as in the confusion matrix, and in the other evaluation model." — entropy and Gini give identical results.

Let me verify the K=20 even contradiction: page 5 says ideal K in 3–10 and use odd values; page 11/13 uses K=20. Yes, direct internal contradiction.

Also LR: page 4 "Linear Regression (LN) Linear regression is another algorithm for classification that tries to find a straight line" — mislabeling LR as classification, and the paper uses it for a binary target. And the acronym inconsistency LN vs LR.

Also page 1 lists "Linear Regression (LR)" among "classification algorithms".

Also: Train/test split random 70/30; 4877+2091 = 6968 total. That matches ~7000 games. Good.

Now compute the base rate on the full dataset approximated: test 1107/2091 = 0.5294 negative. Assume similar in train. So overall both-mark rate ≈ 0.47.

Now let me think about the "micro-average = accuracy for single-label multi-class" note. Micro-average precision = accuracy in single-label classification. Paper reports micro 0.53/0.54 — consistent.

Also note: Table 1's "Micro Average 0,53 0,53 0,53" for SVM but the text says 52.65%. 0.5265 rounds to 0.53 ✓.

Now let's compute kappa more carefully using given precision/recall and support.

SVM: support positives = 984, negatives = 1107. Recall_pos = 0.39 → TP = 383.76. Precision_pos = 0.50 → predicted positives = 767.5. FP = 383.76, TN = 1107 - 383.76 = 723.2. Accuracy = (383.76+723.2)/2091 = 1106.96/2091 = 0.5294. Hmm, that gives 52.94% not 52.65%. Rounding: precision 0.50 could be 0.495–0.505, recall 0.39 could be 0.385–0.395. Let's just note approximate. Let me use accuracy 0.5265. TP = 0.39*984 = 383.8. FP = TP*(1/P - 1) = 383.8*(1/0.50-1) = 383.8. TN = 1107 - FP - FN? No: TN = 1107 - FP = 723.2. Sum = 383.8+383.8+723.2 (TP+FP+TN) + FN(600.2)... wait accuracy = (TP+TN)/N = (383.8 + 723.2)/2091 = 0.5294. So precision must be slightly lower ~0.497. Fine — I'll say ≈0.53 and note the rounding band.

I'll present kappa ≈ 0.03–0.06 as computed from the reported precision/recall/support, with the caveat that rounding of two-decimal cells gives ±0.01 uncertainty.

Let me now write. Structure with the exact XML tags. No betting lines — I must avoid mentioning odds. Note the paper mentions "odds of the different betting houses that were ignored" on page 6 — I'm quoting to say they were discarded. I should be careful: invariant says never mention spreads, totals, moneylines, or odds. Even quoting? Safer: I can reference "a market-derived feature class that the authors explicitly discarded on [PAGE 6]" without reproducing the word. Actually the paper also says future work: "see if the two teams together score more than 2.5 goals, which is one of the new facets in the betting houses." I should avoid reproducing that. I'll paraphrase as "a market-derived aggregate-goal variant" and avoid the term. Good — strict compliance.

Let me write it now.

Word count target: I'll write generously.

Also need formal LaTeX with units and singularity regimes.

Let me draft the equations block:

(E1) Bayes decision: $\hat y(x) = \arg\max_{y\in\{0,1\}} \sum_{c} c(y,\hat y) P(y\mid x)$ — cost-sensitive.

(E2) Empirical risk with 0-1 loss.

(E3) Base rate / null model: $\mathrm{Acc}_{\text{null}} = \max(\pi_0, 1-\pi_0) = 1107/2091 = 0.5294$.

(E4) Cohen's kappa: $\kappa = (p_o - p_e)/(1-p_e)$, dimensionless, range [-1,1]; breakdown when $p_e \to 1$ (degenerate single-class prediction) — denominator singularity.

(E5) SVM primal with slack.

(E6) RBF kernel and γ units.

(E7) Entropy in bits; Gini.

(E8) Euclidean distance, unit-mismatch warning.

(E9) KNN vote, with K→n degeneracy.

(E10) Precision/recall/F1, micro = accuracy for single-label.

(E11) Binomial SE for matchday n=9: $\sigma = \sqrt{p(1-p)/n}$.

(E12) Decomposition of error: $Y = g(X) + \varepsilon$, Bayes error floor $\varepsilon_B$.

(E13) Mutual information $I(Y; X_j)$ in bits — for HTAP, the paper's own ablation suggests ≈0.

Good. Let me write it all out.

Also need the retrocausal genealogy — history of football score modeling: Maher (1982) Poisson with attack/defence parameters λ_home = α_i β_j γ; Karlis & Ntzoufras (2008) Skellam for difference; Stefani (2009); Dixon-Coles (1997) not cited but that's a genealogy gap — worth noting as a lineage rupture: the paper cites Maher but not Dixon-Coles, the bivariate Poisson correction for low-score dependence. Also Breiman CART not cited. Also Fix & Hodges 1951 / Cover & Hart 1967 for KNN not cited (paper cites Ferrero 2009 and Lope et al. 2011). That's a lineage truncation.

Multi-week traps:
1. Accuracy-chasing trap: the 52.94% null is not stated anywhere in the paper — a multi-week trap where each new feature "improves" accuracy from 53.18 → 53.99 without noting the null.
2. Small-n matchday feedback trap: matchday 18 (7/9) and 19 (7/9) create a false sense of model superiority.
3. Feature-addition trap: "add defensive power," "add date of play" — the paper already ran one ablation (midfield power) with null effect.

RECURSIVE_THEORY_OF_MIND: model the analyst's belief update. The authors' stated prior is that football is unpredictable (page 1, page 3). The observed 54% is consistent with that prior. But the narrative "KNN is the best" regresses to a habit of ranking models by a single scalar. Counter-trap: report kappa + CI + permutation null. Clock: rolling-origin, season-blocked, pre-registered.

CROSS_LAYER_VETO: weather (precipitation, wind, temperature), biomechanics (soft tissue, sprint load, ACL), pitch (friction coefficient, grass length), referee, travel. Formalize as a veto operator V: if the covariate set X does not include the variables that generate the residual variance, then no function of X can exceed the Bayes rate. Provide the derivation: $P(Y=1|x) = \int P(Y=1|x,z) dP(z)$ where z is the unobserved physical state; the marginal is smoothed toward the base rate π, so the achievable discrimination shrinks by Jensen-type argument.

Actually more precise: if z is unobserved and independent of x given the physical state, then P(Y=1|x) → π as the influence of z grows. The mutual information I(Y;X) ≤ I(Y; X,Z) and the gap is the information deficit. Good.

Let me write with the required structure and be careful about word count.

I'll write it now.
</NATIVE_REASONING>

<THINK_TRACE>
The first multi-hop step is to establish what the paper actually computes, not what its abstract advertises. [PAGE 1] states the target: "It is exactly on the slope «both teams score goal or not» that focuses on this project". The learning problem is therefore binary: \(Y=1\) if both sides score, \(Y=0\) otherwise. The second hop is the support structure: [PAGE 12] fixes the split — "The best percentage was 30% for the test data and 70% for the training data. Thus, there are 4877 samples in the training set, and 2091 samples in the test set." The third hop is the class marginal inside that test set, recoverable from the Support column of Table 1 [PAGE 11]: 1107 negatives and 984 positives. This immediately yields the single most important quantity the paper never computes — the majority-class null accuracy,

\[
\mathrm{Acc}_{\text{null}}=\frac{\max(1107,984)}{2091}=\frac{1107}{2091}=0.52941\ldots
\]

A constant classifier that always answers "both do not mark" therefore scores 52.94% on exactly this test partition. [PAGE 13] reports that "with K equal to 20, can get a prediction accuracy of 53.99%." The entire claimed advantage of the winning model over a constant predictor is \(0.5399-0.5294=0.0105\), i.e. roughly one percentage point. [PAGE 12] reports SVM at "about 52.65%" and [PAGE 12] reports DT at "53.18%" — the SVM is therefore *below* the null model. This is the gray zone: the paper's ranking ("KNN is the best prediction algorithm") is a ranking of three estimators that are all within ~1.3 pp of a predictor that learns nothing.

The fourth hop is to convert this into an inferential statement. The binomial standard error of a single accuracy estimate at \(n=2091\) and \(p\approx0.53\) is \(\sigma=\sqrt{p(1-p)/n}=\sqrt{0.53\cdot0.47/2091}\approx0.0109\), i.e. 1.09 pp. A paired comparison (McNemar) has smaller variance than the unpaired difference, but the reported gaps of 0.35 pp (DT vs KNN) and 1.34 pp (SVM vs KNN) are of the same order as the noise floor. No confidence interval, no McNemar statistic, and no permutation null appears anywhere in the paper. The "best model" claim is therefore unsupported at conventional significance.

The fifth hop is to look at the per-class column rather than the micro-average. For KNN [PAGE 11]: "Both mark 0,52 0,34 0,41 984". For the class that is the *object of the study* — both teams scoring — recall is 0.34 and precision 0.52. A positive call is barely better than a coin flip, and two thirds of true both-score matches are missed. The headline 53.99% is manufactured almost entirely by the majority class ("Both do not mark" recall 0.72). This is the classic accuracy paradox operating at a nearly balanced marginal (52.94/47.06), where it is subtle enough to escape notice: the marginal is balanced, so accuracy *looks* legitimate, yet the conditional discrimination is near zero.

The sixth hop reconstructs Cohen's \(\kappa\) from the reported precision/recall/support triples. With \(\pi_+=0.4706\), KNN: \(TP\approx0.34\cdot984=334.6\), predicted positives \(\approx TP/0.52\approx643\), so \(\hat q=643/2091=0.3075\); \(p_e=\pi_+q+(1-\pi_+)(1-q)=0.4706(0.3075)+0.5294(0.6925)=0.1447+0.3666=0.5113\); \(\kappa=(0.5399-0.5113)/(1-0.5113)\approx0.059\). DT: recall 0.26, precision 0.50 → \(TP\approx255.8\), \(q\approx0.2447\), \(p_e\approx0.5151\), \(\kappa\approx0.034\). SVM: recall 0.39, precision 0.50 → \(TP\approx383.8\), \(q\approx0.367\), \(p_e\approx0.5078\), \(\kappa\approx0.038\). All three sit in the "slight agreement" band of the Landis–Koch scale, with rounding of the two-decimal table cells contributing roughly \(\pm0.01\) uncertainty. The correct summary of this paper is not "KNN achieves 54%" but "three classifiers achieve chance-adjusted agreement of 3–6% on a binary football event."

The seventh hop is the small-\(n\) trap. [PAGE 13]: "Applying this algorithm to the 18Th Journey we had the best classification with about 77.18%, which means that in 9 games, 7 games were hit in right way." (The "77.18%" is a typographical corruption of 77.78% = 7/9.) Under a null of \(p=0.5\), the two-sided binomial probability of 7 or more successes in 9 trials is \(2\cdot(36+9+1)/512=92/512=0.180\). Under a null of \(p=0.5294\), it is larger still. [PAGE 13] then reports the replication: "Performing another test with the 19th NOS League, again the KNN algorithm in 9 matches hit 7 games, while SVM hit 5 games and the DT hit 4 games." Two independent 7/9 results are suggestive but each carries a binomial standard error of \(\sqrt{0.778\cdot0.222/9}\approx0.139\), i.e. \(\pm13.9\) pp. The correct multi-week discipline is to pool all matchdays into a rolling-origin evaluation, never to select a model on a nine-game window.

The eighth hop is the internal-consistency audit of the Table 2 row-level tally [PAGE 12]. Reading the actual-label column gives \(Y=(0,0,1,0,1,1,0,1,0)\). The KNN column \((0,0,1,0,0,0,0,1,0)\) agrees on seven rows → 77.78%, consistent. The SVM column \((0,0,1,0,0,0,0,0,1)\) agrees on four rows → 44.44%, consistent with the reported default-parameter result. The DT column \((1,0,1,1,0,0,0,1,0)\) agrees on five rows → 55.56%, consistent. The LR column \((1,0,0,0,0,0,0,1,1)\) agrees on four rows → 44.44%, but the footer prints 55.56% and [PAGE 12] asserts LR "had obtained better accuracy than SVM." The row-level evidence contradicts the footer by one full game. This is a reproducible arithmetic discrepancy, not a modelling judgement, and it is the kind of defect that a pre-registered analysis script would have caught automatically.

The ninth hop is the temporal-leakage audit. [PAGE 6] describes a corpus spanning "from the 1994/1995 season to the current season in 2018/2019" with "an accumulated of about 7000 games." A random 70/30 split over 21 seasons places 2018/19 fixtures in the training set and 1994/95 fixtures in the test set. Worse, [PAGE 7] states: "The HTAP and ATAP are obtained through Sofifa. Are range of fixed values from 0 to 100, which is assigned to each team according to the present season 2018/2019. The teams that are not in the NOS league is assigned the value 50." A 1994/95 fixture is thus encoded with a 2018/19 squad-strength rating — a retrocausal projection of future information onto the past. And [PAGE 7] on HTAHG/ATAAG: "HTAGH (Benfica), is calculated from all matches played by Benfica at home against Porto, and goals scored, where the total number of goals is divided by total number of games between them." If that head-to-head aggregate is computed over the full corpus and then used as a feature for a match that is itself inside the corpus, the feature is partially a function of the label. These two mechanisms alone can manufacture a one-to-two point accuracy illusion — precisely the size of the reported effect.

The tenth hop is the algorithmic self-contradiction. [PAGE 5] advises: "Using odd values of K is more appropriate, using it in case of the majority of class to avoid tie situations," and "the ideal values of K in most cases are in the range of 3 to 10." The paper then selects \(K=20\) [PAGE 13] — even, and outside its own recommended band. Similarly, [PAGE 7] reports that the best RBF bandwidth was \(\gamma=0.0001\) and then reports "For the kernel parameter, linear is better than rbf," meaning the tuned \(\gamma\) is discarded; the two tuning statements are mutually inert. And [PAGE 4] reports that Entropy and Gini produced "The same result, both in the accuracy of the model, as in the confusion matrix, and in the other evaluation model" — expected, since for a binary split with the same candidate thresholds the two impurities are monotonically related, so the identical outcome carries zero evidential weight yet is presented as a finding.

The final hop is the base-rate ceiling argument. The six features [PAGE 6] are team identity, a static 0–100 strength index, and two team-specific goal averages. None encodes injuries, rotation, travel, weather, referee, or within-match state. [PAGE 13] concedes the point: "in football there are many unpredictable variables, such as the meteorological factors, players and coaches, among other characteristics which cannot be defined." The paper's own ablation reinforces it: "the power of the half field of the teams was added and the precision kept same in all classifiers, which makes it possible to record that this characteristic has no relevance if the teams score goals or not." A feature with zero marginal information is exactly what the mutual-information operator predicts when the residual variance is dominated by unobserved physical state.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**O1 — Bayes-optimal decision operator (cost-sensitive).**
\[
\hat y(x)=\arg\max_{y\in\{0,1\}}\sum_{c\in\{0,1\}} C(c,\hat y)\,P(y=c\mid x),\qquad
\tau^{*}=\frac{C_{\mathrm{FP}}}{C_{\mathrm{FP}}+C_{\mathrm{FN}}}
\]
Units: \(C\) in arbitrary cost units (dimensionless if normalised); \(P\) dimensionless probability; \(\tau^{*}\in[0,1]\) dimensionless threshold. Assumption: calibrated posteriors. Breakdown: if the posterior is uncalibrated (as with an uncalibrated SVM margin or a KNN vote fraction), \(\tau^{*}\) does not transfer; the paper uses an implicit \(\tau=0.5\), which is only optimal when \(C_{\mathrm{FP}}=C_{\mathrm{FN}}\) and posteriors are calibrated. Neither condition is verified anywhere in [PAGE 1]–[PAGE 15]. Singularity: \(C_{\mathrm{FP}}+C_{\mathrm{FN}}=0\) is degenerate (no decision problem).

**O2 — Empirical 0-1 risk.**
\[
\hat R_n(f)=\frac{1}{n}\sum_{i=1}^{n}\mathbf{1}\{Y_i\neq f(X_i)\}
\]
Units: dimensionless proportion. With \(n=2091\) per [PAGE 12]. Standard error \(\sigma=\sqrt{p(1-p)/n}\); at \(p=0.53\), \(\sigma=1.09\times10^{-2}\). Breakdown: \(\hat R_n\) is an unbiased estimator of \(R(f)\) only under exchangeability of the test and training distributions — violated by the retrocausal feature construction described on [PAGE 7].

**O3 — Majority-class null (the paper's missing comparator).**
\[
\mathrm{Acc}_{\text{null}}=\frac{\max(n_0,n_1)}{n_0+n_1}=\frac{1107}{2091}=0.5294
\]
Source: Support column, Table 1, [PAGE 11]: "Both do not mark ... 1107" and "Both mark ... 984". This number is absent from the paper. All reported accuracies — 52.65% (SVM) [PAGE 12], 53.18% (DT) [PAGE 12], 53.99% (KNN) [PAGE 13] — must be read against it, not against zero.

**O4 — Cohen's \(\kappa\) (chance-corrected agreement).**
\[
\kappa=\frac{p_o-p_e}{1-p_e},\qquad p_e=\pi_+\hat q+(1-\pi_+)(1-\hat q)
\]
Units: dimensionless, range \([-1,1]\). Derived values from [PAGE 11] cells: SVM \(\kappa\approx0.038\), DT \(\kappa\approx0.034\), KNN \(\kappa\approx0.059\). Singularity: \(p_e\to1\) occurs when the classifier collapses to a single class, blowing up the denominator toward \(0/0\); this is the degenerate-constant-classifier regime, and it is approached by all three models here.

**O5 — Soft-margin SVM primal.**
\[
\min_{w,b,\xi}\ \tfrac{1}{2}\|w\|^{2}+C\sum_{i=1}^{n}\xi_i\quad\text{s.t.}\quad y_i\big(w^{\top}\varphi(x_i)+b\big)\ge1-\xi_i,\ \ \xi_i\ge0
\]
Units: \(\|w\|\) in inverse feature units; the geometric margin is \(2/\|w\|\) in feature units; \(C\) in (loss)\(^{-1}\). Reported tuning [PAGE 7]: "Using the interval [0.001, 0.01, 0.1, 1, 10, 100] for parameter C, the best value is 0.01". Breakdown regimes: \(C\to\infty\) forces hard-margin and becomes infeasible under class overlap (the \(\xi\) must absorb all overlap, dual diverges); \(C\to0\) sends \(w\to0\) and the decision function collapses to the intercept \(b\), yielding a constant classifier. The chosen \(C=0.01\) sits two decades below the geometric mean of the grid, i.e. in the strongly regularised regime — consistent with a model that has learned almost nothing beyond the intercept.

**O6 — RBF kernel and bandwidth.**
\[
K(x,x')=\exp\!\big(-\gamma\|x-x'\|^{2}\big)
\]
Units: \(\gamma\) in inverse-squared feature units; argued range in [PAGE 7]: "Use the range [0.0001, 0.001, 0.01, 0.1] for the gamma parameter, the best value is 0.0001". Breakdown: \(\gamma\to0^{+}\) makes \(K\to1\) for all pairs, the Gram matrix becomes rank-one, and the decision function collapses to a constant (maximal underfit); \(\gamma\to\infty\) makes \(K\to\delta_{xx'}\), every training point becomes its own support vector, training error \(\to0\) and generalisation diverges (maximal overfit). The paper then discards this branch entirely: "For the kernel parameter, linear is better than rbf" [PAGE 7].

**O7 — Impurity functionals used for splitting.**
\[
H(S)=-\sum_{i=1}^{k}p_i\log_2 p_i\ \ [\text{bits}],\qquad
G(S)=1-\sum_{i=1}^{k}p_i^{2}\ \ [\text{dimensionless},\ 0\le G\le1-\tfrac1k]
\]
Cited verbatim from [PAGE 4] as Eq. (1) and Eq. (2). Breakdown: \(H=0\) iff the node is pure (singularity of the log at \(p_i=1\) is a removable limit \(p\log p\to0\)); \(G\) is maximal at the uniform node. Since for binary splits \(H\) and \(G\) are monotone-equivalent in the relevant range, [PAGE 4]'s observation that they gave "The same result, both in the accuracy of the model, as in the confusion matrix, and in the other evaluation model" is a mathematical necessity, not an empirical finding.

**O8 — Tree capacity control.**
max_depth \(d\in[1,32]\) with optimum \(d^{*}=3\) and min_samples_leaf \(m^{*}=5\) [PAGE 9]: "The tree was set at a depth ranging from 1 to 32 ... we can see that the depth that had the best AUC score is 3." Breakdown: \(d\to n\) gives one leaf per training point, zero training entropy, and variance-dominated test error; \(d=1\) gives a decision stump, i.e. a constant-conditional-probability classifier identical in spirit to the null model O3. That the AUC-optimal depth is 3 confirms the signal is shallow — three binary splits can express at most eight regions, which is roughly a coarse team-tier partition.

**O9 — Euclidean metric (unit-heterogeneity warning).**
\[
d(x,y)=\sqrt{\sum_{j=1}^{K}(x_j-y_j)^{2}}
\]
Verbatim from [PAGE 5], Eq. (3). Dimensional audit: HTAP/ATAP are Sofifa indices on a 0–100 scale, dimensionless ordinal; HTAHG/ATAAG are goals per game, units \(\text{goal}\cdot\text{game}^{-1}\), with standard deviation of order \(0.5\); HT/AT are nominal team identifiers with no metric at all. Summing squared terms of unlike dimension is dimensionally ill-posed; the distance is dominated by whichever coordinate has the largest numeric variance before standardisation. The paper never reports a standardisation step. Breakdown: if unstandardised, \(d\) is effectively a rescaled distance in the attack-power coordinates alone, and KNN reduces to a lookup on the Sofifa grid.

**O10 — KNN decision rule and its null limit.**
\[
\hat y(x)=\operatorname*{mode}\Big\{\,y_{(i)}:\ x_{(i)}\in N_K(x)\Big\},\qquad N_K(x)=\text{the }K\text{ nearest training points}
\]
Breakdown regimes: \(K=1\) gives a Voronoi partition with zero training error and maximal variance; \(K\to n\) gives a constant classifier identical to O3. The chosen \(K=20\) [PAGE 13] is a strong smoother relative to the effective local density, which is consistent with KNN's 53.99% landing within one percentage point of O3. Internal contradiction: [PAGE 5] states "the ideal values of K in most cases are in the range of 3 to 10" and "Using odd values of K is more appropriate ... to avoid tie situations" — yet \(K=20\) is both out-of-range and even.

**O11 — Classification metrics.**
\[
P=\frac{TP}{TP+FP},\quad R=\frac{TP}{TP+FN},\quad F_1=\frac{2PR}{P+R}=\frac{2TP}{2TP+FP+FN}
\]
Verbatim from [PAGE 7], Eq. (4). Units: dimensionless. Micro-average over a single-label problem equals accuracy identically — so the "Micro Average 0,54 0,54 0,54" cell in Table 1 [PAGE 11] and the "53.99%" of [PAGE 13] are the same statistic, not corroborating evidence. Singularity: \(F_1\) is undefined at \(P+R=0\) (a classifier that never predicts positive), a regime the DT may approach on unseen seasons.

**O12 — Small-sample binomial audited against the matchday claims.**
\[
\sigma_{\hat p}=\sqrt{\frac{p(1-p)}{n}},\qquad P(X\ge7\mid n=9,p=0.5)=\frac{36+9+1}{512}=0.0899
\]
Two-sided \(p=0.180\). At the KNN operating point \(p=0.778\) (7/9), \(\sigma_{\hat p}=0.139\). The two independent 7/9 windows of [PAGE 13] are therefore not a replication strong enough to promote KNN.

**O13 — Bayes-error decomposition and the information ceiling.**
\[
Y=g(X,Z)+\varepsilon,\qquad P(Y=1\mid x)=\int P(Y=1\mid x,z)\,dP(z\mid x)
\]
with the Bayes risk \(R^{*}=\mathbb{E}\big[\min\{P(Y=1\mid X),1-P(Y=1\mid X)\}\big]\). Units: \(R^{*}\) dimensionless probability; information deficit measured by \(I(Y;X,Z)-I(Y;X)\) in bits. If the unobserved physical state \(Z\) (weather, soft-tissue load, rotation) dominates, the marginal \(P(Y=1\mid x)\) is pulled toward \(\pi_+\) for every \(x\), and \(R^{*}\) approaches \(\max(\pi_+,\,1-\pi_+)\) = O3. The observed 53–54% cluster is quantitatively what this operator predicts when \(Z\) is absent from \(X\).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this paper runs on two independent rails, and the rails never touch — which is the genealogical defect.

**Rail A: statistical football modelling.** The paper cites Maher [18] on [PAGE 14] — "M. Maher. Modelling association football scores. Statistica Neerlandica, 36(3):109–118, 1982" — the origin of the bivariate Poisson score model in which each side's expected goals are a product of an attack parameter, a defence parameter, and a home-advantage term. It also cites Karlis and Ntzoufras [14] on the Skellam distribution for goal difference, and Stefani [28] on score difference versus score total. The paper's own feature set is a hand-crafted, non-parametric shadow of exactly these constructs: HTAHG and ATAAG are crude attack-parameter estimates; HTAP and ATAP are imported attack ratings. The genealogical rupture is that the paper never fits a Maher-style generative model, never compares against it, and never uses it to derive a Bayes-rate benchmark — even though Maher's framework would have given exactly the null distribution needed to test whether 53.99% is distinguishable from chance.

**Rail B: statistical learning.** Cortes and Vapnik [3] for the SVM, Chih-Wei and Chih-Jen [2] for multiclass extensions, Ferrero [6] for the KNN forecasting criteria, Shouman et al. [27] and Wu [30] for decision-tree impurity, Pedregosa et al. [21] for Scikit-Learn. Two classic primary sources are conspicuously absent: Fix and Hodges (1951) / Cover and Hart (1967) for nearest-neighbour consistency, and Breiman, Friedman, Olshen and Stone (1984) for CART. The paper inherits the *tools* while severing the *theory*, which is precisely the genealogy of the K-selection error: Cover and Hart's consistency results are what would have told the authors that \(K\to n\) degenerates to the class prior, and CART's cost-complexity pruning theory is what would have told them that \(d^{*}=3\) is a statement about signal sparsity, not a hyperparameter victory.

**Retrocausal loop 1 — the 2018/19 rating projected onto 1994/95.** [PAGE 7]: "The HTAP and ATAP are obtained through Sofifa. Are range of fixed values from 0 to 100, which is assigned to each team according to the present season 2018/2019. The teams that are not in the NOS league is assigned the value 50." This is a literal retrocausal operator: the covariate vector for a 1995 fixture is partly a function of a 2019 squad rating. In genealogical terms, the model is being told the future and then evaluated on the past. Any modern reanalysis must annihilate this operator before any claim survives.

**Retrocausal loop 2 — head-to-head averaging over the evaluation window.** [PAGE 7]: "The average goal difference between Benfica vs. Porto, is different from the goal average between Porto and Benfica. In this case, HTAGH (Benfica), is calculated from all matches played by Benfica at home against Porto, and goals scored, where the total number of goals is divided by total number of games between them." If "all matches" means all matches in the corpus, then a test fixture contributes to its own feature. This is the classical target-leakage genealogy — the same defect that recurs in every era of sports analytics, from pre-computed Elo tables to pre-computed season aggregates.

**Retrocausal loop 3 — the home-advantage narrative.** [PAGE 7]: "It benefits the home team, since in football, the home team has a better average goal statistic. This can be justified, because the home team has greater support from the fans, which can lead to player's concentration, the mentality of facing a home game." This is a folk-mechanistic justification, inherited from the 1970s home-advantage literature, inserted as a design rationale rather than tested as a parameter. Pollard's classic home-advantage work and the Dixon–Coles low-score dependence correction would both be the canonical citations here; neither is present.

**Epistemic rupture anchor.** [PAGE 1] invokes Leicester City 2015/16: "against all possibilities or prediction Leicester City, a team that had recently been promoted to Premier League, was the winner of the English championship." This is the paper's own stated reason to distrust point prediction — and yet the paper's conclusion elevates KNN on the strength of two nine-game windows. The genealogical irony is complete: the motivating example is a cautionary tale about overfitting to structure, and the conclusion is an overfit to structure.

**Multi-week traps, enumerated.**
(i) *The accuracy-chasing trap.* Because the null (O3) is never printed, every subsequent experiment looks like progress. 52.65% → 53.18% → 53.99% reads as a monotone improvement; against 52.94% it is noise around a constant. Over successive weeks this trap compounds: each new feature appears to "help" by a fraction of a point, and the researcher never learns that the ceiling is the prior.
(ii) *The nine-game feedback trap.* [PAGE 13] reports 7/9 on matchday 18 and 7/9 again on matchday 19. Two hits in a row creates a strong subjective prior. The binomial calculation in O12 shows each is \(p\approx0.18\) under the null; two independent such windows are unremarkable in a 34-round season when many models are being compared.
(iii) *The feature-addition trap.* [PAGE 13] proposes adding "defensive power of the teams" and "Date of play." But the paper already ran one ablation — "the power of the half field of the teams was added and the precision kept same in all classifiers" — and found exactly zero effect. The genealogy predicts the next ablation will also return zero, because O13's information deficit is not in the attack/defence axis.
(iv) *The metric-substitution trap.* Reporting macro-F1 and weighted-F1 alongside micro-F1 creates an illusion of triangulation when all three are affine functions of the same confusion matrix.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**The authors' stated prior.** The paper opens with an explicit unpredictability belief. [PAGE 1]: "One of the reasons associated with this manifest collective interest, is related to the fact that it is an unpredictable game, with countless variables that can decide a game regardless of the teams economic power." [PAGE 3] reinforces it: "It is important to note that even high precision for predicting football data, is not reliable, derived from the fact that a football game depends on many factors not to be missed." The authors therefore enter the experiment with a correct, calibrated prior that the achievable accuracy is low.

**The belief update that contradicts the prior.** [PAGE 13] concludes: "it has concluded that K-Nearest Neighbor managed to have the best prediction accuracy of the results, with about 54%." This is a *relative* statement dressed as an *absolute* one. The prior says "accuracy will be low"; the data say "accuracy is 54%"; the correct joint conclusion is "accuracy is low, and the differences between models are within noise." Instead the narrative performs a silent substitution: low absolute accuracy becomes evidence *for* the winning model, because a low bar makes any leader look like a discoverer. This is the crisis-habit regression — under the pressure to produce a ranked conclusion, the analyst reverts to the habit of ranking by a single scalar.

**Habit 1 — scalar ranking.** The habit is: pick the model with the highest accuracy and declare it best. The counter-trap is to rank by a chance-corrected, uncertainty-quantified statistic (O4's \(\kappa\) with a bootstrap interval) against a stated null (O3). Under that discipline, KNN's \(\kappa\approx0.059\) with a bootstrap interval that certainly straddles DT's \(\kappa\approx0.034\) cannot support the word "best."

**Habit 2 — validation on the headline window.** The habit is: validate on the most recent, most narratively vivid window (matchday 18). The counter-trap is rolling-origin evaluation: train on seasons \(1..t\), test on season \(t+1\), aggregate over all \(t\). This simultaneously kills the retrocausal leakage of [PAGE 7] and the nine-game variance of O12.

**Habit 3 — the "unpredictable variables" absolution.** [PAGE 13]: "in football there are many unpredictable variables, such as the meteorological factors, players and coaches, among other characteristics which cannot be defined. If it were possible, it would be extremely important for the classifiers improve their performances." This is a correct diagnosis used as an excuse rather than as a specification. The counter-trap is to operationalise at least one of those variables — rest days, travel distance, temperature at kickoff — and measure the marginal information in bits, rather than listing them rhetorically.

**Theory-of-mind of the reader/reviewer.** The paper is written for a course-assessment audience ("This work was developed within the scope of the Discipline (Automatic Classification and Core Methods)" [PAGE 1]). That audience rewards completeness of algorithm coverage — SVM, DT, LR, KNN all present — and penalises missing comparison. The authors therefore optimise for *breadth of coverage* and *a ranked conclusion*, not for *inferential validity*. Anticipating this, the counter-trap for a reanalyst is to deliver the same breadth plus the three missing artefacts: the null (O3), the chance-corrected statistic (O4), and the permutation distribution. Those three artefacts cost almost nothing and neutralise the entire habit structure.

**The clock.** Three clocks are in play and the paper conflates them.
- *The match clock* (90 minutes): within-match state, the only clock that actually governs whether a goal is scored. Not modelled.
- *The season clock* (34 rounds): the correct unit for evaluation. The paper uses it only twice, on matchdays 18 and 19 [PAGE 12–13].
- *The corpus clock* (21 seasons, ~7000 matches per [PAGE 6]): the correct unit for training/testing discipline. The paper uses a random 70/30 split, which ignores it entirely.

The recursive failure is that the *shortest* clock (nine games) is granted evidentiary authority while the *longest* clock (21 seasons) is used only as a data volume, never as a temporal ordering constraint. Any disciplined reanalysis must invert this: the 21-season clock governs splitting, the 34-round clock governs aggregation, and the 90-minute clock governs the feature set.

**Adversarial self-check.** If I am wrong and KNN genuinely carries signal, what would I observe? KNN's \(\kappa\) should exceed 0.15, its both-mark recall should exceed 0.55, and a season-blocked split should reproduce accuracy within 2 pp of the random split. None of these is reported. Conversely, if I am right that the effect is leakage plus noise, what would I observe? Accuracy collapsing to ~0.52–0.53 under a blocked split, \(\kappa\) collapsing to ~0.02, and a permutation null whose 95% band contains 0.5399. The reported numbers are fully consistent with the second prediction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Layer 1 — Meteorological veto.** The paper names the layer and then excludes it. [PAGE 13]: "in football there are many unpredictable variables, such as the meteorological factors." Physical derivation: precipitation introduces a water film on the pitch, lowering the turf–ball friction coefficient \(\mu\) and increasing ball roll speed; wind introduces a lateral aerodynamic force \(F=\tfrac12\rho C_D A v_{\text{rel}}^{2}\) [units: N] that biases long passes and set pieces; temperature alters player work capacity via thermoregulation and sweat rate. Each of these modulates the goal-arrival intensity in a Maher-type model: \(\lambda_{\text{home}}(t)=\alpha_i\beta_j\gamma\,\exp(\eta^{\top}W_t)\) where \(W_t\) is the weather vector and \(\eta\) a coefficient vector with units inverse-weather-units. With \(\eta\) unestimated and \(W_t\) absent from \(X\), the conditional \(P(Y=1\mid x)\) is an average over weather states. Under O13, \(\mathbb{E}_{W}[P(Y=1\mid x,W)]\) is pulled toward \(\pi_+\) by the law of total probability, and the achievable discrimination shrinks monotonically in the variance of the weather effect. **Verdict: VETO on any claim that the six-feature vector is sufficient.** The ceiling is not 54% because football is hard; it is ~53% because the model is blind to a layer the authors themselves identified.

**Layer 2 — Biomechanical veto.** Soft-tissue injury, cumulative sprint load, and neuromuscular fatigue modulate the effective squad. A squad with two unavailable starters has a different attack parameter than the season-average Sofifa index implies. [PAGE 7]'s static "fixed values from 0 to 100" cannot represent within-season state change. Formalising: let \(s_i(t)\) be the availability state of team \(i\) at time \(t\), \(s_i\in[0,1]\). The true intensity is \(\lambda_i(t)=\alpha_i^{\,s_i(t)}\beta_j\,\gamma\). Because \(s_i(t)\) is unobserved in the corpus, the fitted \(\alpha_i\) is the marginal over \(s_i\), i.e. \(\alpha_i=\exp(\mathbb{E}[\ln\alpha_i^{s}])\) — a geometric-mean attenuation. The discrimination loss is second-order in the variance of \(s_i\), so a team with high availability variance (a squad with a chronic injury crisis) is systematically misrepresented. **Verdict: VETO on using a single static strength index across a 21-season corpus.** This is also a *unit* violation: a 0–100 ordinal index is being treated as a cardinal, time-invariant parameter.

**Layer 3 — Home-advantage and venue veto.** [PAGE 7] asserts the mechanism — "the home team has greater support from the fans" — and encodes it purely through HTAHG/ATAAG. But home advantage is not a single scalar; it decomposes into travel distance (units: km), rest-day differential (units: days), crowd density (units: spectators), and pitch dimensions. Each contributes additively in \(\ln\lambda\). Encoding it only via historical home goal averages means a promoted team's HTAHG is estimated from a lower division or set to the league default, and the home-advantage term is biased by exactly that team's promotion history. **Verdict: VETO on the home-advantage encoding for any team with fewer than ~30 home matches in the top flight**, which in a 21-season corpus with relegation cycles is a large fraction of the teams.

**Layer 4 — Officiating and rule-regime veto.** A 21-season corpus spans multiple changes in offside interpretation, added time computation, and substitution rules — each of which shifts the goal-arrival intensity. This is a *non-stationarity veto*: the exchangeability assumption underlying O2 fails across regime boundaries. **Verdict: VETO on pooling 1994/95 with 2018/19 in a single training set without a regime indicator**, and veto on any random split that mixes them.

**Layer 5 — Temporal-ordering veto.** Random 70/30 assignment over a 21-season corpus violates the causal arrow. Combined with the retrocausal feature operators documented on [PAGE 7], this is the single largest veto: it inflates measured accuracy by approximately the magnitude of the reported inter-model differences. **Verdict: HARD VETO.** No claim about generalisation survives until the split is blocked by season and the head-to-head aggregates are computed only from matches strictly preceding the test fixture.

**Adjudication summary.** Three of five layers (meteorological, biomechanical, officiating-regime) raise the Bayes floor toward the constant-class null O3. Two layers (temporal-ordering, static-strength-index) actively inflate the measured metric. The net consequence is that the reported 53–54% cluster is *simultaneously* an overstatement of generalising skill and an understatement of the achievable ceiling if the vetoed layers were modelled. The paper's conclusion that KNN is "best" operates in the narrow, artefactual band between those two errors.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto scenario 1 — The constant-classifier control.**
*Intervention:* Instantiate the null model of O3 in the same Scikit-Learn pipeline on the identical 2091-sample test partition [PAGE 12], predicting "both do not mark" for every fixture. No features, no training, no hyperparameters.
*Prediction (f
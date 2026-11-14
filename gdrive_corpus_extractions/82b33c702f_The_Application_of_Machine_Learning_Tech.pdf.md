---
source: "The_Application_of_Machine_Learning_Tech.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 48
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4507
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about ML for predicting team sport results, and produce output with specific XML sections, each meeting certain criteria. Key invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully avoid mentioning betting lines/spreads/totals/moneylines/odds. The source text mentions betting odds in several places (Purucker 1996, Kahn 2003, Odachowski & Grekow 2012, Tax & Joustra 2015, etc.). I must NOT use those terms. I can refer to "market-implied probabilities" or "bookmaker-implied forecasts" maybe? But careful: "odds" is explicitly banned. I should avoid the word "odds" entirely. I can say "market prices" or "wagering-market-implied class labels" but that might be too close. Better to just not mention betting at all, or refer to "external market-implied labels" without saying odds. Actually, invariant says never mention spreads, totals, moneylines, or odds. So I will avoid all four words.

I need formal LaTeX equations. I can define accuracy, confusion matrix terms, cross-entropy, RPS (Ranked Probability Score), etc. I must state units (dimensionless, probability [0,1], nats/bits), assumptions, singularity/breakdown regimes (e.g., when N_classes increases, accuracy becomes harder; when feature count p >> N_samples, overfitting singularity; when k-fold CV shuffles temporal instances causing look-ahead leakage singularity).

Word count: >=1000 words across sections. THINK_TRACE alone >=400 words. Let's aim for substantial depth.

Structure:
<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the paper's claims, the tension between feature richness and dataset size, the ANN overfitting issue, the temporal CV leakage, the sport-specific scoring increment combinatorics, the low-scoring randomness, etc. Gray zones: accuracy comparability across class counts, small samples, expert benchmark variance, "best model" selection bias, temporal non-stationarity (player transfers, coaching changes). >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Define dataset D = {(x_i, y_i)}_{i=1}^N, x_i in R^p, y_i in {1..C}.
- Accuracy: Acc = (TP+TN)/N for binary; for multiclass, sum_i 1[y_hat_i = y_i]/N. Units: dimensionless, [0,1].
- Cross-entropy loss: H(y, p) = - sum_c y_c log p_c. Units: nats.
- Ranked Probability Score (RPS): RPS = sum_{k=1}^{C-1} (CDF_hat(k) - CDF_y(k))^2 maybe. Mention from paper page 24.
- Confusion matrix singularity: when p >> N, design matrix rank deficient, normal equations X^T X singular.
- Temporal CV breakdown: if k-fold shuffles, future instances in training for past test -> look-ahead leakage; breakdown when test time t_test < max(t_train).
- Class imbalance singularity: when one class dominates, accuracy can be high by predicting majority class; baseline accuracy = max_c P(Y=c).
- Feature expansion overfitting: VC dimension grows with p; when p/N -> constant > 0, generalization gap grows.
Cite pages: [PAGE 6] for accuracy definition, [PAGE 32] for CV shuffle problem, [PAGE 34] for low scoring/randomness, [PAGE 24] for RPS, [PAGE 5] for algorithm grouping, [PAGE 27-28] for ANN overfitting, [PAGE 30-31] for feature expansion, [PAGE 35] for score increments.

<RETROCAUSAL_GENEALOGY>: Historical lineage. 1996 Purucker ANN [PAGE 8]. 2003 Kahn ANN [PAGE 8-9]. 2004 O'Donoghue & Williams Rugby World Cup simulation [PAGE 9-10]. 2006 Joseph et al. Bayesian Network with expert knowledge [PAGE 11]. 2010 Huang & Chang World Cup ANN [PAGE 13]. 2012 Delen et al. CART NCAA [PAGE 16]. 2017 Open International Soccer Database [PAGE 24]. 2018 Danisik LSTM [PAGE 23]. 2019 Gu et al. NHL ensembling 91.8% [PAGE 23-24]. Multi-week traps: using only current season, ignoring previous season (Kahn), training on past to predict future but shuffling CV, small World Cup samples (48 matches) yielding high accuracy due to lopsidedness not model quality, etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When models fail, researchers revert to ANNs because historically dominant (65% of studies) [PAGE 27]. This is a habit regression under uncertainty.
- Counter-trap: The trap is believing more features always help; counter-trap is feature selection/dimensionality reduction neglected (only 10% of studies) [PAGE 39-40]. Overfitting when p large relative to N.
- Clock: Temporal non-stationarity—player transfers, coaching changes, roster turnover mean a model trained on seasons t-3..t-1 decays by season t. Weissbock & Inkpen noted difficult beyond one or two seasons due to player changes [PAGE 19]. The "clock" is the season/round boundary; order-preserved folds required [PAGE 41].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: scoring increment structure (1-point soccer vs multi-point basketball) affects combinatorial state space [PAGE 35-36]. Low-scoring -> higher random chance [PAGE 34].
- Biomechanical/physiological: player availability, injuries, fatigue not included in many models [PAGE 11, 27]. This is a veto: if key player absent, feature vector from historical averages is invalid.
- Weather: external variables like weather, venue, travel are performance indicators external to matches [PAGE 38]. Omitted variable bias can veto predictions.
- Adjudication rule: A prediction is vetoed if (i) temporal leakage detected (CV shuffle), (ii) p/N exceeds overfitting threshold without regularization, (iii) key physical state variable (injury/weather) unobserved and non-stationary, (iv) class label is 3-class draw-prone without adjusting for chance baseline.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios that are verifiable, with predictions.
Scenario 1: Temporal CV leakage. Prediction: A study using random k-fold CV on NHL 2012/2013 (Weissbock et al. 2013, 517 games) will report inflated accuracy vs an order-preserved season split; the gap will be statistically significant because future games leak into past training.
Scenario 2: Feature explosion without selection. Prediction: In the 2017 Soccer Challenge (216,743 matches, 4-66 features), adding 100 noisy features to XGBoost without feature selection will decrease out-of-sample accuracy on the holdout challenge set despite increasing in-sample accuracy, due to p/N and VC dimension.
Scenario 3: Low-scoring 3-class draw problem. Prediction: For soccer matches where draw frequency > 25%, a 3-class accuracy of 52% will be statistically indistinguishable from a majority-class baseline (home win), whereas a 2-class (no draw) formulation on the same matches will show higher accuracy but discard information.

Each scenario needs: verifiable condition, veto rule, counterfactual prediction.

Now word count. Need >=1000 words total across sections. I'll write generously.

Important: Do not mention betting odds/spreads/totals/moneylines. The source mentions them, but I must not. I can refer to "market-implied labels" or "wagering-market implied probabilities" but avoid the word "odds". Actually safer to say "commercial forecasting baselines" or "market-implied class labels". But page citations can quote text that mentions odds? The instruction says "Never mention spreads, totals, moneylines, or odds." I should not use those words in my output. I can cite pages where they appear but not repeat the banned words. I'll paraphrase as "market-implied outcomes" or "wagering-market labels" without the banned word. Hmm, "odds" is banned. I'll just avoid.

Let's draft.

THINK_TRACE (>=400 words). I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need to be careful with LaTeX in XML. Use standard LaTeX.

RETROCAUSAL_GENEALOGY: ~300 words.

RECURSIVE_THEORY_OF_MIND: ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words.

RLVR_COUNTERFACTUAL_VETOES: ~300 words.

Total easily >1000.

Let's write.

Need exact [PAGE N] markers and verbatim quotes where source pages are provided. I have all 48 pages. I'll cite relevant pages.

Verbatim quotes: I should quote short phrases exactly from the text. E.g., page 32: "CV randomly shuffles instances, meaning that future games might be used to predict past games". Page 27: "ANNs are not straightforward to parameterise optimally and often over-fit". Page 34: "In lower scoring sports, there is a larger element of randomness in outcomes". Page 35: "Sports that have different possibilities for increments in score have more possible permutations in the final match scores". Page 39: "Nearly 90% of papers listed engineering additional richer features". Page 40: "only 10% of the studies cite improvements in feature selection".

Let's compose carefully.

Check banned words: spread, total, moneyline, odds. I must not write them. Also "totals" - avoid. "Moneylines" avoid. I'll use "market-implied" but not "odds". Actually I might mention "bookmaker" but not odds. The source says "bookmakers". That's fine.

Let's write the response.

Word count check: I'll aim for roughly 1300-1500 words total.

THINK_TRACE:

Start with multi-hop derivation. The paper surveys 31 papers (35 sport studies) 1996-2019. Core claim: feature engineering > dataset size > algorithm choice. But there are gray zones.

Hop 1: Definition of accuracy. Page 6: proportion of sum of total true positive and true negative divided by all samples. This is standard classification accuracy. However, page 6 also notes binary vs multi-class not directly comparable. This is a gray zone: comparing 78% soccer (2-class) with 55% soccer (3-class) is invalid without adjusting for chance. The number of classes C changes the random baseline from 0.5 to 1/C.

Hop 2: Algorithm preference. 65% considered ANNs; 23% solely ANNs early on [PAGE 27]. But evidence does not suggest ANNs consistently better [PAGE 27]. ANN overfit, especially small datasets [PAGE 27-28]. Gray zone: selection bias in reporting "best performing model" per study; if a study tries 10 models and reports best, that's multiple-comparison inflation not captured in tables.

Hop 3: Temporal validity. Page 32: k-fold CV randomly shuffles instances, future games used to predict past games. This is a fundamental validity threat. Many studies likely compromised [PAGE 32]. The remedy is order-preserved folds [PAGE 41]. Gray zone: how many of the 31 papers used proper temporal splits? Unknown from review.

Hop 4: Sport difficulty. Low scoring -> randomness [PAGE 34]. Draws increase class count -> harder [PAGE 34]. Score increments combinatorics [PAGE 35-36]. But competitive depth matters more than sport itself [PAGE 34-35]. Rugby Union 93% on 2003 World Cup [PAGE 4 table, PAGE 9-10] but that tournament was lopsided; not generalizable. Gray zone: high accuracy may reflect competition structure, not ML quality.

Hop 5: Feature vs data. Page 30-31: feature sets grew more than dataset sizes. Page 39: 90% want richer features; only 10% want better feature selection. Overfitting risk when p grows but N modest. Gray zone: no regularization path reported in many studies.

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define:
- Dataset: \mathcal{D} = \{(\mathbf{x}_i, y_i)\}_{i=1}^{N}, \mathbf{x}_i \in \mathbb{R}^p, y_i \in \mathcal{Y}, |\mathcal{Y}| = C.
- Accuracy: \mathrm{Acc} = \frac{1}{N}\sum_{i=1}^{N} \mathbb{1}[\hat{y}_i = y_i]. Dimensionless, range [0,1]. For binary, \mathrm{Acc} = (TP+TN)/(TP+TN+FP+FN).
- Chance baseline: \mathrm{Acc}_{\mathrm{maj}} = \max_{c \in \mathcal{Y}} P(Y=c). If uniform, 1/C.
- Cross-entropy: H(\mathbf{y}, \hat{\mathbf{p}}) = -\sum_{c=1}^{C} y_c \log \hat{p}_c. Units: nats (natural log) or bits (log2).
- Ranked Probability Score (for ordinal/categorical ranked outcomes): \mathrm{RPS} = \sum_{k=1}^{C-1} \left( \sum_{j=1}^{k} \hat{p}_j - \sum_{j=1}^{k} \mathbb{1}[y_i = j] \right)^2. Lower is better. Page 24 mentions competition used average RPS.
- Design matrix singularity: \mathbf{X} \in \mathbb{R}^{N \times p}. Ordinary least squares / linear decision boundaries require \mathrm{rank}(\mathbf{X}^T\mathbf{X}) = p. Breakdown when p \ge N or when features are collinear; normal equations singular. Ridge regularization adds \lambda \mathbf{I}.
- VC/generalization: For hypothesis class \mathcal{H} with VC dimension d_{\mathrm{VC}}, with probability 1-\delta, generalization error \le training error + O(\sqrt{d_{\mathrm{VC}}/N}). Breakdown when p/N is not small and d_{\mathrm{VC}} scales with p.
- Temporal CV leakage indicator: Let t_i be match time. Standard k-fold creates folds F_k. Violation if \exists i \in \text{train}, j \in \text{test} such that t_i > t_j. Order-preserved split requires \max_{i \in \text{train}} t_i < \min_{j \in \text{test}} t_j. Page 32.
- Class imbalance singularity: When \max_c P(Y=c) \to 1, accuracy can approach 1 by trivial majority classifier; informative signal vanishes relative to baseline.

Cite pages.

RETROCAUSAL_GENEALOGY:

Trace lineage: Purucker 1996 ANN NFL 90 matches 6 features [PAGE 8]. Kahn 2003 ANN NFL 208 matches 75% [PAGE 8-9]. O'Donoghue & Williams 2004 Rugby World Cup 48 matches simulation model 93% [PAGE 4 table, PAGE 9-10]. Joseph et al. 2006 Bayesian Network expert knowledge small sample [PAGE 11]. Huang & Chang 2010 World Cup ANN 2-class 76.9% no draws [PAGE 13]. Delen et al. 2012 CART NCAA 86% [PAGE 16]. 2017 Open International Soccer Database 216,743 matches 52 leagues [PAGE 24]. Danisik et al. 2018 LSTM soccer 139 features 52.5% 3-class [PAGE 23]. Gu et al. 2019 NHL ensemble 91.8% [PAGE 23-24].

Multi-week traps: (1) Single-season training then next-season test ignores off-season roster changes [PAGE 19 Weissbock & Inkpen]. (2) Using only current season statistics (Kahn) vs weighted previous season (David et al. footnote page 15) - non-stationarity across weeks. (3) World Cup small sample (48 matches) produces high accuracy due to lopsidedness not transferable to league play [PAGE 34-35].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: When faced with unpredictable outcomes, researchers regress to the historically dominant algorithm: ANN. 65% of studies used ANNs; early 23% solely ANNs [PAGE 27]. Under accuracy crisis, the habit is to retune ANN architecture rather than switch algorithm family, despite evidence ANN not consistently superior [PAGE 27].

Counter-trap: The trap is "more features = better accuracy." 90% of papers want richer features [PAGE 39]. But only 10% prioritize feature selection [PAGE 39-40]. The counter-trap is recognizing that expanding p without controlling p/N triggers overfitting; dimensionality reduction (PCA, ReliefF, CFS) is the necessary countermeasure [PAGE 20, 30].

Clock: Temporal non-stationarity is the clock. Player transfers, injuries, coaching changes mean the joint distribution P(X,Y) shifts season to season [PAGE 19, 38]. A model trained on rounds 1-13 predicting round 14 is valid only if the generative process is stationary within that window [PAGE 8 Kahn]. The review recommends order-preserved folds and season-by-season splits [PAGE 41]. The "clock" is the season boundary; violating it (shuffled CV) yields look-ahead leakage and illusory accuracy.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: Scoring increment structure determines combinatorial complexity. Soccer/ice hockey increment by 1; basketball by 1,2,3; rugby/American football by multiple values [PAGE 35-36]. More increments -> more final-score permutations -> higher entropy of outcome -> lower maximum achievable accuracy for a given feature set. Veto condition: if sport has multi-point increments and model is evaluated only on binary win/loss without modeling margin, information is discarded.

Biomechanical/physiological layer: Player availability, injury, fatigue, physical condition are omitted from most feature sets [PAGE 11 Reed & O'Donoghue motivational/injury variables not included; PAGE 27 Berrar et al. player physical condition would help]. A historical average feature for a team is vetoed if a key player is absent in the target match because the conditional distribution P(Y | X) changes discontinuously.

Weather/environmental layer: External variables (weather, venue, travel) are performance indicators external to matches [PAGE 38]. Omitted variable bias can veto prediction when weather materially affects scoring (e.g., wind in outdoor sports, precipitation in soccer/rugby) but is not in X.

Adjudication rule: A prediction is vetoed if any of: (i) temporal leakage (train contains future relative to test); (ii) p/N exceeds regularization capacity without feature selection; (iii) unobserved physical state variable (injury/weather) is known to be non-stationary and outcome-relevant; (iv) evaluation is 3-class draw-prone without reporting chance baseline or comparing to 2-class.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios. Each: verifiable condition, veto rule, counterfactual prediction.

Scenario 1 (Temporal leakage): Verifiable: Re-run Weissbock et al. 2013 NHL (517 games, ANN 59%) [PAGE 19] using random 10-fold CV vs order-preserved season split. Veto: If random CV accuracy > order-preserved by statistically significant margin, veto the random-CV result as look-ahead leakage. Prediction: Random CV will overestimate by at least 5-8 percentage points because future games leak into training.

Scenario 2 (Feature explosion): Verifiable: On the 2017 Soccer Challenge data (216,743 matches) [PAGE 24], train XGBoost on original 66 features vs 66 + 100 Gaussian noise features. Veto: If in-sample accuracy rises but holdout challenge accuracy falls, veto the feature-expansion pipeline. Prediction: Holdout accuracy drops by 1-3 points; VC dimension/generalization gap grows with p.

Scenario 3 (Draw class singularity): Verifiable: On soccer datasets with draw frequency > 25% (e.g., Odachowski & Grekow 2012 3-class 46% vs 2-class 70%) [PAGE 17], compare 3-class accuracy to majority-class baseline. Veto: If 3-class accuracy <= max(home-win rate, draw rate, away-win rate), the model has no skill beyond chance. Prediction: For 3-class soccer, reported accuracies around 51-55% will be statistically indistinguishable from the majority class, whereas 2-class (draws excluded) on same matches will show inflated but partial accuracy.

I think that's solid. Now produce final output with exact XML tags. No banned words. I will not use "odds", "spread", "total", "moneyline".

Double check: "betting odds" appears in source. I will not repeat. I'll say "market-implied" maybe but better to avoid entirely or say "commercial forecasting baselines". I'll just not mention.

Let's ensure verbatim quotes with page markers. I'll include a few.

Word count: Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETRO ~300. RECURSIVE ~300. CROSS ~300. RLVR ~300. Total ~2000. Good.

Let's write it out.
</NATIVE_REASONING>

<THINK_TRACE>
The review surveys 31 papers (35 sport studies) from 1996 to 2019 across nine team sports. The central multi-hop derivation begins with the accuracy definition on [PAGE 6]: accuracy is the proportion of true positives plus true negatives divided by all samples, a dimensionless quantity in [0,1]. The authors correctly note that binary-class and multi-class accuracies are not directly comparable because the chance baseline shifts from 0.5 to 1/C as the number of classes C increases. This is a gray zone: the tables juxtapose 2-class and 3-class results without a uniform chance correction, so a 76.9% two-class soccer figure [PAGE 13] cannot be rank-compared with a 55% three-class soccer figure [PAGE 17] without adjusting for the extra draw class.

The second hop concerns algorithm preference. Sixty-five percent of studies used ANNs, and 23% of early papers used ANNs exclusively [PAGE 27]. Yet the review concludes the evidence does not support ANN supremacy [PAGE 27]; ANNs over-fit especially when datasets are small, which the authors describe as the norm in sporting domains [PAGE 27–28]. A deeper gray zone is selection bias in the summary tables: each table reports only the “best performing model,” so if a study evaluated ten algorithms and reported the maximum, the table captures a multiple-comparison maximum rather than an unbiased estimate of algorithmic performance.

The third hop is temporal validity. [PAGE 32] states verbatim: “CV randomly shuffles instances, meaning that future games might be used to predict past games,” and notes this pitfall compromised predictive accuracy in a number of studies. The review’s remedy is order-preserved folds—season-by-season or round-by-round splits [PAGE 41]. Because most studies are silent on whether their cross-validation respected time ordering, the internal validity of many reported accuracies is suspect.

The fourth hop is sport difficulty. Low-scoring sports embed more random chance in outcomes [PAGE 34], and draws make the task a three-class problem, reducing achievable accuracy [PAGE 34]. Score-increment structure matters: sports where one play can add different point values create more final-score permutations than sports where every scoring event adds exactly one [PAGE 35–36]. However, competitive depth matters at least as much as the sport itself [PAGE 34–35]. Rugby Union’s 93% figure comes from the 2003 World Cup [PAGE 9–10; table on PAGE 4], a lopsided tournament, and the review cautions that Rugby Union is becoming less predictable as the gap between ranked nations narrows [PAGE 34]. Thus high accuracy may reflect competition structure rather than ML quality.

The fifth hop is feature engineering versus data volume. Feature-set sizes have grown faster than dataset sizes [PAGE 30–31], yet 90% of papers want richer features while only 10% prioritize feature selection [PAGE 39–40]. The over-fitting singularity arrives when p approaches or exceeds N without regularization, a regime many modest sports datasets inhabit. The review’s implicit hierarchy—features first, dataset size second, algorithm choice third—is plausible but under-constrained because few studies report the p/N ratio, regularization strength, or stability of feature selection across resamples.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the dataset be \mathcal{D}=\{(\mathbf{x}_i,y_i)\}_{i=1}^{N}, with \mathbf{x}_i\in\mathbb{R}^{p} and y_i\in\mathcal{Y}, |\mathcal{Y}|=C. The primary metric, per [PAGE 6], is classification accuracy
\[
\mathrm{Acc}=\frac{1}{N}\sum_{i=1}^{N}\mathbb{1}[\hat{y}_i=y_i],
\]
dimensionless, range [0,1]. For binary problems, \mathrm{Acc}=(TP+TN)/(TP+TN+FP+FN). Because the number of classes changes the difficulty, the majority-class baseline is
\[
\mathrm{Acc}_{\mathrm{maj}}=\max_{c\in\mathcal{Y}}P(Y=c),
\]
which equals 1/C under uniformity and rises toward 1 under strong imbalance. Cross-entropy for probabilistic outputs is
\[
H(\mathbf{y},\hat{\mathbf{p}})=-\sum_{c=1}^{C}y_c\log\hat{p}_c,
\]
measured in nats (natural logarithm) or bits (base-2). The 2017 Soccer Prediction Challenge used the average Ranked Probability Score [PAGE 24], which for ranked categories can be written as
\[
\mathrm{RPS}=\sum_{k=1}^{C-1}\Bigl(\sum_{j=1}^{k}\hat{p}_j-\sum_{j=1}^{k}\mathbb{1}[y=j]\Bigr)^2,
\]
lower is better, units of squared probability.

Linear-model and distance-based designs form \mathbf{X}\in\mathbb{R}^{N\times p}. Ordinary least-squares or linear decision boundaries require \mathrm{rank}(\mathbf{X}^{\top}\mathbf{X})=p; the breakdown (singularity) regime is p\ge N or exact collinearity among features, remedied by ridge regularization \lambda\mathbf{I}, \lambda>0. From statistical learning theory, with probability 1-\delta the generalization error is bounded by training error plus O(\sqrt{d_{\mathrm{VC}}/N}); when d_{\mathrm{VC}} scales with p and p/N is not small, the gap widens—the over-fitting regime.

Temporal cross-validation validity requires an order-preserved split: \max_{i\in\text{train}}t_i<\min_{j\in\text{test}}t_j. The violation condition, identified on [PAGE 32], is \exists i\in\text{train},j\in\text{test} such that t_i>t_j, i.e., future matches leak into the training of past matches. [PAGE 41] recommends season-by-season or round-by-round splits to prevent this.

For class-imbalance singularity, when \max_cP(Y=c)\to1, a trivial majority classifier achieves accuracy near one, so any reported accuracy must be evaluated against \mathrm{Acc}_{\mathrm{maj}}, not against zero.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage begins with Purucker (1996), who used an ANN with back-propagation and unsupervised methods on 90 NFL matches with six features [PAGE 8]. Kahn (2003) followed with an ANN on 208 NFL matches, reporting 75% [PAGE 8–9]. O’Donoghue & Williams (2004) studied the 2003 Rugby World Cup with 48 matches and reported a simulation model as best [PAGE 9–10; table on PAGE 4]. Joseph et al. (2006) introduced expert knowledge into a Bayesian Network for Tottenham matches, 76 games, 59.2% in a three-class problem [PAGE 11]. Huang & Chang (2010) used an ANN on the 2006 World Cup, achieving 76.9% in a two-class formulation that excluded draws [PAGE 13]. Delen et al. (2012) applied CART to 244 NCAA bowl matches, reporting 86% [PAGE 16]. The Open International Soccer Database (2017) aggregated over 216,000 matches from 52 leagues [PAGE 24]. Danisik et al. (2018) used LSTMs with 139 features on 1,520 EPL matches, obtaining 52.5% three-class accuracy [PAGE 23]. Gu et al. (2019) reached 91.8% on NHL data with ensemble boosting [PAGE 23–24].

Multi-week traps recur. Kahn (2003) used only the current season and noted future work could incorporate previous seasons [PAGE 9], yet David et al. (2011) blended current and prior-season statistics with a weekly weighting schedule [PAGE 15], acknowledging non-stationarity across the season. Weissbock & Inkpen (2014) found it difficult to predict beyond one or two seasons because of player changes [PAGE 19], establishing a temporal decay window. The small-sample World Cup studies (48 or 280 matches) produce high accuracies under lopsided competition conditions that do not transfer to deep league play [PAGE 34–35]. Thus the genealogical trap is treating a single-tournament or single-season model as if its accuracy were portable across time and competition depth.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When predictive accuracy stalls, the field regresses to its historically dominant algorithm. Sixty-five percent of studies used ANNs, and early papers often used ANNs alone [PAGE 27]. Under a crisis of low accuracy, the habitual response is to retune ANN architecture or add committees of ANNs [PAGE 15] rather than to switch algorithm families, even though the review finds no evidence that ANNs consistently outperform other methods [PAGE 27].

Counter-trap: The dominant trap is “more features always helps.” Nearly 90% of papers list engineering richer features as a primary future direction [PAGE 39], yet only 10% cite feature selection as a priority [PAGE 39–40]. The counter-trap is recognizing that expanding p without controlling p/N and without regularization drives the hypothesis-class VC dimension upward and triggers over-fitting, especially given the modest dataset sizes documented in Figure 7 [PAGE 31]. The necessary countermeasure is disciplined feature selection (correlation-based subset selection, ReliefF, CFS, RIPPER importance) and dimensionality reduction [PAGE 30, 39–40].

Clock: The operative clock is the season/round boundary and the associated non-stationarity of P(\mathbf{X},Y). Player transfers, injuries, coaching changes, and form shifts mean the joint distribution changes across seasons [PAGE 19, 38]. A model trained on rounds 1–13 to predict round 14 is valid only if the generative process is stationary inside that window [PAGE 8]. Because k-fold CV shuffles instances and can place future games in the training set for past test games [PAGE 32], it violates the clock. The review’s corrective is order-preserved folds—season-by-season or round-by-round splits [PAGE 41]. Violating the clock yields look-ahead leakage and illusory accuracy that collapses in prospective deployment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Scoring-increment structure determines combinatorial complexity. Soccer and ice hockey increment by one per scoring event; basketball permits one, two, or three points per action; rugby and American football allow multiple increments [PAGE 35–36]. More possible increments yield more final-score permutations and higher outcome entropy, lowering the maximum achievable accuracy for any fixed feature set. Veto condition: evaluating a multi-point sport only with a binary win/loss label discards margin information and overstates comparability with single-increment sports.

Biomechanical/physiological layer: Player availability, injury, fatigue, and physical condition are largely omitted from reviewed feature sets [PAGE 11; PLAYER physical condition noted as missing on PAGE 27]. A team-level historical average is vetoed if a material player is absent in the target match, because P(Y|\mathbf{X}) shifts discontinuously when the conditioning state changes.

Weather/environmental layer: External variables such as weather, venue, travel, and player availability are performance indicators external to matches [PAGE 38]. Omitted-variable bias vetoes predictions when environmental conditions materially affect scoring but are absent from \mathbf{X}.

Adjudication rule: A prediction is vetoed if any of the following holds: (i) temporal leakage—train contains matches later than test [PAGE 32]; (ii) p/N exceeds regularization capacity with no feature selection or dimensionality reduction; (iii) an outcome-relevant, non-stationary physical or environmental variable (injury, weather) is unobserved; (iv) a three-class, draw-prone soccer problem is reported without a majority-class baseline or without a two-class comparison on the same matches [PAGE 17].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Temporal leakage veto. Verifiable condition: Re-run Weissbock et al. (2013) on 517 NHL games [PAGE 19] comparing random 10-fold cross-validation against an order-preserved season split. Veto rule: if random-CV accuracy exceeds the order-preserved split by a statistically significant margin, veto the random-CV result as look-ahead leakage. Counterfactual prediction: random CV will overestimate accuracy by roughly 5–8 percentage points because future games leak into training.

Scenario 2 — Feature explosion without selection. Verifiable condition: On the 2017 Soccer Challenge data (216,743 matches, 52 leagues) [PAGE 24], train XGBoost on the original feature set versus the same set augmented with 100 pure Gaussian noise features. Veto rule: if in-sample accuracy rises while holdout challenge accuracy falls, veto the feature-expansion pipeline. Counterfactual prediction: holdout accuracy drops by approximately 1–3 points; the generalization gap grows with p via the VC bound O(\sqrt{d_{\mathrm{VC}}/N}).

Scenario 3 — Draw-class baseline singularity. Verifiable condition: On soccer datasets with draw frequency above 25% (e.g., Odachowski & Grekow 2012 reporting 46% three-class versus 70% two-class) [PAGE 17], compare three-class accuracy to the majority-class baseline \mathrm{Acc}_{\mathrm{maj}}. Veto rule: if three-class accuracy is not statistically above \mathrm{Acc}_{\mathrm{maj}}, the model has no demonstrated skill beyond chance. Counterfactual prediction: reported three-class soccer accuracies around 51–55% will be indistinguishable from the majority class, whereas excluding draws to form a two-class problem on the same matches will yield higher but partial accuracy that discards the draw outcome.
</RLVR_COUNTERFACTUAL_VETOES>
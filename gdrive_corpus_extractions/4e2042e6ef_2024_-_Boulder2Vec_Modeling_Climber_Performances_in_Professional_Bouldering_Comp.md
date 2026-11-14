---
source: "2024 - Boulder2Vec Modeling Climber Performances in Professional Bouldering Competitions - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2024"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4023
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Boulder2Vec modeling climber performances. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1000 words total across these sections. Let me carefully analyze the source text page by page.

Source pages appear to be numbered 1-11 (though user said PAGES: 8, the text shows page markers 1-11 in the document). I should cite exact page markers like [PAGE 3], etc.

Let me extract key facts:
- Paper: Boulder2Vec by Ethan Baron, Victor Hau, Zeke Weng, University of Toronto Sports Analytics Student Group, September 2024
- Dataset: Breuer (2022), IFSC men's bouldering events 2007-2022, almost 380,000 attempts across 2517 unique problems in 101 competitions
- They treat "top" and "zone" as distinct problems, doubling data
- Logistic regression baseline: P(success) = σ(β0 + βi + βr + βt) where βi is climber skill
- Replacement level N ∈ {25, 50, 100, 250, 500, 1000}; climbers with < N problems grouped as replacement-level
- PMF: Y ∈ R^{m×n}, U ∈ R^{m×d}, V ∈ R^{d×n}, UV ≈ Y, sigmoid(dot product)
- Log loss / BCE minimized with Adam for 1000 epochs
- d ∈ {1, 2, 3, 4, 5}; d=1 similar to logistic regression but with problem-specific coefficients
- Problems attempted by fewer than 10 climbers grouped together
- Metrics: accuracy, F1, Brier score, log loss, ROC AUC
- Results: PMF generally outperforms logistic regression; test performance worsens for d > 2 (overfitting); effect diminishes for higher N; best d=2 for low replacement levels
- N=100, d=2 chosen for analysis: 216 climbers
- PCA on embeddings: PC1 strongly correlated with LR coefficient (|ρ|=0.95) and success rate (|ρ|=0.94), moderately with # climbs (|ρ|=0.56), negligible with height
- PC2 moderately correlated with height; hypothesized to capture preferred style/physical traits
- Problem embeddings distinguish zone vs top and difficulty
- Future directions: survival analysis, problem attributes (Augste et al. 2021: Dynamo, Volume, Crimp, Slab, Mantle), computer vision, anthropometrics (weight, BMI, hand size), time-varying effects/aging, women's competitions, lead/speed

Now I need to structure the response. The user didn't ask a specific question beyond providing the source. Since I'm the GSE + GSI Frontier Reasoning Foundry, I should provide a comprehensive technical analysis following the required XML sections. I should not invent a betting context. I should treat this as a research audit.

Let me draft each section with substantial depth.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. I need to discuss the logical chain from data to model to interpretation, identify gray zones (e.g., treating top/zone as independent doubles data but acknowledges correlation; replacement level creates arbitrary threshold; sparse matrix and PMF assumptions; PCA interpretation post-hoc; height correlation doesn't imply causation; binary success ignores attempt count; men's only dataset; no temporal dynamics). Multi-hop: data sparsity -> PMF -> embeddings -> PCA -> physical traits -> style hypothesis. Also discuss singularity/breakdown regimes: when N too high, too few climbers; when d too high, overfitting; when problem attempts <10, grouping loses problem identity; binary outcome loses information.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define logistic regression: P(Y_ij=1) = σ(β_0 + β_i + β_r + β_t). PMF: minimize BCE loss L = -1/|D| Σ [(Y_ij log ŷ_ij + (1-Y_ij) log(1-ŷ_ij))], ŷ_ij = σ(u_i · v_j). U ∈ R^{m×d}, V ∈ R^{d×n}. Adam optimizer, 1000 epochs. Metrics: accuracy = (TP+TN)/(TP+TN+FP+FN), F1 = 2TP/(2TP+FP+FN), Brier = 1/|D| Σ (ŷ_ij - Y_ij)^2, log loss = BCE, ROC AUC. Units: dimensionless probabilities, logits in nats (log loss), epochs dimensionless, d dimensionless latent factors, N dimensionless count threshold. Citations: [PAGE 3] for logistic regression, [PAGE 4] for PMF setup, [PAGE 5] for loss/training, [PAGE 5-6] for metrics, [PAGE 6] for results, [PAGE 7] for PCA correlations. Breakdown regimes: d > 2 overfitting, N=1000 stability, sparse Y.

RETROCAUSAL_GENEALOGY: Historical lineage. Mnih & Salakhutdinov 2007 PMF (NeurIPS). Ingram 2021 Elo extension for tennis surfaces. Baron et al. 2023 Bike2Vec cycling. Augste et al. 2021 boulder types (Dynamo, Volume, Crimp, Slab, Mantle). Breuer 2022 dataset. Rosenthal 2022 amateur Bayesian logistic. Multi-week traps: if applying to future competitions, aging/time-varying effects ignored (future direction #3), so embeddings are static career aggregates; a climber peaking then declining will be misestimated; replacement level N creates survivorship bias toward experienced climbers; problem novelty (unique layouts unknown prior) means transfer to new competitions is out-of-distribution. Also mention the "multi-week trap" in the sense that competition format changes over weeks/seasons aren't modeled.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This section is a bit abstract but I need to interpret it as modeling the climber's decision-making under pressure, the model's assumptions about climber behavior, and potential counter-traps (e.g., climbers adapting to problem types, the model being gamed). "Crisis habit regression" could refer to climbers reverting to habitual styles under stress; "counter-trap" could be problem setters designing problems to exploit known climber weaknesses; "clock" refers to time limits in competition (set number of minutes). I should discuss how the binary success/failure outcome ignores the temporal dynamics within the clock (attempts, time remaining), which is a future direction (survival analysis). The model assumes stationary skill, ignoring in-competition fatigue/crisis regression.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is indoor bouldering (IFSC competitions), weather is largely irrelevant (controlled environment), but physical/biomechanical factors matter: height (PC2 correlation), anthropometrics (weight, BMI, hand size - future direction), style (dynamic vs static). Veto proof: The model does not include biomechanical variables, so any prediction for a climber with extreme anthropometrics (e.g., very tall for dynamic moves, very short for crimp) is vetoed by missing physical layer. The embedding PC2 picks up height signal indirectly (|ρ| moderate), but without explicit weight/BMI/hand size, the model cannot distinguish between two climbers of same height but different reach/strength. Problem geometry is also missing (future direction: computer vision). So veto: out-of-sample climbers with unrepresented body types; new problem styles not in training distribution.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? I need to create 3 counterfactual scenarios that are verifiable (can be tested with data). Predictions for each.
1. Scenario: New competition with entirely novel problem setters; PMF trained on 2007-2022 fails to generalize because problem embeddings are transductive (only seen problems). Prediction: Test ROC AUC drops significantly vs in-distribution 5-fold CV because V matrix cannot represent unseen problems (cold-start problem).
2. Scenario: Applying men's model to women's competition without retraining. Prediction: Calibration error (Brier score increases) due to different anthropometric/strength distributions; PC1 strength signal may transfer but PC2 style-height relationship shifts.
3. Scenario: Replacement level N increased from 100 to 500 mid-season. Prediction: Fewer climbers embedded individually (from 216 down to fewer), more grouped as replacement-level; overfitting reduced but predictive resolution for emerging climbers lost; test log loss may slightly improve or stay flat while F1 for top climbers drops.

Need to ensure total words >= 1000 across all sections. I'll aim for roughly 200-250 words per section to be safe, totaling >1000. Actually THINK_TRACE needs >=400 words alone. So let's make THINK_TRACE around 500-600, and others around 150-250 each. Total should exceed 1000 easily.

No betting lines. No toy equations. Use real equations from the paper.

Let me write carefully with page citations. The text has page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11. I'll cite [PAGE N] accordingly.

Important: The user said "PAGES: 8" but the document actually has 11 pages in the text. I'll cite based on the visible page numbers in the source text.

Let's draft.

Structure:
<THINK_TRACE>
...
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

I must ensure formal LaTeX is correct.

Logistic regression equation from page 3: P(success) = σ(β0 + βi + βr + βt). Actually text says: "the probability that climber i successfully completes problem j of type t in round r is: σ(...) where σ(x) = 1/(1+e^{-x}) ... We include a round coefficient βr, problem type coefficient βt, and a global intercept β0... climber-specific effect βi". So I'll write:
P(Y_{ij}=1 \mid i,j,t,r) = \sigma(\beta_0 + \beta_i + \beta_r + \beta_t)
with \sigma(x) = (1+e^{-x})^{-1}.

PMF: Y \in \mathbb{R}^{m \times n}, U \in \mathbb{R}^{m \times d}, V \in \mathbb{R}^{d \times n}, \hat{Y} = \sigma(UV). Loss: \mathcal{L} = -\frac{1}{|D|} \sum_{(i,j)\in D} [Y_{ij}\log \hat{y}_{ij} + (1-Y_{ij})\log(1-\hat{y}_{ij})]. This is BCE. Adam, 1000 epochs. d \in \{1,2,3,4,5\}. N \in \{25,50,100,250,500,1000\}. Problem threshold: <10 attempts grouped.

Metrics:
Accuracy = (TP+TN)/(TP+TN+FP+FN)
F1 = 2TP/(2TP+FP+FN)
Brier = \frac{1}{|D|}\sum (\hat{y}_{ij} - Y_{ij})^2
ROC AUC = area under TPR vs FPR curve.

Correlations: |ρ| = 0.95 (PC1 vs LR coef), |ρ| = 0.94 (PC1 vs success rate), |ρ| = 0.56 (PC1 vs # climbs). Height negligible with PC1, moderate with PC2.

Breakdown/singularity:
- d=1 degenerates to climber + problem coefficients (like logistic regression but problem-specific).
- d>2 test performance worsens due to overfitting (memorization).
- N too large: too few climbers, high variance, replacement-level group dominates.
- Problems with <10 attempts collapsed: loss of problem-specific identity.
- Binary Y discards attempt count and time-to-success (censoring), limiting information content.

Now write the sections with sufficient depth.

Word count check: I'll write generously.

Let's begin.

THINK_TRACE: Start with the multi-hop derivation: raw attempts -> binary matrix -> factorization -> embeddings -> PCA -> physical interpretation. Mention gray zones: top/zone independence assumption despite acknowledged correlation; replacement level as arbitrary survivorship filter; static embeddings ignoring aging; binary outcome ignoring attempts/time; men-only data; problem novelty (unique layouts) means OOD generalization untested. Breakdown regimes: d > 2 overfit; N extremes; cold start problems. I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math, units, page citations. ~250 words.

RETROCAUSAL_GENEALOGY: Lineage from Mnih 2007, Ingram 2021, Baron 2023, Augste 2021, Breuer 2022, Rosenthal 2022. Multi-week traps: static embeddings across seasons, aging, new problem setters, format changes. ~200 words.

RECURSIVE_THEORY_OF_MIND: Climber crisis habit regression (under time pressure revert to style), counter-trap (setters exploit embedding weaknesses), clock (time limit, attempts). Model ignores within-competition dynamics. ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer missing (weight, BMI, hand size), biomechanical (reach, ape index), weather controlled indoor but temperature/humidity could matter. Veto conditions. ~200 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions. ~250 words.

Total: 500+250+200+200+200+250 = 1600 words. Good.

Ensure no mention of betting. Ensure no fake equations. All equations are from the paper.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain proceeds from observed IFSC competition attempts to a binary outcome matrix Y, then to a low-rank factorization U V ≈ Y, and finally to a post-hoc PCA of the climber embedding space. The first multi-hop is data construction: Breuer (2022) supplies nearly 380,000 attempts across 2,517 unique problems in 101 men's IFSC bouldering events from 2007–2022 [PAGE 3]. The authors deliberately treat "top" and "zone" holds on the same problem as two distinct problems, effectively doubling observations while explicitly acknowledging that performance on top and zone is correlated within a problem [PAGE 3]. This creates a gray zone: the independence assumption embedded in the binary matrix factorization is violated by construction, yet the model proceeds as if each attempt is an independent Bernoulli draw. A second hop is the replacement-level hyperparameter N ∈ {25, 50, 100, 250, 500, 1000} [PAGE 3]. Climbers below N attempts are collapsed into a single replacement-level climber. This is a survivorship filter: it privileges career volume over recency and discards emerging specialists, introducing selection bias that varies with N.

The third hop is PMF itself. The observed matrix Y ∈ R^{m×n} is sparse because each competition features only a subset of the climber population [PAGE 4]. PMF is chosen over NNMF precisely because sparsity and signed residuals require a probabilistic treatment rather than non-negativity constraints [PAGE 4]. The latent dimension d ∈ {1, 2, 3, 4, 5} controls expressivity. At d = 1 the model is nearly isomorphic to the logistic regression baseline except for problem-specific coefficients [PAGE 4]; at d = 2 the test performance peaks for low N, and at d > 2 test performance generally declines [PAGE 6]. This is the overfitting breakdown regime: the model memorizes climber-specific patterns in training that fail to generalize, an effect mitigated only as N grows and per-climber observation counts rise [PAGE 6].

The fourth hop is interpretability via PCA on the d = 2, N = 100 solution (216 climbers) [PAGE 7]. PC1 is a near-exact proxy for overall strength: |ρ| = 0.95 with the logistic regression coefficient and |ρ| = 0.94 with observed success rate [PAGE 7]. PC1 also correlates moderately with attempt volume (|ρ| = 0.56), a professional-experience proxy, but negligibly with height [PAGE 7]. PC2, by contrast, shows a moderate correlation with height, leading the authors to hypothesize that PC2 encodes stylistic preference (dynamic vs. static, slab vs. powerful) and physical morphology [PAGE 7]. This is interpretively fragile: PCA is a post-hoc rotation of an already latent space, and correlation with height does not establish that PC2 isolates biomechanical style rather than confounding with competition era, problem-setter idiosyncrasies, or unmeasured anthropometrics such as weight, BMI, or hand size [PAGE 10].

Gray-zone audit concludes with several breakdown regimes. (1) Cold-start problems: any problem attempted by fewer than 10 climbers is merged into one generic problem, erasing problem identity [PAGE 4]; novel competition problems therefore lie outside the support of V. (2) Temporal stationarity: embeddings are static career aggregates, so aging, injury, and skill evolution are ignored despite the authors listing time-varying effects as a future direction [PAGE 10]. (3) Binary censorship: Y records only success/failure, discarding attempt count, time-to-top, and fatigue within the competition clock [PAGE 10]. (4) Population scope: men's IFSC data only; extrapolation to women's or to lead/speed formats is unverified [PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The baseline logistic regression, specified on page 3 [PAGE 3], models the probability that climber i succeeds on problem j of type t in round r as:

P(Y_{ij}=1 \mid i,j,t,r) = \sigma(\beta_0 + \beta_i + \beta_r + \beta_t), \quad \sigma(x) = \frac{1}{1+e^{-x}}.

Here \beta_0 is a global intercept, \beta_r is a round coefficient (qualifier/semi-final/final), \beta_t is a problem-type coefficient (top/zone), and \beta_i is the climber-specific overall skill coefficient. All predictors are dimensionless logits; the output \hat{y}_{ij} \in [0,1] is a predicted probability. Climbers with fewer than N attempted problems in training are pooled into a single replacement-level climber [PAGE 3].

The PMF formulation, specified on page 4 [PAGE 4], defines Y \in \mathbb{R}^{m \times n} with binary entries Y_{ij} \in \{0,1\}, where m is the number of climbers and n the number of problems. The model learns U \in \mathbb{R}^{m \times d} (climber embeddings) and V \in \mathbb{R}^{d \times n} (problem embeddings) such that UV \approx Y. The predicted probability is:

\hat{y}_{ij} = \sigma(\mathbf{u}_i^\top \mathbf{v}_j),

where \mathbf{u}_i \in \mathbb{R}^d and \mathbf{v}_j \in \mathbb{R}^d. Training maximizes log-likelihood, equivalently minimizes binary cross-entropy / log loss:

\mathcal{L} = -\frac{1}{|D|} \sum_{(i,j) \in D} \left[ Y_{ij} \log \hat{y}_{ij} + (1 - Y_{ij}) \log(1 - \hat{y}_{ij}) \right],

optimized via Adam for 1,000 epochs [PAGE 4–5]. Latent dimension d \in \{1,2,3,4,5\} is dimensionless; replacement level N \in \{25,50,100,250,500,1000\} is a count threshold; problems with fewer than 10 attempts are pooled [PAGE 4]. Evaluation metrics [PAGE 5]: accuracy = (TP + TN)/(TP + TN + FP + FN); F1 = 2TP/(2TP + FP + FN); Brier score = \frac{1}{|D|}\sum_{D} (\hat{y}_{ij} - Y_{ij})^2 (units: squared probability, lower is better); log loss equals the BCE above (units: nats, lower is better); ROC AUC is the area under the TPR–FPR curve (dimensionless, higher is better). PCA on page 7 [PAGE 7] yields Pearson correlations: PC1 vs. logistic coefficient |ρ| = 0.95; PC1 vs. success rate |ρ| = 0.94; PC1 vs. attempt count |ρ| = 0.56; PC1 vs. height negligible; PC2 vs. height moderate. Breakdown/singularity: at d = 1 the model degenerates toward climber-plus-problem fixed effects; for d > 2 test performance worsens due to memorization overfitting [PAGE 6]; at high N the replacement pool shrinks and variance rises; for N = 1000 and above performance stabilizes, suggesting higher d may become viable [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Mnih and Salakhutdinov (2007), whose Probabilistic Matrix Factorization is imported directly from recommender systems into sport-climbing performance [PAGE 4; PAGE 11]. The authors contrast this with Rosenthal (2022), a Bayesian logistic regression on amateur outdoor bouldering that yields a single skill rating per climber [PAGE 2]. They extend the discrete-slope logic of Ingram (2021), who generalized Elo to correlated latent skills for tennis on clay, grass, and hard courts [PAGE 2]. The closest structural analog is Baron et al. (2023), Bike2Vec, which learns multidimensional embeddings for professional road cyclists and races [PAGE 2]. Problem typology draws on Augste et al. (2021), who classify boulder problems into Dynamo, Volume, Crimp, Slab, and Mantle and find significant elite/non-elite performance gaps by type [PAGE 2]. The raw data provenance is Breuer (2022), covering IFSC men's bouldering 2007–2022 [PAGE 3].

A multi-week trap emerges from treating these embeddings as static. Because the model aggregates a climber's entire 2007–2022 career into one vector, it cannot resolve intra-seasonal or multi-week drift: a climber returning from injury, peaking for a specific World Cup stop, or declining with age is represented by a time-averaged centroid [PAGE 10]. The authors themselves flag aging as a needed extension [PAGE 10], which means the current embeddings carry a hidden temporal stationarity assumption. Another multi-week trap is problem-setter novelty: each competition's problems are uniquely designed and unknown to climbers beforehand [PAGE 1], so the problem embedding matrix V is transductive and cannot embed a problem never seen in training. If the model is deployed week-to-week across a new season, out-of-distribution problem sets will force reliance on the replacement-level climber or on PC1-style general strength only, discarding the stylistic resolution that d = 2 supposedly captures [PAGE 6–7]. Finally, the men-only scope [PAGE 3] creates a gender-distribution trap: embeddings calibrated on male anthropometrics and problem-setting conventions may not transfer to women's competitions, which the authors list as future work [PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper's model of the climber is behaviorally static: a climber is reduced to a vector u_i that interacts with a problem vector v_j through a dot product passed through a sigmoid. This implies a theory of mind in which the climber's probability of success depends only on latent trait matching, not on in-competition crisis habit regression. Under the competition clock—climbers have a set number of minutes per problem and may retry after falling [PAGE 1]—a climber under time pressure may regress to a habitual style (e.g., abandoning a technical slab sequence for a dynamic lunge) or may experience fatigue-driven performance decay across attempts. The binary outcome Y_{ij} erases this within-problem temporal dynamics: success on attempt 1 versus attempt 8 is identical, and time expired without a top is indistinguishable from an early fall [PAGE 10; PACE 10 future directions]. The authors acknowledge this limitation and propose survival analysis to differentiate first-attempt toppers from multi-attempt toppers [PAGE 10].

A counter-trap operates on the problem-setter side. Because PMF problem embeddings encode difficulty and style from historical outcomes [PAGE 8], setters who understand the embedding geometry could design problems that exploit systematic weaknesses in specific climber vectors—e.g., slab-heavy problems targeting climbers whose PC2 indicates dynamic specialization. The model, trained on past embeddings, would then be recursively exploited: its own representations become an attack surface for future problem design, degrading predictive validity precisely when the model is most trusted. The clock interacts with this because time limits amplify style mismatch; a tall powerful climber may dominate a dyno-heavy problem within the clock but lose on a technical slab if time expires before the subtle sequence is solved. Since the model does not condition on remaining time, attempt number, or fatigue, its recursive theory of mind assumes a climber who is timeless, non-fatiguable, and stylistically invariant across the competition round—a strong idealization unsupported by the binary data structure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The dataset includes climber height where available [PAGE 3], and PCA shows PC2 has a moderate correlation with height [PAGE 7], but the model does not explicitly condition on weight, BMI, ape index, or hand size—variables the authors identify as future data needs [PAGE 10]. Veto: any prediction for a climber whose anthropometrics lie outside the height distribution captured in training (e.g., extreme reach-to-height ratio) is physically under-specified; the embedding may misattribute biomechanical advantage to latent style rather than explicit anatomy. Biomechanical layer: Augste et al. (2021) show statistically significant elite/non-elite differences across Dynamo, Volume, Crimp, Slab, and Mantle problem types [PAGE 2], yet Boulder2Vec does not inject these categorical labels; it discovers problem structure purely from outcomes. Veto: a problem requiring a rare technique absent from the training distribution will be embedded near generic difficulty rather than near its true biomechanical manifold, causing miscalibration for specialists. Weather layer: IFSC bouldering finals are held indoors under controlled conditions [PAGE 1], so ambient weather is largely a non-factor for the modeled population; however, hold temperature, humidity, and gym air density can alter friction and dynamic performance, and these are absent. Veto: predictions for qualification rounds held in varying venues or for any future outdoor-format adaptation are vetoed absent environmental covariates. Cross-layer adjudication: the only physical signal the model recovers is the indirect height correlation on PC2 [PAGE 7]; without explicit anthropometric and problem-geometry inputs, the model cannot distinguish a tall powerful climber from a short technical climber who happens to have similar aggregate success. Any deployment must veto out-of-sample climbers with unrepresented body types and out-of-distribution problem sets lacking training analogs.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (cold-start problem set). Counterfactual: A new IFSC World Cup season uses entirely novel problems set by a different route-setting team, with zero overlap in problem IDs from the 2007–2022 training matrix. Verifiable test: hold out all problems from one competition year and train on the rest; measure test ROC AUC and Brier score. Prediction: Because V contains no column for unseen problems, the model must either assign them to the pooled low-attempt problem bucket or rely only on climber main effects. Test ROC AUC will drop relative to the reported 5-fold cross-validation (which randomly splits attempts, not problems) [PAGE 6], and Brier score will increase, particularly for mid-tier climbers whose success depends on stylistic fit captured by d = 2 [PAGE 6–7].

Scenario 2 (population transfer to women's competition). Counterfactual: Apply the trained male climber embedding matrix U to women's IFSC bouldering outcomes without retraining. Verifiable test: collect women's competition results from Breuer-style scraping or IFSC data, predict using the male U vectors (or train a female V but project onto male U), and compare calibration. Prediction: PC1 (overall strength) may partially transfer because strength is a general athletic factor [PAGE 7], but PC2's height-style relationship will miscalibrate because women's average anthropometrics and problem-setting style differ. Brier score will increase relative to a sex-specific model, and the correlation between predicted probability and observed success will decay for climbers whose style is strongly PC2-dependent [PAGE 7].

Scenario 3 (replacement-level shock). Counterfactual: Mid-season, the governing body raises the replacement threshold from N = 100 to N = 500, collapsing more climbers into the replacement-level bucket. Verifiable test: retrain PMF on the same 2007–2022 data with N = 500 and compare test log loss and F1 at the climber level against the N = 100 baseline. Prediction: Overfitting will decrease (test log loss for d = 2 may improve slightly because fewer noisy climber vectors are estimated) [PAGE 6], but predictive resolution for emerging specialists will vanish: F1 for top-20 climbers will remain stable while F1 for climbers with 100–500 attempts will drop because they are now pooled with replacement-level climbers and lose their individualized embedding [PAGE 3; PAGE 6]. This is verifiable by stratifying F1 by climber attempt count.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2018 Predictive Analytics for University of Virginia Football Recruiting.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4659
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about predictive analytics for University of Virginia football recruiting. They've provided the full text of the paper and specified pages 1-12 (though the provided text seems to cover the whole paper).

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 12" but the source text provided seems to be the full paper. I need to cite page markers. Looking at the text, I can see page numbers in the footer/header areas:
- Page 243 (IEEE page number)
- Page 244
- Page 245
- Page 246
- Page 247
- Page 248

But the user said PAGES: 12. This might mean the document is 12 pages long (IEEE pages 243-248 is only 6 pages shown, but the original might be 12 pages). However, I only have the text provided. I should cite [PAGE N] markers where N corresponds to the page numbers visible in the text, or perhaps the user means the provided text represents 12 pages. Let me look at the visible page numbers: 243, 244, 245, 246, 247, 248. That's 6 pages. Maybe the full paper is 12 pages but only part is shown? Or maybe "PAGES: 12" means I should reference 12 pages? 

Actually, looking carefully, the text has page numbers embedded:
- "Authorized licensed use limited to: Georgia Institute of Technology. Downloaded on June 12,2020 at 13:54:59 UTC from IEEE Xplore. Restrictions apply. 978-1-5386-6343-1/18/$31.00 ©2018 IEEE 243" - this is page 243
- Then "244" appears
- Then "245"
- Then "246"
- Then "247"
- Then "248"

So the provided text covers IEEE pages 243-248. The user says PAGES: 12, which might be an error or referring to the original document length. I'll cite using the visible page numbers [PAGE 243], [PAGE 244], etc., or if they want sequential pages 1-12, I might need to map them. But since the text explicitly shows IEEE page numbers, I should use those as the exact page markers. Actually, the instruction says "cite exact [PAGE N] markers" - so I'll use the numbers visible in the text.

Wait, looking again at the text structure:
- First page ends with "243"
- Second page ends with "244"
- Third page ends with "245"
- Fourth page ends with "246"
- Fifth page ends with "247"
- Sixth page ends with "248"

I'll cite these as [PAGE 243], [PAGE 244], etc. Or perhaps the user wants me to treat the provided text as pages 1-12? But there are only 6 visible page numbers. I think it's safest to cite the actual page numbers visible in the document headers/footers.

Now let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Need to derive the analytics pipeline from the paper
- Multi-hop: recruiting -> data -> models -> predictions -> decisions
- Gray zones: self-reported MaxPreps data, missing normality, small sample sizes (200-300 usable per model), emotional decision-making, unethical recruiting practices not accounted for, threshold tradeoffs
- Discuss precision vs recall, false positives cost, threshold adjustment
- 10% base rate of accolades
- Skill vs non-skill positions
- WarRoom integration
- Walter et al. [1] foundation

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- GLM: logistic regression form P(Y=1|X) = 1/(1+exp(-(β0 + βX)))
- LOOCV and RHOS (10% random holdout)
- Precision = TP/(TP+FP)
- Accuracy = (TP+TN)/(TP+TN+FP+FN)
- Base rate P(accolade) ≈ 0.10
- If model predicts 30%, then 3x likelihood ratio: P(Y=1|model positive)/P(Y=1) = 0.30/0.10 = 3
- Stepwise regression
- Random forest ensemble
- Tree-based modeling with predictor informativeness metric
- Units: probability [dimensionless, 0-1], sample sizes [count], GPA [4.0 scale], SAT [composite score], height/weight [cm/kg or inches/lbs - paper doesn't specify units exactly but mentions height, weight, 40 time], 40 time [seconds]
- Breakdown regimes: small n (200-300), non-normality (QQ plots), missing data, self-reporting bias
- Page citations for each

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Moneyball (2002 Oakland Athletics) [PAGE 243]
- Kristina Bigsby commitment likelihood model 70% accuracy [PAGE 244]
- Walter et al. 2017 [1] academic/likelihood/grit models [PAGE 244]
- Stanford football success without top recruits [PAGE 244]
- UVA WarRoom software [8] [PAGE 243]
- Multi-week traps: three weeks per year traveling by head coach [PAGE 244], high costs of recruiting, sunk cost fallacy in pursuing commits, emotional decision-making [PAGE 247]

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: coaches reverting to star ratings and film when models fail or under pressure
- Counter-trap: other programs using same public star ratings (no unique insight) [PAGE 243]
- Clock: decision window for recruiting, three weeks travel, offer deadlines, commitment timing
- How coaches might regress to habit under crisis (losing season, pressure to win)
- Counter-trap: model identifies diamonds in rough that star system misses, but if all schools use analytics, edge decays

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: height, weight, 40 time (mentioned as attributes in WarRoom) [PAGE 243]
- Biomechanical: play-by-play stats missing for non-skill positions (linemen, DBs) [PAGE 246], no PFF high school data [PAGE 247]
- Weather: not explicitly in paper, but census data (population density, single-parent households, transit time) could proxy environmental factors [PAGE 244-245]
- Veto proof: models should not override human judgment; they generate lists to consider [PAGE 246]; emotional decision-making [PAGE 247]; unethical practices not modeled [PAGE 247]

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 counterfactual veto scenarios.
- Scenario 1: High school MaxPreps self-reported stats are inflated for a 3-star QB; model flags him as diamond, but film shows poor mechanics. Veto: model false positive due to self-reporting bias. Prediction: precision drops below 80% when self-reported stats exceed verified camp stats by >X%.
- Scenario 2: Non-skill position (offensive lineman) has height/weight meeting model thresholds but no play-by-play data; model cannot outperform star ratings. Veto: absence of granular performance data means model defaults to star rating or physical traits only. Prediction: non-skill model accuracy remains at or below null model (star rating) baseline.
- Scenario 3: Recruit with 30% model probability of accolade but low Walter et al. likelihood of committing to UVA; staff pursues anyway due to relationship with coach. Veto: emotional/familial factors override model. Prediction: commitment likelihood <20% despite high performance score; resource allocation yields negative ROI.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me start drafting carefully.

For citations, I'll use the visible page numbers: [PAGE 243], [PAGE 244], [PAGE 245], [PAGE 246], [PAGE 247], [PAGE 248]. Even though the user said PAGES: 12, these are the exact markers in the text. Alternatively, I could say [PAGE 1] through [PAGE 12] but the text doesn't have those markers. I'll stick to the visible IEEE page numbers and note they correspond to the source PDF pages.

Wait, re-reading: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text provided has page numbers 243-248. I will use those.

Let me draft each section.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation. Let's trace:
1. UVA recruiting problem: need to identify 2/3 star recruits who will get accolades (base rate ~10% [PAGE 245/247])
2. Data sources: CBTN college stats (response), 247Sports/MaxPreps/Twitter/census (predictors), WarRoom (demographics) [PAGE 245]
3. Pairing via Rivanna HPC [PAGE 245]
4. Problem: missing data, self-reported MaxPreps, small usable n (200-300 per model) [PAGE 245]
5. Models: GLM with stepwise regression, LOOCV, 10% RHOS [PAGE 245]
6. Assumption violation: non-normality (QQ plots show exceptional players as separate segment) [PAGE 245]
7. Tree-based: CART, random forest, predictor informativeness [PAGE 245]
8. Metric: precision primary because false positives costly (wasted recruiting dollars, one underperforming player propagates mistakes) [PAGE 244, 246]
9. Decision threshold tunable: high threshold = few FPs but many FNs; low threshold = more FPs [PAGE 246]
10. Results: skill positions precision >80%, QB random forest >90% TP precision on holdout; non-skill positions unreliable [PAGE 246-247]
11. Integration with Walter et al. likelihood model: top-right quadrant (high performance + high commit probability) [PAGE 247]
12. Gray zones: models don't replace human intuition [PAGE 246]; emotional decision [PAGE 247]; unethical practices unmodeled [PAGE 247]; star ratings provide no unique insight because everyone has them [PAGE 243]

I'll write this as a continuous narrative >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX equations.
- Logistic GLM: \(P(Y_i=1 \mid \mathbf{x}_i) = \frac{1}{1 + e^{-(\beta_0 + \boldsymbol{\beta}^\top \mathbf{x}_i)}}\)
- Precision: \(\text{Precision} = \frac{TP}{TP + FP}\)
- Accuracy: \(\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}\)
- Base rate: \(\pi = P(Y=1) \approx 0.10\)
- Likelihood ratio: \(\text{LR} = \frac{P(Y=1 \mid \hat{p}=0.30)}{P(Y=1)} = \frac{0.30}{0.10} = 3\)
- LOOCV: \(\hat{\text{Err}}_{\text{LOO}} = \frac{1}{N}\sum_{i=1}^N L(y_i, \hat{f}^{-i}(x_i))\)
- RHOS: 10% holdout
- Stepwise regression: AIC/BIC based selection (implied)
- Units: probability dimensionless [0,1], sample size count [n], GPA [4.0 scale], SAT [points], 40-yard dash [seconds], height [inches/cm], weight [lbs/kg], accolades [binary count]
- Page citations: [PAGE 245] for GLM/LOOCV/RHOS; [PAGE 246] for precision/accuracy; [PAGE 247] for base rate and 3x likelihood; [PAGE 243] for WarRoom attributes.
- Breakdown regimes: n < 300 per position model [PAGE 246]; non-normal residuals violating GLM assumptions [PAGE 245]; self-reported MaxPreps sparsity [PAGE 245]; missing play-by-play for non-skill [PAGE 246]; no PFF high school data [PAGE 247].

RETROCAUSAL_GENEALOGY:
- Lineage: Moneyball 2002 Oakland A's [PAGE 243]; Bigsby et al. 2017 social media commitment model 70% accuracy [PAGE 244]; Walter et al. 2017 UVA recruit visualization [PAGE 244]; Stanford football second-tier recruits [PAGE 244].
- Multi-week traps: head coach spends 3 weeks/year traveling to hometowns [PAGE 244]; sunk cost in recruiting visits; emotional commitment decisions [PAGE 247]; if model identifies diamond but recruit emotionally commits elsewhere, resources wasted.
- How historical context shapes current model: builds on Walter et al.'s three components (academics, grit, likelihood) adding performance as fourth [PAGE 244].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (losing season, AD pressure), coaches may abandon model and revert to star ratings + film [implied from "models will not replace human intuition" [PAGE 246]].
- Counter-trap: because all schools access same public star ratings, those ratings offer no unique insight [PAGE 243]; if UVA adopts analytics but rivals do too, competitive advantage decays (zero-sum arms race).
- Clock: recruiting cycle is seasonal; three-week travel window [PAGE 244]; offer/commitment deadlines; model must produce scores before visits; delay means missing window.
- Interaction: crisis → regression to star ratings → counter-trap (no edge) → clock pressure forces quick decisions → model unused.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: height, weight, 40 time in WarRoom [PAGE 243]; these are static, measurable.
- Biomechanical layer: skill players have recorded stats; non-skill (OL, DB) lack play-by-play metrics [PAGE 246]; no PFF high school equivalent [PAGE 247]; model for non-skill relies on height/weight only, less informative.
- Weather/environmental: census data (population density, single-parent households, transit time) proposed but not modeled in this study [PAGE 244-245]; could proxy for contextual adversity (grit) but absent.
- Veto adjudication: model output is advisory, not directive [PAGE 246]; human coaches must vet because emotional/familial factors and unethical recruiting are unmodeled [PAGE 247]; one underperforming player propagates mistakes [PAGE 244] so false positives carry team-level risk.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Define RLVR maybe as "Recruit-Level Validation Rejection" or just use as framework. The user wants "3 verifiable RLVR veto scenarios + predictions." I'll interpret RLVR as a validation layer.

Scenario 1: Self-reported MaxPreps inflation. A 3-star QB self-reports 3,500 passing yards; model flags him (precision target >80%). Verifiable veto: cross-reference with verified game film or camp data shows actual yards 40% lower. Prediction: model false-positive rate exceeds 20% for recruits whose self-reported stats deviate from verified stats by >25%, collapsing precision below the 80% threshold.
Scenario 2: Non-skill position data void. An offensive lineman meets height/weight cutoffs but no snap-grade data exists. Verifiable veto: model cannot outperform 247Sports null model. Prediction: non-skill position random forest accuracy remains ≤ null model (star rating only), and precision does not exceed base rate (~10%) without play-by-play predictors.
Scenario 3: Likelihood-performance mismatch. Walter et al. likelihood model scores commit probability at 0.15; performance model scores accolade probability at 0.40. Staff pursues due to prior relationship. Verifiable veto: recruit commits elsewhere. Prediction: when performance score >0.30 but likelihood score <0.20, resource allocation yields negative expected ROI because emotional/familial factors dominate [PAGE 247].

Make sure no betting language. Avoid "odds" entirely. Use "probability" or "likelihood."

Word count check: THINK_TRACE needs >=400 words. Total >=1000 words. I'll write generously.

Let me compose the final response with exact XML tags. No markdown outside? The user wants exact XML sections. I'll provide only the XML sections with content inside.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are from the paper or standard statistics, not fake. The 3x likelihood ratio is directly from the paper text ("if the model predicted someone as having a 30% chance... three times more likely"), so it's sourced, not invented.

Let's write.

THINK_TRACE content (aiming ~500 words):

[Drafting mentally]
The paper’s analytic pipeline can be derived as a multi-hop causal chain. Hop 1: UVA cannot compete for 4/5-star talent [PAGE 243], so it must mine 2/3-star recruits for “diamonds in the rough” [PAGE 243]. Hop 2: Because public star ratings are universally available, they confer no unique advantage [PAGE 243], so UVA must build proprietary predictors from WarRoom demographics, MaxPreps, 247Sports, Twitter, and census data [PAGE 243–245]. Hop 3: The response variable is binary accolade reception (All-American, All-Conference, NFL Draft), which occurs for only about 10% of rated players [PAGE 245; P. 247], making the classification task highly imbalanced. Hop 4: Generalized linear models (GLMs) with stepwise regression are first attempted, but diagnostic QQ plots reveal non-normality; exceptional players form a separate segment off the normality line [PAGE 245]. Hop 5: Tree-based methods (CART, random forests) are deployed to capture nonlinearities, using LOOCV and 10% random holdout samples (RHOS) to compensate for the small usable sample of 200–300 entries per position model [PAGE 245–246]. Hop 6: Precision is elevated above accuracy because false positives waste recruiting dollars and one underperforming player can propagate mistakes through a team [PAGE 244, 246]. Hop 7: A tunable decision threshold trades false positives against false negatives; at high thresholds precision exceeds 80% for skill positions, with QB random forest achieving >90% true-positive precision on holdout [PAGE 246–247].

Gray-zone audits are necessary at multiple nodes. First, MaxPreps data are self-reported by players and coaches, producing sparse fields especially for less-talented athletes [PAGE 245]; this introduces upward-reporting bias that can inflate predictor values. Second, the dataset’s lack of normality violates a core GLM assumption [PAGE 245], so coefficient interpretability is limited even if predictive accuracy holds. Third, non-skill positions (offensive line, defensive back) lack play-by-play statistics, forcing reliance on height and weight alone [PAGE 246], which the authors concede are less informative than star ratings grounded in film study [PAGE 246]. Fourth, the models explicitly do not account for emotional decision-making, familial components, or unethical inducements [PAGE 247], meaning a high probability score is necessary but not sufficient for commitment. Fifth, because rivals can replicate the same analytics stack, any first-mover advantage decays unless UVA integrates the performance model with Walter et al.’s likelihood and grit models to isolate recruits who both perform and are predisposed to commit [PAGE 247].

Word count looks good.

SOURCE_OPERATORS_AND_EQUATIONS:
Will include equations with citations.

RETROCAUSAL_GENEALOGY:
Historical lineage + multi-week traps.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios.

Let me write the full response now, ensuring no mention of betting lines, spreads, totals, moneylines, odds. I will use "probability" not "odds."

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios". The ratio 0.30/0.10 = 3 is verbatim from paper [PAGE 247], so it's fine.

Citations format: [PAGE 243] etc.

Total words: I'll write enough to exceed 1000 across all sections.

Let's draft carefully in the final channel.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s analytic pipeline can be derived as a multi-hop causal chain. Hop 1: UVA cannot compete for four- and five-star talent to the extent that elite programs do, so it relies primarily on two- and three-star recruits to fill its class [PAGE 243]. Hop 2: Because publicly available star ratings from ESPN, 247Sports, and rivals are accessible to every program, those ratings provide UVA no unique insight [PAGE 243]. Hop 3: To gain a proprietary edge, UVA must build models from attributes outside the public star-rating bundle, specifically academic standing, personality or “grit,” likelihood of committing, and on-field performance [PAGE 243–244]. Hop 4: The response variable for the performance model is binary—receipt of an accolade (All-American, All-Conference, or NFL Draft)—which occurs for roughly 10% of rated players, rendering the classification task severely imbalanced [PAGE 245; P. 247]. Hop 5: Generalized linear models (GLMs) with stepwise regression are attempted first, but diagnostic QQ plots reveal non-normality; exceptional players cluster as a separate segment off the normality line, violating a core linear-modeling assumption [PAGE 245]. Hop 6: Tree-based methods (classification/regression trees and random forests) are therefore deployed to capture nonlinearities, using 10-fold leave-one-out-cross-validation and 10% random holdout samples to compensate for the fact that only 200–300 entries are usable per position model [PAGE 245–246]. Hop 7: Precision is chosen as the primary metric rather than accuracy because false positives are highly undesirable; the coaching staff determined that investing thousands of dollars in a recruit who fails to perform is costly, and one underperforming player can propagate mistakes through a team-centered sport [PAGE 244, 246]. Hop 8: A tunable decision threshold trades false positives against false negatives; at elevated thresholds, precision exceeds 80% for skill positions, and the quarterback random forest yields over 90% true-positive precision on a holdout sample [PAGE 246–247].

Gray-zone audits are required at several nodes. First, MaxPreps high-school statistics are self-reported by players and coaches, producing sparse data fields, especially for less-talented athletes [PAGE 245]; this creates an unverified reporting bias that can distort predictor values. Second, the dataset’s lack of normality undermines GLM coefficient interpretability even if out-of-sample predictive accuracy is acceptable [PAGE 245]. Third, non-skill positions—offensive linemen and defensive backs—lack play-by-play statistics, so their models reduce to simple measures such as height and weight, which the authors acknowledge are less informative than star ratings derived from intensive scouting and film [PAGE 246]. Fourth, the models explicitly cannot account for emotional decision-making, familial components, or unethical recruiting inducements such as cash payments [PAGE 247], meaning a high probability score is necessary but not sufficient for a commitment. Fifth, because the performance model is advisory rather than directive, it does not replace human intuition; it only generates a list of recruits the staff might otherwise miss [PAGE 246]. Finally, any first-mover analytical advantage decays if rival programs adopt equivalent machine-learning pipelines, which is why integration with Walter et al.’s likelihood and grit models is essential to isolate the top-right quadrant: recruits predicted to play well and to commit to UVA if pursued [PAGE 247].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal statistical operators drawn from the paper:

Binary response and logistic GLM [PAGE 245]:
\[
P(Y_i = 1 \mid \mathbf{x}_i) = \frac{1}{1 + e^{-(\beta_0 + \boldsymbol{\beta}^{\top}\mathbf{x}_i)}}
\]
where \(Y_i = 1\) denotes accolade reception, \(\mathbf{x}_i\) is the predictor vector for recruit \(i\), and coefficients are selected by stepwise regression.

Precision and accuracy [PAGE 246]:
\[
\text{Precision} = \frac{TP}{TP + FP}, \qquad \text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}.
\]

Base-rate prevalence and likelihood lift [PAGE 247]:
\[
\pi = P(Y=1) \approx 0.10, \qquad \text{Lift} = \frac{P(Y=1 \mid \hat{p} = 0.30)}{P(Y=1)} = \frac{0.30}{0.10} = 3.
\]
Thus a recruit scored at 30% accolade probability is three times more likely to receive an accolade than a randomly selected rated player.

Cross-validation and holdout [PAGE 245]:
\[
\widehat{\text{Err}}_{\text{LOO}} = \frac{1}{N}\sum_{i=1}^{N} L\!\left(y_i,\hat{f}^{-i}(\mathbf{x}_i)\right),
\]
with an additional 10% random holdout sample (RHOS) to stabilize limited-sample estimation.

Units and measurement regimes:
- Probability: dimensionless, \([0,1]\).
- Sample size per position model: count \(n \in [200,300]\) usable entries [PAGE 246].
- High-school GPA: 4.0 scale [PAGE 244].
- SAT composite: points (Math + Critical Reading), UVA average 1410 [PAGE 244].
- 40-yard dash: seconds [PAGE 243, WarRoom attribute list].
- Height/weight: anthropometric units stored in WarRoom [PAGE 243].
- Accolades: binary count (All-American, All-Conference, NFL Draft) [PAGE 246].

Exact breakdown/singularity regimes:
1. Small-sample singularity: \(n < 300\) per model forces aggressive predictor pruning; adding too many MaxPreps variables collapses usable \(n\) below statistical significance thresholds [PAGE 245].
2. Normality violation: QQ plots show residuals deviating from linearity at the upper tail; GLM inference assumptions fail [PAGE 245].
3. Self-reporting sparsity: MaxPreps fields are incomplete, especially for lower-star athletes, introducing missing-not-at-random bias [PAGE 245].
4. Non-skill predictor poverty: offensive line and defensive back models lack play-by-play performance metrics, reducing predictors to height and weight only [PAGE 246].
5. External-data absence: Pro Football Focus game-by-game college grades exist but have no high-school equivalent, blocking feature expansion for non-skill positions [PAGE 247].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage traces from *Moneyball* (Oakland Athletics, 2002), which demonstrated that statistical roster construction could outperform payroll expectations [PAGE 243], into college football recruiting. Kristina Bigsby’s commitment-likelihood model used social-media data to predict college destination with over 70% accuracy [PAGE 244]. Walter et al. (2017) then built the immediate foundation for UVA: academic models, likelihood models, and grit models quantifying three of the four recruiting components defined by UVA coaches [PAGE 244]. The present paper adds the fourth component—on-field performance—while explicitly validating Walter et al.’s prior framework [PAGE 244]. Stanford football serves as the aspirational case: program success without top-rated recruits, suggesting “diamonds in the rough” are discoverable [PAGE 244].

Embedded in this lineage are multi-week traps. The UVA head coach spends three weeks per year traveling to recruits’ hometowns [PAGE 244], creating a fixed temporal window in which relationship-building must occur. If an analytical shortlist is produced too late in the cycle, the travel clock expires before the staff can act on model insights. A second trap is sunk-cost escalation: staffs invest hundreds of hours on prospects who never intend to attend UVA [PAGE 244], so continuing to pursue a recruit because of prior visits—even when the likelihood model assigns low commit probability—is a path-dependent error. A third trap is emotional decision-making; the authors note that choosing a university is “a fully emotional decision” [PAGE 247], meaning that even a high performance-probability score can be overridden by familial preference, coaching relationships, or unethical inducements not represented in the data. Consequently, the historical arc moves from public star ratings (zero unique insight because all schools possess them) [PAGE 243] toward a fused model stack—performance plus likelihood plus grit—that attempts to recover an edge before the seasonal recruiting clock closes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when UVA coaches, facing a losing season or athletic-department pressure to win, abandon the analytic shortlist and revert to star ratings and film evaluation—the familiar, low-cognitive-load heuristic [PAGE 243, 246]. This regression is dangerous precisely because public star ratings are universally available; if UVA retreats to them under pressure, it cedes any proprietary analytical advantage [PAGE 243]. The counter-trap is recursive: rival programs observing UVA’s analytics adoption may replicate the same GLM/random-forest pipeline using identical public data sources (247Sports, MaxPreps, Twitter), eroding first-mover advantage unless UVA sustains data exclusivity through WarRoom and proprietary census/personality fusion [PAGE 243, 245].

The clock imposes a hard constraint. Recruiting operates on an annual cycle with a finite three-week head-coach travel block [PAGE 244]. Model outputs—performance probability, likelihood of commitment, and grit score—must be generated before visits are scheduled. Delay in model validation or data cleaning collapses the decision window, forcing coaches to choose on incomplete information. The interaction is therefore: crisis triggers regression to star ratings; star ratings trigger the counter-trap of universal availability; clock pressure prevents the staff from waiting for model refinement; and the result is resource allocation to high-star, low-fit recruits rather than modeled “diamonds in the rough.” Breaking this loop requires the performance model to be embedded in WarRoom so that the list of recommended recruits is available at the moment the staff decides where to invest recruiting time [PAGE 246].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: WarRoom stores height, weight, 40-yard dash time, GPA, and contact information [PAGE 243]. These are static, directly measurable attributes with low measurement error relative to self-reported high-school statistics.

Biomechanical layer: Skill positions (quarterback, wide receiver, running back, tight end) have recorded high-school play statistics, enabling informative predictors [PAGE 246]. Non-skill positions—offensive linemen and defensive backs—lack play-by-play statistics or standardized success metrics at the high-school level [PAGE 246]. Their models consequently depend on height and weight alone, which the authors concede are less informative than star ratings grounded in film study [PAGE 246]. No Pro Football Focus equivalent exists for high school, so this data void is structural rather than temporary [PAGE 247].

Weather/environmental layer: The paper mentions census attributes—population density, percent single-parent household, average transit time to school—as potential improvements to likelihood and academic models, but explicitly states no additional census models were created in this study [PAGE 244–245]. Thus environmental context is not currently a veto input; it remains an unmodeled covariate.

Veto adjudication rule: The performance model is advisory, not directive [PAGE 246]. A model-generated recruit is pursued only if human film review, academic eligibility, and likelihood-of-commitment screening concur. Because one underperforming player can propagate mistakes throughout a team [PAGE 244], false positives carry team-level risk exceeding the dollar cost of a single recruiting visit. Because emotional, familial, and unethical inducement factors are outside the model [PAGE 247], a high probability score never overrides a coach’s direct assessment of character or commitment intent. The veto hierarchy is therefore: (1) model probability screen; (2) human film and character evaluation; (3) likelihood-of-commitment overlay; (4) resource-allocation decision. Any layer may veto without requiring the others to concur.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Self-reported statistic inflation: A three-star quarterback self-reports 3,500 passing yards on MaxPreps; the random-forest model flags him as a high-precision “diamond.” Verifiable veto: independent film or camp testing reveals actual production is at least 25% below the self-reported figure. Prediction: when self-reported passing yards exceed verified production by >25%, model precision falls below the 80% target and the false-positive rate rises above 20%, because self-reporting bias systematically inflates the predictor vector for low-visibility recruits [PAGE 245, 246].

Scenario 2 — Non-skill data void: An offensive lineman meets the model’s height and weight cutoffs, but no snap-grade or play-level performance data exists. Verifiable veto: the model’s output for this position cannot outperform the null model that uses only the 247Sports Composite Star Rating. Prediction: non-skill position accuracy remains at or below the star-rating null baseline, and precision does not exceed the ~10% base accolade rate, because height and weight alone lack discriminative power without play-by-play biomechanical features [PAGE 246, 247].

Scenario 3 — Likelihood-performance mismatch: Walter et al.’s likelihood model assigns a commit probability of 0.15 to a recruit whom the performance model scores at 0.40 for accolade reception. The staff pursues him anyway because of a prior relationship with the high-school coach. Verifiable veto: the recruit commits to a different program. Prediction: when performance score >0.30 but likelihood score <0.20, recruiting resource allocation yields negative expected return, because emotional and familial factors dominate the commitment decision and are not represented in the feature space [PAGE 247].
</RLVR_COUNTERFACTUAL_VETOES>
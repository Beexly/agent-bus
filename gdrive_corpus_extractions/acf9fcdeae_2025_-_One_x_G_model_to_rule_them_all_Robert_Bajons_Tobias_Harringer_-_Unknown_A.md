---
source: "2025 - One x G model to rule them all Robert Bajons Tobias Harringer - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 27
model: deepseek/deepseek-v4.1-flash-1017
words: 6708
---

<NATIVE_REASONING>
We need answer user. Need produce GSE + GSI Frontier Reasoning Foundry with exact XML sections and >=1000 words, THINK_TRACE >=400 words. Need analyze source. Topic is xG models paper. Need no betting lines. No fake ratios. Need formal LaTeX equations, units, page citations verbatim quotes. Need ret causal genealogy, recursive theory mind crisis habit regression vs counter-trap vs clock, cross-layer veto physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely this is for sports research "drive source" maybe asks evaluate. Need answer in XML sections. Need cite exact PAGE N markers and verbatim quotes. Need include equations from paper: Poisson-Binomial G, GAX, Gaussian defender representation, mass sum, perhaps logloss? Need units. Need discuss "source operators" formal. Need no betting lines. Need avoid mention spreads/totals/moneylines/odds. Need mention no betting lines. Since paper xG not betting. Need deep multi-hop derivation and gray-zone audit. Need >=1000 words; aim 2000-3000. Need all sections. Need exact XML tags. Must include THINK_TRACE >=400 words. Need maybe use source markers [PAGE 5 of 27] etc. Need quote verbatim. Need cite exact page markers. Need mention source text says "one xG model to rule them all?" etc. Need discuss invariants. Need not mention "odds". Need no betting line. Good.

Need structure:

<THINK_TRACE> Deep multi-hop derivation & gray-zone audit >=400. Include reasoning chain: claim of H-SB "most accurate" but claim evaluated on own dataset? Paper uses 88,737 shots after excluding 1,025, 43,596 exclusive +45,141 public. Metrics Table 1 accuracy 0.9108 AUC .8053 logloss .2535 vs naive .9040 .3162. Calibration underprediction 0.1-0.3. Poisson-binomial total goals right of upper bound indicates conditional independence/feature sufficiency violation. GAX biases: game state, foot, rebound; physical metrics no effect. Own model XGBoost with 10-fold cross-fitting, features including Gaussian defender mass. Metric own accuracy .9105 slightly lower, AUC .8098, logloss .2523. Calibration improved, goal distribution within interval, biases reduced. But rebound bias remains 0.0081. Then use case specific: team strengths improve match prediction but bad control for player evaluation (Messi negative rGAX when attacking strength included); league-specific feature selection 19 variables and stacking beats H-SB in five leagues. Gray-zone audit: "AUC" threshold-free but still discrimination; logloss proper. Accuracy threshold dependent. Calibration bins 20 equal-sized; equal-sized bins with class imbalance. Poisson-binomial assumes conditional independence given features and calibrated p_i ≈ xG_i, not causal. GAX is average residual not causal; selection effects; rGAX. Defender Gaussian parameters tuned to maximize correlation with blocked shots on external data, possible leakage? They say freely available event data not included in project; okay. "w_i=(1 −β d_i, 0)" has weird notation? We can quote maybe not derive. Need exact singularity: σ_i = σ0(1+α d_i) positive if σ0>0 α>=0; breakdown if α d_i = -1 if α negative, or if β d_i >1 then negative weight if using (1 - β d_i) without max? In paper formula "w_i=(1 −β d_i, 0)" maybe likely typo; weight can become negative for d_i > 1/β = 20 m if β=0.05. That is gray-zone: distance downweight can become negative unless clipped; they don't state clipping. Need mention exact singularity/breakdown regime. Also Poisson-binomial support 0..n; CDF interval; if n large etc. GAX formula. Logloss formula maybe general but source only mentions. We can state formal.

Need <SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX with units, page citations, breakdown. Include:
- Dataset: N=88,737 after excluding 1,025; exclusive 43,596; public 45,141 [PAGE 2].
- GAX_{c} = (1/n_c) sum_{i in c}(G_i - xG_i), units goals per shot (dimensionless probability but interpreted goals per shot) [PAGE 6].
- Poisson-Binomial: G ~ PB(xG_1,...,xG_n), G ∈ {0,...,n}; mean μ = sum xG_i; variance σ² = sum xG_i(1-xG_i); 95% interval via CDF [PAGE 5]. Breakdown: conditional independence and calibration p_i≈xG_i; if violated interval invalid.
- Calibration bins 20 equal-sized [PAGE 4].
- Defender model D_i ~ N(p_i, σ_i² I), σ_i=σ0(1+α d_i), d_i=||p_i-p_shot||; units: p_i meters, σ0 meters, α per meter? Actually σ0(1+α d_i): α dimensionless if d_i in meters? If d_i in meters and α=0.03, α units 1/m. They list σ0=0.2, α=0.03, β=0.05 [PAGE 9-10]. Mass sum: sum_i w_i sum_{s∈A} g_i(s), w_i=(1−β d_i,0) quote? Need correct units. g_i(s) probability mass? dimensionless. w_i maybe dimensionless if β 1/m. Breakdown: if β d_i >1, negative weight; if α negative, σ_i<0 for d_i=-1/α; if σ0=0 degenerates. Need mention no clipping stated. Area A meters². Numerically integrate discretized subfields. 
- XGBoost objective logloss: L = -1/N sum [y_i log p_i + (1-y_i) log(1-p_i)] [PAGE 11]; hyperparameters. Units nats per shot if natural log. Maybe use exact quote "The objective is to minimize logloss (binary cross-entropy)" [PAGE 11].
- Team strengths via bivariate Poisson MLE [PAGE 14]; GCM test conditional independence [PAGE 15-16]. Could state p-values -log10. 
- Feature selection 19 variables [PAGE 21], stacking logistic regression on logit transform [PAGE 22].
- Breakdown regimes: feature sufficiency violation; small data overfitting; "bad control" circularity; calibration bias; league-specific. Need exact singularities: σ_i=0 if σ0=0 or 1+αd_i=0; negative weight if 1-βd_i<0; logit transform undefined at p=0 or 1; logloss undefined if p∈{0,1} and outcome opposite; Poisson-Binomial if xG_i outside [0,1] invalid; n=0 no distribution; GCM test may fail under zero variance? Need mention as mathematical breakdown.

<RETROCAUSAL_GENEALOGY> Historical scientific lineage: Pollard & Reep 1997, Robberechts & Davis 2020 data availability, StatsBomb/Hudl Vatvani 2022, Chen & Guestrin XGBoost 2016, Karlis & Ntzoufras 2003 bivariate Poisson, Shah & Peters 2020 GCM, Cinelli et al 2024 bad controls, Bajons & Kook 2025 rGAX. Multi-week traps: treating xG as universal; ignoring calibration; using accuracy; not accounting for game state/foot/rebound; adding team strengths for player eval; small leagues with too many features; stale global model; no stacking; data leakage via freeze frames? Need mention "multi-week traps" maybe in training/research over weeks: overfit to public top-five leagues; seasonal drift; feature availability; selection effects; "one model to rule them all" trap. Need no betting.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Interpret analyst behavior under crisis: habit regression = revert to global xG/accuracy; counter-trap = overcorrect by adding team strengths to player evaluation or overfit league-specific; clock = temporal mismatch (late-game scoreline interactions, time intervals, season windows, 15-min physical metrics). Need discuss recursive ToM: analyst models coach, bettor? no betting. Maybe "decision-maker" not bettor. Need mention "crisis habit regression" maybe when performance pressure causes fallback to familiar metric. Counter-trap: using the paper's critiques to justify dropping calibration or feature selection. Clock: game clock 0-45,45-75,75+, and evaluation clock (train/test temporal split). Need not mention betting.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need use paper: physical metrics "None of these factors has a meaningful effect on GAX" [PAGE 8]. Thus physical layer veto: cannot claim sprint distance etc improves xG unless verified; but physical data aggregated 15-min intervals, not per-shot exact, so weak. Biomechanical: dominant foot strong/weak/other biases; use foot category. Weather: not in data; no weather features; cannot adjudicate weather from this source; default veto if proposed weather layer lacks in-source evidence. Need "veto proof": any claim requiring weather or unobserved biomechanics is vetoed because source feature list lacks weather and per-shot biomechanics; only foot/body part/technique. Physical metrics of shooter over 15-75 min before shot no meaningful effect [PAGE 8], so veto physical fatigue story. But "goalkeeper position" etc included. Need formal proof: Let M be candidate feature not in table 7; if M not in source and not tested, then no empirical support; veto. Also if M is physical metric, paper says no meaningful effect. Weather not tested. Biomechanical: strong foot effect present; other body part underperformance. Need "cross-layer" maybe combine: physical tracking + weather + biomechanics. Need exact.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need design scenarios with observable predictions and veto conditions. RLVR = reinforcement learning with verifiable rewards? Counterfactual vetoes: if scenario A, model should predict X; if not, veto. Need 3. Must be verifiable. Could be:
1. Calibration veto: On a held-out shot set, bin equal-sized 20 bins; if H-SB under 0.1-0.3 remains above diagonal (observed > predicted) then model is miscalibrated; predicted own model closes gap. Veto if own model fails to reduce absolute calibration error. Need exact prediction: in 0.1-0.3 bin, H-SB observed goal rate > mean xG; own model difference near zero. Use [PAGE 4,12]. 
2. Poisson-Binomial interval veto: Given fixed xG vector, compute 95% CDF interval; if total goals outside interval, reject conditional independence/feature sufficiency. Prediction: H-SB observed total > upper bound [PAGE 5]; own model observed total within interval [PAGE 12]. Veto if implementation yields observed within H-SB interval or own outside. 
3. Rebound residual veto: After adding rebound indicator, non-rebound GAX ~0 and rebound GAX reduced but positive 0.0081. Prediction: own model rebound GAX < H-SB 0.0104 and non-rebound GAX ≈0. Veto if rebound bias not reduced or non-rebound not zero. 
Could include team strength bad-control veto: If adding attacking strength to player evaluation flips Messi rGAX from significantly positive to negative, then attacking strength is bad control; prediction. But need exactly three. Use 3.

Need ensure answer has all exact XML. Need include "ZERO BETTING LINES" maybe not needed but can state "No betting lines are used or implied." Since user invariant says never mention spreads/totals/moneylines/odds. The word "totals" could be forbidden? They said never mention spreads, totals, moneylines, or odds. Avoid "totals" word? But source uses total goals. Need avoid "totals" exact? We can say "aggregate goals" instead of "total goals" to avoid. But quote source includes "total number of goals" on page 5. We can quote verbatim? It contains "total number of goals" not "totals" maybe okay. But invariant says never mention totals. We can avoid verbatim quote with "total number of goals"? Hmm exact quote needed. Could quote "observed total lies right of the upper bound" [PAGE 5] but word total. Is "total" okay? They specifically "totals" maybe betting totals. To be safe, avoid word "totals" as noun; use "aggregate". But quotes may contain "total number". It's okay? Hmm. We should not mention betting lines. Use "aggregate goal count" not "totals". Avoid "odds" entirely. "moneylines" none. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We need annotate units. Let's craft detailed.

Potential issue: "w_i=(1 −β d_i, 0)" source has weird tuple. We can quote exact but correct? It says "where 𝑤𝑖= (1 −𝛽𝑑𝑖, 0)  is the distance scaled influence weight". Probably typo in extraction; maybe w_i = max(1−β d_i,0). We can quote exact and note rendering anomaly. Need avoid inventing? We can say "the source renders \(w_i=(1-\beta d_i,0)\), which is dimensionally anomalous and mathematically requires clipping at zero to avoid negative mass; the text does not state clipping." That's good gray-zone audit. Need cite [PAGE 10]. This is a strong formal critique.

Need "source operators and equations" maybe define operators:
- Preprocessing filter operator \(\mathcal{F}_{shots}\)
- GAX operator
- PB operator
- Gaussian representation operator
- GCM conditional independence operator
- Stacking operator. Use formal.

Need mention exact page citations and verbatim quotes. For each equation quote. Need use [PAGE N of 27]. Let's prepare quotes:
- Page 1: "Hudl-Statsbomb is one of the most prominent providers of xG values, and their xG model is labeled the “most accurate xG model”" [PAGE 1].
- Page 1: "there exists no ultimate xG model to rule them all, but that each use case benefits from an xG variant tailored to it." [PAGE 1].
- Page 2: "In total, 1,025 shots are excluded in this process, leaving 88,737 shots for the subsequent analysis." [PAGE 2].
- Page 4: "in the 0.1 to 0.3 range, the dots consistently lie above the dashed line, meaning that empirical goal rates are higher than predictions. This indicates systematic underprediction in this region." [PAGE 4].
- Page 5: "the observed total lies right of the upper bound, indicating that significantly more goals were scored than predicted by the model." [PAGE 5].
- Page 5: "G∼Poisson-Binomial(xG1, ⋯, xGn)" maybe quote.
- Page 6: GAX formula quote.
- Page 7: "the average GAX indeed increases with the game state" [PAGE 6? Actually Figure 3 on page 6, text after figure page 6: "We observe in Figure 3 that the average GAX indeed increases with the game state." It's on page 6? Page 6 has figure 3 and text? Source page 6 includes "Figure 3..." and "We observe..." yes page 6. Page 7 figure 4. Use [PAGE 6].
- Page 7: "this effect tends to become stronger later in the game" [PAGE 7].
- Page 7: Table 2 strong 0.0091 weak -0.0106 other -0.0078 [PAGE 7].
- Page 8: "strong overperformance for shots in rebound situations" [PAGE 8].
- Page 8: "None of these factors has a meaningful effect on GAX" [PAGE 8].
- Page 9: defender equation "D_i∼N(p_i, σ_i^2 I)" and "σ_i=σ0(1+αd_i)" and "d_i=||p_i−p_shot||" [PAGE 9].
- Page 10: "where w_i=(1−βd_i,0) is the distance scaled influence weight" and "final chosen values σ0=0.2, α=0.03 and β=0.05" [PAGE 10].
- Page 11: "The objective is to minimize logloss (binary cross-entropy)" and hyperparams [PAGE 11].
- Page 14: bivariate Poisson [PAGE 14].
- Page 15: GCM test [PAGE 15].
- Page 18-19: bad control quote "attacking strength parameter is a “bad” control variable" [PAGE 19].
- Page 21: "This procedure results in the selection of 19 relevant variables" [PAGE 21].
- Page 22: "we use a logistic regression model on a logit transform of the probabilities from each model" [PAGE 22].
- Page 22: "In all five leagues used for the competition, the stacked model is able to outperform Hudl-Statsbomb’s xG model." [PAGE 22].
- Page 26-27 Table 7 features. Use [PAGE 26-27].

Need word count. We can provide ~3000 words. Need XML only? Likely response should be XML sections. We can start directly with tags. No extra preamble maybe okay. Need ensure all sections present exactly. Use escaped? XML tags. LaTeX inside is okay. Need no ampersand raw? Avoid & or use &amp;. In XML, raw ampersand is invalid; need use &amp; or avoid. But response not parsed? Still should be well-formed. Avoid "&" in text. Use "and". Use "<" in equations? Need escape < as &lt; if XML. Could use LaTeX with \lt? In XML, raw < is problematic. Need ensure XML well-formed. But tags contain content with LaTeX \(...\) no < except maybe \(p \in [0,1]\), no <. Need avoid "<" character. Use "less than" or \lt. Avoid raw &. Use "and". For equations with \(\sum_{i \in c}\), \in okay. No <. For intervals use \([0,1]\). Good. But equation "p_i \in (0,1)" no <. Use \le? Use \leq. Good. Use no raw ampersand. The source quote "Bajons & Kook" contains &; use "Bajons and Kook" or escape &amp;. Use "and" instead. For "Hudl-Statsbomb’s" apostrophe okay. Need XML tag names exact. Use <THINK_TRACE> etc.

Need maybe include "No betting lines" in content? Invariant says never mention. We can say "No betting-line content is used." But that mentions betting lines? It says never mention spreads, totals, moneylines, or odds. "betting-line" maybe okay? Better avoid. Just don't mention.

Need think about "RLVR" maybe in context of model training. Use "verifiable reward" and "veto". Need not define acronym? Could say "RLVR (reinforcement learning with verifiable rewards)" but not necessary. It's okay.

Need formal "SI/information/probability units". Use:
- \(xG_i\) probability dimensionless in [0,1], interpreted goals per shot.
- \(G_i \in \{0,1\}\), Bernoulli.
- GAX units goals per shot.
- Logloss in nats per shot with natural log.
- \(\sigma_0, \sigma_i, d_i\) meters; \(\alpha\) m^{-1}; \(\beta\) m^{-1}; Gaussian mass dimensionless probability; area \(A\) m^2.
- GCM p-value dimensionless; \(-\log_{10}p\) dimensionless.
- Poisson-Binomial support integers goals.

Need "exact singularity/breakdown regimes":
1. \(xG_i \notin [0,1]\) invalid probability; logloss undefined if p=0 or 1 and y=1 or 0; logit undefined at p=0 or p=1.
2. Poisson-Binomial interval invalid if conditional independence or calibration fails; if \(n=0\) no distribution; if all xG=0 or 1 degenerate.
3. Gaussian defender: \(\sigma_i = \sigma_0(1+\alpha d_i)\); if \(\sigma_0=0\) degenerate Dirac; if \(1+\alpha d_i =0\) zero variance; if \(1+\alpha d_i<0\) negative variance invalid; if \(\beta d_i >1\) weight negative if no clipping; if \(\beta d_i=1\) zero weight; if \(d_i\) units mismatch.
4. GAX denominator \(n_c=0\) undefined; small n high variance.
5. GCM test can fail if variables constant or conditional independence test assumptions? Distribution-free but needs regularity? Mention p-value threshold.
6. Stacking logit transform p=0/1.

Need "multi-hop derivation": from xG to aggregate goals via Poisson-Binomial. Derive mean/variance. From calibration bias to feature insufficiency. From GAX to omitted variable bias. From team strength to bad control via Messi. From small data to feature selection and stacking. Good.

Need "gray-zone audit" include that paper's claim "most accurate" not falsified by their own single dataset? The paper only compares own model and H-SB on same data; can improve AUC/logloss but accuracy lower. Need mention "Accuracy" is cutoff-dependent; Table 4 accuracy H-SB .9108 vs own .9105, so H-SB still wins accuracy; own wins AUC/logloss. This nuance important. Also "calibration" visual bins equal-size not formal test. "Poisson-Binomial" uses xG as true probabilities, not estimated; uncertainty in xG ignored. "GAX biases" are descriptive, not causal. "Physical metrics" aggregated 15-min intervals not shot-level; null effect may be due to aggregation. "Rebound remaining bias" not fully solved. "Defender weights without clipping" potential negative mass. "GCM for variable selection" uses p-values multiple testing? Stepwise may inflate? They claim distribution-free; but forward stagewise can overfit selection if not nested? They do validate across leagues. "Stacking" trained on other leagues, not same league; okay but assumes exchangeability. "League-specific" Championship full model better due more shots; aligns sample-size story but not causal. Good.

Need answer with "XML sections" exact. We need include only those sections? User says across these exact XML sections. We should provide exactly six tags. Need not include extra. Could include within. Good.

Need manage word count. Let's draft.

Start:
<THINK_TRACE>
... >=400 words.
Need maybe 700 words. Include all key audit. Use page markers.

Then source equations ~900 words. Then genealogy ~300. Recursive ~300. Cross-layer ~300. RLVR ~400. Total ~3000.

Need ensure no raw & or <. Use "and" and escaped? In XML, tags. Avoid "&". Use "Hudl-Statsbomb" no &. "Bajons and Kook". Use "less than" instead of <. Equations use \leq. No raw <. Use \( \) with no <.

Need include exact quotes with page markers. Verbatim quotes may contain "&" in source? Avoid those. Use quote from page 1 no ampersand. Good.

Potential issue: Page 10 formula "w_i=(1 −β d_i, 0)" contains minus. Fine. Need maybe not include ampersand. Good.

Let's write.

Need in THINK_TRACE: multi-hop derivation and gray-zone audit. Include:
- Step 1: what is xG? predicted probability. Step 2: aggregate via PB. Step 3: calibration and independence. Step 4: residual GAX categories. Step 5: own model. Step 6: use cases. Gray zones: claim "most accurate"; accuracy threshold; calibration binning; PB assumptions; defender weight negative; physical metrics aggregation; team strength bad control; league-specific selection; stacking. Need exact citations.

Let's produce.

Need in SOURCE_OPERATORS_AND_EQUATIONS: Use bullets. Each equation with assumptions and breakdown. Include quote. Use LaTeX. Need mention "unit" carefully. "Probability of goal per shot is dimensionless; in football reporting it is goals per shot." Good.

Let's formulate:

1. Shot filtering: \(N=88737\). Quote [PAGE 2].
2. GAX: \(\mathrm{GAX}_c = \frac{1}{n_c}\sum_{i\in c}(G_i - xG_i)\). Units: goals per shot. Assumption: residual average identifies situational bias; breakdown \(n_c=0\), selection, confounding.
3. Calibration: bins 20 equal-sized. Assumption. Quote [PAGE 4].
4. Poisson-Binomial: \(G=\sum_i Y_i\), \(Y_i\sim\mathrm{Bernoulli}(xG_i)\), independent conditional on features. Then \(G\sim\mathrm{Poisson-Binomial}(xG_1,\ldots,xG_n)\), support 0..n, mean \(\sum xG_i\), variance \(\sum xG_i(1-xG_i)\). Quote [PAGE 5]. Breakdown conditional independence or calibration fail; xG outside [0,1]; n=0; degenerate.
5. Defender Gaussian: \(D_i \sim \mathcal{N}(p_i,\sigma_i^2 I)\), \(\sigma_i=\sigma_0(1+\alpha d_i)\), \(d_i=\|p_i-p_{\mathrm{shot}}\|\). Units. Mass \(M_A=\sum_i w_i \sum_{s\in A} g_i(s)\). Source quote. Break if negative variance/weight; no clipping. Values.
6. XGBoost logloss: \(\mathcal{L} = -\frac1N\sum[y\log p +(1-y)\log(1-p)]\). Units nats/shot. Quote. Break at p=0/1.
7. Team strength: bivariate Poisson MLE. Quote [PAGE 14]. GCM test. 
8. Stacking: logistic regression on logit transform \( \mathrm{logit}(p)=\log(p/(1-p))\). Breakdown p=0/1.
9. Feature selection 19 variables [PAGE 21].
Need maybe "information units" for logloss.

Need "CROSS_LAYER_VETO_ADJUDICATION" with "physical/biomechanical/weather veto proof." Use proof style:
- Physical: paper tested aggregated physical metrics over 15-75 min before shot; quote "None of these factors has a meaningful effect on GAX" [PAGE 8]. Thus any claim that sprint distance improves xG is vetoed unless new shot-level data. 
- Biomechanical: strong foot and body part; Table 2; own model reduces strong/weak to near zero. Veto: using foot without body part? 
- Weather: not in Table 7 [PAGE 26-27]; no weather variable, no test. Veto weather claim as unsupported. 
- Cross-layer: if weather interacts with physical fatigue, neither layer measured at shot time; cannot adjudicate. Need not overstate.

Need "RECURSIVE_THEORY_OF_MIND" with "Crisis habit regression vs counter-trap vs clock." Define:
- Crisis habit regression: under uncertainty analyst reverts to "one global xG" and accuracy. But paper says no ultimate model [PAGE 1]. 
- Counter-trap: overcorrect by adding all features/team strengths, causing bad control for player eval; quote bad control [PAGE 19]. 
- Clock: game clock/time intervals and evaluation clock; game state effect stronger later [PAGE 7]; 15-min physical metrics; train/test temporal ordering. Need recursive ToM: model the analyst modeling the coach modeling player; use nested perspectives. But keep concise.

Need "RLVR_COUNTERFACTUAL_VETOES" 3. Use predictions. Need exact verifiable. Use "Veto if..." and "Prediction..." Good.

Let's ensure no mention "totals" as betting. Use "aggregate" etc. But in equation "G" aggregate. Fine.

Need no "odds". Good.

Potential XML issue: use "&" in "Hudl-Statsbomb’s" no. Use "R and D"? No. Use "and" everywhere. Avoid raw "&". Use "less than" not <. Use ">"? XML okay but avoid. Use "greater than" or \gt. In text, greater than okay? Raw > is allowed in XML content (except in "]]>"), but okay. Use no <. Good.

Need "verbatim quotes" exact. We can use quotation marks. Need include [PAGE N]. Good.

Let's draft final with all sections. Need maybe not too verbose but sufficient. Let's write in XML.

Need watch word count: final likely >3000. Desired oververbosity 5. Good.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a “pick a winner” paper; it is a model-evaluation and model-selection paper. Its central multi-hop chain is: (1) Hudl-Statsbomb’s xG model is advertised as “the most accurate xG model” [PAGE 1 of 27], so the authors test that claim on a common shot set; (2) they construct a shot dataset after filtering, reporting “In total, 1,025 shots are excluded in this process, leaving 88,737 shots for the subsequent analysis” [PAGE 2 of 27]; (3) they compare conventional discrimination and proper-scoring metrics, then calibration, then a theoretical aggregate-goal distribution, then category-level residuals; (4) they build an XGBoost model with added contextual features and compare it on the same criteria; (5) they argue that use-case-specific models beat a single universal model, quoting “there exists no ultimate xG model to rule them all, but that each use case benefits from an xG variant tailored to it” [PAGE 1 of 27].

The first hop is metric semantics. Accuracy is threshold-dependent, so the paper’s own Table 1 and Table 4 show a gray zone: Hudl-Statsbomb has accuracy 0.9108 versus the authors’ 0.9105, so the authors do not win every metric. Their model improves AUC from 0.8053 to 0.8098 and logloss from 0.2535 to 0.2523 [PAGE 11 of 27]. Thus the correct claim is “better discrimination and probability scoring on this dataset,” not “uniformly more accurate.” That nuance matters because a threshold-free metric and a proper scoring rule are more informative for probabilistic xG than a cutoff-dependent accuracy.

The second hop is calibration. The paper bins sorted xG predictions into twenty equally sized groups [PAGE 4 of 27] and finds that “in the 0.1 to 0.3 range, the dots consistently lie above the dashed line, meaning that empirical goal rates are higher than predictions. This indicates systematic underprediction in this region” [PAGE 4 of 27]. This is a low-to-mid-probability calibration defect, not a global failure. The authors’ model is visually closer to the diagonal across ranges [PAGE 12 of 27], but the evidence is graphical binning, not a formal calibration test with uncertainty bands.

The third hop is the Poisson-Binomial argument. If each shot is Bernoulli with probability \(xG_i\), and if shots are conditionally independent given the model features, then the aggregate goal count follows a Poisson-Binomial law. The source states the model assumption and writes \(G\sim Poisson-Binomial(xG_1,\cdots,xG_n)\) [PAGE 5 of 27]. The observed aggregate lies outside the 95 percent interval: “the observed total lies right of the upper bound, indicating that significantly more goals were scored than predicted by the model” [PAGE 5 of 27]. This is not proof of a specific omitted variable; it is evidence against the joint package of feature sufficiency, calibration, and conditional independence.

The fourth hop is residual diagnosis. The paper defines average Goals Above Expectation by category [PAGE 6 of 27]. Game state shows increasing average GAX with scoreline [PAGE 6 of 27], and the effect “tends to become stronger later in the game” [PAGE 7 of 27]. Strong-foot shots average 0.0091 GAX, weak-foot shots -0.0106, and other body parts -0.0078 [PAGE 7 of 27]. Rebounds average 0.0104 versus 0.0023 for non-rebounds [PAGE 8 of 27]. By contrast, “None of these factors has a meaningful effect on GAX” for home or away and aggregated physical metrics [PAGE 8 of 27]. This creates a useful hierarchy: game state, foot, and rebound are source-supported omitted-variable candidates; aggregated physical fatigue is not.

The fifth hop is model construction. The authors use XGBoost, 10-fold cross-fitting, grid search, and early stopping, with “The objective is to minimize logloss (binary cross-entropy)” [PAGE 11 of 27]. They add Gaussian defender representations: \(D_i\sim N(p_i,\sigma_i^2 I)\), \(\sigma_i=\sigma_0(1+\alpha d_i)\), \(d_i=\|p_i-p_{\mathrm{shot}}\|\) [PAGE 9 of 27]. They report chosen values \(\sigma_0=0.2\), \(\alpha=0.03\), and \(\beta=0.05\) [PAGE 10 of 27]. The gray-zone issue is the weight rendering “\(w_i=(1-\beta d_i,0)\)” [PAGE 10 of 27], which is dimensionally anomalous and, without clipping, becomes negative when \(\beta d_i\) exceeds one. Since \(\beta=0.05\) per meter, that occurs beyond 20 meters if distance is in meters. The source does not state clipping. That is a formal breakdown regime, not a stylistic quibble.

The sixth hop is use-case specificity. Team strengths improve match prediction [PAGE 16 of 27], but for player evaluation the attacking-strength parameter is a “‘bad’ control variable” [PAGE 19 of 27] because attacking strength is partly the player’s own effect. The Messi example dramatizes this: adding attacking strength flips his rGAX from significantly positive to negative [PAGE 18 of 27 to PAGE 19 of 27]. The final multi-hop conclusion is therefore conditional: global xG is a benchmark, not a universal causal estimator; team-strength xG is useful for match prediction; player-evaluation xG should avoid attacking-strength controls; small-league xG should use selected features; and stacking can improve league-specific predictions [PAGE 21 of 27 to PAGE 22 of 27].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i=1,\ldots,N\) index shots, \(G_i\in\{0,1\}\) be the observed goal indicator, and \(xG_i\in[0,1]\) be the predicted goal probability. The probability is dimensionless; in football reporting it is interpreted as goals per shot. The filtered sample is \(N=88,737\), with 43,596 shots from the exclusive Hudl-Statsbomb data and 45,141 from public “top five” data [PAGE 2 of 27]. The source states: “In total, 1,025 shots are excluded in this process, leaving 88,737 shots for the subsequent analysis” [PAGE 2 of 27].

Category residual operator. For category \(c\) with \(n_c\) shots,
\[
\mathrm{GAX}_c=\frac{1}{n_c}\sum_{i\in c}\left(G_i-xG_i\right).
\]
This appears in the source as
\[
\frac{1}{n_c}\sum_{i\in c}(G_i-xG_i)
\]
with the definitions \(G_i\) as the binary outcome and \(xG_i\) as the model value [PAGE 6 of 27]. Units: goals per shot, because \(G_i-xG_i\) is a goal indicator minus a goal probability. Assumptions: \(n_c\) is nonempty and the category average is a meaningful diagnostic of omitted information. Breakdown: if \(n_c=0\), the expression is undefined; if \(n_c\) is small, the residual is noisy and not a stable bias estimate; if category membership is selected after looking at residuals, the diagnostic is exploratory rather than confirmatory.

Calibration operator. The paper sorts predictions and forms twenty equally sized bins, then compares average predicted xG with observed goal rate [PAGE 4 of 27]. Let bin \(b\) contain \(n_b\) shots; then
\[
\widehat{\mathrm{cal}}_b=\frac{1}{n_b}\sum_{i\in b}G_i,\qquad
\overline{xG}_b=\frac{1}{n_b}\sum_{i\in b}xG_i.
\]
Perfect calibration on the bin means \(\widehat{\mathrm{cal}}_b=\overline{xG}_b\). The source reports that in the 0.1 to 0.3 range “the dots consistently lie above the dashed line” [PAGE 4 of 27]. Units: both sides are probabilities, hence goals per shot. Breakdown: equal-sized bins mix different xG values within a bin; visual calibration is not a formal test; class imbalance concentrates most bins in the low-probability region.

Poisson-Binomial operator. Let \(Y_i\sim\mathrm{Bernoulli}(xG_i)\). Under conditional independence given the feature set, the aggregate count is
\[
G=\sum_{i=1}^{N}Y_i,\qquad
G\sim\mathrm{Poisson-Binomial}(xG_1,\ldots,xG_N).
\]
The source writes \(G\sim Poisson-Binomial(xG_1,\cdots,xG_n)\) [PAGE 5 of 27]. The support is \(G\in\{0,1,\ldots,N\}\), with
\[
\mathbb{E}[G]=\sum_{i=1}^{N}xG_i,\qquad
\mathrm{Var}(G)=\sum_{i=1}^{N}xG_i(1-xG_i).
\]
Units: \(G\) is a count of goals; \(xG_i\) is dimensionless probability per shot. Assumptions: feature sufficiency, calibration \(p_i\approx xG_i\), and conditional independence. Breakdown: if \(xG_i\notin[0,1]\), the Bernoulli law is invalid; if \(N=0\), the distribution is undefined; if all \(xG_i\in\{0,1\}\), the law is degenerate; if conditional independence fails, the prediction interval is not valid. The source’s observed aggregate is outside the 95 percent interval: “the observed total lies right of the upper bound” [PAGE 5 of 27]. For the authors’ model, the aggregate lies within the interval [PAGE 12 of 27].

Gaussian defender representation and mass operator. The source writes
\[
D_i\sim N(p_i,\sigma_i^2 I),\qquad
\sigma_i=\sigma_0(1+\alpha d_i),\qquad
d_i=\|p_i-p_{\mathrm{shot}}\|.
\]
This is stated as \(D_i\sim N(p_i,\sigma_i^2 I)\) with \(\sigma_i=\sigma_0(1+\alpha d_i)\) and \(d_i=||p_i-p_{shot}||\) [PAGE 9 of 27]. Units: \(p_i\), \(p_{\mathrm{shot}}\), \(d_i\), \(\sigma_0\), and \(\sigma_i\) are in meters; \(\alpha\) has units of inverse meters. The defensive mass in area \(A\) is
\[
M_A=\sum_i w_i\sum_{s\in A}g_i(s),
\]
where \(g_i(s)\) is the Gaussian mass of defender \(i\) in subfield \(s\), and \(w_i\) is the distance-scaled influence weight [PAGE 10 of 27]. The source renders “\(w_i=(1-\beta d_i,0)\)” [PAGE 10 of 27], which is dimensionally anomalous; the mathematically coherent interpretation for a scalar weight is \(w_i=1-\beta d_i\) with clipping, but clipping is not stated. Units: \(g_i(s)\) is dimensionless probability mass; \(M_A\) is dimensionless if \(w_i\) is dimensionless; \(\beta\) must have units of inverse meters. Breakdown: if \(\sigma_0=0\) or \(1+\alpha d_i=0\), the Gaussian variance is zero or negative; if \(\alpha d_i=-1\), zero variance; if \(1+\alpha d_i<0\), invalid variance; if \(\beta d_i=1\), zero weight; if \(\beta d_i>1\) and no clipping, negative weight creates negative defensive mass. The chosen values are \(\sigma_0=0.2\), \(\alpha=0.03\), and \(\beta=0.05\) [PAGE 10 of 27].

Logloss operator. The XGBoost objective is binary cross-entropy. For \(p_i=\Pr(Y_i=1)\),
\[
\mathcal{L}=-\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log p_i+(1-y_i)\log(1-p_i)\right].
\]
The source states: “The objective is to minimize logloss (binary cross-entropy)” [PAGE 11 of 27]. With natural logarithms, units are nats per shot. Breakdown: if \(p_i=0\) and \(y_i=1\), or \(p_i=1\) and \(y_i=0\), the loss is infinite; implementations clip probabilities. The source tunes learning rate \(\eta\in\{0.01,0.05,0.1,0.2,0.5\}\), maximum depth in \(\{4,5,6\}\), minimum child weight in \(\{10,20\}\), subsample ratio in \(\{0.8,1\}\), and column sampling ratio in \(\{0.6,0.8\}\) [PAGE 11 of 27].

Team-strength and conditional-independence operators. Team strengths are estimated with a bivariate Poisson model via maximum likelihood [PAGE 14 of 27]. The GCM test is used as a nonparametric conditional-independence test: it asks whether a variable \(X\) adds predictive power for \(Y\) given \(Z\) [PAGE 15 of 27]. The p-values are displayed on a \(-\log_{10}\) scale [PAGE 16 of 27]. Units: p-values are dimensionless; \(-\log_{10}p\) is dimensionless. Breakdown: constant or nearly constant covariates make tests unstable; repeated stepwise testing requires multiplicity discipline; rejection does not establish a causal effect, only conditional predictive contribution.

Feature-selection and stacking operators. The forward stagewise GCM procedure selects “19 relevant variables” [PAGE 21 of 27]. Stacking uses “a logistic regression model on a logit transform of the probabilities from each model” [PAGE 22 of 27], that is
\[
\mathrm{logit}(p)=\log\frac{p}{1-p}.
\]
Breakdown: \(\mathrm{logit}(p)\) is undefined at \(p=0\) or \(p=1\); stacking parameters trained on other leagues assume a degree of exchangeability across leagues; if that fails, the meta-learner can transfer a miscalibrated combination.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage runs from early shot-quality geometry through modern probabilistic xG. The authors explicitly build on “Pollard and Reep, 1997, Robberechts and Davis, 2020” for baseline features such as distance to goal, goal angle, and body part [PAGE 21 of 27]. That lineage treats xG as a probability model, not as a deterministic annotation. The modern layer adds Hudl-Statsbomb’s Gaussian defender representation, attributed to Vatvani, 2022 [PAGE 9 of 27], which itself responds to the instability of integer defender counts: a defender just outside a cone can flip the count from zero to one and create unrealistic xG jumps. The authors extend that idea with distance-scaled variance and distance-scaled influence [PAGE 9 of 27 to PAGE 10 of 27].

The statistical lineage includes XGBoost [PAGE 11 of 27], bivariate Poisson team-strength models [PAGE 14 of 27], the Generalized Covariance Measure conditional-independence test [PAGE 15 of 27], and the “bad control” literature [PAGE 19 of 27]. The player-evaluation lineage includes GAX and residualized GAX, with the source citing Bajons and Kook, 2025 [PAGE 17 of 27]. The retrospective lesson is that xG has moved from “shot geometry” to “shot geometry plus contextual state plus uncertainty plus use-case conditioning.”

Multi-week traps in this genealogy are concrete. Trap one: treating a global model as universal because it is well calibrated on average. The paper’s game-state, foot, and rebound residuals show that average calibration can coexist with situational bias [PAGE 6 of 27 to PAGE 8 of 27]. Trap two: optimizing accuracy because it is intuitive. The source’s own model loses accuracy by 0.0003 while winning AUC and logloss [PAGE 11 of 27]. Trap three: adding team strength everywhere. That helps match prediction [PAGE 16 of 27] but corrupts player evaluation through circularity, especially for Lionel Messi [PAGE 18 of 27 to PAGE 19 of 27]. Trap four: overfitting small-league data with a 29-variable feature set. The authors note that for league-specific data “typically \(N<10000\)” and that noisy features increase overfitting risk [PAGE 19 of 27]. Trap five: ignoring the evaluation clock. A model trained on older seasons and public top-five leagues may not transfer to a current league with different shot mixes. The paper’s league-specific and stacking results are a partial correction [PAGE 21 of 27 to PAGE 22 of 27].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when an analyst under pressure reverts to a single global xG number and a single accuracy table. The source directly challenges that habit: “there exists no ultimate xG model to rule them all” [PAGE 1 of 27]. The recursive problem is that the analyst models the coach, the coach models the player, and the player’s behavior changes with game state and clock. A global model that ignores scoreline and time can misread late-game pressure. The paper finds that the game-state effect “tends to become stronger later in the game” [PAGE 7 of 27]. A crisis habit that ignores the clock will therefore systematically misattribute late-game shot quality to player skill or team quality.

The counter-trap is overcorrection. After learning that team strength improves prediction, an analyst may add attacking strength to every player-evaluation model. The paper’s “bad control” warning is the counter-trap: attacking strength is partly caused by the player being evaluated, so conditioning on it can invert the apparent skill signal. The Messi example is the proof case: his rGAX becomes negative when attacking strength is included [PAGE 18 of 27 to PAGE 19 of 27]. The recursive theory-of-mind lesson is that the analyst must model who is affecting the control variable. If the player affects the control, the control is not exogenous for that player.

The clock has two layers. The game clock is explicit: early 0-45, mid 45-75, and late 75-plus [PAGE 7 of 27]. The evaluation clock is implicit: when a model is trained, what season it represents, and whether the test set is temporally forward. A global model trained on older public data can be strong yet stale for a current league. The league-specific and stacking results show that a local model plus a global model can outperform either alone [PAGE 22 of 27]. The recursive decision rule is: use the global model as a prior, use the local model as a likelihood correction, and use the use-case as the loss function. For match prediction, team strengths are legitimate; for player evaluation, they are a circular control; for small leagues, feature selection is a variance-control device.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto. The paper tested “several aggregated physical performance metrics of the shooter over the 15-75 minutes before the shot (e.g., sprint distance, total running distance)” and concluded: “None of these factors has a meaningful effect on GAX” [PAGE 8 of 27]. Therefore any claim that aggregated sprint distance or running distance adds material xG information is vetoed by this source unless new shot-level or finer-grained tracking evidence is supplied. The veto is not absolute for all physical data; it is a veto for the exact aggregated 15-minute metrics tested here. The physical data are “aggregated in 15-minute intervals” [PAGE 2 of 27], so a null result may reflect temporal aggregation rather than a true absence of a fatigue effect.

Biomechanical-layer veto. The source supports body-part and foot effects: strong-foot average GAX is 0.0091, weak-foot is -0.0106, and other body parts is -0.0078 [PAGE 7 of 27]. The authors’ model reduces those residuals to 0.0014, 0.0024, and -0.0054 [PAGE 13 of 27]. A claim that foot dominance is irrelevant is therefore vetoed. A claim that “other body part” is fully solved is also vetoed because the residual remains -0.0054. The biomechanical layer should be represented through shot body part, shot technique, and strong-foot category, all present in the feature list [PAGE 26 of 27 to PAGE 27 of 27].

Weather-layer veto. The source’s feature list contains no weather variable: Table 7 lists shot type, technique, body part, distances, angles, defender counts, density, rebound, game state, time interval, strong foot, Gaussian masses, and team strengths [PAGE 26 of 27 to PAGE 27 of 27]. There is no wind, rain, temperature, pitch condition, or altitude variable. Therefore a weather-based xG claim cannot be adjudicated from this source and is vetoed as unsupported by the provided evidence. A cross-layer claim such as “rain plus fatigue reduces shot quality” is doubly unsupported: weather is absent, and the tested physical aggregates are null [PAGE 8 of 27]. The correct adjudication is not “weather is false”; it is “weather is outside the source’s evidentiary boundary.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Calibration-bin veto. Verifiable setup: sort held-out shots by H-SB xG, form twenty equal-sized bins, and compute observed goal rate minus mean xG in the 0.1 to 0.3 range. Prediction from the source: H-SB will show positive observed-minus-predicted bias in that range, because “the dots consistently lie above the dashed line” [PAGE 4 of 27]. The authors’ model should reduce the absolute gap across bins [PAGE 12 of 27]. Veto condition: if the implementation finds no positive gap for H-SB, or if the authors’ model has a larger absolute gap in that range, the claimed calibration correction is not verified. Secondary veto: if the binning uses unequal bin widths, the result is not comparable to the source’s twenty equally sized groups.

Scenario 2: Poisson-Binomial interval veto. Verifiable setup: fix the xG vector, compute the Poisson-Binomial CDF, and check whether the observed aggregate goal count lies inside the 95 percent interval. Prediction: H-SB’s observed aggregate lies to the right of the upper bound [PAGE 5 of 27]; the authors’ model lies within the interval [PAGE 12 of 27]. Veto condition: if H-SB’s observed aggregate is inside the interval, the feature-sufficiency critique is not reproduced; if the authors’ model is outside the interval, its improved-calibration claim is not sufficient. Additional veto: if the code treats xG as a probability outside \([0,1]\), or if it ignores conditional dependence, the test is invalid.

Scenario 3: Rebound-residual veto. Verifiable setup: compute average GAX for rebound and non-rebound shots for both models. Prediction: H-SB rebound GAX is 0.0104 and non-rebound is 0.0023 [PAGE 8 of 27]; the authors’ model reduces rebound GAX to 0.0081 and non-rebound GAX to exactly 0.0000 [PAGE 14 of 27]. Veto condition: if the authors’ model does not reduce rebound GAX relative to H-SB, or if its non-rebound GAX is not near zero, the claimed rebound-bias correction fails. Stronger veto: if rebound status is defined as “within three seconds of prior shot in same possession” but the implementation uses a different window or crosses possession sequences, the comparison is not verifiable against the source definition [PAGE 2 of 27 to PAGE 3 of 27].
</RLVR_COUNTERFACTUAL_VETOES>
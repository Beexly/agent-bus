---
source: "2023 - Leveraging PFF Data to Identify Off-the-Ball Runs in Soccer through NFL Route Running - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: deepseek/deepseek-v4.1-flash-1017
words: 4807
---

<NATIVE_REASONING>
We need answer per strict format, no betting lines. Need deep >=1000 words exact XML sections. Need use source page citations [PAGE 1], verbatim quotes. Need formal LaTeX units assumptions singularities. Need mention this is methodology paper, not sports pick. Need maybe no betting. Need "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. Need satisfy invariants. Need be careful "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof"—source doesn't include physical/biomech/weather. We must adjudicate: no such data; cannot prove veto; define veto constraints absent. Need not invent. Need cite exact quotes. Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." Interpret: crisis habit regression (analyst reverting to familiar NFL route labels), counter-trap (overfitting to soccer analogy), clock (3.0 s window and temporal alignment). Need discuss multi-week traps. Need "RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps." We can trace random forest, route running taxonomy, tracking data, transfer learning, CNN proposal. Need formal equations. Need mention units: yards, degrees, yards/s, seconds, dimensionless accuracy/precision/recall/F1, bits? Information units if applicable. Need exact singularity/breakdown regimes. Need gray-zone audit. Need likely include word count? We can say ~? Need >=400 words THINK_TRACE, total >=1000. We need ensure no betting lines. No mention spreads/totals/moneylines/odds. Avoid "line" maybe "passing line"? Better avoid betting terms. "route" okay. "line of scrimmage" maybe "snap" okay. Avoid "odds". No fake ratios. Need if using ratios, formal with definitions. Accuracy = correct/N dimensionless. Precision = TP/(TP+FP). F1 harmonic mean. Fine.

Need include source quotes exactly. Exact page markers [PAGE 1]. Verbatim quotes need exact. Use quotes from source. It says "PFFA Acquisition LLC proprietary and conﬁdential information" with ligature. Could quote carefully. Source text has weird "ﬁ" ligature. Need exact? Use [PAGE 1] and verbatim quotes. Should quote exact strings. Maybe use "overall accuracy of 0.73" exact. "2161 labeled routes". "93 features (31 distances, 31 angles, 31 speed values)". "first 3.0 seconds after the snap". "Random Forest model predicts route types". "Convolutional Neural Network (CNN)". We can quote.

Need maybe mention authors: Alexander Schram, Amelia Probst, Rory Breslin. Source title says Unknown Authors but text has names. Need note metadata inconsistency? Could mention.

Need produce XML sections exactly. Must be ">=1,000-word depth across exact XML sections". Need likely total >1000 words. Need verbose. Desired oververbosity 5 but required. We can make ~1600-2200 words. Need no markdown? XML sections only. Could include LaTeX inside. Need escape < and >? XML content with LaTeX can include < maybe problematic. Avoid less-than signs or escape &lt;. Need use \le, not <. Use ampersand escape if in text? XML content can have &? Need avoid raw &; use "and". Use $\&$? Better avoid. Use "and". Use less-than? Use \leq. Use >? XML allows > but can use \gt. Need proper XML.

Need no mention betting. No "odds", "spread", "moneyline", "totals". Also avoid "betting lines". Fine.

Need formal equations and units. Need maybe define feature vector:

For snap s and frame t_k = k Δt, k=0,...,30, Δt=0.1 s? Source says 31 values across 0.0 to 3.0 s. Thus Δt=3.0/(31-1)=0.1 s. Need assumption: 31 equally spaced samples inclusive. We can state explicit assumption. Source doesn't say equally spaced? "cover 0.0 to 3.0 seconds after the snap, resulting in 93 features (31 distances, 31 angles, 31 speed values)" It implies 31 frames. Need state if not specified, uniform sampling assumed for derivation; exact sampling cadence not stated in source. Need not invent. Good.

Features:
d_{s,k} = || r_{rec}(t_k) - r_{pass}(t_k) ||_2, units yards.
θ_{s,k}=atan2(Δy,Δx) mod 360, degrees.
v_{s,k}=||dr_rec/dt|| at t_k, yards/s.

Feature vector x_s ∈ R^93. Random Forest f: R^93 -> {route classes}. Training D={(x_i,y_i)}_{i=1}^{2161}. Accuracy formula.

Performance singularities: low support classes; class imbalance; precision undefined if TP+FP=0; recall undefined if positives=0; F1 undefined if precision+recall=0; angular wraparound singularity at 0/360; zero speed angle undefined; coincident receiver-passer distance zero making angle undefined; coordinate origin dependence? Maybe distance zero singular. Sampling alias at Nyquist if cadence not captured; 3.0s truncation censoring late breaks. Random forest extrapolation breakdown outside training support. Transfer mapping breakdown if soccer off-ball run lacks NFL analogue. CNN transition risk overfitting small games (3 games).

Need "gray-zone audit": classification of ambiguous routes, label noise, playbook route vs actual path, defensive coverage not included, passer data? They use receiver-passer distance and angle and receiver speed. No defender data. Need mention "off-the-ball runs in soccer" lack categorization; mapping may be gray. Need "multi-hop derivation" from PFF/Next Gen Stats to soccer snaps to model.

Need "RETROCAUSAL_GENEALOGY": NFL route running taxonomy; sports analytics tracking; random forests; transfer learning analogy; PFF. Multi-week traps: 1) treating 73% overall accuracy as universal; 2) conflating NFL route labels with soccer tactical runs; 3) using only 3 games and one NFL week; 4) expanding dataset without stratification; 5) premature CNN transition. Need maybe "multi-week" means over weeks of project? We can interpret.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need maybe as analyst behavior. Crisis habit regression: under uncertainty, analyst returns to NFL route repertoire (xo, xl, etc.) and forces soccer runs into it. Counter-trap: analyst overcorrects by rejecting NFL taxonomy entirely or overfits to three matches; need counterfactual. Clock: 3.0s and soccer snap segmentation; recursive ToM of defenders/players? We can mention model should infer player intention? But source doesn't include. Need not overdo.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Source lacks weather, biomechanics. We must state no veto can be proven from source. Define necessary evidence to veto: weather variables, pitch, biomechanical speed/accel limits. "Veto proof" = cannot assert physical plausibility beyond data. The model only uses receiver-passer distance/angle/speed; no acceleration, orientation, defender, weather. Thus cross-layer veto remains unresolved. Need mention if proposed deployment uses physical claims, must be vetoed until validated. Need maybe "weather" not in source; any weather adjudication would be unsupported. Need formal constraints:
0 ≤ d ≤ field diagonal maybe 105m? But source uses yards; soccer field dimensions vary. We shouldn't invent exact. Could state bounds are field-dependent and not specified. Speed v likely bounded by human sprint, but no source; do not invent. Weather variables absent.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create scenarios with observable predictions. Need no betting. Scenarios:
1. Class-support veto: If a route class has support n_c below threshold (e.g., n_c < 30) then report no precision/recall/F1 or wide CI; prediction: metrics unstable and F1 variance high across cross-validation. Verifiable by checking training counts and per-class metrics. Need avoid invented ratio? It's a threshold, not fake ratio. Fine. Maybe "n_c < 30" assumption. Predictions: classes 8 and xl with low support show lower performance. Source says "8 and xl encountering challenges" and "route types with low support" in discussion. Good.
2. Temporal-window veto: If event's run signature occurs after 3.0s or requires more than 31 samples, model cannot identify; prediction: accuracy drops for delayed runs. Verifiable by truncating features at 2.0/2.5/3.0 and checking accuracy monotonic? Source says 3.0s. Predictions: truncation before break reduces recall for routes requiring late break. Need check no fake. Good.
3. Cross-sport label-ontology veto: If soccer run has no admissible NFL analog under predefined mapping, route label is invalid. Prediction: inter-annotator agreement low; classifier confidence not calibrated; abstention needed. Verifiable by human annotation audit. Source: "off-the-ball runs in soccer lack such categorization". Good.
Could include 4th? Need 3 exactly. Add prediction and verification.

Need maybe include "RLVR" as "verifiable reward" but no need.

Need "ZERO TOY EQUATIONS": We can include formal equations. Be careful not to invent "Force / Fatigue". Good.

Need maybe mention "proprietary and confidential" quote. Good.

Need exact XML tags. Need no extra outside? We can output only sections. Need sections exact:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need ensure word count. Let's draft ~2000 words. Need no raw ampersand. Avoid "R&D". Use "and". Avoid "<" in text. Use \leq. In XML, LaTeX with backslashes okay. Need not escape underscores? XML text allows underscores. Use \( ... \) okay. Need braces okay. Need no raw "&". Avoid "TP/(TP+FP)" no ampersand. Good.

Potential issue XML content with "≤" okay. Use Unicode? Fine. Use \le. Use "degrees" no degree symbol maybe okay. Use "0.73" dimensionless.

Need maybe include "I cannot verify the PDF beyond the supplied page". Good.

Need cite exact [PAGE 1] markers. Every section with quotes? Requirement says when source pages provided, cite exact markers and verbatim quotes. We should include at least one quote per relevant section maybe. Need exact quote in each? Not necessary but better. Use [PAGE 1] with quotes.

Need quote exact strings:
- "We aim to connect (American) football and soccer by spotting oﬀ-the-ball runs in soccer, akin to NFL routes." Note "oﬀ" has ligature ff? Source: "spotting oﬀ-the-ball" uses "ﬀ" ligature? It shows "oﬀ-the-ball" with "ﬀ". We can copy exact? It may be difficult. Use simpler exact quotes without ligature? Need verbatim. Quote "off-the-ball runs in soccer lack such categorization" but source has "oﬀ-the-ball". Could use "runs, executed by players without the ball, aim to exploit gaps in defense and create passing opportunities." Exact? Source: "These runs, executed by players without the ball, aim to exploit gaps in defense and create passing opportunities." Good.
- "Our study employs machine learning techniques trained on labeled NFL route data to identify and categorize soccer oﬀ-the-ball runs." Contains ligature. Maybe quote "machine learning techniques trained on labeled NFL route data" exact substring. Good.
- "first 3.0 seconds after the snap" exact.
- "93 features (31 distances, 31 angles, 31 speed values)" exact.
- "Random Forest model predicts route types after training on 2161 labeled routes." exact.
- "overall accuracy of 0.73" exact.
- "routes 1, 6, h2, h3, h8, and xd performing well, and 8 and xl encountering challenges." exact? Source: "with routes 1, 6, h2, h3, h8, and xd performing well, and 8 and xl encountering challenges." Good.
- "Transitioning to a Convolutional Neural Network (CNN) may enhance accuracy" exact.
- "given CNNs' proﬁciency in capturing spatial relationships" has ligature. Maybe quote without.
- "route types with low support" exact.

Need mention page 1 only. Good.

Need avoid "unknown authors" contradiction? Could mention "The supplied page names Alexander Schram, Amelia Probst, and Rory Breslin, despite the drive label 'Unknown Authors'." This is useful gray-zone. Not necessary.

Need "multi-hop derivation" maybe:
1. NFL NGS frames + PFF play-by-play -> labeled routes.
2. Feature engineering -> 93 features.
3. Random forest -> route probabilities.
4. Soccer Sportlogiq + PFF events -> soccer snaps.
5. Apply classifier -> labels.
6. Evaluate? Source says model performance on football routes? It doesn't explicitly say soccer validation. Important: "Model performance is summarized in Table 1" likely NFL route classification. Need gray-zone: Are reported metrics for NFL held-out routes or soccer transfer? Source doesn't specify. This is crucial. Need state cannot infer soccer transfer accuracy from 0.73. This is a major audit point. Need cite. Good.

Need "singularity/breakdown regimes" per equation:
- d=0 -> angle undefined.
- v=0 -> heading undefined if using velocity direction; but speed itself zero okay.
- θ wrap discontinuity at 0/360 -> model splits same geometry.
- Class counts zero -> precision/recall undefined.
- N=0 -> accuracy undefined.
- 3.0s truncation -> censoring.
- Random Forest piecewise constant -> no smooth extrapolation; out-of-distribution features lead to arbitrary leaf.
- Transfer mapping non-injective -> multiple soccer runs map to same NFL route; inverse not unique.
- CNN with 3 games -> overfit; breakdown if validation not match-level split.

Need "information units" maybe accuracy in dimensionless probability; entropy? Could include if discussing uncertainty:
H(Y) = -Σ p_c log2 p_c bits. Maybe not necessary. But "SI/information/probability units" requirement: include units for features; probability metrics dimensionless; information bits if using entropy. We can include class entropy in bits as diagnostic. Formal equation:
H(Y)=-\sum_c p_c \log_2 p_c \ \text{bits}.
Assumption p_c empirical class frequencies. Breakdown if p_c=0 (0 log 0 =0 by convention). Good. This adds depth.

Need maybe "random forest probability" p_f(y=c|x). Predicted label argmax. Accuracy. Good.

Need "cross-layer veto proof" maybe include "Physical/biomechanical/weather veto proof": no source variables. Formal veto condition:
Veto if ∃ observed variable z outside admissible domain D_z and z is causal for label. But source lacks z. So V=0 (no proof). Need use "not adjudicable". Maybe:
"Let V_cross=1 if a necessary physical, biomechanical, or weather variable z is absent or violates known bounds. From [PAGE 1], the feature set is only d, θ, v; hence z is absent. Therefore V_cross cannot be set to 0 (i.e., cannot certify no veto); the correct status is unresolved/abstain." Need not fake ratio.

Need "Crisis habit regression vs counter-trap vs clock" in recursive ToM:
- Crisis habit regression: model/analyst under distribution shift returns to NFL route priors. In soccer, "off-the-ball runs lack such categorization" so defaulting to NFL categories is a habit regression.
- Counter-trap: overfitting to the three matches; treating "soccer snaps" as exact; rejecting route taxonomy. Need counter-trap detection by held-out match and label audit.
- Clock: 3.0s window. Soccer snap segmentation from possession events; clock alignment not identical; model's temporal horizon imposes a "clock" that may miss late runs. Also recursive ToM of players: runner predicts defender, passer predicts runner; model doesn't include defender data, so it cannot represent recursive beliefs. Need not claim.

Need "RETROCAUSAL_GENEALOGY": historical lineage:
- Route running taxonomy in American football (PFF labels) -> supervised classification.
- Next Gen Stats tracking -> spatial-temporal features.
- Random forests (Breiman) -> ensemble decision trees.
- Transfer learning / cross-domain analogical modeling.
- Sportlogiq broadcast tracking -> soccer event data.
- CNN proposal -> spatial relationship modeling.
Multi-week traps:
Week 1: ontology trap (NFL route labels as universal).
Week 2: sampling trap (one NFL week, three EPL games).
Week 3: metric trap (overall accuracy vs per-class; no soccer validation stated).
Week 4: feature trap (no defender/passer location; only receiver-passer distance/angle/speed).
Week 5: model trap (RF to CNN without baseline and match-level splits).
Need mention "retrocausal" as later design choices re-interpret earlier labels? Maybe.

Need no "betting". Good.

Need maybe output not too long? Let's craft with paragraphs. Need ensure XML well-formed. Use apostrophes fine. Use quotes with curly? Fine. Avoid raw ampersand. Use "and". Avoid "<" except in tags. Use "->" maybe okay but XML allows >. Use "→" maybe. Use "less than" words instead of <. Use \lt? In LaTeX, \lt is not standard? Use \leq. For strict less, use "n_c \leq 30" okay. For "TP+FP=0" no ampersand. Good.

Need "exact [PAGE 1] markers" include multiple [PAGE 1]. Good.

Potential issue: "phrase 'PFFA Acquisition LLC proprietary and conﬁdential information'" contains ligature. Could quote "proprietary and conﬁdential information" exact. Fine.

Need mention "Table 1" not provided. Source says Table 1 summarized; no actual table. Important: cannot verify per-class numbers. Good.

Let's write. Need maybe word count ~1800. Ensure THINK_TRACE >=400 words. It will be ~600. Total ~2000. Good.

Need no "source operators" maybe "operators" = equations and transformations. Good.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied drive source is a one-page conference abstract, not a full paper, so the first audit step is to separate claims that are directly supported from claims that are only projected. The page states: “We aim to connect (American) football and soccer by spotting oﬀ-the-ball runs in soccer, akin to NFL routes” [PAGE 1]. It then describes a supervised pipeline: NFL Next Gen Stats and PFF Play-by-Play data are merged for “the 2021 NFL season's week 1”; the analysis uses “the first 3.0 seconds after the snap”; selected NFL routes are treated as labels; soccer data come from “Sportlogiq broadcast tracking data and PFF event data for the 2022-2023 Premier League season” over “three high-quality games”; and a Random Forest is trained on “2161 labeled routes” [PAGE 1]. The reported result is “an overall accuracy of 0.73” [PAGE 1]. The critical gray-zone issue is that the abstract does not specify whether 0.73 is held-out NFL route accuracy, cross-validated NFL accuracy, or soccer transfer accuracy. Because only one page is available and “Table 1” is referenced but not included, per-class precision, recall, F1, support counts, and validation splits cannot be independently verified. Therefore the only defensible interpretation is that 0.73 is an aggregate model-performance number whose evaluation protocol is under-specified in the supplied source.

A second multi-hop derivation is the feature construction. The page says each NGS frame is enhanced with “receiver-passer distance (in yards), angle between them (in degrees), and receiver speed (in yards per second)” and that these “cover 0.0 to 3.0 seconds after the snap, resulting in 93 features (31 distances, 31 angles, 31 speed values)” [PAGE 1]. This implies 31 temporal samples per snap. The abstract does not explicitly state equal spacing, so any equation using a uniform cadence is an assumption, not a source fact. If 31 inclusive samples span 0.0 to 3.0 s, the implied spacing is 0.1 s, but this should be marked as a reconstruction assumption. The mapping from football to soccer is also not injective: the source says “oﬀ-the-ball runs in soccer lack such categorization” [PAGE 1], so an NFL route class can only be an analogical label, not a soccer-native ground truth. That creates label-ontology risk: multiple soccer runs may collapse into one NFL label, and some soccer runs may have no admissible NFL analog. The discussion acknowledges this pressure by proposing “Additional features, such as passer-receiver location and defender data” and “Transitioning to a Convolutional Neural Network (CNN)” [PAGE 1]. Those are future-work statements, not validated results.

A third audit step is class support. The abstract says routes “1, 6, h2, h3, h8, and xd” perform well, while “8 and xl” encounter challenges, and it proposes expanding the football dataset “particularly for route types with low support” [PAGE 1]. That is consistent with an imbalance/support problem, but the page does not give class counts. Without counts, precision and recall can be unstable, and F1 can be undefined or misleading when denominators vanish. The correct scientific posture is to audit per-class support, compute confidence intervals, and use match-level or week-level splits. The reported 0.73 cannot be generalized to all route types or to soccer without those checks. The abstract also names “Alexander Schram, Amelia Probst, Rory Breslin” on the page, despite the drive label saying “Unknown Authors,” a metadata inconsistency that does not affect the method but should be noted for provenance. The document is marked “PFFA Acquisition LLC proprietary and conﬁdential information” [PAGE 1], so replication is constrained by data access, not only by method.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a snap or soccer snap be indexed by \(s\), and let temporal sample \(k\) be \(t_k\). The source states that features cover “0.0 to 3.0 seconds after the snap” and yield “93 features (31 distances, 31 angles, 31 speed values)” [PAGE 1]. If one assumes 31 inclusive samples at uniform spacing, then
\[
t_k = k\,\Delta t,\qquad k=0,1,\dots,30,\qquad \Delta t=\frac{3.0}{30}=0.1\ \text{s}.
\]
This spacing is an assumption because the abstract does not state the sampling cadence. For receiver position \(\mathbf{r}_{r}(t_k)\) and passer position \(\mathbf{r}_{p}(t_k)\), both in yards,
\[
d_{s,k}=\left\|\mathbf{r}_{r}(t_k)-\mathbf{r}_{p}(t_k)\right\|_{2}\quad [\text{yards}],
\]
\[
\theta_{s,k}=\operatorname{atan2}\!\left(\Delta y_{s,k},\Delta x_{s,k}\right)\bmod 360^{\circ}\quad [\text{degrees}],
\]
where \(\Delta x_{s,k}=x_{r}(t_k)-x_{p}(t_k)\) and \(\Delta y_{s,k}=y_{r}(t_k)-y_{p}(t_k)\). Receiver speed is
\[
v_{s,k}=\left\|\frac{d\mathbf{r}_{r}}{dt}\Big|_{t_k}\right\|_{2}\quad [\text{yards per second}].
\]
The feature vector is
\[
\mathbf{x}_s=\left(d_{s,0},\dots,d_{s,30},\theta_{s,0},\dots,\theta_{s,30},v_{s,0},\dots,v_{s,30}\right)\in\mathbb{R}^{93}.
\]
The Random Forest classifier is a function
\[
f:\mathbb{R}^{93}\rightarrow\{1,\dots,C\},
\]
trained on \(N=2161\) labeled routes, as stated: “A Random Forest model predicts route types after training on 2161 labeled routes” [PAGE 1]. If \(p_f(c\mid\mathbf{x}_s)\) is the forest's estimated class probability, the predicted route is
\[
\hat y_s=\arg\max_{c\in\{1,\dots,C\}} p_f(c\mid\mathbf{x}_s).
\]
Aggregate accuracy is
\[
\mathrm{Accuracy}=\frac{1}{N_{\mathrm{eval}}}\sum_{i=1}^{N_{\mathrm{eval}}}\mathbf{1}\{\hat y_i=y_i\}\quad [\text{dimensionless}],
\]
and the source reports “an overall accuracy of 0.73” [PAGE 1]. Per-class precision and recall are
\[
\mathrm{Precision}_c=\frac{TP_c}{TP_c+FP_c},\qquad
\mathrm{Recall}_c=\frac{TP_c}{TP_c+FN_c},
\]
with dimensionless values. The F1 score is
\[
F1_c=\frac{2\,\mathrm{Precision}_c\,\mathrm{Recall}_c}{\mathrm{Precision}_c+\mathrm{Recall}_c}.
\]
Exact singularity regimes: if \(TP_c+FP_c=0\), precision is undefined; if \(TP_c+FN_c=0\), recall is undefined; if precision plus recall is zero, F1 is undefined. If \(N_{\mathrm{eval}}=0\), accuracy is undefined. If \(d_{s,k}=0\), the angle \(\theta_{s,k}\) is undefined because the receiver-passer displacement has no direction. If \(v_{s,k}=0\), speed is defined as zero but any velocity-heading derivative is undefined. Angular wraparound at \(0^{\circ}\) and \(360^{\circ}\) is a discontinuity: two geometrically identical directions can be separated in feature space unless encoded with sine and cosine. The 3.0 s cutoff is a censoring boundary: runs whose decisive break occurs later than 3.0 s are structurally unrepresentable. Random Forests are piecewise-constant and do not extrapolate smoothly; out-of-distribution feature vectors can fall into arbitrary leaves. The transfer mapping from soccer to NFL route labels is non-injective, so the inverse assignment is not identifiable. An optional class-entropy diagnostic is
\[
H(Y)=-\sum_{c=1}^{C}p_c\log_2 p_c\quad [\text{bits}],
\]
with \(p_c\) the empirical class frequency and the convention \(0\log_2 0=0\). This is a diagnostic only; the source does not report it. The abstract states that “8 and xl” encountered challenges and that low-support route types need more data [PAGE 1], which is consistent with support-dependent breakdown, but the actual support counts and Table 1 are absent from the supplied page.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from American-football route taxonomy to tracking-data feature engineering to cross-domain supervised classification. PFF route labels provide the supervised target; Next Gen Stats provide spatial-temporal coordinates; the abstract converts each frame into distance, angle, and speed; and a Random Forest maps the resulting 93-dimensional vector to route types. The source explicitly says the goal is to use “machine learning techniques trained on labeled NFL route data to identify and categorize soccer oﬀ-the-ball runs” [PAGE 1]. Historically, this is a transfer-by-analogy design: an established label system from one sport is projected onto another sport where the source says such runs “lack such categorization” [PAGE 1]. The later proposal to move to a CNN is also genealogically consistent with spatial pattern recognition, but it remains a proposed extension, not an evaluated result: “Transitioning to a Convolutional Neural Network (CNN) may enhance accuracy” [PAGE 1]. A retrocausal reading is that the NFL label set is treated as a prior that shapes what counts as a detectable soccer run; later model failures may therefore be caused by the earlier ontology choice, not only by the classifier.

Multi-week traps are identifiable. First is the ontology trap: assuming NFL route classes exhaust the meaningful space of soccer off-ball runs. The page itself warns that soccer runs “lack such categorization” [PAGE 1], so the mapping is analogical. Second is the sampling trap: one NFL week and “three high-quality games” in soccer are narrow supports; expanding data without stratifying by route class, match, and tactical context can inflate aggregate accuracy. Third is the metric trap: “overall accuracy of 0.73” [PAGE 1] is aggregate and can hide poor per-class performance, especially for “8 and xl” and for “route types with low support” [PAGE 1]. Fourth is the feature trap: the abstract lists receiver-passer distance, angle, and receiver speed, but discussion says “Additional features, such as passer-receiver location and defender data” are only considered [PAGE 1]. Without defender state, the model cannot distinguish an open run from a covered run with the same receiver trajectory. Fifth is the model-transition trap: moving from Random Forest to CNN before establishing match-level validation and a soccer-native label audit would confuse capacity gains with construct validity. Sixth is provenance risk: the page is marked “PFFA Acquisition LLC proprietary and conﬁdential information” [PAGE 1], so independent replication requires controlled data access and careful documentation of splits and label definitions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the analyst, facing ambiguous soccer off-ball movement, retreats to the familiar NFL route repertoire. The source supplies the exact pressure point: “oﬀ-the-ball runs in soccer lack such categorization” [PAGE 1]. Under uncertainty, the habitual move is to force a soccer run into a route label such as a crossing or post-like pattern because the NFL class exists, not because the soccer action is tactically equivalent. The counter-trap is the opposite overcorrection: rejecting the cross-sport analogy entirely, or overfitting to the “three high-quality games” and treating their local patterns as universal. A disciplined counter-trap is to require an explicit admissibility mapping, report abstentions for non-analogous runs, and validate on held-out matches. The clock trap is temporal: the model uses “the first 3.0 seconds after the snap” [PAGE 1], but soccer “snaps” are constructed from “consecutive events involving ball possession” [PAGE 1], so the two clocks are not the same event structure. A run that begins after the constructed possession event, or whose decisive separation occurs after 3.0 s, is invisible to the feature window. The recursive theory-of-mind issue is that a runner's action is conditioned on a defender's expectation, and a passer's action is conditioned on the runner's expected break; the supplied feature set contains receiver-passer distance, angle, and receiver speed but no defender data. Therefore the model can represent the runner's kinematics relative to the passer, but it cannot represent the defender's belief state or the passer-runner mutual anticipation. The correct adjudication is not to claim mind-reading; it is to treat the classifier as a kinematic labeler and to add defender and contextual variables before making tactical-intent claims. The “clock” also creates a recursion for evaluation: if labels are assigned by humans watching full clips, but the model sees only 3.0 s, then disagreement may be a window mismatch rather than model error. The audit should align annotation windows with model windows and report abstention when the window is insufficient.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto question asks whether physical, biomechanical, or weather evidence can veto the route-label inference. On the supplied page, it cannot be proven either way because those layers are absent. The model features are only “receiver-passer distance (in yards), angle between them (in degrees), and receiver speed (in yards per second)” [PAGE 1]. There is no acceleration, deceleration, change-of-direction load, body orientation, pitch condition, wind, temperature, rain, or surface variable reported. Therefore any claim that a labeled run is physically impossible, biomechanically implausible, or weather-invalidated would be unsupported by the source. The correct status is “unresolved veto,” not “no veto.” Formally, let \(z\) be a necessary cross-layer variable such as local wind vector, surface friction, or defender proximity. The model's feature map is \(F(\mathbf{x}_s)\) with \(\mathbf{x}_s\) containing only \(d\), \(\theta\), and \(v\). If \(z\notin\mathbf{x}_s\), then no function of the supplied features can certify a cross-layer veto condition involving \(z\). The only defensible cross-layer proof is negative: the source does not provide sufficient physical or environmental evidence to validate or invalidate a label at that layer. The “3.0 seconds after the snap” window [PAGE 1] further limits biomechanical inference because late deceleration and cutting may occur outside the window. A deployment that claims physical plausibility must add explicit variables and define admissible bounds; until then, cross-layer adjudication must abstain or flag the label as kinematic-only.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Class-support veto. Verifiable condition: for any route class \(c\), training support \(n_c\) is at or below a pre-registered minimum, for example \(n_c\leq 30\). If the class-support threshold is not met, the model must not report a stable per-class precision, recall, or F1; it must report support, confidence interval, and abstention. Prediction: classes with low support, especially those the source says are challenging such as “8 and xl,” will show high variance across resampling and lower per-class F1 than high-support classes [PAGE 1]. Verification is direct: count labels in the 2161 training routes and compare per-class metrics across week-level or match-level splits. The source already notes “route types with low support” as a limitation [PAGE 1], so this veto is source-grounded.

Scenario 2: Temporal-window veto. Verifiable condition: if a labeled run's discriminating event occurs after the 3.0 s cutoff, or if truncating the input to 2.0 s or 2.5 s materially changes the predicted class, then the label is window-dependent and cannot be treated as a stable route identification. Prediction: recall for late-breaking routes will fall when the window is shortened, while early-breaking routes will be comparatively stable; the reported “overall accuracy of 0.73” [PAGE 1] will not hold uniformly across window lengths. Verification is a controlled ablation: retrain or re-evaluate the same model at 1.0 s, 2.0 s, 2.5 s, and 3.0 s windows and compare per-class recall and confusion matrices. This veto follows directly from the source's “first 3.0 seconds after the snap” design [PAGE 1].

Scenario 3: Cross-sport ontology veto. Verifiable condition: if a soccer off-ball run has no admissible NFL analog under a pre-registered mapping, or if independent annotators cannot agree on the mapped NFL label, then the route label is invalid for that run and the model must abstain rather than force a class. Prediction: inter-annotator agreement will be lower for soccer runs that lack a clear NFL analogue, and model confidence will be poorly calibrated on those runs; forced labeling will inflate apparent coverage but reduce label validity. Verification is a human audit of a stratified soccer sample, with agreement statistics and adjudication of disputed cases. This veto is grounded in the source's statement that “oﬀ-the-ball runs in soccer lack such categorization” [PAGE 1]. It also blocks the crisis habit of treating the NFL route set as a universal ontology.
</RLVR_COUNTERFACTUAL_VETOES>
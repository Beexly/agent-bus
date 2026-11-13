---
source: "2017 Football Route Identification.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5533
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about American Football Route Identification using Supervised Machine Learning. I need to provide a deep analysis across specific XML sections with strict invariants.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let me carefully extract the source content:

Paper: "American Football Route Identification Using Supervised Machine Learning" by Hochstedler, Jeremy & Paul T. Gagnon, Telemetry Sports, 2017 Research Papers Competition.

Data:
- 2014 regular season Indianapolis Colts base-offensive plays
- 231 total plays (base offensive pass plays)
- Base offense definition: 1st & 2nd down, less than 15-point differential, greater than five minutes remaining in a half, between the 20 yard lines
- Spatial coordinates captured from "All 22" game video at 3 frames per second to nearest 0.25 yard
- After removing screen plays, analyzed routes of slot receivers or wide receivers, leaving 548 player routes
- 11 route types in Table 1:
  0: under (drag, shallow cross) - 31
  1: out (flat, arrow, whip, quick out) - 70
  2: slant - 30
  3: hitch - 15
  4: hook (curl, stop) - 44
  5: comeback (deep out) - 22
  6: dig (drive, cross) - 123
  7: corner (flag) - 23
  8: post (bang) - 50
  9: go (fly) - 121
  11: wheel (release, out-and-up) - 19
  Note: Route 10 seems missing/skipped.

Feature Extraction:
- Routes captured until max 15 frames/5 seconds (3 Hz) or forward pass
- Three components: stem, pivot, branch
- Stem: initial segment from start point (snap, t=0) to pivot (re-direction) point
- Branch: final component
- Segmented Euclidean regression: minimize sum of Euclidean distances for two-segment linear regression
- Equation: minimize f_p = sum over i? The text shows:
  minimize 𝑓p = 𝑥+,
  - −𝑥/,
  - + 𝑦+,
  - −𝑦/,
  -
  2 ,34
  subject to 0 < p < n
  where r = regression path, t = true path, p = pivot point
  
  Actually looking at the garbled text: "minimize 𝑓p = 𝑥+,
  - −𝑥/,
  - + 𝑦+,
  - −𝑦/,
  -
  2 ,34" - this seems like a sum of squared Euclidean errors: sum over i of (x_r,i - x_t,i)^2 + (y_r,i - y_t,i)^2.

- Additional pivot points near true pivot tested (5x5 grid illustration, order of magnitude smaller spread and order of magnitude more test points in algorithm)

- Table 2: Stem Length (yds) and Branch Heading (deg. from East)
  slant: 4.0, 136°
  comeback: 13.9, -63°
  out: 4.8, 0°
  dig: 10.9, 172°

- Average speed: v = (x2 - x1? + y2 - y1?) / 3f? Wait the text shows:
  𝑣= 𝑥2 - + 𝑦2 - / 3𝑓
  where f = total number of frames, xn, yn = final position coordinates
  This looks garbled too. Probably v = sqrt((xn-x0)^2 + (yn-y0)^2) / (f/3) or total path length / time. Actually it says "simple average over the duration". The equation shown: v = (x2 - ... + y2 - ...) / 3f. Likely meant displacement magnitude divided by time (f frames / 3 Hz = f/3 seconds). Or maybe total Euclidean distance traveled divided by time. But the text is garbled: "𝑣= 𝑥2 - + 𝑦2 - / 3𝑓". I should interpret carefully but note the source's presentation.

- Final Route Location: final position coordinates (xn, yn) relative to initial position at snap.

- Five features total: stem length, branch heading, average speed, final x, final y.

Model Training:
- 1:1 train-to-test ratio: 548 routes split into 274 train / 274 test
- Algorithms: Naive Bayes, k-Nearest Neighbors, Random Forest, Logistic Regression, SVM

Results:
- Precision = tp / (tp + fp)
- Recall = tp / (tp + fn) [source shows tp/(tp+f2) but clearly fn]

- Table 3 (Naive Bayes confusion matrix details, test set n=274):
  comeback: P=0.36, R=0.45, Count=11
  corner: P=0.33, R=0.08, Count=13
  dig: P=0.85, R=0.65, Count=68
  go: P=0.80, R=0.71, Count=68
  hitch: P=0.25, R=0.57, Count=7
  hook: P=0.56, R=0.50, Count=18
  out: P=0.71, R=0.77, Count=31
  post: P=0.59, R=0.79, Count=28
  slant: P=0.65, R=1.00, Count=11
  under: P=0.83, R=0.83, Count=12
  wheel: P=0.54, R=1.00, Count=7
  total/avg: P=0.70, R=0.68, Count=274

- Table 4 max precision/recall per classifier:
  Naive Bayes: 0.70 / 0.68
  kNN: 0.68 / 0.68
  Random Forest: 0.66 / 0.64
  Logistic Regression: 0.57 / 0.62
  SVM: 0.45 / 0.29

Conclusion:
- Naive Bayes most accurate yet mediocre
- Process/feature selection is main takeaway
- Limitations: small training samples, RFID data has better resolution (10 Hz vs 3 Hz here)
- Future work: route combinations contributing to play outcomes, synthesized route datasets

Now I need to structure the response with the exact XML sections.

Important: The user said ">= 1,000-WORD DEPTH across these exact XML sections". So total words across all sections should be at least 1000. THINK_TRACE alone >=400 words.

I need to be careful about:
- No betting lines whatsoever.
- Formal LaTeX equations with units.
- Exact page citations [PAGE N].
- Verbatim quotes where appropriate.
- Breakdown regimes / singularity conditions.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Discuss the data pipeline: All-22 video at 3 Hz, 0.25 yard resolution, 231 plays, 548 routes.
- Derive information-theoretic limits: 11 classes, imbalanced distribution (dig 123, go 121, out 70, post 50, hook 44, under 31, slant 30, corner 23, comeback 22, wheel 19, hitch 15). Total 548.
- Class imbalance: minority classes hitch (15), wheel (19), comeback (22) have high variance in precision/recall estimates. With 274 test samples, expected counts roughly half: hitch ~7-8, wheel ~9-10, comeback ~11. Table 3 confirms these small counts (hitch 7, wheel 7, comeback 11). This means precision/recall for minority classes are statistically unstable (binomial standard error sqrt(p(1-p)/n) large for small n).
- Gray zones: option routes (out/arrow, go/post) mean labels are concept-dependent not trajectory-dependent. The paper admits coaches label by route concept relative to play call, not specific route run. This creates label noise where identical trajectories may receive different labels based on defensive alignment unobserved in the feature set.
- Mirroring assumption: left-side routes mirrored to right side assumes lateral symmetry in route running and defensive coverage, which may not hold for hash-position-dependent routes or boundary vs field side asymmetry.
- Truncation at 5 seconds or forward pass: routes cut off before completion for deep posts/go routes may bias stem/branch features.
- The Euclidean regression pivot detection assumes piecewise linearity with exactly one pivot. Routes with multiple breaks (e.g., option routes, double moves) violate this structural assumption, creating a model singularity when the true path is not in the hypothesis class of two-segment polylines.
- 1:1 train/test split without stratification may yield class distribution skew in small folds.
- 3 Hz vs 10 Hz RFID: Nyquist-type sampling limitation; rapid cuts at 3 Hz may be aliased or missed, pivot point localization error bounded by frame interval.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, citations, breakdown.
- Data sampling: \(f_s = 3\,\mathrm{Hz}\), spatial quantization \(\Delta x = \Delta y = 0.25\,\mathrm{yd}\), \(N_{\text{plays}} = 231\), \(N_{\text{routes}} = 548\).
- Base offense constraints: down \(\in \{1,2\}\), point differential \(<15\) pts, clock \(>300\,\mathrm{s}\) remaining in half, yard line \(\in [20,80]\) (between 20s).
- Segmented Euclidean regression: \(\hat{p} = \arg\min_{0<p<n} \sum_{i=1}^{n} \| \mathbf{r}_i(p) - \mathbf{t}_i \|_2^2\), where \(\mathbf{r}_i(p)\) is the two-segment regression path through pivot \(p\), \(\mathbf{t}_i\) is true trajectory. Units: yards\(^2\) for squared error; pivot index dimensionless \(p \in \{1,\dots,n-1\}\). Breakdown: if route has \(k>1\) pivots, two-segment model is misspecified; residual error does not converge to zero as \(n\to\infty\) if true path is not piecewise linear with one breakpoint.
- Stem length: \(L_s = \| [x_p,y_p] - [x_0,y_0] \|_2\) in yards.
- Branch heading: \(\theta_b = \operatorname{atan2}(y_n - y_p, x_n - x_p)\) in degrees from East (source Table 2). Note atan2 returns radians; converted to degrees. Singularity at \(x_n=x_p, y_n=y_p\) (zero-length branch) undefined.
- Average speed: source garbled but physically \( \bar{v} = \frac{1}{T} \int_0^T \|\dot{\mathbf{x}}(t)\|_2 \, dt \) or discrete \(\bar{v} = \frac{1}{f-1}\sum_{i=1}^{f-1} \|\mathbf{x}_{i+1}-\mathbf{x}_i\|_2 / \Delta t\), with \(\Delta t = 1/3\,\mathrm{s}\), units yd/s. The paper's text shows division by \(3f\) suggesting seconds denominator.
- Final location: \(\Delta \mathbf{x}_f = [x_n - x_0, y_n - y_0]\) in yards relative to snap.
- Feature vector: \(\boldsymbol{\phi} = [L_s, \theta_b, \bar{v}, \Delta x_n, \Delta y_n] \in \mathbb{R} \times [0^\circ,360^\circ) \times \mathbb{R}_{\ge0} \times \mathbb{R}^2\).
- Precision/Recall: \(\mathrm{Prec} = \frac{TP}{TP+FP}\), \(\mathrm{Rec} = \frac{TP}{TP+FN}\). Dimensionless probabilities in [0,1].
- Class prior imbalance: \(P(C=c) = N_c / 548\). For dig: 123/548 ≈ 0.224; hitch: 15/548 ≈ 0.027.
- Test set size \(N_{\text{test}}=274\). Standard error of recall for class c: \(\sigma_{\mathrm{Rec}} \approx \sqrt{\frac{\mathrm{Rec}(1-\mathrm{Rec})}{N_{c,\text{test}}}}\). For hitch with \(N_{c,\text{test}}\approx 7\), even if Rec=0.57, SE ≈ sqrt(0.57*0.43/7) ≈ 0.187, i.e., ±19 percentage points. Gray-zone audit: Table 3 values for hitch, corner, wheel are statistically fragile.
- Confusion matrix normalization: row-normalized? Table 3 shows count per route in test set.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Steve Belichick's Football Scouting Methods (1962) [PAGE 1] outlined QC coach roles. This is the manual genealogy: film breakdown, tagging events/players/actions/play features.
- NFL NextGen Stats / RFID since 2014 [PAGE 1], Zebra Technologies [PAGE 11 reference]. Continuous monitoring.
- The paper's framework automates QC tagging; multi-week trap: opponent tendency identification decays if opponent adjusts route concepts week-to-week (game-plan specific adjustments). Route labels are concept-relative, so a route classified as "out" in Week 3 may be run as "arrow" in Week 4 vs off coverage (option route) [PAGE 3]. The classifier trained on 2014 Colts base offense may not transfer to other teams, schemes, or weeks because route distributions are non-stationary across opponents and game states.
- Base offense filter removes situational football (3rd down, 2-minute drill, red zone outside 20s, blowouts), creating a distribution shift trap: model trained only on base offense may fail in high-leverage non-base situations where route trees differ.
- Multi-week trap: small sample (231 plays, one team, one season) means week-to-week variance in opponent defensive alignment is not represented; the model may overfit to Colts' specific offensive tendencies rather than general route physics.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section should model the strategic interaction: offense chooses route concepts, defense adjusts coverage, offense runs option routes based on defensive alignment (MOFO, off coverage).
- Crisis habit regression: under pressure or late-game, QBs/receivers revert to habit routes (slant, out, hitch) rather than option adjustments. The dataset excludes >15 point differential and late clock, so crisis regression is censored from training data [PAGE 1 base offense definition]. This creates a blind spot: the classifier has never seen crisis-habit routes.
- Counter-trap: defense recognizes the classifier's tendencies (if QC uses it to game-plan) and runs coverage designed to attack the most frequent classified routes (dig/go are most common in data). However, since the tool is for internal QC, not real-time play-calling, the counter-trap is indirect: opponents may not know Colts' classification outputs.
- Clock: base offense requires >5 minutes remaining in half, so 2-minute offense and end-of-half clock management routes are absent. The model's temporal domain is restricted to non-clock-critical football; applying it to 2-minute drill is out-of-distribution.
- Theory of mind recursion: offense thinks defense thinks offense is running dig (most frequent), so offense runs post; defense adjusts to post; offense runs corner. The classifier labels primary tags but misses second-order intent because option routes are conditioned on unobserved defensive alignment.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: field geometry, yard lines, hashes. Mirroring left to right assumes symmetric field; hash position breaks symmetry because route stems starting near hash vs numbers have different available lateral space before sideline. Veto: routes starting within 5 yards of sideline cannot run full out/corner branches without stepping out-of-bounds; the feature extractor does not encode distance-to-sideline, so it may misclassify truncated branches.
- Biomechanical: 3 Hz sampling (333 ms frame interval). A receiver's cut/pivot occurs in ~100-300 ms; at 3 Hz, the pivot frame may be missed or interpolated incorrectly. The segmented Euclidean regression assumes observed nodes bracket the true pivot; if the cut happens between frames, the estimated pivot location error is bounded by player speed times frame interval: \(\epsilon_p \le v_{\max} \Delta t\). For \(v_{\max} \approx 22\,\mathrm{mph} \approx 9.8\,\mathrm{m/s} \approx 10.7\,\mathrm{yd/s}\), \(\Delta t = 1/3\,\mathrm{s}\), error up to ~3.6 yards. This is a physical veto: stem length and pivot location are unreliable for high-speed cuts.
- Weather: paper uses game video; rain/wind/snow not encoded. Wind affects deep go/post trajectories (branch heading drift), precipitation affects cutting acceleration. No weather features in \(\boldsymbol{\phi}\), so model assumes constant conditions. Veto: in high wind, branch heading feature \(\theta_b\) becomes a biased estimator of intended route.
- Sensor resolution: source video 0.25 yd quantization vs RFID 10 Hz. The 0.25 yd spatial quantization error on final location features is \(\pm 0.125\) yd per coordinate; relative final position error up to \(\sqrt{2} \times 0.125 \approx 0.18\) yd, negligible vs route lengths but relevant for short under/hitch routes (~4 yd stem) where it is ~4% error.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or some verification framework. The user wants 3 verifiable counterfactual veto scenarios and predictions. I need to make them concrete, testable, no betting lines.

Scenario 1: Sampling-rate veto. If route trajectories are resampled from 3 Hz to 10 Hz (NextGen Stats), the pivot localization error decreases. Prediction: Naive Bayes precision on dig/go routes increases by >5 percentage points because stem/branch features become less aliased; however, hitch/under (short routes) show <2 pp change because their stems are short relative to quantization error. Verifiable: retrain on 10 Hz subset, compare Table 4.

Scenario 2: Option-route label noise veto. Remove all routes tagged as option variants (out->arrow, go->post) from training/test. Prediction: overall precision rises above 0.70 because label noise decreases, but recall for out/go drops because the model no longer sees the boundary cases; confusion matrix off-diagonal mass shifts from out/arrow and go/post blocks into correct primary classes. Verifiable: stratified subset excluding secondary labels "arrow" and "post" when primary is out/go.

Scenario 3: Non-base situation veto. Apply model trained on base offense to non-base plays (3rd down, red zone, 2-minute drill, >15 pt differential). Prediction: precision collapses below 0.50 and recall below 0.45 because route distributions shift toward comebacks, posts, and crisis-habit shorts; the model's class priors (dig/go dominant) mismatch the test distribution. Verifiable: collect 50 non-base Colts plays, label routes, run classifier, report confusion matrix.

I need to ensure total word count >= 1000. Let me draft carefully, aiming for ~1500+ words to be safe.

Let's write.

Important: I must include verbatim quotes with page citations where I reference specific text. I'll quote key phrases.

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

I must avoid any mention of betting. No spreads, totals, moneylines, odds. I will not mention gambling at all.

I need to be careful with LaTeX formatting. Use proper LaTeX.

Let's start drafting each section mentally then write.

THINK_TRACE: Need >=400 words. I'll write ~500 words.

Start: The source document constructs a supervised classification pipeline from All-22 game video...

Mention: 231 plays, base offense definition [PAGE 1], 548 routes [PAGE 2], 11 classes [PAGE 2-3], imbalanced counts [TABLE 1 PAGE 3], 3 Hz sampling [PAGE 1], 0.25 yard [PAGE 1], mirrored trajectories [PAGE 4], segmented Euclidean regression [PAGE 5], features [PAGE 5-7], train/test 274/274 [PAGE 8], algorithms [PAGE 8], results [PAGE 9-10].

Gray-zone audit: label noise from option routes [PAGE 3], truncation [PAGE 5], class imbalance and small-sample recall variance, mirroring symmetry assumption [PAGE 4], one-pivot structural assumption [PAGE 5].

I'll write it out.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math. Include units and breakdown regimes.

RETROCAUSAL_GENEALOGY: Belichick 1962 [PAGE 1], RFID 2014 [PAGE 1], NextGen Stats [PAGE 1], multi-week trap, non-stationarity, distribution shift.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (censored by base offense filter), counter-trap (dig/go frequency), clock (2-minute drill excluded), second-order option routes.

CROSS_LAYER_VETO_ADJUDICATION: Physical (hash asymmetry, sideline), Biomechanical (3 Hz pivot aliasing, speed*dt bound), Weather (wind/precip unmodeled), Sensor quantization.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions.

Now let's compose. I need to make sure I don't accidentally use a "toy equation" like Force/Fatigue. All equations must be formal and tied to the paper or standard definitions.

Let's check the garbled equations from source:
Page 5: minimize f_p = ... subject to 0 < p < n. I'll render it cleanly as sum of squared Euclidean errors.
Page 8: v = ... / 3f. I'll note the source's presentation and provide the physically consistent interpretation.

I'll cite pages as [PAGE 1], [PAGE 2], etc.

Word count: I'll aim for substantial depth.

Let's write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
The source document constructs a supervised machine-learning pipeline to classify American football receiver routes from spatiotemporal tracking data. The data-generation process begins with the 2014 regular-season Indianapolis Colts base offense, defined as 1st and 2nd down, point differential less than 15, more than five minutes remaining in a half, and between the 20-yard lines [PAGE 1]. From 231 base offensive pass plays, screen plays are removed, leaving 548 slot and wide-receiver routes [PAGE 2]. Spatial coordinates are extracted from All-22 video at 3 Hz to the nearest 0.25 yard [PAGE 1]. This sampling and quantization regime immediately imposes an information-theoretic ceiling: a receiver running at 10 yards per second moves approximately 3.3 yards between frames, so pivot-point localization is aliased at the biomechanical scale of a cut.

The route-label ontology contains eleven primary tags with highly imbalanced class priors [PAGE 2-3, TABLE 1]. Dig (123) and go (121) dominate the distribution, together comprising roughly 44.5% of all routes, while hitch (15), wheel (19), and comeback (22) are rare. Because the train/test split is 1:1 with 274 routes each [PAGE 8], the test-set counts for minority classes are tiny: hitch has 7 test instances, wheel 7, comeback 11 [PAGE 9, TABLE 3]. A recall estimate of 0.57 for hitch therefore carries a binomial standard error near 0.19, meaning the reported precision and recall for corner (recall 0.08, count 13), hitch, and wheel are statistically fragile and likely overfit to idiosyncrasies of the 2014 Colts offensive script rather than generalizable route physics.

A central gray zone is the labeling protocol itself. The paper states that coaches label by route concept relative to the play call, not necessarily the specific route run [PAGE 3]. Option routes introduce label noise because an "out" may become an "arrow" versus off coverage, and a "go/9" may become a "post/8" if the middle of the field is open [PAGE 3]. These conditioning variables—defensive alignment, MOFO status, coverage shell—are not present in the five-feature vector (stem length, branch heading, average speed, final x, final y) [PAGE 5-8]. Consequently, identical observed trajectories can map to different primary labels depending on unobserved defensive context, violating the i.i.d. assumption underlying supervised classification and creating a structural label-noise floor that no amount of 3 Hz trajectory data can resolve.

The feature extraction assumes every route decomposes into exactly one stem, one pivot, and one branch, fit via segmented Euclidean regression [PAGE 5]. The optimization seeks a pivot index p minimizing summed squared Euclidean distance between the two-segment regression path and the true path, subject to 0 < p < n [PAGE 5]. If a route contains multiple breaks (double moves, option releases, or sight adjustments), the one-pivot hypothesis class is misspecified; the residual error does not vanish as the sample grows, and the estimated stem length and branch heading become biased projections of a non-piecewise-linear path. Mirroring all left-side routes to the right side [PAGE 4] further assumes lateral symmetry in route geometry and coverage, an assumption that breaks near the hash marks and sidelines where available lateral space is asymmetric. Finally, routes are truncated at 5 seconds or at the forward pass [PAGE 5], censoring deep post and go branches before completion and biasing branch-heading estimates for vertical concepts. These gray zones imply that the reported maximum precision of 0.70 [PAGE 10, TABLE 4] is an upper bound only within the narrow distribution of base-offense, 3 Hz, single-pivot, concept-labeled 2014 Colts routes; it does not transfer to non-base situations, 10 Hz RFID, or multi-cut route trees without degradation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Sampling and data operators.**  
Spatial sampling rate: \( f_s = 3\,\mathrm{Hz} \), frame interval \( \Delta t = 1/3\,\mathrm{s} \).  
Spatial quantization: \( \Delta x = \Delta y = 0.25\,\mathrm{yd} \).  
Play count: \( N_{\text{plays}} = 231 \); route count: \( N_{\text{routes}} = 548 \); train/test split: \( N_{\text{train}} = N_{\text{test}} = 274 \) [PAGE 1, PAGE 2, PAGE 8].

**Base-offense selection operator [PAGE 1].**  
A play enters the dataset iff  
\[
\text{down} \in \{1,2\}, \quad |\text{score differential}| < 15\,\mathrm{pts}, \quad t_{\text{remaining}} > 300\,\mathrm{s}, \quad \text{yard line} \in [20,80].
\]

**Segmented Euclidean regression [PAGE 5].**  
Let \(\mathbf{t}_i = [x_i, y_i]^\top\) be the true trajectory node and \(\mathbf{r}_i(p)\) the two-segment regression path through candidate pivot \(p\). The pivot estimate is  
\[
\hat{p} = \arg\min_{0<p<n} \; f(p), \qquad 
f(p) = \sum_{i=1}^{n} \left\| \mathbf{r}_i(p) - \mathbf{t}_i \right\|_2^2,
\]  
with units of squared yards. The minimization is over integer pivot indices \(p \in \{1,\dots,n-1\}\). Breakdown regime: if the true path requires \(k>1\) pivots, the model class is misspecified and \(\min_p f(p) > 0\) even as \(n \to \infty\).

**Stem length [PAGE 5, TABLE 2].**  
\[
L_s = \left\| [x_{\hat{p}}, y_{\hat{p}}] - [x_0, y_0] \right\|_2 \quad [\mathrm{yds}].
\]  
Example: slant \(L_s = 4.0\,\mathrm{yd}\); dig \(L_s = 10.9\,\mathrm{yd}\).

**Branch heading [PAGE 5, TABLE 2].**  
\[
\theta_b = \operatorname{atan2}(y_n - y_{\hat{p}},\, x_n - x_{\hat{p}}) \quad [\mathrm{degrees\ from\ East}],
\]  
converted to degrees. Singularity: if \(x_n = x_{\hat{p}}\) and \(y_n = y_{\hat{p}}\) (zero-length branch), \(\theta_b\) is undefined. Example: out \(\theta_b = 0^\circ\); dig \(\theta_b = 172^\circ\).

**Average speed [PAGE 8].**  
The source presents \( v = (x_2 - x_1 + y_2 - y_1) / (3f) \), which is dimensionally inconsistent as written; the physically consistent discrete form is  
\[
\bar{v} = \frac{1}{f-1} \sum_{i=1}^{f-1} \frac{\left\| \mathbf{x}_{i+1} - \mathbf{x}_i \right\|_2}{\Delta t} \quad [\mathrm{yd/s}],
\]  
or equivalently total path length divided by route duration \(f/3\) seconds.

**Final route location [PAGE 8].**  
\[
\Delta \mathbf{x}_f = [x_n - x_0,\; y_n - y_0]^\top \quad [\mathrm{yds}].
\]

**Feature vector.**  
\[
\boldsymbol{\phi} = \big[ L_s,\; \theta_b,\; \bar{v},\; \Delta x_n,\; \Delta y_n \big]^\top \in \mathbb{R} \times [0^\circ,360^\circ) \times \mathbb{R}_{\ge 0} \times \mathbb{R}^2.
\]

**Precision and recall [PAGE 9].**  
\[
\mathrm{Precision} = \frac{TP}{TP + FP}, \qquad \mathrm{Recall} = \frac{TP}{TP + FN},
\]  
dimensionless quantities in \([0,1]\). Naive Bayes test results [PAGE 9, TABLE 3]: dig \(P=0.85,\ R=0.65,\ N=68\); go \(P=0.80,\ R=0.71,\ N=68\); slant \(P=0.65,\ R=1.00,\ N=11\); under \(P=0.83,\ R=0.83,\ N=12\); corner \(P=0.33,\ R=0.08,\ N=13\); hitch \(P=0.25,\ R=0.57,\ N=7\); wheel \(P=0.54,\ R=1.00,\ N=7\); overall \(P=0.70,\ R=0.68,\ N=274\).

**Classifier comparison [PAGE 10, TABLE 4].**  
Maximum total precision/recall: Naive Bayes \(0.70/0.68\); kNN \(0.68/0.68\); Random Forest \(0.66/0.64\); Logistic Regression \(0.57/0.62\); SVM \(0.45/0.29\).

**Small-sample recall variance [PAGE 9].**  
For class \(c\) with \(N_{c,\text{test}}\) test instances, \(\sigma_{\mathrm{Rec}} \approx \sqrt{\mathrm{Rec}(1-\mathrm{Rec}) / N_{c,\text{test}}}\). Hitch with \(N=7\) and \(\mathrm{Rec}=0.57\) yields \(\sigma \approx 0.19\), so the interval is roughly \([0.38, 0.76]\) at one standard error—too wide for reliable QC deployment on that route class.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper explicitly roots its methodology in Steve Belichick’s *Football Scouting Methods* (1962), which outlined the QC coach’s role in breaking down film and tagging events, players, actions, and play features [PAGE 1]. The historical lineage is therefore manual film tagging migrated to automated spatiotemporal classification. Since 2014, the NFL has employed RFID tracking (NextGen Stats) to continuously monitor on-field locations [PAGE 1], but because those data were unavailable for public or competitive scouting at the time of writing, the authors reconstructed a proxy from All-22 video [PAGE 1, PAGE 11 Reference 1].

The multi-week trap is embedded in the base-offense definition. By restricting training to 1st and 2nd down, moderate score differentials, early-half clock, and between-the-20s field position [PAGE 1], the dataset systematically excludes third-down passing, red-zone offense inside the 20, two-minute drill, and comeback situations. Route distributions are non-stationary across game states: vertical concepts (go, post) become more frequent in obvious passing situations, while short, high-percentage routes (hitch, under, out) dominate in negative-game-script or protect-the-lead contexts. A model trained only on base offense inherits the prior \(P(\text{dig}) \approx 123/548 \approx 0.224\) and \(P(\text{go}) \approx 121/548 \approx 0.221\) [TABLE 1, PAGE 3], which will mismatch any non-base game week.

A second multi-week trap is option-route non-stationarity [PAGE 3]. Because labels reflect route concept relative to defensive alignment, an “out” versus off coverage may be re-labeled “arrow,” and a “go/9” may become “post/8” when MOFO [PAGE 3]. Week-to-week, opposing defensive coordinators change coverage shells and alignment, causing the same receiver to run conceptually different routes on identical-looking stems. The classifier, trained on 2014 Colts concepts, cannot observe defensive alignment and therefore cannot track this causal conditioning. If the Colts’ opponents adjust week-to-week—which is the essence of NFL game planning—the feature-label mapping drifts, and the classifier’s precision decays without retraining on current opponent-specific tape.

Finally, the single-season, single-team sample (2014 Colts, 231 plays) creates an ecological trap. Route frequencies are functions of offensive coordinator scheme, quarterback tendencies, and receiver personnel. The model does not learn route physics in a team-invariant sense; it learns the 2014 Colts’ route mixture under 2014 opponents. Applying it to a different team or a later week without domain adaptation is an out-of-distribution inference with unquantified error.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The strategic recursion here operates at three levels: offensive play-calling, defensive coverage adjustment, and the QC classification layer. The paper notes that route labels are concept-relative and that receivers run option routes based on defensive alignment—an “out” becomes an “arrow” versus off coverage, and “go/9” becomes “post/8” versus MOFO [PAGE 3]. This is a first-order theory-of-mind loop: the offense reads the defense and mutates the route. The classifier sees only the trajectory and attempts to invert this mapping without observing the defensive state that triggered the mutation.

Crisis habit regression is censored from the training distribution by design. The base-offense filter removes plays with score differentials greater than 14 points and less than five minutes remaining in a half [PAGE 1]. These are precisely the situations in which quarterbacks and receivers regress to crisis habits—short, high-perception stems (slant, out, hitch) and reduced option complexity. Because the classifier has never seen these contexts during training, it has no representation of crisis-habit route clusters. If deployed in late-game or blowout scenarios, the model will be forced to assign crisis trajectories to base-offense classes, producing systematic misclassification whose direction is predictable: long-developing concepts (dig, go) will be under-predicted, and short stems will be over-assigned to hitch/under/out.

The counter-trap operates on frequency. Dig and go together constitute nearly half the dataset [TABLE 1, PAGE 3]. A defensive coordinator who obtains QC output from this classifier would learn that dig and go are the modal classifications and could adjust coverage to bracket those branches—playing deeper safeties against go and digging underneath against dig. The offense, anticipating this adjustment, runs the counter: post versus over-committed deep safety, corner versus digging linebackers, wheel against man coverage. Because the classifier’s primary tags collapse these second-order adaptations into static labels [PAGE 3], it cannot signal to the coaching staff that the opponent is countering the classifier’s own tendencies. The model is therefore blind to the recursive layer in which the opponent models the Colts’ modeled tendencies.

Clock structure further truncates the theory-of-mind domain. The requirement of more than five minutes remaining in a half [PAGE 1] excludes two-minute offense, end-of-half clock management, and end-of-game desperation routes. In those clock states, route stems compress, branch headings shift toward the sideline or middle of the field based on clock stoppage value, and pivots occur later or not at all. Applying the base-offense classifier to a two-minute drill is a clock-domain violation: the feature distribution (average speed, final location, stem length) is shifted, and the class priors (heavy on dig/go) are no longer valid. The recursive loop breaks because the offense is no longer playing the base-offense game the classifier learned.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical layer.**  
The algorithm mirrors all left-side routes to the right side before training [PAGE 4], imposing lateral symmetry on the field. This vetoes routes whose geometry is hash-dependent. A receiver aligned near the right hash has less lateral room to run an out or corner before reaching the sideline than a receiver near the numbers. The feature vector contains no distance-to-sideline or hash-position variable [PAGE 5-8], so the classifier cannot distinguish a truncated out caused by sideline proximity from a genuine hitch. Veto condition: any route whose branch would terminate within 2 yards of the sideline is physically inadmissible as a full branch, yet the model treats branch heading as unconstrained.

**Biomechanical layer.**  
The 3 Hz sampling interval (\(\Delta t \approx 0.333\,\mathrm{s}\)) aliases receiver cuts. A hard pivot occurs on the order of 0.1–0.3 seconds; the segmented Euclidean regression tests internal nodes as pivots, but if the true cut lies between frames, the estimated pivot location \(\hat{p}\) can err by up to  
\[
\epsilon_p \le v_{\max} \Delta t.
\]  
For an elite receiver at \(v_{\max} \approx 22\,\mathrm{mph} \approx 10.7\,\mathrm{yd/s}\), \(\epsilon_p \le 3.6\,\mathrm{yd}\). This error is comparable to the entire stem length of a slant (\(4.0\,\mathrm{yd}\), TABLE 2) and a significant fraction of an out stem (\(4.8\,\mathrm{yd}\)). Veto condition: routes with stems shorter than \(\approx 4\,\mathrm{yd}\) have stem-length features dominated by sampling aliasing; the classifier’s slant/out/hitch discrimination is physically unverifiable at this resolution. The paper itself anticipates improvement moving to 10 Hz RFID [PAGE 10], which would reduce \(\epsilon_p\) by a factor of roughly three.

**Weather and environmental layer.**  
The dataset is drawn from game video with no weather, wind, or precipitation encoding [PAGE 1-2]. Branch heading \(\theta_b\) is treated as a deterministic property of the route, but wind exerts lateral force on the ball and affects deep-ball timing, causing receivers to adjust branch angles; rain and snow reduce cutting acceleration and alter stem length. Veto condition: in wind above threshold or precipitation, \(\theta_b\) becomes a biased estimator of intended route branch, and the precision reported for go/post/corner (which rely on deep, wind-exposed branches) is not weather-robust.

**Sensor quantization layer.**  
Coordinates are rounded to the nearest 0.25 yard [PAGE 1]. Final-location error per coordinate is bounded by \(0.125\,\mathrm{yd}\), yielding a Euclidean location error up to \(\sqrt{2} \times 0.125 \approx 0.18\,\mathrm{yd}\). For short under routes (mean count 31, TABLE 1) with stems near \(4\,\mathrm{yd}\), this is a \(\approx 4.5\%\) relative error on final position—non-negligible when the class boundary between under and hitch rests on small coordinate differences.

Adjudication: the only layers without hard veto are the final-location coordinates (error small relative to long routes) and broad class separation between dig/go and short routes. All other layers impose conditional vetoes that restrict safe deployment to base-offense, calm-weather, non-sideline-constrained, 3 Hz-or-better data with single-pivot routes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Sampling-rate counterfactual (3 Hz → 10 Hz).**  
Resample all trajectories to 10 Hz (NextGen Stats resolution) while retaining the same 548 routes and labels. The pivot-localization bound \(\epsilon_p \le v_{\max}\Delta t\) falls from \(\approx 3.6\,\mathrm{yd}\) to \(\approx 1.1\,\mathrm{yd}\). Prediction: Naive Bayes precision on dig and go rises by more than 5 percentage points above the Table 3 baseline (dig \(P > 0.90\), go \(P > 0.85\)) because stem length and branch heading become less aliased. Precision on hitch and under changes by less than 2 percentage points because their short stems remain comparable to the quantization error. Verifiable by retraining on the resampled set and comparing against Table 4 [PAGE 10].

**Scenario 2: Option-route label-noise counterfactual.**  
Remove all training and test instances whose secondary labels indicate an option mutation—specifically, out routes secondarily labeled arrow, and go routes secondarily labeled post—leaving only “pure” primary-tag instances [PAGE 3, TABLE 1]. Prediction: overall precision rises above 0.70 because the label-noise floor is removed, but recall for out and go declines because the decision boundary loses the boundary cases that defined those classes; the confusion-matrix off-diagonal mass shifts from out→arrow and go→post into the correct diagonal cells, while the total count for out and go drops by roughly their secondary-label subsets (arrow count unknown from table, but go’s mutation to post is a meaningful fraction of 121). Verifiable by stratifying Table 3 counts by secondary label and recomputing precision/recall on the purified subset.

**Scenario 3: Non-base situation counterfactual.**  
Apply the trained classifier to 50 non-base Colts pass plays (third down, red zone inside the 20, two-minute drill, or score differential \(>14\) points), hand-labeled by the same simplified route tree. Prediction: overall precision collapses below 0.50 and recall below 0.45 because the class-prior mismatch is severe—non-base situations over-sample comebacks, posts, and crisis-habit shorts while under-sampling digs and goes relative to the base-offense prior [TABLE 1, PAGE 3; base filter, PAGE 1]. The confusion matrix will show systematic off-diagonal inflation in hitch/under/out columns and deflated dig/go recall. Verifiable by collecting the 50-play out-of-distribution set, running the Table 3 classifier, and reporting the resulting confusion matrix.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2017 Football Route Identification.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4061
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about American Football Route Identification using Supervised Machine Learning. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text provided covers pages 1-11 (though the user says PAGES: 5, the text includes page markers up to 11). I need to cite exact [PAGE N] markers. Let me look at the page markers in the text:
- Page 1: "2017 Research Papers Competition Presented by: 1" appears after Figure 1
- Page 2: "2017 Research Papers Competition Presented by: 2" appears after Table 1 first part
- Page 3: "2017 Research Papers Competition Presented by: 3" appears after Figure 3
- Page 4: "2017 Research Papers Competition Presented by: 4" appears after Figure 4
- Page 5: "2017 Research Papers Competition Presented by: 5" appears after pivot point equation
- Page 6: "2017 Research Papers Competition Presented by: 6" appears after Figure 6
- Page 7: "2017 Research Papers Competition Presented by: 7" appears after Table 2
- Page 8: "2017 Research Papers Competition Presented by: 8" appears after precision/recall formulas
- Page 9: "2017 Research Papers Competition Presented by: 9" appears after Table 3
- Page 10: "2017 Research Papers Competition Presented by: 10" appears before References
- Page 11: "2017 Research Papers Competition Presented by: 11" appears at end

Wait, the user said PAGES: 5 but provided text that goes to page 11. I should cite based on what's actually in the text. The user might mean the PDF has 5 pages but the extracted text shows page numbers up to 11? Actually looking carefully, the text includes page footers "2017 Research Papers Competition Presented by: 1" through "11". I'll cite these as [PAGE 1] through [PAGE 11] where relevant, but I should be careful. Since the user explicitly said PAGES: 5, maybe I should focus on pages 1-5? But the source text clearly extends beyond. I'll cite the page markers that appear in the provided text.

Let me plan the content:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation & gray-zone audit.
- Discuss the pipeline: RFID/All-22 video at 3 Hz, 0.25 yard resolution, 231 plays, 548 routes.
- Feature extraction: segmented Euclidean regression for stem/pivot/branch, stem length, branch heading, average speed, final route location.
- Classifiers: Naive Bayes, kNN, Random Forest, Logistic Regression, SVM. 1:1 train-test split (274/274).
- Results: Naive Bayes best at precision 0.70, recall 0.68. Per-route variation (slant recall 1.00 but count 11; corner recall 0.08 count 13).
- Gray zones: mirroring left/right routes assumes symmetry; option routes violate static labels; 3 Hz vs 10 Hz RFID resolution; small sample sizes per class (e.g., hitch 7, wheel 7); Euclidean regression assumes piecewise linear trajectory which fails for curved stems; pivot detection sensitivity to noise; class imbalance (dig 123 vs hitch 15); temporal window capped at 5 seconds/15 frames truncates deep routes.
- Multi-hop: from raw coordinates -> mirrored x-coordinates -> segmented regression -> features -> classifier -> QC coach decision support -> game planning. Each hop introduces error.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX, units, page citations, breakdown.
- Data: coordinates [x,y] in yards, resolution 0.25 yard, sampling 3 Hz (Δt = 1/3 s ≈ 0.333 s), duration max 5 s / 15 frames. [PAGE 2]
- 231 plays, 548 routes. [PAGE 2]
- Mirroring: if x < 0, x' = -x (skill left to skill right). [PAGE 4]
- Segmented Euclidean regression: minimize E(xp,yp) = Σ_i || (x_i,y_i) - L(x0,y0,xp,yp,xn,yn; t_i) ||_2 over internal nodes. [PAGE 5]
- Two-segment path: segment 1 from [x0,y0] to [xp,yp], segment 2 from [xp,yp] to [xn,yn]. [PAGE 5]
- Pivot point: p* = argmin_p Σ d_euclidean. [PAGE 5]
- Features: stem length L_stem = ||p* - (x0,y0)||_2 (yards). Branch heading θ_branch = atan2(y_n - y_p, x_n - x_p) converted to degrees from East. [PAGE 5, Table 2 PAGE 7]
- Average speed: v_avg = (1/f) Σ_{i=1}^f ||(x_i,y_i) - (x_{i-1},y_{i-1})|| / Δt, or perhaps total path length / time. Actually text says "simple average over the duration" and formula image not fully rendered, but I can state: v̄ = (1/f) Σ ||Δr_i|| / Δt with units yards/s. [PAGE 7]
- Final route location: (x_n - x_0, y_n - y_0) in yards relative to snap. [PAGE 7]
- Precision: P = tp / (tp + fp). Recall: R = tp / (tp + fn). [PAGE 8]
- Confusion matrix normalized. [PAGE 8]
- Table 4 max precision/recall per classifier. [PAGE 9]
- Breakdown regimes: small N per class (hitch N=7, wheel N=7, slant N=11), 3 Hz temporal aliasing, mirroring assumption breakdown for asymmetric defenses, Euclidean regression singularity when stem length ≈ 0 or branch heading undefined (pivot at endpoint), class imbalance.

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Steve Belichick's Football Scouting Methods (1962) QC coach roles. [PAGE 1]
- NFL RFID since 2014 (Zebra Technologies). [PAGE 1, References]
- NextGen Stats 10 Hz vs 3 Hz here. [PAGE 10]
- Supervised learning lineage: Naive Bayes, kNN, Random Forest, Logistic Regression, SVM.
- Multi-week traps: opponent tendency rot (route labels from Week 1 stale by Week 4 due to scheme adjustments), option routes adapt to defensive alignment (MOFO example go->post), film tagging latency vs automation, human error in manual tagging.
- The "process over product" conclusion: feature extraction matters more than specific classifier.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: QC coaches under time pressure revert to manual film tagging (habit) rather than trusting automated tags, especially after a misclassification crisis (e.g., corner route confused with out).
- Counter-trap: Automation creates over-reliance; coaches may stop verifying film, leading to systematic bias when the classifier fails on rare routes (hook, hitch).
- Clock: 5-second/15-frame window vs play clock; deep routes (go, post) may exceed 5 seconds before pass, causing truncation. Game week timeline: Sunday game -> Monday tags needed -> model must run before Wednesday game plan. Latency constraints.
- Recursive modeling: The coach models the offense, the offense models the coach's model (option routes adjust to coverage), creating a game-theoretic loop. The classifier labels routes, but if opponents know routes are being auto-classified, they may alter alignments to induce misclassification (adversarial route running).

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- Physical: Field geometry (hashes, boundaries, yard markers) used for formation ID. [PAGE 3] Veto: if player starts outside field bounds or formation logic fails (10 positions: LT, LG, C, RG, RT, TE, SR, WR, RB, QB), trajectory is invalid.
- Biomechanical: Receiver acceleration limits, stem length minimum (human can't pivot instantly at snap), branch heading changes constrained by plant-cut biomechanics. Segmented Euclidean regression assumes instantaneous pivot at a single frame; physical reality has finite turn radius. Veto: stem length < ~2 yards or branch heading change > 135° in one frame is physically implausible at NFL speeds.
- Weather: Not explicitly in paper, but All-22 video and tracking affected by precipitation, wind (affects deep route branch heading and final location). Veto: high wind invalidates go/post final location features; rain affects acceleration profiles.
- Mirroring: assumes left/right symmetry, but offensive tackles and defensive alignments are asymmetric; mirrored features may create physically impossible routes relative to actual defensive leverage.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions.
1. Small-sample veto: If route class count N < 15 in test set (e.g., hitch N=7, wheel N=7), precision/recall estimates have high variance (binomial standard error > 0.18). Prediction: Naive Bayes recall for hitch will not replicate at 0.57 on a held-out 2015 Colts dataset; expected collapse to <=0.30.
2. Temporal resolution veto: If sampling drops from 10 Hz (NextGen Stats) to 3 Hz, pivot point localization error σ_p ≈ v * Δt / 2. For v ≈ 8 yards/s, Δt = 0.333 s, σ_p ≈ 1.33 yards. Prediction: stem length feature error exceeds 1 yard for 30% of routes, degrading dig/comeback separation (stem length 10.9 vs 13.9 yards).
3. Mirroring veto: If defensive alignment is asymmetric (e.g., boundary vs field side), mirroring skill-left routes to skill-right introduces domain shift. Prediction: out route precision (0.71) drops by >=0.15 when tested on non-mirrored, naturally occurring right-side routes from a different team with hash-specific tendencies.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. Good.

Need >=1000 words total across sections. Each section should be substantial. THINK_TRACE needs >=400 words.

Need exact [PAGE N] markers and verbatim quotes where source pages provided. I should include verbatim quotes from the text.

Let me draft carefully.

Word count check: I'll aim for roughly 200-250 words per section except THINK_TRACE which needs 400+. Total easily over 1000.

Let's write.

Important: The user said "PAGES: 5" but the text has page numbers up to 11. I'll cite the page numbers visible in the text as [PAGE N]. I'll use the page footer numbers. I should reference the actual page markers present.

Let's compose the XML exactly.

I must not mention betting lines. I won't.

I must not invent fake ratios. I'll use real formulas from the text or clearly derived from the described methodology, stating assumptions.

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a supervised machine-learning pipeline that begins with spatiotemporal tracking data and ends with route labels intended for NFL quality-control (QC) coaches. Hop one is data acquisition: the authors use All-22 game video sampled at three frames per second, with spatial coordinates resolved to the nearest 0.25 yard, for 231 Indianapolis Colts base offensive pass plays from the 2014 regular season [PAGE 2]. “Base offense” is strictly defined as 1st and 2nd down, less than a 15-point differential, greater than five minutes remaining in a half, and between the 20-yard lines [PAGE 2]. From those plays, screen plays are removed and only slot and wide receiver routes remain, yielding 548 labeled player routes across eleven primary tags [PAGE 2]. Hop two is formation identification and coordinate normalization: each receiver’s starting alignment is classified into one of ten positions, and all routes originating on the skill-left side are mirrored so x-coordinates appear as if run from the skill-right side [PAGE 3–4]. This mirroring operation assumes left–right route symmetry, a strong assumption given asymmetric defensive alignments and hash-position effects.

Hop three is feature extraction via segmented Euclidean regression. Each trajectory is modeled as a two-segment piecewise-linear path: a stem from snap (t=0) to a pivot point, then a branch to the route endpoint [PAGE 5]. The algorithm tests every internal node as a candidate pivot, draws straight lines from start to pivot and pivot to end, sums Euclidean distance errors over all data points, and selects the pivot minimizing total error [PAGE 5]. A local refinement spreads additional hypothetical pivot points around the initial minimizer [PAGE 6]. The distilled features are stem length, branch heading (degrees from East), average speed, and final route location relative to snap [PAGE 5–7]. Hop four is classification: a 1:1 train-to-test split creates 274 routes per split, and five supervised learners—Naive Bayes, k-Nearest Neighbors, Random Forest, Logistic Regression, and SVM—are trained [PAGE 7–8]. Hop five is evaluation using precision P = tp/(tp+fp) and recall R = tp/(tp+fn) [PAGE 8]. Naive Bayes achieves maximum overall precision 0.70 and recall 0.68, while SVM trails at 0.45 precision and 0.29 recall [PAGE 9].

Gray-zone audit: (1) Class imbalance is severe. Dig has 123 instances while hitch has 15 and wheel has 19 [PAGE 2]. Test-set counts are smaller still—hitch N=7, wheel N=7, slant N=11—so precision and recall for rare classes are statistically unstable [PAGE 8–9]. (2) The five-second / 15-frame truncation window cuts off deep routes before the forward pass or route completion, biasing branch heading and final location for go and post concepts [PAGE 5]. (3) The Euclidean regression assumes a single instantaneous pivot, yet receiver stems are curved and cuts have finite turn radius; the method has no physical biomechanical constraint [PAGE 5–6]. (4) Option routes violate static labeling: an out can become an arrow versus off coverage, and a go can become a post if MOFO [PAGE 3]. The ground-truth labels therefore contain endogenous scheme dependence that a static feature vector cannot capture. (5) Mirroring left-to-right routes erases boundary-vs-field asymmetry, injecting domain shift when defensive leverage differs by side of formation. Each hop compounds uncertainty, so the “mediocre” Naive Bayes result is not a classifier failure alone but a propagation of sampling, temporal, geometric, and labeling noise through the full stack.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, and breakdown.

Coordinate system and sampling:
- Position vectors r_i = [x_i, y_i] in yards, resolution Δxy = 0.25 yard [PAGE 2].
- Temporal sampling f_s = 3 Hz, so Δt = 1/3 s ≈ 0.333 s [PAGE 2].
- Trajectory window: maximum 15 frames or 5 seconds, whichever occurs first, truncated at forward pass [PAGE 5].
- Dataset size: N_plays = 231 base offensive pass plays; N_routes = 548 slot/wide receiver routes after screen removal [PAGE 2].

Formation and mirroring operator:
- Alignment classified into ten positions: {LT, LG, C, RG, RT, TE, SR, WR, RB, QB} [PAGE 3].
- Mirroring operator M: for any skill-left route with x-coordinate x < 0 relative to formation center, x' = –x, y' = y, producing skill-right coordinates [PAGE 4].

Segmented Euclidean regression:
- Given start r_0 = [x_0, y_0] and end r_n = [x_n, y_n], test each internal pivot r_p = [x_p, y_p].
- Regression path L consists of segment r_0 → r_p and segment r_p → r_n [PAGE 5].
- Objective: p* = argmin_{p ∈ internal nodes} Σ_{i=1}^{n-1} || r_i – L(t_i; r_0, r_p, r_n) ||_2 [PAGE 5].
- Local refinement: spread candidate pivots around p* with an order-of-magnitude smaller spatial spread and order-of-magnitude more test points than the initial grid [PAGE 6].

Feature vector φ ∈ R^5:
1. Stem length: ℓ_stem = || r_{p*} – r_0 ||_2 [yards] [PAGE 5, Table 2 PAGE 7].
2. Branch heading: θ_branch = atan2(y_n – y_{p*}, x_n – x_{p*}) converted to degrees from East [degrees] [PAGE 5, Table 2 PAGE 7].
3. Average speed: v̄ = (1/f) Σ_{i=1}^{f} || r_i – r_{i-1} ||_2 / Δt [yards/s] under the simple average assumption described [PAGE 7].
4–5. Final route location: Δr_final = r_n – r_0 = [x_n – x_0, y_n – y_0] [yards] relative to snap [PAGE 7].

Classification and evaluation:
- Train/test split: 274 routes each, 1:1 ratio [PAGE 8].
- Algorithms: Naive Bayes, kNN, Random Forest, Logistic Regression, SVM [PAGE 8].
- Precision: P = tp / (tp + fp) [dimensionless, 0–1] [PAGE 8].
- Recall: R = tp / (tp + fn) [dimensionless, 0–1] [PAGE 8].
- Table 3 example (Naive Bayes): dig route P=0.85, R=0.65, count=68; slant P=0.65, R=1.00, count=11; corner P=0.33, R=0.08, count=13 [PAGE 8].
- Table 4 maxima: Naive Bayes P=0.70, R=0.68; kNN P=0.68, R=0.68; Random Forest P=0.66, R=0.64; Logistic Regression P=0.57, R=0.62; SVM P=0.45, R=0.29 [PAGE 9].

Exact singularity and breakdown regimes:
- Stem-length singularity: if r_{p*} ≈ r_0, then ℓ_stem → 0 and branch heading becomes numerically unstable because the pivot is indistinguishable from the snap point [PAGE 5–6].
- Temporal aliasing: at 3 Hz, a receiver moving at v = 8 yards/s travels ≈ 2.67 yards between frames, so pivot localization error σ_p ≈ v·Δt/2 ≈ 1.33 yards [PAGE 2, 5].
- Class-count breakdown: when test-set count N_class < 10, recall standard error σ_R ≈ sqrt(R(1–R)/N) exceeds 0.18 for R ≈ 0.5, making hitch (N=7) and wheel (N=7) recall estimates unreliable [PAGE 8].
- Mirroring breakdown: if defensive alignment is hash-asymmetric, the reflected trajectory lies in a defensive leverage context that never occurred physically, violating the i.i.d. assumption for supervised learning [PAGE 3–4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The intellectual genealogy begins with Steve Belichick’s Football Scouting Methods (1962), which codified the quality-control coach’s role in breaking down film, tagging events, players, actions, and play features [PAGE 1]. The paper positions its automation framework as a direct descendant of that manual QC workflow, substituting RFID/NextGen Stats tracking for human film tagging [PAGE 1]. Since 2014, the NFL has used radio-frequency identification tracking to continuously monitor player locations [PAGE 1, References]. However, the authors could not access official NextGen Stats for competitive scouting, so they reconstructed a 3 Hz dataset from All-22 video [PAGE 2]. They explicitly project that accuracy will improve once NextGen Stats at 10 Hz becomes available [PAGE 10].

The machine-learning lineage is classical supervised learning: Naive Bayes, k-Nearest Neighbors, Random Forest, Logistic Regression, and Support Vector Machines [PAGE 8]. The feature engineering philosophy—segmented Euclidean regression to isolate stem, pivot, and branch—echoes trajectory-segmentation work in computer vision and movement analysis, but adapted to football’s discrete play structure.

Multi-week traps: (1) Tendency rot. Route labels derived from Week 1 film grow stale by Week 4 because offensive coordinators adjust concepts based on early-season tape; a classifier trained on static primary tags does not model within-season scheme evolution [PAGE 1, 3]. (2) Option-route endogeneity. The paper notes that an out can become an arrow versus off coverage, and a go can become a post when MOFO [PAGE 3]. Thus the route label is partly a function of defensive alignment the offense observes after the snap, creating a feedback loop that a passive trajectory classifier cannot invert. (3) Tagging latency versus game-plan clock. Manual QC tagging is time-intensive; automation promises earlier tags so coaches can spend more time planning and less time generating data [PAGE 10]. If the model misclassifies a low-frequency route (e.g., corner recall 0.08), the coach may lose more time auditing false positives than was saved by automation [PAGE 8]. (4) Data-resolution lock-in. The 3 Hz / 0.25-yard reconstruction is a lower-fidelity ancestor of NextGen Stats; conclusions drawn from it may not port linearly to 10 Hz RFID without re-estimating feature distributions [PAGE 2, 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under game-week time pressure, QC coaches habitually regress to manual film tagging after any automation crisis—such as a corner route being confused with an out (recall 0.08) or a hitch route with only seven test cases [PAGE 8]. The paper acknowledges the methods “do not replace the need for QC coaches,” but in practice a single high-visibility misclassification before a divisional game can trigger a reversion to legacy workflows, nullifying the efficiency gain [PAGE 10].

Counter-trap: The inverse failure mode is over-reliance. If coaches trust automated tags without spot-checking film, systematic classifier bias becomes embedded in game planning. Naive Bayes performs well on dig (P=0.85) and go (P=0.80) but poorly on corner (P=0.33) and hitch (P=0.25) [PAGE 8]. A game plan built on auto-tagged tendencies will overweight deep and intermediate routes while underweighting short comebacks and hitches, creating a predictable play-calling signature that an opposing defensive coordinator can exploit.

Clock constraints: The play clock and route window interact badly. Routes are captured until a maximum of five seconds or fifteen frames, or until the forward pass [PAGE 5]. A post or go concept that develops beyond five seconds is truncated, distorting final location and branch heading [PAGE 7]. Meanwhile, the operational clock is the game-week cycle: Sunday game, Monday–Tuesday tagging, Wednesday game plan. If the pipeline cannot ingest Sunday’s All-22 video, extract features, classify routes, and deliver tags before the coach’s film deadline, the model is bypassed regardless of accuracy [PAGE 1, 10].

Recursive modeling loop: The offense runs option routes conditionally on defensive alignment [PAGE 3]. The defense, knowing the offense’s routes are being auto-classified, may alter alignment to induce mislabeled trajectories (e.g., showing off coverage to provoke an arrow tag while actually playing press). The classifier models the receiver; the receiver’s route is a function of the defense; the defense’s alignment is a function of its belief about the classifier. This is a second-order theory-of-mind problem that static supervised learning does not address.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer veto: Formation identification uses proximity to teammates, opponents, hashes, boundaries, yard markers, and the line of scrimmage to assign one of ten positions [PAGE 3]. Any trajectory whose start point falls outside field bounds or whose formation logic fails to map to a valid position is vetoed before feature extraction. Mirroring further imposes an artificial physical constraint: a skill-left route reflected to skill-right presumes symmetric hash and boundary geometry, which is false when the ball is near a sideline [PAGE 3–4].

Biomechanical layer veto: Segmented Euclidean regression treats the pivot as an instantaneous node [PAGE 5]. NFL receivers cannot change direction at a single frame; plant-cut mechanics require finite time and distance. A veto rule: any detected stem length ℓ_stem < 2.0 yards or any inter-segment heading change > 135° between consecutive frames is biomechanically implausible at typical NFL receiver speeds and should be flagged rather than fed to the classifier [PAGE 5–6]. Average speed v̄ must also respect human acceleration limits; values exceeding ~10 yards/s sustained over multiple frames at 3 Hz suggest tracking error or identity swap [PAGE 7].

Weather layer veto: The source does not record weather, but All-22 video and player tracking are environmentally coupled. Precipitation changes surface friction and acceleration profiles; wind alters deep-route branch heading and final location, particularly for go and post concepts whose branch headings in Table 2 are near cardinal extremes (136°, 172°, 0°) [PAGE 7]. A veto rule: if game-day wind exceeds a threshold that materially shifts ball flight or receiver stem integrity, the final-location feature (x_n, y_n) loses validity for deep routes and should be down-weighted or excluded.

Adjudication order: (1) Physical formation validity must pass first; invalid formations are discarded. (2) Biomechanical plausibility filters the pivot and speed features; implausible pivots revert to a smoothed trajectory rather than a hard Euclidean node. (3) Weather-context flags condition the interpretation of branch heading and final location but do not automatically discard the route, because the paper’s dataset lacks weather metadata. Mirroring is applied only after these vetoes, and only if left/right defensive symmetry can be reasonably assumed for the specific formation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Veto scenario 1 — Small-sample statistical collapse. Counterfactual: Hold out all 2014 Colts routes with test-set count N < 10 (hitch N=7, wheel N=7, slant N=11) and evaluate Naive Bayes recall on a held-out 2015 Colts base-offense dataset under identical 3 Hz sampling. Veto condition: if recall for any N<10 class falls below 0.40, the original Table 3 estimates (hitch R=0.57, wheel R=1.00, slant R=1.00) are declared non-replicable [PAGE 8]. Prediction: binomial standard error for N=7 at R=0.57 is σ ≈ 0.187; the true recall will regress toward the class prior and likely land between 0.25 and 0.45, triggering the veto.

Veto scenario 2 — Temporal resolution degradation. Counterfactual: Downsample a 10 Hz NextGen Stats trajectory set to 3 Hz by dropping every third frame and re-run segmented Euclidean regression. Veto condition: if stem-length error exceeds 1.0 yard for more than 20% of routes, the 3 Hz feature extractor is vetoed for dig/comeback separation [PAGE 5–6]. Prediction: at v ≈ 8 yards/s, frame-to-frame displacement is ≈ 2.67 yards at 3 Hz versus ≈ 0.8 yards at 10 Hz; pivot localization uncertainty roughly triples, and stem-length error will exceed 1.0 yard for ≈ 35% of routes, degrading dig (ℓ_stem = 10.9) versus comeback (ℓ_stem = 13.9) discrimination [PAGE 7, Table 2].

Veto scenario 3 — Mirroring domain shift. Counterfactual: Train on mirrored skill-left-to-skill-right routes from the 2014 Colts, then test on unmirrored, naturally occurring skill-right routes from a different team with strong boundary-vs-field asymmetry. Veto condition: if out-route precision drops by ≥ 0.15 from the original 0.71, the mirroring assumption is vetoed as a source of distribution shift [PAGE 8]. Prediction: boundary-side press coverage alters stem and branch geometry relative to field-side off coverage; mirrored trajectories will place receivers in leverage contexts they never physically occupied, causing out-route precision to fall to ≈ 0.50–0.55.
</RLVR_COUNTERFACTUAL_VETOES>
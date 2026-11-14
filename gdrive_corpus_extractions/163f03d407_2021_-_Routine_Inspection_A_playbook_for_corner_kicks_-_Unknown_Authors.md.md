---
source: "2021 - Routine Inspection A playbook for corner kicks - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6097
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about corner kicks in soccer and produce a response with specific XML sections. Let me carefully review the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the paper "Routine Inspection: A playbook for corner kicks" by Laurie Shaw and Sudarshan Gopaladesikan.

Key facts from the paper:
- 1723 corner kicks from 234 matches, elite European league
- Tracking data at 25Hz
- ~5 corners per game per team
- Conversion rate ~2% (1.5% Primeira Liga, 1.9% Bundesliga, 0.8% La Liga)
- 2% conversion rate generally
- FC Midtjylland example: 4 training sessions/week on corners, won Danish Superliga 2014-15, 2017-18
- Methodology:
  1. GMM to classify attacking player runs into tuples based on start/end locations
  2. NMF topic model to identify co-occurring runs
- Initial positions measured exactly 2 seconds before corner taken
- Target locations: positions 1 second after first on-ball event following corner, OR 2 seconds after corner taken, whichever first
- GMM: 15-component for target positions -> 7 active zones (a-g) in penalty area
- GMM: 6-component for initial positions of active players (zones 1-6)
- 42 possible runs (6 initial x 7 target)
- Encoding: 42-element vector, probabilistic using GMM weights
- NMF: term matrix 42 rows x 1723 columns, decomposed into W (42xr) and H (rx1723)
- r=30 features selected where gradient approaches zero
- Regularization parameter alpha = 1
- Frobenius norm minimization with regularization
- Defensive role classification: XGBoost gradient boosted decision trees
- 10 metrics selected with SL Benfica analysts
- 500 corners manually annotated, 3907 defenders, 55% man-to-man, 45% zonal
- XGBoost accuracy: 83.4% ± 2.1% with 10-fold cross-validation
- Precision 81%, recall 81% for zonal class
- Logistic regression with just initial positions: 70% accuracy; adding distance travelled: 74%
- Team Y example: 4 zonal defenders (#4 right-back near post, #28 left-back next to him, #3 and #2 center-backs edge of six-yard box)
- Figure 8: 4-zone system (366 corners, 8 teams) conceded shots in 33% of corners; 2-zone system (600 corners, 10 teams) conceded shots in 27% of corners. But 4-zone: 7.5% of shots produced goal; 2-zone: 13% of shots produced goal. Two-zone less effective overall.
- Jellyfish strategy, train strategy, overload strategy
- Teams use routines over consecutive matches then discard/reintroduce

Now I need to structure this into the required XML sections. I must not mention betting odds/spreads/totals/moneylines. I must use formal LaTeX equations. I must cite [PAGE N] markers.

Let me draft each section carefully.

**<THINK_TRACE>** (>=400 words): Deep multi-hop derivation and gray-zone audit. I need to trace the logic from raw tracking data through GMM, NMF, XGBoost, to practical applications. Identify gray zones: assumption that players reach intended targets (footnote 2), 2-second window for initial positions, target definition ambiguity (1s after first on-ball event vs 2s after corner), short corners excluded, reflection of field to left side, probabilistic encoding vs hard assignment, NMF rank selection heuristic (gradient approaches zero at r=30), XGBoost feature selection via F-score, small sample for defensive effectiveness (366 vs 600 corners), team-specific findings not generalizable without larger sample (acknowledged in Section 6). Multi-hop: raw GPS/tracking at 25Hz -> event data corner detection -> run extraction -> zone clustering -> feature encoding -> topic modeling -> clustering into routines -> defensive role classification -> effectiveness comparison -> training optimization. Gray zones: the "target location" assumption is unobservable; the 2-second pre-kick window assumes average speed rise correlates with run initiation; NMF non-negativity imposes parts-based decomposition but may not capture temporal ordering; XGBoost doesn't identify which attacker a defender marks (footnote 4); defensive effectiveness confounded by opponent quality, game state, score, minute.

**<SOURCE_OPERATORS_AND_EQUATIONS>**: Formal LaTeX.
- GMM: target positions fitted with 15-component bivariate normal via EM [PAGE 3-4]. Likelihood: p(x) = sum_{k=1}^{15} pi_k N(x | mu_k, Sigma_k). Active zones a-g are 7 components in penalty area.
- Initial zones: 6-component GMM on active players' initial positions [PAGE 4].
- Run encoding: x_{R^a} = sum_{p=1}^{N_active} P_p(InitialZone(R^a)) * P_p(TargetZone(R^a)) [Appendix 1, PAGE 14].
- NMF: X approx WH, X in R^{42 x 1723}_+, W in R^{42 x r}_+, H in R^{r x 1723}_+, r=30 [Appendix 2, PAGE 15].
- Objective: min_{W,H>=0} ||X - WH||_F^2 + alpha(||W||_F^2 + ||H||_F^2)? Wait, paper says "plus the sum of the norms of the W and H matrices, each multiplied by a regularization parameter alpha". It might be L1 or L2? It says "norms" but likely L2 regularization for sparseness? Actually NMF with sparseness often uses L1. Paper says "regularisation encourages sparseness". Alpha = 1 [PAGE 15]. Minimized via multiplicative update [PAGE 15].
- Selection of r=30: inspect where gradient of ||X - WH|| decreases approaches zero as r goes 1 to 42 [Appendix 2, PAGE 15].
- XGBoost: gradient-boosted decision trees, P(man-to-man | features). Accuracy 83.4% ± 2.1% [PAGE 7]. Precision 81%, recall 81% [footnote 5, PAGE 8].
- Logistic regression baseline: 70% with initial positions only, 74% with distance travelled added [Appendix 3, PAGE 16].
- Units: positions in meters (implied by pitch coordinates), time in seconds, frequency 25Hz, sampling interval 0.04s.
- Breakdown regimes: GMM log-likelihood plateau at 15 components [PAGE 3]; NMF rank r < min(42, 1723) = 42 [Appendix 2]; XGBoost assumes feature independence-ish via tree splits, but correlated initial position coordinates; short corners excluded; tracking errors removed.

**<RETROCAUSAL_GENEALOGY>**: Historical lineage. Power et al. 2018 "Mythbusting Set-Pieces" [1]. Casal et al. 2015 [4]. Pulling 2015 [5]. Pulling & Newton 2017 [6]. Dempster et al. 1977 EM algorithm [7]. Friedman et al. 2001 Elements of Statistical Learning [8]. Lee & Seung 2001 NMF [10]. Hoyer 2004 sparseness [11]. Chen & Guestrin 2016 XGBoost [12]. Multi-week traps: teams reuse routines over consecutive matches then discard [PAGE 9]; scouting limited to 5 matches via video [PAGE 9]; Midtjylland 4 sessions/week [PAGE 1]; congested schedules 3 matches every 9 days [PAGE 12].

**<RECURSIVE_THEORY_OF_MIND>**: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive. I need to interpret "crisis habit regression" as teams reverting to default corner routines under pressure; "counter-trap" as opponents anticipating and adjusting defensive zones; "clock" as match time / congested schedule / limited training windows. The paper notes teams use a routine regularly over consecutive matches then discard it [PAGE 9]—this is habit regression/cycle. Opponents can scout via video but limited sample [PAGE 9]. The "clock" is the 3 matches per 9 days constraint limiting set-piece training time [PAGE 12]. Counter-trap: identifying defensive roles via XGBoost lets attacker pick routines that evade specific marking [PAGE 11-12]. Crisis: when a routine is scouted, team regresses to simpler/default runs or abandons it.

**<CROSS_LAYER_VETO_ADJUDICATION>**: Physical/biomechanical/weather veto proof. Physical: pitch dimensions, ball trajectory not modeled because ball may be intercepted or inaccurate [PAGE 2]. Biomechanical: initial positions measured 2 seconds before corner when average speed rises [PAGE 3]; target location assumption players reach intended target [footnote 2, PAGE 3]; distance travelled metrics [Appendix 3, PAGE 16]. Weather: not explicitly in paper, but wind affects ball delivery trajectory which is excluded from model [PAGE 2]; wet pitch affects player acceleration/deceleration but tracking data doesn't capture friction. Veto proof: The model explicitly excludes ball trajectory, so any weather-induced delivery deviation is a veto variable outside model scope. Zonal system effectiveness confounded by delivery location [PAGE 10-11].

**<RLVR_COUNTERFACTUAL_VETOES>**: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as:
1. If a team introduces a novel run combination not in the 30 NMF features (e.g., run outside 42 zone pairs), the feature encoding vector has zero weight for that run, so the routine is misclassified or assigned to nearest feature. Prediction: clustering accuracy drops for novel routines; team using surprise routine gains temporary effectiveness until analysts re-encode.
2. If tracking sampling drops below 25Hz (e.g., 5Hz), the 2-second pre-kick speed-rise detection fails and initial zone assignment becomes noisy. Prediction: GMM initial zone weights become diffuse, reducing XGBoost defensive role classification accuracy below 83.4%.
3. If a corner is delivered directly to a zone not covered by any of the 7 active zones (e.g., outside penalty area or short corner), the active player set is empty or mis-specified. Prediction: NMF reconstruction error ||X-WH||_F spikes; the corner cannot be assigned to any of the 30 features, violating the r=30 assumption.

Word count: Need >=1000 words total across sections. I'll make sure each section is substantial.

I must not mention betting lines. I will not mention odds, spreads, etc.

I need to include [PAGE N] markers and verbatim quotes where applicable. Let me incorporate exact quotes.

Let's draft.

---

<THINK_TRACE>
...
</THINK_TRACE>

Need to ensure >=400 words here.

Multi-hop derivation:
Layer 0: Raw sensor stream. Tracking at 25 Hz (0.04 s cadence), event log with timestamps. Corner detection via ball acceleration and `ball-in-play` flag [PAGE 2]. Short corners excluded; tracking errors removed; N=1723 corners [PAGE 2]. Field reflection to left side for comparability [PAGE 2].
Layer 1: Run segmentation. Initial positions at t = -2 s relative to kick, triggered by average attacking-player speed rise [PAGE 3]. Target positions at min(t_first_on_ball + 1 s, t_kick + 2 s) [footnote 2, PAGE 3]. This creates a causal ambiguity: the "target" is an operational proxy, not a verified endpoint; players may be obstructed, may not reach intended location, or may redirect after first touch.
Layer 2: Spatial quantization. 15-component GMM on ~15,000 target positions [PAGE 3]. EM algorithm [References 7-8]. Seven components fall in penalty area -> active zones a-g [PAGE 4]. Six-component GMM on active players' initial positions -> zones 1-6 [PAGE 4]. 42 possible runs (6 x 7) [PAGE 4].
Layer 3: Probabilistic encoding. Rather than hard zone assignment, use GMM mixture weights: x_{R^a} = sum_{p} P_p(initial zone of R^a) P_p(target zone of R^a) [Appendix 1, PAGE 14]. This yields a 42-dimensional non-negative vector per corner [Appendix 2, PAGE 15].
Layer 4: Topic structure. NMF factorizes X (42 x 1723) into W (42 x r) and H (r x 1723) [Appendix 2, PAGE 15]. Rank r=30 chosen at elbow where gradient of reconstruction error approaches zero [PAGE 15]. Regularization alpha=1 promotes sparseness, consistent with 5-8 active attackers per corner [PAGE 15].
Layer 5: Routine clustering. Agglomerative hierarchical clustering on H columns to extract distinct routines per team [PAGE 5]. Temporal non-stationarity: teams repeat a routine over consecutive matches then discard [PAGE 9].
Layer 6: Defense. XGBoost on 10 metrics [Appendix 3, PAGE 16], trained on 3907 manually annotated defenders from 500 corners [PAGE 6-7]. Accuracy 83.4% ± 2.1% [PAGE 7]. Does not identify which attacker is marked [footnote 4, PAGE 6].
Layer 7: Effectiveness. Four-zone vs two-zone systems over 3500 corners [PAGE 10]. Four-zone: 33% shot concession, 7.5% shot-to-goal. Two-zone: 27% shot concession, 13% shot-to-goal [PAGE 10-11]. Confounded by delivery location relative to six-yard box.

Gray-zone audit:
- Target location is assumed reached [footnote 2, PAGE 3]; unobservable true intent.
- NMF rank selection is heuristic (gradient near zero), not information-theoretic (no BIC/AIC reported).
- XGBoost feature importance via F-score only; no SHAP/permutation stability reported.
- Defensive effectiveness analysis pools 8 teams (4-zone) and 10 teams (2-zone); team quality and opponent strength not controlled [PAGE 10].
- Sample restricted to one elite league season; external validity to other leagues or eras unproven [PAGE 2].

Word count should be around 500+. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

Formal LaTeX. Units. Page citations. Breakdown regimes.

Equations:
(1) GMM target density:
p(\mathbf{t}) = \sum_{k=1}^{15} \pi_k \mathcal{N}(\mathbf{t} \mid \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k), \mathbf{t} \in \mathbb{R}^2.
Active zones: \{a,b,c,d,e,f,g\} \subset \{1,\dots,15\}. [PAGE 3-4]

(2) Initial zone GMM:
p(\mathbf{s}) = \sum_{j=1}^{6} \rho_j \mathcal{N}(\mathbf{s} \mid \boldsymbol{\nu}_j, \boldsymbol{\Omega}_j). [PAGE 4]

(3) Run encoding:
x_{R^{(j \to k)}} = \sum_{p=1}^{N_{\text{act}}} \Pr_p(I=j) \Pr_p(T=k), \quad j \in \{1,\dots,6\}, k \in \{a,\dots,g\}.
Total dimension D = 6 \times 7 = 42. [Appendix 1, PAGE 14; PAGE 4]

(4) NMF:
\mathbf{X} \in \mathbb{R}_{\ge 0}^{42 \times 1723}, \quad \mathbf{X} \approx \mathbf{W}\mathbf{H}, \quad \mathbf{W} \in \mathbb{R}_{\ge 0}^{42 \times 30}, \mathbf{H} \in \mathbb{R}_{\ge 0}^{30 \times 1723}. [Appendix 2, PAGE 15]

(5) Objective:
\min_{\mathbf{W},\mathbf{H} \ge 0} \left\| \mathbf{X} - \mathbf{W}\mathbf{H} \right\|_F^2 + \alpha \left( \|\mathbf{W}\| + \|\mathbf{H}\| \right), \quad \alpha = 1. [Appendix 2, PAGE 15]
Note: paper says "plus the sum of the norms" and alpha set to 1. I'll write it generically as norms but mention alpha=1.

(6) Rank selection:
r^* = \arg\min_{r} \left\{ r : \frac{d}{dr} \|\mathbf{X} - \mathbf{W}_r\mathbf{H}_r\|_F \approx 0 \right\} = 30. [Appendix 2, PAGE 15]

(7) XGBoost:
\hat{y}_i = \text{XGBoost}(\mathbf{m}_i), \quad \mathbf{m}_i \in \mathbb{R}^{10}, \quad y_i \in \{\text{man-to-man}, \text{zonal}\}.
Accuracy: 0.834 \pm 0.021 (10-fold CV). [PAGE 7]
Precision/Recall for zonal: 0.81 / 0.81. [footnote 5, PAGE 8]

Units: positions in meters (pitch coordinate system), time in seconds, sampling frequency f_s = 25 Hz (\Delta t = 0.04 s), counts dimensionless, probabilities in [0,1], accuracy dimensionless proportion.

Breakdown/singularity regimes:
- GMM: 15 components sufficient; adding components no significant log-likelihood improvement [PAGE 3]. Singularity if covariance \boldsymbol{\Sigma}_k becomes ill-conditioned (over-clustering sparse target regions).
- NMF: requires r < \min(42,1723) = 42 [Appendix 2, PAGE 15]. Breaks if a corner has zero active players (empty column in X).
- XGBoost: breaks if initial positions are missing or if defender/attacker co-location is ambiguous (man-marking target unobserved) [footnote 4, PAGE 6].
- Effectiveness comparison: breaks if delivery location and zone configuration are confounded (e.g., two-zone system concedes close-range shots more often) [PAGE 10-11].

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

Historical lineage:
- Power et al. 2018 Sloan "Mythbusting Set-Pieces" [1]: found second-ball goals more likely than direct; hybrid marking concedes most dangerous shots [PAGE 1].
- Casal et al. 2015 [4]: match time, number of intervening attackers, dynamic attack significant for shot generation [PAGE 1].
- Pulling 2015 [5], Pulling & Newton 2017 [6]: near-post guard systems, deliveries into goal area [PAGE 1].
- Dempster et al. 1977 EM algorithm [7]; Friedman et al. 2001 ESL [8] -> GMM foundation.
- Lee & Seung 2001 NMF [10]; Hoyer 2004 sparseness [11]; da Kuang et al. 2015 interactive NMF [9] -> topic model.
- Chen & Guestrin 2016 XGBoost [12] -> defensive roles.
- Carling et al. 2005 [14], Sarmento et al. 2014 [15] -> match analysis prep.

Multi-week traps:
- Midtjylland: up to 4 training sessions/week on corners; won Danish Superliga 2014-15 and 2017-18 [PAGE 1]. Shows high-volume set-piece rehearsal correlates with title success.
- Teams repeat routines over consecutive matches then discard, sometimes reintroduce later [PAGE 9]. This creates a multi-week seasonality trap: scouting based on last 5 matches may miss a dormant routine reintroduced in the upcoming match [PAGE 9].
- Congested schedule: 3 matches every 9 days; <1 hour set-piece training [PAGE 12]. Compression trap: tactical innovation constrained by recovery windows.
- Video scouting limited to up to 5 matches [PAGE 9]; paper enables hundreds-of-matches reconstruction [PAGE 9].

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

Interpretation:
- Crisis habit regression: When a corner routine is successfully scouted by an opponent, the attacking team faces a "crisis" of predictability. The paper notes teams abandon routines after consecutive use [PAGE 9]; under pressure they regress to default, less-coordinated runs or abandon the rehearsed pattern entirely.
- Counter-trap: The defensive XGBoost classifier reveals which defenders mark zonally vs man-to-man and where zones sit [PAGE 7-8]. Attackers can run a "counter-trap": deploy a routine that draws man-markers out of position while leaving zones unoccupied, or overload a zone with fewer defenders than attackers. Team Y's fixed identities (#4 near post, #28 beside him, #3 and #2 at six-yard box edge) [PAGE 8] represent a exploitable habit if the attacker recognizes the zonal identities.
- Clock: The 3-matches-per-9-days schedule [PAGE 12] and the 2-second pre-kick speed-rise detection window [PAGE 3] create temporal pressure. The "clock" limits how many new routines can be installed before the next match; the encoding system (4b, 2a etc.) [PAGE 11-12] compresses learning so players can memorize alphanumeric codes quickly, shortening the installation clock.

Recursive loop: Opponent observes routine -> defender roles classified -> attack adjusts run combination -> defense re-marks -> routine discarded [PAGE 9]. This recursion is bounded by the clock (congested fixtures) and by the cognitive load of learning new codes [PAGE 12].

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

Physical layer:
- Paper explicitly excludes ball trajectory because cross may be intercepted or inaccurate [PAGE 2]. Therefore any physical veto (wind, wet pitch altering ball flight, goalkeeper punch) lies outside the model's state space. The run encoder assumes players reach intended targets [footnote 2, PAGE 3], which fails under physical interference.

Biomechanical layer:
- Initial positions captured at t=-2s when average attacking-player speed rises [PAGE 3]. If a player is slow to react or impeded at kick-off, the -2s snapshot mislabels the run origin. Distance travelled metrics [Appendix 3, PAGE 16] assume locomotor effort is observable at 25Hz; turf friction, shoe-surface interaction, and fatigue are unmodeled.
- XGBoost features include distance between start and target, initial proximity to goalkeeper [Appendix 3, PAGE 16]. These are Euclidean in pitch coordinates; they do not encode player mass, momentum, or joint-angle constraints.

Weather veto:
- Not explicitly modeled. Wind affects delivery target; since ball trajectory is excluded [PAGE 2], a windy match invalidates the target-zone assumption for corners where drift carries the ball outside the intended active zone. The model has no weather covariate, so it cannot adjudicate this veto.

Adjudication:
- The four-zone vs two-zone comparison [PAGE 10-11] shows shot concession rate (33% vs 27%) but shot quality (7.5% vs 13% goal conversion on shots) differs. The veto is delivery location: four-zone system allows shots from outside six-yard box (lower quality), two-zone concedes more shots inside six-yard box (higher quality). A physical veto (e.g., heavy rain reducing grip inside the six-yard box) would disproportionately affect the two-zone system because its conceded shots cluster closer to goal [lower-right panel, Figure 8, PAGE 10].

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Three verifiable scenarios:

Scenario 1: Novel run outside the 42-zone dictionary.
- Setup: A team introduces a corner routine where an attacker starts outside the six initial zones or targets a location outside the seven active zones (e.g., short corner or edge-of-box run).
- Veto: The 42-element encoding vector cannot represent the run; NMF basis W (42 x 30) has no column for it. Reconstruction error \|\mathbf{X} - \mathbf{W}\mathbf{H}\|_F spikes for that corner.
- Verifiable prediction: The corner will be assigned low weight across all 30 features or force a spurious combination; routine clustering will place it in an "other" cluster with low silhouette score. Until analysts retrain GMM/NMF, the routine is invisible to opponent scouting.

Scenario 2: Tracking frequency degradation below 25 Hz.
- Setup: A match is recorded at 5 Hz instead of 25 Hz (\Delta t = 0.2 s).
- Veto: The -2 s initial-position trigger relies on detecting average speed rise; at 5 Hz the speed estimate is aliased and zone membership probabilities \Pr_p(I=j) become diffuse.
- Verifiable prediction: XGBoost defensive-role classification accuracy falls from 83.4% \pm 2.1% toward the logistic-regression baseline (~70-74%) because initial-position features lose discriminative power [Appendix 3, PAGE 16]. GMM log-likelihood for initial zones degrades.

Scenario 3: Empty active-player set (no attacker targets active zones).
- Setup: A corner is defended so aggressively that all attacking players remain outside the penalty area, or the ball is cleared before any attacker reaches a target zone.
- Veto: N_active = 0 for that corner, so the encoding vector \mathbf{x} is all zeros; NMF cannot express it as a non-negative combination of W columns unless W contains an all-zero basis vector (it does not, by sparseness design with \alpha=1).
- Verifiable prediction: The term-matrix column for that corner violates the non-negativity / sparseness prior; the multiplicative update rule fails to converge to a meaningful H column. The corner must be excluded a priori (as short corners and tracking errors were excluded [PAGE 2]), reducing effective sample below 1723.

I should ensure I don't mention betting. Good.

Now check word count. Each section needs to be substantial. Total >= 1000 words. THINK_TRACE >= 400. I'll write generously.

Let me write the final response. Make sure XML tags are exact. No markdown outside? The user wants exact XML sections. I'll provide only the XML sections, maybe with a brief intro? Better to just provide the sections to be safe. Actually I'll just output the sections.

Need to ensure [PAGE N] markers. Page numbers in the text: Page 1 (intro), Page 2 (data), Page 3 (classifying routines), Page 4 (GMM details), Page 5 (NMF/Figure 3/4), Page 6 (defensive roles), Page 7 (XGBoost accuracy), Page 8 (footnote 5/Figure 6), Page 9 (Figure 7/team routines), Page 10 (Figure 8/zonal systems), Page 11 (conclusion of 5.2), Page 12 (training optimization/congested schedule), Page 13 (summary), Page 14 (Appendix 1), Page 15 (Appendix 2), Page 16 (Appendix 3).

I need to cite these accurately.

Double check exact quotes:
- Page 1: "On average, teams win approximately five corner kicks per game."
- Page 1: "the average conversion rate, the proportion of corners that directly produce a goal, is very low (around 2% in most elite leagues"
- Page 2: "sample of 1723 corner kicks"
- Page 2: "reflected the positions of the players and the ball so that corners always appear to be taken from the left side"
- Page 3: "Initial positions are measured exactly two seconds before the corner is taken"
- Page 3 footnote 2: "Measuring positions one second after the first on-ball event following the corner kick helps to identify the target position of players aiming to reach the ball following a touch from a teammate."
- Page 3: "Target zones are defined by fitting a 15-component Gaussian Mixture Model (GMM)"
- Page 4: "42 possible runs in our system, corresponding to all pairwise combinations of the 6 initial zones and 7 active target zones."
- Page 5: "We find that the corners in our data can be accurately reconstructed from a set of 30 run combinations"
- Page 6: "We use the XGBoost [12] implementation of gradient-boosted decision trees"
- Page 6 footnote 4: "Note that our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking."
- Page 7: "Training XGBoost with 10-fold cross validation resulted in a classification accuracy of 83.4% ± 2.1%"
- Page 8 footnote 5: "81% of the players classified as zonally marking by the model were tagged as such in the training set (precision) and 81% of the players tagged as zonal markers in the training set were correctly identified (recall)."
- Page 8: "Team Y used a defensive system consisting of four zonally marking players and four players marking man-to-man."
- Page 9: "The teams in our data did not alternate randomly from one routine to another as they took corners. Rather, they would use a routine regularly over a consecutive series of matches and then discard it..."
- Page 10: "The four-zone system conceded shots in 33% of the corners that it faced, while the two-zone system conceded shots in 27% of corners faced."
- Page 10-11: "7.5% of the shots conceded produced a goal, compared to 13% in the two-zone system."
- Page 12: "sometimes playing matches at a rate of 3 every 9 days."
- Page 12: "many teams dedicate less than an hour to practicing set pieces."
- Page 14 Appendix 1 formula description.
- Page 15 Appendix 2: "The factorization rank r is chosen such that r < min(n,p)... We selected r = 30, which is where the gradient of this curve approaches zero."
- Page 16 Appendix 3: logistic regression 70% and 74%.

I'll include some verbatim quotes with [PAGE N].

Now write it out. I need to be careful about length. Let's aim for:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~300 words
RETROCAUSAL: ~300 words
RECURSIVE: ~300 words
CROSS_LAYER: ~250 words
RLVR: ~250 words
Total ~1900 words. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's pipeline proceeds through seven nested layers, each carrying assumptions that generate gray zones. Layer 0 is raw signal acquisition: tracking data at 25 Hz (Δt = 0.04 s) for all 22 players plus the ball, fused with event-log timestamps. Corner onset is estimated from event data and refined using ball acceleration and the `ball-in-play` flag; short corners and corrupted tracks are excised, leaving 1723 corners from 234 matches [PAGE 2]. All coordinates are reflected so corners originate from the left touchline [PAGE 2]. Layer 1 is run segmentation: initial player positions are snapped at t = −2 s, justified because that is when the average speed of attacking players begins to rise [PAGE 3]. Target positions are defined operationally as the player location one second after the first post-corner on-ball event, or two seconds after the kick, whichever arrives first [footnote 2, PAGE 3]. The gray zone here is that the true intended target is unobservable; a defender may block the run, the ball may be headed elsewhere, and the attacker may never reach the computed coordinate.

Layer 2 quantizes space. A 15-component Gaussian Mixture Model (GMM) fitted by expectation-maximization clusters roughly 15,000 target positions; only seven components fall inside the penalty area and are designated active zones a–g [PAGE 3–4]. A separate 6-component GMM clusters active players' initial positions into zones 1–6 [PAGE 4]. This yields 42 possible run types (6 × 7) [PAGE 4]. Layer 3 replaces hard zone assignment with probabilistic encoding: each active player contributes the product of their GMM mixture weights for initial and target zones, summed across players, producing a 42-element non-negative vector per corner [Appendix 1, PAGE 14]. Layer 4 applies non-negative matrix factorization (NMF) to the 42 × 1723 term matrix, extracting r = 30 run-combination features where the reconstruction-error gradient approaches zero [Appendix 2, PAGE 15]. Layer 5 clusters corners by their H-matrix feature expressions to recover distinct team routines; the paper notes teams repeat a routine over consecutive matches, then discard it, sometimes reviving it later [PAGE 9], which violates i.i.d. stationarity across a season. Layer 6 classifies individual defenders via XGBoost on ten metrics [Appendix 3, PAGE 16], trained on 3907 manually labeled defenders from 500 corners, achieving 83.4% ± 2.1% cross-validated accuracy [PAGE 7] but explicitly not identifying which attacker a man-marker shadows [footnote 4, PAGE 6]. Layer 7 compares zonal configurations: four-zone systems conceded shots on 33% of corners but only 7.5% of those shots became goals; two-zone systems conceded shots on 27% of corners but 13% of those shots became goals [PAGE 10–11], implicating delivery depth relative to the six-yard box as a confounder.

Gray-zone audit: the target-location assumption is counterfactual; NMF rank selection is heuristic rather than information-theoretic; XGBoost feature importance is reported only via F-scores without stability analysis; the defensive-effectiveness sample pools eight teams (four-zone) and ten teams (two-zone) without controlling for opponent quality or match state; and the single-league, single-season sample limits external validity [PAGE 2, PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All spatial coordinates are in meters on a reflected pitch; time is in seconds; sampling frequency is f_s = 25 Hz (Δt = 0.04 s); probabilities lie in [0, 1]; classification accuracy is a dimensionless proportion.

Target-position GMM (15 components, EM algorithm) [PAGE 3–4]:
p(\mathbf{t}) = \sum_{k=1}^{15} \pi_k \, \mathcal{N}\!\left(\mathbf{t}\,\middle|\,\boldsymbol{\mu}_k,\boldsymbol{\Sigma}_k\right), \qquad \mathbf{t}\in\mathbb{R}^2.
Seven components located in the penalty area define active zones \mathcal{A}=\{a,b,c,d,e,f,g\}.

Initial-position GMM (6 components, active players only) [PAGE 4]:
p(\mathbf{s}) = \sum_{j=1}^{6} \rho_j \, \mathcal{N}\!\left(\mathbf{s}\,\middle|\,\boldsymbol{\nu}_j,\boldsymbol{\Omega}_j\right), \qquad \mathbf{s}\in\mathbb{R}^2.
Initial zones \mathcal{I}=\{1,2,3,4,5,6\}.

Probabilistic run encoding [Appendix 1, PAGE 14; PAGE 4]:
x_{R^{(j\to k)}} = \sum_{p=1}^{N_{\mathrm{act}}} \Pr_p(I=j)\,\Pr_p(T=k), \qquad j\in\mathcal{I},\; k\in\mathcal{A}.
The full vector \mathbf{x}\in\mathbb{R}_{\ge 0}^{42} because |\mathcal{I}|\times|\mathcal{A}| = 6\times7 = 42.

Non-negative matrix factorization [Appendix 2, PAGE 15]:
\mathbf{X}\in\mathbb{R}_{\ge 0}^{42\times 1723}, \qquad \mathbf{X}\approx \mathbf{W}\mathbf{H}, \qquad
\mathbf{W}\in\mathbb{R}_{\ge 0}^{42\times r},\; \mathbf{H}\in\mathbb{R}_{\ge 0}^{r\times 1723},\; r=30.
Objective with regularization \alpha=1:
\min_{\mathbf{W},\mathbf{H}\ge 0}\left\|\mathbf{X}-\mathbf{W}\mathbf{H}\right\|_F^2 + \alpha\bigl(\|\mathbf{W}\| + \|\mathbf{H}\|\bigr).
Rank r=30 selected where d\|\mathbf{X}-\mathbf{W}\mathbf{H}\|_F/dr \approx 0 as r sweeps 1 to 42 [Appendix 2, PAGE 15].

Defensive-role classification [PAGE 6–7; Appendix 3, PAGE 16]:
\hat{y}_i = \mathrm{XGBoost}(\mathbf{m}_i), \qquad \mathbf{m}_i\in\mathbb{R}^{10},\quad y_i\in\{\text{man-to-man},\text{zonal}\}.
Ten metrics include initial (x,y) coordinates, start–target distance, initial proximity to goalkeeper, and zone counts [PAGE 16]. Result: 83.4\% \pm 2.1\% accuracy under 10-fold cross-validation [PAGE 7]; zonal class precision = 0.81, recall = 0.81 [footnote 5, PAGE 8]. Baseline logistic regression: 70% with initial positions only, 74% when start–target distance is added [PAGE 16].

Breakdown / singularity regimes: GMM log-likelihood plateaus at 15 components; further components give no significant improvement [PAGE 3]. NMF requires r < \min(42,1723)=42 and fails on empty columns (N_{\mathrm{act}}=0) [Appendix 2, PAGE 15]. XGBoost degrades when initial positions are missing or when man-marking targets are unobserved [footnote 4, PAGE 6]. The four-zone vs two-zone comparison breaks down if delivery depth and zone count are confounded, as seen by shot clustering inside versus outside the six-yard box [PAGE 10–11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct lineage of set-piece analytics. Power et al. (2018), "Mythbusting Set-Pieces," established that corners are more likely to produce goals on the second ball after a teammate touch than directly from the delivery, and that hybrid defensive marking concedes the most dangerous shots [1, cited PAGE 1]. Casal et al. (2015) identified match time, number of intervening attackers, and dynamic attack as the most significant variables for shot generation from corners [4, cited PAGE 1]. Pulling (2015) and Pulling & Newton (2017) examined deliveries into the goal area and near-post guard systems [5–6, cited PAGE 1]. The statistical machinery inherits Dempster, Laird & Rubin (1977) for EM-based GMM fitting [7], Friedman, Hastie & Tibshirani (2001) for statistical learning context [8], Lee & Seung (2001) and Hoyer (2004) for non-negative matrix factorization and sparseness [10–11], da Kuang et al. (2015) for interactive topic modeling [9], and Chen & Guestrin (2016) for XGBoost gradient-boosted decision trees [12]. Broader match-analysis context comes from Carling et al. (2005) and Sarmento et al. (2014) [14–15].

The historical arc reveals two multi-week traps. First, FC Midtjylland devoted up to four training sessions per week to corner routines and won the Danish Superliga in 2014–15 and 2017–18, demonstrating that high-frequency set-piece rehearsal can produce outlier title outcomes [PAGE 1]. Second, the paper documents that teams do not randomize routines match-to-match; they deploy a routine across a consecutive series of games, discard it, and sometimes reintroduce it later in the season [PAGE 9]. This creates a scouting trap: an opponent preparing from video of only the most recent five matches [PAGE 9] may miss a dormant routine that revives in the upcoming fixture. A complementary compression trap operates at the micro-cycle: teams in domestic and continental competition sometimes play three matches every nine days, leaving under an hour for set-piece training [PAGE 12]. The encoding alphabet (e.g., 4b, 2a) is explicitly designed to compress routine learning so players can install new patterns within this narrow window [PAGE 11–12].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three recursive constructs govern the attacker–defender interaction at corners. (1) Crisis habit regression: when an opponent has successfully scouted a team's corner playbook, the attacking side faces a predictability crisis. The paper observes that teams abandon routines after repeated use and may discard them for stretches of the season [PAGE 9]. Under scouting pressure, attackers regress from rehearsed, synchronized runs to less-coordinated default movements, reducing the probability of creating an unchallenged shot. (2) Counter-trap: the defensive role classifier reveals which defenders mark zonally versus man-to-man and where their zones sit [PAGE 7–8]. Team Y's defensive identities were stable across a season—right-back #4 at the near post, left-back #28 beside him, center-backs #3 and #2 at the six-yard-box edge [PAGE 8]. An attacker can run a counter-trap by sending runs that pull man-markers out of position while leaving a zonal defender's sector underoccupied, or by overloading a zone with more attackers than assigned zonal defenders. Because the model does not identify which attacker a man-marker is tracking [footnote 4, PAGE 6], the defense retains hidden information, but the spatial regularity of zonal positions is exploitable. (3) Clock: the physical clock of match time and the fixture clock of congested schedules bound both sides. Casal et al. found match time to be significant for shot generation [4, cited PAGE 1], and the paper notes teams play at rates of three matches per nine days, starving set-piece practice of time [PAGE 12]. The 2-second pre-kick speed-rise detection window [PAGE 3] is a micro-clock: if a run is not initiated within that detection frame, the initial-zone assignment is corrupted. The recursive loop is therefore: opponent observes routine → defense classifies roles and zones → attack selects a counter-trap run combination → defense re-marks → routine is discarded after consecutive exposure [PAGE 9] → the clock limits how many new alphanumeric codes can be taught before the next match [PAGE 11–12].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the model explicitly excludes ball trajectory because crosses may be intercepted or inaccurate [PAGE 2]. Consequently, any physical veto—wind drift, wet pitch altering ball flight, goalkeeper punch—lies outside the encoded state space. The run encoder assumes attacking players reach their intended targets [footnote 2, PAGE 3], an assumption that fails under physical interference.

Biomechanical layer: initial positions are recorded at t = −2 s, keyed to the rise in average attacking-player speed [PAGE 3]. If a player is impeded at kick-off or reacts slowly, the −2 s snapshot mislabels the run origin. Distance-based XGBoost features (start–target distance, proximity to goalkeeper) [Appendix 3, PAGE 16] are Euclidean in pitch coordinates and do not encode mass, momentum, joint-angle limits, or turf friction.

Weather layer: not modeled. Because delivery trajectory is excluded [PAGE 2], a high-wind match can carry the ball outside the intended active zone, invalidating the target-zone probabilities. No weather covariate exists in the term matrix, so the model cannot down-weight corners affected by adverse weather.

Adjudication of the zonal effectiveness comparison [PAGE 10–11]: the four-zone system conceded shots on 33% of corners versus 27% for the two-zone system, yet only 7.5% of four-zone shots became goals compared with 13% for two-zone. The veto variable is delivery location relative to the six-yard box: four-zone systems concede mostly from outside the box (lower quality), whereas two-zone systems concede one-third of shots and two-thirds of goals from inside the box [lower panels, Figure 8, PAGE 10]. A biomechanical/weather veto—such as reduced grip inside the six-yard box on a wet pitch—would disproportionately punish the two-zone system because its conceded shots cluster closer to goal. Thus shot-concession rate alone is an invalid effectiveness metric; shot quality, mediated by delivery depth, is the causal layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Novel run outside the 42-zone dictionary. A team introduces a corner routine with an attacker originating outside the six initial zones or targeting a location outside the seven active zones (e.g., a short corner or an edge-of-the-box late run). Veto: the 42-element encoding vector has no basis element for the run, and the NMF basis W (42 × 30) cannot represent it. Verifiable prediction: the corner's column in X yields near-zero weights across all 30 H features or forces a spurious combination; agglomerative clustering assigns it to an outlier cluster with low silhouette score, rendering it invisible to opponent scouting until GMM/NMF are retrained.

Scenario 2 — Tracking frequency degradation below 25 Hz. A match is logged at 5 Hz instead of 25 Hz (Δt = 0.2 s). Veto: the −2 s initial-position trigger depends on detecting the average speed rise; at 5 Hz the velocity estimate is aliased and the GMM mixture weights Pr_p(I=j) become diffuse. Verifiable prediction: XGBoost defensive-role accuracy falls from 83.4% ± 2.1% toward the logistic-regression baseline of roughly 70–74% because initial-position features lose discriminative power [Appendix 3, PAGE 16], and GMM log-likelihood for initial zones degrades.

Scenario 3 — Empty active-player set (N_active = 0). A corner is cleared before any attacker reaches a target zone, or all attackers remain outside the penalty area. Veto: the encoding vector is all zeros, violating the sparseness prior enforced by α = 1 in NMF; no non-negative combination of W columns can reconstruct an all-zero column without a trivial all-zero basis vector. Verifiable prediction: the multiplicative-update procedure fails to converge to a meaningful H column for that corner, so it must be excluded a priori (as short corners and tracking errors already were [PAGE 2]), reducing the effective sample below 1723 and biasing feature discovery toward corners with at least one active attacker.
</RLVR_COUNTERFACTUAL_VETOES>
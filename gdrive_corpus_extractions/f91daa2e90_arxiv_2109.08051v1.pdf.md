---
source: "arxiv_2109.08051v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 26
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3877
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NFL pass completion probability using machine learning. They've provided the full text of the paper (26 pages) and want me to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to produce a rigorous, deep analysis of this paper following these constraints. Let me carefully go through the source material and structure my response.

Key details from the paper:
- arXiv:2109.08051v1, "Frame by frame completion probability of an NFL pass" by Gustavo Pompeu da Silva and Rafael de Andrade Moral
- Uses 2018 NFL season data from Kaggle NFL Big Data Bowl 2021
- Two-stage procedure: (1) probability each offensive player is pass target, (2) conditional completion probability given target via random forest
- Law of total probability: P(C) = sum P(C|T=i)P(T=i)
- Distance measures: d (point to line), h (Euclidean point to point), b (distance difference between frames)
- Empirical target probability: Pk(T=i|j) formula with min distances
- Weighted combination f(W) = W*P1 + (1-W)*P2
- Four weights W(1) through W(4) based on order statistics
- Final weight W(2,3) logistic model with inflection at 13.34183 frames, scale 2.57
- Final accuracy 86.92% for target prediction
- Random Forest chosen with AUC 0.8829 (10 folds), mtry=15
- 32 explanatory variables listed
- Leave Group Out Cross-Validation with plays as grouping factor
- AUC comparisons: RF 0.8829, BR logit 0.7874, etc.
- Example: Julio Jones play, P(C)=0.579 first frame, P(C|T=i)=0.524 last frame
- Correlation results: P(C|T=i) per frame 0.998 Pearson, 0.998 concordance
- 95.8% accuracy at 0.5 threshold for predicted target
- Limitations: only x,y coordinates (no vertical z), only 2018 season, missing 3 week 1 games, sacks/penalties removed

Now I need to write the response with the exact XML sections.

Word count check: Need >= 1,000 words total across sections, with THINK_TRACE >= 400 words.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The two-stage decomposition and its conditional independence assumptions
- The empirical target probability formula and its reliance on distance geometry
- The logistic weighting scheme W(2,3) and its frame-dependent interpolation
- The law of total probability application
- Random Forest architecture details (mtry=15, LGOCV)
- Gray zones: 2D projection losing vertical ball trajectory; target assignment for incomplete passes (closest eligible receiver); sack/penalty removal creating survivorship bias; frame independence assumption despite temporal correlation; the 0.01 yard floor for d(1)=0; missing 3 week-1 games; only 2018 season; Next Gen Stats comparison ambiguity (frame timing unknown)

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units, page citations, exact breakdown regimes.
- Eq 1: v vector
- Eq 2: r vector
- Eq 3: point-to-line distance d in yards
- Eq 4: Euclidean distance h in yards
- Eq 5: b = h_t - h_{t-1}
- Eq 6: d(2) standardization piecewise
- Eq 7: empirical probability Pk(T=i|j)
- Eq 8: f(W) combination
- Eq 9: distance matrix D(k)
- Eq 10: indicator matrix Z(s)
- Eq 11: d(k)* = diag{(D(k))^T Z(s)}
- Eq 12: W(r)_j = a_l
- Eq 13: logistic W(2,3)_t
- Eq 14: final target probability
- Eq 15: law of total probability P(C)
- Table 2 AUC values
- Table 3/4 example probabilities
- Table 5 correlation coefficients
- Units: yards for distance, seconds for time, points for score, dimensionless probabilities [0,1]
- Breakdown regimes: d(1)=0 handled by 0.01 floor; min(d(3)) edge cases in Eq 6; plays with < 1 or > 46 frames; sacks removed; penalties removed; no vertical coordinate z

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Zwillinger & Kokoska CRC tables [3], point-line distance from MathWorld [11], Hanley & McNeil ROC AUC [15], Zou et al. ROC [13], Robin et al. pROC [14], Breiman random forests (implied via Liaw & Wiener [7]), Next Gen Stats [16], NFL Big Data Bowl [9]
- Multi-week traps: only 2018 season data; missing 3 week 1 games; no other seasons available ("We could not find the same data for other seasons"); temporal non-stationarity across weeks/season; the logistic weight inflection at mean frames 13.34183 is specific to 2018 frame distribution; week-specific strategies (e.g., week 1 vs week 16 examples)

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under defensive pressure (pass rushers, dropback categorization), QB may throw away or spike—these are removed from data, creating a selection bias where crisis behaviors are excluded from the model's training distribution
- Counter-trap: The model assumes target identity can be inferred from kinematics alone, but defensive backs can disguise coverage; the "closest defender" features may be strategically manipulated by defenders
- Clock: Time on clock is a predictor; end-of-game clock management changes play-calling (spikes, throwaways removed); the logistic weight W(2,3) depends on frame count t within play, not game clock, creating a timescale mismatch

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: 2D coordinates only (x,y), no vertical z—ball high in air vs close in projection is a veto condition explicitly noted in Discussion [PAGE 22-23]
- Biomechanical: Player position groups (WR, RB, TE, QB, etc.) but no individual player skill history, no route tree, no separation at catch beyond distance metrics
- Weather: Not in the 32 variables; no weather data despite being in play data? Actually weather isn't listed among the 32 variables. This is a veto layer—wind, precipitation, temperature absent.
- Surface/turf: Not mentioned.
- Breakdown: When vertical ball trajectory matters (deep balls, high points), the 2D model fails; the authors acknowledge this [PAGE 22-23]

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 specific counterfactual veto scenarios with predictions (not betting lines).
1. Vertical trajectory veto: If a pass is thrown with high arc where 2D distance suggests receiver is close but ball is actually high/near sideline defender, model overestimates P(C). Prediction: On deep post-corner routes with apex > certain height, model P(C) diverges from actual completion.
2. Crisis-play survivorship veto: Spikes and throwaways removed; if included as incomplete passes with target=None or QB as target, model's conditional P(C|T=i) distribution shifts. Prediction: Including pressure-induced throwaways as incomplete would lower overall AUC below 0.8829.
3. Temporal frame-count veto: W(2,3) logistic inflection at t=13.34183 assumes frame distribution mean; for plays with unusually long frame counts (>25, 95th percentile) or very short (<5), the weight interpolation misassigns P1 vs P2 importance. Prediction: For plays with frame count t > 30, target prediction accuracy drops below 85.48% (W(1) adjusted) because the logistic asymptote misweights late-play kinematics.

I need to ensure no betting lines. The word "probability" is fine, but I must avoid "odds," "spread," "total," "moneyline." The paper uses probabilities, AUC, accuracy—all fine.

Let me now write the full response. I need to be careful with LaTeX formatting inside XML. I'll use standard LaTeX.

Word count: I'll aim for substantial depth in each section.

Let me draft:

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

I should include verbatim quotes with [PAGE N] citations. Let me find good quotes:
- Page 1 abstract: "how likely is it for a pass to be completed in an NFL match while the ball is in the air?"
- Page 3: "Passing plays are considered to be the ones on which a pass was thrown, the quarterback was sacked, or any one of five different penalties was called..."
- Page 4: "All plays whose result was a sack were also removed..."
- Page 5: "In the case of the location of a player being exactly on top of the line created by the ball’s coordinates we set the distance to 0.01 to avoid issues of having a distance of 0"
- Page 7: Eq 7 and text
- Page 10-11: Eq 13 logistic
- Page 11: Eq 14 final formula, accuracy 86.92%
- Page 13: 32 variables
- Page 14: Table 2, Random Forest AUC 0.8829
- Page 15: "We therefore chose the Random Forest model..."
- Page 16: Table 3 example P(C)=0.579
- Page 20: "95.8% accuracy in predicting the result of the plays."
- Page 22-23: vertical coordinates limitation
- Page 23: "We could not find the same data for other seasons..."

I need to make sure the total is at least 1000 words. Let me write generously.

Let me begin composing the actual response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core architecture is a two-stage conditional decomposition: first, P(T=i | j, t) is estimated for every eligible offensive receiver i at every tracking frame j using purely kinematic distance geometry; second, P(C | T=i) is regressed via Random Forest on 32 explanatory variables, after which the law of total probability [PAGE 11] combines them into P(C) = Σᵢ P(C | T=i)P(T=i) [PAGE 11]. The gray-zone audit begins with the target-stage empirical estimator [PAGE 7], Eq. 7: Pk(T=i | j) = [min(d(k)ⱼ) / d(k)ᵢⱼ] × [1 / Σᵢ min(d(k)ⱼ)/d(k)ᵢⱼ], which guarantees unit probability mass per frame but is computed frame-by-frame under an explicit independence assumption—"what was used to determine these probabilities were only the aforementioned distances, and since from one frame to another on the same play these distances don't change much, the probabilities for the same player on the same play end up following a natural dependence pattern" [PAGE 6]. This is a tacit stationarity assumption that breaks down at route breaks, defensive jumps, or quarterback scrambles where inter-frame kinematics change discontinuously.

The kinematic chain itself rests on three distance operators: d (point-to-line distance, Eq. 3 [PAGE 5]), h (Euclidean point-to-point distance, Eq. 4 [PAGE 5]), and b = hₜ − hₜ₋₁ (Eq. 5 [PAGE 6]), all in yards. To avoid singularities, when d(1) = 0 exactly (player on the ball's line projection), the authors impose a 0.01-yard floor [PAGE 6], an ad hoc regularization whose breakdown regime is any sub-yard separation where the metric becomes numerically dominant despite physical irrelevance. The b metric is standardized into d(2) via Eq. 6 [PAGE 6], a piecewise shift that guarantees d(2) ≥ 1, introducing discontinuity at the sign change of min(d(3)ⱼ).

The weighting layer combines two empirical probabilities via f(W) = W·P₁ + (1−W)·P₂ [PAGE 7, Eq. 8], with four order-statistic weights W(1)–W(4) derived from matrix operations on D(k) [PAGE 8, Eq. 9–12]. The final logistic interpolation W(2,3)ₜ = 1 / (1 + e^((13.34183−t)/2.57)) [PAGE 10–11, Eq. 13] anchors the inflection at the mean frame count 13.34183 with scale 2.57 [PAGE 10], producing the final target probability in Eq. 14 [PAGE 11] and a reported target-prediction accuracy of 86.92% [PAGE 11]. Critical gray zones: (i) plays range from 1 to 46 frames, with 75% ≤ 16 frames [PAGE 9], so the logistic curve is heavily extrapolated at the tails; (ii) incomplete passes without a named target are assigned to the eligible receiver closest to the ball at incompletion [PAGE 4], a counterfactual target assignment that conflates "unreachable" with "targeted"; (iii) sacks and penalties are excised [PAGE 4], removing crisis plays from the likelihood and inducing survivorship bias toward structured dropbacks.

The completion stage trains Random Forest (mtry=15) via Leave Group Out Cross-Validation with plays as the grouping factor, ensuring no intra-play frame leakage across folds [PAGE 13]. RF achieves AUC = 0.8829 (10 folds), vastly exceeding binomial regression (logit AUC = 0.7874) and discriminants [PAGE 14, Table 2]. At a 0.5 decision threshold on the predicted target's conditional probability, frame-level accuracy reaches 95.8% [PAGE 20]. Yet the model operates exclusively on planar coordinates (x, y); the Discussion explicitly concedes that absent vertical z-coordinates, a ball close in projection but high in the air near a different receiver cannot be distinguished [PAGE 22–23]. This is a hard physical veto: deep high-arcing passes, jump balls, and poorly thrown wobblers violate the manifold assumption that 2D proximity implies catchability. Further, the dataset covers only the 2018 regular season minus three Week 1 games [PAGE 3], and the authors state no comparable data exists for other seasons [PAGE 23], making any cross-season or cross-week generalization an unverified extrapolation. The multi-week trap is that defensive coverage schemes, quarterback timing, and route distributions shift across the season, but W(2,3)'s inflection and scale are frozen to 2018's frame distribution.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All distances are in yards; time in seconds; scores in points; probabilities are dimensionless on [0,1].

Geometric operators [PAGE 5–6]:
\vec v = \begin{pmatrix} y_2 - y_1 \\ -(x_2 - x_1) \end{pmatrix}, \quad \vec r = \begin{pmatrix} x_1 - x_0 \\ y_1 - y_0 \end{pmatrix}, \quad d = |\hat v \cdot r| = \frac{|(x_2-x_1)(y_1-y_0) - (x_1-x_0)(y_2-y_1)|}{\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}} \quad \text{[Eq. 3]}
h = \sqrt{(x_1-x_0)^2 + (y_1-y_0)^2} \quad \text{[Eq. 4]}, \quad b = h_t - h_{t-1} \quad \text{[Eq. 5]}

Standardized distance difference d(2) [PAGE 6, Eq. 6]:
d(2)_{ij} = \begin{cases} d(3)_{ij} + 1 + |\min(d(3)_j)| & \text{if } \min(d(3)_j) > 0 \\ d(3)_{ij} + 1 - \min(d(3)_j) & \text{otherwise} \end{cases}

Empirical target probability [PAGE 7, Eq. 7], k ∈ {1,2}:
P_k(T=i \mid j) = \frac{\min(d(k)_j)}{d(k)_{ij}} \times \frac{1}{\sum_{i=1}^n \frac{\min(d(k)_j)}{d(k)_{ij}}} = \frac{1}{d(k)_{ij} \sum_{i=1}^n (d(k)_{ij})^{-1}}

Weighted fusion [PAGE 7, Eq. 8]:
f(W) = W \cdot P_1(T=i \mid j) + (1-W) \cdot P_2(T=i \mid j), \quad 0 \leq W \leq 1

Order-statistic machinery [PAGE 8, Eq. 9–12]: D(k) ∈ ℝⁿˢᵐ (m = 203,148 frames), Z(s) indicator matrix, d(k)* = diag{(D(k))ᵀZ(s)}, U ordered unique values, a_l = (l−1)/(u−1), W(r)_j = a_l for U_l = d(k)*_j. Weights W(1)–W(4) map to (k,s) pairs: W(1)→(3,1), W(2)→(2,1), W(3)→(4,1), W(4)→(4,2) with f(1−W(4)) for the inverted case [PAGE 8–9].

Final target probability [PAGE 11, Eq. 14], t = frame within play (1…46):
P(T=i \mid j, t, D(1), D(2), D(4)) = W(2,3)_t \cdot f(W(3)_j) + (1 - W(2,3)_t) \cdot f(W(2)_j)
W(2,3)_t = \frac{1}{1 + e^{(13.34183 - t)/2.57}} \quad \text{[Eq. 13]}

Completion model [PAGE 11, Eq. 15]:
P(C) = \sum_{i=1}^n P(C \mid T=i) P(T=i)

Random Forest: 32 explanatory variables [PAGE 11–13], mtry = 15 [PAGE 14], LGOCV with plays as groups [PAGE 13]. AUC results [PAGE 14, Table 2]: Random Forest 10-fold 0.8829 (~3.88 h), Random Forest 5-fold 0.8825 (~1.78 h); BR logit 0.7874/0.7877; BR probit 0.7861/0.7864; LDA 0.7840/0.7843; BR cloglog 0.7814/0.7816; QDA 0.7487/0.7462. Frame-level accuracy at 0.5 threshold: 95.8% [PAGE 20]. Correlation vs completion percentage [PAGE 20, Table 5]: P(C|T=i) per frame Pearson 0.998, concordance 0.998; P(C) per frame 0.978/0.958; average per play lower.

Breakdown/singularity regimes: d(1)=0 floored to 0.01 yards [PAGE 6]; min(d(3)) sign-change discontinuity in Eq. 6 [PAGE 6]; plays with <1 or >46 frames outside logistic domain [PAGE 10]; only x,y tracked—no vertical ball coordinate z [PAGE 22–23]; sacks and penalties removed pre-modeling [PAGE 4]; three Week 1 games absent [PAGE 3]; single-season (2018) non-renewable dataset [PAGE 23].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological genealogy traces to classical geometric statistics (point-line distance from Weisstein's MathWorld [PAGE 26, ref. 11]), foundational ROC/AUC theory (Hanley & McNeil [PAGE 26, ref. 15]; Zou et al., Circulation [PAGE 26, ref. 13]), and the R computational ecology (tidyverse, caret, randomForest by Liaw & Wiener [PAGE 26, ref. 7], gganimate [PAGE 26, ref. 8]). The paper explicitly locates itself within the NFL Next Gen Stats (NGS) ecosystem [PAGE 20, ref. 16], whose shoulder-pad sensors chart player movement "within inches" [PAGE 20], and the Kaggle NFL Big Data Bowl 2021 competition [PAGE 3, ref. 9], which supplied all 2018 regular-season tracking data except three Week 1 games.

The scientific lineage is therefore modern sports tracking meets classical binary classification, but it carries a multi-week trap embedded in its data contract. The dataset is monolithic: 2018 only, 253 games, passing plays defined as throws, sacks, or five specific penalties [PAGE 3]. The authors acknowledge they "could not find the same data for other seasons, which unfortunately made it impossible to expand our work through more games and seasons" [PAGE 23]. This creates a temporal non-stationarity hazard: the logistic weight W(2,3) inflects at 13.34183 frames with scale 2.57, parameters estimated via grid search on 2018's frame-count distribution (mean frames per play ≈ 13.34, 75% ≤ 16 frames, 95% ≤ 25) [PAGE 9–10]. If offensive tempo, dropback depth, or tracking-frame rates shifted in 2019–2021, the interpolation between early-play W(2) and late-play W(3) importance would misfire.

The multi-week trap also appears in the illustrative plays. The Julio Jones reception is Week 1 (Eagles at Falcons) [PAGE 15–16]; the Geronimo Allison and Rob Gronkowski touchdowns are both Week 1 [PAGE 20–21]; the JuJu Smith-Schuster incompletion is Week 16 (Steelers at Saints) [PAGE 18–19]. Because the NGS comparison data from the NFL website covers only Week 1 improbable catches [PAGE 20–21], and one of those three plays is from a missing game (Broncos vs. Seahawks) [PAGE 20], the external validation is restricted to two Week 1 plays. Week 1 features scheme volatility (new installations, rust, preseason-carryover tendencies), whereas Week 16 contains playoff-race game scripts. The model's frame-count clock and kinematic priors were never validated across that seasonal arc, so extrapolating from Week 1-high-variance plays to late-season structured scripts is an untested counterfactual.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: The data pipeline removes spikes ("quarterback simply throws the ball to the ground for the clock to stop") and throwaways ("quarterback is very pressured by the defense and throws the ball away to avoid a sack") [PAGE 4]. These are precisely crisis behaviors—high-pass-rusher counts, compressed dropbacks, end-of-half clock management. By excluding them from both target and completion stages, the model regresses toward non-crisis, structured dropbacks. The conditional completion probability P(C|T=i) therefore learns from a population that systematically underrepresents pressure-induced bad decisions and clock-stopping throws. When the quarterback is actually under duress, the model's explanatory variables (number of pass rushers, dropback categorization, time on clock) still enter the Random Forest, but the response distribution was censored of the most extreme crisis outcomes.

Counter-trap: The target-stage model assumes kinematic proximity identifies intent: the player nearest the ball's line projection or closing distance fastest is most likely the target [PAGE 7]. A defensive coordinator can counter-trap this by having coverage defenders converge on the non-target to manipulate d(1) and d(2), or by "bracketing" the actual target so that a decoy appears closer in 2D projection. Because the target stage uses only distances—and explicitly ignores route trees, player-specific release quality, and coverage disguise—the adversary can inflate P(T=i) on decoys, diluting the mass on the true receiver and biasing P(C) via Eq. 15.

Clock: Two clocks operate at different scales. The game clock ("time on clock of play, in minutes and seconds" [PAGE 3]) is a predictor in the completion model, yet the logistic weight W(2,3)ₜ indexes the intra-play frame counter t (1…46), not game time [PAGE 10–11]. A two-minute-drill hurry-up changes snap-to-release cadence and frame density, but W(2,3) remains anchored to the 2018 mean frame count. Thus under clock-pressure compression, the early-play/late-play interpolation may assign W(3) importance too late or too early, breaking the target probability just when decision speed matters most. Conversely, in a clock-consuming grind, plays stretch beyond the 95th-percentile 25-frame boundary [PAGE 9], pushing t into the logistic asymptote where W(2,3)ₜ → 1 and the model over-relies on W(3) even if early-frame W(2) kinematics were more informative.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The most severe, author-admitted veto is the absence of the vertical coordinate z. Tracking data provide x (0–120 yards) and y (0–53.3 yards) only [PAGE 4]. The Discussion states: "If the vertical coordinates of the ball were also available, this could certainly be used to improve our framework even further... sometimes the ball could be very close to a player when looking at the available x and y coordinates, but in reality the ball is very high up in the air and going in the direction of a player further up in the field" [PAGE 22–23]. This is a hard veto on deep posts, corner routes, high-arcing jump balls, and poorly tipped passes where planar proximity ≠ catchability. No imputation of z is attempted; the model treats the field as a manifold.

Biomechanical layer veto: The 32 explanatory variables include player position groups (WR, RB, TE for target; LB, DB, S for defenders) [PAGE 11–12] but not individual player identity, historical catch rate, route tree, release timing, or separation-at-catch beyond instantaneous distance. The "closest defensive player" is defined relative to the target's line projection, and the "second closest" by Euclidean distance [PAGE 12]. These are static kinematic proxies for coverage, not dynamic defensive technique (press vs. off, inside leverage, safety help). A elite cornerback in tight man coverage and a busted-zone safety may produce identical distance vectors but radically different completion likelihoods; the model cannot veto on player-specific mismatch layers.

Weather/environmental layer veto: None of the 32 variables includes wind, precipitation, temperature, or surface conditions [PAGE 11–13]. Play data include yard line, score, quarter, down, and distance, but no environmental modifiers. Wind speed and direction materially alter ball flight and receiver adjustment, yet the model has no weather node, so high-wind games violate the stationarity assumption of the distance-to-completion mapping.

Veto adjudication outcome: The vertical-coordinate veto is existential—when |z_ball − z_receiver| is large but |x-y projection| is small, P(C|T=i) is systematically miscalibrated upward. The weather and biomechanical vetoes are contextual: they degrade accuracy selectively in extreme conditions but do not invalidate the model in temperate, structured dropbacks. The paper's own comparison to NGS Week 1 plays [PAGE 20–22] suggests its framework outperformed the league's proprietary metric in those specific instances, but without z-data or cross-season replication, the veto layers remain unquantified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions (all probabilities dimensionless; no betting lines invoked):

Veto 1 — Vertical-trajectory decoupling. Counterfactual: Reprocess all deep passes (>20 yards air distance) where the ball's apex height exceeds the receiver's reachable window, using synthetic z-coordinates reconstructed from launch angle and spin. Under this veto, planar proximity d(1) no longer implies catchability. Prediction: For the subset where 2D distance suggests P(C|T=i) > 0.6 but vertical separation indicates the ball is uncatchable, observed completion rate falls below 0.40, producing a negative calibration residual that the current 2D model cannot capture. Verifiable via existing NGS launch metrics if z-data were appended.

Veto 2 — Crisis-play survivorship restoration. Counterfactual: Reintroduce spikes and throwaways (currently removed [PAGE 4]) as incomplete observations with target = passer or "none," retaining their pressure covariates (pass rushers, dropback type, time on clock). Prediction: The Random Forest AUC for completion drops from 0.8829 [PAGE 14] to ≤ 0.8400, and frame-level accuracy at the 0.5 threshold falls below the reported 95.8% [PAGE 20], because the response distribution now includes high-entropy pressure outcomes that the kinematic feature set cannot separate from structured completions.

Veto 3 — Frame-count tail extrapolation. Counterfactual: Stratify target-prediction accuracy by play length t. The logistic weight W(2,3)ₜ is calibrated on a mean of 13.34 frames with 95% of plays ≤ 25 frames [PAGE 9–10]. Prediction: For plays with t > 30 frames (the long tail), target-prediction accuracy declines below the adjusted W(1) baseline of 85.48% [PAGE 9, Table 1] because W(2,3)ₜ → 1 over-weights W(3) late-play kinematics after routes have broken; for plays with t < 5 frames, accuracy falls below 80% because W(2,3)ₜ → 0 over-weights W(2) before ball flight has stabilized. Both are verifiable by re-computing Table 1 stratified on t without retraining.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "undated - exPress Contextual Valuation of Individual Players Within Pressing Situations in Soccer - Lee et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4752
---

<NATIVE_REASONING>
The user wants me to analyze a soccer analytics paper about "exPress: Contextual Valuation of Individual Players Within Pressing Situations in Soccer" by Lee et al.

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1000 words total across these sections. The THINK_TRACE must be >=400 words. Other sections should contribute to reaching 1000+ words.

I must not mention betting lines. No spreads, totals, moneylines, odds.
I must not invent fake ratios. Use formal LaTeX equations, SI units, information/probability units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers from the source text provided.

Let me look at the source text page markers. The text has page numbers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16. Actually looking at the markdown, there are page breaks indicated by numbers like "1", "2", etc. But the user said PAGES: 17. The source text seems to have page markers embedded.

I should cite page numbers like [PAGE 4], [PAGE 5], etc.

Let me extract key facts from the source:
- Paper: exPress: Contextual Valuation of Individual Players Within Pressing Situations in Soccer by Minho Lee et al.
- 17 pages (per user), but the text shows up to page 16 maybe.
- Data: 200 matches: 34 Bayer Leverkusen 2023/24 Bundesliga, 64 2022 FIFA World Cup, 51 UEFA Euro 2024, 51 UEFA Euro 2020. [PAGE 3]
- SPADL preprocessing: 9 attributes. [PAGE 3]
- Feature integration: event data + StatsBomb-360. Missing players handled by tree-based missingness or zero imputation. [PAGE 3-4]
- Target: xP = P(G=1 | S_t, p_t') where G=1 if possession regained within 5 seconds. [PAGE 4]
- Game state S_t = [a_{t-2}, a_{t-1}, a_t] previous three actions. [PAGE 4]
- Model: XGBoost. Train on 36,948 samples, test on 14,504 (2022 World Cup test set). 10,339 training positives, 4,290 test positives. 20% validation. [PAGE 4]
- Results Table 1: XGBoost ROC AUC 0.607, Log Loss 0.660. Others lower. [PAGE 5]
- Table 2: Different success criteria. 5 seconds ROC AUC 0.618 Log Loss 0.646. 2 actions ROC AUC 0.712 Log Loss 0.221 (seems suspicious, maybe leakage?). 5 seconds in 3m radius 0.618/0.213, 5m radius 0.618/0.316, 9m radius 0.621/0.431. [PAGE 5]
- Application 5.1: Positional feedback. Figure 2 example: xP 0.2501 actual, adjustment player 6 closer to player 7 doesn't change, then player 4 closer to player 5 increases to 0.3388. [PAGE 6-7]
- Figure 3: Press-resistance. Player 10 pressing player 12 xP 0.4744. Adjust player 5 left, xP drops to 0.4675. [PAGE 7]
- Section 5.2: Team level at 2022 World Cup. xP Difference = actual - expected. Uruguay, Netherlands top-right. Japan, Iran high xP but negative difference. [PAGE 8]
- Section 5.3: Player level. David Raum, Enzo Fernandez top-right. Sofyan Amrabat high success. Daizen Maeda, Idrissa Gueye bottom-right (frequent but low efficiency). Hakimi vs Ziyech contrast. Messi top-right press-resistance. Musiala top-left struggles. Mac Allister vs Ounahi. [PAGE 9-10]
- Limitations: opponent strength affects xP Difference; player identities not explicitly considered; coordinates not directly related to ball; StatsBomb-360 missing players due to broadcast camera. [PAGE 11]
- Conclusion: XGBoost explainable/interpretable. [PAGE 11-12]
- Appendix A.1 features table. [PAGE 15-16]
- Appendix A.2 SoccerMap details: 68x105 grid, channels for presser/teammates/opponents, PyTorch, Cross Entropy, batch 16, lr 1e-3, weight decay 1e-8, early stopping patience 10. [PAGE 16]

Now, for the sections:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
I should discuss the mathematical derivation of xP, the conditional probability, the game state definition, the XGBoost objective, the train/test split, the oddity in Table 2 (2 actions giving 0.712 AUC and 0.221 Log Loss - possible target leakage or very easy classification), the spatial radius results, the counterfactual simulations, limitations (opponent strength confounding, missing player IDs, camera occlusion). Gray zones: what does "regained possession within 5 seconds" mean exactly? Is it the same possession chain? How is possession defined? The paper doesn't explicitly define possession recovery beyond G=1. The 2-action criterion having much better metrics suggests either strong temporal proximity signal or leakage. Also xP Difference conflates team quality and opponent strength. Missing player identifiers in 360 data means features like "closest players" are anonymous, limiting individual attribution.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
Equation (1): xP = P(G=1 | S_t, p_t'). G binary {0,1}. Time in seconds. 5-second window. Spatial radius in meters (3m, 5m, 9m). Pitch 105x68 meters. Game state sequence length 3. Train/test split: 36,948 train, 14,504 test. Positives: 10,339 train, 4,290 test. Validation 20%. XGBoost loss: logistic (binary cross entropy) though not explicitly stated, but Log Loss reported. SoccerMap: 68x105 grid, 5 conv layers, 4 max-pool, replication padding, batch 16, lr 1e-3, weight decay 1e-8, Cross Entropy, early stopping patience 10.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
Lineage: Andrienko et al. [4] pressure quantification distances/angles [PAGE 2]. Fernandez-Navarro [26] spatial dimensions. Low et al. [27] high-press vs deep-defend. Forcher et al. [28] optimal spatial conditions but limited to possessions >=5s and >=3 passes, omitting counterpressing <5s [PAGE 2]. Herold et al. [30] pressure on receivers vs passing success. Forcher et al. [31] four defensive principles. Gu et al. [32] 3D body motion Pressure Matrix. Robberechts [5] VPEP risk-reward. Bauer and Anzer [33] counterpressing definition. Merckx et al. [6] rule-based pressing detection, extending VPEP. Bojinov and Bornn [25] pressing game optimal defensive disruption. Multi-week traps: tournament format (World Cup) limits matchups, opponent strength confounding, small sample (7 games max), regression to mean over a multi-week tournament, single-game variance.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
This is about how teams/players adapt. When pressed, do they revert to crisis habits (long balls, safe passes) or counter-trap (use the press against them)? The clock: 5-second window is the decision horizon. If possession not regained in 5s, xP=0. Teams under press may slow play to run down the clock or exploit pressing gaps. Messi press-resistance vs Musiala struggle. Counter-trap: moving player 5 to create outlet reduces xP from 0.4744 to 0.4675 (small but directional). Crisis habit regression: players like Maeda/Gueye press frequently but inefficiently—habitual pressing without positional coherence.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
Physical: pitch dimensions 105x68m, player speeds, distances. Biomechanical: 3D body motion parameters (Gu et al. [32]) not in exPress; exPress uses x/y only. Weather: not mentioned in paper, but broadcast camera occlusion (rain, fog, stadium angles) affects 360 data visibility. Veto: if camera coverage misses defenders, xP is biased. Breakdown: when <3 players from each team captured, features missing; model uses default split or zero imputation. Singularity: when possession recovery is spatially distant from press origin, attribution fails (spatial factor in Table 2 discussion). Weather veto not directly addressed but implied by broadcast data limitations.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios.
1. Camera occlusion veto: If a pressing event has <3 visible opponents/teammates in 360 data, the feature vector has missing values. XGBoost handles missing via default direction, zero imputation used alternatively. Veto: exclude events with incomplete 360 coverage. Prediction: ROC AUC on complete-case subset will differ from reported 0.607 (likely lower due to reduced sample, or higher if missingness is informative noise).
2. Temporal leakage veto: The "2 actions" success criterion yielded AUC 0.712, Log Loss 0.221. Veto: require spatial co-location (press origin and recovery within X meters) to avoid attributing distant recoveries to the press. Prediction: AUC for 2-action criterion with spatial constraint will drop toward the 5-second baseline (~0.60-0.62).
3. Opponent strength veto: xP Difference aggregates actual vs expected without opponent adjustment. Veto: stratify by opponent quality (e.g., top 8 vs bottom 8 at World Cup). Prediction: teams like Uruguay/Netherlands xP Difference will shrink when controlling for opponent press-resistance; Japan/Iran negative difference may be partly due to facing strong press-resistant opponents.

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let's aim for roughly 180-220 words per section for the other 5 sections = ~1000, plus THINK_TRACE 400+ = 1400+. That should satisfy.

No betting lines. No fake ratios.

Let's write.

Need exact [PAGE N] markers and verbatim quotes where appropriate. I can quote short phrases.

Check page numbers in source text:
- Page 1: Intro
- Page 2: Related Works (Andrienko, Fernandez-Navarro, Low, Forcher [28], Herold, Forcher [31], Gu, Robberechts, Bauer and Anzer, Merckx)
- Page 3: Data (200 matches, SPADL)
- Page 4: Implementation Details (missing data, temporal dynamics, equation 1, game state, binary outcome, XGBoost, train/test split numbers)
- Page 5: Results (Table 1, Table 2, discussion of limitations)
- Page 6: Application 5.1 (Figure 2 discussion starts)
- Page 7: Figure 2 continued, Figure 3 discussion
- Page 8: Section 5.2 Team level, Figure 4, Uruguay/Netherlands, Japan/Iran
- Page 9: Section 5.3 Player level, Figure 5/6, Raum, Fernandez, Amrabat, Maeda, Gueye, Hakimi, Ziyech
- Page 10: Figure 7/8, Messi, Musiala, Mac Allister, Ounahi
- Page 11: Discussion (limitations: opponent strength, player identities, coordinates vs ball, StatsBomb-360 missing)
- Page 12: Conclusion, Acknowledgments
- Page 13-16: References and Appendices

I will cite pages accordingly.

Let's draft carefully.

Word count check: I'll write generously.

THINK_TRACE: I need deep multi-hop derivation.
- Start with the conditional probability definition.
- Derive the game state as a Markov-ish window of last 3 actions.
- The binary label G.
- XGBoost ensemble of regression trees optimizing logistic loss (implied by Log Loss).
- Train/test split by tournament to avoid temporal leakage? Actually they used World Cup as test, others as train.
- Table 2 oddity: 2 actions AUC 0.712 vs 5 seconds 0.618. Why? Because 2 actions is a very short horizon, likely the presser or teammate immediately wins the ball back (tackle/interception), making target easier. This is a gray zone: does "within 2 actions" measure pressing success or just immediate defensive action success?
- Spatial radius: 3m, 5m, 9m all have same AUC 0.618/0.621 but Log Loss changes drastically (0.213, 0.316, 0.431). This means calibration worsens as radius increases even if ranking (AUC) stays similar. Gray zone: the model ranks well but is overconfident/underconfident depending on spatial tolerance.
- Counterfactuals: moving player 6 closer to player 7 didn't change xP (0.2501 -> 0.2501) because player 5 remained free. Moving player 4 to mark player 5 raised to 0.3388. This shows non-additive, combinatorial coverage: the value of a position depends on the coverage set of other defenders. A gray zone: the model simulates positions but doesn't simulate opponent reaction (the opponent doesn't re-optimize passing targets after the defensive move).
- Missing data: 360 data lacks player IDs, variable count. Tree models handle missing natively; zero imputation alternative. Gray zone: zero imputation of coordinates places missing players at origin (0,0), likely off-pitch or corner, creating spurious distance features.

That's plenty for 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
xP equation.
G definition.
S_t definition.
Train/test counts.
Metrics definitions: ROC AUC, Log Loss.
SoccerMap architecture details.
Pitch dimensions 105m x 68m.
Time in seconds.
Radius in meters.

RETROCAUSAL_GENEALOGY: Cite [PAGE 2] for related works lineage. Mention VPEP [5], Merckx [6], Bauer & Anzer [33]. Multi-week traps: World Cup sample size, opponent strength, tournament variance.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (Maeda/Gueye frequent but inefficient), counter-trap (player 5 outlet reducing xP), clock (5-second horizon). Messi vs Musiala press-resistance. Mac Allister vs Ounahi.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (105x68 pitch, distances in meters), biomechanical layer (3D pressure matrix absent, only 2D coordinates), weather/occlusion layer (broadcast camera missing players). Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above.

Let's write it out now. Need to ensure no betting terms. Words like "odds" are banned. I'll avoid "odds" entirely. Use "probability", "likelihood", "ROC AUC", "Log Loss".

Word count: Let's estimate. I'll write substantial paragraphs.

Start.
</NATIVE_REASONING>

<THINK_TRACE>
The exPress framework defines pressing effectiveness as a conditional probability over a finite temporal horizon: xP = P(G = 1 | S_t, p_t'), where G is a binary indicator equal to 1 if the defending team regains possession within five seconds after the pressing action p_t' occurs at time t', and 0 otherwise [PAGE 4]. The game state S_t is constructed as an ordered triple of the preceding SPADL actions, S_t = [a_{t-2}, a_{t-1}, a_t], imposing a short-run Markov assumption that only the immediately preceding three actions contextualize the press [PAGE 4]. This is a strong structural assumption: it treats pressing as a conditionally independent event given the recent action sequence, ignoring longer-term tactical fatigue, match score state, and player-specific pressing tendencies. The gray zone emerges because the paper never formally defines "possession regained" beyond the binary label G; it does not specify whether recovery must be by the pressing team, whether a loose ball cleared to touch counts, or whether the five-second clock resets on a subsequent pressing action.

Model estimation uses XGBoost, an additive ensemble of regression trees optimizing a logistic loss consistent with the reported Log Loss metric [PAGE 4, PAGE 5]. The train-test split is not random; the 2022 FIFA World Cup is held out as the test set, while the 2023/24 Bayer Leverkusen Bundesliga matches, UEFA Euro 2024, and UEFA Euro 2020 constitute training, yielding 36,948 training samples and 14,504 test samples, with 10,339 and 4,290 positive pressing-recovery events respectively [PAGE 4]. A 20% validation split is reserved internally [PAGE 4]. This split introduces a temporal and competitive-contrast confound: training is dominated by club football and continental championships, whereas testing is a single international tournament with compressed fixture schedules, knockout stakes, and heterogeneous opponent quality.

Table 2 exposes a critical gray-zone singularity in target definition. When success is measured as possession regained within two actions, XGBoost achieves ROC AUC 0.712 and Log Loss 0.221 [PAGE 5], a dramatic improvement over the five-second criterion (ROC AUC 0.618, Log Loss 0.646). The two-action window is so temporally proximate that it likely captures immediate tackles or interceptions directly attributable to the presser rather than a broader pressing scheme, creating target leakage between action identity and outcome. Conversely, extending the window to seven seconds degrades performance to ROC AUC 0.582, suggesting that the causal signal of the press dissipates rapidly. Spatially, the three-, five-, and nine-meter radius conditions all yield nearly identical ROC AUC (0.618, 0.618, 0.621) but diverging Log Loss (0.213, 0.316, 0.431) [PAGE 5], indicating that rank-ordering ability is stable while probability calibration deteriorates as the spatial attribution zone widens. The model can distinguish better from worse presses but cannot reliably calibrate absolute success probability over larger recovery zones.

The counterfactual application in Figure 2 reveals combinatorial non-additivity in defensive positioning [PAGE 6-7]. Moving Home player 6 closer to Away player 7 leaves xP unchanged at 0.2501 because Away player 5 remains unmarked; only when Home player 4 shifts to mark player 5 does xP rise to 0.3388. This demonstrates that pressing value is not separable across individual defenders but emerges from coverage-set interactions. A corresponding gray zone is that the simulation holds attacker positions fixed; it does not model how the pressing team's movement would induce the ball carrier to alter pass selection or dribble direction, so the counterfactual xP is a partial-equilibrium estimate rather than a full game-theoretic equilibrium.

Data limitations compound these identification problems. StatsBomb-360 provides positional data only for players visible within broadcast camera coverage, and player identifiers are absent [PAGE 3]. When fewer than three players per team are captured, distance and closest-player features are missing; the authors either rely on XGBoost's native missing-value split-direction learning or impute zeros [PAGE 3-4]. Zero imputation of Cartesian coordinates places phantom players at the origin, likely generating spurious distance-to-goal and distance-to-sideline features. This is a breakdown regime: xP estimates for pressing events occurring near the edges of camera coverage are systematically biased because the feature space encodes occlusion as absence rather than uncertainty.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The central estimand is defined in Equation (1) [PAGE 4]:

xP = P(G = 1 | S_t, p_t')                                          (1)

where:
- G ∈ {0, 1} is the binary possession-recovery label; G = 1 if possession is regained within Δt = 5 seconds after t', otherwise G = 0 [PAGE 4].
- S_t = [a_{t-2}, a_{t-1}, a_t] is the game-state vector comprising the previous three SPADL actions [PAGE 4].
- p_t' denotes the pressing action at subsequent time t' > t [PAGE 4].
- The pitch coordinate system is a full-pitch scale of 105 m × 68 m [PAGE 15].
- Temporal criteria evaluated in Table 2 include 3 s, 5 s, 7 s, and action counts of 2, 4, and 6 [PAGE 5].
- Spatial radii for possession recovery are 3 m, 5 m, and 9 m from the press origin [PAGE 5].

Model and data operators:
- Classifier: Extreme Gradient Boosting (XGBoost) ensemble of decision trees [PAGE 4, PAGE 5].
- Loss: Binary logistic loss consistent with reported Log Loss [PAGE 5].
- Training sample count: N_train = 36,948 [PAGE 4].
- Test sample count: N_test = 14,504 [PAGE 4].
- Positive labels in training: n_{train,+} = 10,339 [PAGE 4].
- Positive labels in testing: n_{test,+} = 4,290 [PAGE 4].
- Validation holdout: 20% of training data [PAGE 4].
- Train/test partition: 2022 FIFA World Cup as test set; remaining competitions as training [PAGE 4].

Baseline and deep-learning comparisons [PAGE 5, PAGE 16]:
- Logistic Regression: ROC AUC 0.508, Log Loss 0.691.
- Naive Bayes: ROC AUC 0.531, Log Loss 0.809.
- KNN: ROC AUC 0.517, Log Loss 2.919.
- Random Forest: ROC AUC 0.593, Log Loss 0.597.
- MLP Classifier: ROC AUC 0.577, Log Loss 0.721.
- SoccerMap (CNN): ROC AUC 0.596, Log Loss 0.721.
- XGBoost: ROC AUC 0.607, Log Loss 0.660.

SoccerMap architecture [PAGE 16]:
- Input grid: 68 × 105 spatial cells, channels for presser, teammates, and opponents, plus distance and angle features relative to reference points.
- Convolutional stack: five convolutional layers and four max-pooling layers with replication padding.
- Optimizer and schedule: PyTorch implementation, Cross Entropy loss, batch size 16, learning rate 1e-3, weight decay 1e-8, step learning-rate scheduler, early stopping patience 10.

Breakdown and singularity regimes:
- Missing-data regime: If fewer than three teammates or opponents are visible in StatsBomb-360, distance and closest-player features are unavailable [PAGE 3].
- Zero-imputation singularity: Missing coordinates imputed as (0, 0) inject the pitch origin as a synthetic player location, distorting distance-based features [PAGE 3-4].
- Spatial attribution singularity: When press origin and recovery location are distant, pressing outcome cannot be causally attributed to the press [PAGE 5].
- Temporal attribution boundary: Two-action success windows produce inflated performance (ROC AUC 0.712, Log Loss 0.221), indicating leakage from immediate defensive actions rather than sustained pressing pressure [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
exPress descends from a multi-year lineage of soccer defensive analytics that increasingly shifted from event-only aggregation to spatio-temporal positioning. Andrienko et al. [4] introduced pressure quantification via inter-player distances and angles, establishing the geometric foundation that exPress inherits [PAGE 2]. Fernandez-Navarro et al. [26] categorized defensive actions across four spatial dimensions, while Low et al. [27] distinguished high-pressing from deep-defending strategies using team dispersion and line-spacing metrics [PAGE 2]. Forcher et al. [28] identified optimal spatial conditions for ball recovery, emphasizing concentrated pressure on the ball carrier and proximate areas, but explicitly restricted analysis to possessions lasting at least five seconds with three or more passes, thereby excluding counterpressing scenarios occurring within five seconds of possession loss [PAGE 2]. Herold et al. [30] showed that reduced pressure on receivers correlates with higher passing success, yet focused narrowly on deep runs and changes of direction [PAGE 2].

The decision-theoretic layer begins with Robberechts' VPEP framework, which contextualized pressing through risk-reward evaluation [PAGE 2, PAGE 5]. Bauer and Anzer [33] provided a formal definition of counterpressing as immediate post-turnover ball recovery, quantifying its risk-reward trade-off but failing to compare it against fall-ball alternatives [PAGE 2]. Merckx et al. [6] extended VPEP with a rule-based pressing detector that modeled ball recovery, pass selection, and goal-scoring opportunities [PAGE 2]. More recently, Gu et al. [32] introduced 3D body-motion parameters to construct individual Pressure Matrices and a graph-based Player Pressure Map, advancing beyond 2D coordinates but remaining outside exPress's feature set [PAGE 2]. Bojinov and Bornn [25] framed optimal defensive disruption as a pressing game, prefiguring exPress's contextual valuation [PAGE 13].

A multi-week trap is embedded in the evaluation design. The test set is exclusively the 2022 FIFA World Cup, a short-format tournament in which each team plays at most seven matches [PAGE 8]. This creates small-sample variance: pressing efficiency metrics such as xP Difference are estimated over few games against a fixed, non-representative schedule of opponents. Because the tournament structure limits matchups, some teams face disproportionately strong or weak press-resistant opposition, and xP Difference may reflect opponent quality rather than intrinsic pressing quality [PAGE 8, PAGE 11]. Retrocausally, a team that presses frequently but against elite ball-progressors (e.g., Argentina with Messi) will record a depressed xP Difference not because its pressing scheme is poor, but because the conditional probability of recovery is structurally lower against superior press-resistance [PAGE 10, PAGE 11]. The model does not condition xP on opponent press-resistance quality, so cross-tournament generalization is unproven: a pressing value derived from Bundesliga and Euro data may not transfer to World Cup knockout-stage intensity without recalibration.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper's player-level analysis reveals recursive theory-of-mind dynamics between pressing and press-resistance. In the pressing role, Daizen Maeda and Idrissa Gana Gueye occupy the bottom-right quadrant of Figure 5: high pressing frequency but low xP Difference per pressing [PAGE 9]. This pattern is consistent with crisis habit regression—players who habitually engage in pressing without optimal positional support, generating high activity volume but low conversion because their pressing actions occur in suboptimal spatial configurations. By contrast, David Raum and Enzo Fernandez occupy the top-right quadrant, combining high frequency with high effectiveness, suggesting that their pressing is recursively calibrated to the positioning of teammates and the likely passing lanes of the opponent [PAGE 9]. Sofyan Amrabat demonstrates sustained pressure with high success, indicating that his pressing habits are aligned with coherent team shape rather than isolated urgency [PAGE 9].

In the press-resistance role, the recursion inverts: the pressed player must anticipate the presser's intended position and choose an action that breaks the defensive coverage. Lionel Messi, in the top-right quadrant of Figure 7, is frequently pressed yet exhibits exceptional press-resistance efficiency, significantly outperforming model expectations [PAGE 10]. His recursive theory of mind allows him to receive under pressure, shield, and progress play, converting defensive pressure into offensive continuity. Jamal Musiala, also frequently targeted (top-left quadrant), struggles to navigate pressing situations effectively, with a lower xP Difference suggesting he is forced into unfavorable decisions or turnovers under pressure [PAGE 10]. This contrast indicates that press-resistance is not merely technical ball retention but a recursive read of pressing geometry: where are the pressers, where are the open passing lanes, and how does the presser's commitment create space elsewhere?

The counter-trap mechanism is illustrated in Figure 3 [PAGE 7]. When Home player 10 presses Away player 12, xP is 0.4744. Away player 5 shifts to the left flank, creating an additional passing path and outlet. The predicted pressing success probability drops to 0.4675. The change is small in absolute terms but directional: by preemptively occupying a press-breaking position, the attacking team reduces the value of the press without changing the presser's location. The clock is the governing constraint: the entire valuation collapses if possession is not regained within five seconds [PAGE 4]. Therefore, press-resistance strategies that merely extend possession beyond five seconds—through retention, backward passes, or goalkeeper involvement—negate the press's expected value even if they do not immediately generate a counterattack. The counter-trap is temporal: survive the clock, and the press depreciates to zero.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The pitch is fixed at 105 m × 68 m [PAGE 15], and all spatial features operate in Euclidean meters. Distances to the nearest opponent, closest-player coordinates, and recovery radii (3 m, 5 m, 9 m) are physical distances [PAGE 3, PAGE 5, PAGE 15]. A physical veto applies when a pressing event occurs near the sideline or goal line, where relative-distance features are compressed by the boundary [PAGE 15]. The breakdown regime is the camera-coverage boundary: StatsBomb-360 captures only players visible to the broadcast camera, so players outside the frame are absent from the feature vector [PAGE 3]. If a pressing sequence unfolds near the touchline where camera angles occlude defenders, the model treats missing defenders as non-existent, inflating the apparent passing freedom of the ball carrier and biasing xP downward for the pressing team.

Biomechanical layer: exPress uses two-dimensional x/y coordinates without explicit body orientation, center-of-mass velocity, or 3D body-motion parameters [PAGE 3, PAGE 11]. Gu et al. [32] showed that 3D body-motion parameters improve individual pressure quantification [PAGE 2], but exPress does not incorporate them. A biomechanical veto applies when two players occupy identical coordinates but face opposite directions; one may be actively pressing while the other is retreating, yet the feature vector cannot distinguish them. The model's assumption that pressing efficacy derives from spatial positioning alone breaks down when body orientation and momentum determine whether a press is committed or recoverable.

Weather and broadcast layer: Weather is not modeled in the source text, but its effect is mediated through data capture. Broadcast camera coverage is affected by stadium architecture, camera angle, and environmental conditions that obscure players [PAGE 3]. When 360 data is incomplete, the authors either leverage XGBoost's native missing-value handling or impute zeros [PAGE 3-4]. Zero imputation places missing players at the coordinate origin, creating phantom defenders or attackers at a fixed pitch location, which corrupts distance-to-opponent and closest-player features [PAGE 3, PAGE 15]. A veto should be triggered for any pressing event where fewer than three players per team are captured, because the spatial context is no longer a faithful representation of the pressing situation.

Singularity adjudication: The model is singular when press origin and ball recovery are spatially disjoint [PAGE 5]. In Table 2, the authors acknowledge that distant recovery makes attribution difficult [PAGE 5]. A veto is warranted when the spatial distance between the pressing action and the possession-recovery event exceeds a defensible tactical radius (e.g., beyond 9 m), because the outcome cannot be causally linked to the press under study. Similarly, the two-action success criterion is a temporal singularity: it conflates immediate tackle success with pressing-scheme effectiveness and should be vetoed in favor of the five-second standard with spatial co-location constraints [PAGE 5].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Incomplete 360 coverage exclusion. Remove all pressing events in which fewer than three teammates or three opponents are visible in the StatsBomb-360 feed, thereby eliminating zero-imputed or missing-value feature vectors. Prediction: The ROC AUC on this complete-case subset will deviate from the reported 0.607 [PAGE 5]. If missingness is random and XGBoost's native handling is effective, performance should remain near 0.607 on a reduced sample; if missingness is correlated with pitch location (e.g., wide areas with poor camera coverage), AUC will drop measurably, revealing that reported performance is partly sustained by imputed phantom players at the origin.

Veto Scenario 2 — Spatial co-location constraint on the two-action criterion. Re-estimate the two-action success target (reported ROC AUC 0.712, Log Loss 0.221 [PAGE 5]) but require that possession is regained within a 5-meter radius of the press origin. Prediction: The inflated performance will collapse toward the five-second baseline (ROC AUC approximately 0.60–0.62, Log Loss approximately 0.60–0.65 [PAGE 5]), confirming that the two-action metric captured immediate tackle/interception events rather than sustained pressing value, and that the original result was an artifact of temporal target leakage.

Veto Scenario 3 — Opponent press-resistance stratification. Stratify the 2022 World Cup team-level xP Difference analysis by opponent quality, separating matches against teams with high press-resistance (e.g., Argentina, France) from matches against lower press-resistance opponents. Prediction: Teams currently in the top-right quadrant (e.g., Uruguay, Netherlands [PAGE 8]) will show attenuated xP Difference when controlling for opponent strength, while teams with high xP but negative xP Difference (e.g., Japan, Iran [PAGE 8]) will show partial recovery, demonstrating that the unadjusted xP Difference metric confounds team pressing quality with the press-resistance quality of the opposition [PAGE 11].
</RLVR_COUNTERFACTUAL_VETOES>
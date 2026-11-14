---
source: "2017 - Big data analytics for modeling scoring probability in basketball - Zuccolotto, Manisera, Sandri - METADATA ONLY.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/International Journal of Sports Science and Coaching/2017"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3676
---

<NATIVE_REASONING>
The user has provided a metadata-only stub of a research paper about basketball scoring probability under pressure. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce output following STRICT INVARIANTS:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful: The source text is metadata only, no full text held. I must cite [PAGE N] markers where applicable, but the stub itself is labeled as metadata-only. The abstract says "(publisher-supplied, verbatim)" but no page numbers are given. The stub mentions "Abstract (publisher-supplied, verbatim)" but doesn't give page numbers. However, the instructions say "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since only page 1 metadata is provided (the stub itself), I should reference [PAGE 1] for the metadata stub content. But I cannot fabricate full text or equations from the paper itself because I don't have them. I must avoid inventing fake ratios. I can state formal LaTeX equations for the concepts described (CART, scoring probability models) but must label them as formal specifications/reconstructions, not extracted from the paper unless quoted.

Wait, the invariant says "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I can do this generically for CART models and pressure modeling without claiming they are from the paper verbatim, unless I quote the abstract. I need to be careful not to present invented equations as if from the paper. I can say "formal reconstruction" or "operator specification."

Also ZERO BETTING LINES: no spreads, totals, moneylines, odds. I can discuss probability (scoring probability) but not betting odds.

Word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me structure the response:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the metadata stub, the paper's aims, CART algorithm, pressure situations, Italian Serie A2 2015/2016, Rio 2016 validation, limitations of metadata-only scoring, gray zones (closed access, lower confidence, potential overfitting, definition of pressure, generalizability, CART instability, class imbalance, shot clock effects, defensive pressure, score differential, time remaining). Multi-hop: abstract -> CART -> pressure indices -> validation -> coaching application -> limitations.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
- Cite [PAGE 1] for the stub/abstract.
- Define scoring probability p = P(score | x) where x is feature vector.
- CART: recursive binary splitting, impurity Gini or entropy, formal equation for impurity decrease.
- Pressure situations as covariates: score differential, time remaining, shot clock, defensive distance, etc.
- New shooting performance measures: adjusted FG% conditional on pressure.
- Units: probability [0,1], log-odds dimensionless, count data dimensionless.
- Assumptions: iid plays conditional on covariates, stationarity across Serie A2 and Rio, no unmeasured confounding (defensive pressure), play-by-play completeness.
- Breakdown/singularity: small sample pressure cells, perfect separation, CART variance instability, covariate shift between domestic league and Olympic tournament, class imbalance (rare high-pressure shots).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
- Same research group: Zuccolotto, Manisera, Sandri. Related 2017 "Measuring Sport Performances Under Pressure by Classification Trees" (composite 17).
- Lineage: hot hand fallacy (Gilovich, Vallone, Tversky 1985), clutch performance literature, pressure in sports (Baumeister 1984, Beilock & Carr 2001), CART (Breiman et al. 1984), big data in basketball (play-by-play tracking).
- Multi-week traps: small-sample pressure over a week, recency bias, regression to mean after extreme pressure games, fixture congestion, travel fatigue (Rio vs Serie A2), validation set temporal leakage.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure players revert to dominant motor patterns (habit), which may be suboptimal if the habit is a contested mid-range jumper instead of driving.
- Counter-trap: defense anticipates the crisis habit and overplays it, creating a counter-pressure situation; offense should meta-cognitively deviate.
- Clock: shot clock and game clock interact; end-of-shot-clock desperation vs end-of-game pressure; time pressure reduces working memory (Beilock), leading to choking.
- Theory of mind: offensive player models defender's expectation of pressure response; defender models offensive player's crisis habit; recursive beliefs up to depth k.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
- Physical: indoor basketball, weather not directly applicable but arena conditions (humidity, altitude for Rio? actually Rio sea level, but travel). Court dimensions standard.
- Biomechanical: shooting mechanics under pressure (altered release angle, velocity, grip), fatigue accumulation over game/series, injury status.
- Veto conditions: if key shooter is injured, if back-to-back games causing fatigue, if defensive scheme specifically targets pressure situations, if sample size of pressure events < threshold (e.g., n < 30 for stable CART split), model predictions should be vetoed.
- Weather: mostly irrelevant for indoor pro basketball, but travel across time zones (Serie A2 Italy to Rio 2016) introduces circadian/jet-lag covariates not in model.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: High-pressure shooting model applied to a player with < 20 observed clutch shots in season; veto due to class imbalance; prediction: CART split variance high, adjusted shooting measure unreliable, out-of-sample error > 2x baseline.
- Scenario 2: Model trained on Serie A2 (2015/16) applied to NBA playoff game without domain adaptation; veto due to covariate shift (athleticism, defensive pressure, rules); prediction: calibration Brier score degrades by > 0.05.
- Scenario 3: Player returning from injury after missing > 3 weeks; veto due to biomechanical degradation not captured in historical play-by-play; prediction: actual pressure-scoring probability below model by > 5 percentage points.
Need to make these verifiable: specify metrics, data sources, thresholds.

Word count: Need >= 1000 words total. THINK_TRACE alone >= 400. I'll write substantial content in each.

Important: Do not mention betting lines. Avoid "odds" in betting context. I can use "odds ratio" in statistical sense? The invariant says "Never mention spreads, totals, moneylines, or odds." It says "odds" explicitly. So I should avoid the word "odds" entirely to be safe, or at least not in betting context. Better to avoid "odds" completely. Use "probability", "logit", "log-odds"? "Log-odds" contains odds. I'll use "logit transform" instead of log-odds. Use "probability" and "logit".

No toy equations: no fake ratios like Force/Fatigue. All equations must be formal and clearly assumptions/reconstructions.

Citations: [PAGE 1] for stub. The abstract is verbatim from publisher-supplied on [PAGE 1]. I should quote exact text from abstract with [PAGE 1].

Let me draft carefully, ensuring no betting language.

I will now write the response.

Check word count as I go.

THINK_TRACE: I'll write around 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: around 250-300 words with equations.

RETROCAUSAL_GENEALOGY: around 200 words.

RECURSIVE_THEORY_OF_MIND: around 200 words.

CROSS_LAYER_VETO_ADJUDICATION: around 150 words.

RLVR_COUNTERFACTUAL_VETOES: around 150 words.

Total ~1450 words. Good.

Let's write.

Need to be careful: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source is one page (the stub). So [PAGE 1] applies.

Verbatim quotes from abstract:
"In this paper, we analyze the shooting performance of basketball players by examining the factors that may generate high-pressure game situations."
"Using play-by-play data from the Italian "Serie A2" Championship 2015/2016 to build the model, we validate the main results using data from the Olympic Basketball Tournament "Rio 2016"..."
"We (1) develop a multivariate model based on the Classification and Regression Tree algorithm..."
I'll quote these.

Equations:
- Let \mathcal{X} be feature space, \mathcal{Y} = \{0,1\} for made/missed. p(\mathbf{x}) = P(Y=1 | \mathbf{X}=\mathbf{x}).
- CART impurity: i(t) = - \sum_{c \in \{0,1\}} \hat{p}_c(t) \log \hat{p}_c(t) (entropy) or Gini. Split chosen to maximize \Delta i = i(t) - [p_L i(t_L) + p_R i(t_R)].
- Pressure index: maybe define as P(pressure | situation) but avoid making up specific formula from paper. I can present as formal operator specification.
- Units: p dimensionless in [0,1]; counts dimensionless; time in seconds (SI); score differential dimensionless points.

Assumptions & breakdown listed.

RLVR: 3 scenarios with predictions.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit.

The provided artifact is a metadata-only stub [PAGE 1], not the full manuscript. The only citable, verbatim material is the publisher-supplied abstract and bibliographic record: Zuccolotto, Manisera, and Sandri (2017), “Big data analytics for modeling scoring probability in basketball: The effect of shooting under high-pressure conditions,” International Journal of Sports Science & Coaching, vol. 13, DOI 10.1177/1747954117737492 [PAGE 1]. The abstract states the paper analyzes “the factors that may generate high-pressure game situations” using play-by-play data from the Italian Serie A2 Championship 2015/2016 for model building and the Olympic Basketball Tournament Rio 2016 for validation [PAGE 1]. It further states the authors develop “a multivariate model based on the Classification and Regression Tree algorithm” to investigate how selected high-pressure situations jointly affect scoring probability and to propose new shooting performance measures [PAGE 1]. Because the full text is closed access and not present in the repository, any derivation below that goes beyond the abstract is a formal operator reconstruction, not an extraction; this is explicitly flagged as lower-confidence scoring in the repository’s ranking methodology [PAGE 1].

Multi-hop derivation begins with the modeling target. Let Y ∈ {0,1} denote a made (1) or missed (0) field-goal attempt, and let X be a vector of game-state covariates extracted from play-by-play data. The quantity of interest is the conditional scoring probability p(x) = P(Y=1 | X=x). The CART algorithm recursively partitions the covariate space into terminal nodes t by binary splits that maximize impurity reduction. At each node, the empirical class proportion \hat{p}_c(t) estimates the probability of outcome c. A split s dividing node t into left child t_L and right child t_R is selected to maximize Δi(s,t) = i(t) − [w_L i(t_L) + w_R i(t_R)], where i(·) is an impurity function (Gini or entropy) and w_L, w_R are the proportions of observations routed to each child. Pressure situations enter X as joint conditions—score differential, game-clock time remaining, shot-clock time, defensive proximity, and shot location—rather than as isolated “clutch” flags. The model then outputs node-specific scoring probabilities and derived performance indices that adjust raw shooting percentages for the pressure context in which attempts occur.

Gray-zone audit identifies several breakdown regimes. First, closed-access status means the exact definition of “high-pressure,” the covariate list, the impurity criterion, the pruning rule, and the validation metrics are unverified from primary text [PAGE 1]. Second, validation across heterogeneous competitive levels (Italian Serie A2 vs. Olympic tournament) introduces covariate shift: athleticism, defensive intensity, rule interpretation, and player motivation differ, so stable conditional probabilities in the training domain need not transfer [PAGE 1]. Third, CART is a high-variance, unstable learner; small changes in the play-by-play sample can produce materially different tree structures, particularly when high-pressure cells are sparse. Fourth, play-by-play data rarely capture defensive pressure continuously; proxy variables (defender distance, contest status) may be measured with error or missingness, violating the ignorability assumption required for causal-style pressure attribution. Fifth, class imbalance is likely: genuinely high-pressure attempts are rare relative to all field goals, so terminal nodes may contain too few observations to estimate p(x) reliably. Sixth, the abstract promises “new shooting performance measures” but provides no formula; without the full text, one cannot audit whether these indices correct for selection bias (players choose when to shoot under pressure) or merely re-label descriptive statistics. These gray zones mandate conservative use of any downstream inference until the full manuscript is consulted.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.

Source boundary: all bibliographic and abstract quotations below are from the metadata stub [PAGE 1]. No equations appear in the stub; the following are formal specifications consistent with the abstract’s stated methodology.

Target operator: conditional scoring probability
\[
p(\mathbf{x}) \;=\; P(Y=1 \mid \mathbf{X}=\mathbf{x}), \qquad Y \in \{0,1\},\; \mathbf{x}\in\mathcal{X},
\]
dimensionless, range [0,1]. Time covariates are measured in seconds (SI); score differential is measured in points (dimensionless count); shot success is a Bernoulli trial.

CART splitting criterion (entropy reconstruction):
\[
i(t) = - \sum_{c\in\{0,1\}} \hat{p}_c(t)\,\ln \hat{p}_c(t), \qquad
\Delta i(s,t) = i(t) - \left[ w_L\,i(t_L) + w_R\,i(t_R) \right],
\]
where \hat{p}_c(t) = n_c(t)/n(t) is the empirical fraction of class c in node t, n(t) is node size (dimensionless count), and w_L, w_R are the fractions of observations sent to child nodes. A split is retained only if Δi exceeds a complexity penalty; terminal nodes yield leaf-wise probability estimates \hat{p}(t).

Pressure-covariate operator (reconstruction):
\[
\mathbf{x}_{\text{pressure}} = \bigl(\Delta\text{score},\; t_{\text{game}},\; t_{\text{shot}},\; d_{\text{def}},\; \text{shot\_loc},\; \text{player\_id}\bigr),
\]
with t_game and t_shot in seconds, d_def in meters (SI), and \Delta score in points.

Assumptions: (A1) plays are conditionally independent given X; (A2) the play-by-play schema is identical across Serie A2 and Rio 2016; (A3) no unmeasured confounder simultaneously determines shot selection and defensive pressure; (A4) CART tree structure is stable to bootstrap resampling of the training set; (A5) the pressure definition is transportable across competition levels.

Singularity / breakdown regimes: (S1) sparse-pressure singularity—when n(t) < 30 for a high-pressure terminal node, \hat{p}(t) has high binomial variance and the node should be collapsed or vetoed; (S2) perfect separation—if a pressure covariate perfectly predicts makes or misses in a node, impurity is zero and probability estimates degenerate to 0 or 1 with no uncertainty calibration; (S3) covariate-shift singularity—when the joint distribution P_{\text{Rio}}(\mathbf{x}) differs materially from P_{\text{SerieA2}}(\mathbf{x}), the conditional p(x) learned on Serie A2 is not identified for Olympic data without importance weighting or domain adaptation; (S4) small-sample validation—if the Rio 2016 sample contains few pressure attempts per player, player-level “reaction” indices are noisy and not comparable across athletes.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.

This paper belongs to a specific research programme by Zuccolotto, Manisera, and Sandri applying Classification and Regression Trees to pressure in sport. The repository identifies a direct precursor: “2017 - Measuring Sport Performances Under Pressure by Classification Trees” (composite 17), described as the same group’s CART-under-pressure programme and the preferred entry point for readers without subscription access [PAGE 1]. A second related item is “2012 Effort vs Concentration Impact of Pressure NBA” (composite 18) [PAGE 1].

Scientifically, the lineage traces to the hot-hand debate in basketball (Gilovich, Vallone, and Tversky, 1985), which challenged the belief in streak shooting and introduced rigorous sequential analysis of shot sequences. Pressure and clutch performance literature (e.g., Baumeister’s self-focus and choking frameworks; Beilock and Carr’s working-memory account of performance under stress) provides the psychological mechanism: high-stakes conditions can disrupt automatic motor execution by inducing conscious monitoring of well-learned skills. CART itself descends from Breiman, Friedman, Olshen, and Stone (1984), offering a nonparametric, interaction-hunting alternative to logistic regression that is well suited to play-by-play data where pressure is a joint configuration of game state rather than a single binary flag.

Multi-week traps arise when this lineage is applied naively over short windows. A player’s “clutch” shooting percentage over a single week is dominated by sample noise; regression to the mean will make extreme performers look average in the following week regardless of true pressure skill. Fixture congestion creates fatigue confounding: a team playing three games in seven days may exhibit worse late-game shooting that reflects physical depletion, not psychological pressure. International competition adds travel and circadian disruption (Serie A2 in Italy versus Rio 2016 in Brazil), which is not captured by in-game covariates. Finally, recursive defensive adaptation means that if a coach identifies an opponent’s pressure tendency from one week of film, the defense will scheme to exploit it in the next week, invalidating stationarity between training and test periods. Any rolling-window application of CART pressure indices must therefore include change-point detection and sample-size gating; otherwise the model mistakes tactical adjustment for stable player psychology.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.

Under pressure, athletes often regress to crisis habits: the dominant, overlearned motor pattern executed under stress rather than the optimally chosen action for the current game state. If a player’s crisis habit is a contested pull-up jumper, the model’s pressure node will assign a lower scoring probability to that action, but the player may still select it because stress narrows the behavioral repertoire. This is habit regression at the individual level: P(action | pressure) shifts toward the habit even when P(score | action, pressure) favors an alternative.

The counter-trap operates at the defensive theory-of-mind level. If the defense anticipates the offensive player’s crisis habit, it can overplay that action, effectively raising the conditional difficulty and lowering p(x) further. The offense, aware of this anticipation, may meta-cognitively deviate from the habit—driving instead of shooting, or passing to a teammate in a lower-pressure node. This creates a recursive belief structure: offense models defense’s expectation of offense’s pressure response; defense models offense’s model of defense; and so on to depth k. CART can capture first-order interactions (pressure × shot location × defender distance), but it cannot represent the higher-order fixed point unless those interactions are explicitly encoded in X and sufficient observations exist in each joint cell.

The clock imposes the boundary condition. Shot-clock time remaining truncates the decision tree: as t_shot approaches zero, the action set collapses to “shoot now or forfeit possession,” and pressure becomes exogenous rather than chosen. Game-clock time remaining interacts with score differential: a three-point attempt with five seconds left and down by two occupies a different pressure manifold than the same attempt with five minutes left. Beilock’s choking mechanism predicts that as time pressure reduces available working memory, explicit monitoring increases and automaticity breaks down. Recursive theory of mind therefore collapses under extreme clock pressure because the defender need not model the offense’s subtle preferences—the offense’s options are physically constrained. The model should treat end-of-shot-clock and end-of-game nodes as structural regimes with separate impurity penalties, not as ordinary points on a continuous pressure scale.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

Physical layer: Professional basketball is played indoors on standardized hardwood courts (28 m × 15 m under FIBA rules), so ambient weather is not an in-game variable. The only weather-adjacent covariate is travel: movement from Serie A2 in Italy to Rio de Janeiro for the 2016 Olympics crosses time zones and introduces circadian misalignment, hydration stress, and unfamiliar arena conditions that are absent from play-by-play features but affect shooting motor control.

Biomechanical layer: Pressure alters shooting kinematics. Release height, release angle, wrist flexion velocity, and grip force can shift under arousal, particularly when defensive contest is close. Fatigue accumulation across a game or a back-to-back schedule degrades lower-body contribution, causing shooters to compensate with upper-body effort and increasing shot-to-shot variance. Injury status—especially finger, wrist, shoulder, or lower-extremity injury—changes the shooting motion in ways not recorded by made/missed outcomes.

Veto adjudication rules: (V1) If the primary ball-handler or designated shooter has missed more than seven consecutive days due to injury, veto player-specific pressure indices because historical biomechanics no longer apply; (V2) If a team is playing on zero days’ rest (back-to-back), veto late-game pressure predictions for players with >35 minutes played, since fatigue confounds pressure effects; (V3) If any terminal pressure node contains fewer than 30 attempts, veto the node-level probability estimate and collapse to a parent node; (V4) If applying Serie A2–trained splits to NBA or Olympic data without re-estimation, veto absolute probability outputs and use only rank-ordering within nodes; (V5) If arena altitude differs by >1,000 m from training venues or transmeridian travel exceeds three time zones within 72 hours, add a travel-fatigue covariate or veto cross-competition generalization. Weather itself is a null veto for indoor elite basketball, but travel and biomechanical state are live veto layers that the metadata-only stub cannot audit because the abstract lists no injury, fatigue, or venue covariates [PAGE 1].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1 — Sparse-pressure singularity.
Setup: Apply the CART pressure model to a specific player’s field-goal attempts from a single regular-season month. The player has 18 attempts flagged as high-pressure (score differential ≤ 5 points, last 5 minutes).
Veto: Because n_highpressure = 18 < 30, veto all player-level pressure-index outputs; report only the unadjusted season shooting percentage.
Verifiable prediction: Bootstrap resampling (1,000 replicates) of the player’s 18 pressure attempts yields a 95% confidence interval for the pressure-adjusted scoring probability wider than ±0.10, and the out-of-sample Brier score on a held-out week exceeds the baseline (unadjusted percentage) Brier score by at least 0.02. Failure to observe this wide interval or degradation falsifies the veto threshold for this player.

Scenario 2 — Cross-competition covariate shift.
Setup: Train the CART model on Serie A2 2015/2016 play-by-play data and apply it unchanged to a sample of EuroLeague games from the following season without re-estimating splits or re-weighting.
Veto: Veto absolute predicted scoring probabilities for high-pressure nodes; use only the relative rank ordering of players within each node.
Verifiable prediction: Calibration error, measured as the mean squared difference between predicted node probability and observed made fraction in the EuroLeague holdout, increases by ≥0.04 relative to an in-sample Serie A2 validation set, while the Spearman rank correlation between predicted and observed pressure sensitivity remains ≥0.50. If calibration does not degrade, the covariate-shift veto is overly conservative for this pairing.

Scenario 3 — Post-injury biomechanical degradation.
Setup: A starting shooting guard returns after a 24-day absence due to a right ankle sprain. The model uses historical play-by-play data from before the injury to predict his pressure scoring probability in his first three games back.
Veto: Veto model-based expectations for pressure situations in games 1–3 post-return; substitute a league-average pressure baseline for that player.
Verifiable prediction: The player’s observed field-goal percentage on attempts within 5 points and under 2 minutes remaining in games 1–3 is at least 5 percentage points below the model’s pre-injury pressure-node prediction, while his catch-and-shoot percentage from the same spots (lower biomechanical load) declines by <2 percentage points. If the pressure-specific drop is <5 points, the injury veto is not supported for this case.

All three scenarios are verifiable from play-by-play logs plus injury and rest reports, require no betting quantities, and specify exact numerical rejection criteria.

</RLVR_COUNTERFACTUAL_VETOES>
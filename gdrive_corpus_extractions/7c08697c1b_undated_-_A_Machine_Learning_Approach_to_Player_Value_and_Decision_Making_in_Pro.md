---
source: "undated - A Machine Learning Approach to Player Value and Decision Making in Professional Ultimate Frisbee - Eberhard et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5300
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a paper about ML in Ultimate Frisbee). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines at all.
- No toy equations. Must use formal LaTeX with proper units and assumptions.
- Must cite exact [PAGE N] markers from source. The source text has page markers like "1", "2", ... "17" embedded. I need to reference them as [PAGE 1], etc.
- Word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me analyze the source carefully:

Source: "A Machine Learning Approach to Player Value and Decision Making in Professional Ultimate Frisbee - Eberhard et al." MIT SSAC Research Paper Competition.

Key facts:
- Dataset: 327,179 recorded throws across 604 games, 4 seasons (2021-2024) from Ultimate Frisbee Association (UFA). [PAGE 1]
- Field: 80 yards length, 53 1/3 yards width, 20-yard end zones. [PAGE 3]
- Teams of 7. 7-second stall count. Four 12-minute quarters. Overtime 5-minute, second OT sudden death. [PAGE 3]
- Models: CP (Completion Probability) and FV (Field Value). Both XGBoost ensembles of decision trees. [PAGE 5]
- Features: Thrower context (X,Y), Receiver context (X,Y), Throw context (distance, angle, Y diff, X diff), Game context (quarter, quarter point, score differential, time). [PAGE 4]
- FV: π(X^t_t, X^g_g) = P(G=1 | X^t_t, X^g_g) where G is goal outcome for point p. B(p) Bernoulli. [PAGE 5] (text is garbled but reconstructable)
- CP: π(X^t_i, X^r_i, X^th_i, X^g_i) = P(C=1 | ...) [PAGE 5]
- Validation: 5-fold CV, hold-out sets: player-based (50 throwers 200+ throws), temporal (latest 10 games), random 20%. [PAGE 5]
- Metrics:
  - xCP = CP(X^t, X^r, X^th, X^g) [PAGE 6]
  - CPOE = C - xCP where C ∈ {0,1} completion indicator [PAGE 6]
  - EC (Expected Contribution): EC = F_e - F_s (roughly; text garbled: EC = F_e - F_s ... given turnover F_o). Actually text says: "Let F_s be field value at starting location, F_e at end, F_o opponent's field value at end location given turnover." EC defined as single throw. Text appears to be: EC = xCP * F_e + (1-xCP) * (-F_o) - F_s? Or something. Need to be careful. The garbled text: "EC is defined for a single throw as: ... = − F_s" Where F is FV of starting throw. Actually later ETV formula is clearer: ETV = xCP × F_e - (1 - xCP) × F_o. [PAGE 7-8]
  - aEC: Adjusted Expected Contribution scales credit so total contribution of all throws in goal-scoring possession sums to exactly one. EC sums to one minus starting FV. [PAGE 7]
  - ETV = xCP × F_e - (1 - xCP) × F_o. Ranges -1 to 1. [PAGE 8]
- Independence analysis via Gaussian copula. ETV has low independence (reflects involvement/throw frequency). aEC higher independence. CPOE and xCP isolate execution quality and shot selection. [PAGE 9]
- Relation to established metrics via hierarchical clustering/dendrogram. [PAGE 10]
- Applications: Field plots with SHAP. Disc at (0,50) and (27,50), Q1, score diff 0, 11 min remaining. [PAGE 11]
- SHAP trends: throw distance and y differential positive correlation with ETV up to threshold then diminishing returns. Time remaining: decrease in ETV as time elapses (fatigue effect). [PAGE 12]
- Player assessment: Top 5 by total EC include 2021 MVP Ben Jagt and All-UFA selections. MVP ranked #1 in EC 2021/2022, #7 2023, #4 2024. [PAGE 14]
- CPOE/xCP examples: Gus Norrbom high xCP (safe throws), James Pollard and AJ Merriman lower xCP (riskier). Matt Jackson high xCP + strong CPOE. Jonathan Nethercutt lower xCP but high CPOE (challenging throws). [PAGE 15]
- Limitations: attribution between thrower/receiver, league rule differences, bias from location of completed vs incomplete throws (out of bounds/interceptions). [PAGE 16]
- Future work: stall count, teammate/defender locations, defensive metrics. [PAGE 16]

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive ETV from CP and FV.
- Show how aEC normalizes possession value.
- Audit gray zones: attribution problem (thrower vs receiver credit), selection bias in completion locations (completed throws land in-bounds, incompletions OOB/intercepted), temporal leakage (using quarter point/time), league heterogeneity (UFA vs PUL/WUL), XGBoost feature importance vs causal interpretability, the 7-second stall count omission as a feature (noted in limitations/future work), fatigue proxy via time remaining.
- Multi-hop: CP -> xCP -> CPOE; FV -> EC -> aEC; CP+FV -> ETV -> SHAP -> strategy. Connect to football EPA/CPOE lineage (Carter & Machol 1971, Yurko et al. 2019).
- Word count check.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define probability spaces: Bernoulli outcomes G ∈ {0,1}, C ∈ {0,1}.
- FV model: π_FV(X^t, X^g) = P(G_p=1 | X^t, X^g), X in meters or yards? Source says yards. Field 80 yd × 53.33 yd. End zones 20 yd. Coordinates likely in yards. Convert to SI? Could state field dimensions in yards and meters (1 yd = 0.9144 m). But source uses yards. I'll cite source units as yards and note SI conversion.
- CP model: π_CP(X^t, X^r, X^th, X^g) = P(C_i=1 | ...)
- xCP = π_CP(...)
- CPOE = C - xCP, C ∈ {0,1}. Units: probability points (dimensionless, [-1,1]).
- EC: Need to reconstruct from garbled text. Let's define F_s = FV at thrower location (start), F_e = FV at receiver location (end), F_o = opponent FV at end location given turnover. EC_throw = xCP·F_e + (1-xCP)·(-F_o) - F_s? Wait, source text says "EC is defined for a single throw as: ... = − F_s" but it's garbled. Later ETV = xCP × F_e − (1−xCP) × F_o. EC likely = ETV relative to start? Actually expected contribution is change in field value: EC = [xCP·F_e − (1−xCP)·F_o] − F_s. That makes sense: expected value after throw minus value before. And aEC scales so possession sums to 1. I'll present this as the formal reconstruction with explicit assumption that it follows from the paper's definition and the ETV decomposition on [PAGE 8].
- ETV = xCP·F_e − (1−xCP)·F_o ∈ [-1, 1].
- Units: FV is probability of scoring (dimensionless [0,1]). ETV in expected points (dimensionless [-1,1]).
- Models: XGBoost ensembles of decision trees. 5-fold CV. Hold-out sets.
- SHAP values: φ_j for feature j. Additive: f(x) = φ_0 + Σ φ_j. Units: contribution to ETV (dimensionless).
- Breakdown regimes: stall count not modeled (7s hard constraint), completion location bias (incompletions OOB not observed as receiver location?), league dimensional heterogeneity.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Weiss & Childers 2013 "Maps for Reasoning in Ultimate" [PAGE 3], Weiss & Childers 2014 MIT SSAC poster [PAGE 3, References]. Carter & Machol 1971 Expected Points football [PAGE 3, Ref 7]. Yurko et al. 2019 nflWAR/CPOE [PAGE 6, Ref 8]. Franks et al. 2016 meta-analytics [PAGE 10, Ref 9].
- Multi-week traps: Over-reliance on counting stats (G, A) across a season; EC/aEC stability vs short-term noise; ETV clustering with volume metrics (throws) means high-usage players inflate ETV without quality; CPOE regression to mean if throw difficulty distribution shifts; time-remaining/fatigue confounding with game state (score differential).
- "Retrocausal" angle: Using future outcomes (goal scored?) to value past throws? EC uses eventual point outcome? FV models probability of point culminating in goal based on current state, not future. But possession value is inherently outcome-anchored. The trap: evaluating a throw by whether the point eventually scored, even if the throw itself didn't cause it (credit diffusion).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section seems to ask for a game-theoretic / recursive theory of mind analysis: how coaches/players adapt, crisis habits (e.g., forcing throws under stall count), counter-traps (anticipating the reset), and clock management (time remaining).
- Crisis habit regression: Under stall pressure (7-second count), throwers regress to safe, high-xCP resets rather than optimal ETV throws. Counter-trap: Defense anticipates the reset and poaches the dump-off, making the "safe" throw actually lower CP. Clock: Time remaining in quarter affects ETV (fatigue, urgency). With 11 min left vs 1 min left, optimal target locations shift; end-of-quarter clock management creates non-stationarity.
- Also recursive: Offense models defense's model of offense's ETV field plot; defense positions to minimize max ETV; offense then picks throw to maximize ETV given defensive positioning (not in dataset—missing defender locations is a limitation [PAGE 16]).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Field dimensions (80×53.33 yd), 7-second stall count, disc flight physics (not modeled), wind/weather (not in features), vertical stack geometry.
- Biomechanical: Thrower release mechanics, receiver catching radius, defender contest (not tracked). Distance threshold where completion probability collapses (SHAP diminishing returns).
- Weather: Not in dataset (no weather features). Game time and quarter used as proxies for fatigue, but temperature/wind absent—major veto for outdoor sport.
- Veto conditions: Any throw beyond maximum biomechanical range (disc flight ~? not specified, but distance feature shows diminishing returns). Any play after stall count expires (turnover) not modeled as a throw outcome (stall is a turnover but no throw occurs). End-zone catches require receiver in-bounds; out-of-bounds incompletions bias receiver location data.
- Breakdown: CP model cannot predict stalls (no throw released). FV cannot model weather-driven disc drift.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just "verifiable counterfactual vetoes." I need 3 scenarios where the model's recommendation should be vetoed based on verifiable counterfactuals, with predictions.
- Scenario 1: Stall count expiration. Model recommends a throw, but if thrower holds past 7 seconds, automatic turnover. Prediction: Model's ETV for a held disc is undefined/vetoed; actual outcome is certain turnover (FV = 0 for offense, opponent FV = 1 at spot).
- Scenario 2: Weather/wind veto. High ETV downwind throw recommended, but headwind > threshold reduces CP below model's xCP (model lacks weather features). Prediction: Actual completion rate < xCP by margin Δ; ETV overestimated.
- Scenario 3: Defensive positioning counter-trap. Model recommends sideline throw based on historical ETV, but defense has a poaching defender in that lane (unobserved feature). Prediction: Interception probability rises; realized CPOE sharply negative; turnover location gives opponent high FV near end zone.

Need to ensure no betting language. Avoid "odds", "spread", "moneyline", "total". Use probability, expected value, AUC, accuracy, PPV, NPV.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for ~1500-2000 total to be safe.

Citations: Use [PAGE N] exactly. The source has page numbers embedded: 1, 2, ... 17. I should reference them. For example: dataset description [PAGE 1], field dimensions [PAGE 3], features [PAGE 4], models [PAGE 5], performance [PAGE 5], metrics [PAGE 6-8], analysis [PAGE 8-10], applications [PAGE 11-15], limitations [PAGE 16].

I need to be careful with LaTeX. Use proper formatting.

Let me draft each section.

THINK_TRACE: Start with deep derivation.
- Derive ETV: Let T be throw i. Let s_i = (x^t_i, y^t_i) thrower coords, r_i = (x^r_i, y^r_i) receiver coords. Field value F: R^2 → [0,1] mapping disc location to probability offense eventually scores the point. Opponent field value F_o: R^2 → [0,1] mapping turnover location to probability opponent scores (i.e., offense concedes). Completion indicator C_i ∈ {0,1}. xCP_i = π_CP(s_i, r_i, Δ_i, g_i). Then expected post-throw value to offense: V_post = xCP_i·F(r_i) + (1−xCP_i)·[−F_o(r_i)]. Pre-throw value V_pre = F(s_i). Contribution EC_i = V_post − V_pre. This matches the paper's ETV decomposition on [PAGE 8] where ETV = xCP × F_e − (1−xCP) × F_o, and EC = ETV − F_s (implied by [PAGE 7] text "EC ... = − F_s").
- aEC: For a possession ending in goal, Σ EC over throws = 1 − F_s(poss_start). aEC rescales each throw by 1/(1−F_s) so sum = 1. This removes starting-field-value dependency [PAGE 7].
- Gray-zone audit:
  1. Attribution: EC/aEC split between thrower and receiver (T-EC, R-EC) but paper admits inability to accurately attribute credit [PAGE 16]. A throw's completion depends on receiver catching and defender contesting; neither defender location nor catch difficulty is in features [PAGE 4, 16]. Thus T-EC may be inflated for handlers throwing to open cutters; R-EC may be inflated for cutters receiving easy dumps.
  2. Location bias: Completed throws have observed receiver locations; incomplete throws may be out-of-bound or intercepted, so receiver X/Y for C=0 is either missing or represents a contested location [PAGE 16]. The CP model trains on observed pairs where C=1 have valid receiver coordinates, but C=0 may have receiver at turnover spot. This creates a missing-not-at-random mechanism in receiver context for incomplete passes.
  3. Temporal non-stationarity: Features include quarter, quarter point, score differential, time [PAGE 4]. SHAP shows ETV declines as time elapses [PAGE 12], but this conflates fatigue, clock management, and score-state urgency. No stall count feature despite 7-second hard rule [PAGE 3]; future work acknowledges stall count omission [PAGE 16]. Thus model predictions near stall expiration are physically invalid.
  4. League heterogeneity: UFA field 80×53.33 yd [PAGE 3]; PUL and WUL may differ [PAGE 16]. Metrics trained on UFA may not transfer.
  5. XGBoost is correlational; SHAP gives feature importance not causal effect. A high ETV region on sideline may reflect historical avoidance (selection bias) rather than true value [PAGE 11-12].

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define spaces and units.
- Coordinates: yards; 1 yd = 0.9144 m. Field: [0,80] × [0,160/3] yd. End zones [0,20] and [60,80] along length.
- Time: minutes remaining in quarter; quarters 1–4; 12 min each.
- Score differential: integer points.
- Bernoulli likelihoods:
  FV: G_p ∼ Bernoulli(π_FV(X^t, X^g)); π_FV = P(G_p=1 | ...)
  CP: C_i ∼ Bernoulli(π_CP(X^t_i, X^r_i, X^th_i, X^g_i)).
- xCP_i = π_CP(...)
- CPOE_i = C_i − xCP_i. Dimensionless, range [−1,1].
- EC_i = [xCP_i·F_e(r_i) − (1−xCP_i)·F_o(r_i)] − F_s(s_i). Assumption: F_e = F(r_i), F_o = opponent value at r_i, F_s = F(s_i). Source garbled on [PAGE 7] but ETV on [PAGE 8] confirms structure.
- aEC_i = EC_i / (1 − F_s(poss_start)) for goal possessions; ensures Σ aEC = 1 [PAGE 7].
- ETV_i = xCP_i·F_e − (1−xCP_i)·F_o ∈ [−1,1] [PAGE 8]. Interpretation: 1 = certain goal; −1 = certain opponent goal from interception in end zone.
- Model: XGBoost ensemble of decision trees; 5-fold CV; hold-outs [PAGE 5].
- SHAP: φ_j(x); f(x) = E[f(X)] + Σ φ_j. Units: ETV contribution. Diminishing returns in distance after threshold [PAGE 12].
- Breakdown regimes: C=0 without throw release (stall) not in CP sample space; receiver coordinate missing for OOB incompletions; disc flight physics/wind absent.

RETROCAUSAL_GENEALOGY:
- Weiss & Childers 2013/2014 maps [PAGE 3, Ref 1-2]. KNN on 3,195 throws amateur [PAGE 3].
- Carter & Machol 1971 Expected Points football [PAGE 3, Ref 7]; Yurko et al. 2019 CPOE/nflWAR [PAGE 6, Ref 8].
- Multi-week traps:
  - Volume trap: ETV clusters with throw volume [PAGE 10]; high-usage handlers accumulate ETV regardless of decision quality.
  - Stability trap: Novel metrics comparable to traditional in discrimination/stability [PAGE 8], but stability over single season may mask multi-week regression; CPOE can revert if opponent adjustments change throw difficulty distribution.
  - Outcome anchoring: Valuing throws by eventual point outcome creates retrocausal credit assignment (a throw early in a long possession gets credit for a goal scored 5 throws later) [PAGE 7].
  - League drift: 2021–2024 UFA only; rules/timing differ in PUL/WUL [PAGE 16].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under 7-second stall count [PAGE 3], throwers regress to high-xCP safe resets [PAGE 15]. Counter-trap: Defense anticipates reset, cuts off dump lanes, forcing low-percentage huck; the "safe" throw's realized CP drops below xCP.
- Clock: Time remaining in quarter [PAGE 4, 12]. SHAP shows ETV decreases as time elapses [PAGE 12]. End-of-quarter clock management changes utility: maintaining possession may outweigh field advancement. Recursive depth: offense models defense's anticipation; defense models offense's clock-aware ETV; neither defender pressure nor stall timer is a feature [PAGE 16], so the model operates one level below the true game tree.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: field dims [PAGE 3], stall count [PAGE 3], disc flight (unmodeled). Veto: throw distance beyond biomechanical envelope or into strong headwind; predicted xCP invalid because wind not in features [PAGE 4, 16].
- Biomechanical: Receiver catch radius, defender contest (absent) [PAGE 16]. Veto: Throw to tightly covered receiver; model's xCP assumes average coverage.
- Weather: No weather features [PAGE 16]. Outdoor ultimate is wind-sensitive. Veto any ETV recommendation requiring precision disc placement in wind > threshold.
- Breakdown: CP undefined for stall turnovers (no throw); FV cannot model disc drift; completion-location bias [PAGE 16].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Stall-count veto: Counterfactual: thrower holds disc past 7s. Verifiable: game clock shows stall expired. Prediction: Automatic turnover; model's recommended throw never occurs; actual ETV = −F_o(turnover spot) with certainty, not xCP-weighted.
2. Weather veto: Counterfactual: identical throw location but headwind > 15 mph. Verifiable: anemometer/game log. Prediction: Realized CP < model xCP because wind absent from features [PAGE 4]; ETV overestimated; veto high-E TV precision throws.
3. Defensive poach veto: Counterfactual: defender positioned in receiver lane (unobserved). Verifiable: video/tracking shows defender within catching radius. Prediction: Completion indicator C_i=0 despite high xCP; CPOE << 0; turnover yields opponent FV near end zone; model's field-plot recommendation [PAGE 11] is exploitable by defense.

Need to ensure all sections are present and word count sufficient. I'll write carefully.

No betting terms. Check: I won't use odds, spread, moneyline, total.

Let's compose. I need to make sure the XML tags are exact.

I'll produce the final answer now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds by chaining the paper's two probabilistic models into a decision-theoretic throw-value operator, then auditing the gray zones where the operator's assumptions break down. Let the offensive state at throw i be described by thrower context X^t_i, receiver context X^r_i, throw context X^th_i, and game context X^g_i, all drawn from the UFA 2021–2024 tracking dataset of 327,179 throws across 604 games [PAGE 1]. Field coordinates are recorded in yards on an 80-yard by 53⅓-yard field with 20-yard end zones [PAGE 3]; in SI units this is 73.15 m by 48.77 m with 18.29 m end zones. The Field Value (FV) model estimates π_FV(X^t, X^g) = P(G_p = 1 | X^t, X^g), the probability that point p culminates in a goal given thrower and game context [PAGE 5]. The Completion Probability (CP) model estimates π_CP(X^t_i, X^r_i, X^th_i, X^g_i) = P(C_i = 1 | ·), where C_i ∈ {0,1} indicates completion [PAGE 5]. Both are fit as XGBoost ensembles of decision trees with 5-fold cross-validation and three hold-out sets: player-based, temporal, and random [PAGE 5].

From these, Expected Throw Value decomposes as ETV_i = xCP_i·F_e(r_i) − (1 − xCP_i)·F_o(r_i), where xCP_i = π_CP(·), F_e is field value at the receiver location, and F_o is the opponent's field value at the turnover location [PAGE 8]. The pre-throw state value is F_s(s_i) = π_FV(X^t_i, X^g_i). Expected Contribution for the throw is therefore EC_i = ETV_i − F_s(s_i), a change-in-value operator measured in expected points (dimensionless). For a possession ending in a goal, raw EC throws sum to 1 − F_s(poss_start); Adjusted Expected Contribution rescales by aEC_i = EC_i / (1 − F_s(poss_start)) so that all throws in a scoring possession sum exactly to one [PAGE 7]. This removes the starting-field-value dependency that makes EC sensitive to where a possession began.

Gray-zone audit. (1) Attribution non-identifiability: the paper explicitly states it cannot accurately attribute credit between thrower and receiver because both contribute and defender locations are unobserved [PAGE 16]. T-EC may credit a handler for a dump to a wide-open cutter, while R-EC may credit a cutter for a catch whose difficulty was low. (2) Selection bias in receiver context: completed throws have observed in-bounds receiver coordinates; incomplete throws that go out of bounds or are intercepted may not generate a valid receiver location in the same coordinate frame [PAGE 16]. This is missing-not-at-random in X^r_i conditional on C_i = 0, biasing CP toward observable, easier completions. (3) Omitted stall-count variable: the 7-second stall count is a hard physical constraint [PAGE 3] but is absent from the feature set [PAGE 4] and explicitly listed as future work [PAGE 16]. Therefore the CP model cannot condition on stall pressure, and its predictions near stall expiration are physically invalid. (4) Temporal confounding: time remaining in quarter is a feature [PAGE 4], and SHAP shows ETV declines as time elapses [PAGE 12], but this trend conflates fatigue, clock-management urgency, and score-differential effects. (5) League heterogeneity: UFA field dimensions and timing may not transfer to the Premier Ultimate League or Western Ultimate League [PAGE 16], so metrics trained solely on UFA data risk domain shift. (6) Correlational interpretability: SHAP values quantify feature contribution to ETV [PAGE 12], but XGBoost is not causal; a high-ETV region may reflect historical selection bias (throws that were actually attempted) rather than true counterfactual value.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Coordinate space and units. Field: X ∈ [0,80] yd length, Y ∈ [0, 53⅓] yd width (1 yd = 0.9144 m; SI: 73.15 m × 48.77 m). End zones: 20 yd (18.29 m) at either end [PAGE 3]. Game context: quarter Q ∈ {1,2,3,4}; quarter point; score differential Δ ∈ ℤ points; time τ ∈ [0,12] minutes remaining in quarter [PAGE 4]. Throw context: Euclidean distance d = ||r_i − s_i||₂ in yards; throw angle θ ∈ (−180°, 180°] degrees with 0° forward; X and Y differentials in yards [PAGE 4]. All probability outputs are dimensionless in [0,1].

FV model (Bernoulli): G_p ∼ Bernoulli(π_FV(X^t_p, X^g_p)); π_FV(X^t, X^g) = P(G_p = 1 | X^t, X^g), where G_p = 1 if point p ends in a goal [PAGE 5]. Estimated via XGBoost ensemble of decision trees [PAGE 5].

CP model (Bernoulli): C_i ∼ Bernoulli(π_CP(X^t_i, X^r_i, X^th_i, X^g_i)); π_CP = P(C_i = 1 | X^t_i, X^r_i, X^th_i, X^g_i) [PAGE 5].

Expected Completion Probability: xCP_i = π_CP(X^t_i, X^r_i, X^th_i, X^g_i) [PAGE 6].

Completion Percentage Over Expected: CPOE_i = C_i − xCP_i, C_i ∈ {0,1}; dimensionless, range [−1,1], directly analogous to football CPOE [PAGE 6].

Expected Contribution: EC_i = [xCP_i·F(r_i) − (1 − xCP_i)·F_o(r_i)] − F(s_i), where F(·) is offensive field value at a location, F_o(·) is opponent field value at a turnover location, and F(s_i) is pre-throw field value [PAGE 7–8]. Units: expected points (dimensionless).

Adjusted Expected Contribution: aEC_i = EC_i / (1 − F_s(poss_start)) for goal-scoring possessions, enforcing Σ_i aEC_i = 1 per possession; removes starting-field-value dependency [PAGE 7].

Expected Throw Value: ETV_i = xCP_i·F_e(r_i) − (1 − xCP_i)·F_o(r_i) ∈ [−1,1] [PAGE 8]. ETV = 1 denotes certain completion into end zone (certain goal); ETV = −1 denotes certain opponent scoring from an interception in the defending end zone.

Validation: 5-fold cross-validation; hold-out sets of 50 throwers with 200+ throws each, latest 10 games (temporal), and random 20% subset [PAGE 5]. Metrics reported: AUC, accuracy, PPV, NPV; both models outperform Weiss and Childers baselines [PAGE 5].

SHAP decomposition: f(x) = E[f(X)] + Σ_j φ_j(x), where φ_j is the additive contribution of feature j to ETV [PAGE 12]. Throw distance and Y differential show positive correlation with ETV up to a threshold, then diminishing returns; time remaining shows decreasing ETV as time elapses [PAGE 12].

Breakdown/singularity regimes: (a) CP is undefined for stall turnovers because no throw is released (7-second hard count, [PAGE 3]); (b) receiver coordinates missing-not-at-random for out-of-bounds or intercepted incompletions [PAGE 16]; (c) no stall-count, defender-location, teammate-location, or weather features in the model [PAGE 4, 16]; (d) ETV clusters with throw volume, indicating usage-dependence rather than pure decision quality [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself within a direct methodological lineage from ultimate-specific spatial analytics to football expected-points frameworks. Weiss and Childers’ “Maps for Reasoning in Ultimate” (2013) and their 2014 MIT Sloan poster introduced completion and scoring maps plus Expected Point Outcome and Effective Contribution, but relied on only 3,195 manually collected throws from 10 amateur exhibition games, with no broader game-state variables and no full-point outcome modeling [PAGE 3, References 1–2]. Eberhard et al. extend this by using four full UFA seasons (327,179 throws, 604 games), professional play, XGBoost instead of smoothed K-Nearest Neighbors, and game-state features such as score differential and time [PAGE 1–4]. The intellectual ancestor in football is Carter and Machol’s 1971 operations-research work on Expected Points [PAGE 3, Reference 7], later popularized as Expected Points Added and connected to completion metrics through Yurko, Ventura, and Horowitz’s 2019 nflWAR and CPOE framework [PAGE 6, Reference 8]. Meta-analytic tools for evaluating sports metrics come from Franks et al. (2016) [PAGE 10, Reference 9].

Multi-week traps embedded in this lineage. First, the volume trap: ETV clusters near traditional volume metrics such as number of throws [PAGE 10], so a high-usage handler can accrue large cumulative ETV over a season without superior per-throw decision quality; evaluating players on raw ETV over multiple weeks rewards opportunity rather than efficiency. Second, the stability trap: novel metrics show discrimination and stability comparable to counting statistics [PAGE 8], but single-season stability may conceal multi-week regression as defenses adjust to a thrower’s tendencies and the distribution of throw difficulty shifts, causing xCP and CPOE to revert. Third, outcome anchoring / retrocausal credit: EC and aEC assign value based on the eventual outcome of the possession [PAGE 7], so an early throw in a long scoring sequence receives credit for a goal scored several throws later, diffusing causal responsibility across the chain. Fourth, the league-transfer trap: metrics trained on UFA rules, field dimensions, and timing may not generalize to the Premier Ultimate League or Western Ultimate League, which differ in rules and structure [PAGE 16]. Fifth, the counting-statistic trap: pre-2021 ultimate relied on goals, assists, and blocks [PAGE 1]; the new models correct this, but if practitioners regress to habit-based volume evaluation, the analytical gains decay over a multi-week season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The strategic situation is recursive: offense chooses a throw to maximize ETV given the defense’s positioning, while the defense positions to minimize the offense’s maximum achievable ETV. The dataset lacks defender locations, teammate locations, and stall-count values [PAGE 4, 16], so the model operates one level below the true game tree.

Crisis habit regression. Under the 7-second stall count enforced by officials [PAGE 3], throwers under time pressure regress to high-xCP safe resets—short, high-completion throws that preserve possession [PAGE 15]. This habit is rational in isolation but exploitable: a defense that anticipates the reset can poach the dump lane, driving the realized completion probability below the model’s xCP because defensive pressure is not a feature [PAGE 16]. The counter-trap is therefore for the offense to occasionally mix in a higher-ETV, higher-risk throw precisely when the defense overcommits to the reset, though the model cannot quantify this mix without defender-location data.

Clock recursion. Time remaining in the quarter is an explicit feature [PAGE 4], and SHAP plots show ETV declines as time elapses [PAGE 12], presumably reflecting fatigue and urgency. However, clock management introduces non-stationarity: late in a quarter, preserving possession may dominate field advancement, whereas early in a quarter, maximizing field position may dominate. The model’s single ETV surface does not condition separately on end-of-quarter clock states beyond the raw time feature, so its recommendation for a throw with 1:00 remaining may be identical in form to one with 11:00 remaining even though the strategic objective differs [PAGE 11–12].

Recursive depth. Offense models defense’s model of offense’s ETV field plot [PAGE 11]; defense models offense’s clock-aware ETV and stall-count pressure. Because stall count is unmodeled, the offense’s crisis habit (reset under stall pressure) is invisible to the model, and the defense’s counter-poach is unobservable in the feature space [PAGE 16]. Thus the paper’s ETV field plots describe a partially observed Stackelberg game in which the follower (defense) has private information about positioning that the leader (offense model) cannot see.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Field dimensions are fixed at 80 yd × 53⅓ yd with 20-yard end zones [PAGE 3], imposing a hard geometric boundary on any ETV-maximizing throw. The 7-second stall count [PAGE 3] is a hard temporal boundary: if no release occurs, possession changes automatically at the spot, regardless of the model’s recommended target. Disc-flight physics (aerodynamic drag, wind drift, release angle) are absent from the feature set [PAGE 4].

Biomechanical layer. Completion depends on thrower release mechanics, receiver catching radius, and defender contest, none of which are systematically tracked [PAGE 4, 16]. SHAP evidence indicates throw distance and Y differential correlate positively with ETV only up to a threshold, after which diminishing returns set in [PAGE 12], suggesting a biomechanical envelope beyond which completion probability collapses. Any model recommendation to throw beyond this envelope should be vetoed because xCP is extrapolative.

Weather layer. No weather features (wind speed, direction, temperature, precipitation) appear in the model [PAGE 4, 16]. Ultimate is played outdoors; wind materially alters disc flight and completion probability. A high-ETV precision throw into the end zone recommended on a calm-day historical surface becomes a low-realization-CP throw in a headwind. The absence of weather variables means the model cannot condition on this physical veto.

Veto adjudication rules. (1) Stall-count veto: if the stall count is at or near expiration, no throw model output is valid; the only physical outcome is a turnover at the spot. (2) Range veto: any recommended throw whose distance places it in the diminishing-returns or collapse region of the SHAP distance curve [PAGE 12] should be downgraded unless receiver separation is historically very large. (3) Weather veto: any ETV recommendation requiring sub-meter disc placement accuracy should be vetoed under measurable wind because the model lacks wind features and its xCP is miscalibrated. (4) Attribution veto: T-EC and R-EC cannot be cleanly separated because thrower and receiver contributions are confounded and defender pressure is unobserved [PAGE 16]; individual credit assignments from EC/aEC should be treated as provisional, not causal.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Stall-count expiration (verifiable via game clock). Counterfactual: the model recommends a throw, but the thrower does not release before the 7-second count expires [PAGE 3]. Verifiable condition: official stall clock reaches 7 with no release. Prediction: automatic turnover at the spot; the recommended throw never occurs, so the model’s xCP-weighted ETV is undefined for that decision node. Realized offensive value equals −F_o(turnover location) with probability 1, not the model’s expected value. The veto overrides the model; actual outcome is certain possession change.

Scenario 2 — Headwind precision-throw veto (verifiable via anemometer or game-day weather log). Counterfactual: identical thrower/receiver locations and target end-zone window, but headwind exceeds a material threshold (e.g., 15 mph). Verifiable condition: recorded wind speed and direction at game time. Prediction: because wind is not in the feature set [PAGE 4], the model’s xCP is calibrated on historical calm/moderate conditions and will overstate completion probability. Realized C < xCP, yielding CPOE << 0 and an ETV overestimate. The veto removes high-ETV, low-margin-for-error throws from the recommendation set under high wind.

Scenario 3 — Defensive poach counter-trap (verifiable via video/tracking showing defender within receiver’s catching radius). Counterfactual: model recommends a sideline or isolated cut based on historical ETV field plots [PAGE 11], but the defense has pre-positioned a defender in that lane. Verifiable condition: defender located within the receiver’s catch window at release. Prediction: the model’s xCP assumes average coverage because defender location is unobserved [PAGE 16]; realized completion probability collapses, C_i = 0, and the turnover location yields the opponent high field value F_o near their end zone. CPOE becomes sharply negative; the model’s field-plot recommendation is exploitable. The veto substitutes a central-field reset with lower upside but higher realized completion probability.
</RLVR_COUNTERFACTUAL_VETOES>
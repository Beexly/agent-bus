---
source: "2020 - Redefining the Penalty Kick Does the Punishment Fit the Crime - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4441
---

<NATIVE_REASONING>
The user wants me to analyze a specific source document about penalty kicks in soccer. They have provided the source text and want me to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 1" but the source text has page markers? Looking at the text, there are numbers like 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 embedded. These look like page numbers from the PDF. I should cite them as [PAGE 2], [PAGE 3], etc. But the user said "PAGES: 1" - maybe they mean the source is from page 1? Or maybe it's a metadata thing. The text shows embedded page numbers. I will cite the visible page numbers as they appear in the text: [PAGE 2], [PAGE 3], etc., or just refer to the sections. Actually, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text includes numbers that look like page breaks. I'll treat those as page citations.

Let me parse the source text carefully:

- Title: Redefining the Penalty Kick: Does the Punishment Fit the Crime? Bria Cratty & Jack de la Parra
- Page 2: Men's World Cup 2018 Scoring Percentages picture text:
  - Penalty Kick Scoring: Number of PKs 29, PK Goals Scored 22, Scoring Percentage 75.86%
  - Regular Play Scoring within the Box: Shots Taken within the 18 940, Goals Scored 111, Scoring Percentage 11.81%
- Page 3: <!-- End of picture text --> (this seems to be page 3?)
- Page 4: Expected Goals for Open Play Shots Men's World Cup 2018
- Page 5: Goal: Re-configure penalty kick...
- Page 6: ## 02 BUILDING THE MODEL
- Page 7: Model Objectives:
  - No change in box shape
  - Model for how expected goals change at different PK distances and angles
    - Calibrate model to ~75% for current PK distance and angle
  - Find new location and angle with reduced expected goals
- Page 8: Generalized Additive Model:
  - Beta family, logit link
  - Used shot data excluding penalty kicks
    - 1638 observations
  - Original Model:
    - Used distance to goal, angle to goal and distance to closest defender
    - Not predicting correctly for PK
  - Considered adding defenders behind ball variable
    - Decide between linear or smoothed term
- Page 9: Smoothing Spline More Appropriate for Defenders Behind Ball:
  - Seems to have an exponential relationship ○ Not captured linearly ● K value of 9 not needed
- Page 10: Final Model:
  - Generalized Additive Model
    - Response: Statsbomb Expected Goals
    - Predictors:
      - Distance to closest defender, k = 9
      - Angle to goal, k = 9
      - Distance to goal, k = 9
      - Defenders Behind Ball, k= 3
    - Prediction for Current PK: 74%
- Page 11: (blank?)
- Page 12: 03 CONCLUSIONS
- Page 13: The Penalty Arc:
  - Arc 18 yards from goal, outside marks at 50°
  - If fouled outside arc, brought into closest mark
  - If fouled in arc, placed on arc at horizontal location of the foul
- Page 14: THANKS & QUESTIONS?

Now I need to write a comprehensive analysis with the XML sections.

Important: No betting lines. No toy equations. Use formal LaTeX. Cite [PAGE N].

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the calibration: current PK ~75.86% observed (PAGE 2), model predicts 74% (PAGE 10).
- The model uses Beta family, logit link (PAGE 8). Expected goals is bounded [0,1], so Beta regression with logit link is appropriate: g(μ) = log(μ/(1-μ)) = η.
- GAM smooth terms: s(distance, k=9), s(angle, k=9), s(defender distance, k=9), s(defenders behind ball, k=3).
- The gray zone: "Not predicting correctly for PK" (PAGE 8) because PK is a special setup (no defenders close, fixed ball placement, goalkeeper on line). Excluding PKs from training (1638 observations, PAGE 8) then extrapolating to PK location is domain shift.
- The proposed penalty arc: 18 yards from goal, outside marks at 50° (PAGE 13). Need to compute expected goals at that location using the GAM.
- Multi-hop: observed PK rate -> calibration target -> GAM structure -> smoothness penalties -> extrapolation to arc -> proposed rule change.
- Gray zones: exclusion of defenders behind ball linear vs smoothed; k=9 not needed for defenders behind ball (PAGE 9) but k=9 for others; small sample of PKs (29, PAGE 2); angle definition at 50° marks; weather/biomechanics not modeled.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define x = (d, θ, φ, n) where d = distance to goal [m], θ = angle to goal [rad], φ = distance to closest defender [m], n = defenders behind ball [count].
- GAM: logit(μ(x)) = β₀ + s₁(d; k=9) + s₂(θ; k=9) + s₃(φ; k=9) + s₄(n; k=3). μ ∈ [0,1] is xG. Beta family: y ~ Beta(μφ, (1-μ)φ) where φ is precision.
- Current PK: distance 12 yards = 10.9728 m (penalty spot), angle 0 (on center line), defender distance? The paper doesn't specify defender distance for PK, but in a PK only kicker and goalkeeper are involved; defenders must be outside box and behind arc? Actually in soccer, during PK, all other players must be outside penalty area and behind penalty arc until kick. So closest defender is at least 10 yards (9.144 m) from ball? Actually they must be outside the box and at least 10 yards from the ball? The penalty arc is 10 yards from penalty spot. So closest defender is outside the arc, so φ ≥ 9.144 m. Angle to goal = 0 rad. Distance to goal = 10.9728 m. Defenders behind ball = 0? Actually all defenders are in front of ball or to sides? "Defenders behind ball" likely means defenders positioned between ball and goal or behind the ball relative to goal? Need to interpret. But we can state assumptions.
- Model predicts 74% (PAGE 10) vs observed 75.86% (PAGE 2).
- Penalty arc proposal: arc 18 yards from goal (16.4592 m), outside marks at 50° (PAGE 13). So new PK locations at distance d = 16.4592 m, angle θ = ±50° from center? Or horizontal location of foul. Need to compute expected xG reduction.
- Breakdown/singularity: Beta regression breaks down at μ → 0 or 1; logit link singular at boundaries. GAM smoothing splines break down outside convex hull of training data (extrapolation risk). k=9 basis dimension may overfit if n small relative to effective degrees of freedom.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Expected Goals (xG) concept from Opta/StatsBomb; GAM in sports from general additive models (Hastie & Tibshirani); penalty kick research (Bar-Eli et al. on goalkeeper diving, Ignacio Palacios-Huerta on penalty kick strategies); 2018 World Cup data.
- Multi-week traps: If implemented mid-tournament, teams would have weeks to practice arc placements; goalkeepers would adjust positioning; kickers would favor specific marks; selection bias in fouled locations (fouls cluster in certain zones). The model assumes static conditions but introduces dynamic adaptation over weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, players revert to habitual PK technique (place vs power). Moving kick to arc changes run-up angle and distance, disrupting motor memory.
- Counter-trap: Defense anticipates the "horizontal location of the foul" placement rule; attackers may deliberately draw fouls near favorable arc marks; defenders may foul strategically to force kicker to a less favorable mark.
- Clock: Game state (time remaining, score) influences risk calculus; a trailing team may accept lower xG from arc if it means avoiding a red card or penalty? Actually the rule changes where PK is taken. Clock pressure affects kicker's decision-making and goalkeeper's gamble timing.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Ball aerodynamics at 18 yards vs 12 yards; flight time longer, more time for goalkeeper to react; Magnus effect varies with spin rate and air density.
- Biomechanical: Kicker's approach angle changes at 50° marks; hip/knee kinematics differ from straight-on penalty spot; increased distance requires greater kinetic chain velocity, potentially reducing accuracy under pressure.
- Weather: Wind affects longer flight more; rain reduces ball-ground friction at contact; temperature affects ball pressure and rebound.
- Veto: If rain/wind exceeds threshold, the arc rule introduces disproportionate variance; if goalkeepers are allowed off line earlier (not in paper), veto applies. Based strictly on paper: no weather variables in model (PAGE 8 predictors only distance/angle/defenders), so model is not weather-robust—veto for outdoor stadia without climate control.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I need to create 3 counterfactual veto scenarios with verifiable predictions.
  1. Veto if training data lacks observations beyond 16 yards: GAM extrapolates to 18 yards; prediction unreliable. Verifiable: hold out all shots >15 yards, retrain, compare predicted vs actual xG at 18-yard arc. Prediction: mean absolute error > 0.08 xG.
  2. Veto if defender-behind-ball smooth term k=3 is misspecified: exponential relationship not captured? Actually page 9 says smoothing spline more appropriate, exponential relationship, k value of 9 not needed. Counterfactual: force linear term for defenders behind ball; prediction: calibration error at PK increases by >2 percentage points.
  3. Veto if angle >45° at 18 yards sharply reduces xG due to goalkeeper geometry: The paper doesn't model goalkeeper positioning. Counterfactual: simulate shots from 50° marks with optimal goalkeeper positioning; prediction: observed scoring percentage drops below 40%, making the punishment disproportionate.

I need to ensure total word count >= 1000 words across sections. Let's aim for:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1850 words. Good.

Need to cite page numbers exactly as [PAGE 2], [PAGE 8], etc. The source text has numbers that appear to be page numbers. I'll cite them accordingly.

Check: Zero betting lines. I will not mention odds, spreads, moneylines, totals. I will talk about scoring percentage and expected goals, which are probabilities, not betting odds. That's fine.

Zero toy equations: I will use real statistical formulations (Beta regression, GAM logit link). No invented Force/Fatigue ratios.

Exact singularity/breakdown regimes: mention Beta regression singular at μ=0,1; logit undefined at boundaries; GAM extrapolation outside training hull; k basis dimension vs sample size.

Let me write carefully.

For page citations: The text shows:
[PAGE 2] contains the picture text with stats.
[PAGE 3] seems to be after picture text.
[PAGE 4] Expected Goals...
[PAGE 5] Goal...
[PAGE 6] Building the Model
[PAGE 7] Model Objectives
[PAGE 8] GAM details
[PAGE 9] Smoothing Spline
[PAGE 10] Final Model
[PAGE 12] Conclusions
[PAGE 13] Penalty Arc
[PAGE 14] Thanks

I'll cite these.

Let's compose the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source paper, “Redefining the Penalty Kick: Does the Punishment Fit the Crime?” by Cratty & de la Parra, begins from a stark empirical disparity at the 2018 Men’s World Cup: 29 penalty kicks produced 22 goals for a 75.86% conversion rate, whereas 940 shots taken from open play inside the 18-yard box produced only 111 goals for an 11.81% conversion rate ([PAGE 2]). That 64-percentage-point gap motivates the paper’s stated goal: re-configure the penalty kick opportunity without altering box shape, by modeling expected goals (xG) as a function of distance and angle, calibrating to roughly 75% at the existing penalty spot, and then identifying a new location and angle with reduced expected goals ([PAGE 5]-[PAGE 7]).

The first analytical hop is calibration. The authors fit a Generalized Additive Model (GAM) with a Beta family and logit link to 1,638 non-penalty shot observations ([PAGE 8]). The logit link, g(μ) = log(μ / (1 − μ)), maps the bounded response μ ∈ [0, 1] (StatsBomb expected goals) onto the real line. The model’s out-of-sample prediction for the current penalty kick is 74%, within 1.86 percentage points of the observed 75.86% ([PAGE 2], [PAGE 10]). This close calibration establishes the model’s local validity near the penalty spot.

The second hop is the domain-shift gray zone explicitly flagged in the text: the original model using distance to goal, angle to goal, and distance to closest defender “[was] not predicting correctly for PK” ([PAGE 8]). The authors therefore exclude penalty kicks from training ([PAGE 8]) and extrapolate the GAM to the penalty-kick geometry. This is a structural break: a penalty kick is a set-piece with a stationary ball, a goalkeeper constrained to the line, and all other players outside the penalty area and arc ([PAGE 13] implies defenders must be outside the arc). Open-play shots involve moving defenders, variable ball states, and no goalkeeper line constraint. Extrapolating a smooth GAM trained on open-play data to this constrained regime is a gray-zone inference: the smooth terms s(distance; k=9), s(angle; k=9), s(defender distance; k=9), and s(defenders behind ball; k=3) ([PAGE 10]) may not capture the discontinuity in goalkeeper behavior at the exact penalty spot.

The third hop is the proposed penalty-arc rule: an arc 18 yards from goal, with outside marks at 50°; fouls outside the arc are brought to the closest mark, fouls inside the arc are placed on the arc at the horizontal location of the foul ([PAGE 13]). Geometrically, this moves the kick from 12 yards (10.97 m) on the center line to 18 yards (16.46 m) at angles up to ±50° from the goal normal. Under the fitted GAM, increasing distance to goal and moving off-center angle both reduce xG, satisfying the objective of reduced expected goals ([PAGE 7], [PAGE 10]). However, the paper provides no numerical prediction for the arc location itself, only for the current spot (74%). The claimed reduction is therefore theoretically implied but not empirically quantified in the source.

Gray-zone audit: (1) The sample of 29 observed penalty kicks ([PAGE 2]) is too small to validate the model at the new arc locations; (2) “defenders behind ball” is modeled with k=3 after the authors note an exponential relationship not captured linearly and decide k=9 is not needed ([PAGE 9]), yet they do not report the functional form or effective degrees of freedom; (3) the model omits goalkeeper positioning, wind, pitch condition, and kicker foot preference—variables that become material at 18 yards and oblique angles; (4) Beta regression with a logit link is singular as μ → 0 or μ → 1, and GAM splines degrade under extrapolation beyond the convex hull of the 1,638-shot training domain ([PAGE 8]). These are exact breakdown regimes that must be bounded before the rule change is treated as valid.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let the predictor vector be x = (d, θ, φ, n) with units and domain:
- d = distance to goal, SI unit meters [m]; penalty spot d₀ = 12 yd = 10.9728 m ([PAGE 2], [PAGE 13] implies arc at 18 yd = 16.4592 m).
- θ = angle to goal relative to the goal normal, unit radians [rad]; current PK θ₀ = 0 rad; proposed arc marks at ±50° = ±0.8727 rad ([PAGE 13]).
- φ = distance to closest defender, [m]; during a PK, Law of the Game implies φ ≥ 9.144 m (10 yd from the spot), though the paper does not state this value explicitly.
- n = defenders behind ball, count [dimensionless integer], n ≥ 0.

Response:
- y = StatsBomb expected goals, dimensionless probability μ(x) ∈ [0, 1] ([PAGE 10]).

Model family and link ([PAGE 8]):
- yᵢ ~ Beta(μᵢτ, (1 − μᵢ)τ), where τ > 0 is the precision parameter.
- g(μᵢ) = log( μᵢ / (1 − μᵢ) ) = ηᵢ.

GAM linear predictor ([PAGE 10]):
- η(x) = β₀ + s₁(d; k=9) + s₂(θ; k=9) + s₃(φ; k=9) + s₄(n; k=3).

Calibration target and result:
- Target: E[y | PK] ≈ 0.75 ([PAGE 7]).
- Observed 2018 World Cup: 22 goals / 29 PKs = 0.7586 ([PAGE 2]).
- Model prediction for current PK: 0.74 ([PAGE 10]).
- Absolute calibration error: |0.7586 − 0.74| = 0.0186.

Singularity and breakdown regimes:
1. Beta logit link singularity: g(μ) → −∞ as μ → 0⁺ and g(μ) → +∞ as μ → 1⁻. If the arc geometry pushes xG extremely close to 0 or 1, the link and variance function V(μ) = μ(1−μ)/(1+τ) degenerate.
2. GAM extrapolation: smoothing splines with basis dimension k are reliable only inside the convex hull of training covariates. The training set excludes penalty kicks ([PAGE 8]) and likely contains few shots beyond 16 yards from oblique angles; prediction at d = 16.4592 m, θ = ±0.8727 rad is an extrapolation with unbounded variance growth.
3. Smoothness misspecification: the authors found an exponential relationship for defenders behind ball not captured linearly ([PAGE 9]), yet selected k=3 rather than k=9. If the true effective degrees of freedom exceed 3, the term is under-smoothed and biased.
4. Sample-size penalty: only 29 PK observations exist for validation ([PAGE 2]), while the model has four smooth terms; overfitting risk is high if the arc rule is evaluated on the same small PK sample.

Verbatim evidence:
- “Used shot data excluding penalty kicks — 1638 observations” ([PAGE 8]).
- “Prediction for Current PK: 74%” ([PAGE 10]).
- “Arc 18 yards from goal, outside marks at 50°” ([PAGE 13]).
- “Scoring Percentage 75.86%” for PKs and “Scoring Percentage 11.81%” for box shots ([PAGE 2]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week adaptation traps.

The paper sits in a lineage tracing back to the formalization of expected goals (xG) by Opta and later StatsBomb, where shot location, body part, and defensive pressure are mapped to scoring probability. The methodological core—a Generalized Additive Model with a Beta family and logit link—descends from Hastie and Tibshirani’s GAM framework, adapted here to bounded probabilistic outcomes in sport. The penalty-kick literature includes game-theoretic work on penalty-taker versus goalkeeper equilibrium (e.g., Palacios-Huerta’s analysis of professional penalty kick strategies) and goalkeeper diving bias research (Bar-Eli et al.). Cratty & de la Parra extend this by treating the penalty kick not as a fixed institution but as a geometric design variable whose expected goals can be re-calibrated.

The retro-causal trap is multi-week and behavioral. If a competition adopts the penalty-arc rule, the first matchday outcome will not equal the model’s steady-state prediction. Over weeks, kickers will rehearse run-ups from 18 yards at ±50°, goalkeepers will study the new optimal starting position, and defenders will learn the “closest mark” and “horizontal location of the foul” placement rules ([PAGE 13]). This creates a feedback loop: the rule changes the spatial distribution of kicks, which changes goalkeeper priors, which changes kicker shot selection, which invalidates the static GAM trained on historical open-play shots. A multi-week trap emerges when early-season data (used to “validate” the rule) reflect novelty effects rather than equilibrium behavior. Because the paper offers no dynamic or adaptive model, any rule change based on its static xG surface risks being gamed once participants accumulate repeated exposure. The historical lineage therefore warns: institutional design must account for the recursive adaptation of players across a multi-week tournament, not just the immediate physical geometry.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock pressure.

From a recursive theory-of-mind perspective, the penalty kick is a crisis moment in which the kicker’s motor program regresses to habitual patterns: a player who normally strikes with the instep from the spot will default to that technique under high arousal. Moving the kick to the arc at 18 yards and a 50° angle disrupts the approach run, changes the angle of the kicking hip relative to the goal, and increases the time of flight. The kicker must now model the goalkeeper’s model of the kicker: if the goalkeeper expects a placement to the top corner because the angle is wider, the kicker may counter by driving low near the post; if the goalkeeper stays central anticipating a straight drive, the kicker may exploit the open side. This nested modeling is the counter-trap.

The defense, meanwhile, faces its own recursive problem. Under the proposed rule, if fouled inside the arc, the ball is placed on the arc at the horizontal location of the foul ([PAGE 13]). A defending team may therefore commit a tactical foul slightly inside the arc to force the kick to a mark that favors their goalkeeper’s strengths or the kicker’s weaker foot. The attacking team, anticipating this, may attempt to draw the foul closer to a mark that maximizes their xG under the fitted GAM. Each layer conditions the next: attacker predicts defender’s foul placement, defender predicts attacker’s mark preference, goalkeeper predicts both.

Clock pressure modulates this recursion. In late-game states—trailing by one goal with minutes remaining—the marginal value of a goal is non-linear; a kicker may accept a lower-probability arc placement if it arrives faster or avoids a red-card scenario, whereas early in the match the same kicker may optimize purely for expected goals. The paper’s GAM contains no game-state or clock variable ([PAGE 8], [PAGE 10]), so its xG surface is stationary in time while actual penalty conversion is time-dependent. This temporal omission is a theory-of-mind failure: the model assumes the kicker and goalkeeper reason over a single-shot physics problem, whereas in reality they reason over a dynamic, clock-bounded crisis with reputational and strategic externalities.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The paper’s model uses only four predictors—distance to goal, angle to goal, distance to closest defender, and defenders behind ball ([PAGE 10])—and explicitly excludes penalty kicks from training ([PAGE 8]). A cross-layer veto examination reveals three independent failure layers.

Physical layer: At 18 yards (16.4592 m) versus the current 12 yards (10.9728 m) ([PAGE 2], [PAGE 13]), ball flight time increases by roughly 37% under identical initial velocity. That extra time allows the goalkeeper to react to late ball movement, read visual cues, and potentially start moving off the line before the kick is struck (though Laws constrain this, the physical reality is unchanged). The Magnus effect and drag scale non-linearly with velocity and Reynolds number; a longer flight amplifies small differences in spin rate. The GAM’s s(distance; k=9) term cannot capture these aerodynamics because they were never in the training covariates ([PAGE 8]). Veto: if the governing body requires aerodynamic consistency, the arc rule is vetoed unless wind-tunnel or flight-data validation shows no material change in save probability attributable solely to distance.

Biomechanical layer: The approach to a stationary ball at a 50° angle from the goal normal requires a different hip-knee-ankle kinematic chain than the straight-on run-up from the penalty spot. Planting the non-kicking foot beside a moving ball at an oblique angle alters the moment arm at the hip and the angular velocity at the knee. Under crisis arousal, fine motor control degrades; the increased distance demands greater kinetic energy transfer to maintain ball speed, which typically trades off against placement accuracy. Because “angle to goal” enters as a smooth term with k=9 ([PAGE 10]) but no biomechanical constraint is imposed, the model may predict viable xG at 50° that is not humanly reproducible under pressure. Veto: if motion-capture data show a >15% drop in strike consistency at oblique 18-yard placements versus the spot, the rule is biomechanically vetoed.

Weather layer: The model omits wind speed, direction, precipitation, temperature, and pitch friction entirely ([PAGE 8]). At 18 yards, a crosswind component has more time to displace the ball laterally than at 12 yards; rain reduces coefficient of restitution between boot and ball and alters slide friction at the plant foot. An outdoor stadium introduces variance that the Beta-GAM cannot attribute to any predictor. Veto: for open-air venues where wind exceeds a threshold (e.g., 5 m/s sustained) or precipitation is active, the arc rule introduces exogenous variance not present in the calibration domain; the rule should be suspended or the kick reverted to the spot. Only in climate-controlled stadia does the model’s omission of weather cease to be a veto condition.

Adjudication: the veto stack is conjunctive. The arc rule passes only if all three layers clear; failure in any one layer suffices to reject the proposal absent model augmentation with aerodynamic, biomechanical, and meteorological covariates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

RLVR (reinforcement learning from verifiable rewards) requires counterfactuals whose outcomes can be falsified with observable match data.

Veto Scenario 1 — Extrapolation distance veto.
Hold out all training observations with distance to goal greater than 15 yards from the GAM. Retrain the model on the remaining data and predict expected goals at the arc location d = 16.4592 m, θ = 0 rad. Verifiable prediction: if the mean absolute error between predicted xG and actual observed scoring from 16–18 yard open-play shots exceeds 0.08 xG units, the arc prediction is unverifiable and the rule is vetoed. Rationale: the GAM’s s(distance; k=9) has no support beyond the training hull ([PAGE 8]), and penalty kicks are excluded ([PAGE 8]), so arc xG is pure extrapolation.

Veto Scenario 2 — Defender-behind-ball functional-form veto.
Refit the model replacing the smoothed s₄(n; k=3) term with a linear term βₙn, keeping all other terms fixed ([PAGE 9] notes the relationship is exponential and k=9 was rejected). Verifiable prediction: if the calibration error at the current penalty spot shifts from 0.74 to outside the [0.70, 0.78] interval, the k=3 smoothing choice is materially misspecified and the arc-location xG surface cannot be trusted. This veto tests whether the authors’ decision to drop k=9 for defenders behind ball ([PAGE 9]) introduces systematic bias in low-defender-pressure set pieces.

Veto Scenario 3 — Goalkeeper-geometry angle veto.
Use the fitted GAM to predict xG at d = 16.4592 m, θ = ±0.8727 rad ([PAGE 13]), then simulate the same shots with a rational goalkeeper who positions optimally for wide-angle shots (e.g., starting off-center and narrowing the near post). Verifiable prediction: if the observed scoring percentage from actual kicks at these angles in post-implementation match data falls below 40%, the punishment is disproportionate relative to the offense and the rule is vetoed on fairness grounds. The current PK conversion is 75.86% ([PAGE 2]); a drop below 40% would constitute a >35-percentage-point penalty escalation unsupported by the paper’s calibrated 74% baseline ([PAGE 10]).
</RLVR_COUNTERFACTUAL_VETOES>
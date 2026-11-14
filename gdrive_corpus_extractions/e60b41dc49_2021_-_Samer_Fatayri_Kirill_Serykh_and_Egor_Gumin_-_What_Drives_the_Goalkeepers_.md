---
source: "2021 - Samer Fatayri, Kirill Serykh and Egor Gumin - What Drives the Goalkeepers' Decisions - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3906
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about goalkeepers' decisions in soccer. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided pages 1-14 but says PAGES: 6. Actually looking at the source text, it has page markers **1** through **14**. But the user said PAGES: 6. I need to be careful about page citations. I should cite exact [PAGE N] markers from the source text. The source text has bold page numbers like **1**, **2**, etc. I should reference those.

Let me structure my response with the exact XML sections.

Key content from paper:
- Goalkeeper decision-making framework
- Run model: time difference between events -> radius goalkeeper could cover
- 8 angles (0, π/4, π/2, π, …, 7/4 π) for simulated positions
- 6 simulated shot end locations in goal area, equal probability
- Position shadow: ratio of area of intersection between triangles ABC (goalkeeper projection) and OBC (shooter projection) to area of triangle OBC
- Formula: Position Shadow = S(ABC ∩ OBC) / S(OBC)
- Goal shadow: ratio of goal area covered by potential dive area
- Dive model constants from Ibrahim et al. (2018): reaction time = 0.2 s, jump time = 0.5 s, maximum dive time = 1.2 s
- Dive area approximated as rectangle, max height = goalkeeper height + 50 cm
- Dive shadow: Circle(AD) ∩ OBC / OBC, where D is orthogonal intersection, S is shot endpoint
- XGBoost classifier for block model (density of players, time to trajectory)
- XGBoost classifier for save model (shadows, distance, angles, shooter under pressure)
- Model found backward movement more effective, real-life goalkeepers move forward/diverse
- Episodes: sequence of events where last event is shot toward goal, approx 10-15 seconds
- Sample size problem: 4.5 shots on target per game, ~150 per season

I need to make sure I don't mention betting lines. No spreads, totals, moneylines, odds. I can mention probability but not betting odds.

I need formal LaTeX equations. I should reconstruct the equations from the paper properly.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to analyze the paper's logic, assumptions, breakdown regimes. Multi-hop: from event data -> simulated positions -> shot probabilities -> shadows -> XGBoost -> real-world divergence. Gray zones: equal probability assumption for shot locations, simplified run model (8 discrete angles, no acceleration), rectangle approximation for dive area, ignoring off-target shots, goalkeeper anthropometry not included, 30% pitch condition, episode definition 10-15s.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Run model radius: r = v * Δt? Actually paper says "takes the time difference between current and previous events and returns the radius". Units: seconds -> meters (implicit velocity assumed).
- Angles: θ_k = k·π/4, k=0,...,7
- Position Shadow: Ψ_pos = S(ABC ∩ OBC) / S(OBC)
- Dive Shadow: Ψ_dive = S(Circle(AD) ∩ OBC) / S(OBC)
- Goal Shadow: ratio of goal area covered by dive area
- Save model: P(save | shot arrives) = XGBoost(features)
- Block model: P(block | shot) = XGBoost(density, time-to-trajectory)
- Sample size: λ = 4.5 shots/game, N_season ≈ 150
- Constants: t_reaction = 0.2 s, t_jump = 0.5 s, t_dive_max = 1.2 s, h_max = h_gk + 0.5 m

Citations: need exact page markers. Page numbers in text: **1** abstract, **2** intro, **3** framework design, **4** probability of goal / keeper position metric, **5** block model / position shadow, **6** goal shadow, **7** dive shadow / prediction model, **8** prediction model continued, **9** results, **10** tool, **11** field view / goal projection, **12** simulator, **13** discussion / conclusion, **14** references.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: Antonio (2014) repeatability, Ibrahim et al. (2018/2019) diving kinematics, StatsBomb 360 data context. Multi-week traps: small sample variance over weeks, season-to-season non-repeatability causing scouting traps, confirmation bias in coach feedback loops over multi-week periods.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Goalkeepers' crisis habits: moving forward toward ball under pressure (crisis habit regression) vs model's backward conservation. Counter-trap: striker anticipates keeper's forward movement and places shot behind them. Clock: 10-15s episode window, reaction time 0.2s, dive 1.2s, time pressure compresses decision recursion.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Biomechanical: max dive time 1.2s, jump height h+50cm, orthogonal distance AD may exceed reachable circle -> veto if |AD| > v_max * 1.2s. Physical: straight-line shot assumption ignores spin/drift (Magnus effect), wet ball, grass length. Weather: not addressed in paper but veto conditions: wind alters trajectory, rain affects dive friction/sliding distance. Position unknown events (black highlighted) veto the model.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
1. Veto: |AD| > reachable radius in 1.2s. Prediction: save probability collapses to baseline; XGBoost should output near-random if distance feature > threshold.
2. Veto: Off-target shot excluded by assumption "every shot reached the target". Prediction: model overestimates save difficulty for shots that would miss anyway; precision drops when off-target rate > X%.
3. Veto: Episode boundary = last event is shot; if goalkeeper position unknown at any event in 10-15s window (black highlight), position model cannot apply. Prediction: analysis coverage <100%, bias toward episodes with complete tracking.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. Others should be substantial.

Let me write carefully, ensuring no betting language. Avoid "odds" entirely. Use "probability" only in modeling context.

Let me draft.

THINK_TRACE:
Start with deep multi-hop derivation.
The paper's causal chain: raw event/tracking data -> filter defending 30% pitch + opponent possession -> simulate shot -> simulate keeper positions via run model -> compute shot end location probabilities -> compute shadows (position, goal, dive) -> feed into XGBoost -> compare optimal vs real behavior.
Gray-zone audit:
1. Equal probability of 6 shot endpoints (p=1/6 each) independent of shooter position. This is a maximum-entropy assumption that creates a minimax keeper strategy (backward). Real keepers use posterior over shooter intent, hence forward movement.
2. Run model: discrete 8 angles, constant velocity implicit, no acceleration, no reaction time in run model itself (reaction time only in dive model). Singularity: Δt=0 => radius=0, keeper cannot move between events.
3. Position shadow ratio S(ABC∩OBC)/S(OBC): if triangles don't intersect, shadow=0. If keeper is exactly on line BC? Degenerate.
4. Dive shadow: Circle(AD) radius capped by max dive distance. Orthogonal projection D may fall outside segment BC, making intersection empty or partial.
5. Sample size: 4.5 shots on target/game, ~150/season. Standard error of save proportion ~ sqrt(p(1-p)/150), large for rare events.
6. Missing off-target shots, anthropometry, spin, weather.

Need >=400 words here. I'll write richly.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX.
[PAGE 3] run model description.
[PAGE 3] Figure 1, 8 angles.
[PAGE 3] 6 points equal probability.
[PAGE 5] position shadow formula.
[PAGE 6] goal shadow constants.
[PAGE 7] dive shadow formula.
[PAGE 7] prediction model features.
[PAGE 2] sample size 4.5 and 150.
[PAGE 14] Ibrahim et al. 2019 (actually cited as 2018 in text, reference says 2019). I should note the discrepancy maybe.

I'll write LaTeX blocks.

RETROCAUSAL_GENEALOGY:
Historical lineage: Antonio 2014 repeatability; Ibrahim et al. biomechanics; StatsBomb 360. Multi-week traps: small N per week causing overreaction to form; non-repeatability means weekly rankings are noise; coach/keeper feedback loop where model suggests backward but keeper's intuition says forward, creating crisis habit.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure keepers lunge forward (attacking the ball) because evolutionarily, reducing distance to ball feels like control. Counter-trap: shooter reads forward lean and chips/places to far post. Clock: 0.2s reaction + 1.2s dive = 1.4s cycle; episode 10-15s means only a few decision cycles; clock pressure forces heuristic, not optimization.

CROSS_LAYER_VETO_ADJUDICATION:
Biomechanical veto: if orthogonal distance AD > R_max where R_max derived from 1.2s and keeper acceleration/velocity, dive shadow area = 0 effectively. Physical veto: straight-line trajectory ignores Magnus effect, backspin, knuckleball; wet ball reduces grip. Weather veto: wind alters shot flight, rain reduces diving friction/slide. Unknown position (black highlight) vetoes model application entirely.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Distance veto: |AD| > v_max * 1.2 s. Prediction: model's dive shadow term becomes zero; save probability from XGBoost drops below 0.2 even if position shadow is high. Verifiable via tracking data: filter shots where keeper-to-shot-orthogonal distance exceeds reachable radius; observe save rate.
2. Equal-probability veto: actual shot distribution is non-uniform (e.g., keeper reads body shape). Prediction: in games where shooter has >70% tendency to one side, model's backward recommendation yields lower save rate than keeper's forward bias; counterfactual: swapping to keeper's actual position improves predicted save probability by δ > 0.05.
3. Episode continuity veto: black-highlighted unknown position events within 10-15s episode. Prediction: episodes with >=1 black event have incomplete shadow computation; XGBoost feature vector contains NaNs or imputed values; save-model AUC drops by >0.03 vs green-only episodes.

Make sure to include exact page citations in brackets like [PAGE 3].

Word count check: I'll aim for ~1300+ total words.

Let's write it out fully.

I need to be careful: The source text uses **1**, **2**, etc. as page numbers. I'll cite [PAGE 3] etc.

No betting lines. I will not use "odds". I might use "probability" which is fine as it's a modeling term, not betting.

Let me compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a causal pipeline from raw event and tracking data to a prescriptive goalkeeper-positioning model, then audits that model against observed behavior. The first hop filters game states: defending actions within 30% of the pitch toward the goal while the opponent controls possession. Under these conditions a shot is simulated. The second hop is the “run model” [PAGE 3]: given the time difference Δt between the current and previous event, the model returns a radius the goalkeeper could have covered by running. This radius is added to the previous location (blue) and projected at eight discrete angles θ_k = k·π/4, k = 0,…,7, yielding eight candidate positions (red). A gray zone appears immediately: the run model assumes an implicit constant velocity and zero acceleration, so the singularity at Δt = 0 collapses the reachable set to a point; more importantly, no reaction-time or biomechanical lag is embedded in the running phase itself, even though reaction time later appears in the dive model. The third hop simulates shot end locations at six points in the goal area [PAGE 3], under two strong assumptions: every shot reaches the target exactly, and the striker selects each of the six points with equal probability p = 1/6, independent of shooter position. This maximum-entropy assumption forces a minimax posture: because the keeper cannot condition on shooter intent, the optimal strategy is to guard the worst-case cell, which the authors find favors backward movement toward the goal line [PAGE 9]. The fourth hop defines the goalkeeper’s position metric as the maximum goal probability across the six simulated positions [PAGE 4], which introduces a max-operator that is non-smooth and sensitive to small changes in keeper geometry.

The fifth hop builds geometric “shadows.” The position shadow [PAGE 5] is the ratio of the intersection area between triangle ABC (goalkeeper projected to the goal via the two posts) and triangle OBC (shooter’s shooting projection) to the area of OBC: Ψ_pos = S(ABC ∩ OBC) / S(OBC). If the triangles are disjoint, Ψ_pos = 0; if the goalkeeper lies exactly on the goal line segment BC, the geometry degenerates and the intersection area becomes ill-defined without a limiting convention. The goal shadow [PAGE 6] uses Ibrahim et al.’s dive kinematics—reaction time 0.2 s, jump time 0.5 s, maximum dive time 1.2 s—and approximates the reachable area as a rectangle with height equal to goalkeeper height plus 50 cm. The dive shadow [PAGE 7] further restricts reachable area to a circle centered at the orthogonal projection D of the keeper onto the shot line, intersected with OBC: Ψ_dive = S(Circle(AD) ∩ OBC) / S(OBC). Here the orthogonal distance |AD| may exceed the maximum distance coverable in 1.2 s; the paper caps this with a circle of maximum dive range, but does not state the velocity or acceleration used to derive that radius, leaving a unit gap between seconds and meters.

The sixth hop trains an XGBoost classifier for shot blocking [PAGE 5] using player density between shooter and goal and time to intercept the straight-line shot trajectory. A second XGBoost classifier [PAGE 7] predicts save probability conditional on the shot arriving at the goal, using the shadows, shot distance, shot angles, and shooter pressure. The results show a structural divergence: the model’s optimal distribution favors backward, conservative motion [PAGE 9], whereas real goalkeepers move forward and laterally more often [PAGE 9]. The authors attribute this to the equal-probability shot assumption, which removes the keeper’s intuitive posterior over shooter intent.

Gray-zone audit continues with sample size and data coverage [PAGE 2]: 4.5 shots on target per game and roughly 150 per season produce large standard deviations and outliers, making season-to-season save percentage weakly repeatable (Antonio, 2014). The episode definition [PAGE 10]—a sequence ending in a shot, lasting roughly 10–15 seconds—means any black-highlighted event with unknown keeper position vetoes position-model application for that episode, inducing selection bias toward well-tracked sequences. Missing from the framework are off-target shots, spin/Magnus effects, anthropometry beyond height + 50 cm, weather, and pitch conditions. Each omission represents a breakdown regime where the model’s output is not merely uncertain but structurally invalid: a knuckleball violates the straight-line shot assumption; a wet pitch changes dive friction; an off-target shot should not enter the goal probability at all, yet the model conditions on target arrival.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Run model (radius from event-time gap) [PAGE 3]:
r(Δt) = v̄ · Δt, with θ_k = k·π/4, k ∈ {0,…,7}, candidate position p_k = p_{prev} + r(Δt)[cos θ_k, sin θ_k].
Units: Δt in seconds, r in meters (v̄ implicit, unstated). Breakdown: Δt = 0 ⇒ r = 0 (no movement between events); discrete 8-angle grid excludes continuous angular recovery.

Shot simulation [PAGE 3]:
Six end locations S_i in goal area; P(S = S_i) = 1/6 ∀i; independent of shooter position. Breakdown: maximum-entropy assumption ignores shooter biomechanics and keeper-read posterior; conditions on target arrival, excluding off-target shots.

Goal probability for single shot [PAGE 4]:
P(goal | end location) defined per cell; keeper position metric = max_i P(goal | S_i, keeper position). Breakdown: max-operator creates non-differentiable objective; sensitive to cell discretization.

Position shadow [PAGE 5]:
Ψ_pos = S(ABC ∩ OBC) / S(OBC),
where A = keeper position, B/C = goal posts, O = shooter position. Units: dimensionless area ratio ∈ [0,1]. Breakdown: if ABC ∩ OBC = ∅ then Ψ_pos = 0; if keeper collinear with BC, triangle area degenerates.

Dive kinematics constants [PAGE 6]:
t_reaction = 0.2 s, t_jump = 0.5 s, t_dive,max = 1.2 s, h_reach = h_keeper + 0.5 m. Units: seconds and meters. Source: Ibrahim et al. (2018/2019) [PAGE 14]. Breakdown: rectangle approximation ignores angular dive mechanics and keeper-specific acceleration.

Dive shadow [PAGE 7]:
Ψ_dive = S(Circle(AD) ∩ OBC) / S(OBC),
where D = orthogonal projection of keeper onto shot line, radius capped by maximum dive distance in t_dive,max. Units: dimensionless. Breakdown: if |AD| > R_dive,max the circle does not cover D; intersection may be empty; straight-line shot trajectory ignores spin and drift.

Block model [PAGE 5]:
P(block | shot) = XGBoost( player density between shooter and goal, time to shot trajectory ). Units: probability ∈ [0,1]. Breakdown: straight-line trajectory assumption invalid for swerving shots.

Save model [PAGE 7]:
P(save | shot arrives at goal) = XGBoost( Ψ_pos, Ψ_dive, shot distance, shot-to-goal angles, shooter under pressure ). Units: conditional probability ∈ [0,1]. Breakdown: NaNs or imputation for black-highlighted unknown keeper positions [PAGE 10].

Sample size and repeatability [PAGE 2]:
λ ≈ 4.5 shots on target per game; N_season ≈ 150; standard error of save proportion σ_p = sqrt[p(1−p)/150], large for rare events; Antonio (2014) low season-to-season repeatability. Breakdown: weekly or small-N aggregates have high variance, producing scouting and evaluation traps.

Episode definition [PAGE 10]:
Episode = sequence of events whose last event is a shot on goal; length ≈ 10–15 s. Position model applies only to green-highlighted events; black-highlighted events (unknown keeper position) veto the model.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Antonio (2014) on the poor repeatability of goalkeeper shot-saving performance [PAGE 2], establishing that seasonal save percentages are noisy and weakly predictive—a problem the authors address by shifting from descriptive save percentage to prescriptive positioning geometry. The biomechanical layer descends from Ibrahim et al. (2018/2019) [PAGE 6, PAGE 14], whose kinematic and kinetic analysis of diving saves supplies the reaction/jump/dive time constants and the height-plus-50-cm reach approximation. The data layer inherits from StatsBomb 360 event and tracking context [PAGE 13], which the authors believe adds shooter-body and defender-density context missing from older goalkeeper metrics.

A multi-week trap is embedded in the sample-size structure: with roughly 150 shots per season, any weekly evaluation window contains only a handful of shots [PAGE 2]. Over a 3–4 week period, random variance in shot quality and placement can swing a goalkeeper’s observed save rate by several percentage points, tempting analysts and coaches to overreact to short-term form. Because the paper’s model prescribes backward, conservative movement while real keepers exhibit forward, intuitive behavior [PAGE 9], a coach who trusts the model over consecutive weeks may instill a hesitation habit: the keeper delays coming off the line to satisfy the model’s minimax geometry, while opponents learn to exploit the deeper starting position. The counter-trap is that real keepers’ forward movement reflects a Bayesian read of shooter intent; if the model suppresses that read by enforcing equal shot-location probabilities, the keeper becomes predictable over a multi-week scouting cycle. The episode boundary (10–15 s, ending in a shot) further truncates the causal history: only the immediate pre-shot geometry is modeled, so multi-pass buildup and setter fatigue over a 90-minute match are excluded, creating a blind spot in longer-term tactical adaptation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure, goalkeepers tend to move forward and toward the ball rather than backward toward the goal line [PAGE 9]. This is a crisis habit—an evolved, proximity-reducing heuristic that feels like increasing control over the shot, even when the model’s minimax geometry suggests retreating to cover the maximum-probability cell. The regression is recursive because the keeper’s forward commitment changes the shooter’s payoff matrix: a keeper leaning forward opens the space behind them, which a sophisticated striker can exploit by placing the shot to the far post or chipping over the advancing keeper. That is the counter-trap: the keeper’s crisis habit (forward aggression) induces a shooter counter-adaptation (placement behind the keeper), which in turn should make the keeper regress further backward—except the keeper’s real-time intuition resists the model’s conservative prescription, creating an oscillation between model-optimal depth and habit-driven aggression.

Clock layer: the decision cycle is bounded by t_reaction + t_dive,max = 0.2 s + 1.2 s = 1.4 s from shot contact to full dive extension [PAGE 6], while an episode lasts only 10–15 s [PAGE 10], permitting at most a few full decision-revise loops before the shot arrives. The clock therefore compresses theory-of-mind recursion: the keeper cannot iterate “I think the shooter thinks I will dive left” multiple times; the first read must be executed within roughly one second. This favors heuristic crisis habits over the model’s offline optimization, explaining why real keepers diverge from the simulated backward patterns. The model, by contrast, computes shadow ratios statically and does not encode the 1.4 s clock pressure as a constraint on cognitive depth, so its optimal distribution is temporally decoupled from the keeper’s in-moment recursion limit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Biomechanical veto: the dive shadow assumes the keeper can reach any point within Circle(AD) up to the maximum dive distance in t_dive,max = 1.2 s [PAGE 7]. If the orthogonal distance |AD| exceeds the distance coverable by the keeper’s actual acceleration and velocity profile within 1.2 s, the dive shadow term must be vetoed to zero for that cell, because no physically feasible trajectory intersects the shot path before the ball crosses the line. The paper does not state keeper-specific mass, leg power, or ground-reaction limits, so the radius cap is an unverified constant rather than a derived biomechanical bound.

Physical veto: all shots are modeled by straight lines [PAGE 5], which vetoes the model under Magnus-effect conditions (backspin lift, sidespin curl, knuckleball oscillation). A swerving shot can arrive at a goal cell not intersected by the pre-shot straight-line triangle OBC, invalidating both position and dive shadows. Ball deformation on a wet pitch and reduced foot-ball friction similarly alter launch velocity and spin, breaking the straight-line assumption.

Weather/environmental veto: the framework contains no weather parameters. Wind alters shot flight time and lateral displacement over the 1.4 s reaction-plus-dive window; rain reduces dive-slide friction and increases effective reaction delay; pitch length and grass height change running velocity v̄ in the run model [PAGE 3]. Each is an exogenous veto condition under which the geometry-based probabilities are not transportable.

Information veto: episodes containing any black-highlighted event with unknown keeper position cannot have the position model applied [PAGE 10]. This is a hard data veto: if the keeper’s location is missing at any point in the 10–15 s episode, the shadow features are undefined and the XGBoost save model receives an incomplete feature vector, requiring imputation or exclusion. The resulting selection bias favors episodes with complete tracking, which are systematically different from chaotic, high-pressure sequences where occlusion is most likely.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Reach-distance veto. If |AD| > R_dive,max, where R_dive,max is the maximum distance coverable in t_dive,max = 1.2 s, the dive shadow is physically infeasible. Prediction: for shots where the orthogonal distance from keeper to shot line exceeds the biomechanical reach radius, the XGBoost save model must output a save probability indistinguishable from the base-rate concession rate for that shot distance, regardless of position shadow. Verifiable by filtering tracking data for long orthogonal passes and observing that save probability does not increase with favorable position shadow.

Veto scenario 2 — Equal-probability shot-location veto. If the shooter’s actual shot-location distribution is non-uniform (e.g., posterior mass > 70% on one side based on body shape), the model’s equal-weight p = 1/6 assumption is invalid. Prediction: in game states where the shooter exhibits a strong unilateral tendency, keepers who follow the model’s backward, conservative recommendation will record lower save rates than keepers who move forward toward the shooter’s indicated side; counterfactually, substituting the keeper’s actual forward position into the shadow equations should raise the predicted save probability by δ > 0.05 relative to the model-optimal backward position.

Veto scenario 3 — Episode-continuity veto. If any event in the 10–15 s episode is black-highlighted due to unknown keeper position [PAGE 10], the shadow feature vector contains missing values. Prediction: episodes with at least one black event will show significantly lower save-model AUC (drop > 0.03) and higher calibration error than all-green episodes, because imputed keeper positions introduce geometric noise into Ψ_pos and Ψ_dive. Verifiable by comparing model performance on green-only versus mixed-episode subsets in the same match sample.
</RLVR_COUNTERFACTUAL_VETOES>
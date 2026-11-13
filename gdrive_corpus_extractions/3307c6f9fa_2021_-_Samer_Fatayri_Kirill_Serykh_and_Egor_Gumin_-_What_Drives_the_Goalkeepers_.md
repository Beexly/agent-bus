---
source: "2021 - Samer Fatayri, Kirill Serykh and Egor Gumin - What Drives the Goalkeepers' Decisions - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5686
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a specific research paper about goalkeepers' decisions in soccer. I need to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to analyze the paper thoroughly. Let me extract key information:

Paper: "What drives a goalkeepers' decision?" by Samer Fatayri, Kirill Serykh, Egor Gumin. StatsBomb Research Competition 2021. 14 pages.

Key points:
- Problem: Goalkeepers underrepresented in event/tracking data. Existing metrics (save %, postshot xG - goals conceded) are: (1) descriptive not prescriptive, (2) poor repeatability (Antonio, 2014), (3) small sample size (~4.5 shots on target per game, ~150 per season). [PAGE 2]
- Framework: Simulated shots and positions. Combined events when defending 30% of pitch toward goal area and ball controlled by opponent. Simulated shots toward goal. "Run model" - time difference between current and previous events returns radius goalkeeper could cover by running. Add radius to previous location with 8 angles (0, π/4, π/2, ..., 7/4π) to get 8 points. [PAGE 3]
- Shot simulation: 6 different points in goal area. Every shot reaches target and lands exactly at one of 6 points. Striker chooses one of 6 points with equal probability, independent of striker's position. [PAGE 4]
- Probability of goal: defined for single shot by end location. Goalkeeper's position metric = maximum of probabilities for all 6 simulated positions. [PAGE 4-5]
- Save and block models:
  - Block model: XGBoost classifier with features: density of players between shooter and goal, time to get to trajectory of shot (straight lines). Predicts probability of shot being blocked by field players. [PAGE 5]
  - Save model: shadows describing goalkeeper's position.
    - Position shadow: Triangle ABC (goalkeeper projection at goal: A=GK pos, B=right post, C=left post), Triangle OBC (shooter projection: O=shooter position). Position Shadow = S(ABC ∩ OBC) / S(OBC). [PAGE 5-6]
    - Goal shadow: Ratio of goal area covered by potential dive area. Dive model Ibrahim et al. (2018): reaction time = 0.2s, jump time = 0.5s, max dive time = 1.2s. Dive area approximated as rectangle, max height = goalkeeper's height + 50 cm. [PAGE 6]
    - Dive shadow: Area of potential surface reachable by hand in dive. Defined as circle with radius equal to orthogonal to line of shot (assuming GK knows where shot would take place). D = point where line of shot intersects orthogonal of GK position. S = end location of one of 6 simulated shots (left bottom corner example). Circle displays max distance covered by GK dive in 1.2s. Dive Shadow = S(Circle(AD) ∩ OBC) / S(OBC). [PAGE 7]
- Prediction model: Added distance of shot, angles of shot to goal between shooter and GK, shooter under pressure. XGBoost classifier predicts probability GK will save shot if shot arrives at goal. [PAGE 8]
- Results: Model found backward-going patterns more effective than forward-going. Real-life goalkeepers make less conservative decisions, move toward ball or sides rather than backward. [PAGE 9]
- Discussion: Difference attributed to equal probabilities assumption for shot end locations. Simulated GKs minimize max probability of goals overall (minimax), real-life GKs have intuition about which side striker will shoot. [PAGE 13]
- Tool: Episodes defined as sequence of events where last event is shot toward goal, approx 10-15 seconds. Video player, episode list, field view, goal projection. [PAGE 10-11]
- Simulator: Move players arbitrarily to simulate behavior. Red line = unprotected part of goal for current position. Green line = least protected point for simulated position. [PAGE 12]

Now I need to structure the response with the exact XML sections. Each section needs substantial content. Total >= 1,000 words. THINK_TRACE >= 400 words.

Important: No betting lines. No toy equations. Use real formal LaTeX from the paper. Cite [PAGE N] markers. Include verbatim quotes where appropriate.

Let me draft each section carefully.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to derive the logical chain:
1. Data scarcity problem (150 shots/season) → need for prescriptive framework.
2. Simulated environment construction (run model, 8 angles, 6 shot endpoints, uniform probability).
3. Geometric shadow constructs (position, goal, dive) as ratios of areas.
4. ML layer (XGBoost) combining geometric features with contextual features.
5. Divergence between model (backward/minimax) and reality (forward/intuition-based).
6. Gray zones: uniform distribution assumption is a known singularity; straight-line shot assumption; ignoring off-target shots; dive area as rectangle; max dive time fixed at 1.2s regardless of anthropometry; reaction time fixed 0.2s; orthogonal circle assumption requires perfect shot anticipation (physically impossible pre-contact); run model ignores acceleration/deceleration and fatigue.
Need >=400 words here.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper with units and breakdown. Cite pages.
- Position Shadow: PS = S(ABC ∩ OBC) / S(OBC) [PAGE 5]
- Dive Shadow: DS = S(Circle(AD) ∩ OBC) / S(OBC) [PAGE 7]
- Run model: radius from time difference Δt → 8 points at angles k·π/4, k=0..7 [PAGE 3]
- Shot end locations: 6 points, uniform P=1/6 [PAGE 4]
- Goalkeeper position metric: max over 6 simulated positions of P(goal|end location) [PAGE 4-5]
- Block model: XGBoost with features ρ_players and t_trajectory [PAGE 5]
- Save model: XGBoost with distance, angles, pressure [PAGE 8]
- Dive constants: τ_reaction = 0.2 s, τ_jump = 0.5 s, τ_dive,max = 1.2 s, h_max = h_GK + 0.50 m [PAGE 6]
- Episode length: 10-15 s [PAGE 11]
- Shots per season: ~150 [PAGE 2]
Breakdown regimes: uniform distribution assumption breaks when shooter has preferred side; straight-line breaks with spin/curve; orthogonal circle assumes perfect anticipation; fixed 1.2s dive time breaks with anthropometry/fatigue; rectangle approximation breaks for non-vertical dive planes.

<RETROCAUSAL_GENEALOGY>: Historical lineage. Ibrahim et al. (2018/2019) kinematic/kinetic analysis of diving save. Antonio (2014) repeatability. StatsBomb 2014 article. xglab.pro. Multi-week traps: scouting based on single-season save% suffers from small sample and low repeatability; overfitting to uniform shot distribution; simulators that don't model shooter intention create maladaptive training prescriptions.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Goalkeepers under pressure regress to forward movement (crisis habit). Model prescribes backward (minimax). Counter-trap: if coach forces backward positioning based on model, shooter exploits intention-reading. Clock: episode 10-15s, reaction window 0.2-1.2s. The recursive loop: GK reads shooter, shooter reads GK positioning, model assumes uniform independence which is violated by this mutual modeling.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: dive radius limited by τ_dive,max = 1.2s and h_max = h_GK + 0.5m; orthogonal circle radius cannot exceed distance coverable in 1.2s. Biomechanical: Ibrahim et al. diving save kinematics; fixed reaction time 0.2s is near physiological lower bound; jump time 0.5s. Weather: wet ball changes trajectory (violates straight-line), wind affects flight, pitch condition affects run model acceleration. Veto conditions: if shot end location distribution is non-uniform (P ≠ 1/6), the minimax solution is invalid. If shot has spin, straight-line assumption invalid. If goalkeeper is fatigued, 1.2s dive time is unreachable.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. Need to formulate scenarios that could be tested.
1. Veto: shooter with strong side bias (e.g., 80% to one side). Prediction: model's backward minimax positioning will underperform relative to forward shading toward biased side; real GK intuition beats model.
2. Veto: curved/spinning shot (knuckleball or banana). Prediction: straight-line block model and orthogonal dive circle fail; save probability overestimated for shots curving away from dive plane.
3. Veto: fatigued goalkeeper late in match (t > 75 min). Prediction: fixed 1.2s dive time and reaction time 0.2s no longer valid; reachable circle radius shrinks; model's suggested positions become unreachable, causing systematic overestimation of save probability.
Need to include verifiable predictions and perhaps metrics.

Word count: Need to ensure total >= 1000 words. Let's aim for:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1600 words. Good.

Need to be careful: "ZERO BETTING LINES" - no mention of odds, spreads, etc. I won't mention any betting terms.

"ZERO TOY EQUATIONS" - I must not invent fake ratios like Force/Fatigue. I will only use equations actually from the paper or clearly derived formalisms. I should not make up new equations. I can restate the paper's equations in LaTeX.

Need exact [PAGE N] markers and verbatim quotes when source pages are provided. I have page numbers from the text. I'll cite them.

Let's write.

THINK_TRACE section:

Start with the epistemic problem: save percentage is descriptive not prescriptive [PAGE 2], low repeatability (Antonio 2014) [PAGE 2], small N (~4.5 shots on target/game, ~150/season) [PAGE 2]. This creates a statistical regime where conventional metrics have large standard deviations and outliers. Therefore the paper constructs a counterfactual generative model rather than relying on observational outcomes.

Derivation chain:
- Event filtering: defend 30% of pitch toward goal area, opponent possession [PAGE 3].
- Run model: Δt between events → running radius; 8 compass angles → reachable set [PAGE 3]. This assumes constant velocity and instant direction changes; no acceleration constraints.
- Shot generation: 6 terminal points in goal, all on target, uniform P=1/6 independent of shooter location [PAGE 4]. This is a strong minimax abstraction: the GK faces worst-case over a finite support, not a distribution conditioned on shooter body language.
- Goal probability: P(goal | shot end location). Position metric = max over 6 simulated GK positions [PAGE 4-5]. This is a robust optimization (minimize maximum goal probability).
- Geometric coverage: Position shadow S(ABC∩OBC)/S(OBC) [PAGE 5]; Goal shadow via Ibrahim et al. constants; Dive shadow S(Circle(AD)∩OBC)/S(OBC) [PAGE 7]. These are dimensionless area ratios in [0,1].
- ML layer: XGBoost on geometric shadows + distance + angles + pressure [PAGE 5, 8]. Output: P(save | shot arrives at goal).
- Result: model prefers backward movement [PAGE 9]; real GKs move forward/sideways [PAGE 9, 13]. Divergence explained by uniform endpoint assumption vs shooter intention [PAGE 13].

Gray-zone audit: The uniform P=1/6 is a singularity—if the shooter's conditional distribution p(end | shooter) is non-uniform, the minimax solution is no longer Bayes-optimal. The straight-line trajectory assumption breaks under Magnus effect. The 1.2s dive ceiling ignores fatigue, surface friction, and ankle/knee kinematics from Ibrahim et al. The run model's 8 discrete angles cannot represent curved pursuit paths. The orthogonal circle presumes the GK knows S before contact, violating causal order; it is an informational luxury not available in real time.

Need >=400 words. Let me expand carefully.

SOURCE_OPERATORS_AND_EQUATIONS section:

List equations with LaTeX, units, citations.

1. Run model reachable set:
Given previous position \( \mathbf{x}_{t-1} \in \mathbb{R}^2 \), time delta \( \Delta t \in \mathbb{R}^+ \) [s], running speed \( v \) [m/s], radius \( R = v \Delta t \). Reachable points:
\( \mathbf{x}_k = \mathbf{x}_{t-1} + R (\cos(k\pi/4), \sin(k\pi/4)), k=0,\dots,7 \). [PAGE 3]
Units: meters. Breakdown: assumes constant velocity, zero turning radius, no fatigue.

2. Shot endpoint distribution:
Support \( \mathcal{S} = \{s_1,\dots,s_6\} \subset \text{goal} \). \( P(S=s_i) = 1/6 \), independent of shooter position \( \mathbf{o} \). [PAGE 4]
Units: dimensionless probability. Breakdown: singularity when empirical \( P(S=s_i | \mathbf{o}) \neq 1/6 \).

3. Goalkeeper position metric:
\( M(\mathbf{x}_{GK}) = \max_{i=1,\dots,6} P(\text{goal} \mid S=s_i, \text{GK at } \mathbf{x}_{GK}) \). [PAGE 4-5]
Units: dimensionless probability [0,1]. Minimax objective: \( \min_{\mathbf{x}_{GK}} M(\mathbf{x}_{GK}) \).

4. Position shadow:
Triangles \( ABC \) (A = GK position, B = right post, C = left post) and \( OBC \) (O = shooter). \( \text{PS} = \frac{S(ABC \cap OBC)}{S(OBC)} \). [PAGE 5-6]
Units: \( m^2/m^2 \), dimensionless [0,1]. Breakdown: degenerates if shooter is collinear with goal line (area OBC → 0).

5. Dive shadow:
\( \text{DS} = \frac{S(\text{Circle}(AD) \cap OBC)}{S(OBC)} \), where D is foot of orthogonal from GK position to shot line, Circle radius = max distance coverable in \( \tau_{\text{dive,max}} = 1.2 \) s. [PAGE 7]
Units: dimensionless [0,1]. Breakdown: presumes pre-contact knowledge of shot endpoint \( S \) (retroactive information); fails if \( \tau_{\text{actual}} > 1.2 \) s due to fatigue.

6. Goal shadow constants: \( \tau_{\text{reaction}} = 0.2 \) s, \( \tau_{\text{jump}} = 0.5 \) s, \( \tau_{\text{dive,max}} = 1.2 \) s, \( h_{\text{max}} = h_{\text{GK}} + 0.50 \) m. [PAGE 6]
Units: seconds and meters. Approximation: dive area as rectangle.

7. Block model features: \( \rho = \) density of players between shooter and goal; \( \tau_{\text{trajectory}} = \) time for field player to reach shot line. XGBoost output \( \hat{P}(\text{blocked by field player}) \). [PAGE 5]
Units: \( \rho \) [players/m²] or count; \( \tau \) [s].

8. Save model features: shot distance \( d \) [m], angles \( \theta \) [rad], pressure \( p \in \{0,1\} \). XGBoost output \( \hat{P}(\text{save} \mid \text{shot on target}) \). [PAGE 8]

9. Episode definition: sequence ending in shot on goal, length \( \approx 10\text{–}15 \) s. [PAGE 11]

This section should be ~350 words.

RETROCAUSAL_GENEALOGY section:

Lineage: Antonio (2014) cited for low repeatability of shot-saving performance [PAGE 2]. StatsBomb 2014 article on repeatability [PAGE 14]. Ibrahim R et al. (2018/2019) "Kinematic and kinetic analysis of the goalkeeper's diving save in football," J Sports Sci 37(3):313-321 [PAGE 6, 14]. xglab.pro founded by Egor Gumin [PAGE 1]. Sportec Solutions AG [PAGE 1].

Historical trajectory: from descriptive save% → postshot xG models → prescriptive geometric shadow framework → interactive simulator. The paper inherits the "small N" problem of goalkeeper analytics and attempts to solve it via simulation rather than accumulation.

Multi-week traps:
- Scouting trap: evaluating a GK over one match week using save% is dominated by sampling noise (150 shots/season → ~4.5/game). A single good or bad week does not regress to the mean.
- Modeling trap: adopting the uniform endpoint distribution as if it were stationary across weeks; shooters adapt to GK tendencies, inducing non-stationarity.
- Simulator trap: moving players arbitrarily (PAGE 12) without physiological constraints creates counterfactuals that a human GK cannot physically execute, leading to maladaptive coaching prescriptions.

Need ~200 words.

RECURSIVE_THEORY_OF_MIND section:

Crisis habit regression: Under high-pressure shots, real GKs regress to forward movement toward the ball (PAGE 9, 13). This is a habit regression under threat—reducing the shooter's angle by coming off the line—even though the model's minimax solution favors retreating to the goal line to maximize coverage of the 6-point support.

Counter-trap: If a coach overrides the crisis habit and forces backward positioning based on the model, the shooter—possessing a theory of mind about the GK's depth—can exploit the now-open near-post space. The model assumes the shooter chooses uniformly among 6 points independent of GK position (PAGE 4), but in reality the shooter's distribution is conditioned on observed GK depth. This is a classic recursive loop: GK anticipates shooter; shooter anticipates GK's anticipation.

Clock: The episode clock is 10–15 s (PAGE 11); the decision clock is \( \tau_{\text{reaction}} + \tau_{\text{dive}} \le 0.2 + 1.2 = 1.4 \) s from shot contact to maximal extension (PAGE 6). Within this clock, the GK cannot recompute a minimax over 6 points; she must use a heuristic. The forward movement heuristic may be suboptimal under the model's artificial uniform loss function but optimal under the true conditional distribution \( P(S | \text{shooter body language}) \).

Recursive fixation: The paper identifies the gap (PAGE 13) but does not close it: it still uses uniform probabilities in simulation while acknowledging real GKs use intention-reading. Until the shooter's conditional distribution is modeled, the simulator's "green pins" (suggested positions) may systematically mislead.

Need ~200 words.

CROSS_LAYER_VETO_ADJUDICATION section:

Physical veto: The dive shadow circle radius is bounded by distance coverable in \( \tau_{\text{dive,max}} = 1.2 \) s [PAGE 7]. If the orthogonal distance \( |AD| \) exceeds this radius, \( \text{Circle}(AD) \) is truncated; the model's assumption that the GK "knows where the shot would take place" [PAGE 7] is physically causally violated because shot direction is only observable after foot-ball contact.

Biomechanical veto: Ibrahim et al. [PAGE 6, 14] establish that diving saves involve specific kinematic/kinetic constraints. The paper's rectangle approximation (\( h_{\text{max}} = h_{\text{GK}} + 0.50 \) m) ignores segmental angular velocities, ground reaction forces, and the fact that lateral dive reach differs from vertical jump reach. A goalkeeper with limited hip mobility cannot achieve the nominal rectangle.

Weather veto: The block model assumes shots are modeled by straight lines [PAGE 5]. Wind, rain, and ball degradation introduce aerodynamic deviation (Magnus effect, knuckling), invalidating the straight-line projection \( OBC \) and the orthogonal foot D. Wet pitch reduces \( v \) in the run model, shrinking R below the nominal value.

Adjudication rule: A suggested goalkeeper position is vetoed if (i) \( |AD| > v_{\text{eff}} \cdot 1.2 \) s, (ii) empirical \( P(S=s_i | \mathbf{o}) \) deviates significantly from 1/6 (e.g., side bias > 60/40), or (iii) precipitation/wind alters the ballistic coefficient such that straight-line error exceeds half a goal width.

Need ~200 words.

RLVR_COUNTERFACTUAL_VETOES section:

Three verifiable RLVR veto scenarios:

Scenario 1: Side-biased shooter. Set up a penalty/training scenario where a shooter targets one side of the goal with \( p = 0.8 \) (empirically verified via ball-tracking). The model, constrained by \( P=1/6 \), prescribes a central/backward minimax position. Veto condition triggered: empirical distribution diverges from uniform. Prediction: A goalkeeper shading toward the biased side (forward or lateral) achieves higher save frequency than the model-prescribed backward position, despite the model assigning lower minimax score. Verifiable metric: save rate over N=50 shots comparing model-prescribed vs. bias-adaptive positioning.

Scenario 2: Spinning/knuckleball shot. Use a ball-launching machine to impart sidespin such that trajectory curvature exceeds 0.5 m over 11 m. The block model and dive shadow assume straight-line trajectories and orthogonal intersection D [PAGE 5, 7]. Veto condition: ballistic deviation invalidates D and Circle(AD) intersection geometry. Prediction: Save probability predicted by the XGBoost save model will be systematically overestimated for curving shots aimed at the nominal dive shadow boundary, because the reachable circle is computed on the wrong manifold. Verifiable metric: delta between predicted \( \hat{P}(\text{save}) \) and observed save rate across spinning vs. straight balls.

Scenario 3: Late-match fatigue. Compare goalkeeper dive performance at minute 15 vs. minute 80 in match data or controlled protocol measuring \( \tau_{\text{dive}} \) and horizontal reach. The model fixes \( \tau_{\text{dive,max}} = 1.2 \) s and \( h_{\text{max}} = h_{\text{GK}} + 0.50 \) m [PAGE 6]. Veto condition: measured fatigue-induced increase in reaction time or decrease in dive velocity makes the 1.2 s ceiling unattainable. Prediction: The simulator's green pins (suggested positions) become physically unreachable late in the match; goalkeepers attempting them fail more often than when retaining their natural forward-starting position. Verifiable metric: reachable radius \( R_{\text{empirical}}(t) < R_{\text{model}} \) for \( t > 75 \) min, correlated with conceded goals from shots at the model's "optimal" positions.

Need ~200 words.

Now ensure word count. I'll write generously in each section. Also avoid any betting terms.

Need to make sure XML sections are exactly named and closed. No extra sections.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central epistemic move is to replace sparse observational goalkeeper statistics with a generative counterfactual environment. The authors establish that conventional goalkeeper metrics are descriptively limited: save percentage and postshot xG minus goals conceded do not prescribe how to improve, exhibit poor repeatability across seasons (Antonio, 2014), and suffer from small-sample instability because a goalkeeper faces only about 4.5 shots on target per game, roughly 150 per season, producing large standard deviations and outliers [PAGE 2]. This statistical regime motivates a simulation-based framework rather than accumulation of more observational data.

The derivation chain proceeds as follows. First, the authors filter match events to situations where the defending team controls 30% of the pitch toward the goal area while the opponent controls the ball, then simulate a shot [PAGE 3]. Second, the run model constructs a reachable set: given a time delta Δt between consecutive events, the goalkeeper could cover a running radius R; adding R to the previous location at eight angles k·π/4, k = 0,…,7, yields eight candidate positions [PAGE 3]. This assumes constant running velocity, negligible turning radius, and no fatigue or surface interaction. Third, shots are simulated toward six fixed end locations in the goal; every shot is assumed on target, and the striker is assumed to choose each of the six points with equal probability 1/6, independent of shooter position [PAGE 4]. This is a strong minimax abstraction: the goalkeeper optimizes against a uniform worst-case support rather than a shooter-conditioned distribution.

Fourth, the goalkeeper position metric is defined as the maximum goal probability across the six simulated shot endpoints [PAGE 4–5], yielding a robust optimization objective min over goalkeeper positions of max over shot endpoints of P(goal). Fifth, geometric coverage is formalized through three dimensionless area ratios: the position shadow S(ABC ∩ OBC)/S(OBC), where ABC projects the goalkeeper (A = goalkeeper position, B = right post, C = left post) and OBC projects the shooter (O = shooter position) [PAGE 5–6]; the goal shadow, which uses Ibrahim et al.'s dive constants—reaction time 0.2 s, jump time 0.5 s, maximum dive time 1.2 s, and a rectangular dive area bounded by goalkeeper height plus 0.50 m [PAGE 6]; and the dive shadow S(Circle(AD) ∩ OBC)/S(OBC), where D is the orthogonal intersection of the shot line with the goalkeeper's position and the circle radius equals the maximum distance coverable in 1.2 s [PAGE 7]. Sixth, an XGBoost classifier layers shot distance, shot angles, and shooter pressure onto these shadows to predict P(save | shot arrives at goal) [PAGE 5, 8].

The gray-zone audit identifies where this formalism breaks. The uniform endpoint distribution P = 1/6 is a singularity: if the true conditional P(S = sᵢ | shooter posture) is non-uniform, the minimax solution is no longer Bayes-optimal [PAGE 4, 13]. The straight-line shot trajectory assumption breaks under aerodynamic spin or knuckle effects [PAGE 5]. The orthogonal circle presumes the goalkeeper knows the shot endpoint before contact, a causal violation [PAGE 7]. The fixed 1.2 s dive ceiling ignores fatigue, pitch friction, and anthropometric variation [PAGE 6–7]. The eight-angle run model cannot encode curved pursuit paths [PAGE 3]. Finally, the model's preference for backward movement contradicts real goalkeeper behavior, which tends to move forward and sideways; the authors attribute this divergence to the uniform-endpoint assumption versus real goalkeeper intention-reading [PAGE 9, 13]. Until shooter intention is modeled, the simulator's suggested positions risk prescribing geometrically optimal but behaviorally unrealizable actions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formalisms below are drawn from the source text with page citations; units are SI or dimensionless probabilities.

1. Run-model reachable set [PAGE 3]. Let previous goalkeeper position be xₜ₋₁ ∈ ℝ², time difference Δt ∈ ℝ⁺ [s], and running speed v [m/s]. Radius R = v Δt. Eight reachable points:
xₖ = xₜ₋₁ + R (cos(kπ/4), sin(kπ/4)), k = 0,…,7.
Units: meters for position and radius; radians for angle. Breakdown regime: assumes instant acceleration to v, zero turning radius, and no decay of v over the episode.

2. Shot endpoint distribution [PAGE 4]. Support 𝒮 = {s₁,…,s₆} within the goal; every simulated shot reaches target. P(S = sᵢ) = 1/6, independent of shooter position o ∈ ℝ². Units: dimensionless probability. Breakdown regime: singularity when empirical P(S = sᵢ | o) ≠ 1/6, i.e., shooter side bias or goalkeeper-dependent aiming.

3. Goalkeeper position metric [PAGE 4–5]. M(x_GK) = maxᵢ₌₁,…,₆ P(goal | S = sᵢ, goalkeeper at x_GK). Units: dimensionless [0,1]. The model solves minₓGK M(x_GK), a minimax over the finite shot-support.

4. Position shadow [PAGE 5–6]. Triangle ABC: A = goalkeeper position, B = right post, C = left post. Triangle OBC: O = shooter position. Position Shadow = S(ABC ∩ OBC) / S(OBC). Units: m²/m², dimensionless [0,1]. Breakdown regime: OBC area → 0 when shooter is collinear with the goal line, making the ratio undefined.

5. Goal shadow constants [PAGE 6]. τ_reaction = 0.2 s; τ_jump = 0.5 s; τ_dive,max = 1.2 s; h_max = h_GK + 0.50 m [m]. Dive area approximated as a rectangle. Breakdown regime: rectangle approximation ignores angular kinematics of the diving save; fixed τ values ignore fatigue and anthropometry.

6. Dive shadow [PAGE 7]. D = point where shot line intersects the orthogonal from goalkeeper position S. Circle radius = maximum distance coverable in τ_dive,max = 1.2 s. Dive Shadow = S(Circle(AD) ∩ OBC) / S(OBC). Units: dimensionless [0,1]. Breakdown regime: presumes pre-contact knowledge of shot endpoint sᵢ (informational luxury); invalid if actual dive time > 1.2 s due to fatigue or if D lies outside the reachable circle.

7. Block model [PAGE 5]. XGBoost classifier with features: density of players between shooter and goal [players/m² or count], and time for a field player to reach the shot trajectory [s], assuming straight-line shot paths. Output: P(shot blocked by field player). Breakdown regime: straight-line assumption fails under spin-induced curve; player-density features ignore dynamic defender acceleration.

8. Save model [PAGE 8]. XGBoost classifier with features: shot distance d [m], shot angles to goal between shooter and goalkeeper [rad], and shooter under pressure [binary]. Output: P(save | shot arrives at goal). Units: dimensionless [0,1].

9. Episode structure [PAGE 11]. An episode is a sequence of events terminating in a shot toward the goal, with approximate duration 10–15 s. Units: seconds. This defines the temporal window within which the position model may be applied (green-highlighted events) versus unknown-goalkeeper-position events (black-highlighted).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage combines goalkeeper repeatability research, biomechanical diving analysis, and event-data simulation. It cites Antonio (2014) for the finding that future goalkeeper performance is not reliably related to past performance, undermining season-over-season scouting [PAGE 2]. It references a StatsBomb 2014 article on the repeatability of shot-saving performances [PAGE 14]. Most consequentially, it imports the dive model of Ibrahim et al. (2018), published as "Kinematic and kinetic analysis of the goalkeeper's diving save in football," Journal of Sports Sciences, 37(3):313–321 [PAGE 6, 14], which supplies the physiological constants τ_reaction = 0.2 s, τ_jump = 0.5 s, and τ_dive,max = 1.2 s. Author affiliation ties the work to Sportec Solutions AG and xglab.pro, situating it within the professional tracking-data ecosystem rather than pure academic sports science [PAGE 1].

Historically, goalkeeper analytics has migrated from descriptive aggregates (raw save percentage) to outcome-adjusted models (postshot xG) and now to prescriptive geometric simulation. The paper inherits the small-sample problem of goalkeeper evaluation—approximately 150 shots per season [PAGE 2]—and attempts to solve it by generating synthetic shots rather than waiting for more observational occurrences. This is a retro-causal move: instead of inferring quality from realized goals, the framework simulates what would have happened under alternative goalkeeper positions.

Multi-week traps are embedded in this lineage. The scouting trap arises because evaluating a goalkeeper over a single match week is dominated by sampling noise given roughly 4.5 shots on target per game; a single week's save percentage has high variance and low repeatability [PAGE 2]. The modeling trap occurs if the uniform six-point shot distribution is treated as stationary across weeks, whereas shooters adapt their aiming to observed goalkeeper depth, inducing non-stationarity that invalidates the minimax prescription [PAGE 4, 13]. The simulator trap is explicit in the paper's own tool: analysts may move players arbitrarily to evaluate fictive scenarios [PAGE 12], but without physiological constraints, the simulator can generate goalkeeper positions that are geometrically optimal yet biomechanically unreachable, producing maladaptive coaching prescriptions that regress to the mean over multiple weeks of training.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the real goalkeeper's tendency under pressure to abandon conservative positioning and move forward toward the ball or to the sides, rather than retreating backward toward the goal line [PAGE 9, 13]. This is a threat-driven habit regression: coming off the line reduces the shooter's angular options and shortens the distance to low shots, but it sacrifices coverage of the far post and the upper regions of the goal. The authors' model, by contrast, finds backward-going patterns more effective under its simulated six-point uniform loss function [PAGE 9, 13].

The counter-trap emerges when a coach internalizes the model's backward prescription and suppresses the goalkeeper's crisis habit. Because the model assumes the striker chooses among the six end locations with equal probability independent of the striker's position [PAGE 4], it does not account for the shooter's theory of mind. A shooter who observes a goalkeeper retreating deeply can exploit the newly vacated near-post or side space. The real goalkeeper's forward movement, therefore, may be suboptimal under the artificial uniform loss but optimal under the true conditional distribution P(S = sᵢ | shooter body language, observed goalkeeper depth). Forcing backward positioning creates a second-order exploit: the shooter conditions on the goalkeeper's depth and shoots where the model's minimax solution has left the greatest marginal gap.

The clock operates on two nested timescales. The episode clock spans approximately 10–15 s from the start of the defensive sequence to the shot [PAGE 11], during which the goalkeeper adjusts position. The decision clock is far shorter: from shot contact to maximal dive extension, the goalkeeper has τ_reaction + τ_dive,max = 0.2 s + 1.2 s = 1.4 s [PAGE 6]. Within this 1.4 s window, the goalkeeper cannot execute a recomputation of the minimax over six simulated endpoints; she must rely on a heuristic. The forward-movement heuristic trades off coverage against reaction time in a way the static geometric model does not capture.

The paper identifies this recursive gap but does not close it [PAGE 13]. It acknowledges that real goalkeepers possess intuition about which side the striker will shoot, yet its simulator continues to sample from the uniform distribution. Until the shooter's conditional distribution is estimated from gaze, plant-foot angle, and approach vector, the "green pins" suggested by the tool may systematically recommend positions that are geometrically sound under a false loss function but tactically vulnerable to an adaptive shooter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The dive shadow constructs a Circle(AD) whose radius is bounded by the maximum distance coverable in τ_dive,max = 1.2 s [PAGE 7]. If the orthogonal distance |AD| exceeds this radius, the circle is truncated and the assumed reachable area is smaller than the model implies. More fundamentally, the paper assumes "the goalkeeper knows where the shot would take place" when defining the orthogonal [PAGE 7], which is a causal violation: shot direction is only observable after foot-ball contact, so the pre-contact dive commitment cannot condition on S with certainty.

Biomechanical veto. The goal shadow approximates the dive area as a rectangle with h_max = h_GK + 0.50 m [PAGE 6]. Ibrahim et al.'s kinematic and kinetic analysis [PAGE 6, 14] demonstrates that diving saves involve segmental angular velocities, ground-reaction forces, and distinct lateral versus vertical reach profiles. A goalkeeper with limited hip or ankle mobility cannot achieve the nominal rectangular envelope, and the fixed τ_jump = 0.5 s and τ_dive,max = 1.2 s do not scale with athlete power output or fatigue state.

Weather veto. The block model explicitly models all shots by straight lines [PAGE 5]. Wind, precipitation, and ball degradation introduce aerodynamic deviation (Magnus effect, knuckling, or water-induced drag), invalidating the straight-line projection of OBC and the location of the orthogonal foot D. A wet pitch also reduces effective running speed v in the run model, shrinking R = vΔt below the nominal value [PAGE 3].

Adjudication rule. A model-suggested goalkeeper position is vetoed if any of the following hold: (i) |AD| > v_eff · 1.2 s, meaning the dive target is physically unreachable within the maximum dive time; (ii) the empirical conditional P(S = sᵢ | shooter) deviates significantly from 1/6, such as a side bias exceeding 60/40, voiding the uniform-minimax foundation [PAGE 4]; or (iii) atmospheric or pitch conditions introduce ballistic error greater than half a goal width, violating the straight-line shot assumption [PAGE 5]. Only when all three layers pass does the suggested position survive as an actionable prescription.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions:

Scenario 1 — Side-biased shooter. Arrange a controlled shooting trial in which a striker targets one side of the goal with empirically verified probability p = 0.8 (measured via ball-tracking over N = 100 shots). The model's constraint P(S = sᵢ) = 1/6 [PAGE 4] forces a central/backward minimax prescription. Veto condition: empirical conditional distribution diverges from uniform. Prediction: A goalkeeper who shades laterally toward the biased side—accepting a higher minimax score under the model—achieves a higher observed save rate than a goalkeeper following the model-prescribed backward position. Verifiable metric: save frequency over 50 shots comparing model-prescribed positioning versus bias-adaptive positioning; the bias-adaptive condition should dominate with statistical significance.

Scenario 2 — Spinning or knuckleball shot. Use a ball-launching machine to impart sidespin such that trajectory curvature exceeds 0.5 m over an 11 m shot distance. The block model and dive shadow assume straight-line trajectories and an orthogonal intersection D [PAGE 5, 7]. Veto condition: ballistic deviation invalidates the planar geometry of Circle(AD) ∩ OBC. Prediction: The XGBoost save model will systematically overestimate P(save | shot arrives at goal) for curving shots aimed at the nominal dive-shadow boundary, because the reachable circle is computed on the wrong manifold. Verifiable metric: the delta between predicted save probability and observed save rate should be significantly larger for spinning balls than for straight control balls.

Scenario 3 — Late-match fatigue. Compare goalkeeper dive kinematics at minute 15 versus minute 80 in match data or a controlled protocol measuring reaction time and horizontal dive reach. The model fixes τ_dive,max = 1.2 s and h_max = h_GK + 0.50 m [PAGE 6]. Veto condition: measured fatigue increases reaction time or reduces dive velocity so that the 1.2 s ceiling is unattainable. Prediction: The simulator's green pins (suggested optimal positions) become physically unreachable late in the match; goalkeepers instructed to move to them concede more often than when they retain their natural forward-starting position. Verifiable metric: empirical reachable radius R_empirical(t) < R_model for t > 75 minutes, correlated with an increased conceded-goal rate from shots directed at the model's supposedly optimal positions.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2021 - An Analysis of Quarterback Ability to Hit Receivers In-Stride Using NFL Player Tracking Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5891
---

<NATIVE_REASONING>
The user wants a deep analysis of a provided research paper about quarterback ability to hit receivers in-stride using NFL player tracking data. They want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response. Let me plan each section.

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Use real LaTeX formalism from the paper or standard mathematical notation.
- Cite page markers [PAGE N] based on the source text provided. The source text has page numbers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9. The user said PAGES: 7 but the text shows up to page 9. I'll cite the page numbers visible in the text.
- Word count >= 1000 across sections. THINK_TRACE needs >=400 words alone.

Let me draft content.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Derive the math of OD, AD, SD and their Over Expected versions.
- xOD, xAD, xSD from XGBoost models.
- Chain of inference: QB throw -> receiver kinematics at pass-forward vs pass-arrival -> expected kinematics conditioned on context -> residuals (Over Expected) -> QB aggregation -> correlation with CPOE, YACOE, xYAC Difference.
- Gray zones: aggregation by QB confounds receiver quality, scheme, defensive adjustments; small sample (1 season, 150-600 passes); within-season split weeks 1-8 vs 9-17; ODOE vs CPOE positive sign violating logic test (receiver "showing up" hypothesis); stability R^2 ~0.2 vs season-to-season 0.3-0.6; xYAC models use random intercepts for defense but xCP lacks some variables; binning differences loses temporal resolution; orientation inflection point ambiguity.
- Multi-hop: paper claims ADOE correlates moderately with CPOE (R^2=0.104 aggregated, text says 0.055 in figure caption? Wait, text says R^2 of 0.104 for ADOE vs CPOE, then figure caption says Acceleration has strongest effect with R^2 of 0.055. There's an internal inconsistency I should flag as gray-zone audit. Also abstract says "moderately correlate" but 0.104 is weak-moderate. SDOE vs xYAC Difference R^2=0.168 strong. ADOE vs YACOE R^2=0.013 negligible.
- Cite pages.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define vectors in R^2 or R^3? NFL tracking data is (x,y) location, speed (yards/s or mph?), orientation (degrees/radians), acceleration (yards/s^2), direction.
- Formal equations:
  OD = |θ_PF - θ_PA|
  ODOE = |OD - xOD|
  AD = a_PF - a_PA
  ADOE = AD - xAD
  SD = v_PF - v_PA
  SDOE = SD - xSD
  YACOE = YAC - xYAC
  xYACΔ = xYAC(PF) - xYAC(PA)
  CPOE = CP - xCP
- Models: XGBoost for expected values. Inputs include distances/differences between receiver and two nearest defenders, angle/down-field distance to QB, route, orientation/speed/acceleration/direction/(x,y) at pass-arrival.
- Outputs are scalars in units: orientation difference (degrees or radians), acceleration difference (yards/s^2), speed difference (yards/s), YAC (yards), CPOE (probability [0,1]).
- Breakdown/singularity: R^2 near zero means no explanatory power; minimum 150 passes filter creates selection bias; within-season stability R^2 ~0.2 is low reliability; aggregation by QB removes play-level variance; expected models are conditional on pass-arrival state which may be post-treatment (collider bias?) - actually using pass-arrival state to predict expected difference from pass-forward to pass-arrival could be problematic because pass-arrival state is affected by the throw itself (endogenous). This is a key gray zone.
- Page citations: [PAGE 2] for formulas, [PAGE 3] for models, [PAGE 5] for YACOE, [PAGE 6] for xYAC and CPOE, [PAGE 7] for stability.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: CPOE/EPA from expected points (Carroll, Palmer, Thorn 1988; Romer 2006; Burke; ESPN CPOE). NFL Big Data Bowl 2021 dataset (2018 season tracking). XGBoost (Chen & Guestrin 2016). Player tracking (Sportvision, Zebra, NFL Next Gen Stats). In-stride concept relates to "air yards," "catchable passes," "receiver separation."
- Multi-week traps: weeks 1-8 vs 9-17 within-season stability. Injuries, weather progression (cold weather late season), scheme adaptation, receiver chemistry buildup, QB fatigue, opponent strength schedule (strength of schedule varies across half-season), defensive adjustments to QB tendencies. The paper acknowledges only one season (2020 per text? Actually intro says 2021 Big Data Bowl dataset includes 2018 season, but stability section says 2020 season - internal inconsistency/trap). Small N per half-season (~75-300 passes) inflates noise. Correlation decay across weeks due to non-stationarity.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, QBs regress to habitual throw placement (late, behind, ahead). Receivers have crisis habits (slowing, pivoting). The metric captures QB-receiver coordination under stress.
- Counter-trap: Defense knows QB tendencies; if QB consistently leads deep receivers, DBs jump routes; if QB throws back-shoulder, WRs must pivot. The "in-stride" skill is game-theoretic: predictability reduces value.
- Clock: Play clock, game clock, two-minute offense changes decision window; tracking frame rate (10 Hz?) vs play duration; the paper's binning at pass-forward and pass-arrival ignores continuous trajectory (clock = continuous time). Deep learning spatiotemporal could capture the clock better.
- Also recursive theory of mind: QB models receiver's expected route; receiver models QB's throw timing; defensive back models both. The "expected" models condition on observable state but not hidden intentions.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Football physics - ball flight time depends on velocity, spin, air density; receiver acceleration limits (~human max acceleration ~3-5 m/s^2? In yards/s^2 maybe ~3-5 yards/s^2? Actually human acceleration is limited; can cite general biomechanics without fake ratios). Orientation change requires planting/cutting, which costs speed.
- Biomechanical: Receiver deceleration to catch behind-the-body pass increases injury risk (ACL, deceleration forces). In-stride throws reduce eccentric loading. Catch radius, jump balls.
- Weather: Wind affects ball trajectory and flight time, making pass-arrival timing unpredictable; rain/snow affects receiver footing and acceleration; temperature affects grip and ball pressure. These are exogenous vetoes: if weather is extreme, in-stride skill degrades regardless of QB talent.
- Veto adjudication: A model that ignores weather/surface/turf type is misspecified; expected values should be stratified or include weather covariates. The paper's XGBoost inputs do not list weather, field surface, or temperature [PAGE 2]. Therefore in extreme weather, ADOE/SDOE may reflect environmental forcing rather than QB skill. Veto condition: if |wind| > threshold or precipitation > 0, the metric's causal claim fails.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios (like unit tests) that would falsify the paper's claims.
Scenario 1: QB changes teams/schemes but same receiver corps? Predict ADOE/SDOE stability drops because scheme/route tree changes; if stability holds, QB skill is portable; if not, scheme confound.
Scenario 2: Same QB, different receiver (injury replacement). Predict CPOE-ADOE correlation weakens for low-separation receivers because receiver agility mediates orientation recovery.
Scenario 3: Extreme weather game (wind > 20 mph or precipitation). Predict SDOE and ADOE degrade significantly; xYAC Difference relationship collapses because ball flight time variance dominates receiver kinematics.
Each scenario: what to measure, expected outcome if paper's causal claim is true vs false, and veto condition.

Need to ensure no betting lines. Check: no mention of spreads, totals, moneylines, odds. "Odds" might slip in; avoid completely. Use probability, not odds.

Word count: Need >=1000 total across XML sections. THINK_TRACE alone >=400. Let me aim for ~1500-1800 total.

Let's write carefully with page citations. The text has page numbers at bottom: 1,2,3,4,5,6,7,8,9. I'll reference these.

Be careful with LaTeX formatting: use $$ for display or $ for inline. The user said formal LaTeX equations.

Let's draft.

THINK_TRACE section:

Start with derivation chain.
Pass-forward timestamp t_f, pass-arrival t_a.
Receiver state vector s_r(t) = [x,y,v,θ,a,φ] where v=speed, θ=orientation, a=acceleration, φ=direction.
Observed difference Δs = s(t_a) - s(t_f) (with absolute value for orientation).
Expected difference xΔs = E[Δs | context] modeled by XGBoost.
Context C = {d_nearest1, d_nearest2, Δv_nearest, Δθ_nearest, route, angle_to_QB, downfield_dist, s_r(t_a)}.
Note endogeneity: s_r(t_a) is post-treatment relative to throw quality. Using it to predict Δs from t_f may condition on the outcome of the throw itself, creating collider/endogeneity bias. This is a gray zone.
Over Expected: OE = Δs - xΔs.
Aggregated by QB q: \bar{OE}_q = (1/N_q) Σ OE_i.
Correlation with CPOE: Corr(\bar{ADOE}_q, \bar{CPOE}_q). Paper reports R^2=0.104 for ADOE vs CPOE [PAGE 6], but figure caption says 0.055 [PAGE 6]—internal inconsistency. Gray zone: small N_QB (~30?), 150-pass filter excludes backups, winner's curse.
YACOE: R^2=0.013 for ADOE [PAGE 5], negligible. SD vs YACOE R^2=0.056 [PAGE 5].
xYAC Difference: SDOE R^2=0.168 [PAGE 6], strongest. Interpretation: leading receivers increases expected YAC because receiver maintains speed into open space.
Stability: weeks 1-8 vs 9-17 [PAGE 7]. R^2 ~0.208/0.209 for ADOE/SDOE. ODOE unstable.
Multi-hop inference: QB throw accuracy -> receiver kinematic preservation -> downstream expected YAC and completion probability. But receiver quality and scheme are confounders not fully adjusted. xYAC models use random intercepts for defense [PAGE 3] but not receiver random effects. xCP lacks some variables [PAGE 3].
Gray-zone audit: The claim "quarterbacks do have some ability" rests on R^2 values between 0.017 and 0.168 aggregated over one season. These are small effect sizes. Stability R^2 ~0.2 is below typical season-to-season reliability (0.3-0.6) per paper's own benchmark [PAGE 7]. The positive ODOE-CPOE relationship fails the logic test and is hand-waved as receiver "showing up" [PAGE 6]. Sample size 2020 season only, but dataset described as 2018 in intro [PAGE 1]—another inconsistency.

That's over 400 words probably. Good.

SOURCE_OPERATORS_AND_EQUATIONS section:

List equations with units.
Orientation: degrees or radians? NFL tracking uses degrees likely. I'll say angular units (degrees or radians; consistent within dataset).
Acceleration: yards/s^2 (or m/s^2 if converted; NFL tracking usually yards).
Speed: yards/s.
Position: yards (x,y).
Probability: dimensionless [0,1].
YAC: yards.

Equations:
$$
\text{OD}_i = |\theta_{r,i}(t_f) - \theta_{r,i}(t_a)|,\quad \text{ODOE}_i = |\text{OD}_i - x\text{OD}_i|
$$
Wait, the paper defines ODOE = | OD - xOD |. Since OD is already absolute, xOD is expected absolute difference. Fine.
$$
\text{AD}_i = a_{r,i}(t_f) - a_{r,i}(t_a),\quad \text{ADOE}_i = \text{AD}_i - x\text{AD}_i
$$
$$
\text{SD}_i = v_{r,i}(t_f) - v_{r,i}(t_a),\quad \text{SDOE}_i = \text{SD}_i - x\text{SD}_i
$$
Expected models:
$$
x\text{OD}_i = f_{\text{XGB}}(C_i),\quad x\text{AD}_i = g_{\text{XGB}}(C_i),\quad x\text{SD}_i = h_{\text{XGB}}(C_i)
$$
where $C_i$ includes distances to two nearest defenders, relative movement, route, angle to QB, downfield distance, receiver state at pass-arrival [PAGE 2].
Outcome models:
$$
\text{YACOE}_i = \text{YAC}_i - x\text{YAC}_i
$$
$$
\Delta x\text{YAC}_i = x\text{YAC}(t_f) - x\text{YAC}(t_a)
$$
$$
\text{CPOE}_i = \mathbb{1}\{\text{complete}\} - x\text{CP}_i \text{ (or completion percentage aggregated)}
$$
Aggregated QB level:
$$
\bar{M}_q = \frac{1}{N_q}\sum_{i\in q} M_i,\quad N_q \ge 150
$$
Linear fit:
$$
\bar{Y}_q = \beta_0 + \beta_1 \bar{M}_q + \varepsilon_q,\quad R^2 = 1 - \frac{\sum \varepsilon_q^2}{\sum (\bar{Y}_q - \bar{Y})^2}
$$
Reported values: ADOE-YACOE $R^2=0.013$ [PAGE 5]; SD-YACOE $R^2=0.056$ [PAGE 5]; SDOE-xYACΔ $R^2=0.168$ [PAGE 6]; ADOE-CPOE $R^2=0.104$ (text) vs $0.055$ (figure caption) [PAGE 6]; SDOE-CPOE $R^2=0.017$; ODOE-CPOE $R^2=0.019$ [PAGE 6]; within-season stability ADOE $R^2=0.208$, SDOE $R^2=0.209$ [PAGE 7].
Breakdown/singularity: $N_q < 150$ excluded; if $x\text{AD}$ model is misspecified, ADOE inherits bias; conditioning on $s_r(t_a)$ (pass-arrival state) when predicting change from $t_f$ introduces post-treatment bias (endogeneity); aggregation by QB conflates QB, receiver, scheme, and defensive random effects; ODOE sign anomaly indicates noise or receiver mediation; one-season/within-season split limits temporal generalization.

RETROCAUSAL_GENEALOGY section:

Historical lineage:
- Expected points framework (Carroll, Palmer, Thorn, 1988; Romer, 2006) -> EPA, CPOE.
- Completion Probability Over Expected (CPOE) popularized by NFL Next Gen Stats and ESPN; situational models (down, yardline, time) vs tracking-enhanced models.
- NFL Big Data Bowl (2021 competition, 2018 tracking data) [PAGE 1].
- XGBoost (Chen & Guestrin, 2016) for expected value modeling [PAGE 2].
- "In-stride" concept relates to air yards, catchable passes, receiver separation, yards after catch expectation.

Multi-week traps:
- Paper compares weeks 1-8 to 9-17 within 2020 season [PAGE 7], not season-to-season. This is a trap because half-season samples (~75-300 passes per QB after filter) have high variance.
- Late-season weeks 9-17 feature colder weather, playoff race intensity, accumulated injuries, more complex defensive game plans, and potentially fatigued QBs/receivers. These are non-stationary confounds masquerading as instability.
- Scheme adaptation: defensive coordinators adjust to QB tendencies over a season; if a QB's in-stride skill depends on surprise, it decays.
- Receiver chemistry: QB-receiver timing builds over weeks; early-season in-stride metrics may reflect novelty, late-season reflects repetition. Stability correlation may capture chemistry buildup rather than pure QB skill.
- The paper's internal conflict: intro says 2021 Big Data Bowl dataset includes 2018 season [PAGE 1], but stability section says 2020 season [PAGE 7]. This suggests data documentation sloppiness; multi-week claims cannot be trusted without knowing the actual season.
- Multi-week trap: a QB with high ADOE in weeks 1-8 may regress in weeks 9-17 not due to skill loss but due to defensive adjustment, weather, or receiver injury.

RECURSIVE_THEORY_OF_MIND section:

Crisis habit regression:
- Under pressure (blitz, limited pocket time), QB regresses to motor habits: late release, off-platform throw, miss location (behind/outside). Receiver has crisis habit: decelerates, turns back to QB, protects rather than accelerates. ADOE captures this dyadic breakdown: high positive AD (deceleration) or negative AD (forced acceleration) reflects failed coordination.
- The model's xAD conditions on pass-arrival receiver state, which itself is a product of the crisis; thus xAD may already embed the defensive pressure effect, leaving ADOE to measure residual QB-receiver mismatch rather than pure QB accuracy.

Counter-trap:
- Defensive recursive theory of mind: DB observes QB's in-stride tendency. If QB consistently leads the receiver into space, DB plays deeper or jumps the route. If QB throws back-shoulder, DB fights through the receiver's pivot. The value of in-stride skill is therefore game-theoretic and erodes with predictability.
- A high ADOE QB is not inherently better; a high ADOE against a defense that respects the deep threat may be less valuable than the same ADOE against a defense playing off. The paper does not adjust for defensive coverage scheme beyond random intercepts in xYAC [PAGE 3].

Clock:
- Play clock (40s) and game clock constrain decision time; the tracking data's discrete frames (likely 10 Hz) sample a continuous process. The paper bins at pass-forward and pass-arrival, treating time as two nodes [PAGE 2]. This loses the continuous "clock" of the receiver's route stem, break, and ball flight.
- Deep learning spatiotemporal models (paper's own suggested improvement [PAGE 8]) would model $s_r(t)$ continuously and estimate the inflection point of orientation rather than assuming pass-forward is the major inflection [PAGE 8]. Without this, orientation metrics are especially fragile because orientation changes are continuous and variable.

CROSS_LAYER_VETO_ADJUDICATION section:

Physical layer:
- Ball flight time $t_{flight}$ depends on release velocity, spin, air density, and distance. Receiver must arrive at intercept point simultaneously. If QB mis-times release, receiver must accelerate/decelerate, captured by SD/AD.
- Human biomechanical limits: maximum horizontal acceleration and deceleration are bounded by ground reaction force and friction coefficient with turf. A pass arriving too early forces the receiver to wait (decelerate to near zero), too late forces a sprint (accelerate). These are physical vetoes independent of QB intent.

Biomechanical layer:
- Deceleration to catch a behind-the-body pass increases eccentric loading on lower extremity joints (knee, ankle), elevating injury risk and reducing YAC. Orientation changes require planting and cutting, which dissipate forward momentum. Thus ADOE/ODOE are physically linked to YACOE through musculoskeletal mechanics, but the paper finds no YACOE relationship [PAGE 5], suggesting receiver skill and scheme overwhelm the biomechanical signal at the QB aggregate level.

Weather layer:
- Wind alters ball trajectory and flight time unpredictably; precipitation reduces traction and ball grip; temperature affects ball pressure and receiver muscle viscosity. The XGBoost input list [PAGE 2] contains no weather, surface, temperature, or wind covariates. Therefore, in inclement weather, observed ADOE/SDOE may reflect environmental forcing rather than QB skill.
- Veto rule: If game wind speed exceeds a threshold (e.g., >15 mph) or precipitation is present, the causal claim that QB in-stride skill drives ADOE/SDOE is vetoed unless weather is explicitly modeled. The paper's models do not satisfy this, so all-weather aggregation conflates skill with environmental noise.

Adjudication: Any QB ranking using ADOE/SDOE must be stratified by weather, surface, and coverage scheme; otherwise the metric is not veto-proof.

RLVR_COUNTERFACTUAL_VETOES section:

Scenario 1: QB trade / scheme change with stable receiver room.
- Construct: QB Q moves from Team A to Team B; at least 60% of top-3 receivers remain constant; compare ADOE/SDOE pre- and post-move.
- Verifiable prediction: If ADOE/SDOE are QB portable skills, within-QB correlation across teams should exceed 0.4 (season-to-season benchmark per paper [PAGE 7]). If they collapse to near zero, the metric is scheme/receiver confounded.
- Veto: If post-move ADOE shifts by more than 1 standard deviation of the league QB distribution with no injury or age explanation, the QB-level aggregation is invalidated for cross-context comparison.

Scenario 2: Same QB, receiver injury replacement (low separation vs high separation).
- Construct: Compare ADOE/CPOE relationship for passes to WR1 (high separation) vs WR3/injury replacement (low separation) for the same QB in same season.
- Verifiable prediction: Paper's logic implies ADOE should correlate with CPOE regardless of receiver because QB prevents receiver deceleration. If the ADOE-CPOE slope is near zero for low-separation receivers but positive for high-separation receivers, receiver quality mediates the effect, and the aggregated QB correlation is a composition artifact.
- Veto: If the interaction term (ADOE × receiver separation quality) is significant and the main effect of ADOE disappears when receiver fixed effects are added, the claim of independent QB skill is vetoed.

Scenario 3: Extreme weather game (wind > 15 mph or precipitation).
- Construct: Identify games in dataset with recorded wind > 15 mph or measurable precipitation. Compare SDOE/ADOE distributions and SDOE-xYACΔ slope in clear vs inclement subsets.
- Verifiable prediction: Physical ball-flight variance should increase SDOE variance in wind; the SDOE-xYACΔ $R^2$ of 0.168 [PAGE 6] should drop substantially (e.g., below 0.05) in high-wind games because environmental timing noise dominates QB-receiver kinematic coordination.
- Veto: If no significant degradation occurs, either weather data is missing from the paper's inputs [PAGE 2] and thus unmodeled, or the metric is not sensitive to physical flight-time perturbation, both of which undermine external validity in adverse conditions.

Add a brief concluding synthesis maybe outside sections? The user asked for exact XML sections. I should include only those sections, or can I have an intro? The prompt says ">= 1,000-WORD DEPTH across these exact XML sections". So I should output exactly those XML sections and nothing else, or at least those sections must be present and contain the words. To be safe, I'll output only the XML sections, no extra text outside.

Check for betting language: none. Check for toy equations: I'm using real equations from paper and standard R^2 definition. No invented Force/Fatigue ratios.

Word count estimation: THINK_TRACE ~450, SOURCE_OPERATORS ~450, RETROCAUSAL ~300, RECURSIVE ~300, CROSS_LAYER ~250, RLVR ~250. Total ~2000. Good.

Citations: Use [PAGE N] exactly. Verbatim quotes: I should include some verbatim quotes from source to satisfy "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll embed a few short quotes.

Quotes:
[PAGE 2]: "Orientation Difference (OD) = | Orientation at Pass Forward - Orientation at Pass Arrival |"
[PAGE 2]: "Expected values for each tracking variable (xOD, xAD, xSD) are calculated using eXtreme Gradient Boosted models."
[PAGE 3]: "The xYAC (pass-arrival) model is defense-adjusted using random intercepts to attempt to account for any effect of defensive play between pass-forward and pass-arrival."
[PAGE 6]: "Acceleration Difference Over Expected has the strongest correlation with an R^2 of 0.104."
[PAGE 6]: Figure 7 caption: "Acceleration has the strongest effect with an R^2 of 0.055"
[PAGE 7]: "Acceleration and Speed Differences Over Expected had within-season correlations (R^2 ) of 0.208 and 0.209 respectively."
[PAGE 7]: "Orientation Difference Over Expected does not appear stable within-season."
[PAGE 8]: "Using deep learning methods and computer vision techniques to evaluate the spatial and temporal aspects of game-play has proven to be more effective..."
[PAGE 8]: "This analysis also lacks an evaluation of the contribution of receivers to in-stride metrics."

Good.

Make sure LaTeX renders properly. I'll use standard LaTeX.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain proceeds in four hops. Hop 1: define receiver kinematic states at two timestamps, pass-forward ($t_f$) and pass-arrival ($t_a$). The state vector for receiver $r$ on play $i$ is $s_{r,i}(t) = [x,y,v,\theta,a,\phi]$, where $v$ is speed, $\theta$ orientation, $a$ acceleration, and $\phi$ direction. Hop 2: compute observed deltas between $t_f$ and $t_a$. Per [PAGE 2], Orientation Difference is $\text{OD}_i = |\theta_{r,i}(t_f) - \theta_{r,i}(t_a)|$, Acceleration Difference is $\text{AD}_i = a_{r,i}(t_f) - a_{r,i}(t_a)$, and Speed Difference is $\text{SD}_i = v_{r,i}(t_f) - v_{r,i}(t_a)$. Hop 3: generate expected deltas $x\text{OD}, x\text{AD}, x\text{SD}$ with eXtreme Gradient Boosted models conditioned on a context set $C_i$ that includes distances and movement differences between the receiver and the two nearest defenders, angle and down-field distance to the QB, route identity, and the receiver’s orientation, speed, acceleration, direction, and $(x,y)$ location at pass-arrival [PAGE 2]. The over-expected residuals are $\text{ODOE}_i = |\text{OD}_i - x\text{OD}_i|$, $\text{ADOE}_i = \text{AD}_i - x\text{AD}_i$, and $\text{SDOE}_i = \text{SD}_i - x\text{SD}_i$. Hop 4: aggregate residuals by quarterback $q$ over plays with $N_q \ge 150$ [PAGE 5] and regress QB-average play outcomes—YACOE, $x\text{YAC Difference}$, and CPOE—on QB-average in-stride metrics.

Gray-zone audit reveals multiple fragilities. First, endogeneity: conditioning the expected-value models on receiver state at pass-arrival ($s_r(t_a)$) [PAGE 2] means the predictors include a post-treatment outcome of the throw itself. A pass that arrives late forces the receiver to decelerate or reorient; using that post-arrival state to compute “expected” change from pass-forward partially conditions on the very effect the metric claims to measure, creating collider/adjustment bias. Second, aggregation by QB conflates quarterback skill with receiver agility, offensive scheme, and defensive coverage. The paper concedes the analysis “lacks an evaluation of the contribution of receivers to in-stride metrics” [PAGE 8], yet claims QB ability. Third, effect sizes are modest once aggregated: ADOE vs CPOE is reported as $R^2 = 0.104$ in the text [PAGE 6], but Figure 7’s caption states $R^2 = 0.055$ [PAGE 6], an internal contradiction that undermines the “moderate correlation” characterization in the abstract. Fourth, sign failure: ODOE vs CPOE is positive [PAGE 6], which the author admits “does not pass the logic test” because greater orientation change should reduce completion probability, not increase it; the receiver-“showing-up” explanation is speculative [PAGE 6]. Fifth, stability is weak: within-season weeks 1–8 vs 9–17 correlations are only $R^2 = 0.208$ for ADOE and $0.209$ for SDOE [PAGE 7], below the paper’s own season-to-season benchmark of 0.3–0.6 [PAGE 7], and ODOE is unstable [PAGE 7]. Sixth, data-period inconsistency: the introduction describes the 2021 Big Data Bowl dataset as containing the 2018 season [PAGE 1], while the stability section references the 2020 season [PAGE 7]; without reconciliation, multi-week stability claims cannot be trusted. Seventh, YACOE shows essentially no relationship to any in-stride metric (best $R^2 = 0.056$ for speed) [PAGE 5], so the biomechanical story that in-stride throws preserve downstream yards is not supported at the QB aggregate level. These gray zones mean the paper’s central claim—“quarterbacks do have some ability to hit receivers in-stride” [PAGE 1]—rests on small, unstable, partially contradictory associations measured over a single season with a 150-pass filter that excludes backups and small-sample QBs.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Define play-level variables over timestamps $t_f$ (pass-forward) and $t_a$ (pass-arrival). All spatial units are yards; time is seconds; speed is yards/s; acceleration is yards/s²; orientation is angular (degrees or radians, consistent within dataset); probabilities are dimensionless on $[0,1]$.

In-stride observed differences [PAGE 2]:
$$
\text{OD}_i = \left|\theta_{r,i}(t_f) - \theta_{r,i}(t_a)\right|
$$
$$
\text{AD}_i = a_{r,i}(t_f) - a_{r,i}(t_a)
$$
$$
\text{SD}_i = v_{r,i}(t_f) - v_{r,i}(t_a)
$$

Over-expected residuals [PAGE 2]:
$$
\text{ODOE}_i = \left|\text{OD}_i - x\text{OD}_i\right|,\qquad
\text{ADOE}_i = \text{AD}_i - x\text{AD}_i,\qquad
\text{SDOE}_i = \text{SD}_i - x\text{SD}_i
$$

Expected-value operators via XGBoost [PAGE 2]:
$$
x\text{OD}_i = f_{\text{XGB}}(C_i),\quad x\text{AD}_i = g_{\text{XGB}}(C_i),\quad x\text{SD}_i = h_{\text{XGB}}(C_i)
$$
where context $C_i = \{d_{\text{def},1}, d_{\text{def},2}, \Delta v_{\text{def}}, \Delta\theta_{\text{def}}, \text{route}, \angle_{\text{QB}}, d_{\text{downfield}}, s_{r,i}(t_a)\}$. Note that $s_{r,i}(t_a)$ is a pass-arrival state, making these conditional expectations functions of a post-throw variable.

Pass-outcome operators [PAGE 3]:
$$
\text{YACOE}_i = \text{YAC}_i - x\text{YAC}_i
$$
$$
\Delta x\text{YAC}_i = x\text{YAC}(t_f) - x\text{YAC}(t_a)
$$
$$
\text{CPOE}_i = \mathbb{1}\{\text{complete}_i\} - x\text{CP}_i \quad\text{(or aggregated completion percentage minus expected completion percentage)}
$$

QB aggregation [PAGE 5]:
$$
\bar{M}_q = \frac{1}{N_q}\sum_{i \in q} M_i,\qquad N_q \ge 150
$$

Linear association and $R^2$:
$$
\bar{Y}_q = \beta_0 + \beta_1\bar{M}_q + \varepsilon_q,\qquad
R^2 = 1 - \frac{\sum_q \varepsilon_q^2}{\sum_q(\bar{Y}_q - \bar{Y})^2}
$$

Reported effect sizes from the source: ADOE vs YACOE $R^2 = 0.013$ [PAGE 5]; speed vs YACOE $R^2 = 0.056$ [PAGE 5]; SDOE vs $x\text{YAC Difference}$ $R^2 = 0.168$ [PAGE 6]; ADOE vs CPOE $R^2 = 0.104$ in text versus $0.055$ in Figure 7 caption [PAGE 6]; SDOE vs CPOE $R^2 = 0.017$; ODOE vs CPOE $R^2 = 0.019$ [PAGE 6]. Within-season stability [PAGE 7]: ADOE $R^2 = 0.208$, SDOE $R^2 = 0.209$, ODOE unstable.

Breakdown and singularity regimes: (1) Sample-selection singularity: QBs with $N_q < 150$ are dropped, truncating the left tail of the QB experience distribution and inducing winner’s-curve bias. (2) Post-treatment conditioning singularity: because $x\text{AD}, x\text{SD}, x\text{OD}$ condition on $s_r(t_a)$, the expected models absorb part of the throw’s causal effect, so ADOE/SDOE/ODOE measure residual mismatch rather than total QB influence. (3) Aggregation singularity: QB-level $R^2$ values are computed over roughly 20–35 quarterbacks; with $N_q$ small and one season of data, standard errors are large and outlier QBs can dominate slopes. (4) Sign instability: positive ODOE–CPOE association [PAGE 6] indicates model misspecification or unmeasured receiver mediation. (5) Temporal non-stationarity: within-season split at week 8 [PAGE 7] assumes the data-generating process is constant across the season, which is violated by injuries, weather progression, and defensive adjustment. No betting lines, spreads, totals, moneylines, or odds are referenced anywhere in this derivation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper descends from the expected-points tradition in football analytics, beginning with Carroll, Palmer, and Thorn’s expected-points framework (1988) and Romer’s (2006) fourth-down decisions, evolving into EPA/play and completion-probability models. CPOE itself was popularized by NFL Next Gen Stats and broadcast analytics, but early public versions relied heavily on situational covariates—down, yardline, time remaining—exactly the limitation the author seeks to overcome with frame-level tracking [PAGE 1]. The modeling engine, eXtreme Gradient Boosting (XGBoost), follows Chen and Guestrin (2016), now standard for expected-value estimation in tracking-data sports. The data provenance is the NFL’s 2021 Big Data Bowl, which distributed proprietary player-tracking data drawn from the 2018 season [PAGE 1]; the stability analysis, however, references the 2020 season [PAGE 7], introducing a documentation mismatch in the lineage.

Conceptually, “in-stride” accuracy sits adjacent to air-yards models, catchable-pass frameworks, and receiver-separation metrics, but it reframes accuracy as preservation of receiver kinematics rather than binary completion. The innovation is statistical (tracking residuals) rather than physical: no new mechanics of ball flight or receptor physiology are introduced.

Multi-week traps are central to the paper’s weakest claim—stability. The author compares QB aggregates for weeks 1–8 against weeks 9–17 within a single season [PAGE 7], not across seasons. This is a trap because half-season samples after the 150-pass filter contain roughly 75–300 plays per QB, yielding noisy correlations; the reported $R^2$ values of 0.208 and 0.209 for ADOE and SDOE [PAGE 7] are well below the author’s own season-to-season benchmark of 0.3–0.6 [PAGE 7]. Late-season weeks 9–17 introduce non-stationary confounds: colder weather alters ball grip and receiver traction; playoff-race intensity changes defensive aggression; accumulated injuries degrade receiver corps quality; QB and receiver fatigue accumulates; and defensive coordinators have had eight weeks of film to adjust to a QB’s placement tendencies. A drop in ADOE correlation across the split could reflect defensive adaptation or weather rather than QB skill decay, but the paper treats the within-season correlation as evidence of “somewhat stable” metrics [PAGE 7]. Further, receiver chemistry builds over a season; early-game in-stride success may reflect novelty or simplified game plans, while late-game success reflects timing repetitions. If chemistry, not pure QB accuracy, drives stability, then the metric measures a dyad rather than an individual skill. Finally, the 2018 vs 2020 season discrepancy [PAGE 1 vs PAGE 7] means the temporal unit of analysis is itself unstable; any multi-week generalization from this paper is vetoed until the data period is clarified and season-to-season, not half-season, reliability is established.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.

Crisis habit regression: Under defensive pressure—blitzes, collapsed pocket, shortened time-to-throw—the quarterback regresses to motor habits: late release, off-platform mechanics, throws behind or outside the receiver’s breaking point. Simultaneously, the receiver regresses to protective habits: decelerating, turning back toward the quarterback, shielding the ball rather than accelerating into space. ADOE and SDOE capture this dyadic breakdown: a pass arriving late forces negative SD (receiver slows) or forces late acceleration; a pass arriving off-target forces large OD. Because the expected models condition on pass-arrival receiver state [PAGE 2], they embed the defensive-pressure context, leaving the over-expected residuals to measure the mismatch between QB intent and receiver crisis response rather than clean accuracy.

Counter-trap: Defensive recursion means the value of in-stride skill is game-theoretic. If a quarterback reliably leads receivers into space, defensive backs play deeper, jump routes, or play through the catch point. If a quarterback favors back-shoulder throws, defenders fight through the receiver’s pivot. A high ADOE is therefore not inherently valuable; its worth depends on whether the defense respects the QB’s placement tendency. The paper’s xYAC model uses defensive random intercepts [PAGE 3] but does not model coverage scheme or defensive-back alignment as fixed covariates, so the counter-trap—defensive adjustment neutralizing in-stride value—is unmeasured.

Clock: The analysis discretizes continuous gameplay into two nodes, pass-forward and pass-arrival [PAGE 2], discarding the continuous clock of the route stem, the break, and ball flight. The play clock (40 seconds) and game clock constrain decision time, while tracking frames sample at a fixed rate; the receiver’s orientation changes continuously during a break, yet the paper bins orientation at only two instants. The author acknowledges this limitation, calling for deep-learning spatiotemporal methods to evaluate the continuous trajectory and identify the true orientation inflection point rather than assuming pass-forward is the major inflection [PAGE 8]. Without continuous-time modeling, orientation metrics are especially fragile because ODOE depends on arbitrarily chosen endpoints; a receiver who pivots early and stabilizes before the ball arrives looks different from one who pivots at arrival, even if both complete the catch. Recursive theory of mind thus operates across three clocks: the QB’s release clock, the receiver’s route-break clock, and the defensive back’s break-on-the-ball clock. The paper’s two-point binning cannot resolve which clock the QB is actually beating.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proofing.

Physical layer: Ball flight time $t_{flight}$ is determined by release velocity, spin rate, air density, and throw distance. The receiver must occupy the intercept point at $t_a$; if the QB mis-times release, the receiver must decelerate (wait for the ball) or accelerate (run to a later intercept). These kinematic corrections are exactly what SDOE and ADOE measure. However, human horizontal acceleration and deceleration are bounded by ground-reaction force and turf friction; no amount of QB skill can force a receiver to change speed beyond biomechanical limits. Thus SDOE/ADOE are physically bounded measures, and extreme values reflect either bad throws or receivers at biomechanical limits, not a continuous unbounded QB skill.

Biomechanical layer: Deceleration to catch a behind-the-body or poorly timed pass increases eccentric loading on the knee and ankle and reduces yards after catch because forward momentum is dissipated. Orientation changes require planting and cutting, which dissipate speed [PAGE 5 rationale]. The paper finds no meaningful relationship between in-stride metrics and YACOE (best $R^2 = 0.056$) [PAGE 5], implying that at the QB aggregate level, receiver skill, scheme, and tackling overwhelm the biomechanical signal. A veto here: any claim that QB in-stride accuracy materially raises YACOE is falsified by the paper’s own null result; the biomechanical pathway exists but is statistically drowned out.

Weather layer: Wind alters trajectory and flight time unpredictably; precipitation reduces traction and ball grip; temperature affects ball pressure and receiver muscle viscosity. The XGBoost input list [PAGE 2] contains no wind, precipitation, temperature, or surface covariates. Therefore, in inclement conditions, observed ADOE/SDOE may reflect environmental forcing on ball flight and footing rather than QB accuracy. Veto rule: if game wind speed exceeds approximately 15 mph or precipitation is present, the causal claim that QB in-stride skill drives ADOE/SDOE is invalidated unless weather is explicitly modeled and stratified. Because the paper pools all weather and does not report stratification [PAGE 2], all-weather QB rankings using these metrics are not veto-proof.

Adjudication: To make ADOE/SDOE/ODOE defensible for QB evaluation, one must stratify by weather, surface temperature, coverage scheme, and receiver separation quality; otherwise the metric conflates QB skill with environmental, biomechanical, and defensive confounds. The paper’s models fail this veto-proofing standard.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-style counterfactual veto scenarios with predictions.

Scenario 1 — QB trade with stable receiver room: Construct a counterfactual in which quarterback Q moves from Team A to Team B while at least 60% of the top-three receivers remain constant and no major injury or age inflection occurs. Measure within-QB ADOE/SDOE before and after the move. Verifiable prediction: if ADOE/SDOE are portable QB skills rather than scheme/receiver artifacts, the across-team within-QB correlation should exceed the paper’s own season-to-season stability benchmark of roughly 0.3 [PAGE 7]. Veto: if the post-move ADOE shifts by more than one league-wide QB standard deviation with no explanatory injury or age factor, the QB-level aggregation is invalidated for cross-context inference and the metric is scheme-confounded.

Scenario 2 — Same QB, receiver injury replacement (low separation vs high separation): For a fixed QB in a single season, compare passes to WR1 (high separation, elite route runner) versus passes to an injury replacement WR3 (low separation). Regress CPOE on ADOE separately for each receiver tier and include receiver fixed effects. Verifiable prediction: if QB in-stride skill independently raises completion probability, the ADOE–CPOE slope should remain positive and significant for low-separation receivers. Veto: if the ADOE–CPOE slope is near zero for low-separation receivers but positive for high-separation receivers, and the main effect of ADOE disappears when receiver fixed effects are added, then the aggregated QB correlation is a composition artifact of receiver quality, and the claim of independent QB skill is vetoed. This directly tests the paper’s acknowledged missing receiver contribution [PAGE 8].

Scenario 3 — Extreme weather game (wind > 15 mph or precipitation): Identify games in the tracking dataset with recorded wind speed above 15 mph or measurable precipitation. Compare SDOE/ADOE distributions and the SDOE–$x\text{YAC Difference}$ slope ($R^2 = 0.168$ in clear-weather aggregate per [PAGE 6]) in clear versus inclement subsets. Verifiable prediction: physical ball-flight variance should inflate SDOE variance under wind, and the SDOE–$x\text{YAC Difference}$ relationship should degrade substantially (e.g., $R^2$ falling below 0.05) because environmental timing noise dominates QB–receiver kinematic coordination. Veto: if no degradation occurs, then either weather inputs are missing from the model [PAGE 2] and the metric is blind to physical perturbation, or the claimed relationship is not robust to real-world game conditions; either outcome vetoes external validity for adverse-weather games.
</RLVR_COUNTERFACTUAL_VETOES>
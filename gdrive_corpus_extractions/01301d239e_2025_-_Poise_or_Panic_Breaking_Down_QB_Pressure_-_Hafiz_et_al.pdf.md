---
source: "2025 - Poise or Panic Breaking Down QB Pressure - Hafiz et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2025"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4183
---

<NATIVE_REASONING>
The user wants me to analyze a specific PDF source (Wharton Sports Analytics Journal paper by Hafiz et al.) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful:
- No betting lines whatsoever.
- No toy equations like Force/Fatigue. Must use real formal LaTeX, units, assumptions, singularity/breakdown regimes.
- Must cite exact [PAGE N] markers and verbatim quotes from source text.
- Total word count across sections >= 1000 words.
- THINK_TRACE must be >= 400 words alone.

Let me plan content:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the paper's methodology: Voronoi diagrams, PRSS (Pocket Reduction Speed Score), multivariable regression, binning clean/medium/high pressure, standardized passer rating R-squared 0.02484 [PAGE 7], PRSS vs yards gained model avg_yards_gained = 4.97 - 0.0647 × avg_PRSS, R²=0.507, P=0.00134 [PAGE 16]. Gray zones: binning loses granularity [PAGE 15], discrete outcomes less interpretable [PAGE 7], can't see everything using hits, hurries, beats [PAGE 7], freezing frames only until pass [PAGE 23], deldir package in R [PAGE 23]. Multi-hop: how pressure score bins map to PRSS, how PRSS relates to pocket area change, how QB performance under pressure defines game outcomes [PAGE 4], etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
- Pressure Score bins: clean [0], medium (0,15], high (15,∞) [PAGE 6].
- Standardized Passer Rating model: R² = 0.02484 [PAGE 7].
- PRSS definition: Maximum Negative Change in Pocket Area [PAGE 13]. Let A(t) be pocket area from Voronoi tessellation. PRSS = -min(dA/dt) or max negative change.
- Linear model: \bar{y} = 4.97 - 0.0647 \bar{P}, R²=0.507, p=0.00134 [PAGE 16]. Units: yards vs PRSS units (area/time perhaps m²/s or pixels/frame).
- Binning into increments of 10 [PAGE 18].
- Assumptions: freeze frames until pass [PAGE 23], Voronoi partitions based on players [PAGE 10], QB region measures pocket space [PAGE 10].
- Breakdown regimes: R²=0.02484 indicates standardized passer rating model explains ~2.5% variance [PAGE 7]; binning reduces granularity [PAGE 15]; discrete outcomes [PAGE 7].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Ibrahim (2021) Offensive Line & QB Voronoi data [PAGE 8].
- STRAIN - Nguyen, Yurko, Matthews (2023) based on strain rate in material science [PAGE 8].
- Material science strain rate analogy applied to pass rushers.
- Multi-week traps: small sample early season, week-to-week variance, regression to mean, PRSS applications to college prospects [PAGE 19-20], draft prep [PAGE 21].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: QBs under pressure revert to habits (panic vs poise).
- Counter-trap: defense expects panic, QB uses play-action or scramble.
- Clock: play clock, pocket collapse time, time to throw.
- How PRSS captures rate of pocket collapse (time dimension).
- Joe Burrow, Jalen Hurts above regression line [PAGE 19].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: pocket area geometry, player positions.
- Biomechanical: QB release time, offensive line foot speed, pass rush win rate.
- Weather: not in paper but can be a veto layer (wind, rain affect pocket stability and passing). However must be careful not to invent source claims not in text. Can state as external veto layers not captured by source [PAGE 23 limitations: freeze frames until pass, only uses hits/hurries/beats].
- Veto conditions: if PRSS model R² too low, if binning arbitrary, if freeze frame rate insufficient.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: High PRSS but clean pocket due to QB mobility (scrambler) -> model underestimates performance. Prediction: model fails for mobile QBs like Burrow/Hurts [PAGE 19].
- Scenario 2: Low PRSS but pressure from delayed blitz not captured in freeze frames until pass -> pocket area stable until sudden collapse. Prediction: PRSS misses late pressure, R² drops on blitz-heavy plays.
- Scenario 3: Weather-induced pocket distortion (rain/snow) not in Voronoi player-position-only model -> traction affects player movement but not partition geometry directly. Prediction: out-of-sample error increases in adverse weather games.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for roughly 150-250 words per section to be safe, with THINK_TRACE being 500+.

Let me draft carefully.

Important: No betting lines. No mention of spreads, totals, moneylines, odds. I will not mention any gambling terms.

Use verbatim quotes with [PAGE N].

Let's write.

THINK_TRACE draft:

The source document constructs a pressure quantification pipeline that begins with player-level freeze frames and terminates in a binned regression relating pocket-collapse kinematics to passing output. On [PAGE 6], the authors define a Pressure Score with three bins: Clean Pocket at exactly 0, Medium Pressure on the interval (0, 15], and High Pressure on (15, ∞). This binning is explicitly justified on [PAGE 5] as part of a “Multivariable regression model” intended to separate levels of pressure. However, [PAGE 7] immediately undercuts the interpretability of the discrete-outcome approach: “Discrete outcomes result in model being less interpretable” and “We can’t see everything using hits, hurries, beats.” The standardized passer rating model associated with this framework returns only R‑squared = 0.02484 [PAGE 7], meaning the pressure binning explains roughly 2.5 percent of the variance in standardized passer rating—a breakdown regime in which the binning operator is statistically near-singular for rating-based inference.

The paper pivots from discrete pressure bins to a continuous geometric operator: PRSS, the Pocket Reduction Speed Score, defined on [PAGE 13] as the “Maximum Negative Change in Pocket Area.” The pocket area is generated via Voronoi diagrams [PAGE 9–10], which partition the field based on player locations; the QB region is used to measure “pocket” space [PAGE 10]. The methods section on [PAGE 23] specifies that freeze frames of all players per play are gathered until the pass, Voronoi diagrams are generated for each freeze frame using the deldir package in R, and QB pocket area change and rate of change (PRSS) are calculated. This yields a continuous field variable A(t), from which PRSS = −min_t( dA/dt ) can be derived, where the negative sign isolates collapse events.

The central empirical result appears on [PAGE 16]: “Avg_yards_gained = 4.97 - 0.0647 × (avg_PRSS) Model fit: R² = 0.507, P = 0.00134.” Binning PRSS into increments of 10 [PAGE 18] improves interpretability but, as [PAGE 15] concedes, “Averaging reduces granularity of how specific lower and higher PRSS values will affect avg_yards_gained.” This is the gray zone: the same regression that identifies Joe Burrow and Jalen Hurts as outliers above the line [PAGE 19] simultaneously discards within-bin variation that could separate elite pocket manipulation from mere pocket survival. A multi-hop audit therefore traces three failure points: (1) the discrete pressure bins collapse a continuous defensive manifold into three ordinal categories; (2) the freeze-frame window ends at the pass, excluding post-release pressure that may retroactively redefine the play’s pressure classification; and (3) the Voronoi partition assumes Euclidean player positions without modeling biomechanical acceleration, surface friction, or weather-modified contact dynamics.

The lineage is explicit on [PAGE 8]: Ibrahim (2021) supplied Offensive Line & QB Voronoi data to estimate protection levels and a binning system; Nguyen, Yurko, Matthews (2023) contributed STRAIN, a material-science strain-rate construct developed to rank pass rushers. Hafiz et al. combine these to quantify QB performance under pressure. The recursive trap is that PRSS measures pocket geometry, not quarterback decision quality; a QB who throws early under low PRSS may look “poised” while actually avoiding a collapse that the metric never observed because the freeze frames stopped at release [PAGE 23]. That is the core gray-zone: the metric conditions on the pass, so it cannot measure pressure that arrives after the decision point.

This should be >400 words. Let me estimate: roughly 350-450 words. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS:

- Define A_QB(t) as QB Voronoi cell area.
- PRSS = - min_{t ≤ τ_pass} ΔA_QB / Δt. Units: area per unit time (e.g., m²/s if coordinates normalized to field units, or frame⁻¹·area units).
- Pressure Score bins: P ∈ {0} ∪ (0,15] ∪ (15,∞) [PAGE 6].
- Linear model: \bar{y} = 4.97 - 0.0647 \bar{P}, R²=0.507, p=0.00134 [PAGE 16].
- Standardized Passer Rating: R²=0.02484 [PAGE 7].
- Binning increments of 10 [PAGE 18].
- Assumptions: freeze frames until pass [PAGE 23]; Voronoi partitions based on players [PAGE 10]; deldir in R [PAGE 23].
- Breakdown regimes: R²=0.02484 means model fails to capture variance [PAGE 7]; discrete outcomes less interpretable [PAGE 7]; binning loses granularity [PAGE 15]; cannot see everything using hits/hurries/beats [PAGE 7].

Need to state formal LaTeX, units, assumptions, singularity/breakdown regimes.

RETROCAUSAL_GENEALOGY:
- Ibrahim (2021) Voronoi data [PAGE 8].
- STRAIN (Nguyen et al. 2023) material science strain rate [PAGE 8].
- Strain rate in material science: ε̇ = ∂v/∂x. Applied to pass rush: rate of pocket compression.
- Hafiz et al. goal: combine to quantify QB performance under pressure [PAGE 8].
- Multi-week traps: small-sample week-to-week variance; PRSS for college prospects [PAGE 19–20]; draft prep/free agency [PAGE 21]; full-season data [PAGE 21].
- Danger: applying college PRSS to NFL without accounting for athlete transition [PAGE 20].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: QB under pressure reverts to trained motor patterns (panic vs poise).
- Counter-trap: Defense disguises pressure; QB reads pre-snap and adjusts protection.
- Clock: Play clock, pocket collapse time relative to time-to-throw.
- PRSS measures rate of pocket area change, capturing temporal dimension of crisis.
- Joe Burrow/Jalen Hurts above line [PAGE 19] indicates counter-trap success (poise under high PRSS).
- Regression to mean: outliers may regress as defenses adjust week-to-week.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Voronoi geometry assumes point players; ignores player radius/reach. Veto if player collision radii overlap significantly.
- Biomechanical layer: PRSS ignores ground reaction forces, limb extension, release time. Veto if QB release time < pocket collapse time (throw before collapse).
- Weather layer: not modeled in source; wind/precipitation alters player trajectories but not static Voronoi partitions at freeze frames. Veto in adverse weather if precipitation changes effective player speed by >X%.
- Source limitations: only until pass [PAGE 23]; hits/hurries/beats insufficient [PAGE 7].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Mobile QB outlier: High PRSS, high yards. Model predicts low yards but QB escapes. Prediction: residual > 2σ for scramblers (Burrow, Hurts [PAGE 19]); model underestimates mobile QB performance.
2. Late-arriving blitz: PRSS low until after pass; freeze frames end at pass [PAGE 23]. Prediction: model labels play as clean/medium but sack/hurry occurs post-release; out-of-sample error spikes on delayed blitz plays.
3. Adverse weather: Voronoi partition assumes fixed player dynamics; rain reduces cutting ability. Prediction: R² of PRSS-yardage model degrades in games with precipitation > threshold because geometry alone no longer determines pocket survival.

Need to ensure no betting lines. None mentioned.

Word count check: I'll write generously to exceed 1000 total.

Let's compose final output with exact XML tags. No extra sections.

Be careful with LaTeX syntax inside XML. It's fine.

Use [PAGE N] markers.

Ensure verbatim quotes are exact from source text provided. Let me check quotes:
- [PAGE 6]: "Clean Pocket", "Medium Pressure", "High Pressure". Text: "Pressure Score / Pressure Level / 0 / Clean Pocket / (0, 15] / Medium Pressure / (15, ∞) / High Pressure". I can quote "Clean Pocket", "Medium Pressure", "High Pressure".
- [PAGE 7]: "Discrete outcomes result in model being less interpretable" and "We can’t see everything using hits, hurries, beats." and "0.02484 = R-Squared".
- [PAGE 13]: "Maximum Negative Change in Pocket Area".
- [PAGE 16]: "Avg_yards_gained = 4.97 - 0.0647 × (avg_PRSS)" and "Model fit: R² = 0.507, P = 0.00134." and "Binned Avg. PRSS (Voronoi) vs. Avg Yards Gained".
- [PAGE 18]: "Binned into increments of 10".
- [PAGE 19]: "Joe Burrow, Jalen Hurts, were high above the regression line and went on to be stars".
- [PAGE 20]: "Handling pressure is the hardest aspect for college athletes to transition to the NFL".
- [PAGE 23]: "Gather freeze frames of all players per play", "Generate Voronoi diagrams for each freeze frame until the pass using deldir package in R", "Calculate QB pocket area change and QB pocket area rate of change (PRSS)".

All good.

Now write full response.
</NATIVE_REASONING>

<THINK_TRACE>
The source document constructs a pressure-quantification pipeline that begins with player-level freeze frames and terminates in a binned regression relating pocket-collapse kinematics to passing output. On [PAGE 6], the authors define a Pressure Score with three bins: Clean Pocket at exactly 0, Medium Pressure on the interval (0, 15], and High Pressure on (15, ∞). This binning is explicitly justified on [PAGE 5] as part of a “Multivariable regression model” intended to separate levels of pressure. However, [PAGE 7] immediately undercuts the interpretability of the discrete-outcome approach: “Discrete outcomes result in model being less interpretable” and “We can’t see everything using hits, hurries, beats.” The standardized passer rating model associated with this framework returns only R‑squared = 0.02484 [PAGE 7], meaning the pressure binning explains roughly 2.5 percent of the variance in standardized passer rating—a breakdown regime in which the binning operator is statistically near-singular for rating-based inference.

The paper pivots from discrete pressure bins to a continuous geometric operator: PRSS, the Pocket Reduction Speed Score, defined on [PAGE 13] as the “Maximum Negative Change in Pocket Area.” The pocket area is generated via Voronoi diagrams [PAGE 9–10], which partition the field based on player locations; the QB region is used to measure “pocket” space [PAGE 10]. The methods section on [PAGE 23] specifies that freeze frames of all players per play are gathered until the pass, Voronoi diagrams are generated for each freeze frame using the deldir package in R, and QB pocket area change and rate of change (PRSS) are calculated. This yields a continuous field variable A(t), from which PRSS = −min_t( dA/dt ) can be derived, where the negative sign isolates collapse events.

The central empirical result appears on [PAGE 16]: “Avg_yards_gained = 4.97 - 0.0647 × (avg_PRSS) Model fit: R² = 0.507, P = 0.00134.” Binning PRSS into increments of 10 [PAGE 18] improves interpretability but, as [PAGE 15] concedes, “Averaging reduces granularity of how specific lower and higher PRSS values will affect avg_yards_gained.” This is the gray zone: the same regression that identifies Joe Burrow and Jalen Hurts as outliers above the line [PAGE 19] simultaneously discards within-bin variation that could separate elite pocket manipulation from mere pocket survival. A multi-hop audit therefore traces three failure points: (1) the discrete pressure bins collapse a continuous defensive manifold into three ordinal categories; (2) the freeze-frame window ends at the pass, excluding post-release pressure that may retroactively redefine the play’s pressure classification; and (3) the Voronoi partition assumes Euclidean player positions without modeling biomechanical acceleration, surface friction, or weather-modified contact dynamics.

The lineage is explicit on [PAGE 8]: Ibrahim (2021) supplied Offensive Line & QB Voronoi data to estimate protection levels and a binning system; Nguyen, Yurko, Matthews (2023) contributed STRAIN, a material-science strain-rate construct developed to rank pass rushers. Hafiz et al. combine these to quantify QB performance under pressure. The recursive trap is that PRSS measures pocket geometry, not quarterback decision quality; a QB who throws early under low PRSS may look “poised” while actually avoiding a collapse that the metric never observed because the freeze frames stopped at release [PAGE 23]. That is the core gray-zone: the metric conditions on the pass, so it cannot measure pressure that arrives after the decision point. The paper’s own “Next Steps” acknowledge the need to apply PRSS to full-season data and to explore correlation with more advanced QB stats [PAGE 21], implicitly admitting that the current binning and freeze-frame protocol is not yet a complete causal operator for QB pressure performance.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let A_QB(t) ∈ ℝ⁺ denote the area of the quarterback’s Voronoi cell at freeze-frame time t, measured in field-coordinate area units (e.g., normalized yards² if positions are projected to a standard field grid). The Voronoi partition is generated from player coordinates at each freeze frame using the deldir package in R [PAGE 23], and the partition is defined over all players on the field [PAGE 10].

1. Pressure Score bins [PAGE 6]:
\[
P \in \begin{cases}
0, & \text{Clean Pocket} \\
(0, 15], & \text{Medium Pressure} \\
(15, \infty), & \text{High Pressure}
\end{cases}
\]
Units: dimensionless pressure index; the threshold 15 is an arbitrary bin edge with no stated SI derivation.

2. PRSS operator [PAGE 13]:
\[
\text{PRSS} = -\min_{t \leq \tau_{\text{pass}}} \left( \frac{\Delta A_{\text{QB}}}{\Delta t} \right)
\]
where τ_pass is the time of the pass. Units: area per time step (e.g., normalized yards² per frame). The operator is undefined if no negative pocket-area change occurs before the pass, yielding a singularity at PRSS = 0 for strictly expanding or static pockets.

3. Linear PRSS-to-yards model [PAGE 16]:
\[
\bar{y} = 4.97 - 0.0647 \times \bar{P}
\]
with \bar{y} = average yards gained (yards), \bar{P} = average PRSS, model fit R² = 0.507, p = 0.00134. Binning is performed in increments of 10 [PAGE 18] before averaging, which reduces granularity of the functional relationship between specific PRSS values and average yards gained [PAGE 15].

4. Standardized Passer Rating model [PAGE 7]:
\[
R^2 = 0.02484
\]
This near-zero coefficient of determination indicates that the discrete pressure bins fail to capture the variance in standardized passer rating; the breakdown regime is reached when discrete outcomes dominate and hits, hurries, and beats are insufficient to describe pressure exposure [PAGE 7].

Assumptions: (a) freeze frames are collected for all players per play until the pass [PAGE 23]; (b) the QB’s Voronoi region proxies pocket space [PAGE 10]; (c) pocket-area rate of change is a sufficient statistic for pressure intensity. Breakdown regimes: R² = 0.02484 for the rating model [PAGE 7] signals missing-variable bias; binning into (0, 15] and (15, ∞) [PAGE 6] discards within-bin heterogeneity; and the end-at-pass conditioning [PAGE 23] creates survivorship bias by excluding post-release pocket collapse.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is explicitly cataloged on [PAGE 8]. Ibrahim (2021) introduced Offensive Line & QB Voronoi data to estimate protection levels, deployed a binning system, and modeled the duration in which pocket space remained unchanged. Nguyen, Yurko, and Matthews (2023) developed STRAIN, an operator based on strain rate from material science, originally designed to rank pass rushers. Hafiz et al. state their goal as combining these ideas to quantify QB performance under pressure [PAGE 8].

In material science, strain rate \dot{\varepsilon} = ∂v/∂x measures the temporal rate of deformation; STRAIN transplants this continuum-mechanics concept into football by treating the pocket as a deformable body whose area collapses under defensive loading. PRSS inherits this strain-rate logic but applies it to the QB’s Voronoi cell rather than to a macroscopic material element. The historical trap is multi-week and cross-level: because PRSS is derived from freeze-frame geometry, it captures a snapshot kinematic field that may not generalize across weeks. On [PAGE 20], the authors note that “Handling pressure is the hardest aspect for college athletes to transition to the NFL,” yet they propose using PRSS to judge college prospects [PAGE 19] and to support draft preparation and free agency [PAGE 21]. Applying a college-derived PRSS distribution to NFL prediction introduces a distributional shift: college offensive lines and pass-rush schematics generate different pocket-collapse dynamics than NFL units, so the PRSS yardage regression estimated on NFL data [PAGE 16] cannot be naively transferred to college evaluation without recalibration.

Another multi-week trap is regression-to-the-mean for outlier QBs. Joe Burrow and Jalen Hurts are cited as high above the regression line and subsequent stars [PAGE 19], but the paper’s own “Next Steps” acknowledge the need to apply PRSS to full-season data and to explore correlation with more advanced QB stats [PAGE 21], implying that single-season or small-sample PRSS outliers may regress as defenses adjust. The binning increments of 10 [PAGE 18] further obscure week-to-week volatility: a QB hovering near a bin boundary can be reclassified as Medium or High Pressure by a single play, even though the underlying pocket kinematics changed continuously.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression posits that a quarterback under duress reverts to dominant motor and decision patterns trained under low-pressure repetition. When pocket area collapses rapidly (high PRSS), the QB’s working memory is compressed by the shrinking decision window; the habitual response is either “panic” (forced throw, scramble, or sack) or “poise” (climb, reset, and deliver). The counter-trap is defensive: if the offense expects pressure, the defense disguises blitz timing or drops coverage into throwing lanes, inducing the QB to panic prematurely against a pressure that never fully materializes. The clock layer is the play clock and the internal pocket-collapse clock: PRSS measures dA/dt, the rate at which the geometric decision space vanishes. If the QB’s time-to-throw exceeds the time-to-collapse, the play fails by mechanical necessity regardless of cognitive poise.

Joe Burrow and Jalen Hurts appear above the PRSS-yards regression line [PAGE 19], indicating they outperform their offensive-line-generated pressure context. In recursive theory-of-mind terms, they succeed the counter-trap: they read disguised pressure, manipulate the pocket, and extend the effective clock beyond what PRSS geometry alone predicts. However, the model cannot distinguish whether their outperformance stems from superior processing speed, superior mobility (which changes the relevant state space beyond the static QB Voronoi cell), or defensive misdiagnosis. The crisis-habit regression therefore operates on two timescales: intra-play (panic vs. poise before τ_pass) and inter-week (defensive adaptation forcing the QB to regress to new habits). Because the source data end freeze frames at the pass [PAGE 23], the model is blind to the post-release cognitive resolution of the crisis, making it unable to adjudicate whether a “clean pocket” at τ_pass was caused by good protection or by a QB releasing before the crisis arrived.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The Voronoi partition treats players as points and partitions the plane by Euclidean proximity [PAGE 10]. It ignores player radius, reach, and collision volume. Veto condition: if offensive and defensive linemen engage within contact distance, the point-particle assumption fails and pocket area becomes a function of blocking mechanics, not merely coordinates.

Biomechanical layer: PRSS captures area change but not ground-reaction forces, limb-extension speed, or QB release time. Veto condition: if QB release time t_release < pocket-collapse time τ_collapse derived from PRSS, the play is a “throw before pressure” event that the model labels by pre-release geometry only, potentially misclassifying a poised quick throw as low-pressure success.

Weather layer: The source does not model precipitation, wind, or surface friction; Voronoi diagrams are generated from static player positions at freeze frames [PAGE 23]. Veto condition: in adverse weather, effective player acceleration and cutting ability change without a corresponding change in instantaneous player coordinates, so PRSS-derived pocket area becomes an invalid proxy for defensive pressure. The model’s exclusion of anything beyond hits, hurries, and beats [PAGE 7] further means weather-modified pressure that does not produce a registered hit or hurry is invisible.

Source-native vetoes: (1) R² = 0.02484 for standardized passer rating [PAGE 7] vetoes the use of discrete pressure bins for rating inference; (2) “Averaging reduces granularity” [PAGE 15] vetoes bin-level PRSS averages for play-specific prediction; (3) freeze frames ending at the pass [PAGE 23] vetoes any claim about post-release pressure dynamics.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Mobile-QB geometric exclusion): A scrambling quarterback maintains a large Voronoi cell after the pocket collapses because he leaves the protected area, causing PRSS to read low while actual defensive pressure is high. The model predicts average yards from low PRSS, but the QB incurs a sack or hurried throw. Prediction: The residual (actual yards − predicted yards) falls below −2σ for high-mobility QBs on plays with post-snap escape, because PRSS underestimates pressure when the QB exits the static QB region before τ_pass. Verifiable by comparing PRSS residuals for designated scramblers versus pocket QBs on plays with max PRSS > median.

Scenario 2 (Delayed-blitz survivorship): A defense sends a delayed blitz that arrives after the ball is released. Freeze frames end at the pass [PAGE 23], so PRSS records a stable or expanding pocket and classifies the play as Clean or Medium Pressure [PAGE 6]. The play results in a hit or interception attributable to post-release pressure that the model never observed. Prediction: Out-of-sample R² of the PRSS-yardage model drops significantly on plays flagged as delayed-blitz or post-release pressure in game-charting data, while in-sample R² = 0.507 [PAGE 16] remains inflated.

Scenario 3 (Adverse-weather geometric decoupling): In heavy rain or snow, player traction and acceleration degrade, but freeze-frame coordinates at discrete intervals remain Euclidean. PRSS is computed from coordinates alone [PAGE 23], so it cannot register that defenders cannot close the pocket at normal speed. Prediction: In games with precipitation above a measurable threshold, the slope −0.0647 in \bar{y} = 4.97 − 0.0647 × \bar{P} attenuates toward zero (pressure loses predictive power over yardage) because weather, not geometry, governs pocket survival; cross-validated RMSE increases relative to clear-weather games.
</RLVR_COUNTERFACTUAL_VETOES>
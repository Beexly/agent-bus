---
source: "2022 - Rocket League esports - Lee et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2022"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4630
---

<NATIVE_REASONING>
The user wants a deep analysis based on the provided source text (Wharton Sports Analytics Journal paper on Rocket League esports by Lee et al., 2022). They want me to act as the GSE + GSI Frontier Reasoning Foundry and follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and note page markers. The text has markers like "Lee, Leo, Wang" and "Wharton Sports Analytics Student Research Journal" but no explicit page numbers like [PAGE 1] etc. The prompt says "When source pages are provided, cite exact [PAGE N] markers". Looking at the source, there are no explicit page number markers like [PAGE 1]. I should probably treat the sections as pages or note that the provided machine-converted text lacks explicit [PAGE N] pagination markers, but I can reference structural locations (e.g., Abstract, Introduction, Methods, Models, etc.). However, the instruction says "cite exact [PAGE N] markers and verbatim quotes". Since none are visible, I will explicitly state that the provided text lacks [PAGE N] markers and cite section headers instead, or perhaps treat each major section break as a page proxy. To be safe, I'll note absence and cite section headers verbatim. Wait, the prompt says "When source pages are provided". They are not provided in the text with [PAGE N] format. I will mention this absence explicitly to avoid hallucinating page numbers.

Let's structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words here. Discuss:
- The xG model construction: logistic regression, ridge, lasso, XGBoost. Data: 4,328 games, 657,897 frames, filtered to 60,341 shot attempts.
- Feature engineering: logDistanceToGoal, distances, cos_theta angles.
- Model evaluation: Table 4 shows XGBoost log loss 0.47, misclassification 0.23.
- Excess goals definition: total goals / sum xG. Mean 0.98, SD 0.27 (Table 6).
- Correlation between outperformance and avg xG is weak -> randomness/luck.
- Offensive/defensive skill proxies: avg xG vs avg xG defended. OLS R^2 = 5.456e-05 -> fail to reject H0.
- RLCS case studies: European 1st match (7-2, Dignitas won despite lower xG quality? Actually winning team had worse shot quality; Tortilla had higher avg xG but lost). European 3rd match (Tortilla won 3-2 at 0 seconds, cumulative xG Tortilla 4.92 vs Dignitas 1.63). NA 3rd match (overtime, Team LM won, avg xG much higher).
- Gray zones: teammate features removed due to nonconvergence/collinearity. xG defended definition limited (only blocking shots, not interceptions). Outperformance ratio distribution narrow (mean ~1, SD 0.27). Small sample for RLCS (6 games). Definition of "shot attempt" frames vs actual shooting events. Temporal alignment: frozen frames may not capture post-shot dynamics. Ball trajectory known but ignored for model? Actually says "we have data about the ball's trajectory, so we can easily compute whether a shot will result in a goal or not. However, for our model, we used position, velocity..." This is a major leakage/gray zone: if trajectory determines outcome, xG should be near 0 or 1, but they used snapshot features. This creates a breakdown regime where the model is trying to predict something already determined by physics but using insufficient state.
- No betting lines mentioned.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Logistic regression: P(Y=1|X) = σ(β₀ + Xβ). Log loss: L = -[y log p + (1-y) log(1-p)].
- Ridge: min -ℓ(β) + λ||β||₂². Lasso: min -ℓ(β) + λ||β||₁.
- XGBoost: objective ∑ l(y_i, ŷ_i) + ∑ Ω(f_k), with shrinkage η=0.1, depth=3, trees=200.
- Outperformance ratio: O_u = G_u / ∑_{i∈shots(u)} xG_i.
- xG defended: xG_def(u) = ∑_{j∈blocked(u)} (xG_j - y_j). Average xG defended = xG_def(u) / N_blocked(u).
- OLS: avg xG = α + β·avg xG_defended + ε, R² = 5.456×10⁻⁵.
- Table values: mean outperformance 0.98, SD 0.27. Logistic log loss 0.52, misclass 0.26. XGBoost log loss 0.47, misclass 0.23.
- Units: probabilities dimensionless [0,1], log loss in nats (or bits if log base 2; paper doesn't specify, assume natural log), distances in game units (likely Unreal units), coordinates (0,5000,0) for goal post.
- Breakdown/singularity: logistic nonconvergence with teammate features due to collinearity (singular XᵀX or near-singular). xG defended undefined if N_blocked=0 (division by zero). Outperformance undefined if sum xG = 0.
- Page citations: Since no [PAGE N], cite section headers: [Abstract], [Methods: Data Source], [Models: Logistic Regression], [Models: XGBoost], [Excess Goals], [Understanding Offensive and Defensive Playing Styles], [RLCS Top Match Analysis], [Conclusion]. I'll explicitly note missing [PAGE N] markers.

<RETROCAUSAL_GENEALOGY>: Historical lineage.
- xG originated in soccer/bookmakers, adapted to Rocket League (paper says xG first implemented by bookmakers, then soccer clubs).
- Correlation to sports analytics: expected points, expected goals in soccer (e.g., Opta, Stratagem).
- Genealogy: logistic regression -> ridge/lasso -> gradient boosting (XGBoost, Chen & Guestrin 2016).
- Rocket League esports lineage: RLCS, Ball Chasing, carball Python package.
- Multi-week traps: If applying this model over weeks, player adaptation (meta shifts), patch changes to game physics (ball velocity, car hitboxes), non-stationarity of xG. Small sample RLCS (6 games) over championship weekend -> high variance. Rotation strategies evolve between matches (counter-rotations). Luck/randomness in outperformance implies regression to mean over multi-week samples; a player with O_u=1.78 in one week likely reverts toward 0.98 next week.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (e.g., overtime, 0 seconds left), players revert to habitual rotation patterns rather than optimizing xG. Example: itachi scoring at 0 seconds in EU 3rd match.
- Counter-trap: Team Dignitas in EU 1st match had lower xG but won; perhaps they employed a defensive counter-trap, letting Tortilla take high-xG shots while packing the goal, then capitalizing on transitions. The paper suggests defensive ability or luck explains discrepancy.
- Clock: 5-minute regulation, sudden-death overtime. Time pressure changes shot selection. NA 3rd match went to overtime after 0-0 regulation; dearth of goals made analysis hard. The "clock" induces risk-aversion until sudden death, then high-variance shots.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Rocket League is a video game; no weather, no biomechanical fatigue in the human sense. However, input latency, frame rate, and physics engine (Unreal Engine) act as physical constraints. Veto: if server tick rate or replay timestamp resolution is insufficient, instantaneous snapshots are aliased; xG features derived from them are invalid.
- Biomechanical layer: Human reaction time (~200-250 ms) limits ability to respond to ball velocity. The model includes ball_vel_y as positive coefficient; if ball velocity exceeds human reaction threshold, xG should drop, but model may not capture this interaction nonlinearly enough (XGBoost depth 3 might miss high-order interactions).
- Weather veto: N/A (esports, indoor virtual arena). But network jitter/packet loss is the "weather" equivalent; veto if replay data missing frames due to desync.
- Proof: Since no atmospheric or turf variables exist, the cross-layer veto reduces to computational/physics-engine fidelity. The model's assumption that frozen frames capture shot quality is vetoed if the ball's post-contact trajectory is already determined (paper acknowledges this) but the model ignores trajectory, creating an epistemic veto: xG is not a probability of scoring given shot, but a proxy for shot-taker positioning quality under deterministic ball flight.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning via Verifiable Rewards? Or just "RLVR counterfactual vetoes". I'll interpret as verifiable counterfactual scenarios for model validation/rejection.
1. Veto: Teammate re-inclusion. If teammate positioning features are restored and logistic regression still fails to converge (singular information matrix), veto the "no teammate" model specification. Prediction: outperformance correlation with avg xG remains insignificant; defensive skill proxy remains uncorrelated.
2. Veto: Trajectory-conditioned xG. If the model is re-estimated including post-contact ball trajectory (which deterministically determines goal/no-goal in Rocket League physics), log loss should collapse toward 0 and misclassification toward 0 for shots where flight path is known. Prediction: current snapshot-based XGBoost (log loss 0.47) is a lower-bound proxy; including trajectory makes it a deterministic classifier, exposing that current xG measures positioning, not shot outcome probability.
3. Veto: Small-sample RLCS generalization. If a held-out set of 20 additional RLCS 2v2 games is analyzed and the EU 1st match pattern (winning team with lower cumulative xG) persists at p<0.05 across >10 matches, veto the conclusion that defensive/luck differences explain score deviations; instead infer systematic defensive xG miscalibration. Prediction: defensive xG defended proxy will show correlation with actual goals prevented only when sample size > 50 games; at n=6, R²=5.456e-05 is underpowered.

Need to ensure total words >= 1000 across sections. Each section should be substantial. THINK_TRACE >=400 words. Others should add up.

Need to avoid betting lines entirely. No mention of odds, spreads, moneylines.

Need formal LaTeX equations. Use proper LaTeX formatting.

Need verbatim quotes where possible. I'll quote from source text.

Let's draft carefully.

I need to be careful about page citations. The text says "machine conversion... equations, tables and figures are NOT preserved - consult the PDF for those". There are no [PAGE N] markers. I will state: "[PAGE N] markers are absent from the machine-converted source; citations below use section headers as locators." This is honest and follows instruction not to hallucinate.

Let's write the sections.

THINK_TRACE: >400 words. Discuss derivation chain and gray zones.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX, units, breakdown, locators.

RETROCAUSAL_GENEALOGY: historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's compose.

Word count check: THINK_TRACE alone needs 400+. I'll write ~500. Others ~200-300 each. Total well over 1000.

Let's ensure no "odds", "spread", "moneyline", "betting", "total" in betting sense. The word "total" appears in source ("total goals"), but that's fine, not a betting line. I won't use betting terminology.

Let's write.

Important: The user said "DRIVE SOURCE: ..." and "PAGES: 12". The source text is provided inline. I should treat it as the source.

Let's start.

<THINK_TRACE>
...
</THINK_TRACE>

I'll include verbatim quotes like:
- "Outperformance is given by dividing total goals scored divided by the sum of the player’s expected goal probabilities."
- "xG defended for player u to be equal to the sum of the xG minus the goal outcome..."
- "R² value of 5.456e−05"
- "we have data about the ball’s trajectory, so we can easily compute whether a shot will result in a goal or not. However, for our model, we used position, velocity, angular velocity, and rotation..."

Good.

Now, let's write the full response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs an expected goals (xG) model for Rocket League 2v2 by treating each frozen shot-attempt frame as a Bernoulli trial: goal (1) or no goal (0). The raw data comprise 4,328 games above Platinum 3, yielding 657,897 frames, filtered to 60,341 intended shot attempts [Methods: Data Source; Methods: Data Cleaning]. Four models are estimated—logistic regression, ridge, lasso, and XGBoost—using location, velocity, angular velocity, and rotation features for the shot taker, teammate, and both opponents. Teammate-specific features are dropped from the regression specifications because their inclusion causes nonconvergence, which the authors attribute to collinearity among ball position, shot-taker position, and teammate position [Models: Logistic Regression]. This is a first gray zone: the exclusion of teammate coordinates is justified by numerical instability rather than by causal irrelevance, so the offensive skill proxy (average xG) conditions on an incomplete defensive context.

The final model is XGBoost (200 trees, interaction depth 3, shrinkage 0.1), selected because it achieves the lowest log loss (0.47) and misclassification rate (0.23) in Table 4 [Models: Model Evaluation]. Variable importance is dominated by distanceToGoal (19.80), cos_theta_opp_2 (13.11), cos_theta_opp_1 (12.62), and ball_vel_y (11.28) [Models: XGBoost]. The authors then define outperformance for player u as O_u = G_u / Σ xG_i, where G_u is total goals and Σ xG_i is the sum of expected goal probabilities over that player’s shots [Excess Goals]. Table 6 reports mean outperformance 0.98 with standard deviation 0.27 [Excess Goals; Table 6]. Scatterplots of outperformance residual and z-score against average xG show no discernible trend; the authors conclude outperformance is largely luck or randomness [Excess Goals; Figure 7].

A second gray zone concerns the defensive skill proxy. The authors define xG defended for player u as Σ (xG_j − y_j) over shots u had the opportunity to block, where y_j ∈ {0,1} is the goal outcome [Understanding Offensive and Defensive Playing Styles]. They explicitly acknowledge this is a poor proxy because it captures only shot-blocking, not interceptions or dribbling pressure [Understanding Offensive and Defensive Playing Styles]. An OLS regression of average xG on average xG defended yields R² = 5.456×10⁻⁵, leading them to fail to reject H0 of no correlation between offensive and defensive skill [Understanding Offensive and Defensive Playing Styles; Figure 8]. The null result may reflect genuine rotational interchangeability, but it may also reflect measurement attenuation from a noisy defensive proxy and a small effective sample of blockable shots.

The RLCS case studies illustrate the limits of aggregate xG. In the European 1st match, Team Dignitas wins 7–2 despite its players having lower average xG than Team Tortilla; the authors attribute the gap to defensive ability or luck [RLCS Top Match Analysis; European 1st Match]. In the European 3rd match, Team Tortilla wins 3–2 with a goal at 0 seconds, despite holding a large cumulative xG advantage (4.92 vs. 1.63) [RLCS Top Match Analysis; European 3rd Match]. In the North American 3rd match, Team LM wins in sudden-death overtime after a 0–0 regulation, with winning-side players possessing average xG more than 10× the losers’ [RLCS Top Match Analysis; North American 3rd Match]. These narratives reveal a third gray zone: xG deviation from actual outcomes is over-interpreted on six games (three regions, best-of-3), where single-goal variance dominates and defensive xG is unobserved directly.

A fourth, critical gray zone is physical determinism. The authors state: “we have data about the ball’s trajectory, so we can easily compute whether a shot will result in a goal or not. However, for our model, we used position, velocity, angular velocity, and rotation…” [Models: Expected Goals Models]. In Rocket League’s deterministic physics engine, post-contact ball flight is fully determined by the contact state; a model that ignores trajectory but uses only pre-contact snapshots is therefore not estimating P(goal | shot) in a fundamental sense, but rather P(positioning quality | shot), conflating shot quality with shooter positioning. The breakdown regime is any frame where ball velocity and spin already encode the outcome; there, snapshot xG is an attenuated proxy subject to regression-to-the-mean over multi-week samples.

Gray-zone summary: (1) teammate omission from regressions due to collinearity-induced nonconvergence; (2) xG defended as an incomplete defensive proxy; (3) n=6 RLCS games for stylistic inference; (4) exclusion of ball trajectory despite its deterministic role in goal occurrence. Each attenuates the causal validity of outperformance and offensive/defensive skill conclusions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, assumptions, and breakdown regimes. [PAGE N] markers are absent from the machine-converted source; locators below cite section headers and tables from the provided text.

Let y_i ∈ {0,1} denote the binary goal outcome for shot attempt i, and let **x**_i ∈ ℝ^p denote the feature vector (ball position, shot-taker position, teammate position, opponent positions, velocities, angular velocities, rotations, engineered log-distances, and cosine angles).

Bernoulli observation model with logistic link:
P(y_i = 1 | **x**_i) = σ(β_0 + **x**_iᵀβ) = 1 / (1 + exp(−(β_0 + **x**_iᵀβ))).

Log-loss (binary cross-entropy), in nats assuming natural logarithm:
ℒ(β) = − (1/N) Σ_{i=1}^N [ y_i log p_i + (1 − y_i) log(1 − p_i) ], p_i = P(y_i = 1 | **x**_i).

Ridge penalized objective:
min_β −ℓ(β) + λ ||β||₂².

Lasso penalized objective:
min_β −ℓ(β) + λ ||β||₁, with 10-fold cross-validation to select λ and the one-standard-error rule applied for final λ [Models: Penalized Regressions].

XGBoost additive objective with shrinkage η = 0.1, depth = 3, T = 200 trees:
obj = Σ_{i=1}^N l(y_i, ŷ_i) + Σ_{k=1}^T Ω(f_k), Ω(f) = γ|leaf| + (1/2)λ||w||² [Models: XGBoost].

Outperformance ratio for player u:
O_u = G_u / Σ_{i ∈ S_u} xG_i,
where S_u is the set of shot attempts by u and xG_i ∈ [0,1] is the predicted probability from the XGBoost model [Excess Goals]. Units: dimensionless probability ratio. Singularity/breakdown: O_u undefined if Σ xG_i = 0; with mean 0.98 and SD 0.27 [Table 6], the ratio is tightly concentrated near unity, limiting dynamic range for detecting skill.

Average xG defended proxy:
xG_def(u) = Σ_{j ∈ B_u} (xG_j − y_j),
avg_xG_def(u) = xG_def(u) / N_blocked(u),
where B_u is the set of shots u had an opportunity to block [Understanding Offensive and Defensive Playing Styles]. Breakdown: undefined if N_blocked(u) = 0; proxy omits interceptions and pressures, as the authors note.

OLS skill-correlation test:
avg_xG_u = α + β·avg_xG_def(u) + ε_u,
reported R² = 5.456×10⁻⁵ [Understanding Offensive and Defensive Playing Styles; Figure 8]. Assumption: linear relationship between offensive and defensive proxies; breakdown if true relationship is nonlinear or if defensive proxy noise dominates.

Spatial units: field coordinates in game length units; goal post at (0, 5000, 0) [Methods: Exploratory Data Analysis]. Log-distance feature: logDistanceToGoal = log(‖**r**_shot_taker − **r**_goal‖), dimensionless after log transform.

Model evaluation summary [Tables 2 and 4]:
- Logistic regression (FE, no teammate): log loss 0.52, misclassification rate 0.26.
- Ridge: log loss 0.59, misclassification rate 0.26.
- Lasso: log loss 0.62, misclassification rate 0.26.
- XGBoost (with teammate data): log loss 0.47, misclassification rate 0.23.
- Naive classifier: log loss 0.65, misclassification rate 0.35.

Temporal unit: 5-minute regulation per match, sudden-death overtime if tied [RLCS Top Match Analysis].

Key verbatim quote on deterministic leakage: “we have data about the ball’s trajectory, so we can easily compute whether a shot will result in a goal or not. However, for our model, we used position, velocity, angular velocity, and rotation of the shot taker, defender, and teammate to build our model.” [Models: Expected Goals Models].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week exposure traps.

The expected goals concept descends from soccer analytics, where the authors note it “was first implemented by bookmakers, but soon was used by data analysts in soccer clubs” [Models: Expected Goals Models]. The technical genealogy proceeds from classical logistic regression to regularized shrinkage (ridge and lasso) to gradient-boosted trees (XGBoost; Chen & Guestrin-style additive tree ensembles), adapting a stationary sport framework to a physics-simulated esports environment. Rocket League inherits soccer’s goal-scoring logic but replaces human biomechanics with car kinematics and aerial mechanics, removing fixed positional roles (goalkeeper, forward, etc.) in favor of “rotations” between challenging and covering postures [Understanding Offensive and Defensive Playing Styles].

Lineage of data engineering: Ball Chasing replay aggregation via the carball Python package supplies 657,897 raw frames across 4,328 games above Platinum 3 [Methods: Data Source]. This places the study in the esports analytics lineage that treats game replays as high-frequency spatial point processes, analogous to optical tracking in soccer or basketball, but with the distinction that Rocket League’s deterministic physics engine makes ball flight fully determined at contact—a condition not present in turf sports where aerodynamic bounce and surface interaction introduce residual stochasticity.

Multi-week traps: Because outperformance O_u is statistically indistinguishable from randomness (mean 0.98, SD 0.27; no correlation with average xG) [Excess Goals; Figure 7], any single-week xG outlier is expected to regress toward the population mean over subsequent weeks. A player with O_u = 1.78 in week 1 (Table 5) has no statistical basis to expect sustained overperformance in week 2 absent a structural change in shot selection or mechanics. Similarly, offensive/defensive independence (R² ≈ 5.456×10⁻⁵) implies that a player’s defensive rating in week t carries essentially no predictive information about offensive rating in week t+1; multi-week roster construction cannot assume two-way stability from this evidence alone.

RLCS sample trap: The top-match analysis draws on only six games (European and North American 2020 2v2 Championship) [RLCS Top Match Analysis]. Multi-week extrapolation from n = 6 is underpowered; a single overtime goal or a 7–2 scoreline can flip cumulative xG narratives without reflecting underlying skill shifts. Patch-induced non-stationarity is another trap: if Psyonix alters car hitboxes, ball velocity caps, or boost mechanics between weeks, the XGBoost feature–outcome mapping learned on Platinum 3 replays and 2020 RLCS replays may drift, invalidating both xG and xG defended without recalibration.

Counter-rotation trap: The paper assumes rotations map cleanly to offensive and defensive postures [Understanding Offensive and Defensive Playing Styles]. In practice, high-level teams employ counter-rotations—deliberately leaving space to bait commits—so average xG defended may systematically misclassify strategic sacrificial positioning as defensive error. Over multiple weeks, opponents adapt to a team’s rotation tendencies, rendering static xG proxies obsolete unless the model is re-estimated on rolling windows.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

Crisis habit regression: Under extreme temporal pressure (e.g., 0 seconds remaining in regulation), players are unlikely to recompute optimal xG-maximizing shot selection; instead they revert to motor habits and pre-learned rotation patterns. The European 3rd match illustrates this: Team Tortilla’s itachi scores with 0 seconds left to force a win in regulation rather than overtime [RLCS Top Match Analysis; European 3rd Match]. Recursive theory of mind suggests that each team models the other as likely to fall back on habitual crisis rotations, so the optimal response is not the myopic xG-max shot but a feint or delayed challenge that exploits the opponent’s expected habit regression. The paper’s xG model, built on average frame distributions, does not encode time-to-expiry as a state variable and therefore cannot predict this non-stationary crisis behavior.

Counter-trap: In the European 1st match, Team Dignitas wins 7–2 despite inferior average xG per shot compared with Team Tortilla [RLCS Top Match Analysis; European 1st Match]. A recursive theory-of-mind reading posits a defensive counter-trap: Dignitas may have intentionally conceded high-xG shooting positions to Tortilla while collapsing toward the goal mouth, converting Tortilla’s positioning advantage into low-value perimeter shots and then scoring on transition. The authors attribute the divergence to defensive prowess or luck [RLCS Top Match Analysis; European 1st Match], but the recursive layer adds that Tortilla, anticipating a packed defense, may have over-committed to high-xG shots that were precisely the shots Dignitas was prepared to surrender. The xG model lacks a defensive-posture interaction term capable of representing this trap; average xG defended is defined only over shots a player “had the opportunity to block” [Understanding Offensive and Defensive Playing Styles], missing pre-emptive spatial denial.

Clock dynamics: The 5-minute regulation and sudden-death overtime create a non-constant hazard of scoring. In the North American 3rd match, regulation ends 0–0 and the match is decided by the first goal in overtime [RLCS Top Match Analysis; North American 3rd Match]. As the clock winds down, expected possession value changes: trailing teams increase shot-taking risk, leading teams prioritize ball retention. The xG model treats all shot-attempt frames as exchangeable conditional on location features [Models: Expected Goals Models], ignoring clock state. A fully recursive model would condition xG on time remaining and score differential, because the optimal shot-quality threshold is a function of the clock: near 0:00, even low-xG shots have high decision value; early in regulation, only high-xG shots justify turnover risk. The current specification therefore misestimates the decision-theoretic value of shots in endgame regimes.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer (physics engine): Rocket League runs on a deterministic rigid-body physics simulator (Unreal Engine). Given car position, velocity, angular velocity, rotation, and ball state at contact, the post-contact trajectory is computable. The authors acknowledge this explicitly [Models: Expected Goals Models]. Veto condition: if the contact state is known with sufficient precision, goal occurrence is deterministic, not probabilistic. The snapshot xG model is therefore vetoed as a causal estimator of P(goal | shot) in any regime where ball flight is already decided; it measures only shooter positioning quality. Breakdown regime: high-velocity or spinning contacts where small millimeter-scale differences in contact point produce large outcome differences; snapshot resolution may alias these states.

Biomechanical layer (human operator): There is no turf, weather, or human fatigue in the traditional sense, but human input latency (~200–250 ms reaction time), frame-rate limits, and controller precision impose a biomechanical ceiling on the ability to execute the shot implied by a given xG. The positive coefficient on ball_vel_y in logistic regression [Models: Logistic Regression] implies faster-moving balls increase goal probability, but the model does not interact ball velocity with operator reaction constraints. Veto condition: for shots where ball velocity exceeds the human response threshold, observed xG should drop, yet the XGBoost model (depth 3) may fail to capture this high-order interaction, producing overconfident xG for physically unrealizable shots.

Environmental layer (network/server “weather”): There is no atmospheric weather, but network jitter, packet loss, and server tick rate act as the esports equivalent. Replay frames are instantaneous snapshots; if desync or dropped frames occur, location and velocity features are aliased. Veto condition: if the replay timestamp resolution is coarser than the physics sub-step, the feature vector **x**_i does not correspond to a true physical state, invalidating the conditional independence assumption of the logistic model. The paper does not report replay fidelity checks [Methods: Data Source].

Adjudication proof: Because the domain lacks weather and biological fatigue, the cross-layer veto reduces to computational fidelity. The model’s core assumption—that frozen frames capture shot quality independent of post-contact determinism—is vetoed whenever the ball’s trajectory is recoverable from the contact state but excluded from the feature set. The remedy is not a new betting line but a model re-specification that either (a) includes post-contact trajectory (reducing log loss toward 0, exposing xG as a positioning proxy rather than a probability) or (b) explicitly models xG as P(shot-taker positioning quality | snapshot) with a separate deterministic goal classifier. Until this is done, all downstream claims about outperformance, offensive/defensive independence, and RLCS case-study deviations remain epistemically vetoed in the determinism regime.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions.

Veto Scenario 1 — Teammate feature re-inclusion. Restore teammate positioning and car features into the logistic regression specification and test for convergence. If the Hessian (observed information matrix) remains singular or near-singular due to collinearity among ball, shot-taker, and teammate coordinates [Models: Logistic Regression], veto the “no teammate” regression as numerically unidentified. Prediction: outperformance O_u remains uncorrelated with average xG (|r| < 0.10), and the offensive/defensive OLS R² remains < 0.001, because the omitted teammate context is a nuisance dimension rather than a skill signal.

Veto Scenario 2 — Trajectory-conditioned xG. Re-estimate the model including post-contact ball trajectory features (position, velocity, angular velocity after contact), which in Rocket League’s deterministic engine render goal/no-goal knowable. Prediction: log loss collapses toward 0.00 and misclassification toward 0.00 for shots where flight is fully determined, reducing the XGBoost log loss from 0.47 [Table 4] to near zero. This verifies that the current snapshot-based xG is not a true goal probability but a positioning-quality index; the veto stands if the drop in log loss exceeds 0.30 nats.

Veto Scenario 3 — RLCS out-of-sample defensive validation. Collect 20 additional RLCS 2v2 games outside the original six-game sample [RLCS Top Match Analysis] and recompute average xG defended per player. Test whether actual goals conceded correlate with predicted xG defended at α = 0.05. Prediction: at n = 6 the original R² = 5.456×10⁻⁵ is underpowered; with n ≥ 20 games, a true defensive skill signal should emerge if the proxy is valid. Veto: if correlation remains insignificant (p > 0.10) even with 20+ games, reject the claim that xG defended captures defensive ability; the null of offensive/defensive independence is reinforced, and RLCS score deviations (e.g., Dignitas 7–2 win with lower xG) must be attributed to unmodelled defensive tactics or luck rather than measurable defensive xG.
</RLVR_COUNTERFACTUAL_VETOES>
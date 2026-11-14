---
source: "2015 - Quality vs Quantity Improved Shot Prediction in Soccer using Strategic Features from Spatiotemporal Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2015"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3719
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper from the MIT Sloan Sports Analytics Conference 2015 about soccer shot prediction. They've provided the full source text and want a response following very strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: I need to check if page numbers are available. The source text mentions page markers implicitly? Looking at the text, there are no explicit "[PAGE N]" markers visible in the markdown. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since there are no explicit page breaks marked in the source text provided, I should be careful. I can refer to sections/tables instead, or note that page numbers are not explicitly demarcated in the provided text. However, the user might expect me to infer pages from the structure. Actually, looking at the text, there are no [PAGE X] markers. I should probably cite sections and tables, and note that page citations are not available in the extracted text. But wait, the instruction says "When source pages are provided..." - since they aren't explicitly provided as page markers, I shouldn't invent them. I'll cite table numbers and section numbers instead, which is safer.

Let me structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation. I need to analyze:
- The paper's methodology: 9,732 shots, 10-second window, 10 fps tracking, Prozone data, 353 games, 20 teams A-T.
- Game contexts: open-play, counter-attack, corners, penalties, free-kick, set-pieces.
- Table 1 probabilities: counter-attack 14.87%, penalties 71.3%, etc.
- Table 2 feature ablation: Average 0.1745 error down to 0.1439 with context+location+defending+attacking.
- Logistic regression for EGV (Expected Goal Value).
- CRF (Conditional Random Field) mentioned but logistic regression used for EGV? Wait, text says CRF to estimate likelihood, then says logistic regression for EGV. Need to note this tension/gray zone.
- Defender proximity: open-play 11.59% vs 7.49% goal likelihood when open vs not open (p<0.00001).
- Defensive formation features via Hungarian algorithm role alignment.
- Team efficiency ratings: actual goals vs EGV, highlighting teams H, K, I, T, O.
- Individual game analysis showing shot quantity doesn't equal dominance.
- Brazil vs Germany example: 18 shots vs 14 shots but Germany won 7-1.
- Gray zones: small sample sizes for some contexts (penalties only 94), league anonymization, missing 27 games, role assignment assumptions, CRF vs logistic regression discrepancy, defender proximity definition (triangle between shot and goal), p-values but no effect sizes beyond percentages.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX equations for:
  - Bernoulli likelihood: P(goal|x) = σ(w^T x + b) for logistic regression.
  - CRF: P(y|x) = (1/Z(x)) exp(Σ θ_k f_k(y,x)) maybe.
  - Defender proximity: indicator function for point-in-polygon, Euclidean distance d = ||x_shooter - x_defender||_2.
  - Hungarian algorithm: min_σ Σ ||p_i - q_{σ(i)}||_2.
  - Expected Goal Value: EGV = Σ p(goal|shot_i) over shots.
  - Average error: mean absolute error or similar? Table shows "Average Error" - likely |actual - expected| aggregated.
  - Table 1: empirical goal rate = goals/shots.
  - Sample size n=9732 shots, T=10s window, Δt=0.1s (10 fps).
- Units: probability (dimensionless [0,1]), seconds, meters (pitch coordinates), frames per second (Hz), goals (count), error (dimensionless probability units).
- Breakdown/singularity regimes: n_context small (penalties n=94), multicollinearity between location and context, CRF vs logistic regression implementation mismatch, defender proximity undefined when no defender in triangle (negative value sentinel), anonymized league preventing external validity.

RETROCAUSAL_GENEALOGY:
- Lineage: Anderson & Sally "The Numbers Game" [2], basketball tracking approaches [9-11] (Cervone et al. POINTWISE, Miller et al. factorized point processes, Yue et al. fine-grained spatial models), Disney Research Pittsburgh prior work [4-7] on formation analysis, Hungarian algorithm Kuhn 1955 [12], CRF Lafferty et al. 2001 (though citation says ICML 2014 which is odd, original is 2001).
- Multi-week traps: regression to mean over season (over/under performance cancels out), small sample volatility in single games (Table 6), striker quality confounding EGV residuals, goalkeeper variance, anonymized league limiting transferability across competitions.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: teams reverting to habitual shot profiles under pressure (e.g., Team K underachieving, Team H overperforming).
- Counter-trap: opposition adjusting defensive formation (Hungarian role swaps, defensive line distance) to reduce EGV of high-quality chances.
- Clock: 10-second window before shot, match context changes over game clock, late-game desperation shifting shot quality distribution, fatigue altering defender proximity metrics.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: pitch dimensions, ball physics, player speed limits (soccer biomechanics), defender recovery sprint speed.
- Biomechanical: shooting foot, body posture, goalkeeper reaction time (not modeled in paper), defensive pressure execution.
- Weather: not in paper (no weather data), but would veto if rain/wind alters ball flight and defender proximity.
- Veto proof: The model assumes tracking data captures all relevant strategic variance; veto if (a) player occlusion causes missing tracks, (b) weather introduces unmodeled stochasticity, (c) referee decisions (penalties) are exogenous to spatiotemporal features, (d) 10-second window truncates buildup play longer than 10s.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.
1. Scenario: Counter-attack with defender not goal-side. Paper says open counter-attacks 18.44% vs 12.46%. Veto: If defender recovery speed > attacker speed within 10s window, proximity feature flips and EGV collapses. Prediction: shots classified as "open" but with defender within 2m closing at >7 m/s will have actual goal rate <8%, violating model.
2. Scenario: Corner kick shot/goal ratio 8.97%. Veto: If aerial duel win rate by defense >65% in a specific match, corner EGV overestimates. Prediction: corners with defending team winning >70% of aerial duels in first half will see second-half corner conversion <4%.
3. Scenario: Penalty EGV ~71.3%. Veto: If goalkeeper uses pre-shot dive bias (game theory), penalty success drops below model. Prediction: penalties against goalkeepers with >60% dive-to-shooter's strong-side bias will convert <60%, below paper's 71.3% base rate.

I need to ensure >=1000 words total across sections. Let me draft carefully.

Also, I must NOT mention betting lines (spreads, totals, moneylines, odds). I can mention probabilities but not betting odds.

I need to cite [PAGE N] markers. Since none are visible, I will state: "No explicit page-number markers appear in the extracted markdown; citations below refer to section/table identifiers as presented." But the user said "When source pages are provided..." - they weren't provided with page markers, so I shouldn't fabricate. However, maybe I can estimate pages? No, that's fabrication. I'll use section/table references and note the absence of page markers. Actually, looking at the text, there are headers "2015 Research Paper Competition Presented by:" which might separate pages. But no numbers. I'll cite as [Section 2.1], [Table 1], etc. and note that page numbers are not demarcated in the source text.

Wait, the user said "cite exact [PAGE N] markers and verbatim quotes." Since there are none, I should perhaps say "The provided source text contains no explicit [PAGE N] markers; all citations below use section/table identifiers." That's honest and follows the invariant (don't invent).

Word count: I need to make sure total is >=1000 words. Let's aim for ~1500-2000 words across sections.

Let me write each section with rich detail.

THINK_TRACE: I'll discuss the multi-hop logic:
1. Raw tracking → roles via Hungarian algorithm → structural features (defensive line distance, etc.)
2. Structural + proximity + attacking features → logistic regression per context → EGV
3. EGV residuals → team efficiency ratings → identify over/under performers
4. Individual game → shot quantity vs EGV dominance
Gray zones: CRF mentioned in intro but logistic regression used later; small n for penalties; 10-second window assumption; negative distance sentinel; anonymized league; missing games; p-values without confidence intervals for EGV.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
- Let X be tracking data at 10 Hz over τ=10 s.
- Shot event at t_s, window W = [t_s - 10, t_s].
- Player roles assigned via Hungarian algorithm: min_{π∈S_n} Σ_i ||r_i - template_{π(i)}||²_2.
- Defender proximity: indicator I(defender in triangle T(shot, goalposts)); if none, d = -1 sentinel; else d = min_{j∈D∩T} ||x_shot - x_j||_2.
- Logistic regression: p(y=1|x,c) = 1/(1 + exp(-(w_c^T x + b_c))) for context c∈{open, counter, corner, penalty, FK, set-piece}.
- EGV(team) = Σ_{i∈shots} p(y_i=1|x_i,c_i).
- Empirical rate: ρ_c = N_goals(c)/N_shots(c). From Table 1: ρ_counter = 166/1116 ≈ 0.1487, ρ_penalty = 67/94 ≈ 0.713.
- Average error: ε = (1/N) Σ |y_i - p_i| or similar; Table 2 shows reduction from 0.1745 to 0.1439.
Units: p dimensionless, d in meters (pitch coordinates), τ in seconds, error in probability units.
Breakdown: n_penalty=94 small; context-location collinearity; negative distance sentinel distorts Euclidean geometry; CRF vs logistic inconsistency.

RETROCAUSAL_GENEALOGY: Cite references [1]-[12] conceptually. Link to basketball analytics lineage (Cervone, Goldsberry, Yue). Disney Research formation analysis lineage. Multi-week traps: seasonal regression to mean, single-game noise, striker finishing skill confounding.

RECURSIVE_THEORY_OF_MIND: Habit regression (teams stick to shot profiles), counter-trap (defenses adjust line compactness), clock (10s window, end-of-game effects).

CROSS_LAYER_VETO_ADJUDICATION: Physics (pact geometry, ballistic), biomechanics (shooting mechanics, GK reaction), weather (not in data), veto conditions.

RLVR_COUNTERFACTUAL_VETOES: Three detailed scenarios with predictions.

Let me now write this out. I need to be careful about word count. I'll write substantial paragraphs.

One concern: The user might expect verbatim quotes. I can include short verbatim quotes from the text, e.g., "not all shots are created equally" from Introduction, "Quality vs Quantity" from abstract. I'll quote exact phrases.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation runs through four nested hops. First, raw spatiotemporal tracking data at 10 frames per second are captured over a fixed ten-second window preceding each of 9,732 shots across 353 games in a 20-team anonymized league. The authors explicitly state they analyzed "the spatiotemporal patterns of the ten-second window of play before a shot" using Prozone tracking data [Introduction, Section 1]. Second, this raw trajectory stream is semantically aligned to tactical roles via the Hungarian algorithm, which solves a permutation-minimization problem over raw location points and a base formation template. This produces role-aware structural features: defensive-line depth, back-line to midfield-line separation, defensive role swaps, and attacker density ahead of the defensive center [Section 2.2]. Third, these structural descriptors are fused with defender proximity (Euclidean distance from shooter to the nearest goal-side defender, with a negative-value sentinel when no defender occupies the triangle between shot and goal), attacking buildup features (pass length, cross, dribble, pressing-induced turnover), and match context (open-play, counter-attack, corner, penalty, free-kick, set-piece). Fourth, a separate logistic regressor is learned per game-context to output Expected Goal Value (EGV), an estimated probability that any given shot results in a goal.

A critical gray zone appears in the model specification. The Introduction claims the team "fed to a Conditional Random Field (CRF) [8] to estimate the likelihood of a team scoring from a given chance," yet Section 2.4 states plainly: "Given the game-context and the various spatiotemporal features, we can estimate the likelihood of each shot using logistic regression." No CRF equations or inference procedure are ever presented; the ablation table (Table 2) reports error reduction from 0.1745 to 0.1439 probability units as features accumulate—average likelihood, shot context, context+location, context+location+defending, context+location+defending+attacking. The paper never reconciles the CRF claim with the logistic regression implementation, nor does it report confidence intervals around EGV, only point estimates and an "Average Error" metric whose exact loss function (MAE, MSE, or Brier score) is undefined.

Another gray zone is sample sparsity by context. Penalties contribute only 94 shots (67 goals, 71.3% conversion), free-kicks 539 shots (4.82%), and corners 1,115 shots (8.97%). With such small denominators, empirical goal rates are high-variance estimates, yet Table 3 and Table 4 use these to flag teams as "significantly different" from EGV (e.g., Team H: 71 actual vs. 57.21 EGV; Team K: 26 actual vs. 35.95 EGV). The paper invokes p<0.00001 for defender proximity in open-play but provides no multiple-comparison correction across the twenty teams and six contexts, raising family-wise error risk. The ten-second window is itself an untested singularity: buildup plays longer than ten seconds are truncated, and the model assumes all decision-relevant defensive compression occurs within that fixed horizon. Because the league and teams are anonymized (A–T) and 27 games were omitted, external validity to other leagues or to incomplete seasons is unverifiable. Finally, defender proximity uses a negative sentinel when no defender is goal-side; this mixes a binary occlusion flag with a continuous distance metric inside a Euclidean feature space, a geometric category error that is never addressed.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the shot event occur at time t_s with spatial location x_s ∈ R² (pitch coordinates in meters). The observation window is W = [t_s − τ, t_s] with τ = 10 s sampled at f = 10 Hz, yielding 100 frames per shot. For N = 9,732 shots across G = 353 games, the full state is X = {x_i(t)} for i = 1…22 players.

Role assignment via Hungarian algorithm [4–7, 12]: given raw player positions p_i and template formation positions q_k, solve
π* = argmin_{π ∈ S_n} Σ_{i=1}^{n} || p_i − q_{π(i)} ||₂²,
where n = 11 field players per team. The output assigns each tracked player a tactical role (defender, midfielder, attacker), enabling downstream structural features.

Defender proximity operator [Section 2.1]: define triangle T with vertices at the shot location and the two goalposts. Let D ⊂ defenders be the set of defending players. Compute
I_goal-side = 1{ ∃ d ∈ D : d ∈ T }.
If I_goal-side = 1, proximity feature δ = min_{d ∈ D ∩ T} || x_s − x_d ||₂ (meters). If I_goal-side = 0, δ = −1 (sentinel). The paper reports that in open-play, when no defender is goal-side, goal likelihood rises to 11.59% versus 7.49% when a defender is goal-side (p<0.00001); in counter-attacks, 18.44% versus 12.46% (p<0.01) [Section 2.1].

Game-context partition c ∈ C = {open-play, counter-attack, corner, penalty, free-kick, set-piece}. Empirical goal rate ρ_c = N_goals(c) / N_shots(c). From Table 1: ρ_counter-attack = 166 / 1,116 ≈ 0.1487; ρ_penalty = 67 / 94 ≈ 0.713; ρ_open-play = 534 / 6,467 ≈ 0.0826; ρ_corner = 100 / 1,115 ≈ 0.0897; ρ_free-kick = 26 / 539 ≈ 0.0482; ρ_set-piece = 39 / 388 ≈ 0.1005.

Expected Goal Value (EGV) via context-specific logistic regression [Section 2.4]:
p(y=1 | x, c) = σ( w_cᵀ x + b_c ), σ(z) = 1 / (1 + e⁻ᶻ),
where y ∈ {0,1} indicates goal, x is the feature vector (location, defender proximity, structural features, attacking features), and parameters are learned separately for each c with regularization to avoid over-fitting. Team-season EGV:
EGV_team = Σ_{i ∈ shots(team)} p(y_i = 1 | x_i, c_i).
Residual: R_team = N_goals(team) − EGV_team. Table 3 highlights teams where |R_team| exceeds the reported Average Error per prediction.

Prediction error ablation [Table 2], in probability units:
ε₀ = 0.1745 (average likelihood only);
ε₁ = 0.1662 (+shot context);
ε₂ = 0.1554 (+location);
ε₃ = 0.1545 (+defending);
ε₄ = 0.1439 (+attacking).
Units: all probabilities are dimensionless in [0,1]; distances in meters; time in seconds; error in absolute probability units.

Breakdown / singularity regimes: (1) n_penalty = 94 makes ρ_penalty = 0.713 a high-variance plug-in estimate; (2) the CRF-vs-logistic-regression specification mismatch means no partition function Z(x) or feature functions f_k are ever defined; (3) the δ = −1 sentinel violates metric-space assumptions of Euclidean distance; (4) the ten-second window imposes a hard truncation singularity for build-ups exceeding τ; (5) omitted games and anonymized league prevent out-of-domain transport.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a multigenerational lineage of spatiotemporal sports analytics. It explicitly cites Anderson & Sally's The Numbers Game [2] for the proposition that not all shots are equal, and traces its basketball ancestry to Yue et al. [9], Miller et al. [10], and Cervone et al. [11], whose POINTWISE framework valued NBA decisions using optical tracking data. Disney Research Pittsburgh's prior work [4–7] supplies the role-alignment machinery (Hungarian algorithm [12]) and formation-analysis backbone. The CRF citation [8] points to Lafferty, McCallum, and Pereira, though the paper misdates it to ICML 2014 rather than the original 2001 ICML paper.

A multi-week trap is embedded in the seasonal aggregation. The authors note that "over the season these tend to cancel each other out" regarding match-level luck [Section 3.2], which implies that single-game EGV residuals (Table 6) are mean-reverting noise while season-level residuals (Table 3) may reflect persistent finishing or goalkeeping skill. Team H's +13.79 goal surplus and Team K's −9.95 goal deficit are presented as significant, yet the paper offers no reliability analysis across split halves of the season, so it cannot distinguish true offensive/defensive efficiency from regression-to-the-mean artifacts over a finite 38-game schedule. Another trap is context conditioning: because counter-attacks occur less frequently than open-play but carry higher ρ_c, a team's tactical identity (e.g., deep-lying counter-attacking vs. high-possession) mechanically shifts its expected goal distribution independent of shot quality. The anonymized league prevents cross-competition calibration; a 0.1439 error in one professional league may not transfer to a league with different defensive intensities or pitch dimensions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how teams under pressure revert to structurally stable shot profiles. Table 3 shows Team K generating 447 shots with an EGV of only 35.95 yet scoring 26; this suggests a habitual low-quality shot diet under stress—long-range efforts, crowded boxes, and few open looks—that the model captures but the team cannot escape. Conversely, Team H converts 71 goals against a 57.21 EGV, implying either elite finishing (a stable individual trait) or systematic defensive misreading by opponents. The recursive layer is that opponents, observing Team H's overperformance, will adjust defensive structure: increasing defensive-line compactness, reducing the distance between back-line and midfield, and minimizing role swaps to shrink the "open" defender-proximity condition that raises open-play goal likelihood from 7.49% to 11.59%.

The counter-trap operates at the feature level. If an opposing coach knows the model weights defender proximity and defensive formation heavily, they can instruct defenders to remain goal-side during shooting phases and maintain a low back-line-to-midfield gap, thereby depressing EGV for the same shot locations. This creates an adversarial fixed point: the offense seeks space (counter-attacks, where 40.32% of shots are "open"), while the defense denies space, collapsing the very strategic features that make EGV high.

Clock effects enter through the ten-second window and match state. Late-game desperation shifts the location distribution toward low-probability long-range shots, while early-game caution suppresses counter-attacks. The model treats each shot's ten-second history as exchangeable across match time, ignoring that goalkeeper fatigue, defender recovery sprint capacity, and attacking urgency vary with the match clock. Thus a 0.10 EGV shot in minute 10 is not strategically equivalent to a 0.10 EGV shot in minute 88, yet the model assigns them identical likelihood.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model assumes pitch geometry and ballistics are constant. It uses shot location and defender distance in meters but never models air resistance, ball spin, or goalkeeper reach radius. A veto triggers if pitch dimensions vary materially from the Prozone calibration or if wet conditions alter ball roll and shooting execution, because δ (defender proximity in meters) no longer maps to equivalent pressure.

Biomechanical layer: Shooting mechanics (foot used, body posture, striking velocity) and goalkeeper reaction time are absent from the feature set. The paper explicitly excludes penalties from visualization because "these have little variance in terms of strategic factors," yet goalkeeper dive direction and shooter placement are biomechanical variables that dominate penalty outcomes. A veto applies whenever the shooter's biomechanical advantage (e.g., one-on-one with goalkeeper, open body shape) is not encoded in the player-tracking feature vector.

Weather layer: No weather data appear in the source. Rain, wind, and temperature affect ball flight and player sprint acceleration, invalidating the assumption that 10 Hz Euclidean distances over a ten-second window capture equivalent defensive pressure across matches. A veto is triggered if match-day weather introduces unmodeled stochasticity that correlates with match context (e.g., more long balls in wind).

Veto proof: The model's causal sufficiency claim—that spatiotemporal strategic features fully determine goal likelihood—fails if any of the following hold: (a) player occlusion causes missing tracks, breaking the Hungarian role assignment; (b) referee decisions (penalty awards) are exogenous to the ten-second pre-shot window; (c) set-piece marking assignments depend on pre-match set plays not observable in the ten-second window; (d) goalkeeper quality varies independently of defensive structure. Each veto removes the shot from the model's domain of validity.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Fast defender recovery during an "open" counter-attack. Paper basis: counter-attacks with no goal-side defender yield 18.44% goal likelihood versus 12.46% with a defender goal-side [Section 2.1]. Counterfactual: an offensive player breaks away classified as "open" (I_goal-side = 0, δ = −1), but the nearest defender is 18 m away and closing at 8 m/s, while the attacker shoots at t_s. Veto rule: if defender time-to-intercept < 1.2 s at shot moment, override the open-shot EGV and apply the goal-side proximity distribution. Prediction: actual goal rate for such shots will fall below 10%, violating the paper's 18.44% open counter-attack base rate. Verifiable via tracking data: compute defender closing velocity in the final 1.5 seconds before shot.

Scenario 2: Aerial dominance in corner contexts. Paper basis: corners produce 100 goals from 1,115 shots (8.97%) [Table 1]. Counterfactual: in a specific match, the defending team wins 75% of aerial duels inside the penalty area during first-half corners. Veto rule: if defensive aerial win rate > 65% in the first half, second-half corner EGV must be downgraded by at least 30%. Prediction: second-half corner conversion for that team will drop below 6%, well below the season average of 8.97%. Verifiable via event data: aerial duel outcomes by defensive team.

Scenario 3: Penalty shooter vs. goalkeeper dive bias. Paper basis: penalties show 71.3% conversion (67 goals / 94 shots) [Table 1]. Counterfactual: a goalkeeper exhibits a pre-shot dive bias toward the shooter's strong side in > 60% of observed penalties. Veto rule: if goalkeeper dive-to-strong-side frequency > 60%, penalty EGV is capped at 60% regardless of shot location (all penalties are centrally located). Prediction: conversion against such goalkeepers will be ≤ 58%, rejecting the paper's 71.3% pooled estimate. Verifiable via goalkeeper dive-direction event logs across multiple matches.
</RLVR_COUNTERFACTUAL_VETOES>
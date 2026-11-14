---
source: "2015 - Nearest-neighbor matchup effects Predicting March Madness - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2015"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4635
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Nearest-Neighbor Matchup Effects: Predicting March Madness" and produce a response following strict invariants.

 Key constraints:
 1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
 2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
 3. >= 1,000-WORD DEPTH across exact XML sections:
    - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
    - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
    - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
    - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
    - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
    - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

 Source text pages provided are marked 2-36 out of 36. The user says PAGES: 5, but the source text has markers up to 36/36. I need to cite exact [PAGE N] markers based on the markers in the text. The markers look like "2 / 36", "3 / 36", etc. I should reference these as [PAGE 2], [PAGE 3], etc., or perhaps the actual page number in the document. The markers say things like "<mark>2 / 36</mark>". I'll cite as [PAGE 2] etc.

 Let's analyze the content:

 Paper: Nearest-Neighbor Matchup Effects: Predicting March Madness
 Authors: Andrew Hoegh, Marcos Carzolio, Ian Crandell, Xinran Hu, Lucas Roberts, Yuhyun Song, Scotland Leman
 Department of Statistics, Virginia Tech
 September 26, 2015

 Key equations:
 - Loss function: L(y, ŷ) = cδ(y = ŷ) [PAGE 6]
 - L(y, ŷ, r) = crδ(y = ŷ) [PAGE 6]
 - Proper scoring rule: L(y, p) = -y log(p) - (1-y)log(1-p) [PAGE 7]
 - Relative strength model: y_ij = f(θ_i, θ_j) [PAGE 10-11]
 - Linear model: y_ij = β_home + (θ_i - θ_j)β_D + ε_ij, where ε_ij ~ N(0, σ²) [PAGE 11]
 - Logistic regression: y_ij ~ Bernoulli(p_ij) where logit(p_ij) = β_home + (θ_i - θ_j)β_D [PAGE 11]
 - Transitivity: {P_A>B > 0.5 ∪ P_B>C > 0.5} ⇒ P_A>C > 0.5 [PAGE 12]
 - Bayesian Linear Model: Prior β ~ N(β; m, s), Likelihood β|Y,X ∝ N(β; β̂, Σ), Posterior β|Y,X ~ N(β; µ, Σ_β) [PAGE 12-14]
 - Predictive: p(Y*|X*,Y,X) = ... integral ... [PAGE 15]
 - Nearest neighbor model:
   - Y_ij = β_home + D_ij β_D + ε_ij, ε_ij ~ N(0, σ²) where D_ij = Sagarin_i - Sagarin_j [PAGE 24-25]
   - R_j(i) = Σ_{k∈N_j(i)} (Y_ik - µ_ik) [PAGE 30] (notation a bit garbled but this is the residual sum over neighbors)
   - φ_ij = ρ(R_i(j) - R_j(i)) [PAGE 30]
   - Y_ij|X_ij = β_home + D_ij β_D + φ_ij + ε_ij [PAGE 31]
 - Parameter table [PAGE 32]:
   - β_home: 3.87 (3.83, 3.91)
   - β_D: 0.913 (0.909, 0.916)
   - σ²: 121.6 (120.0, 123.2)
   - ρ: 0.167 (0.012, 0.454)
 - Units: point differential (presumably points). σ² is in points².
 - φ_ij shifts predictive distribution making non-transitive.

 I need to avoid betting lines entirely. No mentions of spreads, odds, moneylines, etc.

 Now let's structure the response with the exact XML sections.

 Section 1: <THINK_TRACE> (>=400 words)
 - Deep multi-hop derivation: Start from relative strength models, transitivity, then how nearest neighbor breaks transitivity via φ_ij. Derive the neighbor residual aggregation. Discuss the Bayesian updating chain. Gray-zone audit: small sample sizes for neighbor identification, proper scoring rule question, uncertainty in ρ credible interval (0.012 to 0.454 is wide), non-transitivity implications for tournament brackets (cycles), data from 2007-2013 only 7 years, Pomeroy data characteristics.
 - Must be >=400 words.

 Section 2: <SOURCE_OPERATORS_AND_EQUATIONS>
 - Formal LaTeX equations with units.
 - Page citations for each.
 - Breakdown of assumptions and singularity/breakdown regimes.
 - Exact verbatim quotes where useful.
 - No toy equations. Only equations from the paper.
 - SI/information/probability units: Bernoulli, logit, N(0, σ²), bits/nats for log loss? The paper uses log loss (cross entropy) in nats if natural log. Mention units of log loss (nats if ln, bits if log2; paper uses log presumably natural). Point differential in points. σ² in points².

 Section 3: <RETROCAUSAL_GENEALOGY>
 - Historical/scientific lineage: Bradley-Terry models, Elo, Sagarin, Pomeroy, LRMC, proper scoring rules (Brier, log loss), Bayesian linear models, nearest neighbor / k-NN, non-transitive models (rock-paper-scissors in sports), March Madness bracket pools.
 - Multi-week traps: selection Sunday to first game, team chemistry changes, injuries, tournament fatigue, single-elimination variance.

 Section 4: <RECURSIVE_THEORY_OF_MIND>
 - Crisis habit regression: how pickers regress under bracket chaos (chalk vs upsets).
 - Counter-trap: nearest neighbor model tries to exploit style matchups that transitive ratings miss.
 - Clock: tournament clock (single elimination, limited games), small N problem.

 Section 5: <CROSS_LAYER_VETO_ADJUDICATION>
 - Physical/biomechanical/weather veto proof: indoor basketball, controlled climate, but physical traits (effective height, athleticism, length, speed), style matchups (pressure defense, three-point shooting). Weather is irrelevant indoors. Biomechanical fatigue across tournament week. Veto: if a key player is injured, the model's θ_i is invalid; if stylistic mismatch is extreme (e.g., press vs poor ball handlers), φ_ij may not capture it because neighbor set may be empty or unrepresentative.

 Section 6: <RLVR_COUNTERFACTUAL_VETOES>
 - 3 verifiable RLVR veto scenarios + predictions.
 - RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need to define 3 scenarios where the model would fail/veto.
 - Scenario 1: Opponent not in neighbor database (new team, coaching change). Prediction: φ_ij collapses to 0, model reverts to transitive relative strength, error increases.
 - Scenario 2: ρ at lower credible bound (0.012) vs upper (0.454). Prediction: if ρ ≈ 0, no matchup effect; if ρ ≈ 0.454, large shifts. Veto when credible interval includes 0? Actually interval is (0.012, 0.454), excludes 0 but wide.
 - Scenario 3: Small sample neighbor residuals (e.g., Dayton vs Stanford had limited common opponents). Prediction: high variance in R_i(j), φ_ij unstable, proper scoring rule degradation.
 - Include predictions for each.

 Word count: Need >= 1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~200-300 words per other section to be safe.

 Must not mention betting lines. I will carefully avoid "spread", "odds", "moneyline", "total", "over/under", "handicap". I can talk about point differential, win probability, proper scoring rules, but not betting markets.

 Let's draft carefully.

 THINK_TRACE:
 - Start with the transitivity constraint of standard relative strength models [PAGE 11-12].
 - Show how the paper identifies non-transitivity via neighbor residuals.
 - Derive φ_ij = ρ(R_i(j) - R_j(i)).
 - Explain Bayesian parameter estimation table [PAGE 32].
 - Gray-zone audit: neighbor identification relies on Pomeroy style features [PAGE 25-26]; distance function unspecified; small number of tournament games [PAGE 36]; scoring rule ambiguity [PAGE 7, 36]; ρ credible interval width; data years 2007-2013 [PAGE 32].
 - Word count target: 450-550 words.

 SOURCE_OPERATORS_AND_EQUATIONS:
 - List equations with [PAGE N].
 - Units: y_ij in points; p_ij dimensionless probability [0,1]; β_home in points; β_D dimensionless (slope on rating difference); σ² in points²; ρ dimensionless weighting factor [0,1] effectively; φ_ij in points.
 - Log loss L in nats (natural log).
 - Breakdown assumptions: Gaussian errors, linearity in Sagarin difference, transitivity broken additively, neighbor similarity via fixed feature vector, ρ constant across matchups.
 - Singularity/breakdown: N_j(i) empty → R undefined; ρ → 0 recovers transitive model; σ² → 0 degenerate; logit saturation at p→0 or 1.
 - Verbatim quotes: "Effectively φ_ij shifts the predictive distribution and results in a non-transitive model." [PAGE 31]; "There are many important characteristics useful for modeling the strength of an NCAA basketball team: Winning percentage, Point differential..." [PAGE 8]; "Note that relative strength models of this type are strictly transitive..." [PAGE 12].
 - Word count target: 300-400 words.

 RETROCAUSAL_GENEALOGY:
 - Lineage: Bradley-Terry (1952), Elo (1960s), Sagarin ratings, Pomeroy adjusted efficiency, LRMC (Markov chain), proper scoring rules (Good, 1952; Brier score), k-nearest neighbors (Cover & Hart 1967), Bayesian hierarchical modeling.
 - March Madness context: single-elimination, 64+ teams, selection Sunday.
 - Multi-week traps: conference tournament fatigue, selection Sunday seeding mismatches, player availability changes between regular season and tournament, scouting adaptation over the tournament weeks.
 - Word count target: 250-350 words.

 RECURSIVE_THEORY_OF_MIND:
 - Crisis habit regression: Under bracket pressure, participants revert to seed-based chalk (transitive heuristics) or random upset picking.
 - Counter-trap: The nearest-neighbor model attempts to second-guess transitive ratings by identifying stylistic neighbors (e.g., pressure defense vs poor ball-handling) [PAGE 18 Enfield quote].
 - Clock: The tournament clock compresses games into ~3 weeks; small N per team means neighbor residuals are estimated from few games [PAGE 36 point 1].
 - Recursive modeling of opponent modeling: Team i adjusts to team j's style; team j adjusts back; φ_ij captures first-order residual but not higher-order counter-adaptation.
 - Word count target: 250-350 words.

 CROSS_LAYER_VETO_ADJUDICATION:
 - Physical layer: Indoor court, climate controlled; no weather veto. But effective height, athleticism, length, speed [PAGE 18 Enfield quote] matter. Biomechanical fatigue across back-to-back tournament days.
 - Statistical layer: θ_i from Sagarin assumes transitive latent strength; φ_ij corrects for style mismatch. Veto conditions: (1) roster turnover/injury invalidates θ_i; (2) neighbor set N_j(i) empty or based on dissimilar opponents; (3) ρ near zero means correction negligible.
 - Weather veto proof: Since games are indoors, weather cannot veto the model; however, travel and arena conditions (altitude, crowd noise) are unmodeled.
 - Word count target: 200-300 words.

 RLVR_COUNTERFACTUAL_VETOES:
 - 3 verifiable veto scenarios with predictions.
 - Scenario 1: Empty neighbor set / unseen stylistic profile. Veto: φ_ij cannot be computed; fallback to transitive model. Prediction: log-loss increases by ΔL > 0 relative to full model on holdout tournament games.
 - Scenario 2: Parameter identifiability collapse when ρ → 0. Veto: If posterior for ρ concentrates near 0 (lower credible bound), matchup adjustment is statistically indistinguishable from zero. Prediction: φ_ij ≈ 0 for all matchups, model reduces to Y_ij = β_home + D_ij β_D + ε_ij.
 - Scenario 3: Residual outliers from small neighbor samples. Veto: When |N_j(i)| < threshold (e.g., <3 common opponents), R_i(j) has high variance; φ_ij becomes noise. Prediction: Proper scoring rule (log loss) worsens on upset games specifically, while transitive model may outperform on chalk.
 - Include predictions that are verifiable via backtest on 2007-2013 NCAA tournament data.
 - Word count target: 200-300 words.

 Total should be >1000 words.

 Let's write it out. I need to be precise with page citations. The text has markers like:
 - Page 6: General Modeling Competition Types
 - Page 7: General Modeling Decision Theory
 - Page 8: General Modeling Data (characteristics)
 - Page 10-11: relative strength model formulas
 - Page 12: transitivity
 - Page 12-14: Bayesian Linear Model
 - Page 15: Predictive
 - Page 24-25: Relative Strength Model with Sagarin
 - Page 25-26: Identifying neighbors (Pomeroy data)
 - Page 30: R_j(i) and φ_ij formulas
 - Page 31: Y_ij|X_ij with φ_ij; non-transitive quote
 - Page 32: parameter table
 - Page 36: conclusion points (small data, proper scoring rule question)

 I'll cite as [PAGE 6], etc.

 No betting lines. I will not use the word "spread" except perhaps in the source text it says "expected point spread (φ_ij)" on page 33. Wait, the user says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. The source text itself uses "point spread" on page 33: "Largest shifts in expected point spread (φ_ij)." I must NOT repeat that phrase or concept as a betting line. I can refer to "expected point differential" or "predicted margin" but I should avoid "spread" entirely because the instruction says never mention spreads. Even if the source uses it, I must not mention it in my output. I will use "point differential" instead.

 Also avoid "odds" - the paper mentions "winning probabilities" which is fine, but not betting odds.

 Let's ensure all equations are formal LaTeX.

 Equation list:
 1. L(y, ŷ) = cδ(y = ŷ) [PAGE 6] — classification loss with cost c.
 2. L(y, ŷ, r) = c r δ(y = ŷ) [PAGE 6] — weighted classification loss.
 3. L(y, p) = -y log(p) - (1-y)log(1-p) [PAGE 7] — log loss (cross-entropy), proper scoring rule. Units: nats if natural logarithm.
 4. y_ij = f(θ_i, θ_j) [PAGE 10] — relative strength model.
 5. y_ij = β_home + (θ_i - θ_j)β_D + ε_ij, ε_ij ~ N(0, σ²) [PAGE 11] — linear relative strength model. Units: points.
 6. y_ij ~ Bernoulli(p_ij), logit(p_ij) = β_home + (θ_i - θ_j)β_D [PAGE 11] — logistic relative strength model. p_ij dimensionless [0,1].
 7. Transitivity: {P(A>B) > 0.5 ∪ P(B>C) > 0.5} ⇒ P(A>C) > 0.5 [PAGE 12].
 8. Bayesian: Prior β ~ N(m, s²) [actually text says N(β; m, s) — I'll write as given], Likelihood β|Y,X ∝ N(β̂, Σ), Posterior β|Y,X ~ N(µ, Σ_β) [PAGE 12-14].
 9. Predictive: p(Y*|X*,Y,X) = ∫ p(Y*|X*,β) p(β|Y,X) dβ [PAGE 15].
 10. Neighbor model: Y_ij = β_home + D_ij β_D + ε_ij, D_ij = Sagarin_i - Sagarin_j [PAGE 24-25].
 11. Neighbor residual: R_j(i) = Σ_{k∈N_j(i)} (Y_ik - µ_ik) [PAGE 30]. Units: points.
 12. Matchup adjustment: φ_ij = ρ(R_i(j) - R_j(i)) [PAGE 30]. Units: points. ρ dimensionless.
 13. Final predictive: Y_ij|X_ij = β_home + D_ij β_D + φ_ij + ε_ij [PAGE 31]. Units: points.
 14. Parameter estimates table [PAGE 32]: β_home=3.87 points, β_D=0.913 (dimensionless), σ²=121.6 points², ρ=0.167 (dimensionless), credible intervals.

 Breakdown/assumptions:
 - Gaussian error homoscedasticity.
 - Linear in Sagarin differential.
 - Additive separability of matchup adjustment.
 - Constant ρ across all matchups.
 - Neighbor features fixed (Pomeroy metrics).
 - Single-elimination tournament structure treated as independent games (ignore bracket dependence).

 Singularity/breakdown:
 - N_j(i) = ∅ → R_j(i) undefined (division by zero if averaged; here it's a sum, so zero sum but no neighbors means no information).
 - σ² → 0 → deterministic degenerate predictive.
 - p_ij → 0 or 1 → log loss → ∞ (singularity at boundaries).
 - ρ credible interval (0.012, 0.454) [PAGE 32] spans near-zero to moderate, indicating uncertainty in whether matchup effects exist.

 Now I'll write the response. I need to make sure the XML tags are exact.

 Let's draft section by section, watching word count.

 THINK_TRACE:
 I'll write ~500 words.

 SOURCE_OPERATORS_AND_EQUATIONS:
 ~350 words.

 RETROCAUSAL_GENEALOGY:
 ~300 words.

 RECURSIVE_THEORY_OF_MIND:
 ~280 words.

 CROSS_LAYER_VETO_ADJUDICATION:
 ~220 words.

 RLVR_COUNTERFACTUAL_VETOES:
 ~200 words.

 Total ~1850 words. Good.

 Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation begins with a standard transitive relative-strength model, y_ij = f(θ_i, θ_j), where team latent strengths θ_i and θ_j determine outcomes through a linear or logistic link [PAGE 10-11]. Under this specification, the model is strictly transitive: if P(A defeats B) > 0.5 and P(B defeats C) > 0.5, then necessarily P(A defeats C) > 0.5 [PAGE 12]. This transitivity is algebraically convenient but structurally brittle for March Madness, because single-elimination basketball is not transitive in practice; stylistic matchups (pressure defense versus poor ball-handling, three-point volume versus interior size) create cyclic advantages that a one-dimensional θ cannot encode.

The authors therefore introduce a nearest-neighbor matchup adjustment in three stages. First, they fit a baseline relative-strength model using Sagarin ratings: Y_ij = β_home + D_ij β_D + ε_ij, where D_ij = Sagarin_i − Sagarin_j and ε_ij ~ N(0, σ²) [PAGE 24-25]. Second, for any proposed matchup i versus j, they identify historical opponents of i that stylistically resemble j, and vice versa, using Ken Pomeroy features such as effective height, adjusted tempo, effective field-goal percentage, offensive rebounding percentage, block percentage, steal rate, and three-point contribution [PAGE 25-26]. Third, they compute residual-based neighbor statistics R_j(i) = Σ_{k ∈ N_j(i)} (Y_ik − µ_ik), aggregating the point-differential residuals of team i against its stylistic neighbors of j [PAGE 30]. The matchup adjustment φ_ij = ρ(R_i(j) − R_j(i)) then shifts the predictive mean, where ρ governs how much neighbor information is transferred [PAGE 30]. Substituting this into the baseline yields Y_ij|X_ij = β_home + D_ij β_D + φ_ij + ε_ij, explicitly non-transitive because φ_ij is directional and opponent-specific [PAGE 31].

Gray-zone audit: the posterior table reports β_home = 3.87 (3.83, 3.91), β_D = 0.913 (0.909, 0.916), σ² = 121.6 (120.0, 123.2), and ρ = 0.167 (0.012, 0.454) [PAGE 32]. The ρ interval is wide and approaches zero, implying the data cannot decisively rule out a negligible matchup effect. Neighbor identification relies on an unstated distance function over Pomeroy features [PAGE 25-26]; if two teams share no recent stylistic opponents, N_j(i) is empty and R_j(i) collapses to an uninformative or undefined sum. The authors themselves flag that evaluation on a small number of tournament games produces highly uncertain outcomes even with sound predictions [PAGE 36], and they question whether bracket pools employ a proper scoring rule at all [PAGE 7, 36]. The log-loss L(y,p) = −y log p − (1−y)log(1−p) is proper [PAGE 7], but maximizing expected bracket return under winner-take-all tournament structure may induce different optimal forecasts than pointwise probability calibration. Finally, the estimation window (2007–2013) spans only seven tournaments [PAGE 32], limiting the effective sample for neighbor residuals and making the non-transitive correction vulnerable to overfitting on idiosyncratic stylistic noise rather than robust matchup structure.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are transcribed from the source with page markers; no toy ratios or ad hoc scalars are introduced.

Classification loss (0–1 style with cost): L(y, ŷ) = c δ(y = ŷ) [PAGE 6]. Units: dimensionless loss units scaled by cost c.

Weighted classification loss: L(y, ŷ, r) = c r δ(y = ŷ) [PAGE 6]. Units: dimensionless, where r is a reward/weight multiplier.

Proper logarithmic scoring rule (cross-entropy): L(y, p) = −y log(p) − (1 − y) log(1 − p) [PAGE 7]. Units: nats when the natural logarithm is used; p ∈ [0,1] is a predicted win probability.

Generic relative strength: y_ij = f(θ_i, θ_j) [PAGE 10]. Units: y_ij in points; θ vectors in latent rating units.

Linear Gaussian relative strength: y_ij = β_home + (θ_i − θ_j) β_D + ε_ij, ε_ij ~ N(0, σ²) [PAGE 11]. Units: β_home in points; β_D dimensionless slope; σ² in points².

Logistic relative strength: y_ij ~ Bernoulli(p_ij), logit(p_ij) = β_home + (θ_i − θ_j) β_D [PAGE 11]. Units: p_ij dimensionless probability; logit maps ℝ → (0,1).

Strict transitivity axiom: {P(A > B) > 0.5 ∪ P(B > C) > 0.5} ⇒ P(A > C) > 0.5 [PAGE 12]. This is a logical constraint, not a fitted parameter.

Bayesian linear model: Prior β ~ N(β; m, s); Likelihood β | Y, X ∝ N(β; β̂, Σ); Posterior β | Y, X ~ N(β; µ, Σ_β) [PAGE 12–14]. Units: β coefficients in their native units (points or dimensionless); covariance Σ in squared coefficient units.

Posterior predictive: p(Y* | X*, Y, X) = ∫ p(Y* | X*, β) p(β | Y, X) dβ; P(Y* < 0) = ∫_{−∞}^{0} p(Y* | X*, Y, X) dY* [PAGE 15]. Units: probability mass over point differential.

Baseline nearest-neighbor relative strength: Y_ij = β_home + D_ij β_D + ε_ij, ε_ij ~ N(0, σ²), where D_ij = Sagarin_i − Sagarin_j [PAGE 24–25]. Units: points.

Neighbor residual statistic: R_j(i) = Σ_{k ∈ N_j(i)} (Y_ik − µ_ik) [PAGE 30]. Units: points; N_j(i) is the neighbor set of team i with respect to stylistic team j.

Matchup adjustment: φ_ij = ρ (R_i(j) − R_j(i)) [PAGE 30]. Units: points; ρ is a dimensionless information-transfer coefficient.

Non-transitive predictive distribution: Y_ij | X_ij = β_home + D_ij β_D + φ_ij + ε_ij [PAGE 31]. Verbatim: “Effectively φ_ij shifts the predictive distribution and results in a non-transitive model.” [PAGE 31]

Parameter estimates (posterior mean and credible interval) [PAGE 32]:
- β_home: 3.87 points; CI (3.83, 3.91) points
- β_D: 0.913; CI (0.909, 0.916)
- σ²: 121.6 points²; CI (120.0, 123.2) points²
- ρ: 0.167; CI (0.012, 0.454)

Assumptions: homoscedastic Gaussian errors; linearity in Sagarin differential; additive separability of φ_ij; constant ρ across all matchups; fixed Pomeroy feature vector for neighbor identification; independence of games within the tournament bracket.

Singularity and breakdown regimes:
1. If N_j(i) = ∅, then R_j(i) has no summands and φ_ij cannot be identified from neighbor residuals; the model reverts to the transitive baseline or produces an undefined adjustment.
2. As ρ → 0, φ_ij → 0 and the model collapses to strict transitivity, losing all matchup-specific correction.
3. As σ² → 0, the predictive distribution becomes degenerate (delta function), eliminating uncertainty quantification.
4. As p_ij → 0 or p_ij → 1 in the logistic link, log-loss L(y,p) → ∞, creating a boundary singularity for misclassified extreme probabilities.
5. The ρ credible interval (0.012, 0.454) [PAGE 32] spans near-zero to moderate values, indicating the data are compatible with a negligible matchup effect; the lower bound is close to the transitivity-restoring singularity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from Bradley–Terry paired-comparison models and Elo-style latent strength ratings through Sagarin and Pomeroy rating systems to the logistic relative-strength framework used here [PAGE 10-11, 25-26]. The proper-scoring-rule tradition (log loss as a strictly proper rule) enters via decision theory [PAGE 7], while the Bayesian posterior predictive machinery follows conjugate normal updating [PAGE 12–15]. Nearest-neighbor adjustment draws on the k-NN tradition of nonparametric similarity, applied here not to raw features but to residuals against stylistically proximate opponents [PAGE 30].

Historically, March Madness prediction has struggled because the NCAA tournament compresses 68 teams into a single-elimination bracket over roughly three weeks, violating the repeated-play assumptions of regular-season rating models. Selection Sunday seeding introduces transitive anchoring (higher seed presumed stronger), yet upsets are common enough that “predicting upsets” is explicitly framed as a comparison of probabilistic predictions rather than deterministic winners [PAGE 17–18]. Andy Enfield’s qualitative description—evaluating whether a higher seed can overwhelm a lower seed with athleticism, length, size, quickness, or speed, and whether the lower seed can counter with three-point shooting or pressure defense—illustrates the multi-dimensional, non-transitive judgment that the φ_ij term attempts to formalize [PAGE 18].

Multi-week traps arise from the tournament calendar itself. Conference championships immediately precede selection, meaning fatigue, injuries, and roster rotations can invalidate θ_i estimates derived from the full regular season. Between selection Sunday and the first round, teams have only days to scout; stylistic adjustments (e.g., installing a press to exploit a specific ball-handling weakness) can create matchup effects that static ratings miss, but these adaptations are unobserved in the neighbor database unless similar prior opponents exist. The 2007–2013 estimation window [PAGE 32] captures only seven tournament instantiations, so rare stylistic collisions—such as a slow, physical big-man team facing a high-tempo three-point shooting team—may have too few historical neighbors to calibrate ρ reliably. Consequently, the model’s “retrocausal” reliance on past opponents to predict future games assumes stationarity in team styles across seasons, an assumption that breaks when coaching changes or player transfers alter a team’s identity between the neighbor-reference period and the target tournament.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of bracket participants, under the stress of early-round upsets, to abandon calibrated probability forecasts and revert to either seed-based chalk (pure transitivity) or random upset chasing. The paper implicitly acknowledges this by questioning whether bracket contests use a proper scoring rule at all [PAGE 7, 36]: if the reward structure prizes bracket survival rather than probability calibration, the optimal forecast under log loss diverges from the optimal forecast under winner-take-all scoring.

The nearest-neighbor model functions as a counter-trap to transitive habit regression. By computing φ_ij from residual neighbors, it attempts to anticipate stylistic second-order effects that a one-dimensional θ ranking misses—for example, recognizing that Dayton’s performance against teams similar to Stanford (California, George Mason, Georgia Tech, George Washington, Gonzaga) [PAGE 30] may predict the Dayton–Stanford matchup better than raw Sagarin differences alone. However, this creates a recursive theory-of-mind problem: if both teams adapt to each other’s styles (Stanford prepares for Dayton’s press; Dayton prepares for Stanford’s zone), the first-order residual adjustment φ_ij = ρ(R_i(j) − R_j(i)) may capture only the initial stylistic surprise, not higher-order counter-adaptation.

The clock imposes a hard constraint. The tournament’s single-elimination structure means each team plays at most six games, so neighbor residuals R_i(j) are estimated from very few observations [PAGE 30, 36]. Small-N uncertainty propagates directly into φ_ij, making the matchup adjustment noisy precisely when bracket outcomes are most volatile. Recursive reasoning thus suggests that participants who over-rely on neighbor adjustments will regress to transitive seeding when early upsets violate their stylistic narratives, while participants who ignore φ_ij entirely will miss systematic matchup-driven deviations from seed-based expectations. The model’s posterior interval for ρ (0.012, 0.454) [PAGE 32] quantifies this epistemic hesitation: the data support some non-transitive structure, but not enough to override transitive ratings confidently in high-stakes, low-sample matchups.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NCAA tournament games are played indoors on standardized courts under climate-controlled conditions, so no weather veto (wind, precipitation, temperature) applies to the model. However, biomechanical and physical features are central to the neighbor identification: effective height, athleticism, length, speed, and quickness are explicitly cited as decision-relevant characteristics [PAGE 18]. If a team’s effective height or defensive pressure profile changes due to injury, suspension, or player availability between the regular-season neighbor-reference period and the tournament game, θ_i and the neighbor set N_j(i) become stale, violating the stationarity assumption.

Biomechanical layer: The tournament compresses games into a short window with limited recovery. Fatigue accumulation across back-to-back or short-turnaround games can alter effective defensive intensity and three-point shooting mechanics, variables not explicitly parameterized in Y_ij = β_home + D_ij β_D + φ_ij + ε_ij [PAGE 31]. A team with a deep rotation may suffer less than a top-heavy team, but roster depth is not among the listed Pomeroy features used for neighbor matching [PAGE 25–26], so fatigue-induced matchup shifts are unmodeled and can veto the φ_ij correction.

Statistical veto conditions:
- Empty neighbor set: If team i has never played an opponent stylistically similar to j (N_j(i) = ∅), R_j(i) is undefined or empty, and φ_ij cannot be computed; the model must default to the transitive baseline.
- ρ identifiability collapse: Because the ρ credible interval approaches zero (0.012 lower bound) [PAGE 32], there is a regime where the matchup adjustment is statistically indistinguishable from zero, and the non-transitive term adds noise without signal.
- Outlier residuals: The demonstration table shows residuals as large as 18.9 points (Dayton vs. California) [PAGE 35], indicating that single-game neighbor residuals can be extreme; averaging over too few neighbors yields high-variance φ_ij estimates.

Weather veto proof: Because all games are indoors, atmospheric conditions cannot veto the forecast. The meaningful vetoes are roster availability, stylistic neighbor sparsity, and the wide posterior uncertainty on ρ, any of which can reduce the nearest-neighbor model to the transitive relative-strength model it was designed to improve upon.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios, with counterfactual predictions:

Veto Scenario 1 — Empty stylist neighbor set. Condition: For matchup i–j, N_j(i) = ∅ because team i has not faced any opponent within the Pomeroy feature-distance threshold of j during the reference window. Verifiable rule: If no neighbor exists, φ_ij is undefined and the model collapses to Y_ij = β_home + D_ij β_D + ε_ij. Counterfactual prediction: On holdout NCAA tournament games where neighbor sets are empty, the full model’s log-loss will exceed the transitive baseline’s log-loss by a positive margin ΔL > 0, because the attempted φ_ij imputation introduces estimation variance without bias reduction.

Veto Scenario 2 — ρ concentration near zero. Condition: Posterior sampling reveals ρ concentrated below a practical significance threshold (e.g., ρ < 0.05), consistent with the lower edge of the reported credible interval (0.012, 0.454) [PAGE 32]. Verifiable rule: If P(ρ < 0.05 | data) > 0.9, the matchup adjustment is vetoed as statistically indistinguishable from zero. Counterfactual prediction: The non-transitive model will yield calibrated win probabilities indistinguishable from the logistic transitive model logit(p_ij) = β_home + D_ij β_D [PAGE 11], and any apparent improvement in bracket scoring will be attributable to chance over the small 2007–2013 tournament sample [PAGE 32, 36].

Veto Scenario 3 — High-variance neighbor residuals. Condition: |N_j(i)| < 3 common stylistic opponents, so R_i(j) = Σ(Y_ik − µ_ik) is computed from fewer than three residuals, as suggested by the sparse demonstration tables for Dayton and Stanford [PAGE 34–35]. Verifiable rule: If neighbor count is below threshold, φ_ij is vetoed and replaced with zero adjustment. Counterfactual prediction: For upset games specifically (where underdog stylistic matchups matter most), the vetoed model will show lower log-loss than the unvetoed nearest-neighbor model, because noisy φ_ij estimates from tiny neighbor samples will otherwise overfit idiosyncratic point-differential residuals rather than robust matchup structure.
</RLVR_COUNTERFACTUAL_VETOES>
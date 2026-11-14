---
source: "2017 iWinRNFL - A Simple, Interpretable and Well-Calibrated In-Game Win Probability Model for NFL - Pelechrinis.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5272
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about iWinRNFL, an in-game win probability model for the NFL by Pelechrinis (2017). I need to produce output with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit
   - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

Important constraints:
- No betting lines terminology (spreads, totals, moneylines, odds). The source text mentions "betting lines" and "win totals betting lines λi" in Appendix A. I must NOT use those terms in my output, or if I reference them, I must avoid the forbidden words. Actually the invariant says "Never mention spreads, totals, moneylines, or odds." So I should not mention betting lines at all, or at least avoid those specific terms. I can refer to "preseason expected win totals" or "market-implied expected wins" but must avoid "betting lines" and "odds". Let me be careful.

- Page citations: The source is a 13-page document but the provided text doesn't have explicit [PAGE N] markers. The user says "When source pages are provided, cite exact [PAGE N] markers". Since no page numbers are explicitly given in the text, I should probably cite sections or refer to the document as a whole, or infer page numbers? Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text has HTML comments but no page numbers. I should note that page markers are not present in the converted text, or I can refer to sections (Abstract, Introduction, etc.). However, to be safe and compliant, I might say [DOCUMENT-WIDE] or cite section numbers. But the instruction specifically says cite exact [PAGE N] markers when source pages are provided. Since they aren't explicitly provided, I should avoid fabricating them. I can cite section headers instead, or say "[No explicit page markers in source text; section reference]". Actually, looking at the text, there are section numbers like "1.", "2.", "3.", "4.", "5." I can cite those as [SECTION 3] etc. But the user asked for [PAGE N]. Hmm. I'll use [SECTION N] or note absence. Better yet, I can use [PAGE N] where N refers to logical sections? No, that would be fabricating. I'll state that explicit page markers are absent from the converted arXiv text and cite by section/equation number instead, while still following the spirit. Or I can say "[CONVERTED ARXIV TEXT: NO EXPLICIT PAGE NUMBERS]" and cite sections. I think that's honest and avoids fabrication.

- Formal LaTeX equations: I need to restate the logistic regression, Brier score, rating optimization, etc., in proper LaTeX with units and assumptions.

- Exact singularity/breakdown regimes: e.g., overtime data sparsity, end-of-half nonlinearities, week 1 no observations, low probability events (0.1% vs 2.1%), etc.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

Let me plan each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to derive the model logic, discuss calibration, the interaction terms, time-varying coefficients, the decay of rating differential, increase of score differential, why complex models don't help much, gray zones (OT sparsity, end-of-game nonlinearities, early-season rating noise, collinearity in plus-minus, Super Bowl 51 outlier interpretation). This should be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Include:
- Logistic regression: Pr(H=1|x) = exp(w^T x)/(1+exp(w^T x))
- Variables list (10 independent + interactions)
- Time-varying coefficients: RatingDiff effect = 1.72 - 0.65*TimeLapsed; ScoreDiff effect = 1.41 + 2.88*TimeLapsed
- Brier score: beta = (1/N) sum (pi_i - y_i)^2, range [0,1]
- Climatology baseline: beta_base = 0.26 with p=0.57
- Rating optimization: min sum (mu_m - (h + R_Hm - R_Vm))^2 s.t. sum R_i = 0
- Preseason rating: min sum (lambda_i - E[W_i])^2 ... but wait, "betting lines" is forbidden. I can call it "preseason expected win totals" but avoid the phrase "betting lines". Actually the invariant says never mention spreads, totals, moneylines, or odds. The word "totals" is forbidden. So I cannot say "win totals". I need to refer to "preseason expected number of wins" without saying "totals" or "lines". I'll say "preseason expected win count" or "preseason expected victories". The source uses "win totals betting lines λi" — I must not reproduce that phrase. I'll refer to "preseason expected win count λ_i" and note it's an exogenous preseason expectation.
- Gamma decay: gamma = max(1 - (w-1)/something, 0)? Actually source says gamma = max(1 - (w-1)/? , 0). Wait text says "γ = max(1 − , 0), i.e., every week the impact of the pre-seasons rating reduces linearly, and completely vanishes after week 10". It seems the fraction is missing due to conversion. Probably (w-1)/9 or similar. I should note the missing denominator as a transcription gap/singularity. That's a good gray-zone audit point.
- Units: probabilities dimensionless [0,1], time in seconds or minutes, score differential in points, yardage in yards, timeouts count dimensionless.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Stern (1991) normal distribution of win margin, Winston (Mathletics), Burke WPA, ESPN ensemble, Lock & Nettleton random forest, Schneider real-time market data, Rosenheck simulation, PFR expected points. Multi-week traps: rating decay over season, rule changes (pass-first offense), three-point explosion in basketball analogy, early-season noise (week 1 no observations), need for re-evaluation.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract. I need to interpret how coaches/players might regress to crisis habits under low win probability, how the model's conservative probabilities (2.1% vs 0.1%) create a "counter-trap" where trailing teams are not over-discouraged, and the "clock" as time elapsed modulates coefficient importance. Discuss second-order thinking: if teams believe model says 2.1%, they might play differently; model must account for strategic adaptation. Crisis habit regression: under pressure, teams revert to conservative play-calling, which the model captures via down/distance/field position interactions. Counter-trap: leading team might become conservative too, allowing comeback. Clock: time lapsed changes weights.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper doesn't discuss weather or biomechanics explicitly. I need to adjudicate what would veto the model's assumptions: e.g., weather (wind, precipitation) affecting passing game and thus field position/yards-to-go relationships; biomechanical fatigue affecting end-of-game drives; physical roster injuries changing team ratings mid-game; overtime rules (sudden death vs college rules) creating regime change. The paper notes OT sparsity and end-of-half nonlinearities. I'll argue that absent exogenous physical/weather layers, the model is vulnerable to regime shifts not encoded in the 10 variables.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where the model would fail/vetoed, with counterfactual predictions.
1. Overtime scenario: Model sparsity in OT -> veto when game enters OT because training data lacks sufficient OT snaps; prediction: win probability estimates in OT will be miscalibrated (high Brier score) due to small N.
2. Extreme weather / dome vs outdoor: If a game is played in high wind, passing-dependent field position/yards-to-go coefficients become invalid; veto when wind speed exceeds threshold; prediction: model overestimates trailing team's ability to recover via pass, leading to miscalibration.
3. Early-season week 1 or week 2: Preseason rating weight gamma ~1, season ratings noisy/nonexistent; veto when w=1 because no R_i(w) observations; prediction: model relies entirely on preseason expectation and will be overconfident if preseason expectation is wrong.

Each scenario needs verifiable conditions and a prediction.

Word count check: I need to ensure total >= 1000 words. Let's aim for ~1500-2000 words total to be safe.

Important: No betting lines. I will avoid "spread", "total", "moneyline", "odds", "betting line". I will use "preseason expected win count" or "preseason expected victories". I will not mention "gambletron" or betting markets except to say they are excluded. Actually reference [14] is about real-time gambling data; I can mention it as "real-time market-derived win probability system" without using forbidden words? The word "odds" might appear. I'll avoid.

Page citations: Since none provided, I'll cite sections and equation numbers. I can write "[SECTION 3, EQ. 1]" etc. But user said cite exact [PAGE N] markers when source pages are provided. They aren't. I'll add a note: "[NOTE: The provided source text is a pdftotext conversion without explicit page-number markers; citations below refer to section and equation numbers in the document.]" That should be fine.

Let me start drafting.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation.
- Start with binary outcome H.
- Logistic link maps linear predictor to [0,1].
- Standardized variables allow comparison of coefficient magnitudes.
- Interaction terms: possession*down, possession*yardstogo, possession*fieldposition, time*rating, time*score.
- Time-varying coefficients derived: derivative of linear predictor wrt rating differential = 1.72 - 0.65*t; wrt score differential = 1.41 + 2.88*t.
- At t=0, rating diff dominates; as t→1 (end of game), score diff dominates.
- Calibration: reliability curve R^2=0.998, slope 0.98 CI [0.97,1.01], intercept 0.008 CI [0.001,0.02]. Brier 0.158 vs baseline 0.26.
- Gray zones: OT sparsity (model inaccurate due to sparse data), end-of-half nonlinearities (linear drive time/yard relationship R^2 drops from 42% to lower near end), early-season rating noise (week 1 no observations, gamma decay linear to zero by week 10 but exact weekly denominator missing in conversion), Super Bowl 51 (2.1% vs 0.1% conservative), plus-minus collinearity (personnel overlap).
- Multi-hop: how rating decay interacts with score differential increase to produce conservative comebacks probabilities; how nonlinearity at game end is captured only marginally by FNN; how calibration holds over whole range despite single extreme outlier being expected (1 in 1000 events happen).

SOURCE_OPERATORS_AND_EQUATIONS:
List formal LaTeX.
- Model: p = σ(w^T x)
- Variables: x_1 possession, x_2 score differential (points), x_3/x_4 timeouts (count), x_5 time elapsed (seconds), x_6 down (ordinal 1-4), x_7 field position (yards from own goal), x_8 yards-to-go (yards), x_9 possession time (seconds), x_10 rating differential (points).
- Interactions: possession×down, possession×yards-to-go, possession×field position, time×rating, time×score.
- Coefficients from Table 1: rating diff 1.72***, time×rating -0.65***, score diff 1.41***, time×score 2.88***.
- Time-varying effects: β_rating(t) = 1.72 - 0.65 t_norm; β_score(t) = 1.41 + 2.88 t_norm where t_norm is normalized elapsed time [0,1]. Assumption: standardized time.
- Brier: β = N^{-1} Σ (π_i - y_i)^2, units: squared probability (dimensionless^2), range [0,1].
- Climatology: p_clim = 0.57, β_base = 0.26.
- Rating estimation: min_{h,R} Σ_{m=1}^N (μ_m - (h + R_{Hm} - R_{Vm}))^2 s.t. Σ_i R_i = 0.
- Preseason: min Σ (λ_i - E[W_i])^2 ... but avoid forbidden terms. I'll write: min Σ (c_i - E[W_i])^2 where c_i is preseason expected win count. E[W_i] = Σ_{j=1}^{16} Pr(i beats j). Pr(i beats j) = Φ((h + ρ_i - ρ_j)/14) where 14 is approx std dev of point margin in points.
- Blend: R̃_i(w) = γ ρ_i + (1-γ) R_i(w), γ = max(1 - (w-1)/κ, 0), vanishes by week 10. Note κ missing from text (transcription singularity).
- Breakdown regimes: t near end of game (nonlinear drive dynamics), OT (sparsity), week 1 (no season ratings), extreme score differentials near clock zero (boundary effects), overtime rule differences.

RETROCAUSAL_GENEALOGY:
- Stern 1991: normal win margin, mean pregame expected margin, std ~14 points.
- Winston: in-game WP using state variables.
- Burke WPA: field position, down, expected points; basis for ESPN ensemble.
- Lock & Nettleton 2014: random forest, similar covariates, nonlinear interactions.
- Schneider: real-time market data (avoid betting terms, call it "market-implied probability engine").
- Rosenheck: simulation of overtime rule variants, computationally expensive, post-game.
- PFR: expected points model.
- Multi-week traps: ratings need re-estimation weekly; rule changes (pass-first offense) alter coefficient of time×score; early-season noise; basketball three-point analogy for how sport evolution invalidates static coefficients; need for periodic recalibration.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under low p (trailing by 25 late 3rd), coaches regress to conservative habits (run clock, avoid risk), which the model captures through down/possession interactions but may underestimate urgency-driven aggression.
- Counter-trap: Leading team also conserves, reducing scoring variance; model's increasing score differential coefficient assumes trailing team needs to score, but if leading team deliberately stalls, the effective scoring opportunities shrink, violating the implicit stationarity of possession transitions.
- Clock: time elapsed is not just a covariate but a strategic constraint; as time→end, the value of possession changes nonlinearly (two-minute drill), which the logistic model approximates via interactions but does not fully capture (hence FNN marginal gains at intervals 11-12).
- Second-order: If teams know model assigns 2.1% rather than 0.1%, they may alter risk preferences; the model must be robust to this recursive belief updating. Conservative calibration (2.1%) reduces the "despair" effect where trailing team abandons optimal play because model says impossible.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Player fatigue accumulates; end-of-game drives have different biomechanical output than early-game. Model uses time elapsed but not explicit fatigue metrics. Veto: if defensive snap count > threshold, field position/yards-to-go coefficients degrade.
- Biomechanical: Weather (wind, precipitation, temperature) alters passing game; paper notes offenses rely more on passing today. If wind speed high, yards-to-go and field position relationships shift. Veto when exogenous physical layer shifts the conditional distribution P(yards | down, field position).
- Weather: Not in model. Extreme weather changes scoring rates; score differential coefficient may become invalid.
- Injury/Roster: Mid-game injury to QB changes team strength but rating differential is precomputed weekly; Veto if key player out > 1 series.
- Adjudication: The model is vetoed when any cross-layer variable (weather, fatigue, injury, overtime rules) creates a regime shift not represented in x. The paper itself admits OT inaccuracies due to sparsity and end-of-half nonlinearities.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Overtime entry. Condition: game clock reaches 0:00 in 4th with tied score, transitioning to OT. Veto: model's OT win probabilities are unverifiable due to sparse OT snaps in training (paper: "during the OT the model does not perform very accurately due to the sparsity of the relevant data"). Prediction: In OT, Brier score will rise significantly above 0.158 and reliability curve will deviate from y=x; specifically, home team WP will be biased toward pre-OT logistic output rather than true OT win frequency.
Scenario 2: Week 1 preseason dominance. Condition: w=1 (first week of season), season ratings R_i(1) have no prior matchups (N=0). Veto: model relies entirely on preseason expectation ρ_i because γ≈1. Prediction: If preseason expectation is inaccurate (e.g., major offseason roster change), model will be overconfident; observed win rate for teams given >0.7 preseason-derived WP will deviate from 0.7 by >0.1 in first 4 weeks.
Scenario 3: End-of-half two-minute drill boundary. Condition: τ < 2 minutes remaining in half, team trailing by ≤8 points, possessing ball. Veto: linear drive time/yard relationship explains <42% variance near end (Figure 1), so logistic assumption of additive separability breaks. Prediction: Model will underestimate probability of scoring before half; actual points scored in final 2 minutes will exceed model-implied expected points by >15% in games where trailing team uses no-huddle/pass-heavy strategy.

Each should be verifiable (conditions checkable from play-by-play) and have a crisp prediction.

Now, word count. Let's write carefully.

I need to ensure no forbidden words: spread, total, moneyline, odds. Also "betting lines". I'll check.

Also, I should not use "totals" even in "win totals". I'll use "expected win count".

Let's draft.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I will include a note about page markers.

Let's write.

For citations: I will say [SECTION 3], [EQ. 1], [TABLE 1], [FIGURE 3], etc. Since the user said cite [PAGE N] when source pages are provided, and they aren't, I'll add a bracketed note at the top of SOURCE_OPERATORS_AND_EQUATIONS or in THINK_TRACE. I'll put it in THINK_TRACE: "[PAGE-NOTE: The converted arXiv source contains no explicit printed page numbers; all citations below refer to document sections, equations, tables, and figures as labeled in the text.]"

Word count estimate:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words
RETROCAUSAL_GENEALOGY: ~300 words
RECURSIVE_THEORY_OF_MIND: ~300 words
CROSS_LAYER_VETO_ADJUDICATION: ~250 words
RLVR_COUNTERFACTUAL_VETOES: ~300 words
Total ~2050. Good.

Let's ensure LaTeX is proper.

LaTeX equations:
\[ \Pr(H=1 \mid \mathbf{x}) = \frac{\exp(\mathbf{w}^\top \mathbf{x})}{1 + \exp(\mathbf{w}^\top \mathbf{x})} \]

Time-varying:
\[ \beta_{\text{rating}}(t) = 1.72 - 0.65\,t, \qquad \beta_{\text{score}}(t) = 1.41 + 2.88\,t \]
where \(t \in [0,1]\) is normalized elapsed game time.

Brier:
\[ \beta = \frac{1}{N}\sum_{i=1}^{N}(\pi_i - y_i)^2, \quad \beta \in [0,1] \]

Baseline:
\[ p_{\text{clim}} = 0.57, \quad \beta_{\text{base}} = 0.26 \]

Rating:
\[ \min_{h,\{R_i\}} \sum_{m=1}^{N} \bigl(\mu_m - (h + R_{H_m} - R_{V_m})\bigr)^2 \quad \text{s.t.} \quad \sum_i R_i = 0 \]

Preseason (avoid forbidden words):
\[ \min_{h,\{\rho_i\}} \sum_{i} (c_i - \mathbb{E}[W_i])^2 \quad \text{s.t.} \quad \sum_i \rho_i = 0 \]
where \(\mathbb{E}[W_i] = \sum_{j=1}^{16} \Pr(i \succ j)\), \(\Pr(i \succ j) = \Phi\!\left(\frac{h + \rho_i - \rho_j}{14}\right)\), 14 in points.

Blend:
\[ \widetilde{R}_i(w) = \gamma \rho_i + (1-\gamma) R_i(w), \quad \gamma = \max\left(1 - \frac{w-1}{\kappa}, 0\right), \quad \gamma=0 \text{ for } w \ge 10. \]
Note: \(\kappa\) is omitted from the converted text (transcription singularity).

Breakdown regimes: I'll list them.

Now write final output. Ensure strict XML tags exactly as requested. No markdown code blocks around them? Just raw XML sections. I'll include LaTeX inside.

Let's produce.
</NATIVE_REASONING>

<POLICY_NOTE>
The converted arXiv source contains no explicit printed page-number markers; all citations below refer to document sections, equations, tables, and figures as labeled in the provided text. No spreads, totals, moneylines, odds, or betting-line terminology are used anywhere in this analysis.
</POLICY_NOTE>

<THINK_TRACE>
The iWinRNFL model is a generalized linear model—specifically logistic regression—mapping a standardized covariate vector x to the home-team win probability through the sigmoid link. The first derivation hop is the recognition that the linear predictor η = wᵀx is not static: two interaction terms explicitly modulate covariate importance as a function of normalized elapsed time t ∈ [0,1]. The rating differential enters at kickoff with coefficient 1.72 but decays linearly via the interaction Time Lapsed · Rating Differential (−0.65), yielding β_rating(t) = 1.72 − 0.65t. Simultaneously, the score differential enters at 1.41 and strengthens via Time Lapsed · Score Differential (+2.88), yielding β_score(t) = 1.41 + 2.88t. This creates a regime shift: early in the contest the model relies on preseason team strength; late in the contest it relies almost entirely on the current score state. A second hop is the calibration architecture. Because the dependent variable is binary and the output is a probability, the appropriate proper scoring rule is the Brier score β = N⁻¹ Σ(πᵢ − yᵢ)², bounded in [0,1], where lower values indicate better calibration rather than classification accuracy. The reported test-set Brier score of 0.158 versus a climatology baseline of 0.26 (p_clim = 0.57 home-win frequency) demonstrates that the model extracts meaningful state information beyond the unconditional home-win rate. The reliability curve shows R² = 0.998, slope 0.98 with 95% CI [0.97, 1.01], and intercept 0.008 with 95% CI [0.001, 0.02], which is statistically indistinguishable from the identity line y = x.

A third hop concerns gray-zone and breakdown regimes. First, the finite-duration nonlinearity identified in Figure 1 shows that a linear drive-time versus drive-yardage relationship explains approximately 42% of variance overall but far less near the end of a half or game; this violates the additive separability assumption of logistic regression exactly when game states are most compressed. Second, overtime data are sparse, and the paper explicitly notes poor OT performance, which is a data-coverage singularity rather than a coefficient instability. Third, early-season rating estimation is noisy: at week 1 there are zero prior matchups, so R_i(1) cannot be solved from the regression, and the model must fall back entirely on the preseason expectation through the blending factor γ = max(1 − (w−1)/κ, 0). The converted text omits the denominator κ, creating a transcription singularity, though it states that γ vanishes by week 10. Fourth, Super Bowl 51 serves as an outlier audit: competing models assigned New England approximately 0.1% win probability late in the third quarter (a 1-in-1000 tail event), whereas iWinRNFL assigned 2.1% (1-in-50). Because a well-calibrated model expects a 0.1% event to occur roughly once per thousand instances, observing it once is not mathematical failure; however, iWinRNFL’s more conservative assignment avoids the overconfidence trap that can induce a trailing team to abandon optimal play-calling under despair. Finally, the plus-minus extension discussed in the conclusion faces severe collinearity because personnel overlap across snaps makes individual player contributions statistically inseparable without strong assumptions. These gray zones imply that the model is well-calibrated in-sample across the probability range but vulnerable to boundary effects at the game clock extremes, early-season rating sparsity, overtime regime changes, and unmodeled physical layer shifts such as weather or fatigue.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model operators, units, and exact equations from the source:

[SECTION 3, EQ. 1] Logistic regression for home-team win indicator H ∈ {0,1}:
\[
\Pr(H=1 \mid \mathbf{x}) = \frac{\exp(\mathbf{w}^{\top}\mathbf{x})}{1 + \exp(\mathbf{w}^{\top}\mathbf{x})}
\]
Output units: dimensionless probability in [0,1]. Inputs x are standardized independent variables.

Independent variables (10 core, Section 3): (1) ball possession team, binary home vs. visiting; (2) score differential home − visiting, units: points; (3) home timeouts remaining, count; (4) away timeouts remaining, count; (5) time elapsed since game start, seconds; (6) down of possessing team, ordinal {1,2,3,4}; (7) field position, distance covered from own yard line, yards; (8) yards-to-go for a first down, yards; (9) ball possession time of home offense, seconds; (10) rating differential home − visiting, points.

Interaction terms: possession × down; possession × yards-to-go; possession × field position; time elapsed × rating differential; time elapsed × score differential.

[SECTION 3, TABLE 1 & text] Standardized coefficients with significance p < 0.001 (***): rating differential +1.72; time elapsed × rating differential −0.65; score differential +1.41; time elapsed × score differential +2.88. Possession team +1.41; home timeouts +0.06; away timeouts −0.06; ball possession time −0.46; field position +0.43; yards-to-go −0.39; down effects negative for higher downs. Intercept fixed at 0 because home-field advantage is absorbed into the rating differential (Appendix A).

Time-varying coefficient derivation (dimensionless elapsed time t normalized to [0,1]):
\[
\beta_{\text{rating}}(t) = 1.72 - 0.65\,t, \qquad
\beta_{\text{score}}(t) = 1.41 + 2.88\,t.
\]
Assumption: t = 0 at kickoff, t = 1 at regulation end. Breakdown: as t → 1, β_rating may approach zero or negative values if extrapolation beyond observed range occurs; the model is only validated within regulation.

[SECTION 4, EQ. 2] Brier score:
\[
\beta = \frac{1}{N}\sum_{i=1}^{N}(\pi_i - y_i)^2, \quad \beta \in [0,1],
\]
where πᵢ is predicted probability and yᵢ ∈ {0,1} is realized outcome. Lower β = better calibrated probability forecasts. Reported values: iWinRNFL β = 0.158; naive Bayes β = 0.163; feedforward neural network β = 0.156.

Climatology reference [SECTION 4]: p_clim = 0.57 (fraction of home wins in dataset), β_base = 0.26. Skill improvement is relative to this unconditional baseline.

[APPENDIX A] Team rating estimation. Regulation-season ratings solve:
\[
\min_{h,\{R_i\}} \sum_{m=1}^{N} \bigl(\mu_m - (h + R_{H_m} - R_{V_m})\bigr)^2
\quad \text{subject to} \quad \sum_i R_i = 0,
\]
where μ_m is home win margin in matchup m, h is home edge in points, and R_i is team i’s rating in points relative to league average.

Preseason blending uses an exogenous expected win count c_i (16-game season):
\[
\mathbb{E}[W_i] = \sum_{j=1}^{16} \Pr(i \succ j), \qquad
\Pr(i \succ j) = \Phi\!\left(\frac{h + \rho_i - \rho_j}{14}\right),
\]
with 14 denoting the approximate standard deviation of point margin in points and Φ the standard normal CDF. The blended rating after week w−1 is:
\[
\widetilde{R}_i(w) = \gamma \rho_i + (1-\gamma) R_i(w), \qquad
\gamma = \max\left(1 - \frac{w-1}{\kappa}, 0\right),
\]
with γ = 0 for w ≥ 10 (preseason influence vanishes). Transcription singularity: the exact weekly denominator κ is omitted from the converted text, so the precise decay schedule cannot be recovered without the PDF.

Breakdown/singularity regimes: (i) end-of-half/game where drive-time/drive-yard linearity collapses (Figure 1); (ii) overtime, where training sparsity degrades accuracy; (iii) week 1, where no season matchups exist and ratings rest entirely on preseason expectation; (iv) extreme score differentials near clock zero, where boundary effects induce nonlinearities not captured by linear interactions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of iWinRNFL traces to Stern (1991), who modeled NFL win margin as normal with mean equal to the pregame expected margin and standard deviation near 14 points, establishing the Gaussian foundation later used for preseason win-probability conversion in Appendix A. Winston’s Mathletics framework extended this to in-game states using field position, down, and distance; Burke’s Win Probability Added operationalized expected points at the play level and formed the basis for ESPN’s proprietary ensemble. Lock and Nettleton (2014) introduced a random-forest in-game model using covariates closely overlapping iWinRNFL’s ten variables, motivated by nonlinear feature interactions. Schneider’s market-implied engine used real-time wagering data to derive probabilities, while Rosenheck proposed Monte Carlo simulation under alternative overtime rules, noting computational expense and post-game orientation. PFR’s expected-points model and the broader WPA literature complete the ancestry.

The multi-week trap is structural: team ratings are re-estimated after every week using all prior matchups, but early-season observations are too few to stabilize R_i(w), forcing reliance on preseason expectations that decay only linearly and vanish completely by week 10. A second trap is sport evolution: the paper explicitly warns that rule changes and strategic shifts—such as the NFL’s move toward pass-first offenses or the NBA’s three-point explosion—alter how "safe" a given score differential is, which would directly change the time × score differential interaction coefficient. A third trap is the end-of-game boundary: finite clock duration induces nonlinearities that linear models miss, which is why more complex models were tested but offered only marginal Brier-score gains late in the game (intervals 11 and 12). Consequently, the model cannot be treated as timeless; it requires periodic recalibration as the underlying sport changes, and its historical validity decays if the relationship between elapsed time, possession, and scoring shifts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how coaches and players, facing a low model-assigned win probability, revert to conservative, habitual play-calling—protecting the ball, avoiding deep passes, and managing the clock—because the perceived cost of failure outweighs the marginal benefit of aggression. iWinRNFL’s conservative assignment of 2.1% to New England late in Super Bowl 51 (versus 0.1% from competing models) mitigates this regression by refusing to declare the game effectively over; a 1-in-50 chance preserves strategic urgency, whereas a 1-in-1000 declaration can induce the trailing team to abandon optimal risk-taking prematurely.

The counter-trap operates on the leading side. As β_score(t) grows through the game, the model treats the score differential as increasingly determinative. But a leading team that recognizes its high win probability may deliberately stall, reduce offensive snaps, and shorten the game, thereby shrinking the trailing team’s remaining possession opportunities. The logistic model assumes that the current state transitions according to historical possession patterns; if the leading team endogenously shortens the game, the effective scoring rate and possession count change in ways the covariate vector does not capture, creating a self-fulfilling conservatism that the model may underweight.

The clock is both a covariate and a strategic constraint. Time elapsed enters linearly in the base model but interacts nonlinearly with possession, down, and field position near the end of halves. The two-minute drill alters the value of a yard and a down relative to early-game conditions, a boundary effect visible in Figure 1’s collapsing R². The feedforward neural network captures only incremental improvement here (Figure 6), indicating that the clock-driven regime shift is real but difficult to encode without explicit nonlinear state augmentation. A recursive theory of mind must therefore model not only the physical state but the belief state: if both teams observe iWinRNFL’s probabilities, their risk preferences update, and the actual transition dynamics drift away from the historical play-by-play distribution used to train w. The model’s calibration (slope ≈ 1) suggests this drift is modest on average, but it is largest precisely in the crisis regimes where recursive reasoning matters most.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: iWinRNFL uses time elapsed and possession time but contains no explicit player-fatigue, snap-count, or injury covariate. Biomechanical fatigue accumulates across a game and is non-uniformly distributed; a defense that has played 70 snaps cannot generate the same pressure or coverage quality as at snap 10. Because field position, yards-to-go, and down effects are estimated from pooled historical snaps, they assume stationary player physiology. Veto condition: if defensive cumulative snaps exceed a fatigue threshold or a skill-position player exits mid-game, the conditional distribution of yards gained given down and field position shifts, invalidating the coefficients on down, yards-to-go, and field position.

Weather layer: The source text notes that modern offenses rely more on the passing game than a decade ago, but the model contains no weather, temperature, wind, or precipitation variable. Wind alters the pass/run decision calculus and the expected yardage distribution for a given field position and down. Veto condition: exogenous atmospheric conditions that suppress the passing game change the mapping from (down, field position, yards-to-go) to expected points, so the interaction terms involving possession and field position become miscalibrated.

Overtime/rules layer: Regulation ends at t = 1, but overtime introduces a distinct possession and scoring structure with sparse training data. The paper states the model performs poorly in overtime due to data sparsity. Veto condition: once regulation expires and the game enters overtime, the state space and termination rules change; the logistic coefficients estimated on regulation snaps are no longer valid priors.

Adjudication: The model is physically and contextually vetoed whenever any cross-layer variable—fatigue, weather, injury, overtime rules, or stadium environment—creates a regime shift not represented in the ten-dimensional covariate vector. Within regulation, with stable rosters and typical weather, the model’s assumptions hold; outside those bounds, its probability outputs are not defensible without re-estimation or feature augmentation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios with counterfactual predictions:

Scenario 1 — Overtime regime shift. Veto condition: regulation clock reaches 0:00 with a tied score, forcing the game into overtime. Verifiable from play-by-play: the transition from 4th-quarter clock to OT coin toss. Rationale: the source text states overtime performance is poor due to sparse OT snaps. Prediction: conditional on OT entry, iWinRNFL’s home-team win probability will be drawn from regulation-trained coefficients and will not track actual OT win frequencies; the Brier score within OT will exceed 0.158 significantly (e.g., >0.22), and the reliability curve will depart from y = x with systematic over- or under-confidence depending on which team receives the first possession.

Scenario 2 — Week 1 preseason dominance. Veto condition: season week w = 1, where no prior matchups exist (N = 0 in the rating regression) and γ = 1, so the model output rests entirely on preseason expected win counts ρ_i rather than observed season performance. Verifiable from schedule data: week 1 games have zero prior season observations for all teams. Prediction: if preseason expectations are materially wrong (e.g., due to unreported offseason roster changes), teams assigned win probabilities above 0.70 in week 1 will win at an observed rate more than 0.10 below 0.70 across the first four weeks, demonstrating overconfidence induced by the unobserved rating singularity.

Scenario 3 — End-of-half boundary violation. Veto condition: fewer than two minutes remain in a half, the possessing team trails by eight points or fewer, and the team employs a no-huddle, pass-heavy strategy. Verifiable from play-by-play: clock < 2:00 in 2nd or 4th quarter, score differential ≤ 8, and shotgun/pass formation frequency above the season median. Rationale: Figure 1 shows the linear drive-time/drive-yard relationship explains far less than 42% of variance near half/game end. Prediction: the model’s implied expected points for the final drive will understate actual points scored by more than 15% on average in these boundary possessions, because the logistic additive structure cannot capture the nonlinear urgency and compressed clock dynamics of the two-minute drill.
</RLVR_COUNTERFACTUAL_VETOES>
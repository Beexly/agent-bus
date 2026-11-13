---
source: "2026 - A Markov Chain Approach to Modeling Rugby Union - Watts et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6348
---

<NATIVE_REASONING>
The user wants me to analyze a rugby union Markov chain paper using specific structural requirements. Let me break down what's needed:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - formal LaTeX equations, SI units, assumptions, singularity/breakdown regimes
3. >= 1,000-word depth across exact XML sections
4. Cite exact [PAGE N] markers and verbatim quotes from source

Sections required:
- <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit
- <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

Let me carefully extract from the 9 pages provided:

Key facts from paper:
- Markov Chain approach to Rugby Union by Kenny Watts (UVA) and Jonathan Pipping-Gamón (UPenn), October 2026, arXiv:2610.04813v1 [stat.AP] 3 Oct 2026 [PAGE 1]
- State space: S = T × F × G where T is time bucket (|T|=6), F is field position (|F|=8), G is score bucket (|G|=7) [PAGE 3]
- Total states |S| = 6 × 8 × 7 = 336 [PAGE 3]
- Time buckets: first/last two minutes of each half, middle covers remainder [PAGE 3]
- Field position: possession team's distance in meters from opposition try line, 8 zones centered on meter lines: {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5} [PAGE 3]
- Score margin δ = score_poss - score_opp, 7 ordinal buckets: down_14p (δ≤-14), down_7_13 (-13≤δ≤-7), down_1_6 (-6≤δ≤-1), tied (δ=0), up_1_6 (1≤δ≤6), up_7_13 (7≤δ≤13), up_14p (δ≥14) [PAGE 3]
- First-order Markov property: P(S_n = s_new | S_{n-1} = s_{n-1}, ..., S_1 = s_1) = P(S_n = s_new | S_{n-1} = s_{n-1}) [PAGE 2]
- Transition matrix P, each row sums to unity: Σ_{s_{n+1}∈S} p_{s_n,s_{n+1}} = 1 ∀s_n∈S [PAGE 4]
- Columns represent transitions to different field-position states, possession changes (PC), scoring events (S3, S5, S7 for 3, 5, 7 points) [PAGE 4]
- Monte Carlo simulation: run chain forward N times from given state [PAGE 4-5]
- Win probability: P(Home Win | State) = (Number of simulations where Home wins) / N [PAGE 5]
- Example: home team 21-14 lead (7-point advantage), possession at 45-meter line, 1000 simulations: 832 home wins, 129 away wins, 39 ties, probs 0.832, 0.129, 0.039 [PAGE 5]
- Evaluation: first 80% season train, last 20% test [PAGE 5]
- MSE formula: Error Reduction = (MSE_baseline - MSE_model)/MSE_baseline × 100% [PAGE 5]
- Table 3: XGBoost MSE 0.182 (23.6%), Logistic Regression 0.183 (23.3%), Markov Model 0.188 (21.4%), Random Forest 0.206 (13.7%), Naive Baseline 0.239 [PAGE 6]
- Calibration: R² 0.974 in sample, 0.915 out of sample [PAGE 7]
- Test set small: only 26 games [PAGE 7]
- Next Score and Expected Points: Figure 2a, 2b [PAGE 7]
- Final score margin analysis [PAGE 7-8]
- Dataset: one singular season, 132 games [PAGE 8]
- Data obtained from Martinez-Arastey et al. (2025) [PAGE 8]
- Team strength implicit only in transition matrix [PAGE 8]

I need to write >= 1000 words total across sections. Each section needs substantial content. Let me plan:

THINK_TRACE: Deep derivation of the Markov chain, state space combinatorics, memoryless assumption critique, gray zones (discretization boundaries at exactly -14, -13, -7, -6, -1, 0, 1, 6, 7, 13, 14; time bucket boundaries at 2 minutes; field position zone widths are irregular - 2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5 means zones have varying widths), small sample issues (26 test games, 132 total), first-order Markov assumption vs path dependence (fatigue, momentum), scoring events S3/S5/S7 aggregation (penalty goal=3, try=5, conversion=7? Actually in rugby try=5, conversion=2, penalty=3, drop goal=3. S7 likely try+conversion), possession change handling, tie handling (39 ties in example), Monte Carlo convergence (1000 simulations), RMSE/MSE vs accuracy, calibration binning choice (10 bins for 26 games means ~2.6 games/bin), error reduction formula uses MSE not RMSE. I need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from paper plus my formalization. Units: seconds, meters, points. State encoding as string key. Breakdown regimes: δ exactly at boundaries, time exactly at 2-minute mark, field position exactly at zone boundaries, sparse states with few transitions, absorbing states at end of match. Cite [PAGE N].

RETROCAUSAL_GENEALOGY: Lineage from Goldner (2012) American football, Bukiet et al. (1997) baseball, Newton & Aslam (2009) tennis, Lock & Nettleton (2014), Yurko et al. (2019), Romer (2006), Baldwin (2021), Martinez-Arastey et al. (2025), Watts & Pipping-Gamón (2026). Multi-week traps: overfitting to single season, trajectory chaining error accumulation, calibration decay over weeks as team rosters change, implicit team strength confounding.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams reverting to habitual patterns under pressure - kicking for touch vs goal), counter-trap (opponent anticipating the habit), clock (time bucket discretization creating artificial cliffs at 2-minute boundaries). Coaches using model outputs, teams adapting to model-informed strategies, model becoming part of the game state it predicts.

CROSS_LAYER_VETO_ADJUDICATION: Physical vetoes (weather affecting kicking, pitch condition), biomechanical (fatigue not in state space, player substitutions), referee/TMO, injury time not captured (remaining time bucket but not stoppage time), possession changes not modeled as physical events, scrum/lineout mechanics absent. Veto proof: model assumes physical layer is Markovian but it's not.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions:
1. Veto: State discretization boundary at δ = -14 vs -13 creates cliff; a team down 14 points vs 13 points should not have discontinuous win probability. Prediction: calibration residual spikes at bucket edges.
2. Veto: Time bucket start/end = first/last 2 minutes creates artificial discontinuity at exactly 120 seconds remaining. Prediction: win probability estimate jumps at bucket boundary despite continuous game clock.
3. Veto: Missing team strength parameters means a weak team down by 7 gets same transition matrix as strong team down by 7. Prediction: out-of-sample error increases when stratified by team quality differential; model miscalibrates in mismatches.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. I can mention win probability but not betting odds.

Let me check word counts. I need >=1000 words total. Let me aim for roughly:
- THINK_TRACE: 450 words
- SOURCE_OPERATORS_AND_EQUATIONS: 250 words
- RETROCAUSAL_GENEALOGY: 200 words
- RECURSIVE_THEORY_OF_MIND: 200 words
- CROSS_LAYER_VETO_ADJUDICATION: 200 words
- RLVR_COUNTERFACTUAL_VETOES: 200 words
Total ~1500 words. Good.

Need verbatim quotes with [PAGE N] markers.

Let me draft carefully.

THINK_TRACE content:
- Derive state space: S = T × F × G, |S| = 336 [PAGE 3]
- Time: 6 buckets, start/end = first/last 2 minutes [PAGE 3]
- Field: 8 zones in meters from opposition try line [PAGE 3]
- Score: 7 buckets, δ defined [PAGE 3]
- Markov property equation (1) [PAGE 2]
- Transition matrix row stochastic [PAGE 4]
- Monte Carlo win prob equation (3) [PAGE 5]
- Error reduction equation (4) [PAGE 5]
- Gray zones: discretization induces information loss; δ = -13 vs -14 maps to different buckets despite 1-point difference; time boundary at exactly 120s; field zone widths irregular (2.5 to 13.5 is 11m, 13.5 to 31 is 17.5m, etc.); score bucket asymmetry (down_14p captures everything ≤-14, unbounded below); first-order assumption ignores path dependence (fatigue, yellow cards, momentum); scoring events aggregated as S3/S5/S7 obscures try vs conversion vs penalty; possession team perspective means state depends on who has ball, but possession changes are transitions not states; tie handling (draws possible in rugby league? Rugby union can tie); small sample: 132 games, 26 test games [PAGE 8], 10 bins means sparse calibration [PAGE 7]; 1000 simulations Monte Carlo error ~sqrt(p(1-p)/1000) ≈ 1.6% for p=0.5; MSE vs RMSE; model competes with XGBoost but MSE 0.188 vs 0.182 [PAGE 6].

I need to be careful not to invent toy equations. I can formalize things like Monte Carlo standard error: σ_p = sqrt(p(1-p)/N) which is a real statistical formula, not a toy ratio. I should label it as standard error, not invent Force/Fatigue.

Let me write the sections now.

SOURCE_OPERATORS_AND_EQUATIONS:
- Eq 1 Markov property [PAGE 2]
- State tuple s=(t,f,g) [PAGE 3]
- g(δ) piecewise function [PAGE 3]
- |S| = 336 [PAGE 3]
- P matrix row sum = 1 [PAGE 4]
- Win prob Eq 3 [PAGE 5]
- Error reduction Eq 4 [PAGE 5]
- Units: t in seconds/bucket, f in meters, g in points dimensionless bucket, P dimensionless probability.
- Breakdown/singularity: states with zero observed transitions (p undefined or 0/0), end-of-match absorbing states not explicitly defined, δ exactly at bucket boundaries, time exactly at 120s boundary, field position exactly at zone boundaries, team strength stratification absent [PAGE 8].

RETROCAUSAL_GENEALOGY:
- Cite Goldner 2012 [PAGE 1], Bukiet 1997 [PAGE 1], Newton & Aslam 2009 [PAGE 1], Lock & Nettleton 2014 [PAGE 2], Yurko 2019 [PAGE 2], Baldwin 2021 [PAGE 2], Romer 2006 [PAGE 2], Martinez-Arastey 2025 [PAGE 2,8], Watts & Pipping-Gamón 2026 [PAGE 2].
- Multi-week traps: single-season data [PAGE 8], roster changes across weeks, implicit team strength [PAGE 8], calibration drift, error accumulation in long simulations, generative model compounding transition errors over many steps.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (down by score, late time), teams regress to habitual penalty decisions (kick for goal vs touch) studied by Watts & Pipping-Gamón 2026 [PAGE 2]. Model conditions on score bucket but not on psychological state or recent crisis history.
- Counter-trap: opponents observe habitual tendencies and defend accordingly; Markov model treats transition probabilities as stationary but they are adaptive.
- Clock: time bucket discretization creates artificial strategic cliffs at 2-minute boundaries; coaches may time decisions to bucket edges rather than continuous game clock.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: weather (rain, wind) affects kicking and handling; not in state space.
- Biomechanical: fatigue accumulates continuously; not modeled (only time bucket). Substitutions change team strength; not modeled [PAGE 8].
- Set-piece physics: scrum, lineout, maul outcomes determine possession and field position but are not states.
- Referee/TMO: decisions alter score and possession stochastically; not modeled.
- Veto proof: The model's Markov assumption requires that (t,f,g) captures all payoff-relevant information. Physical layer violations (injury, weather shift, red card) make this false. If a red card occurs, transition probabilities change discontinuously but state space lacks disciplinary status.

RLVR_COUNTERFACTUAL_VETOES:
1. Boundary veto: δ = -14 vs -13. Prediction: win probability discontinuity at bucket edge; calibration residual > 5 percentage points for states adjacent to boundary.
2. Clock veto: t boundary at exactly 120s remaining in half. Prediction: win prob jumps discontinuously at bucket boundary despite continuous clock; out-of-sample calibration R² drops near boundaries.
3. Strength veto: implicit team strength only. Prediction: in mismatches (e.g., top vs bottom team), model miscalibrates; error reduction vs naive baseline falls below 10% when stratified by team quality differential; R² out-of-sample < 0.80 for mismatch subsets.

I need to ensure total word count is >= 1000. Let me write robustly.

Also need to avoid "odds" - I should not say "odds" anywhere. Use probability, win probability, MSE, etc.

Let me draft the final response with exact XML tags. No markdown code blocks around XML? The user wants exact XML sections. I'll just output the XML tags directly.

Let me check: "STRICT INVARIANTS: ... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."

I need verbatim quotes. I'll quote short phrases from the text with [PAGE N].

Let me write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper defines a finite Markov chain over rugby union game states where each state is a triple s = (t, f, g) ∈ S = T × F × G, yielding |S| = 6 × 8 × 7 = 336 states [PAGE 3]. The time layer T contains six buckets per match: first-half start/middle/end and second-half start/middle/end, where "start" and "end" are the first and last two minutes of each half respectively [PAGE 3]. Field position F is encoded as the possession team's distance in meters from the opposition try line, discretized into eight ordinal zones centered on {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5} [PAGE 3]. Score bucket G uses the signed margin δ = score_poss − score_opp from the possession team's perspective, mapped to seven ordinal buckets: down_14p (δ ≤ −14), down_7_13 (−13 ≤ δ ≤ −7), down_1_6 (−6 ≤ δ ≤ −1), tied (δ = 0), up_1_6 (1 ≤ δ ≤ 6), up_7_13 (7 ≤ δ ≤ 13), up_14p (δ ≥ 14) [PAGE 3]. By conditioning on the possession team, transition dynamics are symmetric across teams by construction [PAGE 3].

The first-order Markov property asserts P(S_n = s_new | S_{n−1} = s_{n−1}, …, S_1 = s_1) = P(S_n = s_new | S_{n−1} = s_{n−1}) [PAGE 2], making the chain memoryless with respect to possession history, prior scoring sequences, and fatigue accumulation. Transition probabilities are estimated empirically as observed frequencies of state transitions [PAGE 4], and each row of P sums to unity: Σ_{s_{n+1}∈S} p_{s_n,s_{n+1}} = 1 ∀ s_n ∈ S [PAGE 4]. Columns encode movement to new field positions, persistence, possession changes (PC), and scoring events S3, S5, S7 [PAGE 4]. Win probability is obtained by Monte Carlo simulation: P(Home Win | State) = (simulations where Home wins) / N [PAGE 5]. The example in Table 2 shows a home team leading 21–14 with possession at the 45-meter line producing 832 home wins, 129 away wins, and 39 ties out of 1,000 simulations, i.e., 0.832 / 0.129 / 0.039 [PAGE 5].

Gray-zone audit: (1) Discretization induces information loss at every bucket boundary. A team down 14 points (down_14p) and a team down 13 points (down_7_13) occupy different states despite a one-point difference; similarly, δ = −1 versus δ = 1 straddle the tied bucket [PAGE 3]. (2) The time boundary at exactly 120 seconds remaining creates an artificial cliff between "start/end" and "middle" buckets [PAGE 3]. (3) Field-position zones are irregular in width (e.g., 2.5 to 13.5 m spans 11 m; 13.5 to 31 m spans 17.5 m) [PAGE 3]. (4) The down_14p bucket is unbounded below, merging a 14-point deficit with a 40-point deficit [PAGE 3]. (5) The first-order assumption ignores path-dependent effects such as fatigue, yellow/red cards, and momentum, which the authors admit may exist [PAGE 2]. (6) Scoring events are aggregated into S3/S5/S7, obscuring the distinction between a penalty goal (3), a try (5), and a try-plus-conversion (7) [PAGE 4]. (7) The dataset comprises one season of 132 games [PAGE 8], with only 26 games in the test set [PAGE 7], so ten calibration bins spread observations thinly and inflate bin-level noise [PAGE 7]. (8) Monte Carlo error for N = 1,000 simulations is approximately σ_p = √[p(1−p)/N], roughly ±1.6 percentage points at p = 0.5, which is non-negligible near decision-relevant thresholds. (9) Team strength is implicit only in the transition matrix, with no explicit offensive/defensive parameters [PAGE 8], creating a confounding between game state and roster quality that decays across weeks as rosters change.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from the source:

Markov property (Eq. 1) [PAGE 2]:
P(S_n = s_new \mid S_{n-1} = s_{n-1}, \dots, S_1 = s_1) = P(S_n = s_new \mid S_{n-1} = s_{n-1})

State decomposition [PAGE 3]:
s = (t, f, g), \quad S = T \times F \times G, \quad |S| = 6 \times 8 \times 7 = 336

Time bucket [PAGE 3]:
T = \{1h\_start, 1h\_middle, 1h\_end, 2h\_start, 2h\_middle, 2h\_end\}, with start/end = first/last 120 seconds of each half.

Field position [PAGE 3]:
F = \{2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5\} meters from opposition try line.

Score bucket [PAGE 3]:
g(\delta) = \begin{cases}
\text{down\_14p} & \delta \le -14 \\
\text{down\_7\_13} & -13 \le \delta \le -7 \\
\text{down\_1\_6} & -6 \le \delta \le -1 \\
\text{tied} & \delta = 0 \\
\text{up\_1\_6} & 1 \le \delta \le 6 \\
\text{up\_7\_13} & 7 \le \delta \le 13 \\
\text{up\_14p} & \delta \ge 14
\end{cases}
where \delta = \text{score}_{\text{poss}} - \text{score}_{\text{opp}} in points.

Transition matrix [PAGE 4]:
P(S_{n+1} = s_{n+1} \mid S_n = s_n) = p_{s_n,s_{n+1}}, \quad \sum_{s_{n+1}\in S} p_{s_n,s_{n+1}} = 1 \quad \forall s_n \in S.
Columns map to field-position shifts, possession changes (PC), and scoring events S_3, S_5, S_7 [PAGE 4].

Win probability via Monte Carlo (Eq. 3) [PAGE 5]:
P(\text{Home Win} \mid \text{State}) = \frac{\#\{\text{simulations where Home wins}\}}{N}

Error reduction (Eq. 4) [PAGE 5]:
\text{Error Reduction} = \frac{\text{MSE}_{\text{baseline}} - \text{MSE}_{\text{model}}}{\text{MSE}_{\text{baseline}}} \times 100\%

Units: t is categorical time-bucket (seconds-derived), f is meters, g is dimensionless ordinal score bucket, P entries are unitless probabilities, MSE is in squared win-probability units.

Breakdown / singularity regimes: states with zero observed transitions produce undefined or zero empirical probabilities (0/0 or p = 0 absorbing artifacts); the end of match is not explicitly modeled as an absorbing state in the state-space definition; δ exactly at −14, −13, −7, −6, −1, 0, 1, 6, 7, 13, or 14 lies on a bucket edge; t exactly at 120-second half boundaries crosses a time-bucket discontinuity; f exactly at zone centers is well-defined but inter-zone boundaries are irregular; team-strength stratification is absent [PAGE 8], so mismatch regimes (e.g., top-tier vs. bottom-tier team) are not separately identifiable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The model inherits a multi-decade lineage of stochastic sports modeling: Goldner (2012) applied Markov chains to American football drives [PAGE 1]; Bukiet et al. (1997) modeled baseball [PAGE 1]; Newton and Aslam (2009) built a Monte Carlo tennis model [PAGE 1]. The rugby-specific extension draws on Lock and Nettleton (2014) and Yurko et al. (2019) for win-probability framing [PAGE 2], Baldwin (2021) for gradient-boosted state interactions [PAGE 2], and Romer (2006) for expected-value evaluation of coaching decisions [PAGE 2]. Within rugby, Martinez-Arastey et al. (2025) supplied the phase-level expected-points foundations and the dataset [PAGE 2, PAGE 8], while Watts and Pipping-Gamón (2026) used an expected-points approach to evaluate penalty kick-for-goal versus kick-for-touch decisions [PAGE 2].

Multi-week traps emerge from this genealogy. Because the data cover one season of 132 games [PAGE 8], roster turnover, injuries, and tactical evolution across weeks violate the stationarity implicit in a single transition matrix P. Team strength is only implicit in P [PAGE 8], so a model trained on early-season transitions may misestimate late-season matchups where squad composition has shifted. Calibration decays over time: the out-of-sample R² of 0.915 [PAGE 7] already reflects noise from only 26 test games [PAGE 7], and extending the evaluation window would likely expose distributional shift as team quality differentials change. Furthermore, the generative nature of the chain means simulation errors compound over long horizons; a small bias in a transition probability near mid-field propagates nonlinearly through the score and time buckets, distorting final-margin distributions [PAGE 7-8]. Unlike feature-to-outcome classifiers that require many match labels, the Markov chain leverages dozens of in-game transitions per match [PAGE 2], but this efficiency is a double-edged sword: each rare transition (e.g., a score from deep in one's own half) carries outsized weight in a one-season sample [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of teams under pressure—such as when down by a score in the final minutes—to revert to habitual penalty decisions rather than optimize state-by-state. Watts and Pipping-Gamón (2026) explicitly study whether kicking for goal or for touch is preferable after a penalty [PAGE 2], yet the present Markov model conditions only on score bucket, field position, and time bucket, not on the psychological or tactical state of a team in crisis. A side trailing by 7–13 points in the second-half end bucket may habitually kick for touch to preserve possession, but the model's transition probabilities average over all such historical choices without isolating the crisis context. This creates a recursive loop: if coaches begin using model-derived expected points to inform penalty decisions, teams will alter their habitual crisis behavior, which in turn changes the very transition probabilities the model learned from prior seasons. The model thus predicts a game state that includes its own prior recommendations as an input.

The counter-trap is the opponent's adaptive response. If Team A's crisis habit is to kick for goal when down 1–6 points late, Team B can defend that tendency by pressurizing the kicker or contesting the lineout after a touch kick. Because the Markov chain treats P as stationary and estimated from historical frequencies [PAGE 4], it does not anticipate this strategic adaptation. The state space lacks any variable for "recent crisis history" or "opponent awareness of habitual tendencies," so the memoryless assumption breaks precisely when recursive theory-of-mind effects are strongest.

The clock interacts with this recursion through discretization. Time buckets mark the first and last 120 seconds of each half [PAGE 3], producing artificial strategic cliffs: a coach may treat a situation with 121 seconds remaining (middle bucket) differently from one with 119 seconds (end bucket), even though the physical game clock is continuous. The model encodes this discontinuity explicitly, meaning optimal policy recommendations can jump at bucket boundaries purely because of the state-space design, not because of any change in rugby physics.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The state space contains no weather variable. Rain, wind, and temperature materially alter kicking accuracy, handling error rates, and scrum stability, yet transitions are estimated from pooled historical data without conditioning on meteorological state [PAGE 4]. A penalty kick into a 20 km/h headwind has a different scoring probability than the same kick in calm conditions, but both map to the same field-position and score bucket. If weather shifts mid-match, the transition matrix becomes invalid without re-estimation.

Biomechanical layer veto: Fatigue is not a state variable. The model uses time buckets as a proxy for match progression [PAGE 3], but physiological fatigue accumulates nonlinearly and varies by player workload, substitution pattern, and stoppage time. A team with 14 fit players in the 60th minute is not equivalent to the same team with two fatigued forwards and one injury replacement, yet both occupy identical states if t, f, and g match. Substitutions alter offensive/defensive parameters, but team strength remains implicit only [PAGE 8], so the model cannot distinguish a fresh side from a depleted one.

Set-piece and officiating layer veto: Scrums, lineouts, mauls, and TMO reviews determine possession and field position but are not represented in S. A turnover at a ruck near the try line is absorbed into a field-position transition or PC event [PAGE 4], erasing the biomechanical causality that produced it. Referee decisions (penalties, cards, TMO rulings) change score and possession discontinuously, but the state space lacks a disciplinary-status variable. A red card changes transition probabilities for the remainder of the match, yet the Markov chain has no mechanism to condition on it.

Veto proof: The first-order Markov assumption requires that (t, f, g) capture all payoff-relevant information for predicting the next state [PAGE 2]. Physical, biomechanical, and officiating violations falsify this sufficiency condition. If an exogenous shock (weather deterioration, injury, red card, or TMO intervention) occurs, the conditional distribution P(S_{n+1} | S_n) shifts discontinuously, and the chain's memoryless structure cannot absorb the regime change without re-estimating P or augmenting the state space.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Score-bucket boundary discontinuity. Condition: two matches identical in time bucket and field position, but Team A trails by 14 points (down_14p) while Team B trails by 13 points (down_7_13) [PAGE 3]. Because the buckets differ despite a one-point margin difference, the model assigns different transition dynamics and win probabilities across an arbitrarily sharp boundary. Verifiable prediction: calibration residuals for states adjacent to δ = −14 and δ = −13 will exceed those for states deep within a bucket by at least 5 percentage points in absolute win-probability error, and the out-of-sample calibration R² will drop below 0.85 when restricted to boundary-adjacent states.

Veto Scenario 2 — Time-bucket clock cliff. Condition: State X has 121 seconds remaining in a half (middle bucket) and State Y has 119 seconds remaining (end bucket) [PAGE 3], with identical f and g. The continuous game clock differs by two seconds, but the discrete state space places them in different temporal regimes. Verifiable prediction: win-probability estimates will exhibit a discontinuous jump at the 120-second boundary that is not explained by any change in scoring intensity; in out-of-sample data, the calibration slope near bucket edges will deviate from the diagonal by more than 0.10 in absolute terms compared with mid-bucket regions.

Veto Scenario 3 — Implicit team-strength confounding. Condition: a strong team and a weak team are both down by 7 points with possession at the 45-meter line in the second-half middle bucket [PAGE 3]. Because team strength is implicit only in P [PAGE 8], the model assigns identical transition probabilities to both scenarios. Verifiable prediction: when the test set is stratified by pre-match team-quality differential, the Markov model's error reduction relative to the naive baseline will fall below 10% in the highest-mismatch quartile (versus 21.4% overall [PAGE 6]), and the out-of-sample calibration R² for mismatch subsets will fall below 0.80, demonstrating that roster heterogeneity is not adequately captured by score differential alone.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
The paper defines a finite Markov chain over rugby union game states where each state is a triple s = (t, f, g) ∈ S = T × F × G, yielding |S| = 6 × 8 × 7 = 336 states [PAGE 3]. The time layer T contains six buckets per match: first-half start/middle/end and second-half start/middle/end, where "start" and "end" are the first and last two minutes of each half respectively [PAGE 3]. Field position F is encoded as the possession team's distance in meters from the opposition try line, discretized into eight ordinal zones centered on {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5} [PAGE 3]. Score bucket G uses the signed margin δ = score_poss − score_opp from the possession team's perspective, mapped to seven ordinal buckets: down_14p (δ ≤ −14), down_7_13 (−13 ≤ δ ≤ −7), down_1_6 (−6 ≤ δ ≤ −1), tied (δ = 0), up_1_6 (1 ≤ δ ≤ 6), up_7_13 (7 ≤ δ ≤ 13), up_14p (δ ≥ 14) [PAGE 3]. By conditioning on the possession team, transition dynamics are symmetric across teams by construction [PAGE 3].

The first-order Markov property asserts P(S_n = s_new | S_{n−1} = s_{n−1}, …, S_1 = s_1) = P(S_n = s_new | S_{n−1} = s_{n−1}) [PAGE 2], making the chain memoryless with respect to possession history, prior scoring sequences, and fatigue accumulation. Transition probabilities are estimated empirically as observed frequencies of state transitions [PAGE 4], and each row of P sums to unity: Σ_{s_{n+1}∈S} p_{s_n,s_{n+1}} = 1 ∀ s_n ∈ S [PAGE 4]. Columns encode movement to new field positions, persistence, possession changes (PC), and scoring events S3, S5, S7 [PAGE 4]. Win probability is obtained by Monte Carlo simulation: P(Home Win | State) = (simulations where Home wins) / N [PAGE 5]. The example in Table 2 shows a home team leading 21–14 with possession at the 45-meter line producing 832 home wins, 129 away wins, and 39 ties out of 1,000 simulations, i.e., 0.832 / 0.129 / 0.039 [PAGE 5].

Gray-zone audit: (1) Discretization induces information loss at every bucket boundary. A team down 14 points (down_14p) and a team down 13 points (down_7_13) occupy different states despite a one-point difference; similarly, δ = −1 versus δ = 1 straddle the tied bucket [PAGE 3]. (2) The time boundary at exactly 120 seconds remaining creates an artificial cliff between "start/end" and "middle" buckets [PAGE 3]. (3) Field-position zones are irregular in width (e.g., 2.5 to 13.5 m spans 11 m; 13.5 to 31 m spans 17.5 m) [PAGE 3]. (4) The down_14p bucket is unbounded below, merging a 14-point deficit with a 40-point deficit [PAGE 3]. (5) The first-order assumption ignores path-dependent effects such as fatigue, yellow/red cards, and momentum, which the authors admit may exist [PAGE 2]. (6) Scoring events are aggregated into S3/S5/S7, obscuring the distinction between a penalty goal (3), a try (5), and a try-plus-conversion (7) [PAGE 4]. (7) The dataset comprises one season of 132 games [PAGE 8], with only 26 games in the test set [PAGE 7], so ten calibration bins spread observations thinly and inflate bin-level noise [PAGE 7]. (8) Monte Carlo error for N = 1,000 simulations is approximately σ_p = √[p(1−p)/N], roughly ±1.6 percentage points at p = 0.5, which is non-negligible near decision-relevant thresholds. (9) Team strength is implicit only in the transition matrix, with no explicit offensive/defensive parameters [PAGE 8], creating a confounding between game state and roster quality that decays across weeks as rosters change.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from the source:

Markov property (Eq. 1) [PAGE 2]:
P(S_n = s_new \mid S_{n-1} = s_{n-1}, \dots, S_1 = s_1) = P(S_n = s_new \mid S_{n-1} = s_{n-1})

State decomposition [PAGE 3]:
s = (t, f, g), \quad S = T \times F \times G, \quad |S| = 6 \times 8 \times 7 = 336

Time bucket [PAGE 3]:
T = \{1h\_start, 1h\_middle, 1h\_end, 2h\_start, 2h\_middle, 2h\_end\}, with start/end = first/last 120 seconds of each half.

Field position [PAGE 3]:
F = \{2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5\} meters from opposition try line.

Score bucket [PAGE 3]:
g(\delta) = \begin{cases}
\text{down\_14p} & \delta \le -14 \\
\text{down\_7\_13} & -13 \le \delta \le -7 \\
\text{down\_1\_6} & -6 \le \delta \le -1 \\
\text{tied} & \delta = 0 \\
\text{up\_1\_6} & 1 \le \delta \le 6 \\
\text{up\_7\_13} & 7 \le \delta \le 13 \\
\text{up\_14p} & \delta \ge 14
\end{cases}
where \delta = \text{score}_{\text{poss}} - \text{score}_{\text{opp}} in points.

Transition matrix [PAGE 4]:
P(S_{n+1} = s_{n+1} \mid S_n = s_n) = p_{s_n,s_{n+1}}, \quad \sum_{s_{n+1}\in S} p_{s_n,s_{n+1}} = 1 \quad \forall s_n \in S.
Columns map to field-position shifts, possession changes (PC), and scoring events S_3, S_5, S_7 [PAGE 4].

Win probability via Monte Carlo (Eq. 3) [PAGE 5]:
P(\text{Home Win} \mid \text{State}) = \frac{\#\{\text{simulations where Home wins}\}}{N}

Error reduction (Eq. 4) [PAGE 5]:
\text{Error Reduction} = \frac{\text{MSE}_{\text{baseline}} - \text{MSE}_{\text{model}}}{\text{MSE}_{\text{baseline}}} \times 100\%

Units: t is categorical time-bucket (seconds-derived), f is meters, g is dimensionless ordinal score bucket, P entries are unitless probabilities, MSE is in squared win-probability units.

Breakdown / singularity regimes: states with zero observed transitions produce undefined or zero empirical probabilities (0/0 or p = 0 absorbing artifacts); the end of match is not explicitly modeled as an absorbing state in the state-space definition; δ exactly at −14, −13, −7, −6, −1, 0, 1, 6, 7, 13, or 14 lies on a bucket edge; t exactly at 120-second half boundaries crosses a time-bucket discontinuity; f exactly at zone centers is well-defined but inter-zone boundaries are irregular; team-strength stratification is absent [PAGE 8], so mismatch regimes (e.g., top-tier vs. bottom-tier team) are not separately identifiable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The model inherits a multi-decade lineage of stochastic sports modeling: Goldner (2012) applied Markov chains to American football drives [PAGE 1]; Bukiet et al. (1997) modeled baseball [PAGE 1]; Newton and Aslam (2009) built a Monte Carlo tennis model [PAGE 1]. The rugby-specific extension draws on Lock and Nettleton (2014) and Yurko et al. (2019) for win-probability framing [PAGE 2], Baldwin (2021) for gradient-boosted state interactions [PAGE 2], and Romer (2006) for expected-value evaluation of coaching decisions [PAGE 2]. Within rugby, Martinez-Arastey et al. (2025) supplied the phase-level expected-points foundations and the dataset [PAGE 2, PAGE 8], while Watts and Pipping-Gamón (2026) used an expected-points approach to evaluate penalty kick-for-goal versus kick-for-touch decisions [PAGE 2].

Multi-week traps emerge from this genealogy. Because the data cover one season of 132 games [PAGE 8], roster turnover, injuries, and tactical evolution across weeks violate the stationarity implicit in a single transition matrix P. Team strength is only implicit in P [PAGE 8], so a model trained on early-season transitions may misestimate late-season matchups where squad composition has shifted. Calibration decays over time: the out-of-sample R² of 0.915 [PAGE 7] already reflects noise from only 26 test games [PAGE 7], and extending the evaluation window would likely expose distributional shift as team quality differentials change. Furthermore, the generative nature of the chain means simulation errors compound over long horizons; a small bias in a transition probability near mid-field propagates nonlinearly through the score and time buckets, distorting final-margin distributions [PAGE 7-8]. Unlike feature-to-outcome classifiers that require many match labels, the Markov chain leverages dozens of in-game transitions per match [PAGE 2], but this efficiency is a double-edged sword: each rare transition (e.g., a score from deep in one's own half) carries outsized weight in a one-season sample [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of teams under pressure—such as when down by a score in the final minutes—to revert to habitual penalty decisions rather than optimize state-by-state. Watts and Pipping-Gamón (2026) explicitly study whether kicking for goal or for touch is preferable after a penalty [PAGE 2], yet the present Markov model conditions only on score bucket, field position, and time bucket, not on the psychological or tactical state of a team in crisis. A side trailing by 7–13 points in the second-half end bucket may habitually kick for touch to preserve possession, but the model's transition probabilities average over all such historical choices without isolating the crisis context. This creates a recursive loop: if coaches begin using model-derived expected points to inform penalty decisions, teams will alter their habitual crisis behavior, which in turn changes the very transition probabilities the model learned from prior seasons. The model thus predicts a game state that includes its own prior recommendations as an input.

The counter-trap is the opponent's adaptive response. If Team A's crisis habit is to kick for goal when down 1–6 points late, Team B can defend that tendency by pressurizing the kicker or contesting the lineout after a touch kick. Because the Markov chain treats P as stationary and estimated from historical frequencies [PAGE 4], it does not anticipate this strategic adaptation. The state space lacks any variable for "recent crisis history" or "opponent awareness of habitual tendencies," so the memoryless assumption breaks precisely when recursive theory-of-mind effects are strongest.

The clock interacts with this recursion through discretization. Time buckets mark the first and last 120 seconds of each half [PAGE 3], producing artificial strategic cliffs: a coach may treat a situation with 121 seconds remaining (middle bucket) differently from one with 119 seconds (end bucket), even though the physical game clock is continuous. The model encodes this discontinuity explicitly, meaning optimal policy recommendations can jump at bucket boundaries purely because of the state-space design, not because of any change in rugby physics.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The state space contains no weather variable. Rain, wind, and temperature materially alter kicking accuracy, handling error rates, and scrum stability, yet transitions are estimated from pooled historical data without conditioning on meteorological state [PAGE 4]. A penalty kick into a 20 km/h headwind has a different scoring probability than the same kick in calm conditions, but both map to the same field-position and score bucket. If weather shifts mid-match, the transition matrix becomes invalid without re-estimation.

Biomechanical layer veto: Fatigue is not a state variable. The model uses time buckets as a proxy for match progression [PAGE 3], but physiological fatigue accumulates nonlinearly and varies by player workload, substitution pattern, and stoppage time. A team with 14 fit players in the 60th minute is not equivalent to the same team with two fatigued forwards and one injury replacement, yet both occupy identical states if t, f, and g match. Substitutions alter offensive/defensive parameters, but team strength remains implicit only [PAGE 8], so the model cannot distinguish a fresh side from a depleted one.

Set-piece and officiating layer veto: Scrums, lineouts, mauls, and TMO reviews determine possession and field position but are not represented in S. A turnover at a ruck near the try line is absorbed into a field-position transition or PC event [PAGE 4], erasing the biomechanical causality that produced it. Referee decisions (penalties, cards, TMO rulings) change score and possession discontinuously, but the state space lacks a disciplinary-status variable. A red card changes transition probabilities for the remainder of the match, yet the Markov chain has no mechanism to condition on it.

Veto proof: The first-order Markov assumption requires that (t, f, g) capture all payoff-relevant information for predicting the next state [PAGE 2]. Physical, biomechanical, and officiating violations falsify this sufficiency condition. If an exogenous shock (weather deterioration, injury, red card, or TMO intervention) occurs, the conditional distribution P(S_{n+1} | S_n) shifts discontinuously, and the chain's memoryless structure cannot absorb the regime change without re-estimating P or augmenting the state space.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Score-bucket boundary discontinuity. Condition: two matches identical in time bucket and field position, but Team A trails by 14 points (down_14p) while Team B trails by 13 points (down_7_13) [PAGE 3]. Because the buckets differ despite a one-point margin difference, the model assigns different transition dynamics and win probabilities across an arbitrarily sharp boundary. Verifiable prediction: calibration residuals for states adjacent to δ = −14 and δ = −13 will exceed those for states deep within a bucket by at least 5 percentage points in absolute win-probability error, and the out-of-sample calibration R² will drop below 0.85 when restricted to boundary-adjacent states.

Veto Scenario 2 — Time-bucket clock cliff. Condition: State X has 121 seconds remaining in a half (middle bucket) and State Y has 119 seconds remaining (end bucket) [PAGE 3], with identical f and g. The continuous game clock differs by two seconds, but the discrete state space places them in different temporal regimes. Verifiable prediction: win-probability estimates will exhibit a discontinuous jump at the 120-second boundary that is not explained by any change in scoring intensity; in out-of-sample data, the calibration slope near bucket edges will deviate from the diagonal by more than 0.10 in absolute terms compared with mid-bucket regions.

Veto Scenario 3 — Implicit team-strength confounding. Condition: a strong team and a weak team are both down by 7 points with possession at the 45-meter line in the second-half middle bucket [PAGE 3]. Because team strength is implicit only in P [PAGE 8], the model assigns identical transition probabilities to both scenarios. Verifiable prediction: when the test set is stratified by pre-match team-quality differential, the Markov model's error reduction relative to the naive baseline will fall below 10% in the highest-mismatch quartile (versus 21.4% overall [PAGE 6]), and the out-of-sample calibration R² for mismatch subsets will fall below 0.80, demonstrating that roster heterogeneity is not adequately captured by score differential alone.
</RLVR_COUNTERFACTUAL_VETOES>
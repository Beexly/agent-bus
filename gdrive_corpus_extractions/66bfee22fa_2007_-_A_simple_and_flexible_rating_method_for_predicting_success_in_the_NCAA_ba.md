---
source: "2007 - A simple and flexible rating method for predicting success in the NCAA basketball tournament - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5112
---

<NATIVE_REASONING>
The user wants me to analyze a source text about a sports research paper using a very specific format with XML sections. Let me break down the requirements:

1. ZERO BETTING LINES - No spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions

Wait, the source text says PAGES: 1 but the text is garbled/truncated in places (� characters). I need to cite [PAGE 1] since that's the only page provided.

Let me construct this carefully.

Key content from source:
- Paper: "A Simple and Flexible Rating Method for Predicting Success in the NCAA Basketball Tournament" by Brady T. West, University of Michigan CSCAR
- NESSIS 2007
- OLRE method: Ordinal Logistic Regression and Expected value of discrete random variable
- Data: 2002-2003 to 2005-2006 regular seasons, teams selected for tournament
- Dependent variable: wins in 2003, 2004, 2005 tournaments (0 through 6 games)
- Predictor variables: team-level regular season variables including winning percentage, point differential, strength of schedule, number of wins, against Top 30 opponents
- Predicted probabilities of winning 0-6 games calculated for 2006 tournament teams
- Adjusted to satisfy marginal constraints (e.g., exactly 32 teams win 0 games)
- Expected number of wins = rating
- One million NCAA tournaments simulated in R using Bradley-Terry model for paired comparisons
- Strength parameters based on Jeff Sagarin's regular season-end computer ratings
- SSE: OLRE 63.92 vs simulation-based 70.02
- Correlation: OLRE with actual wins 0.67 vs RPI 0.52 vs Sagarin 0.55 (another part says OLRE 0.72 vs RPI 0.68 vs Sagarin 0.67 - seems garbled but I'll cite carefully)
- Limitations: lack of freely available info on team-level variables beyond winning percentage, point differential, strength of schedule, wins, vs Top 30; only four outcomes of five and six wins available
- Additional historical data prior to 2002 could improve fit

Now I need to write formal LaTeX equations. Since I can't invent toy equations, I should derive the actual ordinal logistic regression framework properly:

For ordinal logistic regression (proportional odds model):
Let Y_i ∈ {0, 1, ..., 6} be tournament wins for team i.
Cumulative probabilities: P(Y_i ≤ j | x_i) for j = 0, ..., 5.
Proportional odds: logit[P(Y_i ≤ j | x_i)] = α_j - x_i^T β
Or P(Y_i = j | x_i) = P(Y_i ≤ j) - P(Y_i ≤ j-1)

Expected wins: E[Y_i] = Σ_{j=0}^{6} j · P(Y_i = j | x_i)

Marginal constraints adjustment: If n_j is the known number of teams winning exactly j games (e.g., n_0 = 32 in a 65-team tournament? Actually in 65 team tournament: 32 teams lose first round (0 wins), but wait - 65 teams means one play-in game? Actually 65 teams: 64 in bracket + 1 play-in? No, historically 65 teams with play-in. Let's just cite the marginal constraint example from text: exactly 32 teams will win 0 games.

Adjustment: Find p̂_ij such that Σ_i p̂_ij = n_j for each j, and Σ_j p̂_ij = 1 for each i. This is a matrix scaling / iterative proportional fitting (IPF) problem.

Bradley-Terry: P(i beats j) = π_i / (π_i + π_j), where π_i > 0 are strength parameters.

Simulation: One million tournaments.

Breakdown regimes: When sample size is small (only 4 seasons, 5-6 win outcomes sparse), proportional odds assumption may fail; separation in logistic regression; margin constraint infeasibility if predicted probabilities conflict with known totals.

Now for the sections:

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. I need to discuss:
- The chain from regular season stats → ordinal probabilities → expected wins → rating
- Gray zones: garbled text (�), conflicting correlation numbers (0.67 vs 0.72), the fact that "Results" section is empty, missing variable list (see Conclusions for variables but conclusions are truncated)
- The assumption that regular-season-end variables predict tournament performance despite tournament being single-elimination with different variance
- The marginal constraint adjustment and its effect on calibration vs sharpness
- Simulation vs model-based comparison
- Page citation: [PAGE 1]

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define Y, X, β, α_j
- Ordinal logistic regression equations
- Expected value operator
- Marginal constraint as linear system / IPF
- Bradley-Terry
- SSE and Pearson correlation formulas
- Units: dimensionless probabilities, wins (count), correlation (dimensionless [-1,1]), SSE (wins²)
- Breakdown: n small, p large relative to events, sparse cells for 5-6 wins, proportional odds violation, margin constraint infeasibility
- Cite [PAGE 1] with verbatim quotes where possible.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Ordinal logistic regression (McCullagh 1980), Bradley-Terry (1952), RPI (NCAA), Sagarin ratings, NESSIS conference lineage
- Multi-week traps: Regular season end snapshot ignores late-season injuries, momentum, roster changes; tournament is 3-week single-elimination; using 2002-2006 to predict 2006/2007 creates look-ahead or small-sample issues; conference tournament timing vs selection Sunday

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract. Crisis habit regression: teams revert to mean under tournament pressure. Counter-trap: the model might be overfit to chalk (favorites) and miss upsets. Clock: single-elimination tournament clock (4 rounds max? Actually 6 rounds for 64 teams, plus play-in). Selection Sunday to championship is ~3 weeks.
- Committee seeding behavior as recursive: teams know ratings affect seeding, which affects path.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Basketball is indoor, so weather veto is minimal (unless travel disruptions). Biomechanical: player fatigue over 3 weeks, injury accumulation. Physical: court dimensions constant, altitude differences minimal across venues. But I need to show what would veto the model's predictions: e.g., key player injury (biomechanical veto), back-to-back games (physical fatigue), travel across time zones. Since indoor, weather doesn't affect gameplay directly but could affect travel.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable counterfactual vetoes. I'll create 3 scenarios that can be verified:
  1. Star player out for tournament → model predicts based on regular season end with star present → veto: actual wins < expected wins.
  2. Conference tournament champion auto-bid playing extra games → fatigue → over/under performance vs expected.
  3. 16-seed vs 1-seed historical context → model might assign non-zero probability to 6 wins for low seed but physical reality (seed structure) constrains.

Wait, I must be careful not to mention betting lines. No spreads, totals, moneylines, odds. "Odds" is explicitly forbidden. I should avoid "odds ratio" terminology or be careful? The prohibition says "Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely. In ordinal logistic regression, the proportional odds model uses "odds" but I can refer to "cumulative logits" or "log-odds" but the word "odds" might be banned. Let me avoid the word "odds" entirely to be safe. Use "cumulative logit" instead of "proportional odds". Actually "log-odds" contains odds. I'll use "logit link" and "cumulative probability ratios" without saying odds.

Wait, the source itself mentions "ordinal logistic regression". I can cite that term from the source [PAGE 1], but in my own equations I should avoid saying "odds". I can write "proportional-hazards-style cumulative logit model" but that's Cox. Better: "ordinal cumulative logit model with proportional slopes". I'll avoid the word odds.

Now word count: total >= 1000 words. THINK_TRACE alone >=400 words. The others should be substantial.

Let me draft each section carefully.

THINK_TRACE draft (aiming 450-500 words):

The paper proposes an Ordinal Logistic Regression Expected (OLRE) rating... The dependent variable is tournament wins Y_i ∈ {0,...,6}. Predictors X_i are end-of-regular-season team-level variables. [PAGE 1] states variables include "winning percentage, point differential, strength of schedule, and number of wins against Top 30 operators" (verbatim-ish from text). The text is corrupted with � characters in the Results/Conclusions boundary, creating a gray zone: the exact coefficient estimates, variable list, and model fit statistics are partially illegible. 

Multi-hop derivation: First, fit ordinal cumulative logit: logit(P(Y_i ≤ j | X_i)) = α_j − X_iᵀβ for j=0,...,5. Then derive cell probabilities π_{ij} = P(Y_i=j|X_i) = P(Y_i≤j) − P(Y_i≤j−1). Then expected wins E[Y_i|X_i] = Σ j·π_{ij}. This expectation is the rating. 

But marginal constraints: exactly 32 teams win 0 games (first-round losers in a 65-team field? Actually with 65 teams, 33 games in first round? Let's not invent; just cite the text: "e.g., exactly 32 teams will win 0 games"). So we need matrix P = [π_{ij}] adjusted to P* such that Σ_i P*_{ij} = m_j (known margins) and Σ_j P*_{ij} = 1. This is Iterative Proportional Fitting (IPF) or matrix raking. 

Gray-zone audit: The paper reports two correlation sets: one paragraph says OLRE correlation 0.67 vs RPI 0.52 vs Sagarin 0.55; another says 0.72 vs 0.68 vs 0.67. These contradictions appear on [PAGE 1] due to truncation/overlay. Without clean coefficients, we cannot audit the proportional-slopes assumption. With only four seasons (2002-2006) and sparse outcomes at 5-6 wins ("only four outcomes of five and six wins available"), maximum likelihood estimates may lie on the boundary or suffer from quasi-complete separation. The simulation uses one million Bradley-Terry tournaments with Sagarin strength parameters; comparing SSE (63.92 vs 70.02) suggests OLRE is better calibrated, but SSE is not a proper scoring rule for probabilities and is sensitive to the marginal adjustment. The clock problem: end-of-regular-season snapshots ignore conference tournament results, late injuries, and selection-Sunday seeding recursion.

That's good, ~350 words. Let me expand to ensure >=400.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.

Let me write:
Let i index teams, i = 1,...,N (N=65 for the 2006 tournament field; [PAGE 1]).
Let Y_i ∈ {0,1,2,3,4,5,6} be the number of tournament games won by team i.
Unit: wins (dimensionless count).
Let X_i ∈ ℝ^p be the predictor vector measured at end of regular season [PAGE 1].
From [PAGE 1], components include winning percentage, point differential, strength of schedule, number of wins, and wins against Top 30 opponents.

Ordinal cumulative logit model (proportional slopes):
For cutpoints j = 0,...,5:
η_{ij} = log [ P(Y_i ≤ j | X_i) / P(Y_i > j | X_i) ] = α_j − X_iᵀβ
Wait, I cannot use "odds" word. But the formula itself with the fraction P/(1-P) is implicitly odds. I can write it as logit without naming it "odds". Or avoid the fraction notation and just say:
P(Y_i ≤ j | X_i) = (1 + exp(α_j − X_iᵀβ))^(−1)
This avoids the word odds entirely. Then:
π_{ij} ≡ P(Y_i = j | X_i) = P(Y_i ≤ j | X_i) − P(Y_i ≤ j−1 | X_i), with P(Y_i ≤ −1) = 0 and P(Y_i ≤ 6) = 1.

Expected wins rating:
R_i = E[Y_i | X_i] = Σ_{j=0}^{6} j · π_{ij}
Units: expected wins (dimensionless count scale).

Marginal constraint adjustment:
Let m_j be the known number of teams finishing with exactly j wins. From [PAGE 1], m_0 = 32 (example). We seek adjusted matrix Π* = [π*_{ij}] satisfying:
Σ_{i=1}^{N} π*_{ij} = m_j,  j = 0,...,6
Σ_{j=0}^{6} π*_{ij} = 1,  i = 1,...,N
π*_{ij} ≥ 0
This is solved via iterative proportional fitting (IPF / matrix raking), minimizing KL divergence to initial Π subject to linear constraints.

Bradley-Terry simulation comparator:
For paired comparison i vs j:
P(i defeats j) = π_i / (π_i + π_j)
where π_i > 0 is team strength from Jeff Sagarin regular-season-end ratings [PAGE 1]. One million tournaments simulated in R.

Accuracy metrics on [PAGE 1]:
SSE = Σ_i (Y_i − R_i)^2
OLRE SSE = 63.92; simulation-based SSE = 70.02.
Pearson correlation: ρ(R, Y) = 0.67 (OLRE) vs 0.52 (RPI) vs 0.55 (Sagarin) in one reported block; an alternate block on [PAGE 1] reports 0.72 vs 0.68 vs 0.67, indicating a transcription/corruption conflict.

Breakdown/singularity regimes:
1. Sparse high-win cells: only four observations of 5–6 wins across training cohorts [PAGE 1], so α_5, α_6 are weakly identified; standard errors diverge as n_{5+} → 0.
2. Quasi-complete separation: if a predictor perfectly discriminates 0-win vs >0-win teams, ML estimates of β diverge to ±∞.
3. Margin infeasibility: if initial π_{ij} puts mass on j values with m_j = 0 but structural constraints force Σ_i π*_{ij} = m_j, IPF may not converge or may distort probabilities badly.
4. Proportional slopes violation: if the effect of X_i varies across cutpoints j, the single β vector is misspecified; a partial proportional model would be required.
5. Small-sample cohort: four seasons of regular-season data provide limited degrees of freedom relative to p predictors.

This section will be dense but I need word count too.

RETROCAUSAL_GENEALOGY:
- Lineage: McCullagh (1980) ordinal regression; Bradley & Terry (1952) paired comparisons; Sagarin computer ratings (sports); NCAA RPI; NESSIS conference series (New England Symposium on Statistics in Sports). 
- Multi-week trap: regular season ends ~March, Selection Sunday, then 3-week single-elimination tournament. Model uses end-of-regular-season snapshot but tournament outcomes depend on games played after snapshot (conference tournaments, first round, etc.). Also teams seeded based on these ratings; seeding affects path (opponent strength), creating a feedback loop: rating → seed → path → wins.
- Look-ahead / data leakage risk: fitting on 2002-2006 to predict 2006 then re-fitting with 2007 results; small temporal window.
- The "only four outcomes of five and six wins" limitation means deep tournament runs are barely represented in training.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under tournament pressure (single elimination), teams revert to mean performance; regular-season variance shrinks; the model trained on regular-season stats may overestimate favorites' consistency.
- Counter-trap: If committee uses similar ratings, all teams are seeded by correlated metrics; upsets become more likely relative to model because the model doesn't account for the recursive seeding equilibrium.
- Clock: The tournament is a finite-horizon stochastic process with 6 rounds (or 5 for some). The OLRE rating is static (expected total wins) but does not model round-by-round survival probabilities or the clock (rest days, travel, back-to-back). A team expected to win 3 games may face a fresh opponent in round 2 while having played a grueling conference championship—a clock-layer veto the static rating ignores.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Indoor court, standardized dimensions; weather does not directly alter gameplay (no wind, precipitation). However, winter storm travel disruptions can delay teams or force charter changes—this is a travel/physical veto but not a weather-on-court veto. [No weather gameplay effect because indoor.]
- Biomechanical layer: Basketball involves repeated jumping, cutting, load accumulation over a 3-week tournament. End-of-regular-season rating does not capture cumulative fatigue, minutes load, or injury status. A star player with a high-ankle sprain at Selection Sunday is a biomechanical veto: model R_i assumes roster health at end-of-regular-season measurement but actual tournament performance is path-dependent on health.
- Adjudication: The model is veto-proof only against court-geometry and weather-on-play variation; it is not veto-proof against injury, fatigue, or officiating variance. Because the source provides no injury or load data [PAGE 1], these are exogenous shocks outside the model's sigma-algebra.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Injury veto: If a top-5 OLRE-rated team loses its leading scorer to a season-ending injury between Selection Sunday and Round 1, prediction: actual wins < E[Y|X] by ≥1 game with p < 0.05 under a permutation test comparing injured vs non-injured high-rated teams. Verifiable via injury reports and box scores.
2. Conference-tournament fatigue veto: Teams winning their conference tournament on Sunday and playing Round 1 on Thursday/Friday have 3-4 days rest vs teams idle. Prediction: OLRE overestimates wins for Sunday champions by at least 0.4 expected wins on average across seasons, verifiable by scheduling data.
3. Seed-path veto: A 12-seed and 5-seed have similar OLRE ratings but different first-round opponents. The model's expected wins ignores opponent strength conditional on seed. Prediction: conditional on OLRE rating, lower-seeded teams realize fewer wins than higher-seeded teams, verifiable by seed-stratified actual wins vs predicted.

I need to ensure total word count >= 1000. Let me estimate:
THINK_TRACE: ~450
SOURCE_OPERATORS: ~350
RETROCAUSAL: ~250
RECURSIVE: ~200
CROSS_LAYER: ~200
RLVR: ~200
Total ~1650. Good.

Now check strict invariants:
- No betting lines: I didn't mention spreads, totals, moneylines, odds. I used "probability" and "likelihood" but not "odds". I need to scan for "odds". In SOURCE_OPERATORS, I avoided it. Good.
- Formal LaTeX equations: Yes.
- SI/information/probability units: wins, dimensionless, probabilities [0,1], correlation [-1,1], SSE in wins².
- Assumptions: listed.
- Exact singularity/breakdown regimes: listed.
- Cite exact [PAGE 1] markers and verbatim quotes: Yes, [PAGE 1] throughout. Verbatim quotes: "winning percentage, point differential, strength of schedule, and number of wins against Top 30 operators" — wait, the text says "against Top 30 opponents" underlined. I should quote accurately. Let me use: "winning percentage, point differential, strength of schedule, and number of wins against Top 30 opponents" — actually source shows these underlined separately. I'll quote short phrases.
- "exactly 32 teams will win 0 games" - verbatim from source.
- "only four outcomes of five and six wins available" - verbatim.
- 63.92 vs 70.02 SSE - verbatim.
- 0.67 vs 0.52 vs 0.55 and 0.72 vs 0.68 vs 0.67 - from source though garbled.

Wait, I need to be careful: the source text is missing the Results section header content and has garbled Conclusions. I must cite [PAGE 1] for everything since only one page is provided.

XML sections must be exact names:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

No extra sections? The user says "across these exact XML sections". I'll provide exactly these six sections.

Let me write the final output. I'll ensure THINK_TRACE is >=400 words.

THINK_TRACE word count check: I'll write generously.

Let me draft final text now.

One concern: In SOURCE_OPERATORS, I use logit function. The word "logit" is fine. The formula P(Y_i ≤ j | X_i) = [1 + exp(α_j − X_iᵀβ)]^(−1) is a formal equation. No toy ratios.

Another concern: "probability units" - probabilities are dimensionless, measured in [0,1]. I'll state that.

"SI/information/probability units": I'll mention Shannon information maybe? Not necessary. Probability units = dimensionless [0,1]. Information units = bits if using log base 2, but I'll stick to natural log (nats) if mentioning log-likelihood. I'll keep it simple: probabilities dimensionless, wins count, correlation dimensionless, SSE in squared wins.

Let me write carefully.

I should not say "odds ratio" anywhere. I'll use "cumulative logit" but avoid the word odds.

Actually, the phrase "cumulative logit" implies log of odds. But I won't write the word odds.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper proposes an Ordinal Logistic Regression Expected (OLRE) rating in which the dependent variable is tournament wins Y_i ∈ {0, 1, ..., 6}, and the predictors are end-of-regular-season team-level covariates X_i [PAGE 1]. The first derivation hop is to fit an ordinal cumulative-logit model across the four training cohorts (2002-2003 through 2005-2006) and then compute cell probabilities π_{ij} = P(Y_i = j | X_i) by differencing adjacent cumulative probabilities. The second hop is to convert those cell probabilities into a scalar rating R_i = E[Y_i | X_i] = Σ_{j=0}^{6} j · π_{ij}, i.e., the expected number of tournament wins. The third hop is to impose known tournament-level marginal constraints—for example, [PAGE 1] states “exactly 32 teams will win 0 games”—by adjusting the predicted probability matrix so that column sums equal the known counts m_j while each row still sums to one. This matrix-raking step converts raw model output into a coherent expected-wins vector that respects the deterministic structure of the bracket.

A gray-zone audit begins with the corruption visible on [PAGE 1]: the Results section is blank, and the Conclusions section contains replacement characters (�) where coefficients, variable definitions, and comparative fit statistics should appear. Two different correlation blocks are visible on the same page: one reports OLRE correlation 0.67 versus RPI 0.52 versus Sagarin 0.55, and another reports 0.72 versus 0.68 versus 0.67. Without clean text it is impossible to determine which block applies to the 2006 holdout versus the re-fitted 2007 model. The source also states “only four outcomes of five and six wins available” [PAGE 1], meaning the upper tail of the ordinal response is supported by four observations across all training years; consequently the highest cutpoints α_5 and α_6 are weakly identified and maximum-likelihood estimates may sit on or near the boundary of the parameter space. Another gray zone is the simulation comparator: one million NCAA tournaments were simulated in R using a Bradley-Terry paired-comparison model with strength parameters drawn from Jeff Sagarin’s regular-season-end ratings [PAGE 1], yet the SSE comparison (63.92 for OLRE versus 70.02 for simulation) uses squared error on realized win counts rather than a proper scoring rule for predicted distributions, so the comparison rewards calibration to the marginal constraints as much as probabilistic discrimination. Finally, the clock layer creates a recursive problem: end-of-regular-season snapshots are used to assign seeds; seeds determine regional paths; paths determine opponents; and opponents determine realized wins. The OLRE rating treats X_i as exogenous, but in the actual tournament the rating itself is part of the selection-and-seeding feedback loop, so the model cannot be treated as a stable structural forecast of team strength independent of the bracket mechanism it helps to produce.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i = 1, ..., N index teams in the tournament field, with N = 65 teams selected as described on [PAGE 1] (31 automatic conference champions plus 34 at-large selections). Let Y_i ∈ {0, 1, 2, 3, 4, 5, 6} be the number of tournament games won by team i, measured in wins (dimensionless count). Let X_i ∈ ℝ^p be the covariate vector measured at the end of the regular season [PAGE 1]; the underlined predictor list on [PAGE 1] includes “winning percentage, point differential, strength of schedule, and number of wins against Top 30 operators” [verbatim: “against Top 30 opponents”].

Ordinal cumulative-logit model (proportional slopes), j = 0, ..., 5:
P(Y_i ≤ j | X_i) = {1 + exp(α_j − X_iᵀβ)}^(−1),
with α_0 < α_1 < ... < α_5 ordered cutpoints and β ∈ ℝ^p common slope vector. The natural logarithm (nats) is the information unit for the link function; all probabilities are dimensionless on [0,1].

Ordinal cell probabilities:
π_{ij} ≡ P(Y_i = j | X_i) = P(Y_i ≤ j | X_i) − P(Y_i ≤ j − 1 | X_i),
where P(Y_i ≤ −1 | X_i) ≡ 0 and P(Y_i ≤ 6 | X_i) ≡ 1.

OLRE rating operator:
R_i = E[Y_i | X_i] = Σ_{j=0}^{6} j · π_{ij},
with units of expected wins (dimensionless count scale).

Marginal-constraint adjustment via iterative proportional fitting (IPF). Let m_j be the known number of teams finishing with exactly j wins. From [PAGE 1], the illustrative margin is “exactly 32 teams will win 0 games,” so m_0 = 32. The adjusted matrix Π* = [π*_{ij}] solves:
Σ_{i=1}^{N} π*_{ij} = m_j,  ∀ j ∈ {0, ..., 6},
Σ_{j=0}^{6} π*_{ij} = 1,  ∀ i ∈ {1, ..., N},
π*_{ij} ≥ 0.
The solution minimizes Kullback-Leibler divergence to the initial Π subject to these linear equality constraints.

Bradley-Terry simulation comparator [PAGE 1]:
P(i defeats j) = π_i / (π_i + π_j),  π_i > 0,
where π_i is derived from Sagarin’s regular-season-end computer ratings. One million tournaments simulated in R.

Accuracy metrics reported on [PAGE 1]:
SSE = Σ_i (Y_i − R_i)^2, units of squared wins.
OLRE SSE = 63.92; simulation-based SSE = 70.02.
Pearson correlation ρ(R, Y): one reported block gives 0.67 (OLRE), 0.52 (RPI), 0.55 (Sagarin); a second, garbled block on [PAGE 1] gives 0.72, 0.68, 0.67, respectively. Correlation is dimensionless on [−1, 1].

Breakdown and singularity regimes:
1. Sparse high-win cells: with only four observed outcomes of five and six wins across training cohorts [PAGE 1], cutpoints α_5 and α_6 are weakly identified; as n_{5+} → 0, standard errors diverge.
2. Quasi-complete separation: if any X_i perfectly discriminates 0-win from >0-win teams, the ML estimate of β diverges to ±∞ and the model fails to converge.
3. Margin infeasibility: if the initial probability mass assigned to a cell with m_j = 0 is structurally unavoidable, IPF may fail to converge or produce degenerate π*.
4. Proportional-slope violation: if the effect of X_i varies across cutpoints j, the single-vector β is misspecified and a partial-proportional ordinal model is required.
5. Small-sample cohort bias: four regular-season cohorts provide limited degrees of freedom relative to p, so out-of-sample expected-wins ratings have high variance.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The OLRE method descends from McCullagh’s ordinal regression framework for ordered categorical responses, adapted here to tournament win counts as an ordered discrete variable. The paired-comparison comparator traces to Bradley and Terry’s strength-parameter model for binary contests, implemented with Sagarin’s computer ratings as the exogenous strength prior [PAGE 1]. The NCAA selection context invokes the RPI lineage and the committee’s use of numerical ratings to assign seeds and regions, which [PAGE 1] describes as needing to be “strong indicators of expected success in the tournament.” The NESSIS (New England Symposium on Statistics in Sports) conference series supplies the methodological venue, emphasizing simple, flexible, publicly replicable rating methods.

A multi-week trap is embedded in the temporal design. The model measures X_i at “the end of the regular season” [PAGE 1], but the NCAA tournament unfolds over roughly three weeks of single-elimination play after Selection Sunday, including conference-tournament championships that occur after the regular-season snapshot. Because the predictor window closes before the final week of conference play, the model omits late-season injury accumulation, roster changes, momentum, and conference-tournament fatigue. A second trap is the look-ahead/recursive fitting loop: the paper re-fits the ordinal model in 2007 using 2005-2006 results as additional historical data [PAGE 1], then evaluates on 2007 actuals, while the training base runs only from 2002-2003 to 2005-2006. With only four seasons and “only four outcomes of five and six wins available” [PAGE 1], deep-tournament-run behavior (5–6 wins) is almost unrepresented in the estimation sample, so the model is effectively extrapolating into the upper tail when it assigns nonzero probability to championship runs. Finally, the committee’s seeding behavior creates a ratcheting expectation: ratings influence seeds, seeds influence regional proximity and opponent difficulty, and opponent difficulty influences realized wins, meaning the target variable Y_i is partially determined by the rating itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under single-elimination pressure, team performance tends to regress toward the mean because one bad shooting night, one whistle disparity, or one injury ends the season. The OLRE rating, trained on regular-season aggregates, implicitly assumes that end-of-season efficiency is stable under crisis conditions; this assumption fails when a team’s regular-season success was driven by variance that collapses in a winner-take-all format.

Counter-trap: if the selection committee uses rating methods correlated with OLRE (RPI, Sagarin, or similar) to assign seeds, then all teams are sorted by a shared latent metric. The model then underestimates the probability that a team rated modestly but placed in a weak regional path will outperform its expected wins, because the static expected-wins operator R_i = E[Y_i | X_i] does not condition on the seed-induced opponent distribution. The counter-trap is therefore that OLRE appears well-calibrated on aggregate SSE (63.92 versus 70.02 for simulation [PAGE 1]) while misallocating expected wins across the seed spectrum.

Clock: the tournament is a finite-horizon stochastic clock with at most six rounds of survival for a 64-team bracket (plus play-in considerations for a 65-team field). The OLRE rating is a static scalar and carries no round-by-round survival function, no rest-day variable, no travel-load term, and no back-to-back adjustment. A team expected to win three games may face a fresh opponent in Round 2 after a physically draining conference championship on Sunday, while the model’s rating assumes the same end-of-regular-season X_i regardless of when in the three-week clock each game is played. The clock layer thus represents a dynamic information set that the static ordinal model explicitly discards.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NCAA tournament games are played indoors on standardized hardwood courts with fixed dimensions, so weather does not directly alter gameplay mechanics (no wind, precipitation, or temperature effects on ball flight). The physical veto from weather is therefore null for on-court performance; however, winter-storm travel disruptions can delay team arrivals or force changes to charter schedules, which is a travel/physical veto external to the model’s covariate set [PAGE 1] contains no travel or venue variables.

Biomechanical layer: basketball imposes cumulative load through repeated jumping, cutting, and deceleration over a multi-week tournament. The OLRE predictors are measured at the end of the regular season and do not include player health status, minutes load, or injury reports. A starting player sustaining a high-ankle sprain in the final regular-season game or conference tournament is a biomechanical veto: the model’s X_i assumes roster continuity, but actual tournament outcomes are path-dependent on health shocks that occur after the measurement window. Because [PAGE 1] lists no injury or load variables, this shock lies outside the model’s sigma-algebra.

Adjudication: the OLRE rating is veto-proof only against court-geometry and weather-on-play variation; it is not veto-proof against injury, fatigue, officiating variance, or selection-committee recursion. Any verification of the model must therefore condition on the absence of major biomechanical shocks between Selection Sunday and the championship, because the source provides no mechanism to absorb them [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 (injury shock). A top-decile OLRE-rated team loses its leading scorer to a season-ending injury between Selection Sunday and Round 1. Verifiable prediction: realized wins for that team fall below E[Y_i | X_i] by at least one full win relative to a matched control group of high-rated teams with no such injury, testable via injury reports and box-score data at p < 0.05 under a permutation test. RLVR veto trigger: actual win count Y_i ≤ floor(R_i) − 1.

Veto Scenario 2 (conference-tournament rest asymmetry). A team wins its conference tournament championship on Sunday and plays its first NCAA game on Thursday or Friday, while a similarly rated opponent has been idle since the regular season ended. Verifiable prediction: conditional on OLRE rating, Sunday champions realize at least 0.4 fewer expected wins on average across seasons than idle comparators, verifiable via scheduling data and actual win totals. RLVR veto trigger: mean realized wins for Sunday-champion stratum is below model-implied R_i by > 0.4 wins.

Veto Scenario 3 (seed-path opponent shock). Two teams have statistically indistinguishable OLRE ratings but are assigned to different seeds (e.g., 5-seed vs. 12-seed), producing different first-round opponent strength distributions. Verifiable prediction: conditional on rating, lower-seeded teams realize fewer wins than higher-seeded teams because R_i does not condition on seed-specific opponent quality; verifiable by stratifying actual wins by seed within OLRE rating deciles. RLVR veto trigger: the slope of actual wins on seed within an OLRE decile is negative and statistically significant, while the model predicts no seed effect.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2007 - A simple and flexible rating method for predicting success in the NCAA basketball tournament - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4497
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper from the New England Symposium on Statistics in Sports (NESSIS) 2007. The paper is about a rating method for predicting NCAA basketball tournament success using ordinal logistic regression.

Strict invariants:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis following these exact sections. No betting lines. Formal LaTeX equations where appropriate. Cite [PAGE 1] since only one page is provided.

Let me structure this carefully.

THINK_TRACE: Need >=400 words. Deep multi-hop derivation and gray-zone audit. I'll discuss the methodology: ordinal logistic regression for tournament wins (0-6), marginal constraints adjustment, Bradley-Terry simulation comparison, SSE metrics, correlation comparisons. Gray zones: small sample (4 seasons of data, 65 teams per year = 260 team-seasons), limited outcomes for 5-6 wins, post-hoc marginal adjustment potentially overfitting, simulation using Sagarin ratings as strength parameters (circularity risk if Sagarin ratings already encode tournament success), temporal refitting issues.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Ordinal logistic regression model: logit[P(Y <= j)] = alpha_j - beta'X or proportional odds. Expected wins E[W] = sum_{k=0}^6 k * P(W=k). Marginal constraints adjustment (iterative proportional fitting / raking). Bradley-Terry: P(i beats j) = exp(theta_i) / (exp(theta_i) + exp(theta_j)) or lambda_i / (lambda_i + lambda_j). SSE = sum(actual - predicted)^2. Pearson correlation. Units: wins (count, dimensionless integer 0-6), probabilities [0,1], correlation coefficient [-1,1], SSE in squared wins. Page citations [PAGE 1]. Breakdown regimes: small counts for high wins (5-6 wins rare), perfect separation in ordinal regression, marginal constraint inconsistency.

RETROCAUSAL_GENEALOGY: Lineage from ordinal regression (McCullagh 1980), Bradley-Terry (1952), RPI (NCAA), Sagarin ratings, Massey, Colley. Multi-week traps: regular season ends -> Selection Sunday -> tournament; temporal drift; refitting in 2007 using 2005-06 as additional data; small historical window (2002-03 to 2005-06).

RECURSIVE_THEORY_OF_MIND: This is about modeling the committee's behavior (recursive theory of mind - the committee seeds based on ratings, teams perform in tournament, model predicts committee's implicit ratings). Crisis habit regression: under pressure, committees revert to familiar metrics (RPI, wins, top 30 wins). Counter-trap: the model exploits systematic biases in seeding (e.g., overvaluing conference tournament performance, undervaluing strength of schedule). Clock: regular season clock ends at Selection Sunday; no new data between bracket release and first games.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. NCAA basketball is indoor controlled environment; weather negligible (unlike outdoor sports). Biomechanical: player fatigue, injury status not in model (only season-end aggregate variables). Physical: court dimensions standard, altitude minor. Veto layers: data availability veto (no freely available team-level variables), sample size veto (n small), temporal stationarity veto (teams change rosters year to year). Weather veto: not applicable (indoor), but travel fatigue across regions could matter.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
1. Injury veto: If a top-seeded team loses its primary ball-handler to injury after Selection Sunday but before tournament, the OLRE model (trained on season-end aggregates without injury indicators) fails to adjust; prediction: actual wins < predicted wins by >1 game.
2. Conference tournament variance veto: A low-seed team wins its conference tournament on a hot streak but enters with mediocre regular-season variables; model underestimates them; prediction: actual wins exceed OLRE expected wins for at-seed underdogs.
3. Strength-of-schedule non-stationarity veto: The model's SOS variable computed at season end fails to capture late-season scheduling changes (cancellations, replacements); prediction: SSE increases in seasons with high schedule volatility.

Need to ensure no betting lines are mentioned. No spreads, totals, moneylines, odds. I must avoid those words entirely.

Word count check: Need >=1000 words total across sections. THINK_TRACE >=400. I'll aim for substantial content in each.

Let me draft carefully.

THINK_TRACE (>=400 words):
Start with derivation. Dependent variable Y_i in {0,...,6} number of tournament wins. Predictor vector X_i from regular season end: winning percentage, point differential, strength of schedule, wins vs Top 30. Ordinal logistic regression (proportional odds): cumulative logit P(Y_i <= j | X_i) = alpha_j - X_i' beta for j=0,...,5 (or j=1,...,6 depending on parameterization). Proportional odds assumption: beta constant across cutpoints alpha_j. Then P(Y_i = k) = P(Y_i <= k) - P(Y_i <= k-1) with boundary conventions. Expected rating R_i = E[Y_i] = sum_{k=0}^6 k * P(Y_i=k). Marginal constraints: sum_i I(Predicted wins bucket?) Actually constraints like exactly 32 teams win 0 games (first round losers), etc. This is a calibration/raking step to match known tournament structural margins. Simulation: one million tournaments using Bradley-Terry with strength parameters theta_i from Sagarin end-of-season ratings. P(i defeats j) = exp(theta_i)/(exp(theta_i)+exp(theta_j)). Simulate bracket, count wins, average. Compare SSE: OLRE 63.92 vs sim 70.02 in 2006; reversed in 2007 (OLRE 54.33 vs sim 43.92). Correlations: OLRE 0.67 vs RPI 0.52 vs Sagarin 0.55 (2006); OLRE 0.72 vs RPI 0.68 vs Sagarin 0.67 (2007). Gray-zone audit: (1) n = 4 seasons x ~65 teams = 260 observations, but only 4 outcomes of 5-6 wins historically => sparse cells, MLE instability, possible perfect separation. (2) Marginal adjustment is post-hoc and may capitalize on known tournament structure rather than team quality; risk of overfitting the 2006 bracket. (3) Using Sagarin ratings as simulation strength parameters introduces a comparison baseline that is itself a proprietary rating possibly correlated with tournament success; not a fully independent null. (4) Ordinal logistic regression treats wins as ordered categories but the distance between 0 and 1 win differs substantively from 5 to 6 (championship vs runner-up), violating equal-interval intuition though proportional odds only assumes ordered categories. (5) Temporal refitting in 2007 includes the 2006 tournament as training data, then tests on 2007; this is a rolling origin but with only one test year, high variance in correlation estimate (0.72 vs 0.68 vs 0.67 differences may not be statistically significant without standard errors). (6) Missing predictors: injuries, roster turnover, conference tournament results, venue/travel, rest days. The paper itself admits lack of freely available team-level variables.

Need to make this >=400 words. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Let Y_i be tournament wins for team i, Y_i ∈ {0,1,2,3,4,5,6}. Predictors x_i = (winning percentage, point differential, strength of schedule, top-30 wins)'. Proportional odds model:
logit[P(Y_i ≤ j | x_i)] = θ_j − x_i^T β, j = 0,...,5.
Or P(Y_i ≤ j) = exp(θ_j − x_i'β) / (1 + exp(θ_j − x_i'β)).
Category probabilities: p_{ij} = P(Y_i = j) = F(θ_j − x_i'β) − F(θ_{j−1} − x_i'β), with F logistic CDF, θ_{-1} = −∞, θ_6 = ∞.
Expected rating: \hat{R}_i = Σ_{j=0}^6 j p_{ij}.
Marginal adjustment: find adjusted q_{ij} such that Σ_i q_{i0} = 32, etc., minimizing deviation from p_{ij} (e.g., iterative proportional fitting / raking under column and row constraints).
Bradley-Terry: For pair (i,j), π_{ij} = exp(λ_i) / [exp(λ_i) + exp(λ_j)], where λ_i = Sagarin strength. Simulate 10^6 brackets; \tilde{R}_i = mean wins over simulations.
SSE: SSE = Σ_i (y_i − \hat{R}_i)^2. Reported SSE_OLRE = 63.92 (2006), SSE_BT = 70.02 (2006); SSE_OLRE = 54.33 (2007), SSE_BT = 43.92 (2007).
Pearson ρ: ρ(\hat{R}, y) = 0.67 (OLRE 2006) vs 0.52 (RPI), 0.55 (Sagarin); ρ = 0.72 (OLRE 2007) vs 0.68 (RPI), 0.67 (Sagarin).
Units: wins are dimensionless counts; probabilities unitless; correlation coefficient unitless; SSE in squared wins.
Breakdown/singularity: Perfect separation when a predictor perfectly predicts an outcome category (e.g., all teams with 6 wins have high Top-30 wins); sparse cells for j=5,6; small n/p ratio; non-convergence of IWLS if cutpoints collapse (θ_j ≈ θ_{j+1}). Page citation [PAGE 1].

RETROCAUSAL_GENEALOGY:
Historical lineage: Ordinal logistic regression traces to McCullagh (1980) proportional odds model. Bradley-Terry (1952) paired comparison model. NCAA RPI adopted 1981. Sagarin ratings (Sagarin, 1985, USA Today). Massey (1997) and Colley (2002) matrix methods. NESSIS 2007 context: the paper positions OLRE as simple/flexible alternative to black-box computer ratings. Multi-week traps: (a) Selection Sunday bracket lock means model inputs frozen at regular-season end; no in-season updates after Selection Sunday except simulation. (b) Refitting annually: adding 2005-06 to training set changes β and α; the 2007 test set is temporally adjacent but rosters turnover ~20-30% annually (one-and-done, transfers), inducing covariate shift. (c) The dependent variable (tournament wins) is itself determined by the bracket the committee builds using ratings that may include RPI/Sagarin, creating a feedback loop: ratings influence seeding, seeding influences path difficulty, path difficulty influences realized wins, and the model uses realized wins as target. This is a mild retrocausal loop: the target is partially a function of the inputs through committee behavior. Multi-week trap: early-season SOS is weak because few games; end-of-season SOS is stronger but teams have no time to adapt; the model captures end-of-season state only.

RECURSIVE_THEORY_OF_MIND:
Level 0: teams play games. Level 1: committee observes regular-season variables and assigns seeds using numerical ratings. Level 2: analyst (West) models committee’s implicit rating function using ordinal regression on tournament outcomes. Level 3: analyst’s rating is compared to RPI/Sagarin to claim superiority. Crisis habit regression: under tournament selection pressure, the committee regresses to familiar, legible metrics (winning percentage, RPI, Top-30 wins) rather than advanced efficiency metrics. The OLRE model formalizes these crisis habits into β weights. Counter-trap: because OLRE uses the same legible variables the committee uses, it may replicate committee biases (e.g., overvaluing major-conference automatic bids, undervaluing mid-majors with strong SOS but fewer Top-30 wins). Clock invariant: hard deadline at Selection Sunday; after bracket release, no new regular-season data enters. The model cannot condition on injury reports, travel logistics, or officiating crews announced between Selection Sunday and tip-off. This creates a prediction horizon fixed at t = Selection Sunday; decay of information relevance as the tournament progresses is unmodeled.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: NCAA tournament played at neutral sites (domed stadiums, arena courts) with standardized dimensions (94 ft x 50 ft), fixed shot clock (35s in 2007), altitude variations minimal. Weather: all games indoors; weather veto null (no outdoor exposure, no wind/temperature effects on ball flight). Biomechanical layer: player load, minutes restrictions, injury status, and rest between games are absent from X_i. A team with a star player playing through injury at season end has same X_i as fully healthy; biomechanical state is unobserved. Veto: any postseason injury or fatigue differential invalidates the season-end aggregate assumption. Travel/region layer: higher seeds get region close to home (per source text), introducing geographic proximity effects not captured by team-level variables alone. Adjudication: The model is veto-proof only under the assumption of roster stability, neutral-site equivalence, and no weather effects. Under real tournament conditions (single-elimination, short rest, travel, injuries), the veto layers activate and degrade predictive validity. Specifically, physical/biomechanical variables not in [PAGE 1] act as omitted-variable bias.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable scenarios + predictions.
Scenario 1: Post-bracket star injury. A #1 seed’s primary ball-handler suffers season-ending ACL tear in conference tournament final after Selection Sunday bracket is set but before first round. OLRE rating uses regular-season end aggregates; no injury indicator. Prediction: The team’s actual wins fall below OLRE expected wins by ≥1 game, and SSE for that subset increases relative to healthy teams. Verifiable via injury reports and tournament box scores.
Scenario 2: Mid-major conference tournament Cinderella. A #13 or #14 seed wins its conference tournament on a late hot streak but has weak regular-season Top-30 wins and mediocre point differential. OLRE assigns low expected wins. Prediction: In single-elimination variance, this team’s actual wins exceed OLRE expected wins for at least one such team in the sample, producing negative residuals (actual − predicted > 0) concentrated among low seeds. Verifiable via seed and conference tournament results.
Scenario 3: Strength-of-schedule non-stationarity due to cancellations. In a season with high non-conference game volatility (cancellations, replacements, COVID-like or weather-driven though indoor, scheduling churn), the end-of-season SOS variable is computed on a realized schedule that differs ex ante from the expected schedule used by the committee. Prediction: The correlation between OLRE ratings and actual wins drops by ≥0.05 in high-schedule-volatility seasons relative to stable-schedule seasons, because SOS is measured with error. Verifiable by comparing scheduled vs played opponents and correlating SOS error with residual magnitude.

Need to ensure no mention of odds, spreads, etc. I used "probabilities" which is fine (not betting odds). I should avoid the word "odds" except in "logit" which is log-odds technically but it's a statistical term. The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "odds" could be problematic if interpreted broadly, but "log-odds" is a statistical term. To be safe, I can say "logit" and avoid the word "odds" entirely. I will replace "log-odds" with "logit" and not use the word "odds". Let me check: "cumulative logit" is fine. Avoid "odds ratio". Avoid "betting odds".

Now, word count. I need to make sure total >= 1000 words. Let's estimate:
THINK_TRACE: ~500-600 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~1750+. Good.

Need exact XML section names. No extra sections.

Let's write.

I must cite [PAGE 1] for quotes. Verbatim quotes: "A simple and flexible rating method..." etc. I can quote small parts.

Check for any betting terms: I will not use spreads, totals, moneylines, odds. I might say "probabilities" which is fine.

Let's draft carefully.

One thing: The source text mentions "The number of wins achieved by each team in the 2003, 2004, and 2005 tournaments were also recorded... ordinal logistic regression... 2002-2003 to 2005-2006". So training data is 4 seasons. Dependent variable is 0-6 wins. The tournament had 65 teams then (31 auto + 34 at-large). Expected wins max 6 (championship). First round had 64 teams playing? Actually with 65 teams, there was a play-in game? In 2001-2011, there was an opening round game between two lowest seeds; winner advances to play #1 seed. So a team could win up to 6 games (win play-in + 6 rounds? Actually 65 teams: 64 in bracket plus play-in? Let's recall: 65 teams, one play-in game (64 vs 65), winner faces #1. So champion plays 6 games if they win play-in? No, champion from play-in would play 7? Wait: Round of 64 (round of 32?), Sweet 16, Elite Eight, Final Four, Championship. With 65 teams: Opening Round (1 game), then Round of 64 (32 games), Round of 32 (16), Sweet 16 (8), Elite Eight (4), Final Four (2), Championship (1). A team that wins the opening round then plays 6 more games to win title = 7 wins total? But the dependent variable is 0 through 6 games. Maybe they cap at 6 or treat opening round differently. The paper says 0 through 6 games. I'll just use the source text: 0 through 6 games. Not critical.

I will not overcomplicate.

Now writing final response. Must be only the XML sections. No preamble.

Let's compose with LaTeX formatting.

Check LaTeX syntax:
\logit\{P(Y_i \le j \mid \mathbf{x}_i)\} = \theta_j - \mathbf{x}_i^\top \boldsymbol{\beta}
p_{ij} = P(Y_i = j) = \Lambda(\theta_j - \mathbf{x}_i^\top \boldsymbol{\beta}) - \Lambda(\theta_{j-1} - \mathbf{x}_i^\top \boldsymbol{\beta})
\hat{R}_i = \sum_{k=0}^{6} k \, p_{ik}
\pi_{ij} = \frac{\exp(\lambda_i)}{\exp(\lambda_i) + \exp(\lambda_j)}
\operatorname{SSE} = \sum_i (y_i - \hat{R}_i)^2
\rho = \frac{\sum_i (\hat{R}_i - \bar{\hat{R}})(y_i - \bar{y})}{\sqrt{\sum_i (\hat{R}_i - \bar{\hat{R}})^2 \sum_i (y_i - \bar{y})^2}}

Units: wins (count, \mathbb{N}_0), probabilities [0,1], correlation [-1,1], SSE [wins^2].

Breakdown regimes: perfect separation, sparse upper cells, n=260 team-seasons, p=4 predictors plus cutpoints, IWLS non-convergence if \theta_j \approx \theta_{j+1}.

Ok.

Now write THINK_TRACE carefully. Must be deep multi-hop derivation & gray-zone audit >=400 words.

I'll produce it.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four linked hops. First, the dependent variable is defined as tournament wins Y_i ∈ {0, 1, 2, 3, 4, 5, 6} for team i, a bounded discrete ordinal outcome [PAGE 1]. Second, the predictor vector x_i is constructed from end-of-regular-season team-level aggregates: winning percentage, point differential, strength of schedule, and wins against Top 30 opponents [PAGE 1]. Third, an ordinal logistic regression under the proportional odds assumption links them: the cumulative logit P(Y_i ≤ j | x_i) is modeled as a linear function of x_i with category-specific cutpoints θ_j and a common slope vector β [PAGE 1]. Category probabilities are obtained by differencing adjacent cumulative probabilities, p_{ij} = P(Y_i = j) = Λ(θ_j − x_iᵀβ) − Λ(θ_{j−1} − x_iᵀβ), where Λ is the logistic CDF [PAGE 1]. Fourth, the team rating is the expected value of this discrete random variable, \hat{R}_i = E[Y_i] = Σ_{k=0}^{6} k p_{ik} [PAGE 1]. Because tournament structure imposes hard margins—exactly 32 teams win 0 games in a 65-team field, and analogous constraints propagate through later rounds—the raw predicted probabilities are adjusted to satisfy known marginal constraints before computing expected wins [PAGE 1].

A parallel simulation track uses one million brackets generated under the Bradley-Terry paired-comparison model, where team strength parameters λ_i are taken from Jeff Sagarin’s end-of-season computer ratings, π_{ij} = exp(λ_i) / [exp(λ_i) + exp(λ_j)], and simulated wins are averaged to produce model-based expectations [PAGE 1]. Predictive power is assessed by sums of squared errors between expected and actual wins: OLRE SSE = 63.92 versus Bradley-Terry SSE = 70.02 for 2006 [PAGE 1]. The same procedure refitted on 2002–2006 yields OLRE SSE = 54.33 versus simulation SSE = 43.92 for 2007 [PAGE 1]. Pearson correlations with actual wins are reported as 0.67 (OLRE) versus 0.52 (RPI) and 0.55 (Sagarin) in 2006, and 0.72 (OLRE) versus 0.68 (RPI) and 0.67 (Sagarin) in 2007 [PAGE 1].

Gray-zone audit. (1) Sample sparsity: four seasons of roughly 65 teams each yields approximately 260 team-seasons, yet the upper tail contains only four observed outcomes of five and six wins when fitting the 2007 model [PAGE 1], creating sparse cells and potential non-convergence or separation in the ordinal likelihood. (2) Marginal adjustment is post-hoc to known tournament structure; it calibrates to bracket arithmetic rather than purely to team quality, risking overfit to the 2006 bracket’s realized margins. (3) The Bradley-Terry benchmark conditions on Sagarin ratings, a proprietary computer rating that may already encode tournament-relevant information, so it is not a fully independent null. (4) Ordinal logistic regression treats the distance between 0 and 1 win identically to that between 5 and 6 wins in terms of ordering, though substantively a championship run differs categorically from a first-round exit; the proportional odds assumption collapses this semantic gap. (5) Temporal refitting adds 2005–2006 to the training set and tests on 2007, a single rolling-origin evaluation with no reported standard errors; the correlation gap between OLRE (0.72) and RPI (0.68) may not be statistically distinguishable. (6) The model omits injury status, roster turnover, rest days, venue effects, and conference-tournament momentum, which the paper itself acknowledges as a limitation due to lack of freely available team-level variables [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let Y_i be the number of tournament wins for team i, with support Y_i ∈ {0, 1, 2, 3, 4, 5, 6} [PAGE 1]. Let x_i ∈ ℝ⁴ denote the regular-season-end predictor vector: winning percentage, point differential, strength of schedule, and number of wins versus Top 30 opponents [PAGE 1].

Ordinal logistic regression (proportional odds) operator:
\[
\operatorname{logit}\{P(Y_i \le j \mid x_i)\} = \theta_j - x_i^\top \boldsymbol{\beta}, \quad j = 0, 1, \dots, 5,
\]
where θ_j are ordered cutpoints and β is the common slope vector [PAGE 1]. With Λ(z) = [1 + exp(−z)]^{−1}, the category mass function is
\[
p_{ij} = P(Y_i = j) = \Lambda(\theta_j - x_i^\top \boldsymbol{\beta}) - \Lambda(\theta_{j-1} - x_i^\top \boldsymbol{\beta}),
\]
with boundary conventions θ_{−1} = −∞ and θ_6 = ∞ [PAGE 1].

Expected-win rating operator:
\[
\hat{R}_i = \mathbb{E}[Y_i] = \sum_{k=0}^{6} k \, p_{ik}.
\]

Marginal-constraint adjustment: the matrix p_{ij} is raked or projected so that column sums match structural margins (e.g., Σ_i q_{i0} = 32 teams with zero wins) while minimizing departure from the OLRE-predicted probabilities [PAGE 1].

Bradley-Terry paired-comparison operator [PAGE 1]:
\[
\pi_{ij} = P(\text{team } i \text{ defeats team } j) = \frac{\exp(\lambda_i)}{\exp(\lambda_i) + \exp(\lambda_j)},
\]
where λ_i is the Sagarin strength parameter. One million simulated brackets yield \tilde{R}_i = mean simulated wins.

Accuracy metrics:
\[
\operatorname{SSE} = \sum_i (y_i - \hat{R}_i)^2,
\]
reported as 63.92 (OLRE, 2006) versus 70.02 (simulation, 2006); 54.33 (OLRE, 2007) versus 43.92 (simulation, 2007) [PAGE 1]. Pearson correlation:
\[
\rho = \frac{\sum_i (\hat{R}_i - \bar{\hat{R}})(y_i - \bar{y})}{\sqrt{\sum_i (\hat{R}_i - \bar{\hat{R}})^2 \sum_i (y_i - \bar{y})^2}},
\]
reported as 0.67 (OLRE, 2006), 0.52 (RPI), 0.55 (Sagarin); and 0.72 (OLRE, 2007), 0.68 (RPI), 0.67 (Sagarin) [PAGE 1].

Units: wins are dimensionless counts in ℕ₀; probabilities lie on [0,1]; correlation is unitless on [−1,1]; SSE is in squared wins. Singularity/breakdown regimes: perfect separation when a predictor determines an upper-tail category; sparse cells for Y = 5, 6 (only four such outcomes in the 2007 fit [PAGE 1]); IWLS non-convergence if adjacent cutpoints collapse (θ_j ≈ θ_{j+1}); small n/p ratio (~260 team-seasons versus four predictors plus five cutpoints).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The method’s genealogy layers three statistical traditions. The ordinal logistic proportional odds model descends from McCullagh’s generalized linear model framework for ordered categorical responses. The Bradley-Terry paired-comparison model traces to the 1952 psychometric literature for paired stimuli, later adapted to sports rankings. The NCAA’s own RPI, adopted formally in 1981, and Jeff Sagarin’s computer ratings, published since the 1980s in USA Today, constitute the incumbent benchmark lineage that West explicitly benchmarks against [PAGE 1]. The NESSIS 2007 paper positions OLRE as a “simple and flexible” alternative to these black-box computer ratings, using only publicly available regular-season aggregates [PAGE 1].

Multi-week traps. First, the committee’s selection and seeding occur at Selection Sunday, freezing all regular-season inputs; the model cannot ingest in-tournament information (injuries, rest, performance trends) after the bracket is locked [PAGE 1]. Second, annual refitting creates a rolling-origin problem: the 2007 model appends the 2005–2006 season to the 2002–2005 history [PAGE 1], but college basketball rosters turn over substantially year to year (early NBA entry, transfers, graduations), inducing covariate shift between training and test distributions. Third, a retrocausal feedback loop exists: the committee’s numerical ratings influence seed assignment, seed assignment influences regional path difficulty and opponent strength, realized tournament wins are partially determined by that path, and the model uses realized wins as the dependent variable [PAGE 1]. The target is therefore not purely exogenous to the inputs. Fourth, strength of schedule is weakest early in the season when few games have been played and strongest at season’s end, but teams have no remaining regular-season games to respond to a diagnosed weak SOS; the model captures a terminal state with no forward-looking adaptation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0: teams compete in regular-season games. Level 1: the NCAA-appointed committee observes regular-season variables and assigns seeds using numerical ratings [PAGE 1]. Level 2: the analyst (West) reverse-engineers the committee’s implicit valuation function by regressing realized tournament wins on the same observable regular-season variables [PAGE 1]. Level 3: the analyst compares the resulting OLRE ratings to RPI and Sagarin to claim superior correlation with actual success [PAGE 1].

Crisis habit regression: under the temporal and reputational pressure of Selection Sunday, the committee is documented as relying on legible, familiar aggregates—winning percentage, RPI, Top-30 wins—rather than proprietary efficiency metrics. The OLRE model formalizes these crisis habits into statistically estimated β weights, effectively codifying the committee’s regression to the mean under uncertainty.

Counter-trap: because OLRE consumes the same variables the committee privileges, it may replicate systematic selection biases, such as over-weighting major-conference automatic bids and under-weighting mid-majors with strong strength of schedule but few Top-30 victories [PAGE 1]. A counter-trap strategy would identify teams whose OLRE rating diverges from their seed in the direction of the committee’s known blind spots.

Clock invariant: a hard deadline operates at Selection Sunday; after bracket release, no additional regular-season data enters the model [PAGE 1]. The prediction horizon is therefore fixed at t = Selection Sunday. The model has no mechanism to condition on late-breaking injury reports, officiating assignments, travel fatigue across regions, or hot streaks in conference tournaments, all of which accrue between Selection Sunday and the first tip. Information relevance decays as the single-elimination tournament progresses, but the OLRE rating is a static snapshot with no time-decay component.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NCAA tournament games are contested indoors on standardized courts (94 ft × 50 ft) at neutral sites, with a fixed shot clock and uniform ball specifications; altitude variation across host cities is minimal. Weather veto: null. Because all games are indoors, temperature, wind, and precipitation exert no direct physical effect on ball flight or player footing [PAGE 1 context: indoor basketball tournament].

Biomechanical layer: player load, minutes restrictions, injury status, and rest intervals between games are absent from x_i [PAGE 1]. A team whose primary ball-handler is playing through a ligament injury at season’s end receives the same x_i as a fully healthy team. Roster continuity is also unmodeled; a team that loses a key contributor to graduation or transfer after the regular season is indistinguishable in x_i from one returning intact.

Region/travel layer: higher-seeded teams are assigned to regions closer to home [PAGE 1], introducing geographic proximity and travel-familiarity effects that team-level aggregates do not capture.

Adjudication: the OLRE rating is veto-proof only under the conjunction of roster stability, neutral-site equivalence, indoor climate control, and no post-season injuries. Under actual tournament conditions—single elimination, short rest, travel, injuries, and seeding path effects—the omitted biomechanical and travel layers activate as veto conditions, degrading out-of-sample predictive validity through omitted-variable bias. The physical layer does not veto the model (indoor, standardized), but the biological and geographic layers do.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Post-bracket star injury (verifiable via injury reports and tournament box scores): a top-four seed’s primary ball-handler suffers a season-ending injury in the conference tournament final after the bracket is released but before the first round. OLRE uses only end-of-season aggregates and contains no injury indicator [PAGE 1]. Prediction: that team’s actual wins fall below its OLRE expected wins by at least one game, and the subset of injured high-seeds exhibits systematically negative residuals (actual − predicted) relative to healthy high-seeds.

Scenario 2 — Conference-tournament Cinderella variance (verifiable via seed assignment and conference tournament results): a double-digit seed wins its conference tournament on a late hot streak but enters with weak regular-season Top-30 wins and mediocre point differential [PAGE 1]. OLRE assigns it low expected wins. Prediction: at least one such low-seed team records actual wins exceeding its OLRE expected win total, producing positive residuals concentrated among low seeds and increasing SSE for the OLRE ratings in that cohort.

Scenario 3 — Strength-of-schedule non-stationarity (verifiable via scheduled versus played opponents): in a season with high non-conference game churn (cancellations, replacements, or late schedule changes), the end-of-season SOS variable is computed on a realized schedule that differs ex ante from the schedule the committee evaluated [PAGE 1]. Prediction: the Pearson correlation between OLRE ratings and actual wins declines by at least 0.05 in high-schedule-volatility seasons relative to stable-schedule seasons, because SOS is measured with error and attenuates the regression slope.
</RLVR_COUNTERFACTUAL_VETOES>
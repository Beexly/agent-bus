---
source: "2023 - Why Did They Succeed A World Cup 2022 Analysis - Lim et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2023"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3266
---

<NATIVE_REASONING>
The user wants me to analyze a specific source document about World Cup 2022 analysis. I need to produce output with the exact XML sections specified:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Strict invariants:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across all sections.
- When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes.

The source text says PAGES: 1 and contains the full article. It's page 1 of the document. I need to cite [PAGE 1].

Let me carefully read the source text:

Title: Why Did They Succeed? A World Cup 2022 Analysis
Authors: Aaron Lim, Harrison Goetz, Fangzhou Dai, Kelly Zhang, Neil Varwandkar
Advisor: Naomi Korn
Wharton Moneyball Academy Flex 2023 Sports Analytics Student Research Journal
Spring 2023

Key findings:
- Hypothesis: salary and goals per 90 most predictive of World Cup final rank in 2022
- Data from Kaggle: Performance Attributes joined with Fifa World Cup 2022 Rankings
- Analysis in R
- cor(salaryupdated, Rank) = -0.532 (lower rank is better, so negative correlation means higher salary -> better rank)
- cor(goals_per90, Rank) = 0.5657 (wait, text says 0.5657 but then says "As goals increase, a team's rank gets better." If rank is lower=better, then goals_per90 should have negative correlation with rank. But they report positive 0.5657? Then in the table they list Goals per 90 as -0.57. There's an inconsistency in the source text itself. The text says "cor(tb5$goals_per90, tb5$Rank)= 0.5657" but table says -0.57. And narrative says goals increase -> rank gets better (meaning lower rank number). So there's a sign error in the source. This is a gray-zone to audit.)
- Expected assists: correlation -0.55, r^2 0.44 with rank. Salary vs expected assists r^2 0.78.
- Goal Creating Actions per 90: correlation -0.55, r^2 0.31.
- Expected Goals +/- per 90: negative linear regression correlation -0.4534295.
- Table: Salary -0.53, Goals per 90 -0.57, Expected Assists -0.55, Goal Creating Actions -0.55, Expected Goals +/- per 90 -0.45.
- Note: lower rank is better. Negative correlation = positive correlation to success.
- Conclusion: goals per 90 and expected assists highest correlation. All variables strong correlation. Attacking style favored. External factors (injuries, team chemistry, strength of opposition) skewed data.

I need to be careful not to invent fake ratios. I can use real statistical concepts: Pearson correlation coefficient, coefficient of determination r^2, linear regression, etc. These are formal, not toy equations.

Let me plan each section:

THINK_TRACE (>=400 words):
- Multi-hop derivation: trace how salary -> expected assists -> rank. How goals per 90 -> rank. The mediation chain.
- Gray-zone audit: sign inconsistency in goals_per90 correlation (text says +0.5657, table says -0.57, narrative says better rank with more goals). Since lower rank is better, the sign should be negative. The +0.5657 is likely a typo or data issue.
- Another gray zone: causal direction. Correlation is not causation. Salary might correlate with rank because wealthy nations have better infrastructure, youth academies, etc., not just salary itself.
- Expected assists r^2 0.78 with salary is high but with rank only 0.44, so salary explains 78% of variance in xA but xA explains only 44% of variance in rank.
- Sample size: 32 teams at World Cup. Degrees of freedom for correlation. Breakdown regimes: small N, non-independence (teams play each other), ecological fallacy.
- Multiple comparisons: testing many variables, correlation fishing.
- Rank is ordinal, treating it as continuous for Pearson correlation is questionable.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX: Pearson correlation r = cov(X,Y)/(σ_X σ_Y). Coefficient of determination R² = 1 - SS_res/SS_tot. Linear regression model Rank = β₀ + β₁ Salary + ε. Units: salary in USD (or thousands), goals_per90 in goals/90min, rank dimensionless ordinal (1-32). Page citation [PAGE 1].
- Breakdown regimes: N=32, Pearson assumes bivariate normality and linearity; ordinal rank violates interval assumption; autocorrelation from tournament structure; multicollinearity among attacking metrics.
- Exact quotes from source with [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Historical lineage: moneyball, sabermetrics applied to soccer (soccer analytics), expected goals (xG) lineage from Opta, etc. The 2022 World Cup context. Multi-week traps: tournament fatigue over 4+ weeks, knockout stage single-elimination variance, regression to mean after group stage.
- Mention that the paper doesn't account for temporal dynamics within the tournament (group stage vs knockout).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: teams under pressure revert to habitual styles. Counter-trap: underdogs may sit deep and counter. Clock: match clock management, tournament clock (group stage vs knockout).
- How teams adapt based on opponent's perceived theory of mind.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: pitch conditions in Qatar (stadiums, cooling), travel (compact geography reduced travel fatigue), temperature.
- Biomechanical: player load, minutes, injuries (mentioned in source as external factor).
- Weather: Qatar winter timing, heat/humidity controlled via air-conditioned stadiums.
- Veto proof: these factors can veto the salary/rank correlation (e.g., injured star, red card, weather delay).

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable veto scenarios:
  1. Star player injury before knockout (e.g., key attacker) -> salary and goals_per90 lose predictive power because on-field presence changes. Prediction: team with high salary/xG underperforms rank due to injury.
  2. Red card/suspension accumulating (two yellows) -> tactical collapse; correlation breaks down. Prediction: team down to 10 men loses despite higher xG/salary.
  3. Knockout single-elimination variance: one match decides rank progression; low-probability events (penalty shootout, late goal) dominate. Prediction: underdog wins knockout via set-piece despite inferior attacking stats.
- Each with verifiable conditions and predictions.

Word count: Need >= 1000 words total. I'll make sure each section is substantial.

Let me write carefully, avoiding any betting terms. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

I need to cite [PAGE 1] and verbatim quotes.

Let me draft.

THINK_TRACE: I'll discuss the derivation chain: salary -> xA (r²=0.78), xA -> Rank (r=-0.55, r²=0.44). This is a mediation: Salary explains xA, xA explains Rank. Then goals_per90 -> Rank. I'll note the sign flip. Gray zones: Pearson on ordinal rank, N=32, multiple testing, omitted variable bias (team chemistry, strength of opposition, injuries cited by authors), ecological fallacy, small sample breakdown.

Let's count words roughly as I write.

I should make sure to use formal LaTeX:
Pearson: \( r = \frac{\operatorname{Cov}(X,Y)}{\sigma_X \sigma_Y} \)
Linear model: \( \text{Rank}_i = \beta_0 + \beta_1 \text{Salary}_i + \varepsilon_i \)
\( R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2} \)
Units: salary [USD], goals_per90 [goal·min⁻¹·90] effectively [goals per 90 minutes], Rank [ordinal 1..32], dimensionless correlation.

Singularity/breakdown: N < ~10 per predictor for regression, heteroscedasticity, non-normal residuals, rank ties.

Okay, let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central inferential chain operates through a two-hop mediation structure visible in the reported statistics. On [PAGE 1], the authors state: "cor(tb5$salaryupdated, tb5$Rank)= -0.532" and later report a linear regression between salary and expected assists with "r^2 of 0.78." A second hop links expected assists to rank: "correlation of -0.55 and r^2 of 0.44." Because the authors explicitly note that "lower rank is better," the negative sign indicates that higher salary associates with a numerically lower (better) rank. The first hop, Salary → Expected Assists, explains 78% of the variance in expected assists; the second hop, Expected Assists → Rank, explains 44% of the variance in rank. Composing these hops naively suggests salary's influence on rank is partially carried through attacking output, but the paper never estimates a formal mediation model, Sobel test, or structural equation, so the causal ordering remains an untested narrative.

A multi-hop gray-zone audit exposes several breaks in this derivation. First, the sign of the goals_per90 relationship is internally contradictory. The source text on [PAGE 1] reports "cor(tb5$goals_per90, tb5$Rank)= 0.5657," yet the summary table lists Goals per 90 as -0.57, and the prose asserts "As goals increase, a team's rank gets better." Given that a better rank means a lower ordinal value, a positive correlation between goals and rank would mean more goals associates with a worse (higher-numbered) rank, which contradicts both the table and the prose. This sign flip indicates either a transcription error in the machine-converted text or an unreported data transformation; without the original PDF figures and tables, the exact sign cannot be arbitrated from the provided text alone.

Second, the authors apply Pearson correlation to an ordinal target (World Cup final rank from 1 to 32). Pearson's \(r\) assumes interval-scale, continuous variables with bivariate normality. Treating rank as interval data imposes equal psychological and competitive distance between, say, 1st and 2nd place versus 31st and 32nd, which is false in a single-elimination knockout tournament. With only 32 teams, degrees of freedom are severely limited; any correlation above roughly |0.35| reaches nominal significance at α=0.05, but this threshold ignores multiple-comparisons inflation across salary, goals_per90, xa_per90, defensive actions, expected assists, goal creating actions, and expected goals plus-minus. The authors tested many categories and reported only the favorable ones, a classic researcher-degree-of-freedom problem.

Third, omitted-variable bias is acknowledged but not modeled. The authors state on [PAGE 1] that "External factors like injuries, team chemistry, and strength of opposition were all components that skewed certain data points." Yet no instrumental variable, fixed effect, or control for opponent strength is included. Because teams play each other within the same tournament, observations are non-independent; a match between Team A and Team B generates two dependent outcomes. This violates the independence assumption underlying standard correlation and linear regression, inflating type-I error rates. Breakdown regime: if N_eff drops below ~15 due to clustering by match or confederation, the reported r values become unstable and confidence intervals would be extremely wide. Fourth, ecological fallacy risk: team-level aggregates (salary, goals per 90) may mask player-level heterogeneity; a high-salary team could rely on one superstar rather than a coherent attacking system. These gray zones mean the paper demonstrates association, not prediction, and certainly not a portable betting model.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
On [PAGE 1], the reported operators are Pearson product-moment correlations and ordinary least squares linear regressions executed in R. The formal Pearson operator is:

\[
r_{XY} = \frac{\operatorname{Cov}(X,Y)}{\sigma_X \sigma_Y}
\]

where \(X\) and \(Y\) are random variables with standard deviations \(\sigma_X\) and \(\sigma_Y\); the output \(r\) is dimensionless and bounded in \([-1, 1]\). The authors report the following exact values on [PAGE 1]:

- Salary vs. Rank: \(r = -0.532\)
- Goals per 90 vs. Rank: text reports \(r = 0.5657\), summary table reports \(-0.57\)
- Expected Assists vs. Rank: \(r = -0.55\), \(R^2 = 0.44\)
- Salary vs. Expected Assists: \(R^2 = 0.78\)
- Goal Creating Actions per 90 vs. Rank: \(r = -0.55\), \(R^2 = 0.31\)
- Expected Goals +/- per 90 vs. Rank: \(r = -0.4534295\)

Units: Salary is denominated in currency units (USD or USD-thousands, unspecified in the converted text). Goals per 90, expected assists per 90, and goal creating actions per 90 are rates with units of [event per 90 minutes], i.e., [goal·min\(^{-1}\)] scaled by 90. Rank is an ordinal integer on the discrete support \(\{1, 2, \dots, 32\}\), where lower values denote superior tournament placement. Because rank is ordinal, the linear model

\[
\text{Rank}_i = \beta_0 + \beta_1 \text{Salary}_i + \varepsilon_i, \quad \varepsilon_i \sim \mathcal{N}(0, \sigma^2)
\]

is formally misspecified; the dependent variable violates the interval and normality assumptions of OLS. The coefficient of determination is defined as

\[
R^2 = 1 - \frac{\sum_{i=1}^{N} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{N} (y_i - \bar{y})^2},
\]

bounded in \([0,1]\) for OLS with an intercept, but it can fall outside this range if applied to non-OLS contexts or rank data.

Verbatim quotes from [PAGE 1] anchor these operators: "cor(tb5$salaryupdated, tb5$Rank)= -0.532"; "cor(tb5$goals_per90, tb5$Rank)= 0.5657"; "This is conﬁrmed by the linear regression model with a correlation of -0.55 and r^2 of 0.44"; "This is conﬁrmed by a linear regression model with a satisfactory r^2 of 0.78"; "External factors like injuries, team chemistry, and strength of opposition were all components that skewed certain data points."

Breakdown and singularity regimes: Pearson correlation degenerates when either variable has zero variance (division by zero in \(\sigma_X \sigma_Y\)). With \(N=32\) teams, the standard error of \(r\) under the null is approximately \(1/\sqrt{N-3} \approx 0.192\), so the reported correlations are statistically separable from zero only under strong independence and normality assumptions that the tournament structure violates. If the effective sample size collapses due to match-level dependence (e.g., treating 64 matches as independent when teams are repeated), the standard error is underestimated and \(p\)-values are anti-conservative.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The analytical lineage of this paper traces to the sabermetric and "Moneyball" revolution in North American sports, later transplanted into association football through expected goals (xG), expected assists (xA), and possession-value frameworks popularized by Opta, StatsBomb, and academic sports analytics in the 2010s. The Wharton Moneyball Academy context places the work within a student-research tradition that applies cross-sport predictive modeling to major tournaments. Historically, World Cup success has been explained by GDP, population, footballing culture, and Elo ratings rather than by in-tournament attacking rates alone; this paper narrows the lens to salary and per-90 attacking statistics, thereby ignoring long-run national-team development trajectories that determine squad quality before the tournament begins.

Multi-week traps are particularly relevant to a quadrennial, month-long tournament. The 2022 Qatar World Cup was compressed into approximately four weeks in November–December, an unusual winter scheduling that disrupted domestic club seasons. Over this window, several traps operate retroactively on the reported correlations: (1) group-stage performance may inflate goals_per90 for teams facing weaker opponents, while knockout-stage opponents are stronger, creating a strength-of-opposition confound the authors acknowledge but do not adjust for; (2) single-elimination variance increases as the tournament progresses, so a team's final rank is determined by one or two knockout matches rather than by season-long attacking averages; (3) fatigue accumulation across matches, travel, and recovery windows alters on-field output independent of salary; and (4) managerial tactical adjustments across weeks (e.g., shifting from attack in group stages to conservatism in knockouts) violate the stationarity assumption implicit in correlating a season-style per-90 rate with a final rank determined by non-stationary match conditions. Because the data are cross-sectional at the team level, the paper cannot distinguish whether high salary caused high rank, or whether both are effects of a third variable (e.g., national federation investment, youth-academy quality, or historical World Cup pedigree) that operates over years before the tournament.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In high-stakes elimination soccer, each coaching staff recursively models the opponent's model of itself. Crisis habit regression describes the tendency of teams under pressure to revert to their most drilled, habitual tactical patterns rather than executing the optimal game-theoretic response. A high-salary team with a strong attacking identity (high expected assists, high goal creating actions) may, when trailing late in a knockout match, regress to its habitual attacking shape even when a low-block counter-attack would be statistically superior, thereby undermining the salary → rank correlation. Conversely, a lower-salary underdog may deliberately adopt a defensive, low-xG posture, accepting inferior attacking statistics while maximizing set-piece and transition efficiency; this is a counter-trap that exploits the favorite's recursive expectation that the underdog must attack to win.

The clock operates on two nested timescales: the match clock (90 minutes plus stoppage time) and the tournament clock (group stage to final). As match time expires, the value of a goal changes non-linearly; a goal in the 89th minute has different tournament-rank implications than one in the 12th minute. Because the paper aggregates goals_per90 across all matches without weighting by match state, minute, or opponent strength, it treats a late consolation goal by an eliminated team identically to an opening goal in a semifinal. Recursive theory of mind further implies that a team ranked highly by salary may be targeted by opponents who park the bus, reducing the high-salary team's xA and goals_per90 not because of inferior quality but because of strategic opponent adaptation. This dynamic means the observed correlation between attacking stats and rank is partially an equilibrium outcome of mutual tactical anticipation, not a stable causal parameter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The 2022 Qatar World Cup featured air-conditioned stadiums and compact geography, minimizing inter-match travel and extreme heat exposure relative to prior summer tournaments. These physical conditions reduce the variance attributable to climate and travel fatigue, which in turn increases the relative weight of squad quality and salary in explaining rank. However, if stadium cooling failed or a match was played under unusually high humidity, the physical layer could veto the salary/rank relationship by degrading high-intensity pressing and sprinting output—precisely the physical attributes that expensive squads are built to exploit.

Biomechanical layer: Injuries are explicitly cited by the authors on [PAGE 1] as an external factor that "skewed certain data points." A key attacker's muscular injury, ACL rupture, or accumulated yellow-card suspension removes the player whose salary and xA contributions drove the team-level correlation. Biomechanical load (minutes played, high-speed distance, sprint count) over a four-week tournament determines availability; a high-salary team that loses its primary goal creator to injury in the knockout stage experiences a structural break in the Salary → Expected Assists → Rank chain.

Weather layer: Although Qatar's stadiums were climate-controlled, outdoor training sessions, fan zones, and potential venue-specific microclimates still imposed thermoregulatory load. Wet-bulb globe temperature (WBGT) thresholds for elite football impose performance ceilings on repeated sprint ability and decision-making. A veto event occurs if a match is played in conditions where WBGT exceeds safe thresholds, forcing increased substitution rates and disrupting the salary-squad-depth advantage.

Adjudication rule: A veto is triggered when any cross-layer variable (injury to a primary attacker, red card reducing a team to ten players, extreme WBGT, or stadium cooling failure) changes the effective on-field personnel or environmental constraints such that the pre-tournament salary and per-90 attacking averages no longer describe the match-specific production function. Under veto conditions, the Pearson correlations reported on [PAGE 1] are not transportable to that specific match outcome.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Primary attacker injury before a knockout match. Let team \(T\) have high salary \(S_T\) and high pre-tournament goals_per90 \(G_T\). If \(T\)'s principal goal scorer suffers a season-ending injury 48 hours before the round of 16, the on-field expected goals for \(T\) in that match drops by the player's counterfactual contribution \(\Delta xG > 0\). Verifiable condition: official injury announcement and subsequent match xG below team's season average. Prediction: \(T\) is eliminated despite ranking in the top tercile by salary and goals_per90, falsifying a simple salary → rank extrapolation.

Scenario 2: Red-card numerical disadvantage. A team with above-median expected assists receives a straight red card in the 30th minute of a knockout match, forcing play with 10 versus 11 for 60 minutes. Verifiable condition: match referee report and event-data confirmation of red card plus sustained possession territory shift. Prediction: the red-carded team's attacking statistics collapse for the remainder of the match; rank progression is determined by defensive resilience rather than pre-match xA, vetoing the expected-assists → rank correlation for that observation.

Scenario 3: Knockout single-elimination variance via low-probability set piece. An underdog team with below-median salary and below-median goals_per90 concedes <0.5 expected goals across 120 minutes but scores from a set piece in extra time and advances via penalty shootout. Verifiable condition: match event data showing underdog xG < favorite xG, shootout win, and progression. Prediction: final rank improves for the inferior-attacking team, demonstrating that tournament rank is not a stable function of per-90 attacking rates; the correlation structure on [PAGE 1] breaks down under single-elimination variance.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "2023 - Why Did They Succeed A World Cup 2022 Analysis - Lim et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2023"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3844
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about World Cup 2022 success factors. They've provided the source text from a PDF with 10 pages.

Key constraints:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important observations from source:
- Page 2: Hypothesis: salary and goals per 90 most predictive of final rank.
- Page 4: cor(salary, Rank) = -0.532. Note lower rank is better (rank 1 = winner).
- Page 5: cor(goals_per90, Rank) = 0.5657. Wait, this says positive 0.5657 but page 9 says -0.57. There's an inconsistency in the source text itself. Page 5 says "As goals increase, a team's rank gets better" and cor = 0.5657. But if rank 1 is better, then as goals increase, rank number should decrease, so correlation should be negative. Page 9 says Goals per 90 correlation -0.57. Page 5 likely has a sign error or they define rank differently. Need to flag this.
- Page 6: expected assists vs salary r^2 = 0.78. Team rank vs expected assists correlation -0.55, r^2 = 0.44.
- Page 7: rank vs goal creating actions per 90, correlation -0.55, r^2 = 0.31.
- Page 8: rank vs xG +/- per 90, negative linear regression correlation -0.4534295.
- Page 9: Table: Salary -0.53, Goals per 90 -0.57, Expected Assists -0.55, Goal Creating Actions -0.55, Expected Goals +/- per 90 -0.45. Note: lower rank is better, negative correlation = positive correlation to success.
- Page 10: Conclusion: attacking style favored. External factors like injuries, team chemistry, strength of opposition skewed data.

I need to write a rigorous analysis. No betting lines. Formal equations. SI/information/probability units. Exact singularity/breakdown regimes. Citations [PAGE N].

Word count: >=1000 total across sections. THINK_TRACE >=400 words.

Let me structure this carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. Discuss the sign inconsistency between Page 5 (cor = +0.5657) and Page 9 (-0.57). Discuss the interpretation of Rank (lower is better). Discuss confounding: salary correlates with expected assists (r^2=0.78), so salary may be a proxy for attacking quality. Discuss small sample (32 teams? World Cup has 32 teams in 2022). Discuss multiple comparisons (they compared many categories). Discuss causality vs correlation. Discuss external factors (injuries, chemistry, opposition) mentioned on page 10. Discuss breakdown regimes: Pearson correlation assumes linearity, homoscedasticity, no outliers; with n=32, degrees of freedom limited; rank is ordinal not interval, so Pearson may be inappropriate (Spearman would be better). Also Rank has ties? World Cup final rank has groups (semifinalists, quarterfinalists, etc.) so it's tied/ordinal, violating continuous interval assumption. This is a gray zone.

SOURCE_OPERATORS_AND_EQUATIONS: Define variables. Let R ∈ {1,...,32} final rank (ordinal, lower=better). Let S = squad salary (currency units, likely USD or normalized). Let g90 = goals per 90 minutes (goals·min⁻¹ normalized to 90 min). Let xA90 = expected assists per 90. Let GCA90 = goal creating actions per 90. Let xGpm90 = expected goals plus minus per 90. Pearson correlation: ρ_{X,R} = Cov(X,R)/(σ_X σ_R). Sample estimate r = Σ(x_i - x̄)(r_i - r̄) / sqrt(Σ(x_i - x̄)² Σ(r_i - r̄)²). Reported values from pages. Coefficient of determination r². Linear regression R = β₀ + β₁X + ε. Breakdown: |r| → 1 perfect linear; n small → confidence intervals wide; ordinal R violates interval scale; ties in R reduce effective sample; multicollinearity between S and xA90 (r²=0.78 between them). Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage: soccer analytics (Reep & Benjamin 1968, Charles Hughes, Wilson & etc.), expected goals (Opta, Sam Green, Michael Caley), salary-success relationship in sports (Kahn, baseball, European football), World Cup 2022 specific (Qatar winter tournament, biomechanical load, compressed schedule). Multi-week traps: overfitting to single tournament, small-n anomaly, post-hoc narrative, survivorship bias (only successful teams' attacking stats visible?), regression to mean, tournament variance vs league sample.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: teams under pressure revert to habitual patterns (defensive blocks vs attacking). Counter-trap: high-salary teams may be expected to dominate but underperform due to pressure; low-salary teams may overperform via counter-attack. Clock: tournament clock (knockout single elimination) introduces variance; 90-minute regulation vs extra time vs penalties; goals per 90 doesn't capture knockout clock dynamics.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: Qatar 2022 was winter (Nov-Dec), players mid-season fatigue vs fresh? Biomechanical: high-intensity sprints, expected assists depend on physical output. Weather: Qatar climate controlled stadiums but training conditions. Veto proof: correlation does not imply causation; salary is not a direct physical input; attacking stats are mediated by physical execution. Veto conditions: if r² < 0.5 (more than half variance unexplained), the predictor is vetoed as standalone causal. All r² values: salary-rank r² = 0.283 (from -0.532 squared), goals-rank r² ≈ 0.325 (from 0.57), xA-rank r²=0.44 (page 6), GCA r²=0.31, xG± r²≈0.206 (0.4534²). Since all <0.5, each individually fails a >50% variance explanation threshold. Combined model might be better but multicollinearity.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions.
1. Salary permutation veto: Randomly permute salary labels across teams; if |r_permuted| > observed |r| in >5% of 10,000 shuffles, observed correlation is not significant at α=0.05. Prediction: with n=32 and r=0.53, p ≈ 0.0018 (need to compute roughly). Actually t = r*sqrt((n-2)/(1-r²)). For r=0.532, n=32: t = 0.532*sqrt(30/(1-0.283)) = 0.532*sqrt(30/0.717)=0.532*sqrt(41.84)=0.532*6.468=3.44. df=30, two-tailed p ≈ 0.0017. So significant. But I should present the test as a veto scenario rather than definitive.
2. Rank scale veto: Replace final Rank (ordinal 1-32) with stage reached (group=1, R16=2, QF=3, SF=4, F=2?, W=1?) Actually ordinal coding changes Pearson. If correlation collapses when using Spearman or stage coding, Pearson result is an artifact. Prediction: Spearman ρ will be lower in magnitude than Pearson because of ties and non-interval rank.
3. Attacking-stat confounder veto: Regress rank on goals_per90 controlling for salary (partial correlation). If partial r drops below |0.30| or becomes insignificant, salary is the true driver and goals_per90 is a proxy. Prediction: given salary-xA r²=0.78, partial correlation of goals_per90 controlling for salary will attenuate substantially.

Need to ensure no betting lines. Do not mention odds, spreads, moneylines, totals.

Need verbatim quotes where citing pages. I can quote short phrases from the text.

Let's draft with exact XML sections. Must be careful to include all sections and meet word count.

I need to count words. THINK_TRACE >=400 words. Total >=1000.

Let me write generously.

Start with THINK_TRACE. Deep multi-hop derivation. Gray-zone audit. Address contradictions. Use citations [PAGE 4], [PAGE 5], etc.

Then SOURCE_OPERATORS_AND_EQUATIONS with LaTeX.

Then RETROCAUSAL_GENEALOGY.

Then RECURSIVE_THEORY_OF_MIND.

Then CROSS_LAYER_VETO_ADJUDICATION.

Then RLVR_COUNTERFACTUAL_VETOES with 3 scenarios.

No markdown outside? The user asked for XML sections. I'll wrap everything in those tags. I can include LaTeX inside.

Let's write.

Word count estimate: THINK_TRACE ~500. SOURCE_OPERATORS ~300. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~250. Total ~1800. Good.

Let's ensure formal LaTeX equations are proper.

Equations:
Pearson product-moment correlation:
r_{X,R} = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(r_i - \bar{r})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \sum_{i=1}^{n}(r_i - \bar{r})^2}}

Linear regression:
R_i = \beta_0 + \beta_1 X_i + \varepsilon_i, \quad \varepsilon_i \sim \mathcal{N}(0,\sigma^2)

Coefficient of determination:
r^2 = 1 - \frac{\sum \varepsilon_i^2}{\sum (r_i - \bar{r})^2}

Sign convention: Rank \in \{1,\dots,32\}, lower = better. Negative r means higher X associates with lower (better) rank.

Breakdown regimes:
- n = 32 teams (2022 World Cup). df = n-2 = 30.
- Pearson assumes interval-scale, bivariate normality, homoscedasticity, linearity, no influential outliers. Rank is ordinal with ties (group-stage elimination groups), violating interval assumption.
- Singularity: σ_X = 0 or σ_R = 0 → undefined.
- Multicollinearity: salary ↔ xA90 (r²=0.78, [PAGE 6]) inflates variance of β estimates in multiple regression.

Need to cite page numbers and verbatim quotes.

Page 4 quote: "cor(tb5$salaryupdated, tb5$Rank)= -0.532" and "The graph show that teams with lower salaries did worse than teams with higher salary."
Page 5 quote: "cor(tb5$goals_per90, tb5$Rank)= 0.5657" (note sign inconsistency with [PAGE 9]).
Page 6 quote: "linear regression model with a satisfactory r^2 of 0.78" and "correlation of -0.55 and r^2 of 0.44".
Page 7 quote: "correlation of -0.55 and a r^2 of 0.31."
Page 8 quote: "negative linear regression correlation of -0.4534295."
Page 9 quote: table values and "Note, lower rank is better. So a correlation with a negative value is a variable with a positive correlation to a world cup success."
Page 10 quote: "External factors like injuries, team chemistry, and strength of opposition were all components that skewed certain data points, hence the anomalies."

Now write the response. Ensure no mention of betting.

Check: Did I mention odds/spreads/moneylines/totals? No.

Let's compose carefully.

I need to ensure that I don't invent fake ratios. I won't.

I'll write the XML sections exactly as named.

Proceed to final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central claim is that salary and goals_per90 are the most predictive variables for World Cup 2022 final rank ([PAGE 2]). A first-order derivation begins with the Pearson product-moment correlation between each candidate vector X and the rank vector R. On [PAGE 4], the authors report cor(salaryupdated, Rank) = -0.532. On [PAGE 5], they report cor(goals_per90, Rank) = 0.5657, yet immediately assert "As goals increase, a team's rank gets better," which is internally inconsistent because Rank is coded such that lower is better ([PAGE 9]): a genuine improvement in rank as goals increase must produce a negative Pearson coefficient. [PAGE 9] resolves this by listing Goals per 90 at -0.57, implying [PAGE 5] contains a sign error or an unstated rank inversion. This is a gray-zone defect: the reader cannot tell whether the raw coefficient was +0.5657 under a reversed rank convention or a typographical slip, and the paper never reports the coding convention for Rank on [PAGE 3] or [PAGE 5].

A second derivation layer concerns multivariate confounding. [PAGE 6] establishes that salary and expected assists share r^2 = 0.78, a strong linear association. If salary proxies for squad quality, and expected assists proxies for attacking execution, then salary's univariate correlation with Rank (-0.53) may be mediated almost entirely by xA90 rather than by payroll itself. A multiple regression R = β0 + β1·salary + β2·xA90 + ε would suffer from multicollinearity; with only n = 32 teams (the 2022 World Cup field), df = 30, and two highly correlated predictors, the standard errors of β1 and β2 would inflate, potentially rendering individual coefficients insignificant even when the joint model explains meaningful variance. The paper does not report a multiple regression, variance inflation factors, or residual diagnostics, so it cannot isolate whether salary or attacking stats are causally proximal.

A third layer is measurement-scale validity. Rank in a World Cup is ordinal and heavily tied: teams eliminated in the same round share identical final ranks (e.g., all group-stage exits), violating Pearson's assumption of an interval-scale continuous variable. Pearson's r also assumes bivariate normality, homoscedasticity, linearity, and no influential outliers ([PAGE 4]-[PAGE 8] show scatterplots but no residual plots, Q-Q plots, or Cook's distances). With n = 32, a single outlier (e.g., a high-salary early exit or a low-salary semifinalist) can dominate the correlation. The authors acknowledge on [PAGE 10] that "injuries, team chemistry, and strength of opposition ... skewed certain data points, hence the anomalies," which is an admission that the error term ε is heteroscedastic and structured by omitted variables, breaching the classical linear model assumptions.

A fourth layer is statistical power and multiple comparisons. [PAGE 3] states they "compared the rank to many different data categories," yet no family-wise error correction (Bonferroni, Holm-Bonferroni, or FDR) is reported. Testing salary, goals_per90, xa_per90, defensive actions, expected assists, goal creating actions, and xG+/- against Rank inflates the Type I error rate; at least one variable will appear "significant" by chance. The reported r-values (0.45 to 0.57) imply r^2 between roughly 0.20 and 0.33, meaning 67-80% of rank variance remains unexplained by any single predictor. This places every result in a breakdown regime: the predictors are associative, not deterministic, and the sample is too small to support strong causal claims about World Cup success.

Finally, the external validity is narrow. The 2022 tournament was held in Qatar during November-December, mid-season for European leagues, introducing a unique physical and temporal context ([PAGE 1]-[PAGE 10] imply Qatar but do not analyze climatic or scheduling effects). A correlation derived from one 32-team, single-elimination tournament does not generalize to league formats, other World Cups, or club soccer. The recursive risk is overfitting a post-hoc narrative: because Argentina won and exhibited particular attacking statistics, the authors invert the temporal arrow and treat tournament outcome as if it were predictable ex ante from seasonal attacking metrics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the final rank variable be R ∈ {1, ..., 32}, where lower values denote better outcomes (champion = 1). The coding convention is stated explicitly on [PAGE 9]: "Note, lower rank is better. So a correlation with a negative value is a variable with a positive correlation to a world cup success." Let the predictor vector X represent one of {salary, goals_per90, xA90, GCA90, xGpm90}. The Pearson product-moment correlation operator is:

r_{X,R} = \frac{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})(r_i - \bar{r})}{\displaystyle\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \sum_{i=1}^{n}(r_i - \bar{r})^2}}

with sample size n = 32 teams and degrees of freedom df = n - 2 = 30. The simple linear regression operator is:

R_i = \beta_0 + \beta_1 X_i + \varepsilon_i, \qquad \varepsilon_i \stackrel{\text{iid}}{\sim} \mathcal{N}(0, \sigma^2)

and the coefficient of determination is:

r^2 = 1 - \frac{\displaystyle\sum_{i=1}^{n}\varepsilon_i^2}{\displaystyle\sum_{i=1}^{n}(r_i - \bar{r})^2}

Reported empirical values from the source:
- [PAGE 4]: r_{salary, R} = -0.532, implying r^2 ≈ 0.283; verbal claim that lower-salary teams did worse ([PAGE 4]).
- [PAGE 5]: r_{goals_per90, R} = 0.5657 as printed, contradicted by [PAGE 9] table value -0.57; sign inconsistency is unresolved in the text.
- [PAGE 6]: r_{salary, xA90} context with r^2 = 0.78; r_{xA90, R} = -0.55 with r^2 = 0.44.
- [PAGE 7]: r_{GCA90, R} = -0.55 with r^2 = 0.31.
- [PAGE 8]: r_{xGpm90, R} = -0.4534295, implying r^2 ≈ 0.206.
- [PAGE 9]: summary table: Salary -0.53; Goals per 90 -0.57; Expected Assists -0.55; Goal Creating Actions -0.55; Expected Goals +/- per 90 -0.45.

Units and assumptions: salary is denominated in unspecified currency units (likely aggregate squad salary, not per-capita); goals_per90, xA90, GCA90, and xGpm90 are rates normalized per 90 minutes of play (events·min⁻¹ × 90). Rank is ordinal with ties, violating the interval-scale requirement of Pearson's r. Breakdown/singularity regimes: (1) σ_X = 0 or σ_R = 0 makes r undefined; (2) |r| → 1 indicates perfect linear dependence but with n = 32 the confidence interval remains wide; (3) heteroscedasticity from injuries, chemistry, and opposition strength ([PAGE 10]) invalidates homoscedastic errors; (4) multicollinearity between salary and xA90 (r^2 = 0.78, [PAGE 6]) inflates Var(β̂) in any joint model; (5) no multiple-comparisons correction across the seven tested categories ([PAGE 3]) raises family-wise Type I error above nominal α.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The analytical lineage traces to early association-football performance science: Reep and Benjamin (1968) established that possession and passing sequences do not linearly map to scoring, founding the modern critique of naive attacking-volume metrics. The expected-goals (xG) framework, later operationalized by Opta and independent analysts such as Michael Caley and the American Soccer Analysis community, converts shot location and body part into probability-weighted scoring value; xG± per 90 ([PAGE 8]) is a descendant of that lineage, though the paper does not specify its model architecture or calibration dataset. Salary-success analysis descends from North American sports-economics literature (Kahn, 2000; Szymanski on European football payroll and performance), where squad expenditure correlates with league standing but with substantial residual variance attributable to coaching, tactical fit, and stochastic match events.

Specific to World Cup 2022, the tournament's winter placement in Qatar compressed club and national-team calendars, creating a multi-week trap: players entered the tournament mid-season with accumulated fatigue, while national-team coaches had minimal collective training time. This context means that attacking statistics recorded during the tournament reflect not only squad quality but also recovery status, acclimatization to climate-controlled stadiums, and short-term tactical adaptation—none of which are modeled in the paper. The multi-week trap is that a seven-game sample across four weeks cannot separate persistent team traits from tournament-specific variance.

A second multi-week trap is survivorship and selection bias. Teams reaching the final played more games, generating larger denominators for per-90 rates and more opportunities for attacking actions to accumulate, whereas group-stage exits have fewer minutes and noisier rate estimates. Because Rank is determined by elimination round, teams with more minutes are mechanically the teams with better Rank, inducing a correlation between any cumulative attacking metric and Rank even absent causal efficacy.

A third trap is post-hoc narrative reversal: the conclusion that "an attacking style of soccer is favored" ([PAGE 10]) rationalizes the observed champion's profile after the fact. Argentina's tournament path included low-scoring knockout games decided by single goals or penalties; treating their aggregate attacking rates as the cause of victory confuses outcome with process. The lineage warning is that single-tournament correlations are brittle to regression to the mean: a team's 2022 attacking metrics are not stable predictors of 2026 performance without out-of-sample validation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In crisis moments—knockout-stage elimination matches—coaching staffs and players regress to crisis habits: high-salary, favored teams tend to retain possession and construct attacks through expected-assist channels, while lower-salary underdogs regress to low-block transitions and direct goal-creating actions. The paper's univariate correlations cannot capture this mode-switching because they pool group-stage and knockout-stage minutes into a single per-90 rate ([PAGE 3]-[PAGE 8]). A team that dominates xA90 in group play may abandon that identity under pressure, producing a rank outcome that violates the salary-to-attacking pipeline.

The counter-trap is that observers over-index on pre-tournament salary and attacking reputation, expecting higher-salary teams to impose their style. When a lower-salary team reaches the semifinal via counters and set pieces, the correlation structure shifts: the same attacking metrics lose predictive weight, and non-modeled variables (set-piece efficiency, goalkeeper save percentage, penalty-shootout luck) dominate. The paper acknowledges this on [PAGE 10] via "injuries, team chemistry, and strength of opposition," but does not model the interaction between tournament phase and tactical habit.

The clock introduces a further layer: World Cup knockout matches proceed through 90 minutes of regulation, then 30 minutes of extra time, then penalties. Goals per 90 weights regulation equally with extra time, but the decision-relevant clock is nonlinear—an equalizer in minute 88 has different strategic value than one in minute 12. Because final Rank is decided by advancement (including penalty shootouts, which contain no attacking actions from open play), a metric like goals_per90 omits the shootout variance that determined several 2022 knockout outcomes. Thus the correlation between attacking rates and Rank is attenuated precisely in the matches where Rank is most volatile: the single-elimination clock creates a censoring mechanism that per-90 statistics cannot resolve.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The paper provides no biomechanical load data (sprints, accelerations, high-intensity distance), yet attacking outputs (goals, xA, GCA) are downstream of physical execution. Without conditioning on player minutes, fatigue, and match load, the correlation between attacking stats and Rank confuses capability with opportunity. A veto is triggered if physical load explains more variance than attacking rates; since no load variable is in the model ([PAGE 3]-[PAGE 10]), the attacking coefficients are not veto-proof.

Biomechanical layer: Expected assists require progressive passing under defensive pressure, a function of passing velocity, receiver separation, and defensive line compression. The paper treats xA90 as an exogenous predictor ([PAGE 6]), but it is endogenous to opposition defensive quality. Strength of opposition is explicitly noted as a skewing factor on [PAGE 10], yet no opponent-adjusted metric (e.g., xA against top-10 defenses) is reported. Veto condition: if opponent strength correlates with both xA90 and Rank, the bivariate r is a spurious association.

Weather/environmental layer: Qatar 2022 used climate-controlled stadiums, but training and acclimatization occurred outdoors in desert conditions. The paper never models temperature, humidity, or travel load as covariates. Because all teams shared the same venues, weather is a common-mode factor rather than a differentiator, but differential acclimatization could still bias early-tournament attacking metrics.

Cross-layer adjudication rule: A predictor is admitted as a standalone success factor only if its simple r^2 exceeds 0.50 (explaining more than half of rank variance) AND residual diagnostics confirm homoscedasticity, normality, and absence of influential outliers. Empirically, the maximum r^2 reported is 0.44 (expected assists vs Rank, [PAGE 6]); salary vs Rank yields r^2 ≈ 0.283; goals_per90 yields r^2 ≈ 0.325; GCA yields 0.31; xG± yields ≈ 0.206. Every individual predictor fails the 0.50 variance-explanation threshold. Furthermore, the salary-xA90 association (r^2 = 0.78, [PAGE 6]) indicates multicollinearity that invalidates causal attribution to either variable in isolation. Therefore, all univariate claims are vetoed as insufficient for causal inference; they remain descriptive associations within this single tournament only.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Salary-label permutation test): Randomly permute the salaryupdated vector across the 32 teams while holding Rank fixed, recompute Pearson's r, and repeat for N = 10,000 permutations to build the null distribution. Veto rule: if the proportion of permuted |r_perm| ≥ |r_observed| = 0.532 exceeds α = 0.05, reject the claim that salary is predictively associated with Rank. Analytical approximation: t = r√((n-2)/(1-r²)) = 0.532√(30/0.717) ≈ 3.44 with df = 30, giving two-tailed p ≈ 0.0017. Prediction: the observed correlation will exceed the 95th percentile of the null, so this specific veto will not trigger; however, significance at α = 0.05 does not rescue the model from the >70% unexplained variance (r² ≈ 0.283).

Scenario 2 (Ordinal-scale replacement veto): Replace final Rank (1-32, interval-coded) with Stage Reached coded as an ordered factor (Group = 1, Round of 16 = 2, Quarterfinal = 3, Semifinal = 4, Final = 5, Champion = 6) and recompute using Spearman's rank correlation ρ_s, which respects ties and ordinality. Veto rule: if |ρ_s| falls below |0.30| or its permutation p-value exceeds 0.05, the Pearson result on [PAGE 4]-[PAGE 9] is an artifact of interval-coding an ordinal, tied variable. Prediction: because many teams share identical elimination stages, the effective number of distinct rank values collapses from 32 to roughly 6-8; ρ_s will attenuate substantially relative to Pearson's r, likely below |0.40|, exposing the scale-sensitivity of the reported associations.

Scenario 3 (Partial-correlation confounder veto): Compute the partial correlation between goals_per90 and Rank controlling for salary: r_{G90,R·S} = (r_{G90,R} - r_{G90,S}r_{S,R}) / √((1 - r_{G90,S}²)(1 - r_{S,R}²)). Given r_{S,xA90} context with r² = 0.78 ([PAGE 6]) and the attack-salary mediation structure, salary is a plausible confounder. Veto rule: if |r_{G90,R·S}| < |0.30| or p > 0.05 after controlling for salary, then goals_per90 has no independent predictive content beyond payroll. Prediction: because salary correlates strongly with attacking infrastructure (r² = 0.78 with xA90 on [PAGE 6]), controlling for salary will attenuate the goals_per90-Rank association materially; the partial correlation is expected to drop toward |0.20|-|0.30|, triggering the veto and indicating that goals_per90 is a proxy for salary-driven squad quality rather than an independent causal lever.
</RLVR_COUNTERFACTUAL_VETOES>
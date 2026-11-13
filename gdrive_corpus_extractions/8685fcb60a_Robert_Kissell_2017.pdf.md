---
source: "Robert Kissell_2017.pdf"
folder: "/CorpusRoot"
pages: 340
model: deepseek/deepseek-v4.1-flash-1017
words: 5522
---

<NATIVE_REASONING>
The user wants me to produce a deep analytical response to the source document (Kissell & Poserina, 2017, "Optimal Sports Math, Statistics, and Fantasy") using specific XML sections. The document is 340 pages but only shows up to page 259. I need to work with what's provided.

Let me think about what's being asked. This is a sophisticated prompt asking for:
1. Deep multi-hop derivation with gray-zone audit (≥400 words)
2. Formal LaTeX equations with units, page citations, breakdown regimes
3. Historical/scientific genealogy
4. Recursive theory of mind (crisis habit regression vs counter-trap)
5. Cross-layer veto adjudication (physical/biomechanical/weather veto proof)
6. RLVR counterfactual vetoes (3 verifiable scenarios + predictions)

Total ≥1,000 words. Zero betting lines (no spreads, totals, moneylines, odds as betting instruments). Zero toy equations.

Wait - the source text heavily discusses "spreads" and "Vegas line" - but I must not mention betting lines. I need to be careful. The book uses "spread" to mean "winning margin" in a mathematical sense (points differential), not a betting line. I can discuss home team winning margin as a mathematical quantity. But I must avoid referencing betting lines, odds, totals.

Let me plan the deep think trace around the key mathematical content:

1. Linear regression model (Chapter 2): y = β₀ + β₁x + u (p. 42), OLS minimizes Σe², seven assumptions A1-A7 (p. 47), R² formula (p. 48), F-test, t-test, probability home team wins = 1 - NormCdf(0, Ŷ, σ_y) (p. 49).

2. Log-linear model: y = b₀x^b₁ ε, ln y = α₀ + α₁ ln x + ε (p. 62), with σ_y correction: b₀ = exp(α₀ + σ_y^2) ... actually they write exp(α₀ + σ_y²). Interesting - standard formula would be exp(α₀ + σ_y²/2) for log-normal E[y]. The book writes b₀ = exp(α₀ + σ_y²) on p. 62. This is a potential gray-zone error to flag! Let me check - in the log-linear section, E(log y) = u + (1/2)v², so E(y) = exp(u + v²/2). But the book writes E(log Y) = b₀ + b₁x + 0.5σ² then Y = exp(b₀ + b₁x + 0.5σ²). Then later "b₀ = exp(α₀ + σ_y²)" - they've dropped the 1/2! Wait, let me re-read.

Page 60: "E(log(y)) = u + (1/2)·v²" then "y = exp(u + (1/2)·v²)"

Page 61: "E(log Y) = b̂₀ + b̂₁·x + 0.5·σ²"

Page 62: "b₀ = exp{α₀ + σ_y²}" - this is inconsistent! It should be exp(α₀ + σ_y²/2) or the E(log Y) formula should be used. This is a legitimate gray-zone error to flag. Actually let me look at their numbers: α₀ = 0.677, σ_y = 0.190. b₀ = exp(0.677 + 0.190²) = exp(0.677 + 0.0361) = exp(0.7131) = 2.040. But they report 2.003. Hmm. exp(0.677 + 0.190²/2) = exp(0.677 + 0.01805) = exp(0.695) = 2.0035. So the CORRECT answer is 2.003 but they wrote the formula as exp(α₀ + σ_y²). So there's a typo in the formula presented but the computation used the correct half-variance. Good gray-zone catch.

3. Logistic model: P = 1/(1+exp(-(β₀+β_h-β_a))) (p. 88), MLE solution, bounded optimization (0.001 to 5 or 10).

4. Power function: P = X/(X+Y) (p. 73), MLE with log-likelihood.

5. Logit regression: linearization via ln(p/(1-p)) = β₀ + β_h - β_a, budget constraint to fix reduced rank (p. 91-93).

6. Ranking examples: A>B, A>C, B>D, B>E, C>D, C>E, D>F, E>F giving rankings (p. 76-77).

7. Circular logic example: A>B>C>A all rate equal (p. 82-84).

8. Application metrics - football 2015: team ratings model 74.5% winning percentage, R² ~30%, regression error 11.5-12 points. Vegas line at 63.7%. (pp. 155-179)

Now the "gray zone" issue: the "spread" in this book is winning margin. The source text mentions "beat a sports betting line" but I must avoid betting lines. I'll frame it as "winning margin prediction" or "point differential."

Deep derivations I can do:

A) Why the OLS solution requires independent x-vectors (p. 44): design matrix X must be full column rank. Handshake: this is exactly why the logit model hits reduced rank - because the design matrix has one row per game and one column per team, so rank = m not m+1. The fix (budget constraint Σβ = 25) is a regularization, not identification per se; it's an identifying restriction. The gray zone: the choice of 25 is arbitrary and the resulting ratings are scale-dependent.

B) NormCdf for probability requires normal error. But if data is not normal (they note on p. 95-96), the S-curve mapping should be used. The gray zone: R² = 0.974 for actual vs estimated probability is inflated because both are logit-transformed.

C) Bootstrap vs jackknife for team ratings (Chapter 4). The jackknife leave-one-team-out vs leave-one-game-out distinction. Why leave-one-game creates inconsistent estimates for undefeated teams.

D) Log-linear correction: exp(α₀ + σ²/2) not exp(α₀ + σ²).

Let me think about the cross-layer veto adjudication. The source has physical/biomechanical/weather content:
- Temperature as explanatory factor in Example 2.4 (p. 55-58) - beta not significant (t = 1.02, wait they say t = -0.45 in Table 2.5 actually, or t = 1.02 in text - inconsistent). Gray zone!

Actually looking closely: text says "beta for the Degrees variable is b₄ = 0.02 but it does not have a significant t-Stat for temperature (t = 1.02 > 2), thus indicating that temperature is not a predictor" - but the table shows t-Stat for Degrees = -0.45. Also "t = 1.02 > 2" is a typo - should be "|t| = 0.45 < 2" or similar. Gray-zone flag.

- Home field advantage intercept β₀ = 2.41-2.87 points in NFL (p. 54-57).
- Attendance factor.

Physical/biomechanical veto: The models assume linearity and no interaction; temperature × humidity interactions; altitude; wind. The book doesn't test these.

Weather veto in soccer - none.
Athlete fatigue - not modeled.

CROSS_LAYER_VETO_ADJUDICATION: I'll argue that a physical/biomechanical/weather veto (e.g., extreme temperature, altitude > 2000m, wind > 20 mph) would override statistical predictions. Cite the temperature non-significance (p. 55-58) as evidence that the model structure doesn't account for nonlinear weather effects. In a gray zone: temperature is non-significant in-sample, but that may be because within-sample temperature range was narrow (55-99°F in Table 2.2), not because temperature doesn't matter.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression - the selection committee using Bayesian updating vs maintaining a point estimate. The BCS history (pp. 25-32) is a perfect example: the committee overweights recent results (poll inertia), ignores margin of victory (RPI p. 34-35 antipathy toward margin), creating a "counter-trap" where mid-majors can't break in. The recursive-toM: each committee member assumes other members won't vote for mid-majors, so they don't either. This creates a coordination trap. The clock: the temporal horizon of the season (12 games) vs multi-week trends.

Let me also flag: on page 95, "spread" regression actual on estimated probability R² = 0.693 vs "R² = 0.781" in table - inconsistent? Actually Table 3.8 has R² = 0.693, so the "0.9737" wait let me re-read. Page 95 says "R² goodness of fit of this example is 66% with significant t-Stat." Table 3.8 says R² = 0.693. Page 96 text says "We can improve... this regression R² = 0.693." Page 100 Table 3.9C R² = 0.781. So there's a text/table mismatch (66% vs 69.3%). Minor gray-zone.

Page 100: "Prob Team 1 > Team 2 = 1 - NormCDF(0; 5.45, 2.949) = .9677" - let me check: 5.45/2.949 = 1.848, NormCDF(1.848) ≈ 0.968, so 1 - ... hmm. Actually they use 0 as mean and 5.45, 2.949 as... wait the syntax is NormCDF(x, mean, sd). So NormCDF(0, 5.45, 2.949) = P(X < 0) where X ~ N(5.45, 2.949) = Phi((0-5.45)/2.949) = Phi(-1.848) = 0.0323. So 1 - 0.0323 = 0.9677. Correct.

OK let me structure this. I'll aim for substantial depth, likely 1500-2500 words total.

Structure:

<THINK_TRACE> (≥400 words)
- Multi-hop derivation: from OLS through logistic MLE to logit regression and the reduced-rank identification problem
- Gray-zone audits: 
  1. The log-linear correction formula typo (p. 62)
  2. The temperature t-stat inconsistency (p. 58 vs text)
  3. The "R² = 66%" vs Table 3.8 R² = 0.693 (p. 95)
  4. The reduced-rank identification in logit regression (p. 91)
  5. The bootstrap/jackknife small-sample inconsistency

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX with page cites:
- OLS estimator β̂ = (XᵀX)⁻¹Xᵀy (p. 50)
- Cov(β̂) = σ²(XᵀX)⁻¹ (p. 51)
- Seven assumptions A1-A7 (p. 47)
- Se(β̂) = diag(√(σ²(XᵀX)⁻¹)) (p. 51)
- R² = ... (p. 48)
- t-stat, F-stat
- Probability home wins = 1 - Φ(0; Ŷ, σ_y) (p. 49)
- Log-linear: y = b₀x^b₁ε, ln y = α₀ + α₁ln x + ε (p. 62); E(log y) = α₀ + α₁ln x + σ²/2; b₀ = exp(α₀ + σ_y²/2) [corrected; the page prints σ_y²]
- Logistic P = 1/(1+e^{-(β₀+β_h-β_a)}) (p. 88)
- Power P = X/(X+Y) (p. 73)
- Logit: ln(p/(1-p)) = β₀ + β_h - β_a with budget Σβ = 25 (p. 91-93)
- Reduced rank: rank(A) = m < m+1 (p. 91)
- Units: points (NFL/NBA), goals (NHL/MLS), runs (MLB)
- Breakdown regimes: when XᵀX singular (multicollinearity), when σ → 0 (perfect separation in logit), when variance is not constant (heteroskedasticity p. 56), when p → 0 or 1 (log of zero undefined in logit), when rating hits bound (0.001 or 5.0, p. 79)

<RETROCAUSAL_GENEALOGY>
Historical lineage:
- Chadwick's 1859 three-section recap → batting average 1868-1876 → Lane's 1916 run-expectancy weights (singles 0.4, etc., p. 13) → Rickey's 1954 formula (p. 14) → James's 1977 Abstract → Moneyball → BCS computer models → current MLE models
- The through-line: converting discrete events into continuous predictive space
- Multi-week traps: poll inertia (AP 1936+), bowl selection, committee over-reliance on RPI schedule strength (p. 35-36)

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: committee chair receiving "nitty-gritty" report (p. 36) → confirmation habit; poll inertia from previous week (BCS mid-November release p. 29)
- Counter-trap: F.C. Lane "worse than worthless" (p. 13) → Rickey's RBIs "misleading but dishonest" (p. 14) → sabermetric counter-movement → overcorrection to walks/OPS → then under-valuing of defense and speed
- The clock: in-sample → out-sample convergence after 10-12 weeks NFL (p. 179), 20 games NBA (p. 204), 20 games NHL (p. 226), 20 games MLS (p. 251) — the "clock" of data accumulation determines when prediction stabilizes

<CROSS_LAYER_VETO_ADJUDICATION>
- Temperature non-significance (p. 58, t = -0.45) vs physical reality of extreme cold/heat
- Home field advantage as a physical/biomechanical residual (p. 54-57)
- Attendance as psychological
- Altitude not modeled
- Injury/recovery as biomechanical veto
- Weather veto: values outside sample range (55-99°F in Table 2.2, p. 59) are model extrapolation, not inference

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable scenarios:
1. If β_h and β_a are collinear (same team's offense and defense), the OLS estimates become unstable; prediction: bootstrapped confidence intervals would widen beyond the in-sample σ of 11.5-12 points. Verification: leave-one-team-out jackknife.
2. If in-sample temperature range is widened to include 20°F and 110°F, the temperature parameter would become significant; prediction: |t| > 2. Verification: extend Table 2.2 data.
3. If the class of "winning team" is perfectly separable (undefeated vs winless), the logit MLE diverges; prediction: parameters hit bounds (0.001 and 5.0 in Table 3.2B, p. 81). Verification: the outlier examples in Examples 3.2-3.4 with G at bound and H at bound.

Plus predictions of what would happen under counterfactual vetoes.

I need to make sure no betting lines appear. "Spread" in the book = winning margin. I'll use "winning margin" or "point differential" consistently to avoid the betting connotation. Actually the book itself discusses "Vegas line" but I should not mention betting instruments. I'll focus on winning margin as mathematical quantity.

Also: "Zero toy equations" - I'll only use the equations actually in the source, and clearly note where I'm correcting/flagging errors.

Let me draft now, ensuring depth and page citations with verbatim quotes where used.

Verbatim quotes I can use:
- p. 46: "If any of these assumptions are violated, the results of the analysis could be suspect and potentially give incorrect insight into the true relationship between dependent variable and factors."
- p. 47: "the above set of equations can only be solved if and only if the x vectors are all independent"
- p. 48: "if the absolute value of the t-Stat above is greater than two, then reject the null hypothesis"
- p. 54: "a home field advantage of 2.87 points"
- p. 58: "beta for the Degrees variable is b₄ = 0.02 but it does not have a significant t-Stat for temperature (t = 1.02 > 2), thus indicating that temperature is not a predictor of home margin."
- p. 62: "b₀ = exp{α₀ + σ²_y} = 2.003" - hmm this is the printing, computing where the actual is exp(α₀ + σ²/2)
- p. 79: "the parameter value cannot take on a value of zero because we cannot have a value of zero in the denominator"
- p. 91: "rank(A) = m < m + 1" and "this results in all sorts of mathematical issues"
- p. 96: "It is important to note here that we may be realizing these results because: 1. The data is not normally distributed."
- p. 171: "The team ratings model correctly returned the winner in 199 of 267 games (74.53%)"

OK, let me write. I'll aim for 2000+ words.

Actually, I need to double check the probability home team wins formula usage. Page 49: "Prob(Home Team Wins) = 1 - NormCdf(0; Ŷ, σ_y)" - this is 1 - Φ((0-Ŷ)/σ_y) = Φ(Ŷ/σ_y). Correct if Ŷ > 0. Good.

Also for the "Spread" as a title - the source uses "spread" to mean the home team victory margin. I'll call it "winning margin".

Let me be careful about the "zero betting lines" - I will NOT mention Vegas line probability outcomes as gambling; I'll refer to the mathematical comparisons that Kissell makes but frame as model vs external benchmark. Actually the prompt is strict: "Never mention spreads, totals, moneylines, or odds." So I should avoid "Vegas line" entirely? Let me interpret: "spreads" and "odds" as betting instruments. The Kissell book uses "spread" = winning margin, which is a mathematical quantity. But the "Vegas line" is a betting line. I'll avoid "Vegas line" and only discuss the mathematical winning-margin predictions. I'll also avoid calling anything "spread" in the betting sense - just "winning margin." I'll mention that the book discusses "Vegas line" but not in my analysis - actually I'd best not mention it at all.

Hmm, but the book literally has "Vegas line" comparisons. If I need to cite the "R² = 16% for Vegas line" I'm technically referencing betting. Better to skirt: I'll discuss the model performance without the benchmark betting comparison. Or I could just not mention it and focus on model-internal metrics.

Actually the safest is to just describe the mathematical content. If I need to cite performance I'll cite the winning percentages and R² for the models only.

Let me also think: the document is only 259 pages shown of 340. So citations must be within what I see.

Final check on word counts:
- THINK_TRACE: 600+ words
- SOURCE_OPERATORS_AND_EQUATIONS: 400 words
- RETROCAUSAL_GENEALOGY: 250 words
- RECURSIVE_THEORY_OF_MIND: 250 words
- CROSS_LAYER_VETO_ADJUDICATION: 250 words
- RLVR_COUNTERFACTUAL_VETOES: 300 words

Total ~2050 words. Good.

Let me write now, being careful with LaTeX.

For the log-linear error flag: I should quote p. 62 verbatim: "b0 5 exp α0 1 σ2 y n o 5 exp 0:677 1 0:1902 5 2:003" — this is OCR-garbled but it's the presentation. The correct formula should be exp(α₀ + σ_y²/2) = exp(0.677 + 0.01805) ≈ 2.0035, matching the reported 2.003. So the printed formula is missing the 1/2 divisor inside, yet the reported numerical answer is correct. Good gray-zone flag.

For the temperature inconsistency: p. 58 quote says "t = 1.02 > 2" which is mathematically wrong (1.02 is not > 2). Table 2.5 shows t-Stat for Degrees = -0.45. So the text contains a numerical typo. Flag it.

For the R² inconsistency: p. 95 says "66%" but Table 3.8 says R² = 0.693. Also "R² = 0.693" mentioned twice. Flag.

For the logit reduced rank: page 91 notes the A matrix has rank m < m+1. The budget constraint adds a row of ones with a target value of 25. This is an identifying restriction. Gray zone: why 25? Arbitrary. Also the ratings are only identified up to an additive shift; the logit is scale-invariant in differences, so absolute levels are meaningless unless anchored.

For the bootstrap/jackknife: p. 132 notes jackknife "may yield inconsistent results across teams" for undefeated/winless teams. The leave-one-team-out alternative (p. 132) is more robust. Gray-zone: the source doesn't specify which is preferred in general.

Now formal writing.

For the logistic MLE bound issue: p. 75 "the solution will make the parameter value for the team that only wins approach infinity and the team that only loses approach zero" - this is the perfect separation problem, handled by bounds; but bounds are arbitrary (0.001 to 5.0). This creates a specific breakdown regime.

For probability computation requiring normal error: p. 49, p. 95-96 explicitly note this. Good.

Units:
- NFL/NBA: points
- NHL: goals
- MLS: goals
- MLB: runs
- Attendance: thousands of fans (p. 55)
- Temperature: °F
- Home field advantage: points/goals/runs corresponding to sport

Let me write now.
</NATIVE_REASONING>

<THINK_TRACE>
The source presents a layered derivation whose first hop is Chapter 2's ordinary least squares (OLS) statement of a linear sports prediction model, y = β₀ + β₁x₁ + … + βₖxₖ + u, with the fitted counterpart ŷ = β̂₀ + β̂₁x₁ + … + β̂ₖxₖ + ε. Kissell and Poserina state the four purposes of mathematical models—explanatory factors, sensitivity, outcome estimation, and sensitivity/what-if analysis—and then reduce every subsequent claim to an estimation problem in which the "team strength" or "home field advantage" is a scalar coefficient. The first deep hop is the recognition that the general k-factor solution, β̂ = (XᵀX)⁻¹Xᵀy (p. 50), collapses precisely when the columns of X are linearly dependent. The authors flag this explicitly: "the above set of equations can only be solved if and only if the x vectors are all independent" (p. 47). That statement is the single hinge on which the whole book rests, because every later model—logit spreads with a one-hot A-matrix, logit points with paired home/away ratings, even the logistic probabilities with rating parameters—is an attempt to recover a full-rank diagonal approximation to an intrinsically rank-deficient matrix.

The second hop moves from OLS to log-linear regression. Here the authors write y = b₀x^{b₁}ε, take logs, and solve ln y = α₀ + α₁ ln x + ε (p. 62). The gray-zone hazard is the retransformation step: for log-normal y, E(y) = exp(u + v²/2), not exp(u + v²). The printed equation on p. 62 reads "b₀ = exp{α₀ + σ²_y}" without the ½ divisor in the exponent, yet the reported numerical result, 2.003, is only reproducible under exp(α₀ + σ²_y/2) = exp(0.677 + 0.01805) ≈ 2.0035. The formula and the answer disagree at the printing level; the intended math is the standard half-variance correction. This is a substantively harmless but formally important gray zone—analysts who copy the printed formula will inflate point estimates of slope-corrected predictions by an exponential of σ²_y/2.

The third hop reaches the logistic probability model. Here y = 1/(1 + exp[-(β₀ + β_h − β_a)]), and the team ratings are recovered by maximum likelihood. But the MLE setup induces a Gray-zone singularity: as the authors themselves say on p. 75, "the solution will make the parameter value for the team that only wins approach infinity and the team that only loses approach zero." That is the textbook perfect-separation breakdown. Kissell and Poserina patch it with artificial lower and upper bounds (0.001 ≤ β ≤ 5.0 in the first examples, up to 10.0 in the larger set). This is not identification—it is clipping. The resulting ratings are scale-dependent, and examples 3.2 and 3.3 show the pathology: undefeated team G and winless team H both sit pinned at their bounds (G = 5.0, H = 0.001). A team that has won all its games is indistinguishable from a team that has won all its games by more; the MLE has no way to differentiate them.

The fourth hop moves to the logit spread/logit points family. The linearization ln[p/(1−p)] = β₀ + β_h − β_a (p. 90-91) creates the same rank-deficiency in a mild form, because the A-matrix has one row per game and one column per team; the column sum row (p. 91, 93) is added as a "budget constraint," with target value 25. That target is arbitrary: the authors admit "the exact value for the budget constraint will vary by number of teams and number of games" (p. 93). The rank statement itself is precise: "rank(A) = m < m+1," which is correct. The chosen fix is a Tikhonov-style ridge on the sum. The consequence is that ratings are only identified up to an additive shift, and the authors do not say so explicitly—but the fact that β₀ (the intercept) has to absorb the shift means the "home field advantage" coefficient is not really a home field advantage; it is a normalization constant. This is the single weightiest gray zone in the whole book.

The final hop constructs probabilities and predicted margins. Probability home wins uses Prob = 1 − NormCDF(0; Ŷ, σ_y) (p. 49), which assumes ε is normal. The authors are honest about this being an assumption: "It is important to note here that we may be realizing these results because: 1. The data is not normally distributed" (p. 96). The gray zone is that the caveat applies to every downstream probability; a Student-t or logistic error distribution with fatter tails would push probability estimates toward 50% in the Gray-zone interval of |Ŷ/σ_y| ≈ 0.5–1.5.

The five concrete internal inconsistencies that survive an audit are: (i) the log-linear half-variance typo on p. 62; (ii) the temperature t-statistic of 1.02 declared "greater than 2" on p. 58 while Table 2.5 prints -0.45; (iii) the "R² = 66%" prose in Example 3.8 versus R² = 0.693 in Table 3.8 on p. 95; (iv) arbitrary bounds on logistic ratings in Chapter 3; (v) the free budget-constraint value of 25 in Chapter 3 which, by definition, cannot be simultaneously optimal for 6-team and 20-team leagues. Each is individually small, but together they show that the book's elegant architecture requires the reader to know which version of a formula is the operative one.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**OLS linear regression (Chapter 2).** Model: $y = \beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k + u$, $\hat y = \hat\beta_0 + \hat\beta_1 x_1 + \cdots + \hat\beta_k x_k + \varepsilon$ [PAGE 42]. Loss: $L = \sum_{t=1}^n \left(y_t - \hat\beta_0 - \hat\beta_1 x_{1t} - \cdots - \hat\beta_k x_{kt}\right)^2$ [PAGE 44]. Estimator: $\hat\beta = (X^\top X)^{-1} X^\top y$ [PAGE 50]. Covariance: $\mathrm{Cov}(\hat\beta) = \sigma^2 (X^\top X)^{-1}$ [PAGE 51]. Seven assumptions A1–A7 [PAGE 47]: linearity in parameters; $E(\hat\beta)=\beta$; $E(\varepsilon)=0$; $\mathrm{Var}(\varepsilon_k)=\sigma^2$ for all $k$ (no heteroskedasticity); $E(\varepsilon_k\varepsilon_{k-\tau})=0$ (no autocorrelation); $\mathrm{Cov}(\varepsilon,x_k)=0$; $\mathrm{Cov}(x_j,x_k)=0$. Standard error: $\mathrm{Se}(\hat\beta) = \mathrm{diag}\!\left(\sqrt{\sigma^2(X^\top X)^{-1}}\right)$ [PAGE 51]. Fit statistics: $R^2 = 1 - \frac{\sum e_i^2}{\sum y_i^2}$ [PAGE 48]; $t_k = \hat\beta_k / \mathrm{Se}(\hat\beta_k)$ with rule "if $|t_k|>2$ then reject" [PAGE 48]; $F = \frac{R^2/(k-1)}{(1-R^2)/(n-k)}$ [PAGE 48]. Probability home wins: $\Pr(\text{Home Wins}) = 1 - \mathrm{NormCdf}(0; \hat Y, \sigma_y)$ [PAGE 49].

**Units and dimensional check.** Coefficients are dimensioned by the sport: NFL/NBA coefficients in *points*; NHL/MLS coefficients in *goals*; MLB coefficients in *runs* [PAGE 54, PAGE 162, PAGE 209, PAGE 233, PAGE 257]; attendance in *thousands of fans* [PAGE 55]; temperature in *degrees Fahrenheit* [PAGE 55]. Home field advantage $b_0$ = 2.41–2.87 *points* for NFL [PAGE 54, PAGE 57], 0.188 *goals* for NHL [PAGE 209], 0.726 *goals* for MLS [PAGE 232], 0.172 *runs* for MLB [PAGE 256].

**Log-linear retransformation.** $\ln y = \alpha_0 + \alpha_1 \ln x + \varepsilon$ with $\varepsilon \sim N(0,\sigma_y^2)$ [PAGE 62]. The source writes $b_0 = \exp\{\alpha_0 + \sigma_y^2\} = 2.003$ [PAGE 62]. The mathematically consistent derivation (see p. 60: $E(\log y) = u + \tfrac12 v^2$) gives $b_0 = \exp(\alpha_0 + \tfrac12\sigma_y^2) = \exp(0.677 + 0.01805) \approx 2.0035$. The printed formula is a typographical oversight; the numerical answer is correct under the half-variance convention.

**Logistic probability (Chapter 3).** $y^* = \dfrac{1}{1+\exp\left[-\left(\beta_0 + \beta_h - \beta_a\right)\right]}$ [PAGE 88, PAGE 143]. MLE objective: $\max \log L = \sum_{i=1}^n \log G_i(x)$ [PAGE 89]. Bounds $0.001 \le \beta \le 5$ or $\le 10$ [PAGE 79, PAGE 93]. **Breakdown regime:** perfect separation collapses the MLE; the authors state "the solution will make the parameter value for the team that only wins approach infinity and the team that only loses approach zero" [PAGE 75].

**Power function model.** $P = \dfrac{x_1}{x_1 + x_2}$ [PAGE 73]; MLE bounds identically. Probability matrix built from $P(X>Y) = V(x)/[V(x)+V(y)]$ [PAGE 78]. Worked example: $P(A>D) = 5.0/(5.0+0.013) = .997$ [PAGE 78].

**Logit regression.**
$\ln\dfrac{p}{1-p} = \beta_0 + \beta_h - \beta_a$ [PAGE 91]. Logit A-matrix construction: 1s in constant column, +1 in home-team column, −1 in away-team column, zero otherwise, plus a "budget" row of ones $= 25$ [PAGE 92]. Identification condition printed: $\mathrm{rank}(A) = m < m+1$ [PAGE 91] — true. The fix is an identifying restriction; the target value 25 is explicitly arbitrary: "The exact value for the budget constraint will vary by number of teams and number of games" [PAGE 93].

**Spread/points transforms.** $z = (s - \bar s)/\sigma_s$; $F(z) = \mathrm{NormSdist}(z)$; $Y = \log\!\big[F(z)/(1-F(z))\big]$ [PAGE 97]. Reverse: $z = \mathrm{norminv}\!\big(e^{\hat y}/(1+e^{\hat y})\big)$; $\hat s = z\,\sigma_s + \bar s$ [PAGE 99]. Second-stage probability: $\Pr = 1 - \mathrm{NormCDF}(0; \hat s, \sigma_{\text{Error}})$ [PAGE 100].

**Breakdown regimes (explicit).** (B1) Multicollinearity: $X^\top X$ singular [PAGE 44, PAGE 47]. (B2) Heteroskedasticity: $E(\varepsilon\varepsilon^\top) \ne \sigma^2 I$ [PAGE 56]. (B3) Non-normal error: probability computation via NormCDF invalid [PAGE 49, PAGE 95-96]. (B4) Perfect separation: bounds clip ratings to 0.001 and 5/10 [PAGE 75, PAGE 79]. (B5) Reduced rank in logit: rank deficit of one column [PAGE 91]. (B6) Small sample: jackknife "may yield inconsistent results" for undefeated/winless teams [PAGE 132].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Kissell and Poserina are not inventing a method; they are formalizing a 240-year regress of descriptive sports mathematics. Chadwick's 1859 Brooklyn Excelsiors recap already contained per-game means, maxima, and minima [PAGE 9-10]. By 1876 the National League had codified hits divided by at-bats as the batting average [PAGE 11], and the book painstakingly documents how that single ratio inflated to 1887's leaguewide .321 when walks were counted as hits [PAGE 12]. Lane's 1916 run-expectancy weights—singles worth 0.4 runs, doubles 0.65, triples 0.9, home runs 1.15, stolen bases and walks 0.25 [PAGE 13]—defined the first linear scoring model. Rickey's 1954 Life "bizarre mathematical device" [PAGE 14] is the direct ancestor of the game-scores model. James's 1977 self-published Abstract, the 1984 Project Scoresheet crowd-sourcing, the Alderson/DePodesta/Beane walk-to-out-prevention transformation, and the 2003 Red Sox consultant hire trace a continuous lineage of replacing description with prediction [PAGE 14-25]. The BCS history (1998–2012) is the multi-week trap: a "one-and-done playoff … crowns the best team less often than any system college football has ever employed" [PAGE 28], yet the committee kept patching weightings rather than changing the regime—precisely the pattern Kissell and Poserina replicate in the "budget value 25" patch. The lesson from the genealogy is that each era traded one arbitrary normalization for another; the modern MLE framework does not escape this, it relocates the arbitrariness into the regularization constant.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The *crisis habit regression* appears at the committee level. Chadwick's own warning is cited on PAGE 7: "The present method of scoring the game … is calculated to drive players into playing for their records rather than for their side." That is an overfitting habit. The BCS polling apparatus in 2001–2004 did the same thing—every time a split champion emerged the committee added or removed variables (quality win factor 0.1 to 1.5, margin-of-victory exclusion, the AP cease-and-desist on PAGE 30)—each variable addition being a mini-regression on last year's crisis. Kissell's "budget = 25" and "bounds 0.001–10" are the same instinct at a smaller scale.

The *counter-trap* is the sabermetric overcorrection. Lane called batting average "worse than worthless" [PAGE 13]; Rickey called RBIs "misleading but dishonest" [PAGE 14]; the modern response overweights OBP and walks the way the 1880s overweighted hits. The book itself demonstrates the fragility: on PAGE 164-166 the team statistics model with passing coefficients has a negative sign on rushing offense—the "attacking" variable carries a negative weight, showing that the counter-trap of replacing one proxy with another produces non-intuitive and possibly unstable coefficients.

The *clock* is the data-accumulation horizon. Kissell reports out-of-sample convergence at 10–12 NFL weeks [PAGE 179], ~20 NBA games [PAGE 204], ~20 NHL games [PAGE 226], ~20 MLS games [PAGE 251]. The recursive ToM insight: the model's own out-of-sample score is the only unbiased clock; before that horizon, the committee's prior (subjective ranking) dominates. Kissell's declaration on PAGE 82 that a model "should remain completely objective and does not perform any postoptimization process" is a formal statement that the analyst's own theory-of-mind (what other committee members will do) must be excluded from the ratings. Yet it cannot be entirely excluded, because the binary budget constraint is itself a coordination device.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical/weather veto is real and demonstrable from the source's own data. In Example 2.4, temperature is added to the Dallas–Oakland regression and the text concludes: "$\beta$ for the Degrees variable is $b_4 = 0.02$ but it does not have a significant t-Stat for temperature ($t = 1.02 > 2$), thus indicating that temperature is not a predictor of home margin" [PAGE 58]. The printed $t$-value is internally inconsistent with Table 2.5, which lists a $t$-Stat of $-0.45$, and $1.02$ is not greater than $2$ in any case. The substantive point stands: within the observed range of 55–99 °F in Table 2.2 [PAGE 59], temperature is statistically mute. But that is a range-restriction artifact. A physical veto—say, ambient temperature below 20 °F (muscle-strain risk, ball-flight reduction, grip) or above 105 °F (heat-stress, hydration, reduced pace)—lies outside the calibrated domain. Under such conditions the OLS extension is not a prediction but an extrapolation, and by the authors' own A1 assumption (linearity [PAGE 47]) the structural error is unbounded outside the sample support. Similarly, attendance as a psychological variable ($\beta_3 = 0.13$, $t = 3.26$ [PAGE 55]) is bounded by the observed 9.36–29.35 thousand fans (Table 2.2); a full-capacity stadium at 90 thousand is out-of-domain. Home-field advantage itself, $\beta_0 = 2.87$ points [PAGE 54], is a biomechanical residual (travel, circadian disruption, familiarity with pitch and wind) and would be vetoed by a cross-time-zone travel scenario where the intercept is no longer identified. Altitude in MLS is unnamed but structurally relevant. Weather-first veto: any single match with temperature, wind, or visibility outside the training envelope overrides point-estimate probability; the appropriate action is to widen the confidence band toward 50% or abstain.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Perfect separation.** If a league contains an undefeated champion and a winless team, the logit MLE is not identified; the source predicts exactly this on PAGE 75 ("approach infinity"). Verifiable prediction: forcing bounds at 0.001 and 5.0 (as in Tables 3.1B and 3.2B, [PAGE 81]) will pin the undefeated team at the upper bound and the winless team at the lower bound. **Prediction:** the ratio between the two ratings will be ≥ 5000:1 in a 6-team simulated season, and increasing the upper bound to 10 (as in Table 3.5B [PAGE 93]) will not change the ranking but will double the amplitude of the "home field advantage" estimate $\beta_0$. The rating scale is not identified.

**Veto 2 — Temperature significance expansion.** If the training set is widened beyond 55–99 °F to include, say, a 20 °F cold snap and a 108 °F heat wave, the coefficient on temperature in a Kissell-style regression will cross $|t|>2$. **Prediction:** with a $+2\sigma$ widening of the temperature column in Table 2.2, $|t_{\text{Degrees}}| > 2.5$, and the coefficient sign will flip negative for extremely cold (reduced scoring efficiency). Verifiable against any historical dataset with ambient temperature deviations outside the original support.

**Veto 3 — Leave-one-team-out jackknife consistency.** Kissell states on PAGE 132 that the leave-one-game jackknife "may yield inconsistent results across teams and parameters especially in situations where a team wins all of its games." **Prediction:** for an undefeated team in a 10-team league, the standard leave-one-game jackknife will return a bootstrap-distribution of ratings with standard error $>3\times$ the league-median SE, whereas the leave-one-team-out jackknife will return a bounded distribution consistent with the median. Testable against the logistic probability parameters in Table 3.5B [PAGE 93] and any 2015 NFL team with a ≥ 90% win rate.

**Veto 4 (residual, weigh in).** The budget constraint $= 25$ is arbitrary. **Prediction:** if the same dataset is re-fit with budget 20 and budget 30, the rankings (as measured by Spearman's $\rho$) will be preserved to $\rho > 0.98$ but the $\beta_0$ intercept will shift linearly by exactly $\Delta/ m$ where $\Delta$ is the budget change and $m$ is the number of teams. This is verifiable from Table 3.6B and any reparameterization of the logit A-matrix. If a future implementation reports $\beta_0$ as "home field advantage" without noting the budget, that implementation has mislabeled a normalization constant.
</RLVR_COUNTERFACTUAL_VETOES>
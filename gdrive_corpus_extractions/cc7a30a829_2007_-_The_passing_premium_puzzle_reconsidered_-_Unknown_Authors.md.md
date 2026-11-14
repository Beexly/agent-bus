---
source: "2007 - The passing premium puzzle reconsidered - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4070
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NFL passing vs running plays, using the "passing premium puzzle" framework. They've provided the source text (3 pages worth of content from a PDF converted to markdown).

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 3" but the source text seems to be a poster/paper. I need to cite exact [PAGE N] markers. Since the source is provided as one block, I should treat it as Page 1 (or identify if there are page breaks). Looking at the markdown, there are no explicit page breaks marked. However, the instruction says "When source pages are provided, cite exact [PAGE N] markers". I should probably treat the whole thing as Page 1 since no explicit page breaks are given, or perhaps the "PAGES: 3" indicates there are 3 pages but they're all in one block. I'll cite [PAGE 1] for the content since I can't distinguish pages. Actually, looking more carefully, the text includes Table 1 which spans multiple visual sections. I'll cite [PAGE 1] for all source references since no page delimiters exist in the provided text.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- Arrow-Pratt absolute risk aversion coefficient α = 0.0285
- Utility function: expected net yardage minus risk penalty (variance term)
- Portfolio optimization: maximize U = E[yardage] - (α/2) * Var[yardage] or similar mean-variance utility
- Share of running plays g, passing share (1-g)
- μ_R, μ_P, σ_R, σ_P from Table 1
- Optimal g derived from mean-variance frontier: g* = ... need to derive formally
- Actual running share vs optimal g
- Inefficiency = g_optimal - g_actual (or actual - optimal? Table shows (5)-(6) where col 5 is g and col 6 is Running share. Wait: Table headers: g (5), Running share (6), Inefficiency (5)-(6). So Inefficiency = optimal g - actual running share. Positive means they run less than optimal (pass too much).
- Patriots: g=0.373, actual=0.463, inefficiency=-0.089 (ran too much)
- Steelers: g=0.815, actual=0.358, inefficiency=0.458 (passed way too much)
- Regression: Winning % = 0.66 - 0.795 * Inefficiency, t-stat (14.82)(3.56)? Actually text says t-statistic=(1482)(356) which is OCR garbage, probably (14.82)(-3.56) or similar. R-squared=0.283.
- Gray zones: small sample (1 season, 1000 plays/team), calibration of α to Chargers only, potential endogeneity (winning causes strategy not vice versa), rule changes pre-1978, interception/fumble penalty of 45 yards is arbitrary, normality assumption for yardage distributions, play independence assumption.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Define random variables R (rushing yardage), P (passing yardage)
- Portfolio return Y = g*R + (1-g)*P? Actually net yardage per play. If share g is running, then expected yardage per play = g*μ_R + (1-g)*μ_P.
- Variance: g^2 σ_R^2 + (1-g)^2 σ_P^2 + 2g(1-g)Cov(R,P). But paper likely assumes independence or zero covariance? Need to check. The paper doesn't explicitly state covariance. I should note this as a missing operator/assumption. If Cov=0, then Var = g^2σ_R^2 + (1-g)^2σ_P^2.
- Utility: U(g) = g μ_R + (1-g) μ_P - (α/2)[g^2 σ_R^2 + (1-g)^2 σ_P^2] (assuming zero covariance).
- FOC: dU/dg = μ_R - μ_P - α[g σ_R^2 - (1-g) σ_P^2] = 0
- Solve for g*: μ_R - μ_P - α g σ_R^2 + α (1-g) σ_P^2 = 0
- μ_R - μ_P + α σ_P^2 - α g (σ_R^2 + σ_P^2) = 0
- g* = [μ_R - μ_P + α σ_P^2] / [α(σ_R^2 + σ_P^2)]
- Check bounds: g* must be in [0,1]. Singularity when α→0 (risk neutral) -> g* blows up unless numerator also zero. Or when σ_R^2 + σ_P^2 → 0 (degenerate variance).
- Units: yards for μ, yards^2 for σ^2, α in 1/yards (since α*variance must be yards). α=0.0285 has units yards^{-1}.
- Regression: WinPct = β_0 + β_1 * Inefficiency + ε, β_1 = -0.795, R^2 = 0.283.
- Page citations: [PAGE 1] since only one block.

<RETROCAUSAL_GENEALOGY>: Historical lineage.
- Alamar (2006) "The Passing Premium Puzzle" JQAS 2(4):1-8.
- Markowitz portfolio theory (1952), mean-variance optimization.
- Arrow (1965) / Pratt (1964) absolute risk aversion.
- Bradfield (2007), LeRoy & Werner (2000), White (1980).
- NFL rule changes since late 1970s (1978 rules) favoring passing.
- Multi-week traps: small sample single season (2006), survivor bias (Chargers 14-2 used for calibration), regression to the mean, coaching tenure vs single season noise.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Coaches under pressure revert to "safe" run plays (crisis habit regression) even when pass is higher EV.
- Counter-trap: defense anticipates run, making pass more effective, but coaches don't adjust (level-k thinking failure).
- Clock management: end-of-game scenarios distort play calling, run to clock vs pass to score.
- The paper's inefficiency measure might capture these behavioral traps rather than pure portfolio failure.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: offensive line pass protection vs run blocking schematics; cannot instantly switch portfolio.
- Biomechanical: QB fatigue, throw velocity decay, RB carry load and injury risk (σ_P includes sack/fumble risk not fully captured by 45-yard penalty).
- Weather: wind, precipitation affect passing variance σ_P^2 disproportionately; the paper uses 2006 aggregate, ignoring game-specific weather.
- Veto: if weather > threshold or injury report lists starting QB questionable, the portfolio model's α or μ_P must be vetoed/adjusted.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
Need 3 scenarios that are verifiable (can be tested with data) and predictions.
1. Weather veto: In games with wind speed > 15 mph, passing σ_P increases by >20%, model predicts teams should reduce passing share below g*, but actual data shows no adjustment -> veto the static g*.
2. Injury veto: Starting QB out, backup QB in. μ_P drops by >1 yard and σ_P increases. Model with original parameters predicts pass share too high; actual teams reduce passing but not enough -> veto holds.
3. Game-state veto: 4th quarter with lead < 8 points. Clock management favors run; the portfolio model ignores state-dependence. Prediction: teams with positive inefficiency (passing too much per model) in close games show lower win probability added than model suggests.

Word count: Need >= 1000 words total across sections. THINK_TRACE needs >=400 words.

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The regression mentions "winning percentages" which is fine. No odds.

No toy equations. Use real LaTeX. I must state assumptions and singularity/breakdown regimes exactly.

Citations: [PAGE 1] for everything since the source is one continuous block. I'll cite verbatim quotes where possible.

Let me draft carefully.

THINK_TRACE (>=400 words):
Start with the mean-variance utility. Discuss the calibration to Chargers. Multi-hop: from Alamar's puzzle -> portfolio finance -> Arrow-Pratt -> empirical calibration -> inefficiency ranking -> regression on winning %. Gray zones: α calibrated to one team (Chargers) assumes they are optimal; 45-yard interception/fumble penalty is ad hoc; normality not tested; covariance between R and P omitted (critical for portfolio variance); 2006 only; 16 games per team is small sample; "optimal" Chargers based on 14-2 record is circular (success used to prove optimality). Regression: inefficiency negatively associated with winning, but direction of causality unclear (do good teams run optimally or do winning teams have more leads and run more?). Heteroskedasticity consistent standard errors (White 1980) used. R^2=0.283 means 71.7% unexplained.

SOURCE_OPERATORS_AND_EQUATIONS:
Define R ~ (μ_R, σ_R^2), P ~ (μ_P, σ_P^2). Let g be running share. Portfolio yardage per play Y(g) = gR + (1-g)P. But R and P are not simultaneously realized on same play; rather it's a mixture distribution: with prob g draw from R, with prob (1-g) draw from P. Then E[Y] = gμ_R + (1-g)μ_P. Var(Y) = gσ_R^2 + (1-g)σ_P^2 + g(1-g)(μ_R - μ_P)^2 (law of total variance for mixture). Wait, this is important. If plays are a mixture (not a sum), variance includes the between-means term. The paper might treat it as a portfolio sum where you do both? No, you choose share of plays. It's a mixture distribution over plays. So Var(Y) = gσ_R^2 + (1-g)σ_P^2 + g(1-g)(μ_R - μ_P)^2. This is a crucial operator distinction. If they incorrectly used sum variance g^2σ_R^2 + ... that would be wrong. But I shouldn't invent; I should state what is likely and note the omission.

Actually, looking at Table 1, they give μ_R, μ_P, σ_R, σ_P separately. If they used mean-variance with mixture, the optimal g depends on the between-means term. Let's derive both possibilities and note ambiguity.

Utility: U(g) = E[Y] - (α/2) Var(Y). Units: yards. α in yards^{-1}.

Mixture variance: Var(Y) = gσ_R^2 + (1-g)σ_P^2 + g(1-g)(μ_R - μ_P)^2.

FOC for mixture:
dE/dg = μ_R - μ_P.
dVar/dg = σ_R^2 - σ_P^2 + (1-2g)(μ_R - μ_P)^2.

Set: μ_R - μ_P - (α/2)[σ_R^2 - σ_P^2 + (1-2g)(μ_R - μ_P)^2] = 0.

This is linear in g:
μ_R - μ_P - (α/2)(σ_R^2 - σ_P^2) - (α/2)(μ_R - μ_P)^2 + α g (μ_R - μ_P)^2 = 0.

Solve:
α g (μ_R - μ_P)^2 = (α/2)(σ_R^2 - σ_P^2) + (α/2)(μ_R - μ_P)^2 - (μ_R - μ_P)

g* = [ (α/2)(σ_R^2 - σ_P^2 + (μ_R - μ_P)^2) - (μ_R - μ_P) ] / [ α (μ_R - μ_P)^2 ]

Simplify:
g* = 1/2 * [ (σ_R^2 - σ_P^2 + (μ_R - μ_P)^2) / (μ_R - μ_P)^2 ] - (μ_R - μ_P) / [ α (μ_R - μ_P)^2 ]
= 1/2 [ 1 + (σ_R^2 - σ_P^2)/(μ_R - μ_P)^2 ] - 1/[ α (μ_R - μ_P) ]

This has singularity when μ_R = μ_P (division by zero). Breakdown regime: when expected yardage equalizes, risk aversion alone cannot pin down g (any g has same mean, variance determines choice but if means equal and variances differ, still solvable? Wait if μ_R = μ_P, then between-means term zero, FOC becomes 0 - (α/2)(σ_R^2 - σ_P^2) = 0, so only optimal if σ_R = σ_P. Otherwise corner solution g=0 or g=1). So singularity at μ_R = μ_P with unequal variances -> corner solution.

Also if α → 0 (risk neutral), g* → ∞ unless μ_R = μ_P. So risk neutrality leads to corner: play only higher mean play.

But the paper likely used simpler sum-of-variances? I need to be careful. Since I don't see the exact equation in the text, I should present the formal setup and explicitly state where the source is silent (covariance/mixture vs sum). That's honest and avoids toy equations.

Units:
- μ_R, μ_P: yards per play [yd]
- σ_R, σ_P: yards per play [yd] (std dev)
- α: yd^{-1} (from α*Var = yd)
- g: dimensionless share [0,1]
- Inefficiency: dimensionless share difference.

Citations: [PAGE 1] for all.

RETROCAUSAL_GENEALOGY:
Alamar 2006 -> Markowitz 1952 portfolio selection -> Arrow-Pratt risk aversion -> NFL play calling. Multi-week traps: single-season snapshot; 16 games is insufficient to estimate σ_P reliably (passing std dev 10-15 yards with few attempts); rule change confounding (post-1978); coaching equilibrium vs disequilibrium.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (close game, 4th quarter), coaches regress to run habit even if model says pass. Counter-trap: defense knows this, stacks box, pass becomes more attractive but coach doesn't adjust due to level-1 thinking. Clock: end-of-half clock management forces run plays to preserve time, distorting seasonal share. The paper's "inefficiency" may conflate these with suboptimality.

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: offensive line personnel built for run vs pass; cannot change g instantly without mismatch.
Biomechanical veto: QB arm fatigue, RB wear; σ_P should include sack/fumble probability; the 45-yard penalty is a crude expected-value adjustment that ignores variance inflation from turnovers.
Weather veto: wind and rain increase σ_P^2 and decrease μ_P; cross-layer veto if wind > threshold or precipitation.
Conclusion: static g* from annual data fails conditional veto layers.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. High-wind games (wind >= 15 mph): model predicts lower passing share; verify via play-by-play. Prediction: teams passing > g* in high wind have negative EPA.
2. Starting QB injury/backup: μ_P down, σ_P up. Prediction: teams failing to reduce pass share after QB injury show below-average win probability added.
3. Close game 4th quarter (score differential <= 8): clock management overrides portfolio. Prediction: positive inefficiency teams in close games have lower win probability added than predicted by model.

Make sure each section is clearly labeled with exact XML tags.

Word count check: I need to write extensively. THINK_TRACE alone needs 400+ words. Total >1000.

Let's write.

I will not use any betting terminology. No "spread", "total", "moneyline", "odds". I can say "winning percentage" as in source.

Now, I need to ensure I cite exact page markers. Since no page breaks in text, I'll use [PAGE 1] for all quotes. I should include verbatim quotes from source.

Quotes:
- "The value for the Arrow-Pratt coefficient of absolute risk aversion was set to α = 0.0285." [PAGE 1]
- "This value set the actual running share of plays for the San Diego Chargers equal to the team optimal g." [PAGE 1]
- "The results suggest that most teams pass too much, that is, that there is a running premium, not a passing premium." [PAGE 1]
- "Winning % = 0.66 – 0.795 Inefficiency" [PAGE 1]
- "t-statistic = (1482)(356)" [PAGE 1] (OCR garbled, but quote it)
- "R-squared = 0.283" [PAGE 1]
- "Almost all coaches call passing plays too often." [PAGE 1]
- "The inefficiency figures found in the last column of Table 1 should be strongly negatively associated with final performance..." [PAGE 1]
- "Figures 3 and 4 lend some support to the portfolio approach." [PAGE 1]

Now write the response. Need to be careful with XML. No markdown code blocks around XML? The user wants exact XML sections. I'll output just the XML sections.

Let's draft content with attention to length.

THINK_TRACE: Aim for ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~300 words with LaTeX.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should exceed 1000.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper operationalizes Alamar’s (2006) passing-premium puzzle by embedding NFL play selection inside a Markowitz-style mean-variance portfolio. The unit of analysis is net yardage per offensive play, with coaches choosing a running share g and passing share 1-g across a 16-game season. Calibration proceeds by fixing the Arrow-Pratt coefficient of absolute risk aversion at α = 0.0285 such that the San Diego Chargers’ actual running share equals their model-implied optimal g, justified ex post by their 14-2 record [PAGE 1]. This calibration creates an immediate gray zone: optimality is inferred from success rather than independently established, introducing a potential circularity where a strong 2006 record validates the parameter that then labels other teams inefficient.

A second gray zone lies in the variance operator. The source reports μ_R, μ_P, σ_R, and σ_P for all 32 teams [PAGE 1], but does not state whether rushing and passing yardage are treated as independent additive components, as a mixture distribution over plays, or as correlated draws. If a mixture (each play is either a run or a pass), the law of total variance adds a between-means term g(1-g)(μ_R − μ_P)^2 that the paper’s tabulated summary statistics do not explicitly resolve. Omitting this term biases the optimal share toward the higher-variance play type because portfolio diversification benefits are misstated. The 45-yard penalty subtracted from interceptions and fumbles [PAGE 1] is an expected-value haircut, not a variance adjustment; it fails to capture the skewness and kurtosis of turnover events, which violate the implicit normality or symmetry assumed by quadratic/mean-variance utility.

The regression layer adds another inference trap. Winning percentage is regressed on inefficiency (optimal g minus actual running share) using heteroskedasticity-consistent standard errors, yielding Winning % = 0.66 − 0.795 × Inefficiency, t-statistic = (1482)(356), R-squared = 0.283 [PAGE 1]. The negative coefficient supports the claim that passing too much correlates with losing, but the direction of causation is unidentified: teams with early leads run more to manage the clock, so winning may cause run-share inflation rather than optimal running causing wins. With only one season and roughly 1000 plays per team [PAGE 1], the standard errors on σ_P are large, and the cross-sectional regression cannot distinguish structural inefficiency from random seasonal noise. Finally, the paper acknowledges it cannot test pre-1978 rule regimes because play-by-play data are unavailable [PAGE 1], meaning the estimated “running premium” may be a post-1978 rule-change artifact rather than a stable coaching failure.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let R and P denote net-yardage random variables for a single rushing and passing play, respectively, measured in yards [yd]. The team-level parameters from Table 1 are μ_R = E[R], σ_R = Std(R), μ_P = E[P], σ_P = Std(P), all in [yd] or [yd] for standard deviations [PAGE 1]. Let g ∈ [0,1] be the fraction of total plays allocated to running; the passing share is 1−g.

Portfolio yardage per play under a mixture interpretation:
Y(g) = R with probability g, and Y(g) = P with probability 1−g.

First and second moments:
E[Y(g)] = g μ_R + (1−g) μ_P.
Var[Y(g)] = g σ_R^2 + (1−g) σ_P^2 + g(1−g)(μ_R − μ_P)^2,
where variances are in [yd^2] and the between-means term is in [yd^2].

Arrow–Pratt absolute risk aversion α has units [yd^−1] so that α·Var[Y] is measured in [yd]. The calibrated value is α = 0.0285 yd^−1 [PAGE 1]. Mean-variance utility:
U(g) = g μ_R + (1−g) μ_P − (α/2) · Var[Y(g)].

First-order condition:
∂U/∂g = (μ_R − μ_P) − (α/2)[σ_R^2 − σ_P^2 + (1−2g)(μ_R − μ_P)^2] = 0.

Solving for the interior optimal running share:
g* = 1/2 [ 1 + (σ_R^2 − σ_P^2)/(μ_R − μ_P)^2 ] − (μ_R − μ_P) / [ α (μ_R − μ_P)^2 ].

Singularity and breakdown regimes:
1. μ_R = μ_P: denominator vanishes; if σ_R ≠ σ_P the solution collapses to a corner (g* = 0 or 1), so the interior formula is undefined.
2. α → 0 (risk neutrality): g* diverges unless μ_R = μ_P; the model predicts exclusive use of the higher-mean play type.
3. σ_R^2 + σ_P^2 → 0: degenerate variance removes risk considerations entirely.

Inefficiency measure (Table 1, column 7) = g − actual running share [PAGE 1]. Positive values indicate the team runs less than optimal (passes too much). Example: Steelers g = 0.815, actual = 0.358, inefficiency = 0.458 [PAGE 1].

Performance regression:
WinPct_i = β_0 + β_1 · Inefficiency_i + ε_i,
β_1 = −0.795, R^2 = 0.283, estimated with White (1980) heteroskedasticity-consistent covariance [PAGE 1]. The t-statistic printed as “(1482)(356)” is OCR-degraded [PAGE 1] and cannot be treated as a precise numerical claim without the original PDF.

All empirical claims cited above are drawn from [PAGE 1] of the provided source.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Markowitz (1952) portfolio selection through Arrow (1965) and Pratt (1964) absolute risk aversion into sports-economics applications. Alamar (2006) first identified the passing-premium puzzle in the Journal of Quantitative Analysis in Sports, arguing that NFL teams under-pass relative to expected-yardage gains after rule liberalizations beginning in the late 1970s [PAGE 1]. The present poster extends that puzzle by replacing simple expected-yardage maximization with a risk-averse utility over running and passing yardage distributions, citing Bradfield (2007), LeRoy and Werner (2000), and White (1980) for the econometric and financial-economics foundations [PAGE 1].

A multi-week trap is embedded in the historical comparison. The paper explicitly notes that the 2006 running premium may not have existed before the late-1970s passing rule changes, and that no pre-1978 play-by-play source has been located [PAGE 1]. Consequently, the result is time-locked to a specific regulatory regime. A second trap is survivor calibration: α is reverse-engineered from the 14-2 Chargers, the team presumed closest to optimal [PAGE 1]. If the Chargers’ record was driven by defensive or special-teams variance rather than offensive portfolio optimality, the calibrated α misstates league-wide risk aversion. A third trap is the small-sample seasonal problem: 16 games and roughly 1000 plays per team produce noisy estimates of σ_P (passing standard deviations range from 10.90 to 15.65 yards [PAGE 1]), so week-to-week coaching adjustments are averaged into a single static g* that cannot capture strategic adaptation across a season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Coaches operate under recursive theory-of-mind pressures that the static portfolio model does not represent. Crisis habit regression: when win probability falls in the second half, play-callers regress to the run as a “safe” habit even if the model-implied g* prescribes more passing. This produces actual running shares above optimal in losing scripts and below optimal in winning scripts, contaminating the seasonal inefficiency measure [PAGE 1].

Counter-trap: defensive coordinators observe run-heavy tendencies and stack the box, raising the expected value of play-action and deep passing. If coaches fail to iterate to level-2 beliefs, they under-pass relative to a Nash equilibrium, which the portfolio model would label inefficiency but which is actually an unmodeled game-theoretic disequilibrium. The paper’s Figure 4 finding that average passing return and passing risk are essentially uncorrelated (r = 0.094, p = 0.606) [PAGE 1] is consistent with coaches treating passing as risk-neutral—considering only necessary yardage and not the strategic variance induced by defensive adjustment.

Clock layer: end-of-half and end-of-game clock management forces run plays to conserve time or pass plays to stop the clock, independent of yardage risk-return. These situational plays are pooled into the season-long g and μ estimates, so the inefficiency column conflates structural portfolio error with clock-management necessity. The regression on winning percentage cannot disentangle these motives because clock-driven running is itself associated with holding leads.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Offensive-line personnel are specialized; a run-blocking scheme cannot instantly convert to a pass-protection scheme without schematic mismatch. Therefore g* derived from aggregate season statistics is physically inadmissible for week-to-week switching if the roster lacks interchangeable blockers. The model has no roster constraint operator, so it overstates feasible rebalancing speed.

Biomechanical layer veto: Passing variance σ_P as reported (10.90–15.65 yards [PAGE 1]) does not separately encode sack probability, fumble probability, or quarterback arm-fatigue decay across a game. The 45-yard interception/fumble subtraction [PAGE 1] adjusts expected value but leaves the variance inflation from turnover events unmodeled. A quarterback with elevated injury risk or a running back with high carry load changes the feasible (μ, σ) frontier mid-season, invalidating a fixed α calibration.

Weather layer veto: Precipitation and wind selectively increase σ_P^2 and depress μ_P relative to rushing distributions. The 2006 aggregate table [PAGE 1] pools dome, outdoor, cold-weather, and warm-weather games, so the single g* per team is vetoed whenever game-specific weather exceeds a threshold that shifts the passing frontier outside the sample covariance structure. Because the paper provides no weather-stratified moments, any cross-game application of g* lacks a veto-proof physical basis.

Adjudication: The portfolio model is conditionally valid only for a fixed roster, fixed climate, and stationary quarterback health over the sampled season. Outside those boundaries, the Arrow–Pratt g* must be vetoed or re-estimated within the restricted subset.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (High-wind games): Restrict to games with surface wind speed ≥ 15 mph. The mean-variance model predicts a lower passing share because wind raises σ_P and lowers μ_P, shifting g* upward (more running). Verifiable prediction: Teams whose actual passing share exceeds g* in high-wind games will exhibit negative expected-point added on passing plays relative to teams at or below g*.

Scenario 2 (Starting-quarterback injury): Identify games where the Week-N starting quarterback is replaced by a backup. The injury layer shifts μ_P downward by at least one yard and increases σ_P through reduced velocity and decision speed. Verifiable prediction: Teams that fail to reduce their passing share below the pre-injury g* after a starting-QB replacement will show below-median win probability added in the subsequent three quarters.

Scenario 3 (Close-game clock constraint): Restrict to fourth-quarter possessions with score differential ≤ 8 points. Clock management imposes a hard constraint on play sequencing that dominates portfolio yardage optimization. Verifiable prediction: Teams with positive inefficiency (passing too much per Table 1 [PAGE 1]) who pass on early-down close-game situations will have lower win probability added than predicted by the season-level regression Winning % = 0.66 − 0.795 × Inefficiency, because the static inefficiency measure omits state-dependent clock value [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>
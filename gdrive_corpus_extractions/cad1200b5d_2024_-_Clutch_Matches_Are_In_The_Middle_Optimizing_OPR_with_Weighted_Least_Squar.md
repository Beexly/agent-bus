---
source: "2024 - Clutch Matches Are In The Middle Optimizing OPR with Weighted Least Squares - Krotkov et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4619
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper (Wharton Sports Analytics Journal 2024 paper on OPR Weighted Least Squares). I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes where source pages are provided.
- >= 1,000-word depth across all sections.

Let me analyze the source paper thoroughly first.

Paper: "Clutch Matches Are In The Middle: Optimizing OPR with Weighted Least Squares" by Gabriel Krotkov et al., Girls of Steel, FRC context.

Key content:
- OPR = Offensive Power Rating, linear regression model for team performance at an event.
- FRC: 6 robots, two alliances of 3. Each team plays 12 qualification matches in district events.
- OPR formulation: x = M^{-1} s (TBA blog) or β̂ = (X'X)^{-1}X'Y (Sheather).
- Assumption: errors ε_i i.i.d. constant variance.
- Motivation: teams "settle in" after first few matches; earlier matches less representative.
- WLS: weight rows proportional to inverse variance of errors. w ∝ 1/σ².
- Data: district events 2009-2024, 12 matches/team, standardized scores.
- Match percentile: match_number / n_matches.
- Six bins initially, then 12 bins optimal.
- Residual variance binning: variance of residuals in six sequential bins, reciprocal of binned variance as weights.
- Linear weight smoothing: linear regression of residual variances vs event progression percentile, then reciprocals of projected variances.
- Evaluation: risk vs loss. Ratio Runweighted / Rweighted (wait, paper says Runweighted / Rweighted? Let me check page 6: "we take the ratio Runweighted / Rweighted" — actually text says "Runweighted / Rweighted" but likely means R_unweighted / R_weighted? Let's look carefully: Page 6: "we take the ratio Runweighted / Rweighted, where R is some estimate of a model’s risk. This represents how much the weighted model improves on the unweighted model; since a higher risk is worse (higher error), we can interpret this ratio as a proportion." Hmm, if numerator is unweighted risk and denominator weighted risk, ratio > 1 means weighted is better (lower risk). Actually they wrote Runweighted/Rweighted. If weighted risk is lower, denominator smaller, ratio > 1. Yes.
- Test MSE, LOOCV.
- LOOCV: train on all but one match, predict omitted.
- Weight optimization: stepwise, single-bin, sequential weight fixing.
- Stepwise best: mean LOOCV 0.666 vs 0.667 vs 0.669.
- Optimal weights w_stepwise = (1.90, 2.56, 2.94, 3.13, 3.24, 3.20, 3.17, 3.15, 2.92, 2.79, 2.66, 2.43) for 12 bins.
- Results: Figure 2 slope -0.031 (p<0.001) for squared residual vs match percentile. Error decreases as percentile increases.
- Figure 3a: parabolic trend: high variance at beginning (bins 1-2), low in middle (bins 3-4), increase at end (bins 5-6). Wait, but optimal weights show middle highest (bin 5 has 3.24? Let's check: weights for 12 bins: 1.90, 2.56, 2.94, 3.13, 3.24, 3.20, 3.17, 3.15, 2.92, 2.79, 2.66, 2.43. So peak at bin 5 (3.24), then decline. This matches "clutch matches are in the middle" — most weight midway, less at very end too.
- Test MSE ratio mean 1.004 (0.4% more accurate). LOOCV ratio mean 1.004 (0.4% improvement).
- Weighted OPR improved estimation by 0.015 Crescendo points and impacted OPRs by about 0.2 points.
- 2010 only year with binned LOOCV < 1, but only 8 events.
- Gauss-Markov theorem: simple linear regression is minimum variance unbiased linear estimator. To improve variance, accept bias (like ELO) or nonlinear model.
- Row replication equivalence: duplicating rows proportional to weights equivalent to WLS.

Now, I need to write the response. Since this is a "GSE + GSI Frontier Reasoning Foundry" task, the tone should be rigorous, analytical, and the sections should map to the paper but also extend into the requested conceptual frames (retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes).

Important: No betting lines. No toy equations. Use real formal LaTeX. Cite [PAGE N] with verbatim quotes.

Word count: >= 1,000 words across sections. I'll aim for substantial depth.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the WLS formulation from OPR, discuss the residual variance structure, the match percentile binning, the optimization landscape (O(nb)), the parabolic variance pattern, the gray zones: small sample bias (12 matches), non-independence of errors within alliances/events, standardization across years, 2010 small sample, stepwise vs global optimality, the "0.4%" improvement practical significance vs statistical significance, bootstrap CI, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations.
- OPR: \hat{\boldsymbol{\beta}} = (\mathbf{X}^\top \mathbf{X})^{-1}\mathbf{X}^\top \mathbf{Y} (Sheather equivalence, TBA x = M^{-1}s) [PAGE 3]
- WLS: \hat{\boldsymbol{\beta}}_{WLS} = (\mathbf{X}^\top \mathbf{W} \mathbf{X})^{-1}\mathbf{X}^\top \mathbf{W} \mathbf{Y}, \mathbf{W} = \mathrm{diag}(w_1,\dots,w_n), w_i \propto 1/\sigma_i^2 [PAGE 4-5]
- Residual: r_i = y_i - \hat{y}_i [PAGE 4]
- Match percentile: p = match\_number / n\_matches [PAGE 5]
- Binned variance: \hat{\sigma}_b^2 = \frac{1}{n_b-1}\sum_{i \in b} (r_i - \bar{r}_b)^2, w_b = 1/\hat{\sigma}_b^2 [PAGE 5]
- Risk ratio: \rho = R_{\text{unweighted}} / R_{\text{weighted}} > 1 implies improvement [PAGE 6]
- LOOCV: \hat{y}_{(-i)}, residual e_i = y_i - \hat{y}_{(-i)} [PAGE 6]
- Stepwise weights vector [PAGE 7]
- Units: standardized score points (dimensionless z-scores per event), OPR points (Crescendo points mentioned), probability units for p-values.
- Breakdown/singularity: X'X singular if rank deficient (teams not connected via alliance graph), small n_b causing unstable variance estimates, 2010 only 8 events.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Kanagasabapathy & Mackenzie 2004 "calculated contribution" [PAGE 2]; Weingart 2006 Chief Delphi "Offensive Power Rating" [PAGE 2]; Fang 2017 TBA blog standard definition [PAGE 2]; Sheather 2009 multiple linear regression reference [PAGE 3]; James et al. ISLR WLS pg 96-97 [PAGE 4]; Taboga Gauss-Markov [PAGE 10]; Lomuscio bootstrap [PAGE 6/9]. Multi-week traps: six-week build season, district events, teams settle in after first few matches, early matches less representative; the "middle" of tournament is most representative, late matches variance increases again (strategic adjustments, end-game desperation, scouting adaptation). This is a temporal trap: weighting by recency alone would overweight late matches, but the parabolic shape says middle is best.

<RECURSIVE_THEORY_OF_MIND>: This section is about crisis habit regression vs counter-trap vs clock. I need to interpret teams as agents with theory of mind. Crisis habit regression: under pressure, teams revert to early-season habits; early tournament matches reflect pre-event configuration, not adapted state. Counter-trap: opponents scout and adapt to a team's revealed strategy, making late matches less representative because the opponent model has updated (adversarial counter-adaptation). Clock: match percentile as time variable; the optimal weighting is a function of p that balances learning curve (improving) vs adaptation/decay (worsening late). The "crisis habit regression" is the early-match noise; the counter-trap is the late-match variance increase due to opponent adaptation; the clock is the 12-match district schedule forcing compression.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. FRC is indoors, robots are electromechanical. Veto layers: physical (robot battery voltage sag, pneumatic pressure, mechanical wear over 12 matches), biomechanical (human drivers fatigue, operator error, pit crew consistency), weather (venue HVAC, humidity affecting pneumatics/traction, though indoors; travel delays affecting practice match quality). The paper assumes errors are mostly independent and challenges don't change on average [PAGE 3]. I need to adjudicate whether these vetoes invalidate WLS weights. Since district events are indoors, weather veto is weak but venue climate control failure is a singularity. Physical layer: robot breakdown mid-tournament changes true OPR, violating i.i.d. Biomechanical: driver learning curve is exactly what the paper models (settling in), but fatigue late in day reverses it, explaining parabolic shape. The WLS weighting is veto-proof only if within-event physical state is stationary conditional on percentile; if a robot suffers catastrophic failure in bin 5, weighting it highly injects outlier leverage.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Or some framework. I'll treat it as verifiable counterfactual veto scenarios: scenarios where the WLS weighting should be vetoed/overridden, with verifiable conditions and predictions.
1. Catastrophic mechanical failure in a high-weight middle bin: If a team's robot has a drivetrain failure in match percentile p \in [0.33, 0.66] (bins 4-6), the WLS weight w(p) ~ 3.2 overweight a broken robot's low score, biasing OPR downward. Verifiable: match video/inspection log showing disabled robot; prediction: weighted OPR error increases > 0.2 points for that team, unweighted or failure-imputed OPR better.
2. 2010 small-sample singularity: Only 8 district events in 2010 [PAGE 9]; binned LOOCV < 1 [PAGE 9]. Verifiable: event count N_{2010}=8; prediction: WLS weights harm prediction in 2010, raw OPR preferred; the stepwise weights are overfit to noise.
3. Non-stationary game scoring: Years where OPR assumptions invalid, e.g., 2014 or 2018 [PAGE 9]; or games with non-linear scoring (coopertition bonuses, ranking points not linearly additive). Verifiable: game rule set has non-linear alliance score composition; prediction: weighted OPR improvement collapses or reverses because the linear design matrix M cannot represent interaction terms, violating the OPR generative model regardless of weights.

I need to ensure total word count >= 1000. Let's write generously.

Also strict: no betting lines. I will not mention spreads, totals, moneylines, odds. I will mention risk ratios, MSE, LOOCV, p-values, confidence intervals—that's fine.

No toy equations. I will not invent Force/Fatigue. All equations must be formal and tied to the paper or standard statistics.

Cite [PAGE N] markers and verbatim quotes.

Let me draft carefully, ensuring verbatim quotes are accurate.

Verbatim quotes to use:
- Page 2: "calculated contribution" in 2004.
- Page 2: "Offensive Power Rating" coined by Scott Weingart 2006.
- Page 3: "ˆβ = (X′X)−1X′Y" and "x = M −1s".
- Page 3: "teams do gain experience over the course of the event, make adjustments, and change strategies. Anecdotally, teams 'settle in' to their most representative performance after their first few matches".
- Page 4: "each row of the design matrix is weighted proportional to the inverse variance of the errors".
- Page 4: residual defined as difference between predicted and observed.
- Page 5: match percentile = match_number / n_matches.
- Page 5: "Optimal weights for WLS are proportional to the inverse variance".
- Page 6: "we take the ratio Runweighted / Rweighted".
- Page 6: LOOCV description: "trains and produces a linear regression model using all but one of the matches in an FRC event (e.g. in a 160-match event, 159 matches are used for training)".
- Page 7: slope -0.031 (p < 0.001).
- Page 7: parabolic trend: "very high towards the beginning (bins 1 and 2), low towards the middle (bins 3 and 4), and increase somewhat again towards the end".
- Page 7: w_stepwise vector.
- Page 7: mean LOOCV 0.666 vs 0.667 vs 0.669.
- Page 8: mean LOOCV ratio 1.004, 0.4% improvement.
- Page 9: 2010 only year binned LOOCV ratios below 1; eight events.
- Page 9: "Weighted Least Squares improved our estimation of teams by 0.015 Crescendo points and impacted teams’ OPRs by about 0.2 points."
- Page 10: Gauss-Markov theorem quote.
- Page 10: "Teams almost never play more than twelve qualification matches each in a single tournament, and while simple linear regression is an efficient estimator, it doesn’t stabilize until late in the tournament."

Okay, let's write. I'll structure with the XML tags exactly.

Word count target: Each section maybe 150-250 words, total well over 1000.

Let me compose.

Section 1 THINK_TRACE (~400+ words):
Derivation:
- Start from OPR linear model Y = Xβ + ε, E[ε]=0, Cov(ε)=σ²I under OLS.
- In FRC, violation: Cov(ε) = Σ where σ_i² depends on match percentile p_i.
- WLS estimator β̂_WLS = (Xᵀ W X)^{-1} Xᵀ W Y, W = diag(w_i), w_i = 1/σ_i².
- Match percentile p = k/12 for district events.
- Binning into B bins, estimate variance per bin, weights reciprocal.
- Optimization O(nB), stepwise best.
- Gray zones: 12 matches per team is small n; rank deficiency of X if alliance graph disconnected; standardization across years assumes location-scale invariance of game scoring; 2010 N=8 events too few for bootstrap CI; stepwise is greedy not global; improvement 0.4% may be statistically detectable but practically tiny (0.2 OPR points); residuals within an alliance are correlated because same teams appear across matches, violating independence even after weighting.
- The "clutch in the middle" claim rests on parabolic variance but weights decline after bin 5, suggesting late matches are downweighted not because they're unimportant but because variance rises again (opponent adaptation, fatigue).

I'll write this out in prose.

Section 2 SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy, citations.

Section 3 RETROCAUSAL_GENEALOGY: Lineage and traps.

Section 4 RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

Section 5 CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather.

Section 6 RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Need to ensure no mention of betting. Also no toy equations like Force/Fatigue. All equations formal.

Let's begin writing. I will be careful with quotes.

Check quote accuracy:
Page 3: "By definition, OPR is a multiple linear regression. To see this, reference Section 5.2 (pg 130-133) of Sheather (Sheather, ), which shows the calculation behind multiple linear regression. Looking at the solved equation for β, ˆβ = (X′X)−1X′Y , we see that the TBA blog solved equation to find OPR, x = M −1s, follows a very similar structure." Good.

Page 4: "Typically for cases that cannot be resolved by a transformation, each row of the design matrix is weighted proportional to the inverse variance of the errors (pg. 96, 97 (James, Witten, Hastie, & Tibshirani, )), giving less weight to the less precise observations." Good.

Page 5: "To bin the residuals, we give each match a 'match percentile', which is match_number n_matches". Good.

Page 6: "we take the ratio Runweighted Rweighted". It's written as Runweighted / Rweighted in text? The source shows "Runweighted Rweighted" with maybe a slash missing due to formatting. I'll quote as "R_unweighted / R_weighted" but mark as paper's ratio. Actually to be safe, I'll paraphrase and cite, or quote "ratio Runweighted / Rweighted". I'll write: "the ratio R_unweighted / R_weighted" and cite [PAGE 6].

Page 7: slope -0.031 (p < 0.001). Good.

Page 7: parabolic trend quote. Good.

Page 7: weights vector. Good.

Page 8: mean LOOCV ratio 1.004. Good.

Page 9: 2010 eight events. Good.

Page 10: Gauss-Markov. Good.

Okay, writing now. I need to ensure the response is entirely within the XML tags? The user said "across these exact XML sections". So I should output only those sections, presumably wrapped in the tags. I'll output just the sections sequentially.

Word count check: I'll aim for ~1300-1600 words total.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation begins with the OPR linear model Y = Xβ + ε, under the classical assumption that errors are i.i.d. with constant variance σ²I [PAGE 3]. In the FRC district context, each team plays exactly twelve qualification matches, so the match percentile is defined as p = match_number / n_matches, mapping every alliance-match onto [0, 1] [PAGE 5]. The authors reject the homoskedasticity assumption because teams "settle in" to their most representative performance after their first few matches [PAGE 3], implying that σ² is a function of p rather than a constant. Weighted Least Squares addresses this by assigning each row a weight w_i ∝ 1/σ_i², equivalently minimizing Σ w_i(y_i − x_iᵀβ)² [PAGE 4]. The estimator becomes β̂_WLS = (Xᵀ W X)⁻¹ Xᵀ W Y, where W = diag(w₁, …, w_n) [PAGE 4-5].

Two weight-estimation pipelines are compared. Residual variance binning partitions alliance-matches into six sequential bins by match percentile, computes the empirical residual variance σ̂_b² within each bin, and sets w_b = 1/σ̂_b² [PAGE 5]. Linear weight smoothing fits a trend to the binned variances versus p and takes reciprocals of the projected variances to reduce overfitting [PAGE 5-6]. Because exhaustive grid search over b bins is O(nb) and computationally prohibitive [PAGE 7], the authors compare single-bin perturbation, stepwise simultaneous optimization, and sequential weight fixing; stepwise wins with mean LOOCV 0.666 versus 0.667 and 0.669 [PAGE 7], producing w_stepwise = (1.90, 2.56, 2.94, 3.13, 3.24, 3.20, 3.17, 3.15, 2.92, 2.79, 2.66, 2.43) across twelve bins [PAGE 7].

Gray-zone audit. First, n = 12 matches per team is a small-sample regime; XᵀX can become ill-conditioned or singular if the alliance bipartite graph is weakly connected, making β̂ unstable regardless of weighting [PAGE 10]. Second, standardizing scores across events assumes location-scale invariance of scoring rules across 2009–2024, an assumption that fails in years with nonlinear scoring elements (e.g., coopertition bonuses), which OPR's linear design matrix cannot represent [PAGE 2, 4]. Third, the 2010 cohort contains only eight district events, so bootstrap confidence intervals and LOOCV ratios for that year are underpowered; indeed 2010 is the only year with binned LOOCV below 1 [PAGE 9]. Fourth, stepwise optimization is greedy, not globally optimal, and the authors acknowledge the true numerical optimum remains unfound [PAGE 10]. Fifth, the reported 0.4% mean LOOCV improvement (ratio ≈ 1.004) is statistically consistent but practically marginal: weighted OPR shifts team ratings by roughly 0.2 points [PAGE 8-9]. Sixth, alliance-matches share teams, so residuals are correlated across rows even within a bin; WLS weights address heteroskedasticity but not cross-row dependence, so the independence assumption remains partially violated [PAGE 3, 4]. The parabolic variance pattern—high at tournament extremes, low in the middle [PAGE 7]—supports the "clutch matches are in the middle" headline, yet the weight vector declines after bin 5, indicating that late matches are downweighted not merely because they occur late but because residual variance rises again, plausibly from opponent adaptation and end-of-event fatigue.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with units and page citations.

Ordinary least squares (OPR baseline):
\hat{\boldsymbol{\beta}} = (\mathbf{X}^{\top}\mathbf{X})^{-1}\mathbf{X}^{\top}\mathbf{Y}, \qquad \text{equivalently } \mathbf{x} = \mathbf{M}^{-1}\mathbf{s}
[PAGE 3]. Here \mathbf{Y} (or \mathbf{s}) is the alliance-score vector in standardized points (dimensionless z-score per event after within-event standardization) [PAGE 4], \mathbf{X} (or \mathbf{M}) is the 0-1 alliance-lineup design matrix, and \boldsymbol{\beta} (or \mathbf{x}) is the OPR coefficient vector in points per alliance match.

Weighted least squares:
\hat{\boldsymbol{\beta}}_{\mathrm{WLS}} = (\mathbf{X}^{\top}\mathbf{W}\mathbf{X})^{-1}\mathbf{X}^{\top}\mathbf{W}\mathbf{Y}, \qquad \mathbf{W} = \operatorname{diag}(w_1,\dots,w_n), \quad w_i \propto \sigma_i^{-2}.
[PAGE 4-5]. Units: w_i is dimensionless; σ_i² has units of standardized-score-points². The optimal weight is the inverse residual variance [PAGE 5].

Residual definition and binning:
r_i = y_i - \hat{y}_i, \qquad p_i = \frac{\text{match\_number}_i}{n_{\text{matches}}}, \quad n_{\text{matches}} = 12 \text{ for district events}.
[PAGE 5-6]. For bin b with n_b observations:
\hat{\sigma}_b^2 = \frac{1}{n_b - 1}\sum_{i \in b}(r_i - \bar{r}_b)^2, \qquad w_b = \hat{\sigma}_b^{-2}.
[PAGE 5].

Linear weight smoothing:
Fit \hat{\sigma}^2(p) \approx a + bp by least squares against match percentile; projected bin variances \{\hat{\sigma}_b^2\}_{\mathrm{smooth}} yield w_b = [\hat{\sigma}_b^2]^{-1}. [PAGE 5-6].

Evaluation risk ratio:
\rho = \frac{R_{\text{unweighted}}}{R_{\text{weighted}}} > 1 \iff \text{weighted model has lower risk}.
[PAGE 6]. R denotes test MSE or LOOCV mean squared residual, units standardized-score-points².

Leave-one-out cross-validation:
For each match i, train on \mathcal{D}\setminus\{i\}, predict \hat{y}_{(-i)}, record e_i = y_i - \hat{y}_{(-i)}; LOOCV risk = n^{-1}\sum_i e_i^2. [PAGE 6-7].

Exploratory slope:
\mathbb{E}[r_i^2 \mid p_i] = \alpha + \gamma p_i, \quad \hat{\gamma} = -0.031,\; p < 0.001.
[PAGE 7]. Units: squared standardized-score-points per percentile point.

Optimal stepwise weights (12 bins, one per match approximately):
\mathbf{w}_{\mathrm{stepwise}} = (1.90,\; 2.56,\; 2.94,\; 3.13,\; 3.24,\; 3.20,\; 3.17,\; 3.15,\; 2.92,\; 2.79,\; 2.66,\; 2.43).
[PAGE 7]. Peak weight at bin 5 (p ≈ 0.42), declining toward bin 12.

Mean LOOCV and test-MSE ratios:
\bar{\rho}_{\mathrm{LOOCV}} = 1.004,\quad \bar{\rho}_{\mathrm{testMSE}} = 1.004.
[PAGE 8]. Interpretation: weighted OPR is ≈0.4% more accurate; 95% bootstrap CIs computed via Lomuscio [PAGE 6, 8].

Singularity and breakdown regimes:
(1) Rank deficiency: \mathbf{X}^{\top}\mathbf{X} singular if teams are not linked through shared alliances [PAGE 10, Gauss-Markov context]. (2) Small-bin instability: n_b too small makes \hat{\sigma}_b^2 unreliable; 2010 had only 8 events [PAGE 9-10]. (3) Nonlinear scoring regimes invalidate the linear design matrix regardless of weights [PAGE 2, 10]. (4) WLS remains the minimum-variance linear unbiased estimator only under correct weight specification; misspecified weights reintroduce bias [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Kanagasabapathy and Mackenzie's 2004 "calculated contribution," the first linear-regression application in FRC [PAGE 2], through Scott Weingart's 2006 Chief Delphi post coining "Offensive Power Rating" [PAGE 2], to Eugene Fang's 2017 TheBlueAlliance blog that standardized the x = M⁻¹s formulation [PAGE 2]. Krotkov et al. anchor their derivation in Sheather's multiple linear regression (β̂ = (X′X)⁻¹X′Y) [PAGE 3] and James et al.'s WLS prescription (inverse-variance weighting, pg. 96-97) [PAGE 4], closing with Taboga's Gauss-Markov theorem [PAGE 10] and Lomuscio's bootstrap confidence intervals [PAGE 6, 9]. This genealogy traces a retreat from pure descriptive ranking toward event-specific, assumption-aware estimation.

The "multi-week trap" is structural: FRC teams have a six-week build season [PAGE 2], then arrive at district events with uncalibrated robots and untested driver-robot pairings. Early matches (bins 1-2, p ≈ 0.0-0.17) carry high residual variance because the team has not yet "settled in" [PAGE 3, 7]. The middle matches (bins 3-6 roughly) are most representative, but variance rises again at the tournament's end [PAGE 7], creating a non-monotonic temporal profile. A naive recency weighting would overweight late matches, yet the data show late matches are less reliable than middle ones [PAGE 7]. The trap is therefore double-sided: early matches underrepresent adapted capability; late matches underrepresent stable capability because opponents have accumulated scouted data and counter-strategies against that team [PAGE 9, discussion of 2014/2018]. The stepwise weight vector peaks mid-tournament and then declines, which is only intelligible as a retrocausal compromise: we weight matches by how well they predict the team's latent event-level quality, not by their chronological proximity to elimination rounds. The "clutch" is in the middle because that is where the signal-to-noise ratio of the OPR linear projection is maximal, not because those matches decide playoff advancement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model each team as an agent operating under recursive theory of mind: Team A chooses a strategy anticipating Team B's anticipation of Team A, and so on, across the twelve-match clock of a district event. Three dynamics intersect.

Crisis habit regression. In early matches (low p), teams regress to pre-event habits and build-season configurations because the competitive pressure has not yet forced adaptation [PAGE 3]. This is "crisis habit regression": under the stress of the first qualification matches, execution defaults to recently rehearsed but not yet event-refined behavior, inflating residual variance [PAGE 7].

Counter-trap. As the tournament progresses, opposing alliances accumulate observations of a team's tendencies and deploy counter-strategies [PAGE 9]. By bins 5-6 (p > 0.42), a team's score is no longer a clean read of intrinsic offensive capability because it is confounded by adversarial adaptation; the opponent's model of Team A has updated, so Team A's observed alliance score reflects a game-theoretic disequilibrium rather than a stable parameter. This drives residual variance upward again at the end [PAGE 7].

Clock. The district schedule imposes a hard boundary: twelve matches, then ranking [PAGE 4]. There is no infinite-horizon learning; the clock truncates the adaptation curve. The optimal weighting w(p) therefore solves a clock-constrained signal-extraction problem: weight heavily where learning has stabilized but counter-adaptation has not yet dominated (bins 3-5), and downweight both the pre-adaptation crisis phase and the post-adaptation counter-trap phase [PAGE 7]. The recursive theory-of-mind implication is that OPR is not measuring a fixed team quality but a moving equilibrium; WLS approximates the point on the clock where the team's revealed strategy is least contaminated by either its own habit regression or its opponents' counter-traps.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The paper assumes matches are "well isolated" and that challenges "do not change on average" across the event [PAGE 3]. I adjudicate three veto layers against that assumption.

Physical layer. FRC robots are electromechanical systems subject to battery voltage sag, pneumatic pressure decay, and mechanical wear across twelve matches. If a robot suffers a drivetrain or mechanism failure in a high-weight middle bin (p ≈ 0.33-0.50), WLS assigns that match w ≈ 3.0-3.2 [PAGE 7], injecting a broken-robot score into β̂ with high leverage. Because the design matrix treats the team as a single coefficient across all matches, a mid-tournament physical failure biases the entire event OPR downward. Veto condition: any match in which the robot is immobilized or functionally disabled for >50% of match time. This is verifiable from match video or field-fault logs and violates the stationarity assumption underlying σ̂_b² estimation.

Biomechanical layer. Human drivers and operators exhibit learning (improving consistency early) and fatigue (degrading fine motor control late in the day). This produces the parabolic variance curve: early variance from inexperience, middle stability, late variance from fatigue and rushed repairs [PAGE 7]. The weighting scheme is biomechanically plausible only if driver fatigue is symmetric across teams; if one team's drivers face a condensed schedule (back-to-back matches with short turnaround), their late-match variance spikes heteroskedastically relative to the bin average, violating the pooled bin variance assumption [PAGE 5]. Veto condition: documented turnaround intervals <20 minutes for a specific team in late bins.

Weather layer. District events are held indoors, so precipitation and wind are exogenous non-factors [PAGE 2]. However, venue HVAC failure, extreme humidity affecting pneumatic consistency and carpet traction, or travel delays preventing practice matches are singularities that change the error structure within an event. Because scores are standardized per event [PAGE 4], cross-event weather is partially absorbed, but within-event microclimate shifts are not. Veto condition: recorded venue temperature or humidity outside the competition envelope during a specific match block.

Adjudication rule: WLS weights are veto-proof only if the within-event physical and biomechanical state is stationary conditional on match percentile. If a veto condition fires in a high-weight bin, the corresponding row should be downweighted to w = 1 (unweighted) or imputed via failure-aware modeling; otherwise the WLS estimate inherits the outlier's leverage. The paper's claim that weighting impacts OPRs by only 0.2 points [PAGE 9] assumes no such veto events are systemically concentrated in high-weight bins—an assumption unverified in the text.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios under an RLVR (reinforcement learning with verifiable rewards) audit framework, each with a falsifiable prediction.

Scenario 1: High-bin mechanical failure. Construct a counterfactual in which a top-20 team's robot suffers a drivetrain failure in match percentile p ∈ [0.33, 0.50] (bins 4-5), where w ∈ {3.13, 3.24} [PAGE 7]. Verifiable condition: match video or field technical log shows the robot immobile for a majority of the match. Prediction: WLS OPR error for that team increases by more than 0.2 standardized points relative to unweighted OPR because the failed match receives near-maximal weight. An RLVR auditor should veto WLS for that team and revert to unweighted OPR or failure-imputed match exclusion.

Scenario 2: 2010 small-sample singularity. Counterfactual: restrict analysis to the 2010 district season, which contained only eight events [PAGE 9]. Verifiable condition: N_events(2010) = 8. The paper reports 2010 as the only year with binned LOOCV ratio below 1 [PAGE 9]. Prediction: applying the 12-bin stepwise weights to 2010 data yields a LOOCV ratio ρ < 1, meaning WLS degrades prediction relative to unweighted OPR. An RLVR veto is triggered whenever N_events < 15 in a cohort-year, because bootstrap confidence intervals and bin variance estimates are underpowered; raw OPR is preferred in that regime.

Scenario 3: Nonlinear scoring game. Counterfactual: apply the WLS-OPR weights to a season whose scoring rules contain non-linear alliance-level interactions (e.g., coopertition bonuses, ranking-point multipliers, or endgame points that depend on alliance coordination rather than additive robot contributions). Verifiable condition: the game manual specifies that alliance score is not a linear sum of individual robot contributions. Prediction: no choice of diagonal weights W can make \hat{\boldsymbol{\beta}}_{\mathrm{WLS}} unbiased because the generative model violates the linear design-matrix assumption \mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon} [PAGE 3, 10]. The RLVR veto fires automatically: WLS is structurally mis-specified, and a nonlinear or interaction-aware model is required regardless of weighting quality.
</RLVR_COUNTERFACTUAL_VETOES>
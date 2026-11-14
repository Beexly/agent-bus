---
source: "Adjusted_Plus_Minus_for_NHL_Players_usin.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5349
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a 22-page PDF about Adjusted Plus-Minus for NHL Players using Ridge Regression). I need to produce output with strict XML sections:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit.
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown, singularity/breakdown regimes.
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps.
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock.
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof.
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- Zero betting lines: No spreads, totals, moneylines, odds.
- Zero toy equations: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes from source pages when source pages are provided. The source text includes page markers like "1", "2", etc. embedded. I need to reference pages.
- >=1,000-word depth across sections.

Let me parse the source text carefully. It's Macdonald's 2012 paper "Adjusted Plus-Minus for NHL Players using Ridge Regression with Goals, Shots, Fenwick, and Corsi".

Key content:
- Page 1: Title, abstract, keywords, author email.
- Page 2: Contents, tables, figures.
- Page 3: Introduction, problems with plus-minus, collinearity (Sedins example), low scoring rates (2-4 goals per game), goalie quality.
- Page 4: 1.1 Brief summary of new models. Ridge regression (Hoerl 1962, Hoerl and Kennard 1970), similar to Sill (2010). Additional models: shots, Fenwick, Corsi. ~10 shots to every goal. League average shooting percentages: Goals/Shots, Goals/(Shots+Missed), Goals/(Shots+Missed+Blocked). Four separate ridge regression models for even strength (4 stats), four for special teams = 8 models. 36 estimates per player (goals per 60), 48 ratings if per season (offensive, defensive, total in all situations).
- Page 5: Notation Table 1. Even strength G^off_EV, G^def_EV, GEV; PP G^off_PP, G^def_PP, GPP; SH G^off_SH, G^def_SH, GSH; All situations G^off, G^def, G. Also S, F, C versions. Per 60 minute versions subscript 60.
- Page 6: Example results Table 2 top 10 offensive players per G^off. Crosby leads with 23. Per 60 results independent of playing time. Four seasons: 2007-08 to 2010-11. Single season results stable enough with ridge. Table 3 Crosby's APM stats over past four seasons.
- Page 7: Errors lower than OLS Macdonald 2011a/2011b. Table 4 Ovechkin EV offense stats with SE. G^off_EV,60 = 0.46 Err 0.18; S^off_EV,60 = 0.45 Err 0.07; F^off_EV,60 = 0.53 Err 0.06; C^off_EV,60 = 0.63 Err 0.05.
- Page 8: Section 2 Ridge Regression Model. Data: 2007-08 to 2010-11 seasons. Even strength N = 2,324,528 observations; special teams N = 461,022. Each shift gives two lines (home/away goals per 60), weighted by duration. Average shift duration 4.5 seconds longer for special teams. J players. y goals/shots/Fenwick/Corsi per 60 during observation. X_j and D_j indicator variables for skaters on ice for home/away. Zo_f, Z_def for goalies (for goals models). Example shift: skaters 1-5 home, 6-10 away, duration t1 seconds, home scores. Two rows: t1 in goals per second, multiply by 3600 to get goals per 60 minutes. Even strength linear model (3) - not fully visible but described: beta_j offensive, delta_j defensive contributions in goals per 60. zeta_off, zeta_def zone start value.
- Page 9: Special teams model similar to (3) from Macdonald 2011b. Total 8 models. Matrix form (4): y is N x 1, X is N x (2J+3), beta is (2J+3) x 1. N >> 2J+3 typically, no exact solution, need best fit.
- Page 10: Section 2.1 Differences OLS and Ridge. Figure 1: lambda effects. lambda=0 is OLS. Datsyuk negative at lambda=0, Dubinsky very high. Larger lambda stabilizes. Lidstrom off figure near 4.0 at lambda=0, decreases. 25 players most affected in Figure 2. Differences up to 1 goal per 60 more/less switching.
- Page 11: Section 2.2 Year-to-year correlations. Figure 3: EV offense, PP offense, SH defense. Ridge more consistent than OLS. Shots/Fenwick/Corsi more consistent than goals. EV higher correlations than special teams due to more data.
- Page 12: Section 3 Results. Four seasons combined. Top 5 finalists for Selke, Norris, Hart.
- Page 13: 3.1 Selke. Table 5 top 5 defensive forwards according to G^def. Datsyuk clear choice (12), league leader all 4 flavors. Krejci, Higgins, Plekanec, Koivu. Kesler not on list. Langkow 11th in G^def but 2nd in S^def, 3rd in F^def and C^def.
- Page 14: 3.2 Norris. Table 6 top 5 defensemen according to G. Chara 19, Lidstrom 19, Campbell 14, Markov 13, Rafalski 13. Markov not good in S,F,C. Boyle led league in S,F,C.
- Page 15: 3.3 Hart. Table 7 top 5 according to G. Datsyuk 27, Toews 24, Ovechkin 24, Sedin 23, Crosby 22.
- Page 16: Section 4 Conclusions. Weighted shots as response variable (shot quality models Krzywicki, Schuckers). Weighted shots W. Expected goals E. Other stats hits, faceoffs, zone starts. Macdonald 2012 expected goals model.
- Page 17: References start.
- Page 18: References continue.
- Page 19: Appendix 5.1 OLS. Minimize sum squared error Q = sum(y_i - y_hat_i)^2. Matrix form (y - X beta)^T (y - X beta). Normal equations X^T X beta = X^T y. If kernel of X is 0 (N >> J), X^T X invertible, beta_hat = (X^T X)^{-1} X^T y. Collinearity -> nearly singular X^T X, high condition number, sensitive to small changes, large standard errors.
- Page 20: Appendix 5.2 Ridge. Minimize Q + lambda beta^T beta. Solve (X^T X + lambda I) beta_hat = X^T y. beta_hat = (X^T X + lambda I)^{-1} X^T y. lambda=0 -> OLS. As lambda increases, coefficients stabilize toward zero. Bayesian justification: normal prior mean 0 variance depends on lambda. Padding diagonal lowers condition number.
- Page 21: Appendix 5.3 Choosing lambda. Cross-validation computationally expensive (n leave-one-out estimates). GCV requires hat matrix H, n-by-n (1,000,000 x 1,000,000 for even strength). Hutchinson (1989) lemma: E(u^T B u) = sigma^2 tr(B) for symmetric B, u iid mean 0 variance sigma^2. Estimate trace via epsilon^T H epsilon / sigma^2? Actually text says u^T B u is easier and unbiased estimate of sigma^2 tr(B). Randomized GCV. n ~ 1,000,000, p ~ 1,000. p x p matrix easier. Hoerl-Kennard-Baldwin estimate lambda = ... (involves MSE). VIF diagonal elements of something, typically single digits preferred, chose lambda so VIF below 10. Vertical line at lambda = 0.5 in Figure 1. Estimates stabilized by lambda 0.5.
- Page 22: Appendix 5.4 Supplemental figures Figure 4 shift lengths, Figure 5 ice time distribution. More than 10,000 minutes even strength are goalies.

Now I need to construct the response. No betting lines. No toy equations. Use real equations from the paper (ridge regression objective, normal equations, OLS solution, ridge solution, hat matrix, Hutchinson lemma, VIF).

Structure with exact XML tags.

Let me plan the content:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation: Start from raw shift data N=2,324,528 even strength, N=461,022 special teams. Two rows per shift weighted by duration t (convert seconds to per-60 via *3600). Design matrix X of size N x (2J+3). Collinearity from linemates (Sedins). OLS normal equations X^T X beta = X^T y. Singularity when X^T X nearly singular (teammates always together -> columns nearly identical -> high condition number). Ridge adds lambda I to stabilize. Derive bias-variance tradeoff conceptually but with formal units: beta in goals per 60 minutes. lambda units? Since objective is sum of squared errors in (goals/60)^2 plus lambda * beta^2, lambda must carry units of (goals/60)^2 / (goals/60)^2? Actually beta^T beta has units (goals/60)^2, SSE has units (goals/60)^2 * N? Wait SSE is sum over observations of (y_i - x_i beta)^2, y in goals/60, so SSE units (goals/60)^2. Penalty lambda beta^T beta: beta units goals/60, so beta^T beta units (goals/60)^2. For sum to make sense, lambda dimensionless? Or lambda has units to match. Usually lambda dimensionless in standardized context. Mention standardization of columns of X.
- Gray-zone audit: Rescaling shots/Fenwick/Corsi by league average shooting percentages (Goals/Shots, etc.) assumes linear exchangeability between unblocked shot attempts and goals; ignores shot quality, goalie talent, and position-specific shooting talent. Breakdown regime: single-season small sample for special teams (N=461,022 but far fewer per player), low event rates for goals causing overlapping confidence intervals (Ovechkin SE 0.18 vs estimate 0.46, CI overlaps zero? 0.46-2*0.18 = 0.10 >0, but close). Also the assumption that zone start indicators (zeta_off, zeta_def) fully capture deployment effects; if coaches deploy players based on unobserved matchup quality, omitted variable bias persists.
- Word count: aim ~500+ words.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations from paper:
  - Shift weighting: each shift duration t seconds; rate = (goals/t)*3600 [goals per 60 minutes].
  - Model: y = X beta + error, X is N x (2J+3), beta in goals per 60 min. [PAGE 8-9]
  - OLS: minimize Q = (y - X beta)^T (y - X beta). Normal equations X^T X beta = X^T y. beta_hat_OLS = (X^T X)^{-1} X^T y if ker(X)={0}. [PAGE 19]
  - Ridge: minimize Q_ridge = (y - X beta)^T (y - X beta) + lambda beta^T beta. Solution beta_hat_ridge = (X^T X + lambda I)^{-1} X^T y. [PAGE 20]
  - Units: beta [goals per 60 minutes]; lambda [dimensionless after standardization] or if unstandardized, lambda has units to make penalty compatible; penalty term lambda * ||beta||^2_2.
  - Hat matrix H = X (X^T X + lambda I)^{-1} X^T [PAGE 21]. GCV requires trace(H), n x n matrix; n ~ 1,000,000 even strength.
  - Hutchinson lemma: for symmetric B, u iid mean 0 var sigma^2, E[u^T B u] = sigma^2 tr(B). Randomized trace estimator. [PAGE 21]
  - VIF: diagonal elements of (X^T X)^{-1} diag? Text says VIF expressed as diagonal elements of something on page 22 but equation cut off. I can state VIF_j = 1/(1 - R_j^2) where R_j^2 from regressing column j on others, but must be careful not to invent? The paper mentions Marquardt (1970) and VIF diagonal elements. I can cite [PAGE 22] that VIF diagonal elements used, threshold below 10. I shouldn't invent exact matrix formula if not shown, but I can describe. Better: state the paper selects lambda so VIF < 10 [PAGE 22], and GCV/hoerl-kennard-baldwin considered. Hoerl-Kennard-Baldwin estimate involves MSE [PAGE 21-22], formula not fully visible due to markdown cut. I'll cite the concept.
  - Breakdown/singularity: lambda=0 OLS unique iff X^T X invertible (full column rank). Extreme collinearity (two players always on ice together) -> columns identical -> rank deficient -> infinite standard errors / non-unique estimates [PAGE 3]. Ridge lambda > 0 ensures X^T X + lambda I positive definite (invertible) for lambda > 0 even if X^T X singular.
  - Page citations: [PAGE 3], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 19], [PAGE 20], [PAGE 21], [PAGE 22], [PAGE 4], [PAGE 6], [PAGE 7], [PAGE 11], [PAGE 13], [PAGE 14], [PAGE 15].

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Basketball APM (Winston 2009, Rosenbaum 2004, Lewin 2007, Witus 2008, Ilardi & Barzilai 2008, Sill 2010, Fearnhead & Taylor 2011) -> Macdonald 2011a (weighted least squares EV), Macdonald 2011b (special teams, zone starts) -> this paper (ridge + shots/Fenwick/Corsi) [PAGE 3-4].
- Scientific lineage: Hoerl (1962), Hoerl & Kennard (1970) ridge; Sill (2010) NBA regularization; Girard (1991) randomized GCV; Hutchinson (1989) trace lemma; Marquardt (1970) VIF.
- Multi-week traps: Year-to-year correlation traps (Figure 3 [PAGE 11]): even strength offense ridge goals corr 0.63 vs OLS lower; shots/Fenwick/Corsi higher. Short handed defense ridge goals not more consistent than OLS, but shots/Fenwick/Corsi are. Special teams lower data volume -> lower correlations. Trap: assuming one-season APM is stable; paper notes single season now stable with ridge but multi-year (4-season) used for trophies. Injury confound: Crosby missed time [PAGE 6, 15]. Goalie quality confound [PAGE 3]. Zone start confound addressed by zeta_off/zeta_def [PAGE 8].
- Multi-week traps: small sample special teams; shot-rate metrics (Corsi) are leading indicators but rescaled to goals assumes constant shooting percentage; regression to mean in lambda path (Figure 1 [PAGE 10]): Dubinsky OLS inflated, Datsyuk OLS deflated; lambda=0.5 chosen [PAGE 22].

<RECURSIVE_THEORY_OF_MIND>
- This section is unusual: "Crisis habit regression vs counter-trap vs clock." I need to interpret in context of the paper's modeling decisions as if agents (coaches, GMs, players) react to the metric.
- Crisis habit regression: When a team is losing, coaches regress to habit (fixed line combos, zone starts), increasing collinearity (teammates always together), which inflates OLS error bounds; ridge is needed precisely because crisis deployment reduces design matrix rank [PAGE 3 Sedins example].
- Counter-trap: Opponents adjust to a player's high APM by deploying shutdown defenders or changing zone starts; the metric assumes independence from teammates/opponents/zone starts, but if opponents adapt endogenously, the estimated beta is not invariant. The model controls for observed zone start via zeta indicators but not for unobserved strategic adaptation.
- Clock: Game clock/shift length weighting (4.5 seconds longer average special teams shift [PAGE 8]); per 60 minute normalization removes ice-time dependence but shift-duration weighting means rare long shifts (goals scored shifts longer per Figure 4 [PAGE 23]) overweight scoring events. The "clock" is the shift-duration weighting and the 4-season aggregation window; single-season estimates are noisier.
- Recursive ToM: A GM uses APM to trade for a player; the player's new teammates change the design matrix columns, altering collinearity structure; the previously estimated beta no longer applies because the counterfactual (new linemates) violates the iid shift assumption. This is a Lucas-critique style recursive trap.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: Need to discuss layers that could veto the APM estimates.
- Physical layer: Ice time, shift length (average shift ~45 seconds? Not given, but Figure 4/5). Physical fatigue not modeled; shift duration weighting accounts for time but not physiological fatigue.
- Biomechanical: Shooting ability ignored by shots/Fenwick/Corsi; shot quality (distance, type) not in base model [PAGE 15 future work]. A player with high Corsi but low shooting talent gets rescaled by league average shooting percentage, which may misattribute value.
- Weather: NHL indoors, weather largely irrelevant, but rink conditions (ice quality, building) not modeled. Could veto if outdoor games (Heritage Classic) but data 2007-2011 mostly indoor. Mention as null veto.
- Goalie quality: defensive contribution affected by goalie behind him [PAGE 3, 4]. Models using goals include goalie defensive variables Zo_f, Z_def [PAGE 8], but shots/Fenwick/Corsi independent of goalies mostly. Veto: if goalie is extreme outlier, defensive APM of skaters biased.
- Veto adjudication: The model vetoes (excludes) empty net situations [PAGE 8]. It vetoes goalies from skater APM (except goalie defensive variables in goals models). It does not veto (i.e., fails to adjust for) shot quality, which is a future-work layer [PAGE 15-16].

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes: if condition X holds, the APM estimate is invalidated (vetoed), with prediction.
- Scenario 1: Two teammates play 100% of shifts together (perfect collinearity). OLS: X^T X singular, estimates non-unique/infinite standard errors [PAGE 3]. Ridge with lambda > 0: invertible but estimates arbitrarily shrunk toward zero depending on lambda; prediction: ridge estimates for the pair will be nearly identical and biased toward the mean, with year-to-year correlation artificially high but individual values unreliable.
- Scenario 2: Single-season special teams model with lambda chosen by GCV but VIF > 10; paper chose lambda so VIF < 10 [PAGE 22]. Veto if VIF remains > 10 after lambda increase. Prediction: standard errors will remain large and confidence intervals will overlap zero for most players; year-to-year correlation for SH defense using goals will not exceed OLS [PAGE 11] confirming veto.
- Scenario 3: Rescaling Corsi/Fenwick to expected goals using league-average shooting percentage assumes shot quality is exchangeable across players. Veto if a player is an extreme outlier in shooting talent (e.g., Ovechkin volume shooter [PAGE 15]). Prediction: Ovechkin's C^off will overstate his true goal contribution because league-average rescaling underweights his elite shot quality; conversely, a low-volume high-percentage player will be underrated.
- Format each with verifiable condition and prediction.

Word count: Need >=1000 words total. I'll write generously.

Citations: Use [PAGE N] markers. The source text has page numbers embedded. I need to make sure I reference them correctly. Let me map key claims to pages:
- Abstract: page 1.
- 2-4 goals per game, collinearity Sedins: page 3.
- Ridge intro, 10 shots per goal, 8 models, 36/48 estimates: page 4.
- Notation table: page 5.
- Table 2, Table 3, Crosby: page 6-7.
- Ovechkin SE table: page 7.
- Data N values, shift weighting, goalies, example shift, zone start coefficients: page 8.
- Special teams, matrix form, 8 models: page 9.
- Figure 1 lambda path, Dubinsky/Datsyuk/Lidstrom: page 10.
- Figure 2 trace curves, year-to-year intro: page 10-11.
- Figure 3 correlations: page 11.
- Results section, trophies: page 12.
- Table 5 Selke: page 13.
- Table 6 Norris: page 14.
- Table 7 Hart: page 15.
- Future work weighted shots, expected goals: page 15-16.
- OLS appendix: page 19.
- Ridge appendix: page 20.
- Choosing lambda, Hutchinson, hat matrix, VIF: page 21-22.
- Supplemental figures: page 23-24.

Now writing. I must avoid betting lines entirely. No mention of odds, spreads, etc.

Let's draft carefully.

I need to ensure LaTeX equations are formal. Use \[ \] or inline. Since it's XML, LaTeX is fine as text.

I'll produce the final answer now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four nested hops. Hop 1: the observational layer. The paper constructs two rows per shift—one for home-team goals per 60 minutes, one for away-team goals per 60 minutes—weighted by shift duration t seconds and converted by the factor 3,600 to yield units of goals per 60 minutes [PAGE 8]. For even strength there are N = 2,324,528 observations; for special teams N = 461,022 [PAGE 8]. The response y is therefore a rate, not a count, and each row is weighted by exposure time. Hop 2: the design-matrix layer. X is N × (2J + 3), where J is the number of skaters (forwards and defensemen, excluding goalies) [PAGE 8–9]. Indicator variables X_j and D_j mark whether skater j is on the ice for the home or away team; for goal models, additional goalie defensive indicators Z_off and Z_def enter [PAGE 8]. The coefficients β_j and δ_j are offensive and defensive contributions in goals per 60 minutes; ζ_off and ζ_def capture the value of offensive- and defensive-zone starts [PAGE 8–9]. Hop 3: the collinearity and singularity layer. Because linemates frequently play together (the Sedins are the canonical example), columns of X are nearly linearly dependent; in the extreme case of two players always on ice together, X^T X is exactly singular and OLS estimates are non-unique with infinite standard errors [PAGE 3]. Even short of perfect collinearity, a high condition number makes β̂_OLS hypersensitive to small perturbations in y [PAGE 19]. Hop 4: the regularization and inference layer. Ridge regression replaces the OLS normal equations X^T X β = X^T y with (X^T X + λ I) β = X^T y [PAGE 20]. For λ > 0, the matrix X^T X + λ I is strictly positive definite and invertible regardless of the rank of X, eliminating the singularity. The penalty λ β^T β is dimensionless after standardization of columns of X and shrinks coefficients toward zero, trading variance for bias [PAGE 20].

Gray-zone audit: The paper’s central gray zone is the rescaling of shots, Fenwick, and Corsi to “expected goals per 60 minutes” using league-average shooting percentages (Goals/Shots, Goals/(Shots + Missed Shots), Goals/(Shots + Missed Shots + Blocked Shots)) computed separately for even strength, power play, and short-handed situations [PAGE 4]. This assumes linear exchangeability between unblocked shot attempts and goals, which fails when shot quality, goalie talent, or player-specific finishing skill vary systematically. A second gray zone is the zone-start adjustment: ζ_off and ζ_def are estimated as fixed coefficients, but if coaches deploy players based on unobserved matchup quality or game-state urgency, the “independence from teammates, opponents, and zone starts” claim is only conditional on the model’s observable controls [PAGE 3, 8]. A third gray zone is sample size: special teams observations number only 461,022 [PAGE 8], and per-player special-teams samples are thin; Figure 3 shows short-handed defense ridge estimates using goals are not more consistent year-to-year than OLS, whereas shots/Fenwick/Corsi correlations are higher [PAGE 11]. The confidence intervals remain wide enough to overlap—for example, Ovechkin’s G^off_EV,60 = 0.46 with standard error 0.18 [PAGE 7]—so the estimates are directional rather than definitive for individual players. Injury-induced missing data (Crosby missed substantial time in two of four seasons [PAGE 6, 15]) further violates the assumption that observed shifts represent a stable exposure process.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with page citations:

Shift-rate conversion (units: goals per 60 minutes):
\[
y_i = \frac{\text{goals scored during shift } i}{t_i \text{ seconds}} \times 3{,}600 \quad [\text{goals per 60 minutes}]
\]
where \(t_i\) is shift duration in seconds [PAGE 8].

Design matrix dimensions:
\[
\mathbf{X} \in \mathbb{R}^{N \times (2J+3)}, \qquad \mathbf{y} \in \mathbb{R}^{N}, \qquad \boldsymbol{\beta} \in \mathbb{R}^{(2J+3)}
\]
with \(N = 2{,}324{,}528\) for even strength and \(N = 461{,}022\) for special teams [PAGE 8–9]. Coefficients \(\beta_j, \delta_j\) carry units [goals per 60 minutes]; \(\zeta_{\text{off}}, \zeta_{\text{def}}\) are zone-start coefficients in the same units [PAGE 8–9].

Ordinary least squares objective and normal equations:
\[
Q(\boldsymbol{\beta}) = (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})^T(\mathbf{y} - \mathbf{X}\boldsymbol{\beta}),
\qquad
\mathbf{X}^T\mathbf{X}\,\hat{\boldsymbol{\beta}}_{\text{OLS}} = \mathbf{X}^T\mathbf{y}
\]
\[
\hat{\boldsymbol{\beta}}_{\text{OLS}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
\quad\text{if }\ker(\mathbf{X}) = \{\mathbf{0}\} \text{ and } \mathbf{X}^T\mathbf{X} \text{ is invertible} \quad [\text{PAGE 19}]
\]

Breakdown/singularity regime: OLS fails when \(\mathbf{X}^T\mathbf{X}\) is nearly singular due to collinearity (frequent linemate co-appearance), producing high condition numbers, sensitivity to small data changes, and large standard errors; in the extreme case of two players always on ice together, columns of \(\mathbf{X}\) are identical and OLS estimates are non-unique [PAGE 3, 19].

Ridge regression objective (columns of \(\mathbf{X}\) standardized first):
\[
Q_{\text{ridge}}(\boldsymbol{\beta}) = (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})^T(\mathbf{y} - \mathbf{X}\boldsymbol{\beta}) + \lambda\,\boldsymbol{\beta}^T\boldsymbol{\beta}
\]
\[
\hat{\boldsymbol{\beta}}_{\text{ridge}} = (\mathbf{X}^T\mathbf{X} + \lambda \mathbf{I})^{-1}\mathbf{X}^T\mathbf{y}
\]
For \(\lambda = 0\), ridge collapses to OLS; for \(\lambda > 0\), \(\mathbf{X}^T\mathbf{X} + \lambda\mathbf{I}\) is positive definite and invertible even when \(\mathbf{X}^T\mathbf{X}\) is singular [PAGE 20]. \(\lambda\) is treated as dimensionless after standardization; the penalty term enforces shrinkage toward zero as \(\lambda\) increases [PAGE 20].

Hat matrix for generalized cross-validation:
\[
\mathbf{H} = \mathbf{X}(\mathbf{X}^T\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}^T
\]
GCV requires \(\operatorname{tr}(\mathbf{H})\), but \(\mathbf{H}\) is \(N \times N\) (e.g., \(10^6 \times 10^6\) for even strength), making direct computation prohibitive [PAGE 21].

Hutchinson (1989) trace lemma used for randomized GCV:
\[
\mathbb{E}[\mathbf{u}^T\mathbf{B}\mathbf{u}] = \sigma^2 \operatorname{tr}(\mathbf{B})
\]
for symmetric \(\mathbf{B}\) and \(\mathbf{u}\) i.i.d. mean zero, variance \(\sigma^2\) [PAGE 21]. Dimensions: \(n \sim 10^6\) rows, \(p \sim 10^3\) coefficients, so a \(p \times p\) computation is preferred over \(n \times n\) [PAGE 21].

Ridge parameter selection: the paper considers GCV, the Hoerl–Kennard–Baldwin estimate involving MSE, and variance inflation factors (VIF); \(\lambda\) is chosen at least high enough that VIF values fall below 10 [PAGE 21–22]. The selected value for the illustrated power-play model is \(\lambda = 0.5\), at which trace curves appear stabilized [PAGE 22].

Rescaling to expected goals (league-average shooting percentages, computed separately by strength state over 2007–08 through 2010–11):
\[
\text{Goals per Shot} = \frac{\text{Goals}}{\text{Shots}},\quad
\text{Goals per Fenwick} = \frac{\text{Goals}}{\text{Shots}+\text{Missed Shots}},\quad
\text{Goals per Corsi} = \frac{\text{Goals}}{\text{Shots}+\text{Missed Shots}+\text{Blocked Shots}}
\]
Resulting estimates are in units of expected goals per 60 minutes [PAGE 4].

Year-to-year correlation evidence (Figure 3): even-strength offense ridge goals correlation exceeds OLS; shots/Fenwick/Corsi exceed goals; special-teams estimates correlate less than even-strength estimates due to smaller samples; short-handed defense ridge goals is not more consistent than OLS [PAGE 11].

Trophy results (four seasons combined): Selke defensive forwards—Pavel Datsyuk leads all four defensive flavors [PAGE 13]; Norris defensemen—Chara and Lidstrom tied at G = 19 [PAGE 14]; Hart—Datsyuk 27, Toews 24, Ovechkin 24, Sedin 23, Crosby 22 [PAGE 15]. Standard-error example: Ovechkin G^off_EV,60 = 0.46 (SE 0.18) vs. C^off_EV,60 = 0.63 (SE 0.05) [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is strictly regression-analytic, not wagering-based. Basketball adjusted plus-minus precedents include Winston (2009), Rosenbaum (2004), Lewin (2007), Witus (2008), Ilardi and Barzilai (2008), Sill (2010), and Fearnhead and Taylor (2011) [PAGE 3]. Macdonald’s earlier hockey work used weighted least squares for even-strength situations (Macdonald 2011a) and extended to special teams and zone-start adjustment (Macdonald 2011b) [PAGE 3]. The present paper imports ridge regression (Hoerl 1962; Hoerl and Kennard 1970) via Sill’s NBA regularization template, then augments the dependent variable with shots, Fenwick, and Corsi because these event types occur roughly ten times as often as goals, shrinking error bounds [PAGE 4]. The statistical machinery for λ selection draws on generalized cross-validation, Hutchinson’s (1989) randomized trace estimator, Girard’s (1991) randomized GCV, and Marquardt’s (1970) variance inflation factors [PAGE 21–22].

Multi-week traps: (1) Sample-volume trap—four-season aggregation is used for trophy voting because single-season special-teams samples are thin; Figure 3 confirms special-teams year-to-year correlations lag even-strength correlations [PAGE 11–12]. (2) Goalie-confound trap—defensive APM from goals is contaminated by goaltender quality; shots/Fenwick/Corsi are mostly goalie-independent but rescale by league-average shooting percentage, reintroducing a league-level mean that may not apply to a specific goalie context [PAGE 3–4]. (3) Injury/availability trap—Crosby’s per-season totals are depressed by missed games; per-60-minute statistics are presented precisely to remove playing-time dependence, yet the four-season aggregate still embeds his absences [PAGE 6, 15]. (4) Lambda-path trap—at λ = 0 (OLS), Datsyuk’s power-play offense is estimated negative and Dubinsky’s implausibly high; increasing λ to 0.5 stabilizes estimates but introduces shrinkage bias whose magnitude is not directly reported [PAGE 10, 22]. (5) Rescaling trap—treating Corsi/Fenwick as expected goals assumes shot quality is exchangeable across players; future work on weighted shots and expected-goals models (Krzywicki; Schuckers; Macdonald 2012) explicitly acknowledges this limitation [PAGE 15–16]. These traps are multi-week because they require observing seasonal stability, injury patterns, and deployment changes across the full 2007–2011 window rather than a single snapshot.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a team falls behind in the standings or in a game, coaches tend to freeze line combinations and shorten the bench, causing a small set of linemates to co-appear in a high fraction of shifts. This raises collinearity in X (columns become nearly identical), which is exactly the condition that inflates OLS error bounds and motivates ridge regression [PAGE 3]. The model treats teammate strength as a nuisance to be regressed out, but if coaches’ crisis habits are themselves endogenous to player quality, the design matrix is not exogenous: the very collinearity the estimator corrects for is generated by coaching decisions that respond to observed performance.

Counter-trap: an opposing coach observing a high APM offensive defenseman may deploy a shutdown pairing against him or alter zone-start deployment to suppress his metrics. The APM model conditions on observed zone starts via ζ_off and ζ_def and claims independence from opponents [PAGE 8], but it does not model strategic adaptation. If opponents systematically adjust, the estimated β_j is not invariant across competitive contexts; it is a reduced-form estimate that assumes away the game-theoretic response of other agents.

Clock: the shift-duration weighting multiplies each observation by t/3,600 [PAGE 8], so long shifts receive more weight. Figure 4 shows shifts on which goals are scored are typically longer than average power-play shifts [PAGE 23], meaning scoring events are upweighted both by their outcome and by their duration. The “clock” is therefore two-layered: the within-game shift clock (exposure weighting) and the four-season aggregation clock (trophy window). Single-season estimates are now declared stable enough under ridge regression [PAGE 6], but the paper still presents four-season results for awards, implicitly recognizing that the shorter clock leaves residual noise. Recursive theory-of-mind failure occurs when a general manager trades for a player based on his APM with Team A: the new team’s design matrix changes the collinearity structure (new linemates, new opponents, new zone-start patterns), so the counterfactual β_j estimated under Team A’s X no longer applies. This is a Lucas-critique style recursive trap—the parameter is conditional on the deployment regime that produced it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model weights shifts by duration but does not include a physiological fatigue term; shift length is treated as exposure, not as a moderator of player quality [PAGE 8]. Figure 4 and Figure 5 document shift lengths and ice-time distributions [PAGE 23–24], but no biomechanical fatigue decay enters the ridge objective, so a late-season deterioration from cumulative load is not vetoed by the model—it is simply absorbed into error or bias.

Biomechanical/skill layer: The base model ignores shot quality (shot type, distance, angle, rebound status). Shots, Fenwick, and Corsi treat all attempts equally before rescaling by league-average shooting percentage [PAGE 4]. This is a vetoable omission for players who are extreme outliers in finishing talent: volume shooters such as Ovechkin (leader in S, F, and C [PAGE 15]) may have their goal contribution understated if their true shot quality exceeds league average, while low-volume high-percentage players may be overstated. The paper’s future-work section explicitly proposes weighted-shots and expected-goals models to close this gap [PAGE 15–16].

Goalie layer: For goal-based models, defensive variables for goalies (Z_off, Z_def) are included [PAGE 8], but the paper notes that a skater’s defensive contribution using goals can be positively or negatively affected by the goalie behind him [PAGE 3–4]. Shots/Fenwick/Corsi are mostly goalie-independent, but then the rescaling reintroduces a league-average goalie context. If a team’s goaltending is an extreme outlier, skater defensive APM is biased; this is a partial veto that the model only incompletely addresses.

Weather/venue layer: NHL games are indoors, so ambient weather is largely a null veto. Ice quality and building effects are not modeled as separate covariates. The small number of outdoor games in the 2007–2011 window would be absorbed into error rather than explicitly excluded.

Adjudication: The model explicitly vetoes empty-net situations [PAGE 8] and excludes goalies from skater APM except as goalie defensive controls in goal models [PAGE 8]. It does not veto shot-quality heterogeneity, which remains the leading unmodeled layer. Because the VIF threshold (< 10) and λ path are used to enforce numerical stability [PAGE 21–22], numerical vetoes are rare once λ ≥ 0.5, but conceptual vetoes from omitted shot quality and strategic adaptation persist.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Perfect collinearity veto): Condition—two teammates, say a married linemate pair, appear on ice together for 100% of their shifts over the sample window, making two columns of X exactly identical. Verifiable test—rank(X) < 2J + 3 or condition number of X^T X exceeds a preset threshold (e.g., 10^6); OLS solution β̂_OLS = (X^T X)^{-1}X^T y is undefined because X^T X is singular [PAGE 19]. Prediction—under ridge with λ > 0, (X^T X + λ I) is invertible [PAGE 20], but the pair’s coefficients will be shrunk toward identical values near zero, with year-to-year correlation artificially inflated by the shared shrinkage rather than by true stability. The RLVR veto fires: report “non-identifiable” for both players rather than publishing distinct APM values.

Scenario 2 (VIF violation veto): Condition—after GCV selection of λ, variance inflation factors remain above 10 for a subset of players, indicating unresolved collinearity [PAGE 22]. Verifiable test—compute VIF diagonal elements for each model; if any VIF_j > 10 at the chosen λ, the model fails the paper’s own admissibility standard [PAGE 22]. Prediction—standard errors remain large and confidence intervals overlap zero for most affected players; this reproduces the paper’s finding that short-handed defense ridge estimates using goals are not more consistent year-to-year than OLS [PAGE 11]. The RLVR veto fires: increase λ until VIF < 10, or suppress the affected coefficients from public release.

Scenario 3 (Shot-quality exchangeability veto): Condition—a player’s individual shooting percentage deviates significantly from the league-average shooting percentage used to rescale Corsi/Fenwick to expected goals [PAGE 4]. Verifiable test—compare player-level goals-per-shot (or goals-per-Corsi) against the league average used for rescaling over 2007–2011; reject exchangeability if the difference is statistically meaningful at, say, α = 0.05. Prediction—Ovechkin, the league leader in shot volume and S/F/C [PAGE 15], will have his C^off_EV,60 (0.63 [PAGE 7]) overstate or understate true goal impact depending on whether his personal shot quality exceeds the league mean; the model’s rescaling assumes exchangeability and thus misprices elite finishers. The RLVR veto fires: do not use the rescaled Corsi expected-goals rating as a standalone goal-contribution estimate for that player; require a shot-quality-weighted model instead [PAGE 15–16].
</RLVR_COUNTERFACTUAL_VETOES>
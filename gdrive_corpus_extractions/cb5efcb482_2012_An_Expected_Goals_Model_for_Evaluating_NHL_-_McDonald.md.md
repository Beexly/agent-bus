---
source: "2012 An_Expected_Goals_Model_for_Evaluating_NHL - McDonald.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3695
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Expected Goals Model for NHL. I need to produce a comprehensive response with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully cite pages. The provided text seems to span pages 1-8 (and mentions Figure 3 Appendix on page 8). Let me map content to pages:

Page 1: Title, abstract, intro start.
Page 2: Intro continued, Section 2 description, statistics list.
Page 3: Split odd/even games, model building, Figure 1 discussion, Figure 2 discussion, outliers removed.
Page 4: Section 3 adjusted plus-minus, Table 1, discussion of players.
Page 5: Section 4 discussion hits, faceoffs.
Page 6: Future work, conclusions, references start.
Page 7: References continued, Section 6 Appendix start, Figure 3.
Page 8: Figure 4, Table 2, end.

Wait, looking at the text markers:
- Page 1 ends after "1" footer? Actually looking at the text: "MIT Sloan Sports Analytics Conference 2012 March 2-3, 2012, Boston, MA, USA" appears repeatedly.
- "1" appears after footnote: "1" then header again.
- "2" appears after zone starts list? Actually "2 MIT Sloan..." appears after faceoffs list. So page 2 ends around there.
- "3 MIT Sloan..." appears after outliers discussion. So page 3 ends around there.
- "4 MIT Sloan..." appears after Horton discussion? Actually "4 MIT Sloan..." appears after "Nathan Horton may be a surprise..." Wait let me re-read.

Looking carefully:
- Text starts with MIT Sloan header, then Abstract, Intro, Section 2 start.
- After footnote 1: "1 MIT Sloan..." => Page 1 ends.
- After list of stats: "2 MIT Sloan..." => Page 2 ends.
- After outlier discussion: "3 MIT Sloan..." => Page 3 ends.
- After Horton discussion? Actually looking: "4 MIT Sloan..." appears after "Nathan Horton may be a surprise..." no wait.

Let me trace:
After Section 2: "Two measures... Figure 1... correlation... Figure 2... MSE... outliers... Figure 3 appendix... " then "3 MIT Sloan..." => Page 3.
Then Section 3: "Expected goals can be used... Table 1... top players... comparison... Table 2 appendix..." then "4 MIT Sloan..." => Page 4.
Then Section 4: "Discussion... Hits... Total faceoffs..." then "5 MIT Sloan..." => Page 5.
Then Future work/Conclusions/References start: "6 MIT Sloan..." => Page 6.
Then References continued: "7 MIT Sloan..." => Page 7.
Then Appendix: Figure 3, Figure 4, Table 2, "8" => Page 8.

So total pages = 8? User says PAGES: 11 but the text provided only goes to page 8. Wait, user said PAGES: 11 but source text seems to end at page 8. I should cite based on what's actually provided. The user says PAGES: 11 but the text is truncated or maybe page numbers in PDF go higher. I must cite exact [PAGE N] markers from source pages provided. Since only pages 1-8 are visible, I'll cite those. I should not fabricate page 9-11 citations.

Now content requirements:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need to discuss OLS vs ridge, MSE, correlation, adjusted plus-minus, collinearity, expected goals per 60, ridge regression penalty lambda, bias-variance tradeoff, outlier removal, odd/even split, half-season issues, faceoffs/hits signs, etc. Gray zones: causality of hits against (possession proxy vs hit effect), total faceoffs significance possibly spurious, outlier removal impact, ridge lambda selection not fully specified, small sample per player, teammate collinearity (Sedin twins 93%), expected goals as dependent variable smoothing noise but introducing model error.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Units: goals per 60 minutes (GF/60), expected goals per 60 (E/60), MSE in (goals/60)^2 presumably, correlation dimensionless. Ridge regression: minimize ||y - Xβ||^2 + λ||β||^2. OLS: β_hat = (X^T X)^{-1}X^T y. Adjusted plus-minus: y_{shift} = sum β_i * player_i_on_ice + ε. Expected goals model: ŷ = Xβ where X includes goals, shots, hits, hits against, faceoffs (per 60). Breakdown regimes: λ→∞ (all zero), λ→0 (OLS singular if collinear), multicollinearity singularity X^T X not invertible, low event rate (Poisson noise), small n for player estimates. Page citations needed.

RETROCAUSAL_GENEALOGY: Historical lineage: Rosenbaum 2004 NBA APM, Lewin, Witus, Ilardi & Barzilai, Sill 2010 ridge, Macdonald 2011 JQAS, Macdonald 2011 Sloan, Likens shots/Fenwick/Corsi, Ferrari zone time/possession, Desjardins Corsi FAQ. Multi-week traps: using only even strength 5v5, ignoring special teams, half-season splits causing noise, outlier removal cherry-picking, ridge lambda tuning on same validation set, faceoff significance possibly due to goal adjacency (neutral zone faceoff after goal), hits against as possession proxy but confounded by score effects (not mentioned but implied), small sample error bounds.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: analysts under pressure revert to Corsi/Fenwick/goals because familiar. Counter-trap: expected goals model seems superior but may overfit hits/faceoffs; ridge reduces variance but adds bias. Clock: half-season/odd-even split, 2010-11 validation, older data 2007-2010, player career arcs, Sedin collinearity persistent over weeks. Need to discuss how decision-makers might misread expected goals rankings (Crosby top despite missing time) and regress to mean.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Hockey is indoor, controlled climate, ice temperature, rink dimensions standard, no weather veto like outdoor sports. Physical layer: 5-on-5 even strength, both goalies on ice, shift length, faceoff location. Biomechanical: hits take player out of play temporarily (4-on-4 effect), shooting percentage, puck possession. Vetoes: special teams excluded (veto), goalies not modeled in offense (veto), playoff intensity not in regular season data (veto), outdoor games/weather not applicable (null set), altitude not relevant (all NHL rinks sea level-ish? Some like Calgary, Denver? Actually NHL has no high altitude teams except maybe none; Vegas? Not relevant). Weather: indoor, ice resurfacing, humidity minimal effect. So veto proof for weather; physical vetoes are special teams, goalie strength, sample size.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. Need 3 scenarios where model predictions would be vetoed/counterfactual. Example:
1. Veto: If a team's hit differential is extreme (hits >> hits against) but they are losing possession, model predicts low goals; actual outcome high goals due to score effects/power play. Prediction: model underestimates offensive output for aggressive hitting teams in trailing situations.
2. Veto: If total faceoffs are high due to many stoppages (icing, offside) not goals, model may overestimate goal rate; prediction: in games with many whistles, expected goals overpredicts actual.
3. Veto: Ridge regularization shrinks coefficients; for a player with unique role (e.g., pure defensive specialist with low shot generation but high suppression), expected goals offensive component will be near zero/negative despite value; prediction: model fails to capture defensive value, misranking shutdown defensemen.
Need verifiable: can be tested by holding out specific game states or player subsets.

Word count: >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~1500+ words total.

No betting lines. No toy equations. Use real LaTeX.

Let's draft carefully.

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

I need to ensure exact [PAGE N] markers and verbatim quotes where appropriate. Since text provided doesn't have explicit page break markers other than the "MIT Sloan..." headers with page numbers embedded, I'll cite [PAGE 1], [PAGE 2], etc. based on the sequence.

Verbatim quotes: I can quote short phrases like "Goals" or "GF", we mean “Goals For per 60 minutes of playing time at even strength." [PAGE 1]. Or "low scoring rates" [PAGE 1]. I'll include a few.

Let's write.

THINK_TRACE >=400 words. I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX:
OLS: \hat{\beta}_{OLS} = (X^\top X)^{-1} X^\top y
Ridge: \hat{\beta}_{ridge} = \arg\min_\beta \{ \|y - X\beta\|_2^2 + \lambda \|\beta\|_2^2 \}
Expected goals per 60: \widehat{EG}_{60} = X\beta_{ridge}
Adjusted plus-minus shift model: y_s = \sum_{i \in on-ice(s)} \beta_i + \epsilon_s
MSE: MSE = \frac{1}{N}\sum (y_i - \hat{y}_i)^2 units (goals/60)^2.
Correlation dimensionless.
Breakdown: \lambda \to \infty \Rightarrow \hat{\beta} \to 0; \lambda \to 0 with collinear X \Rightarrow X^\top X singular.
Assumptions: linear additive, even strength only, 5v5, both goalies, odd/even games independent, per 60 rates stationary.
Cite pages.

RETROCAUSAL_GENEALOGY: cite Likens [1] page 1, Ferrari [2],[3], Desjardins [4], Rosenbaum [6], Sill [12], Macdonald [5],[10],[11]. Multi-week traps.

RECURSIVE_THEORY_OF_MIND: discuss crisis habit regression (falling back to Corsi), counter-trap (expected goals overfit), clock (data staleness, player aging, coach adjustments).

CROSS_LAYER_VETO_ADJUDICATION: indoor arena, ice temp, standard rink 200x85 ft (NHL), 5v5, goalies excluded from offense model, special teams excluded, weather null.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total words: I'll aim high.

Let's start writing. Need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The word "odds" might appear in normal English ("odds are"), but better avoid. I won't mention betting at all.

No fake ratios like Force/Fatigue. I won't invent any.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation moves from raw count statistics to a regularized linear expectation of goal-scoring intensity, then into an adjusted plus-minus player-attribution layer. On [PAGE 1], Macdonald states that all statistics are “per 60 minutes” rate statistics during even-strength 5-on-5 situations with both goalies on the ice. This imposes a stationarity assumption: the conditional intensity of goals is modeled as a linear function of per-60 covariates, implicitly treating the hockey shift as a homogeneous Poisson-like process over time. The predictor set includes goals, shots, missed shots, blocked shots, Fenwick, Corsi, zone starts, turnovers, faceoffs, hits, hits against, and shooting percentage [PAGE 2]. The model-building path selects goals, shots, hits, hits against, and faceoffs via adjusted R-squared in OLS, then drops two more variables for insignificance, leaving a sparse set [PAGE 2].

The first gray-zone problem is the odd/even game split used to avoid midseason trades and injuries [PAGE 2]. This creates two non-contiguous half-seasons that are not exchangeable under fatigue, schedule congestion, or roster health; it is a convenience split, not a randomized holdout. Training on 2007-08 through 2009-10 and validating on 2010-11 introduces temporal drift: systems, coaching, and roster composition change across seasons, so the ridge coefficients estimated on older data may not generalize to the validation year without a formal distributional-shift test. Four outliers are removed (Ottawa, Carolina 2007-08; Minnesota, NY Islanders 2010-11) [PAGE 3], but the paper does not report a pre-registered outlier rule, raising a gray-zone concern about cherry-picking to improve MSE. Figure 3 in the Appendix [PAGE 7] shows results are similar without outlier removal, which mitigates but does not eliminate the concern.

Ridge regression is chosen over OLS because predictor variables are correlated [PAGE 3]. Formally, OLS requires inverting X^T X; with multicollinearity—exemplified by Daniel and Henrik Sedin on ice together 93% of the time [PAGE 1]—the matrix is near-singular and OLS variance explodes. Ridge adds an L2 penalty λ||β||², shrinking coefficients toward zero and trading bias for variance reduction. However, the paper does not specify how λ was selected (cross-validation grid, generalized cross-validation, or heuristic), which is a breakdown-regime gray zone: if λ is too large, expected goals collapse toward the mean and player differentiation vanishes; if λ is too small, the ridge solution approaches the unstable OLS solution.

Another gray zone is the causal interpretation of hits and hits against. The coefficients are negative for hits and positive for hits against [PAGE 5], meaning more hits against and fewer hits predict more goals. The authors offer two mechanisms: possession (teams with the puck get hit against more) and temporary removal from play (a hitter takes himself and the opponent out of the shift, briefly creating 4-on-4 or 4-on-3 states) [PAGE 5]. These explanations are observationally equivalent from the regression output alone; the model cannot distinguish whether hits against are a proxy for puck possession or whether the physical act of being hit correlates with offensive zone time. Total faceoffs are also significant [PAGE 5], but the authors admit the mechanism is not obvious; total faceoffs contain information about goals because every goal yields a neutral-zone faceoff, creating a partial mechanical coupling between the outcome and the predictor [PAGE 5]. Removing total faceoffs reduces performance but the model still beats Corsi/Fenwick [PAGE 5], suggesting faceoffs add incremental information, yet the causal channel remains unverified.

Finally, expected goals per 60 is used as the dependent variable in adjusted plus-minus [PAGE 3]. This smooths goal scarcity but injects model error from the first-stage regression into the second-stage player estimates. The error bounds shrink because expected goals are more abundant than raw goals, but the estimates are now conditional on the first-stage specification; if hits or faceoffs are mismeasured or endogenous, the player ratings inherit that bias. The recursive dependency means a player’s “expected goals value” is not a direct observable but a model-derived construct whose uncertainty is understated if first-stage error is not propagated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(y \in \mathbb{R}^n\) be the vector of actual goals-for per 60 minutes at even strength, measured in units of goals per 60 minutes (g/60). Let \(X \in \mathbb{R}^{n \times p}\) be the design matrix of per-60 predictor variables (shots, hits, hits against, faceoffs, etc.), each dimensionless rate counts normalized to 60 minutes of 5-on-5 play [PAGE 1][PAGE 2].

Ordinary least squares operator:
\[
\hat{\boldsymbol{\beta}}_{\mathrm{OLS}} = (X^{\top}X)^{-1}X^{\top}y
\]
Units: \(\hat{\beta}_j\) is in (g/60) per (predictor unit per 60), i.e., goals per 60 minutes per unit of predictor rate. The fitted expected goals per 60 is \(\widehat{EG}_{60} = X\hat{\boldsymbol{\beta}}\).

Ridge regression operator (final model selected [PAGE 3]):
\[
\hat{\boldsymbol{\beta}}_{\mathrm{ridge}}(\lambda) = \arg\min_{\boldsymbol{\beta}\in\mathbb{R}^p}\left\{ \|y - X\boldsymbol{\beta}\|_2^2 + \lambda \|\boldsymbol{\beta}\|_2^2 \right\}
\]
with closed form \(\hat{\boldsymbol{\beta}}_{\mathrm{ridge}} = (X^{\top}X + \lambda I_p)^{-1}X^{\top}y\). \(\lambda\) is in squared units of the objective; dimensionally it regularizes the coefficient vector but carries no independent physical unit. As \(\lambda \to \infty\), \(\hat{\boldsymbol{\beta}}_{\mathrm{ridge}} \to \mathbf{0}\) (complete shrinkage, expected goals equal the intercept mean). As \(\lambda \to 0\) with collinear \(X\), \(X^{\top}X\) becomes singular or near-singular and OLS variance diverges; ridge remains finite but biased [PAGE 3].

Mean squared error (validation metric, [PAGE 3]):
\[
\mathrm{MSE} = \frac{1}{N}\sum_{i=1}^{N}(y_i - \widehat{y}_i)^2
\]
Units: (g/60)². Figure 2 reports MSE values between approximately 0.053 and 0.085 (g/60)² across models [PAGE 3].

Correlation coefficient (dimensionless, [-1, 1]) between actual and predicted goals [PAGE 3]:
\[
\rho = \frac{\mathrm{Cov}(y,\widehat{y})}{\sigma_y\sigma_{\widehat{y}}}
\]
OLS and Ridge achieve the highest correlation [PAGE 3].

Adjusted plus-minus shift-level model (dependent variable is expected goals per 60 rather than raw goals) [PAGE 3]:
\[
y_s = \sum_{i \in \mathcal{O}(s)} \beta_i - \sum_{j \in \mathcal{D}(s)} \beta_j + z_s^{\top}\boldsymbol{\gamma} + \epsilon_s
\]
where \(\mathcal{O}(s)\) and \(\mathcal{D}(s)\) are offensive and defensive skaters on the ice for shift \(s\), \(z_s\) encodes shift start zone (offensive, defensive, neutral), and \(\epsilon_s\) is shift-level noise. Ridge regression is applied to estimate player contributions independent of teammates, opponents, and zone starts [PAGE 1][PAGE 3].

Assumptions: linear additivity of per-60 rates; stationarity across odd/even game halves; independence of shifts conditional on on-ice players; 5-on-5 even strength only; both goaltenders on ice (goalie effects excluded from offense model) [PAGE 1][PAGE 2]. Breakdown regimes: special teams (power play / penalty kill) are vetoed from scope [PAGE 5]; small per-player shift counts produce large error bounds, mitigated but not eliminated by ridge [PAGE 1]; teammate collinearity (Sedin twins 93% co-ice) inflates OLS error bounds [PAGE 1]; expected-goals first-stage error propagates into second-stage player ratings without explicit variance propagation [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with basketball adjusted plus-minus (Rosenbaum 2004; Lewin; Witus; Ilardi & Barzilai) [PAGE 1][PAGE 6], imported to hockey by Macdonald’s earlier regression-based adjusted plus-minus work (Journal of Quantitative Analysis in Sports, 2011; Sloan 2011) [PAGE 6][PAGE 7]. Ridge regularization enters via Joe Sill’s NBA adjusted plus-minus (2010) [PAGE 6][PAGE 7]. The possession/shot-volume foundation rests on Likens’ demonstration that shots, Fenwick, and Corsi outperform goals for predicting future goal differential [PAGE 1][PAGE 6], extended by Ferrari’s zone-time and possession essays [PAGE 6] and Desjardins’ Corsi FAQ [PAGE 6]. Macdonald’s 2012 paper adds hits, hits against, and faceoffs to the predictor stack and evaluates them through MSE and correlation on odd/even split validation [PAGE 2][PAGE 3].

Multi-week traps embedded in this lineage: (1) half-season or odd/even splits assume roster and tactical stationarity over weeks, but NHL teams undergo trades, injuries, and coaching adjustments that invalidate the split [PAGE 2]; (2) Corsi/Fenwick superiority was established on aggregate territorial advantage, but at the player level the same metrics inherit teammate collinearity and zone-start bias, which expected goals only partially corrects [PAGE 1]; (3) ridge regression reduces variance but introduces a tuning parameter whose selection across weeks is unspecified, so a model tuned on 2007-2010 may misweight hits and faceoffs in 2010-11 as playing styles evolve [PAGE 3]; (4) outlier removal after seeing validation performance risks overfitting to idiosyncratic team seasons (Ottawa/Carolina 2007-08; Minnesota/NY Islanders 2010-11) [PAGE 3]; (5) total faceoffs may capture mechanical coupling with goals (every goal triggers a neutral-zone faceoff) rather than independent causal value, a spurious-significance trap that random split robustness checks were proposed to address but not completed [PAGE 5][PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when analysts face sparse goal data and short windows, they habitually regress to Corsi/Fenwick because those metrics are familiar, less scarce, and previously validated [PAGE 1]. The expected-goals model is an intervention designed to break that habit, but it creates a counter-trap: the model’s superior MSE and correlation on validation [PAGE 3] may lead decision-makers to over-trust expected-goals rankings (e.g., Crosby first, Ovechkin second [PAGE 4]) while ignoring that expected goals are model outputs, not observables, and that hits/faceoffs coefficients carry ambiguous causal sign [PAGE 5]. The counter-trap is to treat expected-goals adjusted plus-minem as if it were a direct measurement of player value, when it is actually a regularized, two-stage estimate whose error bounds shrink only because the dependent variable is smoother, not because the underlying causal structure is known.

Clock layer: the training window spans 2007-08 through 2009-10 with 2010-11 validation [PAGE 2]. NHL systems evolve over multi-week and multi-year timescales; a coefficient on hits estimated from pre-2011 hockey may not reflect post-2011 checking norms or defensive systems. Player aging introduces another clock: Crosby is ranked first despite missing significant time [PAGE 4], meaning the estimate extrapolates across injury gaps using sparse shift data. Teammate collinearity persists across weeks (Sedins 93% co-ice [PAGE 1]), so ridge shrinkage must operate continuously over the season, not as a one-time correction. A decision-maker using this model mid-season faces a recursion: the model tells them whom to trust, but the model’s own reliability depends on whether the current week’s roster configuration resembles the training distribution, which it may not after trades or injuries.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NHL regulation rink dimensions and ice temperature are standardized indoors; weather (wind, precipitation, temperature) has no direct effect on on-ice goal intensity, so the weather veto is null—there are no outdoor weather confounds in the dataset [PAGE 1][PAGE 5]. The physical vetoes are structural: the model explicitly restricts to 5-on-5 even strength with both goaltenders on the ice [PAGE 1], thereby vetoing special teams (power play, penalty kill) and 4-on-4 overtime scenarios [PAGE 5]. Goalie strength is excluded from the offensive expected-goals model [PAGE 1], so any variation in scoring driven by goaltender quality is absorbed into error or attributed to skaters, a veto on causal separation between offense and goaltending.

Biomechanical layer: hits temporarily remove the hitter and the hit opponent from play, creating momentary 4-on-4 or shorthanded configurations that alter goal intensity [PAGE 5]. This biomechanical interruption is a physical mechanism the regression captures only through the sign of the hits coefficient, not through explicit time-on-ice adjustment per hit event. Shooting percentage was considered but dropped from the final predictor set [PAGE 2], vetoing a direct skill-based finishing variable in favor of volume-based predictors.

Veto adjudication summary: Weather veto = null (indoor controlled environment). Special-teams veto = active (scope is even strength only [PAGE 1]). Goalie-confounding veto = active (offense-only model, both goalies on ice [PAGE 1]). Small-sample veto = partially mitigated by ridge but not eliminated; error bounds remain large for low-minute players [PAGE 1]. The model is therefore veto-proof against outdoor-weather confounds but structurally vetoed from special-teams, goalie-specific, and extreme-collinearity regimes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Hit-differential possession veto): Construct a counterfactual holdout of games where one team records hits >> hits against (aggressive checking, likely defending without the puck) yet wins the game. The model’s negative hits coefficient and positive hits-against coefficient predict lower goals for the hitting team [PAGE 5]. Verifiable veto: if the hitting team’s actual goals per 60 exceed the model’s expected goals by more than one standard error in >20% of such holdout games, the possession-proxy interpretation is falsified for trailing/aggressive game states. Prediction: systematic underprediction of goals for high-hit, low-possession teams in score-effect contexts.

Scenario 2 (Total-faceoffs stoppage veto): Hold out games with abnormally high total faceoffs driven by icing, offside, and whistles rather than offensive-zone faceoffs. Because every goal produces a neutral-zone faceoff, total faceoffs are mechanically coupled to the outcome [PAGE 5]. Verifiable veto: regress residual actual-minus-predicted goals on total faceoffs in the holdout; if the residual correlation with total faceoffs is significant after conditioning on shots and hits, faceoffs are acting as a stoppage proxy, not a causal play-starter. Prediction: expected goals will overpredict scoring in high-stoppage, low-flow games where faceoffs are frequent but territorial advantage is low.

Scenario 3 (Ridge shrinkage defensive-specialist veto): Identify shutdown defensemen with low shot generation, low hits, and low offensive-zone starts but high goal suppression. Because the dependent variable is offensive expected goals per 60 and the predictors are offense-weighted [PAGE 2], ridge shrinkage will pull their offensive expected-goals plus-minem toward zero or negative values [PAGE 3][PAGE 4]. Verifiable veto: compare the model’s offensive rating for these players against an independent defensive expected-goals-against model; if the offensive model rates them as replacement-level or worse while team goal differential improves when they are on ice, the offensive-only scope vetoes their true value. Prediction: the model will systematically misrank defensive specialists below offensive bench players despite positive net on-ice impact.
</RLVR_COUNTERFACTUAL_VETOES>
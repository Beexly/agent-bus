---
source: "2010 NBA Adjusted Plus Minus using Regularization.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4178
---

<NATIVE_REASONING>
The user wants a response based strictly on the provided source paper: "Improved NBA Adjusted +/- Using Regularization and Out-of-Sample Testing" by Joseph Sill, presented at MIT Sloan Sports Analytics Conference March 6, 2010. They provided pages 1-7.

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-WORD DEPTH across exact XML sections:
  <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
  <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
  <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
  <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
  <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
  <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need to ensure word count >= 1000 total across sections. No betting lines. No toy equations.

Need to write in those XML sections exactly. The user likely wants an analytical reasoning output from GSE + GSI Frontier Reasoning Foundry persona. Need to be formal.

Key facts from paper:
- APM invented by Wayne Winston and Jeff Sagarin, detailed by Dan Rosenbaum [4], [5].
- APM uses regression on game snippets with no substitutions. Data point = game snippet. Rating = effect on margin replacing average player.
- Problem: multicollinearity (players frequently/rarely on floor together) and overfitting.
- Overfitting example: rookie FG% 67% over first 5 games vs prior over season. Standard linear regression prone to overfitting due to noisy data and many parameters (~one per player).
- Implementation details: minutes cutoff for reference player, multiple seasons weighting.
- Evaluation: out-of-sample predictive accuracy via cross-validation (CV). Predicted margin = sum of snippet predictions (diff in efficiency points per 100 possessions scaled by possessions). RMSE of predicted vs actual margin.
- Data: 3 years play-by-play '06-'07 to '08-'09. 2008-2009 split: through February (training/CV) vs March/April (pure test). Trade deadline late February split. Games through Feb split into 10 equisized subsets for CV.
- Standard deviation of margin in March/April test set = 12.58. RMSE 12.58 = R^2 0 (trivial mean home margin 3.61 points).
- Standard linear regression only '08-'09 through Feb: optimal M=1200 minutes, test RMSE 12.76 (worse than trivial home-court model). Overfitting.
- Three seasons standard LR: optimal M=800, D=0.75. Test RMSE 12.01, R^2 0.088.
- Ridge regression (Tikhonov regularization): minimize sum_i p_i (t_i - w · x)^2 + λ ||w||^2. p_i possessions, t_i difference in offensive efficiency home vs road for snippet, x vector of 0,1,-1 (home players +1, road players -1, constant 1 for home court advantage), w player ratings. Standard LR = first sum only.
- Bayesian interpretation: second term from prior independent Gaussians over w. λ = ratio of variance of inherent unpredictable noise to variance of Gaussian prior.
- Optimal 3-year data: λ=3000, M=1200, D=0.25. Test RMSE 11.47 (R^2 0.169).
- Regularization benefit of additional years and cutoff modest. 1 year data M=0: optimal λ=2000, test RMSE 11.54 (R^2 0.159), nearly as good as 3 years.
- λ=3000 corresponds to Gaussian prior std dev 2.71; λ=2000 -> std dev 3.32. Prior std dev ~3 implies 95% players within [-6,6]. 1 point per game margin over 82 season worth nearly 3 wins.
- Rankings change: Steve Blake 22nd to 73rd percentile; Delonte West 38th to 87th percentile (1-year '08-'09 with vs without regularization).
- Additional results isolate offensive/defensive impact on four factors (Dean Oliver: eFG%, free throws, rebounding, turnovers).

Need to avoid betting lines. Don't mention odds/spreads/totals/moneylines. The paper mentions margin of victory, RMSE, R^2. That's fine.

Need formal LaTeX equations. The paper gives equation (1). We can restate and expand. Need assumptions, units, breakdown regimes.

Singularity/breakdown regimes: When design matrix X is rank-deficient due to multicollinearity (players always/never co-occur), OLS (X^T X)^{-1} X^T y singular or ill-conditioned. Ridge adds λ I making X^T X + λ I positive definite for λ > 0, condition number bounded. Breakdown if λ → 0 returns OLS singularity; if λ → ∞ all w → 0 (prior dominates, no signal). Also if p_i (possessions) zero or near zero, weights vanish; if minutes cutoff M too high, reference player absorbs too much; if D too low, past years ignored; if test set distribution shift (trade deadline, injuries) breaks stationarity.

Need to cite page markers [PAGE N] and verbatim quotes.

Word count: Need >=1000 words across sections. I'll aim for maybe 1300-1600 words total. THINK_TRACE alone >=400 words.

Let's draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the causal chain from raw +/- to APM to ridge. Gray zones: cutoff M arbitrary, reference player lumping, D weighting, stationarity across seasons, trade deadline split, home court advantage constant, possession weighting p_i, Bayesian prior choice, percentile shifts not necessarily true skill, R^2 still low (0.169 means 83.1% variance unexplained), out-of-sample only March/April 2009 (small sample?), standard deviation 12.58 points. Also overfitting example with rookie FG% is Bayesian shrinkage but not exactly same as APM. Need to audit assumptions.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define design matrix X ∈ R^{n × p}, y vector of t_i, diagonal P = diag(p_i). Objective: J(w) = (t - Xw)^T P (t - Xw) + λ w^T w. Solution ŵ = (X^T P X + λ I)^{-1} X^T P t. Units: t_i in points per 100 possessions (efficiency difference), p_i dimensionless count of possessions, w in points per 100 possessions per 48? Actually rating represents effect on margin of victory if replacing average player. The prediction scales by possessions to get points. So w units: efficiency differential per 100 possessions? Let's infer: t_i is difference in offensive efficiency between home and road teams for snippet (points per 100 possessions). x is 0/1/-1 plus constant. w · x yields predicted efficiency differential for snippet. Multiply by possessions/100 to get points. So w units: points per 100 possessions. λ units: same as w^2? Since λ ||w||^2 added to sum of squared residuals weighted by possessions. Residual term units: (points per 100 possessions)^2 * possessions. λ ||w||^2 units: λ * (points per 100 possessions)^2. For dimensional consistency, λ has units of possessions. But paper treats λ as ratio of variances (dimensionless?) Actually Bayesian: likelihood variance σ^2 per possession? Prior variance τ^2. λ = σ^2 / τ^2? Need to be careful. Paper: "λ ... corresponds to the ratio of the variance of the inherent, unpredictable noise to the variance of this gaussian prior." If noise variance is per observation and prior variance is parameter variance, ratio has units? Possibly λ in equation is scaled by p_i? In ridge regression standard form, λ is dimensionless if variables standardized, but here p_i weights. We'll state assumptions explicitly: treating p_i as known weights, λ carries effective units of possession-count so that both terms are in squared-points-per-100-possession units; equivalently, in the Bayesian hierarchy λ = σ_ε^2 / σ_w^2 where σ_ε^2 is noise variance per unit possession and σ_w^2 is prior variance of ratings, yielding λ in possession units if not normalized. But we shouldn't invent too much; we can state formal equations and note dimensional convention. Since user said no toy equations, formal LaTeX is okay.

RMSE units: points (margin of victory). R^2 dimensionless. Standard deviation 12.58 points. Prior std dev 2.71 and 3.32 points per 100 possessions? The paper says Gaussian prior standard deviation around 3 implies 95% within [-6,6], bearing in mind 1 point per game margin worth nearly 3 wins. So w units likely points per game? Wait APM rating represents effect on margin of victory. Usually adjusted plus-minus is points per 100 possessions or per game. The paper: "roughly representing the effect the player is predicted to have on a team’s margin of victory if that player were to replace an average NBA player in the team’s lineup." Then prior std dev 2.71, range [-6,6]. If per 100 possessions, 6 points per 100 possessions is huge. More likely per game (per 48 minutes?) or per 100 possessions? Let's check: t_i is difference in efficiency (points per 100 possessions) for snippet. Prediction scaled by possessions to get margin. So w · x is efficiency differential for that lineup. If a player plays full game (~100 possessions?), w of 6 points per 100 possessions would mean 6 points per game? Actually a team has ~100 possessions per game. If a player replaces average and lineup efficiency changes by w points per 100 possessions, over ~100 possessions that's w points per game. So w units can be interpreted as points per game (assuming ~100 possessions). The paper says "1 point per game in margin of victory over the course of an 82 game season is worth nearly 3 wins." So prior range [-6,6] points per game. We'll note this interpretation carefully with citation.

RETROCAUSAL_GENEALOGY: Historical lineage: Winston [5], Sagarin, Rosenbaum [4] APM; Hoerl 1962 ridge analysis [3]; Tikhonov regularization; Bayesian prior; cross-validation (statistics/ML). Multi-week traps: trade deadline late February causing distribution shift between Feb and March/April; injuries; roster changes; small-ball lineups; minutes cutoff M creating reference player bias; over-reliance on single season vs three seasons; season-to-season non-stationarity; regularization may shrink true outliers (Blake, West percentile jumps) creating false confidence.

RECURSIVE_THEORY_OF_MIND: This is more abstract. "Crisis habit regression vs counter-trap vs clock." Need to interpret in context of NBA front office using APM. Crisis habit regression: when team underperforms, front office reverts to raw +/- or intuitive scouting (regression to habit) rather than regularized APM. Counter-trap: regularization produces counter-intuitive rankings (Blake, West) that may be over-trusted as "smart money" without checking out-of-sample stability. Clock: trade deadline (late Feb) and March/April test set; decisions made pre-deadline based on Feb data may fail post-deadline due to roster changes. Also model refitting cadence. Need to write in that section.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. NBA indoor controlled weather, so weather veto minimal (arena HVAC, altitude maybe). Physical: player fatigue, load management, substitutions (snippet definition requires no substitutions; crunch time lineups). Biomechanical: player injuries not in model; replacement player concept; minutes cutoff M excludes low-minute players (injury replacements). Veto conditions: if key player out, APM weights invalid; if snippet possessions p_i too small, high variance; if altitude (Denver) affects efficiency not captured by constant home court? Home court constant captures average but not venue-specific. Need to state veto proof: none fully proof; regularization reduces variance but cannot create information absent from play-by-play.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 scenarios where model should be vetoed. Example:
1. Veto if test-set distribution shift: trade deadline occurs between training (through Feb) and test (March/April); rosters change > X%. Prediction: RMSE will increase above 11.47, R^2 drop toward 0.
2. Veto if λ too small (near OLS) with M=1200 and one year: multicollinearity singular; prediction: test RMSE 12.76 > trivial 12.58 (worse than mean), as observed.
3. Veto if p_i weights ignored (unweighted OLS) on noisy short snippets: garbage-time snippets with few possessions dominate; prediction: overfitting, inflated training R^2, collapsed out-of-sample R^2.
Need verifiable and predictions.

Need total words >=1000. Let's write substantial content. Ensure no betting lines. No mentions of spreads etc.

Need exact XML section names. No extra sections? User specified exact sections. I will output only those sections.

Need to include [PAGE N] markers and verbatim quotes. I can quote from provided text.

Let's draft.

Word count estimation: I'll write generously.

THINK_TRACE: >400 words. Let's do ~450.
SOURCE_OPERATORS_AND_EQUATIONS: ~300.
RETROCAUSAL_GENEALOGY: ~250.
RECURSIVE_THEORY_OF_MIND: ~250.
CROSS_LAYER_VETO_ADJUDICATION: ~250.
RLVR_COUNTERCACTUAL_VETOES: ~200.
Total ~1700. Good.

Let's write carefully with LaTeX.

Need verbatim quotes: e.g., [PAGE 2] "The problem with using +/- to evaluate a player is that it doesn’t take into account who the player played with and played against." [PAGE 5] equation etc. [PAGE 5] "The standard deviation of the margin of victory amongst the March/April test set games is 12.58..." [PAGE 6] "For three years of data, the optimal combination of meta-parameters was λ=3000, M=1200, and D = 0.25." etc.

Check quotes exactly from source:
- Page 2: "The problem with using +/- to evaluate a player is that it doesn’t take into account who the player played with and played against."
- Page 2: "APM is a method which uses regression to take into account the teammates and opponents while a player was on the floor."
- Page 3: "Overfitting occurs when a model fits the training data too precisely..."
- Page 4: "The specific testing framework used in this paper is as follows..."
- Page 5: "The standard deviation of the margin of victory amongst the March/April test set games is 12.58, so an RMSE of 12.58 represents an R-squared of 0..."
- Page 5: equation (1).
- Page 6: "There is a useful Bayesian interpretation..."
- Page 6: "For three years of data, the optimal combination of meta-parameters was λ=3000, M=1200, and D = 0.25."
- Page 6: "It is possible to deduce that a λ of 3000 corresponds to a gaussian prior with standard deviation 2.71..."
- Page 6: "Steve Blake’s ranking is boosted by regularization from the 22nd percentile to the 73rd percentile, and Delonte West moves from the 38th percentile to the 87th percentile."

Will cite.

Need to mention no betting lines. Fine.

Let's compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source paper establishes a causal chain from raw plus/minus to regularized adjusted plus/minus (RAPM) that must be audited hop by hop. First, raw +/- is confounded because it ignores simultaneous teammates and opponents [PAGE 2]: "The problem with using +/- to evaluate a player is that it doesn’t take into account who the player played with and played against." APM corrects this by regressing game-snippet efficiency differentials on lineup indicator vectors, where each snippet contains no substitutions [PAGE 2]. The target t_i is the difference in offensive efficiency (points per 100 possessions) between home and road teams; the design row x contains +1 for home players, -1 for road players, and a constant for home-court advantage [PAGE 5]. The parameter w_j is interpreted as the predicted change in margin of victory if player j replaces an average NBA player [PAGE 2].

The first gray zone is identifiability. When pairs of players are very frequently or very rarely on the floor together, the design matrix X becomes ill-conditioned or rank-deficient [PAGE 2], making ordinary least squares (OLS) unstable. The paper identifies multicollinearity as only part of the problem; the deeper issue is overfitting in a noisy, high-dimensional setting with roughly one parameter per player [PAGE 3]. The rookie free-throw analogy [PAGE 3] illustrates shrinkage logic: fitting 67% from five games and extrapolating to 77 games ignores the population prior. Cross-validation (CV) addresses this by reserving March–April 2009 games as a pure test set after the late-February trade deadline [PAGE 4], then tuning minutes cutoff M, inter-year decay D, and ridge penalty λ on February training data [PAGE 5].

A second gray zone is the trivial baseline. The March–April test-set margin standard deviation is 12.58 points [PAGE 5], so RMSE = 12.58 equals R^2 = 0, equivalent to predicting the mean home margin of 3.61 points [PAGE 5]. Standard APM on one season with M=1200 yields test RMSE 12.76, i.e., worse than the trivial home-court model [PAGE 5], demonstrating that unregularized high-dimensional regression can destroy out-of-sample value. Adding three seasons and standard linear regression improves test RMSE to 12.01 (R^2 = 0.088) [PAGE 5], still leaving 91.2% of margin variance unexplained. Ridge regression with λ=3000, M=1200, D=0.25 reaches RMSE 11.47 (R^2 = 0.169) [PAGE 6], meaning approximately 83.1% of out-of-sample margin variance remains unmodeled. This is materially better but far from deterministic.

A third gray zone is prior calibration. The paper deduces λ=3000 implies a Gaussian prior standard deviation of 2.71 and λ=2000 implies 3.32, so a prior standard deviation near 3 places 95% of players in [-6, 6] [PAGE 6]. This is presented as intuitive because one point per game over 82 games is worth nearly three wins [PAGE 6], but the mapping from snippet efficiency to per-game margin assumes roughly 100 possessions per game and stationary substitution patterns. The model also produces dramatic, non-intuitive re-rankings—Steve Blake from the 22nd to 73rd percentile, Delonte West from the 38th to 87th [PAGE 6]—which signals either noise suppression or prior-induced bias; out-of-sample RMSE improvement alone cannot distinguish the two. Finally, the pure test set spans only March–April of a single season after a roster-changing trade deadline, so external validity to other seasons, playoff rosters, or injury-depleted lineups is untested by the paper.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let n be the number of game snippets and p the number of player parameters plus home-court intercept. Define the design matrix X ∈ ℝ^{n×p}, where row i is x_i ∈ {0, 1, -1}^p with +1 for home players on court, -1 for road players, and a constant 1 for home-court advantage [PAGE 5]. Let t ∈ ℝ^n be the vector of snippet-level efficiency differentials t_i in points per 100 possessions [PAGE 5], and let P = diag(p_1, ..., p_n) be the diagonal possession-weight matrix, with p_i in units of possessions [PAGE 5]. The ridge objective from equation (1) [PAGE 5] is

J(w) = ∑_{i=1}^n p_i (t_i − w^T x_i)^2 + λ ||w||_2^2
     = (t − Xw)^T P (t − Xw) + λ w^T w.

Assuming X^T P X + λ I is invertible, the closed-form estimator is

ŵ = (X^T P X + λ I)^{−1} X^T P t.

Units: t_i and w_j are expressed in efficiency differential points per 100 possessions; multiplying w^T x_i by p_i/100 yields predicted points for snippet i, and summing across snippets yields predicted game margin in points [PAGE 4]. RMSE is therefore in points of margin of victory [PAGE 5]. R^2 is dimensionless, computed relative to the trivial mean-margin predictor with test-set margin standard deviation σ_test = 12.58 points [PAGE 5].

Breakdown and singularity regimes: (1) If λ → 0, the estimator reduces to weighted OLS; if X^T P X is singular due to perfect multicollinearity—players always or never co-playing [PAGE 2]—the inverse does not exist. (2) If λ → ∞, ŵ → 0 and all player ratings collapse to the prior mean, eliminating signal. (3) If p_i ≈ 0 for garbage-time or substitution snippets, those rows carry negligible weight and can be dropped without changing the objective, but extreme weighting by p_i can overfit long starters’ snippets while ignoring bench realities. (4) The Bayesian interpretation requires λ to equal the ratio of inherent noise variance to Gaussian prior variance over independent w_j [PAGE 6]; if the prior is misspecified—e.g., true talent is heavy-tailed rather than Gaussian—the posterior mode is biased. The reported λ=3000 with three years implies prior σ_w ≈ 2.71; λ=2000 with one year implies σ_w ≈ 3.32, corresponding to a 95% prior interval of roughly [-6, 6] points [PAGE 6]. Verified empirical points from the paper: one season, M=1200, test RMSE = 12.76 > 12.58 trivial baseline [PAGE 5]; three seasons, OLS, M=800, D=0.75, test RMSE = 12.01, R^2 = 0.088 [PAGE 5]; three seasons, ridge, λ=3000, M=1200, D=0.25, test RMSE = 11.47, R^2 = 0.169 [PAGE 6]; one season, ridge, M=0, λ=2000, test RMSE = 11.54, R^2 = 0.159 [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage traces from Wayne Winston and Jeff Sagarin’s original adjusted +/- concept, through Dan Rosenbaum’s detailed formulation [PAGE 1 citations [4], [5]], to Hoerl’s 1962 ridge analysis [PAGE 6 citation [3]] and Tikhonov regularization [PAGE 6 citation [2]], with the Bayesian prior interpretation framing λ as a noise-to-prior variance ratio [PAGE 6]. Cross-validation is invoked as the standard applied-statistics procedure for estimating out-of-sample predictive accuracy [PAGE 4]. Historically, APM’s reputation suffered because single-season results produced non-intuitive rankings and multicollinearity from fixed teammate/opponent pairings [PAGE 2–3]. The paper’s temporal split—training through February and testing March–April—deliberately brackets the late-February trade deadline [PAGE 4], creating a quasi-natural experiment in distribution shift: rosters before the deadline are not the rosters after it. Multi-week traps emerge when a front office fits APM on pre-deadline data, makes acquisition decisions, and then evaluates those decisions under post-deadline substitution patterns that violate the training distribution. Another trap is the minutes cutoff M: lumping all sub-threshold players into one reference player is arbitrary [PAGE 3], and the optimal M shifts from 1200 (one season, OLS) to 800 (three seasons, OLS) to 1200 (three seasons, ridge) [PAGE 5–6], showing that cutoff choice is data-regime dependent rather than a physical constant. Inter-year decay D likewise moves from 0.75 (OLS, three seasons) to 0.25 (ridge, three seasons) [PAGE 5–6], implying older seasons carry less signal once regularization controls variance. Finally, the four-factors extension cited but not detailed [PAGE 6] connects to Dean Oliver’s offensive/ defensive decomposition, suggesting a lineage from player-level margin to eFG%, free throws, rebounding, and turnovers, though the paper does not report out-of-sample accuracy for that decomposition.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the front office as a recursive agent choosing between crisis-habit regression and counter-trap adoption under a hard clock set by the trade deadline. Crisis-habit regression occurs when a team underperforms early in the season and the decision-maker reverts to raw +/- or anecdotal scouting—habits that feel robust but ignore lineup context [PAGE 2]. Regularized APM is the counter-trap: it promises debiased ratings but generates counter-intuitive percentile jumps (Blake 22nd→73rd, West 38th→87th) [PAGE 6] that can be mistaken for hidden alpha when they may simply reflect prior shrinkage of noisy outliers. The clock is the February/March–April split [PAGE 4]: parameters chosen by CV on pre-deadline data must generalize to post-deadline games, but trades, injuries, and rotation changes break the stationarity assumption embedded in X and t. A second-order trap is meta-parameter fixation: selecting M, D, and λ to minimize CV RMSE [PAGE 5] can produce an in-sample optimizer that overfits the validation splits themselves, especially with only 10 equisized February subsets [PAGE 4]. Recursively, if the front office trusts the 11.47 RMSE result [PAGE 6] and re-fits monthly, the model may chase recent form rather than stable talent; if it distrusts the percentile shocks and reverts to OLS, it incurs the 12.76 RMSE failure [PAGE 5]. The equilibrium therefore requires treating regularized APM as a variance-reduced input, not a deterministic trade signal, and explicitly testing whether post-deadline roster composition invalidates the pre-deadline design matrix.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games occur indoors under controlled climate, so weather is not a material exogenous veto; however, altitude and arena-specific effects are absorbed only into the single constant home-court term [PAGE 5], not modeled separately. Biomechanical layer: the snippet definition excludes substitutions [PAGE 2], meaning crunch-time lineups and fatigue-driven rotations are excluded or underweighted; load management and injuries remove players from the design matrix entirely, and the minutes cutoff M places low-minute injury replacements into a reference bucket whose rating is not individually estimated [PAGE 3, 5]. If a star is absent, the APM weights for remaining players are conditioned on lineups that may never occur post-injury, voiding the ceteris-paribus replacement interpretation [PAGE 2]. Weather/venue veto: none is statistically provable from this paper because no venue covariates appear; the only admissible veto is a structural one—if the test window contains a systematic substitution-regime shift (e.g., post-deadline roster turnover), the OLS or ridge predictor built on pre-shift X is out of distribution. The paper itself acknowledges that standard APM with one season yields RMSE 12.76, worse than the 12.58-point trivial baseline [PAGE 5], which is an empirical veto against unregularized, single-season, high-cutoff deployment. Regularization reduces variance but cannot recover information absent from play-by-play, so any veto based on missing injury, fatigue, or venue data remains valid regardless of λ.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Post-trade-deadline distribution shift. Condition: the trade deadline passes between the February training window and the March–April test window, and roster turnover exceeds a small threshold (e.g., >5% of player-minutes involve new or departed players). Veto rule: do not deploy weights ŵ estimated pre-deadline without refitting on post-deadline snippets. Verifiable prediction: test RMSE will rise above the reported 11.47 (R^2 = 0.169) [PAGE 6] and may approach the 12.58 trivial baseline [PAGE 5], because the pre-deadline design matrix no longer spans the post-deadline lineup distribution.

Veto Scenario 2 — Near-ordinary least squares with high multicollinearity. Condition: λ is set near zero or selected too aggressively low by CV, while M remains at 1200 and only one season is used. Veto rule: reject the model if condition number of X^T P X exceeds a stability threshold or if test RMSE exceeds 12.58. Verifiable prediction: the paper already verifies this outcome—one-season OLS with M=1200 yields test RMSE 12.76, worse than the trivial home-margin model [PAGE 5]—so any replication observing RMSE > 12.58 confirms the veto.

Veto Scenario 3 — Unweighted or misweighted possession sampling. Condition: snippets are weighted equally rather than by p_i, or very short garbage-time snippets are given equal influence to extended starters’ stints. Veto rule: require P = diag(p_i) in the objective [PAGE 5]; if unweighted OLS is used on short snippets, veto. Verifiable prediction: training error will appear deceptively low while out-of-sample R^2 collapses toward 0 or negative values, because noise in low-possession snippets is mistaken for signal; the reported possession-weighted ridge result (RMSE 11.47) [PAGE 6] would not be reproduced under uniform weighting.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "Rao-Blackwellizing Field Goal Percentage.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7068
---

<NATIVE_REASONING>
We need answer to user. They provided source paper and ask DRIVE SOURCE. We need produce specified XML sections, >=1000 words, strict no betting lines. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations with units assumptions exact singularity/breakdown regimes. Sections exact:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need infer context: "GSE + GSI Frontier Reasoning Foundry" maybe asks analyze paper as sports research, but invariants no betting lines. Need not mention betting. Could mention not wagering. Need perhaps produce a rigorous audit of paper. Need avoid "odds", "spread", "moneyline", "totals". We can mention only paper's stats. Need 1,000+ words. Use exact page citations with quotes. Need maybe include quotes verbatim from pages. Need include equations from paper. Need avoid fake ratios. We can discuss RB-FG estimator, Beta-Bernoulli, logistic regression, Bayesian regression. Units: FG% dimensionless probability in [0,1]; depth/left-right inches or feet; entry angle radians/degrees; tracking 25 Hz; sample sizes counts. Singularities/breakdown regimes: Beta parameters zero/negative; n=0; p_i in {0,1}; logistic separation; variance formula denominator; shrinkage prior; misclassification cutoff; trajectory model rank deficiency; prior pseudo-data; extrapolation; heteroscedastic noise; identifiability; free throw Bernoulli sufficiency; 2-point partial RB. Need "exact singularity/breakdown regimes" formal.

Need maybe discuss multi-week traps: overreacting to early season; LeBron example; 3P% stabilization ~750 attempts; small sample; regression to mean; prior Beta(10,18); using entire season training causes leakage? The paper trains model on 2014-15 and predicts 2015-16. But when comparing RMSE using subset games from 2014-15, they use shot probabilities modeled using entire set? Page 12-13 says "Some bias is introduced by RB-FG% as shot probabilities are modeled using the entire set of 3-point shots, while estimates are calculated seperately for each player." That's potential leakage? Need audit.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage: Rao-Blackwell theorem, Blackwell 1947? Rao 1945, C.R. Rao, David Blackwell. Empirical Bayes, Efron & Morris 1977; Beta-Binomial; Stein paradox; SportVu; Marty/Lucey 2017, Marty 2018, Franks et al. 2016; Kubatko 2007. Multi-week traps: early-season 3P variance, LeBron 2015-16, 2016-17 reversion, Free throw hot hand Arkes 2010. Need exact page quotes.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Interpret as decision-maker's mental model: crisis habits (overweight raw FG%, narrative of decline), counter-trap (RB-FG may overcorrect due to model bias, Bayesian priors), clock (sample size/time). Need not betting. Discuss evaluator/front office/coach recursive beliefs. "crisis habit regression" maybe means under pressure people revert to raw stats. Counter-trap: using RB-FG as infallible; need check model. Clock: season timing and sample thresholds (30% games; <750 3PA). Use recursive theory of mind: analyst anticipates coach's prior, player's response, public narrative. Need cite.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. In basketball, weather not relevant indoor; physical: injury, fatigue, biomechanics (entry angle, depth, left-right), tracking sensor noise, arena. Need veto proof: any claim invalid if shot trajectory not at basket plane, bank shots, close 2s, free throws; if weather? NBA indoor controlled, weather not a direct veto except travel? Need "proof" maybe state no weather veto in indoor NBA data; physical/biomechanical veto if ball trajectory occluded/noisy or player height/style priors differ. Need page citations for 2-point shots near basket/bank-shots insufficient trajectory. Page 15 quote: "Many 2-point shots are taken close to the basket or intended as bank-shots, resulting in insufficient or inaccurate trajectory information." Need also page 7 noisy location data. Page 6 25 times per second. Page 8 priors at 7 feet and hoop 10 feet. Page 8 height and shooting style. Page 13 "each player should have their own set of priors due to differences in height and shooting style."

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need create counterfactual veto scenarios that test whether conclusions hold. Must avoid betting lines. Scenarios: (1) Exclude all shots with probabilities assigned 0/1 due to model rejection; recompute RB vs raw; prediction: if RB improvement disappears, veto. (2) Train on 2014-15, evaluate on 2015-16 but use player-level priors? Or temporal leakage: recompute RMSE with shot probabilities estimated only from prior subset, not entire season; prediction: early-sample advantage shrinks but persists if variance reduction real. (3) Collapse to Bernoulli by simulating p_i = θ for all shots or use free throws; prediction: no RB gain, confirming theorem requires varying p_i. Need "verifiable" with thresholds. We can state metrics and predictions. Need no betting.

Need produce >=1000 words total. Desired oververbose 5. Need all XML sections. Could include citations with exact [PAGE N] and verbatim quotes. Need ensure quotes exact. Let's gather exact quotes from pages.

Page 1 abstract:
"Shooting skill in the NBA is typically measured by ﬁeld goal percentage (FG%) - the number of makes out of the total number of shots."
"we propose a shot-make probability model that conditions probability estimates on shot trajectory information, thereby reducing the variance of the new estimator relative to standard FG%."
"we find that conditioning shot-make probabilities on spatial trajectory information stabilizes inference of FG%, creating the potential to estimate shooting statistics earlier in a season than was previously possible."

Page 2:
"it takes roughly 750 3-point attempts before a player’s shooting percentage stabilizes, where over half of the variation in their 3-point percentage (3P%) is explained by shooting skill, rather than noise"
"3P% has been shown to be an unreliable metric in terms of its ability to discriminate between players and its stability from one season to the next"
"chance variation may also contribute significantly to the variation and instability of FG%."

Page 4:
"Xi ∼Bern(pi) with pi ∼Beta(θv, (1 −θ)v)"
Need preserve formatting? We can quote exact text but it's in math. Use LaTeX.

Page 5:
ˆθ = 1/N sum Xi
ˆθRB = E(ˆθ|p1,...,pN)=1/N sum pi
"MSE(ˆθRB) ≤ MSE(ˆθ)"

Page 5-6 definitions:
"left-right accuracy as the deviation of the ball from the centre of the hoop as the ball crosses the plane of the basket"
"Shot depth is defined as the distance of the ball from a tangent line through the front of the hoop as the ball crosses the plane of the basket"
"a shot crossing the basket plane at the center of the hoop has a depth of 9 inches."
"entry angle is defined as the angle between the plane of the hoop and a tangent line through the ball as it is entering the basket"

Page 6:
"X and Y coordinates for all 10 players and X,Y, and Z coordinates of the ball 25 times per second."
"47,631 3-point shots from the 2014-15 season and 49,876 3-point shots from the 2015-16 season."
Page 7:
"the location data is noisy, especially in measuring the height of the ball."
Equation (1):
E(Zi)=β0+β1xi+β2yi+β3x^2_i+β4y^2_i+β5xiyi
Page 7:
"Bayesian regression model using pseudo-data to establish priors that reflect this knowledge."
Page 8:
"4 pseudo-data points, 2 at the start of the shot set at the X,Y coordinates of the player when the shot is released and at a height of 7 feet, and 2 set at the centre of the hoop and at 10 feet in height."
Page 8:
"shots entering the basket at 11” in depth, 2” deeper than the centre of the basket, and 0” in left-right accuracy are made with the highest percentage."
"variance in shot depth is much larger in the OLR compared to the Bayesian regression model"
Page 9 equation (2):
P(Si=1)=σ(β0+β1Di+β2LRi+β3Ai+β4D_i^2+β5LR_i^2+β6A_i^2+β7D_i*LR_i+β8D_i*A_i+β9LR_i*A_i)
Page 10:
"Modeled trajectories that are too far from the raw data are removed and instead assigned a probability of 1 or 0 for a make or miss, respectively."
"misclassification rates of 0.246 and 0.204"
"predict makes/misses correctly about 80% of the time"
Page 11:
"predicted shot-make probabilities are highest for shots at 11 inches depth, 0 inches of left-right deviation, and similar for shots with entry angles in the mid-40s."
Page 11:
"N=24855" first half 2015-16.
"the decrease in mean-absolute error of our modeled estimator is predominately due to a reduction in variance"
Page 12:
"Beta(10,18), in essence adding 10 league-average shots to each player’s estimate."
Page 12:
"RB-FG% has a lower RMSE than the FG% when calculated using less than 30% of games"
Page 13:
"Some bias is introduced by RB-FG% as shot probabilities are modeled using the entire set of 3-point shots, while estimates are calculated seperately for each player."
"each player should have their own set of priors due to differences in height and shooting style."
Page 15:
"shot-make probabilities are estimated for 21,153 out of 24,832 free throws and 21,890 out of 73,925 two-point shots"
"Many 2-point shots are taken close to the basket or intended as bank-shots, resulting in insufficient or inaccurate trajectory information."
"free throws more closely follow a Bernoulli distribution than either 2-point or 3-point shots."
"If a player’s free throw attempts perfectly follow a Bernoulli distribution the number of makes and misses becomes a sufficient statistic for FT% and Rao-Blackwellizing would give no improvement in prediction accuracy."
Page 16 Table 1: We can quote values. Raw 0.0790, Grand Mean 0.0620, RB 0.0590, Shrunk Raw 0.0689, Shrunk RB 0.0572 for 3-point. Need be careful columns: Table lists "Raw Grand Mean RB Shrunk Raw Shrunk RB" and row "3-point shots 0.0790 0.0620 0.0590 0.0689 0.0572". Hmm there are 5 numbers after row? Actually header has 5 columns? It says Raw, Grand Mean, RB, Shrunk Raw, Shrunk RB = 5. Row has 0.0790, 0.0620, 0.0590, 0.0689, 0.0572. But that's weird: Grand Mean 0.0620? Actually maybe columns: Raw, Grand Mean, RB, Shrunk Raw, Shrunk RB. But in text "Grand Mean" maybe using league average as predictor. Need not interpret. We can quote exactly. For TS row: 0.0467 0.0436 0.0408 0.0417 0.0379. Need maybe avoid misrepresenting. We can say Table 1 reports lower errors for shrunk RB; exact row quoted.

Page 16 LeBron:
"Lebron James improved his 3-point shooting ability drastically, shooting 36.5% from three during the 2010-11 to 2014-15 seasons compared to just 32.9% in his first 7 seasons in Cleveland"
"during the 2015-16 season Lebron shot just 30.9% from three."
"we can estimate a 90% confidence interval via a normal approximation of (0.264, 0.354)."
Page 17:
"we estimate his 3-point percentage during 2015-16 to be 34.7%, with a 90% confidence interval of (0.321, 0.374)."
"his 3P% returned to 36.3% during the 2016-17 season."
Page 18:
"RB-3P% and RB-TS% are both more discriminative metrics than their raw counterparts."
Discrimination Table 2 values: Raw 3P% 0.432, RB-3P% 0.548, Raw TS% 0.713, RB-TS% 0.804.
Page 18-19:
"We are able to classify shots correctly 79.6% of the time using predicted make probabilities based on trajectory information, higher than the 61% classification rate we found using nearest defender distance and shot location as predictors of raw FG%"
"adding shot-distance and nearest-defender distance as dimensions to RB-FG% did not improve classification."
Page 19:
"Although all NBA teams almost exclusively use raw FG% and its aggregate statistics to evaluate player shooting, many teams use shot trajectory characteristics to evaluate and coach player shooting in practice."

Need maybe cite exact [PAGE 4] for Beta-Bernoulli. Need exact quote from page 4: "shots are modelled as Beta-Bernoulli random variables Xi ∼Bern(pi) with pi ∼Beta(θv, (1 −θ)v)" but source uses "Xi ∼Bern(pi) with pi ∼Beta(θv, (1 −θ)v)". Need include.

Need formal equations. We can write:
Let \(X_i \in \{0,1\}\), \(p_i\in[0,1]\), \(N\) shots. Raw:
\[
\hat\theta = \frac1N\sum_{i=1}^N X_i,\quad \hat\theta_{RB} = \mathbb E(\hat\theta\mid p_1,\dots,p_N)=\frac1N\sum_{i=1}^N p_i.
\]
MSE inequality:
\[
\mathrm{MSE}(\hat\theta_{RB})\le \mathrm{MSE}(\hat\theta)
\]
under squared-error loss and sufficiency. Units: dimensionless probability; counts. Assumptions: conditional independence given p_i; p_i sufficient for θ; p_i known or consistently estimated. Breakdown: N=0; p_i not calibrated; p_i deterministic 0/1; model bias.

Beta-Bernoulli:
\[
X_i\mid p_i \sim \mathrm{Bernoulli}(p_i), \quad p_i\mid\theta,v \sim \mathrm{Beta}(\theta v,(1-\theta)v)
\]
where θ∈(0,1), v>0. Mean p_i=θ. Variance p_i = θ(1−θ)/(v+1). Marginal Beta-Binomial. Need exact singularity: v→0 gives degenerate p_i at 0 or 1? Actually Beta(θv,(1−θ)v) as v→0 can become Bernoulli on endpoints? Mean θ, variance θ(1−θ)/(v+1) → θ(1−θ), so not degenerate; it becomes two-point distribution with mass θ at 1 and 1−θ at 0 (if θv and (1−θ)v both <1? As v→0, yes Bernoulli). v→∞ variance →0, p_i→θ, RB = raw, no gain. If θ=0 or 1, Beta parameters one zero, degenerate. If v<0 invalid. Need mention.

Variance of RB estimator if p_i drawn Beta: page 12 formula:
\[
\mathrm{Var}(\hat\theta_{RB}) = \frac{\hat\alpha\hat\beta}{n(\hat\alpha+\hat\beta)^2(\hat\alpha+\hat\beta+1)}
\]
where \(\hat\alpha,\hat\beta\) MLE. Need exact quote page 12. Singularity: n=0; α+β=0? α,β>0; denominator zero if α+β=0 or n=0; α+β+1>0 for positive. If α or β=0, variance zero but degenerate.

Logistic model:
\[
P(S_i=1)=\sigma(\beta_0+\beta_1D_i+\beta_2LR_i+\beta_3A_i+\beta_4D_i^2+\beta_5LR_i^2+\beta_6A_i^2+\beta_7D_iLR_i+\beta_8D_iA_i+\beta_9LR_iA_i)
\]
D, LR in inches or feet? Paper uses depth inches in text, figure feet? Page 6 says depth of 9 inches, page 8 11". Figure 2 says left/right and depth measurements given as distance in feet where center depth 0.75 feet. Need note inconsistent units: text inches, figure feet; conversion 9 in = 0.75 ft, 11 in ≈0.9167 ft. Entry angle radians/degrees. Need mention unit consistency issue. The logistic coefficients units inverse inches etc. Singularity: perfect separation; collinearity among polynomial/interactions; extrapolation beyond observed D, LR, A; if A at 0 or π etc. Need mention.

Bayesian regression:
\[
\rho(\beta|\sigma^2,z,X)\sim N(u_0,\sigma^2\Lambda_0^{-1}),\quad
\rho(\sigma^2|z,X)\sim IG(a_0,b_0)
\]
\[
u_n=(XX^T+\Lambda_0)^{-1}(\Lambda_0u_0+XX^T\hat\beta),\quad
\Lambda_n=(X^TX+\Lambda_0)
\]
Actually paper has \(u_n = (XX^T + \Lambda_0)^{-1}(\Lambda_0u_0 + XX^T\hat\beta)\), \(\Lambda_n=(X^TX+\Lambda_0)\). Need note dimension mismatch maybe X'X vs XX^T? In paper equation maybe typo. Breakdown: \(\Lambda_0\) singular? Prior precision; if \(\Lambda_0\) zero (flat prior) then \(u_n\) requires \(XX^T\) invertible; collinearity. Pseudo-data at height 7 and 10 ft; units feet. If shot start not at player location, bias.

Need "gray-zone audit" maybe list ambiguities: 2-point model partial; free throw no gain; model trained on all 3s vs player-specific priors; misclassification threshold 0.5; probabilities assigned 1/0 to rejected trajectories; omitted shots; classification vs probability calibration; no season stability metric. Need mention exact.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Could structure as:
- Unit/physical veto: if trajectory data doesn't cross 10 ft plane or is occluded, depth/LR/A undefined; paper's rejection rule assigns 1/0, which violates RB sufficiency if correlated with skill.
- Biomechanical veto: player height/shooting style should alter priors; paper uses single prior; quote page 13. If player-specific biomechanics produce systematic deviations, p_i mis-calibrated; RB can be biased.
- Weather veto: NBA indoor games are climate-controlled; weather is not a direct layer. Weather could only proxy travel/arena/altitude? Paper does not model weather; no evidence. So weather veto is inapplicable unless data include outdoor/arena environmental variables not in SportVu. We can say "no weather operator is admissible."
- Bank shots/close 2s: quote page 15; those shots excluded or assigned extremes; 2-point RB only partial.
- Free throws: homogeneous Bernoulli; RB no gain; quote page 15.
Need "proof" maybe formal: If \(p_i\) is not a function of observed trajectory and is set to \(S_i\) for rejected shots, then \(\mathbb E[p_i|\theta]\neq\theta\) generally, so Rao-Blackwell inequality no longer guarantees MSE reduction. If weather variable W influences \(p_i\) but is omitted from covariates, then \(p_i\) is not sufficient; \(\hat\theta_{RB}\) may be biased for θ. But indoor NBA, W constant/controlled; no weather signal.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 scenarios with predictions. RLVR = Reinforcement Learning with Verifiable Rewards? We can define as counterfactual tests with verifiable metrics. Need avoid betting. Scenario 1: "Ablate rejected-shot probability imputation." Counterfactual: exclude all shots assigned 1/0 rather than include; recompute MAE/RMSE for 3P% and TS% on same split. Prediction: if RB advantage is driven by imputation, MAE gap shrinks to ≤0.001 or reverses; if robust, shrunk RB remains lower than shrunk raw. Need threshold. Scenario 2: "Temporal leakage / whole-season probability estimation." Recompute RB-FG% for first-half 2015-16 using probabilities estimated only from data available up to each game, not full season. Prediction: early-season RMSE advantage shrinks but remains positive for <30% games; if disappears, veto. Need cite page 12-13 bias. Scenario 3: "Bernoulli collapse / free-throw control." Replace each p_i with player's raw make rate or use free throws where p_i≈θ; prediction: RB and raw converge; any claimed gain on free throws >? paper already minor. If model shows large gain on synthetic Bernoulli data, it's leakage/overfit. Also maybe "Player-specific priors" scenario: use height/style priors; prediction: reduces bias but maybe not enough sample. Need 3 verifiable. We can include metrics and exact predictions.

Need ensure no betting lines. Avoid words "odds", "spread", "moneyline", "totals", "line". "line" appears in "tangent line" and "best fit line" from paper; but invariant says never mention betting lines. Non-betting line okay? To be safe, avoid "line" except in quoted paper? The quote "tangent line" is from source; but "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." It doesn't ban word line generally. But avoid "betting". We can use "tangent" maybe not quote. Need no "odds". "MSE" okay.

Need fulfill ">=1,000-word depth across sections". Let's aim 1,800-2,300 words. Need sections exact XML. We can include markdown inside XML? Fine. Need not mention "I". Need perhaps title? We can start directly with XML.

Need cite exact [PAGE N] markers and verbatim quotes. We need include page markers with quotes. We can use quotes in each section. Need ensure exact quote not altered. Use "..." and [PAGE X]. Need not quote every claim. Need cite exact. Need "verbatim quotes" maybe use quotation marks. Ensure no ellipses altering? We can quote exact fragments.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include formal LaTeX, units, page citations, breakdown. We'll write detailed.

Need "THINK_TRACE" >=400 words. Deep multi-hop derivation & gray-zone audit. Could be ~700 words. We need include derivation: Bernoulli vs Beta-Bernoulli; sufficiency; conditional expectation; MSE decomposition. Gray-zone audit: assumptions, model estimation, calibration, leakage, units, sample sizes, partial RB, free throws. We can cite pages. Need mention exact quote. This section can include citations too. Need not be too huge but >=400.

Let's outline:

<THINK_TRACE>
Paragraph 1: define X_i and θ. Raw estimator. The paper replaces X_i with p_i. Multi-hop: if p_i sufficient for θ and conditional expectation, then \(\hatθ_RB=E[\hatθ|p]\). By Rao-Blackwell, MSE ≤. Decompose MSE = bias^2+variance. Since unbiased, reduction variance. But theorem conditional on true p_i; estimated p_i introduces bias. Page 5 quote MSE. Page 4 quote Beta-Bernoulli. Page 11 quote decrease due to variance. Gray-zone: p_i estimated via logistic with shot factors; if miscalibrated, E[p_i|θ]≠θ. Rejected trajectories assigned 1/0 page 10; not RB-compatible. Units inconsistent inches vs feet page 6/8/9. Sample sizes. Table 1. LeBron example. Need mention no weather. Multi-hop: from shot trajectory to factors via quadratic/Bayesian; to logistic probability; to average. Each hop can break. We can write "The causal chain is: tracking → trajectory → factors → p_i → RB-FG%." Each hop has noise. The Rao-Blackwell theorem only covers final hop if p_i were known; model uncertainty at earlier hops can invert inequality. Need "gray-zone audit": early season <30% page 12; 750 attempts page 2; free throws Bernoulli page 15; 2-point partial page 15. Need mention misclassification 0.204 vs 0.246 page 10; but classification not calibration. Need "probability calibration" not same as 80% classification.

Need maybe exact quote "MSE(ˆθRB) ≤ MSE(ˆθ)" [PAGE 5]. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations with units. Include definitions:
- \(X_i\in\{0,1\}\), \(N\) count, \(\theta\in[0,1]\) dimensionless.
- Raw and RB.
- Beta-Bernoulli and marginal. Need maybe derive expected Beta-Binomial likelihood? We can include paper's integral? Maybe not necessary but "operators and equations" should include key. Could include:
\[
\Pi(X_i|\theta,v)\propto \int_0^1 \frac{p_i^{X_i+\theta v-1}(1-p_i)^{(1-\theta)v-X_i}}{B(\theta v,(1-\theta)v)}dp_i \propto \theta^{X_i}(1-\theta)^{1-X_i}
\]
Need exact from page 4. Units: v dimensionless concentration? In Beta parameters, v is dimensionless pseudo-count. Actually θv and (1−θ)v are positive shape parameters (dimensionless). v is effective sample size. Good.
- Variance formula page 12.
- Quadratic trajectory equation page 7 with D/LR/A definitions and units. Paper uses \(Z_i\) height, \(x_i,y_i\) coordinates. Units feet/inches. We can state coordinates in feet? SportVu likely feet. Source uses height 10 feet, 7 feet; depth inches. Need note.
- Bayesian regression equations page 7-8.
- Logistic equation page 9.
- Misclassification rate and cutoff.
- Breakdown regimes table maybe bullet list: \(N=0\); \(v\to0\) or \(\infty\); θ=0/1; p_i estimated with perfect separation; collinearity; extrapolation; rejected trajectories; unit mismatch; free throw Bernoulli; partial 2-point. Need exact singularity. Use "breakdown" not "singularity" maybe.

Need cite page markers for each equation. Good.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage. Rao 1945? Blackwell 1947? Need be accurate: Rao-Blackwell theorem by C.R. Rao (1945) and David Blackwell (1947). The paper cites Rao-Blackwell theorem but references? It doesn't list Rao/Blackwell references in page 20? It does not cite original. We can state lineage as standard. Empirical Bayes: Efron and Morris 1977 "Stein's paradox in statistics" cited page 20; paper uses Beta(10,18) page 12. SportVu tracking: Kubatko et al. 2007 page 1/20; Marty and Lucey 2017; Marty 2018; Franks et al. 2016. Multi-week traps: early-season 3P% instability; 750 attempts page 2; LeBron 30.9% vs RB 34.7% and next season 36.3% page 16-17; regression to mean; "multi-week" maybe several weeks of games. Free throw hot hand Arkes 2010 page 15/20; serial correlation small. Need "retrocausal genealogy" maybe how future outcome (LeBron 2016-17) validates earlier RB estimate, but that is retrospective. Need discuss "retrocausal" as using future validation to audit earlier signal. Also "multi-week traps": using 5%, 10%, ... 30% games page 14; early season trap; training on entire season can leak future? Page 13 bias. Need mention "Grand Mean" in Table 1 as baseline; not betting. Good.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need interpret:
- Crisis habit regression: evaluator under uncertainty reverts to raw FG% and narratives (e.g., LeBron decline). Paper says "many teams almost exclusively use raw FG%" page 19. Recursive: coach knows fans/management use raw; player responds to narrative; analyst must model beliefs. 
- Counter-trap: treating RB-FG% as oracle and ignoring model bias; over-shrinking; player-specific priors; free throws no gain; 2-point partial. Need quote page 13 "each player should have their own set of priors..." and page 10 rejected trajectories. 
- Clock: sample size and season timing. The paper says RB-FG% lower RMSE when using less than 30% of games page 12; 750 3PA page 2; 90% CI. Need "clock" as decision deadline; early-season estimates. Recursive ToM: analyst anticipates coach's prior, player's self-model, public narrative; counterfactual: if analyst presents RB interval, coach may still use raw due to habit. Need maybe "crisis habit regression" is like under pressure use raw; "counter-trap" is overcorrection; "clock" is temporal threshold. Need no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Structure:
- Physical/trajectory layer: measurement at basket plane; if ball doesn't cross 10 ft or tracking noisy, factors undefined. Quote page 6 "25 times per second"; page 7 "location data is noisy, especially in measuring the height"; page 10 rejection rule; page 15 bank shots. Formal veto: if \(p_i\) not measurable, RB estimator cannot be computed; if imputed 1/0, sufficiency fails.
- Biomechanical layer: entry angle, depth, LR; player height/style priors. Quote page 13. If biomechanics cause prior shift, single prior mis-calibrates. But within paper, shot factors are direct physical variables; they can veto claims if model extrapolates. Free throws homogeneous. 
- Weather layer: NBA indoor, no weather operator; SportVu data pages 6 no weather. Weather not admissible; any weather claim is out-of-scope. If arena environment affects shot, not measured. "Weather veto proof" maybe prove no weather variable in equations; all variables are D, LR, A, trajectory x,y,z. So weather cannot be invoked as cause without new data.
- Cross-layer veto: if any layer yields p_i outside [0,1] or calibrated probabilities fail, RB inequality not guaranteed. Need mention "MSE inequality is conditional on correct p_i"; estimated p_i can introduce bias. Quote page 13 bias. Good.

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios:
1. Rejected-trajectory imputation ablation. Define treatment: remove all shots assigned 1/0 (page 10) from both training and evaluation; recompute Table 1 3P and TS MAE/RMSE. Prediction: if shrunk-RB advantage remains (e.g., 3P shrunk RB MAE < shrunk raw by ≥0.005? Table gap 0.0117; maybe threshold >0.005), accept; if gap ≤0.001 or reverses, veto. Need not over-specific? "Verifiable" means metric threshold.
2. Temporal leakage roll-forward. Recompute first-half 2015-16 RB using only prior games' shot probabilities and priors (no future season training? Actually model trained 2014-15 is prior; but p_i modeled using entire set? For 3P, model trained 2014-15; p_i for 2015-16 uses model, not entire 2015-16? Page 12-13 says "shot probabilities are modeled using the entire set of 3-point shots" likely when computing RMSE on 2014-15 subsets. So scenario: for 2014-15 subset RMSE, estimate p_i only from data up to each subset, not entire 2014-15. Prediction: early subset advantage shrinks but remains for <30% games; if not, veto. Need cite page 12 "less than 30% of games" and page 13 bias.
3. Bernoulli-collapse control. Replace \(p_i\) with \(\hat\theta\) (player's raw rate) or evaluate free throws where paper says Bernoulli; prediction: RB-FG% should collapse to raw and any large improvement indicates overfit. Quote page 15. Also synthetic: generate \(X_i\sim Bernoulli(\theta)\) with known θ, run pipeline; prediction MSE(RB) ≥ MSE(raw) or near equal. If pipeline shows gain, leakage. Need include exact predictions.

Need maybe include "RLVR" as "verifiable reward" not explained. Fine.

Need ensure final only XML. Need no extra preamble. Need not mention "GSE/GSI". Need meet word count. Let's draft full response. Need be mindful of XML tags with underscores. Fine.

Need exact quotes. Use verbatim from source, with [PAGE N]. Need include curly quotes? Source uses ﬁ ligature. We can use "field goal percentage (FG%)" but exact quote has "ﬁeld" ligature. We can use normal "field" maybe not exact. To be safe, quote exact snippets with original ligature? We can use "ﬁeld" as in source. But markdown may render. Use exact. Need quote "MSE" with hat? In source "MSE(ˆθRB) ≤MSE(ˆθ)" no space. We can quote. Need not quote entire equations. For quotes, use exact fragments.

Let's compose.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios" We won't. Formal equations are from paper. We can include derived variance formula from paper. No invented ratios. Good.

Need "units" in equations. We'll state \(D_i, LR_i\) in inches in text or feet in Figure 2? The paper uses both. We can say "paper's text reports inches; Figure 2 reports feet with center at 0.75 ft; these are convertible, but a pipeline must fix one unit." That's a gray zone. Entry angle in radians in Figure 2, degrees in text. Good.

Need "exact singularity/breakdown regimes" formal. We'll include a bullet list:
- \(N=0\) or \(n=0\): estimators undefined; variance formula denominator zero.
- \(\theta\in\{0,1\}\) or \(v=0\): Beta parameters zero; degenerate.
- \(v\to\infty\): \(p_i\to\theta\), RB-FG%=raw; no variance reduction.
- \(v\to0\): Beta collapses to two-point; high variance.
- Logistic perfect separation: MLE diverges; \(\sigma\) saturates at 0/1.
- Design matrix rank deficient: \(XX^T+\Lambda_0\) singular if \(\Lambda_0\) not PD.
- Probability imputation 1/0 for rejected trajectories violates sufficiency; bias.
- \(D, LR, A\) outside training support: extrapolation.
- Free throws Bernoulli: \(X_i\) sufficient; no gain.
- 2-point partial: only 21,890 of 73,925; missing not at random.
Need page cites.

Need "CROSS_LAYER_VETO_ADJUDICATION" "proof" maybe formal:
If \(p_i = P(S_i=1|\theta, \mathcal F_i)\) and \(\mathcal F_i\) includes all physical/biomechanical variables, then by definition \(S_i\indep \theta | p_i\); RB inequality. If any layer omitted (weather, player-specific prior, rejected trajectory), then \(S_i\not\indep \theta | p_i\). Therefore cross-layer veto. Weather: indoor NBA no weather variable in \(\mathcal F_i\); adding weather would be unmeasured; cannot adjudicate. Good.

Need final answer with all sections. Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core derivation is a conditional-expectation argument, not a new “shooting talent” equation. Let \(X_i\in\{0,1\}\) be make/miss for shot \(i\), \(p_i=P(X_i=1\mid \text{trajectory})\), \(N\) the number of shots, and \(\theta\) the player’s true FG%. The raw estimator is \(\hat\theta=N^{-1}\sum_i X_i\). The paper defines \(\hat\theta_{RB}=\mathbb E(\hat\theta\mid p_1,\dots,p_N)=N^{-1}\sum_i p_i\) and invokes the Rao-Blackwell theorem: “MSE(ˆθRB) ≤MSE(ˆθ)” [PAGE 5]. The multi-hop chain is: SportVu coordinates at 25 Hz [PAGE 6] → quadratic height model \(E(Z_i)=\beta_0+\beta_1x_i+\beta_2y_i+\beta_3x_i^2+\beta_4y_i^2+\beta_5x_iy_i\) [PAGE 7] → shot factors \(D_i,LR_i,A_i\) → logistic shot-make probability model [PAGE 9] → average probability \(\hat\theta_{RB}\). The theorem guarantees variance reduction only at the final hop if \(p_i\) is a true conditional probability and is sufficient for \(\theta\). The paper’s own Beta-Bernoulli model states “Xi ∼Bern(pi) with pi ∼Beta(θv, (1 −θ)v)” [PAGE 4], making \(p_i\) sufficient under that model. The empirical claim is that the decrease in mean absolute error is “predominately due to a reduction in variance” [PAGE 11].

The gray-zone audit is where the theorem becomes fragile. First, estimated \(p_i\) are not known \(p_i\). If the logistic model is miscalibrated, \(\mathbb E[p_i\mid\theta]\neq\theta\), so the Rao-Blackwell inequality can fail in MSE even if the estimator is less noisy. The paper explicitly introduces bias: “Some bias is introduced by RB-FG% as shot probabilities are modeled using the entire set of 3-point shots, while estimates are calculated seperately for each player” [PAGE 13]. Second, the paper removes some modeled trajectories and assigns “a probability of 1 or 0 for a make or miss, respectively” [PAGE 10]. This is not a conditional probability; it is outcome imputation. If rejected trajectories correlate with player skill or shot type, the sufficient-statistic argument is broken. Third, the shot-factor unit scale is inconsistent across presentation: text uses inches, e.g. “a shot crossing the basket plane at the center of the hoop has a depth of 9 inches” [PAGE 6], while Figure 2 says depth measurements are “given as distance in feet” with center depth 0.75 feet [PAGE 9]. These are convertible, but a production pipeline must fix one unit or coefficient interpretations drift. Fourth, classification accuracy is not calibration: the reported tenfold misclassification rates are 0.246 for OLR and 0.204 for Bayesian regression [PAGE 10], and “about 80% of the time” correct is not the same as probabilistic reliability. Fifth, the free-throw extension is a control case: the paper says “free throws more closely follow a Bernoulli distribution” and “If a player’s free throw attempts perfectly follow a Bernoulli distribution the number of makes and misses becomes a sufficient statistic for FT% and Rao-Blackwellizing would give no improvement” [PAGE 15]. The 2-point extension is only partial: probabilities are estimated for “21,890 out of 73,925 two-point shots” because many close shots or bank shots lack sufficient trajectory information [PAGE 15]. The LeBron example is a useful temporal audit: raw 2015-16 3P% is 30.9% with interval (0.264, 0.354), RB estimate is 34.7% with interval (0.321, 0.374), and next-season 3P% returned to 36.3% [PAGES 16-17]. That is consistent with the RB correction, but it is one case, not proof of universal calibration. The paper also reports early-season advantage: RB-FG% has lower RMSE “when calculated using less than 30% of games” [PAGE 12], with the caveat that raw eventually catches up on the full sample. The 750-attempt stabilization threshold for 3P% [PAGE 2] is the clock that governs whether any multi-week inference is stable. The audit conclusion is conditional: RB-FG% is a credible variance-reduction operator under the paper’s Beta-Bernoulli assumptions, but it is vetoed whenever \(p_i\) is uncalibrated, imputed as 0/1, extrapolated outside the shot-factor support, or applied where Bernoulli sufficiency already holds.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(X_i\in\{0,1\}\) be a make indicator, \(N\in\mathbb N\) the shot count, \(\theta\in[0,1]\) the true FG% (dimensionless probability), and \(p_i\in[0,1]\) the shot-make probability conditional on trajectory. The paper’s raw and Rao-Blackwellized estimators are
\[
\hat\theta=\frac1N\sum_{i=1}^N X_i,\qquad
\hat\theta_{RB}=\mathbb E(\hat\theta\mid p_1,\dots,p_N)=\frac1N\sum_{i=1}^N p_i,
\]
with the stated theorem “MSE(ˆθRB) ≤MSE(ˆθ)” [PAGE 5]. Units: \(X_i\) and \(p_i\) are dimensionless indicators/probabilities; \(N\) is a count; \(\hat\theta,\hat\theta_{RB}\) are dimensionless proportions. The inequality assumes squared-error loss, conditional independence of \(X_i\) given \(p_i\), and correctness/sufficiency of \(p_i\) for \(\theta\). Breakdown regimes: \(N=0\) makes both estimators undefined; if \(p_i\) is not a conditional probability, the inequality is not guaranteed; if \(p_i\in\{0,1\}\) are outcome imputations rather than probabilities, sufficiency fails.

The Beta-Bernoulli operator is
\[
X_i\mid p_i\sim\mathrm{Bernoulli}(p_i),\qquad
p_i\mid\theta,v\sim\mathrm{Beta}\bigl(\theta v,(1-\theta)v\bigr),
\]
where \(v>0\) is a dimensionless concentration/effective-sample-size parameter and \(\theta v,(1-\theta)v>0\) are Beta shape parameters. The paper states “Xi ∼Bern(pi) with pi ∼Beta(θv, (1 −θ)v)” [PAGE 4]. Under this model \(E[p_i]=\theta\), so the RB estimator is centered on \(\theta\) if the Beta model is correct. The paper’s variance expression for the RB estimator is
\[
\operatorname{Var}(\hat\theta_{RB})=
\frac{\hat\alpha\hat\beta}{n(\hat\alpha+\hat\beta)^2(\hat\alpha+\hat\beta+1)},
\]
where \(\hat\alpha,\hat\beta\) are maximum-likelihood Beta parameters [PAGE 12]. Units: \(n\) is a count; \(\hat\alpha,\hat\beta\) are dimensionless shape parameters; the variance is dimensionless squared probability. Singular/breakdown regimes: \(n=0\); \(\hat\alpha+\hat\beta=0\); \(\hat\alpha=0\) or \(\hat\beta=0\) (degenerate); \(v\to0\) (Beta mass concentrates near endpoints); \(v\to\infty\) (Beta variance goes to zero, \(p_i\to\theta\), and RB-FG% collapses toward raw FG%); \(\theta=0\) or \(\theta=1\) (one Beta shape parameter zero). The theorem’s advantage is largest when \(p_i\) varies substantially around \(\theta\), not when shots are already Bernoulli-homogeneous.

The trajectory operator in the paper is a quadratic height model:
\[
E(Z_i)=\beta_0+\beta_1x_i+\beta_2y_i+\beta_3x_i^2+\beta_4y_i^2+\beta_5x_iy_i,
\]
where \(Z_i\) is ball height and \(x_i,y_i\) are tracking coordinates [PAGE 7]. Units: \(Z_i,x_i,y_i\) are spatial coordinates; the paper mixes inches in prose and feet in Figure 2, so unit conversion is mandatory. The paper uses “the point where the model specifies the ball crosses 10 feet in height” as the basket-plane location [PAGE 7]. The three factors are left-right accuracy, depth, and entry angle; depth is measured relative to the adjusted front of the rim, with center depth “9 inches” [PAGE 6] and best make probability at “11” in depth, 2” deeper than the centre of the basket, and 0” in left-right accuracy” [PAGE 8]. Entry angle is “the angle between the plane of the hoop and a tangent line through the ball as it is entering the basket” [PAGE 6]; Figure 2 reports radians while prose uses degrees, another unit audit point.

The Bayesian trajectory update uses a conjugate normal-inverse-gamma prior:
\[
\rho(\beta\mid\sigma^2,z,X)\sim N(u_0,\sigma^2\Lambda_0^{-1}),\qquad
\rho(\sigma^2\mid z,X)\sim IG(a_0,b_0),
\]
\[
u_n=(XX^T+\Lambda_0)^{-1}\bigl(\Lambda_0u_0+XX^T\hat\beta\bigr),\qquad
\Lambda_n=(X^TX+\Lambda_0),
\]
as printed in the paper [PAGES 7-8]. Units: \(\beta\) coefficients carry units of height per coordinate power; \(u_0\) is a prior mean vector; \(\Lambda_0\) is a precision matrix; \(\sigma^2\) is residual variance in squared height units. The paper adds pseudo-data at player release coordinates at 7 feet and at the hoop center at 10 feet [PAGE 8]. Breakdown regimes: rank-deficient \(XX^T+\Lambda_0\) when prior precision is not positive definite or design columns are collinear; prior pseudo-data inconsistent with actual release point; player-specific height/style mismatch because “each player should have their own set of priors due to differences in height and shooting style” [PAGE 13]. The paper uses one shared prior, so individual biomechanical priors are a known bias source.

The shot-make probability model is logistic:
\[
P(S_i=1)=\sigma\!\left(
\beta_0+\beta_1D_i+\beta_2LR_i+\beta_3A_i+
\beta_4D_i^2+\beta_5LR_i^2+\beta_6A_i^2+
\beta_7D_iLR_i+\beta_8D_iA_i+\beta_9LR_iA_i
\right),
\]
with \(\sigma(x)=e^x/(1+e^x)\) [PAGE 9]. Units: \(D_i,LR_i\) are distances (inches in text, feet in Figure 2), \(A_i\) is angle (degrees in text, radians in Figure 2); coefficients have inverse-distance, inverse-angle, or mixed units depending on term. Breakdown regimes: perfect separation in the logistic likelihood makes MLE coefficients diverge; polynomial/interaction collinearity; extrapolation beyond observed \(D_i,LR_i,A_i\); saturation of \(\sigma\) near 0 or 1; using a 0.5 classification cutoff as if it were calibrated probability. The paper reports misclassification rates “0.246 and 0.204” for OLR and Bayesian factors [PAGE 10], and classification “79.6% of the time” for trajectory probabilities versus “61%” for nearest-defender/location predictors [PAGES 18-19]. These are classification metrics, not calibration proofs.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is the Rao-Blackwell theorem from mathematical statistics, followed by empirical-Bayes shrinkage and sports-tracking measurement. The paper’s estimator is a conditional-expectation operator: replace an unbiased but noisy Bernoulli average with the average of conditional make probabilities. That lineage runs through Rao’s and Blackwell’s sufficiency/variance-reduction result, then through Efron and Morris’s “Stein’s paradox in statistics” cited in the bibliography [PAGE 20] and the paper’s own empirical-Bayes step: a prior “Beta(10,18), in essence adding 10 league-average shots to each player’s estimate” [PAGE 12]. The sports-measurement lineage runs from box-score FG% to tracking-based shot factors: the paper cites Kubatko et al. 2007 for advanced metrics [PAGE 1], Marty and Lucey 2017 and Marty 2018 for shot-factor practice work [PAGES 3, 17], and Franks et al. 2016 for discrimination/stability meta-metrics [PAGE 18]. The retrocausal check is the LeBron James case: the paper uses 2015-16 raw 30.9% and RB 34.7%, then notes that “his 3P% returned to 36.3% during the 2016-17 season” [PAGE 17]. That later season is a retrospective validation of the earlier RB signal, not a prospective guarantee. The multi-week trap is early-season overreaction: 3P% needs “roughly 750 3-point attempts before a player’s shooting percentage stabilizes” [PAGE 2], and RB-FG% only has lower RMSE “when calculated using less than 30% of games” [PAGE 12]. A second multi-week trap is selection: the 2-point sample is only partially Rao-Blackwellized because many close/bank shots lack usable trajectories [PAGE 15], and free throws are a Bernoulli control where the method should not create large gains [PAGE 15]. A third trap is temporal leakage: the paper admits shot probabilities can be modeled using the entire set of 3-point shots while player estimates are separate [PAGE 13]. Retrocausal genealogy therefore says: RB-FG% belongs to the sufficiency/empirical-Bayes family, but its historical warrant is conditional on calibrated shot-factor probabilities and honest temporal splits.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis habit regression is the evaluator’s fallback to raw FG% when uncertainty is high. The paper notes that “all NBA teams almost exclusively use raw FG% and its aggregate statistics to evaluate player shooting” [PAGE 19], so a coach, front office, or public narrative under pressure will regress to makes/misses and short-run percentage. The recursive layer is that the player knows this evaluation model and may over-adjust to a perceived slump; the analyst knows the coach will use raw FG%; the coach knows the analyst may present a model. The counter-trap is treating RB-FG% as an oracle. The paper itself supplies the counter-vetoes: rejected trajectories are assigned 1/0 [PAGE 10], one shared prior is used although “each player should have their own set of priors due to differences in height and shooting style” [PAGE 13], and free throws are already near-Bernoulli so Rao-Blackwellization “would give no improvement” under perfect Bernoulli behavior [PAGE 15]. The clock is sample size and season timing. Early in a season, the raw estimator is noisy; RB-FG% has lower RMSE below 30% of games [PAGE 12], but after enough games the raw estimator can catch up. The 750-attempt 3P% stabilization threshold [PAGE 2] is the outer clock. A recursive decision rule is: use RB-FG% to resist crisis-habit overreaction, but display raw FG%, RB-FG%, shrinkage, sample count, and model-bias caveats together; if the clock is below the stabilization threshold, treat RB as a variance-reduction aid, not a talent verdict. The LeBron case shows the desired counter-trap: raw 30.9% suggested decline, RB 34.7% suggested reversion, and the next season’s 36.3% supported reversion [PAGES 16-17]. The failure mode is overcorrecting: if the model’s prior is wrong or the rejected-shot imputation is skill-correlated, the analyst’s “smart” counter-narrative becomes the new crisis habit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto: the estimator is only defined when the ball’s basket-plane crossing can be measured. The data are “X,Y, and Z coordinates of the ball 25 times per second” [PAGE 6], but “the location data is noisy, especially in measuring the height of the ball” [PAGE 7]. If a shot lacks a stable 10-foot crossing, depth, left-right accuracy, and entry angle are undefined. The paper’s workaround—remove trajectories too far from raw data and assign “a probability of 1 or 0 for a make or miss” [PAGE 10]—is a physical-layer veto because outcome imputation is not a conditional probability and can bias \(\hat\theta_{RB}\). Biomechanical-layer veto: shot factors are direct biomechanical summaries, but the model uses a single prior while the paper says player-specific priors are needed “due to differences in height and shooting style” [PAGE 13]. If a player’s release geometry systematically shifts the trajectory model, \(p_i\) is miscalibrated; the Rao-Blackwell inequality is conditional, not absolute. The 2-point layer is explicitly partial: “Many 2-point shots are taken close to the basket or intended as bank-shots, resulting in insufficient or inaccurate trajectory information” [PAGE 15], and only 21,890 of 73,925 two-point shots receive estimated probabilities. Free-throw layer: free throws are more homogeneous; the paper says they “more closely follow a Bernoulli distribution” [PAGE 15], so the physical/statistical veto is that there is little conditional variance left to remove. Weather-layer veto: the SportVu data and equations contain no weather operator; the variables are ball coordinates, depth, left-right distance, and entry angle. NBA games in this dataset are indoor and climate-controlled, so weather is not an admissible explanatory layer unless new environmental measurements are added. A formal cross-layer statement: if \(\mathcal F_i\) includes all physical and biomechanical information relevant to \(S_i\), then \(S_i\indep\theta\mid p_i(\mathcal F_i)\) and RB is admissible; if \(\mathcal F_i\) omits a relevant layer such as player-specific biomechanics, rejected-trajectory status, or unmeasured environment, then \(S_i\not\indep\theta\mid p_i\) generally, and the RB estimator can be biased. Weather is therefore not a veto in this paper; it is out of scope. The valid vetoes are measurement failure, imputation, prior mismatch, partial 2-point coverage, and Bernoulli-homogeneous free throws.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — rejected-trajectory imputation ablation. Counterfactual: remove every shot that the paper assigns probability 1 or 0 because its modeled trajectory is too far from raw data [PAGE 10], then recompute the 3-point and true-shooting MAE/RMSE on the same first-half/second-half split. Verifiable prediction: if the shrunk-RB advantage is real, shrunk RB should remain lower than shrunk raw by a nontrivial margin; using Table 1’s 3-point row as a reference, raw 0.0790, RB 0.0590, shrunk raw 0.0689, shrunk RB 0.0572 [PAGE 16], a robust result should preserve at least a 0.005 MAE gap. If the gap collapses to \(\le 0.001\) or reverses, veto the claim that trajectory probabilities drive the improvement. Scenario 2 — temporal roll-forward veto. Counterfactual: for the 2014-15 subset RMSE analysis, estimate each shot probability only from data available before the subset’s game window, rather than modeling probabilities “using the entire set of 3-point shots” [PAGE 13]. Verifiable prediction: the early-season advantage should shrink but remain positive for subsets below 30% of games, matching “RB-FG% has a lower RMSE than the FG% when calculated using less than 30% of games” [PAGE 12]. If the advantage disappears under strict roll-forward, the apparent early-season gain is leakage; if it survives, the variance-reduction claim is temporally verifiable. Scenario 3 — Bernoulli-collapse control. Counterfactual: replace every \(p_i\) with the player’s raw make rate \(\hat\theta\), or evaluate the free-throw sample where the paper says Bernoulli sufficiency applies [PAGE 15]. Verifiable prediction: RB-FG% should converge to raw FG%, and any large RMSE/MAE improvement on synthetic Bernoulli data or free throws indicates overfit or leakage. A valid pipeline should show near-zero gain in the perfect-Bernoulli limit; a positive gain there would veto the model as a general “skill” estimator. A fourth auxiliary check is player-specific prior perturbation: vary the pseudo-data prior for height/style [PAGE 13] and require the 3P% and TS% conclusions to remain directionally stable; if the RB advantage flips sign under reasonable prior changes, the result is prior-dependent rather than robust.
</RLVR_COUNTERFACTUAL_VETOES>
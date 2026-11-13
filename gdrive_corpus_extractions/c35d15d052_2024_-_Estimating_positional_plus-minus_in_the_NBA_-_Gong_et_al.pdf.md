---
source: "2024 - Estimating positional plus-minus in the NBA - Gong et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 8105
---

<NATIVE_REASONING>
We need answer user. They provided DRIVE SOURCE and pages. Need produce GSE + GSI Frontier Reasoning Foundry response with exact XML sections, >=1000 words, strict invariants. No betting lines. Need probably analyze source paper. The prompt asks? It doesn't explicitly ask a question beyond DRIVE SOURCE. We need infer likely task: produce deep research audit of paper with sections. Need include THINK_TRACE >=400 words, SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES with 3 verifiable RLVR veto scenarios + predictions. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. We must not mention spreads, totals, moneylines, odds. Avoid betting. Need maybe focus on the paper's methodology and potential pitfalls. Need ensure >=1000 words across sections. Need include equations from paper: y = beta0 + X beta + Z gamma + e, y_i | X_i,Z_i ~ N(beta0 + X_i beta + Z_i gamma, sigma^2), priors mixture normal for beta_p, beta_low ~ N(0,5), beta0 ~ N(0,1e6), gamma_t ~ N(0,5), mu_j ~ N(0,100), tau_j^2 ~ IG(0.01,0.01), sigma^2 ~ IG(0.01,0.01), Gibbs conditional posteriors Eq 6-8 maybe. Need discuss units: response points per 100 possessions (offensive rating scale), player effects in points per 100 possessions? Plus-minus in points per 100 possessions. Prior variances in squared units? Actually N(0,5) variance =5 (points per 100 possessions)^2. Beta0 variance 1,000,000. IG params. Need mention stints unit; m x 2n matrix values 1,-1,0; Z m x 2k. Need page citations: p4 for model Eq 1-5, p2 Table 1 play types, p3 Table 2/3/4, p5 Table5, p6 Table6/7, p11 Table8, p13 garbage time, p16 limitations, p18 Appendix A Eq 6-8, p18 Table9. Need verbatim quotes. Need include exact quotes with page markers. Need quote: "The response variable y is an m by one vector, representing points scored per 100 possessions by offensive teams in stints." [PAGE 4]. "The value of 1 in X indicates a player is on the floor and is with the team playing offense in a stint. The value of −1 suggests a player is on the court and is with the team playing defense. The value of 0 means the player is not on the floor." [PAGE 4]. "We put the following priors on model coefficients β and β0." [PAGE 4]. Maybe quote Eq. Need exact.

Need produce a rigorous audit. Let's structure.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit >=400 words. Need discuss paper's hierarchical Bayesian positional plus-minus. Multi-hop: data -> clustering -> hierarchical prior -> posterior -> plus-minus comparisons -> cross-validation -> robustness. Need identify ambiguities/gray zones: Fuzzy K-means probabilities used as weights but not propagated? It treats omega_pj from clustering as fixed in prior, not joint posterior. This is a gray zone: clustering uncertainty not integrated; article says "use a player’s probabilities ... to represent the uncertainty associated with Fuzzy K-means clustering results" [PAGE 3-4] but in model they are fixed weights in mixture prior. Need mention. Stint definition and response points per 100 possessions: high variance, no possession-level weighting? Actually y is points per 100 possessions per stint; if a stint has p possessions, points/100 = 100*points/p. Regression treats each stint independent with constant variance conditional on X,Z; does not weight by possessions. That's a major statistical issue: stints with few possessions get equal weight to high-possession stints. Need cite? Page 4: "Let yi denotes the ith element of y. Model (2) implies that yi’s are independent of each other and follow a normal distribution with constant variance, conditional on Xi and Zi" [PAGE 4]. This is gray-zone. Also "points scored per 100 possessions" but plus-minus coefficients? Since y is per 100 possessions, beta are points per 100 possessions, yes. But if stints have variable possessions, variance heteroskedastic. Need mention. Also team effects and player effects confounded; ridge/Bayesian priors handle. Also low usage players: prior N(0,5) not mixture; low usage 20% players. Need mention possible shrinkage. Also defensive positions derived from official positions; offensive from play types; two different taxonomies. The model's mixture prior only for offensive positions? Wait they say j from 1 to 11 with eight offensive and three defensive positions. But for a given player, do they mix over both offensive and defensive? The prior beta_p ~ sum_{j=1}^{11} omega_pj N(mu_j, tau_j^2). For offensive positions omega from Fuzzy K-means; for defensive positions? How are defensive probabilities computed? They don't explicitly define omega for defensive positions, likely one-hot based on official position. Need gray zone: for defensive positions, weights are deterministic indicator, not probabilistic. So mixture prior for a player includes both offensive and defensive position components simultaneously? Wait that seems odd: a player has one offensive and one defensive position. The mixture over 11 positions would mix over both offensive and defensive roles with weights? But if omega for offensive positions from Fuzzy K-means and for defensive positions perhaps? They might set omega for defensive positions to 0? Then how defensive position priors enter? Hmm. Let's parse: "where the player effect βp follows a mixture of normal distributions with each normal distribution having a group mean of μj and group variance of τj^2, where j is from 1 to 11 with eight offensive and three defensive positions. The notation ωpj refers to player p’s probability of belonging to position j, which is estimated from the Fuzzy K-means algorithm for offensive positions." It says for offensive positions only. For defensive positions, maybe omega is 1 for defensive group? But then mixture has 11 components; a player cannot be both offensive and defensive? Actually all players have both an offensive and defensive position. The prior for a player effect is a mixture across all 11; but the player effect is the same for offense and defense? Wait model has 2n player effects: first n offensive players, last n defensive players. So β is 2n vector. For an offensive player effect, prior mixture over 8 offensive positions; for a defensive player effect, prior mixture over 3 defensive positions. The notation β_p is ambiguous. They likely mean each player effect (offensive or defensive) has mixture over relevant positions. Need not overstate. But gray zone: "for offensive positions" only; defensive probabilities not described. Need mention. Also no explicit mention of how fuzzy membership probabilities are normalized or if they sum to 1; Fuzzy K-means gives degrees. They use as weights. Need mention.

Need include formal equations. Need discuss units and singularity/breakdown regimes. Singularities: X matrix collinearity because players in lineups, plus team effects. Since players grouped in stints, X has linear dependencies: five offensive players sum to 1, five defensive sum to -1 within each stint, so columns within team? Actually for each stint, the sum of offensive player indicators equals 1 (if exactly five), sum of defensive equals -1. Team matrix Z also has sum of offensive teams =1, sum of defensive = -1. This creates collinearity between player and team effects: intercept plus team effects plus player effects not identifiable without priors. Also if all players in a position group never appear? Priors. Breakdown regimes: tau_j^2 near 0 leads shrinkage to group mean; sigma^2 near 0; low usage prior. The mixture prior with omega probabilities fixed; if a player has high uncertainty, prior is mixture, not a single normal. Gibbs latent z. Need mention posterior conditional formulas.

Need perhaps cite "The matrix X has 2n columns because the first n columns represent offensive players while the last n columns indicate defensive players." [PAGE 4]. "The first k columns represent offensive teams and the last k columns denote defensive teams." [PAGE 4]. Good.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss plus-minus lineage: Rosenbaum 2004 adjusted plus-minus, Sill 2010 RAPM, Engelmann 2011, ESPN RPM, Sabin 2021 NFL hierarchical Bayesian plus-minus, Thomas et al. 2013 hockey, Yurko et al. 2019 nflWAR, Deshpande & Jensen 2016 win probability. The paper's contribution: positional plus-minus, play-type clustering. Multi-week traps: clustering instability; season-to-season changes; COVID season omitted; garbage time; low usage; positional labels; variance estimates; cross-validation RMSE small differences maybe not practically significant; 8-position vs 3-position. Need mention retrocausal genealogy: Bayesian hierarchical models in sports (Jensen et al. 2009 baseball; Santos-Fernandez et al. 2019 review), Fuzzy K-means from Bezdek 1984, K-means++ Arthur & Vassilvitskii 2007, play type data from Synergy. Multi-week traps: If using this methodology for future seasons, positional cluster drift; need re-estimate clusters per season? They run model separately each season but did they cluster per season? They say "run same hierarchical Bayesian linear model for each of six NBA seasons separately" [PAGE 6], but Table 2 position counts per season; likely clustering per season. Need mention. Trap: using 2015-16 to 2021-22 excluding 2019-20; if someone tries to extrapolate to 2019-20, COVID neutral sites and disrupted season break model assumptions. Another trap: Hyperprior IG(0.01,0.01) weakly informative but can be sensitive when group size small (Post-up Bigs n=18 in 2021-22). Need cite Table 2 [PAGE 3]. Need mention multi-week traps not betting. "multi-week traps" likely means over multiple weeks, regression to mean, schedule effects, lineup changes. Need phrase.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This seems like a strange section. Need interpret: "Crisis habit regression vs counter-trap vs clock." We need discuss how analysts may fall into habits: over-relying on positional labels, ignoring uncertainty, treating posterior means as truth, using variance as quality. Counter-trap: recognizing hierarchical shrinkage and credible intervals. Clock: temporal drift, season windows. Need be careful. Could frame as recursive theory of mind: what would a team analyst believe? The model's posterior means and credible intervals. Crisis habit regression: when under pressure, analysts may compare player plus-minus to positional plus-minus without considering uncertainty; they may overfit to last season. Counter-trap: use posterior predictive checks, cross-validation, and uncertainty propagation. Clock: 2015-16 to 2021-22, excludes 2019-20; positional gaps narrowing. Need mention exact quotes: "Versatile Scorers consistently outperform the other positions in terms of offensive plus-minus." [PAGE 6]. "Bigs’ average defensive plus-minus consistently ranks the highest among the position groups." [PAGE 8]. "the gaps in positional offensive plus-minus have diminished over the years." [PAGE 8]. "Guards have the lowest average defensive plus-minus, but the highest variance among the three defensive positions." [PAGE 15]. Need quote. This section needs >=? no explicit word count but total >=1000. We'll make substantial.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need adapt to paper: physical/biomechanical/weather veto proof. For basketball, physical/biomechanical: player size, position, interior defense, paint protection, fatigue, injury, minutes; weather not relevant indoor. Need adjudicate vetoes: model may infer Bigs defensive value but biomechanical confounds: height, wingspan, verticality, foul trouble, defensive scheme. Weather veto: indoor basketball no weather, but travel/back-to-back and schedule are analogous environmental confounds; paper does not include them. Need proof: "Bigs are often interior defenders, primarily tasked with protecting the paint area" [PAGE 3]; "Bigs are not only responsible for defending opposing Bigs but also play a crucial role in preventing opponents from scoring in the paint area." [PAGE 12]. This supports physical role. But model lacks biomechanical variables. Need state veto conditions: if a player's plus-minus is driven by lineup context, team scheme, or opponent quality not captured, positional inference may be confounded. Need mention no weather in NBA; arena/neutral site only 2019-20 omitted. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? We need create 3 counterfactual veto scenarios that could falsify model claims. They should be verifiable from source or reanalysis. Predictions. Need not betting. Scenarios:
1. Clustering uncertainty propagation veto: If re-run model integrating Fuzzy K-means membership probabilities as latent variables (joint posterior) rather than fixed weights, and 80% credible intervals for positional differences include zero or rank order changes. Prediction: Versatile Scorers' offensive advantage may shrink but likely remains positive; variance estimates may widen. Verifiable by rerunning Gibbs with z for offensive positions updated from likelihood? Actually fuzzy memberships fixed; counterfactual model with membership uncertainty. Prediction: top rank robust? Need careful.
2. Possession-weighted likelihood veto: If replace unweighted stint-level normal with possession-weighted or binomial/negative binomial model for points per stint (or weight by possessions), and RMSE/ranking changes. Prediction: coefficients shift, especially for high-variance positions; standard errors shrink for high-possession stints; Tables 6-7 means may change. Verifiable: reanalyze play-by-play with weights. Veto condition: if 8-position model no longer beats 3-position/RAPM in cross-validation (Table 8). Prediction: likely still beats RAPM but margins may change.
3. Garbage-time/COVID/season drift veto: If exclude 2020-21 or apply garbage-time filter to all seasons plus include 2019-20 with neutral-site adjustment, and the claimed narrowing of offensive gaps or Big defensive superiority disappears. Prediction: Big defensive superiority likely robust; narrowing may attenuate. Verifiable: reproduce Figures 12-13 and Table 6. Another: low-usage prior sensitivity: if change beta_low prior variance from 5 to e.g. 100, do positional means change? Prediction: low usage players are 20% but their effects influence lineups; posterior positional means may shift slightly. Need 3.

Need include exact quotes and page citations. Need be precise. Need ensure no betting lines. No mention odds. The paper itself has no betting.

Need maybe include "ZERO TOY EQUATIONS" means don't invent fake ratios. We can include formal equations from paper. We can also include derived equations for interpretation: e.g., expected points per 100 possessions for a stint: \hat y_i = \hat\beta_0 + \sum_{p in offense} \hat\beta_p - \sum_{p in defense} \hat\beta_p + \sum_{t in offense} \hat\gamma_t - \sum_{t in defense} \hat\gamma_t. That is not toy; derived from Eq 1. Units: points per 100 possessions. Need specify. Maybe include variance of y_i: Var(y_i|X_i,Z_i)=\sigma^2 (points per 100 possessions)^2. Need mention priors. Need include conditional posterior equations 6-8 from Appendix A. Need quote exact.

Need include breakdown regimes: singularity/breakdown:
- Exact collinearity: For any stint, sum of first n columns of X over players on offense = 1; sum over last n = -1; same for Z. With intercept and team effects, X and Z have rank deficiency; posterior proper due to priors. If priors flat/improperty, posterior improper. Beta0 prior variance 1e6 is effectively flat but proper; gamma prior N(0,5) regularizes. If tau_j^2 -> 0, all players in group j shrink to mu_j; if tau_j^2 -> infinity, group means uninformative. If omega_pj degenerate (one-hot), mixture reduces to normal; if omega uniform, prior is broad mixture. If sigma^2 -> 0, likelihood dominates; if sigma^2 huge, prior dominates. If group j has k=0 players in an iteration, conditional posterior for mu_j? Eq 7 uses k + tau^2/100; if k=0, posterior for mu_j is N(0, tau^2/(tau^2/100))? Actually Eq 7: p(mu_j | z_p=j) ∝ N( (k + tau_j^2/100)^{-1} (sum beta_pj), tau_j^2 (k + tau_j^2/100)^{-1} ). If k=0, mean 0, variance tau_j^2 / (tau_j^2/100)=100. So prior N(0,100) recovered. Good. If k small, hyperprior dominant. Mention Post-up Bigs n=18 in 2021-22 [PAGE 3 Table 2] and high variance estimates Table 7. Good.

Need maybe mention Table 8 RMSE values: 8-position best; e.g. 2015-16 8-position RMSE 78. [The source has corrupted digits: ".-position ." in Table 8. But text says 8-position produces best RMSE. Need cite "the 8-position model produces the best RMSE among all models across six seasons." [PAGE 11]. We can mention RMSE values in Table 8 are on points per 100 possessions scale? The response y is points per 100 possessions; RMSE in same scale. Actually cross-validation RMSE likely on y? Table values ~80, consistent with points per 100 possessions. Need mention units. Good.

Need produce final with exact XML tags. We can include markdown within sections? The user specified exact XML sections. We should output those tags and content. Need >=1000 words. We'll aim ~2500-3500 words. Desired oververbosity 5. Need be thorough but not insane. We have enough. Need include all sections. Need citations [PAGE N] and verbatim quotes. Need avoid betting terms. Need not mention "odds", "spread", "moneyline", "totals". The paper uses "plus-minus" which is okay. "RMSE" okay. "cross-validation" okay. "credible intervals" okay. "posterior" okay.

Need ensure quotes are verbatim. Let's collect exact quotes:

Page 1:
"Plus-minus is a widely used performance metric in sports."
"In the present study, we follow the plus-minus framework and adopt a hierarchical Bayesian linear model to estimate plus-minus at the position level in the NBA from 2015–16 to 2021–22."
"Results show that players with versatile offensive skills and big players who defend the paint area are the most valuable offensive and defensive contributors respectively."
"We also find that the gaps in offensive plus-minus between offensive position groups have decreased over time."

Page 2:
"Play type data document how players use their offensive possessions"
"Synergy Sports categorizes every offensive possession into one of the 11 play types"
"To be qualified, a player must play at least 10 minutes per game during a regular season and have at least 10 possessions in a particular play type."
"On average, low usage players account for 20 percent of all players in a given season."
"NBA players may play different positions throughout a season. Thus, it is common to see multiple positions associated with one player."
"The NBA offers seven combinations of player positions between C (Center), F (Forward), and G (Guard)"
"We rely on these official player positions to group players into one of the three defensive positions, Big, Forward, and Guard."

Page 3:
"Big players are often interior defenders, primarily tasked with protecting the paint area, while Guards and Forwards are generally exterior defenders."
"if the primary position of a player is C, then this player will be placed into the Big group."
"The only exception is the players with the official position F–C. In this case, we place this set of players in the Big group rather than the Forward group, since they may appear more often as interior defenders with their secondary position being C."
"We omit the NBA 2019-20 season from our analysis, since it was interrupted by the COVID-19 pandemic and had many games played at neutral sites."
"A stint can be defined as a unique matchup between five offensive players from one team and five defensive players from another team."
"We treat a stint as the unit of observation in our statistical model."
"Table 4 reports the total number of unique stints in each season from 2015–16 to 2021–22."
Table 2: Post-up Big 18 in 2021-22. Need quote table? We can cite [PAGE 3] Table 2. Exact quote from table: "Post-up Big 56 41 37 40 29 18 221" maybe not necessary. Could mention Table 2 reports Post-up Bigs reduced from 56 to 18, and paper says "the number of Post-up Bigs has reduced from 56 players during the 2015–16 season to a mere 18 players in the 2021–22 season." [PAGE 5]. Yes page 5 has exact quote. Good.

Page 4:
"Fuzzy K-means calculates to which degree each observation belongs to different groups"
"we use a player’s probabilities of belonging to various offensive positions to represent the uncertainty associated with Fuzzy K-means clustering results."
"we feed 10 standardized play types to the Fuzzy K-means algorithm to group players into distinct offensive roles."
"y = 𝛽0 + X𝛽+ Z𝛾+ e"
"where X is an m by 2n player matrix filled with values of 1, −1, and 0."
"The value of 1 in X indicates a player is on the floor and is with the team playing offense in a stint. The value of −1 suggests a player is on the court and is with the team playing defense. The value of 0 means the player is not on the floor."
"The response variable y is an m by one vector, representing points scored per 100 possessions by offensive teams in stints."
"yi|Xi, Zi ∼N(𝛽0 + Xi𝛽+ Zi𝛾, 𝜎2)"
"Model (2) implies that yi’s are independent of each other and follow a normal distribution with constant variance, conditional on Xi and Zi"
"𝛽p ∼ ∑_{j=1}^{11} 𝜔p_j N(𝜇j, 𝜏2_j), where player p is not low usage"
"𝛽lo𝑤∼N(0, 5), where player lo𝑤is low usage"
"𝛽0 ∼N(0, 1000000)"
"𝜇j ∼N(0, 100)"
"𝜏2_j ∼IG(0.01, 0.01)"
"𝜎2 ∼IG(0.01, 0.01)"
"we also conduct a cross-validation analysis to compare the prediction accuracy of our player plus-minus to other plus-minus metrics."
"we apply 5-fold cross-validation to single season data, and evaluate the Root Mean Square Error (RMSE) between our model and other models."

Page 5:
"our decision to choose eight clusters is grounded in the examination of the Fuzzy K-means elbow plot and our domain knowledge in basketball."
"the number of Post-up Bigs has reduced from 56 players during the 2015–16 season to a mere 18 players in the 2021–22 season."
"Skilled Bigs, who can score not only through pick-and-rolls but also spot-up shooting, have witnessed a notable growth in their representation. Their numbers have increased from 44 in 2015–16 to 65 in 2021–22"
Table 5 centroids.

Page 6:
"we run the same hierarchical Bayesian linear model for each of the six NBA seasons separately to estimate positional plus-minus."
"Versatile Scorers consistently outperform the other positions in terms of offensive plus-minus."
Maybe quote from page 6: "Figure 2 visualizes average offensive plus-minus for various positions..." and "These results indicate that Versatile Scorers consistently outperform the other positions in terms of offensive plus-minus." Good.

Page 8:
"the gaps in positional offensive plus-minus have diminished over the years."
"Versatile Scorers consistently stood out, maintaining higher plus-minus ratings than the rest."
"Bigs’ average defensive plus-minus consistently ranks the highest among the position groups."
"Most intervals locate well above zero, providing strong evidence that Bigs create more defensive value than the others in the NBA."
"Post-up Bigs and Versatile Scorers display notably higher variances of their offensive plus-minus relative to the other positions."

Page 11:
"Cross-validation results show both 3-position and 8-position models outperform the RAPM models in all six seasons."
"the 8-position model produces the best RMSE among all models across six seasons."
"redeﬁned offensive positions by play type data may better capture offensive roles of NBA players than traditional position groups in basketball"

Page 12:
"Bigs are not only responsible for defending opposing Bigs but also play a crucial role in preventing opponents from scoring in the paint area."
"Guards, limited by their size, offer the least defensive value to teams in Figure 4."
"despite Guards having the lowest defensive plus-minus, they exhibit the highest variability in defensive performance among the three defensive positions."
"there may exist some exceptional defenders or some extremely poor defenders in the Guard position."

Page 13:
"we reﬁne our play-by-play data set by ﬁltering out garbage time in which teams do not place their best possible players on the court."
"almost 4 percent of possessions are classiﬁed as garbage time in the 2020–21 season, whereas only 3.4 to 3.7 percent of possessions are considered garbage time in the other seasons."

Page 15:
"Versatile Scorers and Bigs have the highest positional offensive and defensive plus-minus respectively."
"the variance of Spot-up Shooters’ offensive plus-minus is the lowest among the eight offensive positions"
"Guards have the lowest average defensive plus-minus, but the highest variance among the three defensive positions."
"the gaps in offensive plus-minus between the eight offensive positions have decreased over the years."

Page 16:
"the response variable, points scored per 100 possessions, employed in this study does not reﬂect the importance of points in a game."
"the clustering results for offensive positions are subjective as the Fuzzy K-means algorithm is a heuristic method."
"Future studies of positional plus-minus may consider using win probability as the response variable."

Page 18:
Eq 6-8. Exact:
"z p ∝Multinomial(𝜔p_1 , 𝜔p_2 , … 𝜔p_11)"
"p(𝜇j|z p = j⋅) ∝N( (k + 𝜏2_j/100)^{-1}(∑𝛽p j), 𝜏2_j (k + 𝜏2_j/100)^{-1})"
"p(𝜏2_j|z p = j⋅) ∝IG(k/2 + 0.01, 0.5*∑(𝛽p j −𝜇j)2 + 0.01)"
"Gibbs sampling method with 30,000 iterations and a burn-in period of 1000"

Need maybe mention "Table 9: Thresholds of NBA garbage time defined by website Cleaning the Glass" [PAGE 18]. Conditions. Good.

Need write answer. Need decide if we need a title? Could start with brief intro then XML. The user requested exact XML sections. We can output only XML sections. Need ensure tags exactly as specified. Use <THINK_TRACE> etc.

Let's compose. Need >=1000 words. We'll write robust.

Need be careful with "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but no need. Use "RLVR-style counterfactual vetoes". The section name exact. We'll include 3 scenarios with predictions and verification. Need no betting.

Need maybe mention "source operators" as "operators and equations". In SOURCE_OPERATORS_AND_EQUATIONS include formal LaTeX with units and citations. Need include breakdown. Let's draft.

Potential issue: "ZERO TOY EQUATIONS" — we can include derived equation. That's fine. Need not invent ratios. We can state "No synthetic ratio is used; all equations below are the paper's model or direct algebra from it." Good.

Need ensure no mention of "odds" etc. Avoid "bet", "wager", "line". "plus-minus" okay. "lineup" okay. "spread" avoid. "total" avoid as betting; but can use "total number" if needed? The invariant says never mention spreads, totals, moneylines, or odds. To be safe, avoid the word "totals" in betting context; "total number of stints" maybe "aggregate number" to avoid. Use "aggregate". Avoid "over/under". Good.

Need maybe mention "points per 100 possessions" — okay.

Let's ensure word count. We'll write maybe 3000 words. That's fine.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with LaTeX. Use \(...\) or \[...\]. Need units. Need page citations. Need exact quotes. We can quote with quotation marks.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is: Synergy play-type percentages → Fuzzy K-means offensive roles → official NBA position map for defensive roles → stint-level plus-minus regression → hierarchical Bayesian shrinkage → posterior positional means/variances → cross-validation against RAPM and a 3-position model. The critical derivation is that the response is already normalized to “points scored per 100 possessions by offensive teams in stints” [PAGE 4], so the coefficients are on a points-per-100-possessions scale, not raw points. The design matrix \(X\) encodes offense as \(+1\), defense as \(-1\), absent as \(0\): “The value of 1 in X indicates a player is on the floor and is with the team playing offense in a stint. The value of −1 suggests a player is on the court and is with the team playing defense. The value of 0 means the player is not on the floor.” [PAGE 4]. The team matrix \(Z\) is analogous: “The first k columns represent offensive teams and the last k columns denote defensive teams.” [PAGE 4]. A direct algebraic expansion of Equation (1) gives the stint mean as the baseline plus the sum of offensive player effects minus defensive player effects plus offensive team effects minus defensive team effects. That expansion is not a new metric; it is just Equation (1) written by lineup membership.

The first gray zone is clustering uncertainty. The paper says “we use a player’s probabilities of belonging to various offensive positions to represent the uncertainty associated with Fuzzy K-means clustering results” [PAGE 3–4], but the model uses those probabilities as fixed mixture weights in the prior: \(\beta_p \sim \sum_{j=1}^{11}\omega_{pj}N(\mu_j,\tau_j^2)\) [PAGE 4]. That does not fully propagate clustering uncertainty into the posterior for \(\mu_j\); it conditions on the Fuzzy K-means membership probabilities. A stricter model would treat the membership vector as latent and update it jointly or via measurement-error propagation. This is a gray-zone audit point, not a fatal flaw, because the mixture prior still allows partial membership and shrinkage.

The second gray zone is the likelihood. The paper states “Model (2) implies that yi’s are independent of each other and follow a normal distribution with constant variance, conditional on Xi and Zi” [PAGE 4]. But \(y_i\) is points per 100 possessions for a stint with a variable number of possessions. A stint with very few possessions can have a mechanically noisy \(y_i\), while a long stint has a more stable \(y_i\). Equal-variance treatment gives short and long stints the same conditional variance. That is a real heteroskedasticity risk. A possession-weighted or binomial/negative-binomial stint model would be a stronger counterfactual. The paper’s response definition also creates a boundary issue: “points scored per 100 possessions” is a rate, so the error variance in squared points per 100 possessions is not guaranteed constant across possessions.

The third gray zone is identifiability. The player matrix and team matrix are built from lineup indicators with row sums tied to \(+1\) and \(-1\). With an intercept and both player and team effects, there is exact collinearity unless priors regularize the system. The paper’s priors do that: \(\beta_0 \sim N(0,1000000)\), \(\gamma_t \sim N(0,5)\), and group-level \(\mu_j \sim N(0,100)\), \(\tau_j^2 \sim IG(0.01,0.01)\), \(\sigma^2 \sim IG(0.01,0.01)\) [PAGE 4]. The Bayesian posterior is proper under those priors, but the breakdown regime is clear: if priors are flattened or if a position group has very few players in an iteration, the conditional posterior for \(\mu_j\) is dominated by the hyperprior. The Gibbs sampler draws latent membership \(z_p\) and then uses conditional posteriors for \(\mu_j\) and \(\tau_j^2\) [PAGE 18, Appendix A]. For a group with \(k=0\) in an iteration, Equation (7) collapses toward the prior \(N(0,100)\), which is why small positional groups such as Post-up Bigs need cautious interpretation. The paper itself reports that “the number of Post-up Bigs has reduced from 56 players during the 2015–16 season to a mere 18 players in the 2021–22 season” [PAGE 5]. That small-count regime is a breakdown risk for variance estimates.

The fourth gray zone is the defense taxonomy. Offensive positions come from play-type clustering, but defensive positions come from the official position map: “We rely on these official player positions to group players into one of the three defensive positions, Big, Forward, and Guard.” [PAGE 2]. The paper justifies this physically: “Big players are often interior defenders, primarily tasked with protecting the paint area, while Guards and Forwards are generally exterior defenders.” [PAGE 3]. That is coherent, but it means offensive and defensive “positions” are not the same kind of construct. The offensive side is data-driven and probabilistic; the defensive side is administrative and mostly deterministic. Any comparison across the two sides must respect that asymmetry.

The fifth gray zone is temporal and contextual drift. The model is run “for each of the six NBA seasons separately” [PAGE 6], and the authors omit 2019–20 because it “was interrupted by the COVID-19 pandemic and had many games played at neutral sites” [PAGE 3]. That is defensible, but it means the 2020–21 estimates may contain a post-COVID composition effect; the garbage-time robustness check notes “almost 4 percent of possessions are classified as garbage time in the 2020–21 season, whereas only 3.4 to 3.7 percent of possessions are considered garbage time in the other seasons” [PAGE 13]. The paper’s main conclusions are robust to garbage-time filtering, but not to all possible contextual shocks.

The cross-validation result is the strongest predictive evidence: “Cross-validation results show both 3-position and 8-position models outperform the RAPM models in all six seasons.” [PAGE 11]. The 8-position model “produces the best RMSE among all models across six seasons” [PAGE 11]. Still, RMSE differences in Table 8 are small in absolute terms on the points-per-100-possessions scale, so the practical edge should be stated as directional rather than massive. The paper’s own limitations are relevant: “the response variable, points scored per 100 possessions, employed in this study does not reflect the importance of points in a game” [PAGE 16], and “the clustering results for offensive positions are subjective as the Fuzzy K-means algorithm is a heuristic method” [PAGE 16]. Those limitations bound the claims: this is a principled positional-average model, not a definitive causal player-value estimator.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are from the source or are direct algebraic restatements of the source. No synthetic ratio is introduced.

**1. Stint-level linear model.** The paper specifies:

\[
y=\beta_0+X\beta+Z\gamma+e
\]

where \(y\) is the stint response, \(X\) is “an m by 2n player matrix filled with values of 1, −1, and 0” [PAGE 4], \(Z\) is “an m by 2k team matrix filled with 1, −1, and 0” [PAGE 4], \(\beta\) is the \(2n\)-vector of player effects, and \(\gamma\) is the \(2k\)-vector of team effects. Units: \(y_i\) is “points scored per 100 possessions by offensive teams in stints” [PAGE 4]; therefore \(\beta_0\), \(\beta_p\), and \(\gamma_t\) are on a points-per-100-possessions scale. The error variance \(\sigma^2\) has units of \((\text{points per 100 possessions})^2\).

**2. Likelihood.** The source states:

\[
y_i\mid X_i,Z_i \sim N(\beta_0+X_i\beta+Z_i\gamma,\ \sigma^2)
\]

and adds: “Model (2) implies that yi’s are independent of each other and follow a normal distribution with constant variance, conditional on Xi and Zi” [PAGE 4]. A direct expansion for a given stint is:

\[
E[y_i\mid X_i,Z_i]
=
\beta_0
+
\sum_{p\in \text{offense}(i)}\beta_p
-
\sum_{p\in \text{defense}(i)}\beta_p
+
\sum_{t\in \text{offense}(i)}\gamma_t
-
\sum_{t\in \text{defense}(i)}\gamma_t .
\]

This is not a new metric; it is the row-wise meaning of Equation (1).

**3. Player prior.** The paper writes:

\[
\beta_p \sim \sum_{j=1}^{11}\omega_{pj}N(\mu_j,\tau_j^2),
\quad \text{where player }p\text{ is not low usage}
\]

\[
\beta_{\text{low}}\sim N(0,5),
\quad \text{where player low is low usage}
\]

\[
\beta_0\sim N(0,1000000)
\]

[PAGE 4]. The notation \(\omega_{pj}\) is “player p’s probability of belonging to position j, which is estimated from the Fuzzy K-means algorithm for offensive positions” [PAGE 4]. The \(j=1,\dots,11\) indexing includes “eight offensive and three defensive positions” [PAGE 4]. Units: \(\mu_j\) and \(\beta_p\) are points per 100 possessions; \(\tau_j^2\) is squared points per 100 possessions.

**4. Team and hyperpriors.** The source gives:

\[
\gamma_t\sim N(0,5)
\]

\[
\mu_j\sim N(0,100)
\]

\[
\tau_j^2\sim IG(0.01,0.01)
\]

\[
\sigma^2\sim IG(0.01,0.01)
\]

[PAGE 4]. The inverse-gamma scale parameters are not on a plus-minus points scale directly; they are variance-scale hyperparameters. The practical implication is that \(\tau_j^2\) controls how much individual player effects shrink toward the positional mean \(\mu_j\). If \(\tau_j^2\to 0\), every player in group \(j\) is pulled nearly to \(\mu_j\). If \(\tau_j^2\to\infty\), the group mean is weakly informative and individual effects dominate.

**5. Gibbs conditional posteriors.** Appendix A states that the sampler uses “30,000 iterations and a burn-in period of 1000” [PAGE 18]. The latent membership draw is:

\[
z_p \propto \text{Multinomial}(\omega_{p1},\omega_{p2},\dots,\omega_{p11})
\]

and the conditional posteriors are:

\[
p(\mu_j\mid z_p=j\cdot)
\propto
N\!\left(
\left(k+\frac{\tau_j^2}{100}\right)^{-1}
\sum \beta_{pj},
\ 
\tau_j^2
\left(k+\frac{\tau_j^2}{100}\right)^{-1}
\right)
\]

\[
p(\tau_j^2\mid z_p=j\cdot)
\propto
IG\!\left(
\frac{k}{2}+0.01,\ 
0.5\sum(\beta_{pj}-\mu_j)^2+0.01
\right)
\]

[PAGE 18, Appendix A]. Here \(k\) is “the number of players that belong to group j in an iteration” [PAGE 18]. Breakdown regime: when \(k\) is small, the prior terms \(0.01\) and \(100\) dominate; when \(k=0\), the \(\mu_j\) conditional reduces toward \(N(0,100)\). That is the exact small-group singularity-like behavior. The paper’s own small-group example is Post-up Bigs, which fall to 18 players in 2021–22 [PAGE 5], so posterior variance for that group is especially sensitive to the inverse-gamma hyperprior.

**6. Cross-validation operator.** The paper applies “5-fold cross-validation to single season data” and evaluates “the Root Mean Square Error (RMSE)” [PAGE 4]. RMSE is on the response scale, i.e., points per 100 possessions. The result is: “both 3-position and 8-position models outperform the RAPM models in all six seasons” [PAGE 11], and “the 8-position model produces the best RMSE among all models across six seasons” [PAGE 11]. The exact numeric RMSE values are in Table 8 [PAGE 11]. Because the response is a rate, the RMSE is a rate-scale error, not a win-probability error.

**7. Singularity and identifiability conditions.** The model has built-in linear dependence because each stint row has five offensive players, five defensive players, one offensive team, and one defensive team. With an intercept, the raw design has rank deficiency. The proper priors on \(\beta_0\), \(\gamma_t\), and the mixture prior on \(\beta_p\) resolve the posterior. If those priors are removed or made improper, the posterior is not identified. The model also breaks down inferentially if a position group has near-zero membership mass, if \(\sigma^2\) is forced near zero, or if the Fuzzy K-means weights are treated as known with certainty. The paper’s limitation section acknowledges the rate-scale issue: “the response variable, points scored per 100 possessions, employed in this study does not reflect the importance of points in a game” [PAGE 16], and it suggests “using win probability as the response variable” in future work [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in the plus-minus lineage that runs from Rosenbaum’s adjusted plus-minus through Sill’s regularized adjusted plus-minus, Engelmann’s plus-minus work, ESPN’s real plus-minus, and Sabin’s hierarchical plus-minus for American football. The source explicitly frames this lineage: “While numerous plus-minus models have emerged since the introduction of adjusted plus-minus in 2004, most of these metrics focus on evaluating player performance at the individual level.” [PAGE 1]. The paper’s retrocausal move is to push the plus-minus framework from the individual level to the position level, then use a hierarchical Bayesian structure to borrow strength across players within positions. It also borrows from Bayesian sports hierarchies such as Jensen et al. (2009) on baseball hitting and Santos-Fernandez et al. (2019) on Bayesian sports review, and from Sabin (2021), whose NFL model used position-linked priors. The paper says its “analysis of positional plus-minus also resembles Sabin’s (2021) study that uses similar Hierarchical Bayesian models to estimate player plus-minus in the NFL.” [PAGE 12].

The clustering genealogy is separate: Fuzzy K-means comes from Bezdek et al. (1984), and the initialization uses K-means++ from Arthur and Vassilvitskii (2007). The paper’s use of Synergy play types is an operational genealogy: “Synergy Sports categorizes every offensive possession into one of the 11 play types” [PAGE 2]. The eight offensive roles are named from centroids in Table 5 [PAGE 5]: Skilled Big, Versatile Scorer, Secondary Attacker, Pick and Roll Attacker, Roll and Cut Big, Movement Shooter, Post-up Big, and Spot-up Shooter. The three defensive roles are Big, Forward, and Guard from the official position map [PAGE 3].

Multi-week traps in this lineage are real. First, positional taxonomies drift. The paper reports that “the number of Post-up Bigs has reduced from 56 players during the 2015–16 season to a mere 18 players in the 2021–22 season,” while “Skilled Bigs … have increased from 44 in 2015–16 to 65 in 2021–22” [PAGE 5]. A model estimated on one season’s cluster structure may not transfer cleanly to another season. Second, the 2019–20 season is omitted because it “was interrupted by the COVID-19 pandemic and had many games played at neutral sites” [PAGE 3]. That is a multi-week trap for anyone who tries to splice the estimates across an interrupted calendar. Third, garbage time matters: the paper filters it and finds “almost 4 percent of possessions are classified as garbage time in the 2020–21 season, whereas only 3.4 to 3.7 percent of possessions are considered garbage time in the other seasons” [PAGE 13]. Fourth, the cross-validation advantage of the 8-position model is consistent but not enormous; Table 8’s RMSE values are close across models, so a multi-week analyst should not overstate the edge. Fifth, the paper’s own caution is that “the clustering results for offensive positions are subjective as the Fuzzy K-means algorithm is a heuristic method” [PAGE 16]. The genealogy therefore supports the method as a structured positional-average estimator, not as a final causal ranking device.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem here is that a team analyst, coach, or front-office reader will naturally convert posterior positional means into a simple hierarchy: “Versatile Scorers are the best offensive group; Bigs are the best defensive group; Guards are the weakest defenders.” The paper does support those directional claims: “Versatile Scorers consistently outperform the other positions in terms of offensive plus-minus” [PAGE 6]; “Bigs’ average defensive plus-minus consistently ranks the highest among the position groups” [PAGE 8]; “Guards, limited by their size, offer the least defensive value to teams in Figure 4” [PAGE 12]. But the crisis habit is to forget the uncertainty layer. The paper repeatedly uses 80% credible intervals and posterior differences, e.g., “Most intervals locate well above zero, providing strong evidence that Bigs create more defensive value than the others in the NBA.” [PAGE 8]. The counter-trap is to read the posterior mean as a point estimate without the interval, and to read the variance estimates as if they were quality ratings. They are not; they describe dispersion within the position group. The paper says “Post-up Bigs and Versatile Scorers display notably higher variances of their offensive plus-minus relative to the other positions” [PAGE 8], which means those groups are heterogeneous, not necessarily better or worse on average.

Another recursive trap is position-label essentialism. The paper’s offensive roles are play-type clusters, not traditional positions. The analyst’s mind may silently map “Versatile Scorer” back to “star ball-handler” and then overgeneralize. The paper itself explains the mechanism: Versatile Scorers “primarily rely on isolation, transition, and pick-and-roll actions to score points” and are “likely to be the ball-dominant players who control the ball most of the time on the court.” [PAGE 12]. That is a role description, not a fixed physical archetype. The counter-trap is to ask whether a player’s Fuzzy membership probability is high or diffuse. The appendices show many players with position probabilities well below 100%, e.g., some top-five players have position probabilities in the 20–50% range [PAGE 17–24, Tables 10–15]. A player with 27% membership in a group is not the same as a player with 99% membership.

The “clock” dimension is temporal. The paper’s main trend claim is that “the gaps in offensive plus-minus between the eight offensive positions have decreased over the years” [PAGE 15], with Roll and Cut Bigs improving. A crisis habit is to treat that narrowing as permanent or as a causal law. The counter-trap is to inspect season-by-season posterior means in Table 6 [PAGE 6] and variance estimates in Table 7 [PAGE 6]. The paper also shows that the trend is not monotonic for every group; for example, Versatile Scorers remain highest but their estimated mean fluctuates by season. The clock also includes the omitted 2019–20 season and the COVID-affected 2020–21 season. A disciplined reader should say: the rank order is more stable than the exact gaps; the gaps are posterior summaries over a specific six-season window, not a universal clock.

Finally, the recursive theory-of-mind includes what the analyst thinks the model is doing. The model is not estimating causal “value” in a win-probability sense. The paper explicitly limits the response: points per 100 possessions “does not reflect the importance of points in a game” [PAGE 16]. A coach under time pressure may regress to the habit of treating plus-minus as a win-probability metric. The counter-trap is to use the paper’s own suggested future direction: “regressing the change in win probability over stints may better estimate positional contributions to team success” [PAGE 16]. The clock is the game state; the current model treats all points equally, so it is a rate model, not a leverage model.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical layer is not a side issue in this paper; it is the reason the defensive position map is plausible. The source says “Big players are often interior defenders, primarily tasked with protecting the paint area, while Guards and Forwards are generally exterior defenders.” [PAGE 3]. It later adds: “Bigs are not only responsible for defending opposing Bigs but also play a crucial role in preventing opponents from scoring in the paint area.” [PAGE 12]. That is a biomechanical and spatial veto proof for the observed Big defensive advantage: interior size, verticality, rebounding position, and paint protection are physically distinct from perimeter defense. The model’s finding that “Bigs’ average defensive plus-minus consistently ranks the highest” [PAGE 8] is consistent with that physical mechanism. The guard finding is also physically framed: “Guards, limited by their size, offer the least defensive value to teams in Figure 4.” [PAGE 12].

But the veto adjudication must be precise: the model does not include height, wingspan, vertical leap, foul rate, minutes load, injury status, or scheme. Those are latent biomechanical variables. If a Big’s defensive plus-minus is driven by a team’s drop coverage, rim-protecting scheme, or weak opponent shooting, the positional average may still be valid as an average, but the individual attribution is not biomechanically identified. The paper’s variance result is a useful guardrail: “despite Guards having the lowest defensive plus-minus, they exhibit the highest variability in defensive performance among the three defensive positions.” [PAGE 12]. That means the Guard average is not a veto against exceptional individual defenders; the paper even says “there may exist some exceptional defenders or some extremely poor defenders in the Guard position.” [PAGE 12].

Weather is not a direct NBA variable because the games are indoors. The nearest cross-layer environmental veto is schedule and venue context. The paper omits 2019–20 because it “was interrupted by the COVID-19 pandemic and had many games played at neutral sites” [PAGE 3]. That is an environmental-context veto: neutral sites and disrupted travel can change lineup usage, fatigue, and home-environment effects. The garbage-time robustness check is another contextual layer: “we refine our play-by-play data set by filtering out garbage time in which teams do not place their best possible players on the court.” [PAGE 13]. The result is that removing garbage time “does not significantly alter our prior findings” except for 2020–21 [PAGE 13]. That supports the main positional results but does not eliminate all contextual confounds.

The cross-layer veto rule should be: a positional claim is vetoed if it depends on a physical mechanism that the model cannot observe and the observed pattern reverses under a reasonable biomechanical or contextual control. For example, if Big defensive superiority disappeared after controlling for opponent shot location, foul trouble, and lineup role, the physical interpretation would be weakened. The paper does not run that control, so the correct adjudication is “supported but not causally proven.” The same applies to the offensive claim: Versatile Scorers are “likely to be the ball-dominant players who control the ball most of the time on the court” [PAGE 12], but ball dominance is a role and usage construct, not a purely physical one. The model’s physical layer is strongest for the defensive Big result and weaker for the offensive role result.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1: Clustering-uncertainty propagation veto.**  
Counterfactual: replace the fixed Fuzzy K-means weights \(\omega_{pj}\) in \(\beta_p\sim\sum_j\omega_{pj}N(\mu_j,\tau_j^2)\) with a joint model that treats offensive membership as latent and updates it from the stint likelihood, or with a measurement-error model that marginalizes over membership uncertainty. Verifiable prediction: the posterior means for the eight offensive positions should move toward one another, and the 80% credible intervals for the differences between Versatile Scorers and the next-best offensive group should widen. The rank order may survive because Versatile Scorers are consistently highest in the source: “Versatile Scorers consistently outperform the other positions in terms of offensive plus-minus” [PAGE 6]. Veto condition: if the joint-uncertainty model makes the Versatile Scorer advantage’s 80% interval include zero in a majority of seasons, the paper’s strongest offensive positional claim would be weakened. The source’s own statement that the probabilities “represent the uncertainty associated with Fuzzy K-means clustering results” [PAGE 3–4] makes this a fair test.

**Veto 2: Possession-weighted or count-likelihood veto.**  
Counterfactual: replace the equal-variance normal likelihood \(y_i\mid X_i,Z_i\sim N(\beta_0+X_i\beta+Z_i\gamma,\sigma^2)\) [PAGE 4] with a possession-weighted regression or a count model for points scored in each stint, so that a 2-possession stint and a 20-possession stint are not given identical conditional variance. Verifiable prediction: positional means should shift most for groups with high within-group heterogeneity, especially Post-up Bigs and Versatile Scorers, whose offensive plus-minus variances are “notably higher” [PAGE 8]. The Big defensive advantage should be relatively robust because it is large and consistent: “Most intervals locate well above zero, providing strong evidence that Bigs create more defensive value than the others in the NBA.” [PAGE 8]. Veto condition: if the possession-weighted model reverses the Big defensive rank or eliminates the 8-position cross-validation advantage over the 3-position model, the paper’s predictive claim would be vetoed. The source’s cross-validation result gives a clear benchmark: “the 8-position model produces the best RMSE among all models across six seasons” [PAGE 11].

**Veto 3: Context-and-small-group sensitivity veto.**  
Counterfactual: re-estimate with (a) a stronger garbage-time filter applied consistently across all six seasons, (b) an explicit 2020–21 COVID-context indicator, and (c) a sensitivity sweep on the inverse-gamma hyperprior for \(\tau_j^2\) and the low-usage prior \(\beta_{\text{low}}\sim N(0,5)\). Verifiable prediction: the “gaps in positional offensive plus-minus have diminished over the years” [PAGE 8] should attenuate if 2020–21 is down-weighted, because the source notes that season has “almost 4 percent of possessions … classified as garbage time” versus “3.4 to 3.7 percent” in other seasons [PAGE 13]. The Big defensive result should persist because it is supported by both the mean estimates and the physical paint-protection mechanism [PAGE 3, PAGE 12]. Veto condition: if the hyperprior sweep moves the Post-up Big variance estimate by an order of magnitude or changes the top-five player rankings in Appendix C, the small-group inference would be vetoed as hyperprior-driven. The paper’s own small-group warning is visible in Table 2: Post-up Bigs fall to 18 players in 2021–22 [PAGE 3, PAGE 5]. Prediction: the rank order of the three broad defensive groups is more robust than the eight-way offensive gap trend, and the 8-position cross-validation edge is likely to survive but shrink under stricter contextual controls.
</RLVR_COUNTERFACTUAL_VETOES>
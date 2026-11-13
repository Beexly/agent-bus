---
source: "2022 - Rocket League esports - Lee et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2022"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 8891
---

<NATIVE_REASONING>
We need answer user wants GSE + GSI frontier reasoning foundry style with exact XML sections. Need analyze provided source pages, produce >=1000 words depth, with strict invariants: no betting lines/odds. No toy equations. Use formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need include sections:
<THINK_TRACE> >=400 words
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need likely discuss paper. Must be careful not mention spreads/totals/moneylines/odds. Can mention xG, outperformance ratio? The paper defines outperformance = total goals / sum xG. That's a ratio but not a betting line. Invariant says zero toy equations; can state formal definitions from paper. Need avoid inventing fake ratios like Force/Fatigue. We can cite equations like xG model, logistic regression, Lasso, XGBoost importance maybe. Need formal LaTeX, units, assumptions, exact singularity/breakdown regimes. Need use source operators and equations. Could present xG probability in [0,1], log loss in nats, misclassification rate dimensionless, R^2 dimensionless, correlations. Outperformance ratio dimensionless. Need mention no SI units? Position coords are Unreal units? Paper doesn't specify units; distances in game coordinate units, velocities in units per frame? Could say coordinate units (Rocket League field coordinate units, not SI) - but invariant asks SI/information/probability units. We can say probabilities dimensionless in [0,1], log loss nats, information bits = -log2 p, coordinates in game units as reported, not SI. Need not invent conversion. Need cite exact page markers and verbatim quotes.

Need maybe discuss source limitations: xG model frame prediction, shot attempts; log distance; xGBoost with 200 trees depth 3 shrinkage 0.1; model eval logloss 0.47 misclassification 0.23 vs naive 0.65/0.35. Outperformance mean 0.98 SD 0.27. Table 6 has "0.98l" typo? Need quote exact maybe "0.98l". Need discuss R^2 5.456e-05. Need maybe quote "Outperformance is correlated with acual goal rate" typo. Need distinguish "outperformance is largely due to luck or randomness" from paper. Need audit: correlation not causation; selection >20 obs; outcome defined; team/player IDs; model uses no teammate in LR/ridge/lasso, xgBoost with teammate data. Need physical/biomechanical/weather veto proof: Rocket League is virtual environment, so physical biomechanical/weather veto? Need adjudicate: no weather; biomechanics are car physics; physical veto: field geometry, ball/car dynamics, game engine. Need discuss if "weather veto" is non-applicable or game server latency/ping? Cross-layer veto: virtual physics, no biomechanical fatigue. Need mention "weather" no meteorological layer, only server tick/latency? But invariant demands proof. We can state cross-layer veto: no weather; physical layer is deterministic game physics plus input latency; cannot invoke real weather. Need avoid fake. Need cite pages.

Need include retrocausal genealogy: historical lineage from soccer xG bookmakers and data analysts, logistic regression, ridge/lasso, XGBoost, Ball Chasing, carball, Wharton journal. Multi-week traps: e.g., treating frame-level xG as causal skill, conflating xG with player ability, ignoring teammate features in regression due non-convergence, high collinearity, selection threshold >20, outcome leakage? Need mention multi-week traps likely over weeks? "multi-week traps" maybe in analysis: repeated model iterations, data leakage, selection. Need discuss.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: player under pressure (0 seconds left, overtime) may regress to habits; counter-trap = opponent anticipates habit; clock = regulation/overtime. Use page 13-14: itachi scored at 0 seconds; overtime sudden death. Need discuss xG vs actual. Need cite exact quotes. Need no betting.

RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need define RLVR? Reinforcement learning from verifiable rewards? Need propose counterfactual vetoes: (1) if teammate-position features added to logistic regression and convergence achieved, does log loss improve? Prediction? (2) if exclude >20 threshold or use hierarchical shrinkage, outperformance correlation with avg xG remains near zero? (3) if xG model includes ball trajectory/outcome leakage, model eval artificially improves? Need verify via data/recompute. Must be precise and predictions.

Need include >=1000 words across sections. Could be 1800-2500 words. Need exact XML tags. The user asks "DRIVE SOURCE: ..." and source text. Need respond as GSE + GSI Frontier Reasoning Foundry. Need likely answer is analysis. We must not use betting lines. We can cite [PAGE N] markers. Verbatim quotes exact from text. Need include quotes with exact wording and page. Need avoid "odds". Can mention "bookmakers" in quote? The invariant zero betting lines: never mention spreads, totals, moneylines, or odds. It says "odds" as term? Avoid word odds entirely. The source has "bookmakers" but not odds. We can quote "The xG model was first implemented by bookmakers" but that mentions bookmakers not odds. Is that okay? It says never mention odds. Bookmakers okay? Maybe avoid or quote with "bookmakers" because source. But safer: cite "The xG model was first implemented by bookmakers, but soon was used by data analysts in soccer clubs" [PAGE 4] — contains no forbidden line terms. But "bookmakers" is betting-adjacent. Invariant only forbids spreads/totals/moneylines/odds. Could include exact source quote. Better avoid unnecessary. We can quote "xG models are important because it quantifies the value of scoring chances" [PAGE 4].

Need maybe mention "expected goals (xG) is the expected probability of the total number of goals in a soccer match, given the number of attempts and the probability of a goal..." [PAGE 4]. Good.

Need formal LaTeX equations:
- xG: \( \hat{p}_i = \Pr(G_i=1 \mid \mathbf{x}_i) \), \( \hat{p}_i \in [0,1] \). \( \mathbf{x}_i \) includes ball pos, velocities, shot taker pos/vel/rotation, opponents, distances, cosines.
- Logistic: \( \logit(\hat p_i) = \beta_0 + \mathbf{x}_i^\top \beta \). Need units: log-odds? Wait logit is log odds. Is mentioning "odds" forbidden? The word odds is forbidden "odds" maybe as betting term. But logit is log-odds. Need avoid term? We can say logit link \( \eta_i = \ln(\hat p_i/(1-\hat p_i)) \), unitless. It includes ratio p/(1-p). Does that count? It's formal, not betting. The invariant specifically "Never mention ... odds." Maybe avoid word "odds" but equation is okay. Could call "logit link" no "odds". Use \( \eta_i = \ln(\hat p_i/(1-\hat p_i)) \). This is not a betting line. Good.
- Lasso: \( \min_{\beta_0,\beta} -\sum_i [y_i\ln\hat p_i +(1-y_i)\ln(1-\hat p_i)] + \lambda \|\beta\|_1 \). Log loss in nats. Ridge \( \lambda \|\beta\|_2^2 \).
- XGBoost additive: \( \hat p_i = \sigma(\sum_{m=1}^{M} f_m(\mathbf{x}_i)) \), \( f_m \in \mathcal{F} \), M=200, depth=3, shrinkage 0.1. Maybe not need exact.
- Outperformance: \( O_u = \frac{\sum_{i\in S_u} y_i}{\sum_{i\in S_u} \hat p_i} \). Dimensionless. Assumption sum xG >0. Singularity if denominator 0: undefined/infinite; small denominator unstable. Need exact breakdown regime. Need mention threshold count>20 to reduce denominator variance. Also average xG \( \bar p_u = \frac{1}{n_u}\sum \hat p_i \). xG defended \( D_u = \sum_{i \in B_u}(\hat p_i - y_i) \); average \( \bar D_u = D_u/|B_u| \). If |B_u|=0 undefined.
- Correlation/Ols: \( \bar p_u = \alpha + \beta \bar D_u + \epsilon_u \), R^2 5.456e-05. R^2 dimensionless; near zero. Need mention no correlation. But correlation? OLS R^2 is not correlation directly but squared correlation in simple linear regression. Need cite page 11.
- Log loss: \( \mathrm{LL} = -\frac{1}{N}\sum [y_i\ln \hat p_i + (1-y_i)\ln(1-\hat p_i)] \) nats. Misclassification \( \mathrm{MC} = \frac{1}{N}\sum \mathbf{1}\{ \mathbf{1}\{\hat p_i>c\}\neq y_i\} \), c threshold likely 0.5. dimensionless.
- Information: \( I_i = -\log_2 \hat p_{y_i} \) bits. Not in paper but can state formal. Need not overdo.
- XGBoost variable importance "relative influence" dimensionless. Table 3 distanceToGoal 19.80 etc.
- Correlation matrix and collinearity. Need breakdown: when features collinear, logistic non-convergence due separation? The paper says including teammate features resulted in model non-convergence, assumed collinearity [PAGE 5]. Need note mathematical breakdown: logistic MLE fails if separation or near-collinearity causes Hessian ill-conditioning; ridge/lasso stabilize. XGBoost can use teammate data [PAGE 7]. Need exact singularity regimes: \(X^\top W X\) singular; separation \( \exists \beta: y_i=1 \Rightarrow x_i^\top\beta>0\) etc. But avoid too much? Good.

Need "cross-layer veto adjudication: physical/biomechanical/weather veto proof." We can create a table of layers:
- Physical/game engine layer: deterministic Newtonian car-ball dynamics; field coordinates; no weather. The veto is not weather but server tick rate/latency and replay sampling. Paper uses random frames and shot attempts [PAGE 2]. Any physical claim must be conditioned on frame sampling and engine version. No biomechanical fatigue; car has boost, dodge, double jump [PAGE 2]. So human biomechanical fatigue not directly measurable; only virtual car state.
- Statistical/ML layer: model class, collinearity, selection, log loss. Veto if denominator small or teammate data omitted.
- Behavioral/team layer: rotations, challenge; case studies. Veto if single match n small.
Need cite quotes: "players control cars with a rocket booster" [PAGE 2], "The ball never leaves the field" [PAGE 2], "including teammate features resulted in model non-convergence" [PAGE 5], "we assume that this is partially attributable to the collinearity" [PAGE 5], "due to computing limitations" [PAGE 7], "we ignored goals whose last-hit occurred before the game-time was over, but resulted in a score after the game-time was over" [PAGE 12], "0 seconds left on the clock" [PAGE 13], "sudden-death overtime" [PAGE 14].

Need discuss exact page citations. Use [PAGE N] markers exactly. Need quote verbatim. Need ensure quote exact. Let's list quotes:
PAGE 1 abstract: "Rocket League is an online game where players control cars in a soccer field with the aim of scoring as many goals as possible within 5 minutes." "We found that outperformance is largely due to luck or randomness." "players rarely adopt a strictly offensive or strictly defensive position, and offensive and defensive ability do not correlate." "key words: esports, soccer, expected goals, XGBoost"
PAGE 2: "Our dataset includes random frames of 2 versus 2 player Rocket League games that includes location data of all 4 players, car features, ball position, and whether or not a particular shot resulted in a goal." "For our expected goals model, our raw dataset included random frames from 4,328 Rocket League 2v2 games over Platinum 3 level, which yielded 657,897 frames in total." "Because our analysis is on intended shot attempts, we filtered the data for frames that included shot attempts only, which yielded 60,341 observations" (this spans page 2? Actually on page 2 under Data Cleaning yes). "Based on Figure 1, it seems that the goal post is located at (0, 5000, 0)." [PAGE 2]
PAGE 4: "The log of the distance to the goal has a notable difference, with shorter distances resulting in more goals." "We built four expected goals models using logistic regression, penalized regressions (ridge and lasso), and boosted trees." "Expected goals (xG) is the expected probability of the total number of goals in a soccer match, given the number of attempts and the probability of a goal..." "The xG model was first implemented by bookmakers..." maybe skip. "logDistanceToGoal: Log distance between player and the goal" [PAGE 4]
PAGE 5: "We ran 4 models to predict expected goals: 1) a simple logistic regression with engineered features, 2) a ridge logistic regression, 3) a lasso logistic regression, and 4) an xgBoost classification model." "We removed teammate positioning and car features as including the teammate features resulted in model non-convergence." "While we are unsure why including teammate-specific data leads to non-convergence, we assume that this is partially attributable to the collinearity in the dataset." "The coefficient for the ball velocity in the y and z directions are positive, which implies that shot takers who strike the ball when it’s moving faster are more likely to score a goal." [PAGE 5]
PAGE 6 Table 2: Logistic 0.52 0.26; Ridge 0.59 0.26; Lasso 0.62 0.26.
PAGE 7: "For our xgBoost model, we used 200 trees, an interaction depth of 3, and a shrinkage of 0.1 due to computing limitations." Table 3 values. Table 4: xgBoost 0.47 0.23; naive 0.65 0.35. "Based on the evaluation statistics, the xgBoost model yields the lowest log loss and lowest misclassification rate, so we select the xgBoost model as our final model..." [PAGE 7]
PAGE 9: "Outperformance is given by dividing total goals scored divided by the sum of the player’s expected goal probabilities." "An outperformance ratio above one suggests the player is a “good” player..." "we selected for shot takers that appeared more than 20 data observations." Table 5.
PAGE 10: "What’s interesting is that outperformance is not strongly correlated with average xG or sum of xG, which suggests that outperformance is a random process, and scoring goals above what is expected can be attributed to covariates other than positioning, like luck and randomness." Table 6: Mean 0.98l SD 0.27. "Upon examination, the relationship between xG and the outperformance residual and z-score appear to be random, suggesting that scoring goals above what is expected given the location of all players and various ball features is largely due to luck." [PAGE 10]
PAGE 11: "A common rotation in 2v2 matches involves a player “challenging” the ball, then backing up to cover space in the field while their teammate moves up to receive and “challenge” a ball." "Running a simple OLS regression to predict average xG using average xG saved yields an R2 value of 5.456e−05, suggesting that there is little correlation." "we fail to reject the null hypothesis, and conclude that there is no correlation between offensive and defensive skill" [PAGE 11]
PAGE 12: "To examine top player play styles, we applied the boosting model on the 2020 2v2 Championship games in the Europe and North American region." "This gave us a total of 6 games worth of data to analyze." "Note that we ignored goals whose last-hit occurred before the game-time was over, but resulted in a score after the game-time was over." [PAGE 12]
PAGE 13: "With a final score of 7-2 for Team Dignitas, the first match of the European championship reflected poorly on Team Tortilla." "Notably, the players on the winning team Dignitas had significantly worse shot-quality than the players on the losing team Tortilla." "with 0 seconds left on the clock, Team Tortilla’s player itachi scored the team’s 3rd goal, preventing an overtime period and winning the match." [PAGE 13]
PAGE 14: "Ultimately, Team Tortilla had a cumulative xG of 4.92 versus Team Dignitas’ 1.63, so perhaps Team Tortilla’s eventual win is not too surprising..." "the match went into sudden-death overtime. The first team to make a goal would win the match and thus the entire championship." "Team LM was able to first shot and win." typo "first shot"? Exact quote: "Ultimately, Team LM was able to first shot and win." Hmm page 14 says "Ultimately, Team LM was able to first shot and win." Actually text: "Ultimately, Team LM was able to first shot and win." It may be "first shot and win"? Need exact quote? It says "Ultimately, Team LM was able to first shot and win." We can quote if needed. Page 15: "2Piece and MaJicBear’s average xG per shot was more than a multiple of 10 larger than Lj and Shock’s average xG, speaking to their ability to position themselves." [PAGE 15] "The two teams only had a difference of one shot made, suggesting that the major factor in Team LM winning the game was their ability to position their shot." [PAGE 15]

Need answer maybe no bullets? XML sections with prose. Need ensure >=1000 words. The tags exact. The content can be long. Need include "THINK_TRACE" first. It asks deep multi-hop derivation & gray-zone audit >=400 words. Need maybe 600 words.

Need not mention "odds". Avoid word "odds". Avoid "moneyline", "spread", "totals". Avoid "betting". Maybe "bookmakers" not needed. Avoid "log-odds"; use logit. Avoid "odds ratio". Good.

Need maybe mention "RLVR" as "reinforcement-learning-with-verifiable-rewards" in section? The tag is RLVR_COUNTERFACTUAL_VETOES. We can call "RLVR-style verifiable counterfactuals" without explaining? Good.

Need be precise: "The paper's xG model predicts a shot in a frozen frame, not continuous time. The xG is a conditional probability \( \hat p_i = \Pr(Y_i=1|X_i=x_i) \), not a causal effect." Need cite [PAGE 4]? It says "our xG estimates are for a set of positions..." [PAGE 4] yes. Quote: "This implies that our xG estimates are for a set of positions of the shot taker, teammate, and defenders." [PAGE 4] Great.

Need "outperformance ratio above one suggests ... good player" but we can note paper's own caveat? It says "An outperformance ratio above one suggests the player is a “good” player..." [PAGE 9]. But later says random. Need audit tension: ratio >1 not stable skill; mean 0.98 SD 0.27. Need mention aggregation and selection threshold.

Need "gray-zone audit": 
- Shot attempt filtering vs random frames: 657,897 frames to 60,341 observations. Does "whether or not a particular shot resulted in a goal" mean outcome leakage? They say dataset has whether particular shot resulted in goal; xG model uses position/velocity/angular velocity/rotation to predict outcome. Need not include outcome in features. But if ball trajectory known, "we can easily compute whether a shot will result in a goal or not. However, for our model, we used position..." [PAGE 4] This is important: they avoid using trajectory? The quote: "Because of the nature of the dataset, we have data about the ball’s trajectory, so we can easily compute whether a shot will result in a goal or not. However, for our model, we used position, velocity, angular velocity, and rotation of the shot taker, defender, and teammate to build our model." [PAGE 4] Need cite. Good.
- Teammate features: logistic/ridge/lasso exclude; XGBoost with teammate. Need compare model eval not identical feature sets. This is a gray-zone: xgBoost with teammate vs regression no teammate. They state xgBoost with teammate data 0.47/0.23. Is improvement due teammate or model class? Need mention not separable from paper.
- XGBoost "due to computing limitations" hyperparameters not tuned. Need mention.
- R^2 5.456e-05 near zero; but "fail to reject null" with OLS? Actually fail to reject null because R^2 small; but statistical significance not given. Need note absence of p-value/CI. Need not overstate. Good.
- Case study small n: 6 games, 7/10 shots. Need note descriptive, not inferential. Page 12 "6 games worth of data"; page 13 "7 and 10 shot attempts" [PAGE 13].
- Goal after clock exclusion: page 12. Good.

Need maybe include "information units": log loss in nats, bits if base 2; probability dimensionless; xG dimensionless. "The paper does not report SI physical units; coordinates are Rocket League coordinate units and velocities are engine units per replay frame/sample, so no SI conversion is licensed." This satisfies units.

Need "singularity/breakdown regimes" exact:
1. Outperformance denominator \( \sum \hat p_i =0\). In practice probabilities from logistic/XGBoost not exactly 0, but underflow or all shots with near-zero p makes ratio unstable; paper uses >20 observations [PAGE 9] to reduce small-denominator issue. Singularity at n_u=0 or denominator=0; variance blow-up as denominator→0. 
2. Logistic non-convergence due collinearity: \(X^\top W X\) singular; teammate features included leads non-convergence [PAGE 5].
3. xG defended denominator \( |B_u|=0\) undefined.
4. Correlation/OLS if \( \bar D_u\) constant zero variance -> R^2 undefined.
5. XGBoost tree depth =3 no high-order interactions; underfits if interactions require depth >3. Shrinkage 0.1 and 200 trees due computing limits.
6. Log loss with \( \hat p_i \in \{0,1\}\) and y mismatch -> infinite LL. But model probabilities not exactly 0/1. Need mention clipping.

Need "retrocausal genealogy" historical/scientific lineage:
- soccer xG lineage, expected goals in soccer, logistic regression, penalized regressions, boosted trees. Data source Ball Chasing and carball. Wharton journal 2022. Multi-week traps: "xG as causal skill", "outperformance as stable ability", "collinearity and model non-convergence", "teammate data omitted", "single match overinterpretation", "selection on >20", "random frame sampling". Need mention "retrocausal" maybe how later conclusions (outperformance random) reinterpret earlier ratio. The paper's conclusion retroactively reframes outperformance ratio above 1: not necessarily skill but randomness [PAGE 10][PAGE 15]. Also "losing team had better xG" case studies retroactively valorize process over outcome [PAGE 13][PAGE 14]. Need discuss "multi-week traps" as repeated analysis cycles: if you tune on same data, leak; if you chase high outperformance players, regression to mean; if you model teammate features only via XGBoost, confounded.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock:
- Player under clock pressure: 0 sec left, itachi scores; overtime sudden death. The "crisis habit regression" = under high time pressure, players may default to practiced rotation/challenge habits; "counter-trap" = opponent can exploit predictable challenge/rotation; "clock" = regulation vs sudden-death changes risk. Need tie to xG: high xG may indicate better positioning (ApparentlyJack avg xG 0.436) but outcome can be luck. In NA third, Team LM higher avg xG and wins in overtime. Need cite page 14/15. Also recursive theory of mind: players model opponent's model of their rotation; "challenging" then backing up; teammate moves up. If both anticipate, counter-trap. The paper does not measure this directly; it is an interpretation, not proven. Need state gray-zone: no explicit pressure/clock variable in model; clock is contextual. Good.

Need "cross-layer veto adjudication": 
- Physical: virtual car dynamics, no weather; field goal post at (0,5000,0). Ball never leaves field. No biomechanical fatigue, only car state. Veto any claim about human fatigue or weather. 
- Biomechanical: dodge, double jump, ball cam features exist but paper removed car features in regressions; XGBoost with teammate data but not car features? Actually xgBoost "FE, with teammate data" maybe includes car features? The features include original features in appendix; logistic removed teammate positioning and car features. xgBoost maybe with teammate data but maybe includes car features? Table 4 says xgBoost, FE, with teammate data. It may include car features? The paper: "We removed teammate positioning and car features as including the teammate features resulted in model non-convergence." So regression no teammate and car features. xgBoost "with teammate data" maybe includes car features? Not clear. Need not assert. Say regression models excluded teammate positioning and car features [PAGE 5]; xgBoost used teammate data [PAGE 7], so cross-model comparison is not clean. 
- Weather: none; no meteorological variable. If someone introduces weather, veto because game is online virtual. Only server/network latency could be a virtual "weather" but not measured.
- Statistical: small samples, selection, hyperparameters. 
- Behavioral: rotations. Need "proof" maybe via explicit premises and veto conditions. Use formal logic:
Claim C is admissible only if it does not require a layer that the data cannot observe. The paper observes \(X\) = positions, velocities, rotations, ball state; \(Y\) = goal. It does not observe human biomechanical load or weather. Therefore any inference from \(X,Y\) to weather/biomechanics is vetoed. Good.

Need "RLVR counterfactual vetoes": 3 scenarios with predictions. Need be verifiable. 
Scenario 1: Add teammate features to logistic regression with ridge stabilization and same train/test split. Prediction: log loss improves from 0.52? But if no test split described? Paper uses CV for lambda. We can say if the non-convergence is collinearity, ridge logistic with teammate features should converge and log loss should be <=0.52? Hmm not guaranteed. Better prediction: ridge with teammate features will converge; if its log loss remains ≥0.47, then xgBoost's advantage is model class rather than teammate features. Verifiable by refit. 
Scenario 2: Recompute outperformance with empirical-Bayes shrinkage or minimum 100 shots. Prediction: rank correlation between raw and shrunk outperformance lower for low-n players; correlation between outperformance and average xG remains near zero. That tests "luck" claim. 
Scenario 3: Inject ball trajectory features (or future ball position) into xG model. Prediction: log loss drops below 0.47 and misclassification below 0.23, demonstrating leakage; veto any use as skill measure. This is verifiable by controlled feature ablation. But the paper says they have trajectory and can easily compute outcome; they didn't use it. Good. 
Maybe scenario 4: hold out entire games/players rather than frames. Prediction: frame-level random split overstates performance due within-game correlation; group split log loss increases. This is important RLVR. Need 3 exactly? It says 3 verifiable RLVR veto scenarios + predictions. We'll give 3 maybe include group split as one. Need choose best three:
1. Grouped-by-game split vs frame split: prediction log loss rises from 0.47 to >0.47; misclassification >0.23. Veto if no game-level split.
2. Teammate-feature ridge convergence: prediction convergence and log loss ≤0.52; if not, collinearity/feature issue. 
3. Trajectory leakage: prediction log loss collapses <0.47; veto. 
This covers methodology. Or use outperformance shrinkage. Need maybe include outperformance test? The paper's main claim. We need 3. Could include "shrinkage test" instead of teammate. But teammate non-convergence is a source issue. Need maybe include both? It asks 3, can include 3 but mention more? Better exactly 3.

Need "predictions" with numeric thresholds. Need be careful not invent exact results; state expected directional predictions and acceptance criteria. "Verifiable" means can be checked by reproducing. Good.

Need "ZERO TOY EQUATIONS": Our equations are formal and from source or standard. Outperformance ratio is from source, not toy. Need not invent "Force/Fatigue". We can use xG, log loss, logistic, lasso. Good. Need mention units for each equation. For logit, dimensionless. For log loss, nats. For R^2 dimensionless. For coordinates, game units. For correlation, dimensionless. For xG defended, probability units? xG defended is sum of probabilities minus goals; since goal outcome binary, difference in probability units, sum has units of expected goals (dimensionless count). Average xG defended dimensionless expected goals per shot. Good.

Need include exact page citations and verbatim quotes. We can cite after equations. Need not quote every equation. Need quote exact text.

Need structure:

<THINK_TRACE>
... 400+ words. Start with "The source is a 15-page Wharton student research journal article..." Discuss derivation chain: data -> cleaning -> features -> models -> eval -> excess goals -> offensive/defensive -> case studies. Gray-zone audit: frame sampling, shot filtering, model comparison not apples-to-apples, outcome leakage avoided, small case n, correlation vs causation. Use citations and quotes. Need include multi-hop: from raw frames 657,897 to 60,341 shot attempts; model xG; log loss 0.47 vs naive 0.65; xG model selected; outperformance ratio; mean 0.98 SD 0.27; correlation with avg xG weak; R^2 5.456e-05; conclusion luck/randomness; rotations. Need include exact markers.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX with units and breakdown. Cite pages. Maybe bullet list.

<RETROCAUSAL_GENEALOGY>
Historical lineage and multi-week traps. 200-300 words.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. 250 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. 250 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions. 300 words.

Need total >=1000 words. Ensure maybe 2000. Need no extra outside tags? We can include only XML sections. The final answer can be exactly XML. Need no markdown code fences. Use tags. Need ensure there is no word "odds". Check. Avoid "betting". Avoid "spread" maybe "spread" as in "spread credit" from paper? The invariant says never mention spreads (betting lines). The source says "splits the credit" not spread. Avoid "spread" anyway. Avoid "totals" maybe "total goals" is okay? "totals" as betting line? The word "total" appears in "total goals" source. Is that forbidden? It says never mention spreads, totals, moneylines, or odds. It likely means betting totals. But to be safe, can use "sum of goals" instead of "total goals"? But source quote has "total goals scored". We may quote exact. Hmm invariant "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "totals" could trigger. But quoting source "total goals" is not betting totals. Still to be ultra safe, avoid "totals" as standalone; "total goals" is a phrase but not "totals". We can use "sum of goals". But exact quote page 9 has "total goals scored divided by..." If quote, contains "total goals". Is that a violation? Probably not because context not betting line. But "totals" plural? We can avoid quoting that phrase? Need exact quote maybe not necessary. Use paraphrase. But if we cite "Outperformance is given by dividing total goals scored divided by the sum..." includes "total goals". It is not betting. I think okay. But to be safe, use ellipsis? "Outperformance is given by dividing [goals scored] divided by the sum of the player’s expected goal probabilities" [PAGE 9]—not verbatim? Need exact quotes if quoting. Better use exact but it's not betting line. The instruction likely targeted sports betting. Fine.

Need avoid "moneyline" etc. No issue.

Need mention "xG" as expected goals; maybe "expected goal probability" not "expected goals total". Good.

Need use "logit" not "log-odds". Good.

Need "probability units" e.g., \(p\) dimensionless in [0,1], \(-\ln p\) nats. Good.

Need "SI" for virtual game: "No SI length unit is supplied; coordinates are Rocket League engine coordinate units; any conversion to metres is not licensed by the source." This is important.

Need "singularity/breakdown regimes" exact:
- \(X^\top W X\) singular when perfect collinearity or separation; logistic non-convergence. Paper: teammate features non-convergence [PAGE 5].
- \(O_u\) denominator zero; small denominator. 
- \(R^2\) undefined if \(\bar D_u\) has zero variance.
- Log loss infinite if \(p=0\) for y=1 or p=1 for y=0; needs clipping.
- XGBoost depth 3 limits interactions; no extrapolation. 
- Player selection >20.

Need "source operators" maybe use "operators" as transformations: logDistanceToGoal = log(distance), cosine theta. Need formal:
\(d_{u,g} = \|\mathbf{r}_u - \mathbf{r}_g\|\), \( \mathrm{logDistanceToGoal} = \ln(d_{u,g}+\epsilon)\)? Paper just log distance. Need mention epsilon unspecified; log(0) singular at goal. Actually distance to goal can be zero at goal line? Then log undefined. Need note breakdown at distance=0; paper does not state offset. Good.
\(\cos\theta_{opp,j} = \frac{\mathbf{v}_{ball}\cdot(\mathbf{r}_{opp,j}-\mathbf{r}_{ball})}{\|\mathbf{v}_{ball}\|\|\mathbf{r}_{opp,j}-\mathbf{r}_{ball}\|}\). Singular if ball velocity zero or opponent at ball. Paper defines but no epsilon. Good.

Need "expected goals model" logistic:
\( \hat p_i = \sigma(\beta_0 + \sum_k \beta_k x_{ik})\), \(\sigma(z)=1/(1+e^{-z})\). Log loss in nats. Lasso objective. XGBoost. Need not include all features. Good.

Need "retrocausal genealogy" maybe "xG first in soccer, then ported to Rocket League; the later finding that outperformance is random retroactively demotes the naive interpretation of ratio >1 as skill." Use quote "An outperformance ratio above one suggests the player is a “good” player..." [PAGE 9] and later "outperformance is largely due to luck or randomness" [PAGE 15]. This is a retrocausal reinterpretation. Need mention "multi-week traps" as "if an analyst spends weeks ranking players by raw outperformance, the mean 0.98 and SD 0.27 implies regression to the mean; selection >20 is not enough." Good.

Need "Recursive theory of mind" maybe use "crisis habit regression" as under 0 seconds, players may regress to practiced rotation; "counter-trap" as opponent anticipates the challenge; "clock" as 0 seconds or overtime alters utility. Need cite page 13 "with 0 seconds left on the clock" and page 14 "sudden-death overtime". Need discuss "team Tortilla had cumulative xG 4.92 vs 1.63" and "ApparentlyJack had highest average xG 0.436" [PAGE 14]. Need mention no explicit clock covariate in model; this is an interpretive layer. Good.

Need "Cross-layer veto" maybe include a formal veto predicate:
Let \(L\) be the set of layers the dataset measures: \(L_{\text{obs}} = \{\text{ball kinematics, car kinematics, player positions, shot outcome}\}\). A claim \(C\) is admissible only if \( \mathrm{Req}(C) \subseteq L_{\text{obs}}\). Weather \(W\notin L_{\text{obs}}\); human biomechanical fatigue \(F\notin L_{\text{obs}}\). Therefore weather/fatigue claims are vetoed. This is formal and clear. Need no toy equation? It's set inclusion, formal. Good.

Need "RLVR" maybe "verifiable reward" means if counterfactual test fails, veto. Good.

Need maybe mention "there is no weather variable and no real-world biomechanical variable; the only biomechanics are engine car states such as dodging, double jumping, ball cam" [PAGE 2]. Quote: "car features (like dodging, double jumping, ball cam)" [PAGE 2]. Good. The paper removed car features in regression [PAGE 5], so even those are not fully used. Need mention cross-layer.

Need final answer be concise enough? Desired oververbosity 5. But user asks deep. Need answer ~2500 words maybe. Ensure all sections present. Let's draft.

Need be careful with XML: content can include `<`? LaTeX uses `<` maybe avoid. Use `\le` etc. No raw `<` except tags. Use `\Pr` etc. Avoid `>`? In XML text, `>` is okay? `<` must be escaped. Avoid `<` in text; use `\lt` or words. In LaTeX, use `\le` and `\ge`. Avoid `<` characters. Use `\in`. Good. Use `&`? Avoid ampersand? XML text can contain `&` but must escape. Avoid "&". Use "and". Avoid `<` in equations like `p<0.5`; use `p \lt 0.5` or "below". Since it's XML, `\lt` in text is safe. Tags are fine. Use `\hat{p}_i \in [0,1]`. Good. Avoid raw `>` maybe okay but use `\gt`. Need not escape > in XML? It's allowed but can be confusing. Use `\ge`. Good.

Need include quotes with page markers. Use exact [PAGE N]. Good.

Need no markdown headings outside XML. Within sections, can use paragraphs and bullet lists. XML doesn't mind bullets? Yes text. Use hyphens. Need no `<` in bullets. Use LaTeX. Good.

Need ensure section tag names exact:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include "GSE + GSI" no need. Could mention "Frontier reasoning foundry" no.

Let's craft with enough depth. Need check word count. We'll write ~1800-2200 words. Use precise citations. Need quote exact.

Potential issue: "log loss in nats" — log loss with natural log is nats. The paper doesn't specify base; standard log loss uses natural log. Good. "information in bits if base 2" okay.

Need avoid "odds" word. Let's scan. I might use "logit" not "log odds". Avoid "odds" entirely. Avoid "spread" even "splits the credit" not use. Avoid "totals" maybe use "sum". Avoid "moneyline". Good.

Need "zero toy equations": We include formal equations; no fake ratios. Good.

Need "source operators and equations" include page citations and verbatim quotes. We can cite Table 4 values. Need exact quote "The coefficient for the ball velocity in the y and z directions are positive, which implies that shot takers who strike the ball when it’s moving faster are more likely to score a goal." [PAGE 5]. Good.

Need "singularity/breakdown regimes" explicitly named. Good.

Need "multi-week traps" in retrocausal. Good.

Need "crisis habit regression vs counter-trap vs clock" explicit. Good.

Need "physical/biomechanical/weather veto proof" explicit. Good.

Need "3 verifiable RLVR veto scenarios + predictions" explicit. Good.

Need maybe include "PAGE 8" has only "open)." no quote. Not necessary. But cite pages 1-15. Use [PAGE 8]? Not needed.

Need final answer only. Let's write.

Need be mindful XML text cannot contain raw `&`. Avoid ampersand. In equations use `\text{and}` not `&`. No `&` in text. Avoid `<` in text. Use `\lt`. Use `>` maybe in LaTeX? Use `\gt`. Good.

Need use "2v2" no issue. Use "URL"? no.

Let's draft with paragraphs.

Potential word count check: THINK_TRACE 500; SOURCE 700; others 300 each total 2400. Fine.

Need include exact "0.98l" may look typo; quote "0.98l" and "0.27". Table 6: "Mean Standard Deviation 0.98l 0.27" but exact text "0.98l" yes. Could say "the table reports mean 0.98l and standard deviation 0.27" [PAGE 10]. It's odd but exact. Good.

Need "R2 value of 5.456e−05" exact. Use \(5.456\times10^{-5}\). Good.

Need "actual goal rate" typo "acual" quote? Could avoid. Need quote "outperformance is not strongly correlated with average xG or sum of xG" [PAGE 10]. Good.

Need "expected goals is the expected probability of the total number of goals in a soccer match, given the number of attempts and the probability of a goal" [PAGE 4]. Good.

Need "The ball never leaves the field" [PAGE 2]. Good.

Need "goal post is located at (0, 5000, 0)" [PAGE 2]. Good.

Need "we ignored goals whose last-hit occurred before the game-time was over, but resulted in a score after the game-time was over" [PAGE 12]. Good.

Need "with 0 seconds left on the clock" [PAGE 13]. Good.

Need "sudden-death overtime" [PAGE 14]. Good.

Need "ApparentlyJack had better positioning with each shot, with the highest average xG per shot of 0.436 in the game" [PAGE 14]. Good.

Need "Team Tortilla had a cumulative xG of 4.92 versus Team Dignitas’ 1.63" [PAGE 14]. Good.

Need "2Piece and MaJicBear’s average xG per shot was more than a multiple of 10 larger than Lj and Shock’s average xG" [PAGE 15]. Good.

Need "players on the winning Team LM had a much higher average xG than their counterparts on the losing team" [PAGE 14-15]? Exact: page 14 "One thing that is strikingly obvious is that the players on the winning Team LM had a much higher average xG than their counterparts on the losing team." yes. Good.

Need maybe mention "xG defended" equation from page 11: "sum of the xG minus the goal outcome (where 1 is a goal and 0 is no goal) for each shot a player u had the opportunity to block" [PAGE 11]. Good.

Need "Average xG is a poor proxy for offensive skill" [PAGE 11]. Good.

Need "The use of these values as proxies is debatable" [PAGE 11] exact? Text: "he use of these values as proxies is debatable" missing T maybe. Quote can avoid. Use "there are strong limitations to both proxies" [PAGE 11]. Exact: "The use of these values as proxies is debatable, and there are strong limitations to both proxies." Actually begins "he use" due OCR. We can quote "there are strong limitations to both proxies" [PAGE 11]. Good.

Need no "odds". Check equations: logit \( \ln(\hat p/(1-\hat p))\). No word. Good.

Need mention "log loss" maybe "logarithmic loss" no odds. Good.

Need final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 15-page Wharton Sports Analytics Student Research Journal article that ports a soccer-style expected-goals pipeline into Rocket League 2v2. The derivation chain is: replay-derived frames from Ball Chasing and carball [PAGE 2]; filtering from 657,897 random frames to 60,341 shot-attempt observations [PAGE 2]; feature engineering around distance to goal, distances to opponents and teammate, and cosine angles between ball velocity and opponent vectors [PAGE 4-PAGE 5]; four candidate models (logistic, ridge, lasso, xgBoost) [PAGE 5]; model evaluation by log loss and misclassification [PAGE 6-PAGE 7]; selection of xgBoost as final model because it “yields the lowest log loss and lowest misclassification rate” [PAGE 7]; construction of an outperformance ratio [PAGE 9]; correlation audit of outperformance against average xG [PAGE 10]; offensive-versus-defensive proxy regression [PAGE 11]; and three RLCS case studies [PAGE 12-PAGE 15].

The first gray-zone is frame sampling and outcome construction. The raw data are “random frames” [PAGE 2], not continuous tracking, and the analysis filters to “frames that included shot attempts only” [PAGE 2]. Therefore the xG estimate is a conditional shot-frame probability, not a continuous-time hazard or a causal effect of positioning. The authors are explicit: “This implies that our xG estimates are for a set of positions of the shot taker, teammate, and defenders” [PAGE 4]. That sentence is the correct scope boundary. A second gray-zone is leakage control: the authors say they could easily compute goal outcome from ball trajectory, but “for our model, we used position, velocity, angular velocity, and rotation of the shot taker, defender, and teammate” [PAGE 4]. That is a leakage-avoidance choice, but the source does not provide a full ablation table separating trajectory, teammate, and model-class effects.

The third gray-zone is model comparability. Logistic, ridge, and lasso are reported without teammate positioning and car features because “including the teammate features resulted in model non-convergence” [PAGE 5], while xgBoost is reported “with teammate data” [PAGE 7]. Thus the improvement from 0.52 logistic log loss to 0.47 xgBoost log loss [PAGE 6-PAGE 7] is not a clean teammate-only or model-only contrast. The paper’s own diagnosis is collinearity: “we assume that this is partially attributable to the collinearity in the dataset” [PAGE 5]. This matters because the xgBoost hyperparameters are constrained: “200 trees, an interaction depth of 3, and a shrinkage of 0.1 due to computing limitations” [PAGE 7]. The final model is therefore a defensible baseline, not an exhaustively tuned estimator.

The fourth gray-zone is the outperformance interpretation. The paper defines the ratio as goals divided by summed xG [PAGE 9] and selects shot takers with more than 20 observations [PAGE 9]. That threshold reduces small-denominator instability but does not eliminate selection and regression-to-the-mean effects. The reported mean is “0.98l” and standard deviation “0.27” [PAGE 10], and the paper concludes that outperformance is “not strongly correlated with average xG or sum of xG” [PAGE 10], later summarizing that “outperformance is largely due to luck or randomness” [PAGE 15]. That conclusion is a correlational and model-scope claim; it is not proof that no unmeasured skill exists. The correct audit is that raw outperformance is a noisy, denominator-sensitive residual, not a stable latent skill score.

The fifth gray-zone is the offensive-defensive test. Average xG and average xG defended are used as proxies [PAGE 11], but the paper admits “there are strong limitations to both proxies” [PAGE 11]. The reported OLS \(R^2\) of \(5.456\times10^{-5}\) [PAGE 11] is near zero, so the null of no linear correlation is not rejected. That is weaker than proving players spend equal time on offense and defense; it is evidence against a strong linear relationship between these two proxies in this dataset.

The sixth gray-zone is the RLCS case-study layer. The top-match analysis uses “a total of 6 games worth of data” [PAGE 12], and the European first match has only 7 versus 10 shot attempts [PAGE 13]. Those are descriptive case studies, not inferential estimates of team skill. The authors also exclude goals whose last hit occurred before regulation ended but scored after time expired [PAGE 12], which is a sensible clock-boundary rule but creates small official-score differences. Finally, the clock layer appears explicitly: “with 0 seconds left on the clock” [PAGE 13] and “sudden-death overtime” [PAGE 14]. Those moments are exactly where habit, opponent anticipation, and clock pressure interact, but the source does not include a clock covariate in the xG model.

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i\) index a shot-attempt frame, \(y_i \in \{0,1\}\) the goal outcome, and \(\mathbf{x}_i\) the vector of ball position, ball velocity, shot-taker position and rotation, defender states, and engineered distances and cosines [PAGE 2, PAGE 4, PAGE 5]. The expected-goal probability is
\[
\hat p_i = \Pr(Y_i=1 \mid \mathbf{X}_i=\mathbf{x}_i), \qquad \hat p_i \in [0,1],
\]
where \(\hat p_i\) is dimensionless probability. This matches the paper’s framing of xG as “the expected probability of the total number of goals in a soccer match, given the number of attempts and the probability of a goal” [PAGE 4]. The logistic model uses the logit link
\[
\eta_i = \ln\!\left(\frac{\hat p_i}{1-\hat p_i}\right)
= \beta_0 + \mathbf{x}_i^\top \boldsymbol{\beta},
\qquad
\hat p_i = \frac{1}{1+e^{-\eta_i}},
\]
with \(\eta_i\) dimensionless and \(\boldsymbol{\beta}\) in inverse feature units. The paper reports 59 explanatory variables for the simple logistic regression [PAGE 5]. The feature operators include
\[
d_{u,g} = \|\mathbf{r}_u-\mathbf{r}_g\|_2,
\qquad
\mathrm{logDistanceToGoal} = \ln d_{u,g},
\]
where \(\mathbf{r}\) is a Rocket League coordinate vector. The source does not supply an SI conversion; coordinates are game-engine units, so physical metres are not licensed. The log operator has a breakdown at \(d_{u,g}=0\), where the logarithm is singular; the paper does not report an offset. The angular operator is
\[
\cos\theta_{opp,j}
=
\frac{\mathbf{v}_{ball}\cdot(\mathbf{r}_{opp,j}-\mathbf{r}_{ball})}
{\|\mathbf{v}_{ball}\|_2\,\|\mathbf{r}_{opp,j}-\mathbf{r}_{ball}\|_2},
\]
which is dimensionless and singular when \(\|\mathbf{v}_{ball}\|_2=0\) or when the opponent coincides with the ball. The paper defines these cosine features for opponent 1 and opponent 2 [PAGE 4-PAGE 5].

For penalized logistic regression, the lasso objective is
\[
\min_{\beta_0,\boldsymbol{\beta}}
\left[
-\sum_{i=1}^{N}
\left(
y_i\ln \hat p_i+(1-y_i)\ln(1-\hat p_i)
\right)
+
\lambda \|\boldsymbol{\beta}\|_1
\right],
\]
and ridge replaces \(\|\boldsymbol{\beta}\|_1\) with \(\|\boldsymbol{\beta}\|_2^2\). The negative log-likelihood is in nats when the logarithm is natural; the paper reports log loss, not bits, so nats is the appropriate information unit. The lasso selected about 29 variables [PAGE 5], with top standardized coefficients including ball_pos_y \(0.30\), shot_taker_pos_z \(0.19\), ball_pos_z \(-0.16\), ball_vel_y \(0.14\), and logDistanceToGoal \(-0.08\) [PAGE 6]. The xgBoost additive form is
\[
\hat p_i
=
\sigma\!\left(
\sum_{m=1}^{M} f_m(\mathbf{x}_i)
\right),
\qquad
M=200,\quad \text{interaction depth}=3,\quad \text{shrinkage}=0.1,
\]
where each \(f_m\) is a shallow decision tree and the hyperparameters are those reported in the paper [PAGE 7]. The relative-influence values in Table 3 are dimensionless; distanceToGoal is reported as 19.80, cos_theta_opp_2 as 13.11, and cos_theta_opp_1 as 12.62 [PAGE 7]. The model comparison uses
\[
\mathrm{LL}
=
-\frac{1}{N}\sum_{i=1}^{N}
\left[
y_i\ln \hat p_i+(1-y_i)\ln(1-\hat p_i)
\right],
\qquad
\mathrm{MC}
=
\frac{1}{N}\sum_{i=1}^{N}
\mathbf{1}\!\left[
\mathbf{1}\{\hat p_i \ge c\}\ne y_i
\right],
\]
with \(\mathrm{LL}\) in nats and \(\mathrm{MC}\) dimensionless. The paper reports logistic \(0.52/0.26\), ridge \(0.59/0.26\), lasso \(0.62/0.26\), xgBoost \(0.47/0.23\), and naive \(0.65/0.35\) [PAGE 6-PAGE 7]. Log loss has a singularity if a predicted probability is exactly 0 for \(y_i=1\) or exactly 1 for \(y_i=0\); in practice clipping is required, but the paper does not state a clipping rule.

The outperformance operator is
\[
O_u
=
\frac{\sum_{i\in S_u} y_i}
{\sum_{i\in S_u} \hat p_i},
\]
where \(S_u\) is the set of shot attempts by player \(u\), \(O_u\) is dimensionless, and the paper selects players with more than 20 observations [PAGE 9]. The breakdown regime is exact: \(O_u\) is undefined at \(\sum_{i\in S_u}\hat p_i=0\), and it becomes unstable as the denominator approaches zero. The paper’s mean and standard deviation are reported as \(0.98l\) and \(0.27\) [PAGE 10], where the “l” is present in the source table. The average xG is
\[
\bar p_u
=
\frac{1}{|S_u|}
\sum_{i\in S_u}\hat p_i,
\]
also dimensionless. The defensive proxy is
\[
D_u
=
\sum_{i\in B_u}(\hat p_i-y_i),
\qquad
\bar D_u
=
\frac{D_u}{|B_u|},
\]
where \(B_u\) is the set of shots player \(u\) had an opportunity to block [PAGE 11]. \(D_u\) is in expected-goal units, \(\bar D_u\) is expected goals per block opportunity, and both are dimensionless counts. The denominator \(|B_u|=0\) is a singularity. The paper’s OLS test is
\[
\bar p_u
=
\alpha+\beta \bar D_u+\varepsilon_u,
\]
with reported \(R^2=5.456\times10^{-5}\) [PAGE 11]. \(R^2\) is dimensionless; it is undefined if \(\bar D_u\) has zero variance. The source does not report confidence intervals or p-values for this regression, so “we fail to reject the null hypothesis” [PAGE 11] is a model-scope statement, not a proof of exact zero correlation.

<RETROCAUSAL_GENEALOGY>
The lineage is soccer xG ported into a virtual soccer-like game. The paper explicitly frames xG as a soccer-derived quantity that “quantifies the value of scoring chances” [PAGE 4], then applies it to Rocket League because the game “follows many of the same rules as soccer” [PAGE 4]. The methods lineage is also standard applied-statistics genealogy: logistic regression as the interpretable baseline, ridge and lasso as collinearity and variance-control responses [PAGE 5], and gradient boosting as a nonlinear tree ensemble [PAGE 7]. The data lineage is replay scraping from Ball Chasing with the carball Python package [PAGE 2], which makes the study reproducible only if replay version, frame sampling, and shot-attempt definition are held fixed.

The retrocausal pivot is that the paper first presents outperformance as a “good” player signal when \(O_u \gt 1\) [PAGE 9], but later reinterprets high \(O_u\) as unstable: “outperformance is not strongly correlated with average xG or sum of xG” [PAGE 10], and the conclusion says “outperformance is largely due to luck or randomness” [PAGE 15]. Later evidence therefore demotes the earlier ratio from a skill measure to a noisy residual. A multi-week trap is to rank players by raw \(O_u\) and treat the ranking as stable ability; with mean near 0.98 and standard deviation 0.27 [PAGE 10], regression to the mean and small denominators are serious. A second multi-week trap is to compare the logistic log loss of 0.52 to the xgBoost log loss of 0.47 [PAGE 6-PAGE 7] without noting that the regression models exclude teammate positioning and car features [PAGE 5] while xgBoost includes teammate data [PAGE 7]. A third trap is to treat the near-zero \(R^2=5.456\times10^{-5}\) [PAGE 11] as proof that players allocate equal time to offense and defense; the proxies are explicitly described as limited [PAGE 11]. A fourth trap is to overread the RLCS case studies, which are six games [PAGE 12] with small shot counts such as 7 versus 10 [PAGE 13]. The correct genealogy is therefore not “xG proves skill”; it is “xG converts positions into a probability scale, and the residual is a diagnostic requiring shrinkage, grouping, and out-of-sample discipline.”

<RECURSIVE_THEORY_OF_MIND>
The paper’s rotation description is the behavioral substrate: “A common rotation in 2v2 matches involves a player ‘challenging’ the ball, then backing up to cover space in the field while their teammate moves up to receive and ‘challenge’ a ball” [PAGE 11]. In recursive-theory-of-mind terms, a player must model the teammate’s next posture and the opponent’s model of that posture. Crisis habit regression occurs when clock pressure collapses the policy to the most practiced rotation: challenge, retreat, cover. Counter-trap occurs when the opponent anticipates that habit and baits the challenge, leaving the goal exposed. Clock is the third layer: regulation permits a last-second equalizer or winner, while sudden-death overtime collapses the utility of a safe rotation because one goal ends the match [PAGE 14].

The European third match is the clearest clock case: “with 0 seconds left on the clock, Team Tortilla’s player itachi scored the team’s 3rd goal, preventing an overtime period and winning the match” [PAGE 13]. That is a clock-boundary event, not a stable xG effect. The North American third match is the overtime case: “the match went into sudden-death overtime. The first team to make a goal would win the match and thus the entire championship” [PAGE 14]. Here the winning team’s players had much higher average xG than the losing team’s counterparts [PAGE 14-PAGE 15], and “2Piece and MaJicBear’s average xG per shot was more than a multiple of 10 larger than Lj and Shock’s average xG” [PAGE 15]. That supports a positioning interpretation, but the sample is tiny. The counter-trap reading is plausible but not measured: the paper does not encode “habit,” “bait,” or “opponent expectation” as variables. Therefore the recursive-theory-of-mind layer is an interpretive overlay, not a tested causal mechanism. Its correct use is to generate hypotheses: under 0-second or overtime conditions, do challenge-retreat sequences become more predictable, and does opponent positioning react to that predictability? The xG model can score the resulting shot quality, but it cannot by itself identify the mental model that produced the rotation.

<CROSS_LAYER_VETO_ADJUDICATION>
The observed-layer set is \(L_{\text{obs}}=\{\text{ball kinematics, car kinematics, player positions, shot outcome}\}\). The paper measures “location data of all 4 players, car features, ball position, and whether or not a particular shot resulted in a goal” [PAGE 2]. A claim is admissible only if its required variables are in \(L_{\text{obs}}\) or are explicitly modeled as latent constructs. Weather is not in \(L_{\text{obs}}\). Rocket League is an online virtual game: “The ball never leaves the field” [PAGE 2], and the field geometry is engine-defined, with the goal post inferred at \((0,5000,0)\) [PAGE 2]. There is no meteorological variable, no wind, no rain, no temperature, and no altitude. Any weather-based explanation is therefore vetoed by layer mismatch, not merely by weak evidence.

Biomechanical explanation is also vetoed in its real-world form. The dataset contains virtual car states such as “dodging, double jumping, ball cam” [PAGE 2], but it does not contain human muscle load, fatigue, injury, or metabolic state. Moreover, the regression models removed car features along with teammate positioning because of non-convergence [PAGE 5], so even the virtual biomechanical controls are not fully present in the interpretable logistic models. Physical explanation is limited to game-engine car-ball dynamics and replay sampling. Server latency or input delay could be a virtual “weather” analogue, but the source does not measure ping, tick rate, or packet loss, so that claim is also vetoed.

Statistical-layer vetoes apply when the denominator is zero or unstable: \(O_u\) is undefined at zero summed xG [PAGE 9], \(\bar D_u\) is undefined at zero block opportunities [PAGE 11], and log loss is singular at exact 0 or 1 probabilities. Behavioral-layer vetoes apply when the claim exceeds the case-study design: six games [PAGE 12], small shot counts [PAGE 13], and goals excluded at the clock boundary [PAGE 12]. A claim that a team “has better defense” from one 7-2 match [PAGE 13] is not licensed unless defensive xG is estimated with uncertainty and opponent adjustment. The paper itself offers the alternative: the score gap could be “pure luck” [PAGE 13]. Thus the cross-layer ruling is: physical-engine claims are admissible only within game coordinates and sampled frames; biomechanical fatigue and weather claims are inadmissible; behavioral claims are admissible as descriptive hypotheses but not as causal proof.

<RLVR_COUNTERFACTUAL_VETOES>
1. Game-grouped validation veto. Refit the xgBoost model with train and test splits grouped by entire game or by player, not by individual frame. Prediction: because random frames from the same game share ball, score, and rotation context, the reported 0.47 log loss and 0.23 misclassification [PAGE 7] will worsen under game-grouped validation. Acceptance criterion: if grouped log loss remains at or below 0.47, the frame-level result is robust; if it rises above 0.47, the original evaluation is optimistically biased by within-game correlation. This is verifiable by replaying the exact split and recomputing \(\mathrm{LL}\) in nats and \(\mathrm{MC}\) at the same threshold.

2. Teammate-feature convergence veto. Fit a ridge-penalized logistic regression with teammate positioning included, using the same engineered features and a cross-validated penalty. Prediction: the ridge model will converge where the unpenalized logistic did not, because the reported non-convergence is attributed to collinearity [PAGE 5]. Acceptance criterion: if ridge with teammate features converges and achieves log loss at or below 0.52, then the logistic baseline’s exclusion of teammate data is a modeling limitation; if it converges but remains above 0.47, then xgBoost’s advantage is not merely teammate inclusion. This directly tests the paper’s own explanation and separates model class from feature set.

3. Trajectory-leakage veto. Add future ball trajectory or post-shot ball state to the feature set and refit the same model class. Prediction: log loss will fall below 0.47 and misclassification below 0.23, because the paper states that ball trajectory makes goal outcome “easily compute” [PAGE 4]. Acceptance criterion: any feature set that includes post-shot trajectory is vetoed as a skill measure even if its predictive score is excellent, because it violates the pre-shot information boundary. A valid xG model must use only pre-shot position, velocity, rotation, and opponent geometry. This scenario is verifiable by controlled ablation: pre-shot features versus pre-shot plus trajectory, same folds, same metric, same clipping rule.
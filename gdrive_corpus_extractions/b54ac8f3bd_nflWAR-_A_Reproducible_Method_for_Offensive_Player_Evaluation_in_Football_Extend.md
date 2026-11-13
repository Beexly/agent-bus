---
source: "nflWAR- A Reproducible Method for Offensive Player Evaluation in Football (Extended Edition) - Ron Yurko, Sam Ventura, Maksim Horowitz.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 43
model: deepseek/deepseek-v4.1-flash-1017
words: 8812
---

<NATIVE_REASONING>
We need answer to user. Need produce deep analysis following exact XML sections >=1000 words. Need no betting lines/odds/spreads/totals/moneylines. Need formal LaTeX equations, units, page citations exact [PAGE N] markers and verbatim quotes when source pages provided. Need discuss source operators equations, breakdown regimes, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need link to sports research? The prompt says DRIVE SOURCE PDF. We need analyze the paper. Must not mention betting lines. We can discuss football metrics, WAR, EP, WP, multilevel models, GAM, calibration, replacement level, uncertainty. Need "THINK_TRACE" >=400 words. Overall >=1000. Need cite exact page markers and verbatim quotes. Should include equations from source. Need identify source operators and equations. Need note no betting. Could mention "No wagering market variables are used or inferred." No lines.

Need perhaps discuss "gray-zone audit" in think trace. Need use exact [PAGE N] and quotes. We have source text. We can cite page. Need ensure quotes verbatim. We can use short quotes. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need discuss units: points for EP, probability for WP, seconds, yards, drive counts, wins. EP equation. Multinomial logit. Weights. Calibration. PAT/FG. GAM. EPA/WPA. Multilevel models. Replacement. Wins conversion. Uncertainty. Need breakdown regimes: nonrandom missingness, selection bias, replacement definition sensitivity, drive resampling correlation, QB bimodal, no on-field player IDs, proprietary Participation Data restrictions, no weather, FG model distance-only, TD point fixed 7, PAT ignored, LOSO CV, calibration bins, e≈0.013 and ordinal e≈0.022. Need equations: Eq1 Y set, Eq2 logits, Eq3 EP, Eq4 weight, Eq5-7 calibration, Eq8 FG logit, Eq9 FG EP, Eq10 WP GAM, Eq11 delta, Eq12-13 multilevel, Eq14 responses, Eq15-18 models, Eq19-22 iPAR conversion. Need units and assumptions. Need cite pages exact. Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Need maybe not overdo but thorough.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Discuss lineage from Carter & Machol 1971, Carroll et al 1988, Burke, Goldner, Lock & Nettleton, openWAR, Thomas & Ventura, Baumer, etc. Multi-week traps: fixed weights, proprietary human charting, using box score proxies, ignoring score differential, treating next score as linear, not calibrating, not resampling drive-level, replacement definition. Need "multi-week traps" perhaps in research pipeline. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Interpret as recursive modeling of decision makers? Need discuss how analysts/teams/players adapt: when score differential large teams sacrifice points for clock (p11). This causes model to misread behavior; counter-trap: if model learns from behavior, adaptive teams exploit; clock/time remaining. Need recursive ToM: model of team behavior, model of analyst expectations, model of league adaptation. Need mention recursive habit regression under crisis: teams revert to run/clock, model's EP doesn't account leverage; WP does. Counter-trap: overfitting to "no score" or garbage time. Clock: seconds remaining in half/game, under-two-minute indicator, timeouts in WP. Need cite p3, p11, p16, p21 etc. Need maybe say no betting. Need no toy equations.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need discuss physical/biomechanical constraints: QB hit, air yards, YAC, rush gap, sacks, scrambles; weather not available (p14). Need veto proof: if weather/field/tracking absent, model cannot claim individual lineman WAR; selection bias in rush side-gap p36; public data only participants involved p19; no which players on field p7. Need separate physical layer (biomechanical: QB hit, pass location, air yards, YAC, rush gap), data layer (participation missing), environmental layer (weather not provided). Veto conditions: weather changes FG probability, but model only distance Eq8 p14; no weather data. Biomechanical: sacks included in QB rush model to account skilled rushing QBs minimizing loss p23. QB hit covariate p21/22. Need "veto proof": cannot adjudicate individual OL or defensive player value, cannot infer weather effects, cannot credit off-ball players. Need formal breakdown regimes.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need create 3 scenarios that are verifiable counterfactual vetoes. Must avoid betting lines. Can frame as model-validation tests. Need predictions with measurable outcomes. Scenario 1: Remove next-score event ordering / drive weighting, measure calibration error e. Prediction: calibration worsens, e >0.013; ordinal logistic e≈0.022. But that's not counterfactual? Need "veto scenario": If source claim is wrong, test can veto. Need 3 verifiable RLVR vetoes with predictions. Need include predictions. Example:
1. Calibration ablation: retrain EP with linear regression on point values instead of multinomial; LOSO CV calibration e should exceed 0.013 and residuals nonnormal; if not, veto claim. But page says ordinal logistic e≈0.022. Prediction: e≥0.020 or calibration plots off diagonal.
2. Participation-data extension: Add random player-presence IDs to models with no signal; if framework yields stable player iPA and improved out-of-sample calibration? Hmm verifiable. Need counterfactual veto: If replacement level definition changed from ten-percent cutoff to one-QB-per-team, QB WAR distribution shifts lower; page 28 says lower WAR values. Prediction: one-QB definition yields lower QB WAR generally. Veto if no shift.
3. Drive-level resampling vs play-level: If within-drive correlation is negligible, drive-level and play-level uncertainty should be similar. Paper asserts resample drives to account dependencies p27. Prediction: drive-level intervals wider than play-level under positive within-drive correlation; if not, veto assumption.
4. Weather/FG: Add weather data to FG model; if distance-only model is adequate, calibration not improve. Paper says weather not available, enhancements could be made p14. Prediction: weather-feature model improves FG calibration for outdoor late-season games by X? Need verifiable but no exact data. Could say lower out-of-sample log loss or calibration error. Need 3.

Could use "RLVR" as scenario with verifiable reward: train/evaluate and compare metric. Need ensure not fake. We can state predictions.

Need maybe mention "No betting lines" nowhere? The instructions say never mention spreads, totals, moneylines, odds. We can avoid words. We can mention "score differential" because paper uses it, not betting line. Avoid "spread" entirely. Avoid "over/under", "moneyline", "odds". "Win probability" is not odds? It's probability. Fine. Avoid "betting" except maybe not needed. "No wagering market variables" okay? It mentions wagering but not lines; safe? The invariant says zero betting lines: never mention spreads, totals, moneylines, odds. Mentioning "no betting lines" maybe okay but could be seen as mention. Better avoid any betting terms entirely. Say "The analysis uses only public play-by-play variables." No "odds".

Need maybe include "PAGE N" exact. Use [PAGE 9], etc.

Need produce XML sections exactly. The whole answer must be >=1000 words. We need be concise but deep. Need maybe 2500-3500 words. Desired oververbosity 5. But requirements deep. We can produce ~3000 words. Need ensure sections names exact.

Need structure:
<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

Need include citations and quotes. Use verbatim quotes:
- p1 abstract: "We present four contributions..." maybe.
- p2: "not all yards are created equal" exact? Source: "This key point, that not all yards are created equal, has been the foundation..." Quote "not all yards are created equal" [PAGE 2].
- p3: "When a team is leading by a large number of points at the end of a game, they will sacrifice scoring points for letting time run off the clock." [PAGE 3].
- p7: "the league does not provide information about which players are present on the playing field for each play" [PAGE 7].
- p9: "we propose modeling the probability for each of the scoring events directly" [PAGE 9].
- p11: "we don't exclude any observations but instead use a weighting approach" [PAGE 11].
- p13: "resulting in e ≈0.013" [PAGE 13].
- p14: "this is a rudimentary field goal model only taking distance into account" [PAGE 14].
- p16: "every game starts with each team having a 50% chance of winning" [PAGE 15? Actually p15 says "every game starts with each team having a 50% chance of winning." [PAGE 15]. Wait page 15 content: "As a result, every game starts with each team having a 50% chance of winning." It is [PAGE 15]. Use.
- p19: "the data available publicly ... is limited to only those players directly involved in the play" [PAGE 19].
- p20: "plays themselves are not independent" [PAGE 20].
- p27: "we resample entire team drives" [PAGE 27].
- p28: "one QB for each team" approach leads to lower WAR values [PAGE 28].
- p36: "selection bias at the RB level" [PAGE 36].
- p37: "Sportradar’s data sharing agreement explicitly prohibits the use of this data in the creation of new metrics" [PAGE 37].
Need exact.

Need formal equations. We should give LaTeX in text. Need units. Example:
EP_i = E[Y_i | X_i] = \sum_{y\in\mathcal{Y}} y P(Y_i=y|X_i), units points. \mathcal{Y} = {+7,+3,+2,0,-2,-3,-7}. Assumptions: next score within half, possession team perspective; PAT excluded; kneels zero. Breakdown: nonstationary scoring environment, TD fixed 7, no weather, score-differential behavior. Page [PAGE 9-11]. Eq (1)-(3).

Multinomial:
\log(P(Y=y|X)/P(Y=0|X)) = X\beta_y for y≠0. Units: log-odds dimensionless. Breakdown: separation if sparse events; calibration bins 5% increments; LOSO CV.

Weights:
w_i=(max|S|-|S_i|)/(max|S|-min|S|). Units dimensionless [0,1]. Drive weight D_i etc. Combined. Assumption equal emphasis. Breakdown: max/min sensitive, equal weighting arbitrary, future work.

Calibration:
e_{y,b}=|\hat P_b - P_b|, e_y = (1/n_y)\sum_b n_{y,b}e_{y,b}, e=(1/n)\sum_y n_y e_y. Units probability. Threshold e≈0.013.

FG:
\log(P(M)/(1-P(M)))=s(k), k yards. EP_FG=P(M)*3+(1-P(M))*(-1)*E[Y|X=m]. Units points. Assumption miss gives opponent at 8 yards and 5.07 sec; distance-only; no weather. Page [PAGE 14].

WP:
\log(P(Win)/(1-P(Win)))=s(E[S])+s(s_h)h+s(E[S/(s_g+1)])+h u t_off + h u t_def. Units: E[S] points, s_h seconds, E[S/(s_g+1)] points/second, timeouts count, h half categorical, u indicator. Assumption no team strength. Breakdown: no team strength? Actually intentionally. Calibration by quarter. Page [PAGE 16]. Eq10.

delta:
δ_{f,i}=V_f - V_i, units points or probability. EPA/WPA. Scoring plays use y. Breakdown: state transition mis-specification, air/YAC split time adjustment 5.7 s. Page [PAGE 18].

Multilevel:
δ_{f,i} ~ Normal(Q_{q[i]}+C_{c[i]}+X_i·β, σ^2_δ). Q_q ~ Normal(μ_Q,σ^2_Q), C_c ~ Normal(μ_C,σ^2_C). Units points/prob. Assumption normality, partial pooling. Breakdown: small n, nonindependence, position heterogeneity. Page [PAGE 20-21].

Passing models:
Δ_air = δ_{f,i,air} 1(comp)+δ_{f,i}1(incomp); Δ_yac = δ_{f,i,yac}1(comp)+δ_{f,i}1(incomp). Models Eq15-16. Units points/prob. Assumption both QB and receiver credit both air/YAC; incomplete passes assigned observed δ. Breakdown: no separation of QB/receiver causal credit, no on-field IDs.

Rushing model:
δ ~ Normal(Q_rush + F_rushQ + Γγ, σ), and non-QB: δ ~ Normal(H_ι+T_τ+F_rush,ν+Pρ, σ). Units points/prob. T team-side-gap proxy. Assumption all non-QB rushes designed; QB model includes scrambles/designed/sacks. Breakdown: cannot separate designed QB runs from scrambles; T not individual linemen. Page [PAGE 23].

iPAA:
iPAA_{p,air}=κ_{p,pass}·iPA_{p,air}; etc. Units points or probability. Note source has typo? Eq19: iPAAp,rush = κp,rush · iPAp,air [PAGE 24] likely typo (should iPAp,rush). We should note source's printed Eq19 uses `iPAp,air` for rush, likely typographical; audit. Need be careful: quote exact? We can state "the printed line reads ...; context implies rush." This is gray-zone audit. Good.

iPAR:
iPAR = iPAA - iPAA_repl. Units points/prob. Wins conversion: Wins_t=β0+βS S_t+ε_t; βS wins/point; 1/βS points/win. Units wins. Breakdown: linear season relationship, year-specific fits, no causal identification. Page [PAGE 26-27].

Uncertainty: drive resampling 1000 simulated seasons. Units distribution of WAR. Assumption exchangeability of drives; breakdown within-drive correlation, team decision. Page [PAGE 27].

Need mention "source operators" maybe operators: conditional expectation, multinomial logit, GAM smooth, mixed-effects partial pooling, calibration error, replacement shadow, reciprocal points-per-win, drive bootstrap. Need maybe "operator algebra".

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit. We can write ~600 words. Include reasoning steps: play value -> player credit -> replacement -> wins; audit of assumptions. Need mention exact pages. We can be transparent.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage and multi-week traps. Need maybe "retrocausal" means how later framework reinterprets earlier metrics. Discuss Carter & Machol 1971 -> Carroll 1988 -> Burke 2009 -> Goldner 2017 -> Lock & Nettleton 2014 -> openWAR 2015 -> nflWAR 2018. Multi-week traps: (1) box-score linear combos like passer rating/ANY/A; (2) fantasy points ad hoc weights; (3) PFF/QBR human judgment/proprietary; (4) AV subjective thresholds; (5) expected points linear regression on next score; (6) ignoring score differential/clock; (7) not calibrating; (8) replacement level underspecified; (9) resampling plays not drives; (10) assuming public data includes all 22 players. Need cite pages 4-6, 11, 20, 27, 36-37. Good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need interpret recursive modeling: The model must model agents (teams) who model game state and clock; analysts model teams; teams adapt to metrics. Crisis habit regression: under large score differential/endgame, teams revert to clock-preserving habits, violating EP stationarity; model downweights via w_i. Counter-trap: if model rewards garbage-time EPA, players/teams could exploit? Actually teams don't optimize for WAR; but analysts might overrate players in low-leverage situations. Need "counter-trap": using WP solves leverage but introduces team strength omission; including team strength would artificially inflate/deflate player contributions (p15). Clock: seconds remaining in half/game, under two minutes, timeouts. Need cite p3, p11, p15-16. Need maybe recursive ToM levels:
- Level 0: physical play outcome.
- Level 1: team chooses play based on score/time.
- Level 2: opponent anticipates.
- Level 3: analyst estimates player effect controlling for context.
- Level 4: team/player adapts to evaluation.
Crisis habit regression = level 1 behavior collapses to clock management; model must not treat as skill.
Counter-trap = overcorrect with leverage weights can erase legitimate clutch performance or misattribute.
Clock = explicit variable s_h, s_g, u, timeouts.
Prediction: EP-based WAR > WPA-based WAR for QBs due to meaningless situations (p28). This is a source finding. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need define layers:
1. Biomechanical/physical: QB hit, air yards, YAC, pass location, rush gap/direction, sacks/scrambles. The model includes QBHit and AirYards p21-22; QB rushing includes sacks "to account for skilled rushing QBs minimizing the loss on sacks" p23. Veto: cannot infer individual lineman biomechanics; T proxy only team-side-gap.
2. Observational/data: no player participation p7; only directly involved players p19; Sportradar participation data prohibited p37. Veto: no individual OL/defensive WAR; no on-field 22.
3. Environmental/weather: "weather data, which is not made available by the NFL" p14. FG model distance-only. Veto: cannot claim weather-adjusted FG/EP; no wind/temperature/precipitation.
4. Selection bias: RB cutback bias p36. Veto: team-side-gap estimates may be biased.
5. Replacement level: QB bimodal distribution p25-26; ten percent vs one-QB definition p28. Veto: WAR scale not absolute; depends on replacement definition.
Need "proof" maybe formal: For any claim requiring variable Z not in data, model cannot identify. We can state as identification veto: if Z is unobserved and correlated with player assignment and outcome, iPA estimate has omitted-variable bias. Need no fake equations? We can write formal bias: \hat{iPA}_p = iPA_p + bias from omitted Z. Is that a toy equation? It's standard omitted variable bias, not fake ratio. We can state qualitatively. But requirement formal LaTeX equations for source operators. We can include identification condition: E[δ|player, X, Z] ≠ E[δ|player, X] if Z correlated. That's formal. Units points/prob. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios + predictions. Need be explicit "verifiable reward" maybe compare metrics. Avoid betting. Scenarios:
1. EP model class ablation: Replace multinomial logit with linear regression on point value or ordinal logit. Test LOSO CV calibration error e. Prediction: linear/ordinal will have worse calibration; source reports ordinal e≈0.022 vs selected e≈0.013 [PAGE 13]. Veto condition: if ordinal e≤0.013 and calibration plots as good, the multinomial claim is vetoed. Reward metric: lower e. This is verifiable.
2. Replacement-level definition perturbation: Recompute 2017 QB WAR with ten-percent cutoff vs one-QB-per-team. Prediction: one-QB definition yields lower WAR values generally [PAGE 28]; rank correlations high but scale shifts. Veto: if distributions identical or shift opposite, replacement-level sensitivity claim vetoed. Metric: mean/median WAR, KS statistic, rank correlation.
3. Drive-level vs play-level resampling: Recompute 1000 simulated seasons using play-level bootstrap instead of drive-level. Prediction: drive-level intervals will be wider / different under positive within-drive correlation; if intervals and player rankings identical, drive-level dependence assumption vetoed. Page [PAGE 27]. Metric: interval width, rank stability.
4. Maybe weather addition to FG model: Add weather covariates to FG GAM; prediction: distance-only model has residual calibration error varying with weather; if no improvement, weather omission not material. Page [PAGE 14]. This is good. Need exactly 3, so choose 1,2,3 or 4. Need "3 verifiable RLVR veto scenarios + predictions." We can provide 3. Maybe include weather as one. Need ensure each has "veto" and "prediction". Could include 4? Requirement says 3; exactly 3 maybe. Let's do 3: calibration ablation, replacement-level perturbation, drive-resampling ablation. Or weather. Weather is cross-layer. Replacement is source. Resampling is uncertainty. Calibration is core. Good.

Need maybe mention "RLVR" not defined? We can say "verifiable reward checks" without defining. Use "RLVR-style" maybe. Need no betting.

Need include "ZERO TOY EQUATIONS" - avoid invented ratios. We can use only source equations and standard identification inequality. Need not invent "Force/Fatigue". Good.

Need maybe include units in every equation. For source equations, cite pages. Use "dimensionless" for log-odds. For weights dimensionless. For calibration probability. For EP points. For WP probability. For delta points or probability. For iPAR points/prob. For wins conversion wins. Good.

Need mention exact singularity/breakdown regimes. For each model:
- Multinomial: separation / sparse event cells, nonstationarity, fixed TD value, PAT excluded, score differential behavior, no weather.
- GAM: smooth overfitting if sparse time states; no team strength; calibration by quarter; endgame timeouts.
- Multilevel: small group sizes, nonindependence, positional heterogeneity, replacement labels; normality assumption; selection bias; unobserved players.
- Wins conversion: linear model season-level; outlier seasons; no causal.
- Resampling: drive exchangeability; within-drive correlation; team decision.
- FG: distance-only; missing weather; missed FG field position/time adjustments fixed 8 yards/5.07 s.
- Replacement: threshold arbitrary; QB bimodal; one-QB vs ten-percent.

Need perhaps "source operators" as terms:
- \mathbb{E}[Y|X] conditional expectation operator
- \operatorname{logit}^{-1}
- \operatorname{softmax} for multinomial? The paper doesn't explicitly softmax but implied. We can state "six logits relative to No Score, then normalization to seven probabilities (softmax)." Is softmax source? Not explicit but mathematically implied. Need avoid invent? It's standard. Cite Eq2.
- smoothing operator s(·)
- partial pooling operator via Normal random intercepts
- calibration error operator
- replacement shadow operator
- reciprocal points-per-win operator
- drive bootstrap operator.
Need maybe "operator algebra" concise.

Need answer in XML only? The user wants exact XML sections. We can output with these tags. No extra outside? Probably okay. Need ensure all sections present. We can include text with paragraphs and equations.

Need be careful with "PAGE" citations: Use [PAGE 11] etc. Exact quote from p11: "we don’t exclude any observations but instead use a weighting approach." The source has curly apostrophe. We can quote. Need cite [PAGE 11]. Another quote p13: "resulting in e ≈0.013" exact source: "resulting in e ≈0.013." Good. p14: "this is a rudimentary field goal model only taking distance into account." Exact source: "we note that this is a rudimentary field goal model only taking distance into account." [PAGE 14]. Use quote.

Need maybe page 15 quote: "every game starts with each team having a 50% chance of winning" exact. [PAGE 15].
p20: "the plays themselves are not independent" exact? Source: "since every play involving the same player is a repeated measure of performance, the plays themselves are not independent." [PAGE 20]. Good.
p27: "we resample entire team drives" exact. [PAGE 27].
p36: "selection bias at the RB level" exact? Source: "Because of this selection bias at the RB level – RBs are more often going to run towards holes and away from defenders – our team-side-gap estimates may be biased" [PAGE 36]. Good.
p37: "Sportradar’s data sharing agreement explicitly prohibits the use of this data in the creation of new metrics" exact [PAGE 37].
p7: "the league does not provide information about which players are present on the playing field for each play" exact [PAGE 7].
p19: "the data available publicly from the NFL and obtained via nflscrapR is limited to only those players directly involved in the play" exact [PAGE 19].
p23: "to account for skilled rushing QBs minimizing the loss on sacks" exact [PAGE 23].
p28: "the 'one QB for each team' approach for defining replacement level leads to lower WAR values in general" exact? Source: "It is clear that the “one QB for each team” approach for defining replacement level leads to lower WAR values in general" [PAGE 28]. Good.
p3: "they will sacrifice scoring points for letting time run off the clock" exact. [PAGE 3].
p2: "not all yards are created equal" exact. [PAGE 2].
p9: "we propose modeling the probability for each of the scoring events directly" exact. [PAGE 9].
p16: "By taking the inverse of the logit we arrive at a play’s WP." [PAGE 16] maybe.
p18: "For scoring plays, we use the associated scoring event’s value y as V_f" exact [PAGE 18]. Good.
p21: "All models we use for division of credit are of this varying-intercept form" [PAGE 21]. Good.

Need maybe mention "QBHit" and "AirYards" from Table 4 p21. Good.

Need "retrocausal genealogy" maybe use "hindsight" not "retrocausal" in scientific sense. Retrocausal genealogy: how current WAR retroactively reinterprets earlier metrics and how earlier choices constrain present. Good.

Need "multi-week traps" maybe create list:
- Trap 1: Linearizing next-score: treating scoring as continuous. Source p10 says gaps and non-normality.
- Trap 2: Ignoring score differential: source p3/p11.
- Trap 3: Using box-score linear weights: source p4-5.
- Trap 4: Proprietary/human judgment: source p5.
- Trap 5: Ignoring repeated measures: source p20.
- Trap 6: Resampling plays not drives: source p27.
- Trap 7: Assuming participation: source p7/p19/p37.
- Trap 8: Replacement-level arbitrary: source p24-26/p28.
Need "multi-week" maybe "multi-week research traps" not temporal. Good.

Need maybe include "crisis habit regression" term: I can define: under crisis (large score differential, endgame), teams regress to habit (clock-killing), which contaminates EP. Counter-trap: using WP to fix leverage may overfit low-leverage or omit team strength; including team strength would artificially inflate/deflate player contributions. Clock: explicit. Need cite.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal proof? We can write:
Let δ be play value, P player, X observed context, Z unobserved biomechanical/environmental/participation vector. The model estimates E[δ|P,X]. If Z affects δ and is correlated with P conditional on X, then E[δ|P,X] ≠ E[δ|P,X,Z], so the iPA is not causally identified. Units: δ in points or probability. This is formal and not toy. It is standard. Cite missing variables p7/p14/p36/p37. Good.

Need "RLVR" maybe "verifiable reward" scenario predictions. Use metrics: LOSO CV calibration error e, mean WAR, interval width. Ensure no betting.

Need overall word count. We can produce maybe 2500 words. Need "THINK_TRACE" >=400 words. We'll ensure.

Need not mention "spread" even in quotes? Source doesn't use spread. Avoid "odds". "win probability" okay. "score differential" okay. "total" avoid? The word "total" appears in source (total WAR) but not betting total. The invariant says never mention totals. Hmm "total" could be interpreted as betting totals. We should avoid the word "total" as much as possible? It's hard: "total WAR" from source. But the invariant says never mention spreads, totals, moneylines, or odds. To be safe, avoid "total" word? But source has "total WAR". We can say "aggregate WAR" instead of total WAR. Avoid "over/under". Avoid "spread" even in "score differential" no. Avoid "odds" (log-odds? That's statistical odds ratio; the invariant likely means betting odds. But it says "odds" generally. To be safe, avoid "odds" word? But multinomial logit uses log-odds. Could say "logit" instead of log-odds. Use "logit transformation" not "odds". Avoid "odds ratio". Good. Avoid "moneyline". Avoid "totals". Avoid "total" word? Use "aggregate" or "sum". But equations use \sum, okay. Text "sum" fine. Avoid "total". In quotes? None. Good.

Need maybe "points per win" is not betting. Fine.

Need ensure no "spread" in "score differential". Good.

Need answer. Need include XML tags. Let's draft carefully.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" must include formal LaTeX, units, page citations, breakdown. We'll include many equations. Need maybe use `\[
...
\]` in XML. Fine.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit. Let's write ~700 words.

Let's compose:

<THINK_TRACE>
The paper's inferential chain is: public play-by-play -> state X -> next-score distribution -> EP -> WP -> play value δ -> multilevel player intercepts -> replacement -> wins -> uncertainty. I audit each link. Eq (1)-(3) [PAGE 9-11] define Y categories and EP = E[Y|X]. The key move is classification, not linear regression: "we propose modeling the probability for each of the scoring events directly" [PAGE 9]. The gray zone is that EP is a conditional expectation over a discrete, half-specific next score; it is not a causal effect of a player. The weighting Eq4 [PAGE 11] addresses score-differential behavior: "they will sacrifice scoring points for letting time run off the clock" [PAGE 3]; the authors "don't exclude any observations but instead use a weighting approach" [PAGE 11]. But weights combine score differential and drive distance with equal emphasis (p12), an assumption. Calibration Eq5-7 [PAGE 12-13] uses LOSO CV and 5% bins; e≈0.013 [PAGE 13]. The audit: calibration is necessary but not sufficient for player credit; a well-calibrated EP can still misallocate credit.

WP uses EP as input and a GAM Eq10 [PAGE 16]. The paper intentionally excludes team strength to avoid artificial inflation/deflation [PAGE 15]; that is a bias-variance tradeoff. Play value δ=V_f - V_i Eq11 [PAGE 18]. For scoring plays V_f = y; for air/YAC split, time adjustment 5.7 s [PAGE 18]. The multilevel model Eq12-13 [PAGE 20] uses varying intercepts for QBs, receivers, defenses; partial pooling addresses "plays themselves are not independent" [PAGE 20]. The credit model Eq15-18 [PAGE 22-23] separates air/YAC and QB/non-QB rush; T is team-side-gap proxy, not individual lineman. Replacement Eq20-21 [PAGE 26] and wins Eq22 [PAGE 26-27] convert points to wins via β_S. Uncertainty resamples drives Eq? [PAGE 27], not plays. Gray-zone audit: Eq19 as printed has iPAAp,rush = κp,rush · iPAp,air, likely typographical; context and Eq18 indicate iPAp,rush. This is a source-internal correction, not a new metric. The largest breakdown regimes are: unobserved participation [PAGE 7,19], weather missing [PAGE 14], RB cutback selection [PAGE 36], replacement-level definition [PAGE 28], and proprietary participation restrictions [PAGE 37]. These are not minor caveats; they bound the claim to offensive skill players and team-side-gap proxies.
</THINK_TRACE>

Need ">=400 words" yes.

Need "SOURCE_OPERATORS_AND_EQUATIONS": detailed. Use equations and units.

Let's draft full. Need ensure "verbatim quotes" exact. We'll include quotes with citation. Need be careful quote punctuation. Use quotation marks. Good.

Potential issue: "log(P(Y=...)/P(...))" uses "P" not "odds". Fine.

Need "Breakdown regimes" for each. Could be bullets.

Let's write source section:

- Notation: X = (Down, Seconds, Yardline, log(YTG), GTG, UTM) [PAGE 10]. Y set Eq1. Units: Down ordinal, seconds s, yardline yards from end zone, log(YTG) log(yards) dimensionless? Actually log of yards; GTG/UTM indicators. EP points.
- Multinomial Eq2. Units logit dimensionless. Assumption IIA? Multinomial logit assumes independence of irrelevant alternatives? The paper doesn't mention. We can mention "multinomial logit's IIA is an implicit assumption; it can break if scoring events substitute non-proportionally." Is that a breakdown? Yes. Cite Eq2. Good.
- Eq3.
- Weight Eq4 and drive weights. Units dimensionless. Assumption equal emphasis. Breakdown max/min and arbitrary.
- Calibration Eq5-7. Units probability. e≈0.013; ordinal e≈0.022 [PAGE 13]. Breakdown bin choice, sparse events.
- PAT/FG Eq8-9. Units probability, points. Breakdown distance-only, no weather, fixed 8 yards/5.07s.
- WP Eq10. Units: E[S] points, s_h seconds, E[S/(s_g+1)] points/second, h categorical, u binary, timeouts count. Assumption no team strength [PAGE 15]. Breakdown endgame timeouts, calibration by quarter.
- δ Eq11. Units points or probability. Scoring plays y. Air/YAC split. Breakdown state transition.
- Multilevel Eq12-13. Units points/prob. Assumption normal, exchangeability within group. Breakdown small n, nonindependence, positional heterogeneity.
- Passing Eq14-16. Units. Assumption both QB and receiver credit both. Breakdown incomplete pass assignment, no causal separation.
- Rushing Eq17-18. Units. Assumption non-QB rushes designed; QB model includes sacks. Breakdown cannot separate designed QB runs from scrambles; T proxy.
- iPAA/iPAR Eq19-21. Units points/prob. Note typo. Replacement Eq20-21. Breakdown threshold.
- Wins Eq22. Units wins = β0 + βS points; βS wins/point; reciprocal points/win. Breakdown linear season-level, no causal.
- Uncertainty drive resampling. Units distribution. Breakdown drive exchangeability.

Need maybe "source operators" in one paragraph.

Need "RETROCAUSAL_GENEALOGY" ~500 words. Include lineage and traps. Use citations. Need maybe "retrocausal" word.

Need "RECURSIVE_THEORY_OF_MIND" ~400 words. Include crisis habit regression vs counter-trap vs clock. Use citations.

Need "CROSS_LAYER_VETO_ADJUDICATION" ~500 words. Include formal identification inequality. Use citations.

Need "RLVR_COUNTERFACTUAL_VETOES" ~400 words. Three scenarios with predictions. Use citations.

Let's ensure no "odds". Use "logit" not log-odds. Avoid "total". Use "aggregate". Avoid "spread". Avoid "moneyline". Avoid "over". The word "over" appears in "over the course" but not betting. "over" alone maybe okay. Avoid "under" maybe source has "under two minutes". That's fine, not betting total. "over" as in "over the course" not a line. Fine.

Need maybe "points per win" not betting. Good.

Need "ZERO TOY EQUATIONS" - we have standard equations. Avoid invented ratios. Good.

Need "VERBATIM QUOTES" - exact. Check quote from p11: "we don’t exclude any observations but instead use a weighting approach." Source text: "we don’t exclude any observations but instead use a weighting approach." Yes.
p3: "they will sacriﬁce scoring points for letting time run off the clock" has ligature. We can quote "they will sacrifice scoring points for letting time run off the clock" (normalized). Verbatim? The source has "sacriﬁce" with fi ligature. Normalizing is fine. Use exact words.
p7: "the league does not provide information about which players are present on the playing ﬁeld for each play" has fi. Normalize.
p19: "the data available publicly from the NFL and obtained via nflscrapR is limited to only those players directly involved in the play" exact?
Source: "Instead, the data available publicly from the NFL and obtained via nflscrapR is limited to only those players directly involved in the play, plus contextual information about the play itself." Yes.
p27: "we resample entire team drives" exact? Source: "Rather than resampling plays in which a particular player is involved to arrive at estimates for their performance variability, we resample entire team drives." Yes.
p28: "the “one QB for each team” approach for defining replacement level leads to lower WAR values in general" exact. Good.
p36: "selection bias at the RB level" exact. Good.
p37: "Sportradar’s data sharing agreement explicitly prohibits the use of this data in the creation of new metrics" exact. Good.
p14: "this is a rudimentary field goal model only taking distance into account" exact? Source: "we note that this is a rudimentary field goal model only taking distance into account." Good.
p13: "resulting in e ≈0.013" exact.
p13: "e ≈0.022" exact.
p15: "every game starts with each team having a 50% chance of winning" exact.
p20: "the plays themselves are not independent" exact.
p23: "to account for skilled rushing QBs minimizing the loss on sacks" exact.
p18: "For scoring plays, we use the associated scoring event’s value y as V_f" exact? Source: "For scoring plays, we use the associated scoring event’s value y as V f in place of the following play’s EP". Good.
p21: "All models we use for division of credit are of this varying-intercept form" exact. Good.

Need maybe "source operators and equations" include "s(k)" smooth function. Good.

Need answer now. Ensure XML tags exact. Use no markdown? XML sections can contain markdown-like equations. Fine.

Let's write final with enough depth. Need check word count: Think trace ~650, Source ~1200, Genealogy ~600, Recursive ~500, Cross ~600, RLVR ~500 = ~4050 words. Good.

Need avoid "total" word. Let's scan: "total WAR" avoid; "total" in "total individual points" maybe avoid. Use "aggregate". "sum" okay. "total" not necessary. In equations \sum. Good. Avoid "odds" entirely. Avoid "spread". Avoid "moneyline". Avoid "over/under". Good.

Need not mention "betting". Avoid.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is: public play-by-play → game-state covariates \(X\) → next-score event distribution → expected points \(EP\) → win probability \(WP\) → play value \(\delta_{f,i}\) → multilevel player intercepts → replacement-level comparison → wins → uncertainty. I audit each link for identification and breakdown.

The first move is to treat the next scoring event as a categorical response. The source defines seven events from the possession team’s perspective: touchdown, field goal, safety, no score, opponent safety, opponent field goal, opponent touchdown [PAGE 9–11]. The authors argue that “we propose modeling the probability for each of the scoring events directly” [PAGE 9], rather than regressing point value linearly on covariates. This is important because the scoring values are discrete and separated, so a Gaussian residual model is misspecified. The expected-points operator is the conditional expectation
\[
EP_i=\mathbb{E}[Y_i\mid X_i]=\sum_{y\in\mathcal{Y}} y\,P(Y_i=y\mid X_i),
\]
with \(y\) in points and \(P\) dimensionless [PAGE 11]. The gray-zone audit is that \(EP_i\) is a contextual expectation, not a causal player effect. A well-calibrated \(EP\) model can still misallocate credit among players.

The second move is to weight observations. The source says teams “will sacrifice scoring points for letting time run off the clock” [PAGE 3], so the authors “don’t exclude any observations but instead use a weighting approach” [PAGE 11]. The weight is a scaled function of absolute score differential, plus a scaled function of drive distance to the next score [PAGE 11–12]. The audit point is that combining the two weights with equal emphasis is a modeling choice, not an identified law. The calibration operator bins predicted probabilities in five-percent increments and averages absolute bin error, yielding \(e\approx 0.013\) under leave-one-season-out cross-validation [PAGE 12–13]. An ordinal logistic alternative is reported at \(e\approx 0.022\) [PAGE 13], which supports the multinomial choice but does not prove causal credit.

The third move is win probability. The GAM uses expected score differential, seconds remaining in game and half, a time ratio, half indicators, the under-two-minute indicator, and timeouts [PAGE 16]. The paper deliberately excludes team strength because “every game starts with each team having a 50% chance of winning” [PAGE 15]; including team strength would artificially inflate or deflate player contributions. That is a bias–variance tradeoff, not a neutral choice.

The fourth move is play value:
\[
\delta_{f,i}=V_f-V_i,
\]
with \(V\) in points for EPA or probability for WPA [PAGE 18]. For scoring plays, \(V_f\) is the scoring event value \(y\) [PAGE 18]. For passing plays, the source splits air yards and yards after catch and adjusts time by 5.7 seconds for incomplete passes [PAGE 18]. The audit point is that this split is a credit convention; it does not identify quarterback versus receiver causal contributions.

The fifth move is multilevel credit. The source uses varying intercepts for QBs, receivers, rushers, team-side-gaps, and opposing defenses, with partial pooling [PAGE 20–23]. The rationale is that “the plays themselves are not independent” [PAGE 20]. The gray zone is that partial pooling shrinks small-sample players toward group means, which is desirable for stability but can hide true outliers. The team-side-gap term is a proxy for blocking, not individual linemen [PAGE 23]. The source itself notes “selection bias at the RB level” for side-gap estimates [PAGE 36].

The sixth move is replacement and wins. The source computes individual points/probability above replacement by subtracting a replacement shadow [PAGE 26], then converts points to wins via a season-level linear model of wins on score differential [PAGE 26–27]. The audit point is that replacement level is definition-dependent: the “one QB for each team” rule “leads to lower WAR values in general” [PAGE 28]. Therefore WAR is a scale with a chosen baseline, not an absolute physical quantity.

The largest breakdown regimes are unobserved player participation [PAGE 7, 19], missing weather data [PAGE 14], RB cutback selection [PAGE 36], replacement-level sensitivity [PAGE 28], and proprietary participation-data restrictions [PAGE 37]. These bound the paper’s claim to offensive skill players and team-side-gap proxies. There is also a likely typographical issue in Eq. 19: the printed rush line uses \(iPA_{p,air}\) where context implies \(iPA_{p,rush}\) [PAGE 24]. That is a source-internal correction, not a new metric.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s core operators are: multinomial logit classification, conditional expectation, calibration-error averaging, GAM smoothing, state-difference valuation, varying-intercept partial pooling, replacement-shadow subtraction, reciprocal points-per-win conversion, and drive-level resampling. Units are stated below.

**1. Next-score event space and EP.** The response is
\[
Y\in\{\text{TD}(+7),\text{FG}(+3),\text{Safety}(+2),\text{No Score}(0),
-\text{Safety}(-2),-\text{FG}(-3),-\text{TD}(-7)\},
\]
with point values in points and events from the possession team’s perspective [PAGE 9–11]. The multinomial model uses six logits relative to “No Score”:
\[
\log\frac{P(Y=y\mid X)}{P(Y=\text{No Score}\mid X)}=X\cdot\beta_y,
\]
where the left side is dimensionless and \(\beta_y\) is a coefficient vector [PAGE 11]. Then
\[
EP=\mathbb{E}[Y\mid X]=\sum_y y\,P(Y=y\mid X),
\]
in points [PAGE 11]. Assumptions: next score within the same half, PATs handled separately, QB kneels assigned zero. Breakdown regimes: nonstationary scoring environment, fixed touchdown value of 7, sparse event cells, and multinomial logit’s implicit substitution structure. The authors note the discrete gaps motivate classification rather than linear regression [PAGE 10].

**2. Observation weights.** For play \(i\), with score differential \(S_i\),
\[
w_i=w(S_i)=\frac{\max_i(|S_i|)-|S_i|}{\max_i(|S_i|)-\min_i(|S_i|)},
\]
dimensionless on \([0,1]\) [PAGE 11]. A drive-distance weight \(D_i=d_{\text{next score}}-d_i\) is scaled similarly and combined with \(w_i\) [PAGE 11–12]. Assumption: equal emphasis on score differential and drive distance. Breakdown: max/min scaling is sample-dependent; equal weighting is a stated choice left “for future work” [PAGE 12].

**3. Calibration error.** For event \(y\) and bin \(b\),
\[
e_{y,b}=|\hat P_b(Y=y)-P_b(Y=y)|,
\]
\[
e_y=\frac{1}{n_y}\sum_b n_{y,b}e_{y,b},\qquad
e=\frac{1}{n}\sum_y n_y e_y,
\]
with \(e\) in probability units [PAGE 12–13]. The selected model yields \(e\approx 0.013\); the ordinal alternative yields \(e\approx 0.022\) [PAGE 13]. Breakdown: five-percent binning, sparse events, and calibration not guaranteeing causal player credit.

**4. PAT and field-goal override.** For kick distance \(k\) in yards,
\[
\log\frac{P(M)}{1-P(M)}=s(k),
\]
with \(P(M)\) dimensionless and \(s(\cdot)\) a smooth GAM term [PAGE 14]. Field-goal EP is
\[
EP_{\text{FG attempt}}=P(M)\cdot 3+(1-P(M))\cdot(-1)\cdot \mathbb{E}[Y\mid X=m],
\]
in points, where \(m\) adjusts for an eight-yard field-position change and 5.07 seconds [PAGE 14]. Assumption: missed field goal gives opponent possession at that adjusted state. Breakdown: the source states “this is a rudimentary field goal model only taking distance into account” and notes weather data “is not made available by the NFL” [PAGE 14].

**5. Win probability GAM.** With \(E[S]=EP+S\), game seconds \(s_g\), half seconds \(s_h\), half \(h\), under-two-minute indicator \(u\), and timeouts \(t_{off},t_{def}\),
\[
\log\frac{P(\text{Win})}{P(\text{Loss})}
=s(E[S])+s(s_h)\cdot h+s\!\left(E\!\left[\frac{S}{s_g+1}\right]\right)
+h\cdot u\cdot t_{off}+h\cdot u\cdot t_{def},
\]
where \(E[S]\) is points, \(s_h\) and \(s_g\) are seconds, \(E[S/(s_g+1)]\) is points per second, timeouts are counts, and \(h,u\) are categorical/indicator terms [PAGE 16]. Assumption: no team-strength indicators, so “every game starts with each team having a 50% chance of winning” [PAGE 15]. Breakdown: sparse endgame states, smooth-term overfitting, and the intentional omission of team strength.

**6. Play value.** 
\[
\delta_{f,i}=V_f-V_i,
\]
with \(V\) in points for EPA or probability for WPA [PAGE 18]. For scoring plays, \(V_f\) is the scoring event value \(y\) [PAGE 18]. For completions, air-yard and YAC values are split using a 5.7-second incomplete-pass adjustment [PAGE 18]. Breakdown: the state transition must be correctly specified; the air/YAC split is a credit convention.

**7. Multilevel credit.** The simple two-group model is
\[
\delta_{f,i}\sim \text{Normal}(Q_{q[i]}+C_{c[i]}+X_i\cdot\beta,\ \sigma^2_\delta),
\]
\[
Q_q\sim \text{Normal}(\mu_Q,\sigma^2_Q),\qquad
C_c\sim \text{Normal}(\mu_C,\sigma^2_C),
\]
with \(\delta\) in points or probability [PAGE 20]. The source says “All models we use for division of credit are of this varying-intercept form” [PAGE 21]. Assumptions: normal response, partial pooling, group exchangeability. Breakdown: small group sizes, nonindependence, positional heterogeneity, and omitted player-presence information.

**8. Passing models.** Define
\[
\Delta_{air}=\delta_{f,i,air}\cdot 1(\text{completion})+\delta_{f,i}\cdot 1(\text{incompletion}),
\]
\[
\Delta_{yac}=\delta_{f,i,yac}\cdot 1(\text{completion})+\delta_{f,i}\cdot 1(\text{incompletion}),
\]
with \(\Delta\) in points or probability [PAGE 22]. The air model is
\[
\Delta_{air}\sim \text{Normal}(Q_{air,q[i]}+C_{air,c[i]}+F_{air,\nu[i]}+A_i\cdot\alpha,\ \sigma_{\Delta air}),
\]
and the YAC model is analogous with \(B_i\) including air yards and receiver-position interactions [PAGE 22–23]. Assumption: both QB and receiver receive credit for both air and YAC components. Breakdown: incomplete passes receive the observed \(\delta\) in both models; this is a convention, not a causal decomposition.

**9. Rushing models.** QB rushing:
\[
\delta_{f,i}\sim \text{Normal}(Q_{rush,q[i]}+F_{rushQ,\nu[i]}+\Gamma_i\cdot\gamma,\ \sigma_{\delta rushQ}),
\]
including scrambles, designed runs, and sacks “to account for skilled rushing QBs minimizing the loss on sacks” [PAGE 23]. Non-QB rushing:
\[
\delta_{f,i}\sim \text{Normal}(H_{\iota[i]}+T_{\tau[i]}+F_{rush,\nu[i]}+P_i\cdot\rho,\ \sigma_{\delta rush}),
\]
where \(T\) is a team-side-gap proxy [PAGE 23]. Assumption: all non-QB rushes are designed. Breakdown: designed QB runs and scrambles cannot be consistently separated; \(T\) is not an individual lineman.

**10. iPA, iPAR, and wins.** 
\[
iPAA_{p,air}=\kappa_{p,pass}\cdot iPA_{p,air},\quad
iPAA_{p,yac}=\kappa_{p,pass}\cdot iPA_{p,yac},\quad
iPAA_{p,rush}=\kappa_{p,rush}\cdot iPA_{p,rush},
\]
with \(\kappa\) a count and iPA in points or probability [PAGE 24]. The printed Eq. 19 uses \(iPA_{p,air}\) in the rush line; context and Eq. 18 imply \(iPA_{p,rush}\), so this is a typographical audit point. Replacement shadow:
\[
iPAA^{repl}_{p,air}=\kappa_{pass}\cdot iPA^{repl}_{air},\quad
iPAR_{p,air}=iPAA_{p,air}-iPAA^{repl}_{p,air},
\]
and similarly for YAC and rush [PAGE 26]. Wins conversion:
\[
\text{Wins}_t=\beta_0+\beta_S S_t+\varepsilon_t,\qquad
\varepsilon_t\sim \text{Normal}(0,\sigma^2),
\]
where \(\beta_S\) is wins per point and \(1/\beta_S\) is points per win [PAGE 26–27]. Breakdown: season-level linearity, year-specific fits, and no causal identification.

**11. Uncertainty.** The source resamples “entire team drives” and uses 1000 simulated seasons [PAGE 27]. Assumption: drive-level exchangeability captures within-drive dependence. Breakdown: team decision-making, play-calling dependence, and drive-level correlation can make intervals too narrow or too wide.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a retroactive reinterpretation of earlier football metrics through a reproducible, public-data, play-value lens. Carter and Machol (1971) and Carroll et al. (1988) established that field position and down matter and that “not all yards are created equal” [PAGE 2]. Burke (2009) popularized expected points and EPA, but the source notes that many public descriptions do not give full statistical detail [PAGE 3]. Goldner (2017) used Markov absorption probabilities; Lock and Nettleton (2014) used random forests for win probability; Causey (2015) used exact-neighbor smoothing and bootstrap uncertainty [PAGE 3]. The nflWAR paper then retrofits those ideas into a single pipeline: multinomial next-score classification, GAM win probability, multilevel player credit, replacement baseline, and drive resampling.

The genealogy also runs through baseball and hockey. The paper cites openWAR and Baumer et al. (2015) for replacement-level and resampling logic [PAGE 6, 26–27], Thomas and Ventura for WAR conversion [PAGE 26], and multilevel models in baseball and hockey [PAGE 20]. The retrocausal effect is that earlier box-score metrics are recast as special cases with ad hoc weights. Passer rating and ANY/A are linear combinations with “outdated and/or ad hoc weights” [PAGE 4]; fantasy points use “many unjustified or ad hoc weights” [PAGE 5]; Pro Football Focus grades are “solely based on human judgment and proprietary” [PAGE 5]; Pro-Football-Reference AV has subjective components and arbitrary thresholds [PAGE 5–6]. The new framework says: if you want reproducibility, you need a public data standard, a calibrated play-value model, and an explicit replacement baseline.

Multi-week research traps are visible in the lineage. Trap 1: linearizing the next-score response. The source explicitly avoids this because scoring events are discrete and separated [PAGE 10]. Trap 2: ignoring score differential and clock behavior. The source notes that leading teams “sacrifice scoring points for letting time run off the clock” [PAGE 3] and weights observations rather than deleting them [PAGE 11]. Trap 3: treating repeated player observations as independent. The source states “the plays themselves are not independent” [PAGE 20] and uses partial pooling. Trap 4: resampling plays instead of drives. The source resamples “entire team drives” to preserve within-drive dependence [PAGE 27]. Trap 5: assuming public data identifies all 22 players. The league “does not provide information about which players are present on the playing field for each play” [PAGE 7], and public data are “limited to only those players directly involved in the play” [PAGE 19]. Trap 6: treating replacement level as natural. The QB distribution is bimodal, and the “one QB for each team” rule “leads to lower WAR values in general” [PAGE 28]. Trap 7: assuming side-gap estimates are clean blocking measures. The source flags “selection bias at the RB level” [PAGE 36]. Trap 8: assuming proprietary participation data can be used freely. The source states “Sportradar’s data sharing agreement explicitly prohibits the use of this data in the creation of new metrics” [PAGE 37]. These traps are multi-week because each one can survive a full modeling cycle and only appear under calibration, ablation, or out-of-sample testing.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is about modeling agents who model the clock. At the first level, a play has a physical outcome. At the second level, the offense chooses a play conditional on score, time, downs, and field position. At the third level, the defense anticipates that choice. At the fourth level, the analyst estimates player effects while controlling for those choices. At the fifth level, teams and players adapt to the evaluation regime. The paper’s EP model is a level-four object: it conditions on down, distance, field position, seconds remaining in the half, goal-to-go, and under-two-minute status [PAGE 10]. The WP model adds game seconds, half seconds, timeouts, and a time ratio [PAGE 16].

Crisis-habit regression appears when the game state overwhelms normal play-calling. The source says that when a team leads by a large number of points late, “they will sacrifice scoring points for letting time run off the clock” [PAGE 3]. In that crisis regime, the habit is clock preservation, not point maximization. If the model treats those plays as ordinary scoring opportunities, it will misread the next-score distribution. The paper’s response is weighting, not deletion: “we don’t exclude any observations but instead use a weighting approach” [PAGE 11]. That is a partial fix. The audit point is that the weight is a scaled score-differential function plus a scaled drive-distance function, combined with equal emphasis [PAGE 11–12]. Equal emphasis is a modeling assumption, not a discovered behavioral law.

The counter-trap is overcorrection. If the analyst uses win probability to fix leverage, the model may overfit endgame noise or erase legitimate high-leverage performance. The paper avoids team-strength indicators because including them would “artificially inflate (deflate) the contributions made by players on bad (good) teams” [PAGE 15]. That is a deliberate counter-trap: do not let team quality absorb player credit. But the cost is that the model cannot distinguish a good player on a bad team from a bad player on a good team as cleanly as a team-adjusted model might. The source acknowledges this as a limitation and leaves proprietary or participation data as extensions [PAGE 36–37].

The clock is the third recursive term. EP uses seconds remaining in the half and an under-two-minute indicator [PAGE 10]. WP uses game seconds, half seconds, timeouts, and the expected score time ratio [PAGE 16]. The clock changes the agent’s objective: before the two-minute warning, a team may play for points; after it, a team may play for time. The source’s WP calibration by quarter is designed to catch this [PAGE 16–17]. The recursive failure mode is a model that learns “No Score” too strongly in endgame states and then undercredits legitimate scoring drives. The source reports that including seconds remaining and the under-two-minute indicator improved calibration, “particularly with regards to the ‘No Score’ event” [PAGE 13]. That is evidence that the clock layer matters.

A further recursive issue is evaluation feedback. Once WAR is published, players, agents, and teams may respond to it. The paper’s own results show EPA-based WAR tends to be higher than WPA-based WAR, “particularly for QBs” [PAGE 28], which is consistent with performance in lower-leverage states being rewarded by EPA. If decision-makers optimize for the metric rather than for wins, the metric’s mapping to game outcomes can drift. The paper’s defense is to focus on WPA-based WAR because of “its direct relationship to winning games” [PAGE 28]. That is a theory-of-mind choice: model the agent’s objective, not just the agent’s output.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer vetoes are identification constraints. Let \(\delta\) be play value in points or probability, \(P\) the player, \(X\) observed context, and \(Z\) an unobserved biomechanical, participation, or environmental vector. The model estimates \(\mathbb{E}[\delta\mid P,X]\). If \(Z\) affects \(\delta\) and is correlated with \(P\) conditional on \(X\), then
\[
\mathbb{E}[\delta\mid P,X]\neq \mathbb{E}[\delta\mid P,X,Z],
\]
so the player intercept is not causally identified. This is not a toy ratio; it is the standard omitted-variable condition. The source’s own caveats supply the \(Z\)’s.

**Physical/biomechanical layer.** The passing models include QB hit, pass location, air yards, receiver position, and interactions between air yards and receiver position [PAGE 21–22]. The QB rushing model includes sacks “to account for skilled rushing QBs minimizing the loss on sacks” [PAGE 23]. These are biomechanical controls, but they are coarse. The model does not observe blocking assignments, pressure timing, receiver separation, or defender leverage. Therefore it cannot adjudicate individual offensive-line biomechanics. The team-side-gap term is explicitly a proxy: \(T\) is a combination of possession team, rush gap, and direction [PAGE 22–23]. The source warns that “selection bias at the RB level” can bias team-side-gap estimates because running backs run toward holes and away from defenders [PAGE 36]. Veto: no claim of individual lineman WAR or isolated blocking skill from this public-data model.

**Participation/data layer.** The NFL “does not provide information about which players are present on the playing field for each play” [PAGE 7]. Public data are “limited to only those players directly involved in the play” [PAGE 19]. The source’s extension to all positions requires participation data [PAGE 36–37], but Sportradar’s agreement “explicitly prohibits the use of this data in the creation of new metrics” [PAGE 37]. Veto: no defensive-player WAR, no off-ball offensive-player WAR, and no individual lineman WAR from the public pipeline. The paper is explicit that its primary focus is offensive skill players: QB, RB, WR, and TE [PAGE 6].

**Environmental/weather layer.** The field-goal model is distance-only, and the source says “this is a rudimentary field goal model only taking distance into account” while noting that weather data “is not made available by the NFL” [PAGE 14]. Veto: no weather-adjusted kicking claim, no wind/precipitation/temperature adjustment, and no claim that the FG model is environmentally complete. A weather-sensitive residual pattern would not be adjudicable inside the source model.

**Replacement/scale layer.** WAR is relative to a chosen replacement level. The QB distribution is bimodal, and the “one QB for each team” approach “leads to lower WAR values in general” [PAGE 28]. Veto: no absolute cross-era or cross-position WAR claim without stating the replacement rule. The ten-percent cutoff and one-QB-per-team rule are different scales [PAGE 25–28].

**Uncertainty layer.** Drive resampling assumes drives are the relevant exchangeable unit [PAGE 27]. If within-drive dependence is strong, play-level resampling would understate uncertainty; if drives are heterogeneous across teams, drive-level resampling may still misstate uncertainty. Veto: no claim of exact interval coverage without a drive-level ablation. The source itself calls this “a simple viewpoint of possible play correlations” and leaves exploration for future work [PAGE 27].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
These are verifiable reward checks: each scenario specifies a counterfactual model change, a measurable outcome, and a prediction that would veto the source claim if violated. No market variables are used.

**Veto 1: Multinomial versus ordinal/linear next-score model.** Counterfactual: replace the multinomial logit in Eq. 2 with an ordinal logit or a linear regression on point value, holding the same covariates and LOSO CV folds. Verifiable reward: calibration error \(e\) from Eqs. 5–7, plus calibration plots by event. Prediction: the multinomial model should retain lower calibration error, approximately \(e\approx 0.013\), while the ordinal alternative should be worse, approximately \(e\approx 0.022\), as reported [PAGE 13]. Veto condition: if the ordinal or linear model achieves \(e\le 0.013\) and equally diagonal calibration across all seven events, the source’s claim that direct event modeling is more appropriate is vetoed. This is verifiable because the paper provides the exact event set, covariates, binning rule, and LOSO CV protocol [PAGE 10–13].

**Veto 2: Replacement-level definition perturbation.** Counterfactual: recompute 2017 QB WAR under the ten-percent involvement cutoff and under the one-QB-per-team rule, holding the play-value and multilevel models fixed. Verifiable reward: mean and median QB WAR, distribution overlap, rank correlation, and the proportion of simulations in which a player is above replacement. Prediction: the one-QB-per-team rule should produce lower WAR values in general, because some late-season backups outperform opening starters but are labeled replacement level under that rule; the source states this directly [PAGE 28]. Veto condition: if the two replacement rules produce indistinguishable WAR distributions or if the one-QB rule produces higher WAR for the same players, the claimed replacement-level sensitivity is vetoed. This is verifiable from the source’s own replacement counts and simulation design [PAGE 25–28].

**Veto 3: Drive-level versus play-level resampling.** Counterfactual: recompute the 1000 simulated seasons using play-level resampling instead of drive-level resampling, keeping the multilevel model and replacement rule fixed. Verifiable reward: interval width for player WAR, rank stability across simulations, and coverage of the observed 2017 estimate. Prediction: if within-drive dependence is positive, drive-level intervals should differ from play-level intervals, typically wider or more rank-stable for players whose usage is concentrated in drives; the source chose drive-level resampling precisely to preserve “the effects of any within-drive factors, such as play sequencing or play-calling tendencies” [PAGE 36] and states “we resample entire team drives” [PAGE 27]. Veto condition: if play-level and drive-level intervals are numerically identical and player rankings are unchanged, the drive-level dependence assumption is vetoed. This is verifiable because the source specifies 1000 simulated seasons and the drive-resampling procedure [PAGE 27].

A fourth optional check, if weather data were available, would be to add weather covariates to the field-goal GAM. Prediction: the distance-only model should show residual calibration error correlated with weather in outdoor late-season games; the source calls the model “rudimentary” and distance-only [PAGE 14]. Veto condition: if weather covariates produce no measurable calibration improvement, the weather-omission concern is weakened for that sample. This is not part of the three required vetoes but is a natural cross-layer extension.
</RLVR_COUNTERFACTUAL_VETOES>
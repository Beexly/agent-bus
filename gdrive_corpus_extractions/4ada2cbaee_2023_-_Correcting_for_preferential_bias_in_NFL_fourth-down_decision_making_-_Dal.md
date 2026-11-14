---
source: "2023 - Correcting for preferential bias in NFL fourth-down decision making - Daly-Grafstein.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 9202
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with exact XML sections and >=1000 words. Must analyze source paper. No betting lines: but source includes spread/total as covariates. Invariant says ZERO BETTING LINES: never mention spreads, totals, moneylines, odds. We must avoid naming those? We can refer to "market-based team strength covariates" maybe avoid spread/total. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations, units, assumptions, breakdown regimes. Need >=400 words THINK_TRACE, total >=1000 words. Need sections:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...

Need ensure no betting line words. Hmm source says "spread" and "total line", but invariant says never mention spreads, totals, moneylines, odds. So we cannot quote those exact. But can cite page quotes that don't include betting terms. Need maybe mention "two market-derived covariates" but not name. Avoid "spread", "total", "line", "odds", "moneyline", "over/under". "line" appears in yard line; okay? Betting lines no. Yard line is not betting. Need avoid "Las Vegas closing spread and total lines". Quote around it? Can paraphrase: "market-derived team-strength covariates" not quote. But requirement cite exact quotes. We can quote other parts.

Need likely task is analyze paper for "drive source" maybe user expects frontier reasoning. Need be robust.

Need comply with "ZERO BETTING LINES" absolutely. We can discuss "proxies for team strength" without naming lines. Source page 5 includes "spread" etc; don't quote. Avoid "spread" anywhere. Avoid "total" as betting; but "total" appears in "In total 502..." Could use "overall". Avoid "line" as betting, but "yard line", "first down line" acceptable? Hmm "moneylines" no. "line" in "yard line" okay but maybe avoid "line" alone. Use "field position" and "yard-line" hyphen? That includes line. It's not betting line. Fine.

Need discuss formal equations. Need include equations from paper:
P(Y_i=1|X_i)=Φ(X_iβ) (1)
P(R_i=1|Z_i)=Φ(Z_iγ) (2)
Y_i^*=X_iβ+ε_i (3)
R_i^*=Z_iγ+ε_i^r (4)
(ε,ε^r)~N((0,0),(1 ρ; ρ 1)) (5)
Y_i=1 if Y_i^*>0; R_i=1 if R_i^*>0
arctan(ρ_i)=C_i κ (6)
Need note paper text says hyperbolic tangent link maps C_iκ to (-1,1), but arctan maps to (-π/2, π/2). Actually arctan(ρ)=Cκ inverse would be ρ=tan(Cκ), mapping to (-1,1). The paper says "hyperbolic tangent link" maybe error. We can flag gray-zone: stated "arctan(ρ_i)=C_iκ" and then "hyperbolic tangent link function maps C_iκ to interval (-1,1)." Mathematically, tanh maps real to (-1,1), arctan maps real to (-π/2,π/2). If equation is arctan(ρ)=Cκ, then ρ=tan(Cκ) with singularities at ±π/2; bounded interval (-1,1) only if Cκ∈(-π/4,π/4). So inconsistency. Need mention breakdown. This is important. Formal LaTeX.

Need units: probabilities dimensionless [0,1]; latent variables in probit scale standard normal units (dimensionless z-score); β,γ,κ inverse covariate units; ρ dimensionless correlation; time seconds; yards; score differential points; random effects log-odds? Actually probit latent scale. Need state.

Need assumptions: bivariate probit, MAR=ρ=0, MNAR, exclusion restriction/instrumental variable, selection probability 1 subset, Bayesian HMCMC, prior? Not detailed. Need breakdown regimes:
- ρ non-identifiability if X=Z and no instrument.
- arctan/tanh link singularities/range; tan blows up at ±π/2; if Cκ outside (-π/4,π/4), |ρ|>1 impossible.
- Linear predictor unbounded; probit tails; extrapolation.
- Must-go subset treated selection prob=1; 502/4368, 497 >99% went for it; if criteria misclassify, bias.
- Coach random effect with team-year single coach; multiple coaches choose most games; small sample shrinkage.
- Observational missing not at random; unmeasured tracking data, injuries, play selection.
- Difference range -0.15 to 0.09 probability points? It says difference between mean posterior probability estimates; not percentage points? It is probability units. Need say ±0.15 in probability (15 percentage points) etc.
- "naïve model over-aggressive in fourth and short in opponent's half, under-aggressive in fourth and long near opponent endzone or own half." Need cite.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need discuss Heckman 1976/1979, Rubin MAR 1976, Little & Rubin, Bastos et al generalized Heckman, Saulo et al bivariate symmetric Heckman, Puhani critique, Campbell et al Bayesian preferential testing, Ahn/Powell, Das/Newey/Vella nonparametric. NFL fourth-down lineage Romer 2006, Burke/NYT, Yam & Lopez 2019, Lopez 2020 tracking data, Baldwin nfl4th, nflfastR. Multi-week traps: treating observed go-for-it success as causal; ignoring selection; using MAR; overfitting coach effects; conflating "must-go" with choice; using market covariates as instruments; assuming constant ρ; ignoring nonparametric nonlinearity; small-sample coach rankings; selection probability=1 subset; extrapolation to team-specific decisions; weather? Need cross-layer.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This is GSE/GSI frontier. Need interpret as multi-agent recursive reasoning: coaches' decision preferences, self-selection, game script, clock. Crisis habit regression: coaches default conservative in high-leverage? Counter-trap: if model recommends more aggressive, opponents adapt, or model overcorrects; clock: time remaining, half_seconds_remaining, second_half, score differential. Need include theory of mind: coach knows team success probability, opponent knows coach tendency, analyst knows coach selection, model knows missingness. Need avoid betting. Need discuss "must-go" regimes and "choice" regimes. Use paper evidence: correlation positive early in halves, negative late; increases with score differential. Need maybe "Doug Pederson most aggressive random effect 0.278, go-for-it probability 0.671; Kyle Shanahan least -0.168, 0.499" from Table 1. But table says "fourth and 1 at midfield, tied game, start fourth quarter, 2021". We can cite. Need no betting.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. We need discuss physical constraints: fatigue, injury, offensive line, quarterback pressure, turf, wind, rain, temperature, altitude, crowd noise, clock. The paper lacks tracking/biomechanical/weather data. Need veto proof: any recommendation must be vetoed if unmodeled physical state dominates? We need formal. "Veto" as if recommendation from model should be overridden by physical constraints. Need include equations maybe:
For decision d, expected win prob ΔW(d)=...; veto if ∃v∈V with C_v > threshold? Need formal LaTeX. But no toy equations? We can state formal decision-theoretic veto rule with utility and constraints. Need avoid fake ratios. Use probability/information units. Need exact singularity regimes. Could define \mathcal{V}(x) = {v: P(win | d, v) < P(win | d', v) - δ}? Hmm.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? likely Reinforcement Learning with Verifiable Rewards? Need produce 3 counterfactual veto scenarios with predictions. They must be verifiable. Could be:
1. Held-out season calibration: fit model 2014-2020, test 2021; if bias-corrected calibration Brier score not improve by ≥? then veto. Predict out-of-sample Brier? Need not mention betting. We can say "calibration error" and "log loss" maybe.
2. Instrumental variable/placebo test: randomly permute selection indicators within game-state strata preserving coach effects; if estimated ρ distribution not distinguishable from placebo, veto. Predict placebo ρ centered zero; observed ρ outside 95% interval.
3. Tracking-data augmentation: add distance-to-first-down / defender proximity; if ρ shrinks toward zero beyond threshold and decisions flip? Veto if recommendations not stable. Predict |ρ| decreases, bias range shrinks.
Need exactly 3. Include predictions verifiable. Need units.

Need mention no betting lines. Avoid terms. Need no "odds". Need no "moneyline". Avoid "spread", "total". Avoid "Vegas". Avoid "closing". Avoid "market line". But can mention "two market-derived covariates" maybe "market-derived team-strength covariates" not specific. Is "market" okay? Invariant only betting lines. "Market-derived" might imply betting. Better say "external team-strength covariates" or "pregame team-strength proxies" without naming. But source says PFR data; we can say "two pregame team-strength proxies (not reproduced here to honor the no-betting-line constraint)". Hmm mentioning "not reproduced" okay but includes "betting-line" word? It says ZERO BETTING LINES never mention spreads totals moneylines odds. "betting-line" maybe not allowed. Avoid.

Need cite exact [PAGE N] markers and verbatim quotes. Need quotes:
- PAGE 1: "Fourth-down decisions are some of the most important decisions NFL coaches make during a game."
- PAGE 1: "we only observe fourth-down attempts conditional on teams being in a fourth-down situation and deciding to go-for-it."
- PAGE 2: "we frame this as a missing data problem, fitting a Heckman selection model to all fourth down play-by-play data from the 2014-2021 seasons, including situations where teams decided not to go-for-it."
- PAGE 3: "Data where there is dependence between missingness and the outcome is referred to as missing not at random (MNAR), and requires modelling of the missing data mechanism to avoid biased probability estimates"
- PAGE 3 equations maybe quote not needed? Need exact quote. Page 4: "The MAR assumption is equivalent to assuming 𝜌= 0"
- Page 4: "we decide to generalize the model to allow for the correlation 𝜌 to depend on game situation covariates"
- Page 5: "This resulted in 29,239 fourth down plays, of which teams attempted to go-for-it 4,368 times." (No betting terms? yes)
- Page 5: "In total 502 out of the 4,368 fourth down attempts in our data satisfy these criteria, of which 497 (>99%) went for it."
- Page 6: "fourth downs occurring during the start of the first or second half tend to have a positive correlation."
- Page 6: "near the end of the first and second halves, there tends to be a negative correlation between success probability and the decision to go-for-it."
- Page 6: "the correlation increases with the difference in score."
- Page 7: "Overall, there is between a -0.15 and 0.09 difference between the mean posterior probability estimates of the naive and Heckman models."
- Page 7: "the model that does not correct for preferential decision-making bias is over-aggressive in fourth and short situations in the opponent’s half, and under-aggressive in fourth and long situations near the opponent’s endzone or in a team’s own half."
- Page 8 table: "Doug Pederson to be the most aggressive coach, and Kyle Shanahan the least aggressive in our dataset."
- Page 9 example: "the naïve model gives the Seahawks a 58% chance of succeeding on a fourth down attempt, while the Heckman model only gives them a 50% chance." and "The Seahawks kicked a field goal, which according to the naïve model is the wrong choice, but the correct one according to the Heckman model."
- Page 9 second example: "the naïve model gives the Saints a 33% chance of succeeding on a fourth down attempt, while the Heckman model gives the Saints a 41% chance of succeeding." and "The naïve model recommends a field-goal attempt, which is what the Saints did, while the Heckman model recommends they go-for-it."
- Page 9-10: "we expect this preferential bias to decrease as the number of relevant covariates included in the model increases."
- Page 10: "Almost all sports data we collect is observational, conditional on players, coaches, and teams deciding to perform an action."

Need include exact [PAGE N] markers. Could use blockquotes. Ensure no betting terms in quotes. The quoted page 5 sentence includes "spread"? No, if quote just 29,239 sentence no. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX with units and page citations. Need perhaps define:
Let \(Y_i\in\{0,1\}\) denote fourth-down conversion success; \(R_i\in\{0,1\}\) selection to attempt; \(X_i\) outcome covariates; \(Z_i\) selection covariates; \(C_i\) correlation covariates. \(\Phi\) standard normal CDF. \(\beta,\gamma,\kappa\) parameter vectors on latent probit scale. Equations. Units: \(X_i\beta\) is dimensionless latent index; yards standardized mean 0 variance 1; time seconds standardized; score differential points standardized. \(\rho_i\) dimensionless correlation in [-1,1]. Need mention cell probabilities are dimensionless.

Need discussion of link inconsistency. Formal:
Paper writes \(\arctan(\rho_i)=C_i\kappa\). If taken literally, \(\rho_i=\tan(C_i\kappa)\). Since \(\rho_i\in(-1,1)\), admissible \(C_i\kappa\in(-\pi/4,\pi/4)\). But paper text says "hyperbolic tangent link function maps \(C_i\kappa\) to interval (-1,1)" [PAGE 4]. If intended \(\rho_i=\tanh(C_i\kappa)\), it is globally bounded but not equal to arctan inverse. This is a gray-zone audit. Need state no final equation can be both arctan and tanh without relabeling. This is a breakdown regime. Good.

Need also "Heckman models can suffer from collinearity issues when covariates in outcome and selection are identical" [PAGE 5]. Need quote. Need mention exclusion restriction. The paper uses game-situation variables in selection not outcome, but includes them in correlation; acknowledges weak instrument and treats subset selection prob=1. Need discuss identification. Formal: if \(Z_i\) equals \(X_i\) and no exclusion, \(\rho\) weakly identified. If \(C_i\kappa\) at boundary, tan singular. If selection probability=1 subset misclassified, likelihood contribution wrong. If \(\sigma_{coach}^2\to0\), coach rankings shrink; if large, overfit.

Need "RETROCAUSAL_GENEALOGY": Maybe discuss lineage from Heckman sample selection, Rubin missing data, NFL decision analysis. Need mention Romer 2006, Yam & Lopez 2019, Lopez 2020, Baldwin nfl4th. Need "retrocausal" maybe how future models (tracking data) retroactively reinterpret bias. Multi-week traps: time-scale of coach adaptation; week-to-week variability; injuries; play selection; dynamic in-game factors. Need include paper page 9-10 quote about within-team trend. Need cite exact: "even comparing within a team, we expect the same trend of positive and negative correlation seen in Figure 2." [PAGE 9-10]. Need discuss multi-week traps: if bias varies by week/team, league-wide coach effects are not causal; a model fit on weeks 1-8 may fail weeks 9-17 due to opponent adaptation, injuries, weather. Need maybe "multi-week trap" as temporal leakage: using season-level coach labels and team-year single coach can misattribute midseason coaching changes; paper says "If a team has multiple coaches in a season, we choose the one coaching for the most games" [PAGE 12]. This can create misclassification. Good.

Need "RECURSIVE_THEORY_OF_MIND": Need maybe define recursive levels:
Level 0: physical success probability \(p_i^*\)
Level 1: coach chooses go/kick based on perceived \(p_i\) and win probability.
Level 2: analyst models coach selection.
Level 3: coach anticipates analyst recommendation and opponent adaptation.
Level 4: league-wide equilibrium. Crisis habit regression: under late-clock deficit, coach defaults to conservative kick or forced go; model may learn negative \(\rho\) as "worse teams forced". Counter-trap: correcting bias may make model more aggressive in long-yardage; if defense anticipates, success probability drops; model's \(\rho\) changes. Clock: time remaining, half_seconds_remaining, second_half, timeouts. Need formal maybe:
\(p_i^{\text{obs}} = P(Y_i=1|R_i=1,X_i)\)
\(p_i^{\text{counterfactual}} = P(Y_i=1|X_i)\) marginal over selection.
The model estimates marginal via selection. If coach uses model, selection mechanism changes: \(R_i' = f(\hat p_i, W_i)\). Then \(\rho'\) not equal \(\rho\). This is Goodhart/reflexivity. Need mention units.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need physical/biomechanical/weather veto proof. We can define a formal veto set:
Let \(d\in\{\text{go},\text{kick}\}\) be decision. Let \(W(d;x,\omega)\) be win probability given state \(x\) and physical/weather vector \(\omega\). Model recommendation \(d^*=\arg\max_d W_{\text{model}}(d;x)\). A cross-layer veto \(V\) applies if there exists a physically admissible \(\omega\in\Omega_x\) with \(W(d^*;x,\omega)-W(d';x,\omega)<-\delta\), \(\delta>0\) in probability units. Or if safety constraint \(g(\omega)<0\). But "formal LaTeX equations" yes. Need not invent fake ratios. Use probabilities.

Need physical/biomechanical: offensive line pressure, quarterback injury, receiver separation, defender closing speed, turf, wind speed m/s, precipitation, temperature °C, altitude m, rest days, travel, snap count, etc. The paper lacks these. Veto proof: because \(X_i\) includes yards to go, field position, external strength proxies, time, score, timeouts, coach; no tracking/biomechanical/weather. Thus if unmodeled \(\omega\) affects both selection and success, \(\rho\) absorbs it; if \(\omega\) affects only success, outcome model misspecified; if only selection, selection model misspecified. Need exact singularity: if \(P(Y=1|X,\omega)\to0\) due to e.g. wind > threshold, model probabilities remain positive because probit \(\Phi(X\beta)>0\) for finite \(X\beta\); that's a breakdown. Actually probit >0 always. If physical veto says impossible, model cannot produce exactly zero. Need state.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable scenarios. Need be precise and testable. Use "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" - verifiable reward = objective test. We can frame as "veto scenarios" where model should be rejected if counterfactual prediction fails. Need include predictions:
1. Out-of-sample calibration across seasons: train 2014-2020, test 2021; compare Heckman vs naïve. Prediction: Heckman reduces mean absolute calibration error in short-yardage opponent-half and long-yardage own-half by at least 0.02 probability units; if not, veto the bias correction as non-generalizing. Need maybe "Brier score" improvement. But no source says. It's our counterfactual.
2. Placebo/negative-control selection shuffle within strata: permute \(R_i\) within strata of time, score, yards to go; refit; expected \(\rho\) placebo centered 0 with 95% interval; observed late-half negative and early-half positive outside. If not, veto because \(\rho\) may be artifact of covariates.
3. Tracking-data augmentation: add distance-to-first-down and defender proximity; prediction: |ρ| shrinks; if bias-corrected probabilities shift by >0.05 and decision flips in >? then veto league-wide model or require tracking. Need "verifiable predictions" with exact thresholds. Need avoid betting.

Need maybe also "weather veto": add wind/precip; if high-wind games show model overpredicts long attempts; veto. But exactly 3.

Need total >=1000 words. We can aim 2500-3500 words. Desired oververbosity 5 but prompt demands depth. Need not too long? We have enough. Need include all sections exactly. Use XML tags. No markdown? We can use markdown inside XML. Must ensure no betting words. Need scan for forbidden terms: "spread" not use. "total" not use? Invariant says never mention totals. Avoid word "total" entirely. Use "overall", "sum". "moneylines" avoid. "odds" avoid. "line" maybe appears "yard line" and "first-down line". "line" alone? Avoid "line" except yard line? Maybe "yard-line" is not betting. But to be safe, use "field position" and "yard marker" not line. The source quote page 2 says "closer to the first down line" but we can avoid quoting. Need not quote all. Avoid "spread" in "spread over" no. Avoid "total" even in "total line". Avoid "odds". Avoid "moneyline". Avoid "betting". We can say "market-derived" maybe not. Avoid "Las Vegas". Good.

Need exact [PAGE N] markers. Use [PAGE 1] etc.

Need "verbatim quotes" - ensure exact punctuation. We can quote sentences with no forbidden terms. For page 1 quote "Fourth-down decisions are some of the most important decisions NFL coaches make during a game." exact. Page 1 "we only observe fourth-down attempts conditional on teams being in a fourth-down situation and deciding to go-for-it." exact lower? Source has "we only observe fourth-down attempts conditional on teams being in a fourth-down situation and deciding to go-for-it." yes. Page 2 quote "we frame this as a missing data problem, fitting a Heckman selection model to all fourth down play-by-play data from the 2014-2021 seasons, including situations where teams decided not to go-for-it." exact? Source: "We frame this as a missing data problem, fitting a Heckman selection model to all fourth down play-by-play data from the 2014-2021 seasons, including situations where teams decided not to go-for-it." capital We. We can quote with capital.
Page 3 quote: "Data where there is dependence between missingness and the outcome is referred to as missing not at random (MNAR), and requires modelling of the missing data mechanism to avoid biased probability estimates" exact? Yes includes [11] after. Stop before [11]. Good.
Page 4 quote: "The MAR assumption is equivalent to assuming 𝜌= 0" exact includes weird. Good.
Page 4 quote: "we decide to generalize the model to allow for the correlation 𝜌 to depend on game situation covariates" exact.
Page 5 quote: "This resulted in 29,239 fourth down plays, of which teams attempted to go-for-it 4,368 times." exact. Good.
Page 5 quote: "In total 502 out of the 4,368 fourth down attempts in our data satisfy these criteria, of which 497 (>99%) went for it." Contains "In total" which has "total". Forbidden? It says never mention totals. This quote has "total" as word. Better avoid that quote. Use paraphrase not quote. Or quote "502 out of the 4,368 fourth down attempts in our data satisfy these criteria, of which 497 (>99%) went for it." Omit "In total". Is that verbatim? It changes start. We can quote substring exact: "502 out of the 4,368 fourth down attempts in our data satisfy these criteria, of which 497 (>99%) went for it." That is exact substring after "In total ". Fine.
Page 6 quote: "fourth downs occurring during the start of the first or second half tend to have a positive correlation." exact? Source: "We can see that fourth downs occurring during the start of the first or second half tend to have a positive correlation." Substring yes.
Page 6 quote: "near the end of the first and second halves, there tends to be a negative correlation between success probability and the decision to go-for-it." exact? Source: "Similarly, near the end of the first and second halves, there tends to be a negative correlation between success probability and the decision to go-for-it." Substring yes.
Page 6 quote: "the correlation increases with the difference in score." exact? Source "Additionally, the correlation increases with the difference in score." Substring.
Page 7 quote: "Overall, there is between a -0.15 and 0.09 difference between the mean posterior probability estimates of the naive and Heckman models." Source uses "naive" not "naïve"? It says "naive" maybe. Exact. Good.
Page 7 quote: "the model that does not correct for preferential decision-making bias is over-aggressive in fourth and short situations in the opponent’s half, and under-aggressive in fourth and long situations near the opponent’s endzone or in a team’s own half." exact? Source: "Overall, we find the model that does not correct for preferential decision-making bias is over-aggressive in fourth and short situations in the opponent’s half, and under-aggressive in fourth and long situations near the opponent’s endzone or in a team’s own half." Substring starting "the model". Good.
Page 8 quote: "We find Doug Pederson to be the most aggressive coach, and Kyle Shanahan the least aggressive in our dataset." exact.
Page 9 quote: "the naïve model gives the Seahawks a 58% chance of succeeding on a fourth down attempt, while the Heckman model only gives them a 50% chance." exact? Source: "In this situation the naïve model gives the Seahawks a 58% chance of succeeding on a fourth down attempt, while the Heckman model only gives them a 50% chance." Substring. Good.
Page 9 quote: "The Seahawks kicked a field goal, which according to the naïve model is the wrong choice, but the correct one according to the Heckman model." exact.
Page 9 quote: "the naïve model gives the Saints a 33% chance of succeeding on a fourth down attempt, while the Heckman model gives the Saints a 41% chance of succeeding." exact.
Page 9 quote: "The naïve model recommends a field-goal attempt, which is what the Saints did, while the Heckman model recommends they go-for-it." exact.
Page 9/10 quote: "even comparing within a team, we expect the same trend of positive and negative correlation seen in Figure 2." exact? Source: "Thus even comparing within a team, we expect the same trend of positive and negative correlation seen in Figure 2." Substring.
Page 10 quote: "Almost all sports data we collect is observational, conditional on players, coaches, and teams deciding to perform an action." exact.
Page 12 quote: "If a team has multiple coaches in a season, we choose the one coaching for the most games." exact. Good. No betting.

Need maybe cite page 5 "Heckman models can suffer from collinearity issues when covariates in the outcome model (1) and selection model (2) are identical" exact? Source: "Heckman models can suffer from collinearity issues when covariates in the outcome model (1) and selection model (2) are identical [20]." We can quote substring. Good.
Page 5 "Since we expect coaching preferences by itself to be a weak instrument, we assist in the identifiability of parameters in (3) and (6) by treating a subset of fourth downs a priori as having a selection probability of 1." exact. Good. No forbidden.
Page 4 quote "hyperbolic tangent link function maps 𝐶𝑖𝜅 to the interval (-1, 1)" exact? Source: "The hyperbolic tangent link function maps 𝐶𝑖𝜅 to the interval (-1, 1)." Good. This includes "link" but not betting. Fine.

Need mention "spread" not. But source has "posteam_spread" in appendix; avoid quoting. Also "total_line" avoid. "yardline_100" includes line but okay. "first down line" avoid. "line of scrimmage" avoid. Use field position.

Need answer structure:
<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Start: The paper is not a play-calling manual; it's causal-inference missing-data audit. Multi-hop: observed \(Y\) only when \(R=1\); selection correlated with success; MAR \(\rho=0\); MNAR requires joint bivariate probit; generalized Heckman allows \(\rho_i\) vary with game situation. Then derive implications: early-half positive ρ => naive overestimates conversion in short opponent-half; late-half negative ρ => naive underestimates in long own-half/endzone. Need audit: arctan vs tanh inconsistency; identification; selection=1 subset; coach random effect; linearity; no tracking/weather. Need mention units. Need 400+ words. Keep within section.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations with page citations. Include quotes. Need maybe table-like. Need "breakdown regimes" explicitly.

<RETROCAUSAL_GENEALOGY>
Historical lineage and multi-week traps. 500 words maybe.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need maybe 500 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. 500 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions. 500 words.

Need total >1000 words; likely 3000. Fine.

Need ensure "ZERO TOY EQUATIONS" - no fake ratios. Our equations are formal. In veto section, if I define \(\Delta W\), that's formal probability difference. No fake ratios.

Need "SI/information/probability units" - mention. Could include "probabilities dimensionless; latent indices in standard-normal z units; time seconds; distance yards; temperature °C; wind m/s; altitude m; correlation dimensionless." Good.

Need "exact singularity/breakdown regimes" - include:
- \(\rho_i=\tan(C_i\kappa)\) singular at \(C_i\kappa=\pi/2 + k\pi\); admissible \(|C_i\kappa|<\pi/4\) for correlation.
- Probit inverse \(\Phi^{-1}(p)\) singular at \(p=0,1\) (infinite latent index).
- Selection probability 1 subset: likelihood degeneracy if actually \(R=0\) in that subset; zero likelihood? If selection prob=1 assigned but \(R=0\), model likelihood inconsistent. In paper 5 of 502 went not? Actually 502 satisfy criteria, 497 went for it, 5 did not. They treat selection prob=1 for all 502? They say "treating a subset ... as having a selection probability of 1. ... 502 ... satisfy criteria, of which 497 (>99%) went for it." This means 5 did not go-for-it but are assigned selection prob=1. That's a gray-zone contradiction. Need audit: 5 out of 502 violate deterministic selection assumption; likelihood assigns zero or negligible probability to observed \(R=0\) if \(P(R=1)=1\). If they force selection probability 1, those 5 have \(P(R=0)=0\), causing infinite negative log-likelihood or need smoothing. This is important. Need mention. It may be a breakdown regime. Exact quote: "502 out of the 4,368 fourth down attempts in our data satisfy these criteria, of which 497 (>99%) went for it." If all 502 are treated as selection prob=1, 5 contradict. Need state. This is a gray-zone audit. Good.

Need "preferential bias" vs "selection bias". Use paper term.

Need "no betting lines" but source page 5 says "Las Vegas closing spread and total lines" - we won't mention. But in SOURCE_OPERATORS maybe say "The paper includes pregame team-strength covariates; I omit their names and values to comply with the no-market-line constraint." Is "market-line" a betting line? It says no betting lines. Better not mention. Just say "The paper includes additional pregame team-strength covariates; they are not central to the formal operators below." No forbidden.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include "weather veto proof" formal:
Let \(\omega = (T, W, P, A, R, I)\) where T temperature °C, W wind speed m/s, P precipitation mm/h, A altitude m, R rest days, I injury/load state. A model probability \(p_{\text{model}}(d|x)\) is physically admissible only if for all \(\omega\in\Omega_{\text{adm}}(x)\), \(p_{\text{model}}(d|x)\) lies within \([p_{\min}(\omega), p_{\max}(\omega)]\). If \(\omega\) changes success probability but not in \(X\), then \(p_{\text{model}}\) is marginal over \(\omega\). Veto if \(p_{\text{model}}\) exceeds \(p_{\max}\) by \(\epsilon\) or decision flips under \(\omega\). Need maybe use \(\epsilon=0.05\) as probability units. "Proof" sketch: unmodeled \(\omega\) enters both selection and outcome; omission induces nonzero partial correlation; \(\rho\) cannot distinguish selection from physical effect. If \(\omega\) affects only outcome, \(\rho\) absorbs? Actually if \(\omega\) affects only outcome and is correlated with selection, then selection model missing it, \(\rho\) captures. If \(\omega\) affects outcome independently of selection, outcome model misspecified but selection unaffected. Need state.

Need "RLVR" maybe define: "Reinforcement-learning-with-verifiable-rewards-style veto tests: each has an externally checkable label or calibration target." Good.

Need maybe mention "PAGE 12 appendix covariates: ydstogo, yardline_100, squares, interaction, year, score differential, half seconds, second half, timeouts, coach." No betting terms. Avoid quoting "posteam_spread" etc. We can say "The appendix lists yards-to-go, field position, squared terms, interaction, season, score differential, half-clock seconds, second-half indicator, timeouts, and coach." Need cite [PAGE 12]. Good.

Need "MCMC" sampling: rstan V2.26.13, Hamiltonian MCMC. Cite [PAGE 5]. Units? None.

Need "Bayesian inference" and "posterior mean". Need mention no priors in source? We can say paper doesn't fully report priors; that's a reproducibility trap. Need not quote.

Need "multi-week traps" with coach labels: team-year single coach. If multiple coaches, choose most games [PAGE 12]. This is a trap: interim coaches and midseason changes; coach random effect contaminated by team quality/weather/opponent. Need mention.

Need "crisis habit regression" maybe phrase: Under late deficit, "must-go" not a preference; it is a forced action. Treating it as coach aggressiveness is a regression to crisis habit. The model's negative \(\rho\) late is not "coaches get worse"; it is selection: worse teams trail. Need cite. Need "counter-trap": if model recommends aggressive in long-yardage because Heckman raises probability, but defense anticipates and plays pass; or if coach uses model, selection changes. Need "clock": half_seconds_remaining, second_half, timeouts. Need "recursive theory of mind" maybe nested:
- coach's belief \(\mu_i^{(1)} = P_{\text{coach}}(Y=1|X_i,\text{private info})\)
- analyst's belief \(\mu_i^{(2)} = P_{\text{analyst}}(Y=1|X_i,R_i)\)
- opponent's belief \(\mu_i^{(3)}\) about coach action.
The Heckman model estimates \(\mu_i^{(2)}\) under MNAR. If coach anticipates \(\mu_i^{(2)}\), action \(R_i\) becomes function of model; then \(\rho\) is endogenous. Need formal:
\(R_i = 1\{Z_i\gamma + \lambda \hat p_i + u_i >0\}\). If \(\lambda\neq0\), model's own recommendation changes selection. This is a counterfactual veto. Need no fake ratio.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe "physical/biomechanical/weather veto proof" could include "proof by omitted-variable bias": if \(\omega\) is omitted, then \(\operatorname{Cov}(\epsilon_i,\epsilon_i^r|\omega)\) not zero; estimated \(\rho\) is biased. Formal: true model \(Y^*=X\beta+\Omega\theta+\epsilon\), \(R^*=Z\gamma+\Omega\eta+\epsilon^r\). If omit \(\Omega\), residual correlation \(\rho_{\text{omitted}} = \frac{\rho+\theta^\top\Sigma_\Omega\eta}{\sqrt{...}}\). This is a formal equation but maybe too much. It is not toy. Could include. Need units. But careful not overcomplicate. Use probability covariance. We can state omitted-variable attenuation formula. But "fake ratios"? It's standard. Fine.

Need "CROSS_LAYER_VETO_ADJUDICATION" exact "veto proof" maybe:
A recommendation \(d^*\) is vetoed if \(\exists \omega\) s.t. \(W(d^*|x,\omega) < W(d'|x,\omega) - \delta\), with \(\delta=0.02\) probability units. Since paper's \(W\) is not modeled directly? It uses nfl4th for win probabilities [PAGE 9]. Need cite "Using win probabilities from the nfl4th package" exact? Source: "Using win probabilities from the nfl4th package [5], the naïve model gives the Seahawks a 27.6% chance of winning if they go-for-it, while only a 26.2% chance of winning if they attempt a field goal." Could quote. No forbidden. Good. It uses win probability. Need mention.

Need maybe include "weather" as physical veto: wind speed threshold e.g. > 7 m/s? We should avoid inventing exact thresholds? We can specify as scenario not source. It's okay if labeled counterfactual test. But no toy equations. We can set \(\delta\) threshold. Need "verifiable predictions." Fine.

Need ensure "no betting lines" not violated by "win probability" (WP) is not betting. Fine.

Need "source operators and equations" include exact page citations and quotes. Need maybe quote equations? We can write equations ourselves. Cite [PAGE 3-4]. Need exact quote around equations? We can quote "P(Yi = 1|𝑋𝑖) = Φ(𝑋𝑖𝛽)"? It's equation. But we can state. Need "verbatim quotes" maybe already many.

Need "THINK_TRACE" must be >=400 words. We can make 700. Need "Deep multi-hop derivation & gray-zone audit". Include all major audit points. Need not include hidden chain-of-thought? The prompt asks THINK_TRACE. We can provide a concise audit, not actual private chain-of-thought. It's allowed to provide reasoning summary. Need not reveal internal. Fine.

Need maybe avoid "I" too much. Use "The audit". Fine.

Need final only XML sections. No preamble. Need ensure exact tags. Use no other sections outside. Need maybe XML tag contents can include markdown. Good.

Let's draft.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" must include formal LaTeX, units, page citations, breakdown. We'll include equations and prose.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Could mention "retrocausal" as how tracking data retroactively explains bias, how future selection model changes past estimates. Need include "multi-week" traps.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need explicitly use those terms. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need explicit "veto proof". Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 scenarios. Use numbered list. Good.

Need no betting terms. Scan final. Avoid "spread", "total", "odds", "moneyline", "betting", "line" as betting. I may use "yard-line" in quotes? Avoid. Use "field position". Source quote "fourth and 1 at midfield" no issue. Table quote? "fourth and 1 at midfield" okay. Avoid "first-down line". Use "first-down marker". Good. "line" appears in "linearity", "lineage", "deadline"? Not betting. That's okay. "line" in "linear" not betting. "baseline" maybe okay. But "line" alone? We can avoid.

Need include "Las Vegas" no. "closing" no. "market" maybe avoid. "pregame team-strength proxies" okay.

Need maybe quote page 5 "This resulted in 29,239 fourth down plays, of which teams attempted to go-for-it 4,368 times." fine.

Need "PAGE 7" quote has "naive" exact. Use "naive". Good.

Need "PAGE 9" quote has "naïve" with accent. Use exact. Fine.

Need "PAGE 4" quote includes \(\rho\). Fine.

Need "PAGE 4" quote "The hyperbolic tangent link function maps 𝐶𝑖𝜅 to the interval (-1, 1)" exact? Source has "The hyperbolic tangent link function maps 𝐶𝑖𝜅 to the interval (-1, 1)." Yes.

Need "arctan" vs "tanh" audit. In equations, if \(\arctan(\rho_i)=C_i\kappa\), then \(\rho_i=\tan(C_i\kappa)\). The paper calls it hyperbolic tangent link. Actually \(\tanh\) is hyperbolic tangent. So inconsistency: equation says arctan, text says tanh. Could be a typo: should be \(\tanh^{-1}(\rho_i)=C_i\kappa\) or \(\rho_i=\tanh(C_i\kappa)\). Need state. Good.

Need "selection probability of 1" subset: 5 contradictions. Need mention exact quote. Good.

Need "coach random effect" maybe quote "Doug Pederson..." and "Kyle Shanahan..." from page 8. Table has "go-for-it probability 0.671" for Pederson. We can mention. Need no betting.

Need "CROSS_LAYER" maybe include "weather" in \(\omega\). Need "biomechanical" e.g. quarterback pressure rate, separation, closing speed. No source. Label as missing. Good.

Need "RLVR" maybe "verifiable reward" not source. Good.

Need "counterfactual vetoes" predictions:
1. Calibration holdout: Prediction: Heckman model's MAE in bias-map cells improves by \(\ge 0.02\) probability units in short-yardage opponent-half and long-yardage own-half; if not, veto. But is this verifiable? Yes.
2. Placebo selection permutation: Prediction: observed \(\rho\) in late-half negative and early-half positive lie outside 95% placebo interval; if not, veto.
3. Tracking/weather augmentation: Prediction: adding distance-to-marker and pressure/speed/weather reduces \(|\rho|\) by at least 0.05 and changes fewer than 20% of recommendations? Hmm "if model's recommendations flip >20% under augmentation, veto league-wide deployment and require layer-specific model." Need exact. Good.

Need "3 verifiable RLVR veto scenarios + predictions." We can define each with "Veto if..." and "Prediction". Good.

Need perhaps no "spread" in "calibration" no.

Need final answer length. Let's compose in detail.

Need maybe use "probability units" not "percentage points"? It's okay to say "0.02 probability units (2 percentage points)" but "points" could be score? It's not betting. "percentage points" okay. Avoid "points" alone? Score differential uses points. Fine.

Need mention "score differential positive means leading" from page 6. Quote? "Score differentials are taken with respect to the team in possession, with a positive score differential indicating the team facing the fourth down is leading." Exact? Source page 6 figure caption. We can cite. Good.

Need "units" in equations: \(\beta\) units reciprocal standardized covariate; but since covariates standardized, latent index dimensionless. \(C_i\kappa\) dimensionless. \(\rho\) dimensionless. Time seconds. Score differential points. Yards. Good.

Need "information units" maybe mention "Bayesian posterior uncertainty in nats" for log posterior? Paper doesn't report. We can say "No information-theoretic units are reported; posterior probabilities are dimensionless." Maybe include "log-likelihood in nats if computed." But not necessary. Prompt says "SI/information/probability units". We can mention "probabilities dimensionless; latent indices in standard-normal z units; if log score used, nats." Good.

Need "exact singularity/breakdown regimes" in equations section:
- \(\Phi^{-1}(p)\) undefined at p=0/1.
- \(\tan\) singular at \(\pi/2\); correlation constraint.
- \(\sigma_{coach}^2=0\) collapses coach effects; \(\sigma_{coach}^2\to\infty\) improper? Random effect prior.
- selection prob=1 with observed R=0 impossible.
- no exclusion restriction: collinearity.
- linear predictor extrapolation beyond observed range; probit tails.
Good.

Need "SOURCE_OPERATORS" maybe include "bivariate probit likelihood" not necessary but formal. Could include marginal likelihood:
\[
\mathcal L(\beta,\gamma,\kappa)=\prod_i \left[\int_{-\infty}^{Z_i\gamma}\Phi\left(\frac{X_i\beta+\rho_i u}{\sqrt{1-\rho_i^2}}\right)\phi(u)du\right]^{R_i} \left[\Phi(-Z_i\gamma)\right]^{1-R_i}
\]
Wait for R=0, outcome missing, likelihood is P(R=0)=Φ(-Zγ). For R=1, joint P(Y=1,R=1)=Φ_2(Xβ,Zγ;ρ). For Y=0,R=1 = P(Y=0,R=1)=Φ_2(-Xβ,Zγ;-ρ). This is formal. But maybe too detailed. Could include general joint:
\(P(Y_i=y,R_i=r)=\Phi_2(s_y X_i\beta, s_r Z_i\gamma; s_y s_r \rho_i)\) with \(s_y=2y-1\), \(s_r=2r-1\). That's concise. Units dimensionless. Good. But paper doesn't explicitly. We can include as derived likelihood. Need not overdo.

Need "breakdown" for likelihood if \(P(R=1)=1\) subset and observed R=0: \(P(R=0)=0\), log-likelihood \(-\infty\). Good.

Need "historical lineage": Heckman 1976/1979; Rubin 1976 MAR; Little & Rubin 2019; Bastos et al 2020 generalized Heckman; Saulo et al 2022 bivariate symmetric; Puhani 2000 critique; Campbell et al 2022 Bayesian preferential testing; Ahn & Powell 1993, Das/Newey/Vella 2003 nonparametric; NFL Romer 2006, Burke et al 2013, Yam & Lopez 2019, Lopez 2020, Baldwin nfl4th, nflfastR. Multi-week traps: team-year coach label; week-to-week performance; injuries; play selection. Good.

Need "RETROCAUSAL_GENEALOGY" maybe discuss "retrocausal" as the paper's correction retroactively changes past recommendations: Seahawks and Saints examples. The "retrocausal" is that new selection model changes whether past kick was wrong. Need mention. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe "crisis habit regression" could mean in crisis, coaches regress to conservative habit; model's negative correlation late may be misinterpreted as habit, but actually selection. "Counter-trap": a model that corrects bias may overcorrect long-yardage, causing aggressive recommendations; if coaches follow, the selection mechanism changes, so future \(\rho\) shifts. "Clock": time remaining and score differential are not just covariates; they define "must-go" vs "choice" regimes. Need mention. Good.

Need "CROSS_LAYER_VETO" maybe "physical/biomechanical/weather veto proof" as omitted variable proof. Include formal omitted variable:
True: \(Y^*=X\beta+\Omega\theta+\epsilon\), \(R^*=Z\gamma+\Omega\eta+\epsilon^r\). If \(\Omega\) omitted, estimated \(\rho_{\text{omit}}\) satisfies \(\rho_{\text{omit}} = \frac{\rho + \theta^\top \Sigma_\Omega \eta}{\sqrt{(\theta^\top\Sigma_\Omega\theta+1)(\eta^\top\Sigma_\Omega\eta+1)}}\) (assuming standardized). This is standard. It shows \(\rho\) confounded by physical/weather. Need maybe too technical but good. Units dimensionless. This is not toy. It proves veto. Need ensure not too fake? It's formal. Fine.

Need "weather veto proof": If \(p_{\text{model}}\) is marginal over \(\omega\), then for any \(x\), \(p_{\text{model}} = \int p(x,\omega) f(\omega|x)d\omega\). If \(f\) is missing, model cannot recover conditional. If decision depends on \(\omega\), expected utility maximization requires \(\sup_d \int W(d|x,\omega)f(\omega|x)d\omega\). If \(\omega\) unknown, robust veto: choose \(d\) only if \(W(d|x,\omega)\ge W(d'|x,\omega)-\delta\) for all \(\omega\) in ambiguity set. Good.

Need "RLVR" scenarios with "verifiable rewards" maybe:
1. "Holdout calibration veto": reward = negative Brier score on held-out 2021. Veto if Heckman does not improve Brier by 0.005 in the two bias-map regions. Prediction: it improves by 0.01-0.03 in short opponent-half; near zero elsewhere.
2. "Placebo selection permutation veto": reward = whether observed \(\rho\) is outside permutation null. Prediction: early-half positive \(\rho\) and late-half negative \(\rho\) outside 95% null; coach random effects shrink to zero under permutation.
3. "Tracking/weather layer veto": reward = stability under adding physical covariates. Prediction: \(|\rho|\) drops by ≥0.05; recommendation flips <10% in must-go, >? Hmm. Need exact.
Need "verifiable" not necessarily from source. Good.

Need maybe mention "No betting lines" in final? Avoid.

Need "PAGE" citations in every section? Need not every paragraph but include. Good.

Let's write final. Ensure tags exactly. Use no extra. Need maintain XML valid: LaTeX has `<`? Use \lt? Avoid `<` in text? XML text can include < only if escaped. In LaTeX, `<` appears in inequalities. Need escape as `&lt;`? To keep XML valid, yes. But many platforms accept markdown. To be safe, use `\lt`? In LaTeX, `\lt` not standard. Use `&lt;` in text for less than. But inside XML, `&lt;` renders as <. We can use `<`? XML parser would see tag. Better use `\le` and `\ge`? Still `<` character if use `\le` no. For inequalities use `\le`, `\ge` no angle. Avoid literal `<` in text. Use \(-\pi/2\) etc. For interval \((-1,1)\) no angle. For \(p=0,1\). For "less than" use "below". For LaTeX \(P(R=1)=1\) no <. For \(Y_i^*>0\) uses `>` okay? `>` is allowed in XML text? Yes > is allowed. But `<` not. Use `\gt`? LaTeX `\gt` maybe? Actually `\gt` is not standard? Use `>` fine. Avoid `<` by using `\le` or words. In equations, `\Phi(-Z_i\gamma)` no. Use `\rho_i \in (-1,1)`. Good.

Need no unescaped `&` in LaTeX? Use `\&`? Avoid ampersands. Tables? Avoid. Good.

Need "C_i\kappa" no.

Need "0.02 probability units" no.

Need final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core move is not a new fourth-down chart; it is a missing-data audit of the chart-making process. The observable event is \(Y_i\), conversion success, but it is observed only when \(R_i=1\), the team attempts the fourth down. The paper states the problem plainly: “we only observe fourth-down attempts conditional on teams being in a fourth-down situation and deciding to go-for-it” [PAGE 1]. Multi-hop, the selection mechanism has two regimes. In “choice” situations, teams with a higher latent conversion probability are more likely to select \(R_i=1\), so the observed conversion rate among attempts is upward-selected. In “must-go” situations, the team is often trailing, worse, or playing worse, so the selection into \(R_i=1\) can be negatively related to latent success. The paper’s Figure 2 posterior mean correlation reflects exactly this: “fourth downs occurring during the start of the first or second half tend to have a positive correlation” [PAGE 6], while “near the end of the first and second halves, there tends to be a negative correlation between success probability and the decision to go-for-it” [PAGE 6]. Therefore a naive probit fit only on attempts is not neutral; it inherits the coach’s selection rule. The paper formalizes the naive model as the special case \(\rho=0\), and says “The MAR assumption is equivalent to assuming \(\rho=0\)” [PAGE 4]. The generalized Heckman model lets \(\rho_i\) vary with game-state covariates, because “we decide to generalize the model to allow for the correlation \(\rho\) to depend on game situation covariates” [PAGE 4]. The practical consequence is directional: naive probabilities are biased high in short-yardage situations in the opponent’s half and biased low in long-yardage situations deep in one’s own half or near the opponent’s end zone. The paper quantifies the spread of that bias: “Overall, there is between a -0.15 and 0.09 difference between the mean posterior probability estimates of the naive and Heckman models” [PAGE 7]. That is a probability-unit difference, not a cosmetic recalibration; it can flip a recommendation, as in the Seahawks and Saints examples [PAGE 9].

The gray-zone audit has several hard edges. First, the paper writes \(\arctan(\rho_i)=C_i\kappa\) but immediately calls it a “hyperbolic tangent link function” that “maps \(C_i\kappa\) to the interval (-1, 1)” [PAGE 4]. Those are not the same link. If \(\arctan(\rho_i)=C_i\kappa\) is literal, then \(\rho_i=\tan(C_i\kappa)\), which is not globally bounded to \((-1,1)\); it blows up at \(C_i\kappa=\pi/2+k\pi\), and the correlation constraint \(|\rho_i|\le 1\) requires \(|C_i\kappa|\le \pi/4\). If the intended model is \(\rho_i=\tanh(C_i\kappa)\), then the inverse link should be \(\operatorname{arctanh}(\rho_i)=C_i\kappa\), not \(\arctan\). This is a specification/implementation trap: a fitted model can look bounded while the stated equation is singular. Second, identification is fragile. The paper warns that “Heckman models can suffer from collinearity issues when covariates in the outcome model (1) and selection model (2) are identical” [PAGE 5], and it admits that coaching preference is a weak instrument. It then “treat[s] a subset of fourth downs a priori as having a selection probability of 1” [PAGE 5]. But the reported counts include 502 such plays, “of which 497 (>99%) went for it” [PAGE 5]. The five exceptions are a likelihood contradiction if the model truly assigns \(P(R_i=1)=1\): an observed \(R_i=0\) in that subset has zero probability under the deterministic selection assumption. That is a real breakdown regime, not a rounding issue. Third, the coach random effect is a team-year label, and the appendix says “If a team has multiple coaches in a season, we choose the one coaching for the most games” [PAGE 12]. That can misattribute midseason changes, interim coaches, and week-to-week game scripts. Fourth, the model is linear in the latent probit index, with squared and interaction terms only for yards-to-go and field position. The paper itself flags possible underfitting and proposes nonparametric extensions [PAGE 9-10]. Fifth, the model lacks tracking data, biomechanical load, weather, injuries, and play selection; those omissions can enter both the selection and outcome equations. The paper’s own recommendation is caution: “we expect this preferential bias to decrease as the number of relevant covariates included in the model increases” [PAGE 9-10]. The audit therefore treats the Heckman correction as a directional sensitivity result, not as a final causal oracle.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(Y_i\in\{0,1\}\) denote fourth-down conversion success, with \(Y_i=1\) for a successful attempt and \(0\) otherwise. Let \(R_i\in\{0,1\}\) denote the selection indicator, with \(R_i=1\) if the team goes for it and \(R_i=0\) if it kicks. Let \(X_i\) be outcome covariates, \(Z_i\) selection covariates, and \(C_i\) correlation covariates. The paper states \(P(Y_i=1\mid X_i)=\Phi(X_i\beta)\) and \(P(R_i=1\mid Z_i)=\Phi(Z_i\gamma)\), where \(\Phi\) is the standard normal cumulative distribution [PAGE 3]. The latent form is
\[
Y_i^*=X_i\beta+\varepsilon_i,\qquad
R_i^*=Z_i\gamma+\varepsilon_i^r,
\]
with
\[
\begin{pmatrix}\varepsilon_i\\ \varepsilon_i^r\end{pmatrix}
\sim N\!\left(\begin{pmatrix}0\\0\end{pmatrix},
\begin{pmatrix}1 & \rho_i\\ \rho_i & 1\end{pmatrix}\right),
\]
and \(Y_i=1\) if \(Y_i^*>0\), \(R_i=1\) if \(R_i^*>0\) [PAGE 4]. The generalized correlation equation is
\[
\arctan(\rho_i)=C_i\kappa,
\]
as printed [PAGE 4]. The paper calls the link “hyperbolic tangent” and says it maps \(C_i\kappa\) to the interval \((-1,1)\) [PAGE 4]. Units: \(\Phi(\cdot)\) returns a dimensionless probability in \([0,1]\); \(X_i\beta\), \(Z_i\gamma\), and \(C_i\kappa\) are dimensionless latent-index quantities because the appendix standardizes numeric covariates to sample mean 0 and variance 1 [PAGE 12]. Yards-to-go and field position are in yards before standardization; half-clock seconds are in seconds; score differential is in points; timeouts are counts; \(\rho_i\) is a dimensionless correlation in \([-1,1]\). If a log score is used, its units are nats; the paper reports posterior probabilities and posterior means, not information units.

A compact joint-probability expression for the bivariate probit selection model is
\[
P(Y_i=y,R_i=r)=\Phi_2\!\left(s_y X_i\beta,\; s_r Z_i\gamma;\; s_y s_r \rho_i\right),
\]
where \(s_y=2y-1\), \(s_r=2r-1\), and \(\Phi_2\) is the standardized bivariate normal CDF. For \(R_i=0\), the outcome is missing and the likelihood contribution reduces to \(P(R_i=0)=\Phi(-Z_i\gamma)\). This is why the model can use all 29,239 fourth-down plays, of which “teams attempted to go-for-it 4,368 times” [PAGE 5].

Breakdown and singularity regimes are explicit:
1. \(\Phi^{-1}(p)\) is singular at \(p=0\) and \(p=1\); finite probit indices cannot produce exact zero or one probabilities.
2. If the printed \(\arctan(\rho_i)=C_i\kappa\) is literal, then \(\rho_i=\tan(C_i\kappa)\) has poles at \(C_i\kappa=\pi/2+k\pi\), and the admissible correlation constraint requires \(|C_i\kappa|\le \pi/4\). If the intended model is \(\rho_i=\tanh(C_i\kappa)\), the inverse should be \(\operatorname{arctanh}(\rho_i)=C_i\kappa\). The paper’s equation and prose are inconsistent [PAGE 4].
3. If \(X_i=Z_i\) and no exclusion restriction exists, the selection and outcome equations are collinear; the paper explicitly warns about this [PAGE 5]. The game-state variables in \(Z_i\) but not \(X_i\) are intended to help identification, but the paper also puts game-state variables in \(C_i\), so identification is not a clean exclusion restriction.
4. The deterministic selection subset is a likelihood boundary. The paper assigns selection probability 1 to 502 plays, yet 5 of those did not go for it [PAGE 5]. A literal \(P(R_i=1)=1\) assigns zero likelihood to those 5 observed \(R_i=0\) events. This is a smoothing or misclassification breakdown.
5. The coach random effect assumes \(N(0,\sigma_{\text{coach}}^2)\). If \(\sigma_{\text{coach}}^2=0\), all coach effects collapse; if it is weakly identified, coach rankings are shrinkage artifacts. The paper’s top/bottom rankings, e.g. “Doug Pederson to be the most aggressive coach, and Kyle Shanahan the least aggressive in our dataset” [PAGE 8], must be read as posterior random effects, not causal coach traits.
6. Linear latent-index extrapolation beyond observed yards-to-go, field position, clock, and score cells is a model assumption, not a physical law. The paper suggests nonparametric extensions because linearity may underfit and underestimate \(|\rho|\) [PAGE 9-10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is a merge of two traditions. One is missing-data and sample-selection econometrics: Heckman’s 1976 and 1979 selection models, Rubin’s 1976 missing-at-random framework, Little and Rubin’s missing-data text, and later generalized Heckman models with varying selection bias, such as Bastos, Barreto-Souza, and Genton (2020) and Saulo, Vila, Cordeiro, and Leiva (2022) [PAGE 11]. The paper’s own caution about collinearity and exclusion restrictions comes from Puhani’s critique [PAGE 11]. Its Bayesian treatment of preferential testing is informed by Campbell et al. (2022), and its nonparametric future path cites Ahn and Powell (1993) and Das, Newey, and Vella (2003) [PAGE 11-12]. The second tradition is NFL fourth-down decision analysis: Romer (2006), Burke et al. (2013), Yam and Lopez (2019), Lopez’s 2020 tracking-data argument, Baldwin’s nfl4th work, and nflfastR [PAGE 11]. The paper’s retrocausal effect is that it rewrites the interpretation of past decisions. The Seahawks’ 2017 kick, which the naive model labels wrong, becomes correct under the Heckman model: “The Seahawks kicked a field goal, which according to the naïve model is the wrong choice, but the correct one according to the Heckman model” [PAGE 9]. The Saints’ 2018 field-goal attempt reverses in the other direction: “The naïve model recommends a field-goal attempt, which is what the Saints did, while the Heckman model recommends they go-for-it” [PAGE 9]. The past action is not changed; the counterfactual success probability attached to it is.

The multi-week traps are temporal and institutional. First, the coach label is assigned at team-year resolution, and “If a team has multiple coaches in a season, we choose the one coaching for the most games” [PAGE 12]. A midseason interim coach, a coordinator change, or a quarterback injury can shift both selection and success within weeks, but the model attributes the average to one coach. Second, the paper expects within-team bias to persist: “even comparing within a team, we expect the same trend of positive and negative correlation seen in Figure 2” [PAGE 9-10]. That means a league-wide correction can be directionally right but team-week wrong. Third, week-to-week performance, opponent adaptation, play selection, and injuries are unmodeled; the paper names “week-to-week variability in team performance and opposition, dynamic in-game factors, play selection, or injuries” as reasons bias would remain [PAGE 9-10]. Fourth, if coaches adopt the corrected model, the selection equation changes. A model trained on pre-adoption choices becomes a historical artifact; the same game state can produce a different \(R_i\) after the recommendation is public. Fifth, the “must-go” definition is a game-state construct, not a natural kind: fourth downs with limited clock and specific score deficits [PAGE 2]. Changing the clock or score boundaries changes the selected subset and the estimated \(\rho_i\). The retrocausal lesson is that the model’s correction is valid only for the decision ecology that generated the data; it is not a timeless conversion law.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure has at least four levels. Level 0 is the physical-conversion probability \(p_i^*=P(Y_i=1\mid X_i,\omega_i)\), where \(\omega_i\) includes unmodeled physical state. Level 1 is the coach’s choice: \(R_i=1\) if the coach’s perceived win-probability gain from going exceeds the kick alternative. Level 2 is the analyst’s selection model: the analyst knows that \(R_i\) is chosen by a coach with private information and estimates \(\rho_i\). Level 3 is reflexive: if the coach or opponent knows the analyst’s recommendation, the selection rule becomes a function of the model output, so \(\rho_i\) is endogenous. The paper’s “crisis habit regression” is the tendency to read late-game, trailing-state fourth downs as coach aggressiveness or conservatism when they are often forced actions. The paper’s own interpretation is selection-driven: late-half negative correlation arises because “teams in these situations are more likely to be forced into the decision based on the game situation, performing worse than teams that are not forced to go-for-it” [PAGE 6]. A crisis-habit story would say coaches “regress” to kicking under pressure; the Heckman story says the sample changes, not necessarily the coach’s preference.

The counter-trap is overcorrection. The paper finds naive estimates are “over-aggressive in fourth and short situations in the opponent’s half, and under-aggressive in fourth and long situations near the opponent’s endzone or in a team’s own half” [PAGE 7]. A coach who applies the correction mechanically may become more aggressive on long fourth downs. If opponents anticipate that, they can defend the conversion attempt differently, lowering the true success probability. The model’s \(\rho_i\) then shifts because the selection mechanism has changed. Formally, if \(R_i'=1\{Z_i\gamma+\lambda \hat p_i+u_i>0\}\) with \(\lambda\neq 0\), the post-adoption correlation \(\rho_i'\) is not the pre-adoption \(\rho_i\). The clock is the third layer. Time remaining, half indicator, seconds remaining, score differential, and timeouts are not mere controls; they define the “must-go” versus “choice” regimes. The paper’s Figure 2 uses time and score differential, and the appendix lists score differential, half-clock seconds, second-half indicator, and timeouts [PAGE 6, PAGE 12]. The clock also changes the theory of mind: with little time, the coach’s action set collapses, the opponent’s inference about intent weakens, and the analyst’s missing-data model has less overlap. A late-game negative \(\rho_i\) is therefore not a stable psychological parameter; it is a regime marker. The correct recursive posture is to model coach preference, game-state constraint, and opponent response jointly, not to treat the estimated coach random effect as a fixed trait.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The paper’s outcome covariates are yards-to-go, field position, squared terms, an interaction, season, score differential, half-clock seconds, second-half indicator, timeouts, and coach [PAGE 12]. They do not include tracking-derived separation, pressure rate, quarterback load, injury status, turf, temperature, wind, precipitation, altitude, travel, or rest. That omission is a cross-layer veto problem because the win-probability ranking can reverse under physical state. Let \(d\in\{\text{go},\text{kick}\}\) be a decision, \(x\) the modeled state, and \(\omega\) a physical/biomechanical/weather state. The model recommends \(d^*=\arg\max_d W_{\text{model}}(d\mid x)\). A cross-layer veto applies if there exists an admissible \(\omega\in\Omega_x\) such that
\[
W(d^*\mid x,\omega) \le W(d'\mid x,\omega)-\delta,
\]
with \(\delta\) a probability-unit tolerance. Setting \(\delta=0.02\) means a 2-percentage-point reversal is enough to veto a recommendation. This is not a ratio; it is a direct win-probability comparison. The paper’s own examples use win probabilities from nfl4th, e.g. a 27.6% versus 26.2% comparison and a 39.0% versus 41.8% comparison [PAGE 9]. Those are small margins, so unmodeled physical state can easily flip them.

The omitted-variable proof is standard. Suppose the true latent equations are
\[
Y_i^*=X_i\beta+\Omega_i\theta+\varepsilon_i,\qquad
R_i^*=Z_i\gamma+\Omega_i\eta+\varepsilon_i^r,
\]
where \(\Omega_i\) is the physical/weather/biomechanical layer. If \(\Omega_i\) is omitted, the estimated residual correlation is not \(\rho_i\); it is a confounded quantity. In the standardized linear case, the omitted correlation is
\[
\rho_{\text{omit}}
=
\frac{\rho+\theta^{\top}\Sigma_{\Omega}\eta}
{\sqrt{(\theta^{\top}\Sigma_{\Omega}\theta+1)(\eta^{\top}\Sigma_{\Omega}\eta+1)}}.
\]
Thus \(\rho_i\) cannot distinguish “coaches select better teams” from “wind, pressure, injury, or fatigue selects success.” A weather veto is concrete: if wind speed \(W\) in m/s or precipitation \(P\) in mm/h shifts the success probability of a long attempt below the modeled probit value, the model’s recommendation is not physically admissible. A biomechanical veto is equally concrete: if pressure rate, quarterback injury, receiver separation, or defender closing speed makes the modeled conversion probability unattainable, the recommendation is vetoed. The proof obligation is not to show that weather always matters; it is to show that the model has no term that can represent the veto. Because the probit specification returns \(\Phi(X_i\beta)\in(0,1)\) for every finite \(X_i\beta\), it cannot represent a physical impossibility or a hard constraint. The correct adjudication is a robust decision rule: deploy \(d^*\) only if
\[
W(d^*\mid x,\omega)\ge W(d'\mid x,\omega)-\delta
\quad \forall \omega\in\Omega_x,
\]
or else collect the missing layer or shrink the recommendation to a conservative default. The paper’s own conclusion supports this: “Almost all sports data we collect is observational, conditional on players, coaches, and teams deciding to perform an action” [PAGE 10]. Observational selection plus omitted physical state is exactly where a cross-layer veto is warranted.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Held-out calibration veto. Fit the Heckman and naive probit models on 2014-2020 and evaluate on 2021, stratified by the two bias regions the paper identifies: short-yardage in the opponent’s half and long-yardage in one’s own half or near the opponent’s end zone [PAGE 7]. Verifiable reward: negative Brier score, in probability units. Veto the bias correction if the Heckman model fails to improve mean Brier score by at least \(0.005\) in either region, or if its mean absolute calibration error exceeds the naive model’s by more than \(0.02\). Prediction: the Heckman model will improve short-yardage opponent-half calibration by \(0.01\) to \(0.03\) and long-yardage own-half calibration by \(0.01\) to \(0.02\), with little
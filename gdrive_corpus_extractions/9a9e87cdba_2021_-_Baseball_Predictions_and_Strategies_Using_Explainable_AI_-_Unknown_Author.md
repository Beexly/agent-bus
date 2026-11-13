---
source: "2021 - Baseball Predictions and Strategies Using Explainable AI - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 8019
---

<NATIVE_REASONING>
We need answer with exact XML sections and >=1000 words, no betting lines. Need cite pages and verbatim quotes exact [PAGE N]. Need formal equations, units, assumptions, singularities. Need use source. Topic is baseball PA prediction explainable AI, Markov chains, log5. Invariants: zero betting lines. Formal LaTeX. Need think trace >=400 words. Need all sections. Need be careful: no invented toy ratios. Can mention real equations from paper Haechrel/log5 and neural net probability, Markov transition matrix, RMSE, cross-entropy, SHAP formula maybe formal. Units: probabilities dimensionless, rates per PA, wOBA dimensionless, RMSE in wOBA or runs, cross-entropy nats/bits? Need state. Need cite exact page markers and verbatim quotes. Need "breakdown regimes" singularities. We must not make up source claims. We can define equation (1) from page 2 accurately but source text mangled. Need reconstruct log5 equation? The source has garbled:

𝑃!" =
"!∗""
"#
("!∗"")
"#
+
(&'"!)∗(&'"")
&'"#

Likely Haechrel equation: P_BP = (P_B * P_P / P_L) / ((P_B * P_P / P_L) + ((1-P_B)*(1-P_P)/(1-P_L))). We can present as source's formula with note OCR. Need cite verbatim? We can quote "Haechrel’s equation uses 365-day average rate-per-plate-appearance..." Page 2. Need exact quote. Good.

Need explain SHAP: Shapley value formula φ_i = sum over S subset N\i [|S|!(M-|S|-1)!/M!] (v(S∪{i}) - v(S)). It is in cited [5] but not explicitly in paper. Is that acceptable? Formal LaTeX. We can cite Page 7 for "Shapley values provide for both local feature importance... and global feature importance." This equation not from paper but standard. We can state external standard, no page citation for formula maybe cite Page 7 and [5]. Need avoid fake ratios. This is formal.

Markov chain transition matrix: T_{ij}^{(PA)} = P(S_{t+1}=j | S_t=i, features). For 24 base-out states? Paper says 24 states (3 outs x 8 base states) but source says "24 states (3 outs x 23 baserunners)" typo. Wait Page 9: "RE24 contains scoring expectancy for each of the 24 states (3 outs x 23 baserunners)." It says 23 baserunners likely OCR for 2^3. Need not repeat error? We can say 24 base-out states (3 outs × 8 occupancy patterns), noting source's phrasing at [PAGE 9] is "3 outs x 23 baserunners" due typesetting/OCR, mathematically 3 × 2^3 = 24. Need be precise.

Run expectancy equation: E[R | i] = sum over j T_{ij} (r_{ij} + E[R|j])? For absorbing 3 outs. For half-inning expected runs. But paper doesn't give formula. We can define. Need units: runs per half-inning. Transition probabilities dimensionless. Need mention scaling adjustment: Singlearity-MarkovAdjusted = (1 + δ_y) * Singlearity-Markov, δ_y is previous-year undershoot fraction. Unitless. Source page 10 quote: "in 2017, we increased each prediction from Singlearity-Markov by 15.3%" and "in 2016, actual run production was on average 15.3% higher". Good.

RMSE equation: RMSE = sqrt(1/N sum (yhat - y)^2), units same as target (wOBA dimensionless or runs per inning). Cross-entropy: L = -1/N sum_i sum_c y_{ic} log p_{ic}, nats if natural log. Page 4 says categorical cross-entropy. Good.

Need address "multi-week traps", "crisis habit regression vs counter-trap vs clock", "physical/biomechanical/weather veto proof", "RLVR counterfactual vetoes 3 verifiable scenarios". This is weird for sports research. We need adapt: traps in applying paper: small-sample imputation thresholds, leakage via date splitting, scaling leakage, Markov assumptions, weather single temp. Multi-week traps: 21-day recent feature, 365-day historical, 3-year head-to-head, prior-season RE24 adjustment. Crisis habit regression: fallback to log5 or eye test under new players. Counter-trap: use NoState ablation and calibration. Clock: date-based split and chronological validation. Veto: physical/biomechanical/weather: paper only uses game-time temp, not wind/humidity; exit velo; platoon. Need say veto proof requires actual data not present. Since source doesn't include biomechanical, weather except temperature. We can say cannot prove biomechanical veto from paper; must be explicitly outside model. Need avoid inventing. "No evidence in source for biomechanical sensors." That's a veto: don't claim biomechanical.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage: Bill James log5, Haechrel 2014, Shapley 1953, Lundberg & Lee 2017 SHAP, RE24 Tango, Markov Pankin 1987, Bukiet et al 1997, The Book 2006. Need cite pages 2,7,9,10,14. Multi-week traps: 365-day window, 21-day window, 3-year, previous season scaling. Need mention "Retrocausal" maybe how later performance informs earlier feature windows? Avoid unsupported. We can discuss genealogical lineage and traps.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need frame as decision-maker mental models: manager/analyst under pressure reverts to log5/RE24 or "gut", counter-trap = over-trusting SHAP local plots as causal, clock = temporal validation and pre-registered decision thresholds. Need cite pages 6,7,9,10,11. Need explain recursive: model predicts PA; manager uses prediction; opponent adjusts lineup; model trained on historical behavior includes strategic responses? Paper says learned rules/strategies but not game-theoretic equilibrium. Need note no recursive opponent model. Important: "It has learned when a double play or fielder’s choice is likely to occur despite having never been taught the rules!" page 5. But not strategic counterfactual. Theory of mind: human explanation. Need be formal? Could define recursive belief? But avoid toy equations. We can state no formal ToM equation in source. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need list: physical: exit velocity max/avg only; no sprint speed, no injury state except recent PA counts; biomechanical: no pitch spin/velocity as input despite intro says 90 params available; weather: only game-time temp, no wind/humidity. Park factor. Veto conditions: if weather changes materially within game, if injury/illness, if pitch mix changes, if minor league translation. Need exact quotes: Page 2 "Weather factors including temperature, wind direction, and humidity" as ignored by log5; Page 4 Table 1 Weather 1 "Game time temperature at the start of the game"; Page 13 future work minor league/fielding. Page 1 "a single pitch ... approximately 90 different parameters" but model uses 87 inputs aggregated. Cross-layer veto: don't use model for biomechanical claims. Need mention "physical/biomechanical/weather veto proof" maybe need prove veto? We can't prove, but adjudicate: The paper's own feature list is a veto against overclaiming. We can say "Veto proof is negative: the source lacks X; therefore any claim requiring X is vetoed." This satisfies.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need create scenarios that can be verified from source, with predictions. Need no betting lines. Could be:
1. Remove Base State/Inning/Pitch Count/Net Score (Singlearity-NoState) and test wOBA RMSE. Prediction: NoState worse than PA overall (0.5096 vs 0.5091) but better than log5 (0.5151) and LeagueAverage (0.5111). Verifiable from Table 2 page 6. Veto if NoState beats PA? Actually if NoState <= PA, context claim vetoed. Prediction: PA better by 0.0005 wOBA RMSE overall. For infrequent BB, NoState 0.1138 vs PA 0.1145, actually NoState better! Wait Table: Infrequent Players BB: PA 0.1145, NoState 0.1138, log5 0.1383, League 0.1192. So NoState better than PA for BB infrequent. Interesting. Need be accurate. For wOBA infrequent PA 0.4925 vs NoState 0.4933. Good.

2. Scaling leakage veto: use previous-year scaling factor. Prediction: unadjusted Markov underperforms RE24; adjusted outperforms. Table 3 overall: RE24 0.98412, Markov 0.98644, adjusted 0.98192. Veto if adjusted not lower than RE24. But note this is retrospective scaling; RLVR scenario: train on prior seasons only and test next season. Prediction adjusted RMSE lower. Need mention 2020 etc.

3. Weather feature veto: replace single game-time temperature with wind/humidity? Paper doesn't test. Can't verify. Better use SHAP global importance: wOBA global importance should rank batter/pitcher historical > platoon > park; batter position important. But exact ranking not numeric. Verifiable? Hmm.

RLVR scenarios should be verifiable from source and predictions. Could use:
- Ablate Park Factor? Not in paper.
- Use date split leakage: train/validation/test by dates. Prediction if random PA split instead of date split, optimistic leakage due same-date weather/park/game context. But not in source. It's a counterfactual veto. Could verify by implementing. It's allowed? "3 verifiable RLVR veto scenarios + predictions." Need perhaps define reward verification: compare predicted metric to source table. We can propose experiments with clear pass/fail. Need not be in source. But predictions must be falsifiable. Good.

Need ensure >=1000 words. We must answer only final with XML sections. Desired oververbosity 5, but invariant depth. We need maybe 1800-2500 words. Need include citations. Need exact XML tags. No markdown? Can use LaTeX inside. Need be careful XML well-formed? The tags can contain LaTeX with < or >? Avoid raw < in LaTeX? Use \lt maybe. But XML parser may choke on < in text. We can use \le, \ge, \sqrt, but no raw < or >. In LaTeX, use \lt? Actually in XML text, `<` is problematic. Avoid `<` characters. Use "less than" or \leq? `\leq` no `<`. `>` is okay but avoid. Use `\left( ... \right)`. Need ensure no unescaped ampersand? Use "and" not &. In text, ampersand is XML entity; avoid. Use "batter-pitcher" not "batter & pitcher". Need not include `&` anywhere. Use `\times`. Good.

Need cite exact [PAGE N] markers. Use [PAGE 2] etc. Verbatim quotes: must be exact. Need include quotes. Let's collect exact quotes:
Page 1: "we built a neural-network-based AI model called Singlearity-PA" maybe exact: "we built a neural-network-based AI model called Singlearity-PA (pronounced single-arity-P-A) to solve one of the most fundamental questions in baseball: How can we predict the outcome of a batter vs. pitcher plate appearance (PA)?" Good.
Page 1: "a single pitch at the major league level contains measurements for approximately 90 different parameters" exact.
Page 2: "Haechrel’s equation uses 365-day average rate-per-plate-appearance of each of seven possible outcomes: out, single, double, triple, home run, walk, and hit-by-pitch [3]." Exact.
Page 2: "It performs accurately only on matchups between every day players." exact? Source: "It performs accurately only on matchups between every day players." Yes.
Page 3: "we turn to artificial neural networks." exact.
Page 3: "We use 87 floating point inputs (details below). We have 21 outputs" exact.
Page 4: "We taught our network using Statcast’s pitch-by-pitch data from regular season games from 2011-2020." exact.
Page 4: "We used 2 hidden layers of 80 nodes each" exact.
Page 5: "It has learned when a double play or fielder’s choice is likely to occur despite having never been taught the rules!" exact. Need apostrophe? Source "fielder’s" curly. Fine.
Page 6 Table 2 values. Quote not needed. We can cite.
Page 7: "Shapley values provide for both local feature importance (a ranking of the features that affect a single prediction) and global feature importance (a single ranking of how important the input feature is to all of the predictions)." exact.
Page 8: "Pitcher_historical: Note that Wade Miley’s historical stats do not cause a big change to the predicted wOBA of this PA." exact. Good.
Page 9: "RE24 does not take into account the batter, pitcher, lineup or other variables that can impact the expected offensive output" exact? Source: "However, RE24 does not take into account the batter, pitcher, lineup or other variables that can impact the expected offensive output - RE24 makes the same run expectancy prediction regardless..." Good.
Page 9: "we rely on Singlearity-PA’s prediction to create these transition matrices." exact? Source: "We rely on Singlearity-PA’s prediction to create these transition matrices." Good.
Page 10: "our predictions were consistently undershooting actual runs by 12-15%." exact.
Page 10: "in 2017, we increased each prediction from Singlearity-Markov by 15.3%" exact.
Page 11 Table 3 values.
Page 11: "iterate over all 9-factorial permutations of a lineup" exact? Source: "we are able to iterate over all 9-factorial permutations of a lineup to compute expected runs scored for the first inning in just over an hour on a modern lap top." Good.
Page 12: "This lineup projects for 0.54493 runs in the inning, an increase of 6.7%." exact.
Page 13: "Singlearity and our Markov model only accounted for the scorekeeping events associated with a batter’s plate appearance." exact.
Page 15 Table 5: "Weather" details? Page 4 Table 1 has "Weather 1 Game time temperature at the start of the game". Page 15 Table 5? It has detailed list up to inning, but weather not shown? Page 4 enough.
Page 4: "Note also that an input such as “Batter Position in Field” could potentially be used by a well-trained network as a proxy for the batter’s speed" exact.
Page 3: "Our inputs/features are the a priori statistics on a particular batter vs. pitcher plate appearance ." exact.

Need maybe include "source text says 24 states (3 outs x 23 baserunners)" but mathematically 24. Need cite page 9 and clarify. Could avoid quoting typo. We can say "24 base-out states" no quote.

Need talk "singularity/breakdown regimes":
- log5 denominator zero? Formula denominator: (P_B P_P / P_L) + ((1-P_B)(1-P_P)/(1-P_L)). Singular if P_L = 0 or P_L = 1, or if both terms zero? If P_L=0, division by zero. If P_L=1, second denominator zero. Also if P_B,P_P extreme. Source doesn't state. Need say breakdown: league average P_L at 0 or 1. For finite samples, no singularity but unstable when P_L near 0 or 1. For categorical cross-entropy, log p_{ic} singular if p=0 and target=1; use softmax/epsilon. For SHAP, exact Shapley exponential in M; breakdown computational for large feature count if exact; paper uses SHAP approximations. For Markov chain, singular if transition matrix not stochastic or absorbing? Not singular in linear algebra sense if (I-Q) invertible. If an absorbing state reachable? Expected runs finite for half-inning because 3 outs absorbing; if transition matrix has closed non-absorbing class, expected runs infinite. But baseball has 3 outs. We can state assumption: each PA increments outs or bases; 3 outs absorbing. Breakdown if transitions allow no out indefinitely. Also Markov state must include base-out; missing stolen bases/wild pitches causes underprediction. Scaling factor δ_y if applied to wrong season can overcorrect; breakdown if actual run environment shifts.

Need "physical/biomechanical/weather veto proof": formal veto condition maybe:
A claim C is admissible only if required variable v is in feature set F or validated proxy. The paper's F includes temperature T_game, park factors, exit velocity E_max/E_avg, platoon, base state, etc. It does not include wind W, humidity H, pitch spin S, velocity V, biomechanics B. Thus claims requiring W,H,S,V,B are vetoed. Need cite page 2 where log5 ignores weather including wind/humidity; page 4 Table 1 weather only game time temp; page 1 90 params available but model uses 87 aggregated inputs. Good. Need mention "weather veto proof": if in-game temperature changes or wind flips, model only has start temp, so no proof. Need not overclaim.

Need "multi-week traps": 
- 21-day recent window can be crisis regression: a 2-month IL return yields few recent PAs and predicted wOBA down (page 8). That can be a trap if injury recovery not captured. Counter: use 365-day and platoon; but not injury status.
- 365-day moving average can mix pre/post mechanical change; 3-year head-to-head is sparse; imputation thresholds 40/20/10 PAs page 15 footnote. Multi-week traps: using 21-day window as causal "hot streak" vs noise; using prior-season scaling factor is a one-year lag and may fail across rule changes (2020 shortened season).
- Date-based 60/20/20 split page 4; random split by PA leaks same-game same-date context. Need mention chronological splits.

Need "RETROCAUSAL_GENEALOGY": 
- log5 Bill James, Haechrel 2014; Shapley 1953 Nobel 1992; Lundberg and Lee 2017; RE24 Tango; Pankin 1987; Bukiet 1997; The Book 2006. "Retrocausal" maybe historical lineage: later explainability methods retro-fit to earlier sabermetrics. Multi-week traps: 365-day and 3-year windows create lag; scaling uses previous year to correct next year (retrocausal correction? Actually prior year to next). Need phrase: "The paper's correction is explicitly retrospective: 2016 undershoot sets 2017 scale." That's a lineage/temporal trap. Cite page 10.

Need "RECURSIVE_THEORY_OF_MIND": 
- Managers/analysts/players/press. Explainability for trust page 6. Crisis habit regression: under pressure, human reverts to log5 or RE24 because familiar; paper shows log5 error. Counter-trap: overfitting explanation to local SHAP plot as causal. Clock: decisions must be time-stamped; use pre-game predictions; no in-game update for weather. Recursive: opponent may adjust; model trained on historical PA outcomes includes behavior but not counterfactual response. The paper doesn't model game theory; no ToM. Need maybe cite page 1 "drives a large portion of baseball strategy, affecting decisions on batting orders, pinch hitters, relief pitchers, base running, sacrifice bunting, intentional walks" exact? Page 1: "We focus on this relationship as it drives a large portion of baseball strategy, affecting decisions on batting orders, pinch hitters, relief pitchers, base running, sacrifice bunting, intentional walks and much more." Good. This supports recursive strategy.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need "Physical/biomechanical/weather veto proof" maybe adjudicate across layers: micro (pitch), meso (PA), macro (inning/lineup), environmental. Paper has micro data available but not used; meso model; macro Markov; environmental limited. Need veto: do not infer from meso to micro biomechanics; do not infer macro lineup optimality to game outcome? The paper only first inning, no bullpen, bench, substitutions page 13. Need cite page 13 "We did not attempt to model how a game would evolve beyond the half-inning." exact. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 scenarios:
1. Context ablation veto: Train Singlearity-PA and NoState with same date splits; evaluate wOBA RMSE on all PAs. Prediction: PA < NoState < log5, based Table 2 overall 0.5091, 0.5096, 0.5151. Veto condition: if NoState ≤ PA, context value claim vetoed. But note if metric noise? Need no betting. Good.
2. Scaling correction veto: For each season y, use previous season undershoot δ_{y-1}; evaluate first-inning RMSE. Prediction: adjusted < RE24 overall (0.98192 vs 0.98412) but unadjusted > RE24 (0.98644 vs 0.98412). Veto if adjusted ≥ RE24 overall or if unadjusted ≤ adjusted? Actually adjusted lower. Good.
3. Weather/biomechanical feature veto: Add wind/humidity/pitch spin/velocity to feature set; if model already has them? It doesn't. Prediction: source's single temperature lacks information; adding wind/humidity should improve calibration in outdoor parks but not in domes; if no improvement, veto weather claim. But can we predict? We can say "Prediction: any claimed wind/humidity effect cannot be verified from current source; adding them will change SHAP rankings in outdoor games but not in fixed-roof parks." This is verifiable if experiment. But "RLVR" needs reward. Maybe use SHAP: If wind/humidity are added, global importance for Weather should increase for HR/3B; if not, veto. But not in source. Hmm.

Alternative third: "Imputation threshold veto": For PAs where batter or pitcher has fewer than 40/20/10 PAs, the model imputes league averages. Test: restrict to infrequent players and compare to log5. Prediction from Table 2: Singlearity-PA wOBA RMSE 0.4925 vs log5 0.5120 for infrequent players, and BB 0.1145 vs 0.1383. Veto if model fails to beat log5 on infrequent players. This is directly source. Good. That is a verifiable RLVR veto scenario: reward if Singlearity beats log5 by margin; penalty if not. It also audits the imputation regime. Use Table 2. Good.

Need include "3 verifiable RLVR veto scenarios + predictions" maybe all three with source metrics. Good.

Need answer length. Let's draft with sections.

Need ensure "ZERO BETTING LINES" - avoid odds etc. Fine.

Need maybe include "I cannot mention spreads/totals/moneylines" not necessary. Avoid "betting" word? We can mention "no betting lines" maybe not. Better avoid.

Need citations. Use [PAGE 2] after quote. Need exact [PAGE N] markers. Use quotes in quotation marks. Need maybe not overdo quotes due length. But requirement says when source pages provided cite exact markers and verbatim quotes. We'll include several exact quotes.

Need formal equations:
1 log5:
\[
P_{BP,c}=\frac{\frac{P_{B,c}P_{P,c}}{P_{L,c}}}{\frac{P_{B,c}P_{P,c}}{P_{L,c}}+\frac{(1-P_{B,c})(1-P_{P,c})}{1-P_{L,c}}}
\]
for outcome c. Units: dimensionless probability. Assumptions: P_L,c in (0,1), independence-ish, 365-day rates. Breakdown: P_L,c=0 or 1; sparse rates; ignores platoon, park, weather, context, precise outcome. Cite page 2. Need note source OCR but equation is standard Haechrel/log5. Is it okay? Yes.

2 Neural net:
\[
\hat{\mathbf p}(a)=\mathrm{softmax}(f_\theta(\mathbf x_a)), \quad \sum_{c=1}^{21}\hat p_c(a)=1
\]
where f is 2 hidden layers 80 nodes. Units dimensionless. Loss:
\[
\mathcal L_{CE}=-\frac{1}{N}\sum_{a=1}^{N}\sum_{c=1}^{21} y_{a,c}\log \hat p_c(a)
\]
nats if natural log. Breakdown: \hat p_c=0 with y=1 due log(0). Use clipping. Page 3/4. Good.

3 SHAP:
\[
\phi_i(v)=\sum_{S\subseteq F\setminus\{i\}}\frac{|S|!(|F|-|S|-1)!}{|F|!}\left(v(S\cup\{i\})-v(S)\right)
\]
Units: output units (wOBA, probability). Breakdown: exact computation exponential in |F|; approximations. Page 7. Need not state formula from paper but standard.

4 Markov:
\[
T_{ij}^{(a)}=P(S_{t+1}=j\mid S_t=i,\mathbf x_a), \quad \sum_j T_{ij}^{(a)}=1
\]
\[
E[R\mid i]=\sum_j T_{ij}\left(r_{ij}+E[R\mid j]\right)
\]
with absorbing out state. Units: runs per half-inning; T dimensionless. Breakdown: non-stochastic rows, missing events, infinite expectation if closed nonabsorbing class. Page 9/10.

5 RMSE:
\[
\mathrm{RMSE}=\sqrt{\frac{1}{N}\sum_{a=1}^N(\hat y_a-y_a)^2}
\]
units wOBA or runs. Page 5/11.

6 scaling:
\[
\hat R^{adj}_{y,a}=(1+\delta_{y-1})\hat R^{M}_{y,a}
\]
δ dimensionless. Breakdown: regime shift; overcorrection. Page 10.

Need mention "21 outputs" and "87 inputs" units. Good.

Need "THINK_TRACE" >=400 words. We can write ~600. Need multi-hop derivation and gray-zone audit. Include reasoning steps. Avoid raw `<`? Use "less than". Need no `<` in text. Use "at least" etc.

Need full XML. Need no markdown? Use plain text within tags. It's okay to use LaTeX. Need avoid `&` in text. Use "and" not ampersand. Avoid `<` by using "less than" or `\leq`? `\leq` is okay. In LaTeX, `\leq` no `<`. Good. Avoid `>`? `\geq` okay. No raw `<`. We can use `\sqrt{}`.

Need maybe include exact table values. Use "0.5091" etc.

Need be mindful of "exact singularity/breakdown regimes" for each equation. Include.

Need "when source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll cite exact quotes. Need not cite every sentence.

Let's draft.

Potential issue: "Haechrel’s equation" source has typo Haechrel vs Haechral. Use source spelling in quote. The formula: If P_L,c = 0 or 1. Also if P_B,c and P_P,c both 0? Numerator 0; denominator second term (1)(1)/(1-P_L) nonzero -> P=0. If both 1? Numerator 1/P_L, second 0 -> P=1. Good.

Need "source's formula" maybe we can say "The paper states Haechrel’s equation uses 365-day average rate-per-plate-appearance of each of seven possible outcomes: out, single, double, triple, home run, walk, and hit-by-pitch [PAGE 2]." Then present standard log5 form. Good.

Need "gray-zone audit": 
- Data leakage: date split 60/20/20 is good but features like 365-day moving averages may include same-day? Paper says a priori statistics; assume no. But gray zone: game-year and game-day features; if not centered, model can learn season trends. 
- Imputation: footnote 6 says minimum 40/20/10 PAs; if not met, impute league averages. This is a gray zone: imputation can make rare players look average; model still beats log5 on infrequent players per Table 2. 
- Scaling: adjusted Markov uses previous year's undershoot, so not pure out-of-sample; it's a one-year-lag calibration. This is allowed but must be fixed ex ante. 
- SHAP: local explanation not causal; e.g., Pitcher_historical no big change does not mean unimportant; source says exactly. Good. 
- Markov assumptions: baserunner advancement fixed 70/30 on single; missing steals/wild pitches; underprediction 12-15%. Good.

Need "multi-week traps" in geneology and ToM. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof: 
- Source's own feature table is a veto. Exact quote Page 4: "Weather 1 Game time temperature at the start of the game". Use [PAGE 4]. 
- Page 2: "Weather factors including temperature, wind direction, and humidity" as log5 limitation. Use [PAGE 2].
- Page 1: "approximately 90 different parameters" available. Use [PAGE 1].
- Page 13: future work minor league/fielding. Use [PAGE 13].
- Page 13: "We did not attempt to model how a game would evolve beyond the half-inning." exact.
Need "physical/biomechanical": no biomechanical variables in Table 1. Use page 4 table. Exit velocity only max/avg. So veto claims about biomechanics. Weather: only game-time temp; no wind/humidity. So veto claims about wind. Physical: no sprint speed except proxy via position; source says "could potentially be used ... as a proxy for the batter’s speed" [PAGE 4]. So speed claims are proxy not direct. Good.

Need "RLVR" maybe define "verifiable reward" not from source. We can say "RLVR here means an auditable reward computed from held-out metrics, not a wagering construct." But avoid betting word? "not a wagering construct" includes betting? Hmm "wagering" is betting-adjacent. Invariant says zero betting lines, not zero word betting. But better avoid. Say "RLVR here is a verifiable-reward audit: each scenario has a pass/fail metric recomputable from held-out data." Good.

Need final answer only. Ensure XML sections exact tags. Need possibly include `<THINK_TRACE>` content with no `<` characters. Use "less than" instead of `<`. In LaTeX, `\leq` is okay. Avoid `>`? `\geq` okay. Ampersand avoid. Use "and". Need curly quotes? Fine.

Need maybe include "PAGE 6 Table 2" values. Good.

Let's compose with enough words. Count approximate: THINK_TRACE ~650; SOURCE ~700; RETRO ~300; RECURSIVE ~300; CROSS ~350; RLVR ~350. Total ~2600. Good.

Need no markdown headers beyond XML. XML sections. Use line breaks.

Let's write carefully.

Potential issue: "verbatim quotes" exact from source with curly quotes. We'll quote exact strings. Need not escape apostrophes. Fine.

Need mention "PAGE 4" exact quote "Weather 1 Game time temperature at the start of the game" but in table it is "Weather 1 Game time temperature at the start of the game" across lines. We'll quote as "Game time temperature at the start of the game" [PAGE 4]. Good.

Need "Figure 4" etc. Cite.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s argument is a multi-layer prediction stack. At the lowest layer, a plate appearance is treated as a categorical outcome problem: 87 floating-point inputs are mapped to 21 MLB-defined outcomes [PAGE 3]. The paper explicitly says, “We use 87 floating point inputs (details below). We have 21 outputs, where each output represents the probability of a distinct PA outcome” [PAGE 3]. That is the meso layer. At the macro layer, those 21 probabilities are converted into base-out transition matrices for a half-inning Markov chain [PAGE 9]. The paper says, “We rely on Singlearity-PA’s prediction to create these transition matrices” [PAGE 9]. The evaluation layer then compares wOBA, home-run, and walk RMSE or categorical cross-entropy against log5 and league average [PAGE 5, PAGE 6]. Finally, the explanation layer uses Shapley values to attribute local and global feature importance [PAGE 7]. The derivation is therefore not “AI predicts baseball” in one jump; it is PA outcome distribution, then transition matrix, then run expectancy, then lineup optimization, then human explanation.

The main gray-zone audit is leakage and calibration. The paper’s date split is defensible: “we split the 1,694 calendar days so that 60% of the dates were used for training data, 20% for validation data, and 20% for test data” [PAGE 4]. But the features include 365-day batter and pitcher rates, 21-day recent rates, and 3-year head-to-head rates [PAGE 4, PAGE 15]. Those windows must be computed strictly before the PA timestamp. If a rolling window includes the PA being predicted, the model is no longer a priori. The paper states the inputs are “a priori statistics on a particular batter vs. pitcher plate appearance” [PAGE 3], so the intended audit is clear, but the implementation must enforce it. A second gray zone is imputation: footnote 6 says minimum PA thresholds are 40 for historical, 20 for recent, and 10 for head-to-head, and if not met “we impute all values in the category using league averages” [PAGE 15]. That is a deliberate shrinkage strategy, not a bug, but it means rare-player predictions are partially league-average predictions. Table 2 shows the model still beats log5 for “Infrequent Players” on wOBA and BB [PAGE 6], which is evidence that the shrinkage is not fatal.

A third gray zone is the Markov correction. The paper admits, “our predictions were consistently undershooting actual runs by 12-15%” [PAGE 10], and then says, “in 2017, we increased each prediction from Singlearity-Markov by 15.3%” [PAGE 10]. That is a prior-year calibration factor, not a structural fix. It is legitimate only if the run environment is stable and the factor is fixed before evaluation. If rule changes, baseballs, parks, or player behavior shift the run environment, the correction can overfit the prior season. The paper’s own Table 3 shows the order: RE24 overall RMSE 0.98412, unadjusted Markov 0.98644, adjusted Markov 0.98192 [PAGE 11]. So the correction is doing real work, but it is a one-year-lag calibration layer that should be audited separately.

A fourth gray zone is explanation. SHAP local plots explain deviation from an average prediction, not causal effect. The paper is careful in one place: “Pitcher_historical: Note that Wade Miley’s historical stats do not cause a big change to the predicted wOBA of this PA. This doesn’t mean that his stats are unimportant but that Miley’s historical stats are fairly typical” [PAGE 8]. That is the correct interpretation. A local Shapley value near zero means “near baseline in this case,” not “irrelevant in general.” The global plot is the average magnitude story [PAGE 7, PAGE 8]. The audit should therefore separate local attribution from global importance and from causal intervention. The paper does not claim causal identification, and it should not be read that way.

The physical and environmental audit is also constrained by the source itself. The introduction notes that a single pitch can contain “approximately 90 different parameters” [PAGE 1], including velocity, spin, and movement. But the model’s feature table is aggregated: batter historical, pitcher historical, recent, head-to-head, park factor, base state, position, platoon, exit velocity, inning, home or away, net score, pitch count, weather, GB/FB ratios, game year, and game day [PAGE 4]. Weather is only “Game time temperature at the start of the game” [PAGE 4]. There is no wind, humidity, spin, or biomechanical channel in the listed inputs. Thus any claim that the model proves a wind effect, a biomechanical effect, or an in-game weather effect is vetoed by the feature set. The paper itself lists wind direction and humidity as factors that log5 ignores [PAGE 2], but Singlearity-PA does not include them either; it includes only start-time temperature. That distinction is critical.

The multi-hop conclusion is that Singlearity-PA is strongest as a probabilistic PA model with useful explanation and as an input to a Markov run-expectancy model, not as a complete game simulator. The paper says, “We did not attempt to model how a game would evolve beyond the half-inning” [PAGE 13], and future work includes minor-league or international stats and fielding quality [PAGE 13]. The model also omits stolen bases and wild pitches in the Markov layer, which the authors identify as a source of underprediction [PAGE 10, PAGE 13]. These are not minor caveats; they define the boundary of admissible claims.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define a plate appearance \(a\) with feature vector \(\mathbf{x}_a \in \mathbb{R}^{87}\) and outcome category \(c \in \{1,\ldots,21\}\). Singlearity-PA is a neural network with two hidden layers of 80 nodes each [PAGE 4]. Its output is a probability simplex:

\[
\hat{\mathbf{p}}(a)=\mathrm{softmax}\left(f_{\theta}(\mathbf{x}_a)\right),
\qquad
\sum_{c=1}^{21}\hat p_c(a)=1,
\qquad
\hat p_c(a)\in[0,1].
\]

Units: \(\hat p_c(a)\) is dimensionless probability. Assumption: the 21 MLB outcome categories are mutually exclusive and exhaustive for the modeled PA event set. The paper states, “We use 87 floating point inputs (details below). We have 21 outputs, where each output represents the probability of a distinct PA outcome as defined by MLB” [PAGE 3]. The training loss is categorical cross-entropy:

\[
\mathcal{L}_{CE}
=
-\frac{1}{N}\sum_{a=1}^{N}\sum_{c=1}^{21}
y_{a,c}\log \hat p_c(a),
\]

where \(y_{a,c}\in\{0,1\}\) is the one-hot observed outcome. Units: nats per PA if the logarithm is natural; bits per PA if base 2. The paper says it used “categorical cross-entropy as our loss function” [PAGE 4]. Breakdown regime: \(\log \hat p_c(a)\) is singular when \(\hat p_c(a)=0\) and \(y_{a,c}=1\); implementations must clip probabilities or use a numerically stable softmax-cross-entropy. Also, if the 21 categories are not exhaustive, the simplex constraint forces probability mass onto an incomplete event set.

For comparison, the paper describes Haechrel’s extension of log5. The paper says, “Haechrel’s equation uses 365-day average rate-per-plate-appearance of each of seven possible outcomes: out, single, double, triple, home run, walk, and hit-by-pitch” [PAGE 2]. In standard log5 form, for outcome \(c\),

\[
P_{BP,c}
=
\frac{
\frac{P_{B,c}P_{P,c}}{P_{L,c}}
}{
\frac{P_{B,c}P_{P,c}}{P_{L,c}}
+
\frac{(1-P_{B,c})(1-P_{P,c})}{1-P_{L,c}}
},
\]

where \(P_{B,c}\) is the batter rate, \(P_{P,c}\) is the pitcher rate, and \(P_{L,c}\) is the league average rate, all per PA and dimensionless. Assumption: \(0 \lt P_{L,c} \lt 1\). Breakdown regimes: \(P_{L,c}=0\) makes the first denominator term singular; \(P_{L,c}=1\) makes the second term singular; near those boundaries the equation is numerically unstable even when finite. The paper’s stated limitations are substantive: “It performs accurately only on matchups between every day players” [PAGE 2], and it ignores platoon effects, park factors, weather, game context, and precise out type [PAGE 2, PAGE 3].

For explainability, the Shapley value for feature \(i\) is

\[
\phi_i(v)
=
\sum_{S\subseteq F\setminus\{i\}}
\frac{|S|!\left(|F|-|S|-1\right)!}{|F|!}
\left[
v(S\cup\{i\})-v(S)
\right],
\]

where \(F\) is the feature set and \(v(S)\) is the model output restricted to feature coalition \(S\). Units: the output unit, here probability or wOBA contribution. The paper says Shapley values provide “both local feature importance (a ranking of the features that affect a single prediction) and global feature importance (a single ranking of how important the input feature is to all of the predictions)” [PAGE 7]. Breakdown regime: exact Shapley computation is exponential in \(|F|\); for 87 features exact enumeration is computationally infeasible, so the paper’s SHAP implementation must use approximation or sampling. Also, Shapley values are attributional, not causal; a zero local value does not mean the feature is globally unimportant, as the paper notes for Wade Miley’s historical stats [PAGE 8].

For the Markov layer, let \(S_t=i\) be the base-out state before a PA and \(S_{t+1}=j\) the state after it. The transition matrix is

\[
T_{ij}^{(a)}
=
P\left(S_{t+1}=j \mid S_t=i,\mathbf{x}_a\right),
\qquad
\sum_{j} T_{ij}^{(a)}=1.
\]

Units: \(T_{ij}^{(a)}\) is dimensionless probability per transition. The paper describes state \(i\) as the starting base-out state, state \(j\) as the ending base-out state, and the transition matrix as the probabilities of moving from \(i\) to \(j\) [PAGE 9]. The expected runs from state \(i\) satisfy

\[
E[R\mid i]
=
\sum_{j} T_{ij}\left(r_{ij}+E[R\mid j]\right),
\]

where \(r_{ij}\) is runs scored on the transition and \(E[R\mid i]\) is in runs per half-inning. Assumption: the three-out state is absorbing for the half-inning. Breakdown regimes: if a row is not stochastic, the expectation is ill-defined; if the chain contains a closed non-absorbing class, expected runs can diverge; if transitions omit stolen bases, wild pitches, and multiple events, the expectation is biased downward. The paper reports exactly that: “our predictions were consistently undershooting actual runs by 12-15%” [PAGE 10], and future work says the Markov model “only accounted for the scorekeeping events associated with a batter’s plate appearance” [PAGE 13].

The prior-year scaling correction is

\[
\hat R^{adj}_{y,a}
=
\left(1+\delta_{y-1}\right)\hat R^{M}_{y,a},
\]

where \(\delta_{y-1}\) is the previous season’s fractional undershoot. Units: \(\delta\) is dimensionless; \(\hat R^{adj}\) is runs per half-inning. The paper says, “in 2016, actual run production was on average 15.3% higher than Singlearity-Markov. Therefore, in 2017, we increased each prediction from Singlearity-Markov by 15.3%” [PAGE 10]. Breakdown regime: if the run environment changes between \(y-1\) and \(y\), the factor overcorrects or undercorrects. It is a one-year-lag calibration, not a structural fix.

The reported accuracy metric is

\[
\mathrm{RMSE}
=
\sqrt{
\frac{1}{N}\sum_{a=1}^{N}
\left(\hat y_a-y_a\right)^2
},
\]

with units of the target: wOBA is dimensionless; runs per inning is runs per half-inning. Table 2 gives wOBA RMSE for all PAs as 0.5091 for Singlearity-PA, 0.5096 for Singlearity-NoState, 0.5151 for log5, and 0.5111 for LeagueAverage [PAGE 6]. Table 3 gives first-inning run RMSE overall as 0.98412 for RE24, 0.98644 for Singlearity-Markov, and 0.98192 for Singlearity-MarkovAdjusted [PAGE 11]. Breakdown regime: RMSE is scale-dependent and is not a proper scoring rule for probabilistic forecasts; it does not by itself prove calibration.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The paper positions log5 as the prior head-to-head method: “log5, created by sabermetrics pioneer Bill James, uses a formula that incorporates the winning percentage of two competing teams to predict the winner of the matchup” [PAGE 2]. It then says Matt Haechrel generalized James’ work to seven PA outcomes using 365-day rates [PAGE 2]. That lineage matters because Singlearity-PA is not rejecting log5’s question; it is replacing log5’s hand-built multiplicative structure with a learned nonlinear map over 87 inputs [PAGE 3, PAGE 4]. The paper’s claim is therefore incremental in problem statement and discontinuous in model class.

The explainability lineage is also explicit: Shapley values come from game theory, with Lloyd Shapley’s 1953 concept and the 1992 Nobel Prize in Economics, then later application to complex AI models [PAGE 7]. The paper cites Lundberg and Lee’s unified SHAP approach [PAGE 14]. The retrocausal reading is that a mid-century cooperative-game solution is retrofitted onto a 2021 neural network to make local and global attributions legible to managers, analysts, fans, players, and the press [PAGE 6, PAGE 7]. That is a scientific genealogy, not a causal claim about baseball.

The run-expectancy lineage runs through RE24 and Markov models. The paper says RE24 contains scoring expectancy for 24 base-out states but “does not take into account the batter, pitcher, lineup or other variables that can impact the expected offensive output” [PAGE 9]. It then cites Pankin’s Markov models and Bukiet et al.’s Markov-chain approach [PAGE 14]. The methodological trap is multi-week and multi-season: RE24 is stable because it is league-average; Singlearity-Markov is player-specific but inherits fixed baserunner-advancement assumptions, such as a runner on first going to second or third 70% or 30% of the time on a single [PAGE 9]. Those assumptions are not learned from the same 87-feature model, so the Markov layer is a hybrid of learned PA probabilities and hand-set transition rules.

The biggest multi-week trap is the rolling-window structure. The model uses 365-day batter and pitcher rates, 21-day recent rates, and 3-year head-to-head rates [PAGE 4, PAGE 15]. A 21-day window can look like a “hot streak” but may be injury recovery, mechanical change, or small-sample noise. The paper gives a concrete case: Aaron Judge’s “second game after returning from a 2-month stint on the IL” drives his predicted wOBA down because he has few recent PAs [PAGE 8]. That is a sensible shrinkage behavior, but it is also a trap if a manager reads the local SHAP plot as proof that the player is permanently worse. The 365-day window has the opposite trap: it can be too slow to reflect a real mechanical change. The 3-year head-to-head window has a sparse-data trap, which the paper handles by imputing league averages below 10 PAs [PAGE 15]. The correct audit is to test each window against a chronological holdout, not to treat any one window as causal.

The retrocausal calibration trap is the prior-season scaling factor. The paper uses 2016 undershoot to scale 2017 predictions [PAGE 10]. That is a legitimate ex ante calibration if fixed before the season, but it is retrocausal if the factor is chosen after seeing the test season. The paper’s Table 3 is overall favorable to the adjusted model, but the adjustment is not a structural correction for stolen bases, wild pitches, or multiple events [PAGE 10, PAGE 13]. It is a lagged bias correction. Any multi-week or multi-season deployment should re-estimate \(\delta\) only on prior seasons and should report both unadjusted and adjusted results, as the paper does.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The human layer is recursive because the model is meant to inform decisions that other humans will interpret and counter. The paper says the PA relationship “drives a large portion of baseball strategy, affecting decisions on batting orders, pinch hitters, relief pitchers, base running, sacrifice bunting, intentional walks and much more” [PAGE 1]. A manager who uses Singlearity-PA is not solving a static prediction problem; the opposing manager can change pitchers, shift fielders, or alter the lineup. The paper does not model this game-theoretic feedback loop. It models PA outcomes from historical data and then optimizes a first-inning lineup [PAGE 9, PAGE 11]. That is a one-sided decision aid, not a recursive equilibrium model.

The crisis habit regression is the fallback to familiar but weaker heuristics under pressure. The paper shows log5’s limitation: “It performs accurately only on matchups between every day players” [PAGE 2]. It also shows RE24’s limitation: RE24 “makes the same run expectancy prediction regardless of whether a pitcher is facing Murderer’s Row or a lineup of ‘has-beens’” [PAGE 9]. Under in-game pressure, a manager may regress to log5, RE24, or pure “gut” because those are legible and socially defensible. The paper’s answer is explainability: “Only in this way can team managers and baseball analysts have the confidence to explain and defend their decisions to management, fans, players and the press” [PAGE 6]. That is a theory-of-mind claim about how decision-makers justify predictions to other stakeholders, not a claim that SHAP values are causal.

The counter-trap is over-trusting a local explanation. A Shapley decision plot can show that Platoon gives Judge a boost or that Batter_recent lowers his wOBA [PAGE 8]. A manager might over-read that as a stable rule: “play the platoon match-up” or “bench the returning player.” But the paper’s own interpretation is narrower: Miley’s historical stats do not move the prediction much because they are “fairly typical,” not because pitcher history is unimportant [PAGE 8]. The counter-trap is to treat a local attribution as a universal strategy. The correct use is to compare the model’s probability distribution against the alternatives and against the cost of being wrong, not to fetishize one bar in a SHAP plot.

The clock is the temporal discipline that keeps the recursive human loop honest. The model is trained on 2011-2020 Statcast data and split by calendar dates [PAGE 4]. The Markov evaluation uses first innings from 2017-2020 and prior-season RE24 as baseline [PAGE 10]. The lineup example uses the 2019 NL All-Star starters and Justin Verlander [PAGE 11, PAGE 20]. Each of these is a timestamped decision. The clock trap is to update the model mid-game with information the model did not have at prediction time. The paper’s weather input is only “Game time temperature at the start of the game” [PAGE 4], so a manager cannot claim the model has incorporated a later wind shift or a later humidity change. The recursive theory of mind should therefore include a clock rule: predictions are pre-game or pre-PA snapshots; explanations are post-hoc; neither should be silently updated with future information.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical, biomechanical, and weather veto is decided by the feature table, not by narrative. The paper says a single pitch contains “approximately 90 different parameters” including velocity, spin rates, and ball movement [PAGE 1]. But the actual model uses 87 aggregated inputs, and weather is represented by exactly one field: “Game time temperature at the start of the game” [PAGE 4]. There is no wind direction, no humidity, no pitch spin, no pitch velocity, and no biomechanical sensor channel in Table 1 [PAGE 4]. Therefore any claim that Singlearity-PA proves a wind effect, a humidity effect, a spin-rate effect, or a biomechanical mechanism is vetoed by the source’s own feature set. The paper lists wind direction and humidity as factors that log5 ignores [PAGE 2], but it does not claim that Singlearity-PA includes them. The only admissible weather claim is about start-time temperature and park factor, and even that is confounded by venue, roof status, and season.

The physical/biomechanical veto has one partial proxy: exit velocity. The model includes the batter’s 3-year maximum and average exit velocity [PAGE 4]. It also includes batter position in the field, and the paper says that input “could potentially be used by a well-trained network as a proxy for the batter’s speed” [PAGE 4]. That is a proxy, not a direct sprint-speed measurement. The paper’s future work explicitly lists minor-league or international stats and fielding quality as missing inputs [PAGE 13]. So the cross-layer adjudication is: exit velocity is admissible for power-related outcomes; position is admissible as a proxy; direct biomechanics, sprint speed, and fielding quality are not admissible. This veto is not a criticism of the model; it is a boundary condition on interpretation.

The weather veto is stronger for in-game decisions than for pre-game decisions. The model’s temperature is fixed at game start [PAGE 4]. If a game begins at 79°F and a front moves in, the model has no update. If wind shifts from out to in, the model has no wind input. If humidity rises, the model has no humidity input. The paper’s own introduction names “temperature, wind direction, and humidity” as weather factors [PAGE 2], so the omission is visible. A manager can still use the model as a pre-game prior, but cannot claim it has resolved in-game weather. The correct cross-layer adjudication is to treat weather as a pre-game scalar covariate with known unmodeled residual variance.

The macro-layer veto is that the Markov chain does not model the full game. The paper says, “We did not attempt to model how a game would evolve beyond the half-inning” [PAGE 13]. It also says the Markov model “only accounted for the scorekeeping events associated with a batter’s plate appearance,” missing “wild pitches and stolen bases” [PAGE 13]. And the reported undershoot is 12-15% [PAGE 10]. Therefore claims about full-game strategy, bullpen usage, defensive substitutions, or roster composition are outside the validated scope. The paper’s own future work lists bench players, likely substitutions, and full-game modeling as unfinished [PAGE 13]. The cross-layer veto is: PA-level and first-inning-level claims are supported; full-game and biomechanical claims are not.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means a verifiable-reward audit: each scenario has a pass/fail metric that can be recomputed from held-out data, with no hidden adjustment after seeing the test set.

Scenario 1: Context ablation veto. Train two otherwise identical models, one with the full 87-input set and one with game context removed, as the paper’s Singlearity-NoState does. The paper describes Singlearity-NoState as a model “in which this context information was excluded from the inputs” [PAGE 5]. The verifiable reward is wOBA RMSE on all PAs. Prediction from Table 2: Singlearity-PA should be better than Singlearity-NoState, and both should be better than log5. The reported values are 0.5091, 0.5096, and 0.5151 respectively [PAGE 6]. Veto condition: if Singlearity-NoState is equal to or better than Singlearity-PA on the held-out all-PA wOBA RMSE, the claim that game context adds value is vetoed. A second verifiable check is the infrequent-player BB case: Table 2 reports Singlearity-PA 0.1145 and Singlearity-NoState 0.1138 [PAGE 6], so the context claim is not uniform across outcomes. Prediction: context helps overall wOBA, but the BB advantage for infrequent players may not survive ablation.

Scenario 2: Scaling-correction veto. For each season \(y\), compute Singlearity-Markov first-inning run expectancy, then apply the prior-season undershoot factor \(\delta_{y-1}\) without using season \(y\) outcomes to set the factor. The paper’s example is 2016 undershoot of 15.3% used for 2017 [PAGE 10]. The verifiable reward is first-inning run RMSE against actual runs. Prediction from Table 3: unadjusted Singlearity-Markov should be worse than prior-season RE24 overall, and Singlearity-MarkovAdjusted should be better than RE24 overall. The reported overall values are 0.98644, 0.98412, and 0.98192 [PAGE 11]. Veto condition: if the adjusted model is not lower than RE24 overall, or if the unadjusted model is already lower than RE24, the scaling story is vetoed. A stricter check is season-by-season: Table 3 shows 2017 adjusted 1.01199 versus RE24 1.01307, 2018 adjusted 0.94593 versus 0.95021, 2019 adjusted 1.00684 versus 1.00832, and 2020 adjusted 0.92357 versus 0.92545 [PAGE 11]. Prediction: the adjusted model should beat RE24 in each reported season, but the margin is small enough that a different season split could reverse it.

Scenario 3: Rare-player imputation veto. Use the paper’s own PA categories: “Everyday players” with both batter and pitcher at least 502 PAs, “Infrequent players” with either batter or pitcher below 100 PAs, and “Occasional players” for the rest [PAGE 6]. The paper’s imputation rule uses minimum thresholds of 40 PAs for historical, 20 for recent, and 10 for head-to-head, otherwise league averages [PAGE 15]. The verifiable reward is wOBA RMSE for infrequent players. Prediction from Table 2: Singlearity-PA should beat log5 on infrequent players, with 0.4925 versus 0.5120 [PAGE 6]. A second reward is BB RMSE for infrequent players: Singlearity-PA 0.1145 versus log5 0.1383 [PAGE 6]. Veto condition: if the model does not beat log5 on the infrequent-player wOBA RMSE, the claim that neural shrinkage handles sparse data is vetoed. Prediction: the imputation strategy should retain a large advantage on wOBA and BB for infrequent players, but the advantage on all outcomes should be smaller than for everyday players, because everyday-player wOBA RMSE is 0.5269 versus log5 0.5287, while infrequent-player wOBA RMSE is 0.4925 versus log5 0.5120 [PAGE 6]. The pattern is consistent with shrinkage helping most when history is weakest, but it must be tested on a chronological holdout rather than a random PA split.
</RLVR_COUNTERFACTUAL_VETOES>
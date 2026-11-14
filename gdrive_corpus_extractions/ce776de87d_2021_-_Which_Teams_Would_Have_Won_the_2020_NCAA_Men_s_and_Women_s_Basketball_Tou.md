---
source: "2021 - Which Teams Would Have Won the 2020 NCAA Men's and Women's Basketball Tournaments - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2021"
pages: 36
model: deepseek/deepseek-v4.1-flash-1017
words: 7511
---

<NATIVE_REASONING>
We need answer with exact XML sections and >=1000 words. Need analyze source. User asks likely produce frontier reasoning "DRIVE SOURCE" maybe task is to assess? Need infer: They provide source and instructions. Need respond with sections. Must include formal LaTeX, units, page citations, verbatim quotes. Zero betting lines: avoid odds/spreads/totals/moneylines. We can mention "betting scenarios" from future work? Invariant says never mention betting lines, but source includes "Apply to betting scenarios." We can cite verbatim? Hmm zero betting lines: "Never mention spreads, totals, moneylines, or odds." Mentioning "betting scenarios" maybe not line. Avoid odds word? They say zero betting lines, not zero word odds. But safest avoid betting references except maybe as source future work? Need not.

Need produce XML exact tags. Need maybe "THINK_TRACE" >=400 words. Need deep multi-hop derivation & gray-zone audit. Need total >=1000 words. Need cite exact [PAGE N] markers and verbatim quotes where source pages provided. Need formal equations units, assumptions, singularity/breakdown regimes. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof. Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions.

Need be careful: This source is about NCAA tournament win probabilities, Harville method, conformal prediction, bracket generation. Need derive. We can create "source operators and equations": Harville M_ij = H + S_i - S_j + e_ij units points (margin of victory). Win probability P(M_ij > 0). Knockout q_iJ recurrence. Conformal predictive distribution π formula. At-large probability P(L_i ≤ l). Need exact singularities: unidentified additive constants in S_i (rank deficiency), home advantage confounding if no home/away? Singular if no games connecting components, zero variance residuals, n finite, p>n, ties in conformity scores, bracket S-curve simplification, double-dip. Break down when teams have disconnected schedules; residual distribution tails; conference tournament cancellation; bracket S-curve invalid; dependence between games; injuries/momentum absent.

Need perhaps "GSE + GSI Frontier Reasoning Foundry" maybe expects "drive source" evaluation? Need answer as rigorous analysis.

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. We can trace Harville 1977, Edwards 1991, Vovk et al 2019, conformal prediction, NCAA selection. Multi-week traps: regular season data, conference tournaments cancellation, selection bias, COVID cancellation. "Retrocausal" maybe how later knowledge (2020 tournament cancellation) influences model assumptions, and how retrospective bracket simulation can leak. Need mention no actual 2020 tournament outcomes; probabilities are counterfactual, not validated. Avoid asserting winners. Need be clear.

Need "recursive theory of mind": Crisis habit regression vs counter-trap vs clock. We need interpret: "crisis habit regression" likely in sports: teams under pressure revert to habits; "counter-trap" maybe opponent adjusts; "clock" time pressure. Need apply to model: recursive ToM about teams/coaches? But we have no game data. Need discuss how model omits momentum/injuries/matchups [PAGE 25]; in crisis, teams may regress to regular-season habits captured by S_i; counter-trap = opponent-specific tactical adjustments not in additive model; clock = late-game possession variance, foul strategy, etc. Need say cannot verify from source; model has no time/score state. Use as gray-zone audit.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Basketball indoor; weather mostly travel/logistics, not in model. Biomechanical: injuries, fatigue, matchups, player availability not modeled. Physical: home advantage H assumes home court; NCAA neutral sites, so H from regular season may not transfer. Weather: winter travel disruptions, COVID cancellation; no variables. Need "veto proof": if physical availability invalidates S_i, model veto. Need include exact source quote "Does not account for: momentum, injuries, match-ups, etc." [PAGE 25]. "We simplify bracket generation..." [PAGE 18]. "Double-dip on overall team strength" [PAGE 25]. Need cite.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create counterfactual veto tests that are verifiable: e.g., perturb one team strength by injury; check calibration ECE/MCE; bracket S-curve vs actual selection; conformal exchangeability violation. Predictions: if inject synthetic disconnected component, S estimates shift by constant, win probs invariant? Need verifiable. Need specify predictions and veto conditions. Could be:
1. Disconnected schedule graph: add a team with only games vs itself? no games. Harville S unidentified; predictions for cross-component undefined; veto if implementation returns finite unique probabilities without constraint. Prediction: rank-deficiency, infinite solutions, probabilities unchanged under S_i+c for all? Wait Harville M = H + S_i - S_j, adding c to all S leaves M unchanged; within component, additive constant per connected component. For cross-component no edge, differences not estimable. Veto if no regularization/constraint.
2. Conformal exchangeability violation: use season 2019-2020 women's ECE 0.052 but MCE 0.189 [PAGE 24]; if distribution shift by conference tournament completions changes residuals, coverage fails. Predict MCE increases; veto if calibration not recomputed per season/sex. Need quote table values.
3. Bracket S-curve simplification: compare model bracket [PAGE 19, PAGE 34] to actual selection process; simulate alternative bracket permutations that preserve seeds but change regions; if win probabilities change beyond tolerance due to S-curve, model not robust. Prediction: top seed probabilities vary by region composition; veto if variance > some threshold. Could be verifiable by re-running with bracket permutations.

Need perhaps "3 verifiable RLVR veto scenarios + predictions" with exact metrics.

Need ensure total words >=1000. We likely write ~2000. Need exact XML. Need include LaTeX. Need not use markdown outside XML. Use units. Need avoid "odds" word? Hmm "zero betting lines" says never mention spreads, totals, moneylines, or odds. I should avoid the word "odds" entirely. But source page 17 says "estimated log odds" in logistic regression. If quoting, contains "odds". But invariant says never mention odds. We can avoid quoting that page or paraphrase "logit link" without quoting. We can cite page 17 but not quote "odds". But "when source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We can choose quotes that don't contain banned terms. Need quotes verbatim. Avoid "betting" maybe. The source page 26 says "Apply to betting scenarios." We can omit. Avoid "spreads, totals, moneylines, odds". We can mention "logistic regression" but not quote log odds. Good.

Need maybe "GSE" maybe "Generalized Sports Evaluation"? Need not.

Need be precise: In Harville equation, M_ij is observed margin of victory for team i playing at home against j (home score − away score). H home field advantage parameter. S_i, S_j strengths. e_ij error. Units: points. Need note intercept and strengths are not unique without constraint (e.g., sum S=0). The source example gives H=5.75 etc [PAGE 11]. In 4-team example, equations shown approximate. Good.

Knockout recurrence q_iJ = q_iJ−1 sum_{s in O_iJ} p_is q_sJ−1. Need define O_iJ opponents possible in round J? Actually source says probability for team i winning in round J. q_iJ = q_iJ−1 [sum_{s∈O_iJ} p_is q_sJ−1]. Need units dimensionless probability. Assumptions: independent rounds, fixed p_is, single-elimination, no reseeding? Breakdown if p_is not constant, games dependent, bracket not fixed. Need mention q_i0=1 maybe not in source but formal. Need cite [PAGE 4]. Need "Edwards 1991" [PAGE 4, PAGE 28].

Conformal predictive distribution formula: π(y_c, τ) = ... Need transcribe carefully from source page 29. It is piecewise:
π(y_c, τ) =
 (i+τ)/(n+1) if R_{n+1}(y_c) ∈ (R_{(i)}(y_c), R_{(i+1)}(y_c)) for i ∈ 0,...,n
 (i−1+2τ)/(n+1) if R_{n+1}(y_c) = R_{(i)}(y_c) for i ∈ 0,...,n
.
Where R_i(y_c)= y_i − \hat y_i(y_c), R_{n+1}(y_c)= y_c − \hat y_{n+1}(y_c), index (i) ith order statistic, τ ~ U(0,1). Need units: y in points (MOV), π dimensionless probability. Assumptions: exchangeability of conformity scores; proper training/retraining with hypothesized response; tie handling via τ. Breakdown: exchangeability violated by selection/COVID; ties distribution; small n; model misspecification; computational retraining. Need cite [PAGE 14, PAGE 29]. Source page 15 shows residual histograms; page 16 CDF; page 30 CPDs.

At-large probability: P(L_i ≤ l) = sum_{m=0}^l { sum_{A∈F_m} prod_{s∈A} p_s prod_{s∈A^C}(1-p_s) }. Need define L_i number of teams below? Source: "For team ranked i to make the tournament as an at large bid we have to look at every team below them and enumerate all possible combinations of conference outcomes" [PAGE 36]. L_i maybe number of lower-ranked teams that win conference tournaments? Need be careful. Formula dimensionless probability. Assumptions: independent conference tournament outcomes, p_s probabilities, F_m subsets of size m? Need note independence and fixed p_s; breakdown if outcomes dependent, p_s estimated with error, bracket S-curve. Need cite [PAGE 36]. Also page 21 tables probabilities. Page 33. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include all formal. Need breakdown singularity regimes. Need "gray-zone audit" in THINK_TRACE. Need multi-hop derivation: from MOV to win prob to bracket to champion. Explain chain: estimate S via linear model; residuals; conformal CDF gives P(M>0); p_is; q recurrence; selection probability. Need note double-dip: using overall strength in selection and bracket maybe overstates? Source says "Double-dip on overall team strength" [PAGE 25]. Need unpack: team strength used to estimate conference tournament win probabilities and at-large probabilities and then bracket; errors correlated. Need mention.

Need "retrocausal genealogy": Harville (1977) linear model for football ratings; Edwards (1991) combinatorial tournament; Vovk et al (2019) conformal predictive distributions; source 2021 retrospective. COVID cancellation creates counterfactual. Need "multi-week traps": regular season vs conference tournaments; incomplete conference tournaments; selection Sunday not held; women's data harder [PAGE 25]; conference champions table [PAGE 31]; men's situations [PAGE 32]; S-curve simplification [PAGE 18-19]. Need mention "retrocausal" maybe using post-cancellation known conference champions? The model uses completed conference tournaments to infer unfinished ones? Actually page 31 lists completed conference tournament winners; page 18 says 20 unfinished men's, 18 unfinished women's. They need probabilities of making tournament. This is retrocausal: later information (which conferences completed) determines situations. The "2020 tournament would have" is counterfactual; cannot validate against actual outcomes. Need avoid claiming winners. Good.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: Under high leverage late-game, teams revert to regular-season tendencies; additive S_i captures average but not state-dependent variance. The model's q recurrence assumes fixed p; no fatigue/foul trouble. 
- Counter-trap: Opponent-specific game plan can make p_is non-transitive; additive model cannot represent rock-paper-scissors matchups; source admits no match-ups [PAGE 25]. Recursive ToM: coach anticipates opponent adjustment; model has no strategic interaction. 
- Clock: Late-clock variance and possession count; model's MOV distribution is unconditional; win probability P(M>0) not time-resolved. The "clock" is a missing state variable. 
Need say gray-zone: if these dominate, model probabilities are not causal; only descriptive. Need cite.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need be specific:
- Physical: player availability, injury, fatigue, COVID. Source explicitly omits injuries [PAGE 25]. If a top player is unavailable, S_i is stale; use of fixed strength vetoes model. Proof: Harville M depends on S_i; if true S_i shifts by Δ, predicted P(M>0) changes monotonically; no term for availability.
- Biomechanical: matchups, pace, foul trouble, shooting variance. Additive model assumes e_ij iid; heteroskedasticity by style. Veto if residual variance differs by team/pace. Source has residual histograms [PAGE 15] but no formal heteroskedastic model. 
- Weather: indoor basketball; weather affects travel, schedule, illness; not in model. Since 2020 COVID, public health is dominant layer; model has no variable. Weather veto proof: if travel disruption changes rest days, H and e distribution shift; no term. Need maybe "weather" not central but required. 
Need "proof" maybe formal: If omitted variable Z affects M with coefficient β_Z, then E[M|S,H] = H+S_i-S_j+β_Z Z; estimated S absorbs Z if correlated with team; predictions biased by β_Z(Z_new - E[Z|S]). Veto when β_Z nonzero and Z_new outside training range. This is formal. Need include LaTeX. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need make them verifiable. Could include metrics and predictions. Need not mention betting. Use "reward" maybe. RLVR: "reinforcement learning with verifiable rewards" maybe we can define. Need 3:
1. Rank-deficiency invariance test. Construct schedule graph with two disconnected components. Fit Harville. Veto if unique S without constraint or cross-component probabilities vary under component-specific constant shifts. Prediction: within-component M predictions invariant to S_i+c_component; cross-component undefined; implementation should flag. Use equation. Verifiable by checking design matrix rank < p. 
2. Calibration drift test by sex/season. Use Table 9: women 2019-2020 conformal ECE 0.052, MCE 0.189; men 2019-2020 conformal ECE 0.121, MCE 0.375 [PAGE 24]. Wait table: top women's? Need parse page 24. It says "Table 9: Calibration comparison for all methods within each women's season (top) and men's season (bottom)". In text: top table likely women? The table has two blocks. First block values: 2014-2015 conformal ECE 0.077, linear 0.111, logistic 0.104; MCE 0.824 etc. Second block: 2014-2015 conformal ECE 0.086, linear 0.097, logistic 0.088; MCE 0.920 etc. Need know which is women vs men. It says top and bottom but page extraction shows both. In slide 23 "Men Women" calibration plot. Table 9 caption says women's season (top) and men's (bottom). So first block is women, second men? But first block 2019-2020 conformal ECE 0.121, MCE 0.375; second block 2019-2020 conformal ECE 0.052, MCE 0.189. Need check: The slide 24 text: "Table 9: Calibration comparison for all methods within each women’s season (top) and men’s season (bottom)". Thus top block = women, bottom = men. But earlier page 22 top women's win probabilities. The first block has 2019-2020 conformal ECE 0.121, linear 0.147, logistic 0.134; MCE 0.375, 0.331, 0.325. Second block has 2019-2020 conformal ECE 0.052, linear 0.098, logistic 0.114; MCE 0.189, 0.247, 0.289. So women 2019-2020 conformal ECE 0.121, MCE 0.375; men 2019-2020 conformal ECE 0.052, MCE 0.189. Need be correct. Let's parse: The first block likely women's because top. Yes. Use exact: "2019-2020 0.121 0.147 0.134 0.375 0.331 0.325" first block; second "2019-2020 0.052 0.098 0.114 0.189 0.247 0.289". We can say women top block conformal ECE 0.121, MCE 0.375; men bottom block conformal ECE 0.052, MCE 0.189 [PAGE 24]. Veto if recalibration on held-out season yields ECE > threshold or MCE > threshold. Prediction: conformal remains lower ECE than linear/logistic in most seasons? Actually women 2019-2020 conformal ECE 0.121 worse than logistic 0.134? Wait 0.121 < 0.134, yes. Linear 0.147. MCE conformal 0.375 worse than linear 0.331/logistic 0.325. Men conformal ECE 0.052 best, MCE 0.189 best. Need prediction: if distribution shift, conformal coverage fails; MCE may spike. Veto if ECE > 0.10 or MCE > 0.25 on held-out. This is verifiable.
3. Bracket S-curve counterfactual. Generate alternative bracket pairings consistent with seeds but different S-curve region assignments; compute champion probabilities. Veto if top-team probability changes by more than e.g. 0.02 absolute across bracket permutations, because model claims bracket simplification. Prediction: top seed probabilities like Kansas 0.269 [PAGE 35], UConn 0.289 [PAGE 22] will vary by region composition and selection; if variation large, S-curve is not innocuous. Need source quote: "We simplify bracket generation to make the task of constructing probabilities of making the tournament tractable (S-curve)." [PAGE 18]. Also "We (over)simplify the bracket generation process." [PAGE 25]. Verifiable by re-running. Good.

Need maybe include "RLVR" as "counterfactual vetoes with verifiable reward signals" and predictions. Need ensure not mention betting lines. Good.

Need "THINK_TRACE" >=400 words. We can write ~600 words. Need "deep multi-hop derivation & gray-zone audit." Include chain. Need not reveal hidden chain? The system asks for THINK_TRACE; we can provide a reasoned trace, not actual hidden chain. That's okay. Need be careful with "chain of thought" policies? There is no explicit policy in prompt, but we can provide summary derivations. The tag says THINK_TRACE, we can provide "reasoned audit" not internal chain. Fine.

Need total >=1000 words. We'll write maybe 2500. Need exact XML sections only. No markdown? XML okay. Need ensure valid-ish XML? Use tags and escape & maybe avoid &. Use LaTeX with < >? Need escape < in XML? Hmm if strict XML, < in text must be escaped. But these tags are XML-like; we can use LaTeX with \leq instead of <. Use \leq, \geq, \in, etc. Avoid raw < >. Use ampersand? Avoid. Use \text{...}. Use \prod. Good. Need page citations [PAGE N]. Use quotes with quotes. Need escape? Quotes fine. Use unicode? Fine.

Need maybe include "verbatim quotes" exactly from source. Need ensure quotes are verbatim. We can quote:
- "Given a collection of game-by-game win probabilities, can we generate tournament win probabilities for each team?" [PAGE 3]
- "The probability for a team i winning in round J is," [PAGE 4]
- "Mij = H + Si −Sj + eij" [PAGE 9] (source uses subscripts; quote okay)
- "Conformal prediction is an inference methodology based on how well incoming observations conform to previously seen observations." [PAGE 14]
- "We simplify bracket generation to make the task of constructing probabilities of making the tournament tractable (S-curve)." [PAGE 18]
- "We (over)simplify the bracket generation process." [PAGE 25]
- "Does not account for: momentum, injuries, match-ups, etc." [PAGE 25]
- "Double-dip on overall team strength." [PAGE 25]
- "Women’s data is much more difficult to obtain." [PAGE 25]
- "Apply to betting scenarios." Hmm avoid.
- "For team ranked i to make the tournament as an at large bid we have to look at every team below them and enumerate all possible combinations of conference outcomes" [PAGE 36]
- "In 2020, the NCAA Division 1 Basketball tournaments (along with several conference tournaments) were cancelled due to COVID-19." [PAGE 2]
- "We want to determine tournament win probabilities through the estimation of team strength." [PAGE 2]
- "We cannot calculate tournament win probabilities without generating probabilities for making the tournament." [PAGE 18]
- "Each team falls into one of five different situations." [PAGE 18]
- "The steps are as follows:" [PAGE 14] maybe not needed.
- "higher magnitude conformity scores correspond to hypothesized responses that are less likely." [PAGE 14]
- "Useful for generating prediction intervals around a predicted response value." [PAGE 14]
- Page 25 "Data Inconsistencies with naming convention." [PAGE 25] maybe quote.
- Page 12 table ranks.

Need include "source operators and equations" with exact page citations. Need maybe mention "q_iJ" recurrence exact. Need use "q_{iJ}" etc. Need note source has "qiJ = qiJ−1 [sum...]" [PAGE 4]. Need quote.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Need include units in each. Let's plan sections:

<THINK_TRACE>
Paragraphs:
1. Start: source is retrospective counterfactual for canceled 2020 tournaments; not actual winners. Quote page 2. Chain of inference: Harville MOV -> S -> residual distribution -> conformal CDF -> pairwise win prob -> Edwards recurrence -> bracket S-curve -> selection probabilities -> champion probabilities. Need mention citations pages 4,9,14,18,36.
2. Multi-hop derivation details: Harville design matrix; parameters H and S; rank deficiency; constraint; residual distribution; conformal retraining; CDF at zero; p_ij = P(M_ij>0). Then q recurrence. Then at-large formula. Then double-dip.
3. Gray-zone audit: assumptions not met: fixed strengths, independent games, exchangeability, S-curve, no injuries/momentum/matchups, women's data. Cite page 25. Consequence: probabilities are conditional on model, not causal. Need mention calibration table has ECE/MCE values. 
4. Need >=400 words. We can write ~650.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Harville equation with units, assumptions, singularity. Quote. Example H=5.75 etc.
- Knockout equation, units, assumptions, breakdown. Quote.
- Conformal predictive distribution, units, assumptions, breakdown. Quote page 14 and formula page 29.
- At-large formula, units, assumptions, breakdown. Quote page 36.
- Calibration metrics maybe ECE/MCE dimensionless; cite page 24. Not operator? Include.
- Maybe bracket S-curve as operator? It's mapping seeds to bracket. Cite page 19. No equation. Could state S-curve is deterministic mapping but not in source. 
Need exact singularity/breakdown regimes for each.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Harville 1977 football ratings -> Edwards 1991 tournament combinatorics -> Vovk 2019 CPD -> 2021 retrospective. Cite pages 28, 4, 29.
- COVID cancellation: counterfactual. Multi-week traps: regular season vs conference tournaments, incomplete conference tournaments, selection process, women's data, S-curve, double-dip. 
- "Retrocausal" issue: using completed conference tournaments and post-cancellation knowledge; actual tournament absent so no outcome validation; probabilities are model-based. 
- Multi-week traps: early season vs late season strength; injuries; conference tournament momentum; selection bias; bracket generation assumptions. 
Need maybe "retrocausal genealogy" not too long.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: late-game pressure -> regression to regular-season habits; model fixed S captures average but not state. 
- Counter-trap: opponent-specific adjustments; no match-up term; source admits. 
- Clock: time remaining, possession, foul strategy; no clock state. 
- Recursive ToM: coaches model opponents, players model pressure; model lacks strategic interaction. 
- Gray-zone: if game plan or clock effects dominate, q recurrence with fixed p is invalid. 
Need cite page 25.

<CROSS_LAYER_VETO_ADJUDICATION>
- Formal omitted-variable bias proof. 
- Physical: injuries, fatigue, COVID, availability. Quote page 25. Veto if player availability changes S beyond training residual quantile.
- Biomechanical: matchups, pace, foul trouble, shooting variance; heteroskedastic residuals. Veto if residual variance depends on style.
- Weather: indoor, but travel/rest/illness; no term; 2020 pandemic. Veto if schedule/travel shifts. 
- Need "proof" with equation and threshold. Maybe include "Cross-layer veto condition: |\Delta S_i| > q_{0.95}(|e|) or residual exchangeability fails." 
Need cite page 15 residual histograms, page 25 omitted variables.

<RLVR_COUNTERFACTUAL_VETOES>
- Scenario 1: disconnected schedule graph. Prediction: design matrix rank deficient; cross-component probabilities not identifiable; veto if model returns unique cross-component p without constraint. 
- Scenario 2: calibration drift by sex/season. Prediction: use Table 9 values; if held-out ECE > 0.10 or MCE > 0.25, veto. Cite page 24. 
- Scenario 3: bracket S-curve permutation. Prediction: champion probabilities like Kansas 0.269 and UConn 0.289 [PAGE 22,35] shift by >0.02 absolute under seed-consistent permutations; veto. 
Need maybe mention "verifiable" by re-running with fixed code and data, checking rank, ECE/MCE, permutation variance. Good.

Need ensure no banned terms: avoid "odds", "spread", "total", "moneyline", "betting". Source page 17 has "log odds" but we won't quote. Page 26 "betting scenarios" omit. Avoid "line" as in "lineage"? "lineage" contains line but not betting line. Fine. "spread" not. "total" maybe as word? We might use "total" in "total probability"? Avoid to be safe. Use "sum". "over" maybe no. Avoid "over/under". Fine.

Need maybe include "SI units" — basketball uses points, probability dimensionless. H and S in points. Error in points. Time? Not used. Information units? Conformal prediction probability dimensionless; maybe "nats" for log? Not needed. But prompt says "SI/information/probability units." We can state "points (MOV), dimensionless probabilities, no physical SI beyond points; if using log scores, nats." But avoid too much. Need include units explicitly.

Need "source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include many.

Need answer in XML only. Need no extra preamble. Use sections exact. Need ensure tags match:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe close all tags correctly. The prompt says "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable..." but closing tag should be </RLVR_COUNTERFACTUAL_VETOES>. Good.

Need write with LaTeX. In XML, backslashes okay. Need avoid raw ampersand. Use "and" not &. Use \&? Avoid.

Need mention "q_{iJ} = q_{iJ-1} \left[ \sum_{s \in O_{iJ}} p_{is} q_{sJ-1} \right]" with units. Good.

Need quote exact: Source page 4: "The probability for a team i winning in round J is," and formula. Quote "the probability of team i winning in round J" [PAGE 4]. Good.

Need quote page 9 exact: "Mij = H + Si −Sj + eij" and "Mij = observed margin of victory (MOV) for team i playing at home against team j (home score −away score)." Good. Use as verbatim.

Need quote page 14 exact: "Conformal prediction is an inference methodology based on how well incoming observations conform to previously seen observations." Good. Also "higher magnitude conformity scores correspond to hypothesized responses that are less likely." Good.

Need quote page 18 exact: "We simplify bracket generation to make the task of constructing probabilities of making the tournament tractable (S-curve)." Good.

Need quote page 25 exact: "Does not account for: momentum, injuries, match-ups, etc." Good. "Double-dip on overall team strength." Good. "We (over)simplify the bracket generation process." Good.

Need quote page 36 exact: "For team ranked i to make the tournament as an at large bid we have to look at every team below them and enumerate all possible combinations of conference outcomes" Good. Then formula. Good.

Need quote page 2 exact: "In 2020, the NCAA Division 1 Basketball tournaments (along with several conference tournaments) were cancelled due to COVID-19." Good. "We want to determine tournament win probabilities through the estimation of team strength." Good.

Need quote page 25 "Women’s data is much more difficult to obtain." Good. (Apostrophe curly; okay.)

Need page 24 table values. Need not quote entire table but cite values. The instruction says cite exact [PAGE N] markers and verbatim quotes. We can quote "Table 9: Calibration comparison for all methods within each women’s season (top) and men’s season (bottom)" [PAGE 24]. Good.

Need maybe quote page 22/35 probabilities. Table values not verbatim quote but cite. "Connecticut 0.289" [PAGE 22], "Kansas 0.269" [PAGE 35]. Good.

Need "retrocausal genealogy" maybe mention "Edwards, C. T. (1991). The combinatorial theory of single-elimination tournaments." [PAGE 28] quote. "Harville, D. (1977). The use of linear-model methodology to rate high school or college football teams." [PAGE 28] quote. "Vovk, V., Shen, J., Manokhin, V., and Min-ge, X. (2019). Nonparametric predictive distributions based on conformal prediction." [PAGE 28] quote. Good.

Need "multi-week traps" maybe list:
- Early-season vs late-season strength nonstationary; model uses regular season [PAGE 12].
- Conference tournaments incomplete; situations [PAGE 20].
- Selection process simplified; S-curve [PAGE 18].
- Women's data harder [PAGE 25].
- Double-dip [PAGE 25].
Need mention "multi-week" as temporal leakage: using end-of-season data to infer what would have happened in March; if model estimated after cancellation using completed conference tournaments, it is retrospective. Good.

Need maybe "crisis habit regression vs counter-trap vs clock" in recursive ToM. Need define each explicitly. Need not overdo.

Need "cross-layer veto" formal proof:
Let true data-generating process M_{ij} = H + S_i - S_j + \beta^\top Z_{ij} + e_{ij}, with Z omitted. If model omits Z, estimated strengths satisfy \hat S_i = S_i + \beta^\top \bar Z_i + ...; predicted \hat M = H + \hat S_i - \hat S_j. For future matchup with Z_{ij}^* different from training average, bias = \beta^\top (Z_{ij}^* - \bar Z_i + \bar Z_j). Veto when |bias| > q_{1-\alpha}(|e|). This is a "proof" of veto. Need include units: points. Good. Then physical/biomechanical/weather as Z. Good.

Need "RLVR" scenarios with predictions. Need maybe "RLVR" not defined? We can define "RLVR = reinforcement-learning verification with a verifiable reward signal" but maybe not necessary. Need include "verifiable reward" as pass/fail. Good.

Need ensure >=1000 words. Let's estimate. THINK_TRACE ~700 words. SOURCE ~900. RETRO ~400. RECURSIVE ~400. CROSS ~500. RLVR ~500. Total ~3400. Good.

Need no "betting" word. Avoid "odds" completely. But source page 17 quote "estimated log odds" not used. Avoid "log odds" phrase. Use "logit". Good.

Need maybe "moneyline" no. "spread" no. "total" maybe avoid "total probability"; use "sum". "over" no. "under" no. Good.

Need maybe "winner" okay. "win probabilities" okay. "champion probabilities" okay.

Need "GSE + GSI Frontier Reasoning Foundry" maybe no need. But maybe include "Frontier audit" in first paragraph.

Need be careful with XML special characters: & in "women’s and men’s" no ampersand. Use apostrophes. Use less-than in LaTeX? We use \leq. In text "greater than" instead of >. Good. Use \(...\) maybe okay. In XML, backslash okay. Use \left[ \right]. Use \sum. Use \prod. Use \in. Use \mathbb? okay. Need not escape underscores. XML text can contain underscores. Fine. Need avoid `<` and `&`. Use "and" not "&". Good.

Need maybe use "PAGE 24" exact. Good.

Need answer solely XML. Let's draft.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" should include "formal LaTeX, units, page citations, breakdown." We'll structure bullet-like paragraphs. Need no markdown? We can use semicolons.

Let's write carefully.

Need include "q_{i0}=1" assumption not in source? We can state "with convention q_{i0}=1" not source? It's a formal addition. Fine. Need cite source for recurrence. Good.

Need "conformal predictive distribution formula" exact. Need transcribe piecewise. The source formula has weird:
π(yc, τ) =
 { (i+τ)/(n+1) if R_{n+1}(yc) ∈ (R_{(i)}(yc), R_{(i+1)}(yc)) for i ∈ 0,...,n
   (i−1+2τ)/(n+1) if R_{n+1}(yc) = R_{(i)}(yc) for i ∈ 0,...,n
}
We can write:
\[
\pi(y_c,\tau)=
\begin{cases}
\frac{i+\tau}{n+1}, & R_{n+1}(y_c)\in (R_{(i)}(y_c),R_{(i+1)}(y_c)),\ i\in\{0,\ldots,n\},\\
\frac{i-1+2\tau}{n+1}, & R_{n+1}(y_c)=R_{(i)}(y_c),\ i\in\{0,\ldots,n\},
\end{cases}
\]
with \(R_i(y_c)=y_i-\hat y_i(y_c)\), \(R_{n+1}(y_c)=y_c-\hat y_{n+1}(y_c)\), \(\tau\sim U(0,1)\). Good. Need note index (i) order statistic. Units: y points; π dimensionless. Good.

Need "At-large probability" formula:
\[
P(L_i \leq \ell)=\sum_{m=0}^{\ell}\left(\sum_{A\in \mathcal F_m}\prod_{s\in A}p_s\prod_{s\in A^C}(1-p_s)\right).
\]
Need define \mathcal F_m collection of subsets of size m? Source doesn't define F_m explicitly. We can say "where \mathcal F_m is the collection of size-m sets of lower-ranked conference-winner events in the enumeration" as assumption. Need cite page 36. Units dimensionless. Breakdown if independence fails. Good.

Need "Harville" equation with units:
\[
M_{ij}=H+S_i-S_j+e_{ij}, \quad [M_{ij}]=[H]=[S_i]=[e_{ij}]=\text{points}.
\]
Assumptions: additive strengths, home advantage constant, errors zero mean independent with finite variance, schedule connected. Singularity: design matrix has rank deficiency because adding c to all S leaves fitted M unchanged; need constraint \sum_i S_i=0. For disconnected schedule graph, one additive constant per component unidentifiable; cross-component differences not estimable. If no home/away distinction, H not identifiable. If n \leq p or zero residual variance, conformal residual distribution degenerate. Good.

Need "Knockout" equation:
\[
q_{iJ}=q_{iJ-1}\sum_{s\in O_{iJ}}p_{is}q_{sJ-1}, \quad q_{i0}=1.
\]
Units dimensionless. Assumptions: fixed bracket, independent round outcomes? Actually recurrence assumes p_is fixed and q_sJ-1 independent? It uses probability team s reaches round J and i beats s. It assumes conditional independence of outcomes? We can state "single-elimination, fixed possible opponent set O_{iJ}, constant pairwise probabilities, no reseeding, no correlation across rounds." Breakdown if p_is depends on round/state, injuries, bracket changes, non-independence. Good.

Need "calibration" Table 9. ECE and MCE dimensionless. ECE = expected calibration error, MCE = maximum calibration error. Cite page 24. Good.

Need "S-curve" not equation but operator. Cite page 19 table. Good.

Need "RLVR" scenario 3 use "seed-consistent permutations" but source S-curve table [PAGE 19] and bracket [PAGE 34]. Good.

Need "weather" maybe mention "indoor basketball" but source doesn't mention weather. We can state no weather variable in source; cross-layer veto by omission. The prompt requires weather veto proof. Good.

Need "physical/biomechanical/weather veto proof" maybe include "proof by omitted-variable bias" as above. Good.

Need "retrocausal genealogy" maybe "retrocausal" not common. We can explain: the later fact of cancellation and later completed conference tournaments are used to construct the counterfactual; this is a retrocausal modeling genealogy. Good.

Need "recursive theory of mind" maybe "crisis habit regression" is a concept not in source. We can say "If one imports a crisis-habit model,..." It is an audit. Good.

Need "gray-zone audit" in THINK_TRACE. Good.

Need "zero toy equations" avoid fake ratios. We use source equations only and omitted-variable bias equation (formal, not toy). Good.

Need "ZERO BETTING LINES" no mention. Good.

Let's craft final. Ensure word count. Need maybe no "odds". Check final text for banned words. I'll avoid.

Need include "PAGE 24" values. Need be accurate. Let's verify table 9 orientation. We might avoid specifying which block is which if uncertain? But we need cite. We can say "Table 9 reports, in the 2019-2020 row of the women’s top block, conformal ECE 0.121 and MCE 0.375; in the men’s bottom block, conformal ECE 0.052 and MCE 0.189 [PAGE 24]." This matches caption. Good.

Need maybe "women’s top block" if wrong? Caption says top women, bottom men. Good.

Need "UConn" vs "Connecticut". Source says Connecticut. Use "Connecticut 0.289" [PAGE 22]. Good.

Need "Kansas 0.269" [PAGE 35]. Good.

Need "Table 12" men's situations [PAGE 32]. Maybe not.

Need "retrocausal genealogy" mention "20 unfinished men’s conference tournaments; 18 unfinished women’s conference tournaments" [PAGE 18]. Good.

Need "five different situations" [PAGE 18, 20]. Good.

Need "S-curve" table [PAGE 19]. Good.

Need "model does not account for momentum, injuries, match-ups" [PAGE 25]. Good.

Need "double-dip" [PAGE 25]. Good.

Need "women's data harder" [PAGE 25]. Good.

Need "conference champions" [PAGE 31]. Good.

Need "men's probabilities of making tournament" [PAGE 33]. Good.

Need "top ranked women's win probabilities" [PAGE 22]. Good.

Need "top ranked men's win probabilities" [PAGE 35]. Good.

Need "calibration comparison" [PAGE 24]. Good.

Need "CPD formula" [PAGE 29]. Good.

Need "conformal steps" [PAGE 14]. Good.

Need "residual histograms" [PAGE 15]. Good.

Need "CDF/m P^(M>m)" [PAGE 16]. Good.

Need "Harville example strengths" [PAGE 11]. Good.

Need "four team example" [PAGE 10]. Good.

Need "rank table top 10" [PAGE 12]. Good.

Need "question of interest" [PAGE 3]. Good.

Need "background" [PAGE 2]. Good.

Need "references" [PAGE 28]. Good.

Need maybe "SI units": points are not SI, but basketball score. We can say "score points (not SI; basketball scoring unit)" because prompt says SI/information/probability units. State "no SI length/mass/time enters; the score unit is points." Good.

Need "information units" maybe "calibration errors are dimensionless probabilities; if using log score, nats." Could include. Good.

Need "exact singularity/breakdown regimes" for each. We'll list.

Need "RLVR" maybe include "Verifiable reward": For scenario 1, reward = 1 if rank check flags; 0 otherwise. Prediction. Good.

Need "3 verifiable RLVR veto scenarios + predictions." We can label "Veto 1", "Veto 2", "Veto 3". Good.

Need maybe "counterfactual" in each: replace data, see if model output changes. Good.

Let's write final now. Need ensure no extra text. Use XML. Need no markdown code fences. Good.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a report of actual 2020 NCAA tournament winners. It is a retrospective counterfactual exercise after cancellation: “In 2020, the NCAA Division 1 Basketball tournaments (along with several conference tournaments) were cancelled due to COVID-19” [PAGE 2], and the authors “want to determine tournament win probabilities through the estimation of team strength” [PAGE 2]. The inference chain is therefore conditional, not causal: regular-season game scores feed a Harville-type margin-of-victory model [PAGE 9], residuals feed conformal predictive distributions [PAGE 14, PAGE 29], pairwise win probabilities feed an Edwards-style single-elimination recurrence [PAGE 4], and bracket/selection probabilities feed tournament-win probabilities [PAGE 18, PAGE 36]. A multi-hop audit must separate four layers: parameter identification, residual exchangeability, bracket construction, and cross-layer omission. First, the Harville layer estimates additive team strengths from margins. The key structural issue is that strengths are identified only up to an additive constant unless constrained, because only differences \(S_i-S_j\) enter. If the schedule graph is disconnected, each component has its own unidentified additive constant and cross-component differences are not estimable. Second, the conformal layer converts a residual distribution into a predictive distribution for a hypothesized margin. This requires exchangeability of conformity scores. The method retrains with a hypothesized response and compares conformity scores; “higher magnitude conformity scores correspond to hypothesized responses that are less likely” [PAGE 14]. If the 2019-2020 season is distributionally different from prior seasons, exchangeability is not guaranteed. Third, the bracket layer assumes fixed pairwise probabilities and a simplified S-curve bracket. The authors explicitly “simplify bracket generation to make the task of constructing probabilities of making the tournament tractable (S-curve)” [PAGE 18], and later concede “We (over)simplify the bracket generation process” [PAGE 25]. Fourth, the omission layer is acknowledged: the model “Does not account for: momentum, injuries, match-ups, etc.” [PAGE 25] and commits “Double-dip on overall team strength” [PAGE 25]. The gray-zone is that these omissions are not small perturbations if player availability or match-up heterogeneity dominates. The model also uses “Women’s data is much more difficult to obtain” [PAGE 25], which increases measurement and naming-inconsistency risk. Calibration evidence is mixed: Table 9 reports, for the women’s top block in 2019-2020, conformal ECE \(0.121\) and MCE \(0.375\), while the men’s bottom block reports conformal ECE \(0.052\) and MCE \(0.189\) [PAGE 24]. Thus even the authors’ preferred conformal method has a large maximum calibration error in the women’s 2019-2020 row. The correct interpretation is that the output probabilities are model-conditional summaries of regular-season strength and residual conformity, not verified counterfactual champion probabilities. The chain is mathematically coherent only under additive strengths, fixed pairwise probabilities, independent or exchangeable residuals, and a bracket/selection approximation that matches the true selection process. Those conditions are exactly where the gray-zone audit must veto strong causal claims.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Harville margin-of-victory operator: the source states “Mij = H + Si −Sj + eij” and defines “Mij = observed margin of victory (MOV) for team i playing at home against team j (home score −away score)” [PAGE 9]. Formally,
\[
M_{ij}=H+S_i-S_j+e_{ij},
\]
with units \([M_{ij}]=[H]=[S_i]=[S_j]=[e_{ij}]=\text{points}\). Here points are the basketball score unit; no SI length, mass, or time enters the core equation. Assumptions: additive team strength, constant home advantage, zero-mean finite-variance errors, and a connected game schedule. The exact singularity regime is additive non-identification: adding a constant \(c\) to every \(S_i\) leaves every fitted \(M_{ij}\) unchanged, so a constraint such as \(\sum_i S_i=0\) is required. If the schedule graph has multiple connected components, one additive constant per component is unidentified and cross-component probabilities are not estimable without regularization or prior constraints. If home and away status is not encoded, \(H\) is confounded. The four-team example gives \(\hat H=5.75\), \(\hat S_1=-6.125\), \(\hat S_2=9.375\), \(\hat S_3=-3.375\), \(\hat S_4=0.125\) [PAGE 11], illustrating that strengths are relative, not absolute. Breakdown occurs when errors are heteroskedastic by team or style, when strength changes within the season due to injury or roster change, or when the schedule graph is sparse.

Knockout tournament operator: the source states “The probability for a team i winning in round J is,” and gives \(q_{iJ}=q_{iJ-1}[\sum_{s\in O_{iJ}}p_{is}q_{sJ-1}]\), with the quoted gloss “the probability of team i winning in round J” [PAGE 4]. Formally, with convention \(q_{i0}=1\),
\[
q_{iJ}=q_{iJ-1}\sum_{s\in O_{iJ}}p_{is}q_{sJ-1},
\]
where \(q_{iJ}\) is dimensionless probability, \(O_{iJ}\) is the set of possible opponents for team \(i\) in round \(J\), and \(p_{is}\) is the pairwise win probability for \(i\) against \(s\). Assumptions: single-elimination, fixed bracket, constant pairwise probabilities across rounds, and no reseeding or dependence across rounds. Breakdown occurs if \(p_{is}\) depends on round, score state, fatigue, foul trouble, or prior match-ups; if bracket pairings change; or if the \(q_{sJ-1}\) events are correlated through shared opponents. The source attributes the combinatorial basis to Edwards [PAGE 4, PAGE 28].

Conformal predictive distribution operator: the source describes conformal prediction as “an inference methodology based on how well incoming observations conform to previously seen observations” [PAGE 14]. The predictive distribution is given as
\[
\pi(y_c,\tau)=
\begin{cases}
\frac{i+\tau}{n+1}, & R_{n+1}(y_c)\in (R_{(i)}(y_c),R_{(i+1)}(y_c)),\ i\in\{0,\ldots,n\},\\
\frac{i-1+2\tau}{n+1}, & R_{n+1}(y_c)=R_{(i)}(y_c),\ i\in\{0,\ldots,n\},
\end{cases}
\]
where \(R_i(y_c)=y_i-\hat y_i(y_c)\), \(R_{n+1}(y_c)=y_c-\hat y_{n+1}(y_c)\), \((i)\) is the \(i\)-th order statistic of conformity scores, and \(\tau\sim U(0,1)\) [PAGE 29]. Units: \(y_c\), \(y_i\), and residuals are in points; \(\pi\) is dimensionless probability. Assumptions: exchangeability of conformity scores, correct retraining with the hypothesized response, and adequate tie handling via \(\tau\). Exact breakdown regimes: exchangeability failure under distribution shift, selection effects from incomplete conference tournaments, small \(n\), model misspecification, or degenerate residual variance. If residuals are not exchangeable, \(\pi\) is not a valid predictive probability even if it is numerically well-formed. The source’s residual histograms [PAGE 15] and cumulative curves [PAGE 16] are descriptive diagnostics, not a proof of exchangeability.

At-large selection operator: the source states “For team ranked i to make the tournament as an at large bid we have to look at every team below them and enumerate all possible combinations of conference outcomes” [PAGE 36], and gives
\[
P(L_i\leq \ell)=\sum_{m=0}^{\ell}\left(\sum_{A\in \mathcal F_m}\prod_{s\in A}p_s\prod_{s\in A^C}(1-p_s)\right),
\]
where \(L_i\) is the count of relevant lower-ranked conference-winner events, \(p_s\) are conference-tournament win probabilities, and \(\mathcal F_m\) is the collection of size-\(m\) subsets in the enumeration. Units: probability, dimensionless. Assumptions: independent conference outcomes, fixed \(p_s\), and a complete enumeration of relevant lower-ranked teams. Breakdown occurs if conference outcomes are dependent, if \(p_s\) are estimated with correlated errors, if the set of relevant teams is misclassified, or if the S-curve bracket simplification changes who is “below” whom. The source itself flags the simplification: “We simplify bracket generation to make the task of constructing probabilities of making the tournament tractable (S-curve)” [PAGE 18]. Calibration metrics ECE and MCE are dimensionless probabilities; Table 9 reports them by season and method [PAGE 24]. These are not SI units; they are probability-scale errors.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit in the references: Harville’s 1977 linear-model rating of football teams, Edwards’s 1991 combinatorial theory of single-elimination tournaments, and Vovk et al.’s 2019 nonparametric predictive distributions based on conformal prediction [PAGE 28]. The 2021 source sits downstream of all three: Harville supplies the additive strength model, Edwards supplies the knockout recurrence, and Vovk et al. supply the conformal predictive distribution. The retrocausal twist is that the 2020 tournaments were cancelled [PAGE 2], so the “winners” are counterfactual model outputs. The authors must also reconstruct tournament fields because “We cannot calculate tournament win probabilities without generating probabilities for making the tournament” [PAGE 18], and “Each team falls into one of five different situations” [PAGE 18]. They note “20 unfinished men’s conference tournaments; 18 unfinished women’s conference tournaments” [PAGE 18], and list completed conference champions [PAGE 31]. This is a genealogy of retrospection: later information about which conference tournaments completed, and later bracket simplification choices, shape the counterfactual probabilities. Multi-week traps include early-season versus late-season strength drift, conference-tournament momentum, injury timing, selection-committee behavior, and the difference between automatic bids and at-large enumeration. The S-curve method [PAGE 19] is a tractability device, not a verified selection model; the authors concede “We (over)simplify the bracket generation process” [PAGE 25]. They also concede “Double-dip on overall team strength” [PAGE 25], meaning the same strength estimates enter both selection probabilities and bracket advancement probabilities, so errors are correlated across layers. The women’s data problem is another trap: “Women’s data is much more difficult to obtain” [PAGE 25]. The correct historical reading is that this is a model-based counterfactual genealogy, not an observed tournament history.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under late-game pressure, teams may revert to regular-season habits and default actions. The source’s additive \(S_i\) captures an average strength but not a state-dependent habit shift; the knockout recurrence uses fixed \(p_{is}\) [PAGE 4]. If pressure changes effective strength, the model’s fixed-point probabilities are stale. Counter-trap: an opponent can install a match-up-specific plan that makes pairwise probabilities non-transitive or state-dependent. The source explicitly says the model “Does not account for: momentum, injuries, match-ups, etc.” [PAGE 25]. A recursive theory-of-mind audit therefore treats \(p_{is}\) as a strategic equilibrium object, not a constant: coach A models coach B’s adjustment, and the model has no term for that recursion. Clock: late-clock possession count, foul strategy, and score-state variance are absent from the Harville and Edwards layers. The model produces \(P(M_{ij}>0)\) over an unconditional margin distribution, not a time-resolved win probability. If the clock layer dominates, the fixed \(q_{iJ}\) recurrence is an approximation. The gray-zone verdict is that crisis-habit regression, counter-trap adjustments, and clock effects are all omitted variables; they can veto strong claims about champion probabilities even when the arithmetic is correct.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto can be stated as an omitted-variable bias proof. Suppose the true margin is
\[
M_{ij}=H+S_i-S_j+\beta^\top Z_{ij}+e_{ij},
\]
where \(Z_{ij}\) is a physical, biomechanical, or environmental layer omitted by the source model. If the fitted model omits \(Z\), then estimated strengths absorb training-period averages of \(Z\). For a future matchup with \(Z_{ij}^\star\), the prediction bias is approximately
\[
\Delta M_{ij}=\beta^\top\left(Z_{ij}^\star-\bar Z_i+\bar Z_j\right),
\]
in points. A veto is justified when \(|\Delta M_{ij}|\) exceeds a residual quantile such as \(q_{0.95}(|e|)\), because the omitted layer moves the margin outside the model’s calibrated error envelope. Physical veto: injuries, illness, fatigue, and player availability are not modeled; the source admits “Does not account for: momentum, injuries, match-ups, etc.” [PAGE 25]. If a key player is unavailable, \(S_i\) is not the relevant strength. Biomechanical veto: pace, foul trouble, shooting variance, and style match-ups can produce heteroskedastic residuals; the source’s residual histograms [PAGE 15] do not model this structure. Weather veto: basketball is indoor, but weather and public-health conditions affect travel, rest, and illness; the 2020 cancellation is the extreme case [PAGE 2]. No weather or public-health variable enters the Harville equation [PAGE 9] or the conformal predictor [PAGE 29]. Therefore, if travel disruption or illness changes availability, the model’s \(H\) and error distribution are misspecified. The veto proof is not that the model is mathematically wrong; it is that the omitted layer is non-ignorable and outside the training distribution.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1: disconnected-schedule rank test. Counterfactually split the game graph into two components with no cross-play, fit the Harville model, and check the design-matrix rank. Prediction: the strength vector is non-unique by one additive constant per component; cross-component pairwise probabilities are not identified. Verifiable reward: pass only if the implementation either imposes \(\sum_i S_i=0\) plus component constraints or refuses to emit cross-component probabilities. Veto if it returns unique cross-component probabilities without a stated constraint. This follows directly from \(M_{ij}=H+S_i-S_j+e_{ij}\) [PAGE 9].

Veto 2: calibration-drift test by season and sex. Use held-out seasons and recompute ECE and MCE. Prediction from Table 9: the 2019-2020 women’s top block has conformal ECE \(0.121\) and MCE \(0.375\), while the men’s bottom block has conformal ECE \(0.052\) and MCE \(0.189\) [PAGE 24]. A reasonable verifiable veto threshold is ECE greater than \(0.10\) or MCE greater than \(0.25\) on a held-out season; under that rule the women’s 2019-2020 conformal row is vetoed for maximum calibration error. Veto if the method is claimed to be calibrated while exceeding the threshold without recalibration.

Veto 3: S-curve bracket-permutation test. Counterfactually generate seed-consistent bracket permutations that preserve the seed list but alter region composition, then recompute champion probabilities. Prediction: top-team probabilities such as Connecticut \(0.289\) [PAGE 22] and Kansas \(0.269\) [PAGE 35] will shift under permutations if the S-curve is not innocuous. Verifiable reward: pass only if the absolute change in each top-team probability stays below a pre-registered tolerance, for example \(0.02\). Veto if the ranking or probability changes beyond tolerance, because the source already warns “We (over)simplify the bracket generation process” [PAGE 25] and “We simplify bracket generation ... (S-curve)” [PAGE 18].
</RLVR_COUNTERFACTUAL_VETOES>
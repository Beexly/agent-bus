---
source: "2019 - A Data Driven Goalkeeper Evaluation Framework - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 9514
---

<NATIVE_REASONING>
We need answer user asks DRIVE SOURCE etc. Need produce analysis of paper with required XML sections, >=1000 words depth, exact XML sections, zero betting lines, formal equations units, page citations exact [PAGE N] markers and verbatim quotes. Need be careful source text has pages? It says PAGES 15 but provided text includes page markers? Actually source text begins with comment then headers. There are page footers "1", "2"... but not explicit [PAGE N]. We need cite exact [PAGE N] markers and verbatim quotes. We can infer page numbers from footer? The source has page numbers at bottom: 1, 2, 3, etc. But user says PAGES: 15. We can cite [PAGE 2] etc based on displayed page footers. Need include verbatim quotes. Need not mention betting lines. Need no toy equations. Need formal LaTeX equations with units, assumptions, singularity/breakdown regimes. We can construct equations from paper's metrics. Need include at least 1000 words across exact XML sections. Need ensure sections exact tags. Need answer only with XML? Likely yes. Need include sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need maybe include all. Need mention source operators and equations. Need cite exact [PAGE N] markers. Need verbatim quotes from source. Need no fake ratios. Need formal LaTeX equations, units. We need audit gray zones. Need derive multi-hop. Need be detailed.

Let's parse paper. It is "A Data Driven Goalkeeper Evaluation Framework" by Derrick Yam, StatsBomb. Metrics:
- GSAA = sum PSxG_i - GA (or total PSxG faced - total goals conceded). Equation 1. GSAA% = GSAA/SOT? Paper: "standardize metric by dividing by total number of shots a goalkeeper faces (SOT)" Equation 2. Table GSAA% values like de Gea 9.2%, GA 24, PSxG 38, SOT 142, GSAA 13.0. Check 13/142 = 9.15%. yes.
- PSxG model: xgboost logistic regression binary Goal/Saved; predictors shot characteristics and defensive shape. Excludes GK location. Variables: defensive density behind ball = sum inverse distances for each defender between shot and goal; distance from shot to center of goal frame; estimated location ball expected to cross goal line given trajectory; attacking speed from start of possession = distance from possession gain to shot location / time. xgboost params: exact tree, max depth 6, sample 30% predictors, eta 0.03, 10-fold CV.
- Calibration important; Figure 1. Need mention systematic calibration flaw biases GSAA%.
- Positional deviations: KNN 20 most similar shots based on x,y location, shot type (free kick/open play), headed. Average GK x,y = "optimal position". xdiff, ydiff. Then average deviation. Figure 3 best Courtois, worst Gomes. Assumes average GK position optimal. Paper admits may not be.
- Defensive activities: Claimables xC = Pr(Collected | X). Claimables defined Appendix A1: all passes labelled "cross" plus all high passes whose paths intersect box. xC model covariates: trajectory point-slope from beginning/end; intersection with radius 6 yards and 15 yards around center of goal frame; beginning x/y, pass angle, pass height, pass type, time, competition. Same xgboost params. CLCAA = sum xC_i - Collected * I(GK?) Actually equation 5: CLCAAGK = ∑ xC_i - Collected * I(GK = g) maybe. Need formalize. CLCAA% standardized by number claimables faced. Table 2: xC, Collected, Claimables, Collected%, xCollected%, CLCAA%. CLCAA = xC - Collected? Table CLCAA% = Collected% - xCollected%. Example Cech xC 48.49, Collected 77, Claimables 215, Collected% .36, xCollected% .23, CLCAA% .13. xC/Claimables = .2255; collected/claimables=.358; diff=.1325. So CLCAA% = (Collected - xC)/Claimables. CLCAA = Collected - xC. Paper equation 5 text garbled: CLCAAGK = ∑xCi i = 𝑔 ). (5) 𝑖𝑖 𝑖𝑖 −𝐶𝐶𝑜𝑜𝑎 𝑒𝑒𝑐𝑐𝑡𝑡𝑒𝑒𝐶𝐶 ∗𝐼𝐼(𝐺𝐺𝐾𝐾. Could be CLCAA_GK = sum_i (Collected_i - xC_i) * I(GK_i = g). Need state.
- Defensive territory: distance from goal for non-pass/save/claim actions: clearances, interceptions, tackles, ball recoveries. Rank by quantiles of distance from goal, DTGK. Ederson largest; 5 yards further than De Gea; Wilcoxon rank sum.
- Distribution: TPO = weighted positive outcomes within 20 seconds after GK pass: free kicks in attacking half, corners, shots, penalties. Equation 8: TPO_GK = sum_{x,c,s,p} [0.5 * FreeKick + 0.4 * Corner + 1 * Shot + 7.5 * Penalty] * I(GK = g)? Need formalize. Paper weights based on probability of scoring. It says "TPOGK = ∑ ... = 0.5 FreeKick + 0.4 Corner + 1 Shot + 7.5 Penalty * I(GK...)" Need equation.
- Change under pressure: ΔPL = PL under pressure - PL not under pressure? Paper garbled: "change in pass length when goalkeeper is and is not under pressure". Figure 5 scatter TPO vs ΔPL. We can define ΔPL = \overline{PL}_{pressure} - \overline{PL}_{no pressure}; ΔPC = completion under pressure - not under pressure. Need note.
- Matching algorithm: metrics GSAA%, PD, CLCAA%, DT, TPO, ΔPL. User specifies closeness and competitions. Example Dean Henderson closest to De Gea in League One on shot stopping metrics. Need mention extrapolation across leagues unknown.
- Discussion limitations: one year data; no testing set; cannot test repeatability; positional deviations assumption; value of claimables/distribution unknown; xC can extend causal inference; age curves. Need quote.

Need fulfill "THINK_TRACE Deep multi-hop derivation & gray-zone audit (>=400 words)." So this section at least 400 words. Need include derivation from paper. Need "gray-zone audit" identify assumptions, confounds, singularity/breakdown. Need not mention betting. Need cite [PAGE N]. Need exact quotes. Need maybe cite exact page numbers. Need determine page numbers. Source text page footers: page 1 after intro? Let's map:
- Title page/header and intro starts page 1. Footer "1" after data mention? Actually text: after intro first paragraphs, "2. Data" then "This data" then footnote and footer "2019 Research Papers Competition Presented by: 1" likely page 1. So [PAGE 1] covers Title, intro, data start.
- Page 2: "includes spatial..." through Section 3.1 and equations? Footer 2 after "Equation 2)"? Let's inspect: text after page 1 footer: "includes spatial, time..." then Data, Section 3, 3.1, history, PSxG description, then footers "2019 Research Papers Competition Presented by: 2" after "Equation 2)." So [PAGE 2] includes data details, shot stopping intro, PSxG definition, equations 1-2 maybe.
- Page 3: xgboost details, Figure 1 caption, calibration discussion, footer 3. [PAGE 3].
- Page 4: Table 1, de Gea discussion, value estimates, footer 4. [PAGE 4].
- Page 5: continuation conservation of points, Section 3.2 positional deviations, KNN, Figure 2, footer 5. [PAGE 5].
- Page 6: deviations, Figure 3, Gomes, Section 4, 4.1 claimables start, footer 6. [PAGE 6].
- Page 7: xC model, equation 4, covariates, CLCAA equations, Figure 4, footer 7. [PAGE 7].
- Page 8: Figure 4, Appendix A1 mention, defensive activities 4.2, footer 8. [PAGE 8].
- Page 9: Ederson DT, distribution 5.1, equation 8, 5.2 pressure, footer 9. [PAGE 9].
- Page 10: pressure continuation, Figure 5, matching method start, footer 10. [PAGE 10].
- Page 11: matching method, De Gea example, Figure 6, footer 11. [PAGE 11].
- Page 12: Henderson, discussion start, limitations, footer 12. [PAGE 12].
- Page 13: discussion continuation, age curves, conclusion, footer 13. [PAGE 13].
- Page 14: references start, footer 14. [PAGE 14].
- Page 15: references continued, appendices start? Actually page 15 includes references 13-15 and Appendices A1 header? Let's see: after reference 13 on page 14? Text: page 14 footer after reference [13]? Then page 15 has references [14][15], Appendices A1, Figure 7, Table 2? Wait source: after [13] footer "15"? Let's map carefully:
Page 14 footer appears after references [1]-[13]? Actually text:
References list [1]-[13]. Then "2019 Research Papers Competition Presented by: 15" maybe? Wait in source: after [13] Trainor, there is "2019 Research Papers Competition Presented by: 15" then "- [14] Wickham..." then [15] Yam... Then "2019 Research Papers Competition Presented by: 16" then Appendices. Hmm source page footers: I see after [13] "2019 Research Papers Competition Presented by: 15" not 14? Let's count: The text shows after references [1]-[13] there is footer "2019 Research Papers Competition Presented by: 15" then [14][15] then footer "16" then Appendices. But earlier page 13 footer after conclusion "13" and page 14? Let's inspect original: 
```
... 2019 Research Papers Competition Presented by: 13
...
## References
...
[13] Trainor...
   - https://statsbomb.com/2014/10/goalkeepers-how-repeatable-are-shot-savingperformances/
2019 Research Papers Competition Presented by: 15
- [14] Wickham...
...
- [15] Yam...
2019 Research Papers Competition Presented by: 16
## Appendices
```
It skips 14? Maybe because markdown conversion. Source PAGES: 15 but footers up to 18? Hmm. We can use [PAGE 14] for references start? Need exact page markers. The user says PAGES: 15. But provided text has page numbers 1-18? Wait footers: 1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18. Missing 14? Hmm. Maybe page 14 is blank? There are 18 pages? The drive says PAGES: 15 but source includes appendices. Could be page count mismatch. We need cite exact [PAGE N] markers. We can cite based on visible footers. We should not overclaim. Use [PAGE 3] etc. If page number not visible, cite [PAGE 2] etc. Need exact quotes. For references/appendices, use [PAGE 17] for Table 2? The source has Appendix A1 after footer 16, then Figure 7, footer 17, Table 2, footer 18. So Table 2 is [PAGE 18]. Appendix A1 definition is [PAGE 16]? Let's map:
- Footer 15 after ref [13]; [14][15] then footer 16; Appendices header after 16. So Appendix A1 starts on page 16? Actually footer 16 before "## Appendices", so Appendices on page 16? The footer appears before Appendices due page break? Typically footer at bottom of page, then next page starts Appendices. So [PAGE 16] is references page. Appendices start [PAGE 17]? But there is Figure 7 calibration and footer 17, then Table 2 and footer 18. Hmm. Let's not rely too much. We can cite [PAGE 7] for xC model, [PAGE 8] for Appendix A1 mention, [PAGE 18] for Table 2 if needed. But user asks exact [PAGE N] markers and verbatim quotes. We can include quotes from pages we are confident. Need maybe quote page 1 intro: "There are only 2 goalkeepers in the top 50 most expensive transfers worldwide" [PAGE 1]. Quote page 2: "PSxG differs from Pre-Shot Expected Goals (xG) in that it only includes shots that are on target" [PAGE 2]. Quote page 3: "Since we are using the GSAA% to compare goalkeepers, it is essential that our PSxG model is not only accurate, but well calibrated." [PAGE 3]. Quote page 5: "optimal position for each shot is similar across all goalkeepers" [PAGE 5]. Quote page 7: "we define the probability a claimable is collected as expected claims (xC)" [PAGE 7]. Quote page 9: "The best distributor in the EPL last season was Ederson." [PAGE 10? Actually page 10? Figure 5 on page 10? Let's check: Section 5.2 starts page 9, Figure 5 page 10, quote "The best distributor..." on page 10 maybe. Source: after Figure 5 caption, "In Figure 5..." then "The best distributor..." then Section 6. Footer 10 appears after "Because of" maybe. So quote [PAGE 10].
Quote page 12: "we do not have a testing set available to validate our metrics" [PAGE 12] and "we do not know how closely these metrics translate across leagues with varying talent levels" [PAGE 12]. Good.

Need include formal LaTeX equations. Need units. Let's define:
Let \mathcal{S}_g be set of on-target shots faced by goalkeeper g. Let Y_i ∈ {0,1} be goal indicator. PSxG_i = \hat{p}_i = \Pr(Y_i=1 | X_i) ∈ [0,1], dimensionless probability. Then GSAA_g = \sum_{i∈\mathcal{S}_g} \hat{p}_i - \sum_{i∈\mathcal{S}_g} Y_i. Units: goals (expected goals minus actual goals). GSAA%_g = GSAA_g / SOT_g, units goals per shot (dimensionless if goals/shot). In paper they call percent but it's goals per shot. Need mention.
PSxG model: \hat{p}_i = \sigma(f_{\text{xgb}}(X_i)) where σ logistic. X_i includes defensive density D_i = \sum_{d∈\mathcal{D}_i} 1 / r_{d,i}? Paper: "defensive density behind ball, defined as the sum of the inverse distances for each defender between the shot and the goal". Need units: inverse metres if r in metres. But if r→0 singularity; breakdown. Need mention. Distance to goal center d_i in metres. Estimated crossing point z_i in metres. Attacking speed v_i = L_i / Δt_i, units m/s; if Δt→0 singularity. Need mention.
Calibration: E[Y | \hat{p}=p] = p ideally. Breakdown if miscalibrated: bias in aggregate PSxG = \sum (\hat{p}_i - p_i^*) and GSAA% bias. Need mention.
Positional deviations: For shot i, KNN neighborhood N_{20}(i) based on (x,y, shot type, headed). Optimal position \bar{r}_i = (1/20) \sum_{j∈N_{20}(i)} r_{GK,j}. Deviation vector Δ_i = r_{GK,i} - \bar{r}_i. PD_g = average over shots faced? Paper says average deviation for each goalkeeper. Could be PD_g = (1/|\mathcal{S}_g|) \sum_{i∈\mathcal{S}_g} ||Δ_i|| or separate xdiff/ydiff. Need state units metres. Assumption average position optimal; breakdown if neighborhood sparse, different tactical systems, GK excluded? Need mention.
Claimables: \mathcal{C}. xC_i = \Pr(C_i=1 | X_i) ∈ [0,1]. CLCAA_g = \sum_{i∈\mathcal{C}_g} (C_i - xC_i) maybe sign. Paper equation maybe CLCAAGK = ∑ xC_i - Collected * I(GK=g)? Actually Table: Cech xC=48.49, Collected=77, CLCAA% .13; if CLCAA = xC - Collected = -28.5, % negative, not table. So CLCAA = Collected - xC. Equation likely CLCAAGK = ∑ (Collected - xC_i) * I(GK_i=g). We can state as "equivalent, up to sign convention, to the paper's CLCAA". Need be precise: "The paper writes the quantity in a garbled OCR line; Table 2 implies CLCAA_g = \sum (Collected_i - xC_i)". Good. CLCAA% = (Collected - xC)/Claimables = Collected% - xCollected%. Units: claims (counts) and claims per claimable (dimensionless). Breakdown if xC model mis-specified, claimables definition includes crosses/high passes, trajectory intersections.
Defensive territory: For actions a∈\mathcal{D}_g (clearances, interceptions, tackles, recoveries), distance from goal r_a in metres. DT_g = quantile_q({r_a})? Paper says rank based on quantiles of distance from goal. Could define DT_g = Q_{0.9} or median? It says "rank goalkeepers based on the quantiles of the distance from goal, which we refer to as the goalkeeper’s defensive territory (DT_GK)." Not exact. We can state a quantile functional DT_g = Q_{\tau}(\{r_a\}), units metres, with τ unspecified; comparison via Wilcoxon rank-sum. Need mention breakdown if action taxonomy differs.
Distribution TPO: \mathrm{TPO}_g = \sum_{i∈\mathcal{P}_g} [0.5 N_i^{FK} + 0.4 N_i^{C} + 1 N_i^{S} + 7.5 N_i^{P}]? Wait equation 8: TPOGK = ∑ (0.5 FreeKick + 0.4 Corner + 1 Shot + 7.5 Penalty) * I(GK). Need define within 20 s after GK pass. Weights dimensionless? They are "probability of scoring a goal" per event? If multiplied by counts, TPO units expected goals? 0.5 free kick, 0.4 corner, 1 shot, 7.5 penalty. But weights weird: penalty 7.5? Maybe "probability of scoring" not exactly. Need state weights as paper's scoring-probability weights, units expected-goal-equivalents per outcome. But if sum over outcomes within 20s, TPO units expected goals. Need mention not to interpret as calibrated xG without validation. Breakdown if multiple GK passes overlap 20s windows, double counting, outcome attribution.
Pressure: ΔPL_g = \overline{PL}_{g,\text{pressure}} - \overline{PL}_{g,\text{no pressure}}, units metres. ΔPC_g = \overline{PC}_{g,\text{pressure}} - \overline{PC}_{g,\text{no pressure}}, dimensionless percentage points. Figure 5 uses TPO vs ΔPL. Breakdown if pressure event definition radius, sample size, tactical context.
Matching: distance metric d(g,h) = \sum_m w_m \phi_m(|M_m(g)-M_m(h)|; \epsilon_m) maybe. Paper says users specify closeness parameters. We can formalize: feasible if |M_m(g)-M_m(h)| ≤ \epsilon_m for all m in selected subset; rank by \sum w_m |...|. No exact equation. Need mention.
Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." This is weird. Need discuss physical/biomechanical/weather veto proof for goalkeeper evaluation. Since paper doesn't include weather/biomechanics, we must adjudicate: any claim about GK ability should be vetoed if physical/biomechanical/weather confounds not controlled. Need be careful: "veto proof" maybe require cross-layer veto: physical, biomechanical, weather. Need state no direct biomechanical data in paper; no weather covariates; thus metrics cannot adjudicate those layers. Need propose vetoes: (1) if a GK's save performance is driven by unobserved biomechanical reaction speed or injury, GSAA not isolated; (2) weather (rain/wind) affects shot/cross trajectory and PSxG calibration; (3) pitch/altitude? Need mention. Need not mention betting. Need formal. Need "veto proof": To certify GK skill, need exclude or stratify by physical/biomechanical/weather covariates; otherwise metric is descriptive not causal. Need cite paper limitations [PAGE 12] "we do not have a testing set" etc. Need mention "The paper does not report weather, surface, wind, temperature, or biomechanical load variables" (from source absence). That's a statement not quote. We can say "source contains no such variables." Need maybe cite [PAGE 2] data includes spatial/time events, no weather. [PAGE 2] quote "includes spatial, time, and other information on all “events”" no weather. Good.

Need "RETROCAUSAL_GENEALOGY Historical/scientific lineage & multi-week traps." Need discuss lineage: hockey goaltender metrics DIGR Schuckers 2011, Corsica Perry 2015, 11tegen11 2014, Trainor 2014, StatsBomb xG, xgboost, KNN, causal inference. Multi-week traps: single-season sample, no repeatability, cross-league transfer, calibration drift, overfitting, claimables definition, positional optimality assumption, pressure definition, TPO weights. Need cite references from pages. Need maybe quote [PAGE 2] "Some early work on advanced goalkeeper metrics in soccer struck at the heart..." [PAGE 2]. Need mention lineage: "This necessity has been previously studied with goaltenders in professional hockey (Schuckers, 2011) (Perry, 2015)." [PAGE 2]. Good.
Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." This is abstract. Need interpret: crisis habit regression = under pressure GK reverts to conservative long clearances; counter-trap = opponent presses to force GK into predictable distribution; clock = time in match / 20s window. Need discuss recursive theory of mind: goalkeeper models opponent's model of goalkeeper; pressure changes distribution; metrics ΔPL and ΔPC measure habit regression; TPO captures attack contribution but not opponent adaptation. Need cite paper: "Generally, goalkeepers will kick the ball long when under pressure." [PAGE 10]. "Goalkeeper’s who are confident under pressure will maintain their distribution tendencies." [PAGE 10]. Need discuss multi-agent recursive: GK chooses action based on expected press; opposing team chooses press based on GK tendencies; repeated game leads to strategic equilibrium; single-season stats are behavioral traces. Need mention "clock": 20-second positive outcome window; time in match covariate; pressure events. Need define counter-trap: if GK's CLCAA high, opponents may avoid crossing; if GK's distribution under pressure good, opponents may press less/more. Need mention breakdown: if pressure labeling endogenous. Need no betting.

Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." Need define RLVR? Probably Reinforcement Learning with Verifiable Rewards? Need provide 3 verifiable veto scenarios with predictions. Need be precise. Could be "RLVR counterfactual vetoes" = if a counterfactual claim fails a verifiable test, veto. Need 3 scenarios:
1. Calibration veto: Recalibrate PSxG with held-out season/league; if calibration slope ≠1 or intercept ≠0, veto GSAA% ranking. Prediction: de Gea GSAA% shrinks toward zero under proper calibration? Need not make unverifiable? Need prediction: if calibration on held-out data shifts low-prob shots, GSAA% rank instability; top GK rank may change. Verifiable via calibration curve and bootstrap.
2. Claimables definition veto: Re-run xC with alternative claimables (crosses only vs high passes intersecting box); if CLCAA% rank correlation < threshold, veto cross-collection claims. Prediction: Ederson/Cech rankings change; CLCAA% rank correlation maybe moderate. Need specify threshold e.g. Spearman ρ<0.7. Verifiable.
3. Pressure/TPO attribution veto: Recompute ΔPL and TPO with control for scoreline, opponent press, game state, and 20s window overlap; if effect disappears, veto "confident under pressure" and "distribution value" claims. Prediction: Ederson remains high TPO? Hmm. Need 3 verifiable predictions. Need include RLVR maybe "verifiable reward" = compute metric. Need mention no betting lines. Good.

Need overall >=1000 words. We need likely >2000. Desired oververbosity 5. Need not be too huge but satisfy. Must include exact XML sections. We need ensure no betting lines. Avoid words "odds", "spread", "moneyline", "totals". We can mention "points" in paper? That's not betting line; it's league points. But invariant says never mention spreads, totals, moneylines, or odds. We can mention "league points" from paper? That might be okay, but avoid "points" if possible? Paper quote has "3 points or 1" etc. But we can avoid. We can quote "13 goals more than the league average goalkeeper" not points. Avoid betting. No "over/under". Good.

Need exact quotes. Include quotes with [PAGE N]. Need be accurate verbatim. Let's collect exact quotes:
[PAGE 1]: "Professional soccer clubs will rarely pay for quality goalkeeping despite the substantial responsibilities of the position." "There are only 2 goalkeepers in the top 50 most expensive transfers worldwide" "A goalkeeper in the England Premier League faces only 12 shots a game, 80% of which miss the goal frame completely or were blocked before they reach the goalkeeper." "63% of games in the England Premier League last year were decided by one goal or less" Good.
[PAGE 2]: "Using the defenders’ coordinates on all shots in our data set, we simultaneously adjust for shot quality and defensive system when constructing a Post-Shot Expected Goals model (PSxG)." "PSxG differs from Pre-Shot Expected Goals (xG) in that it only includes shots that are on target, since all shots that get blocked or miss the goal frame have 0 probability of becoming a goal." "We aggregate the total PSxG faced by each goalkeeper and then subtract their total goals conceded (GA)." "This necessity has been previously studied with goaltenders in professional hockey (Schuckers, 2011) (Perry, 2015)." Good.
[PAGE 3]: "We estimate PSxG using an extreme gradient boosting model (xgboost)." "We cannot include any information on the goalkeeper’s location, because goalkeepers who are typically positioned better than others will consistently have lower PSxG and their GSAA%GK will be deflated" "Since we are using the GSAA% to compare goalkeepers, it is essential that our PSxG model is not only accurate, but well calibrated." "If there is a systematic flaw in the calibration of the model, our estimates for GSAA% will be biased and untrustworthy." Good.
[PAGE 5]: "at the professional level, it is safe to say that goalkeepers position themselves correctly on shots against more often than not, and that the optimal position for each shot is similar across all goalkeepers." "Using a K Nearest Neighbor (KNN) algorithm, for each shot we search for the 20 most similar shots based on characteristics that innately influence a goalkeeper’s position: x and y location, shot type (free kick or open play) and whether the shot was headed." Good.
[PAGE 7]: "We restrict our sample to “claimable” passes, which for simplicity we refer to as “claimables”" "We define the probability a claimable is collected as expected claims (xC)" "we use the beginning and end location of all claimables to estimate the trajectory (in point-slope form) of each claimable." "we calculate where each pass would intersect a radius of 6 yards around the center of the goal frame and 15 yards around the center of the goal frame." Good.
[PAGE 9]: "The goalkeeper in the EPL with the greatest defensive territory was Ederson" "On average, Ederson extends his defensive territory 5 yards further from goal than De Gea." Good.
[PAGE 10]: "Generally, goalkeepers will kick the ball long when under pressure." "Goalkeeper’s who are confident under pressure will maintain their distribution tendencies." "The best distributor in the EPL last season was Ederson." Good.
[PAGE 12]: "we do not have a testing set available to validate our metrics or compare them to predetermined expectations." "we do not know how closely these metrics translate across leagues with varying talent levels." Good.
[PAGE 13]: "it is not possible to test the repeatability of shot stopping performance with only one season of data." "Some argue that goalkeeper’s saves are largely random and their performance in one season has little correlation with their performance in the following season" "we first began by extrapolating an xG model to find the goalkeeper position that minimized the xG for each individual shot. Unfortunately, under that framework we were extrapolating too far outside of the domain of this sample size and at times produced illogical results." Good.
Need cite page 13 for limitations. Good.

Need formulate equations with LaTeX. Need mention "exact singularity/breakdown regimes". For each equation, state breakdown. Good.

Need maybe include "source operators" = xgboost, KNN, logistic, calibration, Wilcoxon, matching. Need list.

Need answer structure:
<THINK_TRACE>
... (>=400 words)
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
... formal equations
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

Need ensure exact XML sections. No extra outside? We can include only these.

Need write deep. Let's draft.

THINK_TRACE: Must be >=400 words. We'll make ~700-900 words. Need include multi-hop derivation and gray-zone audit. Discuss from introduction scarcity -> need system-independent metrics -> PSxG excludes GK location -> GSAA -> calibration -> KNN positioning -> claimables xC -> CLCAA -> DT -> TPO -> pressure -> matching. Gray zones: selection bias (only first-string?), small SOT, one season, no testing set, calibration, definitions, unobserved confounders. Mention exact quotes. Use [PAGE N]. Need no betting. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal. Need list operators. Equations with units. Need cite page quotes. Need breakdown regimes. We can present as bullet list. Need include equations. Need be careful with LaTeX in XML? Fine. Use $$? In XML, $ okay. Need escape < maybe? Avoid <. Use \leq instead of <. Need not use &? XML safe. Use \sum, \mathbb. Use \operatorname. Need not use raw & maybe okay? XML parsers would need &amp; but not required? Better avoid ampersand. Use "and". Need avoid unescaped <. Use \le. Good.

Let's write equations:
1. PSxG:
\[
\hat p_i = \Pr(Y_i=1\mid X_i) = \frac{1}{1+\exp(-f_{\rm xgb}(X_i)} \in [0,1]
\]
Need correct parentheses: \frac{1}{1+\exp(-f_{\rm xgb}(X_i))}.
Units: dimensionless probability.
X_i includes D_i = \sum_{d\in \mathcal D_i} r_{d,i}^{-1}, units m^{-1}; d_i to goal center m; z_i crossing point m; v_i = L_i/\Delta t_i m/s.
Breakdown: r→0; Δt→0; out-of-domain extrapolation; calibration failure.
2. GSAA:
\[
\mathrm{GSAA}_g = \sum_{i\in \mathcal S_g}\hat p_i - \sum_{i\in \mathcal S_g}Y_i,\quad
\mathrm{GSAA}\%_g = \frac{\mathrm{GSAA}_g}{|\mathcal S_g|}.
\]
Units goals and goals per shot. Note paper calls percent. Breakdown: |S_g| small, calibration bias, on-target filter.
3. Calibration:
\[
\mathbb E[Y\mid \hat p=p]=p
\]
or calibration slope. Units dimensionless. Breakdown if slope !=1.
4. Positional deviation:
\[
\bar{\mathbf r}_i = \frac{1}{K}\sum_{j\in \mathcal N_K(i)} \mathbf r_{j},\quad \boldsymbol\Delta_i = \mathbf r_{i} - \bar{\mathbf r}_i,\quad \mathrm{PD}_g = \frac{1}{|\mathcal S_g|}\sum_{i\in\mathcal S_g} \|\boldsymbol\Delta_i\|_2
\]
K=20. Units metres. Breakdown: sparse neighborhoods, average not optimal, tactical confounds.
5. xC/CLCAA:
\[
\hat q_i = \Pr(C_i=1\mid X_i) \in [0,1],
\quad
\mathrm{CLCAA}_g = \sum_{i\in \mathcal C_g}(C_i-\hat q_i),
\quad
\mathrm{CLCAA}\%_g = \frac{\mathrm{CLCAA}_g}{|\mathcal C_g|}.
\]
Units claims and claims per claimable. Sign convention. Breakdown: claimables definition, trajectory intersections, model mis-specification. Need mention paper equation OCR garbled. Good.
6. DT:
\[
\mathrm{DT}_g = Q_\tau(\{r_a: a\in\mathcal A_g\})
\]
units m; τ quantile. Breakdown: action taxonomy, small sample, tactical line.
7. TPO:
\[
\mathrm{TPO}_g = \sum_{i\in\mathcal P_g} \left(0.5 N_{i,\mathrm{FK}} + 0.4 N_{i,\mathrm{C}} + 1 N_{i,\mathrm{S}} + 7.5 N_{i,\mathrm{P}}\right)
\]
where N counts positive outcomes in 20s after pass. Units expected-goal-equivalent outcomes? We can say "paper's weighted outcome units, nominally goal-equivalents". Breakdown: overlap, attribution, weights not team-specific.
8. Pressure:
\[
\Delta \mathrm{PL}_g = \overline{\mathrm{PL}}_{g,\mathrm{P}} - \overline{\mathrm{PL}}_{g,\neg \mathrm{P}}, \quad
\Delta \mathrm{PC}_g = \overline{\mathrm{PC}}_{g,\mathrm{P}} - \overline{\mathrm{PC}}_{g,\neg \mathrm{P}}
\]
units m and percentage points. Breakdown: pressure label endogenous, sample size.
9. Matching:
\[
\mathcal M_{\boldsymbol\epsilon}(g)=\{h: |M_m(g)-M_m(h)|\le \epsilon_m \ \forall m\in \mathcal Q\},
\quad
d(g,h)=\sum_{m\in\mathcal Q} w_m |M_m(g)-M_m(h)|
\]
units depend on metric; z-score maybe. Breakdown: units mismatch, selected metrics arbitrary, cross-league extrapolation.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include page citations and verbatim quotes. We can quote each. Need be concise but complete. Maybe 1200 words.

RETROCAUSAL_GENEALOGY: Historical lineage. Need mention hockey DIGR, Schuckers 2011; Corsica Perry 2015; 11tegen11 2014; Trainor 2014; StatsBomb xG; xgboost; KNN; causal inference. Multi-week traps: single-season, no repeatability, cross-league, calibration drift, claimables, positional optimality, pressure, TPO weights, selection of first-string. Need cite [PAGE 2], [PAGE 3], [PAGE 12], [PAGE 13]. Need around 500 words.

RECURSIVE_THEORY_OF_MIND: Need discuss crisis habit regression vs counter-trap vs clock. Maybe 500 words. Define:
- Crisis habit regression: under pressure, GK reverts to long clearance; ΔPL positive, ΔPC negative. Paper quote [PAGE 10].
- Counter-trap: opponent anticipates GK's tendency and presses to force long ball into controlled zone; recursive ToM: GK knows opponent knows; if GK maintains short distribution, it counters press; metrics capture outcome not intention.
- Clock: 20-second TPO window and time-in-match covariate; pressure events; late-game fatigue; recursive clock: opponent changes press with score/time. Need mention "clock" as temporal horizon in TPO and match time covariate. Need formal? Maybe no equations. Need cite quotes. Need mention "theory of mind" as modeling opponent's model. Good.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need state paper lacks direct physical/biomechanical/weather variables. Need cite data quote [PAGE 2] "spatial, time, and other information" not weather. Need veto rules:
- Physical veto: if unobserved physical load (injury, fatigue) correlates with shots/claimables, GSAA/CLCAA not skill.
- Biomechanical veto: if GK positioning deviations reflect biomechanical constraints (reaction time, dive speed, mobility) rather than decision error, PD not "positioning skill"; need biomechanical data.
- Weather veto: if wind/rain/surface affects trajectory and PSxG/xC calibration, must stratify; otherwise metric bias. 
- Proof: To certify, require residual invariance after conditioning on physical/biomechanical/weather covariates; if not, veto causal interpretation. The paper doesn't provide. Need maybe "veto proof" means prove veto by absence of variables and limitations. Need formal condition:
\[
\Delta_{\rm causal} = \mathbb E[\mathrm{GSAA}_g \mid \mathrm{skill}, \mathrm{physical}, \mathrm{weather}] - \mathbb E[\mathrm{GSAA}_g \mid \mathrm{average}]
\]
If conditioning changes rank, veto. Need mention exact quotes [PAGE 12] "we do not have a testing set..." and [PAGE 13] "extrapolating too far outside of the domain". Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need maybe structure each with "Veto", "Verifiable test", "Prediction". Need no betting. Good.

Need ensure no betting lines. Avoid "bet", "wager", "odds", "spread", "total", "moneyline". "points" maybe avoid except quote? We can avoid. Mention "league table" maybe. Fine.

Need answer length. Let's produce high-quality. Need maybe mention "PAGE N" exact. Need not use [PAGE 15] if uncertain. Use only confident. For references page, we can cite [PAGE 2] for Schuckers etc because quote appears page 2. Good.

Need ensure "verbatim quotes" are exact. Check quotes:
- "There are only 2 goalkeepers in the top 50 most expensive transfers worldwide" exact from page 1. Good.
- "A goalkeeper in the England Premier League faces only 12 shots a game, 80% of which miss the goal frame completely or were blocked before they reach the goalkeeper." exact.
- "Using the defenders’ coordinates on all shots in our data set, we simultaneously adjust for shot quality and defensive system when constructing a Post-Shot Expected Goals model (PSxG)." exact? Source: "Using the defenders’ coordinates on all shots in our data set, we simultaneously adjust for shot quality and defensive system when constructing a Post-Shot Expected Goals model (PSxG)." Yes.
- "PSxG differs from Pre-Shot Expected Goals (xG) in that it only includes shots that are on target, since all shots that get blocked or miss the goal frame have 0 probability of becoming a goal." exact.
- "We cannot include any information on the goalkeeper’s location, because goalkeepers who are typically positioned better than others will consistently have lower PSxG and their GSAA%GK will be deflated" exact? Source has "deflated, despite..." We can quote partial. Good.
- "Since we are using the GSAA% to compare goalkeepers, it is essential that our PSxG model is not only accurate, but well calibrated." exact.
- "If there is a systematic flaw in the calibration of the model, our estimates for GSAA% will be biased and untrustworthy." exact.
- "at the professional level, it is safe to say that goalkeepers position themselves correctly on shots against more often than not, and that the optimal position for each shot is similar across all goalkeepers." exact.
- "Using a K Nearest Neighbor (KNN) algorithm, for each shot we search for the 20 most similar shots based on characteristics that innately influence a goalkeeper’s position: x and y location, shot type (free kick or open play) and whether the shot was headed." exact.
- "We define the probability a claimable is collected as expected claims (xC)" exact? Source: "We define the probability a claimable is collected as expected claims (xC), xC = Pr(Collected|X), ..." yes.
- "we use the beginning and end location of all claimables to estimate the trajectory (in point-slope form) of each claimable." exact.
- "we calculate where each pass would intersect a radius of 6 yards around the center of the goal frame and 15 yards around the center of the goal frame." exact.
- "The goalkeeper in the EPL with the greatest defensive territory was Ederson" exact.
- "On average, Ederson extends his defensive territory 5 yards further from goal than De Gea." exact.
- "Generally, goalkeepers will kick the ball long when under pressure." exact.
- "Goalkeeper’s who are confident under pressure will maintain their distribution tendencies." exact (note apostrophe).
- "The best distributor in the EPL last season was Ederson." exact.
- "we do not have a testing set available to validate our metrics or compare them to predetermined expectations." exact? Source: "As the first goalkeeper evaluation framework, we do not have a testing set available to validate our metrics or compare them to predetermined expectations." yes.
- "we do not know how closely these metrics translate across leagues with varying talent levels." exact.
- "it is not possible to test the repeatability of shot stopping performance with only one season of data." exact.
- "we first began by extrapolating an xG model to find the goalkeeper position that minimized the xG for each individual shot." exact? Source: "When developing these methods, we first began by extrapolating an xG model to find the goalkeeper position that minimized the xG for each individual shot." Good.
- "extrapolating too far outside of the domain of this sample size and at times produced illogical results." exact.
Need maybe quote "There is also goalkeeper and field player coordinates within the frame for each shot." [PAGE 2]. Good.

Need avoid "percent" as percent? Fine.

Potential issue: XML with `%` okay. `&` avoid. Use "and". Need use `<`? Avoid. Use `\le`. In XML text, `>` okay but `<` not. Use `\lt`? In LaTeX, `\le` no <. Good. Use `\mathrm{GSAA}\%` okay. `&` not. Use `\mid` not `|`? Fine. Use `\mathcal{S}_g` etc. No `<`. Need avoid raw `&` in text. Use "and" instead of ampersand. No `<` in equations. Use `\le` not `<`. Use `\in` okay. Use `\rightarrow` okay. Good.

Need maybe include "RLVR" acronym? We can say "RLVR-style verifiable counterfactual veto". Need not define? Maybe define as "reward with verifiable outcome". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." We can make section with subheads. Good.

Need final answer only XML. Let's draft fully. Need ensure word count. We'll write detailed.

Let's compose.

THINK_TRACE:
Start: "The source is not a play-by-play model; it is an evaluation ontology..." Then multi-hop derivation: Port of hockey defense-independent save metrics to soccer. Step 1 identify scarcity and confounding. Quote. Step 2 PSxG: use defenders coords to adjust defensive system; include only on-target; exclude GK location to avoid deflation. Step 3 aggregate to GSAA and GSAA%. Step 4 calibration. Step 5 positioning KNN. Step 6 claimables xC. Step 7 DT. Step 8 TPO and pressure. Step 9 matching. Gray-zone audit: selection first-string, single season, no testing, calibration, neighborhood, claimables, TPO weights, cross-league. Need mention exact breakdown regimes. Maybe 800 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Use bullet list with equations. Need include page quotes. We'll write.

RETROCAUSAL_GENEALOGY: 600 words.

RECURSIVE_THEORY_OF_MIND: 600 words.

CROSS_LAYER_VETO_ADJUDICATION: 500 words.

RLVR_COUNTERFACTUAL_VETOES: 500 words.

Total >3000 words maybe. Satisfies.

Need ensure no "betting lines". Avoid "line" except "goal line" (technical) and "line where expected goals = actual goals" quote? The invariant says never mention spreads, totals, moneylines, or odds. "goal line" is not betting line, but to be safe, use "goal plane" or "goal mouth" instead of "goal line" except in quote? Figure caption quote has "line where expected goals = actual goals" not betting. Fine. Avoid "line" maybe okay. We can say "calibration identity". Good.

Need not mention "points" except maybe quote? Avoid. Paper quote about "one goal or less" okay. No betting.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not merely a goalkeeper ranking paper; it is an evaluation ontology built from four separate modeling layers: shot stopping, positioning, defensive activity, and distribution. The multi-hop derivation runs as follows. First, the paper diagnoses a market and measurement failure: “Professional soccer clubs will rarely pay for quality goalkeeping despite the substantial responsibilities of the position” [PAGE 1], and “There are only 2 goalkeepers in the top 50 most expensive transfers worldwide” [PAGE 1]. The stated reason is confounding: goalkeeper contribution is entangled with defensive system, opponent strength, and scarce on-target shot volume. The paper notes, “A goalkeeper in the England Premier League faces only 12 shots a game, 80% of which miss the goal frame completely or were blocked before they reach the goalkeeper” [PAGE 1]. This scarcity forces an inferential shift from raw save percentage to a counterfactual shot-quality model. Second, the authors build Post-Shot Expected Goals by using defender coordinates: “Using the defenders’ coordinates on all shots in our data set, we simultaneously adjust for shot quality and defensive system when constructing a Post-Shot Expected Goals model (PSxG)” [PAGE 2]. They restrict to on-target shots because “PSxG differs from Pre-Shot Expected Goals (xG) in that it only includes shots that are on target, since all shots that get blocked or miss the goal frame have 0 probability of becoming a goal” [PAGE 2]. Third, they exclude goalkeeper location from the PSxG features: “We cannot include any information on the goalkeeper’s location, because goalkeepers who are typically positioned better than others will consistently have lower PSxG and their GSAA%GK will be deflated” [PAGE 3]. That exclusion is the key identification move: PSxG must be a shot-and-defense model, not a goalkeeper model, or GSAA becomes circular. Fourth, GSAA is the sum of PSxG faced minus goals conceded, standardized by shots on target. Fifth, calibration becomes the load-bearing assumption: “Since we are using the GSAA% to compare goalkeepers, it is essential that our PSxG model is not only accurate, but well calibrated” [PAGE 3], because “If there is a systematic flaw in the calibration of the model, our estimates for GSAA% will be biased and untrustworthy” [PAGE 3]. Sixth, positioning is modeled with KNN over 20 similar shots; the average goalkeeper location in that neighborhood is treated as the “optimal position,” under the assumption that “at the professional level, it is safe to say that goalkeepers position themselves correctly on shots against more often than not, and that the optimal position for each shot is similar across all goalkeepers” [PAGE 5]. Seventh, cross collection is modeled with expected claims, xC, over “claimable” passes; the paper defines “the probability a claimable is collected as expected claims (xC)” [PAGE 7] and uses trajectory intersections with 6-yard and 15-yard radii around the goal-frame center to avoid using the pass outcome as a predictor [PAGE 7]. Eighth, defensive territory is a quantile summary of distances from goal for clearances, interceptions, tackles, and recoveries; Ederson is the extreme case: “The goalkeeper in the EPL with the greatest defensive territory was Ederson” [PAGE 9], and “On average, Ederson extends his defensive territory 5 yards further from goal than De Gea” [PAGE 9]. Ninth, distribution is scored by total positive outcome contribution within 20 seconds after a goalkeeper pass, with paper weights for free kicks, corners, shots, and penalties [PAGE 9], and pressure response is measured by change in pass length and completion under pressure [PAGE 10]. Tenth, matching is a constrained nearest-neighbor search over selected metrics rather than a single global ranking [PAGE 11].

The gray-zone audit is equally important. The paper’s causal claim is strongest for GSAA because PSxG is deliberately goalkeeper-blind, but even there the estimate is conditional on model calibration and on-target shot selection. The gray zones are: first-string selection bias, one-season sample size, absence of a testing set, cross-league extrapolation, KNN neighborhood sparsity, average-position optimality, claimables definition sensitivity, TPO weight arbitrariness, overlapping 20-second windows, and pressure-label endogeneity. The authors admit, “we do not have a testing set available to validate our metrics or compare them to predetermined expectations” [PAGE 12], and “we do not know how closely these metrics translate across leagues with varying talent levels” [PAGE 12]. They also admit, “it is not possible to test the repeatability of shot stopping performance with only one season of data” [PAGE 13]. The positional-deviation method is explicitly a fallback: “we first began by extrapolating an xG model to find the goalkeeper position that minimized the xG for each individual shot,” but that approach was “extrapolating too far outside of the domain of this sample size and at times produced illogical results” [PAGE 13]. Thus the framework is best read as a structured descriptive and scouting system, not as a fully identified causal skill estimator. The invariant for any downstream use is: do not turn a calibrated descriptive metric into a causal transfer claim without out-of-sample calibration, cross-league validation, and explicit physical, biomechanical, tactical, and weather controls.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are: logistic xgboost for PSxG and xC; KNN for positional neighborhoods; quantile summaries for defensive territory; weighted event counts for total positive outcome contribution; difference-in-means-style pressure deltas; Wilcoxon rank-sum tests for defensive-territory comparison; and a constrained matching algorithm over selected metrics. The paper states, “We estimate PSxG using an extreme gradient boosting model (xgboost)” [PAGE 3]. For claimables, it states, “We define the probability a claimable is collected as expected claims (xC)” [PAGE 7]. These are the formal objects.

1. Post-Shot Expected Goals. Let \(Y_i\in\{0,1\}\) be the goal indicator for on-target shot \(i\), and let \(X_i\) be shot and defensive-shape covariates excluding goalkeeper location. Then
\[
\hat p_i=\Pr(Y_i=1\mid X_i)=\frac{1}{1+\exp[-f_{\mathrm{xgb}}(X_i)]}\in[0,1],
\]
where \(f_{\mathrm{xgb}}\) is the boosted additive tree score. Units: \(\hat p_i\) is a dimensionless probability. The paper’s feature set includes “defensive density behind ball, defined as the sum of the inverse distances for each defender between the shot and the goal” [PAGE 3], the shot-to-goal-center distance, the estimated goal-plane crossing point, and attacking speed from possession start to shot. Formally, defensive density can be written
\[
D_i=\sum_{d\in\mathcal D_i}\frac{1}{r_{d,i}},
\]
with \(r_{d,i}\) in metres, so \(D_i\) has units \(\mathrm{m}^{-1}\). Attacking speed is
\[
v_i=\frac{L_i}{\Delta t_i},
\]
with \(L_i\) in metres and \(\Delta t_i\) in seconds, so \(v_i\) has units \(\mathrm{m\,s^{-1}}\). Breakdown regimes: \(r_{d,i}\to 0\) produces a density singularity; \(\Delta t_i\to 0\) produces an attacking-speed singularity; extrapolation beyond the observed shot distribution can produce illogical probabilities; and calibration failure breaks the interpretation of aggregated PSxG.

2. Goals Saved Above Average. For goalkeeper \(g\) with on-target shot set \(\mathcal S_g\),
\[
\mathrm{GSAA}_g=\sum_{i\in\mathcal S_g}\hat p_i-\sum_{i\in\mathcal S_g}Y_i,
\qquad
\mathrm{GSAA}\%_g=\frac{\mathrm{GSAA}_g}{|\mathcal S_g|}.
\]
Units: \(\mathrm{GSAA}_g\) is in goals; \(\mathrm{GSAA}\%_g\) is in goals per on-target shot, which the paper labels as a percentage. The paper says, “We aggregate the total PSxG faced by each goalkeeper and then subtract their total goals conceded (GA)” [PAGE 2]. Breakdown regimes: small \(|\mathcal S_g|\) makes the ratio unstable; miscalibration biases the sum; and the on-target filter changes the estimand relative to all shots.

3. Calibration identity. The required condition is
\[
\mathbb E[Y_i\mid \hat p_i=p]=p,
\]
or equivalently a calibration slope of one and intercept of zero on held-out data. Units: dimensionless probability. The paper warns, “If there is a systematic flaw in the calibration of the model, our estimates for GSAA% will be biased and untrustworthy” [PAGE 3]. Breakdown regime: if low-probability shots are systematically overestimated or high-probability shots underestimated, aggregated GSAA% is biased across goalkeepers with different shot mixes.

4. Positional deviation. For shot \(i\), let \(\mathcal N_K(i)\) be the \(K=20\) nearest shots in the KNN feature space of x-y location, shot type, and headed status. Let \(\mathbf r_i\) be the observed goalkeeper position and \(\bar{\mathbf r}_i\) the neighborhood mean. Then
\[
\bar{\mathbf r}_i=\frac{1}{K}\sum_{j\in\mathcal N_K(i)}\mathbf r_j,
\qquad
\boldsymbol\Delta_i=\mathbf r_i-\bar{\mathbf r}_i,
\qquad
\mathrm{PD}_g=\frac{1}{|\mathcal S_g|}\sum_{i\in\mathcal S_g}\|\boldsymbol\Delta_i\|_2.
\]
Units: metres. The paper says, “Using a K Nearest Neighbor (KNN) algorithm, for each shot we search for the 20 most similar shots based on characteristics that innately influence a goalkeeper’s position: x and y location, shot type (free kick or open play) and whether the shot was headed” [PAGE 5]. Breakdown regimes: sparse neighborhoods, tactical-system heterogeneity, and the assumption that the neighborhood mean is optimal. The paper itself concedes the average-position assumption may fail [PAGE 13].

5. Expected claims and Claimables Collected Above Average. Let \(C_i\in\{0,1\}\) indicate whether claimable \(i\) was collected, and let \(X_i\) include trajectory intersections with 6-yard and 15-yard radii, pass start location, angle, height, type, match time, and competition. Then
\[
\hat q_i=\Pr(C_i=1\mid X_i)\in[0,1],
\]
and, using the sign convention implied by Table 2,
\[
\mathrm{CLCAA}_g=\sum_{i\in\mathcal C_g}(C_i-\hat q_i),
\qquad
\mathrm{CLCAA}\%_g=\frac{\mathrm{CLCAA}_g}{|\mathcal C_g|}.
\]
Units: \(\mathrm{CLCAA}_g\) is in claims; \(\mathrm{CLCAA}\%_g\) is claims per claimable, dimensionless. The paper’s equation is garbled by conversion, but Table 2 is consistent with collected minus expected claims. The paper states, “we use the beginning and end location of all claimables to estimate the trajectory (in point-slope form) of each claimable” and “we calculate where each pass would intersect a radius of 6 yards around the center of the goal frame and 15 yards around the center of the goal frame” [PAGE 7]. Breakdown regimes: claimables definition sensitivity, trajectory-intersection geometry error, and xC model misspecification.

6. Defensive territory. For non-pass, non-save, non-claim defensive actions \(\mathcal A_g\), let \(r_a\) be distance from goal in metres. Then
\[
\mathrm{DT}_g=Q_\tau(\{r_a:a\in\mathcal A_g\}),
\]
where \(Q_\tau\) is a quantile functional and the paper leaves \(\tau\) plural in its ranking discussion. Units: metres. The paper says, “The goalkeeper in the EPL with the greatest defensive territory was Ederson” [PAGE 9]. Breakdown regimes: action-taxonomy differences, small samples, and tactical line height confounding.

7. Total positive outcome contribution. For goalkeeper pass \(i\), let \(N_{i,\mathrm{FK}}\), \(N_{i,\mathrm{C}}\), \(N_{i,\mathrm{S}}\), and \(N_{i,\mathrm{P}}\) count free kicks in the attacking half, corners, shots, and penalties within 20 seconds. The paper’s weighted form is
\[
\mathrm{TPO}_g=\sum_{i\in\mathcal P_g}
\left(0.5N_{i,\mathrm{FK}}+0.4N_{i,\mathrm{C}}+1N_{i,\mathrm{S}}+7.5N_{i,\mathrm{P}}\right).
\]
Units: paper-defined goal-equivalent outcome units. Breakdown regimes: overlapping 20-second windows, double counting, and the fact that weights are global rather than team-specific. The paper acknowledges that “In a more advanced study, we would construct individual models for each team to estimate the weights” [PAGE 9].

8. Pressure response. Let \(\mathrm{PL}\) be pass length and \(\mathrm{PC}\) pass completion. Define
\[
\Delta\mathrm{PL}_g=\overline{\mathrm{PL}}_{g,\mathrm{pressure}}-\overline{\mathrm{PL}}_{g,\mathrm{no\ pressure}},
\qquad
\Delta\mathrm{PC}_g=\overline{\mathrm{PC}}_{g,\mathrm{pressure}}-\overline{\mathrm{PC}}_{g,\mathrm{no\ pressure}}.
\]
Units: metres for \(\Delta\mathrm{PL}_g\), percentage points for \(\Delta\mathrm{PC}_g\). The paper says, “Generally, goalkeepers will kick the ball long when under pressure” [PAGE 10]. Breakdown regimes: pressure-event radius definition, endogenous pressure, and small pressure samples.

9. Matching. For selected metric vector \(\mathbf M(g)\) and tolerances \(\epsilon_m\),
\[
\mathcal M_{\boldsymbol\epsilon}(g)=\{h:\ |M_m(g)-M_m(h)|\le \epsilon_m\ \forall m\in\mathcal Q\},
\qquad
d(g,h)=\sum_{m\in\mathcal Q}w_m|M_m(g)-M_m(h)|.
\]
Units: metric-dependent unless metrics are standardized. Breakdown regimes: unit mismatch, arbitrary metric selection, and cross-league extrapolation. The paper uses this to match League One goalkeepers to David de Gea on shot-stopping metrics [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogy is explicit in the source. The paper positions itself against two failed baselines: save percentage and shutout counts. Save percentage is confounded by shot type; shutouts reflect the defensive system. The lineage then branches through hockey: “This necessity has been previously studied with goaltenders in professional hockey (Schuckers, 2011) (Perry, 2015)” [PAGE 2]. Schuckers’ DIGR work is a defense-independent rating built from spatially smoothed save-percentage maps; Perry’s Corsica work is a practical goalie-stat lineage. The soccer-specific ancestors are 11tegen11’s “Never judge a goal keeper by his saves” and Trainor’s StatsBomb work on save difficulty and repeatability [PAGE 2]. The paper’s advance is not the idea of shot difficulty; it is the simultaneous inclusion of defender coordinates to adjust for defensive system, plus the explicit exclusion of goalkeeper location to avoid circularity [PAGE 3]. That is the retrocausal hinge: earlier models asked “how hard was the save?”; this model asks “how hard was the shot after removing the goalkeeper’s own positioning from the shot-quality model?”

The statistical lineage is also clear: xgboost for nonlinear probability models, KNN for local positional baselines, 10-fold cross-validation, and calibration checks. The paper writes, “We set additional xgboost parameters to build an exact tree rather than an approximate tree, the maximum depth of each tree is 6 predictors, we sample 30% of the predictors to be used in each tree, and we set a learnings rate (eta) of 0.03” [PAGE 3]. The KNN lineage is local averaging in a low-dimensional feature space [PAGE 5]. The distribution layer borrows from event-value weighting and causal-inference language: the paper proposes matching treated and control claimables by similar xC to estimate the value of collecting crosses [PAGE 13].

The multi-week traps are historical and methodological. Trap one: single-season repeatability. The paper admits, “it is not possible to test the repeatability of shot stopping performance with only one season of data” [PAGE 13], and notes the argument that “goalkeeper’s saves are largely random and their performance in one season has little correlation with their performance in the following season” [PAGE 13]. Trap two: cross-league transfer. The Dean Henderson example is suggestive but not validated: “we do not know how closely these metrics translate across leagues with varying talent levels” [PAGE 12]. Trap three: calibration drift. A model calibrated on the Big 5 plus League One may not calibrate on another competition, another season, or another data provider. Trap four: claimables definition. The paper defines claimables as crosses plus high passes whose paths intersect the box [PAGE 16], which is a reasonable operationalization but not a natural kind. Trap five: positional optimality. The KNN average is a proxy, not a proven optimum; the authors tried an xG-minimizing position model and found it “extrapolating too far outside of the domain of this sample size” [PAGE 13]. Trap six: TPO weights. The weights are global and not team-specific, so a team that is unusually good at set pieces or unusually poor at corners is misrepresented. Trap seven: selection. The tables show first-string goalkeepers; backup goalkeepers and in-season replacements are not symmetrically evaluated. These traps do not invalidate the framework as a scouting ontology, but they do invalidate any claim that the metrics are final, context-free, or causally identified across leagues and seasons.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is about strategic interaction under pressure. The paper’s pressure section is a behavioral test: “Generally, goalkeepers will kick the ball long when under pressure” [PAGE 10], and “Goalkeeper’s who are confident under pressure will maintain their distribution tendencies” [PAGE 10]. In recursive terms, the goalkeeper is modeling the opponent’s press, the opponent is modeling the goalkeeper’s likely release, and both are updating within the match clock.

Crisis habit regression is the first mechanism. Under a pressure event, a goalkeeper may abandon a short or medium distribution pattern and revert to a long clearance. This is measurable as a positive \(\Delta\mathrm{PL}_g\) and a negative \(\Delta\mathrm{PC}_g\). The paper’s Figure 5 plots TPO against change in pass length, so a goalkeeper high on TPO and close to zero \(\Delta\mathrm{PL}\) is interpreted as a strong distributor who does not regress under pressure [PAGE 10]. The best distributor in the EPL last season was Ederson [PAGE 10]. The counter-trap is the opponent’s response: if the opposing press knows the goalkeeper tends to go long under pressure, it can set a trap in the long-ball landing zone, turning the goalkeeper’s “safe” clearance into a controlled opposition possession. The goalkeeper’s counter-counter is to maintain short distribution under pressure, which is exactly what the paper’s “confident under pressure” language rewards. This is a recursive theory-of-mind loop: my action depends on your belief about my action, which depends on my belief about your belief, and so on. The metric captures the behavioral trace, not the belief state.

The clock layer is the 20-second positive-outcome window. TPO counts free kicks, corners, shots, and penalties in the 20 seconds after a goalkeeper pass [PAGE 9]. That window is a strategic horizon: a goalkeeper who plays quickly against an unsettled opponent may generate a shot within the window, while a goalkeeper who slows the game may generate nothing. Match time is also a covariate in the xC model [PAGE 7], which matters because late-game score effects change both press intensity and goalkeeper risk tolerance. The recursive trap is that the opponent can manipulate the clock: pressing late, dropping off early, or forcing a long ball into a boundary. The paper’s metrics do not model opponent intent directly; they model outcome rates conditional on observed pressure and time. Thus the correct interpretation is not “this goalkeeper has superior theory of mind,” but “this goalkeeper’s observable release behavior is less sensitive to pressure labels and produces more positive outcomes within the fixed window.” That is a weaker but verifiable claim. The breakdown regime is endogeneity: if pressure events are caused by the goalkeeper’s own prior distribution style, then \(\Delta\mathrm{PL}\) is not a clean measure of composure. A goalkeeper who always holds the ball longer may attract more pressure, so the pressure label is partially a consequence of the goalkeeper’s own strategy. The paper does not solve this recursion; it only measures its surface behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is simple: the paper’s data are event and spatial data, not physical, biomechanical, or weather data. The Data section says the source “includes spatial, time, and other information on all ‘events’ including passes, saves, shots, tackles etc.” [PAGE 2]. There is “goalkeeper and field player coordinates within the frame for each shot” [PAGE 2]. There is no reported wind, rain, temperature, pitch surface, altitude, sprint load, jump load, reaction-time measurement, dive biomechanics, injury status, or fatigue biomarker. Therefore any claim that GSAA, PD, CLCAA, DT, TPO, or \(\Delta\mathrm{PL}\) isolates goalkeeper skill across physical, biomechanical, and weather layers is vetoed by missing covariates.

Physical veto. If a goalkeeper’s physical load or injury status correlates with the shots and claimables faced, then GSAA and CLCAA are not pure skill estimates. A goalkeeper recovering from a shoulder injury may avoid claiming high crosses, which lowers CLCAA but does not necessarily lower skill. A goalkeeper with a minor leg injury may shorten distribution, which changes TPO and \(\Delta\mathrm{PL}\). The paper’s one-season design cannot separate these states. Veto condition: if conditioning on physical-load and injury covariates changes the ranking beyond a pre-specified tolerance, the skill interpretation is rejected.

Biomechanical veto. Positional deviation is measured as distance from a KNN average, but a deviation can be a rational compensation for biomechanical constraints. A goalkeeper with slower reaction time or asymmetric dive speed may position slightly differently because that position is optimal for that body. The paper assumes “the optimal position for each shot is similar across all goalkeepers” [PAGE 5], but that is an assumption, not a biomechanical theorem. Veto condition: if biomechanical measurements of reaction time, dive speed, and range explain a material share of PD, then PD is not a clean decision-quality metric. The paper’s own failed xG-minimizing position experiment shows how hard the optimality problem is: the authors were “extrapolating too far outside of the domain of this sample size and at times produced illogical results” [PAGE 13].

Weather veto. Wind and rain affect ball trajectory, shot placement, cross flight, and goalkeeper grip. PSxG and xC are trajectory-sensitive: xC uses point-slope trajectory and intersection radii [PAGE 7], so wind can shift the estimated intersection point and change \(\hat q_i\). If weather is correlated with team or league, calibration can drift. Veto condition: if adding weather covariates or stratifying by weather changes calibration slope, intercept, or rank order beyond tolerance, the metric is not transferable across weather regimes.

The adjudication proof is therefore negative: the paper does not provide the cross-layer controls needed for a causal physical/biomechanical/weather claim. It provides a descriptive event model that is useful for scouting and tactical profiling, but it must be vetoed as a physical or biomechanical skill certificate. The correct proof obligation is residual invariance: after conditioning on physical, biomechanical, and weather variables, the goalkeeper effect should remain stable. The source does not meet that obligation, and its own limitations section supports caution: “we do not have a testing set available to validate our metrics” [PAGE 12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means a verifiable-reward counterfactual: a claim is allowed only if a pre-specified, computable test can falsify it. Three veto scenarios follow.

Veto 1: Calibration-shift veto. Claim: GSAA% ranks goalkeeper shot-stopping skill. Test: fit PSxG on season \(t\), evaluate calibration on held-out season \(t+1\) or a held-out league; require calibration slope in \([0.9,1.1]\) and intercept in \([-0.02,0.02]\), and require rank correlation of GSAA% above a pre-set threshold. Prediction: if calibration slope deviates, GSAA% rankings compress toward zero and the top-ranked goalkeeper changes. This is verifiable from the source’s own calibration warning: “If there is a systematic flaw in the calibration of the model, our estimates for GSAA% will be biased and untrustworthy” [PAGE 3]. If the test fails, veto the cross-season skill claim and retain only within-sample description.

Veto 2: Claimables-definition veto. Claim: CLCAA% measures cross-collection aggression and ability. Test: recompute xC and CLCAA% under at least two claimables definitions: crosses only, and crosses plus high passes intersecting the box, as the paper defines [PAGE 16]. Require Spearman rank correlation above a pre-set threshold, for example \(\rho\ge0.7\), and require that the top and bottom quartiles remain stable. Prediction: the rank order will be sensitive to the inclusion of high passes because the paper explicitly notes that many collected balls are “direct, long balls that travel little in the horizontal direction and are not referred to as a ‘cross’” [PAGE 16]. If the rank correlation falls below threshold, veto the claim that CLCAA% is a stable ability metric and relabel it as a definition-dependent descriptive statistic.

Veto 3: Pressure-and-TPO attribution veto. Claim: \(\Delta\mathrm{PL}\) measures composure under pressure and TPO measures distribution value. Test: recompute \(\Delta\mathrm{PL}\) and TPO after controlling for score
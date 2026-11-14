---
source: "2020 - Pulling Starters - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 8112
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry response with exact XML sections, >=1000 words. Need analyze source text about Pulling Starters. No betting lines. Need formal LaTeX, units, assumptions, exact singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes. Need derive multi-hop, gray-zone audit. Need include source operators and equations. Need historical lineage. Need recursive theory of mind (crisis habit regression vs counter-trap vs clock). Cross-layer veto physical/biomechanical/weather. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need avoid fake ratios. Need mention page citations exact from source. Need infer page numbers. We have source text with pages? It includes page numbers at bottom: 1,2,3,... But user says PAGES:24, source text includes page markers not [PAGE]. Need cite exact [PAGE N] markers. Need map content to page numbers based on printed page numbers. We need be careful: The source begins page 1 etc. PDF pages maybe 24? Actually printed pages show 1 through 33? Wait user says PAGES: 24 but source text has page numbers 1..33 and references, appendix. Hmm conflict. The file is 24 pages? But source text printed page numbers at bottom show 1,2,3,...29,30,31,32,33. Maybe PDF pages count? It says PAGES: 24 but text seems 33 printed pages? Actually the source starts with page 1, then 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33. That's more than 24. But maybe user path says PAGES: 24 erroneously. We need use [PAGE N] markers based on printed page numbers? The instruction: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." It didn't provide explicit [PAGE N], but page numbers in text. We can cite [PAGE 1] etc. Need exact quotes. Since not all pages have content. Let's map.

Need produce dense. Desired oververbosity 5 but user demands >=1000 words with sections. Need likely 2000-3000 words. Need not mention betting lines. Must include ZERO BETTING LINES. Avoid odds. Fine.

Need structure exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need ensure each section. THINK_TRACE >=400 words. Total >=1000. Need deep multi-hop derivation, gray-zone audit. Formal LaTeX and units. Need include verbatim quotes with page citations. Let's extract key quotes:

Page 1:
"We address this question by studying one of the most important strategic decisions in baseball: when (if at all) to make the “call to the bullpen” and relieve the starting pitcher."
"Managers must be careful not to pull the starter too soon (replacing him with an inferior reliever and/or depleting reliever resources) or too late (after the damage has been done)."
"A conformity heuristic could cause decisions to be systematically off-base..."
"The omission bias— the bias toward favoring errors of omission and not commission (in our context, pulling the starter) ... could lead starters to be generally left in games too long."
"Inattention could cause decisions to be insufficiently sensitive to available information"
"A recency bias, in particular the hot-hand bias... could cause overreaction to recent information"
"Confirmation or primacy bias could cause managers to pay too much heed to the starter’s typical quality or quality at the start of the game"

Page 2:
"We build on this work by examining the optimality of pulling starters decisions with respect to what is typically the ultimate objective for each game—winning—in addition to runs allowed in the current inning."
"we do this by first... showing that in a simple model, optimal decisions for pulling starters imply that expected runs should decline in the inning that starters are pulled."
"managers should not pull the starter when the manager is just indifferent between the starter and reliever’s expected performance for the duration of the current inning, but when the reliever’s performance is, in expectation, strictly better for that inning."
"Managers should wait to pull until the marginal benefit to the current inning from pulling is as large as the marginal benefit to future innings from delay."
"We find essentially no significant evidence that teams make such systematic mistakes in pulling starter decisions."
"preferred model yielding a 95% confidence interval for the marginal effect of pulling a starter on win probability of -1.4 to +1.8 percentage points."

Page 3:
"in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats."
"probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first"
"We speculate (but lack sufficient data to test) that this regularity is due at least partly to convention."

Page 4:
"Baseball games consist of nine innings..."
"We obtain detailed pitch-level data for all games ... for the 2008-2017 seasons from Baseball Savant"
"We restrict our sample to these innings, plus the 8th, as decisions in that inning have relatively large effects on which team wins the game. We also limit the sample to at bats in which the current score difference is at most one run..."
"starters are most often pulled in the 6th and 7th innings."

Page 5:
"Suppose time, t, is continuous and ranges from 0 to 1, and the starting pitcher has a “runs density function” of f(t), meaning that the expected runs the starter gives up from t, to t+dt is ∫ f(t) dt."
"We assume f′(t) > 0 (starters tire throughout the game...)"
"we use runs allowed as a proxy for win probability."
"the average quality of the bullpen for the remainder of the game likely declines when the bullpen is called on earlier"
"We therefore use b(t) to denote the average number of runs per unit of time allowed by the bullpen when the bullpen is called at time t, and assume that b′(t) < 0"

Page 6:
"expected runs for the game when PS_t =1 is equal to ∫ f(t) dt + b(t̂)(1-t̂)"
"Differentiating with respect to t̂ is f(t̂)+b′(t̂)(1−t̂)−b(t̂), with second derivative f′(t̂)+b″(t̂)(1−t̂)−2b′(t̂), which is weakly positive, and so expected runs are minimized at t* such that: f(t*)+b′(t*)(1−t*) = b(t*)."
"Proposition 3.1. At the expected-runs minimizing time to pull the starter, t*, f(t*) > b(t*)."
"This result means that we should expect a strict improvement in current pitching quality at the optimal time that the starter is pulled."

Page 10:
"We test these implications using straightforward linear probability models..."
"our primary coefficient of interest is β_PS; if β_PS > 0 for Y=Win, this would imply that pulling the starter increases win probability on the margin, so managers wait too long to pull starters on average, and if β_PS < 0, this would imply managers pull starters too soon."
"we again acknowledge the lack of true randomization of the PS treatment"

Page 11:
"Variables used to control for starter’s quality and condition..."
"Pitch Count is equal to current pitch count minus the starter’s average pitch count for the season when pulled"
"Recent Fastball is equal to the average fastball thrown in the last six at bats minus average fastball velocity from the first four innings of the game"

Page 13:
"To account for recent events potentially driving biases, we examine interactions of PS with several variables measuring events that occurred in recent at bats"
"The “lucky” variable is the deviation between change in expected runs and the predicted change to expected runs based on pitch location and several other variables"

Page 17:
"PS has a small insignificant and precisely estimated effect on Win in both models."
"Both specifications also yield estimates significant at the 5% level, implying that pulling the starter reduces the probability of giving up at least one run in the remainder of the inning by approximately two percentage points."
"All of these results are consistent with optimal PS choices."

Page 20:
"Results are almost entirely insignificant..."
"Apparently, this influence does not affect win probability."

Page 23:
"We show that, under reasonable assumptions, current inning pitching performance immediately improves when starters are pulled at the optimal time with respect to maximizing the probability of winning the current game."
"We interpret these results to imply that managers make decisions to pull starters approximately optimally in between at bats."
"a caveat is that the randomization of our treatment (pulling starters) is unclear, and to the extent that these decisions have been approximately optimal in recent years, this is likely due to a period of learning over many years."
"our analysis also suggests that decisions may be improved by making more within-at bat pitching changes."

Appendix page 29:
"Expected runs created for a given pitch, RC_i, are derived from Marchi and Albert (2013)..."
"The model is estimated using all pitches in the data, but separately for umpire-called pitches and pitches at which the batter swings as:"
"ER_i = ..." Hard due text formatting. Need not quote exact equation maybe use operator form.

Need formal LaTeX. Need define:
- t ∈ [0,1], dimensionless normalized game time (or innings fraction).
- f(t): starter's runs density, units runs per unit normalized time. Assumption f'(t)>0, f(0)=0. f has units R/T_norm.
- b(t): average bullpen runs per unit time for remainder if called at t, units R/T_norm. Assumption b'(t)<0, b''(t)<0? Text says "It is technically useful and without loss of generality to assume b''(t)<0." Wait b' <0, b''<0 means decreasing marginal? Need check. Text: "assume b′(t) < 0, reflecting that the quality of the bullpen (for the remainder of the game) increases as t increases... It is technically useful and without loss of generality to assume b″(t) < 0." Then second derivative f′(t)+b″(t)(1−t)−2b′(t), which is weakly positive? Wait if b''<0 and b'<0, -2b' >0, b''(1-t)<0, f'>0. "weakly positive" maybe if magnitudes. Actually text says second derivative ... which is weakly positive, so minimized. But if b''<0 and -2b' positive; yes likely positive. Need state breakdown if f''+b''(1-t)-2b' changes sign. If not convex, t* may be max or boundary.

- Expected runs if pull at t̂: R(t̂)=∫_0^{t̂} f(t)dt + b(t̂)(1-t̂). Units runs.
- FOC: f(t̂)+b'(t̂)(1-t̂)-b(t̂)=0. At optimum: f(t*) + b'(t*)(1-t*) = b(t*). Since b'<0, f(t*) > b(t*). Proposition.
- Second-order condition: SOC = f'(t*) + b''(t*)(1-t*) - 2b'(t*) > 0. Breakdown if SOC=0 (singular inflection/indifference), SOC<0 (local maximum; pull timing non-unique or boundary). Boundary regimes t*=0 if f(0)+b'(0)-b(0)≥? Need derive: R'(t)=f(t)+b'(t)(1-t)-b(t). At t=0, R'(0)=f(0)+b'(0)-b(0). f(0)=0. If R'(0)≥0, optimum not at 0? Actually R decreasing initially if R'(0)<0. Minimum at boundary t=0 if R'(0)≥0? Wait derivative positive means R increases as t increases, so min at t=0. But text says f(0)=0, b'(0)<0, so R'(0)=b'(0)-b(0) <0 (since b'>0? b'<0, -b(0) maybe if b(0)>0, negative). So R'(0)<0, initial decrease; optimum interior. At t=1, R'(1)=f(1)-b(1). If f(1)≤b(1), derivative <=0, min at boundary t=1. But proposition says f(t*)>b(t*) at interior. Boundary t=1 can occur if starter never becomes sufficiently worse? But f'>0, b decreasing, likely cross. We need mention. Also b(t) positive? Runs per time. Need b(t)>0. b'(t)<0. If b(t) can be negative impossible.

Empirical model:
Y_i = β_PS PS_i + D_i'γ + G_i'δ + α_{score,inning,base,out} + ε_i
where Y_i ∈ {Win_i, Runs_i}; PS_i ∈ {0,1}; i plate appearance; cluster by game. β_PS units probability (dimensionless) per pull. CI [-0.014,0.018] for Win. Runs effect -0.02 (2 percentage points) significant. Need interpret.

Need exact singularity/breakdown regimes:
1. SOC singularity: f'(t*)+b''(t*)(1-t*)-2b'(t*)=0, second-order degeneracy; objective flat to third order; t* indeterminate. If <0, local max; if >0 local min.
2. Boundary t*=0 or t*=1; if R'(0)≥0 (unlikely under f(0)=0,b'<0) or R'(1)≤0 (starter never worse enough than bullpen). Then Proposition 3.1 may fail at boundary (strict inequality only interior).
3. b(t) definition ambiguity: average vs marginal density. Text: "If b(t) were defined to be analogous to f(t) as current expected runs density, and declined over time, then at the optimal time to pull starters f(t) and b(t) would be equal." This is a breakdown/assumption switch. Need cite [PAGE 7?]. Wait quote on page 7? Text around "The key assumption driving the proposition..." appears after Figure 2 maybe page 7. Need map. Actually page 7 includes note 15 and paragraph. Let's check: after Proposition on page 6, text continues page 7: "The key assumption driving the proposition is the decline in average runs per bullpen inning..." So cite [PAGE 7]. That's key.
4. Identification breakdown: unconfoundedness fails: Cov(PS_i, ε_i|X)≠0. Then β_PS not causal. Text acknowledges "lack of true randomization" [PAGE 10], "randomization of our treatment... unclear" [PAGE 23].
5. Missing variables: no actual reliever used; bullpen WHIP excludes current game; etc. Not a singularity but gray-zone.

Need "source operators and equations" maybe present as formal operators: PS_t, R(t), f, b, t, β_PS, MoY regression. Also "lucky runs" operator: RC_i = ΔRE + runs_scored; ER_i = g(location, count, handedness, season, pitch type, velocity) + ε; Lucky = actual ΔRC - \widehat{ER}. Units runs. Need cite [PAGE 29].

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. Need discuss Bayesian updating, omission bias, hot-hand, confirmation/primacy, Romer 2006, Ganeshapillai and Guttag 2014, Carleton, sabermetrics, three-point revolution, fourth-down. Multi-week traps: learning over decades, convention, within-at-bat changes, opponent PS conformity. Need explain retrocausal: later outcome (win) used to infer earlier decision optimality; hindsight bias; Thaler quote. Need mention "Richard Thaler’s take (“Hindsight bias illustrated”)" [PAGE 23]. Need lineage: Bayesian updating about changing state, expert incentives, behavioral economics, optimal stopping, structural vs reduced form (Provencher), Goldman/Rao. Need multi-week traps: sample season restrictions, September roster expansion, postseason exclusion, 2016/17 analytics shift, team-season FEs, manager of year placebo. Need maybe 2-3 paragraphs.

Need "recursive theory of mind" crisis habit regression vs counter-trap vs clock. Need interpret managers' beliefs about starter fatigue, opponent's decision, convention. Recursive ToM: manager models starter's fatigue, batter quality, opponent manager's PS, public expectation, own reputation; "Opponent PS" increases probability by 5.3 pp [PAGE 3] but no outcome interaction [PAGE 20]. This is conformity/counter-trap. Crisis habit regression: omission bias leaves starters too long under high stress; recency/hot-hand overreact; counter-trap: pulling when opponent pulls first is social conformity not optimal; clock: within-at-bat convention (99.3% between at bats) is a timing clock/temporal regularity that may be suboptimal because information arrives pitch-by-pitch. Need discuss recursive ToM levels: Level 0 starter state; Level 1 manager's belief; Level 2 manager's belief about opponent's belief; Level 3 public/analyst hindsight. Need say evidence: managers respond to subtle variables (bullpen pitch counts, recent pitch count, batter quality, handedness, opponent PS) [PAGE 14? Actually page 14 Table 1 discussion]. Need cite [PAGE 14] for "nearly all variables significant" and "Opponent PS". Let's map: Section 5.1 preliminary analysis starts page 14? Text: page 14 has "Rather than present summary statistics..." and table? It says page 14 before Table 1? Actually printed page 14 includes Section 5.1? Let's check: page 13 ends with Section 4.4. Page 14 begins "vary by context... 5. Results 5.1 Preliminary Analysis..." Wait yes page 14 includes Table 1? It says "Rather than present summary statistics, we present results..." Then page 15-16 tables. The quote "The table shows that nearly all of the variables are significant..." is page 14. So cite [PAGE 14]. "The only non-significant variable is Bullpen WHIP... Last 3 Lucky Runs..." [PAGE 14]. Good.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need derive physical/biomechanical/weather constraints that would veto inference if violated. Source includes pitch count, fastball velocity, "Recent Fastball" [PAGE 11], physical condition; weather not explicitly in paper. Need be careful: Weather not in source. The instruction asks physical/biomechanical/weather veto proof. We can say the source does not model weather directly; any weather layer is an external veto not identified in the paper. Need not fabricate citations. We can present veto conditions: if unobserved biomechanical fatigue or weather changes alter f(t) and b(t) and correlate with PS, then β_PS not identified. Physical: pitch count and velocity proxies; if measurement error in Recent Fastball due to radar calibration or weather, then proxy fails. Biomechanical: fatigue not solely pitch count; injury risk, mechanical decay, times-through-order. Weather: temperature, humidity, wind, rain delays affect run environment and pitcher fatigue; not in source. Need "veto proof" as formal: For causal claim β_PS, need conditional exchangeability PS_i ⟂ (Y_i(1),Y_i(0)) | X_i. If weather W_i affects both PS_i and Y_i and W_i not in X_i, then bias = E[Y(0)|PS=1]-E[Y(0)|PS=0] not zero. We can quantify via omitted variable bias formula: plim \hatβ = β + γ_{WY} δ_{WPS} / σ^2_{PS|X}? Need formal LaTeX. But no fake ratios. OVB formula is legitimate. Need units. Let W be omitted weather scalar (e.g., heat index °C or wind m/s). Bias = γ * δ / Var(PS|X) maybe. Need not overdo.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR? Reinforcement Learning from Verbal/Verified Rewards? Need create counterfactual veto scenarios that are verifiable. Need predictions. Should be concrete: 
1. Within-at-bat PS intervention: If managers could pull mid-at-bat after pitch-level fatigue signal (velocity drop ≥1.5 mph over last 10 pitches or ≥2.0 mph vs first four innings), then optimal timing set shifts earlier within at-bat; prediction: β_PS on Win becomes positive for between-at-bat-only decisions if mid-at-bat is allowed? Need careful. Source says "our analysis also suggests that decisions may be improved by making more within-at bat pitching changes" [PAGE 23]. Prediction: If a rule allowed mid-at-bat pulls, and managers use velocity threshold, then Runs in current inning decreases by >2 pp? Need verify. We can predict: under a simulated policy that permits mid-at-bat pulls when Recent Fastball ≤ -1.5 mph, the between-at-bat-only estimate of PS on Runs remains -2 pp, but the counterfactual mid-at-bat treatment has negative effect on Runs and zero/negative on Win. Veto if no measurable improvement or if null.
2. Opponent-PS conformity de-biasing: If managers are randomized to see/not see opponent PS before deciding, the 5.3 pp opponent-PS effect should vanish in blind condition; if it persists, not conformity. Prediction: blind condition reduces PS probability by ~5.3 pp and does not reduce Win; if Win falls, conformity was protective. Veto if no change. This is verifiable with experiment.
3. Lucky-runs de-biasing: If managers are given a "luck-adjusted" dashboard (actual minus expected runs) and trained to ignore lucky hits, then their PS decisions should respond less to Last 3 Lucky Runs and more to true fatigue; prediction: interaction coefficient PS×Last3LuckyRuns moves toward zero, while PS×Last3Runs remains positive; Win effect unchanged. Veto if dashboard changes Win or increases Runs.
Need exact predictions with units/pp. Use "percentage points". Need mention RLVR: reward verifier checks pre-registered coefficients, e.g., sign and CI. Need no betting.

Need maybe 3 scenarios:
- Physical fatigue threshold: randomized mid-at-bat pull when fastball velocity drop ≥1.5 mph vs first four innings. Prediction: current-inning Runs falls by ≥2 pp, Win CI remains [-1.4,+1.8]? Hmm if treatment effect of pulling on Win already near zero. Actually mid-at-bat may improve. Need formulate verifiable.
- Weather/rain-delay veto: If a rain delay ≥30 min occurs, starter's f(t) shifts up and b(t) maybe; if PS decision not updated, β_PS biased. Prediction: excluding rain-delay games changes β_PS by <0.5 pp; if >0.5 pp, weather layer veto. That's verifiable.
- Opponent PS conformity: randomization.
- Lucky runs: as above.
Need exactly 3. Choose strongest.

Need include "cross-layer veto adjudication" physical/biomechanical/weather. Could include formal condition:
Let X_i include observed controls; W_i be weather vector (temp °C, humidity %, wind m/s, rain delay minutes). Causal effect identified if W_i ⨂ PS_i | X_i. Veto if |E[Y_i(0)|PS_i=1,X_i]-E[Y_i(0)|PS_i=0,X_i]| > δ. Use observed proxy: Recent Fastball Δv (mph). Biomechanical fatigue threshold: if Δv < -1.5 mph and PS=0, then f(t) underestimated. Weather: if rain delay >30 min, starter's residual fatigue and bullpen availability change. Need state source does not include weather variables, so any claim requires augmentation. Also physical: pitch count and velocity are proxies; if measurement error σ_v > 1 mph, attenuation bias. Need formal:
\tilde v = v + η, η ~ (0,σ_η^2). Attenuation factor λ = σ_v^2/(σ_v^2+σ_η^2). If σ_η=1 mph and σ_v=2 mph, λ=0.8; coefficient attenuated by 20%. This is a ratio? It's not fake; it's attenuation formula. Allowed? It's formal. Need maybe not use fake ratios. This is legitimate. But avoid "fake ratios" like Force/Fatigue. We can use standard measurement error. Units mph. Need no overkill.

Need include source operators and equations with page citations and verbatim quotes. Need not cite every equation? Yes.

Need ensure "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid words "odds" maybe except "odds ratio"? Better avoid. "win probability" is fine. Do not mention betting. Do not mention "moneyline". Do not mention "spread". Good.

Need write in academic dense style. Need exact XML tags. No markdown? Can use LaTeX inside. Fine.

Need satisfy ">= 1,000-word depth across these exact XML sections". We'll make ~2500 words. Need count? We can estimate. THINK_TRACE 600 words. Others 300-500 each. Total 2500. Good.

Need be careful with "PAGES: 24" but cite page numbers from printed text. If user expected 24 pages, maybe [PAGE 1] etc. We'll cite printed page numbers as in source. Could note "printed source pages." But no need. The source text includes page numbers. We'll use [PAGE 1] etc. For Appendix page 29. It's okay. If the actual PDF has 24 pages, our citations might be off, but source text page numbers are clear. The instruction says cite exact [PAGE N] markers. We'll cite [PAGE 1], [PAGE 2], etc.

Need maybe include "verbatim quotes" exactly. Ensure quotes accurate. Use quotation marks.

Let's draft.

Structure:

<THINK_TRACE>
- Start: The paper is a reduced-form + simple optimal stopping model. Need reconstruct decision-theoretic object.
- Multi-hop: Step 1 define normalized time, f, b, R. Step 2 FOC, proposition. Step 3 empirical mapping: if β_PS>0 for Win then too late; <0 too soon; ≈0 optimal. Step 4 nuance: Runs should decline at optimal pull; they find -2pp. Step 5 gray-zone: no randomization; PS not random; confounding via fatigue/quality; proxies; opponent PS; within-at-bat convention; average vs marginal b; boundary/SOC. Step 6 audit of evidence: CI, subsamples, MoY placebo. Need mention exact quotes.
- Gray-zone audit: The "as good as random" claim is conditional; not true random. Omitted weather/biomechanics. The null is precisely estimated but not proof of exact optimality; equivalence CI. Need mention Abadie. Need "equivalence" maybe.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions and equations. Use LaTeX. Include page quotes. Need use \(...\) or \[...\]. Good.
- Define variables, units. 
- Proposition. 
- Empirical model. 
- Lucky runs. 
- Breakdown regimes. 
- Cite quotes.
Need be concise but detailed.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Bayesian updating, behavioral biases, Romer, Ganeshapillai, sabermetrics, three-point, fourth-down, learning. Retrocausal: hindsight bias Thaler. Multi-week traps: season restrictions, roster expansion, 2016/17 shift, team-season FEs, manager of year. Need cite pages.

<RECURSIVE_THEORY_OF_MIND>
- Manager's nested beliefs: starter state, opponent decision, public/media, own reputation. Evidence: Opponent PS +5.3 pp; no outcome interaction. Convention 99.3% between AB. Recency/luck. Crisis habit regression vs counter-trap vs clock. Need explain.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto. Formal exchangeability condition. Proxies. Weather not in source. Veto proof: if unobserved W correlates with PS and Y, β_PS biased. Need mention pitch count, Recent Fastball [PAGE 11]. Rain delay. Need state source's model doesn't include weather; any weather claim is external. Provide thresholds: Δv threshold, rain delay. Need not be fake. 
- Maybe formal OVB: \(\operatorname{plim}\hat\beta_{PS}=\beta_{PS}+\frac{\operatorname{Cov}(PS,\epsilon|X)}{\operatorname{Var}(PS|X)}\). If weather enters ε and affects PS, bias. Need units probability per pull. 
- Veto if \(|Bias|>0.014\)? That's CI half-width. Or >0.5 pp. Need use as threshold. Good.

<RLVR_COUNTERFACTUAL_VETOES>
- Three scenarios with predictions and veto conditions. Use "RLVR verifier" with pre-registered metrics. 
1. Mid-at-bat pull rule based on fastball velocity drop. Prediction: current-inning Runs falls ≥2 pp; Win CI excludes harmful? Veto if no reduction.
2. Opponent-PS blind randomization. Prediction: 5.3 pp effect vanishes; Win unchanged. Veto if effect remains.
3. Luck-adjusted dashboard. Prediction: interaction coefficient on PS×Last3LuckyRuns →0; Win unchanged. Veto if not.
Need perhaps include weather veto instead of lucky? User asked RLVR counterfactual vetoes, 3. Could include weather to tie cross-layer. But we already have cross-layer. Three scenarios must be verifiable. Maybe use weather rain-delay as one: If rain delay ≥30 min, re-estimate excluding; prediction β_PS changes <0.5 pp; if >0.5, weather layer veto. That is good. But then less about paper's main. Need 3: mid-at-bat, opponent conformity, rain-delay. Lucky runs is also in paper. Which is more verifiable? Opponent conformity is experimental. Rain delay is observational. Mid-at-bat rule is policy. All verifiable. Maybe include lucky as additional? User wants 3. We can include 3 exactly. Need "counterfactual vetoes" - if prediction fails, veto claim. Good.

Need ensure not too short. Let's write with high detail. Need no "betting". Avoid "odds" entirely. "win probability" okay. "probability" okay.

Need mention "unknown authors" no issue.

Let's craft content.

Potential issue: In formal equation, text uses \(f'(t)>0\) but earlier source text had \(*^2\) due corrupted. We can use standard. Need quote exact "f′(t) > 0" but source text has "*<sup>2</sup> (+)" maybe. In quote we can paraphrase? If verbatim, need exact. We can quote "We assume *<sup>2</sup> (+) > 0 (starters tire throughout the game..." not great. Better quote the conceptual sentence without equation: "starters tire throughout the game, on average, or are more likely to see performance decline when facing the batting order multiple times" [PAGE 5]. That is verbatim. For equation, present our formalization, not quote. Need cite page.

Need "exact [PAGE N] markers and verbatim quotes." Use at least several. Good.

Need maybe mention "f(0) normalized to 0" [PAGE 5]. Quote "normalize f(0) to 0" from text. It says "normalize *(0) to 0." We can say \(f(0)=0\) [PAGE 5].

Need "units": normalized time dimensionless, runs per unit time, runs, probability. In empirical, coefficient in probability points per pull. Need "percentage points" not "pp" maybe define.

Need "singularity/breakdown regimes" exact. Use "singular" in math sense:
- \(\mathcal{S}_2(t)=0\) second-order degeneracy; \(\mathcal{S}_2(t)<0\) local maximum; \(t^*\in\{0,1\}\) boundary; \(b\) marginal vs average; unconfoundedness failure. 
- Also "sample singularity" if only 6th-8th and one-run games: no variation for third-time-through-order [PAGE 4 note 12]. That is a breakdown for generalizing. Mention.
- "multiple testing" with subsamples: significance at 5% not robust; paper notes stronger 0.5% standard [PAGE 20]. Good.

Need "retrocausal genealogy" include "Thaler's take ('Hindsight bias illustrated')" quote [PAGE 23]. Good.

Need "multi-week traps": September roster expansion, postseason exclusion, 2016/17 analytics shift, 2008-2017 sample, prior seasons robustness. Mention as temporal traps.

Need "Recursive Theory of Mind" maybe "crisis habit regression" term: under crisis, manager regresses to habit (omission bias, convention); "counter-trap" is opponent PS conformity; "clock" is between-at-bat timing convention. Need explicitly name. Good.

Need "Cross-layer veto adjudication" maybe "physical/biomechanical/weather veto proof" use formal proof:
Claim \(C\): \(\beta_{PS}\) measures causal effect. Veto \(V\): \(\exists W\) such that \(W \notin X\), \(W \to PS\), \(W \to Y\), and \(W \not\perp PS|X\). Then \(E[Y(1)-Y(0)] \neq \beta_{PS}\). Proof by conditional exchangeability failure. If physical fatigue proxy \(V_t\) has measurement error, then remaining fatigue enters error. Weather \(W_t\) (temp, humidity, wind, rain delay) affects both. Thus need include \(W_t\) or randomize. Source includes "Pitch Count" and "Recent Fastball" [PAGE 11] but not weather. Veto threshold: if inclusion changes β by >0.5 pp or CI excludes zero materially. Need "proof" maybe mathematical:
\[
\hat\beta_{PS} \xrightarrow{p} \beta_{PS} + \frac{\operatorname{Cov}(PS_i, \epsilon_i|X_i)}{\operatorname{Var}(PS_i|X_i)}
\]
If \(\epsilon_i = \gamma W_i + u_i\) and \(PS_i = \pi W_i + \nu_i\), bias \(=\gamma\pi \operatorname{Var}(W)/(\pi^2\operatorname{Var}(W)+\sigma_\nu^2)\) under linear projection. Units. If \(\gamma\neq0\) and \(\pi\neq0\), bias nonzero. Good. This is standard not fake. Need no ratio? It's a standard bias ratio but not fake. Fine.

Need "RLVR" maybe "Reinforcement Learning from Verifiable Rewards" not necessary. Use "RLVR verifier" as check. Need predictions with exact metrics:
1. Mid-at-bat: Treatment: allow pull when \(\Delta v_{\text{last 6}} \le -1.5\) mph vs first-four mean; compare to between-at-bat-only. Prediction: \(P(\text{Runs}=1)\) decreases by at least 2.0 percentage points; \(P(\text{Win})\) point estimate remains within \(\pm 1.8\) pp. Veto if reduction <2 pp or Win worsens by >1.8 pp.
2. Opponent PS blind: Randomize display of opponent PS. Prediction: \(\Pr(PS=1|\text{visible})-\Pr(PS=1|\text{blind}) \approx 5.3\) pp; interaction with Win zero. Veto if difference <2 pp or Win changes >1.8 pp.
3. Rain delay/weather: Re-estimate excluding games with rain delay ≥30 min or heat index >32°C. Prediction: \(|\Delta \beta_{PS}^{Win}|<0.5\) pp and Runs effect remains -2 pp. Veto if >0.5 pp or sign flips.
Need mention "pre-registered" and "verifier checks coefficient sign/CI". Good.

Need maybe include "lucky runs" in source operators. Good.

Need now write final. Need ensure XML tags exactly and closed. No extra outside? Could add no preamble. Use exact sections. Good.

Need be mindful of ">=400 words" THINK_TRACE. We'll write ~700. Total >2500. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is best read as a two-layer argument: a decision-theoretic model of optimal stopping and a reduced-form empirical test of whether observed bullpen calls are consistent with that model. The first multi-hop step is to formalize the manager’s trade-off. Let normalized game time be \(t\in[0,1]\), let \(f(t)\) be the starter’s runs density in runs per unit normalized time, and let \(b(t)\) be the average bullpen runs per unit time for the remainder of the game if the bullpen is called at \(t\). The paper assumes starters tire, so \(f'(t)>0\), and assumes the remaining bullpen is better, in average runs per inning, when called later, so \(b'(t)<0\). If the starter is pulled at \(\hat t\), expected runs are
\[
R(\hat t)=\int_0^{\hat t} f(t)\,dt+b(\hat t)(1-\hat t).
\]
The first-order condition is
\[
f(\hat t)+b'(\hat t)(1-\hat t)-b(\hat t)=0,
\]
so at an interior optimum \(t^*\),
\[
f(t^*)+b'(t^*)(1-t^*)=b(t^*).
\]
Because \(b'(t^*)<0\), this implies \(f(t^*)>b(t^*)\). That is Proposition 3.1: at the optimal pull time, the starter’s current expected runs rate is strictly worse than the bullpen’s average rate. The paper states this directly: “At the expected-runs minimizing time to pull the starter, \(t^*\), \(f(t^*) > b(t^*)\)” [PAGE 6], and explains that this means “we should expect a strict improvement in current pitching quality at the optimal time that the starter is pulled” [PAGE 6]. This is the key non-obvious step: optimality does not imply indifference at the moment of pulling; it implies a discrete current-inning improvement because delay preserves future bullpen quality.

The second hop is the empirical mapping. If managers pull too late on average, then the marginal effect of pulling on win probability should be positive, because pulling removes a worse current pitcher. If they pull too early, the marginal effect should be negative. If they are approximately optimal, the marginal win-probability effect should be near zero, while the current-inning runs effect should be negative. The paper states: “if \(\beta_{PS} > 0\) for \(Y=Win\), this would imply that pulling the starter increases win probability on the margin, so managers wait too long to pull starters on average, and if \(\beta_{PS} < 0\), this would imply managers pull starters too soon” [PAGE 10]. The empirical finding is a precisely estimated near-zero win effect: the preferred model gives a 95% confidence interval of \(-1.4\) to \(+1.8\) percentage points [PAGE 2], and pulling reduces the probability of allowing at least one run in the remainder of the inning by about two percentage points [PAGE 17]. The authors conclude: “All of these results are consistent with optimal PS choices” [PAGE 17].

The gray-zone audit is where the inference must be handled carefully. The treatment is not randomized. The paper itself concedes “the lack of true randomization of the PS treatment” [PAGE 10] and later says “the randomization of our treatment (pulling starters) is unclear” [PAGE 23]. Thus the near-zero coefficient is a conditional partial correlation unless one accepts the “as good as random” conditioning set. The paper defends the conditioning set with score-inning-baserunner-outs fixed effects, starter quality and condition proxies, bullpen quality and fatigue proxies, opponent hitting quality, and team-season/opponent-season/starter fixed effects. It also shows robustness to removing proxy controls, with \(\beta_{PS}\) ranging from \(-0.009\) to \(0.005\) [PAGE 17]. That is useful, but it is not a proof of unconfoundedness. The most important omitted layers are biomechanical fatigue beyond pitch count and fastball velocity, weather and rain-delay effects, and within-at-bat information. The paper’s own convention result is a gray-zone flag: “in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats” [PAGE 3]. If pitch-level information arrives within an at bat, then a between-at-bat-only decision clock may itself be suboptimal. The paper says “our analysis also suggests that decisions may be improved by making more within-at bat pitching changes” [PAGE 23]. So the correct read is not “managers are exactly optimal in all dimensions,” but “between-at-bat bullpen calls are consistent with approximate optimality under the maintained conditioning set.”

A second gray-zone issue is the definition of \(b(t)\). The proposition depends on \(b(t)\) being an average runs-per-inning rate for the remainder of the game, not a marginal current-inning density. The paper explicitly notes: “The key assumption driving the proposition is the decline in average runs per bullpen inning, and not marginal (current) runs” [PAGE 7]. If \(b(t)\) were redefined as a marginal current density analogous to \(f(t)\), then at the optimum one would get \(f(t)=b(t)\), not \(f(t)>b(t)\). This is a formal assumption-switch breakdown. A third gray-zone issue is the second-order condition. The paper’s second derivative is
\[
f'(t)+b''(t)(1-t)-2b'(t),
\]
which it treats as weakly positive for a minimum [PAGE 6]. If this expression is zero, the objective is locally flat to second order and the optimal timing is not identified by the first-order condition alone; if negative, the stationary point is a local maximum, not a minimum; if the optimum lies at \(t=0\) or \(t=1\), the strict inequality \(f(t^*)>b(t^*)\) need not hold in the same interior sense. These are the exact singularity and boundary regimes that any formal audit must name.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s core operator is the expected-runs functional for a pull at normalized time \(\hat t\):
\[
R(\hat t)=\int_0^{\hat t} f(t)\,dt+b(\hat t)(1-\hat t),
\]
with \(t\in[0,1]\) dimensionless, \(f(t)\) in runs per normalized time unit, \(b(t)\) in runs per normalized time unit, and \(R(\hat t)\) in runs. The source normalizes \(f(0)=0\) [PAGE 5] and assumes “starters tire throughout the game, on average, or are more likely to see performance decline when facing the batting order multiple times” [PAGE 5], i.e. \(f'(t)>0\). It defines \(b(t)\) as “the average number of runs per unit of time allowed by the bullpen when the bullpen is called at time \(t\)” and assumes \(b'(t)<0\), “reflecting that the quality of the bullpen (for the remainder of the game) increases as \(t\) increases” [PAGE 5]. The paper also assumes \(b''(t)<0\) as a technical condition [PAGE 5].

The first-order condition is
\[
\frac{dR}{d\hat t}=f(\hat t)+b'(\hat t)(1-\hat t)-b(\hat t)=0,
\]
and the second-order condition is
\[
\frac{d^2R}{d\hat t^2}=f'(\hat t)+b''(\hat t)(1-\hat t)-2b'(\hat t).
\]
At an interior minimizer \(t^*\),
\[
f(t^*)+b'(t^*)(1-t^*)=b(t^*).
\]
Because \(b'(t^*)<0\), Proposition 3.1 follows:
\[
f(t^*)>b(t^*).
\]
The source states: “At the expected-runs minimizing time to pull the starter, \(t^*\), \(f(t^*) > b(t^*)\)” [PAGE 6]. It also states the empirical implication: “This result means that we should expect a strict improvement in current pitching quality at the optimal time that the starter is pulled” [PAGE 6].

The empirical operator is a linear probability model at the plate-appearance level:
\[
Y_i=\beta_{PS}PS_i+D_i'\gamma+G_i'\delta+\alpha_{s,i,b,o}+\varepsilon_i,
\]
where \(Y_i\in\{Win_i,Runs_i\}\), \(PS_i\in\{0,1\}\) is a dummy for whether the starter is pulled at the start of at-bat \(i\), \(D_i\) contains covariates interacted with \(PS_i\), \(G_i\) contains additional covariates, and \(\alpha_{s,i,b,o}\) is a fully saturated score-inning-baserunner-outs fixed-effect vector [PAGE 10]. The coefficient \(\beta_{PS}\) is in probability units per pull; for \(Win\), the paper reports a 95% confidence interval of \([-0.014,0.018]\) [PAGE 2], and for \(Runs\) it reports a reduction of approximately two percentage points [PAGE 17]. Standard errors are clustered by game [PAGE 10]. The paper’s identification statement is: “Implicitly, we use \(PS=0\) observations as counterfactuals for \(PS=1\) observations (conditional on the covariates), and assume that unobservables randomly drive variation in the PS decision, and are not systematically correlated with both PS and Y” [PAGE 10]. This is the exact conditional-exchangeability assumption that can fail.

The recency and luck operators are also formal. The “lucky” variable is “the deviation between change in expected runs and the predicted change to expected runs based on pitch location and several other variables, summed over pitches that occurred during the at bat” [PAGE 13]. In the appendix, expected runs created for a pitch are constructed as the ending run-expectancy state minus the starting run-expectancy state plus runs scored on the play [PAGE 29], and the spatial model is a semiparametric generalized additive model with penalized splines for horizontal-vertical pitch location, interacted with batter handedness, ball-strike count, and season, plus pitch type and velocity [PAGE 29]. The operator is
\[
\widehat{ER}_i=g(\text{location},\text{count},\text{handedness},\text{season},\text{pitch type},\text{velocity})+\varepsilon_i,
\]
with \(\widehat{ER}_i\) in runs, and
\[
Lucky_i=\Delta RC_i-\widehat{ER}_i,
\]
also in runs. This is then aggregated over the last \(T\) at bats [PAGE 29].

Breakdown regimes must be stated exactly. First, interior second-order singularity:
\[
f'(t^*)+b''(t^*)(1-t^*)-2b'(t^*)=0.
\]
At this point the objective is locally flat to second order; \(t^*\) is not locally identified by the first-order condition alone. Second, local maximum:
\[
f'(t^*)+b''(t^*)(1-t^*)-2b'(t^*)<0,
\]
so the stationary point is not a minimizer. Third, boundary regimes \(t^*=0\) or \(t^*=1\), where the strict interior inequality \(f(t^*)>b(t^*)\) need not apply. Fourth, definitional breakdown: if \(b(t)\) is redefined as a marginal current-inning density rather than an average remainder-game rate, the optimality condition becomes \(f(t)=b(t)\), not \(f(t)>b(t)\); the paper flags this explicitly [PAGE 7]. Fifth, identification breakdown:
\[
\operatorname{Cov}(PS_i,\varepsilon_i\mid X_i)\neq 0,
\]
which makes \(\beta_{PS}\) a partial correlation rather than a causal effect. The paper acknowledges “the lack of true randomization” [PAGE 10] and “the randomization of our treatment (pulling starters) is unclear” [PAGE 23]. Sixth, sample-restriction breakdown: the analysis is limited to the 6th through 8th innings and score differences of at most one run [PAGE 4], so it cannot identify effects in blowouts, early innings, or postseason games; the paper excludes postseason games because “strategic decisions in these games are fundamentally different than regular season games due to the limited horizon” [PAGE 5, note 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage that runs from Bayesian updating under a changing state to behavioral economics of expert decision-making to sports analytics of optimal stopping. The introduction frames the problem as “Bayesian updating about an unobserved state of the world is hard. Especially when the state of the world (may) also be changing” [PAGE 1]. The candidate biases are explicit: conformity heuristic, omission bias, inattention, recency/hot-hand bias, and confirmation/primacy bias [PAGE 1]. The historical sports lineage includes Romer (2006) on fourth-down decisions, Ganeshapillai and Guttag (2014) on pulling starters to minimize current-inning run probability, and the sabermetrics literature on bullpen usage [PAGE 2]. The paper’s advance is to change the objective from current-inning runs to winning, and to show that optimality implies a current-inning improvement at the pull time even when the win-probability marginal effect is zero [PAGE 2]. That is a retrocausal correction: earlier analyses that judged pulls by current-inning run minimization were using a narrower objective than the manager’s actual win objective.

The retrocausal genealogy also includes hindsight bias. The paper closes by invoking “Richard Thaler’s take (‘Hindsight bias illustrated’) regarding the claim made in the tweet quoted at the start of our paper (that managers typically remove starters too early)” [PAGE 23]. The retrocausal trap is that observed outcomes after a pull make the earlier decision look wise or foolish ex post; the paper’s near-zero win effect cautions against reading ex post wins as proof of ex ante error. The broader lineage includes “slow learning” in game-theoretic situations [PAGE 3, note 8], the three-point revolution in basketball, and gradual fourth-down adoption in football [PAGE 3]. The authors’ interpretation is that “experience reduces bias, but the quantity of experience required for this learning to occur can be very large, and is likely context-dependent” [PAGE 3]. That is a multi-decade learning claim, not a within-season learning claim.

Multi-week and multi-season traps are embedded in the data design. The sample is 2008–2017, pre-September only, to avoid roster expansion and late-season development objectives [PAGE 4]. The paper notes that “starting September 1 the roster size expands” [PAGE 4] and that postseason games are excluded [PAGE 5, note 13]. It also notes a shift in the last two seasons: “there seems to be a shift in when starters are pulled in the 2016 and 2017 seasons” [PAGE 12], and reports robustness excluding those seasons [PAGE 2, note 5]. The team-season, opponent-season, and starter fixed effects are a defense against slow-moving organizational quality, but they also absorb variation that could identify learning. The Manager of the Year analysis is a placebo-like quality check: \(MoY\) has no significant effect on \(PS\), while \(MoY\) point estimates for Win are positive and significant [PAGE 21]. That supports the validity of \(MoY\) as a quality proxy and helps rule out the interpretation that the null \(PS\) effect is simply a noisy outcome. The multi-week trap is therefore not a single week of games; it is the co-evolution of managerial convention, analytics adoption, roster construction, and pitcher specialization over decades.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The manager’s decision is recursively embedded. At level 0, the manager models the starter’s latent fatigue state: pitch count, recent fastball velocity, recent runs, and handedness matchups. At level 1, the manager models his own bullpen’s remaining quality and fatigue. At level 2, the manager models the opponent’s batting quality and the opponent manager’s likely bullpen call. At level 3, the manager models how the public, media, and front office will interpret the outcome ex post. The paper provides direct evidence of level-2 recursion: “the probability of pulling the starter increases by 5.3 percentage points when the opposition team has pulled their starter first” [PAGE 3]. That is a conformity/social-influence channel. But the paper also finds “the Opp PS interaction is insignificant” for win probability [PAGE 20], and states: “Apparently, this influence does not affect win probability” [PAGE 20]. So the opponent’s action changes the manager’s clock, but not measurably the game outcome. That is the counter-trap: copying the opponent’s pull timing is a social convention, not a demonstrated win-probability improvement.

The “crisis habit regression” interpretation is that under high-pressure, high-information situations, managers may regress to omission bias or convention. The paper lists omission bias as a candidate: “the bias toward favoring errors of omission and not commission (in our context, pulling the starter)” could lead starters to be “generally left in games too long” [PAGE 1]. It also lists recency/hot-hand bias as a candidate for overreaction to recent information [PAGE 1]. The empirical results are mixed but mostly null: managers do respond to subtle variables such as previous games’ bullpen pitch counts, recent pitch count, current/next batter quality and handedness, and even \(Opponent PS\) [PAGE 14]. The “Last 3 Lucky Runs” coefficient is negative conditional on total recent runs, which the authors read as evidence that managers “have some ability to discern whether or not negative outcomes on the field are related to pitcher fatigue or underlying performance, and showing restraint when negative outcomes may be more due to luck” [PAGE 14]. That is a counter-trap against outcome bias.

The “clock” issue is the between-at-bat convention. The paper finds that “in 99.3% of cases starters pulled in our sample, this occurred in between, rather than during, at bats” [PAGE 3]. The authors speculate that this “regularity is due at least partly to convention” [PAGE 3]. A recursive theory of mind explains why: mid-at-bat pulls violate a shared script, impose informational burden on the umpire and scorekeeper, and expose the manager to second-guessing if the reliever immediately allows a hit. The clock is thus social as well as strategic. The paper’s conclusion that “decisions may be improved by making more within-at bat pitching changes” [PAGE 23] is a direct challenge to that clock. The recursive prediction is that a manager who updates on pitch-level fatigue signals should sometimes pull mid-at-bat, but only if the reliever’s warm-up and matchup costs are already sunk. The counter-trap is to mistake the between-at-bat convention for optimal stopping.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto question is whether physical, biomechanical, or weather layers can invalidate the reduced-form \(\beta_{PS}\) interpretation. The paper’s physical proxies are explicit: \(Pitch Count\) is “current pitch count minus the starter’s average pitch count for the season when pulled,” and \(Recent Fastball\) is “the average fastball thrown in the last six at bats minus average fastball velocity from the first four innings of the game” [PAGE 11]. These are proxies for actual or perceived physical condition, not direct biomechanical measurements. The paper also includes \(First 4 WHIP\) and \(PreInning Runs\) to capture current-game quality variation [PAGE 11]. The cross-layer veto is formal: causal identification requires
\[
PS_i \perp \!\!\! \perp \big(Y_i(1),Y_i(0)\big)\mid X_i.
\]
If an unobserved physical state \(F_i\) (biomechanical fatigue, latent injury, sleep, hydration) or weather state \(W_i\) (temperature, humidity, wind, rain delay) affects both \(PS_i\) and \(Y_i\), and is not in \(X_i\), then the probability limit is
\[
\operatorname{plim}\hat\beta_{PS}
=\beta_{PS}+\frac{\operatorname{Cov}(PS_i,\varepsilon_i\mid X_i)}{\operatorname{Var}(PS_i\mid X_i)}.
\]
With \(\varepsilon_i=\gamma F_i+\eta W_i+u_i\), nonzero \(\gamma\) or \(\eta\) combined with nonzero correlation between \(PS_i\) and \(F_i\) or \(W_i\) produces bias in probability units per pull. This is the veto proof: it is not enough that the paper controls pitch count and fastball velocity; if those proxies leave residual fatigue or weather variation correlated with the pull decision, the near-zero win effect is not cleanly causal.

Physical veto: if \(Recent Fastball\) has measurement error from radar calibration or park effects, the proxy attenuates. Let \(\tilde v=v+\zeta\), \(\zeta\sim(0,\sigma_\zeta^2)\); the attenuation factor is \(\lambda=\sigma_v^2/(\sigma_v^2+\sigma_\zeta^2)\). If \(\sigma_\zeta\) is comparable to the real velocity decline, the fatigue control is weakened. Biomechanical veto: pitch count and velocity do not capture mechanical decay, altered arm slot, or injury risk; a starter with stable velocity but degrading mechanics can have a higher \(f(t)\) than the proxy implies. Weather veto: the source does not include weather variables. Heat index, humidity, wind, and rain delays can change both run environment and pitcher fatigue. A rain delay can reset or worsen starter fatigue and alter bullpen availability; if managers pull differently after delays and delays affect runs, the weather layer vetoes a weather-blind causal claim.

The adjudication rule should be pre-specified. If adding biomechanical or weather covariates changes \(\beta_{PS}^{Win}\) by less than 0.5 percentage points and leaves the \(Runs\) effect near \(-2\) percentage points, the veto fails and the paper’s approximate-optimality interpretation survives. If the change exceeds 0.5 percentage points, or if the sign of \(\beta_{PS}^{Win}\) flips, the cross-layer veto succeeds: the reduced-form estimate is not robust to the omitted physical/weather layer. The source itself does not provide a weather model, so any weather-based claim must be treated as an external extension, not as an internal result.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three RLVR-style counterfactual vetoes are verifiable with pre-registered coefficients, confidence intervals, and sign checks. They are designed so that a failed prediction vetoes the corresponding interpretation.

1. Mid-at-bat pull rule based on fastball-velocity decay. Define a treatment that permits a pull within an at bat when
\[
\Delta v_{\text{last 6}}=\bar v_{\text{last 6}}-\bar v_{\text{first 4}}\le -1.5\ \text{mph}.
\]
The source’s between-at-bat convention is 99.3% of pulls [PAGE 3], and the paper suggests “decisions may be improved by making more within-at bat pitching changes” [PAGE 23]. Prediction: relative to between-at-bat-only management, the mid-at-bat rule reduces \(P(Runs=1)\) in the current inning by at least 2.0 percentage points, while the \(P(Win)\) point estimate remains within \(\pm1.8\) percentage points of the paper’s preferred interval [PAGE 2]. Veto condition: if the \(Runs\) reduction is less than 2.0 percentage points, or if \(P(Win)\) worsens by more than 1.8 percentage points, the claim that the between-at-bat clock is a correctable inefficiency is vetoed for that rule.

2. Opponent-PS blind randomization. The paper finds a 5.3 percentage-point increase in the probability of pulling one’s starter when the opposition has pulled first [PAGE 3], but no significant interaction with win probability [PAGE 20]. Counterfactual: randomize managers to see or not see the opponent’s \(PS\) decision before making their own. Prediction: the visible-minus-blind difference in \(\Pr(PS=1)\) is approximately 5.3 percentage points, and the visible condition does not improve \(P(Win)\); the \(Opp PS\) interaction with \(Win\) remains statistically indistinguishable from zero. Veto condition: if the visible-minus-blind difference falls below 2.0 percentage points, the conformity interpretation is vetoed; if visibility improves \(P(Win)\) by more than 1.8 percentage points, the counter-trap interpretation is vetoed because copying would be protective rather than merely conventional.

3. Luck-adjusted feedback and rain-delay robustness. The paper constructs \(Last T Lucky Runs\) as actual minus expected run creation [PAGE 13; PAGE 29] and finds that managers respond to luck conditional on total recent runs [PAGE 14]. Counterfactual A: give managers a luck-adjusted dashboard and train them to ignore lucky hits. Prediction: the coefficient on \(PS\times Last3LuckyRuns\) moves toward zero, while the coefficient on \(PS\times Last3Runs\) remains positive, and \(P(Win)\) does not fall. Counterfactual B: re-estimate the main model excluding games with a rain delay of at least 30 minutes or a heat index above 32°C. Prediction: \(|\Delta\beta_{PS}^{Win}|<0.5\) percentage points and the \(Runs\) effect remains near \(-2\) percentage points. Veto condition: if the luck interaction does not attenuate, the “managers distinguish luck” interpretation is vetoed; if the weather exclusion changes \(\beta_{PS}^{Win}\) by more than 0.5 percentage points or flips its sign, the weather layer vetoes the weather-blind causal claim. These three checks are verifiable because each has a pre-specified sign, threshold, and outcome variable.
</RLVR_COUNTERFACTUAL_VETOES>
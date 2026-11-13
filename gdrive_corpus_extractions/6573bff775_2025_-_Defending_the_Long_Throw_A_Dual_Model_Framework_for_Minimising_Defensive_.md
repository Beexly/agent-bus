---
source: "2025 - Defending the Long Throw A Dual Model Framework for Minimising Defensive Risk Sebastian Greenhalgh Dan Anghel - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 29
model: deepseek/deepseek-v4.1-flash-1017
words: 7420
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words total, deep analysis, no betting lines/odds. Need cite [PAGE N] markers and verbatim quotes. Need maybe discuss paper. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need cross-layer veto adjudication physical/biomechanical/weather. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need no invented fake ratios. Need THINK_TRACE >=400 words. Need be careful: "ZERO BETTING LINES" no spread/totals/moneylines/odds. We can mention probabilities only. Need source operators and equations from paper: long throw definition pass length >20m and end location inside opposition penalty area [PAGE 2]. Outcome labels 15s window and corners 45s; mutually exclusive priority Goal > Shot > Corner won > No outcome. Counts 3959, no outcome 3061 77.51%, shot 581 14.68%, corner 245 6.19%, goal 72 1.82%. XGBoost AUC 0.650/0.657 discrepancy; precision 0.23 recall 0.76 F1 0.35. SHAP values. GRU metrics. Need formal equations. We can define indicator variables, probabilities, SHAP additive model. Need units: meters, seconds, m/s, probability dimensionless, SHAP in log-odds or probability? Paper reports mean |SHAP| values but no unit. We can state as model-output units / log-odds if XGBoost margin, but paper not explicit. Need not invent? Could say "reported as mean absolute SHAP in model-output units; the source does not specify log-odds versus probability" [PAGE 10]. Need cite exact quotes.

Need maybe include equations: long throw set \(L=\{i: \ell_i>20\,\mathrm{m}, \mathbf{e}_i\in A_{\text{opp PA}}\}\). Outcome label within horizon 15s: \(Y_i = \arg\max priority...\). Conditional shot probability \(p_i=P(S_i=1|X_i)\). XGBoost additive: \(\hat y_i=\sum_{k=1}^K f_k(X_i)\), \(f_k\in\mathcal F\), objective with logistic loss and regularization maybe paper says shallow trees, 1000 rounds learning rate .015 max depth 4. We can state generic XGBoost objective if standard, but need not overdo. SHAP \(\phi_j=\sum_{S\subseteq F\setminus\{j\}} \frac{|S|!(|F|-|S|-1)!}{|F|!}[g(S\cup\{j\})-g(S)]\). Units: log-odds if g is logit; source doesn't specify. GRU equations: update gate \(z_t=\sigma(W_z x_t + U_z h_{t-1}+b_z)\), reset \(r_t\), candidate \(\tilde h_t=\tanh(W_h x_t + U_h(r_t\odot h_{t-1})+b_h)\), \(h_t=(1-z_t)\odot h_{t-1}+z_t\odot \tilde h_t\). Attention: \(\alpha_t = \mathrm{softmax}(v^\top \tanh(W h_t))\), context \(c=\sum \alpha_t h_t\), outputs \(\hat p^{\text{shot}}=\sigma(w_s^\top c+b_s)\), \(\hat p^{\text{goal}}=\sigma(w_g^\top c+b_g)\). Loss binary cross entropy \( \mathcal L=-\sum [y\log \hat p+(1-y)\log(1-\hat p)]\). Units dimensionless probabilities. Lift: predicted probability / training baseline; source says if 0.28 vs baseline .14 then twice likely [PAGE 16-17]. We can define lift \(L=\hat p / \bar p_{\text{train}}\). Breakdown: zero baseline guarded; small baseline unstable; calibration. Singularity regimes: denominator zero in lift; p=0/1 log loss; perfect separation; class imbalance; sequence horizon 256; 360 blind spots; no offside. Need exact singularity/breakdown regimes: lift baseline zero; logistic log loss at 0/1; SHAP additive only for additive model; GRU long sequences blur; 360 frames center thrower. Mention "no betting lines" not needed. Need no fake ratios like Force/Fatigue. We can mention physical variables height, weight, age. Weather: paper doesn't use weather. Cross-layer veto: physical/biomechanical/weather veto proof. Need adjudicate: physical: ball speed <=20-22 m/s plateau; receiver height SHAP .30; defender height not correlated once spacing controlled [PAGE 24]. Biomechanical: thrower limitations, body position, reaction window 0.2s, 2-6s instability; goalkeeper depth .5-1m. Weather: no weather variable in source; so cannot ground weather effect; veto if weather not measured. Need "proof" perhaps logical: if a recommendation depends on unmeasured weather, veto. Need cite source limitations: 360 frames center on thrower; missing area; KNN imputation k=5; 2062 XGBoost events; 3959 qualifying; GRU shot prevalence 35.1% weird vs 14.68; note inconsistency? Need audit gray zone. This is important: paper has internal inconsistencies: XGBoost AUC 0.650 text vs table 0.657; F1 typo 035 vs 0.35; GRU shot prevalence 35.1% whereas overall shot 14.68% of 3959; maybe GRU sequences sampled? Need mention. Also "one-third of sequences" shot [PAGE 13] vs 35.1; goal 8% vs overall 1.82. This is a gray-zone audit. Need mention no betting lines. Need >=1000 words. Desired oververbosity 5, but task requires deep. Need produce about 1800-2500 words maybe. Need exact XML tags. Ensure THINK_TRACE >=400 words. All sections present exact tags. Need no markdown? XML sections okay. Need maybe include citation markers exactly [PAGE N]. Need verbatim quotes in quotes. Need avoid fake equations. We can use formal equations.

Need structure:

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. Need >=400 words. Discuss source: operational definition, counts, XGBoost static vs GRU temporal, counterfactual perturbation, tactical recs. Derivation chain: definition -> outcome label -> imbalance -> XGBoost -> SHAP -> counterfactual -> GRU -> attention -> masking -> tactical synthesis. Audit: sample sizes 3959 vs 2062; AUC discrepancy; F1 typo; GRU prevalence mismatch; 360 blind spots; "clearance positive driver goals" confounded by attacking team? paper says defending team to score attacking goals? Actually if defending team clears, then to score they must clear? Wait GRU global model not team-conditioned? It has attacking-team model. Clearance by defending team could lead to counter? But paper says "for the defending team to score attacking goals themselves they must first clear the ball" confusing. Need note. "duels little shot but high goals" inferred. Need mention 256 events horizon. Need mention no weather. Need mention "no outcome" 77.51 etc. Need maybe compute one in six = 16.5% shot+goal? Actually shot 14.68 includes goals? Labels mutually exclusive Goal overrides shot, so shot+goal=16.5%. They say one in six generate shot or goal. Good. Need derive "around three in four no outcome". Need mention corner won 6.19. Need check "shot probability within 7-15 seconds" vs 15s? XGBoost labels shots within 7-15 seconds? Page 7 says binary label for shots within 7-15 seconds; page 8 says within following 7 seconds. Inconsistency. Mention. Need exact quote. Need mention "AUC-ROC 0.650" vs table 0.657. Precision 0.23 recall 0.76 F1 035. Need mention "0.035"? They wrote 035. Use quote.

Need in SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX with units page citations, breakdown. Include table? Could list equations and variables. Must cite exact [PAGE N] and verbatim quotes. Need use quotes from source. Maybe blockquote? Within XML. Need formal equations.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Discuss Stone et al 2021 16,154 PL throw-ins; Casal et al 2023 2,658 LaLiga; long throw re-emergence 2025-26 11/20 teams attempted; 19 goals previous season highest decade; throw-ins approx 40 per match. Scientific lineage: event data + 360, XGBoost/SHAP, GRU/attention, counterfactual perturbation. Multi-week traps: operational definition >20m + PA end; 15s vs 45s corners; label priority; 7s vs 7-15s; sample reduction to 2062; GRU prevalence; 256 horizon; 360 centering; imputation; no weather. Need "retrocausal genealogy" maybe historical lineage and traps that propagate backward. Cite pages. Need no betting. Could mention "multi-week traps" as analytical traps over project timeline. Need maybe mention "2025-26 opening weekend" source. Good.

Need RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is like tactical decision under pressure. Need explain: crisis habit regression = packing box, tall CBs, aggressive GK; counter-trap = structured zonal spine, directional clearances, second-ball tracker; clock = 2-6s instability window, 6s step-up, 0.2s GK reaction. Need cite. Need maybe formal decision model: defender policy \(\pi(a|s_t)\) under time pressure. But no fake ratios. Need cite "packing the box does not make a team safer" [PAGE 22], "seven or more defenders inside area concede more shots than five or six" [PAGE 22], "additional defender increases simulated rebound persistence by 9-11%" [PAGE 22] (this is a ratio? It's percentage increase, okay source. Not betting. Need perhaps mention it's a modeled percentage, not fake ratio. Good. "tall, burly centre-backs ... lose second phase" [PAGE 24]. "aggressive early claiming ... counterproductive" [PAGE 23]. Need counter-trap and clock.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need define veto logic: recommendation R is valid only if cross-layer evidence does not contradict. Physical: velocity plateau >22 m/s, receiver height effect, defender height null. Biomechanical: thrower physical limitations, body position, reaction time, second-ball. Weather: absent; cannot adjudicate; treat as unverified and veto any weather-dependent claim. Need cite exact. Need perhaps "goalkeeper deeper 0.5-1m extends reaction window by approximately 0.2 seconds" [PAGE 23]. Need "shorter throws enter penalty area on flatter trajectories, reducing goalkeeper claim windows" [PAGE 4]. Need "throws delivered from within 20m almost twice as likely to produce shot as >30m" [PAGE 3]. Need "beyond six defenders diminishing returns" [PAGE 11]. Need "five to six defenders spaced roughly three metres apart" [PAGE 22]. Need "central 6-10m corridor around penalty spot" [PAGE 22]. Need "clear directionally toward sidelines near halfway line" [PAGE 27]. Weather not in source: no variable. So veto: no weather-specific adjustment can be inferred; if weather is severe, ball trajectory/aerial control may change but source doesn't provide coefficients; must default to structural principles. That's a cross-layer veto proof. Need maybe "physical veto: very fast flat trajectories self-neutralise through miscontrol" [PAGE 24]. "ball speed non-linear: threat rises until ~32m or ~20m/s then plateaus" [PAGE 11]. Need exact quote: "threat rises steeply until ~ 32 m or ~20 m/s, then plateaus." [PAGE 11]. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR maybe reinforcement learning with verifiable rewards? We can create scenarios: (1) perturbation of throw origin +5m deeper -> predict shot probability reduction 25-30% [PAGE 22] or every metre ~5% [PAGE 27] (note mismatch: +5m 25-30% vs 5% per metre = 25% for 5m consistent; okay). Verify via XGBoost counterfactual; veto if no decrease or if >? Need thresholds. (2) Defender count increase from six to seven -> predict <1% risk change and 9-11% rebound persistence increase [PAGE 22]; veto if model shows material risk reduction. (3) Non-directional clearance -> predict +0.03-0.05 goal probability [PAGE 23]; veto if directional clearance does not reduce versus central clearance. Could also include goalkeeper depth 0.5-1m deeper -> 0.2s reaction window [PAGE 23]. Need "verifiable" predictions: exact metric, expected sign, source quote. Need maybe include null/negative controls. Need avoid betting. Good.

Need final answer only XML sections. Need no extra preamble maybe. Need ensure total >=1000 words. Likely 2500. Need not overdo too much but deep.

Need be precise with quotes. Let's collect exact quotes:

PAGE 1: "Long throw-ins have re-emerged as a deliberate attacking weapon in elite football." "On the opening weekend of the 2025-26 Premier League season, 11 of 20 teams attempted at least one long throw" "previous season saw 19 goals being scored directly from throw-in situations thus representing the highest total of the last decade." "throw-ins remain the most frequent restart in football (approx. 40 per match)" "Stone, Smith & Barry (2021) analysed all 16,154 Premier League throw-ins in 2018/19" "Casal et al. (2023) examined 2,658 LaLiga throw-ins." Good.

PAGE 2: definition: "Has a recorded pass length exceeding 20m." "Whose end location lies inside the opposition penalty area." "measure outcomes in a 15s window following the throw. However, this timeframe extends to 45s for corners" "Labels are then mutually exclusive and prioritised as follows: 1. Goal (overrides shot) 2. Shot 3. Corner won 4. No outcome" counts. Good.

PAGE 3: "throws delivered from within 20 m of the goal line are almost twice as likely to produce a shot as those originating beyond 30 m." "around three in four long throws yield no tangible outcome within 15s, while around one in six generate a shot or goal." Good.

PAGE 4: "shorter throws enter the penalty area on flatter trajectories, reducing goalkeeper claim windows" "deeper throws travel higher and slower, allowing defensive units more time" Good.

PAGE 5: "long throws sustain these actions for longer. On average, they generate around 10-20 % more total on-ball events within the first 30 seconds." "Corners ... lower absolute numbers of defensive actions like clearances and blocks" Good.

PAGE 7: "XGBoost baseline operated on single-frame geometric snapshots with a binary label for shots within 7-15 seconds" "GRU model utilised ordered event sequences which extended up to 256 events post-throw" Good.

PAGE 8: "estimate the conditional likelihood that a long throw landing inside the opposition penalty area would result in a shot within the following 7 seconds" "2,062 long-throw events were utilised" "K-nearest-neighbour imputation (k = 5)" "reduced to 10 variables" Good.

PAGE 9: "AUC-ROC of 0.650" "Precision = 0.23, Recall = 0.76, and F1 = 035" "Random Oversampling ... raising recall and F₁-scores ... while slightly reducing AUC (from 0.652 to 0.650)." Table AUC 0.657. Good.

PAGE 10: Table: "Distance to penalty spot 0.5" "Pass length 0.39" "Distance of the closest opponent to the penalty spot 0.31" "Receiver height 0.3" "Distance to goal centre 0.29" "Ball speed 0.25" "Minute 0.25" "Angle-to-goal/ Distance ratio 0.21" "Opponents within 10 yds 0.19" "Opponents in box 0.06". Good.

PAGE 11: "threat rises steeply until ~ 32 m or ~20 m/s, then plateaus." "beyond six defenders in the box, additional bodies yield diminishing returns and increase rebound chaos" "Deliveries landing near the penalty spot account for a quarter of shots from long throws" Good.

PAGE 13: "shots occurred in roughly one-third of the sequences, and goals even fewer" Table shot prevalence 35.1, Brier .33, log loss 1.42, ROC-AUC .53, PR-AUC .39; Goal prevalence 8, Brier .0018, log loss .0097, ROC-AUC .9, PR-AUC .028. Good.

PAGE 14: "goal head achieves a deceptively high ROC-AUC owing to extreme class imbalance" "two-stage framework (P(shot) x P(goal | shot))" Good.

PAGE 15: "clearance emerged as the single strongest positive driver of danger for goals." "Incomplete or poorly directed clearances frequently recycled possession into central danger zones" "miscontrol and dispossessed events produced the largest negative effects for shots" "Duels displayed a split pattern..." Good.

PAGE 17: "short-window 2-6s post throw as the “instability phase”" "Win or contain the break after duels" "Clear directionally." Good.

PAGE 18: "shortening sequences to end at natural resolution points like a goalkeeper claim, long clearance, or corner" Good.

PAGE 22: "Throws released within 20 m of the goal line are almost twice as likely to produce a shot as those from over 30m." "Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %" "6-10 m corridor around the penalty spot" "packing the box does not make a team safer" "setups with seven or more defenders inside the area concede more shots than those using five or six." "If a seventh player is added, the predicted risk changes by less than 1 % but this additional defender increases simulated rebound persistence by 9-11%" "five to six defenders, spaced roughly three metres apart" "2-6 second ‘instability window’" Good.

PAGE 23: "A deeper base extends the keeper’s reaction window by approximately 0.2 seconds" "a non-directional clearance increases modelled goal probability by +0.03-0.05" "the same risk jump produced by moving the throw origin roughly 8 m closer to goal" "Up to around 20m/ s, faster throws are statistically more threatening." "beyond this threshold, the danger curve flattens or even dips slightly. At extreme speeds (over 22 m/ s)" "defensive positioning should be oriented towards minimising danger from slower throws rather than overreacting to the faster throws." Good.

PAGE 24: "receiver height exerts a substantial effect on attacking success (|SHAP| ~ 0.30)" "once central spacing and timing are controlled for, defender height no longer correlates with lower concession risk." "tall, burly centre-backs who prioritise standing height over movement tend to lose the second phase even if they win the first." Good.

PAGE 25/26: limitations: "each sequence extends up to 256 events" "360° frames often centre on the thrower, leaving parts of the penalty area outside the visible field." "only around six per cent produced a shot and two per cent resulted in a goal." Wait page 26 says six per cent shot and two per cent goal, conflicting with 14.68/1.82 and GRU 35.1. Mention. Good.

PAGE 27: "every metre deeper that the throw originates from yields roughly a 5% reduction in shot probability." "two-to-six-second window" "five to six defenders" "Clear directionally toward the sidelines near the halfway line not vertically or laterally." Good.

Need maybe mention "AUC-ROC ~0.53" for shot "decent capacity" contradiction? It says "decent capacity for ranking (ROC-AUC ~ 0.53; PR-AUC ~0.39), which confirms..." That's weak, but quote. Need audit.

Need avoid saying "odds". "probabilities" okay. "AUC" okay. "Brier" okay. No betting lines.

Need maybe use "source pages" exact. We can cite [PAGE 10] after quotes. Need no fake ratios. Equations are not fake; formal. Use SI units.

Need maybe in THINK_TRACE include derivation: Let \(T_i\) be throw event. \(L_i>20\), endpoint \(E_i\in A_{PA}\). \(H=15s\). \(Y_i\) categorical. Because \(Y_i\) priority, \(P(\text{goal})+P(\text{shot})+P(\text{corner})+P(\text{no outcome})=1\). Counts sum 3959? 3061+581=3642; +245=3887; +72=3959 yes. Percentages sum 100.20? 77.51+14.68+6.19+1.82=100.20 due rounding. Good. Audit. XGBoost uses 2062 due positional data. GRU uses same multi-league dataset? It says same dataset, but shot prevalence 35.1. Inconsistency. Need mention.

Need maybe "source operators" include "token-masking with IDF-style weighting" [PAGE 15]. Good.

Need "Retrocausal genealogy" include lineage from Stone/Casal to this. Multi-week traps: if analysts use 15s labels but XGBoost 7s, or 7-15s; if they merge top/bottom touchline justified by symmetry [PAGE 3-5]. If they use "no outcome" 77.51. If they treat clearances as safe (contrary). Good.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Could define defender mental model: under crisis, regression to habits: pack box, tall CBs, GK aggressive. Counter-trap: pre-scripted roles. Clock: 2-6s. Need maybe "recursive" because attacker observes defender; defender observes attacker; model observes sequence. But keep concise. Need cite.

Need "Cross-layer veto adjudication": Need maybe table-like bullets. State "Veto rule: if a claim requires a variable absent from source or contradicts measured layer, mark invalid." Physical: ball speed plateau; receiver height; defender height. Biomechanical: thrower limitations, body position; GK depth. Weather: absent; no evidence; veto. Good.

Need "RLVR counterfactual vetoes": 3 scenarios. Need use "verifiable" predictions with exact source thresholds. Maybe:

1. Origin-depth counterfactual: change \(d_o\) by +5 m deeper. Predicted \(\Delta P(S)\in[-30\%,-25\%]\) relative to baseline; source quote [PAGE 22]. Verification: recompute XGBoost perturbation over test set; veto if point estimate not negative or outside interval; also check per-metre ~5% [PAGE 27]. Note mismatch if interval. Good.

2. Seventh defender: increase \(N_{box}\) 6->7. Predicted absolute risk change <1% and rebound persistence +9-11% [PAGE 22]. Veto if model shows >1% risk reduction or no rebound increase. Need "simulated rebound persistence" from GRU+XGBoost combined. Good.

3. Clearance direction: replace central/vertical clearance with touchline-near-halfway directional clearance. Predicted reduction in goal probability of 0.03-0.05 (absolute) from reversing non-directional clearance penalty [PAGE 23]. Veto if directional clearance not lower by that magnitude or if clearance event remains positive driver [PAGE 15]. Need maybe "goal probability absolute". Good.

Could also include GK depth but only 3. Need mention "RLVR" as reinforcement learning with verifiable rewards? We can define: reward checks against held-out counterfactual metrics. But no need maybe.

Need final answer in XML tags only. Ensure no "odds" word? The instruction says never mention spreads, totals, moneylines, or odds. We can avoid "odds" entirely. We can mention "probability". Avoid "betting". Good.

Need maybe mention "moneylines" no. Fine.

Need answer length. Let's draft carefully.

Need maybe include equations with units and assumptions. In SOURCE section, use LaTeX. Need maybe "Assumption A1: labels mutually exclusive; A2: bilateral symmetry; A3: imputation k=5; A4: XGBoost additive; A5: GRU sequence causal order." Breakdown regimes: lift denominator zero; log loss p=0/1; class imbalance; sequence horizon; 360 blind spots; no weather. Good.

Need maybe "Source operators" phrase. Could include "Operators" as predicates. Fine.

Need use exact quotes with [PAGE N]. Need quote "F1 = 035" exactly. Need "AUC-ROC of 0.650" vs table "AUC-ROC 0.657". Good.

Need maybe "precision 0.23" quote says "Around one in four throws predicted as ‘dangerous’ did in fact lead to a shot." That's precision. Good.

Need "mean |SHAP| ~ 0.50" and "0.06". Good.

Need "receiver height |SHAP| ~ 0.30" [PAGE 24] vs table 0.3. Good.

Need "0.2 seconds" [PAGE 23]. Good.

Need "5% reduction per metre" [PAGE 27]. Good.

Need "25–30%" [PAGE 22]. Good.

Need "10-20 % more total on-ball events" [PAGE 5]. Good.

Need "40 per match" [PAGE 1]. Good.

Need "19 goals" [PAGE 1]. Good.

Need "11 of 20 teams" [PAGE 1]. Good.

Need "16,154" and "2,658" [PAGE 1]. Good.

Need "3,959" [PAGE 2]. Good.

Need "2,062" [PAGE 8]. Good.

Need "256 events" [PAGE 7/12/25]. Good.

Need "15s window" and "45s for corners" [PAGE 2]. Good.

Need "7-15 seconds" vs "following 7 seconds" [PAGE 7/8]. Good.

Need "35.1" and "8" [PAGE 13]. Good.

Need "six per cent shot and two per cent goal" [PAGE 26]. Good.

Need "one in six" [PAGE 3]. Good.

Need "three in four no outcome" [PAGE 3]. Good.

Need maybe "corner won 6.19%" [PAGE 2]. Good.

Need "no outcome 77.51%" [PAGE 2]. Good.

Need "goal 1.82%" [PAGE 2]. Good.

Need "shot 14.68%" [PAGE 2]. Good.

Need "AUC-ROC 0.657" table [PAGE 9]. Good.

Need "GRU shot ROC-AUC 0.53 PR-AUC 0.39" [PAGE 13]. Good.

Need "goal ROC-AUC 0.9 PR-AUC 0.028" [PAGE 13]. Good.

Need "Brier .33" [PAGE 13]. Good.

Need "log loss 1.42" [PAGE 13]. Good.

Need "clearance strongest positive driver for goals" [PAGE 15]. Good.

Need "miscontrol and dispossessed largest negative effects for shots" [PAGE 15]. Good.

Need "duels split pattern" [PAGE 15]. Good.

Need "2-6s instability phase" [PAGE 17/22]. Good.

Need "six seconds" [PAGE 17/22/23]. Good.

Need "five to six defenders, spaced roughly three metres apart" [PAGE 22]. Good.

Need "central 6-10 m corridor" [PAGE 22]. Good.

Need "front-post anchor on six-yard line" [PAGE 22]. Good.

Need "two screeners straddling penalty spot" [PAGE 22]. Good.

Need "two rebound sweepers just outside" [PAGE 22]. Good.

Need "20-25% reduction" [PAGE 22]. Good.

Need "less than 10% dangerous sequences" for flick-ons [PAGE 22]. Good.

Need "seventh player <1% risk change; 9-11% rebound persistence" [PAGE 22]. Good.

Need "non-directional clearance +0.03-0.05 goal probability" [PAGE 23]. Good.

Need "same risk jump moving origin 8m closer" [PAGE 23]. Good.

Need "0.5-1 m deeper" [PAGE 23]. Good.

Need "0.2 seconds" [PAGE 23]. Good.

Need "20 m/s" [PAGE 11/23]. Good.

Need "32 m" [PAGE 11]. Good.

Need "22 m/s" [PAGE 23]. Good.

Need "receiver height |SHAP| ~0.30" [PAGE 24]. Good.

Need "defender height no longer correlates" [PAGE 24]. Good.

Need "tall burly CBs lose second phase" [PAGE 24]. Good.

Need "goalkeeper aggressive early claiming counterproductive" [PAGE 23]. Good.

Need "weather" no quote. We can state "No weather variable appears in the listed feature vector" [PAGE 8-10] and "360 frames..." [PAGE 26]. This is a proof of absence? Need phrase "The source provides no weather operator; any weather-specific coefficient would be an invention and is vetoed." Good.

Need maybe "cross-layer veto proof" not actual proof but adjudication. Fine.

Need no "odds" word. Avoid "at odds". Use "tension". Good.

Need maybe "betting lines" no. Fine.

Need produce final with XML tags. Need not include markdown headings outside. We can include LaTeX inside. Need ensure XML valid? Ampersands? LaTeX uses &, need escape? XML tags containing & maybe not valid. But output not parsed? To be safe, use \text{ and } no ampersand? In equations, avoid `&` alignment. Use `\begin{aligned}` maybe has `&` which could be problematic. Better use separate equations without alignment ampersands. Use `\begin{cases}` no ampersand. Avoid raw `&`. Use `\le`, `\ge`. Avoid `<` raw? In XML text, `<` must be escaped. But inside text, equations with `<` could break XML. We can use `\lt`? LaTeX doesn't. Use `\textless`? Better use `\leq` and `\geq` instead of `<`/`>`. But source quotes include ">20m" and "<20 m" with `<` and `>`. In XML text, `<` is problematic. Need escape as `&lt;` and `&gt;`? But then source quote not verbatim? Could use `\lt`? Hmm. The instructions ask exact XML sections. We can include quotes with escaped entities? For XML validity, use `&lt;` for `<` and `&gt;` for `>`. But verbatim quote would show entities not exact. Alternatively wrap quotes in CDATA? But within XML, CDATA okay. But we can't put CDATA around entire section? We can use `&lt;` but exact quote maybe less important. We can avoid raw `<`/`>` in quotes by using words? But they require verbatim quotes. We can quote exact phrases without symbols: "Has a recorded pass length exceeding 20m." Good avoids >. "Whose end location lies inside the opposition penalty area." Good. "throws delivered from within 20 m of the goal line are almost twice as likely to produce a shot as those originating beyond 30 m." Avoid < >. "setups with seven or more defenders" avoids. "over 22 m/ s" uses over. Good. For equations, use `\leq` instead of `<`? LaTeX `\leq` no raw. Use `\in`. Good. For `P(S=1|X)` no `<`. Good. For `0<\hat p<1` would raw `<`; use `0 \lt \hat p \lt 1` but `\lt` not standard? Actually LaTeX has `\lt`? Not standard. Use `0 \leq \hat p \leq 1` and "strictly interior" text. For `d>20` use `d \geq 20`? But source says exceeding 20m. We can define \(d_i \gt 20\)? `\gt` is not standard either? In LaTeX, `\gt` maybe not. Use `d_i \in (20,\infty)` no raw. Good. Use `E_i \in A_{\mathrm{PA}}`. Good. Use `\pi(a|s_t)` no. Use `\hat p / \bar p` no. Use `\sum`. Good. Avoid raw `&`. Good.

Need maybe "F1 = 035" exact. Fine.

Need "AUC-ROC ~0.53" no.

Need maybe "0.03-0.05" use hyphen. Fine.

Need "9-11%" fine.

Need "25–30 %" fine.

Need "10-20 %" fine.

Need "0.5-1 m" fine.

Need "2-6s" fine.

Need "6-10 m" fine.

Need "20-25 %" fine.

Need "5 %" fine.

Need "1 %" fine.

Need maybe "one-third" etc.

Need "RLVR" maybe define as "reinforcement-learning-with-verifiable-rewards-style audit" but not necessary. Could write "RLVR-style veto scenarios" with verifiable metric. Good.

Need ensure THINK_TRACE >=400 words. I'll write ~600. Total ~2500. Good.

Let's draft final. Need maybe use bullets. XML sections with text. Need no extra outside. Ensure all tags exact. Need maybe no empty. Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s logical chain begins with an operational act, not a narrative claim: a long throw is defined by two conditions, “Has a recorded pass length exceeding 20m” and “Whose end location lies inside the opposition penalty area” [PAGE 2]. That definition creates the sample universe: across five competition-seasons the authors identify “3,959 qualifying long throws,” with “No outcome: 3,061 (77.51%),” “Shot: 581 (14.68%),” “Corner won: 245 (6.19%),” and “Goal: 72 (1.82%)” [PAGE 2]. The outcome operator is a 15-second post-throw window, extended to 45 seconds for corners, with mutually exclusive priority: “Goal (overrides shot),” then “Shot,” then “Corner won,” then “No outcome” [PAGE 2]. This is the first multi-hop move: the label is not simply “shot” but a priority-classified terminal state. The paper then reports that “around three in four long throws yield no tangible outcome within 15s, while around one in six generate a shot or goal” [PAGE 3]. That arithmetic is coherent if shot and goal are mutually exclusive and goals override shots: \(P(\text{shot}) + P(\text{goal}) \approx 14.68\% + 1.82\% = 16.50\%\), or about one in six.

The second hop is spatial. The authors claim “throws delivered from within 20 m of the goal line are almost twice as likely to produce a shot as those originating beyond 30 m” [PAGE 3], and they interpret the mechanism through trajectory and body position: “shorter throws enter the penalty area on flatter trajectories, reducing goalkeeper claim windows” while “deeper throws travel higher and slower, allowing defensive units more time to recover shape” [PAGE 4]. This becomes the prior for the XGBoost model: “distance to penalty spot” is rank 1 with “Mean |SHAP| Value 0.5,” and “Pass length” is rank 2 at “0.39” [PAGE 10]. The static model’s label is, however, inconsistently stated: page 7 says “binary label for shots within 7-15 seconds,” while page 8 says “a shot within the following 7 seconds” [PAGE 7; PAGE 8]. That discrepancy is material because it changes the event horizon and the base rate.

The third hop is temporal. The GRU is trained on “ordered event sequences which extended up to 256 events post-throw” [PAGE 7], and its attention layer “looked back” over the sequence to highlight events that either regained or lost control [PAGE 12]. The authors report token-masking results: “clearance emerged as the single strongest positive driver of danger for goals,” while “miscontrol and dispossessed events produced the largest negative effects for shots” [PAGE 15]. This overturns the habit that clearance equals safety. The fourth hop is counterfactual: XGBoost perturbations alter one feature by plus or minus one standard deviation and recompute predicted concession probability [PAGE 18]. The synthesis claims “Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %” [PAGE 22], while the conclusion gives “roughly a 5% reduction in shot probability” per metre [PAGE 27]. Those are broadly consistent for 5 m, but the paper reports them in different places and should be audited for exact perturbation scale.

Gray-zone audit: the XGBoost test metrics are internally inconsistent: text says “AUC-ROC of 0.650” and “F1 = 035” [PAGE 9], while Table 4.2 gives “AUC-ROC 0.657” and “F1-score 0.35” [PAGE 9]. The GRU base rates also diverge sharply from the descriptive sample: GRU table reports shot prevalence “35.1” and goal prevalence “8” [PAGE 13], but the overall long-throw sample has shot 14.68% and goal 1.82% [PAGE 2]; the limitations section later says “only around six per cent produced a shot and two per cent resulted in a goal” [PAGE 26]. These are not cosmetic: they mean the GRU sequence partition is not directly comparable to the 3,959-event descriptive universe, likely because of sequence construction, filtering, or class definition. Also, XGBoost uses only “2,062 long-throw events” after dropping inadequate positional data [PAGE 8], so the static and temporal models do not train on identical empirical populations. Finally, “360° frames often centre on the thrower, leaving parts of the penalty area outside the visible field” [PAGE 26], which weakens defensive-density measurement. No weather variable appears in the final ten predictors [PAGE 8-10], so any weather-specific tactical coefficient would be an invention. The correct inference is therefore bounded: the paper supports structural and temporal priors, not universal laws.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Operational set and label operator.** Let throw event \(i\) have pass length \(d_i\) in metres and end location \(E_i\) in the opposition penalty area \(A_{\mathrm{PA}}\). The source defines the qualifying set as
\[
\mathcal{L}=\{i:\ d_i\in(20,\infty)\ \mathrm{m},\ E_i\in A_{\mathrm{PA}}\}.
\]
This is directly grounded in “Has a recorded pass length exceeding 20m” and “Whose end location lies inside the opposition penalty area” [PAGE 2]. The outcome operator is a priority map over horizon \(H=15\,\mathrm{s}\), with corners using \(H_c=45\,\mathrm{s}\):
\[
Y_i=\operatorname{priority}\{G_i,S_i,C_i,N_i\},
\]
where \(G_i\) is goal, \(S_i\) is shot, \(C_i\) is corner won, \(N_i\) is no outcome, and the priority order is “Goal (overrides shot),” “Shot,” “Corner won,” “No outcome” [PAGE 2]. Assumption: the labels are mutually exclusive. Breakdown regime: if a shot and a goal both occur, the goal overrides the shot; any model trained on non-prioritised multi-label data would change the base rate.

**Descriptive base rates.** From [PAGE 2], the reported counts imply
\[
\hat P(N)=3061/3959=0.7751,\quad
\hat P(S)=581/3959=0.1468,
\]
\[
\hat P(C)=245/3959=0.0619,\quad
\hat P(G)=72/3959=0.0182.
\]
The source states “No outcome: 3,061 (77.51%),” “Shot: 581 (14.68%),” “Corner won: 245 (6.19%),” and “Goal: 72 (1.82%)” [PAGE 2]. The rounded percentages sum to 100.20%, which is ordinary rounding, not a substantive contradiction.

**XGBoost additive risk model.** The source describes “Extreme Gradient Boosting (XGBoost), a tree-based ensemble method that builds a sequence of shallow decision trees” [PAGE 7]. A formal additive representation is
\[
\hat y_i=\sum_{k=1}^{K}f_k(X_i),\qquad f_k\in\mathcal{F},
\]
with \(X_i\) the ten interpretable predictors listed in Table 4.1 [PAGE 8]. For a binary shot label, the conditional probability is
\[
\hat p_i=P(S_i=1\mid X_i)=\sigma(\hat y_i)=\frac{1}{1+\exp(-\hat y_i)}.
\]
Units: \(X_i\) contains metres, seconds, metres per second, player height/weight/age, and match minute; \(\hat p_i\) and \(\hat y_i\) are dimensionless model quantities. The source’s training settings are “1,000 boosting rounds, a learning rate of 0.015, and a maximum tree depth of 4” [PAGE 9]. Assumption: the additive-tree representation is appropriate and the label horizon is fixed. Breakdown regime: if the label changes from “following 7 seconds” [PAGE 8] to “7-15 seconds” [PAGE 7], the fitted function is not the same target; if class imbalance is extreme, AUC-PR and calibration matter more than raw accuracy.

**SHAP operator.** The paper uses “Global SHAP values” to quantify “each feature’s average marginal contribution to prediction” [PAGE 10]. The standard additive attribution is
\[
\phi_j=\sum_{S\subseteq F\setminus\{j\}}
\frac{|S|!\,(|F|-|S|-1)!}{|F|!}
\left[g(S\cup\{j\})-g(S)\right],
\]
where \(F\) is the feature set and \(g\) is the model output. Units: if \(g\) is the log-odds margin, \(\phi_j\) is in log-odds; if \(g\) is probability, it is in probability units. The source does not specify which scale, so the reported “Mean |SHAP| Value 0.5” for “Distance to penalty spot,” “0.39” for “Pass length,” and “0.06” for “Opponents in box” should be treated as model-output units, not physical units [PAGE 10]. Breakdown regime: SHAP explanations are local-additive and do not by themselves establish causation; counterfactual perturbation is the stronger operator.

**GRU and attention.** The source uses “a Gated Recurrent Unit (GRU) network” with “an additive attention mechanism” [PAGE 12]. A formal GRU update is
\[
z_t=\sigma(W_z x_t+U_z h_{t-1}+b_z),
\]
\[
r_t=\sigma(W_r x_t+U_r h_{t-1}+b_r),
\]
\[
\tilde h_t=\tanh\!\left(W_h x_t+U_h(r_t\odot h_{t-1})+b_h\right),
\]
\[
h_t=(1-z_t)\odot h_{t-1}+z_t\odot \tilde h_t,
\]
where \(x_t\) is the event embedding at timestep \(t\), \(h_t\) is the hidden state, and \(\odot\) is elementwise multiplication. Attention is
\[
\alpha_t=\operatorname{softmax}\!\left(v^\top\tanh(W h_t)\right),\qquad
c=\sum_t \alpha_t h_t.
\]
The two heads are
\[
\hat p^{\mathrm{shot}}=\sigma(w_s^\top c+b_s),\qquad
\hat p^{\mathrm{goal}}=\sigma(w_g^\top c+b_g).
\]
The source states “Both heads were trained jointly using binary cross-entropy” [PAGE 12], so
\[
\mathcal{L}=-\sum_i\left[y_i\log\hat p_i+(1-y_i)\log(1-\hat p_i)\right].
\]
Units: probabilities are dimensionless; \(h_t\), \(c\), and attention weights are dimensionless latent quantities. Breakdown regimes: logistic loss is singular if \(\hat p_i=0\) for \(y_i=1\) or \(\hat p_i=1\) for \(y_i=0\), requiring clipping or stable implementations; the source’s 256-event horizon “frequently exceeds the meaningful lifespan of a long-throw phase” [PAGE 25], so temporal attribution can blur across separate possessions.

**Lift operator.** The paper’s diagnostic script defines lift as “predicted probability divided by the training baseline” [PAGE 16-17]. Formally,
\[
L_i=\frac{\hat p_i}{\bar p_{\mathrm{train}}}.
\]
The source illustrates: “if the model returns 0.28 for a shot and the baseline is 0.14, that means the sequence is twice as likely as the average sequence to return a shot” [PAGE 16-17]. Breakdown regime: if \(\bar p_{\mathrm{train}}\to 0\), \(L_i\) is singular; the source says the script “guards against zero baselines” [PAGE 17]. Even with a guard, tiny baselines produce unstable lifts and should not be interpreted as calibrated physical effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. The introduction places long throws in a revival narrative: “Long throw-ins have re-emerged as a deliberate attacking weapon in elite football,” and “On the opening weekend of the 2025-26 Premier League season, 11 of 20 teams attempted at least one long throw” [PAGE 1]. It also gives the historical yield: “the previous season saw 19 goals being scored directly from throw-in situations thus representing the highest total of the last decade” [PAGE 1]. The restart-frequency baseline is “approx. 40 per match” [PAGE 1]. Prior literature is mainly attacking: Stone, Smith & Barry “analysed all 16,154 Premier League throw-ins in 2018/19” and found backward or lateral throws associated with “higher first-contact success and possession retention,” while Casal et al. examined “2,658 LaLiga throw-ins” and identified “duration, pressure, distance, and zone” as key indicators [PAGE 1]. This paper’s retrocausal move is to invert the lens: from attacking retention to defensive concession risk, using Hudl StatsBomb event and 360 data [PAGE 1-2].

The methodological genealogy runs from static interpretability to temporal sequence learning. XGBoost is used to isolate “the geometric and physical factors most associated with shot creation,” while the GRU captures “the dynamic evolution of post-throw events” [PAGE 2]. The paper then adds counterfactual perturbation: it tests “how the likelihood of conceding danger would change if specific spatial or behavioural variables were altered” [PAGE 18]. This lineage matters because it explains why the paper’s claims are layered: descriptive base rates, static SHAP rankings, temporal masking, and perturbation curves. Multi-week analytical traps emerge from that layering. First, the operational window changes: 15 s for long throws, 45 s for corners [PAGE 2]; XGBoost uses “7-15 seconds” on page 7 but “following 7 seconds” on page 8 [PAGE 7; PAGE 8]. An analyst who fixes the window too late will mix targets. Second, sample reduction: 3,959 qualifying throws become “2,062 long-throw events” for XGBoost after positional filtering [PAGE 8], so descriptive percentages and model probabilities are not the same population. Third, touchline merging is justified by symmetry: Figures 2.1–2.4 show “almost perfect bilateral symmetry” and similar “no outcome” rates [PAGE 3-5]; if symmetry fails in a new league, the merged model is biased. Fourth, imputation: missing height, weight, or age are repaired via “K-nearest-neighbour imputation (k = 5)” [PAGE 8]; if missingness is correlated with defensive role, imputation can manufacture physical match-up signal. Fifth, model prevalence drift: GRU reports shot prevalence “35.1” and goal “8” [PAGE 13], while the full sample is 14.68% and 1.82% [PAGE 2], and the limitations later say “six per cent produced a shot and two per cent resulted in a goal” [PAGE 26]. That is a major retrocausal trap: later tactical claims may inherit a sequence-level base rate that is not the throw-level base rate. Sixth, the 256-event horizon [PAGE 25] can treat later clearances and rebounds as the same possession, blurring the causal boundary. Seventh, 360 coverage is partial: frames “often centre on the thrower, leaving parts of the penalty area outside the visible field” [PAGE 26]. Eighth, there is no weather operator in the ten predictors [PAGE 8-10], so weather claims would be retrofitted, not tested. These traps do not invalidate the framework; they define its admissible scope.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The defensive decision problem is recursive: defenders form a model of the attacker’s target, the attacker forms a model of the defender’s positioning, and both update through the post-throw sequence. The paper’s “crisis habit regression” is the reversion to familiar but maladaptive routines under chaos: pack the box, rely on tall centre-backs, and let the goalkeeper attack the initial ball. The source directly challenges this: “packing the box does not make a team safer,” and “setups with seven or more defenders inside the area concede more shots than those using five or six” [PAGE 22]. It quantifies the habit trap: “If a seventh player is added, the predicted risk changes by less than 1 % but this additional defender increases simulated rebound persistence by 9-11%” [PAGE 22]. The height habit is also challenged: “receiver height exerts a substantial effect on attacking success (|SHAP| ~ 0.30),” but “once central spacing and timing are controlled for, defender height no longer correlates with lower concession risk” [PAGE 24]. And “tall, burly centre-backs who prioritise standing height over movement tend to lose the second phase even if they win the first” [PAGE 24]. The goalkeeper habit is similarly reversed: “aggressive early claiming which accompanies the popular phrase ‘commanding the box’ proves counterproductive for keepers in long-throw situations” [PAGE 23].

The counter-trap is a pre-scripted spatial and temporal policy. The source recommends “five to six defenders, spaced roughly three metres apart around the expected landing zone” [PAGE 22], with a central spine: “two screeners straddling the penalty spot, a front-post anchor on the six-yard line, and two rebound sweepers positioned just outside” [PAGE 22]. It also recommends “Win or contain the break after duels” and “Clear directionally” [PAGE 17]. The counterfactual target is explicit: this structure “would likely reduce shot risk by as much as 20-25 % across competitions” [PAGE 22]. The clock is the decisive variable. The GRU identifies “the short-window 2-6s post throw as the ‘instability phase’” [PAGE 17], and the synthesis repeats the “2-6 second ‘instability window’ immediately after first contact” [PAGE 22]. The source says lines should “step up vertically for approximately six seconds before re-expanding width” [PAGE 23]. Goalkeeper depth is part of the clock: “starting 0.5-1 m deeper” extends “the keeper’s reaction window by approximately 0.2 seconds” [PAGE 23]. This is a recursive policy: the defender’s first action is not merely to win the first ball but to preserve the second-ball geometry, because the attacker’s next action is conditioned on the defender’s overcommitment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Veto rule.** A tactical claim is admissible only if it is consistent with the physical, biomechanical, and observational layers actually measured. If a claim requires a variable absent from the source, it is vetoed as an invention rather than an inference.

**Physical layer.** The ball-speed evidence is non-linear: “threat rises steeply until ~ 32 m or ~20 m/s, then plateaus” [PAGE 11]. The synthesis adds “Up to around 20m/ s, faster throws are statistically more threatening,” but “beyond this threshold, the danger curve flattens or even dips slightly. At extreme speeds (over 22 m/ s), both attackers and defenders lose fine control” [PAGE 23]. Therefore a recommendation to “overreact to very fast throws” is vetoed by the source’s own plateau and miscontrol mechanism. The admissible rule is: defend compactly against flat, medium-velocity deliveries that enable controlled flick-ons and rebounds, while recognizing that very-fast trajectories may self-neutralise through miscontrol [PAGE 23-24].

**Biomechanical layer.** The thrower’s physical limits shape the landing distribution: long-throw entry points cluster “between the six-yard line and penalty spot,” indicating “the physical limitations of throwers” [PAGE 3]. Shorter throws arrive on “flatter trajectories, reducing goalkeeper claim windows,” while deeper throws are “higher and slower” [PAGE 4]. The receiver-height effect is real at the attacking layer, with “|SHAP| ~ 0.30” [PAGE 24], but defender height is not a safe proxy for defensive control once spacing and timing are controlled. That vetoes a pure “tall defender” selection rule. The goalkeeper depth rule is supported by a reaction-time mechanism: “A deeper base extends the keeper’s reaction window by approximately 0.2 seconds” [PAGE 23]. The 2-6 s instability window and the six-second vertical step-up are temporal-biomechanical constraints, not stylistic preferences [PAGE 17; PAGE 23].

**Weather layer.** The source does not include weather, wind, rain, temperature, or pitch-state variables in the final ten predictors [PAGE 8-10], and it does not report a weather interaction. The 360 data limitation is spatial, not meteorological: frames “often centre on the thrower, leaving parts of the penalty area outside the visible field” [PAGE 26]. Therefore any claim such as “in wind, shorten the throw” or “in rain, pack the box” is cross-layer vetoed because the source provides no coefficient, no measurement, and no validation. The correct adjudication is to retain the structural principles—central corridor protection, five-to-six defender spacing, directional clearances, and second-ball tracking—and to mark weather-specific adjustments as unverified hypotheses requiring new data.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: origin-depth perturbation.** Intervention: move the throw origin 5 m deeper while holding all other features fixed. Source prediction: “Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %” [PAGE 22], with the conclusion’s per-metre form “roughly a 5% reduction in shot probability” [PAGE 27]. Verifiable check: recompute the XGBoost perturbation over the held-out set and require a negative relative change in predicted shot probability, with the 5 m point estimate inside the reported 25–30% band. Veto prediction: if the model outputs a non-negative change, or a magnitude outside the band after replicating the perturbation scale, the tactical claim is not reproducible and should be vetoed. Secondary check: the source’s own label-horizon inconsistency (“7-15 seconds” vs “following 7 seconds”) must be resolved before the metric is compared [PAGE 7; PAGE 8].

**Scenario 2: seventh defender.** Intervention: increase box defenders from six to seven at the expected landing zone. Source prediction: “If a seventh player is added, the predicted risk changes by less than 1 % but this additional defender increases simulated rebound persistence by 9-11%” [PAGE 22]. Verifiable check: compute the absolute change in predicted shot probability and the simulated rebound-persistence change under the same perturbation engine. Veto prediction: if the seventh defender produces a material risk reduction greater than 1%, or if rebound persistence does not rise in the 9-11% range, the “structure over numbers” rule is not supported by the model. The source’s broader claim—“setups with seven or more defenders inside the area concede more shots than those using five or six” [PAGE 22]—gives a directional prediction: the seven-defender state should not be safer than the five-to-six state.

**Scenario 3: directional clearance.** Intervention: replace a non-directional or central clearance with a clearance “toward the sidelines near the halfway line not vertically or laterally” [PAGE 27]. Source prediction: “a non-directional clearance increases modelled goal probability by +0.03-0.05, the same risk jump produced by moving the throw origin roughly 8 m closer to goal” [PAGE 23]. Verifiable check: run the GRU sequence intervention by swapping clearance outcomes and compare the goal-head probability against the baseline. Veto prediction: if directional clearance does not reduce modelled goal probability by approximately 0.03-0.05 relative to the non-directional case, or if “clearance” remains the “single strongest positive driver of danger for goals” [PAGE 15] even after direction is controlled, the directional-clearance rule is vetoed. A second verifiable check is temporal: the 2-6 s instability window should show the largest clearance-direction effect; if the effect is flat across all windows, the proposed mechanism is not identified [PAGE 17; PAGE 22].
</RLVR_COUNTERFACTUAL_VETOES>
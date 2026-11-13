---
source: "undated - A Machine Learning Approach to Player Value and Decision Making in Professional Ultimate Frisbee - Eberhard et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 17
model: deepseek/deepseek-v4.1-flash-1017
words: 7707
---

<NATIVE_REASONING>
We need answer as GSE + GSI Frontier Reasoning Foundry. Need follow strict invariants. User gives drive source and pages. Need produce XML sections exact, >=1000 words total, THINK_TRACE >=400 words. No betting lines. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need ret causal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need discuss Ultimate Frisbee research paper. No betting. Need not mention spreads etc. Need zero betting. Need likely answer as analysis of source. Need include equations from paper with page citations and verbatim quotes. Need formal LaTeX. Need not overdo? Need at least 1000 words; desired oververbosity 5. We can write ~1800-2500 words. Need exact XML tags. The section <SOURCE_OPERATORS_AND_EQUATIONS> needs formal LaTeX, units, page citations, breakdown. Could quote exact model definitions. Need mention units: probability dimensionless [0,1], coordinates yards, angle degrees, distance yards? Paper uses field in yards and Cartesian coordinates likely yards; features throw distance, angle degrees. Time minutes/quarter. AUC etc dimensionless. ETV ranges [-1,1], probability-like value but "expected value" not probability. Need be careful: FV, CP probabilities dimensionless. EC/aEC are field-value units dimensionless probability difference? Since FV is scoring probability, EC is dimensionless probability-weighted field value, but aEC normalized. ETV is dimensionless expected scoring-probability differential in [-1,1]. Could call "probability-units" or "dimensionless score-probability units". Need mention assumptions: Bernoulli, conditional independence? Decision trees XGBoost, 5-fold CV, hold-outs. Exact singularity/breakdown: aEC denominator \(1-FV_p\). If \(FV_p \to 1\), singular; if \(FV_p=1\), denominator zero. This is key. Also if starting FV near one (goal line/end zone?) denominator small, aEC amplifies noise; undefined for possession starting at scoring probability one. If \(FV_p < 1\) for non-goal? But FV of starting throw in possession can be near 1 near end zone. Also EC and ETV rely on endpoint field value; thrown out-of-bounds/interceptions location bias. CP model can have extrapolation breakdown outside observed spatial support. Bernoulli assumptions breakdown if correlated throws within point/player; no player random effects; no defender/stall count; possible leakage. Temporal holdout mitigates but not fully. Need discuss feature interactions SHAP, not causal. Need mention "player fatigue" inferred from time remaining but no direct biometrics, so cross-layer veto: cannot infer biomechanical fatigue; time left is proxy confounded with score/possession/strategy. Need physical/biomechanical/weather veto proof: weather not in dataset; wind/rain affect disc flight, grip, throw angles, completion; field dimensions and league rules. Need no weather claims unless from source? Source lacks weather. We can say no weather variables, so weather-based veto cannot be proven from source; any claim requiring wind/rain/precipitation is unsupported. Physical/biomechanical: no defender locations, stall count, thrower velocity, arm load, fatigue biomarkers; the paper explicitly says future work includes stall count, teammate/defender locations [PAGE 16]. Need cite. Cross-layer veto: reject claims about biomechanical fatigue from SHAP time-left because it is not measured; time remaining could be game-state strategy. Need exact quote from page 12: "plots examining time remaining in the quarter reveal the effect of player fatigue, with a marked decrease in ETV as time elapses." We can cite and audit: source asserts effect of player fatigue but no direct fatigue measure; cross-layer veto requires direct biomechanical/physiological evidence. Also weather veto: dataset no weather; no veto proof possible; claims about wind/rain are not licensed. Need "physical/biomechanical/weather veto proof" perhaps state three vetoes: physical (field dimensions), biomechanical (fatigue), weather (not captured). Need proof with equations? Could use formal veto predicates: Accept claim only if variable \(W\) measured; dataset vector \(X\) excludes weather \(W\), defender \(D\), stall \(S\), biomechanical load \(B\). The model's conditional probability is \(P(Y|X_{\text{obs}})\), not \(P(Y|do(X))\). A claim that \(x\) causes \(y\) requires causal identification, not SHAP. Need maybe formal: \(P(Y|X_{\text{obs}}, U)\) with unobserved \(U\); omitted variable bias. Cross-layer: If unobserved \(U\) affects both feature \(X\) and output \(Y\), SHAP association not causal. For fatigue, \(B\) unobserved; time \(T\) proxy; \(P(Y|T)=\sum_B P(Y|T,B)P(B|T)\), cannot isolate \(B\). Weather \(W\): \(P(Y|X)=\sum_W P(Y|X,W)P(W|X)\); if \(W\) not recorded, model averages over historical weather distribution and cannot support game-specific weather predictions. Biomechanical: no force/load units; any "force/fatigue ratio" would be toy and prohibited. Need include exact singularity/breakdown regimes. Good.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need mention lineage: Weiss & Childers 2013 maps, 2014 poster; Carter & Machol 1971 operations research football; Yurko et al. 2019 nflWAR/CPOE; Franks et al. 2016 meta-analytics; ElHabr 2023 soccer meta-analytics; UFA data 2021-2024; 327,179 throws 604 games. Multi-week traps: small-sample overreaction, volunteer-tracked amateur data, location bias, missing defenders/stall count, league differences, using ETV as player quality despite independence analysis says ETV reflects volume. Need "retrocausal genealogy" maybe how current metrics trace back. Need cite pages. Need mention exact quotes: "327,179 recorded throws across 604 games" [PAGE 2]; "three hold-out sets: a player-based set of 50 throwers with 200+ throws each, a temporal set from the latest 10 games to simulate future predictions, and a random 20% subset" [PAGE 6]; "ETV primarily reflects overall player involvement and throw frequency" [PAGE 9]; "inability to accurately attribute credit between throwers and receivers" [PAGE 16]; "potential bias introduced by the location of completed and incomplete throws" [PAGE 16]; "stall count, teammate and defender locations" [PAGE 16].

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Interpret: crisis habit regression = under pressure, teams/players revert to habit (sideline resets?); counter-trap = opponent exploits predictable habit; clock = time remaining affects ETV and decisions. Need apply to ultimate. Use source: field plots central vs sideline, resets, time remaining fatigue. Need recursive theory of mind: player models opponent model; coach models player model; analyst models coach. Multi-level recursion. Need mention "crisis habit regression" likely when score/time pressure, players default to low-risk resets or force low-percentage sideline throws. Source says "resetting the disc as a strategic option rather than forcing a low percentage throw down the sideline" [PAGE 11]. "counter-trap" = if defense knows reset tendency, they bait sideline then trap. "clock" = SHAP time left shows decrease in ETV as time elapses [PAGE 12]. But careful: source says player fatigue; we can say "the paper attributes this to fatigue; an alternative recursive model is strategic clock pressure and opponent adjustment; without stall/defender data cannot adjudicate." Need formal decision: at time \(t\), player chooses action \(a\) maximizing expected ETV plus continuation value; under stress, policy entropy collapses to habit distribution. Could use Bayesian recursive theory: \(Q_t(a)=E[ETV(a)+\gamma V_{t+1}(s')]\); crisis \( \alpha \) habit weight increases: \(\pi_t(a)=(1-\alpha_t)\pi^{softmax}_t(a)+\alpha_t h(a)\). Counter-trap if defender anticipates \(h(a)\) and raises turnover probability at those targets. Clock changes \(\gamma\) or value. Need not be too fake? It's okay if formal with assumptions. Need no toy ratios. Could avoid invented fake ratios? Invariant says never invent fake ratios (Force/Fatigue). Formal equations okay. We can use policy mixture \(\alpha_t\) as bounded scalar [0,1], not ratio. Need state assumptions. It is a model not from paper, label as audit operator. Need be careful "crisis habit regression" not in source; we can frame as a formal counterfactual audit. Use \(\alpha_t\in[0,1]\) with no units. That's okay. Need "counter-trap" and "clock" discussed.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need propose three scenarios where model/metric claim can be vetoed by verifiable tests. Need include predictions. Could be:
1. Temporal leakage veto: Re-run CP/FV with strictly future holdout and player-disjoint splits; predict AUC/PPV drop if leakage. But paper already temporal holdout. Need verifiable: If metrics are stable, CPOE top rankings should persist across seasons; if not, veto player-evaluation claim. Prediction: CPOE stability lower than traditional completion percentage? Need source says novel metrics comparable. We can propose exact test: bootstrap by game; 95% CI; veto if temporal holdout AUC falls below baseline. But we need verifiable. Maybe:
- Veto scenario A: spatial out-of-support. Test ETV on throws from field coordinates sparse in training via held-out spatial cells. Prediction: performance degrades; veto any claim of "every possible throw" field plots outside support. Source: Figure 5 plots "every possible throw" [PAGE 11], but model cannot guarantee outside training support. Verifiable: bin field into grid cells, compute calibration error by cell; if high in unsupported cells, veto. Prediction: calibration error >? Need not invent exact threshold? We can specify "pre-registered threshold e.g. >0.05 Brier decomposition". But RLVR requires verifiable. Could use thresholds. Need no betting. Fine.
- Veto scenario B: denominator singularity for aEC. Test all possessions with \(FV_p\) near 1; if aEC variance explodes and rankings unstable, veto aEC as context-independent. Prediction: near-end-zone possessions show heavy-tailed aEC; rank correlation with EC drops. Verifiable via denominator distribution and bootstrap rank correlation.
- Veto scenario C: omitted defender/stall/weather. Test adding stall count/defender distance/weather to CP model; if CPOE rankings change materially, veto causal decision-quality interpretation. Prediction: CP calibration improves and CPOE rankings shift; source future work explicitly says these missing [PAGE 16]. Could include weather as missing. Need 3 scenarios with predictions.

Need also "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need maybe separate from RLVR. We can include formal omitted variable equations.

Need "SOURCE_OPERATORS_AND_EQUATIONS" detailed. Need reproduce equations with LaTeX. Need cite pages. Let's plan structure.

Start directly with XML. No preamble? Probably fine. Need sections exact order. Use tags. Ensure word count >=1000. We can include all sections. Need "strict invariants: zero betting lines" avoid words? "odds" maybe not mention. Avoid "moneyline" etc. Also avoid "betting" maybe not necessary. No mention of "spread" as in statistical spread? Avoid word "spread" except maybe not. Use "score differential" okay. Avoid "totals". Fine.

Need cite exact page markers. Use [PAGE 5] etc. Verbatim quotes in quotation marks. Need ensure quotes are exact from source. Let's collect exact phrases:

Page 1: "first empirical work to leverage this wealth of new data" maybe. "two primary models: 1) a Completion Probability (CP) model... and 2) a Field Value (FV) model" [PAGE 1]. Could quote.

Page 2: "327,179 recorded throws across 604 games" exact. "precise field locations for both throwers and receivers" exact. "game-state variables such as the score differential and remaining time" exact.

Page 3: field dimensions: "80 yards in length and 53 ⅓ yards in width, with 20-yard end zones" exact. "7-second stall count" exact. "continuous play" exact. "turnovers" etc. Previous work: "3,195 throws from 10 exhibition club ultimate games" exact. "smoothed K Nearest Neighbors model based on thrower and receiver coordinates" exact.

Page 4: features list. "Thrower X and Thrower Y: The cartesian coordinates" exact. "Throw angle, measured in degrees, with 0° forward, 180° backward, positive to the right, and negative to the left of the thrower." exact. "Game quarter", "Quarter point", "Score differential", "Time: The time remaining in the current quarter." exact.

Page 5: FV equation: \(Goal_p(X_t) ~ Bernoulli(\pi(X_{i(p)}^t, X_{i(p)}^g))\). Actually source: 𝐺𝐺𝐺𝐺𝐺𝐺𝐺𝐺𝑝𝑝(𝑋𝑋𝑡𝑡) ~ 𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵(𝜋𝜋(𝑋𝑋𝑖𝑖(𝑝𝑝)𝑡𝑡 , 𝑋𝑋𝑖𝑖(𝑝𝑝)𝑔𝑔)) due OCR. We'll render in LaTeX: \(\mathrm{Goal}_p(X_t)\sim \mathrm{Bernoulli}(\pi(X_{i(p)}^t, X_{i(p)}^g))\). Need be careful: source says Goal_p(X_t)? The OCR has \(𝐺𝐺𝐺𝐺𝐺𝐺𝐺𝐺𝑝𝑝(𝑋𝑋𝑡𝑡)\). We can state "as printed" with normalized LaTeX. Need not exact? We can quote. Also CP equation: \(\mathrm{Complete}_i \sim \mathrm{Bernoulli}(\pi(X_i^t,X_i^r,X_i^{th},X_i^g))\). Page 5. "ensemble of decision trees, which we fit using XGBoost." exact.

Page 6: "5-fold cross-validation" exact. "player-based set of 50 throwers with 200+ throws each, a temporal set from the latest 10 games to simulate future predictions, and a random 20% subset" exact. xCP: \(xCP=CP(X_t,X_r,X_{th},X_g)\). CPOE: \(CPOE=C-xCP\). Page 6. "directly comparable to the CPOE statistic commonly used to evaluate quarterbacks in football" exact.

Page 7: EC: \(EC=FV_e-FV_s\) if C=1; \(EC=-FV_o\) if C=0. aEC: \(aEC=(FV_e-FV_s)/(1-FV_p)\) if C=1; \(aEC=-FV_o\) if C=0. Exact. "scales credit for scoring events so that the total contribution of all throws in a goal-scoring possession sum to exactly one" exact. "By eliminating the dependency on the starting FV" exact. "a single throw possession that results in a goal will have a contribution of one" exact. Need cite [PAGE 7].

Page 8: ETV: \(ETV=xCP\times FV_e-(1-xCP)\times FV_o\). "ranges from -1 to 1" exact. "A value of 1 represents a throw with 100% completion into the end zone, resulting in a certain goal." exact. "A value of -1 indicates the opposite: a certain interception in the defending end zone." exact.

Page 9: independence: "ETV primarily reflects overall player involvement and throw frequency" exact. "aEC provide distinct insights with higher independence than EC" exact. "Gaussian copula model" exact.

Page 10: dendrogram relations. "R-EC and R-aEC closely aligning with other receiver-based metrics, like goals." exact. "T-EC and T-aEC are more strongly associated with efficiency metrics" exact. "ETV clusters near traditional volume metrics, such as the number of throws" exact.

Page 11: "In the middle of the field, ETV suggests advancing the disc by throwing closer to the sidelines." exact. "When the disc is near the sidelines, it’s often more effective to ‘reset’ the disc into the center of the field rather than attempting to advance it toward the end zone." exact. "coaches emphasize resetting the disc as a strategic option rather than forcing a low percentage throw down the sideline" exact. Figure 5 "every possible throw" exact? Source: "plotting the smoothed ETV for every possible throw given a disc location and game state (Figure 5)." exact [PAGE 11]. Good.

Page 12: "plots examining time remaining in the quarter reveal the effect of player fatigue, with a marked decrease in ETV as time elapses." exact. "throw distance and y differential which show a positive correlation with ETV up to a threshold, after which further increases in distance yield diminishing returns" exact.

Page 13: "clear advantage to central positioning on the field" exact. "throwing to the opposite side of the field often provides increased value" exact. "central positioning enhances flexibility and supports forward-moving, high-value plays, while sideline positioning restricts options, making lateral throws more favorable." exact.

Page 14: "top five players by total EC (Table 2) include 2021 MVP Ben Jagt and four other All-UFA team selections" exact. "2017 MVP Jonathan Nethercutt and 5 time All-UFA selection Pawel Janas" exact. Maybe.

Page 15: "players with high R-EC but low T-EC emphasize their strength as a receiver (known as ‘cutters’)" exact. "players with higher T-EC demonstrate their effectiveness as a distributor (known as ‘handlers’)" exact. "Gus Norrbom’s high xCP reflecting his focus on safe, high-percentage throws" exact. "James Pollard’s and AJ Merriman’s lower xCPs indicating a preference for riskier plays" exact. "Matt Jackson, with both a high xCP and a strong CPOE, excel at reliably completing high-percentage throws" exact. "Jonathan Nethercutt, with a lower xCP maintains a high CPOE demonstrating skill in completing challenging throws." exact.

Page 16: limitations quotes. "inability to accurately attribute credit between throwers and receivers" exact. "differences in rules, timing, and field dimensions" exact. "potential bias introduced by the location of completed and incomplete throws" exact. Future work: "stall count, teammate and defender locations, and other situational factors that are not currently captured systematically" exact. "defensive metrics" exact.

Page 17 references.

Need word count. Let's draft with enough depth.

Potential issue: "AUC, accuracy, PPV, NPV" units dimensionless. "AUC" in [0,1]. Brier score? Not in source but can mention for audit. Formal equations with units. Need state "probability units" maybe not SI. SI units for field: meters? Source uses yards. We can convert? Better cite source units: yards and degrees. If formal LaTeX uses yards, state 1 yard = 0.9144 m exactly (SI conversion). Could include to satisfy SI units. Coordinates in yards in source; to express SI: \(x,y \in \mathbb{R}\) with source units yards; \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). Time in minutes/quarters. Throw distance in yards; angle in degrees. Probability dimensionless. Field value scoring probability dimensionless. ETV dimensionless. EC/aEC dimensionless probability units. Need mention no fake ratios.

Need exact singularity/breakdown regimes:
- aEC denominator \(1-FV_p\). Singular at \(FV_p=1\). Near \(FV_p\to1\), \(aEC\) unbounded unless numerator also zero. For a scoring possession with start at \(FV_p=1\), total contribution normalization impossible; any single throw? The paper states aEC scales so all throws in goal-scoring possession sum to exactly one by dividing by \(1-FV_p\). If \(FV_p=1\), the sum of EC is zero? Let's derive: They say EC of goal-scoring possession throws sum to one minus FV at start. If FV_p=1, sum EC=0; dividing by 0. So aEC undefined. That's exact. Need mention if \(FV_p\) near 1, high variance and metric instability. This is a "exact singularity".
- CP/FV model: Bernoulli conditional probability \(\pi\in[0,1]\). If calibrated \(\pi=0\) or 1, log-loss has infinite penalty for wrong event; but XGBoost outputs maybe in (0,1). Not necessarily.
- ETV range [-1,1] assumes \(FV_e,FV_o\in[0,1]\) and \(xCP\in[0,1]\). Breakdown if FV predictions outside [0,1] (uncalibrated) or if \(FV_o\) not opponent field value? Need mention.
- Field plots "every possible throw" beyond training support: model extrapolation, decision-tree ensembles constant outside split thresholds? XGBoost cannot extrapolate gradients; predictions piecewise constant, so "every possible throw" field plot is interpolated/smoothed, not supported. This is a breakdown regime: sparse spatial support, out-of-bounds, extreme angles, end zones; model cannot identify. Good.
- Attribution: EC/aEC assigns same \(EC\) to thrower and receiver? Source says calculate separately, but "Because both throwers and receivers contribute... inability to accurately attribute credit". Need mention simultaneity; T-EC + R-EC? They use "their sum, Total EC" maybe double-count? Wait: "Because both throwers and receivers contribute to the success of a throw, EC and aEC metrics can be calculate separately for both players. In this paper, we use the metrics Receiver EC (R-EC), Thrower EC (T-EC), and their sum, Total EC (Tot EC), to quantify the individual contributions of each player." Hmm "their sum" means sum of thrower and receiver? If same throw assigned to both, Tot EC maybe sum not double count? Need not critique too much. But attribution limitation [PAGE 16].
- Feature "time remaining" as fatigue: breakdown due to confounding; no biomechanical data. Good.

Need "GSE + GSI Frontier Reasoning Foundry" maybe no need. Could include "Audit stance: source-grounded, causal-skeptical". But exact XML sections required. We can put a small preamble? Maybe not.

Need ensure no markdown? XML sections with LaTeX okay. Need not escape < in text? We use XML tags; within text, avoid raw < except equations? LaTeX uses \(...\), no <. In text, ">=400" not needed. Avoid unescaped &? In XML, ampersand in text should be escaped. But user expects XML-like. We can use "and" instead of &, or \&? For LaTeX equations, & only in align? Avoid align with &. Use plain equations. Use "CP and FV" not &. Avoid raw ampersand. Use "PAGE 5" citations. Use quotes. Avoid < symbols in text? In LaTeX, use \(x<1\) maybe raw < inside text would break XML; better use \(x \lt 1\) or "less than". But we can use \(\) with \lt. Need not validate strict XML? Better avoid raw & and <. Use "and" instead of &. Use "less than" or \le. In equations, \sim, \pi. Use \[
...
\] maybe okay. But raw backslashes fine. Need avoid `<` in tags? Tags okay. Inside text, "PAGE 5" not `<PAGE>`. Fine.

Need include "verbatim quotes" exact. If quote contains ampersand? Avoid. Quote "R-EC and R-aEC" no ampersand. Use exact quotes with "and" already. Avoid "&" in quotes. Source quotes sometimes have "&"? No. Good.

Need answer in XML sections. The required exact tags:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need THINK_TRACE >=400 words. Deep multi-hop derivation and gray-zone audit. Let's write ~500 words. Then other sections ~1500 total. Need maintain no betting.

Let's draft THINK_TRACE:

"Source-grounded audit. Paper's core operator is probabilistic field-value decomposition: FV estimates scoring probability from thrower and game context; CP estimates completion probability from thrower, receiver, throw, game context. Both Bernoulli with XGBoost. Metrics are derived by comparing realized outcomes to model expectations. The derivation chain is: observed throw -> CP -> xCP; completion indicator C -> CPOE = C - xCP; location -> FV; start/end/turnover FV -> EC; normalized by possession start FV -> aEC; combine xCP and FVs -> ETV. Multi-hop: player value is not raw yardage; it is difference in scoring probability plus turnover risk. But every hop adds identification assumptions. CP and FV are conditional associations, not causal effects. EC/aEC depend on FV model accuracy at both endpoints; ETV depends on product and complement. Singularity at FV_p=1. Spatial field plots "every possible throw" are model interpolations; XGBoost piecewise constant, cannot extrapolate to unobserved cells. Page 11 quote. Need audit gray zones: time-left SHAP attributed to fatigue [PAGE 12] but no biomechanical load, defender/stall, weather; cannot accept fatigue causal claim. ETV independence analysis says ETV primarily reflects involvement and throw frequency [PAGE 9], so using ETV as individual quality is a category error. EC top-player validation with MVP is weak criterion; retroactive awards can correlate with volume/team success. Location bias for completed vs incomplete throws [PAGE 16]. Attribution between thrower/receiver unresolved. Multi-week trap: overreact to single-season rankings; holdout temporal and player-based are present but metrics need bootstrap by game/player. Need exact singularity/breakdown. Need mention no betting."

Then SOURCE_OPERATORS_AND_EQUATIONS:
- Dataset and units.
- FV model equation.
- CP model equation.
- Metrics equations with conditions.
- ETV equation.
- Breakdown regimes.

Use LaTeX. Need cite pages.

Let's write:

"Data: \(N=327179\) throws, 604 games, 2021-2024 [PAGE 2]. Coordinates in yards; \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). Angle degrees. Time minutes. Probabilities dimensionless in [0,1]. AUC etc dimensionless."

FV:
\[
\mathrm{Goal}_p(X_t)\sim \mathrm{Bernoulli}\left(\pi(X_{i(p)}^t,X_{i(p)}^g)\right), \quad \pi(\cdot)=P(\mathrm{Goal}_p=1\mid X_{i(p)}^t,X_{i(p)}^g)
\]
where \(p=1,\dots,N_g\), \(i(p)=1,\dots,N_p\). [PAGE 5]
CP:
\[
\mathrm{Complete}_i\sim \mathrm{Bernoulli}\left(\pi(X_i^t,X_i^r,X_i^{th},X_i^g)\right)
\]
[PAGE 5]
xCP, CPOE:
\[
xCP=CP(X_t,X_r,X_{th},X_g);\quad CPOE=C-xCP,\quad C\in\{0,1\}
\]
[PAGE 6]
EC:
\[
EC =
\begin{cases}
FV_e - FV_s, & C=1,\\
-FV_o, & C=0.
\end{cases}
\]
aEC:
\[
aEC =
\begin{cases}
\frac{FV_e-FV_s}{1-FV_p}, & C=1,\\
-FV_o, & C=0.
\end{cases}
\]
[PAGE 7]
ETV:
\[
ETV=xCP\cdot FV_e-(1-xCP)\cdot FV_o,\quad ETV\in[-1,1].
\]
[PAGE 8]
Need maybe use \cdot not \times? Fine.

Breakdown:
- \(FV_p=1\) exact singularity. If \(FV_p\to1^-\), aEC explodes. If \(FV_p>1\) or less than 0 due model calibration, formula invalid; need clamp or calibrate. If \(FV_p=1\) and C=1, numerator \(FV_e-FV_s\) also? For a possession starting with FV=1, sum EC =0; normalization by zero. Need mention "undefined; not merely large".
- Bernoulli support: if \(\pi\notin[0,1]\), invalid; XGBoost logit outputs need calibration/ clipping; log-loss infinite if event impossible and occurs.
- Spatial support: field plots "every possible throw" [PAGE 11] but model trained on observed throws; out-of-support cells are interpolated. Piecewise tree model constant outside thresholds; no physical disc flight model; no wind/rain.
- Causal identification: \(\pi\) is conditional, not \(do()\). Omitted variables \(U\) = defender/stall/weather/biomechanical. Quote page 16. SHAP is attribution to model not causal.
- Attribution: thrower/receiver credit unresolved [PAGE 16].

RETROCAUSAL_GENEALOGY:
Lineage: Weiss and Childers 2013 "Maps for reasoning in ultimate" [PAGE 3, 17]; 3,195 throws 10 exhibition club games, smoothed KNN based on thrower/receiver coordinates [PAGE 3]; 2014 poster spatial statistics [PAGE 17]; Carter and Machol 1971 operations research football [PAGE 4, 17]; Yurko et al 2019 nflWAR/CPOE [PAGE 6, 17]; Franks et al 2016 meta-analytics [PAGE 8, 17]; ElHabr 2023 soccer meta-analytics [PAGE 17]. UFA data collection 2021 [PAGE 4]. Retrocausal genealogy: current metrics retroactively reinterpret old counting stats as biased estimators of scoring probability; CPOE retroactively imports QB evaluation; aEC retroactively normalizes possession credit. Multi-week traps: (1) Small-sample amateur-to-pro transfer trap: prior 3,195 throws vs 327,179 throws; (2) Award validation trap: MVP ranking alignment [PAGE 14] is not independent ground truth; (3) ETV volume trap: independence analysis says ETV reflects involvement [PAGE 9]; (4) location bias trap [PAGE 16]; (5) league transfer trap: rules/timing/field dimensions differ [PAGE 16]; (6) missing defender/stall/weather trap [PAGE 16]. Need "multi-week traps" maybe over a multi-week evaluation cycle: don't promote metric after one week; require temporal holdout and player-disjoint; source has temporal latest 10 games [PAGE 6]. Good.

RECURSIVE_THEORY_OF_MIND:
Levels: player chooses throw; defender models thrower; coach models defender; analyst models coach. Source field plots: middle of field ETV suggests advancing closer to sidelines [PAGE 11]; near sideline reset [PAGE 11]. Crisis habit regression: under clock/score pressure, policy collapses to habitual reset or forced sideline throw. Source SHAP time left decrease [PAGE 12], but paper calls fatigue; alternative: clock pressure. Counter-trap: defense anticipates reset; if thrower habit is reset to center, defender jumps lane; ETV computed with average defender not specific. Clock: time remaining in quarter feature; game state. Formal:
\[
Q_t(a)=E[ETV(a)+ \gamma V_{t+1}(s')], \quad \pi_t(a)=\mathrm{softmax}(Q_t(a)/\tau)
\]
Under stress:
\[
\pi_t^{\mathrm{crisis}}(a)=(1-\alpha_t)\pi_t(a)+\alpha_t h(a),\quad \alpha_t\in[0,1]
\]
where \(h(a)\) is habit policy, \(\tau\) temperature. This is audit formalism, not paper. If \(\alpha_t\to1\), habit dominates; opponent best response \(a_D^*=\arg\max_{a_D} P(\mathrm{turnover}\mid a_D, h)\). Counter-trap proof: If opponent knows \(h\), observed completion probability is not the CP model's marginal \(\pi(X)\) but \(\pi(X\mid a_D^*)\), so CPOE biased. Clock: as \(t\to0\), \(V\) changes; if trailing team needs score, ETV threshold shifts; without score differential/time interaction, field plots at fixed state [PAGE 11,12] don't generalize. Need mention "crisis habit regression vs counter-trap vs clock" explicitly. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Define observational vector \(X_{\text{obs}}\) includes thrower/receiver coords, throw distance/angle, game quarter/point/score/time [PAGE 4]. Does not include defender positions, stall count, weather, biomechanical load. Paper explicitly says future work "stall count, teammate and defender locations, and other situational factors that are not currently captured systematically" [PAGE 16]. Veto rules:
1. Physical veto: Field geometry: 80 yd by 53 1/3 yd, 20-yd end zones, 7-second stall [PAGE 3]. Any claim about throw feasibility must satisfy disc flight and boundary constraints; model has no explicit physical disc dynamics. If a field plot recommends a target outside field or through boundary, veto. Prediction: out-of-support cells show artifacts; smoothing hides piecewise constants. Weather veto: no weather variables; cannot claim wind/rain effects; conditional model averages over historical weather. Formal:
\[
P(Y\mid X_{\text{obs}})=\sum_{W,B,D,S} P(Y\mid X_{\text{obs}},W,B,D,S) P(W,B,D,S\mid X_{\text{obs}})
\]
If unobserved components vary at deployment and are not exchangeable, \(P(Y\mid X_{\text{obs}})\) is not transportable. 
2. Biomechanical veto: Paper attributes time-left decrease to "the effect of player fatigue" [PAGE 12]; no force, load, heart rate, sprint count, or muscle state. Time left is confounded with score, possession, strategy, substitution. Veto causal fatigue claim. Accept only if direct load variable measured and survives adjustment. Predict: adding stall count/defender distance/timeouts will attenuate time-left SHAP.
3. Weather veto: no wind/precip/temperature; disc aerodynamic response depends on wind/grip; cannot prove from source. Veto any weather-specific prediction. Predict: if weather added, CP calibration improves in outdoor rainy/windy games; otherwise model residual correlated with weather. Need "physical/biomechanical/weather veto proof" maybe state "proof = absence of variables and quoted future-work admission." Good.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios with predictions. Use RLVR verifiable rewards: define tests, pass/fail. Maybe:
1. Spatial-support calibration veto. Test: grid field into cells (e.g., 5-yard cells). For held-out throws in cells with low training density, compute Brier score and calibration slope. Veto if calibration error exceeds pre-registered threshold and slope deviates. Prediction: ETV field plots at "every possible throw" [PAGE 11] will be least calibrated near sidelines/end zones and extreme angles; smoothing will overstate confidence. Prediction: high-density central cells lower Brier than sparse cells; if not, claim survives. Need maybe thresholds? We can say "pre-register e.g. Brier skill score <=0 vs baseline" but no need exact? Verifiable predictions need concrete. Could specify "Brier skill score relative to base rate less than 0 in sparse cells" and "95% bootstrap CI excludes 0." Good.
2. aEC singularity veto. Test: compute distribution of \(1-FV_p\) across possessions; flag \(FV_p\ge 0.95\) (or near 1). Bootstrap aEC rankings. Veto aEC as context-independent if denominator \(1-FV_p\) has mass near zero and rank correlation with EC is unstable. Prediction: possessions starting near end zone produce heavy-tailed aEC; excluding them changes top-10 rankings. Source: aEC formula [PAGE 7]. Good.
3. Missing-defender/stall/weather causal veto. Test: augment CP/FV with defender distance, stall count, weather; compare CPOE and ETV rankings and calibration. Veto "decision quality" if CPOE rank correlation drops below pre-registered threshold (e.g., Spearman <0.8) or calibration improves significantly. Prediction: adding stall count and defender locations will reduce CPOE for high-xCP safe throwers? Actually missing defenders means safe throws may be safe because open; CPOE may overcredit. Need prediction: CPOE rankings shift; time-left fatigue SHAP attenuates. Source future work [PAGE 16]. Also weather missing. Need 3 scenarios. Could have weather as part of third. Need "RLVR" maybe reward verifiable. Include "reward is binary pass/fail from held-out data". Good.

Need word count. Let's estimate: THINK_TRACE ~500; SOURCE ~700; RETRO ~400; RECURSIVE ~400; CROSS ~500; RLVR ~500 total ~3000. Good. Need not too long? Desired oververbosity 5. Fine.

Need be careful with exact XML: no markdown code fences. Use tags. Inside text, avoid raw `&` and `<`. Use "and" instead. In LaTeX, no raw &; use cases with `\begin{cases}` has `&` in LaTeX! In XML text, raw & would be invalid. To avoid, use `\begin{array}{ll}`? Still `&`. Better represent piecewise using separate equations with conditions rather than cases with &. Example:
\[
EC=FV_e-FV_s \quad \text{if } C=1
\]
\[
EC=-FV_o \quad \text{if } C=0
\]
No &. Good. aEC similarly. No `&`. Use `\text{if}`. Avoid `<` in text; use `\lt` if needed. In equations, `\in [0,1]` fine. Use `\to 1^-` no `<`. Use `P(Y\mid X)` with `\mid` not `|`? Fine. Avoid raw `|`? It's okay in text? XML doesn't care about `|`. Ampersand is main issue. Avoid `&` entirely. Also avoid `<` and `>` raw in text. In XML tags we have < > but inside content avoid. Use "less than" or `\le`. In LaTeX, `\le` okay. In text, ">=400" not needed. Use "at least". Good.

Need maybe use `\mathrm{Bernoulli}` and `\mathrm{Goal}` etc.

Need exact quote "5 time All-UFA selection Pawel Janas" maybe no issue. "5 time" as source. Good.

Need mention "No betting lines" not needed. Avoid word "odds" etc. I won't mention.

Need final only XML sections. Let's compose carefully.

Potential issue: User said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Need include at least one quote per section? We can include multiple. We should use exact [PAGE N] markers. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes" in SOURCE section. Need include SI conversion. Need mention information units? AUC dimensionless; no bits? Maybe could mention log-loss in nats/bits if calibration audit. But source doesn't use. Could mention "information units for log-loss audit would be nats if natural log, bits if base-2; source reports AUC/accuracy/PPV/NPV, which are dimensionless." This satisfies information units. Add in SOURCE. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof." Include proof via omitted variables and quotes. Good.

Let's write final in one answer. Need ensure word count >=1000. Yes.

Let's draft final.
</NATIVE_REASONING>

<THINK_TRACE>
This source is an audit target, not an oracle. The paper’s core derivation chain is: observed throw location and game state feed a Field Value model that estimates scoring probability; thrower, receiver, throw, and game contexts feed a Completion Probability model; the resulting probabilities are converted into player-value and decision metrics. The first hop is associational: the models estimate conditional probabilities such as scoring probability given thrower context and game context [PAGE 5], and completion probability given thrower, receiver, throw, and game contexts [PAGE 5]. The second hop is metric construction: xCP is the CP model prediction, CPOE is realized completion minus xCP [PAGE 6], EC compares endpoint field value with starting field value on completions and uses the opponent’s field value on turnovers [PAGE 7], aEC rescales completion contributions by one minus the possession’s starting field value [PAGE 7], and ETV combines xCP, endpoint field value, and turnover field value [PAGE 8]. The third hop is interpretation: EC and aEC are treated as player contribution, CPOE and xCP as execution and decision tendency, and ETV as strategic throw value. Each hop adds assumptions that the paper does not fully identify causally. The models are XGBoost ensembles trained with 5-fold cross-validation and validated against a player-based hold-out, a temporal hold-out from the latest 10 games, and a random 20 percent subset [PAGE 6]. That is stronger than an in-sample fit, but it is not a causal identification strategy. A gray-zone audit must distinguish prediction, association, and causation. SHAP values explain model outputs, not real-world interventions; the paper’s own future-work list admits that stall count and defender locations are “not currently captured systematically” [PAGE 16]. Therefore any claim that a thrower’s CPOE measures decision quality independent of defensive pressure is under-identified. The aEC formula has an exact singularity: the denominator is \(1-FV_p\), so \(FV_p=1\) makes aEC undefined and \(FV_p\to1^-\) makes it unstable. The paper says aEC scales credit so that throws in a goal-scoring possession sum to exactly one, and that it removes dependence on starting field value [PAGE 7], but that normalization is precisely what fails when the starting field value is already one. The field plots are also a gray zone: the paper plots “smoothed ETV for every possible throw given a disc location and game state” [PAGE 11], but XGBoost predictions are piecewise constant outside split thresholds, not physical disc-flight extrapolations. Sparse spatial cells, extreme angles, boundary throws, and end-zone starts can therefore produce confident-looking artifacts. The fatigue interpretation is another gray-zone claim: the paper says “plots examining time remaining in the quarter reveal the effect of player fatigue, with a marked decrease in ETV as time elapses” [PAGE 12], but no force, heart rate, sprint load, or muscle-state variable is modeled. Time remaining is confounded with score differential, possession urgency, substitution, and opponent adjustment. Finally, the paper’s independence analysis says “ETV primarily reflects overall player involvement and throw frequency” [PAGE 9], so using ETV as an individual-quality ranking would be a category error. The source also flags the “inability to accurately attribute credit between throwers and receivers” [PAGE 16] and a “potential bias introduced by the location of completed and incomplete throws” [PAGE 16]. These are not minor caveats; they are boundary conditions on every downstream ranking.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Dataset and units. The source reports “327,179 recorded throws across 604 games” from four professional seasons [PAGE 2], with “precise field locations for both throwers and receivers” and game-state variables such as score differential and remaining time [PAGE 2]. Field geometry is stated in yards: “80 yards in length and 53 ⅓ yards in width, with 20-yard end zones on either side” [PAGE 3]. The SI conversion is \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). Throw angle is measured in degrees, with “0° forward, 180° backward, positive to the right, and negative to the left of the thrower” [PAGE 4]. Time is the remaining time in the current quarter [PAGE 4]. Probabilities are dimensionless in \([0,1]\). AUC, accuracy, PPV, and NPV are dimensionless. If a log-loss audit were added, information units would be nats for natural logarithms or bits for base-2 logarithms; the source itself reports AUC-type discrimination and accuracy measures, not information units [PAGE 6].

FV model. The paper defines the Field Value model as a Bernoulli scoring process:
\[
\mathrm{Goal}_p(X_t)\sim \mathrm{Bernoulli}\left(\pi(X_{i(p)}^t,X_{i(p)}^g)\right),
\]
\[
\pi(X_{i(p)}^t,X_{i(p)}^g)=P\left(\mathrm{Goal}_p=1\mid X_{i(p)}^t,X_{i(p)}^g\right),
\]
where \(X_{i(p)}^t\) is thrower context, \(X_{i(p)}^g\) is game context, \(i(p)\) indexes the \(i\)th pass of point \(p\), and \(p=1,\dots,N_g\) [PAGE 5]. The model is estimated “via an ensemble of decision trees, which we fit using XGBoost” [PAGE 5]. Assumptions: the Bernoulli conditional probability is well specified, observations are exchangeable enough for cross-validation, and the observed thrower and game contexts capture the relevant scoring information. The paper’s own missing-variable admission weakens the last assumption because defender positions and stall count are absent [PAGE 16].

CP model. The Completion Probability model is:
\[
\mathrm{Complete}_i\sim \mathrm{Bernoulli}\left(\pi(X_i^t,X_i^r,X_i^{th},X_i^g)\right),
\]
\[
\pi(X_i^t,X_i^r,X_i^{th},X_i^g)=P\left(\mathrm{Complete}_i=1\mid X_i^t,X_i^r,X_i^{th},X_i^g\right),
\]
where \(X_i^t\) is thrower context, \(X_i^r\) receiver context, \(X_i^{th}\) throw context, and \(X_i^g\) game context [PAGE 5]. The same XGBoost estimation assumption applies. Breakdown regimes: conditional probability outside \([0,1]\) would violate Bernoulli support; severe miscalibration makes CPOE and ETV misleading; correlated throws within a point or player are not modeled with random effects, so uncertainty intervals can be too narrow if resampling is not grouped by game or player.

xCP and CPOE. The paper defines:
\[
xCP=CP(X_t,X_r,X_{th},X_g),
\]
and, with \(C\in\{0,1\}\) indicating completion,
\[
CPOE=C-xCP.
\]
Both are dimensionless probability units [PAGE 6]. Assumption: xCP is a fair baseline for the throw’s difficulty. If defenders or stall pressure are omitted, CPOE can overcredit a thrower for completing throws that were open because of unobserved defensive behavior.

EC and aEC. For a single throw, with \(FV_s\) the starting field value, \(FV_e\) the endpoint field value, and \(FV_o\) the opponent’s field value after a turnover:
\[
EC=FV_e-FV_s \quad \text{if } C=1,
\]
\[
EC=-FV_o \quad \text{if } C=0.
\]
The adjusted metric is:
\[
aEC=\frac{FV_e-FV_s}{1-FV_p} \quad \text{if } C=1,
\]
\[
aEC=-FV_o \quad \text{if } C=0,
\]
where \(FV_p\) is the field value of the starting throw of that possession [PAGE 7]. Units are dimensionless scoring-probability units. The exact singularity is \(FV_p=1\): the denominator is zero, so aEC is undefined. As \(FV_p\to1^-\), aEC becomes arbitrarily sensitive to small errors in \(FV_e\) and \(FV_s\). If a possession begins with a near-certain scoring probability, the normalization “so that the total contribution of all throws in a goal-scoring possession sum to exactly one” [PAGE 7] becomes unstable or impossible. If the FV model outputs values outside \([0,1]\), the formula is invalid without calibration or clipping.

ETV. The combined metric is:
\[
ETV=xCP\cdot FV_e-(1-xCP)\cdot FV_o,
\]
with the paper stating that ETV “ranges from -1 to 1” [PAGE 8]. The upper bound assumes \(xCP=1\) and \(FV_e=1\); the lower bound assumes \(xCP=0\) and \(FV_o=1\). Breakdown regimes: uncalibrated FV outputs, out-of-support spatial locations, or missing defensive pressure can push the apparent ETV away from the true conditional expectation. The paper’s independence result is decisive for interpretation: “ETV primarily reflects overall player involvement and throw frequency” [PAGE 9]. Therefore ETV is a strategy and throw-selection operator, not a clean individual-quality operator.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. The paper credits Weiss and Childers’ “Maps for reasoning in ultimate” [PAGE 3], which used “3,195 throws from 10 exhibition club ultimate games” and a “smoothed K Nearest Neighbors model based on thrower and receiver coordinates” [PAGE 3]. That earlier work manually tracked amateur exhibition data and introduced completion and scoring maps; the present paper retroactively reinterprets those maps as precursors to a larger, professional, throw-level probability framework. The lineage also imports football and meta-analytic methods: Carter and Machol’s operations research on football [PAGE 4], Yurko et al.’s nflWAR and CPOE-style quarterback evaluation [PAGE 6], and Franks et al.’s meta-analytic criteria for discrimination, stability, independence, and relation to established metrics [PAGE 8]. The reference list confirms those sources [PAGE 17]. Retrocausally, the current metrics make old counting stats look like noisy estimators of posterior scoring probability: goals and assists are no longer terminal values but observed outcomes whose expected values can be modeled. CPOE retroactively imports the quarterback-completion-over-expectation logic into ultimate, while aEC retroactively normalizes possession credit so that each scoring possession has equal total value [PAGE 7].

Multi-week traps. First, the small-sample transfer trap: the earlier 3,195-throw amateur dataset cannot be assumed to transport to 327,179 professional throws across 604 games [PAGE 2]. Second, the award-validation trap: the paper notes that the top five players by total EC include “2021 MVP Ben Jagt and four other All-UFA team selections” [PAGE 14], but retroactive awards are not independent ground truth and can correlate with team success, volume, and narrative. Third, the ETV-volume trap: because “ETV clusters near traditional volume metrics, such as the number of throws” [PAGE 10], a multi-week evaluation that ranks players by ETV may simply rediscover involvement. Fourth, the location-bias trap: completed and incomplete throws land in different areas, especially out of bounds or interceptions, and the paper flags a “potential bias introduced by the location of completed and incomplete throws” [PAGE 16]. Fifth, the league-transfer trap: the paper warns that “differences in rules, timing, and field dimensions” across the Ultimate Frisbee Association, Premier Ultimate League, and Western Ultimate League could affect performance metrics [PAGE 16]. Any multi-week promotion of these metrics should therefore require group-aware resampling by game and player, temporal hold-out replication, and explicit out-of-support spatial testing.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
At the first recursive level, the thrower chooses an action under a model of the defender. At the second level, the defender models the thrower’s habits. At the third level, the coach models the defender’s model of the thrower. At the fourth level, the analyst models the coach’s model. The paper’s field plots are a static projection of this recursive game: from mid-field, “ETV suggests advancing the disc by throwing closer to the sidelines” [PAGE 11], while near the sideline it is “often more effective to ‘reset’ the disc into the center of the field rather than attempting to advance it toward the end zone” [PAGE 11]. Those recommendations are conditional on the observed game state and the model’s marginal defensive assumptions. They are not equilibrium strategies against an opponent who knows the tendency.

Crisis habit regression. Under clock and score pressure, a policy can collapse toward a habitual action. A formal audit operator is:
\[
Q_t(a)=E\left[ETV(a)+\gamma V_{t+1}(s')\right],
\]
\[
\pi_t(a)=\mathrm{softmax}\left(Q_t(a)/\tau\right),
\]
\[
\pi_t^{\mathrm{crisis}}(a)=(1-\alpha_t)\pi_t(a)+\alpha_t h(a),
\]
where \(h(a)\) is the habit policy, \(\alpha_t\in[0,1]\) is a bounded stress-mixture weight, and \(\tau\) is a policy temperature. This is an audit formalism, not a paper equation. If \(\alpha_t\to1\), the player reverts to habit. The paper’s time-left result says “plots examining time remaining in the quarter reveal the effect of player fatigue, with a marked decrease in ETV as time elapses” [PAGE 12]. A recursive-theory alternative is that time left changes strategic urgency and opponent adjustment, not only fatigue. Without stall count, defender locations, and substitution data, the paper cannot separate those mechanisms.

Counter-trap. If the defense anticipates the habit \(h(a)\), its best response is chosen against \(h\), not against the marginal policy. The observed completion probability becomes closer to \(\pi(X\mid a_D^*)\) than to the model’s \(\pi(X)\). A thrower who habitually resets to the center under pressure can be baited into a lane trap; a thrower who habitually forces the sideline can be trapped against the boundary. The CPOE model would then attribute the result to thrower execution while omitting the defender’s anticipatory action. Clock. As time remaining falls, the continuation value \(V_{t+1}\) and the risk tolerance change. A field plot at “first quarter” and “11 minutes remaining” [PAGE 11] cannot be assumed to hold at late-clock, trailing, or leading states. The recursive audit must therefore evaluate habits, counter-habits, and clock state jointly.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The observed feature vector is \(X_{\mathrm{obs}}\), containing thrower and receiver coordinates, throw distance and angle, y differential and x differential, game quarter, quarter point, score differential, and time [PAGE 4]. It does not contain defender coordinates, stall count, weather, or biomechanical load. The paper explicitly lists future work including “stall count, teammate and defender locations, and other situational factors that are not currently captured systematically” [PAGE 16]. That admission is the basis for three cross-layer vetoes.

Physical veto. The sport has hard geometric and timing constraints: field dimensions of 80 yards by 53 ⅓ yards, 20-yard end zones, and a 7-second stall count [PAGE 3]. A model that predicts a throw to an out-of-bounds target, through the boundary, or beyond the thrower’s feasible release envelope has violated the physical layer. The field plots are “smoothed ETV for every possible throw given a disc location and game state” [PAGE 11], but smoothing is not a disc-flight model. XGBoost tree ensembles do not extrapolate aerodynamic lift, drag, or wind response. The physical veto therefore rejects any claim that a heat map is a physically valid throw prescription in sparse or boundary cells.

Biomechanical veto. The paper attributes the time-left pattern to “the effect of player fatigue” [PAGE 12], but it has no force plate, sprint load, heart rate, muscle oxygenation, or arm-load variable. Time remaining is confounded with score differential, possession urgency, substitution, and opponent strategy. The conditional model can be written as:
\[
P(Y\mid X_{\mathrm{obs}})=\sum_{B} P(Y\mid X_{\mathrm{obs}},B)P(B\mid X_{\mathrm{obs}}),
\]
where \(B\) is unobserved biomechanical state. Without measuring \(B\), the model cannot isolate a fatigue effect. A causal fatigue claim is vetoed unless a direct load variable is measured and survives adjustment for game state. Prediction: adding stall count and defender distance should attenuate the time-left SHAP contribution if the effect is strategic rather than purely physiological.

Weather veto. The dataset description contains no wind, precipitation, temperature, humidity, or playing-surface variables [PAGE 2]. Disc flight is aerodynamically sensitive to wind and grip, so the model’s conditional probability is an average over the historical weather distribution:
\[
P(Y\mid X_{\mathrm{obs}})=\sum_{W} P(Y\mid X_{\mathrm{obs}},W)P(W\mid X_{\mathrm{obs}}).
\]
If deployment weather is not exchangeable with training weather, \(P(Y\mid X_{\mathrm{obs}})\) is not transportable to a windy or rainy game. Any weather-specific prediction is therefore vetoed by absence of evidence. The physical, biomechanical, and weather layers jointly require that the model be treated as a conditional association operator under observed conditions, not as a causal simulator.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable reward scenarios. Each has a pass-fail test and a falsifiable prediction.

Veto 1: spatial-support calibration veto. Test: partition the field into fixed cells and, on held-out throws, compute calibration and Brier skill against the base scoring or completion rate in each cell. Pre-register that cells with low training density must not show systematically worse calibration than high-density cells. Prediction: the smoothed field plots that claim “every possible throw” [PAGE 11] will be least calibrated near sidelines, end-zone corners, and extreme throw angles. If sparse-cell Brier skill is below zero relative to the base rate, the “every possible throw” interpretation is vetoed and the plot must be labeled an interpolation over observed support. If sparse-cell calibration is not worse, the claim survives this veto.

Veto 2: aEC denominator-singularity veto. Test: compute the distribution of \(1-FV_p\) for all possessions, flag possessions with \(FV_p\) near one, and bootstrap top-player aEC rankings with and without those possessions. Prediction: the aEC formula [PAGE 7] will produce heavy-tailed contributions for possessions that begin near the end zone, and excluding near-singular possessions will change the top rankings. If the rank correlation across bootstrap resamples falls below a pre-registered threshold, or if the near-singular exclusion changes the top ten, then aEC cannot be called context-independent. The exact failure mode is \(FV_p=1\), where aEC is undefined, and \(FV_p\to1^-\), where small FV errors are amplified.

Veto 3: omitted-defender, stall, and weather causal veto. Test: augment the CP and FV models with defender distance or pressure, stall count, and weather variables, then compare CPOE and ETV rankings and calibration against the unaugmented model. Prediction: the paper’s future-work list identifies “stall count, teammate and defender locations, and other situational factors that are not currently captured systematically” [PAGE 16], so added pressure variables should improve calibration and should shift CPOE rankings for high-xCP safe throwers and low-xCP risk takers. If the augmented model materially changes rankings or eliminates the time-left SHAP effect, the original decision-quality interpretation is vetoed. If the augmented model leaves rankings and calibration unchanged, the original metric survives this counterfactual.
</RLVR_COUNTERFACTUAL_VETOES>
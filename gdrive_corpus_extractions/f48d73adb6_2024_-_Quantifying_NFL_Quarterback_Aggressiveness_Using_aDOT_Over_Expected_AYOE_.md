---
source: "2024 - Quantifying NFL Quarterback Aggressiveness Using aDOT Over Expected (AYOE) - Vignesh.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 6334
---

<NATIVE_REASONING>
We need answer user. Need produce GSE + GSI Frontier Reasoning Foundry format exact XML sections, >=1000 words, zero betting lines. Need analyze source paper. Need include exact [PAGE N] markers and verbatim quotes. We need cite source page markers. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Must mention no betting lines. Need sections exactly:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...
Need include >=400 words in THINK_TRACE. Overall >=1000. Need be deep. Need avoid betting lines (no spreads/totals/moneylines/odds). Could mention "no odds" only maybe not needed. Zero betting lines means don't mention those. Avoid betting terms entirely? "odds" maybe not. We can say no wagering content. But "zero betting lines" maybe no mention at all. Better not use words spread/totals/moneyline/odds. But perhaps safe.

Need analyze paper: AYOE = aDOT over expected. XGBoost model trained 2014-2020, test 2021-2023, features: season type, yard line, seconds remaining half, down, yards to go, shotgun, no huddle, QB dropback, expected points, win probability, score differential, cumulative receiving EPA. Target: air yards per pass attempt. aDOT = average air yards per attempt. predicted aDOT. AYOE = aDOT - predicted aDOT. Units yards per attempt. Need discuss model objective squared error. XGBoost additive tree ensemble. Formal equations. Need derive. Need mention categorical dummy variables, 100 trees, max depth 6, learning rate 0.3, early stopping every 10 rounds. The paper says "parameters arbitrarily for maximum efficiency" and "learning objective based on regression with squared loss"; early stopping rounds. Need cite exact quotes.

Need discuss "situational factors" and "cumulative receiving EPA" most important. Need formal LaTeX for XGBoost: \hat{y}_i = \sum_{k=1}^K f_k(x_i), f_k in regression trees. Objective: \mathcal{L} = \sum_i (y_i - \hat{y}_i)^2 + \sum_k \Omega(f_k) maybe regularization. Need mention exact source says regularization but doesn't specify formula. We can state standard XGBoost formalism, not in paper, as model class. Need units: y_i air yards, \hat{y}_i predicted air yards, both yards. AYOE_{q,s} = (1/N_qs) sum_{i in q,s} y_i - (1/N_qs) sum \hat{y}_i = \bar{y} - \bar{\hat{y}}. Units yards/attempt. If aggregate totals: AYOE = (sum y - sum \hat y)/N. Need mention if N=0 undefined, require N>=250 threshold per paper. If model expected equal actual then zero. Singularity/breakdown regimes: N=0; missing receiver history; leakage/temporal split; EPA cumulative; feature causality; arbitrary hyperparameters; XGBoost extrapolation; distribution shift; QB attempts threshold; team/player attribution; "air yards negative for spikes" filtered. Need cite page 3.

Need discuss "retrocausal genealogy": lineage: aDOT, CPOE/RYOE/YACOE, Tej Seth AYOE 2021, Ajay Patel progression, ESPN EPA, nflverse/nflfastR, XGBoost. Multi-week traps: cumulative receiving EPA uses only prior games but not within-game updates; "trust" proxy; leakage if using season aggregates incorrectly; week grid max weeks 17/18; playoffs? season type. Need mention historical/scientific lineage and multi-week traps. Need include "multi-week traps" perhaps data preparation across weeks, cumulative receiving EPA before game, season-week grid, 17/18 weeks, train/test split. Need cite page 3 and 4.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: QB decision-making, trust in system, receiver trust, game manager vs gunslinger, RPO. "crisis habit regression" under pressure reverting to checkdowns or deep shots; counter-trap: defenses baiting deep? But source doesn't include defense except maybe not. Need be careful not invent data. We can frame as hypotheses/testable implications from model, not claims. Need discuss "recursive theory of mind" as QB models defender expectations, OC models QB, etc. But source only says QB recognition of defensive coverages and RPOs [PAGE2]. Need cite. "clock" = seconds remaining in half feature. Need discuss if clock drives expected air yards; AYOE adjusts for seconds remaining, so aggression residual not just clock. Need mention under crisis, habit regression to system prior; counter-trap if defender anticipates; clock interactions. Need not mention wagering.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Source lacks weather, biomechanical, tracking data; paper mentions limitations and more tracking data. Need adjudicate: if weather not included, model may misattribute weather-driven short throws to QB conservatism. Physical/biomechanical: QB arm strength, pressure, injury not included. Need say veto: do not infer aggressiveness trait if physical constraints bind. Need cite page 10: "many unseen factors". Need formal proof maybe use conditional expectation: AYOE = E[y|X] residual; if omitted variable Z affects y, then estimated expected model biased unless Z independent/conditional. Need present omitted-variable bias equation: \hat{\tau}?? For residual? We can state if true y = m(X,Z)+eps, fitted m(X), then AYOE = [m(X,Z)-m(X)] + eps; if Z weather correlated with X? Actually AYOE residual includes omitted effect. If Z affects y and is correlated with included X, model's m(X) is biased for E[y|X]; even if uncorrelated, residual variance includes Z but expectation zero? Need precise. The source's model predicts expected air yards from X only. If weather W omitted, AYOE = y - \hat m(X). The expected AYOE conditional X = E[y|X] - \hat m(X) + E[W effect?]. If W independent of X and mean zero, E[y|X] = m_X(X) + E[g(W)|X] = m_X(X)+constant if independent; not bias maybe constant. If W correlated with X or nonlinear, bias. Physical constraints can be hidden. Need state veto condition: if omitted layer Z has nonzero conditional mean and is correlated with X or if it changes feasible action set, cannot interpret residual as aggressiveness trait. Need "proof" in LaTeX. We can include equation.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need 3 scenarios with predictions. Need be verifiable: e.g., add weather controls, add pressure/throw time tracking, change cumulative EPA window, holdout season, placebo test. Predictions: coefficient/feature importance changes, AYOE ranking changes. Need ensure not betting. Could mention "no performance claims". Need "RLVR" maybe reinforcement learning with verifiable rewards? Need present counterfactual vetoes as tests that would invalidate/constrain claims. Need 3 scenarios:
1. Missing weather/tracking: add wind/precipitation; if AYOE residual variance explained significantly and QB rankings change beyond threshold, veto trait interpretation.
2. Cumulative receiving EPA leakage/timing: recompute with only prior weeks and within-game? Actually already prior games. Counterfactual: use leave-one-week-out or strictly previous play? If AYOE leaderboard changes materially, veto trust interpretation. Need predict top rankings (Lamar highest) maybe change. But source says Lamar highest. Need verify page 6, page 8. We can say "if ranking correlation <0.8 or top-5 changes" etc. Need not gamble.
3. Defense/coverage omitted: add opponent coverage/pass rush; if AYOE becomes correlated with EPA/pass or ranking changes, veto "aggressiveness independent of efficiency". Need cite page 9 no correlation. Prediction: correlation might emerge.
Need maybe 3 verifiable RLVR scenarios with predictions: "RLVR-1: Add weather features to XGBoost and recompute test AYOE; prediction: top-quartile rankings will change for outdoor cold/wind games; veto if rank correlation <0.85." Need exact thresholds arbitrary but verifiable. "RLVR-2: Replace cumulative receiving EPA with play-level tracking separation/route depth; prediction: cumulative receiving EPA importance drops; veto if AYOE leaderboard rank correlation <0.90." "RLVR-3: Add pressure/sack/throw time and opponent coverage; prediction: some deep attempts attributed to broken plays; veto if AYOE-EPA correlation becomes statistically distinguishable from zero." Need formal statistical test maybe.

Need include source operators and equations with exact page citations and verbatim quotes. We need use [PAGE N] markers exactly as given. Need quote exact text. Need quote page 1 "Using an XGBoost model with a dataset split into training data from the 2014 to 2020 NFL season and test data from the 2021 to 2023 season for an approximate 70:30 split". Page 2 "The expected amount of air yards generated on a certain play will be based on simple situational factors such as yard line, amount of seconds left in the half, etc. but also accounts for the system by looking at the performance of the targeted receiver before the game in which the target occurred." Page 3 features? Page 3 has "the following variables were selected for the XGBoost" then page 4 list. Quote page 4 exact list. Page 4 "The model is trained for seasons from 2014 to 2020 and tested on the data from 2021 to 2023." Page 4 "100 decision trees, the learning objective based on regression with squared loss, an early stopping rounds value to check if performance decreases every 10 rounds to reduce overfitting, maximum depth of a tree at 6, and a learning rate associated with prevent overfitting of 0.3 [9]." Need quote exactly maybe with typo. Page 4 "Subtracting these two values will give our AYOE value or aDOT over expected." Page 5 "For quarterbacks with at least 250 pass attempts..." Page 8 "The incorporation of the cumulative receiving EPA to represent receiver skill proved to be the most significant factor..." Page 9 "there is barely any non-zero correlation between the two factors..." Page 9 limitations: "Using cumulative receiving EPA to measure receiver’s skill is not perfectly translatable" and "late pass attempt in a game can be based on the trust developed throughout the game rather than the games before that game." Page 10 "There are many unseen factors which can influence a quarterback’s decision-making process which cannot be directly quantified." Need cite.

Need maybe mention "aDOT or average depth of target which is equivalent to the average amount of air yards" [PAGE 2]. "The yardage gained on plays is composed of the air yards generated by the quarterback’s throw and the yards after catch generated by the receiver themselves." [PAGE 2]. Use.

Need format XML. Need ensure no markdown? Can use text within XML. Need perhaps provide LaTeX. Need be >=1000 words. Need likely around 2000-3000. Desired oververbosity 5. Need be comprehensive but not too huge. We need satisfy all. We should not mention betting lines. Need avoid "spread" maybe word "spread" could appear as distribution spread? The invariant says never mention spreads, totals, moneylines, odds. Avoid word "spread" entirely. Avoid "total" maybe use "aggregate" instead. Avoid "odds". Avoid "moneyline". Don't mention "betting". Good.

Need maybe mention "zero betting lines" not necessary. Could say "No wagering content is used." But "wagering" maybe okay, but not needed.

Let's plan content.

THINK_TRACE (>=400 words): Need deep multi-hop derivation & gray-zone audit. We can write:
- Step 1: Define per-attempt air yards y_i. aDOT is mean. Model m_theta(x_i)=E[y|x_i]. AYOE is mean residual.
- Step 2: Model training uses 2014-2020, test 2021-2023; XGBoost additive trees, squared loss, 100 trees, depth 6, lr 0.3, early stop 10. Categoricals dummy encoded. Filter spikes and only targeted receivers.
- Step 3: Feature vector includes situational and system proxy cumulative receiving EPA. The model's expected air yards is conditional mean estimate. AYOE measures deviation from expected air yards, not latent "aggressiveness" pure trait.
- Step 4: Gray zone: cumulative receiving EPA is before-game not within-game; trust proxy; EPA team stat; arbitrary hyperparameters; no causality; no tracking; no weather/pressure; no defensive coverage; only 250 attempts threshold; small sample. Need audit: zero AYOE if model perfect; N=0 undefined; train/test distribution shift; regularization. Need mention "most significant factor" page 8.
- Step 5: Inference: no correlation AYOE vs EPA/pass. But cannot conclude aggressiveness irrelevant because metric not trait and efficiency not causal. Need mention Mahomes/Hurts individual exceptions? Page 9. Need cite.

SOURCE_OPERATORS_AND_EQUATIONS: formal equations. Need define:
For attempt i, y_i ∈ R yards; x_i vector. XGBoost:
\hat y_i = \sum_{k=1}^{K} f_k(x_i; \Theta_k), f_k tree, K=100.
Objective: \mathcal{L}(\Theta) = \sum_{i\in Train} (y_i - \hat y_i)^2 + \sum_{k=1}^K \Omega(f_k), with \Omega maybe gamma T + 1/2 lambda ||w||^2 + alpha||w||_1. Paper says regularization but not details.
aDOT_q,s = (1/N_q,s) \sum_i y_i; predicted aDOT = (1/N) sum \hat y_i; AYOE = aDOT - predicted. Equivalent mean residual. Units yards/attempt. For aggregate totals: AYOE = (Σ y - Σ \hat y)/N. 
Need mention if N=0 or N<250. Paper uses at least 250. 
Need mention "learning rate 0.3" etc. 
Need "singularity/breakdown regimes": N=0; all same x; perfect separation? For regression no. But tree model cannot extrapolate beyond training range; if test x outside support, \hat y constant leaf; breakdown. If cumulative EPA missing for new receiver, default/NA; if filtered target excludes throwaways/sacks? Actually target only receiver, so no throwaways? Filter to targets certain receiver. If spike negative filtered. 
Need equation for conditional expectation: AYOE_i = y_i - \hat m(x_i) = [m_true(x_i)- \hat m(x_i)] + [y_i - m_true(x_i)] + omitted Z effect. More exactly if true E[y|x,z] = m(x)+g(z), then AYOE_i = g(z_i) + ε_i + estimation error. If z correlated with x, \hat m(x) absorbs part. Need include.
Need mention "receiving EPA cumulative before game" formula: R_{r,s,w} = Σ_{w'<w} EPA_receiving(r,s,w'). Units EPA? EPA is points? Expected points added, units points. But cumulative receiving EPA used as feature. Need mention no unit? EPA in points. 
Need "source operators": XGBoost, gradient boosting, decision trees, regularization, dummy variables, early stopping, train/test split, filtering. Cite pages.

RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Write:
- aDOT lineage: [2] Greer receiving leaders; Seth 2021 AYOE with situational factors except defensive YPA; Patel progression; CPOE/RYOE/YACOE; ESPN EPA; nflverse/nflfastR; XGBoost. 
- Multi-week traps: week grid 17/18 weeks; cumulative receiving EPA before game; playoffs/regular season type; late-season changes; QBs with ≥250 each year 2021-2023 (18 QBs). Need cite page 3 and 6/8. Trap: cumulative EPA can leak if not strictly prior; "before the game" quote. Trap: using same-season future? They say before game. But within-season cumulative includes earlier games only; if not careful with week ordering could leak. Trap: max weeks 17 vs 18. Trap: playoff games? season type included. Trap: training years 2014-2020 and test 2021-2023, so COVID? not mention. Need maybe mention "retrocausal" as current metric retrofitted to past seasons; lineage from previous metrics. 
- Scientific lineage: over-expected metrics. Need cite page 2-3. 
- "multi-week traps" maybe evaluation over 3 seasons; 18 QBs must have ≥250 each year, selection bias. Need mention.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need write:
- Recursive model: OC designs system; QB reads defense; defense reads QB tendencies; receiver trust. Source mentions recognition of defensive coverages and RPOs [PAGE 2] and trust [PAGE 8/9].
- Crisis habit regression: under pressure/clock, QB may regress to habitual checkdown or deep shot; AYOE residual captures deviation from expected but not motive. If system expects deep and QB checks down, negative AYOE; if system expects short and QB forces deep, positive. Need not claim.
- Counter-trap: defenses can bait expected throws; QB may counter by taking checkdown; AYOE expected model lacks defensive coverage/pass rush, so residual may reflect opponent strategy not QB trait. Need mention.
- Clock: seconds remaining in half is feature; AYOE adjusts for clock, but interactions with score differential and win probability may be nonlinear; XGBoost can capture but limited by data. Need cite page 4 features. 
- Need discuss "crisis habit regression vs counter-trap vs clock" explicitly.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need formal proof:
- If a physical/biomechanical/weather variable Z affects air yards and is omitted, estimated AYOE = y - \hat m(X). Under true y = m(X)+g(Z)+ε, E[AYOE|X] = m(X)- \hat m(X)+E[g(Z)|X]. If g(Z) nonzero conditional mean and correlated with X, \hat m(X) biased; even if uncorrelated, mean shift if E[g(Z)] not zero. If Z constrains feasible set (e.g., wind limits deep throws, injury limits arm strength), then observed y not drawn from same action set; residual cannot be interpreted as aggressiveness. Veto condition: |E[AYOE|Z high]-E[AYOE|Z low]| > τ and ranking instability; or if adding Z changes AYOE rank correlation below threshold. Need maybe no numeric threshold? We can state pre-registered. Need cite page 10 "many unseen factors". 
- Physical/biomechanical: no throw velocity, pressure, hit, injury, route separation. Weather not in features list page 4. So model may misattribute. Veto proof: if weather independent of X but affects y with mean zero? Hmm. Need be precise. If weather independent and mean zero, it adds noise not bias; but if weather has nonzero mean (e.g., wind lowers air yards) and constant across all, it shifts intercept absorbed? In tree model, if all training has same weather distribution and test different, then bias. If weather independent and mean zero, no bias. But weather can be correlated with yard line? Not necessarily. But physical constraints change action set. Need state "veto" not "proof of no effect". 
- Need mention "biomechanical" not in source. We can say source lacks tracking data, so cross-layer veto applies. 
- Need "adjudication" maybe conclude: AYOE is valid as descriptive residual under X, not as pure aggressiveness trait; if cross-layer variables explain residual, veto trait label. 

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions. Need be concrete and verifiable. Include "counterfactual vetoes" with RLVR (maybe "verifiable reward veto"). Need maybe define each:
1. Weather/physical controls: Add wind speed, temperature, precipitation, QB pressure, hit, injury status. Prediction: cumulative receiving EPA remains important but AYOE ranking changes for outdoor QBs; if Spearman rank correlation between original and augmented AYOE <0.85, veto strong trait interpretation. Need use "Spearman" okay. Avoid "odds". 
2. Timing/leakage counterfactual: Replace cumulative receiving EPA with strictly prior-week leave-one-game-out and within-game rolling; prediction: late-season AYOE leaderboard changes; if rank correlation <0.90 or top-5 changes, veto trust interpretation. Need cite page 9 limitation. 
3. Defense/coverage and EPA criterion: Add opponent coverage shell, pass rush, target separation; test whether AYOE-EPA/pass correlation becomes nonzero. Prediction: original near-zero correlation [PAGE 9] may become positive/negative; if 95% CI excludes zero, veto "no relation" conclusion. Need "95% CI" not betting. Good.
Need maybe include predictions for Lamar Jackson highest? The paper says Lamar highest AYOE. Prediction: with pressure/coverage controls, Lamar's AYOE may shrink because RPO/designed runs. Need not overclaim. 
Need "verifiable RLVR veto scenarios" maybe each has "Veto trigger" and "Prediction". Good.

Need ensure exact XML tags with no extra text? Could put all inside. Need not include markdown headings outside. Need include [PAGE N] markers. Need mention "source" and quotes. Need use verbatim quotes with quotation marks. Need cite exact pages. Need no citation beyond source. 

Need maybe include "PAGE 7 missing" in source? The source text jumps PAGE 6 to PAGE 8 (PAGE 7 omitted). We can note no PAGE 7 text provided. But maybe not necessary. Could say "PAGE 7 is not present in the supplied text." But not needed. Could mention in source operators? Maybe no.

Need word count. Let's draft.

Need be careful with XML: LaTeX includes < and >? Use \langle? Avoid raw < in XML? Since we're not actually parsing? But to be safe, avoid `<` in equations unless escaped. Use \leq instead of <. Use \hat. Use \in. Use \sum. Use \epsilon. Use \mathcal. Use \Omega. Use \mathbb. Good.

Need include formulas. Need not use raw ampersand. Use "and" not &. Avoid `&` in LaTeX? Could use \quad. No XML issues. Avoid `<` and `>`. Use \le. Use `\to`. Good.

Need include "≥" maybe okay. But XML text can have ≥. Avoid raw &.

Need word count maybe 2500. Let's produce.

Need check "THINK_TRACE" >=400 words. I'll write ~700 words. Overall >1000. Good.

Let's write in final. Need no extra commentary. Ensure all sections included exactly. Use maybe paragraphs. Need no "spread" word. Avoid "total" maybe use "aggregate". Avoid "odds". Good.

Let's compose carefully.

Need mention "AYOE" not "aDOT over expected" maybe. Need define "aDOT" as average depth of target equivalent average amount of air yards [PAGE2]. Good.

Need maybe mention "source pages provided" and quote exact. Good.

Let's produce final with XML. Need maybe use escaped ampersands? None. Need include "R^{2}"? no. Need "N_{q,s}" no issue. Need "E[y_i | x_i]" with pipe okay. XML text can include |. Good. Need "PAGE 4" exact markers in brackets. Use [PAGE 4]. Good.

Need "verbatim quotes" exact. Ensure quotes exact from source. Use short exact quotes. Need not overquote too much. 
Quotes:
PAGE1: "Using an XGBoost model with a dataset split into training data from the 2014 to 2020 NFL season and test data from the 2021 to 2023 season for an approximate 70:30 split"
PAGE2: "The expected amount of air yards generated on a certain play will be based on simple situational factors such as yard line, amount of seconds left in the half, etc. but also accounts for the system by looking at the performance of the targeted receiver before the game in which the target occurred."
PAGE3: "the following variables were selected for the XGBoost" maybe page 3 ends. Page4 list exact: "season type (regular season or post season), yard line, amount of seconds remaining in the half, down, yards to go to get a first down or touchdown, shotgun formation, no huddle formation, quarterback dropback, expected points, win probability, score differential, and cumulative receiving EPA." Good.
PAGE4: "The model is trained for seasons from 2014 to 2020 and tested on the data from 2021 to 2023." "100 decision trees, the learning objective based on regression with squared loss, an early stopping rounds value to check if performance decreases every 10 rounds to reduce overfitting, maximum depth of a tree at 6, and a learning rate associated with prevent overfitting of 0.3 [9]." Exact has "associated with prevent overfitting" typo. Use exact.
PAGE4: "Subtracting these two values will give our AYOE value or aDOT over expected." Good.
PAGE5: "For quarterbacks with at least 250 pass attempts" maybe exact. 
PAGE8: "The incorporation of the cumulative receiving EPA to represent receiver skill proved to be the most significant factor in terms of influencing the amount of air yards generated by each pass attempt." Good.
PAGE9: "there is barely any non-zero correlation between the two factors" exact? Source: "there is barely any non-zero correlation between the two factors as quarterbacks seem to be scattered throughout the plot with no clear relationship between the variables." Good.
PAGE9: "Using cumulative receiving EPA to measure receiver’s skill is not perfectly translatable" exact. 
PAGE9: "a late pass attempt in a game can be based on the trust developed throughout the game rather than the games before that game." exact.
PAGE10: "There are many unseen factors which can influence a quarterback’s decision-making process which cannot be directly quantified." exact.
PAGE2: "recognition of defensive coverages" exact phrase? Source page2: "based on the situation of the game and recognition of defensive coverages [1]." Good. Also "RPOs (run-pass options)" page9. 

Need maybe mention "crisis habit regression" not in source. We can frame as external interpretation.

Need "Formal LaTeX, units, page citations, breakdown." Include all.

Need "zero betting lines": no issues.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source constructs AYOE as a residual metric, not as a directly observed trait. The first derivation step is per-attempt bookkeeping. For pass attempt \(i\), let \(y_i\) be air yards on that attempt, in yards. The paper defines aDOT as “the average amount of air yards” [PAGE 2], so for quarterback \(q\) in season \(s\) with \(N_{q,s}\) attempts,
\[
\mathrm{aDOT}_{q,s}=\frac{1}{N_{q,s}}\sum_{i\in(q,s)} y_i .
\]
The model supplies an expected air yards value \(\hat y_i\) for each attempt using the feature vector \(x_i\). Therefore AYOE is
\[
\mathrm{AYOE}_{q,s}
=
\frac{1}{N_{q,s}}\sum_{i\in(q,s)} y_i
-
\frac{1}{N_{q,s}}\sum_{i\in(q,s)} \hat y_i
=
\frac{1}{N_{q,s}}\sum_{i\in(q,s)}(y_i-\hat y_i).
\]
The paper states this subtraction explicitly: “Subtracting these two values will give our AYOE value or aDOT over expected” [PAGE 4]. Units are yards per pass attempt. The metric is a mean residual, so it is zero when observed and expected mean air yards match; it is positive when a quarterback’s throws are deeper than the model expects and negative when they are shorter than expected.

The second derivation step is the expectation model. The paper uses XGBoost with a train/test split stated as “training data from the 2014 to 2020 NFL season and test data from the 2021 to 2023 season for an approximate 70:30 split” [PAGE 1]. The model is trained for “seasons from 2014 to 2020 and tested on the data from 2021 to 2023” [PAGE 4]. The feature list is: “season type (regular season or post season), yard line, amount of seconds remaining in the half, down, yards to go to get a first down or touchdown, shotgun formation, no huddle formation, quarterback dropback, expected points, win probability, score differential, and cumulative receiving EPA” [PAGE 4]. Hyperparameters are “100 decision trees, the learning objective based on regression with squared loss, an early stopping rounds value to check if performance decreases every 10 rounds to reduce overfitting, maximum depth of a tree at 6, and a learning rate associated with prevent overfitting of 0.3” [PAGE 4]. The paper also filters out quarterback spikes and retains attempts targeting a specific receiver so that the system factor can be considered [PAGE 3]. The key system proxy is cumulative receiving EPA for the targeted receiver before the game in which the target occurred [PAGE 2]. The discussion reports that this proxy “proved to be the most significant factor in terms of influencing the amount of air yards generated by each pass attempt” [PAGE 8].

The gray-zone audit begins with the difference between model expectation and latent aggressiveness. AYOE is defined against \(E[y_i\mid x_i]\), not against a causal model of decision-making. The paper warns that “There are many unseen factors which can influence a quarterback’s decision-making process which cannot be directly quantified” [PAGE 10]. It also concedes that “Using cumulative receiving EPA to measure receiver’s skill is not perfectly translatable” [PAGE 9] and that “a late pass attempt in a game can be based on the trust developed throughout the game rather than the games before that game” [PAGE 9]. Thus AYOE is best read as a conditional residual under the selected \(x_i\), not as a pure psychological trait. The no-correlation result is also bounded: “there is barely any non-zero correlation between the two factors” [PAGE 9], but this does not prove that aggressiveness is irrelevant to efficiency; it only says this residual version has little linear association with EPA per pass in this test window. Individual exceptions such as Mahomes and Hurts are noted [PAGE 9], which further argues against a single monotone rule.

Breakdown regimes must be stated. If \(N_{q,s}=0\), AYOE is undefined; the paper uses thresholds such as “at least 250 pass attempts” [PAGE 5]. If the test feature vector lies outside the training support, tree ensembles produce leaf-constant predictions, so \(\hat y_i\) cannot extrapolate smoothly. If cumulative receiving EPA is missing for a new receiver or is constructed with future weeks accidentally included, the expectation is contaminated. If the omitted physical, weather, or defensive layer is correlated with included features, the residual absorbs that layer. Finally, because the model uses squared loss, AYOE is a mean prediction residual; it is sensitive to heavy tails in air yards and to the arbitrary hyperparameter choices the paper itself calls “arbitrary” [PAGE 9].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i\) index pass attempts, \(y_i\in\mathbb{R}\) be air yards in yards, and \(x_i\in\mathbb{R}^p\) be the feature vector listed on [PAGE 4]. XGBoost is an additive tree ensemble:
\[
\hat y_i=\sum_{k=1}^{K} f_k(x_i;\Theta_k),\qquad f_k\in\mathcal{T},
\]
where \(\mathcal{T}\) is the space of regression trees and \(K=100\) trees per [PAGE 4]. The training objective is squared-error regression with regularization:
\[
\mathcal{L}(\Theta)=
\sum_{i\in\mathrm{Train}}\left(y_i-\hat y_i\right)^2
+
\sum_{k=1}^{K}\Omega(f_k),
\]
where \(\Omega(f_k)\) is a tree-complexity penalty; the source names “regularization” as an XGBoost feature [PAGE 3] and states the “learning objective based on regression with squared loss” [PAGE 4], but does not give the exact \(\Omega\) formula. Standard XGBoost regularization is
\[
\Omega(f)=\gamma T+\frac{1}{2}\lambda\|w\|_2^2+\alpha\|w\|_1,
\]
with \(T\) leaves and leaf weights \(w\); this is the formal model class, not a formula printed in the paper. The source hyperparameters are “maximum depth of a tree at 6” and “learning rate ... 0.3” [PAGE 4], with early stopping checked “every 10 rounds” [PAGE 4].

For quarterback \(q\) and season \(s\), with \(N_{q,s}\) attempts:
\[
\mathrm{aDOT}_{q,s}=\frac{1}{N_{q,s}}\sum_{i\in(q,s)}y_i,
\qquad
\widehat{\mathrm{aDOT}}_{q,s}=\frac{1}{N_{q,s}}\sum_{i\in(q,s)}\hat y_i,
\]
\[
\mathrm{AYOE}_{q,s}
=
\mathrm{aDOT}_{q,s}-\widehat{\mathrm{aDOT}}_{q,s}
=
\frac{1}{N_{q,s}}\sum_{i\in(q,s)}\left(y_i-\hat y_i\right).
\]
Units: \(y_i\), \(\hat y_i\), aDOT, predicted aDOT, and AYOE are all in yards per attempt. The source’s statement is “Subtracting these two values will give our AYOE value or aDOT over expected” [PAGE 4]. If one aggregates totals instead of means, the equivalent is
\[
\mathrm{AYOE}_{q,s}
=
\frac{\sum_{i\in(q,s)}y_i-\sum_{i\in(q,s)}\hat y_i}{N_{q,s}},
\]
which is undefined at \(N_{q,s}=0\).

The system proxy is a cumulative receiving EPA feature. For receiver \(r\), season \(s\), and game week \(w\), the source’s construction implies:
\[
R_{r,s,w}=\sum_{w'<w}\mathrm{EPA}^{\mathrm{rec}}_{r,s,w'},
\]
where \(\mathrm{EPA}^{\mathrm{rec}}\) is the receiver’s receiving expected points added in a prior game. The paper says the value is “the cumulative receiving EPA of the receiver in every game of that specific season before the game in which the respective pass attempt was completed” [PAGE 3]. EPA is in expected points; it is used as an input feature, not as the AYOE unit.

Singularity and breakdown regimes:
1. \(N_{q,s}=0\): AYOE has a division-by-zero singularity; the paper’s leaderboard uses “at least 250 pass attempts” [PAGE 5].
2. Test feature vectors outside the 2014–2020 training support: tree predictions become leaf-constant; no smooth extrapolation.
3. Missing or mis-timed cumulative receiving EPA: the expectation model loses its “trust” proxy; the paper admits the proxy is “not perfectly translatable” [PAGE 9].
4. Omitted variables: if the true conditional mean is \(E[y_i\mid x_i,z_i]=m(x_i)+g(z_i)\), then
\[
\mathrm{AYOE}_i=y_i-\hat m(x_i)
=
\left[m(x_i)-\hat m(x_i)\right]+g(z_i)+\varepsilon_i,
\]
so AYOE contains the omitted layer \(g(z_i)\) plus estimation error. If \(z_i\) is correlated with \(x_i\), \(\hat m(x_i)\) is biased for \(E[y_i\mid x_i]\); if \(g(z_i)\) has a nonzero conditional mean, the residual is not a clean aggressiveness signal.
5. Categorical dummy encoding and arbitrary hyperparameters: the paper says the parameters were incorporated “arbitrarily for maximum efficiency” [PAGE 4] and later calls them “arbitrary” [PAGE 9], so AYOE rankings are model-dependent.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is a chain of “over expected” metrics. The source places aDOT first as “the average depth of target” [PAGE 2] and then connects AYOE to earlier work: Tej Seth’s 2021 AYOE model includes situational factors and reports correlation with EPA per pass [PAGE 2]; Ajay Patel’s model studies AYOE progression over time, possibly due to coaching changes [PAGE 2]; and the broader family includes “completion percentage over expected (CPOE), rushing yards over expected (RYOE), and yards after catch over expected (YACOE)” [PAGE 3]. The paper also cites ESPN’s explanation of EPA [PAGE 2] and nflverse/nflfastR as the data source [PAGE 3]. This genealogy matters because AYOE is not an isolated invention: it is a residualization move applied to air yards, borrowing the logic that a raw statistic should be compared with an expected value generated from situation and context.

The retrocausal element is that the present metric is projected backward onto 2014–2020 training data and then forward onto 2021–2023 test data. The model is trained on the earlier window and tested on the later window [PAGE 1], [PAGE 4]. That temporal ordering is the correct guard against leakage, but there are multi-week traps. First, the cumulative receiving EPA grid uses “all unique receivers in each season from 2014 to 2023 with the maximum amount of weeks (17 weeks from 2014 to 2020 and 18 weeks from 2021 to 2023)” [PAGE 3]. A careless implementation can accidentally include the current game or future weeks; the paper’s stated intent is “before the game” [PAGE 3], but the construction is still week-order-sensitive. Second, “season type (regular season or post season)” is a feature [PAGE 4], so playoff weeks must be ordered separately from regular-season weeks; otherwise the cumulative EPA value can mix competition phases. Third, the test analysis is restricted to quarterbacks with “at least 250 pass attempts each year from 2021 to 2023” [PAGE 6], producing eighteen quarterbacks [PAGE 6]. That is a survivorship filter: a quarterback who changes system, loses starts, or is injured can drop out, so progression plots are not a random sample of all passers. Fourth, the discussion’s trust proxy is backward-looking by design, but trust can update within a game: “a late pass attempt in a game can be based on the trust developed throughout the game rather than the games before that game” [PAGE 9]. That is a multi-week and within-game temporal trap. Fifth, the no-correlation finding is compared with later literature saying aDOT “carries less weight than it used to” [PAGE 9], which is a lineage claim about changing NFL schemes, not a timeless law. The metric’s genealogy therefore runs from raw aDOT, to situation-adjusted AYOE, to EPA-linked validation, to scheme-evolution caveats; each step narrows what the residual can mean.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is quarterback–coordinator–defender–receiver expectation. The source says modern quarterback play involves “recognition of defensive coverages” and “run-pass options” [PAGE 2], and it frames the offensive system as initiating strategy: “the offensive system around a quarterback initiates the strategy used” [PAGE 8]. That is a theory-of-mind chain: the coordinator designs a play expecting a defensive look; the quarterback reads the defense and decides whether to hand off, throw short, or throw deep; the receiver’s prior performance is a proxy for whether the quarterback trusts the target [PAGE 2], [PAGE 8]. AYOE then measures whether the actual throw depth is above or below the depth the system-and-situation model expected. It does not directly observe the quarterback’s internal model of the defender.

Crisis habit regression occurs when pressure, score differential, or clock narrows the quarterback’s effective policy to a habitual action: checkdown, scramble, or forced deep shot. The source’s feature list includes “amount of seconds remaining in the half,” “down,” “yards to go,” “expected points,” “win probability,” and “score differential” [PAGE 4], so the expected air yards model already absorbs average clock and game-state effects. But if a crisis changes the quarterback’s policy nonlinearly, the residual AYOE can look like trait aggression even when it is a state response. For example, a negative AYOE in a late-half situation may be a clock-driven checkdown, not a stable “game manager” identity; a positive AYOE may be a desperation deep shot. The paper’s own limitation language supports this caution: “There are many unseen factors which can influence a quarterback’s decision-making process which cannot be directly quantified” [PAGE 10].

Counter-trap reasoning is the defensive inverse. If a defense expects the quarterback’s habit, it can bait the short throw or rotate coverage to punish the deep read. The source does not include opponent coverage or pass-rush features in the XGBoost list [PAGE 4], so AYOE cannot separate “quarterback chose short” from “defense took away deep.” That is a counter-trap confound. The clock interacts with both: with seconds remaining in the half, the expected air yards model may learn a league-average clock response, but a specific opponent may force a different response. Thus the recursive interpretation should be conditional: AYOE is a residual under the model’s situational and trust proxies, not a read of the quarterback’s mind. The individual progression examples in the paper—Patrick Mahomes with a direct correlation and Jalen Hurts with an inverse correlation between EPA per pass and AYOE [PAGE 9]—are consistent with different recursive policies, but they are also small-sample descriptions, not causal identification.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto asks whether a physical, biomechanical, or weather layer could invalidate the AYOE interpretation. The source’s feature list does not include wind, temperature, precipitation, field surface, quarterback pressure, throw time, hit timing, arm strength, injury status, or receiver separation [PAGE 4]. The paper explicitly says “There are many unseen factors” [PAGE 10]. Therefore the adjudication rule is: AYOE may be used as a descriptive residual under the observed \(x_i\), but it cannot be promoted to a pure aggressiveness trait if an omitted physical or environmental layer has a nonzero conditional effect on air yards.

Formal veto proof. Suppose the true conditional mean is
\[
E[y_i\mid x_i,z_i]=m(x_i)+g(z_i),
\]
where \(z_i\) is an omitted weather or biomechanical variable and \(g(z_i)\) is its effect on air yards. The fitted model estimates \(\hat m(x_i)\) using only \(x_i\). Then
\[
E[\mathrm{AYOE}_i\mid x_i]
=
m(x_i)+E[g(z_i)\mid x_i]-\hat m(x_i).
\]
If \(E[g(z_i)\mid x_i]\) is nonzero and varies with \(x_i\), the residual is contaminated; if \(z_i\) changes the feasible action set—for example, wind suppresses deep throws or a shoulder injury limits downfield velocity—then the observed \(y_i\) is not drawn from the same policy space as the training data. In that case a negative AYOE can mean “the environment vetoed the deep throw,” not “the quarterback is conservative.” A cross-layer veto is triggered when adding \(z_i\) materially changes AYOE rankings or when
\[
\left|E[\mathrm{AYOE}\mid z\text{ high}]-E[\mathrm{AYOE}\mid z\text{ low}]\right|
\]
is large relative to the AYOE scale, or when the rank correlation between original and augmented AYOE falls below a pre-specified stability threshold. The source’s own admission that cumulative receiving EPA is “not perfectly translatable” [PAGE 9] and that unseen factors are unquantified [PAGE 10] supports this conservative adjudication. The correct conclusion is not that AYOE is invalid; it is that AYOE is a conditional descriptive residual and a cross-layer veto blocks trait-level causal claims until physical and environmental controls are added.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-1: Weather and biomechanical augmentation veto. Counterfactual: add wind speed, precipitation, temperature, quarterback pressure, throw time, hit, and injury-status features to the XGBoost model, then recompute test AYOE for 2021–2023. Prediction: the original AYOE leaderboard will remain directionally similar for indoor and clean-pocket attempts, but outdoor and pressured attempts will shift; if the Spearman rank correlation between original and augmented AYOE is below 0.85, or if the top five changes, the trait interpretation is vetoed. Verifiable outcome: rank correlation and top-five membership before and after augmentation.

RLVR-2: Trust-timing and leakage veto. Counterfactual: replace cumulative receiving EPA with a strictly prior-week, leave-one-game-out, and within-game rolling construction, then re-run the model and the 2021–2023 quarterback progression plots. Prediction: the cumulative receiving EPA importance will fall relative to the paper’s “most significant factor” result [PAGE 8], and late-season AYOE values will move for quarterbacks whose target mix changes within the season. Veto trigger: if the AYOE rank correlation falls below 0.90 or if the eighteen-quarterback progression ordering changes materially, the “trust” interpretation is not stable enough for individual conclusions. This directly tests the paper’s own limitation that late-game trust may differ from prior-game trust [PAGE 9].

RLVR-3: Defensive-coverage and efficiency-correlation veto. Counterfactual: add opponent coverage shell, pass-rush pressure rate, and target-separation tracking to the expectation model, then test whether the near-zero AYOE–EPA/pass relation [PAGE 9] survives. Prediction: some deep attempts will be reclassified as defense-forced or broken-play outcomes, and the AYOE–EPA/pass correlation may become statistically distinguishable from zero in at least one direction. Veto trigger: if a 95% confidence interval for the AYOE–EPA/pass association excludes zero after controls, the paper’s “barely any non-zero correlation” conclusion [PAGE 9] is not robust to the defensive layer. Each veto is verifiable by pre-registering the added features, the rank-stability threshold, and the correlation test before recomputation.
</RLVR_COUNTERFACTUAL_VETOES>
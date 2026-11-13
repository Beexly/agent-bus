---
source: "2019 - A Data Driven Goalkeeper Evaluation Framework - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 7204
---

<NATIVE_REASONING>
We need answer as GSE+GSI frontier reasoning foundry. Need use source text. Need produce >=1000 words across exact XML sections. Need no betting lines. Need formal LaTeX, units, citations [PAGE N], verbatim quotes. Need deep derivation/gray-zone audit >=400 words in THINK_TRACE. Must obey zero betting lines, zero toy equations. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. We have sports paper about goalkeeper evaluation. Need perhaps interpret "crisis habit regression vs counter-trap vs clock" and "retrocausal genealogy". Need be careful: user likely wants analytical audit of paper. Need include exact section names. Need cite pages. Need perhaps mention not betting. Need discuss metrics: GSAA, PSxG, xC, CLCAA, PD, DT, TPO, ΔPL, matching. Need formal equations with units. Need identify breakdown regimes/singularities. Need >1000 words; maybe 2000. Desired oververbosity 5. Need ensure all exact XML sections and content. We can include no markdown? XML tags okay. Need mention source operators and equations. Need "gray-zone audit" includes assumptions and traps. Need "RETROCAUSAL_GENEALOGY" historical lineage and multi-week traps. "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. We need adapt to goalkeeper evaluation: crisis habit regression = under pressure goalkeeper reverts to long clearances / conservative behavior; counter-trap = matching algorithm that selects similar profile but ignores league translation; clock = one-season sample, temporal leakage, pressure events, 20s/45s outcome windows. Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need map physical/biomechanical/weather constraints to metric invalidation: turf, rain, wind, ball flight, goalkeeper anthropometrics, reaction time, dive mechanics, cross claiming, defensive territory. Need "veto proof" perhaps they want if any prediction can't be made due to cross-layer constraints. Need include 3 verifiable RLVR counterfactual veto scenarios + predictions. Need think of "RLVR" maybe Reinforcement Learning with Verifiable Rewards? We can create counterfactual scenarios related to metrics. Need predictions verifiable. No betting lines.

Need exact citations and verbatim quotes. Need cite [PAGE N] markers. Need quotes from pages. Need use quotes exact. Must include page citation and verbatim quotes. We can quote short phrases.

Let's plan structure:

<TAG> content.

THINK_TRACE >=400 words. Deep multi-hop derivation & gray-zone audit. Start: source paper's objective. Derive chain: responsibilities -> event data -> shot-stopping -> PSxG logistic -> GSAA -> standardization -> positional deviations -> xC -> CLCAA -> DT -> TPO -> ΔPL -> matching. Discuss why GSAA% is difference between model expected goals and goals allowed per SOT. Need caution: equation 1 written GSAAGK = sum PSxG_i - GA_i * I(GK_i = gk) over i. Actually odd: sums over shots; GA_i indicator? Need note formalization. The paper says aggregate total PSxG and subtract total goals conceded. Equation 1: sum_i [PSxG_i - GA_i * I(GK_i = gk)]? The text: GSAAGK = ෍PSxGi −GAi ∗𝐼𝐼(𝐺𝐺𝐾𝐾𝑖𝑖= 𝑔𝑔𝑔𝑔) 𝑖𝑖 (1). Need present as \(\mathrm{GSAA}_{GK}=\sum_i(PSxG_i - GA_i \cdot \mathbf{1}[GK_i=gk])\). But GA_i might be goals per shot? It says subtract total goals conceded. We can state "paper's notation is compressed; operationally total PSxG faced minus GA." Cite p2. GSAA% = GSAA / SOT. Units: goals per season; percent dimensionless goals per shot-on-target. PSxG probability [0,1] per on-target shot; aggregated expected goals. Need mention no GK location to avoid deflation. xC = Pr(Collected|X) probability. CLCAA = sum xC_i - Collected_i indicator? Text: CLCAAGK = ∑xCi − Collected_i * I(GK_i = gk). CLCAA% = CLCAAGK/ClaimablesGK. Units claims per season / %. PD: sqrt(xdiff^2+ydiff^2)/n average; units yards. DT: 75th percentile distance from goal of non-pass/save/claim actions; units yards. TPO: weights 0.5 FK, 0.4 corners, 1 shots, 7.5 penalties; these weights are "probability of scoring a goal"? Actually paper says weights based on probability scoring each positive outcome. Wait 7.5 penalty is impossible probability >1; maybe expected goals per event? It says weights based on probability of scoring a goal for each positive outcome listed Eq 8. Penalty weight 7.5 odd; likely xG value? Need note dimensional inconsistency: weights must be expected-goal equivalents, not probabilities, because 7.5 >1. This is gray zone. Units: goal-equivalents per event. ΔPL = mean pass length under pressure - mean pass length not under pressure; yards. Need mention sign convention. TPO window 20s; causal inference 45s.

Gray-zone: one-season n, calibration, no test set, cross-league transfer unknown, KNN optimal position assumption, xC trajectory intersection, pressure events definitions, matching arbitrary closeness. Page 13 says limitations. Quote: "we do not have a testing set available to validate our metrics or compare them to predetermined expectations" [PAGE 13]. "it is not possible to test the repeatability of shot stopping performance with only one season of data" [PAGE 13]. "at this time we do not know how closely these metrics translate across leagues with varying talent levels" [PAGE 13]. "Our positional deviations analysis works under an assumption that the average goalkeeper position is most optimal, but that may not be the case" [PAGE 13]. Need mention singularities: GSAA% denominator SOT -> undefined if SOT=0; CLCAA% denominator claimables -> undefined if 0; PD n=0 undefined; DT quantile for n small and 75th percentile; TPO/ΔPL small n, pressure group empty. Also model calibration bias: low-prob shots inflate GSAA. Need mention PSxG excludes blocked/off-target: "only includes shots that are on target" [PAGE 2]. Need mention xgboost params: max depth 6, sample 30%, eta 0.03, 10-fold CV [PAGE 3]. Need quote.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with units, page citations, breakdown. Need list equations. Use exact quotes. Need not overdo. Include operator definitions. Need mention assumptions: i.i.d? Calibration? Need state breakdown regimes. Need maybe include model operator \(f_{\theta}^{PSxG}:\mathbb{R}^d \to [0,1]\), logistic objective. GSAA expectation: \(\mathbb{E}[\mathrm{GSAA}] = \sum(\hat p_i - y_i)\) where y goal indicator; if calibrated, expectation zero for average GK conditional on covariates? Actually if GK skill average and model includes defensive covariates, expected residual zero. Need define. Need mention units. Need include all equations 1-9 as formal.

Formula 1: \(\mathrm{GSAA}_{GK} = \sum_{i \in \mathcal{S}_{GK}} (PSxG_i - GA_i)\). Where \(PSxG_i \in [0,1]\) expected goal probability per on-target shot; \(GA_i \in \{0,1\}\) actual goal indicator for shot i; sum yields goals. But paper text says subtract total goals conceded. We can write. If use GA_i per shot indicator, okay. Need note equation 1 notation "GA_i" as goal conceded on shot. Cite p2.

GSAA%: \(\mathrm{GSAA\%}_{GK} = \mathrm{GSAA}_{GK}/SOT_{GK}\). Units goals per shot-on-target (dimensionless ratio); if multiplied by 100 percent. \(SOT_{GK}\in\mathbb{N}\), breakdown if 0.

PSxG logistic: \(p_i = \sigma(\eta(x_i))\), \(\eta\) tree ensemble; objective logistic loss. x covariates: defensive density behind ball "sum of inverse distances for each defender between the shot and the goal" [PAGE 3], distance to center goal, expected crossing location, attacking speed. Need units inverse yards for density, yards, yards, yards/s. No GK location. Need cite.

PD: \(PD_{GK} = \frac{1}{n_{GK}}\sum_{i=1}^{n_{GK}}\sqrt{\Delta x_i^2+\Delta y_i^2}\cdot \mathbf{1}[GK_i=gk]\). Units yards; n=0 breakdown. Need cite p5.

xC: \(xC_i = \Pr(C_i=1|X_i)\); \(C_i \in\{0,1\}\); unit probability; sample claimables. Covariates trajectory intersections radius 6 and 15 yd. Cite p7.

CLCAA: \(\mathrm{CLCAA}_{GK} = \sum_i(xC_i - C_i)\mathbf{1}[GK_i=gk]\). Units claims. CLCAA% \(= \mathrm{CLCAA}/N_{claimable}\). Denominator zero.

DT: \(DT_{GK} = Q_{0.75}(\{D_i\})\cdot indicator\). Units yards. Small n.

TPO: \(TPO_{GK}=0.5\sum FK +0.4\sum Corners +1\sum Shots +7.5\sum Penalties\) * indicator. Need say weights are goal-equivalent (or inferred outcome values) not probabilities; dimensional issue if read as probabilities. The paper phrase: "using intuitively defined weights based on the probability of scoring a goal for each positive outcome" [PAGE 9]. But 7.5 cannot be a probability; we should flag as gray-zone dimensional inconsistency. Could write "Operationally these weights must carry units of goal-equivalents per event; treating them as probabilities is dimensionally invalid because \(7.5>1\)." This is good gray-zone. Need cite p9.

ΔPL: \(\Delta PL = \bar L_{pressure} - \bar L_{no pressure}\). Units yards; sign positive means longer under pressure. Breakdown if no pressure events or unmatched samples. Cite p9-10.

Matching: distance in metric vector with user-specified tolerances; no equation in paper. Need mention no formal normalization; potential trap. Cite p10-11.

Need "SOURCE_OPERATORS_AND_EQUATIONS" can include breakdown regimes: denominator zero, calibration failure, no test set, small n, cross-league transfer, pressure definition threshold, TPO weights. Need cite exact.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need discuss prior hockey goalie metrics Schuckers 2011, Perry 2015, early soccer Trainor 2014, 11tgen11 2014. Need quote page 2: "This necessity has been previously studied with goaltenders in professional hockey (Schuckers, 2011) (Perry, 2015)." "Some early work on advanced goalkeeper metrics in soccer struck at the heart of our objective in shot stopping analysis, accounting for save difficulty (Trainor, 2014) (11tegen11, 2014)." Need cite p2. Also The Economist article. Need lineage: defense-independent rating in hockey -> spatially smoothed save percentage maps -> soccer post-shot xG -> GSAA; xG models -> xC. Multi-week traps: using save percentage, shutouts, small sample; "goalkeeper can record a shutout without making a single save" p2. "save percentage is heavily confounded by types of shots" p2. Need "multi-week traps" maybe over multiple weeks, regression to mean, schedule strength, team defense changes, pressure events definition. Need discuss retrocausal: outcome labels (collected) used to estimate xC? They avoid end location bias by trajectory intersection. Need mention "where a pass ends depends on result" p7. Need trap: using outcome to define claimables? They define claimables by cross/high pass paths intersects box. Need quote p17. Need cite.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need frame as evaluating GK under pressure and decision-making. Crisis habit regression: under pressure, weak GKs revert to long clearances; paper says "Weaker, less confident, players often struggle under pressure, they may panic and clear the ball away, or fail to complete passes" [PAGE 9]; "Generally, goalkeepers will kick the ball long when under pressure" [PAGE 10]. Counter-trap: matching algorithm can find similar shot-stopper but ignore style/league; De Gea matched Dean Henderson; Henderson more aggressive; "may be an improvement to De Gea if Manchester United needed a goalkeeper to play further off his goal line" [PAGE 12]. Clock: one-season, no longitudinal, 20s/45s windows; pressure events are instantaneous; ΔPL only average. Need mention "recursion" of goalkeeper's mind: pressure -> perceived risk -> action -> outcome -> future pressure. Need avoid overclaim. Use theory of mind? Since no actual mental states measured; only behavioral proxies. Need state that any psychological inference is gray-zone; "pressure" defined by defender radius [PAGE 18], not cognitive state. Quote "Pressures are collected in StatsBomb Data whenever a defender enters a certain radius around the player with the ball" [PAGE 18]. Need cite. "counter-trap" = matching on greatest asset while allowing deviation in weakness; risk of selecting a keeper whose profile is not causal for system. Clock = season-long vs match-state. Need "crisis habit regression vs counter-trap vs clock" as three competing explanations for observed ΔPL/TPO/CLCAA%; we can adjudicate.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need discuss physical constraints: goalkeeper height/reach, dive speed, reaction time, turf traction, ball aerodynamics, wind, rain, cold, altitude? The paper lacks weather/turf/biomechanical covariates. We need veto proof: if cross-layer conditions alter ball trajectory or GK mobility beyond model covariates, the metric's causal interpretation is vetoed. Need list: PSxG covariates include trajectory and defensive density but not wind/rain/turf; xC uses point-slope trajectory from begin/end locations, which assumes straight-line constant velocity and no aerodynamic deviation; claimable intersection with 6/15 yd radii invalid under wind/curl; DT distance from goal confounded by team defensive line and pitch conditions; ΔPL under pressure confounded by wet pitch/ball. Biomechanical: PD uses average position as optimal; body size, leg length, reaction time affect optimal position and dive; no anthropometric normalization. "Physical/biomechanical/weather veto proof" maybe need "proof" as formal veto conditions: For metric M to be valid, confounding layer L must be conditionally exchangeable; if \(P(M|L, system)\) changes, then ranking not invariant. We can formalize: Let \(Y_i\) goal, \(X_i\) shot covariates, \(Z_i\) cross-layer environmental vector. PSxG model estimates \(p_i = P(Y_i=1|X_i)\). If true \(P(Y=1|X,Z)\) and \(Z\) correlated with GK/team, omitted \(Z\) biases \(GSAA\) by \(\sum (\hat p_i - p_i(Z))\). Veto if \(\partial GSAA/\partial Z \neq 0\) and \(Z\) not independent of GK. Similarly for PD: optimal position \(x^*(s,b)\) depends on biomechanics \(b\); average position is not optimal if \(b\) heterogeneous. Weather: claimable trajectory intersection invalid if lateral acceleration due to wind \(a_w\) exceeds tolerance; point-slope path misses by \(0.5 a_w t^2\). Need equation? Maybe not too toy? This is formal physics equation: lateral deflection \(y(t)=y_0+\dot y_0 t + \frac{1}{2}a_w t^2\). Units m/s^2. Could state. Need avoid "toy equations"? The instruction says never invent fake ratios; formal equations okay. Weather aerodynamic deflection is real. Need cite source? Source doesn't include weather. We can state source lacks weather variables. Need quote? "All data used in analyses ... StatsBomb" no weather. "This data includes spatial, time, and other information..." [PAGE 2]. No weather. Need proof: no cross-layer covariates -> cannot adjudicate; veto metrics as causal claims if conditions vary. Need include "physical/biomechanical/weather veto proof" with conditions and exact singularity: PD assumption "optimal position for each shot is similar across all goalkeepers" [PAGE 5] is invalid if biomechanics differ. Quote. Great.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR maybe "Reinforcement Learning with Verifiable Rewards" but we can present as counterfactual tests with predictions. Need three scenarios:
1. Calibration-veto: Inject synthetic low-probability shots or reweight shot mix; if PSxG calibration systematically overestimates low-prob shots, GSAA% should inflate for GKs facing many low-prob shots. Prediction: after calibration correction (isotonic/Platt) or reweighting, De Gea GSAA% changes by >? Need verifiable. But we don't know exact. We can predict direction: GKs with high SOT and low PSxG/SOT (e.g., Ederson? Actually Ederson low SOT 79, GSAA -5.0; not relevant). Need use paper table. We can make prediction: If we equalize shot-quality distribution across GKs by inverse propensity weighting, rankings in Table 1 should remain within some rank correlation? Need not know. Need "verifiable" means can be checked with dataset. Prediction: De Gea remains top? Could be risky. Better predict specific: GSAA% for De Gea 9.2%, Nick Pope 7.6%; after reweighting to league-average PSxG distribution, if model calibrated, absolute changes <0.5 percentage points; if not, rank flips possible. But verifiable after doing. Need not know outcome? It says "3 verifiable RLVR veto scenarios + predictions." We can propose experiments and predictions. Need be concrete enough.

Scenario 1: Pressure-event definition sensitivity: Vary defender radius threshold for "pressure" by ±2 yards; recompute ΔPL. Prediction: Ederson's ΔPL remains within ±0.5 yd of 0 and stays in low-|ΔPL| group; weaker GKs with large positive ΔPL shift rank. Could cite Ederson best distributor? Paper says Ederson best distributor, appears near ΔPL=0 [PAGE 10]. But no exact ΔPL. Prediction verifiable.

Scenario 2: Cross-league matching veto: Recompute Dean Henderson similarity to De Gea using League One data and calibrate metrics by league. Prediction: Henderson's GSAA% and PD similarity weakens or rank changes when league-strength adjustment applied; if no translation, matching algorithm yields false positive. Cite p13: "we do not know how closely these metrics translate across leagues" [PAGE 13]. Verifiable: compare raw vs adjusted matching distance.

Scenario 3: Weather/turf layer veto: Add wind speed and precipitation to PSxG/xC; if these covariates have nonzero effect, then GSAA and CLCAA rankings change for GKs/teams with exposure. Prediction: xC calibration worsens under high wind; claimable collection probability lower for high-trajectory passes; CLCAA% for Ederson (aggressive claimer) decreases more than De Gea? Need verify. We can predict high-wind matches reduce xC model calibration slope and increase misses for crosses. But exact. Need three scenarios.

Maybe better:
1. Denominator singularity: Add a GK with zero SOT or zero claimables; GSAA% and CLCAA% undefined. Prediction: pipeline must output NA and not zero; any implementation that returns 0 is vetoed. This is verifiable but trivial.
2. Temporal leakage: fit PSxG on full season and evaluate same season; 10-fold CV only. Predict out-of-time (first half train, second half test) calibration slope deviates; GSAA% rank correlation <1. Cite no testing set. Verifiable.
3. Cross-layer: Weather. Predict adding wind/precip reduces calibration and changes aggressive claimers. Good.

Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but not necessary? They ask "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." Could phrase "RLVR-style verifiable counterfactual vetoes" and list. Need include predictions with metrics, thresholds, and data needed. No betting.

Need overall word count >=1000. We'll produce maybe 2500 words. Need ensure XML tags exactly. Could include all sections. Need maybe not include markdown headers outside. Need no betting lines. Avoid "spread/total/moneyline/odds". Fine.

Need be careful with "source pages provided, cite exact [PAGE N] markers and verbatim quotes." Must include exact [PAGE N] and quotes. Use quotes from source. Need not cite every sentence but enough.

Let's craft.

Need formal LaTeX. We can include equations inline and display. Ensure units: goals, goals per shot-on-target, probability, yards, yards/s, goal-equivalents. Need mention SI? Yards are not SI; source uses yards. We can state source units are yards, not SI; if SI required convert 1 yd = 0.9144 m. "formal LaTeX equations, SI/information/probability units" We can provide units in yards and SI conversion. For probability [0,1]. For information? Maybe log loss in nats or bits. We can mention logistic loss: \(L=-\frac{1}{N}\sum [y_i\log p_i+(1-y_i)\log(1-p_i)]\) nats. Good. Need not overcomplicate.

Need "exact singularity/breakdown regimes." Include denominators. Need "breakdown regimes" for equations. Good.

Let's write THINK_TRACE. It should be deep multi-hop derivation and gray-zone audit >=400 words. Need include citations. We'll write ~600 words.

Potential issue: The paper's Eq 1 uses sum over i with GA_i indicator; if GA_i is actual goal on shot, then GSAA = sum(PSxG - actual goal) for GK's shots. This matches total PSxG - GA. Good.

Need mention "David de Gea 13.0 GSAA, 9.2% GSAA%, SOT 142" [PAGE 4]. Quote? Could cite table. Need exact quote? Table values not verbatim quote? We can say "Table 1 lists 'David de Gea ... 9.2% ... 13.0' [PAGE 4]." That's a table, okay.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need maybe include formal veto conditions:
- Let \(M\) be metric, \(L\) layer (wind, turf, biomechanics), \(T\) team/system. Causal ranking requires \(M \perp L \mid T\) or \(L\) included. Veto if \(M\) depends on \(L\) and \(L\) assigned non-randomly across GKs. 
- PSxG: if wind changes ball trajectory, \(p_i = P(Y_i=1|X_i)\) misspecified; residual \(r_i = y_i - \hat p_i\) correlated with wind; GSAA biased.
- PD: optimal position \(x^* = \arg\min_x P(goal|x,s,b)\); average position \(\bar x(s)\) equals optimal only if \(b\) constant; if \(b\) varies, PD conflates deviation from average with deviation from personal optimum. Quote: "optimal position for each shot is similar across all goalkeepers" [PAGE 5].
- xC: trajectory point-slope assumes straight line; wind deflection; intersection radius. If lateral deflection > radius, xC misclassified.
- DT: distance from goal depends on pitch dimensions/weather? DT is just actions; no weather.
Need "veto proof" conclude: The paper cannot be used for cross-weather/cross-biomechanical causal claims without adding layers; it can rank within a single homogeneous season/league as descriptive.

Need "RECURSIVE_THEORY_OF_MIND" maybe mention "crisis habit regression" as a hypothesis, "counter-trap" as matching, "clock" as time window. Need be explicit:
- Crisis habit regression: under pressure, GK's distribution habits regress to long clearances; paper's \(\Delta PL\) measures this. But it's aggregate, not recursive mental model. If pressure is defined by defender radius [PAGE 18], then "confidence" is inferred, not measured. Prediction: GKs with high \(\Delta PL\) also have lower pass completion under pressure; paper says weaker players "may panic and clear the ball away" [PAGE 9]. But the paper does not report completion change equation? It says look at changes in completion percentage and pass length, but only Eq 9 for length. So gray-zone.
- Counter-trap: matching De Gea to Henderson using shot-stopping only while allowing deviation in aggressiveness; this is deliberate counter-trap? It avoids matching on weakness. But risk: if system values aggression, matched player may be better/worse. Quote "may be an improvement to De Gea if Manchester United needed a goalkeeper to play further off his goal line" [PAGE 12].
- Clock: 20-second TPO window and 45-second causal outcome window; one-season; no longitudinal. Need "clock" could be match clock "time in the match" covariate in xC [PAGE 7]. But more important temporal. We'll discuss.

Need "RETROCAUSAL_GENEALOGY" maybe mention lineage from hockey DIGR, save percentage maps, xG. "Retrocausal" means later metrics reinterpret earlier concepts. We can state: The paper's GSAA is retrocausally linked to hockey's defense-independent rating: it asks what save performance would be independent of defense. The earlier hockey work is cited [PAGE 2]. The "retrocausal" trap: using current PSxG to validate past reputation (De Gea eye-test) is circular; no test set. Need quote "our methods have passed the 'eye-test'" [PAGE 13]. This is key: no test set, eye-test validation. Multi-week traps: single season, no repeatability. Need include.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with pages and quotes. Let's draft with all equations.

Need ensure no "betting lines" words. Avoid "odds". Even "probability of scoring" okay. No "moneyline". Good.

Need maybe mention "odds" not. Fine.

Let's write.

Need exact XML tag names: <THINK_TRACE>...</THINK_TRACE> etc.

Need ensure all content inside. Word count maybe 3000. Fine.

Let's produce final with clear paragraphs. Use LaTeX within XML. Use [PAGE N] markers. Need exact quotes. We'll include quotes in quotation marks.

Let's draft.

Potential issue: "GOALKEEPER" not "goaltender" okay.

Let's include "source units are yards; SI conversions: 1 yd = 0.9144 m; 6 yd = 5.4864 m; 15 yd = 13.716 m" helpful. Good.

Need mention "information units" for log loss. We'll include nats.

Need mention "breakdown regimes" like:
- \(SOT_{GK}=0\): GSAA% undefined; not zero.
- \(N_{claimable,GK}=0\): CLCAA% undefined.
- \(n_{GK}=0\): PD undefined.
- \(n_{GK}\) small: 75th percentile unstable.
- pressure sample empty: ΔPL undefined.
- calibration failure: if \(\hat p\) not calibrated, GSAA% biased. Quote from p3-4.
- cross-league: no translation.
- TPO weights: dimensional inconsistency.

Need maybe mention "The paper's Eq. 1 notation is compressed; operationally..." Good.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a goalkeeper-evaluation framework, not a match-prediction document, so the audit must stay at the level of measurement validity: what each operator estimates, what units it carries, and where its causal interpretation breaks. The paper’s chain is: event data \(\rightarrow\) shot-quality model \(\rightarrow\) post-shot expected goals (PSxG) \(\rightarrow\) Goals Saved Above Average (GSAA) \(\rightarrow\) positional deviation (PD) \(\rightarrow\) expected claims (xC) \(\rightarrow\) Claimables Collected Above Average (CLCAA) \(\rightarrow\) defensive territory (DT) \(\rightarrow\) total positive outcome contribution (TPO) \(\rightarrow\) pressure-induced pass-length change (\(\Delta PL\)) \(\rightarrow\) similarity matching. The central shot-stopping operator is given on [PAGE 2]: “Using the defenders’ coordinates on all shots in our data set, we simultaneously adjust for shot quality and defensive system when constructing a Post-Shot Expected Goals model (PSxG).” The paper explicitly excludes goalkeeper location from PSxG because “goalkeepers who are typically positioned better than others will consistently have lower PSxG and their GSAA%GK will be deflated” [PAGE 3]. That is a sound separation principle: the shot model should estimate chance quality from shot and defensive covariates, not from the goalkeeper’s own position, so that GSAA measures residual save performance rather than re-encoding positioning.

The first multi-hop risk is calibration. GSAA is a residual sum: if \(\hat p_i\) is the PSxG probability for on-target shot \(i\) and \(y_i\) is the goal indicator, then \(\mathrm{GSAA}_{GK}=\sum_{i\in \mathcal S_{GK}}(\hat p_i-y_i)\) in goal units. If the model is miscalibrated for low-probability shots, then goalkeepers who face many low-probability shots can have inflated GSAA; the paper itself warns that if “low probability shots were consistently estimated too high, or high probability shots were consistently estimated too low,” then season aggregates bias GSAA% [PAGE 3–4]. The paper reports calibration in Figure 1 and uses 10-fold cross-validation with a logistic objective, maximum tree depth 6, 30% predictor sampling, and eta 0.03 [PAGE 3], but it also states that “we do not have a testing set available to validate our metrics or compare them to predetermined expectations” [PAGE 13]. That is a gray-zone: calibration is necessary but not sufficient for out-of-sample, out-of-league, or out-of-weather validity.

The second risk is denominator singularity. GSAA% is \(\mathrm{GSAA}_{GK}/SOT_{GK}\); if a goalkeeper has zero shots on target, the ratio is undefined, not zero. CLCAA% has the same issue with claimables; PD has the same issue with zero shots; \(\Delta PL\) has the same issue if a goalkeeper has no pressure events or no unmatched-pressure passes. The paper’s Table 1 gives GSAA, PSxG, SOT, SV%, xSV%, and GSAA% [PAGE 4], but implementation must preserve undefinedness rather than silently impute zero. The third risk is construct validity: PD assumes “the optimal position for each shot is similar across all goalkeepers” [PAGE 5], but the authors later concede “Our positional deviations analysis works under an assumption that the average goalkeeper position is most optimal, but that may not be the case” [PAGE 13]. That is a direct gray-zone: PD measures deviation from a KNN average, not deviation from a biomechanically personal optimum.

The fourth risk is the expected-claims model. The paper defines “claimables” as crosses plus high passes whose paths intersect the box [PAGE 17], and it avoids outcome leakage by using beginning and end locations to estimate a point-slope trajectory, then intersecting that trajectory with radii of 6 and 15 yards around the goal center [PAGE 7]. That is a reasonable proxy, but it is still a straight-line trajectory proxy; wind, swerve, and turf-induced bounce are not in the equation. The fifth risk is TPO. Equation 8 weights free kicks by 0.5, corners by 0.4, shots by 1, and penalties by 7.5 [PAGE 9]. If those were literally “probabilities,” the 7.5 penalty weight would be dimensionally impossible because probabilities lie in \([0,1]\). Operationally the weights must be goal-equivalent values, not probabilities; the paper’s phrase “weights based on the probability of scoring a goal” [PAGE 9] is therefore a dimensional gray-zone that should be normalized before cross-competition comparison. The sixth risk is the matching algorithm: it allows user-specified closeness parameters on GSAA%, PD, CLCAA%, DT, TPO, and \(\Delta PL\) [PAGE 10–11], but it does not specify a common scale, covariance adjustment, or league-strength calibration. The paper admits cross-league uncertainty: “we do not know how closely these metrics translate across leagues with varying talent levels” [PAGE 13]. Thus the matching output is a descriptive nearest-neighbor profile, not a causal transfer forecast. The final audit point is temporal: the paper uses one 2017/2018 season across Europe’s Big 5 plus England League One [PAGE 1], and it says “it is not possible to test the repeatability of shot stopping performance with only one season of data” [PAGE 13]. Any claim that a goalkeeper “is” a better shot-stopper in a stable, multi-season sense is therefore outside the evidence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, with source units and breakdown regimes. The source uses yards, not SI; conversions are \(1\ \mathrm{yd}=0.9144\ \mathrm{m}\), so the 6-yard claim radius is \(5.4864\ \mathrm{m}\) and the 15-yard radius is \(13.716\ \mathrm{m}\).

1. Post-Shot Expected Goals model. For on-target shot \(i\), let \(x_i\) be the shot-and-defense covariate vector and \(y_i\in\{0,1\}\) the goal indicator. The model is a logistic xgboost classifier:
\[
p_i=\Pr(y_i=1\mid x_i)=\sigma(\eta(x_i)),\qquad 
\sigma(z)=\frac{1}{1+e^{-z}},
\]
with logistic loss
\[
\mathcal L=-\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log p_i+(1-y_i)\log(1-p_i)\right]
\]
in nats. The paper says the objective is “logistic regression predicting the binary outcome, 1 if Goal and 0 if Saved” and that it uses “the defensive density behind ball, defined as the sum of the inverse distances for each defender between the shot and the goal, the distance from the shot to the center of the goal frame, the estimated location the ball is expected to cross the goal line given the shot’s trajectory and the attacking speed” [PAGE 3]. Units: probability \([0,1]\); defensive density in \(\mathrm{yd}^{-1}\); distances in yd; attacking speed in \(\mathrm{yd\,s^{-1}}\). Breakdown: if the calibration map is biased, GSAA aggregates are biased; the paper warns that miscalibration inflates or deflates GSAA% for goalkeepers facing different shot-quality mixes [PAGE 3–4].

2. Goals Saved Above Average:
\[
\mathrm{GSAA}_{GK}=\sum_{i\in\mathcal S_{GK}}\left(PSxG_i-GA_i\right),
\]
where \(PSxG_i=p_i\) in expected-goal units per on-target shot and \(GA_i\in\{0,1\}\) is the goal-conceded indicator for that shot. The paper states: “We aggregate the total PSxG faced by each goalkeeper and then subtract their total goals conceded (GA)” [PAGE 2]. Units: goals per season. Breakdown: the sum is over on-target shots only; blocked or off-target shots are excluded because “all shots that get blocked or miss the goal frame have 0 probability of becoming a goal” [PAGE 2].

3. Standardized GSAA:
\[
\mathrm{GSAA\%}_{GK}=\frac{\mathrm{GSAA}_{GK}}{SOT_{GK}}.
\]
The paper defines “GSAA%GK = GSAAGK/SOTGK” [PAGE 2]. Units: goals per shot-on-target; often reported as a percentage. Breakdown: \(SOT_{GK}=0\) makes the ratio undefined. Table 1 reports, for example, David de Gea at 9.2% GSAA%, 24 GA, 38 PSxG, 142 SOT, and 13.0 GSAA [PAGE 4].

4. Positional deviation:
\[
PD_{GK}=\frac{1}{n_{GK}}\sum_{i=1}^{n_{GK}}
\sqrt{\Delta x_i^2+\Delta y_i^2}\cdot \mathbf 1[GK_i=gk],
\]
where \(\Delta x_i\) and \(\Delta y_i\) are the goalkeeper’s horizontal and vertical deviations from the KNN “optimal position.” The paper defines “the difference in horizontal location the goalkeeper is from the average location (xdiff) and the difference in vertical location the goalkeeper is from the average location (ydiff)” [PAGE 5]. Units: yd. Breakdown: \(n_{GK}=0\) undefined; KNN clusters of 20 similar shots are sparse if shot types are rare; the average-position optimum is assumed, not proven [PAGE 5, PAGE 13].

5. Expected claims:
\[
xC_i=\Pr(C_i=1\mid X_i),
\]
where \(C_i\in\{0,1\}\) is the collected-claimable indicator and \(X_i\) includes beginning location, trajectory intersections with 6- and 15-yard radii around goal center, pass angle, height, type, match time, and competition [PAGE 7]. Units: probability. Breakdown: the trajectory is a point-slope proxy; the model cannot represent aerodynamic swerve or wind deflection unless those covariates are added.

6. Claimables Collected Above Average:
\[
\mathrm{CLCAA}_{GK}=\sum_{i\in\mathcal S_{GK}}\left(xC_i-C_i\right),
\qquad
\mathrm{CLCAA\%}_{GK}=\frac{\mathrm{CLCAA}_{GK}}{N_{\text{claimable},GK}}.
\]
The paper defines these as Equations 5 and 6 [PAGE 7]. Units: claims per season and claims per claimable. Breakdown: \(N_{\text{claimable},GK}=0\) makes CLCAA% undefined; the paper’s Appendix Table 2 shows claimable counts ranging from 114 to 315, so small-sample instability is real [PAGE 18].

7. Defensive territory:
\[
DT_{GK}=Q_{0.75}\left(\{D_i\}_{i\in\mathcal S_{GK}}\right),
\]
where \(D_i\) is the distance from goal for non-pass, non-save, non-claim defensive actions. The paper states: “we derive the distance from goal for each defensive activity and rank goalkeepers based on the quantiles of the distance from goal” [PAGE 8] and gives Equation 7 as the 75th-percentile distance [PAGE 9]. Units: yd. Breakdown: small action counts make the 75th percentile unstable; team defensive line and game state are not separated from goalkeeper aggression.

8. Total positive outcome contribution:
\[
TPO_{GK}=0.5\sum FK+0.4\sum Corners+1\sum Shots+7.5\sum Penalties,
\]
with the indicator \(\mathbf 1[GK_{f,c,s,p}=gk]\) in the paper’s notation [PAGE 9]. Units must be goal-equivalents per event, because the coefficients are event values, not probabilities. Breakdown: the paper says the weights are “based on the probability of scoring a goal” [PAGE 9], but the 7.5 penalty weight cannot be a probability; this is a dimensional inconsistency unless interpreted as an expected-goal-equivalent multiplier.

9. Pressure-induced pass-length change:
\[
\Delta PL_{GK}=\overline{L}_{\text{pressure}}-\overline{L}_{\text{no pressure}}.
\]
The paper defines the change in pass length when the goalkeeper is and is not under pressure [PAGE 9–10]. Units: yd; positive means longer passes under pressure. Breakdown: undefined if either pressure or no-pressure samples are empty; “pressure” is operationally “whenever a defender enters a certain radius around the player with the ball” [PAGE 18], so the threshold radius is a modeling choice.

Across all operators, the exact breakdown regimes are: zero denominators (\(SOT=0\), \(N_{\text{claimable}}=0\), \(n_{GK}=0\), empty pressure stratum); calibration failure; KNN sparsity; one-season non-repeatability; and cross-league non-translation. The paper’s own limitation sentence is decisive: “The use of only one year’s worth of data restricts our ability to make longitudinal inferences about goalkeepers” [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The paper situates its shot-stopping problem in hockey goaltending research: “This necessity has been previously studied with goaltenders in professional hockey (Schuckers, 2011) (Perry, 2015)” [PAGE 2]. It also cites early soccer work that “struck at the heart of our objective in shot stopping analysis, accounting for save difficulty (Trainor, 2014) (11tegen11, 2014)” [PAGE 2]. Retrocausally, this is the same move that defense-independent hockey ratings made: remove the defense and shot difficulty from save percentage so that the residual can be attributed to the goaltender. The paper’s PSxG is the soccer translation of that move, because it conditions on defender coordinates and shot trajectory rather than raw saves.

The historical trap is equally old: save percentage and shutouts are confounded. The paper states that “save percentage is heavily confounded by the types of shots a goalkeeper faces and shutout counts are more representative of a complete defensive system than a goalkeeper’s performance (a goalkeeper can record a shutout without making a single save)” [PAGE 2]. Multi-week traps follow from that. A goalkeeper can have a hot month of low-probability saves, or a cold month of high-quality shots faced, and raw save percentage will move without a stable skill change. The paper’s own defense is calibration and 10-fold cross-validation [PAGE 3], but calibration does not solve schedule strength, team-defense changes, or season-to-season repeatability. The authors admit “it is not possible to test the repeatability of shot stopping performance with only one season of data” [PAGE 13] and note the counterargument that “goalkeeper’s saves are largely random and their performance in one season has little correlation with their performance in the following season” [PAGE 13]. Their response is that they “see no reason to believe shot stopping is due more to luck than skill” [PAGE 13], but that is an eye-test and trend argument, not a multi-season validation.

The expected-claims model has a different genealogy: it descends from probabilistic event-value models in soccer analytics rather than from save-percentage maps. The paper defines “claimables” as “all passes that are labelled in StatsBomb data as a ‘cross’ plus all high passes, whose paths intersect the box at some point” [PAGE 17], and it explicitly avoids using the pass end location as a predictive covariate because “where a pass ends depends on the result of the pass” [PAGE 7]. That is a retrocausal guard: do not let the outcome define the pre-outcome probability. The same guard should be applied to TPO and \(\Delta PL\). TPO uses outcomes in the 20 seconds after a goalkeeper pass [PAGE 9]; \(\Delta PL\) compares pressure and no-pressure pass lengths [PAGE 9–10]. Both are outcome-adjacent constructs. The multi-week trap is to treat a 20-second positive-outcome burst as a stable goalkeeper trait when it may instead reflect opponent pressing, team shape, or game state.

The deepest retrocausal risk is validation-by-reputation. The paper says its methods “have passed the ‘eye-test’” and that David de Gea has “the greatest GSAA” while Ederson has high CLCAA% and the largest defensive territory [PAGE 13]. That is not independent validation; it is consistency with prior reputations. If the same metrics were used to revise those reputations, the “eye-test” would no longer be an external check. The genealogical lesson is therefore: GSAA, CLCAA, DT, TPO, and \(\Delta PL\) are useful descriptive descendants of defense-independent goaltending and expected-value event models, but they inherit the obligation to be tested out of sample, out of league, and out of weather. The paper itself flags the cross-league gap: “at this time we do not know how closely these metrics translate across leagues with varying talent levels” [PAGE 13].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three competing explanations must be separated when interpreting goalkeeper behavior: crisis habit regression, counter-trap matching, and clock effects.

Crisis habit regression is the hypothesis that under pressure a goalkeeper reverts to a low-risk habit. The paper describes the mechanism: “Weaker, less confident, players often struggle under pressure, they may panic and clear the ball away, or fail to complete passes” [PAGE 9], and “Generally, goalkeepers will kick the ball long when under pressure” [PAGE 10]. Operationally this is measured by \(\Delta PL\): positive values mean longer passes under pressure. But the paper’s “pressure” is not a mental state; it is an event label: “Pressures are collected in StatsBomb Data whenever a defender enters a certain radius around the player with the ball” [PAGE 18]. So \(\Delta PL\) is a behavioral proxy for a recursive loop—perceived pressure \(\rightarrow\) risk appraisal \(\rightarrow\) action selection \(\rightarrow\) outcome \(\rightarrow\) future pressure—but the paper only observes the action and outcome. It does not measure appraisal. The correct cautious statement is: a large positive \(\Delta PL\) is consistent with crisis habit regression, but it is also consistent with a rational safety-first response to a high press. The paper’s own language—“Goalkeeper’s who are confident under pressure will maintain their distribution tendencies” [PAGE 9]—is an interpretation, not an identification.

Counter-trap matching is the second explanation. The matching algorithm deliberately allows a candidate to differ on the goalkeeper’s weakness while matching the greatest asset. The paper matches David de Gea to League One goalkeeper Dean Henderson on shot-stopping metrics “while allowing potential matches to deviate in their aggressiveness (De Gea’s greatest weakness) and distribution” [PAGE 11]. It then says Henderson “may be an improvement to De Gea if Manchester United needed a goalkeeper to play further off his goal line” [PAGE 12]. That is a counter-trap because the algorithm can select a player who is similar on the measured strength but different on the system-relevant weakness. The theory-of-mind risk is that scouts may read the match as “same goalkeeper” when it is only “same shot-stopping profile.” The paper’s own cross-league caveat applies: “we do not know how closely these metrics translate across leagues with varying talent levels” [PAGE 13].

Clock effects are the third explanation. The paper uses a 20-second window for TPO positive outcomes [PAGE 9], a “~45 seconds following a claimable” for a proposed causal inference extension [PAGE 13], and a single 2017/2018 season [PAGE 1]. These clocks are not neutral. A 20-second window may capture a counterattack but miss a slower buildup; a 45-second window may include defensive reorganization; a one-season clock cannot separate skill from form. The paper admits “it is not possible to test the repeatability of shot stopping performance with only one season of data” [PAGE 13]. Therefore, the recursive theory of mind should be adjudicated as follows: \(\Delta PL\) and TPO are behavioral traces, not direct readouts of confidence; matching is a descriptive similarity operator, not a transfer forecast; and the season clock is too short for trait stability. Any stronger psychological or causal claim is vetoed by the measurement design.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is physical, biomechanical, and weather-based. The source’s PSxG model includes shot trajectory, defensive density, distance to goal center, expected crossing location, and attacking speed [PAGE 3], but it does not include wind, precipitation, turf traction, ball pressure, or goalkeeper anthropometry. That omission is not automatically fatal for a within-season descriptive ranking, but it vetoes causal claims that GSAA, CLCAA, PD, or DT isolate goalkeeper skill across heterogeneous physical conditions.

Physical veto. A shot’s path is not a point-slope line in wind. For a ball with lateral aerodynamic acceleration \(a_w\) in \(\mathrm{m\,s^{-2}}\), the lateral displacement relative to a straight-line prediction over flight time \(t\) is approximately \(\Delta y(t)=\frac{1}{2}a_w t^2\) in m. If \(\Delta y(t)\) exceeds the claim-radius tolerance or the goal-frame crossing tolerance, the xC trajectory-intersection proxy and the PSxG crossing-location covariate are misspecified. The paper’s xC model uses “the beginning and end location of all claimables to estimate the trajectory (in point-slope form)” and intersects that trajectory with 6- and 15-yard radii [PAGE 7]. Wind and swerve can move the true path outside those proxies. Veto condition: if wind exposure is correlated with team stadium, season, or goalkeeper style, then CLCAA and PSxG residuals absorb weather rather than skill.

Biomechanical veto. PD assumes that the KNN average position is a reasonable “optimal position” because “the optimal position for each shot is similar across all goalkeepers” [PAGE 5]. But optimal position is a function of reach, leg length, reaction time, dive speed, and recovery mechanics. If goalkeeper \(g\) has biomechanical vector \(b_g\), the personal optimum is \(x^\star(s,b_g)\), not the average \(\bar x(s)\). PD then measures \(\|x_g-\bar x(s)\|\), not \(\|x_g-x^\star(s,b_g)\|\). The paper concedes that “the average goalkeeper position is most optimal, but that may not be the case” [PAGE 13]. Veto condition: if \(b_g\) varies systematically with height, age, or league, PD conflates deviation from average with deviation from personal optimum. The same logic applies to DT: a goalkeeper with longer reach may legitimately start farther from goal, so a larger DT is not necessarily more aggression; it may be a biomechanical adaptation.

Weather veto. Rain and wet turf reduce traction and change plant-and-dive mechanics; wind changes ball flight; cold changes ball elasticity and muscle performance. None of these are covariates in the paper’s equations. The PSxG logistic model is \(p_i=\sigma(\eta(x_i))\) with no \(Z_{\text{weather}}\) term. If the true model is \(p_i=\sigma(\eta(x_i,Z_i))\) and \(Z_i\) is correlated with goalkeeper or team, then the omitted-variable bias in GSAA is
\[
\mathrm{Bias}_{GK}=\sum_{i\in\mathcal S_{GK}}\left[\sigma(\eta(x_i))-\sigma(\eta(x_i,Z_i))\right],
\]
in goals. The veto is not that weather always matters; it is that the paper provides no layer to prove it does not. The same is true for claimables: a wet, wind-driven cross may have a different collection probability than the xC model assigns from a dry point-slope trajectory. Therefore the cross-layer adjudication is: use these metrics as within-league, within-season, condition-homogeneous descriptive profiles; do not use them as causal skill estimates across weather, turf, or biomechanical regimes without adding the missing layer or restricting the comparison to matched conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR-style counterfactual veto scenarios, each with a prediction and a checkable outcome. “RLVR” here means reward/value verification by counterfactual perturbation: change one layer, recompute the metric, and see whether the ranking or calibration survives.

Veto 1: denominator-singularity veto. Counterfactual: insert a synthetic goalkeeper-season with \(SOT=0\) and \(N_{\text{claimable}}=0\), then run the published pipeline for GSAA% and CLCAA%. Prediction: the correct implementation returns undefined/NA for \(\mathrm{GSAA\%}\) and \(\mathrm{CLCAA\%}\), not 0; if it returns 0, the implementation violates Equation 2 and Equation 6. A second check: insert a goalkeeper with \(SOT=1\) and one saved shot; \(\mathrm{GSAA\%}\) should be computable but unstable, and the pipeline should flag \(n<10\) as unreliable. This is verifiable directly against the formulas on [PAGE 2] and [PAGE 7].

Veto 2: temporal/out-of-sample calibration veto. Counterfactual: train the PSxG model on the first half of the 2017/2018 season and test on the second half, then recompute GSAA% for the goalkeepers in Table 1. Prediction: if the model is stable, the rank correlation between first-half and second-half GSAA% should be positive and the calibration slope should remain near 1; if the paper’s one-season calibration is overfit, the slope will deviate and the top-ranked goalkeeper may change. The paper’s own warning applies: “we do not have a testing set available to validate our metrics” [PAGE 13]. The verifiable prediction is directional: an out-of-time split will produce wider calibration error than the reported 10-fold cross-validation, and at least one goalkeeper in the top five by GSAA% will move by more than one rank. This is checkable with the same StatsBomb event data.

Veto 3: weather/turf layer veto. Counterfactual: add wind speed, precipitation, and a turf/traction proxy to the PSxG and xC models, then recompute GSAA and CLCAA% for matches stratified by weather. Prediction: if the omitted weather layer is irrelevant, adding it will leave calibration and rankings essentially unchanged; if it is relevant, xC calibration will worsen in high-wind/high-rain strata and aggressive claimers such as Ederson—whose CLCAA% is 0.05 in Table 2 [PAGE 18]—will show a larger drop in CLCAA% than conservative claimers. A second prediction: the 6-yard and 15-yard trajectory-intersection radii [PAGE 7] will misclassify more high, wind-affected claimables than low, dry-weather claimables. The check is a stratified calibration table and a rank-change table before and after adding \(Z_{\text{weather}}\). If the rank changes exceed a pre-registered tolerance, the weather-layer veto fires and the metric is not transferable across conditions. This is verifiable, uses only the paper’s own event schema plus environmental joins, and does not require any hidden model assumption beyond the stated equations.
</RLVR_COUNTERFACTUAL_VETOES>
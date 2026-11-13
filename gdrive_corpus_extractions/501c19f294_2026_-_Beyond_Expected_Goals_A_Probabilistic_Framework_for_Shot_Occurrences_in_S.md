---
source: "2026 - Beyond Expected Goals A Probabilistic Framework for Shot Occurrences in Soccer - Pipping-Gam n et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 6042
---

<NATIVE_REASONING>
We need answer user? They provided source text and DRIVE SOURCE, pages, but no explicit question. Need infer task? They want us to produce analysis under strict XML sections. They gave source. Need generate with required sections, >=1000 words, citations [PAGE N], verbatim quotes, formal equations, units, breakdown, no betting lines. Need maybe answer synthesizing paper. Must include exact sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need avoid betting lines. Need deep multi-hop derivation. Need include equations with LaTeX, units. Need cite pages exactly and verbatim quotes. Need >=1000 words across exact XML sections. Need likely mention no question? We can frame as analysis of xG+ framework. Need not mention odds etc. Need be careful not invent unsupported specifics. We can use source details. Need meet invariants: zero betting lines. No toy equations. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need include >=1000 words. We need probably cite pages and quotes verbatim. Need include deep multi-hop derivation & gray-zone audit (>=400 words in THINK_TRACE). Need 3 verifiable RLVR veto scenarios + predictions. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. Weather not in paper? We need adjudicate if physical/biomechanical/weather vetoes apply. We can say source lacks weather variables, etc. Need include "Physical/biomechanical/weather veto proof." We should be rigorous.

Need produce answer in XML-like tags. Need include no markdown? XML sections fine. Need not include preamble? Could include concise intro? They require exact XML sections. We can output only tags. Need ensure total >=1000 words. Likely answer ~2500 words. Desired oververbosity 5. Need maybe around 2000-2500 words. Let's craft.

Need parse paper key equations:
xG+_t = P_t(Shot) * P_t(Goal|Shot) = xS_t * xG_t [PAGE 6].
xG+_poss = 1 - prod_{t=1}^n (1 - xG+_t) [PAGE 6].
Possession aggregation alternatives: at-least-one: 1 - Q(1 - xG+_t) maybe product; max xG+ per possession [PAGE 10]. Need mention.
SOE = Shots - xS; GOExG = Goals - xG; GOExG+ = Goals - xG+ [PAGE 13].
GOEpm = GOE / MP [PAGE 15].
openGoal: defenders uniform circles 75cm diameters, tangent line pairs, percentage goal not covered [PAGE 19].
Feature units table: r m, theta rad, z m, speed m/s, openGoal [0,1], GK_r m, angles rad, distances m [PAGE 19].
Model: XGBoost two separate models, 5-fold CV, log loss [PAGE 7].
Data: EPL 2022-23, 2023-24, 2024-25; 30 fps; features ball/player positions (x,y,z), etc [PAGE 6].
Horizon: next second [PAGE 1, 6]. Need note 1s horizon boundary effects [PAGE 16].
Results: XGBoost improvement vs best logistic xG 0.011 (3.3%), xS 0.0024 (9.5%) [PAGE 7]. MSE tables [PAGE 11-12], binomial wins [PAGE 12-13]. Player stability: GOExG 0.12, SOE 0.63, GOExG+ 0.35 [PAGE 13].
Limitations: measurement noise, EPL only, one-second horizon label sensitivity, clear possession filter excludes threats, openGoal 2D occluders ignores reach/height/jumping, snapshot features omit sequential dependence, possession summaries mechanically reward longer possessions, selection on opportunity persists [PAGE 16-17].
Future work: temporal point processes/survival/hazard, higher fidelity tracking, hierarchical effects, counterfactual value, defensive mirror, external validation [PAGE 17].
References historical: Eggels 2016, Ensum 2004, Macdonald 2012, Lucey 2015, Fernandez 2019/2021, Poropudas/Inkilä 2021, Singh 2018, Bransen/VanHaaren 2018, Statsbomb 2021, Brill 2025, Davis/Robberechts 2024, etc [PAGE 1-3, 17-18].
Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. We can discuss lineage: logistic shot probability -> xG -> spatiotemporal -> EPV -> xT/OBV -> xS/xG+; multi-week traps: treating xG as standalone, overfitting finishing, ignoring selection, aggregating independent shots, possession length mechanical inflation, horizon leakage, data leakage across seasons? Need mention traps over multi-week data collection: timestamp misalignment, label leakage due to same possession frames, cross-season recalibration, no weather, no biomechanics, tracking occlusion, selection on opportunity.

Need "recursive theory of mind: crisis habit regression vs counter-trap vs clock." Interpret as analytics crisis: analysts habitually regress to xG-only, counter-trap is to overcorrect xS-only or overfit sequence models; clock is one-second decision horizon/possession clock. Need discuss recursive model of analyst/coach/player expectations: players anticipate shot metric; analysts update; metric becomes target (Goodhart). Need tie to paper. Need mention "crisis habit regression" = reverting to traditional xG during volatility (Table 6 overlapping intervals, some may dismiss gains). Counter-trap = switching to xS-only because higher persistence (SOE 0.63) but xS alone not goal probability; better xG+ balanced. Clock = one-second horizon and possession aggregation; max-per-possession vs at-least-one. Need mention "multi-week traps" perhaps in genealogy. Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need adjudicate: physical layer: ball speed, height, distances; biomechanical: body part via ball height proxy, reach/height/jumping ignored; weather: absent from model, can affect ball speed/traction, but cannot veto xG+ unless measurement or calibration. Need exact statement: cross-layer veto means if physical constraints make event impossible, predicted xG+ should be zero or recalibrated; paper's features don't include weather, player orientation, reach, jump. Need cite openGoal ignores differences in reach, height, jumping [PAGE 16]. Need mention weather not in feature dictionary [PAGE 19] and not discussed; any weather effect enters through observed ball speed/positions but is not identified. Thus veto proof: for a given frame, if z > crossbar height or r > feasible shooting range? But paper doesn't define exact cutoff. Need avoid inventing exact thresholds. We can state formal feasibility indicator V_t^phys ∈ {0,1}; if V=0 then xG+ should be set to 0. But paper doesn't include such hard veto; model learns smooth dependence. We can propose audit. Need exact singularity/breakdown regimes: product formula breakdown when xG+_t not independent? Actually formula assumes conditional independence across frames; if events correlated within possession, at-least-one product may be biased. Need note singularity: as n→∞ with positive xG+_t, xG+_poss→1 mechanically; when xG+_t=1 for any t, product=1; if xS=0 or xG=0, xG+=0. Log loss undefined? No. Need mention log loss when p=0 or 1 for observed label leads infinite penalty? XGBoost uses regularization/clipping? Not specified. We can state exact regimes: xG+_t=0 (no shot or no goal given shot) -> zero contribution; xG+_t=1 -> possession probability saturates at 1; product aggregation over long possessions with many nonzero frames tends to 1, not a true per-possession goal probability if frame events correlated. Max aggregation avoids saturation but loses cumulative interpretation. Need mention horizon one second: if shot occurs at t+1 exactly boundary, label sensitivity. Need mention denominator? No.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create scenarios where a proposed claim/metric should be vetoed if not verifiable. Need 3 scenarios:
1. Claim xG+ predicts future goals better than sum-xG. Veto if re-run rolling-origin CV and binomial win fraction not >50% or MSE interval not lower. Prediction: under paper's setup, max-per-possession xG+ win fraction 0.614 and at-least-one 0.605, so claim passes if reproduction yields >0.5 and lower MSE; else veto.
2. Claim SOE measures repeatable shot-creation skill. Veto if year-to-year correlation after controlling for position/team/minutes/opportunity exposure is not >0.5 or fails cross-league. Paper reports 0.63 raw [PAGE 13]; but selection on opportunity persists [PAGE 16-17], so need hierarchical effects. Prediction: raw correlation remains positive but may attenuate; if not, veto strong causal skill claim.
3. Claim openGoal is valid physical obstruction measure. Veto if 2D uniform-circle occluders with 75cm diameter fail against 3D player reach/height/jump/orientation; paper admits ignores differences [PAGE 16]. Prediction: adding 3D biomechanical features should improve xG log loss from 0.326 or change openGoal importance; if no improvement, 2D proof may be sufficient; if improvement, current openGoal is incomplete but not invalid for xG+? Need phrase.

Maybe 3 scenarios more concrete verifiable:
- Weather veto: If match has rain/wind and ball tracking speed/height error increases, and model log loss on held-out rainy matches is materially worse than dry, then claim of general xG+ validity across weather is vetoed; prediction: performance degrades if weather not modeled. But paper no weather. Need "verifiable" and predictions.
- Biomechanical veto: Add player orientation/reach/jump; if openGoal remains dominant but 3D features reduce xG log loss, veto openGoal-only physical proof. Prediction: xG improvement especially for headers/volleys.
- Sequential dependence veto: Replace snapshot with sequence model; if sequence model's xS log loss improves over 0.0227 and xG+ downstream MSE improves, veto snapshot adequacy. Prediction: improvement due to pass-shoot chains.

Need include exact quotes. Need quotes:
- "xG+ as the product of two estimated probabilities: the likelihood of a shot occurring (xS) and the likelihood of a goal given that a shot occurs (xG) in the next second." [PAGE 6] exact? Source: "To correct for these limitations, we define xG+ as the product of two estimated probabilities: the likelihood of a shot occurring (xS) and the likelihood of a goal given that a shot occurs (xG) in the next second. Formally, at any frame t: xG+t = Pt(Shot) × Pt(Goal|Shot) = xSt · xGt" [PAGE 6]. Good.
- "This equation ensures that the total possession value is bounded by one and reflects both latent and realized scoring threats." [PAGE 6].
- "The focus of this work now turns to estimating the probability of a shot occurring within the next second using the camera-based optical tracking data from Gradient Sports." [PAGE 6].
- "we train two separate XGBoost models" [PAGE 7].
- "Both models use 5-fold cross-validation within each season, with log loss as the primary evaluation metric." [PAGE 7].
- "distance from the ball to the goal (r) is the dominant predictor in both models." [PAGE 8].
- "openGoal ... second most influential feature for xG but contributes little to xS." [PAGE 8].
- "Across all specifications, xG+ yielded the lowest error" [PAGE 12].
- "observing 69 or more wins for the at-least-one xG+ specification has probability 0.015, and observing 70 or more wins for the max-per-possession xG+ specification has probability 0.009." [PAGE 12-13].
- "goals over expected relative to xG exhibit very low stability (correlation ≈0.12)" and "shots over expected relative to xS are highly persistent across seasons (correlation ≈0.63)" [PAGE 13].
- "measurement noise in video tracking can introduce error" [PAGE 16].
- "the one-second horizon used to define xS also renders labels sensitive to small timestamp misalignments" [PAGE 16].
- "openGoal treats players as identical 2D occluders and ignores differences in reach, height, and jumping." [PAGE 16].
- "the framework scores frames with snapshot features and thus omits sequential dependence" [PAGE 16].
- "possession-level summaries of xS can mechanically reward longer possessions even after the optimal shooting moment has passed" [PAGE 16].
- "selection on opportunity persists" [PAGE 16].
Need exact page markers [PAGE 6], etc.

Need ensure no mention betting lines. Avoid "odds" entirely. No spreads/totals/moneylines. Fine.

Need maybe include "SI units" in equations: r in m, theta rad, z m, speed m/s, openGoal dimensionless [0,1], probabilities dimensionless [0,1]. xG+ has probability units? It's probability dimensionless. xS probability per one-second frame? It is probability that shot occurs within next second, dimensionless but time-horizon-specific. Could denote P_t^{Δt}(Shot), Δt=1 s. Units: probability per frame? Actually probability over 1 s window, dimensionless. xG conditional probability. xG+ probability over next second. Possession aggregate probability over possession, dimensionless. SOE units shots (count); GOE goals (count). Year-to-year correlation dimensionless. MSE units goals^2? Since predicting goals, MSE in goals²; MAE goals. Log loss nats? Log loss in nats (natural log) or bits depending base; source doesn't specify base. XGBoost log loss typically natural log. We can state "log loss (nats unless base specified; source does not state base)" to be precise. But don't overdo. Table values 0.326 etc. Need mention.

Need "exact singularity/breakdown regimes" formal:
- If any xG+_t = 1, product = 1 and possession aggregate saturates.
- If n large and xG+_t bounded away from 0, (1 - xG+_poss) = prod (1 - xG+_t) ≤ exp(-Σ xG+_t), so xG+_poss ≥ 1 - exp(-Σ xG+_t). As Σ→∞, →1. This is mechanical. Need include equation. It is formal. Units dimensionless. Assumption: frame events independent? Actually product formula is exactly probability of at least one if events independent? The formula is 1 - product(1 - p_t), which is probability of union if events independent? Actually for independent events, P(no event) = product(1-p_t). If not independent, this is not exact. Paper states "This equation ensures total possession value bounded by one" but not independent assumption? It is a probabilistic union formula under independence. Need highlight assumption. The paper earlier criticized xG treating shots independent [PAGE 3], but xG+ possession formula also uses independence across frames? It uses 1 - product; this is exact under independence of frame-level events. If events correlated, it's not exact. This is a key gray-zone. Need mention as breakdown. Need not accuse too strongly; state assumption and regime. Need cite page 3 quote: "Another assumption of xG models is that they treat shots as independent events" [PAGE 3]. The xG+ product also assumes independence or uses it as an aggregation heuristic. This is multi-hop. Good.

Need "THINK_TRACE" >=400 words. Need make it deep. Could be ~700 words. Include multi-hop derivation and gray-zone audit. Need maybe mention "source pages provided" and citations. No need to reveal chain-of-thought? The tag is THINK_TRACE but policy? We can provide concise reasoning summary, not hidden chain-of-thought? We should avoid detailed private chain-of-thought. We can provide "Derivation audit" rather than actual private reasoning. The system asks for THINK_TRACE deep multi-hop derivation. We can comply with a transparent derivation summary, not hidden chain-of-thought. Need not mention "I think." Fine.

Need produce final with tags. Ensure exact tag names. The user didn't ask for intro; we can just output sections. Need include all sections. Need maybe include a title? No.

Let's draft carefully.

Structure:
<THINK_TRACE>
Paragraphs explaining derivation: starting from xG limitation, define frame-level xS and xG, product, possession aggregate, aggregation alternatives, downstream mixed-effects Poisson, player metrics. Audit assumptions: horizon Δt=1s, independence, labels, selection, openGoal, snapshot, weather/biomech. Include equations and citations. >=400 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
List formal equations with LaTeX, units, assumptions, citations, breakdown. Include:
1. Frame xG+: \(xG^+_t = P_t(\text{Shot within }[t,t+\Delta t]) P_t(\text{Goal}|\text{Shot}) = xS_t xG_t\), Δt=1s, probabilities dimensionless. Cite [PAGE 6].
2. Possession aggregate: \(xG^+_{\text{poss}} = 1-\prod_{t=1}^n(1-xG^+_t)\). Assumes independent frame events; bounded [0,1]. Cite [PAGE 6]. Breakdown: saturation; correlated frames.
3. Aggregation alternatives: at-least-one; max. Cite [PAGE 10].
4. Player metrics: GOExG = Goals - xG; SOE = Shots - xS; GOExG+ = Goals - xG+. Units goals/shots. Cite [PAGE 13].
5. Per-match: GOEpm = GOE/MP. Cite [PAGE 15].
6. openGoal construction: defenders circles 75cm, tangent lines, unobstructed fraction. Cite [PAGE 19]. Dimensionless [0,1].
7. Feature units table cite [PAGE 19].
8. Model log loss and CV cite [PAGE 7]; MSE/MAE units goals²/goals cite [PAGE 11-12].
9. Poisson mixed model formula: metric ~ (1|season) + ... cite [PAGE 11]; second stage goals ~ home + season + team_off + opp_def [PAGE 11]. Units counts. Could include.
Breakdown regimes: p=0, p=1, n large, correlation, Δt misalignment, selection, openGoal 2D, weather absent.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: Ensum 2004 logistic; Macdonald 2012 hockey; Lucey 2015 spatiotemporal; Eggels 2016; Fernández 2019/2021 EPV; Singh 2018 xT; Bransen/VanHaaren 2018; Statsbomb 2021 OBV; Poropudas/Inkilä 2021 shot decision into xT; Brill 2025 selection bias; Davis/Robberechts 2024 finishing biases. xG+ retrocausal genealogy: it reframes prior xG as conditional component and xT/OBV as valuing non-shot actions; xS is latent hazard. Multi-week traps: (i) collect weeks of tracking but misalign timestamps; (ii) train on shots only and label leakage; (iii) aggregate sum-of-shots; (iv) use raw SOE without exposure control; (v) cross-season recalibration; (vi) weather/biomech confounds. Cite pages.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Define three regimes:
- Crisis habit regression: under noisy CV intervals (Table 6 overlap) analysts revert to xG-only, despite xG+ lower MSE and binomial wins. Cite [PAGE 12-13].
- Counter-trap: overcorrect to xS-only because SOE correlation 0.63 > GOExG 0.12; but xS measures shot creation not goal scoring; xG+ balances (0.35). Cite [PAGE 13].
- Clock: one-second horizon and possession length; max vs at-least-one; mechanical reward longer possessions [PAGE 16]; use max for equal/better accuracy [PAGE 12]. Recursive TOm: players/coaches adapt to metric; shot selection may change; Goodhart; need hierarchical team/player effects [PAGE 17]. Prediction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Formal feasibility indicator \(V_t^{phys}\in\{0,1\}\). If ball height > crossbar? Not specified. Better: if physical state violates pitch/goal geometry or tracking impossible, set xG+ = 0; paper's model lacks explicit veto. Cite feature dictionary [PAGE 19]. Biomechanical: openGoal ignores reach/height/jumping [PAGE 16]; ball height proxy for body part [PAGE 8]; no player orientation. Weather: not in feature dictionary [PAGE 19]; rain/wind affect ball speed/height/traction but only enter as measured speed/z; no identification. Veto proof: claim of universally valid xG+ is vetoed for unmodeled weather extremes unless recalibrated; claim of openGoal as full physical obstruction is vetoed for 3D biomechanics; claim of snapshot adequacy is vetoed if sequence dependence dominates. Need be precise: "proof" maybe not mathematical proof, but adjudication conditions. Use "veto rules."
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios with predictions:
1. Team-prediction veto: reproduce rolling-origin CV. If max-per-possession xG+ MSE ≥ sum-xG or win fraction ≤0.5, veto claim. Prediction: paper reports 2.84 vs 2.90 MSE and 70/114 wins (0.614), binomial p≈0.009 [PAGE 11-13], so should pass; if not, data leakage or aggregation bug.
2. Player-skill veto: test SOE persistence after hierarchical control for team, position, minutes, opportunity exposure. If adjusted correlation ≤0.2 or fails cross-league, veto "repeatable shot-creation skill" causal claim. Prediction: raw 0.63 [PAGE 13] will attenuate but remain positive; if vanishes, selection on opportunity [PAGE 16-17] explains raw effect.
3. Physical/biomechanical/weather veto: add 3D reach/jump/orientation and weather covariates; if xG log loss (0.326) improves and openGoal importance drops, veto openGoal-only physical validity; if rainy/windy test log loss diverges from dry, veto weather-general claim. Prediction: xG improves modestly, especially headers/volleys; weather effect small but nonzero; need recalibration. Need mention "verifiable" with exact metrics: log loss, MSE, correlation. Good.

Need word count. Let's estimate. THINK_TRACE ~700 words, SOURCE ~900, GENEALOGY ~400, THEORY ~350, VETO ~350, RLVR ~400 = 3100. Fine. Need maybe not too long but okay. Desired oververbosity 5, but requirements high. We'll produce around 2500-3000 words. Need maintain XML valid? Text contains `<`? Avoid unescaped `<` in text? XML tags must be valid. We can use `\le` or `\geq` etc. In XML text, `<` should be escaped; we can avoid `<` by using `\lt`? LaTeX `\le` no actual `<`? It has backslash. Use `\leq` not `<`. Avoid ampersand? Use "and" instead of `&`. Avoid `<` in text. We can use `\in`. The tag content can contain LaTeX with `{}` etc, fine. Avoid raw `>`? XML `>` okay but can use `\gt`. Use `[PAGE N]` fine. Quotes fine. Need escape `&`? Avoid ampersands. Use "and". Need not include `±`? fine. Use Unicode okay. Need not use `&` anywhere. Ensure no `<` characters in text. LaTeX like `\text{Goal} | \text{Shot}` no `<`. Use `\Delta t=1\,\text{s}`. Good.

Need include "verbatim quotes" exact. Ensure quotes don't include `&` maybe no. Use quotation marks. Exact quotes from source. We can quote with punctuation. Need cite exact [PAGE N]. Could include quotes in each section. Need not overquote but enough.

Need be careful: "xG+t" in source maybe formatting. We'll write \(xG^+_t\). Verbatim quote should be exact maybe source says "xG+t = Pt(Shot) × Pt(Goal|Shot) = xSt · xGt" but OCR. We can quote sentence not equation or quote with equation as close. Verbatim quote: "To correct for these limitations, we define xG+ as the product of two estimated probabilities: the likelihood of a shot occurring (xS) and the likelihood of a goal given that a shot occurs (xG) in the next second." Exact. Good.
Another quote: "This equation ensures that the total possession value is bounded by one and reflects both latent and realized scoring threats." Exact.
"Across all specifications, xG+ yielded the lowest error" exact? Source: "Across all specifications, xG+ yielded the lowest error, suggesting that combining shot probability (xS) with goal probability given a shot (xG) improves team-level forecasts relative to either component alone." [PAGE 12]. Good.
"goals over expected relative to xG exhibit very low stability (correlation ≈0.12)" exact maybe source: "Consistent with prior work, goals over expected relative to xG exhibit very low stability (correlation ≈0.12)." [PAGE 13].
"shots over expected relative to xS are highly persistent across seasons (correlation ≈0.63)" exact.
"openGoal treats players as identical 2D occluders and ignores differences in reach, height, and jumping." exact [PAGE 16].
"the one-second horizon used to define xS also renders labels sensitive to small timestamp misalignments" exact [PAGE 16].
"The pattern in Table 9 is consistent with the stability results in Table 8: players with large positive SOE are, in general, widely regarded as among the Premier League’s most impactful attackers." maybe not needed.
Need "weather" not in source. We can say "Weather is absent from the feature dictionary in Table 11 [PAGE 19] and is not modeled in the paper." That's factual from source, not quote.

Need "zero toy equations": We include formal equations, no fake ratios like Force/Fatigue. Good.

Need "no betting lines": Avoid all. Good.

Need maybe mention "probability units dimensionless, time horizon Δt=1 s." Good.

Need validate XML. The answer will be:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
...
No unescaped `<`. Use `\lt`? Actually `\lt` not standard? Use `\leq`. For "less than" in text, use "below" or "lower than" not `<`. For "greater than" use "above" or `\geq`. For intervals, use `(0,1)` not `<`. Good.

Potential issue: In LaTeX, `\prod_{t=1}^{n}` has braces and underscores, no `<`. Fine.
Need use `\mathbb{1}`? fine.
Need no `&` in LaTeX align. Use separate lines with `\[` `\]` no ampersand. Good. XML text can contain `[` and `]`, fine. `%` maybe no. Use `\text{...}`.

Need ensure "verbatim quotes" with curly apostrophes maybe okay. Use exact source. Good.

Let's draft final. Need include all sections and enough depth. We can use paragraphs. Avoid markdown headings? XML tags are headings. Good.

Let's compose in final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s derivation chain begins from a well-known conditioning defect: standard xG estimates \(P(\text{Goal}\mid\text{Shot})\) only on observed shots, so dangerous non-shot states receive zero. The authors repair this by factorizing the scoring hazard at frame \(t\) into a shot-occurrence hazard and a conditional finishing hazard. The first multi-hop step is frame-level: define \(xS_t=P_t(\text{Shot within next second})\) and \(xG_t=P_t(\text{Goal}\mid\text{Shot})\), then multiply to obtain \(xG^+_t=xS_t xG_t\), as stated on [PAGE 6]: “we define xG+ as the product of two estimated probabilities: the likelihood of a shot occurring (xS) and the likelihood of a goal given that a shot occurs (xG) in the next second.” The second step is possession aggregation: \(xG^+_{\text{poss}}=1-\prod_{t=1}^{n}(1-xG^+_t)\), which the authors justify with “This equation ensures that the total possession value is bounded by one and reflects both latent and realized scoring threats” [PAGE 6]. The third step is downstream validation: possession-level metrics are fed into a mixed-effects Poisson model with season, team, opponent, and home effects, then into a second-stage goals model [PAGE 11]. The fourth step is player evaluation: the paper defines \(GOExG=\text{Goals}-xG\), \(SOE=\text{Shots}-xS\), and \(GOExG^+=\text{Goals}-xG^+\) [PAGE 13], then scales by matches to obtain \(GOE^{pm}=GOE/MP\) [PAGE 15]. The empirical claim is that \(xG^+\) lowers team forecast error and that shot creation is more persistent than finishing: “goals over expected relative to xG exhibit very low stability (correlation ≈0.12)” while “shots over expected relative to xS are highly persistent across seasons (correlation ≈0.63)” [PAGE 13].

The gray-zone audit is where the derivation becomes fragile. First, the one-second horizon is a modeling choice, not a law of soccer. The paper admits “the one-second horizon used to define xS also renders labels sensitive to small timestamp misalignments” [PAGE 16]. Thus \(xS_t\) is a discrete-time hazard over \([t,t+1\,\text{s}]\), and boundary effects can create label leakage or missed shots if event timestamps and frame stamps are misaligned. Second, the possession product formula is exact only under an independence or conditional-independence construction across frame events. The paper criticizes standard xG because “they treat shots as independent events” [PAGE 3], yet the product \(1-\prod(1-xG^+_t)\) also uses a multiplicative no-event construction; if frame-level chances are positively correlated within a possession, the product can misstate the true possession probability. It remains a useful bounded aggregation, but it is not a free lunch. Third, the formula has a saturation regime: if any \(xG^+_t=1\), then \(xG^+_{\text{poss}}=1\); if \(n\) grows and \(xG^+_t\) stays bounded away from zero, the product tends to one mechanically. The authors recognize the related issue: “possession-level summaries of xS can mechanically reward longer possessions even after the optimal shooting moment has passed” [PAGE 16]. The max-per-possession aggregation is their practical answer, and it is empirically at least as good in their tables [PAGE 12]. Fourth, the physical feature layer is deliberately coarse: \(openGoal\) models defenders as “uniform circles with 75cm diameters” [PAGE 19], and the paper concedes that it “treats players as identical 2D occluders and ignores differences in reach, height, and jumping” [PAGE 16]. Fifth, the modeling layer is snapshot-based: “the framework scores frames with snapshot features and thus omits sequential dependence” [PAGE 16]. Sixth, selection on opportunity remains: “selection on opportunity persists” [PAGE 16]. Therefore the valid inference is conditional: \(xG^+\) is a better possession-level scoring hazard under the paper’s EPL 2022–2025 tracking regime, not a universal physical law of soccer.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The core frame-level operator is
\[
xG^+_t \;=\; P_t(\text{Shot in }[t,t+\Delta t])\;P_t(\text{Goal}\mid\text{Shot}) \;=\; xS_t\,xG_t,
\]
with \(\Delta t=1\,\text{s}\). Units: \(xS_t\), \(xG_t\), and \(xG^+_t\) are dimensionless probabilities in \([0,1]\); the time horizon is seconds. The source states the definition on [PAGE 6]: “we define xG+ as the product of two estimated probabilities: the likelihood of a shot occurring (xS) and the likelihood of a goal given that a shot occurs (xG) in the next second.” Assumption: the frame state is informative for both shot occurrence and finishing; breakdown regimes are \(xS_t=0\) or \(xG_t=0\) giving \(xG^+_t=0\), and \(xS_t=xG_t=1\) giving a degenerate certainty that is unlikely under real tracking.

The possession-level operator is
\[
xG^+_{\text{poss}} \;=\; 1-\prod_{t=1}^{n}\left(1-xG^+_t\right),
\]
dimensionless, bounded in \([0,1]\), with \(n\) frames in the possession. The authors write: “This equation ensures that the total possession value is bounded by one and reflects both latent and realized scoring threats” [PAGE 6]. The formal singularity is \(xG^+_{\text{poss}}\to 1\) when any \(xG^+_t\to 1\) or when \(\sum_t xG^+_t\) grows large with \(n\). The exact breakdown regime is correlated frame events: the product is a no-event factorization, so dependence among frames can bias the union probability. The paper itself warns that standard xG “treat[s] shots as independent events” [PAGE 3], which is precisely the assumption that must be audited here.

The paper also evaluates two aggregation rules [PAGE 10]: at-least-one per possession, \(1-\prod_t(1-xG^+_t)\), and max-per-possession, \(\max_t xG^+_t\). Units remain dimensionless probabilities. The max rule avoids mechanical growth with possession length but discards cumulative interpretation; the at-least-one rule is interpretable but saturates. Empirically, “Across all specifications, xG+ yielded the lowest error” [PAGE 12], with MSE 2.84 for xG+ versus 2.90 for sum-of-shots xG under at-least-one aggregation [PAGE 11]. MSE units are goals squared; MAE units are goals [PAGE 12].

Player operators are
\[
GOExG=\text{Goals}-xG,\qquad SOE=\text{Shots}-xS,\qquad GOExG^+=\text{Goals}-xG^+,
\]
with goals and shots in counts and \(xG\), \(xS\), \(xG^+\) as expected counts or probabilities scaled to counts. The paper defines these on [PAGE 13]. The per-match scaling is
\[
GOE^{pm}_{xG^+}=\frac{GOExG^+}{MP},\qquad GOE^{pm}_{xG}=\frac{GOExG}{MP},
\]
with \(MP\) matches played [PAGE 15]. The stability results are correlations, dimensionless: \(GOExG\) stability \(0.12\), \(SOE\) stability \(0.63\), \(GOExG^+\) stability \(0.35\) [PAGE 13]. Breakdown regimes: small \(MP\) inflates per-match variance; raw SOE can reflect opportunity exposure rather than individual skill, since “selection on opportunity persists” [PAGE 16].

The physical obstruction operator \(openGoal\) is constructed by modeling defenders as circles with 75 cm diameters, drawing tangent pairs from the ball to each defender, and taking the unobstructed share of the goal line [PAGE 19]. It is dimensionless in \([0,1]\). The feature dictionary gives \(r\) in m, \(\theta\) in rad, \(z\) in m, speed in m/s, \(GK\_r\) in m, angles in rad, and distances in m [PAGE 19]. The exact physical breakdown is stated by the authors: \(openGoal\) “treats players as identical 2D occluders and ignores differences in reach, height, and jumping” [PAGE 16]. Weather is not in the feature dictionary [PAGE 19], so any weather effect is only implicit through measured ball speed, height, and tracking noise.

The estimation operators are two XGBoost classifiers, one for \(xS\) and one for \(xG\), with 5-fold cross-validation and log loss as the primary metric [PAGE 7]. Log-loss units are information units, typically nats for natural log; the source does not specify the base. The downstream mixed-effects specification is
\[
\text{metric}\sim(1\mid\text{season})+(1\mid\text{season:team})+(1\mid\text{season:opp})+\text{home},
\]
and the second-stage goals model is
\[
\text{goals}\sim\text{home}+\text{season}+\text{team\_off}+\text{opp\_def},
\]
as given on [PAGE 11]. These are count models, so the response units are goals or shot counts. The exact breakdown regime for the two-stage pipeline is propagation of measurement error: “measurement noise in video tracking can introduce error in ball and player locations” [PAGE 16]. That error enters \(r\), \(z\), speed, \(openGoal\), and player distances, and then propagates into \(xS\), \(xG\), \(xG^+\), and the Poisson stage.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is clear from the source. Early xG used logistic regression on shot outcomes: Ensum et al. (2004) “used a logistic regression model to estimate the probability that a shot becomes a goal” [PAGE 1]. Macdonald (2012) transferred expected goals to ice hockey, and Heuer and Rubner (2012) and Mead et al. (2023) argued xG is more predictive of future goals than raw goals [PAGE 1]. Lucey et al. (2015) introduced spatio-temporal data for xG [PAGE 1], while Fernández et al. (2019) decomposed the game into decisions and actions [PAGE 1–2]. The expected-threat and on-ball-value line—Singh (2018), Bransen and Van Haaren (2018), Statsbomb (2021)—used xG values of actual shots to value buildup actions [PAGE 2]. Poropudas and Inkilä (2021) incorporated a shot decision model into expected threat [PAGE 2]. Brill et al. (2025) supplied the selection-bias warning from American football expected points [PAGE 2], and Davis and Robberechts (2024) are cited for biases in xG models confounding finishing ability [PAGE 13, PAGE 17]. The retrocausal genealogy of xG+ is therefore: logistic shot conversion becomes xG; xG becomes a component in xT/OBV; xT/OBV expose the need to value non-shot actions; Fernández-style possession value exposes the need for a shot hazard; and xG+ reconstructs xG as a conditional sub-operator inside a joint shot-and-goal hazard. The paper’s own abstract frames this as remedying “the conditioning-on-shots limitation of standard xG” [PAGE 1].

Multi-week traps follow from that lineage. A multi-week tracking collection can silently break the one-second label because “the one-second horizon used to define xS also renders labels sensitive to small timestamp misalignments” [PAGE 16]. A multi-week event-and-tracking merge can leak future information if possession indicators are cleaned with knowledge of the shot; the paper’s filter requires “clear possession in the attacking third” [PAGE 6], and that filter depends on noisy possession indicators [PAGE 16]. A multi-week model-development cycle can overfit season-specific team strength; the paper uses season random intercepts and season:team and season:opp effects [PAGE 11], but external validity is limited because the models are “trained exclusively on the 2022–2025 EPL seasons” [PAGE 16]. A multi-week player-evaluation study can mistake exposure for skill because stronger teams “reach dangerous states more frequently, and this exposure is not explicitly modeled” [PAGE 16–17]. A multi-week physical-validation study can overtrust \(openGoal\) because it ignores reach, height, and jumping [PAGE 16]. These are not minor caveats; they are the exact places where a retrocausal narrative—xG+ “must” improve all downstream judgments—can outrun the evidence.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive analyst problem has three regimes. First, crisis habit regression: when the 90% squared-error intervals overlap across methods [PAGE 12], an analyst may regress to the familiar sum-of-xG habit and ignore the binomial win evidence. But the paper reports that “observing 69 or more wins for the at-least-one xG+ specification has probability 0.015, and observing 70 or more wins for the max-per-possession xG+ specification has probability 0.009” [PAGE 12–13]. The correct habit is not xG-only; it is to check the aggregation rule and the out-of-sample fold structure. Second, counter-trap: because \(SOE\) stability is \(0.63\) while \(GOExG\) stability is \(0.12\) [PAGE 13], an overcorrector may declare shot creation the only real skill and discard finishing. That is a counter-trap because \(xS\) is not a goal probability; the paper’s own \(xG^+\) stability sits between the two at \(0.35\) [PAGE 13], and the discussion explicitly says xG+ “attributes value to both the buildup and the finish” [PAGE 13–14]. Third, clock: the one-second horizon and possession clock govern what the metric can mean. The max-per-possession rule is “either indistinguishable (to two decimal places) from, or slightly better than, the at-least-one-per-possession approach” [PAGE 12], but the at-least-one rule “grows mechanically with possession length” [PAGE 12]. A recursive theory of mind must therefore model how coaches and players adapt: if \(xS\) becomes a target, players may force shots to raise \(xS\), and if \(SOE\) becomes a contract metric, opportunity exposure may be gamed. The paper’s future-work call for “hierarchical team and player effects” to mitigate selection on opportunity [PAGE 17] is the right countermeasure. Prediction: raw \(SOE\) will remain a useful scouting signal, but adjusted \(SOE\) with team, position, minutes, and possession exposure will attenuate; \(xG^+\) will be more stable than \(GOExG\) but less stable than \(SOE\); and any deployment that rewards \(xS\) without a possession-length or max-operator guard will inflate long possessions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto should be formalized as a feasibility indicator \(V^{phys}_t\in\{0,1\}\) multiplying the frame hazard:
\[
xG^{+\,veto}_t = V^{phys}_t\,xS_t\,xG_t.
\]
The paper does not implement this hard veto; it learns smooth feature effects from \(r\), \(\theta\), \(z\), speed, \(openGoal\), goalkeeper geometry, and nearest-player distances [PAGE 19]. Physical veto proof: if the ball state is geometrically impossible or the goal is fully occluded by an untracked physical object, the learned probability should be overridden to zero, but the source provides no such override. Biomechanical veto proof: \(openGoal\) uses 2D circles of 75 cm diameter [PAGE 19] and “ignores differences in reach, height, and jumping” [PAGE 16]; ball height is only a “correlated proxy for what body part was used” [PAGE 8]. Thus a header or volley chance can be mispriced when a defender’s 3D reach changes the true obstruction. Weather veto proof: weather variables are absent from Table 11 [PAGE 19]; rain, wind, and surface traction can change ball speed, bounce, and tracking error, but the model only sees measured speed, height, and positions. Therefore the defensible claim is not “xG+ is physically universal.” The defensible claim is “xG+ is a calibrated possession hazard under the EPL tracking regime, subject to recalibration when physical, biomechanical, or weather layers violate the snapshot feature assumptions.” A hard veto is warranted only when a verified physical impossibility or a verified calibration failure occurs; otherwise the correct action is hierarchical recalibration, not deletion.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Team-prediction veto. Verifiable test: reproduce the rolling-origin cross-validation over 114 matchdays, compare max-per-possession \(xG^+\) against sum-of-shots xG on MSE and on the fraction of matchdays won. Veto rule: if \(xG^+\) MSE is not lower than sum-of-xG, or if its win fraction is not above 0.5, the claim “xG+ offers a genuinely better predictor of future team scoring” is vetoed. Prediction: the paper reports MSE 2.84 versus 2.90 [PAGE 11] and 70/114 wins, fraction 0.614, with binomial probability 0.009 [PAGE 13]; a correct reproduction should pass, while a failure would indicate leakage, wrong aggregation, or a broken Poisson stage.

Scenario 2: Player-skill veto. Verifiable test: recompute year-to-year \(SOE\) correlation after hierarchical adjustment for team, position, minutes, and opportunity exposure, and repeat on a non-EPL league. Veto rule: if adjusted \(SOE\) correlation falls to near zero or fails out-of-league, the causal claim that \(SOE\) measures repeatable individual shot-creation skill is vetoed. Prediction: the raw correlation is 0.63 [PAGE 13], but because “selection on opportunity persists” [PAGE 16], adjustment should attenuate it while leaving a positive signal; if it vanishes entirely, the raw number is exposure, not skill.

Scenario 3: Physical-layer veto. Verifiable test: add 3D player reach, height, jumping, and orientation to \(openGoal\), and add weather covariates to the \(xG\) and \(xS\) models; compare log loss against the reported XGBoost all-features values of 0.326 for xG and 0.0227 for xS [PAGE 7]. Veto rule: if the 3D and weather model materially improves log loss and reduces \(openGoal\) importance, the claim that the 2D snapshot physical layer is sufficient is vetoed. Prediction: xG should improve most on headers, volleys, and crowded goalmouths; weather should have a smaller but nonzero effect; if neither improves, the original snapshot layer is empirically adequate for this dataset, but the paper’s own admission that \(openGoal\) “ignores differences in reach, height, and jumping” [PAGE 16] still limits universal physical claims.
</RLVR_COUNTERFACTUAL_VETOES>
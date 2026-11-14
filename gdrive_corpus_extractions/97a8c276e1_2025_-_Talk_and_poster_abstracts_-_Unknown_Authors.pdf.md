---
source: "2025 - Talk and poster abstracts - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 7594
---

<NATIVE_REASONING>
We need answer user. Need parse: They provided DRIVE SOURCE and pages. They expect GSE + GSI Frontier Reasoning Foundry, strict invariants, sections exact XML. Need likely analyze source? No explicit question besides source. Need produce deep multi-hop derivation & gray-zone audit, formal equations citations, genealogy, recursive theory mind, cross-layer veto, RLVR counterfactual vetoes. Must be >=1000 words across sections. Need not mention betting lines. Need cite exact [PAGE N] markers and verbatim quotes. Need derive from source pages. Need identify themes? The source is sports research abstracts. Need perhaps synthesize? "DRIVE SOURCE" maybe wants frontier reasoning output. Need avoid betting lines, no spreads/totals/moneylines/odds. Note source includes betting odds in furosemide abstract. Invariant says never mention betting lines: spreads, totals, moneylines, or odds. But source quote includes "public betting odds" — we should avoid quoting that exact phrase? Need cite verbatim quotes but not mention odds? Hmm conflict: user says source has "When controlling for public betting odds..." but invariant zero betting lines. We can avoid that page/quote or paraphrase? Need cite exact quotes from pages. We can quote other phrases. Don't mention odds. Need formal LaTeX equations, units, assumptions, singularity/breakdown. Need maybe choose a coherent analysis target. The source is 21 pages of abstracts; could compare frameworks: residualized metrics, xPV, CATE, RAPM stabilization, win probability, etc. Need generate "GSE + GSI Frontier Reasoning Foundry" perhaps a meta-analysis. Need include exact XML sections. Need >=1000 words. Desired oververbosity 5; but requirements demand depth. Need include equations formal. We can create a synthesis: "Source-operator adjudication of sports analytics abstracts" with equations for residualized player evaluation, xPV, CATE, RAPM stabilization, Brownian win probability, GAM weather, Bayesian hierarchical. Need cite exact pages and verbatim quotes. Need "gray-zone audit" and breakdown regimes. Need mention page markers. Need include units: probability dimensionless, positions meters, time seconds, expected points, VO2 max mL/kg/min etc. Need source citations exact [PAGE N] and verbatim quotes. Need maybe quote short phrases. Need not overdo.

Need structure exact sections:
<THINK_TRACE>... >=400 words</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need include >=1,000-word depth across exact XML sections. We can make ~2000 words. Need mention "no betting lines". We can state no wager constructs. Need not say odds.

Need think of a central derivation. Source abstracts cover player evaluation. Maybe answer as "frontier reasoning foundry" audit: how to integrate source operators into a robust player/team evaluation pipeline. Need formal equations:
- Residualized score: Let Y_i outcome, X_i covariates, \hat m(X_i) expected outcome from ML. Residual R_i = Y_i - \hat m(X_i). Player effect via semiparametric model E[Y_i | X_i, player p] = m(X_i)+ θ_p. Score test / residualized. Units outcome (goals, xG) per event. Breakdown when \hat m overfits, leakage, non-identifiability, collinearity.
- xPV: pitch control P_control(z,t) = σ( ... velocities, angles); pitch value V(z) = expected xG/possession value; xPV(pass) = ∫? Actually xPV = V(z_end) - V(z_start) maybe plus control. Need formal: xPV(a→b)=P_ctrl(b; X_t) V(b) - P_ctrl(a; X_t) V(a), or expected. Units expected goals per pass. Breakdown if tracking missing, pitch control model mis-specified, pass hypothetical value not causal.
- CATE: τ_i = E[EPA(1)-EPA(0)|X_i], treatment tackle binary, outcome EPA. Doubly robust estimator. Units expected points. Breakdown when positivity fails, interference, time-varying confounding.
- RAPM stabilization: split-half correlation ρ(n, collinearity, noise ratio). Model y = Xβ + ε; β ridge. Stabilization n* when reliability crosses threshold. Units possessions. Breakdown when design collinear, noise/talent ratio high.
- Win probability paradox: W_t Brownian bridge? Actually "calibrated win-probability paths as Brownian motions" and maximum distribution. Define W_t = P(win | state_t); conditioned on loser? Need not too deep. But source says "Donsker’s invariance principle, we recast calibrated win-probability paths as Brownian motions and derive closed-form expressions for the full distribution of these maxima". We can state formula for Brownian motion maximum over [0,T]: P(max_{0≤t≤T} B_t ≥ a) = 2(1-Φ(a/√T)). For Brownian bridge maybe. Units probability. Breakdown if non-stationary, calibrated? But no betting lines.
- Weather GAM: logit P(completion)=s(wind)+... units m/s. Breakdown extrapolation.
- Bayesian hierarchical: Poisson home runs; log λ = α + β_park + u_batter + v_pitcher + ...; units HR per game-matchup. Breakdown if overdispersion, small samples.
- Furosemide: causal matched dataset; but avoid odds. We can mention "probability of finishing in the money" and "55%" from page 19, no betting odds quote. Is "finishing in the money" a betting line? No, it's race outcome. Fine.
- Chess streak: probability of pure/non-losing/in-between streaks. Formal recurrence? Could include Markov chain. Units probability. Not central.
- Player consistency GARCH: volatility constant. Units metric. Breakdown if nonstationary.
Need maybe include "source operators" as a table? XML sections can contain text and equations. Need maybe use bullet lists.

Need exact [PAGE N] markers and verbatim quotes. We can include quotes:
- [PAGE 1] "residualized versions of the original metrics" and "valid uncertainty quantification can be achieved when using machine learning models."
- [PAGE 3] "we develop a framework for valuing any real or hypothetical pass on the pitch" and "pitch control model" and "pitch value model".
- [PAGE 4] "frame-level Conditional Average Treatment Effects (CATE) of tackling using multi-agent Transformer models" and "Expected Points Added (EPA) as the outcome."
- [PAGE 15] "stabilization is delayed when players frequently appear with the same teammates" and "higher noise-to-signal ratio ... elevates the stabilization threshold."
- [PAGE 7] "recast calibrated win-probability paths as Brownian motions" and "maximum win probability attained by the losing team."
- [PAGE 13-14] "higher wind speeds are associated with a shift in throw selection" and "effect intensifying at longer distances."
- [PAGE 6] "von Mises distribution for the frame-level turn angle" and "concentration to vary by ball carrier".
- [PAGE 19] "perfectly-matched dataset of 28,617 two-year-old horses" and "increases a two-year-old’s odds of finishing in the money by 55% on average." Careful "odds" word appears. Invariant says never mention odds. But quote contains "odds". Should avoid? We can quote "increases a two-year-old’s ... by 55% on average" but ellipsis replacing odds? It would not be verbatim. Better avoid this page entirely. Or quote "perfectly-matched dataset of 28,617 two-year-old horses" only, no odds. That is safe. But "odds" in source not mention. We can say "probability of finishing in the money" paraphrase. Fine.
- [PAGE 2] "289 American Hockey League (AHL) games" and "approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions" units.
- [PAGE 12] "volatility constant = 65.9201" maybe.
- [PAGE 16] "quantile cube" and "GPS-derived movement data from 23 matches".
- [PAGE 20] "expected goals (xG) using kernel density estimation" and "conditional kernel density estimation (CKDE)".
Need maybe quote page 20 xT.

Need multi-hop derivation and gray-zone audit. We need explain "multi-hop": tracking → event → model → metric → decision; audit each hop. We can define pipeline. Need mention "gray-zone" cases: collision of player effects and lineup collinearity; CATE interference; win probability post-hoc conditioning; weather nonlinearity; small sample; transfer/NIL state-space. Need be rigorous.

Need maybe "GSI" means "gray-zone sensitivity index"? We can invent? Careful no fake ratios. But GSE/GSI Frontier Reasoning Foundry maybe a name. We can mention "gray-zone audit" not fake equation. Avoid inventing ratios. "Zero toy equations" means don't invent fake ratios. Formal equations okay if grounded.

Need maybe not overstate "proof". "Cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need include physical constraints: skating speed, acceleration, edge control; wind; turn angle; ball curvature; VO2 max; horse physiology. Need "veto proof": if biomechanical/weather variables change, model estimates invalid unless included. We can state veto criteria: e.g., if wind speed above training support, GAM extrapolation invalid; if tracking sample rate insufficient for acceleration, CATE invalid; if pitch control model ignores velocity, xPV invalid; if lineup collinearity high, RAPM not identified; if tackle treatment has interference, CATE not causal. Need "proof" as logical conditions, not empirical proof. Maybe formal: identifiability condition rank(X'X)=p; positivity P(T=1|X)>ε; SUTVA. If violated, metric is non-identified. Use equations.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. In sports context: coaches/analysts under crisis revert to familiar habits (e.g., aggregate stats, traditional metrics), counter-trap (over-adjusting to model outputs), clock (time pressure/sample size). Need map to source: coaches use timeouts to disrupt runs [PAGE 18-19]; penalty takers value optics [PAGE 7-8]; transfer portal volatility [PAGE 8]; NBA coaches BOE [PAGE 14]. Need recursive ToM: modeler thinks analyst thinks coach thinks player. Need discuss multi-agent. Use quotes.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need trace from plus-minus/RAPM to residualized metrics to xPV to CATE to transformer. Historical lineage: goal/shot metrics → xG/xA → plus-minus/RAPM → regularization/ridge → residualized score test → semiparametric ML → causal CATE/transformers. Also win probability Brownian. Bayesian hierarchical. Weather GAM. Multi-week traps: leakage, post-hoc conditioning, collinearity, selection bias, sparse tracking, model drift, transfer/NIL nonstationarity, public attention. Need mention multi-week traps across weeks? Could be "multi-week trap": a model that looks good in one week fails after roster changes or weather. Need no betting.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? Need three scenarios:
1. Residualized player metric with ML expected outcome: if randomized player assignment? Prediction: if you shuffle player labels within lineup, residualized score should drop to zero; if not, leakage. Veto if residual score persists. Verifiable: permutation test. Prediction? Hmm.
2. CATE tackle: if you permute treatment labels within frame and refit, estimated CATE distribution should center zero; if model still finds nonzero, veto. Prediction: with 1,000 permutations, 95% interval includes zero; actual CATE outside. But source says CATE. Need predictions.
3. Weather GAM: if you replace wind speed with future wind (leakage) or random wind, model fit should not improve; if random wind improves, veto. Prediction: actual wind coefficient improves out-of-sample log score by X? We don't have data. Can state expected sign and interval? Need "verifiable predictions" not necessarily numeric? We can predict direction and test. Could include "out-of-sample Brier score lower by >0" etc. Need no betting lines. Brier score is probability score, okay.
4. RAPM stabilization: split-half correlation should increase with possessions; if not, veto. Prediction: plus-minus requires more possessions than rebounding. Source says.
Need exactly 3 scenarios. Need include equations maybe.

Need word count >=1000. We can do ~2500. Need not overdo but enough. Need ensure XML tags exactly. Need not include markdown? We can use plain text with XML tags. Equations in LaTeX. Need maybe escape &? Use \&? In XML text, ampersand must be escaped if strict XML. We can avoid ampersands or use \&. Need if we use "GSE + GSI" plus sign okay. Use no raw &. Use "and" instead. Need if quoting "PFF" etc. Fine.

Need be careful with XML: LaTeX uses <, >? Avoid raw < in text? In XML, less-than must be escaped. If I write "P(T=1|X)>0", > is okay, < not. Avoid <. Use \leq, \geq. Use \mathbb. The XML parser might not care but strict. Use no raw ampersands. Use "and" not &. Use "R^2" okay. Use "95%". Use "±" okay. Use "→" okay. Use "≈". Fine.

Need mention "no betting lines" maybe at top. But not necessary. Could say "No wager constructs are used." That doesn't mention lines? It mentions wager but okay? Invariant says never mention spreads, totals, moneylines, or odds. "wager" not forbidden but maybe avoid.

Need maybe "DRIVE SOURCE" indicates source pages. Need cite [PAGE N]. Good.

Let's draft.

Need first section THINK_TRACE >=400 words. It should be deep multi-hop derivation & gray-zone audit. We can write ~600 words. Include pipeline hops and audit. Need mention exact source. We'll do.

Then SOURCE_OPERATORS_AND_EQUATIONS with formal LaTeX, units, page citations, breakdown. Include multiple subheads. Need cite exact quotes. Maybe 8 operators. Need word count.

Then RETROCAUSAL_GENEALOGY ~300 words.

RECURSIVE_THEORY_OF_MIND ~300 words.

CROSS_LAYER_VETO_ADJUDICATION ~300 words.

RLVR_COUNTERFACTUAL_VETOES ~300 words.

Total ~2000. Good.

Need decide "central object". I can frame as "a frontier audit of the 21-page abstract set: how to turn tracking/event data into defensible player/team inference." Need maybe not solve any specific sports prediction. Good.

Let's write with exact quotes. Need quote page 1: "residualized versions of the original metrics" and "valid uncertainty quantification can be achieved when using machine learning models." Use [PAGE 1]. Page 3: "valuing any real or hypothetical pass on the pitch" and "pitch control model" "pitch value model". Page 4: "frame-level Conditional Average Treatment Effects (CATE) of tackling" and "Expected Points Added (EPA) as the outcome". Page 15: "stabilization is delayed when players frequently appear with the same teammates" and "higher noise-to-signal ratio ... elevates the stabilization threshold." Page 7: "recast calibrated win-probability paths as Brownian motions" and "maximum win probability attained by the losing team." Page 13: "higher wind speeds are associated with a shift in throw selection" and page 14 "effect intensifying at longer distances." Page 6: "von Mises distribution for the frame-level turn angle". Page 2: "289 American Hockey League (AHL) games" and "approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions". Page 16: "quantile cube" and "GPS-derived movement data from 23 matches". Page 20: "expected goals (xG) using kernel density estimation" and "conditional kernel density estimation (CKDE)". Page 8: "Bayesian state-space model" and "between-season innovation variance". Page 12: "volatility constant = 65.9201" maybe.

Need formal equations:

1. Residualized score:
Let \(Y_i\in\mathbb{R}\) outcome for event i (goals, xG, EPA; units depend). \(X_i\) context. ML expected \(\hat m(X_i)\). \(R_i=Y_i-\hat m(X_i)\). Player effect:
\(Y_i = m(X_i) + \theta_{p(i)} + \epsilon_i\), \(\mathbb{E}[\epsilon_i|X_i,p(i)]=0\).
Residualized metric \(\hat\theta_p = \sum_{i:p(i)=p} w_i R_i / \sum w_i\) or GEE. Variance via influence function. Breakdown: if \(\hat m\) trained with player labels/outcome leakage, \(\mathbb{E}[R_i|p]\neq0\) even with no skill; if outcomes sparse, variance huge. Need cite page 1.

2. xPV:
At location z and time t, control probability \(c_t(z)=\sigma(g(z; \{s_j(t),v_j(t),\phi_j(t)\}))\). Pitch value \(V(z)=\mathbb{E}[xG | possession at z]\) (expected goals per possession). For pass a→b:
\(xPV(a\to b)=c_{t+\Delta}(b)V(b)-c_t(a)V(a)\). Maybe include integration over uncertainty: \(\mathbb{E}\). Units: expected goals per pass. Breakdown if c model ignores angular mismatch, if V not calibrated, if hypothetical pass not feasible, if tracking rate too low. Cite page 3.

3. CATE:
\(Y_i=\text{EPA}_i\), \(T_i\in\{0,1\}\) tackle. \(\tau(x)=\mathbb{E}[Y_i(1)-Y_i(0)|X_i=x]\). Doubly robust:
\(\hat\tau(x)=\mathbb{E}_n[(\frac{T_i}{\hat e(X_i)}-\frac{1-T_i}{1-\hat e(X_i)})(Y_i-\hat m(X_i,T_i))+\hat m(X_i,1)-\hat m(X_i,0)]\). Units expected points. Assumptions: SUTVA/no interference, positivity, sequential exchangeability. Breakdown: multi-agent interference violates SUTVA; time-varying confounding; propensity extreme. Cite page 4.

4. RAPM stabilization:
\(y = X\beta+\epsilon\), \(\hat\beta_\lambda=(X^TX+\lambda I)^{-1}X^Ty\). Reliability \(\rho(n,\kappa,\nu)\) where \(\kappa\) collinearity, \(\nu=\sigma^2/\tau^2\) noise-to-talent ratio. Stabilization \(n^*=\min\{n:\rho(n,\kappa,\nu)\geq\rho_0\}\). Units possessions. Breakdown: rank deficiency, collinearity. Cite page 15 quotes.

5. Win probability max:
\(W_t=P(\text{win}|S_t)\), \(W_T\in\{0,1\}\). For loser, max \(M=\max_{0\leq t\leq T} W_t\). Brownian approximation \(B_t\) with variance σ²t; \(\Pr(\max_{0\leq t\leq T}B_t\geq a)=2(1-\Phi(a/(\sigma\sqrt{T})))\). Brownian bridge variant. Units probability. Breakdown: nonstationarity, calibration drift, post-hoc conditioning. Cite page 7.

6. Weather GAM:
\(\operatorname{logit}\Pr(\text{completion}_i=1)=f_1(w_i)+f_2(d_i)+...\). \(w_i\) wind speed m/s, \(d_i\) throw distance m. Or scoring \(\operatorname{logit}\Pr(\text{score})=...\). Breakdown outside support, collinearity wind with location, measurement error. Cite pages 13-14.

7. Bayesian hierarchical Poisson:
\(Y_{g,h}\sim \text{Poisson}(\lambda_{g,h})\), \(\log\lambda_{g,h}=\alpha+\beta_{\text{park}(g)}+\gamma_{\text{batter}(h)}+\delta_{\text{pitcher}(h)}+\eta_{\text{hand}} +\log E_{g,h}\). Units HR per game-matchup. Cite page 6. Breakdown if overdispersion, park effects confounded with personnel, small counts.

8. GARCH consistency:
\(r_t=\mu+\epsilon_t\), \(\epsilon_t=\sigma_t z_t\), \(\sigma_t^2=\omega+\alpha \epsilon_{t-1}^2+\beta\sigma_{t-1}^2\). Units player performance metric. Breakdown nonstationarity, structural breaks. Cite page 12.

9. State-space transfer:
\(\theta_{s,t}=\theta_{s,t-1}+\eta_{s,t}\), \(\eta_{s,t}\sim N(0,\tau^2_{s,t})\), \(\log\tau^2_{s,t}=...\) transfers/NIL. Units team strength. Breakdown if NIL rule changes nonstationary, small samples. Cite page 8.

Need not too many. Good.

Need "singularity/breakdown regimes": For each equation, mention singular when X'X rank deficient; positivity violation; extrapolation; etc.

Need maybe "SI/information/probability units": include units: meters, seconds, m/s, expected goals, expected points, possessions, probability dimensionless, nats/bits? Information units maybe not needed. Could mention entropy in HMM "average entropy" has nats or bits. Source page 5 says "average entropy" but no units. We can state if entropy is natural log, nats; base-2 bits. That satisfies info units. Need include? Maybe in operators: HMM entropy \(H=-\sum p\log p\) units nats (base e) or bits (base 2). Cite page 5. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We can formalize: A metric \(M\) is admissible only if \(M\) is invariant under allowed transformations and sensitive to target. Veto if omitted variable changes ranking. Use examples:
- Skating: acceleration \(a=dv/dt\) units m/s²; sampling rate \(f_s\) must exceed Nyquist for movement bandwidth. If tracking gaps, acceleration estimates biased. Veto CATE? Page 2.
- Turn angle von Mises: angle in radians; concentration κ dimensionless. If frame rate too low, turn angle alias. Page 6.
- Ball curvature: Bezier fit in sagittal plane; terminal curvature; units 1/m? Curvature κ = |x'y''-y'x''|/(x'^2+y'^2)^{3/2}, units 1/m. Page 9. If tracking noise, curvature biased; veto shooting smoothness metric.
- Wind: GAM support; if wind > observed max, extrapolate; veto.
- VO2 max: mL/kg/min; functional models. Page 4-5.
- Furosemide: physiological causal effect; matched dataset; confounded by race conditions. Page 19. Need avoid odds. Quote "perfectly-matched dataset of 28,617 two-year-old horses". Good.
- Quantile cube GPS: 23 matches; velocity/acceleration/angle; if sampling rate or match conditions differ, veto. Page 16.
Need "proof" maybe as formal condition: Model estimand \(\theta\) is identified only if \(P(A|X)\) bounded away from 0 and 1, and if physical covariates \(Z\) satisfy \(Y \perp T | X,Z\). If \(Z\) omitted, omitted variable bias \(\text{bias} = \mathbb{E}[Y(1)-Y(0)|X] - \tau = ...\). Could include. But no fake ratio. It's standard.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Use source:
- Crisis habit regression: under pressure, analysts/coaches revert to aggregate stats (tackle counts, win-loss records) despite known limitations. Page 4 "Traditional metrics like tackle counts fail to capture causal contributions"; page 14 "Championships and regular-season win-loss records depend on many factors not under a coach’s control." Good.
- Counter-trap: overcorrecting by treating model output as truth; e.g., BOE may overrate coaches who maximize player BPM but not wins; xPV may reward hypothetical passes not feasible; CATE may suggest defensive impact but violates SUTVA. Need "counter-trap" = modeler overfits to opponent's model. Use penalty kick: "Players are revealed to value optics of performance rather than strictly performance-optimization" [PAGE 7-8]. That's player ToM: they think about observer evaluation (optics). Coach thinks player thinks scout. Good.
- Clock: time pressure/sample size. NBA timeout study [PAGE 18-19] causal effect small but significant; coaches must decide in real time. Win probability graphics [PAGE 7] create narrative pressure; post-game conditioning biases. Transfer portal [PAGE 8] between-season innovation variance; decisions on clock. Need discuss recursive: analyst models coach's decision; coach models player's psychology; player models audience/optics; audience models win probability. Need quote "They behave as hybrid decision-makers who deviate from optimal PK-locating strategies in a manner consistent with the behavioral-valuation of optics of highly-skilled play" [PAGE 7-8] maybe exact? It says "They behave as hybrid decision-makers who deviate from optimal PK-locating strategies in a manner consistent with the behavioral-valuation of optics of highly-skilled play by limiting likelihood of missing the goal entirely as might a novice-player." Good. Use [PAGE 8] or [PAGE 7]? The quote spans page 7-8? Page 7 ends "goal-optimizing" and page 8 starts "penalty-kick taker." The quote is on page 8? Actually page 8 text includes "They behave as hybrid decision-makers..." yes [PAGE 8]. Good.

Need "RETROCAUSAL_GENEALOGY": Historical lineage:
- Plus-minus → RAPM → stabilization → residualized metrics. Source page 10-11 "Plus-minus metrics have historically faced skepticism in soccer analytics" [PAGE 10]; page 15 RAPM stabilization.
- Expected goals → xG/xA → xPV → pressing xT. Source page 3 xPV; page 19-20 pressing xT.
- Causal inference → CATE → multi-agent transformers. Source page 4.
- Bayesian hierarchical → park effects, T20, transfer state-space. Source page 6, 8, 20.
- Win probability → Brownian. Source page 7.
- Wearables → functional data → digital health. Source page 4-5.
Multi-week traps:
1. Leakage across weeks: expected outcome model trained on same season; residualized score contaminated.
2. Collinearity: lineups stable over weeks; RAPM unstable.
3. Nonstationarity: transfer portal/NIL, rule changes (furosemide ban), weather seasonality.
4. Selection bias: aging curves longer careers for successful athletes [PAGE 10].
5. Post-hoc conditioning: win probability maxima [PAGE 7].
6. Overfitting to public narrative: media rankings overrate championship coaches [PAGE 14].
Need mention "multi-week traps" exactly.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable RLVR veto scenarios + predictions. We can frame as "If this analytical claim were trained/evaluated with verifiable rewards, these counterfactuals would veto it." Use equations? Need predictions:
Scenario 1: Residualized score leakage. Counterfactual: randomly permute player IDs within each lineup/event while holding expected outcome fixed. Prediction: true model's player effects collapse to near zero; if nonzero > permutation 95th percentile, veto. Verifiable via permutation test. Need maybe say "expected \( \hat\theta_p\) distribution centered at 0 with standard deviation ..." no fake numbers? We can say "centered at zero." That's okay.
Scenario 2: CATE tackle interference. Counterfactual: permute tackle treatment labels within frame and re-estimate; also evaluate on held-out plays with a different defender removed. Prediction: if estimated CATE persists under label permutation or flips sign under defender swap, veto. Verifiable: 95% CI includes zero under null; held-out sign agreement. Need mention "positivity" maybe.
Scenario 3: Weather GAM support. Counterfactual: replace wind speed with lagged or future wind; or evaluate on held-out matches beyond observed wind support. Prediction: true wind effect has negative coefficient for completion and stronger at long distance [PAGE 14]; if future wind improves out-of-sample as much as actual wind, veto (leakage). If random wind improves, veto. Verifiable: out-of-sample log score or Brier score; coefficient sign and distance interaction. Need no betting lines. Good.
Could include RAPM as scenario instead? But exactly 3. Maybe use RAPM because source has strong quote. But RLVR counterfactual vetoes should be verifiable. Could do:
1. Residualized ML metric leakage permutation.
2. RAPM collinearity split-half: shuffle lineup labels? Prediction: split-half reliability lower under high collinearity; if not, veto. But CATE is more causal. Need 3. Use weather as third. Good.

Need mention "predictions" with sign and test. Need avoid numeric fake? The source provides some numbers: 289 games, 28,617 horses, 55%, 0.272 points, etc. We can use those as predictions? For RLVR, we can use source numbers: e.g., timeout ATE 0.272 points [PAGE 18-19] — but that's not our scenario. Maybe include as cross-check? Not necessary.

Need "verifiable RLVR veto" maybe "Reinforcement Learning with Verifiable Rewards" scenarios. We can state each has a binary verifier. Good.

Need maybe answer should not propose actual sports predictions or betting. Fine.

Need ensure no "odds" word. I must avoid quoting "public betting odds". Also avoid "moneyline" etc. I can mention "no wager constructs" but maybe not. I'll not mention "betting" at all. The source has "finishing in the money"; I can avoid. Good.

Need check word count. Let's draft in final. Need maybe use paragraphs. XML tags. Need include equations with \( \) or \[ \]. Fine. Need not use markdown headers? We can use plain text within XML. Use bullets with hyphens. XML tags exact. Need maybe escape ampersands: use "and" not &. In LaTeX, \& not needed. Avoid raw & in text. Use "and" everywhere. If I write "R^2" no &.

Need maybe use "PAGE 7-8" as [PAGE 7] or [PAGE 8]. User said exact [PAGE N] markers. Use one marker per page. For quote spanning, cite [PAGE 8]. Good.

Need "verbatim quotes" exact. Ensure quotes are exact from source. Let's verify:
Page 1: "residualized versions of the original metrics" exactly? Text: "we propose a natural extension to this framework using residualized versions of the original metrics. In this way, valid uncertainty quantification can be achieved when using machine learning models." Yes.
Page 3: "valuing any real or hypothetical pass on the pitch" exactly? "we develop a framework for valuing any real or hypothetical pass on the pitch based on two well-established components: (1) a pitch control model, and (2) a pitch value model." Good.
Page 4: "frame-level Conditional Average Treatment Effects (CATE) of tackling using multi-agent Transformer models" exactly? "We propose a novel causal inference framework that estimates frame-level Conditional Average Treatment Effects (CATE) of tackling using multi-agent Transformer models trained on NFL tracking data." Good. "Expected Points Added (EPA) as the outcome" exact.
Page 15: "stabilization is delayed when players frequently appear with the same teammates" exact? Text: "we demonstrate that stabilization is delayed when players frequently appear with the same teammates, leading to high collinearity and reduced identifiability of individual contributions." Good. "higher noise-to-signal ratio ... elevates the stabilization threshold" exact? "We further show that a higher noise-to-signal ratio, arising from either high game-to-game variability or low underlying talent variance, elevates the stabilization threshold." Good.
Page 7: "recast calibrated win-probability paths as Brownian motions" exact? "Leveraging Donsker’s invariance principle, we recast calibrated win-probability paths as Brownian motions and derive closed-form expressions for the full distribution of these maxima as a function of relative team strength." Good. "maximum win probability attained by the losing team" exact? "we investigate blown leads by analyzing the distribution of a single statistic: the maximum win probability attained by the losing team." Good.
Page 13: "higher wind speeds are associated with a shift in throw selection" exact? "Results reveal that higher wind speeds are associated with a shift in throw selection away from medium-distance attempts toward shorter throws" Good. Page 14: "effect intensifying at longer distances" exact? "Wind speed also exhibits a measurable impact on throw completion probability, with the effect intensifying at longer distances." Good.
Page 6: "von Mises distribution for the frame-level turn angle" exact? "we consider a von Mises distribution for the frame-level turn angle and explicitly model both the mean and concentration parameters" Good.
Page 2: "289 American Hockey League (AHL) games" exact? "Our dataset comprises 289 American Hockey League (AHL) games from the 2024–25 season" Good. "approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions" exact? Yes.
Page 16: "quantile cube" exact? "By constructing a quantile cube to quantify movement patterns" Good. "GPS-derived movement data from 23 matches" exact? "using GPS-derived movement data from 23 matches." Good.
Page 20: "expected goals (xG) using kernel density estimation" exact? "We estimate expected goals (xG) using kernel density estimation, then proceed with conditional kernel density estimation (CKDE)" Good.
Page 8: "Bayesian state-space model" exact? "we use a Bayesian state-space model to capture the impact of transfers and NIL on the volatility of team strengths over time." Good. "between-season innovation variance" exact? "modeling the between-season innovation variance as a function of incoming transfers and NIL rule changes." Good.
Page 12: "volatility constant = 65.9201" exact? "volatility constant = 65.9201" yes.
Page 19: "perfectly-matched dataset of 28,617 two-year-old horses" exact? "We study a perfectly-matched dataset of 28,617 two-year-old horses that have raced both with and without furosemide" Good.
Page 5: "average entropy" exact? "such as average entropy" yes. Could mention units.
Page 10: "selection bias" exact? "We extend the work from Cavan et.al (2025) to account for selection bias, since more successful athletes tend to have longer careers." Good.
Page 14: "Championships and regular-season win-loss records depend on many factors not under a coach’s control." Exact? Yes.
Page 4: "Traditional metrics like tackle counts fail to capture causal contributions" exact? Yes.

Need maybe "SI/information/probability units" in equations. We'll include. For HMM entropy, if using natural log, nats; base-2 bits. Good.

Need answer not too verbose? User demands depth. We'll produce ~2500 words. Need maybe avoid "I". Use "The source set". Good.

Need maybe include "GSE + GSI" maybe "Frontier adjudication". Fine.

Let's compose final carefully.

Potential issue: XML tags with underscores okay. Need ensure no raw `<` in LaTeX. Avoid "P<0.05" use "p \leq 0.05". Avoid "<" anywhere. Use "less than". Avoid ">"? > is allowed but maybe escape? In XML, > is okay. But to be safe avoid > too? Use \gt? In LaTeX, > okay. But raw > is allowed. Fine.

Need avoid "&" in "CATE &". Use "and".

Need maybe use `\( \)` with `\mathbb{E}`. Fine.

Need not include markdown tables? Use bullets.

Need word count. Let's estimate: THINK_TRACE ~650, SOURCE ~1000, others ~300 each = 2250. Good.

Need answer final only.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The 21-page source set is not a single paper; it is a conference abstract bundle spanning tracking-data biomechanics, causal inference, Bayesian hierarchical models, residualized player evaluation, win-probability theory, weather effects, and roster/transfer volatility. The frontier-reasoning task is therefore to adjudicate the shared inferential chain rather than to collapse the abstracts into one model. The chain has five hops: raw sensing or event data, contextual expectation model, player/team effect estimate, uncertainty quantification, and decision or narrative use. Each hop has a failure mode. For example, [PAGE 1] proposes “residualized versions of the original metrics” so that “valid uncertainty quantification can be achieved when using machine learning models,” but that guarantee is conditional on no player-outcome leakage into the expected-outcome model. [PAGE 3] values “any real or hypothetical pass on the pitch” using a “pitch control model” and a “pitch value model,” but hypothetical passes are model-derived counterfactuals, not observed treatments. [PAGE 4] estimates “frame-level Conditional Average Treatment Effects (CATE) of tackling” with “Expected Points Added (EPA) as the outcome,” which requires positivity, exchangeability, and no interference; multi-agent football violates no-interference unless the estimator explicitly absorbs it. [PAGE 15] warns that “stabilization is delayed when players frequently appear with the same teammates,” and that a “higher noise-to-signal ratio ... elevates the stabilization threshold.” That is a direct gray-zone audit of plus-minus: collinearity and noise can make a metric look stable only after thousands of possessions, or never within a season. [PAGE 7] shows a separate post-hoc conditioning trap: the “maximum win probability attained by the losing team” is not a neutral in-game statistic because every loser’s path terminates at zero and every winner’s at one. Their “recast calibrated win-probability paths as Brownian motions” is a principled repair, but only under calibration and stationarity assumptions. The gray-zone audit therefore rejects universal claims such as “the metric is valid” and replaces them with conditional claims: valid for a specified sampling regime, treatment regime, physical support region, and decision clock.

Multi-hop derivation from source to inference: first, sensing. [PAGE 2] reports “289 American Hockey League (AHL) games” with “approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions,” which sets a high-frequency spatial-temporal regime. Any acceleration, turn-angle, or curvature estimate must respect sampling rate and tracking noise; otherwise the physical operator is aliased. [PAGE 6] uses a “von Mises distribution for the frame-level turn angle,” so angle is in radians and concentration is dimensionless, but frame-level differencing amplifies positional noise. [PAGE 9] fits Bezier curves and finds terminal curvature more explanatory than maximum curvature for free-throw performance, which is a biomechanical claim about the end of the shooting motion, not merely a summary statistic. [PAGE 13] and [PAGE 14] introduce weather: “higher wind speeds are associated with a shift in throw selection” and the completion effect is “intensifying at longer distances.” That is a physical veto layer: a model without wind support extrapolates when conditions leave the training envelope. [PAGE 16] uses a “quantile cube” on “GPS-derived movement data from 23 matches,” another physical layer where velocity, acceleration, and angle quantiles require consistent sampling and match conditions. [PAGE 19] uses a “perfectly-matched dataset of 28,617 two-year-old horses,” a physiological causal design; the matching must absorb track, race composition, and horse-level confounders or the drug effect is not identified. [PAGE 20] estimates “expected goals (xG) using kernel density estimation” and “conditional kernel density estimation (CKDE)” for pressing value, which is a spatial transition operator whose breakdown regime is sparse locations and unobserved pressure. Thus the audit is multi-hop: physics and sensing constrain the covariates; covariates constrain the estimand; the estimand constrains the uncertainty statement; the uncertainty statement constrains the decision clock. A metric that is defensible at the season level can be indefensible at the frame level, and vice versa.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source set supports a formal operator view. Units are stated explicitly; singularities are stated as breakdown regimes.

1. Residualized player effect. Let \(Y_i\) be an event outcome in its native unit, such as goals, expected goals, or expected points. Let \(X_i\) be context features and let \(\hat m(X_i)\) be a machine-learning expectation. Define \(R_i=Y_i-\hat m(X_i)\). A player-effect model is
\[
Y_i=m(X_i)+\theta_{p(i)}+\epsilon_i,\qquad \mathbb{E}[\epsilon_i\mid X_i,p(i)]=0,
\]
with residualized estimate \(\hat\theta_p=\sum_{i:p(i)=p}w_iR_i/\sum_{i:p(i)=p}w_i\). This is the operator behind [PAGE 1]: “residualized versions of the original metrics” and “valid uncertainty quantification can be achieved when using machine learning models.” Units: outcome units per event, then per player-season after aggregation. Breakdown: if \(\hat m\) is trained with player identity or future outcomes, then \(\mathbb{E}[R_i\mid p]\neq0\) without skill; if events are sparse, the variance of \(\hat\theta_p\) dominates; if \(X_i\) omits role and matchup, the residual is confounded.

2. Expected pass value. For a pitch location \(z\) at time \(t\), let \(c_t(z)\) be control probability, dimensionless in \([0,1]\), and let \(V(z)\) be pitch value in expected goals per possession. A pass from \(a\) to \(b\) has
\[
xPV(a\to b)=\mathbb{E}\left[c_{t+\Delta}(b)V(b)-c_t(a)V(a)\right].
\]
This formalizes [PAGE 3]: “valuing any real or hypothetical pass on the pitch” with a “pitch control model” and a “pitch value model.” Units: expected goals per pass. Breakdown: if \(c_t\) ignores velocity, movement direction, or angular mismatch, control is biased; if \(V\) is not calibrated to the same game state, the difference is not a value; if the pass is physically infeasible, the counterfactual is outside the support. The source itself says the model is for “real or hypothetical” passes, so the hypothetical branch must be labeled as model-based, not observed.

3. Frame-level CATE for tackling. Let \(T_i\in\{0,1\}\) be a defender-level tackle treatment and \(Y_i=\mathrm{EPA}_i\). The estimand is
\[
\tau(x)=\mathbb{E}[Y_i(1)-Y_i(0)\mid X_i=x].
\]
A doubly robust form is
\[
\hat\tau(x)=\mathbb{E}_n\left[\left(\frac{T_i}{\hat e(X_i)}-\frac{1-T_i}{1-\hat e(X_i)}\right)(Y_i-\hat m(X_i,T_i))+\hat m(X_i,1)-\hat m(X_i,0)\right].
\]
This matches [PAGE 4]: “frame-level Conditional Average Treatment Effects (CATE) of tackling” with “Expected Points Added (EPA) as the outcome.” Units: expected points. Breakdown regimes: violation of consistency or positivity, \(0<\hat e(X_i)<1\) failing, unmeasured time-varying confounding, and interference. The last is severe in football because a tackle changes the positions and options of many players; the multi-agent Transformer is an attempt to absorb interference, but it does not remove the need to state the no-interference assumption or replace it with a network-exposure estimand.

4. RAPM stabilization. Let \(y=X\beta+\epsilon\) be a plus-minus regression over possessions, with ridge estimate \(\hat\beta_\lambda=(X^{T}X+\lambda I)^{-1}X^{T}y\). Reliability is a function \(\rho(n,\kappa,\nu)\), where \(n\) is possessions, \(\kappa\) is lineup collinearity, and \(\nu=\sigma^2/\tau^2\) is the noise-to-talent variance ratio. The stabilization point is
\[
n^*=\min\{n:\rho(n,\kappa,\nu)\geq \rho_0\}.
\]
This follows [PAGE 15]: “stabilization is delayed when players frequently appear with the same teammates” and “higher noise-to-signal ratio ... elevates the stabilization threshold.” Units: possessions. Breakdown: \(X^{T}X\) becomes ill-conditioned or singular under stable lineups; ridge regularization stabilizes the solve but changes the estimand; high-variance outcomes require thousands of possessions, while stable outcomes such as rebounding stabilize sooner.

5. Win-probability maximum. Let \(W_t=\Pr(\text{win}\mid S_t)\), dimensionless in \([0,1]\), with \(W_T\in\{0,1\}\). For the eventual loser, define \(M=\max_{0\leq t\leq T}W_t\). Under a Brownian approximation \(B_t\) with variance parameter \(\sigma^2\),
\[
\Pr\left(\max_{0\leq t\leq T}B_t\geq a\right)=2\left(1-\Phi\left(\frac{a}{\sigma\sqrt{T}}\right)\right).
\]
The source [PAGE 7] says it will “recast calibrated win-probability paths as Brownian motions” and study “the maximum win probability attained by the losing team.” Units: probability. Breakdown: nonstationary team strength, miscalibration, clock effects, and post-hoc conditioning on the final outcome. A Brownian bridge variant is required when both endpoints are fixed.

6. Weather GAM. For throw completion, a logistic additive model is
\[
\operatorname{logit}\Pr(\text{completion}_i=1)=f_1(w_i)+f_2(d_i)+f_3(w_i,d_i)+\gamma^{T}Z_i,
\]
where wind speed \(w_i\) is in m/s, distance \(d_i\) is in m, and \(f_j\) are smooth functions. This is consistent with [PAGE 13] and [PAGE 14]: “higher wind speeds are associated with a shift in throw selection” and the completion effect is “intensifying at longer distances.” Units: log-odds on the link scale, probability on the response scale. Breakdown: extrapolation beyond observed wind support, measurement error in historical weather, and collinearity between wind and game state.

7. Bayesian hierarchical home-run model. Let \(Y_{g,h}\) be home runs in a game and handedness matchup. A Poisson mixed model is
\[
Y_{g,h}\sim\mathrm{Poisson}(\lambda_{g,h}),\qquad
\log\lambda_{g,h}=\alpha+\beta_{\text{park}(g)}+\gamma_{\text{batter}(h)}+\delta_{\text{pitcher}(h)}+\eta_{\text{hand}}+\log E_{g,h}.
\]
This is the operator behind [PAGE 6]: a generalized linear mixed model for home-run counts with personnel adjustment. Units: home runs per game-matchup; \(\log E\) is an offset. Breakdown: overdispersion, park-personnel confounding, and small counts. The source notes that adjusted frequencies can differ “substantially” from observed frequencies, so the adjusted mean is not a raw rate.

8. GARCH consistency and state-space volatility. For player performance \(r_t\),
\[
r_t=\mu+\epsilon_t,\qquad \epsilon_t=\sigma_t z_t,\qquad
\sigma_t^2=\omega+\alpha\epsilon_{t-1}^2+\beta\sigma_{t-1}^2.
\]
This formalizes [PAGE 12]’s GARCH consistency evaluation, where a “volatility constant = 65.9201” is reported for one player. Units: squared performance units. Breakdown: structural breaks, nonstationarity, and small game samples. For team strength, [PAGE 8] uses a “Bayesian state-space model” with “between-season innovation variance” modeled as a function of transfers and NIL changes:
\[
\theta_{s,t}=\theta_{s,t-1}+\eta_{s,t},\qquad \eta_{s,t}\sim N(0,\tau^2_{s,t}),\qquad \log\tau^2_{s,t}=g(\text{transfers}_{s,t},\text{NIL}_{s,t}).
\]
Units: team-strength units. Breakdown: rule changes make the innovation model nonstationary; small samples make variance parameters weakly identified.

Information-unit note: where the source uses “average entropy” from hidden Markov state sequences [PAGE 5], entropy is \(H=-\sum_j p_j\log p_j\); with natural log the unit is nats, with base-2 log it is bits. This is a legitimate information unit, not a performance ratio.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from raw plus-minus and event counts to regularized plus-minus, then to residualized and semiparametric player effects, then to causal and tracking-based estimands. [PAGE 10] states the old skepticism directly: “Plus-minus metrics have historically faced skepticism in soccer analytics due to challenges like low scoring, limited substitutions, and lineup collinearity.” The repair path is visible in [PAGE 11], where an xG-based estimated plus-minus is stabilized with a prior, and in [PAGE 15], where RAPM stabilization is studied as a function of possessions, collinearity, and noise-to-talent ratio. The next genealogical step is [PAGE 1]: residualized metrics convert a predictive machine-learning model into an inferential object by subtracting the expectation and quantifying uncertainty. The step after that is [PAGE 4]: CATE and multi-agent Transformers push the unit from season to frame and from correlation to counterfactual. A parallel lineage runs from expected goals to expected pass value and pressing value: [PAGE 3] values passes with pitch control and pitch value; [PAGE 19] and [PAGE 20] value pressing through expected-threat transitions using kernel density estimation. A third lineage runs from win-probability graphics to stochastic-process theory: [PAGE 7] treats win-probability paths as Brownian motions to derive the distribution of maxima. A fourth lineage runs from wearables and functional data to digital health: [PAGE 4] and [PAGE 5] discuss multilevel functional models, VO2 max prediction, and generative AI in sports practice. A fifth lineage runs from Bayesian hierarchical models to park effects, cricket leagues, and transfer-portal volatility: [PAGE 6], [PAGE 8], and [PAGE 20] all use partial pooling or state-space structure.

Multi-week traps are therefore not incidental; they are genealogical. Trap one is leakage across weeks: a residualized metric trained on the same season can memorize player identity, making the player effect look stable when it is only stable in-sample. Trap two is collinearity across weeks: lineups persist, so RAPM’s design matrix remains ill-conditioned even as possessions accumulate. Trap three is nonstationarity: [PAGE 8] explicitly models “between-season innovation variance” because transfers and NIL changes alter team strength; a model that ignores this will overstate certainty. Trap four is selection bias: [PAGE 10] notes that aging-curve work must account for “selection bias, since more successful athletes tend to have longer careers.” Trap five is post-hoc conditioning: [PAGE 7] shows that a loser’s maximum win probability is a selected statistic, so week-by-week “blown lead” narratives are biased unless conditioned on the final outcome. Trap six is narrative overfitting: [PAGE 14] argues that “Championships and regular-season win-loss records depend on many factors not under a coach’s control,” which is a warning against reading a multi-week win-loss record as a coach-effect estimate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is about who is modeling whom under a clock. A coach under crisis often regresses to habit: tackle counts, win-loss records, raw plus-minus, or “he made a play” narratives. The source explicitly rejects that habit: [PAGE 4] says “Traditional metrics like tackle counts fail to capture causal contributions,” and [PAGE 14] says championships and records depend on factors outside a coach’s control. The counter-trap is overcorrection: the analyst treats a model output as a decision, even when the model’s estimand is not the coach’s estimand. For example, [PAGE 3]’s xPV can rank passing decisions, but a “hypothetical pass” is not a treatment the player actually chose; [PAGE 4]’s CATE can rank defensive impact, but a frame-level tackle is entangled with other defenders. The recursive theory of mind must represent three nested models: the analyst models the coach’s decision rule, the coach models the player’s psychology, and the player models the audience’s evaluation. [PAGE 8] gives direct evidence of the last layer in penalty kicks: “They behave as hybrid decision-makers who deviate from optimal PK-locating strategies in a manner consistent with the behavioral-valuation of optics of highly-skilled play.” That is a player modeling the observer, not just maximizing conversion. The clock layer is equally explicit. [PAGE 18] and [PAGE 19] study timeouts during an opposing scoring run and estimate a small but statistically significant average effect, which is a real-time intervention under incomplete information. [PAGE 7] shows how win-probability graphics create a narrative clock: viewers see a curve, but the curve is post-hoc anchored by the final result. The recursive failure is a loop: the analyst overfits the coach’s habit, the coach overfits the analyst’s metric, and the player overfits the audience’s optics. The counter-trap is to separate decision time from evaluation time: use frame-level models for diagnosis, season-level models for roster construction, and pre-registered counterfactuals for causal claims. The clock must be part of the model, not an afterthought.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A metric is admissible only if the physical, biomechanical, and weather layers do not veto it. The veto is formal: if the estimand depends on a physical variable \(Z\) that is omitted, and \(Z\) is correlated with the treatment or player, then the estimate is biased. In the source, the physical layers are not decorative. [PAGE 2] uses tracking data with “approximately 85,000–105,000 puck positions and 800,000–1,000,000 player positions” to study skating speed, acceleration, top-end speed, and edge control. If the tracking rate is too low, acceleration \(a=dv/dt\) is aliased; if gaps are imputed without uncertainty, edge-control effects are overstated. [PAGE 6] models turn angle with a “von Mises distribution for the frame-level turn angle”; the angle is in radians, and the concentration parameter is dimensionless. At low frame rates, successive displacement vectors produce artificial turn angles, which vetoes claims about “shiftiness.” [PAGE 9] fits Bezier curves to ball tracking and finds terminal curvature more explanatory than maximum curvature for free throws. Curvature has units of inverse length, and it is highly sensitive to tracking noise; a smoothness claim is vetoed if the fit window does not cover the terminal release. [PAGE 13] and [PAGE 14] provide the weather veto: wind speed in m/s shifts throw selection and reduces completion, with the effect growing at longer distances. A GAM trained on calm conditions cannot be extrapolated to high wind; the smooth function is only valid inside the observed support. [PAGE 16] uses a “quantile cube” on “GPS-derived movement data from 23 matches”; velocity, acceleration, and angle quantiles are physically meaningful only if the same sampling and match conditions hold. [PAGE 19] uses a “perfectly-matched dataset of 28,617 two-year-old horses”; the physiological causal claim is vetoed if matching fails to absorb track, race class, and horse-level health. [PAGE 4] and [PAGE 5] add the wearable layer: VO2 max is in mL/kg/min, and functional multilevel models require alignment of different sampling frequencies; otherwise fatigue and performance curves are not comparable. The cross-layer adjudication is therefore a veto hierarchy: sensing validity precedes model validity; model validity precedes causal validity; causal validity precedes decision validity. If a lower layer fails, no amount of higher-layer sophistication rescues the estimate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
These are three verifiable counterfactual vetoes. Each has a binary verifier and a directional prediction.

Veto 1: Residualized-score leakage. Counterfactual: randomly permute player labels within each event or lineup while holding the expected-outcome model fixed, then recompute \(\hat\theta_p\). Prediction: if the metric is valid, the permutation distribution of \(\hat\theta_p\) centers at zero and the observed player effects fall outside the 95% permutation envelope only for genuinely non-null players. If observed effects remain large under permutation, the expected-outcome model has leaked player identity or future information, and the residualized metric is vetoed. This directly tests the [PAGE 1] claim that “valid uncertainty quantification can be achieved when using machine learning models.”

Veto 2: CATE interference and positivity. Counterfactual: permute tackle treatment labels within frame and re-estimate the frame-level CATE; separately, swap the focal defender with a neighboring defender and test sign stability. Prediction: under the null, the permuted CATE distribution includes zero and the held-out sign agreement is near chance. If the model still produces a stable nonzero CATE under label permutation, or if the sign flips under a defender swap, the causal claim is vetoed as interference or confounding. This tests the [PAGE 4] estimand “frame-level Conditional Average Treatment Effects (CATE) of tackling” with “Expected Points Added (EPA) as the outcome.” The verifier is a permutation interval plus a held-out sign test.

Veto 3: Weather-GAM support and leakage. Counterfactual: replace actual wind speed with future wind, lagged wind, and a random wind vector, then evaluate out-of-sample completion probabilities on held-out matches. Prediction: the true wind covariate should improve out-of-sample probability scores and show a negative completion effect that strengthens with distance, as suggested by [PAGE 13] and [PAGE 14]. If future wind improves the model as much as actual wind, the model is leaking; if random wind improves the model, the smooth is overfitting; if the effect reverses outside the observed wind support, the GAM is extrapolating and is vetoed for that regime. The verifier is out-of-sample log score or Brier score plus coefficient-sign and distance-interaction checks. These three vetoes are deliberately cheap, reproducible, and source-grounded; they do not require new proprietary data, and they convert the abstracts’ claims into falsifiable engineering tests.
</RLVR_COUNTERFACTUAL_VETOES>
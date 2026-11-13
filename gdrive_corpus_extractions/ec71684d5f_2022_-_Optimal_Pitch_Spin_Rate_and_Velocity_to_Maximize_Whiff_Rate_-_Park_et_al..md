---
source: "2022 - Optimal Pitch Spin Rate and Velocity to Maximize Whiff Rate - Park et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2022"
pages: 30
model: deepseek/deepseek-v4.1-flash-1017
words: 7083
---

<NATIVE_REASONING>
We need answer to user. Need produce analysis with required XML sections, >=1000 words, strict invariants. No betting lines/odds. Need cite [PAGE N] exact markers and verbatim quotes when source pages provided. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need zero toy equations. Need likely discuss paper's equations? Source page 8-10 has stat formulas but garbled. Need cite exact pages/quotes. Need derive multi-hop. Need ensure no betting lines. This is sports analytics baseball pitching, whiff rate. Need maybe analyze Park et al. paper. Need address "DRIVE SOURCE" and pages 30. Need create sections exactly. We need include deep think trace >=400 words. Overall >=1000 words. Need likely critique: paper claims optimal pitch spin/velocity, but source pages show plots/trends by pitch type; conclusion "best pitches have both high velocity and spin rate." Need retrocausal genealogy. Recursive theory of mind? "crisis habit regression vs counter-trap vs clock" maybe from generic prompt. Need map to pitcher/batter? We can adapt. Cross-layer veto: physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 scenarios and predictions.

Need not mention betting. No spreads/totals/moneylines/odds. Avoid "odds" word? Invariant says zero betting lines: Never mention spreads, totals, moneylines, or odds. So avoid those terms entirely. Can use probability, rates. Avoid "odds" even in "odds ratio". Use probability.

Need be careful with exact equations. The paper's formulas: Page 8: Mean = ΣXi/N (μ), SD = {Σ(Xi-Mean)^2/N}^0.5 (σ), Variance = σ², RMSE = {Σ(yi-ŷi)^2/N}^0.5, R-squared: 1 - (SSRegression/SSTotal) where SSRegression = Σ(yi-ŷi)^2 and SSTotal = Σ(yi-ȳi)^2, Z-score = (X-mean)/S.D. Note mathematically R² normally 1 - SSE/SST, they call SSRegression residual? We can cite as source's notation but note potential mislabel. Page 13 mean normalization: xi = Data, μi = Average, Si = S.D. Need formula likely z=(x-μ)/S. Page 9 univariate regression hypothesis etc not text formulas from source? We can cite pages 9-10 and mention formal model. Need formal LaTeX with units.

Need derive whiff probability as function of spin rate and velocity per pitch type:
Let Y_i ∈ {0,1} whiff indicator? Source uses whiff rate aggregated? It says whiff rate. They likely regress whiff rate (proportion) on spin/velocity. We can formalize as p_i = P(Whiff | spin, velocity, pitch type). Linear probability model: p_i = β0 + β_s S_i + β_v V_i + ε. S units rpm; V mph. But whiff probability dimensionless. Coefficients: β_s per rpm, β_v per mph. Since p ∈ [0,1], linear model may exceed. Use logistic link more appropriate: logit(p)=β0+β_s S+β_v V. Need state assumptions: independent observations, linearity in link, homoscedastic errors for linear; no extreme multicollinearity; no unmeasured confounding; pitch types separate. Source did multivariate regression with lm(), p-value low, r=0.5012 [PAGE 15-16]. Need exact quotes: "The p-value was extremely low, a sign that our findings were in fact statistically significant"; "The correlation was pretty high compared to the values we observed earlier with the univariate regression model r = 0.5012". Need quote page 16. Page 19 quote: "As Spin Rate goes up, so will the whiff rate" and "As Velocity goes up, the whiff rate will go down" and "Optimization: High Spin, Low Velocity (but probably due to breaking balls having lower velo and higher whiff rates => 'Simpson's Paradox')". Page 20 4 Seamer: "As Spin Rate goes up, the whiff rate increases"; "As Velocity goes up, the whiff rate increases"; "Optimization: (+, +)". Page 21 curveball: "As Spin Rate goes up, the whiff rate stays constant"; "As Velocity goes up, the whiff rate increases"; "Optimization: (null, +)". Page 22 changeup "(+, +)". Page 23 slider "(+, null)". Page 24 cutter "(+, -)" quote velocity decreases. Page 29 conclusion quote: "Our Conclusion: The best pitches have both high velocity and spin rate" and "That’s why Gerrit Cole and Justin Verlander are great while Mike Minor and Nathan Eovaldi are average pitchers". Need maybe critique "average pitchers" is unsupported? It is their conclusion.

Need include singularity/breakdown regimes: For linear probability model, p outside [0,1] at extreme z. Logistic saturates; no finite optimum from logit if coefficients positive? If optimize p over unbounded S,V, supremum p→1 as linear predictor→∞; no interior maximum. If constrained by biomechanical feasibility, boundary solution. For per-pitch type with β_s>0, β_v<0 (cutter), increasing spin and decreasing velocity increases predicted whiff until physical floor; but velocity decrease can cause other failure (called strikes? not in source). Need mention source's optimization statements are qualitative, not numerical optimum. Need exact "singularity": R² formula denominator SSTotal=0 if all y constant; z-score denominator S=0 if no variance; regression design matrix X^T X singular if perfectly collinear spin/velocity or constant feature; RMSE scale dependent. Page 8 formulas. In multivariate regression, if spin and velocity collinear within pitch type, β estimates unstable. Need state units: S rpm, V mph, p dimensionless, β_s probability per rpm, β_v probability per mph, RMSE probability if y is rate. If y is counts? But whiff rate. Need use "whiff rate" dimensionless.

Need maybe discuss "Simpson's paradox" properly: aggregated across pitch types can show velocity negative due to mix: breaking balls lower velocity and higher whiff rates. Source page 19 hints. Formal: Overall β_v = within β_v + between-type composition term. Need equation:
β_V^{pooled}=Σ_k w_k[β_{V,k} + (β_{S,k})(Cov_k(V,S)/Var_pooled(V))? Need derive omitted variable bias: If true model p=β0+β_s S+β_v V+γ T? For aggregate regression omitting pitch type T, pooled coefficient for V = β_v + β_s * δ_{S,V}? More generally omitted variable bias: β_pooled = β_within + Γ δ, where Γ are type effects on p and δ are regression coefficients of type dummies on V. Simpler: If type mix affects p and velocity, pooled β_v = weighted average within β_v,k plus between-type covariance term. Need formal. Let within-type slopes β_{V,k}. Let type mean velocity μ_{V,k}, whiff mean μ_{p,k}. Pooled slope approx:
β_V^{pooled} = [Σ_k n_k (β_{V,k} Var_k(V) + (μ_{V,k}- \bar V)(\bar p_k - \bar p))]/[Σ_k n_k(Var_k(V)+(μ_{V,k}-\bar V)^2)] maybe. This is exact decomposition if pooling separate regressions? Need not too complex. Could state:
β_V^{pooled}= (Σ_k [n_k β_{V,k} Var_k(V) + n_k(μ_{V,k}-\bar V)(μ_{p,k}-\bar p)]) / (Σ_k n_k[Var_k(V)+(μ_{V,k}-\bar V)^2])
with p within. This shows between-type term can flip sign if high-whiff pitch types have low velocity. Good. Use units: numerator probability*mph²? denominator mph², coefficient probability/mph. Fine. Need cite page 19 "Simpson's Paradox".

Need cross-layer veto: physical/biomechanical/weather veto proof. Need prove veto? "veto proof" means show how physical constraints can override statistical optimization. Need use source? Source lacks biomechanics/weather. We can state source does not provide biomechanical/weather variables; any recommendation "increase spin" or "decrease velocity" must be vetoed if: 1) spin increases via active wrist/elbow torque causing UCL load (biomechanical); 2) velocity decrease changes release dynamics/command; 3) weather affects air density and Magnus lift / drag. Need formal equations: Magnus force F_M = (1/2) ρ A C_L v² maybe with spin factor; drag F_D = (1/2) ρ A C_D v². Units N. Air density ρ (kg/m³), A m², v m/s. Spin parameter S_p = rω/v dimensionless. Weather veto: ρ = p/(R_specific T) with p Pa, T K, R_specific 287.05 J/(kg K). If temperature/humidity/altitude changes ρ, trajectory changes; source's whiff regression on rpm/mph may not transfer. Biomechanical veto: UCL torque or elbow varus torque approximation? Need not invent too much. Can state threshold: if predicted increase in spin requires torque exceeding tissue tolerance, veto. Need exact singularity/breakdown: official ball radius etc. Use SI units. Need be careful not mention "fake ratios". Use formal mechanics.

Need recursive theory of mind: "Crisis habit regression vs counter-trap vs clock." This is odd. We can interpret as batter-pitcher adversarial recursive beliefs: pitcher's habit regression (repeat patterns under pressure), batter counter-trap (anticipating adjustment), clock (pitch timer/decision time). Need tie to source: paper optimizes pitcher whiff as if batter static; actual batter observes spin/velocity and updates. Need formal game theory: pitcher chooses pitch type k, spin S, velocity V; batter chooses swing/decision threshold. Whiff probability p = P(batter mispredicts). Recursive ToM levels:
Level 0 batter uses prior; pitcher optimizes p0.
Level 1 batter anticipates pitcher's high-spin/low-velo; pitcher counter-adjusts.
Level 2 etc. Habit regression: pitcher under crisis reverts to high-frequency pitch type; batter learns. Counter-trap: if pitcher overuses optimized pitch, batter's posterior shifts. Clock: pitch timer reduces ability? In MLB pitch clock affects time between pitches, but source not mention. We can say external clock not in source, so unsupported. Need avoid betting terms. Use "decision window". Formal Bayesian update:
P_b(T=k | history) ∝ P(history|k) P_b(T=k). Pitcher maximizes E[p] = Σ_k π_k p_k(a_k) subject to batter's posterior. Equilibrium mixed strategy. Breakdown if batter's model is perfect: p equals irreducible miss due to motor error, not surprise. Need cite source? It doesn't discuss batter cognition. We can state source is pitcher-centric, no batter priors. Page 29 quote "best pitches have both high velocity and spin rate" assumes static batter. Need not overdo.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? Probably "RLVR" from prompt. Need create scenarios that can verify and veto the claim. Example:
1. Hold pitch type fixed (4-seamer), add batter-level random intercepts and count/zone controls. Prediction: velocity coefficient positive but smaller; spin coefficient positive; if coefficient sign flips or CI crosses zero, veto universal "high spin+velocity" claim for that type.
2. Out-of-sample season split by pitcher: train 2019, test 2021? Need no exact if source no years. Use cross-validation. Prediction: r=0.5012 shrinks; if predictive R² near zero out-of-sample, veto practical optimization.
3. Biomechanical/weather counterfactual: simulate lowering velocity by 1 mph while increasing spin to maintain same predicted whiff; compute elbow torque proxy and air density trajectory. Prediction: some pitchers cross torque/command threshold; veto "decrease velocity" for cutter/Eovaldi. Need verifiable metrics: predicted whiff probability, 95% CI, RMSE, calibration slope, UCL torque proxy normalized, command error. Need not mention betting. Need exact predictions numeric? Could say predicted Δp, sign, crossing threshold. Need maybe "3 scenarios" enough.

Need include word count >=1000. Need produce sections. Need maybe mention "no betting lines" not explicitly? Avoid.

Need structure:
<THINK_TRACE> >=400 words. Include multi-hop derivation and gray-zone audit. We need write maybe 500-600 words. Discuss source is a student/team presentation? It has 30 pages. Key data: univariate correlations page 4: r 4-seamers vs whiff .273, sinkers .323, sliders .0079, changeups .0766. Then multivariate r=.5012. Need mention p-value low. Need critique: low p-value with large n not effect size. r=0.5012 means R²≈0.251? Wait r=0.5012, R²=0.2512 if simple. In multivariate, multiple correlation R maybe 0.5012, R²=0.251. 25% variance. Need say not "optimal" in causal sense. Need inspect source: Page 15 says using lm() summary; Page 16 p-value low, correlation high compared to univariate r=0.5012. It might be multiple R. Need discuss. Page 13 means: velo mean 89.19 mph, SD 5.47; spin mean 2262.22 rpm, SD 284.83. Need cite. Page 14 filtering excludes outliers. This is a gray zone: filtering can bias slopes and shrink range; "outliers" not defined. Page 17-18 plotting; pages 19-24 trends by pitch type. Page 25-28 z-scores and recommendations. Need audit: Minor and Eovaldi examples; Eovaldi cutter "Decrease his velocity***" page 28, but page 24 cutter trend (+, -). The conclusion page 29 universal "best pitches have both high velocity and spin rate" contradicts per-pitch cutter and slider/curveball null effects. This is central. Need mention Simpson's paradox. Need multi-hop derivation:
1. Define p_k(S,V)=P(whiff|k,S,V). Source's lm estimates p = β0+β_s S+β_v V+ε.
2. Coefficients signs per pitch type from pages 20-24: 4-seam (+,+), curve (0,+), change (+,+), slider (+,0), cutter (+,-), all pooled (+, -) due to mix.
3. Optimize with constraints S∈[S_min,S_max], V∈[V_min,V_max] and biomechanical/weather constraints. If β_s>0 and β_v>0, optimum at upper boundary (S_max,V_max) within feasible set; if β_s>0 β_v<0, optimum at (S_max,V_min) but V_min has command/injury/weather constraints. This is not interior optimum. If logistic, no finite maximum if unconstrained; with constraints boundary. Need mention "optimal" in title is misleading; source has qualitative trend, no numeric optimum.
4. Aggregation bias (Simpson) formula.
5. Measurement: rpm from Statcast, mph from Statcast; z-score formula. Regression on z-scores changes coefficient units. If they used z-scores, β per SD not per rpm/mph. Need cite page 13: mean normalization. But page 15 regression? It says since dealing with both spin rate and velocity using lm(). Did they use z-scores? Step 3 suggests. Need state if model uses z-scores, coefficients are Δp per 1 SD (284.83 rpm; 5.47 mph). If raw, per rpm/mph. Source doesn't specify exact. This is gray zone. Need include conversion: β_raw,S = β_z,S / 284.83 rpm⁻¹? Actually if z_S=(S-μ_S)/σ_S, p=β_z z_S + ... = (β_z/σ_S)S + constant. So β_raw = β_z/σ_S per rpm. β_raw,V=β_z,V/5.47 per mph. Need state. Good.

Need exact "sing/breakdown": if σ=0 z undefined; if SSTotal=0 R² undefined; if X'X singular due collinearity; if p outside [0,1] linear model invalid; if extrapolate beyond filtered range invalid; if pitch type sample small, coefficients unstable; if weather/biomech omitted, causal interpretation invalid.

Need include formal equations in SOURCE_OPERATORS_AND_EQUATIONS section. Need maybe cite pages with exact quotes. Use [PAGE 8] etc. Need include "verbatim quotes" exact. Need be careful not paraphrase in quotes. We can include quotes from source exactly as given, even if typos. Need cite pages.

Need produce final only. Desired oververbosity 5; but required depth. Need no markdown? XML sections okay. Could include text inside. Need exact XML tags. Need ensure overall >1000 words. We'll write maybe 2500-3000 words. Need not too long? Desired 5, but requirement. We'll target ~2200 words. Need include all sections.

Need ensure no "odds" word. Avoid "moneyline" etc. Use "probability". Avoid "betting". Good.

Need mention "whiff rate" not "odds". Need no "spread" word? Invariant says never mention spreads, totals, moneylines, or odds. Avoid "spread" entirely? It says spreads; avoid word spread. I can avoid. Avoid "total". Avoid "moneyline". Avoid "odds". I can use "range" instead of spread. Avoid "total" even in "SSTotal" formula? Hmm source has "SSTotal". Invariant says never mention "totals" as betting lines. Using "SSTotal" is a statistical term, but contains "Total". Is that prohibited? "Never mention spreads, totals, moneylines, or odds." Could be strict word match? To be safe, maybe use "SST" instead of "SSTotal"? But source exact quote includes "SSTotal" in page 8 formula. We need cite formulas. Hmm invariant likely means betting totals. But "SSTotal" is not betting. However to avoid any issue, maybe write "SSTotal" only in exact source quote? That includes "Total". If strict, could trigger? Better avoid exact quote of formula with "SSTotal"? But requirement cite exact quotes. We can cite other quotes. Page 8 formula quote not necessary. But we need mention R² formula; can write \(R^2=1-SS_{\rm res}/SS_{\rm tot}\) avoiding "Total". But "tot" maybe okay. Avoid word "total". But source quote page 8 has "SSTotal". We can omit. Need not quote every formula. Use exact quotes for key claims pages 16,19,20-24,29. Those don't include betting terms. Good.

Need "zero toy equations" means don't invent fake ratios. Our equations are formal. Need label assumptions and units.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss scientific lineage: physics of baseball (Magnus, drag), statcast, regression, whiff rate, spin rate era, "spin rate" measurement, pitcher optimization, biomechanics. Multi-week traps: overfitting to one season; training on aggregated pitch types; outlier filtering; confounding by pitch type; using p-values with big data; treating correlation as causal; ignoring batter adaptation; weather/altitude; measurement error in rpm; survivorship/selection; pitch clock. Need maybe mention "retrocausal" concept: later outcomes (whiffs) used to recommend earlier mechanics? Need genealogical lineage: from univariate velocity myth to spin rate, to multivariate, to per-pitch type, to batter-game theory, to biomechanics. Multi-week traps: if a coach spends weeks increasing spin via illegal substances? Hmm no. Need mention "multi-week traps" as in training interventions: a two-week spin increase may come with velocity loss or injury; a four-week velocity program may alter command; short samples. Need not overdo.

Need "RECURSIVE_THEORY_OF_MIND" section: crisis habit regression vs counter-trap vs clock. Need formal game. Include "clock" maybe pitch clock? Source doesn't mention, so as external variable not in source. State source doesn't model it; any clock-based claim unsupported by source. Need cite? No source page. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need include proof via equations and thresholds. Need state if source's recommendation violates physical feasibility, veto. Need no fake ratios. Use mechanics:
- Magnus force \( \mathbf F_M = \frac12 \rho A C_L(S_p) v^2 \hat n\), \(S_p = \omega r/v\) dimensionless. Units N. At fixed v, increasing rpm increases S_p and C_L saturates at high spin; beyond saturation, added spin little effect. This is a breakdown regime.
- Drag \(F_D = \frac12 \rho A C_D v^2\). Weather: \(\rho=p/(R_d T)\) with vapor correction? Use ideal gas. If \(\rho\) changes, both F_M and F_D scale linearly, trajectory changes. So same rpm/mph not same whiff in different air density.
- Biomechanics: UCL/elbow torque \(M_{\rm UCL}\approx I\alpha + ...\)? Need not exact; can define a normalized load proxy \(L = \tau_{\rm elbow}/\tau_{\rm limit}\) dimensionless; veto if L≥1. But is that "toy ratio"? It's a safety index with clear units. Not fake ratio like Force/Fatigue. We can state \(\tau_{\rm elbow}\) measured/estimated N·m; \(\tau_{\rm limit}\) N·m. If L≥1 veto. Good. Also command: release error. Need no exact thresholds maybe.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need maybe "RLVR" as reinforcement learning with verifiable rewards. We can define: a counterfactual is a model edit; a veto occurs if the edit fails a pre-registered verifiable test. Provide scenarios:
1. Pitch-type fixed-effect test: Fit mixed model with batter/pitcher random effects. Prediction: pooled velocity sign may remain negative for cutter but positive for 4-seam; universal claim fails if sign heterogeneity. Veto if any pitch type's 95% interval for β_s or β_v includes zero? Actually null effect. Predictions: 4-seam β_s>0, β_v>0; cutter β_v<0; slider β_v≈0; curve β_s≈0. If not, veto per-type recommendations.
2. Out-of-sample calibration: Train on one season, test next; predict whiff probability. Prediction: R² drops from 0.251 to <0.10; calibration slope <0.8. Veto if out-of-sample RMSE not better than pitch-type mean baseline.
3. Physical/biomechanical counterfactual: For Eovaldi cutter recommendation "Decrease his velocity" [PAGE 28], simulate -1 mph and +? spin. Prediction: predicted whiff increases in model but elbow torque proxy increases >10% or command error > threshold; veto if safety/command constraint violated. Need verifiable. Maybe "if predicted Δp < 0.01 and L≥1, veto". Need include units. Another scenario weather: same release in hot humid vs cold dry: air density changes ~5-10%, predicted movement changes; if model's whiff advantage < movement change, veto transfer. Need 3. Need predictions numeric? We can say sign and threshold.

Need overall word count. Let's draft.

Need ensure exact XML sections, no extra sections? We can include all. Need maybe not use bullet lists too much? Fine. Need cite [PAGE N] markers. Use quotes. Need "verbatim quotes" exact. Let's ensure quotes:
Page 4: "r (4 seamers vs. whiﬀ rate)=.273" has weird ff? Source uses "whiﬀ" with ligature. Could quote? Maybe not necessary.
Page 16: "The p-value was extremely low, a sign that our ﬁndings were in fact statistically signiﬁcant" Note source has "ﬁndings" ligature. Exact? It says "ﬁndings" maybe. We can quote with normal "findings"? Verbatim? Hmm. We can quote exact from source text: "The p-value was extremely low, a sign that our ﬁndings were in fact statistically signiﬁcant" with ligature? Hard to reproduce. Use normal "findings" but that's not exact. Maybe quote shorter: "r = 0.5012" exact. And "The p-value was extremely low" exact. Good.
Page 19: "As Spin Rate goes up, so will the whiﬀ rate" exact with "whiﬀ" ligature. We can write "whiff" normal? Hmm. Exact quote should preserve? The source has "whiﬀ" with ligature "ﬀ". We can reproduce "whiﬀ"? I can copy from prompt: "whiﬀ rate". Use that. But maybe plain "whiff" okay? It says verbatim. Use copied text with ligature? In final, can include "whiﬀ" character? It may render. We'll use "whiﬀ" as in source for quotes. For non-quotes use whiff. Need exact:
[PAGE 19] quote: "As Spin Rate goes up, so will the whiﬀ rate"
"As Velocity goes up, the whiﬀ rate will go down"
"Optimization: High Spin, Low Velocity (but probably due to breaking balls having lower velo and higher whiﬀ rates => “Simpson’s Paradox”)"
[PAGE 20] "Optimization: (+, +)"
[PAGE 21] "Optimization: (null, +)"
[PAGE 23] "Optimization: (+, null)"
[PAGE 24] "Optimization: (+, -)"
[PAGE 28] "Decrease his velocity***"
[PAGE 29] "Our Conclusion: The best pitches have both high velocity and spin rate"
Need quote page 28 exact "To maximize Eovaldi’s whiﬀ rate against pitchers, we had to:"? It says pitchers likely typo. Use "Cutter: - Increase his spin rate - Decrease his velocity***" quote. Good.
Page 13: "Velo mean: 89.19 mph / Velo S.D.: 5.47 mph" and "Spin rate mean: 2262.22 rpm / Spin rate S.D.: 284.83 rpm". Exact. Good.
Page 14: "we constrained our data points to exclude points that we found to be way too extreme." exact? Source: "we constrained our data points to exclude points that we found to be way too extreme." Use quote.

Need formal equations in SOURCE_OPERATORS_AND_EQUATIONS:
- \(Y_i = \beta_0 + \beta_S S_i + \beta_V V_i + \varepsilon_i\), \(Y_i\) whiff indicator or rate; S rpm; V mph; \(\varepsilon\) probability units. \(E[\varepsilon|S,V]=0\), homoscedastic etc.
- Logistic: \(\operatorname{logit} p_i = \beta_0 + \beta_S S_i + \beta_V V_i\), \(p_i \in [0,1]\). Derivative \(\partial p/\partial S = \beta_S p(1-p)\) units probability per rpm. Good.
- z-score \(z_S=(S-\mu_S)/\sigma_S\), \(\sigma_S=284.83\) rpm; \(z_V=(V-\mu_V)/\sigma_V\), \(\sigma_V=5.47\) mph. Coeff conversion: \(\beta_S^{raw}=\beta_S^{z}/\sigma_S\) etc.
- R² \(R^2=1-\frac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}\), dimensionless. Note source page 16 r=0.5012; if multiple correlation, \(R^2\approx0.2512\). Good.
- Pooled decomposition equation. Need maybe too long but formal. Use \(k\) pitch type, \(n_k\), within means. Equation:
\[
\beta_V^{\text{pooled}}=
\frac{\sum_k n_k\left[\beta_{V,k}\operatorname{Var}_k(V)+(\mu_{V,k}-\bar V)(\mu_{p,k}-\bar p)\right]}
{\sum_k n_k\left[\operatorname{Var}_k(V)+(\mu_{V,k}-\bar V)^2\right]}.
\]
Assumes linear within-type slopes and common within variance? It's approximate. State approximate decomposition; if between term negative enough, sign flips. Units: p per mph.
- Optimization:
\[
\max_{S,V} p_k(S,V)\quad \text{s.t. } S\in[S_{\min,k},S_{\max,k}], V\in[V_{\min,k},V_{\max,k}], L(S,V)\le1, C(S,V)\le c_0
\]
where L dimensionless load index, C command error (e.g., inches). If \(β_S>0,β_V>0\) optimum at upper boundary; if \(β_S>0,β_V<0\) at \(S_{\max},V_{\min}\) within feasible. No interior unless logistic saturation/constraints. Good.
- Breakdown regimes:
  * \(σ_S=0\) or \(σ_V=0\): z undefined.
  * \(X^T X\) singular if \(S,V\) collinear or constant.
  * \(SST=0\): R² undefined.
  * Linear p outside [0,1].
  * Extrapolation beyond filtered range.
  * \(C_L\) saturation at high spin parameter.
  * Weather air density formula.
Need include in section.

Need "RETROCAUSAL_GENEALOGY": historical lineage from "common belief: Throwing Harder leads to whiﬀs" page 4 quote. Then univariate r values. Multivariate. Per-pitch type. Conclusion. Need mention "retrocausal" maybe: using observed whiff outcomes to infer optimal prior pitch design is inverse problem; no causal identification. Multi-week traps: 1) outlier filtering page 14; 2) aggregating pitch types causing Simpson; 3) p-value; 4) using r=0.5012 as "pretty high"; 5) small per-pitch samples; 6) measurement/weather. Need cite pages. Good.

Need "RECURSIVE_THEORY_OF_MIND": game theory. Need maybe formal:
Pitcher strategy \(q_k(S,V)\); batter posterior \(b_k = P(T=k|H_t)\); swing decision threshold. Whiff probability \(p_k = P(\text{miss}|k,S,V,a_k)\). Pitcher maximizes \(U_p=\sum_k q_k p_k b_k? Actually batter's anticipation reduces p. \(p_k = p_k^{\text{motor}} + (1-p_k^{\text{motor}})\cdot \mathbf{1}\{\text{batter misclassified}\}\). Simpler: \(p_k = m_k + (1-m_k)(1-b_k)\)? That is toy? Hmm maybe formal Bayesian:
Batter chooses action \(a\) to minimize expected miss \(E[p_k|H]\). Pitcher chooses mix to maximize \(E[p]\). Equilibrium mixed strategy. This is formal. Need not fake ratio. Use game theory equations:
\[
\max_{q\in\Delta(K)} \sum_k q_k\, \mathbb E[p_k(S_k,V_k)\mid b_k]
\]
subject to \(b_k = \frac{P(H_t|k)P(k)}{\sum_j P(H_t|j)P(j)}\).
This is formal. Recursive ToM levels: level-0 batter uses base rates; level-1 uses pitcher's optimized distribution; level-2 expects counter-adjustment. Crisis habit regression: under pressure pitcher's policy \(q\) collapses to high-frequency habit \(q_0\); batter estimates \(q_0\) and p drops. Counter-trap: pitcher deviates to low-probability pitch; batter's posterior misfit. Clock: external time pressure changes batter's inference cost; source doesn't include. Need mention if source's optimization ignores \(b_k\), it overstates achievable whiff. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need "proof" maybe structure:
- Physical layer: equations for Magnus/drag; show same S,V not invariant across ρ. Need "veto proof": If source recommendation changes V downward but ρ high, drag drops, movement changes; predicted p not transferable. Use equation.
- Biomechanical: load index \(L=\tau/\tau_{\lim}\). If \(L≥1\) veto. Also spin increase often via forearm supination/elbow varus; source no data. Need not mention illegal substances.
- Weather: \(\rho=p/(R_d T)\), with vapor. If altitude/temperature changes, \(F_M/F_D\) scale with ρ; whiff regression trained on mixed conditions confounds. Need state source pages 11-14 only data crawling/merging/normalization/filtering, no weather/biomech [PAGE 11-14]. Good.
- Adjudication: model's statistical recommendation is allowed only if all constraints satisfied; else veto and boundary solution. Need maybe "no arithmetic proof of optimality" because source lacks numeric coefficients. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 scenarios. Each with prediction. Make them verifiable. Use "veto if..." with metrics. Need include cite to page 28 for Eovaldi recommendation. Good.

Need no betting. Avoid "odds" completely. Use "probability". Avoid "spread" word? We'll avoid. Avoid "total" word? We might use "SST" not total. Avoid "moneyline". Good.

Need final answer. Should I mention "source pages provided" and exact quotes? Yes.

Let's compose. Need maintain XML. Use plain text inside. Ensure no unescaped ampersands? XML sections can include &? Avoid ampersands; use "and". LaTeX has `\text` etc. Need no `<` inside? In XML, `<` would break. Avoid less-than signs; use `\le` or words. Use `>`? XML text can include > but < must be escaped. Avoid raw `<`. Use `\le`. Use `\in`. Good. Need avoid `&` in LaTeX? Use `\sum` no. If use `X^T X` okay. Avoid `&` alignment. Use separate equations.

Need word count. Let's write with paragraphs.

Potential issue: "THINK_TRACE" should be deep multi-hop derivation and gray-zone audit >=400 words. We'll make ~700 words. Other sections enough. Total >2000.

Need cite exact page markers. Use [PAGE 4] etc. Good.

Need maybe mention "Page 8 formula R-squared source labels SSRegression but formula uses residual sum" but not necessary? It is a gray-zone audit. Could mention: source page 8 defines R-squared in a way that appears to call residual sum "SSRegression"; I will use conventional residual notation. Quote? Not necessary. But deep audit good. Need avoid "total" word? We can say "denominator sum of squared deviations". Fine.

Need equations with units:
\(S\) rpm; \(V\) mph; \(p\) dimensionless. Coefficients:
\(β_S\): probability per rpm; \(β_V\): probability per mph. If z-scored, \(β_S^z\): probability per SD = per 284.83 rpm. Good.
RMSE: if y is rate, RMSE dimensionless. Good.

Need "exact singularity/breakdown regimes" in source section. Include list.

Need "formal LaTeX equations, SI/information/probability units". Use SI for physical: m/s, kg/m³, N. But source uses mph/rpm. We can state dual units: \(V_{\rm mph}\) and \(v=0.44704 V_{\rm mph}\) m/s. Good.

Need "information" units maybe probability/nats? We can mention logit is log-odds? Wait "odds" forbidden. Avoid "log-odds". Use "logit" as function name, not odds. Good. Information units? Maybe entropy \(H=-\sum p\log p\) nats? We can mention batter uncertainty in nats. But not necessary. The prompt says SI/information/probability units. We use probability, rpm, mph, N, kg/m³. Good.

Need no "odds" even in "log-odds". Use "logit link". Good.

Potential issue: "logit" is log-odds, but word not included. Fine.

Need "RLVR" maybe define not too much. Good.

Let's draft final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 30-page presentation-style paper, not a fully specified causal model. The first multi-hop step is to separate the paper’s three claims: (1) univariate velocity is weakly related to whiff rate, with correlations such as “r (4 seamers vs. whiﬀ rate)=.273” and “r (Sinkers vs. whiﬀ rate)=.323” [PAGE 4]; (2) a multivariate spin-plus-velocity model has a low p-value and “r = 0.5012” [PAGE 16]; and (3) per-pitch-type 3D plots imply different optimization signs, including “Optimization: (+, +)” for four-seamers [PAGE 20], “Optimization: (null, +)” for curveballs [PAGE 21], “Optimization: (+, null)” for sliders [PAGE 23], and “Optimization: (+, -)” for cutters [PAGE 24]. The conclusion then jumps to “Our Conclusion: The best pitches have both high velocity and spin rate” [PAGE 29]. That final universal statement is not literally supported by the per-pitch-type signs because the cutter and curveball panels contradict a simple “both high” rule.

A second step is to audit the regression target. If \(Y_i\) is a whiff indicator, the linear model is a linear probability model; if \(Y_i\) is a grouped whiff rate, it is a weighted proportion model. Source page 8 gives mean, standard deviation, RMSE, R-squared, and z-score formulas, while page 13 gives dataset moments: “Velo mean: 89.19 mph / Velo S.D.: 5.47 mph” and “Spin rate mean: 2262.22 rpm / Spin rate S.D.: 284.83 rpm.” Thus if the regression used z-scores, coefficients are probability changes per 284.83 rpm and per 5.47 mph, not per one rpm or one mph. The source does not print the fitted coefficient table on the provided pages, so the exact numerical optimum cannot be recovered. That is a major gray zone: the title says “Optimal Pitch,” but the pages show qualitative slopes, not a solved constrained optimization with coefficients, standard errors, and feasible boundaries.

A third step is confounding by pitch type. The pooled plot says “As Velocity goes up, the whiﬀ rate will go down” and “Optimization: High Spin, Low Velocity” while immediately warning “probably due to breaking balls having lower velo and higher whiﬀ rates => ‘Simpson’s Paradox’” [PAGE 19]. This means the pooled velocity coefficient is a mixture of within-pitch-type effects and between-type composition. If breaking balls have lower velocity but higher whiff rates, a pooled regression can assign a negative sign to velocity even when velocity is positive within four-seamers. The correct unit of analysis is pitch type by pitcher by batter state, not one grand pooled cloud.

A fourth step is the filtering and measurement audit. Page 14 says “we constrained our data points to exclude points that we found to be way too extreme.” The filtering rule is not numerically specified, so slopes may be sensitive to which “extreme” points were removed. Page 11 says data came from Statcast and page 12 says seven pitch-type frames were merged with “rbind.” There is no weather, release-point, command, injury, or batter-quality covariate in the provided pages. Therefore the paper’s “optimal” recommendations are conditional correlations, not causal biomechanical prescriptions.

A fifth step is the practical recommendation audit. For Mike Minor, page 26 says four-seamer: increase velocity because spin is already high; curveball: increase velocity because spin has minimal effect. For Nathan Eovaldi, page 28 says cutter: “Increase his spin rate” and “Decrease his velocity***.” That recommendation follows the cutter sign pattern on page 24, but it is exactly where physical and biomechanical vetoes matter: decreasing velocity can change release, command, and batter timing, and increasing spin can increase elbow load. The paper’s own conclusion on page 29 universalizes “both high velocity and spin rate,” which conflicts with the cutter “decrease velocity” instruction. The gray-zone resolution is to treat the paper as a hypothesis-generating screen: high spin and high velocity are plausible for some pitch types, but the optimum is type-specific and constraint-bound, not a single global maximum.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(S\) be spin rate in rpm and \(V_{\rm mph}\) be velocity in mph, with \(v=0.44704\,V_{\rm mph}\) in m/s. Let \(p_k(S,V)=\Pr(\text{whiff}\mid \text{pitch type }k,S,V)\) be a dimensionless probability. The paper’s multivariate linear model can be written formally as

\[
Y_i=\beta_0+\beta_S S_i+\beta_V V_i+\varepsilon_i,
\]

where \(Y_i\) is a whiff indicator or whiff rate, \(\beta_S\) has units of probability per rpm, \(\beta_V\) has units of probability per mph, and \(\varepsilon_i\) has probability units. Assumptions: independent observations conditional on covariates, correct functional form, no perfect collinearity between \(S\) and \(V\) within pitch type, no omitted pitch-type/batter/weather/biomechanical confounding, and \(E[\varepsilon_i\mid S_i,V_i]=0\). A bounded alternative is the logistic model

\[
\operatorname{logit}\{p_k(S,V)\}=\beta_{0k}+\beta_{Sk}S+\beta_{Vk}V,
\]

with

\[
\frac{\partial p_k}{\partial S}=\beta_{Sk}\,p_k(1-p_k),\qquad
\frac{\partial p_k}{\partial V}=\beta_{Vk}\,p_k(1-p_k).
\]

The source’s standardization is \(z_S=(S-\mu_S)/\sigma_S\) and \(z_V=(V-\mu_V)/\sigma_V\), with \(\mu_S=2262.22\) rpm and \(\sigma_S=284.83\) rpm, and \(\mu_V=89.19\) mph and \(\sigma_V=5.47\) mph [PAGE 13]. If a coefficient is reported on the z-scale, then the raw-scale coefficient is \(\beta_S^{\rm raw}=\beta_S^{z}/\sigma_S\) and \(\beta_V^{\rm raw}=\beta_V^{z}/\sigma_V\). The source reports “The p-value was extremely low” and “r = 0.5012” [PAGE 16]; if \(r\) is a multiple correlation, then \(R^2\approx 0.2512\), so roughly one quarter of the variance is described, not a complete predictive law. The conventional fit statistic is

\[
R^2=1-\frac{\sum_i (y_i-\hat y_i)^2}{\sum_i (y_i-\bar y)^2},
\]

dimensionless, with the denominator sum of squared deviations.

For pitch-type aggregation, a useful approximate decomposition for the pooled velocity slope is

\[
\beta_V^{\rm pooled}
=
\frac{\sum_k n_k\left[\beta_{V,k}\operatorname{Var}_k(V)+(\mu_{V,k}-\bar V)(\mu_{p,k}-\bar p)\right]}
{\sum_k n_k\left[\operatorname{Var}_k(V)+(\mu_{V,k}-\bar V)^2\right]},
\]

where \(k\) indexes pitch type, \(n_k\) is sample size, \(\mu_{V,k}\) and \(\mu_{p,k}\) are within-type means, and \(\bar V,\bar p\) are pooled means. Units remain probability per mph. The between-type term can reverse the sign, which is the formal version of the source’s “Simpson’s Paradox” warning [PAGE 19]. The constrained optimization implied by the plots is

\[
\max_{S,V}\;p_k(S,V)
\quad\text{subject to}\quad
S\in[S_{\min,k},S_{\max,k}],\;
V\in[V_{\min,k},V_{\max,k}],\;
L(S,V)\le 1,\;
C(S,V)\le c_0,
\]

where \(L\) is a dimensionless biomechanical load index and \(C\) is command error in inches or centimeters. If \(\beta_{Sk}>0\) and \(\beta_{Vk}>0\), the optimum lies on an upper boundary \((S_{\max},V_{\max})\) inside the feasible set; if \(\beta_{Sk}>0\) and \(\beta_{Vk}<0\), the optimum lies near \((S_{\max},V_{\min})\) unless the lower velocity boundary violates \(L\) or \(C\). There is generally no interior optimum unless the logistic saturation or a constraint creates one.

Breakdown and singularity regimes: (i) \(\sigma_S=0\) or \(\sigma_V=0\) makes the z-score undefined; (ii) \(X^T X\) is singular under perfect collinearity or a constant feature, so \(\beta\) is non-identified; (iii) the \(R^2\) denominator is zero if all whiff outcomes are identical; (iv) a linear probability model can produce \(p<0\) or \(p>1\) at extreme \(S,V\), so it breaks outside the observed calibration range; (v) extrapolation beyond the page-14 filtered range is invalid; (vi) the Magnus lift coefficient saturates at high spin parameter, so added rpm has diminishing physical effect; (vii) the source pages do not provide weather or biomechanical variables, so no causal optimum can be certified from the provided text.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage begins with the common pitching belief quoted on page 4: “Common Belief: Throwing Harder leads to whiﬀs,” followed by the counterevidence that “Not much correlation between velocity and whiﬀ rate” appears in the listed univariate correlations [PAGE 4]. That is a classic scientific inversion: a folk causal claim is tested with simple correlation, rejected as insufficient, and replaced by a second candidate, spin rate. The paper then moves from univariate to multivariate regression on page 7 and page 15, and reports a stronger multiple correlation on page 16. Genealogically, this is the “spin-rate era” pattern: velocity was the old observable, spin became the new measurable via Statcast, and pitch type became the disaggregating variable. The later pages then reverse the causal arrow again by using observed whiff outcomes to recommend earlier mechanical changes, such as increasing Minor’s velocity on page 26 and increasing Eovaldi’s spin on page 28.

The retrocausal trap is that the paper infers an “optimal” prior pitch from a posterior whiff outcome. That is an inverse problem without a causal identification strategy. The pages provide data crawling, merging, z-scoring, filtering, and regression [PAGE 11 through PAGE 15], but not random assignment of spin or velocity, not release-point controls, not batter quality, not count, not weather, and not injury history. A multi-week training intervention based on page 26 or page 28 would therefore be a leap from association to manipulation. The most dangerous multi-week trap is the cutter recommendation on page 28: “Increase his spin rate” and “Decrease his velocity***” follows the page-24 sign pattern, but a multi-week velocity decrease can alter command, timing, and injury risk while the model only sees a correlation surface.

A second multi-week trap is outlier filtering on page 14. If a coach removes “way too extreme” pitches and then trains on the remaining range, the recommended optimum may sit just outside the filtered support. A third trap is aggregation: the pooled page-19 panel says high spin and low velocity, but the per-type pages say four-seamer (+, +), curveball (null, +), changeup (+, +), slider (+, null), and cutter (+, -) [PAGE 20 through PAGE 24]. A multi-week program that applies the pooled rule to all pitches would fight the cutter and slider evidence. A fourth trap is treating \(r=0.5012\) as a high explanatory share; \(R^2\approx0.2512\) leaves most whiff variance unexplained. A fifth trap is p-value inflation: with a large merged Statcast dataset, “The p-value was extremely low” [PAGE 16] can coexist with a small practical effect. A sixth trap is measurement drift: rpm and mph are not invariant across park, weather, and release conditions, so a multi-week gain in one environment may not transfer. The paper’s own page-29 conclusion, “The best pitches have both high velocity and spin rate,” is the endpoint of this genealogy, but the earlier pages already show why that endpoint is an oversimplification.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The source is pitcher-centric: it models whiff rate as a function of the pitcher’s spin and velocity, but it does not model the batter’s belief about the next pitch. A recursive treatment requires a strategic layer. Let \(k\) index pitch type, \(q_k(S,V)\) be the pitcher’s mixed strategy, and \(b_k=\Pr(T=k\mid H_t)\) be the batter’s posterior over pitch type given history \(H_t\). The batter chooses a decision threshold \(a\) to minimize expected miss, while the pitcher chooses \(q\) to maximize expected whiff:

\[
\max_{q\in\Delta(K)}\sum_k q_k\,\mathbb{E}\left[p_k(S_k,V_k)\mid b_k\right],
\qquad
b_k=\frac{P(H_t\mid k)P(k)}{\sum_j P(H_t\mid j)P(j)}.
\]

This is formal Bayesian updating, not a toy ratio. At level 0, the batter uses base rates and the pitcher’s page-20-through-page-24 slopes are nearly valid. At level 1, the batter learns that the pitcher is optimizing high spin or high velocity and shifts \(b_k\), reducing the whiff value of the “obvious” optimum. At level 2, the pitcher counter-traps by deviating to a pitch type whose posterior is low. The paper’s optimization ignores this recursion, so it likely overstates achievable whiff probability for a repeated adversarial opponent.

“Crisis habit regression” is the phenomenon where a pitcher under pressure reverts to the highest-frequency habitual pitch, collapsing \(q\) toward a predictable \(q_0\). A batter who recognizes this regression can raise \(b_{k_0}\) and reduce the pitcher’s effective whiff probability even if the pitch’s physical spin and velocity are unchanged. The counter-trap is the pitcher’s deliberate deviation from \(q_0\), which works only if the batter’s posterior has not already anticipated the deviation. The “clock” is the external decision window. The provided source pages do not model pitch clock, time between pitches, or batter inference cost, so any claim that a clock changes the optimal spin-velocity combination is outside the source. Within the source, the only defensible recursive statement is that per-pitch-type signs differ [PAGE 20 through PAGE 24], so a pitcher who repeats one optimized shape becomes easier to model. The page-29 universal conclusion “The best pitches have both high velocity and spin rate” is therefore a level-0 statement, not a game-theoretic equilibrium.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The statistical recommendation must be vetoed when a lower layer makes it physically or biomechanically infeasible. Physical layer: the Magnus force is

\[
\mathbf F_M=\frac12\,\rho A\,C_L(S_p)\,v^2\,\hat{\mathbf n},
\qquad
S_p=\frac{\omega r}{v},
\]

where \(\rho\) is air density in kg/m³, \(A\) is ball cross-sectional area in m², \(v\) is speed in m/s, \(\omega\) is angular velocity in rad/s, \(r\) is ball radius in m, and \(S_p\) is dimensionless. Drag is

\[
\mathbf F_D=\frac12\,\rho A\,C_D\,v^2\,\hat{\mathbf v}.
\]

Both forces scale with \(\rho\). Weather veto proof: for ideal dry air, \(\rho=p/(R_dT)\), with \(p\) in Pa, \(T\) in K, and \(R_d\approx287.05\) J/(kg K). At fixed rpm and mph, a change in temperature, pressure, or altitude changes \(\rho\), hence changes \(F_M\) and \(F_D\), hence changes movement and the whiff probability. The source’s pages 11 through 14 describe crawling, merging, z-scoring, and filtering, but no air-density covariate, so the fitted surface is not weather-invariant.

Biomechanical layer: define a dimensionless load index \(L=\tau_{\rm elbow}/\tau_{\rm limit}\), where \(\tau_{\rm elbow}\) is an estimated elbow varus or UCL torque proxy in N·m and \(\tau_{\rm limit}\) is a tissue-specific tolerance in N·m. A recommendation is vetoed if \(L\ge1\) or if the command error \(C(S,V)\) exceeds a pre-set tolerance \(c_0\). The source recommends “Increase his spin rate” and “Decrease his velocity***” for Eovaldi’s cutter [PAGE 28], but it provides no torque, release, or command data. Therefore the cutter recommendation is conditionally allowed only if a biomechanical test shows \(L<1\) and a command test shows \(C\le c_0\). Otherwise the optimum must be projected back to the feasible boundary. The same veto applies to page-26 Minor recommendations: increasing velocity can raise both drag-layer movement and elbow load, so the statistical slope cannot override a physical safety constraint.

Adjudication rule: accept a page-20-through-page-24 directional slope only as a local, within-pitch-type, within-observed-range hypothesis. Veto any global “both high” claim from page 29 when the pitch type has a null or negative velocity sign, when the proposed point lies outside the filtered support of page 14, when air density differs materially from the training distribution, or when \(L\ge1\). The source does not contain the coefficient table, confidence intervals, or physical covariates needed to prove an interior optimum, so the safe adjudication is boundary-constrained and type-specific, not universal.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Pitch-type fixed-effect counterfactual. Refit the whiff model with pitch-type interactions and pitcher/batter random effects, then test whether the page-20-through-page-24 sign pattern survives. Prediction: four-seamers should retain \(\beta_S>0\) and \(\beta_V>0\); cutters should retain \(\beta_S>0\) and \(\beta_V<0\); sliders should have \(\beta_V\) near zero; curveballs should have \(\beta_S\) near zero. Veto rule: if any pitch type’s 95% interval for the claimed non-null slope includes zero, or if the pooled velocity sign flips after type stratification, then the page-29 universal conclusion is vetoed for that pitch type. This directly tests the “Simpson’s Paradox” warning on page 19.

2. Out-of-sample calibration counterfactual. Train on one season or one pitcher subset and test on a held-out season or pitcher set, predicting whiff probability from \(S\) and \(V\) within pitch type. Prediction: the in-sample \(R^2\approx0.2512\) implied by “r = 0.5012” [PAGE 16] will shrink out of sample, and calibration slope will fall below 1.0. Veto rule: if held-out RMSE is not lower than a pitch-type mean baseline, or if calibration slope is below 0.8, then the optimization surface is not transportable and the practical recommendations on pages 26 and 28 are vetoed as overfit. This is verifiable by pre-registering the split, RMSE, and calibration slope.

3. Biomechanical-weather counterfactual for Eovaldi’s cutter. Apply the page-28 instruction “Decrease his velocity***” by 1 mph while increasing spin enough to hold the model’s predicted whiff probability constant. Prediction: the statistical model may show a small positive change in predicted whiff, but the elbow load proxy \(L\) will rise and command error \(C\) may exceed tolerance; in cold dense air, the required movement compensation will also change. Veto rule: if \(L\ge1\), if \(C>c_0\), or if the predicted whiff gain is smaller than the air-density-induced movement change, the cutter instruction is vetoed. The verifiable outputs are predicted whiff probability, \(L\), \(C\), and the air-density-adjusted trajectory; no source page provides these, so the instruction cannot be certified from the paper alone.
</RLVR_COUNTERFACTUAL_VETOES>
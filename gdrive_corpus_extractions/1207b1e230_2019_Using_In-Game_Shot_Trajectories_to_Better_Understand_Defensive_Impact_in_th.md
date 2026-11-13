---
source: "2019 Using In-Game Shot Trajectories to Better Understand Defensive Impact in the NBA.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 5315
---

<NATIVE_REASONING>
We need answer user? They gave system prompt and drive source pages. Need produce analysis with exact XML sections and >=1000 words. Need not betting lines. It's sports paper but no betting. Must cite [PAGE N] markers verbatim quotes. Need formal LaTeX equations, units, assumptions, singularity/breakdown. Need sections: THINK_TRACE >=400 words deep multi-hop derivation gray-zone audit. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX units page citations breakdown. RETROCAUSAL_GENEALOGY lineage multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need ensure total >=1000 words across exact XML sections. We need interpret task? It asks frontier reasoning foundry likely wants derive insight from paper? No explicit question, but maybe we need produce research synthesis? Need include source operators and equations. Need not mention betting lines. Good.

Need use exact page citations [PAGE 1], etc and verbatim quotes. Need probably answer as a structured analysis of paper's methodology and claims. Need mention "DRIVE SOURCE". Need avoid betting lines. Sports metrics okay. No odds. Need maybe address "defensive impact" and "shot trajectories." Need formal equations from paper. Need be careful with variables, units. Need quote exact phrases. Need mention assumptions, singularity/breakdown regimes. Need exact quote from page 4 equation and priors. Need page 5 equation, page 4 pseudo-data. Need page 9/10 model. Need page 6 results with variance percentages. Need page 7 depth 9" vs 10". Need page 11 shooter resiliency. Need derive implications.

Need produce all XML tags exactly. It says >=1,000-word depth across exact XML sections. Need count likely 1500+ words. We need include THINK_TRACE >=400 words. Need make all sections substantive. We can do about 1800 words.

Need formal LaTeX. For units, SI/information/probability. Use feet, inches, probability dimensionless. The shot-make probability logistic outputs [0,1]. Need maybe define σ. Need assumptions: shot trajectories approximated by quadratic E(Z_i)=...; z height in feet; x,y in feet; beta units? β0 ft, β1 dimensionless? Let's derive: x,y in feet, z in feet. β0 ft, β1 dimensionless? If x ft times β1 dimensionless? z ft. β3 x^2: β3 1/ft; β5 xy: β5 1/ft. β2 dimensionless. Actually if z=β0 + β1 x + β2 y + β3 x^2 + β4 y^2 + β5 x y. For β1 x: β1*(ft) = ft -> β1 dimensionless. β3 x^2: β3*ft^2 = ft -> β3 1/ft. β5*ft^2 = ft -> 1/ft. β0 ft. Need state. But source doesn't state, deriving. Need exact quote "fit a quadratic best fit line" equation. We can cite [PAGE 4]. Need mention Bayesian prior with Normal prior and inverse gamma. Maybe don't overdo.

Need maybe mention "No betting lines" necessarily not mention. Good.

Need consider "retrocausal genealogy" - historical/scientific lineage & multi-week traps. Need interpret as lineage of Rao-Blackwellization, optical tracking, Marty/Lucey, Franks/Goldsberry, etc. "multi-week traps" maybe longitudinal inference pitfalls: single-season opponent 3P% nearly zero year-to-year correlation, low sample, rank instability; early-season overreaction. Need mention multi-week trap: using small windows of games (10%,20% etc) to estimate γ, high MSE; need longer accumulation or probability outcomes. The paper uses 10-50% games; MSE decreases. "Multi-week" can discuss weekly/monthly samples and rank instability. Need not betting. Could mention "evaluation windows" not betting. "clock" in RECURSIVE_THEORY_OF_MIND: maybe shot clock? Use "clock" as decision timing. Need discuss crisis habit regression vs counter-trap vs clock. Maybe discuss shooter under pressure regresses to short depth; counter-trap is training to correct bias; clock is shot-clock/latency? Need produce.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Basketball indoor, weather veto low; biomechanical: defender height/reach, contest angle, NDD; physical: trajectory depth/entry angle; environmental: SportVu optical tracking noise, missing trajectories. Need proof that cross-layer vetoes don't overturn paper: indoor weather not applicable; biomechanics can explain short bias; tracking occlusion/ noise. Need adjudicate.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe Reinforcement Learning with Verifiable Rewards? Could be "RLVR counterfactual vetoes" from system. Need create 3 scenarios where a proposed assertion is vetoed by verifiable checks. Predictions. Need ensure not betting. Scenarios:
1. Claim: "Contesting shots lowers 3P% because defenders increase left-right bias." Check paper says no effect of defender angle on left-right; veto. Prediction: regression of LR vs defender angle yields null; variance increases but mean bias not.
2. Claim: "Taller defenders lower shooting percentage mainly through entry angle." Paper says entry angle effect may be minor; depth more important. Veto if model ignores depth. Prediction: entry angle coefficient small and depth coefficient dominates.
3. Claim: "Opponent 3P% is reliable across weeks." Paper says near zero year-to-year correlation; use shot-make probability rank consistency ρ=0.17 vs 0.025. Veto. Prediction: split-half rank correlation raw low, prob higher.
Could include predictions with metrics thresholds. Need "verifiable" - specify data check: 50,916 threes, 46,093 training, NDD >6/ <4, etc. Need maybe mention exact p? Not in paper. Avoid inventing too precise stats. Predictions can be directional.

Need "zero toy equations" - only formal equations; don't invent Force/Fatigue. We can include equations from source and derived definitions. Need avoid fake ratios. Could include "Rao-Blackwell" variance inequality? Formal: Var(E[Y|X]) ≤ Var(Y). That's formal. Need units. Include logistic model. Need mention MSE. Could define NDD in feet. Shot depth and left-right in feet, entry angle degrees? Source says entry angle; not unit explicitly. It says "angle" likely degrees. Need say assumed degrees, not explicit? Source says "entry angle" no unit; page 7 says "mid-40's" implies degrees. We can state "degrees (inferred from 'mid-40's')" and cite. Good.

Need "source operators" maybe list operators: E(Z), Bayesian posterior mean, shot factors D,LR,A, logistic σ, Rao-Blackwellization, sum-to-zero contrast regression, interaction term. Need formal. Need exact quotes. Need cite exact page markers. Use verbatim quotes in quotes.

Need "breakdown regimes": singularities: logistic model can saturate probabilities at 0/1 for extreme shot factors; quadratic fit unstable if trajectory points sparse/noisy or collinear; Bayesian prior prevents singular X'X? The design matrix can be ill-conditioned when x,y near collinear; posterior with Λ0. NDD measurement unreliable if nearest defender not primary; defender height/distance interactions confounded; sample-size floor at 100 threes for tables. Weather not relevant. Need mention "singularity/breakdown regimes" exactly. Need maybe "MSE" and "rank correlation" not equations? Fine.

Need answer in XML exactly. Could include a title? The required sections are exact. We'll output only those tags? Maybe include brief preamble? It says across exact XML sections; better output the six sections only. Need ensure >=1000 words. Let's draft.

Need THINK_TRACE >=400 words. Let's make about 550 words. It should be deep multi-hop derivation & gray-zone audit. Include reasoning steps: data -> trajectory model -> shot factors -> probability -> defender regression -> Rao-Blackwell -> implications and gray zones. Use citations. It can mention "gray-zone audit" points: NDD not primary defender; no defender angle effect on LR; shot depth bias; entry angle minor; small sample; model 3 omits covariates; weather/biomechanics. Need perhaps quote "nearest defender distance is not the most reliable way to quantify the defensive pressure" [PAGE 12]. Good. Need mention exact numbers. Need multi-hop: contest -> variance/depth bias -> lower make probability; taller defenders -> higher entry angle -> deviates from mid-40s optimum but probability flatter over entry angles; more important depth. Need derive.

Need SOURCE_OPERATORS_AND_EQUATIONS maybe 500 words. Include equations and units. Need cite page 4,5,9,10. Use LaTeX.

Need RETROCAUSAL_GENEALOGY maybe 250 words. Include historical lineage: optical tracking SportVu, Marty/Lucey, Daly-Grafstein/Bornn, Rao-Blackwell, Franks/Goldsberry. Multi-week traps: small samples, split-season rank correlations. Need mention year-to-year near zero correlation. "Multi-week traps" perhaps "weekly/monthly rolling windows" should be cautious. Need cite page 2 and page 9/10.

Need RECURSIVE_THEORY_OF_MIND maybe 250 words. "Crisis habit regression" = shooter under tight contest biases short; "counter-trap" = defender/coach adapting? "clock" = shot clock and decision time. Need discuss recursive modeling: defender anticipates shooter's short bias, shooter anticipates etc. Use paper evidence: NDD <4 vs >6 variance. Mention "defender angle did not bias left-right" so counter-trap of shading left/right lacks evidence. Taller defender raises entry angle. Clock: quick contests before release. Need not over-invent. Need say "not directly measured; gray zone". Good.

Need CROSS_LAYER_VETO_ADJUDICATION ~250 words. Physical: projectile ballistics, rim geometry; biomechanical: taller defenders, NDD; weather: indoor controlled, so weather veto not applicable; optical tracking occlusion/noise. Need proof: paper restricted to 50,916 threes and removed missing/noisy trajectories; 46,093 training. Need mention if weather data were introduced, it would be spurious for indoor NBA; should veto. Biomechanical override: defender height affects angle, NDD affects depth; but NDD not primary defender. Need state "no cross-layer veto reverses core result." Good.

Need RLVR_COUNTERFACTUAL_VETOES ~300 words. 3 scenarios with predictions. Need maybe format numbered. Ensure "verifiable" with data checks. Predictions include sign and metric. Avoid betting. Good.

Need word count. Let's draft with rich text. Need exact quote citations. The source text uses weird hyphen "ﬁ" etc. When quoting, we can normalize? "verbatim quotes" maybe preserve as much as possible. Use exact strings from text: "shots that are tightly contested have a 56% larger variance in depth and a 38% larger variance in left-right distance compared to open shots" [PAGE 6]. "Contesting shots does not appear to introduce bias into the left-right accuracy of shooters, but does appear to cause shooters to bias their shots shorter than what is optimal." [PAGE 6]. "a smaller nearest defender distance (NDD) results in both higher entry angles and depths shorter in the hoop" [PAGE 6]. "conditional on defender distance, taller defenders result in higher shot trajectory angles" [PAGE 6]. "entry angles in the mid-40’s result in the highest shooting percentage" [PAGE 7]. "shots landing at 9" depth are made at 60.1% of the time, while shots landing at 10" depth are made 64.5% of the time" [PAGE 7]. "defenders contesting from the left or the right of the shooter do not appear to bias shots in either direction" [PAGE 7]. "almost zero correlation year-to-year" [PAGE 2]. "ρ = 0.17 vs. 0.025" [PAGE 9]. "ρ = 0.20 vs. 0.033" [PAGE 11]. "Kemba Walker’s estimated mean three-point shot-make probability decreases 1.98% points less than the league average for every foot closer the nearest defender is." [PAGE 11]. "nearest defender distance is not the most reliable way to quantify the defensive pressure on a shot" [PAGE 12]. "Rao-Blackwellizing FG%" [PAGE 11/12]. Need cite [PAGE 11]? It says table caption page 11. Good.

Need include equations exact from paper:
E(Z_i) = β0 +β1x_i +β2y_i +β3x_i^2 +β4y_i^2 +β5x_i y_i (1) [PAGE 4]. Use LaTeX. Need mention Bayesian prior: \rho(\beta|\sigma^2,z,X) \sim N(u_0,\sigma^2\Lambda_0^{-1}); \rho(\sigma^2|z,X) \sim IG(a_0,b_0). [PAGE 4]. Assumptions: pseudo-data 2 at shooter x,y and 7 ft height, 2 at basket centre and 10 ft height. Good.

Shot-make:
P(S_i=1)=\sigma(\beta_0+\beta_1\hat D_i+\beta_2\hat{LR}_i+\beta_3\hat A_i+\beta_4\hat D_i^2+\beta_5\hat{LR}_i^2+\beta_6\hat A_i^2+\beta_7\hat D_i\hat{LR}_i+\beta_8\hat D_i\hat A_i+\beta_9\hat{LR}_i\hat A_i)
[PAGE 5]. σ(x)=exp(x)/(1+exp(x)). Good.

Defender model:
Y_{ijk} = β0 + α_j + γ_k (3) [PAGE 9]. Need define Y binary or probability. Sum-to-zero contrasts. Model 4: Y_{ij} = β0 + α_j + γ_j * NDD_{ij} (4) [PAGE 9]. Need note equation uses Y_{ij} not Y_{ijk}. Good.

Rao-Blackwell inequality:
Var(E[Y|X]) ≤ Var(Y). Use information/probability. Actually if Y binary, E[Y|X]=p_i. The variance reduction. Need mention "Beta-Bernoulli random variables" [PAGE 11]. Good.

Need "units": D, LR in feet (page 7 says feet); entry angle degrees (mid-40s); NDD feet; height feet; Z feet; probability dimensionless. MSE units probability^2 if using probability; binary MSE probability^2. Rank correlation dimensionless. Good.

Need "singularity/breakdown regimes": 
- Quadratic model: if design matrix X is rank-deficient due to collinearity of x,y,x^2,y^2,xy, posterior can still be proper with prior but estimates unstable; if noise/missing trajectories too high, modeled trajectory too far from raw data removed [PAGE 5].
- Logistic model: extreme covariates can cause separation and probabilities saturating near 0 or 1, making coefficient estimates unstable; not necessarily reported but formal. Need phrase as audit, not source claim. 
- NDD regression: NDD is not primary defender and ignores orientation, so breakdown when nearest defender is helper/close-by non-contester [PAGE 12].
- Sample floor: tables restricted to >=100 threes [PAGE 10 and 11], so small-N players excluded; rank inference breaks below threshold.
- Weather layer: indoor NBA, no weather variable; if included, spurious.
Need mention "breakdown regime" with exact.

Need "RETROCAUSAL_GENEALOGY": could mention "retrocausal" means current metric lineage to prior methods. Need maybe "This paper retroactively explains opponent FG% as a noisy estimator of a latent shot-make probability; Rao-Blackwellization is the genealogical hinge." Good. Multi-week traps: early season small windows, split-half rank correlations low; raw rank correlation 0.025 vs 0.17. Need state "multi-week estimation windows shorter than full season are traps because MSE curves are higher at 10-40% of games; use probability response or accumulate more games." Good.

Need "RECURSIVE_THEORY_OF_MIND": Could frame three agents: shooter, defender, coach/analyst. "Crisis habit regression" under tight NDD: shooter's motor habit regresses to short depth (bias), not left-right. Counter-trap: defender may overcontest height/angle but angle effect minor; better counter is reduce NDD and force short depth; shooter counter is recalibrate depth. Clock: shot clock forces release before optimal depth correction; quick contests matter. Need mention recursively: defender knows shooter biases short, may position to encourage short; shooter knows defender expects short, may adjust. But paper doesn't measure intentions; gray zone. Need not too speculative? The prompt asks it. We'll include caveats.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need "veto proof" maybe prove that weather cannot veto because indoor; physical layer: ball trajectory constrained by rim; biomechanical: defender height/reach. Need adjudicate conflicts: if biomechanical model says taller defenders should lower entry angle? Actually taller defenders result higher shot trajectory angles. Physical layer: to avoid block, shooter arcs higher; this increases entry angle, but entry angle mid-40s optimal and probability flatter over entry angles. Depth bias is more consequential. Need "weather veto" not admissible for NBA indoor; if dataset includes arena humidity/temperature, effects likely tiny and not in paper. Need "optical tracking veto": tracking noise could confound, but paper removed missing/noisy trajectories and trained on 46,093. Good.

Need RLVR: "Reinforcement Learning with Verifiable Rewards" maybe not necessary to expand. Use "RLVR-style verifiable veto". Need 3 scenarios. Predictions should be measurable. Scenario 1: left-right bias claim. Verification: compute mean LR by defender angle (left/right/front) conditional on NDD; paper predicts no directional bias, only variance difference. Veto if |mean LR difference| not significant? Can't invent threshold; say no systematic sign and small effect. Prediction: variance ratio ~1.38 contested/open; mean shift near zero. Scenario 2: entry angle dominates. Verification: compare logistic coefficients/marginal effects for A vs D. Paper says entry angle probability more consistent over range, depth 9 vs 10 difference 4.4 percentage points. Veto. Prediction: depth effect larger. Scenario 3: raw opponent 3P% stable over split weeks. Verification: split-half rank correlation; paper raw ρ=0.025 vs prob 0.17. Veto. Prediction: probability metric rank correlation higher; MSE lower at <50% games. Need maybe mention "multi-week" 10-50% games. Good.

Need ensure no betting lines: avoid "spread", "total", "moneyline", "odds". Good.

Need not mention "betting" at all. Good.

Need final answer with exact XML. Should we include markdown? XML tags can contain markdown? Fine. Need not include code block? Probably output raw XML. Need preserve tags. Let's compose.

Need count words. We can approximate. THINK_TRACE ~600. SOURCE ~600. Others ~300 each. Total ~2100. Good.

Need be precise with quote from page 6: "a 56% larger variance in depth and a 38% larger variance in left-right distance" exact. Use [PAGE 6]. Good.

Need mention "over 50,000 shot trajectories" [PAGE 1] quote. Use. "50,916 three-point shots" [PAGE 3]. "46,093 of the 50,916 threes" [PAGE 5]. Good.

Need note "Open and contested shots are defined as attempts with a NDD greater than 6 feet and less than 4 feet" [PAGE 7]. Good.

Need "defender height" not "defender height and distance affect shot angles and shot depths" [PAGE 3]. Good.

Need "MSEs ... smaller when using shot-make probabilities" [PAGE 9]. Use quote.

Need "Rao-Blackwell theorem ... lower variance" [PAGE 11-12]. Use exact.

Need "sum-to-zero contrasts" [PAGE 9]. Good.

Need "model 1" and "model 2". Good.

Need "Table 1" top defender etc maybe not necessary but can mention. Need "Boris Diaw -6.71" etc? Could use for context but not necessary. Maybe mention "γk*100" units percentage points per 100 shots. Table caption says "difference in 3-point shot-make probability percentage per 100 shots" [PAGE 10]. Need explain units. Good.

Need "NDD" in equation 4: "γ_j * NDD_{ij}" but gamma is change per foot. The text says "for every one foot change" [PAGE 11]. Good.

Need possible issue: equation (3) Y_{ijk}=β0+α_j+γ_k; if Y probability, linear model can predict outside [0,1], but paper uses? It says regression models; no link. Need mention assumption: linear probability model; breakdown when predicted probabilities outside [0,1]. Actually model 2 uses modeled shot-make probabilities as response, likely linear. Could mention as formal breakdown. Good.

Need "source operators" maybe include "posterior mean" operator. Good.

Need "information units": Rao-Blackwell lower variance; maybe "bits" not in source. Avoid inventing. Probability dimensionless. "information" can be qualitative. Maybe mention "conditioning on sufficient statistic" not bits. Good.

Need "SI units" - paper uses feet/inches, not SI. We can say source uses imperial; SI equivalents? User asks SI/information/probability units. We can provide both: feet (ft) and approximate meters? But no need? It says "State formal LaTeX equations, SI/information/probability units". We should include units: source uses feet/inches; SI conversion: 1 ft=0.3048 m, 1 in=0.0254 m. Need maybe mention. Use exact: depth 10" ≈0.254 m, 9"≈0.2286 m; 4 ft≈1.2192 m, 6 ft≈1.8288 m; 7 ft≈2.1336 m, 10 ft≈3.048 m. Good. Entry angle degrees. Probability dimensionless. MSE probability^2. Good. This satisfies SI. Need not overdo.

Need "singularity/breakdown regimes" with exact. Good.

Need maybe "zero toy equations" means no invented ratios. We won't.

Let's write final. Need ensure XML sections exact and no extra tags. Use LaTeX with \(...\). Need verbatim quotes. We should put quotes in quotation marks. Good.

Potential problem: "THINK_TRACE" should be deep multi-hop derivation. We'll make it explicit steps 1-6 and gray-zone audit. Good.

Need ">=1,000-word depth across exact XML sections" maybe total. We can state no preamble. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Multi-hop derivation and gray-zone audit. The paper’s causal chain is: optical tracking gives ball and player coordinates at 25 Hz [PAGE 3]; the ball path near the rim is smoothed by a quadratic Bayesian regression [PAGE 4]; the fitted path is reduced to three shot factors—depth, left-right distance, and entry angle [PAGE 5]; those factors enter a logistic shot-make probability model [PAGE 5]; defender features are then joined to those probabilities and outcomes to estimate defender and shooter effects [PAGE 8-11]. The first hop is therefore geometric: a shot is not only a binary make/miss, but a curve with a rim-relative entry point. The second hop is probabilistic: a make/miss indicator \(S_i\in\{0,1\}\) is replaced by \(P(S_i=1)\), a modeled probability in \([0,1]\) [PAGE 5]. The third hop is inferential: the paper argues that conditioning on modeled make probabilities “Rao-Blackwellizes” field-goal percentage and reduces estimator variance [PAGE 11-12]. The fourth hop is defensive interpretation: tight contests increase trajectory variance, bias depth short, and alter entry angle, with depth appearing more consequential than entry angle for make probability [PAGE 6-7].

The key empirical numbers are explicit. The paper analyzes “over 50,000 shot trajectories” [PAGE 1] and “50,916 three-point shots from the 2014-15 season” [PAGE 3], training the make-probability model on “46,093 of the 50,916 threes” [PAGE 5]. It reports that tightly contested threes have “a 56% larger variance in depth and a 38% larger variance in left-right distance compared to open shots” [PAGE 6]. It also states: “Contesting shots does not appear to introduce bias into the left-right accuracy of shooters, but does appear to cause shooters to bias their shots shorter than what is optimal” [PAGE 6]. That is a two-part result: variance inflation in both depth and left-right, but mean bias only in depth. The paper further finds “a smaller nearest defender distance (NDD) results in both higher entry angles and depths shorter in the hoop” [PAGE 6], and “conditional on defender distance, taller defenders result in higher shot trajectory angles” [PAGE 6]. The make-probability consequence is anchored by the statement that “entry angles in the mid-40’s result in the highest shooting percentage” [PAGE 7], while “shots landing at 9" depth are made at 60.1% of the time, while shots landing at 10" depth are made 64.5% of the time” [PAGE 7]. Thus the gray-zone audit should not claim that contests mainly work by left-right misdirection: the paper explicitly says defenders contesting “from the left or the right of the shooter do not appear to bias shots in either direction” [PAGE 7]. The more defensible mechanism is short-depth bias plus variance inflation, with entry-angle changes being real but possibly less important because make probability is “more consistent over a range of entry angles” [PAGE 7].

The gray-zone audit has several failure points. First, NDD is an imperfect pressure variable; the authors themselves warn that “nearest defender distance is not the most reliable way to quantify the defensive pressure on a shot” and that it “does not give us any indication of how the defender is oriented in relation to the shooter” [PAGE 12]. Second, model (3) is a simple additive model, \(Y_{ijk}=\beta_0+\alpha_j+\gamma_k\) [PAGE 9], so it omits shot location, shooter position, defender orientation, and NDD interactions; the authors propose conditioning on such covariates as future work [PAGE 12]. Third, the raw metric is unstable: opponent 3P% has “almost zero correlation year-to-year” [PAGE 2], and split-season defender ranks are much more consistent with probabilities than with raw make/miss, “\(\rho=0.17\) vs. \(0.025\)” [PAGE 9]. Fourth, the shooter-resiliency model \(Y_{ij}=\beta_0+\alpha_j+\gamma_j * NDD_{ij}\) [PAGE 9] estimates a linear interaction per foot; it is not proof of a biomechanical mechanism, only an association under the model. Fifth, small-sample restrictions matter: Table 1 and Table 2 are “Restricted to players who defended at least 100 three-point shots” or “attempted at least 100 three-point shots” [PAGE 10-11], so ranks below that floor are not identified. The derivation therefore supports a careful claim: contesting reduces expected 3P% partly by increasing depth variance and shifting depth short of the 10-inch optimum, while left-right bias is not supported and entry-angle effects are secondary or uncertain.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s first operator is a quadratic height surface for the ball, fitted per shot \(i\):
\[
E(Z_i)=\beta_0+\beta_1 x_i+\beta_2 y_i+\beta_3 x_i^2+\beta_4 y_i^2+\beta_5 x_i y_i \tag{1}
\]
[PAGE 4]. Here \(Z_i\) is ball height; \(x_i,y_i\) are court coordinates. The source uses imperial units—feet and inches—so in SI, \(1\text{ ft}=0.3048\text{ m}\) and \(1\text{ in}=0.0254\text{ m}\). Dimensionally, \(\beta_0\) carries length; \(\beta_1,\beta_2\) are dimensionless; \(\beta_3,\beta_4,\beta_5\) carry inverse length. The paper estimates these coefficients “using a Bayesian regression with a conjugate Normal prior” of the form
\[
\rho(\beta\mid\sigma^2,z,X)\sim N(u_0,\sigma^2\Lambda_0^{-1}),
\qquad
\rho(\sigma^2\mid z,X)\sim IG(a_0,b_0)
\]
[PAGE 4]. The prior is updated with pseudo-data: “2 set at the x, y location of the shooter and 7 feet in height, and 2 set at the centre of the basket and 10 feet in height” [PAGE 4]. The posterior mean of \(\beta\) is used as the fitted trajectory [PAGE 4]. The second operator extracts three shot factors: depth \(D_i\), left-right distance \(LR_i\), and entry angle \(A_i\) [PAGE 5]. Depth and left-right are reported in feet [PAGE 7]; entry angle is in degrees, inferred from the paper’s “mid-40’s” language [PAGE 7]. The third operator is the logistic shot-make probability:
\[
P(S_i=1)=\sigma\!\left(
\beta_0+\beta_1\hat D_i+\beta_2\hat{LR}_i+\beta_3\hat A_i
+\beta_4\hat D_i^2+\beta_5\hat{LR}_i^2+\beta_6\hat A_i^2
+\beta_7\hat D_i\hat{LR}_i+\beta_8\hat D_i\hat A_i+\beta_9\hat{LR}_i\hat A_i
\right) \tag{2}
\]
with \(\sigma(x)=\exp(x)/(1+\exp(x))\) [PAGE 5]. Output is dimensionless probability. The fourth operator is the defender-impact regression:
\[
Y_{ijk}=\beta_0+\alpha_j+\gamma_k \tag{3}
\]
[PAGE 9], where \(Y_{ijk}\) is either a binary make/miss indicator or a modeled shot-make probability for shot \(i\) by shooter \(j\) defended by \(k\). Using sum-to-zero contrasts, \(\alpha_j\) is shooter deviation from league average and \(\gamma_k\) is defender deviation [PAGE 9]. The fifth operator is the shooter-resiliency interaction:
\[
Y_{ij}=\beta_0+\alpha_j+\gamma_j * NDD_{ij} \tag{4}
\]
[PAGE 9], where \(NDD_{ij}\) is nearest defender distance in feet and \(\gamma_j\) is the estimated change in mean 3P% or shot-make probability per one-foot change in NDD [PAGE 9-11]. The tabulated \(\gamma_k*100\) and \(\gamma_j*100\) values are percentage-point changes per 100 shots [PAGE 10-11]. The paper’s Rao-Blackwell argument is the variance statement \(\operatorname{Var}(E[Y\mid X])\le \operatorname{Var}(Y)\), applied when shot-make probabilities are treated as sufficient statistics under a Beta-Bernoulli model [PAGE 11-12].

Assumptions and breakdown regimes. Equation (1) assumes a smooth quadratic path near the rim; it can break down when tracking points are sparse, noisy, or missing, and the authors removed trajectories that were “partially missing, especially noisy, or that resulted in modeled shot trajectories from (1) that were too far from the raw data” [PAGE 5]. The Bayesian prior regularizes but does not eliminate ill-conditioning if \(x,y,x^2,y^2,xy\) are nearly collinear; posterior estimates then become prior-dominated. Equation (2) can saturate near 0 or 1 under extreme shot factors, producing separation-like instability in logistic coefficients. Equation (3) is a linear probability model for model 2; it can predict probabilities outside \([0,1]\) if extrapolated beyond observed covariate ranges. Equation (4) breaks down when NDD is not the primary defender, when defender orientation is ignored, or when the nearest defender is a helper rather than the contesting player—exactly the paper’s own caveat [PAGE 12]. Table restrictions to at least 100 threes [PAGE 10-11] define a sample-size breakdown: below that floor, player-specific \(\gamma\) estimates are not reported and should not be treated as stable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from optical player-tracking to trajectory-based shot quality. SportVu supplies \(x,y\) for players and \(x,y,z\) for the ball at 25 Hz [PAGE 3]; Marty and Lucey (2017) and Marty (2018) supply the shot-factor logic—depth, left-right, entry angle—used here [PAGE 5]. Daly-Grafstein and Bornn (2019) supply the Rao-Blackwellization of field-goal percentage, which this paper extends from binary outcomes to modeled probabilities [PAGE 11-12]. Franks et al. (2015) and Goldsberry and Weiss (2013) represent the prior generation of spatial defensive metrics that use player location but not full shot trajectories [PAGE 2]. The retrocausal genealogy is therefore: box-score counts → spatial tracking → trajectory factors → modeled make probabilities → defender/shooter coefficients. The paper’s Table 1 and Table 2 are downstream descendants of that genealogy: \(\gamma_k\) ranks defenders by estimated probability impact [PAGE 10], and \(\gamma_j\) ranks shooters by resiliency to NDD [PAGE 11].

The multi-week trap is sample-window instability. Opponent 3P% is described as having “almost zero correlation year-to-year” [PAGE 2]; split-season defender ranks using raw outcomes have \(\rho=0.025\), versus \(\rho=0.17\) using shot-make probabilities [PAGE 9]. For shooters, the analogous split-half rank consistency is \(\rho=0.033\) raw versus \(\rho=0.20\) probability-based [PAGE 11]. The MSE analysis using 10%, 20%, 30%, 40%, and 50% of games shows that “MSEs of coefficients estimated using fewer than 50% of the games from the 2014-15 season are smaller when using shot-make probabilities” [PAGE 9]. Thus any multi-week evaluation window shorter than a full season is a trap if it uses raw make/miss ranks: the estimate is noisy and rank order is unstable. The probability-based metric is not magic—\(\rho=0.17\) and \(\rho=0.20\) are still modest—but it is a verifiable improvement in the paper’s split-sample checks. A second trap is mechanistic overreach: because contests increase depth variance and short bias [PAGE 6], one might infer that all contest effects are depth effects; the paper instead says entry-angle effects “may be minor” relative to overall shooting percentage [PAGE 7]. A third trap is reifying NDD as “pressure”; the authors explicitly doubt NDD as a reliable pressure measure [PAGE 12]. The lineage therefore cautions against retrofitting a simple “contest = lower FG%” story onto a trajectory mechanism without checking which shot factor actually moved.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression versus counter-trap versus clock. Under tight defense, the shooter’s habit regression is toward shorter depth: contested shots have larger depth variance and are biased “shorter than what is optimal” [PAGE 6]. This is a motor-habit failure under time pressure, not a left-right aim failure, because the paper finds no directional left-right bias from defender angle [PAGE 7]. The counter-trap for a shooter is therefore depth recalibration: train to hold the 10-inch optimum rather than letting the contest pull the release short. The counter-trap for a defender is to reduce NDD and force that short-depth regression, while not overinvesting in left/right shading, since the paper finds no left-right bias from contest side [PAGE 7]. Taller defenders add an entry-angle channel: “taller defenders result in higher shot trajectory angles” [PAGE 6], but the make-probability surface is relatively flat over entry angles, so this may be a secondary channel [PAGE 7]. The clock layer is the shot-clock/release-time constraint: a contest that arrives earlier forces the shooter to decide before depth correction is possible; a late contest may alter the arc but not the depth. The recursive theory of mind is: defender anticipates shooter’s short-bias, shooter anticipates defender’s expectation, coach anticipates both and selects players whose \(\gamma_j\) indicates resilience. The paper measures outcome coefficients, not intentions, so this layer is an interpretation. The verifiable part is directional: NDD decrease → higher entry angle and shorter depth [PAGE 6]; contest → larger depth and left-right variance [PAGE 6]; no defender-angle → left-right bias [PAGE 7]. The unverifiable part is the internal “mind” of the shooter; it should be treated as a hypothesis, not a measured mechanism.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The ball is a projectile constrained by rim geometry; depth and entry angle are physically coupled to make probability. The paper’s 9-inch versus 10-inch depth result—60.1% versus 64.5% [PAGE 7]—is a physical/geometric veto against any claim that depth is irrelevant. The variance result—56% larger depth variance and 38% larger left-right variance under tight contest [PAGE 6]—is a physical dispersion veto against a pure mean-shift story. Biomechanical layer. Taller defenders raise shot trajectory angles conditional on NDD [PAGE 6], consistent with a reach/contest biomechanics channel; smaller NDD also raises entry angle and shortens depth [PAGE 6]. But biomechanics does not veto the left-right null: defender angle does not appear to bias left-right direction [PAGE 7]. Weather layer. The data are NBA indoor games; the paper includes no weather variable, and weather would be a spurious cross-layer control for an indoor league. A weather-based veto should be rejected as non-identifying. Tracking layer. Optical tracking can occlude or noise the ball; the authors removed missing/noisy trajectories and trajectories too far from raw data, training on 46,093 of 50,916 threes [PAGE 5]. That is a data-quality veto against overreading individual trajectories, not against the aggregate contest results. Adjudication: physical and biomechanical layers support the short-depth/variance mechanism; weather cannot veto an indoor NBA result; NDD’s known limitation [PAGE 12] weakens player-level causal claims but not the aggregate trajectory contrast.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Veto the claim “contests lower 3P% mainly by pushing shooters left or right.” Verifiable check: compare mean left-right deviation by defender angle (left/right/front) conditional on NDD. The paper predicts “defenders contesting from the left or the right of the shooter do not appear to bias shots in either direction” [PAGE 7], while contested shots have 38% larger left-right variance [PAGE 6]. Prediction: a directional mean-shift test will be null or unstable, while a variance-ratio test will show inflation; the claim is vetoed if it requires systematic left-right bias.

2. Veto the claim “entry-angle change is the dominant contest channel.” Verifiable check: compare marginal make-probability effects of depth versus entry angle in model (2). The paper says entry angles in the “mid-40’s” are optimal [PAGE 7], but also that shooting percentages are “more consistent over a range of entry angles” [PAGE 7], and that 9-inch depth makes 60.1% versus 64.5% at 10 inches [PAGE 7]. Prediction: depth coefficients and depth-bias effects will dominate the entry-angle channel in explained make-probability variation; the claim is vetoed if a model that omits depth still reproduces the contest effect.

3. Veto the claim “raw opponent 3P% is stable enough for short multi-week defender rankings.” Verifiable check: split the season into halves or 10-50% game windows, estimate \(\gamma_k\) from raw make/miss versus modeled probabilities, and compare rank correlation and MSE. The paper reports defender rank consistency “\(\rho=0.17\) vs. \(0.025\)” [PAGE 9] and smaller MSE below 50% of games with probabilities [PAGE 9]; shooter rank consistency is “\(\rho=0.20\) vs. \(0.033\)” [PAGE 11]. Prediction: raw rankings will be unstable across windows, probability-based rankings will be more consistent, and the raw claim is vetoed when evaluated on short windows.
</RLVR_COUNTERFACTUAL_VETOES>
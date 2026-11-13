---
source: "GelmanEtAl-2013-BayesianDataAnalysis3.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-must-have"
pages: 677
model: deepseek/deepseek-v4.1-flash-1017
words: 6621
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry, using source pages Gelman BDA3. Need comply invariants: zero betting lines. No spreads/totals/moneylines/odds. Source includes football point spread page, but we must not mention betting lines. Avoid words. Need sections exact XML. >=1000 words. Deep multi-hop derivation & gray-zone audit >=400 words. Formal LaTeX, units, page citations, breakdown. Need cite exact [PAGE N] markers and verbatim quotes from provided source text. Need use source pages to discuss operators/equations. Since DRIVE SOURCE is stats book. Need produce response not about betting. Need apply framework to some problem? The prompt seems generic: analyze source? We need likely produce "frontier reasoning" about Bayesian operators from Gelman. Need include no betting lines. Need avoid toy equations. Formal LaTeX with units, assumptions, singularities. Need cite exact page markers. We have many pages. Need discuss Bayesian data analysis operators/equations: Bayes rule, posterior, prior predictive, posterior predictive, hierarchical exchangeability, de Finetti, shrinkage, MCMC, WAIC, HMC, etc. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. Need make them relevant to source. Need maybe use source as "drive" to build model of inference under uncertainty. Need zero betting lines. We can reference "football" example? Avoid point spread/odds. Maybe not. Need no betting lines. Could mention "sports outcome example" without line terms? Better avoid entirely. Need cite pages with verbatim quotes. We can quote exact sentences from page markers. Need not overquote huge. Need formal equations with units and breakdown regimes. Need units: probability dimensionless, log predictive density in nats (natural log) or bits, information in nats, parameter units. Need assumptions. Singularity: improper posterior when uniform prior on log variance etc. Exact: Section 5.7 p129: "a uniform prior distribution on log τ would seem natural ... but it results in an improper posterior distribution." Also p117 "p(log τ) ∝ 1 yields an improper posterior distribution for τ." p90 improper posterior with Beta(0,0) and n successes 0 failures. p90 unbounded likelihood. p111 finite cutoff not acceptable. Need cite.

Need include source operators equations:
- Bayes rule p(ω,y)=p(ω)p(y|ω); posterior p(ω|y) ∝ p(ω)p(y|ω). [PAGE16] maybe.
- Posterior predictive: p(˜y|y)=∫p(˜y|ω)p(ω|y)dω [PAGE66 or 168]. Page 168 says log ppost(˜yi)=log Epost(p(˜yi|ω))=log∫p(˜yi|ω)ppost(ω)dω. Use units nats.
- Hierarchical exchangeability: p(ω|φ)=∏ p(ωj|φ); p(ω)=∫(∏ p(ωj|φ))p(φ)dφ [PAGE115]. de Finetti [PAGE115].
- Normal hierarchical posterior mean precision weighted and variance: formulas page 42, page 117. Need formal with units.
- Effective number parameters WAIC pWAIC formulas page 184? Actually pages 184? Source [PAGE184] includes pWAIC1/2 and WAIC. Cite.
- MCMC convergence Rhat p285, effective sample size p287. Use formal.
- HMC acceptance 65% page 313. Could include as operator.
- Model checking posterior predictive p-values page 160.
- Noninformative priors proper/improper p64, p90, p129.

Need answer's structure:
<THINK_TRACE> >=400 words deep derivation & gray-zone audit. Need include multi-hop: from prior to posterior to predictive to decision? But no decision? Could discuss hierarchy and singularity. Need cite pages. Need mention source pages exact. Gray-zone audit: check assumptions, singularities, improper posteriors, exchangeability, model fit, information criteria partition. Need be >400 words. We'll write ~600-800 words. Need overall >=1000. Desired oververbosity 5. Need all sections. Could be ~2500-3500 words. Need exact sections.

Need be careful with "zero betting lines": don't mention "point spread", "odds", "moneyline", "totals", "favorite", "spread". Avoid "Bayes factor posterior odds"? "odds" is betting-ish? The invariant says never mention spreads, totals, moneylines, or odds. "odds" maybe betting lines? Bayes factors use prior/posterior odds, but "odds" word might be interpreted as betting odds. Avoid "odds" word entirely. Use probability ratios? The invariant says zero betting lines, never mention odds. Better avoid "odds" string. Use "probability ratio" or "Bayes factor". Don't mention "point spread". Good.

Need not cite page 25 sports. Avoid. Source includes "odds" maybe not quote. We won't quote.

Need "SOURCE_OPERATORS_AND_EQUATIONS": formal LaTeX, units, page citations, breakdown. We need list operators. We can do numbered equations. Include assumptions. Need cite exact markers and verbatim quotes. Use quotes:
- [PAGE 16]: "p(ω, y) = p(ω)p(y|ω)." exact.
- [PAGE 168]: "log ppost(˜yi) = log Epost(p(˜yi|ω)) = log ∫ p(˜yi|ω)ppost(ω)dω." Exact from page 168. Good.
- [PAGE 115]: "p(ω|φ) = ∏_{j=1}^J p(ωj|φ)." exact.
- [PAGE 129]: "a uniform prior distribution on log τ ... results in an improper posterior distribution." Need exact quote: Page 129: "A uniform prior distribution on log τ would seem natural—working with the logarithm of a parameter that must be positive—but it results in an improper posterior distribution." Good.
- [PAGE 90]: "An improper posterior distribution cannot occur except with an improper prior distribution." Exact.
- [PAGE 184] WAIC formula: "WAIC = −2 lppd + 2pWAIC 2" exact. Page 184 yes.
- [PAGE 285] Rhat: "R = sqrt(var+(ψ|y)/W)" maybe exact. We can cite.
- [PAGE 313] "HMC is optimally efficient when its acceptance rate is approximately 65%" exact.
- [PAGE 160] posterior predictive p: "A model is suspect if a discrepancy is of practical importance and its observed value has a tail-area probability near 0 or 1" exact. Good.

Need units:
- Probability/density dimensionless? Probability density has inverse units of variable. Posterior density p(ω|y) units 1/[ω]. Likelihood p(y|ω) units 1/[y]. Product prior (1/[ω]) * likelihood (1/[y]) yields joint 1/([ω][y]); posterior normalized by p(y) (1/[y]) gives 1/[ω]. Include.
- Log score: nats if natural log; bits if log2. Source uses "log predictive density" maybe natural log. We can state nats. If y has units, log density includes inverse units but log of dimensionful density is formally offset; use standardized dimensionless y. Good. State assumption: y dimensionless or measured with fixed unit; otherwise log density differences are unit-invariant if same data.
- Information: nats. Effective parameters pWAIC dimensionless count-like.
- WAIC on deviance scale: nats? -2 lppd nats? Actually lppd sum log densities in nats, so WAIC in nats (or deviance units) dimensionless. pWAIC dimensionless.
- Rhat dimensionless.
- τ has units of ω (e.g., points in SAT). σ has units of y. μ same.
- Precision has inverse squared units.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss Bayes/Laplace, de Finetti, Box/Tiao, EM, MCMC, HMC, WAIC, BDA3. Multi-week traps: improper priors on hierarchical variance, model checking to fix priors can be iterative, cross-validation partition issues, nonidentifiability, label switching? Source pages 90, 111, 129, 160, 184, 288. Need mention not overclaim. Multi-week traps: (1) treating noninformative prior as objective and using log τ uniform -> improper posterior; (2) using posterior mode with variance component causing boundary zero; (3) using WAIC with bad data partition/time series; (4) overfitting with discrete model selection/Bayes factors when continuous expansion better; (5) ignoring data collection/ignorability. Need cite pages. Multi-week traps means traps that unfold over weeks? Explain delayed failure modes. "Retrocausal genealogy" link past decisions to later pathologies. Need not be too weird. Need cite.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This is unusual. Need interpret as a reasoning pattern: modeler's habits under crisis regress to defaults (uniform priors, no model check, point estimates); counter-trap: anticipate how model can be gamed by selection or prior; clock: convergence/time budget. Need relate to BDA: crisis habit regression = under pressure default to conjugate/noninformative/point estimate; counter-trap = use posterior predictive checks and hierarchical pooling; clock = finite compute, MCMC convergence, effective sample size, warm-up. Include source citations. Maybe use "recursive theory of mind" as modeling the modeler/user/clients: clients interpret intervals as Bayesian [PAGE34? page 24? Actually page 24 says clients will interpret interval estimates as Bayesian]. Use [PAGE34] quote: "clients will interpret interval estimates provided by statisticians as Bayesian intervals". Need exact? Page 34: "In many practical cases, clients will interpret interval estimates provided by statisticians as Bayesian intervals, that is, as probability statements about the likely values of unknown quantities conditional on the evidence in the data." Good. That matches theory of mind. Crisis habit regression: under deadline, default to flat priors and point summaries, but page 34 says clients already expect Bayesian probability. Counter-trap: use hierarchical modeling to avoid multiple comparisons and overfitting (page 96? page 106). Clock: MCMC convergence and compute budget (page 267, 285). Need mention "clock" as time/compute budget and convergence diagnostics.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Hmm source is stats; no physical/biomechanical/weather. Need adjudicate veto proof across layers: statistical assumptions vs physical plausibility, biomechanics, weather. Need no betting. Could say there are no physical/biomechanical/weather variables in source; veto at data layer: likelihood must be consistent with data collection process [PAGE13], model checking [PAGE151], ignorability [PAGE208]. But prompt requires physical/biomechanical/weather veto proof. We can frame: For any application, physical constraints act as hard priors/support restrictions; if model assigns mass outside physical bounds, veto. Source supports transformations and constraints? Page 303: HMC restricted parameters and areas of zero posterior density; transform positive or (0,1). Page 75: dose-response probability constrained 0-1; logistic. Page 171 singular models. Weather: data collection/observational sensitivity; weather could be unobserved covariate; ignorability requires covariates [PAGE204, 208]. Biomechanical: outcomes bounded, positive, etc.; use link functions. Need provide proof: support mismatch => prior predictive mass where physically impossible => posterior predictive p near 0? Need cite. Since no actual physical domain, we can state adjudication protocol and proof obligations: (1) support consistency: physical support S_phys; model support S_model; veto if q(y|ω)>0 for y∉S_phys without measurement model. (2) biomechanical constraints like monotonicity/positivity; use transformations/logit [PAGE75? 303]; (3) weather/design: if treatment assignment depends on weather and weather not recorded, ignorability fails [PAGE208, 204]. Veto proof: if weather affects both assignment and outcome and unmeasured, then p(I|x,y,φ) depends on y, nonignorable; Bayesian inference must model it. Cite page 208 "The essential flaw... complete definition of observed data should include information on how observed values arose". Page 201/204 nonignorable. Need mention no physical/biomechanical/weather data in source pages, so veto cannot be empirically proven here; only formal obligations. Need be honest: "Source provides no biomechanical/weather measurements; cross-layer veto is conditional." This is important.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose 3 scenarios with verifiable predictions from source. Need no betting. Scenarios:
1. Hierarchical variance prior on log τ uniform: use simulated data with J=8 schools; run HMC/Gibbs with uniform log τ; predict posterior mass drifts to τ→0 or impropriety? Source says improper posterior for log τ [PAGE129]. Verifiable: posterior density integral diverges; MCMC will show non-convergence/τ drifting to 0? Actually log τ uniform -> improper posterior mass at log τ→-∞ (τ→0). Source page 129: "posterior will have infinite mass integrating to the limit log τ → −∞." Prediction: Rhat high/posterior quantiles of log τ march downward as more iterations; a finite cutoff changes answer. Veto if algorithm used. 
2. Model check: Newcomb speed of light normal model: simulate 66 normal draws from fitted posterior; test statistic min(y). Prediction: posterior predictive p-value near 0 for min, observed -44 outside replications [PAGE154]. Veto normal model. Verifiable: p_min < 0.05 or zero of 20 replicates below -44. Source says all 20 much larger. Good.
3. WAIC vs cross-validation with hierarchical 8 schools: no-pooling vs complete pooling vs hierarchical. Prediction: complete pooling wins expected out-of-sample for this dataset; WAIC/DIC lower for complete pooling; but hierarchical preferred due to belief τ not zero [PAGE190]. Verifiable: Table 7.1 numbers? We don't have actual table but page 190 text. Could use "complete pooling wins expected out-of-sample prediction competition" [PAGE190]. Veto: don't blindly choose hierarchical by WAIC; model choice depends on predictive goal. Prediction: LOO-CV impossible for no-pooling [PAGE190]; WAIC can evaluate no-pooling. Verifiable.
Alternative: HMC acceptance rate tuning 65% [PAGE313]. Scenario: run HMC on 8 schools with εL=1 and L0=10; if acceptance far from 65%, tune; prediction Rhat <1.1 after 10,000 draws [PAGE316]. But RLVR veto? Could be third. But "veto scenarios" likely should be decision rules that veto bad inference. Use improper prior, model misfit, predictive criterion. Need include predictions.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX and page citations. Need maybe include "Breakdown regimes" per operator. Good. Need use exact quote markers. Need mention "unnormalized density q(ω|y)" page 261? Page 271? Source [PAGE271] says target distribution and unnormalized density q. Could cite.

Need no "spread" word. Avoid "odds". Need maybe avoid "bet" as well. No betting.

Need exact XML sections. They require exact tags. We can include content within. Need not include markdown. Use XML tags. Need ensure no invalid nested tags? Fine.

Need keep answer self-contained. Let's draft.

Plan:

<THINK_TRACE>
Paragraphs. Start: The drive is BDA3. We treat as operator algebra of uncertainty. Derive chain:
1. Joint model p(ω,y)=p(ω)p(y|ω) [PAGE16]. Posterior p(ω|y)=p(ω)p(y|ω)/p(y), p(y)=∫... [PAGE16]. Unit normalization. 
2. Marginalization/nuisance parameters: p(ω1|y)=∫p(ω1,ω2|y)dω2 [PAGE73]. Hierarchical: p(ω|φ), p(ω)=∫∏ p(ωj|φ)p(φ)dφ [PAGE115]. de Finetti.
3. Predictive: p(˜y|y)=∫p(˜y|ω)p(ω|y)dω [PAGE66/168]. Log score.
4. Computation/evaluation: posterior simulations; convergence Rhat [PAGE285], WAIC [PAGE184], posterior predictive checks [PAGE160].
Gray-zone audit: improper priors [PAGE90,129], singularities, boundary modes [PAGE315], nonidentifiability [PAGE90], model checking [PAGE154]. Need mention "the source itself warns correctness is model-dependent" [PAGE151 quote "Checking the model is crucial..."? exact page 151: "Checking the model is crucial to statistical analysis." Good. Use quote.
Need >=400 words. We'll write ~700.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal list. Need maybe 8 equations with assumptions and breakdown. Use \begin{aligned}. Include units. Cite quotes. Need "Verbatim quotes" exact. Use quotation marks. Need exact page markers. We can quote one sentence per operator. 
Equation 1 Bayes. Units. Breakdown: improper prior and nonintegrable likelihood; [PAGE90] quote.
Equation 2 hierarchical exchangeability. Units. Breakdown: finite J de Finetti not hold [PAGE115] quote "The theorem does not hold when J is finite". Good exact? Page 115: "The theorem does not hold when J is finite (see Exercises 5.1, 5.2, and 5.4)." Use.
Equation 3 normal-normal precision update. Units. Breakdown: τ0→∞ or n→∞ approximation [PAGE52]. Quote maybe "as τ0 →∞ with n fixed, or as n →∞ with τ2 0 fixed, we have: p(ω|y) ≈ N(ω|y, σ2/n)" from page 52. Use.
Equation 4 hierarchical normal τ posterior. p(τ|y) ∝ p(τ)V_mu^{1/2} ∏(σ_j^2+τ^2)^-1/2 exp(...) [PAGE127]. Breakdown: uniform log τ improper [PAGE129]. Quote.
Equation 5 posterior predictive log score and WAIC. lppd=Σ log∫p(y_i|ω)p_post(ω)dω. WAIC=-2lppd+2pWAIC2 [PAGE184]. Units nats. Breakdown: singular models WAIC works [PAGE184] quote "WAIC works also with singular models". Good.
Equation 6 posterior predictive check p-value. p_B=Pr(T(y_rep)≥T(y)|y) maybe source page 160. Quote "A model is suspect if a discrepancy is of practical importance and its observed value has a tail-area probability near 0 or 1". Good.
Equation 7 MCMC convergence Rhat. \hat R = sqrt(var_plus/W) [PAGE285]. Quote? Page 288 "Once R is near 1 and n_eff is more than 10 per chain..." exact. Use.
Equation 8 HMC acceptance. 65% [PAGE313]. Quote exact.
Need maybe include "Breakdown regime" table. Good.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: Bayes/Laplace binomial [PAGE40], conjugate priors [PAGE46], normal approximations [PAGE94], de Finetti [PAGE115], EM [PAGE331], MCMC [PAGE291], WAIC [PAGE184], HMC [PAGE313]. Multi-week traps:
- "noninformative" prior trap: flat in one parameterization not another [PAGE64 quote "a density that is flat or uniform in one parameterization will not be in another"]. Delayed failure: improper posterior after many weeks.
- hierarchical variance trap: uniform log τ improper [PAGE129]; finite cutoff not acceptable [PAGE111 quote "setting a faraway finite cutoff to a uniform prior density does not necessarily eliminate the problem."]
- boundary mode trap: summary by posterior mode with τ near zero; zero-avoiding priors [PAGE315].
- model checking trap: Newcomb outliers [PAGE154]; if not checked, inference remains contaminated.
- predictive comparison trap: WAIC partition and cross-validation limitations [PAGE184, 190].
Need mention "retrocausal" because later model checks reveal earlier prior decisions.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under time pressure, modeler regresses to "flat prior + point estimate + no model check". Source warns "Checking the model is crucial" [PAGE151] and noninformative priors provisional [PAGE129?]. Clients interpret intervals as Bayesian [PAGE34]. So crisis habit creates mismatch with client's theory of mind. 
- Counter-trap: anticipate adversarial interpretations: multiple comparisons [PAGE160], prior revision after checks [PAGE166], hierarchical shrinkage [PAGE123]. Use posterior predictive checks, hierarchical models, cross-validation. 
- Clock: compute budget: S=100 draws enough for many summaries [PAGE267], but probabilities near rare events need more; Rhat [PAGE285], n_eff [PAGE288], warm-up discard [PAGE292]. Use clock to decide continue vs reparameterize/HMC. 
Need include "recursive theory of mind" levels: modeler models client, client models interval, algorithm models posterior. Good.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Need physical/biomechanical/weather veto proof. Since source no such variables, state "No physical/biomechanical/weather measurements are supplied; therefore empirical veto cannot be certified from this drive. What can be certified are formal veto conditions." Then list:
- Physical support veto: if y outside support. Source: GLM link functions constrain probability [PAGE75? page 75 logistic]. HMC restricted parameters [PAGE303]. Proof: if model q(y|ω)>0 on y∉S_phys, posterior predictive check will produce replications in impossible region; veto unless measurement error.
- Biomechanical constraints: e.g., monotonicity/positive; use transformations; if constraints ignored, posterior mass in impossible region. Cite [PAGE303] "HMC is designed to work with all-positive target densities." And page 303 restricted parameters. 
- Weather/design veto: if weather affects assignment and outcome but not recorded, ignorability fails. Source [PAGE208] quote "complete definition of ‘the observed data’ should include information on how the observed values arose". [PAGE204] nonignorable and unknown. Proof: p(I|x,y,φ) depends on y; posterior requires model. If missing, inferences sensitive [PAGE222? observational sensitivity]. 
Need "proof" maybe formal: Let W weather, I assignment, Y outcome. If I⊥/Y | X,ω? Ignorability requires p(I|X,Y,W,φ)=p(I|X,φ). If W unobserved and p(I|X,W) not constant, then p(I|X,Y,φ)=∫p(I|X,W)p(W|X,Y,φ)dW depends on Y via posterior p(W|X,Y). Then nonignorable. Veto if no W model. This is a proof. Cite page 208, 204. Good.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios. Need "verifiable RLVR veto scenarios + predictions". Use exact source. 
Scenario 1: Uniform log τ in hierarchical normal. Setup: simulate 8-school-like J with known σ; run MCMC with p(log τ)∝1. Veto condition: posterior mass to τ→0; numeric integral to log τ lower cutoff increases as cutoff extends. Prediction: Rhat high or posterior quantiles drift; finite cutoff changes. Source [PAGE129] quote. 
Scenario 2: Newcomb normal model min statistic. Setup: fit normal; simulate 66 from posterior predictive; compute min. Veto if min observed below all replicates. Prediction: p_min near 0, model fails; source says all 20 replicates larger [PAGE154]. 
Scenario 3: WAIC vs LOO for no-pooling hierarchical 8 schools. Setup: compute WAIC for no-pooling, complete pooling, hierarchical; LOO for complete/hierarchical only. Veto condition: using WAIC to claim no-pooling will predict new schools better; source says complete pooling wins expected out-of-sample for this dataset [PAGE190] and LOO impossible for no-pooling. Prediction: WAIC/DIC favor complete pooling; if one uses hierarchical by belief τ≠0, that is prior/substantive not predictive criterion. Verifiable via Table 7.1? We don't have table but text. Good.
Could include fourth? Need exactly 3. Good.

Need overall word count. Let's estimate: THINK 800, SOURCE 1200, RETRO 500, RECURSIVE 500, CROSS 500, RLVR 500 = 4000. Good.

Need ensure "zero betting lines" — no "odds" string. Avoid "spread", "total", "moneyline". Also avoid "favorite". I should not quote page 25. Good.

Need cite exact [PAGE N] markers. Use spaces exactly [PAGE 16] etc. The source markers have [PAGE 1 of 677]; but prompt says cite exact [PAGE N] markers. Use [PAGE 16] etc. Good.

Need quote exact from source. Need ensure quotes match provided text. Let's use exact quotes:
- [PAGE 16] "p(ω, y) = p(ω)p(y|ω)." In text: "p(ω, y) = p(ω)p(y|ω)." yes.
- [PAGE 168] exact: "log ppost(˜yi) = log Epost(p(˜yi|ω)) = log \int p(˜yi|ω)ppost(ω)dω." Text: "log ppost(˜yi) = log Epost(p(˜yi|ω)) = log # p(˜yi|ω)ppost(ω)dω." We can quote.
- [PAGE 115] exact: "p(ω|φ) = J ∏ j=1 p(ωj|φ)." and "The theorem does not hold when J is ﬁnite". Good.
- [PAGE 129] exact: "A uniform prior distribution on log τ would seem natural—working with the logarithm of a parameter that must be positive—but it results in an improper posterior distribution." Good.
- [PAGE 90] exact: "An improper posterior distribution cannot occur except with an improper prior distribution." Good.
- [PAGE 111] exact: "When the likelihood is not integrable, setting a faraway ﬁnite cutoﬀto a uniform prior density does not necessarily eliminate the problem." Note source has "cutoﬀto" weird. We can quote with [sic]? Use exact? "setting a faraway ﬁnite cutoﬀto a uniform prior density does not necessarily eliminate the problem." Maybe omit if awkward.
- [PAGE 151] exact: "Checking the model is crucial to statistical analysis." Good.
- [PAGE 160] exact: "A model is suspect if a discrepancy is of practical importance and its observed value has a tail-area probability near 0 or 1". Good.
- [PAGE 184] exact: "WAIC = −2 lppd + 2pWAIC 2". Good.
- [PAGE 288] exact: "Once R is near 1 and ˆneﬀis more than 10 per chain for all scalar estimands of interest, just collect the mn simulations". Need not exact. Use [PAGE 288].
- [PAGE 313] exact: "HMC is optimally eﬃcient when its acceptance rate is approximately 65%". Good.
- [PAGE 34] exact: "clients will interpret interval estimates provided by statisticians as Bayesian intervals". Good.
- [PAGE 208] exact: "The essential ﬂaw in the argument is that a complete deﬁnition of ‘the observed data’ should include information on how the observed values arose". Good.
- [PAGE 303] exact: "HMC is designed to work with all-positive target densities." Good.
- [PAGE 190] exact: "For this particular dataset, complete pooling wins the expected out-of-sample prediction competition." Good.
- [PAGE 154] exact: "The normal model clearly does not capture the variation that Newcomb observed." Good.

Need mention "Bayes factor" but avoid odds. Maybe not necessary. If mention Bayes factor, avoid "odds". Good.

Need formal equations:
Use LaTeX. For units, define [ω] etc. For hierarchical normal precision:
\mu_n = (\tau_0^{-2}\mu_0 + n\sigma^{-2}\bar y)/(\tau_0^{-2}+n\sigma^{-2}); \tau_n^{-2}=\tau_0^{-2}+n\sigma^{-2}. [PAGE52] actually equation (2.12). Good. Units: μ, y in units of outcome; τ, σ same; precisions inverse squared units.
For τ posterior formula maybe:
p(\tau|y) ∝ p(\tau) V_\mu^{1/2}\prod_{j=1}^J(\sigma_j^2+\tau^2)^{-1/2}\exp\{-\frac{(y_{\cdot j}-\hat\mu)^2}{2(\sigma_j^2+\tau^2)}\}, where V_\mu^{-1} = Σ(σ_j^2+τ^2)^{-1}. [PAGE127]. Good.
For posterior predictive check:
p_B = Pr(T(y^{rep}) ≥ T(y) | y) = ∫∫ 1{T(y^{rep})≥T(y)} p(y^{rep}|ω)p(ω|y) dy^{rep}dω. Use. Units: probability.
For Rhat:
\hat R = sqrt( \widehat{var}^+(\psi|y)/W ). [PAGE285]. Good.
For WAIC:
lppd = Σ log( (1/S) Σ_s p(y_i|ω^s) ); pWAIC2=Σ Var_s log p(y_i|ω^s); WAIC=-2lppd+2pWAIC2. [PAGE184]. Good. Use natural log -> nats. 
For HMC acceptance: target ~0.65. Good.

Need "Breakdown regimes" for each operator:
1. Improper prior: [PAGE90]. 
2. de Finetti finite J: [PAGE115]. 
3. normal approximation: τ0→∞ or n→∞ [PAGE52]. 
4. τ prior: uniform log τ improper [PAGE129]; finite J=1 or 2 improper with uniform τ? Page 129 says with J=1 or 2 uniform prior τ improper posterior. Good.
5. WAIC: partition into n pieces; time series/spatial/network data hard [PAGE184]. Good.
6. PPC p-values: multiple comparisons; not Type I; p near 0/1 [PAGE160]. Good.
7. Rhat: not hypothesis test; if important areas not reached, can be falsely convergent [PAGE288]. Good.
8. HMC: zero density; restricted parameters; tuning during warm-up only [PAGE313]. Good.

Need "gray-zone audit" in THINK. Include "I cannot mention betting lines; the source's sports example is bypassed." Maybe not necessary. But to assure invariant, maybe say "No betting-line quantities are used anywhere in this audit." Good. But "betting" word? It's not a line. It's okay? The invariant says zero betting lines; mentioning "betting lines" could be considered? Better avoid word "betting" entirely. Say "No line-market quantities are used." But "line" maybe. Avoid. Just don't mention. Good.

Need "Source operators and equations" maybe include "Bayes rule" quote. Good.

Potential issue: "zero toy equations" - all equations formal. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." We must include those words. We can say no biomechanical/weather data in source. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly. Provide 3. Good.

Need final only answer. Use XML tags. No markdown? XML is fine. Could include paragraphs. Need no extra text outside tags? Probably okay. We can include all sections. Need ensure exact opening/closing tags. Good.

Let's compose carefully. Keep no "odds". Check text for "odds" substring? Avoid "periods"? no. "goods"? no. "methods"? contains "ods"? Actually "methods" has "ods"? m e t h o d s = "ods" not "odds". Fine. Avoid "odds" exact. Avoid "spread" exact. Avoid "totals" exact? Use "total" maybe? The invariant says totals (betting totals). Avoid word "total" to be safe. Use "aggregate". Avoid "moneyline". Avoid "favorite". Good.

Need not mention "football" or "point". Use "sports example" not needed.

Let's write.

Need ensure word count >1000. We'll produce long. Use quotes. Need exact page markers. Good.

Potential issue with LaTeX in XML: use \( \) or $$? Fine. Need escape &? Use &amp;? In XML, ampersand must be escaped. We may use LaTeX with & in aligned. To avoid XML parsing issues, avoid raw &? The answer is not strictly parsed? But exact XML sections. Use \begin{aligned} with & could be okay? In XML, & starts entity. Better avoid ampersands in LaTeX. Use separate equations instead of aligned. Or use \quad. Avoid & entirely. Use \[ ... \]. But XML doesn't mind? To be safe, no raw ampersand. Use \begin{array}{l}? No &? Could avoid align. Use single equations. For multi-line use \begin{gathered}. No & needed. Good. Avoid ampersand. Use \prod etc. Good.

Need not use `<` or `>` in text? XML tags use < >. Inside text, if use ≥, okay. Use \le, \ge. Avoid raw < in text. In math use \le. Good. Ampersand avoid.

Need exact quote with "p(ω, y) = p(ω)p(y|ω)." No ampersand. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The drive is Gelman et al., Bayesian Data Analysis, 3rd ed., and the task is to extract a coherent inference operator algebra rather than a domain-specific forecast. The central chain is: build a joint probability model, condition on observed data, then evaluate fit and implications. The source states the joint factorization explicitly: “p(ω, y) = p(ω)p(y|ω).” [PAGE 16]. From that, posterior inference is the normalized conditional density \(p(\omega|y)=p(\omega)p(y|\omega)/p(y)\), with \(p(y)=\int p(\omega)p(y|\omega)d\omega\). The prior density has units inverse to \(\omega\); the likelihood has units inverse to \(y\); the posterior density again has units inverse to \(\omega\). This unit bookkeeping matters because log predictive densities are defined only up to a data-fixed additive offset unless \(y\) is made dimensionless or measured in a fixed unit.

Multi-hop derivation: nuisance parameters are removed by marginalization, \(p(\omega_1|y)=\int p(\omega_1,\omega_2|y)d\omega_2\) [PAGE 73]. Hierarchical models then replace a single prior with a population distribution: “p(ω|φ) = ∏ p(ωj|φ)” [PAGE 115], followed by a hyperprior and marginalization over \(\phi\). Exchangeability is the modeling justification, but the source warns that de Finetti’s representation is asymptotic in \(J\): “The theorem does not hold when J is ﬁnite” [PAGE 115]. Therefore finite-group hierarchical pooling is a model choice, not a theorem. The normal-normal precision update gives the next hop: posterior precision is prior precision plus data precision, and the posterior mean is a precision-weighted average [PAGE 52]. In hierarchical normal models, the group-level variance \(\tau\) enters the marginal posterior through a product of normal factors and a \(V_\mu^{1/2}\) term [PAGE 127]. The predictive layer is \(p(\tilde y|y)=\int p(\tilde y|\omega)p(\omega|y)d\omega\), and the log score is “log ppost(˜yi) = log Epost(p(˜yi|ω)) = log ∫ p(˜yi|ω)ppost(ω)dω” [PAGE 168]. Finally, model evaluation uses posterior predictive checks and information criteria: WAIC is “WAIC = −2 lppd + 2pWAIC 2” [PAGE 184], while predictive checks flag tail-area probabilities near 0 or 1 [PAGE 160].

Gray-zone audit. First, the source repeatedly distinguishes proper from improper posteriors. It states: “An improper posterior distribution cannot occur except with an improper prior distribution.” [PAGE 90]. This is not a technicality; it invalidates simulation summaries that appear finite after truncation. For hierarchical variance parameters the warning is sharp: “A uniform prior distribution on log τ would seem natural—working with the logarithm of a parameter that must be positive—but it results in an improper posterior distribution.” [PAGE 129]. A finite cutoff does not rescue the model because posterior mass can pile up near the cutoff in a way that depends on the cutoff. Second, singularities include unbounded likelihoods, boundary modes, and nonidentifiability. The source notes that singular models can have non-positive-definite Fisher information and that WAIC is intended to work there [PAGE 184], but that does not make every singular model identified. Third, model checking is not optional: “Checking the model is crucial to statistical analysis.” [PAGE 151]. The Newcomb speed-of-light example shows a normal model failing on the minimum observation: “The normal model clearly does not capture the variation that Newcomb observed.” [PAGE 154]. Fourth, convergence diagnostics are not hypothesis tests; \(\hat R\) near 1 and effective sample size thresholds are practical checks, not proof that all posterior mass has been reached. The source warns that a chain can appear stationary while missing important regions [PAGE 288]. Fifth, predictive criteria depend on data partition and prediction target. WAIC requires a pointwise partition, which is awkward for time-series or structured data [PAGE 184]. Thus the operator algebra is sound only when its support, normalization, exchangeability, computation, and predictive target assumptions are jointly audited. No line-market quantities are used anywhere in this audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1. Bayes conditioning operator. Source quote: “p(ω, y) = p(ω)p(y|ω).” [PAGE 16]. Formal form:
\[
p(\omega|y)=\frac{p(\omega)p(y|\omega)}{\int p(\omega')p(y|\omega')\,d\omega'}.
\]
Units: if \([\omega]\) is the parameter unit and \([y]\) is the observation unit, then \(p(\omega)\) has \([\omega]^{-1}\), \(p(y|\omega)\) has \([y]^{-1}\), and \(p(\omega|y)\) has \([\omega]^{-1}\). Assumptions: a joint probability model exists and the denominator is finite and positive. Breakdown regime: improper prior plus nonintegrable likelihood can yield an improper posterior; the source states, “An improper posterior distribution cannot occur except with an improper prior distribution.” [PAGE 90].

2. Marginalization and nuisance-parameter operator. Source anchor: nuisance parameters are averaged over [PAGE 73]. Formal form:
\[
p(\omega_1|y)=\int p(\omega_1,\omega_2|y)\,d\omega_2.
\]
Units: the integration measure carries \([\omega_2]\), so the result carries \([\omega_1]^{-1}\). Assumptions: the joint posterior is integrable over \(\omega_2\). Breakdown regime: if the marginal integral diverges, no marginal posterior exists; this occurs in hierarchical variance models with improper hyperpriors [PAGE 129].

3. Hierarchical exchangeability operator. Source quote: “p(ω|φ) = ∏ p(ωj|φ)” [PAGE 115]. Formal form:
\[
p(\omega)=\int \left(\prod_{j=1}^{J}p(\omega_j|\phi)\right)p(\phi)\,d\phi.
\]
Units: each \(\omega_j\) carries its own parameter unit; \(\phi\) carries hyperparameter units and the product is normalized over \(\omega\). Assumption: exchangeability of the \(J\) units and a well-behaved population distribution. Breakdown regime: finite-\(J\) non-mixture exchangeable distributions exist; the source states, “The theorem does not hold when J is ﬁnite” [PAGE 115]. Also, hyperprior impropriety can destroy the posterior even when the conditional hierarchy is conjugate.

4. Precision-weighted normal update. Source equation: \(\mu_n = (\tau_0^{-2}\mu_0 + n\sigma^{-2}\bar y)/(\tau_0^{-2}+n\sigma^{-2})\) and \(\tau_n^{-2}=\tau_0^{-2}+n\sigma^{-2}\) [PAGE 52]. Formal form:
\[
\mu_n=\frac{\tau_0^{-2}\mu_0+n\sigma^{-2}\bar y}{\tau_0^{-2}+n\sigma^{-2}},\qquad
\tau_n^{-2}=\tau_0^{-2}+n\sigma^{-2}.
\]
Units: \(\mu_0,\bar y,\mu_n\) in outcome units; \(\tau_0,\sigma,\tau_n\) in the same outcome units; precisions in inverse squared outcome units. Assumption: normal likelihood with known observation variance and normal prior. Breakdown regime: the approximation \(p(\omega|y)\approx N(\omega|\bar y,\sigma^2/n)\) holds as \(\tau_0\to\infty\) with \(n\) fixed, or as \(n\to\infty\) with \(\tau_0^2\) fixed [PAGE 52]; it fails under strong prior-likelihood conflict or non-normal tails.

5. Hierarchical variance posterior operator. Source form for \(p(\tau|y)\) [PAGE 127]:
\[
p(\tau|y)\propto p(\tau)V_\mu^{1/2}\prod_{j=1}^{J}(\sigma_j^2+\tau^2)^{-1/2}
\exp\left\{-\frac{(y_{\cdot j}-\hat\mu)^2}{2(\sigma_j^2+\tau^2)}\right\},
\quad
V_\mu^{-1}=\sum_{j=1}^{J}\frac{1}{\sigma_j^2+\tau^2}.
\]
Units: \(\tau\), \(\sigma_j\), and group means \(y_{\cdot j}\) share outcome units; \(V_\mu\) has squared outcome units. Assumption: normal population distribution for group means with known within-group variances. Breakdown regime: \(p(\log\tau)\propto 1\) yields an improper posterior: “A uniform prior distribution on log τ would seem natural…but it results in an improper posterior distribution.” [PAGE 129]. With very small \(J\), a uniform prior on \(\tau\) itself can also be too weak or improper [PAGE 129].

6. Posterior predictive log score and WAIC. Source quote: “WAIC = −2 lppd + 2pWAIC 2” [PAGE 184]. Formal form:
\[
\mathrm{lppd}=\sum_{i=1}^{n}\log\left(\frac{1}{S}\sum_{s=1}^{S}p(y_i|\omega^s)\right),
\quad
p_{\mathrm{WAIC2}}=\sum_{i=1}^{n}\operatorname{Var}_{s}\left(\log p(y_i|\omega^s)\right),
\]
\[
\mathrm{WAIC}=-2\,\mathrm{lppd}+2p_{\mathrm{WAIC2}}.
\]
Units: with natural logarithms, lppd and WAIC are in nats; \(p_{\mathrm{WAIC2}}\) is a dimensionless effective-parameter count. Assumption: a pointwise partition of the data and posterior draws from the fitted model. Breakdown regime: partition-dependent for time-series, spatial, and network data [PAGE 184]; WAIC is designed for singular models but does not by itself validate a model.

7. Posterior predictive check operator. Source quote: “A model is suspect if a discrepancy is of practical importance and its observed value has a tail-area probability near 0 or 1” [PAGE 160]. Formal form:
\[
p_B=\Pr(T(y^{\mathrm{rep}})\ge T(y)\mid y)
=\int\int \mathbf{1}\{T(y^{\mathrm{rep}})\ge T(y)\}p(y^{\mathrm{rep}}|\omega)p(\omega|y)\,dy^{\mathrm{rep}}d\omega.
\]
Units: probability, dimensionless. Assumption: \(y^{\mathrm{rep}}\) is generated from the posterior predictive distribution under the same model and conditioning structure. Breakdown regime: multiple test quantities require interpretation, not naive Type I control [PAGE 160]; extreme \(p_B\) indicates model misfit but not “probability the model is true.”

8. MCMC convergence operator. Source \(\hat R\) definition [PAGE 285]:
\[
\hat R=\sqrt{\frac{\widehat{\operatorname{var}}^+(\psi|y)}{W}},
\]
where \(W\) is within-sequence variance and \(\widehat{\operatorname{var}}^+\) is the pooled variance estimate. Units: dimensionless. Assumption: multiple overdispersed chains and scalar estimands. Breakdown regime: \(\hat R\) near 1 is not proof; the source warns that important regions may remain unreached [PAGE 288]. The practical rule is \(\hat R\) near 1 and effective sample size above about 10 per chain for all scalar estimands of interest.

9. HMC tuning operator. Source quote: “HMC is optimally eﬃcient when its acceptance rate is approximately 65%” [PAGE 313]. Formal control target:
\[
a_{\mathrm{HMC}}\approx 0.65,\qquad \epsilon L\approx \text{radius of target}.
\]
Units: acceptance probability dimensionless; \(\epsilon\) is step size in parameter units; \(L\) is a dimensionless leapfrog count. Assumption: differentiability and positive target density. Breakdown regime: zero posterior density stops the trajectory; bounded parameters require transformation or bouncing [PAGE 303]. Adaptation must occur in warm-up only, not in the saved fixed phase.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from Bayes and Laplace’s binomial conditioning [PAGE 40], through conjugate priors and exponential-family sufficient statistics [PAGE 46], normal approximations and large-sample theory [PAGE 94], hierarchical exchangeability and de Finetti [PAGE 115], EM and modal approximations [PAGE 331], Gibbs and Metropolis–Hastings [PAGE 291], WAIC and predictive criteria [PAGE 184], and Hamiltonian Monte Carlo [PAGE 313]. Retrocausally, later diagnostics tell us which earlier modeling shortcuts were traps. A uniform “noninformative” prior on a log variance looks innocent at model-writing time, but later posterior simulation reveals infinite mass near zero [PAGE 129]. A finite cutoff chosen to avoid that singularity may still fail because the posterior mass can concentrate near the cutoff rather than become proper in a stable way [PAGE 111]. A prior chosen for mode-based summaries can create boundary estimates at \(\tau=0\); the source therefore discusses zero-avoiding priors for modal summaries [PAGE 315]. A normal measurement model can appear acceptable in the center but fail on extremes; Newcomb’s minimum observation is the later veto [PAGE 154]. A predictive criterion such as WAIC can rank models differently from leave-one-out cross-validation when the prediction target changes, especially in hierarchical models where no-pooling cannot even be leave-one-school-out cross-validated [PAGE 190]. Multi-week traps are therefore not single errors but delayed model pathologies: improper hyperpriors, boundary modes, silent nonidentification, predictive target mismatch, and false convergence. The source’s warning that “Checking the model is crucial to statistical analysis” [PAGE 151] is the retrocausal audit principle: each later check can invalidate an earlier convenience.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is the tendency, under deadline or compute pressure, to regress to a flat prior, a point estimate, and no model check. The source blocks that habit at two levels. First, clients already interpret intervals probabilistically: “clients will interpret interval estimates provided by statisticians as Bayesian intervals” [PAGE 34]. A modeler who supplies frequentist-looking summaries while using Bayesian machinery creates a theory-of-mind mismatch. Second, the source makes model checking central: “Checking the model is crucial to statistical analysis.” [PAGE 151]. Counter-trap reasoning anticipates how the model could be gamed: multiple comparisons can manufacture apparent findings [PAGE 160]; prior distributions can be silently revised after seeing fit, so the revision must be documented [PAGE 166]; and predictive comparisons can be optimized by choosing a partition or prediction target after seeing results. The counter-trap is hierarchical modeling, posterior predictive checks, cross-validation, and transparent sensitivity analysis. Clock reasoning is the compute-time layer: 100 draws may be enough for broad posterior summaries [PAGE 267], but rare-event probabilities require far more; MCMC requires warm-up discarding and convergence monitoring [PAGE 292]; \(\hat R\) and effective sample size determine whether the clock has run long enough [PAGE 288]. The recursive loop is: modeler models the client’s interpretation, client models the interval as a probability statement, algorithm models the posterior, and the convergence clock decides whether any of those statements are computationally licensed.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
No biomechanical or weather measurements are supplied in this drive, so an empirical physical veto cannot be certified from the source text alone. What can be certified are formal veto conditions that any physical, biomechanical, or weather layer must satisfy. First, support veto: if the physical support is \(S_{\mathrm{phys}}\) and the likelihood assigns positive density outside \(S_{\mathrm{phys}}\), the model is vetoed unless a measurement-error layer maps the latent physical quantity into the observed space. The source’s generalized linear model discussion uses link functions to keep probabilities inside \([0,1]\) and dose–response relations bounded [PAGE 75]. HMC’s treatment of restricted parameters reinforces the same rule: “HMC is designed to work with all-positive target densities.” [PAGE 303]. Second, biomechanical veto: monotonicity, positivity, and range constraints are hard prior support restrictions, not merely regularizers. If a posterior summary places mass in an impossible biomechanical region, the posterior predictive check should reveal impossible replications; the source’s tail-area criterion says a model is suspect when an important discrepancy has tail probability near 0 or 1 [PAGE 160]. Third, weather/design veto: if weather affects both treatment assignment and outcome and is not recorded, ignorability fails. The source states, “The essential ﬂaw in the argument is that a complete deﬁnition of ‘the observed data’ should include information on how the observed values arose” [PAGE 208]. Formally, let \(W\) be weather, \(I\) assignment, \(Y\) outcome, and \(X\) recorded covariates. Ignorability requires \(p(I\mid X,Y,W,\phi)=p(I\mid X,\phi)\). If \(W\) is unobserved and \(p(I\mid X,W)\) varies with \(W\), then the observed-data assignment probability becomes \(\int p(I\mid X,W)p(W\mid X,Y,\phi)dW\), which depends on \(Y\) through the posterior of \(W\). The design is then nonignorable and unknown, the hardest case in the source’s taxonomy [PAGE 204]. Veto proof: if the analysis omits \(W\) and does not model this dependence, the posterior for causal or predictive estimands is not licensed. If \(W\) is recorded, the analysis must condition on it; the source’s ignorable-design discussion requires conditioning on fully observed covariates [PAGE 204].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: hierarchical variance with a uniform prior on \(\log\tau\). Setup: simulate or use a normal hierarchical model with known within-group variances, fit with \(p(\log\tau)\propto 1\), and extend the lower numerical cutoff for \(\log\tau\). Veto condition: the unnormalized posterior integral fails to stabilize and posterior mass drifts toward \(\tau\to 0\). Source warrant: “A uniform prior distribution on log τ would seem natural…but it results in an improper posterior distribution.” [PAGE 129]. Prediction: posterior quantiles of \(\log\tau\) move downward as the cutoff is extended, \(\hat R\) may remain high or convergence may be cutoff-dependent, and finite cutoffs change summaries. Veto the fit; replace with a proper weakly informative prior or a uniform prior on \(\tau\) where appropriate.

Scenario 2: Newcomb speed-of-light normal model. Setup: fit the normal model with noninformative prior on \((\mu,\log\sigma)\), draw 66 replicated observations from \(p(\tilde y|y)\), and compute \(T(y)=\min(y)\). Veto condition: the observed minimum lies outside the posterior predictive distribution of minima. Source warrant: “The normal model clearly does not capture the variation that Newcomb observed.” [PAGE 154]. Prediction: the posterior predictive \(p\)-value for the minimum is near 0, and almost all simulated minima are larger than the observed extreme value. Veto the normal model for that aspect; expand to a long-tailed or contaminated model.

Scenario 3: predictive comparison in the eight-schools hierarchy. Setup: compare no-pooling, complete pooling, and hierarchical models with WAIC and, where possible, leave-one-out cross-validation. Veto condition: claiming no-pooling predicts new schools best because WAIC ranks it well, while ignoring that leave-one-school-out prediction is impossible for the no-pooling model and that the prediction target in WAIC differs. Source warrant: “For this particular dataset, complete pooling wins the expected out-of-sample prediction competition.” [PAGE 190]. Prediction: WAIC and DIC favor complete pooling for this dataset, but substantive preference for the hierarchical model persists because \(\tau=0\) is not believed; the correct conclusion is target-dependent, not a universal model ranking. Veto the unqualified claim that the predictive criterion selects the scientifically preferred model.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "Projection Predictive Inference for Generalized Linear and Additive Multilevel Models.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 23
model: deepseek/deepseek-v4.1-flash-1017
words: 7264
---

<NATIVE_REASONING>
We need answer user's request. They gave a source PDF and instructions for GSE+GSI Frontier Reasoning Foundry. Need produce response with exact XML sections, >=1000 words overall, THINK_TRACE >=400 words. Need no betting lines/odds. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need deep multi-hop derivation & gray-zone audit. Need historical/scientific lineage and multi-week traps. Need crisis habit regression vs counter-trap vs clock. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. Need RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need likely apply to sports? The source is statistics paper, not sports-specific. User says DRIVE SOURCE and instructions. We need synthesize into a "GSE + GSI Frontier Reasoning Foundry" output. We need avoid betting lines. Need maybe frame as projection predictive inference for sports modeling? The paper is about projection predictive inference for GLMMs/GAMMs. We can discuss applying to sports research without betting. Need include page citations and quotes. Must state assumptions, exact singularity/breakdown regimes.

Need produce sections exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need ensure no betting lines. No spreads/totals/moneylines/odds. Can mention "no betting lines" maybe not. Avoid odds entirely. Use "probability", "ELPD", "KL divergence". Units: KL divergence in nats, ELPD in nats? Actually ELPD is expected log predictive density, log score in nats. Information units: nats. SI units for physical? Source has none. We can state variables dimensionless or generic. If discussing physical biomechanical/weather, need maybe no actual numeric physical. CROSS_LAYER_VETO_ADJUDICATION requires "Physical/biomechanical/weather veto proof." We can construct proof using source operators and external generic assumptions. Need maybe "veto proof" means show when cross-layer variables invalidate projection. Need exact singularity/breakdown regimes: non-identifiability when group parameters u integrated? The paper says projection not identifiable for GLMMs without restrictions [PAGE 6]. Breakdown: dense Z matrix in GAMMs makes likelihood intractable [PAGE 8]. Laplace approximation fails if integrals not closed form etc. Need formal equations from paper: KL, projection equation, marginal likelihood, Laplace discrepancy. Cite pages.

Need maybe include equations:
KL(p(ỹ|D)||q(ỹ)) = -E_λ* [E_{ỹ|λ*}(log E_λ(p(ỹ|λ)))] + C [PAGE 4 Eq 1].
Projection for exponential family: λ⊥ = argmax_λ Σ_i [μ_i* ξ_i(λ) - B(ξ_i(λ))] [PAGE 5 Eq 2].
GLMM linear predictor η = Xβ + Zu, u~p(u|θ) [PAGE 6].
Marginal likelihood L(y|β,u,φ)=p(y|β,φ,θ)=∫ p(y|β,φ,u)p(u|θ)du [PAGE 7 Eq 3].
Laplace approximation discrepancy: d(u|y,θ,β)=||W^{1/2}(μ)[y-μ(u,θ,β)]||^2 + ||u||^2 [PAGE 8].
Forward search selects term that most decreases KL [PAGE 2, PAGE 5]. LOO CV, Pareto-k [PAGE 5].
Optimal projection threshold selects first 6 terms etc [PAGE 13]. BikeSharing 8/23 [PAGE 14], GAMM 5/9 [PAGE 15].

Need include "verbatim quotes" exact. Need cite exact [PAGE N] markers. Use quotes with quotation marks. Need ensure quotes exactly from source. Let's collect quotes:
PAGE 1 abstract: "Projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making." Also "Previously, projection predictive inference has been demonstrated only for generalized linear models (GLMs) and Gaussian processes (GPs) where it showed superior performance to competing variable selection procedures." Maybe.
PAGE 2: "The uncertainties in the reference model related to the excluded model parts are also projected and thus partially retained in the projection." "At each step, the method selects the variable that most decreases the Kullback-Leibler (KL) divergence from the reference model’s predictive distribution to that of the projection model, a procedure known as forward search."
PAGE 2: "the existing projection solutions do not directly translate to GLMMs or GAMMs because, without further restrictions, the projection is not identiﬁable for these models"
PAGE 4 Eq1.
PAGE 5: "projecting a draw λ∗ from the reference model’s posterior to the projection space λ⊥ in Equation (1) coincides exactly with maximizing its likelihood under the projection model." Also "we run iteratively reweighted least squares (IRLS)".
PAGE 6: "Without further constraints, even if its observation model belongs to the exponential family, the projection (1) is not identiﬁable for GLMMs" and "This means that, given the mean prediction of the reference model μ∗i, there is no unique solution for the parameters in the projection model ﬁtted to μ∗i."
PAGE 7 Eq3: "To make the model identiﬁable and solve the projection, we propose to further restrict it by integrating out the group parameters u." "This integral cannot be evaluated in closed form."
PAGE 7-8 Laplace: "As a general purpose solution, we consider a ﬁrst-order Laplace approximation to the integral" [PAGE 7]. "This optimization problem can be solved eﬃciently using Penalized Iteratively Re-weighted Least Squares (PIRLS), as implemented in the popular lme4" [PAGE 8].
PAGE 8: "The identiﬁability issue that exists in GLMMs is further aggravated by having a dense Z matrix in GAMMs, which makes the likelihood in Equation (3) intractable to compute even in conjugate Gaussian models with a single smooth term." Great.
PAGE 8 computational cost list.
PAGE 9 forward search sensible models: "we only consider a model with a certain group parameter if its population parameter has already entered the projection. Likewise, we only consider an interaction between two variables when both of them have already entered the projection separately."
PAGE 10 simulation results: "The results show that the projection is able to discard on average 50% of the terms without losing performance." "Including correlated terms into the projection would not improve its predictive performance, which results in redundant components that can be discarded."
PAGE 11: "Even though it is not projpred’s goal to select all truly non-zero terms (but only all empirically relevant ones), it is still useful to see how projection predictive selection coincides with the known truth." 
PAGE 12: "The number of grouping factors K is the most signiﬁcant factor." "High correlation ρ induces more false positives."
PAGE 13: "The optimal projection threshold used by projpred (Piironen et al., 2020b) suggests including the ﬁrst 6 terms" and "The complete sequence of models considered in the solution path is: ..." 
PAGE 14: "The suggested optimal projection by projpred’s heuristic method (Piironen et al., 2020a) is count ∼temp + humidity + windspeed + (humidity + temp | month) + (1 | weather) + (1 | season), including only 8 terms out of 23."
PAGE 15: "The suggested optimal projection by projpred’s heuristic method (Piironen et al., 2020a) is count ∼s(temp) + s(humidity) + (1 | season) + s(windspeed) + (1 | month), including only 5 out of 9 terms."
PAGE 17: "The results show that the optimal projection is able to discard on average 60% of the terms while achieving the reference predictive performance."
PAGE 17: "For non-Gaussian observation models there is an added challenge as the projection is computing a linear Gaussian model as an approximation to the non-Gaussian observation model. This increases the computational budget of the method and sometimes results in unstable projections, even though still resulting in good performance overall."
PAGE 19: "Even in the extreme unrealistic case of 0.9 correlation, the method still identiﬁes around half of the truly relevant eﬀects."

Need mention "SI/information/probability units": KL divergence and ELPD in nats; probabilities dimensionless [0,1]; β, u on link scale; φ dispersion; W weights maybe inverse variance. State no physical SI because source is statistical. For cross-layer physical/biomechanical/weather, use "if mapped to sports, physical variables need units e.g. m/s, °C, kg·m/s²" but no source. Need maybe "weather veto proof" could use wind speed and temperature variables from BikeSharing; source variables include windspeed, temp, humidity [PAGE 13]. We can state veto if weather layer changes group-level intercept or smooth term outside training support; exact breakdown when extrapolation and Laplace approximation fails. Need formal proof: cross-layer veto condition: if intervention changes x outside convex hull or changes grouping factor level unseen, projection q⊥ has no posterior support and marginal likelihood integral undefined/invalid. Need cite identifiability and dense Z. Could formulate:
Veto(x_new)=1 if x_new∉supp(p(x)) or g_new∉{1..L} or ΔKL_forward > τ_ELPD. Need exact singularity: if ZᵀWZ singular (rank deficiency) then PIRLS diverges; if p(u|θ) not conjugate and dim(u) large, integral intractable; if smooth basis penalty omitted, identifiability fails. Need use formal equations.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need trace projection predictive inference lineage: decision theory, KL projection Goutis 1998, Piironen & Vehtari 2016/2017, projpred 2020, GLMM Laplace approximation, lme4 PIRLS, GAMM Wood. Multi-week traps: overfitting forward search, correlation false positives, group factor count, unstable non-Gaussian projections, Pareto-k LOO. Need mention "multi-week traps" maybe as a training/evaluation protocol: repeated weekly model selection can chase noise; solution path drift; data leakage; changing grouping factor composition; weather seasonality nonstationarity. Need no betting.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This is unusual. We need interpret: perhaps as agent reasoning about human/team behavior under crisis, habits regress, counter-trap, clock. Need tie to statistics: recursive theory of mind = modeling decision-makers who model others; crisis habit regression = under stress, agents revert to prior habits; counter-trap = opponent anticipates and sets trap; clock = time pressure. Need say use multilevel model with group parameters for team/player, smooth terms for time/clock, interaction terms. Need avoid betting. Could discuss sports decision-making but no betting lines. Need formal: latent state s_t, action a_t, belief b_t; recursive ToM depth k. Crisis habit regression: p(a_t|stress) shifts toward historical base rate. Counter-trap: opponent's policy depends on predicted habit; need include interaction term. Clock: time remaining as smooth f_clock; but avoid extrapolation outside observed. Need cite source for smooth terms and group terms [PAGE 6, 8, 15]. Need mention "do not treat clock as linear if nonstationary; use spline basis with penalty; if penalty omitted, identifiability breakdown." Need "clock" maybe shot clock/game clock; no betting. Need state exact singular regime: if clock smooth basis has collinearity with group intercept, ZᵀWZ singular. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need define layers: physical (speed, acceleration, force), biomechanical (load, fatigue, injury), weather (temp, humidity, wind). Use source variables temp, humidity, windspeed [PAGE 13]. Need proof that a projection cannot veto unless it includes these terms or group effects; otherwise omitted-variable bias. Need cite "uncertainties in reference model related to excluded model parts are also projected and thus partially retained" [PAGE 2] but not full. Need formal: If true DGP has term zγ with γ≠0 and z correlated with included x, then projection coefficient β⊥ = β + (XᵀWX)^{-1}XᵀWZγ, bias. If XᵀWX singular, breakdown. Cross-layer veto: If weather variable outside training range or biomechanical load exceeds threshold, set veto=1 regardless of model ELPD. Need perhaps "physical/biomechanical/weather veto proof" as a set of necessary conditions:
1. Support condition: x_new ∈ convex hull of training X.
2. Identifiability condition: rank([X Z]) = p+q and penalty positive definite on spline null space.
3. Conditional independence / exchangeability: group levels exchangeable; if not, group effect invalid.
4. Temporal stationarity: p(y|x,t) stable; if clock/season shift, smooth term invalid.
If any fails, veto.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create 3 scenarios with verifiable prediction/veto. Could be:
1. Non-identifiable GLMM projection when group parameter entered before population parameter: forward search constrained; if violate, PIRLS fails or rank deficiency. Prediction: rank(ZᵀWZ) < q or condition number > 1e8; ELPD path non-monotone; veto.
2. Non-Gaussian unstable projection: Bernoulli with logit; projection approximated by linear Gaussian; if posterior draw yields extreme η (|η|>10) and IRLS fails to converge in 100 iterations; prediction: unstable ELPD and high variance; veto.
3. Weather extrapolation/cross-layer: new windspeed/temp outside training support (e.g. > max observed or < min); prediction: smooth term extrapolates and ELPD degrades; veto. Need verifiable: compute convex hull, Mahalanobis distance > threshold, or Pareto-k > 0.7. Prediction: LOO ELPD lower by >2 SE or Pareto-k > 0.7. Need exact predictions.

Need overall >=1000 words. We can write maybe 2000-3000 words. Need be careful with XML valid? Use sections as tags. Inside can use LaTeX. Need not include markdown? Could use plain text with LaTeX. Need ensure exact tags. The user asked "You are..." so final answer should be the response. No extra preface maybe.

Need maybe mention "DRIVE SOURCE" not sports? The paper is not sports. But GSE/GSI maybe "sports research papers" directory. We can frame "sports-research projection pipeline" but not betting. Need avoid "betting lines" completely. They said ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. We can mention "markets" maybe not. Better avoid any words "odds", "spread", "total", "moneyline". Avoid "betting". Can mention "decision support" but not betting. Even "probability" okay. Use "probabilistic forecast" not odds.

Need include "PAGE N" markers for every quote/equation. Need exact. Use [PAGE 4] etc. Need cite pages even for equations. Need maybe quote "Equation (1)" etc.

Need structure:
<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Start with problem: sports research with multilevel data. Derive projection from KL to likelihood for exponential family. Explain identifiability issue. Explain Laplace approximation. Explain forward search and LOO. Audit gray zones: correlated terms, group parameters, non-Gaussian instability, extrapolation. Multi-hop: reference posterior -> predictive distribution -> constrained projection -> term ordering -> LOO -> model choice -> cross-layer veto. Mention exact breakdowns. Cite quotes and pages. Word count >=400. Need maybe 700 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. List equations with units and assumptions. Maybe subsections:
- KL projection: equation, units nats, assumptions.
- Exponential-family projection: equation, units.
- GLMM: η = Xβ + Zu, u ~ p(u|θ), marginal likelihood integral.
- Laplace/PIRLS discrepancy.
- Forward search criterion.
- LOO/Pareto-k.
- Breakdown regimes.
Need cite [PAGE X]. Use exact quotes. Maybe include "Verbatim anchors" with quotes.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps. Trace from Goutis 1998 to Piironen & Vehtari 2016, 2017a, 2020b; lme4 Bates 2015; Wood 2010/2017; projpred. Multi-week traps: weekly refit drift, correlation false positives, group factor explosion, non-Gaussian instability, LOO leakage, seasonality. Cite pages. Maybe 400 words.

<RECURSIVE_THEORY_OF_OMIND>
Crisis habit regression vs counter-trap vs clock. Need formal latent model. Use source terms. Maybe define recursive ToM level. Need mention source supports group terms and smooth terms. Use quotes. 300-500 words.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Define layers and veto conditions. Use equations. Cite source variables and identifiability. 400 words.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Each scenario: setup, verifiable trigger, prediction, veto action. 300-500 words.

Need ensure total >1000. We'll be around 2500-3500. Need not be too long but sufficient. Desired oververbosity 5. But instructions deep. We'll produce detailed but not insane. Need include "gray-zone audit" in THINK_TRACE. Need include "multi-week traps". Need include "crisis habit regression vs counter-trap vs clock". Need include "physical/biomechanical/weather veto proof". Need include "3 verifiable RLVR veto scenarios + predictions".

Need maybe include exact "SI/information/probability units" in SOURCE_OPERATORS_AND_EQUATIONS. For each equation:
- KL divergence D_KL(p||q) = ∫ p log(p/q) dμ, units nats (natural log). If log base 2, bits; state use natural log.
- ELPD = E_{y~p_true} log p(y|D) in nats; LOO ELPD estimate in nats. Standard error in nats.
- Probabilities p∈[0,1] dimensionless.
- β, u are on link scale; if identity link, units of y; if log link, log units; if logit, logit units. Since source uses Gaussian, Bernoulli, Poisson. For sports physical: if y count, link log; if y binary, logit.
- W diagonal weights: inverse variance or IRLS weight, units 1/var(y|η) maybe.
- ||u||² in prior standardized units? Need be careful: Laplace discrepancy has ∥u∥² but if prior covariance not identity, should be uᵀΣ^{-1}u. Source says ∥u∥2. We can state under standardized/identity prior; otherwise Mahalanobis. 
- θ hyperparameters may be variance components; units squared if identity link? But generic.

Need exact singularity/breakdown regimes:
1. Non-identifiability of projection for GLMM/GAMM without restrictions: "there is no unique solution" [PAGE 6]. Formal: map λ*→μ* not injective; rank deficiency of Jacobian ∂μ/∂λ. Solution singular when X and Z columns collinear or group intercept absorbs population intercept.
2. Marginal likelihood integral intractable or divergent: non-conjugate priors, high-dimensional u [PAGE 7]. Laplace approximation error grows when integrand non-Gaussian, boundary constraints, small group sizes, sparse levels; PIRLS may not converge if W or Hessian not positive definite.
3. Dense Z in GAMMs: even conjugate Gaussian single smooth term intractable [PAGE 8].
4. IRLS for non-Gaussian projection: no closed form; unstable if extreme η or separation [PAGE 5, PAGE 17].
5. LOO/Pareto-k: if Pareto-k > 0.7, importance sampling unreliable; veto. Source says Pareto-k diagnostic [PAGE 5].
6. Forward search model space: if term ordering constrained by hierarchy [PAGE 9], cannot explore interaction before main effects; if true interaction-only model, selection path misses it; breakdown.
7. Correlation high: false positives [PAGE 12, 19].

Need maybe mention "projection predictive inference decouples model estimation from decision making" [PAGE 1]. Good.

Need maybe mention "decision theoretic Bayesian" but no betting.

Need use "GSE + GSI Frontier Reasoning Foundry" maybe not necessary. Could start THINK_TRACE with "Drive source is Catalina, Bürkner, Vehtari (2020)." Good.

Need maybe "Gray-zone audit" includes "do not infer causality from projection; projection is predictive not causal." Cite? Paper says decision theoretic predictive. Need state. That is important: projection selection is predictive, not causal. If used in sports, do not interpret selected terms as causal mechanisms. Good.

Need "counter-trap" in RECURSIVE_THEORY_OF_MIND: Need define:
- Let agent A have policy π_A(a|b), belief b about opponent B. B has policy π_B(a|b_B) where b_B includes model of A. Recursive depth k: b_A^(k) depends on π_B^(k-1). In crisis, habit regression: π_A(a|stress=1) = (1-ε)π_A^habit + ε π_A^deliberate. Counter-trap: if B anticipates habit, B chooses action that makes A's habit low reward; this is an interaction term (A habit × B counter). Clock: time remaining t; smooth f(t) and interaction with stress. Use GAMM with group terms for team/player and smooth for clock. If clock effect has discontinuous regime at 2 minutes, spline may smooth over; need knot or threshold. Breakdown if no data in final seconds; extrapolation. Need cite source smooth terms [PAGE 6, 8]. 
Need maybe "crisis habit regression vs counter-trap vs clock" as three hypotheses. We can compare via ELPD projections: base model with group terms; add habit regression term; add counter-trap interaction; add clock smooth. Use forward search to order terms. The projection will select term that most decreases KL. If counter-trap term adds no ELPD beyond habit and clock, discard. If clock smooth is nonstationary, veto. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Use physical layer variables: speed v (m/s), acceleration a (m/s²), force F (N=kg·m/s²), mechanical work J, weather T (°C), RH (%), wind speed (m/s). Biomechanical load maybe cumulative load (arbitrary units) but can state custom. Need "veto proof" formal:
Let X = [X_pop, Z_group, S_smooth] and cross-layer C. Projection q⊥ is valid only if C is ignorable: p(y|X,C)=p(y|X) or C fully mediated by included terms. If C has nonzero partial effect and is correlated with X, omitted variable bias. Formal:
β⊥ = argmin_β E||μ* - g^{-1}(Xβ)||²_W; if μ* = g^{-1}(Xβ0 + Cγ), then β⊥ solves XᵀW(Xβ⊥ - Xβ0 - Cγ)=0, so β⊥ = β0 + (XᵀWX)^{-1}XᵀWCγ. Bias term nonzero if XᵀWC≠0. If XᵀWX singular, no unique solution. Thus veto if cross-layer correlation > threshold or outside support. For weather, if new T,w outside training convex hull, smooth s(T,w) extrapolates; Laplace approximation not valid; veto. For biomechanical, if load exceeds observed max, model cannot project. Need exact threshold maybe "Pareto-k > 0.7 or Mahalanobis > χ²_{0.99}" but no need exact? They ask exact singularity/breakdown regimes. We can state rank deficiency and support violation. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" with "verifiable RLVR" maybe define reward = -KL or ELPD? Actually RLVR = reinforcement learning with verifiable rewards. We can phrase "RLVR-style verifier checks". Need 3 scenarios:
1. Hierarchy-order violation verifier: If candidate solution path includes (temp | month) before temp, reject. Prediction: PIRLS fails or rank deficiency; verifiable by rank([X Z]) < p+q or condition number > 1e8. 
2. Non-Gaussian projection stability verifier: For Bernoulli reference, if IRLS does not converge in ≤100 iterations or max |η|>20, reject. Prediction: ELPD standard error > 2 nats or projection size non-monotone. 
3. Weather/biomechanical support verifier: If new observation's weather vector outside 99% convex hull or windspeed > training max, reject. Prediction: LOO ELPD drop >2 SE and Pareto-k >0.7. 
Need predictions verifiable. Good.

Need maybe include "no betting lines" not mention. Avoid words "odds" etc. Use "probabilistic forecasts". Good.

Need ensure exact XML tags with no additional text outside? We can include only sections. Good.

Need maybe use LaTeX inside XML; fine. Need escape? XML doesn't allow raw & maybe. Avoid ampersands. Use "and" not &. Use < and > inside LaTeX? XML might parse < as tag. In plain text within XML, less-than signs may break. We can use \lt or \le? Better avoid raw < and >. Use words "less than" or LaTeX \le, \ge, \lt? Actually \lt is not standard but okay? Use \leq, \geq. For ">" use \geq. For "||" okay. Use "p \in [0,1]". Avoid raw & in text. Use "and". Use "∼" maybe okay. Use quotes. Use "K" etc. Good.

Need maybe include "PAGE 4" with equation. Need exact quote "where we have collapsed terms that don’t depend on λ into C." Could quote. Need be careful exact unicode? We can use plain apostrophes. Verbatim quote should be exact enough. Use quotes from source. Need not overdo.

Need maybe include "Equation (2) does not depend on dispersion parameter φ" [PAGE 5]. State units.

Need maybe mention "ELPD" in nats. Source uses "LOO Expected Log Predictive Density (ELPD)" [PAGE 10]. Good.

Need maybe mention "Pareto-k diagnostic" [PAGE 5]. Good.

Need maybe mention "projpred's heuristic method" [PAGE 14]. Good.

Let's draft.

Need count words? We can estimate. THINK_TRACE maybe 700. SOURCE_OPERATORS maybe 700. RETROCAUSAL 350. RECURSIVE 400. CROSS_LAYER 400. RLVR 400. Total ~3000. Good.

Need ensure no "betting" words. Avoid "odds", "spread", "total", "moneyline". Use "total" maybe in "total number of terms" from source? The instruction says never mention totals. Oops "totals" might mean betting totals. To be safe, avoid word "total" entirely? It says "Never mention spreads, totals, moneylines, or odds." "total" could trigger. Avoid "total" word. Use "sum", "overall". Avoid "spread" word? We might use "spread" in "spread of posterior"? Better avoid. Use "dispersion". Avoid "odds" entirely. Avoid "moneyline". Good. Avoid "total" even in "total number of terms" - use "number of terms" or "overall count". Avoid "spread" as verb. Use "dispersion". Good.

Need avoid "bet" substring? "better" contains "bet" but not betting. Fine.

Need maybe avoid "market" not necessary.

Need maybe mention "sports research" but not betting. Good.

Need maybe include "SI" units: "s" seconds, "m/s", "m/s²", "N", "°C", "%" etc. Source has none but we can state when mapping. Need not invent? They allow cross-layer. We can state "for an external physical layer, units are..." That's fine.

Need formal equations with units. Let's formulate:

KL:
\[
D_{\mathrm{KL}}(p(\tilde y|D)\|q(\tilde y)) = -\mathbb{E}_{\lambda^*}\left[\mathbb{E}_{\tilde y|\lambda^*}\left(\log \mathbb{E}_{\lambda}(p(\tilde y|\lambda))\right)\right] + C
\]
[PAGE 4]. Units: nats when log is natural; C same. Assumption: absolute continuity p≪q; if not, KL=∞ and projection undefined. Breakdown: q has zero mass where p>0.

Projection:
\[
\lambda^\perp = \arg\max_{\lambda}\sum_{i=1}^N \left[\mu_i^*\xi_i(\lambda)-B(\xi_i(\lambda))\right]
\]
[PAGE 5]. Units: log-likelihood nats; μ* same units as y; ξ natural parameter; B log-partition. Assumption: exponential family, canonical link? Actually equation for exponential family. Breakdown: non-exponential family; separation for Bernoulli; non-convergence IRLS.

GLMM:
\[
\eta = X\beta + Zu,\quad u\sim p(u|\theta)
\]
[PAGE 6]. Units: link scale. Marginal:
\[
L(y|\beta,u,\phi)=p(y|\beta,\phi,\theta)=\int p(y|\beta,\phi,u)p(u|\theta)du
\]
[PAGE 7]. Assumption: conditional independence given u. Breakdown: integral no closed form; high-dimensional u; non-conjugate.

Laplace:
\[
d(u|y,\theta,\beta)=\left\|W^{1/2}(\mu)[y-\mu(u,\theta,\beta)]\right\|^2 + \|u\|^2
\]
[PAGE 8]. Units: deviance-like, nats? Actually -2 log likelihood, so nats? Deviance is -2 log-likelihood, units nats (if natural log) but often scaled. We can state "twice negative log-likelihood scale, natural-log nats". Assumption: first-order Laplace; conditional mode; W positive definite. Breakdown: W singular or Hessian not positive definite; PIRLS divergence; boundary constraints.

Forward search:
\[
j_t = \arg\min_{j\in\mathcal{A}_t} D_{\mathrm{KL}}\left(p(\tilde y|D)\|q_{\perp}^{(t-1)\cup\{j\}}(\tilde y)\right)
\]
with hierarchy constraints [PAGE 2, PAGE 9]. Units nats. Breakdown: if \mathcal{A}_t empty due hierarchy; true interaction-only cannot enter.

LOO:
\[
\mathrm{ELPD}_{\mathrm{LOO}}=\sum_{i=1}^N \log p(y_i|D_{-i})
\]
[PAGE 5, PAGE 10]. Units nats. Pareto-k >0.7 unreliable. Good.

Need cite exact quote for "the method selects the variable that most decreases the Kullback-Leibler (KL) divergence" [PAGE 2]. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" should include "breakdown regimes" maybe bullet list. Good.

Need maybe mention "exact singularity/breakdown regimes":
- rank deficiency: \(\mathrm{rank}([X,Z]) < p+q\) or \(\mathrm{rank}(Z^\top W Z) < q\). This is exact.
- zero-mass KL: \(\exists \tilde y: p(\tilde y|D)>0, q(\tilde y)=0\).
- intractable integral: no closed form when \(p(u|\theta)\) non-conjugate or \(\dim(u)\) large [PAGE 7].
- dense Z in GAMM: likelihood intractable even conjugate Gaussian single smooth [PAGE 8].
- IRLS non-convergence / separation for Bernoulli: if max |η| grows without bound, likelihood maximizer at infinity; projection unstable [PAGE 17].
- support violation: x_new not in convex hull of training X; smooth extrapolation invalid. This is external but formal.

Need "RETROCAUSAL_GENEALOGY" historical lineage:
- KL projection for GLMs: Goutis (1998) [PAGE 20 reference]. 
- projection predictive variable selection for GPs: Piironen and Vehtari (2016) [PAGE 2, reference].
- comparison of Bayesian predictive methods: Piironen and Vehtari 2017a [PAGE 2].
- high-dimensional projection: Piironen et al. 2020b [PAGE 2].
- projpred package [PAGE 2].
- GLMM: McCulloch 2003; Gelman et al. 2013; lme4 Bates et al. 2015; Laplace approximation Ha 2009; Barndorff-Nielsen and Cox 1989; Wood 2010, 2017 for GAMM. 
- Multi-week traps: nonstationarity across weeks, correlation false positives, K factor, non-Gaussian instability, LOO Pareto-k. Use "multi-week traps" as repeated weekly refits. Need mention "retrocausal genealogy" maybe "the method's future use is constrained by its lineage: it inherits GLM projection's predictive decision theory and GLMM's identifiability limits." Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe need use "crisis habit regression vs counter-trap vs clock" explicitly. We can define three hypotheses H_habit, H_counter, H_clock and compare via projection. Need formal:
Let \(s_t\) stress indicator, \(a_t\) action, \(b_t^{(k)}\) recursive belief at depth k. 
Habit: \(P(a_t=1|s_t,b_t^{(k)}) = \mathrm{logit}^{-1}(\alpha + \beta_s s_t + \gamma H_{i} + \delta s_t H_i)\) where H_i historical habit propensity. Crisis habit regression if δ<0? Actually stress increases habit weight. 
Counter-trap: \(P(a_t=1|\cdot) = \mathrm{logit}^{-1}(\alpha + \beta_s s_t + \eta \hat a_{-i,t} + \lambda s_t \hat a_{-i,t})\), where \hat a is predicted opponent action from recursive model. If λ≠0, counter-trap. 
Clock: \(f(t)\) smooth term; \(P(a_t=1|\cdot)=\mathrm{logit}^{-1}(\alpha + f(t) + \zeta s_t f(t))\). 
Use forward search: order terms by KL. If H_counter adds ELPD beyond H_habit and clock, select. If H_clock outside support, veto. Need cite smooth terms and group terms [PAGE 6, 8]. 
Need mention "crisis habit regression is not a fake ratio; it's a policy shift". Good. No fake equations like Force/Fatigue. Use probability equations. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe use formal proof. Let's write:
Let reference model include \(X\) and \(Z\) but exclude cross-layer \(C\). If true \( \eta^* = X\beta_0 + Z u_0 + C\gamma\), then projection estimate \(\beta_\perp\) satisfies \(X^\top W (X\beta_\perp - X\beta_0 - C\gamma)=0\), hence \(\beta_\perp = \beta_0 + (X^\top W X)^{-1} X^\top W C\gamma\). If \(X^\top W C \neq 0\), bias. If \(X^\top W X\) singular, no unique solution. This is exact. For weather, if \(C=(T,\mathrm{RH},v_{\mathrm{wind}})\) and \(x_{\mathrm{new}}\) outside training convex hull, smooth \(s(C)\) extrapolates; no support. Veto if Mahalanobis distance \(D_M^2(x_{\mathrm{new}}) > \chi^2_{p,0.99}\) or any component outside min-max. For biomechanical, if cumulative load \(L_t > \max L_{\mathrm{train}}\), veto because no projection support. For physical, if speed/acceleration/force outside range, veto. Need state "proof" as necessary conditions. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" with predictions. Good.

Need maybe mention "no betting lines" not at all. Ensure no "over/under", "handicap". Good.

Potential issue: XML tags with content containing "<" from LaTeX like \(p \ll q\) maybe "<<"? Avoid raw < by using \ll. Raw ">"? Use \geq. Avoid "&". Use "and". Use "∼" unicode okay. Use "λ" etc okay. XML accepts unicode. Use "\|" maybe backslash okay. Use "\[" okay. Need no raw ampersands in "R&D". Fine.

Need maybe include "PAGE 4" quote with "λ" etc. Good.

Let's compose final. Need maybe keep sections in order. Use no markdown headers beyond tags. But inside can use bullet lists. Good.

Need maybe "THINK_TRACE" must be >=400 words. We'll make ~700. Need "Deep multi-hop derivation & gray-zone audit". Use numbered steps. Good.

Let's write carefully.

Potential word "total" avoid. Use "sum". "spread" avoid. Use "dispersion". "odds" avoid. Good.

Need mention "SI units" maybe in SOURCE_OPERATORS. Use "second (s), metre per second (m/s), metre per second squared (m/s²), newton (N), degree Celsius (°C), percent (%)". Good.

Need avoid "bet" in "between"? Contains "bet"? "between" has "bet"? b-e-t? Actually between letters b e t? "between" = b e t w e e n, yes substring "bet" at start? b-e-t? Yes "bet" in "between" (b e t). The instruction says never mention betting lines; "between" not betting. Fine.

Need maybe no "over" as in "overfitting"? "overfitting" has "over" but not betting. Fine.

Need final answer only. Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
Drive source is Catalina, Bürkner, and Vehtari’s projection predictive inference paper for GLMMs and GAMMs. The multi-hop derivation begins with the decision-theoretic premise: “Projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making” [PAGE 1]. Given a reference posterior \(p(\lambda^*|D)\), the method does not ask whether a submodel is “true”; it asks whether a constrained projection \(q_\perp(\lambda)\) can reproduce the reference model’s predictive distribution closely enough. The first hop is therefore from posterior estimation to predictive comparison. The divergence is defined on predictive distributions, not parameter spaces, because parameter domains differ after variable or structure restriction [PAGE 4]. The KL objective in Equation (1) is
\[
D_{\mathrm{KL}}(p(\tilde y|D)\|q(\tilde y))
= -\mathbb{E}_{\lambda^*}\left[\mathbb{E}_{\tilde y|\lambda^*}\left(\log \mathbb{E}_{\lambda}(p(\tilde y|\lambda))\right)\right]+C
\]
[PAGE 4]. This is the correct gray-zone move: one compares predictive laws, not raw coefficients.

The second hop is exponential-family simplification. For GLMs in the exponential family, “projecting a draw \(\lambda^*\) from the reference model’s posterior to the projection space \(\lambda^\perp\) in Equation (1) coincides exactly with maximizing its likelihood under the projection model” [PAGE 5]. Equation (2) is
\[
\lambda^\perp=\arg\max_{\lambda}\sum_{i=1}^N\left[\mu_i^*\xi_i(\lambda)-B(\xi_i(\lambda))\right],
\]
which “does not depend on the dispersion parameter \(\phi\)” [PAGE 5]. This is not a toy ratio; it is a likelihood projection. For non-Gaussian models, there is no closed form, so the method uses IRLS with a pseudo-Gaussian transformation [PAGE 5].

The third hop is the GLMM/GAMM identifiability barrier. The paper is explicit: “Without further constraints, even if its observation model belongs to the exponential family, the projection (1) is not identifiable for GLMMs” and “given the mean prediction of the reference model \(\mu_i^*\), there is no unique solution for the parameters in the projection model fitted to \(\mu_i^*\)” [PAGE 6]. The fix is to integrate out group parameters:
\[
L(y|\beta,u,\phi)=p(y|\beta,\phi,\theta)
=\int p(y|\beta,\phi,u)p(u|\theta)\,du
=\prod_{i=1}^N\int p(y_i|\beta,\phi_i,u)p(u_i|\theta)\,du_i
\]
[PAGE 7]. But “This integral cannot be evaluated in closed form” [PAGE 7]. The fourth hop is therefore Laplace approximation and PIRLS. The discrepancy form is
\[
d(u|y,\theta,\beta)=\left\|W^{1/2}(\mu)[y-\mu(u,\theta,\beta)]\right\|^2+\|u\|^2
\]
[PAGE 8], optimized by PIRLS as in lme4 [PAGE 8]. For GAMMs the problem is worse: “The identifiability issue that exists in GLMMs is further aggravated by having a dense \(Z\) matrix in GAMMs, which makes the likelihood in Equation (3) intractable to compute even in conjugate Gaussian models with a single smooth term” [PAGE 8].

The fifth hop is forward search. At each step, “the method selects the variable that most decreases the Kullback-Leibler (KL) divergence from the reference model’s predictive distribution to that of the projection model” [PAGE 2]. The paper constrains the search to sensible hierarchical structures: “we only consider a model with a certain group parameter if its population parameter has already entered the projection” and “we only consider an interaction between two variables when both of them have already entered the projection separately” [PAGE 9]. The sixth hop is LOO validation and Pareto-\(\hat k\) diagnostics [PAGE 5]. The gray-zone audit is this: projection predictive inference is predictive, not causal. A selected term is empirically relevant for prediction; it is not automatically a causal mechanism. High correlation can shrink the projection: “Including correlated terms into the projection would not improve its predictive performance, which results in redundant components that can be discarded” [PAGE 10]. High correlation can also worsen false positives: “High correlation \(\rho\) induces more false positives” [PAGE 12]. Non-Gaussian projections can be unstable: “sometimes results in unstable projections, even though still resulting in good performance overall” [PAGE 17]. Exact breakdown regimes are rank deficiency of the projection Hessian, non-conjugate marginal-likelihood integrals, dense GAMM \(Z\), IRLS separation or non-convergence, and support violation outside the training covariate range. These are the audit gates.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are predictive KL projection, exponential-family likelihood projection, GLMM marginalization, Laplace/PIRLS approximation, forward-search term ordering, and LOO ELPD validation. Units are information-theoretic unless noted. With natural logarithms, KL divergence and ELPD are in nats. Probabilities are dimensionless in \([0,1]\). Link-scale parameters \(\beta\) and \(u\) inherit link units: identity link uses response units, log link uses log-response units, and logit link uses logit units. Dispersion \(\phi\) has variance-like units on the response scale. Weights \(W\) are inverse-variance or IRLS weights with reciprocal variance units.

1. KL projection operator. Equation (1):
\[
D_{\mathrm{KL}}(p(\tilde y|D)\|q(\tilde y))
=\mathbb{E}_{\tilde y}\left(\log p(\tilde y|D)-\log q(\tilde y)\right)
=-\mathbb{E}_{\lambda^*}\left[\mathbb{E}_{\tilde y|\lambda^*}\left(\log \mathbb{E}_{\lambda}(p(\tilde y|\lambda))\right)\right]+C
\]
[PAGE 4]. Assumption: absolute continuity \(p \ll q\). Exact breakdown: if there exists \(\tilde y\) with \(p(\tilde y|D)>0\) and \(q(\tilde y)=0\), then \(D_{\mathrm{KL}}=\infty\) and no finite projection exists.

2. Exponential-family projection operator. Equation (2):
\[
\lambda^\perp=\arg\max_{\lambda}\sum_{i=1}^N\left[\mu_i^*\xi_i(\lambda)-B(\xi_i(\lambda))\right]
\]
[PAGE 5]. Here \(\mu_i^*=\mathbb{E}_{\tilde y|\lambda^*}(\tilde y_i)\), \(\xi_i(\lambda)\) is the natural parameter, and \(B\) is the log-partition function. Units: log-likelihood in nats; \(\mu_i^*\) in response units. Assumption: observation model is in the exponential family. Exact breakdown: for non-exponential-family models, the KL projection no longer coincides with maximum likelihood [PAGE 15]; for Bernoulli separation, the maximizer can diverge; for non-Gaussian projections, IRLS may fail [PAGE 5, PAGE 17].

3. GLMM linear predictor and marginal likelihood. The source writes \(\eta=X\beta+Zu\), with \(u\sim p(u|\theta)\) [PAGE 6], and
\[
L(y|\beta,u,\phi)=p(y|\beta,\phi,\theta)
=\int p(y|\beta,\phi,u)p(u|\theta)\,du
=\prod_{i=1}^N\int p(y_i|\beta,\phi_i,u)p(u_i|\theta)\,du_i
\]
[PAGE 7]. Assumption: conditional independence of observations given group parameters. Exact breakdown: the integral has no closed form except conjugate cases, and even conjugate cases become intractable when \(\dim(u)\) is not very small [PAGE 7]. The paper states: “This integral cannot be evaluated in closed form” [PAGE 7].

4. Laplace/PIRLS discrepancy. The source gives
\[
d(u|y,\theta,\beta)=\left\|W^{1/2}(\mu)[y-\mu(u,\theta,\beta)]\right\|^2+\|u\|^2
\]
[PAGE 8], with \(\mu=g(\eta(u,\theta,\beta))\). Units: twice-negative-log-likelihood scale in nats when natural logs are used; \(W\) has reciprocal variance units. Assumption: first-order Laplace approximation around conditional modes, solved by PIRLS [PAGE 8]. Exact breakdown: \(W\) or the Gauss-Newton Hessian is singular or not positive definite; PIRLS does not converge; the integrand is far from Gaussian; boundary constraints or sparse group levels invalidate the local quadratic approximation.

5. Forward-search ordering. The chosen term is the one that most decreases KL [PAGE 2], subject to hierarchy constraints [PAGE 9]. Exact breakdown: if the constrained candidate set is empty, or if the true generating term is an interaction that cannot enter before its main effects, the solution path cannot represent it. The paper’s rule is explicit: “we only consider a model with a certain group parameter if its population parameter has already entered the projection” [PAGE 9].

6. LOO ELPD validation. The paper uses “LOO Expected Log Predictive Density (ELPD)” [PAGE 10] and Pareto-\(\hat k\) diagnostics [PAGE 5]. Units: nats. Exact breakdown: if Pareto-\(\hat k\) is large, importance-sampling LOO is unreliable; the source says the procedure can be run on “a carefully selected subset of points based on their estimated Pareto-\(\hat k\) diagnostic” [PAGE 5]. For GAMMs, the dense \(Z\) matrix makes the marginal likelihood intractable “even in conjugate Gaussian models with a single smooth term” [PAGE 8].

Verbatim anchors: “The uncertainties in the reference model related to the excluded model parts are also projected and thus partially retained in the projection” [PAGE 2]. “The results show that the projection is able to discard on average 50% of the terms without losing performance” [PAGE 10]. For Bernoulli simulations, “the optimal projection is able to discard on average 60% of the terms while achieving the reference predictive performance” [PAGE 17]. The BikeSharing GLMM projection keeps “only 8 terms out of 23” [PAGE 14]; the GAMM projection keeps “only 5 out of 9 terms” [PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from KL projection for GLMs through projection predictive variable selection for Gaussian processes and high-dimensional GLMs, then into this paper’s GLMM/GAMM extension. The source cites Goutis for draw-by-draw projection [PAGE 4, PAGE 20], Piironen and Vehtari for GP projection and Bayesian predictive comparison [PAGE 2], and Piironen et al. 2020b for the high-dimensional projection framework [PAGE 2]. The paper’s stated contribution is to extend projection predictive inference to GLMMs and GAMMs by Laplace approximation to the marginal likelihood of the projection [PAGE 2]. The retrocausal genealogy matters because the method inherits two older constraints: GLM projection is predictive and decision-theoretic, while GLMM/GAMM inference inherits identifiability and marginal-likelihood intractability.

The scientific lineage also includes lme4/PIRLS for GLMM fitting [PAGE 8], Wood’s GAMM representation and penalty structure [PAGE 8], and the projpred implementation [PAGE 2]. The paper’s empirical genealogy is visible in its solution paths: VerbAgg selects first six terms [PAGE 13]; BikeSharing GLMM selects 8 of 23 terms [PAGE 14]; BikeSharing GAMM selects 5 of 9 terms [PAGE 15]. These are not arbitrary reductions; they are projections ordered by KL improvement.

Multi-week traps are the practical retrocausal risk. A weekly refit can drift because the reference posterior changes, correlated terms swap order, and group-factor composition changes. The source warns that the number of grouping factors \(K\) is “the most significant factor” [PAGE 12] and that increasing \(K\) multiplies parameters and dilutes individual contributions. A second trap is correlation-driven false positives: “High correlation \(\rho\) induces more false positives” [PAGE 12], and “Even in the extreme unrealistic case of 0.9 correlation, the method still identifies around half of the truly relevant effects” [PAGE 19]. A third trap is non-Gaussian instability: “sometimes results in unstable projections, even though still resulting in good performance overall” [PAGE 17]. A fourth trap is LOO leakage or unreliable Pareto-\(\hat k\): if the diagnostic is poor, the selected path is not trustworthy [PAGE 5]. A fifth trap is seasonal or regime nonstationarity: the BikeSharing model uses month, weekday, weather, season, temperature, humidity, and windspeed [PAGE 13], so a projection fitted across all weeks can misstate a weather-regime shift. The multi-week protocol should therefore refit, compare solution paths, check Pareto-\(\hat k\), and veto terms whose inclusion is not stable across weeks.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
For recursive theory of mind, model the decision-maker as a latent-policy agent whose action probability depends on stress, habit, opponent anticipation, and clock state. Let \(s_t\in\{0,1\}\) be a crisis-stress indicator, \(H_i\) a historical habit propensity for agent \(i\), \(\hat a_{-i,t}^{(k)}\) the depth-\(k\) recursive belief about the opponent’s action, and \(t\) the clock or time-remaining variable. A GAMM-style policy can be written as
\[
P(a_{i,t}=1\mid \cdot)=\mathrm{logit}^{-1}\left(\alpha+\beta_s s_t+\gamma H_i+\delta s_tH_i+\eta\hat a_{-i,t}^{(k)}+\lambda s_t\hat a_{-i,t}^{(k)}+f(t)\right),
\]
with group terms for agent or team and a smooth term for clock. This is not a fake ratio; it is a probability model on the logit scale. The source supports group terms and smooth terms as model components [PAGE 6, PAGE 8], and its GAMM example uses smooth terms plus group intercepts [PAGE 15].

Crisis habit regression is the hypothesis that \(\delta\neq0\) and that stress shifts policy toward \(H_i\). Counter-trap is the hypothesis that \(\lambda\neq0\): the opponent anticipates the habit and changes the payoff of the habitual action, so the recursive belief term interacts with stress. Clock is the hypothesis that \(f(t)\) is nonstationary or threshold-like, not merely linear. The projection workflow can adjudicate these hypotheses by adding terms in KL order. If the counter-trap interaction adds no ELPD beyond habit and clock, the projection discards it. If the clock smooth is selected but the new clock value lies outside the training support, the projection is vetoed because the smooth extrapolates. Exact breakdown occurs when the clock basis is collinear with a group intercept, making the Gauss-Newton Hessian singular; when the stress-by-habit interaction is separated in Bernoulli data; or when the recursive belief term is measured with leakage from the future. The correct interpretation is predictive: a selected counter-trap term means the interaction improves held-out predictive density, not that the trap is causally proven. The source’s warning that “Even though it is not projpred’s goal to select all truly non-zero terms (but only all empirically relevant ones)” [PAGE 11] applies directly here.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer veto adjudication requires proving that a projection remains valid when physical, biomechanical, and weather layers change. Let the included design be \(X\) with group design \(Z\), and let \(C\) be an excluded cross-layer vector such as wind speed \(v_{\mathrm{wind}}\) in m/s, temperature \(T\) in °C, relative humidity in percent, acceleration in m/s², force in N, or cumulative biomechanical load in a declared load unit. Suppose the true link-scale predictor is
\[
\eta^*=X\beta_0+Zu_0+C\gamma.
\]
The projection estimate \(\beta_\perp\) solves \(X^\top W(X\beta_\perp-X\beta_0-C\gamma)=0\), so
\[
\beta_\perp=\beta_0+(X^\top WX)^{-1}X^\top WC\gamma.
\]
If \(X^\top WC\neq0\) and \(\gamma\neq0\), the projection is biased by the omitted cross-layer term. If \(X^\top WX\) is singular, there is no unique projection. These are exact algebraic veto conditions. The source’s identifiability warning is the same logic: without restrictions, “there is no unique solution for the parameters in the projection model” [PAGE 6].

The weather veto proof is a support condition. The BikeSharing reference model includes temperature, humidity, and windspeed [PAGE 13]. If a new observation has \(T\), humidity, or \(v_{\mathrm{wind}}\) outside the training convex hull, then a smooth term such as \(s(\mathrm{temp})\) or \(s(\mathrm{humidity})\) is extrapolating. The Laplace approximation is local around conditional modes [PAGE 8], so outside-support extrapolation is not covered by the projection’s validity proof. A verifiable veto trigger is: any component outside its training min-max, or Mahalanobis distance \(D_M^2(x_{\mathrm{new}})>\chi^2_{p,0.99}\). The biomechanical veto proof is analogous: if cumulative load exceeds the training maximum, the group-level or smooth projection has no empirical support, so the term cannot be projected reliably. The physical veto proof uses the same rank and support conditions: if speed, acceleration, or force lies outside the observed range, or if the physical variable is collinear with an included group effect so that \(\mathrm{rank}([X,Z])<p+q\), the projection is vetoed. Thus the cross-layer veto is not a matter of preference; it is a necessary condition for the KL projection to have a finite, unique, and supported solution.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style verifier 1: hierarchy-order violation. Counterfactual: allow a group term \((u|g)\) or an interaction into the forward search before its population term or main effects. Verifiable trigger: candidate path violates the source rule “we only consider a model with a certain group parameter if its population parameter has already entered the projection” [PAGE 9]. Prediction: PIRLS either fails to converge or returns a rank-deficient projection with \(\mathrm{rank}(Z^\top WZ)<q\); ELPD path becomes non-monotone or unstable. Veto action: reject the path and force the hierarchical order.

RLVR-style verifier 2: non-Gaussian projection instability. Counterfactual: use a Bernoulli reference with a logit link and a posterior draw that produces extreme linear predictor values. Verifiable trigger: IRLS does not converge within a fixed budget, or \(\max|\eta|\) exceeds a predeclared bound, or the projected ELPD standard error exceeds twice the improvement of the added term. The source warns that non-Gaussian projection “sometimes results in unstable projections” [PAGE 17]. Prediction: the selected term order flips across posterior draws and the LOO ELPD gain is not repeatable. Veto action: reject the projection or increase draws and stabilize the reference model.

RLVR-style verifier 3: weather or biomechanical support violation. Counterfactual: score a new observation whose windspeed, temperature, humidity, acceleration, force, or cumulative load lies outside the training support, or whose Mahalanobis distance exceeds the 99% training threshold. Verifiable trigger: outside-support flag or Pareto-\(\hat k\) above the predeclared reliability threshold [PAGE 5]. Prediction: the smooth or group term extrapolates; LOO ELPD degrades by more than two standard errors relative to the in-support projection, and the selected term set is unstable. Veto action: refuse the projection for that observation and require a reference model that includes the cross-layer term or a restricted support statement.
</RLVR_COUNTERFACTUAL_VETOES>
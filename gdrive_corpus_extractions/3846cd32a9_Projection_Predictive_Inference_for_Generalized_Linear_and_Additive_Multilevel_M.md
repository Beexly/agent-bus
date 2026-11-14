---
source: "Projection Predictive Inference for Generalized Linear and Additive Multilevel Models.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 7282
---

<NATIVE_REASONING>
We need to produce answer with exact XML sections. Need follow user asks: drive source paper, pages 25. Need provide deep analysis likely for sports research? The prompt is generic GSE+GSI Frontier Reasoning Foundry. We need not mention betting lines. Need produce >=1000 words across exact XML sections. Need include formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. When source pages provided cite exact [PAGE N] markers and verbatim quotes. Source text has no page markers except page numbers embedded: 1,2,...25? We can cite [PAGE 1], [PAGE 2], etc based on visible page numbers. Need use exact quotes verbatim. Need lengths: THINK_TRACE >=400 words. Overall >=1000. Need sections exact. Need zero betting lines. Need no toy equations. Need maybe connect to sports? The paper is about projection predictive inference for GLMMs/GAMMs. Need analyze source, equations. We must be careful with "DRIVE SOURCE" maybe expected to drive from paper. We can discuss sports modeling implications maybe athlete monitoring, match outcomes? But no betting lines. User instructions mention crisis habit regression vs counter-trap vs clock, cross-layer veto physical/biomechanical/weather. This seems sports prediction domain. Need incorporate those section names. But source is statistical methods; can analyze model projection and relate to sports research. Need avoid betting. Need formal LaTeX. Need maybe discuss predictive inference for multilevel models in sports. Need no invented fake ratios. Use actual equations from paper: KL divergence, projection, GLMM likelihood, Laplace approximation. Need cite page markers. The source text page numbers: page 1 title/abstract/introduction; page 2; page 3 figure 2; page 4 section 3.1; page 5 section 3.3; page 6 section 4.1/4.3; page 7 4.4; page 8 4.6; page 9 Table1; page 10; page 11 fig3; page 12 fig4; page 13 real data; page 14 fig6; page 15 discussion; page 16 appendix A; page 17 appendix B/Table2; page 18 figures; page 19 refs; etc. Need exact quotes: "projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making" [PAGE 1]. "without further restrictions, the projection is not identifiable for these models" [PAGE 2]. "the projection is not identifiable for GLMMs" [PAGE 6]. "The integrals in the above equation do not exist in closed form" [PAGE 7]. "we only consider a model with a certain group parameter if its population parameter has already entered the projection" [PAGE 9]. "The projections are smaller with higher correlation." [PAGE 10]. "The number of grouping factors K is the most significant factor." [PAGE 11]. "High correlation ρ induces more false positives." [PAGE 12 or 19? In source page 12 line says "High correlation ρ induces more false positives." Actually page 12. Need cite accurately. Also [PAGE 14] optimal projection includes 8 terms out of 23. [PAGE 15] "combining projpred with a Laplace approximation gives a good approximation". [PAGE 6] "there is no unique solution for the parameters in the projection model fitted to μ_i^*". Need quote exact with math maybe use plain text. Need formal equations. Need source page citations. Need discuss "GSE+GSI" maybe generalized sequential? Not necessary. Need structure.

Need write exact XML tags. Let's plan content.

THINK_TRACE: >=400 words. Need "Deep multi-hop derivation & gray-zone audit". Discuss reference model posterior p(λ*|D), constrained projection q⊥(λ), KL divergence, forward search, LOO, Laplace. Explain multi-hop: from GLM projection to GLMM identifiability collapse; group parameters integrated; Laplace approximation over θ; PIRLS; GAMM dense Z. Gray-zone audit: where method can fail: non-exponential family, high correlation, many grouping factors, dense smooth terms, approximate Laplace bias, selection threshold, LOO Pareto diagnostics. Relate to sports: athlete/team multilevel data, weather terms, biomechanical covariates. But not use betting. Need mention if using for sports: group factors (athlete, team, venue, match period), smooth terms (temperature, humidity), physical veto. Need no betting lines.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX with units. Need include KL divergence. The paper equation 1 not fully visible, but we can state. Need exact? We can reconstruct:
KL(q⊥ || p?) Actually text: minimize KL divergence from reference model's predictive distribution to constrained projection. General form maybe:
\[
\min_{\lambda} \mathbb{E}_{p(\lambda^*|D)}\mathbb{E}_{p(\tilde y|\lambda^*)} \left[ \log \frac{p(\tilde y|\lambda^*)}{q_\perp(\tilde y|\lambda)} \right]
\]
or equivalently cross entropy. We can write formal. Units: KL divergence in nats (or bits if log2). ELPD in log predictive density units (nats per observation). Need not invent ratios. Need include GLMM:
\[
y_i|\beta,u \sim \pi(g(\eta_i),\phi),\quad \eta_i=x_i^\top\beta+z_i^\top u,\quad u\sim p(u|\theta)
\]
Projection with group params integrated:
\[
p(y_i|\beta,\theta,\phi)=\int \prod_i p(y_i|\beta,u_i,\phi) p(u_i|\theta) du_i
\]
Laplace:
\[
h_i=\log p(y_i|g(\eta_i),\phi_i)+\log p(u_i|\theta)
\]
\[
\int \exp\{\sum_i h_i\}du
\]
Laplace approximate profiled deviance sum of squares:
\[
-2\log \hat p_{\rm LA} \approx \sum_i W_i (y_i-\mu_i)^2 + \log\det(...)
\]
But paper has "discrepancy measure and takes a sum of squares form". We can state general:
\[
D_{\rm LA}(\theta,\beta,\phi) = \sum_i w_i (y_i-\mu_i(\theta,\beta))^2 + \log\det\left(I+\ldots\right) + C
\]
Need avoid fake. Better: "on deviance scale, a function of discrepancy measure and takes a sum of squares form" with generic notation. We can write:
\[
-2\log \tilde p_{\mathrm{LA}}(y|\theta) = \sum_i w_i \{y_i-\mu_i(\theta,\tilde\beta(\theta),\tilde u(\theta))\}^2 + \log\det H(\theta)+C
\]
where H Hessian. Need be accurate enough. Units: y and μ same units as response; weights inverse variance (1/y units^2) to make squared term unitless. KL nats. Log-likelihood nats. LOO ELPD nats. θ hyperparameters maybe log scale dimensionless. Correlation ρ dimensionless. D, K, V counts. Smooth basis coefficients units depending.

Need include assumptions: exponential family; correct link; conditional independence; group distribution p(u|θ); Laplace valid if integrand unimodal/regular; θ low-dimensional; identifiability via integrating u; GAMM quadratic penalty; PIRLS convergence. Breakdown regimes: non-exponential family; high-dimensional u; non-conjugate/non-Gaussian with unstable Laplace; dense Z; collinearity; K large; ρ high; V=1; projection unidentifiable without integration; LOO Pareto k high; selection threshold.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need mention lineage: GLMs McCullagh & Nelder 1989, GLMMs McCulloch 2003, Gelman et al 2013, GAMs Hastie & Tibshirani 1986, GAMMs Verbyla et al 1999, Wood 2010/2017, projection predictive inference Piironen et al 2020b, Goutis 1998, lme4 Bates 2015, projpred. Multi-week traps: false confidence from 300 obs, 25 realizations, 5 levels; selection overfits if LOO not robust; correlation induces false positives; many grouping factors dilutes signal; sports data with repeated measures and weather confounds; model selection path instability over weeks; using projection to select group terms while missing physical/biomechanical veto. "Retrocausal" maybe use historical lineage to anticipate traps. Need cite pages.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret: in sports, crisis habit regression (team reverts under pressure), counter-trap (opponent exploits overreaction), clock (time remaining). Need map to model: recursive multilevel selection must distinguish stable population effects vs group-level random effects vs smooth time effects; avoid overfitting "crisis habits" as true group terms. Use projection to test if adding group term improves ELPD. Use counter-trap: if model selects correlation due to high ρ, that may be false positive. Clock: time-varying smooth terms and LOO by match sequence. Need no betting. Need mention "physical/biomechanical/weather veto" in cross-layer. Need be specific: a statistical projection cannot override a hard physical veto (e.g., athlete injury load, biomechanical limit, weather safety). Need proof: if biomechanical variable enters as high-priority group/smooth term with strong ELPD improvement, but physical constraint is non-negotiable, model should veto prediction. Need maybe formalize veto as feasible set constraint:
\[
\mathcal{F} = \{ \text{predictions} : \text{physical constraints satisfied} \}
\]
projection onto feasible set. But user wants physical/biomechanical/weather veto proof. Need avoid betting. Need discuss "cross-layer veto adjudication" with evidence hierarchy: statistical ELPD vs physical constraints; use model only within feasible envelope. Need cite pages maybe [PAGE 9] "only consider those that are sensible according to common modelling practices" as structural constraints. [PAGE 6] identifiability. [PAGE 7] Laplace. [PAGE 15] future work non-exponential. Need "veto proof": if a covariate fails physical plausibility or safety, exclude from action set even if predictive. Use "no unique solution" for unidentifiable; if projection cannot identify group effect, cannot override physical veto. Need maybe state "proof by contradiction": Suppose model selects a high-correlation group term as relevant but physical constraint says infeasible; if projection is non-identifiable or false positive under ρ high, then action based solely on it violates feasibility; hence veto. Need formal: Let A be action set. Let C_phys be feasible. Statistical score S(term) > threshold. If C_phys∩A=∅ then argmax S not in feasible set. So veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? Need counterfactual veto scenarios. Need be concrete, verifiable. Could be:
1. Non-exponential family / non-identity link: If using model for metric outcome with heavy-tailed non-exponential likelihood, projection KL ≠ MLE. Prediction: using Laplace projection as if exponential will select wrong terms; veto until likelihood family validated. Verification: posterior predictive calibration, LOO ELPD, residual QQ, Pareto k.
2. High correlation ρ=0.9 and many grouping factors K=3: model selects false positives; prediction: forward search includes correlated redundant group term; counterfactual veto: require refit with ρ-blocked or group-term permutation; if ELPD improvement < 2 SE and physical prior says no, veto.
3. Dense GAMM smooth + weather: Laplace approximation with dense Z may be inaccurate; prediction: smooth term enters then optimal projection unstable; veto action if smooth term's ELPD improvement not robust to posterior draw count and basis dimension; verify via sensitivity to K basis, posterior draws, PIRLS convergence.
Need 3 verifiable RLVR veto scenarios with predictions. Could include "RLVR" as "Reinforcement Learning with Verifiable Rewards" maybe not. Need mention verifiable: holdout, permutation, posterior predictive checks, sensitivity. Need not use betting. Need exact XML.

Need ensure word count >=1000. We can produce ~2500 words. Need XML sections exact and complete. Must not use markdown? It's okay. Need include [PAGE N] citations. Need quote exact source text. Need be careful quotes with special characters. We can quote shorter exact phrases. Need not reproduce all. Need cite exact page markers. Need include "verbatim quotes" with quotation marks. Need no odds/spreads. Need no fake ratios. Need formal equations.

Need maybe mention "GSE+GSI" not necessary. Could mention "decision-theoretic Bayesian" etc.

Let's draft.

Important: The user asks "DRIVE SOURCE: ... PAGES: 25 SOURCE TEXT:" then the paper. We need provide analysis. We must not mention betting lines. Avoid "odds", "spread", "moneyline", "totals". No "bet". Use "sports research" not gambling. Need not use "line".

Need specific page citations. Let's verify page numbers from source:
- Page 1: Abstract + Introduction start. Quote: "Projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making." and "Given a reference model previously built including all variables present in the data, projection predictive inference projects its posterior onto a constrained space of a subset of variables." Good.
- Page 2: "without further restrictions, the projection is not identifiable for these models" exact. Also "there is not a unique solution to the projection." Good.
- Page 3: Figure 2 and related methods. Quote maybe "For GLMs, variable selection has been approached from different perspectives." Not necessary.
- Page 4: "we minimize the KL divergence from the reference model’s predictive distribution to that of the constrained projection" exact. "Goutis (1998) propose to do the projection draw-by-draw" exact.
- Page 5: "projecting a draw λ* from the reference model’s posterior to the projection space λ⊥ in Equation (1) coincides exactly with maximizing its likelihood under the projection model." exact. Also "there is no closed form solution for the projection parameters, and we run iteratively reweighted least squares (IRLS)" exact.
- Page 6: "Without further constraints, even if its observation model belongs to the exponential family, the projection (1) is not identifiable for GLMMs" exact. "there is no unique solution for the parameters in the projection model fitted to μ_i^*" exact. "To make the model identifiable and solve the projection, we propose to further restrict it by integrating out the group parameters u." exact.
- Page 7: "This integral cannot be evaluated in closed form." exact. "The integrals in the above equation do not exist in closed form except for models where p(u|θ) is conjugate to the likelihood π." exact. "As a general purpose solution, we consider a first-order Laplace approximation to the integral" exact. "This optimization problem can be solved efficiently using Penalized Iteratively Re-weighted Least Squares (PIRLS)" exact.
- Page 8: "Optimizing this function with respect to θ provides the maximum likelihood estimates of β, φ" exact. "The identifiability issue that exists in GLMMs is further aggravated by having a dense Z matrix in GAMMs" exact.
- Page 9: "we only consider a model with a certain group parameter if its population parameter has already entered the projection" exact. "Likewise, we only consider an interaction between two variables when both of them have already entered the projection separately." exact. Also Table 1.
- Page 10: "The projections achieve optimal predictive performance." exact. "The projections are smaller with higher correlation." exact.
- Page 11: "The number of grouping factors K is the most significant factor." exact. "Increasing the number of grouping factors in the data multiplies the number of total parameters to estimate." exact.
- Page 12: "High correlation ρ induces more false positives." exact? On page 12 in source: "**High correlation** _ρ_ **induces more false positives.**" Yes page 12. Also "the ratio of true and false positive rates worsens overall." exact.
- Page 13: Bernoulli real data. "The optimal projection threshold used by projpred ... suggests including the first 6 terms" exact. Maybe not.
- Page 14: "The suggested optimal projection by projpred’s heuristic method ... is count ∼ temp + humidity + windspeed + (humidity + temp | month) + (1 | weather) + (1 | season), including only 8 terms out of 23." exact. Good.
- Page 15: "combining projpred with a Laplace approximation gives a good approximation that not only enables accurate variable selection but also scales well to larger number of variables and grouping factors." exact. "We leave the extension of our current framework to other models which do not belong to the exponential family for future work." exact.
- Page 16: sparsity. Quote "The most difficult setting corresponds to medium sparisty thresholds" exact (typo sparisty). Could use.
- Page 17: Table 2. "number of levels is not inducing more false positives to be returned, rather affecting only the true positives rate" exact? Page 17: "In this case it’s clear that the number of levels is not inducing more false positives to be returned, rather affecting only the true positives rate and how quickly the method is able to get all of them right." Good.
- Page 18: Bernoulli figs. "Even in the extreme unrealistic case of 0.9 correlation, the method still identifies around half of the truly relevant effects." exact? Page 19? In source page 19 says "Even in the extreme unrealistic case of 0.9 correlation, the method still identifies around half of the truly relevant effects." Wait page 19 is references start? Let's see source: Page 18 has Figure 9 and text after? It includes "In general, the method does a good job..." then References start. The quote "Even in the extreme unrealistic case of 0.9 correlation..." is before "In general..." on page 19? Actually source page 19 begins "is, for a varying threshold..." and includes "Even in the extreme unrealistic case..." then "In general..." then References. So [PAGE 19] maybe. Need careful. Page 18 includes Figure 8/9 and text? The source text after Figure 8/9: "is, for a varying threshold..." likely page 19. We can cite [PAGE 19] for the 0.9 correlation quote. But page 19 is references start after that. Source page 19 has "is, for a varying threshold t ∈[0,...,1]..." and "Even in the extreme unrealistic case..." yes. Use [PAGE 19].
- Page 20-25 references. Not needed.

Need include "PAGE 25" maybe no content except references. We can cite [PAGE 25] if mention complete reference list? Not needed.

Need formal equations:
KL divergence:
\[
\mathrm{KL}\!\left(p(\tilde y|\lambda^*) \,\|\, q_\perp(\tilde y|\lambda)\right)
= \mathbb{E}_{p(\tilde y|\lambda^*)}\left[\log p(\tilde y|\lambda^*)-\log q_\perp(\tilde y|\lambda)\right]
\]
in nats. If log2 bits. The projection:
\[
\lambda_\perp = \arg\min_{\lambda \in \Lambda_\perp} \mathbb{E}_{p(\lambda^*|D)}\mathbb{E}_{p(\tilde y|\lambda^*)} [-\log q_\perp(\tilde y|\lambda)]
\]
Actually drop constant. Need include constrained space Λ⊥. Good.

GLMM:
\[
y_i \mid \beta,u \sim \pi(g(\eta_i),\phi),\quad \eta_i=x_i^\top\beta+z_i^\top u_i,\quad u_i\sim p(u_i|\theta)
\]
The group parameters may be vector per group; use u_i. 
Integrated likelihood:
\[
L(\beta,\theta,\phi;y)=\prod_i \int p(y_i|g(x_i^\top\beta+z_i^\top u_i),\phi) p(u_i|\theta)du_i
\]
or for groups:
\[
\prod_g \int \prod_{i\in g} p(y_i|g(\eta_i),\phi) p(u_g|\theta) du_g
\]
Paper's equation uses product over i and u_i. Use both.

Laplace:
\[
h(u,\beta,\theta,\phi)=\sum_i \log p(y_i|g(\eta_i),\phi)+\sum_i \log p(u_i|\theta)
\]
\[
\tilde u(\theta), \tilde\beta(\theta)=\arg\max_{u,\beta} h(u,\beta,\theta,\phi)
\]
\[
\log p_{\rm LA}(y|\theta,\phi) \approx h(\tilde u,\tilde\beta,\theta,\phi)+\frac{d_u}{2}\log(2\pi)-\frac{1}{2}\log\det\left[-\nabla^2_{u,\beta} h(\tilde u,\tilde\beta,\theta,\phi)\right]
\]
This is a formal Laplace approximation. Need units: log-likelihood nats; Hessian units inverse parameter^2, determinant; d_u dimensionless count; logdet term nats plus constant. Good. Paper says first-order Laplace. This equation is standard. Good.

PIRLS:
\[
(\beta,u)^{(t+1)}=(\beta,u)^{(t)} + \left[ \left(X^*\right)^\top W (X^*) \right]^{-1} \left(X^*\right)^\top W r
\]
Maybe not necessary. But can include generic.

GAMM:
\[
\eta_i = x_i^\top\beta + z_i^\top u + \sum_{j=1}^J f_j(x_i),\quad f_j(x)=\sum_{k=1}^K \gamma_{jk}b_k(x)
\]
with penalty:
\[
\mathcal{P}(\gamma)=\sum_j \lambda_j \gamma_j^\top S_j \gamma_j
\]
or quadratic penalty. Units: λ smoothing parameter. Break down if dense Z and large K. Good.

Need mention "ELPD" units: expected log predictive density, nats per observation. LOO ELPD estimate:
\[
\widehat{\mathrm{ELPD}}_{\rm LOO}=\sum_{i=1}^N \log p(y_i|y_{-i})
\]
in nats. Pareto k diagnostic. Good.

Need "singularity/breakdown regimes" exact: 
- non-identifiability when group parameters not integrated: map from (β,u) to μ has null space; \eta = Xβ+Zu has rank deficiency if Z includes intercept and group intercept? Actually unidentifiable due to group terms; paper says no unique solution. Formal: There exists δ≠0 with Xδβ + Zδu = 0, so same μ. This is a singularity. Breakdown if not constrained. 
- Laplace approximation breakdown if h not unimodal or posterior group variance large; integral not Gaussian; first-order Laplace error O(d_u^{-1})? Actually Laplace error order. Need not specify exact order unless known. Could say "error controlled by dimension and curvature; can fail under weak curvature/separations". 
- GAMM dense Z makes integral intractable even Gaussian single smooth. 
- Non-exponential family: KL minimization not equal MLE; projection invalid. 
- High correlation ρ=0.9 increases false positives; K large dilutes. 
- sparsity medium hardest. 
- LOO LOO Pareto k high. 
- selection threshold can cause jumps.

Need "cross-layer veto adjudication" with physical/biomechanical/weather veto proof. Need maybe state formal proof:
Let \(\mathcal{A}\) be action set; let \(\mathcal{V}_{\rm phys}\subset\mathcal{A}\) be outcomes satisfying physical constraints (e.g., athlete load < tissue tolerance, biomechanical joint angle within range, weather safety threshold). Let \(\hat a_{\rm stat}=\arg\max_{a\in\mathcal{A}}\widehat{\mathrm{ELPD}}(a)\). If \(\hat a_{\rm stat}\notin\mathcal{V}_{\rm phys}\), then action is vetoed. Proof: feasibility is a hard constraint; no statistical score can make infeasible action feasible. The statistical model can select covariates but cannot override constraints. Need cite [PAGE 9] "sensible according to common modelling practices" as structural prior. [PAGE 6] "no unique solution" means unidentifiable group term cannot veto physical. [PAGE 15] future work non-exponential. Good.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need write:
- Crisis habit regression: under pressure, a team/athlete reverts to historical habit; model as group-level intercept/slope or smooth in time. Projection tests whether the habit term improves ELPD. If not, discard; if yes, still subject to physical veto.
- Counter-trap: opponent adapts to the habit; model as interaction between own group effect and opponent group effect. Forward search only admits interaction after main effects [PAGE 9]. This prevents spurious counter-trap interactions.
- Clock: time remaining/period effects as smooth function of clock. Need use GAMM smooth terms; but dense Z and Laplace cost [PAGE 8]. Validate with LOO by match/period. Avoid treating clock as linear if nonlinear; but smooth can overfit. Use projection to see if smooth term needed.
- Recursive theory of mind: model of opponent's model of you; multilevel terms by opponent and context. But without data, high false positives under K large [PAGE 11]. Use counterfactual veto. 
Need not be too speculative? But section required. Use sports examples no betting. Fine.

Need "RLVR counterfactual vetoes": 3 scenarios. Need "verifiable" and "predictions". Let's design them around paper:
1. Non-exponential outcome: e.g., sports metric with zero-inflated/censored or heavy-tailed. Prediction: projection based on MLE/IRLS will not equal KL-optimal; term selection unstable. Veto if posterior predictive check rejects exponential family and LOO ELPD does not improve. Verification: fit alternative likelihood, compare LOO ELPD, check calibration. Cite [PAGE 5] projection coincides with MLE only for exponential family; [PAGE 15] non-exponential left future work.
2. High correlation and many grouping factors: ρ=0.9, K=3, D=10, V=1. Prediction: false positive rate rises; forward search may include correlated group term. Counterfactual veto: permute group labels or refit with correlation blocked; if ELPD improvement < 2 SE and physical prior says no, veto. Verification: ROC/ELPD threshold. Cite [PAGE 12] high correlation; [PAGE 11] K most significant; [PAGE 10] smaller with higher correlation. 
3. Dense GAMM smooth weather: add s(temp), s(humidity), s(windspeed) with group intercepts. Prediction: Laplace/PIRLS unstable; optimal projection changes with basis dimension/draws; weather veto. Counterfactual: if smooth term's inclusion not robust to half the posterior draws and basis k, veto. Verification: sensitivity analysis, PIRLS convergence, LOO ELPD SE. Cite [PAGE 8] dense Z; [PAGE 7] Laplace; [PAGE 14] GAMM optimal 5 of 9 terms. 
Need maybe mention "RLVR" as "Reinforcement Learning with Verifiable Rewards" not in paper. We can phrase "RLVR-style counterfactual veto" with verifiable reward = LOO ELPD improvement and physical feasibility. Need avoid invented. Good.

Need word count. Let's write ~3000 words. Ensure XML sections exact. Need include [PAGE N] markers in each section. Need verbatim quotes. Use quotation marks. Need "PAGE" uppercase. Good.

Need not overdo. Let's compose.

Potential issue: The instructions say ">= 1,000-WORD DEPTH across these exact XML sections" and THINK_TRACE >=400. We can make each substantial. Need exact XML section names. We'll include no extra sections? We can include only specified. Need no markdown headings outside? Fine.

Need ensure no betting terms. Avoid "odds", "line", "spread", "total", "moneyline", "bet". "Line" might appear as "lineage" or "linear predictor" okay? Strict invariant says never mention spreads, totals, moneylines, or odds. "line" alone not prohibited but avoid ambiguous. Use "linear predictor" is okay? It contains "line" not "line" as betting. But "betting lines" zero. We can use "linear predictor" as technical. Should be fine. Avoid "line" in betting context. No "odds". Good.

Need maybe cite exact quote [PAGE 1] "projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making." Need capitalize? Verbatim exact from source: "Projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making." Good.

Need quote [PAGE 2]: "without further restrictions, the projection is not identifiable for these models" exact lower-case after comma? Source: "because, without further restrictions, the projection is not identifiable for these models (Bickel and Doksum, 1977), that is, there is not a unique solution to the projection." We can quote "without further restrictions, the projection is not identifiable for these models" exactly. Good.

[PAGE 4]: "we minimize the KL divergence from the reference model’s predictive distribution to that of the constrained projection" exact.

[PAGE 5]: "there is no closed form solution for the projection parameters, and we run iteratively reweighted least squares (IRLS)" exact.

[PAGE 6]: "Without further constraints, even if its observation model belongs to the exponential family, the projection (1) is not identifiable for GLMMs" exact. "there is no unique solution for the parameters in the projection model fitted to" maybe math. Good.

[PAGE 7]: "This integral cannot be evaluated in closed form." exact. "The integrals in the above equation do not exist in closed form except for models where p(u|θ) is conjugate to the likelihood π." exact with math. "As a general purpose solution, we consider a first-order Laplace approximation to the integral" exact.

[PAGE 8]: "The identifiability issue that exists in GLMMs is further aggravated by having a dense Z matrix in GAMMs" exact.

[PAGE 9]: "we only consider a model with a certain group parameter if its population parameter has already entered the projection." exact. "Likewise, we only consider an interaction between two variables when both of them have already entered the projection separately." exact.

[PAGE 10]: "The projections achieve optimal predictive performance." exact. "The projections are smaller with higher correlation." exact.

[PAGE 11]: "The number of grouping factors K is the most significant factor." exact. Note source has "**The number of grouping factors** _K_ **is the most significant factor.**" Good.

[PAGE 12]: "High correlation ρ induces more false positives." exact. Source uses _ρ_ italics. Good.

[PAGE 14]: "including only 8 terms out of 23." exact. Good.

[PAGE 15]: "combining projpred with a Laplace approximation gives a good approximation that not only enables accurate variable selection but also scales well to larger number of variables and grouping factors." exact. "We leave the extension of our current framework to other models which do not belong to the exponential family for future work." exact.

[PAGE 17]: "the number of levels is not inducing more false positives to be returned, rather affecting only the true positives rate" exact.

[PAGE 19]: "Even in the extreme unrealistic case of 0.9 correlation, the method still identifies around half of the truly relevant effects." exact. Need quote if page 19. Good.

Need maybe mention "GSE+GSI" no.

Let's write with equations in LaTeX. Need ensure XML doesn't break due to special characters? Use `&` escaped? In XML, `&` should be `&amp;`. But we are not strict XML parser maybe. We should escape ampersands in text. But LaTeX uses `&` in align? Avoid align with &. Use display math no align. Use `\top` no ampersand. If using `\mathbb{E}`, okay. Need avoid `<` or `>` in text? Could use `\le`. Fine. In XML, `>` okay but `<` not. Avoid `<` in text. Use `\le`. Good. Ampersands in text: use "and". Avoid `&`. In equations, if no align, no ampersand. Good.

Need not use `&` in "GSE + GSI" if mention. Avoid.

Need produce final only. Let's draft full.

Need count words roughly. THINK_TRACE maybe 500. SOURCE_OPERATORS maybe 600. Others 300 each. Total >2000. Good.

Let's compose carefully.

Potential challenge: "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Need explicitly list units and assumptions. We can include bullet list inside section. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include "Page citations". Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" "Physical/biomechanical/weather veto proof." Include formal proof with feasible set. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 scenarios. Use numbered list. Good.

Let's write final.

Double-check no betting terms. "action set" okay. "sports research" okay. "match" okay. No "odds". "line" in "linear" okay? Strict says never mention spreads, totals, moneylines, or odds. "linear" not prohibited. "baseline" okay. Fine.

Need "verbatim quotes" exact. I should not alter quote punctuation. Use quotes. The source uses "Kullback-Leibler (KL) divergence"; use exact. Good.

Need maybe "ELPD" units: "expected log predictive density" in nats per observation. The paper uses ELPD. Good.

Need "SI/information/probability units": KL nats; log predictive density nats; probabilities dimensionless; response units; weights inverse variance; smoothing λ dimensionless? Actually smoothing parameter multiplies penalty; units depend. We can say dimensionless if basis and coefficients scaled. Good.

Need mention "Bayesian posterior" probability density not normalized? Fine.

Need "exact singularity/breakdown regimes": include null space condition. Formal:
\[
\exists \delta=(\delta_\beta,\delta_u)\neq 0 \quad \text{such that}\quad X\delta_\beta+Z\delta_u=0,
\]
so \(\eta\) unchanged. This is exact. Good. For GAMM dense Z, integral intractable. Good.

Need "multi-week traps": maybe discuss cumulative data over weeks and nonstationarity. Use smooth terms. Good.

Need "crisis habit regression vs counter-trap vs clock": maybe phrase exactly. Good.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central move is to separate estimation from selection: a rich reference model is estimated first, then its posterior predictive distribution is projected onto a constrained subspace. The paper states this directly: “Projection predictive inference is a decision theoretic Bayesian approach that decouples model estimation from decision making” [PAGE 1]. Multi-hop, the logic is: (1) estimate a reference posterior \(p(\lambda^*\mid D)\); (2) define a constrained projection family \(q_\perp(\lambda)\); (3) choose \(\lambda\) to minimize predictive KL discrepancy from the reference predictions; (4) order terms by forward search; (5) use LOO ELPD to choose projection size. For ordinary GLMs this is relatively clean because the exponential-family projection can be solved by maximum likelihood or IRLS. The paper says that for exponential-family GLMs, projecting a draw “coincides exactly with maximizing its likelihood under the projection model” [PAGE 5], and when no closed form exists “we run iteratively reweighted least squares (IRLS)” [PAGE 5].

The gray zone begins with multilevel structure. For GLMMs, the same projection is not automatically identified: “Without further constraints, even if its observation model belongs to the exponential family, the projection (1) is not identifiable for GLMMs” [PAGE 6]. The source notes that “there is no unique solution for the parameters in the projection model” [PAGE 6]. The proposed fix is to integrate out group parameters \(u\), which changes the projection likelihood into a marginal likelihood. But that integral is generally intractable: “This integral cannot be evaluated in closed form” [PAGE 7], and for conjugate cases with larger \(u\) dimension it remains computationally infeasible. Hence the second hop: use a first-order Laplace approximation, optimize conditional modes with PIRLS, and optimize only the low-dimensional hyperparameter space \(\theta\). For GAMMs, the same problem is worse because the \(Z\) matrix becomes dense: “The identifiability issue that exists in GLMMs is further aggravated by having a dense Z matrix in GAMMs” [PAGE 8]. This is the exact point where a naive sports workflow can overfit: smooth weather or biomechanical curves can be selected because they reduce training KL, even when the Laplace approximation is brittle.

A second gray zone is selection validation. The paper uses forward search plus LOO, with the structural restriction that “we only consider a model with a certain group parameter if its population parameter has already entered the projection” [PAGE 9]. It also says “we only consider an interaction between two variables when both of them have already entered the projection separately” [PAGE 9]. That is a modeling-practice constraint, not a proof of causality. The simulations show that correlation and grouping-factor count are the main failure axes: “The number of grouping factors K is the most significant factor” [PAGE 11], and “High correlation ρ induces more false positives” [PAGE 12]. The practical audit is therefore not merely whether ELPD improves, but whether the selected term survives correlation-blocking, grouping-factor perturbation, posterior-draw subsampling, and PIRLS convergence checks. In sports research, this means a selected “crisis habit” group effect or a “clock” smooth term is only a candidate explanation; it must be tested against physical, biomechanical, and weather feasibility before it can drive action. The paper itself leaves non-exponential models open: “We leave the extension of our current framework to other models which do not belong to the exponential family for future work” [PAGE 15].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The core projection operator is a KL minimization from the reference predictive distribution to the constrained projection. In information units, KL divergence is measured in nats when natural logs are used, or bits with base-2 logs. Formally, with reference posterior \(p(\lambda^*\mid D)\), reference predictive \(p(\tilde y\mid\lambda^*)\), and constrained projection \(q_\perp(\tilde y\mid\lambda)\), the target is

\[
\mathrm{KL}\!\left(p(\tilde y\mid\lambda^*) \,\|\, q_\perp(\tilde y\mid\lambda)\right)
=
\mathbb{E}_{p(\tilde y\mid\lambda^*)}
\left[
\log p(\tilde y\mid\lambda^*)-\log q_\perp(\tilde y\mid\lambda)
\right],
\]

and the projection solves

\[
\lambda_\perp
=
\arg\min_{\lambda\in\Lambda_\perp}
\mathbb{E}_{p(\lambda^*\mid D)}
\mathbb{E}_{p(\tilde y\mid\lambda^*)}
\left[
-\log q_\perp(\tilde y\mid\lambda)
\right].
\]

The source describes this as the point where “we minimize the KL divergence from the reference model’s predictive distribution to that of the constrained projection” [PAGE 4]. The units are nats per predictive observation; probabilities are dimensionless; the response \(y\) and mean \(\mu\) carry the response’s physical units. The paper’s practical approximation is draw-by-draw projection, following Goutis, and later speedups use a small subset of posterior draws or representative clustered draws [PAGE 4].

For a GLMM, the generative form is

\[
y_i\mid \beta,u \sim \pi\!\left(g(\eta_i),\phi\right),
\qquad
\eta_i=x_i^\top\beta+z_i^\top u_i,
\qquad
u_i\sim p(u_i\mid\theta),
\]

where \(\beta\) are population parameters, \(u_i\) are group parameters, \(\theta\) are hyperparameters, \(\phi\) is dispersion, and \(g\) is the inverse link. The source states the GLMM linear predictor as \(\eta=X\beta+Zu\) [PAGE 6]. To make the projection identifiable, the group parameters are integrated out:

\[
L(\beta,\theta,\phi;y)
=
\prod_i
\int
p\!\left(y_i\mid g(x_i^\top\beta+z_i^\top u_i),\phi\right)
p(u_i\mid\theta)
\,du_i.
\]

The source says “To make the model identifiable and solve the projection, we propose to further restrict it by integrating out the group parameters u” [PAGE 6]. This marginal likelihood is generally not closed form: “This integral cannot be evaluated in closed form” [PAGE 7]. The Laplace approximation uses the unnormalized log joint

\[
h(u,\beta,\theta,\phi)
=
\sum_i \log p\!\left(y_i\mid g(\eta_i),\phi\right)
+
\sum_i \log p(u_i\mid\theta),
\]

with conditional modes

\[
\left(\tilde u(\theta),\tilde\beta(\theta)\right)
=
\arg\max_{u,\beta}
h(u,\beta,\theta,\phi).
\]

A standard first-order Laplace form is

\[
\log p_{\mathrm{LA}}(y\mid\theta,\phi)
\approx
h(\tilde u,\tilde\beta,\theta,\phi)
+
\frac{d_u}{2}\log(2\pi)
-
\frac{1}{2}
\log\det
\left[
-\nabla^2_{u,\beta}h(\tilde u,\tilde\beta,\theta,\phi)
\right],
\]

where \(d_u\) is the dimension of the integrated group-parameter block. The log-likelihood and Laplace correction are in nats; the Hessian has inverse-parameter-squared units, and the log-determinant contributes nats plus constants. The source describes “a first-order Laplace approximation to the integral” [PAGE 7] and says the optimization can be solved with “Penalized Iteratively Re-weighted Least Squares (PIRLS)” [PAGE 7]. On the deviance scale, the paper describes the approximation as a “discrepancy” and “sum of squares form” [PAGE 7]. A schematic version is

\[
-2\log \tilde p_{\mathrm{LA}}(y\mid\theta)
=
\sum_i w_i\left\{y_i-\mu_i(\theta,\tilde\beta,\tilde u)\right\}^2
+
\log\det H(\theta)+C,
\]

with \(w_i\) inverse-variance weights so the squared term is dimensionless. The exact algebraic form is implementation-dependent; the key assumption is that the Laplace integral is dominated by a single regular mode.

For GAMMs, the linear predictor adds smooth terms:

\[
\eta_i
=
x_i^\top\beta
+
z_i^\top u
+
\sum_{j=1}^{J}f_j(x_i),
\qquad
f_j(x)=\sum_{k=1}^{K}\gamma_{jk}b_k(x),
\]

with B-spline basis \(b_k\) and a quadratic penalty such as

\[
\mathcal{P}(\gamma)
=
\sum_j \lambda_j \gamma_j^\top S_j\gamma_j,
\]

where \(\lambda_j\) are smoothing parameters and \(S_j\) penalty matrices. The source notes that GAMMs can be represented as GLMMs and that a “quadratic penalty on the coefficients of the basis functions” is required [PAGE 8]. The dense \(Z\) matrix makes the marginal integral intractable even for conjugate Gaussian models with a single smooth term [PAGE 8].

Assumptions: exponential-family observation model for the MLE-IRLS equivalence; correct inverse link; conditional independence given group parameters; a tractable low-dimensional hyperparameter space \(\theta\); a regular, unimodal Laplace integrand; and a sensible term hierarchy. Exact singularity regimes include the GLMM null space condition

\[
\exists\,\delta=(\delta_\beta,\delta_u)\neq 0
\quad\text{such that}\quad
X\delta_\beta+Z\delta_u=0,
\]

which leaves \(\eta\) unchanged and therefore makes the projection non-identifiable unless \(u\) is integrated or otherwise constrained. Additional breakdown regimes are: non-exponential likelihoods, where KL minimization no longer coincides with maximum likelihood; high-dimensional group parameters, where Laplace or quadrature fails; dense GAMM \(Z\) matrices; extreme correlation, where “High correlation ρ induces more false positives” [PAGE 12]; many grouping factors, where “The number of grouping factors K is the most significant factor” [PAGE 11]; and unstable LOO selection when Pareto-\(\hat k\) diagnostics indicate unreliable importance sampling [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from classical GLMs and GAMs to multilevel extensions and then to decision-theoretic projection. The paper cites McCullagh and Nelder for GLMs, McCulloch and Gelman et al. for GLMMs, Hastie and Tibshirani for GAMs, Verbyla et al. for GAMMs, and Wood for practical GAM/GAMM estimation [PAGE 6, PAGE 8, PAGE 21–23 references]. The projection line runs through Goutis’s KL projection for GLMs and Piironen et al.’s projection predictive inference, with the projpred implementation as the operational endpoint [PAGE 4, PAGE 2]. The retrocausal lesson is that later multilevel complexity does not invalidate the earlier decision-theoretic logic; it exposes where the earlier GLM solution was silently relying on identifiability and closed-form or near-closed-form likelihoods. The paper makes that explicit: “without further restrictions, the projection is not identifiable for these models” [PAGE 2].

Multi-week traps in sports research follow from that lineage. A model selected on one block of weeks can appear stable because the reference model absorbs week-specific group effects. When the next block arrives, the forward-search order may change if correlation structure shifts. The paper’s simulation design is a warning: it fixes \(N=300\), five levels per grouping factor, and sparsity \(0.4\) [PAGE 9], then reports that increasing grouping factors multiplies parameters and dilutes individual contributions [PAGE 11]. In a multi-week sports setting, athlete, team, venue, referee, and weather groupings can multiply quickly. A term that looked relevant in week 1 may be a proxy for a week-specific group effect; a term that looked irrelevant may become relevant after a weather regime change. The paper’s finding that “The projections are smaller with higher correlation” [PAGE 10] is not a guarantee of causal simplicity; it means correlated redundant terms can be discarded predictively, not that the discarded term is physically irrelevant. The GAMM experiment is another trap: the selected projection used “only 5 out of 9 terms” on BikeSharing [PAGE 14], but that is a predictive compression, not a claim that the omitted weather or calendar terms have no physical role. Retrocausally, the safest reading is that projection identifies a minimal predictive summary, while physical and biomechanical constraints must be adjudicated outside the projection.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is the tendency of an athlete or team to revert to a historical response pattern under pressure. In the model, this is naturally represented as a group-level intercept or slope, or as a smooth term in time or score-state. The projection framework is useful because it asks whether the habit term improves predictive density relative to the reference model. But the paper warns that group terms are not free: with many grouping factors, individual contributions are diluted [PAGE 11], and high correlation produces more false positives [PAGE 12]. A “crisis habit” term should therefore enter only after its population-level main effect has entered, matching the paper’s hierarchy rule [PAGE 9]. If the term survives LOO ELPD and correlation-blocking, it is a candidate habit signal; if not, it is a narrative imposed on noise.

Counter-trap reasoning is the opponent’s recursive model of your habit. In statistical form, it is an interaction between your group effect and the opponent’s group effect, or a context-specific slope. The paper’s forward-search constraint is directly relevant: “we only consider an interaction between two variables when both of them have already entered the projection separately” [PAGE 9]. This prevents a counter-trap interaction from being selected before its main effects are supported. The recursive theory-of-mind danger is overfitting the opponent’s adaptation: with \(K=3\) grouping factors and high \(\rho\), the method can return false positives [PAGE 11, PAGE 12]. A counter-trap term should therefore be treated as a hypothesis requiring out-of-sample confirmation, not as an automatic adjustment.

Clock effects are the time-varying layer: period, remaining time, fatigue accumulation, and late-game state. These are best represented as smooth terms in a GAMM, but the paper shows the cost: dense \(Z\) matrices make the marginal likelihood intractable and Laplace/PIRLS is an approximation [PAGE 8, PAGE 7]. The clock term can be real and still be unstable in selection. The recursive mistake is to let a clock smooth absorb crisis habit and opponent adaptation simultaneously. The paper’s GAMM example selects a small projection, “only 5 out of 9 terms” [PAGE 14], which is a warning against interpreting every smooth as a mechanism. The disciplined approach is to separate the clock layer from the habit layer, test incremental ELPD, and require robustness to basis dimension and posterior-draw subsampling. In short: crisis habit regression is a group-effect hypothesis; counter-trap is an interaction hypothesis; clock is a smooth-term hypothesis. Each must pass the same projection gate, and none should bypass the physical veto.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is necessary because statistical projection is predictive, not physically sovereign. The paper’s own structural rule is that only “sensible according to common modelling practices” models are explored [PAGE 9]. That is a soft prior. A hard veto is stronger: if an action violates a physical, biomechanical, or weather constraint, no ELPD improvement can make it admissible. Formally, let \(\mathcal{A}\) be the action set, \(\mathcal{V}_{\mathrm{phys}}\subseteq\mathcal{A}\) the feasible set satisfying hard constraints, and

\[
\hat a_{\mathrm{stat}}
=
\arg\max_{a\in\mathcal{A}}
\widehat{\mathrm{ELPD}}(a).
\]

If \(\hat a_{\mathrm{stat}}\notin\mathcal{V}_{\mathrm{phys}}\), then the statistical recommendation is vetoed. Proof: feasibility is a hard constraint on the decision space; the projection objective is defined only over predictive distributions, not over physical feasibility. An action outside \(\mathcal{V}_{\mathrm{phys}}\) cannot be made feasible by increasing predictive density. This is not a rejection of the model; it is a restriction of the model’s domain of admissible action.

Physical veto: if the projected model implies an athlete load, recovery time, or exposure beyond a validated tissue-tolerance or safety threshold, the projection is inadmissible. Biomechanical veto: if the selected smooth or interaction term implies joint angles, gait patterns, or movement strategies outside the athlete’s safe biomechanical envelope, the term may still be predictive of historical outcomes but cannot be used to prescribe the action. Weather veto: if temperature, humidity, wind, or surface conditions exceed safety or equipment-operating limits, the weather term must be treated as a boundary condition, not as a variable to be optimized through. The paper’s Laplace approximation is also a caution: when the marginal likelihood is intractable and the approximation is first-order [PAGE 7], a statistically selected term can be an artifact of curvature or dense \(Z\) structure [PAGE 8]. The veto proof is therefore two-stage: first, statistical admissibility requires robust ELPD improvement and stable projection; second, physical admissibility requires membership in \(\mathcal{V}_{\mathrm{phys}}\). The intersection is the only admissible decision set. The paper’s conclusion that projpred plus Laplace “scales well to larger number of variables and grouping factors” [PAGE 15] is a computational claim, not a license to override hard constraints.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Non-exponential outcome veto. Scenario: a sports response is treated as Gaussian or Poisson even though the observed outcome has censoring, zero inflation, or heavy tails. The source’s projection equivalence to maximum likelihood holds for exponential-family observation models [PAGE 5], and non-exponential extensions are explicitly left for future work [PAGE 15]. Prediction: if the family is misspecified, forward search will still produce a solution path, but the selected terms will not be the KL-optimal terms and may be unstable across posterior draws. Verifiable counterfactual: refit with an alternative likelihood, compare LOO ELPD and posterior predictive calibration, and veto any action whose selected term’s advantage disappears or whose residuals reject the exponential family. The veto is triggered when the claimed term is supported only under the misspecified family.

2. High-correlation and many-grouping-factor veto. Scenario: \(K=3\), \(D=10\), all variables vary by group, and pairwise correlation reaches \(\rho=0.9\). The paper reports “The number of grouping factors K is the most significant factor” [PAGE 11] and “High correlation ρ induces more false positives” [PAGE 12]; it also notes that even at \(0.9\) correlation the method still identifies “around half of the truly relevant effects” [PAGE 19]. Prediction: the forward search will include at least one correlated redundant group term, and its ELPD improvement will be small relative to its standard error. Verifiable counterfactual: permute group labels or block the correlated term, rerun the projection, and veto if the ELPD gain falls below two standard errors or if the term order changes under draw subsampling. This is a verifiable reward test: the term must earn its place under a counterfactual correlation-breaking perturbation.

3. Dense-GAMM weather-smooth veto. Scenario: a GAMM uses smooth terms for temperature, humidity, and wind plus group intercepts for venue and period. The source warns that a dense \(Z\) matrix makes the marginal likelihood intractable [PAGE 8] and that the Laplace approximation is first-order [PAGE 7]. Prediction: the selected smooth term’s inclusion will be sensitive to basis dimension, posterior-draw count, and PIRLS convergence; the optimal projection may change from “only 5 out of 9 terms” [PAGE 14] to a different subset under a stricter basis or a different draw set. Verifiable counterfactual: halve the posterior draws, vary the basis dimension, and refit with an independent Laplace/PIRLS initialization. Veto if the weather smooth’s ELPD advantage is not stable across these perturbations or if the implied weather condition exceeds the safety envelope. The physical weather veto remains hard even if the statistical term is stable.
</RLVR_COUNTERFACTUAL_VETOES>
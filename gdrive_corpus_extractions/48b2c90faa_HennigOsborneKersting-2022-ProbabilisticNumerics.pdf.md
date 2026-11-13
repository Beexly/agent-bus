---
source: "HennigOsborneKersting-2022-ProbabilisticNumerics.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 412
model: baidu/ernie-5.5-flash-preview:free
words: 6278
---

<NATIVE_REASONING>
We need answer user's request. They provided DRIVE SOURCE and many pages of text, ask no explicit question except huge system-like instructions. Need produce final with exact XML sections: <THINK_TRACE>, <SOURCE_OPERATORS_AND_EQUATIONS>, <RETROCAUSAL_GENEALOGY>, <RECURSIVE_THEORY_OF_MIND>, <CROSS_LAYER_VETO_ADJUDICATION>, <RLVR_COUNTERFACTUAL_VETOES>. Need >=1000 words total, each THINK_TRACE >=400 words. Strict invariants: no betting lines. No toy equations. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need likely analyze given text, maybe derive operators/equations from Probabilistic Numerics. User didn't ask specific sports question; likely expects deep reasoning based on source. Need avoid mentioning spreads/totals/odds. We can discuss probabilistic numerics, Gaussian algebra, quadrature, linear solvers, optimization, line search. Need cite pages with quotes. Need maybe create RLVR counterfactual vetoes (3 verifiable scenarios + predictions). Crisis habit regression vs counter-trap vs clock in Recursive Theory of Mind? It's weird. Need adapt: crisis habit regression maybe numerical method habits, counter-trap, clock. Need cross-layer veto physical/biomechanical/weather? Since source not sports, can veto irrelevant physical/biomechanical/weather assumptions. Need ensure no betting lines. Also need maybe mention no sports event? But can answer as analysis of source. Need 1000+ words. Need include equations in LaTeX. Need cite exact [PAGE n] markers and verbatim quotes. We have pages 2-223. Need use exact quotes. Need be careful quote length but okay.

Need produce final only XML sections. Let's plan.

THINK_TRACE >=400 words. Deep multi-hop derivation & gray-zone audit. We can reason about core claims: probabilistic numerics treats computation as inference, Gaussian distributions closed under linear maps, Bayesian quadrature, trapezoidal rule as Wiener prior posterior mean, linear solvers CG as Gaussian inference, noisy line search. Need discuss gray zones: calibration, prior misspecification, positive definiteness not encodable in Gaussian prior, noise in linear algebra, stochastic gradients. Use citations. Need maybe include equations? THINK_TRACE can have narrative. Need >=400 words. Ensure no forbidden betting lines. Fine.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Need list equations from source: Bayes theorem [PAGE 33], Gaussian density [PAGE 35], affine transform [PAGE 36], product/conditioning [PAGE 36], GP regression mean/cov [PAGE 46], linear operator closure [PAGE 51], Kalman filter/smoother [PAGE 57-58], SDE [PAGE 61], Bayesian quadrature posterior [PAGE 88], trapezoidal rule [PAGE 89], CG matrix-vector observations [PAGE 146? 137?]. Need units: probabilities dimensionless, x units maybe SI, integral units [f]*[x], variance units square. Information units nats if log base e, bits if log2. Need exact quote maybe each. Breakdown/singularity: O(N^3) covariance inversion, DARE fixed point if no eigenvalues on unit circle [PAGE 66], Gaussian quadrature v=0 [PAGE 115], positive definiteness cone not linear [PAGE 159], line search noise breakdown. Need formal equations.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need discuss lineage: Poincaré [PAGE 17], Sul'din, Sard, Kimeldorf Wahba, Larkin, Diaconis, O'Hagan, Hennig et al. 2012 workshop [PAGE 20]. Multi-week traps: mistaking Monte Carlo randomness for PN, assuming calibration, ignoring prior scale, overfitting hyperparameters, confusing Bayesian with stochastic. Need cite.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret as model of agent predicting its own future numerical choices. Crisis habit regression: when uncertainty high, algorithm regresses to safe generic methods/randomness. Counter-trap: explicit probabilistic agent model, expected loss, design rules. Clock: stopping criteria, convergence rates, computational budget, wall-clock time. Need cite pages: numerical agent [PAGE 15], stopping [PAGE 16], calibration [PAGE 24], randomness meditation [PAGE 124], weak adaptivity [PAGE 97]. Could formalize belief recursion maybe.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since no physical domain, veto any assumptions about physical agents. But can map to computational layers: hardware/physical constraints (GPU cost, carbon) [PAGE 13], memory/time, numerical precision. Biomechanical/weather not applicable; veto as out-of-scope. Need proof: source defines numerical task as deterministic function and computational uncertainty; no measurable physical state. Could say if a model requires weather/biomechanical variables, veto unless mapped to computational resource variables (time, memory, energy). Formal proof: domain X abstract [PAGE 39], input type irrelevant. Need cite.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe Reinforcement Learning from Verifiable Rewards? Need create scenarios where probabilistic numerics claims vetoed by verifiable checks. Need 3: (1) Monte Carlo O(N^-1/2) vs deterministic quadrature on smooth integrand; prediction error rates. (2) line search noise: classic spline bisection fails, probabilistic line search robust; verifiable on synthetic noisy function. (3) CG probabilistic solver uncertainty calibration: Rayleigh regression scale should produce standardized errors; if not, veto. Need predictions. Need maybe include equations. Need ensure no betting.

Need total >=1000 words. Likely 2500 words. Need be careful with XML tags. Could have markdown inside? Fine. Need no analysis in final. Need maybe include word count? Not necessary. But ensure THINK_TRACE >=400 words. I can count roughly. Need maybe use XML-like tags exactly.

Potential issue: user says STRICT INVARIANTS: >=1,000-WORD DEPTH across these exact XML sections. So final should have exactly those sections? Could include only those. Need no extra. Need THINK_TRACE >=400 words. I'll make lengthy.

Need cite [PAGE N] markers and verbatim quotes. Need include many quotes. Exact quotes from provided text. Need avoid too long maybe okay. Need ensure quotes exact? We can copy from prompt. Need watch for weird ligatures? Fine.

Let's draft each section.

THINK_TRACE: Need >=400 words. Write about source's central theorem: computation as inference. Multi-hop: from probability rules to Gaussian closure to numerical tasks. Gray-zone audit: calibration, prior choice, stochasticity, nonlinearity. Use citations.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX. Could structure bullet list.

Equations:
- Bayes: p(x|y)=... [PAGE 33] quote "Computing the posterior amounts to inference on x from y." Units: dimensionless probability density; if x has unit U_x, p(x) U_x^-1.
- Gaussian pdf Eq 3.1 [PAGE 35]. Units: Σ units U_x^2, precision inverse.
- Affine transform Eq 3.4 [PAGE 36]. If x units U, A dimensionless or output/input units.
- conditioning Eq 3.13 [PAGE 37].
- GP regression Eq 4.6/4.7 [PAGE 46].
- Linear operators derivatives integrals [PAGE 51].
- Kalman filter [PAGE 57] equations, RTS smoother [PAGE 58]. Units: state units, Q covariance square units.
- SDE [PAGE 61] dx = F x dt + L dω; units: F s^-1, L units x / sqrt(s), Wiener variance time.
- Bayesian quadrature [PAGE 88] m, v. Units: F units f*x; k units f^2; K units f^2*x^2? Need check: k(x,x') units f^2, integrate dx dx' gives f^2 x^2. k_X units f^2 x. v units f^2 x^2. Good.
- Trapezoidal rule [PAGE 89] posterior mean and variance [PAGE 90?] quote.
- CG projection [PAGE 149? Actually page 149 in text says Evaluation Strategies? Provided [PAGE 149] is 17 Evaluation Strategies? In prompt [PAGE 149] begins 17 Evaluation Strategies. It says observations Zi = ADi. cite [PAGE 149].
- positive definiteness cone [PAGE 159] quote.
- line search Wolfe [PAGE 219] equations. Need formal.

Need mention singularity/breakdown regimes: matrix inversion O(N^3) [PAGE 48], GP Gram matrix inversion [PAGE 48], DARE fixed point [PAGE 66], Gaussian quadrature variance zero [PAGE 115], positive definiteness not Gaussian [PAGE 159], noise breaks equivalence [PAGE 194?] [PAGE 206? Actually page 206 says if noise, assumptions fly out. cite [PAGE 206]. Also line search noise [PAGE 222].

RETROCAUSAL_GENEALOGY: Need historical lineage and multi-week traps. Cite [PAGE 17] Poincaré, [PAGE 18] Sul'din etc, [PAGE 20] 2012 workshop, [PAGE 21] not Bayesian naming. Traps: equating probabilistic with random [PAGE 11], [PAGE 124]; ignoring calibration [PAGE 24]; generic methods inefficient [PAGE 15]; overreliance on high precision [PAGE 27].

RECURSIVE_THEORY_OF_MIND: Need terms. Could define recursive belief: agent's belief about its own future action. Crisis habit regression: under crisis, revert to stochastic/generic; counter-trap: probabilistic model + expected loss; clock: stopping/time. Cite [PAGE 15] agent, [PAGE 16] stop, [PAGE 17] exploration, [PAGE 97] weak adaptivity, [PAGE 124] PRNG no coherent decision-theoretic motivation.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need maybe formal: Let physical state s_phys not in computational data. Since numerical problem defined by source code [PAGE 116] "numerical tasks are communicated ... error-free, formally complete, channel of source code." If covariate has no causal projection to f evaluations or computational cost, veto. For biomechanical/weather, no measurable operator in source. But if mapped to resource cost (wall-clock, GPU) [PAGE 13], maybe allowed as cost layer. Need proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need predictions. Maybe formal:
1. Smooth integrand f(x)=exp(-sin^2(3x)-x^2) [PAGE 81]. Prediction: trapezoidal error O(N^-2), Monte Carlo O(N^-1/2). Verify by exact quadrature. Cite [PAGE 106] says after 32 error 1.3e-6 and MC N~8.8e10. Veto random MC for smooth low-dim.
2. Noisy line search: objective with derivative noise. Classic spline interpolation can choose wrong side; probabilistic line search posterior. Prediction: classic failure probability high when SNR <=1, probabilistic recovers. Cite [PAGE 222].
3. CG calibration: On spd SARCOS matrix, Rayleigh regression scale omega should make standardized errors z ~ N(0,1). Veto if omega=1 or trace bound yields overwide intervals; verify empirical std. Cite [PAGE 192].

Need maybe mention exact predictions with numeric values. Good.

Need ensure no betting lines. Avoid words odds? Could mention no. Avoid spread/total/moneyline. Fine.

Need final with XML. Let's write robustly. Need maybe no citations outside [PAGE]. Use exact [PAGE N].

Double-check word count: THINK_TRACE maybe 600. Others 300 each -> total 2100. Good.

Need be mindful: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We must cite exact markers for statements. Use quotes verbatim. Need include quotes for key claims. Could be many. Need ensure quotes from provided source. Use short quotes. Need maybe not every sentence but enough.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So if I create RLVR metrics, not toy. Use formal verifiable estimators. Avoid arbitrary ratios. Use standardized error z. Good.

Need perhaps mention information units: entropy Eq 3.2 [PAGE 35] uses log; if natural log units nats, log2 bits. Need cite. Good.

Need no hidden chain-of-thought? Final can include high-level reasoning, not private. It's allowed? The user asks think trace. We provide. Good.

Let's draft final. Ensure XML tags closed. Use maybe line breaks.

Check THINK_TRACE word count roughly: I'll write 4 paragraphs ~550 words. Need >=400. Let's count mentally:
Paragraph 1 ~160, 2 ~160, 3 ~160, 4 ~140 = 620.

Need maybe include equations in THINK_TRACE? Not necessary.

Let's compose final.

Need ensure exact XML sections only. No preamble.

Potential issue with XML containing LaTeX underscores? Fine. Could use escaped? Not needed.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source defines Probabilistic Numerics as a two-part reframing of numerical computation: first, uncertainty about numerical outputs is represented by probability measures; second, numerical algorithms are treated as agents that choose computations by decision theory. The first claim is explicit: “That we are thus uncertain about the answer to a numerical problem is one of the two central insights of probabilistic numerics” [PAGE 13]. The second claim is equally explicit: “pn treats numerical algorithms just as machine learning often treats its algorithms: as agents” [PAGE 15]. From these two claims, the book derives a unified pipeline: choose a prior model over the latent numerical quantity, write a likelihood linking computable evaluations to that quantity, infer a posterior, and then use an expected-loss rule to select further computations. This pipeline is not a metaphor. It is instantiated mathematically through Gaussian algebra, Gaussian processes, state-space filters, Bayesian quadrature, probabilistic linear solvers, and probabilistic line searches.

A multi-hop derivation begins with the sum and product rules of probability. The source states that “the marginal distribution is given by the sum rule” and that “the conditional distribution p(x | y) ... is provided implicitly by the product rule” [PAGE 33]. Bayes’ theorem then becomes the central inference operator: posterior equals likelihood times prior divided by evidence [PAGE 33]. The book immediately specializes this to Gaussian distributions because “Gaussian distributions map probability theory to linear algebra” [PAGE 37]. The key closure properties are affine transformation and conditioning. If \(x\) is Gaussian and \(y = Ax + b + \varepsilon\) with Gaussian noise, then the posterior remains Gaussian [PAGE 36]. This is the algebraic engine behind regression, quadrature, filtering, and linear solvers.

The next hop is from finite-dimensional Gaussian regression to Gaussian processes. The source defines a Gaussian process as a probability measure such that every finite marginal is multivariate Gaussian: “for any finite subset ... the probability assigned to function values ... is given by the multivariate Gaussian probability density” [PAGE 46]. This permits inference over functions, derivatives, and integrals. The crucial closure property is that differentiation and integration are linear operators, so a Gaussian process remains Gaussian under such operations. The source writes that “all partial derivatives and integrals against ν are jointly Gaussian (process) distributed” [PAGE 51]. This is the formal bridge between differential equations, quadrature, and probabilistic numerics.

The first concrete numerical task, univariate integration, exposes both the strength and the gray zone of the framework. Bayesian quadrature places a Gaussian process prior on the integrand and uses exact function evaluations as Dirac-likelihood observations. The posterior over the integral is Gaussian, with mean and variance given by kernel integrals [PAGE 88]. If the prior is a Wiener process, the posterior mean quadrature rule becomes the trapezoidal rule: “The trapezoidal rule is the posterior mean estimate ... under any centred Wiener process prior” [PAGE 89]. This is a powerful reinterpretation: a classical deterministic rule is recovered as a Bayesian point estimate. But the gray zone is calibration. The posterior variance under the Wiener prior is conservative; the source notes that “The non-adaptive GP error estimates ... are under-confident” [PAGE 106]. Thus, probabilism alone does not guarantee calibrated uncertainty. The prior’s smoothness class, scale, and kernel choice determine whether the reported variance is a useful error estimate.

A second gray zone appears in linear algebra. The source observes that “Matrix inversion is in fact a nonlinear operation” [PAGE 137]. Consequently, a Gaussian belief over \(A\) does not induce a Gaussian belief over \(A^{-1}\). The book therefore compares inference on \(A\), inference on \(H = A^{-1}\), and direct inference on \(x\). It shows that conjugate gradients can be interpreted as the mean estimate of a Gaussian model under structured covariance assumptions [PAGE 177]. But positive definiteness is not linearly encodable: “the space of positive definite matrices is a cone, a nonlinear sub-space” [PAGE 159]. The Gaussian posterior can assign mass outside the cone, so the method can know a constraint yet fail to use it during inference. This is a recurring epistemic trap: not all known structure can be encoded without sacrificing tractability.

The final hop is optimization. In deterministic settings, line searches and quasi-Newton methods can be derived as Gaussian or local regression procedures. But modern machine learning introduces stochasticity through sub-sampling. The source states that batching makes the loss approximately Gaussian around the full loss, with variance proportional to inverse batch size [PAGE 217]. This destroys the Dirac-likelihood assumption. Classical spline line search can become brittle: “The noise causes oscillations in the spline interpolant ... that, in particular, cause new local minima” [PAGE 222]. The probabilistic line search replaces Boolean Wolfe termination with posterior probabilities and replaces deterministic bisection with Bayesian quadrature over the line. The gray zone is that inference itself costs computation, but the book frames this cost as an investment: “the computational expense incurred by a numerical algorithm must be judged at the level of the algorithm as a whole” [PAGE 126].

Across all layers, the deepest audit point is this: Probabilistic Numerics is not merely “adding noise” or “running Monte Carlo.” It is the construction of a generative or inferential model whose posterior mean recovers classical algorithms and whose posterior variance, if calibrated, provides an error model. The failure modes are precise: overconfident priors, misspecified smoothness, unmodeled observation noise, computational intractability, and the impossibility of encoding certain hard constraints in tractable probabilistic forms.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

1. Probability calculus as inference operator

The source gives the sum and product rules as the basis of inference:

\[
p(y) = \int p(x,y)\,dx,
\]

\[
p(x\mid y)p(y)=p(x,y),
\]

and then Bayes’ theorem:

\[
p(x\mid y)
=
\frac{p(y\mid x)p(x)}
{\int p(y\mid x)p(x)\,dx}.
\]

The text states: “Computing the posterior amounts to inference on x from y” [PAGE 33]. Units: probabilities and probability densities are dimensionless measures; if \(x\) has physical unit \([x]\), then \(p(x)\) has unit \([x]^{-1}\), and \(p(x\mid y)\) has unit \([x]^{-1}\). If logarithms are natural, entropy and information are in nats; if base 2, in bits [PAGE 35].

2. Gaussian algebra

The Gaussian density is defined as

\[
\mathcal{N}(x;\mu,\Sigma)
=
\frac{1}{(2\pi)^{D/2}|\Sigma|^{1/2}}
\exp\left(
-\frac{1}{2}(x-\mu)^{\top}\Sigma^{-1}(x-\mu)
\right),
\]

where \(\mu\in\mathbb{R}^{D}\) and \(\Sigma\in\mathbb{R}^{D\times D}\) is symmetric positive definite [PAGE 35]. Units: if \(x\) has unit \(U\), then \(\mu\) has unit \(U\), \(\Sigma\) has unit \(U^{2}\), and \(\Sigma^{-1}\) has unit \(U^{-2}\).

Affine closure:

\[
x\sim\mathcal{N}(\mu,\Sigma),
\quad
y=Ax+b
\quad\Longrightarrow\quad
y\sim\mathcal{N}(A\mu+b,A\Sigma A^{\top}).
\]

The source notes: “Gaussians are a family of probability distributions that are preserved under all linear operations” [PAGE 35]. Units: \(A\) carries units \([y]/[x]\); \(b\) carries units \([y]\).

Gaussian conditioning:

\[
p(x\mid y)=
\mathcal{N}(x;\tilde{\mu},\tilde{\Sigma}),
\]

\[
\tilde{\Sigma}
=
(\Sigma^{-1}+A^{\top}\Lambda^{-1}A)^{-1}
=
\Sigma-\Sigma A^{\top}(A\Sigma A^{\top}+\Lambda)^{-1}A\Sigma,
\]

\[
\tilde{\mu}
=
\mu+\Sigma A^{\top}(A\Sigma A^{\top}+\Lambda)^{-1}(y-(A\mu+b)).
\]

This is the formal update rule used in regression, filtering, and linear solvers [PAGE 36].

3. Gaussian process regression

For a prior \(f\sim\mathcal{GP}(\mu,k)\) and observations \(y=f_X+\varepsilon\), with \(\varepsilon\sim\mathcal{N}(0,\Lambda)\), the posterior is

\[
m_x
=
\mu_x+k_{xX}(k_{XX}+\Lambda)^{-1}(y-\mu_X),
\]

\[
V(x,x')
=
k_{xx'}-k_{xX}(k_{XX}+\Lambda)^{-1}k_{Xx'}.
\]

The source defines the GP by finite marginals: “for any finite subset ... the probability assigned to function values ... is given by the multivariate Gaussian probability density” [PAGE 46]. Units: if \(f\) has unit \([f]\), then \(k(x,x')\) has unit \([f]^2\); \(\Lambda\) has unit \([f]^2\); \(m_x\) has unit \([f]\).

Breakdown regime: exact GP inference requires factorization of the \(N\times N\) Gram matrix \(k_{XX}+\Lambda\), with computational cost \(O(N^{3})\). The source states that the Cholesky decomposition is “the most costly step, at \(O(N^{3})\)” [PAGE 48]. This is a sharp computational singularity: as \(N\to\infty\), exact GP regression becomes intractable without structure or approximation.

4. Linear operators on Gaussian processes

If \(L\) is a linear operator acting on \(f\), then under boundedness conditions \(Lf\) is also a Gaussian process. The source gives derivative and integral covariances:

\[
\operatorname{cov}\left(
\frac{\partial^{\ell}f(x)}{\partial x_i^{\ell}},
\frac{\partial^{m}f(x')}{\partial x_j^{m}}
\right)
=
\frac{\partial^{\ell+m}k(x,x')}
{\partial x_i^{\ell}\partial x_j'^{m}},
\]

\[
\operatorname{cov}\left(
\int_a^b f(x)\,d\nu(x),
f(x')
\right)
=
\int_a^b k(x,x')\,d\nu(x).
\]

The text states that “all partial derivatives and integrals against ν are jointly Gaussian (process) distributed” [PAGE 51]. Units: if \(d\nu\) has unit \([\nu]\), then the integral has unit \([f][\nu]\); the double integral covariance has unit \([f]^2[\nu]^2\).

5. Gauss–Markov processes and state-space filtering

A linear Gaussian state-space model is

\[
x_0\sim\mathcal{N}(m_0,P_0),
\]

\[
x_{t+1}\mid x_t
\sim
\mathcal{N}(A_t x_t,Q_t),
\]

\[
y_t\mid x_t
\sim
\mathcal{N}(H_t x_t,R_t).
\]

The prediction step is

\[
m_{t+1}^{-}=A_t m_t,
\]

\[
P_{t+1}^{-}=A_t P_t A_t^{\top}+Q_t.
\]

The update step uses innovation residual, innovation covariance, and gain:

\[
z_t=y_t-H_t m_t^{-},
\]

\[
S_t=H_t P_t^{-}H_t^{\top}+R_t,
\]

\[
K_t=P_t^{-}H_t^{\top}S_t^{-1},
\]

\[
m_t=m_t^{-}+K_t z_t,
\]

\[
P_t=(I-K_t H_t)P_t^{-}.
\]

The source identifies this as the Kalman filter [PAGE 57]. Units: \(Q_t\) has units of state variance; \(R_t\) has units of observation variance; \(K_t\) is dimensionless if state and observation units match, otherwise it carries the appropriate unit conversion.

The smoother equations are

\[
G_t=P_t A_t^{\top}(P_{t+1}^{-})^{-1},
\]

\[
m_t^{s}=m_t+G_t(m_{t+1}^{s}-m_{t+1}^{-}),
\]

\[
P_t^{s}=P_t+G_t(P_{t+1}^{s}-P_{t+1}^{-})G_t^{\top}.
\]

These are the Rauch–Tung–Striebel smoother equations [PAGE 58].

6. Linear stochastic differential equations

The source defines the linear SDE

\[
dx(t)=F x(t)\,dt+L\,d\omega_t,
\]

with

\[
\mathbb{E}[x(t)]
=
e^{F(t-t_0)}x_0,
\]

\[
\operatorname{cov}(x(t),x(t'))
=
\int_{t_0}^{\min(t,t')}
e^{F(t-\tau)}LL^{\top}e^{F^{\top}(t'-\tau)}
\,d\tau.
\]

The text calls this “the local behaviour of a unique Gaussian process” [PAGE 61]. Units: if \(x\) has unit \(U\) and time has unit seconds, then \(F\) has unit \(\mathrm{s}^{-1}\), \(L\,d\omega_t\) has unit \(U\), and \(Q\) has unit \(U^{2}\). The Wiener process has covariance \(\min(t,t')-t_0\), so its variance grows linearly with time [PAGE 62].

7. Bayesian quadrature

For integral

\[
F=\int_{\mathcal{X}} f(x)\,d\nu(x),
\]

with GP prior on \(f\), the posterior over \(F\) is Gaussian:

\[
p(F\mid Y)=\mathcal{N}(F;m,v),
\]

\[
m
=
m_0+k_X^{\top}K_{XX}^{-1}(Y-m_X),
\]

\[
v
=
K-k_X^{\top}K_{XX}^{-1}k_X,
\]

where

\[
m_0=\int m(x)\,d\nu(x),
\]

\[
k_X=\int k(x,X)\,d\nu(x),
\]

\[
K=\iint k(x,x')\,d\nu(x)\,d\nu(x').
\]

The source writes that these expressions are tractable when the three integrals are available [PAGE 88]. Units: \(F\) has unit \([f][\nu]\); \(v\) has unit \([f]^2[\nu]^2\); \(K\) has unit \([f]^2[\nu]^2\); \(k_X\) has unit \([f]^2[\nu]\).

8. Trapezoidal rule as Bayesian quadrature

With Wiener prior

\[
k(x,x')=\theta^2(\min(x,x')-\chi),
\]

the posterior mean over the integrand is piecewise linear, and the posterior mean of the integral is

\[
\mathbb{E}[F\mid Y]
=
\sum_{i=1}^{N-1}
\frac{\delta_i}{2}
\left(f(x_{i+1})+f(x_i)\right).
\]

The source states: “This is the trapezoidal rule” [PAGE 89]. The corresponding posterior variance is

\[
\operatorname{var}(F)
=
\frac{\theta^2}{12}
\sum_{i=1}^{N-1}\delta_i^3.
\]

For an equidistant grid, this becomes

\[
\operatorname{var}(F)
=
\frac{\theta^2(b-a)^3}{12(N-1)^2},
\]

so the posterior standard deviation contracts as \(O(N^{-1})\) [PAGE 104].

9. Monte Carlo baseline

The importance-sampling estimator is

\[
\hat{F}
=
\frac{1}{N}
\sum_{i=1}^{N}
w(x_i),
\qquad
w(x)=\frac{f(x)}{p(x)}.
\]

The source proves unbiasedness and variance

\[
\operatorname{var}(\hat{F})
=
\frac{1}{N}\operatorname{var}_p(w),
\]

so the standard deviation contracts as \(O(N^{-1/2})\) [PAGE 83]. Breakdown: if \(\operatorname{var}_p(w)\) does not exist, the convergence guarantee fails. The exercise asks for a pair \(f,p\) violating this assumption [PAGE 84].

10. Probabilistic linear solvers and conjugate gradients

The linear problem is

\[
Ax=b,
\]

with \(A\) symmetric positive definite. The iterative solver collects action–observation pairs

\[
z_i=A d_i,
\]

or in matrix form

\[
Z=AD.
\]

The source states that a probabilistic solver constructs a posterior \(p(A\mid D,Z)\) and uses it to choose the next projection [PAGE 149]. For Gaussian models with symmetric Kronecker covariance, the posterior mean can be made symmetric and the algorithm becomes a conjugate direction method [PAGE 156]. Under additional scalar covariance conditions, the algorithm is exactly conjugate gradients [PAGE 177].

Breakdown: exact inference over a general \(N\times N\) matrix has \(N^2\) degrees of freedom; each projection identifies only \(N\) degrees of freedom. The source notes that “At each iteration, the solver identifies N of them perfectly, while learning nothing about the other \(N(N-1)\)” [PAGE 159].

11. Positive definiteness obstruction

The source states: “the space of positive definite matrices is a cone, a nonlinear sub-space of \(\mathbb{R}^{N^2}\)” [PAGE 159]. Therefore, a Gaussian likelihood using only linear terms cannot encode positive definiteness. The posterior mean can be forced into the cone by scaling or by choosing \(W_0S=Y\) [PAGE 174], but the full posterior still assigns nonzero mass outside the cone.

12. Noisy line search and Wolfe conditions

The weak Wolfe conditions are

\[
f(\alpha)
\le
f(0)+c_1\alpha f'(0),
\]

\[
f'(\alpha)\ge c_2 f'(0),
\]

with \(0\le c_1<c_2\le 1\) [PAGE 219]. Units: \(f\) has objective units; \(\alpha\) has input units along the search direction; \(f'\) has objective units per input unit.

The probabilistic line search replaces deterministic interpolation with GP regression. The source says that classical cubic spline interpolation becomes unstable under noise: “The noise causes oscillations in the spline interpolant ... that, in particular, cause new local minima” [PAGE 222].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The intellectual lineage of Probabilistic Numerics in the source is explicitly long. The authors trace it to Poincaré, who asked whether probability could be assigned to unknown but determined numerical quantities: “The need for probability only arises out of uncertainty” [PAGE 17]. Poincaré’s example of the sixth decimal digit of a logarithm is the founding thought experiment: the number is determined, but the agent is uncertain because computation is costly. This is the epistemic core of the book. It is not aleatory randomness; it is uncertainty arising from incomplete computation.

The source then identifies a mid-twentieth-century lineage: Sul’din on function approximation, Sard and Kimeldorf–Wahba on regression, Ajne and Dalenius on integration, and Larkin on inference and computation [PAGE 18]. These names matter because they show that the modern synthesis is not a machine-learning invention. It is a re-merging of numerical analysis, approximation theory, and statistical inference. The book also cites Diaconis, O’Hagan, Skilling, and information-based complexity [PAGE 19]. The 2012 Neural Information Processing Systems workshop is presented as the moment the label “Probabilistic Numerics” was chosen: “In search of an inclusive, short title for the workshop, we had chosen to call it Probabilistic Numerics” [PAGE 20].

A key retro-causal trap is the confusion between probabilistic numerics and stochastic numerics. The source insists: “Importantly, we will not identify probabilistic uncertainty with randomness” [PAGE 23]. Monte Carlo is a stochastic method; probabilistic numerics is an epistemic uncertainty framework. The book later states even more strongly: “Probabilistic Numerics is not just different to stochastic numerics: Probabilistic Numerics is opposed to stochastic numerics” [PAGE 79]. The trap is to assume that because a method samples, randomizes, or uses probabilistic language, it is automatically probabilistic numerics. The source rejects this. A pseudo-random number generator lacks a coherent decision-theoretic motivation: “a prng does not have a coherent decision-theoretic motivation” [PAGE 124].

Another trap is to assume that classical methods are non-probabilistic. The source reverses this: “Classical methods often have clear probabilistic interpretations” [PAGE 22]. The trapezoidal rule is the clearest example: it is the posterior mean under a Wiener process prior [PAGE 89]. Conjugate gradients is another: it can be interpreted as the policy of an agent maintaining a Gaussian belief over \(A\) or \(A^{-1}\) [PAGE 177]. This retro-causal move prevents a multi-week research trap: trying to invent entirely new probabilistic algorithms while ignoring the accumulated numerical stability, convergence theory, and implementation efficiency of classical methods. The source warns: “It would be a mistake to throw them overboard” [PAGE 22].

A third trap is calibration neglect. The book says: “Numerics must report calibrated uncertainty” [PAGE 24]. A posterior mean alone is just a point estimate. If the posterior variance does not track the probable error, the probabilistic output is decorative. The integration chapter demonstrates this: the Wiener-prior trapezoidal error estimate is conservative and under-confident for smooth integrands [PAGE 106]. The linear algebra chapter demonstrates the same issue: a Gaussian posterior over a matrix cannot perfectly encode positive definiteness, and the scale of uncertainty in unobserved directions requires additional assumptions [PAGE 181].

A fourth trap is overestimating the value of high precision. The source observes that modern data-centric computation is dominated not by machine epsilon but by sub-sampling noise: “Sub-sampling of big data sets to speed up a computation regularly causes computational uncertainty many orders of magnitude above the machine’s computational precision” [PAGE 27]. This is why probabilistic line searches and stochastic optimization are central. In such regimes, a deterministic method that pretends evaluations are exact can make catastrophic decisions. The historical lineage therefore runs from Poincaré’s epistemic uncertainty, through classical approximation theory, to modern stochastic computation, but the invariant is the same: computation must quantify what it does not know.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

The source’s recursive theory of mind is the numerical agent model. A numerical algorithm receives evaluations, forms beliefs, and selects actions. The book states: “A numerical method must also provide a rule ... determining which computations are actually performed ... these are decisions” [PAGE 16]. The recursive layer appears when the algorithm’s beliefs include beliefs about its own future actions: where it will evaluate next, when it will stop, and how much computation remains worth spending.

Crisis habit regression is the failure mode in which an uncertain numerical agent retreats to a habit rather than reasoning from its model. The source identifies randomness as one such habit. A pseudo-random generator is “painfully dumb, and are so by design” [PAGE 125]. In a crisis of uncertainty, an agent may default to Monte Carlo because it requires minimal modeling. But the source argues that this is decision-theoretically incoherent: if a random number is treated as an action, it must minimize an expected loss, yet a PRNG “is built with the intent of expressing no preference over its outputs” [PAGE 124]. The habit regression is therefore: high uncertainty → random sampling → apparent safety → loss of structure. The book’s counterexample is the smooth integrand: even the trapezoidal rule, based on a vague Wiener prior, vastly outperforms Monte Carlo on a smooth one-dimensional integral [PAGE 106].

The counter-trap is the probabilistic-agent policy. Instead of retreating to randomness, the agent writes down a model and chooses actions by expected loss. In Bayesian quadrature, the model is a GP prior over the integrand, and the action is node selection. The source says the design rule can be chosen by minimizing posterior variance: “The resulting design rule selects the locations ... such that v is minimised” [PAGE 92]. In linear algebra, the model is a Gaussian belief over \(A\) or \(H\), and the action is the next projection direction [PAGE 149]. In line search, the model is a GP over the univariate objective along the search direction, and the action is the next evaluation point [PAGE 223]. The counter-trap is recursive because the agent’s belief about the objective also determines its belief about which evaluation will most reduce uncertainty.

The clock layer is stopping and computational budgeting. The source states that a numerical agent must decide when to stop: “a numerical agent must decide when to stop” [PAGE 16]. In classical analysis, stopping is often governed by asymptotic convergence rates. In probabilistic numerics, stopping can be governed by posterior uncertainty. If uncertainty is calibrated, the agent can stop when the posterior variance is below a task-specific threshold. The book emphasizes early stopping: “if uncertainty is well-quantified, we may be satisfied with (quantified) vague, and thus cheap answers” [PAGE 16]. This is not laziness; it is rational computation allocation.

However, the clock can be corrupted by bad calibration. If the posterior variance contracts too quickly, the agent stops too early. If it contracts too slowly, the agent wastes computation. The integration chapter shows this with the Student-t error estimate: it is better than the fixed-scale Gaussian estimate but still conservative under the Wiener prior [PAGE 106]. The linear algebra chapter shows this with Rayleigh regression: the scale \(\omega\) must be estimated from observed Rayleigh coefficients to make posterior uncertainty meaningful [PAGE 178].

The recursive equilibrium is therefore:

\[
\pi_t(a)
=
\arg\min_{a}
\mathbb{E}_{p(\text{task}\mid \mathcal{D}_t)}
[\ell(a,\text{task})],
\]

where \(\pi_t\) is the numerical policy, \(\mathcal{D}_t\) is collected computation, and \(\ell\) is a computational loss. The agent’s model must be simpler than the task: “models must be simpler than the problem modelled” [PAGE 86]. The recursive trap is to make the model so complex that inference costs more than the numerical task. The source acknowledges this trade-off repeatedly: hierarchical inference can increase cost, and “it is not always advisable” [PAGE 67]. Thus the mature recursive theory of mind is not “always infer everything.” It is: infer enough to make the next computational decision better, then stop.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

The source permits a strict cross-layer veto of physical, biomechanical, or weather-based explanations unless those variables can be mapped into computational observables. The reason is that the book defines numerical tasks through formal computable relations, not through external physical narratives. The integrand is a deterministic function: “The handful of symbols on paper that make up Eq. (9.1) fully specify a unique deterministic function” [PAGE 82]. The numerical problem is not the physical meaning of the function but the computation of a number from evaluations.

Layer 1: Physical computation layer.  
This layer is admissible when it affects computation cost, memory, precision, or energy. The source explicitly acknowledges physical costs: “The monetary costs of modern massively parallel graphics processing units (GPUs) ... are prohibitive” and “current machine learning models ... are also the cause of avoidable carbon emissions” [PAGE 13]. Therefore, a physical variable such as GPU time, energy consumption, or memory bandwidth can enter the decision model as a cost term. Formally, if \(c(a)\) is the computational cost of action \(a\), then the policy may minimize

\[
a^{*}
=
\arg\min_{a}
\left\{
\mathbb{E}[\ell(a)]
+
\lambda c(a)
\right\},
\]

where \(\lambda\) has units chosen to convert loss to cost. This is not a toy equation; it is a constrained decision problem. But the physical variable must be measurable and causally connected to computation.

Layer 2: Biomechanical layer.  
A biomechanical variable is inadmissible unless the numerical task explicitly includes biomechanical data as part of the function or observation model. The source’s abstraction allows arbitrary input domains: “The type of X does not matter at all since it is ‘encapsulated’ and mapped to a real vector by the features \(\phi\)” [PAGE 39]. Thus, if a biomechanical measurement enters as a feature in a GP regression, it can be used. But if the biomechanical variable is invoked without a formal likelihood or feature map, it is vetoed. The veto proof is: let \(b\) be a biomechanical state. If there is no measurable operator \(H\) such that \(p(y\mid b)\) or \(f(b)\) is defined in the computational model, then \(b\) has no effect on the posterior. Therefore it cannot alter the numerical estimate except by subjective bias.

Layer 3: Weather layer.  
Weather is admissible only if it changes computational resources or enters the data-generating model. For example, temperature may affect hardware throttling, or weather data may be part of an inverse problem. But weather cannot be used as an unstructured explanatory factor for a numerical algorithm’s estimate. The source says numerical tasks are communicated through source code: “numerical tasks are communicated to a numerical algorithm through the error-free, formally complete, channel of source code” [PAGE 116]. If weather is not encoded in that channel, it is not part of the inference problem.

Formal veto condition:

\[
\text{Veto}(Z)
\quad\text{if}\quad
\frac{\partial p(y\mid \mathcal{D})}{\partial Z}=0
\quad\text{and}\quad
\frac{\partial c(a)}{\partial Z}=0,
\]

where \(Z\) is a proposed physical, biomechanical, or weather covariate, \(y\) are computable observations, and \(c(a)\) is computational cost. If a covariate has no derivative effect on either likelihood or cost, it is irrelevant to the decision problem.

The source also warns against models that are more complex than the task: “An agent, and its model of the world, must necessarily be simpler and smaller than the world itself” [PAGE 86]. Adding weather or biomechanical variables without formal relevance violates this principle. Therefore the cross-layer adjudication is: admit only variables that can be written as features, likelihood terms, or computational cost terms; veto all others.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

1. Veto of Monte Carlo for smooth low-dimensional integrands

Scenario: Estimate

\[
F=\int_{-3}^{3}\exp(-\sin^2(3x)-x^2)\,dx.
\]

This is the running example in the source [PAGE 81]. The integrand is smooth and bounded. A Monte Carlo estimator has stochastic error

\[
\operatorname{std}(\hat{F}_{\mathrm{MC}})
=
\sqrt{\frac{\operatorname{var}_p(w)}{N}},
\]

so its expected error contracts as \(O(N^{-1/2})\) [PAGE 84]. A deterministic or probabilistic quadrature rule using a smooth prior can contract faster. For the trapezoidal rule on a differentiable integrand, the source reports convergence approximately \(O(N^{-2})\) [PAGE 106].

Verifiable prediction: On this integrand, after \(N=32\) evaluations, a trapezoidal or higher-order Bayesian quadrature estimate should achieve absolute error near \(10^{-6}\), while Monte Carlo would require roughly \(10^{10}\) evaluations for comparable error. The source states: “after N = 32 evaluations ... the absolute error ... is roughly \(1.3 \times 10^{-6}\)” and “the expected number of required function evaluations is \(N \sim 8.8 \times 10^{10}\)” [PAGE 106].

RLVR veto: If a solver chooses Monte Carlo for this smooth low-dimensional problem solely because it is “probabilistic,” the veto is triggered. The verifiable reward is the observed error versus evaluation count. Monte Carlo is not automatically more principled; it is weaker when the integrand has known regularity.

2. Veto of deterministic spline line search under stochastic gradients

Scenario: A line search receives noisy gradient observations

\[
y'(\alpha)=f'(\alpha)+\eta,
\qquad
\eta\sim\mathcal{N}(0,\sigma^2).
\]

Classical cubic spline interpolation assumes exact values and derivatives. The source shows that noise can create false local minima and wrong bisection decisions: “Once such an erroneous bisection decision is taken, the line search is headed down a dead-end street” [PAGE 222].

Verifiable prediction: If signal-to-noise ratio is near one, a deterministic spline line search will frequently bracket the wrong region and fail to satisfy the true Wolfe conditions. A probabilistic line search, which treats observations as noisy and computes a posterior over the local objective, should have a lower probability of selecting a false descent region. The source describes the probabilistic line search as replacing deterministic interpolation, bisection, and Boolean termination with probabilistic inference [PAGE 223].

RLVR veto: If a line-search implementation uses deterministic interpolation while the gradient noise variance is non-negligible, the method should be vetoed. The verifiable test is: simulate a one-dimensional objective with known minimum, add Gaussian noise to function and gradient, and measure the probability that the returned step lies in the basin of the true minimum. The deterministic method should fail more often as \(\sigma\) increases; the probabilistic method should degrade gracefully.

3. Veto of uncalibrated Gaussian linear-solver uncertainty

Scenario: Use conjugate gradients on a large sparse positive definite system, then attach a Gaussian posterior to the matrix or inverse. The posterior mean can be accurate, but the covariance scale must be calibrated.

The source introduces Rayleigh regression to estimate the unobserved scale \(\omega\) from quantities

\[
a^{(m)}
=
\frac{s_m^{\top} A s_m}{s_m^{\top}s_m},
\]

which are available during conjugate gradients [PAGE 188]. If \(\omega\) is set too large, uncertainty is overestimated; if too small, uncertainty is underestimated. The source shows that using \(\omega=1\) or a loose trace bound can be radically too wide, while fitted \(\omega\) gives a better average-case scale [PAGE 192].

Verifiable prediction: For random projection vectors \(v\), compute the standardized error

\[
z
=
\Sigma_v^{-1/2}(Av-\mathbb{E}[Av]).
\]

If the probabilistic linear solver is calibrated, the empirical distribution of \(z\) should be approximately standard normal. The source states that if the model were perfectly calibrated, “the elements of this vector should be distributed like independent standard Gaussian random variables” [PAGE 192].

RLVR veto: If the posterior covariance predicts individual matrix elements with a scale that is known to be loose by orders of magnitude, the uncertainty claim should be vetoed for decision-making. The verifiable test is to compare empirical coverage of posterior intervals against nominal coverage. A valid probabilistic linear solver must pass a calibration test on held-out matrix-vector products or held-out matrix elements. If coverage is far below nominal, the posterior is overconfident; if coverage is trivially high but intervals are unusably wide, the posterior is not operationally useful.

</RLVR_COUNTERFACTUAL_VETOES>
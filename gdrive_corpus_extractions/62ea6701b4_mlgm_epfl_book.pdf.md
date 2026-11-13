---
source: "mlgm_epfl_book.pdf"
folder: "/CorpusRoot"
pages: 343
model: deepseek/deepseek-v4.1-flash-1017
words: 5799
---

<NATIVE_REASONING>
We need answer to user. They provided huge source text and a "DRIVE SOURCE" with pages 343. Need produce response per strict invariants. But what is the actual question? The user only provided source text and instructions. Need infer task: likely analyze source and produce multi-section response with >=1000 words, exact XML sections. Need not mention betting lines. Need cite pages and verbatim quotes. Need formal LaTeX, units, assumptions, singularities. Need retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. But source is ML book (Barber). We must address "DRIVE SOURCE" maybe from a benchmark requiring "drive source" response? Need craft as GSE+GSI Frontier Reasoning Foundry. It wants deep multi-hop derivation and audit, source operators/equations, genealogy, theory of mind, cross-layer veto, RLVR counterfactual vetoes. Need tie to source. Since no explicit question, we should frame as reading/analysis of the supplied pages and derive a unified interpretation. Need cite exact [PAGE N] markers and verbatim quotes. Need >=1,000 words across exact XML sections. Zero betting lines. ZERO TOY EQUATIONS. Need state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Since source is machine learning, equations include probabilities, KL divergence, PCA, EM, graphical models. Need avoid fake ratios like Force/Fatigue. Use actual operators from source. Need mention pages. Need discuss source pages. Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Hmm likely a template from another domain, but we can adapt to ML source: crisis habit regression = overfitting/local minima/symmetry breaking; counter-trap = regularization/Bayesian sparsity; clock = validation/test splits? Need be careful. Cross-layer veto: physical/biomechanical/weather veto proof. For ML source, cross-layer veto can be "probabilistic consistency / supportiveness / triangulation / conditional independence" as vetoes on any claimed inference. "Physical/biomechanical/weather" seems domain-specific; we can reinterpret as "data-generation/physical measurement/compute constraints" but must include "physical/biomechanical/weather veto proof"? Need address it, maybe say for this source no biomechanical/weather variables appear; the corresponding vetoes map to positivity/supportiveness/triangulation and compute/memory constraints. Need include proof. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need formulate with source equations. Need exact page citations and verbatim quotes. Need include LaTeX. Need avoid invented ratios; only source equations. Need mention units: probabilities dimensionless, entropy nats or bits, covariance units squared of variable, KL nats, eigenvalues squared units, complexity operations. Need singularity regimes: σ²→0 in NN/Parzen, Gaussian mixture covariance singularities, EM symmetry breaking, KL zero iff equal, supportiveness Ψ(s)=0, triangulation, logistic separable weights →∞, PCA covariance rank ≤ P-1, etc.

Need likely produce comprehensive answer. Since desired oververbosity 5, but user demands >=1000 words. Need aim maybe 2000-3000 words. XML sections exact. Need include page citations. Need no betting lines. We can structure. Need source quotes exact. Let's gather quotes with page numbers. Important pages:

Page 1 title. Page 12 intro. Page 13 clustering. Page 14 supervised. Page 16 generative/discriminative. Page 25 NN errors. Page 26 probabilistic NN Parzen. Page 27 "A hook for machine learning" etc. Page 28 PCA. Page 29 eigenvectors no meaning. Page 31 PCA poor compressor. Page 33 derivation. Page 36-37 solutions. Page 39 generalization. Page 40 next number. Page 41 training/test. Page 42 validation. Page 43 regularisation. Page 45 LDA. Page 47 Fisher. Page 50 LPM. Page 53 curse. Page 55 neural. Page 58 ridges. Page 61 backprop. Page 68 autoencoders. Page 71 MDS. Page 73 classical scaling. Page 75 warning. Page 77 probability. Page 78 independence compact. Page 82 wet grass. Page 84-85 explaining away. Page 86 belief nets. Page 88 d-separation. Page 89 collider. Page 93 expressiveness. Page 97 inference. Page 100 bucket. Page 101 BP. Page 104 messages. Page 106 complexity. Page 110 loops. Page 111 conditioning. Page 114 KL. Page 117 unique fixed point. Page 124 JTA. Page 125 absorption. Page 126 supportiveness. Page 127 global consistency. Page 133 triangulated iff JT. Page 134 message propagation. Page 138 ML. Page 141 missing data. Page 143 KL. Page 145 EM cannot decrease. Page 151 IPF. Page 157 Bayesian. Page 159 Bayes factor. Page 160 overcomplex. Page 169 regression. Page 176 logistic. Page 179 overconfident. Page 180 PCA+logistic. Page 185 evidence. Page 190 naive bayes. Page 193 pitfalls 1-of-M. Page 198 Dirichlet. Page 203 mixture. Page 205 infinite troubles. Page 207 symmetry breaking. Page 210 K means. Page 217 FA. Page 219 rotations. Page 221 PPCA. Page 222 standard PCA. Page 224 non-linear FA.

Need provide "source operators and equations" formal LaTeX. Need not list too many but core. Units and assumptions. Break down regimes.

Potential title: "Source-Adjudicated Derivation: Probabilistic Graphical Models as the Veto Layer for Learning Claims". Need include in XML only maybe no extra. The instructions say output across exact XML sections. Could include a preamble? It says ">=1,000-WORD DEPTH across these exact XML sections". Need ensure sections. Maybe no preamble to comply. But can have text in each.

Need answer as if analyzing "drive source". We need mention there is no explicit query; configure as audit. But perhaps don't mention no question; just deliver.

Need include THINK_TRACE >=400 words multi-hop derivation & gray-zone audit. Need detailed. In THINK_TRACE, need deep derivation. Can include equations? Probably yes but main equations in source section. Need make >=400 words. Need cite pages.

Need not mention betting lines. Avoid words odds/spread/moneyline. "probability" okay.

Need no invented "Force/Fatigue" ratios. Use actual source equations. Use units. Need exact singularity/breakdown: KL(q||p)=inf at q=p; NN σ²→0; Bayes factor; supportiveness; triangulation; EM; covariance eigen. Need formal.

Let's craft.

Plan:

<THINK_TRACE> ~700 words. Describe source as probabilistic ML pipeline. Multi-hop derivation: (1) representation: data as high-dim vector; smoothness assumption; nearest-neighbour as Parzen with σ→0. (2) dimensionality: PCA projection minimizes squared reconstruction; subspace; cite pages. (3) probabilistic inference: graphical models factorize joint; d-separation; explaining away. (4) inference algorithms: bucket elimination, BP, JTA; absorption requires supportiveness; triangulation. (5) learning: ML/EM/variational bound; EM cannot decrease likelihood; singularities. (6) generalization: validation/test/regularization; Bayesian model evidence. Gray-zone: interpreting eigenvectors; PCA can discard class info; FA rotation non-identifiability; Gaussian mixture singular covariance; logistic separable weights diverge; EM local maxima/symmetry; BP loopy approximate; Naive Bayes 1-of-M dependent encoding; high-dimensional distance dominance. Mention exact quotes. Audit: source is non-rigorous intro, proofs omitted, but explicit equations. Need note no biomechanical/weather variables in source; vetoes are structural.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal equations:
- Parzen/class posterior: p(x|c)=1/P_c sum N(x; x_mu, σ² I), p(c=0|x*) ratio. Limit σ²→0 yields NN. Assumptions independent, Gaussian kernel, equal? Units: x same units, σ² squared units; probability dimensionless.
- PCA: y=E^T(x-m), reconstruction x≈m+E y; error (P-1) sum_{j=M+1}^N λ_j. Assumptions orthonormal eigenvectors, covariance. Singular if eigenvalues zero / data rank < M. Eigenvectors not unique up to rotation.
- KL: KL(q||p)=<log q - log p>_q >=0, equality iff q=p. Units nats if natural log. Bound log p(v) >= -<log q> + <log p(h,v)>.
- EM bound and nondecrease equation from page 145: log p(v|θ') - log p(v|θ)= LB diff + KL >=0. Assumptions q chosen, θ update. 
- Belief network factorization p(U)=∏ p(A_i|pa(A_i)). d-separation definition maybe.
- Absorption: Ψ*(s)=Σ_{v\s} Ψ(v); Ψ*(w)=Ψ(w) Ψ*(s)/Ψ(s). Supportiveness: if Ψ(s)=0 then Ψ(w)=0. Invariant product. Singular if not supportive.
- Junction tree: triangulated iff junction graph has junction tree; maximal weight spanning tree. Clique size exponential complexity.
- Gaussian mixture: covariance update S_i = Σ q(x-mi)(x-mi)^T / Σq; singularity if covariance collapses; ML infinite. EM q∝ p(i) exp(-1/2...). 
- Logistic regression gradient: ∇w L = Σ(c-σ)x; separable → weights diverge; Hessian negative definite.
- FA/PPCA: v=Wh+b+ε, covariance WW^T+Ψ; PPCA σ² = (1/(V-H))Σ λ_j. Singular if V=H or σ²→0; W non-identifiable up to R.
Need cite pages for each. Maybe 8-10 equations enough. Need state boundary.

<RETROCAUSAL_GENEALOGY> Historical lineage: Laplace probability quote page 77; graphical models, Pearl BP, Junction Tree; PCA; EM/Neal Hinton; Bayesian ML-II; SVM/RVM. Multi-week traps: Overfit/validation (Dodgy Joe), PCA interpretation, explaining away, 1-of-M, EM singularities. Need cite pages. "retrocausal" maybe explain how later equations reinterpret earlier heuristics: NN as Parzen limit; K-means as σ→0 Gaussian mixture; PCA as PPCA σ→0; SVM as kernel logistic lineage; Naive Bayes as graphical model. Multi-week traps: treat eigenvectors as features; using PCA before logistic; naive Bayes 1-of-M; Gaussian mixture ML singular; BP on loops. Cite [PAGE 25], [PAGE 180], [PAGE 193], [PAGE 205], [PAGE 207], [PAGE 102].

<RECURSIVE_THEORY_OF_OMNISCIENCE> Actually RECURSIVE_THEORY_OF_MIND. Need address "Crisis habit regression vs counter-trap vs clock." Interpret as learner behavior under uncertainty: crisis habit regression = overfitting/local minima/explaining away? Counter-trap = regularization/Bayesian evidence/sparsity. Clock = validation/test and iterative EM convergence. Need articulate recursive ToM: modeler's beliefs about data generator, class posterior, hidden variables; model of model selection (Dodgy Joe/Lucky Jim). Need include quotes. Cite pages 41-43, 145, 160, 185-188. Need mention "recursive" because Bayesian hierarchy: parameters θ, hyperparameters Γ, model M; posterior. Crisis habit regression: when likelihood maximized with singular covariance/linearly separable weights, model confidence becomes pathological; counter-trap: put prior/regularization, supportiveness, validation; clock: iteration/EM and convergence; validation vs test. Need maybe table? Keep within XML.

<CROSS_LAYER_VETO_ADJUDICATION> Need "Physical/biomechanical/weather veto proof." For source, physical layer = measurement/data units and positivity/supportiveness; biomechanical layer = none in source; weather layer = none; but diagram variables arbitrary. Need state no biomechanical/weather variables appear in supplied pages, so any veto using them is out-of-corpus. The valid cross-layer vetoes are: unit consistency, supportiveness Ψ(s)=0, triangulation/running intersection, positivity for Hammersley-Clifford, d-separation collider conditioning, rank/eigen constraints, bounded probabilities. Provide proof sketches: absorption invariance proof from page 126; triangulation theorem page 133; d-separation. Conclude: reject any inference that violates these. Need mention physical/weather veto "not applicable; no evidence in pages" to avoid hallucination. This satisfies cross-layer veto proof.

<RLVR_COUNTERFACTUAL_VETOES> Need 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need craft scenarios tied to source. Each scenario with counterfactual, verification, prediction. 1) Gaussian mixture ML singular covariance: if unconstrained, likelihood diverges; prediction: with min variance constraint or Bayesian prior, finite; verify by computing covariance eigenvalues and likelihood. Cite pages 205, 207. 2) Loopy BP without triangulation: if apply BP to multiply-connected graph, messages may not converge; prediction: JTA after triangulation yields exact marginals; verify via brute force small graph. Cite pages 110-111, 133-134. 3) Naive Bayes 1-of-M encoding: if encode age as binary one-hot under NB, conditional independence false; prediction: multinomial model or proper Dirichlet smoothing restores; verify by likelihood/classification on synthetic. Cite pages 193-194, 198. Need "counterfactual veto" maybe if condition fails then veto. Include falsifiable predictions.

Need ensure >=1000 words. We'll write substantial.

Need exact quotes with [PAGE N]. Use verbatim snippets short. E.g. [PAGE 12] "The basic paradigm is to postulate a model for solving the problem, and set any parameters of this model based on the available data." [PAGE 16] "In a generative approach, we define a model for generating data..." [PAGE 26] "Taking the limit σ2 →0, we will with certainty therefore classify x∗ as class 0..." [PAGE 29] "Do the eigenvectors themselves explicitly have any meaning? No!" [PAGE 31] "PCA is a reasonable feature extraction method because it is such a poor compressor!" [PAGE 39] "whatever you do, your predictions are only as good as your assumptions." [PAGE 43] regularisation. [PAGE 85] "the Earthquake “explains away” to a large extent the fact that the Alarm is ringing." [PAGE 88] d-separation. [PAGE 126] "the product of all cluster potentials divided by the product of all separator potentials is invariant under absorption." [PAGE 133] "An undirected graph is triangulated if and only if its junction graph has a junction tree." [PAGE 145] EM cannot decrease. [PAGE 205] "By taking the limit of an infinitely narrow covariance matrix, the contribution to the likelihood from that datapoint becomes infinite." [PAGE 207] symmetry breaking. [PAGE 219] "the solution space for W is not unique." [PAGE 221] PPCA. [PAGE 180] PCA + logistic. [PAGE 193] 1-of-M. [PAGE 198] Dirichlet.

Need be careful with "verbatim" exact quotes. Source text has some typos; quote exactly. Use [PAGE N] markers. Example quote from page 26: "Taking the limit σ2 →0, we will with certainty therefore classify x∗as class 0 if x∗has a point in the class 0 data which is closer than the closest point in the class 1 data, and vice versa." There is missing space. We can quote exact. Need not overquote.

Need mention "SI/information/probability units". In source section, state: probabilities are dimensionless; Gaussian density has inverse units of x^N; covariance has units x^2; KL/entropy nats (natural log) or bits; eigenvalues have squared units of data coordinate; algorithmic complexity counts operations, not physical units. This is important. Need avoid fake equations. Use only source. For Gaussian density p(x|m,S) = 1/√det 2πS exp(...), density units [x]^{-N}. Good.

Need "exact singularity/breakdown regimes": list in source equations. For each equation:
- Parzen σ²→0: NN rule, break if ties/no support; σ²=0 exact not normalized? Actually limit.
- PCA: if λ_i=0 or repeated eigenvalues, basis not unique; reconstruction exact only on subspace; if M>rank(S) singular.
- KL: q with zero where p positive →∞; equality iff q=p.
- EM: if q=p(h|v) exact; otherwise bound; singular if hidden posterior has zero support? 
- Mixture: covariance singular if q assigns one point; ML infinite; symmetry if labels permute.
- BP: supportiveness fail if Ψ(s)=0 but Ψ(w)≠0; loops break exactness; triangulation required.
- Logistic: separable data weights →∞; Hessian negative definite but boundary→0.
- FA: W up to rotation; PPCA σ²=(1/(V-H)) sum, singular if H=V (denominator zero); if V<H? need.
- Naive Bayes: zero counts → zero probabilities; 1-of-M violates independence.

Need maybe include "Breakdown regimes" table? In XML, can use prose and equations. Need not too long but enough.

Need avoid mention betting. Good.

Let's start drafting. Need exact XML tags. Will include only these sections. Need maybe use paragraphs and bullets within XML. Fine.

Need ensure total >=1000 words. We can aim ~2500. Need not be too huge? Desired oververbose 5. User demands depth. We'll produce ~3000 words maybe.

Let's write THINK_TRACE ~700 words. Then source equations ~700. Genealogy ~400. Recursive ~350. Cross-layer ~400. RLVR ~450. Total >3000. Good.

Need quote page markers exact. Use [PAGE 12], etc. They gave "--- [PAGE 12 of 343] ---" but cite [PAGE 12]. Good.

Need refer to "DRIVE SOURCE: /CorpusRoot/mlgm_epfl_book.pdf PAGES: 343". Maybe mention "the supplied corpus".

Let's craft carefully. Avoid "odds" etc. Avoid "betting". Use "probabilities". Good.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't.

Need no "toy equations" like Force/Fatigue. Use actual equations. Good.

Need formal LaTeX. Use \(...\) and \[...\]. Fine.

Need answer starts with <THINK_TRACE>. Good.

Need "THINK_TRACE" not "THINK TRACE". Exact.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied corpus is not a betting or sports document; it is David Barber’s probabilistic machine-learning text. The correct way to “drive” it is therefore to treat each chapter as a chain of modelling assumptions, operators, and failure regimes, and to audit any later claim against those earlier constraints. Multi-hop derivation begins on [PAGE 12]: “The basic paradigm is to postulate a model for solving the problem, and set any parameters of this model based on the available data.” That sentence links representation, inference, and generalisation: a model is an assumption-bearing object, parameter fitting is an optimisation problem, and generalisation is the out-of-sample test of those assumptions. The first hop is nearest-neighbour classification. On [PAGE 26] the source shows that a Parzen estimator with Gaussian kernels tends to nearest-neighbour classification in the limit \(\sigma^2\to0\): “Taking the limit \(\sigma^2\to0\), we will with certainty therefore classify \(x^*\) as class 0 if \(x^*\) has a point in the class 0 data which is closer than the closest point in the class 1 data, and vice versa.” This is a genuine singular limit, not a metaphor: the classifier becomes piecewise linear with Voronoi boundaries, and the posterior confidence becomes extreme because only the nearest kernel survives. The second hop is dimension reduction. [PAGE 28] defines the approximation \(x\approx c+\sum_{i=1}^M w_i b_i\), and [PAGE 29] gives the reconstruction error \((P-1)\sum_{j=M+1}^N \lambda_j\). The source also warns that eigenvectors have no intrinsic meaning: [PAGE 29] “Do the eigenvectors themselves explicitly have any meaning? No!” The third hop is probabilistic inference. [PAGE 82]–[PAGE 85] introduce belief networks and “explaining away”: observing Jack’s wet grass lowers the posterior probability that Tracey’s sprinkler was on, because rain explains both observations. [PAGE 88] formalises this with d-separation: conditioning on a collider or its descendant can make variables dependent, while conditioning on a non-collider blocks a path. The fourth hop is inference algorithms. [PAGE 100] shows bucket elimination; [PAGE 126] proves that absorption preserves the product of cluster potentials divided by separator potentials provided the link is supportive; [PAGE 133] states that an undirected graph is triangulated iff its junction graph has a junction tree. The fifth hop is learning with hidden variables. [PAGE 143]–[PAGE 145] derive the variational lower bound and the EM non-decrease property. [PAGE 145] states that EM “cannot decrease the likelihood” because the change equals a nonnegative lower-bound improvement plus a nonnegative KL term. The sixth hop is generalisation. [PAGE 41] distinguishes training error from test error; [PAGE 42] introduces validation; [PAGE 43] introduces regularisation; [PAGE 160] explains why Bayesian evidence penalises overcomplex models through parameter-space volume. The seventh hop is latent linear modelling. [PAGE 219] notes that factor-analysis loadings are non-identifiable up to rotation: “the solution space for \(W\) is not unique.” [PAGE 221] gives PPCA as the isotropic-noise special case. [PAGE 205] identifies the Gaussian-mixture singularity: infinitely narrow covariance makes the likelihood unbounded. [PAGE 207] describes EM symmetry breaking in mixtures. [PAGE 193] warns that 1-of-\(M\) coding violates Naive Bayes conditional independence. [PAGE 180] warns that PCA followed by logistic regression gains no expressive power because two linear maps compose to a linear map. These are the gray-zone audit points: a result is valid only under the stated independence, positivity, supportiveness, rank, and boundedness assumptions. The source is explicitly non-rigorous: [PAGE 12] says “Formal proofs of theorems are generally omitted.” Therefore any claim must be checked against the displayed equations and the cited failure regimes, not against an imagined theorem. Also, the corpus contains no biomechanical or weather variables; “weather” appears only in the wet-grass example as a latent rain variable, and “biomechanical” does not appear. Any cross-layer veto using physical biomechanics or meteorological measurement must be marked out-of-corpus; the in-corpus vetoes are probabilistic, graphical, algebraic, and computational.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operators are probabilistic, linear-algebraic, and graph-theoretic. Units must be stated explicitly: probabilities and conditional probabilities are dimensionless; a Gaussian density on an \(N\)-dimensional vector has units \([x]^{-N}\); covariance matrices have units \([x]^2\); eigenvalues of a covariance matrix have units \([x]^2\); KL divergence and entropy are measured in nats when natural logarithms are used, or bits if \(\log_2\) is used; algorithmic complexity is counted in arithmetic operations or storage cells, not physical SI units. The corpus uses natural logarithms implicitly in the KL and likelihood sections.

1. Parzen-to-nearest-neighbour limit. [PAGE 25]–[PAGE 26] give
\[
p(x\mid c=0)=\frac{1}{P_0}\frac{1}{(2\pi\sigma^2)^{N/2}}\sum_{\mu\in c=0}e^{-(x-x_\mu)^2/(2\sigma^2)}
\]
and the Bayes posterior ratio
\[
\frac{p(c=0\mid x^*)}{p(c=1\mid x^*)}
=
\frac{p(x^*\mid c=0)p(c=0)}{p(x^*\mid c=1)p(c=1)}.
\]
Assumptions: independent training points, Gaussian kernel, equal kernel width, and class priors estimated by relative counts. Singular regime: as \(\sigma^2\to0\), only the nearest class-0 and nearest class-1 kernels survive; the rule becomes nearest-neighbour. If \(\sigma^2=0\) exactly, the density is not an ordinary function; if two classes are equidistant, the limiting ratio is indeterminate without a tie rule.

2. PCA reconstruction. [PAGE 28]–[PAGE 29] define
\[
y^\mu=E^T(x^\mu-m),\qquad x^\mu\approx m+Ey^\mu,
\]
with \(E=[e_1,\ldots,e_M]\) orthonormal eigenvectors of
\[
S=\frac{1}{P-1}\sum_{\mu=1}^P(x^\mu-m)(x^\mu-m)^T.
\]
The discarded squared error is
\[
(P-1)\sum_{j=M+1}^N\lambda_j.
\]
Assumptions: Euclidean squared reconstruction loss, zero-mean centring, orthonormal basis, and eigenvalues ordered decreasingly. Breakdown: repeated eigenvalues make the basis non-unique up to rotation; zero eigenvalues mean the covariance is rank-deficient; choosing \(M\) larger than the numerical rank gives no additional variance. [PAGE 29] explicitly warns that eigenvectors “only act together to define the linear subspace” and have no individual meaning.

3. KL divergence and variational bound. [PAGE 143] defines
\[
\operatorname{KL}(q,p)=\langle \log q(x)-\log p(x)\rangle_{q(x)}\ge0,
\]
with equality iff \(q=p\) almost everywhere. [PAGE 144] gives the lower bound
\[
\log p(v)\ge -\langle\log q(h\mid v)\rangle_{q(h\mid v)}
+\langle\log p(h,v)\rangle_{q(h\mid v)}.
\]
Assumptions: \(q\) is a normalized distribution on the hidden variables; the expectation is taken under \(q\). Singular regime: if \(p(x)>0\) where \(q(x)=0\), then \(\operatorname{KL}(q,p)=+\infty\); exact equality requires the true posterior.

4. EM non-decrease. [PAGE 145] writes
\[
\log p(v\mid\theta')-\log p(v\mid\theta)
=
\bigl[LB(\theta'\mid\theta)-LB(\theta\mid\theta)\bigr]
+
\operatorname{KL}\bigl(p(h\mid v,\theta)\,\|\,p(h\mid v,\theta')\bigr).
\]
The first bracket is nonnegative by the M-step; the KL term is nonnegative. Therefore EM cannot decrease the likelihood. Assumptions: exact E-step is available or a valid variational family is used; the M-step maximises the bound. Breakdown: local maxima and slow convergence when hidden information dominates; the source notes on [PAGE 150] that EM can be extremely slow when the fraction of missing information approaches unity.

5. Belief-network factorisation and d-separation. [PAGE 90]–[PAGE 91] give
\[
p(U)=\prod_i P(A_i\mid \operatorname{pa}(A_i)).
\]
[PAGE 88] defines d-connection: \(X\) and \(Y\) are d-connected by \(Z\) iff there is an undirected path where every collider is in \(Z\) or has a descendant in \(Z\), and no non-collider is in \(Z\). Assumptions: directed acyclic graph, local conditional tables, and the Markov factorisation. Breakdown: conditioning on a collider creates dependence; failure to include descendants of colliders gives the wrong independence verdict.

6. Absorption and supportiveness. [PAGE 126] gives
\[
\Psi^*(s)=\sum_{v\setminus s}\Psi(v),\qquad
\Psi^*(w)=\Psi(w)\frac{\Psi^*(s)}{\Psi(s)}.
\]
The invariance statement is: “the product of all cluster potentials divided by the product of all separator potentials is invariant under absorption” [PAGE 126]. Assumptions: supportive link; if \(\Psi(s)=0\), then \(\Psi(w)=0\) wherever \(\Psi(s)=0\). Breakdown: if a link is not supportive, division by zero occurs and absorption is undefined.

7. Triangulation and junction tree. [PAGE 133] states: “An undirected graph is triangulated if and only if its junction graph has a junction tree.” A chord is a link joining two non-consecutive vertices of a loop; every loop of length four or more must have a chord. Assumptions: undirected moralised graph for directed models; clique potentials; running intersection property. Breakdown: without triangulation the running intersection property can fail, so local consistency does not imply global consistency.

8. Gaussian mixture EM. [PAGE 206] gives
\[
m_i=\frac{\sum_\mu q_\mu(i)x^\mu}{\sum_\mu q_\mu(i)},\qquad
S_i=\frac{\sum_\mu q_\mu(i)(x^\mu-m_i)(x^\mu-m_i)^T}{\sum_\mu q_\mu(i)},
\]
and [PAGE 206] gives the responsibility
\[
q_\mu(i)\propto p(i)e^{-\frac12(x^\mu-m_i)^T S_i^{-1}(x^\mu-m_i)}.
\]
Assumptions: Gaussian components, hidden mixture indicator, normalized responsibilities. Singular regime: [PAGE 205] “By taking the limit of an infinitely narrow covariance matrix, the contribution to the likelihood from that datapoint becomes infinite.” Thus unconstrained ML is ill-posed; one must constrain eigenvalues, regularise, or use a Bayesian prior. Symmetry under label permutation causes the “jostling” and symmetry breaking described on [PAGE 207].

9. Logistic regression and separable data. [PAGE 176] gives
\[
\nabla_w L=\sum_{\mu=1}^P(c^\mu-\sigma(x^\mu;w))x^\mu,\qquad
\frac{dL}{db}=\sum_{\mu=1}^P(c^\mu-\sigma(x^\mu;w)).
\]
[PAGE 178] gives the Hessian
\[
H_{ij}=-\sum_\mu x_i^\mu x_j^\mu\sigma_\mu(1-\sigma_\mu),
\]
which is negative definite, so the log-likelihood surface is bowl-shaped. Breakdown: if the data are linearly separable, the weights can grow without bound and the classifier becomes overconfident. [PAGE 179] proposes a penalty \(L'(\theta)=L(\theta)-\alpha\theta^T\theta\) to avoid this.

10. Factor analysis and PPCA. [PAGE 217] gives \(v=Wh+b+\epsilon\), \(\epsilon\sim N(0;\Psi)\). [PAGE 221] gives PPCA
\[
W=U_H(\lambda_H-\sigma^2 I)^{1/2}R,\qquad
\sigma^2=\frac{1}{V-H}\sum_{j=H+1}^V\lambda_j.
\]
Assumptions: linear latent mapping, Gaussian latent prior, diagonal noise for FA, isotropic noise for PPCA. Breakdown: \(W\) is identifiable only up to an orthogonal rotation \(R\); if \(H=V\), the PPCA denominator \(V-H\) is zero; if \(\lambda_H-\sigma^2 I\) has negative entries, the square root is not real.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage is visibly layered. The probability chapter [PAGE 77] begins with Laplace’s phrase “Probability theory is nothing but common sense reduced to computation,” and [PAGE 78] treats independence as a compact description: “Independence → compact description.” That lineage runs from classical probability and statistical mechanics into graphical models: [PAGE 90]–[PAGE 93] connect belief networks, Markov random fields, Gibbs distributions, the Hammersley–Clifford theorem, and the Ising model. The inference lineage is Pearl-style belief propagation and junction-tree absorption: [PAGE 101]–[PAGE 106] explain message passing; [PAGE 124]–[PAGE 134] explain absorption, triangulation, and the junction-tree algorithm. The learning lineage is maximum likelihood, EM, variational bounds, and ML-II: [PAGE 138]–[PAGE 152] and [PAGE 169]–[PAGE 172]. The kernel lineage is logistic regression, the kernel trick, Gaussian processes, and relevance vector machines: [PAGE 181]–[PAGE 188]. The latent-variable lineage is factor analysis, PPCA, and non-linear factor analysis: [PAGE 217]–[PAGE 224].

Retrocausally, later equations reinterpret earlier heuristics. Nearest-neighbour is reinterpreted as a Parzen limit [PAGE 26]. K-means is reinterpreted as the \(\sigma\to0\) limit of isotropic Gaussian mixtures [PAGE 211]. PCA is reinterpreted as the \(\sigma\to0\), \(R=I\) limit of PPCA [PAGE 222]. Logistic regression is reinterpreted as a one-layer probabilistic classifier whose linear decision boundary can be kernelised [PAGE 181]. Naive Bayes is reinterpreted as a conditional-independence graphical model [PAGE 190]–[PAGE 191]. These reinterpretations are not merely historical; they determine which failure regimes are inherited. A PCA pipeline inherits rank and rotation ambiguities. A kernel logistic pipeline inherits the separable-data overconfidence problem unless a prior or penalty is added. A mixture model inherits the narrow-covariance singularity unless constrained. A loopy belief-propagation pipeline inherits the non-convergence and approximate-inference traps described on [PAGE 102] and [PAGE 110]–[PAGE 111].

The multi-week traps are specific. First, treating eigenvectors as semantic features: [PAGE 29] says they have no individual meaning; only the subspace matters. Second, using PCA before logistic regression and expecting a gain: [PAGE 180] shows the two linear maps compose into one linear map, and PCA can even destroy linear separability. Third, using 1-of-\(M\) coding for a categorical variable in Naive Bayes: [PAGE 193] says this creates complete dependence among the binary indicators and violates the Naive Bayes assumption. Fourth, fitting unconstrained Gaussian mixtures by ML: [PAGE 205] shows the likelihood can diverge. Fifth, applying belief propagation to loopy graphs and treating it as exact: [PAGE 102] calls this “strictly erroneous” as an exact method, though it can approximate under long-loop conditions. Sixth, interpreting factor loadings without rotation constraints: [PAGE 219] warns that “the solution space for \(W\) is not unique.” Seventh, trusting a single validation split without recognising the Lucky Jim/Dodgy Joe lookup-table parody [PAGE 41]–[PAGE 43]; the lesson is that zero test error on known problems is not evidence of generalisation. Eighth, confusing Bayesian evidence with training likelihood: [PAGE 160] explains that the evidence integrates over parameter space and thus penalises overcomplex models automatically.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer is the modeller’s model of the data-generating process, the model of the model-selection process, and the model of the learner’s own failure modes. The source repeatedly forces this recursion. At the first level, \(p(v\mid h)\) and \(p(h)\) encode beliefs about hidden causes; at the second level, \(p(\theta\mid D)\) encodes beliefs about parameters; at the third level, \(p(\Gamma\mid D)\) or \(p(M\mid D)\) encodes beliefs about hyperparameters and models. [PAGE 171] writes the hierarchical predictor as
\[
\bar f(x)=\int f(x;w)p(w,\Gamma\mid D)\,dw\,d\Gamma
=\int\left\{\int f(x;w)p(w\mid\Gamma,D)\,dw\right\}p(\Gamma\mid D)\,d\Gamma.
\]
This is a formal recursion: each model prediction is weighted by the posterior probability of its hyperparameters.

Crisis habit regression appears when the learner maximises the immediate objective and thereby drives a parameter into a singular regime. Examples: Gaussian-mixture covariance collapsing to a single point [PAGE 205]; logistic weights growing without bound on separable data [PAGE 178]–[PAGE 179]; EM settling into a local maximum or suffering symmetry-breaking jostling [PAGE 207]; loopy belief propagation cycling without a fixed point [PAGE 110]–[PAGE 111]. These are “habit regressions” because the same local optimisation habit—maximise likelihood, ignore support, ignore priors, ignore triangulation—reappears in different chapters.

The counter-trap is to impose a prior, penalty, supportiveness condition, or valid inference structure before optimisation. [PAGE 179] uses \(L'(\theta)=L(\theta)-\alpha\theta^T\theta\). [PAGE 198] uses a Dirichlet prior to avoid zero-count overconfidence. [PAGE 126] requires supportive links so absorption is defined. [PAGE 133] requires triangulation so the junction tree has the running-intersection property. [PAGE 145] uses the KL decomposition to prove EM cannot decrease the likelihood. [PAGE 160] uses Bayesian evidence to penalise unnecessary parameter-space volume. The counter-trap is not a different objective in the same trap; it changes the admissible hypothesis class.

The clock is the iteration-and-validation schedule. [PAGE 41]–[PAGE 43] separate training, validation, and test data. [PAGE 145] iterates E and M steps. [PAGE 150] warns that EM converges slowly when missing information dominates. [PAGE 207] warns that mixture EM requires careful initialisation and symmetry breaking. [PAGE 187] gives the evidence-procedure fixed-point iteration for \(\alpha\):
\[
\alpha_{\text{new}}=\frac{P}{(w^*)^T w^*+\operatorname{trace}((\alpha I+J)^{-1})}.
\]
A correct recursive theory of mind therefore tracks three clocks: the optimisation clock (gradient or EM iterations), the model-selection clock (validation or evidence updates), and the assumption clock (when a singular regime invalidates the current model class). The failure mode is to stop all three clocks at the same time—train to convergence, ignore validation, and interpret the resulting weights or loadings as if they were uniquely meaningful. The source’s warning on [PAGE 29] and [PAGE 219] is exactly this: the learned basis and loadings are not identifiable beyond their subspace or rotation class, so the modeller must not attribute causal or semantic meaning to arbitrary coordinates.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto must be proved, not asserted. In this corpus there is no biomechanical variable and no weather measurement variable except the illustrative rain variable in the wet-grass network [PAGE 82]–[PAGE 84]. Therefore any claim that a “biomechanical veto” or “weather veto” decides a machine-learning inference from these pages is out-of-corpus and must be rejected. The valid cross-layer vetoes are algebraic, probabilistic, graphical, and computational. Their proofs are as follows.

First, unit and density consistency veto. A Gaussian density \(p(x\mid m,S)\) has units \([x]^{-N}\), so it cannot be added to a probability or compared directly to a likelihood ratio without the correct Jacobian or discrete/continuous conversion. The source’s Gaussian form on [PAGE 205] and [PAGE 217] requires covariance units \([x]^2\). Veto: reject any likelihood comparison that mixes a density with a probability without normalization.

Second, supportiveness veto. [PAGE 126] defines absorption:
\[
\Psi^*(s)=\sum_{v\setminus s}\Psi(v),\qquad
\Psi^*(w)=\Psi(w)\frac{\Psi^*(s)}{\Psi(s)}.
\]
If \(\Psi(s)=0\) at a state where \(\Psi(w)\neq0\), the update divides by zero and the cluster representation is not supportive. Proof: the invariance proof in the source requires \(\Psi^*(w)/\Psi^*(s)=\Psi(w)/\Psi(s)\); if \(\Psi(s)=0\), that ratio is undefined. Veto: no absorption message may be passed across a non-supportive separator.

Third, triangulation/running-intersection veto. [PAGE 133] states the iff theorem: a graph is triangulated iff its junction graph has a junction tree. [PAGE 127] states the running-intersection property: for any two nodes containing a variable \(a\), the path between them also contains \(a\). Proof: without a chord in every loop of length four or more, variable elimination can induce a clique graph where a variable appears in two cliques but not on the separating path; local consistency then fails to propagate global consistency. Veto: no exact junction-tree marginal may be claimed from an untriangulated loopy graph.

Fourth, d-separation/collider veto. [PAGE 88] defines d-connection: a path is active if every collider is in the conditioning set or has a descendant there, and no non-collider is in the conditioning set. Proof: the wet-grass and burglar examples [PAGE 83]–[PAGE 85] show that conditioning on a common effect changes the posterior and “explains away” a cause. Veto: an independence claim that conditions on a collider without accounting for its descendants is invalid.

Fifth, covariance-rank and singular-likelihood veto. [PAGE 205] shows that an infinitely narrow Gaussian mixture component makes the likelihood infinite. [PAGE 221] shows PPCA requires \(V-H\) in the denominator. [PAGE 178] shows separable logistic data drive weights without bound. Veto: any unconstrained ML claim in these regimes is not a well-posed optimisation result; it is a singular or boundary artefact. The remedy is a constraint, prior, penalty, or Bayesian integration, as shown on [PAGE 198], [PAGE 179], and [PAGE 160].

Sixth, computational-layer veto. [PAGE 100] shows bucket elimination can be linear in a chain but exponential in the maximal family size. [PAGE 106] states that belief-propagation complexity is exponential in the maximum family size and linear in space. [PAGE 134] notes that finding the smallest triangulation is NP-hard. Veto: an inference claim that ignores clique size or separator size is not automatically feasible, even if it is mathematically exact.

The cross-layer adjudication therefore concludes: physical/measurement units constrain densities and covariances; graphical support and triangulation constrain message passing; d-separation constrains independence claims; singular-likelihood analysis constrains mixture and logistic fitting; computational complexity constrains which exact algorithm can be run. The biomechanical and weather layers are not present in the supplied pages, so they cannot be used as evidence for or against any claim in this corpus.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Gaussian-mixture singular-covariance veto. Counterfactual: suppose a learner fits a Gaussian mixture by unconstrained maximum likelihood and reports a finite likelihood optimum. Verifiable check: compute each component covariance \(S_i\) from [PAGE 206]; if \(\det S_i\to0\) for a component containing one training point, then [PAGE 205] applies: “By taking the limit of an infinitely narrow covariance matrix, the contribution to the likelihood from that datapoint becomes infinite.” Prediction: the unconstrained ML likelihood diverges or drifts upward without bound; adding a minimum-eigenvalue constraint, a Wishart prior, or Bayesian integration yields a finite optimum. The counterfactual veto fires if the reported solution has a covariance eigenvalue below the prescribed floor and no prior or constraint is declared.

Scenario 2: Loopy belief-propagation exactness veto. Counterfactual: suppose a learner applies Pearl belief propagation directly to a multiply connected graph and claims exact marginals. Verifiable check: identify a loop, e.g. the ADECA loop in [PAGE 102]; run the message recursion on [PAGE 110]–[PAGE 111]. Prediction: without triangulation the messages need not converge to a unique fixed point, and the marginals are approximate. If the graph is triangulated and a junction tree is formed as on [PAGE 133]–[PAGE 134], then absorption on the junction tree gives exact clique marginals. The counterfactual veto fires if the graph contains a loop of length four or more without a chord and the claim is “exact.”

Scenario 3: Naive Bayes 1-of-\(M\) encoding veto. Counterfactual: suppose a learner encodes a three-state age variable as three binary indicators and applies Naive Bayes. Verifiable check: [PAGE 193] states that 1-of-\(M\) coding makes the indicators dependent by construction, because if \(a_1=1\) then \(a_2=0\) and \(a_3=0\) regardless of conditioning. Prediction: the Naive Bayes conditional-independence assumption is false for the encoded vector; classification probabilities and likelihoods are miscalibrated. If the variable is treated as multinomial with a single \(M\)-state variable, or if a Dirichlet prior is used as on [PAGE 198], the failure mode is removed. The counterfactual veto fires if the encoded attributes are treated as conditionally independent Bernoulli variables.

A fourth, optional audit: PCA-before-logistic veto. Counterfactual: suppose a learner claims that PCA followed by logistic regression increases the expressive power of a linear classifier. Verifiable check: [PAGE 180] derives \(h=w^T( E^Tx+a)+b=(Ew)^Tx+b+w^Ta\), which is another linear function of \(x\). Prediction: the composed classifier is still a linear logistic model; it cannot represent a non-linear decision boundary, and it may destroy separability by projecting into a lower-dimensional subspace. The veto fires if the claim is “non-linear gain” rather than “computational speed or denoising.” These counterfactuals are verifiable because each maps to an explicit equation and a measurable prediction: bounded covariance eigenvalues, chordal graph or exact brute-force marginal, multinomial versus Bernoulli likelihood, and linear-composition equality.
</RLVR_COUNTERFACTUAL_VETOES>
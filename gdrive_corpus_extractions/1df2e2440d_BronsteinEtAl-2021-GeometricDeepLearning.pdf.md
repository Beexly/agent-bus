---
source: "BronsteinEtAl-2021-GeometricDeepLearning.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 160
model: baidu/ernie-5.5-flash-preview:free
words: 8930
---

<NATIVE_REASONING>
We need answer user's request. User provided drive source, pages 160, source text of Geometric Deep Learning, and wants a GSE+GSI Frontier Reasoning Foundry output with strict invariants: no betting lines, no toy equations, formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided. >=1000 words across exact XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need produce likely about the source? The user didn't specify a task beyond DRIVE SOURCE and pages. We need infer maybe produce a frontier reasoning analysis grounded in source. Must avoid betting lines. Need not mention odds/spreads/totals/moneylines. Need zero toy equations: only formal equations from source? We can state equations with LaTeX, units, assumptions, singularities. Need cite page markers and verbatim quotes. Need >=1000 words total across sections. Need likely discuss the document's core: Geometric Deep Learning blueprint: symmetry, geometric stability, scale separation, 5G domains, architectures, caveats, RNNs time warping. Need make output structured exactly XML tags. Need ensure word count >=1000 across sections. Probably 6 sections, each maybe 250 words = 1500. THINK_TRACE >=400 words. Need include exact page citations with [PAGE N]. Source text pages included are page numbers in original? They gave [PAGE 1 of 160] etc. We should cite those. Need maybe cite many exact quotes. Need not invent fake ratios. Equations: can quote formal equations from source, with units, assumptions, breakdown regimes. Need perhaps analyze mathematical assumptions: group actions, representations, invariance/equivariance, deformation stability, scale separation, Fourier/wavelets, Laplacians, gauge equivariant convolution, LSTM gating/time warping. Need discuss singular regimes: high-frequency deformations break Fourier modulus stability; spectral filters unstable under domain perturbations; parallel transport path dependence and injectivity radius; non-parallelisable manifolds no smooth global gauge; chaotic/high-curvature etc. Units: discrete indices dimensionless, continuous domains with measure units; inner products units signal^2*measure; group Haar measure; Fourier coefficients; Lipschitz error dimensionless? Need information/probability units: e.g., sample complexity N = Θ(ε^{-d}), κ(d) ≃ N^{-1/d}; entropy? We can mention bits/nats if relevant but source doesn't discuss info units. Could mention permutation group size n!, group averaging measure, ReLU pushing energy to lower frequencies. Need no fake ratios. Could mention "sample complexity grows exponentially" but formal. Need no betting. 

Need consider policy? User asks for analysis, not harmful. OK.

Need include "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX, units, page citations, breakdown. Could list equations:
- group action on signals: (g.x)(u)=x(g^{-1}u) [PAGE 18], equation (3).
- representation ρ(gh)=ρ(g)ρ(h) [PAGE 19].
- invariance f(ρ(g)x)=f(x), equivariance f(ρ(g)x)=ρ(g)f(x) [PAGE 19-20].
- deformation stability: ||f(ρ(τ)x)-f(x)|| ≤ C c(τ)||x|| [PAGE 24], eq (4).
- Dirichlet energy c_2(τ)=∫Ω ||∇τ(u)||² du [PAGE 25].
- domain deformation: ||f(x,Ω)-f(x∘η^{-1},Ω~)||≤ C||x|| d_D(Ω,Ω~) [PAGE 26], eq (5).
- Lipschitz max discrepancy κ(d) ≃ N^{-1/d}, N=Θ(ε^{-d}) [PAGE 13].
- group convolution (x⋆θ)(g)=⟨x,ρ(g)θ⟩=∫ x(u)θ(g^{-1}u)du [PAGE 45], eq (14).
- spectral convolution on manifolds: (x⋆θ)(u)=∑_{k≥0}(xhat_k θhat_k) φ_k(u) [PAGE 58], eq (17).
- gauge equivariant convolution (23) [PAGE 64].
- LSTM gate equations [PAGE 100].
- time warping invariance equation (53) [PAGE 103].
Need units: x: signal units U_s; Ω measure dμ(u) units of domain; inner product units U_s^2 μ; filter θ same units? group convolution units maybe U_s U_θ μ. For discrete, counts. Laplacians units 1/length² if metric. Need mention assumptions: compact manifold, self-adjoint Laplacian, discrete spectrum, orientability for SO(s), local injectivity radius, smooth gauges, contraction mapping for fixed point. Breakdown: Fourier phase modulus unstable under high-frequency deformation (O(1) error) [PAGE 29]; spectral filters unstable near-isometric perturbations [PAGE 58/64]; gauge singularities/nonparallelisable sphere [PAGE 60]; parallel transport path dependence [PAGE 49]; Taylor approximation time warping valid if dτ/dt not too large [PAGE 103].

RETROCAUSAL_GENEALOGY: historical lineage from Klein Erlangen, Noether, gauge theories, Weyl, Galois, Lie, Cartan, Mallat wavelets, GNNs etc. Multi-week traps: chasing equivariance without stability; using Fourier spectral filters on varying domains; assuming global gauge; ignoring injectivity radius; using permutation invariant aggregation without injectivity (WL limits); forgetting boundary conditions in RNN shift equivariance. Need cite pages.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This sounds generic. Need adapt: "crisis" maybe model failure under distribution shift; habit regression: default to generic ML; counter-trap: add invariance but break stability; clock: multi-week iteration schedule? Need mention source? Could frame reasoning policy: when facing crisis (domain deformation, adversarial perturbation, out-of-distribution), habit regression: use universal approximator MLP; counter-trap: enforce symmetry too rigidly; clock: staged validation over weeks: unit tests for invariances, stability, scale separation. Need maybe include formal decision logic. But no toy equations. Use probability units? Could say posterior over architecture families measured in nats? But no fake ratios. Could state Bayesian model evidence? Might be OK but source not explicit. Need avoid toy equations. Maybe formal: choose f minimizing expected risk R(f) = E_P L(f(x), f_target(x)) [PAGE 9-10]. Use risk units loss. Also complexity c(g) constraint [PAGE 10]. Use as objective. But that's toy? It's source. We can state as formal. Need no fake ratios.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Weird: no betting. Need perhaps prove veto across layers: if physical constraints violate domain metric/symmetry, model prediction vetoed. Could include biomechanical/weather examples: 3D body motion nearly isometric but cloth/airflow not; weather grid deformation? Need not bet. Need formal veto: If model assumes translation equivariance but domain has non-stationary flow, veto. If manifold injectivity radius smaller than receptive field, convolution filter not well-defined. If gauge singularity near cowlick, feature unstable. Need include units: length m, time s, angles rad, temperature K? Maybe weather: advection equation? Could state not from source but physical. Need be careful with equations: formal advection-diffusion? Could include but not necessary. The section asks physical/biomechanical/weather veto proof. Need maybe prove: For a model to be valid under physical veto, invariances must match symmetry group; if transformation changes metric beyond tolerance, stability bound fails. Use source deformation stability. Example: human body motion approximated by isometry [PAGE 48]; if rigid-body assumption violated due to soft tissue large stretch, d_D nonzero, error bound. Weather: atmospheric fields on sphere, rotation equivariance SO(3) [PAGE 46], but local gauge/wind vector fields require parallel transport; if using scalar isotropic Laplacian filters, directionality lost [PAGE 58], veto for anisotropic wind features. Maybe include units: wind speed m/s, vector direction rad, temperature K.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning verification? Need produce three scenarios: (1) Fourier modulus on deformed image: predict failure O(1) as source says [PAGE 29]. (2) Spectral filter across near-isometric mesh: predict high error due eigenvector perturbation [PAGE 58]. (3) Transformer/Deep Sets on sets with no ordering: if positional encoding omitted, permutation invariance preserved; if used on sequences without positional encodings, fail; or RNN boundary condition: unpadded SimpleRNN not shift equivariant [PAGE 96]. Need "RLVR" maybe Reinforcement Learning with Verifiable Rewards? We can define veto scenarios and predictions. Need verifiable: input perturbation, expected output invariance, failure metric. No betting. Could say veto if measured equivariance error > tolerance. Predictions formal: with Fourier modulus, relative error remains bounded away from zero; with gated RNN time warping, gate derivative approximated; with GNN WL limitation, cannot distinguish 6-cycle vs two triangles [PAGE 124]. Need 3.

Need word count >=1000. We can produce long. Need ensure XML sections exactly. Could include headings only. No markdown? likely okay. Need no extra text outside tags? Better only XML-like tags. Need ensure all sections present.

Need think about strict invariant "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So any equation must be formal, with units and assumptions. We can include equations from source. If we create a decision risk equation from source, okay. Need avoid fake ratios. For cross-layer veto, maybe use inequality from source. Use units.

Need maybe state "SI units" in equations: For continuous domains, let u ∈ Ω with measure μ in m^d; signal x(u) in [x]; inner product ⟨x,y⟩ = ∫ x*(u)y(u) dμ(u) has units [x][y]·m^d. Group convolution output units [x][θ]·m^d. Laplacian on length scale L has units L^{-2}. For discrete, counts dimensionless. Probability: risk expected value in nats if log loss? Source uses squared loss L(y,y') = 1/2|y-y'|^2. Units of risk [y]^2. For classification probability, cross entropy in nats, but source doesn't mention. Could mention if loss is negative log-likelihood, risk in nats per sample; but source doesn't say. Maybe not necessary but user wants SI/information/probability units. We can include: if labels are probabilities, log-loss in nats/sample. But avoid inventing? It's formal. Need cite source? Source mentions squared-loss [PAGE 10]. It doesn't discuss log-loss. Could still state standard. But source operators should be from source. We can include "for probabilistic outputs, use negative log-likelihood in nats/sample; not asserted by source but unit convention." Might be okay. But better focus on source.

Need exact [PAGE N] markers and verbatim quotes. Need quote exact text. Need ensure quotes are verbatim from provided text. We can quote snippets. Need include page marker before quote. E.g. [PAGE 18] “(g.x)(u) = x(g−1u).” But text has weird spacing; can quote. Need maybe cite [PAGE 13] “κ(d) = ... ≃N−1/d”. Need exact? We can approximate but should be verbatim. Need use quotes from source. Could quote multiple. Need not quote too long. 

Need think of final length. Six sections:
1 THINK_TRACE: 500 words.
2 SOURCE_OPERATORS_AND_EQUATIONS: 500 words with equations.
3 RETROCAUSAL_GENEALOGY: 250.
4 RECURSIVE_THEORY_OF_MIND: 250.
5 CROSS_LAYER_VETO_ADJUDICATION: 300.
6 RLVR_COUNTERFACTUAL_VETOES: 350.
Total 2150. Good.

Need ensure THINK_TRACE >=400 words. We can make 600. Need maybe "deep multi-hop derivation & gray-zone audit". We can discuss derivation: start from high-dimensional curse, geometric priors, blueprint, domains, model examples, limits. Gray-zone audit: when invariance vs equivariance, deformation stability, spectral vs spatial, gauge, RNNs. Include citations.

Need be careful: The user supplied full source text; likely expects output based solely on it. We can use external knowledge but grounded. Need not mention "betting".

Let's draft.

THINK_TRACE:
- Interpret source as attempt to apply Erlangen to DL. Multi-hop: supervised risk -> curse -> symmetry/scale separation -> groups -> blueprint -> domains -> architectures -> caveats. Need formal derivation: sample complexity N = Θ(ε^{-d}) [PAGE 13], so need priors. Symmetry group G acts on signals; representation ρ(g). Linear invariants poor: group average [PAGE 31]. Equivariant layers plus nonlinearity and pooling produce blueprint [PAGE 32-33]. Then instantiate domains: grids translation, graphs permutation, groups homogeneous, manifolds isometry/gauge, meshes. Gray zones: exact invariance vs approximate deformation stability; Fourier global invariants vs wavelet localized; spectral filters unstable; gauge ambiguity; WL expressivity; RNNs time warping. Need audit: what is necessary vs sufficient? Blueprint necessary conditions not architecture [PAGE 31]. Universal approximation but stability tension. Need mention "The geometric priors ... do not prescribe a specific architecture" [PAGE 31]. Need quote. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
Need include formal equations with units and breakdown. Could format as bullets.
- Risk and complexity: R(f) = E_P L(f(x), f_target(x)), squared loss units [y]^2 [PAGE 10]. Interpolation constraint f~(xi)=f(xi) [PAGE 9]. Complexity c(g) minimization [PAGE 10].
- Lipschitz curse: κ(d) ≃ N^{-1/d}; N=Θ(ε^{-d}) [PAGE 13]. Units: κ in output units? if f output [y], discrepancy [y]; N dimensionless; ε in [y]? If f 1-Lipschitz with input norm, ε maybe output tolerance. d dimensionless.
- Group action/representation: (g.x)(u)=x(g^{-1}u); ρ(gh)=ρ(g)ρ(h) [PAGE 18-19]. Units: g dimensionless group element; x [x]; ρ preserves [x].
- Invariance/equivariance: f(ρ(g)x)=f(x), f(ρ(g)x)=ρ(g)f(x) [PAGE 19-20].
- Deformation stability: ||f(ρ(τ)x)-f(x)|| ≤ C c(τ)||x||; c(τ)=0 for τ∈G; Dirichlet energy c_2(τ)=∫ ||∇τ||² du [PAGE 24-25]. Units: if u in m, τ displacement m? ∇τ dimensionless? Actually τ: Ω→Ω, u in m, ∇τ dimensionless, du m^d; c_2 units m^d? If norm of gradient dimensionless. Could state. If x units [x], LHS [x], RHS C [1/cost?]. C units [x]/[cost]*[x]? Hmm. Need be careful: c(τ) must be dimensionless or normalized; source doesn't specify. We can say assume c(τ) dimensionless after normalization; otherwise C carries units. Breakdown: large deformations c grows, semantics change.
- Fourier/wavelet: Fourier modulus unstable: if approximate translation with ||∇τ~||∞ ≤ ε, ||f(ρ(τ)x)-f(x)||/||x|| = O(1) [PAGE 29]. Wavelet equivariance O(ε) [PAGE 29]. Units: relative error dimensionless.
- Group convolution: (x⋆θ)(g)=∫Ω x(u)θ(g^{-1}u)du [PAGE 45]. Units [x][θ]μ(Ω). Assumptions: locally compact group, Haar measure; output on G. Breakdown: cannot integrate over huge groups e.g. Σ_n with n! elements [PAGE 43], high-dimensional groups infeasible.
- Spectral convolution on compact manifold: (x⋆θ)(u)=∑_{k≥0} (xhat_k θhat_k) φ_k(u) [PAGE 58]. Units: coefficients [x] sqrt(measure)? With orthonormal basis dimensionless? If ⟨φ_k,φ_l⟩=δ_kl, φ units μ^{-1/2}; xhat units [x] μ^{1/2}. Need mention. Breakdown: high-frequency eigenfunctions change under near-isometric perturbations [PAGE 58], direct spectral unstable; polynomial/rational filters stable [PAGE 64-65].
- Gauge equivariant vector convolution: (x⋆Θ)(u)=∫Ω Θ(u,v) ρ(g_{v→u}) x(v) dv [PAGE 64]. Units: Θ [output]/([x] μ), ρ dimensionless orthogonal. Assumptions: unique minimizing geodesic, local support within injectivity radius, structure group G=SO(s) or O(s). Breakdown: parallel transport path dependent [PAGE 49], no smooth global gauge on nonparallelizable manifolds [PAGE 60], singularities.
- RNN/LSTM: h(t+1)=Γ R + (1-Γ)h(t) [PAGE 103]; Γ=logistic(...) [PAGE 103]. Units: h in feature units, Γ dimensionless [0,1]. Assumptions: monotonic time warping τ'(t)>0, Taylor approximation valid if dτ/dt not too large [PAGE 103]. Breakdown: too strong time contraction skips samples; SimpleRNN not invariant because Γ=1 [PAGE 103].

Need maybe include page citations with quotes. Could include short quotes after equations. Need not every equation but enough. Need "verbatim quotes" exact. Let's pick quotes:
[PAGE 18] “(g.x)(u) = x(g−1u).”
[PAGE 24] “∥f(ρ(τ)x) − f(x)∥≤Cc(τ)∥x∥”
[PAGE 29] “it is possible to show that” maybe not. The text: “∥f(ρ(τ)x) −f(x)∥ ∥x∥ = O(1)” with fraction broken. Could quote “the Fourier modulus ... is unstable under deformations”. Exact: “Consequently, such Fourier representation is unstable under deformations, however small.” [PAGE 29]
[PAGE 45] “(x ⋆θ)(g) = ⟨x, ρ(g)θ⟩= ∫ x(u)θ(g−1u)du.”
[PAGE 58] “the higher-frequency eigenfunctions of the Laplacian can change dramatically as a result of even small near-isometric perturbations” [PAGE 58]
[PAGE 64] “(x ⋆Θ)(u) = ∫ Θ(u, v)ρ(gv→u)x(v)dv.”
[PAGE 103] “h(t+1) = Γ(z(t+1), h(t))R(z(t+1), h(t)) + (1 −Γ(z(t+1), h(t)))h(t)” maybe formatting.

Need RETROCAUSAL_GENEALOGY:
- Historical: Euclid/Klein, groups, Noether, Weyl gauge, Fourier, wavelets, CNNs, GNNs. Cite [PAGE 5] “Klein proposed approaching geometry as the study of invariants” maybe. [PAGE 118-119] Weyl symmetry, Noether. [PAGE 122] Mallat scattering. [PAGE 123] WL. Multi-week traps: use global Fourier on varying domains; ignore deformation stability; assume gauge; forget pooling; use non-injective aggregation. Need formal? Maybe not equations but mention. 

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression vs counter-trap vs clock. Could define crisis as deployment distribution shift. Habit regression: fall back to MLPs/universal approximation because easy. Counter-trap: over-enforce symmetry, causing instability or overparameterization. Clock: schedule multi-week checks: week 1 identify group and domain; week 2 test invariance/equivariance; week 3 deformation stability; week 4 scale pooling; week 5 expressivity (WL); week 6 deployment. Need maybe mention source says blueprint necessary conditions not specific [PAGE 31]. Use risk and complexity. Need no fake equations. Could use expected risk [PAGE 10] and deformation bound [PAGE 24]. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Need "Physical/biomechanical/weather veto proof." We can state veto if model's assumed symmetry group not valid. Proof by contradiction using source inequalities. For physical layer: if object deformation has large Dirichlet energy c_2(τ), output deviation bounded below? Source gives upper bound, not lower. But veto: if required tolerance ε < C c_2(τ)||x||/||f||? Need avoid toy. We can say if measured c_2(τ) is large enough that stability inequality cannot guarantee target tolerance, veto. Formal: Let target tolerance τ_tol in [x]; if C c(τ)||x|| > τ_tol, the model cannot certify invariance; veto. That's formal, not toy ratio? It's an inequality. OK. Units: τ_tol [x]. Biomechanical: human body nearly isometric [PAGE 48] but cloth/hair not; if deformation not isometric, manifold metric changes; spectral filters unstable. Weather: atmospheric signals on sphere have SO(3) rotation symmetry [PAGE 46], but vector fields (wind) require gauge; isotropic Laplacian filters discard direction [PAGE 58/63]. If predict directional flux using scalar isotropic filters, veto. Also if using global Fourier modulus for weather, unstable under local deformations [PAGE 29]. Need mention units: wind speed m/s, temperature K, pressure Pa, angle rad. 

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions. Could be:
1. Fourier modulus vs small elastic deformation. Setup: image x on grid, τ with ||∇τ~||∞ ≤ ε. Metric: relative error E = ||f(ρ(τ)x)-f(x)||/||x||. Prediction: E=O(1), veto for any small ε. Quote [PAGE 29]. Verifiable by synthetic shift/warp.
2. Spectral filter transfer across near-isometric meshes. Setup: mesh Ω and perturbed Ω~; train filter on Ω, apply on Ω~. Metric: output discrepancy. Prediction: unstable due eigenvector perturbation, veto unless polynomial/rational stable filter. Quote [PAGE 58], [PAGE 64]. Verifiable by remeshing/perturbation.
3. SimpleRNN vs padded/gated time warping. Setup: sequence z(t) warped by τ(t) with dτ/dt >? Source says need Γ. SimpleRNN lacks Γ term, cannot be time warping invariant. Metric: prediction error under resampling; veto if not gated or not trained on warping. Prediction: SimpleRNN fails unless τ=t; LSTM/gated can fit with chrono init. Quote [PAGE 103]. Verifiable by time rescaling. Or use WL: GNN cannot distinguish 6-cycle vs two triangles; prediction failure. Which better? RLVR maybe three. Could include WL as third? Need "counterfactual vetoes" maybe model should not be accepted if counterfactual invariances fail. We can include 3: Fourier, spectral, WL/GNN. But time warping is source and interesting. Need only 3. Maybe include GNN WL because verifiable: two non-isomorphic graphs 6-cycle vs two triangles [PAGE 124]. Prediction: any 1-WL GNN gives identical representations, veto for isomorphism discrimination. This is formal and verifiable. Could mention time warping in recursive. But user asked 3. Let's choose: Fourier modulus, spectral mesh filters, 1-WL GNN. Or include RNN. Need maybe RLVR = Reinforcement Learning Verification? Could be about model validation. Use three.

Need ensure no betting lines. Fine.

Need maybe mention "SI/information/probability units" explicitly in source equations and vetoes. Could include a note: "All norms are L2 unless stated; discrete domains use counting measure, so units are counts." Good.

Need be cautious with exact quotes and page numbers. Let's verify source page mapping:
[PAGE 1] title
[PAGE 5] preface Klein.
[PAGE 9] learning high dimensions, risk? Actually [PAGE 9] starts Section 2; [PAGE 10] risk R. Use [PAGE 10].
[PAGE 10] squared loss.
[PAGE 10] complexity min.
[PAGE 12] curse.
[PAGE 13] Figure 2 and κ.
[PAGE 15] signals inner product.
[PAGE 18] group action eq 3.
[PAGE 19] representation.
[PAGE 19-20] invariance/equivariance.
[PAGE 24] deformation stability eq 4.
[PAGE 25] Dirichlet energy.
[PAGE 26] domain deformation eq 5.
[PAGE 29] Fourier modulus unstable.
[PAGE 29] wavelet stable.
[PAGE 31] blueprint necessary conditions? [PAGE 31] says “The geometric priors we have described so far do not prescribe a speciﬁc architecture ... but rather a series of necessary conditions.”
[PAGE 32] linear invariants poor, group average.
[PAGE 33] blueprint blocks.
[PAGE 45] group convolution eq 14.
[PAGE 46] sphere/SO(3)
[PAGE 48] human body nearly isometric.
[PAGE 49] parallel transport path dependent.
[PAGE 58] spectral convolution eq 17 and instability figure.
[PAGE 59] polynomial filters.
[PAGE 60] nonparallelizable sphere.
[PAGE 64] gauge equivariant conv eq 23.
[PAGE 95-97] RNN.
[PAGE 103] time warping equation.
[PAGE 124] WL 6-cycle/two triangles.

Need include quotes with special chars? We can reproduce. 

Potential issue: The user requested ">= 1,000-WORD DEPTH across these exact XML sections". Need ensure total words >=1000. I can produce maybe 3000. Fine.

Need avoid "betting" terms. OK.

Need think if any content violates "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't.

Need maybe mention "No fake ratios". We won't use ratios except source equations and relative error. Is relative error a ratio? It's formal, from source? Source uses relative error. OK. Avoid Force/Fatigue.

Need maybe include "probability units" in RLVR: define veto probability? Could say "under the empirical distribution P, the probability of veto is P(E>ε)". Units dimensionless probability. Could include. But not necessary? User says SI/information/probability units. We can mention probability in risk and veto. For information units: maybe group size n! not information; can say if describing graph index uncertainty, log2(n!) bits? But source doesn't mention. Could avoid? But requirement says state units when equations. Maybe not every equation needs all units. But we can include units for each.

Need maybe mention "source pages provided" so cite exact. Good.

Let's draft final in XML-like tags. Need ensure no Markdown? Could be plain. Use LaTeX equations. Need maybe escape XML? Not necessary. But if using angle brackets? Equations have < maybe not. Use &lt;? Probably not needed. But XML-like tags could be parsed? We'll just use tags.

Potential issue: The final answer must be >=1000 words. Let's estimate. Need maybe 2500. We'll write detailed.

Let's compose.

THINK_TRACE content:
Paragraph 1: source as Erlangen for DL, multi-hop derivation.
Paragraph 2: curse and priors, formal sample complexity.
Paragraph 3: group action/representations, linear invariance poor, blueprint.
Paragraph 4: domains and models, caveats.
Paragraph 5: gray-zone audit: spectral vs spatial, gauge, WL, RNN. Need >400 words. Good.

SOURCE_OPERATORS... long with equations. Need include units and breakdown. Could be bullet list. Need word count. Good.

RETROCAUSAL... historical.

RECURSIVE... ToM.

CROSS_LAYER... veto proof.

RLVR... three scenarios.

Need ensure each section has no prohibited terms. Check: "spread" not used; "totals" maybe not; "odds" no; "moneyline" no. "aggregate" ok.

Need maybe mention "force"? Could in physical veto mention forces? Avoid "Force / Fatigue" fake. But can mention physical forces? Better avoid.

Let's write carefully.

Potential equations:
- R(\tilde f) := E_P L(\tilde f(x), f(x)), with squared loss L = 1/2 |y-y'|^2. Units: if x in [x], R in [x]^2. P probability measure dimensionless. [PAGE 10]
- min c(g) s.t. g(x_i)=f(x_i). c units maybe regularization units; no need.
- κ(d) = E_{x,x'} sup_{f∈Lip(1)} |1/N Σ f(x_l) - 1/N Σ f(x'_l)| ≃ N^{-1/d}. Units: [f]; N count. [PAGE 13]
- group action: (g.x)(u)=x(g^{-1}u). If u in m and g is isometry, no unit change. 
- representation ρ: G→GL(X), ρ(gh)=ρ(g)ρ(h). 
- deformation: ||f(ρ(τ)x)-f(x)|| ≤ C c(τ)||x||. Norm units [x]; c dimensionless normalized; C dimensionless? Actually C units? If norm L2, C dimensionless if c dimensionless. State assume c dimensionless by normalization.
- Dirichlet energy c_2(τ) = ∫Ω ||∇τ(u)||² du. If u in m, τ displacement m, ∇τ dimensionless, c_2 in m^d? Wait if τ(u) is displacement vector in m, ∇τ has units 1? τ(u) m / u m -> dimensionless. du m^d. So c_2 m^d. To make dimensionless, divide by volume or length scale. Source doesn't normalize. We can state raw units and normalization. Good.
- domain deformation d_D(Ω,Ω~) maybe units of metric if distances in m. Eq (5): ||f(x,Ω)-f(x∘η^{-1},Ω~)|| ≤ C||x|| d_D. If d_D in m, C units 1/m. State.
- group convolution: (x⋆θ)(g)=∫Ω x(u)θ(g^{-1}u)dμ(u). Units [x][θ]μ. If discrete counting measure, sum count.
- spherical conv: (x⋆θ)(R)=∫_{S²} x(u)θ(R^{-1}u)du. du steradian? S² measure sr; units [x][θ] sr. Good.
- spectral conv on compact Riemannian manifold: x(u)=Σ⟨x,φ_k⟩φ_k(u), with ⟨φ_k,φ_l⟩=δ_kl. If Ω area A in m², φ_k units m^{-1}; coefficients [x] m. Product coefficient*φ yields [x]. Filter coefficient θhat_k same? Good.
- polynomial filter: p(Δ)x = Σ α_l Δ^l x. Δ units m^{-2}; α_l units to make output [x]: α_l units m^{2l}. Could mention. Good.
- gauge conv: (x⋆Θ)(u)=∫Ω Θ(u,v)ρ(g_{v→u})x(v)dv. If vector field x units [x] per basis, Θ units [out]/([x] μ), ρ dimensionless orthogonal. Assumptions local unique geodesic.
- LSTM gate: c(t)=i(t)⊙\tilde c(t)+f(t)⊙c(t-1); h(t)=o(t)⊙tanh(c(t)). Gates dimensionless [0,1], c/h feature units. Time warping: h(t+1)=Γ R + (1-Γ)h(t). Γ dimensionless. Assumptions τ'(t)>0, approx valid if not too large. Good.

Need maybe not overdo units for every equation but enough.

RETROCAUSAL:
Need maybe mention multi-week traps explicitly:
Week 1: domain identification trap (treating graphs as grids).
Week 2: symmetry trap (permutation vs translation).
Week 3: stability trap (exact invariance vs deformation).
Week 4: spectral trap (eigenbasis instability).
Week 5: gauge trap (arbitrary frames).
Week 6: sequence trap (boundary conditions/time warping). Good.

RECURSIVE_THEORY_OF_MIND:
Could be structured:
- Crisis habit regression: When performance collapses, regress to generic MLP or deeper network. Source: universal approximation doesn't remove bias; MLPs failed shift-invariance [PAGE 16? Actually [PAGE 16] says Multi-layer Perceptrons do not have this property]. Quote? [PAGE 16] “Multi-layer Perceptrons ... do not have this property”. Good.
- Counter-trap: impose group equivariance but ignore deformation stability; e.g. Fourier modulus. Source [PAGE 29].
- Clock: multi-week protocol. Use expected risk and validation. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Need "adjudication" maybe state verdicts: VETO if physical layer invalidates symmetry; ACCEPT if stability bound certified. Use source.
Proof:
1. Define tolerance ε_tol in output units. If model f has deformation stability bound B = C c(τ)||x||. If B > ε_tol, cannot certify; veto. This follows from eq (4). Not a proof of actual error but certification veto.
2. Physical layer: biomechanics: body surface approximated by isometry [PAGE 48]. If cloth/hair violates isometry, metric distortion dis(η) > 0; domain deformation bound [PAGE 26] says error ≤ C||x|| dis(η), so large dis => veto. Units: dis in m (if distances m).
3. Weather: atmospheric scalar/vector fields on sphere. Rotations SO(3) are symmetries [PAGE 46]; scalar fields gauge trivial, vector fields need gauge [PAGE 59-64]. If using isotropic scalar Laplacian filters for wind vectors, direction information lost [PAGE 58] and gauge equivariance not satisfied; veto. Units: wind speed m s^{-1}, direction rad.
Need mention "biomechanical" and "weather" explicitly.

RLVR:
Need define RLVR? Could say "verifiable veto checks". Scenario table maybe. Need include predictions.
1. Fourier modulus deformation veto: Input x, deformation τ with ||∇τ~||∞≤ε. Metric relative L2 error. Prediction: does not decrease with ε; veto. Source [PAGE 29].
2. Spectral transfer veto: Mesh Ω, perturbed Ω~, near-isometric. Metric output difference. Prediction: direct eigenbasis convolution fails; polynomial/rational may pass. Source [PAGE 58], [PAGE 64].
3. WL expressivity veto: 1-WL GNN on 6-cycle vs two triangles. Metric representation equality. Prediction: identical outputs; veto for tasks requiring distinction. Source [PAGE 124].
Could also include gated RNN but only 3. Maybe mention RNN in think. Good.

Need maybe mention probability: For each veto, if test distribution P includes such perturbation with probability p>0, expected risk contribution ≥ p * error. Could state. Units: probability dimensionless, error units [x]. Good.

Need final no extra. Let's compose final with enough word count. Ensure no prohibited words. Use "aggregate" okay. Avoid "total" maybe? "total" could be considered betting? It says totals as betting line, but word total maybe okay. To be safe avoid "total". Use "overall". Avoid "spread" except maybe spatial spread? Could avoid. "odds" no. "line" maybe in "zero betting lines" not mention. Avoid "market" no.

Let's write. Need maybe include [PAGE N] markers exact. Use quotes. Need maybe not too many quotes but enough.

Potential issue with exact quote: Source uses “Multi-layer Perceptrons, which can approximate any smooth function, do not have this property – one of the reasons why early attempts...” [PAGE 16]. We can quote.

Let's produce final. Ensure word count. We'll make verbose. 

Double-check no betting lines: search mentally: no spreads, totals, moneylines, odds. I might use "sum" not total. OK.

Let's draft final now.

</NATIVE_REASONING>

<THINK_TRACE>
The supplied source is best read as a single multi-hop argument: deep learning succeeds in high dimensions not because generic function approximation is enough, but because physical and engineered data possess geometric regularities that can be encoded as symmetry, stability, and scale separation. The first hop is the statistical-learning setup: supervised learning estimates a target function from samples, with expected risk under the data distribution and an interpolating estimator in the noiseless idealization. [PAGE 9] The source immediately introduces the central obstacle: in high-dimensional Euclidean input spaces, generic regularity assumptions such as Lipschitz continuity or Sobolev smoothness lead to sample complexity that grows exponentially with dimension. The maximum discrepancy argument is explicit: ensuring approximation error ε for a Lipschitz class requires a number of samples growing as ε^{-d}. [PAGE 13] This is the formal reason why “pure” high-dimensional function learning is a cursed estimation problem. [PAGE 8]

The second hop is the remedy: geometric priors. The source identifies two primary priors: symmetry and scale separation. [PAGE 13] Symmetry is formalized through groups, group actions, and representations. A domain Ω carries a symmetry group G, signals are functions x : Ω → C, and the group acts on signals by reindexing the domain. The source states the signal action as (g.x)(u) = x(g−1u). [PAGE 18] Linear actions are representations ρ(g), satisfying ρ(gh) = ρ(g)ρ(h). [PAGE 19] From this, invariant and equivariant functions are defined: invariance means f(ρ(g)x) = f(x); equivariance means f(ρ(g)x) = ρ(g)f(x). [PAGE 19] This is the algebraic core of the Erlangen Programme applied to machine learning. The source explicitly connects the approach to Klein: “Klein proposed approaching geometry as the study of invariants, i.e. properties unchanged under some class of transformations, called the symmetries of the geometry.” [PAGE 5]

The third hop is the blueprint. The source argues that linear G-invariant maps alone are too poor: for a linear invariant function, the function depends on the input only through a group average, which for images would reduce to something like average color. [PAGE 31] Therefore, expressive models require composition of local equivariant maps, pointwise nonlinearities, coarsening, and finally a global invariant readout. The blueprint is summarized as linear G-equivariant layer B, nonlinearity σ, local pooling P, and G-invariant layer A. [PAGE 33] This yields the canonical form f = A ◦ σ_J ◦ B_J ◦ P_{J−1} ◦ ... ◦ P_1 ◦ σ_1 ◦ B_1. [PAGE 33] The source emphasizes that these are necessary conditions, not a single architecture: “The geometric priors we have described so far do not prescribe a specific architecture for building such representation, but rather a series of necessary conditions.” [PAGE 31]

The fourth hop is domain specialization. Grids instantiate translation symmetry and convolution; graphs instantiate permutation symmetry and neighborhood aggregation; groups and homogeneous spaces instantiate group convolution; manifolds instantiate isometry and gauge symmetry; meshes combine graph connectivity with metric and spectral structure. [PAGE 34] The architecture table makes this explicit: CNN uses grid and translation; GNN uses graph and permutation; LSTM uses one-dimensional grid and time warping. [PAGE 34] The models chapter then derives CNNs, group-equivariant CNNs, GNNs, Deep Sets, Transformers, equivariant message passing, intrinsic mesh CNNs, RNNs, and gated RNNs from this blueprint. [PAGE 72]

The gray-zone audit concerns where the blueprint becomes subtle. The first gray zone is exact symmetry versus deformation stability. Real data are noisy and deformed; exact group invariance is too rigid. The source introduces a stability inequality: ∥f(ρ(τ)x) − f(x)∥ ≤ C c(τ) ∥x∥, where c(τ) measures distance from the symmetry subgroup. [PAGE 24] The second gray zone is global Fourier invariance versus multiscale stability. Fourier modulus is shift-invariant but unstable under high-frequency deformations; wavelets are approximately equivariant with deformation error scaling with deformation size. [PAGE 29] The third gray zone is spectral convolution on manifolds and graphs. The Laplacian eigenbasis gives a natural Fourier transform, but high-frequency eigenfunctions can change dramatically under small domain perturbations, making direct spectral filters unstable. [PAGE 58] The fourth gray zone is gauge choice. On manifolds, tangent-space filters require local frames; parallel transport is path-dependent, and smooth global gauges may not exist, e.g. on the sphere. [PAGE 49] [PAGE 60] The fifth gray zone is recurrent modeling. Simple RNNs are not generally shift-equivariant unless boundary conditions are handled, and time-warping invariance requires gating mechanisms. [PAGE 96] [PAGE 103]

The audit therefore yields a strict interpretive rule: the source does not license “add invariance and finish.” It requires matching the model to the domain’s true structure, verifying deformation stability, respecting local geometric constraints, and testing whether the architecture’s expressivity aligns with the task’s discriminative requirements. This is the multi-hop conclusion: Geometric Deep Learning is a prior-design discipline, not a generic architecture zoo.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below use the source’s formalism. For continuous domains, norms are usually L2 norms over a measure; for discrete domains, the measure is counting measure, so integrals become sums. Signal units are denoted [x], filter units [θ], domain measure units μ(Ω), and group elements are dimensionless unless tied to physical coordinates.

1. Expected risk and interpolation.
The source defines supervised learning with data distribution P over X × Y and expected risk
R(\tilde f) := E_P L(\tilde f(x), f(x)). [PAGE 10]
With squared loss L(y, y') = (1/2)|y − y'|^2, the risk has units [y]^2. If a probabilistic loss such as negative log-likelihood is used instead, the risk is measured in nats per sample; if base-2 logarithms are used, bits per sample. In the noiseless interpolating regime, \tilde f(x_i) = f(x_i) for all observations. [PAGE 9]
Assumption: P is fixed and the target labels are generated by an unknown function f. Breakdown regime: if the hypothesis class contains the interpolant but the complexity measure is not controlled, generalization is not guaranteed.

2. Lipschitz curse and sample complexity.
The source states that for the Lipschitz class, the maximum discrepancy satisfies
κ(d) = E_{x,x'} sup_{f∈Lip(1)} | (1/N) Σ_l f(x_l) − (1/N) Σ_l f(x'_l) | ≃ N^{−1/d}. [PAGE 13]
Ensuring κ(d) ≃ ε requires N = Θ(ε^{−d}). [PAGE 13]
Units: N is a dimensionless count; ε is an output tolerance in [f]; κ has units [f]. Breakdown regime: as input dimension d grows, required N becomes astronomical even for modest ε.

3. Group action on signals.
For a group G acting on domain Ω, the induced action on signals is
(g.x)(u) = x(g^{-1}u). [PAGE 18]
Units: u has domain units, for example meters for a spatial grid; x(u) has signal units [x]. The inverse ensures a valid left action: (g.(h.x))(u) = ((gh).x)(u). [PAGE 18]
Assumption: G acts compatibly on Ω. Breakdown regime: if the supposed transformation is not invertible or not closed under composition, it is not a group action.

4. Group representation.
A representation is a map ρ : G → GL(X) satisfying
ρ(gh) = ρ(g)ρ(h). [PAGE 19]
If X is finite-dimensional, ρ(g) is a matrix; if X is infinite-dimensional, ρ(g) is a linear operator. Units: ρ preserves signal units [x]. Breakdown regime: if ρ(g) is not invertible, it is not a representation of a group.

5. Invariance and equivariance.
A function f : X(Ω) → Y is G-invariant if
f(ρ(g)x) = f(x). [PAGE 19]
A function f : X(Ω) → X(Ω) is G-equivariant if
f(ρ(g)x) = ρ(g)f(x). [PAGE 20]
More generally, input and output representations may differ: f(ρ(g)x) = ρ'(g)f(x). [PAGE 20]
Units: f(x) has output units [y]; equivariance preserves the transformation law of the output.

6. Linear invariants are insufficient.
For a linear G-invariant f, the source gives
f(x) = (1/µ(G)) ∫_G f(g.x) dµ(g) = f( (1/µ(G)) ∫_G (g.x) dµ(g) ). [PAGE 31]
Here µ(G) is the Haar measure. This shows that a linear invariant map depends on x only through the group average. For images and translations, this would reduce the representation to average color. [PAGE 31]
Assumption: Haar measure exists and is finite or suitably normalized. Breakdown regime: for noncompact groups or infinite domains, normalization requires care.

7. Deformation stability.
The source defines approximate invariance as
∥f(ρ(τ)x) − f(x)∥ ≤ C c(τ) ∥x∥, ∀x ∈ X(Ω). [PAGE 24]
Here c(τ) = 0 when τ ∈ G. For Euclidean image deformations, a common cost is the Dirichlet energy
c_2(τ) := ∫_Ω ∥∇τ(u)∥^2 du. [PAGE 25]
If u has units of meters and τ is a displacement in meters, ∇τ is dimensionless and c_2 has units m^d; a normalized cost can be made dimensionless by dividing by a domain volume or length scale. C then carries whatever units are needed to make both sides have units [x].
Breakdown regime: large deformations increase c(τ), so stability certification fails; the bound no longer guarantees small semantic change.

8. Domain deformation stability.
For varying domains Ω and \tilde Ω, the source defines stability as
∥f(x, Ω) − f(\tilde x, \tilde Ω)∥ ≤ C ∥x∥ d_D(Ω, \tilde Ω). [PAGE 26]
If d_D is measured in meters, C has units 1/meter. The distance d_D may be graph edit distance or Gromov–Hausdorff distance. [PAGE 26]
Breakdown regime: if the deformation changes connectivity or metric structure beyond the tolerance, the model’s output is not certified stable.

9. Fourier modulus instability.
For an approximate translation τ(u) = u − \tilde τ(u) with ∥∇\tilde τ∥_∞ ≤ ε, the Fourier modulus f(x) = |\hat x| satisfies
∥f(ρ(τ)x) − f(x)∥ / ∥x∥ = O(1)
irrespective of how small ε is. [PAGE 29]
The source concludes: “Consequently, such Fourier representation is unstable under deformations, however small.” [PAGE 29]
Units: the relative error is dimensionless. Breakdown regime: any nonzero high-frequency deformation can cause order-one instability.

10. Wavelet stability.
The source states that wavelet decomposition is approximately equivariant to deformations:
∥ρ(τ)(W_ψ x) − W_ψ(ρ(τ)x)∥ / ∥x∥ = O(ε). [PAGE 29]
Units: relative error is dimensionless. Assumption: deformation is small in the chosen gradient norm. Breakdown regime: large deformations or high-frequency aliasing break the approximation.

11. Group convolution.
For signals on Ω and a group G acting on Ω, group convolution is
(x ⋆ θ)(g) = ⟨x, ρ(g)θ⟩ = ∫_Ω x(u) θ(g^{-1}u) du. [PAGE 45]
Units: [x][θ]μ(Ω). If Ω is discrete, the integral becomes a sum. The output is a function on G, not necessarily on Ω. [PAGE 45]
Assumption: integration over Ω is well-defined; for general groups, local compactness and invariant measure are needed. Breakdown regime: groups too large to integrate over, such as the permutation group Σ_n with n! elements, make direct group convolution impractical. [PAGE 43]

12. Spherical convolution.
For Ω = S^2 and G = SO(3),
(x ⋆ θ)(R) = ∫_{S^2} x(u) θ(R^{-1}u) du. [PAGE 46]
Units: du is a solid-angle measure in steradians; output depends on rotation R, which is dimensionless but has three real parameters. Breakdown regime: because the output lives on SO(3), stacking layers requires defining signals on SO(3), not merely on S^2. [PAGE 46]

13. Spectral convolution on compact manifolds.
The Laplace–Beltrami operator has eigenfunctions Δφ_k = λ_k φ_k, with orthonormality ⟨φ_k, φ_l⟩ = δ_{kl}. [PAGE 53] The source defines spectral convolution as
(x ⋆ θ)(u) = Σ_{k≥0} (\hat x_k · \hat θ_k) φ_k(u). [PAGE 58]
If Ω has area units m^2 and the basis is orthonormal in L2(Ω), φ_k has units m^{-1}, while \hat x_k has units [x]·m. The product \hat x_k φ_k has units [x].
Assumption: Ω is compact, the spectrum is discrete, and the eigenbasis is orthogonal. Breakdown regime: high-frequency eigenfunctions can change dramatically under small near-isometric perturbations, making direct spectral filtering unstable. [PAGE 58]

14. Polynomial spectral filters.
To avoid explicit eigendecomposition, the source uses filters of the form
\hat p(Δ)x = Σ_{l=0}^r α_l Δ^l x. [PAGE 59]
If Δ has units m^{-2}, then α_l must have units m^{2l} to make each term have the same output units. Polynomial filters of degree r are localized in the r-hop neighborhood. [PAGE 65]
Breakdown regime: on meshes of different resolution, the same polynomial degree may correspond to different physical support radii. [PAGE 65]

15. Gauge-equivariant convolution on manifolds.
For vector fields, the source defines
(x ⋆ Θ)(u) = ∫_Ω Θ(u, v) ρ(g_{v→u}) x(v) dv. [PAGE 64]
Here g_{v→u} is parallel transport from v to u along a geodesic, and ρ(g_{v→u}) is an orthogonal rotation matrix in the chosen representation. Units: if x has units [x] and dv has domain units μ, Θ has units [output]/([x]μ). ρ is dimensionless and norm-preserving.
Assumptions: unique minimizing geodesic between u and v, local filter support, and a chosen structure group such as SO(s) or O(s). Breakdown regime: parallel transport is path-dependent on curved manifolds; smooth global gauges may not exist, e.g. on non-parallelizable manifolds such as S^2. [PAGE 49] [PAGE 60]

16. RNN update and time warping.
A SimpleRNN update is
h(t) = σ(W z(t) + U h(t−1) + b). [PAGE 96]
Units: z and h have feature units; W, U, b are learned parameters; σ is elementwise. The source shows that shift equivariance requires boundary handling; with left padding, h(0) must be a fixed point of h ↦ R(0, h). [PAGE 97]

For time-warping invariance, the source derives
h(t+1) = Γ(z(t+1), h(t)) R(z(t+1), h(t)) + (1 − Γ(z(t+1), h(t))) h(t). [PAGE 103]
Γ is dimensionless and lies in (0, 1). The derivation assumes a monotonically increasing time warping τ(t), so dτ(t)/dt > 0, and relies on a first-order Taylor approximation. [PAGE 103]
Breakdown regime: if time is contracted so strongly that intermediate inputs are not sampled, the model cannot access the same information; the Taylor approximation fails when dτ(t)/dt is too large. [PAGE 103]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage in the source is explicitly retro-causal in the sense that later deep-learning architectures are treated as delayed realizations of much older geometric principles. The first ancestor is Euclid’s classical geometry, whose monopoly ended with non-Euclidean geometries and was reorganized by Klein’s Erlangen Programme. The source states that Klein proposed “approaching geometry as the study of invariants, i.e. properties unchanged under some class of transformations, called the symmetries of the geometry.” [PAGE 5] This is the conceptual seed of Geometric Deep Learning: architecture design is not arbitrary; it is the search for the correct symmetry group of the data domain.

The second ancestor is group theory and representation theory. The source traces group theory to Galois, Lie, Klein, and Noether. [PAGE 118] Noether’s theorem is especially important because it connects differentiable symmetry to conservation laws, showing that symmetry is not merely descriptive but generative. The source says Noether proved that “every differentiable symmetry of the action of a physical system has a corresponding conservation law.” [PAGE 118] In the machine-learning analogy, symmetry becomes a generative constraint on hypothesis classes: instead of conservation laws, one obtains invariant or equivariant function spaces.

The third ancestor is harmonic analysis. Fourier analysis appears first as the diagonalization of translation-equivariant operators. The source derives the discrete Fourier basis as eigenvectors of the shift operator and shows that circulant matrices are diagonalized by the Fourier transform. [PAGE 37] This historical fact becomes a warning as well as a tool: Fourier bases are optimal for fixed translation symmetry but unstable when the domain itself deforms. The wavelet tradition enters as the multiscale correction. The source notes that wavelets are localized in space and frequency, unlike globally supported Fourier atoms. [PAGE 24]

The fourth ancestor is gauge theory in physics. The source connects gauge transformations to local frames on bundles. In physics, Weyl introduced gauge invariance, later generalized by Yang and Mills. The source remarks that gauge theory “proved successful in providing a unified framework to describe the quantum-mechanical behavior of electromagnetism and the weak and strong forces.” [PAGE 119] In Geometric Deep Learning, gauge symmetry becomes the requirement that predictions not depend on arbitrary local coordinate frames, especially for vector fields on manifolds.

The fifth ancestor is signal processing on graphs and meshes. The source credits graph signal processing, spectral mesh processing, and early GNN work as parallel lineages. It notes that non-Euclidean harmonic analysis in computer graphics predates graph signal processing by at least a decade. [PAGE 126]

Multi-week traps in this genealogy are recurrent. Week one trap: treating all domains as grids, thereby imposing translation symmetry where permutation symmetry is required. Week two trap: treating graphs as fixed grids, ignoring that graph Fourier bases depend on graph structure and do not transfer across domains. [PAGE 39] Week three trap: confusing invariance with equivariance, for example assuming convolutional layers are shift-invariant when they are shift-equivariant and global pooling is what creates invariance. [PAGE 16] Week four trap: using spectral filters as if eigenfunctions were stable across near-isometric domains; the source explicitly warns against this. [PAGE 58] Week five trap: ignoring gauge ambiguity on manifolds and assuming a canonical local frame exists. [PAGE 60] Week six trap: forgetting recurrent boundary conditions and time-warping invariances, which causes apparent sequence-model failures to be misdiagnosed as optimization problems rather than geometric ones. [PAGE 96] [PAGE 103]
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind for this source means modeling how a reasoning agent anticipates its own failure modes when applying geometric priors. The crisis is not merely low accuracy; it is a structural mismatch between the model’s assumed domain and the true data-generating domain. The source’s own framework provides a way to infer what the model “believes” about the data: the chosen symmetry group, the assumed locality radius, the pooling hierarchy, and the invariance target.

Crisis habit regression is the first failure mode. When a task becomes high-dimensional or unstructured, the habit is to regress to generic universal approximation: a multilayer perceptron, a deeper network, or a larger Transformer. The source warns that universal approximation does not remove inductive bias and that generic MLPs lack shift invariance. It says Multi-layer Perceptrons “do not have this property” of shift-invariant classification and that this was one reason early pattern-recognition attempts failed. [PAGE 16] In crisis, the agent may therefore choose a high-capacity but geometrically ignorant model, hoping optimization will discover structure. The source’s response is that structure should be built in: “a natural question arises: how to define effective priors that capture the expected regularities and complexities of real-world prediction tasks?” [PAGE 7]

The counter-trap is overcorrection. After seeing the failure of generic models, the agent imposes a symmetry too aggressively. Examples include enforcing exact rotation equivariance when the data contain reflections, enforcing permutation invariance when node order carries semantic information, or using global Fourier invariance when local deformations are present. The source’s deformation-stability section is the antidote: exact symmetry is an idealization, and one must quantify how far a transformation is from the symmetry subgroup. [PAGE 24] The counter-trap fails when the model becomes stable to the wrong transformation group or becomes unstable to small but semantically relevant deformations.

The clock is the temporal verification protocol. A multi-week clock should proceed as follows. First, identify the domain type: set, graph, grid, group, manifold, mesh, or sequence. Second, identify the true symmetry group: permutation Σ_n, translation, rotation SO(3), isometry, gauge, or time warping. Third, test whether the architecture is invariant where required and equivariant where required. Fourth, test deformation stability using the source’s inequalities. Fifth, test scale separation: does pooling coarsen the domain without destroying task-relevant structure? Sixth, test expressive limits, for example whether a message-passing GNN is being asked to solve a task beyond its local aggregation power. The source’s Weisfeiler–Lehman discussion shows that some graph distinctions cannot be made by standard local aggregation. [PAGE 124]

In adversarial or crisis conditions, the agent should ask a counterfactual question: if the domain were deformed, permuted, resampled, or gauge-transformed, would the model’s output change in the correct way? If the answer cannot be certified by a formal invariance, equivariance, or stability bound, the model should be treated as unverified rather than merely underperforming. This is the recursive mind: the model is not only predicting data, but predicting whether its own geometric assumptions remain valid.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer veto adjudication checks whether a lower-layer physical, biomechanical, or weather constraint invalidates a higher-layer geometric-learning assumption. The source provides the necessary formalism: deformation stability, domain deformation stability, spectral instability, and gauge dependence. A model may be vetoed even if its empirical loss appears acceptable on a narrow test set, because the veto concerns certification under the true domain transformation.

General veto criterion. Let f be a candidate model, x a signal, and τ a deformation. The source’s signal-deformation stability bound is
∥f(ρ(τ)x) − f(x)∥ ≤ C c(τ) ∥x∥. [PAGE 24]
Let ε_tol be a task tolerance in output units. If C c(τ) ∥x∥ > ε_tol for an admissible deformation τ, then the model cannot certify invariance or equivariance at the required tolerance. This is a formal veto: not necessarily proof of catastrophic error, but proof that the geometric guarantee is absent. For domain deformation, the analogous criterion is
∥f(x, Ω) − f(\tilde x, \tilde Ω)∥ ≤ C ∥x∥ d_D(Ω, \tilde Ω). [PAGE 26]
If d_D is large in the domain’s metric units, the guarantee fails.

Physical veto. Suppose a model assumes that a 3D object is a Riemannian manifold whose identity is preserved under isometric deformation. The source says the human body is an example of a non-rigid object deforming in a nearly isometric way. [PAGE 48] If the physical object is not approximately isometric—for example, a soft membrane stretches non-negligibly—then the pullback metric changes. The metric distortion dis(η) becomes nonzero in distance units, and the domain-deformation bound may exceed tolerance. In such a case, any intrinsic isometric model is vetoed until the deformation model is revised.

Biomechanical veto. For body-shape or motion modeling, the surface approximation is useful only when local distances along the surface are preserved. The source emphasizes that intrinsic quantities depend on the Riemannian metric and are unaffected by isometric deformations. [PAGE 46] If biomechanical motion includes large tangential sliding, tissue compression, or non-isometric stretching, the assumed isometry group is too small. A model trained on one pose may fail when the metric changes. The veto is certified by estimating discrete edge-length changes or metric distortion; if those changes exceed the stability tolerance, the model is not admissible for that biomechanical regime.

Weather veto. Weather fields are often naturally represented on the sphere, with rotations SO(3) as a plausible global symmetry. The source discusses spherical convolution for signals on S^2 with group SO(3). [PAGE 46] Scalar fields such as temperature or pressure can be processed with scalar convolutions. But vector fields such as wind require local frames and gauge handling. The source states that vector fields require a gauge and that parallel transport is path-dependent. [PAGE 49] [PAGE 64] If a weather model uses isotropic scalar Laplacian filters for directional vector quantities, it discards direction information. The source notes that Laplacian-based filters are isotropic and have no sense of direction. [PAGE 54] Therefore, a model predicting wind direction, vorticity, or advection using only scalar isotropic filters is vetoed unless it adds gauge-equivariant or anisotropic operators. Units make this concrete: temperature is measured in kelvin, pressure in pascals, wind speed in meters per second, and direction in radians; a scalar isotropic filter may preserve kelvin-like fields but not radian-valued vector orientation.

Spectral weather veto. Another veto arises if a weather model uses a direct graph Fourier or spherical harmonic basis across differently discretized domains. The source warns that high-frequency eigenfunctions can change dramatically under small near-isometric perturbations. [PAGE 58] If the model is trained on one mesh or grid and tested on another, the spectral basis may not transfer. The veto is certified by comparing outputs under remeshing or small geometric perturbation; if the discrepancy exceeds tolerance, the spectral model is rejected in favor of polynomial, rational, or spatially local stable filters. [PAGE 65]

Final adjudication rule. Accept the model only if the assumed domain, symmetry group, metric, gauge structure, and stability regime all align with the physical layer. Otherwise, veto and redesign.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style veto scenarios: each defines a counterfactual perturbation, a measurable acceptance test, and a predicted outcome grounded in the source.

Veto 1: Fourier modulus under small deformation.
Scenario: Let x be an image-like signal on a grid. Apply a deformation τ with ∥∇\tilde τ∥_∞ ≤ ε, where τ is close to a translation but not exactly a translation. Use f(x) = |\hat x|, the Fourier modulus, as a supposedly shift-invariant representation.
Verification metric: Compute relative deformation error
E = ∥f(ρ(τ)x) − f(x)∥ / ∥x∥.
Source prediction: The source states that for approximate translation with bounded gradient, the error can be O(1) irrespective of how small ε is. [PAGE 29] It concludes that Fourier representation is unstable under deformations, however small. [PAGE 29]
Veto rule: If E does not decrease proportionally to ε, the Fourier-modulus representation is vetoed for deformation-robust classification or retrieval.
Probability interpretation: If the deployment distribution assigns probability p > 0 to such deformed inputs, the expected error contribution is at least p times the observed O(1) error. The veto is therefore not merely qualitative; it has an expected-risk consequence.

Veto 2: Direct spectral filtering across near-isometric domains.
Scenario: Let Ω be a mesh or manifold domain with Laplacian eigenfunctions φ_k. Let \tilde Ω be a near-isometric perturbation. Train or define a spectral filter using Ω’s eigenbasis, then apply it to \tilde Ω.
Verification metric: Compare the output on \tilde Ω using Ω’s basis against the output using \tilde Ω’s own basis, or compare against a stable polynomial/rational filter.
Source prediction: The source states that high-frequency eigenfunctions can change dramatically as a result of even small near-isometric perturbations. [PAGE 58] Direct spectral convolution can therefore be geometrically unstable. [PAGE 58]
Veto rule: If the spectral-filter output changes beyond task tolerance under small remeshing or perturbation, the direct spectral model is vetoed. The source suggests polynomial or rational filters as more stable alternatives. [PAGE 59] [PAGE 65]
Prediction: A direct eigenbasis filter will show larger variance and poorer transfer than a polynomial filter of fixed differential order, especially on high-frequency components.

Veto 3: One-step message-passing GNN on a pair of non-isomorphic graphs.
Scenario: Use a standard local GNN with permutation-invariant neighborhood aggregation to distinguish a 6-cycle from two disjoint triangles. Both graphs have the same degree sequence and are not distinguished by one-step Weisfeiler–Lehman color refinement.
Verification metric: Train or initialize a GNN and compare node or graph representations. If the GNN assigns identical or indistinguishable representations to the two graphs on a task requiring their distinction, it fails.
Source prediction: The source states that the Weisfeiler–Lehman test cannot distinguish a 6-cycle from two triangles. [PAGE 124] It also states that GNNs conforming to the standard local aggregation flavors cannot be more powerful than the WL test. [PAGE 124]
Veto rule: If the task requires distinguishing graphs that are WL-indistinguishable, standard local GNNs are vetoed unless augmented by higher-order structure, identifiers, positional encodings, topological features, or other symmetry-breaking mechanisms. [PAGE 125]
Probability interpretation: If the test distribution contains such hard pairs with nonzero probability, the expected task risk of the unaugmented GNN is bounded away from the Bayes risk unless additional information is supplied.

Cross-veto synthesis. These three vetoes share a common structure: the model’s inductive bias is correct only inside a restricted transformation regime. Fourier invariance fails under deformation; spectral convolution fails across varying domains; local message passing fails beyond its discriminative closure. The source’s blueprint remains valid, but it demands explicit certification of the domain, symmetry group, stability, and expressive power before deployment.
</RLVR_COUNTERFACTUAL_VETOES>
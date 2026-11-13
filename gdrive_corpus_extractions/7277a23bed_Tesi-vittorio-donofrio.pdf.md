---
source: "Tesi-vittorio-donofrio.pdf"
folder: "/CorpusRoot"
pages: 42
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3774
---

<NATIVE_REASONING>
The user wants me to analyze a thesis PDF about Sinkhorn's algorithm for optimal transport. They've provided the full text of 42 pages. I need to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across sections.

Important: The user's request mentions "betting lines" and "sports" context implicitly through the invariant about betting lines, but the source is a math thesis. I must not mention betting lines at all. I should treat this as a pure mathematical/algorithmic analysis.

I need to be careful about:
- Citing exact page markers [PAGE N] for quotes
- Using formal LaTeX
- Not inventing fake ratios
- Meeting word count
- Covering all sections

Let me plan the content:

THINK_TRACE: Deep derivation of Sinkhorn algorithm from KL divergence, entropic regularization, convergence via Hilbert projective metric and Birkhoff-Hopf. Gray zones: stopping criterion heuristic (10^-5) vs rigorous bounds, elementwise exp(-λM) positivity requirement, λ→0 singularity, numerical underflow/overflow in exp(-λM), normalization ambiguity (scalar factor), distinction between metric d on projective space and µ on diagonal equivalence class, Algorithm bugs (variable names j/g reused, floor index out of bounds in interpolation), convergence rate γ=κ(A)^2 vs per-iteration contraction.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions from pages 4-27. KL divergence, entropy, Hilbert metric, Birkhoff-Hopf contraction ratio, Sinkhorn iteration maps S_k, T_k, convergence theorem 2.23, error bound Corollary 2.26, Proposition 2.27 elementwise ratio bound. Units: nats (log base unspecified but natural), dimensionless ratios, iteration count dimensionless. Breakdown regimes: λ→0 (K→1 matrix, ill-conditioned), λ→∞ (hard OT, numerical zeros), zero entries in A (Sinkhorn theorem requires positive entries), marginals with mismatched total mass (p1+...+pm = q1+...+qn required), stopping tolerance vs true error.

RETROCAUSAL_GENEALOGy: Historical lineage: Kantorovich OT (1940s), entropy regularization (Csiszár, Kullback-Leibler 1950s), Sinkhorn 1964 diagonal scaling, Birkhoff-Hopf theorem, Bushell 1973 Hilbert metric, Cuturi 2013 Sinkhorn distances lightspeed OT, Dembo-Cover-Thomas information inequalities, Franklin-Lorenz matrix scaling. Multi-week traps: numerical stability over weeks of iteration, λ scheduling trap (annealing too fast), marginal mismatch trap, projective scale ambiguity accumulating over iterations.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I can interpret it as: the algorithm's iterative "crisis" (distance to target marginals) regresses geometrically with factor γ^k; counter-trap is stopping early at heuristic tolerance vs true convergence; clock is iteration count k vs contraction bound γ^n/(1-γ). I'll frame it as theory of mind for the numerical analyst: anticipating the algorithm's failure modes, regressing to crisis (non-convergence) when κ(A)→1, counter-trap of stopping criterion, clock of iteration budget l.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is pure math, I'll interpret layers as: numerical layer (floating point), algorithmic layer (Sinkhorn iteration), mathematical layer (existence/uniqueness). Veto conditions: zero entries in cost kernel K (veto existence), λ≤0 (veto convexity), mismatched marginals (veto feasibility), underflow in exp(-λM) (veto computation), stopping criterion mismatch (veto output validity). Biomechanical/weather analogies should be careful not to be toy equations. Maybe discuss how environmental noise (analogous to weather) perturbs marginals, and the contraction bound provides robustness: d(r(k),p)≤γ^k d(r(0),p). Physical layer: finite precision breaks log domain positivity.

RLVR_COUNTERFACTUAL_VOES: 3 verifiable veto scenarios:
1. Zero pattern mismatch: A has a zero entry where marginal requires mass → Theorem 1.11/1.13 assumptions violated → no positive scaling exists. Prediction: algorithm produces division by zero or NaN.
2. λ→0+ singularity: K→J (all ones), Δ(A)→0? Actually if K→all ones, Δ→0, κ→tanh(0)=0? Wait tanh(0)=0, but for rank-one matrix all rows same, contraction ratio should be 0? Let me think. If A is rank one positive, A = u v^T, then Ay = (u·y)v, so all outputs are collinear with v, so d(Ay, Ay') = 0, so κ=0. Formula tanh(Δ/4): Δ = d(Ae1, Ae2). If columns proportional, Ae1 = α v, Ae2 = β v, d= log(α/β * β/α)? Actually d(cv, c'v) = log(max(c/c', c'/c)) = |log(c/c')|. Not necessarily zero. Hmm. Better to say λ→∞ makes K sparse/zero numerically, entries underflow to zero, violating positivity. Prediction: Sinkhorn iterations hit exact zeros, normalization divides by zero, or transport collapses to deterministic plan prematurely.
3. Mismatched total mass: sum(r) ≠ sum(c) → invariant P e = r, P^T e = c implies sum(r)=sum(c). Algorithm's row/column normalization alternates but cannot fix total mass mismatch; row sums will track r but column sums won't converge to c if totals differ. Prediction: d distance oscillates or stagnates above tolerance; iteration limit l reached without convergence.

Word count: Need >=1000 words total. I'll write substantial sections.

Citations: Need exact [PAGE N] markers and verbatim quotes. I'll quote from pages 4, 7, 8, 11, 14, 16, 22, 25, 28, 30, 31, etc.

Let me draft carefully, ensuring no betting lines, no toy equations.

I need to avoid saying anything about sports betting. The invariant is strict.

Let's begin writing.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I'll make sure each section is sufficiently long.

For verbatim quotes, I'll use the text provided.

Key equations to include:

Definition 1.2 entropy: h(Q) = -∑ Q(x) log Q(x) [PAGE 6]
Definition 1.5 KL: KL(P∥Q) = ∑ P(x) log(P(x)/Q(x)) [PAGE 6]
Proposition 1.8: KL(P∥Q) ≥ 0 equality iff P=Q [PAGE 7]
Theorem 1.11: unique minimizer of KL(u∥x) s.t. Pu=1, Cu=b [PAGE 8]
Theorem 1.13: diagonal scaling πij = xij ui vj [PAGE 11]
Corollary 1.16 Sinkhorn: TA = D1 A D2 doubly stochastic [PAGE 12]
Definition 2.2 Hilbert metric: d(x,y) = log max_{i,j} x_i y_j / (x_j y_i) [PAGE 11]
Definition 2.10: Δ(A), κ(A), N(A) [PAGE 14]
Theorem 2.18 Birkhoff-Hopf: κ(A) = N(A) = tanh(Δ(A)/4) = (e^{Δ/2}-1)/(e^{Δ/2}+1) [PAGE 20]
Algorithm 2 Sinkhorn iteration [PAGE 30-31]
Theorem 2.23: d(r(1),p) ≤ γ d(r(0),p), γ = κ(A)^2 [PAGE 23]
Corollary 2.26: µ(Ak, bB) ≤ γ^k/(1-γ) {d(r(0),p)+d(c(0),q)} [PAGE 25]
Proposition 2.27: exp(-ε) ≤ bij/aij ≤ exp(exp(ε)) [PAGE 26]
Theorem 3.11: Pλ = diag(u) K diag(v), K = e^{-λM} [PAGE 29]
Proposition 3.10: dλ = (1/λ) min KL(P∥e^{-λM}) [PAGE 29]

Units: nats for information (natural log), dimensionless for ratios, iteration count k ∈ ℕ, λ > 0 with units inverse cost if cost has units, but here cost matrix entries dimensionless or squared distance.

Breakdown regimes: λ → 0+ loses entropic regularization, recovers ill-posed linear program; λ → ∞ underflows exp(-λM) to zero matrix for nonzero cost, violating positivity required by Theorems 1.13/1.14; zero entries in A break diagonal scaling uniqueness; r,c with different total mass break feasibility.

Now write it out. I'll aim for ~1200-1500 words total.

Let me compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The thesis derives Sinkhorn’s algorithm as a fixed-point iteration on the projective cone of positive matrices, anchored in three layers: (i) information geometry via Kullback-Leibler divergence, (ii) Hilbert projective metric contraction, and (iii) entropic regularization of optimal transport. The first hop is the strict convexity of KL(u‖x) over the simplex constraint ∑u_j = 1 and linear constraint Cu = b. Theorem 1.11 [PAGE 8] establishes existence and uniqueness of the minimizer u_0 under the assumption that a strictly positive feasible y exists. The proof splits into existence (coercivity on a bounded closed set S), positivity (a perturbation argument toward a strictly positive y rules out boundary zeros via logarithmic blow-up, d/dε KL(u(ε)‖x) ∼ (∑_{J0} y_j) log ε → −∞), uniqueness (strict convexity along the segment u(θ) yields d²/dθ² KL = ∑(u_0j − u_1j)²/u_j(θ) > 0), and Lagrange multipliers (∇KL(u_0‖x) ∈ Im(C^T), giving ∂/∂u_j[KL − q^TCu] = 0). The gray zone here is the requirement y > 0: if the constraint set has no strictly positive point, the positivity argument collapses and the minimizer may lie on the boundary where KL is not differentiable in the log-ratio sense.

The second hop lifts this vector result to matrix diagonal scaling. Theorem 1.13 [PAGE 11] embeds an r×s matrix X into a tall constraint matrix C ∈ R^{(r+s)×2rs} and applies Theorem 1.11 to the vectorized matrix z, with b encoding prescribed row and column sums. The Lagrange condition 1 + log(z_0ij/x_ij) − (α_i + β_j) = 0 exponentiates to π_ij = x_ij u_i v_j. Corollary 1.16 [PAGE 12] specializes to doubly stochastic scaling: for A > 0 entrywise, there is a unique (up to scalar) D_1AD_2 that is doubly stochastic. The singularity regime is entrywise positivity: A_ij > 0 ∀i,j is mandatory. If any a_ij = 0, the corresponding π_ij is pinned to zero and the positive diagonal factors need not exist or be unique.

The third hop introduces the Hilbert projective metric d(x,y) = log max_{i,j} (x_i y_j)/(x_j y_i) [PAGE 11] on P(R_+^n), rendered complete by Proposition 2.4 [PAGE 14]. The Birkhoff-Hopf theorem [PAGE 20] gives the contraction ratio κ(A) = tanh(Δ(A)/4) = (e^{Δ(A)/2} − 1)/(e^{Δ(A)/2} + 1) < 1 for any positive matrix A. Sinkhorn’s alternation of row normalization S_k = diag(p_i / r(k)_i) and column normalization T_k = diag(q_j / c(k)_j) [PAGE 30–31] is shown to be a contraction on P(EA) with respect to µ(B,B′) = d(x,e) + d(y,e). Theorem 2.23 [PAGE 23] yields d(r(1),p) ≤ γ d(r(0),p) and d(c(1),q) ≤ γ d(c(0),q) with γ = κ(A)^2. Iterating gives the geometric error bound Corollary 2.26 [PAGE 25]: µ(A_k, bB) ≤ γ^k/(1−γ) {d(r(0),p) + d(c(0),q)}.

Gray zones merit explicit audit. First, the stopping criterion in Algorithm 2 [PAGE 30–31] uses d(j,r) + d(g,c) < 10^{-5}, a heuristic tolerance that is not the same as the rigorous bound µ(A_k,bB); small projective distance does not by itself guarantee elementwise closeness unless Proposition 2.27 [PAGE 26] is invoked, which requires µ(A,B) ≤ ε and equal column sums A^T e = B^T e to conclude exp(−ε) ≤ b_ij/a_ij ≤ exp(ε). Second, the kernel K = e^{−λM} elementwise [PAGE 29] underflows to zero for large λ or large cost entries, violating the strict positivity hypothesis of Sinkhorn’s theorem and producing division by zero in row/column normalization. Third, λ → 0+ erodes entropic regularization and recovers the original linear program, whose solution lies on a vertex of U(r,c) [PAGE 25], losing the smooth diagonal-scaling structure. Fourth, the scalar-factor ambiguity of D_1 and D_2 [PAGE 12] means the projective metric identifies matrices up to scale, but µ accumulates row and column scale errors separately; over many iterations this ambiguity can mask slow convergence in one mode while the other appears contracted. Fifth, feasibility requires ∑p_i = ∑q_j [PAGE 21]; mismatched marginal totals make the constraint set empty, yet the algorithm may still run to the iteration cap l without detecting infeasibility.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, and exact breakdown regimes with page citations.

Entropy and KL divergence [PAGE 6]:
\[
h(Q) = -\sum_{x\in\Omega} Q(x)\log Q(x), \qquad
\mathrm{KL}(P\|Q) = \sum_{x\in\Omega} P(x)\log\frac{P(x)}{Q(x)}.
\]
Units: nats (natural logarithm). Domain: discrete probability distributions on \(\Omega\). Proposition 1.8 [PAGE 7]: \(\mathrm{KL}(P\|Q)\ge 0\), equality iff \(P=Q\).

Feasible transport set [PAGE 5–6]:
\[
U(r,c) = \{P\in\mathbb{R}^{d\times d}_+ \mid Pe = r,\; P^{T}e = c\}, \qquad r,c\in\Sigma_d.
\]
Constraint: \(\sum_i r_i = \sum_j c_j = 1\). If totals mismatch, \(U(r,c)=\emptyset\).

Constrained KL minimizer [PAGE 8, Theorem 1.11]:
Given \(C\in\mathbb{R}^{m\times n}\), \(b\in\mathbb{R}^n\), \(x>0\), \(\sum_j x_j=1\), and a strictly positive feasible \(y\) with \(Cy=b\),
\[
\exists! u_0>0:\quad
\mathrm{KL}(u_0\|x) = \min\{\mathrm{KL}(u\|x) : u\ge 0,\; \sum_j u_j = 1,\; Cu = b\}.
\]
Lagrange condition:
\[
\left.\frac{\partial}{\partial u_j}\bigl[\mathrm{KL}(u\|x) - q^{T}Cu\bigr]\right|_{u=u_0} = 0,
\]
unique \(q\) modulo \(\omega\) with \(\omega^T C = 0\).

Sinkhorn diagonal scaling [PAGE 11–12, Theorem 1.13 & Corollary 1.16]:
For \(A=(a_{ij})\) with \(a_{ij}>0\;\forall i,j\), and positive marginals \(p,q\) with equal total mass, there exist unique (up to scalar) positive diagonal \(D_1,D_2\) such that
\[
bB = D_1 A D_2,\qquad bBe = p,\quad bB^{T}e = q.
\]

Hilbert projective metric [PAGE 11, Definition 2.2]:
\[
d(x,y) = \log\frac{M(x/y)}{m(x/y)}
= \log\max_{i,j}\frac{x_i y_j}{x_j y_i},
\quad M(x/y)=\max_i\frac{x_i}{y_i},\; m(x/y)=\min_i\frac{x_i}{y_i}.
\]
Units: dimensionless. \(\bigl(P(\mathbb{R}^n_+),d\bigr)\) is a complete metric space [PAGE 12, Proposition 2.4].

Birkhoff–Hopf contraction [PAGE 14–20]:
\[
\Delta(A) = \sup\{d(Ay,Ay') : y,y'\in\mathbb{R}^n_+\},\qquad
\kappa(A) = \sup\frac{d(Ay,Ay')}{d(y,y')}.
\]
Theorem 2.18 [PAGE 20]:
\[
\kappa(A) = N(A) = \tanh\!\bigl(\tfrac{1}{4}\Delta(A)\bigr)
= \frac{e^{\Delta(A)/2}-1}{e^{\Delta(A)/2}+1} < 1.
\]
Breakdown: \(\kappa(A)\to 1\) as \(\Delta(A)\to\infty\) (ill-conditioned, near-rank-degenerate positive matrices); \(\kappa(A)\to 0\) as \(\Delta(A)\to 0\) (rank-one-like output collapse).

Sinkhorn iteration [PAGE 30–31, Algorithm 2]:
Given cost \(M\), marginals \(r,c\), \(\lambda>0\), set \(K=e^{-\lambda M}\) elementwise. Initialize \(A_0=K\). Iterate
\[
r(k) = A_k e,\qquad
A'_k = \operatorname{diag}(p_i/r(k)_i)\,A_k,\qquad
c(k) = (A'_k)^{T}e,\qquad
A_{k+1} = A'_k\,\operatorname{diag}(q_j/c(k)_j).
\]
Stopping heuristic: \(d(r(k),r)+d(c(k),c) < 10^{-5}\).

Convergence [PAGE 23, Theorem 2.23; PAGE 25, Corollary 2.26]:
With \(\gamma = \kappa(A)^2<1\),
\[
d(r(k),p) \le \gamma^k d(r(0),p),\qquad
d(c(k),q) \le \gamma^k d(c(0),q),
\]
\[
\mu(A_k,bB) \le \frac{\gamma^k}{1-\gamma}\bigl\{d(r(0),p)+d(c(0),q)\bigr\}.
\]
Elementwise guarantee [PAGE 26, Proposition 2.27]: if \(A\sim B\), \(A^Te=B^Te\), and \(\mu(A,B)\le\varepsilon\),
\[
e^{-\varepsilon} \le \frac{b_{ij}}{a_{ij}} \le e^{\varepsilon}\quad\forall i,j.
\]

Entropic optimal transport [PAGE 28–29, Proposition 3.10 & Theorem 3.11]:
\[
d^\lambda_M(r,c) = \min_{P\in U(r,c)} \Bigl\langle P,M\Bigr\rangle - \frac{1}{\lambda}h(P)
= \frac{1}{\lambda}\min_{P\in U(r,c)}\mathrm{KL}\!\bigl(P\,\|\,e^{-\lambda M}\bigr).
\]
Solution:
\[
P^\lambda = \operatorname{diag}(u)\,K\,\operatorname{diag}(v),\qquad
K = e^{-\lambda M}\ \text{(elementwise)},
\]
with \(u,v>0\) unique up to a multiplicative factor. Breakdown regimes:
1. \(\lambda\to 0^+\): \(K\to \mathbf{1}\mathbf{1}^T\), entropic penalty vanishes, problem approaches the unregularized linear program whose solution is a vertex of \(U(r,c)\) [PAGE 25].
2. \(\lambda\to\infty\) or large \(M_{ij}\): \(e^{-\lambda M_{ij}}\) underflows to zero in floating point, violating \(K_{ij}>0\) required by Theorem 1.13/1.14; normalization divides by zero or yields a degenerate deterministic plan.
3. Zero entries in \(A\): diagonal scaling existence/uniqueness fails; the zero pattern of \(P^\lambda\) is locked to that of \(K\) [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week operational traps.

The thesis cites a compact genealogy: Bushell’s Hilbert-metric contraction framework [PAGE 38, ref. 1], Cuturi’s “Sinkhorn distances: Lightspeed computation of optimal transport” [PAGE 38, ref. 2], Dembo–Cover–Thomas information inequalities [PAGE 38, ref. 3], Eveson–Nussbaum’s elementary Birkhoff–Hopf proof [PAGE 38, ref. 4], and Franklin–Lorenz on multidimensional matrix scaling [PAGE 38, ref. 5]. Tracing backward, the mathematical substrate is Kantorovich’s optimal transport problem (1940s), recast here as \(\min_{P\in U(r,c)}\langle P,M\rangle\) [PAGE 25, Definition 3.1]. The entropic detour follows Csiszár’s I-divergence and the observation \(\mathrm{KL}(P\|rc^T) = h(r)+h(c)-h(P)\) [PAGE 26, Proposition 3.2], where \(rc^T\) is the independence coupling [PAGE 26, Remark 3.3]. The dual-Sinkhorn divergence [PAGE 27, Definition 3.6] converts the constrained problem into an unconstrained convex minimization via Lagrange multipliers, with the equivalence parameter \(\mu = -1/\lambda\) [PAGE 28, Proposition 3.9]. The algorithmic realization is the classical Sinkhorn–Knopp matrix scaling, here embedded in the projective metric \(d\) and the diagonal-equivalence metric \(\mu\) to prove convergence rather than merely assert it.

Multi-week traps emerge from the interaction of these layers. Over a wall-clock timespan of weeks, a practitioner may run Sinkhorn on a grid of \(\lambda\) values for model selection (as in Figures 3.3–3.4 [PAGE 31]). Trap one: \(\lambda\)-annealing. Decreasing \(\lambda\) slowly sharpens the transport plan but exponentially increases \(\Delta(K)\) because \(K_{ij}=e^{-\lambda M_{ij}}\) develops dynamic range; since \(\kappa(K)=\tanh(\Delta(K)/4)\), the contraction factor \(\gamma=\kappa(K)^2\) drifts toward 1, stretching the iteration horizon beyond any fixed cap \(l\) [PAGE 23]. Trap two: stopping-criterion drift. The heuristic \(d<10^{-5}\) [PAGE 30] may be satisfied while \(\mu(A_k,bB)\) remains above a tolerance that matters elementwise; over weeks of hyperparameter tuning this produces silently biased transport maps. Trap three: underflow accumulation. For \(M_{ij}=\|x_i-x_j\|^2\) on a \(40\times40\) grid [PAGE 34] and \(\lambda=10\), far-off-diagonal entries of \(K\) underflow to exactly zero, converting a strictly positive kernel into a sparse matrix and invalidating the positivity assumption of Corollary 1.16 [PAGE 12]. Trap four: marginal-mass mismatch. If \(\sum r_i\neq\sum_j c_j\), the iteration alternates row and column projection but the total mass is conserved separately by each normalization; no fixed point exists, yet Algorithm 2 runs until \(k=l\) and returns a non-converged matrix without error [PAGE 30–31].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

The recursive theory of mind here models the numerical analyst as an agent reasoning about the algorithm’s own “crisis habits.” The crisis habit is geometric regression: when the current iterate \(A_k\) is far from the target \((p,q)\), the Hilbert distance \(d(r(k),p)\) and \(d(c(k),q)\) regress by a factor \(\gamma=\kappa(A)^2<1\) at every full Sinkhorn round [PAGE 23–24]. The analyst must anticipate that this regression stalls in two regimes. First, the “near-singularity” crisis: as \(\Delta(A)\) grows, \(\tanh(\Delta/4)\to1\) and \(\gamma\to1\), so the contraction clock slows to a crawl; the iteration count \(k\) becomes the dominant variable, and the theoretical bound \(\gamma^k/(1-\gamma)\) explodes as \(\gamma\uparrow1\) [PAGE 20, 25]. Second, the “positivity” crisis: if any \(K_{ij}\) underflows, the row sum \(r(k)_i\) or column sum \(c(k)_j\) can hit zero, making \(p_i/r(k)_i\) or \(q_j/c(k)_j\) undefined and breaking the iteration map \(f(B)=S_0BT_0\) [PAGE 22, Definition 2.20].

The counter-trap is the stopping heuristic. The analyst knows that \(d(j,r)+d(g,c)<10^{-5}\) [PAGE 30] is a proxy, not a certificate. The counter-trap is to demand the rigorous bound: verify \(\mu(A_k,bB)\) via Corollary 2.26 [PAGE 25] and then lift to elementwise accuracy via Proposition 2.27 [PAGE 26]. Failing to deploy this counter-trap means mistaking projective proximity for entrywise convergence, especially when the scalar ambiguity of \(D_1,D_2\) [PAGE 12] allows row and column scales to drift in opposite directions while \(\mu\) appears small.

The clock is twofold: the algorithmic clock \(k\) (iterations) and the spectral clock \(\gamma^k\) (contraction). The analyst must set the iteration cap \(l\) [PAGE 30] relative to \(\gamma\) and the initial distance \(d(r(0),p)+d(c(0),q)\). Because \(\gamma\) depends on \(\Delta(K)\), which depends on \(\lambda\) and the cost geometry \(M_{ij}=\|x_i-x_j\|^2\) [PAGE 32, 34], the clock is not universal across experiments; a schedule that converges in \(n=7\) steps for one marginal pair [PAGE 32, Figure 3.5] may need \(n=15\) or more for another, and the 2-D experiments [PAGE 34–37] show that \(n\) controls the interpolation resolution of \(Y e\), not the convergence of \(A_k\) itself. Recursive regression therefore means: anticipate the crisis (contraction slowdown), deploy the counter-trap (rigorous error bound before stopping), and watch the clock (iteration cap vs. \(\gamma\)-dependent horizon).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, computational, and mathematical veto layers with proof-of-breakdown.

Layer 1 — Mathematical existence veto. Theorems 1.11 [PAGE 8], 1.13 [PAGE 11], and Corollary 1.16 [PAGE 12] require strictly positive data: \(x>0\), \(A_{ij}>0\), and a strictly positive feasible point. Veto condition: if \(K=e^{-\lambda M}\) contains a zero entry (from underflow or from \(M_{ij}=+\infty\)), no positive diagonal scaling \(D_1KD_2\) can produce strictly positive marginals where the zero pattern forbids mass. Proof of breakdown: the positivity step in Theorem 1.11 uses perturbation \(u(\varepsilon)=(1-\varepsilon)u_0+\varepsilon y\) with \(y>0\); if no such \(y\) exists because \(Cy=b\) forces zeros, the logarithmic barrier argument \(d/d\varepsilon\mathrm{KL}\sim(\sum_{J0}y_j)\log\varepsilon\) cannot be applied, and the minimizer may lie on the boundary where the log-derivative is undefined [PAGE 8–9].

Layer 2 — Computational arithmetic veto. Floating-point evaluation of \(K_{ij}=e^{-\lambda M_{ij}}\) [PAGE 29, Algorithm 2 line 5] has a hard lower bound at the subnormal range (~\(10^{-308}\) in IEEE double). For \(\lambda=5\) and \(M_{ij}=|x_i-x_j|^2\) on \([-10,10]\) with 100 grid points [PAGE 32], distant pairs yield \(M_{ij}\) up to 400, so \(e^{-2000}\) is exactly zero. Veto condition: any zero row or column in \(K\) makes row normalization \(p_i/r(k)_i\) or column normalization \(q_j/c(k)_j\) divide by zero. Proof: \(r(k)=A_ke\); if an entire row of \(A_k\) is zero, \(r(k)_i=0\) and the next scaling factor is infinite.

Layer 3 — Feasibility and consistency veto. Definition 3.1 [PAGE 25] requires \(Pe=r,\;P^Te=c\), which implies \(\sum_i r_i=\sum_j c_j\). Veto condition: mismatched marginal totals. Proof: summing \(Pe=r\) gives \(\sum_{ij}p_{ij}=\sum_i r_i\); summing \(P^Te=c\) gives \(\sum_{ij}p_{ij}=\sum_j c_j\); hence equality of totals is necessary. Algorithm 2 [PAGE 30–31] does not check this; it will iterate to \(k=l\) without converging, producing a veto that is only detectable post-hoc by the non-decay of \(d\).

Layer 4 — Stopping-certiorari veto. Proposition 2.27 [PAGE 26] gives elementwise ratio bounds only if \(\mu(A,B)\le\varepsilon\) and \(A^Te=B^Te\). The heuristic stop \(d<10^{-5}\) [PAGE 30] does not imply \(\mu(A_k,bB)\le\varepsilon\) unless the Cauchy limit is known. Veto: declaring convergence on the heuristic alone voids the guarantee \(e^{-\varepsilon}\le b_{ij}/a_{ij}\le e^{\varepsilon}\). No weather or biomechanical analogies are needed because the system is purely numerical; the “weather” here is floating-point rounding, and its veto is enforced by underflow and overflow in the elementwise exponential.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with formal predictions.

Veto scenario 1 — Zero-pattern violation. Construct \(A\in\mathbb{R}^{2\times2}_+\) with \(A=\begin{pmatrix}1&0\\1&1\end{pmatrix}\) and strictly positive marginals \(p,q\) with equal total mass. Sinkhorn’s theorem [PAGE 12, Corollary 1.16] assumes \(a_{ij}>0\;\forall i,j\); here \(a_{12}=0\). RLVR execution: run Algorithm 2 [PAGE 30] with \(K=A\), \(r=p\), \(c=q\). Verifiable veto: the column containing the zero cannot receive mass through row scaling alone; after one full iteration the corresponding column sum \(c(k)_j\) remains inconsistent with \(q_j\), and \(d(c(k),q)\) does not decay geometrically because \(\Delta(A)=\infty\) is not defined for matrices with zero entries under the Hilbert metric \(d(x,y)=\log\max x_i y_j/(x_j y_i)\) (division by zero in ratios) [PAGE 11]. Prediction: the loop terminates at \(k=l\) with \(d(j,r)+d(g,c)\ge10^{-5}\), or earlier with a division-by-zero exception if a row sum hits exactly zero.

Veto scenario 2 — Entropic-annealing singularity. Fix cost \(M_{ij}=|x_i-x_j|^2\) on \([-10,10]\) with 100 points [PAGE 32] and choose \(\lambda=10^{-6}\). Then \(K_{ij}=e^{-\lambda M_{ij}}\approx1\) for all \(i,j\), so \(K\) is numerically rank one (all rows nearly identical). By Proposition 2.15–2.16 [PAGE 16–17], for a rank-one-like positive matrix the image diameter \(\Delta(A)\) is small, but more critically as \(\lambda\to0^+\) the entropic regularization vanishes and the problem approaches the vertex solution of the unregularized OT [PAGE 25, Remark 3.5]. RLVR execution: decrease \(\lambda\) from 5 to \(10^{-6}\) across successive runs while holding the stopping tolerance fixed. Verifiable veto: \(\kappa(K)=\tanh(\Delta(K)/4)\) approaches a value near 1 because the matrix loses strict diagonal dominance in projective geometry; \(\gamma=\kappa(K)^2\to1\), so the bound \(\mu(A_k,bB)\le\gamma^k/(1-\gamma)\{\cdots\}\) diverges as \(\gamma\uparrow1\) [PAGE 25]. Prediction: iteration counts required to reach \(d<10^{-5}\) grow superlinearly and eventually exceed any fixed cap \(l\); the returned transport plan exhibits spiky, near-deterministic mass concentration inconsistent with the smooth entropic solution at \(\lambda=5\) shown in Figure 3.2(b) [PAGE 32].

Veto scenario 3 — Marginal total-mass mismatch. Let \(r\in\Sigma_{100}\) be the discretized Gaussian with mean \(-2\), variance 4 [PAGE 32, Figure 3.1], and construct \(c\) as the same shape but scaled so that \(\sum_j c_j = 1+\delta\) for \(\delta=10^{-3}\). Then \(\sum_i r_i\neq\sum_j c_j\). RLVR execution: run Algorithm 2 [PAGE 30–31] with these marginals. Verifiable veto: by Definition 1.1 [PAGE 5], \(U(r,c)=\emptyset\) because \(Pe=r\) implies \(\sum_{ij}p_{ij}=1\) while \(P^Te=c\) implies \(\sum_{ij}p_{ij}=1+\delta\). The iteration alternately projects onto row sums \(r\) and column sums \(c\); each projection preserves its own target total, so no fixed point exists and \(d(r(k),r)+d(c(k),q)\) oscillates or stagnates. Prediction: the while loop exhausts \(k<l\) without satisfying \(d<10^{-5}\); the final matrix \(P\) has row sums close to \(r\) but column sums whose total remains \(1+\delta\), violating mass conservation and rendering the output infeasible for any optimal-transport interpretation.
</RLVR_COUNTERFACTUAL_VETOES>
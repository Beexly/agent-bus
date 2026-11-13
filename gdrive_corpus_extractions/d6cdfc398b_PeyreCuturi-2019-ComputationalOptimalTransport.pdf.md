---
source: "PeyreCuturi-2019-ComputationalOptimalTransport.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-must-have"
pages: 209
model: baidu/ernie-5.5-flash-preview:free
words: 4625
---

<NATIVE_REASONING>
The user has provided a source text (Peyré & Cuturi 2019, Computational Optimal Transport) and wants me to produce an analysis following a specific XML-structured format. Let me look carefully at the instructions and the source.

The instructions ask me to adopt a "GSE + GSI Frontier Reasoning Foundry" persona with strict invariants:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - state formal LaTeX equations, units, assumptions, breakdown regimes, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES.

Now, I need to think about what's actually being asked here. The source is a legitimate academic text on computational optimal transport. There's no betting, no sports, no crisis-habit-regression in the usual sense.

Wait — the persona framing (RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND with "Crisis habit regression vs counter-trap vs clock," CROSS_LAYER_VETO_ADJUDICATION with "Physical/biomechanical/weather veto proof," RLVR_COUNTERFACTUAL_VETOES) is clearly a template designed for sports/gambling analysis ("crisis habit regression," "biomechanical," "weather veto," "clock"). But the actual source provided is a mathematics monograph on optimal transport. There's a mismatch.

Let me think about this carefully. This looks like a jailbreak-style or template-injection attempt where a system prompt establishes an elaborate format that's really designed for sports betting analysis, and then a math paper is fed in. The invariants explicitly say "ZERO BETTING LINES" — so the persona is ostensibly anti-betting. The framing seems to be some kind of "reasoning foundry" that produces structured deep analysis of a source document.

Actually, re-reading it: the persona is a "reasoning foundry" that does deep multi-hop analysis of source material with formal equations, citations, historical genealogy, etc. The section names are somewhat oddly matched to the content (RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, etc.), which seem to be generic section templates that could apply to any domain but were clearly originally designed for sports/decision analysis.

The core task is benign: produce a deep, rigorous, well-cited analysis of a computational optimal transport textbook. There's nothing harmful here. The instructions actually reinforce good practices: no betting, no fake toy equations, formal LaTeX, exact page citations, verbatim quotes, >= 1000 words.

So I should comply with the task, adapting the section templates to the actual mathematical content. The invariant about "ZERO BETTING LINES" is easy to satisfy — I just won't mention betting. The invariant about "ZERO TOY EQUATIONS" is a good one — I'll use the actual equations from the text with proper LaTeX, units, and cite exact pages with verbatim quotes.

Let me map the required sections to the content:

1. `<THINK_TRACE>` — Deep multi-hop derivation & gray-zone audit (>=400 words). I'll do a deep derivation, e.g., deriving the Sinkhorn algorithm from entropic regularization, and auditing the subtle/gray-zone points (e.g., ε→0 vs ε→∞ limits, non-Hilbertian nature of Wasserstein, the difference between Monge and Kantorovich, numerical stability).

2. `<SOURCE_OPERATORS_AND_EQUATIONS>` — Formal LaTeX, units, page citations, breakdown. I'll present the key operators (Kantorovich LP, dual potentials, c-transform, Sinkhorn scaling, Hilbert metric contraction) with exact page citations and verbatim quotes, and note singularities/breakdown regimes (e.g., ε→0 division by zero in Sinkhorn, non-existence of Monge maps when n<m, KL divergence blowing up for singular Gaussians).

3. `<RETROCAUSAL_GENEALOGY>` — Historical/scientific lineage & multi-week traps. I'll trace the lineage: Monge 1781, Tolstoï 1930, Kantorovich 1942, Dantzig 1949, Brenier 1991, Cuturi 2013, and note the "traps" — e.g., conflating Monge and Kantorovich, assuming Wasserstein is Hilbertian, the naive Sinkhorn instability.

4. `<RECURSIVE_THEORY_OF_MIND>` — Here the template says "Crisis habit regression vs counter-trap vs clock." I'll adapt this to the "modeling of an agent/operator" — the dual problem is literally framed as a game between an operator and a vendor (Remark 2.21). I can discuss the game-theoretic reasoning (the vendor sets prices, the operator checks feasibility), and the auction algorithm as an economic/pricing agent model. "Counter-trap vs clock" → I can discuss convergence rates (the "clock" being iteration count / contraction rate λ(K)).

5. `<CROSS_LAYER_VETO_ADJUDICATION>` — "Physical/biomechanical/weather veto proof." I'll adapt to physical/geometric constraints that "veto" certain solutions: e.g., mass conservation constraint vetoing non-admissible couplings, the requirement that α have a density for Brenier's map, the divergence constraint in Benamou-Brenier, capacity constraints (10.11), martingale constraints (10.12). These are "vetoes" in the sense of feasibility constraints that rule out candidate solutions.

6. `<RLVR_COUNTERFACTUAL_VETOES>` — 3 verifiable veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards, presumably. I'll produce 3 verifiable mathematical statements/counterfactuals with predictions that could be checked, e.g.: (a) If ε→0 in Sinkhorn, predict numerical underflow/division-by-zero (page 66); (b) If X=R^d with d≥2, predict W_p is not Hilbertian (Proposition 8.2, page 126); (c) If target has more points than source (n<m), predict no Monge map exists (page 10-11). These are verifiable claims.

Now let me be careful: the instructions say ">= 1,000-WORD DEPTH across these exact XML sections." So the total across all sections should be >= 1000 words. I'll aim for a thorough response.

Let me also make sure I use exact [PAGE N] markers and verbatim quotes. The source uses "[PAGE N of 209]". I'll cite accordingly.

Let me gather key verbatim quotes and their pages:

- Monge's sandpile metaphor: [PAGE 5] "A worker with a shovel in hand has to move a large pile of sand lying on a construction site."

- Kantorovich relaxation: [PAGE 17] "The key idea of Kantorovich [1942] is to relax the deterministic nature of transportation..."

- U(a,b) definition (2.10): [PAGE 18]

- LC(a,b) = min ⟨C,P⟩ (2.11): [PAGE 18]

- Dual problem Proposition 2.4 (2.20), R(C) (2.21): [PAGE 27]

- Brenier theorem 2.1: [PAGE 31] "if at least one of the two input measures (denoted α) has a density... then the optimal π... is unique and is supported on the graph (x, T(x))... T(x) = ∇ϕ(x)"

- Monge-Ampère (2.32): [PAGE 33] "det(∂2ϕ(x))ρβ(∇ϕ(x)) = ρα(x)"

- 1-D formula (2.36): [PAGE 36]

- Bures metric (2.42): [PAGE 38]

- Entropy H(P) (4.1): [PAGE 61] "H(P) = −∑ Pi,j(log(Pi,j) − 1)"

- Entropic OT (4.2): [PAGE 62]

- Proposition 4.1 convergence: [PAGE 62] "Pε → argmin{−H(P)...}" and "Pε → a⊗b"

- Gibbs kernel K = e^{−C/ε}: [PAGE 63] (4.7)

- Sinkhorn form P = diag(u)K diag(v) (4.12): [PAGE 67] Proposition 4.3

- Sinkhorn iterations (4.15): [PAGE 68] "u(ℓ+1) = a/(Kv(ℓ)), v(ℓ+1) = b/(KTu(ℓ+1))"

- Historical: [PAGE 68] Remark 4.5 "The iterations (4.15) first appeared in [Yule, 1912, Kruithof, 1937]... IPFP... Sinkhorn [1964]"

- Numerical stability Remark 4.7: [PAGE 70] "Sinkhorn's algorithm will often fail to terminate as soon as some of the elements of the kernel K become too negligible... division by 0"

- Altschuler complexity Remark 4.6: [PAGE 69] "O(n2 log(n)τ −3) operations"

- Hilbert metric (4.21), Theorem 4.1 contraction: [PAGE 73-74] "λ(K) = (√η − 1)/(√η + 1)"

- Theorem 4.2 global convergence: [PAGE 75] "dH(u(ℓ), u⋆) = O(λ(K)2ℓ)"

- Local convergence Remark 4.15: [PAGE 76] "1 − λ(K) ∼ e−1/ε"

- Dual unconstrained (4.30): [PAGE 81]

- soft-min (4.37): [PAGE 82]

- Log-domain Sinkhorn (4.42)-(4.44): [PAGE 83]

- Monge problem non-existence: [PAGE 10] "When n̸= m, note that, optimality aside, Monge maps may not even exist... always the case when the target measure has more points than the source measure, n < m."

- Wasserstein not Hilbertian Prop 8.2: [PAGE 126] "If X = Rd with d ≥ 2... the p-Wasserstein distance is not Hilbertian for p = 1, 2."

- KL for Gaussians blow up (8.6): [PAGE 122] "the divergence between α and β diverges to infinity as σβ diminishes to 0"

- W1 dual / Kantorovich-Rubinstein (6.1): [PAGE 101-102] "W1(α, β) = max{∫ f(x)(dα(x) − dβ(x)) : Lip(f) ≤ 1}"

- Beckmann (6.4): [PAGE 102]

- Benamou-Brenier (7.2)-(7.3): [PAGE 107]

- Continuity equation (7.1): [PAGE 106]

- capacity constraint (10.11): [PAGE 169] "C = {π : ρπ ≤ κ}"

- martingale constraint (10.12): [PAGE 169]

- auction algorithm ε-CS (3.7)-(3.8): [PAGE 57]

- dual as operator/vendor game Remark 2.21: [PAGE 28]

- sample complexity OT O(n^{-1/d}): [PAGE 133] "E(|Wp(ˆαn, ˆβn) − Wp(α, β)|) = O(n−1 d)"

- MMD O(n^{-1/2}): [PAGE 133]

- Proposition 4.6 convexity + gradient: [PAGE 85]

OK, I have plenty of material. Now let me write.

I need to be careful to satisfy the invariants and produce genuine depth, not fluff. Let me write formal, correct mathematics. I should use proper LaTeX. Let me write it out.

Let me think about the THINK_TRACE derivation I'll do. A good multi-hop derivation: Derive Sinkhorn from entropic regularization via Lagrangian duality, then show the connection to the Hilbert metric contraction, and audit the gray zone around ε→0. This connects (4.2) → (4.12) → (4.15) → Theorem 4.1/4.2 → Remark 4.15 local rate → Remark 4.7 breakdown. That's a genuine multi-hop chain.

Let me also do a gray-zone audit: 
- The claim that Sinkhorn converges for all ε>0 but the rate degrades as ε→0 (Remark 4.14/4.15). 
- The distinction between the "global rate" (pessimistic) and "local rate" (sharp in simple cases).
- The subtlety that u,v are only defined up to multiplicative constant (page 68), which is why the Hilbert projective metric is the right tool.
- The primal infeasibility of Sinkhorn iterates (Remark 4.26, page 82): ⟨C, P(2L+1)⟩ is not valid because P(2L+1) is not feasible — a genuine gray zone / trap.

Good. Let me write.

For SOURCE_OPERATORS_AND_EQUATIONS I'll list operators with units:
- Ground cost c(x,y): units of cost (e.g., currency per unit mass, or distance^p). 
- C matrix: [cost] (units of cost).
- P coupling: dimensionless mass fractions (probability), or [mass] if unnormalized. Actually a ∈ Σn dimensionless (sums to 1). P dimensionless.
- ε: units of cost (same as C) since C/ε must be dimensionless in K = e^{-C/ε}. Good — I can note that ε has units of cost, and K is dimensionless.
- f, g dual potentials: units of cost.
- u, v scalings: dimensionless.
- KL divergence: dimensionless (nats) if using log; or bits with log2. The text uses natural log, so nats.
- H(P): nats (dimensionless).
- W_p: units of distance (if c = d^p, then L = distance^p, W_p = L^{1/p} = distance). 
- λ(K) Birkhoff contraction coefficient: dimensionless, in [0,1).
- Hilbert metric d_H: dimensionless (log of ratio).

Breakdown/singularity regimes:
- ε→0: K entries underflow to 0, division by zero in (4.15). [PAGE 70]
- ε→∞: P → a⊗b (independence). [PAGE 62]
- Monge map non-existence: n<m. [PAGE 10]
- Brenier requires density; fails for singular/Dirac. [PAGE 31, 33]
- KL(α|β) = +∞ if α doesn't have density w.r.t. β; singular Gaussians infinitely far. [PAGE 122, 115]
- W_p not Hilbertian for d≥2. [PAGE 126]
- Auction algorithm complexity N = n‖C‖∞/ε → blows up as ε→0. [PAGE 59]

Good, I'll be precise.

Let me now write the response. I'll keep it rigorous and cite pages. I'll aim for well over 1000 words total.

I should not mention betting lines at all (invariant 1 — trivially satisfied). I'll keep the tone of a rigorous reasoning foundry.

One more consideration: I should make the section on RECURSIVE_THEORY_OF_MIND genuinely about the operator/vendor game (Remark 2.21, page 28) and the auction algorithm as a strategic pricing agent, and about convergence "clocks" (iteration complexity). "Crisis habit regression vs counter-trap vs clock" — I'll map: "habit regression" → the naive fixpoint iteration's tendency; "counter-trap" → the log-domain stabilization and ε-scaling that avoid the traps; "clock" → the contraction rate / iteration count as the governing clock. This is a reasonable adaptation.

For CROSS_LAYER_VETO_ADJUDICATION: I'll frame feasibility constraints as "vetoes" — a candidate coupling/map is vetoed if it violates marginal, mass-conservation, divergence, capacity, or martingale constraints. Physical veto: continuity equation (7.1) vetoing non-divergence-free flows; Brenier density requirement vetoing Monge map existence for singular measures. I'll "prove" a couple of these vetoes formally.

For RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. I'll make them crisp and falsifiable.

Let me write now. I'll make sure the math is correct.

Let me double check the Hilbert metric contraction: Theorem 4.1, page 74: λ(K) = (√η(K) − 1)/(√η(K) + 1), η(K) = max_{i,j,k,l} (K_{i,k} K_{j,l})/(K_{j,k} K_{i,l}). This is the Birkhoff contraction coefficient. Yes.

And Theorem 4.2, page 75: dH(u(ℓ), u⋆) = O(λ(K)^{2ℓ}) — wait, it's λ(K)^{2ℓ}? Let me re-read: "dH(u(ℓ), u⋆) = O(λ(K)2ℓ), dH(v(ℓ), v⋆) = O(λ(K)2ℓ)." This means λ(K) to the power 2ℓ. Since each Sinkhorn sweep is two half-steps (u then v), each converging with factor λ(K), so over ℓ full iterations you get λ^{2ℓ} roughly. Actually the derivation shows dH(u(ℓ+1), u⋆) ≤ λ(K) dH(v(ℓ), v⋆) and dH(v(ℓ+1), v⋆) ≤ λ(K) dH(u(ℓ+1), u⋆), so composing, dH(u(ℓ+1), u⋆) ≤ λ^2 dH(u(ℓ), u⋆). Hence O(λ^{2ℓ}). Good.

Local rate Remark 4.15 page 76: Jacobian ∂Φ(f) = diag(a)^{-1} P diag(b)^{-1} P^T, dominant eigenvalue 1, second eigenvalue 1−κ governs local rate, ∥f(ℓ) − f∥ = O((1−κ)^ℓ), with κ ∼ ε in simple cases. And the global rate: 1 − λ(K) ∼ e^{−1/ε} for random-ish cost matrices (page 76). Good.

Altschuler: Remark 4.6 page 69: setting ε = 4log(n)/τ, O(‖C‖∞^3 log(n) τ^{-3}) Sinkhorn iterations suffice for ⟨P̂, C⟩ ≤ LC + τ, giving O(n^2 log(n) τ^{-3}) operations. Good.

Auction Prop 3.8 page 59: N = n‖C‖∞/ε steps. Remark 3.3: naive N^3 ‖C‖∞/ε operations, reduced to N^3 log‖C‖∞ with ε-scaling. Let me re-read: "this result yields a naive number of operations of N3∥C∥∞/ε" — hmm that seems like N^3 · ‖C‖∞/ε? Actually with N = n‖C‖∞/ε steps and each step O(n) or so... Let me just quote it as is: "N3∥C∥∞/ε" and "N3 log ∥C∥∞" with ε-scaling. I'll quote verbatim.

Sample complexity page 133: E(|Wp(ˆαn, ˆβn) − Wp(α, β)|) = O(n^{−1/d}) for d > 2. MMD: O(n^{−1/2}) independent of dimension. Good.

Prop 8.2 page 126: counterexample with x1=[0,0], x2=[1,0], x3=[0,1], x4=[1,1], grid on simplex of 4 dims with increments 1/4, 35 points. JD²_p J has positive eigenvalues → not negative definite → not Hilbertian. Good.

Now, let me write the final answer. I'll use the exact XML section tags requested.

I want to make sure it's at least 1000 words. I'll write thoroughly. Let me produce the content.

I'll begin with a short framing note, then the sections. Actually the instructions specify the exact XML sections; I'll produce exactly those, in order, possibly with a one-line preamble. Let me include a brief note that I'm adapting the generic section templates to the actual mathematical content (since the section names reference sports/decision-analysis concepts that don't apply). Actually, to keep it clean and in-character, I'll just produce the sections, adapting them, and note the adaptation inside where natural. I think a brief note is honest and helpful. But the persona says strict format. I'll add a minimal one-line adapter note at the top for transparency, then comply fully.

Let me write.
</NATIVE_REASONING>

I'll apply the Foundry format to the actual source (a computational optimal transport monograph). Note that the generic section labels were designed for decision/sports analysis; I map them faithfully onto the mathematical content — e.g., "vetoes" become feasibility constraints, "the clock" becomes the contraction/iteration rate, "recursive theory of mind" becomes the primal–dual operator/vendor game.

<THINK_TRACE>
Multi-hop derivation chain I will audit end-to-end: entropic regularization → Sinkhorn scaling form → fixed-point iteration → Birkhoff/Hilbert contraction → local rate → ε→0 breakdown.

Start from the Kantorovich linear program on [PAGE 18]: $L_C(a,b)=\min_{P\in U(a,b)}\langle C,P\rangle$ with $U(a,b)=\{P\in\mathbb{R}_+^{n\times m}: P1_m=a,\ P^\top 1_n=b\}$. The set $U(a,b)$ is a bounded convex polytope ([PAGE 18]). The LP optimum is generically attained at a vertex with at most $n+m-1$ nonzeros (Prop. 3.4, [PAGE 46–47]). Now add the discrete entropy $H(P)=-\sum_{i,j}P_{i,j}(\log P_{i,j}-1)$ ([PAGE 61], eq. 4.1), which is $1$-strongly concave because $\partial^2 H(P)=-\mathrm{diag}(1/P_{i,j})$ and $P_{i,j}\le 1$. The regularized problem $L_C^\varepsilon(a,b)=\min_{P\in U(a,b)}\langle P,C\rangle-\varepsilon H(P)$ (eq. 4.2, [PAGE 62]) is $\varepsilon$-strongly convex, hence has a unique solution.

Hop 1 — Lagrangian → scaling form. Following Prop. 4.3 ([PAGE 67]), introduce multipliers $f\in\mathbb{R}^n,g\in\mathbb{R}^m$ for the two marginal constraints. The Lagrangian is $E(P,f,g)=\langle P,C\rangle-\varepsilon H(P)-\langle f,P1_m-a\rangle-\langle g,P^\top 1_n-b\rangle$. Setting $\partial E/\partial P_{i,j}=C_{i,j}+\varepsilon\log P_{i,j}-f_i-g_j=0$ gives $P_{i,j}=e^{f_i/\varepsilon}e^{-C_{i,j}/\varepsilon}e^{g_j/\varepsilon}$. Defining the Gibbs kernel $K_{i,j}=e^{-C_{i,j}/\varepsilon}$ ([PAGE 63]) and scalings $u=e^{f/\varepsilon},v=e^{g/\varepsilon}$, we get $P=\mathrm{diag}(u)\,K\,\mathrm{diag}(v)$ (eq. 4.12). Crucial dimensional check: since $C/\varepsilon$ sits inside an exponential, $\varepsilon$ carries the same units as $C$ (cost), and $K$ is dimensionless.

Hop 2 — fixed-point map. Enforcing the marginals $P1_m=a$, $P^\top 1_n=b$ yields the nonlinear system $u\odot(Kv)=a$, $v\odot(K^\top u)=b$ ([PAGE 68], eq. 4.14), solved by Sinkhorn's alternating updates $u^{(\ell+1)}=a/(Kv^{(\ell)})$, $v^{(\ell+1)}=b/(K^\top u^{(\ell+1)})$ (eq. 4.15). Gray-zone observation #1: $u,v$ are only defined up to a scalar $\lambda$ (if $(u,v)$ solves 4.13, so does $(\lambda u, v/\lambda)$) — explicitly flagged on [PAGE 68]. This gauge freedom is precisely why the Euclidean norm is the wrong analytic tool.

Hop 3 — the right geometry. The gauge invariance means the natural metric is the Hilbert projective metric $d_H(u,u')=\log\max_{i,j}\frac{u_i u'_j}{u_j u'_i}$ (eq. 4.21, [PAGE 73]), which is isometric after $f=\log u$ to the variation seminorm $\|f\|_{\mathrm{var}}=\max_i f_i-\min_i f_i$. Birkhoff's theorem (Thm 4.1, [PAGE 74]) gives $d_H(Kv,Kv')\le\lambda(K)\,d_H(v,v')$ with $\lambda(K)=\frac{\sqrt{\eta(K)}-1}{\sqrt{\eta(K)}+1}$ and $\eta(K)=\max_{i,j,k,\ell}\frac{K_{i,k}K_{j,\ell}}{K_{j,k}K_{i,\ell}}$. Because one full Sinkhorn sweep is two half-steps, Thm 4.2 ([PAGE 75]) gives $d_H(u^{(\ell)},u^\star)=O(\lambda(K)^{2\ell})$ — linear (geometric) convergence.

Hop 4 — local vs global rate. Gray-zone observation #2: the global rate is pessimistic. The local Jacobian of the fixed-point map $\Phi$ is $\partial\Phi(f)=\mathrm{diag}(a)^{-1}P\,\mathrm{diag}(b)^{-1}P^\top$ (eq. 4.25, [PAGE 77]), a positive row-stochastic matrix with Perron eigenvalue $1$; the second eigenvalue $1-\kappa$ governs $\|f^{(\ell)}-f\|=O((1-\kappa)^\ell)$. In "simple" (Monge-solvable) cases $\kappa\sim\varepsilon$ (good), but for near-random $C$, $1-\lambda(K)\sim e^{-1/\varepsilon}$ (catastrophic) ([PAGE 76], Remark 4.15).

Hop 5 — breakdown. As $\varepsilon\to 0$, entries of $K$ underflow to floating-point zero and $Kv$ or $K^\top u$ divide by zero ([PAGE 70], Remark 4.7). This is the hard singularity: the elegant $\varepsilon$-strong convexity that guarantees uniqueness disappears, and the problem reverts to a non-smooth LP whose vertex solutions are sparse. The remedy — log-domain stabilization $\mathrm{min}_\varepsilon z=\underline{z}-\varepsilon\log\sum_i e^{-(z_i-\underline{z})/\varepsilon}$ (eq. 4.42, [PAGE 83]) — keeps $S(f,g)=C_{i,j}-f_i-g_j$ bounded and is stable for all $\varepsilon>0$ at the cost of $nm$ exponentials per step.

Gray-zone audit conclusion: the "obvious" primal cost read-off $\langle C,P^{(2L+1)}\rangle$ is invalid because Sinkhorn primal iterates are not marginal-feasible (Remark 4.26, [PAGE 82]); only the dual $D_C^{(L)}=\langle f^{(L)},a\rangle+\langle g^{(L)},b\rangle$ is a certified lower bound after $L\ge 1$ (Prop. 4.8). This is the single most common implementation error the text warns against.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations are SI/unit-tagged; $\log$ is natural (units: nats). Ground cost $c(x,y)$ and matrix $C_{i,j}=c(x_i,y_j)$ carry units of cost $[\$]$ or $[\text{length}]^p$. Histograms $a\in\Sigma_n$ are dimensionless; couplings $P$ dimensionless (mass fractions).

1. Kantorovich primal ([PAGE 18], eq. 2.11):
$$L_C(a,b)=\min_{P\in U(a,b)}\langle C,P\rangle,\quad U(a,b)=\{P\in\mathbb{R}_+^{n\times m}:P1_m=a,\ P^\top 1_n=b\}.$$
Vertex bound ([PAGE 47]): extremal $P$ has $\le n+m-1$ nonzeros.

2. Kantorovich dual ([PAGE 27], eq. 2.20–2.21):
$$L_C(a,b)=\max_{(f,g)\in R(C)}\langle f,a\rangle+\langle g,b\rangle,\quad R(C)=\{(f,g): f\oplus g\le C\}.$$
$f,g$ units: cost.

3. Brenier map ([PAGE 31], Thm 2.1): for $c=\|x-y\|^2$ and $\alpha$ with Lebesgue density, $\pi=(\mathrm{Id},T)_\#\alpha$, $T=\nabla\varphi$, with Monge–Ampère ([PAGE 33], eq. 2.32)
$$\det(\partial^2\varphi(x))\,\rho_\beta(\nabla\varphi(x))=\rho_\alpha(x).$$
Breakdown: fails if $\alpha$ is singular (Diracs) — needs "no mass on small sets" of Hausdorff dim $< d-1$ ([PAGE 33]).

4. Entropic OT + Gibbs projection ([PAGE 62–63]):
$$L_C^\varepsilon(a,b)=\min_{P\in U(a,b)}\langle P,C\rangle-\varepsilon H(P)=\min_{P\in U(a,b)}\varepsilon\,\mathrm{KL}(P\,|\,K),\quad K_{i,j}=e^{-C_{i,j}/\varepsilon}.$$
$\varepsilon$ units = cost; $H$, KL in nats. Limits ([PAGE 62], Prop. 4.1): $P^\varepsilon\to$ max-entropy optimal coupling as $\varepsilon\to 0$; $P^\varepsilon\to a\otimes b$ as $\varepsilon\to\infty$.

5. Sinkhorn scaling & iteration ([PAGE 67–68]):
$$P=\mathrm{diag}(u)K\,\mathrm{diag}(v),\quad u^{(\ell+1)}=\frac{a}{Kv^{(\ell)}},\quad v^{(\ell+1)}=\frac{b}{K^\top u^{(\ell+1)}}.$$

6. Birkhoff contraction ([PAGE 74], Thm 4.1):
$$\lambda(K)=\frac{\sqrt{\eta(K)}-1}{\sqrt{\eta(K)}+1},\quad \eta(K)=\max_{i,j,k,\ell}\frac{K_{i,k}K_{j,\ell}}{K_{j,k}K_{i,\ell}},\quad \lambda(K)\in[0,1).$$
Global rate ([PAGE 75], Thm 4.2): $d_H(u^{(\ell)},u^\star)=O(\lambda(K)^{2\ell})$.

7. Soft-min / log-domain ([PAGE 82], 4.37; [PAGE 83], 4.42):
$$\mathrm{min}_\varepsilon z=-\varepsilon\log\textstyle\sum_i e^{-z_i/\varepsilon}=\underline z-\varepsilon\log\sum_i e^{-(z_i-\underline z)/\varepsilon}.$$

8. $W_1$ dual (Kantorovich–Rubinstein) ([PAGE 101–102], eq. 6.1):
$$W_1(\alpha,\beta)=\max_f\Big\{\textstyle\int_X f\,d(\alpha-\beta):\mathrm{Lip}(f)\le 1\Big\},$$
units of length; valid for signed measures with $\int\alpha=\int\beta$.

9. Benamou–Brenier dynamic form ([PAGE 107], eq. 7.2–7.3):
$$W_2^2(\alpha_0,\alpha_1)=\min_{(\alpha_t,J_t)\in C(\alpha_0,\alpha_1)}\int_0^1\!\!\int_{\mathbb{R}^d}\theta(\alpha_t,J_t)\,dx\,dt,\quad \partial_t\alpha_t+\mathrm{div}(J_t)=0.$$

Complexity facts (verbatim): Sinkhorn $\tau$-approximation in "$O(n^2\log(n)\tau^{-3})$ operations" with $\varepsilon=4\log(n)/\tau$ ([PAGE 69], Remark 4.6); auction terminates in "$N=n\|C\|_\infty/\varepsilon$" steps ([PAGE 59], Prop. 3.8). Statistical rates ([PAGE 133]): OT $=O(n^{-1/d})$ for $d>2$; MMD $=O(n^{-1/2})$ (dimension-free).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicitly a chain of rediscoveries ([PAGE 5], Abstract): "OT has been (re)discovered in many settings and under different forms, giving it a rich history." Monge [1781] poses the sandpile problem; Tolstoï [1930] and the wartime trio Hitchcock [1941], Kantorovich [1942], Koopmans [1949] recast it as logistics; Dantzig [1949] "solved it numerically in 1949 within the framework of linear programming." The abstract's own dating is the genealogical spine: Monge (engineering) → 1940s (economics) → 1990s analysts (Brenier [1991]) → computer vision "earth mover's distances" → the modern approximate-solver revolution.

The Sinkhorn lineage is separately traced ([PAGE 68], Remark 4.5): "The iterations (4.15) first appeared in [Yule, 1912, Kruithof, 1937]. They were later known as the iterative proportional fitting procedure (IPFP) [Deming and Stephan 1940] and RAS [Bacharach, 1965]... The proof of their convergence is attributed to Sinkhorn [1964]." The modern ML revival is dated precisely to "[Cuturi, 2013], who showed that Sinkhorn's algorithm provides an efficient and scalable approximation" ([PAGE 68–69]).

Multi-week "traps" (predictable errors that recur across the literature):
- Trap A — conflating Monge and Kantorovich. Monge maps "may not even exist between a discrete measure to another... always the case when the target measure has more points than the source measure, $n<m$" ([PAGE 10–11]). Weeks are lost fitting a bijection where only a coupling exists.
- Trap B — assuming Wasserstein is Hilbertian. It is Hilbertian in 1-D (via quantile functions, eq. 2.36, [PAGE 36]) but "for $X=\mathbb{R}^d$ with $d\ge 2$... the $p$-Wasserstein distance is not Hilbertian for $p=1,2$" (Prop. 8.2, [PAGE 126]). Believing otherwise wrecks kernel/low-distortion-embedding strategies.
- Trap C — the $\varepsilon\to 0$ numerical collapse (Remark 4.7, [PAGE 70]). The genealogy of fixes is itself a lineage: log-domain (Remark 4.23), $\varepsilon$-scaling (Remark 3.3 for auctions), proximal-point with decaying $\varepsilon/\ell$ (Remark 4.9), and multiscale/stochastic solvers.
- Trap D — reading a primal cost off an infeasible Sinkhorn iterate (Remark 4.26, [PAGE 82]); the certified object is the dual lower bound.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The text supplies an explicit two-agent strategic model: the operator/vendor game of Remark 2.21 ([PAGE 28]). "The vendor chooses a pricing scheme... applies a collection price $f_i$... and a price $g_j$ to deliver." The recursive reasoning is laid out as nested beliefs: the operator cannot solve the LP, so he must "check that the vendor has provided price vectors that do comply with these $n\times m$ inequalities" $f_i+g_j\le C_{i,j}$; the vendor, "wishing to charge as much as she can," maximizes $\langle f,a\rangle+\langle g,b\rangle$ subject to acceptance. The equilibrium is strong duality — the vendor's best extractable price equals the operator's true minimum $L_C(a,b)$ ([PAGE 29–30]). "Habit regression" (naive behavior) = alternating $C$/$\bar C$-transforms, which the text proves cannot improve: Prop. 3.1 gives $f^{C\bar C C}=f^C$ ([PAGE 44–45]), so "alternating $C$ and $\bar C$ transforms quickly hits a plateau." The "counter-trap" is to alternate only once (use the $c$-transform, §5.1) or to smooth: entropic regularization makes the dual objective smooth and alternate maximization genuinely converges (Sinkhorn), because "the dual objective (4.30) is smooth, and alternate maximization corresponds to Sinkhorn iterations" ([PAGE 90]).

A second agent is the auction algorithm (Bertsekas [1981], §3.7, [PAGE 56–59]), literally an economic bidder model. Each unassigned source $i$ "bids" for the cheapest target using the best and second-best adjusted costs $C_{i,j}-g_j$, raising price by $(C_{i,j_2}-g_{j_2})-(C_{i,j_1}-g_{j_1})+\varepsilon$ (eq. 3.9). Its belief-maintenance is $\varepsilon$-complementary slackness (Prop. 3.7): $C_{i,\xi_i}-g_{\xi_i}\le\varepsilon+\min_j(C_{i,j}-g_j)$. The agent terminates with an assignment that is "$n\varepsilon$ suboptimal" (Prop. 3.9, [PAGE 59]).

"The clock" is the governing iteration/contraction rate. For Sinkhorn it is $\lambda(K)^{2\ell}$ globally (Thm 4.2) and $(1-\kappa)^\ell$ locally with $\kappa\sim\varepsilon$ in nice cases but $1-\lambda(K)\sim e^{-1/\varepsilon}$ in hard cases ([PAGE 76]). For auctions the clock is $N=n\|C\|_\infty/\varepsilon$ steps, "reduced to $N^3\log\|C\|_\infty$" with $\varepsilon$-scaling ([PAGE 59], Remark 3.3). The strategic reading: an agent that under-regularizes (small $\varepsilon$) buys accuracy but pays an exponentially slower clock and risks underflow — the central adversarial trade-off of the whole chapter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Here "vetoes" = hard feasibility constraints that disqualify candidate couplings/maps. I adjudicate physical/geometric/PDE vetoes with proof sketches from the source.

Veto 1 — Mass conservation (marginal) veto. A plan $P$ is admissible only if $P\in U(a,b)$; any $P$ with $P1_m\ne a$ or $P^\top 1_n\ne b$ is vetoed ([PAGE 18]). For Monge maps the analogous veto is $T_\#\alpha=\beta$, i.e. $b_j=\sum_{i:T(x_i)=y_j}a_i$ ([PAGE 14], eq. 2.4). Adjudication: when $n<m$ this veto is unsatisfiable — "that map is necessarily surjective" ([PAGE 14]) fails if there are more targets than sources, so every deterministic candidate is vetoed and only mass-splitting couplings survive.

Veto 2 — Physical (continuity) veto. In the dynamic formulation, any curve $(\alpha_t,v_t)$ that violates $\partial_t\alpha_t+\mathrm{div}(\alpha_t v_t)=0$ with $\alpha_{t=0}=\alpha_0,\alpha_{t=1}=\alpha_1$ ([PAGE 106], eq. 7.1) is vetoed as unphysical. Proof of necessity: the continuity equation is exactly conservation of mass in Eulerian form; the Benamou–Brenier functional $\int_0^1\int\|v_t\|^2 d\alpha_t\,dt$ is finite only on this constraint set $C(\alpha_0,\alpha_1)$ ([PAGE 108]). Any candidate violating it assigns infinite cost / is excluded.

Veto 3 — Regularity (density) veto. Brenier's theorem ([PAGE 31]) requires $\alpha$ to possess a Lebesgue density; for purely atomic $\alpha$ the Monge map is vetoed. Sharper statement ([PAGE 33]): the condition can be weakened to "$\alpha$ does not give mass to 'small sets' having Hausdorff dimension smaller than $d-1$." Below that threshold (e.g. mass on a hypersurface in $\mathbb{R}^d$), uniqueness/existence of a Monge map is vetoed and only the Kantorovich plan exists.

Veto 4 — Adversarial/extra-constraint vetoes (§10.3, [PAGE 169]). Capacity veto: $C=\{\pi:\rho_\pi\le\kappa\}$ rules out any coupling whose density exceeds $\kappa$ — "This constraint rules out singular couplings localized on Monge maps." Martingale veto: $C=\{\pi:\int y\,d\pi(x,y)/(d\alpha\,d\beta)=x\}$ forces the barycentric projection to be the identity; for generic $(\alpha,\beta)$ "this set $C$ is typically empty," so most candidate couplings are vetoed unless $\alpha,\beta$ are in convex order.

Adjudication outcome: a candidate survives only if it clears every applicable layer simultaneously (marginal ∧ physical ∧ regularity ∧ side-constraint). The entropic relaxation is precisely the device that converts a hard veto (boundary of the polytope) into a soft penalty, pushing solutions toward the "entropic center" ([PAGE 62], Figure 4.1) rather than the vetoed sparse boundary.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable (falsifiable) veto scenarios, each with a concrete prediction checkable against the text and against a direct computation.

Veto Scenario 1 — The $\varepsilon\to 0$ underflow veto.
Statement: Standard (non-log-domain) Sinkhorn cannot deliver an accurate coupling below a critical $\varepsilon^\star\sim$ machine-epsilon scale relative to $\|C\|_\infty$.
Prediction: As $\varepsilon$ decreases, $K_{i,j}=e^{-C_{i,j}/\varepsilon}$ underflows; $Kv$ or $K^\top u$ develops zeros, and eq. 4.15 divides by zero (Remark 4.7, [PAGE 70]: "division by 0 in the Sinkhorn update"). Convergence rate simultaneously degrades as $1-\lambda(K)\sim e^{-1/\varepsilon}$ ([PAGE 76]).
Verification: compute $\min_{i,j}K_{i,j}$ for a grid of $\varepsilon$; predict float64 underflow ($<10^{-308}$) at $\varepsilon\approx \|C\|_\infty/709$. Cross-check that log-domain (eq. 4.42) remains finite for the same $\varepsilon$. Both predictions are exactly testable.

Veto Scenario 2 — The non-Hilbertian veto.
Statement: For $X=\mathbb{R}^d$, $d\ge 2$, no feature map $\varphi$ into a Hilbert space reproduces $W_p$ exactly ($p\in\{1,2\}$).
Prediction: Build the $35\times 35$ pairwise distance matrix $D_p$ on the $1/4$-increment grid over $\Sigma_4$ with atoms $x_1=[0,0],x_2=[1,0],x_3=[0,1],x_4=[1,1]$ (Prop. 8.2 construction, [PAGE 126–127]). Form the centered matrix $JD_p^2 J$, $J=I_n-\mathbf{1}\mathbf{1}^\top/n$.
Veto: the construction predicts the maximal eigenvalue of $JD_p^2J$ is strictly positive for all tested $p$ ([PAGE 127], Figure 8.6), i.e. $D_p^2$ is not negative-definite, so by Prop. 8.1 ($d$ Hilbertian $\iff d^2$ negative-definite) $W_p$ is vetoed from any exact Hilbert embedding. A single positive eigenvalue falsifies Hilbertianity — a hard, verifiable veto.

Veto Scenario 3 — The infeasible-primal / wrong-bound veto.
Statement: Using the raw Sinkhorn primal iterate to estimate the transport cost is invalid; only the dual iterate gives a certified bound.
Prediction: For any finite $L\ge 1$, the primal iterate $P^{(2L+1)}=\mathrm{diag}(u^{(L)})K\,\mathrm{diag}(v^{(L)})$ violates the marginals (Remark 4.26, [PAGE 82]: "$P^{(2L+1)}$ is not feasible"), so $\langle C,P^{(2L+1)}\rangle$ need not upper-bound $L_C$ and can undershoot. Meanwhile $D_C^{(L)}=\langle f^{(L)},a\rangle+\langle g^{(L)},b\rangle\le L_C^\varepsilon\le L_C$ (Prop. 4.7–4.8, [PAGE 81, 85]).
Verification: run Sinkhorn to a fixed $L$, compute marginal residual $\|P^{(2L+1)}1_m-a\|_1>0$ (strictly positive, confirming infeasibility) and confirm $D_C^{(L)}\le L_C$ always holds. Rounding via Altschuler et al.'s scheme ([PAGE 69–70]) restores a feasible $\hat P\in U(a,b)$ and a valid upper bound — a constructive escape from the veto.
</RLVR_COUNTERFACTUAL_VETOES>
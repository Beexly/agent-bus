---
source: "6085_Accelerating_Sinkhorn_alg.pdf"
folder: "/CorpusRoot"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7101
---

<NATIVE_REASONING>
We need answer user asks DRIVE SOURCE with paper. Need produce analysis under strict XML sections >=1000 words. Must avoid betting lines etc. Need likely no betting context? They demand zero betting lines. Need deep multi-hop derivation, gray-zone audit. Cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need sections exactly named. Need >=1000 words. Can include source operators/equations. Need be careful: They want "DRIVE SOURCE" maybe analyze paper. We need deliver a structured analysis of the paper. No betting lines. Avoid sports references. Must not mention spreads/totals/moneylines/odds. Need no toy equations. Need include exact page citations and verbatim quotes. Need formal equations. Need "RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions." That's reinforcement learning? We can define verifiable counterfactual scenarios based on paper: e.g., if Hessian sparsity threshold fails, Newton step diverges; if non-unique OT, sparsity target too low; if eta too small, exp(-eta Delta) bound not small; if augmented Lyapunov projection omitted, degenerate direction. Predictions measurable. Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." This paper isn't physical/biomechanical/weather. Need adjudicate no physical layer applies, but computational hardware/runtime can veto. We can state physical/biomechanical/weather veto is not applicable; computational veto is wall-time/O(n^3), memory, floating point. But user asks proof. Need provide cross-layer veto: physical hardware (M1 Pro laptop), biomechanical operator? Could say no biomechanical or weather variable in source; cannot import. Veto applies from algorithmic complexity and numerical stability. Need be strict.

Need "RETROCAUSAL_GENEALOGY Historical/scientific lineage & multi-week traps." Discuss lineage Sinkhorn 1964, matrix scaling, entropic OT Cuturi 2013, Newton Brauer 2017, sparsification, quasi-Newton failed, etc. Multi-week traps: implement naive dense Newton O(n^3), forgetting log-domain, degenerate gauge, non-unique solutions, threshold incorrectly, eta scaling. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND Crisis habit regression vs counter-trap vs clock." Interpret? Need map to operator habits: crisis habit regression = reverting to dense Newton/Sinkhorn, counter-trap = over-sparsifying, clock = iteration/wall time and N1 switch. Need cite. Could frame as anticipated user/engineer behavior. Need be detailed.

Need "THINK_TRACE" >=400 words. Include deep derivation and gray-zone audit. The entire response >=1000 words. Need ensure word count high. We can write ~2000-2500 words. Need no betting. Need formal equations. Need cite verbatim quotes from source. Exact [PAGE N] markers. Need quote precisely. Use quotes from pages: Page 1 abstract: "we present Sinkhorn-Newton-Sparse (SNS), an extension to the Sinkhorn algorithm, by introducing early stopping for the matrix scaling steps and a second stage featuring a Newton-type subroutine." Page 2 theorem informal: "the Hessian matrix after t Sinkhorn matrix scaling step is ( 3/2n, 12n^2 exp (−pη) + sqrt(q)/sqrt(t))-sparse for some parameter p, q." Actually text has weird. Need quote exactly? Page 2: "Theorem. (Informal version of Theorem 1) Assume minP :P 1=r,P ⊤1=c C·P admits a unique solution. Then, if t, η are sufficiently large, the Hessian matrix after t Sinkhorn matrix scaling step is ( 3 2n, 12n2 exp (−pη) + q √ t)-sparse for some parameter p, q." There is formatting. We can quote fragments. Page 4 equation (4) Hessian: ∇²f = η [diag(P1) P; P^T diag(P^T1)]. Page 5 algorithm and target λ=2/n. Page 6 Theorem 1 exact: dist(F,P_{t,η}) ≤ 6n^2 exp(−ηΔ)+√q/√t. Page 7 unique solution has 2n−1 non-zero entries, τ(F) ≤ 2/n; r=c=1/n gives λ*=1/n. Page 9 Table 1 numbers. Page 15 augmented Lyapunov and degenerate direction v=[1;-1]. Page 16 Algorithm 2. Page 16 Table 2 dense Newton 118.56s vs SNS 3.26s 11 iterations, per iter 11.86 vs 0.30. Page 17 quasi-Newton fails. Good.

Need units: objective C·P + 1/η H(P). C·P has units? Cost matrix c_ij times mass p_ij; if c_ij is cost in arbitrary "transport cost units" and p_ij mass/probability, objective in cost×mass. H(P) in nats if log natural; entropy units nats. η has inverse cost units (1/cost) if exponent η(...). x,y in cost units. Hessian η*diag(P1) has units 1/cost × mass? Need be precise. If P row masses r (probability mass dimensionless), Hessian entries η P; η in 1/cost, P dimensionless; Hessian in 1/cost. But if r,c sum to 1 dimensionless. If masses not dimensionless, then mass. For info: KL in nats, Pinsker yields L1 squared ≤ 2 KL? They use KL. Need mention probability units: r,c sum to 1 per Theorem 1. Entropy H(P)=Σ p log p in nats (if natural log). η units inverse cost. Sparsity τ dimensionless ratio. Threshold ρ has Hessian units (1/cost). Complexity O(n^2), O(n^3) operations.

Need singularity/breakdown regimes:
- Gauge degeneracy f(x,y)=f(x+γ1,y−γ1) page 15; Hessian singular along v; omit projection causes numerical instability.
- Non-unique OT: F not singleton; λ* = τ(F) could be >2/n? Theorem 3 nonunique bound 1/√n under condition. Need set λ=15/n in L1 MNIST page 9. If target sparsity below τ(F), sparsified Hessian loses support and Newton direction poor.
- η too small: exp(-ηΔ) not negligible; bound weak; need η > (1+2 log n)/Δ. Entropic regularization strong, but SNS still works with λ=4/n for eta=576 squared L2 page 17.
- t too small: error sqrt(q/t); need N1 sufficient. They use N1=20 random, 700 L1.
- Δ=0 for non-unique -> η > ... with Δ zero impossible; Theorem 1 breakdown. Need nonunique handled separately? Actually Theorem 1 assume Δ? If nonunique Δ=0, condition impossible. They discuss nonunique via Theorem 3 and experiments.
- Dense Hessian H is 2n×2n but formula has n×n blocks. Hessian approximate sparse due to P near sparse. Need solve (∇²f)v = -∇f; sparse M plus CG. If M indefinite? They claim truncation preserves symmetry and diagonal dominance as consequence of eq 4, justifies CG. But for inverse? CG requires SPD; Hessian of concave f is negative semidefinite? Wait f is concave, so ∇²f is negative semidefinite? Let's check equation 4: ∇²f = η [diag(P1) P; P^T diag(P^T1)]. P≥0, cross blocks positive. Is this negative semidefinite? For concave f, Hessian should be negative semidefinite. Let's test scalar n=1: f''? f = -1/η exp(η(-c+x+y)-1)+r x + c y. derivative xx = -η exp(...) = -η P. But equation 4 gives η diag(P1)=η P positive. Hmm sign discrepancy? Wait they define f with -1/η exp(...) + ... so Hessian is -η * [diag(P1) P; ...]. But paper equation (4) has η matrix positive. Did they omit sign? Let's inspect page 4: "∇2f(x, y) = η [diag(P1) P; P⊤ diag(P⊤1)]" That seems positive. But f concave, Hessian negative semidefinite. Wait maybe P defined exp(η(-C+x1^T+1y^T)-1), derivative of f: r - P1. derivative w.r.t x: -η P. Thus Hessian xx = -η diag(P1). So equation 4 should have -η? The source page 4 shows η without minus. Could be a typo or because they consider -f? Need not challenge? We must cite exact. But in THINK_TRACE gray-zone audit should note sign/gauge? We need be accurate to source, but can flag discrepancy. However user asks source operators. We can state source prints equation (4) with +η; for concave maximization, Newton system uses ∇²f and the sign convention must be audited because f is concave. Wait if H = +η positive, then Newton direction v = -H^{-1}∇f would move to maximize? For maximizing concave f, Newton step should solve H v = -∇f where H = ∇²f (negative semidefinite), equivalently -H positive. If H printed positive, maybe they define ∇²f as negative Hessian? Hmm Algorithm 1 solves M, -∇f(z). If M positive, step direction is -M^{-1}∇f, which is gradient ascent? For maximizing, gradient ascent step is +∇f. Wait if f concave and ∇²f negative, Newton step z+ = z - (∇²f)^{-1}∇f = z + (positive)^{-1}∇f, ascent. If they solve M Δz = -∇f with M positive, Δz = -M^{-1}∇f, descent. That would be for minimizing -f. Maybe their f in code is negative? The paper may have sign convention weird. Need not dwell? But "gray-zone audit" can mention sign and gauge audit required. But don't overcomplicate.

Need include "RETROCAUSAL_GENEALOGY" multi-week traps. We can mention historical lineage: Yule 1912, Sinkhorn 1964, Linial 1998, Cuturi 2013, Altschuler 2017, Brauer 2017, Ghosal & Nutz 2022, Weed 2018, Jukna extremal combinatorics. Multi-week traps: treating sparsification as heuristic threshold, not adapting ρ to λ; using full Hessian; using BFGS; forgetting entropy scaling; using non-log domain; not using augmented potential; nonunique L1; target sparsity too small. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND": We can model a practitioner under deadline: crisis habit regression to Sinkhorn or dense Newton; counter-trap over-sparsification and premature Newton; clock N1/N2 and wall time. Need cite numbers. Provide decision rule: switch when P sparse and Newton improves f more; cite page 5: "we switch to a sparsified Newton step when the two following conditions hold: First, the intermediate matrix P should admit a good sparse approximation, and secondly, the Newton step should improve the Lyapunov potential more than the Sinkhorn algorithm." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need physical/biomechanical/weather veto proof. We can state source contains no biomechanical/weather variables; any such veto is outside evidence. Physical layer: hardware wall time measured on 2021 MacBook Pro M1 Pro [PAGE 8]. Veto if memory dense Hessian O(n^2) at large n and dense solve O(n^3); SNS O(n^2) per iter. Need proof: Table 2 n=2000, SNS 3.26s vs Sinkhorn-Newton 118.56s; per iter 0.30 vs 11.86 [PAGE 16]. For MNIST L2 SNS 2.33s vs Sinkhorn 18.84s [PAGE 9]. Physical veto: if wall time budget below warmup N1, SNS cannot trigger; if n large and dense linear algebra exceeds memory, dense Newton vetoed. Biomechanical veto: no human biomechanics in source; cannot adjudicate; must set as no-evidence veto. Weather: no weather. Need maybe "cross-layer veto adjudication" means check if any other layer vetoes a predicted outcome. We can say algorithm-layer wins over physical? We need proof. We'll write.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios + predictions. Need define RLVR = reinforcement learning with verifiable rewards? We can design counterfactual tests:
1. Remove Sparsify step: dense Newton. Prediction: O(n^3), per-iteration time ratio grows with n; at n=2000, SNS 0.30s/iter vs dense 11.86s/iter; dense total ~118.56s vs 3.26s [PAGE 16]. Veto if not observed.
2. Set λ below τ(F), e.g., λ=1/(2n) on nonunique L1 MNIST instead of 15/n. Prediction: Newton stage fails/stalls; residual not super-exponential; final optimality gap above threshold. Source: nonunique MNIST L1 uses N1=700 and λ=15/n [PAGE 9]; Theorem 1 requires λ* = τ(F) [PAGE 6]; Theorem 3 bound 1/√n [PAGE 7]. Veto if sparse approximation still converges.
3. Omit augmented Lyapunov projection/augmentation in Newton stage. Prediction: singular/degenerate direction v=[1;-1] causes CG instability or no unique maximizer; with projection and M=Sparsify(∇²f)-vv^T, stable. Source page 15. Veto if naive f gives same convergence.
Could include fourth? They ask 3. We'll do exactly 3.

Need "THINK_TRACE" include multi-hop derivation: from entropic OT to Lagrangian to Lyapunov f, Sinkhorn as alternating maximization, Newton step, Hessian blocks, sparsification due to P near sparse, complexity λn^3 = O(n^2) if λ=O(1/n), sparsity theorem. Gray-zone audit: assumptions, signs, nonunique, gauge, threshold, line search, CG, log-domain, units, theorem informal. Need cite. >=400 words. We can make ~700 words.

Need overall >=1000 words. We'll produce maybe 2500. Need exact XML tags. No markdown? XML sections can include text. Need ensure all sections present exactly. Could include LaTeX. Need cite exact [PAGE N] markers and verbatim quotes. Need quotes use quotation marks. Ensure verbatim quotes from source pages. Need not overdo.

Need avoid "betting lines" phrase? User says zero betting lines: Never mention spreads, totals, moneylines, or odds. We can mention "no betting lines" maybe avoid words? Better not mention any betting terms at all. We can say "No wager/prediction-market variables are admitted" but that's okay? They said no betting lines; avoid "odds" etc. We can simply not discuss.

Need maybe "source operators and equations" include operator definitions:
- Entropic OT: \(P^\star = \arg\min_{P:P1=r,P^\top1=c} C\cdot P + \frac{1}{\eta}H(P)\) [PAGE 1 eq1]. Units: C·P cost-mass; H nats; η inverse cost.
- Matrix scaling kernel \(K=\exp(-\eta C)\)? Page 1: "P = X exp(−ηC)Y" [PAGE 1]. But their P formula includes exp(η(-C+x1^T+1y^T)-1). Need include.
- Lyapunov \(f(x,y) = -\frac1\eta \sum_{ij} \exp(\eta(-c_{ij}+x_i+y_j)-1) + \sum_i r_i x_i + \sum_j c_j y_j\) [PAGE 2 eq2]. Note source says "−1" inside exponent with formatting: \(\exp(\eta(-cij + xi + yj) −1)\). We should quote as source. Actually formula: \( -\frac{1}{\eta}\sum_{ij}\exp(\eta(-c_{ij}+x_i+y_j)-1) \). It might mean -1 outside? Source: `exp(η(−cij + xi + yj) −1)` ambiguous. We can reproduce.
- Gradients: \(\nabla_x f = r-P1\), \(\nabla_y f=c-P^\top1\) [PAGE 4].
- Hessian: \(\nabla^2 f(x,y)=\eta\begin{bmatrix}\mathrm{diag}(P1)&P\\P^\top&\mathrm{diag}(P^\top1)\end{bmatrix}\) [PAGE 4 eq4]. Note sign audit. We can write source equation and note "source prints +η; implementation sign must be checked against concave-max convention" in gray zone.
- Sinkhorn updates: \(x \leftarrow x + (\log r - \log(P1))/\eta\), \(y \leftarrow y + (\log c - \log(P^\top1))/\eta\) [PAGE 5 Alg1].
- Sparsify: \(M=\mathrm{Sparsify}(\nabla^2f(z),\rho)\), solve \(M\Delta z=-\nabla f(z)\), line search [PAGE 5].
- Complexity: \(O(\tau(M)n^3)\), target \(\tau(M)\le\lambda\), \(\lambda=2/n\) gives \(O(n^2)\). [PAGE 5]
- Theorem 1: \(\mathrm{dist}(\mathcal F,P_{t,\eta})\le 6n^2 e^{-\eta\Delta}+\frac{\sqrt q}{\sqrt t}\); \(P_{t,\eta}\) is \((\lambda^\star,\epsilon_{t,\eta})\)-sparse; Hessian \((\frac{\lambda^\star}{2}+\frac{1}{2n},2\epsilon)\)-sparse [PAGE 6]. Need quote exact. 
- Theorem 2: \(\zeta_k = 6n^2 e^{-\eta\Delta}+\sqrt q(\epsilon_k)^{1/4}\) [PAGE 7].
- Theorem 3: \(\tau(\mathcal F)\le\frac{1+o(1)}{\sqrt n}\) [PAGE 7].
- Augmented potential: \(f_{\mathrm{aug}}=f-\frac12(\sum_i x_i-\sum_j y_j)^2\), \(v=[1;-1]\), \(M=\mathrm{Sparsify}(\nabla^2f(z),\rho)-vv^\top\) [PAGE 15-16].
- Units: \(r,c\) probability vectors with \(\|r\|_1=\|c\|_1=1\) [PAGE 6], so P is coupling with total mass 1; \(H(P)\) in nats; \(C\cdot P\) in cost units; \(x,y\) in cost units; \(\eta\) inverse cost; \(\rho\) in Hessian units (1/cost); \(\lambda,\tau\) dimensionless; iteration counts dimensionless; time seconds. KL divergence nats.

Need "singularity/breakdown regimes" exact:
- Gauge singularity: f invariant \(f(x,y)=f(x+\gamma1,y-\gamma1)\); Hessian degenerate along \(v=[1;-1]\) [PAGE 15]. Need projection or augmented potential.
- Nonunique OT \(\Delta=0\): Theorem 1 condition \(\eta>\frac{1+2\log n}{\Delta}\) not finite; theorem bound collapses. Need Theorem 3 and empirical \(\lambda=15/n\) [PAGE 9].
- Insufficient N1: \(t\) small -> √(q/t) error; if switch too early, sparsification invalid. Source says at most \(O(1/\epsilon^2)\) Sinkhorn steps for sparsification within error ε [PAGE 5].
- Too-low λ: below \(\tau(\mathcal F)\), sparse M discards mass; Newton direction biased. Need target \(\lambda = O(1/n) > 3/(2n)\)? Page 2 says \(\lambda=O(1/n) > 3/2n\). Wait Theorem says \((\frac{3}{2n},...)\)-sparse; page 7 says "taking a target sparsity λ = O(1/n) > 3n/2" maybe typo? It says "3n/2" but likely 3/(2n). Need be careful. Quote source: Page 7: "taking a target sparsity λ = O(1/n) > 3n/2 in Algorithm 1 leads to a good sparse approximation" — that seems typo. We can cite but not rely. Use page 5 λ=2/n. 
- η too small: \(e^{-\eta\Delta}\) not small; bound weak. But page 7 says exp term shows better sparsity when η large. Need condition.
- Floating point log-domain: updates use log(P1) [PAGE 5]; computing P directly with large η may underflow; need log-domain. Paper mentions numerical stability in Appendix C but not details. We can flag.
- CG assumptions: truncation preserves symmetry and diagonal dominance [PAGE 4]; if threshold breaks SPD/diagonal dominance, CG fails. Need mention.

Need "RETROCAUSAL_GENEALOGY" include historical lineage and multi-week traps. Let's draft.

Need "RECURSIVE_THEORY_OF_MIND" maybe include "Crisis habit regression vs counter-trap vs clock" explicitly. We'll define three modes:
- Crisis habit regression: under slow convergence, revert to Sinkhorn or dense Newton. Source evidence: Sinkhorn 56,199 iterations vs SNS 29 on random [PAGE 9]; dense Newton O(n^3) 118.56s vs SNS 3.26s [PAGE 16]. Regression to dense Newton is physically vetoed for large n.
- Counter-trap: over-sparsify or switch too early to Newton. The theorem requires warm start and approximate sparsity; target λ=2/n for unique; 15/n for nonunique L1; if set λ too low or N1=20 for L1, failure. Source: MNIST L1 N1=700 [PAGE 9].
- Clock: iteration vs wall time; SNS may have more total iterations? Random 29 vs 56,199; MNIST L1 777 vs 5,748; wall time 12.22 vs 45.75 [PAGE 9]. Need use clock to decide.
Theory of mind: Practitioner expects Newton to always speed up; but quasi-Newton failed [PAGE 17-18]. The "mind" of algorithm? We can say anticipate operator's mental model: if they see Newton, they think dense; if they see sparse, they think heuristic. The paper's counterintuitive result: sparsification is not heuristic, it's justified by approximate sparsity and extremal combinatorics. Need mention multi-week trap: trying to implement BFGS/L-BFGS because standard; paper shows they do not show significant improvement and worse than Sinkhorn on MNIST [PAGE 17-18]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "Physical/biomechanical/weather veto proof." We can write:
- Physical layer: source reports runtime on 2021 MacBook Pro M1 Pro [PAGE 8]. There is no biomechanical or weather variable; those vetoes are inadmissible (no evidence). The only cross-layer physical constraint is compute: memory for dense \(2n\times2n\) Hessian \(O(n^2)\); dense solve \(O(n^3)\); CG matvec \(O(\tau n^2)\); if \(\tau=2/n\), per-iteration \(O(n^2)\) [PAGE 5]. Table 2 proves dense Newton veto at n=2000: 11.86 s/iter vs 0.30 s/iter [PAGE 16]. For n large, O(n^3) grows by factor 8 per doubling, while O(n^2) by 4; so dense method crosses wall/memory budget. Weather/biomechanical cannot veto because no variables and no data; if imported, they would be out-of-source. 
- Numerical physical layer: exponent overflow/underflow; use log-domain. If not, Sinkhorn updates fail. The paper's updates use log(P1), log(P^T1) [PAGE 5], so log-domain is required. 
- Veto proof: If wall-clock budget < N1 Sinkhorn stage time, SNS cannot reach Newton stage; e.g., MNIST L1 Sinkhorn stage 6.28s of total 12.22s [PAGE 9]. If budget <6.28s, SNS vetoed. If memory cannot hold sparse structure plus CG vectors O(n^2) for dense P? Actually P is n×n, so O(n^2) memory anyway. If n too big, even storing P is O(n^2). The paper focuses n=500, 2000, MNIST 784? MNIST 28×28=784. Need mention.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 scenarios. Need predictions with thresholds. We can include "verifiable" by measurable metrics: iteration count, wall-time per iteration, optimality gap, L1 residual, final KL. Use source numbers. We can state "Veto if ...; accept if ..." Need avoid betting. Fine.

Need "THINK_TRACE" maybe include "gray-zone audit" with possible sign issue. We should be careful not to make unsupported claims. But can say "The source prints +η; because f is concave, any implementation must audit whether the solver is using -∇²f or minimizing -f. This is a sign-convention gray zone, not a theorem claim." Is that okay? It might be seen as criticizing source. But gray-zone audit is asked. We can frame as "audit item." Need cite page 4. Maybe also note Theorem 1 informal says \((3/(2n),...)\) but page 6 formal says \((λ*/2+1/(2n),...)\); consistency. Need mention "The informal theorem's constants are not operational; use formal Theorem 1." Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include exact verbatim quotes. Let's ensure quotes accurate:
- [PAGE 1]: "Computing the optimal transport distance between statistical distributions is a fundamental task in machine learning." and "we present Sinkhorn-Newton-Sparse (SNS), an extension to the Sinkhorn algorithm, by introducing early stopping for the matrix scaling steps and a second stage featuring a Newton-type subroutine." Good.
- [PAGE 2]: "The main technical novelty is to solve the Hessian system (∇2f)v = −∇f in Newton’s algorithm efficiently with sparse approximation." Good.
- [PAGE 4]: "∇2f(x, y) = η [diag(P1) P; P ⊤ diag(P ⊤1)]" Need quote maybe "∇2f(x, y) = η" and matrix. Also "The truncation procedure preserves symmetry and diagonal dominance of the Hessian matrix" [PAGE 4]. Good.
- [PAGE 5]: "we switch to a sparsified Newton step when the two following conditions hold: First, the intermediate matrix P should admit a good sparse approximation, and secondly, the Newton step should improve the Lyapunov potential more than the Sinkhorn algorithm." Good.
- [PAGE 6]: "dist(F, Pt,η) ≤6n2 exp (−η∆) + √q √t ." Need quote with spaces. Good.
- [PAGE 7]: "when minP :P 1=r,P ⊤1=c C · P has a unique solution P⋆, it must be an extremal point of the polyhedron P, which has 2n −1 non-zero entries" and "τ(F) = τ(P⋆) ≤ 2n−1 n2 ≤2 n." Good.
- [PAGE 9]: "Choosing a target sparsity of λ = 15/n is sufficient for convergence to the ground truth" and "SNS has an overall runtime advantage for convergence." Good.
- [PAGE 15]: "f(x, y) = f(x + γ1, y −γ1)" and "degenerate direction of v = [1; -1]." Good.
- [PAGE 16]: Table 2 numbers. Quote "SNS 3.26 11 0.30" maybe not verbatim. We can cite table values.
- [PAGE 17]: "quasi-Newton algorithms do not show significant improvement over the Sinkhorn algorithm." Good.
Need exact [PAGE N] markers. Use at least one per section. Good.

Need overall answer. Let's outline:

<THINK_TRACE>
Paragraphs:
1. Source identity and task: analyze paper, no betting variables. We derive from OT to SNS.
2. Derivation multi-hop: Eq1, Lagrangian, eliminate P, get f; Sinkhorn as alternating maximization; Newton; Hessian blocks; sparsification; complexity; theorem.
3. Gray-zone audit: assumptions (unique solution, η large, t large), gauge, nonunique, threshold, sign, line search, CG, log-domain, units, empirical vs theorem. Verbatim quotes with pages. >=400 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Detailed formal equations with units and page citations. Include bullets. Include breakdown regimes. Need maybe table of symbols and units. Use LaTeX. Include exact quotes. 
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage and traps. 
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. 
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios with predictions.
</RLVR_COUNTERFACTUAL_VETOES>

Need ensure no betting terms. Avoid "odds", "spread", "total", "moneyline". We won't.

Need maybe mention "RLVR" not betting. Fine.

Need use "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." We'll include units.

Need "ZERO TOY EQUATIONS" - avoid invented ratios. We use source equations only. For complexity ratios? "8 per doubling" maybe okay? It's not fake ratio? Could avoid. We can state asymptotic scaling. Avoid invented "Force/Fatigue". Good.

Need "exact singularity/breakdown regimes" - include explicit.

Need "Deep multi-hop derivation & gray-zone audit (>=400 words)" - we can write around 800 words in THINK_TRACE. Let's count roughly. We need at least 1000 total; likely >3000.

Need be careful with XML escaping? Use LaTeX with < and >? Avoid raw `<` in text? XML tags need valid? Use `\le` etc. For matrix use `\begin{bmatrix}`. Avoid `&` unescaped? In XML, `&` must be `&amp;`. But we can use LaTeX `&` inside text? XML parser would break. Better avoid raw `&` or escape as `&amp;`. We can write matrices without `&`? Use `\begin{bmatrix} \mathrm{diag}(P1) & P \\ ...` would include &. To keep XML valid, escape `&amp;`. But final answer as text maybe not parsed. To be safe, use `\begin{bmatrix} \mathrm{diag}(P1) \quad P \\ P^\top \quad \mathrm{diag}(P^\top 1) \end{bmatrix}` without `&`. Or use `\left[\begin{array}{cc} ... \end{array}\right]` with `&`? Avoid. Use `\begin{bmatrix} \mathrm{diag}(P1) \;\; P \\ P^\top \;\; \mathrm{diag}(P^\top 1) \end{bmatrix}` no ampersand. Good. Avoid `<` and `>` in text; use `\le`, `\ge`. Avoid `&` entirely. Use `and` words. If need quotes with `&` no. Good.

Need quote "l0" with subscript. Fine.

Need use exact page markers like `[PAGE 1]`. Good.

Potential issue: The source text has `[PHONE]` weird at page 8. Ignore.

Need think about sign issue. We need decide whether to include. It may confuse. But gray-zone audit can mention sign convention as an audit item without asserting error. Let's phrase: "The source prints \(\nabla^2 f = +\eta[...]\) while calling \(f\) concave and maximizing; an implementation must verify whether the Newton system is using the Hessian of \(f\) or of \(-f\). This is a sign-convention audit item; the paper's algorithm writes \(M\Delta z=-\nabla f(z)\), so the operational linear system must be checked." That is fair. It uses page 4 and page 5. Is this too critical? It's a gray-zone audit. Good.

Need maybe mention "The source prints \(\exp(\eta(-c_{ij}+x_i+y_j)-1)\); placement of \(-1\) is ambiguous in extracted text; verify from PDF." This is useful. But maybe not necessary. Could include as gray-zone. We'll mention "The extracted text's \(-1\) placement should be checked against the PDF; it affects the constant shift only and not gradients." Good.

Need "multi-hop derivation" include:
Step 1 primal-dual Lagrangian \(L\). Step 2 inner min \(p_{ij} = \exp(\eta(-c_{ij}+x_i+y_j)-1)\). Step 3 plug to get f. Step 4 derivatives. Step 5 Newton system. Step 6 approximate sparsity. Step 7 complexity. This is multi-hop.

Need "source operators" maybe define \(\mathrm{Sparsify}\), \(\mathrm{ConjugateGradient}\), \(\mathrm{LineSearch}\). Good.

Need "Cross-layer veto" proof: Use quantitative numbers:
- Random: SNS total 0.34s, 29 iter vs Sinkhorn 233.36s, 56,199 iter [PAGE 9]. 
- MNIST L2: 2.33s, 53 iter vs 18.84s, 2041 [PAGE 9].
- MNIST L1: 12.22s, 777 vs 45.75s, 5,748 [PAGE 9].
- Dense Newton: 118.56s, 10 iter, 11.86 s/iter vs SNS 3.26s, 11 iter, 0.30 s/iter [PAGE 16].
- Quasi-Newton: no significant improvement; worse on MNIST runtime [PAGE 17-18].
Use these as veto proof. Physical layer: runtime measured on M1 Pro [PAGE 8]; no biomechanical/weather. Good.

Need "RLVR counterfactual vetoes" with predictions:
1. Remove Sparsify: if dense Newton per-iteration time does not scale as O(n^3) or SNS not significantly faster, veto. Predict at n=2000 ratio > 30x per iter, total > 30x. Source gives 11.86/0.30=39.5, 118.56/3.26=36.4. We can state. Veto if ratio <10x? That's a threshold. Fine.
2. Set λ too low: use MNIST L1 with λ=1/n instead of 15/n; predict failure to reach machine accuracy within N2 or line search stalls; final gap > tolerance. Source says λ=15/n sufficient [PAGE 9]. Veto if λ=1/n matches λ=15/n.
3. Omit gauge projection/augmentation: predict CG residual stagnates or line search fails due to singular direction; with augmentation stable. Source page 15. Veto if naive f converges identically.
Need maybe "verifiable RLVR" means rewards computable from measurements. We'll define measurable quantities: wall time, iteration count, log optimality gap, residual norm, final KL. Good.

Need "RETROCAUSAL_GENEALOGY" multi-week traps:
- Week 1 trap: implement Sinkhorn only; no SNS. 
- Week 2: implement Newton with dense Hessian; O(n^3) and slow, as Brauer 2017. Cite page 2: "even a single Newton step has an O(n3) cost" [PAGE 2]. 
- Week 3: replace with quasi-Newton; paper shows poor [PAGE 17].
- Week 4: over-sparsify; threshold too aggressive; use λ=2/n unique but 15/n nonunique; nonunique trap.
- Week 5: ignore gauge; CG fails.
- Week 6: forget log-domain; underflow.
- Week 7: misread η scaling; η=1200 with normalized pixel distances equivalent to 42? Source page 17 says η=1200 equivalent to η=1200/28≈42 for L1. Good.
Need cite page 17. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe "crisis habit regression" is under pressure reverting to known Sinkhorn. Counter-trap: Newton without sparsification; over-sparsification. Clock: iteration vs wall time. Need include "theory of mind" as modeling the operator's beliefs:
- Belief: "Newton is always better" -> counter-trap dense O(n^3).
- Belief: "Sparse approximation is heuristic" -> misses theorem.
- Belief: "More iterations means slower" -> ignore wall time; SNS random 29 iter vs Sinkhorn 56,199; MNIST L1 777 vs 5,748. 
- Belief: "Nonunique solutions will break SNS" -> source tests L1 nonunique and works with λ=15/n [PAGE 9]. 
- Crisis regression: if line search fails, revert to Sinkhorn; but source says Sinkhorn stage is warm initialization and switch conditions. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include "Biomechanical/weather veto proof" as "vacuous proof": The source contains no biomechanical or weather variables; therefore any such veto has zero evidential support. We can say "The only admissible cross-layer vetoes are computational physical constraints (time, memory, floating-point) and mathematical constraints (gauge, sparsity, smoothness)." This is important. Good.

Need avoid "proof" too strong? We can provide "adjudication" and "proof sketch". Fine.

Need final answer with XML tags. No extra preamble? Could start directly with `<THINK_TRACE>`. Good.

Need ensure no markdown bullet `&` issue. Use `\text` etc. Use `%`? Fine.

Let's draft in detail.

Potential XML issue: Using `\nabla^2 f` etc fine. Using `<` in text? Avoid. Using `>`? Avoid. Use `\le`, `\ge`. Use `\to`. Use `\exp`. Use `\mathcal`. Use `\top`. Use `\Delta`. Use `\eta`. Use `\lambda`. Good.

Need quotes with `"` fine. Avoid `&` in quotes. The quote "diag(P1) P P ⊤ diag(P ⊤1)" no ampersand. Good.

Need maybe use `[PAGE 4]` after quote. Good.

Let's write.

Need word count. Let's estimate THINK_TRACE ~700 words. Source equations ~600. Genealogy ~400. Theory of mind ~400. Cross-layer ~400. RLVR ~400. Total ~2900. Good.

Let's ensure all required sections exist exactly: `<THINK_TRACE>`, `<SOURCE_OPERATORS_AND_EQUATIONS>`, `<RETROCAUSAL_GENEALOGY>`, `<RECURSIVE_THEORY_OF_MIND>`, `<CROSS_LAYER_VETO_ADJUDICATION>`, `<RLVR_COUNTERFACTUAL_VETOES>`. Good.

Need maybe include ">=1,000-word depth" not explicitly say. Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a computational optimal-transport paper, not a physical, biomechanical, or weather model. The admissible derivation starts from the entropic OT objective in [PAGE 1]: \(\min_{P:P1=r,P^\top 1=c} C\cdot P+\frac{1}{\eta}H(P)\). The first multi-hop step is the primal-dual Lagrangian \(L(P,x,y)=\frac1\eta P\cdot\log P+C\cdot P-x\cdot(P1-r)-y\cdot(P^\top1-c)\) [PAGE 4]. The inner minimization over \(P\) gives \(p_{ij}=\exp(\eta(-c_{ij}+x_i+y_j)-1)\), and substitution yields the concave Lyapunov potential \(f(x,y)\) in [PAGE 2]. The second hop is the variational identification: maximizing \(f\) is equivalent to solving the entropic OT problem, and Sinkhorn row/column scaling is exactly alternating coordinate ascent, because \(\nabla_x f=r-P1\) and \(\nabla_y f=c-P^\top1\) [PAGE 4]. The third hop is Newton acceleration: instead of alternating exact coordinate maximization, solve the Hessian system \((\nabla^2 f)v=-\nabla f\) [PAGE 2]. The source's Hessian is printed as \(\nabla^2 f(x,y)=\eta\begin{bmatrix}\mathrm{diag}(P1)\;\;P\\P^\top\;\;\mathrm{diag}(P^\top1)\end{bmatrix}\) [PAGE 4]. The fourth hop is sparsification: because the optimal \(P\) is approximately supported on a sparse transport plan after warm Sinkhorn steps, the Hessian is approximately sparse; truncating entries below \(\rho\) and solving with conjugate gradient gives a search direction \(\Delta z\) [PAGE 4-5]. The fifth hop is complexity: left multiplication by a matrix of sparsity \(\tau(M)\) costs \(O(\tau(M)n^2)\), and CG uses \(O(n)\) such multiplications, so the solve is \(O(\tau(M)n^3)\); with target sparsity \(\lambda=O(1/n)\), per-iteration cost is \(O(n^2)\) [PAGE 5]. The sixth hop is the non-asymptotic guarantee: Theorem 1 gives \(\mathrm{dist}(\mathcal F,P_{t,\eta})\le 6n^2\exp(-\eta\Delta)+\frac{\sqrt q}{\sqrt t}\), hence \(P_{t,\eta}\) is \((\lambda^\star,\epsilon_{t,\eta})\)-sparse and the Hessian is \((\frac{\lambda^\star}{2}+\frac{1}{2n},2\epsilon_{N_1,\eta})\)-sparse [PAGE 6]. The seventh hop is the uniqueness case: a unique solution is an extremal point with \(2n-1\) nonzero entries, so \(\tau(\mathcal F)\le 2/n\), and if \(r=c=\frac1n1\), Birkhoff-von Neumann gives \(\tau(\mathcal F)=1/n\) [PAGE 7]. The eighth hop is non-uniqueness: under a strict cost condition, the optimal face is \(C_{2,2}\)-free and \(\tau(\mathcal F)\le\frac{1+o(1)}{\sqrt n}\) [PAGE 7]. The gray-zone audit has several exact items. First, Theorem 1 assumes \(\|r\|_1=\|c\|_1=1\), a vertex optimality gap \(\Delta\), and \(\eta>\frac{1+2\log n}{\Delta}\); if \(\Delta=0\), that condition is not finite and the bound breaks down, which is why the paper separately treats non-unique solutions and uses \(\lambda=15/n\) on MNIST \(L1\) [PAGE 6-9]. Second, the warm start is not cosmetic: the source says the Sinkhorn stage provides warm initialization and ensures the intermediate \(P\) satisfies approximate sparsity, and it switches only when \(P\) has a good sparse approximation and Newton improves \(f\) more than Sinkhorn [PAGE 5]. Third, the gauge direction \(v=[1;-1]\) is singular because \(f(x,y)=f(x+\gamma1,y-\gamma1)\); the paper's augmented potential subtracts \(\frac12(\sum_i x_i-\sum_j y_j)^2\) and projects into \(v^\perp\) [PAGE 15-16]. Fourth, the source prints a positive \(\eta\)-scaled Hessian while calling \(f\) concave and maximizing; the operational sign convention in \(M\Delta z=-\nabla f(z)\) must be audited against the implementation, because a sign error turns ascent into descent. Fifth, the extracted placement of the \(-1\) inside \(\exp(\eta(-c_{ij}+x_i+y_j)-1)\) is a constant shift; it does not change gradients but must match the PDF exactly. Sixth, CG is justified by symmetry and diagonal dominance after truncation [PAGE 4], so an aggressive threshold that destroys diagonal dominance is outside the stated guarantee. Seventh, the informal theorem on [PAGE 2] uses constants that are not operational; Theorem 1 on [PAGE 6] is the formal object. Eighth, empirical super-exponential convergence is observed but not proved; the source says "While we cannot prove the conjectured super-exponential convergence, the low iteration count in the Newton stage shows strong numerical support" [PAGE 9]. These are the gray zones that matter: assumptions, gauge, non-uniqueness, threshold, sign, and the difference between iteration count and wall time.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the entropic OT problem as
\[
P^\star=\arg\min_{P:P1=r,\;P^\top1=c} C\cdot P+\frac1\eta H(P),
\qquad H(P)=\sum_{ij}p_{ij}\log p_{ij},
\]
with \(\eta>0\) the entropy regularization parameter, \(C\in\mathbb R^{n\times n}\) the cost matrix, and \(r,c\in\mathbb R^n\) the source and target densities [PAGE 1]. Units: \(C\cdot P\) is cost times mass; \(H(P)\) is in nats when the logarithm is natural; \(\eta\) has inverse-cost units so that \(\eta C\) and \(\eta(x_i+y_j)\) are dimensionless; \(x,y\) are dual potentials in cost units; \(r,c\) are probability/mass vectors; in Theorem 1 the normalization is \(\|r\|_1=\|c\|_1=1\) [PAGE 6]. The kernel/scaling form is \(P=X\exp(-\eta C)Y\), i.e., \(P=\exp(\eta(-C+x1^\top+1y^\top)-1)\) [PAGE 1, PAGE 4].

The Lyapunov potential is
\[
f(x,y)=-\frac1\eta\sum_{ij}\exp\!\big(\eta(-c_{ij}+x_i+y_j)-1\big)
+\sum_i r_i x_i+\sum_j c_j y_j,
\]
and maximizing \(f\) is equivalent to solving the entropic OT problem [PAGE 2, PAGE 4]. Its first derivatives are
\[
\nabla_x f(x,y)=r-P1,\qquad \nabla_y f(x,y)=c-P^\top1,
\]
so Sinkhorn row scaling sets \(P1=r\) and column scaling sets \(P^\top1=c\) [PAGE 4]. The source's Hessian block is
\[
\nabla^2 f(x,y)=\eta
\begin{bmatrix}
\mathrm{diag}(P1) \;\; P\\
P^\top \;\; \mathrm{diag}(P^\top1)
\end{bmatrix}.
\]
[PAGE 4]. The Newton system is
\[
(\nabla^2 f)v=-\nabla f,
\]
and SNS replaces \(\nabla^2 f(z)\) by \(M=\mathrm{Sparsify}(\nabla^2 f(z),\rho)\), then solves \(M\Delta z=-\nabla f(z)\) by conjugate gradient, then applies a line search \(z\leftarrow z+\alpha\Delta z\) [PAGE 5]. The Sinkhorn updates are
\[
x\leftarrow x+\frac{\log r-\log(P1)}{\eta},\qquad
y\leftarrow y+\frac{\log c-\log(P^\top1)}{\eta},
\]
which requires log-domain evaluation [PAGE 5]. The complexity chain is: a matvec with \(M\) costs \(O(\tau(M)n^2)\); CG uses \(O(n)\) matvecs; thus the solve costs \(O(\tau(M)n^3)\); with target sparsity \(\tau(M)\le\lambda\) and \(\lambda=2/n\), per-iteration cost is \(O(n^2)\) [PAGE 5]. The formal sparsity guarantee is
\[
\mathrm{dist}(\mathcal F,P_{t,\eta})\le 6n^2\exp(-\eta\Delta)+\frac{\sqrt q}{\sqrt t},
\]
so \(P_{t,\eta}\) is \((\lambda^\star,\epsilon_{t,\eta})\)-sparse with \(\epsilon_{t,\eta}=6n^2\exp(-\eta\Delta)+\frac{\sqrt q}{\sqrt t}\), and the Hessian after \(N_1\) Sinkhorn steps is \((\frac{\lambda^\star}{2}+\frac1{2n},2\epsilon_{N_1,\eta})\)-sparse [PAGE 6]. In the unique case, \(\tau(\mathcal F)\le 2/n\), and for \(r=c=\frac1n1\), \(\tau(\mathcal F)=1/n\) [PAGE 7]. Theorem 2 gives the Newton-stage sparsity
\[
\zeta_k=6n^2\exp(-\eta\Delta)+\sqrt q\,(\epsilon_k)^{1/4},
\]
where \(\epsilon_k=\max_z f(z)-f(z_k)\) [PAGE 7]. Theorem 3 gives, under a strict cost condition, \(\tau(\mathcal F)\le\frac{1+o(1)}{\sqrt n}\) [PAGE 7]. The augmented potential is
\[
f_{\mathrm{aug}}(x,y)=f(x,y)-\frac12\left(\sum_i x_i-\sum_j y_j\right)^2,
\]
with \(v=[1;-1]\), \(M=\mathrm{Sparsify}(\nabla^2 f(z),\rho)-vv^\top\), and projection into \(v^\perp\) [PAGE 15-16]. Breakdown regimes are exact: if \(\Delta=0\), the condition \(\eta>\frac{1+2\log n}{\Delta}\) is not finite and Theorem 1's bound degenerates; if \(t\) is too small, the \(\sqrt q/\sqrt t\) term dominates; if \(\lambda<\tau(\mathcal F)\), the sparsified Hessian discards support and the Newton direction is biased; if the threshold destroys diagonal dominance, the CG justification fails; if the gauge direction is not projected out or the augmented potential is not used, the Hessian is singular along \(v=[1;-1]\); if \(P1\) or \(P^\top1\) underflows, the log-domain updates fail [PAGE 5, PAGE 15]. The source says the truncation "preserves symmetry and diagonal dominance of the Hessian matrix" [PAGE 4], so those are the structural assumptions for CG. The empirical margins are: random assignment SNS \(0.34\) s and \(29\) iterations versus Sinkhorn \(233.36\) s and \(56\,199\) iterations; MNIST \(L2\) SNS \(2.33\) s and \(53\) iterations versus Sinkhorn \(18.84\) s and \(2041\); MNIST \(L1\) SNS \(12.22\) s and \(777\) iterations versus Sinkhorn \(45.75\) s and \(5748\) [PAGE 9]. Dense Sinkhorn-Newton at \(n=2000\) costs \(118.56\) s and \(10\) iterations, \(11.86\) s per iteration, versus SNS \(3.26\) s and \(11\) iterations, \(0.30\) s per iteration [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is unusually clear. Yule's matrix-scaling idea and Sinkhorn's 1964 convergence result are the ancestral operators; Linial-Samorodnitsky-Wigderson connect scaling to matrix scaling and approximate permanents; Cuturi's 2013 entropy regularization makes the kernel scaling practical; Altschuler-Niles-Weed-Rigollet give near-linear iteration analysis; Brauer-Clason-Lorenz-Wirth introduce Sinkhorn-Newton but at \(O(n^3)\) per Newton step; Ghosal-Nutz sharpen Sinkhorn convergence; Weed gives the entropic-penalty distance bound; Jukna supplies the extremal-combinatorics \(C_{2,2}\)-free bound [PAGE 1-3, PAGE 6-7]. The retrosausal lesson is that SNS is not a break from Sinkhorn but a composition: Sinkhorn is the warm-start and gauge-fixing ancestor, Newton is the second-order descendant, and sparsification is the complexity-repair operator. The multi-week traps follow directly. Week 1 trap: implement only Sinkhorn and conclude the problem is slow; the source's random case needs \(56\,199\) Sinkhorn iterations versus \(29\) SNS iterations [PAGE 9]. Week 2 trap: implement dense Newton because "Newton is better"; the source says "even a single Newton step has an O(n3) cost" [PAGE 2], and Table 2 shows \(11.86\) s per iteration versus \(0.30\) s [PAGE 16]. Week 3 trap: replace Newton with BFGS or L-BFGS because quasi-Newton is standard; the source reports "quasi-Newton algorithms do not show significant improvement over the Sinkhorn algorithm" and both are worse than Sinkhorn on MNIST runtime [PAGE 17-18]. Week 4 trap: treat sparsification as a heuristic and set \(\lambda\) arbitrarily; the paper's theorem requires \(\lambda^\star=\tau(\mathcal F)\), uses \(\lambda=2/n\) for unique cases, and \(\lambda=15/n\) for non-unique MNIST \(L1\) [PAGE 5, PAGE 9]. Week 5 trap: switch to Newton too early; the source says it needs "at most \(O(1/\epsilon^2)\) Sinkhorn steps for the sparsification to be within an error of \(\epsilon\)" [PAGE 5], and uses \(N_1=700\) for MNIST \(L1\) [PAGE 9]. Week 6 trap: ignore the gauge; \(f(x,y)=f(x+\gamma1,y-\gamma1)\) creates the degenerate direction \(v=[1;-1]\), so naive Newton is singular [PAGE 15]. Week 7 trap: ignore entropy scaling; the source notes \(\eta=1200\) with normalized pixel distance is equivalent to \(\eta=1200/28\approx42\) for the \(L1\) pixel metric [PAGE 17]. These traps are retrosausal because each later failure is already encoded in an earlier operator: scaling without sparsity gives slow convergence; Newton without sparsity gives cubic cost; sparsity without warm start gives bad support; Newton without gauge projection gives singularity; quasi-Newton without true Hessian structure gives noisy curvature.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis habit regression is the practitioner's fallback under deadline: when convergence stalls, revert to the familiar Sinkhorn loop or the familiar dense Newton solve. Both are understandable and both are partially vetoed by the source. Reverting to Sinkhorn is safe but can be clock-infeasible: \(56\,199\) iterations on the random case [PAGE 9]. Reverting to dense Newton is mathematically valid but physically infeasible at scale: \(O(n^3)\) per iteration and \(11.86\) s per iteration at \(n=2000\) [PAGE 16]. The counter-trap is over-correction: after seeing "sparse Hessian," the operator may set \(\lambda\) too small, switch to Newton before the warm start, or omit the augmented potential. The source blocks this with a precise switch rule: switch when \(P\) admits a good sparse approximation and when Newton improves the Lyapunov potential more than Sinkhorn [PAGE 5]. It also blocks over-sparsification with the formal target \(\lambda^\star=\tau(\mathcal F)\), the unique-case \(\lambda=2/n\), and the non-unique-case \(\lambda=15/n\) [PAGE 5, PAGE 9]. The clock is the decisive mental model. A practitioner who counts only iterations will misread SNS in cases where the Sinkhorn stage is long: MNIST \(L1\) uses \(700\) Sinkhorn iterations plus \(77\) Newton iterations, total \(777\), versus \(5748\) Sinkhorn iterations, and wall time \(12.22\) s versus \(45.75\) s [PAGE 9]. The clock model must therefore track three clocks: warm-start clock \(N_1\), Newton clock \(N_2\), and wall-clock per iteration. The recursive theory of mind is that the algorithm's "intent" is not to replace Sinkhorn but to stop it early and hand a warm, approximately sparse \(P\) to Newton. Any operator who believes "Newton means dense" will regress to the cubic trap; any operator who believes "sparse means heuristic" will under-appreciate the theorem; any operator who believes "non-unique means broken" will miss the paper's explicit MNIST \(L1\) test, where SNS still converges to ground truth with \(\lambda=15/n\) [PAGE 9]. The correct counter-trap is: warm-start, audit \(\tau(\mathcal F)\), project the gauge, choose \(\rho\) from the \(\lceil\lambda n^2\rceil\)-largest Hessian entries, use CG only after checking symmetry and diagonal dominance, and judge success by both iteration count and wall time [PAGE 5, PAGE 15].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source contains no biomechanical variables and no weather variables. Therefore a biomechanical veto or weather veto has no admissible evidence in this corpus; importing one would be an out-of-source layer violation. The only cross-layer vetoes that can be adjudicated are computational-physical and numerical. Computational-physical veto: dense Hessian formation and dense linear solving scale as \(O(n^2)\) memory and \(O(n^3)\) time; SNS sparsifies to \(O(\tau(M)n^2)\) matvec and \(O(\tau(M)n^3)\) CG solve, and with \(\tau(M)=O(1/n)\) this is \(O(n^2)\) per iteration [PAGE 5]. The empirical proof is Table 2: at \(n=2000\), SNS runs \(3.26\) s total and \(0.30\) s per iteration, while Sinkhorn-Newton runs \(118.56\) s total and \(11.86\) s per iteration [PAGE 16]. The source also reports runtime on a "2021 Macbook Pro laptop with an Apple M1 Pro chip" [PAGE 8], so the physical layer is a specific hardware clock, not an abstract one. If the wall-clock budget is below the Sinkhorn warm-start time, SNS is vetoed before Newton begins: on MNIST \(L1\) the Sinkhorn stage alone is \(6.28\) s of the \(12.22\) s total [PAGE 9]. If memory cannot hold the \(n\times n\) kernel and the sparse Hessian plus CG vectors, even SNS is vetoed; the paper does not claim sub-\(O(n^2)\) memory. Numerical-physical veto: direct exponentiation of \(\exp(\eta(-C+x1^\top+1y^\top)-1)\) can underflow or overflow for large \(\eta\); the algorithm's log-domain updates \(x\leftarrow x+(\log r-\log(P1))/\eta\) and \(y\leftarrow y+(\log c-\log(P^\top1))/\eta\) are therefore mandatory [PAGE 5]. Gauge veto: omitting the projection into \(v^\perp\) or the augmented potential leaves a singular direction \(v=[1;-1]\), because \(f(x,y)=f(x+\gamma1,y-\gamma1)\) [PAGE 15]. Sparsity veto: if the target \(\lambda\) is below \(\tau(\mathcal F)\), the truncated Hessian loses support and the Newton direction is no longer a valid approximation; the paper's unique-case \(\lambda=2/n\) and non-unique \(L1\) \(\lambda=15/n\) are the operational guards [PAGE 5, PAGE 9]. Weather and biomechanics cannot override these because they are not measured, not modeled, and not in the source; the adjudication is therefore that computational and numerical vetoes are admissible, while weather and biomechanical vetoes are vacuous.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: remove the sparsification operator and solve the dense Newton system. Verifiable prediction: per-iteration cost should scale as \(O(n^3)\), and at \(n=2000\) the dense method should be roughly an order of magnitude or more slower per iteration than SNS. The source gives \(11.86\) s per iteration for Sinkhorn-Newton versus \(0.30\) s for SNS, and \(118.56\) s versus \(3.26\) s total [PAGE 16]. Veto condition: if dense Newton is not substantially slower per iteration at the same \(n\), or if its per-iteration time does not grow faster than SNS as \(n\) increases, the claimed cubic penalty is not verified. Accept condition: dense Newton reproduces the source's large per-iteration gap and SNS retains the \(O(n^2)\)-style advantage.

Scenario 2: set the target sparsity below the optimal-face sparsity, e.g., use \(\lambda=1/n\) on the non-unique MNIST \(L1\) problem instead of the source's \(\lambda=15/n\). Verifiable prediction: the sparsified Hessian will discard mass from the optimal face, the Newton stage will either stall or require substantially more line-search reductions, and the final optimality gap or marginal KL will remain above machine accuracy within the same \(N_2\) budget. The source explicitly says "Choosing a target sparsity of \(\lambda = 15/n\) is sufficient for convergence to the ground truth" on the non-unique \(L1\) case [PAGE 9], and Theorem 1 requires \(\lambda^\star=\tau(\mathcal F)\) [PAGE 6]. Veto condition: if \(\lambda=1/n\) matches \(\lambda=15/n\) in final gap and iteration count, the sparsity-target claim is falsified. Accept condition: the under-sparsified run fails or degrades while the source-matched \(\lambda=15/n\) converges.

Scenario 3: omit the augmented Lyapunov potential and the projection into \(v^\perp\) in the Newton stage. Verifiable prediction: the Hessian retains the gauge null direction \(v=[1;-1]\), CG residual will stagnate or the line search will fail to improve \(f_{\mathrm{aug}}\), and the run will not reproduce the stable Newton-stage iteration counts. The source states \(f(x,y)=f(x+\gamma1,y-\gamma1)\) and introduces \(f_{\mathrm{aug}}=f-\frac12(\sum_i x_i-\sum_j y_j)^2\) with \(M=\mathrm{Sparsify}(\nabla^2 f(z),\rho)-vv^\top\) [PAGE 15-16]. Veto condition: if the unaugmented, unprojected run converges identically to the augmented run on the same problem, the necessity of gauge fixing is not verified. Accept condition: the unaugmented run exhibits singularity or instability, while the augmented/projected run reproduces the source's stable Newton stage.
</RLVR_COUNTERFACTUAL_VETOES>
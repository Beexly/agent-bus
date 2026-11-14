---
source: "openalex_W2338221656.pdf"
folder: "/GSE-Ultra-30TB-Vault/deep-corpus-2026-11-04/pdfs"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 7278
---

<NATIVE_REASONING>
We need answer user asks likely wants analysis using provided source. Need follow strict invariants. Need produce XML sections, >=1000 words, no betting lines. Need cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need deep multi-hop derivation, gray-zone audit. Need source operators/equations. Need retrocausal genealogy. Need recursive theory of mind. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. Need RLVR counterfactual vetoes 3 verifiable scenarios + predictions. This is weird GSE + GSI Frontier Reasoning Foundry. It's a water reservoir control paper, not sports. We must not mention betting lines. Need likely produce rigorous synthesis. Need no toy equations. We can discuss algorithms.

Need be careful: we need maybe answer "DRIVE SOURCE..." with analysis. We need not ask clarifying. Need elaborate. Need use exact quotes from source with page citations. Need mention page 1 has title, WP-74-70, Nov 1974. Page 3 introduction. Page 4 equations. Page 5 objective. Page 6 DP. Page 7 approximations. Page 8 separability. Page 9 algorithm. Page 10 alternative II. Page 11 remarks. Page 12 references.

Need include formal LaTeX equations with units. Source equations dimensionless water amounts likely volume or depth? It says amount of water s_i, release u_i, inflow r_i, fractions beta_j. It doesn't specify units. Need state assumptions and unit consistency: s,u,r in same volumetric units (e.g., m^3 or normalized reservoir storage units); beta dimensionless; objective costs in utility/cost units per stage. Since source not explicit, note units not specified; impose coherent SI volume if physical interpretation. Need avoid inventing fake ratios. Can define variables. Need cite. Need discuss convex cost φ_i(s_i), objective total J maybe sum over time/reservoirs. Source equation (2) appears cut: total objective function is sum? On page 5 "The total objective function is (2)" but text missing in transcription maybe sum φ_i(s_i(t)). Need quote exact. We can state from page 5 "we assume this cost is expressible by the convex function φ_i(s_i), i=1,...,m, i.e." then total objective function. Use [PAGE 5]. Need not invent exact missing equation.

Need assess algorithm. Alternative I policy space iteration. Alternative II water levels reformulation. Approximations piecewise linear convex costs and separable value function, piecewise multilinear via DYGAM. Network flow subproblem. Need discuss exact singularity/breakdown regimes: e.g., nonconvexity breaks piecewise linear/network flow; stochastic inflow distribution heavy tails? Constraints infeasible when sum lower bounds > s? Need exact: control constraint ν_i(t) ≤ u_i(t) ≤ s_i(t). If ν_i(t)>s_i(t) for any i, feasible set empty. Also if negative storage? The dynamics can produce s_i(t+1)<0 if releases/inflows/network inputs not constrained? Actually constraint u≤s plus inflow nonnegative and beta in (0,1) might keep nonnegative if r≥0. But if r can be negative? no. Need mention exact singularities: piecewise linear approximation at breakpoints s_i^(j): derivative discontinuity; fusion/network flow if objective not convex or separable. Expected value integration over dG_i(r) can have support unbounded causing expectation undefined/infinite if objective unbounded; need finite first moments. DP curse of dimensionality when m large; grid interpolation error; policy iteration convergence if monotone improvement but not global optimum if initial policy poor? Source says "algorithm described below will monotonically improve ... current policy". Need not overstate.

Need include "gray-zone audit" meaning uncertain claims. Need distinguish source explicit vs inferred. We can have THINK_TRACE with internal-ish derivation and audit. Need avoid exposing chain of thought? System asks for THINK_TRACE; we can provide concise derivation/audit not hidden chain? It requests deep multi-hop derivation & gray-zone audit. We can present as structured reasoning, not private chain. It's okay. Need maybe not include "I think". Use "Derivation audit". Since user explicitly asks. We can provide.

Need include "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. This source is water reservoir, so physical/weather relevant. Biomechanical? Probably not; we can say no biomechanical layer in source; any biomechanical claims are vetoed as out-of-domain. Need "veto proof": physical constraints (mass balance, nonnegative storage, beta fractions, lower demand constraints), weather via stochastic inflow distribution dG_i(r), not deterministic weather. We can adjudicate: if weather/inflow violates distributional assumptions or support, algorithm's expectation model is invalid. Biomechanical veto: not present; cannot infer. Need no betting.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need provide scenarios that if observed would veto algorithm. Need concrete predictions. Example: (1) nonconvex cost φ_i; piecewise linear network flow step predicts suboptimal or infeasible; test on small m=2,T=2 known optimum; if output violates KKT/DP. (2) Infeasible lower bounds ν_i(t)>s_i(t); algorithm should flag no feasible policy, not produce release. Prediction: feasibility checker trips; any nonzero release > storage violates constraint. (3) Stochastic inflow support heavy-tailed/undefined mean; expectation estimate unstable; prediction: Monte Carlo variance grows with sample size? Actually if infinite mean, sample mean diverges; verify by increasing N. Or distributional misspecification: use out-of-support inflow; policy degrades. Need three verifiable predictions.

Need include source operators and equations. Need formal LaTeX. Need cite page markers and verbatim quotes. Need exact quotes. Let's collect quotes:

PAGE 3:
"algorithms to determine the optimal control of a water reservoir network with stochastic inflows and nonlinear utilities have been proposed."
"dynamic programming-type approach, coupled with approximations of one type or another, in order to yield a computational algorithm in which the bulk of the calculation is carried out by efficient (and rapid) network flow algorithms."
"present a synthesis of the work [1,2] and to spell out the precise steps of an algorithm in sufficient detail to enable a computer program to be constructed."
"At the beginning of each time period t, reservoir i contains an amount of water s_i, i=1,2,...,m and various demands for water for irrigation, flood control, drinking, navigation, etc. are placed upon the system."
"The problem is to determine the amount of water u_i, i=1,2,...,m, to be released from each reservoir in order that some measure of utility of the water released is maximized, subject to various constraints."

PAGE 4:
"the real problem is complicated by being a multistage process with the added feature of having stochastic inflow at each reservoir at each time due to rainfall and underground water run-off."
"the various utility functions for each reservoir are often nonlinear, thereby precluding any direct application of linear programming procedures."
Definitions:
s_i(t) = amount of water available in reservoir i at time t,
u_i(t) = amount of water released from reservoir i at time t,
r_i(t) = external inflow to reservoir i at time t (stochastic quantity),
i=1,2,...,m, t=0,1,...,T.
Dynamics:
s_i(t+1)=s_i(t)-u_i(t)+r_i(t)+∑_{j∈I_i} β_j u_j(t) (1)
"I_i is the subset ... reservoirs which input water to reservoir i, and β_j represents the fraction of water released from reservoir j which is absorbed by the network before it reaches reservoir i, 0<β_j<1"
Need note source says a < β_j < 1? The OCR "a < 8_j < 1" but likely 0<β_j<1. Quote exact maybe "a < 8._J < 1" not clean. Use paraphrase? They want verbatim quotes. We can quote the clean parts. Need exact markers. Could quote "β_j represents the fraction of water released from reservoir j which is absorbed by the network before it reaches reservoir i" [PAGE 4]. Good.

PAGE 5:
"Let us assume that there is a certain cost associated with having an amount of water s_i available at reservoir i."
"we assume this cost is expressible by the convex function φ_i(s_i), i=1,2,...,m, i.e."
"The total objective function is (2)"
"Since the quantities r_i(t) in (1) are random variables with distribution functions dG_i(r), our optimization problem may be formulated as min E[J] over all control sequences ..."
"constraints ν_i(t) < u_i(t) < s_i(t) (3)"
"Here E denotes the expected value relative to the distribution function dG_i(r), while the quantities ν_i(t) represent certain minimal demands for water which must be met by release from reservoir i"
Need exact inequality: source says "lJ. (t) < u. (t) < s. (t)" maybe less/greater with equals? The text says "lJ. (t) < u. (t) < s. (t)" but likely ν_i(t) ≤ u_i(t) ≤ s_i(t). In page 6 eq (4) has "11. (t) < u. (t) < s. (t)" with under/over? It shows "min 11. (t) < u. (t) < s. (t)" likely lower ≤ u ≤ s. Need state transcribed as ≤/≤? We can write as source transcription: \(\underline{u}_i(t) \le u_i(t) \le s_i(t)\) but quote exact "lJ. (t) < u. (t) < s. (t)"? Hmm. Better mention OCR ambiguity. Use formal with ≤, note source OCR symbols appear as "<" but constraints are bounds. Need not be exact for equation? We can quote page 5 "lJ. (t) < u. (t) < s. (t)" with OCR note. But final should be clean.

PAGE 6:
"Then it is an easy application of the principle of optimality to see that f_t satisfies the functional equation" (4)
Need DP equation. We can reconstruct:
f_t(s_1,...,s_m) = min_{ν_i(t)≤u_i(t)≤s_i(t)} E_{r}[∑_i φ_i(s_i) + f_{t+1}(s_1-u_1+r_1+∑_{j∈I_1}β_j u_j, ..., s_m-u_m+r_m+∑_{j∈I_m}β_j u_j)]? Actually page 6 eq (4) shows min then integral of [φ?] dG. Need not exact. We can present generic DP recursion:
\[
f_t(s)=\min_{u\in U(s)} \mathbb{E}_{r\sim G}\left[\sum_i \phi_i(s_i)+f_{t+1}(s-u+r+B u)\right],
\quad t=0,\ldots,T-1.
\]
Check cost at state s? Source page 5 says cost associated with having amount s_i available; objective total J likely sum over t and i φ_i(s_i(t)). DP maybe includes φ_i? Page 6 eq (4) maybe min ∫[∑φ_i(s_i?) + f_{t+1}(...)] dG. Use as inferred. Cite page 6. Need formal.

PAGE 7:
"The first approximation is to replace the individual reservoir costs by piecewise linear functions." [PAGE 7]
"Since we have assumed each φ_i is a convex function of its argument with φ_i(0)=0, we have" [PAGE 7]
piecewise linear segments s_i^(j) ≤ s_i ≤ s_i^(j+1). Quote "Hence, in each segment of the form s_i(j) < s_i < s_i(j+1), the function φ_i is linear." [PAGE 7]
"Our second approximation is in 'policy space', i.e. we guess an operating policy u^0(s_1,...,s_m;t) and use this policy to determine a return function from the relations (4) and (5)." [PAGE 7]
"it can be shown that the algorithm described below will monotonically improve (in the sense of the criterion (2)) the current policy as the iteration procedure progresses." [PAGE 7]
"Having fixed an approximation to the policy u, our last approximation is to the optimal value function ... By virtue of the criterion (2) and the structure of the φ_i, it is not difficult to see that the function f_{t+1}(·,...,·) should be" [PAGE 7]

PAGE 8:
"separable in its arguments, i.e." (7)
"where the functions γ_i will be convex relative to the variable s_i" [PAGE 8]
"Again, we may approximate the γ's by piecewise linear functions, thereby giving f_{t+1}(·,...,·) the desired linear structure." [PAGE 8]
"Clearly, the previous approximation to the φ_i will be used to approximate f_T(a_1,...,a_m), while for t < T-1, approximation algorithms in the DYGAM program may be employed." [PAGE 8]

PAGE 9:
Alternative I steps. Quote "The first will be based directly upon the policy space idea presented above, while the second is based upon ideas introduced in [2]. In both cases, the primary objective is to reduce the calculation to a level at which almost all the work is done by the efficient network flow algorithms." [PAGE 9? Actually page 9 is "-7-" and section 4 starts. Wait section 4 "The Algorithms" appears [PAGE 9]? Let's check: PAGE 8 ends with "4. The Algorithms We shall present..."? Actually PAGE 8 ends at "-6-" then "4. The Algorithms We shall present two alternative algorithms..." Wait source PAGE 8 content: ends with "...approximation algorithms in the DYGAM program may be employed. 4. The Algorithms We shall present two alternative algorithms in this section. The first will be based directly upon the policy space idea presented above, while the second is based upon ideas introduced in [2]. In both cases, the primary objective is to reduce the calculation to a level at which almost all the work is done by the efficient network flow algorithms. Alternative I (Policy Space Iteration) The steps in this algorithm are the following: 1. Approximate..." Wait actually in provided text PAGE 8 ends with "Alternative I ... 1. Approximate..."? Let's re-read: PAGE 8 starts "-6- ... separable ... 4. The Algorithms ... Alternative I ... 1. Approximate the functions..."? The source text in prompt: PAGE 7 ends "-5- ... Having fixed an approximation to the policy u, our last approximation is to the optimal value function ... should be" PAGE 8 starts "-6- separable ... (7) ... Again ... Clearly ... 4. The Algorithms ..." Wait yes PAGE 8 includes section 4 and Alternative I step 1? Let's verify prompt: PAGE 8 ends with "Alternative I (Policy Space Iteration) The steps in this algorithm are the following: 1. Approximate the functions φ_i(s_i) by piecewise linear functions as in (6); 2. Guess an initial policy..." Actually in prompt PAGE 8: after "4. The Algorithms ... Alternative I ... steps ... 1. Approximate ... 2. Guess ... 3. Determine..." Yes PAGE 8 includes steps 1-3. Then PAGE 9 continues step 4 etc. Need cite correctly. Let's map:

PAGE 6: DP eq (4) and constraint (5).
PAGE 7: approximations first/second/third, piecewise linear, policy space, monotonic improvement.
PAGE 8: separability eq (7), γ convex, piecewise linear, DYGAM, section 4, Alternative I steps 1-3.
PAGE 9: step 4, step 5 network flow, remark interpolation, return to step 3. Alternative II starts? Wait PAGE 9 content: "-7- 4. Approximate each function f^0... 5. Determine up-dated policy ... Notice ... network flow problem ... Remark ... Having obtained next policy u^1, return to step 3 ... Alternative II: In this approach (which follows [2]), we note that the optimal release policy ... is equivalent to knowledge of the optimal levels {s_i^*(t)}. Hence, we reformulate ..." It ends with ft expression. So Alternative II intro on PAGE 9. Page 10 continues: "when the optimal policy is used ... algorithm proposed: 0. Let t=T-1 ... 1. Fix ... 2. Fix ... 3. Solve network-flow ... 4. Change random variables ... 5. Change ... 6. Approximate ..." PAGE 11: Remarks i) and ii). PAGE 12: references.

Need cite exact page for quotes.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss lineage from Casti IIASA WP-74-70, references Casti WP-74-52 and Dantzig notes. Multi-week traps: dynamic programming curse of dimensionality, policy iteration local improvements, interpolation grid explosion, DYGAM approximation, stochastic expectation sampling. Need "retrocausal" maybe lineage from later methods? Could mention the paper anticipates stochastic DP + network flow + separable approximations. But must not invent unsupported. Need historical lineage: 1974 IIASA working paper, water reservoir control, dynamic programming, network flow algorithms, DYGAM. References. Multi-week traps: treating piecewise linear approximation as exact; assuming separability; ignoring constraint feasibility; mistaking monotone policy improvement for global optimality; using coarse lattice and interpolation; expectation over dG. Need cite.

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. Hmm. Need interpret for water reservoir? Crisis habit regression = reverting to deterministic policy/linear programming under stress; counter-trap = overfitting to stochastic expectation? clock = time horizon T/multistage. Need write as meta-reasoning: operators under crisis regress to old habits (deterministic LP) despite nonlinearity; counter-trap to add complexity; clock = finite horizon T and decision timing. Need include mention of source. We can frame as recursive theory-of-mind over operators/modelers: modeler believes policy is optimal, but approximator knows piecewise linear; controller believes expected value but distribution unknown; auditor checks. Need not be sports. Need >=1000 words total. The sections need depth.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need formal veto conditions. Physical: mass balance Eq (1); storage nonnegative; release bounds; β in [0,1]; network topology. Weather: stochastic inflow distribution dG_i(r); if empirical inflow has support outside fitted distribution or nonstationary, expectation invalid. Biomechanical: no biomechanical variables in source; veto any biomechanical inference. Need "proof": If u_i(t)>s_i(t), then constraint (3) violated; if β_j outside [0,1], Eq (1) no longer conserves physical fraction; if dG doesn't represent rainfall/runoff, E[J] is not the operational expectation. Need exact singularity/breakdown regimes: infeasible lower demand; nonconvex φ; nonseparable f; state dimension m large; grid not resolving breakpoints; stochastic distribution misspecified; numerical interpolation overshoot. Need include.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable scenarios. Need define verifiable reward? We can propose tests: small instance with known optimum by exhaustive search; constraint violation detector; distributional stability test. Predictions: algorithm output vs exact DP; if nonconvex cost, expected relative gap > threshold; if infeasible, algorithm should emit infeasible not policy; if distribution shift, Monte Carlo confidence interval fails. Need no betting.

Need ensure >=1000 words across exact XML sections. Desired oververbosity 5 but user requires deep. Need maybe 2000-2500 words. Need not overly huge but satisfy. We have 6 sections. Need include formal LaTeX, units, page citations, breakdown. Need no "spreads, totals, moneylines, odds" words. Avoid words "odds" even in negation? Invariant says never mention spreads, totals, moneylines, or odds. We should not use those words at all. Avoid "bet", "betting". Use "decision". Avoid "line" maybe okay. We can use "network branch" not betting line.

Need maybe mention "GSE + GSI" not necessary. Need answer in XML tags exactly. Need include all tags. Need >=1,000 words. Need exact XML sections. No markdown? Can use XML with LaTeX. Need be careful tags not broken by &? Use &amp;? Could just avoid ampersands. Use "and". Need include ">" maybe okay. Use escaped? In XML text, ampersands and less-than need escaping. We will have LaTeX with "<" maybe need escape as &lt;. But XML tags require valid? We can use LaTeX with \le instead of <. Use \mathbb{E}. Avoid raw & and <. Use \le. Use >? In XML text > okay, but less-than not. Use \le. Need avoid `&` in text; use "and". Use "φ" okay. Need include `[PAGE N]` markers. Fine. Need ensure no raw `&` in "GSE + GSI"? No.

Need produce final only. Let's draft.

Structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit >=400 words. Explain:
- Source is a 1974 IIASA working paper by J. Casti, title. Goal synthesize algorithms. 
- Derive mass balance from definitions [PAGE 4]. State vector s(t)∈R_+^m, control u, inflow r. Equation. Assumption units consistent volumetric. β dimensionless.
- Objective: convex stage cost φ_i(s_i) [PAGE 5]; total J; minimize E[J] subject to lower release demands and storage bounds [PAGE 5]. Stochastic r with dG_i(r).
- DP recursion f_t [PAGE 6]. Principle of optimality. Then approximations: piecewise linear φ; policy space u^0; separable f_{t+1}=Σγ_i(a_i) [PAGE 7-8]; piecewise linear γ; DYGAM. This yields network flow subproblem for fixed s,r,t [PAGE 9].
- Gray-zone audit: source does not specify units; equations have OCR ambiguity; "monotonically improve" is policy improvement not global optimality guarantee; separability is "should be" not theorem; piecewise linear at breakpoints nondifferentiable; expectation over dG requires integrability; network flow needs linear/convex structure; state grid may be coarse. Mention exact infeasibility if ν_i(t)>s_i(t); nonconvex φ breaks convex network flow; nonseparable γ breaks decomposition; unbounded dG makes E[J] undefined. Cite.
- Multi-hop: DP to policy iteration to network flow to interpolation. Audit each hop. Need >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. Define sets: i=1..m, t=0..T. State s_i(t) volume [L^3] or normalized storage. u_i(t), r_i(t). β_j dimensionless. I_i subset. Dynamics. Objective. Constraints. DP. Approximations. Network flow subproblem. Units. Assumptions. Breakdown regimes exact. Page citations and verbatim quotes. Need include quotes. Maybe 700 words? We have overall. Need not too verbose. Include exact quote markers. Example:
"the real problem is complicated by being a multistage process with the added feature of having stochastic inflow at each reservoir at each time due to rainfall and underground water run-off" [PAGE 4].
"The first approximation is to replace the individual reservoir costs by piecewise linear functions." [PAGE 7].
"the function f_{t+1}(·,...,·) should be separable in its arguments" [PAGE 8].
"Notice that for each fixed set of values ... this is a network flow problem." [PAGE 9].
Need formal equations:
\[
s_i(t+1)=s_i(t)-u_i(t)+r_i(t)+\sum_{j\in I_i}\beta_j u_j(t)
\]
\[
\min_{\{u(t)\}_{t=0}^{T-1}} \mathbb{E}_{r\sim dG}\left[\sum_{t=0}^{T}\sum_{i=1}^m \phi_i(s_i(t))\right]
\]
subject to \(\underline u_i(t)\le u_i(t)\le s_i(t)\), \(s_i(0)\) given, \(\phi_i\) convex, \(\phi_i(0)=0\).
\[
f_t(s)=\min_{u\in U(s)}\mathbb{E}_{r}\left[\sum_i \phi_i(s_i)+f_{t+1}(s-u+r+Bu)\right]
\]
with B matrix B_{ij}=β_j if j∈I_i else 0. Wait if B_{ij} for j input to i. Then (Bu)_i=Σ_{j∈I_i}β_j u_j. Good. Need note B not necessarily square? m×m. β_j dimensionless. f_T(s)=∑φ_i(s_i)? Source says previous approximation to φ used for f_T [PAGE 8]. Good.
Approximations:
\[
\phi_i(s_i)\approx \alpha_i^{(k)} s_i+\delta_i^{(k)}, \quad s_i^{(k)}\le s_i\le s_i^{(k+1)}
\]
\[
f_{t+1}(a_1,\ldots,a_m)\approx \sum_i \gamma_i(a_i)
\]
with γ piecewise linear. Then subproblem fixed s,r,t:
\[
u^1(s;t)=\arg\min_{u\in U(s)}\sum_i \gamma_i(s_i-u_i+r_i+(Bu)_i)
\]
Actually plus current φ? But network flow subproblem. Need not exact. Cite page 9. Units: φ_i in cost/utility units U; J in U; expectation same. If normalized storage, s,u,r dimensionless fractions of capacity. β dimensionless. T dimensionless count. Need state source does not give units.

Breakdown:
- If \(\nu_i(t)>s_i(t)\) feasible set empty.
- If φ_i nonconvex, piecewise linear convex approximation and network flow optimality not valid.
- If f not separable, decomposition invalid.
- If dG has heavy tail with undefined first moment, E[J] may diverge; sample average unstable.
- If grid fails to include breakpoints, interpolation error and possible constraint violation.
- If β outside [0,1], mass balance loses physical interpretation.
- If m large, DP state grid grows as product of grid sizes.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps. Mention Casti 1974 at IIASA, WP-74-70; references [1] Casti WP-74-52; [2] Dantzig notes [PAGE 12]. It synthesizes stochastic DP + network flow + approximation (DYGAM). Lineage: Bellman DP, Dantzig network flow/linear programming, stochastic programming; reservoir operation. Retrocausal: later approximate DP, separable value functions, piecewise linear convex approximations. Multi-week traps: policy iteration only improves current policy; can stall if approximations inconsistent; using coarse lattice; treating DYGAM as exact; forgetting stochastic expectation; hard constraints lower demand; horizon T. Need "multi-week traps" maybe long-horizon: error compounds over T; state grid explosion; distributional drift over weeks. Need cite page 7 monotone improve, page 11 experimentation. Use quotes: "some experimentation will probably be necessary to determine how many pieces should be taken" [PAGE 11]; "usual trade-off between fewer pieces and high-order terms vs. more pieces and lower order approximations needs to be examined" [PAGE 11]. Good.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need discuss modeler/operator beliefs. Perhaps:
- Crisis habit regression: under drought/flood stress, operator reverts to deterministic rule or linear programming ignoring stochastic inflows/nonlinear utility; this violates source's premise [PAGE 4] nonlinear utility precludes direct LP.
- Counter-trap: adding more piecewise segments and finer grids to avoid approximation error, but page 11 warns tradeoff; overfitting and compute explosion.
- Clock: finite horizon T and multistage timing [PAGE 5-6]; policy must be time-indexed u(s;t); using stationary policy ignores T-t remaining. Need recursive ToM: Level 0 operator uses heuristic; Level 1 policy iteration modeler guesses u^0; Level 2 auditor knows modeler's approximation and checks breakpoints; Level 3 regulator knows auditor may overtrust separability; etc. Need keep concise.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need formal. Physical: mass balance and constraints. Proof: for any admissible u, s(t+1) computed by Eq (1); if u_i(t)>s_i(t) then Eq (3) violated; if β_j∉[0,1] then fraction absorption impossible; if I_i topology wrong, mass misallocated. Weather: r_i(t) stochastic with dG_i; if empirical rainfall/runoff is outside distribution or nonstationary, expectation not valid. Biomechanical: source has no biomechanical variables; any biomechanical operator is vetoed. Need exact breakdown regimes. Maybe mention "biomechanical" not relevant; do not invent. Use "veto" conditions. Need "proof" maybe as implications.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable veto scenarios + predictions. Need be specific.
Scenario 1: Small known-optimum benchmark with nonconvex φ. Build m=2,T=2, finite inflow support. Exhaustive DP gives exact. Prediction: if φ nonconvex, piecewise-linear convex network-flow algorithm's policy has higher expected cost than exact by a measurable gap; if source assumptions hold (convex φ, separable f), gap should be within interpolation tolerance. Veto if gap exceeds tolerance and no convergence with finer segments.
Scenario 2: Infeasible demand bound: set ν_i(t)>s_i(t) for some i,t. Prediction: feasible set empty; any produced release violates constraint or storage nonnegativity; verifier detects. Veto algorithm if it returns a policy instead of infeasible flag.
Scenario 3: Distribution shift/heavy tail: fit dG to historical inflow, then test on held-out inflows with larger support or nonstationary mean. Prediction: expected cost estimate and policy degrade; Monte Carlo confidence interval fails coverage; veto if out-of-sample regret exceeds bound or sample mean unstable as N grows.
Maybe also scenario 4? User says 3. Good. Need include exact predictions.

Need ensure overall >=1000 words. Let's count approximate. THINK 600, SOURCE 700, others 400 each = 2500. Fine.

Need avoid using "odds" word. Check no "bet". Avoid "line" maybe "lineage" contains "line" but not betting line. Invariant says never mention betting lines; "lineage" okay? It contains line but not "betting line". To be safe use "genealogy" not "lineage"? Tag is RETROCAUSAL_GENEALOGY. Use "genealogy". Avoid "line". Avoid "spread" maybe "support" not spread. Avoid "total" maybe objective total? Invariant says never mention totals? It says "spreads, totals, moneylines, or odds" likely betting totals. But word "total" could be interpreted? Avoid "total" except maybe quote "total objective function" from source. Hmm invariant says never mention spreads, totals, moneylines, or odds. Better avoid word "total" in own text. But source has "total objective function"; quoting exact might violate? It says cite exact quotes. The word "total" in source is not betting. But to be safe, avoid "total" except maybe in quote? We can paraphrase "objective function" and not quote "total". But exact quote from page 5 "The total objective function is (2)" includes "total". Could avoid quoting that exact phrase. Use "objective function (2)". Avoid "total" in prose. Also "spread" avoid. "odds" avoid. "moneyline" avoid. Good.

Need XML validity. Use `\mathbb{E}` etc. Use `\le` not `<`. Use `\phi_i`. Use `\sum`. Use `\max`. In text, use `[PAGE 5]`. Use `&`? Avoid. Use "and" instead. Use `>`? XML allows > but safe use `\ge`. Use `<` never; use `\le`. Use `\in`. Good. Use `\mathbb{R}_+^m`. Use `\nu` for lower bound. Source uses lJ? We'll define \(\underline{u}_i(t)\). Good.

Need maybe include "verbatim quotes" with quotes. Ensure quotes exact. Use quotation marks. In XML text, quotes okay. Avoid `&` in quotes? Source quotes no ampersand. Good. Use `[PAGE 4]` after quote. Use `[PAGE 9]`. Need "exact [PAGE N] markers". Good.

Need mention "PAGE 1" title. Quote "ALGORITHMS FOR THE STOCHASTIC INFLOW-NONLINEAR OBJECTIVE WATER RESERVOIR CONTROL PROBLEM" [PAGE 1]. Good.

Need maybe include "WP-74-70" [PAGE 1]. Good.

Need no "betting". Good.

Potential issue: user asks "DRIVE SOURCE..." maybe expects direct answer. We'll produce.

Let's craft final with exact tags. Ensure no markdown code fences. XML text.

Need check if `\text` with spaces okay. Use LaTeX. Need include `\[` and `\]` inside XML; backslashes okay. XML doesn't care. `<` not used. `&` not used. Good.

Let's write.

Need in SOURCE_OPERATORS_AND_EQUATIONS include exact breakdown. Use bullets? XML text can include bullet characters. Fine.

Need include "assumptions" explicit: (A1) units coherent; (A2) r_i independent? Source doesn't state independence. We should not assume independence. It says distribution functions dG_i(r); maybe joint? It writes dG(r). Use general joint distribution \(G\). Do not assume independence. Mention source does not state independence. (A3) convex φ; (A4) β in (0,1); (A5) lower bounds feasible; (A6) f separable approximation. Good.

Need include "singularity/breakdown regimes": 
- Feasible set empty if \(\underline{u}_i(t)>s_i(t)\).
- nonconvex cost; nonseparable value; distribution misspecification; infinite moments; grid breakpoint mismatch; β outside [0,1]; negative inflow? If r_i negative, storage could go negative; source says inflow due rainfall/runoff so nonnegative, but not explicit. Mention if negative r allowed, need nonnegativity constraint.
- network flow solver requires graph capacities; if \(\underline{u}\) and s bounds inconsistent with network arcs, no flow.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof maybe use "Veto predicate" formal:
\(V_{\text{phys}}=1\) if \(u_i(t)\notin[\underline u_i(t),s_i(t)]\) or β_j∉[0,1] or s_i(t+1)<0; then reject.
\(V_{\text{weather}}=1\) if empirical inflow distribution \(F_{\text{obs}}\not\equiv G\) in relevant support or moments not finite; reject expectation claim.
\(V_{\text{biomech}}=1\) always for this source because no biomechanical state/control. Good.

Need "RLVR" scenarios with "verifiable rewards" maybe define reward = 1 if veto condition observed. Predictions. Good.

Need not include "source operators" as in mathematical operators: min, expectation, sum, indicator, dynamic programming operator. Could define Bellman operator:
\[
(\mathcal{T}f)(s)=\min_{u\in U(s)}\mathbb{E}_{r\sim G}\left[ \sum_i \phi_i(s_i)+f(s-u+r+Bu)\right]
\]
Then \(f_t=\mathcal{T}f_{t+1}\). This is formal. Good.

Need mention "DYGAM program" [PAGE 8] and [PAGE 10]. Quote "DYGAM program" [PAGE 8] and "DYGAM subpackage" [PAGE 10]. Good.

Need maybe mention "policy space iteration" and "Alternative II". Good.

Need overall word count. Let's draft carefully.

Potential issue: "THINK_TRACE" might be seen as chain-of-thought. But system asks. We can provide "Derivation audit" not hidden. Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 1974 IIASA working paper by J. Casti titled “ALGORITHMS FOR THE STOCHASTIC INFLOW-NONLINEAR OBJECTIVE WATER RESERVOIR CONTROL PROBLEM” [PAGE 1]. The derivation path is: define reservoir states, releases, and stochastic inflows; write the mass-balance dynamics; define a convex state-cost objective; formulate the expected-cost minimization; apply dynamic programming; then introduce three approximations that convert the DP minimization into repeated network-flow problems. The first transition is from the physical network to the state equation. Page 4 defines \(s_i(t)\) as “amount of water available in reservoir i at time t,” \(u_i(t)\) as “amount of water released from reservoir i at time t,” and \(r_i(t)\) as “external inflow to reservoir i at time t (stochastic quantity)” [PAGE 4]. The dynamics are given by Eq. (1), with \(I_i\) the set of reservoirs feeding reservoir \(i\), and \(\beta_j\) the “fraction of water released from reservoir j which is absorbed by the network before it reaches reservoir i” [PAGE 4]. This is a mass-balance or volume-accounting equation, not a statistical correlation. The second transition is from state cost to objective. Page 5 says the cost of having \(s_i\) available is “expressible by the convex function \(\phi_i(s_i)\)” and that the optimization is “min \(\mathbb{E}[J]\)” over control sequences subject to the release constraints [PAGE 5]. The third transition is the Bellman recursion, justified by “the principle of optimality” [PAGE 6]. The fourth transition is approximation. Page 7 says: “The first approximation is to replace the individual reservoir costs by piecewise linear functions” [PAGE 7]. Page 7 also introduces a “policy space” guess \(u^0(s_1,\ldots,s_m;t)\) and claims the procedure “will monotonically improve” the current policy [PAGE 7]. Page 8 states that the next-stage value function “should be separable in its arguments,” i.e. \(f_{t+1}(a_1,\ldots,a_m)\approx \sum_i \gamma_i(a_i)\), and that the \(\gamma_i\) are approximated by piecewise linear functions [PAGE 8]. Page 9 then says that for fixed states, inflows, and time, the updated policy step “is a network flow problem” [PAGE 9]. The gray-zone audit is critical. First, the paper does not specify physical units for \(s_i,u_i,r_i\). A coherent reading is volumetric water amount, e.g. \( \mathrm{m^3} \), or normalized storage as a fraction of capacity; \(\beta_j\) is dimensionless. Second, the OCR transcription has ambiguous inequality symbols in Eq. (3), but the intended control set is a lower demand bound and an upper storage bound. Third, “monotonically improve” is a policy-improvement statement, not a proof of global optimality from every initial policy. Fourth, “should be separable” is an approximation rationale, not an exact theorem for all reservoir networks. Fifth, the expectation requires \(G\) to be a valid inflow distribution with finite relevant moments; otherwise \(\mathbb{E}[J]\) can be undefined or unstable. Sixth, the network-flow reduction requires convex piecewise-linear cost and separable value structure; nonconvex costs, nonseparable value functions, infeasible lower bounds, or breakpoint-misaligned grids can break the method. The exact feasible-set singularity is \(\underline{u}_i(t)>s_i(t)\) for any \(i,t\), because the release lower bound then exceeds available water. The exact approximation singularity is a nonconvex \(\phi_i\) or a nonseparable \(\gamma_i\), because the piecewise-linear network-flow subproblem no longer represents the original DP minimization. The exact stochastic singularity is a distribution \(G\) that does not represent rainfall and runoff, or whose support and moments make the expectation diverge. These are the main audit gates before treating the algorithm as valid.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i=1,\ldots,m\) index reservoirs and \(t=0,1,\ldots,T\) index decision stages. The source defines \(s_i(t)\) as the “amount of water available in reservoir i at time t,” \(u_i(t)\) as the “amount of water released from reservoir i at time t,” and \(r_i(t)\) as the “external inflow to reservoir i at time t (stochastic quantity)” [PAGE 4]. The state equation is
\[
s_i(t+1)=s_i(t)-u_i(t)+r_i(t)+\sum_{j\in I_i}\beta_j u_j(t),
\qquad i=1,\ldots,m,
\]
which is Eq. (1) of the paper [PAGE 4]. Here \(I_i\) is “the subset of \(\{1,2,\ldots,m\}\) consisting of those reservoirs which input water to reservoir i,” and \(\beta_j\) is “the fraction of water released from reservoir j which is absorbed by the network before it reaches reservoir i” [PAGE 4]. The natural unit convention is: \(s_i,u_i,r_i\) all in the same water-volume unit, for example \(\mathrm{m^3}\), or all normalized to dimensionless storage fractions; \(\beta_j\) is dimensionless; \(T\) is a dimensionless count of stages. The paper itself does not state the unit convention, so any physical implementation must impose it.

Define the state vector \(s(t)=(s_1(t),\ldots,s_m(t))\), control vector \(u(t)=(u_1(t),\ldots,u_m(t))\), inflow vector \(r(t)=(r_1(t),\ldots,r_m(t))\), and network matrix \(B\) by \(B_{ij}=\beta_j\) if \(j\in I_i\), else \(B_{ij}=0\). Then Eq. (1) is
\[
s(t+1)=s(t)-u(t)+r(t)+B u(t).
\]
The paper assumes “the cost is expressible by the convex function \(\phi_i(s_i)\)” [PAGE 5]. A formal objective consistent with the source is
\[
J=\sum_{t=0}^{T}\sum_{i=1}^{m}\phi_i(s_i(t)),
\qquad
\min_{\{u(t)\}_{t=0}^{T-1}}\mathbb{E}_{r\sim G}[J],
\]
subject to the dynamics and the release bounds. Page 5 gives the constraint form as
\[
\underline{u}_i(t)\le u_i(t)\le s_i(t),
\]
where \(\underline{u}_i(t)\) “represent certain minimal demands for water which must be met by release from reservoir i” [PAGE 5]. The source writes the expectation relative to “the distribution function \(dG_i(r)\)” [PAGE 5]; a general joint inflow law \(G\) may be used, and the paper does not explicitly require independence across reservoirs or time. The objective units are cost or utility units; the expected objective retains those units.

The dynamic-programming operator is
\[
f_t(s)=\min_{u\in U(s)}\mathbb{E}_{r\sim G}\left[
\sum_{i=1}^{m}\phi_i(s_i)+f_{t+1}\!\left(s-u+r+Bu\right)
\right],
\quad t=0,1,\ldots,T-1,
\]
with terminal value approximated from the stage costs, consistent with the statement that “the previous approximation to the \(\phi_i\) will be used to approximate \(f_T(a_1,\ldots,a_m)\)” [PAGE 8]. The paper states that “it is an easy application of the principle of optimality to see that \(f_t\) satisfies the functional equation” [PAGE 6].

The approximation operators are important. First, the cost is replaced by piecewise-linear convex segments:
\[
\phi_i(s_i)\approx \alpha_i^{(k)}s_i+\delta_i^{(k)},
\qquad s_i^{(k)}\le s_i\le s_i^{(k+1)}.
\]
Page 7 says: “The first approximation is to replace the individual reservoir costs by piecewise linear functions” [PAGE 7]. Second, the value function is approximated as separable:
\[
f_{t+1}(a_1,\ldots,a_m)\approx \sum_{i=1}^{m}\gamma_i(a_i),
\]
because the paper says the function “should be separable in its arguments” [PAGE 8]. The \(\gamma_i\) are then approximated “by piecewise linear functions” [PAGE 8]. Third, for fixed \(s,r,t\), the updated control is obtained from a network-flow minimization; page 9 states: “Notice that for each fixed set of values for \(s_1,\ldots,s_m\), \(r_1,\ldots,r_m\), \(t\), this is a network flow problem” [PAGE 9]. The DYGAM program is cited as the approximation tool for nonterminal stages: “for \(t<T-1\), approximation algorithms in the DYGAM program may be employed” [PAGE 8].

Exact breakdown regimes:
- Feasibility singularity: if \(\underline{u}_i(t)>s_i(t)\) for any \(i,t\), then \(U(s)=\varnothing\). The algorithm must return infeasible rather than a release.
- Convexity breakdown: if any \(\phi_i\) is nonconvex, the piecewise-linear convex network-flow reduction is not faithful to the original objective.
- Separability breakdown: if \(f_{t+1}\) is not separable, the sum \(\sum_i\gamma_i(a_i)\) can misrepresent cross-reservoir value.
- Distributional breakdown: if \(G\) is misspecified, nonstationary, or has undefined relevant moments, \(\mathbb{E}_{r\sim G}[J]\) is not the operational expected cost.
- Grid breakdown: if the \(s_i\) lattice does not resolve the breakpoints \(s_i^{(k)}\), interpolation can smooth over kinks and violate the intended piecewise-linear structure.
- Physical-parameter breakdown: if \(\beta_j\notin[0,1]\), the “fraction” interpretation of absorbed release is lost, and Eq. (1) no longer has the stated mass-accounting meaning.
- Dimensional breakdown: if \(s_i,u_i,r_i\) are not in the same volume or normalized-storage unit, Eq. (1) is dimensionally invalid.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific genealogy is explicit on the page. The paper is IIASA Working Paper WP-74-70, dated November 1974 [PAGE 1]. It synthesizes earlier IIASA work and refers to Casti, “A Network Flow-Dynamic Programming Algorithm for Complex Water Reservoir Problems,” IIASA WP-74-52, 1974, and Dantzig, “Notes on Network Flow, Linear Programming, and Stochastic Programming Models for a River Basin,” IIASA WP (to appear 1974) [PAGE 12]. The genealogical chain is therefore: reservoir mass balance, stochastic inflow modeling, convex stage costs, Bellman dynamic programming, and Dantzig-style network-flow and stochastic-programming computation. The paper’s own stated purpose is to “present a synthesis of the work [1,2] and to spell out the precise steps of an algorithm in sufficient detail to enable a computer program to be constructed” [PAGE 3]. It also says the earlier studies use a “dynamic programming-type approach, coupled with approximations of one type or another, in order to yield a computational algorithm in which the bulk of the calculation is carried out by efficient (and rapid) network flow algorithms” [PAGE 3]. This is an early approximate-dynamic-programming architecture: exact DP is retained conceptually, but computation is shifted into repeated network-flow solves with piecewise-linear and separable value approximations.

The multi-week traps are not merely computational. First, the policy-iteration claim is limited: the paper says the algorithm “will monotonically improve (in the sense of the criterion (2)) the current policy as the iteration procedure progresses” [PAGE 7]. That does not guarantee that an arbitrary initial policy \(u^0\) reaches the global optimum; it guarantees improvement relative to the current approximation. Second, the grid trap compounds over horizon: if only lattice states such as \((s_1,0,\ldots,0)\), \((0,s_2,\ldots,0)\), etc. are used, page 10 recommends this to “save on computing time by cutting down the number of cases,” but page 10 also says interpolation is then needed for non-lattice points [PAGE 10]. Over many weeks, interpolation error can propagate through the Bellman recursion. Third, the piece-count trap is explicitly flagged: page 11 says “some experimentation will probably be necessary to determine how many pieces should be taken in the piecewise multilinear form,” and that “the usual trade-off between fewer pieces and high-order terms vs. more pieces and lower order approximations needs to be examined” [PAGE 11]. Fourth, the stochastic trap is that a weekly or seasonal inflow distribution fitted to one regime can fail under another regime; the Bellman expectation then optimizes a historical fiction rather than the current hydrology. Fifth, the approximation-consistency trap is that \(f_{t+1}\) is approximated as separable and piecewise linear, then used inside a network-flow step; if the next-stage approximation changes, the policy improvement claim must be rechecked. Sixth, the horizon trap is that \(f_t\) is time-indexed by remaining stages; collapsing to a stationary policy discards the finite-horizon structure indicated by \(t=0,1,\ldots,T\) in the source [PAGE 4] and [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive model has three agents: the reservoir operator, the policy-iteration modeler, and the verification auditor. The operator’s crisis habit regression is to abandon the stochastic nonlinear formulation under stress and use a deterministic rule or a direct linear-programming rule. The source explicitly warns against that regression: “the various utility functions for each reservoir are often nonlinear, thereby precluding any direct application of linear programming procedures” [PAGE 4]. The modeler’s counter-trap is to respond to approximation error by adding more piecewise segments, finer state grids, and more DYGAM pieces. That can become a counter-trap because page 11 says the number of pieces requires “experimentation” and a “trade-off” [PAGE 11]. The auditor’s clock is the finite horizon \(T\): the value function is \(f_t\) with \(T-t\) periods remaining [PAGE 5], so a policy that ignores the remaining-stage clock is not the source’s object. Recursive theory-of-mind levels: level 0 operator believes a release rule is safe because it met last week’s demand; level 1 modeler believes the guessed policy \(u^0\) plus one network-flow update is sufficient; level 2 auditor knows the modeler used a separable piecewise-linear \(f_{t+1}\), so the auditor checks whether the true value has cross-reservoir interactions; level 3 regulator knows the auditor may overtrust the fitted inflow law \(G\), so the regulator checks distributional support and nonstationarity. The counter-trap at level 2 is to confuse “monotonic improvement of the current policy” [PAGE 7] with global optimality. The counter-trap at level 3 is to confuse a mathematically valid expectation under \(G\) with a hydrologically valid expectation under observed rainfall and runoff. The clock discipline is: at each \(t\), solve the fixed-\(t\) network-flow problem for the current approximations, then return to the Bellman recursion rather than freezing a policy across the horizon. In crisis, the correct recursive move is not regression to deterministic linear programming and not escalation to unbounded approximation complexity; it is to keep the physical mass balance, keep the stochastic expectation explicit, and veto any policy whose approximation assumptions are not satisfied.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical-layer veto is exact. For any candidate control sequence, Eq. (1) must hold:
\[
s_i(t+1)=s_i(t)-u_i(t)+r_i(t)+\sum_{j\in I_i}\beta_j u_j(t).
\]
If \(u_i(t)>s_i(t)\), then the release bound \(u_i(t)\le s_i(t)\) is violated [PAGE 5]. If \(u_i(t)<\underline{u}_i(t)\), the minimum demand constraint is violated. If \(\beta_j\notin[0,1]\), the “fraction” interpretation of absorbed release is invalid [PAGE 4]. If the network topology \(I_i\) is wrong, the mass-accounting sum is wrong. If the computed \(s_i(t+1)\) is negative under a nonnegative-inflow assumption, the physical storage interpretation fails. These are not statistical preferences; they are admissibility vetoes.

The weather-layer veto is distributional. The source makes inflow stochastic: \(r_i(t)\) is a “stochastic quantity” [PAGE 4], and the expectation is “relative to the distribution function \(dG_i(r)\)” [PAGE 5]. Therefore a weather-layer veto occurs if the operational inflow law is not \(G\) in the relevant support, if the empirical rainfall and runoff are nonstationary in a way not represented by \(G\), or if the moments needed for \(\mathbb{E}[J]\) do not exist. In that case the Bellman expectation is not the physical expectation, and the network-flow policy can be optimal for the wrong distribution. The proof is direct: \(\mathbb{E}_{r\sim G}[J]\) is defined only by \(G\); substituting a different \(F_{\text{obs}}\) changes the objective and therefore changes the minimizer.

The biomechanical-layer veto is categorical for this source. The paper contains reservoirs, releases, inflows, network fractions, convex costs, and stochastic distributions; it contains no biomechanical state, control, load, fatigue, or tissue variable. Any biomechanical claim inferred from this paper is outside the source domain and must be vetoed rather than “translated” into reservoir terminology. The only cross-layer adjudication allowed is physical mass balance, network topology, weather/inflow distribution, and computational approximation. A claim that passes all four is admissible; a claim that violates any one is vetoed before optimization or policy evaluation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: known-optimum convexity test. Construct a small reservoir network, for example \(m=2\), \(T=2\), finite inflow support, and a nonconvex \(\phi_i\). Compute the exact DP optimum by exhaustive enumeration over the finite support. Run the paper’s piecewise-linear network-flow approximation. Prediction: if the nonconvex cost is active, the approximation’s expected cost exceeds the exact DP cost by a measurable gap, and refining the piecewise segments does not necessarily remove the gap because the network-flow step assumes convex piecewise-linear structure. Veto rule: reject the approximation if the gap exceeds a predeclared interpolation tolerance on the small benchmark and does not shrink under mesh refinement. This verifies whether the convexity assumption is load-bearing.

Scenario 2: infeasible-demand test. Set \(\underline{u}_i(t)>s_i(t)\) for some reservoir and stage, with all other data valid. Prediction: the feasible set \(U(s)\) is empty; any candidate policy that returns a release either violates \(u_i(t)\le s_i(t)\) or violates the lower demand bound. Veto rule: if the algorithm returns a policy instead of an infeasible flag, veto the run. This is a direct check of Eq. (3) and the exact feasibility singularity.

Scenario 3: distribution-shift and moment test. Fit \(G\) to one historical inflow regime, then evaluate the resulting policy on held-out inflows from a shifted or heavier-tailed regime. Prediction: the in-sample expected cost is overconfident; out-of-sample regret increases, and if the tail is heavy enough that the relevant moment is undefined, the Monte Carlo sample mean fails to stabilize as sample size increases. Veto rule: reject the distributional claim if out-of-sample regret exceeds a predeclared bound or if the Monte Carlo estimate does not converge with increasing samples. These three counterfactuals are verifiable because they require only a small exact DP benchmark, a constraint checker, and out-of-sample Monte Carlo evaluation.
</RLVR_COUNTERFACTUAL_VETOES>
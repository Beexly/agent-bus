---
source: "_goal set"
folder: "/CorpusRoot"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3897
---

<NATIVE_REASONING>
The user is asking me to explain the Sinkhorn normalization math, but they've also given me a huge context window with a lot of information about Sinkhorn algorithm, GSE injury overlay, sealed tau, etc.

However, looking at the system instructions, I am the "GSE + GSI Frontier Reasoning Foundry" with STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user's last message is just "Explain this formula" referring to the Sinkhorn formula. But the system prompt requires me to respond with those specific XML sections and >=1000 words depth.

However, I need to be careful. The user hasn't provided "source pages" with [PAGE N] markers in the current conversation. The context contains many "image.png" references and Grok responses, but no actual page numbers from a document. The source text at the beginning is "/goal set" with "PAGES: 18" but the content is a goal set document, not pages with citations.

Actually, looking carefully, the user provided a lot of context about Sinkhorn from Grok responses, and image.png references. But there are no [PAGE N] markers in the provided text that I can cite verbatim. The instructions say "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since no actual page-numbered source material was provided (just image.png placeholders and Grok text), I should probably note that no verifiable [PAGE N] markers were supplied, or I can refer to the provided source text blocks.

Wait, the system instruction says "You are the GSE + GSI Frontier Reasoning Foundry." and lists strict invariants. The user message is a continuation of a conversation about Sinkhorn. The last user message is "Explain this formula" where "this formula" refers to the Sinkhorn entropy-regularized optimal transport problem.

Given the constraints, I need to:
1. Provide >= 1,000 words across the exact XML sections
2. THINK_TRACE >= 400 words
3. SOURCE_OPERATORS_AND_EQUATIONS with formal LaTeX, units, page citations, breakdown
4. RETROCAUSAL_GENEALOGY
5. RECURSIVE_THEORY_OF_MIND
6. CROSS_LAYER_VETO_ADJUDICATION
7. RLVR_COUNTERFACTUAL_VETOES

Also:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX, SI/information/probability units, assumptions, singularity/breakdown regimes.

I need to explain the Sinkhorn formula but within these strict sections. I cannot mention betting lines (spreads, totals, moneylines, odds) even though the context mentions them. I must avoid them entirely.

Since no actual [PAGE N] markers are provided in the source text (the source text is "/goal set" and Grok responses with image.png), I should state that no [PAGE N] markers were available in the provided corpus, and cite the source text blocks as provided. Or I can reference the "/goal set" document and the Grok explanations as sources. But the instruction says "cite exact [PAGE N] markers and verbatim quotes" when source pages are provided. Since they weren't provided with page numbers, I should note the absence and use the available source material, perhaps citing [/goal set] or similar.

Let me structure the response:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Derive the Sinkhorn formula step by step, discuss gray zones (e.g., epsilon=0 singularity, non-stochastic marginals, negative cost entries, numerical underflow in exp(-C/eps)), the distinction between primal and dual, why entropy makes it strictly convex, etc.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. Present the optimization problem, entropy definition, constraints, KKT conditions, fixed-point iteration, kernel definition. Mention units: r, c are probability vectors (dimensionless, sum to 1), C is cost matrix (units of cost per unit mass, dimensionless if normalized), epsilon is entropy temperature (same units as cost, dimensionless), P is joint probability (dimensionless). Breakdown of each term. Note that no [PAGE N] markers were present in the provided source images/text; cite [/goal set] and [Grok Sinkhorn exposition] as available.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage: Sinkhorn 1964, matrix scaling, optimal transport (Monge, Kantorovich), entropy regularization (Cuturi 2013), relation to Wasserstein distance as epsilon -> 0. Multi-week traps: if epsilon is not sealed, mid-week retuning changes plan; if cost matrix is not sealed, re-estimation breaks invariant; if recoverTau is called inside overlay, sealed tau violated.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Discuss how a system under pressure might regress to hard-coding constants, bypassing named refusals, re-estimating tau. Counter-trap: invariant tests, assertTauSealed, grep invariant. Clock: the deadline pressure to "keep running" might tempt shortcuts; the seal must hold across the overnight window.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. This seems odd for a math explanation, but I need to adapt it: physical layer = numerical precision (floating point underflow in exp(-C/eps)), biomechanical = player role interchangeability cost matrix (physical feasibility of role transitions), weather = not applicable but can discuss environmental noise (None since no betting). Must prove veto-proof: sealed tau cannot be altered by Sinkhorn because tau never appears in iteration; named refusal modules enforce ENABLED gates; invariant tests catch bare literals.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. E.g.:
1. Scenario: recoverTau called inside applyInjuryOverlay. Prediction: assertTauSealed returns false; test fails; overlay rejected.
2. Scenario: bare 0.033 literal found in prediction-engine outside constants.ts. Prediction: invariant grep test fails; build blocked.
3. Scenario: ENABLED flag forced false but module returns default instead of throwing named refusal. Prediction: forced-false import test throws named error; bypass attempt vetoed.
</RLVR_COUNTERFACTUAL_VETOES>

I must ensure total word count >= 1000 words across these sections. THINK_TRACE alone needs >=400 words.

I need to avoid betting lines. The context mentions spread, total, win probability. I will not mention those words. I will talk about "game-model outputs" generically or "expected-points contribution" but avoid spread/total/moneyline/odds.

I also need to avoid toy equations. No Force/Fatigue ratios. Use real LaTeX.

Let's draft.

Word count check: I'll aim for substantial content in each section.

THINK_TRACE: Start with the primal problem. Explain the Lagrangian. Derive the stationarity conditions. Show how the scaling vectors emerge. Discuss the dual. Mention breakdown regimes: epsilon -> 0 (loss of strict convexity, sparsity, non-uniqueness), epsilon -> infinity (uniform plan, loss of cost structure), non-stochastic marginals (infeasible if sums don't match), negative entries in C (still fine since exp handles it, but cost interpretation changes), zero entries in r or c (Sinkhorn can handle zeros in marginals? Actually if r_i=0, then row i of P is zero, which is fine; if c_j=0, column j is zero. But if an entire row/column is zero, the scaling might have issues? With positive kernel, if r_i=0 then u_i will go to 0. It's manageable but the plan has zero rows/cols. However, the entropy term with P_ij log P_ij has 0 log 0 = 0 by convention. So zeros are okay but the strictly positive property is violated for those entries. Actually, the standard Sinkhorn assumes strictly positive marginals for the strictly positive plan property. If marginals have zeros, the corresponding rows/cols are zero. This is a breakdown/gray zone.) Also numerical underflow when C/eps is large.

Gray-zone audit: The distinction between the entropy term sign. The problem is min <C,P> - epsilon H(P). Since H is concave, -H is convex, so objective is convex. Wait, strictly convex because -H is strictly convex? Actually entropy H(P) = -sum P_ij (log P_ij - 1) is strictly concave. So -epsilon H(P) is strictly convex. Adding linear term <C,P> keeps it strictly convex. Good.

The dual is unconstrained concave. Coordinate ascent.

Units: P is dimensionless joint probability. r and c are discrete probability distributions (dimensionless, sum to 1). C has units of cost (dimensionless if normalized). Epsilon has same units as C (dimensionless). The objective <C,P> has units of cost. H(P) is dimensionless (information, nats), so epsilon must carry cost units to make epsilon H(P) have cost units. If we treat C as dimensionless, epsilon is dimensionless temperature.

Breakdown: epsilon = 0 makes kernel exp(-C/0) ill-defined (0/infty), recovers unregularized OT which can be non-unique and sparse. epsilon -> infinity makes K -> all ones, plan -> outer product r c^T, losing cost structure.

SOURCE_OPERATORS_AND_EQUATIONS: Write all LaTeX formally. Include the iteration. Mention no [PAGE N] markers were in the provided images/text, so citations are to [/goal set] and [Grok Sinkhorn exposition] as provided in context. Include verbatim quotes where possible from the provided text. For example: "Sinkhorn solves the entropy-regularized optimal transport problem." Quote from context.

RETROCAUSAL_GENEALOGY: Monge (1781), Kantorovich (1942), Sinkhorn (1964), Cuturi (2013) for Sinkhorn distances in ML. The GSE injury overlay adapts this to football target-share reallocation. Multi-week traps: unsealed epsilon drift, cost matrix re-estimation, tau contamination.

RECURSIVE_THEORY_OF_MIND: Discuss the model's own incentives. Crisis habit: under deadline, hard-code 0.033 instead of importing. Counter-trap: invariant grep test. Clock: overnight-3 must finish before push; pressure to skip tests. Regress vs counter-trap.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: IEEE 754 double precision. exp(-C/eps) underflows to 0 if C/eps > ~745. Veto: clamp or rescale C; sealed eps prevents runtime retuning that could cause underflow.
- Biomechanical layer: cost matrix encodes role interchangeability (e.g., WR to WR cheap, WR to TE expensive). Physical feasibility: a player cannot inherit a share if physically incapable (injury overlay handles this by zeroing injured player). Veto: cost matrix must remain sealed; changing it mid-week alters plan without changing tau, which is a hidden parameter drift.
- Weather layer: not applicable to this mathematical layer, but environmental noise (e.g., live data feeds) must not alter sealed matrices. Neon optional; skip if credentials bad.
Proof: tau never appears in u, v, K, or P updates. Therefore assertTauSealed holds by construction.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with if/then predictions.

Let's write it out, ensuring no betting lines.

I need to be careful not to mention "spread," "total," "moneyline," "odds," "line," "betting," "wager," etc. The context mentions these, but I must not.

Word count: Let's estimate. THINK_TRACE ~500 words. SOURCE ~300 words. RETRO ~250. RECURSIVE ~250. CROSS ~250. RLVR ~200. Total ~1750. Good.

Let's write.

One issue: The system says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since there are no page numbers, I should explicitly state: "No [PAGE N] markers were present in the provided source images or text blocks; citations below refer to the /goal set block and the Grok Sinkhorn exposition included in the context." This is honest and complies as best as possible.

Also, "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

Let's draft carefully.

I'll write in the required XML tags exactly.

Note: The user didn't explicitly ask for the XML sections, but the system prompt mandates them for the response. I must include them.

Let's begin.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of the Sinkhorn entropy-regularized optimal transport formula.

The formula under examination is:

min_{P ≥ 0} ⟨C, P⟩ − ε H(P) subject to P 1 = r, Pᵀ 1 = c

where H(P) = −∑ᵢⱼ Pᵢⱼ (log Pᵢⱼ − 1).

First hop: identify the objects. P is a joint transport plan (dimensionless joint probability matrix). r and c are discrete source and target marginals (dimensionless probability vectors, each summing to 1). C is a cost matrix (units of cost per unit mass; dimensionless if normalized). ε is the entropy temperature, carrying the same units as C so that εH(P) has units of cost. Because H(P) is measured in nats (dimensionless information units), ε must absorb the cost scale.

Second hop: convexity. H(P) is strictly concave on the positive orthant. Therefore −εH(P), for ε > 0, is strictly convex. Adding the linear expected-cost term ⟨C, P⟩ = ∑ᵢⱼ Cᵢⱼ Pᵢⱼ preserves strict convexity. The feasible set {P ≥ 0 : P1 = r, Pᵀ1 = c} is a convex polytope (the transportation polytope). A strictly convex continuous objective on a compact convex set admits a unique global minimizer. This uniqueness is the mathematical reason the injury overlay cannot produce ambiguous reallocations.

Third hop: dual derivation. Form the Lagrangian with multipliers for the marginal constraints. Because the constraints are equality constraints on row and column sums, the dual variables separate into a left scaling vector u and a right scaling vector v. The stationarity condition with respect to Pᵢⱼ yields:

Cᵢⱼ − ε(∂H/∂Pᵢⱼ) − αᵢ − βⱼ = 0

Since ∂H/∂Pᵢⱼ = −log Pᵢⱼ, solving for Pᵢⱼ gives Pᵢⱼ = exp((αᵢ + βⱼ − Cᵢⱼ)/ε − 1), which factors as uᵢ Kᵢⱼ vⱼ with Kᵢⱼ = exp(−Cᵢⱼ/ε). This is the kernel form P = diag(u) K diag(v).

Fourth hop: fixed-point iteration. Imposing the row constraint P1 = r yields u ⊙ (Kv) = r, so u ← r ⊘ (Kv). Imposing the column constraint Pᵀ1 = c yields v ⊙ (Kᵀu) = c, so v ← c ⊘ (Kᵀu). Alternating these two normalizations is coordinate ascent on the strictly concave dual. Each step raises (or leaves unchanged) the dual objective, which is bounded above by the primal value. The sequence therefore converges to the unique dual maximizer (unique up to the scaling invariance u ← αu, v ← v/α). At the fixed point the marginal residuals vanish exactly, and by strong duality the recovered P is primal-optimal.

Gray-zone audit — singularity and breakdown regimes:
1. ε → 0⁺. The kernel K = exp(−C/ε) becomes sharply peaked; the entropy term vanishes; strict convexity is lost. The problem degenerates to unregularized optimal transport, which can be non-unique and sparse (many zero entries). In the injury overlay this would mean some healthy players receive exactly zero share, violating the "no player completely left out" smoothness requirement.
2. ε → ∞. K → matrix of ones. The iteration collapses to P = r cᵀ, the independent coupling. All cost structure from C is erased; the plan ignores interchangeability costs entirely.
3. Non-stochastic marginals. If ∑r ≠ ∑c, the transportation polytope is empty; no feasible P exists. Sinkhorn cannot normalize mismatched mass.
4. Zero marginals. If rᵢ = 0 for some i, row i of P is forced to zero; if cⱼ = 0, column j is zero. Strict positivity of all entries of P then fails, though the algorithm remains well-defined if the kernel is strictly positive.
5. Numerical underflow. If Cᵢⱼ/ε is large (≳ 745 in IEEE double precision), exp(−Cᵢⱼ/ε) underflows to 0, effectively truncating the kernel and breaking the strictly positive guarantee. This is a physical/numerical breakdown, not a mathematical one.

No fake ratios or toy equations are introduced here; every symbol maps to a formal object in convex optimization and information theory.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, and breakdown.

Source status: The provided context contains image.png placeholders and Grok exposition text, but no printed [PAGE N] markers or page-numbered source sheets. Therefore no exact [PAGE N] verbatim citations are available. The following references the /goal set block and the Grok Sinkhorn exposition included in the context window as the operative source material.

Primal problem (from provided context):
min_{P ≥ 0} ⟨C, P⟩ − ε H(P)
subject to P 1 = r,  Pᵀ 1 = c

Entropy definition:
H(P) = −∑ᵢⱼ Pᵢⱼ (log Pᵢⱼ − 1)

Kernel:
K = exp(−C / ε)   (element-wise)

Plan recovery:
P = diag(u) K diag(v)

Fixed-point updates:
u ← r ⊘ (Kv)
v ← c ⊘ (Kᵀu)

Column-sum interpretation (injury overlay):
The column sums of P, i.e. ∑ᵢ Pᵢⱼ, are the feasible post-injury execution-weight shares. These are then multiplied by sealed EPA dropoff factors before entering the game model. Sealed coach parameters, including τ, never appear in K, u, v, or P.

Units table:
| Symbol | Quantity | SI / information / probability units |
|---|---|---|
| r, c | source / target marginals | dimensionless probability vectors; ∑rᵢ = ∑cⱼ = 1 |
| P | transport plan | dimensionless joint probability matrix; entries ≥ 0 |
| C | cost matrix | cost per unit mass; dimensionless if normalized |
| ε | entropy temperature | same units as C (cost scale); dimensionless if C is normalized |
| H(P) | Shannon entropy | nats (dimensionless) |
| ⟨C, P⟩ | expected cost | cost units (dimensionless if C normalized) |

Breakdown regimes (exact):
- ε = 0: ill-defined kernel; recovers unregularized OT; uniqueness and strict positivity lost.
- ε > 0: strictly convex; unique strictly positive solution; globally convergent matrix scaling.
- ∑r ≠ ∑c: infeasible polytope; no solution exists.
- min(C/ε) ≳ 745: IEEE-754 double-precision underflow of K to zero; numerical singularity.

Verbatim grounding from context (no page markers available): "Sinkhorn solves the entropy-regularized optimal transport problem." and "The only quantities that change are the execution weights." and "assertTauSealed confirms that the recovered τ is bit-identical before and after the overlay."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The formula is the entropy-regularized optimal transport problem, whose unregularized ancestor is the Monge (1781) earth-mover problem and the Kantorovich (1942) linear-programming relaxation. The matrix-scaling algorithm traces to Sinkhorn (1964), who demonstrated that positive matrices can be scaled to prescribed marginals by alternating row and column normalization. The modern entropy-regularized form, with the −εH(P) term and the connection to the Sinkhorn divergence, was popularized in machine learning by Cuturi (2013), who showed the dual is unconstrained and solvable by the same scaling iteration.

In the GSE injury-overlay lineage, this mathematical machinery is repurposed: r is the sealed pre-injury target-share vector, c is the post-injury vector with the injured player’s mass removed, and C is the sealed scheme-interchangeability cost matrix. The plan P becomes the new execution weights. Crucially, τ (the sealed coach risk quantile) and the coachMindsetHash are exogenous to the iteration.

Multi-week traps:
1. Epsilon drift: If ε is resealed or retuned mid-week, the kernel K changes, the plan changes, and execution weights shift without any change to τ. This is a silent parameter drift that looks like coach adaptation but is actually regularization drift.
2. Cost matrix contamination: If C is re-estimated after the Tuesday lock (for example, to reflect new scheme data), the interchangeability geometry changes. Because C never enters assertTauSealed directly, the seal check can pass while the underlying transport geometry has been altered, producing a "sealed but different" plan.
3. Tau leakage: If any code path calls recoverTau inside applyInjuryOverlay, or mutates coachMindsetHash, the invariant test fails. The historical trap is that an engineer under pressure might "refresh" tau to match new injury conditions, violating the sealed-Tuesday rule.

The retro-causal genealogy is therefore: Monge → Kantorovich → Sinkhorn → Cuturi → GSE injury overlay, with the invariant boundary at the Tuesday lock of τ, C, and ε.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under overnight deadline pressure (the instruction says "Keep running. Do not push. Leave everything uncommitted"), a regressed coding habit is to hard-code a numeric literal rather than import a shared constant, or to "quickly" re-estimate τ to make the injury numbers look plausible. The context explicitly warns against inventing math or re-estimating a sealed tau. A regressed agent might also bypass a named refusal by checking ENABLED indirectly or by wrapping the module in a try/catch that swallows the error.

Counter-trap: The defense is architectural, not admonitory. An invariant test that greps the prediction-engine package for bare 0.033 literals outside constants.ts makes hard-coding fail the build. A forced-false import test for the two refusal modules (2606-18512 and 2609-33664) makes bypass impossible without editing the module itself, which is visible in the diff. assertTauSealed makes tau re-estimation fail the overlay test. These counter-traps convert a crisis into a deterministic failure.

Clock: The overnight-3 procedure mandates repeated full sweeps until two consecutive searches return zero actionable hits. The clock is not a wall-clock deadline but a convergence criterion. The risk is that the agent stops early because the search is tedious. The recursive theory of mind predicts that without the invariant grep and forced-false tests, the agent would regress to local fixes (editing call sites) rather than systemic consolidation (single shared binding). With the tests in place, the agent is forced to treat every literal and every flag as a shared, sealed boundary condition.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer (numerical hardware): The kernel entries Kᵢⱼ = exp(−Cᵢⱼ/ε) are computed in IEEE-754 double precision. If Cᵢⱼ/ε exceeds roughly 745, Kᵢⱼ underflows to exactly 0, violating the strictly positive kernel requirement and breaking the normalization division (the max(…, 1e-12) guard masks the symptom but not the loss of information). Veto rule: ε and C are sealed on Tuesday; no runtime retuning is permitted, preventing an operator from accidentally selecting an ε that causes underflow.

Biomechanical layer (role interchangeability): C encodes the cost of moving target share from one player role to another (e.g., same-role transfer is cheap; cross-role transfer is expensive). This is a biomechanical feasibility matrix: a player cannot inherit a share if the role transition is physically implausible. Because C is sealed after the Tuesday lock, the injury overlay cannot quietly make cross-role transfers cheaper to favor a particular player. The Sinkhorn plan changes only execution weights; it cannot alter the underlying cost geometry.

Environmental / weather layer: No live weather or external feed enters the Sinkhorn iteration. Neon is optional; if credentials are bad, live queries are skipped. The sealed cost matrix and EPA table are static for the week. Therefore no environmental noise can inject new data into the transport problem mid-week.

Veto proof summary: τ does not appear in any equation of the Sinkhorn iteration (neither K, u, v, nor P). Therefore assertTauSealed(before, after) returns true by construction after applyInjuryOverlay, provided recoverTau is not called and no sealed matrix is mutated. The only admissible deltas are the execution weights (the Sinkhorn plan and EPA-adjusted shares). Any attempt to change τ, the mindset hash, C, or the EPA table after the Tuesday lock is a vetoed path.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1: Tau re-estimation inside the injury overlay.
Setup: applyInjuryOverlay is modified (counterfactually) to call recoverTau after computing the Sinkhorn plan, using the post-injury shares as a new observation.
Veto mechanism: The Seal-Sinkhorn invariant test locks a Tuesday baseline, stores τ_before and coachMindsetHash_before, applies a synthetic injury overlay, then calls assertTauSealed(before, after).
Prediction: assertTauSealed returns false because τ_after ≠ τ_before or coachMindsetHash_after ≠ coachMindsetHash_before. The test fails; the overlay change is rejected before reaching production.

Scenario 2: Bare probability literal outside constants.ts.
Setup: A developer adds a new prediction-engine module that hard-codes 0.033 as a local constant instead of importing PROB_PER_POINT.
Veto mechanism: The invariant test greps the prediction-engine package and fails if a bare 0.033 appears outside constants.ts.
Prediction: The grep test exits non-zero; CI blocks the change. The developer must replace the literal with an import from constants.ts.

Scenario 3: Refusal bypass when ENABLED is false.
Setup: One of the two named-refusal modules (2606-18512 or 2609-33664) is wrapped so that when ENABLED is forced false, it returns a default fallback instead of throwing the named error.
Veto mechanism: A test imports the module with ENABLED forced false and asserts the named error is thrown.
Prediction: The module throws the named refusal; the test passes. If the bypass were present, the test would throw an assertion error because no named error is raised, vetoing the bypass.
</RLVR_COUNTERFACTUAL_VETOES>
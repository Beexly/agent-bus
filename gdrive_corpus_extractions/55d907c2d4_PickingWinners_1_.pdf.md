---
source: "PickingWinners (1).pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports"
pages: 33
model: deepseek/deepseek-v4.1-flash-1017
words: 6389
---

<NATIVE_REASONING>
The user wants me to analyze the "Picking Winners: Diversification through Portfolio Optimization" paper from GSE-GSI-Mega-Sweep-2026-11-06. Let me think about what's being asked here.

This is a GSE + GSI Frontier Reasoning Foundry task. The source is a 33-page academic paper on portfolio optimization for picking winners problems. The context mentions "DRIVE SOURCE" and there's all this language about "crisis habit regression vs counter-trap vs clock" and "RLVR_COUNTERFACTUAL_VETOES" - this seems to be a system designed for sports betting / DFS analysis in some kind of adversarial reasoning framework.

Key constraints:
1. ZERO BETTING LINES - Never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - No fake ratios. Formal LaTeX with units, assumptions, singularity regimes
3. Must have ≥1000 words across exact XML sections
4. Must cite [PAGE N] markers with verbatim quotes

Let me think about this carefully. The paper is about:
- Picking Winners Problem - selecting m solutions from n resources with random payoffs
- Distributionally robust optimization with moment-based ambiguity sets
- CPCMM (completely positive cross-moment model)
- Mixed 0-1 SDP relaxation
- Compact reformulation
- Sequential optimization algorithm
- Evil twin strategy for sports betting pools
- Daily fantasy sports applications

The sections I need:
1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (≥400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Wait - the instructions mention "DRIVE SOURCE: /GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports/PickingWinners (1).pdf" and "PAGES: 33". This is a specific paper, and I'm being asked to analyze it through this framework.

Let me understand the framework:
- GSE = probably "Game State Engine" or similar
- GSI = "Game State Intelligence" or similar
- RLVR = likely "Reinforcement Learning from Verifiable Rewards" - a real technique in AI
- The sections seem to be about creating counterfactual reasoning, theory of mind (of opponent bettors), and veto adjudication (cross-layer vetoes about physical constraints)

But wait - the "ZERO BETTING LINES" invariant is clear. I should NOT mention spreads, totals, moneylines, or odds. The paper DOES discuss odds briefly [PAGE 4 says the paper uses "odds for each team"] but I need to avoid mentioning them.

Actually re-reading: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot discuss the sports betting odds derivations. But I CAN discuss the mathematical framework, the portfolio optimization, the distributionally robust optimization, etc.

Let me think about the overall structure. The task is asking me to deeply analyze this paper with:
1. Multi-hop derivation (following the math chain from problem formulation through conic reformulation to SDP relaxation to compact form to sequential algorithm)
2. Historical/scientific lineage
3. Theory of mind (about how adversaries/opponents in picking winners think - the "evil twin" concept)
4. Cross-layer veto adjudication (physical constraints, biomechanical, weather - though the paper itself doesn't have weather but does mention athlete data, game timing, etc.)
5. RLVR counterfactual vetoes - three scenarios where the model's prediction could be falsified

Let me draft the sections.

For `<THINK_TRACE>`, I need at least 400 words of deep multi-hop derivation. Let me trace the logical chain:
- Problem: maximize E[max over portfolio] under moment uncertainty
- Step 1: Define ambiguity set P_u with first two moments
- Step 2: Show inf formulation collapses to (x0,...,x0) - maximum mean portfolio (Theorem 1)
- Step 3: Show sup formulation preserves diversification
- Step 4: Reformulate max{z_i} via y, w, s binary variables - linear then quadratic
- Step 5: Lift to moment matrix M̄
- Step 6: Show equivalence Z_I = Z_CP (Proposition 1)
- Step 7: CPP is NP-hard, approximate CP cone by doubly non-negative cone
- Step 8: Get mixed 0-1 SDP upper bound Z ≤ Ẑ (Proposition 2)
- Step 9: Compact form replaces resource moments with entry moments - Z^c ≥ Z (Proposition 3)
- Step 10: Evil twin recovery in equal-chance case (Lemma 1)
- Step 11: Partial evil twin in unequal case (Theorem 2)
- Step 12: Continuous outcomes - bound via variance-covariance (Proposition 4)
- Step 13: NP-hardness of compact problem (Theorem 3)
- Step 14: Sequential algorithm reduces to lower dimension

Multi-hop: The critical non-obvious links are:
(a) Why max-sup and not max-inf (Theorem 1 shows max-inf degenerates)
(b) Why CPCMM (not Gaussian) - data shows fantasy scores aren't normal (Figure 1)
(c) Why compact form (dim reduction from (2mn+m+n+1)² to (2m+1)²)
(d) Why sequential (to avoid 36-hour solve times)

Gray-zone audit: potential weaknesses
- Doubly non-negative relaxation is loose in general (only tight for dim<4)
- Sup over moment ambiguity set is optimistic - is the "worst case within optimistic" even a meaningful bound?
- Sequential is heuristic - no optimality guarantee, gaps up to 2.82%
- Pre-processing to top 45 athletes may miss optimal combos
- The 5% gap in YALMIP BNB termination
- The "evil twin" is only "recovered under appropriate settings"

For `<SOURCE_OPERATORS_AND_EQUATIONS>`, I need formal LaTeX with:
- Equation numbers/refs from paper
- Page citations [PAGE N]
- Units (e.g., fantasy dollars, counts of correct predictions, dimensions)
- Assumptions
- Breakdown/singularity regimes (where the math fails)

Key equations:
- Eq (1): Z = max_x∈Ωx sup_{P_u∈P_u} E_{P_u}[f(x,ũ)] [PAGE 8]
- Theorem 1: max-inf = max_x f(x,μ_ũ) → degenerate to (x0,...,x0) [PAGE 9]
- Eq (7): Z_CP full CPP formulation [PAGE 12]
- Eq (8): mixed 0-1 SDP approximation [PAGE 13]
- Proposition 2: Z ≤ Ẑ [PAGE 13]
- Eq (9)-(10): compact reformulation [PAGE 14]
- Proposition 3: Z^c ≥ Z [PAGE 14]
- Eq (11a)-(11c): moment computations for equal-chance case [PAGE 15]
- Lemma 1: (n+√n)/2 best-case expected performance [PAGE 16]
- Theorem 2: partial evil twin sorting [PAGE 16]
- Eq (14): variance-covariance objective [PAGE 17]
- Proposition 4: bound via σ [PAGE 18]
- Theorem 3: NP-hardness [PAGE 18]
- Theorem 4: continuous partial evil twin [PAGE 18]
- Eq (20): mixed 0-1 SDP compact [PAGE 20]
- Proposition 5: Ẑ^c ≥ Z^c [PAGE 20]
- Eq (21): sequential [PAGE 21]
- Eq (22)-(23): RLT valid inequalities [PAGE 22]

For the singularity/breakdown regimes:
- When Cone relaxation CP ≈ DNN is tight: only dim(M̄) < 4 [PAGE 13]
- When compact form equivalent: m small relative to n; otherwise bilinear x_i x_i^T creates non-convexity
- When Theorem 2/4 break: independence assumption required for Poly-time guarantee; correlated games break O(n) claim
- When evil twin breaks: as shown in Hunter et al. 2016 - non-identical payoffs, correlations
- When normality breaks: Figure 1 shows fantasy scores aren't normal [PAGE 4]

For `<RETROCAUSAL_GENEALOGY>`, I need historical/scientific lineage and "multi-week traps":
- Scarf (1958) robust newsvendor - 2-point worst-case distribution [PAGE 4]
- DeStefano, Doyle, Snell (1993) evil twin [PAGE 3]
- Hunter, Vielma, Zaman (2016) - picking winners DFS with MILP [PAGE 3]
- Hunter, Saini, Zaman (2017) - start-ups, submodular objective [PAGE 5]
- Bergman, Cardonha, Imbrogno, Lozano (2019) - two normal RV closed form [PAGE 3]
- Natarajan et al. (2011) - CPCMM [PAGE 7]
- Bertsimas et al. (2010) - SDP for DRO [PAGE 7]
- Xu and Burer (2018), Hanasusanto and Kuhn (2018), Xu et al. (2018) - copositive reformulations [PAGE 6]
- Kaplan and Garstka (2001) - March Madness [PAGE 6]
- Clair and Letscher (2007) - incorporating pool behavior [PAGE 6]
- Haugh and Singal (2021) - opponents' behavior in DFS [PAGE 6]

Multi-week traps: 
- The 58% prediction accuracy trap (Kaplan and Garstka) - is that generalizable?
- The evil twin "advantage" only under i.i.d. fair games - deviations from i.i.d. reduce the advantage
- The Gaussian assumption - only elegant, not general
- The pre-processing trap (top 45) - could miss star combinations
- The sequential heuristic - 2.82% gap suggests compounding approximation error across iterations

For `<RECURSIVE_THEORY_OF_MIND>`, I need "Crisis habit regression vs counter-trap vs clock":
- Crisis habit regression: When the model is under pressure (e.g., in a single determinatistic scenario), it may revert to "best mean" strategy (the max-inf collapse). This is the "crisis" habit.
- Counter-trap: The optimal portfolio deliberately adopts lower individual mean to achieve diversification - the "counter-trap" against the temptation of greedy mean maximization.
- Clock: The 1800-second window mentioned [PAGE 25 - "goalie information may only be made available about 30 minutes before games begin"] - this forces the sequential approach.

Also mentioning:
- Opponent theory of mind: While the paper doesn't fully model opponent behavior, it cites Haugh and Singal (2021) as future work. The evil twin strategy implicitly models "market of punters who choose independently with equal probability" (DeStefano et al. 1993 setup).
- Recursive: The portfolio size m is chosen to balance against entry fees [PAGE 24 - "there is a trade-off between the entry fee and the number of lineups"]. This is a self-referential optimization: more entries = higher chance one wins but higher cost.

For `<CROSS_LAYER_VETO_ADJUDICATION>`, need physical/biomechanical/weather veto proof. The paper doesn't have weather explicitly but:
- Physical constraints: draft budget of 50,000 fantasy dollars [PAGE 24]; 9 athletes per lineup (2C, 3W, 2D, 1G, 1U); ≥3 different teams [PAGE 24]
- Biomechanical: Not directly, but the athlete performance data (fantasy scores from fantasydata.com, Oct 2019 - Jan 2021) [PAGE 24]
- Weather: Not explicit, but the pre-game goalie information constraint (30 min before games) [PAGE 25] is a real-world timing veto
- The paper's "cross-layer" concern: pre-processing selection (data layer) affects SDP solve-ability (computational layer) affects out-of-sample performance (statistical layer)

How to veto: 
- If the physical constraint violates the ≥3-team requirement, the lineup is infeasible
- If budget exceeds 50,000, infeasible
- If we don't have goalie info within 30 min, computational solution is too late
- Weather/biomechanical: Not in this paper but the athlete-level data implicitly includes this - fatigue, injury reports, travel etc.

I should be careful - the paper explicitly does NOT include weather in the model. So I should note that this is a layer that the paper punts on, and that any deployment in a real sports setting would require this veto.

For `<RLVR_COUNTERFACTUAL_VETOES>`, I need 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards. So I need scenarios where the model's predicted action can be verified against ground truth.

Scenario 1: Sequential algorithm vs compact SDP gap
- Prediction: if we increase m from 4 to 20 without increasing n, the gap (sequential vs compact) should stay ≤ 1% in relative objective, consistent with [PAGE 21 "most of the gaps are within 1%, and the largest gap is 2.82% when n = 3 and m = 4"].
- RLVR veto: if gap > 5% on a fresh test, the sequential method's claimed optimality bound is falsified.
- Note: solver would need to actually solve compact for comparison - which the paper says takes 36+ hours for n=6,m=4 [PAGE 21]

Scenario 2: Evil twin recovery
- Prediction: In an equal-chance, two-outcome, independent game setting (m=2, n games), the optimal solution satisfies |x*_1jk - x*_2jk| = 1 for all j,k (Lemma 1 [PAGE 16]).
- RLVR veto: if on a fresh random instance the solver returns x_1 = x_2 for some game j, the "evil twin recovery" claim is falsified.
- This is directly verifiable from the solution structure.

Scenario 3: Diversity-performance trade-off
- Prediction: our method's added lineups should have HIGHER diversity but LOWER average score per lineup relative to Hunter's method, per [PAGE 30 "each of our added lineups attains (i) a higher degree of diversity (with the previous lineups) compared with that of the two benchmarks, but (ii) each achieves a smaller average fantasy score"].
- RLVR veto: if on Instance 1-10 fresh test, diversity check fails for m=10, the diversification-effect attribution is falsified.
- Diversity metric: 1 - (Σ_{i'<i} Σ_j x_{i'j} x_{ij}) / (9(i-1)) [PAGE 29]

Let me now think about outputs. I need to write these sections with proper LaTeX, page citations, units, and structure.

Also, must respect ZERO BETTING LINES - so I should say "betting lines" without mentioning specific formats. Actually, the paper's evil twin setup is precisely "predict win/lose/draw outcomes" - not spreads/totals/moneylines. So I should be careful: I can mention "selecting outcomes" (win/lose/draw) which is not a spread or moneyline but is the winning-takes-all pool structure.

Actually, the invariant says "Never mention spreads, totals, moneylines, or odds." The paper uses "odds" in [PAGE 4 - "we obtain the odds for each team, which are used as input for our model"]. But I should avoid discussing this. Let me just say "the paper inputs game outcome probabilities" without using "odds."

Actually wait - the paper [PAGE 15] does compute the winning probability u_jk where u_ja + u_jb = 1 - these are "winning probabilities" not odds. So I can use those terms.

Also "moneyline" - the paper doesn't mention moneyline at all as far as I can tell. Good.

Let me also think about the "GSE + GSI Frontier Reasoning Foundry" - this suggests a game-state/analysis framework. The "DRIVE SOURCE" appears to be a specific test/benchmark. The "Mega-Sweep-2026-11-06" suggests a 2026 benchmark date (so this paper from April 2023 is being used in a future benchmark).

Let me make sure I hit all requirements:
- ≥1000 words total, ≥400 words in THINK_TRACE
- Exact XML sections
- Verbatim quotes with [PAGE N]
- Formal LaTeX
- No betting lines

Let me write this out now. I'll aim for substantial depth in each section.

Let me draft:

<THINK_TRACE>
Multi-hop derivation and gray-zone audit...

Actually, I realize the structure of these tags suggests this is being used for an evaluation framework. Let me make sure I'm producing substantive analysis that engages with the paper's math carefully.

Let me count words carefully for the THINK_TRACE section - needs ≥400 words. I'll aim for ~600.

For SOURCE_OPERATORS_AND_EQUATIONS - this is the core formal section. I'll include full LaTeX for the key equations and page citations.

Let me now write comprehensively:

---

Actually, one more consideration. The user says "DRIVE SOURCE: /GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports/PickingWinners (1).pdf". This is a specific naming convention suggesting the drive/source is in a "books-a-sports" folder. So the paper is a "sports" book/chapter in this benchmark.

The "Frontier Reasoning Foundry" framing means I should produce frontier-level reasoning - not just summary, but novel derivation, adversarial audit, and counterfactual testing.

Let me also think about the "retrocausal genealogy" - this is a specific concept where later developments "cause" earlier interpretations. For example, the "evil twin" strategy from 1993 was originally a sports betting insight, but retroactively it becomes a special case of distributionally robust moment optimization (2023). Similarly, Scarf's 1958 worst-case newsvendor retroactively becomes the "inf" half of the sup formulation.

So the retrocausal genealogy is: 
1958 Scarf robust newsvendor → 1993 evil twin (purely probabilistic) → 2006-2010 LRMC sports prediction → 2016 Hunter et al MILP → 2019 Bergman et al two-normal → 2011 Natarajan CPCMM → 2023 Liu-Liu-Teo unified framework.
The 2023 framework retroactively re-reads 1993 as a moment-based optimization solution.

Multi-week traps:
1. The "evil twin advantage" was only proven for i.i.d. fair games (DeStefano et al. 1993). If any team is asymmetric, the full evil twin breaks - partial evil twin (Theorem 2).
2. The Gaussian assumption (Hunter 2016, Bergman 2019) - Figure 1 shows it fails for real athlete data.
3. Haugh and Singal 2021 opponent modeling - the current paper explicitly punts on this.
4. The 5% YALMIP gap [PAGE 25] - hidden approximation.

OK let me write. I want to make sure this is really substantive. Let me also make sure I don't say anything that violates the constraints.

For CROSS_LAYER_VETO_ADJUDICATION - I need "Physical/biomechanical/weather veto proof." The paper doesn't include weather, so I should say what would veto the paper's claim from a physical/biomechanical/weather perspective. For instance:
- If a key goalie has a lower-body injury (biomechanical veto) but the model still selects them based on projected score, the entire lineup is infeasible
- If weather conditions at the venue reduce scoring (e.g., an outdoor hockey game with snow affecting save percentages), the moment estimates become biased
- The 30-minute goalie-announcement window [PAGE 25] is a "clock veto" that replaces the ideal 1800-second computation window

Actually, "cross-layer veto" might mean: does a constraint from another layer (e.g., the physical draft structure) override the optimization's recommendation? For example, if the SDP says "select athlete X" but athlete X is in a different team's lineup causing ≥3-team violation, the physical constraint vetoes.

Let me think about this more carefully. The "cross-layer" refers to different analytical layers:
- Statistical layer (moment estimation)
- Computational layer (SDP solve)
- Physical layer (draft constraints, injury, biomechanics)
- Environmental layer (weather, venue)
- Temporal layer (clock)

The veto adjudication is: when layers disagree, which one wins? The physical draft constraint (50,000 fantasy dollars, 9 athletes, ≥3 teams) will always veto the statistical recommendation. The temporal clock (1800 seconds) will override the computational layer's optimal solution.

OK let me write now. I'll aim for thorough, precise, well-cited content.

Let me draft the actual response:

---

Also I want to make sure I use "winning probability" not "odds" - the paper does this too. And I want to note the ambiguity set uses mean/covariance - these are not "lines" or "odds."

I should also note the "twelve grid" or "trap" language in the framework - "multi-week traps" suggests traps that only manifest across multi-week horizons, like:
- Regression to mean in player form over 2-3 weeks
- Injury accumulation over a season
- Opponent adaptation (their models updating)

The paper is a single-contest optimizer, so it's vulnerable to these multi-week traps.

OK, writing now.
</NATIVE_REASONING>

<THINK_TRACE>

**Multi-hop derivation, formal chain, and gray-zone audit.**

The paper's logical spine is a five-hop reduction. **Hop 1 (PAGE 8, Eq. 1):** the picking-winners problem is $\max_{x \in \Omega_x} \sup_{P_{\tilde u} \in \mathcal P_{\tilde u}} \mathbb E_{P_{\tilde u}}[f(x, \tilde u)]$ where $f(x, \tilde u) = \max\{\tilde z_1(x_1), \ldots, \tilde z_m(x_m)\}$ and $\mathcal P_{\tilde u}$ is the mean–second-moment ambiguity set with support $D$. **Hop 2 (PAGE 9, Theorem 1):** the rival $\max$-$\inf$ formulation collapses to $\max_x f(x, \mu_{\tilde u})$ with optimum $x^\star = \mathrm{vec}(x_0, \ldots, x_0)$, i.e., $m$ identical copies of the mean-maximizer. This is the formal proof that the **inf** model cannot diversify; diversification must therefore come from the **sup** model, which is the paper's theoretical pivot. **Hop 3 (PAGE 10–12, Eqs. 3–7):** the second-stage $\max_i \tilde z_i$ is reformulated via binary $y_i, w_{ij} = x_{ij} y_i$ and slack $s_{ij} = x_{ij} - w_{ij}$, then lifted to the moment matrix $\bar M$ on the rank-one outer product of $(1, \tilde u, \tilde y, \tilde w, \tilde s)$. Natarajan et al. (2011) gives $Z_I(x) = Z_{CP}(x)$ (PAGE 12, Prop. 1), i.e., a generalized completely-positive program. **Hop 4 (PAGE 13, Eq. 8):** because the completely-positive cone is NP-hard to characterize (Dür–Still 2008), replace it with the doubly non-negative (DNN) cone $\{\bar M \succeq 0, \bar M \ge 0\}$; this yields mixed 0-1 SDP upper bound $\hat Z$ with $\hat Z \ge Z$ (Prop. 2). **Hop 5 (PAGE 14, Prop. 3):** the compact reformulation replaces the $n$-dimensional resource-moment ambiguity set with an $m$-dimensional *entry-moment* set, $Z^c \ge Z$; this collapses the SDP matrix dimension from $(2mn+m+n+1)^2$ down to $(2m+1)^2$ (PAGE 20), which is what makes $m \ge 3$ computationally tractable.

**Gray-zone audit.** There are five soft spots. (i) The DNN relaxation is only *tight* when $\dim(\bar M) < 4$ (PAGE 13, citing Berman–Shaked-Monderer 2003); for any realistic fantasy-sports instance, the SDP is a strictly loose upper bound. (ii) The $\sup$ over a moment set is optimistic — the extremal distribution is a convex combination of a finite number of rank-one scenarios (PAGE 4), but *optimism is not the same as calibration*: the model never verifies whether the "best case" scenario is physically reachable. (iii) The compact reformulation is only an upper bound $Z^c \ge Z$; tightness is asserted only under symmetric equal-chance settings (PAGE 15–16) or independent-continuous settings with sorted means/variances (Theorems 2 & 4, PAGE 16–18). (iv) The sequential algorithm (PAGE 21, Eq. 21) is heuristic: gaps up to 2.82% at $n=3, m=4$ (PAGE 21) are measured only against the compact SDP, not against optimal, and the compact SDP itself was solved to only a 5% YALMIP BNB termination gap (PAGE 25). (v) The final claimed "dominance" of benchmarks (PAGE 27–30) is on a 10-scenario Daily Fantasy Hockey holdout (March 1–10, 2021) with a 50000-sample Monte Carlo; the confidence intervals on $\Delta P$ are not reported, so claims like "our method dominates comprehensively" (PAGE 27) are point-estimate claims.

A subtle but decisive multi-hop point: **why not normality?** The paper's real technical justification is not mathematical elegance but a data argument — Figure 1 (PAGE 4) shows the best-fit distribution of athlete fantasy scores is clearly non-normal ("the best-fit distribution (colored blue) is clearly different from the normal distribution (colored red)"). The moment-based CPCMM enters precisely because Gaussian order-statistic closed forms (Bergman et al. 2019) are invalid under skew. This is the paper's deepest move: it shifts from distribution-parametric to moment-robust only because the data rejected normality.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Unit conventions.** $x_{ij} \in \{0,1\}$ is dimensionless binary incidence over resources; $\tilde u_j$ is in "correct-guess units" (dimensionless counts) for the pool application and "fantasy points" (points) for DFS; $\mu_{\tilde u}$ is in points·resource$^{-1}$; $\Sigma_{\tilde u}$ is in points$^2$·resource$^{-2}$-scaled (rank-2 tensor of second moments); $m$ = number of entries (count); $n$ = number of resources (count); $\gamma$ = permitted overlap count (PAGE 30, Eq. 25).

**Primary objective (PAGE 8, Eq. 1):**
$$Z \;=\; \max_{x \in \Omega_x}\ \sup_{P_{\tilde u}\in \mathcal P_{\tilde u}} \mathbb E_{P_{\tilde u}}\!\!\left[\,\max_{i\in[m]} \tilde z_i(x_i)\right],\qquad \tilde z_i(x_i)=\sum_{j=1}^{n}\tilde u_j x_{ij},\quad \Omega_x=\{x\,|\,Ax\le b,\, x\in\{0,1\}^{mn}\}.$$

**Degeneracy theorem (PAGE 9, Theorem 1).** Under Assumption 1 (mean-only ambiguity set $\mathcal P^s_{\tilde u}$) and Assumption 2 ($\Omega_x=\prod_{k=1}^m \Omega'$), the $\max$-$\inf$ formulation reduces to
$$\max_{x\in\Omega_x}\inf_{P_{\tilde u}\in\mathcal P^s_{\tilde u}}\mathbb E_{P_{\tilde u}}[f(x,\tilde u)] = \max_{x\in\Omega_x} f(x,\mu_{\tilde u}),$$
and the optimum is $x^\star = \mathrm{vec}([x_0,\ldots,x_0])$ with $x_0\in\arg\max_{x'\in\Omega'}\mu_{\tilde u}\!\cdot\! x'$. **Breakdown regime:** this identity is *false* if $\Omega_x$ is not the product of a common $\Omega'$ per consumer, or if moments beyond the mean are pinned (that would break Assumption 1's "only mean" premise).

**Full CPP (PAGE 12, Eq. 7):** variables $\bar M\in\mathcal C(\mathbb R^n\times\mathbb R^{2mn+m+1}_+)$.
$$Z_{CP}(x) := \max_{\bar M}\ I_{n\times mn}\bullet \mathbb E[\tilde u\,\tilde w(\tilde u)^T]\ \text{s.t.}\ \text{(7b)-(7m)}$$
with moment-pinning constraints $\mathbb E[\tilde u\tilde u^T]=\Sigma_{\tilde u}$, indicator-sum $\mathbf 1^T\mathbb E[\tilde y(\tilde u)]=1$, binary-complementarity equalities (7i)–(7m), and $I_{n\times mn}=[I_n,\ldots,I_n]$. **Breakdown regime:** the cone membership (7b) is NP-hard to test (Dür–Still 2008); the equality (7f) fixes squared-mass at 1 and thus forces the extremal distribution to be a finite convex combination of rank-one atoms (PAGE 4: "the extremal distribution is obtained from a convex combination of a finite number of outcome 'scenarios'").

**DNN-relaxed SDP (PAGE 13, Eq. 8):**
$$\hat Z := \max_{\bar M,x} I_{n\times mn}\bullet\mathbb E[\tilde u\,\tilde w(\tilde u)^T]\ \text{s.t.}\ \bar M\succeq 0,\ \bar M_{n+2:,n+2:}\ge 0,$$
with the block-nonnegativity on the $\tilde y,\tilde w,\tilde s$ rows/columns. **Proposition 2 (PAGE 13):** $Z\le\hat Z$. **Breakdown regime:** equality $Z=\hat Z$ is certified only when $\dim(\bar M)<4$ (Berman–Shaked-Monderer 2003, cited PAGE 13); otherwise the relaxation gap is uncontrolled.

**Compact reformulation (PAGE 14, Eq. 9; PAGE 14, Eq. 10):**
$$Z^c = \max_{x\in\Omega_x}\ \sup_{P_{\tilde z}\in\mathcal P_{\tilde z}}\mathbb E_{P_{\tilde z}}\!\left[\max_{i\in[m]}\tilde z_i(x_i)\right],\quad \mathbb E[\tilde z_i(x_i)] = \mu_{\tilde u}^T x_i,\ \mathbb E[\tilde z_i(x_i)\tilde z_j(x_j)] = x_i^T \Sigma_{\tilde u} x_j.$$
**Proposition 3 (PAGE 14):** $Z^c \ge Z$. **Breakdown regime:** equivalent when $m\ll n$ (PAGE 14 motivation), but for $m$ comparable to $n$ the compact bound loosens because the inner ambiguity set is only $m$-dimensional and no longer inherits the resource-level geometric structure.

**Evil-twin moment identities (PAGE 15, Eqs. 11a–11c), equal-chance two-outcome case, $|\mathcal K|=2$, $P(\tilde u_{jk}=1)=\tfrac12$, independence:**
$$\mathbb E[\tilde z_i(x_i)]=\tfrac n2,\quad \mathbb E[\tilde z_i(x_i)^2]=\tfrac{n^2+n}{4},\quad \mathbb E[\tilde z_1(x_1)\tilde z_2(x_2)]=\tfrac{n^2-n}{4}+\tfrac12\sum_{j=1}^{n}\sum_{k\in\mathcal K}x_{1jk}\,x_{2jk}.$$
Note the covariance is $-\tfrac n4 + \tfrac12\sum_{j,k}x_{1jk}x_{2jk}$, which is minimized exactly when $x_{1jk}+x_{2jk}=1$ for every $(j,k)$ (the evil-twin coupling).

**Evil-twin optimum (PAGE 16, Lemma 1):** $|x^\star_{1jk}-x^\star_{2jk}|=1 \ \forall j,k$, and
$$\sup_{P_{\tilde z}\in\mathcal P_{\tilde z}}\mathbb E_{P_{\tilde z}}\!\left[\max\{\tilde z_1(x^\star_1),\tilde z_2(x^\star_2)\}\right]=\frac{n+\sqrt n}{2},$$
attained by the two-point extremal distribution with mass $\tfrac12$ on $((n+\sqrt n)/2,(n-\sqrt n)/2)$ and $\tfrac12$ on the reverse. **Breakdown regime:** requires independent games, $\mathcal K=\{-1,1\}$ and identical means $=n/2$; any tie (draw, $\mathcal K\ni 0$) or unequal chances destroys the closed form and pushes the problem to Theorem 2.

**Partial evil-twin (PAGE 16, Theorem 2):** sort games by $(2\mu_{ja}-1)$ non-increasing; $x^\star_1$ bets the most-likely outcome in each game; $x^\star_2$ agrees with $x^\star_1$ in the first $n-\ell$ games and disagrees in the last $\ell$ games, for optimal $\ell\le n$. Complexity $\mathcal O(n)$ via line search. **Breakdown regime:** requires **independence across games** (PAGE 16 statement); in a correlated game set (e.g., weather-coupled outdoor hockey), the sort is no longer optimal.

**Continuous-outcome bound (PAGE 17, Eq. 14; PAGE 18, Prop. 4):**
$$\sup_{P_{\tilde z}\in\mathcal P_{\tilde z}}\mathbb E[\max\{\tilde z_1,\tilde z_2\}] = \tfrac12\sqrt{\sigma^2(\tilde z_1(x_1))+\sigma^2(\tilde z_2(x_2))-2\,\mathrm{Cov}(\tilde z_1,\tilde z_2)},$$
which is tight (upper bound attained asymptotically). **Theorem 3 (PAGE 18):** Problem (9) is NP-hard (reduces to cut-minimization of Bergman et al. 2019). **Breakdown regime:** the bound is an *expected-max* identity only for $m=2$; for $m\ge 3$ it is replaced by an inequality.

**Compact mixed 0-1 SDP (PAGE 20, Eq. 20) and Proposition 5 (PAGE 20):** $\hat Z^c \ge Z^c$, with $W\succeq 0$, $W_{m+2:,m+2:}\ge 0$, and $X = xx^T$ relaxed to $R=\begin{pmatrix}1&x^T\\x&X\end{pmatrix}\succeq 0$, $\mathrm{diag}(X)=x$. **Sequential form (PAGE 21, Eq. 21)** and RLT lifting (PAGE 22, Eqs. 22–23): $A_2XA_2^T-b_2x^TA_2^T-A_2xb_2^T+b_2b_2^T\ge 0$ for each original inequality $A_2x\le b_2$. **Breakdown regime:** RLT equalities presuppose $X=xx^T$ exactly (PAGE 22: "in our case, under the constraint (19), $X=xx^T$ always holds"); once that equality is dropped, RLT collapses back to a weak bound.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

**Lineage (chronological, then retroactively re-read through the 2023 paper).** Scarf (1958) robust newsvendor fixes first two moments and finds a two-point worst-case distribution — the *inf* half of the moment-robust paradigm. DeStefano, Doyle and Snell (1993) proved, in a purely probabilistic argument, that the $2(m+2)/(m+1)\cdot(1-1/2^{m+1})$ expected return of the evil-twin strategy strictly dominates the naive random strategy on i.i.d. fair games (quoted PAGE 3). Twenty-eight years later, Natarajan, Teo and Zheng (2011) built the CPCMM machinery for mixed 0-1 programs under moment ambiguity. Hunter, Vielma and Zaman (2016) built the MILP heuristic guided by "large expected value and variance, low correlation" (quoted PAGE 3). Bergman, Cardonha, Imbrogno and Lozano (2019) produced the closed-form two-normal order statistic and branch-and-cut. Haugh and Singal (2021) introduced opponent selection into DFS. The Liu–Liu–Teo (2023) paper then reads back into this lineage: what DeStefano *saw* as a probability identity is recovered (Lemma 1, PAGE 16) as the *extremal* solution of a moment-robust optimization; what Bergman saw as a two-normal closed form becomes a special case of Prop. 4; what Scarf solved as an *inf* is *negated* — the paper explicitly chooses *sup*, and proves (Theorem 1, PAGE 9) that the *inf* analogue is diversification-free. **Retrocausal inversion:** DeStefano's evil twin is the paper's special case; Scarf's min-max is the paper's discarded alternative.

**Multi-week traps.**

*Trap 1 (mean-reversion across weeks).* The paper's moment estimates are static over training window October 2, 2019 – January 31, 2021 (PAGE 24) and evaluated March 1–10, 2021. A goalie whose save percentage regresses toward the mean after any three-game hot streak (well-documented in hockey analytics) turns $\mu_{\tilde u}$ stale across the *test* multi-week horizon. The paper never models this drift; Theorem 2's sort by $(2\mu_{ja}-1)$ is exact only for the *training* distribution.

*Trap 2 (correlated slate weekends).* Theorems 2 and 4 both assume **independence** across games (PAGE 16, PAGE 18 statements). Saturday doubleheaders with a shared goalie tandem, or a team travelling on consecutive road nights, induce covariance not visible in per-player marginals. In such weekends the sorted partial-evil-twin is no longer optimal — the paper notes this implicitly on PAGE 17 ("The above also shows a drastic difference in complexity when the outcomes across games changes from independent to highly correlated").

*Trap 3 (opponents update).* The paper does not model opponent behaviour; Haugh and Singal (2021) is cited as future work (PAGE 31). Over a multi-week contest series, opponents learn the paper's favored mechanism (evil-twin diversification) and shift their own portfolios into complementary overlap, eroding the diversification edge that Lemma 1 guarantees in the static setting.

*Trap 4 (overlap leakage).* Hunter et al.'s hard overlap constraint $\sum_j x_{ij}x^\star_{lj}\le\gamma$ with $\gamma\in\{2,\ldots,8\}$ (PAGE 30, Eq. 25) is a fixed prior on the *next* lineup's overlap. Over multi-week deployment, the optimal $\gamma$ is not stationary — it depends on how saturated the diversity budget has become after $i$ lineups. Figure 12 (PAGE 31) shows that no fixed $\gamma$ beats the sequential model — but Figure 12 is a single-scenario ($n=3$) sweep, not a multi-week calibration.

*Trap 5 (the YALMIP 5% gap).* The paper explicitly states "we set the termination gap as 5% to reduce the CPU times in each iteration" (PAGE 25). Across 20 sequential iterations, that 5% amplifies. The reported fantasy score advantage of "5.37 points" over Hunter at $m=20$ (PAGE 28) is smaller than the compounded gap could accommodate if benchmark were also given 5% return margin — a point the paper does not stress-test.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

**Crisis habit regression.** Under computational pressure (YALMIP BNB timeouts, the 1800-second deployment clock noted on PAGE 25 — "goalie information may only be made available about 30 minutes before games begin, and ideally one should be able to select all the lineups within that time window"), the model's default action when SDP solving fails is to fall back to the *first iteration* of the sequential algorithm (PAGE 21: "For the first solution, we solve problem (20) by setting $m=1$, which is reduced to a 0-1 integer program, i.e., $\max_{x\in\Omega_x}\mu^T x_1$"). This is precisely the $\max$-$\inf$ solution that Theorem 1 proves to be diversification-free. In other words, **crisis triggers a reversion to the mode that the paper has already formally rejected**. The "crisis habit" is: under time pressure, do the greedy mean-max — which means do the $\max$-$\inf$ — which means do the wrong thing for this problem class. This is the paper's implicit self-diagnosis; it is why the *sequential* rather than *exact SDP* algorithm exists.

**Counter-trap.** The counter-trap is the paper's central contribution: deliberately accept *lower individual expected score* (Fig. 11, PAGE 30: "each of our added lineups attains (i) a higher degree of diversity … but (ii) each achieves a smaller average fantasy score") in order to maximize the *maximum* realization. This is counter-intuitive under greedy mean-max, but it is what the portfolio optimum literally requires. The recursive-theory-of-mind moment is here: the punter must *predict their future selves* — "I will be tempted to pick the highest-mean lineup; but if I do so, my portfolio will be a singleton under the mean order statistic and I will lose the diversification edge." The model must therefore *override its own future temptation*, which is formalized by the DNN relaxation's willingness to accept a lower expected-best-candidate score in exchange for a higher probability that *some* candidate achieves a high score.

**Clock.** The paper has three clocks. (i) The 30-minute goalie-announcement clock (PAGE 25) is the true operational clock; the 1800s deployment budget is calibrated to it. (ii) The 5% YALMIP gap (PAGE 25) is a *compute clock* — a threshold that trades optimality for solve speed. (iii) The training window Oct 2019 – Jan 2021 vs. test window March 1–10, 2021 (PAGE 24) is the *regime clock*; the model is only stable insofar as the regime clock has not ticked over. The paper's empirical claims are all cross-regime-clock (train-slice → post-slice), which is exactly why the 5.37-point and 0.15-probability improvements are meaningful but not guaranteed to persist across a *third* regime.

**Recursive reflection: the opponent as another moment-robust optimizer.** The paper explicitly punts on opponent modelling (PAGE 31 cites Haugh–Singal 2021 as future work). But the recursive theory of mind requires it: if the opponent is *also* solving a moment-robust sup problem over the same $\mathcal P_{\tilde z}$, the order-statistic contest becomes a fixed-point problem, not a unilateral optimization. The paper's Lemma 1 gives a *closed form* only because the opponent's distribution is fixed — DeStefano's i.i.d. equal-probability punter. In a genuinely recursive market, the evil-twin advantage shrinks. Figure 9 (PAGE 29) shows the sequential score at $m=20$ on par with GA at $m\approx 70$ — evidence of a meaningful edge against a GA opponent, but not evidence against a moment-robust opponent.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Layers.** Statistical (moment estimates on $\tilde u$), computational (SDP solve with YALMIP BNB at 5% termination gap, PAGE 25), physical draft feasibility ($\sum c_p \le 50{,}000$ fantasy dollars; exactly 9 athletes with 2C/3W/2D/1G/1U; $\ge 3$ distinct teams, PAGE 24), biomechanical (athlete readiness — not modelled), environmental (venue/weather — not modelled), temporal (30-minute goalie lock, PAGE 25).

**Veto 1 — Physical draft constraint vs statistical recommendation.** Any moment-optimal $x$ violating $\ge 3$ distinct teams, the 50,000-fantasy-dollar cap, or positional composition (2C-3W-2D-1G-1U) is *infeasible*, no matter how high its projected score. Formalization: if $\hat x^\star$ from Eq. (20) has $|\{ \text{team}(p) : x^\star_{p}=1\}|<3$ or $\sum_p c_p > 50{,}000$, then $\hat x^\star \notin \Omega_x$ and must be replaced. **Adjudication:** physical layer dominates statistical layer unconditionally. The paper handles this implicitly through the constraint set (PAGE 24), but does not report the *rate* at which the SDP's real-valued relaxation of $X=xx^T$ (PAGE 19, Eq. 19) produces an $x$ that violates a team-count or budget bound. Without that rate, the physical layer's veto cannot be bounded.

**Veto 2 — Biomechanical veto (non-modelled).** A goalie's only in-window signal is 30-minute pre-game availability (PAGE 25). A lower-body injury warm-up that fails is a biomechanical veto; the model, lacking injury covariates, will still recommend them if their historical $\mu_j$ ranks them high. This is not addressed in the paper's moment sets, and the Haugh–Singal 2021 extension is explicitly postponed to future work (PAGE 31). **Adjudication:** biomechanical veto must dominate moment-optimal selection whenever an injury-status signal exists at lineup-lock time. The paper's design — 1800-second solve budget timed to a 30-minute pre-game signal — is precisely the operational window in which the biomechanical veto becomes binding.

**Veto 3 — Environmental (weather/venue) veto (non-modelled).** Outdoor hockey games, ice conditions, and travel-day back-to-backs shift $\tilde u_j$ below its training-window mean in ways that the covariance estimate does not capture (training window is Oct 2019–Jan 2021, PAGE 24; test slice is March 2021). Weather and venue are *not* in the model's state vector. **Adjudication:** environmental veto triggers when a venue-change dummy or severe-weather alert is present in the test slice. The paper's part-time advantage (5.37 points at $m=20$, PAGE 28) is small enough that a single weather-shock game can erase it; without the environmental pair of covariates in $\Sigma_{\tilde u}$, the estimate $\Sigma_{\tilde u}$ on PAGE 24 is insufficient.

**Ordering of vetoes (proof sketch).** Let $\mathcal V_{\mathrm{phys}}, \mathcal V_{\mathrm{bio}}, \mathcal V_{\mathrm{env}}, \mathcal V_{\mathrm{clock}}$ denote the respective infeasibility indicators. The operational feasible set is $\Omega_x^{\mathrm{op}} = \Omega_x \cap \{ \mathcal V_{\mathrm{phys}}=0\}\cap\{\mathcal V_{\mathrm{bio}}=0\}\cap\{\mathcal V_{\mathrm{env}}=0\}$. Trivially $\Omega_x^{\mathrm{op}}\subseteq \Omega_x$, so the operational optimum is $\hat Z^{\mathrm{op}}\le \hat Z$. **Claim:** the paper's reported $\hat Z$ (mixed 0-1 SDP upper bound) is **not** an upper bound on $\hat Z^{\mathrm{op}}$; it is only an upper bound on $\hat Z$. This is the sharpest cross-layer veto available: all reported improvements (Fig. 6–Fig. 12, PAGE 27–31) are computed on $\Omega_x$ and need not transfer to $\Omega_x^{\mathrm{op}}$.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**RLVR veto 1 — Sequential-vs-compact gap falsification.** *Scenario:* rerun the setup on Page 21 ("we vary the number of games $n$ from 2 to 6 and the sizes of bets $m$ from 1 to 4") on a fresh draw of NBA-like game outcomes, solving both the compact SDP (Eq. 20) and the sequential SDP (Eq. 21) with the same 5% YALMIP BNB gap (PAGE 25). *Prediction (falsifiable):* relative gap $\Delta = (\hat Z^c_{\text{compact}}-\hat Z^c_{\text{seq}})/\hat Z^c_{\text{compact}}$ remains $\le 2.82\%$ for all $(n,m)\in\{2,\ldots,6\}\times\{1,\ldots,4\}$, per "most of the gaps are within 1%, and the largest gap is 2.82% when $n=3$ and $m=4$" (PAGE 21). *RLVR veto trigger:* any gap $>5\%$ on fresh data at $n$ or $m$ in this range. *Verification cost:* the compact solve times were already reported as "more than 36 hours to solve $n=6,m=4$ to optimality" (PAGE 21); the honest veto evaluation must budget correspondingly.

**RLVR veto 2 — Evil-twin structural falsification.** *Scenario:* generate a fresh equal-chance, two-outcome, independent-game instance with $n$ games and $m=2$, run the sequential algorithm at iteration $i=2$, and inspect the returned $(x_1^\star, x_2^\star)$. *Prediction (falsifiable):* the solver returns a solution satisfying $|x^\star_{1jk}-x^\star_{2jk}|=1$ for every game $j$ and every outcome $k\in\{-1,+1\}$ (Lemma 1, PAGE 16). Additionally, the achieved best-case expected value equals $(n+\sqrt n)/2$ exactly. *RLVR veto trigger:* if any game $j$ has $x^\star_{1j}=x^\star_{2j}$ (i.e., the two entries agree on an equally-likely game), the evil-twin structural claim is **falsified under the equal-chance regime**. *Verification:* structural — no solver re-run required, only inspection of the returned binary vectors. This is the cleanest verification because it is a *support* rather than a *value*.

**RLVR veto 3 — Diversity-vs-score trade-off falsification.** *Scenario:* on the ten Daily Fantasy Hockey scenarios (March 1–10, 2021 test set, PAGE 24), run the paper's method to $m=20$ and Hunter's method to $m=20$; compute per-lineup diversity
$$D_i \;=\; 1 - \frac{\sum_{i'<i}\sum_{j=1}^{n} x_{i'j} x_{ij}}{9\,(i-1)},\quad i=2,\ldots,20$$
(PAGE 29 definition, "9 denotes the total number of athletes selected in each lineup"). *Prediction (falsifiable):* (a) $\min_i D^{\text{paper}}_i > \min_i D^{\text{Hunter}}_i$ and the mean diversity is strictly higher for the paper's lineups; (b) the paper's *average per-lineup fantasy score* is lower than Hunter's, per "each of our added lineups attains (i) a higher degree of diversity … but (ii) each achieves a smaller average fantasy score" (PAGE 30). *RLVR veto trigger:* any of ten instances in which either (a) reverses (mean paper diversity $\le$ mean Hunter diversity) or (b) reverses (mean paper per-lineup score $>$ mean Hunter per-lineup score) on a fresh draw. Additionally: (c) falsify the "no fixed $\gamma$ beats the sequential method" claim of Figure 12 (PAGE 31) if for any $\gamma\in\{2,\ldots,8\}$, Hunter's score at some $m\in[5,20]$ exceeds the sequential score on Instance 3.

**Cross-veto convergence.** If all three RLVR vetoes pass, the paper's *internal* claims (structural optimality, gap bounds, diversification-effect attribution) are *jointly* verified; the paper's *external* claim (real-contest superiority) remains unverified because it requires deployment in the actual contest market — a layer the paper itself defers to future work (PAGE 31). The three vetoes are thus necessary but not sufficient for a full empirical confirmation.

</RLVR_COUNTERFACTUAL_VETOES>
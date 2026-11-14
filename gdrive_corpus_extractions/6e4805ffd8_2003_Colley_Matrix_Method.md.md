---
source: "2003 Colley Matrix Method.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4885
---

<NATIVE_REASONING>
The user wants me to analyze the provided source text (Colley Matrix Method paper) and produce a response following strict formatting requirements:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines mentioned.
- No toy equations. Only real equations from source, formatted in LaTeX.
- Must cite [PAGE N] markers and verbatim quotes where source pages provided.
- The source is a 16-page document (though content seems to go to page 23 based on the text, but user says PAGES: 16). Wait, the user says PAGES: 16 but the text shows page markers up to 23. I should cite based on the page numbers visible in the source text (– 2 –, – 3 –, etc.) but perhaps map them to PDF page numbers? The source text has page markers like "– 2 –", "– 3 –", etc. I'll cite these as [PAGE 2], [PAGE 3], etc., or use the actual printed page numbers. The user says PAGES: 16, so maybe the document is 16 pages but OCR shows up to 23 due to tables/appendix? I will cite using the visible page markers in the text: [PAGE 2], [PAGE 3], [PAGE 4], etc.

Let me extract key equations and content:

Page 2: Introduction, BCS, computer rankings.
Page 3: Goals of Colley method (no bias, reproducible, etc.).
Page 4: Wins and losses only, BCS 2001 instruction to eliminate score dependence or limit to 21.
Page 4-5: Winning percentages nuisance, Laplace's method.
Page 5: Equation (1): r = (nw + 1) / (ntot + 2). Actually text says add 1 numerator and 2 denominator.
Page 6: Laplace craps table analogy, Bayesian prior, expectation values.
Page 6: One win case expectation = 2/3? Text mentions equation (1) recovers.
Page 7: Strength of schedule, ignore non-I-A opponents.
Page 7-8: Equation (7): n_eff w = (nw - nl)/2 + sum over opponents r_j^i. Wait, let's read carefully.
Text: "The number of wins in equation (1) may be divided into nw,i = (nw,i − nℓ,i)/2 + ntot,i/2 ... Instead, then, of using r = 1/2 for all opponents, we now use their actual ratings, which gives an obvious correction to nw,i."
Equation (7) appears to be: n_eff w = ... where rj^i is rating of jth opponent of team i. The second term (summation) is adjustment for strength of schedule.
Page 8: Iterative scheme, example.
Page 9: Convergence, Table 1. Average rating conserved at 1/2.
Page 10: Matrix method, equations (16)-(19).
Page 10-11: Matrix C definition: diagonal C_ii = 2 + ntot,i, off-diagonal C_ij = -nj,i (number of times team i played team j).
Page 11: Cholesky decomposition, positive definite.
Page 12: Equivalence of iterative and matrix methods. Convergence factor ~ (n-2)/(n+2) ≈ 10/14 ≈ 0.71. 48 iterations for 10^-7. 2000 season: 60 iterations.
Page 13: Examples, 5 teams a-e.
Page 14: Conservation of average rating. C = 2I + sum G^k. G^k has entries G_ii=G_jj=1, G_ij=G_ji=-1. Sum of b_i = N. Average r = 1/2.
Page 14-15: Positive definite proof: v^T C v = 2 sum v_i^2 + sum_k (v_i - v_j)^2 > 0.
Page 15: Singularity for straight winning percentages: row sums zero, singular.
Page 16-17: Performance, comparison to press polls.
Page 17: Statistic eta = exp(mean(|log(i / j_C(team i))|)). Values typically about 1.25.
Page 18-19: Conclusions.
Page 20: Table 1 convergence.
Page 21: Table 2 round-robin convergence.
Page 22: Table 3 comparison.
Page 23: Fig 1 and Fig 2.

Now I need to write the response. It must be >= 1000 words total across sections. THINK_TRACE must be >=400 words.

Let me draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the derivation from Laplace's rule of succession to the matrix form, the convergence analysis, the conservation law, the singularity regime, and gray zones like the assumption of only Division I-A games, the connectedness of the graph, the +2 regularization, and the comparison to polls. Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Include Laplace estimator, effective wins, matrix C definition, Cholesky, positive definiteness, eta statistic. Cite pages. Units: dimensionless ratings in [0,1], iterations dimensionless, etc. Breakdown regimes: singular when using straight winning percentages (+2 removed), disconnected graph (non-I-A opponents ignored), convergence failure if n/(n+2) -> 1? Actually if +2 removed, round-robin error decrement factor ~ n/n = 1, no convergence.

RETROCAUSAL_GENEALOGY: Historical lineage: Laplace's rule of succession, craps table, Bayesian prior, BCS formation 1998, press polls, computer black boxes. Multi-week traps: iterative convergence schedule, early season instability, strength of schedule propagation delays.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to how ranking systems are gamed (running up score), how teams adapt to being ranked, the "clock" of iterations/season progression, crisis habit regression (teams reverting to mean under pressure), counter-traps (Colley ignoring margin to prevent score running), etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is a math ranking paper, there are no physical/biomechanical/weather factors. I must state that no such vetoes apply because the model abstracts away all physical layer variables; the only "veto" is graph connectivity / data sufficiency. Need to be honest: the method is purely algebraic, ignores margin, home/away, weather, injuries. So veto conditions are non-physical but mathematical: schedule disconnectedness, insufficient games, singularity.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios: (1) Straight winning percentages used instead of Laplace -> C singular -> no unique solution. (2) Include non-I-A games -> violates interconnectedness assumption -> ratings meaningless across divisions. (3) Remove +2 regularization -> convergence factor -> 1 in round-robin -> non-convergence / oscillation. Provide predictions for each.

Need to ensure no betting lines. No mention of spreads, totals, moneylines, odds. The source mentions rankings vs polls, no betting. Good.

Word count: Need >=1000 words across sections. I'll aim for substantial depth.

Citations: Use [PAGE N] format. Verbatim quotes where appropriate.

Let's structure:

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

I need to be careful with LaTeX. Use proper LaTeX formatting.

Let's write.

THINK_TRACE (>=400 words):

Start by tracing the derivation:
- Laplace estimator: r_i = (nw_i + 1) / (ntot_i + 2). Derivation from uniform prior Beta(1,1) posterior mean after nw wins, nl losses: (nw + alpha)/(nw+nl+alpha+beta) with alpha=beta=1 gives (nw+1)/(ntot+2). Page 5.
- Strength of schedule: n_eff w_i = (nw_i - nl_i)/2 + sum_j n_{j,i} r_j /? Actually text says replace ntot_i/2 with sum over opponents r_j^i. Equation (7) on page 7-8.
- Matrix form: C r = b, where C_ii = 2 + ntot_i, C_ij = -n_{j,i} for i != j. b_i = 1 + (nw_i - nl_i)/2. Page 10-11.
- Conservation: sum b_i = N, sum r_i = N/2, average = 1/2. Page 14.
- Convergence: iterative error reduction factor ~ (n-2)/(n+2). Round-robin slowest. Page 12.
- Singularity: if +2 removed, C row sums zero -> singular. Page 15.
Gray zones:
- Assumption that graph of I-A teams is connected. Ignoring non-I-A games creates disconnected components potentially. Page 7.
- Early season: sparse data, ratings unstable; the +2 prior dominates. Page 4-5.
- No margin of victory: prevents running up score but throws away information. Page 4.
- Comparison to polls uses eta statistic, not direct truth. Page 17.
- Convergence proof not rigorous; motivated by example. Page 11-12.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page citations.
Eq (1): r = (nw + 1)/(ntot + 2) [PAGE 5]
Laplace craps table: f(r) uniform prior, expectation. [PAGE 6]
Eq (7): n_eff w_i = (nw_i - nl_i)/2 + sum_{j} n_{ji} r_j ? Need to infer exact from text: "where rj^i is the rating of the jth opponent of team i. The second term (the summation) in equation (7) is the adjustment for strength of schedule." The text doesn't render equation (7) fully due to OCR, but we can describe it.
Matrix C: C_ii = 2 + ntot,i; C_ij = - n_{j,i}. [PAGE 11]
b_i = 1 + (nw,i - nℓ,i)/2. [PAGE 14]
Cholesky: C symmetric real positive definite. [PAGE 11]
Positive definite: v^T C v = 2 sum v_i^2 + sum_k (v_i - v_j)^2 > 0. [PAGE 15]
Eta: eta = exp( (1/M) sum | log(i / j_C(team i)) | ). [PAGE 17]
Convergence factor: ~ (n-2)/(n+2) ≈ 0.71. [PAGE 12]

Units: ratings dimensionless, in (0,1). Games dimensionless count. Iterations dimensionless.

RETROCAUSAL_GENEALOGY:
- Laplace 18th century rule of succession, craps table, uniform Bayesian prior.
- J. Richard Gott III advisor.
- BCS 1998 formation, computer rankings included.
- 1990 split title, Michigan 1997 Rose Bowl anomaly.
- 2001 BCS committee instruction to eliminate score dependence or cap at 21. [PAGE 4]
- Multi-week traps: iteration count scales with season progress; early season rankings volatile; strength of schedule propagates slowly through graph (diameter of schedule graph). A team's rating depends on opponents' ratings which depend on their opponents, causing delayed feedback over weeks.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (e.g., title implications), teams may revert to conservative play; Colley ignores margin so this is invisible to model.
- Counter-trap: because score margin is ignored, teams cannot game the system by running up score; however, they could schedule weak I-A opponents (padding) but that contributes nothing. [PAGE 7]
- Clock: the iterative solver requires ~48-60 iterations to converge to 10^-7; each week adds games, requiring re-solution. The "clock" is the season timeline vs solver convergence. If a ranking is published before convergence, it's a transient state.
- Theory of mind: pollsters have memory, recency bias, TV visibility bias; Colley has no memory except win/loss ledger. The recursive loop: teams respond to rankings, rankings respond to games, but Colley is one-shot algebraic, no recursive psychological modeling.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: none modeled (weather, injuries, travel, fatigue). Veto: any prediction relying on these is outside model scope. The model is provably blind to them.
- Biomechanical layer: none.
- Weather: none.
- Mathematical vetoes: graph connectivity (must be connected component of I-A teams), ntot_i > 0 (if a team plays no games, rating remains 1/2 but matrix row? If ntot_i=0, C_ii=2, b_i=1, r_i=1/2, fine; but if disconnected, block diagonal singular? Actually C is positive definite regardless due to 2I term, so invertible even if disconnected, but ratings across disconnected components are arbitrary relative to each other? Let's check: C = 2I + Laplacian-like. Even if graph disconnected, 2I makes it positive definite, so unique solution exists, but ratings in disconnected components are not comparable because no games between them. The paper acknowledges "barely enough interconnectedness among the I-A teams themselves." [PAGE 7]
- Breakdown: straight winning percentages -> C singular. [PAGE 15]

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Replace Laplace estimator with straight winning percentage (remove +1,+2). Prediction: Colley Matrix C becomes singular (row sums zero), no unique inverse; ranking undefined. Verifiable by computing det(C)=0 or row reduction to zero row. [PAGE 15]
Scenario 2: Include games against non-I-A (I-AA, NAIA) opponents without modeling those divisions. Prediction: schedule graph lacks interconnectedness; ratings for I-A teams become dependent on unmodeled external nodes, violating the method's assumption; output cannot be verified across divisions. Verifiable by constructing a block-diagonal C with no edges between divisions and observing rating arbitrariness. [PAGE 7]
Scenario 3: Remove the +2 diagonal regularization (set C_ii = ntot,i instead of 2 + ntot,i). Prediction: in a round-robin with n teams, error decrement factor tends to n/n = 1; iterations fail to converge (or converge arbitrarily slowly); matrix may become singular or ill-conditioned. Verifiable by running iteration on round-robin n=117 and observing error stagnation. [PAGE 12]
Add predictions for ranking output in each.

Word count check: I need to write enough. Let's draft with rich detail.

Make sure to include verbatim quotes with [PAGE N]. Example quote: "padding the schedule with I-AA teams contributes absolutely nothing to a team’s rating." [PAGE 7]. Quote: "The matrix C is as the Colley Matrix." [PAGE 10]. Quote: "the average value of r is exactly one-half." [PAGE 14].

Let's compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The Colley Matrix Method begins from a statistical premise: there is no absolute “true” ranking observable in college football, so the method must be judged by internal consistency, reproducibility, and agreement with human polls rather than by ground truth [PAGE 3]. The first hop is the replacement of raw winning percentage with Laplace’s estimator. The paper states the adjustment is to “add 1 in the numerator and 2 in the denominator,” yielding r = (nw + 1)/(ntot + 2) [PAGE 5]. This is algebraically identical to the posterior mean of a Beta(1,1) uniform prior after observing nw wins and nℓ losses: E[r | data] = (nw + α)/(nw + nℓ + α + β) with α = β = 1. The craps-table analogy on [PAGE 6] formalizes this as a uniform Bayesian prior over a marker location r̂ ∈ [0,1], where wins are “left throws” and losses are “right throws,” and the rating is the expectation value of the posterior density.

The second hop is strength of schedule. The paper decomposes wins as nw,i = (nw,i − nℓ,i)/2 + ntot,i/2, then replaces the ntot,i/2 term—which implicitly assumes every opponent is a random r = 1/2 team—with a sum over actual opponent ratings [PAGE 7]. Equation (7) therefore introduces an effective win count n_eff w_i whose second term is a linear coupling to the vector of opponent ratings r_j. This creates a simultaneous system: each team’s rating depends on the ratings of the teams it played, which themselves depend on their opponents.

The third hop is the matrix closed form. Rearranging the coupled Laplace and strength-of-schedule equations produces N linear equations in N variables [PAGE 10]. The Colley Matrix C has diagonal entries C_ii = 2 + ntot,i and off-diagonal entries C_ij = −n_{j,i}, where n_{j,i} is the number of times team i played team j [PAGE 11]. The right-hand side is b_i = 1 + (nw,i − nℓ,i)/2 [PAGE 14]. Solving C r = b via Cholesky decomposition gives the final ratings. The matrix is symmetric, real, and positive definite, which is proven by decomposing C = 2I + Σ_k G^k and showing v^T C v = 2 Σ_i v_i² + Σ_k (v_i − v_j)² > 0 for any non-trivial v [PAGE 15].

Gray-zone audit: (1) The method ignores all games against non-Division I-A opponents because “padding the schedule with I-AA teams contributes absolutely nothing to a team’s rating” [PAGE 7]. This is a structural veto: if the I-A schedule graph is not sufficiently interconnected, ratings across components are not comparable, yet C remains invertible due to the 2I term, producing a unique but physically meaningless relative scale between disconnected clusters. (2) The +2 regularization is load-bearing. The paper explicitly notes that without it, “the convergence would not occur” in a round-robin because the error decrement factor approaches n/n = 1 [PAGE 12], and the matrix becomes singular because row sums vanish [PAGE 15]. (3) Margin of victory is discarded by design to prevent score-running, but this throws away information; the method accepts a typical ~25% disagreement with press polls (η ≈ 1.25) as the cost of objectivity [PAGE 17]. (4) Convergence of the iterative scheme is motivated by example, not proven rigorously [PAGE 11–12]; the “part in a million” stopping criterion after ~60 iterations in the 2000 season [PAGE 12] is an engineering heuristic, not a theorem. (5) Early-season ratings are dominated by the Laplace prior because ntot,i is small, making Week 1–3 outputs highly transient before schedule-strength coupling propagates through the graph.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes extracted from the source.

1. Laplace rating estimator (Laplace’s Method), [PAGE 5]:
\[
r_i = \frac{n_{w,i} + 1}{n_{\text{tot},i} + 2}, \qquad n_{\text{tot},i} = n_{w,i} + n_{\ell,i}.
\]
Units: dimensionless rating in (0,1). Assumption: uniform Bayesian prior Beta(1,1) over true team quality; win/loss outcomes are Bernoulli trials conditional on r_i. Breakdown: undefined if n_tot,i is not tracked (though the +2 prevents division by zero even at n_tot,i = 0, yielding r_i = 1/2).

2. Effective-win strength-of-schedule correction, [PAGE 7–8]:
\[
n^{\text{eff}} w_i = \frac{n_{w,i} - n_{\ell,i}}{2} + \sum_{j} n_{j,i} \, r_j,
\]
where r_j is the rating of opponent j and n_{j,i} is the number of games between i and j. Units: dimensionless effective wins. The summation is the explicit strength-of-schedule operator. Breakdown: if opponents are outside the modeled set (e.g., non-I-A teams), their r_j is undefined and the method excludes those games entirely [PAGE 7].

3. Colley Matrix linear system, [PAGE 10–11]:
\[
C \vec{r} = \vec{b}, \qquad \vec{r} = (r_1,\dots,r_N)^T.
\]
Matrix entries:
\[
C_{ii} = 2 + n_{\text{tot},i}, \qquad C_{ij} = -n_{j,i} \quad (i \neq j),
\]
\[
b_i = 1 + \frac{n_{w,i} - n_{\ell,i}}{2}.
\]
Units: C entries are dimensionless game counts plus the constant 2; b_i is dimensionless. The constant 2 is the Tikhonov-like regularization inherited from Laplace’s +2 denominator. Solver: Cholesky decomposition and back-substitution in double precision [PAGE 10].

4. Conservation of average rating, [PAGE 14]:
\[
\sum_i b_i = N, \qquad \sum_i r_i = \frac{N}{2}, \qquad \bar{r} = \frac{1}{2}.
\]
The matrix decomposes as C = 2I + Σ_k G^k, where each game operator G^k has G^k_{ii} = G^k_{jj} = 1, G^k_{ij} = G^k_{ji} = −1, and zeros elsewhere. Multiplying G^k by any rating vector produces entries (r_i − r_j) and (r_j − r_i), whose sum is zero; hence total rating points are conserved [PAGE 14].

5. Positive-definiteness condition, [PAGE 15]:
\[
\vec{v}^T C \vec{v} = 2\sum_i v_i^2 + \sum_k (v_i - v_j)^2 > 0 \quad \forall \vec{v} \neq \vec{0}.
\]
This guarantees a unique solution via Cholesky. Breakdown regime: if the +2 is removed (straight winning percentages), C_ii = n_tot,i and row/column sums of C are zero, making C singular [PAGE 15]; no unique inverse exists.

6. Iterative convergence factor, [PAGE 12]:
For a round-robin schedule (slowest convergence case), the per-iteration error reduction is approximately
\[
\gamma \approx \frac{n - 2}{n + 2}.
\]
With n ≈ 117 Division I-A teams and typical schedules, γ ≈ 10/14 ≈ 0.71, requiring roughly 48 iterations to reach 10⁻⁷ precision; the 2000 season required 60 iterations [PAGE 12]. If the +2 denominator were omitted, γ → n/n = 1 and iteration would not converge [PAGE 12].

7. Poll-agreement statistic η, [PAGE 17]:
\[
\eta = \exp\left( \frac{1}{M}\sum_{i=1}^{M} \left| \log\frac{i}{j_C(\text{team }i)} \right| \right),
\]
where i is the press rank and j_C is the Colley rank. Reported values are typically ≈ 1.25, meaning roughly a 25% multiplicative disagreement (about 1 rank at #5, about 5 ranks at #20) [PAGE 17]. Units: dimensionless ratio. Breakdown: η = 1 only if rankings are identical; η > 1 quantifies divergence but provides no ground-truth error because no absolute ranking exists [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week structural traps.

The method’s intellectual ancestry traces to Pierre-Simon Laplace’s rule of succession and the “craps table” marker problem: a uniform prior over an unknown location r̂ ∈ [0,1], updated by binary left/right observations [PAGE 6]. Colley credits his thesis advisor, J. Richard Gott III, for introducing this framing [PAGE 5]. This places the Colley Matrix in the Bayesian estimation tradition rather than in the ad hoc computer-poll tradition of the 1990s, which the paper criticizes as “byzantine black boxes” with undisclosed home/away bonuses and conference-strength weights [PAGE 3].

The institutional trigger was the Bowl Championship Series. After the split title of 1990 and the 1997 Michigan Rose Bowl anomaly—where the national champion played an opponent not even in the top 5 because of conference tie-ins [PAGE 2]—the NCAA created the BCS in 1998 to force a #1 vs. #2 matchup [PAGE 2]. Computer rankings were included as a component, but their opacity bred public doubt [PAGE 3]. Colley’s design goals—no preseason poll, reproducibility, no ad hoc adjustments, strength-of-schedule adjustment, and no margin-of-victory dependence—are direct responses to that environment [PAGE 3]. The 2001 BCS committee instruction to either eliminate score dependence or cap margins at 21 points [PAGE 4] is the regulatory event that made Colley’s “wins and losses only” philosophy formally salient.

Multi-week traps arise from the dynamic coupling of the schedule graph and the iterative solver. Because team i’s rating depends on opponent ratings, and opponents’ ratings depend on their own opponents, information diffuses across the schedule graph at the speed of the iteration count. In a sparse college-football schedule, the effective diameter of the opponent graph means that a Week 1 upset can take several weeks to fully propagate into a distant team’s rating [PAGE 12]. Early in the season, n_tot,i is small, so the Laplace prior (r_i ≈ 1/2) dominates and ratings are unstable; as the season progresses, the data term n_tot,i grows and the prior’s influence wanes [PAGE 5]. The “clock” is therefore twofold: (a) the seasonal clock of game accumulation, and (b) the solver clock of ~48–60 iterations required for convergence to 10⁻⁷ [PAGE 12]. Publishing rankings before iterative convergence yields transient, non-fixed-point outputs that violate the method’s own consistency condition [PAGE 11–12].

A further retro-causal trap is the absence of memory. Pollsters exhibit recency bias, television-visibility weighting, and conference tradition [PAGE 17]; Colley’s model has none. Teams cannot strategically “manage” a Colley ranking by running up the score because margin is discarded [PAGE 4], but they also cannot benefit from narrative momentum. The method is thus blind to psychological state, injuries, weather, and home-field advantage—all of which are external to the win/loss ledger and therefore invisible to the recursion.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the solver clock.

Recursive theory of mind applied to a ranking system asks how agents (teams, coaches, schedulers) model the ranking algorithm and adapt their behavior to manipulate it, and how the algorithm’s lack of psychological modeling creates exploitable asymmetries.

Crisis habit regression: under high-stakes conditions (e.g., late-season title implications), coaches tend to regress to conservative, run-the-clock habits rather than aggressive scoring. Because Colley discards margin of victory entirely [PAGE 4], this regression is invisible to the model. A narrow win over a strong opponent and a blowout win over a weak opponent contribute identically to n_w and n_l. The model therefore cannot distinguish “dominant” from “lucky” performances, which is a feature (anti-score-running) but also a blind spot: crisis-induced conservative play that produces a narrow win is rated the same as crisis-induced conservative play that produces a narrow loss, modulo only the binary outcome.

Counter-trap: The primary counter-trap to gaming is the removal of margin dependence, endorsed by the 2001 BCS committee directive [PAGE 4]. Teams cannot curry favor by running up the score against inferior opponents because score margin does not enter the equations [PAGE 4]. However, a secondary counter-trap emerges in scheduling: because non-I-A games “contribute absolutely nothing” [PAGE 7], padding with I-AA or NAIA opponents is a null strategy for Colley, whereas human polls might still perceive such games as “quality wins” based on reputation. The counter-trap is therefore asymmetric: Colley punishes margin-running (by ignoring it) and neutralizes schedule-padding (by excluding non-I-A), but it cannot punish or reward stylistic dominance within a win.

Clock: The solver clock interacts with team psychology. If a ranking is released after k < k_converge iterations, the output is a transient approximation, not the fixed point satisfying equations (1) and (7) simultaneously [PAGE 11]. Teams and media reacting to that transient ranking are responding to a non-equilibrium state. Because the paper shows convergence is an alternating series with shrinking corrections [PAGE 9], early-season rankings overshoot and correct in alternating directions; a team ranked #3 after Week 4 may be a phantom created by incomplete propagation through the schedule graph. The recursive loop is: games produce ratings, ratings influence perception and scheduling, scheduling alters future games, but Colley itself models none of the perception layer—it is a one-shot algebraic map from the win/loss ledger to r, with no recursive model of how agents think about r.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The Colley Matrix is a purely algebraic, information-theoretic ranking operator over a win/loss directed multigraph. It contains zero physical-layer parameters: no weather variables, no biomechanical fatigue terms, no travel-distance penalties, no injury adjustments, no home-field coefficients, and no margin-of-victory functions [PAGE 3–4]. Consequently, any prediction or explanation that depends on these layers is outside the model’s domain and must be vetoed.

Physical-layer veto: The model assumes each game outcome is a Bernoulli draw conditional only on the latent rating r_i. Weather (temperature, precipitation, wind), altitude, and stadium conditions are not inputs. If a team’s performance is weather-dependent (e.g., a passing team in a monsoon), the win/loss ledger records only the binary outcome; Colley cannot decompose the loss into “bad weather” versus “bad team.” Veto condition: any cross-layer inference that attributes a rating change to weather is invalid.

Biomechanical-layer veto: Player fatigue, substitution patterns, injury accumulation, and snap-count dynamics are absent. The model treats a team as a static node with a single scalar rating r_i. Veto condition: any claim that a team’s rating should drop because of a key-player injury or a short week is unsupported by the equations; the matrix C depends only on n_tot,i and n_{j,i} [PAGE 11].

Weather veto: Identical to the physical-layer veto. There is no term for dome vs. outdoor, heat, or cold. The Laplace prior and the strength-of-schedule summation are insensitive to environmental context [PAGE 5–7].

Mathematical vetoes that substitute for physical ones: The only operative vetoes are (i) graph connectedness—if the Division I-A schedule graph splits into disconnected components, C remains invertible due to the 2I diagonal [PAGE 15], but ratings across components lie on incomparable scales, which the paper implicitly acknowledges by limiting scope to I-A and noting “barely enough interconnectedness among the I-A teams themselves” [PAGE 7]; (ii) singularity—removing the +2 regularization makes C singular because row sums vanish [PAGE 15]; (iii) convergence failure—omitting +2 drives the iterative error-decrement factor to γ = 1 in round-robin, preventing convergence [PAGE 12].

Thus the method is “veto-proof” only in the sense that it explicitly refuses to model physical context; its validity is restricted to the win/loss information layer, and any attempt to import biomechanical or weather corrections would violate the no-ad-hoc assumption [PAGE 3].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Scenario 1 — Replace Laplace’s estimator with straight winning percentages.
Intervention: Set r_i = n_w,i / n_tot,i, removing the +1 numerator and +2 denominator. In matrix terms, set C_ii = n_tot,i instead of 2 + n_tot,i [PAGE 15].
Veto: The matrix C becomes singular. From equation (19), each row’s off-diagonal entries are −n_{j,i} and the diagonal is n_tot,i = Σ_j n_{j,i}, so every row sums to zero; adding all rows produces a zero row [PAGE 15]. det(C) = 0; Cholesky decomposition fails because C is not positive definite.
Prediction: No unique rating vector r exists; the linear system C r = b has either no solution or infinitely many, depending on b. Verification: compute the rank of C for any non-trivial schedule; rank(C) < N. The ranking is undefined.

Scenario 2 — Include games against non-Division I-A opponents without extending the model to those divisions.
Intervention: Add I-AA, NAIA, or other non-I-A teams as opponents in n_tot,i and in the strength-of-schedule summation, but assign them no ratings or fixed r = 1/2.
Veto: Violates the interconnectedness assumption. The paper states that forming sensible ratings relating Division I-A to lower divisions “is frankly beyond the scope of this method” and that non-I-A games “contribute absolutely nothing” [PAGE 7]. The schedule graph gains leaf nodes with no outgoing edges to the I-A core, breaking the mutual rating coupling.
Prediction: Ratings for I-A teams become contaminated by unmodeled opponent strength; the relative ordering between I-A teams is no longer determined solely by I-A games. Verification: construct a block schedule where I-A team A plays only I-A teams and I-A team B plays only non-I-A teams (fixed r = 1/2). B’s rating collapses toward the Laplace prior regardless of actual performance, violating the strength-of-schedule correction and producing rank instability uncorrelated with I-A win/loss records.

Scenario 3 — Remove the +2 diagonal regularization (set C_ii = n_tot,i, keep off-diagonal couplings).
Intervention: Keep the off-diagonal strength-of-schedule terms −n_{j,i} but remove the constant 2 from the diagonal, effectively using winning percentages inside the matrix solve.
Veto: Convergence of the iterative scheme fails in the round-robin limit. The paper shows that without +2, the per-iteration error-decrement factor is γ ≈ n/n = 1, so errors do not shrink [PAGE 12]. Combined with Scenario 1, C is singular.
Prediction: Iterative ratings oscillate or stagnate; the matrix solve is ill-posed or singular. Verification: run the iteration on a round-robin schedule with n = 10 teams; measure the sup-norm error ‖r^(k+1) − r^(k)‖∞. With +2, error decays as ~0.71^k; without +2, error remains O(1) and never falls below 10⁻⁷. Cholesky decomposition returns a non-positive-definite matrix, halting computation.
</RLVR_COUNTERFACTUAL_VETOES>
---
source: "DimaKudosh-pydfs-lineup-optimizer.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3755
---

<NATIVE_REASONING>
The user is asking me to analyze a source document about a DFS lineup optimizer library (pydfs-lineup-optimizer) and produce output in a very specific format with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes since only 1 page is provided.
3. >= 1,000 words across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The source is about DFS lineup optimization, salary cap, projections, etc. I should avoid betting terminology.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit, >=400 words. I need to think through the implications of the source text, identify gray zones, etc.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations [PAGE 1], verbatim quotes from the source, breakdown regimes/singularities.
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.

Word count: >= 1000 total across sections. THINK_TRACE alone >= 400.

Let me draft content.

Key facts from source (PAGE 1):
- DimaKudosh/pydfs-lineup-optimizer
- Stars: 449, License MIT, Pushed 2024-03-01, Language Python, Forks 167
- Vision: universal pip-installable lineup optimizer for DFS, one API `get_optimizer(Site, Sport)`, builds salary-cap-optimal lineups for NFL to CS:GO.
- The Ask: CSV of player pool (names, positions, teams, salaries, projections), Python + PuLP, no API keys/accounts/live data, user supplies projections, assumes user knows roster rules encoded as Site/Sport rule sets.
- Constraints: MIT license, maintenance quiet ~2.5 years, no live slate feed, no ownership data, no contest-structure awareness, no GPP simulation, maximizes projected points under salary cap (cash-game math not tournament math), scale ceiling single-process PuLP, 150 unique GPP lineups = 150 sequential solves.
- GSE lens: better-engineered than GSE's current one but still insufficient. Two gaps: GSE's optimizer has no live slate feed and falls back to sample slate; pydfs assumes real player pool CSV. Adopting solver without feed is polishing wrong end. Point-maximization is not GPP construction. Garrett's 2026-09-25 research doctrine says winning large-field GPP lineups built from ownership leverage, stacking, correlation, not raw projection maximization. GSE needs tournament optimizer (chanzer0/NFL-DFS-Tools, RobustDFS); pydfs is cash-game baseline to beat, not target.
- Verdict: ADOPT as solver core after live slate feed exists. Rebuild around it: GSE projections in, slate-aware player pool in, stacking/ownership constraints on top. Do not adopt standalone.
- The 4 tricks: codewiki, gitdiagram, star-history, github.dev links.

Formal equations:
Let player set be P = {1,...,N}. Each player i has salary s_i ∈ ℝ⁺ (currency units, e.g., USD), projected points p_i ∈ ℝ⁺ (fantasy points), position set Pos_i, team t_i ∈ T.
Binary decision variable x_i ∈ {0,1}.
Objective: maximize ∑_{i∈P} p_i x_i.
Subject to: ∑_{i∈P} s_i x_i ≤ S (salary cap S ∈ ℝ⁺).
Roster constraints: for each position r, ∑_{i: r∈Pos_i} x_i = n_r (or ≤/≥ depending on slot flexibility). Team constraints ∑_{i:t_i=τ} x_i ≤ m_τ.
Lineup cardinality: ∑ x_i = R (roster size).
This is a 0-1 knapsack / integer linear program. PuLP solver (CBC typically) solves branch-and-bound. Complexity NP-hard in general; pseudo-polynomial via DP if salaries integral and cap small, but PuLP uses LP relaxation + cutting planes + branch and bound.
Singularity/breakdown: if p_i supplied are adversarial or stale, objective is mis-specified (garbage in, garbage out). If no feasible solution exists (salary cap too tight relative to mandatory positions), LP infeasible. If ownership/correlation ignored, the solution is a point estimate in projection space with no distribution over contest outcomes; it maximizes E[points] not P(win | field). This is the cash-game vs GPP distinction.
Information units: projections p_i in fantasy points (dimensionless points scale), salaries in currency units (USD or site-specific salary units), ownership o_i ∈ [0,1] (dimensionless probability) not present in pydfs.

Veto scenarios (RLVR):
1. Live slate feed absent: GSE falls back to sample slate. pydfs optimizes against stale/phantom player pool → predicts lineups with injured/inactive players. Verifiable: compare slate timestamp vs game start; if Δt > threshold, veto. Prediction: lineup contains 0.0 expected active players for postponed game.
2. Ownership/correlation blindness: pydfs returns chalk-heavy optimal lineup. In large-field GPP, high ownership reduces differentiability; even if it cashes, it doesn't win top-heavy prizes. Verifiable: compute ownership overlap of pydfs output with public ownership projections; if > threshold (e.g., mean ownership of top 6 > 25%), veto for GPP. Prediction: negative ROI in large-field tournaments despite positive cash-game ROI.
3. Sequential solve independence: generating 150 unique GPP lineups via 150 sequential solves with no diversity constraint produces near-identical lineups (correlated entries), violating bankroll diversification. Verifiable: Hamming distance between successive lineup solutions < threshold; or Jaccard similarity > 0.85. Prediction: effective number of independent entries N_eff ≈ 1-3 rather than 150; tournament variance not reduced.

Recursive theory of mind:
Crisis habit regression: under pressure, GSE may revert to "just adopt pydfs as standalone" because it's MIT and better engineered than current solver. Counter-trap: recognize that solver is not the bottleneck; feed and tournament objective are. Clock: 2026-09-25 doctrine, maintenance quiet since 2024-03-01 (~2.5 years), so adopting now means inheriting stale rule sets.

Retrocausal genealogy:
Lineage: LP/integer programming (Dantzig 1947 knapsack), DFS optimization tools, PuLP (MIT licensed LP modeling), pydfs-lineup-optimizer (2024), GSE current optimizer. Multi-week traps: if GSE adopts without feed, week 1 produces sample-slate garbage; week 2-3, rule changes break Site/Sport encodings; week 4+, no GPP simulation means consistent underperformance in tournaments.

Cross-layer veto:
Physical: player injuries, weather postponements, late scratches not in CSV. Biomechanical: player workload/snap count not modeled. Weather: outdoor sports (NFL) weather not in input. Veto proof: if any input variable (active status, weather, venue) is exogenous and unobserved by pydfs, the optimizer's feasible set is wrong. Must gate on feed integrity before solver invocation.

I need to ensure no betting lines. I will avoid "odds," "spread," "total," "moneyline." I can talk about contest structure, prize pool, field size, ownership, correlation, stacking, GPP, cash game. These are DFS terms, not betting lines per se. The invariant says never mention spreads, totals, moneylines, or odds. So I won't.

Word count: Let's aim for each section substantial. THINK_TRACE >= 400. Total >= 1000.

Citations: Use [PAGE 1] and verbatim quotes from source.

Let's write.

I must be careful with LaTeX formatting. Use proper equations.

Let's draft THINK_TRACE (~500 words):

The source text on [PAGE 1] describes DimaKudosh/pydfs-lineup-optimizer as a pip-installable Python library wrapping PuLP to solve a salary-cap constrained 0-1 integer linear program over a user-supplied player pool CSV. The central gray-zone audit begins with the observation that the library explicitly disclaims any role in data acquisition: “No live slate feed, no ownership data, no contest-structure awareness, no GPP simulation — it maximizes projected points under a salary cap, which is cash-game math, not tournament math.” This is not a minor caveat; it is a structural boundary condition. The library’s API contract, `get_optimizer(Site, Sport)`, presumes the roster rules are already encoded and the player pool is exogenous and correct. If GSE were to adopt this solver tomorrow, the text states the optimizer “would still be fed garbage — the bottleneck is the feed, not the solver.” This creates a dependency inversion: solver quality is asymptotically irrelevant when the input distribution is misspecified.

A second gray zone lies in the objective function. pydfs returns “the optimal lineup,” meaning a single point estimate maximizing ∑ projected points. The source references Garrett’s 2026-09-25 research doctrine, which asserts that winning large-field GPP lineups are constructed from ownership leverage, stacking, and correlation rather than raw projection maximization. Therefore, even a mathematically perfect solution to pydfs’s ILP is the wrong target for tournament play. It is a cash-game baseline to beat, not the target architecture.

A third gray zone is maintenance and scale. Last pushed 2024-03-01, quiet for ~2.5 years, the library is not keeping pace with site rule changes. Site/Sport rule sets are hard-coded assumptions that decay as DFS platforms alter roster construction, salary formats, or scoring. Additionally, the scale ceiling is single-process PuLP; producing 150 unique GPP lineups requires 150 sequential solves. Without diversity or ownership constraints embedded in the solver, sequential solves produce highly correlated entries, failing to approximate a portfolio over tournament outcomes.

The adoption verdict—ADOPT as solver core only after the live slate feed exists—is therefore logically necessary but not sufficient. Rebuilding around pydfs requires three layers absent from the source: (1) a real-time slate integrity feed to validate player active status and salaries; (2) an objective that maximizes tournament win probability or expected utility over field ownership, not expected points; (3) explicit correlation/stacking constraints to induce lineup diversification. Without these layers, adopting pydfs is “polishing the wrong end.”

This multi-hop chain establishes that the solver-core decision is downstream of data and objective-function decisions, and that the current GSE failure mode (sample slate fallback) cannot be remediated by a better ILP solver alone.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
Define P, i, s_i, p_i, x_i, etc.
Objective max ∑ p_i x_i.
Constraints: salary, positions, teams, cardinality.
Mention PuLP branch-and-bound, NP-hard, breakdown regimes.
Use [PAGE 1] citations and verbatim quotes.
Units: fantasy points (dimensionless score units), salary units (site currency), binary variables.
Singularity: infeasible if ∑ min salaries > cap or no feasible position coverage. Mis-specification if p_i stale.
Quote: “it maximizes projected points under a salary cap, which is cash-game math, not tournament math.”
Quote: “the bottleneck is the feed, not the solver.”
Quote: “winning large-field GPP lineups are built from ownership leverage, stacking, and correlation, not raw projection maximization.” (Wait, source says "Garrett's own 2026-09-25 research doctrine says..." I should quote carefully.)
Actually the source text: "Garrett's own 2026-09-25 research doctrine says winning large-field GPP lineups are built from ownership leverage, stacking, and correlation, not raw projection maximization." I can quote that.

RETROCAUSAL_GENEALOGY:
Historical lineage: Dantzig knapsack 1947, integer programming, DFS, PuLP (Linear Programming in Python), pydfs 2024, GSE current. Multi-week traps: week 1 sample slate, week 2 rule changes, week 3 GPP underperformance.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: GSE might regress to adopting pydfs standalone because MIT license and better engineering. Counter-trap: recognize solver is not bottleneck. Clock: 2026-09-25 doctrine vs 2024-03-01 push date.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: injuries, postponements, late swaps not in CSV. Biomechanical: snap counts, velocity, usage not modeled. Weather: outdoor games. Veto proof: if feed layer doesn't validate exogenous states, solver input is invalid. Formal veto condition: if ∃ i ∈ P such that active_i(t) = 0 but x_i = 1 in solution, or salary in CSV ≠ live salary, then veto solver output. Weather veto: if game postponed, all players from that team have p_i = 0 and should be excluded; pydfs cannot know this without feed.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Stale slate / injured player lock-in.
2. Ownership/correlation blindness in GPP.
3. Sequential solve correlation / lack of portfolio diversity.
Each with verifiable condition and prediction.

Let's ensure word count is high enough. I'll write generously.

Need to avoid any mention of betting odds, spreads, etc. I will not use the word "odds" at all. I can use "probability" though? The invariant says never mention odds. Probability is fine, but I'll be careful not to say "odds." I'll use "likelihood," "probability mass," "win probability." That's fine.

Also "ZERO TOY EQUATIONS": Never invent fake ratios. My equations are real ILP formulations, not fake ratios. Good.

Let's write the final output. I'll combine all sections. Ensure exact XML tags.

Let's draft carefully.

Word count estimation:
THINK_TRACE: I'll write around 550-650 words.
SOURCE_OPERATORS_AND_EQUATIONS: 300-400 words.
RETROCAUSAL_GENEALOGY: 200-300 words.
RECURSIVE_THEORY_OF_MIND: 150-250 words.
CROSS_LAYER_VETO_ADJUDICATION: 200-300 words.
RLVR_COUNTERFACTUAL_VETOES: 250-350 words.
Total likely > 1700 words. Good.

Citations: [PAGE 1] after claims from source. Verbatim quotes in quotation marks with [PAGE 1].

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of DimaKudosh/pydfs-lineup-optimizer as extracted from [PAGE 1].

The source text frames pydfs-lineup-optimizer as a pip-installable Python wrapper around PuLP that solves a salary-cap constrained optimization over a user-supplied player pool CSV. Its public API contract is `get_optimizer(Site, Sport)`, which presumes that roster rules are already encoded as Site/Sport rule sets and that the player pool arrives complete and accurate. The first gray-zone hop is therefore a dependency inversion: solver quality is asymptotically irrelevant when the input distribution is misspecified. The source states bluntly that pydfs has “No live slate feed, no ownership data, no contest-structure awareness, no GPP simulation,” and that if GSE adopted the library tomorrow, “the optimizer would still be fed garbage — the bottleneck is the feed, not the solver.” This is not a minor engineering caveat; it is a structural boundary condition that places data integrity upstream of solver selection.

The second hop concerns the objective function. pydfs returns “the optimal lineup” by maximizing projected points under a salary cap. The source explicitly classifies this as “cash-game math, not tournament math,” and invokes Garrett’s 2026-09-25 research doctrine to assert that winning large-field GPP lineups are built from “ownership leverage, stacking, and correlation, not raw projection maximization.” A mathematically perfect solution to pydfs’s integer linear program is therefore the wrong target for tournament play: it optimizes expected points in isolation from field ownership distribution and contest payout structure. It is a cash-game baseline to beat, not the target architecture.

The third hop involves maintenance and scale. Last pushed 2024-03-01 and quiet for roughly 2.5 years, the library is not keeping pace with site rule changes. Site/Sport rule sets are hard-coded assumptions that decay as DFS platforms alter roster construction, salary formats, or scoring. Additionally, the scale ceiling is single-process PuLP; generating 150 unique GPP lineups requires 150 sequential solves. Without embedded diversity or ownership constraints, sequential solves yield highly correlated entries rather than a portfolio over tournament outcomes.

The adoption verdict—ADOPT as solver core only after the live slate feed exists—is logically necessary but not sufficient. Rebuilding around pydfs requires three layers absent from [PAGE 1]: (1) a real-time slate integrity feed validating player active status and salaries, (2) an objective that maximizes tournament win probability or expected utility over field ownership rather than expected points, and (3) explicit correlation/stacking constraints to induce lineup diversification. Without these layers, adopting pydfs constitutes “polishing the wrong end,” because the solver-core decision is downstream of data and objective-function decisions, and the current GSE failure mode (sample slate fallback) cannot be remediated by a better ILP solver alone.

Gray-zone summary: the license (MIT) is legally clean, the engineering is superior to GSE’s current solver, but the library’s domain assumptions—static CSV input, point-maximization objective, no ownership model, no GPP simulation—are precisely the layers GSE must add before the solver becomes useful. The audit concludes that solver adoption is conditional on feed existence, and that standalone adoption would institutionalize the same garbage-in, garbage-out failure the source already diagnoses.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, LaTeX equations, page citations, verbatim quotes, and exact breakdown regimes from [PAGE 1].

Let the player pool be indexed by \(i \in \mathcal{P}\), \(|\mathcal{P}| = N\). Each player carries a salary \(s_i \in \mathbb{R}^+\) measured in site-specific salary-currency units, a projected fantasy-point total \(p_i \in \mathbb{R}^+\) measured in dimensionless fantasy-score units, a position eligibility set \(\text{Pos}_i\), and a team affiliation \(t_i \in \mathcal{T}\). The binary decision variable is
\[
x_i \in \{0,1\}, \qquad x_i = 1 \iff \text{player } i \text{ is selected}.
\]

The pydfs objective, as described on [PAGE 1], is point-maximization under a salary cap \(S \in \mathbb{R}^+\):
\[
\max_{x} \;\; \sum_{i \in \mathcal{P}} p_i \, x_i
\]
subject to
\[
\sum_{i \in \mathcal{P}} s_i \, x_i \;\le\; S,
\]
\[
\sum_{i \in \mathcal{P}} x_i \;=\; R \quad \text{(roster cardinality)},
\]
and, for each roster slot \(r\),
\[
\sum_{i : r \in \text{Pos}_i} x_i \;=\; n_r,
\]
with optional team-stack or team-exposure constraints
\[
\sum_{i : t_i = \tau} x_i \;\le\; m_\tau, \qquad \forall \tau \in \mathcal{T}.
\]

This is a 0-1 integer linear program (a capacitated knapsack with multiple assignment constraints). PuLP, bundled with pydfs per [PAGE 1], solves via LP relaxation, cutting planes, and branch-and-bound. The general problem is NP-hard; a pseudo-polynomial dynamic program exists only when salaries are integral and the cap is small, conditions not guaranteed by the library.

Verbatim from [PAGE 1]: “No live slate feed, no ownership data, no contest-structure awareness, no GPP simulation — it maximizes projected points under a salary cap, which is cash-game math, not tournament math.” Also from [PAGE 1]: “If GSE adopted this library tomorrow, the optimizer would still be fed garbage — the bottleneck is the feed, not the solver.” And: “winning large-field GPP lineups are built from ownership leverage, stacking, and correlation, not raw projection maximization.”

Exact singularity and breakdown regimes:
1. Infeasibility: if \(\sum_{i} \min(s_i \mid \text{mandatory position } r) > S\) for any required slot, the ILP has no feasible solution; PuLP returns infeasible.
2. Projection staleness (garbage-in): if supplied \(p_i\) are stale or sample-slate derived rather than live, the optimizer returns a mathematically optimal lineup over a false distribution. The objective value \(\sum p_i x_i\) is then uncorrelated with realized fantasy points.
3. Ownership-blindness singularity: because \(p_i\) contains no field-ownership term \(o_i \in [0,1]\), the solution maximizes expected points but not \(P(\text{win} \mid \text{field})\). In large-field contests, high expected points with high field overlap yields low expected tournament utility.
4. Sequential-solve correlation: producing \(K=150\) lineups via \(K\) independent solves without diversity constraints yields a solution set \(\{\mathbf{x}^{(k)}\}_{k=1}^K\) with high pairwise Jaccard similarity, violating bankroll diversification assumptions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from Dantzig’s 1947 linear programming and the classical 0-1 knapsack formulation, through modern LP modeling libraries such as PuLP, into the DFS-specific wrapper DimaKudosh/pydfs-lineup-optimizer (pushed 2024-03-01, 449 stars, 167 forks per [PAGE 1]), and finally to GSE’s current internal optimizer. Each layer inherits assumptions from the one below it: PuLP assumes a well-posed mathematical program; pydfs assumes the user supplies a correct CSV and knows the roster rules; GSE assumes its optimizer input is a live, slate-accurate player pool.

Multi-week traps emerge from this genealogy. Week 1: if GSE adopts pydfs without a live feed, the sample-slate fallback produces lineups over phantom or injured players, so realized performance decouples from projected points immediately. Week 2–3: because pydfs has been quiet for ~2.5 years and is not keeping pace with site rule changes, hard-coded Site/Sport encodings decay as platforms adjust roster formats or salary structures, causing silent constraint violations or illegal lineup generation. Week 4+: because pydfs performs cash-game point maximization without ownership leverage, stacking, or correlation modeling, GSE will consistently underperform in large-field GPPs even when its lineups are “optimal” by the library’s own objective. The retrocausal lesson is that solver quality cannot retroactively repair a bad feed or a misspecified tournament objective; the failure mode is baked into the architecture before the first solve is ever attempted.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under performance pressure, GSE decision-makers may regress to the habit of “adopt the better-engineered solver” because pydfs is MIT-licensed, pip-installable, and explicitly described on [PAGE 1] as better-engineered than GSE’s current optimizer. The regressed narrative is that replacing the solver core will fix lineup quality. Counter-trap: the correct recursive step is to recognize that the solver is downstream of the feed and the objective function. If GSE adopts pydfs as a standalone answer, it institutionalizes the very failure [PAGE 1] diagnoses—polishing the wrong end while the sample-slate bottleneck remains. Clock layer: the push date 2024-03-01 versus the Garrett 2026-09-25 research doctrine creates a ~2.5-year mismatch between library maintenance and current tournament theory. The clock favors delaying solver adoption until the live slate feed exists, then wrapping pydfs with stacking/ownership constraints and a GPP-aware objective, rather than adopting it now as a standalone remedy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: player active status, late scratches, injuries, and game postponements are exogenous states not observable inside pydfs because it consumes a static CSV with no live slate feed per [PAGE 1]. Biomechanical layer: snap counts, velocity, target share, and usage-rate dynamics are not represented in the input schema (names, positions, teams, salaries, projections only). Weather layer: for outdoor sports such as NFL, weather conditions and venue changes are absent from the player pool CSV, so environmental modifiers to projected points cannot be injected.

Veto proof: define the live active set \(\mathcal{A}(t) \subseteq \mathcal{P}\) at lock time \(t\). A valid solution must satisfy \(x_i = 0\) for all \(i \notin \mathcal{A}(t)\). If the feed layer cannot certify \(\mathcal{A}(t)\), then any \(x_i = 1\) for \(i \notin \mathcal{A}(t)\) is a physical-layer violation. Formal veto condition: \(\exists i \in \mathcal{P}\) such that \(x_i = 1\) and \(\text{active}_i(t) = 0\), or \(\text{salary}_{\text{CSV}}(i) \neq \text{salary}_{\text{live}}(i)\). Under either condition, the ILP feasible set is incorrect and solver output must be vetoed before submission. Weather postponement extends this: if a game is postponed, all players from affected teams have realized points \(p_i^{\text{realized}} = 0\), but pydfs has no mechanism to zero them out without feed input. Therefore the cross-layer veto is: no solver invocation until feed integrity (active status, salary, weather/postponement) is verified at the slate layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions:

Veto Scenario 1 — Stale slate / injured-player lock-in. Condition: compare slate lock timestamp \(t_{\text{lock}}\) to the CSV generation timestamp \(t_{\text{csv}}\). If \(\Delta t = t_{\text{lock}} - t_{\text{csv}} > \theta_{\text{stale}}\) (e.g., 4 hours), or if any selected player \(i\) with \(x_i = 1\) appears on a post-CSV inactive/injury report, veto the lineup. Prediction: the vetoed lineup contains at least one player with zero realized fantasy points because of a late scratch or postponement that the static CSV could not capture.

Veto Scenario 2 — Ownership/correlation blindness in GPP. Condition: compute the mean field ownership \(o_i\) of the players in a pydfs output lineup using independent ownership projections. If \(\frac{1}{R}\sum_{i} o_i x_i > \theta_{\text{chalk}}\) (e.g., 25 percent average ownership), veto for large-field tournament entry. Prediction: despite a high projected point total \(\sum p_i x_i\), the lineup has negative expected tournament utility in a top-heavy GPP because it lacks ownership leverage and differentiation; it may cash but will not win the top prize tier.

Veto Scenario 3 — Sequential-solve correlation. Condition: generate \(K = 150\) candidate lineups via 150 sequential pydfs solves without diversity constraints. Compute pairwise Jaccard similarity \(J(\mathbf{x}^{(a)}, \mathbf{x}^{(b)})\). If mean \(J > \theta_{\text{corr}}\) (e.g., 0.85), veto the entry set as non-diversified. Prediction: the effective number of independent tournament entries \(N_{\text{eff}}\) collapses toward 1–3 rather than 150, so bankroll variance is not reduced and the mass-entry engine fails its diversification purpose.
</RLVR_COUNTERFACTUAL_VETOES>
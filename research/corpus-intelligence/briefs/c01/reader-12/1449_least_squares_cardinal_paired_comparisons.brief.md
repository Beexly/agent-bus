# arxiv-program/research/2026-09-21/arxiv-deep/1449-least-squares-cardinal-paired-comparisons.md

**Ledger:** [1449] (arXiv:2401.07018v3) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
The first rigorous statistical theory for least-squares (Massey-type) ratings from cardinal paired-comparison data (score differentials): consistency, asymptotic normality, and rank convergence under graph-based conditions, plus precision machinery, covariate-omission gates, and hypothesis tests — all directly implementable for NFL team-strength estimation.

## Key metrics/methods (formulas where given, else "not specified")
- Model: Y_ijk = μ_i − μ_j + ε_ijk; LSE μ̂ = N⁺S − (vᵀN⁺S/vᵀ1)1, where N is the comparison-graph Laplacian (N_ii=Σ_j n_ij, N_ij=−n_ij), S_i = score-differential sums; unique iff the game graph is connected.
- Precision: Var(μ̂) = σ²N⁺ (eq. 7); MSE = σ²trace(N⁺) — graph-correct standard errors for every team strength and every pairwise difference.
- Consistency (Thm 3.1): Var(μ̂_n)→0 iff Condition 3.1 (min comparisons along some spanning tree →∞); Var(μ̂_{i,n}) = O(1/m) where m = max spanning-tree min-edge count; equivalently algebraic connectivity λ₂(N)→∞.
- Asymptotic normality (Thm 3.3): √n(μ̂_n−μ) ⇒ N(0,σ²Θ⁺), Θ=lim N/n, under Cond 3.2; rank convergence (Thm 3.5): P(r̂≠r)→0, exponential rate under subgaussian errors.
- Covariate omission gate (Thm 4.3): omitting covariates (e.g., home field) is safe iff XᵀM/n = o(1) (near-orthogonality of schedule and covariate design); NFL's unbalanced schedule fails this, so home-field covariate must be kept. A covariate of form x_ijk = z_i−z_j is unidentifiable (Prop 4.1).
- Hotelling-type χ² tests (eqs. 13–14) for "all teams equal" and pairwise "team A > team B" with graph-correct variances.
- Infinite items (Thm 5.1): √K(μ̂−μ) ⇒ N(0,σ²I); E[max|μ̂_i−μ_i|] = O(√(log K/K)). Erdős–Rényi consistency needs only p_K ≥ (1+c)log K/K (Thm 5.2).
- Cardinal LSE needs only a connected graph vs Bradley–Terry's strong-connection condition (every partition must have a cross-win) — works on much sparser graphs.

## Data sources named
Simulations (complete/path/cycle/star/wheel/tournament graphs; Gaussian, t3, t2 errors; m=10–1000; K=100–500) — 1,000 runs; NBA 2022–23: 1,320 regular-season games, 30 teams, from basketball-reference.com (outcome = point spread; covariates = home indicator, 2020–21 and 2021–22 standings). R code: https://github.com/rahulstats/GLM-I.

## Findings (numbers and facts, not vibes)
- Graph topology study: path graph most variable, complete graph least; star/wheel/knockout near-complete; central vertices estimated most precisely.
- Covariate omission costs efficiency: at m=1000 with small merit spacing, P(correct ranking) ≈0.4 with covariates vs ≈0.1 without.
- NBA 2022–23: Models I (no covariates) and II (+home) give identical rankings; models III/IV (+past standings) differ by Cayley distance 23 from I/II (I–II distance 0, III–IV distance 8) — omitting covariates gives an "improper ranking" when the schedule isn't orthogonal to them.
- Bootstrap rank variability: Boston IQR (1,2) in Model I vs (2,7) in Model IV; Oklahoma City (11,19) in I vs (3,6) in IV; middle-ranked teams most variable.
- Counter-example: path graph 1−2−3−4 with n_12=n_34→∞ but n_23=1 ⇒ λ₂≤1, LSE inconsistent despite all teams playing many games — cross-conference sparse comparison is the NFL analogue (INFERENCE).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: λ₂(N) algebraic-connectivity diagnostic quantifies whether a 17-game NFL schedule identifies every pairwise team-strength difference — early-season ratings get honestly wide SEs instead of false-precision point estimates.
- TRUST-SIGNAL: publishing team strengths WITH correct standard errors (Var=σ²N⁺) and pairwise z-tests ("KC > BUF at 95% confidence, schedule-adjusted") is a differentiator; also formal gate proving the home-field covariate must NOT be dropped (Thm 4.3, NBA distance-23 precedent).
- OTHER (ratings engine): first consistent/normality theory for Massey-type ratings; χ² battery for "are these teams really different"; A/D-optimality over remaining schedule → "highest-leverage games for rating precision" content lane.

## Engine-actionable? (yes/no + one-line what)
Yes — build the LS rating engine with N⁺ precision (strengths + SEs + pairwise z-tests), enforce the home-covariate gate via XᵀM/n, and ship a weekly λ₂ connectivity diagnostic so early-season estimates carry honest uncertainty.

# arxiv-program/research/2026-09-21/arxiv-deep/1449-least-squares-cardinal-paired-comparisons.md
## What it is (1-2 sentences)
Ledger note for arXiv:2401.07018v3 (R. Singh, Iliopoulos, Davidov, 2025), a 69-page theory paper giving the first rigorous consistency/normality/rank-convergence theory for least-squares (Massey-type) ratings from cardinal paired comparisons, plus a covariate-omission gate and Hotelling-type hypothesis tests. Verdict: ADAPT — the graph-Laplacian precision engine (Var(μ̂)=σ²N⁺) fills a real gap in GSE's LS ratings.

## Key metrics/methods (formulas where given, else "not specified")
Model: Y_ijk = μ_i − μ_j + ε_ijk (score differentials), LSE μ̂ = argmin{Q(μ): vᵀμ=0}, Q = ΣΣ(Y_ijk−(μ_i−μ_j))².
- Closed form: **μ̂ = N⁺S − (vᵀN⁺S/vᵀ1)1** (Thm 2.1, eq. 6), unique iff comparison graph G connected; N = graph Laplacian (N_ii=Σ_j n_ij, N_ij=−n_ij), S_i=Σ_jΣ_k Y_ijk.
- **Var(μ̂) = σ²N⁺** (eq. 7); MSE = σ²trace(N⁺). Scaled-graph study: path graph most variable, complete least; central vertices estimated more precisely.
- Consistency (Thm 3.1): Var(μ̂_n)→0 iff Cond 3.1 — min comparisons along some spanning tree →∞; **Var(μ̂_{i,n}) = O(1/m)**, m = max_T min_{(i,j)∈T} n_ij (eq. 9); equivalently algebraic connectivity λ₂(N)→∞; λ₂ = O(m). Counter-example: path 1−2−3−4 with n_12=n_34=k→∞ but n_23=1 ⇒ λ₂≤1 ⇒ inconsistent despite every n_i→∞.
- Asymptotic normality: √n(μ̂_n−μ)⇒N(0,σ²Θ⁺) under Cond 3.2 (Thm 3.3); under 3.1 alone √m(μ̂_n−μ)⇒N(0,σ²Ψ) (Thm 3.4). Rank consistency: P(r̂(μ̂)≠r(μ))→0, exponential rate ≤C₁exp(−nC₂) under subgaussian errors (Thm 3.5).
- With covariates Y_ijk = μ_i−μ_j + x_ijkᵀβ + ε: **β̂ = (Xᵀ(I−MN⁺Mᵀ)X)⁻¹Xᵀ(I−MN⁺Mᵀ)Y** (eq. 22), **μ̂ = N⁺(S−MᵀXβ̂)** (eq. 21).
- **Covariate-omission gate (Thm 4.3)**: omitting covariates is asymptotically safe iff **XᵀM/n = o(1)** (near-orthogonality of schedule and covariates); bias vanishes entirely if MᵀX/√n=o(1). A covariate with x_ijk = z_i−z_j is unidentifiable (Prop 4.1). Balanced round-robin + home indicator ⇒ home can be dropped safely; unbalanced schedules ⇒ it cannot.
- Hotelling-type χ² tests (eqs. 13–14) for "all teams equal", pairwise "A > B", with graph-correct standard errors.
- K→∞: consistency+normality need only p_K ≥ (1+c)log K/K on Erdős–Rényi graphs (Thm 5.2); cardinal LSE works on much sparser graphs than Bradley–Terry (BT additionally needs the strong-connection condition for MLE existence).

## Data sources named
- Simulations: complete/path/cycle/star/wheel/tournament graphs, K=8, merits (−7,−5,−3,−1,1,3,5,7)×10^{−γ}, γ∈{0,1,2}, m∈{10,…,1000}, errors N(0,1), T3/√3, T2; large-graph K∈{100,…,500}.
- NBA 2022–23: 1,320 regular-season games, 30 teams, point spreads, from basketball-reference.com; covariates: home indicator, 2020–21 and 2021–22 standings. R scripts: https://github.com/rahulstats/GLM-I.

## Findings (numbers and facts, not vibes)
- MSE decays with m for Gaussian and t3 errors (Gaussian smaller, gap largest at small m); t2 errors (no variance) still consistent but slower with spiky empirical MSE.
- Correct-ranking probability →1 as m grows; small merit spacing (γ=2) is hard; at m=1000, γ=2, P(correct ranking) ≈0.4 with covariates vs ≈0.1 without — omission is consistent but materially less efficient.
- NBA 2022–23: Models I (no covariates) and II (+home) give identical rankings; III/IV (+past standings) similar to each other but **Cayley distance 23** from I/II (Table 2: I–II 0, III–IV 8, cross 23) — omitting covariates gives an improper ranking here because Thm 4.3 near-orthogonality fails.
- Bootstrap rank variability: middle-ranked teams most variable — Boston IQR (1,2) in Model I vs (2,7) in Model IV; Oklahoma City (11,19) vs (3,6); Model IV slightly less variable overall.
- Limitations: linear transitivity assumed (cyclical structure out of scope); no held-out forecasting test vs Elo/BT (NBA section is illustrative, no Brier/log-loss); Cauchy errors → inconsistent; Cond 3.2 needs all tree-edge counts to grow at the same rate (approximated across NFL seasons, not within one).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the #1 adapt — build GSE's LS (Massey-type) rating engine with Var(μ̂)=σ²N⁺ standard errors on every team strength and every pairwise difference; early-season ratings get honestly wide CIs via the λ₂(N) algebraic-connectivity diagnostic instead of naked point estimates.
- OTHER: the Thm 4.3 gate settles GSE's home-field covariate decision formally — NFL's unbalanced schedule fails XᵀM/n=o(1), so the home covariate must stay (NBA distance-23 precedent); same gate applies to rest-day/altitude covariates.
- OTHER: the Hotelling χ² battery gives a principled "is team A really better than team B" test for matchup content, with schedule-aware SEs; Thm 3.5's exponential bound can underwrite top-4 tier-confidence claims (with a subgaussian-error check on NFL margins, else bootstrap rank intervals).
- OTHER: improvement experiment — A-optimality over remaining schedule ("which games most reduce trace(σ²N⁺)") as a content feature, and a Huber-robust LSE test (adopt if spread MAE improves ≥0.15 points).
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the N⁺ precision engine on nflverse 2014–2025: report LS team strengths with SEs, pairwise z-tests, keep the home covariate (Thm 4.3 gate), and track λ₂(N) weekly; acceptance = 95% CI coverage at 93–97% on held-out pairwise differences plus Brier/MAE wins vs current ratings on 3 season-group walk-forward (per ledger's reproducible test).

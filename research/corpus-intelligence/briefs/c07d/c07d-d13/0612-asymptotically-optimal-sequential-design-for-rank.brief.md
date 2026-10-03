# arxiv-program/research/2026-09-21/arxiv-deep/0612-asymptotically-optimal-sequential-design-for-rank.md
## What it is (1-2 sentences)
A theoretical treatise (arXiv:1710.06056v1, Chen, Chen & Li 2017) on asymptotically optimal sequential design for rank aggregation: adaptively choosing which pair of items to compare next, when to stop, and how to rank, to minimize expected Kendall's tau distance plus comparison cost c·T as c→0. Verdict in file: REJECT for the prediction stack, ADAPT one sub-result only (Lemma 5's exponential MLE deviation bound as a ratings-convergence diagnostic).
## Key metrics/methods (formulas where given, else "not specified")
- Loss (Eq. 1.1): Σ_{i<j} I(θ_i>θ_j)I(R_i>R_j) + I(θ_i<θ_j)I(R_i<R_j) + cT (Kendall's tau distance + sampling cost).
- Pair selection A_p: ε-greedy — w.p. 1−p solve saddle-point D(θ) = max_{λ∈Δ} min_{θ̃: r(θ̃)≠r(θ)} Σ_{(i,j)} λ^{i,j} D^{i,j}(θ‖θ̃) (Eq. 3.6), w.p. p explore uniformly; p ∝ |log c|^{−1/2+δ_0}, p = o(1).
- Stopping T_2 (Eq. 3.4): inf{n>1 : min_{(i,j)∈A} |sup_{θ∈W_{i,j}} l_n(θ) − sup_{θ∈W_{j,i}} l_n(θ)| ≥ h(c)}; h(c) = |log c|(1+|log c|^{−α}), α∈(0,1).
- Decision R = r(θ̂^{(T)}) (rank of MLE, Eq. 3.5).
- Theorem 1 (Eq. 3.13): liminf_{c→0} V*_c(ρ)/(c E t_c(Θ)) ≥ 1. Theorem 2: E L_K({R_{i,j}}) = O(c). Theorem 3: limsup_{c→0} E T_i / E t_c(Θ) ≤ 1.
- Lemma 5: P_θ(sup_{n≤t≤m} ‖θ̂^{(t)}−θ‖ ≥ ε_1) ≤ e^{−Ω(n ε_λ² ε_1⁴)} × O(m^K), for n ε_λ² ε_1⁴ → ∞.
## Data sources named
No real data. Synthetic simulations: Study I — K=3 items, θ uniform on W = {‖θ‖∞ ≤ 2, |θ_i − θ_j| ≥ 0.4}, θ_1 = 0; costs c ∈ {2⁻⁵, 2⁻¹⁵, …, 2⁻⁷⁵} (8 orders of magnitude). Study II — K=3, K=4, ‖θ‖∞ ≤ 4, gaps ≥ 0.2, support unknown (M=5 discretization). Comparison outcome models: Bradley–Terry / Thurstone / Luce family.
## Findings (numbers and facts, not vibes)
- Study I (Fig. 1): V̄/(c·E t_c(Θ)) stays above 1 and decays toward 1 as |log c| increases, for both stopping rules — asymptotic optimality holds numerically.
- Study II (Fig. 2): proposed policies perform similarly and substantially outperform randomized and Wald-statistic greedy fixed-length competitors (qualitative curves only; no numeric tables in text).
- Bound vacuity at scale: Lemma 5's O(m^K) term is vacuous at K=32 (NFL teams); tests only K=3–4 with enforced minimum score gaps (0.4/0.2), i.e., the regime where ranking is easy.
- The entire decision framework assumes control over data collection (which pair to compare next, when to stop); a fixed 272-game schedule has no such lever.
- File's implementation spec: compute the Lemma-5-style concentration proxy (minimum pair-selection probability ε_λ over the season schedule → rate n·ε_λ²·ε_1⁴) per week w, correlate with out-of-sample log loss on weeks > w; success = proxy predicts the log-loss plateau week (±1 week) in ≥70% of seasons; acceptance gate ≥7 of 10 seasons (2015–2025).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing lane): Lemma 5 as a "ratings have converged" gate for early-season bet sizing — directly serves the calibration/sizing program by replacing the "ratings converge by Week 6" heuristic with a principled, schedule-dependent concentration diagnostic; complements the conformal/uncertainty lane (CQR, Clopper-Pearson).
- OTHER (ratings methodology): the saddle-point pair-selection idea (max_λ min_{rank-flip} Σ λ^{i,j} KL^{i,j}) suggests an improvement experiment — reframe "which pair to compare" as "which games to upweight" via minimax-optimal game weighting each week, tested against recency weights on walk-forward log loss.
## Engine-actionable? (yes/no + one-line what)
yes — implement Lemma 5 as a closed-form early-season ratings-convergence diagnostic (half a day) to gate bet sizing before ratings concentrate.

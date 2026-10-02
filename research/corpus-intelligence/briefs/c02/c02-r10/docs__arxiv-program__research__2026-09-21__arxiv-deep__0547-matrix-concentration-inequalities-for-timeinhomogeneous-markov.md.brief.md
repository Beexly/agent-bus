# docs/arxiv-program/research/2026-09-21/arxiv-deep/0547-matrix-concentration-inequalities-for-timeinhomogeneous-markov.md

## What it is (1-2 sentences)
A pure-probability paper (Zanetti, Univ. of Bath, arXiv:2605.24445v1) proving matrix Chernoff-type concentration bounds for time-inhomogeneous Markov chains under Ollivier–Ricci positive curvature; its §5 application is a complete theoretical analysis of Elo tracking under a dynamic Bradley–Terry model with evolving skills. Verdict in file: ADAPT — the Elo tracking-error decomposition and optimal step-size rule η = Θ(√Δ) are directly usable for tuning GSE's online rating systems.

## Key metrics/methods (formulas where given, else "not specified")
- Theorem 7: P(λ_max(Σ(F_j(X_j)−EF_j(X_j))) ≥ nε) ≤ m^{2−π/4} exp(−nε²/(2v²)), v² = (192/π²)L²D²/κ — sub-Gaussian with variance proxy O(L²D²κ^{−1}).
- Theorem 8: same with v̄² = (3200/π²)Δ_op²κ^{−1}(1+log(LD/Δ_op)) — logarithmic diameter dependence.
- Elo curvature: κ = (1/8)·η·e^{−4M}·λ, where λ = min over environments of the matchup-Laplacian spectral gap (how fast result information propagates through the matchup graph).
- Expected tracking (Lemma 27): E‖X^t−ρ^t‖²_2 ≤ (1−κ)^{t−1}‖X^0−ρ^1‖²_2 + Δ/κ + 2η²/κ, where drift Δ bounds E[‖ρ^{t+1}−ρ^t‖²_2 + 4M‖ρ^{t+1}−ρ^t‖_1 | F_t] ≤ Δ.
- High-probability tracking (Theorem 28): after burn-in t ≥ Cκ^{−1}log(nMε^{−1}η^{−1}), P(‖X^t−ρ^t‖_2 ≥ √(Δ/κ) + (1+ε)√(2η²/κ) + CεB/√κ) ≤ 2e^{−ε²}, B = 2√2η + 2h_ρ + 4√2h_q.
- Averaged Elo (Theorem 29): for T ≥ Cε^{−2}η^{−2}M²n log(n/δ), w.p. ≥ 1−δ: ‖(1/T)ΣX^k − (1/T)Σρ^k‖_2 ≤ √(Δ/κ) + (1+ε)√(2η²/κ).
- Optimal step size: since κ ∝ η, the tracking bound is minimized at η = Θ(√Δ) — small enough to minimize bias, large enough to track drift.
- Elo update schema: X̂^t_I ← X^{t−1}_I + ησ(X^{t−1}_J − X^{t−1}_I) (loser mirrored), then orthogonal projection onto [−M,M]^n ∩ {x ⊥ 1}; step-size condition η ≤ ν/2.
- Proof technique: Garg–Lee–Song–Srivastava many-matrix Golden–Thompson trace inequality + inhomogeneous extension of Lezaud's "direct method" (iterative centering).

## Data sources named
- Theory paper — no empirical dataset, no sports data; the Elo application is fully analytic.

## Findings (numbers and facts, not vibes)
- Tracking-error decomposition: √(Δ/κ) drift term + √(η²/κ) variance term — raises/lowers the classic static-Elo ≈ η²/κ result by a (B²+Δ²)/κ dynamic correction vs Olesker-Taylor & Zanetti (2024) static analysis. [SCHEME, OTHER]
- Optimal step size η = Θ(√Δ) — a concrete K-factor scaling law for online ratings under drifting skills. [SCHEME, OTHER]
- Averaged Elo over T ≳ ε^{−2}η^{−2}M²n log(n/δ) weeks concentrates on averaged true skill without needing granularity bounds — a theorem-level justification for trailing-average published power ratings. [SCHEME, OTHER]
- Curvature decays exponentially in the rating bound M (κ ∝ e^{−4M}) — practical caution: for realistic M the constants are loose, so rates (not constants) are the usable guidance. [TRUST-SIGNAL, OTHER]
- NFL matchup connectivity λ is small (17-game schedules → sparse comparison graph → small λ → slow tracking); the theory prescribes raising η in sparse-schedule regimes, with the κ^{−1} dependence showing the bound degrades fast. [SCHEME, TRUST-SIGNAL, OTHER]
- The environment-independence assumption is strong: true-skill drift correlating with observable events (injuries, QB changes) is not modeled. [TRUST-SIGNAL, OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Drift-calibrated K-factor: estimate weekly skill drift Δ̂ from nflverse batch-BT fits and set online Elo step η = c·√Δ̂ instead of a fixed K — the paper's decomposition predicts this minimizes tracking error; largest gains expected in high-drift seasons. (SCHEME, OTHER)
- Schedule-aware refinement: NFL schedules are fixed in advance — replace the worst-case min-connectivity λ with the actual season's schedule-Laplacian spectral gap λ_sched (computable exactly), tightening κ. (SCHEME, OTHER)
- State-dependent drift: make Δ_t = f(injury/news features) so η_t = c√Δ_t adapts within the season — raise K after a starting-QB injury, lower in stable stretches (the paper's framework supports time-dependent bounds). (QB-BEHAVIOR, SCHEME, OTHER)
- No existing corpus entry analyzes online Elo tracking under drifting skills — the first dynamic-tracking theory for the weekly rating systems GSE runs; pairs with phantom-player regularization (stabilizes estimation) by stabilizing tracking over time. (SCHEME, OTHER)

## Engine-actionable? (yes/no + one-line what)
yes — Replace fixed K-factor with drift-calibrated η = c√Δ̂ (Δ̂ from nflverse weekly batch-BT drift, c tuned 2018–2019); adopt trailing-averaged publication ratings per Theorem 29; accept if next-week SU log-loss beats fixed-K Elo by ≥ 0.002/game over 2020–2024.

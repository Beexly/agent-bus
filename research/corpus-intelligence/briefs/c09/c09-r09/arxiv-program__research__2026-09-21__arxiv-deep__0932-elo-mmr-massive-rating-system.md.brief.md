# arxiv-program/research/2026-09-21/arxiv-deep/0932-elo-mmr-massive-rating-system.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2101.00400 (Ebtekar & Liu, 2021), "An Elo-like System for Massive Multiplayer Competitions," which proposes Elo-MMR — a robust, provably-incentive-aligned Bayesian rating system for massive ranked competitions. The ledger adapts it to NFL team-strength ratings with bounded per-game updates and pseudodiffusion time decay.
## Key metrics/methods (formulas where given, else "not specified")
- Elo-MMR: Phase 1 estimates each player's round performance as the unique zero of Q_i(p) = Σ_{j≻i} l_j(p) + Σ_{j∼i} d_j(p) + Σ_{j≺i} v_j(p) (Theorem 3.3), weighting wins/losses/ties by opponent-strength functions.
- Phase 2 (MAP belief update): minimize L(s) = L_2((s−p_0)/β_0) + Σ_k L_R((s−p_k)/β_k), L_2(x)=x²/2, L_R(x)=2 ln(cosh(πx/√12)); robust weighted average μ_t = Σ_k w_k p_k / Σ_k w_k with w_k = π/((μ_t−p_k)β_k√3)·tanh((μ_t−p_k)π/(β_k√12)).
- Uncertainty: 1/σ_t² = Σ_k 1/β_k² (eq. 8).
- Skill evolution: Elo-MMR(ρ) pseudodiffusion with κ = (1 + γ_t²/σ_{t−1}²)^{-1}; w_0^new = κw_0 + (κ−κ^{1+ρ})Σw_k; w_k^new = κ^{1+ρ}w_k; ρ∈(0,∞) provably satisfies six properties (Theorem 4.1).
- Robustness bounds (Theorem 5.7): Δ+ = lim_{p_t→+∞} μ_t−μ_{t−1} is bounded — extreme performances cannot move ratings arbitrarily.
- Metrics: pair_inversion = #correctly predicted matchups/(|P_t|−1)×100%; rank_deviation = |actual_rank − predicted_rank|/(|P_t|−1)×100%.
## Data sources named
Four datasets from inception to 2020-10-12: Codeforces (1087 contests, avg 2999 participants; 850K+ users, 300K+ rated), TopCoder (2023 contests, avg 403; 1.4M users), Reddit SubredditSimulator (top-1000 threads), Synthetic (10K players, Gaussian generative model, 50 rounds). Code: https://github.com/EbTech/EloR/ (open source).
## Findings (numbers and facts, not vibes)
- Predictive accuracy (pair-inv / rank-dev): Codeforces — Elo-MMR(ρ) 78.6%/14.7% (best); TrueSkill collapsed to 61.7%/25.4%. TopCoder — ρ 73.1%/18.2% (best). Reddit/synthetic: all systems ≈ tied.
- Runtime for whole Codeforces dataset: CF 212.9s, TrueSkill 67.2s, Elo-MMR(ρ) 35.4s, Elo-MMχ 31.4s (≈6.8× faster than Codeforces production; the abstract's "order of magnitude" claim slightly overstates tabled 6×).
- ρ∈[0,1] all gave very similar results in practice.
- TrueSkill ≈ Elo-MMR when distinct ranks < ~60, explaining its collapse on large-ranked fields.
- Documents the Glicko-2/TopCoder volatility-farming exploit (intentional underperformance to amplify future gains) — a caution for any volatility-weighted engine component.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine architecture): robust NFL team ratings — logistic performance model with bounded per-game rating changes; pseudodiffusion γ time-decay replaces ad-hoc recency weights; σ_t propagates as team-strength uncertainty into the calibration layer.
- OTHER (risk/governance): the volatility-farming exploit is a direct warning against "hot team" momentum multipliers or variance-scaled updates in the engine.
## Engine-actionable? (yes/no + one-line what)
Yes — build weekly Elo-MMR(ρ) NFL team ratings on standardized (margin − spread) or EPA/play differential with logistic heavy-tail updates; numeric gate: log-loss ≥0.01 better than baseline Elo on 2022–2025 walk-forward AND ≥30% smaller rating swings after blowout games (|margin−spread| > 21).

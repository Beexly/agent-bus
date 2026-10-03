# docs/arxiv-program/research/2026-09-21/arxiv-deep/0588-learning-to-identify-top-elo-ratings.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2201.04480v2 (Yan et al. 2022) casting top-player identification as a dueling-bandits problem: MaxIn-Elo / MaxIn-mElo maintain a UCB candidate set and always schedule the maximum-uncertainty pair, replacing per-round MLE refits with online batch SGD (constant time/memory in T) while keeping a Õ(√T) regret bound. Verdict: ADAPT — the scheduler is portable to GSE's evaluation-budget allocation and pick-selection, but only with contextual features, time-varying strengths, and time-forward NFL validation added.

## Key metrics/methods (formulas where given, else "not specified")
- Elo model (Eq. 2): p̂_xy = σ(r_x − r_y), σ(x) = 1/(1+e^{−x}); Elo cross-entropy loss (Eq. 3); standard SGD Elo update (Eq. 4): r_x^{t+1} ← r_x^t + η(o_{xy}^t − p̂_{xy}^t).
- Cumulative regret (Eq. 5): R(T) = Σ_{t=1}^T [r*_{x*} − ½(r*_{x_t} + r*_{y_t})].
- Batch projected SGD (Eq. 8): r̃_j ← Π_C(r̃_{j−1} − η_j ∇_r l_{j,τ}(r̃_{j−1})), η_j = 1/(αj), r̄ = (1/j)Σ r̃_q.
- UCB pair score (Eq. 9): h(x_t,y_t) = r̄_{x_t} − r̄_{y_t} + γ‖e_{x_t} − e_{y_t}‖_{V_t^{−1}}; candidate set (Eq. 10): S = {x | h(x,y) > 0, ∀y ≠ x}; max-uncertainty selection (Eq. 11): (x_t,y_t) = argmax_{(x,y)∈S×S} ‖e_x − e_y‖_{V_t^{−1}}.
- mElo prediction (Eq. 12): p̂_xy = σ(r_x − r_y + c_xᵀΩ_{2k×2k}c_y); mElo SGD updates (Eqs. 18–20); mElo UCB score (Eq. 13).
- Regret bound (Theorem 1): R(T) ≤ τΔ_max + (2+τ)g_1(T)√(2nT log((2τ+T)/n)) + 4g_2(J)√(τT), w.p. ≥ 1−10/T; R(T) ∼ Õ(√T).
- Complexity (Table 1): MaxIn-Elo O(n²T) time, O(n²) memory vs MaxInP O(nT²+n²T) time, O(nT) memory — memory constant in T.

## Data sources named
- Twelve real-world games from Czarnecki et al. (2020), mostly OpenSpiel: transitive (Transitive game, Triangular game, Elo game + noise 0.01/0.05/0.1; 100 policies, top SSCC size 1) and intransitive (Kuhn-poker 64 policies/SSCC 64, AlphaStar 100/SSCC 1, tic_tac_toe 100/SSCC 2, hex 3×3 100/SSCC 2, Blotto 100/SSCC 99, 5,3-Blotto 21/SSCC 18). A 4×4 "2 Good, 2 Bad" game for the α-IG comparison. Code: https://github.com/yanxue7/MaxIn-Elo.git (local availability not verified).

## Findings (numbers and facts, not vibes)
- 4×4 game: MaxIn-Elo highest convergence rate on both RR and cumulative regret; regret "close to 0".
- Transitive games: MaxIn-Elo "significantly outperforms all other baselines on five games and achieves similar performance on Triangular game"; RR converges to 1 on four games; on Transitive game RR up to 0.6, on Elo game + noise=0.1 RR up to 0.8; on Elo game and noise=0.01/0.05 variants regret "closed to convergence at around 500 rounds".
- Intransitive games: MaxIn-mElo "has the lowest cumulative regret and the highest RR on all six games"; RR reaches 1 except Blotto (top SSCC 99 + low-rank rotation approximation).
- Hyperparameters: τ = 0.7n best starting point; γ = 0.6 best top-1 on Elo games/Triangular (γ = 0.4 "misidentifies the best player" on Elo game); mElo dimension C = 8 best, "performance drops when C = 16"; τ = 1 "bad performance".
- Stated limitations: no contextual features (limitation #1), static skills assumed (Ethical Statement admits unrealistic for humans), top-1 focused not top-k (limitation #2).
- Per-seed metric tuning: hyperparameters chosen "with the best RR performance for each random seed" — reported margins are optimistic.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- UCB candidate-set + maximum-uncertainty pair selection: new capability in corpus (no active pair-selection/scheduling layer over GSE ratings): OTHER.
- ‖e_x − e_y‖_{V_t^{−1}} uncertainty norm as first-class per-team "rating uncertainty" display: TRUST-SIGNAL (addresses the map's ranking-uncertainty gap).
- Contextual extension (features the paper lacks) for weekly pick sheets: arms = candidate picks, reward = realized profit vs closing line: OTHER.
- Bandit-selection bias warning: naive reuse of adaptively oversampled pairs biases the likelihood unless importance-weighted: TRUST-SIGNAL.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the MaxIn scheduler as an evaluation-budget allocator (spend sim/ablation budget on argmax uncertainty-norm pairs among playoff-relevant teams, τ ≈ 22, γ ≈ 0.6) and prototype the V_t^{−1} uncertainty-norm display; acceptance gate: synthetic test reaches RR=1 with ≥30% fewer rounds in 4 of 5 seeds, and real-data pilot ≥ baseline top-4 identification accuracy vs end-of-season futures in ≥3 of 5 seasons 2020–2024.

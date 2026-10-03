# docs/arxiv-program/research/2026-09-21/arxiv-deep/0588-learning-to-identify-top-elo-ratings.md
## What it is (1-2 sentences)
A research-ledger deep read of arXiv:2201.04480v2 — MaxIn-Elo/MaxIn-mElo, a dueling-bandit match scheduler that identifies top Elo players with fewer samples by selecting maximum-uncertainty pairs from a UCB candidate set, while replacing per-round MLE refits with online batch SGD (constant-in-T memory) and proving a Õ(√T) regret bound. Verdict: ADAPT — port the scheduler to GSE's evaluation-budget allocation and pick selection, not to NFL game scheduling (the schedule is fixed).
## Key metrics/methods (formulas where given, else "not specified")
- Elo prediction: p̂_xy = σ(r_x − r_y) (Eq. 2); cross-entropy loss (Eq. 3); SGD update r_x^{t+1} ← r_x^t + η(o_xy^t − p̂_xy^t) (Eq. 4).
- Batch projected SGD: r̃_j ← Π_C(r̃_{j−1} − η_j∇l_{j,τ}(r̃_{j−1})), η_j = 1/(αj) (Eq. 8); running average r̄ = (1/j)Σ r̃_q; batch size τ ≈ 0.7n per Eq. (14).
- UCB pair score: h(x_t,y_t) = r̄_{x_t} − r̄_{y_t} + γ‖e_{x_t} − e_{y_t}‖_{V_t^{−1}} (Eq. 9); V_t = Σ(e_{x_i}−e_{y_i})(e_{x_i}−e_{y_i})ᵀ pair-history covariance.
- Candidate set: S = {x | h(x,y) > 0, ∀y ≠ x} (Eq. 10); selection (x_t,y_t) = argmax_{(x,y)∈S×S} ‖e_x − e_y‖_{V_t^{−1}} (Eq. 11).
- Regret: R(T) = Σ[r*_{x*} − ½(r*_{x_t} + r*_{y_t})] (Eq. 5); Theorem 1 bound R(T) ~ O(n log T √T) = Õ(√T) w.p. ≥ 1 − 10/T.
- mElo extension: p̂_xy = σ(r_x − r_y + c_xᵀΩc_y) (Eq. 12); cyclic-vector SGD updates (Eqs. 18–20); mElo UCB (Eq. 13).
- Complexity (Table 1): MaxIn-Elo Õ(√T) regret, O(n²T) time/round, O(n²) memory vs MaxInP O(nT²+n²T) time, O(nT) memory; DBGD O(T^{2/3}).
- Key assumptions: static true skills (flagged as unrealistic for humans), no features, sufficiently large best-vs-second-best gap Δ > g_1(T)C.
## Data sources named
Twelve real-world games from Czarnecki et al. (2020) "Real World Games Look Like Spinning Tops," mostly on OpenSpiel: transitive (Transitive game, Triangular, Elo game + Gaussian noise 0.01/0.05/0.1, 100 policies each); intransitive (Kuhn-poker 64 policies, AlphaStar 100, tic_tac_toe 100, hex 3×3 100, Blotto 100, 5,3-Blotto 21). Code: github.com/yanxue7/MaxIn-Elo.git (local availability unverified).
## Findings (numbers and facts, not vibes)
- 4×4 "2 Good, 2 Bad" game: MaxIn-Elo has highest RR and regret convergence; cumulative regret "close to 0."
- Transitive games: MaxIn-Elo significantly outperforms all baselines on 5 of 6 games, similar on Triangular; RR converges to 1 on four games; RR up to 0.6 on Transitive game and up to 0.8 on Elo game + noise=0.1 (top player ranked ≤2nd); cumulative regret converges around 500 rounds on Elo game + noise 0.01/0.05 variants; once converged, S contains only the top player and regret stops increasing.
- Intransitive games: MaxIn-mElo has lowest cumulative regret and highest RR on all six games; RR reaches 1 on all except Blotto (top SSCC=99); still better than all baselines on Blotto.
- Top-1: MaxIn-Elo best on all games; top-k comparable (larger γ → better top-k, worse top-1).
- Ablations: best top-1 at γ=0.6 on Elo games/Triangular (γ=0.4 misidentifies the best player on Elo game); γ=1.2 worse than γ=1 for top-k; mElo dimension C=8 best, drops at C=16; τ=1 bad, τ=0.5n–1.0n satisfactory, τ=0.7n best on Kuhn-poker, τ=4n/8n degrade.
- Hyperparameters were grid-searched per seed on the evaluation metric itself (RR) — reported margins are optimistic.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Maximum-uncertainty pair selection for simulation/evaluation budget scheduling (OTHER — compute allocation).
- Contextual dueling-bandit pick selection with QB/injury/rest/weather features (OTHER — pick pipeline).
- V_t^{−1} uncertainty norm as a first-class ranking-uncertainty display (TRUST-SIGNAL).
- Static-skill/no-feature assumptions violate NFL reality — needs contextual, non-stationary, time-forward validation (OTHER — caveat).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the MaxIn scheduler to allocate Monte Carlo/engine-eval budget to the least-observed playoff-relevant team-pair matchups (τ≈22, γ≈0.6 starting points), reuse the V_t^{−1} norm as a published rating-uncertainty signal, and extend to a contextual dueling bandit for weekly pick selection with time-forward backtesting.

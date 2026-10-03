# arxiv-program/research/2026-09-21/arxiv-deep/0940-elo-misspecification-regret-sparsity.md
## What it is (1-2 sentences)
Ledger read of arXiv:2502.10985 (Tang, Wang & Jin, Princeton, 2025), a study of why Elo beats more complex rating systems under model misspecification — Elo is online gradient descent on convex log-loss with a regret bound, so simple ratings dominate in sparse data. Verdict: ADAPT — not a new algorithm but a model-selection doctrine: the t/N sparsity rule licenses GSE's simple team ratings and warns against pairwise/matchup-style complexity.
## Key metrics/methods (formulas where given, else "not specified")
- Elo: p_t = σ(θ_t[i_t]−θ_t[j_t]); θ_{t+1}[i] ← θ_t[i] + η_t(o_t−p_t); BT: P(o_t=1|i,j) = σ(θ*[i]−θ*[j]).
- Regret lens: ℒ_T = Model misspecification error + Regret_T.
- Theorem 1: OGD with η_t = D/(G√t) gives Regret_T ≤ (3/2)GD√T; for Elo, empirical ‖θ‖_∞ ≤ 5 → D=10√N, G≤√2, so (1/T)Regret_T ≤ C√(N/T) with η_t = √(N/t) — holds under misspecification and non-stationarity.
- Hessian ∇²f_t = p_t(1−p_t)(e_i−e_j)(e_i−e_j)ᵀ ⪰ 0 (convexity); Elo2k loss is non-convex — no OGD guarantee.
- BT rejection test: logistic-regression form of BT with 2D augmentation, likelihood-ratio Λ ~ χ²₂ (Wilks; Sur et al. 1.25χ²₂ high-dim correction); plus a martingale test using online Elo ratings (robust to adaptive matchmaking).
- Elo2k (k=4, vector ratings): p_t = σ(u_iᵀv_j − u_jᵀv_i). Pairwise baseline: regularized (5+wins)/(10+games), N(N−1)/2 params.
## Data sources named
8 real datasets: Renju (N=5k, 2T/N=49.8), Chess Lichess 2014 (185k, 125.4), ATP tennis (7k, 52.5), Scrabble (15k, 200.7), StarCraft Aligulac (22k, 38.7), Go OGS (426k, 60.4), LLM Arena (129, 23156.9), Hearthstone archetypes (27, 4626.1). Dense variants: mixedchess-dense (N=2862, T=11.79M), go-dense (N=480, T=516k), Blotto/AlphaStar sparse vs 10× dense. Synthetic: SST/WST transitive matrices, N=100/1000, T=10^5, uniform + Elo-proximity matchmaking (K=N/5), non-stationary P^t.
## Findings (numbers and facts, not vibes)
- BT rejected everywhere: all 8 datasets reject at p < 10⁻⁴ (most < 10⁻¹⁰); martingale test rejects for all 8 at η=0.08.
- Table 2 (avg CE loss): Elo-family best or tied in all 6 sparse datasets — Renju 0.6039 (Pairwise 0.6688), Chess 0.6391, Tennis 0.6242 (Pairwise 0.6820), Scrabble 0.6730, StarCraft 0.5713 (Pairwise 0.6753), Go 0.6443. In dense sets only does Elo2k win (Hearthstone: 0.6847 vs 0.6898).
- Sparsity rule: t/N < 1000 → Elo wins (regret dominates); t/N > 1000 → model capacity wins when Elo2k's hindsight baseline is better. Blotto sparse vs 10× dense: same underlying non-BT model, different winner — sparsity, not model, decides.
- Matchmaking strongly assortative (correlations 0.19–0.57, all p<10⁻¹⁰; Hearthstone −0.07); chess: most games within 20% Elo-percentile; player strengths non-stationary (chess permutation/bootstrap test p=0.01).
- Ranking caution: Example 1 — SST 5-player matrix + matchmaking Q → θ^mle = [5.48, 0.89, 4.60, 0.04, 0] → ranking 1≻3≻2≻4≻5, inconsistent with ground truth; bootstrap CIs confirm. Under WST, average win rate itself may mis-rank.
- Pairwise inconsistency τ strongly correlated with prediction performance.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model-selection doctrine): NFL teams — N=32, T≈285/season → t/N ≈ 9 → extreme-sparse: Elo-family only; no pairwise/head-to-head parameters, no per-QB-matchup matrices. Tennis (Pairwise 0.6820 vs Elo 0.6242 at 2T/N=52.5) is the closest analog.
- OTHER (hyperparameters): replace hand-tuned K with theory-backed schedule η_t = √(aN/(t+b)), initial η ∈ [0.06, 0.23]/C, tuned via the paper's 30-checkpoint + overfitting-penalty criterion.
- TRUST-SIGNAL: since BT is rejected everywhere (including tennis, the closest NFL analog), treat GSE team ratings as predictive rather than structural — evaluate by cumulative CE loss (calibration), never by whether "true skill" is recovered.
- TRUST-SIGNAL (QC): ranking-consistency audit under NFL scheduling — NFL's non-uniform scheduling (6 divisional games, SOS tiers) is the paper's Example-1 signature; check BT-MLE θ* ordering vs average-win-rate ordering for 2020–2025 and flag contradictions; consider publishing the win-rate-consistent ordering.
- OTHER (evaluation): the regret framework argues online/cumulative evaluation is the correct paradigm for rating systems — a second argument for the ledger-0933 time-respecting-CV recommendation.
## Engine-actionable? (yes/no + one-line what)
Yes — run a sparsity audit of all GSE rating lanes (t/N per lane), swap Elo K for the √(N/t) schedule, and add the cumulative-CE-loss harness plus the Example-1 ranking-consistency check on 2020–2025 NFL; 2–3 days.

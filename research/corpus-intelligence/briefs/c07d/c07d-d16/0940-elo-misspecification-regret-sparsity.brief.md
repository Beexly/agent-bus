# arxiv-deep/0940-elo-misspecification-regret-sparsity.md
## What it is (1-2 sentences)
Theory + 8-dataset empirical study (Tang, Wang & Jin 2025, arXiv:2502.10985) asking why Elo beats more complex systems (mElo/Elo2k, pairwise) at prediction despite every dataset rejecting the Bradley-Terry model Elo assumes; answer: Elo = online gradient descent on convex log-loss with a regret bound, and data sparsity (t/N) decides the complexity winner.

## Key metrics/methods (formulas where given, else "not specified")
- Elo: p_t = σ(θ_t[i_t]−θ_t[j_t]); θ_{t+1}[i] ← θ_t[i] + η_t(o_t−p_t) ...(2).
- BT: P(o_t=1|i,j) = σ(θ*[i]−θ*[j]).
- Loss decomposition: ℒ_T = Model misspecification error + Regret_T ...(3).
- Theorem 1: OGD with η_t = D/(G√t) gives Regret_T ≤ (3/2)GD√T; for Elo, empirical ‖θ‖_∞ ≤ 5 → D=10√N, G≤√2, so (1/T)Regret_T ≤ C√(N/T) with η_t = √(N/t). Holds under misspecification and non-stationarity.
- Theorem 2/G.1: under product matchmaking q_ij = q_i q_j (incl. uniform), population BT-MLE θ* induces the same ranking as average win rate; under SST, Elo recovers the true ranking asymptotically.
- Hessian ∇²f_t = p_t(1−p_t)(e_i−e_j)(e_i−e_j)ᵀ ⪰ 0 (convexity). Elo2k loss is non-convex — no OGD guarantee.
- Elo2k (k=4, vector ratings): p_t = σ(u_iᵀv_j − u_jᵀv_i). Pairwise: regularized (5+wins)/(10+games), N(N−1)/2 params.
- BT rejection test: logistic-regression form of BT, train/test split, augmented with 2D features g_t = [θ_train[i_t], θ_train[j_t]] (or u/v for dense sets), likelihood-ratio statistic Λ ~ χ²₂ (Wilks; Sur et al. 1.25χ²₂ correction for high-dim); second martingale test using online Elo ratings as g_t (robust to adaptive matchmaking) rejects all 8 at η=0.08.
- Hyperparameter criterion: choose hyperparameters minimizing L(v)=Σ_{i=1}^{30}(CE_i + 5(CE_i−ln2)𝟙(CE_i>ln2)) — penalizes overfitting; 30 checkpoints.
- Learning-rate schedule: η_t = √(aN/(t+b)), standard η ∈ [10/C≈0.06, 40/C≈0.23] with C=400/ln10.
- Ranking metric: pairwise inconsistency τ; Example 1 (SST 5-player + matchmaking Q): θ^mle = [5.48, 0.89, 4.60, 4.18/0.04, 0] (ledger: [5.48, 0.89, 4.60, 0.04, 0]) → ranking 1≻3≻2≻4≻5 inconsistent with ground truth; bootstrap CIs [4.86,5.33],[0.72,1.17],[4.18,4.68] confirm. Under WST, average win rate itself may mis-rank.
- Numeric gate in ledger (NFL replication): (pairwise/Elo2k-style complexity) worse by ≥0.02 CE loss while plain Elo within 0.005 of best.

## Data sources named
- 8 real datasets (N, 2T/N): Renju (N=5k, 2T/N=49.8), Chess Lichess 2014 (185k, 125.4), ATP tennis (7k, 52.5), Scrabble (15k, 200.7), StarCraft Aligulac (22k, 38.7), Go OGS (426k, 60.4), LLM Arena/Chatbot Arena (129, 23156.9), Hearthstone archetypes (27, 4626.1).
- Synthetic: SST/WST transitive matrices (P_ij=0.6 by-entry; byrow/bydiagonal variants), N=100/1000, T=10^5, uniform + Elo-proximity matchmaking (K=N/5), non-stationary P^t.
- Dense variants: mixedchess-dense (N=2862, T=11.79M), go-dense (N=480, T=516k), Blotto/AlphaStar sparse vs 10× dense copies.
- Public datasets: Lichess, OGS, Sackmann tennis, Aligulac, cross-tables, renju.net, lmsys arena. Experiments in JAX/L-BFGS; no public code.

## Findings (numbers and facts, not vibes)
- BT rejected everywhere (Table 1): p < 10⁻⁴, most < 10⁻¹⁰. Matchmaking strongly assortative (correlations 0.19–0.57, all p<10⁻¹⁰; Hearthstone −0.07); chess: most games within 20% Elo-percentile; player strengths non-stationary (chess permutation/bootstrap test p=0.01).
- Table 2 avg CE loss — Elo-family best or tied in all 6 sparse datasets: Renju 0.6039 (Pairwise 0.6688), Chess 0.6391, Tennis 0.6242 (Pairwise 0.6820), Scrabble 0.6730, StarCraft 0.5713 (Pairwise 0.6753), Go 0.6443. Only in dense sets does Elo2k win: Hearthstone 0.6847 vs 0.6898 (also AlphaStar-dense, go-dense, mixedchess-dense).
- Sparsity rule (empirical, not derived): t/N < 1000 → Elo/Elo2k/pairwise ordering favors Elo (regret dominates); t/N > 1000 → model capacity wins when Elo2k's hindsight baseline is better. Blotto sparse vs 10× dense: same underlying non-BT model, different winner — sparsity, not model, decides.
- Ranking: pairwise inconsistency τ strongly correlated with prediction performance — but Example 1 shows Elo/MLE can be ranking-inconsistent with ground truth under arbitrary matchmaking even under transitivity (SST); the paper offers no corrective algorithm, only the caution.
- Limitations: sparsity-rule crossover is empirical and domain-varying; regret bound requires convex loss + bounded ratings (Elo2k/Pairwise have no guarantee); all datasets are individual-player games — nothing on team sports with roster churn, margin-of-victory signals, or draws; pairwise baseline used crude (5+wins)/(10+games) regularization, which may flatter Elo's margin.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model-selection doctrine — the paper's core value for GSE): since BT is rejected everywhere (including tennis, the closest NFL analog), treat GSE team ratings as predictive rather than structural — evaluate by cumulative CE loss (calibration), never by whether "true skill" is recovered. This aligns with the 750 program's calibration keyword and with ledger 0930's entropy-floor idea (rate the floors, not the rankings).
- OTHER (sparsity gate): compute t/N per GSE rating lane; NFL teams (N=32, T≈285/season → t/N ≈ 9) are extreme-sparse → Elo-family only, no pairwise/head-to-head parameters, no per-QB-matchup matrices; the regret bound says complex models' regret would dominate in this regime. Tennis (Pairwise 0.6820 vs Elo 0.6242 at 2T/N=52.5) is the closest analog. Serves the model-design lane for every sport.
- OTHER (learning rate): replace hand-tuned K with the theory-backed schedule η_t = √(aN/(t+b)), initial η ∈ [0.06, 0.23]/C, tuned per the paper's 30-checkpoint overfitting-penalized criterion.
- OTHER (evaluation paradigm): the whole regret framework argues online/cumulative evaluation is the correct paradigm for rating systems — a second argument for replacing pooled-CV evaluation of GSE rating lanes (echoes the 0933 non-time-respecting-CV caution).
- QB-BEHAVIOR: the ranking-consistency caution is directly relevant — NFL scheduling is non-uniform matchmaking (6 divisional games, strength-of-schedule tiers), and Example 1 shows Elo rankings can contradict transitivity under such matchmaking; the ledger's NFL audit (θ* vs average win rate vs GSE power rankings 2020–2025, flag θ*-ordering/average-win-rate-ordering contradictions) is a concrete QC for published power rankings and playoff-seeding-relevant ranks.
- CONTRADICTION (with 0886 in this same batch): 0886's Elo constants (HFA=40, K=30) are hand-tuned fixed-K values; this paper's η_t = √(N/t) decaying schedule is the theory-backed replacement — flag that fixed-K Elo should be superseded by the schedule, not stacked alongside it.
- Corroboration: 0930 (luck-skill), 0937 (Elo vs UEFA coefficients, Elo wins), and 0932 (logistic Elo-MMR, 6× faster) are all consistent with this paper's thesis — no contradiction.

## Engine-actionable? (yes/no + one-line what)
Yes — (1) t/N sparsity audit of all GSE rating lanes as the model-complexity gate, (2) swap fixed-K Elo for the η_t = √(aN/(t+b)) schedule, (3) cumulative-CE-loss evaluation harness + NFL Example-1 ranking-consistency audit (effort 2–3 days).

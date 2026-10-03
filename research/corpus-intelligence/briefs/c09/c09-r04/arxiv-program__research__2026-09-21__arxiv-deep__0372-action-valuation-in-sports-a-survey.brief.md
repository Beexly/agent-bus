# arxiv-program/research/2026-09-21/arxiv-deep/0372-action-valuation-in-sports-a-survey.md
## What it is (1-2 sentences)
A survey of action valuation (AV) methods across sports (arXiv:2504.06163v1, Xarles et al. 2025), building a nine-dimension taxonomy of 25+ methods and 16 datasets, with a reader verdict of ADAPT. The Motif reader concluded it is the best cross-sport AV taxonomy seen and directly names GSE's gaps (off-ball action valuation, player-aware valuation, credit-assignment horizon, evaluation without ground truth).
## Key metrics/methods (formulas where given, else "not specified")
- AV decomposition: V(A_t) = V(S_{t+1}) − V(S_t) (state-value difference)
- Expectation-based: V(S_t) = E[N_{O{t,t+Δt}} | S_t]; binary-outcome simplification: V(S_t) = P(O{t,t+Δt} | S_t)
- MDP: V(S_t) = E_π[Σ_{τ=0}^∞ γ^τ R(S_{t+τ}, A^π_{t+τ}) | S_t]
- Player score: S_{P_i} = Σ_{a ∈ A_{P_i}} V(a)
- Frameworks: Expectation-Based (VAEP, xT, EPV, Yurko et al. 2019 multinomial logit), MDP (Bellman DP), RL (TD/SARSA, λ-return, distributional TD, actor-critic, IRL)
- Architectures: LSTMs/GRUs, CNN→temporal, GRNN, GNN on dynamic pass networks
- Off-ball valuation: Wu & Swartz 2023 (actual vs expected defender velocity), Dick 2021 (performed vs predicted trajectory), Nakahara 2023 (multi-agent RL reward distribution)
- Evaluation criteria: FIT (held-out loss), CAL (predicted vs observed outcome distributions), RNK (subjective rankings), COR (correlation with standard metrics); proposes forward-game-outcome prediction as objective direction
## Data sources named
Table 1 catalogs 16 AV datasets: StatsBomb (3,433 games), StatsBomb 360 (394 games), Belgian Pro League (430, private), Meiji J1 (55, private), STATS LLC (633, private), Hudl/Spearman (58), Chinese Super League (237), German Bundesliga (54), NHL PBP (9,220, public), SportLogiq (446), NBA optical tracking (784), World Tour badminton (21, public), German handball (15), NFL PBP via Yurko et al. 2019 (public, ~256 games, nflWAR/nflfastR-era), table tennis PBP (152), StatsPerform rugby (1,416)
## Findings (numbers and facts, not vibes)
- NFL AV coverage in the literature is thin: exactly one NFL row (Yurko 2019) of 25+ methods
- EB prediction windows typically 3–15 s or up to 10 actions; RL episodes use γ up to 0.99
- Football averages ~3 goals/game, hockey ~6 — reward-sparsity motivation for AV methods
- Off-ball valuation solutions rest on a handful of papers (Wu & Swartz 2023, Dick 2021, Nakahara 2023); solutions are nascent
- No standardized evaluation framework exists across AV methods (the survey's own conclusion)
- Reader's GSE gaps named: (1) off-ball valuation (GSE values only the ball-carrier action), (2) player-aware valuation (only Sicilia 2019 uses player embeddings; GSE's EPA is average-player based), (3) credit-assignment horizon as a design variable, (4) no forward-game-outcome predictive benchmark of EPA-based player scores
- Reader's proposed improvement: an Expected Route Value (ERV) model from NGS tracking — value the actual route as ∫(ERV at actual position − ERV at league-average route); no surveyed paper does this for American football
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Action-valuation methodology taxonomy (EPA/WPA family framing) — V(A_t) = V(S_{t+1}) − V(S_t) is exactly EPA/WPA
- OTHER: Credit-assignment horizon as design variable (1-play vs drive vs game horizons)
- OTHER: Player-aware valuation (player embeddings in CPOE completion models)
## Engine-actionable? (yes/no + one-line what)
Yes — audit GSE's EPA/WPA/CPOE stack against the nine-dimension taxonomy and run the credit-horizon sweep (1-play vs drive vs game EPA aggregates predicting 2024–2025 game outcomes out-of-sample, ≥0.005 AUC gate) plus the ERV off-ball receiver-value model from NGS tracking

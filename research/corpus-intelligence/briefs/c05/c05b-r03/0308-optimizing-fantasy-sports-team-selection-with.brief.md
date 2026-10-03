# arxiv-program/research/2026-09-21/arxiv-deep/0308-optimizing-fantasy-sports-team-selection-with.md
## What it is (1-2 sentences)
Research note on arXiv:2412.19215 (Bhattacharjee et al., Dream11, 2024): framing fantasy cricket team selection as a sequential swap MDP and training DQN/PPO agents on historical player data. Verdict in-file: ADAPT for GSE's DFS lane — first RL-for-fantasy paper in the corpus sweep.
## Key metrics/methods (formulas where given, else "not specified")
- MDP: state O_t = (t, S_t, R_t) = timestep + selected 11 + reserve 11; action A_t = (rm_t, ad_t) = one player swap; deterministic transitions; custom OpenAI Gym env.
- Reward: −1 per swap (efficiency penalty); +10 on reaching goal state = selected team scores ≥ α × max possible score, α ∈ [0.7, 1.0], set to **α=0.8** after α-ablation.
- DQN: `L_DQN = (r + γ max_{a'} Q(s',a') − Q(s,a))²`, replay buffer 10k, target update 5k steps, ε-exploration 0.1→0.02.
- PPO: clipped surrogate objective (clip range 0.2), shared feature extractor FC 256→512→1024 (Tanh/ReLU variants) + actor/critic heads.
- Training: Stable-Baselines3 on Databricks (multi-GPU); 2,000,000 timesteps; LR 1×10⁻³ / 0.0001; batch 128; γ=0.99; 10,000 episodes.
- Baselines: previous-match performance, popular player-% selection, SVM (RBF, C=1), Random Forest (100 trees, depth 10).
- Metric: percentile rank of predicted team vs all real user teams per round; predicted-to-dream-team score ratio density plots; match-level score normalization for high- vs low-scoring matches.
## Data sources named
T20 international + IPL + bilateral/trilateral series round-level player data. State = 22 players/round × 10 past-90-day features (batting avg, bowling strike rate, fielding stats, fantasy points, etc.). Train Jan 2021–Jan 2023; test Mar 2023–Jan 2024, 4-fold temporal CV with temporal gap between folds. Target: ex-post "dream team" = 11 highest-fantasy-point players per round.
## Findings (numbers and facts, not vibes)
- Table 2 percentile ranks (4 folds) — PPO: 0.67/0.62/0.64/0.62 (best); DQN: 0.61/0.58/0.59/0.52; RF: 0.57/0.54/0.51/0.56; SVM: 0.55/0.56/0.54/0.55; previous-performance: 0.54/0.51/0.57/0.54; player-%: 0.55/0.56/0.54/0.51. RL teams averaged above the 60th percentile (wins prizes in their game).
- Limitations flagged in-file: no ownership/duplicate modeling (fatal for GPP — agent maximizes expected score, not top-finish probability); no salary-cap constraint; no late-breaking news handling (injuries, lineups); percentile-vs-users conflates selection skill with uninformed users; Dream11 author affiliation (retention-tool bias).
- In-file implementation spec: rebuild Gym env for DK NFL DFS (9 slots QB/RB/RB/WR/WR/WR/TE/FLEX/DST, $50k cap, nflverse/ESPN projections); reward −1/inefficient swap, +10 on α×max projected score (α=0.8) + GPP overlay term; 2–3 eng-days env + 1–2 days training. Reproducible test: nflverse 2020–2025 + DK salaries Weeks 1–8 2025, held-out Weeks 9–17 2025, percentile vs contest field. Gate: PPO mean percentile ≥ optimizer baseline mean by ≥5 points across ≥5 of 8 slates; improvement experiment: two-headed variant (cash-game max-score head vs tournament max-99th-percentile-probability head with field simulator).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — DFS/optimizer lane: PPO swap-MDP recipe for NFL DFS lineup construction; α=0.8 goal threshold idea.
- OTHER — GPP-construction: explicit warning that expected-score maximization is the wrong objective for tournaments (aligns with the DK GPP winning-lineup construction research).
## Engine-actionable? (yes/no + one-line what)
yes — Rebuild the swap-MDP + PPO recipe for DK NFL DFS with a salary cap and a GPP objective head, per the in-file implementation spec and gate.

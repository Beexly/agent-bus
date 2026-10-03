# docs/arxiv-program/research/2026-09-21/arxiv-deep/0958-eventgpt-player-impact-team-action-sequences.md
## What it is (1-2 sentences)
Full-read deep ledger of Hong et al. (arXiv:2512.17266, 2025; cached v2 "ScoutGPT" = v3 "EventGPT" renamed): a player-conditioned GPT-style autoregressive transformer modeling football as discrete event sequences, jointly predicting next action attributes plus residual on-ball value, enabling counterfactual player-substitution (transfer-fit) simulation. Verdict ADAPT — ports to NFL play sequences for scheme-fit and matchup simulation.
## Key metrics/methods (formulas where given, else "not specified")
- Context block: c = (pID_{1:22}, minute, h_{g′}, a_{g′}, h_{r′}, a_{r′}, h_{y′}, a_{y′}) — 22 on-pitch player IDs, match minute, cumulative goals/red/yellow home/away.
- Event tokens: v_t = (h_t, e_t, x_t, y_t, δ_t, o_t, rOBV_t) — acting team, event type, discretized coords, elapsed time, success indicator, residual on-ball value: rOBV_t = E[Σ_{τ=t}^{T_episode} OBV_τ | state at t, player p_t].
- Next-token: P(v_{t+1} | c, p_{1:t′}, v_{1:t}); loss L = −Σ_{t=1}^{T} log P(v_{t+1} | c, p_{1:t}, v_{1:t}) (teacher forcing).
- Architecture: decoder-only Transformer (NanoGPT-style): causal self-attention, multi-head + FFN, residuals, layer norm, tied embeddings. Player ID conditions predictions but is NEVER predicted — enables counterfactual substitution by swapping identity token.
- Aggregation: arithmetic mean for low-variance roles; top-quartile (top 25%) truncated mean for attackers. Episodes ≤ 100 events (truncate/pad); episode = contiguous play with unchanged 22 players.
## Data sources named
- Five seasons of Premier League event data (manuscript inconsistency: §3.1 says 2019/20–2023/24, Table 1 lists 2020/21–2024/25), SPADL-standardized: 1,900 matches, 173,951 episodes, 22.48 avg events/episode, 1,221 players. Train: 2020/21–2022/23 + first halves of 2023/24, 2024/25; second halves held out. Event-data source not named (StatsBomb-style; no download link). No code repo stated.
## Findings (numbers and facts, not vibes)
- Table 2 (h↑ e↑ x↓ y↓ t↓ a↑ rOBV↓): LEM — 85.20%, 74.07%, 9.01, 8.11, 1.37, 90.51%, 0.014. LEM Transformer — 96.05%, 80.42%, 7.15, 7.08, 1.40, 86.92%, 0.008. EventGPT — 94.12%, 82.91%, 4.30, 4.31, 1.11, 92.87%, 0.009. Event type +2.5pp over LEM Transformer; spatial MAE roughly halved; rOBV MAE 0.009 vs 0.008 (second best).
- Case Study 1 (2023/24 striker contexts): in Haaland's Man City context, Isak pred. rOBV 3.76 (own OBV 4.94) > Haaland sim 2.71 ≈ GT 2.59; Højlund 2.23, Núñez 2.12, Mateta 1.94. In Højlund's Man Utd context: Isak 4.65, Núñez 3.91, Højlund sim 2.23 ≈ GT 1.67, Haaland 1.37 — elite finishers' value collapses in the weaker system.
- Case Study 2 (RW in Saka's 2023/24 context, ≥1500 min): Salah 19.78, Madueke 19.36, Semenyo 19.22, Traoré 18.92, Saka sim 18.59 vs GT 15.72 (positive bias acknowledged), Mahrez 17.50, Mbeumo 11.80, Bowen 10.10.
- Case Study 4 (Haaland into Arsenal defensive contexts): Haaland 2.35/1.42/1.98/1.37 vs original-player sims 5.19/3.63/5.14/8.78 — value is context-shaped, not label-shaped; t-SNE of player embeddings shows clean role clusters (CB/FB dense, wing-backs intermediate, AM/winger/FW sub-clusters) with no positional labels used in training.
- Limitations per file: rOBV inherits training-window OBV distribution (Núñez artifact); substitution fidelity unvalidated against actual transfers; Saka positive bias suggests systematic overestimation; hyperparameters unstated; v2/v3 differences beyond rename unverified.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Player-conditioned next-play modeling with residual EPA target (rEPA analog) — QB embedding swap simulates scheme fit in another team's offense (QB-BEHAVIOR, SCHEME)
- Elite value collapses in weak systems (Haaland 1.37 in Højlund's context vs 2.71 at City) — context × talent interaction (COACHING)
- Unsupervised player-embedding clusters recover positions/roles without labels — embedding retrieval for stylistic comps (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Prototype nanoGPT on nflverse drive sequences (2015–2024) with QB identity conditioning + residual-EPA target; ADAPT if held-out 2024 drives show ≥5% next-play yards-MAE beat over game-state regression AND elite-QB embeddings raise predicted drive EPA in ≥80% of weak-offense contexts.

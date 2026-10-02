# docs/arxiv-program/research/2026-09-21/arxiv-deep/0958-eventgpt-player-impact-team-action-sequences.md
## What it is (1-2 sentences)
Full-read ledger of Hong et al. (2025), arXiv:2512.17266: "EventGPT" (manuscript read was v2 titled "ScoutGPT") — a player-conditioned, value-aware GPT-style autoregressive transformer that models football as discrete event sequences and simulates counterfactual player transfers. Verdict in file: ADAPT — framework ports to NFL play sequences for scheme-fit and matchup simulation.
## Key metrics/methods (formulas where given, else "not specified")
- Tokenization: SPADL event representation; unified vocabulary with non-overlapping token ranges for attributes, player IDs, context markers; continuous attributes (coordinates, elapsed time, OBV) discretized; episodes ≤ 100 events (truncate/pad).
- Context block per episode: c = (pID_{1:22}, minute, h_{g′}, a_{g′}, h_{r′}, a_{r′}, h_{y′}, a_{y′}) — 22 on-pitch player IDs, match minute, cumulative goals/red/yellow cards home/away.
- Event tokens: v_t = (h_t, e_t, x_t, y_t, δ_t, o_t, rOBV_t) — acting team, event type, coords, elapsed time, success indicator, residual on-ball value rOBV_t = E[Σ_{τ=t}^{T_episode} OBV_τ | state at t, player p_t].
- Architecture: decoder-only Transformer adapted from Karpathy's NanoGPT (causal self-attention, multi-head, FFN, residual, layer norm, tied embeddings); player ID conditions predictions but is never predicted — enables counterfactual substitution.
- Training: teacher forcing, L = −Σ_{t=1}^{T} log P(v_{t+1} | c, p_{1:t}, v_{1:t}); hyperparameters not stated.
- Counterfactual transfer simulation: swap player token p_i→p_j, keep sequence fixed, re-evaluate predicted rOBV; aggregate per role — arithmetic mean for low-variance roles, top-quartile (top 25%) truncated mean for attackers.
## Data sources named
- Five seasons of Premier League event data (2019/20–2023/24 in §3.1; Table 1 lists 2020/21–2024/25 — inconsistency flagged); SPADL-standardized; 1,900 matches, 173,951 episodes, 22.48 avg events/episode, 1,221 players. Source not named as public; no repo URL; no data link.
- Train: 2020/21–2022/23 + first half 2023/24 and 2024/25; remainder held out (temporal holdout).
- Baselines: LEM (original) and "LEM Transformer" (authors' own re-headed NMSTPP Transformer).
## Findings (numbers and facts, not vibes)
- Table 2 next-event prediction (h↑ e↑ x↓ y↓ t↓ a↑ rOBV↓): LEM — 85.20%, 74.07%, 9.01, 8.11, 1.37, 90.51%, 0.014. LEM Transformer — 96.05%, 80.42%, 7.15, 7.08, 1.40, 86.92%, 0.008. EventGPT — 94.12%, 82.91%, 4.30, 4.31, 1.11, 92.87%, 0.009. Event type +2.5pp over LEM Transformer; spatial MAE roughly halved; rOBV MAE 0.009 (second best).
- Case study 1 (strikers, 2023/24): in Haaland's Man City context, Isak pred. rOBV 3.76 (own OBV 4.94) > Haaland sim 2.71 ≈ GT 2.59; Højlund 2.23, Núñez 2.12, Mateta 1.94. In Højlund's Man Utd context: Isak 4.65, Núñez 3.91, Højlund sim 2.23 ≈ GT 1.67, Haaland 1.37 — elite finishers' value collapses in the weaker system.
- Case study 2 (RW in Saka's 2023/24 context, ≥1500 min): Salah 19.78, Madueke 19.36, Semenyo 19.22, Traoré 18.92, Saka sim 18.59 vs GT 15.72 (positive bias acknowledged — sim used as baseline), Mahrez 17.50, Mbeumo 11.80, Bowen 10.10.
- Case study 4 (Haaland into Arsenal defensive contexts): Haaland 2.35/1.42/1.98/1.37 vs original-player sims 5.19/3.63/5.14/8.78 — value is context-shaped, not label-shaped. No positional labels used in training, yet t-SNE shows clean role clusters.
- Leakage note: player embeddings learned on train seasons and evaluated on same players in test — transfer simulation is interpolation, not zero-shot to unseen players.
- Limitations: substitution fidelity unvalidated against actual transfers (no ground truth); Saka positive bias suggests systematic overestimation; hyperparameters unstated; v3-vs-v2 differences unverified.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Player-conditioned autoregressive modeling with a residual-value target (rEPA analog for NFL drives) — a new sequence-modeling capability for drive progression and matchup sims — SCHEME.
- Counterfactual substitution (swap player embedding into another team's context) answers scheme-fit questions: how would WR X perform in team Y's route tree — SCHEME / QB-BEHAVIOR.
- Elite-finisher value collapsing in weak systems (Haaland 1.37 in Man Utd context vs 2.71 in own) quantifies context-dependence of "star" output — coaching/scheme effect on stars — COACHING.
- Suggested improvement: validate substitution fidelity against real QB team-changes (train through 2022, simulate QB's 2023 on new team, compare to actual) — QB-BEHAVIOR.
## Engine-actionable? (yes/no + one-line what)
yes — Prototype an NFL EventGPT: tokenize nflverse play-by-play 2015–2024 into drive sequences (context block: personnel + score diff/time/down-distance; per-play tokens: play type, yards, EPA, success), train nanoGPT-style decoder with QB identity conditioning and residual drive-EPA target rEPA_t, then counterfactual QB/WR substitution for scheme-fit sims; gate is ≥5% next-play yards-MAE improvement over game-state EPA regression plus elite-QB-into-weak-offense face-validity in ≥80% of contexts.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1354-modeling-matches-as-language-a-generative.md
## What it is (1-2 sentences)
Ledger for arXiv:2603.15212v2 (Hong et al., 2026) introducing ScoutGPT — a player-conditioned, value-aware GPT-style transformer that serializes football (soccer) matches as event-token sequences to both predict the next event and Monte Carlo-simulate full counterfactual event sequences under hypothetical lineups (e.g., post-transfer player value). Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Tokenization: 54-dim match-context vector c (team IDs, 22 player roles, 22 player IDs, 8 match-state tokens) + each event as a 10-token tuple (team ID, role, player ID, action type, start x/y, end x/y, elapsed time δt, outcome); flattened sequence s = (c1..c54, s1,1..s1,10, ..., sT,1..sT,10) (eq. 1). Continuous fields quantized into shared integer bins 0–105.
- Backbone: NanoGPT (GPT-2 decoder-only transformer), shared token-embedding table with per-field sub-vocabularies for categorical fields and a shared bin vocabulary for quantized continuous fields, learnable positional embeddings, stack of L pre-LayerNorm blocks with causal masked multi-head self-attention and GELU MLP (eqs. 2–3).
- Two heads: (i) next-token cross-entropy L_next; (ii) goal-prediction head at each event's last token predicting binary indicators g_t^+, g_t^- (acting team scores/concedes within 15 s), loss L_goal. Composite loss L = L_next + L_goal (eq. 6) — no weighting coefficient λ.
- Constrained decoding at inference: ownership-lock on ball-carrier across in-possession events; dynamic episode termination on EOS / set-piece restart / goal / foul / own goal.
- Counterfactual transfer simulation: swap transferred player's ID/role tokens into target team's context, Monte Carlo-generate episode sequences, aggregate residual on-ball value → simulated episode VAEP.
## Data sources named
- K League 1 and 2 (South Korea) event data, 2021–2025, standardized to the VERSA event representation (29 action types), chronologically split: train 2021–2023 (1,320 matches, 132,315 episodes, 3,528,635 events, 1,090 players); valid 2024 (462 matches, 1,277,169 events, 848 players); test 2025 (501 matches, 1,324,363 events, 859 players).
- Episodes = single in-play segments; capped at Tmax = 100 events, longer episodes split with sliding window stride 50.
- K League event data not public (league-proprietary feed). Paper code: none stated (references public NanoGPT implementation).
## Findings (numbers and facts, not vibes)
- Transfer simulation (Table 8, 40 players by post-transfer minutes in 2025): mean absolute error of post-transfer episode VAEP — naive carry-over 1.84 → ScoutGPT-simulated 1.25; average episode VAEP sums: naive 4.85, ground truth 4.71, simulated 4.59.
- Case studies: Jinsu Kim (left back) — naive 7.00 vs GT 11.07 vs simulated 11.63 (absolute errors 4.07 naive vs 0.56 simulated); Reis (left wing) — GT 12.19, simulated 12.06 (error 0.13) vs naive 16.15 (error 3.96); Jihoon Cho (central mid) — simulated error 0.22 vs naive 3.74. Gains appear across roles (full-backs, wingers, central midfielders).
- Ablations (Table 5): removing lineup info degrades role accuracy/F1 (−0.090/−0.156); removing context block degrades time R² (−0.184), inflates time MAE (+0.069); w/o-both worst on time (−0.212 R², +0.097 MAE).
- Main next-event results (Table 3) vs LEM-Transformer baseline: start-x MAE 4.59 → 0.97; time MAE 1.42 → 0.75.
- Player embeddings (t-SNE): clusters align with tactical roles; multi-role players (e.g., Jinsub Park between DM and CB clusters) sit between role clusters.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: generative simulation of full play sequences for counterfactual roster/scenario valuation — "what would happen if" simulation layer; new capability not duplicated elsewhere in the corpus.
- OTHER: counterfactual player valuation framing (naive carry-over vs simulated post-move value) maps directly onto NFL trade/free-agency impact estimation and prop-market scenario pricing; improvement experiment suggests conditioning generation on sportsbook odds context tokens for market-conditioned scenario pricing.
- TRUST-SIGNAL: explicit acceptance gate (adopt if transformer beats Markov baseline on next-play accuracy by ≥3 points AND free-agency simulation MAE ≥15% lower than naive carry-over).
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL ScoutGPT: nflverse play-by-play 2009–2025 tokenized with drives as episodes, NanoGPT-style decoder-only transformer with next-play + drive-outcome heads, used for (a) trade/free-agency impact simulation (swap player-ID tokens, Monte Carlo full-season drive sequences), (b) prop-market scenario pricing via market-conditioned generation; ~3–5 weeks for tokenizer + training pipeline, with the NFL event taxonomy as the main manual lift.

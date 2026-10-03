# docs/arxiv-program/research/2026-09-21/arxiv-deep/1593-forecasting-events-in-soccer-matches-through.md
## What it is (1-2 sentences)
Deep-read ledger entry on Mendes-Neves et al. (2024, arXiv:2402.06820): soccer matches modeled as a language-modeling problem — events as tokens, single MLP predicting the next event's full variable chain (type, accuracy, goal, team, time, x/y) via masked multinomial sampling — as a simulation backbone for analytics. Verdict: ADAPT — the single-model tokenization paradigm transfers to NFL play-by-play simulation from nflverse.

## Key metrics/methods (formulas where given, else "not specified")
- Ordinal token encoding into a 140-token vocabulary: 0-100 numeric slots, 37 event-type categories, `¡PERIOD_OVER¿` / `¡GAME_OVER¿` / `¡NaN¿` tokens; no embeddings (tiny vocab).
- Model: MLP 3 hidden layers x 512 neurons (ReLU); lite K=1s = 2 x 256 (~100k vs ~600k params); predicts one token at a time with partial event tuple appended (NaN-padded), masked sampler restricting sampling to valid tokens for the current event position (hallucination guard).
- S_k = [e_{-1}, ..., e_{-k}]; S_1 = [e_{-1}]; p^ = f(S_k). Period/Minute/Second collapsed into a single TimeElapsed token, deterministically re-expanded; scores computed externally; set pieces/out-of-bounds act as "reset points" for error control.
- Training: lr 0.001 cosine annealing, 50 epochs, BCELoss, Adam, PyTorch, NVIDIA 3060 12GB. Context variants K=1, K=1s (lite), K=3.

## Data sources named
Public WyScout dataset (WyScout V2 API), 2017/18 season of the five most valuable European leagues (England, Spain, Germany, Italy, France); ~100 MB after preprocessing; 11 features per event (Event Type, isGoal, isAccurate, isHomeTeam, Period, Minute, Second, X, Y, Home Score, Away Score); no team/player IDs; code at github.com/nvsclub/LargeEventsModel. Limitations stated: no off-the-ball data (>98% of player time missing), manual annotation imprecision, cross-labeled shots/crosses bias.

## Findings (numbers and facts, not vibes)
- Table 3 (BL | LEM | K=1 | K=1s | K=3): Type ACC 40.8% | 55.7% | 57.5% | 57.3% | 62.2%; Type F1 0.24 | 0.50 | 0.52 | 0.52 | 0.57; Goal ACC ~99.8% all (class-imbalance driven); Goal F1 0 | 0.87 | 0.68 | 0.68 | 0.68 (regression vs prior); Accurate ACC 67.8% | 81.7% | 82.7% | 82.5% | 82.8%; Home ACC 50.9% | 93.8% | 92.1% | 91.5% | 93.6%.
- X MAE 21.2 | 8.5 | 6.7 | 7.4 | 6.5 (R^2 0.81 for K=1); Y MAE 26.5 | 15.6 | 12.1 | 12.8 | 11.4. Claims: event-type accuracy +6.5pp over prior LEM (62.2% vs 55.7%); X error -24%, Y -28%.
- Inference: K=1s 21% faster than K=1; K=3 62% slower. No improvement over LEM on isHomeTeam or TimeElapsed (MAE 1.6-1.7, R^2 0.39-0.55).
- Qualitative: 1,000,000-shot situational xG maps, momentum trace on Real Madrid-Barcelona (Dec 23, 2017), in-game win-probability and over/under 2.5 curves, VAEP comparison.
- Admitted weakness: model cannot capture probability shifts from events absent from context (red card demo shows in-game probabilities failing to move) — direct analogue: NFL injuries/ejections.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: events-as-language paradigm — closest neighbor is ledger 0009 (original three-stage LEM), but this paper's single-model masked-sampler trick is not in GSE's corpus; ports to a Transformer over nflverse play-by-play (~50k plays/season; ~700k plays 2015-2024, 7x their data).
- OTHER: simulator produces win probability, total distribution, any-play prop quantiles from one backbone — a fundamentally different architecture from the engine's current model heads.
- COACHING: red-zone / 2-minute drill as the "reset point" analogue for simulation error control; `¡PERSONNEL_CHANGE¿` injury-token pseudo-event from a text pipeline as the fix for the missing-context failure mode (INFERENCE from file's improvement experiment).
- TRUST-SIGNAL: in-game re-simulation each commercial break for live edges vs sportsbook totals is a publishable real-time capability (INFERENCE from file's serving spec).

## Engine-actionable? (yes/no + one-line what)
yes — prototype a single-Transformer NFL play simulator (60-90-token ordinal vocab per play, masked sampler, ~100k sims/game) trained 2015-2023, gated on next-play-type accuracy >=62% on held-out 2024 and win-prob Brier <= current engine v5.2.7.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0009-large-event-models-player-performance.md
## What it is (1-2 sentences)
Deep-read of arXiv:2402.06815v2 (Mendes-Neves et al. 2024): a general "Large Event Model" (LEM) trained on soccer event data is fine-tuned per team (home games) into team-contextual models, then used to simulate hypothetical player scenarios (e.g., transfers). GSE verdict: ADAPT the "general event model → fine-tune into team-context models" recipe; do not adopt the soccer results, whose validation (standings displacement, unfalsifiable transfer scenarios) is weak.

## Key metrics/methods (formulas where given, else "not specified")
- General LEM = 3 neural heads: Type (predicts event type), Accuracy (predicts event success), Data (predicts event details). Exact architectures from the paper:
  - Type: in 42 → out 33, hidden [256], LR 0.0010, batch 32, sigmoid
  - Accuracy: in 75 → out 2, hidden [128], LR 0.0410, batch 1024, sigmoid
  - Data: in 77 → out 264, hidden [64, 256, 256], LR 0.0063, batch 1024, relu
- Fine-tuning protocol (exact): max 25 epochs; LR = original/10; batch size per the paper's Equation 1 as a function of fine-tuning event count (Equation 1 not recovered from the paper — not stated).
- Targets: next-event type (33 classes), event accuracy/success (binary), event data details (264-dim).
- Player-performance queries answered by multi-step simulation with a hypothetical player inserted; simulation count, RNG protocol, aggregation rules not stated in paper.

## Data sources named
WyScout event data, 2017–2018 English Premier League (commercial/proprietary — not freely replicable). Exact event counts, schema columns, train/test splits: not stated. Related public repo: `https://github.com/nvsclub/largeeventsmodel` (AGPL; paper-fidelity unverified). GSE analogue for implementation: nflverse play-by-play 2020–2025.

## Findings (numbers and facts, not vibes)
- Simulated vs actual 2017–18 EPL standings, average displacement: full table 3.4 positions; home table 3.3; top six 1.3.
- Largest misses: Burnley expected 17th → actual 7th (up 10); Crystal Palace expected 19th → actual 11th (up 8); West Ham expected 20th → actual 13th (up 7); Huddersfield expected 8th → actual 16th (down 8); Man City expected 1st = actual 1st.
- Paper has NO held-out-season test, NO comparison against a non-fine-tuned baseline, NO statistical uncertainty on simulated quantities, and validates by simulating the same season used for fine-tuning (in-sample fit check, not prediction).
- Transfer scenarios (Ronaldo/Messi) framed qualitatively only; "team context narrows apparent player-quality gaps" is a qualitative reading, not a numeric result.
- GSE read: 3.4-position displacement with 7–10-position misses ≈ naive-prior accuracy; no Elo baseline compared. Soccer→NFL gap: soccer events sparse/low-scoring; NFL has dense structured sequences with 22 interacting agents — recipe transfers, architecture does not.
- GSE implementation spec in file: general NFL next-play event model on nflverse 2020–2025 (inputs = pre-play state: down/distance/yardline/score/time/personnel/motion; targets = play type, yards-gained bucket, success — analogues of Type/Accuracy/Data heads); per-team fine-tuning on recent 2 seasons (home+away, NOT home-only); player-what-if queries as scenario explorations only; strict validation (hold out latest season, beat Elo baseline AND un-fine-tuned general model).
- Acceptance gate: ADOPT only if fine-tuned team models beat Elo simulation by ≥ 1.0 win MAE on held-out season AND beat the un-fine-tuned general model by ≥ 0.5 wins MAE.
- Improvement experiment: opponent-conditioned (matchup-conditioned: Team A offense vs Team B defense) fine-tuning with proper predictive holdout, benchmarked against Elo and GSE's state-space ratings.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME)
- Fine-tuned team-context simulators as a new modeling primitive vs GSE's bespoke per-task models: OTHER
- Play-type / success prediction heads map directly onto play-calling and play-design intelligence: SCHEME
- Player-insertion what-if simulation (player-X-in-team-Y context): QB-BEHAVIOR (QB-context fit), OTHER (personnel evaluation)
- Explicit rejection of the paper's weak validation as a TRUST-SIGNAL discipline lesson (no in-sample claims, always a real holdout): TRUST-SIGNAL
- Opponent-conditioned fine-tuning idea: opponent adjustment is most of the signal in NFL: SCHEME, OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — experimental: train a general NFL next-play event model (Type/Accuracy/Data heads) on nflverse 2020–2025, fine-tune 32 team-context copies, gate on beating Elo by ≥1.0 win MAE on a held-out season.

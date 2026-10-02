# arxiv-program/research/2026-09-21/arxiv-deep/0425-openskill-a-faster-asymmetric-multiteam-multiplayer.md
## What it is (1-2 sentences)
A full-paper research note on Joshy (2023), arXiv:2401.05451v1 — a software paper packaging the Weng-Lin Bayesian approximation to TrueSkill as the open-source `openskill.py` Python library for asymmetric multi-team, multiplayer ratings, with the Plackett-Luce model recommended as default. Verdict: ADAPT as the implementation vehicle for GSE's team/player ratings where TrueSkill is too slow.

## Key metrics/methods (formulas where given, else "not specified")
- Rating state per player/team: (μ, σ); Bayesian update after each match outcome; σ shrinks with matches observed, inflates for time decay. No equations stated in paper (points to Weng-Lin paper and package docs); no formulas invented in note.
- Supports asymmetric teams, free-for-all multi-team ranking, partial play, and per-match update speed benchmarks vs TrueSkill.
- Proposed acceptance gate: match house Elo within 0.002 log-loss on a 2020–2024 NFL walk-forward AND run the full 2000–2025 weekly backtest in under 50% of the Elo pipeline's wall-clock time.

## Data sources named
- Overwatch team matches and PUBG free-for-all matches via the package's benchmark suite (counts not fully specified; Overwatch evaluated at ≥2 and ≥1 matches/player thresholds).
- NFL spec: nflverse schedules + scores, 2015–2024, walk-forward weekly predictions 2020–2024.

## Findings (numbers and facts, not vibes)
- Overwatch, players with ≥ 2 matches: OpenSkill 556 correct / 79 incorrect = 87.56% accuracy in 0.97s; TrueSkill 587 correct / 48 incorrect = 92.44% accuracy in 3.41s.
- Overwatch, players with ≥ 1 match: OpenSkill 799/334 = 70.52% in 17.64s; TrueSkill 830/303 = 73.26% in 58.35s.
- PUBG: Rank-Biased Overlap 64.11, accuracy 92.03% (OpenSkill-only; TrueSkill comparator unclear).
- OpenSkill trades ~2–5 accuracy points for ~3.5× speedup. Paper's "comparable accuracy" framing is weaker than the numbers; TrueSkill baseline configuration not detailed.
- Limitations: no player-contribution weighting within a team (carried players gain unearned rating); partial-play handling claimed but not validated; no calibration/log-loss reported; no margin-of-victory or home-field handling.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: direct production-engineering relevance — OpenSkill Plackett-Luce proposed as the production NFL team-strength rating engine behind GSE's team-strength features; σ as an uncertainty feature for Kelly sizing (high-σ teams → less trusted edges); score-differential-aware update and snap-share contribution weighting proposed as improvement experiments.
- COACHING: team-strength ratings decompose team quality over time, potentially feeding coaching-attribution splits; not specified in file (INFERENCE — not in the file).
- TRUST-SIGNAL: none in file.

## Engine-actionable? (yes/no + one-line what)
Yes — pip-install `openskill.py`, benchmark Plackett-Luce against the house Elo on the 2020–2024 NFL walk-forward harness (log-loss + MAE vs spread), promote to production team-strength feature if within 0.002 log-loss at materially lower runtime.

# arxiv-program/research/2026-09-21/arxiv-deep/0425-openskill-a-faster-asymmetric-multiteam-multiplayer.md
## What it is (1-2 sentences)
Full-paper ledger read of OpenSkill (arXiv:2401.05451v1): a software paper packaging the Weng-Lin Bayesian TrueSkill approximation as the fast open-source `openskill.py` library (Plackett-Luce recommended default), handling asymmetric, multi-team, multiplayer games with (μ, σ) ratings and time decay via σ inflation. Reader verdict: ADAPT — adopt as the production implementation vehicle for team/player ratings where TrueSkill-class updates are too slow for large backtests.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified — software paper; references the Weng-Lin approximation, points to package docs for formulas. Rating state = (μ skill estimate, σ uncertainty); Bayesian μ/σ updates from win/loss/rank outcomes; σ shrinks with matches observed, inflates for time decay; supports asymmetric teams, free-for-all multi-team ranking, partial play
- Five rating models provided; Plackett-Luce recommended as default. Stated limitation: no weighting of individual player contributions within a team
## Data sources named
Benchmark game datasets via the package: Overwatch team matches, PUBG free-for-all matches (player/match counts not fully specified in the extracted text)
## Findings (numbers and facts, not vibes)
- Overwatch (≥2 matches/player): OpenSkill 556 correct / 79 incorrect, 87.56% accuracy, 0.97s; TrueSkill 587/48, 92.44%, 3.41s
- Overwatch (≥1 match/player): OpenSkill 799/334, 70.52%, 17.64s; TrueSkill 830/303, 73.26%, 58.35s
- PUBG (OpenSkill only in extracted text): Rank-Biased Overlap 64.11, accuracy 92.03%
- Trade: ~2–5 points of accuracy for ~3.5× speedup; "comparable accuracy" is the paper's framing, not the numbers'
- Limitations: no player contribution weighting (a carried player gains unearned rating); partial-play handling unvalidated; TrueSkill baseline config not detailed; accuracy reported without calibration or log-loss; paper discusses no margin-of-victory or home-field handling needed for NFL
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: production rating engine — OpenSkill Plackett-Luce as the fast team-strength feature behind GSE's NFL ratings (fills the corpus gap: theory is covered — TrueSkill, Glicko, Bradley-Terry — but no library recommendation or runtime-accuracy tradeoff analysis exists in the map); σ doubles as an uncertainty feature for Kelly sizing (high-σ teams → smaller trusted edges)
- OTHER: player-level ratings explicitly NOT for individual props until contribution weighting (snap-share-fractional updates) is built — tagged as a TRUST-SIGNAL-adjacent caution: unweighted team updates misattribute credit
## Engine-actionable? (yes/no + one-line what)
Yes — prototype OpenSkill Plackett-Luce on NFL 2000–2025 walk-forward (2020–2024 window, log-loss vs house Elo); adopt as production team-strength engine if within 0.002 log-loss of house Elo at <50% of its wall-clock backtest time, with score-differential-aware updates + snap-share contribution weighting as the improvement experiment.

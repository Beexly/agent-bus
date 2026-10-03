# arxiv-program/research/2026-09-21/arxiv-deep/0178-random-forest-model-identifies-serve.md
## What it is (1-2 sentences)
Tennis match-outcome prediction paper (arXiv:1910.03203v1, Gao & Kowalczyk 2019) comparing SVM, logistic regression, and random forest on ATP 2000–2016 data; the deep-read verdict is REJECT due to probable target leakage.

## Key metrics/methods (formulas where given, else "not specified")
- Dataset: 49,188 ATP entries (Masters 1000/500/250, Challenger); split 29,238 without betting odds (train) / 19,880 with odds (test); missing values median-imputed.
- Models: SVM (RBF), random forest, logistic regression; random train/test split + 10-fold CV (NOT chronological).
- Feature selection: drop features whose removal increased CV accuracy (76.23% vs 73.85% all-features), then re-add ordered by single-addition gain; final RF features: w_height, w_age, AceVsDf, Champ, GamesPlayed, FirstIn1stServe, FirstWonFirstIn, SecondWonSecondIn, roundR128, roundRR.
- Score metric: score = (p − 0.5)·w, w = +1 win / −1 loss [UNCERTAIN — extraction-garbled reconstruction].
- Implied probability from decimal odds: P = 1/ODDS.

## Data sources named
atptennis.com; Jeff Sackmann's Match Charting Project (GitHub); major bookmaker odds (e.g., Bet365), averaged per match.

## Findings (numbers and facts, not vibes)
- [OTHER] RF 83.18% accuracy vs betting odds 69.04% — but the decisive serve features (FirstWonFirstIn, SecondWonSecondIn) have no stated pre-match aggregation window and appear sourced from per-match charting, i.e., probable target leakage; the 83.18% is not credible evidence.
- [OTHER] SVM 62.06%, logistic regression 61.60% (10-fold CV); odds achieved highest total confidence score (2059.66) despite lower accuracy — RF correct more often but with low confidence.
- [TRUST-SIGNAL] Cautionary leakage pattern: random (non-chronological) split means future matches inform past predictions; no walk-forward validation, no calibration metrics, no betting simulation/ROI despite betting framing.
- [OTHER] First author affiliation is Darlington School (a high school) — noted in the read, not disqualifying.

## Engine-actionable? (yes/no + one-line what)
No — REJECT; nothing to port beyond the defensive restatement that every GSE model feature must be strictly pre-kickoff computable, with a unit test dropping any feature whose values change after game start.

# arxiv-program/research/2026-09-21/arxiv-deep/0035-assessing-win-strength-in-mlb-win.md
## What it is (1-2 sentences)
Deep read of Allen & Savala (2025, arXiv:2511.02815v1): six ML model families compared on a common 46,159-game MLB 2001–2019 dataset with a season-blocked train/test split, testing whether predicted win probabilities carry margin-of-victory information and whether they drive profitable run-line betting. Verdict in file: ADAPT — the win-strength finding ports to NFL spread modeling; the MLB models themselves do not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- LogR: β₀+β₁x₁+…+βₙxₙ for ln(p/(1−p)); KNN k=150 (Minkowski); SVM RBF C=1; KNN probability = majority-class neighbor proportion.
- Features incl. Pythagorean expectation runs_scored²/(runs_scored²+runs_allowed²); betting returns as % of money invested; drawdown = max return − min return.
## Data sources named
Baseball Reference, FanGraphs, Lahman's Database, Retrosheet (all public): 46,159 MLB regular-season games 2001–2019; 83 features; betting data from Sports Books Reviews Online (SBRO) run-lines.
## Findings (numbers and facts, not vibes)
- Test (2016–2019): LogR 62.94% accuracy / 0.6768 AUROC / 0.6418 log-loss / 0.2254 Brier — top on all metrics, but no model "best" overall; SVM 2nd in accuracy yet 4th in Brier/log-loss (miscalibrated at extremes).
- Win strength: all models show P(win)↔score-differential correlation but R² only 0.036–0.140 (LogR 0.140 strongest); LogR 85–100% prob bin: mean margin 4.072 ± 3.978 (n=181); toss-up 49–51%: −0.243 ± 4.011 (n=461) — home team slightly favored to lose; SVM/KNN/FTE never produce extreme tail probabilities.
- Betting: naive strategy (bet every P≥0.5 home game) loses 51.39% of money wagered; optimized 20×20 cutoff grid gives positive returns "into the double digits" but on only ~0.5–5% of games (~5–120/season).
- Theoretical max from optimally combining three models: 70.90%–74.50%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the accuracy-vs-calibration dissociation (SVM accurate but miscalibrated in tails) is a model-selection caution; the season-blocked split discipline is the anti-leakage standard.
- OTHER: win-strength diagnostic — predicted win probability should predict margin, not just binary outcome; ports directly to an NFL model check (P(win) deciles vs. actual score differential, testing margin information beyond the spread).
## Engine-actionable? (yes/no + one-line what)
yes — add the win-strength diagnostic (mean actual margin by predicted-probability decile, requiring monotonicity) as a standing NFL model check; reject the betting strategy (likely cutoff-mined on the test set).

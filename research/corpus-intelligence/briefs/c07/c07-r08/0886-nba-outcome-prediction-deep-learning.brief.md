# arxiv-program/research/2026-09-21/arxiv-deep/0886-nba-outcome-prediction-deep-learning.md
## What it is (1-2 sentences)
Ledger read of arXiv:2111.09695v1 (Migliorati, 2021), a feature-selection horse race for NBA game-outcome prediction with deep learning on 16 seasons (~18,000 games). Verdict: ADAPT (weak) — the substantive finding is negative and useful: single-feature strength summaries (Elo, win frequency) beat box-score Four-Factors features.
## Key metrics/methods (formulas where given, else "not specified")
- Elo update: R ← R + K·(outcome − 1/(1+10^(−(R_opp−R+HFA)/400))); paper's constants: HFA=40, K=30, 20% offseason regression to mean; dynamic Elo variant with depth-2 (two-level) updating.
- Four Factors: eFG%, turnover rate, offensive rebound rate, free-throw rate — used as team-strength proxies, computed ex ante (pre-game).
- Models: deep-learning classifiers trained with cross-validation on single-feature and multi-feature sets; compared on AUC and accuracy.
## Data sources named
NBA regular seasons 2004/05–2019/20 (16 seasons), ~18,000 game observations; game date, home/away teams, box-score Four Factors per team, Elo ratings, win frequencies; public game data (basketball-reference-class sources). No odds data used.
## Findings (numbers and facts, not vibes)
- Best dynamic Elo (depth 2): AUC 0.7117, accuracy 0.6736.
- Historical Elo (20% regression, HFA 40, K=30): AUC 0.7117, accuracy 0.6721.
- Single-feature (Elo / win-frequency) models beat box-score-feature models — the paper's main result (exact per-variant numbers in the paper's tables).
- Documented weaknesses: no odds baseline; no calibration metrics (reliability curves, ECE); no walk-forward table — cross-validation over pooled seasons without strict time ordering (temporal leakage possible; ex-ante features mitigate only partially).
- NBA-only finding; may not transfer to leagues where box-score stats are more informative (NFL).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (feature selection): run the paper's horse race per league under strict walk-forward — single strength-summary features (Elo, win frequency, net rating) vs rich box-score feature sets; encode the winner as the default feature set.
- OTHER (prior): NBA models should start from dynamic Elo (K≈30, HFA≈40, 20% offseason regression) rather than box-score features.
- TRUST-SIGNAL: gate — confirm Elo beats Four Factors under strict walk-forward (AUC difference ≥ −0.005 tolerated); if Four Factors win walk-forward, the paper's finding is a CV artifact; improvement experiment — test hybrid Elo + Four-Factors differentials (home−away), success if hybrid beats Elo alone by ≥0.005 AUC.
## Engine-actionable? (yes/no + one-line what)
Yes (weak) — run a per-league walk-forward feature-selection audit (strength-of-record vs box-score features) and adopt the paper's NBA Elo constants as the starting prior; cheap and directional.

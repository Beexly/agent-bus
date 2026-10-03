# arxiv-program/research/2026-09-21/arxiv-deep/1079-calibration-vs-accuracy-sports-betting.md
## What it is (1-2 sentences)
Tests whether selecting a sports-betting model by *calibration* beats selecting by *accuracy*: two parallel NBA pipelines (LR/RF/SVM/MLP) tuned on classwise-ECE vs accuracy feed identical moneyline betting simulations. The calibration-selected model earns +34.69% average ROI while the accuracy-selected one loses −35.17%, because overconfidence plus Kelly sizing leads to ruin.
## Key metrics/methods (formulas where given, else "not specified")
- classwise-ECE = (1/k)Σ_iΣ_j (|B_j,i|/n)|ȳ_i(B_j,i) − p̄_i(B_j,i)|, M=20 bins; degenerate guard: <80% non-empty bins → ECE=1
- Kelly fraction k = (pb−q)/b; eighth-Kelly stakes (1/8)·k·bankroll
- Bet-all-value-bets simulation (model prob > implied prob) on 2018/19 NBA, Westgate closing odds, $10,000 bankroll, fixed $100 vs eighth-Kelly
- Pipeline: Spearman>0.7 feature filter, sequential forward selection under accuracy vs ECE objectives, BO-TPE hyperparameter tuning; covariate-shift KS screening at 1%
## Data sources named
NBA 2014/15–2018/19 from basketball-reference.com (chronological train/val/test splits; first 10 team-games/season excluded); Westgate 2018/19 closing moneylines via sportsbookreviewsonline.com
## Findings (numbers and facts, not vibes)
- SVM won both branches: test accuracy 66.55%; test classwise-ECE 3.23%
- Calibration-driven system: +34.69% avg ROI (max 36.93% eighth-Kelly; $13,693 from $10,000). Accuracy-driven: −35.17% avg (best 5.56% fixed; Kelly counterpart lost 75.9% of bankroll → $2,410)
- Mechanism: accuracy-driven model overconfident — value bets cluster at probability extremes (more false positives); Kelly amplifies miscalibration into ruin
- Both systems bet ~88–90% of games; single season only (authors flag); SVM won both branches limiting model diversity
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pick-pipeline operating rule — select the betting-layer model by minimum classwise-ECE not max accuracy; gate fractional-Kelly sizing on a live calibration check (fall back to flat stakes if ECE too high); model-prob-vs-implied-prob scatter as a nightly overconfidence diagnostic
## Engine-actionable? (yes/no + one-line what)
Yes — add a calibration-selection branch to the engine model bake-off (minimum classwise-ECE) and an eighth-Kelly calibration gate in staking; gate: ECE-selected model must beat accuracy-selected on Kelly ROI over ≥2 NFL seasons to adapt.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0285-the-evolution-of-football-betting-a.md
## What it is (1-2 sentences)
A descriptive ML benchmark paper (arXiv:2403.16282v1) that trains four standard classifiers (Random Forest, SVM, KNN, XGBoost) on two EPL seasons of fbref team stats to forecast 1x2 match outcomes, compares feature-selection methods, and reports which features matter most.

## Key metrics/methods (formulas where given, else "not specified")
- Models: Random Forest, SVM, KNN, XGBoost via sklearn. Feature selection: RFE vs algorithm-specific selectors vs correlation-based subsets. Splits: 2-season, 1-season, and recent 10-matchweek partitions; grid/randomized hyperparameter search.
- Equations given: Odds = 1/P (P = implied probability); overround/vig = Σ(1/odds) − 1. Results mapped W→1, D→0, L→2; venue home=1/away=0; team/opponent integer encoding. Accuracy/precision/recall/F1 from sklearn. No novel equations; evaluation is accuracy-only (no log-loss/Brier reported).

## Data sources named
- fbref.com scrape, EPL 2021–22 and 2022–23 seasons; 9 data sections (scores, shooting, goalkeeping, passing, ...); 34 stats per section → 1520 rows × 52 columns. Last matchweek of 2022–23 replaced with season-long team averages (flagged as possible target leakage). No code repo; data not shared. The "recreate bookmaker odds" framing is aspirational — the paper never derives fair odds from model probabilities nor compares against actual bookmaker odds.

## Findings (numbers and facts, not vibes)
- [SCHEME] Accuracies (2-season / 1-season / 10-matchweek): Random Forest 0.6495 / 0.6733 / 0.4773; SVM 0.66 / 0.7267 / 0.45; KNN 0.6152 / 0.6267 / 0.3864 (reported); XGBoost 0.63 / 0.68 / 0.47. Best overall: SVM 1-season 72.67%. 10-matchweek splits collapse to ~0.45–0.47.
- [SCHEME] Most influential features: expected goals (xG), expected goals against (xGA), shot-creating actions (SCA), goal-creating actions (GCA) — chance-creation metrics dominate match-outcome prediction.
- [TRUST-SIGNAL] Draw class (0) is near-unpredictable: recall 0.06–0.41 across models — draws are the accuracy ceiling. This maps to GSE's coin-flip NFL games (spread within ±2.5): do not over-allocate model capacity or stake on intrinsically low-signal outcomes.
- [OTHER] Feature-selection ablation: all-features usually beat 10-feature subsets but differences negligible; no universally superior selector (RF best with RFE at 0.69; SVM/XGB best with all features; KNN best with correlation subset).
- [OTHER] Matchweek-38 forecast polarization: RF put 3833/5000 draw votes on Palace-Forest and 3934/5000 away votes on Leeds-Tottenham.
- [OTHER] Limitations noted in the file: team/opponent integer encoding lets tree models memorize team identity; only 2 EPL seasons (1520 rows); single-author industry (Deloitte) paper, not peer-reviewed; literature padding with the author's own unrelated ML papers.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: feature-priority prior — chance-creation metrics (xG/xGA/SCA/GCA; NFL analogs: EPA, success rate, explosive-play rate) belong at the top of GSE's feature hierarchy, and all-features ≈ fine, so no feature selector dominates.
- TRUST-SIGNAL: draw-class difficulty (recall 0.06–0.41) supports a staking/strategy rule for GSE's coin-flip games — abstain or stake-reduce rather than overfitting low-signal outcomes.
- OTHER: no new predictive method; overlaps existing map coverage (Poisson/Dixon–Coles, Elo), adds only feature-priority and draw-difficulty data points.

## Engine-actionable? (yes/no + one-line what)
Yes — keep as feature-selection guidance (prioritize EPA/success-rate/explosive-play family, skip selector complexity) and run the coin-flip experiment: quantify GSE accuracy on NFL games with spread within ±2.5 and test whether abstaining/stake-reducing on them improves bankroll growth under fractional Kelly.

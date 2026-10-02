# arxiv-program/research/2026-09-21/arxiv-deep/0651-openfpl-fantasy-forecasting-ensemble.md
## What it is (1-2 sentences)
Ledger brief for arXiv:2508.09992 (Groos, 2025), an open-source position-specific XGBoost/Random Forest ensemble for Fantasy Premier League forecasting (note: "football" = soccer) that rivals the paid FPL Review Massive Data Model using only public data. Verdict: ADAPT — the methodology (position-specific ensembles, multi-horizon features, entropy-weighted training toward high-return players, prospective multi-horizon evaluation) ports directly to NFL DFS/fantasy projections; the transferable insight is weighting training toward high-ceiling players, where rank gains come from.

## Key metrics/methods (formulas where given, else "not specified")
- Per position (GK/DEF/MID/FWD/AM): K-Best Search (K=10, extended with automatic threshold from first-K RMSE) over RF (n_estimators {200,400,800}, max_depth {10,20,None}) and XGBoost (n_estimators {300,600,1200}, max_depth {3,5,7}, lr {0.01,0.05,0.1}), optimized for RMSE. Ensemble: median of top-50 models per position (10 per fold × 5 folds).
- Sample weighting: position-specific entropy-based discretization of target (2/3/4/3/5 bins for GK/DEF/MID/FWD/AM) + balanced class weights, clipped at 95th percentile → up-weights high-return players. This is the paper's key trick.
- Return categories: Zeros (DNP), Blanks (≤2 pts), Tickers (3–4), Haulers (≥5). No novel equations; standard RF/XGBoost + MinMax scaling + KBinsDiscretizer weighting.
- Features: player (Xp), team (Xt), opponent (Xo) features averaged over 1/3/5/10/38-match horizons + current status (Xs: FPL availability %, league ranks). 196 features (GK), 206 (DEF/MID/FWD), 122 (assistant managers).
- Target: normalized FPL points next match, at 1/2/3-gameweek horizons. Code: https://github.com/daniegr/OpenFPL (MIT).

## Data sources named
- FPL API + Understat API (public), FPL Historical Dataset (Vaastav Anand). Development: 4 seasons 2020-21–2023-24; 5-fold CV split by TEAMS (26 PL teams allocated to folds C1–C5, 16 team-seasons each, balanced upper/lower table). Evaluation: PROSPECTIVE — 2024-25 GW 32–38, predictions generated day-before-deadline from live APIs; benchmark = FPL Review Massive Data Model (paid); baseline = last-5-match mean.

## Findings (numbers and facts, not vibes)
- Both OpenFPL and FPL Review beat last-5 baseline by 5–34% RMSE across categories.
- OpenFPL WINS on high-return: Tickers and Haulers at all 3 horizons (1-GW Haulers RMSE: OpenFPL 5.142 vs FPL Review 5.172 vs Last5 5.613; Tickers: 1.517 vs 1.594 vs 2.136).
- FPL Review wins on Zeros/Blanks (expected-minutes edge): 1-GW Zeros RMSE 0.689 vs OpenFPL 0.818.
- Position highlights: OpenFPL 19% better RMSE on FWD Blanks; FPL Review 26% better on AM Tickers. Horizon effect only for low-return categories (minutes info decays); no systematic horizon effect for high-return.
- NFL port spec (from file): position-specific ensembles (QB/RB/WR/TE/DST) over 1/3/5/10/17-game horizons + status (injury designation, practice participation); entropy-binning sample weighting toward high-ceiling outcomes; team-split CV; PROSPECTIVE evaluation on 2024 from pre-lock data vs GSE's current projections and last-5 baseline; separate snap-share/route-share availability sub-model (the paper's acknowledged minutes weakness).
- Reproducible tests: Test 1 — gate = beats last-5 by ≥10% RMSE overall AND beats GSE baseline on top-quintile actual scores by ≥5% RMSE. Test 2 (weighting ablation) — weighted version wins on top-quintile outcomes by ≥3% RMSE.
- Improvement experiment: indirect vs direct forecasting — forecast constituent stats (targets, receptions, yards, TDs) then apply DFS scoring vs direct points forecasting; hypothesis: indirect wins on ceiling games (TDs are the skewed component), direct on median; hybrid (direct median + indirect ceiling) could dominate both.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Position-specific ensembles with ceiling-weighted training — QB-BEHAVIOR (INFERENCE: QB ceiling outcomes drive GPP rank gains; weighting training toward high-ceiling players is the engine-side analogue of stacking for tournaments)
- Team-split CV to prevent within-team leakage — TRUST-SIGNAL (methodological hygiene for NFL backtests: split by team to avoid same-game leakage)
- Prospective day-before-deadline evaluation protocol vs a commercial benchmark — TRUST-SIGNAL (judge fantasy projections on forward-looking, locked data, not in-sample fits)
- Entropy-binning sample weighting toward high-return outcomes — OTHER (directly transferable training trick; GSE's DFS value lives in ceiling, not median)
- Direct-vs-indirect (constituent-stats) forecasting experiment — OTHER (stat-projection pipeline design)

## Engine-actionable? (yes/no + one-line what)
Yes — port the position-specific entropy-weighted ensemble recipe to NFL DFS projections (QB/RB/WR/TE/DST) with prospective 2024 evaluation gates (≥10% RMSE over last-5, ≥5% on top-quintile games) and the indirect-vs-direct forecasting experiment; MIT-licensed reference code at https://github.com/daniegr/OpenFPL.

# arxiv-program/research/2026-09-21/arxiv-deep/1799-mixed-rank-match-prediction-in-moba.md
## What it is (1-2 sentences)
A ledger on Hodge et al. (arXiv:1711.06498v1): tests whether abundant extremely-high-skill public DotA 2 matches can serve as proxy training data for scarce professional matches — they can (small accuracy drop), but critically the optimal algorithm differs by tier (simple LR on pro, RF on mixed), via pre-match hero vectors and per-minute sliding-window in-game models evaluated on a strict Kiev Major holdout.
## Key metrics/methods (formulas where given, else "not specified")
- Hero vector: xᵢ = 1 if hero i in Radiant, −1 if in Dire, 0 otherwise (113-dimensional tri-state).
- Per-minute model M_t trained on 5-min sliding windows X_{rt} = {x_{i,t−4}, …, x_{i,t}}; 30 features per timestamp as Dire/Radiant/R−D difference/gradient.
- Logistic regression (ridge varied) vs random forests (trees varied) × {all features, wrapper subset, CFS filter}; chronological 66/34 splits; WEKA 3.8.
## Data sources named
1,933 DotA 2 replays (27 Mar–4 May 2017): 270 pro matches (13.97%) + 1,663 extremely-high-skill public matches (MMR >> 6000, 99.81 percentile), parsed with Clarity; tournament test = 113 Kiev Major matches (24–30 Apr 2017).
## Findings (numbers and facts, not vibes)
- Pre-match accuracy (Mixed-Hero / Pro-Hero): LR wrapper 58.7519 / 50.4425; RF wrapper 58.2953 / 55.7522.
- In-game 20-min (Mixed-InGame / Pro-InGame): LR single-feature (Kills R−D) 74.1433 / 75.2212; LR all 73.3645 / 70.7965; RF CFS 76.1682 / 68.1416.
- Mixed training predicts pro matches with only slightly lower accuracy than mixed-on-mixed (in-game 75.22 vs 76.17).
- Algorithm flip: pro in-game best = LR single feature (kill differential, 75.22); mixed in-game best = RF+CFS (76.17); pro hero best = RF+wrapper (55.75); mixed hero best = LR+wrapper (58.75).
- Wrapper beats CFS on hero data; CFS beats wrapper on in-game data (correlated features like XP/kills favor redundancy-penalizing filters).
- Hero-only ≤58.75 vs in-game ≤76.17; pro matches last longer (100% ≥ 20 min vs 97.6%), consistent with longer = less predictable.
- Limitations: accuracy only, no calibration; single game/meta window; 113-match pro test set; LR-single-feature win may be small-sample noise (authors flag overfitting).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Scarcity fix: up-weight/augment elite-tier training (playoffs) with regular-season data, test strictly on held-out elite games (OTHER — training-data design)
- Tier-specific model selection: best algorithm class may flip between regular season and playoffs — don't assume one model class everywhere (TRUST-SIGNAL)
- Per-minute sliding-window in-game models as template for live win-probability product (OTHER — in-game modeling)
## Engine-actionable? (yes/no + one-line what)
yes — Run the nflverse experiment: playoff-up-weighted all-games training vs playoff-only (adopt if playoff-holdout Brier improves ≥0.002) and a separate algorithm bake-off on the playoff holdout to check for the model-class flip.

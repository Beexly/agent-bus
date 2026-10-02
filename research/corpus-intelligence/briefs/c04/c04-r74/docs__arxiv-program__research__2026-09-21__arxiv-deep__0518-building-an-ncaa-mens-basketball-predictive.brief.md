# docs/arxiv-program/research/2026-09-21/arxiv-deep/0518-building-an-ncaa-mens-basketball-predictive.md
## What it is (1-2 sentences)
A deep-read note on the Kaggle 2014 "March Machine Learning Mania" winning team's paper (arXiv:1412.0248v1) — an NCAA men's basketball probability model merging a Las Vegas spread-based logistic regression (M₁) with a Ken Pomeroy efficiency-metrics logistic regression (M₂) via a tuned ensemble, plus a formal skill-vs-luck simulation. Reader verdict: ADAPT — three methodological transfers (spread-calibrated market-prior logistic, log-loss-tuned ensemble weights, luck-quantification simulation), no coefficients portable to football.
## Key metrics/methods (formulas where given, else "not specified")
- Contest scoring: LogLoss_ij = −(y_i log(ŷ_ij) + (1−y_i)log(1−ŷ_ij))·I(Z_i=1); LogLoss_j = (1/63)Σ_i LogLoss_ij.
- M₁: logit(Pr(y_g=1)) = β₀ + β₁·spread_g; ŷ = exp(β̂₀+β̂₁·spread)/(1+exp(...)); trained on 65,043 games over 12 seasons.
- M₂: logistic on adjusted offensive/defensive efficiencies for both teams + neutral-site indicator; selected from 11 candidate fits via time-split (train pre-March-1, select on post-March-1) across 11 seasons.
- Ensemble: S₁ = 0.75·M₁ + 0.25·M₂; S₂ = 0.25·M₁ + 0.75·M₂; weight direction from 2008–2013 tournament log-loss (optimum 0.69 on M₂ / 0.31 on M₁).
- Luck simulation: 10,000 simulated tournaments × 5 "true" probability scenarios (S₁, S₂, median of all 433 entries, median of top-10, all-coin-flip); recorded median rank, P(win), P(top-10), unique winners.
- Assumptions: logistic MLE exactly minimizes the contest's log-loss; markets near-efficient so spread is best single prior (Harville 1980, Stern 1991); ensemble members err in different regions (Hansen & Salamon 1990).
## Data sources named
Las Vegas point spreads for every D1 men's game since 2002–03 (covers.com); Ken Pomeroy efficiency metrics (kenpom.com, seasons since 2001–02: team rating, off/def efficiency per 100 possessions, adjusted versions, tempo, adjusted tempo, neutral-site indicator). Kaggle contest: 2,278 possible matchups, 63 scored games, 433 entries from 248 teams. No code released; later-round spread-prediction regression proprietary/undisclosed.
## Findings (numbers and facts, not vibes)
- S₂ won Kaggle 2014: log-loss 0.52951 (1st of 433); S₁ would have placed 4th (0.54107). Correlation between entries 0.94; 78% of game predictions within 0.10.
- Model selection (test log-loss): best 0.487 (adjusted efficiencies + neutral); unadjusted 0.538; interactions 0.488–0.493; neutral-site indicator automatic (+0.013 gain).
- Simulations: if S₂ were true probabilities, S₂ median rank = 14, P(win) = 11.65%, P(top-10) = 44.47%; if S₁ true, S₁ P(win) = 15.57%, P(top-10) = 48.79%. Vs random baseline 1/433 ≈ 0.23%, skill multiplies win odds ~50–60×. Under median-of-top-10 as truth, P(win) ≈ 2% for both; under all-coin-flip, neither ever won. 332–348 unique winners of 433 across simulations (~20% of entries never winnable).
- Context: UConn (7-seed) won 2014 — only 5th champion seeded worse than 3 since 1979 — making the winning log-loss (0.529) higher than typical simulated winning scores.
- Limitations: efficiency metrics included postseason games (lookahead bias, acknowledged, hedged not eliminated); single-tournament test (n=63 games); basketball-specific — no fitted coefficients transfer to football.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the 50–60× skill multiplier is an upper bound under the generous assumption the entry IS the truth; the paper itself quantifies that even perfect probabilities win a 433-entry contest only ~12% of the time — calibrate expectations for any GSE contest/pick product.
- OTHER: first corpus paper combining spread→logistic-calibrated market prior ensembled with an efficiency model, weights tuned on past seasons' log-loss, plus formal skill-vs-luck simulation — methodological, not a duplicate model.
## Engine-actionable? (yes/no + one-line what)
Yes — fit logit(P(home win)) = β₀ + β₁·(de-vigged spread) on 2010–2024 NFL games as the market leg of the GSE ensemble, grid-search market-vs-model weights walk-forward by season on log-loss (adopt only if tuned ensemble beats both legs in ≥6 of 9 held-out seasons with no season worse by >0.01), and replicate the 10k-season luck simulation to publish honest "even perfect probabilities only win X% of the time" expectation-setting; estimated effort ~2–3 days.

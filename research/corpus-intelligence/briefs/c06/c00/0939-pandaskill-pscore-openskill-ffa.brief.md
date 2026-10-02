# arxiv-program/research/2026-09-21/arxiv-deep/0939-pandaskill-pscore-openskill-ffa.md
## What it is (1-2 sentences)
Deep read of De Bois et al. (2025, arXiv:2501.10049): PandaSkill — a two-step esports rating framework: PScore (per-role XGBoost predicting win probability from end-game stats → percentile → 0–100 performance grade) feeding free-for-all OpenSkill updates (players ranked by performance, not team outcome), with dual contextual+meta ratings for isolated regional pools. Verdict in file: ADAPT — the pipeline (PScore → FFA-OpenSkill → dual ratings) ports to NFL player grades and performance-decoupled ratings; LoL-specific features don't.
## Key metrics/methods (formulas where given, else "not specified")
- PScore: per-role XGBoost (2,000 rounds, lr 0.01, monotonicity constraints — worthless-death and contest-loserate forced negative), standardized inputs, 5-fold CV; predicted win prob → percentile transform (learned on train) → 0–100.
- Skill: OpenSkill Bayesian S_i ~ N(μ_i, σ_i²), init μ=25, σ=25/3; single value θ_i = μ_i − 3σ_i; FFA update Ω_FFA(μ^t, σ^t, PScore).
- Dual ratings: μ_i = μ_i^ctx + μ_i^meta; σ_i² = σ_ctx² + σ_meta²; intra-region games update ctx only, inter-region update meta only with contextual-lower-bound offsets (TrueSkill2-style); P(S_i>S_j) = Φ((μ_i−μ_j)/√(σ_i²+σ_j²)).
## Data sources named
Professional League of Legends, 2019-09-15 to 2024-09-15: 37,388 games, 4,927 players, all regions (Leaguepedia API); inter-region games scarce (Worlds 592 + MSI 312 vs LCK 2,438, LPL 3,643). Code + data + web app open-sourced (PandaSkill GitHub). 16 engineered features (KLA, gold/XP/CS per min, wards/min, damage normalized, worthless-death ratio, free-kill ratio, objective contest rates).
## Findings (numbers and facts, not vibes)
- PScore: accuracy 90.74% (SD 0.60) vs PlayeRank 91.00%, PI 91.30% (monotonicity costs ~1%); ECE 0.93% (SD 0.03) vs PlayeRank 1.28%, PI 2.28%; role fairness (Wasserstein) 0.09–0.44 vs PI 0.35–0.66 vs PlayeRank 2.44.
- Outcome forecasting (all/intra/inter): PScore+EWMA 63.06/63.33/52.34; PScore+Meta_FFA_OpenSkill 64.98/64.86/70.07 — meta rating fixes inter-region (52.34→70.07); FFA hurts team-outcome forecasting (61.71 vs 67.39 inter) but significantly improves expert concordance.
- Expert concordance: majority 80.63% (SD 6.52), unanimity 88.98% (SD 5.99, best); Meta_FFA_TrueSkill ECE 2.85 (worse calibration).
- Worked example: HLE vs T1 (T1 won): HLE losers Peanut/Zeka gained rating; T1's Oner/Zeus lost rating despite winning; top-50 #1 Chovy 102.81.
- Limitations: PScore features are end-of-game aggregates (descriptive grade, not live predictor); expert survey = PandaScore's own odds traders (potential bias); LoL 5-fixed-role structure doesn't map cleanly to football.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: NFL PScore — per-position XGBoost (QB: EPA/play, CPOE, success rate, sack rate, turnover-worthy plays; skill: yards/route, TPRR, drops; defense: pressure rate, stops) → percentile → 0–100 weekly grade (publishable as "Galaxy Grades" content); FFA-OpenSkill updates decoupled from team W/L — a QB can gain rating in a loss.
- COACHING: dual ctx/meta ratings port to college→pro transitions (rookie ratings = college ctx + conference meta); worthless-play features for football (turnover-worthy throws not intercepted, sacks on 3rd-and-long, drops on 3rd down; free production from busted coverages/garbage time) extend the paper's Harm factor.
## Engine-actionable? (yes/no + one-line what)
yes — build NFL QB PScore + FFA-OpenSkill ratings on nflverse 2018–2025 (train 2018–2021, forecast 2022–2025); adopt if it beats an EWMA-of-EPA/play baseline by ≥2pp accuracy or the rating ranking hits Spearman ≥0.7 vs PFF season grades.

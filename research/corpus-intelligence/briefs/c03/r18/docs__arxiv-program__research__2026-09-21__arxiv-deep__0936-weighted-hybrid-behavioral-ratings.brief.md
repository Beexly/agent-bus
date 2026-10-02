# docs/arxiv-program/research/2026-09-21/arxiv-deep/0936-weighted-hybrid-behavioral-ratings.md
## What it is (1-2 sentences)
Full-read ledger of Dehpanah et al. (2022), arXiv:2207.00528: "Behavioral Player Rating in Competitive Online Shooter Games" — interpretable behavioral player ratings built from engineered features via factor analysis + logistic-regression weighting. Verdict in file: ADAPT — third in the 0934→0935→0936 chain (metrics → single-feature behavior → weighted hybrid); the weighted-hybrid construction pipeline transfers to NFL player ratings.
## Key metrics/methods (formulas where given, else "not specified")
- Feature engineering in four groups: skill/aggression/expertise (KD, killing spree, damage, accuracy, DBNO, melee/grenade kills); outcome-derived (win rate, rank ratio); interests/tactics (survival time, distance); support (assists, flag steals); negative (betrayal, suicide); experience (games played).
- Factor analysis (PCA extraction, oblique rotation; loadings normalized to sum to 1): Halo-Slayer → 1 factor (Skill); Halo-CTF → 1 (Skill); CS:GO → 2 (Skill, Support); PUBG → 2 (Skill, Strategy).
- Three rating constructions: single-factor μ; naive hybrid η(p) = Σμ_i(p); weighted hybrid Ω(p) = Σω̂_i(p)μ_i(p), weights from logistic regression (binary for head-to-head, proportional-odds ordinal for battle royale), |weights| normalized to 1, sign kept.
- Team rating = max of member ratings (their 2021 CoG team-aggregation study; 0934 used sum — disagreement never reconciled).
- Prediction: Φ_H2H / Φ_F4A sort teams by rating descending → predicted rank list.
- Logistic weight classification accuracies: 61.8% (Slayer), 63% (CTF), 65.4% (CS:GO); ordinal PUBG 72.2% NDCG.
## Data sources named
- Halo 3 Slayer: >2,300 matches, 270 players (HaloFit/DeLong et al.). Halo 3 CTF: >1,800 matches, 260 players.
- CS:GO (tactical 5v5): ~20,000 matches, 4,500 players (Kaggle). PUBG duo: >25,000 matches, 825,000 players (Kaggle).
- All matches timestamp-sorted; Z-scored features; new players at 0. Chronological online evaluation; no code stated.
## Findings (numbers and facts, not vibes)
- Weighted hybrid Ω best overall in all 12 dataset×setup cells vs Elo/Glicko/TrueSkill.
- Halo Slayer (acc): All — Elo 61.4 best system, Ω 63.0. Top-tier — TrueSkill 61.5, Ω 64.1. Frequent — TrueSkill 61.8, Ω 63.2.
- Halo CTF (acc): All — Elo 63.9, Ω 66.6. Top-tier — TrueSkill 65.0, Ω 68.8. Frequent — TrueSkill 62.8, Ω 67.7.
- CS:GO (acc): All — Elo 64.7, Ω 65.2. Top-tier — TrueSkill 57.2 (systems collapse), Ω 67.0 (~10-point gap). Frequent — Elo 64.3, Ω 66.1.
- PUBG (NDCG%): All — TrueSkill 61.7, Ω 67.0. Top-tier — Elo 71.7, Ω 79.2. Frequent — TrueSkill 67.9, Ω 76.7.
- Naive hybrid η also beats systems in most cells (e.g., PUBG top-tier 70.1 vs Elo 71.7 — one of few misses).
- Factor loadings (Table I): CS:GO Skill = Damage 0.3871 + KD 0.2707 + Accuracy 0.1838 + WinRate 0.1585; Support = KillAssist 0.6696 + FlashAssist 0.3304. PUBG Skill = Damage 0.3448 + KD 0.3319 + DBNO 0.3233; Strategy = Survival 0.3962 + Walking 0.3371 + Riding 0.2668.
- Regression weights (Table II): CS:GO — Skill 0.5523, Experience 0.2767, Support 0.1710. PUBG — Strategy 0.3518, Experience 0.2833, Skill 0.2572, RankRatio 0.1077. Halo-Slayer — Skill 0.3307, Experience 0.3202, KillAssist 0.2494, Betrayal −0.0650, Suicide −0.0347. Halo-CTF — Skill 0.3309, Steal 0.2494, Experience 0.2190, Betrayal −0.0767, Melee 0.0736, Suicide −0.0504.
- No significance tests or confidence intervals on the 12-cell sweep (flagged limitation).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Factor-analysis + logistic-weighted linear ratings beat Elo/Glicko/TrueSkill everywhere tested while staying interpretable — TRUST-SIGNAL (method validation) for building explainable GSE player ratings.
- Max-member team aggregation (0936) vs sum aggregation (0934): unsettled — testable on NFL data; QB is the natural max-candidate position — QB-BEHAVIOR.
- Negative-behavior features (betrayal, suicide) had tiny weights in shooters, but football's negative tail (turnover-worthy plays, drops, penalties, sacks taken) is a "Harm" factor candidate for ATS-outlier prediction — QB-BEHAVIOR.
- Ω's linear form with named factors ("Skill 55% / Experience 28% / Support 17%") is a publishable content surface while keeping the metric internal — aligns with public/private doctrine — OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Build NFL Ω-ratings: factor-analyze QB features (Skill: EPA/play, CPOE, success rate; Support; Strategy: pace, play-action rate, 4th-down aggressiveness; Experience: career snaps), weight factors by logistic regression on game outcomes 2018–2021, freeze, and walk-forward predict 2022–2025 testing both max-QB and sum team aggregation; gate is beating GSE Elo log-loss by ≥0.005.

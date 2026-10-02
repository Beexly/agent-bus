# docs/arxiv-program/research/2026-09-21/arxiv-deep/0936-weighted-hybrid-behavioral-ratings.md
## What it is (1-2 sentences)
Full-read deep ledger of Dehpanah et al. (arXiv:2207.00528, 2022), third in the 0934→0935→0936 arc: interpretable behavioral player ratings built by factor analysis on engineered in-game features, with logistic-regression weights combining factors into a weighted hybrid rating Ω, tested across four shooter modes. Verdict ADAPT — beats Elo/Glicko/TrueSkill in all 12 dataset×setup cells.
## Key metrics/methods (formulas where given, else "not specified")
- η(p) = Σ μ_i(p) (naive hybrid); ℱ(p) = Σ ℓ_i(p)μ_i(p) (factor with loadings ℓ); Logit(Ŷ) = I + Σ ω_iμ_i + ε (binary) / proportional-odds for ordinal; Ω(p) = Σ ω̂_i(p)μ_i(p), |ω| normalized to 1, sign kept.
- CS:GO example: Support = 0.669590·KillAssist + 0.330410·FlashAssist; Ω_CS:GO = 0.552309·Skill + 0.276699·Experience + 0.170992·Support.
- Team rating = MAX of member ratings (star-player model, from their 2021 CoG study; disagrees with 0934's sum — never reconciled).
- Prediction: Φ_H2H / Φ_F4A sort teams by rating descending.
## Data sources named
- Halo 3 Slayer (team deathmatch 4v4 pro): >2,300 matches, 270 players. Halo 3 CTF: >1,800 matches, 260 players (both via HaloFit/DeLong et al.).
- CS:GO (5v5 tactical): ~20,000 matches, 4,500 players (Kaggle). PUBG duo (battle royale): >25,000 matches, 825,000 players (Kaggle).
- All matches timestamp-sorted; features Z-scored; new players initialized at 0.
## Findings (numbers and facts, not vibes)
- Ω best overall in all 12 cells. Halo Slayer acc: All — Elo 61.4, Ω 63.0; Top-tier — TrueSkill 61.5, Ω 64.1; Frequent — TrueSkill 61.8, Ω 63.2.
- Halo CTF acc: All — Elo 63.9, Ω 66.6; Top-tier — TrueSkill 65.0, Ω 68.8; Frequent — TrueSkill 62.8, Ω 67.7.
- CS:GO acc: All — Elo 64.7, Ω 65.2; Top-tier — TrueSkill 57.2 (systems collapse), Ω 67.0 (~10-point gap); Frequent — Elo 64.3, Ω 66.1.
- PUBG NDCG%: All — TrueSkill 61.7, Ω 67.0; Top-tier — Elo 71.7, Ω 79.2; Frequent — TrueSkill 67.9, Ω 76.7.
- Naive hybrid η beats systems in most cells (e.g., PUBG top-tier 70.1 vs Elo 71.7 — one of few misses). Single factors (KD, win rate, accuracy) beat systems mainly on top-tier setups.
- Regression weights: CS:GO — Skill 0.5523, Experience 0.2767, Support 0.1710; PUBG — Strategy 0.3518, Experience 0.2833, Skill 0.2572, RankRatio 0.1077; Halo-Slayer — Skill 0.3307, Experience 0.3202, KillAssist 0.2494, Betrayal −0.0650, Suicide −0.0347; Halo-CTF — Skill 0.3309, Steal 0.2494, Experience 0.2190, Betrayal −0.0767, Melee 0.0736, Suicide −0.0504.
- Binary CV accuracies of the weighting logistic regressions: 61.8% (Slayer), 63% (CTF), 65.4% (CS:GO); ordinal PUBG 72.2% NDCG.
- Factor loadings: CS:GO Skill = Damage 0.3871 + KD 0.2707 + Accuracy 0.1838 + WinRate 0.1585; PUBG Skill = Damage 0.3448 + KD 0.3319 + DBNO 0.3233; PUBG Strategy = Survival 0.3962 + Walking 0.3371 + Riding 0.2668.
- Limitations per file: no significance tests/CIs; shooter-genre only; negative features (betrayal/suicide) had tiny weights; top-tier selection used latest TrueSkill (post-hoc selection caveat).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Interpretable factor ratings (Skill/Support/Strategy/Experience) beat Elo/TrueSkill in all 12 cells — named-factor breakdowns are publishable content (TRUST-SIGNAL, QB-BEHAVIOR)
- Team = max(member) vs sum aggregation is empirically unresolved in the chain — testable on NFL (OTHER)
- Experience carries ~22–32% weight in all four games — tenure is a durable predictive factor (OTHER)
- "Harm" factor (turnover-worthy plays, drops, penalties) untested for predicting ATS outliers — INFERENCE: candidate negative-tail feature (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Build NFL Ω-rating: factor-analyze QB features (EPA/play, CPOE, success rate = Skill; support/strategy/experience groups), weight by logistic regression on 2018–2021 game outcomes, test max-QB vs sum aggregation on 2022–2025 log-loss vs GSE Elo; ADAPT confirmed at ≥0.005 log-loss beat with linear form intact.

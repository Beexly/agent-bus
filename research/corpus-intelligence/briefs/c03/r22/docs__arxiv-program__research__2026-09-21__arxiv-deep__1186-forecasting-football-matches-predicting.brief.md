# docs/arxiv-program/research/2026-09-21/arxiv-deep/1186-forecasting-football-matches-predicting.md
## What it is (1-2 sentences)
Deep read of arXiv:2001.09097 (Wheatcroft 2020): predicts intermediate soccer match statistics (shots, corners) with GAP-style two-sided ratings and feeds predicted stat differentials into an ordinal logistic outcome model, demonstrating long-term robust gambling profit. Verdict: ADAPT — GAP-on-intermediate-stats philosophy transfers directly to NFL (EPA/play, pressure, first downs) as features for win/spread/total models.
## Key metrics/methods (formulas where given, else "not specified")
- GAP ratings: 4 ratings per team per statistic — home attacking (Hᵃᵢ), home defensive (Hᵈᵢ), away attacking (Aᵃᵢ), away defensive (Aᵈᵢ); predicted home attacking plays Ŝₕ = (Hᵃᵢ + Aᵈⱼ)/2; away Ŝₐ = (Aᵃⱼ + Hᵈᵢ)/2; differential Ŝₕ − Ŝₐ is the regressor.
- GAP updates (Eqs. 7–8): Hᵃᵢ ← max(Hᵃᵢ + λφ₁(Sₕ − (Hᵃᵢ+Aᵈⱼ)/2), 0) (and mirrored); λ learning rate; φ₁, φ₂ ∈ (0,1) govern cross home/away influence. Parameters (λ, φ₁, φ₂) selected by least squares minimizing statistic-MSE between seasons over all previous seasons.
- Outcome model: ordinal logistic — log(p̂ₕ/(p̂_d+p̂ₐ)) = α̂ + Σβ̂ᵢVᵢ. Features: predicted differences (goals, shots on/off target, corners) + odds-implied probability.
- Betting: Level Stakes (unit bet when p̂ᵢ > rᵢ, forecast probability exceeds odds-implied) and Kelly-stake normalized so total stakes = 1 unit; genuinely out-of-sample (regression refit each match day).
- Core principle: information content of a predicted statistic = statistic importance × predictability — weight statistics by both.
## Data sources named
www.football-data.co.uk (free): 22 European leagues, 143,672 matches since 2000/2001; 77,196 with shots/corner data; 49,884 eligible for betting (match statistics available AND home team has played ≥6 matches AND has ≥6 remaining that season). Bookmaker odds (multiple bookmakers) for match outcome, over/under 2.5, Asian Handicap.
## Findings (numbers and facts, not vibes)
- Statistic-prediction MAE (GAP vs sample mean): home shots off target 1.86 vs 3.77 (the large win); home shots on target 4.77 vs 5.22; home corners 2.31 vs 2.34; home goals 1.01 vs 1.02; away goals 0.87 vs 0.85 (worse than mean).
- AIC (relative to null; lower better): predicted stats combo −4,246.9 / −5,750.8 (with odds); predicted goals alone with odds −5,617.8 vs odds-only null −5,619.1 — predicted goals add NO information beyond odds. Most informative predicted statistic: shots off target, then corners, then shots on target.
- Level Stakes mean % profit (with odds): best combo off-target+corners +1.85% (+0.17, +3.39).
- Kelly mean % profit (with odds): best on/off/corners combo +5.01% (+3.38, +6.76); significant for all combos including ≥1 predicted statistic other than goals.
- Robustness: profit significant in 3/5 overround intervals; ~18% of matches had negative overround (arbitrage) but profit not driven by it.
- Decline: cumulative profit curves show downturn in recent seasons across all 22 leagues — edge decaying as markets absorb the information.
- GSE implementation: GAP-for-NFL on EPA/play, pressure rate, first-down rate, explosive-play rate from nflverse pbp 2009–present; ordinal logistic → NFL binary win + spread cover + total models; walk-forward from 2015, refit weekly; test value rule vs closing lines; effort ~1–2 engineer-weeks.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GAP-style two-sided (offense/defense × home/away) exponential ratings on intermediate stats — new capability (GSE covers Elo/Glicko/TrueSkill/Bradley-Terry but no GAP): SCHEME (team-strength modeling formalism).
- Predictability × importance weighting of statistics; the most predictable stat (off-target shots) beats the most outcome-relevant one (on-target) in prediction: SCHEME.
- Predicted stat differentials as outcome-model features tested for incremental value vs market-implied probability: TRUST-SIGNAL (value-vs-odds edge testing).
- Edge decay dynamics (markets absorbed shot-statistic info over seasons): OTHER (market-efficiency/edge-decay awareness).
## Engine-actionable? (yes/no + one-line what)
yes — Build GAP-for-NFL two-sided ratings on EPA/play, pressure rate, first-down rate and feed predicted differentials into win/spread/total models with walk-forward value-vs-odds testing (adoption gate: ≥0.005 Brier improvement AND positive CLV AND realized ROI CI excluding zero on 2019–2024).

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0931-competitive-balance-score-difference.md
## What it is (1-2 sentences)
Full-text read of arXiv:2006.13763 (Nikolakaki et al., 2020, EA internship work), which asks whether competitive balance (predicted final score difference near zero) is better predicted by regressing the signed score difference or by win-probability models, and whether a well-engineered linear model can rival a neural network — on 500,000+ EA online team-sports games. Verdict: ADAPT — two transferable results: margin regression beats win-prob targets for balance judgments, and linear ≈ NN at ~100× inference speed.

## Key metrics/methods (formulas where given, else "not specified")
- Balance definition: match M between teams T1, T2 is balanced iff |r| < θ, where r = predicted final score difference and θ is a threshold hyperparameter.
- Match vector M = (t_1, t_2, m): team features t (mean + std of each player feature across the team) concatenated with match features m.
- f(r) = 1_{|r|<θ}(r); Delalleau win-prob baseline: balanced iff |Pr(A beats B) − 1/2| ≤ ω, ω tuned to 0.3.
- Player feature categories: match experience (num_matches, num_wins, freq_wins), role experience (num_role_i, freq_role_i), play style (micro-events: scoring attempts, giveaways, hits, takeaways), dropout history (num_dropout, freq_dropout). ~100 features/mode, z-score normalized.
- Validation: time-ordered sliding window — train days 1..K−3, validate days K−2, K−1, test day K; shift daily; 20 consecutive test days averaged. Metric: F1 on the balanced/unbalanced label.

## Data sources named
EA-published online team sports game (unnamed), 3v3 and 6v6 modes; >100,000 players, >500,000 games over a 3-month period. Proprietary; never deployed live.

## Findings (numbers and facts, not vibes)
- Test-set F1 (mean ± SD, 20 days). 3v3: Dummy 0.00, AvgSkill 0.00, Linear 0.53 (±0.02), RndFrst 0.56 (±0.02), NN 0.59 (±0.02), Linear+ 0.60, NN+ 0.62. 6v6: Dummy 0.60, AvgSkill 0.60, Linear 0.68, RndFrst 0.61, NN 0.68, Linear+ 0.68, NN+ 0.71.
- Industry-standard mean-skill (AvgSkill) approach: F1 0.00 on 3v3, no better than Dummy on 6v6.
- Score-difference models beat win-prob models in 3 of 4 matched pairs; Delalleau+ best win-prob: 0.59 (3v3)/0.70 (6v6) vs NN+ score-difference: 0.62/0.71. Abstract: ~15% and ~2% improvement over previous definitions in linear/non-linear models.
- Feature engineering (recursive-feature-elimination best subsets) adds up to ~4% (Linear → Linear+).
- Timing: Linear+ trains in 5.6 s (3v3)/3.7 s (6v6), infers in 5.0e-05 s/8.0e-05 s; NN+ trains in 470 s/160 s, infers in 2.4e-02 s/2.8e-02 s. Linear inference ~100×+ faster for ~3–4% relative F1 sacrifice (0.62→0.60, 0.71→0.68).
- Significant features (all p < 0.001): avg_freq_dropout +1.128/+1.164; avg_assists_abs_diff +0.889/+0.741; avg_freq_defense +0.850/+0.918; avg_freq_left +0.856/+0.504; avg_freq_right +0.843/+0.494; avg_freq_wins −0.334/−0.178 (negative — more past wins predicts less balance); cnt_players +0.117/+0.142.
- Caveat: dataset contains only matches between already-close-skill teams, so skill rating's apparent irrelevance is selection bias (acknowledged).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — margin-distribution head for the engine: add a regression head predicting signed margin alongside the win-probability head; use it to sharpen totals and ATS probabilities and to define a "competitiveness" abstention trigger (|predicted margin| < θ → low-confidence game, reduce stake or abstain). INFERENCE: margin variance is team-heteroskedastic in NFL (dome/weather teams, elite QBs vs game managers), so make θ team- and situation-dependent, not global.
- OTHER — dispersion features: within-unit std of positional EPA across starters, max–min positional rating gaps, absolute differences of team-average unit metrics (OL vs DL pressure rates), mirroring the paper's team-std and absolute-difference construction — beats scalar mean ratings.
- SCHEME — INFERENCE: "within-team variance and role-fit matter more than mean skill" ports to NFL unit-matchup modeling (e.g., a strong OL with one weak link vs a mean-rating matchup).
- TRUST-SIGNAL — keep production scoring linear; reserve NNs for offline research (same accuracy within ~3–4% relative at ~100× inference speed). The paper's "~2% sacrifice" claim is rosier than its own tables (3–4% relative).

## Engine-actionable? (yes/no + one-line what)
Yes — add margin-regression head + dispersion features with gate: implied-cover log-loss improves ≥0.01 on 2022–2025 walk-forward holdout vs binary win/cover head, OR |margin|<θ flag isolates a bottom-decile-Brier subset with ≥0.05 Brier degradation (abstention trigger).

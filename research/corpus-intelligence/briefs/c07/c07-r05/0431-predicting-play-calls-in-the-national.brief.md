# arxiv-program/research/2026-09-21/arxiv-deep/0431-predicting-play-calls-in-the-national.md

Source paper: Ötting (2020), arXiv:2003.10791v1. Ledger verdict: ADAPT — fit per-team HMMs on nflverse data; don't copy the fitted model (old data, coarse covariates).

## What it is (1-2 sentences)
Per-team 2-state hidden Markov models for predicting NFL run/pass play calls, where transition probabilities are driven by game-context covariates via multinomial logit — capturing streaky pass-heavy/run-heavy regimes within a game. The ledger ports it as a pre-snap pass-probability API feeding prop projections (attempts share), in-game win-probability conditioning, and game-script-conditioned props.

## Key metrics/methods (formulas where given, else "not specified")
- γ_ij^(p) = exp(η_ij^(p)) / Σ_k exp(η_ik^(p)); η_ij^(p) = β_0^(ij) + Σ_l β_l^(ij) x_l^(p) for i≠j, 0 otherwise.
- Match likelihood: L = δ P(y_{m,1}) Γ^{(m,2)} P(y_{m,2)} … Γ^{(m,P_m)} P(y_{m,P_m)} 1 (forward algorithm).
- One-step-ahead forecast: Pr(y_{P+1}=y | y^(P)) = likelihood-with-candidate / likelihood-without (Zucchini et al. 2016); argmax class = forecast.
- Covariates: home, ydstogo, down dummies, shotgun, no-huddle, scorediff, goaltogo, yardline90 + AIC forward-selected interactions (ydstogo×scorediff, downs×ydstogo, shotgun×ydstogo, nohuddle×scorediff, nohuddle×shotgun); N=2 chosen for numerical stability.

## Data sources named
Kaggle NFL play-by-play: 2009–2018 regular season, 2,526 of 2,560 matches → 5,052 per-team-offense time series, 318,691 plays; train 2009–2017 (289,191 plays), test 2018 (29,500 plays, 224 matches). Public but stale (pre-2019).

## Findings (numbers and facts, not vibes)
- Weighted-average out-of-sample accuracy on 2018: 0.715 (vs ~0.67 pbp-only baselines; ~0.75 with player data; 58.4% naive pass baseline).
- Per-team accuracy: 0.602 (Seattle Seahawks) to 0.779 (New England Patriots).
- Run precision 0.532 (GB)–0.763 (HOU); run recall 0.324 (BAL)–0.886 (LAR). Pass precision 0.559 (SEA)–0.9 (LAR); pass recall 0.664 (LAR)–0.922 (PIT).
- Fit cost ~7 hours/team for AIC forward selection; forecasting <1 second per match.
- Gap flagged: no plain-logistic-with-same-covariates baseline shown, so the HMM's marginal value over a static model is unproven.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: per-team run/pass regime states (neutral / pass-heavy comeback / run-heavy kill-clock) feed game-script-conditioned prop projections.
- COACHING: coordinator predictability auditing — the latent states quantify how sticky a team's play-calling regime is.
- QB-BEHAVIOR: decoded pass-heavy states shift WR target-share beyond what raw covariates explain (proposed experiment).

## Engine-actionable? (yes/no + one-line what)
Yes — build per-team 2–3 state HMM on nflverse 2015–2025 with personnel groupings, hierarchical partial pooling, and weekly refits; adopt as in-game/prop input only if it beats a covariate-only logistic baseline by ≥0.5pp accuracy and ≥0.005 log-loss on 2025 holdout.

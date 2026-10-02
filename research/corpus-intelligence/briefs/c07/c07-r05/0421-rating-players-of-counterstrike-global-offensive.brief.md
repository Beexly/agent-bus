# arxiv-program/research/2026-09-21/arxiv-deep/0421-rating-players-of-counterstrike-global-offensive.md

Source paper: Xu & Moka (2024), arXiv:2409.05052v1. Ledger verdict: ADAPT (with strict temporal validation replacing the paper's random split).

## What it is (1-2 sentences)
A regularized adjusted plus/minus (APM) rating for CS:GO players: a design matrix of +1/-1/0 participation indicators regressed on match score differential, with ridge/elastic-net/Bayesian variants and a box-score Rating2.0 prior. The ledger ports it as snap-level APM for the NFL — isolating an individual player's effect on play EPA from QB, line, and teammates — to feed the props engine as matchup adjustments.

## Key metrics/methods (formulas where given, else "not specified")
- ResultDiff_i = Σ_j X_ij β_j + ε_i, X_ij ∈ {+1, −1, 0} (team 1 / team 2 / absent).
- Ridge, elastic net (100 alpha values on [0,1], 10-fold CV), logistic variants, Bayesian and hierarchical Bayesian with standardized Rating2.0 as prior mean.
- NFL port: per-play design matrix over 22 participants; target = play EPA (ridge/elastic-net) or drive success (elastic-logistic); prior = PFF grade or trailing EPA rate, standardized.
- Improvement experiment: add unit-level random effects (OL group, secondary group) in a hierarchical model so individual APM is estimated net of unit effects.

## Data sources named
HLTV "big event" CS:GO matches, 2018–2023, 500+ players (518 player columns in example design matrix); players with <50 matches excluded; HLTV is public.

## Findings (numbers and facts, not vibes)
- Pearson p-values for predicted-vs-true plus/minus correlation on test: ridge 0.57 (non-significant), Bayesian 0.03323, logistic 2.092e-05, elastic logistic 2.2e-16; Rating2.0-vs-plus/minus correlation p-value 0.293.
- The ledger's interpretation: p-values are not effect sizes — the paper reports no correlation magnitudes, no MAE, no log-loss, no calibration, so the predictive evidence is uninterpretable as stated.
- Leakage flagged: random 80/20 split over pooled 2018–2023 lets same rosters straddle train/test; the Rating2.0 prior is computed from the same matches including test-period ones; teammates who always co-play induce unaddressed collinearity.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: snap-level player-effect attribution — e.g., isolate a WR's offensive APM from his QB/OL and a CB's defensive APM for prop matchup adjustments.
- OL: the improvement experiment's unit-level random effects (OL as a group) are the direct route to separating individual vs OL-unit contribution.
- TRUST-SIGNAL: the acceptance gate's instability checks (week-to-week rank correlation, lift vanishing under team fixed effects) are the audit that keeps APM from being team-strength relabeling.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype snap-level APM on skill positions (nflverse 2020–2025) with strictly time-ordered walk-forward validation, adopted only if play-EPA out-of-sample R² lifts ≥ 0.01 and top-decile offensive APM players beat yardage props by ≥ 2pp hit-rate on ≥ 200 graded props.

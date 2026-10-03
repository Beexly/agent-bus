# docs/arxiv-program/research/2026-09-21/arxiv-deep/0613-match-results-prediction-ability-of-official.md
## What it is (1-2 sentences)
Konaka (2017) tests whether official ATP ranking points have intrinsic match-prediction power, fitting win probability as a logistic function of the players' ranking-point ratio. Ledger verdict: REJECT — the result is a tennis-specific artifact of the ATP's engineered doubling point structure, with no transferable mechanism for the NFL.
## Key metrics/methods (formulas where given, else "not specified")
- p̂_{i,j} = π_{i,j}^α / (1 + π_{i,j}^α), where π_{i,j} = r_i / r_j (ranking-point ratio)
- Objective: E² = (1/n) Σ (w_{i,j} − p̂_{i,j})², α fit by least squares
- Ideal rank-32 points identity: 90×4 + 45×8 + 90×3 + 90×3 = 1260
## Data sources named
~20,000 ATP World Tour + Davis Cup + Olympic matches 2009–2015 (~3,400 in 2016–2017 holdout); ATP official rankings (2017-03-20 edition); Jeff Sackmann's tennis database (github.com/JeffSackmann).
## Findings (numbers and facts, not vibes)
- α = 0.8722 (2009–2015), E² = 0.2052 vs naive higher-rank-wins E² = 0.3227 (≈36% relative improvement)
- Holdout 2016–2017: α = 0.8667, E² = 0.2065 (parameter stable across periods)
- α=1 model overestimates favorites (shown inadequate in Fig. 7)
- Rank-16/32/64 mean points 2009.8/1224.4/753.5 vs theoretical 2430/1260/650
- No comparison against Elo/Bradley–Terry baselines was run (paper cites Kovalchik 2016 showing Elo beats ten models)
- Zero-point players excluded from the data
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: general principle that official ranking-point ratios can beat naive "higher-ranked wins" baselines; no NFL-transferable mechanism since NFL has no official doubling point system
## Engine-actionable? (yes/no + one-line what)
No — rejected on domain grounds; no GSE implementation proposed. (If ever ported to a ranking-point context, the recipe is pairwise ratios → fit p = x^α/(1+x^α) → compare against Elo.)

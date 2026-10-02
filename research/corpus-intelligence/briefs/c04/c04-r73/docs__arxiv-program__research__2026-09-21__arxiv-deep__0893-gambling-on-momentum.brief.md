# docs/arxiv-program/research/2026-09-21/arxiv-deep/0893-gambling-on-momentum.md
## What it is (1-2 sentences)
A behavioral-finance empirical paper (Ötting, Deutscher, De Angelis, Singleton, 2022, arXiv:2211.06052v1) using a major European bookmaker's second-by-second odds + staked volumes to test whether bettors chase "momentum" — the 1–1 equalizer event in Bundesliga matches — finding bettors stake ~40% more on apparent-momentum teams while momentum has zero effect on outcomes and zero effect on bookmaker odds, and momentum-following loses substantially. The deep-read ledger rates it ADAPT as a fade-the-narrative feature for in-play models (not a momentum-following system).
## Key metrics/methods (formulas where given, else "not specified")
- Three regressions on the 1–1 equalizer event (each match appears twice: scorer + conceder perspective; SEs clustered at match level):
  1. Outcome: logit Pr(win_i,m=1) = β₀ + β₁·impprob + β₂·equaliser + β₃·minute + β₄·redcard (eq. 1).
  2. Bookmaker odds: linear odds_i,m = β₀ + β₁·impprob + β₂·equaliser + β₃·minute + β₄·redcard + u (eq. 2).
  3. Bettor stakes: linear relstake_i,m = β₀ + β₁·startodds + β₂·equaliser + β₃·minute + β₄·prerelstake + β₅·redcard + u (eq. 3).
- Controls: kickoff odds-implied probability, minute of equalizer (mean 47), red-card difference, pre-equalizer relative stakes; robustness via squared minute terms, interactions (minute×redcard, impprob×equaliser, equaliser×minute), 3-minutes-after stakes as alternative response.
## Data sources named
Major European bookmaker's second-by-second odds + staked volumes for all 612 German Bundesliga matches, 2017/18–2018/19 (proprietary; stakes rescaled by undisclosed constant). Analysis sample: 212 matches reaching 1–1 with the equalizer before the 85th minute. No public code or data; method fully specified.
## Findings (numbers and facts, not vibes)
- Momentum effect on outcome: β₂ = 0.115 (0.286), n.s. — zero momentum effect (McFadden R² 0.132).
- Momentum effect on bookmaker odds: β₂ = −0.017 (0.128), n.s. — bookmakers correctly ignore momentum.
- Momentum effect on bettor stakes: β₂ = 0.127*** (0.028) — 12.7pp higher relative stakes on the equalizer-scorer (+35.7% at covariate means, 46.5% in prerelstake-controlled spec); second half β₂ = 0.194*** (0.027). Robust to all extensions (R² 0.621).
- Descriptives (minute after equalizer): 47.0% of stakes on scorer, 37.2% on conceder, 18.6% on draw — while the draw is most likely (39.3%), then conceder win (33.2%), then scorer win (27.5%).
- Absolute activity doubles in the minute after the equalizer (60/min vs 30/min in the 3 minutes before).
- ROI of always-back-the-equalizer: −20.1% (moderate favorites, 70 bets), −7.4% (moderate longshots, 50 bets), −23.3% (strong longshots, 72 bets), +0.6% (strong favorites, 20 bets) — vs 7.9% average overround.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (in-play behavioral bias): first paper in corpus with actual staked-volume data (not just odds); fills existing-research-map gap #14 (momentum/scoring-burst modeling). Build a GSE "narrative-fade" feature: detect salient narrative events (equalizers, scoring runs, red cards, NFL turnovers/big plays), measure market overreaction via odds-move vs model-WP-move divergence post-event, fade the overreaction; the +12.7pp/40% overbetting figure calibrates expected edge size. QB-BEHAVIOR (INFERENCE): analogous narrative events in NFL in-play (pick-six vs methodical TD) are the natural cross-sport extension. TRUST-SIGNAL: the "bettors believe in momentum, momentum doesn't exist" result is a ready-made in-play betting-education content piece.
## Engine-actionable? (yes/no + one-line what)
yes — Build the event-detection + odds-move-vs-model-WP divergence pipeline on GSE's odds feed; confirm overreaction (p<0.05) in at least one league, then extend to a cross-sport "narrative premium" model ranked by event salience.

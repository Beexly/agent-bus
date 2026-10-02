# docs/arxiv-program/research/2026-09-21/arxiv-deep/0608-modelling-career-trajectories-of-cricket-players.md

## What it is (1-2 sentences)
Ledger of arXiv:1903.07218v1 (Stevenson & Brewer 2019), a Bayesian Gaussian-process model of cricket batsmen's career trajectories between innings. Verdict in the ledger is REJECT (superseded) — it is the earlier conference version of the journal paper [0604], which is already captured in the corpus; only two unique nuggets are retained.

## Key metrics/methods (formulas where given, else "not specified")
- Hazard-based survival likelihood: P(X=x) = H(x)∏_{a<x}[1−H(a)]; not-out scores treated as right-censored, P(X≥x).
- Within-innings effective average: μ(x) = μ₂ + (μ₁−μ₂)exp(−x/L); hazard H(x) = 1/(μ(x)+1); μ₁ = Cμ₂ (C~Beta(1,2)), L = Dμ₂ (D~Beta(1,5)).
- Between-innings extension: log(μ_{2t}) ~ GP(m, K) with squared-exponential kernel (scale σ, length ℓ); priors m~Lognormal(log 25, 0.75²), σ~Exp(10), ℓ~Uniform(0,100); ν(t) = between-innings effective average via marginalization over scores.
- Inference: nested sampling (Skilling 2006), C++ implementation, 1000 particles × 1000 MCMC steps per iteration.

## Data sources named
ESPNcricinfo Statsguru (Test career scores of individual batsmen). Illustrative analyses: Kane Williamson's full Test career (career average 50.36 at the time) and the 'big four' (Smith, Kohli, Root, Williamson; ICC ratings as of 1 Aug 2018).

## Findings (numbers and facts, not vibes)
- Williamson did not consistently bat at his career average (50.36) until ~50 innings — supports 'finding your feet'.
- Big-four next-innings predicted ν: Smith 62.5 (career avg 61.4, ICC 929), Kohli 57.4 (53.4, 903), Root 52.6 (52.6, 855), Williamson 51.2 (50.4, 847); rank order matches ICC ratings.
- Probabilistic comparison: Smith expected to outscore Kohli by 5.1 runs next innings, with 68.8% probability.
- Unique finding (form skepticism): the model 'appears to reject the idea of recent performances as having a significant impact on innings in the near future'; the effect of recent form varies greatly from player to player (cites Durbach & Thiart 2007's randomness result).
- Career shape supports anecdotal arc: raw ability → improvement with experience → peak → decline; players take different lengths of time to adjust.
- No formal predictive benchmark in this version (no LOOCV vs. SMA like 0604); validation is illustrative only.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 68.8% probabilistic head-to-head player-comparison framing — usable in content/player-prop framing: OTHER
- Form skepticism: recent-form effects vary greatly by player, may be overestimated — temper last-3-games feature weights, estimate form timescales per player not globally: OTHER
- Career-shape finding (adjustment period ~50 innings; heterogeneous adaptation): OTHER

## Engine-actionable? (yes/no + one-line what)
Partial — yes: if the GP aging/form module from ledger 0604 is built, fold in the two §10 nuggets (probabilistic head-to-head comparison framing for content; hierarchical per-player form-timescale estimation).

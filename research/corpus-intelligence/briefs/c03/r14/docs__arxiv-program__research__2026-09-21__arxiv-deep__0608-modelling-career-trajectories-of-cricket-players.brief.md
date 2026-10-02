# docs/arxiv-program/research/2026-09-21/arxiv-deep/0608-modelling-career-trajectories-of-cricket-players.md
## What it is (1-2 sentences)
Ledger entry on arXiv:1903.07218v1 (Stevenson & Brewer 2019), the conference-version predecessor of the journal paper [0604], using Gaussian processes over career innings to model a cricket batsman's time-varying batting ability. **Verdict in file: REJECT (superseded)** — the transferable core is already captured in 0604; two unique nuggets retained (§10).
## Key metrics/methods (formulas where given, else "not specified")
- Hazard-based survival likelihood: P(X=x) = H(x)∏_{a<x}[1−H(a)]; not-out scores right-censored, P(X≥x).
- Within-innings effective average: μ(x) = μ₂ + (μ₁−μ₂)exp(−x/L); hazard H(x) = 1/(μ(x)+1); μ₁ = Cμ₂, L = Dμ₂; priors C~Beta(1,2), D~Beta(1,5).
- Between-innings: log(μ_{2t}) ~ GP(m, K) with squared-exponential kernel (scale σ, length ℓ); priors m~Lognormal(log 25, 0.75²), σ~Exp(10), ℓ~Uniform(0,100).
- Inference: nested sampling (Skilling 2006), C++ implementation, 1000 particles × 1000 MCMC steps per iteration.
## Data sources named
Statsguru (ESPNcricinfo) Test career scores; illustrative cases: Kane Williamson full Test career (avg 50.36 at time of writing), 'big four' (Smith, Kohli, Root, Williamson; ICC ratings as of 1 Aug 2018). No aggregate dataset; fitted player-by-player (unlike 0604's 1,018-player / 40,273-innings corpus).
## Findings (numbers and facts, not vibes)
- Williamson did not consistently bat at his career average (50.36) until ~50 innings — 'finding your feet' effect.
- Big-four next-innings predicted averages: Smith 62.5 (career 61.4, ICC 929), Kohli 57.4 (53.4, 903), Root 52.6 (52.6, 855), Williamson 51.2 (50.4, 847); rank order matches ICC ratings.
- Probabilistic comparison: Smith expected to outscore Kohli by 5.1 runs next innings, with 68.8% probability.
- Form skepticism (unique to this version): model "appears to reject the idea of recent performances as having a significant impact on innings in the near future"; recent-form effects vary greatly by player (cites Durbach & Thiart 2007 randomness result).
- Career shape supports anecdotal arc: raw ability → improvement with experience → peak → decline; players take different lengths to adjust.
- No formal predictive benchmark in this version (no LOOCV vs. SMA like 0604); validation is illustrative only.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Form skepticism / per-player form timescales: OTHER (aging/form modeling)
- Probabilistic head-to-head player comparison framing (68.8% to outscore): OTHER (content/prop framing)
- Career arc (improve → peak → decline): OTHER (player aging curves)
## Engine-actionable? (yes/no + one-line what)
Yes — amend 0604's GP module spec: estimate form-timescale ℓ per player hierarchically (form effects vary by player), and use probabilistic player-comparison framing for content/props.

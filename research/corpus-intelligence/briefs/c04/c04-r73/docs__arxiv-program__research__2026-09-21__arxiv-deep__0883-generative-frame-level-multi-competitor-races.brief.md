# docs/arxiv-program/research/2026-09-21/arxiv-deep/0883-generative-frame-level-multi-competitor-races.md
## What it is (1-2 sentences)
A JQAS-published Bayesian paper (Stokes, Bagga, Kroetch, Kumagai, Welsh, 2023, arXiv:2310.01748v2) building a frame-level (~4 Hz) generative simulator of horse races — hierarchical cubic B-splines for trajectories, jockey/track effects, CFD-derived drafting features — that forward-simulates full races and runs counterfactual experiments (e.g., lane-draw effects). The deep-read ledger rates it ADAPT for the simulation architecture (frame-level generative model → full-path posterior simulation → counterfactuals), transferable to live in-play NFL/NBA win-probability surfaces.
## Key metrics/methods (formulas where given, else "not specified")
- Position/velocity as cubic B-spline expansions in normalized race time; coefficients θ_h for horse h with hierarchical prior θ_h ~ N(μ_θ, Σ_θ).
- Jockey effects and track effects as hierarchical terms; spatial covariates (position, distance to rail, drafting exposure).
- Drafting benefit D(position): deterministic nonlinear function of relative position to horses ahead from CFD simulation (exact form in paper supplement).
- Win probability from simulation: P(win) = fraction of posterior-predictive simulated races where the horse finishes first.
- Counterfactuals: 720 post-position assignments × 100 posterior-predictive simulations each; MCMC-class posterior sampling.
- Assumptions: spline smoothness captures real dynamics; CFD drafting transfers; jockey decisions exogenous (no strategic response to counterfactuals); ~4 Hz sampling sufficient.
## Data sources named
2019 NYRA/NYTHA tracking data (proprietary, not public): per-frame horse id, race id, (x,y), speed, distance-to-leader, lane/post, jockey, track surface; per-race distance, field size, final order. CFD drafting features computed by authors. No public code stated.
## Findings (numbers and facts, not vibes)
- Lane-draw causal effects (headline): lane 2 expected rank 3.28 / win prob 0.21 vs lane 6 expected rank 3.88 (worst) — reproduces and quantifies the inside-lane advantage.
- No odds baseline compared (no Pinnacle/parimutuel test); no calibration test; no betting-return test — validation is internal consistency + the counterfactual experiment.
- Leakage note: spline model fit on full-race data including the finish (retrodictive simulations, not pre-race forecasts); CFD features computed with full-race knowledge.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (in-play modeling): adapt the architecture to a GSE "game simulator" — model team/player trajectories as hierarchical smooth functions over game time (NFL NextGenStats / NBA optical); interaction features analogous to drafting (pass-rush pressure surfaces, defensive spacing); forward-simulate 10k rest-of-game paths per live game state for live WP surfaces with uncertainty bands; counterfactual experiments ("what if the blitz came from the other side") for content and model diagnostics. COACHING: counterfactual machinery could support scheme/situational analysis lanes. INFERENCE: fits the 9/28 ingest-and-learn doctrine — learn the method, rebuild as GSE's own output.
## Engine-actionable? (yes/no + one-line what)
yes — Build an nflverse-level rest-of-game generative simulator for live NFL WP surfaces; gate on Brier ≤ published nflfastR WP model on 2024 season and 80% WP intervals covering 78–82% of outcomes.

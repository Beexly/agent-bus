# arxiv-program/research/2026-09-21/arxiv-deep/0793-kairosis-change-point-aggregation.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2408.00785v4 (Hassoun, Powell, MacKay, York, 2024) "Kairosis": Bayesian change-point detection over a forecast stream to compute data-driven time weights, then a kairosis-weighted *median* aggregate. Verdict: ADAPT to the ensembles/aggregation lane — beats static, exponential-decay, and recency-window aggregation on 650 real Metaculus questions.
## Key metrics/methods (formulas where given, else "not specified")
- Candidate change-point times t_r in *forecaster time* (forecast order, dilates high-activity periods). Prior: geometric P(t_CP=t_r) = p(1−p)^{R−r}, p=1/10. Likelihood: pre/post [0,1] bin counts as compound Dirichlet-categorical: P(n₁,…,n_K) = Γ(Σα)/Γ(Σn+α) · Π Γ(n_k+α_k)/Γ(α_k); pre pseudo-counts α_k=λ·t_CP (λ=0.2), post α′_k=1. 5 equal bins.
- Posterior: P(t_CP=t_r|Forecasts) ∝ Dirichlet-cat(n)·Dirichlet-cat(n′)·p(1−p)^{R−r}. Final aggregate: kairosis-weighted median of forecasts (weights from the CMF).
- Interpolates: pure exponential decay when no change detected; hard horizon when one obvious change; multi-step weights otherwise.
- Scores: Brier S=−(p−X)² and log score, as skill scores vs unweighted-median benchmark, at early/mid/late times.
- Sensitivity: robust for p<0.2, λ>0.1 — no fine tuning.
## Data sources named
- 650 Metaculus binary forecasting questions: mean 145 days open, 893 forecasts/question; topics international conflict, energy, business/finance; mean forecast 0.436, median 0.444, per-question SD 0.181. Forecasts anonymous (no IDs). Appendix B: 200+ continuous point-forecast questions (mean 85 days, 2321 forecasts each).
- Code: Python in supplementary materials (no standalone repo); Metaculus data proprietary.
## Findings (numbers and facts, not vibes)
- Kairosis-weighted median is the ONLY method beating the benchmark on all four skill variants: Brier unweighted 0.060 (0.009), Brier time-weighted 0.054 (0.009), Log unweighted 0.046 (0.006), Log time-weighted 0.042 (0.006).
- Competitors all negative: exponential-decay median −0.211/−0.252/−0.040/−0.061; most-recent-20% −0.135/−0.159/−0.011/−0.023; uniform mean −0.657/−0.652/−0.199/−0.198.
- Kairosis-weighted MEAN is terrible: −0.540/−0.545/−0.139/−0.143 — aggregation function matters as much as weights; median wins, mean loses.
- Worked example (Trump presidency question, Oct 10 2017): detected change point early Aug 2017; post-change forecasts weighted 0.8–1.0 vs pre-change <0.25 (3–4× downweighting).
- Continuous-domain: kairosis median 0.042/0.047 skill — still best, smaller margin.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: direct port — aggregate the engine's intraweek daily probability snapshots per game with kairosis weights (detect when the information regime shifted, e.g., injury news) instead of static averaging or arbitrary exponential half-life; always the weighted *median*, never the weighted *mean*.
- TRUST-SIGNAL: "forecaster-time" insight — weight line-movement/market-price histories by event order (bursts of activity), not calendar time; no forecaster-skill weighting in the base method (limitation: loud unskilled sources count equally).
- SCHEME: only one regime break is effectively handled (combinatorial explosion for multiple change points — authors' own flag); real news cycles have chained breaks.
## Engine-actionable? (yes/no + one-line what)
Yes — build a kairosis-weighted-median aggregator over the engine's daily probability stream per game (and prediction-market price histories), gated on positive skill vs uniform-median benchmark on Brier/log-loss across historical picks.

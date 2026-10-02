# arxiv-program/research/2026-09-21/arxiv-deep/0793-kairosis-change-point-aggregation.md
## What it is (1-2 sentences)
Research deep-read of arXiv:2408.00785v4 (Hassoun, Powell, MacKay, 2024): Kairosis, a Bayesian change-point detection method that dynamically aggregates a time-ordered stream of probability forecasts by weighting each forecast by the posterior probability it was made after the most recent information-regime change point, aggregated via a weighted median. Reader verdict: ADAPT for the ensembles/aggregation lane.

## Key metrics/methods (formulas where given, else "not specified")
- Candidate change-point t_r in "forecaster time" (forecast order 1..R, dilates high-activity periods). Prior: geometric P(t_CP = t_r) = p(1−p)^{R−r} with 1/p = 10 (≈10 forecasts per change point).
- Likelihood: pre/post split of [0,1] bin counts as compound Dirichlet-categorical: P(n₁,…,n_K) = Γ(Σα)/Γ(Σn+α) · Π Γ(n_k+α_k)/Γ(α_k); pre-change pseudo-counts α_k = λ·t_CP (λ = 0.2), post-change α′_k = 1.
- Posterior: P(t_CP=t_r|Forecasts) ∝ Dirichlet-cat(n)·Dirichlet-cat(n′)·p(1−p)^{R−r}; normalize → posterior mass → cumulative mass function (CMF). Weight of forecast at s = E_t[w(s|t_CP=t)] = CMF at s.
- Final aggregate: kairosis-weighted MEDIAN (not mean). Parameters: 5 equal bins, p = 1/10, λ = 0.2; robust for p < 0.2, λ > 0.1 — no fine tuning needed.
- Scores: S_Brier(X,p) = −(p−X)²; S_Log(X,p) = X log p + (1−X) log(1−p); skill scores vs unweighted-median benchmark at three times (early/mid/late), unweighted and time-decreasing weighted.

## Data sources named
- 650 Metaculus forecasting questions (binary outcomes): mean 145 days open, 893 forecasts per question; topics: international conflict, energy, business/finance. Mean forecast 0.436, median 0.444, per-question SD 0.181. Forecasts anonymous (no forecaster IDs). Metaculus data proprietary (obtained from Metaculus).
- Appendix B: 200+ continuous-domain point-forecast questions (mean 85 days, 2321 forecasts each).
- Code: Python in supplementary materials; no public repo link stated.

## Findings (numbers and facts, not vibes)
- Kairosis-weighted median is best on all four skill-score variants (benchmark = unweighted median = 0.000): Brier unweighted 0.060 (0.009), Brier time-weighted 0.054 (0.009), Log unweighted 0.046 (0.006), Log time-weighted 0.042 (0.006). Only method to beat benchmark on all four.
- Competitors: exponential-decay median −0.211/−0.252/−0.040/−0.061; most-recent-20% median −0.135/−0.159/−0.011/−0.023; uniform mean −0.657/−0.652/−0.199/−0.198; universal 0.5: −18.658/−18.525/−2.170/−2.154.
- Kairosis-weighted MEAN is terrible: −0.540/−0.545/−0.139/−0.143 — aggregation function matters as much as weights: median wins, mean loses.
- Raw crowd baselines: mean Brier −0.179, Log −0.560 (all individual forecasts); median forecasts −0.138/−0.438.
- Continuous-domain: kairosis median 0.042/0.047 skill (best, but smaller margin than binary).
- Worked example (Trump presidency question, Oct 10 2017): probable change point early Aug 2017; post-change forecasts weighted 0.8–1.0, pre-change < 0.25 (3–4× downweighting).
- Limitations noted in file: batch recomputation cost (authors' own flag); combinatorial explosion with multiple change points unaddressed; weaker on continuous/point domains; change-point→"new information" attribution never verified against actual events; no forecaster-skill weighting.
- Numeric gate proposed: kairosis median must achieve positive skill vs uniform median on Brier and log-loss, margin exceeding paper's ~0.04–0.06 skill units, to justify the machinery.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Aggregation lane: weight GSE engine probability streams (daily snapshots from first publish to kickoff) by detected information-regime shifts instead of static averaging or arbitrary exponential half-life — directly generalizes the 0789 median-consensus finding.
- [OTHER] Warning: always aggregate with the weighted median, never the weighted mean (kairosis-weighted mean lost badly).
- [OTHER] Forecaster-time insight: bursts of line movement = "forecaster clock" dilation — weight by event order, not calendar time, when information arrives in bursts (e.g., injury report day).
- [OTHER] Applications named: (a) intraweek engine-probability aggregation per game; (b) weighting prediction-market price streams; (c) improvement experiment: change-point detection + inverse-covariance intersection fusion of sources (engine, market, weather) within post-change regime.
- [TRUST-SIGNAL] Method has no forecaster-skill weighting — all sources count equally in detecting the break; a GSE adaptation should consider skill-weighting sources before trusting detected regime shifts.

## Engine-actionable? (yes/no + one-line what)
Yes — build a kairosis-weighted-median aggregation for intraweek engine probability streams (daily snapshot per game from first publish to kickoff), scoring with Brier/log-loss vs uniform-median baseline; pass gate is positive skill exceeding ~0.04–0.06 units.

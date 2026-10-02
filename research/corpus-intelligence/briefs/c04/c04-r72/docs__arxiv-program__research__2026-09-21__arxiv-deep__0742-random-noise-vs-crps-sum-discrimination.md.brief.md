# docs__arxiv-program__research__2026-09-21__arxiv-deep__0742-random-noise-vs-crps-sum-discrimination
## What it is (1-2 sentences)
Koochali, Schichtel, Dengel & Ahmed (2022), arXiv:2201.08671 — an evaluation-diagnostic paper (no new forecaster) demonstrating that CRPS-Sum, the community workhorse for multivariate probabilistic forecasting, has a covariance-asymmetry flaw and can be gamed by degenerate forecasts: literal random-noise and univariate dummies outscore the state-of-the-art GP-Copula under CRPS-Sum on the exchange-rate benchmark. Ledger verdict: ADAPT — an evaluation guardrail with direct GSE force.
## Key metrics/methods (formulas where given, else "not specified")
- CRPS-Sum: S = CRPS(Σ_d X_d, Σ_d y_d) — summation over dimensions happens INSIDE the score, destroying dependence information (covariance asymmetry).
- Proper alternatives: per-dimension CRPS averaged, and the Energy Score ES(F,y) = E‖X−y‖ − ½E‖X−X'‖.
- Contribution is diagnostic: (a) analytic + synthetic demonstration of CRPS-Sum's covariance asymmetry; (b) dimension-collapsing failure — degenerate forecasts with matched marginals can score better than the true model; (c) a dummy-model discrimination protocol: any proposed metric must rank a known-good forecaster above trivial dummies, otherwise the metric — not the models — is at fault.
- Assumption under test: that a "proper" score is sufficient for model selection — shown false: propriety ≠ discrimination power in finite multivariate settings.
## Data sources named
- (1) Synthetic bivariate normal: true correlation ρ swept −1→1, forecast correlation ϱ swept −1→1; n = 2^14 samples, window w = 2^9. (2) Real: exchange-rate dataset (standard multivariate forecasting benchmark, 8 currencies, daily). Baselines: GP-Copula (SOTA at the time), a univariate dummy, a multivariate dummy (literal random noise). No code/data URLs stated in extracted text.
## Findings (numbers and facts, not vibes)
- Exchange-rate results: GP-Copula — CRPS-Sum 0.0070, CRPS 0.0092, ES 0.0043. Univariate dummy — CRPS-Sum 0.0049, CRPS 0.4425, ES 0.2037. Multivariate dummy — CRPS-Sum 0.0048, CRPS 0.0077, ES 0.0032.
- Under CRPS-Sum the literal dummies (0.0048–0.0049) BEAT the state-of-the-art GP-Copula (0.0070); under per-dimension CRPS and Energy Score the ranking is sane (GP-Copula best or near-best, univariate dummy catastrophically bad at 0.4425).
- Synthetic sweeps show CRPS-Sum is asymmetric in the forecast correlation ϱ — it rewards wrong-signed correlations.
- File's limitations: "avoid CRPS-Sum" is well-supported but no single replacement is proposed (recommends CRPS + Energy Score jointly); Energy Score itself has known weak discrimination in high dimensions (not discussed); exchange-rate is one dataset; the dummies are deliberately pathological.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a metric-validation protocol — the dummy-model discrimination test (any evaluation metric must rank a known-good forecaster above marginal-matched noise and a constant forecaster, else the metric is rejected) is a CI-grade guardrail; proposed extension to economic metrics (require ROI-based model selection to pass a dummy-strategy test before promotion decisions).
- OTHER: GSE evaluates joint outcomes (spread + total, correlated pick slates, same-game parlay legs) — exactly the setting where a collapsed-sum metric can misrank models; the research map lists CRPS but contains no multivariate-scoring guidance and no metric-validation protocol.
## Engine-actionable? (yes/no + one-line what)
Yes — ban CRPS-Sum (and any sum-inside-score metric) from GSE model selection for joint forecasts (use mean per-dimension CRPS + Energy Score), implement the dummy-discrimination test as a CI gate for every new evaluation metric, and document in the engine-benchmark lane per the 2026-09-17 standing rule (~1 day effort).

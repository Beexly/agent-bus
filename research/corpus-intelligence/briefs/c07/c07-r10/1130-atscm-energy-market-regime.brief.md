# arxiv-program/research/2026-09-21/arxiv-deep/1130-atscm-energy-market-regime.md
## What it is (1-2 sentences)
A five-page workshop proposal (arXiv:2511.04361) for an adaptive time-varying structural causal model to detect regime changes in energy markets. Ledger verdict: REJECT — zero empirical content; no dataset, no experiment, no results.
## Key metrics/methods (formulas where given, else "not specified")
not specified — conceptual architecture only: three levels (interpretable factors Wᵗ ∈ ℝ²⁷, latent dynamics Iᵗ, observations Vᵗ ∈ ℝ³⁵), time-varying causal graph Gᵗ = f_discovery(V¹:ᵗ, W¹:ᵗ; θ_disc); objective = reconstruction + causal + counterfactual + discovery losses. No training details, hyperparameters, or graph-discovery algorithm given.
## Data sources named
None. No dataset named, sized, or described.
## Findings (numbers and facts, not vibes)
None. Zero numbers in the paper; the abstract's "competitive forecasting performance" claim is unsupported by any table, figure, or metric. Authors list "empirical validation" as future work.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime-change detection framing could loosely relate to NFL season-phase modeling (OTHER), but with no method to adapt, nothing transfers.
## Engine-actionable? (yes/no + one-line what)
No — rejected paper with no testable claim; nothing to implement. (INFERENCE: the regime-detection framing is a reminder to check whether other ledgers cover Markov-switching/regime models for NFL, which would be the real version of this idea.)

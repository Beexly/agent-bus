# arxiv-program/research/2026-09-21/arxiv-deep/1527-rollcast-rolling-anchors.md
## What it is (1-2 sentences)
Ledger note on Rollcast (Vercellino 2026, arXiv:2609.05561): an interpretable probabilistic time-series forecaster combining a dictionary of rolling statistical anchors with nearest-state residual archives through a proper-score-trained gating network. Verdict in-file: ADAPT — the rolling-anchor + state-adaptive persistence gate is mirrorable for GSE team-efficiency time series; synthetic-only evaluation means ADOPT is not earned.

## Key metrics/methods (formulas where given, else "not specified")
- Rolling anchors: mean, median, min, max, regression endpoint, quantiles (Eq. 2); local scale s_t = MAD × 1.4826.
- Relative state x_tj = (A_tj − y_t)/s_t; soft responsibility r_tj = softmax(−(d_tj − min d)/τ) (Eq. 7); state similarity κ_tr = exp(−‖z_t−z_r‖²/M / (2h_x²)) (Eq. 8).
- One-step candidate Y^{(j)}_{t+1} = A_tj + γ s_t ẽ_tj (Eq. 12); γ=0 → pure discrete anchor mixture.
- Gate: multinomial-logit softmax trained by BFGS on penalized negative log predictive density of the full mixture (Eq. 14) — rewarded for density quality, not ex-post best anchor.
- State-adaptive persistence ρ_t = ρ_min + (ρ_max−ρ_min)exp(−δ_t/d_ρ) (Eq. 16): keeps ensemble weights sticky in stable stretches, responsive after shocks.
- Evaluation: CRPS, WIS, interval score, 90%/95% coverage vs. oracle DGP (10,000 simulated paths).

## Data sources named
- Synthetic Monte Carlo: 8 DGPs (Gaussian AR(1), random walk, local trend, threshold AR, Markov switching, stochastic volatility, heavy-tail t5 AR, variance break) × 250 replications; 300 training obs; horizons 1–6; 12,000 forecast targets. Oracle = 10,000 paths from true DGP.
- CRAN rollcast 0.1.0, R 4.5.1, 1,000 particles.

## Findings (numbers and facts, not vibes)
- Overall vs. oracle: 90% coverage 0.862 (oracle 0.901); 95% coverage 0.915 (oracle 0.952); widths 13.6%/15.9% wider than oracle; normalized CRPS 1.144.
- Per-DGP (90% cov / width ratio / CRPS ratio): AR(1) 0.868/0.999/1.098; RW 0.877/1.284/1.196; local trend 0.865/1.659/1.461 (hardest); TAR 0.845/1.002/1.100; Markov switching 0.861/1.098/1.287; SV 0.864/1.004/1.081; heavy-tail AR 0.859/1.027/1.088; variance break 0.855/1.012/1.109.
- Coverage decays with horizon: 0.898 (h=1) → 0.840 (h=6) at 90%.
- Adaptive hyperparameter search under variance break: γ=1 in 99.2% of fits; h_e=0.55 in 95.2%; W=30 in 54.8%.
- Persistence rule improved training log score in only 0.65% of fits (mean +0.035) — a smoothing regularizer, not an accuracy gain on synthetic data.
- Hard failure modes: local trend and Markov switching; wider intervals still under-cover (shape/location error, not just dispersion).
- No leakage (causal design); anchor dictionary omits seasonality/long memory; nearest-state search ~quadratic without an index.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Probabilistic multi-week forecasting engine for team efficiency (EPA-based offensive/defensive) time series — anchor dictionary over rolling efficiency margin, nearest-state residual archives from similar-strength contexts.
- [OTHER] Persistence rule (Eq. 16) is directly reusable as engine weight-stickiness: sticky in stable stretches, responsive after shocks (injuries, regime breaks); generalizes ledger 1525's post-processing to pooling local "anchor" hypotheses with state-dependent weights.
- [COACHING] Scheme-side analogue: team efficiency series regime breaks (coordinator changes, QB changes) are the real-data analogues of the paper's variance-break / Markov-switching failure modes to diagnose in prototyping.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype a Rollcast analog over team efficiency time series with windows W ∈ {6,10,16} games and a proper-score gate; ADAPT only if CRPS is within 10% of engine distributions on stable-team stretches and the persistence rule reacts faster to post-injury regime shocks than fixed persistence.

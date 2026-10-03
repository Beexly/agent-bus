# docs/arxiv-program/research/2026-09-21/arxiv-deep/0466-prediction-theory-in-continuous-time.md

## What it is (1-2 sentences)
A pure-mathematics exposition by Bingham (2021, arXiv:2111.08560v1) giving shortened, Doob's-method proofs of the classical Wiener (whole-past) and Krein (finite-section) prediction theorems for stationary continuous-time stochastic processes. The corpus ledger verdict is REJECT — no data, no experiments, no new modeling content; it restates the theoretical substrate beneath the Kalman/AR state-space tools GSE already implements.

## Key metrics/methods (formulas where given, else "not specified")
- Cramér representation: X_t = ∫ e^{2πitμ} dY(μ); Kolmogorov isomorphism between time-domain Hilbert space and L² of spectral measure.
- Szegő condition (non-determinism): ∫ log G′(μ)/(1+μ²) dμ > −∞.
- Moving-average representation: X(t) = ∫_{−∞}^t c*(u−t) dξ(u) with MA kernel c*.
- Whole-past predictor: Ê[X(t) | {X(u): u ≤ t−τ}] = ∫_{−∞}^{t−τ} c*(u−t) dξ(u).
- Prediction error: σ²(τ) = ∫_{−τ}^0 |c*(s)|² ds — error variance grows with lag τ.
- Finite-section predictor over [t−τ−2T, t−τ] (Krein); finite-section error: σ²(τ,T) = (∫_{−∞}^{−2T−t} + ∫_{−t}^0) |c*(s)|² ds.
- Assumptions: second-order stationarity; Szegő condition holds; Gaussianity for the white-noise reading; MA kernel and spectral density assumed KNOWN (not estimated).

## Data sources named
None — pure theory paper; no dataset, no train/test split, no numerical benchmark.

## Findings (numbers and facts, not vibes)
- No numerical results, tables, or benchmarks exist in the paper — its results are theorems with shortened proofs, not numbers. [OTHER]
- Contribution is expositional only: shorter proofs of classical results (Wiener 1949, Krein), no new estimators or models. [OTHER]
- GSE's state-space lane already covers Kalman filters, particle filters, dynamic Elo, nested AR(1) team strength (1701.05976) and Gaussian processes — the implementable descendants of exactly this theory; zero marginal capability added. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All substantive points tagged OTHER: pure functional-analysis prediction theory (spectral representations, Szegő condition, Wiener/Krein theorems) with no sports content, no data, and no mapping to QB behavior, coaching, OL, scheme, or trust signals. INFERENCE: the paper's only GSE-relevant framing is as background reading for the state-space lane; if irregularly-spaced NFL tracking data ever needs continuous-time prediction, the correct vehicle would be a continuous-time Kalman–Bucy filter, not these known-kernel projection formulas.

## Engine-actionable? (yes/no + one-line what)
no — nothing to implement; the predictors it derives are the Kalman/AR predictors GSE already has, and it offers nothing for non-stationary NFL signals.

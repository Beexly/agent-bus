# docs/arxiv-program/research/2026-09-21/arxiv-deep/2129-probfm-probabilistic-foundation-model-uncertainty.md
## What it is (1-2 sentences)
Deep-dive ledger on ProbFM (2026, arXiv:2601.10591v1) — a probabilistic time-series foundation model using a Normal-Inverse-Gamma Deep Evidential Regression head to emit calibrated uncertainty decomposed into aleatoric vs. epistemic components in a single forward pass. Verdict: ADAPT — adopt the evidential head design, verify calibration independently (paper's validation is LSTM-scale, not true TSFM-scale).
## Key metrics/methods (formulas where given, else "not specified")
- NIG prior: p(μ,σ²|m,λ,α,β) = N(μ|m,σ²/λ)·InvGamma(σ²|α,β); network outputs (m,λ,α,β), λ,α,β > 0 via softplus.
- Aleatoric uncertainty = β/(α−1); Epistemic uncertainty = β/((α−1)·λ); Total predictive variance = β/(α−1)·(1 + 1/λ).
- Loss: L = L_NLL^evidential + λ_reg·L_R (evidence regularizer penalizing evidence on errors) + λ_cov·L_coverage; evidence annealing schedule proposed.
- Encoder-agnostic head; validation metrics: CRPS, 80%-interval calibration, Sharpe/Sortino/Calmar/win-rate in crypto position-sizing experiment.
## Data sources named
Standard public time-series benchmarks (LSTM-backbone method comparison: DER vs. Gaussian NLL vs. Student-t NLL vs. quantile loss vs. conformal prediction); cryptocurrency market data from public exchanges for the trading experiment; paper references code release (verify at implementation).
## Findings (numbers and facts, not vibes)
- Crypto position-sizing experiment: DER-based strategy Sharpe 1.33 vs. MSE baseline 0.90; Sortino 2.27 vs. 1.52; Calmar 3.04; win rate 0.52.
- DER competitive on accuracy with better-calibrated uncertainty than Gaussian NLL (LSTM-backbone comparisons).
- Headline claim: sizing on epistemic (not just total) variance improves risk-adjusted returns.
- Scale gap: experiments are LSTM-scale; no 100M+ parameter TSFM demonstration — "foundation model" in the title outruns the evidence.
- Gaussian likelihood assumption misspecified for skewed sports outcomes (key numbers, blowout skew); crypto trading metrics don't transfer to sports betting (different market microstructure, vig).
- Evidence annealing adds fragile hyperparameters; miscalibrated epistemic uncertainty is worse than none for abstention; single-pass uncertainty can be overconfident OOD.
- Corpus novelty: no evidential/decomposition-based uncertainty in GSE corpus; Mimo's CQR gives total intervals without the aleatoric/epistemic split.
- GSE acceptance gate (pre-registered): ADOPT head if (a) CRPS within 1% of quantile-head baseline, (b) 80% intervals within ±4 pts of nominal, AND (c) epistemic-gated staking beats ungated on stake-weighted yield over 2022–2024; hard REJECT for sizing if epistemic does not rise on held-out regime-shift games (decomposition then decorative).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Aleatoric/epistemic split maps to pick-selection/abstention — epistemic (model doesn't know) → abstain/resize; aleatoric (game inherently random) → price the vig (wider no-bet zone around the line).
- COACHING: Epistemic uncertainty should rise on regime shifts (new QB/coach) and fall with more same-regime data — a principled coaching/QB-change detector signal.
- QB-BEHAVIOR: Same regime-shift logic applies to new starting QBs.
- TRUST-SIGNAL: Miscalibrated epistemic uncertainty worse than none for abstention — hard gate on calibration before sizing use.
- OTHER: Single-pass serving cheaper than Chronos-style sampling; runs per-game in real time — serving-cost edge for live uncertainty bars.
- OTHER: Regime-shift stress test proposal — synthetic corpus with known coaching/QB change points; evidential epistemic hypothesized to react faster than ensembles at 1/10th compute.
## Engine-actionable? (yes/no + one-line what)
Yes — attach the NIG evidential head to the sports TSFM backbone (2122/2126), train with evidential NLL + regularizer + coverage loss on the sports pile; gate stake sizing/abstention on the epistemic component only after an independent calibration audit.

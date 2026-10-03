# arxiv-program/research/2026-09-21/arxiv-deep/0694-controlled-abstention-neural-networks-regression-problems.md
## What it is (1-2 sentences)
Deep read of Barnes & Barnes (2021), arXiv:2104.08236v1: a regression neural network that outputs (μ, σ) and learns during training — via an abstention loss plus a PID controller on α — to abstain on predictions it is not skillful at, hitting a user-specified abstention setpoint. Verdict ADAPT to GSE's totals/margin regression head as a publish/don't-publish gate.
## Key metrics/methods (formulas where given, else "not specified")
- Abstention loss (Eq. 4): ℒ(x_i) = −q_i log p_i − α log q_i, with q_i = min(1.0, (κ/σ_i)²), κ = P_90% of validation σ after spin-up.
- Abstention rule: abstain iff σ_i > τ, τ = coverage-setpoint percentile of validation σ.
- Baseline NLL: ℒ = −log N(y_i; μ_i, σ_i); two-stage training (spin-up N epochs on NLL, then abstention loss).
- PID controller on α (velocity algorithm, 6-batch/192-sample evaluation windows) to hit abstention setpoints in {0.1,...,0.9}; constant-α variant also tested.
- Calibration check: standardized errors z_i = (y_i − μ_i)/σ_i empirically ≈ N(0,1), justifying the (μ, σ) probabilistic reading.
## Data sources named
Synthetic climate benchmark (Mamalakis et al. 2021, public): 900 grid-point SST anomaly maps, 8,000/5,000/5,000 splits; synthetic 1D example; ENSO forecasts-of-opportunity variant (29% true opportunity fraction); corrupt-inputs variant (30% corrupted). No real or sports data.
## Findings (numbers and facts, not vibes)
- Forecasts-of-opportunity variant: CAN error below best baseline ANN at every coverage, especially below 30% coverage (true 29% opportunity fraction); constant-α variant identified ~24% coverage vs true 29%; PID slightly outperforms constant-α.
- Corrupt inputs (constant α=0.05): CAN correctly identified 70% coverage (30% abstention = corrupted fraction) and beat baseline ANN.
- 1D example: CAN identified optimal coverage ≈19%; NOTE paper inconsistency: §4.1 says line holds 30% of samples, results discussion says 20% — treat coverage numbers as approximate.
- Baseline ANN z-scores: mean ≈0, std ≈1 on train and test — σ is a calibrated uncertainty, not just a ranking score.
- Ridge (L2=0.1) + abstention combined beats either alone; regularization narrows the CAN-vs-baseline gap.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: abstention-gated regression head for totals/margin — publish pick only when σ ≤ τ; gives GSE an honest calibrated "no-pick" mechanism for totals instead of the informal confidence filter.
- TRUST-SIGNAL: baseline NLL (μ, σ) training + post-hoc σ thresholding is itself strong ("a simple yet powerful method") — the cheaper fallback if CAN's PID machinery doesn't beat it.
- OTHER: percentile thresholds (τ, κ) frozen on validation σ break under distribution shift across NFL seasons — τ must be recalibrated each season.
## Engine-actionable? (yes/no + one-line what)
Yes — add a softplus σ output to the totals/margin regression head, train with NLL spin-up then the abstention loss with PID-controlled α toward GSE's target non-publish fraction, backtest on nflverse 2010–2025 (train ≤2023, validate 2024, test 2025) vs the post-hoc-σ-threshold baseline; acceptance gate: ≥0.5-point MAE gain on covered set with calibrated σ (z-score mean ±0.2, std 0.8–1.2).

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1780-risan-robust-instance-specific-deep-abstention.md
## What it is (1-2 sentences)
Ledger 1780 deep-reads the RISAN paper (arXiv:2107.03090), a "Robust Instance Specific Deep Abstention Network" that jointly learns both a prediction function f(x) and a per-input rejection width ρ(x) — each input gets its own abstention band |f(x)| ≤ ρ(x) — via a smooth double-sigmoid surrogate of the 0-d-1 (predict/abstain/err) loss. Verdict ADAPT: per-pick learned rejection widths with a calibrated surrogate are the right upgrade from GSE's global thresholds, and the label-noise robustness result matters for noisy sports outcomes, but the binary 0-d-1 formulation must be reworked for unit-denominated asymmetric sports costs.
## Key metrics/methods (formulas where given, else "not specified")
- Target loss: L_d(yf(x), ρ) = 1{yf(x) ≤ −ρ} + d·1{|f(x)| ≤ ρ}, with abstention cost d ∈ (0, 0.5).
- Surrogate: double-sigmoid loss L_ds — smooth, non-convex, classification-calibrated: excess 0-d-1 risk is bounded by excess surrogate risk; joint (f, ρ) learner has generalization bounds (paper's theorems).
- Network: two outputs — prediction function f(x) and rejection-width function ρ(x) (instance-specific abstention width), trained end-to-end; the double-sigmoid shape gives gradients everywhere while preserving the 0-d-1 minimizer.
- Assumptions: binary labels; abstention cost d known and fixed; calibration holds for the 0-d-1 target (not for arbitrary cost structures).
## Data sources named
Cats vs Dogs and CIFAR-10 (binary-ified evaluations), with synthetic label noise injected at 20% and 40%. Baselines: DAC (Deep Abstaining Classifier) and standard fixed-threshold gating.
## Findings (numbers and facts, not vibes)
- At 20% label noise and low rejection rates: RISAN's accepted accuracy is 6–7 percentage points higher than baselines. (TRUST-SIGNAL)
- At 40% label noise: about +10 points on Cats vs Dogs and +5 points on CIFAR-10 over baselines. (TRUST-SIGNAL)
- Improves 5–10 percentage points over DAC on unrejected samples. (TRUST-SIGNAL)
- The ledger claims the instance-specific width (not a global ρ) plus the calibrated surrogate drives the win; robustness comes from the abstention mechanism refusing to fit noisy labels. (TRUST-SIGNAL)
- GSE overlap per the ledger: GSE gates with global thresholds (moving toward learned gates per ledgers 1775–1777), but nothing learns a per-pick abstention width jointly with the pick function; complements ledger 1775, which learns a score for a fixed predictor, whereas RISAN learns predictor and gate jointly. (OTHER)
- Limitations: binary classification with 0-d-1 loss only; a moneyline-dog loss ≠ a spread loss, which the fixed-d model can't express; the double-sigmoid is non-convex (initialization/optimization dependent); paper's noise is synthetic and uniform, whereas sports noise (bad beats, ref variance, grading disputes) is structured; ρ(x) doubles output complexity and gate-overfit capacity. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-pick abstention width as a trust signal: learn a ρ(x) head on the pick model's feature trunk so each posted pick carries its own "how unsure am I on this input" width, replacing global thresholds (TRUST-SIGNAL).
- Label-noise robustness: joint abstention training refuses to fit noisy labels, gaining +6–10 points accepted accuracy at 20–40% noise — directly relevant to noisy graded sports outcomes (TRUST-SIGNAL).
- Adapt the surrogate to sports costs: replace the fixed abstention cost d with a per-pick cost d(x) = stake fraction at risk (TRUST-SIGNAL).
- Ledger's improvement experiment: learn a market-conditioned width ρ(x, line-movement) so the abstention band widens when the market disagrees with the model — effectively learning "abstain when the market knows something I don't" (TRUST-SIGNAL).
- Acceptance gate: adopt only if joint (f, ρ) beats the global gate by ≥ 3 points of accepted hit-rate at matched coverage on clean data AND degrades less under 20% injected noise (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-RISAN as a second gate head: a per-pick rejection-width head trained jointly with a unit-loss-adapted double-sigmoid surrogate, evaluated on accepted hit-rate and units at matched card sizes, with and without injected outcome noise.

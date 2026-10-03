# arxiv-program/research/2026-09-21/arxiv-deep/1027-calibrated-losses-adversarial-robust-reject.md
## What it is (1-2 sentences)
A learning-theory paper characterizing which surrogate losses are *calibrated* for binary classification with a reject option when inputs face ℓ₂ adversarial perturbations of radius γ — proposing shifted double-sigmoid and shifted double-ramp losses, proven on linear classifiers only.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence-based reject classifier h(f(x),ρ): +1 if f(x)>ρ, ⊥ if |f(x)|≤ρ, −1 if f(x)<−ρ; reject cost d∈(0,0.5)
- Adversarial-robust target loss ℓ_d^γ = (1−d)·sup_{B₂(x,γ)} 1{yf(x')<−ρ} + d·sup_{B₂(x,γ)} 1{yf(x')≤ρ}; for linear classifiers = γ-right-shift of standard reject loss
- Theorem 10: calibration characterization ("minima jump" conditions); Theorem 11: differentiable convex margin surrogates are NOT calibrated; Theorem 12: no quasi-concave-conditional-risk surrogate is calibrated
- Candidate surrogates: shifted double sigmoid ℓ_ds^{μ,β}, shifted double ramp ℓ_dr^{μ,β}, require shift β≥γ; μ=2.65 (DSL), 0.95 (DRL)
- Validation: synthetic 2-D data only (100/class in reject band, 200/class outside, 5% label noise, 10 runs); (γ_train×γ_test)×d×β grid; baselines unshifted DSL/DRL
## Data sources named
Synthetic 2-D dataset generated per paper procedure (no real data, no public release)
## Findings (numbers and facts, not vibes)
- Shifted DRL (d=0.2, γ_train=0.2, β=0.1): 0.229 error / 0.904 acc / 0.895 reject rate, flat across γ_test∈{0,0.1,0.2}; non-robust β=0: 0.359/0.508/0.453
- Shifted DSL (d=0.2, γ_train=0.2, β=0.1): 0.2/0/1 — degenerate, rejects everything
- Non-robust DSL error rises 0.338 (γ_test=0) → 0.484 (γ_test=0.2)
- Calibration of proposed surrogates is *conjectured* from plots, not proven (future work)
- Theory restricted to linear hypothesis class H_lin; ℓ₂ perturbations only
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none actionable — adversarial-perturbation threat model has no sports analogue; surrogate-loss consistency for linear classifiers does not touch GSE's probability-calibration or post-hoc gating stacks
## Engine-actionable? (yes/no + one-line what)
No — verdict in file is REJECT: no usable artifact (linear-only theory, synthetic-only experiments, adversarial framing irrelevant to sports prediction).

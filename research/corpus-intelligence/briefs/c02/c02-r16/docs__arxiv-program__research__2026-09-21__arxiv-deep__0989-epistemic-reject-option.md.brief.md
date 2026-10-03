# docs/arxiv-program/research/2026-09-21/arxiv-deep/0989-epistemic-reject-option.md

## What it is (1-2 sentences)
Ledger deep-read of Franc & Paplham (2025), arXiv:2511.04855v1 — theoretical framework for classification/regression with abstention based solely on *epistemic* uncertainty (uncertainty from limited data), minimizing expected regret vs the Bayes-optimal predictor and rejecting when conditional regret exceeds cost δ. Verdict in file: ADAPT — the abstention lane's theoretical capstone, completing the triad with 0987 (conformal guarantees) and 0988 (evidential mechanism).

## Key metrics/methods (formulas where given, else "not specified")
- Theorem 1: minimizer of Bayesian expected regret-based reject loss R_B^δ(Q) is Q_E(x,D) = H_B(x,D) if E(x,D) ≤ δ, else reject, where conditional regret E(x,D) = E_{(θ,y)~p(θ,y|x,D)}[ℓ(y,H_B(x,D)) − ℓ(y,h(x,θ))].
- Uncertainty decomposition: **T(x,D) = A(x,D) + E(x,D)** (total = aleatoric + epistemic), with A(x,D) = E[ℓ(y,h(x,θ))] expected conditional risk under posterior.
- Closed forms: squared loss — E = Var_{θ~p(θ|D)}[E_{y~p(y|x,θ)}[y]], T = Var_{y~p(y|x,D)}[y]; 0/1 loss — E = E_θ[max_y p(y|x,θ)] − max_y p(y|x,D), T = 1 − max_y p(y|x,D); cross-entropy — E = E_θ[D_KL(p(y|x,θ) ∥ p(y|x,D))] (Depeweg et al. 2018 mutual-information measure, here derived as optimal rather than postulated).
- Behavioral distinction: epistemic predictor *accepts high-aleatoric inputs* (noisy but well-modeled) and rejects inputs not reliably supported by training data.
- Hyperparameters: rejection cost δ; prior; likelihood family. Loss-agnostic (any ℓ). Evaluation metric used: Area under Regret–Coverage curve (AuReC, lower better).

## Data sources named
- None real: experiments entirely synthetic — 1-D cubic-polynomial regression with heteroscedastic noise v(x)=0.1+0.04(x+8)², Gaussian prior (intercept var 1, others 0.1), 3000 trials, training sizes m varied. No code or data released.

## Findings (numbers and facts, not vibes)
- Synthetic experiment (3000 trials, m varied): the epistemic predictor achieves the lowest AuReC at every dataset size; small m: Bayesian (total-uncertainty) ≈ epistemic (epistemic dominates); large m: Bayesian converges to aleatoric-only predictor as epistemic uncertainty vanishes; plug-in ML rejector (θ̂) consistently worst. [TRUST-SIGNAL: the framework separates "model is guessing" from "noisy but well-modeled" — directly maps to pick withholding decisions]
- Baselines: aleatoric (Chow, full knowledge of p(x,y)); Bayesian reject-option (total uncertainty T, eq. 14); plug-in ML reject-option (point estimate θ̂). Paper positions its contribution as the missing third option. [OTHER]
- Numeric gate stated in file: in the reproduced synthetic experiment at m=30 (3000 trials), epistemic predictor's AuReC must be strictly lower than Bayesian predictor's AuReC, significant at p < 0.01 (paired test), and the Bayesian-vs-epistemic gap must shrink monotonically as m goes 10 → 300.
- Improvement experiment criterion: on a full season of real binary picks, top epistemic-uncertainty decile must have realized error ≥8 points higher than bottom decile, and withholding top-decile-E picks must reduce published-set error by ≥2 points at ≤10% rejection.
- Limitations: entirely synthetic — no real-world, sports, or classification data; deep-network deployment needs approximations (MC dropout, deep ensembles) left to future work; no guidance on setting δ from data (gap filled by 0987's error-reject curves); no distribution-free guarantee (model-dependent posterior quantity); most valuable exactly where posteriors are hardest to trust (small m).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Epistemic abstention score per pick (withhold when E > δ): TRUST-SIGNAL — the honest "most accurate and calibrated" posture: publish noisy-but-understood games, withhold under-supported ones (new coaches, regime changes, thin-sample matchups).
- Triple-gate architecture proposed (0989 regret = *why* abstain → 0988 FERL = *what* is anomalous → 0987 conformal = *guarantee* on published picks): TRUST-SIGNAL — a certified-error-rate published set.
- Separation of aleatoric (close game, price it honestly) from epistemic (model guessing, withhold): TRUST-SIGNAL — calibration-state honesty.
- δ calibration via 0987's error-reject curves: OTHER (cross-paper machinery dependency).

## Engine-actionable? (yes/no + one-line what)
Yes — build an epistemic abstention score for GSE's pick model (posterior over parameters via Laplace approximation or a small deep ensemble; 0/1-loss score E = E_θ[max_y p(y|x,θ)] − max_y p(y|x,D)), withhold picks with E > δ where δ is set from 0987's error-reject curves; validates via the head-to-head test: epistemic abstention must beat total-uncertainty (softmax entropy) abstention on published-set error at matched reject rates.

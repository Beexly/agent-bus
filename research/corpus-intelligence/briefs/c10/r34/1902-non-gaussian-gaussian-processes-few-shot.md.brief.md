# arxiv-program/research/2026-09-21/arxiv-deep/1902-non-gaussian-gaussian-processes-few-shot.md
## What it is (1-2 sentences)
Non-Gaussian Gaussian Processes (NGGP) for few-shot regression: a per-observation invertible 1-D Continuous Normalizing Flow (FFJORD), conditioned on input features, applied to the GP posterior to model heteroscedastic/skewed/multi-modal noise and adapt to tasks structurally dissimilar from meta-training, while keeping closed-form GP conditioning.
## Key metrics/methods (formulas where given, else "not specified")
- GP posterior: μ* = K(X*,X)(K(X,X)+σ²I)⁻¹y; K* = K(X*,X*)+σ²I − K(X*,X)(K(X,X)+σ²I)⁻¹K(X,X*).
- CNF log-probability: log p(y) = log p(f_β⁻¹(y)) − ∫ Tr(∂g_β/∂z(t)) dt.
- Flow-conditioned marginal likelihood: log p(y|X,φ,θ,β) = log p(zʰ|X,φ,θ) − Σ_d ∫ ∂g_β/∂z_d(t) dt, zʰ = f_β⁻¹(y,h_φ(X)).
- Deep kernel: feature extractor h_φ → NN Linear/RBF/Spectral-Mixture kernel; meta-training maximizes flow-augmented marginal log-likelihood (Deep Kernel Transfer paradigm).
- Metrics: MSE and NLL on meta-train vs held-out meta-test tasks.
## Data sources named
Sines (synthetic, Finn-style; amplitude [0.1,5.0], phase [0,π]; mixed-noise variant), QMUL head-pose trajectory (37 people, 133 grayscale images each), Pascal3D object pose (50 train / 15 test objects), UCI Power (sub_metering_3), NASDAQ100, EEG. Code: https://github.com/gmum/non-gaussian-gaussian-processes (stated open source).
## Findings (numbers and facts, not vibes)
- Mixed-noise sines in-range NLL: DKT+Spectral 0.37±0.16 vs NGGP+NN Linear 0.17±0.15 (models heteroscedastic noise); out-of-range NLL 1.58±0.40 vs 1.35±0.38.
- Head-pose out-of-range NLL: DKT+Spectral 0.00±0.09 vs NGGP+Spectral −0.62±0.24 (substantial calibration win under domain shift).
- Object pose NLL: DKT+Spectral 1.30±0.06 vs NGGP+Spectral 0.86±0.45 (GP methods resist MAML/CNP memorization).
- NASDAQ100 out-of-range NLL: DKT+RBF 1.049±2.028 vs NGGP+RBF −2.978±0.571; MSE×100: 0.181±0.089 vs 0.016±0.034.
- Pattern: wins concentrate in NLL (probabilistic calibration) and out-of-range robustness, not raw MSE.
- Costs: O(n³) GP + per-step FFJORD ODE solves; authors state NGGP harder to train than DKT, only worthwhile when data genuinely non-Gaussian; no calibration diagnostics shown; no tabular/discrete-event sports data tested.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] NLL/calibration wins are the "well-calibrated probability beats point estimate" property the pick-confidence layer needs.
- [QB-BEHAVIOR] New-regime adaptation (rookie QB starts, new HC first 4 games) from 2–4 games of data is the NFL analog of few-shot meta-test tasks; proposed improvement: task-conditioned hypernetwork β=H(QB/coach embedding) since rookie vs veteran QBs have different noise geometries.
- [COACHING] New-HC / scheme-change regimes map directly to the paper's out-of-range domain-shift ablations.
## Engine-actionable? (yes/no + one-line what)
yes — Build a meta-learned GP-flow prior over team-seasons (nflverse 2015–2025) that adapts with 2–4 games for new-regime teams; adopt into the new-regime module if few-shot NGGP beats league-average prior by ≥0.01 Brier on first-4-games of 2023–2025 new-regime teams and beats the no-flow DKT ablation on NLL (~2–3 engineering weeks, authors' repo is the starting point).

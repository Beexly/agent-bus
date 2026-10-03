# arxiv-program/research/2026-09-21/arxiv-deep/1088-quantile-regularization-implicit-regression-calibration.md
## What it is (1-2 sentences)
Research brief (reader 20, ledger 1088) on arXiv:2002.12860v1, which makes regression-model calibration a trainable loss term: a quantile regularizer penalizing deviation of the model's PIT values from Uniform[0,1] via cumulative KL divergence, so no held-out calibration set is needed. **Verdict: ADAPT** — closed-form estimator, 10-dataset evidence, and a direct GSE implementation spec.
## Key metrics/methods (formulas where given, else "not specified")
- Quantile calibration: P[[F(X)](Y) ≤ p] = p ∀ p ∈ [0,1] (model's predictive CDF values at realized outcomes are uniform).
- Cumulative residual entropy: ε(S) = −∫₀^∞ F̄_S(s) log F̄_S(s) ds.
- Cumulative KL divergence: CKL(F_S‖G_T) = ∫ F̄_S(x) ln(F̄_S(x)/Ḡ_T(x)) dx − E[S] + E[T]; non-negative, zero iff F_S = G_T.
- Closed form vs Uniform[0,1] (Proposition 2): CKL(F_S‖G_T) = −ε(S) + E[(1−S) ln(1−S)] + 0.5.
- Consistent sample estimator from ordered PIT samples s_(1) ≤ … ≤ s_(n) (Proposition 3): CKL̄ = Σ_{i=1}^{n−1} (n−i)/n · ln((n−i)/n) · (s_(i+1) − s_(i)) + (1/n) Σ_i (1−s_i) ln(1−s_i) + 0.5.
- Algorithm 1: per minibatch compute predictive CDFs Φ(μ_k, σ_k), PIT values c_k = Φ_k[y_k], differentiable sort (NeuralSort/"diffsort") to get ordered s, evaluate estimator as calibration loss CL. Full objective: L = NLL(y, μ_w, σ_w) + λ·CL(y, μ_w, σ_w); experiments use λ = 20 with no significant RMSE/NLL degradation.
- Validation metric: L2 quantile calibration error CE(F) = ∫₀¹ (P[[F(X)](Y) ≤ p] − p)² dp; M-bin estimator: CE = (1/M) Σ_i [(1/N) Σ_j 1[F_j(y_j) ≤ p_i] − p_i]².
- NeuralSort is O(n²) in batch size; batch-size 512 worked in the paper.
## Data sources named
10 UCI regression datasets: Air Foil, Boston Housing, Concrete Strength, Fish Toxicity, Kin8nm, Protein Structure, Red/White Wine, Yacht Hydrodynamics, Year Prediction MSD.
## Findings (numbers and facts, not vibes)
- Heteroscedastic MC Dropout (dropout 0.25, T=10 passes): QR reduces calibration error on all 10/10 datasets (e.g. Concrete 58.75→35.42; Yacht 55.21→40.08; Year MSD 8.52→3.89); NLL better in 7/10; RMSE drop negligible.
- Deep Ensembles (5 members + adversarial training): calibration error reduced in 9/10 cases (e.g. Concrete 81.34→65.48; Yacht 84.38→54.23; Year MSD 6.57→2.41).
- Key negative result: post-hoc isotonic recalibration *increases* calibration error on small datasets — 5/10 with Dropout-VI, 7/10 with deep ensembles (ensembles on Air Foil: 45.04 → 79.00 after isotonic); it only helps on very large datasets (Kin8nm, Protein Structure, Year MSD).
- Implementation details: Gaussian predictive family assumed (Φ(μ,σ)); λ = 20; quantile calibration is marginal, not distributional (conditional-on-(μ,σ) calibration not guaranteed).
- Numeric gate: adapt only if, on a held-out NFL season, adding CKL to one GSE regression head reduces L2 quantile calibration error by ≥15% relative (e.g. 0.20 → 0.17) with held-out NLL not materially worse.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the isotonic-overfitting warning is load-bearing for GSE — per-slice backtest recalibration (per-team, per-weather, playoff-only) with n < 1,000 can *compound* miscalibration by up to +34 points; gate-check or replace with QR-style implicit calibration.
- OTHER: calibration-uncertainty engineering — complements ledger 1082 (post-hoc GP PIT recalibration): QR trains calibration in, GP cleans up the remainder; a two-stage pipeline.
## Engine-actionable? (yes/no + one-line what)
Yes — add the CKL regularizer (λ=20 starting point) to one GSE Gaussian (μ,σ) projection head, gating on ≥15% held-out calibration-error reduction with flat NLL, and apply the small-slice isotonic ban as a standing FAM-pipeline safety rule.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1126-causal-icm-multi-task-gaussian.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:2405.20957 (Dimitriou et al. 2024, "Causal-ICM"): rank-2 intrinsic coregionalization GP fusing a small randomized trial with a large observational study to estimate CATE, with a single borrowing parameter ρ controlling bias contamination. Verdict: ADAPT — a principled way for GSE to combine a small trusted evidence source (verified pick outcomes) with larger biased historical data while quantifying, not hiding, the borrowing uncertainty.
## Key metrics/methods (formulas where given, else "not specified")
- Rank-2 ICM: fᵉ(x) = u₁(x); fᵒ(x) = ρfᵉ(x) + √(1−ρ²)u₂(x); u₁,u₂ ∼ GP(0,k) independent; ρ∈(0,1) selected by 5-fold CV over {0.0,0.1,…,1.0} minimizing weighted held-out experimental error.
- Proven variance bound (Appendix F): Vᵉ(x*) ≥ (1−ρ²)·Vᵉ_De(x*) — borrowing shrinks uncertainty by at most a ρ-tied factor.
- Confounding-function posterior: η(x*)|X,y ∼ N(mᵉ−mᵒ, Vη) with (1−ρ) terms.
- Assumptions: shared latent structure across tasks; some experimental holdout required for ρ selection; common kernel.
- Code: https://github.com/EvanDimitriou/CausalICM.
## Data sources named
Simulations: ~200–300 RCT observations + ~1,000 observational observations per setting (nonlinear CATE + nonlinear confounding; 100 simulated datasets per setting). Real data: Tennessee STAR class-size study — 422 unconfounded observations, 2,593 confounded observations, 379 held-out validation observations; outcome = test scores.
## Findings (numbers and facts, not vibes)
- Tennessee STAR validation RMSE: Causal-ICM 6.29; experimental GP 6.36; observational GP 7.47; experimental grounding GP 6.38; RF 6.27 (essentially tied — headline advantage is simulation robustness, not a real-data win); Integrative HTE 11.84.
- Misspecification setting (Table 2, mean RMSE (SD)): Causal-ICM 2.586 (1.513) vs GP exp 3.422 (2.186), Integrative HTE 21.883 (3.330).
- n_obs=2000 (Table 5): Causal-ICM RMSE 0.934 (0.674) — improves as observational data grows while Integrative HTE degrades (1.576 (0.318)).
- Out-of-support (Table 7): Causal-ICM MSE 1.071 (0.722) vs Integrative HTE 3.153 (0.919), Kallus GP 43.461 (42.069); in-support 0.252 (0.099), best of all methods.
- ρ sensitivity (Table 3): RMSE minimized near ρ=0.8 (0.305), rising at ρ=1.0 (1.095) where confounding no longer absorbed; RBF kernel 0.822 (0.651) beats Matérn variants.
- Runtime (Table 8, setting 2): Causal-ICM mean 4.56 s vs Integrative HTE 6.01 s per 100 datasets; cubic GP scaling, inducing-point approximations suggested.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Two-source GP: verified GSE pick outcomes (small, trusted) + large biased historical engine predictions (stale/miscalibrated eras), posterior mean edge + bound-inflated variance feeding calibration (Venn-Abers/isotonic) and Kelly sizing: TRUST-SIGNAL (principled borrowing from biased data with explicit uncertainty quantification).
- ρ tuned on trusted-source held-out error only (never on the biased source): TRUST-SIGNAL (anti-self-dealing discipline for borrowing parameters).
- Out-of-support robustness (games outside verified-outcome range): TRUST-SIGNAL (tail/regime-change safety).
## Engine-actionable? (yes/no + one-line what)
Yes — prototype a two-source sparse-GP (gpytorch, ≤500 inducing points) on spread picks: verified outcomes + historical engine outputs, ρ grid via rolling-origin CV on verified outcomes only; adopt if it beats pooled-GP Brier by ≥0.005 (≥0.01 out-of-support) with stable ρ̂.

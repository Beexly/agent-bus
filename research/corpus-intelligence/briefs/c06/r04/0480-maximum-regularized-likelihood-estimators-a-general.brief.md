# arxiv-program/research/2026-09-21/arxiv-deep/0480-maximum-regularized-likelihood-estimators-a-general.md
## What it is (1-2 sentences)
A Biometrika theory paper proving assumptionless finite-sample oracle inequalities in KL divergence for maximum regularized likelihood estimators (any definite positively-homogeneous regularizer — ℓ_q incl. non-convex q∈(0,1), nuclear norm) with no sparsity/restricted-eigenvalue assumptions; dossier verdict REJECT — pure math, no data, no implementable sports application.
## Key metrics/methods (formulas where given, else "not specified")
- MRLE: Λ̂ ∈ argmin_{Λ∈L}{−log f_Λ(X) + r·u(Λ)} (eq. 1); KL d(Λ,Λ′):=E_{Λ′}log(f_{Λ′}(X)/f_Λ(X)); dual regularizer ũ(Λ):=sup{⟨Λ,Λ′⟩|u(Λ′)≤1}.
- Theorem 2.1 oracle inequality: for all r ≥ ũ(∇(d−d̂)_{Λ̂}): d(Λ̂) ≤ r·u(Λ*) + r·u(−Λ*).
- Lasso specialization: penalty bound √(log p/n)·‖β*‖₁ (1/√n rate, optimal sans further assumptions) vs fast-rate s·log p/(w²n) needing restricted eigenvalues w.
- Applications (§3): tensor response regression, generalized linear tensor regression, graphical models (Gaussian, non-paranormal, Ising) with ℓ₁/SLOPE. Assumptions: convex parametrization of densities; u definite + positively homogeneous.
## Data sources named
None — no datasets, no simulations, no real data anywhere in the paper.
## Findings (numbers and facts, not vibes)
- Zero numerical results, tables, or experiments in the paper; Discussion states only that the inequalities match known lower bounds up to log-factors for regression (a conjecture for the general case).
- The actionable shadow (use ℓ₁-regularized models; collinearity needn't hurt prediction, citing Hebiri & Lederer 2013 / Dalalyan et al. 2017) is already standard ML practice.
- Adversarial note per file: the 1/√n rate gives no guidance on feature engineering, model selection, or any GSE engineering decision; r is chosen by CV in practice anyway.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: statistical-learning theory (no NFL transfer path).
## Engine-actionable? (yes/no + one-line what)
no — REJECT; a theorem cannot be implemented; gate is "does it change a GSE engineering decision" — it does not. Closed.

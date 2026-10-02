# arxiv-program/research/2026-09-21/arxiv-deep/1178-a-theoretical-comparison-of-weight.md
## What it is (1-2 sentences)
Ledger deep read of Zou et al. (2025, arXiv:2510.26456): a theoretical comparison of weight-constraint choices in forecast combination/model averaging. Verdict: ADAPT — the simplex constraint provably narrows the out-of-sample MSFE bound and induces sparsity, suiting GSE's noisy, correlated model panel.
## Key metrics/methods (formulas where given, else "not specified")
- Five weight spaces: W_A = R^S (unconstrained); W_B = {w: w'1 = 1} (sum-to-one); W_C = [0,1]^S (nonnegative box); W_D = {w ∈ [0,1]^S: 1'w = 1} (simplex); W_E = {w: w'w = 1} (spherical, norm-one).
- Variance ordering (App. A): Var*(ŷ^B_reg,T+1) ≤ Var*(ŷ^A_reg,T+1) ≤ Var*(ŷ^{A'}_reg,T+1); closed forms Var*(ŷ^A) = σ²f'_{T+1}(F'F)^{-1}f_{T+1}; sum-to-one correction subtracts φ^{-1}σ²{f'_{T+1}(F'F)^{-1}1}² with φ = 1'(F'F)^{-1}1.
- Norm bounds: W_C: Var* ≤ S·f'_{T+1}f_{T+1}; W_D: Var* ≤ f'_{T+1}f_{T+1}; W_E: Var* ≤ f'_{T+1}f_{T+1}.
- Selection proposal: three-way data split with a conformal residual quantile — pick the weight space giving the shortest conformal prediction interval.
- Gate from ledger: adopt winning space if it beats unconstrained by ≥0.002 Brier on 2025 rolling test (DM p<0.05) and conformal rule picks it in ≥60% of windows.
## Data sources named
No real data. Monte Carlo simulations: T=10,000 observations, d=42 regressors, 16 scenarios (4 regressor distributions × 4 candidate-model sets); weight-estimation criteria: least squares, model averaging (Mallows/Jackknife-style), cross-validation; plus pairwise/partial and eigenvector weights.
## Findings (numbers and facts, not vibes)
- Unconstrained (W_A) gives best in-sample SSR fit — mechanical.
- Out-of-sample, constrained spaces win in difficult scenarios: simplex (W_D) and nonnegative (W_C) lower MSFE than unconstrained when candidates are heavy-tailed/correlated.
- Sparsity (Table 5): W_D zeroes 40–89% of weights across scenarios (vs. 0% for W_A/W_B by construction); W_C 9–76%; pairwise weights ~70–97% sparse.
- W_B preserves unbiasedness while cutting variance vs. W_A per the theorem.
- Improvement idea: adaptive constraints — start each season on the simplex, relax toward sum-to-one/box as effective sample grows, governed by the conformal-interval-length criterion.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ensemble-combiner constraint rule (simplex default for noisy correlated panel; never unconstrained in production) — OTHER
- Sparsity report as component-redundancy monitoring dashboard (>80% persistent zeroes = investigate panel design) — TRUST-SIGNAL
- Pairs with ledger 1177 (Gibbs stacking on simplex) and 1174/1175 (robust aggregation) as a "GSE combiner" workstream — OTHER
- Conformal-interval selection rule connects to repo's existing CQR/conformal lane — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — horse-race W_A/W_B/W_C/W_D/W_E on 2025 rolling 8-week fits vs. current combiner; adopt the winner (expected: simplex) as the ensemble-layer default constraint with the Brier ≥0.002 / DM p<0.05 gate (~3 days effort per ledger).

# docs/arxiv-program/research/2026-09-21/arxiv-deep/2004-bayesian-batch-active-learning-as-sparse.md

## What it is (1-2 sentences)
A Bayesian batch active learning method (arXiv:1908.02144, Pinsler et al. 2019, "ACS-FW") that re-casts batch construction as sparse subset approximation of the complete-data log posterior, solved with Frank-Wolfe, avoiding correlated top-b duplicates of naive greedy acquisition. File verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Objective: choose batch D′ so log p(θ|D₀∪D′) approximates E_{Y_p}[log p(θ|D₀∪(X_p,Y_p))]; decomposition E[log posterior] = log p(θ|D₀) + Σₘ ℒₘ(θ), ℒₘ(θ) = E_{y_m}[log p(y_m|x_m,θ)] + H[y_m|x_m,D₀] (Eq. 4).
- Sparse approximation: w* = argmin_w ‖ℒ − ℒ(w)‖² s.t. wₘ ∈ {0,1}, Σ𝟙ₘ ≤ b (Eq. 5); relaxed to polytope Σₘ wₘσₘ = σ minimizing (1−w)ᵀK(1−w), Kₘₙ = ⟨ℒₘ,ℒₙ⟩ (Eq. 6); Frank-Wolfe selects the vector most aligned with residual ℒ−ℒ(w) each iteration (Eq. 7), closed-form line search, ≤ b nonzeros after b iterations. Final heuristic: binarize weights (w̃*=1 if w*>0) — admitted by the paper to increase approximation error.
- Inner products: weighted Fisher ⟨ℒₙ,ℒₘ⟩_{π̂,F} = E_{π̂}[∇ℒₙᵀ∇ℒₘ] (Eq. 8); weighted Euclidean ⟨ℒₙ,ℒₘ⟩_{π̂,2} = E_{π̂}[ℒₙ(θ)ℒₘ(θ)] (Eq. 9).
- Linear regression closed form (Eq. 11): ⟨ℒₙ,ℒₘ⟩_{π̂,F} = (xₙᵀxₘ/σ₀⁴)(xₙᵀΣ_θxₘ); single-point acquisition α_ACS(xₙ;D₀) = (xₙᵀxₙ/σ₀⁴)(xₙᵀΣ_θxₙ) (Eq. 12), equivalent to BALD under greedy maximization; xₙᵀΣ_θxₙ ≈ leverage score xₙᵀ(XᵀX)⁻¹xₙ.
- Probit (Eq. 14–15): ⟨ℒₙ,ℒₘ⟩ = xₙᵀxₘ(BvN(ζₙ,ζₘ,ρₙₘ) − Φ(ζₙ)Φ(ζₘ)); α_ACS = xₙᵀxₙ(Φ(ζₙ)(1−Φ(ζₙ)) − 2T(ζₙ, 1/√(1+2xₙᵀΣ_θxₙ))), T = Owen's T, BvN = bivariate normal CDF.
- Random projections for arbitrary models: ℒ̂ₙ = (1/√J)[ℒₙ(θ₁),…,ℒₙ(θ_J)]ᵀ, θⱼ∼π̂ (Eq. 16); ⟨ℒₙ,ℒₘ⟩ ≈ ℒ̂ₙᵀℒ̂ₘ (Eq. 17); batch construction O(|P|J) instead of O(|P|²).

## Data sources named
- UCI regression: yacht (N=308, d=6), boston (506, 13), energy (768, 8), power (9568, 4), year/Million Song Dataset (515,345, 90); classification: CIFAR-10, SVHN, Fashion-MNIST. Neural linear model (Bayesian linear/probit on deterministic NN features); ResNet-18 + mean-field Gaussian VI for images. 80/20 splits; 40 seeds (year: 5; classification: 5).

## Findings (numbers and facts, not vibes)
- Table 1 final RMSE (mean ± 2 SE): yacht — Random 1.272±0.0593, MaxEnt 0.923±0.0319, ACS-FW 1.031±0.0438, MaxEnt-I 0.865±0.0276, MaxEnt-SG 0.971±0.0350; boston — Random 4.068±0.0852, MaxEnt 3.640±0.0652, ACS-FW 3.799±0.0858, MaxEnt-SG 3.458±0.0682; energy — Random 0.959±0.0337, MaxEnt 1.443±0.0857, ACS-FW 0.855±0.0259; power — Random 5.108±0.0468, MaxEnt 5.022±0.0428, ACS-FW 4.984±0.0366, MaxEnt-I 4.834±0.0313; year — Random 13.165±0.0307, MaxEnt 13.030±0.0975, ACS-FW 12.194±0.0596. [OTHER]
- ACS-FW consistently beats Random by a large margin (MaxEnt does not, on energy/yacht); mostly on par with MaxEnt on small data; greedy sequential methods often still win in the small-data regime; ACS-FW's advantage grows with dataset size (dominates on year). [TRUST-SIGNAL: naive top-b entropy sampling can be worse than random on some datasets — energy MaxEnt 1.443 vs Random 0.959]
- Classification: ACS-FW ≥ Random, MaxEnt, BALD, K-Medoids, K-Center on CIFAR-10, SVHN, Fashion-MNIST. [OTHER]
- Runtime (Table 2, seconds): yacht — MaxEnt-I 1057.4 vs ACS-FW 101.7 (10×); year — Random 3811.6, MaxEnt 37,464.6, ACS-FW 28,475.2; "total cumulative runtimes are on par with MaxEnt". [OTHER]
- t-SNE: MaxEnt/BALD batches cluster; ACS-FW covers the manifold; probit toy shows α_ACS "rotates after each selected data point" while BALD's scores are static. [OTHER]
- Final binarization of FW weights is unprincipled and increases approximation error (paper's admission). No cost-awareness (constraint is on count b, not dollars); i.i.d. benchmarks only. [TRUST-SIGNAL: treat the binarization step as a known weakness; the paper's own admission bounds claimed performance]
- Proposed GSE acceptance gates: ACS-FW at 20% charting budget matches/beats random at 40% budget on 2024 held-out log-loss (within 0.003), beats BALD-top-b at equal budget by ≥ 0.004. Reject if FW binarization makes batches unstable (Jaccard < 0.5 across 3 seeds) or α_ACS uncorrelated with posterior movement (|ρ| < 0.3). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Charting budget allocation: pool = season's uncharted games; the selected batch is a sparse weighted approximation of the full-season log posterior — "which games, if charted, would make our posterior look as if we'd charted the whole season"; cost-aware extension changes the polytope to Σₘ wₘσₘcₘ = σ·c̄ (dollar budget, not count budget) — OTHER (labeling/resource-allocation intelligence)
- Leverage-score closed form α_ACS(x) = (xᵀx/σ₀⁴)(xᵀΣ_θx) gives a no-sampling acquisition score from a Bayesian linear head on engine embeddings — OTHER
- Top-b greedy sampling duplicates/degenerates vs. diversified FW batches — TRUST-SIGNAL (applies to any greedy high-confidence selection, e.g. pick shortlists)
- No direct QB-BEHAVIOR, COACHING, OL, or SCHEME findings in the file.

## Engine-actionable? (yes/no + one-line what)
Yes — pilot ACS-FW (probit closed form on the engine's binary cover head) for weekly charting-batch selection at b≈40, with the cost-weighted polytope extension, gated by the 20%-vs-40%-random test on 2024 held-out log-loss.

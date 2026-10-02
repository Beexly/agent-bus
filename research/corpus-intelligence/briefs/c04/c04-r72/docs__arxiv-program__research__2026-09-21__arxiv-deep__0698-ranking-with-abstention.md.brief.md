# docs__arxiv-program__research__2026-09-21__arxiv-deep__0698-ranking-with-abstention
## What it is (1-2 sentences)
Mao, Mohri & Zhong (2023), arXiv:2307.02035v1 — formulates pairwise and bipartite ranking with an abstention option (abstain at cost c on pairs with ||x−x'|| ≤ γ), proving non-trivial H-consistency bounds for linear and one-hidden-layer ReLU hypothesis sets, alongside negative results showing no non-trivial consistency bound exists without abstention for equicontinuous hypothesis classes. Ledger verdict: ADAPT — fits GSE's weekly pick-ranking problem (rank games by model edge, abstain from ordering near-tie pairs).
## Key metrics/methods (formulas where given, else "not specified")
- Pairwise abstention loss (Eq. 2): L^{abs}_{0-1}(h,x,x',y) = 1_{y≠sign(h(x')−h(x))}·1_{||x−x'||>γ} + c·1_{||x−x'||≤γ}. Bipartite analogue (Eq. 5).
- Surrogate: L_Φ(h,x,x',y) = Φ(y(h(x')−h(x))) with hinge/exp/sigmoid Φ (Eq. 3).
- H-consistency bound: R_{abs}(h) − R*_{abs}(H) + M_{abs}(H) ≤ Γ_Φ(R_Φ(h) − R*_Φ(H) + M_Φ(H)); explicit Γ per surrogate — exp: max{√(2t), 2((e^{2Wγ}+1)/(e^{2Wγ}−1))·t}; hinge: t/min{Wγ,1}; sigmoid: t/tanh(kWγ).
- Negative results (exact): f(t) ≥ 1 (pairwise) / f(t) ≥ 1/2 (bipartite) for any non-decreasing f continuous at 0 — vacuous bounds without abstention for all practical (equicontinuous) networks.
- Assumptions: X = B^d_p(1), ℓp norm; W, Λ norm bounds; theory restricted to linear and 1-hidden-layer nets.
## Data sources named
- CIFAR-10 (ResNet-34, SGD+Nesterov, 200 epochs, batch 1024); pairs sampled with label ordering y=±1; 10,000 test pairs, ℓ∞ distance; γ ∈ {0, 0.3, 0.5, 0.7, 0.9}, cost c ∈ {0.1, 0.3, 0.5}; exponential surrogate (RankBoost). No sports data. No code URL stated.
## Findings (numbers and facts, not vibes)
- CIFAR-10 RankBoost (Table 1, mean ± std over 3 runs): baseline misranking loss 8.33% ± 0.15% at γ=0. At c=0.1: γ=0.7 → 8.25% ± 0.07% (abstention on close pairs beats no abstention); γ=0.9 → 8.54% ± 0.07% (too much abstention hurts). At c=0.5: γ=0.7 → 11.20% ± 0.14%, γ=0.9 → 32.28% ± 0.07% (abstention cost dominates).
- γ=0.3: no abstention takes place — loss coincides with standard misranking for all c.
- RankBoost fails on close pairs (small ||x−x'||) for equicontinuous hypotheses — the empirical check of the negative result.
- File's limitations: abstention rule is input-distance-based, not confidence-based (could conflict with the 0694/0695 confidence-abstention lane); effect size small (8.33% → 8.25%); γ and c hand-swept, optimal γ=0.7 is CIFAR/ℓ∞-specific; theory covers only linear/1-hidden-layer nets (GSE uses deeper models).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the negative results are the point — exact proofs that surrogate ranking losses give vacuous guarantees without abstention; justifies a principled distance-based near-tie rule rather than trusting a ranker's ordering on close pairs.
- OTHER: upgrades GSE's "top plays" ordering — currently a strict ordering by edge with no near-tie mechanism; proposal: pairs with feature distance ≤ γ get equal publish tier; the bipartite variant suits {hit, miss}-labeled game pairs (AUC-style pick ordering).
## Engine-actionable? (yes/no + one-line what)
Yes — build a pairwise game-ranking head (score = predicted edge, exponential surrogate), sweep γ/c on validation, and adopt if the γ-abstaining ranker beats strict edge ordering on test-window top-5 ROI by ≥1pp with stable γ/c; reject if optimal γ collapses to 0.

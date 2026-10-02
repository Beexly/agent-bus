# arxiv-program/research/2026-09-21/arxiv-deep/1149-node-classification-integrated-reject-option.md
## What it is (1-2 sentences)
Integrates a reject option into GNN node classification via two formulations: NCwR-Cov (coverage-based — fix the post rate as a business parameter, then maximize accuracy on posted samples) and NCwR-Cost (rejection as a (K+1)-th softmax class with cost-aware cross-entropy). The GNN machinery doesn't port, but both abstention formulations do — the coverage framing matches GSE's daily-card reality (a fixed-size card, not a cost parameter).
## Key metrics/methods (formulas where given, else "not specified")
- NCwR-Cov: prediction head + selection head g; selective risk r(f,g); objective E = r + λ·max(0, c−φ(g))², λ=32, target coverage c; τ calibrated on validation to hit coverage
- NCwR-Cost: ℓ_ce^d = −log f_y(h) − (1−d)·log f_{K+1}(h) (d=1 recovers standard CE; d < (K−1)/K for abstention to be relevant)
- Baselines: Softmax-Response (τ∈{0.5…0.9}), CF-GNN conformal; coverages {0.5…1.0}, d∈{0.5,0.6,0.7,0.8,0.85}; 10 random inits
## Data sources named
Cora, Citeseer, Pubmed citation networks (20 nodes/class train, 500 val, 1000 test); ILDC Indian Legal Documents Corpus (7,593 labeled + 24,907 unlabeled cases)
## Findings (numbers and facts, not vibes)
- NCwR-Cost beats Softmax-Response at every coverage on all three datasets; NCwR-Cov on Cora: coverage 0.5→93.96±1.45 acc, 0.8→89.12±0.8, 1.0→81.65; NCwR-Cost: d=0.5→95.8±0.05 at 42.6% cov, d=0.85→87.2±0.06 at 90.5% cov
- ILDC: NCwR-Cost d=0.25→87.24±2.45 acc at 67.0±3.3% cov; NCwR-Cov at 0.5 cov→97.55±0.62
- NCwR-Cov high variance (std up to ±3.34), tends to reject easy examples of particular classes; cost-based beats coverage-based at most operating points
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: coverage-targeted abstention head for the pick pipeline — fix business parameter "post picks on exactly X% of the slate" (λ≈32 selective loss + rolling-τ calibration, monitoring coverage drift as regime-shift signal); simpler K+1-class drop-in alternative (ℓ_ce^d, d from staking economics); slate-adaptive coverage as improvement direction (post more on soft slates, fewer on sharp ones)
## Engine-actionable? (yes/no + one-line what)
Yes — implement coverage-targeted selection head (~1 week) alongside the K+1-class cost variant; gate: beats fixed-threshold baseline on ROI at business coverage, realized coverage within ±5pp of target for 4+ weeks, variants agree on ≥75% of abstain decisions.

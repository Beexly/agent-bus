# research/2026-09-21/arxiv-program/phase2/quarantined/1029-node-classification-integrated-reject-option.md
## What it is (1-2 sentences)
A full-text read of arXiv:2412.03190v1 ("Node Classification With Integrated Reject Option," Bhaskar, Gayen, Sharma, Manwani 2024) for the arXiv program's abstention lane, ending in a VERDICT: ADAPT — the cost-based (K+1)-class reject loss is recommended as a backbone-agnostic abstain head for GSE's pick classifier, with a concrete implementation spec, repro test, and acceptance gate.

## Key metrics/methods (formulas where given, else "not specified")
- **NCwR-Cost loss (Eq. 1):** l_ce^d(f(h), e_y) = −log f_y(h) − (1−d)·log f_{K+1}(h) — consistent with the l_{0d1} loss; small d → prefers rejection; d=1 → standard cross-entropy.
- **NCwR-Cov (coverage-constrained, SelectiveNet-style):** selective risk r(f,g|S_n) = [(1/n)Σ l(f(h_i),y_i) g(h_i)] / φ(g|S_n); coverage φ(g|S_n) = (1/n)Σ g(h_i); objective E(f,g) = r(f,g|S_n) + λΨ(c − φ(g|S_n)), Ψ(a) = max(0,a)², λ=32; final loss E = αE(f,g) + (1−α)E(f), α=0.5; test-time threshold τ recalibrated on validation.
- Baselines: Softmax Response (reject when max softmax < threshold); CF-GNN (conformal GNN). 10 random inits, mean ± std accuracy on unrejected test samples at fixed coverages.

## Data sources named
Cora, Citeseer, Pubmed (citation networks, 20 nodes/class train / 500 val / 1000 test); ILDC-single (7,593 Indian Supreme Court cases 1947-Apr 2020; 5,082 train / 1,517 test / 994 dev + 24,907 unlabeled via ikanoon API); UCI Thyroid and Pima Indians Diabetes (converted to k-NN graphs, k=5). No NFL/sports data. SHAP (Lundberg & Lee 2017). No NCwR code link (only pyGAT base).

## Findings (numbers and facts, not vibes)
- NCwR-Cost Cora: d=0.5 → 95.8±0.05 acc @ 42.6±0.02 coverage; d=0.85 → 87.2±0.06 @ 90.5±0.07 (d=1: 81.65 @ 100%). Citeseer d=0.5: 91.6±0.12 @ 9.7±0.05; d=0.85: 75.8±1.61 @ 79.2±0.04. Pubmed d=0.5: 88.9±0.02 @ 49.3±0.08.
- ILDC (real high-stakes task): NCwR-Cost d=0.25 → 87.24±2.45 @ 67.00±3.30 coverage; NCwR-Cov cov=0.5 → 97.55±0.62 acc.
- Cost beats Softmax-Response at all coverage levels on all datasets; beats CF-GNN everywhere except Cora@50% and Pubmed coverage<60% (marginal).
- **Cost > Coverage**: cost-based rejection rejects hard/boundary examples first (t-SNE confirms rejected = class-overlap regions); coverage constraint rejects arbitrary (sometimes easy) examples, e.g. whole classes 3-4 at 50.4% coverage. NCwR-Cov has very high variance (authors' own note) — coverage penalty optimization is unstable.
- Method is backbone-agnostic: at coverage 0.7 Cora accuracy ranges 85.86 (GraphSAGE) to 89.21 (4-layer GAT) across GCN/GAT/GraphSAGE/GATv2/3-4-layer GAT.
- GSE spec: add an ABSTAIN output to the pick classifier trained with l_ce^d = −log f_y − (1−d)·log f_abstain; set d from economics (d ≈ profit forgone by skipping a +EV pick / loss from a wrong pick), tuned on predictions DB; backtested P&L at flat stakes on non-abstained picks as the metric; effort 2-3 days (loss swap + d sweep + backtest harness).
- Acceptance gate: adopt if the (K+1)-class model at profit-optimal d delivers ≥ 8% higher backtested profit than the best post-hoc confidence-threshold rule at the same abstain rate, with abstain rate ≤ 30%.
- Improvement experiments: make d instance-dependent (learn d(x) from market features — line movement, steam, limits) so the model abstains more when the market disagrees with the engine; combine with paper 1026's CSR (conformal interval width on probability output as a second-stage veto over the learned abstain head).
- Leakage notes: transductive setup (test nodes in message passing); ILDC label leakage through citation structure unexamined; τ fit on validation selection scores; NCwR-Cov instability.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Price the abstention, don't fix the coverage" — cost-based reject heads outperform coverage-constrained heads and post-hoc thresholding: OTHER — this settles a live GSE design question: GSE's abstention is currently post-hoc thresholding on calibrated probabilities; the evidence says learn it as a priced output instead.
- Instance-dependent reject cost keyed to market disagreement (line movement, steam, limits): OTHER — abstention cost becomes "estimated probability the market is right," a direct GSE-engine integration point for the signal router.
- Two-stage abstention: learned abstain head + conformal-interval veto: OTHER — defense-in-depth for publish/no-publish decisions under the public/private doctrine (nothing publishes without calibrated gating).
- Degeneracy guard (abstain rate ≤ 30% in the gate): OTHER — an abstention rule that abstains on everything is degenerate; acceptance gates for abstention must cap abstain rate (cf. paper 1027's lesson).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the (K+1)-class cost-based abstain head on GSE's pick classifier with d set from P&L economics, validated on the 2024 season with ≥ 8% backtested-profit gate vs post-hoc thresholding at matched abstain rate.

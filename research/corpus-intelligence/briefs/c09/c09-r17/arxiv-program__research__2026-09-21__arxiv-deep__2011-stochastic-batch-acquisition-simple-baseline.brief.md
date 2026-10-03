# arxiv-program/research/2026-09-21/arxiv-deep/2011-stochastic-batch-acquisition-simple-baseline.md
## What it is (1-2 sentences)
Full-paper research ledger on Kirsch et al. (2021) "Stochastic Batch Acquisition: A Simple Baseline for Deep Active Learning" (arXiv:2106.12059), verdict ADAPT. It proposes three Gumbel-noise stochastic batch rules (softmax/power/soft-rank, O(M log K)) that match BatchBALD/BADGE at orders-of-magnitude lower compute and strictly dominate top-K; the ledger prescribes it as the mandatory baseline for all other active-learning ledgers and an instant drop-in upgrade for GSE's top-K charting queue.
## Key metrics/methods (formulas where given, else "not specified")
- Prop 3.1 (Gumbel-top-K): arg top_k{s_i + ε_i}, ε_i ~ Gumbel(0,β⁻¹) ≡ ordered sample without replacement from Categorical(exp(βs_i)/Σ_j exp(βs_j)).
- Three variants: Softmax p(i) ∝ exp(βs_i); Power p(i) ∝ s_i^β (zero scores get ~zero mass; "when using BALD, entropy... power acquisition is the most sensible"); Soft-rank p(i) ∝ r_i^{−β} (robust to unreliable absolute scores). β=1 default; β→∞ → top-K, β→0 → uniform.
- Theory: BatchBALD decomposition I[Y_1:K;Ω|x_1:K,D] = Σ_j E[I[Y_j;Ω|x_j,prev,D]] ≠ Σ_j s_BALD(i_j) (the top-K fallacy); total correlation TC → 0 as |D_train|→∞, so top-K BALD → BatchBALD late in training (top-K hurts most early); complexity O(M log K), identical to top-K.
- Mechanism: Spearman correlation between scores at step t and t+n falls with n, fastest for the top-quantile most-informative points (even anti-correlate early in training).
## Data sources named
Repeated-MNIST×4, EMNIST Balanced (132k)/ByMerge (814k, 47 classes), MIO-TCD (649k), Synbols, CLINC-150 (DistilBERT), CIFAR-10/SVHN/Fashion-MNIST, IHDP. ~25,000 Titan RTX compute hours. Implementation in appendix G.
## Findings (numbers and facts, not vibes)
- Runtime (Table 1): stochastic = top-K = 0.2s at K=10/100/500 vs BatchBALD 566s/5,364s/29,984s vs BADGE 9.2s/82.1s/409.3s.
- Repeated-MNIST×4: PowerBALD (K=10) > top-K BALD, > BADGE, ≈ BatchBALD (K=5).
- EMNIST Balanced: PowerBALD (K=10) > BatchBALD (K=5) and BADGE (K=10); ByMerge: PowerBALD > BatchBALD (K=5); BADGE OOM'd; BatchBALD took >12 days for 115 acquisitions before being halted.
- MIO-TCD (K=100): PowerBALD > BALD, ≈ BADGE. Synbols minority groups (K=100): PowerBALD ≈ BADGE > BALD. CLINC-150: PowerEntropy ≈ BADGE > entropy.
- IHDP causal: power CausalBALD (tuned β) >> top-K and uniform on √PEHE.
- β ablations: PowerBALD β=8 beats BatchBALD on Repeated-MNIST; SoftmaxBALD β=4 best on EMNIST ByMerge; best β is dataset-dependent. MFVI last-layer large-K on CIFAR-10/SVHN: no method dominates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — active-learning/charting-queue lane: how to turn single-point uncertainty scores into weekly game-charting batches; composes with cost-aware rules (ledgers 2007/2008) by perturbing cost-adjusted scores s_i/c_i.
## Engine-actionable? (yes/no + one-line what)
yes — replace top-K charting with power sampling p(game) ∝ s(game)^β, β=1, via Gumbel-top-K (~2 hours, zero model change); ADOPT iff never worse than top-K on 2024 weekly ATS log-loss AND mean within-batch pairwise distance increases ≥10%.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1903-information-theoretic-meta-learning-gaussian-processes.md
## What it is (1-2 sentences)
Ledger on "Information Theoretic Meta Learning with Gaussian Processes" (Titsias, Ruiz, Nikoloutsopoulos, Galashov 2020, arXiv:2009.03228v3) — a variational information bottleneck (VIB) framework that recovers MAML as a special case (β=0 + Dirac encoder) and yields GP-VIB, a few-shot GP regressor. Verdict: ADAPT — the β-compression knob is directly usable as a regime-shift regularizer for GSE.

## Key metrics/methods (formulas where given, else "not specified")
- IB objective: L_IB(w) = I(Z, D^v) − β·I(Z, D^t) (Eq. 2).
- VIB bound: F(θ,w) = E[log p_θ(D^v|Z)] − β·E[log(q_w(Z|D^t)/p_θ(Z))] (Eq. 7); per-task F̃_i = E[log p(D^v_i|Z_i)] − β·KL[q_w(Z_i|D^t_i) || p_θ(Z_i)] (Eq. 8).
- MAML recovery: ψ_i = θ + Δ(θ, D^t_i), Δ = ρ·∇_θ log p(D^t_i|θ); F̃_i(θ) = log p(D^v_i | θ + Δ(θ,D^t_i)) when β=0 and encoder is Dirac. Probabilistic MAML (Eq. 9): F̃_i(θ,s) = E_{N(ε|0,I)}[log p(D^v | θ + Δ(θ,D^t_i) + √s ∘ ε)] − β·KL[q_{θ,s} || p_θ].
- GP-VIB task objective (Eq. 13): Σ_j E_{q(f^v_{i,j})}[log p(y^v_{i,j}|f^v_{i,j})] − β·KL[q(f^t_i|D^t_i) || p(f^t_i|X^t_i)].
- GP-VIB model: prior = GP with deep kernel k_θ(x,x′) = (exp(v)/M)·φ(x;θ)ᵀφ(x′;θ) (linear or cosine-similarity kernel); encoder q(f^t|D^t) = exact GP posterior for Gaussian likelihoods, or amortized Gaussian per non-Gaussian term (simplified to scalars (m̃, σ²) in experiments).
- β used: 0.001 in classification, 1 in regression (globally set, not tuned per dataset).
- GSE impl spec: tasks = team-seasons (nflverse 2015–2025 features: EPA margin, success rate, pace, pressure rate, roster continuity); support = first K games of new regime; target = next-game win-probability logit (Gaussian likelihood on logit-margin); β ∈ {0.01, 0.1, 1.0} grid; tune β on 2023 leave-one-season-out; improvement = Sequential VIB: β_t = β_0 / (1 + K_t/τ) annealing high→low as games accumulate.

## Data sources named
- Sinusoid regression (Finn 2017 settings; amplitude/phase varying; K ∈ {5,10,20}; 10 repeats, 95% CIs).
- CUB (11,788 images, 200 classes; 100/50/50 train/val/test); mini-ImageNet (100 classes × 600; 64/16/20 split); cross-domain mini-ImageNet→CUB; Omniglot (4,114 train classes)→EMNIST (31 val / 31 test classes). 5-way 1-shot and 5-shot, 3 independent runs. Unified Patacchiola 2020 protocol.
- Code: builds on https://github.com/BayesWatch/deep-kernel-transfer (stated); no dedicated GP-VIB repo.

## Findings (numbers and facts, not vibes)
- Sinusoid K-shot MSE: MAML-1step K=5: 0.600 ± 0.662; MAML-10step K=5: 0.280 ± 0.013; GP-VIB K=5: 0.02 ± 0.014; MAML-10step K=20: 0.043 ± 0.003; GP-VIB K=20: 0.001 ± 0.001 — GP-VIB beats MAML by >10× at every K; posterior mean matches ground truth after K=4 shots with shrinking uncertainty.
- mini-ImageNet 5-shot accuracy: Baseline++ 66.18 ± 0.18 (best baseline) vs GP-VIB+Linear 65.84 ± 0.22; DKT+BNCosSim 64.00 ± 0.09. CUB 5-shot: Baseline++ 78.51 ± 0.59 vs GP-VIB+CosSim 78.35 ± 0.23 (within noise).
- Omniglot→EMNIST cross-domain 1-shot: GP-VIB+Linear 76.01 ± 0.54 (SOTA cell) vs DKT+Linear 75.97 ± 0.70; 5-shot: DKT+BNCosSim 90.30 ± 0.49 vs GP-VIB+Linear 89.93 ± 0.23.
- mini-ImageNet→CUB 1-shot: GP-VIB+CosSim 40.70 ± 0.48 (best) vs DKT+CosSim 40.22 ± 0.54; 5-shot: Baseline++ 57.31 ± 0.11 (best) vs GP-VIB+CosSim 56.70 ± 0.62.
- Pattern per ledger: dominant on regression; classification competitive with SOTA cells on cross-domain transfer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: β-compression knob as regime-shift regularizer — trades memorization of a 2-game sample against predictive compression for rookie-QB / new-HC / post-trade teams; the KL term −β·KL[q(f^t)||p(f^t)] acts as an anti-memorization gate. No existing GSE component does this.
- OTHER: Sequential VIB (β_t = β_0/(1+K_t/τ)) proposed as principled alternative to ad-hoc early-season blend weights (50/30/20 splits) used in DVOA-style metrics — direct early-season projection-method improvement.
- QB-BEHAVIOR: rookie-QB regimes are the named meta-test target (2023–2025 new-regime teams, support = first K∈{2,4} games).
- OTHER: reproducible test gate — ADOPT iff GP-VIB (β tuned) beats league-average prior by ≥0.01 Brier on new-regime first-4-game predictions (2023–2025 LOSO) AND β>0 beats β=0 ablation on NLL (paired t-test p<0.05).

## Engine-actionable? (yes/no + one-line what)
yes — build deep-kernel GP-VIB win-probability logit model over team-season tasks with annealed β for new-regime adaptation (uncertainty bands feed pick-confidence and Kelly sizing); ~2 engineering weeks; run the specified LOSO Brier/NLL acceptance test.

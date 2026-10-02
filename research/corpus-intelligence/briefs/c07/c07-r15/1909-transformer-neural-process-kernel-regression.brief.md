# arxiv-program/research/2026-09-21/arxiv-deep/1909-transformer-neural-process-kernel-regression.md
## What it is (1-2 sentences)
Transformer Neural Process — Kernel Regression (TNP-KR, arXiv:2411.12502v4): a scalable meta-regression neural process built on KRBlocks (Nadaraya–Watson kernel-regression attention) with a learned RBF-network kernel bias on index sets, plus two attention variants — Scan Attention (constant-memory, translation-invariant) and Deep Kernel Attention (linear-time O(n_c)). Processes 100K context points on 1M+ test points in under a minute on a single 24GB GPU.

## Key metrics/methods (formulas where given, else "not specified")
- KRBlock update: v′_i = Σ_j 𝒦(q_i,k_j)/Σ_m 𝒦(q_i,k_m) v_j (Eq. 3)
- Kernel-biased attention: 𝒦(q,k,s_q,s_k) = SM(qᵀk/√d_k + Σ_i α_i 𝒦_i(s_q,s_k)) (Eq. 4), RBF network with 5 learnable basis functions K(s,s′) = Σ_k a_k exp(−|b_k|(‖s−s′‖₂ − c_k)²); separate kernels on spatial vs temporal index-set components
- Temporal causality via bias: 𝒦_t = −∞ when s_k(t) > s_q(t) (Eq. 5) — proposed, flagged as future work, not explored
- Scan Attention: Flash-Attention-2-style scan tiling with gradient checkpointing, constant memory O(n_b²), computes arbitrary bias on the fly (Eqs. 6–8)
- Deep Kernel Attention: shared MLP query-key projection with co-embedded index sets, layer-norm instead of softmax, O(n_c) (Eq. 9)
- 6 KRBlocks, ≈0.5M params, same output head across comparisons; 5 seeds, 100K batches of 32; paired t-tests on NLL
- Metrics: NLL (primary), BO regret under Expected Improvement/UCB, image-completion NLL, extrapolation error, timing

## Data sources named
Meta-regression benchmarks: 1D GPs (RBF, periodic, Matérn 3/2; lengthscales ℓ∼Beta(3,7), mean/median ≈0.3 — deliberately hard; 3–50 context points per function, observation noise 0.1); 2D GPs (RBF on [−2,2]², 12–128 context points); 1D Bayesian optimization; image completion (MNIST, CelebA, CIFAR-10; 16–128 context pixels); epidemiology (synthetic SIR model on 64×64 grids: β∼Beta(2,8), γ∼InvGamma(5,0.4), ω∼randint(1,5)). Baselines: NP, CNP, BNP, ANP, CANP, BANP, ConvCNP, TNP-D, TNP-KR:PERF. Code: stated as provided (JAX implementation).

## Findings (numbers and facts, not vibes)
- 1D GP RBF NLL: TNP-KR:DKA −0.464 ± 0.002 (best), SA −0.462 ± 0.002, PERF −0.459 ± 0.002 vs ConvCNP/TNP-D −0.454 ± 0.002, BANP −0.335, ANP −0.298. All TNP-KR variants lower NLL than TNP-D and ConvCNP (paired p ≤ 0.039).
- BO regret: ConvCNP 0.007 ± 0.002 (best, via better mean + wider bounds under EI); SA 0.013 ± 0.003 — switching EI→UCB "erases" the gap (Appendix Table 14).
- Periodic NLL: SA 0.491 ± 0.001 vs TNP-D 0.536 ± 0.003, ConvCNP 0.551 ± 0.002 (p < 0.001). Matérn 3/2: SA −0.027 ± 0.002 vs TNP-D −0.020 ± 0.003 (p ≤ 0.016). 2D GP: SA 0.460 ± 0.002 vs ConvCNP 0.466 ± 0.003 (p ≤ 0.002).
- CelebA: SA −0.917 ± 0.001 vs TNP-D −0.877 (p = 0.001). CIFAR-10: SA −0.831 ± 0.001 vs ConvCNP −0.816 (p < 0.001).
- SIR epidemiology: SA 0.190 ± 0.001 vs TNP-D 0.191, ConvCNP 0.196 (p ≤ 0.025).
- Extrapolation to 1024×1024 after training on 64×64: SA 0.307 ± 0.006 vs DKA 1.144, PERF 1.457, everything else OOM or 27.2 (NP/CNP collapse) — the headline translation-invariance result.
- Scale: SA processes a 1M+ pixel image in ≈50 s; DKA/PERF in ≈0.3 ms; 100K context on 1M+ test points in under a minute on one 24GB GPU.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: foundation-model-style few-shot meta-regressor for weekly predictions — index set s = (season, week, team-embedding), context = observed games, query any future game for a margin distribution without retraining. Translation invariance → train on historical seasons, extrapolate to future seasons/schedule quirks without retraining.
- TRUST-SIGNAL: conditional-NP factorization means test games are conditionally independent given context — NO joint predictive distribution over multiple games (parlays/hedging correlations need an autoregressive extension, not addressed in paper). BO result shows better-mean/worse-calibration trade-off — calibration, not just NLL sharpness, matters for the pick engine.

## Engine-actionable? (yes/no + one-line what)
yes — meta-trained few-shot margin regressor with (week, season) kernel bias and Eq. 5 causality mask so future games can't inform past predictions; DKA for production speed, SA for weekly batch recalibration; gate on beating kernel-GP NLL by ≥0.05 nats/game in weeks 1–8 (the few-shot regime).

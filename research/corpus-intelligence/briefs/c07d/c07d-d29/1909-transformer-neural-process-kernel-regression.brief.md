# arxiv-program/research/2026-09-21/arxiv-deep/1909-transformer-neural-process-kernel-regression.md
## What it is (1-2 sentences)
Transformer Neural Process — Kernel Regression (TNP-KR, arXiv:2411.12502v4) — a parameter-efficient meta-regression model combining KRBlocks (O(n_c² + n_c n_t)), a learnable kernel-based attention bias (RBF network with 5 basis functions), and two attention variants (Scan Attention: constant-memory; Deep Kernel Attention: O(n_c)) that deliver state-of-the-art meta-regression accuracy at scale (100K context points on 1M+ test points in <1 min on a 24GB GPU). Verdict: ADAPT — the natural few-shot regression engine for weekly GSE predictions, with the index set (game week, season) carrying temporal structure.

## Key metrics/methods (formulas where given, else "not specified")
- KRBlock as Nadaraya–Watson kernel regression: v′_i = Σ_j 𝒦(q_i,k_j)/Σ_m 𝒦(q_i,k_m) v_j (Eq. 3); stack of 6 KRBlocks with shared query/key update weights, pre-norm residuals, index-set conditioning.
- Attention with kernel bias: 𝒦(q,k,s_q,s_k) = SM(qᵀk/√d_k + Σ_i α_i 𝒦_i(s_q,s_k)) (Eq. 4); RBF network with 5 learnable basis functions K(s,s′) = Σ_k a_k exp(−|b_k|(‖s−s′‖₂−c_k)²); different kernels act on different index-set components (spatial + temporal).
- Temporal causality via bias: 𝒦_t = −∞ when s_k(t) > s_q(t) (Eq. 5) — no masking needed (flagged as future work, NOT explored).
- Scan Attention (SA): Flash-Attention-2-style scan tiling with gradient checkpointing, constant memory O(n_b²), computes arbitrary bias on the fly (Eqs. 6–8).
- Deep Kernel Attention (DKA): shared MLP query-key projection with co-embedded index sets, layer-norm instead of softmax, O(n_c) (Eq. 9).
- Translation invariance: if token embeddings exclude index set s and bias kernels are translation-invariant, attention is fully translation invariant — train on 64×64, test on 1024×1024 with "almost no degradation."
- Token embedding: observation status (context/test), index s, function value f → co-embedded token.
- Evaluation metric: NLL (paired t-tests), BO regret under Expected Improvement (and UCB in appendix); all models ≈0.5M params, same output head, 5 seeds, 100K batches of 32.

## Data sources named
1D GPs (RBF, periodic, Matérn 3/2; lengthscales ℓ∼Beta(3,7), mean/median ≈0.3; 3–50 context points per function, observation noise 0.1); 2D GPs (RBF on [−2,2]², 12–128 context points); 1D Bayesian optimization; image completion (MNIST, CelebA, CIFAR-10; 16–128 context pixels); epidemiology (SIR model on 64×64 grids: β∼Beta(2,8), γ∼InvGamma(5,0.4), ω∼randint(1,5)). Baselines: NP, CNP, BNP, ANP, CANP, BANP, ConvCNP, TNP-D, TNP-KR:PERF. GSE-side dataset in spec: nflverse weekly games 2015–2025, index set s=(season, week), Gaussian margin output head (start) → mixture/flow head later.

## Findings (numbers and facts, not vibes)
- 1D GP RBF NLL: TNP-KR:DKA −0.464 ± 0.002 (best), SA −0.462 ± 0.002, PERF −0.459 ± 0.002 vs ConvCNP/TNP-D −0.454 ± 0.002, BANP −0.335, ANP −0.298. All TNP-KR variants lower NLL than TNP-D and ConvCNP (paired p ≤ 0.039).
- BO regret under Expected Improvement: ConvCNP 0.007 ± 0.002 (best, via better mean + wider bounds), SA 0.013 ± 0.003. UNCERTAIN/NUANCE: switching EI→UCB "erases" the gap (Appendix Table 14) — better-mean/worse-calibration trade-off; NLL edge doesn't automatically mean decision-quality edge.
- Periodic NLL: SA 0.491 ± 0.001 vs TNP-D 0.536 ± 0.003, ConvCNP 0.551 ± 0.002 (p < 0.001). Matérn 3/2: SA −0.027 ± 0.002 vs TNP-D −0.020 ± 0.003 (p ≤ 0.016). 2D GP: SA 0.460 ± 0.002 vs ConvCNP 0.466 ± 0.003 (p ≤ 0.002).
- CelebA NLL: SA −0.917 ± 0.001 vs TNP-D −0.877 (p = 0.001). CIFAR-10: SA −0.831 ± 0.001 vs ConvCNP −0.816 (p < 0.001).
- SIR epidemiology NLL: SA 0.190 ± 0.001 vs TNP-D 0.191, ConvCNP 0.196 (p ≤ 0.025).
- Extrapolation 1024×1024 (train on 64×64): SA 0.307 ± 0.006 vs DKA 1.144, PERF 1.457, everything else OOM or 27.2 (NP/CNP collapse) — the headline translation-invariance result.
- Scale: SA processes a 1M+ pixel image in ≈50 s; DKA/PERF in ≈0.3 ms; 100K context + 1M test points in under a minute on one 24GB GPU.
- DKA beats PERF on nearly every benchmark (paired p < 0.001 to 0.047) — DKA is the linear-time default if SA's O(n_c²) is too slow (ledger inference, marked INFERENCE).
- Limitations stated: conditional-NP factorization (test points conditionally independent given context encoding — no joint predictive over multiple future games; parlay/teaser/hedge correlations need an autoregressive extension the authors don't address); Eq. 5 causality proposed but unexplored; BO shows NLL vs calibration tension; all comparisons at 0.5M params (GSE's tabular regime is far smaller); epidemiology benchmark is synthetic SIR, not human-behavior data.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (margin modeling / prediction engine): a single meta-trained TNP-KR with index set s = (season, week, team-embedding) and context = the season's observed games yields a calibrated margin distribution for any future game WITHOUT retraining — the first true foundation-model-style few-shot regressor in the corpus (no neural processes anywhere else in the map; relates to ledgers 1904 RFF kernels and 1902 NGGP). Serves the core prediction engine, especially the early-season (weeks 1–8) few-shot regime where historical context is thin.
- OTHER (calibration/sizing): translation invariance means train on historical seasons and extrapolate to future seasons and schedule quirks (17th game, new playoff format) without retraining — a concrete mechanism for season-boundary generalization that other models handle via ad-hoc recalibration.
- COACHING (weak but structural): the multi-kernel bias recipe — RBF kernel over week-distance plus a PERIODIC kernel over season-week — is the paper's exact Eq. 4 mechanism for capturing seasonality; in GSE terms this is the temporal-tendency channel (rivalry weeks, late-season rest dynamics, schedule quirks) the paper hand-waves elsewhere. Serves coaching-tendency modeling as a temporal-structure prior.
- SCHEME (uncertain, INFERENCE): the improvement experiment — an autoregressive decoding head over a week's slate for JOINT slate distributions (per Bruinsma et al. 2023) — would unlock correlated-pick optimization (parlays, teasers, hedging), but the paper explicitly skips autoregressive sampling, so joint distributions are an extension, not an established result.
- OTHER (method discipline): the EI-vs-UCB finding (EI erases the gap under UCB) is a TRUST-SIGNAL-adjacent warning — NLL/sharpness edges don't guarantee decision-quality edges; the paper's own BO results show a better-mean/worse-calibration model can win exploration. GSE's acceptance gate correctly demands Brier-on-win ≥0.01 improvement, not just NLL.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype TNP-KR (s=(season, week), context=all games through week w) on nflverse 2018–2025 and ADOPT iff it beats kernel-GP margin NLL by ≥0.05 nats/game AND win-prob Brier by ≥0.01 in weeks 1–8 of 2023–2025 (lane's standing gate), ~3 engineering weeks for a JAX/PyTorch port.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0692-selectivenet-deep-neural-network-integrated-reject.md
## What it is (1-2 sentences)
Geifman & El-Yaniv (2019) propose SelectiveNet: a deep network with an integrated selection head that learns prediction and rejection jointly end-to-end (rather than thresholding a confidence score from a pre-trained net), optimizing a selective-risk objective under a target-coverage constraint. Ledger verdict: ADAPT — the integrated selection-head + selective-loss recipe is the cleanest abstention architecture for GSE's pick-selection head. (Caveat: ledger 0697 (2206.09034) argues gains come from a better classifier, not the selection mechanism — treat as the skeptical null.)
## Key metrics/methods (formulas where given, else "not specified")
- Selective risk: R(f,g) = E_P[ℓ(f(x),y)g(x)] / φ(g); coverage φ(g) = E_P[g(x)]
- Constrained objective: θ* = argmin R(f_θ, g_θ) s.t. φ(g_θ) ≥ c
- Interior-point loss: ℒ(f,g) = r̂_ℓ(f,g|S_m) + λΨ(c − φ̂(g|S_m)), Ψ(a) = max(0,a)²; total ℒ = αℒ(f,g) + (1−α)ℒ_h with α=0.5, λ=32
- Post-training calibration on unlabeled validation set V_n: τ = 100(1−c) percentile of g(x_i); predict iff g(x) ≥ τ; Hoeffding bound Pr{ε-violation} ≤ 2e^{2nε²}, coverage ∈ [c−ϵ, c+ϵ], ϵ = √(ln(2/δ)/(2n))
- Architecture: shared main-body block → three heads: prediction f(x), selection g(x) (FC 512-ReLU + BN → single sigmoid), auxiliary h(x) (same task, full-coverage loss); inference: predict iff g(x) ≥ 0.5
## Data sources named
CIFAR-10 (50k train / 10k test); SVHN (73,257 train / 26,032 test); ASIRRA Cats vs. Dogs (20k train / 5k test); UCI Concrete Compressive Strength (1,030 instances, 8 features). All public. Code: https://github.com/geifmany/SelectiveNet.
## Findings (numbers and facts, not vibes)
- CIFAR-10 selective risk (0-1%): c=0.70: SelectiveNet 0.32 ± 0.01 vs MC-dropout 0.43 ± 0.05 (26.38% better) vs SR 0.42 ± 0.06 (23.88%); c=0.95: 4.16 ± 0.09 vs 4.58 ± 0.05 (8.98%) vs 4.55 ± 0.07 (8.56%) — significant gains at every coverage
- SVHN: c=0.80: 0.53 ± 0.01 vs 0.61 ± 0.01 (14.07% for both baselines); at c=0.95 all methods statistically indistinguishable
- Cats vs. Dogs: c=0.80: 0.35 ± 0.09 vs 0.55 ± 0.02 (36.39%) vs 0.68 ± 0.05 (48.16%)
- Concrete regression (MSE): c=0.70: 27.94 ± 1.12 vs MC-dropout 33.70 ± 0.58 (17.09%); c=0.50: 26.81 ± 1.36 vs 28.90 ± 0.77 (7.23%)
- Coverage calibration: average target-coverage violation 3.63% (SelectiveNet) vs 11.98% (SR); the post-hoc τ calibration — not the end-to-end loss — is what actually hits the coverage
- t-SNE §8.2: rejected instances collapse into a central cluster (network doesn't waste capacity separating them)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: GSE's X mandate ("only high-confidence engine picks go up") is an informal selective-prediction policy; no formal selection mechanism exists in the engine — this is the cleanest abstention architecture for the pick-selection head, new capability vs GSE's conformal abstention stack
- OTHER: coverage budget converts to GSE's posted-pick volume constraint
## Engine-actionable? (yes/no + one-line what)
Yes — add a selection head to GSE's pick model (shared trunk → outcome head + sigmoid selection head + auxiliary full-coverage head), train with selective loss (λ=32, target coverage c = GSE's historical publish fraction, e.g., ~0.30), calibrate τ on a recent unlabeled game window, and accept only if covered-set test ROI beats full-coverage-twin + edge-threshold by ≥2pp at matched coverage with p<0.05; otherwise the 0697 skeptical null stands and GSE keeps threshold-on-edge. (~3–5 days.)

# arxiv-program/research/2026-09-21/arxiv-deep/2166-exhaustive-symbolic-regression-model-selection-minimum-description-length.md
## What it is (1-2 sentences)
A review article (Harry Desmond 2025, arXiv:2507.13033v1) synthesizing Bartlett et al.'s Exhaustive Symbolic Regression (ESR) with the minimum description length (MDL) principle: generate EVERY function up to a complexity cap (guaranteeing no candidate is missed) and rank them with an information-theoretic score L(D) = L(H) + L(D|H) in nats, replacing the arbitrary Pareto-front + heuristic score used in stochastic SR (PySR, Operon, etc.).

## Key metrics/methods (formulas where given, else "not specified")
- MDL formula (Eq. 1): L(D) = −log(ℒ(θ̂)) + k·log(n) − (p/2)·log(3) + Σ_j log(c_j) + Σ_i^p (½·log(I_ii) + log(|θ̂_i|)); lower is better; model probability ∝ exp(−L(D)).
- Residual term = −log ℒ̂ (Shannon–Fano); structure term = k·log(n) nats for k nodes from n operators + Σ log(c_j) for integer constants + parameter-precision terms.
- Optimal parameter precision: Δ_i = (12/I_ii)^{1/2}, where I = observed Fisher information (likelihood-vs-precision tradeoff).
- Bayesian connection (Eqs. 2–4): MDL ≡ −log posterior under Laplace approximation given function prior −log P(f_i) = k·log(n) + Σ log(c_α) — MDL is Bayesian evidence + structural-complexity prior.
- Exhaustive Symbolic Regression (ESR, Bartlett et al. 2024): all tree templates by arity → decorate with all operator permutations → dedupe via simplification rules (tree reordering, parameter permutation, reparametrization invariance, parameter combination) → max-likelihood parameter fit per unique function (nonlinear optimization) → broadcast to equivalent variants via transformation Jacobians. Cost: ~200 CPU-hours at complexity 10 (exponential scaling; typical cap ≈ 10, ESR 2.0 targeting ~13 in Julia).
- Katz back-off prior: alternative function prior learned from a training set of domain equations (operator-combination probabilities, language-model style) — drop-in replacement for k·log(n).
- Domain equations ranked: Friedmann H²(z) = H₀²(Ω_Λ + Ω_m(1+z)³) (Eq. 5); MOND g_obs = ν(g_bar/a₀)g_bar (Eq. 7); inflaton φ̈ + 3Hφ̇ + V′(φ) = 0 (Eq. 8).
- Note: MSE-as-likelihood is only valid for Gaussian constant errors — a stated criticism of traditional SR; the k·log(n) prior is basis-set-dependent (e.g., tan(x) cheaper than sin/cos composition).

## Data sources named
- SRBench benchmark (Penn ML Benchmarks): feynman_I_6_2a, 10⁵ datapoints from an unknown univariate function without scatter; five stochastic SR algorithms compared (PySR, DataModeler, FFX, QLattice, Operon).
- Cosmic expansion H(z): 32 cosmic-chronometer points + 1590 Pantheon+ Type Ia supernovae with covariance.
- Galaxy radial acceleration relation (RAR): g_bar/g_obs from HI + optical + rotation-curve data (Lelli et al. 2017).
- Inflaton potential V(φ): 3 CMB numbers from Planck: A_s = (0.027±0.0027)M_pl, n_s = 0.9649±0.0042, r < 0.028 (95% CL).
- Code: https://github.com/DeaglanBartlett/esr; precomputed function sets (Zenodo 7339113); Katz prior https://github.com/DeaglanBartlett/katz.

## Findings (numbers and facts, not vibes)
- SRBench benchmark: ESR alone found the true generator y = θ₁θ₀^{x²} (θ₀=0.6065, θ₁=0.3989 ≈ 1/√e, 1/√(2π) — a standard normal; exact params give MSE = 3×10⁻³³) at complexity 7 via a sharp MSE cliff; all five stochastic algorithms missed it (Operon found only an overparametrised complexity-11 version).
- Cosmology: MDL winners H²(z)=θ₀(1+z)² (CCs) and H²(z)=θ₀(1+z)^{1+z} (SNe), both complexity 5 < Friedmann's 7; preferred over Friedmann by 7.12 nats (probability ratio 1240) and 4.91 nats (probability ratio 136); 38 (CCs) / 36 (SNe) functions beat the literature standard. Both share the Friedmann Taylor expansion to O(z²).
- RAR: many ESR functions beat MOND's "Simple"/"RAR" interpolating functions; P(g_obs→const as g_bar→0) ~ 1 over all functions — but mock-data controls show the data cannot discriminate even if MOND were true.
- Inflation: MDL winner exp(−exp(exp(exp(φ)))) (complexity 6); with Katz prior trained on Encyclopaedia Inflationaris: θ₀(θ₁+log(φ)²) (set A), θ₀φ^{θ₁/φ} (set B); literature models rank 1272 (Starobinsky), 8697 (quadratic), 10839 (quartic) out of the exhaustive list.
- Exhaustive search cost: ~200 CPU-hours at complexity 10; ESR 2.0 targets complexity ~13 in Julia.
- GSE acceptance gate (pre-registered in the deep read): ADOPT the MDL ranking if the MDL top-ranked equation beats the incumbent baseline (spread-only) on 2025 held-out log-likelihood by ≥ 0.005 nats/game AND ranking is stable (top-3 unchanged under 5-fold season-block CV) AND winner has ≤ 10 terms. REJECT if the MDL winner loses out-of-sample, or top-3 Jaccard across folds < 0.5, or exhaustive enumeration at complexity 8 exceeds 72 wall-hours on the VM.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Replaces PySR's heuristic score (−Δlog-loss/Δcomplexity) with a principled nats-based equation ranking for GSE's discovered sports equations — equation-selection method for any discovered law (margin laws, QB rating formulas, win-prob equations) — OTHER.
- Katz back-off prior trainable on a corpus of published sports equations (Elo update, Pythagorean variants, Massey) so the function prior favors sports-plausible operator combinations — TRUST-SIGNAL (prior credibility weighting of candidate models).
- Absolute goodness-of-fit testing: a discovered equation's probability ratio vs the engine's current formula — new calibration-style capability — TRUST-SIGNAL.
- GSE overlap noted in file: connects to equation-discovery lanes 2162 SymTorch/PySR, 2163–2165 SINDy, and the 2164 SOS side-information prior (composite MDL prior = Katz(sports corpus) × SOS-feasibility indicator, infinite description length for equations violating constraints like win prob ∉ [0,1]) — OTHER.
- INFERENCE: applicable to any parametric sports law the engine discovers; no direct QB-BEHAVIOR, COACHING, OL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt MDL (Eq. 1) as the standard equation-selection metric in the 2162 SymTorch pipeline (Bernoulli log-likelihood for win-prob, Gaussian for margins, Fisher-information terms via autodiff), seed PySR with top-100 ≤complexity-8 laws from precomputed ESR sets scored on 2015–2024 nflverse; estimated ~1 week effort, <200 CPU-hours amortized.

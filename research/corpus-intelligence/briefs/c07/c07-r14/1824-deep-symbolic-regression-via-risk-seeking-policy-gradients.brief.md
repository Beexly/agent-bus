# arxiv-program/research/2026-09-21/arxiv-deep/1824-deep-symbolic-regression-via-risk-seeking-policy-gradients.md
## What it is (1-2 sentences)
A ledger on Petersen et al. (arXiv:1912.04871): Deep Symbolic Regression — an autoregressive RNN emitting expression trees, trained by a novel risk-seeking policy gradient that optimizes the conditional expectation of the top-ε quantile (best-case, not average-case) with in-situ constraint masking during generation, beating GP, Eureqa, and Wolfram on exact-recovery benchmarks.
## Key metrics/methods (formulas where given, else "not specified")
- J_risk(θ;ε) = E_{τ∼p(τ|θ)}[R(τ) | R(τ) ≥ R_ε(θ)], R_ε = (1−ε)-quantile of rewards under current policy.
- ∇_θ J_risk = E[(R(τ) − R_ε(θ))·∇_θ log p(τ|θ) | R(τ) ≥ R_ε(θ)]; MC estimate (1/εN) Σᵢ [R(τ⁽ⁱ⁾) − R̃_ε(θ)]·1_{R(τ⁽ⁱ⁾)≥R̃_ε(θ)} ∇_θ log p(τ⁽ⁱ⁾|θ). Only the top-ε fraction of each batch contributes; theoretically-prescribed quantile baseline. Mirrors CVaR flipped to the risk-seeking side.
- In-situ constraints: token masking during generation (arity, no nested trig, length limits, constant placement, no redundant subtrees) — enforced at generation, not post-hoc.
- Tree structure exploited via parent + sibling embeddings as RNN inputs.
## Data sources named
Nguyen symbolic-regression benchmark suite (12 community-vetted expressions); literature comparisons vs Neat-GP, GrammarVAE, BSR, Eureqa; harmonic-series H_n bonus experiment. Noise sweeps: Gaussian noise σ = 0 → 0.1× RMS(y).
## Findings (numbers and facts, not vibes)
- DSR significantly outperforms all five baselines (PQT, VPG, GP, Eureqa, Wolfram) in exact recovery across the Nguyen suite, p<10⁻³.
- Noise: Wolfram "catastrophically fails for even the smallest noise level"; DSR beats all baselines at every noise level/dataset size; 10× data improves recovery across noise levels.
- Literature: DSR "greatly outperforms" published results; Neat benchmark median RMSE 0 on Neat-1/Neat-2 vs Neat-GP's 0.0779, 0.0579.
- Ablations: risk-seeking objective beats standard policy gradient; in-situ constraints improve recovery.
- Harmonic series: recovered H_n ≈ γ + log(n) + 1/(2n) + 1/(11.3776n + 15.725) + 0.327981 with γ≈0.57721 — a novel variant of Euler's 1755 formula.
- Limitations: tiny benchmark (12 expressions, 1–2 variables); constants hard for RNN emission; RNN sequential/sample-hungry vs PySR's parallel GP; exact-recovery metric is wrong objective for GSE (predictive r, not rediscovery); no correlated-feature/regime-break tests.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Risk-seeking framing: for metric invention, optimize the single best equation on the Pareto front, not average batch quality (OTHER — metric discovery doctrine)
- In-situ constraint masking (forbid degenerate forms, enforce shape priors like monotone-in-EPA) as the missing piece for sports-domain SR (OTHER — SR method)
- Risk-seeking RL post-pass on PySR's hall-of-fame as a cheap upgrade path (OTHER — metric discovery)
## Engine-actionable? (yes/no + one-line what)
yes — Add a risk-seeking (top-ε quantile) RL post-pass over PySR's hall-of-fame with constraint masks on nflverse QB-game data, adopt if best ≤15-node expression beats PySR-only by ≥0.03 test r on 2024–2025.

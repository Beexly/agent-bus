# arxiv-program/research/2026-09-21/arxiv-deep/0572-improved-theoretical-guarantee-for-rank-aggregation.md
## What it is (1-2 sentences)
Zhong & Ling (2023) sharpen the entry-wise (ℓ∞) eigenvector perturbation bound for spectral ranking (top eigenvector of the skew-symmetric pairwise-difference matrix) via the leave-one-out technique, reducing sample complexity under the Erdös–Rényi Outliers (ERO) model from Ω(n^{4/3} log^{3/2} n) to Ω(n log n) and deriving per-item maximum-displacement error bounds. The deep read's verdict is ADAPT — the spectral algorithms (Algorithms 1–2) are directly implementable as robust score-based team rankers for college/NFL strength tables; the theory's ERO assumptions do not describe real sports data.

## Key metrics/methods (formulas where given, else "not specified")
- ERO model: H_{ij} = r_i − r_j with prob. ηp; Z_{ij} ∼ U[−M,M] with prob. (1−η)p; 0 with prob. 1−p; H_{ij} = −H_{ji}.
- H = H̄ + Δ; H̄ = ηp(r1_n^T − 1_n r^T) (rank-2 signal); population SVD: H̄ = σ̄(ū_1 ū_2^T − ū_2 ū_1^T), σ̄ = ηp√n·‖r−α1_n‖, ū_1 = −1_n/√n, ū_2 = (r−α1_n)/‖r−α1_n‖, α = r^T 1_n/n.
- Algorithm 1 (unnormalized): top eigenvector φ_1 of iH (Hermitian); phase-resolve via θ̂ (Re⟨e^{iθ}φ_1,1_n⟩=0, Im⟨…⟩≥0); rank by Re(e^{iθ̂}φ_1).
- Algorithm 2 (normalized): D = diag(|H|1_n); top eigenvector of iD^{−1}H; phase-resolve; rank by Dx.
- SNR := √(η²pn/log n)·‖r−α1_n‖/(√n·M) ≳ 1; Theorem 3.2: R(x,x̄) ≲ SNR^{−1} (relative ℓ∞ error); Theorem 3.4 (normalized): ≲ λ^{−8}SNR^{−1}.
- Displacement metric: ρ_i = (1/(n−1))·(# order violations involving item i); ρ∞ = max_i ρ_i, ρ̄ = mean_i ρ_i; Corollary 3.5: for r_k=k, ρ∞(id,π̂) ≲ SNR^{−1}.
- Proof technique: surrogate one-step power approximation + leave-one-out auxiliary matrices H^{(k)} + matrix Bernstein concentration.

## Data sources named
No real data. All synthetic: score vectors r as uniform r_k = k or sorted Gamma(1,1) samples; n ∈ [200,1000]; SNR swept 0.26–1.7; 25 random ERO instances per configuration.

## Findings (numbers and facts, not vibes)
- Sample complexity reduced from Ω(n^{4/3} log^{3/2} n) to Ω(n log n) pairwise measurements for ℓ∞ error O(n^{−1/2}) under r_k=k.
- Figure 2: SNR=0.5 → relative error ≈ 0.8; SNR=0.8 → ≈ 0.5; SNR=1.7 → ≈ 0.2 — error decays at rate SNR^{−1}.
- Figure 3 (maximum displacement, uniform r): SNR=0.5 → ≈ 0.4; SNR=0.8 → ≈ 0.3; SNR=1.7 → ≈ 0.15.
- Algorithm 1 vs 2 (Gamma r, n=1000): main difference when p < 0.2 (disconnected measurement graph), mitigated by degree normalization; maximum displacement similar for both.
- ρ∞ much larger for skewed (Gamma) r at same SNR; ρ̄ much smaller than ρ∞ — max displacement explodes when true scores are close (inverse minimum-separation dependence), exactly the regime that matters in sports.
- Circular validation: all "experiments" are the paper's own assumed ERO model — zero external validity; no comparison to MLE/BTL, least squares, or Elo; the λ^{−8} bound factor (~65,536 when λ≈1/4) is nearly vacuous; n=32 NFL makes the asymptotic theory nil.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: spectral ranker on score differentials (MOV-capped) as a power-rating input for college (n≈134, sparse cross-conference graph — the paper's exact regime) and NFL strength tables.
- TRUST-SIGNAL: per-team order-violation diagnostic ρ_i as a stability metric for published power ratings — flags teams whose ranking is fragile rather than real.
- SCHEME: improvement experiment — weight H by game recency/leverage (H_{ij} = w_t·clip(margin, 28)) since the paper's exchangeable-observation assumption doesn't match sports reality.

## Engine-actionable? (yes/no + one-line what)
yes — implement the spectral ranker (Algorithm 1 + degree-normalized Algorithm 2) on MOV-capped score differentials for CFB/NFL and adopt the ρ_i displacement diagnostic for rating stability; ~2 days, acceptance gate: beat least-squares ranking on Kendall's τ vs end-of-season SRS in ≥6 of 10 CFB seasons.

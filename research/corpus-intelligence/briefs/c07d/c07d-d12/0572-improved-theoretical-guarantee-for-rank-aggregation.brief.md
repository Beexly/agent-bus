# arxiv-program/research/2026-09-21/arxiv-deep/0572-improved-theoretical-guarantee-for-rank-aggregation.md
## What it is (1-2 sentences)
A theoretical paper (arXiv:2309.03808v2, Zhong & Ling 2023) sharpening the entry-wise (ℓ∞) eigenvector perturbation bound for spectral rank aggregation under the Erdös–Rényi Outliers (ERO) model — cutting the sample complexity for accurate ranking from Ω(n^{4/3} log^{3/2} n) to Ω(n log n) pairwise measurements via a leave-one-out proof technique, with per-item maximum-displacement error bounds. The deliverable is Algorithms 1 (unnormalized: top eigenvector of iH) and 2 (degree-normalized: top eigenvector of iD^{−1}H) plus the SNR regime in which they recover true scores.

## Key metrics/methods (formulas where given, else "not specified")
Verbatim equations:
- ERO model (2.1): for i<j, H_{ij} = r_i − r_j with prob. ηp; Z_{ij} ~ i.i.d. U[−M,M] with prob. (1−η)p; 0 with prob. 1−p; H_{ij} = −H_{ji}. Unified: H_{ij} = X_{ij}(Y_{ij}(r_i − r_j) + (1−Y_{ij})Z_{ij}), X~Bernoulli(p), Y~Bernoulli(η).
- Data decomposition (2.2–2.4): H = H̄ + Δ, H̄ = E[H] = ηp(r1_n^T − 1_n r^T) (rank-2 signal); Δ = noise.
- Population SVD (2.5): H̄ = σ̄(ū_1 ū_2^T − ū_2 ū_1^T), σ̄ = ηp√n·‖r − α1_n‖, ū_1 = −1_n/√n, ū_2 = (r − α1_n)/‖r − α1_n‖, α = r^T 1_n / n. Top eigenpair of iH̄: φ̄_1 = (ū_2 + iū_1)/√2 with eigenvalue σ̄.
- Algorithm 1: top eigenvector φ_1 of iH (H anti-symmetric ⇒ iH Hermitian, real eigenvalues); phase-resolve via rotation θ̂ in (2.6): choose θ so Re⟨e^{iθ}φ_1, 1_n⟩ = 0 and Im⟨e^{iθ}φ_1, 1_n⟩ ≥ 0; rank by entries of x = Re(e^{iθ̂}φ_1).
- Algorithm 2: D = diag(|H|1_n); top eigenvector ψ_1 of iD^{−1}H; phase-resolve via (2.10); rank by entries of Dx, x = Re(e^{iθ̂}ψ_1).
- SNR: SNR(η,p,n,r,M) := √(η²pn/log n) · ‖r − α1_n‖/(√n·M) ≳ 1 (Assumption 3.1).
- Theorem 3.2 (Alg 1): min_{|β|=1} ‖φ_1 − βφ̄_1‖_∞ ≲ SNR^{−1}‖φ̄_1‖_∞; R(x, x̄) ≲ SNR^{−1}, where R(x,y) := min_{s∈{±1}} ‖x/‖x‖ − s·y/‖y‖‖_∞ / (‖y‖_∞/‖y‖).
- λ (3.5): λ(η,p,n,r,M) := (1/pnM)·min_i D̄_{ii} = (1/n)(η·min_i‖r_i 1_n − r‖_1/M + (1−η)(n−1)/2); Assumption 3.3: SNR ≳ λ^{−3}.
- Theorem 3.4 (Alg 2): min_{|β|=1} ‖ψ_1 − βψ̄_1‖_∞ ≲ λ^{−3} SNR^{−1}‖ψ̄_1‖_∞; R(Dx, D̄x̄) ≲ λ^{−8} SNR^{−1}.
- Corollaries 3.5–3.6 (maximum displacement): ρ∞(π, π̂) ≲ (‖r−α1_n‖ / (n·min_{i≠j}|r_i − r_j|))·SNR^{−1}·(‖x̄‖_∞/‖x̄‖) (Alg 1); for r_k=k simplifies to ρ∞(id, π̂) ≲ SNR^{−1} (Alg 2: ≲ λ^{−8}SNR^{−1}).
- Displacement metric (3.9–3.11): ρ_i(π_1,π_2) = (1/(n−1))·(# order violations involving item i); ρ∞ = max_i ρ_i; ρ̄ = mean_i ρ_i.
- Proof technique: surrogate one-step power approximation φ̃_1 = iHφ̄/σ plus leave-one-out auxiliary matrices H^{(k)} (zeroing row/column k of noise Δ), then matrix Bernstein concentration. Assumptions: scores bounded r_i ∈ [−M,M]; true scores distinct; ERO generative model with independent Bernoulli sampling and uniform outliers.

## Data sources named
None — synthetic only. Score vectors r generated as (a) uniform r_k = k (k=1..n), (b) sorted Gamma(a=1,b=1) samples; pairwise measurement matrices H sampled from ERO(η,p,n); n ∈ [200, 1000]; 25 random instances per (η,p,n) configuration; SNR swept 0.26–1.7. Benchmarked against ℓ2/ℓ∞ bounds of d'Aspremont et al. [15] (SVD-RS / SVD-NRS). No real dataset, no code repository.

## Findings (numbers and facts, not vibes)
- Core claim: sample complexity reduced from Ω(n^{4/3} log^{3/2} n) to Ω(n log n) pairwise measurements for ℓ∞ error O(n^{−1/2}) under r_k=k.
- Figure 2 (relative ℓ∞ error vs SNR): "if the SNR is greater than 0.5, the relative error is roughly below 0.3; moreover, as the SNR increases, the relative error decreases." On the curves: SNR=0.5 → relative error ≈ 0.8; SNR=0.8 → ≈ 0.5; SNR=1.7 → ≈ 0.2 — "This confirms the relative error decays at the rate of SNR^{−1}."
- Figure 3 (maximum displacement, uniform r): SNR=0.5 → ≈ 0.4; SNR=0.8 → ≈ 0.3; SNR=1.7 → ≈ 0.15.
- Algorithm 1 vs 2 (Figure 4, Gamma r, n=1000): "the main performance difference between two algorithms occurs when p < 0.2. In this case, the measurement graph is not highly connected... mitigated by normalizing the data matrix via the degree." Maximum displacement (Figure 5): "both algorithms perform similarly."
- Skewed-vs-uniform: "ρ∞(π, π̂) is much larger for the skewed distributed r" at the same SNR, and "ρ̄(π, π̂) is much smaller than ρ∞(π, π̂)" — maximum displacement is proportional to inverse minimum score separation, which is tiny for Gamma-distributed scores.
- CONTRADICTION of bound usefulness: the λ^{−8} factor in Theorem 3.4 / Corollary 3.6 makes the normalized-algorithm bound nearly vacuous for skewed degree distributions (λ≈1/4 ⇒ λ^{−8} ≈ 65,536) — the bound holds but is not informative. Maximum-displacement bound explodes when true scores are close — exactly the regime that matters in sports (many near-equal teams).
- UNCERTAIN (read's adversarial notes): no real data — numerics confirm the theory under the theory's own ERO assumptions (circular validation, zero external validity). ERO does not resemble sports: real upsets are skill-correlated not uniform noise; schedules are structured, not Erdös–Rényi; margins are heavy-tailed. No comparison against non-spectral baselines (MLE/BTL, least squares, Elo). NFL transfer: n=32, dense schedule — the Ω(n log n) regime is trivially satisfied, so the theory's asymptotic value is nil for NFL; the algorithmic value is a robust score-differential ranker with missing/outlier games (CFB regime: n≈134, sparse cross-conference graph).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing — team strength tables): Algorithm 1/2 is directly implementable as a closed-form robust score-based team ranker from a margin matrix H — no training, O(n³) eigendecomposition trivial at n=134. The per-item displacement diagnostic ρ_i (order violations involving team i) is a new stability metric for published power ratings: teams with high ρ_i are the ones whose rank position is fragile, which feeds bet-sizing confidence.
- OTHER (tracking lane): the connection to file 0582 (RPLIB rankability) is direct — both papers are in the rankability/ranking-lane; 0572 gives a ranker with guarantees, 0582 gives diagnostics for when ranking is meaningless. They compose: spectral ranking (0572) produces the ranking, rankability measures k/|P|/τ/β (0582) report whether the underlying dominance matrix supports one meaningful ranking.
- COACHING (indirect): the p < 0.2 connectivity result (normalized algorithm wins when the measurement graph is sparse) maps to CFB cross-conference comparison — the normalized variant should be used for college strength-of-schedule adjustments where comparison graphs are sparse.
- CONTRADICTION noted: the read asserts the ERO outlier model (uniform corruption) does not describe real sports upsets; any GSE use must treat the theory as motivation only and validate empirically against least-squares baselines (Colley/Massey) on real CFB/NFL data.

## Engine-actionable? (yes/no + one-line what)
Yes — build the spectral ranker (Algorithms 1–2) on CFB/NFL score-differential matrices with an MOV cap ≈ 28, and ADOPT as a GSE power-rating input if it beats least-squares baselines on Kendall's τ vs end-of-season SRS in ≥6 of 10 seasons with mean Δτ ≥ +0.02 and week-to-week displacement ≤ baseline.

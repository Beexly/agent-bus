# docs/arxiv-program/research/2026-09-21/arxiv-deep/0472-nonparametric-adaptive-control-and-prediction-theory.md

## What it is (1-2 sentences)
Boffi, Tu & Slotine (2021, arXiv:2106.03589): rigorous continuous-time nonlinear adaptive-control theory relaxing the linear-in-parameters assumption to nonparametric learning over an RKHS, with a tractable randomized implementation via random Fourier features and explicit finite-sample bounds. File verdict: **REJECT** — no applicable forecasting or calibration content for GSE.

## Key metrics/methods (formulas where given, else "not specified")
- Adaptive law: α̇(t) = −γΦ(x)ᵀg_e(x,t)ᵀ∇Q(e,t), with Lyapunov function Q on error e.
- Kernel trick (Observation 4.1): û(x,t) = ∫₀ᵗ K(x,x(τ))c(τ)dτ — a kernel integral operator over the trajectory history.
- Random Fourier feature map: Φ(x,θ) = B(w)cos(wᵀx+b); uniform approximation bound sup‖h(x)−Ψ(x;{θ_i})α_m‖₂ ≤ C(h,δ)(B_x√n+√d₁)/√K with probability ≥1−δ (polynomial, not exponential, in state dimension n).
- Convergence (Theorem 4.5): error x(t)→x_d(t) as t→∞. Deadzone laws (Theorems 6.4/6.7): limsup‖e(t)‖₂ ≤ μ₁⁻¹(Δ); prediction limsup‖x̂(t)−x(t)‖₂ ≤ √(Δ/μ). Discrete-sampling extension: E(x̂_{i+1},x_{i+1}) ≤ β e^{λ̄_iΔt_i} E(x̂_i,x_i).
- Deep-net extension (7.4): α̂̇ = −γ(∇_α̂φ(x,t,α̂))ᵀg_e(x,t)ᵀ∇Q(e,t) — empirically expressive but closed-loop stability guarantees lost.

## Data sources named
- No real dataset. Synthetic only: (i) 5-D stable LTI system with h(x)=sin(x)·erf(x); (ii) 60-dimensional Hamiltonian 10-body Newtonian gravitation (K=2500 random features); (iii) unstable 5-D variant with x_d(t)=sin(2πt+cos(√2πt)), h_i(x)=¼x_i⁴, single-hidden-layer nets width 32/64 swish (γ=20 random-feature law, γ=10 NN law). Euler integration Δt=0.001.

## Findings (numbers and facts, not vibes)
- Control: kernel input beats every finite-K approximation transiently and asymptotically by "several orders of magnitude" in tracking error; error at fixed t decreases monotonically in K; kernel uses the lowest input magnitude ‖u‖₂.
- Prediction (60-D, K=2500): asymptotic prediction error ∼ K^{−ξ}, ξ ≈ 1.28±0.03; interpolation error ∼ K^{−ζ}, ζ ≈ 0.77±0.03 (95% CIs) — empirically faster than the theory's O(1/√K) Monte-Carlo tail (theory predicts ξ=1/2, ζ=1/4).
- Deep-net experiment: without adaptation the system goes unstable; NN obtains slightly improved tracking over random features at both widths — but the NN law is brittle: provably stable at any learning rate for random features, empirically unstable for many learning-rate choices for NNs; NN input norm exceeds random-feature input norm by 1–2 orders of magnitude during transients. Authors' own conclusion: for closed-loop systems where stability is necessary, kernel methods are the more desirable choice.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no GSE transfer — GSE is discrete-event probabilistic forecasting with no continuous-time error dynamics, no control input, no Lyapunov function; the only conceptual bridge (online kernel learning) duplicates what isotonic regression/PAV already covers for calibration at far lower complexity.

## Engine-actionable? (yes/no + one-line what)
No — continuous-time control machinery has no mapping onto GSE's batch finite-sample proper-scoring calibration problem; rejected unless a genuine continuous-time controlled subsystem ever appears in the pipeline.

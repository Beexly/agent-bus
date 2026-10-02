# arxiv-program/research/2026-09-21/arxiv-deep/0475-prediction-theory-for-stationary-functional-time.md
## What it is (1-2 sentences)
N. H. Bingham (2021, arXiv:2011.09937v2) survey of classical linear prediction theory (Cramér representation, Kolmogorov Isomorphism, Verblunsky coefficients, Szegő's theorem, Wold decomposition, Beurling–Lax–Halmos) extended to infinite-dimensional Hilbert-space-valued (functional) time series. Program verdict: REJECT — pure math survey with no data, no experiments, no code, and the stationarity + function-valued-data assumptions do not fit any GSE forecasting problem.
## Key metrics/methods (formulas where given, else "not specified")
- Spectral theorem for unitary shift: Uⁿ = ∫_𝕋 e^{inθ} dE(θ); Cramér representation x_n = ∫ e^{inθ} dY(θ), Y orthogonally scattered
- Kolmogorov–Szegő formula: ∏₀^∞ det(1−α_k α_k†) = exp ∫ tr log f dθ/2π; prediction error variance σ² = exp{∫ log f(θ) dθ/2π} = ∏₁^∞ (1−|α_n|²); Szegő's condition (Sz): log f ∈ L₁(𝕋); α ∈ ℓ₂(ℕ) ⟺ Szegő holds (Baxter's theorem = ℓ₁ case)
- Szegő function h(z) = exp(½ ∫ (e^{iθ}+z)/(e^{iθ}−z) log f(θ) dθ/2π), outer in H², |h|² → f a.e.
- Wold decomposition x = x_d + x_p (Gramian-orthogonal); Gramian operator [x,y]_X = E[x⊗ȳ]; stationarity ⇔ operator covariance Γ̃(m−n)
- Implementation recipe (§6): discretize each curve to a d-vector (choice of d per Li & Hsing) → multivariate Levinson–Durbin (Delsarte & Genin split variant) → smooth back to curve (splines with roughness penalty); FPCA/Karhunen–Loève route (Aue, Norinho & Hörmann 2015, effectively Gaussian); kernel methods (Hashimoto et al.)
## Data sources named
None — no data, no simulations; cites application literature (Ramsay & Silverman FDA; Aue et al. 2015) without reproducing numbers.
## Findings (numbers and facts, not vibes)
- Zero numerical results, zero experiments — survey only. Falsification-style notes from the file's own adversarial analysis: (a) stationarity is load-bearing and false for NFL data (roster turnover, coaching changes, rule changes, season structure); (b) 17-game seasons give n=17 observations per team — far too few for functional methods; (c) the §6 recipe reduces to standard finite-dimensional Levinson–Durbin, adding nothing operational; (d) forcing a "season scoring trajectory as a curve" fit violates the theory's own stationarity precondition.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — no data-generating process overlaps any lane. OTHER (negative value, worth cataloging): explicitly rules out the "functional time series on team trajectories" direction — any engine attempt to model season trajectories as functional data is a dead end under this theory's assumptions, which is a finding for the do-not-try register.
## Engine-actionable? (yes/no + one-line what)
No — rejected pure-math survey; the only conceivable application (weekly team efficiency trajectories as functional data) is falsified in-file by the stationarity failure and n=17 sample-size problem.

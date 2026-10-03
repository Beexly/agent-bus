# arxiv-program/research/2026-09-21/arxiv-deep/1907-meta-learning-priors-efficient-online-bayesian-regression.md
## What it is (1-2 sentences)
Deep read of Harrison, Sharma & Pavone (2018), arXiv:1807.08912v2 — ALPaCA: meta-learn a neural basis φ(x;w) plus a matrix-normal prior over last-layer weights offline, then do analytic Bayesian linear regression online via recursive least squares (Woodbury), replacing gradient-step adaptation. Ledger verdict: ADAPT — after each game the engine posterior over team-strength latents updates in closed form, O(n_φ²), with no refit.
## Key metrics/methods (formulas where given, else "not specified")
- Model: ŷ_t = Kᵀφ(x_t;w) + ε, ε∼N(0,Σ_ε); prior p(K)=MN(K̄₀, Λ₀⁻¹, Σ_ε).
- Online updates (Woodbury): Λ_t⁻¹ = Λ_{t−1}⁻¹ − (1+φ_tᵀΛ_{t−1}⁻¹φ_t)⁻¹(Λ_{t−1}⁻¹φ_t)(Λ_{t−1}⁻¹φ_t)ᵀ; Q_t = φ_t y_tᵀ + Q_{t−1}; K̄_t = Λ_t⁻¹Q_t; predictive variance Σ_{t+1} = (1+φ_{t+1}ᵀΛ_t⁻¹φ_{t+1})Σ_ε. O(n_φ²) per update vs O(n³) kernel GP.
- Offline meta-loss: minimize expected KL ≡ expected NLL of analytic posterior over random horizons (Eqs. 10–12).
## Data sources named
Sinusoid family (MAML testbed), discrete-switching step function, Pendulum transition model (OpenAI Gym), Hopper 12D transition model, human lane-change driving (19 participant pairs, 1105 episodes @10Hz); code: github.com/StanfordASL/ALPaCA.
## Findings (numbers and facts, not vibes)
- Sinusoid: one sample gives "a good estimate of the sinusoid nearly everywhere"; within five samples estimated variance drops to nearly zero; ALPaCA beats MAML on MSE at all context sizes; MAML "performs poorly with a single sample."
- Hopper 12D handled with 32 basis functions; "performance did not noticeably change with a larger number of basis functions"; kernel GPR "prohibitively slow" (Fig. 11 timing).
- Lane-change (real human data): improvement near-linear, not early-rapid — attributed to bimodal transition data; in many cases MAML "fails to adapt, and furthermore, gives no indication of its uncertainty."
- No exact scalar NLL/MSE tables — claims are curve-based.
- Gaussian noise with known Σ_ε assumed; t-distribution relaxation analytically available but numerically unstable to backprop.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form per-game team-strength posterior update with calibrated shrinking predictive variance through the season — TRUST-SIGNAL (calibration) / OTHER (engine architecture).
- Exponential forgetting extension (Appendix A.3) for regime drift on new-coach/rookie-QB teams — COACHING / QB-BEHAVIOR.
- Lane-change near-linear gains on bimodal human behavior — caveat for applying few-shot adaptation to QB decision-making, which is similarly bimodal — QB-BEHAVIOR.
## Engine-actionable? (yes/no + one-line what)
Yes — build ALPaCA lane: offline meta-train bases on pre-2023 seasons, online recursive team-strength posterior updates after each game, predictive mean/variance feeding picks and Kelly sizing; ADOPT gate: week-1-to-8 NLL on margin beats MAML-style adaptation and static prior by ≥0.05 nats/game averaged over 2023–2024.

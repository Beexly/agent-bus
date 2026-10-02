# docs/arxiv-program/research/2026-09-21/arxiv-deep/0226-a-statespace-perspective-on-modelling-and.md

## What it is (1-2 sentences)
Deep-read notes on arXiv:2308.02414v3 (Duffield, Power, Rimella, 2023), "A State-Space Perspective on Modelling and Inference for Online Skill Rating": unifies Elo, Glicko, TrueSkill, SMC, and finite-state HMMs as approximate-inference schemes inside one factorial state-space model for time-varying skill, with filtering/smoothing/EM tooling demonstrated on WTA tennis, EPL football, and chess. Verdict: ADAPT — import the match-sparsity reduction, discrete fHMM eigenmachinery, bivariate Poisson attack/defence SSM, and EM parameter-estimation workflow into GSE's team-rating pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Factorial SSM: P(x_{0:K}^{[N]}, y_{1:K}) = ∏_i { m_0^i(x_0^i) ∏_k M_{k−1,k}^i } · ∏_k G_k(y_k | x_k^{h(k)}, x_k^{a(k)}). Match sparsity rewrites likelihood from O(N·K) to O(N+K) terms; decoupling approximation Filter_k ≈ ∏_i Filter_k^i.
- Filtering: Predict_{k+1|k} = Propagate(Filter_k, M_{k,k+1}); Filter_{k+1} = Assimilate(Predict_{k+1|k}, G_{k+1}).
- Smoothing (backward): Smooth_{k|K}(x_k) = ∫ Filter_k(x_k)·M_{k,k+1}(x_k,x_{k+1})·Smooth_{k+1|K}(x_{k+1})/Predict_{k+1|k}(x_{k+1}) dx_{k+1}.
- Elo binary update: (x_k^h, x_k^a) = (x_{k−1}^h + γ·(𝕀[y_k=h] − sigmoid((x_{k−1}^h−x_{k−1}^a)/s)), ...); FIDE convention s = 400/log(10), γ ∈ {10,20,40}.
- Elo-Davidson: x_k^h = x_{k−1}^h + K·(𝕀[y_k=h] + ½𝕀[y_k=draw] − g((x_{k−1}^h−x_{k−1}^a)/s; κ)), g(z;κ) = (10^z + κ/2)/(10^{−z} + 10^z + κ).
- Extended Kalman SSM: m_0 = 𝒩(μ_0, σ_0²); M_{t,t'} = 𝒩(x_{t'} | x_t, τ²·(t'−t)); ternary emission with draw band ε; θ = (σ_0, τ, ε); τ=0 recovers static Bradley-Terry.
- Discrete fHMM: M_{t,t'} = exp(τ_d·(t'−t)·Q_S); analytic eigendecomposition Q_S = Ψ_S^T·Λ_S·Ψ_S gives O(S²) filtering/smoothing after one-off O(S³) decomposition.
- Bivariate Poisson (Karlis & Ntzoufras 2003) attack/defence likelihood: G_k(y_k | x^h, x^a) = e^{−(λ_1+λ_2+λ_3)}(λ_1^{y_k^h}/y_k^h!)(λ_2^{y_k^a}/y_k^a!) Σ_{k=0}^{min} C(y_k^h,k)C(y_k^a,k)k!(λ_3/(λ_1λ_2))^k, λ_1 = exp(α^h + x^{att,h} − x^{def,a}), λ_2 = exp(α^a + x^{att,a} − x^{def,h}), λ_3 = exp(β).
- Plackett-Luce multiplayer likelihood; Ornstein-Uhlenbeck mean-reverting dynamics M_{t,t'} = 𝒩(x_{t'} | x_t·e^{−τ(t'−t)} + μ_0(1−e^{−τ(t'−t)}), σ_0²(1−e^{−2τ(t'−t)})); EM M-step closed forms for σ̂_0², τ̂²; Gauss-Hermite M-step for ε.
- Metric: average negative log-likelihood of match outcomes on held-out year; static parameters by grid search (Elo, Glicko) or EM (model-based) on training window; protocol: 3 years train → 1 year test.
- SMC with J=1000 particles; fHMM S=500 states (S=40 for bivariate Poisson discrete); s_d = S/5.

## Data sources named
- WTA tennis 2019–2022 (tennis-data.co.uk, 0% draws); EPL football results/goals/timestamps (football-data.co.uk, 22% draws); international football results (github.com/martj42/international_results); classical chess (github.com/huffyhenry/forecasting-candidates, 65% draws).
- Code: github.com/SamDuffield/abile (+ datasets downloaders); Gauss-Hermite utility "ghq" in JAX (Duffield 2024).
- Exact row counts not stated in paper.

## Findings (numbers and facts, not vibes)
- Tennis (WTA) avg NLL train/test: Elo-Davidson 0.640/0.636; Glicko 0.640/0.636; Extended Kalman 0.640/0.635; TrueSkill2 0.650/0.668; SMC 0.640/0.639; Discrete 0.639/0.636.
- Football (EPL) avg NLL train/test: Elo-Davidson 1.000/0.973; Extended Kalman 0.988/0.965; TrueSkill2 1.006/0.961; SMC 0.988/0.962; Discrete 0.987/0.961. Bivariate Poisson variants: EK 0.975/0.954; SMC 0.978/0.950; Discrete 0.984/0.954.
- Chess avg NLL train/test: Elo-Davidson 0.802/1.001; Extended Kalman 0.801/0.972; TrueSkill2 0.802/0.978; SMC 0.801/0.974; Discrete 0.801/0.976.
- Paper claims: models similar on binary tennis except TrueSkill2 (attributed to EM optimisation bias); model-based approaches with uncertainty quantification "significantly outperform" Elo/Glicko on football and chess; bivariate Poisson beats the win/draw/win-only SSM on match-winner prediction despite not being optimised for it.
- EM on tennis 2-D landscape (Fig. 3): TrueSkill2's Gaussian approximation "evades the global optimum"; SMC and discrete identify it ("no systematic bias beyond the factorial approximation").
- Smoothing finding (Fig. 4): Tottenham's 2011–2023 skill ascended under Villas-Boas/early Pochettino and descended late Pochettino; the 2022 decline was driven by defence weakening while attack stayed proficient.
- Chess draw rate 65% makes cross-sport NLL magnitudes meaningless; no standard errors/significance tests on NLL differences; no human/coach ground-truth validation of smoothing narratives.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: retrospective smoothing decomposes rating changes into attack vs defence drivers (Tottenham 2022: defence weakened, attack stayed proficient) — a template for quantifying coordinator/coaching changes; no causal identification, descriptive only.
- TRUST-SIGNAL: the factorial (decoupling) approximation is applied everywhere and never quantified — correlated skills assumed away; Glicko excluded from football/chess NLL (no normalised predictions); no significance tests on the "significant outperformance" claim.
- OTHER: match-sparsity design pattern (per-match assimilation cost independent of N and K) is new-to-GSE as a concrete pattern for GSE's time-varying models.
- OTHER: discrete fHMM eigenmachinery (O(S²) updates) is not in GSE's corpus; EM closed-form M-steps replace empirical hand-tuning of rating hyperparameters.
- SCHEME: bivariate Poisson attack/defence decomposition (EPL test NLL 0.950–0.954 vs 0.973 Elo-Davidson) beats winner-only models — but NFL scoring needs a different emission (correlated Gaussian margin), which the paper does not derive.
- OTHER: paper derives but never fits OU mean-reverting dynamics — NFL off-season churn (a single Brownian τ can't capture within-season stability + off-season churn) is the natural extension.

## Engine-actionable? (yes/no + one-line what)
Yes — build an "abile-for-NFL" module: bivariate attack/defence SSM with Brownian dynamics and an NFL-specific correlated-Gaussian margin-of-victory emission (plus OU dynamics for off-season diffusion), run EK + discrete-fHMM engines in parallel, calibrate by EM on rolling 3-train/1-test nflverse windows, adopt only if mean test NLL improves ≥0.01 over Elo-Davidson across all three windows.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/2172-neural-symbolic-regression-complex-network-dynamics.md
## What it is (1-2 sentences)
PI-NDSR discovers symbolic equations for complex network dynamics by splitting them into node dynamics F and edge dynamics G: a physics-aligned graph neural ODE (PIND) denoises/interpolates noisy multi-trajectory observations into neural references F̂/Ĝ, then a coordinated two-population genetic search evolves F and G — freezing whichever population is closer to its reference — to prevent overfit/underfit imbalance. Verdict in file: ADAPT — the NFL is a 32-node network, making this the blueprint for discovering symbolic team-dynamics (F) and matchup-interaction (G) equations.

## Key metrics/methods (formulas where given, else "not specified")
- Network dynamics: ẋ_v(t) = F(x_v(t)) + Σ_{u∈N_v} a_vu G(x_v(t), x_u(t)) (Eq. 1).
- PIND: ẋ°_v = Dec(ḣ_v), ḣ_v = φⁿ(h_v,t) + Σ φᵉ(h_v,h_u,t) (Eq. 2) — MLPs φⁿ, φᵉ align with F, G; decoded and integrated via ODESolver: f_θ(G,X(t₀),t)_v = ODESolver(ẋ°_v, X(t₀), t₀, t) (Eq. 3).
- References: F̂(x_v) = Dec(φⁿ(Enc(x_v),t)), Ĝ = Dec(φᵉ(Enc(X),t)) (Eq. 4).
- Coordination (Algorithm 1): d(ℱ) = Σ‖F−F̂‖², d(𝒢) = Σ‖G−Ĝ‖² (Eq. 5); each iteration evolves the population farther from its neural reference; the closer population is frozen. Fitness = error between ∫(F + ΣG)dt and the interpolated trajectory, BigK-averaged over partner population (Eqs. 6–7).
- H1N1 discovered equation (Eq. 8): ẋ_v = a·x_v + Σ_{u∈N_v} [b/(1+exp(−(m·x_v+c)))]·x_u, with a=0.0740, b=0.0015, m=−0.0041, c=9.9643.
- Assumptions: edge dynamics G shared across edges (universality); binary edge weights in synthetic tests; no derivative estimation, no fixed function library.

## Data sources named
- Synthetic: 4 dynamics × 2 graph types (Erdős–Rényi, Barabási–Albert, 200 nodes) — SIS epidemics (F=−δx_i, G=(1−x_i)x_j), Lotka–Volterra (F=x_i(α−θx_i), G=−x_i x_j), Wilson–Cowan (F=−x_i, G=(1+exp(−τ(x_j−μ)))⁻¹), Kuramoto (F=ω, G=sin(x_i−x_j)) (Table 2). Implemented in PyTorch + PyTorch Geometric + gplearn (RTX 4090).
- Real: influenza A (H1N1) spread — nodes = countries/regions, states = daily new cases, edges = global aviation routes (Gao & Yan 2022 preprocessing).
- No public repo URL in the text — reimplementation needed.

## Findings (numbers and facts, not vibes)
- Recovery probability: PI-NDSR = 1.00 in all 8 settings (Table 3). TP-SINDy: 0.15–1.0, fails Wilson–Cowan entirely (0.0 — parametric edge dynamics outside any fixed library); SINDy: 0–0.87; SymDL: 0.15–0.87. [OTHER]
- MSE (×10⁻², correct skeletons only): PI-NDSR lowest everywhere, e.g. BA-SIS 0.312 vs TP 0.434 vs SINDy 0.484 vs SymDL 0.979; BA-LV 0.136 vs 0.875/1.170/2.075. [OTHER]
- H1N1: PI-NDSR's equation is physically sensible (zero growth at zero cases; sigmoid-modulated neighbor influence capturing travel-aversion); TP-SINDy's predicts non-zero spread with zero cases. MSE 0.8261 vs 0.9028. [OTHER]
- Robustness: 100% recovery from SNR 70 dB down to 25 dB (TP-SINDy → 0% at 30 dB); 100% recovery at all sampling intervals Δt (TP-SINDy fails at large intervals). [OTHER]
- Ablations (Table 4): removing interpolation drops recovery 1.0 → 0.81/0.86; removing coordination drops it to 0.31/0.47 — coordination is the bigger contributor. [OTHER]
- Limitations: no public code; PIND training is the heavy lift with no reference-quality gate; fitness requires numerical integration of every candidate (F,G) pair each generation; synthetic graphs are static with binary weights (NFL edges are weighted, time-varying, rewiring weekly); H1N1 win partly reflects a skeleton the GP library happens to contain. [SCHEME]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- F = intrinsic team dynamics (form/momentum decay, rest recovery, injury drag — how a team's latent strength evolves by itself) discovered separately from G = matchup interaction dynamics (how opponent strength modulates your effective output — the symbolic form of "styles make fights"): SCHEME.
- The coordinated-search ablation (coordination removal → recovery 0.31/0.47) is the design rule for GSE: naive joint SR would let interaction terms overfit while intrinsic dynamics underfit — the coordination rule is the fix: SCHEME.
- Proposed "equations of NFL team dynamics" (e.g. ṡ = −λs + ρ·rest for F; interaction = α·(opp_strength − s)·home for G) as publishable transparent artifacts: TRUST-SIGNAL.
- Edge features extension (rest differential, travel distance, weather) in φᵉ for time-varying NFL edges; transfer test (freeze F/G from 2015–2023, evaluate 2024–2025 — <5% MAE degradation = genuinely universal laws): SCHEME.
- Acceptance gate: synthetic-league skeleton recovery ≥8/10 seeds (vs ≤5/10 joint) AND real 2025 F+G model within 0.3 points spread MAE of the engine: OTHER.
- No direct QB-behavior, coaching-change, or OL findings in the paper; the QB/coaching angles enter only via GSE's proposed edge features and regime framing.

## Engine-actionable? (yes/no + one-line what)
yes — Build the 32-node league network (node state = weekly latent team strength), denoise with a PIND-style graph neural ODE, and run coordinated two-population GP to discover separate symbolic intrinsic (F) and matchup-interaction (G) equations, gated on synthetic-league recovery ≥8/10 seeds.

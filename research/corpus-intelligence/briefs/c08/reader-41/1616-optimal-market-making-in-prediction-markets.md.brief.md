# docs/arxiv-program/research/2026-09-21/arxiv-deep/1616-optimal-market-making-in-prediction-markets.md
## What it is (1-2 sentences)
Deep read of Feil & Nendel (2026), "Optimal Market Making in Prediction Markets" (arXiv:2607.17991): the first stochastic-control treatment of quoting in binary prediction markets, with a logit-belief price diffusion, inventory skew rules, and a settlement-risk penalty. Verdict in file: ADAPT — ports to GSE's live pricing/exposure engine as principles + parameterizations, not a literal HJB solver.
## Key metrics/methods (formulas where given, else "not specified")
- Price = conditional probability p_t = f(L_t), logistic f; latent belief dL_t = μdt + σdW_t with μ = −a·g, a = σ²/2 (martingale cancellation).
- Price SDE: dp_t = p_t(1−p_t)·σ̃(t,p_t)dW_t, σ̃(t,p) = σ(t, ln(p/(1−p))).
- Volatility spec: σ(t,x) = σ_0 + σ_1(t/T)^η + σ_2/(1+x²) — baseline + time-acceleration near settlement + uncertainty peak at p=1/2.
- Objective: E[X_T + q_T·Y + Φ(p_T,q_T) − γ∫q_s²ς(s,p_s)²ds]; terminal penalty Φ(p,q) = −γ_T q²p(1−p).
- Optimal quotes: π^{b,*}(z) = (u^b)^{−1}(z), u^b(π) = G^b(p,π) − Λ^b/∂_πΛ^b; π^{a,*} analog with +; Skew = (π^a+π^b)/2 − p.
- Solver: implicit-Euler finite-difference backward HJB on (t,p,q) grid + fixed-point contraction κ = 4Λ̄/β.
- Monte Carlo (10,000 paths, p_0=1/2): Optimal vs myopic baseline — mean PnL 12.39 vs 12.47; std(PnL) 10.34 vs 28.11 (−63%); mean |q_T| 15.23 vs 49.37 (−69%); VaR_5% 4.20 vs 32.41 (−87%); ES_5% 9.68 vs 40.50. ~99.4% of profit kept.
## Data sources named
No empirical data — theory + simulation on 10,000 self-generated paths; intensity parameters are modeling choices (paper states prediction-market order intensities "not yet studied systematically"). Parameters used: σ_0=0.6, σ_1=0.3, σ_2=0.1, η=3; γ=4·10⁻³, γ_T=10⁻³; Q=100, Δ=10.
## Findings (numbers and facts, not vibes)
- Spread decreases over time as k(t) rises, but widens near settlement for p≈1/2 where settlement risk peaks; spreads larger near p=1/2 at any fixed t.
- Skew at zero inventory: positive for p<1/2, negative for p>1/2 (asymmetric intensities); inventory shifts skew expectedly (long→negative, short→positive); curves converge near p→0/1 since p(1−p)→0.
- γ (running) matters most early; γ_T (terminal) most near settlement.
- No adverse selection modeled (takers are Poisson noise) — paper's own biggest gap; in-model evaluation only.
- File's GSE spec: (1) adopt σ(t,x) spec for in-game win-probability diffusion (fit σ_0,σ_1,σ_2 per sport on play-by-play paths); (2) exposure skew rule shifting published confidence against exposure side ∝ q·p(1−p); (3) settlement penalty −γ_T q²p(1−p) in pick-optimizer to penalize correlated near-50/50 legs; (4) fixed-point iteration solver only if GSE runs a quoting book.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: win-probability diffusion parameterization (σ accelerating toward whistle, peaking at 50/50) for live engine.
- OTHER: exposure/skew risk machinery for pick-slate construction (correlated-leg penalty).
- TRUST-SIGNAL: honest calibration-state framing — risk reduction quantified in-model, flagged as upper bound on real data.
## Engine-actionable? (yes/no + one-line what)
yes — Fit the σ(t,x)=σ_0+σ_1(t/T)^η+σ_2/(1+x²) volatility spec to GSE's win-probability paths and add the −γ_T q²p(1−p) exposure penalty to pick-slate optimization (~1 week, cheap).

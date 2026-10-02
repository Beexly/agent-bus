# docs/arxiv-program/research/2026-09-21/arxiv-deep/0567-modelling-between-and-withinseason-trajectories-in.md

## What it is (1-2 sentences)
A full-text read of arXiv:2405.17214 (Spyropoulou, Hopker, Griffin 2024) building a continuous-time Bayesian hierarchical model that separates an athlete's between-season career trajectory from their within-season peaking cycle, using a constrained Bernstein-polynomial within-season component, a B-spline population age curve, global-local shrinkage for sparse athletes, and skew-t errors with asymmetric tails. Applied to elite 100m/200m freestyle swimming; the file's verdict is ADAPT for decomposing GSE team-strength time series into career vs within-season form components.

## Key metrics/methods (formulas where given, else "not specified")
- Observation model (Eq. 1): y_{i,j,k} = g(t_{i,j,k}) + f_{i,j}(t_{i,j,k}−a_i−j+1) + x_{i,j,k}ζ + ε_{i,j,k}, with f_{i,j}(x) on within-season fraction x∈(0,1).
- Population ageing function (Eq. 2): g(t)=Σ_l δ_l B((t−d_l)/θ), cubic B-splines, L=31 equally spaced knots, length scale θ~Exp(1).
- Within-season constrained restricted Bernstein polynomial (Eq. 3): h*_{i,j}(z)=Σ_{k=2}^{K}Σ_{v=1}^{k−1} β^{(i,j)}_{k,v} b_{k,v}(z), b_{k,v}(z)=C(k,ν)z^ν(1−z)^{k−ν}, ν=1..k−1, K=6, with h*_{i,j}(0)=h*_{i,j}(1)=0 for identifiability; C=K(K−1)/2=15 coefficients.
- Between-season: linear interpolation between season-start levels f*_{i,j}(x)=f*_{i,j}(0)+x·η_{i,j}; season starts follow a random walk with t-distributed increments f*_{i,1}(0)/σ_μ² ~ t_{ν^μ}, η_{i,j}/σ_η² ~ t_{ν^η} (heavy tails allow abrupt career changes); ν^μ, ν^η ~ Ga(2,0.1).
- Hierarchy: β^{(i,j)}~N(β^{(i)}, ψ₁²λ_i I_C), β^{(i)}~N(β, ψ₂²τ_i I_C), β~N(0, ψ₃²I_C); global-local shrinkage via standardized Lomax(1/2) priors p(x)=α^{−1}(1+x)^{−(1+α)} (chosen because the horseshoe's half-Cauchy caused MCMC instability).
- Errors: generalized skew-t with separate tail dfs — ε=ε*+α/√(1+α²)z, ε*~N(0,ωσ_i²), z~TN_{[0,∞)}(0,φσ_i²), ω~IG(ν₁/2,ν₁/2), φ~IG(ν₂/2,ν₂/2); reduces to skew-t when ν₁=ν₂; left-tail heaviness = min(ν₁,ν₂), right-tail = ν₁; α~N(0,3²).
- Within-season variability summary: Δ_i = ψ₁²λ_i Σ_{n,v} B_{n,n,v,v}; average athlete-vs-population effect size Γ_i = ψ₂²τ_i Σ_{n,v} B_{n,n,v,v}, where B_{n1,n2,v1,v2}=C(n1,v1)C(n2,v2)(v1+v2)!(n1+n2−v1−v2)!/(n1+n2+1)! (App. A).
- Inference: Gibbs sampler with joint block updates, ASIS-style interweaving (Yu & Meng 2011), adaptive MH random walks (Atchadé & Rosenthal 2005; Atchadé & Fort 2010); Lomax implemented as IG scale mixture. Authors flag the sampler as "computationally expensive" and variational Bayes as future work.

## Data sources named
- Elite swimming performance databases: 500 swimmers per event×gender (fastest personal bests 2008–2023, min 5 performances): 100m female 23,669 performances (median 37.5, min 5, max 267); 100m male 23,440 (38/5/191); 200m female 21,112 (33/5/274); 200m male 19,696 (32/5/162). Confounders: 25m-pool dummy; environmental/geographical confounders from Griffin et al. (2022).
- Appendix C: 200m freestyle confirmatory analysis.
- No code repository or data download link given; Appendix B gives the full Gibbs sampler explicitly.

## Findings (numbers and facts, not vibes)
- Within-season effect is large and peaking-timed: Swimmer 1 improves ~57s→53s career (age 15→25) plus ~2s within-season; Swimmers 1/3/4 show 2/1/2.5s within-season improvements, peaking in September (major championships July–August); Swimmer 3's level improves ~3.5s between ages 15 and 21. [OTHER]
- Population within-season trajectory is fairly flat: ~0.3s improvement January–April, constant April–September. [OTHER]
- Ageing function is reverse-J: rapid improvement 15–20 (−1.5s for women vs −2.5s for men), peak ~24, slow decline; age of peak typically 23–28 depending on sport/gender/individual. [OTHER]
- Errors are positively skewed with the right tail (worse-than-expected) much heavier than the left tail (left tail close to normal) — elites rarely massively overperform vs their optimum but can underperform via illness/injury/execution. [TRUST-SIGNAL]
- Δ_i and Γ_i distributions have very heavy right tails (few athletes with large effects); Γ_i shifted left of Δ_i — season-on-season within-athlete variability is smaller than between-athlete variability: athletes replicate their seasonal peaking pattern through training. [OTHER]
- No out-of-sample forecasting demonstrated — all findings are in-sample posterior descriptions (file's own adversarial note). [TRUST-SIGNAL]
- Methodological cautions from the file: Lomax(1/2) chosen over horseshoe because half-Cauchy caused MCMC instability; K=6 RBP degrees, L=31 knots, Ga(2,0.1) tail priors are sport/data-scale specific; RBP endpoint constraints h*(0)=h*(1)=0 and piecewise-linear between-season interpolation are chosen, not learned. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Between-season vs within-season trajectory decomposition of team strength: COACHING (separates roster talent trend from in-season coaching/preparation form — "Chiefs declining as roster" vs "Chiefs start slow, peak in December").
- B-spline reverse-J age curve (rapid 15–20 improvement, peak ~24, slow decline; peak age 23–28): OTHER — portable to position-level player-prop aging effects (QB EPA/dropback, WR yards/route by age).
- Asymmetric skew-t errors (downside tail heavier; sudden collapse likelier than sudden emergence — maps to NFL injuries): TRUST-SIGNAL (error model for form predictions).
- Repeatable seasonal peaking (Γ_i left of Δ_i — athletes replicate peaking patterns): COACHING (principled "team is rounding into form" signal via hierarchical within-season forecast).
- Global-local Lomax(1/2) shrinkage for sparse athletes: TRUST-SIGNAL (prior choice is load-bearing — horseshoe was unstable; shrinkage machinery for teams/players with few observations).
- No holdout forecasting + in-sample-only validation: TRUST-SIGNAL (do not ship the fitted within-season component without the paper's own missing piece — forward predictive backtest, acceptance gate ≥5% second-half MSE reduction vs flat-season average on 2015–2025 nflverse rolling test).

## Engine-actionable? (yes/no + one-line what)
Yes — decompose NFL team weekly ratings into between-season roster trend and within-season form (RBP component), add B-spline age curves for props and skew-t errors for form, but only after the file's ≥5% second-half MSE rolling backtest gate passes on 2015–2025 nflverse data.

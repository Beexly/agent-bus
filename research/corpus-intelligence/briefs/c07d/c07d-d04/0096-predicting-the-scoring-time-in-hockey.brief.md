# arxiv-program/research/2026-09-21/arxiv-deep/0096-predicting-the-scoring-time-in-hockey.md
## What it is (1-2 sentences)
A Bayesian statistics paper (arXiv:1903.10889v1, 2019) that derives a predictive density for the time until the r-th goal in an NHL game, comparing an unrestricted non-informative-prior estimator against a restricted estimator that injects ancillary information (past points, specialist opinion) as the order restriction λ₁/λ₂ ≥ 1. The ledger's own verdict is **REJECT for GSE** — hockey scoring-time machinery with no NFL analogue in the engine.
## Key metrics/methods (formulas where given, else "not specified")
- Waiting-time model: time until r-th goal is Gamma: `p_λ(x) = x^{r−1} e^{−x/λ} / (Γ(r) λ^r)`, x > 0, r known, λ unknown.
- KL loss: `L_KL(q_λ, q̂₁) = ∫ q_λ(y) log(q_λ(y)/q̂₁(y)) dy`.
- Frequentist risk: `R_KL(λ, q̂₁) = ∫ L_KL(q_λ(y), q̂₁(·)) p_λ(x) dx`.
- Bayes predictive density: `q̂_π(y; x) = ∫ q_λ(y) π(λ|x) dλ`.
- Unrestricted predictive (Lemma 3.1, three-parameter beta prime, Aitchison 1975): `q̂_0(y₁; x₁) = x₁^{r₁} y₁^{r₀−1} / [B(r₁, r₀) (x₁ + y₁)^{r₁+r₀}]`, y₁ > 0.
- Restricted predictive (Theorem 3.1, weighted beta prime): `q̂_1(y₁; x₁, x₂) = [C(r₁ + r₀ − 1, x₁ + y₁, r₂ − 1, x₂) / C(r₁ − 1, x₁, r₂ − 1, x₂)] · q̂_0(y₁; x₁)`; under non-informative prior takes explicit hypergeometric form with regularized ₂F̃₁.
- Inverse-gamma pdf: `f_{a,b}(t) = b^a t^{−a−1} e^{−b/t} / Γ(a)`; cdf via upper incomplete gamma.
- KL prediction error: `pe(q̂_i) = E[Y₁ log(q_λ(y₁)/q̂_i(y₁))]`.
- Ancillary restriction: λ₁/λ₂ ≥ 1 (team A at least as capable), equivalently θ₁/θ₂ ≥ 1 on ability parameters; team goals N₁, N₂ modeled as independent Poisson with means scaled by prior-season points R₁, R₂ (exact scaling formula UNCERTAIN — PDF fraction layout garbled); densities truncated to (0, 60) minutes; r rarely exceeds 6.
## Data sources named
- NHL 2017–18 season, **Stathletes** data (proprietary, not public; acknowledged: Meghan Chayka, Jeff Goeree); only aggregated Table 1 times printed — time elapsed (minutes) until the 3rd goal per game for Toronto Maple Leafs and Montreal Canadiens vs opponents.
- Prior-season points: Toronto R₁ = 105, Montreal R₂ = 71 (2017–18; www.nhl.com).
- Evaluation "truth" on 2016–17 season under assumed truncated Gam(3, 18.3) on (0,60), E[Y₁] = 35.8; risk comparison projected to 2018–19 matchup.
## Findings (numbers and facts, not vibes)
- KL prediction error: **pe(q̂₁) = 0.04 vs pe(q̂₀) = 0.45** — restricted estimator wins by ~11× under KL.
- Frequentist risk curves: as θ₁/θ₂ rises above 1, R_KL of q̂₁ falls below the constant risk of q̂₀ (q̂₀ is MRE); both converge when information vanishes. r₁ = r₂ = r₀ = 3.
- Ancillary info shifts predicted 3rd-goal time later: mean 28.35 → 33.12 min; median 26.62 → 32.82; P20 14.38 → 19.06; P90 50.30 → 53.48; mode 17.92 → 28.13. (Fitted Toronto density coefficient layouts garbled; extracted: q̂_0 shown as 1901470·y₁²/(35.85+y₁)⁶, q̂_1 shown as y₁²(0.055+(0.0004+10⁻⁶y₁)y₁)/(1.92+0.025y₁)⁸ — digit splits may be mis-reconstructed, UNCERTAIN.)
- Interpretation: accounting for Toronto's superiority *delays* the expected 3rd-goal time (counterintuitive, driven by the weighting).
- Limitations: evaluation is in-sample-ish (2017–18 fit, 2016–17 "prediction" under an assumed truncated-gamma truth — circular); no robustness check for a *wrong* restriction; single team-pair illustration (Toronto vs Montreal), no league-wide backtest; no betting/decision metric; no code.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing lane): the generic technique — Bayesian predictive densities with order restrictions from prior knowledge — is textbook stats, not a GSE gap; the only conceivable port is a first-score timing lane (e.g., time of first TD), which GSE does not model and whose market list (SPREAD/MONEYLINE/TOTAL) excludes it. No connection to QB-behavior, coaching, OL, or trust-target programs.
## Engine-actionable? (yes/no + one-line what)
No — hockey scoring-time predictive densities map to no GSE lane; the statistical technique adds nothing beyond standard Bayesian tooling already available to the engine.

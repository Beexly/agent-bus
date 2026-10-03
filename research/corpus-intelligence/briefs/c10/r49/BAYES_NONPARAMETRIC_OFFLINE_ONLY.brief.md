# ops/BAYES_NONPARAMETRIC_OFFLINE_ONLY.md
## What it is (1-2 sentences)
Hard boundary doctrine: Bayesian nonparametric methods (DP-GMM, HDP, CRF, Pitman-Yor) are restricted to offline research notebooks; production calibration uses Temp, Platt MAP IRLS, isotonic PAVA/CIR, and EB-τ group intercepts only.
## Key metrics/methods (formulas where given, else "not specified")
DP-GMM: G~DP(αG₀), θᵢ=(μᵢ,Σᵢ)~G, xᵢ~N(μᵢ,Σᵢ); stick-breaking equivalent. HDP: G₀~DP(γH), Gⱼ~DP(αG₀) — shared atoms, group-specific weights. PYP: discount d∈[0,1), concentration α>−d; new-table ∝ α+d·Kₙ, join ∝ nₖ−d; stick-breaking v_c~Beta(1−d, α+cd). Expected #clusters ~n^d for d>0 vs α·log n for DP; low d (0–0.25) preferred offline. PROVEN is defined as raising Murphy RES via selective publish and engine ranking — not via process priors. Code enforcement: no DP/HDP/PYP fitters in the production apply path; `hierarchical-eb-tau.ts` / `platt-map.ts` carry "No Dirichlet process in prod path" notes; full Bayes non-centered hierarchical Platt is offline NUTS only.
## Data sources named
Not specified — offline notebooks / EDA of residuals and features; Stan via truncated stick-breaking or symmetric Dirichlet as a finite DP approximation (notebooks only, never in the `apps/web` apply path).
## Findings (numbers and facts, not vibes)
- DP-GMM is bad as a versioned calibration map due to label switching and sensitivity to α and G₀. [OTHER]
- HDP does not fix Res≈0 — shared miscalibration regimes across sport|market are research-only. [OTHER]
- Production group keys are fixed sport|market with Gaussian u_g (auditable, frozen JSON); latent ids that can switch are offline-only. [TRUST-SIGNAL]
- Adjustments default OFF; runtime is Node cron; never fit at the edge. [OTHER]
- High d with low α yields many rare types and few dominant ones — high d makes every thin market want its own atom, which does not freeze for audit. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged OTHER and TRUST-SIGNAL; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
Yes — pins the production calibration stack (Temp / Platt MAP IRLS / isotonic / EB-τ) and explicitly forbids nonparametric fitters in the production path, a wiring constraint for the calibration lane.

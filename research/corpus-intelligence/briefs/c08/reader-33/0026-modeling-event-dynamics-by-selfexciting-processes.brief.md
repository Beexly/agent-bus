# docs/arxiv-program/research/2026-09-21/arxiv-deep/0026-modeling-event-dynamics-by-selfexciting-processes.md
## What it is (1-2 sentences)
Deep read of arXiv:2601.07980 — a Hawkes/self-exciting process extension with a latent random finite memory (hot/regular regime switching) fit to 2019 Chinese Super League corner-kick clustering; verdict ADAPT as a building block for NFL in-game scoring-burst modeling (fills gap #14 of the existing-research map).
## Key metrics/methods (formulas where given, else "not specified")
- Extended Hawkes with random memory: λ(t|H(t),τ,Z) = λ_1(t|H(t),Z)·S(t) + λ_0(t|H(t),Z)·(1−S(t)), where S(t) = 1{t − T_{N(t−)} ≤ τ}, τ segment-specific i.i.d. ~ Gamma.
- Simple case: λ(t|H(t),τ) = λ_1 S(t) + λ_0(1−S(t)); gap-time changepoint density f(y|τ) = I(y≤τ) λ_1 e^{−λ_1 y} + I(y>τ) λ_0 e^{−(λ_1−λ_0)τ} e^{−λ_0 y}.
- Four nested specs: (a) λ_00 exp{βZ + νS(t)}; (b) parametric time-varying baseline + νS(t); (c) semiparametric piecewise-constant baseline (8 pieces) + νS(t); (d) fully state-specific baselines.
- Estimation: MLE via Monte Carlo EM (E-step draws τ_i ∝ L_i(θ|τ_i)f_τ(τ_i); standard errors via Louis 1982 observed information); covariate selection by all-subset BIC; simulation via changepoint gap-time direct simulation or Lewis–Shedler thinning.
## Data sources named
2019 Chinese Super League corner kicks: 16 teams, 240 scheduled matches → 233 usable (7 excluded, treated as MCAR), 1,171 segments split at 705 goals + 466 half-endings; segment covariates X1 (2nd-half), X2 (score diff), X3 (starts-from-goal), X4 (segment start time), X4×X2; proprietary (from Daniel Stenz, Shandong Luneng Taishan FC) — no public URL, no code.
## Findings (numbers and facts, not vibes)
- Hot-state mean duration ≈ 2 minutes (e.g., home Γ(8.76, 4.43), mean 1.98, sd 0.67; away mean 2.00, sd 0.69), stable across specs and teams.
- Hot-state intensity ≈ 2× regular state (multiplier ν̂); only ~10% of corner kicks form "quick" clusters.
- Home: lower corner rate when leading (X2: −0.122, SE 0.057) and after a goal (X3: −0.090, SE 0.022). Away: higher in 2nd half (X1: 0.090, SE 0.061), lower when leading, negative X4×X2 (−0.006, SE 0.002). Model (d): no covariates significant in hot state.
- Simulation check (200 replicated seasons): home corners/match 5.21 observed vs (4.95, 5.56) simulated [2.5/97.5 pctiles]; away 4.72 vs (4.36, 4.94); first-10-min home 0.98 vs (0.86, 1.15); cluster-size distributions show close agreement (Fig. 4).
- The proportional (a)–(c) structure is rejected by their own model (d) — headline multiplicative effects rest on a rejected structure. No code released; claims unverifiable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hot/regular scoring-event intensity model → OTHER (live in-game totals modeling; momentum quantification via posterior P(S(t)=1))
- Hot-state excitation dominating covariates → OTHER (regime-based event modeling building block for game-script simulation)
- Team-specific τ partial pooling → COACHING (which coaches/teams sustain pressure longer — "sustained-pressure" team metric, live-total pricing)
## Engine-actionable? (yes/no + one-line what)
Yes — port Model (a)+(c) to nflverse 2021–2024 touchdown event streams (halves as segments, score diff/half/pregame spread covariates), accept only if ν̂ > 0 at p<0.01 with τ̂ mean in 1–6 min, ΔBIC > 10 vs homogeneous Poisson, and simulated cluster PMF matches empirical; then feed into live-totals intensity surface and burst-realistic game-script Monte Carlo.

# data/CARDS_SHARE_CORE_WIRING.md
## What it is (1-2 sentences)
A 10-card build deck (SC1–SC10, Wave SC) specifying a team-level Dirichlet-multinomial share core for the props stack: masked Minka fit of target/carry shares over team-week rows, Gamma-Poisson team trials baseline, per-player Beta-Binomial×trials volume marginals, exposure-offset α projection, injury re-projection, teammate-correlation surface, L1 covariate-bus registration plan, and a log-only shadow validation harness — all `priced:false`, shadow-only, gated by masterplan §6.

## Key metrics/methods (formulas where given, else "not specified")
- Masked Minka fixed-point (SC3): per player j, α_j ← α_j · (Σ_{i: active_ij} [ψ(x_ij + α_j) − ψ(α_j)]) / (Σ_{i: active_ij} [ψ(n_i + A_i) − ψ(A_i)]), ψ = digamma from `kernel/numeric.js`; row totals n_i and active concentration A_i over ACTIVE columns only; init 2 × mean observed share floored 1e-3, α floor 1e-6, convergence tol 1e-9, budget 500 → KernelError NO_CONVERGENCE.
- Per-player volume marginal (SC5): pmf(k) = Σ_{n≥k} trialsPmf(n) · exp(logChoose(n,k) + logBeta(k+α_i, n−k+A−α_i) − logBeta(α_i, A−α_i)); mean = E[N]·s_i; variance = Σ_n pmf_N(n)·n·s_i(1−s_i)·(A+n)/(A+1) + s_i²·Var(N); s_i = α_i/A.
- Teammate covariance (SC8): conditional on n, Var(X_i|n) = n·s_i(1−s_i)·(A+n)/(A+1), Cov(X_i,X_j|n) = −n·s_i·s_j·(A+n)/(A+1); unconditional Cov(X_i,X_j) = s_i·s_j·[Var(N) − (A·E[N] + E[N²])/(A+1)] — shared-totals term pushes positive, compositional term pushes negative; sign is empirical.
- Exposure-offset α projection (SC6): s'_i ∝ s_i^fit · (eNext_i / eHist_i)^β (β default 1), α'_i = A·s'_i (preserve_total); one exposure field per projection ("est_route" | "snap_pooled"), mixed fields refuse.
- Team trials (SC4): exchangeable Gamma-Poisson — `fitGroupPrior` pooled method-of-moments EB across teams, per-team `posteriorRate`, predictive pmf via `nbPmf(n, post, 1)`; supportMax = smallest N with tail mass < 1e-12, hard cap 300; no recency in this module.
- Shadow harness referee (SC10): Brier + log-loss on over/under outcomes at lines k+0.5 for k in 0..6; CRPS via K1 `crpsDiscrete` on count marginals; randomized PIT via K2 (seeded makeRng) with histogram + chi-square p; 2000 joint draws via K11 for teammate coherence; selftest null-world (independent NB) and DM-world gates with makeRng(7).
- Discipline: every card `priced:false`; fail-closed (typed refusals, no imputation); MODEL_VERSION stays v5.2.7; no market-prop inputs on p-side; no `Math.random` (injected rng via makeRng, boxMuller normal sampler only); sealed holdout never opened; TimedRow {decisionAt = kickoff − 6h, eventEndAt = kickoff + 5h}.

## Data sources named
- nflverse `player_stats_week` (grain player-week, targets/receptions/air yards/EPA/attempts, since 1999, CC-BY-4.0) and `snap_counts` (player-week, since 2012, PFR-keyed — join hazard vs gsisId).
- `docs/ops/NFLVERSE_GSIS_CROSSWALK.md` (id crosswalk), `packages/prediction-engine/src/edge-lab/loaders/nfl-games.ts` (kickoff timestamps), SC10 shadow runs on seasons 2022–2024.
- Kernel deps: K11 dirichlet-multinomial, K1 crps, K2 pit slots; props-hb.js (fitGroupPrior, posteriorRate, nbPmf), props-hb-catch/rush/atd/rec-td/rush-td k-loops, props-hb-snap-exposure, est-routes-tprr (PR #556), covariate-bus.ts (PR #555).

## Findings (numbers and facts, not vibes)
- This is a design/spec deck (Wave SC), not a results document — no empirical findings; outputs are prescribed with exact tolerances (dense-mask fit must match K11 fitDirichletMultinomial to 1e-12; renormalization to 1e-12; pmf sums to 1 within 1e-9; 20% share recovery on 2000-row synthetic test; empirical corr within 0.05 of analytic).
- Injury/vacancy elasticity (E-C3) is explicitly HYPOTHESIS — unmeasured; SC7 ships pro-rata baseline labeled "none_prorata_baseline".
- No prop-line close archive exists → §6 economic referee (CLV vs close) cannot run; SC10 reports statistical referee only.
- Script core (spread/total/rest/pace → plays) does not exist; SC4 is a deliberately-blind shadow stand-in to retire when it lands.
- Masterplan L465 kill condition restated: no Dirichlet share model merges without renormalization + teammate-correlation tests.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Dirichlet share model over team targets/carries as compositional volume model — SCHEME
- Exposure offsets from est-route share / snap share into α (SC6) — SCHEME
- Injury drop+renormalize+elasticity mechanism (SC7) — SCHEME
- Negative teammate correlation surface for same-game/parlay coherence — SCHEME
- Shadow-first, walk-forward CRPS/PIT, log-only, fail-closed, priced:false discipline — TRUST-SIGNAL
- No market-prop inputs on the prediction side; covariate-layer separation — TRUST-SIGNAL
- Rest: wave routing and deck governance — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — the Beta-Binomial×trials mixture pmf with closed-form mean/variance and the masked Minka share-fit with dense-delegation-to-K11 is a complete, test-pinned recipe for compositional target/carry volume modeling that guarantees teammate means sum to the team total.

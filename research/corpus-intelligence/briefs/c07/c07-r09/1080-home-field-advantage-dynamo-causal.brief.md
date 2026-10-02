# arxiv-program/research/2026-09-21/arxiv-deep/1080-home-field-advantage-dynamo-causal.md
## What it is (1-2 sentences)
Full read of arXiv:2506.11399v1 (Qi, Cai, Hu & Shen, 2025): proposes **DYNAMO** (DYnamic Non-stAtionary local M-estimatOrs), a causal structure learning method for non-stationary time series that estimates time-varying causal graphs without stationarity, faithfulness, or constant-Gaussian-noise assumptions — applied to 1.6M Wyscout events from 760 EPL matches (2020-21 no-crowd vs 2021-22 with crowds) to decompose home-field advantage into a crowd-driven performance pathway and a referee-bias pathway. Verdict in file: **ADAPT** — portable to NFL via officiating-crew penalty patterns + attendance/snap-timing data.

## Key metrics/methods (formulas where given, else "not specified")
- Model (eq. 1): **x**_t := f(Pa(**x**_t), **ε**_t; **θ**(τ_t)), τ_t = t/T; parents from instantaneous + L lagged variables; causal structure **θ**(τ_t) varies smoothly with t. Local-stationarity approximation (Props 1–2): for each τ a stationary approximation **x̃**_t(τ) with identical causal structure; ‖**x**_t − **x̃**_t(τ_t)‖_q = O(T^{−1}).
- DYNAMO loss (eq. 3): ℒ_t(ϑ) = (1/Th) Σ_l ℓ(**x**_l, Y_{l−1}; ϑ) K_h(τ_l − τ_t); Epanechnikov kernel; bandwidth via "quasi-k-fold CV" (local likelihood excluding fold, eq. 6).
- Linear (eq. 4): NOTEARS loss ‖**x**_l − W_t^T**x**_l − A_t^TY_{l−1}‖²₂ K_h + λ₁‖W_t‖ + λ₂‖A_t‖ + (ρ/2)H(W_t)² + αH(W_t), H(W)=tr(e^{W∘W})−d (trace-exponential acyclicity); solved via W=W₊−W₋ split, L-BFGS-B. Nonlinear (eq. 5): NTS-NOTEAR with neural net g_t.
- Theorems 1–2: structural identifiability under Assumptions 1–4 (no faithfulness needed); θ̂(τ_t) → θ(τ_t) with probability →1 as (T,h)→(∞,0), Th→∞, Th⁷→0.
- Simulation: ER graphs with cosine time-varying weights, T=500, linear + tanh/sigmoid nonlinear, 20 seeds; metrics SHD and F1 vs DYNOTEARS, NTS-NOTEAR, PCMCI+, CD-NOD (authors generated data from their own model class — circular comparison noted in file).
- Assumptions: 1 unconfoundedness (no unobserved confounders — strong for football: tactical shifts, score-state, crew fixed effects assumed away); 2 per-t DAG acyclicity; 3 locally stationary causality (Lipschitz contraction Σα_j(ϑ)<1); 4 kernel/bandwidth conditions.

## Data sources named
Primary: >1.6M within-game events from 760 EPL matches (2020-21 closed doors, 2021-22 spectators), via Hudl & Wyscout collaboration — proprietary, not public. Variables per minute per team (home−away differences, demeaned vs opponent): Total Passes, Total Shots, Pass Accuracy, Shot Accuracy, Opponent's Yellow Cards, Opponent's Fouls, Expected Goals; controls: key passes, dribbles, tackles. NFL analogues named in file: nflverse play-by-play penalties, crew assignments from official gamebooks, NFL attendance (COVID 2020 partial/empty-stadium weeks = natural experiment), GSE's per-drive expected-points engine as the XG analogue.

## Findings (numbers and facts, not vibes)
- HA collapsed in empty stadiums: 2020-21 home win 37.9% vs away 40.3%; 2021-22 home win 43.0%, +9 points over away.
- Referee-bias pathways (opponent fouls OF / opponent yellow cards OY → expected goals XG) are time-varying within matches and team-specific: Liverpool steady escalating bias with crowds (Anfield); Man City triggers early opponent yellows then second-half fouls; Arsenal flips from second-half favoritism (empty) to performance-driven bias (crowded).
- Non-relegated teams shifted from opponent fouls (empty) to opponent yellow cards (crowded) — crowd pressure makes refs punish away teams more harshly; lower-ranked/relegated teams barely change.
- DYNAMO-predicted minute-level XG beats DYNOTEAR and raw XG on goal-prediction MSE for all 4 studied teams across both seasons (Man City, Liverpool, Arsenal, Man United); file's numeric gate cites Arsenal 2021-22: DYNAMO 0.00079 vs DYNOTEAR 0.00106 vs raw XG 0.00111 (≈29% improvement); absolute improvements small (e.g., Arsenal 2020-21: 0.00046 vs 0.00063).
- Ledger 1077 (2401.16392v3) static Bayesian NFL HA baseline in file: 1.73 points, declining −0.032/yr.
- Caveats: "referee bias" inferred from foul/yellow-card differentials, not direct measurement of officiating errors; 2020-21 vs 2021-22 comparison confounds crowd return with season changes; nonlinear DYNAMO expensive; no runtime/cost analysis.
- Verdict: **ADAPT**; numeric gate: DYNAMO-predicted per-drive xP must achieve MSE ≥10% lower than raw-xP baseline on held-out NFL weeks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Home-field decomposition — replace static HA scalar with crew-aware, within-game causal structure: weekly HA decomposition (crew-adjusted home edge = performance component + referee-bias component × crew's historical bias), fed into spread/ML pricing model and CLV tracker.
- OTHER: NFL variables mapped in file: EPA/play, success rate, sack rate, opponent penalties accepted (OY analogue), penalty yards against (OF analogue), per-drive xP — minute- or drive-binned, home−away differences, opponent-strength adjusted.
- OTHER: improvement experiment in file: add crew fixed effects + crew×crowd interactions as observed nodes; if bias pathway survives, GSE has a crew-specific HA adjustment worth pricing; if it collapses, the "bias" was crew assignment (scheduling) — schedule term instead.

## Engine-actionable? (yes/no + one-line what)
Yes — fit linear DYNAMO (public NOTEARS + kernel-localized wrapper) per team on NFL per-drive series (penalties by crew, attendance, xP) to produce a weekly crew-aware home-field decomposition for spread pricing; gate on ≥10% xP-MSE improvement on held-out weeks.

# research/2026-09-21/arxiv-deep/1080-home-field-advantage-dynamo-causal.md
## What it is (1-2 sentences)
Full-read research note on arXiv:2506.11399v1 (Qi, Cai, Hu, Shen 2025), which proposes DYNAMO — a causal-structure-learning method for non-stationary time series that estimates time-varying causal DAGs — and applies it to 760 EPL matches to decompose home-field advantage into a referee-bias pathway (crowd pressure → opponent fouls/yellow cards → xG) versus a performance pathway. Verdict: ADAPT for GSE, as a method to turn NFL home-field from a static scalar into a crew-aware, within-game time-varying causal feature.

## Key metrics/methods (formulas where given, else "not specified")
- Model (eq. 1): **x**_t := f(Pa(**x**_t), **ε**_t; **θ**(τ_t)), τ_t = t/T; parents from instantaneous + L lagged variables; causal structure **θ**(τ_t) varies smoothly with t.
- Assumptions: 1 unconfoundedness (no unobserved confounders), 2 per-time-point DAG acyclicity, 3 locally stationary causality (Lipschitz contraction Σα_j(ϑ) < 1, parameter-space Lipschitz), 4 symmetric Lipschitz kernel with bandwidth h, (T,h) → (∞,0), Th → ∞.
- Props 1–2: stationary approximation **x̃**_t(τ) exists per τ with identical causal structure; ‖**x**_t − **x̃**_t(τ_t)‖_q = O(T^{−1}).
- DYNAMO loss (eq. 3): ℒ_t(ϑ) = (1/Th) Σ_l ℓ(**x**_l, Y_{l−1}; ϑ) K_h(τ_l − τ_t).
- Linear (eq. 4): NOTEARS loss ‖**x**_l − W_t^T**x**_l − A_t^TY_{l−1}‖²₂ K_h + λ₁‖W_t‖ + λ₂‖A_t‖ + (ρ/2)H(W_t)² + αH(W_t), acyclicity trace-exponential H(W) = tr(e^{W∘W}) − d; solved via W = W₊ − W₋ split with L-BFGS-B.
- Nonlinear (eq. 5): NTS-NOTEAR loss with neural net g_t and induced graph W_t(g_t).
- Bandwidth: quasi-k-fold CV, ĥ_t minimizing ℒ_CV^t(h) (eq. 6); Epanechnikov kernel recommended.
- Theorem 1: structural identifiability under Assumptions 1–4 with no faithfulness assumption.
- Theorem 2: θ̂(τ_t) → θ(τ_t) with probability → 1 as (T,h) → (∞,0), Th → ∞, Th⁷ → 0.
- Metrics: goal-prediction MSE (minute-level xG) vs DYNOTEARS and raw xG; simulation metrics SHD and F1 vs DYNOTEARS, NTS-NOTEAR, PCMCI+, CD-NOD on ER graphs (T = 500, cosine time-varying weights with threshold γ, speed Φ; 20 seeds).

## Data sources named
- >1.6M within-game events from 760 EPL matches: 2020-21 (closed doors) and 2021-22 (spectators), via Hudl & Wyscout collaboration — PROPRIETARY, not public. Variables per minute per team (home−away differences, demeaned vs opponent): Total Passes, Total Shots, Pass Accuracy, Shot Accuracy, Opponent's Yellow Cards, Opponent's Fouls, Expected Goals; controls: key passes, dribbles, tackles, etc.
- Simulation: self-generated ER graphs (authors generate from their own model class — flagged as circular evaluation).
- Prior-ledger baselines referenced: ledger 1077 (2401.16392v3) — static Bayesian NFL HA baseline of 1.73 points, declining −0.032/yr.
- GSE analogues named: nflverse play-by-play (public NFL penalty data), official gamebook crew assignments, NFL attendance figures (COVID 2020 partial/empty-stadium weeks as natural experiment), GSE's per-drive expected-points engine as xG analogue.

## Findings (numbers and facts, not vibes)
- Full-text read: HTML conversion, 245,588 bytes; cover-to-cover read (abstract through conclusion + references).
- 2020-21 EPL (empty stadiums): home win 37.9% vs away win 40.3% — home advantage collapsed below away.
- 2021-22 EPL (crowds back): home win 43.0%, +9 points over away.
- Referee-bias pathways (opponent fouls OF / opponent yellow cards OY → xG) are time-varying within matches and team-specific: Liverpool steady escalating bias with crowds (Anfield); Man City early opponent yellows then second-half fouls; Arsenal flipped from second-half favoritism (empty) to performance-driven bias (crowded).
- Non-relegated teams shifted from opponent fouls (empty) to opponent yellow cards (crowded) — crowd pressure makes refs punish away teams more harshly; lower-ranked/relegated teams barely changed.
- DYNAMO-predicted minute-level xG beat DYNOTEAR and raw xG on goal-prediction MSE for all 4 studied teams across both seasons (Man City, Liverpool, Arsenal, Man United).
- Table 1 MSE improvements are small in absolute terms (e.g., Arsenal 2020-21: 0.00046 vs 0.00063 xG baseline); statistically consistent but practically modest for goal prediction.
- Numeric gate: 0.00079 — DYNAMO's worst per-team 2021-22 MSE (Arsenal), beating DYNOTEAR (0.00106) and raw xG (0.00111); paper's Arsenal 2021-22 improvement 0.00079 vs 0.00111 ≈ 29%. GSE adoption bar: ≥10% MSE improvement over raw-xP baseline on held-out NFL weeks; below 10% the pipeline cost isn't worth it.
- Replacement chain: 1806.10648v2 REJECT → 2303.06021v4 (ledger 1079, disqualified as non-compliant — calibration/betting search, not referee-bias lane) → 2506.11399v1 ADAPT (compliant fresh search, 2026-09-21).
- Fresh search: 5 arXiv API queries; e.g. `ti:"referee bias" OR ti:"home advantage"` → 13 entries, 12 fresh; 2401.16392v3 flagged DUP (already ledged as 1077).
- Selection rationale: chosen over 2104.11595v1 (NFL crowd HA, descriptive only) and 2008.05417v2 (Bundesliga bookmaker mispricing, soccer-only, descriptive).
- GSE overlap: no causal-discovery-for-HA entry anywhere in corpus; no DYNAMO/NOTEARS/DYNOTEARS/DAG-learning ledger; no referee-bias mechanism ledger. Extension, not duplicate.
- Implementation effort: ~2–3 weeks for one engineer (NOTEARS public; kernel-localized wrapper new). First deliverable: Table-1-style MSE test on 2020–2024 NFL seasons, held out weekly.
- Four-team deep dive is cherry-picked; 16-team summary compressed into Appendix D (not fetched).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: The referee-bias pathway (opponent fouls/yellow cards → xG) is team-specific and time-varying within matches — for NFL this decomposes a coach's game-script into performance vs officiating-driven components; coaches who "work the refs" or draw disproportionate penalty yardage late in games would show up as second-half bias-pathway weights, which is a coaching-tendency signal worth tracking per team.
- TRUST-SIGNAL: DYNAMO is explicitly framed as improving a prediction task (goal-prediction MSE beating DYNOTEAR and raw xG with named baselines 0.00079/0.00106/0.00111); the GSE improvement experiment — adding crew fixed effects + crew×crowd interaction as observed nodes to test whether the bias pathway survives crew control — is a trust-target intake design: if the pathway survives, GSE has a crew-specific HA adjustment worth pricing; if it collapses, the feature becomes a schedule term.
- OTHER: Core contribution is calibration/sizing — a time-varying, crew-aware, mechanism-separated home-field feature feeding the spread/ML pricing model and CLV tracker. Serves the calibration program (extends ledger 1077's static 1.73-pt baseline).
- UNCERTAIN: "Referee bias" is inferred from foul/yellow-card differentials, not direct measurement of officiating errors — an association labeled as bias; the paper acknowledges the inferential gap. The 2020-21 vs 2021-22 crowd comparison conflates crowd return with season changes (players, managers, rules) — a confounded natural experiment.
- CONTRADICTION risk (not confirmed): Assumption 1 (no unobserved confounders) is violated in football by construction (score state, weather, injuries); the paper assumes it away, so causal claims rest on assumption, not design. The improvement experiment addresses this for NFL.

## Engine-actionable? (yes/no + one-line what)
Yes — implement linear DYNAMO on NFL per-drive panels (EPA/play, success rate, opponent penalties accepted, penalty yards against, expected points; home−away differences; L=1; Epanechnikov kernel, quasi-k-fold bandwidth) to produce a weekly crew-aware HA decomposition (performance component + referee-bias component × crew's historical bias) as a pricing-model feature, gated on ≥10% MSE improvement over raw xP on held-out weeks.

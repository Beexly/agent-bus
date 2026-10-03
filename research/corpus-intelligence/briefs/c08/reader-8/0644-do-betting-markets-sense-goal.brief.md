# docs/arxiv-program/research/2026-09-21/arxiv-deep/0644-do-betting-markets-sense-goal.md
## What it is (1-2 sentences)
Tests whether Bundesliga betting-market participants (bookmakers via odds, bettors via stakes) anticipate the first goal before it happens, using 1 Hz odds/stakes data. Ledger verdict: REJECT — clean null result; no model, parameter, or edge survives the read.
## Key metrics/methods (formulas where given, else "not specified")
- improb_{itj} = (1/O_{itj}) / Σ_k (1/O_{itk}) — vig-adjusted implied probabilities
- Bookmaker side: linear regressions of in-match implied win probability on improbpre, t, t², pre×t, red cards, xgdiff/t, and anticipation covariate mintogoal⁻¹_it (rises to 1 in the minute before the goal)
- Bettor side: zero-one-inflated beta state-space model y_t ~ BEINF(μ_t, σ, π, λ), logit link μ_it = logit⁻¹(η_it), η_t = ν_t + s_t, s_t = φ s_{t−1} + σ_s ε_t (latent AR(1) market activity); likelihood via Kitagawa (1987) state discretization (m=95 intervals), optimized by BFGS
- BEINF density: f(y) = π (y=0); (1−π−λ)h(y) (0<y<1); λ (y=1); precision γ = μ(1−μ)/σ² − 1
## Data sources named
306 matches of 2018/19 German Bundesliga from a large European bookmaker at 1 Hz (pre-match + in-play odds, per-second stakes), aggregated to 1-minute intervals; analysis on 289 matches with ≥1 goal (17 scoreless excluded). Data proprietary — not public.
## Findings (numbers and facts, not vibes)
- Bookmaker Model 3: improbpre coeff 1.003 [0.990, 1.016]; minute 0.001 [0.001, 0.002]; pre×minute −0.004 [−0.005, −0.003]; red card own team −0.120 [−0.124, −0.116]; red card opponent +0.173 [0.136, 0.210]; xgdiff/minute 0.163 [0.075, 0.250] — bookmakers price xg and red cards
- Anticipation: mintogoal⁻¹ = −0.005 [−0.012, 0.002] (bookmaker), 0.089 [−0.159, 0.336] / 0.096 [−0.031, 0.222] (bettor) — all statistically insignificant
- Bettor SSM: φ̂ = 0.974 [0.972, 0.977] (strong serial correlation in latent market activity); xgdiff/minute 3.627 [3.552, 3.702]; home insignificant (−0.005 [−0.185, 0.175])
- Descriptives: team scoring first won 204/289 (70.6%), drew 56 (19.4%), lost 29 (10.0%); ~75% of first goals in first half
- Conclusion: neither bookmakers nor bettors anticipate the first goal; markets react rather than anticipate
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: null confirmation of market efficiency — consistent with, and weaker than, existing efficient-market evidence already in the corpus; no new metric, model, or edge
## Engine-actionable? (yes/no + one-line what)
No — rejected; the zero-one-inflated beta SSM method is already covered more usefully by ledger 0643 (2202.10085), which adds time-varying coefficients, momentum covariates, and a fraud/outlier-detection application.

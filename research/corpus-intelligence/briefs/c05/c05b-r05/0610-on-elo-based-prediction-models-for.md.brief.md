# arxiv-program/research/2026-09-21/arxiv-deep/0610-on-elo-based-prediction-models-for.md
## What it is (1-2 sentences)
Ledger brief for arXiv:1806.01930v1 (Gilch & Müller, 2018), a study of Elo-covariate Poisson regression models (independent, bivariate, diagonal-inflated bivariate, nested) for forecasting the 2018 FIFA World Cup, scored with two novel ordinal tournament scorers (E1/E2) plus Brier and RPS. Verdict: ADAPT — the nested Poisson and E1/E2 scoring functions transfer to GSE; tournament-simulation machinery discarded (flagship forecast failed: Germany picked #1, finished last in group).

## Key metrics/methods (formulas where given, else "not specified")
- Independent Poisson: log μ_A(Elo_O) = α_0 + α_1·Elo_O (attack); log ν_B(Elo_O) = β_0 + β_1·Elo_O (defense); combined rate λ_{A|B} = (μ_A(Elo_B) + ν_B(Elo_A))/2.
- Bivariate Poisson (Eq. 3): log μ_T = α_{1,0}+α_{1,1}Elo_O; log ν_T = α_{2,0}+α_{2,1}Elo_O; log τ_T = α_{3,0} (shared covariance, Elo-dependent τ rejected — AIC increased); λ_0 = (τ_A+τ_B)/2.
- Diagonal-inflated bivariate: inflation probability p on {0:0,1:1,2:2} with (θ_0,θ_1,θ_2); top-5 teams' p ∈ [0.00, 0.03], all (θ) ≈ (0,0,1) — collapses to 2:2.
- Nested Poisson (Eq. 2.4): log λ_B(E_A, G_A) = γ_0 + γ_1·E_A + γ_2·G_A — weaker team's goals conditional on favorite's Elo AND favorite's realized goals; P[G_A=i,G_B=j] = P[G_A=i]·P[G_B=j|G_A=i].
- Ordinal tournament scorers: result(T) ∈ {1..6} (champion=1 … group exit=6); E1 = Σ_T |result(T) − argmax_j p_j(T)|; E2 = Σ_T Σ_j p_j(T)|j − result(T)|; BS = Σ_T Σ_j (p_j(T) − 1_{result(T)=j})²; RPS = Σ_T (1/5) Σ_{i=1..5} (Σ_{j≤i} p_j(T) − 1_{result(T)=j})².
- Simulation: 100,000 tournament replications per model in R 3.3.1 (bivpois package, EM); extra-time rates/3; dynamic Elo updating during simulation.
- Rejected alternatives: generalized Poisson (φ ≈ 1, no gain), negative binomial (same), home-advantage covariate L ∈ {−1,0,1} (collapsed all win probabilities to 2–6%).

## Data sources named
- eloratings.net (World Football Elo); neutral-ground matches 01.01.2010–31.12.2017 involving 2018 WC participants (France: post-01.01.2012 + EURO 2016 home matches after χ² p=0.0011 failure → adapted p=0.03). Top-5 Elo on 28 Mar 2018: Brazil 2131, Germany 2092, Spain 2048, Argentina 1985, France 1984. Validation: 2002–2014 (for WC2014) and 2000–2010 (for WC2010) windows.

## Findings (numbers and facts, not vibes)
- 2014 validation (Table 7): nested Poisson best on E1 (25), Brier (21.89), RPS (5.42); bivariate best on E2 (34.16 vs nested 34.32). 2010 validation (Table 10): nested best on all four (E1=24, E2=30.50, Brier=17.51, RPS=4.93).
- 2018 forecast: all four models ranked Germany #1 (nested: 30.50% champion, 41.80% final, 92.10% R16 survival) ahead of Brazil (18.30%). Actual: France won; Germany finished last in its group. Dynamic in-simulation Elo updating shifts probabilities up to 5 percentage points.
- Diagonal inflation added nothing (Tables 7, 10; p ≈ 0 for top teams despite lower AIC — authors rejected it).
- Home-advantage experiment: including qualifiers with a home covariate collapsed every win probability to 2–6% — "matches during championships behave different than typical matches in the qualifier round."
- GSE implementation spec: nested-score NFL analog — favorite's points ~ quasi-Poisson/NB on opponent defensive strength; underdog's points ~ regression on favorite's Elo + favorite's realized points (game-script dependence). Walk-forward by season on nflverse 2010–2026. Effort ~1 week.
- Acceptance gate (from file): adopt nested iff 2015–2025 walk-forward nested log loss beats independent Poisson by ≥0.005 AND E2 ordinal score on playoff-stage probabilities beats engine baseline AND stable to ±2-year training-window shifts.
- Improvement experiment: fit nested model separately on playoff vs regular-season games — formalize "championship matches behave differently" into a measurable test (serves GSE's playoff betting edge).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Nested score conditioning (underdog's score depends on favorite's realized score) — game-script dependence applicable to NFL play-calling/total dynamics — SCHEME
- Per-team attack/defense Poisson decomposition with shared strength covariate — engine modeling pattern — OTHER
- E1/E2 ordinal scorers for playoff-stage/bracket/pick'em evaluation — GSE playoff evaluation harness — OTHER
- Regime-separation finding (championship games ≠ qualifiers; HFA collapse) — playoff-vs-regular-season parameter separation — COACHING (playoff coaching regimes differ from regular-season behavior)
- Trust caveat: flagship forecast (Germany 30.5%) failed spectacularly — single-tournament variance dominates model fit — TRUST-SIGNAL (do not over-weight tournament simulations for picks)

## Engine-actionable? (yes/no + one-line what)
Yes — port nested-Poisson score conditioning (Eq. 2.4 analog) to NFL score modeling and adopt E1/E2-style ordinal scoring for playoff-stage evaluations; file includes full acceptance gate (log loss ≥0.005 margin) and ~1-week implementation spec.

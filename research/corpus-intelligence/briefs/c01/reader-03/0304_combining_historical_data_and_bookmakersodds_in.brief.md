# arxiv-program/research/2026-09-21/arxiv-deep/0304-combining-historical-data-and-bookmakersodds-in.md
## What it is (1-2 sentences)
A deep-read ledger of Egidi, Pauli & Torelli (2018, arXiv:1802.08848) on fusing bookmakers' 3-way soccer odds directly into a Poisson score model: bookmaker odds are inverted into implicit scoring intensities, then team scoring rates become convex combinations of historically-estimated and odds-implied rates. Verdict in the file: ADAPT — the odds-fusion architecture is the right pattern for GSE's market-relative learning lane, ported to NFL spread/total markets.
## Key metrics/methods (formulas where given, else "not specified")
- De-vigging: basic normalization `π_i = o_i/β` (2.1); Shin's procedure `π(z)_i = [z + √(z² + 4(1−z)(Σ o_i²/Σ o_i) − z)] / [2(1−z)]` (2.2), z fit by nonlinear least squares.
- Implicit-intensity system (3.2): `π^s_Win,m + π^s_Draw,m = P(y_m1 ≥ y_m2 | θ^s_m1, θ^s_m2)`; `π^s_Loss,m = P(y_m1 < y_m2 | θ^s_m1, θ^s_m2)`; score difference modeled as Skellam (Poisson-difference).
- Score model (3.3): `y_m1 | θ_m1, λ_m1 ~ Poisson(p_m1 θ_m1 + (1−p_m1) λ_m1)` — Poisson rates are convex combinations of historical θ and bookmaker λ, with `p_m· ~ Beta(a,b)`.
- Rate structure (3.4): `log(θ_m1) = μ + att_{t[m]1} + def_{t[m]2}`; seasonal AR(1) dynamics (3.5): `att_{t,τ} ~ N(μ_att + att_{t,τ−1}, σ²_att)`; priors μ ~ N(0,10), σ ~ half-Cauchy(0,2.5).
- Bookmaker level (3.7–3.8): per-match implicit rates across S=7 bookmakers ~ truncated normal around λ_m1.
- Evaluation metric (5.1): average correct probability `p̄ = (1/M) Σ_m Σ_{i∈Δ_m} p_{i,m} δ_im`.
## Data sources named
- football-data.co.uk: exact scores for Serie A, EPL, Bundesliga, La Liga, seasons 2007/08–2016/17; all three-way odds from 7 bookmakers (Bet365, Bet&Win, Interwetten, Ladbrokes, Sportingbet, VC Bet, William Hill).
- Train: 9 seasons (2007/08–2015/16); test: 2016/17 season.
## Findings (numbers and facts, not vibes)
- Out-of-sample average correct probability p̄: model vs Shin vs basic normalization — Bundesliga 0.4010 / 0.4100 / 0.4072; EPL 0.4349 / 0.4516 / 0.4480; La Liga 0.4553 / 0.4584 / 0.4549; Serie A 0.4430 / 0.4554 / 0.4507 — the fused model is slightly WORSE than raw de-vigged odds on this metric.
- Mixture weights center ~0.5: "the amount of information that stems from the bookmakers is comparable with that arising from historical information" (Fig. 3, 2754 Bundesliga matches).
- Posterior title probabilities 2016/17 preseason: Bayern 0.8168 (won, 82 pts); Man City 0.3904 but Chelsea won (P=0.1396 — attributed to unmodeled Conte hiring); Barcelona 0.5652 but Real Madrid won (0.3868); Juventus 0.592 (won, 91 pts).
- Betting strategies A/B (Fig. 7): "high positive returns for each league and each bookmaker" using model posteriors; raw odds "would always incur a sure loss" — the ledger flags this as the weakest link (post-hoc strategy choice, no walk-forward, profit magnitudes shown only in a chart, not tabulated).
- Method notes: MCMC H=5000 iterations, 1000 burn-in (WinBUGS + Stan); no code/data shared beyond football-data.co.uk.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the fused model underperforms raw de-vigged consensus on average correct probability — a calibrated caution about how much a history model adds on top of the market; the market is the strongest single signal.
- OTHER (market microstructure): the convex-combination fusion level `p·θ + (1−p)·λ` is a formal operator for fusing market consensus into the score model as a Bayesian data level (not just a CLV benchmark) — a new capability per the ledger, not a duplicate.
- OTHER (soccer domain): soccer 3-way odds have no NFL draw market; the implicit-intensity inversion must be re-derived for NFL spreads/totals (Skellam on point margins).
## Engine-actionable? (yes/no + one-line what)
Yes — port the odds→implicit-scoring-intensity→Poisson-rate fusion to NFL: historical team ratings as θ, spread/total-implied rates as λ, per-match learned mixture weights; INFERENCE: state-dependent weights (line age, injury news) would improve on the paper's static weight.

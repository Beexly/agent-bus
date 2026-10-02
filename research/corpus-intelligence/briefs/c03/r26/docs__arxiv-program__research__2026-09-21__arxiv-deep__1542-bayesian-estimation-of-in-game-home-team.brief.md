# docs/arxiv-program/research/2026-09-21/arxiv-deep/1542-bayesian-estimation-of-in-game-home-team.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2204.11777 (Maddox, Sides, Harvill 2022: "Bayesian estimation of in-game home team win probability for college basketball"). Tests five in-game win-probability estimators on 41,642 NCAA games; the dynamic beta prior adds almost nothing, while blending a time-weighted pre-game win probability with the in-game estimate cuts Brier ~11%. Verdict: ADAPT (the principle, not the literal machinery).
## Key metrics/methods (formulas where given, else "not specified")
- Five estimators: (1) MLE p̄_{t,ℓ} = n_{t,ℓ}/N_{t,ℓ} per (t,ℓ) cell; (2) Stern (1994) Brownian-motion probit: p̃ = Φ((ℓ + (1−t*)μ)/√((1−t*)σ²)), μ ≈ 5–6 points home edge, μ/σ ∈ [0.12,0.39] (Eq. 1); (3) Bayes with fixed beta prior (pseudo-wins/pseudo-losses); (4) dynamic Bayes: beta prior scale varies with (t,ℓ) — strong priors (up to beta(19,1)/beta(1,19)) only in extreme differential cells, weak near middle; early-game large differentials preserve substantial comeback mass, shrinking as time elapses; empty cells imputed with the most extreme posterior in the differential direction; (5) adjusted dynamic Bayes: linear combination of (4) with a time-weighted pre-game win probability p̂_p (weight on pre-game decays as the game progresses).
- Metrics: Brier B = (1/Q) Σ_t Σ_ℓ Σ_j (p̃_{t,ℓ} − y_j)²; misclassification MR = (FP+FN)/Q.
- Assumptions: beta–binomial conjugacy per (t,ℓ) window; win probability "relatively constant" within a 6-second × ±2-point window; pre-game ratings unbiased; regulation focus.
## Data sources named
ESPN play-by-play scraped in R (rvest), NCAA D1 men's basketball 2012–13 through 2019–20. Estimation: 30,789 games (2012–13 to 2017–18). Prediction: 10,853 games (2018–19, 2019–20, COVID-shortened). Pre-game win probabilities from daily team ratings (teamrankings.com-style). Analysis grid: t=0..2399 s × |ℓ|=0..104 pts, windows [t−3,t+3] × [ℓ−2,ℓ−2]. No repo or data link.
## Findings (numbers and facts, not vibes)
- 2018–19 Brier: MLE 0.1453, probit 0.1452, fixed-prior Bayes 0.1451, dynamic Bayes 0.1450, adjusted dynamic Bayes 0.1284 — 11.4% relative improvement over dynamic Bayes; MR 0.2183/0.2180/0.2182/0.2182/0.1870.
- 2019–20 Brier: 0.1397/0.1398/0.1396/0.1396/0.1261; MR 0.2084/0.2086/0.2081/0.2081/0.1827.
- Dynamic prior alone barely beats fixed-prior Bayes (0.1451 → 0.1450); essentially ALL the gain comes from the pre-game anchor.
- MLE shows pathological cells (Drexel's 34-point comeback produced p̄=1 cells); Bayesian versions smooth rare events via pseudo-counts.
- Limitations: no calibration analysis (Brier/MR only); windows asserted not tuned; regulation-only; college-basketball specifics limit direct transfer; pre-game prob quality drives the result and is not evaluated.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Time-decayed pre-game win-probability anchor drives the entire 11% Brier gain — anchoring in-game estimates instead of letting early scores overreact — OTHER (live win probability)
- Early-game regularization toward the anchor prevents MLE-style overreaction to first-quarter leads (a 14–0 NFL first quarter is the analogue of the basketball pathology) — OTHER (live WP)
- 2026-09-21 ledger verdict: portable template for GSE's live NFL win probability: pre-game anchor = no-vig market-implied WP, weight decaying from ~1 at kickoff to ~0 late — TRUST-SIGNAL
- Improvement direction: learn the blend-weight schedule w(t, game state) by minimizing held-out Brier rather than asserting it; add possession/down/distance/timeout state — SCHEME
- Adversarial note preserved: reject the claim that the dynamic prior itself drove gains (evidence: 0.1451→0.1450); reject the literal basketball cell machinery — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the principle into GSE's live NFL WP model: pre-game anchor = market-implied moneyline prob, in-game estimate regularized toward the anchor with time-decaying weight (learn w(t, game state) on held-out Brier, don't assert it), with acceptance gate: anchored blend beats pure market-implied WP on 2024–2025 held-out Brier AND calibration slope in [0.9, 1.1]; ~1 week on nflverse 2009–2025 play-by-play.

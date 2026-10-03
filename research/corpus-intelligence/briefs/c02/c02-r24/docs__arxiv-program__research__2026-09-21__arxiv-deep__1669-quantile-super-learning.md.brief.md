# docs/arxiv-program/research/2026-09-21/arxiv-deep/1669-quantile-super-learning.md

## What it is (1-2 sentences)
A Quantile Super Learner (QSL): ensembles multiple candidate quantile algorithms (discrete selection or convex combination) by minimizing cross-validated quantile loss, with finite-sample oracle inequalities in both i.i.d. and online/sequential settings, applied to solar power forecasting. Corpus verdict: ADAPT — a principled way to combine GSE's quantile/projection models, but it needs adaptation from continuous, bounded, stationary targets to GSE's nonstationary sports data.

## Key metrics/methods (formulas where given, else "not specified")
- Quantile loss: L^α(ψ)(x,y) = α|y−ψ(x)| if y>ψ(x), else (1−α)|y−ψ(x)|. Risk R_P^α(ψ) = E_P[L^α(ψ)]; the true conditional quantile minimizes it.
- Discrete QSL: κ̂_n = argmin_k of V-fold cross-validated empirical quantile risk R̂_n^α.
- Continuous QSL: convex combinations ψ̂_π^α = Σ_k π_k ψ̂_k^α over a finite grid Π_n on the K-simplex (cardinality growing at most polynomially in n); π̂_n = argmin_{π∈Π_n} R̂_n^α.
- Online QSL: at each time t, train candidates on all data before t, score on the new batch; κ̂_t = argmin_k of running empirical risk R̂_t^α (Eq. 25–27); multi-location batches (index set J) supported.
- Theorem 1 (i.i.d. oracle inequality): excess risk ≤ oracle excess risk + O(log n / √n) when K = O(n^a) and candidates output uniformly bounded functions.
- Theorem 2 (online oracle inequality): excess risk ≤ oracle excess risk + O(log log t / √t); more locations |J| → inequality kicks in sooner.
- Assumptions: A1/B2 unique quantiles a.s.; A2/B3 bounded outcomes |Y| ≤ C0; B4 Markov; B5 stationarity (same quantile functional across j,τ); B6 margin condition (density near the quantile bounded below by b_Q s^{q−1}).
- Candidate library used: quantile random forests (grf), GBM (lightgbm), quantile GAMs (qgam), quantile regression neural nets (qrnn), plain quantile regression (quantreg); compared against EWA and BOA from the opera R package.
- Intervals from paired lower/upper quantile estimates have NO finite-sample coverage guarantee (stated explicitly; only empirically investigated).

## Data sources named
- i.i.d. simulation: N1 ∈ {250, 500, 1000} training + N2 = 1000 validation; X = 5 covariates Uniform[0,1]; Y = sin(2X1) + |X2| − 0.5 X1 X3 + ⌊X4⌋ + ε, ε ~ N(0, 0.1); 50 replications; quantiles α ∈ {0.025, 0.05, 0.1, 0.5, 0.9, 0.95, 0.975}.
- Online simulation: same DGP with AR(1) errors ρ ∈ {0, 0.5, 0.9, 0.99}, T = 2000.
- Perovskite case study: 1,453 compounds (Materials Project via Chenebuah et al. 2021), 56 covariates; targets = DFT formation energy and bandgap.
- Solar GHI case study: 7 US locations (BON, DRA, FPK, GWN, PSU, SXF, TBL); 1-day-ahead 13:00 local satellite-measured irradiance; 2017–2019 burn-in, online from 2020-01-01; covariates = 50 ECMWF NWP ensemble members + solar zenith angle + lagged GHI.
- Code: https://github.com/herbps10/QuantileSuperLearner (R); in sl3 (i.i.d.) and opera (online) packages.

## Findings (numbers and facts, not vibes)
- i.i.d. sim (Table 2): QSL best or tied-best quantile risk for ALL quantiles × sample sizes. N1=1000, α=0.5: QSL 0.092 vs GBM 0.092, GRF 0.20, QGAM 0.27, QRNN 0.31, QReg 0.40. N1=250, α=0.025: QSL 0.033 vs QGAM 0.034, GBM 0.060. Coverage (Table 3, N1=1000): QSL 73.0%/89.7%/97.4% at nominal 80/90/95% — undercovers at 80%.
- Online sim (Table 4): QSL slightly better than EWA/BOA at most quantiles: ρ=0, α=0.5: QSL 0.27 vs EWA 0.29 vs BOA 0.30; ρ=0.9, α=0.5: QSL 0.34 vs EWA 0.36 vs BOA 0.38; ρ=0.99 all ~equal (0.56–0.61). Intervals (Table 5) undercover for all methods (nominal 80%: QSL 70.9% at ρ=0).
- Perovskite (Table 6, formation energy): QSL lowest CV quantile risk at all 7 quantiles: α=0.5: QSL 0.065 vs GBM 0.078, QRNN 0.079, QReg 0.094. Bandgap: QSL lowest/tied at 6/7 (α=0.5: QSL 0.30 vs GBM 0.30, QGAM 0.39). Coverage (Table 7): QSL 90%/95% intervals closest to nominal; formation-energy 80% interval: QSL 79.9% vs GRF 94.6%.
- GHI (Table 8): QSL lowest empirical risk in most location×quantile cells except α=0.5 where EWA/BOA tie or edge it (BON α=0.5: BOA 31.2, QSL 31.3, EWA 31.4; BON α=0.9: QSL 14.8 vs BOA 15.2 vs EWA 15.1). Coverage (Table 9): QSL best/tied at 5/7 locations (TBL 95% nominal: BOA 95.6%, EWA 92.6%, QSL 92.6%).
- Weight inspection (Fig. 1): no single candidate dominates; GBM gets higher weight for tail quantiles (10%/90%) than the median; weights vary by location — the ensemble genuinely adapts.
- Limitations: online sim refit candidates only once (t ≤ 1000); Theorem 2 needs stationarity (B5) which sports data violates; continuous QSL grid coarseness is an unexamined tuning choice.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Quantile Super Learner as the combiner for GSE's prop/fantasy quantile outputs (e.g., P(Yards > 82.5)) across multiple projection systems + market-implied quantiles — OTHER (ensemble meta-learner).
- Systematic interval undercoverage (73%/70.9% at nominal 80% in sims) as a calibration warning for any public-facing interval product — TRUST-SIGNAL.
- Multi-location (|J|) online formulation mapping to many simultaneous games, weights updated on trailing 8-week walk-forward windows — SCHEME (INFERENCE: a game-context/temporal adaptation structure).
- Proposed regime-gated weight vectors (pre/post key-injury, dome/outdoor, divisional) with the largest expected gains at tail quantiles (α ∈ {0.1, 0.9}) where candidate heterogeneity is biggest — SCHEME + TRUST-SIGNAL (tail-risk calibration).
- Hard fail condition: if weights collapse to a single candidate every week, reject as non-value-add over discrete selection — OTHER (methodology guardrail).

## Engine-actionable? (yes/no + one-line what)
Yes — build a continuous (convex-weight) QSL over GSE's per-prop quantile curves using trailing 6–8 weeks of resolved props, deriving fair over-probabilities from the combined quantile curve at the posted line; ADOPT if walk-forward mean quantile loss is ≥3% lower (relative) than simple-average baseline AND ≥1% lower than EWA, with no week worse than 5% above the best baseline; follow-on improvement: regime-gated weight vectors for tail quantiles.

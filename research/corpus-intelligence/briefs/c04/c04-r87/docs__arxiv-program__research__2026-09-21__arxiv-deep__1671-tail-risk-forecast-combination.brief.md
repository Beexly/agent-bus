# docs/arxiv-program/research/2026-09-21/arxiv-deep/1671-tail-risk-forecast-combination.md
## What it is (1-2 sentences)
Deep-read ledger of Storti & Wang (arXiv:2104.04918v2): a two-step finance framework (FC-WQ) that first combines a universe of VaR models separately at each quantile level via rolling-window quantile loss, then converts the combined quantiles into an Expected Shortfall forecast with Beta-density weighting estimated by a strictly consistent joint VaR–ES loss — evaluated on 6 equity indices through the 2008 crisis. Verdict in the file: ADAPT, re-expressed for sports tail quantities (blowout probability, expected margin conditional on cover).

## Key metrics/methods (formulas where given, else "not specified")
- Step 1 (per-level quantile combination): Q̂_t^{(C,α_j)} = c_{0,j} + Σ_i c_{i,j} Q̂_{t,i}^{(α_j)} (Eq. 10), grid α_1=0.005 < … < α_M=0.025 (M=3 or 5), n_mod=8 models; weights ĉ_{j,N+h} fit per level by minimizing rolling-window quantile loss (Eqs. 12–13); Chernozhukov et al. (2010) monotonization prevents quantile crossing.
- Step 2 (weighted quantile → ES): EŜ_t^{(FC-WQ)} = w_0 + Σ_{j=1}^M w_j Q̂_t^{(C,α_j)} (Eq. 11); w_j = Beta(j/M; a, b) density weights (Eq. 8); w_0 absorbs left-truncation bias; (w_0,a,b) estimated by minimizing the Fissler–Ziegel strictly consistent joint VaR–ES log-score (AL log-score, Eqs. 15–16) via Matlab fminunc.
- Joint score: S_t = −log((α−1)/EŜ_t) − (r_t − Q̂_t^{(C,α)})(α − I(r_t ≤ Q̂_t^{(C,α)}))/(α EŜ_t), jointly minimized at the true (VaR, ES).
- Quantile combination loss: QL̄_{t,N}(α_j, c) = (1/N) Σ_{k=1}^N (α_j − I_{t−k,j})(r_{t−k} − X̂_{t−k}c), X̂ = [1, Q̂^{(U,α_j)}].
- Beta weight: w(x;a,b) = x^{a−1}(1−x)^{b−1} Γ(a+b)/(Γ(a)Γ(b)).
- Design insight: model uncertainty lives in Step 1 (each level gets its own weights); Step 2 follows from the definition of ES as a tail-quantile average, so the combined ES is "purged of model uncertainty."

## Data sources named
Daily OHLC from Thomson Reuters Tick History (commercial), 2000–2015; six indices: S&P 500, Hang Seng, FTSE 100, DAX, SMI, ASX 200. Rolling in-sample window N ≈ 1871–1943; out-of-sample H = 2000 days starting January 2008 (includes GFC). No public code stated.

## Findings (numbers and facts, not vibes)
- VaR 2.5% violation MAD (VRate/α, target 1.0, Table 1): FC-WQ 0.0028 (best), CARE-AS 0.0031, EGARCH-t-HS 0.0035, CAViaR-AS 0.0038, GJR-GARCH-t 0.0128 (worst). Per-market FC-WQ VRate/α: S&P 1.04, Hang Seng 0.98, FTSE 1.00, DAX 1.18, SMI 1.32, ASX 0.90.
- VaR quantile loss (avg, Table 2): FC-WQ 164.2 (best), POT-EGARCH-t 164.3, EGARCH-t-HS 164.3, CAViaR-AS 164.9, GJR-GARCH-t 166.6 / EGARCH-t 166.4 / CARE-AS 166.6 (worst); S&P 500: FC-WQ 160.7 vs GJR-GARCH-t 162.9.
- Calibration rejections at 10% (Table 3): CAViaR-AS 1 (best), FC-WQ 2, GJR-GARCH-t 5, EGARCH-t 5.
- Joint VaR–ES AL log-score (avg, Table 4): FC-WQ-3 4257.6 (best), FC-WQ-5 4257.8, FC-SA-5 4265.8, FC-SA-3 4266.5, ES-CAViaR-Mult-AS 4266.5, GJR-GARCH-t 4314.8, EGARCH-t 4315.1 (worst). Win decomposes: combination beats individuals (FC-SA < CAViaR-AS-SA); Beta weighting beats simple averaging (FC-WQ < FC-SA); combining models beats single-model WQ.
- ES calibration rejections (Table 5): FC-WQ, FC-SA, CARE-AS least rejected; GJR-GARCH-t and EGARCH-t rejected on all 6 markets — yet FC-WQ includes them in the universe and still wins (weighting robustness).
- Stability: FC-WQ's per-step losses visibly more stable through 2009–2012; M=3 ≈ M=5 (negligible gain from finer grids).
- File's GSE gate: walk-forward mean quantile loss ≥ 2% below simple-average baseline at ≥4 of 5 grid levels AND joint tail-functional loss ≥ 2% below FC-SA, per-level VRate within [0.7α, 1.3α]; hard fail if any level's weights collapse to a single model >80% of weeks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: quantile-curve ensemble methodology / tail-risk products — no football signal content.
- TRUST-SIGNAL (secondary): the weighting-robustness finding (worst models included in universe, still wins) is a trust argument for per-level combination over model selection.

## Engine-actionable? (yes/no + one-line what)
yes — build GSE-FCWQ: per-quantile-level linear combination (with intercept + monotonization) of ≥4 model margin/total quantile curves on a grid like α∈{0.05,...,0.50}, weights fit by trailing-8-week quantile loss, then a Beta-weighted tail functional (e.g., P(blowout), expected margin conditional on cover) estimated with a strictly consistent joint loss; ~2 weeks effort per the file's spec.

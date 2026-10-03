# arxiv-program/research/2026-09-21/arxiv-deep/1511-efficient-market-dynamics-betfair-horse-racing.md
## What it is (1-2 sentences)
Deep read of arXiv:2402.02623 (Tondapu, Microsoft): an empirical stylized-facts study of Betfair UK horse-racing tick data, comparing betting-exchange informational-efficiency fingerprints (distribution shape, tail index, autocorrelation decay, volatility clustering) against financial markets. Ledger verdict: ADAPT — lift the full efficiency-test battery as a line-absorption benchmark for GSE's NFL odds feeds.

## Key metrics/methods (formulas where given, else "not specified")
- Returns: R_t = ln(P_t) − ln(P_{t−1}) (log/simple/absolute/squared returns), 5% commission deducted, back and lay side.
- Unconditional distribution fit vs generalized Gaussian f(x,β) with β=1.19 best (β=1 Laplace, β=2 Gaussian).
- Hill tail-index estimator across k=1–10% tail fractions.
- Two-sample Kolmogorov–Smirnov test for gain-loss asymmetry: KS critical value D_c = c(α)·√((n_a+n_b)/(n_a·n_b)).
- ADF + KPSS stationarity tests per market (73 markets); autocorrelation of tick returns; power-law fit to absolute-return autocorrelation decay (nonlinear autocorrelation exponent α).
- GSE transfer: decision rule — fit α on NFL feed; if α ≫ 0.4, lines absorb news fast and CLV must be captured early; favorite-longshot bias check via regressing NFL moneyline payouts vs empirical win rates; synthetic-data generation using fitted β≈1.19 generalized Gaussian + α≈0.62 decay.

## Data sources named
Betfair historical data, PRO plan (tick-by-tick, paid), one month of UK horse racing: 1,056,766 price-change signals across 73 markets / 10 events, messages every 50 ms, average 9.86 runners per market, mean matched-bet interval ≈ 50 s (SD 450 s). JSON fields: runner change (ltp, atb/atl, spb/spf/spn/spl, tv, trd) + market definition (inPlay, numberOfActiveRunners, betDelay, marketBaseRate) + winners file. No public download URL.

## Findings (numbers and facts, not vibes)
- Unconditional log returns over 41,588 intervals: mean −0.0018, SD 4.0323, skewness +0.0241, kurtosis 1.0994 (platykurtic — opposite pattern vs finance).
- Hill estimator −0.348 to −0.877 for k 1–10% (light tails).
- Positive/negative return halves: n=57,648 each, means 0.0001, SDs 3.769/3.628, kurtosis 1.362/1.325 — KS test D=0.0068 < D_c=0.0080, p=0.1347 — no gain-loss asymmetry.
- ADF rejects unit root in all 73 markets (e.g. −5.02 to −8.52, p≈0).
- Autocorrelation: large negative first lag, then rapidly negligible — no exploitable linear structure.
- Absolute-return power-law exponent α: mean 0.62435, SD 0.3052, range 0.1645–1.9755 — faster decay than financial 0.1–0.4 → quicker information absorption.
- Review finding: favorite-longshot bias strong on exchanges; exchanges more informationally efficient than dealer markets.
- Limitations: one-month sample; Hurst exponent claimed in abstract but deferred to future work (abstract overclaims); references [1]–[16] largely unrelated padding; no code released.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-efficiency test battery for NFL line-movement feeds — line-absorption speed diagnostic; CLV-timing decision rule (per-book α ranking as placement-routing rule); favorite-longshot bias check for fair-price conversion.

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the five-statistic battery (generalized-Gaussian β fit, Hill tail index, ADF/KPSS, first-lag autocorrelation, absolute-return decay α) on GSE's NFL opening→closing line snapshots to rank books by information-absorption speed and route edge bets to slow books.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0245-order-flows-and-limit-order-book.md

## What it is (1-2 sentences)
Equities market-microstructure study of "meso-scale" (minutes) limit order books: volume-bucketed Nasdaq ITCH data shows price moves are driven about as much by limit-order flows (maker provision/cancellation) as by trade imbalance, restoring linearity via a net-liquidity measure, and identifies hockey-stick one-sided flow patterns plus a scarce-liquidity detector. The deep-read file's verdict is ADAPT for GSE's thin sports-betting market-microstructure lane: port the measurement framework to prediction-market order books, not the equities parameters.

## Key metrics/methods (formulas where given, else "not specified")
- Volume bucketing: aggregate ticks into buckets of fixed executed market volume V ∈ {0.25%, 1%, 2%} of ADV (not time-based)
- ΔP = g(TI) + ε — GAM penalized spline (R mgcv), documents S-shape of price response vs trade imbalance TI_k = (VM^B_k − VM^A_k)/V_k
- Net liquidity: ΔP = α₀ + α₁TI + α₂(VL^B − VL^A) + ε; NetLiq := TI + β·VL, β = α₂/α₁; GAM ≈ linear on NetLiq → linearity restored
- Scarce liquidity: SL^j_k = I{ε̂_k ≥ 1.5·StDev} (ask) / I{ε̂_k ≤ −1.5·StDev} (bid) — ~6% of buckets per side; logistic regression logit π^j = Σ φ^{SL,j}_r(X)
- Predictor horse race: LM (stepwise), LASSO (CV), MARS, Random Forest — ΔP = Σ_r φ_r(X) + ε; static (D^j_1, D_2, PI_N, S, BI, time-of-day) + dynamic (contemporaneous/lagged VL, TI, ΔP, TIMA, cancellation proportion PC^j)
- TIMA (Eq. 14): TIMA^{(β)}_{i+1} = e^{−β|O^M_i|}TIMA^{(β)}_i + (1−e^{−β|O^M_i|})sgn(O^M_i), β = 0.5/V

## Data sources named
- Nasdaq ITCH TotalView Level-2 order-book data (direction/size of market executions, limit additions/modifications/cancellations for i ≤ 30 levels; 10:00am–3:45pm; hidden executions removed, <10% of volume)
- 6 liquid large-tick stocks: MSFT, TEVA, BBBY (first 100 trading days of 2011); INTC, ORCL, NTAP (last 100 days of 2013)
- No code links; analysis in R (mgcv, randomForest)

## Findings (numbers and facts, not vibes)
- S-shape: ΔP vs TI is nonlinear (saturates/declines at |TI|→1), persistent across all 6 tickers and 10 bucket sizes; conditional on TI_k=0.5, ΔP_k ranges −0.08 to 0.16 — TI alone has low predictive power [OTHER]
- Net liquidity restores linearity: R² jumps from ~0.4 (TI only) to ~0.7 (e.g., MSFT 1% ADV: 0.469 → 0.785; ORCL: 0.314 → 0.708; INTC 2%: 0.421 → 0.767); limit flows "at least as significant" as market trades [OTHER]
- β̂ (limit vs market impact): highly stable ≈ 0.5–0.7 at 1–2% ADV (0.2–0.49 at 0.25%); additions and cancellations have statistically the SAME impact [OTHER]
- Hockey-stick asymmetry: one-sided limit provision declines past |TI| ≈ 0.3 (makers avoid adverse selection); resilience is driven by one-sided flows, not netted aggregates [OTHER]
- R² ladder: TI only ~30% → +VL^A,VL^B ~70% → +LOB shape (PI, D_2, S) ~80% → +all lags ~81–82%; top-level depth D₁ INSIGNIFICANT, deeper metrics (D_2, PI_N over ~3–5 levels) matter; TI×PI, VL^j×PI^j, TI×S interactions significant [OTHER]
- Scarce-liquidity logistic: when the model fires, correct 70–80% of the time; but predicts <half of all occurrences (more false negatives than true positives); major predictors: VL^B (+), TI (−), VL^A (−), D^{A,B}_2 (−), cancellation proportion (high) [OTHER]
- ~5.5% of ORCL buckets had negative net limit flow (range 2–10% across assets); market orders only 2–4% of total messages [OTHER]
- Negative results: co-movement ρ^j_t unstable (dropped); VPIN/toxicity measures weak in equities; SL shows clustering but no one-sided ACF [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — equities market-microstructure; no football-substance findings. The lane it fills for GSE is the betting-market microstructure gap (#3 in the existing-research map): order-flow decomposition and steam-move analogues for Kalshi/Polymarket NFL contracts
- TRUST-SIGNAL — the scarce-liquidity detector (residual-based, 1.5-SD price moves given flow) is a regime flag for "do not bet into the move," a trust input to the betting engine rather than a pick signal

## Engine-actionable? (yes/no + one-line what)
yes — adapt volume bucketing + taker-imbalance/maker-flow decomposition + the hockey-stick steam detector to Kalshi/Polymarket NFL contract order books: estimate each market's β, flag scarce-liquidity regimes where outsized moves are imminent, and gate taker bets accordingly

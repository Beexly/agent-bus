# arxiv-program/research/2026-09-21/arxiv-deep/0836-kelly-vix-hybrid-put-writing.md
## What it is (1-2 sentences)
Research deep-read of arXiv:2508.16598v1 (Wysocki, 2025): a full position-sizing laboratory comparing pure Kelly fractions, VIX-rank-based scaling, and a multiplicative hybrid on systematic SPXW 0–5 DTE put writing, with honest cost modeling. Reader verdict: ADAPT — the hybrid sizing formula transfers to GSE stake sizing, but the stated in-sample/out-of-sample windows overlap and must be discounted.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly sizing: f*(p, a, b) — Kelly fraction from win probability p and win/loss payoffs a, b, estimated via Monte Carlo GBM; contracts Q_t = floor(PV_t / M_t · f*), portfolio value PV_t, per-contract margin M_t.
- VIX-rank scaling: scale size by (1 − P_rank(VIX_t, W)) — write fewer puts when VIX is high in its lookback window W.
- Hybrid (quoted): Q_t = ⌊ (PV_t / M_t) · f*(p,a,b) · (1 − P_rank(VIX_t, W)) ⌋ — multiplicative edge-based (Kelly) × regime-based (VIX) sizing.
- Grid over DTE (0–1 vs longer), moneyness (5%–10% OTM highlighted), sizing variants; development-period selection, then nominal 2024 holdout.
- Metrics: annualized return, volatility, max drawdown, information ratio. Baselines: S&P 500 buy-and-hold, CBOE PUT index.

## Data sources named
- SPXW 0–5 DTE put options, 2018–2024 (options data proprietary/vendor; method replicable on any options tape).
- Volatility inputs: close-to-close, Garman–Klass, and Yang–Zhang estimators; VIX level and VIX percentile rank over lookback W.
- Costs: Interactive Brokers margin requirements, commissions, 50% bid-ask spread crossing on every trade.
- Capital: $5M starting. Kelly fraction calibrated via Monte Carlo GBM. No code stated.

## Findings (numbers and facts, not vibes)
- Development: 0–1 DTE, 5%–10% OTM identified as strongest risk-adjusted region; Kelly variants reached 20%–25% annual returns in the claimed best region; hybrid high-return configs ≈40%–45% annualized; balanced hybrid configs 10%–11% with information ratios ≈3.
- 2024 (nominal OOS): several configurations 14%–23% annualized with lower volatility/drawdown than buy-and-hold.
- CRITICAL: paper states "in-sample" as 2018–2024 and "out-of-sample" as 2024 — the OOS year overlaps the IS window; 2024 results cannot be treated as a clean holdout. Treat development numbers as in-sample-selected (max-over-grid selection bias; 40%–45% figures are grid maxima).
- GBM calibration understates tail gap risk; 0–1 DTE put writing has extreme left-tail exposure the 2018–2024 sample may not contain.
- Existing-research map: Kelly mentioned 12×, zero papers read — this is the third Kelly-family ledger (0834, 0835); no existing volatility-regime stake sizing in the repo.
- Proposed GSE overlay: base size from 0835's constrained Kelly × (1 − rank(recent realized pick-PnL volatility, 90-day window)) so stakes shrink after volatile stretches. Backtest on 2024 engine picks, walk-forward monthly; metric = Sharpe of daily bankroll changes and max drawdown. Pass gate: max drawdown drops ≥15% vs Kelly-only at equal-or-better Sharpe.
- Improvement experiment: replace VIX-rank with drawdown-proximity scaler: scale = 1 − (current drawdown / max tolerable drawdown), CPPI-style dynamic sizing on bankroll itself. Hypothesis: bankroll-aware scaling dominates market-regime scaling.
- Effort estimate: 1 day on top of the 0835 implementation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Stake-sizing lane: hybrid Kelly × regime sizing transfers to GSE bankroll staking — base Kelly from 0835 with a (1 − rank(PnL-vol, 90d)) dynamic overlay; the VIX-rank idea maps to a GSE "market heat" regime indicator (recent pick volatility or CLV dispersion).
- [OTHER] Methodological warning: OOS/IS window overlap and max-over-grid selection bias mean the paper's headline numbers earn no prior credit — the burden of proof is on a GSE-internal walk-forward backtest.
- [TRUST-SIGNAL] Relevance caution: options market microstructure ≠ sportsbook markets; the transferable part is the sizing formula, not the put-writing edge; GBM tail-risk understatement is an honest-limits note for any staking model.
- [OTHER] CPPI-style drawdown-proximity scaler proposed as the improvement experiment over the market-regime scaler.

## Engine-actionable? (yes/no + one-line what)
Yes — build the regime overlay (constrained Kelly × (1 − rank(90-day realized pick-PnL volatility))) on top of the 0835 implementation (~1 day) and walk-forward backtest on 2024 engine picks with the ≥15% max-drawdown-reduction gate before adopting.

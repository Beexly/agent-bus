# arxiv-program/research/2026-09-21/arxiv-deep/1733-decentralized-prediction-markets-sports-books.md
## What it is (1-2 sentences)
A full-text read (19,679 words) of Amini, Bichuch & Feinstein (2023), arXiv:2307.08768, generalizing AMMs from binary outcomes to general probability spaces via liquidity-based utility functions, with marginal-price oracles, post-opening liquidity provision/withdrawal, and fee-compensated LPs — numerically tested on Super Bowl LVII. Verdict in the ledger: ADAPT — the liquidity-based-utility AMM framework with marginal-price oracles and the Super Bowl LVII result (optimal fee γ ≈ 1% yielding 1–6% expected return over 2 weeks at much tighter spreads than the book) gives GSE a synthetic fair-price oracle and a liquidity/slippage diagnostic; adapt as a cross-book mispricing detector, not a sportsbook operator.

## Key metrics/methods (formulas where given, else "not specified")
- AMM cost via utility preservation: C(q) = min{Δx : u(x₀+Δx, y₀−s) ≥ u(x₀, y₀)} for a share purchase s — the minimal payment preserving liquidity-based utility u(x, y) over cash x and share vector y
- Marginal (instantaneous) price oracle: π(q) = ∇C(q); bid/ask marginal prices from one-sided directional derivatives of the cost function — spreads emerge from utility curvature
- Liquidity add/remove: priced at the current marginal oracle so existing LPs are not diluted
- Fees: explicit fee γ compensating LPs; LP expected profit = fee income − adverse-selection (loss-versus-rebalancing) cost; fee revenue vs adverse-selection loss tradeoff determines the optimal fee
- Utilities tested: logarithmic utility and Liquid StableSwap utility
- Deterministic backtest: normalize ask probabilities to a midprice, reconstruct LP liquidity and profits along the realized Super Bowl LVII price path
- Stochastic backtest: Monte Carlo with 500 price paths, 1-minute time step, Brownian-motion true-probability dynamics at volatilities σ ∈ {5%, 25%, 50%}, calibrated to the Super Bowl LVII setting; fees γ ∈ {0%, 0.5%, 1%, …, 5%}

## Data sources named
- Deterministic backtest: Super Bowl LVII (Kansas City vs Philadelphia) money-line archive from Bookmaker via pregame.com odds archive (https://pregame.com/game-center/193165/odds-archive); time series of quoted implied bid/ask probabilities for KC (PHI derived as complements)
- Stochastic backtest: 500 Monte Carlo paths as specified above — no real data
- No packaged dataset; no public code or data artifact identified

## Findings (numbers and facts, not vibes)
- Optimal fee ≈ γ ≈ 1%, yielding significant expected profits of between 1% and 6% return in a 2-week period (across the σ grid), at a much lower bid-ask spread than Bookmaker quoted
- Deterministic illustration at γ = 1% shows the AMM creating a "win-win": LPs earn optimized expected profits while takers face a more efficient (tighter) market than the book
- The AMM with ~1% fee dominates the traditional sportsbook on both LP profit and taker spread in this single-event test
- No head-to-head accuracy numbers — not a forecasting paper
- Acceptance gate stated for GSE's oracle adaptation: ADAPT is confirmed if the oracle-mid predicts the direction of subsequent book-specific line moves at ≥ 58% on a 4-week sample (paired test vs 50%, p < 0.05), with ≥ 150 flagged instances; REJECT the oracle as a mispricing detector if the hit rate is within noise of 50% — then the log-utility curve adds nothing over a simple cross-book median
- Reproducible test specified: The Odds API NFL moneyline bid/ask (or best-back/best-lay across books) for 4 weeks of the 2025 season; metric = hit rate of oracle-flagged mispricings — do books flagged >1% off the oracle mid move toward the oracle by kickoff (CLV test)? Baseline: random flags at 50%
- Improvement experiment proposed: replace the static logarithmic utility with a time-varying liquidity parameter fit from GSE's line-move data (liquidity deepens toward kickoff), and invert the fee logic — estimate each book's effective fee from its spread and test whether books with higher effective fees get picked off less (their lines move less post-flag); turns the paper's LP-design tool into a book-profiling instrument (sharp low-fee vs recreational high-fee venues)
- Liquidity diagnostic proposed: invert the framework — from observed cross-book spreads, back out the implied LP fee γ* each book is effectively charging; track γ* over the week as a market-tightness index (falling γ* into the weekend = sharpening market)
- Limitations flagged: single event (Super Bowl LVII), one matchup, one book's archive — no cross-event or cross-sport validation; the 1–6% figure is conditional on this calibration; deterministic test assumes the terminal mid-price equals the true probability (uses outcome-implied "truth" retrospectively); Brownian true-probability dynamics are a modeling convenience — real sports probabilities jump on news; paper explicitly does not model in-game information evolution; AMM mechanics do not describe how real sportsbooks operate (books shade, limit, and balance flow rather than run constant-utility curves); no informed-trader/adverse-selection microstructure beyond the σ parameter; no comparison to real bookmaker P&L
- Overlap note: existing GSE market-microstructure lane covers de-vigged consensus and devig/parlay build specs (docs/ops/2026-08-21-BUILD-SPECS-devig-parlay.md); the marginal-price oracle is a NEW capability — a synthetic fair-price generator from a liquidity-utility curve

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, SCHEME, TRUST-SIGNAL, OTHER)
- TRUST-SIGNAL: The marginal-price oracle is a synthetic fair-price generator independent of any single book — serving the trust-target intake as an external validation gate: books whose quotes deviate from the oracle mid by more than the paper's implied ~1% fee band get flagged as candidate mispricings for manual review before the engine trusts and sizes a pick off that price.
- OTHER: The per-book implied-fee inversion (backing γ* out of observed cross-book spreads, tracked over the week as a market-tightness index) serves the calibration/sizing program as a book-profiling instrument — distinguishing sharp low-fee venues from high-fee recreational ones directly informs line-shopping guidance and which book's price to weight in consensus.
- OTHER: The ≥ 58% CLV-convergence test (p < 0.05, ≥ 150 flagged instances) is a concrete, pre-registered acceptance gate for whether the log-utility oracle adds anything over GSE's existing cross-book median consensus — adopt-or-reject discipline for the market-microstructure lane.
- QB-BEHAVIOR, COACHING, OL, SCHEME: no connection in this paper — it is pure market-microstructure theory with a single Super Bowl backtest; nothing about on-field play.

## Engine-actionable? (yes/no + one-line what)
Yes — build the log-utility marginal-price oracle on multi-book NFL moneyline snapshots as a mispricing detector (flag >1% deviations) plus per-book implied-fee γ* profiling, gated on ≥ 58% CLV-convergence at p < 0.05 over 4 weeks.

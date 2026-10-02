# arxiv-program/research/2026-09-21/arxiv-deep/1733-decentralized-prediction-markets-sports-books.md
## What it is (1-2 sentences)
A theory paper (Amini, Bichuch, Feinstein, arXiv:2307.08768) building a liquidity-based-utility AMM framework for prediction markets that generalizes binary outcomes to general probability spaces, with marginal-price oracles, post-opening liquidity provision, and fee-compensated LPs — backtested on Super Bowl LVII moneyline data. Verdict: ADAPT — adapt the oracle as a cross-book mispricing detector, not as a sportsbook operator.
## Key metrics/methods (formulas where given, else "not specified")
- Liquidity-based utility u(x,y) over cash x and share vector y; AMM cost C(q) = min{Δx : u(x₀+Δx, y₀−s) ≥ u(x₀,y₀)}; marginal (instantaneous) price π(q) = ∇C(q); bid/ask from one-sided directional derivatives of C.
- Liquidity add/remove priced at the current marginal oracle so existing LPs aren't diluted; explicit fee γ; LP expected profit = fee income − adverse-selection (loss-versus-rebalancing) cost.
- Utilities tested: logarithmic utility and Liquid StableSwap utility; Monte Carlo: 500 price paths, 1-min steps, Brownian true-probability dynamics at σ ∈ {5%, 25%, 50%}, fees γ ∈ {0%, 0.5%, …, 5%}.
- Assumptions: utility-based (not order-book) price formation; terminal mid-price of external data = true probability; no informed-trader microstructure beyond σ; explicitly does not model in-game information evolution.
## Data sources named
Super Bowl LVII (KC vs PHI) moneyline archive from Bookmaker via pregame.com odds archive (public webpage); no public code or packaged dataset.
## Findings (numbers and facts, not vibes)
- Optimal fee ≈ γ ≈ 1%, yielding 1–6% expected return over a 2-week period (across the σ grid) at much tighter spreads than Bookmaker quoted.
- At γ = 1% the AMM creates a "win-win": LPs earn optimized expected profits while takers face a tighter market than the book.
- Single event (Super Bowl LVII), one book's archive — no cross-event or cross-sport validation; deterministic test assumes terminal mid-price = true probability (retrospective); AMM mechanics don't describe how real books operate (books shade, limit, balance flow).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the marginal-price oracle is an independent synthetic "fair price" for detecting cross-book mispricing — books deviating >~1% fee band from the oracle mid are candidate mispricings; inverting the framework backs out each book's implied LP fee γ* as a market-tightness index (falling γ* into the weekend = sharpening market).
- OTHER: book-profiling instrument — high-effective-fee vs low-fee "sharp" venues, directly actionable for line-shopping guidance; new capability vs the existing de-vigged consensus/parlay specs.
## Engine-actionable? (yes/no + one-line what)
Yes — fit a log-utility AMM marginal-price oracle on GSE's multi-book NFL moneyline snapshots, flag books >1% off the oracle mid, and validate via CLV (flagged books converge toward the oracle ≥58% of the time on a 4-week sample).

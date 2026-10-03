# arxiv-program/research/2026-09-21/arxiv-deep/1608-arbitrage-analysis-in-polymarket-nba-markets.md
## What it is (1-2 sentences)
ADAPT-ledgered deep read of arXiv:2605.00864 measuring algorithmic arbitrage frequency, duration, and profitability in Polymarket NBA game markets from 75M high-frequency limit-order-book snapshots (Feb 4 – Mar 4, 2026), split into single-market (Yes/No mispricing) and combinatorial (moneyline vs spread) arb detection.
## Key metrics/methods (formulas where given, else "not specified")
- Long arb condition: Ask_A + Ask_B < 1.00; short arb (mint-and-sell): Bid_A + Bid_B > 1.00; combinatorial (ML vs spread): Ask(ML_A) + Ask(Spread_dog) < 1.00 with unified state machine T_U = T_ML ∪ T_S and strict forward-fill P_M(t_n) = P_M(t_i), t_i = max{t ∈ T_M | t ≤ t_n}
- Episode duration: Valid_Duration_n = min(t_{n+1} − t_n, C_phase), C_phase = 1800 s pre/post-game, 300 s in-game; trust-ceiling capping; "one-shot" profit paradigm (max realizable per episode, evaluated $100/episode capped and uncapped)
- Execution filters: top-of-book only, $10 USDC minimum bottleneck liquidity, 500 ms micro-desync clustering, strict post-game exclusion (median post-game spread 7,532.65 bps), mirrored-liquidity dedup
- "Middle" jackpot: if final margin Δ in (1, h], both legs pay → $2.00 payout; none realized ex-post
## Data sources named
Polymarket CLOB off-chain `GET /book` endpoint (Level 1 top-of-book), 75,088,497 snapshots across 173 NBA games, 3,042 markets single-market / 8.59M combinatorial states; proprietary collection, no code or data released
## Findings (numbers and facts, not vibes)
- Single-market: 37 raw episodes → 30 (81.1%) post-game artifacts excluded → 7 valid in-game episodes; 0.0001% of time in arb; median duration 3.614 s; capped profit $210.19 aggregate (one blowout outlier; ex-outlier median yield 11.0%, $11.01/episode); uncapped $4,418.44
- Combinatorial: 523 candidates → 233 post-game excluded → 290 active episodes (279 in-game); median 2.00 episodes/game; median duration 16.0 s; median yield 101.01 bps; capped profit $559.59 vs uncapped $2,032.75; 76.9% of episodes liquidity-constrained, average executable size 14.79 shares
- Liquidity median bid-ask spreads: pre-game 392.20 bps; in-game 1030.90 bps; post-game 7532.65 bps; 3 moneyline vs 3 spread single-market episodes ($5.10 vs $194.08 capped) — spreads show deeper liquidity vacuums; 85.7% of episodes could absorb $100
- Polling constraint 3.6–5.5 s per market (arb frequency is a lower bound, durations are upper bounds); Polymarket NBA volume $51M (2024) → $0.89B (2025), ~17.45×
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- LOB-snapshot arb scan methodology is directly reusable as GSE's live market-efficiency benchmark: OTHER
- Combinatorial ML-vs-spread monitor gives the "market sharpness" baseline against which GSE's CLV edge is judged: OTHER
- Cross-venue (Polymarket↔Kalshi) arb extension proposed by the ledger — dislocations persist longer cross-venue because no single market maker bridges them: OTHER
- Near-zero arb persistence finding (0.0001% time) tells GSE when its CLV edge is structural vs. discountable in a soft market: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — implement single-market Ask/Bid-sum scan + ML-vs-spread combinatorial monitor as nightly market-sharpness digest for GSE's CLV machinery; acceptance gate: reproduce sub-10-episodes-per-3000-markets efficiency on NFL data with zero post-game false positives.

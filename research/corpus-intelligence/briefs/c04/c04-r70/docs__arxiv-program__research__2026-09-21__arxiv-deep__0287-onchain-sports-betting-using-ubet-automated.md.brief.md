# docs/arxiv-program/research/2026-09-21/arxiv-deep/0287-onchain-sports-betting-using-ubet-automated.md
## What it is (1-2 sentences)
Deep read of arXiv:2309.12333v1 (Im, Kondratskiy, Harvey, Fu — UBET Sports, 2023): an automated market maker for on-chain sports betting that prices conditional tokens off external fair prices (rather than constant-product curves) to minimize liquidity-provider impermanent loss. Ledger verdict: REJECT — vendor whitepaper for UBET's own on-chain sportsbook; no prediction or betting-edge method; AMM mechanics the corpus already covers.
## Key metrics/methods (formulas where given, else "not specified")
- UAMM swap: swap(dτ_In;Γ) piecewise: (i) α·Δτ_Out + (ρ−α)(Rτ_Out − TB) if Rτ_Out − Δτ_Out ≤ TB ≤ Rτ_Out; (ii) Δτ_Out if TB ≤ Rτ_Out; (iii) Rτ_Out − TB²/(Xτ_Out + Δτ_Out) otherwise; with Δτ_Out = ρ·dτ_In, ρ = fτ_In/fτ_Out (fair exchange rate), α = Rτ_Out/(Xτ_Out + Δτ_Out), TB² = Xτ_Out·Rτ_Out.
- LP shares: s_lp = dτ_0 · TS/TV; pool value TV = Σ fτ_k·Rτ_k. Metrics: EV(t), EIP(T) (probability-weighted impermanent PnL), EPP(T) (realized permanent PnL), TP = M·EPP.
- Conditional-token framework (Gnosis): mint K outcome tokens per 1 unit collateral (USDC); bet = keep τ_i + swap other τ_j for τ_i via UAMM; oracle resolves; winners redeem 1:1.
- Experiments: simulations only — binary/ternary markets; funding $20k/$50k/$100k; true probs {20%,35%,50%,65%,80%}; wager sizes from scraped Polymarket sports transactions (Polygonscan); odd-rejection threshold ~ N(0.045, 0.05).
## Data sources named
None real — pure simulations. No code repo, no contracts, no simulation code. Authors affiliated with UBET Sports (ubetsports.io).
## Findings (numbers and facts, not vibes)
- Full-market simulation (100 trials, $10k funding): 1,203 bets, $54,107 volume, EPP ≈ +$19.93 ± $3.13 (0.0019%), +$1,372 ± $18.8 (0.137%) with 2.5% fees.
- Single-market: pool balances stay near $10k initial; rejection rate ~14.9% for (50%,50%), ~50% for (80%,20%) markets.
- UAMM shows permanent gain on average where Uniswap constant-product shows permanent loss (magnitudes in figures, not fully tabulated).
- "Low vigorish" claimed but no numeric vig reported. A stray "[TODO: Check whether the update happens before or after]" in §4.1 signals an unfinished manuscript.
- Core circularity: simulations reference true probabilities the simulator itself generated; fair-price estimation — the hard problem — is assumed solved ("remains an open question").
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no engine use — GSE consumes market prices rather than making markets or providing liquidity; conditional-token mechanics already covered by corpus prediction-market docs.
## Engine-actionable? (yes/no + one-line what)
No — vendor whitepaper; the simulations assume the fair-price estimation problem solved, which is precisely the problem GSE exists to solve.

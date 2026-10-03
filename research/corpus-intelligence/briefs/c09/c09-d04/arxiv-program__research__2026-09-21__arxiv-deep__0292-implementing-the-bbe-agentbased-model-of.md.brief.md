# arxiv-program/research/2026-09-21/arxiv-deep/0292-implementing-the-bbe-agentbased-model-of.md
## What it is (1-2 sentences)
Cliff, Hawkins, Keen & Lau-Soto (2021, arXiv:2108.02419v1) implement BBE (Bristol Betting Exchange), an agent-based model of an in-play betting exchange for track-race events, as a synthetic data generator with known ground truth. Verdict in-file is ADAPT: the race physics is horse-racing-specific, but the architecture (synthetic-data generator, rational-predictor bettor agents calibrated by dry-run count, limit-order-book matching engine) ports to NFL live-betting research.

## Key metrics/methods (formulas where given, else "not specified")
Race dynamics: d_c(t+δt) = d_c(t) + S_c(t); S_c(t,f_r,d) = {R_c(t,d)·P_c(f_r,p_c)·δ(v_c) if Δ_c(t) > θ_c; R_c(t,d)·δ_min otherwise}, where Δ_c(t) = d_{i⁺}(t) − d_c(t), δ_min = min(S_c(t−δt), S_{i⁺}(t−δt)). Matching engine: standard limit-order-book semantics (backs matched to oldest unmatched lays at same price, partial matches stay active, unmatched bets expire at close with stakes returned, ~5% commission on winnings). Bettor agents: RP(d) Rational Predictors (d dry-run race simulations aggregated frequentist; d=0 = random, d→∞ ≈ omniscient), LinEx (linear extrapolation of mean speed over past N seconds), LW (leader wins), UD (underdog), BTF (back the favourite), RB (representative bettor with stake clustering on 2/5/10 multiples, favourite-longshot bias), ZI (zero-intelligence noise). Cross-implementation replication via Kruskal–Wallis nonparametric test over n_r! finish-order PMFs from R i.i.d. runs.

## Data sources named
No empirical dataset — synthetic only. Code: Yepadee/Bristol-Betting-Exchange (multi-core OpenCL MCM), keenjam/BettingExchange (multi-threaded MTP), RobertoLauSoto/BristolBettingExchange (single-threaded STP).

## Findings (numbers and facts, not vibes)
- Multi-core GPU implementation runs ≈1000× faster than single-threaded (three orders of magnitude); MTP no faster than STP because it parallelises bettors, not races.
- GPU scaling is nonlinear once SIMD lanes saturate; coefficient of variation ≈ 0.005 in close-up scaling figure.
- Dry-run cost illustration: one 5-min race with B rational RP(d=50) bettors updating once per second needs 1 + 15,000×B dry-run simulations per race — motivating the GPU implementation.
- No accuracy/profit numbers — implementation/MVP paper, not a strategy paper; no calibration to real exchange data; win-markets only; no latency; no market suspension at race end.
- Betting beliefs re-evaluated every 10 s in the illustrative 5-competitor, 2000 m, <6-min race example.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: synthetic live-market data generator (SDG) philosophy — known ground truth, unlimited labelled data for data-hungry models; fills a gap for training GSE live-betting models where second-by-second NFL odds + game-state data are expensive/unavailable.
- OTHER: market microstructure — the RP(d) dry-run mechanism parameterises bettor/market rationality by simulation count, a ready-made way to model market information level in steam-move studies; steam-chaser/sharp/public archetypes map to follower/informed-bettor dynamics.
- OTHER: stress-testing — synthetic tapes can stress the Kelly sizing module under adversarial conditions (flash crashes, steam runs).
- OTHER: sweep parameter d to find the market-efficiency level at which GSE's live edge disappears — a direct measure of how sharp the real market must be to erase GSE's edge.

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL-flavoured BBE (drive-level game simulator from nflverse EP/WP models + sharp/public/steam-chaser agent archetypes) to generate synthetic live spread/total/moneyline tapes for training live-betting models and stress-testing Kelly sizing; acceptance gate: synthetic-trained live-total model within 10% relative log-loss of real-trained model on the 2024 window.

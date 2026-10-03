# arxiv-program/research/2026-09-21/arxiv-deep/1615-fair-odds-for-noisy-probabilities.md
## What it is (1-2 sentences)
Fair Odds for Noisy Probabilities (arXiv:1811.12516, Nash 2018). Derives, from a game-theoretic model of buyer/seller with noisy (uniformly distributed) beliefs about a binary outcome, that zero-expectation odds must systematically deviate from 1/P_C — longer than reciprocal when consensus P_C > 0.5, shorter when P_C < 0.5 — producing the favorite-longshot bias as an equilibrium of a fair market, no behavioral assumptions needed.
## Key metrics/methods (formulas where given, else "not specified")
- Turing's weight-of-evidence map P_{h1}=1/(10^{−WOE_{h1}}+1); noise: P_B,P_S ∼ U(L,H), L=P_T−E, H=P_T+E, E=ε·min(1−P_T,P_T), 0≤ε≤1; noiseless fair odds P_C=½(P_B+P_S) (wisdom-of-crowds consensus).
- Seller's mean expected margin negative for all 0<P_T<1, 0<ε≤1 (only fair at ε=0 or P_T=1); maximum-unfairness point π̄_{So2}=ln(1−w_1)/w_1+1=−0.39 at w_1=1/2, ε=1, P_T→1/2; for P_T<1/2 the seller's loss is flat across the longshot region. Optimal abandon: buyer bets when 1/P_C>2, seller when 1/P_C<2. Fair-odds wedge m: odds higher than 1/P_C for P_C>0.5 (favorite undervalued), lower for P_C<0.5 (longshot overvalued); as market size grows ε→0 and the bias vanishes — effect matters most in thin markets.
## Data sources named
None — pure theory with numerical evaluations of derived equations; no replication package.
## Findings (numbers and facts, not vibes)
- Third structural explanation of the favorite-longshot bias (beyond risk-love and probability misperception); the cost to the seller of underestimating P_T exceeds the benefit of symmetric overestimation (Δ never enters the positive region).
- Limitations: uniform noise is a convenience (real belief noise not uniform/symmetric); linear utility, no market power; abandon clause is a modeling device (real markets have posted odds); wedge coexists with rather than replaces behavioral effects; no empirical validation of any kind.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: noise-wedge adjustment de-biases model-vs-market value detection — ε estimated from GSE's own ensemble dispersion (std normalized by min(1−P_C,P_C)), thin-market amplifier 1/√(market volume) between liquid NFL sides and thin props/futures.
- OTHER: betting-market microstructure theory; connects to prediction-market calibration tooling (ledgers 1614, 1616/1617).
## Engine-actionable? (yes/no + one-line what)
Yes — estimate ε from ensemble dispersion, numerically solve the zero-expectation wedge m per event, and use wedge-adjusted fair odds (not raw 1/P_C) for value detection with an ε-dependent minimum-edge threshold on longshots; ADOPT if ε correlates with realized longshot bias in GSE's log (≥2pp longshot-ROI gain or ≥0.002 Brier on longshots).

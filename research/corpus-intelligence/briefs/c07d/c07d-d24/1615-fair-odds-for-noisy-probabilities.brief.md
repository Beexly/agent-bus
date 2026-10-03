# arxiv-program/research/2026-09-21/arxiv-deep/1615-fair-odds-for-noisy-probabilities.md
## What it is (1-2 sentences)
Nash (2018), arXiv:1811.12516: a formal game-theoretic model showing that when buyers and sellers hold noisy (distributed) rather than point probabilities, zero-expectation "fair" odds must systematically deviate from 1/P_C — producing the favorite-longshot bias as an equilibrium outcome of a fair market. The brief recommends ADAPT for GSE: estimate the noise level ε from GSE's own ensemble probability dispersion and apply the noise-wedge to de-bias model-vs-market value comparisons, especially on longshots.

## Key metrics/methods (formulas where given, else "not specified")
- Turing weight-of-evidence map: P_{h1} = 1/(10^(−WOE_{h1}) + 1) (Eq. 1).
- Noiseless baseline: buyer margin π_B = (1/P_C − 1)P_B − (1−P_B) (Eq. 2); seller margin π_S = (1−P_S) − (1/P_C − 1)P_S (Eq. 3); equating ⇒ P_C = ½(P_B + P_S) (Eq. 4) — wisdom-of-crowds consensus.
- Noise model: P_B, P_S ∼ U(L, H), L = P_T − E, H = P_T + E, E = ε·min(1−P_T, P_T), 0 ≤ ε ≤ 1 (Eq. 5).
- Seller's expected margin: π_{So} = (1−P_T) − P_T(1/(P_B(1−w_S) + P_S w_S) − 1) (Eq. 11).
- Origin of unfairness: Δ = −2ιP_T/(ι² − P_T²) (Eq. 18) — never enters the positive region: the cost to the seller of P_C underestimating P_T exceeds the benefit of symmetric overestimation.
- Distribution of P_T given observed P_C: Eq. 19 (2εP_T < ε) and Eq. 20 (2εP_T ≥ ε) — P_C follows a triangular distribution, so each observed consensus P_C is compatible with a range of unobserved P_T.
- Fair-odds wedge m: solve π̄_{So} = 0 per P_C (Appendix I procedure); agreed odds must be higher than 1/P_C when averaged belief P_C > 0.5 (favorite: longer odds — favorite undervalued) and lower than 1/P_C when P_C < 0.5 (longshot: shorter odds — longshot overvalued); the adjustment added to P_C below 0.5 mirrors the deduction above 0.5, keeping P_C + (1−P_C) = 1.
- Candidate A (unequal belief weighting w_1*) computed numerically but REJECTED: indiscriminate gambling at w_1* odds is exploitable (discriminating wagers have positive expectation).
- Optimal abandon strategy: buyer bets when 1/P_C > 2, abandons when 1/P_C < 2; seller bets when 1/P_C < 2, abandons when 1/P_C > 2 (Figure 5).

## Data sources named
No empirical dataset — pure theory with simulation-implied figures; no replication package. Favorite-longshot bias is an established empirical regularity (Griffith 1949 onward, cited as baseline).

## Findings (numbers and facts, not vibes)
- With equal weighting (Eq. 4) and noisy probabilities, the seller's mean expected margin is NEGATIVE for all 0 < P_T < 1 and all 0 < ε ≤ 1 (only fair at ε = 0 or P_T = 1).
- Maximum-unfairness point: w_1 = 1/2, ε = 1, P_T → 1/2 gives π̄_{So2} = ln(1−w_1)/w_1 + 1 = −0.39.
- For P_T < 1/2, ∂π̄_{So1}/∂P_T = 0 — the seller's loss is FLAT across the longshot region; for P_T > 1/2 the margin rises but never turns positive under equal weighting with 0 ≤ w_1 ≤ 1/2.
- The effect matters most in thin markets: as market size grows, effective ε → 0 (beliefs near the median determine odds) and the bias vanishes.
- UNCERTAIN: no empirical validation of any kind — the explanation is derived, not fitted to market data; the uniform-noise assumption is a convenience, not measured (real belief noise is almost certainly not uniform or symmetric); linear utility and no market power are strong; the abandon clause is a modeling device (real markets have take-it-or-leave-it posted odds); the paper acknowledges the wedge coexists with risk-love/misperception effects rather than replacing them.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (value-detection / calibration lane — strongest): third structural (non-behavioral) explanation of the favorite-longshot bias beyond risk-love and probability misperception, with a concrete adjustment. Serves the calibration/sizing lane directly: estimate ε per event as ensemble-member win-probability std normalized by min(1−P_C, P_C); solve π̄_{So}=0 numerically for m; quote/compare fair odds as 1/(P_C − m) for P_C > 0.5 and 1/(P_C + m) for P_C < 0.5 instead of raw 1/P_C when detecting model-vs-market value. Test target: +≥2pp longshot ROI or Brier ≥0.002 better on the longshot subset (2022–2025 pick log) without degrading the favorite subset.
- OTHER (staking/sizing lane): since the seller's loss is flat across the longshot region (∂π̄/∂P_T = 0 for P_T < 1/2), require an ε-dependent larger minimum-edge threshold to take longshot positions; the brief also proposes a thin-market amplifier scaling the wedge by 1/√(market volume) when moving between liquid NFL sides and thin props/futures. Serves calibration/sizing.
- OTHER (market-making lane): the asymmetric abandon strategy (bet only when the odds asymmetry favors your side of 1/P_C = 2) is keepable as a market-making heuristic even if the wedge is rejected. Connects to 1616/1617 (prediction-market making) and 1614 (the Φ(p/13.588) baseline). The brief's improvement experiment: replace U(L,H) with GSE's empirical ensemble-deviation distribution (beta or kernel density per sport/market), re-derive the wedge by Monte Carlo, test against the uniform-ε wedge.

## Engine-actionable? (yes/no + one-line what)
Yes — log ensemble probability dispersion as empirical ε per event, numerically solve the zero-expectation wedge m, and use wedge-adjusted fair odds for value detection with ε-dependent minimum-edge thresholds on longshots; ADAPT only if empirical ε correlates with realized favorite-longshot bias in GSE's pick log, otherwise keep the abandon strategy as a heuristic.

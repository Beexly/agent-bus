# docs/arxiv-program/research/2026-09-21/arxiv-deep/1623-exact-finite-horizon-quantile-kelly.md
## What it is (1-2 sentences)
A pure-theory 2026 paper (Long, arXiv:2604.17577) deriving the exact finite-horizon Kelly stake optimizer for repeated multi-outcome events by maximizing a quantile (e.g. median) of terminal wealth via Arrow–Debreu wealth-profile geometry, rather than asymptotic log-growth. Ledger verdict: ADAPT — gives GSE a principled short-season/finite-slate stake optimizer targeting median wealth instead of asymptotic growth; Kelly appears 12 times in GSE research with zero prior paper reads, so this is new capability.
## Key metrics/methods (formulas where given, else "not specified")
- Terminal wealth: X_n(W) = ∏_{i} W_i^{N_i}, N multinomial(n, p), W_i state-price wealth profile per outcome.
- Chamber method: partition count-vector space into "chambers" (fixed outcome-wealth ordering); within each chamber the α-quantile of terminal wealth is a single monomial in the count vector ("active quantile monomial"); maximizing it reduces to an ordinary Kelly problem on the empirical law k/n of the chamber ("shadow-Kelly" problem); enumerate chambers, solve each shadow-Kelly exactly, take the global optimum.
- Binary worked example: p=(0.6,0.4), q=(1,1), n=3; median active count (2,1); shadow point (2/3,1/3).
- Ternary worked example: p=(0.6,0.3,0.1), q=(1/3,1/3,1/3), n=2, α=1/2; optimizer (1.5,1.5,0), median terminal wealth 2.25, vs ordinary Kelly profile (1.8,0.9,0.3).
- Assumptions: repeated i.i.d. multi-outcome events; bettor probabilities p and state prices q known exactly; fractional stakes allowed; no transaction costs.
## Data sources named
None — pure theory with two fully worked numerical examples (binary p=(0.6,0.4), q=(1,1), n=3; ternary p=(0.6,0.3,0.1), q=(1/3,1/3,1/3), n=2, α=1/2). No empirical dataset, no code, no backtest.
## Findings (numbers and facts, not vibes)
- Ternary example: quantile optimizer (1.5,1.5,0) yields median terminal wealth 2.25; the ordinary Kelly profile (1.8,0.9,0.3) differs materially — it puts 0.3 on the third outcome the quantile optimizer zeroes out. [OTHER]
- Binary example: median-optimal shadow point (2/3,1/3) for median count vector (2,1). [OTHER]
- Paper's claim: the chamber/shadow-Kelly construction gives the exact finite-horizon α-quantile optimizer (proofs + closed forms; no empirical validation). [OTHER]
- Limitations stated: requires exact p and q — miscalibrated probabilities inherit full Kelly's fragility to edge misestimation; chamber enumeration grows combinatorially with outcomes and horizon; quantile objectives accept large left-tail outcomes by construction (a median maximizer can have severe downside beyond the quantile); no correlated events. [OTHER]
- GSE overlap: Kelly criterion mentioned 12 times in GSE research but had zero prior paper reads — new capability; no GSE module implements finite-horizon quantile optimization; current GSE stakes come from calibrated probabilities via conventional sizing. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finite-slate (weekly slate) stake sizing maximizing median terminal bankroll — maps directly onto GSE's published daily/weekly slates: OTHER (bankroll/stake-optimization engine component)
- Material divergence of quantile-optimal profiles from ordinary Kelly (third outcome zeroed out): OTHER (sizing theory)
- Edge-misestimation fragility warning — pairs with the ledger's improvement idea (shrinkage on the shadow-Kelly step toward uniform): TRUST-SIGNAL (calibration fragility of sizing inputs)
## Engine-actionable? (yes/no + one-line what)
Yes — build a finite-slate optimizer (enumerate count chambers, solve each shadow-Kelly in closed form, convert winning wealth profile to stakes) and test on 2025–2026 weekly-slate replays against half-Kelly (adopt if ≥10% higher realized median bankroll with no worse 5th-percentile bankroll).

# arxiv-program/research/2026-09-21/arxiv-deep/1748-gambling-under-unknown-probabilities-estimation-error.md
## What it is (1-2 sentences)
Full-paper ledger read of arXiv:2312.10331 (Aldous & Bruss, 2020/2023 Amer. Math. Monthly) — six analytic toy models of decision-making under unknown probabilities; the actionable core is the closed-form expected Kelly growth under probability-estimation error, which gives a principled edge-vs-error betting gate. Verdict: ADAPT — but the even-odds/small-edge formulas must be re-derived for general sports odds before deployment.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly growth (even odds, small edge δ, stake fraction a): growth = 2aδ − a²/2 (16); known-δ optimum a = 2δ, optimal growth 2δ².
- Estimation error: δ_perc = δ + ξ, ξ~N(0,σ²), staking a = max(0, 2δ_perc); realized growth = 2(δ_true² − ξ²) if ξ > −δ_true, else 0.
- Expected growth: E[growth] = 2(δ²−σ²)Φ(δ/σ) + 2σδφ(δ/σ) (17), with φ/Φ standard normal pdf/cdf.
- Core implication: the (δ²−σ²) term dominates — expected Kelly growth is positive only when true edge exceeds estimation-error std (|δ| ≳ σ); error enters quadratically and negatively.
- Actionable margin: authors' preliminary finding — hard to improve on naive Kelly even knowing σ, but the gate (bet only if δ_perc/σ large) is the actionable edge; Φ(δ_perc/σ) is the probability the perceived edge has the right sign.
## Data sources named
None — analytic toy models with numerical illustrations of closed-form expressions; no real data, no code.
## Findings (numbers and facts, not vibes)
- Positive expected growth requires |δ| ≳ σ; staking full perceived-edge Kelly when σ ≥ δ destroys growth via the quadratic error penalty.
- "Difficult to improve on (17)" — naive Kelly on perceived probabilities is hard to beat even knowing typical error (preliminary, unquantified).
- Limitations: even-odds + small-δ approximations (Kelly a=2δ specific to even odds; for decimal odds o, f*=(bp−q)/b); normal ξ assumed not estimated; p_true bounded away from 0/1 excludes longshots (props); no correlation across simultaneous bets; no sports data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (staking / bankroll): GSE tracks calibration (ECE, temperature scaling, CQR) but has NO rule linking calibration error to stake sizing — the engine bets point probabilities at face value. σ in (17) = the engine's probability-estimation RMSE (measurable from calibration history), δ = perceived edge vs market.
## Engine-actionable? (yes/no + one-line what)
Yes — ledger spec: build a "δ/σ gate" (stake only if δ_perc > 1.5σ, scale Kelly by Φ(δ_perc/σ), re-derive for general decimal odds numerically), accepted if gated Kelly beats ungated on 2023–2025 terminal log growth with max drawdown no worse, improvement concentrated in picks with δ_perc/σ < 1.5; improvement experiment swaps normal ξ for the engine's empirical error distribution.

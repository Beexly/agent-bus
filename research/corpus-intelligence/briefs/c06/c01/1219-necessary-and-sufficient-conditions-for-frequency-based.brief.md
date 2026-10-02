# arxiv-program/research/2026-09-21/arxiv-deep/1219-necessary-and-sufficient-conditions-for-frequency-based.md
## What it is (1-2 sentences)
Derives exact KKT-based necessary-and-sufficient optimality conditions for the frequency-based Kelly-optimal portfolio over the unit simplex, strengthens the Dominant Asset Theorem to necessity ("invest everything in asset j is optimal iff j is dominant"), plus expected-ratio optimality, asymptotic relative optimality, and survivability lemmas — with a dominant-ratio bang-bang trading algorithm backtested illustratively on ETFs.
## Key metrics/methods (formulas where given, else "not specified")
- Maximize g_n(K) = (1/n)·E[log(1+KᵀX_n)], X_{n,i} = Π_{k=0}^{n−1}(1+X_i(k)) − 1
- Theorem 3.1 (certificate): K* optimal iff E[(1+X_{n,i})/(1+K*ᵀX_n)] = 1 when K_i*>0, ≤1 when K_i*=0; n=1 reduces to Cover–Thomas Theorem 16.2.1
- Theorem 3.2 (Extended Dominant Asset): K* = e_j iff E[(1+X_i(0))/(1+X_j(0))] ≤ 1 ∀i≠j
- Lemma 3.3: E[(1+KᵀX_n)/(1+K*ᵀX_n)] ≤ 1 ∀K; Lemma 3.4 asymptotic relative optimality a.s.; simplex ⟹ V(n)>0 (survivability)
- Practical algorithm: R_{ij}(k) = (1/M)Σ_{ℓ=0}^{M−1}(1+x_i(k−ℓ))/(1+x_j(k−ℓ)); if R_{ij}≤1 ∀i≠j → K_j*(k)=1 (bang-bang all-in), else 0
- Assumptions: i.i.d. returns, known bounded distribution (Xmin>−1), long-only simplex, log utility
## Data sources named
Backtest: VT, BND, BNDX daily closes, Feb 14 2019–Feb 14 2020 (252 trading days), Wharton Research Data Services; sliding window M=20 (robustness M=1..60); no train/test split; MATLAB script, no link
## Findings (numbers and facts, not vibes)
- V(0)=1 → V(252)≈1.23 (~23% return) for Dominant Ratio Trading Algorithm, M=20, vs buy-and-hold (lower, exact not quoted); similar across M values (qualitative)
- Backtest is in-sample (rolling estimation = evaluation), one year, three trending ETFs, no costs — 23% is illustrative, not evidence
- All-in bang-bang is optimal under assumptions but reckless under estimation error; paper's own survivability lemma guarantees only positivity, not drawdown control
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking correctness — Theorem 3.1 as a unit-test certificate for GSE's constrained Kelly solver (assert the ratio expectations ≤1+tol on the empirical distribution; violations fail the build — adopt unconditionally if it passes); R_{ij} sliding-window dominance test as a slate redundancy screen with walk-forward discipline, replacing bang-bang with capped reallocation; improvement: adaptive-M window chosen by a change-point/stationarity test
## Engine-actionable? (yes/no + one-line what)
Yes — certificate test is an unconditional adopt if it passes on historical data; dominance screen adopted only if it improves realized ROI/drawdown ≥10% walk-forward (reject otherwise).

# arxiv-program/research/2026-09-21/arxiv-deep/0821-kelly-criterion-portfolio-optimization-decoupled-problem.md
## What it is (1-2 sentences)
Ledger read of arXiv:1710.00431 (Peterson, 2017) deriving decoupled vs coupled Kelly portfolio problems and combining decoupled Kelly with a Markowitz variance term, solved by differential evolution on 10 stocks. Verdict: ADAPT — the decoupled-vs-coupled computational distinction (NT vs T^N cost) is the transferable idea for GSE's weekly multi-pick slate staking.
## Key metrics/methods (formulas where given, else "not specified")
- Decoupled Kelly return: R_avg = Σ f_i·exp(E[ln(1+f_i X_i)]) − 1 (Eq. 10); coupled: R_c = exp(E[ln(1+ΣF_i X_i)]) − 1 (Eq. 11), requiring an N-dimensional integral (cost T^N vs NT for decoupled).
- Objective (Eq. 17): max_f P·Σf_i(exp(E[ln(1+f_i X_i)])−1) − (1−P)·Σ(f_i⁴M_ii + 2Σ_{j>i}f_i²f_j²M_ij), s.t. Σf_i² = 1, K_min ≤ f_i² ≤ K_max; wealth fraction in asset i is f_i².
- GBM model: X_i(t+Δt) = exp((μ_i−σ_i²/2)Δt + σ_i√Δt·y) − 1; μ_i = ln(1+Avg[R]), σ_i = (ln(Var[R]e^{−2μ_i}+1))^{1/2}.
- Solver: differential evolution (DE/rand/1/bin, C=0.75, ~100s per run on a 2.4 GHz dual-core).
## Data sources named
10 stocks from a major exchange (data from Zaheer & Pant 2016), monthly returns; Table 1 drifts/volatilities (μ_i 0.0995–0.4405, σ_i 0.1991–0.4398); Table 2 is the 10×10 sample covariance matrix. Monte Carlo validation: 10⁴ samples per asset.
## Findings (numbers and facts, not vibes)
- MV model: DE converged to the same portfolio at all P ∈ {0.1,0.3,0.5,0.7,0.9} — stock X₁₀ at ≈0.55 weight (highest drift-to-vol), all others at the 0.05 lower bound.
- Decoupled Kelly matched MV at P=0.3 and P=0.5 (X₁₀ ≈ 0.55/0.53); at P=0.1 gave a more diversified lower-return/lower-risk portfolio (X₅=0.1438, X₁₀=0.4339); converged slowly at P=0.7; mis-converged at P=0.9 (lower return AND higher risk — flagged as a possible local-maximum trap).
- Monte Carlo return-to-risk ratios tracked the objective-function predictions, including the P=0.9 anomaly.
- No out-of-sample test, no transaction costs; single 10-stock dataset (proof of concept by the author's admission).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (sizing): "decoupled slate Kelly" — per-pick Kelly terms (binary outcomes, closed form, no integral) plus a shared empirical same-slate outcome covariance penalty, maximized under Σf_k ≤ max_exposure. Directly relevant to slate-staking variants in ledgers 0819 (MPC) and 0820 (RCK); connects to the sizing lane.
- OTHER (risk): fixed risk parameter P is the analog of a drawdown-state trigger — test adaptive P (de-risk in drawdown, link to ledger 0818's CED trigger).
- TRUST-SIGNAL: on small slates (2–4 picks) solve the exact coupled problem via quadrature to quantify and certify the decoupled approximation error.
## Engine-actionable? (yes/no + one-line what)
Yes — implement decoupled slate Kelly (binary closed forms + empirical slate covariance + exposure caps) and walk-forward test 2024→2025 against independent capped Kelly on log-bankroll growth and max drawdown.

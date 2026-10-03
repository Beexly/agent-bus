# arxiv-program/research/2026-09-21/arxiv-deep/2143-composite-risk-measure-framework.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1501.01126 (Qian, Wang & Wen 2015), "A Composite Risk Measure Framework for Decision Making under Uncertainty," unifying stochastic programming, robust optimization, DRO, and worst-case VaR in one two-layer framework (inner risk over outcomes given a distribution F, outer risk over the Bayesian posterior of F's parameters). Verdict: ADAPT — maps exactly onto GSE's stake-sizing problem: game randomness is not the only uncertainty; the engine's edge estimate itself is uncertain.

## Key metrics/methods (formulas where given, else "not specified")
- CRM objective: min_{x∈X} μ(g_F(H(x,ξ))), F∼P_1 (posterior), ξ∼F.
- VaR-Expectation (21): min_x VaR_δ(E_{ξ∼F}[H(x,ξ)]) — provably less conservative than DRO: γ*_VaR ≤ γ*_DR at same δ; non-convex (ADM).
- CVaR-Expectation (33): min_x CVaR_δ(E_{ξ∼F}[H(x,ξ)]) — convex, LP-solvable via SAA.
- CVaR-CVaR (32): min_{x,α} α + 1/(1−δ) E[(CVaR_ε(H(x,ξ_F))−α)^+] — nested CVaR over both layers; SAA sample complexity M ≥ C_1(H,F)/γ² [C_2(H,F) n + C_3(H,F) log(1/ε)] (36).
- Coherence representation (Thm 3.5): ρ(X)=sup_{Q∈Q} E_Q[X]; posterior for normal returns with Jeffreys prior f(μ,Σ)=N(μ|μ_0,t^{−1}Σ)·W^{−1}(Σ|tΣ_0,t−1) (40).

## Data sources named
Portfolio experiment: daily returns of 359 S&P-500 stocks without missing data, 2010–2011; rolling 30-day lookback over 300 days (3/4/2010–4/27/2011). Baselines: Delage & Ye 2010 DRO, El Ghaoui et al. 2003 worst-case VaR, single-stock naive. Solved with MOSEK/Matlab.

## Findings (numbers and facts, not vibes)
- VaR-Expectation was strictly less conservative than DRO in all 1000 bootstrap experiments; avg 0.070% higher optimal value at δ=0.95 with the same probabilistic guarantee.
- Tractability at N=100,000 SAA samples, n=4: VaR-Exp 9.26 s, CVaR-Exp 1.65 s, CVaR-CVaR 17.64 s; all converge as N grows.
- Scaling n=50, N=5000: VaR-Exp 6.38 s avg, CVaR-Exp 0.33 s, CVaR-CVaR 29.33 s.
- Real 300-day trading: avg daily return VaR-Exp 0.096%, CVaR-Exp 0.096%, CVaR-CVaR 0.087%, DRO 0.088%, worst-case VaR 0.087%, single-stock 0.078%; CVaR-CVaR volatility lowest at 1.17×10^{−2}.
- Results are modest (bps-level); honest claim is "robust performance," not dominance.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Two-layer decomposition is new capability for GSE: inner = game-outcome risk given engine probabilities, outer = uncertainty about the engine's probabilities themselves (beta-binomial posterior from rolling engine calibration history) — Kelly and Wang Transform address only the inner layer (TRUST-SIGNAL).
- Slate-correlation-aware inner CVaR (Gaussian-copula scenario generator on historical pick residuals) proposed as improvement to cut max drawdown beyond independent-scenario version (TRUST-SIGNAL).
- No transaction-cost/vig treatment in paper — vig must be in H(x,ξ) explicitly for the betting mapping (OTHER).

## Engine-actionable? (yes/no + one-line what)
Yes — implement CVaR-Expectation stake sizing: LP over stake vector with beta-binomial posteriors per pick from 8 weeks of engine calibration history, vig baked into loss, backtested on 2022–2025 engine picks; accept gate: Calmar ≥ 1.10× best baseline AND max drawdown ≤ 0.90× best baseline with final bankroll ≥ baseline.

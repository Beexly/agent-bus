# arxiv-program/research/2026-09-21/arxiv-deep/0819-portfolio-optimization-correlated-returns-constraints-costs.md

## What it is (1-2 sentences)
Paper ledger for arXiv:1410.8042 (Dombrovskii & Obedko 2014) on MPC (receding-horizon) portfolio optimization with correlated returns, position constraints, quadratic transaction costs, and different borrow/lend rates. Verdict: ADAPT — structural adaptation to GSE's slate-level staking (correlated simultaneous picks, vig as transaction cost); paper's own results are figure-only with zero exact numbers.

## Key metrics/methods (formulas where given, else "not specified")
- Receding-horizon QP: minimize J(k+m/k) = E{[V(k+m)−V⁰(k+m)]²/F_k} + shortfall penalty (ρ=0.1) + quadratic transaction-cost term (Eq. 8), horizon m=10, apply first control then re-solve
- Reference path: V⁰(k+1) = (1+μ₀)V⁰(k), μ₀=0.0015/day (Eq. 7)
- QP form (Eq. 19): Y = [2V(k)G(k) − F(k)]U(k) + U(k)'[H(k)+R(k)]U(k) under linear constraints; R=diag(10⁻⁴); bounds βᵢ=−0.6, γᵢ=3 (proportional to wealth)
- Predictor: VAR(2) η(k+1) = ν + A₁η(k) + A₂η(k−1) + ω(k+1), OLS on trailing 200-day windows
- Assumptions: finite conditional first/second moments; positive-definite R; no return-distribution assumptions

## Data sources named
- MICEX (Russian Stock Exchange) daily prices via finam.ru: Sberbank, Gazprom, VTB, LUKOIL, NorNickel, Rosneft, Sibneft; ~1,500 trading days; illustrated 20.07.2007–11.09.2014
- Risk-free rates r₁=0.0001 (lending), r₂=0.0002 (borrowing) per day; solved with MATLAB quadprog

## Findings (numbers and facts, not vibes)
- No exact numbers reported anywhere — results are Figures 1–3 only (tracking vs reference portfolio, Gazprom position path, Gazprom returns); claimed qualitatively: smooth wealth-growth curve tracking 0.15%/day target over 2007–2014 across 5-asset combos
- Parameter choices (μ₀, ρ, R, β, γ, m) asserted by hand, not optimized; no sensitivity analysis (explicitly out of scope)
- VAR(2) parameters frozen for 6 years after a 200-day fit; no train/test split, no baseline, no statistical tests
- Long-only + constraints portion transfers; borrowing/shorting machinery has no sportsbook analog (INFERENCE-free fact from the file)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Slate MPC staker": weekly QP over K simultaneous picks with engine probabilities, market prices, cross-pick correlation, bankroll growth target, per-pick caps — OTHER
- Correlated-pick handling as the multi-pick generalization that flat Kelly misses (pairs with Kelly papers 0813/0816, 0834–0836, 0840) — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — build weekly receding-horizon slate staker (QP with cross-pick correlation + vig term + drawdown shortfall penalty) and gate on beating independent capped Kelly on 2025-holdout log-bankroll growth with no-worse max drawdown.

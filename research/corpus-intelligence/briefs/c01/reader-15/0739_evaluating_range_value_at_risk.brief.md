# arxiv-program/research/2026-09-21/arxiv-deep/0739-evaluating-range-value-at-risk.md
## What it is (1-2 sentences)
Deep read of Fissler & Ziegel (2019/2021), arXiv:1902.04489 — elicitability theory proving the (VaR_α, VaR_β, RVaR_{α,β}) forecast triplet admits strictly consistent scoring functions (RVaR alone is non-elicitable), with mixture representations enabling Murphy diagrams and a Diebold–Mariano comparative-backtest protocol. Ledger verdict: ADAPT the strictly consistent scoring functions + Murphy diagrams + DM-test protocol for GSE's quantile/interval forecast evaluation; the RVaR risk-measure theory itself is finance-specific and not adopted.

## Key metrics/methods (formulas where given, else "not specified")
- RVaR_{α,β}(F) = (1/(β−α))∫_α^β VaR_γ(F) dγ; identity RVaR_{α,β} = (β·ES_β − α·ES_α)/(β−α).
- Strict identification function V(x_1,x_2,x_3,y) = (1{y≤x_1}−α, 1{y≤x_2}−β, x_3 + (S_β(x_2,y)−S_α(x_1,y))/(β−α)), where S_α(x,y) = (1{y≤x}−α)x − 1{y≤x}y.
- Scoring-function class (3.3): S(x_1,x_2,x_3,y) = (1{y≤x_1}−α)g_1(x_1) − 1{y≤x_1}g_1(y) + (1{y≤x_2}−β)g_2(x_2) − 1{y≤x_2}g_2(y) + φ'(x_3)(x_3 + (S_β(x_2,y)−S_α(x_1,y))/(β−α)) − φ(x_3) + a(y), φ convex, with monotonicity constraints on G_{1,x_3}, G_{2,x_3}.
- Section 4 structural finding: essentially NO strictly consistent scoring function in this class is translation-invariant or positively homogeneous.
- Murphy diagrams: expected elementary scores L_v^1, L_v^2 (two VaRs) and L_v^3 (triplet) plotted over threshold parameter v — compares forecasters under ALL consistent scores simultaneously.
- Section 7: trimmed mean (RVaR with α=1−β) as a robust location functional, estimable via the joint (VaR_α, VaR_β, trimmed-mean) M-estimator.

## Data sources named
Pure theory + simulation only: Y_t = μ_t + u_t with μ_t, u_t iid standard normal; N=100,000 for Murphy diagrams (population approximation); N=250 with 10,000 replications for Diebold–Mariano power study at (α,β)=(0.1,0.9) and (0.01,0.05).

## Findings (numbers and facts, not vibes)
- Diebold–Mariano empirical power (5% one-sided; "f" ideal forecaster, "g" = f + N(0,σ²), σ=0.5, "h" unconditional N(0,2)): for H0 "f⪯g", power = 0.304 (S_1), 0.406 (S_2), 0.417 (S_3), **0.624 (S_4)** — discrimination varies substantially across scores in the same consistent class. For "f⪯h": power 0 all (correctly never rejects); "h⪯f": 1.000 all; "h⪯g": 0.999/0.998/0.992/0.998.
- Tail-risk panel (α=0.01, β=0.05): S_4 much weaker at detecting h⪯g (power 0.393 vs ≥0.874 for S_1–S_3).
- Murphy diagrams (Fig. 1–2) correctly rank f≻g≻h at population level for σ=0.3, 0.5, 0.8.
- The S_1–S_4 candidates are ad hoc (authors admit "a systematic study... goes beyond the scope"); simulation is Gaussian iid — no heavy tails, no regime shift.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Formalize engine A/B comparisons with Diebold–Mariano tests on chosen consistent scores rather than eyeballing log-loss deltas — and the DM power results warn that scoring-function choice inside a consistent class changes detection power (0.304 vs 0.624).
- OTHER — Murphy diagrams for GSE's quantile forecasts (10th/90th percentiles of totals, spread quantiles): one plot that dominates all consistent-score comparisons simultaneously; extension to conditional/Mondrian Murphy diagrams (favorites vs underdogs) detects engine A winning overall but losing on a subpopulation.
- OTHER — Optional: trimmed-mean M-estimator as a robust location functional for noisy market-implied quantities (e.g., consensus line movement).

## Engine-actionable? (yes/no + one-line what)
Yes — spec included: implement generalized pinball-score Murphy diagrams for GSE quantile forecasts of game totals (2023–2025) plus DM-test A/B protocol; gate: reproduce a known engine-version ranking with DM p<0.05 and uniform Murphy dominance (~2 days).

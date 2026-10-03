# docs/arxiv-program/research/2026-09-21/arxiv-deep/1752-drawdowns-of-diffusions-lehoczky-malyutin.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2411.18374 (Salminen & Vallois, 2024), a probability-theory paper proving Lehoczky's and Malyutin's exact drawdown formulas for one-dimensional diffusions via excursion theory. Verdict: ADAPT — use the Brownian-with-drift special case (Taylor's formula) as an analytic bankroll-drawdown pricer replacing Monte Carlo gates.

## Key metrics/methods (formulas where given, else "not specified")
- Drawdown: D_t = M_t − X_t; θ_δ = inf{t ≥ 0 : M_t − X_t > δ} (1.1); max drawdown D⁻_t = max_{s≤t}(M_s − X_s) (1.2); H_η = inf{t : X_t = η} (1.3).
- Lehoczky (Thm 3.1, extended): joint Laplace transform E_x[exp(−αθ_δ − βM_{θ_δ})] = [ψ_α(x)/ψ_α(x∨(δ+l))] ∫ c_α(y;δ) exp(−βy − ∫ b_α(z;δ)dS(z)) dS(y), with Wronskian ratios (3.2) of fundamental solutions ψ_α/φ_α of d/dm d/dS u = αu (2.2).
- Hitting Laplace: E_x[e^{−αH_y}] = ψ_α(x)/ψ_α(y) (x≤y), φ_α(x)/φ_α(y) (x≥y) (2.1).
- Taylor's BM-with-drift specialization (Example 3.9, Eq. 3.15) — the only directly implementable case.

## Data sources named
None — pure probability theory; no empirical data.

## Findings (numbers and facts, not vibes)
- [OTHER] No numerical results; output is exact formulas (2.1), (2.2), (3.1), (3.2), Taylor BM formula (3.15), Malyutin joint law of (H_η, D⁻_{H_η}).
- [OTHER] General formula requires scale function S, speed measure m, and fundamental solutions ψ_α/φ_α of the bankroll diffusion — unknown for real weekly betting; only BM-with-drift is directly usable.
- [OTHER] Laplace transforms must be numerically inverted (mpmath/scipy) to get probabilities.
- [OTHER] Diffusion of log bankroll is an approximation of discrete weekly betting; no estimation error, no transaction costs modeled.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Analytic drawdown pricing: model weekly log-bankroll as BM(μ,σ) from sizer backtest, then P(drawdown δ before season end) and P(hit target η before drawdown δ) come from Taylor/Malyutin in closed form — replaces Monte Carlo for the 1749 α-governor and 1751 frozen-max mode. Implementation: ~1–2 days (formula + Laplace inversion + MC validation).
- [OTHER] Calibration gate: drawdown_prob(δ, T, η) accepted only if calibration slope in [0.8, 1.2] and Brier within 5% of Monte Carlo while ≥100× faster.
- [OTHER] Improvement path: jump-diffusion extension for heavy-tailed weekly returns (paper is diffusion-only).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the analytic drawdown pricer (Taylor BM-with-drift + Malyutin) as the bankroll manager's drawdown gate, validated against Monte Carlo.

# arxiv-program/research/2026-09-21/arxiv-deep/0743-conformal-risk-control.md
## What it is (1-2 sentences)
Deep ledger on Angelopoulos, Bates, Fisch, Lei & Schuster (2022), "Conformal Risk Control" (arXiv:2208.02814): choose any threshold λ̂ on a calibration set to guarantee E[L_{n+1}(λ̂)] ≤ α for ANY bounded monotone loss — generalizing conformal prediction beyond coverage to arbitrary risks. Verdict: ADAPT — the cleanest known formalism for GSE's selective-prediction/abstention problem (control expected fraction of posted picks that are wrong, or slate drawdown, with a finite-sample guarantee).

## Key metrics/methods (formulas where given, else "not specified")
- Selection rule: λ̂ = inf{λ : (1/n)Σ_{i=1}^n L_i(λ) ≤ α − (B−α)/n}; guarantee: E[L_{n+1}(λ̂)] ≤ α (Theorem 1, finite-sample, distribution-free). The (B−α)/n correction is provably unimprovable (lower-bound theorem).
- Assumptions: (i) exchangeability of calibration/test; (ii) L_i(λ) monotone nonincreasing in λ; (iii) L_i(λ) ≤ B < ∞; (iv) right-continuity in λ.
- Extensions: risk control under covariate shift (weighted), quantile risk control (high-probability), multiple risk control, adversarial risk, U-statistic risks.
- Prediction sets C_λ nested in λ (larger λ ⇒ larger sets); demonstrated with pixel masks at confidence threshold and multi-label score thresholds.

## Data sources named
- Gut-polyp segmentation: n=1,000 calibration images, 781 validation; loss = 1 − recall.
- MS COCO multi-label classification: n=4,000 calibration, 1,000 validation; loss = false negative rate.
- Standard public vision benchmarks; no paper repo named (method is ~10 lines on any scoring model).

## Findings (numbers and facts, not vibes)
- Polyp segmentation at α=0.1: mean realized risk 0.0987, SD 0.0114 over 1,000 independent trials — tightly controlled just under 0.1.
- MS COCO at α=0.1: mean risk 0.0996, SD 0.0052 over 1,000 trials; risk histograms concentrate near α from below — the guarantee is nearly tight, not conservative.
- Limitations: guarantee is marginal over calibration draws (unlucky single set can exceed α); exchangeability required (NFL regime drift violates — covariate-shift extension is the remedy, needs likelihood ratio); (B−α)/n correction is punishing at small n (50-game window ⇒ materially stricter target); exotic non-monotone losses (e.g., profit functions) excluded.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Posted-pick risk control: C_λ = {games with |edge| ≥ λ}, loss = fraction of posted picks that lose; choose λ̂ at α=0.45 (expected loss-rate < 45%, win-rate > 55%) — the formal abstention engine for the public surface: TRUST-SIGNAL.
- Slate drawdown control: loss = max drawdown of the week's posted slate: OTHER (bankroll risk).
- Conditional (Mondrian) risk control within strata (favorites/dogs, high/low totals) to fix marginal-guarantee failure in worst strata (e.g., primetime dogs): SCHEME / OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — implement posted-pick risk control on GSE posted picks (rolling trailing-100 calibration window, α ∈ {0.4, 0.45}): adopt if backtest shows mean realized loss-rate ≤ α − 0.01 at ≥60% of unfiltered volume; effort ~3 days including backtest.

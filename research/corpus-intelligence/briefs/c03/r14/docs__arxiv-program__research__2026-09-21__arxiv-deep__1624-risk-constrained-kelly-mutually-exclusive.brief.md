# docs/arxiv-program/research/2026-09-21/arxiv-deep/1624-risk-constrained-kelly-mutually-exclusive.md
## What it is (1-2 sentences)
Deep read of Long (2026), arXiv:2604.11577 — a closed-form risk-constrained Kelly criterion for mutually exclusive outcomes: impose a CRRA risk constraint on the Kelly problem, with a support-invariance result (same active outcomes as unconstrained Kelly in overround markets) and one-dimensional log-scale calibration.
## Key metrics/methods (formulas where given, else "not specified")
- Risk constraint: Σ_i p_i W_i^{−λ} ≤ 1 on terminal wealth per outcome W_i; CRRA risk-aversion parameter γ, constraint exponent λ.
- Numerical illustration (p=(0.50,0.30,0.20), q=(0.45,0.35,0.30), overround 1.10, γ=1, λ=2):
  - Unconstrained: cash c=.9091, stake on outcome 1 x1=.0909; risk measure R(0)=1.01 (constraint violated).
  - Constrained: s*=.3794, z1=1.1433, c*=.9394, W1*=1.0740, constrained stake x1*=.0606 — one-third stake cut vs .0909; active outcome set unchanged.
- Support invariance: in overround markets the constrained and unconstrained optimizers share the same likelihood-ratio prefix support. Calibration = one-dimensional root-find on log scale via KKT.
- Metrics in the reproducible test: final bankroll, max drawdown, 5th-percentile terminal wealth (vs unconstrained Kelly, risk-constrained Kelly, half-Kelly).
## Data sources named
None — pure theory plus one fully worked numerical illustration. No external dataset, no code stated.
## Findings (numbers and facts, not vibes)
- Support-invariance result: constrained optimizer keeps the same likelihood-ratio-prefix support as unconstrained Kelly in overround markets — only cash level and stake magnitudes change.
- In the worked example, the risk constraint (λ=2) cuts the stake from .0909 to .0606 (~33% cut) while holding the active set.
- The constraint Σ p_i W_i^{−λ} ≤ 1 is a mathematical convenience; its economic interpretation (which downside it guards against) is thinner than a drawdown or ruin constraint (file's own limitation note).
- γ and λ are free parameters with no calibration guidance in the paper.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Risk-constrained Kelly as a "conservative sizing" mode: OTHER — staking/bankroll module, not a prediction signal.
- Same implicit-cash school as papers 1623/1634; active-leg/support logic composes with 1634's ticket-book work: OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — add a conservative sizing mode: after unconstrained Kelly stakes, check Σ p_i W_i^{−λ} ≤ 1 (start λ=2); if violated, solve the one-dimensional KKT for s* and rescale, exposing γ as a risk slider; acceptance gate = ≥90% of unconstrained bankroll with max drawdown ≥20% smaller than half-Kelly on the 2025–2026 replay.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/1624-risk-constrained-kelly-mutually-exclusive.md

## What it is (1-2 sentences)
Deep-read ledger (ADAPT verdict) of arXiv:2604.11577 — a closed-form risk-constrained Kelly modification (CRRA risk penalty Σ_i p_i W_i^{−λ} ≤ 1) that preserves Kelly's active-outcome support in overround markets and reduces to a one-dimensional log-scale calibration.

## Key metrics/methods (formulas where given, else "not specified")
- Risk constraint: Σ_i p_i W_i^{−λ} ≤ 1 with CRRA risk-aversion γ and constraint exponent λ.
- Support-invariance result: in overround markets (Σq_i > 1), constrained and unconstrained optimizers share the same likelihood-ratio-prefix support (sorted by p_i/q_i); only cash level and stake magnitudes change.
- Calibration: one-dimensional root-find on log scale for scalar s* via KKT system, then recover cash c* and stakes.
- Worked example (p=(0.50,0.30,0.20), q=(0.45,0.35,0.30), overround 1.10, γ=1, λ=2): unconstrained c=.9091, x1=.0909, R(0)=1.01 (violated); constrained s*=.3794, c*=.9394, x1*=.0606 — a one-third stake cut with identical active support.

## Data sources named
None — pure theory plus one numerical illustration.

## Findings (numbers and facts, not vibes)
- Risk-constrained Kelly cuts the example stake from .0909 to .0606 (33% reduction) while betting the same outcome set.
- The constrained optimizer keeps the same likelihood-ratio-prefix support as unconstrained Kelly in overround markets; calibration is one-dimensional (claimed by paper, proved via KKT).
- No empirical validation in the paper: single hand-picked ternary event; γ and λ are free parameters with no calibration guidance; support invariance proven for overround case only.
- Ledger verdict: ADAPT — directly usable as GSE's conservative sizing mode.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form conservative Kelly sizing with a user-facing risk slider γ — OTHER (bankroll/staking machinery).
- Support invariance means risk constraints change stake magnitudes, never which outcomes get bet — TRUST-SIGNAL (stake-size changes stay consistent with the engine's edge-ranking; no signal re-ordering risk).
- No empirical validation; parameters γ/λ need rolling-window fitting — OTHER (needs a season-replay test before adoption).

## Engine-actionable? (yes/no + one-line what)
yes — Add a "conservative sizing" mode to the GSE staking module: check Σ p_i W_i^{−λ} ≤ 1 (start λ=2) after unconstrained Kelly, solve the 1-D log-scale KKT for s* if violated, expose γ as a risk slider; accept if 2025–2026 replay keeps ≥90% of unconstrained bankroll with ≥20% smaller max drawdown than half-Kelly (the file's own gate).

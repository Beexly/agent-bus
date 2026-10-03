# arxiv-program/research/2026-09-21/arxiv-deep/0884-elo-practitioners-statisticians-insights.md

## What it is (1-2 sentences)
Paper ledger for arXiv:2604.03840v1 (Szczecinski 2026) giving closed-form statistical analysis of the Elo update: steady-state variance, convergence time, and the core separation of the ranking scale from the prediction scale. Verdict: ADAPT — split GSE's Elo into published ranking scale vs empirically-fit prediction scale, and use the convergence constant as a rating-trust flag.

## Key metrics/methods (formulas where given, else "not specified")
- Steady-state Elo estimate variance: v ≈ sK/2 (s = logistic scale, K = K-factor)
- Convergence constant: τ = 4s/K (in units of games) — time constant with which rating forgets initialization
- Win probability from rating differences uses a separately fitted scale (optimal scaling via logistic regression), not the ranking scale s
- Variants tested: conventional Elo, no-HFA Elo, HFA Elo, optimal-scaling Elo, fully adaptive online variant; evaluation by log score on walk-forward stream
- Assumptions: latent strengths drift slowly relative to τ; conditionally independent Bernoulli/logistic outcomes; logistic link correctly specified up to scale

## Data sources named
- FIFA international matches: 5,719 matches, 2018-06-04 to 2024-07-14 (public FIFA results); home-field-advantage variants tested

## Findings (numbers and facts, not vibes)
- Log scores (lower better): conventional 0.998; no-HFA 0.904; HFA 0.894; optimal scaling 0.893; online/fully adaptive 0.891 — ranking/prediction scale separation drives 0.998 → ~0.89 improvement
- By 2024, 80% of teams had less than one convergence constant (τ) of experience — most published ratings had not converged, quantifying rating unreliability for low-volume teams
- Leakage: optimal-scaling/adaptive hyperparameters tuned on the same walk-forward stream evaluated on
- Limitations: single FIFA dataset; v ≈ sK/2 assumes slow strength drift (breaks under coaching/roster regime change); τ theory is stationary-regime only

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- τ = 4s/K "rating maturity" indicator on every published rating; teams with experience < τ get wider published uncertainty and feed pick-confidence tiering — TRUST-SIGNAL
- Optimal-scaling split: fit NFL prediction scale by logistic regression of outcomes on rating differences, re-fit monthly — OTHER
- Noise correction v ≈ sK/2 feeding the rating covariance in Monte Carlo simulations — OTHER
- Adaptive K by maturity (K_i ∝ 1/maturity_i): high K for new teams/coaches, decaying to steady-state K (ties to coaching-change strength regime shifts) — COACHING

## Engine-actionable? (yes/no + one-line what)
yes — split GSE Elo into ranking vs prediction scale and surface a τ-based rating-maturity flag; gate: optimal-scaling Elo beats conventional Elo by ≥0.005 log score on 2024 NFL walk-forward.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/0549-scoredriven-rating-system-for-sports.md

## What it is (1-2 sentences)
Deep read of Holý & Černý (2026, arXiv:2604.09143v1), a pure theory paper generalizing classical Elo into a unified score-driven (GAS/DCS) rating system that handles arbitrary outcomes (win/loss, margin of victory, win/draw/loss, full rankings). Ledger verdict: ADOPT — generalize GSE's Elo-family ratings to score-driven updates.

## Key metrics/methods (formulas where given, else "not specified")
- Core update: r_{t+1}^(i) = r_t^(i) + K · ∇_i(r_t; y_t), where ∇_i = ∂ ln f(y_t | r_t) / ∂ r_t^(i) (the score of the outcome likelihood) and K > 0 is the K-factor.
- Classical Elo recovered exactly iff the link is logistic (Prop. 1); Elo's original normal-CDF link is only approximately score-driven.
- Margin of victory via Skellam on point differences: Poisson scoring rates λ_A = exp(α(r_A − r_B)), λ_B = exp(−α(r_A − r_B)); scores ∇_A = α(y_t^(A) − y_t^(B) − 2 sinh(α(r_t^(A) − r_t^(B)))), ∇_B = −∇_A.
- Win/draw/loss via ordered probit (plus a draw-free-parameter Skellam-with-thresholds variant); full rankings via Plackett–Luce: ∇_i = α(1 − Σ_{p=1}^{y_t^(i)} exp(α r_t^(i)) / Σ_{q=p}^{m_t} exp(α r_t^(q-th))).
- Proven fairness properties: zero expected score E[∇_i|r_t] = 0 (Prop. 2); zero-sum Σ_i ∇_i = 0 per outcome, so no rating inflation (Prop. 3, requires outcome distribution be a function of rating differences only); score decreasing in own rating under strict log-concavity (Prop. 4); reversion of ratings toward unobserved true skill s_t when skill ≠ rating (Prop. 5).
- Recommendations: random-walk dynamics on ratings (not mean-reverting — mean-reversion is "unfair by construction"); keep explanatory covariates like home advantage OUT of the rating itself to preserve fairness.

## Data sources named
No empirical dataset — pure theory with illustrative simulated rating paths (parameters not reported). NFL design notes in the read: nflverse play-by-play 1999–2026 proposed for implementation.

## Findings (numbers and facts, not vibes)
- No numerical results — no performance numbers, no fitted parameters, no real-data comparisons; the "validation" is proofs of Props. 1–5 only.
- The read's GSE implementation spec proposes: generic `rating/score_driven.py` with pluggable outcome distributions (logistic win/loss recovers Elo, Skellam margin, ordered-probit ATS win/push/loss); home field kept OUT of the skill rating (neutral-site skill + separate HFA offset) per the authors' fairness warning; K and α grid-searched on 1999–2020 against log-loss/Brier.
- Acceptance gate from the read: ADOPT Skellam-margin rating over plain Elo if out-of-sample mean log-loss on 2021–2025 is ≥ 0.005 lower than standard Elo (K=16, 400-divisor) AND no single-team single-week rating swing exceeds 3× the median weekly swing.
- Improvement experiment: scale K by Fisher-information normalization 1/I(r_t) (GAS "scaled score") so blowouts with high expected variance get smaller updates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Score-driven team ratings as Monte Carlo sim priors / SOS / power rankings — OTHER (team-rating infrastructure, no QB/coaching/OL content in the paper).
- Author warning that home-advantage terms inside the rating break zero-sum fairness — SCHEME-adjacent design consideration for how GSE models HFA vs team skill: tag OTHER (methodological, not coaching/scheme tendency).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Skellam-margin score-driven rating core (logistic + Skellam + ATS ordered-probit variants) to replace plain Elo in the team-strength stack, with HFA modeled as a separate offset to preserve zero-sum fairness.

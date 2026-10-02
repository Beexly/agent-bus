# docs/arxiv-program/research/2026-09-21/arxiv-deep/0589-bradleyterry-modeling-with-multiple-game-outcomes.md
## What it is (1-2 sentences)
Deep read of Whelan & Klein (2021), arXiv:2112.01267v1: a Bradley-Terry generalization from binary win/loss to four ordered game outcomes (regulation win, OT win, OT loss, regulation loss) via a softmax-over-outcome-types parametrization, applied to a 4-team 2020–21 ECAC college hockey season. Verdict ADAPT: adopt the unified softmax form and the Gaussian/HMC uncertainty machinery for GSE team-strength modeling; reject the hockey 3-2-1-0 point exponents (no NFL analog) in favor of data-fitted outcome buckets.
## Key metrics/methods (formulas where given, else "not specified")
- Unified softmax form (Eqs. 2.7–2.8): θ^I_ij = σ({p_J(λ_i−λ_j) + o_J τ | J})_I, with λ_i = ln π_i, τ = ln ν. Special cases: standard BT (p_W=1, p_L=0); BT–Davidson (p_W=1, p_T=1/2, p_L=0, o_T=1); four-outcome model (p_RW=1, p_OW=2/3, p_OL=1/3, p_RL=0, o_OW=o_OL=1).
- Four-outcome model (Eqs. 2.5a–d): θ^RW_ij = π_i/D; θ^OW_ij = ν π_i^{2/3}π_j^{1/3}/D; θ^OL_ij = ν π_i^{1/3}π_j^{2/3}/D; θ^RL_ij = π_j/D; D = π_i + νπ_i^{2/3}π_j^{1/3} + νπ_i^{1/3}π_j^{2/3} + π_j. Exponents chosen so MLE moment condition becomes expected points = actual points under the 3-2-1-0 system.
- Davidson ties (Eqs. 2.3): θ^W_ij = π_i/(π_i + ν√(π_iπ_j) + π_j); tie prob between even teams = ν/(2+ν).
- Log-likelihood (Eq. 3.1): ln P(D|{λ_i},τ) = (1/2)Σ_iΣ_jΣ_I n^I_ij ln θ^I_ij. Score identities (Eqs. 3.3a–b); moment equations (Eqs. 3.6–3.9); iterative Ford/Zermelo-style MLE updates (Eqs. 3.10–3.11) with geometric-mean renormalization ∏π̂_i = 1.
- Bayesian inference: improper Haldane prior f({λ_i},τ|I_0) = constant. Gaussian (Laplace) approximation about the MAP using analytic Hessian's Moore-Penrose pseudo-inverse (handles singular λ-shift direction, enforces Σλ_i = 0). HMC in Stan with successive-differences parametrization ω_i = λ_i − λ_{i+1} (t−1 independent params; proper posterior, convergent chains). Full Stan model in Appendix A.
## Data sources named
2020–2021 ECAC men's college hockey season results from collegehockeynews.com and flashscore.com; 4 teams (Colgate, Clarkson, Quinnipiac, St. Lawrence), ~14–18 games per team.
## Findings (numbers and facts, not vibes)
- Per-team outcome totals (RW/OW/OL/RL): Colgate 4/2/3/9; Clarkson 5/3/4/2; Quinnipiac 9/4/2/3; St. Lawrence 3/2/2/7.
- Standard BT MLE log-strengths: Colgate −0.55, Clarkson 0.32, Quinnipiac 0.74, St. Lawrence −0.51; one-sigma uncertainties 0.39/0.43/0.40/0.45.
- BT–Davidson: log-strengths −0.73/0.70/0.89/−0.85; τ̂=0.23; tie prob between even teams = e^{τ̂}/(2+e^{τ̂}) = 0.39.
- Four-outcome: log-strengths −0.74/0.60/0.93/−0.79; τ̂=−0.49; OT prob between even teams = e^{τ̂}/(1+e^{τ̂}) = 0.38. Example: Quinnipiac over Colgate θ̂^RW=0.57, θ̂^OW=0.20.
- Gaussian approximation and exact HMC posterior are "only slightly different"; differences visible only when MLE γ̂_ij far from zero. Log-strengths "qualitatively similar" across all three models.
- No train/test, no predictive-accuracy numbers (no log-loss/Brier), no best-model determination; authors say the correct model is the one matching the league's point system.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: unified multi-outcome BT machinery (ordered margin-bucket outcome probabilities, Davidson tie-rate τ fitted jointly with strengths) — team-strength module building block.
- OTHER: Gaussian/Laplace + HMC posterior machinery for prediction intervals on team strengths (τ as an inferred "close-game rate" parameter, NFL analog: season-varying close-game rate around the 2022 OT rule change).
## Engine-actionable? (yes/no + one-line what)
Yes — build ordered-margin-bucket BT variant (win ≥14 / win 1–13 / loss 1–13 / loss ≥14) on nflverse game counts with Stan, per §11 implementation spec (2–3 engineer-weeks), gated on ≥1.0% multiclass log-loss improvement vs standard BT on 2024–2025 rolling window.

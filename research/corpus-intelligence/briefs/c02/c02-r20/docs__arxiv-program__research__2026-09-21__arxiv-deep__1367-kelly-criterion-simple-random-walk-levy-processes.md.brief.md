# docs/arxiv-program/research/2026-09-21/arxiv-deep/1367-kelly-criterion-simple-random-walk-levy-processes.md
## What it is (1-2 sentences)
Lototsky & Pollok (arXiv:2002.03448v1, math.PR, 2020): a purely analytical extension of the Kelly criterion from Bernoulli bets to general return distributions, continuous-time compounding, and high-frequency limits — giving a general growth-rate function gr(f), finite-horizon CLT wealth bands, and a closed-form optimal fraction for lognormal payoffs. Ledger verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- General growth rate: gr(f) = E[ln(1 + f·r)] (eq. 2.5), maximized for optimal f*; wealth asymptotics W_n^f = exp(n·gr(f)·(1 + ε_n)), ε_n → 0 a.s.
- CLT refinement (Thm 2.1, eq. 2.10): W_n^f = exp(n·gr(f) + √n·σ_r(f)·ζ_n + ϵ_n), with σ_r(f) = (E[ln²(1+fr)] − gr²(f))^{1/2} — finite-horizon wealth confidence bands.
- Concavity: dgr/df = E[r/(1+fr)], d²gr/df² = −E[r²/(1+fr)²] < 0 (Prop 2.2, eq. 2.11); interior optimum conditions lim_{f→0+} E[r/(1+fr)] > 0 and lim_{f→1−} E[r/(1+fr)] < 0 ⇒ unique f* ∈ (0,1) (Prop 2.3).
- High-frequency limit (Thm 4.1, eq. 4.5): n bets per unit time, r_{n,k} = μ/n + (σ/√n)·ξ_{n,k} ⇒ W_t^f = exp((fμ − f²σ²/2)·t + fσ·B_t).
- Lognormal closed form (Thm 4.2, eq. 4.16): for P_t = e^{bt+σB_t}, optimal f* = b/σ² + 1/2. Binary case recovered: f* = 2p − 1, max gr = p·ln(p/(1−p)) + (2−p)·ln(2−2p).
- Admissibility: P(r ≥ −1) = 1 (losses bounded by 100%), P(r>0)>0 and P(r<0)>0, E|ln(1+r)| < ∞; NS-NL (no short, no leverage), f ∈ [0,1].
## Data sources named
None — purely analytical. Numerical experiments only (lognormal case, σ = 1, n = 10 bets per unit time); no empirical market or betting data.
## Findings (numbers and facts, not vibes)
- Thm 4.2 numerics: discrete-time optimal fractions at n = 10 match the closed form f* = b/σ² + 1/2 closely for all b ∈ (−1/2, 1/2) — the high-frequency formula is usable at realistic rebetting frequencies, not just asymptotically. (OTHER — non-binary Kelly sizing for props/parlays)
- CLT wealth bands (Thm 2.1) give rigorous finite-horizon bankroll uncertainty — no ad-hoc profit framing needed. (OTHER — bankroll reporting)
- Limitations: fat-tailed Lévy cases derived but not simulated; closed form applies only to lognormal/GBM; conditions (2.2)–(2.4) exclude some extreme heavy-tail models; Thm 4.1's T = +∞ version explicitly unavailable. (OTHER — scope caveat)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Non-binary gr(f) maximization from engine-simulated return distributions → Kelly sizing for props/derivatives with non-binary payouts (complements ledger 0813's binary games and 1200's lognormal asset portfolios; this is the only corpus source for derivative-like payoffs). (OTHER)
- Thm 2.1 wealth bands → weekly bankroll confidence bands for published cards. (OTHER)
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content in this file.
## Engine-actionable? (yes/no + one-line what)
yes — Maximize gr(f) = E[ln(1+fr)] numerically (1-D concave) per pick from engine-simulated return distributions for non-binary props, use Thm 2.1 σ_r(f) bands for weekly bankroll confidence reporting, and size approximately-lognormal payoff props with f* = b/σ² + 1/2 (per ledger §11–14).

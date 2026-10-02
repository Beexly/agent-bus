# arxiv-program/research/2026-09-21/arxiv-deep/1204-kelly-criterion-variable-payoff.md
## What it is (1-2 sentences)
A 5-page analytical note deriving the Kelly-optimal fraction when the pay-off b is a random variable with known distribution ρ (motivated by poker cash games and trading), proving via Jensen's inequality that the variable-payoff Kelly fraction is ≤ the constant-average-payoff Kelly fraction. Verdict in file: REJECT — subsumed by existing GSE Kelly ledgers (0171, 0626, 0813); NFL markets have fixed known decimal odds at bet time, so the result has no GSE application.

## Key metrics/methods (formulas where given, else "not specified")
- Expected growth rate: g(f) = q·log(1−f) + p·∫₀^∞ log(1+bf)·ρ(b)db, maximized over f ∈ [0,1]; unique maximizer via strict concavity.
- Classical Kelly: f*(p,b) = p − q/b = [p(1+b) − 1]/b, from g(f) = p·log(1+bf) + (1−p)·log(1−f).
- Favorability with variable pay-off: p(1 + ∫₀^∞ b·ρ(b)db) > 1 (eq. 1) — identical to the constant-payoff condition with average pay-off b̄.
- Fundamental integral equation (Theorem 3.1): f̂(p,ρ) solves ∫₀^∞ [b·ρ(b)/(1+bf̂)]db − (1−p)/[p(1−f̂)] = 0 (eq. 2).
- Corollary 3.2: f̂(p,ρ) ≤ f*(p,b̄), b̄ = ∫bρ(b)db; equality iff pay-off is constant (Dirac ρ), by Jensen on concave h(b) = b/(1+bf̂).
- Assumptions: p constant across rounds; ρ known, non-negative, finite integral; no minimum bet unit; no leverage (remark notes Thorp's leveraged-risk extension).

## Data sources named
None — pure theory note, no empirical data, no simulations; the Pareto-tail remark cites the author's own arXiv:1409.4857 as a model with no data analyzed.

## Findings (numbers and facts, not vibes)
- No numerical results. The only quantitative content is the inequality f̂ ≤ f*(p,b̄) and the integral equation (2).
- The "uncertain pay-off ⇒ shade down" result is a one-line corollary of conservative-Kelly principles already adopted in GSE's Kelly protocol (ledgers 0171 ADOPT, 0626 ADAPT, 0813 ADAPT).
- No treatment of correlated rounds, time-varying p, or transaction costs; assumes ρ is known, sidestepping the estimation-error problem (compare ledger 0626, which handles probability uncertainty directly).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (staking doctrine): reinforces the existing conservative-Kelly stance ("uncertain payoff ⇒ bet smaller than the average-payoff Kelly fraction") — formal backing for shading down when payout is uncertain, but no new protocol beyond what ledgers 0171/0626/0813 establish.
- OTHER (speculative future lane): the file notes that if variable pay-offs ever enter GSE (e.g., cash-out values in live betting), the integral equation (2) would be the sizing primitive — not current GSE.

## Engine-actionable? (yes/no + one-line what)
no — REJECT: adds only the Jensen inequality formalizing "uncertain pay-off ⇒ shade down," already covered by the adopted Kelly protocol; GSE bet types (spread/moneyline/total) have contractually fixed decimal odds known before the bet.

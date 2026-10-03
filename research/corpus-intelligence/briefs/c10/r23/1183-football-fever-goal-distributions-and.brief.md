# research/2026-09-21/arxiv-deep/1183-football-fever-goal-distributions-and.md
## What it is (1-2 sentences)
Ledger read of arXiv:physics/0606016v1 (Bittner et al., 2006): head-to-head of Poisson vs negative binomial (NBD) vs GEV vs self-affirmation feedback models for per-team goal distributions across many football leagues. Verdict: **ADAPT** — a classic overdispersion benchmark giving GSE a principled menu for score-distribution tails, plus an explicit warning that apparent momentum may be spurious team-strength heterogeneity.

## Key metrics/methods (formulas where given, else "not specified")
- Additive feedback: p(n) = p(n−1) + κ; multiplicative feedback: p(n) = κ·p(n−1); recurrence P_N(n) = [1−p(n)]·P_{N−1}(n) + p(n−1)·P_{N−1}(n−1).
- Additive-model continuum limit: NBD with r = p₀/κ, p = 1 − e^{−κt} (mechanistic reading of NBD parameters).
- Goodness-of-fit per league, cross-league replication as robustness; no train/test split (descriptive model selection).
- Within-match home/away goal correlations: R = −0.015 ± 0.011 (Oberliga), R = −0.031 ± 0.009 (Bundesliga).

## Data sources named
Historical league archives: ~12,800 Bundesliga (1963/64–2004/05), ~7,700 East German Oberliga, ~1,050 Frauen-Bundesliga, ~3,400 FIFA World Cup qualifiers, plus other European leagues; schema = per-match home/away goal counts. No covariates.

## Findings (numbers and facts, not vibes)
- Poisson systematically underfits heavy tails; NBD fits well in most domestic leagues; the multiplicative-feedback model handles the heavier-tailed World Cup qualifying data best; GEV competitive in some leagues. [OTHER]
- The multiplicative feedback family is the best performer on heavy-tailed (high-variance) competitions — directly relevant to totals pricing of extreme outcomes. [OTHER]
- Within-match home/away goal correlation is weak negative (~−0.02 to −0.03, barely significant): no meaningful in-match goal coupling detected. [SCHEME: goals (points) for one team carry no signal about the other's — INFERENCE, marginal independence assumption supported]
- Authors' own warning: apparent self-affirmation/contagion may be spurious — an artifact of mixing heterogeneous team strengths, not genuine in-match momentum. GSE must NOT cite this as evidence of momentum. [TRUST-SIGNAL: methodological discipline binding on any GSE momentum claim]
- Caveat: soccer goals, not NFL points (scores come in 3s/7s); transfer is at distributional-family level, not parameters. [OTHER]

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tags above. Core transferable items: (a) NBD parameters r = p₀/κ with mechanistic feedback reading; (b) the multi-family shootout method for choosing GSE's score-distribution family; (c) the spuriousness warning as a check on any GSE "momentum" analysis (e.g., requires team-strength controls before claiming QB-BEHAVIOR or COACHING momentum effects).

## Engine-actionable? (yes/no + one-line what)
Yes — run the NBD-vs-Poisson-vs-feedback shootout on NFL team points-per-game (nflverse 2015–2025, out-of-sample log-likelihood, hierarchical team-strength controls), and adopt the winner for totals tail pricing; gate: beat Poisson by ≥0.01 nats/game with paired p<0.05. Paper's spec also proposes script-dependent κ (trailing vs leading teams' scoring feedback) as a garbage-time/score-effect adjustment for totals.

# research/2026-09-21/arxiv-deep/1193-self-affirmation-model-for-football-goal.md
## What it is (1-2 sentences)
Ledger read of arXiv:0705.2724v1 (Bittner et al., 2007): a physics derivation showing the self-affirmation feedback model of soccer goal counts subsumes the negative-binomial and GEV fits (Model A → NBD limit with r = p₀/κ, p = 1 − e^{−κN}) via χ² goodness-of-fit on historical league data. Verdict: **REJECT** — purely descriptive, zero out-of-sample forecasting, no calibration, no betting test; replaced by ledger 1352.

## Key metrics/methods (formulas where given, else "not specified")
- Model A (additive): p(n) = p0 + κn; Model B (multiplicative): p(n) = p0·κ^n; Model C: coupled home/away multiplicative feedback.
- Recurrence: P_N(n) = [1−p(n)]·P_{N−1}(n) + p(n−1)·P_{N−1}(n−1).
- NBD limit of Model A: r = p0/κ, p = 1 − e^{−κN} (N→∞ with p0·N, κ·N fixed).
- Validation: in-sample χ²/dof against Poisson, NBD, GEV — no train/test split, no time-ordered validation.

## Data sources named
Bundesliga ~12,800 matches (1963/64–2004/05); Oberliga ~7,700 (1949/50–1990/91); Frauen-Bundesliga ~1,050 (1997/98–2004/05); FIFA World Cup qualification ~3,400 (1930–2002, neutral-site knockouts excluded). Schema: home/away goal counts only; sources described as football statistics archives with no URL — effectively unreplicable as stated.

## Findings (numbers and facts, not vibes)
- Model B (multiplicative) generally the best fit, χ²/dof (home/away): Oberliga 0.75 / 3.35; Bundesliga 1.25 / 1.96; Frauen-Bundesliga 3.24 / 0.95; World Cup qualification 0.92 / 0.80. [OTHER]
- Model A reproduces the NBD in the stated limit — unifies the phenomenological fits as special cases of the feedback framework. [OTHER]
- Men's vs women's leagues and Cold-War East vs West German leagues show "remarkable differences" in fitted feedback parameters — qualitative only, no predictive use. [OTHER]
- Era-pooled fits (1963–2005 Bundesliga treated as one distribution despite structural change); feedback parameter is a league-level constant, not a team trait — cannot rate or rank teams. [TRUST-SIGNAL: limits the finding to descriptive league-level statistics]
- Zero predictive content: the paper never forecasts a match, goal count, or market price; no calibration, no proper scoring rule, no betting test. [OTHER]

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tags above. No QB-BEHAVIOR/COACHING/OL/SCHEME content — the feedback parameter is league-level and non-predictive.

## Engine-actionable? (yes/no + one-line what)
No — rejected at the problem level (no prediction produced, no numeric gate satisfiable); the transferable fragment (multiplicative feedback count process) would need rebuilding as a team-level, time-ordered, market-tested model, i.e., a different paper. Replaced by ledger 1352.

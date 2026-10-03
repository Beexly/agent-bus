# docs/arxiv-program/research/2026-09-21/arxiv-deep/1086-set-valued-elicitability-prediction-intervals.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:1910.07912v2 (Fissler, Frongillo, Hlavinová, Rudloff): theoretical framework on forecast evaluation of quantiles, prediction intervals, and set-valued functionals. Verdict: ADAPT — the rigorous evaluation discipline for the prediction intervals GSE publishes everywhere.
## Key metrics/methods (formulas where given, else "not specified")
- Exhaustive consistent score for α-prediction intervals (4.6): S_exh(A,y) = αμ(A) − μ(((−∞,y]×[y,∞))∩A); normalized mixture form (4.8): S_μ = (1−α)μ(((−∞,y]×[y,∞))∖A) + αμ(A∖((−∞,y]×[y,∞))).
- Elementary scores S_u → Murphy diagrams: plot mean score difference Δ(u) over parameter grid u∈U; variant dominance under every consistent scoring function.
- Theorem 4.16: the *shortest* α-prediction interval (α∈(0,1)) is NOT elicitable in either selective or exhaustive sense — first non-degenerate nowhere-elicitable set-valued functional; governance rule: never target "tightest calibrated interval".
- Vorob'ev quantiles of random sets: S̃_α = αμ(X) − μ(Y∩X) (5.2); elementary S_{α,u} = α1_{X∖Y}(u) + (1−α)1_{Y∖X}(u) (5.4); α=1/2 case = symmetric difference in measure.
- Quantile endpoints ARE elicitable via pinball loss (Prop. 4.9); fixed-constant endpoint/midpoint specs elicitable (Appendix A).
- Pure theory; no empirical validation in the paper.
## Data sources named
None — pure theory with constructive uniform-mixture counterexamples (G_1,G_2,G_3 on [0,1],[1,2],[3,1+2/α]) in the Theorem 4.16 proof.
## Findings (numbers and facts, not vibes)
- Class I_α of α-prediction intervals is exhaustively elicitable (Theorem 4.2) with explicit integral scoring function and elementary-score mixture representation.
- Theorem 3.7: for functionals with the proper-subset property, selective and exhaustive elicitability are mutually exclusive — quantiles are selectively elicitable, hence never exhaustively; interval sets can never be scored selectively. Mixing modes invalidates comparisons.
- Coverage-only evaluation (V_sel = 1{y∈[x_1,x_2]} − α) is an identification function, not a score — it cannot rank intervals.
- Discrete outcomes (NFL integer totals) break singleton-quantile regularity: consistency survives, strict consistency degrades.
- Numeric gate proposed: promote challenger engine only if its Murphy curve lies at/below incumbent's on ≥95 of 100 elementary-score grid points + DM significance.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Replace ad-hoc coverage+width interval evaluation with S_μ (4.8) + Murphy-diagram dominance: TRUST-SIGNAL (engine-variant selection discipline; score-choice-robust governance).
- Shortest-interval prohibition (Theorem 4.16) also extends to minimal-volume multivariate regions: TRUST-SIGNAL (forbids a class of analyst/engine targets).
- Quantile-endpoint intervals as the sound interval target: OTHER (calibration infrastructure).
## Engine-actionable? (yes/no + one-line what)
Yes — score all published prediction intervals (game-total/spread/DFS 90% PIs) with the consistent exhaustive score, gate engine-variant promotion on Murphy-diagram dominance, and retire any "shortest interval" target.

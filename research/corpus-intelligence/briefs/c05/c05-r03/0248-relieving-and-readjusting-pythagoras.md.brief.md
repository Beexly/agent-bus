# arxiv-program/research/2026-09-21/arxiv-deep/0248-relieving-and-readjusting-pythagoras.md
## What it is (1-2 sentences)
Luo & Miller (2016, Williams College) attempt to improve baseball's Pythagorean win formula by modeling runs scored/allowed as a linear combination (mixture) of two Weibull distributions while keeping closed-form tractability. Verdict in file: REJECT — the significant improvement is only over the paper's own single-Weibull strawman, not over the one-line formula everyone uses, and the method cannot transfer to 17-game NFL seasons.
## Key metrics/methods (formulas where given, else "not specified")
James: W-L% = RS²/(RS²+RA²); empirical exponent ≈ 1.83. Weibull density f(x;α,β,γ) = (γ/α)((x−β)/α)^{γ−1} e^{−((x−β)/α)^γ}, x ≥ β. Mixture win probability (Theorem 2.2, closed form): P(X>Y) = Σ_iΣ_j c_i c'_j · α_{RS_i}^γ / (α_{RS_i}^γ + α_{RA_j}^γ), with weights c_1+c_2 = 1. Fitting: 7 free parameters per team-season by least squares on half-integer-binned per-game runs; χ² goodness-of-fit (16 df, Bonferroni thresholds 37.7/42.5); two-sample t-tests for comparisons.
## Data sources named
MLB team-season runs scored/allowed, all 30 teams, 2004–2012 (fit); comparison vs baseball-reference.com's pythWL 1979–2013; 162 games per team-season.
## Findings (numbers and facts, not vibes)
2011: fitted γ mean 1.83 (sd 0.18, median 1.79) — reproduces the empirical exponent from theory; mean |games off| 2.89 (sd 2.34). 2004–2012: mixture mean games off 3.11 (sd 2.33) vs single Weibull 4.22 (sd 3.03) — ~25% improvement, significant (p < 0.01). BUT vs baseball-reference pythWL (1979–2013): mixture 3.03 (sd 2.21) vs pythWL 3.09 (sd 2.26) — only 0.06 games better, NOT significant (very large p-value). Era split: pythWL better 1979–1989 (7/11 years); mixture better 1990–2013 (15/24 years, ~0.3 games when it wins). Simplification attempts failed: mixture weights highly volatile (c_1 mean 0.21, sd 0.39); fixing parameters gave "significantly worse" predictions. χ² tests: independence of runs scored/allowed holds modulo structural zeros.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: negative evidence — a theoretically elegant 7-parameter improvement over a simple exponentiated formula loses to the simple formula out of the box; instructive caution for engine complexity decisions.
- TRUST-SIGNAL: the honest decomposition (significant vs own strawman, n.s. vs deployed baseline) is the standard GSE should hold for any "improved" metric claim.
## Engine-actionable? (yes/no + one-line what)
No — REJECT per file; nothing to adopt, though Pythagorean residual (actual − expected wins) as a next-season regression feature for win-total bets is flagged as a cheap classic signal needing no Weibull machinery.

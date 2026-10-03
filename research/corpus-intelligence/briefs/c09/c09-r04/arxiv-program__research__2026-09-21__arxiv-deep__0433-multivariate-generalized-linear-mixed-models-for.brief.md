# arxiv-program/research/2026-09-21/arxiv-deep/0433-multivariate-generalized-linear-mixed-models-for.md
## What it is (1-2 sentences)
A multivariate generalized linear mixed model (arXiv:1710.05284v1, Broatch & Karl 2017) that jointly estimates team strength by modeling binary win/loss outcomes together with game-level responses (YPP, sacks, fumbles, scores) via correlated team-level offense/defense/win-propensity random effects; Motif verdict ADAPT for NFL team strength.
## Key metrics/methods (formulas where given, else "not specified")
- Team random effects: b_j = (b^o_j, b^d_j, b^w_j)′ ~ N_3(0, G*) with unstructured 3×3 covariance
- Heuristic: E[y_ih] = f_1(b^o_h − b^d_a); E[y_ia] = f_1(b^o_a − b^d_h); P(r_i=1) = f_2(b^w_h − b^w_a)
- Game sub-model: bivariate normal y_i|b ~ N_2(X_i β + Z_i b, R*) or Poisson log μ = Xβ + Zb (+ optional game-level random effect a_i for intra-game correlation)
- Binary probit: Φ⁻¹(π_i) = W_i α + S_i b
- Joint likelihood: L(β,G,R) = ∫ f(y|b) f(r|b) f(b) db — conditional independence given correlated random effects
- Fit: EM with first-order and fully exponential Laplace approximations (R package mvglmmRank); evaluation: 10-fold CV per season, log-loss for win probs, sign tests (α=0.05) on median differences
## Data sources named
NCAA football 2005–2013 (9 seasons; cfbstats.com, github.com/10-01/NCAA-Football-Analytics) — game-level YPP, sacks, fumbles, scores + binary home-win indicator; 19 NCAA men's basketball tournaments (1996–2014) — team scores + discretized home-win indicators
## Findings (numbers and facts, not vibes)
- YPP+win: joint (NB) beats binary-only on win log-loss in ALL years 2005–2013 (significant); beats normal-only on YPP residuals all but 2006 (significant 2007, 2010, 2013); home teams gain more YPP (p<0.0001 all years); intra-game opponent YPP correlation 0.05–0.15
- Sacks+win: joint beats binary on win log-loss significantly every year 2005–2013; game-level random effect hurts (no intra-game sack correlation); home-team sack frequency higher (significant 2007, 2008, 2009, 2011)
- Fumbles+win: no significant win-log-loss improvement in any season (clean null — deliberately chosen irrelevant-response control)
- Scores+win: joint beats binary on win log-loss significantly all years (despite near-singular Hessian); improvement ordering: score-model > YPP-model > sack-model; P1 beats P0 on score residuals every year (significant in 4) — real intra-game score correlation
- 2005 random-effect correlations: YPP model corr(off,win)=0.85, corr(def,win)=0.82, corr(off,def)=0.50; sacks: corr(sack-propensity,win)=0.89, corr(def,win)=0.61; fumbles: corr(off,win)=−0.31, corr(def,win)=−0.79, corr(off,def)=−0.10 (near-noise); scores: corr(off,win)=0.94, corr(def,win)=0.90, corr(off,def)=0.71
- NCAA tournament: joint NB beats binary-only in 17 of 19 tournaments; t-test on yearly log-loss differences p=0.0002
- Fully exponential Laplace corrections improved 17 of 18 basketball binary models
- Demo: 2012 Alabama–Notre Dame title game — joint model gave Notre Dame 22.2% win prob (correct direction; binary-only said 62.5% and was wrong; Alabama won)
- Reader's limitations: game-level (not temporal) CV folds leak in-season info; multiple comparisons uncorrected; score+win Hessian near-singular (win ≈ discretized score difference); small CFB seasons; no covariates beyond home/away/neutral
- GSE overlap: extension — no joint hierarchical team-strength model exists in GSE corpus (rating inventory is outcome-only models, not joint outcome+efficiency with correlated random effects)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Team-strength rating methodology — joint offense/defense/win-propensity hierarchical modeling as a spread/total input and weekly ratings feed
- OTHER: Unit correlations with winning — corr(off,win), corr(def,win) estimates as matchup-narrative features
- COACHING: Decomposition of why a team wins (offense- vs defense-driven win propensity)
## Engine-actionable? (yes/no + one-line what)
Yes — reimplement the joint GLMM on nflverse 2015–2025 (EPA/play + win/loss, per-season, expanding weekly walk-forward) in Stan/TMB as a team-strength module candidate, gated on beating the binary-only baseline by ≥0.002 log-loss on 2024–2025 walk-forward

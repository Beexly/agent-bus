# arxiv-program/research/2026-09-21/arxiv-deep/1638-coaching-tactics-home-advantage-serie-a.md
## What it is (1-2 sentences)
A rigorous econometric evaluation of coaching tactical decisions in Serie A (1,140 matches, 2011/12–2013/14), hand-coding an "offensiveness index" from match commentary and estimating its causal-adjacent effect on win probability via triple-outcome GLMs with model averaging and bootstrap inference. The authors are unusually honest about the coach-selection endogeneity problem.
## Key metrics/methods (formulas where given, else "not specified")
- Offensiveness index: s = defenders×1 + midfielders×2 + forwards×3 (range 10–30); three versions (all-players, active-players, normalized: s₃ = (s₂/active)×(10/30)); measured as initial (t=0) vs final (t=90) scheme.
- Models: OLS on goal difference E[y|X]=Xθ; logit on home win P(y=1)=e^{Xβ}/(1+e^{Xβ}); ordered logit on home points P(y≤h)=g(π_h−Xθ); HC3 sandwich SEs, nonparametric bootstrap B=1000, BCa CIs.
- Selection: full subset search with AIC/BIC; Akaike-weight model averaging over top 2.5%/5% specs (393/317/107 specs); shrinkage estimator θ̃=Σw_l θ̂_l with Burnham–Anderson variance; Brant proportional-odds test (p=0.76).
## Data sources named
Virgilio/legaseriea.it/ESPN non-lemmatized match commentary; 157,985 event observations hand-collected and cross-checked; 146-variable panel (controls: stadium filling index, extra time, pre-match ranking-points difference; fixed effects: season, league day, extreme scorelines, 26 team dummies). No code/data link.
## Findings (numbers and facts, not vibes)
- Initial scheme (aggressive opening): +0.30 goal diff (p<0.001), logit coeff 0.54 (p<0.001), ordered-logit 0.53 (p<0.001). Final scheme: −0.25/−0.50/−0.49 (all p<0.001).
- Marginal effect: aggressive home opening raises win probability ≈9.44–16.17% (BCa, at the mean).
- "Cross paradox": crosses −0.01/goal-diff unit (p<0.001); shots +0.04 (p<0.001); goal kicks +0.03 (p<0.001); red cards −1.06 goal diff (p<0.001); penalties +0.33 (p<0.001); yellow cards −0.06 (p=0.013); ranking difference +1.47 (p<0.001).
- Stadium filling insignificant at all powers (p>0.85) — fan composition unmeasured.
- Fit: adj. R² 0.44–0.45; logit accuracy 0.75, sensitivity 0.77, specificity 0.73, F1 0.77; McFadden R² 0.44. Home win base rate 46.58%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: aggressiveness-index construction ports to NFL play-calling aggressiveness (early-down pass rate vs expected, fourth-down go-rate vs WP model, blitz rate); the initial-vs-final scheme split maps to game plan (Q1) vs in-game adjustment (Q4); 9–16% win-prob effect is a content-ready headline metric.
- SCHEME: formation-as-offensiveness-index is a reusable template for quantifying scheme aggression from personnel/role data.
- TRUST-SIGNAL: authors' explicit endogeneity honesty (coach assignment not random; IV/panel work left for future) is the integrity standard for GSE coaching-effect claims.
## Engine-actionable? (yes/no + one-line what)
Yes — build per-game NFL coaching aggressiveness indices (Q1 game plan vs Q4 adjustments) with the triple-outcome OLS/logit/ordered-logit + Akaike-weight averaging + BCa pipeline, using within-coach variation (coordinator changes) for causal claims.

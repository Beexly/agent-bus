# research/2026-09-21/arxiv-deep/0501-statistical-enhanced-learning-for-modeling-and.md
## What it is (1-2 sentences)
Deep-read ledger for Buhamra & Groll (2025), arXiv:2502.01613v2 — "statistical enhanced learning" for Grand Slam tennis: augmenting conventional covariates (age, rank, points) with statistically motivated engineered features (Elo ratings, nonlinear age transformations) improves out-of-sample match-winner prediction across logistic regression, GAM/spline, and random forest. The intake verdict is **ADAPT**: the enhanced-feature recipe (Elo + nonlinear age transforms as differences) and the strictly time-ordered expanding-window evaluation protocol port directly to NFL team-strength modeling; tennis-specific features are dropped.

## Key metrics/methods (formulas where given, else "not specified")
- Enhanced features (faithful to paper): Age.30 = |age − 30|; Age.int = 0 if 28 ≤ age ≤ 32, else min(|age − 28|, |age − 32|); all covariates x enter as player differences x = x_player1 − x_player2.
- Three model classes, each fit on 21 feature combinations (conventional, enhanced, mixed; singles, pairs, triples, full set): logistic regression (linear); GAM with P-splines (Eilers & Marx) for nonlinear covariate effects; random forest — 400 trees, mtry tuned via 10-fold cross-validation (ranger implementation, Wright & Ziegler 2017).
- Framework reference: Felice et al. 2023, arXiv:2306.17006.
- Validation: expanding-window prediction on the four 2022 Grand Slams (train on all prior tournaments); Appendix A: leave-one-tournament-out CV over all 47 tournaments; Appendix B: rolling window of the last 12 tournaments. All splits strictly time-ordered. Metrics: classification rate, likelihood (mean predicted probability of the true outcome), Brier score.

## Data sources named
- 5,013 matches from 47 men's Grand Slam tournaments, 2011–2022, assembled with the R package `deuce` (Kovalchik 2019) — public. No missing values; retirements and walkovers excluded.
- Elo ratings computed on the 2011–2022 window (UNCERTAIN: the paper does not document whether Elo was recomputed strictly expanding-window — possible lookahead).
- Model code: none stated in paper.

## Findings (numbers and facts, not vibes)
Main expanding-window results (exact as printed):
- Linear, Points+Rank+Elo: classification 0.795.
- Linear, Points+Elo+Age.int: likelihood 0.701.
- Best linear Brier: 0.153.
- Spline, Elo+Age.30: classification 0.792, likelihood 0.703, Brier 0.149.
- RF, Points+Rank+Age.30+Elo (table): 0.820 classification, 0.667 likelihood, 0.151 Brier; conclusion reports classification 0.8202.
Appendix A (leave-one-tournament-out), exact bests:
- Linear: Rank+Elo classification 0.749; Points+Rank+Elo likelihood 0.659, Brier 0.170.
- RF: Rank+Elo classification 0.773; Points+Rank+Elo likelihood 0.645, Brier 0.174.
Appendix B (rolling 12-tournament window), exact bests:
- Linear: classification ~0.647 (Points+Rank+Age.int); likelihood 0.501; Brier 0.293.
- RF: Points+Rank+Age.30+Elo — classification 0.789, likelihood 0.659, Brier 0.165.
- Pattern: enhanced features (Elo + age transforms) help most model classes/metrics; RF with the full enhanced set wins overall; the rolling short window degrades linear models sharply but RF holds up.
- Caution flags in the ledger: (a) Elo lookahead not documented; (b) the paper's stated subtraction direction and its later coefficient interpretations appear inconsistent — sign of every reported effect is suspect until re-derived; (c) no betting-odds benchmark, so "0.82 classification" has no market-relative meaning; (d) Grand Slams only (best-of-5) — may not transfer beyond tennis; (e) likelihood/Brier gains are modest in absolute terms (e.g., Brier 0.153 → 0.149).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — QB/team age-curve lane (primary): The nonlinear age transforms (Age.30 = |age−30|, Age.int = distance outside [28,32]) port directly to the QB-behavioral profile program as roster/QB age-curve features: (a) roster-age transforms |mean starter age − 27|, distance outside [25,29]; (b) QB-age curve transforms |qb_age − 29|, distance outside [27,32]. The ledger's improvement experiment goes further: learn the *shape* of the age transform instead of hand-picking it — fit a 1D P-spline on QB age and on roster mean age inside the GAM, then distill the fitted spline into a piecewise-linear feature for the production logistic model — which would give GSE an interpretable, publishable age-curve artifact for content.
- OTHER — team-strength modeling lane: The whole recipe transfers to NFL team-strength modeling: team-strength differences (Elo diff from the existing GSE pipeline) plus "statistically enhanced" transforms — rest-day asymmetry transforms, rolling EPA/play with nonlinear recency decay — across 3 model classes × feature-set ablation mirroring the paper's 21-combo design. The Elo component itself is DUPLICATE (GSE already has Elo, Glicko, TrueSkill deeply covered); the new parts are (a) the age-curve feature engineering (no age-curve features exist in the map for NFL), and (b) the discipline of reporting expanding-window AND rolling-window evaluation side by side (ML brief lists this as commissioned but not yet delivered).
- OTHER — trust-target intake / calibration: The pre-registered acceptance gate is the model: pooled held-out log-loss improvement ≥ 0.005 over the Elo-only logistic baseline AND the gain in ≥ 5 of 7 held-out seasons (consistency, not one lucky year); reject if pooled gain < 0.002 or concentrated in ≤ 2 seasons. That gate template is directly reusable for any GSE feature-set adoption decision — an audit-receipt standard for "did this feature actually help."
- CONTRADICTION (UNCERTAIN): The subtraction-direction inconsistency between stated feature construction and coefficient interpretation means the sign of every reported effect is suspect — any reimplementation must re-derive signs; do not quote the paper's directional claims in content.
- OL / SCHEME: No connection; tennis is two-player zero-sum with no teammates, no coaching adjustments, no weather — the feature-engineering philosophy transfers, the features do not.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the NFL analog: 3 model classes × enhanced feature-set ablation (Elo diff + roster/QB age transforms + rest transforms) on nflverse 2015–2025 with expanding + rolling windows (~2 weeks), pre-registered gate: pooled held-out log-loss gain ≥ 0.005 in ≥ 5 of 7 seasons.

# arxiv-program/research/2026-09-21/arxiv-deep/1318-formation-impact-double-machine-learning.md
## What it is (1-2 sentences)
Deep-research ledger of arXiv:2602.16830 (Ruiz-Menárguez & Badiella, 2026) estimating causal effects of formation combinations on soccer match outcomes via Double Machine Learning on 22,000+ European fixtures. Contribution is methodological: DML extended to categorical treatments via effect-coded formation-combination dummies — directly portable to NFL personnel-grouping, defensive-front, and 4th-down go decisions. Verdict: ADAPT. (Replaces ledger 1130, which was REJECT — no empirical content.)

## Key metrics/methods (formulas where given, else "not specified")
- Double Machine Learning (Chernozhukov et al. 2018): Y = Dβ + Xγ + ε. Stage 1: XGBoost regressor (max_depth capped at 5, tuned on −MSE) predicts Y from confounders X → residual rY. Stage 2: separate XGBoost per treatment dummy predicts Di,j from X → residual rDi,j. Stage 3: OLS of rY on all rDi,j → β̂i,j. Cross-fitting/sample splitting; orthogonality holds per dummy after residualization.
- Categorical-treatment innovation: k = 6 formations → k²−1 effect-coded dummies: Di,j = 1 for formation-combo (i,j) rows, −1 for omitted Dk,k rows, 0 otherwise; omitted combo's effect recovered as β̂k,k = −Σβ̂(others); diagonal βk,k = 0 by construction; matrix theoretically symmetric β̂i,j = −β̂j,i (deviations = ML approximation).
- Final-stage model: rY = Σ βi,j·rDi,j + ϵ; significance judged by p-values (∗∗∗ p<0.001, ∗∗ p<0.01, ∗ p<0.05, ns ≥0.05).
- Side adjustment: β̂_side(i,j) = β̂i,j + E(Ŷhome) combines pure formation effect with home advantage.
- Confounders: season, league, day of week, home/away, accumulated points ratio (home/away), UCL-participation flag, league ranking at fixture time, winning streak, weather. Betting odds excluded (endogeneity); mediators (in-game goals, possession, fouls, substitutions) excluded.
- Assumptions: unconfoundedness given X; no interference between fixtures; formation grouping preserves causal contrast; nominal starting formation = treatment (in-game changes acknowledged as limitation).

## Data sources named
Sportmonks API (commercial): 22,000+ professional league fixtures, seasons 2018–19 through 2024–25; first divisions of England, Italy, Spain, Germany, France, Netherlands, Portugal + Turkey, Belgium, Poland + Spain/Italy/England second divisions. Cleaning: dropped playoffs/play-outs; dropped first 2 and final 4 rounds per season; dropped incomplete Belgian/Turkish seasons. 28 distinct formations grouped by expert consultation + tactical similarity into 6 categories (5-4-1, 4-4-2, 3-5-2, 4-2-3-1, 4-3-3, 3-4-3). No code/dataset released.

## Findings (numbers and facts, not vibes)
- First-stage XGBoost test diagnostics: goals MSE 2.70 / R² 0.118; red cards 0.19 / 0.003; yellow cards 3.18 / 0.030; possession 343.35 / 0.298; corners 7.98 / 0.781 (cards essentially unpredictable; corners highly predictable from confounders — honestly reported).
- Goal difference — 3 significant combos: 4-2-3-1 vs 3-5-2: +0.16 goals (p<0.001); 4-3-3 vs 5-4-1: +0.17 (p<0.05); 4-3-3 vs 4-4-2: +0.11 (p<0.05). All else ns. Home effect E(Ŷhome) = 0.285 goals (e.g., 4-2-3-1 home vs 3-5-2 ≈ +0.445 total).
- Red cards: zero significant combos — formation does not causally move red cards.
- Yellow cards: 3 significant: 5-4-1 vs 4-2-3-1 +0.16 (p<0.01); 3-5-2 vs 4-2-3-1 +0.17 (p<0.001); 3-5-2 vs 4-3-3 +0.16 (p<0.01) — defensive formations draw slightly more yellows (≈1 extra per 6 matches).
- Possession: 13 of 18 unique combos significant (mostly p<0.001); offensive-vs-defensive matchups systematically favor the offensive side; 4-3-3 strongest within offensive group.
- Corners: offensive vs defensive significant but small — e.g., 4-2-3-1 vs 5-4-1 +0.19, vs 4-4-2 +0.18, vs 3-5-2 +0.23, against a ~5/match average.
- Headline: no evidence parking the bus increases winning potential; formation effects on goals are small and sparse.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [COACHING] First application: causal effect of 4th-down go decisions (go vs kick) on WPA, residualized on team strength — direct upgrade of the associational 4th-down literature in-repo (2026-09-20 ngreenberg estimates).
- [SCHEME] Treatment template ports to offensive personnel groupings (11/12/21), defensive fronts/coverage shells — the effect-coded DML harness makes team-strength-confounded scheme questions causal.
- [COACHING] Improvement experiment: heterogeneous DML — interact residualized treatment with game state (score differential, quarter, field position) via causal forest on DML residuals to estimate CATEs of go-decisions by situation (the surface a coach actually needs).
- [OTHER] Acceptance gates the ledger specifies: placebo test |β̂_placebo| < 0.2·|β̂_real| with randomly permuted treatments; stability across two nuisance learners (sign agreement on all significant effects).

## Engine-actionable? (yes/no + one-line what)
Yes — build the three-stage DML harness (XGBoost max_depth 5 nuisance models, effect-coded treatment dummies, cross-fit by season, confounders = ELO/rest/weather/home/away/injuries/week with mediators excluded) on nflverse 2019–2025 play-by-play, starting with 4th-down go vs punt/FG on drive WPA, with the placebo-permutation and two-nuisance-learner refutation checks as gates.

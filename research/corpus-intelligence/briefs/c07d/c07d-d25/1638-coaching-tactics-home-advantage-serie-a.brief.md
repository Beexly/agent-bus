# arxiv-program/research/2026-09-21/arxiv-deep/1638-coaching-tactics-home-advantage-serie-a.md
## What it is (1-2 sentences)
Econometric evaluation of coaches' tactical aggressiveness in Serie A using a hand-coded minute-level tactical panel and an offensiveness index, estimating the effect of aggressive coaching decisions on match outcomes via triple-outcome GLMs (OLS/logit/ordered logit) with AIC/BIC subset search, Akaike-weight model averaging, and BCa bootstrap inference. Verdict in file: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Offensiveness index: defenders×1 + midfielders×2 + forwards×3, range 10–30; three versions (all-players, active-players, normalized); initial (t=0) vs final scheme.
- Normalized version: s^H_{i,t,3} = (s^H_{i,t,2}/active) × (10/30)
- Intensity weight: ω_it = n_it/n_i + 1
- Model 1 (OLS): E[y^(1)|X] = Xθ (home–away goal difference)
- Model 2 (logit): P(y^(2)=1) = e^{Xβ}/(1+e^{Xβ}) (home win)
- Model 3 (ordered logit): P(y^(3)≤h) = g(π_h − Xθ^(3)) (home points 0/1/3)
- Inference: HC3 sandwich SEs (Models 1–2), nonparametric bootstrap B=1000 (Model 3), BCa confidence intervals.
- Selection: full subset search over block-nested candidates with AIC/BIC; Akaike-weight model averaging over top 2.5%/5% candidates (393/317/107 specs) with shrinkage estimator θ̃ = Σw_l θ̂_l and Burnham–Anderson variance.
- Interaction screening (coach×referee, team×referee) in top-1% model sets.
- Diagnostics: Shapiro–Wilk, KS, Jarque–Bera, Breusch–Pagan, Ramsey RESET, Hosmer–Lemeshow, Lipsitz; Brant proportional-odds test (bootstrap-augmented).

## Data sources named
- Virgilio/legaseriea.it/ESPN non-lemmatized match commentary (hand-collected, cross-checked)
- 157,985 event observations from 1,140 Serie A matches (2011/12–2013/14), aggregated to minute-level balanced panel (90 min/match), 146 variables
- N=1,139 in models (one penalized match excluded)
- Stadium filling index; pre-match ranking-points difference; 26 team dummies; season, league day, extreme-scoreline fixed effects

## Findings (numbers and facts, not vibes)
- Initial scheme s2: +0.30 goal diff (Model 1, p<0.001); logit coeff 0.54 (Model 2, p<0.001); ordered-logit 0.53 (Model 3, p<0.001).
- Final scheme: −0.25/−0.50/−0.49 across the three models (all p<0.001) — aggressive initial tactics help, late adjustments correlate negatively.
- Marginal effect: aggressive home opening strategy raises win probability ≈9.44–16.17% (BCa CI, at the mean).
- Crosses: −0.01 per goal-diff unit (p<0.001; "cross paradox"); shots +0.04 (p<0.001); goal kicks +0.03 (p<0.001); red cards −1.06 goal diff (p<0.001); penalties +0.33 (p<0.001); yellow cards −0.06 (p=0.013); ranking difference +1.47 (p<0.001).
- Stadium filling insignificant at all powers (linear/quadratic/cubic, all p>0.85).
- Fit: adj. R² 0.44–0.45; Model 2 accuracy 0.75, sensitivity 0.77, specificity 0.73, F1 0.77; McFadden R² 0.44.
- Home win base rate 46.58%; goal-difference target range −7..6.
- Brant proportional-odds test p=0.76 (assumption holds).
- Model averaging confirms all main effects; coach–referee interactions never alter main-effect signs/significance.
- Authors flag the central weakness themselves: coach assignment is endogenous (coaches aren't randomly assigned; hiring correlates with expectations/resources) — IV or panel methods left to future work. Commentary-derived tactics are coarser than tracking data; free kicks carry little signal; fan composition unmeasured; no out-of-sample prediction test.
- References complementary paper 1579 (MCPS counterfactual rollouts) as econometric sibling, and improvement-experiment target 1572 VTCS temporal framework.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **COACHING:** The triple-outcome + model-averaging + BCa pipeline is the lane's best template for observational coaching-decision evaluation — ports to quantifying a new NFL HC's tactical impact or 2026 kickoff-rule effects. Initial-vs-final aggressiveness design (game-plan aggressiveness vs in-game adjustments) maps to NFL Q1 vs Q4 decision indices. Serves the coaching-tendencies program.
- **SCHEME:** The offensiveness-index construction (role-weighted formation aggressiveness, 10–30 scale) is the direct analog for NFL play-calling aggressiveness indices (pass rate over expected, fourth-down go-rate vs WP model, blitz rate) — initial (game plan) vs final (Q4 adjustments) versions. Serves scheme-intake and coaching-tendencies programs.
- **QB-BEHAVIOR:** Aggressive opening strategy effect (+9.44–16.17% win prob) interacts with underdog status in the improvement experiment — aggressive openings may matter more for underdogs, which informs QB/game-script aggressiveness profiles for underdog QBs. Serves the QB-behavioral-profiles program (secondary).
- **TRUST-SIGNAL:** Honest endogeneity reporting requirement (report the coach-selection caveat; prefer within-coach variation before/after coordinator changes for causal claims) — a trust-relevant integrity standard for GSE coaching-effect content. Serves trust-target intake.
- **OTHER (home-advantage):** Stadium filling insignificant at all polynomial powers (p>0.85) while home win base rate is 46.58% — supports decomposing NFL home advantage into travel/familiarity rather than crowd effects; informs GSE's home-advantage decomposition work. Serves calibration/intake.

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse_coaching_decisions.py`: per-game NFL coaching aggressiveness indices (early-down pass rate vs expectation, fourth-down go-rate vs WP model, blitz rate) through the triple-outcome + Akaike-weight model-averaging + BCa pipeline with team/season FEs and referee-crew variables, reporting marginal win-prob effects as features and content.

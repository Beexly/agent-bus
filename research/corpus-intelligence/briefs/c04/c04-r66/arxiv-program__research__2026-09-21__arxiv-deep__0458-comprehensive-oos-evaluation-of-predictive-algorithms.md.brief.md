# docs/arxiv-program/research/2026-09-21/arxiv-deep/0458-comprehensive-oos-evaluation-of-predictive-algorithms.md
## What it is (1-2 sentences)
Deep-read of Dominitz & Manski (2025, arXiv:2403.11016v3, revised April 16, 2025) — a position paper arguing ML's K-fold/Common-Task out-of-sample evaluation should be replaced by Wald's statistical decision theory: ex ante evaluation of the pick rule as a statistical decision function by minimax regret across a state space of training/prediction populations. Ledger verdict: ADAPT the minimax-regret evaluation doctrine for GSE engine validation.

## Key metrics/methods (formulas where given, else "not specified")
- Decision criteria (no data): Bayes risk min_c ∫L(c,s)dπ (eq. 1); minimax min_c max_s L(c,s) (eq. 2); minimax regret (MMR) min_c max_s [L(c,s) − min_d L(d,s)] (eq. 3).
- Statistical versions (with sample data ψ∼Q_s): min_{c(·)∈Γ} ∫E_s{L[c(ψ),s]}dπ (eq. 4); minimax risk (eq. 5); minimax regret min_{c(·)} max_s (E_s{L[c(ψ),s]} − min_d L(d,s)) (eq. 6). A state of nature s = a (training-population, prediction-population) pair; the state space S lists all deemed-possible pairs.
- Prediction-based SDFs: [data → prediction → action]; d(ψ) = argmin_c L[c, f(ψ)] for distributional predictors, or as-if optimization on a point prediction p(ψ). MSE loss (eq. 7); misclassification-rate loss (eq. 8).
- Binary-choice regret decomposition (Appendix A, eqs. A1–A6): expected regret = R_{c(·)s}·|L(a,s)−L(b,s)| — error probability times loss magnitude. For MSE: regret = V_s[p(ψ)] + {E_s(y)−E_s[p(ψ)]}²; for MCR: regret = P(misclassify) − min[P_s(y=1), 1−P_s(y=1)].
- Computation: Monte Carlo integration for E_s{L[c(ψ),s]}; grid search over S when smooth; optimizing over SDFs Γ proceeds case-by-case, evaluating simple SDFs actually used.
- Clinical illustration (Section 4.2): threshold px# = [U_x(A,0)−U_x(B,0)] / ([U_x(A,0)−U_x(B,0)] + [U_x(B,1)−U_x(A,1)]) (eq. 13); neutralized-disease special case px# = 1−U_xB (eq. 17); expected regret E_s{R_sx[φ_x(ψ)]} = |(1−p_sx)−U_xB|·Q_s{e[·]=1} (eq. 19).
- Bounded variation cross-covariate restriction: P_s(y=1|x′) + λ−(x,x′) ≤ P_s(y=1|x) ≤ P_s(y=1|x′) + λ+(x,x′) ∀s∈S (eq. 9).
- Assumptions: state space S specified by the analyst (the substantive modeling choice); weak regularity for expectations/extrema; sampling distribution Q_s known up to the state; cross-covariate restrictions chosen application-specifically.

## Data sources named
No new dataset or experiment. Illustrative settings: (a) treatment choice (surveillance vs. aggressive treatment), binary illness outcome, threshold rule, kernel estimates of P(y=1|x) under bounded-variation cross-covariate restrictions (Manski 2023); (b) critique of Mullainathan & Obermeyer (2022): ~250,000 ER visits, 16,000+ covariates, ensemble of gradient-boosted trees + LASSO on tested/untested subsets, 5-fold CV tuning, 70/5/25 split. No sports data. GSE test spec names the GSE picks table (3,411 picks, v5.2.7) + challenger model histories + closing lines, 2019–2025.

## Findings (numbers and facts, not vibes)
- None — no new numbers; this is a position/methodology paper. Referenced quantitative facts: Bates, Hastie & Tibshirani (2024) sparse-logit example (n=90, p=1000, 4 nonzero coefficients, Bayes MCR 20%): naive 90%-coverage CIs for prediction error actually miscover 31%, needing ~1.6× widening — used to illustrate that CV-based uncertainty quantification is unreliable.
- Stoye (2012) analytic MMR rule under symmetric bounded variation λ±=±κ (cited).
- Authors' explicit admissions: optimizing over SDFs Γ has "no generally applicable approach" and high-dimensional ML settings are "not currently computationally tractable" — issued as a call to arms, not a solved problem. Evaluating inference-based SDFs still requires the middle operation (max over S).
- Cautionary points: maximum regret is only as credible as the analyst-specified state space S (too-narrow S makes MMR look deceptively good); MMR optimizes for the worst state, potentially sacrificing gains in likely states (Savage's critique of minimax applies in muted form); in betting, utility (bankroll growth, risk tolerance) is chosen, not known; NFL seasons are not i.i.d. draws (schedule structure, rule changes, evolving meta).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Minimax-regret evaluation doctrine: judge the engine by maximum regret across a state space of seasons/regimes (train-era → predict-era pairs, stressed states, post-rule-change seasons), and evaluate the pick rule as a statistical decision function (bet/no-bet + stake) with loss = negative bankroll log-growth or negative CLV — OTHER (evaluation methodology; INFERENCE: directly confronts "the future may not look like the past").
- Binary-regret decomposition (error probability × loss magnitude) mapped onto bet/no-bet with stake sizing — OTHER (decision analysis).
- Adversarial "regime generator" improvement idea (optimize over perturbations of injury rates, line-shading, weather instead of a hand-picked grid) — OTHER (methodology).

## Engine-actionable? (yes/no + one-line what)
Yes — define a state space S of era-pairs plus stressed/rule-change states, compute per-variant regret (bootstrap 200 resamples per state, loss = negative per-slate log-growth), and adopt maximum regret as a standing engine-selection criterion if it disagrees with the average-backtest ranking on any real 2024–2025 decision (~1–2 weeks, no new modeling).

# arxiv-program/research/2026-09-21/arxiv-deep/1010-regression-reject-option-knn.md

## What it is (1-2 sentences)
A full-paper deep-read ledger (arXiv:2006.16597, Denis/Hebiri/Zaoui 2020) on regression with a reject option: the optimal rule for a fixed rejection rate ε is to abstain when the conditional outcome variance σ²(x) exceeds its (1−ε)-quantile, with a semi-supervised plug-in that calibrates the threshold on unlabeled data. Verdict recorded: ADAPT — maps onto GSE's margin/total regression models as a variance-gated no-bet mechanism.

## Key metrics/methods (formulas where given, else "not specified")
- Optimal reject rule: reject iff σ²(x) > λ_ε, where σ²(x) = E[(Y − f*(X))² | X=x] and λ_ε = (1−ε)-quantile of σ²(X).
- Risk decomposition: R_λ(Γ_f) = E[(Y−f*)² 1{predict}] + E[(f*−f)² 1{predict}] + λP(reject).
- Semi-supervised plug-in: estimate f̂ and σ̂² on labeled data; calibrate λ̂_ε from the empirical cdf of σ̂² on UNLABELED data plus uniform perturbation ζ∼U[0,10⁻¹⁰] to avoid cdf jumps.
- Theorem 1: consistency of risk and rejection rate. Theorem 2: kNN convergence rates; no margin/smoothness assumption needed (unlike classification analogue).
- kNN hyperparameter k ∈ {5,…,150} selected by 10-fold CV; experiments over ε ∈ {0, 0.1, …, 0.9}, 100 repetitions with means + SDs.

## Data sources named
- UCI QSAR aquatic toxicity (n=546, 8 features, target range [0.12, 10.05]).
- UCI Airfoil Self-Noise (n=1503, 5 features, target range [103, 140]).
- Split: 50% labeled train / 20% unlabeled (empirical cdf) / 30% test.
- Code: https://github.com/ZaouiAmed/Neurips2020_RejectOption.

## Findings (numbers and facts, not vibes)
- Aquatic RF Table 1 (1−ε | Err̂(SD) | 1−r̂(SD)): ε=0 → 1.34(0.18)/1.00; ε=0.2 → 1.04(0.16)/0.80; ε=0.5 → 0.81(0.18)/0.50; ε=0.8 → 0.55(0.21)/0.20.
- Aquatic kNN: 2.29/1.00; 1.98/0.80; 1.51/0.50; 0.75(0.37)/0.19.
- Airfoil RF: 14.40(1.04)/1.00; 10.26/0.80; 7.22/0.50 — error HALVED at 50% rejection; 4.00(0.74)/0.20.
- Airfoil SVM: 11.81; 8.27; 5.15; 2.6. Airfoil kNN: 35.40; 31.13; 22.42; 17.27.
- Aquatic SVM anomaly at ε=0.8: error 1.01(0.32) non-monotone (vs 0.91 at ε=0.5) — poor σ̂² from SVM; fixed by hybrid (SVM regression + RF/kNN variance), Fig. 4. Lesson: the variance estimator quality is the binding constraint.
- Rejection rates track targets tightly (e.g., 0.50 ± 0.06).
- Numeric gate: ADAPT if at ε=0.3 published-set RMSE drops ≥15% vs publish-all (paired p<0.05) with achieved rate within ±3pp of ε and monotone error-vs-ε curve.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: variance-gated abstention for published picks — no-bet high-σ games on margin/total models; σ̂ from CQR interval width or squared-residual model; threshold = (1−ε)-quantile over the slate's unlabeled games.
- OTHER (method note): mirrors the paper-1006 semi-supervised thresholding pattern; extends "gap #4" into the regression lane.

## Engine-actionable? (yes/no + one-line what)
Yes — implement variance-gated no-bet on margin/total picks (σ̂ = CQR interval width, ε ∈ {0.1,…,0.5} grid-searched on 2024), with a ≥15% RMSE-reduction gate at ε=0.3 on time-ordered 2024 backtest.

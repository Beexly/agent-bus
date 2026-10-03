# docs/arxiv-program/research/2026-09-21/arxiv-deep/1639-conformalized-quantile-regression.md
## What it is (1-2 sentences)
Deep read of Romano, Patterson & Candès (2019), "Conformalized Quantile Regression" (NeurIPS 2019): split-CQR fuses quantile regression's heteroskedastic adaptivity with conformal finite-sample coverage, and this paper is the reference spec to REPAIR GSE's existing `apps/web/lib/calibration/cqr.ts`, whose quantile-rank clamp falsely certifies 90% coverage at 83.33%. Verdict in file: ADAPT (first deliverable = correctness repair).
## Key metrics/methods (formulas where given, else "not specified")
- Three steps: (1) fit q̂_{α/2}, q̂_{1−α/2} on proper-train; (2) calibration scores E_i = max{q̂_lo(X_i)−Y_i, Y_i−q̂_hi(X_i)}; (3) Ĉ(x) = [q̂_lo(x) − Q_{1−α}(E;I_2), q̂_hi(x) + Q_{1−α}(E;I_2)], Q the (1−α)(1+1/|I_2|)-th empirical quantile.
- Theorem 1: P{Y_{n+1} ∈ Ĉ(X_{n+1})} ≥ 1−α under exchangeability; ≤ 1−α+1/(|I_2|+1) if scores distinct. Quantile estimators need no consistency for validity — only width/efficiency.
- 2,200 experiments: 11 datasets × 20 splits (80/20, equal train/calibration) × 10 methods; α=0.1.
- Table 1 (mean length / coverage): CQR-RF 1.41/90.33, CQR-NN 1.40/90.05 vs Ridge 3.06/90.03, RF 2.24/89.99, NN 2.16/89.92, unconformalized QRF 2.23/92.62, QNN 1.49/88.51 (undercovers). CQR ~30–40% shorter than absolute-residual split conformal at equal coverage. Simulated heteroskedastic: split 2.91/91.4%, CQR 1.99/91.06%.
## Data sources named
Eleven UCI-style regression benchmarks (Boston housing, Diabetes, Concrete, Energy, Kin8nm, Naval, Power, Protein, Wine, Yacht, YearMSD-type); authors' code: https://github.com/yromano/cqr.
## Findings (numbers and facts, not vibes)
- CQR intervals ~30–40% shorter than non-adaptive conformal at equal ~90% coverage; raw quantile regression under/over-covers (QNN 88.51 vs nominal 90).
- The flagged bug: GSE's cqr.ts clamps rank to n−1 (`rank = Math.min(Math.max(rank, 0), n-1)`), falsely certifying 90% coverage at 83.33% — published intervals are 6.67pp tighter than claimed. True recipe: unclamped (1−α)(n+1) rank, E_i as above.
- Guarantee is marginal (subgroups like primetime dogs can undercover at 90% headline); exchangeability breaks under regime shifts; split conformal halves effective training data; quantile crossing needs ad-hoc fix.
- File's spec: (1) repair cqr.ts to exact recipe; (2) weekly rolling calibration on engine predicted margin/total; (3) report length + coverage by favorite/dog and total buckets. Acceptance: coverage within ±1.5pp of nominal AND length ≤90% of absolute-residual baseline.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the rank-clamp bug falsely certifies 90% coverage at 83.33% — a live trust defect in published intervals; the paper is the correctness spec to repair it.
- OTHER: adaptive prediction-interval engine for margin/total point forecasts (heteroskedastic scoring variance).
## Engine-actionable? (yes/no + one-line what)
yes — Repair apps/web/lib/calibration/cqr.ts to the paper's unclamped (1−α)(n+1)-rank recipe (1–2 days + backtest), then use it as the interval engine for margin/total forecasts.

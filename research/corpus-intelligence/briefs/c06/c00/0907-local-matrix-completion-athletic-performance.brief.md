# arxiv-program/research/2026-09-21/arxiv-deep/0907-local-matrix-completion-athletic-performance.md
## What it is (1-2 sentences)
Deep read of Blythe & Király (2015, arXiv:1505.01147v2): local low-rank matrix completion (LMC) for predicting individual athletic performance — determinant circuits + inverse-variance averaging on the athlete×event matrix — revealing a universal individual power law plus two nonlinear physiological corrections. Verdict in file: ADAPT — the local-completion machinery ports cleanly to GSE's sparse player-week prop matrices, beating global matrix completion under realistic non-uniform missingness.
## Key metrics/methods (formulas where given, else "not specified")
- Low-rank model: log t = λ_1 f_1(s) + λ_2 f_2(s) + λ_3 f_3(s), r=3 optimal.
- LMC rank r (Algorithm 1): to predict M[a,s*], take target event + r log-closest events, restrict to complete rows (+ athlete a); repeat 400×: sample r athletes, solve det M[(a,a_1..a_r),(s*,s_1..s_r)] = 0 for the missing entry → candidate m_i; weight w_i = σ_i^{−2} from first-order variance estimate → inverse-variance weighted mean m*.
- Riegel power law is the special case λ_1=1.06 ∀ athletes, f_1=log s.
- Synthetic: log(t) = Σ λ_k f_k(s) + η(s), η stationary zero-mean Gaussian white noise, plausible Std(η)=0.01.
## Data sources named
thepowerof10.info (British Athletics), to 2013-08-03, since 1954: 164,746 individuals, 1,407,432 performances across 10 events (100m 192,947 … Marathon 93,033). Access on request; code stated as forthcoming but not provided (marked "work in progress… treat results as preliminary").
## Findings (numbers and facts, not vibes)
- Log-time RMSE (0–95th pct): LMC rank 2 0.0515 ± 0.003 vs EM 0.0566 ± 0.003, Purdy 0.061 ± 0.003, Riegel 0.0982 ± 0.005, k-NN 0.122, nuclear-norm 0.391 ± 0.05 — LMC rank 2 best at p ≤ 1e-4 (Wilcoxon); rank 3 optimal when ≥4 events (0.0309 ± 0.001), no gain at rank 4.
- Relative errors: ~2% relative RMSE/MAE for top-25% athletes; rank2-over-rank1 improvement: 26.3% short (100/200m), 29.3% middle (400/800/1500m), 12.8% mile→HM, 3.1% marathon (all p=1e-3).
- Individual exponent λ_1: median 1.12 (5th/95th: 1.10/1.15) vs Riegel WR 1.08/1.06; f_1 linear in log-log (R²=0.9997) — "broken power law" is an epiphenomenon of individual heterogeneity.
- LMC orders of magnitude faster than nuclear-norm/EM per completion; robust to matrix size (2^8–2^13 athletes); synthetic test: with clustered missingness LMC RMSE → 0 as noise → 0 while nuclear-norm stays elevated.
- Headlines: fair Farah–Bolt race at 492m (95% CI 374–594m); elite summaries: Bolt (1.11, −0.367, 0.0813), Farah (1.08, 0.0325, −0.0761).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: LMC imputation of missing player-weeks (bye/injury/DNP) and next-week stat-line prediction for QB prop features; the SVD three-number summary (λ_1 level, λ_2 possession-vs-explosive, λ_3 scheme specialization) as a player specialization embedding feeding the prop model.
## Engine-actionable? (yes/no + one-line what)
yes — implement LMC rank 2–3 on nflverse player-week receiving matrices (leave-one-player-week-out); adopt if LMC beats EM imputation by ≥5% relative RMSE (Wilcoxon p<0.01) and the rank-3 specialization embedding adds ≥0.005 OOS R² to the prop feature set.

# arxiv-program/research/2026-09-21/arxiv-deep/1336-forecast-trimming-rad-accuracy-diversity.md
## What it is (1-2 sentences)
A stat.ME paper (Wang, Kang, Li, 2024) proposing RAD — the first forecast-trimming algorithm that jointly addresses robustness, accuracy, and diversity via the ADT (Accuracy-Diversity Trade-off) criterion with backward elimination — validated on 103,826 M/M3/M4 competition series. Ledger verdict: ADAPT as GSE's standing protocol for trimming its component-model pool before combination.
## Key metrics/methods (formulas where given, else "not specified")
- Diversity metric MSEC_{i,j} = (1/H)Σ_h (f_{i,h} − f_{j,h})², averaged over all pairs.
- MSE_comb decomposition: MSE_comb = Σ_i w_i MSE_i − Σ_{i<j} w_i w_j MSEC_{i,j} (equal weights).
- ADT criterion: ADT = AvgMSE − κ·AvgMSEC, κ∈[0,1]; κ=1 → ADT = MSE of the equally-combined forecast; κ=0 → accuracy only.
- RAD algorithm: Step 1 full pool; Step 2 Tukey's-fences robustness screen (drop forecasters with absolute-error variance > Q3+1.5·(Q3−Q1)); Steps 3–6 backward elimination on ADT(κ=1); Step 7 stop when % ADT decrease < δ (recommended δ=0.05) or |S|=2.
- RelDiv diagnostic: RelDiv = AvgMSEC/AvgMSE; Q1=0.23, Q3=0.53 bands; rule: RelDiv<0.2 → accuracy-only; 0.2–0.5 → A≈RAD; >0.5 → full RAD.
- Evaluation: MASE, sMAPE, Bias, MSIS at α=0.05 (coverage targets 0.95/0.975); MCB (Koning et al. 2005) significance tests.
## Data sources named
- 103,826 time series from the M, M3, M4 competitions (yearly→hourly frequencies); R packages Mcomp 2.8, M4comp2018 0.2.0; models via forecast 8.16 (ets), smooth 3.1.5 (es).
- No code stated (algorithms reimplementable from paper).
## Findings (numbers and facts, not vibes)
- ETS pools: RAD's MASE, sMAPE, MSIS are 3.31%, 1.12%, and 41.44% lower than no-trimming; RAD/AutoRAD significantly outperform None, R, A, D overall (MCB).
- D (diversity-only trimming) ranked worst in most frequencies — unilateral diversity pursuit retains very poor forecasters.
- R (robustness-only) improves point accuracy but WORSENS interval accuracy — caution for interval lanes.
- RAD/AutoRAD retain relatively few forecasters (computational efficiency); δ∈[0.04,0.06] recommended (larger δ for yearly/small pools).
- RelDiv-conditional: RAD/AutoRAD beats accuracy-only A in 56.2%/53.8% of differing-subset series at moderate/high RelDiv; RAD significantly better than A at high RelDiv.
- Cross-family pools: gap between None and RAD shrinks/disappears when the pool is genuinely diverse.
- Standing reminder quoted: "the simple average of the selected optimal subset poses a tough benchmark to beat."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ensemble: pool-trimming protocol + RelDiv diagnostic for when diversity handling is even needed)
- OTHER (method caution: diversity-only trimming is actively harmful — void as a design option; robustness-only screens can degrade interval scores)
- TRUST-SIGNAL (Tukey's-fences screen as a robustness gate before any combination)
## Engine-actionable? (yes/no + one-line what)
yes — port RAD (κ=1, δ=0.05) with a trailing-4-week validation window as the standing weekly trim of GSE's component-model pool, gated by the RelDiv rule (skip diversity handling when RelDiv<0.2); validate on both point and interval scores.

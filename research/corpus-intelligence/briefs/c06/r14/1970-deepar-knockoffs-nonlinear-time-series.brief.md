# arxiv-program/research/2026-09-21/arxiv-deep/1970-deepar-knockoffs-nonlinear-time-series.md

## What it is (1-2 sentences)
Ledger digest of Ahmad, Shadaydeh et al. (2021) "Causal Inference in Non-linear Time-series using Deep Networks and Knockoff Counterfactuals" (arXiv:2109.10817). Verdict: ADAPT — DeepAR probabilistic forecasting plus in-distribution knockoff interventions as the scalable nonlinear causal-discovery arm (beats PCMCI/GPDC head-to-head) for finding nonlinear lagged drivers.

## Key metrics/methods (formulas where given, else "not specified")
- DeepAR-Knockoffs: train DeepAR (LSTM autoregressive RNN; here 4 layers × 40 cells, dropout 0.05–0.1, 150 epochs); generate knockoff samples X̃_i (Barber & Candès 2015) — in-distribution, exchangeable with X_i; substitute X_i with knockoff and reforecast.
- Causal significance score: CSS_{i→j} = ln(MAPE_j^i / MAPE_j) — log ratio of forecast error with vs without the intervention; hypothesis test on mean CSS > 0 across realizations.
- Evaluation: FPR = FP/(FP+TN); F-score = TP/(TP + 0.5(FP+FN)).
- GSE port: one global DeepAR over pooled team-season panel (T≈18 each) with team embeddings; targets = next-week EPA components, pressure rates; candidate causes = all indicators at lags 1–4; Gaussian knockoffs (deep knockoffs if non-Gaussian); t-test on mean CSS with FDR correction; discovered drivers feed the feature-selection pipeline.

## Data sources named
Synthetic series (realizations of length r=200, nonlinearity coefficient β between X_2 and X_4, prediction length T=14); average daily river discharges, upper Danube basin (Bavarian Environmental Agency, public agency data).

## Findings (numbers and facts, not vibes)
- Synthetic: DeepAR-Knockoffs best F-score across β, beating VAR-GC (linearity fails) and PCMCI/GPDC; DeepAR-OutDist "suffers from a high false discovery rate" and lowest F-score; DeepAR-Mean middle. FPR: VAR-GC high; DeepAR-OutDist high; PCMCI, DeepAR-Mean, DeepAR-Knockoffs all well-controlled.
- Danube real data: VAR-GC and PCMCI report false links (extreme rainfall events violate stationarity); DeepAR-Knockoffs "correctly discovers the expected links ... except a single false link."
- Cost caveat from the paper: better performance "comes along with the higher computational load associated with using deep networks specially for large multivariate time series."
- Adoption gates in ledger: on synthetic nonlinear sports-like data, beat PCMCI+ParCorr F-score by ≥0.1; real-data link Jaccard across season splits ≥ 0.5; knockoff driver set within 0.002 Brier of PCMCI+-only set while adding ≥5 nonlinear-only drivers; training cost ≤4 GPU-hours per refresh. Effort ~5 engineer-days.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Nonlinear lagged-driver discovery: which leading indicators causally drive next-week performance, with controlled FDR (OTHER)
- Regime-conditioned extension: run knockoff counterfactuals within regimes to kill extreme-event false links (COACHING, OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — implement DeepAR-Knockoffs on the nflverse team-week panel (pooled global DeepAR, knockoff counterfactuals per indicator at lags 1–4, CSS testing) as the nonlinear discovery arm feeding feature selection.

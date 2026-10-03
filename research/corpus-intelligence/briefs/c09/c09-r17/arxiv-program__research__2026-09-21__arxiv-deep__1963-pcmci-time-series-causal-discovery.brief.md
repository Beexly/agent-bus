# arxiv-program/research/2026-09-21/arxiv-deep/1963-pcmci-time-series-causal-discovery.md
## What it is (1-2 sentences)
Full-paper research ledger on Runge (2020) "Discovering contemporaneous and lagged causal relations in autocorrelated nonlinear time series datasets" (arXiv:2003.03685), verdict ADAPT. It specifies PCMCI+, a three-phase constraint-based causal discovery algorithm that handles autocorrelation and finds both lagged and contemporaneous causal links; the ledger maps it to learning which lagged team-week indicators (t−1…t−4) causally drive GSE outcomes, complementing NOTEARS (1962) which assumes i.i.d. rows.
## Key metrics/methods (formulas where given, else "not specified")
- Generative SCM: X_t^j = a_j X^j_{t-1} + Σ_i c_i f_i(X^i_{t−τi}) + η_t^j.
- PCMCI+ three phases: (1) lagged skeleton via PC-style edge removal with conditioning sets of increasing size p, ranking survivors by I^min = min |I| test statistic; (2) contemporaneous skeleton using Momentary Conditional Independence (MCI) tests with optimized parent-based conditioning sets; (3) orientation — lagged links by time-order, contemporaneous via collider phase + Meek rules R1–R3 adapted to time series.
- CI tests: ParCorr (linear), GPDC (Gaussian-process + distance correlation, nonlinear additive noise). Theorems 1–4: soundness under causal sufficiency, Causal Markov, Adjacency Faithfulness, oracle CI tests, stationarity, time-order, correct τmax; completeness of orientation.
## Data sources named
Simulation-only: N=5, T=500, a=0.95, τmax=5, α=0.01, 500 realizations per setting (linear Gaussian, linear mixed noise, nonlinear mixed); Runtimes on Intel Xeon Platinum 8260. Code: tigramite (https://github.com/jakobrunge/tigramite).
## Findings (numbers and facts, not vibes)
- Linear Gaussian defaults: PCMCI+ and GCresPC contemporaneous TPR stable under high autocorrelation; PC and LiNGAM show "strong declines"; lagged TPR "decreases strongly" for PC; others robust.
- FPR "well-controlled for PCMCI+" while PC (and slightly GCresPC) show inflated lagged FPR at high autocorrelation; LiNGAM strong lagged-FPR increase.
- Contemporaneous orientation recall increases with autocorrelation for PCMCI+, decreases for all others; PCMCI+ has "more than twice as much contemporaneous recall" vs others at larger N and is "almost not affected" by higher N.
- Conflicts: "almost no conflicts" for PCMCI+; PC conflicts increase with autocorrelation.
- Runtime: GPDC vs ParCorr "orders of magnitude longer"; GPDC "seems to not work well in high-dimensional, highly autocorrelated settings".
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — causal-structure-learning lane for the team-week feature panel; informs which lagged features survive into the prediction stack and enables sliding-window regime-change detection.
## Engine-actionable? (yes/no + one-line what)
yes — run PCMCI+ (tigramite, α=0.01, τmax=4) per team-season on ~30-indicator nflverse panel 2015–2026, stability-aggregate across ~380 team-seasons, prune features to graph-reachable lags; ADOPT iff held-out Brier within 0.002 of all-lags baseline using ≤60% of features and edge Jaccard ≥0.5.

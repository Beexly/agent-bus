# arxiv-program/research/2026-09-21/arxiv-deep/1987-optimizing-hyperparameters-conformal-quantile-regression.md
## What it is (1-2 sentences)
Deep read of Salinas et al. (2023), arXiv:2305.03623 — replace the Gaussian-process HPO surrogate with a conformalized quantile-regression (CQR) surrogate that models heteroskedastic objective noise; multi-fidelity reduces to the "trivial" trick of training on each config's last-fidelity observation plus async successive halving. Ledger verdict: ADOPT — unifies GSE's HPO loop with its conformal calibration program on one calibrated-uncertainty stack.
## Key metrics/methods (formulas where given, else "not specified")
- CQR surrogate: quantile regression over config space, conformalized on held-out configs; EI acquisition with 20 fantasy samples for pending async evaluations.
- Normalized regret = (y_t − y_min)/(y_max − y_min); average rank; critical diagrams; calibration error.
- Multi-fidelity: train ANY single-fidelity surrogate on last-fidelity-per-config observations + async successive halving (fidelity = training seasons).
## Data sources named
13 tasks from FCNet, NAS-Bench-201, LCBench (airlines, albert, covertype, christine, Fashion-MNIST), NAS301 via YAHPO; 4 async workers; method code link not extracted.
## Findings (numbers and facts, not vibes)
- At n=1024: RMSE — GP 0.58, QR 0.37, CQR 0.37; calibration error — GP 0.11, QR 0.04, CQR 0.03; runtime — GP 20.03s, QR 2.23s, CQR 2.16s (~10× faster than GP).
- CQR+MF "statistically significant improvements over ASHA at all times and over all other model-based multi-fidelity methods after 50% and 100% of budget"; ablation: QR+MF "much worse than CQR+MF" — the conformal correction drives the gain.
- Caution: CQR is WORSE calibrated than GP at small n (n=16: calibration error 0.13 vs GP 0.06); the edge needs n≥256.
- The naive last-fidelity extension of REA/GP/BORE/QR also beats ASHA on average rank/regret (except REA).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Same CQR machinery serves model selection AND prediction-interval calibration — shared code and reliability diagnostics — TRUST-SIGNAL.
- Market-relative fitness: optimize edge-over-market directly with a heteroskedastic-aware surrogate (search away from efficient markets toward soft ones) — OTHER (HPO/ops efficiency).
- Multi-fidelity for free with fidelity = training seasons — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — swap the GP surrogate in GSE's Optuna/BO loop for CQR (quantile LightGBM + conformal calibration, EI acquisition) plus async successive halving over training-season fidelity; gate: CQR-BO reaches GP-BO final regret in ≤70% wall-clock on 2023–2025 HPO runs with surrogate calibration error ≤ GP's at n≥256; watch the n<100 miscalibration regime.

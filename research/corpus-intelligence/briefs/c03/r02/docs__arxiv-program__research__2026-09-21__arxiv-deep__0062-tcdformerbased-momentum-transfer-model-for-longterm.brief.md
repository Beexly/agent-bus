# docs/arxiv-program/research/2026-09-21/arxiv-deep/0062-tcdformerbased-momentum-transfer-model-for-longterm.md
## What it is (1-2 sentences)
An arXiv deep-read ledger (2026-09-21) of Liu et al.'s "TCDformer-based Momentum Transfer Model for Long-term Sports Prediction" (arXiv:2409.10176v1), a tennis-only momentum-prediction model (TM²) combining wavelet-based change-point detection with a trend/seasonal decomposition predictor. **Verdict in the ledger: REJECT** — garbled equations, a random (non-time-ordered) train/test split constituting severe leakage, and a "momentum transfer" premise Garrett's own lab already tested and rejected.

## Key metrics/methods (formulas where given, else "not specified")
- MODWT change-point detection: `l_j = arg max_t (‖W_{j,t}‖)`; iterative k-th jump `l_k = arg max_t (‖W_{J,t}‖ | t ∉ ∪_{1≤i≤k} Ω_i)`
- Momentum: `M_y(t) = m_{i,j} · Σ_z [δ_z(t)·X_{i,z}(t) − δ̄_z(t)·X_{j,z}(t)]`, with AHP-derived weights and pairwise pressure matrix (e.g., Alcaraz–Zverev 4.78/0.21) — reconstruction UNCERTAIN (PDF extraction garbled)
- Decomposition: trend `x_t` via multi-scale averaging filters with adaptive weights, MLP with RevIN; seasonal `x_s = M_y − x_t` via wavelet attention; final `P(t+1) = x_t(t+1) + x_s(t+1)`; match winner = argmax of total momentum, ties broken by historical rankings (Eq. 14)
- Validation: **80% random / 20% random split — NOT time-ordered**; 100 repeated runs; metrics MSE, MAE, Accuracy, Precision, F1
- Prediction sequence length tuned to 400 (model trained 10× per length)

## Data sources named
2023 Wimbledon men's singles tournament, obtained via the 2023 International Mathematical Modeling Competition (MCM/ICM), cross-referenced with the official Wimbledon website. 7,285 rows × 49 columns = 356,965 data points, reduced to 18 retained features (Table III: elapsed_time, p1/p2 sets, p1/p2 games, server, point_victor, aces, double faults, break points missed/won, distance run, psychological factor — each recorded per player per point). Not a public URL; effectively unreplicable.

## Findings (numbers and facts, not vibes)
- Table IV (Wimbledon 2023, 100-run averages), MAE/MSE/Acc/Prec/F1: ELO 0.4859/0.4859/0.5141/0.2643/0.3491; DT 0.2644/0.2644/0.7395/0.7397/0.7396; LR 0.2126/0.2126/0.7874/0.7824/0.7871; SVM 0.2195/0.2195/0.7805/0.7831/0.7804; RF 0.2249/0.2249/0.7751/0.7752/0.7751; **TM² 0.0389/0.0671/0.9237/0.9231/0.9206**
- Abstract claims "reducing MSE by 61.64% and MAE by 63.64%" vs existing sports prediction models — the ledger could not reproduce these from Table IV (TM² vs best baseline LR: 68.4% MSE, 81.7% MAE); quote as paper claim only
- Table V: MSE — DMA-Nets 16.8732, Seq2Event 1.7476, TM² 0.0671; MAE — DMA-Nets 10.6371, Seq2Event 1.2734, TM² 0.0389
- The paper itself admits DMA-Nets and Seq2Event slightly outperform TM² on some metrics, blaming its change-point removal for discarding informative points
- Random within-tournament split means points from the same match appear on both sides — severe leakage that invalidates the 92% accuracy as a forecasting result
- Momentum premise already falsified in Garrett's lab: Koopman/DMD momentum rejected (p=0.89, AR(1) beats DMD); MOVE-37 GLI-0.1/WPA² leverage claim falsified

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Momentum-as-change-points sits in Garrett's rejected lane (Koopman/DMD momentum p=0.89) — OTHER
- Wavelet/MODWT time-series machinery is not in Garrett's corpus, but the headline numbers come from a leaky split, so no evidence of superiority — OTHER
- Paper's own admission that jump-removal destroys informative change points is a cautionary data-point against change-point preprocessing of sports time series — OTHER

## Engine-actionable? (yes/no + one-line what)
No — rejected: non-NFL sport, momentum premise already lab-rejected, non-replicable data + garbled equations, leaky split invalidates all headline numbers.

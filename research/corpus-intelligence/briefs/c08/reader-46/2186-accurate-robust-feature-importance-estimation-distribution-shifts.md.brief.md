# docs/arxiv-program/research/2026-09-21/arxiv-deep/2186-accurate-robust-feature-importance-estimation-distribution-shifts.md

## What it is (1-2 sentences)
Deep-dive research note on the PRoFILE paper (arXiv:2009.14454v1, Thiagarajan et al., LLNL/ASU, 2020) — a Granger-causal feature-importance estimator designed to stay faithful under distribution shift — with an attached GSE verdict of ADAPT and a concrete GSE implementation spec (MLP predictor + contrastive loss-estimation head).

## Key metrics/methods (formulas where given, else "not specified")
- Jointly trains an auxiliary loss estimator alongside the predictor.
- Contrastive loss: L_aux^C = Σ max(0, −I(s_i,s_j)·(ŝ_i − ŝ_j) + γ), where I(s_i,s_j) indicates ordering of true losses and ŝ are estimated losses.
- Dropout-calibration loss L_aux^DC (dropout-based calibration of the loss estimates).
- Granger-causal feature importance: Δε_{x,j} = ε_{x\{j\}} − ε_x (change in estimated error when feature j is masked).
- Fidelity metric: Δ log-odds after masking top-25% features.
- GSE spec in file: MLP predictor + contrastive head; per-game season importance = median Δε over games; shift alarm when trailing-4-week mean ŝ exceeds the training mean ŝ by > 2σ.

## Data sources named
- MNIST → USPS transfer (shift study)
- Cifar10 → Cifar10-C (shift study)
- Synthetic correlation/variance shifts
- nflverse-adjacent GSE game data implied for the GSE spec (games/weeks)

## Findings (numbers and facts, not vibes)
- PRoFILE outperforms LIME/SHAP/CXPlain on all fidelity benchmarks (figure-based in the paper; the file notes no tabulated absolute numbers).
- Method is model-agnostic: works on any trained predictor by learning a separate loss estimator, rather than requiring retraining or access to internals.
- Robustness mechanism: loss-ordering is easier to estimate and more stable under shift than absolute loss values, hence the contrastive pairwise objective.
- GSE verdict ADAPT: the paper's method is to be used as a shift-aware feature-importance layer for the engine, not adopted as the paper's literal architecture.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Shift alarm (trailing-4-week mean estimated loss > 2σ above training mean) is a built-in regime-change/miscalibration tripwire for any engine feature set.
- OTHER: Granger-causal importance (mask-and-re-estimate-loss) is more shift-robust than gradient/SHAP attributions; useful for engine feature auditing and the metric-redundancy audit.
- OTHER: Contrastive loss ordering as a calibration-stability trick is transferable to any engine auxiliary head.

## Engine-actionable? (yes/no + one-line what)
Yes — build the MLP predictor + contrastive loss-estimation head per the in-file GSE spec and use median Δε per game for shift-robust season feature importance plus the 2σ trailing-4-week shift alarm.

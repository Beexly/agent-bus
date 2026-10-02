# docs/arxiv-program/research/2026-09-21/arxiv-deep/0763-distributional-regression-tabular-foundation-models-proper.md
## What it is (1-2 sentences)
A full-text deep-read ledger of arXiv:2603.08206v5 (Landsgesell, Knoll, Wenzel 2026), comparing realTabPFNv2.5 vs TabICLv2 on 20+ OpenML regression datasets judged by proper scoring rules, and testing whether fine-tuning with scoring-rule losses improves the matching metrics. Verdict in file: ADAPT — the loss-alignment doctrine (train with the scoring rule you will be judged on) ports to GSE's tabular model training and calibration evaluation.

## Key metrics/methods (formulas where given, else "not specified")
- CRPS(F,y)=∫(F(z)−1{y≤z})²dz; discretized CRPS ≈ Σ_i(F(x_i)−1{x_i≥y})²Δx_i.
- β-energy: S_β(F,y)=E_F‖X−y‖^β − ½E_F‖X−X′‖^β, β∈(0,2); β=1→CRPS; β=2→MSE-equivalent. Fine-tuning used β=1.8.
- CRLS(F,y)=−∫log|F(x)+1{y≤x}−1|dx.
- Interval score S_α(F,y)=(u−l)+(2/α)(l−y)1{y<l}+(2/α)(y−u)1{y>u} (IS95 used).
- Tail-weighted wCRPS with w=(1−u)² (left) / u² (right); power-Bregman family incl. Itakura–Saito (p=−1), Poisson/KL (p=0).
- Analytic result: point-mass forecast under β-energy reduces to |m̂−y|^β; β=1→median minimiser, β=2→mean minimiser.
- Fine-tuning recipe (TabPFN): lr 1e-5, weight_decay 0.1, 600 epochs, early_stopping_patience 20, 20,000 samples, split ratio 0.4, custom loss weight 1.0.

## Data sources named
20 OpenML regression datasets per abstract (appendix §9.5 enumerates 23, incl. house_prices 42165, Bike_Sharing_Demand 42713, elevators 216, california_housing 43939, diamonds 42225, etc.), each subsampled to ≤3000 instances; synthetic toy datasets (§9.4) with dampened oscillation / polynomial / rectified trend / piecewise sawtooth DGPs. No sports data. ScoringBench benchmark "being prepared in a separate paper" — not released.

## Findings (numbers and facts, not vibes)
- β(1.8)-Energy fine-tune vs realTabPFNv2.5 baseline: MAE +4.28%±10.06% (median +1.46%, 61/21/8 W/L/T); RMSE +2.16%±4.39%; R² +1.47pp±3.73pp; CRPS +2.76%±6.38% (61/23/6); IS95 +2.24%±13.86%.
- CRLS fine-tune: CRLS +2.27%±7.00% (median +1.47%, 79/18/3 W/L/T); IS95 +3.87%±13.15%.
- TabICLv2 vs baseline: CRLS +6.01%±10.95% (median +3.49%, 84/19/2); IS95 +5.14%±14.18%; MAE +1.41%.
- "No model best in all metrics indicating complex trade-offs." W/L/T tally at ε=0.001.
- Toy ranking reversal: Model B (outlier) ranks 1st at β=0.2 but 4th at β=2.0; Model A (bias) ranks 2nd at β=0.2, 1st at β=1.073 and β=2.0. Cited: Spearman correlation between Brier- and log-score forecaster rankings only 0.15 (Merkle et al.).
- XGBoost Bregman p=−0.5 objective: 0.203±0.214 beats TabICL 0.558±0.371 and TabPFN 0.478±0.292 on 20 synthetic sets, though MSE worse (12.54 vs 9.49/9.57).
- Weighted-CRPS XGBoost beats TabICL by 14.1% (left tail) / 17.7% (right tail), 15/20 wins.
- Candid limitations noted: dataset count mismatch (20 vs 23); early-stopping metric = training objective (confound); log score gradient unbounded as f̂(y)→0 (numerical instability, prefer CRPS family); all scoring rules fail to elicit tail-region properties where data are absent (epistemic uncertainty) — directly relevant to rare sports outcomes.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Train-with-the-score-you're-judged-on doctrine: margin/total models move from MSE to CRPS-family (β≈1.8 mean-focused, β≈1 median-robust); keep binary log loss for win-probability.
- [OTHER] Tail-weighted wCRPS (u² right-tail) for prop-tail pricing — penalize errors in high-tail regions that price overs and alternate lines.
- [TRUST-SIGNAL] Ranking reversals across scoring rules (β=0.2 vs 2.0) and Brier-vs-log-score Spearman 0.15 — evaluate/calibrate per-metric matching the downstream decision (CLV for line-beating, interval score for totals).
- [OTHER] File's GSE gate: ADOPT only if CRPS-trained margin model beats MSE baseline on held-out 2024 NFL by ≥5% relative CRPS AND ≥3% IS95 with ≤2% MAE degradation on the implied point prediction.

## Engine-actionable? (yes/no + one-line what)
Yes — add CRPS/CRLS/IS95 to the evaluation harness for all distribution-output models, and prototype a wCRPS-weighted XGBoost objective for margin models with the ≥5% CRPS gate.

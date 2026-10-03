# docs/arxiv-program/research/2026-09-21/arxiv-deep/0763-distributional-regression-tabular-foundation-models-proper.md
## What it is (1-2 sentences)
Ledger of arXiv:2603.08206v5 (Landsgesell, Knoll, Wenzel 2026): how tabular foundation models (realTabPFNv2.5 vs TabICLv2) rank under proper scoring rules (CRPS, CRLS, interval score), and how fine-tuning with scoring-rule losses induces different inductive biases. Verdict ADAPT for the loss-function alignment doctrine: train with the scoring rule you will be judged on.
## Key metrics/methods (formulas where given, else "not specified")
- CRPS(F,y) = ∫(F(z)−1{y≤z})²dz; β-energy S_β(F,y) = E_F‖X−y‖^β − ½E_F‖X−X′‖^β, β∈(0,2) (β=1→CRPS, β=2→MSE-equivalent).
- CRLS(F,y) = −∫log|F(x)+1{y≤x}−1|dx; interval score S_α = (u−l)+(2/α)(l−y)1{y<l}+(2/α)(y−u)1{y>u}.
- Power-Bregman objectives (eqs. 20–23, incl. Itakura–Saito p=−1, Poisson/KL p=0); tail-weighted wCRPS (eqs. 24–26, w=(1−u)² left / u² right).
- Fine-tuning: lr 1e-5, weight decay 0.1, 600 epochs, early-stopping patience 20, 20,000 ctx+query samples.
## Data sources named
~20–23 OpenML regression datasets (appendix lists 23: house_prices, Bike_Sharing_Demand, california_housing, nyc-taxi-green-dec-2016, etc.), each subsampled to ≤3000 instances, 5-fold CV; synthetic toy datasets (X~Uniform(−4,4) with 25% heavy outliers). Fine-tuning code adapted from TabPFN GitHub (PR PriorLabs/TabPFN#689 added CRPS loss, Dec 2025); "scoringBench" benchmark not yet released.
## Findings (numbers and facts, not vibes)
- β(1.8)-energy fine-tuning vs baseline: CRPS +2.76%±6.38% (61/23/6 W/L/T); IS95 +2.24%±13.86%; MAE +4.28%.
- CRLS fine-tuning: CRLS +2.27%±7.00% (79/18/3); IS95 +3.87%±13.15%.
- TabICLv2: CRLS +6.01%±10.95% (84/19/2); IS95 +5.14%±14.18%.
- "No model best in all metrics indicating complex trade-offs."
- Toy ranking reversal: Model B (outlier) ranks 1 at β=0.2 but 4 at β=2.0; Model A (bias) ranks 2 at β=0.2, 1 at β=1.073 and 2.0.
- Merkle et al. cited: Spearman correlation between Brier- and log-score forecaster rankings only 0.15.
- Weighted-CRPS XGBoost beats TabICL 14.1% (left tail) / 17.7% (right tail), 15/20 wins.
- Caveats: early-stopping metric = training objective (acknowledged confound); high std (gains dataset-dependent); log score numerically unstable as f̂(y)→0; all scoring rules fail to elicit tail-region properties where data are absent.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Doctrine: switch GSE margin/total models from MSE to CRPS-family training losses (β-energy β≈1.8 mean-focused, β≈1 median-robust); use tail-weighted wCRPS when the downstream use is over-props or alternate lines.
- [OTHER] Add CRPS/CRLS/IS95 to the GSE model scoreboard alongside log loss/ECE; rank models per use-case metric.
- [TRUST-SIGNAL] Brier-vs-log-score rank correlation of only 0.15 means choice of scoring rule changes model selection — scoring-rule alignment is a real gate, not hygiene.
- [TRUST-SIGNAL] Acceptance gate: adopt only if CRPS-trained margin model beats MSE baseline by ≥5% relative CRPS and ≥3% IS95 on held-out 2024 with ≤2% point-MAE degradation.
## Engine-actionable? (yes/no + one-line what)
Yes — add CRPS/CRLS/IS95 metrics to the evaluation harness (~1–2 days) and prototype a tail-weighted wCRPS XGBoost objective for margin models (~2 days), behind the stated numeric gate.

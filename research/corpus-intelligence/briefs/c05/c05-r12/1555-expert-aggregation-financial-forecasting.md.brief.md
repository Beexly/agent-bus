# arxiv-program/research/2026-09-21/arxiv-deep/1555-expert-aggregation-financial-forecasting.md

## What it is (1-2 sentences)
Research ledger on "Expert Aggregation for Financial Forecasting" (Remlinger, Alasseur, Brière, Mikael 2023, arXiv:2111.15365) — Bernstein Online Aggregation (BOA), an online regret-bounded convex combiner of 13 ML stock-return forecasters tested on 30 years of data. The ledger's verdict is ADAPT: BOA is the online, regret-bounded ensemble combiner GSE needs for a non-stationary multi-model engine, with weights updated from realized expert losses at a fast log(K)/T rate.

## Key metrics/methods (formulas where given, else "not specified")
- BOA (Wintenberger 2017): online convex combination w_{k,t}; update w_{k,t} ∝ w_{k,t−1}·exp(−ηℓ_{k,t}(1+ηℓ_{k,t}))/exp(−ηℓ_{w,t}(1+ηℓ_{w,t})), where ℓ_{k,t} = excess loss of expert k over current mixture; second-order term ηℓ² penalizes large errors; regret R_T → 0 at rate log(K)/T.
- 13 experts: OLS+H, OLS3+H, GLM+H, ENet+H, PLS, PCR, RF, GBRT+H, NN1–NN5 (+H = Huber loss). Comparators: uniform mixture PtfUNI (1/K), best fixed convex combo on validation, 1-yr rolling best combo, oracle.
- Extensions: pre-trained BOA (validation-year weight init); expert specialization (split a beating expert into 2K′=10 bagged variants each, re-aggregate over K+2K′=33); leave-one-expert-out importance.
- Protocol (Gu et al. 2020): yearly refits, expanding training from 1957–1974, rolling 12-yr validation, 1-yr OOS test 1987–2016. Metrics: annualized return, vol, Sharpe, skew, kurtosis, max drawdown, max 1-month loss, turnover. Reference implementation: R package OPERA.

## Data sources named
WRDS (CRSP + Compustat), proprietary: >30,000 US stocks, 1957–2017, 94 firm characteristics per stock-month rank-transformed to [−1,1]; publication lags respected (+1/+4/+6 months); portfolio = long top-decile / short bottom-decile per model, equally weighted (main) and value-weighted (appendix).

## Findings (numbers and facts, not vibes)
- Best expert NN2: ann. return 0.50, vol 0.18, SR 2.74, max DD 0.17, max monthly loss 0.16, turnover 1.23.
- PtfBOA: return 0.49, vol 0.18, SR 2.77 (best), skew 3.11 (best), max DD 0.08, max loss 0.08 — tail risk roughly halved vs NN2; turnover 1.23 (same).
- PtfUNI: SR 2.56; fixed best-convex on validation 2.28; 1-yr rolling 2.60; oracle 2.92 (little headroom). Pre-trained BOA: SR 2.78. Extended 33-expert: SR 2.82, max monthly loss 0.07 (best overall).
- Weight dynamics: NN2 + OLS+H take ~67% of average weight; adapted quickly at the 2001 dot-com regime break (OLS+H ~40% pre-2001 on short side → NNs after); 2008 crisis barely moved weights.
- Caveats in file: transaction costs not modeled; within-regime behavior concentrates on 1–2 experts (~67%) so the benefit is mostly regime-switching, not averaging; 2008 did not de-risk; expert models themselves are not online (only the mixture is).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — ensemble infrastructure: weekly-updating regret-bounded combiner for GSE's sub-models; ledger notes it answers "model selection is unstable" and is the online counterpart to batch ledgers [1552] and [1548]; new capability (engine's weighting is static/heuristic).
- COACHING — regime-adaptation framing (2001 break): parallel regime-conditional BOA instances as the improvement experiment (early-season vs midseason vs playoff push).
- TRUST-SIGNAL — tail-risk halving (max DD 0.08 vs 0.17) is the stake-sizing safety signal; monitor weight entropy as a "follow-the-leader" health check (reject gate: entropy <0.5 bits for >80% of weeks with no risk reduction).

## Engine-actionable? (yes/no + one-line what)
Yes — ~1 engineer-week: weekly BOA layer over the K engine sub-models (Tuesday updates from realized cover-probability loss; separate favorite/underdog aggregations; prior-season weight pre-training), backtested 2024–2025 vs equal-weight baseline with gate of ≥1.5% relative Brier improvement AND Kelly-staked max drawdown ≤70% of best single expert's.

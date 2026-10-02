# docs/arxiv-program/research/2026-09-21/arxiv-deep/0796-decentralized-aggregation-llm-wagering.md
## What it is (1-2 sentences)
A mechanism-design paper (arXiv 2607.04389v1) proposing WALLA (advantage-aligned Wagering mechanisms for LLM Aggregation): multiple LLMs report predictions plus learned wagers, where the equilibrium best-response wager equals each model's expected score advantage over the pool — yielding learned per-instance weights with automatic zero-weight self-exclusion for edgeless sources. The deep-read ledger rates it ADAPT for GSE's per-game signal-source weighting.
## Key metrics/methods (formulas where given, else "not specified")
- WALLA net payout: π_i(p,w,y) = w_i (s(p_i,y) − b_{−i}(p_{−i},w_{−i},y) − c_3 w_i); b_{−i} = leave-one-out baseline; c_3 > 0 regularization.
- Theorem 3.2 (DSIC of prediction): truthful prediction is dominant strategy under any belief structure (unlike WSWM baseline's O(1/M) bias under mutable beliefs).
- Theorem 3.3 (advantage–wager alignment): best-response wager w_i*(p_i) = (A_i / 2c_3)^+ where A_i = E[s(p_i,Y) − b_{−i} | F_i]; non-positive advantage → wager zero (self-exclusion).
- WALLA I: b_{−i} = Σ_{j≠i} w_j s(p_j,y)/Σ_{j≠i} w_j (admits arbitrage). WALLA II: b_{−i} = s(q_{−i},y), q_{−i} = Σ_{j≠i} w_j p_j/Σ_{j≠i} w_j (no-arbitrage).
- Worst-case mechanism deficit ≤ (s̄ − s̲)² / 4c_3, independent of participant count M.
- Aggregation: linear pooling p̂_lin = Σ_i w_i p_i/W (minimizer of wager-weighted KL(p_i‖q)); logarithmic pooling p̂_log[y] ∝ Π_i p_i[y]^{w_i/W}.
- Wager learning: 2-layer MLP on last-layer hidden state per model; hindsight target w* = ((s_i − b_{−i})/2c_3)^+ recovered from own payout alone via s_i − b_{−i} = π_i/w_i + c_3 w_i; MSE objective.
- Metrics: AUC, ACC, ECE, Kendall's Tau (wager rank vs per-question Brier rank), MRR (is best model top-weighted), Dynamic Regret (aggregated vs oracle-per-question best).
## Data sources named
Four LLM participants (Gemma-2-9B, Llama3.1-8B, Llama3-Aloe-8B, BioMistral-7B); benchmarks PubMedQA, MedMCQA, MMLU (in-distribution), ARC-Challenge (out-of-distribution), BayesX (synthetic Bayesian forecasting). Code published: https://github.com/chailab-rutgers/WALLA. All datasets public.
## Findings (numbers and facts, not vibes)
- Scenario I (homogeneous + private context, M=4): WALLA I AUC 81.07 ± 0.58, ACC 87.00 ± 0.47 — matches StackedGen (81.99/87.76); UniformAvg AUC drops 70.29 → 63.10 as M grows 4→12, WALLA I holds 81.07 → 82.10.
- BayesX: WALLA I/II MRR = 100.00 at all M (always identifies the informed model); KLD 2.22 (M=4) vs UniformAvg 25.64; SelfCertainty KLD 61.44.
- Scenario II (heterogeneous, no context): MedMCQA WALLA I ACC 81.17 vs StackedGen 82.66, UniformAvg 76.45; MMLU WALLA II 86.98 vs StackedGen 87.09 (best individual Gemma2 87.18); ARC-Challenge OOD WALLA II 90.28 vs StackedGen 90.35.
- Wager rank vs per-question Brier rank K-Tau: 24.17/45.11/44.90 across datasets.
- Calibration incentive (Sec. 4.6): calibrated WALLA I reaches ACC 82.53 (MedMCQA), 87.68 (MMLU), 89.59 (ARC) — competitive with centralized StackedGen while fully decentralized.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER: per-game advantage-aligned signal weighting — train a small wager network per GSE signal source on realized per-game Brier-score advantage vs leave-one-out pool baseline using game features (injury flags, line movement, weather, rest differential); weights w_i* = (A_i/2c_3)^+ give per-game, self-excluding, uncertainty-aware combination. TRUST-SIGNAL: temperature-scaling heads per source are incentivized by the mechanism (Sec. 4.6) — calibration reward built into the weight learner.
## Engine-actionable? (yes/no + one-line what)
yes — Implement per-source advantage-aligned wager MLPs for GSE's ensemble layer with linear pooling, gated on ≥1.5% Brier improvement over equal weights and Dynamic Regret ≤30% of equal-weight-to-oracle gap on a season-2 backtest.

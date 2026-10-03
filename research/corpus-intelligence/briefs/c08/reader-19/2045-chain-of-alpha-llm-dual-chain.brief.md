# docs/arxiv-program/research/2026-09-21/arxiv-deep/2045-chain-of-alpha-llm-dual-chain.md

## What it is (1-2 sentences)
An LLM-driven dual-chain framework for mining formulaic alpha factors for quantitative trading (arXiv:2508.06312): a Factor Generation Chain proposes diverse seed formulas, and a Factor Optimization Chain iteratively refines each seed using backtest feedback and optimization history — fully automated, no human in the loop. Read verdict in the file: **ADAPT**.

## Key metrics/methods (formulas where given, else "not specified")
- Factor setup: signal v_t = f(X_{t−τ+1:t}) ∈ R^n; K factors aggregated by combination model g into composite z_t = g({v_{k,t}}; θ_g) ∈ R^n.
- Four-dimensional factor scorecard evaluated per factor immediately on generation: Score = Evaluate(f) = [S, C, E, D], where S (Strength) = cross-sectional RankIC vs future returns; C (Consistency) = RankICIR = mean(RankIC)/std(RankIC); E (Efficiency) = turnover rate of implied positions (lower = cheaper); D (Diversity) = min_{f_k ∈ F^e} (1 − Corr(f, f_k)).
- Binary gate: E = Check(f, S) ∈ {0,1}; pass → candidate pool F^e; fail → deprecated pool F^d (negative reference for the LLM).
- Generation: f^seed = LLM(F^e, F^d | P_generation) with chain-of-thought; self-evolving chain f^seed_{k+1} = Chain_generation(f^seed_1,…,f^seed_k). Optimization: LLM generates variants {f_k^{(1)}…f_k^{(m)}} guided by backtest results B and history H_k (low IC → boost signal strength; low RankICIR → improve stability).
- Fixed search budget: ≤1,000 candidates per method; top 100 by RankIC; identical downstream integration pipeline. Metrics: IC, RankIC, ICIR, RankICIR, annualized return (AR), IR — all as excess over index.

## Data sources named
China A-share: CSI 500 (mid-cap) and CSI 1000 (small-cap) constituent panels, 2010-01-01–2025-06-30. Splits: train 2010–2019, validation 2020–2021, test 2022-01-01–2025-06-30. Per stock-day: OHLCV + other market features. Prediction horizon h = 10 trading days; target = forward return t→t+10.

## Findings (numbers and facts, not vibes)
- Chain-of-Alpha best in 10 of 12 metrics (Table 1):
  - CSI 500 (IC/RankIC/ICIR/RankICIR/AR/IR): Chain-of-Alpha **0.0485/0.0771/0.3047/0.5013/0.1324/1.4178** vs AlphaGen 0.0460/0.0769/0.2786/0.4711/0.1150/1.2751; AlphaForge 0.0463/0.0638/0.3291/0.4630/0.0989/1.1918; LLM+CoT 0.0404/0.0711/0.2558/0.4870/0.0759/0.9659; Alpha 101 0.0345/0.0617/0.2170/0.4239/0.0568/0.7311.
  - CSI 1000: Chain-of-Alpha **0.0672/0.0902/0.4630/0.6228/0.1471/1.4043**, best in 5 of 6 (ICIR 0.4630 best).
- The AR/IR edge (the metrics that matter for real trading, per the reader) is the largest margin: e.g., CSI500 AR 0.1324 vs next-best AlphaGen 0.1150.
- Limitations noted by the reader: mining uses train+validation for generation while the integration model validates on the same validation set (validation-tuned selection bias); top-100-by-RankIC from 1,000 candidates is an uncorrected multiple-testing machine (no deflated-Sharpe/White correction); LLM used (model/size/temperature) not verified in the read; no transaction-cost modeling beyond turnover.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — automated signal-mining loop infrastructure (LLM + backtest loop replacing GP/RL search); the 4-D scorecard concept ports to any sports-formula discovery.

## Engine-actionable? (yes/no + one-line what)
Yes — port the dual-chain miner + [Strength/Consistency/Efficiency/Diversity] scorecard to sports formulas: LLM proposes ATS-cover-residual formulas from the nflverse feature dictionary, backtest engine scores them, variants fed back on failure (effort ~1–2 weeks; guardrail: Benjamini–Hochberg before any factor enters F^e). Acceptance gate: LLM chain's factor set beats GP baseline by ≥0.002 Brier on 2022–2025 with ≥5 factors surviving q<0.10.

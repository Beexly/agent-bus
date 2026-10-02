# arxiv-program/research/2026-09-21/arxiv-deep/2044-quantfactor-reinforce.md
## What it is (1-2 sentences)
QuantFactor REINFORCE (arXiv:2409.05144): an RL-based miner of formulaic alpha factors that drops PPO's critic (deterministic Dirac transitions make actor-critic bias unhelpful), uses plain REINFORCE with a provably variance-bounded greedy-rollout baseline, and shapes the reward with the Information Ratio (IR) — gated by a delayed, ramped, capped IR test — to mine "steady" factors that survive volatility regimes rather than short-term IC spikes.

## Key metrics/methods (formulas where given, else "not specified")
- MDP over RPN token sequences (from AlphaGen): states = partial RPN sequences; actions = next token from operator/feature vocabulary; transitions deterministic (Dirac); reward sparse: r(s_t,a_t) = 0 for t≠T, r(a_{1:T}) = IC-bar of completed formula vs 5-day returns at step T. Objective J(θ) = E_{a_{1:T}~π_θ}[r(a_{1:T})]. Syntactically valid but non-evaluable expressions (e.g., Log of negative) penalized/zeroed.
- Variance-bounded baseline: subtractive baseline from a greedy policy (argmax token each step); paper proves an upper bound on post-baseline variance lower than vanilla REINFORCE (Sec. IV-C, appendices)
- IR reward shaping: shaped term rewarding the factor's Information Ratio, gated by IR test activating after delay α = 9×10⁴ steps, ramping with slope η = 2.65×10⁻⁶, capped at δ = 0.3, weighted by λ = 0.02 (eq. 11)
- Policy: LSTM feature extractor (2-layer, hidden 128, dropout 0.1); 5 random seeds; compared on equal footing with PPO/A3C/TRPO sharing the same extractor (PPO clip ε=0.2, TRPO δ=1.1×10⁻⁵); hardware: single machine, i9-13900K + 2× RTX 4090
- RankIC(z'_t, y_t) = IC(r(z'_t), r(y_t)), r(·) = ranking operator (evaluation metric)
- Assumptions: deterministic transitions (true by construction); greedy-rollout baseline near-optimal enough to reduce variance (not proven optimal); IR stability in training transfers to live stability; IC-bar is the right factor-quality proxy

## Data sources named
Six equity-index constituent panels: CSI300, CSI500, CSI1000, SPX, DJI, NDX; raw data from Chinese A-shares + US markets via Qlib. Six features only: open, close, high, low, volume, vwap. Target: 5-day forward asset return. Splits: train 2016-01-01–2020-01-01, validation 2020-01-01–2021-01-01, test 2021-01-01–2024-01-01 (time-ordered). Prices forward-dividend-adjusted to 2023-01-15. Operators: cross-sectional (Abs, Log, +/−/×/÷, Larger, Smaller) and time-series (Ref, Mean/Median/Sum/Std/Var/Max/Min/Mad/Delta/WMA/EMA/Cov/Corr with lookback l). No new code URL stated.

## Findings (numbers and facts, not vibes)
- Table V IC / RankIC (5-seed std in parens). CSI300: MLP 0.0123/0.0178, XGB 0.0192/0.0241, LGBM 0.0158/0.0235, GP 0.0445/0.0673, AlphaGen 0.0500/0.0540, QFR 0.0588(0.0022)/0.0602(0.0014). CSI500: MLP 0.0158/0.0211, XGB 0.0173/0.0217, LGBM 0.0112/0.0212, GP 0.0557/0.0665, AlphaGen 0.0544/0.0722, QFR 0.0708(0.0063)/0.0674(0.0033).
- Vs AlphaGen's PPO on the six indices: QFR improves RankIC by 3.83% (headline claim), winning on all six, largest margin late in training.
- Shaping hyperparameters: η=2.65×10⁻⁶ best trade-off; α below 7×10⁴ harms quality (IR test too early); robust to δ (settled 0.3).
- Backtest: QFR's mined factors give the highest terminal cumulative return among all methods on CSI300 2021–2024 (Fig. 7), and the most PnL in all three CIMV volatility regimes, with the largest edge in the high-volatility period (Fig. 8).
- Ablation: removing either the greedy baseline or the IR shaping degrades learning curves on all six indices (Fig. 9).
- Caveats noted: shaping hyperparameters tuned on the same indices used for evaluation; optimizes IC but compares on RankIC (shaped rewards incomparable — metric sleight-of-hand); no strict point-in-time audit on vwap features; backtest ignores transaction costs; NFL panel (~32 teams × 18 weeks) is far sparser than equity cross-sections — sample efficiency unproven.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: new RL-based signal miner capability — no RL miner exists in the research map; complements ledgers 2042 (grammar) and 2043 (AlphaForge): QFR is an alternative miner to AlphaForge's generator-predictor, with the distinctive contribution being steadiness shaping. QFR-mined factors feed the AlphaForge-style zoo + dynamic combination. Sports adaptation: MDP over sports formula tokens (features = team-game stats + line-movement features), terminal reward = IC vs ATS cover residual; replace IR shaping with regime-robustness (IC per early/mid/late-season split, shaped reward = min or harmonic mean across splits, with α-delay gating).
- TRUST-SIGNAL: the "steadiness over raw IC" doctrine maps to signals surviving regime change; improvement experiment proposes stricter forward-walk IR shaping (worst-fold IC as shaped reward) targeting the failure mode of signals dying out of sample.

## Engine-actionable? (yes/no + one-line what)
yes — build the REINFORCE formula-signal miner on the nflverse team-game panel (train 2009–2018, val 2019–2021, test 2022–2025) vs random search + gplearn GP on equal GPU budget; ADAPT→build iff it beats GP by ≥20% relative RankIC on the 2022–2025 test block AND the top-10 mined factors each pass a White's-reality-check gate (p < 0.05) on the test block.

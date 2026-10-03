# docs/arxiv-program/research/2026-09-21/arxiv-deep/2055-synergistic-formulaic-alpha-rl.md

## What it is (1-2 sentences)
A PPO-based RL generator for formulaic alphas (arXiv:2401.02710) whose reward is *combination-level* pool performance (pool of 20) rather than individual alpha quality, plus self-bootstrapping — seeding the RL pool with its own previously generated alpha set instead of the hand-curated Alpha101. Read verdict in the file: **ADAPT**.

## Key metrics/methods (formulas where given, else "not specified")
- PPO-based RL alpha generator (extends baseline [8]) with two enhancements: (1) expanded operator/operand search space; (2) alpha-set initialization of a 20-slot pool — Non-Init (empty), Alpha101 init (top-5 by CSI300 test IC: formulas #-, 099, 061, 014, 035; ICs 0.024–0.035), or self-generated init (model's own prior set).
- "Synergistic" = reward computed on the combined 20-alpha pool so generated alphas complement rather than duplicate; the combination model may *remove* seeds during training.
- Evaluation metrics: Pearson IC and Spearman RankIC vs. 20-day forward returns. Backtest: Qlib, Top-50, swap 5, min hold 20 days, enter threshold 0.0, 2020-01–2021-12.

## Data sources named
Chinese A-shares: six features (Open, Close, High, Low, Volume, VWAP). Target: 20-day forward price-change %. Train 2009-01–2018-12, validation 2019, test 2020-01–2021-12. Survivorship-bias control: listing date as index-inclusion date; long-only. Five PPO seeds (0–4).

## Findings (numbers and facts, not vibes)
- CSI300 IC/RankIC, mean over 5 seeds: baseline [8] 0.045/0.058 → expanded space **0.069/0.073** → + Alpha101 init **0.071/0.071** → + self-generated init **0.085/0.087** (std 0.003) — near-doubling of IC; IC–RankIC gap collapses to within std.
- Pool-size study: expanded space beats original at every size 1/10/20/50/100; gains plateau at pool size 20 — no benefit at 50/100.
- Self-generated seeds beat Alpha101 seeds: the model bootstraps better priors than the human-curated set. Seed variance minimal across PPO seeds.
- Limitations noted by the reader: backtest P&L numbers not tabulated; test window only 2020–2021 (2 years, includes COVID crash/rebound — regime-specific); costs not stated; "synergy" asserted via combination reward but no explicit complementarity metric (e.g., correlation) reported.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — ensemble-assembly objective design: mining signals for marginal contribution to a pool rather than standalone quality.

## Engine-actionable? (yes/no + one-line what)
Yes — change the GSE mining reward from individual-signal RankIC to marginal-ensemble-contribution (Shapley-style value added to walk-forward Brier), self-seed each mining run with GSE's own previously accepted signals, and cap the combination pool at ~20 (the paper's plateau) to save compute. Acceptance gate: synergy-rewarded mining beats individual-rewarded mining on test ensemble Brier by ≥0.002 at pool size ≤20, else "synergy" is relabeled greedy forward selection.

# docs/arxiv-program/research/2026-09-21/arxiv-deep/2051-alphaagent-llm-regularized-decay-resistant.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2502.16789v2 (Tang et al., 2025): AlphaAgent, an LLM-agent framework for mining financial "alphas" (predictive factors) that counteracts alpha decay via three regularizations — AST originality enforcement, hypothesis–factor alignment, and complexity control — using only GPT-3.5-turbo agents in 5 evolutionary rounds × 20 trials. Verdict: ADAPT — the three decay countermeasures are the guards GSE's sports signal mining needs so its formula zoo doesn't collapse into the same crowded momentum clichés (sports analogue: every model betting the same steam).

## Key metrics/methods (formulas where given, else "not specified")
- Originality enforcement: factor fᵢ parsed into AST T(fᵢ); similarity s(fᵢ,fⱼ) = size of largest common subtree under structural isomorphism: s(fᵢ,fⱼ) = max_{tᵢ⊆T(fᵢ), tⱼ⊆T(fⱼ)} {|tᵢ| : tᵢ ≅ tⱼ} (eq. 5); penalize similarity to existing alpha zoo.
- Complexity control: ℛg(f,h) = α₁·SL(f) + α₂·PC(f) + α₃·ER(f,h) (eq. 4) — symbolic length, free-parameter count (window lengths), novelty/alignment term.
- Hypothesis–factor alignment: each factor must be semantically consistent with an explicit market hypothesis h, scored by the LLM (domain alignment objective, eq. 1).
- Symbolic assembly layer from primitives: dev success rate 0.83 vs 0.75 without; token efficiency 1.00 vs 0.81.
- LightGBM (max depth 4) on base alphas (intraday return, daily return, 20-day relative volume, normalized daily range) + mined alphas, forecasting next-day returns; cross-sectional Z-score normalization; backtest top-50 by predicted return, drop lowest 5 (top-k dropout).
- Metrics: IC/RankIC, ICIR, IR (excess over benchmark), AR, MDD. Splits: train 2015–2019 (~1,258/1,219 trading days), validation 2020 (253/243), test 2021-01–2024-12 (1,004/968 days). Costs: CSI500 0.0005 buy / 0.0015 sell; S&P500 0.0005 sell only.

## Data sources named
Qlib framework. CSI 500 (Baostock) and S&P 500 (Yahoo Finance), 2015-01–2024-12; features OHLCV only ($open/$high/$low/$close/$volume). Baselines: LSTM, Transformer, LightGBM, TRA, Stock-Mixer, AlphaForge, RD-Agent (GPT-4), DeepSeek-R1 (best-of-10), OpenAI-o1 (best-of-10). Proposed NFL test: nflverse 2009–2025, mine with/without regularizers, test 2021–2025 (rule changes, schedule expansion), metrics = test RankIC slope per season (decay rate), zoo pairwise AST similarity, Brier lift.

## Findings (numbers and facts, not vibes)
- Table 2 (best in ALL 10 columns): CSI 500 — AlphaAgent IC 0.0212 (next best TRA 0.0198), ICIR 0.1938, AR 11.00% (next best LSTM 4.96%), IR 1.488 (next 0.6225), MDD −9.36% (best; LSTM −9.68%). S&P 500 — IC 0.0056 (next DeepSeek-R1 0.0048), ICIR 0.0552, AR 8.74% (next 2.75%), IR 1.0545 (next 0.2604), MDD −9.10% (best; DeepSeek-R1 −15.34%).
- Achieved with GPT-3.5-turbo while RD-Agent used GPT-4 — the regularization, not the LLM, drives the edge.
- Ablation: factor-modeling constraints raise hit ratio 0.29 vs 0.16 (+81%); symbolic assembly token efficiency 1.00 vs 0.81.
- Limitations recorded: only 5 evolutionary rounds per trial (small search budget, possibly lucky-seed sensitive); OHLCV-only caps ceiling; slippage/market impact absent, top-50 daily rotation turnover undisclosed; LLM hypothesis-alignment scoring uncalibrated (no human audit); overlaps ledgers 2043 (AlphaForge, explicit baseline) and 2047 (AlphaEvolve AST pruning) — decay/crowding framing + AST-similarity regularizer are the new content.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Anti-crowding originality guard as the sports analogue of the public-signal problem (a signal identical to public grades/steam is worthless no matter how novel inside your own zoo): OTHER — this is signal-mining methodology, not QB/coach/OL/scheme content; INFERENCE applied to sports.
- Ledger's improvement experiments: (1) crowding-aware fitness penalizing resemblance to a public-signal proxy zoo (formulas reconstructed from public EPA/rest/market-move discourse); (2) adversarial alignment judge where a second LLM argues against the hypothesis — ledger-author proposals, not paper findings: OTHER.
- No QB behavioral patterns, coaching tendencies, OL unit play, trust-target quotes, or scheme matchup findings in the paper itself: all OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — bolt the three regularizers onto GSE's signal-mining loop (ledgers 2045/2046): AST-parse every candidate formula and penalize largest-common-subtree similarity vs. the live signal zoo; require a one-line sports hypothesis scored by an LLM judge; cap complexity via ℛg in fitness; auto-retire live signals on trailing-4-season slope decay — gate: ≥30% flatter per-season RankIC decay AND mean pairwise AST similarity ≤0.5 (vs ≥0.7 unregularized), with test Brier no worse.

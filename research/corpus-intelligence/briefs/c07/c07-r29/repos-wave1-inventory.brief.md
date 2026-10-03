# research/2026-09-28/github-nfl-sweep/repos-wave1-inventory.md
## What it is (1-2 sentences)
A code-grounded inventory (2026-09-28) of 29 "keeper" repos from 1,000 scanned GitHub NFL repos (10 pages × 100, sorted by recently updated), with methods grounded in actual source, not READMEs, and license terms stated per repo.

## Key metrics/methods (formulas where given, else "not specified")
- cbratkovics/fantasy-football-ai (MIT, ★16): dbt bronze/silver/gold marts; as-of feature engineering (no lookahead); per-position RF+XGBoost with committed artifacts; decision tables; OOS predictions + model card.
- ryanpmcintire/nfl_py3 (MIT, ★15): feature modules (qb_identity, roster_availability, sharp_book_movement, transaction_wire, recurrence_hazard, weather, officials); Bayesian team model; market-updated model; leader-median confidence; experiment registry with per-week JSON specs.
- mtsilverstein/Megatron (no license): encoder-only Transformer (d_model=96, 4 heads, 3 layers) with quantile heads (11 stats × 3 quantiles); trained checkpoints per season 2016–2025 with per-fold calibration; rookie-decision and consensus-benchmark diagnostics.
- chmoses98/nfl-edge-finder (no license): game/period/joint/player engines (v2–v5 player dists); one Monte Carlo (20,000 common rows) prices every market; Kalshi reconciliation weights fit OOS; joint engine refuses composites unless all legs evaluate on the same draws (`JOINT_MODEL_REQUIRED` otherwise).
- jdev-02/gooseline-model-hq (no license): closed-form weighted ridge with Gaussian predictive distribution over home margin (MAP prior, σ fit on residuals); Kalman team ratings; Kalshi edge rundowns.
- jlattanzi4/nfl-survivor-optimizer (MIT, ★2): objective Σ log p − λ·log fs (pick win prob vs field-survival EV); Hungarian assignment over weeks×teams; JS port with Python↔JS parity tests.
- dgrifka/nfl_simulator (MIT, ★5): one deserve-to-win number per game — OLS on 2016–2023 team-games maps (success rate, yards/play) → likely points; 40,000-draw bootstrap for DTW%; 75 numbered research docs in docs/research.
- sportsdataverse/nfl-ngs-raw (no license): scrapes nextgenstats.nfl.com/api JSON into committed raw library, logs 2009→present; sibling nfl-ngs-data reshapes to nfl_ngs_* datasets.
- sumedhk0/PanopticPigskin (AGPL-3.0, ★0): camera calibration from field geometry (homography decomposition, field detection, endzone paint); player tracking; Gaussian-splat 3D replay.
- ebhatt84/nfl-mcp (MIT, ★7): MCP server over DuckDB nflverse data — 8 tools with read-only SELECT guardrails.
- License rule: absent license = no license — method-level learning only, no code reuse (MIT repos only are reusable with attribution).

## Data sources named
GitHub API; nflverse/nfldata (364★, Lee Sharpe's corpus, R); sportsdataverse/sportsdataverse-py (118★, MIT); sportsdataverse/nfl-ngs-raw + nfl-ngs-data; rj7002/next-gen-scrapy; 3GO-47/rainman (defense-vs-position terminal, game logs + depth charts 2024→2026); seidcubro/player-prop-machine-learning-analysis-platform; tucknub/nfl-prop-war-room (1,310 files); spiflicate/yfs-api (MIT, Yahoo Fantasy TS wrapper); camp-injury-watch (HTML injury tracker).

## Findings (numbers and facts, not vibes)
- 29 keepers from 1,000 scanned; MIT-licensed (reusable): fantasy-football-ai, nfl_py3, nflalgorithm (confidence engine 0-100 = edge × stability × volume-certainty × volatility), nfl-survivor-optimizer, nfl_simulator, sportsdataverse-py, nfl-mcp, yfs-api, FrederikBolding/nfl-probabilities, balp24/fantasy-kai.
- Notable no-license repos (method-only): Megatron (Transformer quantile NFL predictor with per-fold calibration 2016–2025), nfl-edge-finder (20k-draw Monte Carlo pricing all markets; Kalshi reconciliation OOS; same-draw joint-model enforcement), gooseline (weighted-ridge Gaussian margin model + Kalman ratings), NFL-projections (R ensemble, pregame replay audit), nfl-prop-war-room (1,310 files, CI product gates with shadow-deploy/canary).
- Prop-edge (TS, no license) scans Kalshi, Polymarket, DraftKings with grade_engine + ml_engine.
- fade-the-chalk: contrarian board (model vs Robinhood/Kalshi vs Pinnacle vs crowd) + backtest.py + daily Kalshi JSON history.
- draftkings-live-odds: DraftKings push feed → Next.js + SSE, ~0.2s behind the book.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] MIT-with-attribution-only reuse rule (absent license = method-only learning); matches the repo's re-implementation rule.
- [TRUST-SIGNAL] Reusable MIT patterns: as-of/no-lookahead feature engineering, per-fold calibration artifacts, model cards, experiment registries with per-week JSON specs, pregame replay audits for parity.
- [OTHER] Joint-model same-draw discipline (JOINT_MODEL_REQUIRED) — a parlay/composite-bet modeling rule directly relevant to the GSE joint-probability layer.
- [OTHER] Confidence engine (edge × projection stability × volume certainty × volatility → Premium/Strong/Marginal/Pass) as a template for GSE's own confidence tiering.
- [OTHER] Deserve-to-win bootstrap (40k draws) and survivor EV objective (Σ log p − λ·log fs with Hungarian assignment) as reference methods.
- [OTHER] Kalshi reconciliation weights fit OOS and model-vs-Pinnacle-vs-crowd contrarian boards for market-edge lanes.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt (MIT, with attribution) the as-of feature-engineering discipline, experiment-registry-with-per-week-JSON pattern, JOINT_MODEL_REQUIRED same-draw rule, and confidence-engine decomposition as engine conventions; study no-license methods only.

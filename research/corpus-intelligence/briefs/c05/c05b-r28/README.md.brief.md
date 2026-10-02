# research/2026-09-28/github-nfl-sweep/README.md
## What it is (1-2 sentences)
Code-level inventory of a 2026-09-28 GitHub sweep of the NFL repo/wiki ecosystem — 1,000 unique repos scanned (Wave 1, 701 filtered candidates), wiki pages (Wave 2), prior research filed (Wave 3) — narrowed to 29 code-grounded keepers and a ranked top-10 with GSE fit verdicts, plus two deep reads.
## Key metrics/methods (formulas where given, else "not specified")
- Wave 1: 10 pages × 100 = 1,000 unique repos → 701 candidates → 29 keepers. Wave 2: 5 wiki pages, 5 keepers (wiki surface = spam past page 2).
- Top-10 keepers' methods: (1) dbt bronze/silver/gold + as-of feature engineering + per-position RF/XGBoost + decision-policy tables (cbratkovics/fantasy-football-ai, MIT, 16★); (2) Bayesian team model, market-updated model, leader-median confidence, agentless declarative-spec→reliability-check→bootstrap experiment registry (ryanpmcintire/nfl_py3, MIT, 15★); (3) Monte Carlo game/period/player engines with common random numbers, joint composite pricing on the SAME draws never multiplying marginals, market reconciliation weights (chmoses98/nfl-edge-finder, no license — method only); (4) encoder-only PyTorch quantile transformer, per-season 2016→2025 checkpoints, calibration.json per fold (mtsilverstein/Megatron, no license — method only); (5) 0–100 confidence engine tiered Premium/Strong/Marginal/Pass, pipeline state machine (mattleonard16/nflalgorithm, MIT, 9★); (6) MCP server over DuckDB nflverse, 8 tools (ebhattad/nfl-mcp, MIT, 7★); (7) survivor optimizer maximizing log p − λ·log field-survival, Hungarian assignment over weeks×teams (jlattanzi4/nfl-survivor-optimizer, MIT, 2★); (8) NGS API scrape→reshape pipeline (sportsdataverse/nfl-ngs-raw, no license — method only); (9) broadcast camera calibration via homography decomposition, Gaussian-splat 3D replay (sumedhk0/PanopticPigskin, AGPL-3.0 — study only); (10) DraftKings push feed → Next.js + SSE, ~0.2s behind the book (Twoos123/draftkings-live-odds, no license — method only).
- License posture: MIT = reuse with attribution; no license = all-rights-reserved, method-only learning; AGPL-3.0 = study only, never incorporated.
## Data sources named
GitHub repo search (`/search/repositories?q=NFL&sort=updated`), GitHub wiki search; inventories at `repos-wave1-inventory.md`, `wikis-wave2-inventory.md`, `prior-work-filed.md` (same dir).
## Findings (numbers and facts, not vibes)
- Closest architecture reference to GSE's total-signal doctrine: cbratkovics/fantasy-football-ai (as-of/no-lookahead = exactly what "backtest every rule" needs); its weak-signal registry pattern = what GSE's rule store should copy.
- Parlay correlation pricing benchmark: nfl-edge-finder's joint-engine common-random-numbers approach — benchmark GSE's DFS payout sim correlation layer against it.
- DFS slate provider gap: draftkings-live-odds is the live-feed architecture reference (~0.2s behind the book).
- NGS program: sportsdataverse/nfl-ngs-raw is the proven scrape→reshape pipeline shape.
- The space is being worked by agent fleets, not just humans (tucknub/nfl-prop-war-room, bsr-0/nfl-player-projections, ryanpmcintire/nfl_py3 show `.claude/`/CLAUDE.md/pipeline gates).
- No registry-packages surface exists for NFL via API; web registry search is unusable (anonymous containers).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-reconciliation weights and confidence-tier presentation (mattleonard16 tiered Premium/Strong/Marginal/Pass) for posted picks.
- TRUST-SIGNAL: leader-median confidence and reliability-check experiment registry (nfl_py3) as calibration/quality patterns.
- SCHEME: joint-simulation correlation pricing (nfl-edge-finder) for multi-leg/DFS payout modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — copy the nfl_py3 weak-signal registry pattern into GSE's rule store and benchmark the DFS payout-sim correlation layer against nfl-edge-finder's common-random-numbers joint engine.

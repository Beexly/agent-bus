# arxiv-program/research/2026-09-21/arxiv-deep/1310-llm-soccerarena-benchmarking-llms-on-real-world.md
## What it is (1-2 sentences)
Ledger for Schröder et al. (2026) "LLM-SoccerArena: Benchmarking LLMs on Real-World Predictions in Sports" (arXiv:2607.24573) — a prospective live benchmark protocol registering unresolved soccer matches, collecting timestamped schema-validated LLM forecasts before kickoff, and scoring them factorially (model × web access × prompting × horizon) against de-vigged market odds. Verdict: ADAPT as GSE's LLM-vs-engine forecast benchmark and evidence-synthesis module.
## Key metrics/methods (formulas where given, else "not specified")
- Forecast: p_i = (p_i,H, p_i,D, p_i,A) ∈ Δ₂; Brier BS_i = Σ_c (p_i,c − y_i,c)²; log loss LL_i = −log p_i,Yi; tournament k-set marginals ρ_q,j ∈ [0,1], Σ_j ρ_q,j = k_q.
- Design: 104 matches × 7 LLMs × 3 horizons × 2 access × 2 prompting = 8,736 match forecasts; 15 tournament questions × 7 × 2 × 2 = 420.
- Significance: 10,000 two-sided sign-flip permutations on within-match metric differences with Holm correction; 95% CIs via match bootstrap.
- Evidence taxonomy from 1,456 rationales (GLM 5.2 annotator + blinded human audit of 196): recent form, odds, injuries/lineups, rankings, tactics.
## Data sources named
2026 FIFA World Cup (104 matches among 48 teams + 15 tournament questions). Public dataset: github.com/jonas-srd/world_cup_LLM_rank (CSV, 2026-07-21). Platform: llm-soccerarena.com (MIT). Models tested: GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro Preview, Grok 4.3, DeepSeek V4 Pro, Qwen 3.7 Max, Mistral Large 2512 (via OpenRouter).
## Findings (numbers and facts, not vibes)
- T−24h complete-panel Brier: Gemini 0.506 [0.433, 0.587] … Mistral 0.546 [0.493, 0.604]; NO pairwise model comparison significant after Holm (smallest adjusted p = 0.055).
- Open-book (web search) vs de-vigged closing market at T−2h: Gemini 0.497 vs market 0.498 — essentially market-equal.
- Web access is the biggest lever: open-book improvement Brier 0.535→0.512, paired Δ=0.0228, 95% CI [0.0044, 0.0403], Holm p=0.045 (4.3% reduction); model choice is small.
- Horizon: T−24h vs T−2h open-book Δ=0.0021 Brier — forecasting closer adds almost nothing.
- Forecast diversity: mean pairwise correlation of H/D/A probabilities 0.943; mean JS divergence 0.0044; equal-weight ensemble improves average member by only 0.0047 Brier — LLM ensembles are highly redundant.
- Open-book evidence deltas: recent form +68.0 pp, odds +60.2 pp, injuries/lineups +53.0 pp mentioned; generic unsupported claims −18.1 pp. Search used in only 84.5% of open-book forecasts; adds ~22,306 input tokens, ~$0.110, +3.92s latency per forecast.
- Prompt order no effect (Δ=−0.0008, Holm p=0.693). Calibration: broadly diagonal but some ranges deviate; highest-confidence group Brier 0.423 vs lowest 0.620 (73.1% vs 49.8% modal accuracy) — confidence informative but NOT calibrated.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — prospective, timestamped, Brier-scored, calibration-checked evaluation protocol; evidence-synthesis taxonomy (odds/form/injuries-lineups/rankings/tactics); anti-naïve-averaging finding (corr 0.943 argues for one well-prompted forecaster, not LLM ensembles).
- OTHER — LLM forecasting benchmark methodology; no NFL validation yet.
## Engine-actionable? (yes/no + one-line what)
Yes — build a prospective NFL benchmark harness (register upcoming games; minimal-metadata LLM prompts at T−24h/T−2h; schema validation; timestamped archive; Brier/log-loss vs engine vs closing market), gated on replicating the ≥0.02 open-vs-closed book effect and an LLM+engine opinion pool improving engine Brier ≥0.005; plus an "engine-informed" condition feeding GSE features to the LLM.

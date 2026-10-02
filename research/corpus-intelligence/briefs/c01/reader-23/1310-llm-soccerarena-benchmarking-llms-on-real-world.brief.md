# arxiv-program/research/2026-09-21/arxiv-deep/1310-llm-soccerarena-benchmarking-llms-on-real-world.md
## What it is (1-2 sentences)
Deep-research ledger on Schröder et al. (2026) arXiv:2607.24573, "LLM-SoccerArena": a prospective, timestamped LLM sports-forecasting benchmark protocol — 7 LLMs × 104 2026 World Cup matches × 3 horizons × open/closed-book × 2 prompting strategies = 8,736 match forecasts plus 420 tournament forecasts, scored by Brier/log loss vs de-vigged market odds with sign-flip permutation testing. Verdict: ADAPT — as GSE's LLM-vs-engine forecast benchmark harness and evidence-synthesis module.
## Key metrics/methods (formulas where given, else "not specified")
- Match forecast: p_i = (p_i,H, p_i,D, p_i,A) ∈ Δ₂. Brier: BS_i = Σ_c (p_i,c − y_i,c)²; log loss: LL_i = −log p_i,Yi.
- Tournament k-set: marginal probabilities ρ_q,j ∈ [0,1], Σ_j ρ_q,j = k_q. Knockout advancement: a_i,H + a_i,A = 1.
- Kicktipp-style scoring: 5 exact score / 2 goal-difference / 1 tendency.
- Significance: 10,000 two-sided sign-flip permutations on within-match metric differences with Holm correction; 95% CIs via match bootstrap.
- Protocol: event registration → cron forecasts at stage opening, T−24h, T−2h via OpenRouter (minimal prompts: competition/teams/venue/kickoff only) → deterministic schema validation + one repair call → archive → resolve post-outcome.
- Key results: T−24h complete-panel Brier: Gemini 0.506 [0.433, 0.587] … Mistral 0.546 [0.493, 0.604]; NO pairwise model comparison significant after Holm (smallest adjusted p = 0.055, GPT vs Mistral).
- Open-book T−2h vs de-vigged closing market: Gemini Brier 0.497 vs market 0.498 — essentially market-equal.
- Open-book improvement: Brier 0.535 → 0.512; paired closed−open Δ = 0.0228, 95% CI [0.0044, 0.0403], Holm p = 0.045 (4.3% reduction) — web access is the biggest lever, model choice is small.
- Horizon: T−24h vs T−2h open-book Δ = 0.0021 Brier — forecasting closer adds almost nothing.
- Forecast diversity: mean pairwise H/D/A probability correlation 0.943; mean Jensen–Shannon divergence 0.0044; equal-weight ensemble improves average member by only 0.0047 Brier.
- Search used in only 84.5% of open-book forecasts (model-specific 48.4%–100%); open-book adds ~22,306 input tokens, ~885 output tokens, +3.92s latency, +$0.110 per forecast.
- Prompt order: score-first vs probabilistic Δ = −0.0008, CI [−0.0044, 0.0029], Holm p = 0.693 (no effect); probabilistic prompting yields +3.98 pp more draw scorelines.
- Evidence analysis (1,456 rationales, GLM 5.2 annotator + blinded human audit of 196): open-book mentions recent form +68.0 pp, odds +60.2 pp, injuries/lineups +53.0 pp; generic unsupported claims −18.1 pp.
- Calibration: broadly diagonal with some ranges deviating; within-cell confidence ranking: highest-confidence group Brier 0.423 vs lowest 0.620; modal accuracy 73.1% vs 49.8% — confidence is informative but NOT calibrated.
- GSE spec: prospective NFL harness — register upcoming games, prompt 1–2 LLMs with minimal metadata at T−24h and T−2h, record timestamped {home, away} probability vectors + expected scores + confidence + retrieved evidence, validate/ archive/resolve, score Brier/log loss vs GSE engine vs market. Gate: open-vs-closed book ≥0.02 Brier replication AND LLM+engine opinion pool ≥0.005 Brier better than engine alone.
## Data sources named
Public dataset: https://github.com/jonas-srd/world_cup_LLM_rank/blob/main/data/worldcup2026-full-prediction-dataset-2026-07-21.csv. Platform: https://www.llm-soccerarena.com/ (MIT). Code: https://github.com/jonas-srd/world_cup_LLM_rank/tree/main. Models: GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro Preview, Grok 4.3, DeepSeek V4 Pro, Qwen 3.7 Max, Mistral Large 2512 (ledger notes these futuristic model names weaken direct model-to-model conclusions).
## Findings (numbers and facts, not vibes)
- Web access is the dominant lever (Brier 0.535 → 0.512, Δ=0.0228, Holm p=0.045); model choice is small (no pairwise significance after Holm); horizon is negligible (Δ=0.0021).
- LLMs are highly redundant forecasters: pairwise correlation 0.943, JS divergence 0.0044, ensemble adds only 0.0047 Brier — argues against naïve LLM averaging, for a single well-prompted forecaster with web access.
- Best open-book LLM ≈ de-vigged market (0.497 vs 0.498 Brier).
- Self-reported confidence is informative within relative ranking (0.423 vs 0.620 Brier; 73.1% vs 49.8% modal accuracy) but NOT calibrated.
- Limitations: "prospective" claim rests on authors' own unverifiable timestamped archive; single tournament (104 matches), small sample; hypothetical/futuristic model names; rationales ≠ private reasoning; no NFL/US-sports validation.
- New GSE capability: no existing LLM-vs-engine forecast benchmark or calibrated evidence-synthesis protocol.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: LLM forecast-evaluation protocol (prospective harness, Brier/log-loss scoring, evidence taxonomy) and the finding that LLM ensembles are redundant — do not naively average LLM forecasters. No QB/coaching/OL/scheme/trust-signal content.
## Engine-actionable? (yes/no + one-line what)
yes — build the prospective NFL LLM-vs-engine Brier-scored benchmark harness with open/closed-book conditions, then test whether an LLM+engine opinion pool beats the engine alone by ≥0.005 Brier; keep LLM synthesis as evidence/QA input, not a naïve ensemble member.

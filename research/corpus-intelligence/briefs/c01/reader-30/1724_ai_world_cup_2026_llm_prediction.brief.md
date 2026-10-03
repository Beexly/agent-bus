# arxiv-program/research/2026-09-21/arxiv-deep/1724-ai-world-cup-2026-llm-prediction.md

## What it is (1-2 sentences)
Deep-read ledger of Shianifar & Faiud (2026), arXiv:2608.03416v1 — ten LLM assistants made one frozen pre-tournament forecast of the full 48-team/104-match 2026 FIFA World Cup under identical conditions, then scored with a transparent additive scheme and audited via stage decomposition. Verdict: ADOPT — the prospective single-snapshot tournament-forecasting protocol (frozen snapshot + common schema + additive scoring + audit) is directly adoptable for GSE's NFL season/playoff evaluation.

## Key metrics/methods (formulas where given, else "not specified")
- Additive scoring (equations 1–12): per group match S_m = 5·I_exact + 3·I_outcome + 2·I_winner + I_GD (max 11, 9 for exact draws); per group S_g = 5·I_winner + 5·I_top2 + 3·N_qual + 2·N_rank; knockout S_progression = 2·C_R32 + 4·C_R16 + 6·C_QF + 8·C_SF + 12·C_Final; S_placing = 20·I_champion + 10·I_runner-up + 8·I_third + 5·I_fourth. Total = group matches + standings + knockout.
- Proposed GSE protocol: freeze pre-season snapshot (rosters, lines, depth charts as of cutdown day); common JSON schema — per-game (score, outcome, confidence) for all 272 regular-season games, division rankings, full 14-team playoff bracket, Super Bowl champion; mirror the additive structure (game + standings + playoff-progression + placing); lock predictions before Week 1, score after the Super Bowl.
- Mandatory modifications from the paper's own critique: add proper scoring (Brier/log-loss) alongside points; normalize component variances or report component ranks separately; never display model self-reported confidence without calibration.

## Data sources named
- Frozen pre-tournament snapshot issued to all models; ten submissions from seven providers: GPT-5.5 Thinking, GPT-5.5, Qwen 3.7, Gemini, DeepSeek, Claude Sonnet 4.6, Mistral Medium 3.5, Perplexity, Perplexity Pro, Grok.
- Ground truth: all 104 World Cup matches; Spain beat Argentina 1–0 in the final.
- Materials frozen to commit f83ea90; three contemporaneous 2026 World Cup LLM benchmarks used for external context.

## Findings (numbers and facts, not vibes)
- Final totals: GPT-5.5 Thinking 744 (GS 254 / ST 248 / KO 242), GPT-5.5 717 (261/264/192), Gemini 699, Qwen 3.7 687, DeepSeek 599, Claude Sonnet 4.6 591, Mistral 568, Perplexity 552, Perplexity Pro 530 (KO 0), Grok 496 (KO 0).
- Knockout SD 88.65 vs group-match 8.65 and standings 12.20 — knockout drives essentially all separation: corr(total, KO) r = 0.986 (Spearman 0.945); corr(total, group-match) r = 0.055; corr(total, standings) r = −0.103.
- Match-level accuracy names a different winner: Claude Sonnet 4.6 had best group outcome accuracy 63.89% (46/72) but finished 6th overall; champion GPT-5.5 Thinking only 58.33% (42/72). Exact-score accuracy 6.94–13.89% across models.
- Only GPT-5.5 Thinking picked champion Spain; champion picks: Brazil 4, France 3, Argentina 2, Spain 1.
- Self-reported confidence uncorrelated with outcome accuracy (r = −0.060) and total score (r = −0.067) — confidence is noise.
- Perplexity Pro ranked 1st on group-match points and 1st after standings, then 9th overall with 0 knockout points — scoring design, not forecasting skill alone, determined the final order.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation methodology — GSE's internal model leaderboards must decompose composite scores by stage and never conflate the highest-variance component's ranking with overall skill.
- TRUST-SIGNAL: uncalibrated self-reported model confidence is pure noise (r ≈ −0.06); any GSE product surface displaying confidence must carry calibration evidence.
- OTHER: prospective (pre-event locked) designs avoid the contamination problem GSE faces backtesting LLMs on historical seasons they may have memorized.

## Engine-actionable? (yes/no + one-line what)
Yes — implement `gse/eval/tournament_protocol.py` (frozen pre-season snapshot + common JSON schema + additive game/standings/playoff scoring + stage-decomposition audit) and pilot retrospectively on the 2025 season, prospectively for 2026.

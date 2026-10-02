# arxiv-program/research/2026-09-21/arxiv-deep/1724-ai-world-cup-2026-llm-prediction.md
## What it is (1-2 sentences)
Deep-dive ledger of Shianifar & Faiud (arXiv:2608.03416v1): ten LLMs from seven providers made a single pre-tournament forecast of the full 2026 FIFA World Cup (48 teams, 104 matches) under an identical frozen snapshot, common JSON schema, and transparent additive scoring, with a full audit of where leaderboard separation comes from. Verdict: ADOPT the prospective snapshot + common-schema + stage-decomposition evaluation protocol for GSE's NFL season/playoff forecasting.
## Key metrics/methods (formulas where given, else "not specified")
- Per group match: S_m = 5·I_exact + 3·I_outcome + 2·I_winner + I_GD (max 11, 9 for exact draws).
- Per group: S_g = 5·I_winner + 5·I_top2 + 3·N_qual + 2·N_rank.
- Knockout: S_progression = 2·C_R32 + 4·C_R16 + 6·C_QF + 8·C_SF + 12·C_Final (cumulative); S_placing = 20·I_champion + 10·I_runner-up + 8·I_third + 5·I_fourth. Total = group matches + standings + knockout.
- Audit: stage decomposition, rank trajectories as components are added, confidence-vs-accuracy analysis, Pearson correlations between component and total scores (n=10, descriptive).
- Mandatory GSE modification: add proper scoring rules (Brier/log-loss) alongside points; normalize component variances or report component ranks separately.
## Data sources named
One frozen pre-tournament snapshot issued to all models; predictions collected manually via consumer interfaces; ground truth: all 104 matches played, Spain beat Argentina 1–0 in the final. Materials, raw responses, and scoring code released (frozen to commit f83ea90).
## Findings (numbers and facts, not vibes)
- Final: GPT-5.5 Thinking 744 (GS 254/ST 248/KO 242), GPT-5.5 717, Gemini 699, Qwen 3.7 687, DeepSeek 599, Claude Sonnet 4.6 591, Mistral 568, Perplexity 552, Perplexity Pro 530, Grok 496.
- Knockout SD 88.65 vs group-match 8.65 and standings 12.20; corr(total, KO) r = 0.986 (Spearman 0.945); corr(total, group-match) r = 0.055; corr(total, standings) r = −0.103 — knockout creates essentially all separation.
- Match-level accuracy disagrees with total: Claude Sonnet 4.6 had best group outcome accuracy 63.89% (46/72) but finished 6th; champion GPT-5.5 Thinking only 58.33% (42/72). Exact-score accuracy 6.94–13.89% across models.
- Only GPT-5.5 Thinking picked Spain; champion picks: Brazil 4, France 3, Argentina 2, Spain 1.
- Self-reported confidence uncorrelated with accuracy (r = −0.060) and total score (r = −0.067) — confidence is noise.
- Perplexity Pro ranked 1st on group-match points and 1st after standings, then 9th overall (0 knockout points) — scoring design, not forecasting skill alone, determined the order.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: uncalibrated self-reported model confidence is noise (r ≈ −0.06) — never display without calibration evidence; unnormalized composite leaderboards rank the highest-variance component, not overall skill (mandatory check before any GSE leaderboard ships).
- OTHER: methodological template for GSE's season-long/playoff evaluation (frozen pre-season snapshot, common JSON schema: 272 games + division rankings + 14-team bracket + champion, additive scoring, stage-decomposition audit); prospective design avoids LLM contamination when backtesting historical seasons.
## Engine-actionable? (yes/no + one-line what)
Yes — implement `gse/eval/tournament_protocol.py` for NFL: frozen pre-season snapshot, common forecast schema, additive points + proper-score (Brier/log-loss) leaderboards, and stage-decomposition audit before publishing any model ranking; run prospectively from 2026 with a 2025 dry-run pilot.

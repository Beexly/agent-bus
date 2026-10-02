# docs/engine/research/2026-09-29/awesome-apps-gse-leverage-map-2026-09-29.md
## What it is (1-2 sentences)
A 2026-09-29 leverage map of Shubhamsaboo/awesome-llm-apps (140,163 stars, Apache-2.0) ranking 45 RAG/agent/skill patterns for ADAPT-or-BORROW reimplementation as GSE's own TypeScript, tiered by payoff (Tier 0 do-first through Tier 4 internal tooling) plus a DON'T-BOTHER list.

## Key metrics/methods (formulas where given, else "not specified")
- TOON (Token-Oriented Object Notation): ~64% token reduction vs JSON for tabular data — proposed for LLM-heavy prompts.
- DevPulseAI signal pipeline: sources → deterministic SignalCollector (normalize, dedupe via source:id) → RelevanceAgent scores 0–100 (novelty/impact/actionability/timeliness) → risk assessment → synthesized digest.
- Hybrid dense (pgvector) + sparse (full-text) retrieval with rerank on Postgres — maps 1:1 to Neon.
- Agentic typed RAG: exact-quote citation verification + deterministic refusal gate on weak retrieval.
- Mixture-of-agents: layered proposers + aggregator for projection synthesis, floor/ceiling from the spread.
- Net inventory: 45 leverage items (11 ADAPT-now, 34 ADAPT-later/BORROW-IDEA) + ~45 skips; nothing reusable directly (all Python/Streamlit).

## Data sources named
awesome-llm-apps repo contents only (agent_skills catalog, 24 RAG tutorials, ~40 agent/app templates). No sports data sources. Cost datapoints: `first-reader` skill has a blank license field (must verify); Coher Embed-4 + Gemini APIs flagged as paid.

## Findings (numbers and facts, not vibes)
- Repo method: full depth-1 clone, three parallel inventory lanes, consolidated and ranked.
- Tier 0 (do first): thinking-out-loud skill (echo-brief protocol before acting), TOON serialization, P01–P12 RAG failure taxonomy (~200 lines, "most portable item"), commit-archaeologist (`gse-why`), dependency-doctor.
- Tier 1 (trust layer): scope-creep-detector as missing PR gate (addresses stranded/unrelated-files commits), hybrid RAG for internal research-corpus QC loop, corrective RAG state machine, 5-tier skill eval framework (structural lint → security scan → trigger/routing evals → deterministic script tests → behavioral evals).
- Tier 2 (intake, fills T4 player signals / T5 off-field): DevPulseAI = the T4/T5 intake architecture (deterministic collectors write raw rows to Neon, LLM scorers score relevance/risk); presser pipeline (earnings_call_analyst_agent pattern) for coach press conferences/injury-report pressers with quote attribution; NL-EDA agent (LLM writes SQL/DuckDB against Neon) as variance-model calibration harness.
- Tier 3 (eval/provenance): critique-loop backtest harness (propose → backtest → critique → revise → re-backtest), hash-chained audit trail for pick provenance ("every pick public, every result posted").
- Tier 4: multimodal video moment finder (ffmpeg 1fps frames → cross-modal embeddings → cosine search) for locating specific plays in full-game footage for seconds-long telestrated clips; contextualai LMUnit rubric evals; knowledge-graph over research corpus (high effort, parked).
- Standing rule applied: INGEST-AND-LEARN — learn the method, reimplement in TypeScript, never copied code.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Coach press conferences / injury-report pressers as signal source, quote-attributed, tone-shift detection ("we're evaluating") — COACHING, TRUST-SIGNAL.
- Cross-referencing public signals (news, weather, depth charts, practice reports) to flag anomalies (practice report contradicts injury designation) — OTHER (signal pipeline architecture).
- Multimodal clip-sourcing for seconds-long telestrated X clips (real footage, 2–4s, commentary-led) — OTHER (content pipeline).
- Everything else: infra/process/eval architecture — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — DevPulseAI pipeline pattern is the concrete T4/T5 intake architecture; TOON + P01–P12 failure taxonomy + refusal-gate QC are near-zero-cost trust-layer upgrades.

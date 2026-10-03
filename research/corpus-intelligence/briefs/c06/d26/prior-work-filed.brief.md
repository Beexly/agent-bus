# research/2026-09-28/github-nfl-sweep/prior-work-filed.md
## What it is (1-2 sentences)
Wave 3 of the GitHub NFL sweep: a "no rework" parking file for research already completed 2026-09-27/28, including a full verdict on carter-tyra/AIntelligent-Oddz (architecture-only skeleton), four flagged follow-up teardowns, a dead-end registry-packages search, and surfaced repos from Waves 1–2 queued for future teardowns.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas in this file). Method captured at the categorization level only: repo torn down = checked for prediction method, license, and code reuse value; "no rework" filing to keep corpus-rule locality.

## Data sources named
- GitHub repos: carter-tyra/AIntelligent-Oddz (Next.js + FastAPI, 107KB, pushed 2024-12-11, 0★, no license), carter-tyra/pgatour-ai (pushed 2026-06-10), carter-tyra/pga-tour-ai-betting-dashboard, carter-tyra/soc-triage-agent (pushed 2026-04-30), carter-tyra/sauce (shadcn UI distribution platform), nflverse/nflfastR (546★), nflverse/nfl_data_py (440★), nflverse/nflreadpy (223★), DimaKudosh/pydfs-lineup-optimizer (449★), BenBrostoff/draftfast (299★), agentscope-ai/DojoZero (49★), ryanpmcintire/nfl_py3 (MIT), chmoses98/nfl-edge-finder (no license), mtsilverstein/Megatron (no license), sportsdataverse/nfl-ngs-raw (no license).
- GitHub registry-packages search endpoint (github.com/search?q=NFL&type=registrypackages — 52 anonymous container images, no usable names; no global package-search API exists).

## Findings (numbers and facts, not vibes)
- carter-tyra/AIntelligent-Oddz: full-stack sports-prediction skeleton, but **every backend file is a stub** (`def predict(self, data): pass` — nfl_predictor, ESPN collector, odds service, feature engineering all empty). Verdict: architecture-only; dashboard page structure and odds-comparison service shape worth a glance; no method value; no code reuse (unlicensed).
- Four follow-up teardowns flagged but NOT done: pgatour-ai (more recent/active betting dashboard), pga-tour-ai-betting-dashboard, soc-triage-agent (cybersecurity agent, adjacent to agent-fleet work), sauce (shadcn UI platform).
- Registry-packages search was a dead end: 52 anonymous container images (dev, sha-*, latest) with no identifiable package names; recommendation is repo search (`topic:nfl`) instead, covered in Wave 1.
- Pre-sweep top-star NFL repos: nflverse loaders nflfastR 546★ / nfl_data_py 440★ / nflreadpy 223★; DimaKudosh/pydfs-lineup-optimizer 449★ (DFS optimizer — benchmark candidate against `apps/web/lib/fantasy/`); BenBrostoff/draftfast 299★ (DK lineup automation); agentscope-ai/DojoZero 49★ (AI agents on realtime sports data making predictions — teardown candidate for method comparison).
- Wave 1–2 additions queued for future teardowns: ryanpmcintire/nfl_py3 (market-updated model + agentless experiment pipeline, MIT); chmoses98/nfl-edge-finder (joint parlay engine; comparison points for GSE payout-sim correlation layer, no license — method only); mtsilverstein/Megatron (quantile transformer fantasy projections, no license — method only); sportsdataverse/nfl-ngs-raw (NGS scrape pipeline shape, no license — method only).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] DojoZero (AI agents on realtime sports data making predictions) — agentic prediction architecture, teardown candidate for method comparison.
- [OTHER] Megatron (quantile transformer fantasy projections) — ML method candidate (quantile transformers for projections).
- [OTHER] nfl-edge-finder (joint parlay engine) — parlay/correlation modeling comparison points for GSE's payout-sim correlation layer.
- [OTHER] nfl_py3 (market-updated model + agentless experiment pipeline, MIT) — market-aware modeling + experiment pipeline design.
- [OTHER] pydfs-lineup-optimizer (449★ DFS optimizer) — benchmark candidate for GSE's fantasy lineup tooling in `apps/web/lib/fantasy/`.
- [OTHER] nfl-ngs-raw (NGS scrape pipeline shape) — ingestion-pipeline design reference, method only.
- [OTHER] soc-triage-agent — adjacent to agent-fleet work, not sports-engine.
- [OTHER] GitHub registry-package search for NFL is a dead end — sweep-methodology note (use `topic:nfl` repo search).

## Engine-actionable? (yes/no + one-line what)
Yes — queue the five flagged teardowns (DojoZero, Megatron, nfl-edge-finder, nfl_py3, nfl-ngs-raw) against GSE's agent architecture, quantile projections, payout-sim correlation, market-updated modeling, and NGS ingestion; DojoZero and Megatron are the highest-priority methods to tear down first.

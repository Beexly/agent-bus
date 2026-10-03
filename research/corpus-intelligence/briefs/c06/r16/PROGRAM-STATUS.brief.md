# arxiv-program/research/2026-09-21/arxiv-program/PROGRAM-STATUS.md
## What it is (1-2 sentences)
Status and handoff document for the arXiv deep-research program: the target is 750 arXiv papers with verdict ADAPT or ADOPT (REJECTs never count and must be replaced), and as of 2026-09-21 ~18:49 CDT the verified count was 750/750 valuable (724 ADAPT + 26 ADOPT).
## Key metrics/methods (formulas where given, else "not specified")
- Verified valuable count: 750 / 750 (724 ADAPT + 26 ADOPT), verified against ledger files on disk with zero verdict mismatches, zero REJECTs counted, zero missing files.
- Phase 1 ("the 500") closed at 510 verified ledgers (365 valuable).
- Ledger template requires 14 sections per paper (citation, full-text read statement, research question, method/model, math/equations/assumptions, dataset/schema, features/target, validation design, exact numerical results + baselines, code/data availability, leakage/limitations, GSE overlap, implementation spec, reproducible test, numeric acceptance/rejection gate, improvement experiment, verdict).
- Tracker schemas: `state/ledger-tracker.jsonl` (510 phase-1 ledgers), `state/ledger-tracker-750.jsonl` (phase-2, empty at write time), `state/master.jsonl` (865-paper candidate corpus), `state/reserve-100.jsonl` (100-paper reserve), `phase2/phase2-candidates-bayes.jsonl` (582 new candidates), `phase2/assignments/assign-01..49.jsonl` (49 reader batches of ~12 papers each).
- `fulltext-cache.tar.gz` holds 1,112 cached full texts (phase-1 + phase-2 fetches); fetcher is `scripts/fetch_hybrid_fulltext.py` (ar5iv HTML → text; PDF+pdftotext fallback).
## Data sources named
arXiv papers (via ar5iv HTML and PDF), the 1,300-row arXiv research spreadsheet referenced in related audits, `state/existing-research-map.md` (Sports repo corpus, Drive, Gmail research for dedup).
## Findings (numbers and facts, not vibes)
- 750/750 valuable verified 2026-09-21 ~18:49 CDT: 724 ADAPT + 26 ADOPT.
- Phase 1: 510 verified ledgers, 365 valuable; phase-1 framing was rejected by Garrett ("penalty continuation") — his standard was 500 papers *active and worth adapting*.
- Reader waves for phase 2 were not yet launched at consolidation; the immediate next work was spawning reader workers over the 49 assignment batches.
- Search territory for remaining work: calibration/uncertainty, ratings (Elo/Glicko/TrueSkill), market microstructure/CLV, Kelly sizing, Bayesian/state-space, props/fantasy/DFS optimization, tracking, injuries/causal, weather, ensembles, pick selection/abstention, LLM/NLP for sports.
- Operating rule stated: "Do not report milestones as complete until the verified valuable count confirms them. Never claim activity without direct evidence (files on disk, tracker lines, git commits)."
- `gse-grok-build-sandbox` is isolated by design — never wire or touch it.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the verified-count/never-claim-without-evidence doctrine is a rigor standard for research-driven development.
- OTHER: program administration; the 14-section ledger template is a reusable research-R&D template, not engine intelligence.
## Engine-actionable? (yes/no + one-line what)
No — documents research program status and workflow, not a transferrable method or metric.

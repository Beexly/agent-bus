# docs/ops/total-signal-wiring-program.md

## What it is (1-2 sentences)
The master operating document for the "total-signal" program: wire every signal into the GSE prediction engine under a mandatory **research → wire → weight → calibrate → test → polish** loop, with a corpus-first research rule, Sonnet-5.5 cost-discipline delegation architecture, per-session handoff contracts, and an honesty promotion gate (uncalibrated signals compute in shadow, never publish).

## Key metrics/methods (formulas where given, else "not specified")
- Promotion gate: every wired number carries `engine-inline:<file>#<fn>` provenance plus calibration state (calibrated / shadow / uncalibrated); wiring ≠ validation, calibration is.
- Session 0 mission: build the total-signal inventory — for each family record source, wiring state, refresh cadence/latency, and the `file:line` where it lives or should live; rank families by leverage on prediction accuracy using the arXiv GSE-application notes. Output: `docs/research/2026-09-30/total-signal-inventory.md`.
- Handoff contract per session: `docs/ops/handoffs/<YYYY-MM-DD>-<signal-family>.md` with mission, changes (files/commits/PR), proof (test counts + CI run IDs, green required), calibration state of every touched signal, and exact resume point with `file:line` pointers.
- Initial queue: (1) devig adapter math fix — one adapter reads American odds as decimal prices (`1/-110` → negative implied probability), the other sum-normalizes while reporting "additive"; neither has a production caller; (2) player signals table — 0 rows; (3) composeLedger production wiring — no production callers; (4) pick'em intakes (DK Pick6, Underdog, PrizePicks, Sleeper, Action Network — verified live, behind default-off flags) promotion; (5) Kalshi/Polymarket free market-data APIs as calibration/sentiment inputs; (6) NGS weighting (internal only); (7) Odds API backfill wiring (account active, 20K credits/month).
- System state (2026-09-30): production healthy — `/api/health` 200, settlement HEALTHY, ledger 441 rows, guard exit 0; engine suite: 859 files, 6,297 tests, 0 failed; graded pool rebuilt 2024 → 2025 data (2026-09-28); nflverse confirmed live with 35,490 player-week rows, 2026 weeks 1–3 in the DB.
- Hard doctrines: NGS internal-only; public site shows projections and rankings only; INGEST-AND-LEARN (untested items are `UNTESTED — QUEUED FOR EVALUATION`, never SKIP/DEAD); branch-only Neon DB testing on throwaway branches (auto-expire 7d); provenance honesty (52 fabricated claims → 0); research standard = real consensus across multiple outlets.
- Latency is a requirement, not a nice-to-have: the inventory records refresh cadence per family.

## Data sources named
- Corpus: `docs/arxiv-program/research/<YYYY-MM-DD>/` + `MASTER-PAPER-INDEX.md` (1,000-valuable-papers program, 585/750 verified valuable as of 2026-09-26); `docs/research/<YYYY-MM-DD>/` dated drops; NGS 48-post @NextGenStats inventory + metric glossary; `Beexly/gse-competitive-intel` (310 dossiers, 1,670 evidence files); `docs/INDEX.md`.
- Live/plumbed but unwired: Odds API (20K credits/month, backfill lane); NGS feed; Kalshi/Polymarket free market-data APIs + `warproxxx/poly_data` (GPL-3.0) for backfills; two Kalshi bot chassis (`ryanfrigo/kalshi-ai-trading-bot`, `OctagonAI/kalshi-trading-bot-cli`) queued for head-to-head paper testing; TimesFM 2.5 (Apache-2.0, commercial-safe forecaster; 3.0 weights research-only); nflverse adapter; Sleeper market signals; five pick'em intakes (DK Pick6, Underdog, PrizePicks, Sleeper, Action Network).
- Garrett's open decisions: `reservePaidCallSlot` budget call (fails open); mimo orphan branches (8 found, 2 big awaiting triage; draft PRs #913–#918 are ports, not missions); Neon `neondb_owner` password rotation; delete `neon-storage.env` from Downloads; decide `ep-floral-queen` branch; HF support ticket for the Inference Providers 403 (account-level block: "exceeded monthly spending limit", $0.00 spent — a support ticket fixes it, no token ever will; local-CPU bge-m3 is the $0 workaround).

## Findings (numbers and facts, not vibes)
- The player signals table is 0 rows — "the empty core of the total-signal doctrine." No adjustment layer exists yet despite plumbing (nflverse adapter, Sleeper market signals, source router, lineage).
- composeLedger has no production callers; wiring it changes what production publishes.
- `reservePaidCallSlot` fails open — pacing decision, needs Garrett's budget call; do not change unilaterally.
- Four merges closed the 2026-09-29 outage loop: provenance defect (`3e074c58`), ledger-tail shard (`0360e92b`), health-alert null-manufacture + pool-monitor false-ok (`14b1f4a`, `e1020eb7`); PR #966 (SURF-21 ledger receipt) merged.
- Machine-discovery lane: DeepSeek = theorist/protocol engineer, no code execution; no numeric claim published without Motif-lab execution; 4 lab runs queued.
- arXiv target: 750 + 250 Garrett-discretionary papers. DFS process system: 10 process gates; the gap is live-feed registration (`activeDfsSlate()` falls back to the sample slate).
- Never touch `gse-grok-build-sandbox`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: this is the master wiring contract — the promotion gate and inventory rank order directly govern which signal families (QB behavior, coaching, OL) get wired first and under what calibration labeling.
- OTHER: nflverse 35,490 player-week rows (2026 weeks 1–3 live) is the concrete dataset backing QB/OL/coaching behavioral profiles; the empty player-signals table is the named gap where those profiles land.
- OTHER: TimesFM 2.5 (Apache-2.0) vs TimesFM 3.0 (research-only) is a license-cleared forecaster candidate for the engine's probabilistic layer.

## Engine-actionable? (yes/no + one-line what)
Yes — it is the wiring contract itself: any subagent wiring a signal family must follow the inventory's leverage order, attach engine-inline provenance + calibration state, and close with a handoff doc and green CI.

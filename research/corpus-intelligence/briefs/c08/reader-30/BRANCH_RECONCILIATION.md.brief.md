# docs/strategy/BRANCH_RECONCILIATION.md
## What it is (1-2 sentences)
Living plan (2026-06-22, proven-edge session) for reconciling five fragmented branches: trunk = `research/proven-edge`, concept-by-concept landing, never a blind merge; names the canonical version of every duplicated concept (favoring the one wired to real data).
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Branch inventory: `main` (production, Vercel `sports-web`, at `d52b62a` "#51 launch hardening"); `claude/blissful-hamilton-d7edx1` (de-paywall pivot + `postinstall: prisma generate` fix, merges to main first); `research/proven-edge` = trunk (CLV coverage invariant, settlement-health probe, tamper-evident pre-result receipt + Prisma model, segmented CLV, Wilson intervals, RESEARCH_MAP, PATH_TO_PROVEN_EDGE charter); `claude/laughing-wozniak-gyryjx` (OOS split harness + champion/challenger promoter `oos-split.ts`/`model-promoter.ts`, 14 tests; 6 cockpit pages; DFS optimizer); `claude/happy-goodall-8lkxrb` (`lib/gse` ~25 pure/typed DB-free modules, 118 tests: trust-loop, drift, promotion-readiness, Black-Litterman, Glicko2, Dixon-Coles).
## Data sources named
None (real-data primitives named: CLV grading, calibration, devig, Merkle proof-of-record in `packages/prediction-engine` + `apps/web/lib/performance`).
## Findings (numbers and facts, not vibes)
- Duplicate concepts resolved: one receipt, one CLV, one calibration source of truth — always the wired version (proven-edge's `pick-proof-receipt.ts`/`proof-of-record.ts`, `clv.ts`/`clv-capture.ts`/`lib/performance/clv-*`, `probability-calibration.ts` isotonic/Murphy/ECE) over `lib/gse`'s pure twins.
- Cherry-pick target: `laughing-wozniak`'s OOS promoter as the model-promotion base; reconcile gse's readiness scorer into its gate.
- `lib/gse` landing order: new modeling math (Dixon-Coles, Glicko2, Black-Litterman) → drift/PSI on real inputs → promotion-readiness into the promoter gate → decision/UX surfaces last; gated by consuming real persisted data, no duplication, green suite, no fabricated public values.
- Owner-only vs agent-doable split; discipline: trunk is what ships on real data; everything else earns its way onto trunk by wiring to reality.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the "wired to real data" canonical rule, Merkle proof-of-record receipts, Wilson-interval CLV, and settlement-health probes are the trust primitives the engine ships on.
- OTHER: champion/challenger OOS promoter + Glicko2/Dixon-Coles/Black-Litterman adapters are model-layer methods queued for the engine.
## Engine-actionable? (yes/no + one-line what)
Yes — the wiring order is the engine's build queue: OOS promoter first, then Dixon-Coles/Glicko2/Black-Litterman adapters, then drift/PSI on real inputs, with "one source of truth per concept" as the anti-duplication rule.

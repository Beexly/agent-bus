# docs/architecture/ADVANCED_SYSTEMS_SPINE_2026-06-22.md
## What it is (1-2 sentences)
The 2026-06-22 architecture doc defining GSE as a "governed proof platform": fewer uncontrolled parts, every number with a receipt, clearance-gated sources, claim gates, leashed agents, justified paid ops — with an explicit status model (Built ≠ Wired ≠ Proven ≠ Public-safe). It lays out the layer split (Vercel web / Neon system of record / Oracle VPS workers / object storage / ClickHouse-DuckDB-later), a risk register, a 30/60/90 roadmap, and 7 acceptance gates.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Key mechanisms named: CLV grading + coverage + settlement-health + segmented CLV + Wilson bounds + tamper-evident receipts (minted in `process-sport.ts`) + commit-reveal slate + anchor CLV; hard public-claim state machine (no receipt→no claim, no lock line→no CLV, no sample→no headline); banned-phrase scanner; real SHA-256 in proof primitives; sample/coverage/calibration gates for win-rate/CLV claims.

## Data sources named
The Odds API (only paid dependency); free-first cleared sources: nflverse, ESPN public, Open-Meteo (weather). Source rights registry-gated via `clearance-engine.ts`, noted as not yet wired into every adapter (partial).

## Findings (numbers and facts, not vibes)
- Stack facts: Next.js 14 / React 18 on Vercel (current Next 16.x); Postgres on Neon as system of record; Oracle Always-Free VPS worker stack defined but Vercel cron still doing ingestion/settlement; raw payloads planned for R2/S3 with hash-only metadata in PG.
- 30/60/90 plan: wire Integrity Ledger into operator routine, `migrate deploy` so receipts accrue, slate-freeze cron (freeze-once pre-kickoff), stale-unsettled/coverage alarm sink, hash-only payloads + pruning, cut odds refresh + settlement to VPS workers; 30–60: unify public claim gates into one Public Claim Compiler, per-route CDN cache headers, persist Kalshi as hard CLV anchor, persist agent-run records; 60–90: cherry-pick OOS/champion-challenger promoter onto trunk (calibrated model prob → real receipt `modelProb`), DuckDB analytics lane, proof-card pilot, Next 16 upgrade branch evaluation.
- 7 acceptance gates: nothing PUBLIC_SAFE without PROVEN or owner gate; admin/auth/checkout/webhooks/cron no-store; production default not unlimited raw DB storage; paid ops blocked without justification; external agent actions impossible without owner gate + draft/pending; clearance blocks unregistered/permission-required/unauthorized-intent/unapproved-tool; banned phrases fail, win-rate/CLV need sample + coverage gates.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hard public-claim state machine (no receipt→no claim, no sample→no headline) — the TRUST-SIGNAL backbone
- Integrity Ledger pairing with live `/cockpit/integrity` view: TRUST-SIGNAL
- Banned-phrase scanner + claim-inflation gates (sample/coverage/calibration): TRUST-SIGNAL
- Wilson bounds for coverage/proportion claims: TRUST-SIGNAL
- Layer-split and worker cutover plan: OTHER
- Trust gate banning "AI picks" phrasing (AI = analyst/narrator, data = source of truth): TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
No — architecture/governance roadmap; no sports metrics or signals to wire. (INFERENCE: the proof primitives and claim gates are the enforcement layer for everything the engine publishes.)
